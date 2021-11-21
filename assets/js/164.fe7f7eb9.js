(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{720:function(t,s,a){"use strict";a.r(s);var e=a(56),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-fiber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-fiber"}},[t._v("#")]),t._v(" React Fiber")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("React Fiber")]),t._v("是 React16 中新的协调引擎。")]),t._v(" "),a("p",[t._v("它可以实现 “任务分割” ，让 "),a("code",[t._v("调度算法（reconciliation）")]),t._v(" 能够 “暂停” 或 “恢复”")]),t._v(" "),a("p",[t._v("update: 2020-04-11")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#react-fiber"}},[t._v("React Fiber")]),a("ul",[a("li",[a("a",{attrs:{href:"#fiber的原因"}},[t._v("Fiber的原因")])]),a("li",[a("a",{attrs:{href:"#原理"}},[t._v("原理")])]),a("li",[a("a",{attrs:{href:"#具体实现机制"}},[t._v("具体实现机制")])]),a("li",[a("a",{attrs:{href:"#fiber的缺点"}},[t._v("Fiber的缺点")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"fiber的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber的原因"}},[t._v("#")]),t._v(" Fiber的原因")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("React的核心流程分为两部分：")]),t._v(" "),a("ul",[a("li",[t._v("reconciliation（调度算法）\n"),a("ul",[a("li",[t._v("更新state/props、调用生命周期钩子、生成virtual dom、通过diff算法、重新渲染")])])]),t._v(" "),a("li",[t._v("commit\n"),a("ul",[a("li",[t._v("操作dom节点更新")])])])])]),t._v(" "),a("p",[t._v("在 react16之前 的 “调度算法” 中，React是 "),a("strong",[t._v("同步递归渲染")]),t._v(" 的，并且无法暂停和恢复。")]),t._v(" "),a("p",[t._v("所以可能在 “大量的组件渲染”时，会 "),a("strong",[t._v("导致 主进程 长时间被占用，导致出现卡顿和掉帧的情况")]),t._v(" 。")]),t._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[a("code",[t._v("React Fiber")]),t._v("可以实现 "),a("strong",[t._v("任务分割")]),t._v(" 。")]),t._v(" "),a("p",[t._v("原理："),a("strong",[t._v("将任务分割成一个个独立的小任务，将它们分散到 “浏览器的空闲期” 执行")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("“浏览器的空闲期” 需要由 "),a("code",[t._v("requestIdleCallback")]),t._v(" 告知。")])]),t._v(" "),a("p",[t._v("特点是：能充分利用 "),a("strong",[t._v("主进程的事件循环机制")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"大致数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大致数据结构"}},[t._v("#")]),t._v(" 大致数据结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p6.music.126.net/obj/wo3DlcOGw6DClTvDisK1/5300246369/2160/0f3c/47b9/2535662b0dbc1eb8eb49a618270d4d95.png",alt:"alt"}})]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fiber")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("instance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instance "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向第一个 child 节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("child "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" child"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向父节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("return "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向第一个兄弟节点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" previous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fiber节点里的Hooks链表")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoizedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Hooks "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <-- 伪代码")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("h2",{attrs:{id:"具体实现机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现机制"}},[t._v("#")]),t._v(" 具体实现机制")]),t._v(" "),a("h3",{attrs:{id:"暂停和恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂停和恢复"}},[t._v("#")]),t._v(" 暂停和恢复")]),t._v(" "),a("p",[t._v("Reactv16 将 "),a("code",[t._v("reconciliation（调度算法）")]),t._v(" 变成了 "),a("strong",[t._v("对 链表 的遍历")]),t._v(" 。")]),t._v(" "),a("blockquote",[a("p",[t._v("旧："),a("code",[t._v("stack reconciler")]),t._v("；新："),a("code",[t._v("fiber reconciler")])])]),t._v(" "),a("p",[t._v("通过指针映射，每个单元都记录着上一步、下一步，从而可以实现 "),a("strong",[t._v("暂停和恢复")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"分散执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分散执行"}},[t._v("#")]),t._v(" 分散执行")]),t._v(" "),a("p",[t._v("通过 2 个浏览器API："),a("code",[t._v("requestIdleCallback")]),t._v("、"),a("code",[t._v("requestAnimationFrame")])]),t._v(" "),a("h4",{attrs:{id:"requestidlecallback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestidlecallback"}},[t._v("#")]),t._v(" requestIdleCallback")]),t._v(" "),a("p",[t._v("负责处理 低优先级的任务 。")]),t._v(" "),a("blockquote",[a("p",[t._v("浏览器在空闲时，会执行这个回调")])]),t._v(" "),a("p",[a("code",[t._v("requestIdleCallback")]),t._v("API：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestIdleCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器在空闲时，会执行这个回调，同时会给回调传入一个dealine对象")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在dealine对象中包含着浏览器目前有多少时间供我们执行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dealine"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IdleDeadline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为了避免浏览器因繁忙且无剩余时间导致的饿死，可传入一个超时时间来强制让浏览器执行回调。")]),t._v("\n    option"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"requestanimationframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestanimationframe"}},[t._v("#")]),t._v(" requestAnimationFrame")]),t._v(" "),a("p",[t._v("负责处理 高优先级的任务 。")]),t._v(" "),a("h2",{attrs:{id:"fiber的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fiber的缺点"}},[t._v("#")]),t._v(" Fiber的缺点")]),t._v(" "),a("p",[t._v("Fiber 比 Stack 会 "),a("strong",[t._v("花费更多的内存占用、执行性能")]),t._v(" 。\n")])])}),[],!1,null,null,null);s.default=n.exports}}]);