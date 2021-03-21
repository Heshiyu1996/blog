# 广播电台复盘

## 基本信息
 - 所用技术: React、Webpack、Babel、JSBridge、Corona等
 - 描述: 云音乐v8.0播客板块之一，以“直播流”形式将电台呈现给用户(对接蜻蜓FM)。 
 - 成果: 拓展音频播放公共组件;Lighthouse体验基线达标;承载10万+日活。

## 职责
- 音频播放组件开发;
- 客户端JSBridge对接;
- 多浏览器兼容/适配;
- 离线包接入
- 接口预加载
- 埋点上报



### 音频播放组件开发
将原有的基于JSBridge的音频组件进行拓展，支持直播流。并对直播流有过了解。
 - 事件监听器 数据不更新（闭包）
 - 流媒体协议
    - RTMP：基于TCP长连接 的 实时消息传送协议。
        - 缺点：移动端不支持，PC端只能通过flash使用
    - HLS：Apple提供的基于HTTP实现的 实时流媒体 技术。（主要用于iOS，Android也支持）
        - 这项流媒体技术会根据 `.m3u8` 的索引文件去不断请求新的 `.m3u8` 和 `.ts` 文件
        - 缺点：多次请求造成服务端压力
    - FLV：把音视频数据封装成FLV，然后通过HTTP传输
        - 缺点：不兼容 iOS 浏览器


### 客户端JSBridge对接
和客户端约定业务层的JSBridge协议，其中也有深入了解过JSBridge的底层工作原理。
 - [JSBridge的工作原理](/skill/web/jsbridge)

### 多浏览器兼容/适配
进行站内站外的浏览器适配，以及兼容性问题解决。

 - [移动端适配](/business/practice/h5/responsive)

 - 兼容性问题解决：[1px](/business/practice/h5/1px)、[Android的字体行高问题](/business/practice/h5/#android下line-height文字垂直居中偏移问题)


### 离线包接入
为了首屏优化，尝试接入离线包，并有了解离线包大致机制。
> [detail](/skill/web/h5-webcache)

### 接口预加载
为了首屏优化，尝试进行接口预加载。
> [detail](/business/practice/h5/optimize/#（hybrid）接口预加载)


### 埋点上报
与 BI 同事沟通，需要上报的字段，并进行上传。
> 将公共字段封装成一个通用函数。











## 工程内部
### css适配
一开始以为只做了简单的用JS定位，走查后兼容性bug较多。
 - 移动端safari底部导航遮挡
 - 对mnb包（mnb.getPageInfo获取系统栏/导航栏）不熟悉
 - 全面屏适配（safe-area-inset-bottom）不熟悉


#### 日后参考
 - 先实现一款（如ipx）比较完美适配
 - ipx其它系列（ip6/7/8 -> ip6/7/8p -> ip5/5se -> ipx/xs & ipxr & ipxs max）
 - 1080P安卓 -> 常用测试机

#### 其它
 - 【移动端项目】web端访问时友好地提示扫码访问（qrcode.react、window.location.href），根据业务需求，看是使用isMobile还是isInNEMapp
 - 微信内二次分享-标题/副标题的编辑
 - 对同AppID下的orpheus链接后带参数，需通过`mp.view.queryDidChanged`监听


#### 调试
 - 【调试工具】eruda（异步加载，可能js加载前更早的日志无法打印）；vconsole（同步加载可打印最早日志，iOS测试包内置: `开发调试-浏览器测试-开启调试模式`）；MusicDevtools（预览小程序）
 - 【RPC调试】mnb在测试环境无法打印日志。
   - 解决：可通过改变`MNBCallback`指向
```js
const fn = window.MNBCallback;

// eslint-disable-next-line func-names
window.MNBCallback = function (...args) {
    const [seq, error, result, options] = args;
    console.log(`回调：seq: ${seq}, error: ${error}, result: `, result, 'options: ', options);
    fn.apply(this, args);
};
```





## 对外沟通
### 客户端
 - 

### 服务端
 - 接口字段格式与常规不同，需二次处理
    - 接入互动系统（收藏功能）：

 - 字段实际下发值格式不定：
    - 接入外部Api（蜻蜓电台）

### 视觉
 - 视觉稿不全面（说是参考DI-FM）
 - 走查较随意（H5没有走查）

### QA