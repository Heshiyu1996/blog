# 单曲播放页性能优化

[[toc]]

## 基本信息
 - 所用技术: React、Webpack、Koa、Lighthouse
 - 描述: 针对云音乐App站外“单曲播放⻚”进行的WebVitals性能指标优化。
 - 成果: 首屏JS体积下降67%，CSS下降75%;Lighthouse评分提升40%，大盘性能提升明显，秒开率小幅提升;承载千万日活。

## 职责
 - 性能指标分析;
 - 代码瘦身、内容按需加载;
 - 性能验证;
 - 优化感官体验;

## 难点
### 性能指标分析
#### 分析步骤
1. 接入APM
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

### 代码瘦身、延迟加载
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