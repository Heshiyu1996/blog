(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{564:function(t,s,a){"use strict";a.r(s);var n=a(43),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"广播电台复盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#广播电台复盘"}},[t._v("#")]),t._v(" 广播电台复盘")]),t._v(" "),a("h2",{attrs:{id:"基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[t._v("#")]),t._v(" 基本信息")]),t._v(" "),a("ul",[a("li",[t._v("所用技术: React、Webpack、Babel、JSBridge、Corona等")]),t._v(" "),a("li",[t._v("描述: 云音乐v8.0播客板块之一，以“直播流”形式将电台呈现给用户(对接蜻蜓FM)。")]),t._v(" "),a("li",[t._v("成果: 拓展音频播放公共组件;Lighthouse体验基线达标;承载10万+日活。")])]),t._v(" "),a("h2",{attrs:{id:"职责"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#职责"}},[t._v("#")]),t._v(" 职责")]),t._v(" "),a("ul",[a("li",[t._v("音频播放组件开发;")]),t._v(" "),a("li",[t._v("客户端JSBridge对接;")]),t._v(" "),a("li",[t._v("多浏览器兼容/适配;")]),t._v(" "),a("li",[t._v("首屏性能优化;")]),t._v(" "),a("li",[t._v("接入错误日志上报;")])]),t._v(" "),a("h2",{attrs:{id:"工程内部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工程内部"}},[t._v("#")]),t._v(" 工程内部")]),t._v(" "),a("h3",{attrs:{id:"css适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css适配"}},[t._v("#")]),t._v(" css适配")]),t._v(" "),a("p",[t._v("一开始以为只做了简单的用JS定位，走查后兼容性bug较多。")]),t._v(" "),a("ul",[a("li",[t._v("移动端safari底部导航遮挡")]),t._v(" "),a("li",[t._v("对mnb包（mnb.getPageInfo获取系统栏/导航栏）不熟悉")]),t._v(" "),a("li",[t._v("全面屏适配（safe-area-inset-bottom）不熟悉")])]),t._v(" "),a("h4",{attrs:{id:"日后参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日后参考"}},[t._v("#")]),t._v(" 日后参考")]),t._v(" "),a("ul",[a("li",[t._v("先实现一款（如ipx）比较完美适配")]),t._v(" "),a("li",[t._v("ipx其它系列（ip6/7/8 -> ip6/7/8p -> ip5/5se -> ipx/xs & ipxr & ipxs max）")]),t._v(" "),a("li",[t._v("1080P安卓 -> 常用测试机")])]),t._v(" "),a("h4",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[t._v("【移动端项目】web端访问时友好地提示扫码访问（qrcode.react、window.location.href），根据业务需求，看是使用isMobile还是isInNEMapp")]),t._v(" "),a("li",[t._v("微信内二次分享-标题/副标题的编辑")]),t._v(" "),a("li",[t._v("对同AppID下的orpheus链接后带参数，需通过"),a("code",[t._v("mp.view.queryDidChanged")]),t._v("监听")])]),t._v(" "),a("h4",{attrs:{id:"调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),a("ul",[a("li",[t._v("【调试工具】eruda（异步加载，可能js加载前更早的日志无法打印）；vconsole（同步加载可打印最早日志，iOS测试包内置: "),a("code",[t._v("开发调试-浏览器测试-开启调试模式")]),t._v("）；MusicDevtools（预览小程序）")]),t._v(" "),a("li",[t._v("【RPC调试】mnb在测试环境无法打印日志。\n"),a("ul",[a("li",[t._v("解决：可通过改变"),a("code",[t._v("MNBCallback")]),t._v("指向")])])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MNBCallback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint-disable-next-line func-names")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MNBCallback")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("seq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("回调：seq: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("seq"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", error: ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(", result: ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'options: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h2",{attrs:{id:"对外沟通"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对外沟通"}},[t._v("#")]),t._v(" 对外沟通")]),t._v(" "),a("h3",{attrs:{id:"客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),a("ul",[a("li")]),t._v(" "),a("h3",{attrs:{id:"服务端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端"}},[t._v("#")]),t._v(" 服务端")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("接口字段格式与常规不同，需二次处理")]),t._v(" "),a("ul",[a("li",[t._v("接入互动系统（收藏功能）：")])])]),t._v(" "),a("li",[a("p",[t._v("字段实际下发值格式不定：")]),t._v(" "),a("ul",[a("li",[t._v("接入外部Api（蜻蜓电台）")])])])]),t._v(" "),a("h3",{attrs:{id:"视觉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视觉"}},[t._v("#")]),t._v(" 视觉")]),t._v(" "),a("ul",[a("li",[t._v("视觉稿不全面（说是参考DI-FM）")]),t._v(" "),a("li",[t._v("走查较随意（H5没有走查）")])]),t._v(" "),a("h3",{attrs:{id:"qa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qa"}},[t._v("#")]),t._v(" QA")])])}),[],!1,null,null,null);s.default=r.exports}}]);