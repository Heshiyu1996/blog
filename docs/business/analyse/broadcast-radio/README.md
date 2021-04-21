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
