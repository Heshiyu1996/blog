
# Web性能优化
> 根据业务情况，定义Web性能指标。然后 选取数据参考点、收集数据 ，随后分析每个关键指标反映的数据，最后采取优化手段。

[[toc]]

## 指标定义
**性能指标** 一般会关注 2 个层面：**Web-Vitals、重要时间指标**。

### Web-Vitals
 - **LCP（Largest Contentful Paint）**：最大内容渲染
    - 75% 用户小于 2 秒
 - **FCP（First Contentful Paint）**：首个内容渲染时间（即 “白屏时间”）
    - 75% 用户小于 1 秒
 - **FID（First Input Delay）**：首次交互延时
    - 75% 用户小于 100毫秒
 - **CLS（Cumulative Layout Shift）**：累计布局偏移
    - 75% 用户小于 0.1

### 时间指标
 - **白屏时间**：开始解析渲染DOM的时间（即：`FCP`）
    - **domLoading - fetchStart**
 - **首屏时间**：“第一屏内容” 渲染完成的时间
    - **第一屏最后一个内容 - fetchStart**
 - **用户可操作时间**：用户可操作时间（即 `DomReady`）
    - **domContentLoadedEventEnd - fetchStart**
 - **页面完全加载时间**：页面所有资源加载完成时间（ `load` 事件触发，也叫 “总下载时间” ）
    - **loadEventStart - fetchStart**

## 指标收集
有两个方式可以收集到指标数据：**window.performance.timing、web-vitals**

### window.performance.timing
`window.performance.timing` 可以获取 **页面渲染过程中，各个时间段的时间戳**。

<!-- <img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7801752160/a44d/26f6/b9ec/b37ba8a5e6a78d546cbdaf6ede82b25f.png" width="300px" /> -->


<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7801768838/15e1/ad4f/1047/69fbc1fd74e514fa9618588aa5319d96.png" width="700px" />

几个重要的时间属性：
 - `navigationSart`：上一个文档 `unload` 的时刻（若上一个文档为空，值为`fetchStart`）
 - `fetchStart`：浏览器请求文档 就绪 的时刻（下一步是检查缓存之前）
 - `domLoading`：**开始解析DOM** 的时刻
 - `domContentLoadedEventEnd`：**DOM解析完成** 的时刻（即：触发 `DOMContentLoaded` 事件）
 - `loadEventStart`：**`load` 事件触发** 的时刻
 - `loadEventEnd`：**`load`事件结束** 的时刻

> DOMContentLoaded：页面元素加载完毕，**可正常交互**。**但图片资源可能还未加载完成**；
> 
> load：指页面上 **所有资源 都加载完成**。

### web-vitals
`Web-Vitals` 底层是通过拿到 `PerformanceEntry`（性能数据的实例） 然后进行分析。
> 如LCP：浏览器 会通过发送一个 `PerformanceEntry`（`type` 为 `largest-contentful-paint`）来标识最大的内容元素。

## 首屏优化
### 代码层面
样式：
 - 图片压缩（webpack tiny）（LCP）
 - 图片懒加载（LCP）
 - 非首屏工具包的css拆包、
 - preload（CLS）

JS：
 - **代码瘦身、拆包**
 - 延迟加载

架构：
 - SSR

### 缓存层面
 - 浏览器缓存（强缓存、协商缓存）
 - CDN
 - ServiceWorker
 - **Varnish**：缓存 服务器 返回的结果。当后续有相同的请求，Varnish不会再将这个请求转发到服务器，返回 上次缓存结果
 - （Hybrid应用）H5离线包


<!-- 
### 代码方面
 - 懒加载、按需加载
 - 减少DOM元素数量
 - 减少DOM访问
 - 使用css内联样式、放到页面顶部
 - 将js适当defer/async、放到页面底部

### 工程方面
 - 合理拆包，代码分割
 - 打包，缩减代码体积

### 请求方面
 - 减少DNS查询
 - 减少HTTP请求（因为数据在网络中的传输最大可消耗80%时间）
    - 充分利用“强缓存/协商缓存”
    - 雪碧图
 - 减小cookie大小
 - 使用`gzip`的压缩方式
 - 使用CDN
 - 使用SSR -->

## 延迟加载
### 图片的延迟加载
 - **[Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)**：异步检测 目标元素 和 父元素（或视窗） 相交的情况。

 - `scroll` + `getBoundingClientReact()`，实时赋值`src`属性。

> Intersection Observer 注意兼容性。通过 npm包（`intersection-observer`） 进行polyfill

## 预加载的实现
原理：将所需资源提前请求加载到本地，这样后面在需要用到时就直接**从缓存取资源**。

1、使用`display: none`

2、使用`Image`对象
```js
let image = new Image();
image.src = "images.1.png"
```

3、`<link>`的`preload`
```html
<link rel="preload" href="test.mp4" as="video" type="video/mp4">
```
这种方式有资源的类型要求。

和懒加载的区别：预加载是提前加载、懒加载是延迟加载。


## 参考链接
 - [传统性能检测手段](./TRANDITION.md)
 - [前端性能监控方案（首屏、白屏时间等）](https://juejin.im/post/5df4294d518825128306cd5c#comment)
 - [Web 性能优化-首屏和白屏时间](https://lz5z.com/Web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96-%E9%A6%96%E5%B1%8F%E5%92%8C%E7%99%BD%E5%B1%8F%E6%97%B6%E9%97%B4/)
 - [全新Chrome Devtools Performance使用指南](https://segmentfault.com/a/1190000011516068)
 - [React性能优化的8种方式了解一下？](https://juejin.im/post/5d63311be51d45620821ced8)
 - [Vue 项目性能优化 — 实践指南（网上最全 / 详细）](https://juejin.im/post/5d548b83f265da03ab42471d#heading-2)
 - [前端性能优化--懒加载和预加载](https://segmentfault.com/a/1190000018275268?utm_source=tag-newest)
