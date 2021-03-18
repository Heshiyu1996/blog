# HTTP缓存机制
> 缓存和重用之前获取的资源对于性能优化很关键。

[[toc]]

## 强缓存

| 字段名称 | 说明 | 适用http版本 |
| ----- |:---:|:---:|
| Pragma | 与`cache-control: no-cache`相同 | 1.0、1.1 | 
| Expires | 设定“缓存过期时间” | 1.0、1.1 |
| Cache-Control | 设定“缓存策略” | **仅1.1** | 

> 优先级：`Pragma` > `Cache-Control` > `Expires`


### Expires
`Expires` 的时间是 “服务器时间”，可能与 “客户端时间” 匹配不上，导致缓存失效

一般会用来处理 兼容 情况（包括 `Pragma`）。

### Cache-Control
**选项：**
 - `max-age`：最大周期（单位: s）
 - `no-cache`：客户端协商缓存
 - `no-store`：不缓存

在 **Request Header**、**Response Header** 都可以使用`Cache-Control`，区别在于：
 - 前者：指定 **这个资源在本次请求的缓存策略**；
    > 如: 强制刷新F5时，请求头是`cache-control: no-cache` 告知服务器本次需要请求最新资源
 - 后者：告知 浏览器 针对 这个资源 的缓存策略


## 协商缓存

**Response Header**
| 字段名称 | 说明 | 适用http版本 |
| ----- |:---:|:---:|
| Last-Modified | 文件的最后一次修改时间 | 1.0、1.1 |
| ETag | 资源的唯一标识符 | **仅1.1** | 

**Request Header**
| 字段名称 | 说明 | 适用http版本 |
| ----- |:---:|:---:|
| If-Modified-Since | 向服务器请求上次保存的 `Last-Modified` 值 | 1.0、1.1 |
| If-None-Match | 向服务器请求上次保存的 `ETag` 值 | **仅1.1** |

> 优先级：ETag > Last-Modified

### Last-Modified
可能进行误判。

例：资源A 已经被请求过，但是又重新生成（内容没变，但 `Last-Modified` 变了）

> 一般会用来处理 兼容 情况。


### ETag
服务端生成的 **资源唯一标识符** 。


## 浏览器的应对
1. “服务器” 会通过 **Response Header**，携带以上四个常用（`Cache-Control`、`Expires`、`Last-Modified`、`ETag`）的响应头。
2. “浏览器” 会通过判别这些响应值来决定 **是否要使用缓存**。

在这段时间里，只能通过 **强制刷新** 来请求最新资源（前提是没有接入CDN）

:::tip

| 刷新行为 | `Request Header`会携带 |
| ----- |:---:|
| F5、工具栏的刷新按钮 | **If-Modified-Since**（如果上次Response里有`Last-Modified`）、**If-None-Match**（如果上次Response里有`ETag`） |
| Ctrl + F5 |  **Pragma: no-cache**、**Cache-Control: no-cache** |
:::

## HTTP缓存的应用
 - “强缓存” 通常只针对 “静态资源”、“接口” 使用。

 - “协商缓存” 针对 `index.html`：浏览器始终可以请求 “最新的资源”。
> 不能使用强缓存，因为没有机制能够通知浏览器这些 `.html`有更新。

<!-- 
## 拓展：Chrome86启用缓存分区
 - 浏览器缓存机制的改变（新增2个缓存key）
 - 避免攻击者利用“检查缓存”实施攻击 -->

## 参考链接
 - [HTTP缓存控制小结](https://imweb.io/topic/5795dcb6fb312541492eda8c)
 - [from memory cache与from disk cache](https://segmentfault.com/q/1010000013464267)
 - [前端缓存那些事](https://juejin.im/post/5e7ef4a9e51d4546f8784b21)
 - [聊聊 CDN 缓存与浏览器缓存](https://juejin.im/post/6844903844044865550)
 - [新的浏览器缓存策略变更：舍弃性能、确保安全](https://mp.weixin.qq.com/s/8oL4Z4ewTl0VbQ_0BH4n7w)
 - [Partition the HTTP Cache](https://www.chromestatus.com/feature/5730772021411840)