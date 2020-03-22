(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{392:function(s,t,a){s.exports=a.p+"assets/img/TCP-3.a98fd5b5.png"},393:function(s,t,a){s.exports=a.p+"assets/img/TCP-4.0902969a.png"},474:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),n("blockquote",[n("p",[s._v("这里会搜集一些有关Web的零碎知识")])]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#其他"}},[s._v("其他")]),n("ul",[n("li",[n("a",{attrs:{href:"#渐进增强、优雅降级"}},[s._v("渐进增强、优雅降级")])]),n("li",[n("a",{attrs:{href:"#正向代理、反向代理"}},[s._v("正向代理、反向代理")])]),n("li",[n("a",{attrs:{href:"#tcp三次握手、四次挥手"}},[s._v("TCP三次握手、四次挥手")])]),n("li",[n("a",{attrs:{href:"#dns"}},[s._v("DNS")])]),n("li",[n("a",{attrs:{href:"#base64"}},[s._v("Base64")])])])])])]),n("p"),s._v(" "),n("h2",{attrs:{id:"渐进增强、优雅降级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强、优雅降级"}},[s._v("#")]),s._v(" 渐进增强、优雅降级")]),s._v(" "),n("p",[s._v("渐进增强是指，针对"),n("code",[s._v("低版本浏览器")]),s._v("进行构建（先保证最基本的功能），然后再针对"),n("code",[s._v("高级浏览器")]),s._v("进行改进。")]),s._v(" "),n("p",[s._v("优雅降级是指，一开始就构建"),n("code",[s._v("完整的功能")]),s._v("，然后再针对"),n("code",[s._v("低版本浏览器")]),s._v("进行兼容。")]),s._v(" "),n("h2",{attrs:{id:"正向代理、反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正向代理、反向代理"}},[s._v("#")]),s._v(" 正向代理、反向代理")]),s._v(" "),n("h3",{attrs:{id:"正向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正向代理"}},[s._v("#")]),s._v(" 正向代理")]),s._v(" "),n("p",[s._v("系统内部要"),n("strong",[s._v("访问外部网络")]),s._v("时，统一"),n("strong",[s._v("通过一个代理服务器把请求转发出去")]),s._v("。那在外部网络看起来这个请求就"),n("strong",[s._v("只是代理服务器发起的访问")]),s._v("。")]),s._v(" "),n("blockquote",[n("p",[s._v("此时代理服务器实现的就是"),n("strong",[s._v("正向代理")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在vue里的config/index.js中dev对象的proxyTable上设置，来解决开发时跨域问题")]),s._v("\ndev"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxyTable"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            target"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://192.168.5.2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            changeOrigin"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"反向代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[s._v("#")]),s._v(" 反向代理")]),s._v(" "),n("p",[s._v("当"),n("strong",[s._v("外部请求")]),s._v("进入内部系统时，代理服务器把该请求"),n("strong",[s._v("转发到系统中的某台指定的服务器")]),s._v("上。那在外部请求看起来和它交互的"),n("strong",[s._v("只有这个代理服务器")]),s._v("。")]),s._v(" "),n("blockquote",[n("p",[s._v("此时代理服务器实现的就是反向代理。")])]),s._v(" "),n("ul",[n("li",[s._v("浏览器对域名解析后，实际上得到的是 "),n("strong",[s._v("反向代理服务器的IP")]),s._v("，而不是直接的"),n("strong",[s._v("服务器IP")]),s._v("。（然后通过"),n("code",[s._v("Nginx")]),s._v("再把"),n("strong",[s._v("具体的http请求")]),s._v("转发到某台指定的服务器上。）")])]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[n("strong",[s._v("跨域原理")]),s._v("：通过把"),n("code",[s._v("本地的一个url前缀")]),s._v("映射到"),n("code",[s._v("要跨域访问的web服务器")]),s._v("上。")]),s._v(" "),n("ul",[n("li",[s._v("对于浏览器来说，访问的是同源服务器上的一个url；")]),s._v(" "),n("li",[s._v("对于Nginx来说，通过检测URL前缀，把HTTP请求转发到后面真实的物理服务器上")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 客户端 部分")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081.")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082.")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务端 部分")]),s._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081.")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 根据这个字段进行匹配")]),s._v("\n\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8081")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//再根据这个字段进行转发")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082.")]),s._v("max"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".72")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".49")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8082")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[n("RouterLink",{attrs:{to:"/skill/web/NginxDemo.html"}},[s._v("Nginx配置Demo")])],1),s._v(" "),n("h2",{attrs:{id:"tcp三次握手、四次挥手"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手、四次挥手"}},[s._v("#")]),s._v(" TCP三次握手、四次挥手")]),s._v(" "),n("p",[s._v("三次握手：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("客户端")]),s._v("发送"),n("code",[s._v("SYN=1")]),s._v("给"),n("code",[s._v("服务端")])]),s._v(" "),n("li",[n("code",[s._v("服务端")]),s._v("收到"),n("code",[s._v("SYN=1")]),s._v("后，会给"),n("code",[s._v("客户端")]),s._v("发送"),n("code",[s._v("SYN=1、ACK=1")])]),s._v(" "),n("li",[n("code",[s._v("客户端")]),s._v("收到"),n("code",[s._v("SYN=1、ACK=1")]),s._v("后，会给"),n("code",[s._v("服务端")]),s._v("发送"),n("code",[s._v("ACK=1")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(392),alt:"alt"}})]),s._v(" "),n("p",[s._v("四次挥手：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("客户端")]),s._v("会发送"),n("code",[s._v("FIN=1")]),s._v("给"),n("code",[s._v("服务端")])]),s._v(" "),n("li",[n("code",[s._v("服务端")]),s._v("收到"),n("code",[s._v("FIN=1")]),s._v("后，会发送"),n("code",[s._v("ACK=1")]),s._v("给"),n("code",[s._v("客户端")])]),s._v(" "),n("li",[n("code",[s._v("服务端")]),s._v("再发送"),n("code",[s._v("FIN=1")]),s._v("给"),n("code",[s._v("客户端")])]),s._v(" "),n("li",[n("code",[s._v("客户端")]),s._v("收到"),n("code",[s._v("FIN=1")]),s._v("，发送"),n("code",[s._v("ACK=1")]),s._v("给"),n("code",[s._v("服务端")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(393),alt:"alt"}})]),s._v(" "),n("h2",{attrs:{id:"dns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[s._v("#")]),s._v(" DNS")]),s._v(" "),n("p",[s._v("顺序：")]),s._v(" "),n("ul",[n("li",[s._v("1、本地host文件")]),s._v(" "),n("li",[s._v("2、本地DNS解析器")]),s._v(" "),n("li",[s._v("3、本地DNS服务器")]),s._v(" "),n("li",[s._v("4、根域名服务器")]),s._v(" "),n("li",[s._v("5、顶级域名服务器")]),s._v(" "),n("li",[s._v("6、权威域名服务器")])]),s._v(" "),n("h2",{attrs:{id:"base64"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[s._v("#")]),s._v(" Base64")]),s._v(" "),n("blockquote",[n("p",[s._v("最近听说对于存储图片有两种方式，一种是最常见的url，另一种是base64")])]),s._v(" "),n("p",[n("strong",[s._v("base64编码")]),s._v(" 可以将 一张图片数据 编码成 一串字符串，这个字符串可以替代图像地址。")]),s._v(" "),n("ul",[n("li",[s._v("每一张图片都有 "),n("strong",[s._v("固定的base64编码")]),s._v("，所以不用上传到服务器")])]),s._v(" "),n("h3",{attrs:{id:"意义"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#意义"}},[s._v("#")]),s._v(" 意义")]),s._v(" "),n("p",[s._v("最大好处：减少https请求")]),s._v(" "),n("h3",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("img")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("data:image/png; base64, R0lGODlhHAAmAKIHAKqqqsvLy0hISObm5vf394uLiwAAAP"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n// css同理 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"适用范围"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适用范围"}},[s._v("#")]),s._v(" 适用范围")]),s._v(" "),n("p",[s._v("1、图片足够小")]),s._v(" "),n("p",[s._v("2、复用性高，且基本不会被更新")]),s._v(" "),n("p",[s._v("3、无法被制作成css sprites")]),s._v(" "),n("h3",{attrs:{id:"如何转为base64编码？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何转为base64编码？"}},[s._v("#")]),s._v(" 如何转为base64编码？")]),s._v(" "),n("p",[s._v("1、在线地址：\nhttp://www.pjhome.net/web/html5/encodeDataUrl.htm")]),s._v(" "),n("p",[s._v("2、在chrome直接拖入一张图片，F12，Source，点击图片即可")])])}),[],!1,null,null,null);t.default=e.exports}}]);