# 小程序和H5的区别
> 这里的小程序 一般指的是 “微信小程序”

## 特点
类似传统的 Hybrid 架构。


 <!-- - **WebView**：负责渲染基本网页内容
 - **NativeView**：负责渲染较为复杂的元素（如：地图、底部导航栏等） -->

## 和H5的区别

|   | 小程序 | H5 |
| ----- |:---|:---|
| 运行环境 | 微信团队重构的内置解析器 | 浏览器 |
| 开发成本 | 1. 开发规范、约束；<br/>2. 无需考虑兼容性 | 1. W3C标准规范；<br/>2. 要考虑兼容性 |
| 系统权限 | 能获得更多系统权限（如：录音、扫一扫等） | / |
| 性能体验 | 1. 将 “webview渲染” 和 “js执行” 分离；<br/>2. 通过 **离线包、页面拆分、预加载页面** 等一系列优化手段<br/>让小程序具备了大量的H5优化后的效果。 | / |

## 参考
- [http://www.alloyteam.com/2019/10/h5-performance-optimize/](http://www.alloyteam.com/2019/10/h5-performance-optimize/)