(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{510:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"选择排序-稳定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择排序-稳定"}},[t._v("#")]),t._v(" 选择排序（稳定）")]),t._v(" "),a("blockquote",[a("p",[t._v("时间复杂度：O(n²)")])]),t._v(" "),a("h2",{attrs:{id:"思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思想"}},[t._v("#")]),t._v(" 思想")]),t._v(" "),a("p",[t._v("经过 "),a("code",[t._v("第 i 次")]),t._v(" 后，能将新数组 "),a("code",[t._v("下标为 i 的元素")]),t._v(" "),a("strong",[t._v("选择")]),t._v(" 出来。（0 < i < len - 1）")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("selectSort")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意此处为 i < len - 1")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("h2",{attrs:{id:"大致步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大致步骤"}},[t._v("#")]),t._v(" 大致步骤")]),t._v(" "),a("p",[t._v("在待排序列中找到最小元素，存放到已排序序列的起始位置；然后再从剩余未排序元素中，继续寻找最小元素，放到已排序列的末尾。")]),t._v(" "),a("h2",{attrs:{id:"具体步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体步骤"}},[t._v("#")]),t._v(" 具体步骤")]),t._v(" "),a("ul",[a("li",[t._v("一共比较"),a("code",[t._v("length - 1")]),t._v("轮，当前"),a("code",[t._v("第i轮")]),t._v("（i代表的是第i个位置应该放什么数）")]),t._v(" "),a("li",[t._v("每轮会把"),a("code",[t._v("第i个")]),t._v("位置的数拷贝到min")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("第i个")]),t._v("位置后面的每个数都和这个min比较")]),t._v(" "),a("li",[t._v("如果比较后符合条件，交换位置（即把更小的数放到min，把min里的数放到这个数的位置）")]),t._v(" "),a("li",[t._v("该轮结束后，把min里的数赋值到"),a("code",[t._v("第i个位置上")])])]),t._v(" "),a("p",[t._v("例子：[1, 9, 7, 6]")]),t._v(" "),a("ul",[a("li",[t._v("一共进行"),a("code",[t._v("3")]),t._v("轮，当前"),a("code",[t._v("第1轮")])]),t._v(" "),a("li",[t._v("把"),a("code",[t._v("第一个")]),t._v("位置的数（1）拷贝到min")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("9")]),t._v("和"),a("code",[t._v("1")]),t._v("比较，不换")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("7")]),t._v("和"),a("code",[t._v("1")]),t._v("比较，不换")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("6")]),t._v("和"),a("code",[t._v("1")]),t._v("比较，不换，本轮结束，将min赋值到"),a("code",[t._v("第一个")]),t._v("位置上，数组为[1, 9, 7, 6]")]),t._v(" "),a("li",[t._v("把"),a("code",[t._v("第二个")]),t._v("位置的数（9）拷贝到min")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("7")]),t._v("和"),a("code",[t._v("9")]),t._v("比较，换。此时min=7，数组为[1, 9, 9, 6]")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("6")]),t._v("和"),a("code",[t._v("7")]),t._v("比较，换。此时min=6，数组为[1, 9, 9, 7]，本轮结束，将min赋值到"),a("code",[t._v("第二个")]),t._v("位置上，数组为[1, 6, 9, 7]")]),t._v(" "),a("li",[t._v("把"),a("code",[t._v("第三个")]),t._v("位置的数（9）拷贝到min")]),t._v(" "),a("li",[t._v("将"),a("code",[t._v("7")]),t._v("和"),a("code",[t._v("9")]),t._v("比较，换。此时min=7，数组为[1, 6, 9, 9]，本轮结束，将min赋值到"),a("code",[t._v("第三个")]),t._v("位置上，数组为[1, 6, 7, 9]")]),t._v(" "),a("li",[t._v("最终数组[1, 6, 7, 9]")])])])}),[],!1,null,null,null);s.default=e.exports}}]);