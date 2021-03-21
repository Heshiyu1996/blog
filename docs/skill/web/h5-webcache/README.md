# H5离线包
> H5离线包是 针对移动端web资源 本地缓存的解决方案。

**原理：通过 WebView 统一拦截Url，将 “资源” 映射到 “本地离线包”。**

当资源更新时，客户端检测资源版本，从而下载、维护本地缓存中的资源。
> 1. 每个离线包都会有个`md5`
> 
> 2. 客户端可在 首次打开/重启/每间隔两小时 进行更新离线包版本

**流程**：

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/7747115528/a3ef/810c/cbd5/d6652b5ae0b7526c3133e28294946071.png" width="600px" />


### 接入离线包
1. 前端保持 原有的开发部署 流程（即：上传到CDN）


2. **生成离线包**：通过 webpack plugin 生成压缩文件，上传到 “离线包配置平台” 
> “离线包配置平台” 用于管理各个离线包应用

## 参考
- [h5 秒开方案大全](http://www.alloyteam.com/2019/10/h5-performance-optimize/comment-page-1/#prettyPhoto)
