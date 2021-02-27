# 广播电台复盘

## 基本信息
 - 所用技术: React、Webpack、Babel、JSBridge、Corona等
 - 描述: 云音乐v8.0播客板块之一，以“直播流”形式将电台呈现给用户(对接蜻蜓FM)。 
 - 成果: 拓展音频播放公共组件;Lighthouse体验基线达标;承载10万+日活。

## 职责
- 音频播放组件开发;
- 客户端JSBridge对接;
- 多浏览器兼容/适配;
- 首屏性能优化;
- 接入错误日志上报;







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