# JSBridge通信原理

:::tip
背景
#### Scheme注册
App 安装后会在手机系统上注册一个 `Scheme`（比如：`weixin://`、`orpheus://`）。所以在浏览器里访问这个 scheme 地址，系统就会唤起App

#### iOS里WebView的种类
iOS 里有 2 种 WebView：`UIWebView`、`WKWebView`。

其中， `WKWebView` 是 iOS8 之后出现的
 - 优点：占用内存更少，能够更好地支持 HTML5，性能更强大
 - 缺点：不支持缓存、需要自己注入Cookie、拦截 Post 请求时无法解析参数
:::



## JS调用Native
JS 调用 Native，有 3 种 通信方法：
 - 拦截 Scheme
    - **原理：** “JS侧” 利用 “跳转” 来发起请求，“客户端” 拦截请求，并解析上面的参数。
    - **缺点**：请求可能会丢失。
    > 如：URL 有长度限制；`WKWebView` 会限制 “连续跳转” 等原因。

 - 拦截弹窗
    - **原理：** 弹窗会触发 WebView 相应事件。
    - **缺点：** `UIWebView` 不支持。
 - 向 JS的上下文 注入对象、方法
    - **原理：** 通过 WebView 向 JS的上下文 注入对象、方法，可以让 JS 直接调用 Native。

### 向 JS的上下文 注入对象、方法
#### iOS
##### UIWebView
特点：兼容 iOS 低版本，同步返回。

 1. 获取 JS上下文
 2. 注入 Block

##### WKWebView
特点：iOS8及以上，异步返回。

 1. 注入对象： `addScriptMessageHandler`
    - 实际上只有 `postMessage` 方法
 
 2. 接收参数: `didReceiveScriptMessage`

 3. 销毁对象： `removeScriptMessageHandler`


#### Android
 - 注入对象： 通过注解 `@JavascriptInterface`

## Native调用JS
一般直接执行JS代码字符串。

注意：**客户端只能调用挂载到 `window` 对象上的方法**。


 - iOS
    - UIWebView： `stringByEvaluatingJavaScriptFromString`
    - WKWebView： `evaluateJavaScript`

 - Android：
    - 4.4以上：`evaluateJavascript`
    - 4.4及以下： `loadUrl`

## JSBridge通信
基于 `WebViewJavascriptBridge` 实现。

它结合了 **Scheme协议 + 向JS上下文注入对象/方法**。

因为 Android 和 iOS 不一样的通信方式，需要封装，然后给外部提供一致的 API。

 - Android：通过注解暴露给 JS

<!-- 
### 基础API
 - callHandler(name, params, callback)

 - hasHandler(name)

 - registerHandler(name) -->