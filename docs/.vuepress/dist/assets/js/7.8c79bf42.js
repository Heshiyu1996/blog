(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{330:function(t,s,a){t.exports=a.p+"assets/img/interface-0.ef8b07c2.png"},331:function(t,s,a){t.exports=a.p+"assets/img/interface-1.d87e496f.png"},332:function(t,s,a){t.exports=a.p+"assets/img/interface-2.c8ea47fd.png"},333:function(t,s,a){t.exports=a.p+"assets/img/interface-3.77b927cd.png"},334:function(t,s,a){t.exports=a.p+"assets/img/interface-9.6cf4fbf3.png"},335:function(t,s,a){t.exports=a.p+"assets/img/interface-4.d4d86e7a.png"},336:function(t,s,a){t.exports=a.p+"assets/img/interface-5.96d635a7.png"},337:function(t,s,a){t.exports=a.p+"assets/img/interface-7.e7741f32.png"},338:function(t,s,a){t.exports=a.p+"assets/img/interface-6.2751e3a7.png"},462:function(t,s,a){"use strict";a.r(s);var e=a(3),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block warning"},[e("p",[t._v("前言：本规范的应用范围为EHR的新项目（从2020年Q1起）；大部分老项目的接口也将计划在Q3前逐步迁移至NEI，可先酌情参考。")]),t._v(" "),e("p",[t._v("当规范约定先行时，可避免开发过程中产生不必要的问题，从而提高开发效率。")])]),t._v(" "),e("p",[t._v("大致流程：\n"),e("img",{attrs:{src:a(330),alt:"alt"}})]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#①-基本要求"}},[t._v("① 基本要求")])]),e("li",[e("a",{attrs:{href:"#②-restful-api规范"}},[t._v("② RESTful API规范")])]),e("li",[e("a",{attrs:{href:"#③-前端-接口mock"}},[t._v("③ [前端] 接口Mock")])]),e("li",[e("a",{attrs:{href:"#④-后端-接口自测"}},[t._v("④ [后端] 接口自测")])]),e("li",[e("a",{attrs:{href:"#⑤-接口联调"}},[t._v("⑤ 接口联调")])]),e("li",[e("a",{attrs:{href:"#⑥-接口测试"}},[t._v("⑥ 接口测试")])]),e("li",[e("a",{attrs:{href:"#⑦-附录"}},[t._v("⑦ 附录")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"①-基本要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#①-基本要求"}},[t._v("#")]),t._v(" ① 基本要求")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("基本要求")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("备注")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("时间")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在后端完成 "),e("strong",[t._v("开发方案评审")]),t._v(" 后")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("img",{attrs:{src:a(331),alt:"alt"}})])]),t._v(" "),e("tr",[e("td",[t._v("接口平台")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://nei.netease.com/project?pid=51981",target:"_blank",rel:"noopener noreferrer"}},[t._v("NEI"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://gotest.hz.netease.com/web/#/home/project/api?projectId=175",target:"_blank",rel:"noopener noreferrer"}},[t._v("GoTest"),e("OutboundLink")],1),t._v("仅作接口测试使用")])]),t._v(" "),e("tr",[e("td",[t._v("约定内容")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("接口的基本属性、请求/响应信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("后端主导，前端填写")])])])]),t._v(" "),e("p",[e("strong",[t._v("建议：从新项目（2020年Q1起）开始，需要产品明确此次迭代的版本号，而不仅仅是上线日期（供接口打标签使用）。")])]),t._v(" "),e("h3",{attrs:{id:"约定内容-详细说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#约定内容-详细说明"}},[t._v("#")]),t._v(" “约定内容”详细说明")]),t._v(" "),e("h4",{attrs:{id:"接口的基本属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口的基本属性"}},[t._v("#")]),t._v(" 接口的基本属性")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("接口字段")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("示例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("接口名称")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。动词 + 名词")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("新增词库")])]),t._v(" "),e("tr",[e("td",[t._v("请求方式、URL")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。符合RESTful风格（见下文）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("POST /search/words")])]),t._v(" "),e("tr",[e("td",[t._v("业务分组")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。功能大模块")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("搜索管理")])]),t._v(" "),e("tr",[e("td",[t._v("标签")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。迭代版本号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("v1.0")])]),t._v(" "),e("tr",[e("td",[t._v("负责人")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。一般填“前端人员”")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("贺世宇")])]),t._v(" "),e("tr",[e("td",[t._v("关注人")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。一般填“后端人员”")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("张少军")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(332),alt:"alt"}})]),t._v(" "),e("h4",{attrs:{id:"接口的请求-响应信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接口的请求-响应信息"}},[t._v("#")]),t._v(" 接口的请求/响应信息")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("接口字段")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("请求头")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("选填。只列出自定义请求头")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/")])]),t._v(" "),e("tr",[e("td",[t._v("字段名称")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。与后端表中字段统一")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("可临时定义，后续修正")])]),t._v(" "),e("tr",[e("td",[t._v("字段类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/")])]),t._v(" "),e("tr",[e("td",[t._v("字段描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填。大致描述、空值、枚举值")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("尽可能详细，可避免后期重复沟通")])]),t._v(" "),e("tr",[e("td",[t._v("是否必需")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("必填")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/")])]),t._v(" "),e("tr",[e("td",[t._v("生成规则")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("选填")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("自定义Mock数据生成")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(333),alt:"alt"}})]),t._v(" "),e("h2",{attrs:{id:"②-restful-api规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#②-restful-api规范"}},[t._v("#")]),t._v(" ② RESTful API规范")]),t._v(" "),e("h3",{attrs:{id:"基本特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本特点"}},[t._v("#")]),t._v(" 基本特点")]),t._v(" "),e("p",[t._v("前后端接口应当统一约定为"),e("strong",[t._v("RESTful API")]),t._v("。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("REST（Representational State Transfer，表现层状态转化）")]),t._v("，是一种设计风格。")]),t._v(" "),e("p",[t._v("符合REST设计风格的Web API可称为RESTful API。")]),t._v(" "),e("p",[t._v("Representational：“资源”的呈现形式\nState Transfer：服务器中的数据（或状态）的变化")])]),t._v(" "),e("p",[t._v("综上，"),e("strong",[t._v("RESTful API")]),t._v("的特点：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("1、简短、层级关系直观的资源URI； \n\n2、资源呈现形式；（如：JSON、二进制、JPG、HTML等） \n\n3、对资源的操作（4种：GET、POST、PUT、DELETE）\n")])])]),e("h3",{attrs:{id:"使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("接口名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("请求方式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("URI")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("以“班级”为资源")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("获取班级列表")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("分页：/class；不分页：/class/list")])]),t._v(" "),e("tr",[e("td",[t._v("查询班级信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/class/:id")])]),t._v(" "),e("tr",[e("td",[t._v("新建班级")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("POST")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/class")])]),t._v(" "),e("tr",[e("td",[t._v("编辑班级")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/class/:id")])]),t._v(" "),e("tr",[e("td",[t._v("删除班级")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/class/:id")])]),t._v(" "),e("tr",[e("td",[t._v("以“学生”为资源")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",[t._v("查询学生信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GET")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/class/:classID/student/:studentID")])])])]),t._v(" "),e("p",[t._v("如果觉得以上不够用，下面作为补充：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("接口名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("请求方式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("URI")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("批量删除班级")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("DELETE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/class（idList放请求参数）")])]),t._v(" "),e("tr",[e("td",[t._v("批量修改班级状态")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PUT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/class/status（idList放请求参数）")])])])]),t._v(" "),e("p",[t._v("注意：GET请求不能用body参数；POST/PUT/DELETE请求不能用param参数")]),t._v(" "),e("h2",{attrs:{id:"③-前端-接口mock"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#③-前端-接口mock"}},[t._v("#")]),t._v(" ③ [前端] 接口Mock")]),t._v(" "),e("p",[t._v("在之后的新项目开发中，前端可直接通过NEI生成Mock数据，无需专门维护，更加方便快捷！")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://doc.hz.netease.com/pages/viewpage.action?pageId=235675485",target:"_blank",rel:"noopener noreferrer"}},[t._v("《NEI基本使用说明》by heshiyu"),e("OutboundLink")],1)]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("如果想了解更多NEI相关知识，可点击：")]),e("a",{attrs:{href:"https://github.com/x-orpheus/nei-toolkit/blob/master/doc/%E4%BD%BF%E7%94%A8NEI%E8%BF%9B%E8%A1%8C%E5%89%8D%E5%90%8E%E7%AB%AF%E5%B9%B6%E8%A1%8C%E5%BC%80%E5%8F%91.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("《NEI详细教程》"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("三条准则：")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("接口状态")]),t._v("。前端们应该养成好习惯，及时更新接口状态，减少重复问题的沟通\n"),e("img",{attrs:{src:a(334),alt:"alt"}}),t._v(" "),e("img",{attrs:{src:a(335),alt:"alt"}})])]),t._v(" "),e("li",[e("p",[e("code",[t._v("导入GoTest")]),t._v("。主开发应该在版本提测前导入，方便QA进行接口测试\n"),e("img",{attrs:{src:a(336),alt:"alt"}}),t._v(")")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("及时更新")]),t._v("。前端们应负责保持NEI上的接口处于最新状态。")]),t._v(" "),e("blockquote",[e("p",[t._v("若已提测，则需将该接口重新导入GoTest。")])])])]),t._v(" "),e("h2",{attrs:{id:"④-后端-接口自测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#④-后端-接口自测"}},[t._v("#")]),t._v(" ④ [后端] 接口自测")]),t._v(" "),e("p",[t._v("三条准则：")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("Controller层面")]),t._v("无明显错误")]),t._v(" "),e("ul",[e("li",[t._v("例如请求方式正确，参数类型正确，返回字段齐全以及类型正确")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Servic层面")]),t._v("跑通基本功能（例如：增删改查）")]),t._v(" "),e("ul",[e("li",[t._v("增删改查内部遇到复杂逻辑按实际情况自测;")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("数据库")])]),t._v(" "),e("ul",[e("li",[t._v("校对默认值和字数限制微增大;")])])])]),t._v(" "),e("h2",{attrs:{id:"⑤-接口联调"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⑤-接口联调"}},[t._v("#")]),t._v(" ⑤ 接口联调")]),t._v(" "),e("h3",{attrs:{id:"联调方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联调方式"}},[t._v("#")]),t._v(" 联调方式")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("联调方式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("前端")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("后端")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("部署")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1、部署联调")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("服务器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("服务器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("至少每天一次")])]),t._v(" "),e("tr",[e("td",[t._v("2、本地联调")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("本地")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("服务器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("/")])])])]),t._v(" "),e("p",[t._v("不推荐采用"),e("code",[t._v("2、本地联调")]),t._v("，原因：")]),t._v(" "),e("ul",[e("li",[t._v("联调应当在 "),e("strong",[t._v("前、后端确保各自的开发质量后")]),t._v(" 进行")]),t._v(" "),e("li",[t._v("本地环境的不稳定性")]),t._v(" "),e("li",[t._v("部分特殊情景无法模拟")])]),t._v(" "),e("h2",{attrs:{id:"⑥-接口测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⑥-接口测试"}},[t._v("#")]),t._v(" ⑥ 接口测试")]),t._v(" "),e("h3",{attrs:{id:"测试策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试策略"}},[t._v("#")]),t._v(" 测试策略")]),t._v(" "),e("p",[t._v("接口测试策略共分为3大方面："),e("strong",[t._v("测试分析、测试分类、测试工具")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(337),alt:"alt"}})]),t._v(" "),e("h2",{attrs:{id:"⑦-附录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#⑦-附录"}},[t._v("#")]),t._v(" ⑦ 附录")]),t._v(" "),e("h3",{attrs:{id:"状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),e("h4",{attrs:{id:"常用状态码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用状态码"}},[t._v("#")]),t._v(" 常用状态码")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态码枚举")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ServerCode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SUCCESS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONTINUE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_PARAM")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_REQUEST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("402")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FORBIDDEN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_URL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO_LOGIN")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("406")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TIME_OUT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("408")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_SERVER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_REALIZE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("501")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_GATEWAY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BAD_SERVER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GATEWAY_TIME_OUT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_VERSION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("505")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态码描述枚举")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ServerCodeMap "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SUCCESS")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'成功'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONTINUE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'继续'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 传递指定“继续参数”即可成功")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_PARAM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'参数格式出错'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_REQUEST")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求出错'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FORBIDDEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'拒绝访问'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_URL")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求地址出错'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO_LOGIN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'未登录'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TIME_OUT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求超时'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_SERVER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'服务器内部错误'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_REALIZE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'服务未实现'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_GATEWAY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'网关错误'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BAD_SERVER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'服务不可用'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GATEWAY_TIME_OUT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'网关超时'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WRONG_VERSION")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP版本不受支持'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重定向状态码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" RedirectMap "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FORBIDDEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#/403'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ServerCode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO_LOGIN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#/login'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br")])]),e("h4",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("p",[t._v("目前前端有2种提示形式：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("400")]),t._v("，可扩展至"),e("code",[t._v("400101")]),t._v("、"),e("code",[t._v("400102")]),t._v("等来表示业务上更多种可能的情况")]),t._v(" "),e("li",[e("code",[t._v("402")]),t._v("，一般需后端提供"),e("code",[t._v("msg")]),t._v("字段\n"),e("img",{attrs:{src:a(338),alt:"alt"}})])])])}),[],!1,null,null,null);s.default=n.exports}}]);