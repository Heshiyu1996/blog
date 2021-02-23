# WebSocket
> `WebSocket`是一种浏览器的API，它可以实现 “服务器与客户端之间的全双工通信”。

[[toc]]

## 与后端保持不断通信的方法
 - **短轮询**：客户端 周期性地 向服务器发起 HTTP请求
 - **长轮询**：客户端 发起 HTTP请求 后一直挂起，直到服务器有数据（或超时）才响应；响应后再重新建立连接
 - **WebSocket**：先在 客户端 和服务器 建立起http链接。

 > 短轮询、长轮询 都是“一个request对应一个response”。


## WebSocket特点
 1. 基于 TCP ，由 HTTP协议 升级而来，与HTTP协议有良好的兼容性（默认端口也是 `80` 和 `443`）；

 2. 服务端主动推送消息

 3. 支持文本、二进制（Blob、Arraybuffer）；

 4. 支持跨域；

 5. 支持并发多个请求；

![alt](./img/WebSocket-1.png)

## WebSocket缺点
1. 需要维护 websocket 的连接状态：
    - **心跳检测**：每隔一段时间，客户端 向 服务器 发送一个数据包，来判断 ws链接 是否断开。
    - **断开重连**:：当 websocket链接 断开时，可能需要尝试断开重连。
2. 不兼容低版本IE（10以下）

:::tip
**心跳检测** 的做法：
 1. 利用 `setInterval`，通过 `ws.send` 给服务端发送 `PING` ；
 2. 再利用一个 `setInterval` 监听是否下发 `PONG`

**断开重连** 的做法：
 1. 定义一个 `flag` 用来判断断开原因（**人为/异常**），在 “手动关闭ws” 方法内更新 `flag`；
 2. 在 **心跳检测** 监听 `PONG` 时，判断连接是否异常断开（结合`flag`）
:::

## Api
每个 websocket对象 具有：1 个属性、4 个事件处理函数、2 个方法。
### 属性
```js
console.log(ws.readyState); // 当前 websocket 的连接状态
//  0：CONNECTING 表示正在连接 
//  1：OPEN 表示连接成功，可以开始通信
//  2：CLOSING 表示连接正在关闭
//  3：CLOSED 表示连接已关闭
```

### 事件处理函数
```js
// “连接建立成功”的处理函数
ws.onopen = function() { /* */ }

// “接收数据”的处理函数（服务端数据可能是`文本`，也可能是二进制数据（`blob对象`或`Arraybuffer对象`））
ws.onmessage = function() { /* */ }

// “错误事件”的处理函数
ws.onerror = function() { /* */ }

// “关闭事件”的处理函数
ws.onclose = function() { /* */ }
```

### 方法
```js
// 向 服务器 发送数据
ws.send();

// 关闭 websocket
ws.close();
```


## 参考资料
 - [理解WebSocket心跳及重连机制](https://www.cnblogs.com/tugenhua0707/p/8648044.html)
 - [【工程Demo】Websocket](./DEMO.md)
