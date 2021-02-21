(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{511:function(t,s,a){t.exports=a.p+"assets/img/img-1.e35a3f76.png"},512:function(t,s,a){t.exports=a.p+"assets/img/img-2.7e2febc0.png"},691:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"周边-vue-router实现思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周边-vue-router实现思路"}},[t._v("#")]),t._v(" [周边] Vue Router实现思路")]),t._v(" "),e("p",[t._v("前端路由的本质："),e("code",[t._v("监听 URL 的变化")]),t._v("，然后"),e("code",[t._v("匹配路由规则")]),t._v("，"),e("code",[t._v("渲染相应的页面")]),t._v("，并且无须刷新。")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#周边-vue-router实现思路"}},[t._v("[周边] Vue Router实现思路")]),e("ul",[e("li",[e("a",{attrs:{href:"#单页面路由的两种实现方式"}},[t._v("单页面路由的两种实现方式")])]),e("li",[e("a",{attrs:{href:"#vuerouter-的大致步骤"}},[t._v("VueRouter 的大致步骤")])]),e("li",[e("a",{attrs:{href:"#插件安装"}},[t._v("插件安装")])]),e("li",[e("a",{attrs:{href:"#vuerouter实例化"}},[t._v("VueRouter实例化")])]),e("li",[e("a",{attrs:{href:"#路由初始化-beforecreate"}},[t._v("路由初始化（beforeCreate）")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"单页面路由的两种实现方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单页面路由的两种实现方式"}},[t._v("#")]),t._v(" 单页面路由的两种实现方式")]),t._v(" "),e("h3",{attrs:{id:"hash-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash-模式"}},[t._v("#")]),t._v(" hash 模式")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("#")]),t._v(" 后面的哈希值发生变化（"),e("strong",[t._v("不会向服务器请求数据")]),t._v("）")]),t._v(" "),e("li",[t._v("触发 "),e("code",[t._v("hashchange")]),t._v("，解析url")]),t._v(" "),e("li",[t._v("匹配对应的路由规则")]),t._v(" "),e("li",[t._v("跳转页面")])]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("手动刷新")]),t._v("不会向服务器发送请求，也不会触发 "),e("code",[t._v("hashchange")]),t._v(" 事件，但可以通过load事件解析url")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(511),alt:"alt"}})]),t._v(" "),e("h3",{attrs:{id:"history-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#history-模式"}},[t._v("#")]),t._v(" history 模式")]),t._v(" "),e("p",[e("code",[t._v("history")]),t._v("是HTML5 新推出的功能，比之 Hash URL 更加美观。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(512),alt:"alt"}})]),t._v(" "),e("ul",[e("li",[t._v("跳转时，调用"),e("code",[t._v("pushState")]),t._v("，创建新的历史记录条目，不会向服务器请求")]),t._v(" "),e("li",[t._v("手动刷新，"),e("strong",[t._v("会向服务器重新请求")])]),t._v(" "),e("li",[t._v("回退（包括"),e("code",[t._v("histroy.back()")]),t._v("），会触发"),e("code",[t._v("popState")])])]),t._v(" "),e("h2",{attrs:{id:"vuerouter-的大致步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuerouter-的大致步骤"}},[t._v("#")]),t._v(" VueRouter 的大致步骤")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ① 插件安装")]),t._v("\nVue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueRouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ② VueRouter实例化")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ③ 指定路由方式")]),t._v("\n    mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ④ 路由匹配规则，生成路由映射表（该表可通过“构造函数内的路由匹配对象”来访问）")]),t._v("\n    routes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("h2",{attrs:{id:"插件安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件安装"}},[t._v("#")]),t._v(" 插件安装")]),t._v(" "),e("p",[t._v("调用 "),e("code",[t._v("Vue.use(VueRouter)")]),t._v("（让 "),e("code",[t._v("VueRouter")]),t._v(" 可以使用 "),e("code",[t._v("Vue")]),t._v("），然后 "),e("code",[t._v("Vue")]),t._v(" 会调用 "),e("code",[t._v("VueRouter")]),t._v(" 的 "),e("code",[t._v("install")]),t._v(" 函数。")]),t._v(" "),e("blockquote",[e("p",[t._v("在"),e("code",[t._v("install")]),t._v("函数中，做了两件事：1、"),e("strong",[t._v("给组件混入钩子函数")]),t._v("（"),e("code",[t._v("beforeCreate")]),t._v("、"),e("code",[t._v("destroyed")]),t._v("）；2、"),e("strong",[t._v("全局注册两个路由组件")]),t._v("（"),e("code",[t._v("RouterView")]),t._v("、"),e("code",[t._v("RouterLink")]),t._v("）。")])]),t._v(" "),e("h2",{attrs:{id:"vuerouter实例化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuerouter实例化"}},[t._v("#")]),t._v(" VueRouter实例化")]),t._v(" "),e("p",[t._v("安装VueRouter插件后，会实例化"),e("code",[t._v("VueRouter")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[t._v("VueRouter的构造函数中，会创建一个 "),e("strong",[t._v("路由匹配对象")]),t._v("（"),e("code",[t._v("this.matcher")]),t._v("），并且根据 "),e("code",[t._v("mode")]),t._v(" 采取不同的路由方式："),e("code",[t._v("hash")]),t._v("、"),e("code",[t._v("history")]),t._v("。")])]),t._v(" "),e("p",[e("strong",[t._v("路由匹配对象")]),t._v("的作用：有权使用 "),e("strong",[t._v("路由映射表")]),t._v(" 的几个对象。")]),t._v(" "),e("h3",{attrs:{id:"路由映射表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由映射表"}},[t._v("#")]),t._v(" 路由映射表")]),t._v(" "),e("p",[t._v("路由映射表：根据用户配置的路由规则（"),e("code",[t._v("path")]),t._v("、"),e("code",[t._v("name")]),t._v("、"),e("code",[t._v("children")]),t._v("），遍历生成的一份映射表（每条规则，就对应生成一条路由记录）。")]),t._v(" "),e("blockquote",[e("p",[t._v("路由映射表里的一些个对象："),e("code",[t._v("pathList")]),t._v("、"),e("code",[t._v("pathMap")]),t._v("、"),e("code",[t._v("nameMap")]),t._v("。")])]),t._v(" "),e("h2",{attrs:{id:"路由初始化-beforecreate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由初始化-beforecreate"}},[t._v("#")]),t._v(" 路由初始化（beforeCreate）")]),t._v(" "),e("p",[t._v("路由初始化：当根组件调用 "),e("code",[t._v("beforeCreate")]),t._v(" 时，会进行"),e("strong",[t._v("路由跳转、改变URL")]),t._v("，然后"),e("strong",[t._v("渲染对应的组件")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"路由跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转"}},[t._v("#")]),t._v(" 路由跳转")]),t._v(" "),e("p",[t._v("获取当前路由所匹配的信息。")]),t._v(" "),e("p",[t._v("核心："),e("strong",[t._v("判断需要跳转的路由是否存在于记录中")]),t._v("，然后执行"),e("strong",[t._v("各种导航守卫函数")]),t._v("，最后完成 "),e("code",[t._v("URL")]),t._v(" 的改变、组件的渲染。")]),t._v(" "),e("h4",{attrs:{id:"导航守卫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航守卫"}},[t._v("#")]),t._v(" 导航守卫")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("导航被触发")])]),t._v(" "),e("li",[e("p",[t._v("在 "),e("strong",[t._v("失活组件")]),t._v(" 调用离开守卫")])]),t._v(" "),e("li",[e("p",[t._v("调用 全局 "),e("code",[t._v("beforeEach")])]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[t._v("在 组件内 调用"),e("code",[t._v("beforeRouteUpdate")])]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ← 调用它")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[t._v("在 路由配置里 调用"),e("code",[t._v("beforeEnter")])]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     routes"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/foo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             component"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeEnter")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[t._v("解析异步组件")])]),t._v(" "),e("li",[e("p",[t._v("在 组件内 调用"),e("code",[t._v("beforeRouteEnter")])]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteEnter")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ← 调用它")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[t._v("调用 全局 "),e("code",[t._v("beforeResolve")]),t._v(" 导航守卫钩子")]),t._v(" "),e("ul",[e("li",[e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeResolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])])]),t._v(" "),e("li",[e("p",[t._v("调用 全局 "),e("code",[t._v("afterEach")]),t._v(" 导航守卫钩子")])]),t._v(" "),e("li",[e("p",[t._v("触发组件的渲染")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);