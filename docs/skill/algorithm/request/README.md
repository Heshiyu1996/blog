# 实现request

实现 `request` 函数，使得 **不同模块间调用同一个Api时，只发起 1 个HTTP请求**。

## 需求
```js
// a.js
request('/userInfo').then(data => {})

// b.js
request('/userInfo').then(data => {})

// Network只看到一个 http请求。
```
可能情况： **A模块** 先调用，此时还未有结果，**B模块** 已开始调用。

## 关键点
 - Promise特性
 - Hash

## 实现
