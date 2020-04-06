# 浏览器缓存机制
> 缓存和重用之前获取的资源对于性能优化很关键。

## 字段说明
### 强缓存
**Response Header**
| 字段名称 | 说明 | 适用http版本 | 特点
| ----- |:---:|:---:|:---:|
| Pragma | 值为`no-cache`时，表示禁用缓存 | 1.0、1.1 | 优先级最高 |
| Expires | 值为缓存过期时间 | 1.0、1.1 | 服务器、客户端时间可能对不上 |
| Cache-Control | 值为缓存过期时间 | **仅1.1** | 配置选项较多 |

注意：
 - 优先级：`Pragma` > `Cache-Control` > `Expires`
 - 因为`Expires`既适用于1.0，也适用于1.1，所以大多数情况下会同时发送`Expires`、`Cache-Control`

#### Cache-Control选项说明
在**Request Header**、**Response Header**都可以使用`Cache-Control`，区别在于：
 - **Request Header**中的`Cache-Control`指导本次请求的缓存策略；
 - **Response Header**中的`Cache-Control`指导下次请求的缓存策略

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

## 用户刷新行为
 - F5、工具栏的刷新按钮
 - Ctrl + F5勾上`Disabled cache`

### F5、工具栏的刷新按钮
`Request Header`会携带：
 - **If-Modified-Since**（如果上次Response里有`Last-Modified`）
 - **If-None-Match**（如果上次Response里有`ETag`）

### Ctrl + F5，或勾上`Disabled cache`
`Request Header`会携带：
 - **Pragma: no-cache**
 - **Cache-Control: no-cache**

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
| 200 | 资源大小 | 从浏览器下载**依然存在**最新资源 |
| 304 | 资源大小 | 命中**协商缓存**，使用本地资源（CDN上的资源） |

## 拓展：在.html的meta里设置缓存策略
（待更新...）

## 参考链接
 - [HTTP缓存控制小结](https://imweb.io/topic/5795dcb6fb312541492eda8c)
 - [from memory cache与from disk cache](https://segmentfault.com/q/1010000013464267)
 - [前端缓存那些事](https://juejin.im/post/5e7ef4a9e51d4546f8784b21)