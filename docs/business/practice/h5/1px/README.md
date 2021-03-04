# 1px问题
在移动端上，有时候明明设置`border: 1px`，但对于**视觉同事会认为线条比较粗** （如下图）。

<img src="https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5830194970/4778/cbb1/829e/d60110eee1b1caef21725b6dc9927c4e.png" width="300px" />

## 原因
 1. `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">`
    - 定义了页面的 `viewport`宽度 为 设备宽度，初始缩放值 和 最大缩放值 都为 1，同时禁用了用户缩放。
 2. dpr导致。
    - 对于Retina屏，会使用 **多个设备像素** 去渲染
```css
    .border {
        /* 在 DPR 为 2 时，会用 2 个设备像素 去渲染这个border height */
        border: 1px solid white;
    }
```
> 更多：[像素dpr](/skill/css/px/#dpr)

综上，是由于设定了缩放值 `<meta>`，以及 `dpr` 导致。

## 解决
有 3 个解决方式：媒体查询 + 小数、flexible、伪类 + transform。

### 媒体查询、小数
不建议：低版本的安卓、IOS（8以下）不兼容小数。
```css
    .border {
        border: 1px solid red;
    }
    @media screen and (-webkit-min-device-pixel-ratio: 2) {
        .border {
            /* 部分机型不兼容小数 */
            border: 0.5px solid red;
        }
    }
    @media screen and (-webkit-min-device-pixel-ratio: 3) {
        .border {
            /* 部分机型不兼容小数 */
            border: 0.33333px solid red;
        }
    }
```

### flexible.js
- 动态计算出 `viewport` 中 `scale` 缩放。
```js
scale = 1 / devicePixelRatio

metaElem = document.createElement('meta')
metaElem.setAttribute('name', 'viewport')
metaElem.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no')
```

### 伪元素 + transform
> 单独缩放 伪元素 不会影响 元素本身 的缩放。

- 先判断是否为 Retina屏 （若是，加上一个class）
- 把`原先元素border去掉`，利用 伪元素`:after` 重做border，并`transform: scale(0.5)`
```js
// 利用 js 判断是否为 dpr为 2 的Retina 屏
if (window.devicePixelRatio && devicePixelRatio === 2) {
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
    transform-origin: left top; /* 更改元素的转换原点为左上角 */
}
```

### 对于圆边框的 1px 解决方案
<img src="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5838737157/7e50/1d9b/1e6b/f154c570ad248662b4a4e0225d35d942.png" width="400px" />

 - 方法一：采用 伪类 + `box-sizing: border-box`
 - 方法二：根据设备DPR计算出 `viewport` 中的 `scale` 缩放
