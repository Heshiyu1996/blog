(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{427:function(t,s,a){"use strict";a.r(s);var e=a(3),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"《深入react技术栈》-陈屹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#《深入react技术栈》-陈屹"}},[t._v("#")]),t._v(" 《深入React技术栈》-陈屹")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#《深入react技术栈》-陈屹"}},[t._v("《深入React技术栈》-陈屹")]),a("ul",[a("li",[a("a",{attrs:{href:"#第五章-深入redux应用架构"}},[t._v("第五章 深入Redux应用架构")])]),a("li",[a("a",{attrs:{href:"#第三章-解读react源码"}},[t._v("第三章 解读React源码")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"第五章-深入redux应用架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第五章-深入redux应用架构"}},[t._v("#")]),t._v(" 第五章 深入Redux应用架构")]),t._v(" "),a("p",[t._v("Redux提供API让我们去使用reducer创建store，并能更新store中的数据或获取store中最新的状态")]),t._v(" "),a("blockquote",[a("p",[t._v("Redux = Reduce + Flux（思想）")])]),t._v(" "),a("h3",{attrs:{id:"三大原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三大原则"}},[t._v("#")]),t._v(" 三大原则")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("单一数据源")]),t._v(" "),a("ul",[a("li",[t._v("一个应用永远只有唯一的数据源")])])]),t._v(" "),a("li",[a("p",[t._v("状态是只读的")]),t._v(" "),a("ul",[a("li",[t._v("定义一个reducer，它负责响应action并修改数据")])])]),t._v(" "),a("li",[a("p",[t._v("状态修改均由纯函数完成")]),t._v(" "),a("ul",[a("li",[t._v("每个reducer本质上函数（接受一定的输入，必定会得到一定的输出）")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reducer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("previousState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" newState\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 根据previousState、action来计算出新的newState")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"createstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createstore"}},[t._v("#")]),t._v(" createStore")]),t._v(" "),a("p",[a("code",[t._v("createStore")]),t._v("是Redux中最核心的API")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createStore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redux'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" reducers "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./reducer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("craeteStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("以上"),a("code",[t._v("store")]),t._v("是个对象，包含4个方法：")]),t._v(" "),a("ul",[a("li",[t._v("getState()：获取store中当前的状态")]),t._v(" "),a("li",[t._v("dispatch(action)：分发一个action，并返回这个action\n"),a("ul",[a("li",[t._v("这是唯一能改变store中数据的方式\n另外还有2个不常用的方法：subscribe()、replaceReducer()")])])])]),t._v(" "),a("h3",{attrs:{id:"react-redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-redux"}},[t._v("#")]),t._v(" react-redux")]),t._v(" "),a("p",[a("code",[t._v("react-redux")]),t._v("提供了一个组件、一个API帮助Redux和React绑定")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("ul",[a("li",[a("p",[t._v("组件："),a("code",[t._v("<Provider store={store}/>")])]),t._v(" "),a("ul",[a("li",[t._v("接收一个store作为props值")]),t._v(" "),a("li",[t._v("是整个Redux应用的顶层组件")])])]),t._v(" "),a("li",[a("p",[t._v("API：connect()")]),t._v(" "),a("ul",[a("li",[t._v("使得任意组件都具有获取store中数据的功能")])])])])]),t._v(" "),a("h2",{attrs:{id:"第三章-解读react源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三章-解读react源码"}},[t._v("#")]),t._v(" 第三章 解读React源码")]),t._v(" "),a("h3",{attrs:{id:"diff算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff算法"}},[t._v("#")]),t._v(" diff算法")]),t._v(" "),a("p",[t._v("React把Virtual DOM与diff完美结合，使得原有传统的diff算法的算法复杂度从O(n3)变为O（n）")]),t._v(" "),a("h3",{attrs:{id:"diff策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff策略"}},[t._v("#")]),t._v(" diff策略")]),t._v(" "),a("ul",[a("li",[t._v("tree diff\n"),a("ul",[a("li",[t._v("对树进行分层比较，两棵树只会对同一层次的节点进行比较")])])]),t._v(" "),a("li",[t._v("component diff\n"),a("ul",[a("li",[t._v("对于组件之间，会根据组件的类型是否相同采取不同策略：")]),t._v(" "),a("li",[t._v("若是同类型组件，按照原策略比较Virtual DOM")]),t._v(" "),a("li",[t._v("若不是，则该组件为dirty component，替换整个组件下的所有节点")]),t._v(" "),a("li",[t._v("React可以通过"),a("code",[t._v("shouldComponentUpdate")]),t._v("来判断该组件是否需要进行diff算法")])])]),t._v(" "),a("li",[t._v("element diff\n"),a("ul",[a("li",[t._v("当节点处于同一层级时，diff有三种节点操作：插入、移动、删除")])])])]),t._v(" "),a("h3",{attrs:{id:"diff步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff步骤"}},[t._v("#")]),t._v(" diff步骤")]),t._v(" "),a("p",[t._v("1、对新集合中的节点进行循环遍历；")]),t._v(" "),a("blockquote",[a("p",[t._v("通过唯一key来判断新旧集合中是否存在相同的节点，可见key值的重要性")])]),t._v(" "),a("p",[t._v("2、如果不存在，则创建新节点，且不移动；")]),t._v(" "),a("p",[t._v("3、如果存在，则继续比较【“"),a("strong",[t._v("当前节点在旧集合中的位置")]),t._v("”＜“"),a("strong",[t._v("lastIndex")]),t._v("”】；如果成立，则移动；否则不移动；")]),t._v(" "),a("p",[t._v("4、不管移动/创建与否，都会"),a("strong",[t._v("更新lastIndex")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// lastIndex表示：刚刚在新集合中，访问到的这些元素里，在旧集合中的最大长度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 因为，如果当前元素在旧集合中的位置，比“刚刚访问到的元素在旧集合中的最大长度”还要大的话")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就证明当前这个元素是不会影响到其他元素的，所以就不会加入到差异队列，也就不执行移动操作了")]),t._v("\nlastIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prevChild"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_mountIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lastIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取最大值")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"react-patch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-patch"}},[t._v("#")]),t._v(" React Patch")]),t._v(" "),a("p",[t._v("所谓的Patch，就是将"),a("strong",[t._v("tree diff")]),t._v("计算出来的"),a("strong",[t._v("DOM差异队列")]),t._v("更新到"),a("strong",[t._v("真实的DOM节点")]),t._v("上。")]),t._v(" "),a("p",[t._v("主要是通过"),a("strong",[t._v("遍历差异队列")]),t._v("、同时"),a("strong",[t._v("执行更新类型的相应操作")])]),t._v(" "),a("blockquote",[a("p",[t._v("更新类型的操作包括：新节点的插入、已有节点的移动和移除等")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("是否可以"),a("strong",[t._v("直接根据差异队列")]),t._v("依次插入节点？")]),t._v(" "),a("p",[t._v("可以。")]),t._v(" "),a("p",[t._v("因为在diff阶段"),a("strong",[t._v("添加差异节点到差异队列")]),t._v("时，本身就是"),a("strong",[t._v("有序添加")]),t._v("。队列里的顺序本身就是最终真实DOM的顺序")])]),t._v(" "),a("p",[t._v("而且，是会在"),a("strong",[t._v("计算出全部差异、并放入差异队列")]),t._v("后，才会"),a("strong",[t._v("一次性地")]),t._v("去执行Patch来完成真实DOM的更新。")])])}),[],!1,null,null,null);s.default=r.exports}}]);