(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{573:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"移动端响应式布局方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端响应式布局方案"}},[t._v("#")]),t._v(" 移动端响应式布局方案")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#移动端响应式布局方案"}},[t._v("移动端响应式布局方案")]),a("ul",[a("li",[a("a",{attrs:{href:"#媒体查询"}},[t._v("媒体查询")])]),a("li",[a("a",{attrs:{href:"#百分比"}},[t._v("百分比")])]),a("li",[a("a",{attrs:{href:"#rem"}},[t._v("rem")])]),a("li",[a("a",{attrs:{href:"#vw-vh"}},[t._v("vw/vh")])]),a("li",[a("a",{attrs:{href:"#_4种响应式方案的区别"}},[t._v("4种响应式方案的区别")])]),a("li",[a("a",{attrs:{href:"#css样式适配trick-通过js计算"}},[t._v("css样式适配Trick：通过js计算")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"媒体查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[t._v("#")]),t._v(" 媒体查询")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" media-type "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("media-feature-rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* CSS rules */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("其中")]),t._v(" "),a("ul",[a("li",[t._v("media-type（媒体类型）：指定媒体类型（屏幕screen、打印稿print）")]),t._v(" "),a("li",[t._v("media-feature-rule：查询规则")])]),t._v(" "),a("h2",{attrs:{id:"百分比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百分比"}},[t._v("#")]),t._v(" 百分比")]),t._v(" "),a("p",[t._v("也叫"),a("strong",[t._v("流式布局")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("width")]),t._v(": 相对于父容器width内容宽的百分比；")]),t._v(" "),a("li",[a("code",[t._v("height")]),t._v(": 相对于父容器height内容宽的百分比")]),t._v(" "),a("li",[a("code",[t._v("padding、margin")]),t._v(": 相对于父容器width内容宽的百分比（任意方向）")]),t._v(" "),a("li",[a("code",[t._v("border")]),t._v(": 不能使用百分比")])]),t._v(" "),a("h2",{attrs:{id:"rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem"}},[t._v("#")]),t._v(" rem")]),t._v(" "),a("p",[a("code",[t._v("rem")]),t._v("是相对于"),a("code",[t._v("html")]),t._v("的字体大小")]),t._v(" "),a("p",[t._v("默认：1rem = 16px")]),t._v(" "),a("h3",{attrs:{id:"动态计算rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态计算rem"}},[t._v("#")]),t._v(" 动态计算rem")]),t._v(" "),a("p",[t._v("通过头部内嵌一段脚本，监听设备宽度的变化来动态改变根字体大小。")]),t._v(" "),a("p",[t._v("1、先通过"),a("code",[t._v("viewport tag")]),t._v("来设置视窗大小为内容大小，同时禁止缩放（否则按照默认预设值）。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1;"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829709906/312e/d76f/ad80/4982d362fa784857f9e91665c59c28dd.png",alt:"alt"}})]),t._v(" "),a("p",[t._v("2、嵌入JS脚本。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一般为了方便计算，会设置成：1rem = 100px。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setRootSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a、获取根元素")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rootHTML "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b、获取当前设备宽度deviceWidth")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" deviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rootHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" rootHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// c、设置当前设备宽度最大值为750px（750px为视觉稿宽度）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为deviceWidth > 750，物理分辨率大于 1500（devicePixelRatio = 2时），正常应该是PC访问")]),t._v("\n        deviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" deviceWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// d、计算比率。（假设750px设计图也是一个设备，希望1rem = 100px，则需在其根节点字体大小设置100px，得出比率）")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ratio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e、当前设备宽度 / 比率，算出当前设备的根节点字体大小")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rootFontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" deviceWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" ratio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f、设置根节点字体大小")]),t._v("\n        rootHTML"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rootFontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setRootSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_setRootSize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DOMContentLoaded'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _setRootSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resize'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _setRootSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("h2",{attrs:{id:"vw-vh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vw-vh"}},[t._v("#")]),t._v(" vw/vh")]),t._v(" "),a("p",[a("code",[t._v("vw")]),t._v("、"),a("code",[t._v("vh")]),t._v("都是视口单位，分别等于视口宽度、高度的百分比。")]),t._v(" "),a("blockquote",[a("p",[t._v("兼容性：ios8、android 4.4以上")])]),t._v(" "),a("h2",{attrs:{id:"_4种响应式方案的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4种响应式方案的区别"}},[t._v("#")]),t._v(" 4种响应式方案的区别")]),t._v(" "),a("p",[a("strong",[t._v("媒体查询：")])]),t._v(" "),a("ul",[a("li",[t._v("优点：1、多套规则，适配更精细")]),t._v(" "),a("li",[t._v("缺点：1、多套规则，定义繁琐；2、响应断点，体验性较差")])]),t._v(" "),a("p",[a("strong",[t._v("百分比：")])]),t._v(" "),a("ul",[a("li",[t._v("缺点：1、不同属性的参考基准不一；2、并非所有属性都支持百分比（如："),a("code",[t._v("font-size")]),t._v("、"),a("code",[t._v("border")]),t._v("）")])]),t._v(" "),a("p",[a("strong",[t._v("rem：")])]),t._v(" "),a("ul",[a("li",[t._v("优点：1、全局性的基准单位；2、动态计算，可限定最大宽度")]),t._v(" "),a("li",[t._v("缺点：1、需额外借助JS；2、安卓4.4以下不支持viewport缩放")])]),t._v(" "),a("p",[a("strong",[t._v("vw/vh：")])]),t._v(" "),a("ul",[a("li",[t._v("好处：1、全局性的基准单位；2、无需额外借助JS")]),t._v(" "),a("li",[t._v("缺点：无法限定最大宽度")])]),t._v(" "),a("p",[t._v("可以根据实际情况采取合适的方案，也可采用多套配合（如网易新163就是："),a("strong",[t._v("媒体查询 + rem + vw")]),t._v("）")]),t._v(" "),a("p",[t._v("但以上都 "),a("strong",[t._v("无法解决"),a("RouterLink",{attrs:{to:"/business/practice/h5/#_1px问题"}},[t._v("1px问题")])],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"css样式适配trick-通过js计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css样式适配trick-通过js计算"}},[t._v("#")]),t._v(" css样式适配Trick：通过js计算")]),t._v(" "),a("h3",{attrs:{id:"起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[t._v("#")]),t._v(" 起因")]),t._v(" "),a("p",[t._v("在还原样式（广播电台）时，发现：在原工程里使用了大量媒体查询进行样式定位。")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://g.hz.netease.com/cloudmusic-frontend/DI-FM/-/blob/master/src/views/Music.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v(" src/views/Music.sass"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),a("p",[t._v("处理样式适配的一贯作法是通过媒体查询，目的是尽可能适配到大众型号场景。但对于某些特殊场景，也可以尝试"),a("strong",[t._v("用js来计算目标节点定位")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("同时搭配"),a("code",[t._v("position: fiexed")]),t._v("，可以省去很多css适配工作。")])]),t._v(" "),a("p",[t._v("例子：需要处理 "),a("strong",[t._v("图中绿色DOM节点")]),t._v(" 在页面定位适配。")]),t._v(" "),a("img",{attrs:{src:"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5045160953/f1b5/c031/1088/4619541d7407e87affa68ea088214ebb.png",width:"200px"}}),t._v(" "),a("h3",{attrs:{id:"解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[t._v("#")]),t._v(" 解决")]),t._v(" "),a("p",[t._v("发现，“绿色节点”距离上、下节点（皆为"),a("code",[t._v("fixed定位")]),t._v("的节点）的距离相同")]),t._v(" "),a("ul",[a("li",[t._v("先通过上、下DOM节点的"),a("code",[t._v("getBoundingClientRect()")]),t._v("，获取"),a("code",[t._v("y")]),t._v("定位\n"),a("ul",[a("li",[a("img",{attrs:{src:"https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5045216239/643e/c7a0/ed9e/609c19b22be3a6e5ecf6c17aa7ca530d.png",width:"250px"}})])])]),t._v(" "),a("li",[t._v("再通过"),a("code",[t._v("((顶部y + 顶部height) + 底部y) / 2")]),t._v("，得到中位数，设为绿色节点的"),a("code",[t._v("y")]),t._v("、"),a("code",[t._v("height")]),t._v("数值")]),t._v(" "),a("li",[t._v("绿色节点再通过"),a("code",[t._v("transform: translateY(-50%)")]),t._v("可定位至上、下DOM节点中间")])]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("p",[t._v("有时可能需要处理在"),a("em",[t._v("个别小屏手机")]),t._v("进行粗粒度较大的适配（如针对绿色节点中的图片进行缩放等）。")]),t._v(" "),a("h3",{attrs:{id:"业务反馈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务反馈"}},[t._v("#")]),t._v(" 业务反馈")]),t._v(" "),a("p",[t._v("在业务中使用还是谨慎考虑，可能出现：")]),t._v(" "),a("ul",[a("li",[t._v("渲染时机一旦错误就会导致最终定位错误")]),t._v(" "),a("li",[t._v("部分机型还是需要媒体查询进行更加精准的适配")])]),t._v(" "),a("h3",{attrs:{id:"日后参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日后参考"}},[t._v("#")]),t._v(" 日后参考")]),t._v(" "),a("ul",[a("li",[t._v("先实现一款（如ipx）比较完美适配")]),t._v(" "),a("li",[t._v("ipx其它系列（ip6/7/8 -> ip6/7/8p -> ip5/5se -> ipx/xs & ipxr & ipxs max）")]),t._v(" "),a("li",[t._v("1080P安卓 -> 常用测试机")])])])}),[],!1,null,null,null);s.default=e.exports}}]);