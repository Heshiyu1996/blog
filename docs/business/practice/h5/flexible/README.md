
# flexible.js
通过 JS ，根据不同机型，动态计算 `<html>` 字体大小，同时设置 `<meta>` 值。

## 具体实现
通过 JS：
 - 动态改写 `<meta name="viewport">` 标签的 `scale`（解决 **1px问题**）
 - 给`<html>`元素添加 data-dpr 属性，并且动态改写 data-dpr 的值
 - 给`<html>`元素添加 font-size 属性，并且动态改写 font-size 的值

这样之后，就可以使用 `rem单位` 了。

<!-- 
## 前提
 - 视窗Viewport：
    - 在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。
    - 移动端的viewport太窄，为了能更好为CSS布局服务，所以提供了两个viewport:虚拟的visual viewport和布局的layout viewport。
 - viewport的meta标签:
    - 主要用来告诉浏览器 如何规范的渲染Web页面，而你则需要告诉它 视窗有多大 。
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
以 屏幕设备宽度 来定义视窗宽度，网页的比例、最大比例是 100%； -->

### 引入方式
```js
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```

### 手动设置 dpr
可以手动设置 `<meta>`来 控制dpr值，如：
```html
<meta name="flexible" content="initial-dpr=2" />
```

不建议：
 - 不会根据不同机型计算 dpr ，直接取该固定值；
 - 对 Android 也会生效。

```js
if (!dpr && !scale) {
    var isAndroid = win.navigator.appVersion.match(/android/gi);
    var isIPhone = win.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = win.devicePixelRatio;
    if (isIPhone) {
        // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
        if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
            dpr = 3;
        } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
            dpr = 2;
        } else {
            dpr = 1;
        }
    } else {
        // 可见，Flexible 对 Android 始终认为 dpr 是 1
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
    }
    scale = 1 / dpr;
}
```
