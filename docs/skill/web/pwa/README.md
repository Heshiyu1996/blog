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
navigator.serviceWorker.register('/m/music-mobile-sw.js');

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
 
通过 `window.caches.open(cacheName)` 可以获取/创建相应的 `Cache`实例。（一般是在 `Service Worker` 作用域下）

其中，每个 `Cache`实例 可以 “根据 `Request` 作为 `key`，来存储 `Response`”
```json
Cache: {
    Request1: Response1,
    Request2: Response2
}
```

```js
const cacheWhitelist = ['page_v1']; // 缓存对应的key值

// 1. 创建 `Cache`（时机：Service Worker 注册完成时）
self.addEventListener('install', event => {
    caches.open(cacheWhitelist[0]).then(function (cache) {
        // 对缓存做什么事情
        return cache.addAll([
            offlineUrl
        ]);
    })
    self.skipWaiting();
});

// 2. 更新Cache（时机：Service Worker 激活时）
self.addEventListener('activate', function (event) {
    event.waitUntil(
        // 获取所有Cache对象的key
        caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (key) { // 清除旧版本缓存
                if (key.indexOf('workbox-precache') === -1 && cacheWhitelist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }))
        })
    )
});

// 3. 离线缓存（时机：Service Worker 拦截到“其控制下的的资源”发送请求时）
// 策略：优先使用网络，失败则使用缓存
self.addEventListener('fetch', event => {
    // request.mode = naivgate 存在浏览器兼容性问题，因此需要对 header 的 Accept：text/html 进行判断
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match(offlineUrl);
            })
        );
    }
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
