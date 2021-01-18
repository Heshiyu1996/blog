(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{373:function(t,s,a){t.exports=a.p+"assets/img/redux.fc74f2fc.png"},374:function(t,s,a){t.exports=a.p+"assets/img/img-2.d3a47dd3.png"},375:function(t,s,a){t.exports=a.p+"assets/img/img-3.841587ba.png"},563:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"redux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),n("blockquote",[n("p",[t._v("Redux 是一个 Web应用 的"),n("strong",[t._v("状态管理方案")]),t._v("。")])]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#redux"}},[t._v("Redux")]),n("ul",[n("li",[n("a",{attrs:{href:"#基本组成"}},[t._v("基本组成")])]),n("li",[n("a",{attrs:{href:"#三个原则"}},[t._v("三个原则")])]),n("li",[n("a",{attrs:{href:"#特点"}},[t._v("特点")])]),n("li",[n("a",{attrs:{href:"#react-redux"}},[t._v("react-redux")])]),n("li",[n("a",{attrs:{href:"#参考链接"}},[t._v("参考链接")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"基本组成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本组成"}},[t._v("#")]),t._v(" 基本组成")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("store")]),t._v("：一个状态容器（全局唯一），存储所有状态（state）。")]),t._v(" "),n("li",[n("strong",[t._v("state")]),t._v("：状态")]),t._v(" "),n("li",[n("strong",[t._v("action")]),t._v("：View 发出的一种 "),n("strong",[t._v("能让 state 发生变化")]),t._v(" 的通知")]),t._v(" "),n("li",[n("strong",[t._v("dispatch")]),t._v("：View 发出 Action 的媒介")]),t._v(" "),n("li",[n("strong",[t._v("reducer")]),t._v("：接收 action、state，返回一个新的 state（通过替换旧的）")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(373),alt:"alt"}})]),t._v(" "),n("p",[t._v("使用前 vs 使用后")]),t._v(" "),n("p",[n("img",{attrs:{src:a(374),width:"300"}}),t._v(" vs "),n("img",{attrs:{src:a(375),width:"300"}})]),t._v(" "),n("h2",{attrs:{id:"三个原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三个原则"}},[t._v("#")]),t._v(" 三个原则")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("单一数据源：")]),t._v(" 整个应用只有唯一的 "),n("code",[t._v("Store")]),t._v("；")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("State只读：")]),t._v(" 唯一改变 "),n("code",[t._v("state")]),t._v(" 的方法就是 "),n("code",[t._v("dispatch")]),t._v(" 一个 "),n("code",[t._v("action")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("纯行为函数：")]),t._v(" 只能通过一个 纯函数"),n("code",[t._v("reducer")]),t._v("  来描述修改。")])])]),t._v(" "),n("h2",{attrs:{id:"特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),n("ul",[n("li",[t._v("遵循单向数据流")]),t._v(" "),n("li",[t._v("每一个 state 的变化可预测")]),t._v(" "),n("li",[t._v("状态可统一处理“修改前的校验”")])]),t._v(" "),n("h2",{attrs:{id:"react-redux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-redux"}},[t._v("#")]),t._v(" react-redux")]),t._v(" "),n("p",[t._v("在 React 里使用 Redux。")]),t._v(" "),n("p",[t._v("部分概念和上面提到的差不多，除此之外，还有一些新的概念：")]),t._v(" "),n("h4",{attrs:{id:"provider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[t._v("#")]),t._v(" Provider")]),t._v(" "),n("p",[n("code",[t._v("<Provider>")]),t._v("是一个容器。")]),t._v(" "),n("p",[n("strong",[t._v("原理：通过React "),n("code",[t._v("Context")]),t._v("实现。")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ReactReduxContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Provider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("contextValue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("children"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("在业务组件内与 "),n("code",[t._v("connect")]),t._v(" 配合，可以实现 "),n("strong",[t._v("跨层级数据传递")]),t._v("。")]),t._v(" "),n("h4",{attrs:{id:"connect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connect"}},[t._v("#")]),t._v(" connect")]),t._v(" "),n("p",[t._v("是一个高阶组件，接收 2 个函数：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("mapStateToProps")]),t._v("：将需要的 "),n("code",[t._v("state")]),t._v(" 注入到组件的props中")]),t._v(" "),n("li",[n("code",[t._v("mapDispatchToProps")]),t._v("：将 "),n("code",[t._v("dispatch")]),t._v(" 注入到组件的props中")])]),t._v(" "),n("p",[t._v("除了上面的作用，还有当 "),n("code",[t._v("state")]),t._v(" 发生变化时，通知关联的组件更新。")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"react"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("PropTypes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prop-types'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// connect是个纯函数，它返回一个组件的类定义")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("connect")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mapStateToProps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapDispatchToProps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("WrappedComponent")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connect")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillMount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unSubscribe "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapStateToProps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("unSubscribe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WrappedComponent \n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapDispatchToProps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    Connect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contextTypes "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        store"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Connect\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" connect\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br")])]),n("h3",{attrs:{id:"实践-react-redux"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实践-react-redux"}},[t._v("#")]),t._v(" [实践] react-redux")]),t._v(" "),n("p",[t._v("1、"),n("strong",[t._v("新建"),n("code",[t._v("reducer.js")])]),t._v("：接收 action、state，返回新的 state")]),t._v(" "),n("p",[t._v("2、"),n("strong",[t._v("实例化"),n("code",[t._v("store")])]),t._v("：向 "),n("code",[t._v("createStore")]),t._v(" 传入 "),n("code",[t._v("reducer")])]),t._v(" "),n("p",[t._v("3、"),n("strong",[t._v("引入"),n("code",[t._v("Provider")]),t._v("组件")]),t._v("：传入"),n("code",[t._v("store")])]),t._v(" "),n("p",[t._v("4、"),n("strong",[t._v("注入到"),n("code",[t._v("业务组件")])]),t._v("：利用 "),n("code",[t._v("connect")]),t._v(" 包裹业务组件，将 "),n("code",[t._v("state")]),t._v("、"),n("code",[t._v("dispatch")]),t._v(" 注入到组件")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://codesandbox.io/s/react-redux-demo-k1jbe",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-redux-demo"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/8A-uOiuiMpAfhX0S6YwhbA",target:"_blank",rel:"noopener noreferrer"}},[t._v("从 Redux 设计理念到源码分析"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);