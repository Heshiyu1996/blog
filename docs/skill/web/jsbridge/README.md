# JSBridge通信

[[toc]]

## 现有方案
 1. 通过采取 2 种方式来提供底层的通讯能力
    -  “Native 向 JS上下文 注入对象” （iOS）
    -  “重写prompt”（Android） 
 
 2. 提供 `JS SDK`，并封装到 `npm`包，供业务使用

## 两端通信方式
两端通信方式分为：**JS调用Native、Native调用JS**。

### JS调用Native
JS 调用 Native，有 3 种 通信方法：

 - 拦截Scheme
    - **原理：** “客户端” 拦截跳转请求，并解析上面的参数。
    - **缺点**：URL长度限制；加载后立即通信会白屏（iOS）；

 - 重写prompt
    - **原理：** JS 调用弹窗，会触发 WebView 的事件监听（`onJsPrompt`）。
    - **缺点：** 需额外作兼容（iOS）

 - 向 JS的上下文 注入对象、方法
    - **原理：** 通过 WebView 向 JS的上下文 注入对象、方法

#### 重写prompt
在 JS 调用（`window.prompt`）时，会被 `WebView` 的 `onJsPrompt` 监听。
> 因为 `window.prompt` 占用率会较低，最终采用它。

#### 向 JS的上下文 注入对象、方法
JS 通过 这个对象（或方法） 进行调用时，执行对应的逻辑操作，直接调用 Native 的方法。

 - iOS
    - WKWebView： `window.webkit.messageHandlers` 下 的 `postMessage`方法
    - UIWebView： `JavaScriptScore`

 - Android：
    -  4.2及以上：`addJavascriptInterface`

### Native调用JS
H5 将 JS方法 暴露在 `window`对象 给 Native 调用。
> 原理是让 Native 去执行 “JS代码字符串”。

 - iOS
    - WKWebView： `evaluateJavaScript`
    - UIWebView： `stringByEvaluatingJavaScriptFromString`

 - Android：
    - 4.4以上：`evaluateJavascript`
    - 4.4及以下： `WwbView.loadUrl("javascript:function()")`

## 业务上的使用
```js
// 注册Api
mnb.addMethod({
    schema: 'nm.play.playSongs',
    name: 'playSongs'
});

// 调用Api
mnb.playSongs(params)
```



### JS SDK的生命周期
加载阶段
1. App 启动时，加载 handler 列表
2. WebView 初始化时，加载 JS SDK
3. App 在 web页面 加载完成时，注入 `WebViewBridge`，向 “JS上下文” 注入对象、方法

#### JS SDK使用阶段
1. JS 调用协议（指定 `callback`）
2. JS SDK 生成 `callbackId`（用于缓存 `callback` 的映射）
3. JS SDK 发起底层通信 `WebViewBridge.postMessage`
4. Native SDK收到请求，找到对应 handler 去处理
5. handler 处理完后回调 JS SDK 结果（包括`callbackId`、`result` 、`error`）
7. JS SDK 根据 `callbackId` 找到 `callback`，并传入 `result`、`error` 执行回调


<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7817203514/442b/a449/9afa/80ad78843de506ba0a2f7c5d16e272c0.png" width="500px" />

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7738019941/98ac/8b08/f7db/c6c0c0fcf626b529a2db479a8bde34e5.png" width="500px" />


### JS SDK的封装逻辑
1. 引入 “封装了 JSSDK 的” npm 包

2. 注册并调用 Api 时，会调用 `beforePostMessage` 进行预处理：
 - 参数合法化
 - 生成调用序列号（由前端维护），并保存 “调用的参数” 、 “回调”

```js
beforePostMessage({
    className,
    method: schema,
    params,
    objectId
}, onSuccess, onError);
```

3. 随后，调用 `execute` 进行 “客户端底层调用”
    - iOS（8及以上）：`window.webkit.messageHandlers.WebViewBridge.postMessage`
    - Android：`window.prompt`

>  **不同的Native环境，采用不同底层调用方式**






## 其他
:::tip
背景
#### Scheme注册
App 安装后会在手机系统上注册一个 `Scheme`（比如：`weixin://`、`orpheus://`）。所以在浏览器里访问这个 scheme 地址，系统就会唤起App

#### iOS里WebView的种类
iOS 里有 2 种 WebView：`UIWebView`、`WKWebView`。

其中， `WKWebView` 是 iOS8 之后出现的
 - 优点：占用内存更少，能够更好地支持 HTML5，性能更强大
 - 缺点：不支持缓存、需要自己注入Cookie、拦截 Post 请求时无法解析参数

#### 日常中使用JSBridge的产品
微信。

微信 给 开发者 提供了 JSSDK，该 SDK 中暴露了很多微信native层的方法（比如支付，定位等）。
:::




## 参考
- [JSBridge 的起源](https://www.zoo.team/article/jsbridge)


