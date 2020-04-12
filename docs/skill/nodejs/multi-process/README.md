# NodeJS中的多进程、集群
> **进程是 资源分配 的最小单位，线程是 CPU调度 的最小单位**。

Node下的js执行环境是单进程、单线程运行（这里的单线程指的是它的JS引擎是单线程），但可以通过`cluster`或`child_process`开启 **多进程** 来充分利用多核CPU。



## child_process
**Node多进程模式** 是通过`child_process`模块可以创建子进程来实现的。

模块里有4种方法（其中后面3个方法基于`spawn`进行封装）：
 - spawn

 - fork

 - execFile
 
 - exec

以上方法都会返回一个`childProcess`对象。
> 该对象实现了`EventEmitter`接口，带有stdout, stdin, stderr对象。

## child_process.spawn
因为`fork`、`exec`、`execFile`都是基于`spawn`进行的封装，所以`spawn`是基础。

### 标准进程通信
```js
// process.js
const spawn = require('child_process').spawn;
const path = require("path");

// 创建子进程
let child = spawn('node', ['sub-process.js'], {
    cwd: path.join(__dirname),
    stdio: [0, "pipe", "ignore", "ipc"]
});

child.on('message'ta => {
    console.log(data);

    // 回复消息给子进程
    child.send('world');

    // 杀死子进程
    // process.kill(child.pid);
});
// hello
```

```js
// sub-process.js
// 给主进程发送消息
process.send('hello');

// 接收主进程回复的消息
process.on('message', data => {
    console.log(data);

    // 退出子进程
    process.exit();
});
```
这种方式被称为 **标准进程通信**。通过给`options`的`stdio`数组，配置`ipc`：
 - 主进程监听`子进程的message`事件进行接收；在回调中利用`子进程的send`方法发送消息
 - 子进程监听`自身的message`事件进行接收；调用`自身的send`方法发送消息
> 指定要用message事件

#### 退出、杀死子进程
因为子进程在监听`message`事件时，主进程不知道其什么时候完成，所以主进程会卡住。

此时需要 **子进程内退出process.exit()** 或 **主进程杀死process.kill(child.pid)**

### 独立子进程
因为`child_process`模块创建的子进程是被主进程统一管理的（主进程死，子进程也得死）。

但可以实现子进程的独立：
 - 创建时，在`options`声明`detached: true`、`stdio: 'ignore'`
 - 创建后，执行`child.unref()`

缺点：**独立的子进程不能和主进程进行标准进程通信，即不能设置 ipc。**（不能和主进程共用标准输入、标准输出、错误输出）



## child_process.fork
`fork`对`spawn`进行了一层简易的封装：少传了一些默认参数、多了个`silent`。

实际上返回子进程也是在内部执行`spawn`后返回。


**fork 创建的子进程可以直接通过 send 方法和监听 message 事件与主进程进行通信。**

### silent
`silent`实际上是：默认使用`ipc`通信，以及`stdio`的两种极端情况：
 - `silent = true`：将“标准输入、标准输出、错误输出”置为`ignore`
 - `silent = false`：将“标准输入、标准输出、错误输出”置为`0, 1, 2`





## child_process.execFile、child_process.exec
`execFile`基于`spawn`封装，可以 **创建子进程后，直接进行文件操作**

`exec`基于`execFile`封装，可以 **创建子进程后，直接执行命令**
 > `exec`常见场景：`webpack-dev-server`等命令行工具在启动本地服务器时，自己打开浏览器

```js
const { execFile, exec } = require("child_process");

let execFileChild = execFile("node", ["--version"], (err, stdout, stderr) => {
    if (error) throw error;
    console.log(stdout);
    console.log(stderr);
});

let execChild = exec("node --version", (err, stdout, stderr) => {
    if (err) throw err;
    console.log(stdout);
    console.log(stderr);
});
```

区别：传参。


## cluster
`cluster`是NodeJS提供用来 **实现多进程** 的模块，它集成了 `child_process` 创建子进程的方法（比 `ipc` 更加简洁）。

### 通过cluster实现集群
`集群`指的是，**负责接收并响应请求的多台服务器的集合。**

NodeJS是 **通过创建多进程** 来实现集群的。
```js
const cluster = require("cluster");
const http = require("http");
const os = require("os");

// 判断当前执行的进程是否为主进程：
// 主进程：创建子进程
// 子进程：监听服务
if (cluster.isMaster) {
    // 创建子进程
    os.cpus().forEach(() => cluster.fork());
} else {
    // 创建并监听服务
    http.createServer((req, res) => {
        res.end(`child${process.pid}`);
    }).listen(3000);
}
```
 - 主进程执行时，会通过`cluster.fork()`创建子进程
 - 子进程被创建后，该文件会再次执行（但此时`cluster.isMaster为false`），开始创建并监听服务。

### 多个进程为什么可以监听同一个端口？
**理论上不允许，会出现端口冲突。**

**实际上，端口只会被 主进程 绑定监听一次。** 然后在和子进程建立IPC通道后，会通过子进程的`send方法`将`Socket`（也就是`server`）传给子进程实现 **端口共享**。

当接收到请求后，主进程 会通过 **负载均衡** 来分配请求到各个子进程中。

### 多个进程间的通信？
进程间通信有几种：pipe（管道）、消息队列、信号量、Domain Socket。

在NodeJS中，是通过`pipe`实现进程间的通信的。(将一个进程的输出做为另外一个进程的输入)





**好处：**
 - 进程通信比较简单
 - 减少端口的资源浪费
 - 对 主进程 稳定性要求高







#### 常用场景
pm2

<!-- 
利用cluster，可以创建一个负载均衡的集群，自动分配CPU多核资源（可以自动完成子进程worker分配request的事情）。 -->

## NodeJS的单线程
NodeJS下的JS执行环境是单线程的，只是通过`cluster`/`child_process`提供了一个通过**创建多进程来模拟多线程**的方式。

`Node v10.5.0`提出了一个概念 **worker_threads**，可以让NodeJS具有多线程的能力。




## 参考链接
[NodeJS中的多进程、集群](https://juejin.im/post/5bbd83f5e51d450e894e4f3a#heading-7)

[Nodejs 进阶：解答 Cluster 模块的几个疑问](https://zhuanlan.zhihu.com/p/112597848)

[10道Nodejs进程相关](https://mp.weixin.qq.com/s/dKN95zcRI7qkwGYKhPXrcg)
