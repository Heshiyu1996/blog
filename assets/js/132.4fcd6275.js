(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{642:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css布局"}},[t._v("#")]),t._v(" CSS布局")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#css布局"}},[t._v("CSS布局")]),a("ul",[a("li",[a("a",{attrs:{href:"#常见布局方案"}},[t._v("常见布局方案")])]),a("li",[a("a",{attrs:{href:"#参考链接"}},[t._v("参考链接")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"常见布局方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见布局方案"}},[t._v("#")]),t._v(" 常见布局方案")]),t._v(" "),a("p",[t._v("发展历程：")]),t._v(" "),a("p",[a("a",{attrs:{href:"#%E8%A1%A8%E6%A0%BC%E5%B8%83%E5%B1%80"}},[t._v("表格布局")]),t._v(" > "),a("a",{attrs:{href:"#%E5%AE%9A%E4%BD%8D%E5%B8%83%E5%B1%80"}},[t._v("定位布局")]),t._v(" > "),a("RouterLink",{attrs:{to:"/skill/css/bfc/"}},[t._v("浮动布局")]),t._v(" > "),a("RouterLink",{attrs:{to:"/skill/css/flex-box/"}},[t._v("Flex布局")]),t._v(" > "),a("a",{attrs:{href:"#%E7%BD%91%E6%A0%BC%E5%B8%83%E5%B1%80"}},[t._v("网格布局")]),t._v(" > "),a("a",{attrs:{href:"#%E5%A4%9A%E5%88%97%E5%B8%83%E5%B1%80"}},[t._v("多列布局")])],1),t._v(" "),a("blockquote",[a("p",[t._v("还有一种 多列布局 比较少用。")])]),t._v(" "),a("h3",{attrs:{id:"表格布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表格布局"}},[t._v("#")]),t._v(" 表格布局")]),t._v(" "),a("p",[a("code",[t._v("<table>")]),t._v("默认设置了 "),a("strong",[t._v("table布局属性")]),t._v("。")]),t._v(" "),a("p",[t._v("当这些属性被应用于"),a("code",[t._v("非<table>")]),t._v("元素时，就是表格布局。")]),t._v(" "),a("blockquote",[a("p",[t._v("常用于兼容一些不支持 Flex、Grid 的浏览器。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("display: table")]),t._v("：指定为表格容器（类比于"),a("code",[t._v("<table>")]),t._v("）")]),t._v(" "),a("li",[a("code",[t._v("display: table-row")]),t._v("：指定为表行（类比于"),a("code",[t._v("<tr>")]),t._v("）")]),t._v(" "),a("li",[a("code",[t._v("display: table-cell")]),t._v("：指定为单元格（类比于"),a("code",[t._v("<td>、<th>")]),t._v("）")])]),t._v(" "),a("img",{attrs:{src:"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829472983/698c/98df/3375/cfa27af05e77008213bdb82d1a4efba3.png",width:"500px"}}),t._v(" "),a("h3",{attrs:{id:"定位布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位布局"}},[t._v("#")]),t._v(" 定位布局")]),t._v(" "),a("p",[t._v("脱离标准流（absolute、fixed、sticky达到阈值后）。")]),t._v(" "),a("p",[a("code",[t._v("position")]),t._v("有以下属性：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("static")]),t._v(" "),a("ul",[a("li",[t._v("默认定位")])])]),t._v(" "),a("li",[a("code",[t._v("absolute")]),t._v(" "),a("ul",[a("li",[t._v("绝对定位（相对最近一个非static的父元素）")])])]),t._v(" "),a("li",[a("code",[t._v("fixed")]),t._v(" "),a("ul",[a("li",[t._v("固定定位（相对浏览器视窗的左上角）")])])]),t._v(" "),a("li",[a("code",[t._v("relative")]),t._v(" "),a("ul",[a("li",[t._v("相对定位（相对本身所在位置，原位置遵循标准文档流）")])])]),t._v(" "),a("li",[a("code",[t._v("sticky")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/skill/css/other/#粘性定位（sticky）"}},[t._v("粘性定位")]),t._v("（先保持"),a("code",[t._v("static")]),t._v("，达到阈值时变成"),a("code",[t._v("fixed")]),t._v("）")],1),t._v(" "),a("li",[t._v("该定位遵循"),a("code",[t._v("标准文档流")]),t._v("，"),a("strong",[t._v("仍然保留")]),t._v("元素原本在文档流中的位置")])])])]),t._v(" "),a("h3",{attrs:{id:"浮动布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动布局"}},[t._v("#")]),t._v(" 浮动布局")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/skill/css/bfc/"}},[t._v("浮动布局")]),t._v("\n脱离标准流，"),a("strong",[t._v("会影响")]),t._v(" 标准流的排列。")],1),t._v(" "),a("h3",{attrs:{id:"网格布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网格布局"}},[t._v("#")]),t._v(" 网格布局")]),t._v(" "),a("p",[t._v("从 "),a("strong",[t._v("行、列")]),t._v(" 上定义元素的排列。")]),t._v(" "),a("blockquote",[a("p",[t._v("不建议使用：兼容性（需IE10 "),a("code",[t._v("及以上")]),t._v("）、安卓低版本不支持")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("display: grid")]),t._v("：将父元素设为"),a("strong",[t._v("网格容器")]),t._v("。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("grid-template-columns")]),t._v("：定义列轨道")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("grid-template-rows")]),t._v("：定义行轨道")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("grid-gap")]),t._v("：定义行列之间的间隙")])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义 3种 不同宽度的列，分别为： 200px、自适应、200px */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-colums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px auto 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义 2种 不同高度的行，分别为 100px、200px */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 定义行、列的间隙为20px */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-gap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("如图所示：")]),t._v(" "),a("img",{attrs:{src:"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829574880/68f3/c764/34c3/eeb492ef34447f9efc983714c4acdc73.png",width:"500px"}}),t._v(" "),a("h3",{attrs:{id:"多列布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多列布局"}},[t._v("#")]),t._v(" 多列布局")]),t._v(" "),a("p",[t._v("把内容 "),a("strong",[t._v("按列排序")]),t._v("（类似报纸）：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("colum-width")]),t._v("，指定 "),a("code",[t._v("按照至少某个宽度用尽可能多的列")]),t._v(" 来填充")]),t._v(" "),a("li",[a("code",[t._v("column-count")]),t._v("，指定 "),a("strong",[t._v("列的数量")])])]),t._v(" "),a("img",{attrs:{src:"https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5829645859/7d7c/f275/56c5/31fa62501c0e442d7f7d9978aa5c73ce.png",width:"720px"}}),t._v(" "),a("h3",{attrs:{id:"扩展-三列布局的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扩展-三列布局的实现"}},[t._v("#")]),t._v(" [扩展] 三列布局的实现")]),t._v(" "),a("p",[t._v("要求：三个元素：左、中、右，其中左、右固定宽度为200px，中间宽度自适应。（元素高度100px）")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("以下为 "),a("strong",[t._v("5种")]),t._v(" 实现方式：")]),t._v(" "),a("h4",{attrs:{id:"flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[t._v("#")]),t._v(" Flex布局")]),t._v(" "),a("p",[a("strong",[t._v("思路")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("父容器 "),a("code",[t._v("flex")])]),t._v(" "),a("li",[t._v("子元素 需要固定的设置 "),a("code",[t._v("width")]),t._v("，需要自适应的设置 "),a("code",[t._v("flex: 1")])])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left,\n.right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h4",{attrs:{id:"定位方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定位方式"}},[t._v("#")]),t._v(" 定位方式")]),t._v(" "),a("p",[a("strong",[t._v("思路")]),t._v("：")]),t._v(" "),a("ol",[a("li",[t._v("父容器 "),a("code",[t._v("relative")])]),t._v(" "),a("li",[t._v("子元素 "),a("code",[t._v("absolute")]),t._v("；其中，需要固定的设置 "),a("code",[t._v("width")]),t._v("，需要自适应的设置 "),a("code",[t._v("left")]),t._v("、"),a("code",[t._v("right")]),t._v(" 进行适应。")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left,\n.right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 通过绝对定位的 right: 0 撑开 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("h4",{attrs:{id:"浮动方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动方式"}},[t._v("#")]),t._v(" 浮动方式")]),t._v(" "),a("p",[a("strong",[t._v("思路：")])]),t._v(" "),a("ol",[a("li",[t._v("不需要父容器，但要更换DOM排列：left、right、center")]),t._v(" "),a("li",[t._v("需要固定的元素设置 "),a("code",[t._v("width")]),t._v("、"),a("code",[t._v("float")]),t._v("一左一右；需要自适应的通过 "),a("code",[t._v("margin")]),t._v(" 撑开")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n * 注：因为浮动元素的前一个元素若为非浮动，则会紧贴底部\n * 所以这种方式需更换DOM的排列顺序：left、right、center\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left,\n.right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".center")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 通过margin撑开 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h4",{attrs:{id:"表格布局-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表格布局-2"}},[t._v("#")]),t._v(" 表格布局")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 注意，这里因为是table，所以width是100% */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left,\n.center,\n.right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table-cell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left,\n.right")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h4",{attrs:{id:"网格布局-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网格布局-2"}},[t._v("#")]),t._v(" 网格布局")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px auto 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/lyzg/p/4877277.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("从网易与淘宝的font-size思考前端设计稿与工作流"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/frochu/html-meta-viewport-setting-69fbb06ed3d8",target:"_blank",rel:"noopener noreferrer"}},[t._v("Responsive Web Design 基礎 : "),a("meta",{attrs:{name:"”viewport”"}}),t._v(" 設定"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.lagou.com/lgeduarticle/40493.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端基础知识概述 -- 移动端开发的屏幕、图像、字体与布局的兼容适配"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.boeyc.com/index.php/archives/11/",target:"_blank",rel:"noopener noreferrer"}},[t._v("响应式布局的常用解决方案"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);