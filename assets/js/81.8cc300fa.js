(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{569:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#其它"}},[t._v("其它")]),a("ul",[a("li",[a("a",{attrs:{href:"#判断是否为retina屏"}},[t._v("判断是否为Retina屏")])]),a("li",[a("a",{attrs:{href:"#click延时的问题"}},[t._v("click延时的问题")])]),a("li",[a("a",{attrs:{href:"#a标签点击出现灰色背景"}},[t._v("a标签点击出现灰色背景")])]),a("li",[a("a",{attrs:{href:"#滚动性能优化"}},[t._v("滚动性能优化")])]),a("li",[a("a",{attrs:{href:"#常用媒体查询兼容方案"}},[t._v("常用媒体查询兼容方案")])]),a("li",[a("a",{attrs:{href:"#ios、安卓6及以上机型无法播放视频"}},[t._v("ios、安卓6及以上机型无法播放视频")])]),a("li",[a("a",{attrs:{href:"#禁用微信调整字体大小"}},[t._v("禁用微信调整字体大小")])]),a("li",[a("a",{attrs:{href:"#移动端active伪类无效"}},[t._v("移动端active伪类无效")])]),a("li",[a("a",{attrs:{href:"#position-fixed在ios滑动不固定"}},[t._v("position: fixed在iOS滑动不固定")])]),a("li",[a("a",{attrs:{href:"#android下line-height文字垂直居中偏移问题"}},[t._v("Android下line-height文字垂直居中偏移问题")])]),a("li",[a("a",{attrs:{href:"#参考"}},[t._v("参考")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"判断是否为retina屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断是否为retina屏"}},[t._v("#")]),t._v(" 判断是否为Retina屏")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("devicePixelRatio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"click延时的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#click延时的问题"}},[t._v("#")]),t._v(" click延时的问题")]),t._v(" "),a("p",[a("strong",[t._v("现象：")]),t._v(" 监听元素"),a("code",[t._v("click")]),t._v("事件，实际触发延时"),a("code",[t._v("200ms")])]),t._v(" "),a("p",[a("strong",[t._v("原因：")])]),t._v(" "),a("ul",[a("li",[t._v("移动端双击默认会放大，在第一次点击后"),a("strong",[t._v("需等待200ms左右来判断是否会进行下次点击")])]),t._v(" "),a("li",[t._v("事件冒泡："),a("strong",[t._v("touchstart -> touchmove -> touchend -> click")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方式：")])]),t._v(" "),a("ul",[a("li",[t._v("① 禁用缩放：\n"),a("ul",[a("li",[t._v("缺点：不支持缩放")])])])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user-scalable=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1,maximum-scale=1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ul",[a("li",[a("p",[t._v("② 用"),a("code",[t._v("touchstart")]),t._v("替代"),a("code",[t._v("click")])]),t._v(" "),a("ul",[a("li",[t._v("优点：解决了 "),a("strong",[t._v("延时、点透")]),t._v(" 事件")]),t._v(" "),a("li",[t._v("缺点：具有滚动（"),a("code",[t._v("touchmove")]),t._v("）情况，还是需要使用"),a("code",[t._v("click")])])])]),t._v(" "),a("li",[a("p",[t._v("③ 判定"),a("code",[t._v("touchend")]),t._v(" - "),a("code",[t._v("touchstart")]),t._v("：监听"),a("code",[t._v("touchstart事件")]),t._v("、"),a("code",[t._v("touchend")]),t._v("事件之间的"),a("strong",[t._v("移动距离、时间差")]),t._v("。若很短，则主动进行"),a("code",[t._v("click")]),t._v("事件，并阻止"),a("code",[t._v("touchend")]),t._v("的默认行为。")])]),t._v(" "),a("li",[a("p",[t._v("④ 利用 Zepto.js 中的"),a("code",[t._v("tap")]),t._v("事件代替")]),t._v(" "),a("ul",[a("li",[t._v("原理：Zepto会给"),a("code",[t._v("document")]),t._v("绑定一系列"),a("code",[t._v("touch事件")]),t._v("来实现"),a("code",[t._v("自定义tab")]),t._v("。当"),a("code",[t._v("touchend")]),t._v("回调触发时，代表一次点击结束。所以不会出现延迟。")]),t._v(" "),a("li",[t._v("缺点：会发生"),a("code",[t._v("点透事件")])])])])]),t._v(" "),a("h3",{attrs:{id:"点透事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点透事件"}},[t._v("#")]),t._v(" “点透事件”")]),t._v(" "),a("p",[t._v("原理：因为Zepto.js的"),a("code",[t._v("tap")]),t._v("事件是通过"),a("code",[t._v("touch")]),t._v("事件模拟的，故"),a("code",[t._v("tap")]),t._v("要冒泡到"),a("code",[t._v("document")]),t._v("才触发")]),t._v(" "),a("p",[t._v("原因：")]),t._v(" "),a("ul",[a("li",[t._v("有两层A、B（A盖在上面）")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("touchstart")]),t._v(" 阶段就隐藏了A；")]),t._v(" "),a("li",[t._v("当 "),a("code",[t._v("click")]),t._v(" 被触发时，能够使下面的B“被点击”")]),t._v(" "),a("li",[a("strong",[t._v("touchstart -> touchmove -> touchend -> click")])])]),t._v(" "),a("p",[t._v("解决办法：为元素绑定"),a("code",[t._v("touchend")]),t._v("事件，并在内部加上"),a("code",[t._v("e.preventDefault()")]),t._v("，从而阻止"),a("code",[t._v("click")]),t._v("事件的产生")]),t._v(" "),a("h2",{attrs:{id:"a标签点击出现灰色背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a标签点击出现灰色背景"}},[t._v("#")]),t._v(" a标签点击出现灰色背景")]),t._v(" "),a("p",[t._v("解决：")]),t._v(" "),a("ul",[a("li",[t._v("1、IOS和部分安卓"),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-tab-highlight-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("li",[t._v("2、部分安卓、winphone"),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("msapplication-tap-highlight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[t._v("3、小米2\n使用"),a("code",[t._v("div")]),t._v("标签")])]),t._v(" "),a("h3",{attrs:{id:"两端在事件对象上的区别-touchevent、touch、touchlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两端在事件对象上的区别-touchevent、touch、touchlist"}},[t._v("#")]),t._v(" 两端在事件对象上的区别（TouchEvent、Touch、TouchList）")]),t._v(" "),a("p",[t._v("对于"),a("code",[t._v("TouchEvent")]),t._v("（触摸事件对象），它会比"),a("code",[t._v("MouseEvent")]),t._v("（鼠标事件对象）多出一些属性值：")]),t._v(" "),a("ul",[a("li",[t._v("touches\n"),a("ul",[a("li",[t._v("当前屏幕上，所有"),a("code",[t._v("Touch对象")]),t._v("的列表")])])]),t._v(" "),a("li",[t._v("targetTouches\n"),a("ul",[a("li",[t._v("当前对象上，所有"),a("code",[t._v("Touch对象")]),t._v("的列表")])])]),t._v(" "),a("li",[t._v("changedTouches\n"),a("ul",[a("li",[t._v("涉及当前事件的，所有"),a("code",[t._v("Touch对象")]),t._v("的列表")])])])]),t._v(" "),a("p",[t._v("同时，与"),a("code",[t._v("MouseEvent")]),t._v("中有关位置/目标的属性："),a("code",[t._v("clientX")]),t._v("、"),a("code",[t._v("clientY")]),t._v("；"),a("code",[t._v("pageX")]),t._v("、"),a("code",[t._v("pageY")]),t._v("；"),a("code",[t._v("screenX")]),t._v("、"),a("code",[t._v("screenY")]),t._v("、"),a("code",[t._v("target")]),t._v("会放到"),a("code",[t._v("Touch对象")]),t._v("中。")]),t._v(" "),a("h2",{attrs:{id:"滚动性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动性能优化"}},[t._v("#")]),t._v(" 滚动性能优化")]),t._v(" "),a("p",[t._v("因为一般"),a("code",[t._v("事件处理函数")]),t._v("（耗时）会比"),a("code",[t._v("默认行为")]),t._v("先执行。对于滚动事件，也是一样。所以看上去可能会出现一些卡顿。")]),t._v(" "),a("p",[t._v("解决方法："),a("code",[t._v("Passive event listeners")]),t._v("（被动事件监听器）")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'touchstart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" passive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("通过给第三个参数传递"),a("code",[t._v("passive")]),t._v("为"),a("code",[t._v("false")]),t._v("（被动为假，即主动。）来明确告诉浏览器："),a("strong",[t._v("事件处理程序")]),t._v("自己会调用"),a("code",[t._v("preventDefault")]),t._v("来阻止默认行为，你不用等了。")]),t._v(" "),a("p",[t._v("如果能提前告诉浏览器："),a("strong",[t._v("“我不调用preventDefault来阻止默认行为”")]),t._v("，那么浏览器就能快速生成事件，从而提升页面性能。")]),t._v(" "),a("h2",{attrs:{id:"常用媒体查询兼容方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用媒体查询兼容方案"}},[t._v("#")]),t._v(" 常用媒体查询兼容方案")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/business/practice/h5/MEDIA.html"}},[t._v("查看")])],1),t._v(" "),a("h2",{attrs:{id:"ios、安卓6及以上机型无法播放视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios、安卓6及以上机型无法播放视频"}},[t._v("#")]),t._v(" ios、安卓6及以上机型无法播放视频")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("doPreview")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ios、安卓6及以上机型无法播放视频")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hack做法：手动触发播放、暂停。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isIos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAndroid")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" Env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAndroidVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        audioRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doPlay")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        audioRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("doPause")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AudioComponent")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[a("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("audioRef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"禁用微信调整字体大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用微信调整字体大小"}},[t._v("#")]),t._v(" 禁用微信调整字体大小")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disableWeixinTextAdjust")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleFontSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" WeixinJSBridge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setFontSizeCallback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'menu:setfont'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setFontSizeCallback'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" fontSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WeixinJSBridge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WeixinJSBridge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("invoke "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleFontSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("addEventListener"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WeixinJSBridgeReady'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleFontSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attachEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WeixinJSBridgeReady'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleFontSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("attachEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'onWeixinJSBridgeReady'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleFontSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h3",{attrs:{id:"文本字号不建议使用rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本字号不建议使用rem"}},[t._v("#")]),t._v(" 文本字号不建议使用rem")]),t._v(" "),a("ul",[a("li",[t._v("不希望文本在 Retina屏幕 下变小")]),t._v(" "),a("li",[t._v("希望在大屏手机上看到更多文本")]),t._v(" "),a("li",[t._v("不希望出现13px和15px这样的奇葩尺寸")])]),t._v(" "),a("p",[t._v("综上，考虑文本还是使用px作为单位")]),t._v(" "),a("p",[t._v("只不过使用"),a("code",[t._v("[data-dpr]")]),t._v("属性来 区分不同dpr下的文本字号大小（依旧使用 "),a("code",[t._v("px")]),t._v("）。")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.4rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 12px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 默认写上dpr为1的fontSize */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('[data-dpr="2"] div')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 24px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('[data-dpr="3"] div')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 36px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h2",{attrs:{id:"移动端active伪类无效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端active伪类无效"}},[t._v("#")]),t._v(" 移动端active伪类无效")]),t._v(" "),a("div",{staticClass:"language-jsx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// // 点击时透明为 0.8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .u-submit:active {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     opacity: 0.8;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加 onTouchStart 事件即可（可为空函数）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onTouchStart")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("u-submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("提交")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"position-fixed在ios滑动不固定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#position-fixed在ios滑动不固定"}},[t._v("#")]),t._v(" position: fixed在iOS滑动不固定")]),t._v(" "),a("p",[t._v("范围： 部分iOS机型（目前发现 "),a("code",[t._v("iOS <= 13.6")]),t._v("）")]),t._v(" "),a("p",[t._v("在 “滚动容器” 内，子元素使用了 "),a("code",[t._v("position: fixed")]),t._v(" ，出现滑动不固定。")]),t._v(" "),a("h3",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),a("ul",[a("li",[t._v("法一：在使用了 "),a("code",[t._v("position: fixed")]),t._v(" 元素上加上 "),a("code",[t._v("transform: translateZ(0)")])]),t._v(" "),a("li",[t._v("法二：将"),a("code",[t._v("fixed")]),t._v("元素移出 滚动容器 外")])]),t._v(" "),a("h2",{attrs:{id:"android下line-height文字垂直居中偏移问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android下line-height文字垂直居中偏移问题"}},[t._v("#")]),t._v(" Android下line-height文字垂直居中偏移问题")]),t._v(" "),a("p",[t._v("在移动端开发，Android的单行文字无法在容器中垂直居中。")]),t._v(" "),a("blockquote",[a("p",[t._v("常见于一些 tag 和 按钮")])]),t._v(" "),a("p",[t._v("问题根源：设定同一"),a("code",[t._v("font-size")]),t._v("的文字，"),a("strong",[t._v("在不同字体里的高度是不一样的")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"调研"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调研"}},[t._v("#")]),t._v(" 调研")]),t._v(" "),a("ul",[a("li",[t._v("所有 “内联元素” 都有两个高度："),a("code",[t._v("content-area")]),t._v("（基于字体度量）、"),a("code",[t._v("virtual-area")]),t._v("（有效高度，即line-height）")]),t._v(" "),a("li",[a("code",[t._v("content-area")]),t._v("在内部渲染时已经发生偏移，而css的居中方案只会控制整个"),a("code",[t._v("content-area")]),t._v("的居中")]),t._v(" "),a("li",[a("code",[t._v("line-height: normal")]),t._v("是基于字体度量计算出来的")])]),t._v(" "),a("h3",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("需要针对"),a("code",[t._v("content-area")]),t._v("、"),a("code",[t._v("virtual-area")]),t._v("两类高度进行垂直居中。")]),t._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("p",[t._v("针对"),a("code",[t._v("content-area")]),t._v("的居中（二选一）：")]),t._v(" "),a("ul",[a("li",[t._v("方案1："),a("code",[t._v("line-height: normal")])]),t._v(" "),a("li",[t._v("方案2：设置"),a("code",[t._v('<html lang="zh-cmn-Hans">')]),t._v("、"),a("code",[t._v("font-family: sans-sarif")]),t._v("（sans-sarif表示黑体）")])]),t._v(" "),a("p",[t._v("针对"),a("code",[t._v("virtual-area")]),t._v("的居中（二选一）：")]),t._v(" "),a("ul",[a("li",[t._v("方案1：父容器"),a("code",[t._v("position: relative")]),t._v("，子元素"),a("code",[t._v("position: absolute; left: 50%; top: 50%; transtorm: translate(-50%, -50%);")])]),t._v(" "),a("li",[t._v("方案2：父容器声明为Flex容器，并"),a("code",[t._v("align-items: center")])])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/amfe/article/issues/17",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用Flexible实现手淘H5页面的终端适配"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25808995",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 CSS：字体度量、line-height 和 vertical-align"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);