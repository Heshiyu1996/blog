(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{565:function(t,v,_){"use strict";_.r(v);var a=_(43),e=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"个性化触达平台"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#个性化触达平台"}},[t._v("#")]),t._v(" 个性化触达平台")]),t._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#个性化触达平台"}},[t._v("个性化触达平台")]),_("ul",[_("li",[_("a",{attrs:{href:"#基本信息"}},[t._v("基本信息")])]),_("li",[_("a",{attrs:{href:"#职责"}},[t._v("职责")])]),_("li",[_("a",{attrs:{href:"#难点"}},[t._v("难点")])])])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"基本信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本信息"}},[t._v("#")]),t._v(" 基本信息")]),t._v(" "),_("ul",[_("li",[t._v("所用技术: React、Ant Design、Webpack、NOS、react-virtualized")]),t._v(" "),_("li",[t._v("描述: 供云音乐运营同事使用的用户流失召回管理平台，具有“重组件、轻⻚面”特点。")]),t._v(" "),_("li",[t._v("成果: 每日DAU贡献近30w;个性化用户触达运营工作耗时降低66%(从原来3天减少到1天);支持多产品多业务线的接入，且接入成本低;前端组件具有较好的复 用性和可维护性。")])]),t._v(" "),_("h2",{attrs:{id:"职责"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#职责"}},[t._v("#")]),t._v(" 职责")]),t._v(" "),_("ul",[_("li",[t._v("项目搭建；")]),t._v(" "),_("li",[t._v("复杂表单组件开发；通用Hooks封装；")]),t._v(" "),_("li",[t._v("大列表数据渲染性能调研/提升；")]),t._v(" "),_("li",[t._v("大附件上传(对接NOS)；")])]),t._v(" "),_("h2",{attrs:{id:"难点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#难点"}},[t._v("#")]),t._v(" 难点")]),t._v(" "),_("h3",{attrs:{id:"大列表数据渲染性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大列表数据渲染性能"}},[t._v("#")]),t._v(" 大列表数据渲染性能")]),t._v(" "),_("p",[t._v("渲染 10000 条数据（不采用分页），页面渲染缓慢，且滚动卡顿。")]),t._v(" "),_("h4",{attrs:{id:"思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),_("ul",[_("li",[t._v("一次性加载，白屏时间长达 9s（通过 "),_("code",[t._v("chrome - showRender / Performance")]),t._v(" 发现 FPS 降到 30 以下）")]),t._v(" "),_("li",[_("code",[t._v("setTimeout")]),t._v(" 分批渲染：白屏缓解，但会出现闪屏")]),t._v(" "),_("li",[_("code",[t._v("requestAnimationFrame")]),t._v(" 分批渲染：白屏缓解，不会出现闪屏")]),t._v(" "),_("li",[t._v("调研 "),_("code",[t._v("react-virtualized")]),t._v(" 和 "),_("code",[t._v("react-tiny-virtual-list")])])]),t._v(" "),_("p",[t._v("最终采用 "),_("code",[t._v("react-tiny-vitual-list")]),t._v(" （轻量，简单）。")]),t._v(" "),_("blockquote",[_("p",[t._v("虽然 "),_("code",[t._v("react-virtualized")]),t._v(" 支持动态高度，并且 Antd 也推荐使用；但对于此业务场景不匹配。")])]),t._v(" "),_("h4",{attrs:{id:"react-tiny-virtual-list"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#react-tiny-virtual-list"}},[t._v("#")]),t._v(" react-tiny-virtual-list")]),t._v(" "),_("p",[_("code",[t._v("react-tiny-virtual-list")]),t._v(" 实现了 “虚拟列表”，只渲染 可视区域内 的一部分列表元素。")]),t._v(" "),_("p",[t._v("原理：")]),t._v(" "),_("ol",[_("li",[t._v("根据 滚动容器 的 "),_("code",[t._v("scrollTop")]),t._v(" 先计算出 可视区域的第一个元素 "),_("code",[t._v("start")]),t._v(" 值")]),t._v(" "),_("li",[t._v("根据 "),_("code",[t._v("start")]),t._v(" 对应元素的 "),_("code",[t._v("offset")]),t._v(" 以及 容器元素的大小，计算出 可视区域内 最后一个可见元素 的索引（即 "),_("code",[t._v("stop")]),t._v("）")]),t._v(" "),_("li",[t._v("根据 "),_("code",[t._v("start")]),t._v(" 、 "),_("code",[t._v("stop")]),t._v(" 来改变 可视区域 需要渲染的内容。")])]),t._v(" "),_("h3",{attrs:{id:"大附件上传-对接nos"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大附件上传-对接nos"}},[t._v("#")]),t._v(" 大附件上传（对接NOS）")]),t._v(" "),_("p",[t._v("基于 Antd 的 "),_("code",[t._v("Upload")]),t._v(" 组件，实现的 “大附件分片上传”。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),_("p",[t._v("使用到的 服务端Api：")]),t._v(" "),_("ul",[_("li",[t._v("multiUploadInit：初始化，获取 "),_("code",[t._v("nosKey")]),t._v("、"),_("code",[t._v("uploadId")])]),t._v(" "),_("li",[t._v("multiUpload：分片上传")]),t._v(" "),_("li",[t._v("multiUploadComplete：结束上传")])])]),t._v(" "),_("h4",{attrs:{id:"思路-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#思路-2"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("指定 "),_("code",[t._v("Upload")]),t._v(" 组件的 "),_("code",[t._v("customRequest")]),t._v(" 属性（自定义上传行为）")])]),t._v(" "),_("li",[_("p",[t._v("组装“分片数组”：")]),t._v(" "),_("ul",[_("li",[t._v("确定分片的个数、每片大小")]),t._v(" "),_("li",[t._v("将 file 转成 "),_("code",[t._v("blob对象")]),t._v(" ，通过 "),_("code",[t._v("blob.slice()")]),t._v(" 切片")]),t._v(" "),_("li",[t._v("每片为一个 "),_("code",[t._v("formData")]),t._v(" 对象，存入“分片数组”")])])]),t._v(" "),_("li",[_("p",[t._v("根据 “分片数组”，生成 “promise队列”，并传入 Promise.all")])]),t._v(" "),_("li",[_("p",[t._v("当 Promise.all 状态改变时，调用结束上传")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);