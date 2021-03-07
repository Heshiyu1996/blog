(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{477:function(t,s,a){t.exports=a.p+"assets/img/csr-ssr.884d9fda.png"},478:function(t,s,a){t.exports=a.p+"assets/img/csr-ssr-2.1eff6e10.png"},690:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"react-ssr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-ssr"}},[t._v("#")]),t._v(" React SSR")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#react-ssr"}},[t._v("React SSR")]),n("ul",[n("li",[n("a",{attrs:{href:"#传统的csr"}},[t._v("传统的CSR")])]),n("li",[n("a",{attrs:{href:"#ssr"}},[t._v("SSR")])]),n("li",[n("a",{attrs:{href:"#注意事项"}},[t._v("注意事项")])])])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"传统的csr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#传统的csr"}},[t._v("#")]),t._v(" 传统的CSR")]),t._v(" "),n("h3",{attrs:{id:"步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),n("p",[t._v("浏览器发起请求")]),t._v(" "),n("p",[t._v("=> 服务器返回HTML文件")]),t._v(" "),n("p",[t._v("=> 解析HTML，并加载、执行其中的 JS，通过 JS 渲染页面")]),t._v(" "),n("p",[t._v("=> JS 完成事件绑定。")]),t._v(" "),n("h2",{attrs:{id:"ssr"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssr"}},[t._v("#")]),t._v(" SSR")]),t._v(" "),n("p",[t._v("SSR采用 "),n("strong",[t._v("同构直出")]),t._v(" 的方案（即："),n("strong",[t._v("服务端、客户端使用同一套代码，并输出HTML")]),t._v("）")]),t._v(" "),n("blockquote",[n("p",[t._v("可以提升代码复用率、可维护性")])]),t._v(" "),n("blockquote",[n("p",[t._v("在 浏览器 与 服务端 之间，多了个 node中间层。")])]),t._v(" "),n("h3",{attrs:{id:"步骤-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#步骤-2"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),n("p",[t._v("浏览器发起请求")]),t._v(" "),n("p",[t._v("=> node中间层 请求服务器数据")]),t._v(" "),n("p",[t._v("=> node中间层 将 数据 渲染到HTML")]),t._v(" "),n("p",[t._v("=> 下发一个 包含完整内容的HTML 给浏览器（"),n("strong",[t._v("不包括事件绑定")]),t._v("）")]),t._v(" "),n("img",{attrs:{src:a(477),width:"500px"}}),t._v(" "),n("img",{attrs:{src:a(478),width:"500px"}}),t._v(" "),n("h3",{attrs:{id:"优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),n("p",[n("strong",[t._v("优点：")])]),t._v(" "),n("ol",[n("li",[t._v("提升首屏渲染性能")]),t._v(" "),n("li",[t._v("对 SEO 更友好")])]),t._v(" "),n("p",[n("strong",[t._v("缺点：")])]),t._v(" "),n("ol",[n("li",[t._v("加大服务器压力")]),t._v(" "),n("li",[t._v("对于 局部变化 ，需要重新发送整个页面（不支持局部刷新）")]),t._v(" "),n("li",[t._v("维护性较差（修改、部署）")])]),t._v(" "),n("h2",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),n("h3",{attrs:{id:"事件挂载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#事件挂载"}},[t._v("#")]),t._v(" 事件挂载")]),t._v(" "),n("p",[t._v("node渲染完后，给浏览器下发HTML字符串（"),n("strong",[t._v("不包括事件绑定")]),t._v("），需要 客户端 来完成事件挂载。")]),t._v(" "),n("p",[t._v("所以对于 “事件逻辑” 的处理，需要注意：")]),t._v(" "),n("ol",[n("li",[t._v("尽量放到 "),n("code",[t._v("componentDidMount")]),t._v(" 触发\n"),n("ul",[n("li",[t._v("node层的生命周期只走到 "),n("code",[t._v("componentWillMount")])]),t._v(" "),n("li",[t._v("客户端有完整生命周期，所以可以在 "),n("code",[t._v("componentDidMount")]),t._v(" 处理")])])]),t._v(" "),n("li",[t._v("保持 DOM 结构一致\n"),n("ul",[n("li",[t._v("否则会报错 或 重新渲染")])])])]),t._v(" "),n("h3",{attrs:{id:"node无法访问window对象"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node无法访问window对象"}},[t._v("#")]),t._v(" node无法访问window对象")]),t._v(" "),n("ol",[n("li",[t._v("可以延迟到 "),n("code",[t._v("componentDidMount")]),t._v(" 后触发")]),t._v(" "),n("li",[t._v("给 node环境 mock一个 全局window对象（通过 "),n("code",[t._v("ssr-window")]),t._v(" 等库，通过简单patch，避免报错）")])]),t._v(" "),n("h3",{attrs:{id:"路由相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路由相关"}},[t._v("#")]),t._v(" 路由相关")]),t._v(" "),n("p",[n("strong",[t._v("服务端路由：")]),t._v(" 根据请求路径，找到路由组件，从而判断要展示什么样的页面")]),t._v(" "),n("p",[n("strong",[t._v("客户端路由：")]),t._v(" 根据浏览器中的地址，找到路由组件；")]),t._v(" "),n("h4",{attrs:{id:"服务端路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#服务端路由"}},[t._v("#")]),t._v(" 服务端路由")]),t._v(" "),n("p",[n("code",[t._v("<StaticRouter>")]),t._v("：react-router 专门为 服务端渲染 而提供的一个路由组件。")]),t._v(" "),n("p",[t._v("通过传入的 location 来分析当前需要的路由组件")]),t._v(" "),n("div",{staticClass:"language-jsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("App")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provider")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("store")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StaticRouter")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("location")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("req"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("context")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n          ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StaticRouter")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provider")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n}\n\nreturn ReactDom.renderToString(")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(");\n")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])]),n("p",[t._v("最后通过 "),n("code",[t._v("renderToString")]),t._v(" 将 组件 转成 对应的HTML字符串。")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("renderToString")]),t._v("不会处理任何event listener，所以不管怎么点击按钮都没反应（node层不处理事件绑定）")])]),t._v(" "),n("h4",{attrs:{id:"客户端路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#客户端路由"}},[t._v("#")]),t._v(" 客户端路由")]),t._v(" "),n("p",[n("code",[t._v("<BrowserRouter>")]),t._v("能匹配到当前浏览器所访问的路由组件，然后通过 "),n("code",[t._v("render")]),t._v(" 挂载。")]),t._v(" "),n("div",{staticClass:"language-jsx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("App")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provider")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("store")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("store"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BrowserRouter")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n          ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Route")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("path")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[n("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Home"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  \t\t")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BrowserRouter")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Provider")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  )\n}\n\nReactDom.render(")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v(", document.querySelector('#root'))\n")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("h3",{attrs:{id:"渲染入口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渲染入口"}},[t._v("#")]),t._v(" 渲染入口")]),t._v(" "),n("p",[t._v("SSR、CSR 对于 webpack 的入口不一样，webpack配置也要分开：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("webpack.client.js")])]),t._v(" "),n("li",[n("code",[t._v("webpack.server.js")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);