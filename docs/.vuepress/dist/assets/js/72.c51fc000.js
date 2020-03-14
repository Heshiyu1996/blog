(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{473:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"跨域资源共享（cors）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域资源共享（cors）"}},[s._v("#")]),s._v(" 跨域资源共享（CORS）")]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("CORS")]),s._v("是W3C标准，叫“跨域资源共享”。\n需要"),a("code",[s._v("浏览器")]),s._v("+"),a("code",[s._v("服务端")]),s._v("同时支持（IE10+），主要是在服务端增加一个 "),a("strong",[s._v("过滤拦截器")]),s._v("。")]),s._v(" "),a("p",[s._v("一共2类CORS请求："),a("code",[s._v("简单请求")]),s._v("、"),a("code",[s._v("非简单请求")])])]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#跨域资源共享（cors）"}},[s._v("跨域资源共享（CORS）")]),a("ul",[a("li",[a("a",{attrs:{href:"#简单请求"}},[s._v("简单请求")])]),a("li",[a("a",{attrs:{href:"#非简单请求"}},[s._v("非简单请求")])]),a("li",[a("a",{attrs:{href:"#解决跨域的一些方法"}},[s._v("解决跨域的一些方法")])]),a("li",[a("a",{attrs:{href:"#为什么form表单可以跨域"}},[s._v("为什么form表单可以跨域")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[s._v("#")]),s._v(" 简单请求")]),s._v(" "),a("p",[s._v("同时满足以下两种条件：")]),s._v(" "),a("p",[s._v("条件一：请求方法："),a("code",[s._v("HEAD")]),s._v("、"),a("code",[s._v("GET")]),s._v("、"),a("code",[s._v("POST")])]),s._v(" "),a("p",[s._v("条件二：HTTP头部信息（不能多于以下字段）")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Accept")])]),s._v(" "),a("li",[a("code",[s._v("Accept-Language")])]),s._v(" "),a("li",[a("code",[s._v("Content-Language")])]),s._v(" "),a("li",[a("code",[s._v("Last-Event-ID")])]),s._v(" "),a("li",[a("code",[s._v("Content-Type")]),s._v(" "),a("ul",[a("li",[s._v("application/x-www-form-urlencoded")]),s._v(" "),a("li",[s._v("multipart/form-data")]),s._v(" "),a("li",[s._v("text/plain")])])])]),s._v(" "),a("p",[a("strong",[s._v("简单请求的HTTP头部")]),s._v("会自动添加一个"),a("code",[s._v("Origin")]),s._v("字段（表明请求来自哪个源）。")]),s._v(" "),a("p",[s._v("若"),a("code",[s._v("Origin")]),s._v("指定的源：")]),s._v(" "),a("ul",[a("li",[s._v("在许可范围\n"),a("ul",[a("li",[s._v("响应头信息"),a("strong",[s._v("会有")]),a("code",[s._v("Access-Control-Allow-Origin")]),s._v("（其值要么是"),a("code",[s._v("Origin")]),s._v("的值，要么是"),a("code",[s._v("*")]),s._v("）")])])]),s._v(" "),a("li",[s._v("不在许可范围\n"),a("ul",[a("li",[s._v("响应头信息"),a("strong",[s._v("没有")]),a("code",[s._v("Access-Control-Allow-Origin")]),s._v("（能被"),a("code",[s._v("XMLHttpRequest")]),s._v("的"),a("code",[s._v("onerror")]),s._v("捕获）")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("有关Cookie（前提：源在许可范围内）")]),s._v(" "),a("ul",[a("li",[s._v("响应头信息会有"),a("code",[s._v("Access-Control-Allow-Credentials")]),s._v("（"),a("code",[s._v("true")]),s._v("：请求可以带Cookie；"),a("code",[s._v("false")]),s._v("：相反）")]),s._v(" "),a("li",[s._v("响应头信息的"),a("code",[s._v("Access-Control-Allow-Origin")]),s._v("不能设为"),a("code",[s._v("*")]),s._v("，必须指定明确")]),s._v(" "),a("li",[s._v("浏览器也要设置"),a("code",[s._v("xhr.withCredentials = true")]),s._v("才可以发Cookie，且只有用"),a("code",[s._v("服务器域名")]),s._v("设置的Cookie才会上传（其他域名的Cookie不会上传）")])])]),s._v(" "),a("h2",{attrs:{id:"非简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非简单请求"}},[s._v("#")]),s._v(" 非简单请求")]),s._v(" "),a("p",[a("code",[s._v("非简单请求")]),s._v("是指请求方法："),a("code",[s._v("PUT")]),s._v("、"),a("code",[s._v("DELETE")]),s._v(" 或者 Content-Type："),a("code",[s._v("application/json")]),s._v("的请求，它会先发送一个"),a("code",[s._v("预检请求")]),s._v("（"),a("code",[s._v("OPTIONS")]),s._v("）。")]),s._v(" "),a("p",[a("code",[s._v("预检请求")]),s._v("的HTTP头部会自动添加一个"),a("code",[s._v("Origin")]),s._v("字段（表明请求来自哪个源），以及以下两个特殊字段：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Access-Control-Request-Method")]),s._v(" "),a("ul",[a("li",[s._v("列出"),a("strong",[s._v("接下来的CORS请求")]),s._v("会用到哪些方法")])])]),s._v(" "),a("li",[a("code",[s._v("Access-Control-Request-Headers")]),s._v(" "),a("ul",[a("li",[s._v("指定"),a("strong",[s._v("接下来的CORS请求")]),s._v("会额外发送哪些自定义头部")])])])]),s._v(" "),a("p",[s._v("服务器收到"),a("code",[s._v("预检请求")]),s._v("后，")]),s._v(" "),a("ul",[a("li",[s._v("允许跨域\n"),a("ul",[a("li",[a("code",[s._v("Access-Control-Allow-Origin")]),s._v(" "),a("ul",[a("li",[s._v("表示允许访问的源（其值要么是"),a("code",[s._v("Origin")]),s._v("的值，要么是"),a("code",[s._v("*")]),s._v("）")])])]),s._v(" "),a("li",[a("code",[s._v("Access-Control-Allow-Methods")]),s._v(": GET, POST, PUT\n"),a("ul",[a("li",[s._v("表示允许的方法")])])]),s._v(" "),a("li",[a("code",[s._v("Access-Control-Allow-Headers")]),s._v(" "),a("ul",[a("li",[s._v("表示允许访问的头部属性")])])])])]),s._v(" "),a("li",[s._v("不允许跨域\n"),a("ul",[a("li",[s._v("响应头信息没有任何CORS相关头信息字段(能被"),a("code",[s._v("XMLHttpRequest")]),s._v("的"),a("code",[s._v("onerror")]),s._v("捕获)")])])])]),s._v(" "),a("p",[s._v("注意：只要通过了“预检请求”，以后每次正常的CORS请求，都会跟"),a("code",[s._v("简单请求")]),s._v("一样了：")]),s._v(" "),a("ul",[a("li",[s._v("对于请求头部，会有一个"),a("code",[s._v("Origin")]),s._v("字段")]),s._v(" "),a("li",[s._v("对于响应头部，也会有"),a("code",[s._v("Access-Control-Allow-Origin")])])]),s._v(" "),a("h2",{attrs:{id:"解决跨域的一些方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域的一些方法"}},[s._v("#")]),s._v(" 解决跨域的一些方法")]),s._v(" "),a("ul",[a("li",[s._v("JSONP")]),s._v(" "),a("li",[s._v("CORS")]),s._v(" "),a("li",[s._v("window.postMessage")]),s._v(" "),a("li",[s._v("window.name")]),s._v(" "),a("li",[s._v("Nginx")])]),s._v(" "),a("h3",{attrs:{id:"jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp"}},[s._v("#")]),s._v(" JSONP")]),s._v(" "),a("p",[a("code",[s._v("JSONP")]),s._v("的特点：")]),s._v(" "),a("ul",[a("li",[s._v("只支持"),a("code",[s._v("GET")]),s._v("，不支持"),a("code",[s._v("POST")]),s._v("（相当于下载一个js文件，相当于浏览器输入一个url一样）")]),s._v(" "),a("li",[s._v("服务端返回的数据不能是标准的json格式，而是通过callback包裹（需要客户端和服务端定制开发）")]),s._v(" "),a("li",[s._v("安全问题")]),s._v(" "),a("li",[s._v("要确定jsonp请求是否失败并不容易")])]),s._v(" "),a("p",[a("code",[s._v("JSONP")]),s._v("使用步骤：")]),s._v(" "),a("p",[s._v("1、注册一个callback：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("myHandler")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'获得从服务端的数据：'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("2、发送请求给服务器")]),s._v(" "),a("p",[s._v("客户端（js）写法一，利用script标签的src属性跨域：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=flightHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("客户端（jquery）写法二，利用jquery的ajax：")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    async"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'get'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'jsonp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1、指定服务器返回的数据类型")]),s._v("\n    jsonpCallback"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myHandler'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2、指定回调函数名称，要与服务器响应包含的callback名称相同")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("3、服务端（flightResult.aspx）返回以下代码：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("myHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"detail"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hehe"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("以上代码会用于调用"),a("code",[s._v("myHandler")]),s._v("这个回调函数。")]),s._v(" "),a("p",[a("code",[s._v("CORS")]),s._v("的特点：")]),s._v(" "),a("ul",[a("li",[s._v("支持所有请求类型")]),s._v(" "),a("li",[s._v("服务端只需将处理后的数据直接返回，不需特殊处理")])]),s._v(" "),a("h3",{attrs:{id:"cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[s._v("#")]),s._v(" CORS")]),s._v(" "),a("p",[s._v("见上面一个知识点")]),s._v(" "),a("h3",{attrs:{id:"window-postmessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-postmessage"}},[s._v("#")]),s._v(" window.postMessage")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 子iframe")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("postMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fullScreen'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 父窗口")]),s._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("onmessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fullScreen'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"window-name（搭配iframe）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-name（搭配iframe）"}},[s._v("#")]),s._v(" window.name（搭配iframe）")]),s._v(" "),a("p",[s._v("因为在一个窗口的生命周期内，载入的所有页面共享一个window.name。")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("iframe")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("http://www.baidu.com/data.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("onload")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("getData()"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("/>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" iframe "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'iframe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onload")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contentWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 获取data.html里的数据")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        iframe"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b.html"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转为和a同源的b.html")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),a("p",[s._v("利用Nginx通过反向代理来转发请求，来满足浏览器的同源策略，实现跨域。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("p",[s._v("前端"),a("code",[s._v("http://localhost:8094")]),s._v("，想请求"),a("code",[s._v("http://localhost:1894/api/basic/login")]),s._v("这个接口")]),s._v(" "),a("p",[s._v("1、配置Nginx.conf，里面的定位规则：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8094")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  #监听端口\n    server_name localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        root html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" #文件根目录\n        index index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" #默认起始页\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    #新增以下location定位规则\n    location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rewrite "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("rest"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" #只取标志位$"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("，作为重定向地址\n        proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1894")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" #表明该请求要代理到的主机\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n # server：代表启动的一个服务\n # location：代表定位规则\n    # rewrite：结合正则表达式、标志位，对url进行重写、重定向（语法："),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("rewrite regex replacement [flag]")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("）\n        # 例如："),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("rewrite ^.+rest/?(.*)$ /$1 break")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("，\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("2、前端访问时，url填写"),a("code",[s._v("/rest/api/basic/login")]),s._v("即可。")]),s._v(" "),a("h2",{attrs:{id:"为什么form表单可以跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么form表单可以跨域"}},[s._v("#")]),s._v(" 为什么form表单可以跨域")]),s._v(" "),a("p",[s._v("因为原页面用 form 提交到另一个域名之后，原页面的脚本无法获取新页面中的内容。")]),s._v(" "),a("p",[s._v("所以浏览器认为这是安全的。")]),s._v(" "),a("p",[s._v("而 AJAX 是可以读取响应内容的，因此浏览器不能允许你这样做。")])])}),[],!1,null,null,null);t.default=e.exports}}]);