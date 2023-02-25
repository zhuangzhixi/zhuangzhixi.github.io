(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{330:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202130939.f4f61052.png"},331:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202256704.11d7156b.png"},332:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202404191.f313b34e.png"},333:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202525847.4bc5e4a9.png"},334:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202615024.2b8c990d.png"},335:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202650446.731cce11.png"},336:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202719295.70cca4a8.png"},337:function(v,t,_){v.exports=_.p+"assets/img/image-20221118202743502.287b9170.png"},532:function(v,t,_){"use strict";_.r(t);var s=_(14),a=Object(s.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"vw和vh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vw和vh"}},[v._v("#")]),v._v(" vw和vh")]),v._v(" "),t("h2",{attrs:{id:"vw和vh是啥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vw和vh是啥"}},[v._v("#")]),v._v(" vw和vh是啥")]),v._v(" "),t("p",[v._v("移动端布局——flex布局")]),v._v(" "),t("p",[v._v("为了实现可以适配移动端，页面元素可以宽高和高度等比例绽放，需要移动端适配如下方案：")]),v._v(" "),t("p",[v._v("1、rem（市场较常见的）")]),v._v(" "),t("p",[v._v("2、vw/vh（将来趋势，省去各种判断和修改）如b站")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("vw/vh是一个相对单位（类似em和rem相对单位）")]),v._v(" "),t("p",[v._v("vw是：viewport width  视口宽度单位")]),v._v(" "),t("p",[v._v("vh是： viewport height  视口高度单位")])]),v._v(" "),t("li",[t("p",[v._v("相对视口的尺寸计算结果")]),v._v(" "),t("p",[v._v("1vw = 1/100"),t("strong",[v._v("视口")]),v._v("宽度")]),v._v(" "),t("p",[v._v("1vh = 1/100视口高度")]),v._v(" "),t("p",[v._v("例如：当前屏幕视口是 375像素，则 1vw 就是 3.75 像素， 如果当前屏幕视口为414，则 1vw 就是 4.14 像素")]),v._v(" "),t("p",[v._v("注：和百分比有区别的，百分比是相对于父元素来说的，而vw和vh总是针对于当前视口来说的。")])])]),v._v(" "),t("p",[t("img",{attrs:{src:_(330),alt:"image-20221118202130939"}})]),v._v(" "),t("h2",{attrs:{id:"vw怎么使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vw怎么使用"}},[v._v("#")]),v._v(" vw怎么使用")]),v._v(" "),t("ul",[t("li",[v._v("超级简单， 元素单位直接使用新单位vw/vh即可。")]),v._v(" "),t("li",[v._v("因为vw/vh 是相对单位，所以不同视口（屏幕）下，宽高一起变化完成适配。")])]),v._v(" "),t("p",[t("img",{attrs:{src:_(331),alt:"image-20221118202256704"}})]),v._v(" "),t("h2",{attrs:{id:"如何还原设计稿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何还原设计稿"}},[v._v("#")]),v._v(" "),t("strong",[v._v("如何还原设计稿？")])]),v._v(" "),t("p",[v._v("前提： 我们设计稿按照iPhone678 来设计，有个盒子是 50像素*50像素的，如何使用vw呢？")]),v._v(" "),t("p",[v._v("分析：")]),v._v(" "),t("p",[v._v("①：设计稿参照iPhone678，所以视口宽度尺寸是 375像素（像素大厨切换到2x模式）")]),v._v(" "),t("p",[v._v("②：那么1vw是多少像素？375px / 100 =  3.75px")]),v._v(" "),t("p",[v._v("③：我们元素的目标是多少像素？50px * 50px")]),v._v(" "),t("p",[v._v("④：那么50*50 是多少个vw？ 50 / 3.75 = 13.3333vw")]),v._v(" "),t("p",[t("img",{attrs:{src:_(332),alt:"image-20221118202404191"}})]),v._v(" "),t("p",[v._v("总结：")]),v._v(" "),t("p",[v._v("1.开发中使用vw，需要像素大厨有哪些改动？")]),v._v(" "),t("ul",[t("li",[v._v("把模式改为2x模式")])]),v._v(" "),t("p",[v._v("2.开发中使用vw，如何还原设计稿？")]),v._v(" "),t("ul",[t("li",[v._v("确定设计稿视口宽度。 比如375")]),v._v(" "),t("li",[v._v("直接使用测量数值 /  （视口宽度 / 100）")]),v._v(" "),t("li",[v._v("比如:  50  / ( 375 / 100 )")])]),v._v(" "),t("p",[t("strong",[v._v("vw注意事项")]),v._v("：")]),v._v(" "),t("ul",[t("li",[v._v("因为设计到大量除法， 还是适应LESS 搭配更好点。")]),v._v(" "),t("li",[v._v("我们本质是根据视口宽度来等比例缩放页面元素高度和宽度的，所以开发中使用vw就基本够用了。vh很少使用。因为只有用同一个单位才能等比例缩放。")]),v._v(" "),t("li",[v._v("兼容性： 网站： https://caniuse.com/")])]),v._v(" "),t("p",[t("img",{attrs:{src:_(333),alt:"image-20221118202525847"}})]),v._v(" "),t("h2",{attrs:{id:"案例实战-bibi官网首页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例实战-bibi官网首页"}},[v._v("#")]),v._v(" 案例实战-bibi官网首页")]),v._v(" "),t("p",[t("img",{attrs:{src:_(334),alt:"image-20221118202615024"}})]),v._v(" "),t("p",[v._v("扣字体图标：P535")]),v._v(" "),t("p",[v._v("1.头部模块 - suspension-box   悬挂箱子")]),v._v(" "),t("p",[t("img",{attrs:{src:_(335),alt:"image-20221118202650446"}})]),v._v(" "),t("p",[v._v("1.VSCode 转换 vw 插件")]),v._v(" "),t("p",[t("img",{attrs:{src:_(336),alt:"image-20221118202719295"}})]),v._v(" "),t("p",[v._v("2.m-navbar 模块")]),v._v(" "),t("p",[t("img",{attrs:{src:_(337),alt:"image-20221118202743502"}})]),v._v(" "),t("p",[v._v("注：对一行的元素用flex相当于一行的元素浮动了。")])])}),[],!1,null,null,null);t.default=a.exports}}]);