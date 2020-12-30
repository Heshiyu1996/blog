(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{436:function(s,t,a){s.exports=a.p+"assets/img/WebSocket-1.49345da6.png"},594:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[s._v("#")]),s._v(" WebSocket")]),s._v(" "),n("blockquote",[n("p",[n("code",[s._v("WebSocket")]),s._v("是一种浏览器的API，它可以在一个单独的持久连接上建立双向通信")])]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("与后端保持不断通信的方法")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("短轮询")]),s._v("：客户端周期性地向服务器发起HTTP请求\n"),n("ul",[n("li",[s._v("一个request对应一个response")])])]),s._v(" "),n("li",[n("strong",[s._v("长轮询")]),s._v("：客户端发起HTTP请求，服务器并不是每次都立即响应\n"),n("ul",[n("li",[s._v("一个request对应一个response")]),s._v(" "),n("li",[s._v("等待数据更新后才响应，否则保持该连接直到超时）")])])]),s._v(" "),n("li",[n("strong",[s._v("WebSocket")])])])]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#websocket"}},[s._v("WebSocket")]),n("ul",[n("li",[n("a",{attrs:{href:"#websocket特点"}},[s._v("WebSocket特点")])]),n("li",[n("a",{attrs:{href:"#websocket缺点"}},[s._v("WebSocket缺点")])]),n("li",[n("a",{attrs:{href:"#常用属性-5"}},[s._v("常用属性（5）")])]),n("li",[n("a",{attrs:{href:"#常用方法-2"}},[s._v("常用方法（2）")])]),n("li",[n("a",{attrs:{href:"#不稳定性"}},[s._v("不稳定性")])]),n("li",[n("a",{attrs:{href:"#心跳检测"}},[s._v("心跳检测")])]),n("li",[n("a",{attrs:{href:"#断开重连"}},[s._v("断开重连")])]),n("li",[n("a",{attrs:{href:"#实例代码"}},[s._v("实例代码")])]),n("li",[n("a",{attrs:{href:"#参考资料"}},[s._v("参考资料")])])])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"websocket特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket特点"}},[s._v("#")]),s._v(" WebSocket特点")]),s._v(" "),n("p",[s._v("1、"),n("strong",[s._v("[消息推送]")]),s._v(" 支持服务端及时的消息推送；")]),s._v(" "),n("p",[s._v("2、"),n("strong",[s._v("[基于TCP]")]),s._v(" 建立在TCP协议之上；")]),s._v(" "),n("p",[s._v("3、"),n("strong",[s._v("[HTTP协议升级而来]")]),s._v(" 握手阶段采用HTTP协议，与HTTP协议有良好的兼容性（默认端口也是80和443）；")]),s._v(" "),n("p",[s._v("4、"),n("strong",[s._v("[可发两类内容]")]),s._v(" 可以发送文本、二进制（Blob、Arraybuffer）；")]),s._v(" "),n("p",[s._v("5、"),n("strong",[s._v("[可跨域]")]),s._v(" 没有同源限制，客户端可以和任意服务器通信；")]),s._v(" "),n("p",[s._v("6、"),n("strong",[s._v("[并发多个请求]")]),s._v(" 同一条"),n("code",[s._v("WebSocket")]),s._v("上能同时并发多个请求；")]),s._v(" "),n("p",[n("img",{attrs:{src:a(436),alt:"alt"}})]),s._v(" "),n("h2",{attrs:{id:"websocket缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket缺点"}},[s._v("#")]),s._v(" WebSocket缺点")]),s._v(" "),n("p",[s._v("1、前、后端需要维护"),n("code",[s._v("WebSocket")]),s._v("的连接状态（如：心跳检测、断开重连）")]),s._v(" "),n("p",[s._v("2、不兼容低版本IE浏览器")]),s._v(" "),n("h2",{attrs:{id:"常用属性-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用属性-5"}},[s._v("#")]),s._v(" 常用属性（5）")]),s._v(" "),n("h3",{attrs:{id:"websocket-readystate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-readystate"}},[s._v("#")]),s._v(" webSocket.readyState")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("ul",[n("li",[s._v("0：CONNECTING 表示正在连接")]),s._v(" "),n("li",[s._v("1：OPEN 表示连接成功，可以通信了")]),s._v(" "),n("li",[s._v("2：CLOSING 表示连接正在关闭")]),s._v(" "),n("li",[s._v("3：CLOSED 表示连接已关闭")])])]),s._v(" "),n("h3",{attrs:{id:"websocket-onopen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-onopen"}},[s._v("#")]),s._v(" webSocket.onopen")]),s._v(" "),n("p",[s._v("用于指定"),n("strong",[s._v("连接成功后")]),s._v("的回调函数")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onopen")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 多个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'open'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"websocket-onmessage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-onmessage"}},[s._v("#")]),s._v(" webSocket.onmessage")]),s._v(" "),n("p",[s._v("用于指定"),n("strong",[s._v("收到服务端消息后")]),s._v("的回调函数")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onmessage")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 多个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("注意，服务端数据可能是"),n("code",[s._v("文本")]),s._v("，也可能是二进制数据（"),n("code",[s._v("blob对象")]),s._v("或"),n("code",[s._v("Arraybuffer对象")]),s._v("）")]),s._v(" "),n("h3",{attrs:{id:"websocket-onclose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-onclose"}},[s._v("#")]),s._v(" webSocket.onclose")]),s._v(" "),n("p",[s._v("用于指定"),n("strong",[s._v("连接关闭后")]),s._v("的回调函数")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onclose")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 多个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'close'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"websocket-onerror"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-onerror"}},[s._v("#")]),s._v(" webSocket.onerror")]),s._v(" "),n("p",[s._v("用于指定"),n("strong",[s._v("报错时")]),s._v("的回调函数")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 单个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onerror")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 多个回调函数")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ev")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"常用方法-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用方法-2"}},[s._v("#")]),s._v(" 常用方法（2）")]),s._v(" "),n("h3",{attrs:{id:"websocket-send"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-send"}},[s._v("#")]),s._v(" webSocket.send()")]),s._v(" "),n("p",[s._v("用于向服务器发送数据")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送文本")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送Blob对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" file "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input[type=\"file\"]'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("files"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("file"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送ArrayBuffer对象")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" img "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" canvas_context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("getImageData")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("320")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" binary "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Uint8Array")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    binary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" img"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("binary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("h3",{attrs:{id:"websocket-close"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#websocket-close"}},[s._v("#")]),s._v(" webSocket.close()")]),s._v(" "),n("p",[s._v("用于关闭webSocket")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("ws"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"不稳定性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不稳定性"}},[s._v("#")]),s._v(" 不稳定性")]),s._v(" "),n("p",[n("code",[s._v("WebSocket")]),s._v("并不稳定，在使用一段时间后，可能会"),n("strong",[s._v("断开连接")]),s._v("。若需要确保"),n("strong",[s._v("客户端、服务端之间的TCP通道的连接")]),s._v("有没有断开，需要"),n("strong",[s._v("心跳检测 && 断开重连")]),s._v("。")]),s._v(" "),n("blockquote",[n("p",[s._v("因为有时候遇到网络断开时，可能并没有触发"),n("code",[s._v("onclose")]),s._v("事件（如在Chrome浏览器中，断网时就不会触发onclose事件）。")])]),s._v(" "),n("h2",{attrs:{id:"心跳检测"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#心跳检测"}},[s._v("#")]),s._v(" 心跳检测")]),s._v(" "),n("p",[n("code",[s._v("心跳检测")]),s._v("是每隔一段时间会向服务器发送一个数据包，"),n("strong",[s._v("告诉服务器自己还活着")]),s._v("。同时客户端也可以"),n("strong",[s._v("确认服务器是否处于正常工作")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"断开重连"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#断开重连"}},[s._v("#")]),s._v(" 断开重连")]),s._v(" "),n("p",[n("code",[s._v("断开重连")]),s._v("是通过一个变量来判断，本次断开原因是"),n("strong",[s._v("人为/异常")]),s._v("。若为后者，则尝试断开重连。")]),s._v(" "),n("h2",{attrs:{id:"实例代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实例代码"}},[s._v("#")]),s._v(" 实例代码")]),s._v(" "),n("p",[n("RouterLink",{attrs:{to:"/skill/web/websocket/DEMO.html"}},[s._v("WebsocketDemo")])],1),s._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/8648044.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("理解WebSocket心跳及重连机制"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);