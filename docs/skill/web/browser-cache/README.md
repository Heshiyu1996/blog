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

> `Service Worker`是一个注册在指定源和路径下事件驱动的独立线程。采用JavaScript控制关联的页面或网站资源，拦截并修改访问和资源请求，更精细地缓存资源。
> 
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
 - 因为`Expires`既适用于1.0，也适用于1.1，所以大多数情况下会同时发送`Expires`、`Cache-Control`

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
服务器会在资源返回的响应中，携带以上四个常用（Cache-Control、Expires、Last-Modified、ETag）的响应头。**浏览器会通过判别这些响应值来决定资源缓存的状态。**

当响应中有`Cache-Control`（设置了`max-age`），或者`Expires`，浏览器不会向服务器发起校验请求而是直接使用本地缓存。
> 在这段时间里，只能通过**强制刷新**来请求最新资源(前提是没有接入CDN)

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