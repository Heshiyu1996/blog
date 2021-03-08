# 传统性能检测
## 传统方式统计性能时间戳
当不兼容`window.performance`时，可使用常规统计方法（如：IE8）
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>白屏 &</title>
    <script>
        // 不兼容 performance.timing 的浏览器
        window.pageStartTime = Date.now()
    </script>
        <!-- 页面 CSS 资源 -->
        <link rel="stylesheet" href="xx.css">
        <link rel="stylesheet" href="zz.css">
        <script>
            // 白屏结束时间
            window.firstPaint = Date.now()
            // 由此计算：白屏时间（支持window.performance）
            console.log(performance.timing.domLoading - performance.timing.navigationStart)
            // 由此计算：白屏时间（不支持window.performance）
            console.log(window.firstPaint - window.pageStartTime)
        </script>
</head>
<body>
    <h1>Hello World</h1>
    <script type="text/javascript">
        // 首屏屏结束时间
        window.firstPaint = Date.now()
        // 由此计算：首屏时间
        console.log(firstPaint - performance.timing.navigationStart || window.pageStartTime)
    </script>

    <!-- 首屏不可见内容 -->
    <div class=""></div>
    <!-- 首屏不可见内容 -->
    <div class=""></div>
</body>
</html>
```

## Chrome Devtools Performance的性能监测
`Chrome DevTools Performance功能`也可以分析 **运行时性能表现**，对问题进行定位、分析和优化。

 - FPS图表：有红条，说明帧存在严重问题
    > FPS（Frame Per Second）用来分析动画的一个主要性能指标（保持60FPS左右，用户体验不错）

 - CPU图表：与Summary面板里的颜色相互对应。如果看到某个处理占用了大量时间，可能就是一个找到性能瓶颈的线索。

 - Main图表：Loading、Scripting、Rendering、Painting

> 1、Hover到FPS、CPU图表可以看得到这个时间点的截图。这被曾为scrubbing，用来分析动画的各个细节
>
> 2、Hover到Frames图表中，可以看到这个帧的FPS
> 
> 3、实时FPS面板：Command + Shift + P -> Show Rendering -> FPS meter

## 传统实现“图片延迟加载”
```html
<img src="" lazyload="true" data-original="images/1.png" />
<img src="" lazyload="true" data-original="images/2.png" />
```

```css
img {
    display: inline-block;
    width: 100%;
    height: 300px; /* 要设置img的高度 */
    background: red;
}
```

```js
let viewHeight = document.documentElement.clientHeight // 获取可视区域的高度

function lazyload() {
    let lazyElems = document.querySelectorAll('img[data-original][lazyload]');

    Array.prototype.forEach.call(lazyElems, (item, index) => {
        if (!item.dataset.original) return;
        let rect = item.getBoundingClientRect() // 获得元素相对于视窗上、下、左、右的举例
        if (rect.top < viewHeight && rect.bottom >= 0) { // 表示 元素顶部/元素底部 开始进入到视窗
                var img = new Image()
                img.src = item.dataset.original
                img.onload = function() {
                    item.src = img.src // 当这个“匿名”img标签加载完src后，执行这里
                }
            item.removeAttribute("data-original"); //移除属性，下次不再遍历
            item.removeAttribute("lazyload");
        }
    })
}

lazyload();

document.addEventListener('scroll', lazyload); 
```
