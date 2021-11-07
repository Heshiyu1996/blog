
# 动画
[[toc]]

## APNG和WEBP
`APNG`（for iOS），是 PNG 的位图动画扩展
 - 支持24位真彩色图片，且支持 8位Alpha透明通道
 - 体积会比WEBP、GIF更小

`WEBP`（for Android）

## Lottie
以 Json格式 存储动画。
> 动画思想：绘制某个图层时，不断地改变 CSS属性

 - 动效：AE -> JSON
 - 开发： JSON -> 动画

```js
// 引入 lottie-web
import lottie from 'lottie-web';
// 引入动画 json文件
import animationJsonData from 'xxx-demo.json';

lottie.loadAnimation({
    // 指定动画容器
    container: document.getElementById('myDom'),
    // 指定动画数据
    animationData: animationJsonData,
    // 指定渲染模式：undefined（表示html） | svg | canvas
    renderer: 'svg',
    // 是否自动播放
    autoplay: true,
    // 是否循环
    loop: true
});
```

### 不足
1. 包本身体积较大（Gzip: 39k）
2. 用 json文件 存储动画不方便压缩体积

## SVG

## GIF
只支持 8 位 256 种颜色，且不支持Alpha透明通道
 - 会存在边缘毛刺、白边

![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5736661570/0473/0d3b/f005/c22a432f057f13bab80b7472e7e0e01f.png)

## 参考链接
 - [剖析 lottie-web 动画实现原理](https://mp.weixin.qq.com/s/yUrrXpZRs-fnlTLohPMLEQ)
