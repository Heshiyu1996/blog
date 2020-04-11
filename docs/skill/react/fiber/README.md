# React Fiber
> `React Fiber`是React16中新的协调引擎。
> 它可以实现任务分割，让调度算法（reconciliation）能够暂停、恢复
>
> update: 2020-04-11

[[toc]]


## Fiber的原因
:::tip
React的核心流程分为两部分：
 - reconciliation（调度算法）
    - 更新state和props
    - 调用生命周期钩子
    - 生成virtual dom
    - 通过diff算法，对比新旧virtual dom
    - 确定是否需要重新渲染
 - commit（操作dom节点更新）

:::

原因：大量的组件渲染会导致主进程长时间被占用，导致出现卡顿和掉帧的情况。因为在之前的调度算法中，React对组件树是通过**同步递归、遍历渲染**，并且无法暂停和恢复。

## 原理
`React Fiber`可以实现任务分割，让调度算法（reconciliation）能够暂停、恢复。

主要原理是**将任务分割成一个个独立的小任务。根据不同的优先级，将这些小任务分散到浏览器的各个空闲期间执行，充分利用主进程的事件循环机制。**

### 大致数据结构
```js
class Fiber {
    constructor (instance) {
        this.instance = instance;
        // 指向第一个 child 节点
        this.child = child
        // 指向父节点
        this.return = parent;
        // 指向第一个兄弟节点
        this.sibling = previous.
    }
}
```

## 具体实现机制
### 暂停和恢复
React V16将`reconciliation`进行了重构（`stack reconciler` -> `fiber reconciler`），变成了具有链表、指针的 **单链表树遍历算法**。通过指针映射，每个单元都记录着上一步、下一步，从而变得可以被暂停和恢复。

### 分散执行
通过两个新API：`requestIdleCallback`、`requestAnimationFrame`

#### requestIdleCallback
浏览器提供的事件循环空闲期的回调函数。低优先级的任务交给`requestIdleCallback`

`requestIdleCallback`API：
```js
window.requestIdleCallback(
    // 浏览器在空闲时，会执行这个回调，同时会给回调传入一个dealine对象
    // 在dealine对象中包含着浏览器目前有多少时间供我们执行
    callback: (dealine: IdleDeadline) => void,
    // 为了避免浏览器因繁忙且无剩余时间导致的饿死，可传入一个超时时间来强制让浏览器执行回调。
    option?: { timeout: number }
)
```

#### requestAnimationFrame
高优先级的任务交给`requestAnimationFrame`














<!-- 

## 浏览器里的“单处理器调度”
[复习单处理器调度策略](./../../computeracy/scheduling-strategy/)

我们可以**把浏览器中JavaScript执行环境（即Renderer进程）当作是一台单处理器**。

打开Chrome-任务管理器，可以发现：
![alt](./img/fiber-3.png)

1、浏览器是**多进程**的，且其下各个进程的职责如下：
```
主进程（Browser进程）：
    - 浏览器的界面交互（前进、后退等）
    - 负责各个页面的管理（创建、销毁其它进程）
    - 将Renderer进程得到的内存中的Bitmap，绘制到界面上
    - 静态资源下载

浏览器内核（Renderer进程）：
    - JS引擎线程：JS解析和执行；维护微任务
    - GUI渲染线程：布局/绘制
    - 事件触发线程：事件处理；维护宏任务

GPU进程：最多一个，用于3D绘制等

第三方插件进程：每种类型的谷歌浏览器插件对应一个进程，仅当使用了该插件时才创建
```
> "Browser进程"和"Renderer进程"之间可以通过 `RendererHost接口` 取得联系。

2、JS引擎是**单线程运行**（在Renderer进程下）；

3、JS引擎线程、GUI渲染线程**互斥**；

4、如果**JS引擎中的某个任务**长期霸占CPU，浏览器会出现卡死状态。

### 对于前端框架，“解决卡死”有三种思路:
 - **优化JS引擎中的每个任务。**
    > Vue使用的是这种。因为响应式机制可以让Vue更精确地进行节点更新。

 - **快速响应用户，不阻塞用户的交互**
    > React使用的是这种，所以引入了Fiber架构。

 - **尝试Worker多线程**
    > 保证状态和视图的一致性很麻烦。Worker相当于JS引擎向浏览器申请开一个worker线程。"JS引擎线程"和"worker线程"之间通过特定方式通信（但worker线程完全受控于主线程，而且不能操作DOM，JS引擎依然是单线程的）。

## 以前的Reconciliation不可中断！（🤔引入Fiber的原因）
**通过比较新、旧Virtual DOM树来找出变动了的节点，然后同步更新它们，这个过程称为Reconciliation（协调）**。
> Reconciliation是CPU密集型操作，相当于“长进程”。
> 
> 类比“进程调度”，我们应该让高优先级的进程（或者短进程）先运行，不能让长进程长期霸占资源。

### 引入Fiber前
因为**Reconciliation不可中断**，所以React会霸占着**JS引擎线程**，很可能会导致用户**得不到响应**或**卡顿**。
> 原因：JS引擎线程、GUI渲染线程**互斥**。

### 引入Fiber后
**Fiber是React 16中新的协调引擎**。
> 它可以**使Reconciliation过程变成可中断**，“适时”地让出CPU执行权。

好处：
 - 让浏览器及时响应交互
 - 分批延时对DOM进行操作
 - 使浏览器会对代码进行编译优化（JIT）及进行热代码优化，或者对reflow进行修正（？）


那它是如何使Reconciliation变得可中断的呢？

## 什么是Fiber
Fiber的思想：**可以中断React的渲染过程。中断后React会主动将控制权交回浏览器，让位给高优先级的任务，等到浏览器空闲后再恢复渲染。**

### 让出控制权有哪些需要注意的？
2个关键点：
 - 如何**主动归还控制权**？😆
 - **什么时候**归还？⏰

#### 1、主动归还控制权
因为浏览器没有抢占机制，所以要采用**合作式调度（Cooperative Scheduling）机制**。
 > 与“合作式调度”相反的是“抢占式调度”（Preemptive Scheduling）

![alt](./img/fiber-1.png)

**合作式调度机制**的大致思想：

**React向浏览器申请一个“有期限的执行权”；（申请时间片）**

➡️ **浏览器在每帧内执行完任务（一般是“绘制”）后就会执行回调，告诉React能借多长时间；**

➡️ **借完后React要按照约定，“主动”归还控制权给浏览器**。
 > 当然超时不还，浏览器也是没办法的🤷‍♂️。全凭自律，互相信任。
```{2,3,4,5,6}
因为浏览器（严格说是Renderer进程）在一帧内可能会执行下列任务（执行顺序基本固定）：
 - 处理用户输入事件（事件触发线程）
 - JS执行（JS引擎线程）
 - requestAnimation调用
 - 布局Layout（GUI渲染线程）
 - 绘制Paint（GUI渲染线程）
```
在每一帧内，如果浏览器在执行完上面的任务后还有剩余时间，就会执行`requestIdleCallback`中传入的回调，并传入“能借给React的时间长度”：

![alt](./img/fiber-2.png)

`requestIdleCallback`API：
```js
window.requestIdleCallback(
    // 浏览器在空闲时，会执行这个回调，同时会给回调传入一个dealine对象
    // 在dealine对象中包含着浏览器目前有多少时间供我们执行
    callback: (dealine: IdleDeadline) => void,
    // 为了避免浏览器因繁忙且无剩余时间导致的饿死，可传入一个超时时间来强制让浏览器执行回调。
    option?: { timeout: number }
)
```

`IdleDeadline`接口：
```js
interface IdleDealine {
    didTimeout: boolean // 表示任务执行是否超过约定时间
    timeRemaining(): DOMHighResTimeStamp // 任务可供执行的剩余时间
}
```
> 目前`requestIdCallback`只有Chrome支持。React自己实现了一个（利用`MessageChannel`将回调延迟到“绘制Paint”之后执行）[查看源码](https://github.com/facebook/react/blob/master/packages/scheduler/src/forks/SchedulerHostConfig.default.js)

 > 另外，在理想情况下，每个时间片应该划分为16ms，因为人类能感知到最低限度的频率是每秒60帧（1000ms / 60 = 16 ms）。



#### 2、什么时候归还？
因为在浏览器中没办法判断后面是否有更高优先级的任务，所以要通过**超时检查的机制**来判断是否要归还控制权。

**超时检查的机制**的大致思想：

**给React一个时间范围（在requestIdleCallback中的回调传入的时间范围timeRemaining）**

➡️ **React在每执行完一个小任务后检查是否超时；**

➡️ **若超时就停止执行，将控制权归还给浏览器。**


## 参考链接

- [从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://juejin.im/post/5a6547d0f265da3e283a1df7)

- [Virtual DOM 及内核](https://zh-hans.reactjs.org/docs/faq-internals.html#what-is-react-fiber)

- [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.im/post/5dadc6045188255a270a0f85#heading-2) -->