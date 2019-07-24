# WebWorker
> `Web Worker`是**HTML5**的新功能，用于实现JS的多线程操作。

*但Web Worker子线程`完全受主线程控制`，无法操作DOM，所以**本质上JS还是单线程的**。*

它包含两部分：
 - **Worker对象**
    - 该对象暴露给 **创建该Web Worker的线程** 用的
 - **WorkerGlobalScope**
    - 这是一个用来表示 **新创建的Worker的全局对象**（也是Worker线程内部使用的对象）

外界：
 - 实例化一个worker对象
 ```js
 var worker = new Worker('./my/path/to/async.js')
 ```
 - 发送消息给worker内部
 ```js
 worker.postMessage('Hello')
 ```
 - 注册事件处理程序
 ```js
 worker.onmessage = function(e) {
     // ...
     worker.terminate() // 关闭 Worker线程
 }
 ```
worker内部
 - 注册事件处理程序
 ```js
 // WorkerGlobalScope是一个供Worker使用的全局对象
 // 因此postMessage、onmessage看起来像全局函数和全局变量
 onmessage = function(e) {
     postMessage(123)
 }
 ```
### WebWorker 会用在哪些场景？
 - 完成轮询，以便第一时间得知状态改变
