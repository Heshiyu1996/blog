# React Fiber
> Fiber是React16中新的协调引擎。
>
> 它的主要目的是使Vitrual DOM可以进行增量式的渲染（来自React官方文档）。
>
> update: 2020-1-3

[[toc]]

## 浏览器里的“单处理器调度”
[复习单处理器调度策略](./../../computeracy/scheduling-strategy/)

我们可以**把浏览器中JavaScript执行环境当作是一台单处理器**。

1、JS引擎是单线程运行的；

2、JS引擎、渲染引擎在同一个渲染线程；

3、浏览器需要负责页面的：**JS解析和执行、绘制、事件处理、静态资源加载和处理等等**；
> 这些任务可以类比成“一个个进程”

4、如果某个任务长期霸占CPU，浏览器会出现卡死状态。

---

对于前端框架，“解决卡死”有三个方向:
 - 优化每个任务，让它有多快就多快，挤压CPU运算量
    > Vue使用的是这种。因为响应式机制可以让Vue更精确地进行节点更新。

 - 快速响应用户，不阻塞用户的交互
    > React使用的是这种，所以引入了Fiber架构。

 - 尝试Worker多线程
    > 保证状态和视图的一致性很麻烦。

## 以前的Reconciliation不可中断！（引入Fiber的原因）
**通过比较Virtual DOM树的变化，找出需要变动的节点，然后同步更新它们，这个过程称为Reconciliation（协调）**。
> Reconciliation是CPU密集型操作，相当于“长进程”。和进程调度的思想一样，我们应该让高优先级的进程（或者短进程优）先运行，不能让长进程长期霸占资源。

### 引入Fiber前
因为Reconciliation不可中断，所以React会霸占着浏览器资源，很可能会导致用户交互得不到响应，或者掉帧（用户感知到卡顿）。

### 引入Fiber后
React通过Fiber架构，让自己的Reconciliation过程变成可中断，“适时”地让出CPU执行权，他的好处是：
 - 让浏览器及时响应交互
 - 分批延时对DOM进行操作
 - 给浏览器一点喘息的机会，他会对代码进行编译优化（JIT）及进行热代码优化，或者对reflow进行修正

所以说，**Fiber是React 16中新的协调引擎**。

那它是如何使Reconciliation变得可中断的呢？

## 参考链接

- [Virtual DOM 及内核](https://zh-hans.reactjs.org/docs/faq-internals.html#what-is-react-fiber)

- [这可能是最通俗的 React Fiber(时间分片) 打开方式](https://juejin.im/post/5dadc6045188255a270a0f85#heading-2)