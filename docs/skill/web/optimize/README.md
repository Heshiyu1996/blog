
# Web性能优化
> 根据业务情况，定义Web性能指标。然后 选取数据参考点、收集数据 ，随后分析每个关键指标反映的数据，最后采取优化手段。

[[toc]]

## 性能指标
一般会关注 2 个类指标：**web-vitals指标、传统指标**。

### web-vitals指标

| 展示名 | 字段名 | 达标标准 |
| ----- |:---:|:---:|
| LCP | 最大内容渲染 | 75% 用户小于 `2 秒` （云音乐内部定义阈值） |
| FCP | 首个内容渲染 | 75% 用户小于 `1 秒` |
| CLS | 累计布局偏移 | 75% 用户小于 `0.1` |
| FID | 首次交互延时 | 75% 用户小于 `0.1 秒` |

> 75% 是为了应对极端情况
> 
> [web-vitals指标详情](./../web-vitals/README.md)

### 传统指标
 - **白屏时间**：开始解析渲染DOM的时间（即：`FCP`）
    - **domLoading - fetchStart**
 - **首屏时间**：“第一屏内容” 渲染完成的时间
    - **第一屏最后一个内容 - fetchStart**
 - **用户可操作时间**：用户可操作时间（即 `DomReady`）
    - **domContentLoadedEventEnd - fetchStart**
 - **页面完全加载时间**：页面所有资源加载完成时间（ `load` 事件触发，也叫 “总下载时间” ）
    - **loadEventStart - fetchStart**

> **秒开率** 指的是 DomReady 在 `1s` 内的数据占比。

## 首屏性能优化
**首屏性能优化** 可以从 2 个方面进行：
 - 资源加载
 - HTML渲染

> 具体方案还取决于：实际需求、优先级、综合成本、ROI等。

### 资源加载
**目标：体积更小的资源包。**
 - 拆包、减包、压缩
 - 懒加载
 - 图片优化

### HTML渲染
**目标：更快地展示内容。**
 - HTTP缓存
 - CDN分发
 - SSR
 - （PWA）ServiceWorker + CacheStorage
 - （Hybrid）H5离线包、数据预请求
 - **Varnish**：缓存服务器的反向代理

> 缓存触发顺序：ServiceWorker -> HTTP缓存 -> CDN -> Varnish

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7817696310/c927/6976/7ced/b09a94db66d40eba0eac5b2512c66fde.png" width="600px" />


:::tip
### 指标收集
收集指标数据的 2 种方法：
 - **window.performance.timing**
 - **web-vitals**
#### window.performance.timing
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

#### web-vitals
`Web-Vitals` 底层是通过拿到 `PerformanceEntry`（性能数据的实例） 然后进行分析。
> 如LCP：浏览器 会通过发送一个 `PerformanceEntry`（`type` 为 `largest-contentful-paint`）来标识最大的内容元素。
:::

## 参考链接
 - [传统性能检测手段](./TRANDITION.md)
 - [前端性能监控方案（首屏、白屏时间等）](https://juejin.im/post/5df4294d518825128306cd5c#comment)
 - [Web 性能优化-首屏和白屏时间](https://lz5z.com/Web%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96-%E9%A6%96%E5%B1%8F%E5%92%8C%E7%99%BD%E5%B1%8F%E6%97%B6%E9%97%B4/)
 - [全新Chrome Devtools Performance使用指南](https://segmentfault.com/a/1190000011516068)
 - [React性能优化的8种方式了解一下？](https://juejin.im/post/5d63311be51d45620821ced8)
 - [Vue 项目性能优化 — 实践指南（网上最全 / 详细）](https://juejin.im/post/5d548b83f265da03ab42471d#heading-2)
 - [前端性能优化--懒加载和预加载](https://segmentfault.com/a/1190000018275268?utm_source=tag-newest)
