# 移动端首屏性能优化
> 移动端性能最关注的是 “秒开”（即：“首屏性能”）。以下均围绕 “首屏性能优化” 展开

**首屏性能优化** 可以从 2 个方面进行：
 - 资源加载
 - HTML渲染

> 具体方案还取决于：实际需求、优先级、综合成本、ROI等。

## 资源加载
**目标：体积更小的资源包。**
 - 拆包、减包、压缩
 - 懒加载
 - 图片优化

### 拆包、减包、压缩
可从 2 方面考虑：**webpack侧（工程角度）、业务侧**。

#### webpack侧
- 划分不同 `Entry` （拆包）

- `optimization.splitChunks` （减包）
    - 配置 `cacheGroups` 。设置匹配规则，从 不同Chunk之间 提取公共包

- `optimization.minimizer` （压缩）
    ```js
    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

    optimization: {
        minimizer: [
            // JS压缩
            // production 默认会开启 tree-shaking、js 代码压缩
            // 但手动配置 optimization.minimizer 会使得 “默认压缩” 失效，需重新指定
            new TerserPlugin({}),

            // CSS压缩
            new OptimizeCssAssetsPlugin({})
        ]
    }
    ```

#### 业务侧
- **动态导入** （拆包）

```js
// import()
import(/* webpackChunkName: "u-comment" */ './components/comment')
    .then(({ default: AsyncComment }) => {
        this.setState({ AsyncComment });
    });
```


### 懒加载
#### JS
- `defer`、`async`、动态创建Script（监听`load`）、监听手势
    - 分别对应 `domContentLoaded`前 、 `load`前、 `load`后、`手势触发`后

- `import()` （工具包）

- `React.lazy` （React组件）


```jsx
// defer：异步加载。直到 domContentLoaded 执行前执行（按顺序）
// 适用于：依赖DOM（页面文案高亮）
<script src="./test.js" defer />

// async：异步加载。在 load 执行前执行（不能保证执行顺序）
// 适用于：不依赖DOM（如统计脚本）
<script src="./test2.js" async />

// 动态创建Script（监听load）。在 load 之后执行
function downloadScript() {
    let element = document.createElement('script');
    element.src = './test3.js';
    document.body.appendChild(element);
}
window.addEventListener('load', downloadScript, false); // 在冒泡阶段

// import()：动态导入
import('./components/comment').then(({ default: AsyncComment }) => {
    this.setState({ AsyncComment });
});

// React.lazy：使用时需用 <React.Suspense> 包裹
const AsyncFriend = React.lazy(() => import(/* webpackChunkName: "u-friend" */ './components/friend'));
```


#### 静态图片
 - `Intersection Observer API`：异步监听 `target` 和 `父元素（或视窗）` 的相交情况。

```js
// 1. 实例化一个 intersection observer 实例
let io = new IntersectionObserver(callback, option);

var option = {
    root: null, // 被监听对象的具体父元素（默认为视窗）
    rootMargin: '0px 0px 100px 0px', // root的扩展部分（目前表示，距离父元素还有100px（未到）就可触发）
    threshold: 0, // 默认为0，表示刚相交时触发，之后再也不触发。
}

// 2. 事件监听触发回调
function callback (entries) {
    entries.forEach(item => {
        // 该元素发生相交
        if (item.isIntersecting) {
            // 开始加载图片，把dataset.origin赋值src
            item.target.src = item.target.dataset.origin;
            // 停止监听已开始加载的图片
            io.unobserve(item.target);
        }
    })
}

let imagesDOM = document.querySelectorAll('.lazyload');
imagesDOM.forEach(item => io.observe(item));
```

> 使用 [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 注意兼容性。通过 npm包（`intersection-observer`） 进行 polyfill
> 
> 传统方法：监听`scroll` + `getBoundingClientReact()`，实时赋值`src`属性。



### 图片优化



## HTML渲染
**目标：更快地展示内容。**
 - HTTP缓存
 - CDN分发
 - SSR
 - （PWA）ServiceWorker + CacheStorage
 - （Hybrid）H5离线包、接口预加载
 - **Varnish**：缓存服务器的反向代理

### HTTP缓存
**原理：使用 “强缓存、协商缓存”。若命中直接从本地缓存取**

### CDN分发
**原理：**

### SSR

### ServiceWorker + CacheStorage


### （Hybrid）H5离线包
**原理：通过 WebView 统一拦截Url，将 “资源” 映射到 “本地离线包”。**
> [detail](/skill/web/h5-webcache)

### （Hybrid）接口预加载
**原理：客户端初始化WebView时，预先获取H5首屏的接口数据，并缓存在内存。H5直接使用缓存。**


**步骤**：
 1. 业务上，可通过配置 `appJson` 告知 Native 需预先请求的接口
 2. Native 通过初始化 WebView 时请求数据
 3. 前端侧 调用 JSBridge 获取数据

### Varnish
缓存服务器的反向代理。
