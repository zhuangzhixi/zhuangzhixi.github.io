(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{464:function(s,t,n){s.exports=n.p+"assets/img/image-20230219201642806.13080542.png"},554:function(s,t,n){"use strict";n.r(t);var a=n(14),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"一、node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、node-js"}},[s._v("#")]),s._v(" 一、Node.js")]),s._v(" "),t("p",[s._v("让js运行在nodejs里可以用作后端开发的。")]),s._v(" "),t("h3",{attrs:{id:"什么是node-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是node-js"}},[s._v("#")]),s._v(" 什么是node.js")]),s._v(" "),t("p",[s._v("Node.js是一个基于Chrome V8引擎的JavaScript运行环境。")]),s._v(" "),t("p",[s._v("把js放在浏览器里运行就是前端开发。")]),s._v(" "),t("p",[s._v("把js放在node.js里运行就是后端开发。")]),s._v(" "),t("p",[t("img",{attrs:{src:n(464),alt:"image-20230219201642806"}})]),s._v(" "),t("h3",{attrs:{id:"node-js-可以做什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-js-可以做什么"}},[s._v("#")]),s._v(" Node.js 可以做什么")]),s._v(" "),t("p",[s._v("Node.js作为一个JavaScript的运行环境，仅仅提供了基础的功能和API。然而，基于Node.js提供的这些基础能，很多强大\n的工具和框架如雨后春笋，层出不穷，所以学会了Node.js，可以让前端程序员胜任更多的工作和岗位：\n①基于Express框架（http://www.expressjs.com.cn/），可以快速构建Web应用\n②基于Electron框架（https://electronjs.org/），可以构建跨平台的桌面应用\n③ 基于restify框架（http://restify.com/），可以快速构建APl接口项目\n④读写和操作数据库、创建实用的命令行工具辅助前端开发、etc.…\n总之：Node.js是大前端时代的“大宝剑”，有了Node.js 这个超级buff的加持，前端程序员的行业竞争力会越来越强！")]),s._v(" "),t("p",[s._v("Node.js 的学习路径：\nJavaScript基础语法+Node.js内置API模块（fs、path、http等）+第三方API模块(express、mysql等）")]),s._v(" "),t("p",[s._v("在终端里输入node -v查看版本号")]),s._v(" "),t("p",[s._v("1.终端中的快捷键\n在Windows的powershell 或cmd终端中，我们可以通过如下快捷键，来提高终端的操作效率：\n①使用↑键，可以快速定位到上一次执行的命令\n② 使用tab 键， 能够快速补全路径\n③使用esc键，能够快速清空当前已输入的命令\n④输入cls命令，可以清空终端")]),s._v(" "),t("h3",{attrs:{id:"fs文件系统模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fs文件系统模块"}},[s._v("#")]),s._v(" fs文件系统模块")]),s._v(" "),t("p",[t("strong",[s._v("什么是fs文件系统模块")])]),s._v(" "),t("p",[s._v("fs模块是Node.js官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。\n例如：\n· fs.readFile0方法，用来读取指定文件中的内容\n· fs.writeFile0 方法，用来向指定的文件中写入内容\n如果要在JavaScript 代码中，使用fs模块来操作文件，则需要使用如下的方式先导入它：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const fs = require('fs')\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("读取指定文件中的内容")]),s._v("\n1.fs.readFile()的语法格式\n使用fs.readFile0方法，可以读取指定文件中的内容，语法格式如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("fs.readFile(path[,options],callback)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("参数解读：\n·参数1：必选参数，字符串，表示文件的路径。\n·参数2：可选参数，表示以什么编码格式来读取文件。一般默认指定utf8\n·参数3：必选参数，文件读取完成后，通过回调函数拿到读取成功和失败的结果。")]),s._v(" "),t("p",[s._v("参数解读：\n·参数1：必选参数，字符串，表示文件的路径。\n·参数2：可选参数，表示以什么编码格式来读取文件。\n·参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。")]),s._v(" "),t("p",[t("strong",[s._v("fs.readFile()的示例代码")]),s._v("\n以 utf8的编码格式，读取指定文件的内容，并打印err（失败的结果）和dataStr（成功）的值：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./files/11.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" dataStr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("err"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//null。因为读取成功了")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如果读取失败，则err 的值为错误对象，datastr 的值为 undefined")]),s._v("\n\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--------'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dataStr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[t("strong",[s._v("判断文件是否读取成功")]),s._v("\n可以判断 err 对象是否为null，从而知晓文件读取的结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const fs = require('fs')\nfs.readFile('./files/1.txt', 'utf8', function(err, result) {\n\tif(err){\n\t\treturn console.log('文件读取失败！'+err.message)\n\t}\n\tconsole.log（'文件读取成功，内容是：'+result）\n})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("看到P6过。")])])}),[],!1,null,null,null);t.default=e.exports}}]);