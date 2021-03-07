# React事件系统

[[toc]]

## 原理
**React事件系统** 采用的是 **事件委托** 的思想。
```js
 1. React 会在 `document`对象上绑定一个 “统一事件处理程序” ，来监听所有 “React事件”（通过维护一个 “事件映射表” ）

 2. 当 事件 在 具体的 DOM节点 上 被触发后，会冒泡到 `document`

 3. `document` 上绑定的 “统一事件处理程序” 会将 事件 分发到 具体的事件处理函数
```
> 分发前，React 会对 事件 进行包装：把 “原生DOM事件” 包装成 “合成事件”

### 合成事件
**合成事件** 是 React 对 “原生事件” 的跨浏览器封装。
 - 可以抹平 不同浏览器之间 的差异（是一个 `SyntheticEvent实例`）
 - 由于合并而来，可能会被重用 **（即在事件回调触发完毕后，所有属性都会失效）**
 - 获取底层原生事件（`nativeEvent`属性）




## React事件、原生事件的区别
### 触发顺序
**React事件** 是在 `document` 处统一，所以触发顺序是：

“原生事件” -> “React事件” -> `document`

> React事件 默认是在 **冒泡阶段** 触发；如果需要在 **捕获阶段** 触发，可以在 `事件名+Capture`（如：onClickCapture）

### 阻止冒泡
 - **React合成事件** 通过 `e.stopPropagation()` ，可阻止 “React事件” 冒泡 **（不会影响到 “原生事件”）**

 - **原生事件** 通过 `e.stopPropagation()` ，可阻止 “原生事件” + “React事件” 冒泡 **（因为不会冒泡到 `document`）**

### nativeEvent
**React合成事件** 可以通过 `e.nativeEvent` 获取到 “原生事件”。
> 但 `e.nativeEvent.stopPropagation()` 不会阻止 “原生事件”，因为这时候 “原生事件” 早就执行完了。

> [Demo](https://codesandbox.io/s/inspiring-leaf-cdkci?file=/src/App.jsx)


### SyntheticEvent实例
在 合成事件 的事件处理函数内，会传递进一个 `SyntheticEvent实例`。

 - 兼容所有浏览器
 - 拥有原生事件接口（`stopPropagation` 、 `preventDefault`）
 - 由于合并而来，可能会被重用 **（即在事件回调触发完毕后，所有属性都会失效）**
 - 获取底层原生事件（`nativeEvent`属性）

<!-- <img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7114440836/02c8/18a3/3f38/568eede47e6e2353b339335214ad2bc2.png" width="350px" /> -->


## 参考
- [React 合成事件和 DOM 原生事件混用](https://juejin.cn/post/6903805279483297805)
