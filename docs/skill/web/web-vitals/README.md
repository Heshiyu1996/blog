# Web Vitals
> Web Vitals是谷歌提出的一组用来衡量 用户体验 的度量指标集。
> 
> 标准来自：W3C Web Performance Working Group

[[toc]]

## 指标集概览
核心指标：
 - **LCP（Largest Contentful Paint）**：最大内容渲染
 - **FID（First Input Delay）**：首次交互延时
 - **CLS（Cumulative Layout Shift）**：累计布局偏移

> 其它非核心指标：FCP（FirstContentful）、TTFB（Time to First Bytes）、TBT（Total Blocking Time）、TTI（Time to Interactive）

![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5300348259/03ed/c3f4/0ee6/4dbce51aa76973c8f2dceeca5d00324d.png)

## LCP
LCP是**最大内容渲染**。

指的是**当前视窗（viewport）中的最大内容元素的渲染时间。**
> “内容元素”指的是：image、文字block、Video（poster）、带image的svg
> 
> 用来衡量“加载时性能（Loading）”。一个快速LCP可以减少用户流失率。

> 如果一张图片的 “本身像素” 和 “渲染像素” 不同，会取最小值。

### 重要性
 - `load`、`DOMContentLoaded`，不一定与 “用户实际看到的现象” 相对应
 - `FCP` 只能捕获到 页面开始渲染的时间（如果一个页面仅仅展示loading，这时间对用户并没有太大作用）

所以，**衡量一个页面的主要内容的加载时间，更准确的应该是测量 “最大内容渲染时间”。**


### 对“元素的尺寸”的判定标准
 - 渲染并对用户可见的
 - 统计尺寸：只统计该元素在视窗中首次渲染的大小（不考虑尺寸/布局变化）
 - 如果当前最大元素在渲染后被移出了，那它仍然是最大的。除非找到更大的
 - 对于溢出：Viewport 内的可见大小（“超出Viewport的不可见部分” 不计）
 - 对于图片：
```js
// 固有尺寸（Intrinsic Size）
// 实际渲染尺寸（Visible Size）
Math.min(IntrinsicSize, VisibleSize);
```
 - 对于文字块：只考虑文本节点的大小
 - 对于 `margin`、`padding`、`border` 不计

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7628151137/9104/de54/ff65/1e4a0fdc5b3d6f7db1ef3fe3aa862ccd.png" width="500px" />


### 记录时机
#### 做法
对于一个 “最大内容元素”，会通过 dispatch 一个 [PerformanceEntry](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry)。

但页面一般是分阶段加载的，所以 “最大内容元素” 可能也会改变。

所以有可能一开始记录的是 “尺寸较小的元素”，随后才渲染“较大的元素”。（这时应该 dispatch 另一个 `PerformanceEntry`）

#### 停止记录
当用户开始与页面交互（`click、tab、scroll、keypress`）时，停止记录。
> 因为用户发生交互，很可能就会改变可见内容

**所以，最终的性能分析报告里，应该只关心最后一个 `PerformanceEntry`。**

> 如果用户是以 “后台打开Tab的方式” 渲染页面，**LCP时间会一直计时**，直到切到这个 tab 时才会上报。


### 影响因素 & 优化思路
#### 影响因素
 1. 请求html的服务器响应时间
 2. 阻塞渲染的CSS、JavaScript
 3. 资源加载时间
 4. 客户端渲染（Client-side rending）

#### 优化思路
 1. PRPL模式(Apply instant loading with the PRPL pattern)
 2. Optimizing the Critical Rendering Path
 3. Optimize your CSS
 4. Optimize your Images
 5. Optimize web Fonts
 6. Optimize your JavaScript (for client-rendered sites)

#### 参考
 - [how-to-improve-lcp](https://web.dev/lcp/#how-to-improve-lcp)
 - [Optimize LCP](https://web.dev/optimize-lcp/)

### 测量标准
满足 “大多数用户” 在页面开始加载的前 `2.5s` 内，为 **优秀**
> “大多数”的阈值是 75%

<img src="https://web.dev/vitals/lcp_8x2.svg" width="420px" />

### 测量工具
#### 真实环境
 - `web-vitals` 库

Chrome User Experience Report
PageSpeed Insights
Search Console (Core Web Vitals report)
web-vitals JavaScript library

#### 实验室环境
 - Chrome DevTools
 - Lighthouse





## FID
FID指的是**用户首次输入事件的延迟**（注意是**首次**）。
> 用来衡量“可交互性（Interactivity）”

### 判定范围
 - `click`
 - `tap`
 - `key press`

不依赖事件处理器，但需要主线程空闲的**也算**：
 - `checkbox`
 - `radio`
 - `select`
 - `text`
 - `link`
> 
> 不算：`scrolling`、`zooming`

所以， `FID` 的收集时机为：当用户首次触发了以上事件其中一种，直到 “浏览器开始处理 事件监听器 以响应用户” 的时间

### 影响因素 & 优化思路
**影响因素：**

解析、执行了太重的JavaScript，导致主线程繁忙。

**优化思路：**
 1. 减少JS文件体积（Code-splitting、延迟加载）
 2. 减少主线程执行开销（拆分Long Tasks、异步执行、web worker）


## CLS
CLS指的是**累积页面布局偏移**。
> 用来衡量“视觉稳定性（Visual Stability）”

```
布局位移评分 = 影响面积分数 * 距离分数

# “影响面积分数” = （移动前 U 移动后） / 视窗面积
# “距离分数” = 移动的最大距离 / 视窗的长边
```

### 影响因素 & 优化思路
 1. 添加元素大小属性（width、height）
 2. 不要在已有内容上方插入新的内容
 3. 使用不影响布局的动画（transform、animation）
 4. 可以适当选择绝对定位

## 测量工具
 - Chrome Devtools-Performance
    - LCP、CLS、Longtask、TBT（Total blocking time）
 - Chrome Devtools-Lighthouse
 - Chrome插件：Web Vitals
 - Npm包：web-vitals
    - 在项目内导出并执行getCLS、getFID、getLCP

## 优化步骤
“线上真实数据”、“Lighthouse”、“devtools”三者的关系

 1. 通过 **线上真实数据** 发现不合格的体验问题
 2. 使用 **Lighthouse** 工具诊断，根据优化建议进行优化
 3. 结合 **devtools** 等工具进行优化
 4. 使用 **Lighthouse** 验证改进效果
 5. 通过 **线上真实数据** 验证改进结果

## 参考
- [Largest Contentful Paint (LCP)](https://web.dev/lcp/)
