# 单曲播放页性能优化

[[toc]]

## 基本信息
 - 所用技术: React、Webpack、Koa、Lighthouse
 - 描述: 针对云音乐App站外“单曲播放⻚”进行的WebVitals性能指标优化。
 - 成果: 首屏JS体积下降67%，CSS下降75%;Lighthouse评分提升40%，大盘性能提升明显，秒开率小幅提升;承载千万日活。

## 职责
 - 性能指标分析;
 - 首屏性能优化;
 - 真实侧性能验证;
 - 优化感官体验;

## 难点
### 性能指标分析
#### 分析步骤
1. 接入APM，由APM的SDK进行收集上报
2. 关注大盘 -> 具体页面
3. 关注Web-Vitals核心指标集（`LCP`、`FID`、`CLS`）
4. 加载瀑布图（`DOM解析`、`defer脚本`、`资源加载`）、渲染瀑布图（`DomReady`、`FCP`、`LCP`）

#### Web-Vitals指标说明
主要关注 Web-Vitals 三个核心指标：LCP、CLS、FID。
> FCP 可作参考。

| 展示名 | 字段名 | 达标标准 |
| ----- |:---:|:---:|
| LCP | 最大内容渲染 | 75% 用户小于 `2 秒` （云音乐内部定义阈值） |
| FCP | 首次内容渲染 | 75% 用户小于 `1 秒` |
| FID | 首次输入时延 | 75% 用户小于 `0.1 秒` |
| CLS | 累计布局位移 | 75% 用户小于 `0.1` |

说明：
 - 仅基于 Chromium 内核的浏览器支持 WebVitals指标
 - 采集覆盖率 30%

#### 加载、渲染指标说明
 - **DomReady = domContentLoadedEventEnd - fetchStart**
    - 即：DOM解析完成、同步资源（如defer脚本）加载执行完成 的时间。
 - **页面完全加载时间 = loadEventStart - fetchStart**



### 首屏性能优化
> [detail](/skill/web/optimize/#首屏性能优化)

### 性能验证
优化后，需要 关注整体指标的新表现 ，以 **验证本次优化是否有效** 。

 - **本地验证：** Chrome插件（Web-Vitals）、Performance（Fast/Slow 3G）

 - **测试环境验证：** APM、Lighthouse审计
    - 对比：加载瀑布图、渲染瀑布图、WebVitals核心指标集


### 优化感官体验
#### 微信开放标签
接入 “App 跳转按钮 `<wx-open-launch-app>`”，它具有 “在 微信环境 中调起 APP” 的能力。
> 针对 Android(5.0+)，因为 iOS 通常已经实现 Universal Link 逻辑

 
:::tip
准备工作：
 - 微信公众平台：
    - 设置 `JS接口安全域名`
 - 微信开放平台：
    - 绑定 “希望跳转的App” 、 “公众号”
 - 前端工程：
    - 引入 `微信JS-SDK 1.6.0+`
    - 配置 `wx.config`、`Appid`，生成签名
:::

##### 组件封装
采用 **渐进式** ：
 - 因为 **微信开放标签渲染时机比较晚**，且 “生成签名”、“绑定域名”阶段 都可能导致 **渲染失败**
 - 为了页面不发生重绘、进行错误兜底
 - 按钮设为全透明，覆盖在按钮之上。（即使渲染失败，依然可以采用 原按钮 逻辑）

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7687321724/b56a/42be/ecd0/4eacd866d2a7c9e0312aa45497fdf946.png" width="300px" />
