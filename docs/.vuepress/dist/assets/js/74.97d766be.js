(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{476:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx配置demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置demo"}},[s._v("#")]),s._v(" Nginx配置Demo")]),s._v(" "),t("h2",{attrs:{id:"_1、下载私钥：id-rsa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、下载私钥：id-rsa"}},[s._v("#")]),s._v(" 1、下载私钥：id_rsa")]),s._v(" "),t("p",[s._v("记录对应文件所在路径（第2步要用）。")]),s._v(" "),t("h2",{attrs:{id:"_2、配置ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置ssh"}},[s._v("#")]),s._v(" 2、配置ssh")]),s._v(" "),t("p",[s._v("命令行执行：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim ~/.ssh/config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加以下内容：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Host myName123\nHostName 10.170.1.1\nUser heshiyu\nPort 8888\nIdentityFile ~/.ssh/id_rsa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",[t("strong",[s._v("Host")]),s._v("可随意命名（第3步命令行执行时要用）")]),s._v(" "),t("p",[t("strong",[s._v("HostName")]),s._v("：服务器ip")]),s._v(" "),t("p",[t("strong",[s._v("User")]),s._v("：要连接的用户名")]),s._v(" "),t("p",[t("strong",[s._v("Port")]),s._v("：要连接的端口")]),s._v(" "),t("p",[t("strong",[s._v("IdentityFile")]),s._v("：第1步对应私钥文件的所在路径。")])]),s._v(" "),t("h2",{attrs:{id:"_3、执行ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、执行ssh"}},[s._v("#")]),s._v(" 3、执行ssh")]),s._v(" "),t("p",[s._v("命令行执行：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ssh myName123\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("连上对应跳板机。")]),s._v(" "),t("h2",{attrs:{id:"_4、打开appops"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、打开appops"}},[s._v("#")]),s._v(" 4、打开appops")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo -iu appops\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5、进入nginx配置目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、进入nginx配置目录"}},[s._v("#")]),s._v(" 5、进入Nginx配置目录")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cd /etc/nginx/sites-enabled/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入当前"),t("strong",[s._v("HostName")]),s._v("下，各个项目的Nginx配置目录")]),s._v(" "),t("p",[s._v("6、修改Nginx配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vim www.baidu.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("可进行www.baidu.com的Nginx反向代理配置。")]),s._v(" "),t("blockquote",[t("p",[s._v("可执行ls可查看所有域名下的Nginx配置")])])])}),[],!1,null,null,null);a.default=n.exports}}]);