(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{285:function(t,a,s){t.exports=s.p+"assets/img/top-2-1.63c27068.png"},482:function(t,a,s){"use strict";s.r(a);var n=s(29),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"挖掘vue的声明式交互能力-演讲者-winter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#挖掘vue的声明式交互能力-演讲者-winter"}},[t._v("#")]),t._v(" 挖掘Vue的声明式交互能力（演讲者：Winter）")]),t._v(" "),n("blockquote",[n("p",[t._v("主题介绍：声明式与命令式设计是Vue和React的核心区别之一，我的分享中将会从几个方面来探讨如何挖掘声明式编程的优势，分别包括：声明式与双向绑定，声明式与交互，声明式与递归")])]),t._v(" "),n("h3",{attrs:{id:"交互能力编程-包括什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#交互能力编程-包括什么"}},[t._v("#")]),t._v(" “交互能力编程”包括什么")]),t._v(" "),n("ul",[n("li",[t._v("声明式与图灵完备性")]),t._v(" "),n("li",[t._v("声明式与UI编程")]),t._v(" "),n("li",[t._v("声明式与UI架构")]),t._v(" "),n("li",[t._v("声明式与交互")])]),t._v(" "),n("h3",{attrs:{id:"声明式-vs-命令式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明式-vs-命令式"}},[t._v("#")]),t._v(" 声明式 VS 命令式")]),t._v(" "),n("p",[t._v("“声明式”是指：直接想要达到某种效果，并不注重过程。"),n("code",[t._v("例如：HTML、CSS等")])]),t._v(" "),n("blockquote",[n("p",[t._v("一个月后，我要看到你站在这里讲一份关于Vue的PPT")])]),t._v(" "),n("p",[t._v("“命令式”是指：为了达到某种效果，并且注重过程的。"),n("code",[t._v("例如：JS、JAVA、C++等")])]),t._v(" "),n("blockquote",[n("p",[t._v("你先去学习Vue，上官网深入他的一些规则原理，然后做一份PPT给我")])]),t._v(" "),n("h3",{attrs:{id:"图灵完备性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图灵完备性"}},[t._v("#")]),t._v(" 图灵完备性")]),t._v(" "),n("p",[t._v("图灵完备性，即“可计算性”。表示在这个系统中写代码能够解决任何计算性的问题，也就是说"),n("strong",[t._v("一切可计算的问题都能计算")])]),t._v(" "),n("p",[t._v("对于“声明式”语言，则指：if/递归\n对于“命令式”语言，则指：if/for, if/goto")]),t._v(" "),n("p",[n("code",[t._v("Vue.js的组件系统是具有图灵完备性的")]),t._v("，这一点会上劭非大神分别“计算阶乘”、“计算斐波那契数列”这两个demo来证明了。")]),t._v(" "),n("h3",{attrs:{id:"声明式的优势"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明式的优势"}},[t._v("#")]),t._v(" 声明式的优势")]),t._v(" "),n("h4",{attrs:{id:"可重复绑定性-recycle-list"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可重复绑定性-recycle-list"}},[t._v("#")]),t._v(" 可重复绑定性（recycle-list）")]),t._v(" "),n("p",[t._v("类似于在可视区域滚动。")]),t._v(" "),n("p",[t._v("当用户滚出可视区域后，从DOM树上摘下那些"),n("strong",[t._v("已滚出区域的DOM节点")]),t._v("，放入池子中（如果池子已满则先销毁池子中的DOM节点再放入）。当下次再进来这部分的可视区域后，再从池子中把DOM节点挂到树上（实际上是再把数据绑上而已），以达到提高性能的效果。")]),t._v(" "),n("p",[n("img",{attrs:{src:s(285),alt:"alt"}})]),t._v(" "),n("h3",{attrs:{id:"声明式与ui编程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明式与ui编程"}},[t._v("#")]),t._v(" 声明式与UI编程")]),t._v(" "),n("p",[t._v("与UI编程的各个阶段：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("70年代，MVC的诞生，人们意识到"),n("strong",[t._v("视图")]),t._v("是应该被"),n("strong",[t._v("独立抽象")]),t._v("的")])]),t._v(" "),n("li",[n("p",[t._v("80年代，标记语言大热，最开始更是与文本相关")])]),t._v(" "),n("li",[n("p",[t._v("90年代，可视化编辑器出现“独立的UI代码文件”")])]),t._v(" "),n("li",[n("p",[t._v("2000年，markup language + programming language")])]),t._v(" "),n("li",[n("p",[t._v("2009年，“HTML5”")])])]),t._v(" "),n("h3",{attrs:{id:"声明式与ui架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明式与ui架构"}},[t._v("#")]),t._v(" 声明式与UI架构")]),t._v(" "),n("p",[t._v("MVC => MVP => MVVM，一脉相承的演化")]),t._v(" "),n("p",[t._v("MVVM是为"),n("strong",[t._v("声明式/多语言")]),t._v("量身定做的编程模型，它的数据绑定是"),n("strong",[t._v("声明式的数据")]),t._v("与"),n("strong",[t._v("UI")]),t._v("通讯")]),t._v(" "),n("h3",{attrs:{id:"data的写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data的写法"}},[t._v("#")]),t._v(" data的写法")]),t._v(" "),n("p",[t._v("在演示demo时，留意到邵非大神的代码，发现他的data都是这样写的：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// new")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// old")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("h3",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("这一part还是属于比较干货的内容，劭非大神谦虚地说自己一个月前才学的Vue，然而像Vue一样类似的声明式语言的主要特点都是大同小异的，都是具有：“图灵完备性”、“UI编程”、“UI架构”等特点。")]),t._v(" "),n("p",[t._v("通过这节学到了Vue.js的组件系统是具有图灵完备性的一门语言，任何可计算的问题都可以利用Vue.js本身的语法被计算出来。同时对“UI编程”的各个发展阶段，以及对“MVVM的数据绑定”的来源有了一定的认识。最后邵非大神还推荐用"),n("code",[t._v("Vue Directive")]),t._v("(指令)来给元素添加行为。")])])}),[],!1,null,null,null);a.default=e.exports}}]);