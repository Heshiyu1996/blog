# Websocket Demo
[[toc]]

下面封装了两个类（**WebSocketClass类、HeartCheck类**）。

  - 前者主要负责主功能的websocket建立、监听；
  - 后者主要负责心跳检测的具体逻辑。

## WebSocketClass类
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


## HeartCheck类
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

#### 获取/更新数据
1、componentWillMount 会开始与后端建立 ws 连接；

2、连接成功后，会在 openCallback（即：ws.onopen） 通过 http接口 获取 “可预约的日期列表”；

3、随后通过 ws ，发起 action 为 WebSocketActionCode.GET_BOOKABLE_LIST 的消息，获取 “指定日期下可预约的时间段列表”；
后端接收到 ws 消息后，返回 eventId 为 WebSocketEventId.BOOKABLE_LIST_ALL 的事件
> eventId 也有可能为 WebSocketEventId.BOOKABLE_LIST_PART，主要取决于：该日期下是否需更新所有时间段的状态

4、前端通过 ws 的 msgCallback （即：ws.onmessage） ，根据 eventId 执行不同的数据处理


#### 心跳检测
> 代码位置：同位置下的 HeartCheck 类

1、连接成功后，会在 openCallback（即ws.onopen） 通过 HeartCheck 实例化 this.heartChecker

2、随后通过 ws，发起 action 为 WebSocketActionCode.HEART_CHECK（携带参数heartBeat: 'PING'） 的消息（实际上是利用 setInterval 进行 心跳检测）
3、如果前端后续能通过 ws 接收到后端返回的 eventId 为 WebSocketEventId.HEART_CHECK 的事件，表明心跳正常。否则判断是否需要断线重连 


#### 断线重连
通过 this.ws.isWorking 来判断是否为 手动关闭ws。若非手动关闭，则进行 this.ws._reConnect，进行 断线重连。 

#### 总结
WebSocketActionCode 是 客户端 向 服务端 通过 ws 发送数据时，用的 “操作代号”。
> 如：100 - 获取指定日期下可预约的时间段列表

WebSocketEventId 是 服务端 向 客户端 通过 ws 响应数据时，用的 “事件代号”。
> 如：101 - 所有数据；102 - 变化了的数据；

但它们都是属于“1”开头类型的事件

#### 与后端约定的状态码
```js
// 操作类型
export const WebSocketActionCode = {
    HEART_CHECK: 0, // 心跳检测
    GET_BOOKABLE_LIST: 100 // 获取学生预约时段列表
};
  
// 行为EventId
export const WebSocketEventId = {
    HEART_CHECK: 0, // 心跳检测
    BOOKABLE_LIST_ALL: 101, // 获取学生预约时段列表（全局）
    BOOKABLE_LIST_PART: 102 // 获取学生预约时段列表（局部）
};
```