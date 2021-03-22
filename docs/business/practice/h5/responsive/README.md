# 移动端响应式布局方案
[[toc]]

## 媒体查询
```css
@media media-type and (media-feature-rule) {
    /* CSS rules */
}
```
其中
 - media-type（媒体类型）：指定媒体类型（屏幕screen、打印稿print）
 - media-feature-rule：查询规则

## 百分比
 - `width`: 相对于父容器width内容宽的百分比；
 - `height`: 相对于父容器height内容宽的百分比
 - `padding、margin`: 相对于父容器width内容宽的百分比（任意方向）
 - `border`: 不能使用百分比

## rem
`rem`是相对于`html`的字体大小

默认：1rem = 16px

有 2 种实现方式： `js实现`、`纯css` 实现。

### 动态计算rem
实现：1rem = 100px。

通过头部内嵌一段脚本，监听设备宽度的变化来动态改变根字体大小。

1、先通过`viewport tag`来设置视窗大小为内容大小，同时禁止缩放（否则按照默认预设值）。
```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1;">
```

![alt](https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829709906/312e/d76f/ad80/4982d362fa784857f9e91665c59c28dd.png)

2、嵌入JS脚本。
```js
// 一般为了方便计算，会设置成：1rem = 100px。
(function() {
    function _setRootSize() {
        // a、获取根元素
        let rootHTML = document.documentElement;
        // b、获取当前设备宽度deviceWidth
        let deviceWidth = rootHTML.getBoundingClientRect().width || rootHTML.clientWidth;
        // c、设置当前设备宽度最大值为750px（750px为视觉稿宽度）
        // 因为deviceWidth > 750，物理分辨率大于 1500（devicePixelRatio = 2时），正常应该是PC访问
        deviceWidth = deviceWidth > 750 ? 750 : deviceWidth;
        // d、计算比率。（假设750px设计图也是一个设备，希望1rem = 100px，则需在其根节点字体大小设置100px，得出比率）
        let ratio = 750 / 100;
        // e、当前设备宽度 / 比率，算出当前设备的根节点字体大小
        let rootFontSize = deviceWidth / ratio;
        // f、设置根节点字体大小
        rootHTML.style.fontSize = rootFontSize + 'px';
    }
    _setRootSize();
    if (document.body) {
        _setRootSize();
    } else if (document) {
        document.addEventListener('DOMContentLoaded', _setRootSize);
    }
    window.addEventListener('resize', _setRootSize)
})();
```

### 纯CSS实现rem
实现：1rem = 100px

```css
html {
    font-size: calc(100vw/3.75);
}
```


## vw/vh
`vw`、`vh`都是视口单位，分别等于视口宽度、高度的百分比。
> 兼容性：ios8、android 4.4以上

## 4种响应式方案的区别
**媒体查询：** 
 - 优点：1、多套规则，适配更精细
 - 缺点：1、多套规则，定义繁琐；2、响应断点，体验性较差

**百分比：**
 - 缺点：1、不同属性的参考基准不一；2、并非所有属性都支持百分比（如：`font-size`、`border`）

**rem：**
 - 优点：1、全局性的基准单位；2、动态计算，可限定最大宽度
 - 缺点：1、需额外借助JS；2、安卓4.4以下不支持viewport缩放

**vw/vh：**
 - 好处：1、全局性的基准单位；2、无需额外借助JS
 - 缺点：无法限定最大宽度

可以根据实际情况采取合适的方案，也可采用多套配合（如网易新163就是：**媒体查询 + rem + vw**）

但以上都 **无法解决[1px问题](/business/practice/h5/#_1px问题)**。




## css样式适配Trick：通过js计算
### 起因
在还原样式（广播电台）时，发现：在原工程里使用了大量媒体查询进行样式定位。
> [ src/views/Music.sass](https://g.hz.netease.com/cloudmusic-frontend/DI-FM/-/blob/master/src/views/Music.scss)

### 分析
处理样式适配的一贯作法是通过媒体查询，目的是尽可能适配到大众型号场景。但对于某些特殊场景，也可以尝试**用js来计算目标节点定位**。
> 同时搭配`position: fiexed`，可以省去很多css适配工作。

例子：需要处理 **图中绿色DOM节点** 在页面定位适配。

<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5045160953/f1b5/c031/1088/4619541d7407e87affa68ea088214ebb.png" width="200px" />

### 解决
发现，“绿色节点”距离上、下节点（皆为`fixed定位`的节点）的距离相同
 - 先通过上、下DOM节点的`getBoundingClientRect()`，获取`y`定位
    - <img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5045216239/643e/c7a0/ed9e/609c19b22be3a6e5ecf6c17aa7ca530d.png" width="250px" />
 - 再通过`((顶部y + 顶部height) + 底部y) / 2`，得到中位数，设为绿色节点的`y`、`height`数值
 - 绿色节点再通过`transform: translateY(-50%)`可定位至上、下DOM节点中间

### 注意
有时可能需要处理在*个别小屏手机*进行粗粒度较大的适配（如针对绿色节点中的图片进行缩放等）。

### 业务反馈
在业务中使用还是谨慎考虑，可能出现：
 - 渲染时机一旦错误就会导致最终定位错误
 - 部分机型还是需要媒体查询进行更加精准的适配

### 日后参考
 - 先实现一款（如ipx）比较完美适配
 - ipx其它系列（ip6/7/8 -> ip6/7/8p -> ip5/5se -> ipx/xs & ipxr & ipxs max）
 - 1080P安卓 -> 常用测试机