# 前端路由

[[toc]]

## 路由类型
 - Hash
 
 - History

## Hash模式
**url**：url上携带 `#`，随后为 hash值

**特点**：不会向服务器发送请求

### Api
`location.hash` 可以获取 hash值

### 事件
`hashchange` 会在 hash值 变化时触发

## History模式
**url**：url上无 `#`

**特点**：向服务器发送请求（当匹配不到资源时，需重定向到前端页面兜底）

### Api
history对象
 - `pushState`：添加一条路由记录
 - `replaceState`：修改当前路由记录

 - `go(n)`：跳转 n 步（n可以为正负数）
 - `back()`：后退（等价于 `go(-1)`）
 - `forward()`：前进（等价于 `go(1)`）

> 没有 `popState` 这个Api


## 事件监听
`pushState`、`replaceState` 不会触发 `popstate`事件
> 只有浏览器上的前进/回退、JS 执行 `history.back()` 才会触发

### 重写pushState、replaceState事件
**原理**：重写 `history.pushState`、`history.replaceState`，让它们在执行后自动触发一个 “自定义事件”；
> 需提前监听这个 “自定义事件”。

```js
const _wr = type => {
    const origin = history[type];

    return function () {
        const event = new Event(type);
        event.arguments = arguments;
        window.dispatchEvent(evet);
        return origin.apply(this, arguments);
    }
}

history.pushState = _wr('pushState');
history.replaceState = _wr('replaceState');

// 事件监听
window.addEventListener('pushState', e => {});
window.addEventListener('replaceState', e => {});
```


## 参考
 - [监听history.push/replaceState和local/sessionStorage变化](https://zhuanlan.zhihu.com/p/137911758)