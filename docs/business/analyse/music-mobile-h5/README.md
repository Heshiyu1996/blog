# 单曲播放页性能优化

[[toc]]

## 基本信息
 - 所用技术: React、Webpack、Koa、Lighthouse
 - 描述: 针对云音乐App站外“单曲播放⻚”进行的WebVitals性能指标优化。
 - 成果: 首屏JS体积下降67%，CSS下降75%;Lighthouse评分提升40%，大盘性能提升明显，秒开率小幅提升;承载千万日活。

## 职责
 - 性能指标分析;
 - 优化措施（代码瘦身、内容按需加载、SSR）;
 - 性能验证;
 - 优化感官体验;

## 难点
### 性能指标分析
#### 分析步骤
1. 接入APM，由APM的SDK进行收集上报
2. 关注大盘 -> 具体页面
3. 关注Web-Vitals核心指标集（`LCP`、`FID`、`CLS`）
4. 渲染瀑布图（`DomReady`、`FCP`、`LCP`）、加载瀑布图（`DOM解析`、`defer脚本`、`资源加载`）

#### Web-Vitals指标说明
主要关注 Web-Vitals 三个核心指标：LCP、CLS、FID。
> FCP 可作参考。

| 展示名 | 字段名 | 达标标准 |
| ----- |:---:|:---:|
| FCP | 首次内容渲染 | 75% 用户小于 `1 秒` |
| LCP | 最大内容渲染 | 75% 用户小于 `2 秒` （云音乐内部定义阈值） |
| CLS | 累计布局位移 | 75% 用户小于 `0.1` |
| FID | 首次输入时延 | 75% 用户小于 `0.1 秒` |

说明：
 - 仅基于 Chromium 内核的浏览器支持 WebVitals指标
 - 采集覆盖率 30%

#### 加载、渲染指标说明
 - **DomReady = domContentLoadedEventEnd - fetchStart**
    - 即：DOM解析完成、同步资源（如defer脚本）加载执行完成 的时间。
 - **页面完全加载时间 = loadEventStart - fetchStart**



### 优化措施
#### 代码瘦身、延迟加载
1. 懒加载: `loadable-components`、`React.lazy`
> `loadable-components` 是 react官方推荐的懒加载包，因为目前 `React.lazy` 尚不支持 node

2. 延迟加载策略：
   - 条件加载
   - 手势加载
   - 调用时加载
   - 命名导出

```js
// 1. 条件加载
// 思路：通过 loadable-components 包裹，且只在满足一定条件下才渲染
const AsyncFriend = loadable(() => import(/* webpackChunkName: "u-friend" */ './components/friend'));
```

```js
// 2. 手势加载
// 思路：监听 touchstart，在事件回调进行 动态导入、setState

// 2.1 给 document.body / 容器DOM，绑定touchstart事件
document.body.addEventListener('touchstart', this.loadComponent, false);

// 2.2 动态导入 + 设定state
import(/* webpackChunkName: "u-comment" */ './components/comment').then(({ default: AsyncComment }) => {
    this.setState({ AsyncComment });
});
// 2.3 解除事件
document.body.removeEventListener('touchstart', this.loadComponent, false);
```

```js
// 3. 调用时加载
// 思路：利用ES6的import()，调用时加载（同类css也在延迟后一并加载）

// @music/ct-mobile-login
export const AsyncLogin = () => new Promise((resolve) => {
    // 加载 css
    import(/* webpackChunkName: "mobile-login-css" */'@music/ct-mobile-login/dist/index.css');

    // 加载 js
    import(/* webpackChunkName: "@music/ct-mobile-login" */ '@music/ct-mobile-login').then(module => resolve(module));
});
```

```js
// 4. 命名导出
// 思路：将首屏不需要的资源（如svg icon）命名导出，方便 loadable + 动态导入

const AsyncLogoSong = loadable(() => import(/* webpackChunkName: "svg-logo-song" */ '@src/components/svgIcon/detail/LogoSong'));
```


#### SSR



## 离线包+SSR
SSR：

离线包：

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7817848745/2a14/fcfb/bf81/a735051a6342af5b048456d4f3f76372.png" width="500px" />


## PWA+SSR
PWA：作为 web 标准，通过纯 web 的方案去优化性能。

**特点：**
  - cacheStorage（图片、JS、CSS）
  - 精细化控制缓存

配合SSR：将后台直出的 html 缓存到 cacheStorage。下次请求时，优先从本地缓存取，同时发起 http 请求更新本地 html。

配合CSR：将 html 页面缓存到 cacheStorage（通过 outerHTML），下次请求时，优先从本地缓存取，同时发起 http 请求更新本地 html



## 延迟加载
### 图片的延迟加载
 - **[Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)**：异步检测 目标元素 和 父元素（或视窗） 相交的情况。
    - `import { InView } from 'react-intersection-observer';`（impress打点）
> Intersection Observer 注意兼容性。通过 npm包（`intersection-observer`） 进行polyfill


 - `scroll` + `getBoundingClientReact()`，实时赋值`src`属性。


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

<!-- 
### 接口预加载
客户端初始化WebView时，预先获取H5首屏的接口数据，并缓存在内存。H5直接使用缓存，提升首屏渲染速度。

**时机**：
 - 每次新开WebView加载H5时 -->





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



