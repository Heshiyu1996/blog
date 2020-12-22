# 媒体查询
写法：
```css
@media screen and 条件1[ and 条件2] { /* ... */ }
```
[[toc]]

## 常用属性
 - **width**: 设备页面的可视宽度
 - **height**: 设备页面的可视高度
 - **device-width**: 设备的屏幕宽度
 - **device-height**: 设备的屏幕宽度
 - **device-pixel-ratio**: DPR
 - **aspect-ratio**: 可视宽度 / 可视高度
 - **device-aspect-ratio**: 屏幕宽度 / 屏幕高度

> 一般可以搭配`min-`、`max`前缀以表示`最小不低于`、`最大不超过`等含义。

## 常见机型
### pc
```css
/* PC 兼容 */
@media screen and (min-width: 600px) {
    html {
        font-size: 55.5555555px;
    }
}
```

### iphone
```css
/* ip5/se */
@media screen and (max-width: 320px) {
    /* ... */
}

/* ip6-7-8 */
@media screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    /* ... */
}

/* ip6-7-8 plus */
@media screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    /* ... */
}

/* iphone x/xs & iphone xr & iphone xs max */
@media screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3),
screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2),
screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)
 {
    /* ... */
}

/* iphone 12 & iphone 12pro */
@media screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)
 {
    /* ... */
}

/* iphone 12mini */
@media screen and (device-width: 360px) and (device-height: 780px) and (-webkit-device-pixel-ratio: 3)
 {
    /* ... */
}

/* iphone 12pro Max */
@media screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)
 {
    /* ... */
}
```

#### 各型号iphone参数对比：
![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5045058944/f607/2f6a/43d1/d8858781428430c46145d481b509840f.png)

### Android
```css
/* 安卓1080P长屏 */
@media screen and (device-width: 360px) and (min-height: 700px) and (-webkit-device-pixel-ratio: 3){
    /* ... */
}

/* 华为P30 pro */
@media screen and (device-width: 360px) and (device-height: 780px) and (-webkit-device-pixel-ratio: 3){
    /* ... */
}

/* 魅族 某古老机型 */
@media screen and (device-width: 384px) and (device-height: 640px) {
    /* ... */
}

/* 小米 8 */
@media screen and (device-width: 393px) and (device-height: 818px) {
    /* ... */
}
```

## 利用js来计算目标节点定位
> 有时可以通过js来计算定位，搭配`position: fiexed`，可以省去很多css适配工作。

例子：需要处理 **图中绿色DOM节点** 在页面定位适配。

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5045160953/f1b5/c031/1088/4619541d7407e87affa68ea088214ebb.png" width="200px" />

发现，“绿色节点”距离上、下节点（皆为绝对定位的节点）的距离相近
 - 先通过上、下DOM节点的`getBoundingClientRect()`，获取`y`定位
    - <img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5045216239/643e/c7a0/ed9e/609c19b22be3a6e5ecf6c17aa7ca530d.png" width="250px" />
 - 再通过`((顶部y + 顶部height) + 底部y) / 2`，得到中位数，设为绿色节点的y
 - 绿色节点再通过`transform: translateY(-50%)`可定位至上、下DOM节点中间

注意：有时可能需要处理个别小屏手机进行粗粒度较大的适配（如针对绿色节点中的图片进行缩放等）