# WebWorker
**Web Worker** 是 **HTML5** 的新功能，用于 **实现JS的多线程操作**。

> 但Web Worker子线程 **完全受主线程控制** ，也无法操作DOM，所以**本质上JS还是单线程的**。
## 组成
它包含 2 部分：
 - **Worker对象**
    - 在主线程中，对 **Worker** 的引用
 - **WorkerGlobalScope**
    - 表示 **新创建的Worker的全局对象**（也是Worker线程内部使用的对象）

## 使用
`app.js`：
 ```js

 // 实例化一个worker对象
 var worker = new Worker('./my/path/to/async.js')
 
 // 发送消息给worker内部
 worker.postMessage('Hello')
 
 // 注册事件处理程序
 worker.onmessage = function(e) {
     // ...
     worker.terminate() // 关闭 Worker线程
 }
 ```


`./my/path/to/async.js`：
 ```js

 // 注册事件处理程序
 // WorkerGlobalScope 是一个供 Worker 使用的全局对象
 // 因此 postMessage、onmessage 看起来像全局函数和全局变量
 onmessage = function(e) {
     postMessage(123)
 }
 ```
### 常用场景？
 - 轮询。以便第一时间得知状态改变
 - 读取耗时较长的文件
