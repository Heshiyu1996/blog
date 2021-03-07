(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{475:function(t,e,a){t.exports=a.p+"assets/img/img-1.d40483b0.png"},476:function(t,e,a){t.exports=a.p+"assets/img/img-2.5a55bb63.png"},687:function(t,e,a){"use strict";a.r(e);var r=a(43),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#生命周期"}},[t._v("生命周期")]),r("ul",[r("li",[r("a",{attrs:{href:"#react-16以前"}},[t._v("React 16以前")])]),r("li",[r("a",{attrs:{href:"#react-16及以后"}},[t._v("React 16及以后")])]),r("li",[r("a",{attrs:{href:"#其它注意"}},[t._v("其它注意")])]),r("li",[r("a",{attrs:{href:"#参考链接"}},[t._v("参考链接")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"react-16以前"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-16以前"}},[t._v("#")]),t._v(" React 16以前")]),t._v(" "),r("p",[r("img",{attrs:{src:a(475),alt:"alt"}})]),t._v(" "),r("h2",{attrs:{id:"react-16及以后"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-16及以后"}},[t._v("#")]),t._v(" React 16及以后")]),t._v(" "),r("p",[r("img",{attrs:{src:a(476),alt:"alt"}})]),t._v(" "),r("h3",{attrs:{id:"react-16生命周期调整"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-16生命周期调整"}},[t._v("#")]),t._v(" React 16生命周期调整")]),t._v(" "),r("h4",{attrs:{id:"_3-个钩子被标记不安全"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-个钩子被标记不安全"}},[t._v("#")]),t._v(" 3 个钩子被标记不安全")]),t._v(" "),r("p",[r("code",[t._v("componentWillMount")]),t._v("、"),r("code",[t._v("componentWillReceiveProps")]),t._v("、"),r("code",[t._v("componentWillUpdate")]),t._v("。")]),t._v(" "),r("p",[r("strong",[t._v("原因：采用 Fiber结构 后，这些生命周期可能会触发多次。")])]),t._v(" "),r("blockquote",[r("p",[t._v("React16采用了 Fiber结构 表示 virtual dom，使得可在 构建阶段 被打断。对于")])]),t._v(" "),r("h4",{attrs:{id:"取代的-2-个钩子"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#取代的-2-个钩子"}},[t._v("#")]),t._v(" 取代的 2 个钩子")]),t._v(" "),r("h4",{attrs:{id:"getderivedstatefromprops"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getderivedstatefromprops"}},[t._v("#")]),t._v(" getDerivedStateFromProps")]),t._v(" "),r("p",[r("strong",[t._v("执行时机：")]),t._v(" 首次挂载（willMount）、每次更新前(render前，willReceiveProps、willUpdate)")]),t._v(" "),r("p",[r("strong",[t._v("使用：")]),t._v(" 返回一个对象来更新当前state值，不更新时返回null")]),t._v(" "),r("blockquote",[r("p",[t._v("注意：因为是静态方法，所以不能用this")])]),t._v(" "),r("h4",{attrs:{id:"getsnapshotbeforeupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getsnapshotbeforeupdate"}},[t._v("#")]),t._v(" getSnapshotBeforeUpdate")]),t._v(" "),r("p",[r("strong",[t._v("执行时机：")]),t._v(" 每次更新后（render后，DidUpdate前；属于 pre-commit 阶段）")]),t._v(" "),r("h2",{attrs:{id:"其它注意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它注意"}},[t._v("#")]),t._v(" 其它注意")]),t._v(" "),r("h3",{attrs:{id:"shouldcomponentupdate-nextprops-nextstate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shouldcomponentupdate-nextprops-nextstate"}},[t._v("#")]),t._v(" shouldComponentUpdate(nextProps, nextState)")]),t._v(" "),r("p",[t._v("可以通过 "),r("code",[t._v("shouldComponentUpdate")]),t._v(" 比较 “新、旧的props、state” 来决定 "),r("strong",[t._v("是否执行render")]),t._v("。")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("但传下来的 props 依然是会更新的")])])]),t._v(" "),r("h3",{attrs:{id:"forceupdate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#forceupdate"}},[t._v("#")]),t._v(" forceUpdate()")]),t._v(" "),r("p",[t._v("调用 "),r("code",[t._v("forceUpdate")]),t._v(" 与 “更新props/state” 一样，但会跳过 "),r("code",[t._v("shouldComponentUpdate")]),t._v(":")]),t._v(" "),r("blockquote",[r("p",[t._v("forceUpdate() => getDerivedStateFromProps => render -> getSnapshotBeforeUpdate => componentDidUpdate")])]),t._v(" "),r("h2",{attrs:{id:"参考链接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React新生命周期图谱（官方文档）"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/zhangwx6/article/details/81667631",target:"_blank",rel:"noopener noreferrer"}},[t._v("React新生命周期-三个钩子删除原因"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);