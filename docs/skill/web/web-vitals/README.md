# Web Vitals
> Web Vitals是谷歌提出的一组用来衡量 用户体验 的度量指标集。

[[toc]]

## 指标集概览
核心指标：
 - **LCP（Largest Contentful Paint）**
 - **FID（First Input Delay）**
 - **CLS（Cumulative Layout Shift）**

> 其它非核心指标：FCP（FirstContentful）、TTFB（Time to First Bytes）、TBT（Total Blocking Time）、TTI（Time to Interactive）

![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5300348259/03ed/c3f4/0ee6/4dbce51aa76973c8f2dceeca5d00324d.png)

## LCP
LCP是**最大内容渲染**。

指的是**当前视窗（viewport）中的最大内容元素的渲染时间。**
> 用来衡量“加载时性能（Loading）”

### 判定的元素
 - `<img>`
 - `<video>(带poster)`
 - `background-image: url()`
 - `<svg:image>`
 - `Block-Level element(containing text node)`（一大块文字）


### 元素的大小
如果一张 图片本身像素 和 渲染像素 不同，会取最小值。

### 影响因素 & 优化思路
 1. 请求html时的服务器响应时间
 2. 阻塞渲染的CSS、JavaScript
 3. 资源加载时间
 4. 客户端渲染（Client-side rending）


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
