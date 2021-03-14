# PWA

[[toc]]

PWA（Progressive Web App）是指 “渐进式Web应用”。
> 兼容性： iOS(11.3+)、Chrome for Android(40.0)

## 和 Web App的区别
PWA 具有 “渐进增强” 的特点：

  - 离线存储
 
 - 通知推送

 - 桌面访问

以上的功能的核心都是 **Service Worker**。

## Service Worker

|   | 说明 |
| ----- |:---|
| 定义 | 相当于一个 Proxy，用于 监听、管理“请求和响应” |
| 运行环境 | 运行在一个单独的线程下 |
| 生命周期 | 1. 当 “浏览器进程” 关闭后，Service Worker线程 **会销毁**；<br/>2. 当 “网页” 关闭后，Service Worker线程 **不会被销毁** |
| 作用 | 仅对 `https` 、 `http://localhost` 有效 |


<!-- Service Worker 可以使得 Web App 可以与 Native App 开始真正意义上的竞争。 -->

**用法**：
```js
// 注册Service Worker

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/m/music-mobile-sw.js');
}

// 通过 `self` 访问全局上下文
// 监听 “注册完成” 事件
// 用处：一般用来创建 cache实例，（使用 “离线缓存” 能力）
self.addEventListener('install', event => {});

// 监听 “激活完成” 事件
// 用处：一般用来更新缓存文件
self.addEventListener('activate', event => {});

// 监听 “请求” 事件（仅针对那些被 service worker 控制的资源 才会触发）
// 用处：一般用来拦截请求，当 请求失败 时从 cache 里取
self.addEventListener('fetch', event => {});
```


### 离线存储
**原理**：在 `Service Worker` 线程下，调用 `cacheStorage` 的 Api，从而实现更精细化地控制缓存。

> 虽然 `cacheStorage` 定义在 `Service Worker` 规范下，但也可以不一定在下面用。只是搭配 `Service Worker` 的各个时机可以更好地控制缓存。

<img src="https://mdn.mozillademos.org/files/12634/sw-fetch.png" width="500px" />

#### 具体步骤
:::tip
`window.caches` 可获取 `CacheStorage对象`
  - open(version): 创建/获取 指定版本下 的 `Cache实例`
  - keys(): 获取所有 `Cache实例` 的版本
  - delete(version)：删除 指定版本下 的 `Cache实例`
  - match(request)：检查给定的 request 是否为 `Cache实例` 跟踪的 request

`cache` 是 `Cache实例`
 - addAll([path1, path2...]): 让 `Cache实例` 跟踪指定的 path
 - push(request, response): 将 request、response 添加到 `Cache实例`
:::

通过 `window.caches.open(cacheName)` 可以获取/创建相应的 `Cache实例`。
> 一般是在 `Service Worker` 作用域下

其中，每个 `Cache`实例 可以 “根据 `Request` 作为 `key`，来存储 `Response`”
```json
Cache: {
    Request1: Response1,
    Request2: Response2
}
```

```js
const VERSION = 'v1';
const offlinePath = './static/m1.jpg';

// 1. 创建 Cache
// 时机：Service Worker 注册完成时
// Api：
//   - window.caches.open()
//   - cache.addAll()
self.addEventListener('install', event => {
    window.caches.open(VERSION).then((cache) => {
        // 指定 Cache实例 要跟踪的 request
        return cache.addAll([
            offlinePath
        ]);
    })
});

// 2. 更新 Cache
// 时机：Service Worker 激活时
// Api：
//   - window.caches.keys()
//   - window.caches.delete()
self.addEventListener('activate', function (event) {
    event.waitUntil(
        // 获取所有Cache对象的key
        window.caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map((cacheName) => {
                // 如果当前版本和缓存版本不一致
                if (cacheName !== VERSION){
                    return window.caches.delete(cacheName);
                }
            }))
        })
    )
});

// 3. 返回 Cache （优先使用网络，失败则使用缓存）
// 时机：捕获到请求
// Api：
//   - window.caches.match()
//   - window.caches.open()
//   - cache.push
self.addEventListener('fetch', event => {
    event.respondWith(
        window.caches.match(event.request)
        .catch(() => fetch(event.request))
        .then(res => {
            window.caches.open(VERSION).then(cache => cache.push(event.request, response))
            return res.clone();
        })
        .catch(() => window.caches.match(offlinePath))
    )
});
```


### 通知推送
通过 `Push API` 和 `Notification API` 实现。

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7771575131/cd3e/213d/0c5d/6ad0cd4af2bcdd5d41765760dd5dd440.png" width="300px" />

### 桌面访问
通过 `manifest.json` 文件，可以配置 “启动页”、“图标”等信息；也可以实现将 “网页” 添加到主屏幕；

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7771550768/d875/1261/30bb/2957e2eb443dff933c988b7ec7730b4d.png" width="300px" />

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7771590050/b9be/eaf6/2836/b88d525801fd4104e7fa4247c3b54edf.png" width="500px" />

## 参考
 - [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)
 - [PWA 系列 -- Cache技术](https://zhuanlan.zhihu.com/p/52324412)
