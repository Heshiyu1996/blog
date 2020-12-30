(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{428:function(s,t,a){s.exports=a.p+"assets/img/TCP-3.a98fd5b5.png"},429:function(s,t,a){s.exports=a.p+"assets/img/TCP-4.0902969a.png"},587:function(s,t,a){"use strict";a.r(t);var e=a(29),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),e("blockquote",[e("p",[s._v("这里会搜集一些有关Web的零碎知识")])]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#其他"}},[s._v("其他")]),e("ul",[e("li",[e("a",{attrs:{href:"#渐进增强、优雅降级"}},[s._v("渐进增强、优雅降级")])]),e("li",[e("a",{attrs:{href:"#正向代理、反向代理"}},[s._v("正向代理、反向代理")])]),e("li",[e("a",{attrs:{href:"#tcp三次握手、四次挥手"}},[s._v("TCP三次握手、四次挥手")])]),e("li",[e("a",{attrs:{href:"#dns"}},[s._v("DNS")])]),e("li",[e("a",{attrs:{href:"#base64"}},[s._v("Base64")])]),e("li",[e("a",{attrs:{href:"#webassembly"}},[s._v("WebAssembly")])])])])])]),e("p"),s._v(" "),e("h2",{attrs:{id:"渐进增强、优雅降级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强、优雅降级"}},[s._v("#")]),s._v(" 渐进增强、优雅降级")]),s._v(" "),e("p",[s._v("渐进增强是指，针对"),e("code",[s._v("低版本浏览器")]),s._v("进行构建（先保证最基本的功能），然后再针对"),e("code",[s._v("高级浏览器")]),s._v("进行改进。")]),s._v(" "),e("p",[s._v("优雅降级是指，一开始就构建"),e("code",[s._v("完整的功能")]),s._v("，然后再针对"),e("code",[s._v("低版本浏览器")]),s._v("进行兼容。")]),s._v(" "),e("h2",{attrs:{id:"正向代理、反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正向代理、反向代理"}},[s._v("#")]),s._v(" 正向代理、反向代理")]),s._v(" "),e("h3",{attrs:{id:"正向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[s._v("#")]),s._v(" 正向代理")]),s._v(" "),e("p",[s._v("系统内部要"),e("strong",[s._v("访问外部网络")]),s._v("时，统一"),e("strong",[s._v("通过一个代理服务器把请求转发出去")]),s._v("。那在外部网络看起来这个请求就"),e("strong",[s._v("只是代理服务器发起的访问")]),s._v("。")]),s._v(" "),e("blockquote",[e("p",[s._v("此时代理服务器实现的就是"),e("strong",[s._v("正向代理")])])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在vue里的config/index.js中dev对象的proxyTable上设置，来解决开发时跨域问题")]),s._v("\ndev"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxyTable"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            target"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.5.2'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            changeOrigin"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),e("p",[s._v("当"),e("strong",[s._v("外部请求")]),s._v("进入内部系统时，代理服务器把该请求"),e("strong",[s._v("转发到系统中的某台指定的服务器")]),s._v("上。那在外部请求看起来和它交互的"),e("strong",[s._v("只有这个代理服务器")]),s._v("。")]),s._v(" "),e("blockquote",[e("p",[s._v("此时代理服务器实现的就是反向代理。")])]),s._v(" "),e("ul",[e("li",[s._v("浏览器对域名解析后，实际上得到的是 "),e("strong",[s._v("反向代理服务器的IP")]),s._v("，而不是直接的"),e("strong",[s._v("服务器IP")]),s._v("。（然后通过"),e("code",[s._v("Nginx")]),s._v("再把"),e("strong",[s._v("具体的http请求")]),s._v("转发到某台指定的服务器上。）")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[e("strong",[s._v("跨域原理")]),s._v("：通过把"),e("code",[s._v("本地的一个url前缀")]),s._v("映射到"),e("code",[s._v("要跨域访问的web服务器")]),s._v("上。")]),s._v(" "),e("ul",[e("li",[s._v("对于浏览器来说，访问的是同源服务器上的一个url；")]),s._v(" "),e("li",[s._v("对于Nginx来说，通过检测URL前缀，把HTTP请求转发到后面真实的物理服务器上")])])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 客户端 部分")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081.")]),s._v("max"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082.")]),s._v("max"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务端 部分")]),s._v("\nserver "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081.")]),s._v("max"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据这个字段进行匹配")]),s._v("\n\n    location "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//再根据这个字段进行转发")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082.")]),s._v("max"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n\n    location "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[e("RouterLink",{attrs:{to:"/skill/web/other/NginxDemo.html"}},[s._v("Nginx配置Demo")])],1),s._v(" "),e("h2",{attrs:{id:"tcp三次握手、四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手、四次挥手"}},[s._v("#")]),s._v(" TCP三次握手、四次挥手")]),s._v(" "),e("p",[s._v("三次握手：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("客户端")]),s._v("发送"),e("code",[s._v("SYN=1")]),s._v("给"),e("code",[s._v("服务端")])]),s._v(" "),e("li",[e("code",[s._v("服务端")]),s._v("收到"),e("code",[s._v("SYN=1")]),s._v("后，会给"),e("code",[s._v("客户端")]),s._v("发送"),e("code",[s._v("SYN=1、ACK=1")])]),s._v(" "),e("li",[e("code",[s._v("客户端")]),s._v("收到"),e("code",[s._v("SYN=1、ACK=1")]),s._v("后，会给"),e("code",[s._v("服务端")]),s._v("发送"),e("code",[s._v("ACK=1")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(428),alt:"alt"}})]),s._v(" "),e("p",[s._v("四次挥手：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("客户端")]),s._v("会发送"),e("code",[s._v("FIN=1")]),s._v("给"),e("code",[s._v("服务端")])]),s._v(" "),e("li",[e("code",[s._v("服务端")]),s._v("收到"),e("code",[s._v("FIN=1")]),s._v("后，会发送"),e("code",[s._v("ACK=1")]),s._v("给"),e("code",[s._v("客户端")])]),s._v(" "),e("li",[e("code",[s._v("服务端")]),s._v("再发送"),e("code",[s._v("FIN=1")]),s._v("给"),e("code",[s._v("客户端")])]),s._v(" "),e("li",[e("code",[s._v("客户端")]),s._v("收到"),e("code",[s._v("FIN=1")]),s._v("，发送"),e("code",[s._v("ACK=1")]),s._v("给"),e("code",[s._v("服务端")])])]),s._v(" "),e("p",[e("img",{attrs:{src:a(429),alt:"alt"}})]),s._v(" "),e("h2",{attrs:{id:"dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[s._v("#")]),s._v(" DNS")]),s._v(" "),e("p",[s._v("顺序：")]),s._v(" "),e("ul",[e("li",[s._v("1、本地host文件")]),s._v(" "),e("li",[s._v("2、本地DNS解析器")]),s._v(" "),e("li",[s._v("3、本地DNS服务器")]),s._v(" "),e("li",[s._v("4、根域名服务器")]),s._v(" "),e("li",[s._v("5、顶级域名服务器")]),s._v(" "),e("li",[s._v("6、权威域名服务器")])]),s._v(" "),e("h2",{attrs:{id:"base64"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[s._v("#")]),s._v(" Base64")]),s._v(" "),e("blockquote",[e("p",[s._v("最近听说对于存储图片有两种方式，一种是最常见的url，另一种是base64")])]),s._v(" "),e("p",[e("strong",[s._v("base64编码")]),s._v(" 可以将 一张图片数据 编码成 一串字符串，这个字符串可以替代图像地址。")]),s._v(" "),e("ul",[e("li",[s._v("每一张图片都有 "),e("strong",[s._v("固定的base64编码")]),s._v("，所以不用上传到服务器")])]),s._v(" "),e("h3",{attrs:{id:"意义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#意义"}},[s._v("#")]),s._v(" 意义")]),s._v(" "),e("p",[s._v("最大好处：减少https请求")]),s._v(" "),e("h3",{attrs:{id:"使用方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("data:image/png; base64, R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uLiwAAAP"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n// css同理 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"适用范围"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),e("p",[s._v("1、图片足够小")]),s._v(" "),e("p",[s._v("2、复用性高，且基本不会被更新")]),s._v(" "),e("p",[s._v("3、无法被制作成css sprites")]),s._v(" "),e("h3",{attrs:{id:"如何转为base64编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何转为base64编码"}},[s._v("#")]),s._v(" 如何转为base64编码？")]),s._v(" "),e("p",[s._v("1、在线地址：\nhttp://www.pjhome.net/web/html5/encodeDataUrl.htm")]),s._v(" "),e("p",[s._v("2、在chrome直接拖入一张图片，F12，Source，点击图片即可")]),s._v(" "),e("h2",{attrs:{id:"webassembly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webassembly"}},[s._v("#")]),s._v(" WebAssembly")]),s._v(" "),e("h3",{attrs:{id:"目前状况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目前状况"}},[s._v("#")]),s._v(" 目前状况")]),s._v(" "),e("p",[s._v("WebAssembly在2017年受到主流浏览器的支持，并发布了MVP版本（Minimum Viable Product，最简可行产品），单并非最终版本。")]),s._v(" "),e("h3",{attrs:{id:"mvp版本的特点-4个基本技能要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvp版本的特点-4个基本技能要求"}},[s._v("#")]),s._v(" MVP版本的特点（4个基本技能要求）")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("编译")]),s._v(" "),e("p",[s._v("能够将许多不同的语言编译成WebAssembly")])]),s._v(" "),e("li",[e("p",[s._v("快速执行")]),s._v(" "),e("p",[s._v("编译成WebAssembly后的应用能够快速执行")])]),s._v(" "),e("li",[e("p",[s._v("压缩")]),s._v(" "),e("p",[s._v("为了加速载入速度")])]),s._v(" "),e("li",[e("p",[s._v("线性内存分配")]),s._v(" "),e("p",[s._v("和JavaScript使用内存的方式有区别，它能够直接管理使用的内存")])])]),s._v(" "),e("h3",{attrs:{id:"未来webassembly的-新技能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#未来webassembly的-新技能"}},[s._v("#")]),s._v(" 未来WebAssembly的“新技能”")]),s._v(" "),e("p",[s._v("\b包括：多线程、隐式HTTP缓存、64位寻址、分层编译器等等；")]),s._v(" "),e("p",[s._v("一旦以上功能\b全部就位，WebAssembly就可以和JavaScript互操作了，包括JS和WebAssembly之间的快速调用、简单的数据交换、ES模块集成、工具链集成和向后兼容性。")]),s._v(" "),e("p",[s._v("目前WebAssembly还不支持高阶的语言功能，包括垃圾回收、异常处理、调试一级尾调用（Tail calls）。")])])}),[],!1,null,null,null);t.default=r.exports}}]);