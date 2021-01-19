# 其它
[[toc]]

## 判断是否为Retina屏
```js
if (window.devicePixelRatio && window.devicePixelRatio >= 2)
```


## click延时的问题
**现象：** 监听元素`click`事件，实际触发延时`200ms`

**原因：** 
  - 移动端双击默认会放大，在第一次点击后**需等待200ms左右来判断是否会进行下次点击**
  - 事件冒泡：**touchstart -> touchmove -> touchend -> click**

**解决方式：**
  - ① 原生解决：监听`touchstart事件`、`touchend`事件之间的**移动距离、时间差**。若很短，则主动进行`click`事件，并阻止`touchend`的默认行为。

  - ② 利用Zepto.js中的`tap`事件代替
    - 原理：Zepto会给`document`绑定一系列`touch事件`来实现`自定义tab`。当`touchend`回调触发时，代表一次点击结束。所以不会出现延迟。
    - 缺点：会发生`点透事件`

  - ③ 用`touchstart`替代`click`
    - 优点：解决了 **延时、点透** 事件
    - 缺点：具有滚动（`touchmove`）情况，还是需要使用`click`

  - ④ 禁用缩放：
  ```html
    <meta name="viewport" content="user-scalable=no">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1">
    <!-- 缺点：不支持缩放了 -->
    <!-- 在微信的输入框聚焦时，会放大 -->
  ```
 
### “点透事件”
 原理：因为Zepto.js的`tap`事件是通过`touch`事件模拟的，故`tap`要冒泡到`document`才触发
 原因：
  - 有两层A、B（A盖在上面）
  - 在`touchstart`阶段就隐藏了A；
  - 当`click`被触发时，能够使下面的B“被点击”
  - **touchstart -> touchmove -> touchend -> click**
 
 解决办法：为元素绑定`touchend`事件，并在内部加上`e.preventDefault()`，从而阻止`click`事件的产生
<!-- 
### “滑动事件”
 通过`touchstart`、`touchend`来计算此次的滑动方向。
 ```js
 // 调用时：setListenForWipe(elem, gesture, type)
 setListenForWipe(elem, gesture, type) {
     if (type) {
         // 1、绑定touchstart、touchend
         // 2、记录startX、startY（从ev.touches[0].pageX中取值）
         // 3、记录endX、endY（从ev.changedTouches[0].pageX中取值）
         // 4、取完endX、endY后计算角度、方向
         // 5、将方向赋值给传入的gesture对象
     } else {
         // 解绑touchstart、touchend
     }
 }
 ```
 注意：对于`touchend`事件，`touches`和`targetTouches`只存储接触到屏幕上的点，要获取最后离开的触摸点，要用`changedTouches` -->

<!-- 
## click延时、穿透问题
现象：
 - [延时] 监听元素`click`事件，实际触发延时`200ms`
 - [穿透] 点击蒙层，蒙层消失后，底层元素也被触发“点击事件”

原因：移动端双击默认会放大，在第一次点击后**需等待200ms左右来判断是否会进行下次点击**

解决：
 - 1、利用zepto.js
    - 优点：利用tab事件来监听click
    - 缺点：点透事件（移动端的事件冒泡机制：touchstart、touchmove、touchend、click）
 - 2、原生js实现
    - 思路：监听touchstart事件。若无移动，且在离开屏幕时，触发touchend时计算时间差，若很短，则主动进行click事件，并preventDefault在touchend上的冒泡。 -->


<!-- ##  touch事件 和 web端click事件 的区别
在移动端，在手指点击一个元素，会经过：**touchstart -> touchmove -> touchend -> click**

`touchstart`，手指一触碰就能触发

`click`，则需要：
 手指触碰 -> 未在屏幕上移动 -> 离开屏幕 -> 从“触摸到离开”的时间间隔短 -->

## a标签点击出现灰色背景
解决：
 - 1、IOS和部分安卓
    ```css
    .child {
        -webkit-tab-highlight-color: rgba(0, 0, 0, 0);
    }
    ```
 - 2、部分安卓、winphone
    ```html
    <meta name="msapplication-tap-highlight" content="no">
    ```
 - 3、小米2
    使用`div`标签

 ### 两端在事件对象上的区别（TouchEvent、Touch、TouchList）
 对于`TouchEvent`（触摸事件对象），它会比`MouseEvent`（鼠标事件对象）多出一些属性值：
  - touches
    - 当前屏幕上，所有`Touch对象`的列表
  - targetTouches
    - 当前对象上，所有`Touch对象`的列表
  - changedTouches
    - 涉及当前事件的，所有`Touch对象`的列表
 
 同时，与`MouseEvent`中有关位置/目标的属性：`clientX`、`clientY`；`pageX`、`pageY`；`screenX`、`screenY`、`target`会放到`Touch对象`中。


## 滚动性能优化
因为一般`事件处理函数`（耗时）会比`默认行为`先执行。对于滚动事件，也是一样。所以看上去可能会出现一些卡顿。

解决方法：`Passive event listeners`（被动事件监听器）
```js
elem.addEventListener('touchstart', fn, { passive: false })
```
通过给第三个参数传递`passive`为`false`（被动为假，即主动。）来明确告诉浏览器：**事件处理程序**自己会调用`preventDefault`来阻止默认行为，你不用等了。

如果能提前告诉浏览器：**“我不调用preventDefault来阻止默认行为”**，那么浏览器就能快速生成事件，从而提升页面性能。


## 常用媒体查询兼容方案
[查看](./MEDIA.md)

## ios、安卓6及以上机型无法播放视频

```js
const doPreview = (index) => {
    // ios、安卓6及以上机型无法播放视频
    // hack做法：手动触发播放、暂停。
    if (Env.isIos() || (Env.isAndroid() && Env.getAndroidVersion() >= 6)) {
        audioRef.current.doPlay(index);
        audioRef.current.doPause(index);
    }
};
```

```jsx
<AudioComponent ref={audioRef} />
```

## 禁用微信调整字体大小
```js
(function disableWeixinTextAdjust() {
    function handleFontSize() {
        const WeixinJSBridge = window.WeixinJSBridge;
        WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
        WeixinJSBridge.on('menu:setfont', () => {
            WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
        });
    }

    if (typeof window.WeixinJSBridge === 'object'
        && typeof window.WeixinJSBridge.invoke === 'function') {
        handleFontSize();
    } else if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', handleFontSize);
        document.attachEvent('onWeixinJSBridgeReady', handleFontSize);
    }
}());
```

## Animation动画

### APNG和WEBP
iOS：APNG（Animated Portable Network Graphics），是PNG的位图动画扩展
14年在iOS8 Safari中支持APNG
17年CHrome支持APNG
支持：除IE和EDGE
 - 支持24位真彩色图片，且支持8位Alpha透明通道
 - 体积会比WEBP、GIF更小
Android：WEBP

### Lottie
以Json形式存储动画。
> 主要动画思想：绘制某个图层不断地改变CSS属性
 - 动效：AE -> JSON
 - 开发： JSON -> 动画

```js
import lottie from 'lottie-web';
import animationJsonData from 'xxx-demo.json'; // json文件

lottie.loadAnimation({
    container: document.getElementById('myDom'),
    animationData: animationJsonData,
    renderer: 'svg', // 渲染模式：undefined（表示html） | svg | canvas
    autoplay: true, // 默认自动播放
    loop: true // 循环
});
```

#### 不足
包本身体积较大（Gzip: 39k）

### SVG

### GIF
只支持8位256种颜色，且不支持Alpha透明通道
 - 所以存在边缘毛刺、白边
![alt](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5736661570/0473/0d3b/f005/c22a432f057f13bab80b7472e7e0e01f.png)

### 参考链接
 - [剖析 lottie-web 动画实现原理](https://mp.weixin.qq.com/s/yUrrXpZRs-fnlTLohPMLEQ)

## 曾经的lib-flexible
用来解决H5页面终端适配

> 好处：你不需要考虑如何对元素进行折算，可以根据对应的视觉稿，直接切入。

通过 JS 来 动态改写 `viewport` 的 meta 标签。
 - 动态改写`<meta>`标签
 - 给`<html>`元素添加 data-dpr 属性，并且动态改写 data-dpr 的值
 - 给`<html>`元素添加 font-size 属性，并且动态改写 font-size 的值

### 前提
 - 视窗Viewport：
    - 在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。
    - 移动端的viewport太窄，为了能更好为CSS布局服务，所以提供了两个viewport:虚拟的visual viewport和布局的layout viewport。
 - viewport的meta标签:
    - 主要用来告诉浏览器 如何规范的渲染Web页面，而你则需要告诉它 视窗有多大 。
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```
以 屏幕设备宽度 来定义视窗宽度，网页的比例、最大比例是 100%；

### flexible
```js
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```
 1. 在所有资源加载之前执行这个JS
 2. 执行这个JS后，会在`<html>`元素上增加一个 data-dpr 属性，以及一个 font-size 样式。
 3. JS会根据不同的设备添加不同的data-dpr值，比如说2或者3
 4. 同时会给`<html>`加上对应的font-size的值，比如说75px。

效果：可以使用 rem单位 来设置

#### 手动设置 dpr
可以手动设置meta来控制dpr值，如：
```html
<meta name="flexible" content="initial-dpr=2" />
```
不建议：一旦设定，都会强制认为其dpr就是该固定值；同时，Flexible对 Android 不会判断（始终认为 dpr 是 1 ）

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
        // 其他设备下，仍旧使用1倍的方案
        dpr = 1;
    }
    scale = 1 / dpr;
}
```

### 文本字号不建议使用rem
 - 不希望文本在 Retina屏幕 下变小
 - 希望在大屏手机上看到更多文本
 - 不希望出现13px和15px这样的奇葩尺寸

综上，考虑文本还是使用px作为单位

只不过使用`[data-dpr]`属性来 区分不同dpr下的文本字号大小（依旧使用 `px`）。

```css
div {
    width: 1rem; 
    height: 0.4rem;
    font-size: 12px; /* 默认写上dpr为1的fontSize */
}
[data-dpr="2"] div {
    font-size: 24px;
}
[data-dpr="3"] div {
    font-size: 36px;
}
```

## 参考地址
- [使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)