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
 - aspect-ratio: 可视宽度 / 可视高度
 - device-aspect-ratio: 屏幕宽度 / 屏幕高度

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

#### iphone在其他浏览器的适配
##### Safari
```css
/* iphone x/xs & iphone xr & iphone xs max */
@media screen and (device-width: 375px) and (height: 635px) and (-webkit-device-pixel-ratio: 3),
    screen and (device-width: 414px) and (height: 703px) and (-webkit-device-pixel-ratio: 2),
    screen and (device-width: 414px) and (height: 719px) and (-webkit-device-pixel-ratio: 3)
 {
    /* ... */
}
```
##### Weixin

```css
/* iphone xr */
@media screen and (device-width: 375px) and (height: 635px) and (-webkit-device-pixel-ratio: 3),
    screen and (device-width: 414px) and (height: 808px) and (-webkit-device-pixel-ratio: 2),
    screen and (device-width: 414px) and (height: 719px) and (-webkit-device-pixel-ratio: 3)
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

## 开发问题
### Q1、媒体查询使用
1. 定位某一种机型：`device-width`、`device-height`以及`dpr`
> 因为不管网页在哪里被打开，`device-width`只跟设备有关（同一个设备，这个值不变）

2. 定位某种机型在某浏览器下：`width`、`height`以及`dpr`

### Q2、开发小程序的兼容方案
iOS：
 - 先按照`device-width`、`device-height`进行开发
    - 效果预览：Chrome模拟器、MusicDevtools小程序预览
 - 再适配：H5
    - 效果预览：微信内置浏览器、云音乐App内置浏览器
 - 最后适配：自带浏览器
    - 效果预览：Safari

### Q3、ipxr、ipxsMax设备屏幕可见宽度/高度相同，为什么还需要写两套样式？
原因：
 - “设备宽度/高度”指的是：**设备屏幕可见宽度/高度**（单位是缩放为100%时的“css像素”）
 - 但实际上它们的ppi不同，所以设备像素个数、大小不一样：
    - ipxr的分辨率：828 * 1792px（设备像素）
    - ipxs Max的分辨率：1242 * 2688px（设备像素）

![alt](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5079712508/b98e/13f6/bfdd/562e03b1923b796994f109aa4b206dda.png)

所以同样设定同样的`css值`时，它们可能最终呈现的样式可能不太一样，需要分别做适配：
```css
/* iphone xr */
@media screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    .title {
        /* DPR为2，会用 2 * 2 个设备像素去呈现 */
        width: 1px;
        height: 1px;
    }
}

/* iphone xs Max */
@media screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    .title {
        /* DPR为3，会用 6 * 6 个设备像素去呈现 */
        width: 2px;
        height: 2px;
    }
}
```

## 参考资料
 - [name="viewport" width="device-width" 到底都是啥](https://blog.csdn.net/lamanchas/article/details/78473249)