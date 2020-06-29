# WebSocket
> `WebSocket`是一种浏览器的API，它可以在一个单独的持久连接上建立双向通信

:::warning
与后端保持不断通信的方法
 - **短轮询**：客户端周期性地向服务器发起HTTP请求
    - 一个request对应一个response
 - **长轮询**：客户端发起HTTP请求，服务器并不是每次都立即响应
    - 一个request对应一个response
    - 等待数据更新后才响应，否则保持该连接直到超时）
 - **WebSocket**
:::

[[toc]]

## WebSocket特点
 1、**[消息推送]** 支持服务端及时的消息推送；

 2、**[基于TCP]** 建立在TCP协议之上；
 
 3、**[HTTP协议升级而来]** 握手阶段采用HTTP协议，与HTTP协议有良好的兼容性（默认端口也是80和443）；

 4、**[可发两类内容]** 可以发送文本、二进制（Blob、Arraybuffer）；

 5、**[可跨域]** 没有同源限制，客户端可以和任意服务器通信；

 6、**[并发多个请求]** 同一条`WebSocket`上能同时并发多个请求；

![alt](./img/WebSocket-1.png)

## WebSocket缺点
 1、前、后端需要维护`WebSocket`的连接状态（如：心跳检测、断开重连）
 
 2、不兼容低版本IE浏览器

## 常用属性（5）
### webSocket.readyState
:::tip
 - 0：CONNECTING 表示正在连接 
 - 1：OPEN 表示连接成功，可以通信了
 - 2：CLOSING 表示连接正在关闭
 - 3：CLOSED 表示连接已关闭
:::

### webSocket.onopen
用于指定**连接成功后**的回调函数
```js
// 单个回调函数
ws.onopen = function() {
    // ...
}

// 多个回调函数
ws.addEventListener('open', function(ev) {
    // ...
})
```

### webSocket.onmessage
用于指定**收到服务端消息后**的回调函数
```js
// 单个回调函数
ws.onmessage = function() {
    // ...
}

// 多个回调函数
ws.addEventListener('message', function(ev) {
    // ...
})
```
注意，服务端数据可能是`文本`，也可能是二进制数据（`blob对象`或`Arraybuffer对象`）

### webSocket.onclose
用于指定**连接关闭后**的回调函数
```js
// 单个回调函数
ws.onclose = function() {
    // ...
}

// 多个回调函数
ws.addEventListener('close', function(ev) {
    // ...
})
```

### webSocket.onerror
用于指定**报错时**的回调函数
```js
// 单个回调函数
ws.onerror = function() {
    // ...
}

// 多个回调函数
ws.addEventListener('error', function(ev) {
    // ...
})
```

## 常用方法（2）
### webSocket.send()
用于向服务器发送数据
```js
// 发送文本
ws.send('hello')

// 发送Blob对象
var file = document.querySelector('input[type="file"]').files[0]
ws.send(file)

// 发送ArrayBuffer对象
var img = canvas_context.getImageData(0, 0, 400, 320)
var binary = new Uint8Array(img.data.length)
for (var i = 0; i < img.data.length; i++) {
    binary[i] = img.data[i]
}
ws.send(binary.buffer)
```

### webSocket.close()
用于关闭webSocket
```js
ws.close()
```

## 不稳定性
`WebSocket`并不稳定，在使用一段时间后，可能会**断开连接**。若需要确保**客户端、服务端之间的TCP通道的连接**有没有断开，需要**心跳检测 && 断开重连**。

> 因为有时候遇到网络断开时，可能并没有触发`onclose`事件（如在Chrome浏览器中，断网时就不会触发onclose事件）。

## 心跳检测
`心跳检测`是每隔一段时间会向服务器发送一个数据包，**告诉服务器自己还活着**。同时客户端也可以**确认服务器是否处于正常工作**。

## 断开重连
`断开重连`是通过一个变量来判断，本次断开原因是**人为/异常**。若为后者，则尝试断开重连。

## 实例代码
[WebsocketDemo](./DEMO.md)

## 参考资料
[理解WebSocket心跳及重连机制](https://www.cnblogs.com/tugenhua0707/p/8648044.html)