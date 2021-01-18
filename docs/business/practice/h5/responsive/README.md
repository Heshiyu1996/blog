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
也叫**流式布局**。

 - `width`: 相对于父容器width内容宽的百分比；
 - `height`: 相对于父容器height内容宽的百分比
 - `padding、margin`: 相对于父容器width内容宽的百分比（任意方向）
 - `border`: 不能使用百分比

## rem
`rem`是相对于`html`的字体大小

默认：1rem = 16px

### 动态计算rem
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

## vw/vh
`vw`、`vh`都是视口单位，分别等于视口宽度、高度的百分比。
> 兼容性：ios8、android 4.4以上

## 4种响应式方案的区别
**媒体查询：** 
 - 优点：1、多套规则，适配更精细
 - 缺点：1、多套规则，定义繁琐；2、响应断点，体验性较差

**百分比：**
 - 缺点：1、不同属性的参考基准不一；2、并非所有属性都支持百分比

**rem：**
 - 优点：1、全局性的基准单位；2、动态计算，可限定最大宽度
 - 缺点：1、`innerWidth`/`innerHeight`可能不准确(?)；2、安卓4.4以下不支持viewport缩放

**vw/vh：**
 - 好处：1、全局性的基准单位；2、无需额外借助JS
 - 缺点：无法限定最大宽度

可以根据实际情况采取合适的方案，也可采用多套配合（如网易新163就是：**媒体查询 + rem + vw**）

但以上都 **无法解决[1px问题](/business/practice/h5/#_1px问题)**。