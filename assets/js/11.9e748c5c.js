(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{417:function(s,e,a){s.exports=a.p+"assets/img/image-20221117170344144.31b17731.png"},418:function(s,e,a){s.exports=a.p+"assets/img/image-20221117170534972.8ac4301d.png"},419:function(s,e,a){s.exports=a.p+"assets/img/image-20221117170555620.e0effbc2.png"},420:function(s,e,a){s.exports=a.p+"assets/img/image-20221117170712595.082a8c50.png"},421:function(s,e,a){s.exports=a.p+"assets/img/image-20221117170944611.221bfbf8.png"},422:function(s,e,a){s.exports=a.p+"assets/img/image-20221117171216276.803f653c.png"},423:function(s,e,a){s.exports=a.p+"assets/img/image-20221117171557605.4af60327.png"},424:function(s,e,a){s.exports=a.p+"assets/img/image-20221117171830844.fea1c526.png"},425:function(s,e,a){s.exports=a.p+"assets/img/image-20221117171926171.d88012d4.png"},426:function(s,e,a){s.exports=a.p+"assets/img/image-20221117171958116.c91c75f3.png"},427:function(s,e,a){s.exports=a.p+"assets/img/image-20221117172447604.ae25c059.png"},543:function(s,e,a){"use strict";a.r(e);var t=a(14),v=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"移动web开发之rem适配布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动web开发之rem适配布局"}},[s._v("#")]),s._v(" 移动WEB开发之rem适配布局")]),s._v(" "),e("p",[s._v("思考，方案 ？")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("页面布局文字能否随着屏幕大小变化而变化？")])]),s._v(" "),e("li",[e("p",[s._v("流式布局和flex布局主要针对于宽度布局，那高度如何设置？")])]),s._v(" "),e("li",[e("p",[s._v("怎么样让屏幕发生变化的时候元素高度和宽度等比例缩放？目")])])]),s._v(" "),e("h2",{attrs:{id:"rem-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-基础"}},[s._v("#")]),s._v(" rem 基础")]),s._v(" "),e("h3",{attrs:{id:"rem-单位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-单位"}},[s._v("#")]),s._v(" rem 单位")]),s._v(" "),e("p",[s._v("rem (root em)是一个相对单位，类似于em，em是"),e("strong",[s._v("父元素字体大小")]),s._v("。")]),s._v(" "),e("p",[s._v("不同的是rem的基准是相对于"),e("strong",[s._v("html元素的字体大小")]),s._v("。")]),s._v(" "),e("p",[s._v("比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px。")]),s._v(" "),e("p",[s._v("rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，可以很好来控制整个页面的元素大小。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/ 根html 为 12px /\nhtml {\n font-size: 12px;\n}\n/ 此时 div 的字体大小就是 24px / \ndiv {\n font-size: 2rem;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"媒体查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[s._v("#")]),s._v(" 媒体查询")]),s._v(" "),e("p",[s._v("媒体查询（Media Query）是CSS3新语法。")]),s._v(" "),e("ul",[e("li",[s._v("使用 @media 查询，可以针对不同的媒体类型定义不同的样式")]),s._v(" "),e("li",[s._v("@media 可以针对不同的屏幕尺寸设置不同的样式")]),s._v(" "),e("li",[s._v("当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面")]),s._v(" "),e("li",[s._v("目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询")])]),s._v(" "),e("h3",{attrs:{id:"语法规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法规范"}},[s._v("#")]),s._v(" 语法规范")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@media mediatype and|not|only (media feature) {\n CSS-Code;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("用 @media 开头 注意@符号")]),s._v(" "),e("li",[s._v("mediatype 媒体类型")]),s._v(" "),e("li",[s._v("关键字 and not only")]),s._v(" "),e("li",[s._v("media feature 媒体特性 必须有小括号包含")])]),s._v(" "),e("p",[e("strong",[s._v("mediatype 查询类型")])]),s._v(" "),e("p",[s._v("将不同的终端设备划分成不同的类型，称为媒体类型")]),s._v(" "),e("p",[e("img",{attrs:{src:a(417),alt:"image-20221117170344144"}})]),s._v(" "),e("p",[e("strong",[s._v("关键字")])]),s._v(" "),e("p",[s._v("关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。")]),s._v(" "),e("ul",[e("li",[s._v("and：可以将多个媒体特性连接到一起，相当于“且”的意思。")]),s._v(" "),e("li",[s._v("not：排除某个媒体类型，相当于“非”的意思，可以省略。")]),s._v(" "),e("li",[s._v("only：指定某个特定的媒体类型，可以省略。")])]),s._v(" "),e("p",[e("strong",[s._v("媒体特性")])]),s._v(" "),e("p",[s._v("每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。注意他们要加小括号包含")]),s._v(" "),e("p",[e("img",{attrs:{src:a(418),alt:"image-20221117170534972"}})]),s._v(" "),e("p",[e("strong",[s._v("案例：根据页面宽度改变背景变色")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(419),alt:"image-20221117170555620"}})]),s._v(" "),e("p",[s._v("案例：实现思路")]),s._v(" "),e("p",[s._v("① 按照从大到小的或者从小到大的思路")]),s._v(" "),e("p",[s._v("② 注意我们有最大值 max-width 和最小值 min-width都是包含等于的")]),s._v(" "),e("p",[s._v("③ 当屏幕小于540像素， 背景颜色变为蓝色 （x <= 539）")]),s._v(" "),e("p",[s._v("④ 当屏幕大于等于540像素 并且小于等于 969像素的时候 背景颜色为 绿色 (540=<x <= 969）")]),s._v(" "),e("p",[s._v("⑤ 当屏幕大于等于 970像素的时候，背景颜色为红色 （ x >= 970）")]),s._v(" "),e("p",[s._v("注意： 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写,但是我们最喜欢的还是从小到大来写，这样代码更简洁")]),s._v(" "),e("p",[s._v("要注意不写个区间的话可能会被上一个覆盖掉。有多少个特性就写多少个and。")]),s._v(" "),e("p",[e("strong",[s._v("案例：媒体查询从小到大优势代码分析")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(420),alt:"image-20221117170712595"}})]),s._v(" "),e("h3",{attrs:{id:"媒体查询-rem实现元素动态大小变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询-rem实现元素动态大小变化"}},[s._v("#")]),s._v(" 媒体查询+rem实现元素动态大小变化")]),s._v(" "),e("p",[s._v("rem单位是跟着html来走的，有了rem页面元素可以设置不同大小尺寸")]),s._v(" "),e("p",[s._v("媒体查询可以根据不同设备宽度来修改样式")]),s._v(" "),e("p",[s._v("媒体查询+rem 就可以实现不同设备宽度，实现页面元素大小的动态变化")]),s._v(" "),e("h3",{attrs:{id:"引入资源-理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#引入资源-理解"}},[s._v("#")]),s._v(" 引入资源（理解）")]),s._v(" "),e("p",[s._v("当样式比较繁多的时候，我们可以针对不同的媒体使用不同 stylesheets（样式表）。")]),s._v(" "),e("p",[s._v("原理，就是直接在link中判断设备的尺寸，然后引用不同的css文件。")]),s._v(" "),e("p",[s._v("最好是按从小到大写。")]),s._v(" "),e("ol",[e("li",[s._v("语法规范")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("示例")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<link rel="stylesheet" href="styleA.css" media="screen and (min-width: 400px)">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"less-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-基础"}},[s._v("#")]),s._v(" Less 基础")]),s._v(" "),e("p",[s._v("维护 css 的弊端")]),s._v(" "),e("ul",[e("li",[s._v("CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。")]),s._v(" "),e("li",[s._v("CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的。")]),s._v(" "),e("li",[s._v("不方便维护及扩展，不利于复用。")]),s._v(" "),e("li",[s._v("CSS 没有很好的计算能力")]),s._v(" "),e("li",[s._v("非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目。")])]),s._v(" "),e("h3",{attrs:{id:"less-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-介绍"}},[s._v("#")]),s._v(" Less 介绍")]),s._v(" "),e("p",[s._v("Less （Leaner Style Sheets 的缩写） 是一门 CSS 扩展语言，也成为CSS预处理器。")]),s._v(" "),e("p",[s._v("做为 CSS 的一种形式的扩展，它并没有减少 CSS 的功能，而是在现有的 CSS 语法上，为CSS加入程序式语言的特性。")]),s._v(" "),e("p",[s._v("它在 CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，就像它的名称所说的那样，Less 可以让我们用更少的代码做更多的事情。")]),s._v(" "),e("p",[s._v("Less中文网址： http://lesscss.cn/")]),s._v(" "),e("p",[s._v("常见的CSS预处理器：Sass、Less、Stylus")]),s._v(" "),e("p",[s._v("一句话：Less 是一门 CSS 预处理语言，它扩展了CSS的动态特性。")]),s._v(" "),e("h3",{attrs:{id:"less-安装-注意如果使用vscode无需安装less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-安装-注意如果使用vscode无需安装less"}},[s._v("#")]),s._v(" Less 安装（注意如果使用vscode无需安装less）")]),s._v(" "),e("p",[s._v("① 安装nodejs，可选择版本(8.0)，网址：http://nodejs.cn/download/")]),s._v(" "),e("p",[s._v("② 检查是否安装成功，使用cmd命令（win10 是 window +r 打开 运行输入cmd） --- 输入“ node –v ”查看版本即可")]),s._v(" "),e("p",[s._v("③ 基于nodejs在线安装Less，使用cmd命令“ npm install -g less ”即可")]),s._v(" "),e("p",[s._v("④ 检查是否安装成功，使用cmd命令“ lessc -v ”查看版本即可")]),s._v(" "),e("p",[e("img",{attrs:{src:a(421),alt:"image-20221117170944611"}})]),s._v(" "),e("p",[s._v("我们首先新建一个后缀名为less的文件， 在这个less文件里面书写less语句。")]),s._v(" "),e("ul",[e("li",[s._v("Less 变量")]),s._v(" "),e("li",[s._v("Less 编译")]),s._v(" "),e("li",[s._v("Less 嵌套")]),s._v(" "),e("li",[s._v("Less 运算")]),s._v(" "),e("li",[s._v("Less 使用")])]),s._v(" "),e("h3",{attrs:{id:"less-变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-变量"}},[s._v("#")]),s._v(" Less 变量")]),s._v(" "),e("p",[s._v("变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@变量名:值;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("变量命名规范")])]),s._v(" "),e("ul",[e("li",[s._v("必须有@为前缀")]),s._v(" "),e("li",[s._v("不能包含特殊字符")]),s._v(" "),e("li",[s._v("不能以数字开头")]),s._v(" "),e("li",[s._v("大小写敏感")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@color: pink;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@变量名:值;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("变量使用规范")])]),s._v(" "),e("p",[s._v("//直接使用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("body{\n color:@color;\n}\na:hover{\n color:@color;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"less-编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-编译"}},[s._v("#")]),s._v(" Less 编译")]),s._v(" "),e("p",[s._v("本质上，Less 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。")]),s._v(" "),e("p",[s._v("所以，我们需要把我们的 less文件，编译生成为css文件，这样我们的html页面才能使用。")]),s._v(" "),e("h3",{attrs:{id:"less-编译-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-编译-2"}},[s._v("#")]),s._v(" Less 编译")]),s._v(" "),e("p",[e("strong",[s._v("vocode Less 插件")])]),s._v(" "),e("p",[s._v("Easy LESS 插件用来把less文件编译为")]),s._v(" "),e("p",[s._v("css文件")]),s._v(" "),e("p",[s._v("安装完毕插件，重新加载下 vscode。")]),s._v(" "),e("p",[s._v("只要保存一下Less文件，会自动生成CSS")]),s._v(" "),e("p",[s._v("文件。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(422),alt:"image-20221117171216276"}})]),s._v(" "),e("h3",{attrs:{id:"less-嵌套"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-嵌套"}},[s._v("#")]),s._v(" Less 嵌套")]),s._v(" "),e("p",[s._v("我们经常用到选择器的嵌套")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#header .logo {\n width: 300px;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("Less 嵌套写法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#header {\n .logo {//less嵌套，子元素的样式直接写到父元素里面就好了。\n width: 300px;\n }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("如果遇见 （交集（还没教）|伪类|伪元素选择器）")]),s._v(" "),e("ul",[e("li",[s._v("内层选择器的前面没有 & 符号，则它被解析为父选择器的后代；")]),s._v(" "),e("li",[s._v("如果有 & 符号，它就被解析为父元素自身或父元素的伪类。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("a:hover{\n color:red;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("strong",[s._v("Less 嵌套写法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("a{\n &:hover{\n color:red;\n }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"less-运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less-运算"}},[s._v("#")]),s._v(" Less 运算")]),s._v(" "),e("p",[s._v("任何数字、颜色或者变量都可以参与运算。就是Less提供了加（+）、减（-）、乘（*）、除（/）算术运算。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/Less 里面写/\n@witdh: 10px + 5;\ndiv {\n border: @witdh solid red;\n}\n/生成的css/\ndiv {\n border: 15px solid red;\n}\n/Less 甚至还可以这样 /\nwidth: (@width + 5)  2;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("strong",[s._v("注意：")])]),s._v(" "),e("ul",[e("li",[s._v("乘号（*）和除号（/）的写法 。好像在新的less里除法要写括号。")]),s._v(" "),e("li",[s._v("运算符中间左右有个空格隔开 1px + 5")]),s._v(" "),e("li",[s._v("对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位")]),s._v(" "),e("li",[s._v("如果两个值之间只有一个值有单位，则运算结果就取该单位")])]),s._v(" "),e("p",[s._v("思考，rem 适配方案")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("我们适配的目标是什么？")])]),s._v(" "),e("li",[e("p",[s._v("怎么去达到这个目标的？")])]),s._v(" "),e("li",[e("p",[s._v("在实际的开发当中使用？")])])]),s._v(" "),e("p",[s._v("答案：rem 适配方案")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("让一些不能等比自适应的元素，达到当设备尺寸发生改变的时候，等比例适配当前设备。")])]),s._v(" "),e("li",[e("p",[s._v("使用媒体查询根据不同设备按比例设置html的字体大小，然后页面元素使用rem做尺寸单位，当html字体大小变化元素尺寸也会发生变化，从而达到等比缩放的适配。")])])]),s._v(" "),e("h2",{attrs:{id:"rem-适配方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-适配方案"}},[s._v("#")]),s._v(" rem 适配方案")]),s._v(" "),e("h3",{attrs:{id:"rem-实际开发适配方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-实际开发适配方案"}},[s._v("#")]),s._v(" rem 实际开发适配方案")]),s._v(" "),e("p",[s._v("① 按照设计稿与设备宽度的比例，动态计算并设置 html 根标签的 font-size 大小；（媒体查询）")]),s._v(" "),e("p",[s._v("② CSS 中，设计稿元素的宽、高、相对位置等取值，按照同等比例换算为 rem 为单位的值；")]),s._v(" "),e("p",[e("img",{attrs:{src:a(423),alt:"image-20221117171557605"}})]),s._v(" "),e("h3",{attrs:{id:"rem-适配方案技术使用-市场主流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-适配方案技术使用-市场主流"}},[s._v("#")]),s._v(" rem 适配方案技术使用（市场主流）")]),s._v(" "),e("p",[e("strong",[s._v("技术方案1")])]),s._v(" "),e("ul",[e("li",[s._v("less")]),s._v(" "),e("li",[s._v("媒体查询")]),s._v(" "),e("li",[s._v("rem")])]),s._v(" "),e("p",[e("strong",[s._v("技术方案2（推荐）")])]),s._v(" "),e("ul",[e("li",[s._v("flexible.js")]),s._v(" "),e("li",[s._v("rem")])]),s._v(" "),e("p",[s._v("总结：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("两种方案现在都存在。")])]),s._v(" "),e("li",[e("p",[s._v("方案2 更简单，现阶段大家无需了解里面的js代码。")])])]),s._v(" "),e("h3",{attrs:{id:"rem-实际开发适配方案1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-实际开发适配方案1"}},[s._v("#")]),s._v(" rem 实际开发适配方案1")]),s._v(" "),e("p",[s._v("rem+ 媒体查询 + less 技术")]),s._v(" "),e("p",[e("strong",[s._v("设计稿常见尺寸宽度")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(424),alt:"image-20221117171830844"}})]),s._v(" "),e("p",[s._v("一般情况下，我们以一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果现在基本以750为准。")]),s._v(" "),e("p",[e("strong",[s._v("动态设置 html 标签 font-size 大小")])]),s._v(" "),e("p",[s._v("① 假设设计稿是750px")]),s._v(" "),e("p",[s._v("② 假设我们把整个屏幕划分为15等份（划分标准不一可以是20份也可以是10等份）")]),s._v(" "),e("p",[s._v("③ 每一份作为html字体大小，这里就是50px")]),s._v(" "),e("p",[s._v("④ 那么在320px设备的时候，字体大小为320/15 就是 21.33px")]),s._v(" "),e("p",[s._v("⑤ 用我们页面元素的大小 除以不同的 html 字体大小会发现他们比例还是相同的")]),s._v(" "),e("p",[s._v("⑥ 比如我们以 750为标准设计稿")]),s._v(" "),e("p",[s._v("⑦ 一个100100像素的页面元素 在 750屏幕下， 就是 100 / 50 转换为rem 是 2rem  2 rem 比例是 1比1")]),s._v(" "),e("p",[s._v("⑧ 320屏幕下， html 字体大小为 21.33 则 2rem = 42.66px 此时宽和高都是 42.66 但是 宽和高的比例还是 1比1")]),s._v(" "),e("p",[s._v("⑨ 但是已经能实现不同屏幕下 页面元素盒子等比例缩放的效果4. rem 适配方案")]),s._v(" "),e("p",[e("strong",[s._v("元素大小取值方法")])]),s._v(" "),e("p",[s._v("① 最后的公式： 页面元素的rem值 = 页面元素值（px） / （屏幕宽度 / 划分的份数）")]),s._v(" "),e("p",[s._v("② 屏幕宽度/划分的份数 就是 html font-size 的大小")]),s._v(" "),e("p",[s._v("③ 或者： 页面元素的rem值 = 页面元素值（px） / html font-size 字体大小")]),s._v(" "),e("h2",{attrs:{id:"苏宁网首页案例制作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#苏宁网首页案例制作"}},[s._v("#")]),s._v(" 苏宁网首页案例制作")]),s._v(" "),e("p",[s._v("案例：苏宁网移动端首页")]),s._v(" "),e("p",[s._v("访问地址：m.suning.com")]),s._v(" "),e("p",[e("img",{attrs:{src:a(425),alt:"image-20221117171926171"}})]),s._v(" "),e("p",[e("strong",[s._v("技术选型")])]),s._v(" "),e("p",[s._v("方案：我们采取单独制作移动页面方案")]),s._v(" "),e("p",[s._v("技术：布局采取rem适配布局（less + rem + 媒体查询）")]),s._v(" "),e("p",[s._v("设计图： 本设计图采用 750px 设计尺寸")]),s._v(" "),e("p",[e("strong",[s._v("搭建相关文件夹结构")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(426),alt:"image-20221117171958116"}})]),s._v(" "),e("p",[e("strong",[s._v("设置视口标签以及引入初始化样式")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n <link rel="stylesheet" href="css/normalize.css">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("设置公共common.less文件")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("新建common.less 设置好最常见的屏幕尺寸，利用媒体查询设置不同的html字体大小，因为除了首页其他页面也需要")])]),s._v(" "),e("li",[e("p",[s._v("我们关心的尺寸有 320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px")])]),s._v(" "),e("li",[e("p",[s._v("划分的份数我们定为 15等份")])]),s._v(" "),e("li",[e("p",[s._v("因为我们pc端也可以打开我们苏宁移动端首页，我们默认html字体大小为 50px，注意这句话写到最上面")])])]),s._v(" "),e("p",[e("strong",[s._v("新建index.less文件")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("新建index.less 这里面写首页的样式")])]),s._v(" "),e("li",[e("p",[s._v("将刚才设置好的 common.less 引入到index.less里面 语法如下：")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 在 index.less 中导入 common.less 文件\n@import “common”\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("生成index.css 引入到 index.html 里面")])]),s._v(" "),e("p",[e("strong",[s._v("body样式")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("body {\nmin-width: 320px;\nwidth:15rem;\nmargin: 0 auto;\nline-height: 1.5;\nfont-family: Arial,Helvetica;\nbackground: #F2F2F2;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("注：")]),s._v(" "),e("p",[s._v("1、每个尺寸的rem都要写，而且可以在最上面直接下个pc端的html{font-size：50px},同时也时比最低适配还少时的rem。")]),s._v(" "),e("p",[s._v("2、因为common已经被导入到index.css里面去了，所以在index.html就不用再链接common.css了。")]),s._v(" "),e("p",[s._v("3、body里面直接写wight:15rem再写margin auto。或者用已经的方法写max-wight:750px,才能设置margin auto。")]),s._v(" "),e("p",[s._v("4、在input：search里写outline: none;设置其没有蓝色边框")]),s._v(" "),e("p",[s._v("5、margin不能用在行内或行内块元素去设置居中，需要转化为块级元素，或者在父元素里加上text-align:center。没有设置宽度的块级元素也不能设置")]),s._v(" "),e("h3",{attrs:{id:"rem-适配方案2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rem-适配方案2"}},[s._v("#")]),s._v(" rem 适配方案2")]),s._v(" "),e("ol",[e("li",[s._v("简洁高效的rem适配方案flexible.js")])]),s._v(" "),e("p",[s._v("技术方案1")]),s._v(" "),e("ul",[e("li",[s._v("less")]),s._v(" "),e("li",[s._v("媒体查询")]),s._v(" "),e("li",[s._v("rem")])]),s._v(" "),e("p",[s._v("技术方案2（推荐）")]),s._v(" "),e("ul",[e("li",[s._v("flexible.js")]),s._v(" "),e("li",[s._v("rem6. rem")])]),s._v(" "),e("p",[e("strong",[s._v("简洁高效的rem适配方案flexible.js")])]),s._v(" "),e("p",[s._v("手机淘宝团队出的简洁高效 移动端适配库")]),s._v(" "),e("p",[s._v("我们再也不需要在写不同屏幕的媒体查询，因为里面js做了处理")]),s._v(" "),e("p",[s._v("它的原理是把当前设备划分为10等份，但是不同设备下，比例还是一致的。")]),s._v(" "),e("p",[s._v("我们要做的，就是确定好我们当前设备的html 文字大小就可以了")]),s._v(" "),e("p",[s._v("比如当前设计稿是 750px， 那么我们只需要把 html 文字大小设置为 75px(750px / 10) 就可以")]),s._v(" "),e("p",[s._v("里面页面元素rem值： 页面元素的px 值 / 75")]),s._v(" "),e("p",[s._v("剩余的，让flexible.js来去算")]),s._v(" "),e("p",[s._v("github地址：https://github.com/amfe/lib-flexible")]),s._v(" "),e("p",[e("strong",[s._v("使用适配方案2制作苏宁移动端首页")])]),s._v(" "),e("p",[e("strong",[s._v("技术选型")])]),s._v(" "),e("p",[s._v("方案：我们采取单独制作移动页面方案")]),s._v(" "),e("p",[s._v("技术：布局采取rem适配布局2（flexible.js + rem）")]),s._v(" "),e("p",[s._v("设计图： 本设计图采用 750px 设计尺寸")]),s._v(" "),e("p",[e("strong",[s._v("搭建相关文件夹结构")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(427),alt:"image-20221117172447604"}})]),s._v(" "),e("p",[e("strong",[s._v("设置视口标签以及引入初始化样式还有js文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n<link rel="stylesheet" href="css/normalize.css">\n<link rel="stylesheet" href="css/index.css">\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("我们页面需要引入 这个js文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("在 index.html 中 引入 flexible.js 这个文件\n<script src=“js/flexible.js”> <\/script>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("strong",[s._v("body样式")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("body {\nmin-width: 320px;\nwidth:10rem;\nmargin: 0 auto;\nline-height: 1.5;\nfont-family: Arial,Helvetica;\nbackground: #F2F2F2;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("strong",[s._v("VSCode px 转换rem 插件 cssrem")])]),s._v(" "),e("p",[s._v("这是一个神奇的插件，插件默认rem为16px")]),s._v(" "),e("p",[s._v("需要在设置里搜索cssroot进行修改修改。")]),s._v(" "),e("p",[s._v("注：")]),s._v(" "),e("p",[s._v("1、如果我们的屏幕超过了750px 那么我们就按照750设计稿来走，不会让页面超过750px。在css文件里加个750px以上的判断并给出rem为75px，并加！important提高权重。（因为这个js文件原计算rem为全屏幕/10来计算的）")]),s._v(" "),e("p",[s._v("2、优点，变化比较柔和，稍微变一点就变化。")])])}),[],!1,null,null,null);e.default=v.exports}}]);