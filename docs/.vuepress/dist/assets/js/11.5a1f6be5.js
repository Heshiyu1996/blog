(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(s,t,a){s.exports=a.p+"assets/img/pathresolve-1.e3c519b2.png"},374:function(s,t,a){s.exports=a.p+"assets/img/dirname-1.4be0e850.png"},375:function(s,t,a){s.exports=a.p+"assets/img/process-1.c4fa49d8.png"},376:function(s,t,a){s.exports=a.p+"assets/img/process-2.e9e12eb4.png"},377:function(s,t,a){s.exports=a.p+"assets/img/process-3.8ee85830.png"},418:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),n("p",[n("code",[s._v("webpack")]),s._v("是模块打包的机制，它是通过"),n("code",[s._v("loader")]),s._v("、"),n("code",[s._v("plugins")]),s._v("对资源进行处理，最后打包成浏览器成识别的js等文件。")]),s._v(" "),n("p",[s._v("原理：")]),s._v(" "),n("ul",[n("li",[s._v("识别入口文件")]),s._v(" "),n("li",[s._v("分析模块依赖")]),s._v(" "),n("li",[s._v("解析模块（通过不同"),n("code",[s._v("Loader")]),s._v("）")]),s._v(" "),n("li",[s._v("编译模块，生成抽象语法树"),n("code",[s._v("AST")])]),s._v(" "),n("li",[s._v("循环遍历"),n("code",[s._v("AST")])]),s._v(" "),n("li",[s._v("打包成"),n("code",[s._v("bundle.js")])])]),s._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),n("ul",[n("li",[s._v("./node_modules/.bin/webpack "),n("code",[s._v("input.js")]),s._v(" "),n("code",[s._v("output.js")]),s._v(" "),n("ul",[n("li",[s._v("不同环境下全局安装的webpack版本可能不符合这个项目，所以还是用局部依赖")])])]),s._v(" "),n("li",[s._v("从入口文件"),n("code",[s._v("input.js")]),s._v("开始，找出"),n("code",[s._v("所有依赖")]),s._v("的文件，然后用对应的"),n("code",[s._v("loaders")]),s._v("去处理它们")]),s._v(" "),n("li",[s._v("最后打包成为一个浏览器可识别的js文件"),n("code",[s._v("output.js")])])]),s._v(" "),n("h2",{attrs:{id:"bundle-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bundle-js"}},[s._v("#")]),s._v(" bundle.js")]),s._v(" "),n("p",[n("code",[s._v("bundle.js")]),s._v("实际上是一个"),n("code",[s._v("立即执行的匿名函数")]),s._v("。")]),s._v(" "),n("ul",[n("li",[s._v("函数的参数是一个数组，数组中的每一项都是一个"),n("code",[s._v("function")])]),s._v(" "),n("li",[s._v("每个"),n("code",[s._v("function")]),s._v("就对应每个"),n("code",[s._v("模块")]),s._v("的内容，会按照"),n("code",[s._v("require")]),s._v("的顺序排列，")]),s._v(" "),n("li",[s._v("每个模块都有一个唯一的id（从0递增）")])]),s._v(" "),n("p",[n("a",{attrs:{href:".//bundle.js"}},[s._v("查看bundle.js")])]),s._v(" "),n("h2",{attrs:{id:"loader"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[s._v("#")]),s._v(" Loader")]),s._v(" "),n("p",[n("code",[s._v("Loader")]),s._v("是对加载的文件进行处理。")]),s._v(" "),n("p",[s._v("本质上是一个函数，输入参数是一个"),n("code",[s._v("字符串")]),s._v("，输出参数也是一个"),n("code",[s._v("字符串")]),s._v("。（但是输出参数会被当成是JS代码，随后会解析成"),n("code",[s._v("抽象语法树AST")]),s._v("）")]),s._v(" "),n("h2",{attrs:{id:"plugins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[s._v("#")]),s._v(" Plugins")]),s._v(" "),n("p",[n("code",[s._v("Plugins")]),s._v("是用来扩展webpack功能的，会在整个构建过程中生效，执行相关的任务。")]),s._v(" "),n("p",[s._v("和"),n("code",[s._v("Loader")]),s._v("的区别：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Loader")]),s._v("是在打包构建过程中，用来处理源文件的（JSX、SCSS...），一次处理一个；")]),s._v(" "),n("li",[n("code",[s._v("Plugins")]),s._v("并不是直接操作单个文件，而是会"),n("code",[s._v("对整个构建过程都起作用")])])]),s._v(" "),n("h2",{attrs:{id:"gulp与webpack的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#gulp与webpack的区别"}},[s._v("#")]),s._v(" gulp与webpack的区别")]),s._v(" "),n("p",[n("code",[s._v("gulp")]),s._v("强调的是前端开发流程。")]),s._v(" "),n("p",[s._v("用法：通过定义一系列的task，再定义task处理的事物、顺序，最后让gulp执行task，从而构建前端项目。")]),s._v(" "),n("p",[s._v("4个常用的方法：")]),s._v(" "),n("ul",[n("li",[s._v("src（）：获取流")]),s._v(" "),n("li",[s._v("dest（）：写文件")]),s._v(" "),n("li",[s._v("task（）：定义任务")]),s._v(" "),n("li",[s._v("watch（）：用来监听事件")])]),s._v(" "),n("p",[s._v("IE8下最好用"),n("code",[s._v("gulp")]),s._v("，IE9用"),n("code",[s._v("webpack")])]),s._v(" "),n("h2",{attrs:{id:"path-resolve-dirname-src-和path-join"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve-dirname-src-和path-join"}},[s._v("#")]),s._v(" path.resolve(__dirname, './src)和path.join()")]),s._v(" "),n("p",[s._v("有两个知识点:")]),s._v(" "),n("ul",[n("li",[s._v("path.resolve()")]),s._v(" "),n("li",[s._v("__dirname")])]),s._v(" "),n("h3",{attrs:{id:"path-resolve"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#path-resolve"}},[s._v("#")]),s._v(" path.resolve()")]),s._v(" "),n("blockquote",[n("p",[s._v("作用：将路径片段解析成绝对路径；")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(373),alt:"alt"}})]),s._v(" "),n("p",[s._v("参数："),n("code",[s._v("String")]),s._v("（逗号分割）")]),s._v(" "),n("p",[s._v("返回值："),n("code",[s._v("String")]),s._v("（绝对路径）")]),s._v(" "),n("p",[s._v("使用说明：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("从右向左")]),s._v("解析，"),n("code",[s._v("一旦遇到绝对路径，就不继续")]),s._v(" "),n("ul",[n("li",[s._v("path.resolve('/foo', '/bar', 'baz') => '/bar/baz'")])])])]),s._v(" "),n("h3",{attrs:{id:"dirname"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dirname"}},[s._v("#")]),s._v(" __dirname")]),s._v(" "),n("blockquote",[n("p",[s._v("指的是当前文件所在目录的路径")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(374),alt:"alt"}})]),s._v(" "),n("p",[s._v("如图，"),n("code",[s._v("__dirname")]),s._v("的值为"),n("code",[s._v("C:\\Users\\GaoKai\\Desktop\\test")])]),s._v(" "),n("p",[s._v("以上两个可以解决"),n("code",[s._v("“虽然各个文件所在目录不同，但可以访问某个指定目录下的文件更方便”")]),s._v("（可以不使用"),n("code",[s._v("../../")]),s._v("），如下例子：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改前：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../../util/foo'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 修改后：")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" foo "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'util/foo'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\nresolve"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    extensions"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    alias"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 快捷访问入口")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'util'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/util'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"path-join"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#path-join"}},[s._v("#")]),s._v(" path.join()")]),s._v(" "),n("p",[s._v("参数："),n("code",[s._v("String")]),s._v("（逗号分割）")]),s._v(" "),n("p",[s._v("返回值："),n("code",[s._v("String")])]),s._v(" "),n("p",[s._v("使用说明:")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("从左到右")]),s._v("解析，将"),n("code",[s._v("所有路径片段都")]),s._v("拼接起来")]),s._v(" "),n("li",[s._v("每个片段之间用"),n("code",[s._v("/")]),s._v("链接（片段之间最多只能存在1个"),n("code",[s._v("/")]),s._v("）")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a/b/c'")]),s._v("\npath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a/b/c'")]),s._v("\n\npath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/a/b/c'")]),s._v("\npath"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/b'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/c'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/a/b/c'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"process-env-node-env"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#process-env-node-env"}},[s._v("#")]),s._v(" process.env.NODE_ENV")]),s._v(" "),n("p",[s._v("在node环境，全局变量"),n("code",[s._v("process")]),s._v("表示"),n("strong",[s._v("当前node进程")]),s._v("。其中"),n("code",[s._v("process.env")]),s._v("表示"),n("strong",[s._v("当前系统环境的信息。")])]),s._v(" "),n("blockquote",[n("p",[s._v("实际上，process.env里并不存在NODE_ENV这个变量，是用户自定义的。")])]),s._v(" "),n("p",[s._v("在node环境下，"),n("code",[s._v("console.log(process)")]),s._v("会得到：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(375),alt:"alt"}})]),s._v(" "),n("p",[s._v("在浏览器环境下，"),n("code",[s._v("console.log(process)")]),s._v("会得到：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(376),alt:"alt"}})]),s._v(" "),n("h3",{attrs:{id:"设置node环境下的process-env-node-env"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置node环境下的process-env-node-env"}},[s._v("#")]),s._v(" 设置node环境下的process.env.NODE_ENV")]),s._v(" "),n("p",[s._v("通过"),n("strong",[s._v("cross-env")]),s._v("来配置环境变量（支持跨平台）")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"start"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=development webpack-dev-server --open --config config/webpack.config.dev.js"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cross-env NODE_ENV=production webpack --config config/webpack.config.prod.js"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("这样，在node环境下，"),n("code",[s._v("process.env.NODE_ENV")]),s._v("就有值了。")]),s._v(" "),n("h3",{attrs:{id:"设置浏览器环境下的process-env-node-env"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设置浏览器环境下的process-env-node-env"}},[s._v("#")]),s._v(" 设置浏览器环境下的process.env.NODE_ENV")]),s._v(" "),n("p",[s._v("平时我们会"),n("strong",[s._v("在项目的运行过程中")]),s._v("去判断当前环境，比如在"),n("code",[s._v("@/axios/config.js")]),s._v("里配置了环境变量：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" isDev "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这里的"),n("code",[s._v("process.env.NODE_ENV")]),s._v("指的是"),n("strong",[s._v("浏览器环境下的环境变量")]),s._v("。")]),s._v(" "),n("blockquote",[n("p",[s._v("和node环境一样，默认是没有NODE_ENV这个变量的。")])]),s._v(" "),n("p",[s._v("通过"),n("strong",[s._v("DefinePlugin")]),s._v("来配置环境变量")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.base.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DefinePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'process.env.NODE_ENV'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JSON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("stringify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("env"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NODE_ENV")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这样，在浏览器环境下，"),n("code",[s._v("process.env.NODE_ENV")]),s._v("就有值了。")]),s._v(" "),n("h3",{attrs:{id:"webpack的配置模式mode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack的配置模式mode"}},[s._v("#")]),s._v(" webpack的配置模式mode")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.dev.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或'production'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("根据官网描述，配置"),n("code",[s._v("mode")]),s._v("值会"),n("strong",[s._v("自动开启某些优化配置")]),s._v("（笔者并未达到"),n("strong",[s._v("DefinePlugin")]),s._v("效果）")]),s._v(" "),n("p",[n("img",{attrs:{src:a(377),alt:"alt"}})]),s._v(" "),n("h3",{attrs:{id:"链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[s._v("#")]),s._v(" 链接")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.webpackjs.com/concepts/mode/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack的配置模式mode"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/tugenhua0707/p/9780621.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("理解webpack之process.env.NODE_ENV详解(十八)"),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"webpack中运用externals"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack中运用externals"}},[s._v("#")]),s._v(" webpack中运用externals")]),s._v(" "),n("p",[s._v("一些类似包体积比较大的包（如：lodash），可以通过CDN的形式在"),n("code",[s._v("index.html")]),s._v("引入后，再通过"),n("code",[s._v("webpack.config.js")]),s._v("里加一个"),n("code",[s._v("externals")]),s._v("配置。")]),s._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- index.html --\x3e")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    externals"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        lodash"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);