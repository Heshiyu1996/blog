# 浏览器缓存机制
> 缓存和重用之前获取的资源对于性能优化很关键。
[[toc]]

## 缓存的分类
按照存储的位置，可以分为：
优先级越往上越高：
 - Service Worker
 - Memory Cache
 - Disk Cache
 - Network Request

### Service Worker
`Service Worker`是一个注册在 指定源和路径下 的独立线程（由事件驱动）。

通过JS来实现 资源请求的拦截、修改，从而更精细地缓存、复用资源。
> （只能针对https）

## 字段说明
### 强缓存
**Response Header**

优先级从高到低：

| 字段名称 | 说明 | 适用http版本 | 特点
| ----- |:---:|:---:|:---:|
| Pragma | 值为`no-cache`时，表示禁用缓存 | 1.0、1.1 | 优先级最高 |
| Cache-Control | 值为缓存过期时间 | **仅1.1** | 配置选项较多 |
| Expires | 值为缓存过期时间 | 1.0、1.1 | 服务器、客户端时间可能对不上 |

注意：
 - 因为`Expires`既适用于1.0，也适用于1.1，所以大多数情况下会同时使用 `Expires`、`Cache-Control`

#### Cache-Control选项说明
在**Request Header**、**Response Header**都可以使用`Cache-Control`，区别在于：
 - 前者：声明**本次**请求的缓存策略；
 - 后者：**浏览器会判别这些响应值来决定资源缓存的状态**

在**Request Header**中使用：
![alt](./img/browser-cache-1.png)


在**Response Header**中使用：
![alt](./img/browser-cache-2.png)

### 协商缓存
**Response Header**
| 字段名称 | 说明 | 适用http版本 | 特点 |
| ----- |:---:|:---:|:---:|
| Last-Modified | 文件的最后一次修改时间 | 1.0、1.1 | 无法判断“小于秒级”、“周期性更改”的文件 |
| ETag | 资源的唯一标识符 | **仅1.1** | 计算会产生服务器性能损耗 |

**Request Header**
| 字段名称 | 说明 | 适用http版本 |
| ----- |:---:|:---:|
| If-Modified-Since | 向服务器请求上次保存的`Last-Modified`值 | 1.0、1.1 |
| If-None-Match | 向服务器请求上次保存的`ETag`值 | **仅1.1** |

### 浏览器的应对
1. 服务器会通过 **Response Header**，携带以上四个常用（`Cache-Control`、`Expires`、`Last-Modified`、`ETag`）的响应头。
2. 浏览器会通过判别这些响应值来决定 **是否要使用缓存**。
> 如：当 响应 中存在`Cache-Control`（设置了`max-age`），或者`Expires`，浏览器就不会向服务器发起校验请求（协商缓存校验）而是直接使用本地缓存。

在这段时间里，只能通过 **强制刷新** 来请求最新资源(前提是没有接入CDN)

:::tip

| 刷新行为 | `Request Header`会携带 |
| ----- |:---:|
| F5、工具栏的刷新按钮 | **If-Modified-Since**（如果上次Response里有`Last-Modified`）、**If-None-Match**（如果上次Response里有`ETag`） |
| Ctrl + F5 |  **Pragma: no-cache**、**Cache-Control: no-cache** |
:::

## CDN缓存
如果接入了CDN，即使强制刷新，也不会直接向源服务器请求资源，而是转向CDN边缘节点请求资源。
> 除非CDN边缘节点的缓存也过期了，CDN边缘节点才会向源服务器发请求，从而获取最新资源。

优势
 - 减少用户访问延时
 - 减少源服务器的负载

## from memory cache与from disk cache
Network的Size栏会有三种情况：
 - from memory cache
 - from disk cache
 - 资源大小
![alt](./img/browser-cache-3.png)

| 状态 | 类型 | 说明
| ----- |:---:|:---:|
| 200 | from memory cache | 不访问服务器，缓存在**内存**中。浏览器关闭后，数据**将被释放**（一般为js、图片） |
| 200 | from disk cache | 不访问服务器。缓存在**硬盘**中。浏览器关闭后，数据**依然存在**（一般为css） |
| 304 | 资源大小 | 命中**协商缓存**，使用本地资源（CDN上的资源） |

## 拓展：强缓存的应用
强缓存通常 只针对静态资源 使用。对于 “引用静态资源的 `index.html`” 不能使用强缓存，因为没有机制能够通知浏览器这些 `.html`有更新。

所以，针对 `index.html` 只采用 协商缓存。这样浏览器访问这些页面时，始终可以请求服务器最新的资源。

当资源更新时，
> 如用户第一次访问的版本已缓存到电脑上。当网站发布新版本时需要替换这个图片。（除非用户清除缓存，否则看不到最新的图片效果）

### 实现文件级别的精确缓存控制
由上得知，`.index.html`不加强缓存，当里面被引用的资源地址只要发生改变了，就可以更新这个资源。

若能实现只有当 文件内容变化，再变更相应url，就能实现 文件级别的精确缓存控制。
> webpack可以在打包时添加hash串来实现

## 拓展：在.html的meta里设置缓存策略
（待更新...）

## 拓展：Chrome86启用缓存分区
 - 浏览器缓存机制的改变（新增2个缓存key）
 - 避免攻击者利用“检查缓存”实施攻击

## 参考链接
 - [HTTP缓存控制小结](https://imweb.io/topic/5795dcb6fb312541492eda8c)
 - [from memory cache与from disk cache](https://segmentfault.com/q/1010000013464267)
 - [前端缓存那些事](https://juejin.im/post/5e7ef4a9e51d4546f8784b21)
 - [聊聊 CDN 缓存与浏览器缓存](https://juejin.im/post/6844903844044865550)
 - [新的浏览器缓存策略变更：舍弃性能、确保安全](https://mp.weixin.qq.com/s/8oL4Z4ewTl0VbQ_0BH4n7w)
 - [Partition the HTTP Cache](https://www.chromestatus.com/feature/5730772021411840)