# WebSocket
> `WebSocket`是一种浏览器的API，它可以在一个单独的持久连接上建立双向通信

## 与后端保持不断通信（WebSocket）
 - 短轮询：客户端周期性地向服务器发起HTTP请求（一个request对应一个response）
 - 长轮询：客户端发起HTTP请求，服务器并不是每次都立即响应（等待数据更新后才响应，否则保持该连接直到超时）（一个request对应一个response）
 - WebSocket

## WebSocket概念
WebSocket是一种协议，和HTTP协议一样位于应用层，都是TCP/IP协议的子集。
 - HTTP是单向通信协议（只有客户端发起HTTP请求，服务端才会返回数据）
 - WebSocket是双向通信协议（建立连接后，客户端、服务器都可以主动向对方发送或接受数据）
它建立前需要借助HTTP协议，建立连接后，持久连接的双向通信就和HTTP协议无关了。


优点：
 - 支持服务端及时的消息推送；
 - 复用长连接；
 - 同一条`WebSocket`上能同时并发多个请求

缺点：
 - 需要维护`WebSocket`连接
 - 消息推送比较复杂

属性：
```js
Socket.readyState // 0未建立；1已建立；2正在关闭；3已关闭
Socket.bufferedAmount
```

方法：
```js
Socket.send() // 向服务端发送数据
Socket.close() // 关闭连接
```

事件：
```js
Socket.onopen // 连接建立时触发
Socket.onmessage //接收到服务消息时触发
Socket.onerror // 连接错误时触发
Socket.onclose // 连接关闭时触发
```