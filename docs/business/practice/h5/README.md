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
  - ① 禁用缩放：
    - 缺点：不支持缩放
  ```html
    <meta name="viewport" content="user-scalable=no">
    <meta name="viewport" content="initial-scale=1,maximum-scale=1">
  ```

  - ② 用`touchstart`替代`click`
    - 优点：解决了 **延时、点透** 事件
    - 缺点：具有滚动（`touchmove`）情况，还是需要使用`click`

  - ③ 判定`touchend` - `touchstart`：监听`touchstart事件`、`touchend`事件之间的**移动距离、时间差**。若很短，则主动进行`click`事件，并阻止`touchend`的默认行为。

  - ④ 利用 Zepto.js 中的`tap`事件代替
    - 原理：Zepto会给`document`绑定一系列`touch事件`来实现`自定义tab`。当`touchend`回调触发时，代表一次点击结束。所以不会出现延迟。
    - 缺点：会发生`点透事件`
 
### “点透事件”
 原理：因为Zepto.js的`tap`事件是通过`touch`事件模拟的，故`tap`要冒泡到`document`才触发

 原因：
  - 有两层A、B（A盖在上面）
  - 在 `touchstart` 阶段就隐藏了A；
  - 当 `click` 被触发时，能够使下面的B“被点击”
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

## 移动端active伪类无效
```jsx
// // 点击时透明为 0.8
// .u-submit:active {
//     opacity: 0.8;
// }

// 添加 onTouchStart 事件即可（可为空函数）
<div onTouchStart className="u-submit">提交</div>
```

## position: fixed在iOS滑动不固定
范围： 部分iOS机型（目前发现 `iOS <= 13.6`）

在 “滚动容器” 内，子元素使用了 `position: fixed` ，出现滑动不固定。

### 解决
 - 法一：在使用了 `position: fixed` 元素上加上 `transform: translateZ(0)`
 - 法二：将`fixed`元素移出 滚动容器 外


## Android下line-height文字垂直居中偏移问题
在移动端开发，Android的单行文字无法在容器中垂直居中。
> 常见于一些 tag 和 按钮

问题根源：设定同一`font-size`的文字，**在不同字体里的高度是不一样的**。

### 调研
 - 所有 “内联元素” 都有两个高度：`content-area`（基于字体度量）、`virtual-area`（有效高度，即line-height）
 - `content-area`在内部渲染时已经发生偏移，而css的居中方案只会控制整个`content-area`的居中
 - `line-height: normal`是基于字体度量计算出来的

### 分析
需要针对`content-area`、`virtual-area`两类高度进行垂直居中。

### 解决方案
针对`content-area`的居中（二选一）：
 - 方案1：`line-height: normal`
 - 方案2：设置`<html lang="zh-cmn-Hans">`、`font-family: sans-sarif`（sans-sarif表示黑体）

针对`virtual-area`的居中（二选一）：
 - 方案1：父容器`position: relative`，子元素`position: absolute; left: 50%; top: 50%; transtorm: translate(-50%, -50%);`
 - 方案2：父容器声明为Flex容器，并`align-items: center`


## iOS唤起数字键盘
```html
<input pattern="[0-9]*">
```
> 另外，iOS会出现两次减号，会默认合并成一个字符。可改成数字键盘

## 参考
 - [使用Flexible实现手淘H5页面的终端适配](https://github.com/amfe/article/issues/17)
 - [深入理解 CSS：字体度量、line-height 和 vertical-align](https://zhuanlan.zhihu.com/p/25808995)


