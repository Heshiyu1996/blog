# 事件循环（EventLoop）
> 有没有想过，为什么有时候SetTimeout定时不准确？
> 
> 更新时间：2019-04-24

[[toc]]

## 异步队列的种类
事件循环有 2 种异步队列： **宏任务队列** 和 **微任务队列**。

其中，对于 “宏任务队列”，是 **一个一个** 执行；对于 “微任务队列”，是 **一队一队** 执行。

### 宏任务（Macro Task）
> 常见的有：script（整体代码）、setTimeout、setInterval、setImmediate、Ajax回调、I/O操作、DOM事件监听

宏任务由 **事件触发线程** 维护。

### 微任务（Micro Task）
> 常见的有：Promise.then、catch、finally

微任务队列由 **JS引擎线程** 维护。

## 执行栈
**执行栈** 是一个 **存储函数调用的栈结构**，遵循 **先进后出（FILO）** 的原则。
> 栈内的每个 栈帧 代表一个函数的 “执行上下文”
> 
> “执行上下文” 包含：这个函数的作用域、上层作用域的指向、函数的参数、函数中声明的变量等。

<img src="./img/Eventloop-1.png" width="300px" />


## 事件循环步骤
### EventLoop

<img src="./img/Eventloop-2.png" width="500px" />

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7692705759/6664/1039/a261/3df410cf067621699815fc787178460d.png" width="500px" />

解释如下：
 - 1、**JS引擎** 首先会把 **主代码块** 放入 `宏任务队列`（此时`宏任务队列`只有一个任务，那就是**主代码块**）
 - 2、从`宏任务队列`中取出一个`宏任务`
 - 3、从上往下执行。
    - 如果遇到`同步代码`，直接执行、输出
    - 如果遇到setTimeout之类的`宏任务`，将其进`宏任务队列`
    - 如果遇到Promise.then之类的`微任务`，将其送进`微任务队列`
 - 4、若 当前执行栈 为空，**JS引擎** 会去检查`微任务队列`是否有任务在排队
 - 5、执行`微任务队列`中的`微任务`（先进先出）
 - 6、`微任务队列中`的`微任务`全部执行完毕，**本轮事件循环结束**
 - 7、回到第2步，检查`宏任务队列`中是否有未执行的`宏任务`，继续下一轮循环

**总结：** 先执行宏任务，然后执行该宏任务产生的微任务。微任务执行完毕后，回到宏任务进行下一轮循环。

> 注意：`Ajax请求完毕后`触发的回调函数会进入`宏任务队列`

参考链接：[JavaScript的Event Loop机制](https://www.jianshu.com/p/87a9e0068dd8)

## 示例


下面这两道题，会输出什么？
```js
console.log(1)

setTimeout(() => {
    console.log(2)
}, 0)

Promise.resolve().then(() => {
    console.log(3)
    Promise.resolve().then(() => {
        console.log(4)
    }).then(() => {
        console.log(5)
    })
}).then(() => {
    console.log(6)
})

Promise.resolve().then(() => {
    console.log(7)
}).then(() => {
    console.log(8)
})

console.log(9)

// 1 9 3 7 4 6 8 5 2
```

```js
async function async1() {
  console.log('a')
  await async2()
  console.log('b')
}
async function async2() {
  console.log('c')
}
console.log('d')
setTimeout(function () {
  console.log('e')
}, 0)
async1()
new Promise(function (resolve) {
  console.log('f')
  resolve()
}).then(function () {
  console.log('g')
})
console.log('h')

// d a c f h b g e
```

总结：
 - `await紧跟`的Promise相当于new Promise，会**立即执行**
 - `await下面`的代码，相当于promise.then(代码)，视作**微任务**
 - `Promise内代码执行完`、`Promise.resolve()`，都会开始执行promise.then，视作**微任务**
 - setTimeout属于**宏任务**（由 **事件触发线程** 维护）
 - 要注意Promise的**状态变更时机**


## Node事件循环
事件循环是 node 处理非阻塞I/O 的机制。

Node中的事件循环有6个阶段：
 - **timers**：执行 `setTimeout`、`setInterval` 回调

 - **I/O callbacks**：处理上一轮循环中 少量 未执行的 I/O 回调
 
 - **idle、prepare**：内部使用

 - **poll**：检索新的I/O事件、 执行 I/O 回调

 - **check**：执行 `setImmediate` 回调

 - **close callbacks**：执行一些关闭回调（如：socket的 `close` 回调）

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7721374670/7ac5/762e/6b78/cdcb48bbdc54dc48212fb346c3ceefd1.png" width="300px" />

**事件循环的阶段顺序：**

输入数据 

-> 轮询（poll） 

-> 检查（check） 

-> 关闭事件回调（close callback） 

-> 定时器检测（timers） 

-> I/O事件回调（I/O callbacks） 

-> 闲置阶段（idle prepare） 

-> 轮询（poll）

日常开发中绝大部分异步任务都是在 poll、check、timers 这 3 个阶段处理。

### poll
poll是个至关重要的阶段：
 1. 是否存在定时器，且时间到了？
    - 是：timers
 2. 是否有回调函数？
    - 是：拿出队列中的方法依次执行
 3. setImmediate回调是否需要执行？
    - 是：进入check
 4. 否，则一直poll。等待回调被加入到队列中，并立即执行回调

<img src="https://ask.qcloudimg.com/http-save/yehe-5471653/8ev9bx6fbh.jpeg?imageView2/2/w/1620" width="500px" />

### process.nextTick
独立于 事件循环 的 任务队列。

**执行时机**：每个阶段执行完之后、并且 微任务队列 执行前

### 与 浏览器事件循环 的不同
 - 浏览器端，“微任务” 在 “本轮事件循环结束前” 执行完
 - Node 11 之前，`nextTick`、`微任务` 在 **事件循环的各个阶段之间** 执行
 - Node 11 之后，`nextTick` 是 `微任务` 的一种。都是在每个宏任务执行完后，会执行该宏任务对应的微任务（与 “浏览器事件循环” 类似）

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8021909839/77ba/5dd7/f4f0/0d5b79e87a732461e44aa23e547972df.png" width="400px" />

## 参考
- [node EventLoop](https://cloud.tencent.com/developer/article/1601176)
