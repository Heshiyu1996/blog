(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{576:function(s,a,t){s.exports=t.p+"assets/img/img-1.3961310e.png"},577:function(s,a,t){s.exports=t.p+"assets/img/img-2.86d414e9.png"},773:function(s,a,t){"use strict";t.r(a);var n=t(56),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"shell脚本-遍历目录批量修改文件名"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本-遍历目录批量修改文件名"}},[s._v("#")]),s._v(" [shell脚本] 遍历目录批量修改文件名")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#shell脚本-遍历目录批量修改文件名"}},[s._v("[shell脚本] 遍历目录批量修改文件名")]),n("ul",[n("li",[n("a",{attrs:{href:"#新建脚本"}},[s._v("新建脚本")])]),n("li",[n("a",{attrs:{href:"#调用脚本"}},[s._v("调用脚本")])]),n("li",[n("a",{attrs:{href:"#效果"}},[s._v("效果")])])])])])]),n("p"),s._v(" "),n("p",[s._v("在工作中，打算把项目的构建搬到线上服务器（NDP）自动进行。但由于构建服务器上的Node.js为Linux版本，会导致 "),n("strong",[s._v("原本在本地开发时使用非Linux版本的Node.js开发过程中不存在文件路径的大小写敏感问题")]),s._v(" 得以暴露。")]),s._v(" "),n("blockquote",[n("p",[s._v("即：在大小写敏感的服务器上对于命名为Index.jsx的组件，在给类似 "),n("code",[s._v("import Header from '@/components/header'")]),s._v(" 的导入语句自动拼接的 "),n("code",[s._v("/index.jsx")]),s._v(" 后无法找到。")])]),s._v(" "),n("p",[n("strong",[s._v("建议：一律使用 小写、短横线 来命名文件/文件夹。")])]),s._v(" "),n("p",[s._v("对于老项目中的 "),n("code",[s._v("Index.jsx")]),s._v(" 文件需进行修改时，可以使用以下 shell 脚本：")]),s._v(" "),n("h2",{attrs:{id:"新建脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#新建脚本"}},[s._v("#")]),s._v(" 新建脚本")]),s._v(" "),n("p",[s._v("在项目根目录下，新建如下脚本，可命名为："),n("strong",[s._v("change-name.sh")])]),s._v(" "),n("blockquote",[n("p",[s._v("也可直接下载："),n("a",{attrs:{href:"/change-name.sh"}},[s._v("change-name.sh")])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("declare")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件修改数")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("changeName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("new")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" $1"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/I/i/g'")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$new")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v("+1\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("travFolder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("x "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("flist")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" $1"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("f")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$flist")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t\t\t\ttravFolder "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v('"')]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Index.jsx"')]),s._v("x "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v('"')]),s._v("\n\t\t\t\t\tchangeName "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$f")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" 请在第二个参数传入要开始遍历的目录（推荐以 相对路径 的形式）\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\ntravFolder "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" - 批量修改了 "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$count")]),s._v(" 个文件 -\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br")])]),n("h2",{attrs:{id:"调用脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#调用脚本"}},[s._v("#")]),s._v(" 调用脚本")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" change-name.sh /path/to/source/dir\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /path/to/source/dir为开始遍历的目录地址，建议相对路径")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"效果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[s._v("#")]),s._v(" 效果")]),s._v(" "),n("p",[s._v("终端输出：\n"),n("img",{attrs:{src:t(576),alt:"alt"}})]),s._v(" "),n("p",[s._v("这些改名操作"),n("strong",[s._v("最终也能被Git识别")]),s._v("到：\n"),n("img",{attrs:{src:t(577),alt:"alt"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);