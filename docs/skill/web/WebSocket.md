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
 1、支持服务端及时的消息推送；

 2、建立在TCP协议之上，服务端的实现比较容易；
 
 3、握手阶段采用HTTP协议，与HTTP协议有良好的兼容性（默认端口也是80和443）；

 4、数据格式比较轻量，性能开销小，通信高效；

 5、可以发送文本、二进制；

 6、没有同源限制，客户端可以和任意服务器通信；

 7、可复用长连接（心跳检测时的“长轮询”），同一条`WebSocket`上能同时并发多个请求；

![alt](./img/WebSocket-1.png)

## WebSocket缺点
 1、前、后端需要维护`WebSocket`的连接通道
 
 2、消息推送比较复杂

## 常用属性（5）
### webSocket.readyState
:::tip
 - 0：表示正在连接
 - 1：表示连接成功，可以通信了
 - 2：表示连接正在关闭
 - 3：表示连接已关闭
:::

方法：
```js
Socket.send() // 向服务端发送数据
Socket.close() // 关闭连接
```

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
`心跳检测`是每隔一段时间会向服务器发送一个数据包，告诉服务器自己还活着。同时客户端也可以确认服务器是否处于正常工作。



## 断开重连
`断开重连`是通过一个变量来判断，本次断开原因是**人为/异常**。若为后者，则尝试断开重连。

## 实例代码
下面封装了两个类（**WebSocketClass类、HeartCheck类**）。前者主要负责主功能的websocket建立、监听；后者主要负责心跳检测的具体逻辑。

```js
/**
* @description: WebSocketClass类
* @param {String} url 服务器ip
* @param {Function} msgCallback 接收到服务器消息的回调方法
* @param {String} name （可选）websocket名字
* 
* @author heshiyu
* @Date 2019-07-29
*/

import { WebSocketStatus, WebSocketActionCode, WebSocketEventId } from '@/constants/config';
import { message } from 'antd';

const Delay = {
    HEART_CHECK_PING: 1000 * 60 * 2, // 2min
    HEART_CHECK_PONG: 1000 * 60 * 2 + 5000, // 2min5s
    RE_CONNECT: 5000 // 5s
};

class WebSocketClass {
    constructor(url, msgCallback, name = 'default') {
        this.url = url;
        this.msgCallback = msgCallback;
        this.name = name;

        this.ws = null; // ws对象
        this.isWorking = false; // ws是否在正常工作中。可用来标志ws是否手动关闭（只在手动关闭ws时，为true）
        this.lockReconnect = false; // 重链lock
        this.heartChecker = null; // 心跳检测对象
    }

    connect() {
        try {
            this.ws = new WebSocket(this.url); // 新建ws实例
        } catch (error) {
            message.success('websocket开启失败，请联系管理员');
        }
        this._init(); // 初始化
    };

    _init() {
        this.ws.onopen = e => {
            // ws连接成功的回调
            this.isWorking = true;
            console.log(`${this.name}连接成功`);
            // 心跳检测
            this.heartChecker = new HeartCheck(this.ws);
            this.heartChecker.start();
        }

        this.ws.onmessage = ev => {
            const data = JSON.parse(ev.data);
            if (typeof data !== 'object') return;

            const { eventId } = data,
                { HEART_CHECK } = WebSocketEventId;
            
            if (eventId === HEART_CHECK) return this.heartChecker.setIsAlive(true);
            this.msgCallback(ev.data);
        }

        this.ws.onclose = e => this._closeHandle(e);
        this.ws.onerror = e => this._closeHandle(e);
        this.ws._closeHandle = this._closeHandle; // 将closeHandle挂载到ws实例上
    }

    // 发送消息
    send(data) {
        return this.ws.send(data);
    }

    // 手动关闭
    close() {
        console.log(`关闭${this.name}`);
        this.isWorking = false;
        return this.ws.close();
    }

    // 关闭方式检测（手动/异常）
    _closeHandle(error = 'err') {
        this.heartChecker && this.heartChecker.stop();
        this.isWorking ? this._reConnect() : console.log(`${this.name}已正常手动关闭`); // 若异常关闭ws，启动重连机制
    }

    // 断线重连
    _reConnect() {
        if (this.lockReconnect) return;
        this.lockReconnect = true;

        console.log(`${this.name}断开，将正在尝试重连...`);
        setTimeout(() => {
            this.connect();
            this.lockReconnect = false;
        }, Delay.RE_CONNECT);
    }
}

export default WebSocketClass;
```

```js
/**
* @description: 心跳检测类
* @param {Object} ws websocket对象
* 
* @author heshiyu
* @Date 2019-07-29
*/
// 心跳检测 
class HeartCheck {
    constructor(ws) {
        this.ws = ws;

        this.isAlive = false;
        this.timer = {
            ping: null,
            pong: null
        }
    }

    // 启动
    start() {
        // 每120s会向服务器进行心跳检测
        this.timer.ping = setInterval(() => this._heartCheck(), Delay.HEART_CHECK_PING)
        // 每125s会检测isAlive
        this.timer.pong = setInterval(() => {
            !this.isAlive && this.ws._closeHandle();
            this.setIsAlive(false);
        }, Delay.HEART_CHECK_PONG)
    }

    // 停止
    stop() {
        if (this.timer.ping || this.timer.pong) return

        clearInterval(this.timer.ping);
        clearInterval(this.timer.pong);
    }

    // 发送约定的心跳包
    _heartCheck() {
        let msg = {
            action: WebSocketActionCode.HEART_CHECK,
            heartBeat: 'PING'
        };
        this.ws.readyState === WebSocketStatus.SUCCESS && this.ws.send(JSON.stringify(msg));
    }

    setIsAlive(isAlive) {
        this.isAlive = isAlive;
    }
}
```

## 参考资料
[理解WebSocket心跳及重连机制](https://www.cnblogs.com/tugenhua0707/p/8648044.html)