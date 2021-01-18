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


## 移动端响应式布局方案
移动端响应式布局方案，一共4种：
 - 媒体查询
 - 百分比
 - Rem
 - vw/vh
### 媒体查询
```css
@media media-type and (media-feature-rule) {
    /* CSS rules */
}
```
其中
 - media-type（媒体类型）：指定媒体类型（屏幕screen、打印稿print）
 - media-feature-rule：查询规则

### 百分比
也叫**流式布局**。

 - `width`: 相对于父容器width内容宽的百分比；
 - `height`: 相对于父容器height内容宽的百分比
 - `padding、margin`: 相对于父容器width内容宽的百分比（任意方向）
 - `border`: 不能使用百分比

### rem
`rem`是相对于`html`的字体大小

默认：1rem = 16px

#### 动态计算rem
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

### vw/vh
`vw`、`vh`都是视口单位，分别等于视口宽度、高度的百分比。
> 兼容性：ios8、android 4.4以上

### 几种响应式方案的区别
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

## 1px问题
**问题：在移动端上，有时候设置`border: 1px`，但实际上却显示的是2px（或3px）。**

原因：
 - 1、`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`，定义了初始值、最大缩放值为1，并禁止用户缩放。一刀切。
 - 2、`devicePixelRatio = 设备物理像素 / 设备独立像素`。（对于Retina屏，该值为2或者3）
    - **设备物理像素**：实际显示像素
    - **设备独立像素**：设置的css像素

 解决：
 - **媒体查询、小数**
    - 安卓、低版本IOS（8以下）不兼容小数。
        ```css
        .border {
            border: 1px solid red;
        }
        @media screen and (-webkit-min-device-pixel-ratio: 2) {
            .border {
                border: 0.5px solid red;
            }
        }
        @media screen and (-webkit-min-device-pixel-ratio: 3) {
            .border {
                border: 0.33333px solid red;
            }
        }
        ```

 - **flexible.js**
    - 动态计算出 `viewport` 中 `scale` 缩放。
    ```js
    scale = 1 / devicePixelRatio

    metaElem = document.createElement('meta')
    metaElem.setAttribute('name', 'viewport')
    metaElem.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
    ```

 - **伪类 + transform**
    > 伪元素`::before`、`::after`可以独立于当前元素，单独对其进行缩放而不影响元素本身的缩放。
    > 
    > 单引号、多引号就可以使用，但单引号对于ie兼容性更好些

    - 利用js判断是否Retina屏；（若是，加上一个class）
    - 把`原先元素border去掉`，利用伪类`:after`重做border，并`transform: scale(0.5)`
    ```js
    // 利用js判断是否Retina屏
    if (window.devicePixelRatio && devicePixelRatio >= 2) {
        document.querySelector('div').className = 'scale-1px'
    }
    ```
    ```css
    .scale-1px {
        position: relative;
        border: none;
    }

    .scale-1px:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid red;
        width: 200%;
        height: 200%;
        transform: scale(0.5);
        transform-origin: left top;
    }
    ```
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
