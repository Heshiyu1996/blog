# PWA

[[toc]]

PWA（Progressive Web App）是指 “渐进式Web应用”。
> 兼容性： iOS(11.3+)、Chrome for Android(40.0)

## 和 Web App的区别
对于 Web App 来说，PWA 具有 “渐进增强” 的特点：

 - 离线存储
 
 - 通知推送

 - 桌面访问

以上的功能的核心是 **Service Worker**。

## Service Worker
**`Service Worker` 相当于一个 Proxy，用于 监听、管理“请求和响应”。**

**运行环境**：它运行在一个单独的线程下，不依赖某一个 WebView。

<!-- Service Worker 可以使得 Web App 可以与 Native App 开始真正意义上的竞争。 -->

**生命周期**：
当浏览器进程关闭后，Service Worker线程也会关闭；当网页关闭后，Service Worker不会被销毁（若内存足够）。

**用法**：
 - 注册Service Worker
    ```js
    navigator.serviceWorker.register('/m/music-mobile-sw.js');
    ```
 - 通过 `self` 访问全局上下文
 - 针对 `https` 、 `http://localhost`有效


### 离线存储
 1. 注册 `Service Worker`
 2. 通过监听各类事件，来完成离线存储：
    - `install` ：添加缓存文件
    - `activate` ： 更新缓存文件
    - `fetch`： 拦截请求，直接返回缓存数据

**优点**：提升首屏性能。


### 通知推送
通过 `Push API` 和 `Notification API` 实现。

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7771575131/cd3e/213d/0c5d/6ad0cd4af2bcdd5d41765760dd5dd440.png" width="300px" />

### 桌面访问
通过 `manifest.json` 文件，可以配置 “启动页”、“图标”等信息；也可以实现将 “网页” 添加到主屏幕；

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7771550768/d875/1261/30bb/2957e2eb443dff933c988b7ec7730b4d.png" width="300px" />

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7771590050/b9be/eaf6/2836/b88d525801fd4104e7fa4247c3b54edf.png" width="500px" />

## 参考
 - [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)
