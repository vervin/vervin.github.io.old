(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{611:function(n,s,a){"use strict";a.r(s);var e=a(8),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[n._v("#")]),n._v(" 懒加载")]),n._v(" "),a("h2",{attrs:{id:"什么是懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是懒加载"}},[n._v("#")]),n._v(" 什么是懒加载？")]),n._v(" "),a("p",[n._v("懒加载也就是延迟加载。\n当访问一个页面的时候，先把img元素或是其他元素的背景图片路径替换成一张大小为1*1px图片的路径（这样就只需请求一次，俗称占位图），只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径，让图片显示出来。这就是图片懒加载。")]),n._v(" "),a("h2",{attrs:{id:"为什么要使用懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用懒加载"}},[n._v("#")]),n._v(" 为什么要使用懒加载？")]),n._v(" "),a("p",[n._v("很多页面，内容很丰富，页面很长，图片较多。比如说各种商城页面。这些页面图片数量多，而且比较大，少说百来K，多则上兆。要是页面载入就一次性加载完毕。估计大家都会等到黄花变成黄花菜了。")]),n._v(" "),a("h2",{attrs:{id:"懒加载的原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载的原理是什么"}},[n._v("#")]),n._v(" 懒加载的原理是什么？")]),n._v(" "),a("p",[n._v("页面中的img元素，如果没有src属性，浏览器就不会发出请求去下载图片，只有通过javascript设置了图片路径，浏览器才会发送请求。\n懒加载的原理就是先在页面中把所有的图片统一使用一张占位图进行占位，把正真的路径存在元素的“data-url”（这个名字起个自己认识好记的就行）属性里，要用的时候就取出来，再设置；")]),n._v(" "),a("h2",{attrs:{id:"懒加载的实现步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载的实现步骤"}},[n._v("#")]),n._v(" 懒加载的实现步骤？")]),n._v(" "),a("ol",[a("li",[n._v("首先，不要将图片地址放到src属性中，而是放到其它属性(data-original)中。")]),n._v(" "),a("li",[n._v("页面加载完成后，根据scrollTop判断图片是否在用户的视野内，如果在，则将data-original属性中的值取出存放到src属性中。")]),n._v(" "),a("li",[n._v("在滚动事件中重复判断图片是否进入视野，如果进入，则将data-original属性中的值取出存放到src属性中。")])]),n._v(" "),a("h2",{attrs:{id:"懒加载的优点是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载的优点是什么"}},[n._v("#")]),n._v(" 懒加载的优点是什么？")]),n._v(" "),a("p",[n._v("页面加载速度快、可以减轻服务器的压力、节约了流量,用户体验好")]),n._v(" "),a("h2",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[n._v("#")]),n._v(" 源码")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("        var viewHeight = document.documentElement.clientHeight // 可视区域的高度\n\n        function lazyload() {\n            // 获取所有要进行懒加载的图片\n            var eles = document.querySelectorAll('img[data-original][lazyload]')\n            Array.prototype.forEach.call(eles, function (item, index) {\n                var rect\n                if (item.dataset.original === '')\n                    return\n                rect = item.getBoundingClientRect()\n                console.log(rect)\n                // 图片一进入可视区，动态加载\n                if (rect.bottom >= 0 && rect.top < viewHeight) {\n                    !function () {\n                        var img = new Image()\n                        img.src = item.dataset.original\n                        img.onload = function () {\n                            item.src = img.src\n                        }\n                        item.removeAttribute('data-original')\n                        item.removeAttribute('lazyload')\n                    }()\n                }\n            })\n        }\n        // 首屏要人为的调用，否则刚进入页面不显示图片\n        lazyload()\n\n        document.addEventListener('scroll', lazyload)\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br")])]),a("h1",{attrs:{id:"预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[n._v("#")]),n._v(" 预加载")]),n._v(" "),a("h2",{attrs:{id:"什么是预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是预加载"}},[n._v("#")]),n._v(" 什么是预加载？")]),n._v(" "),a("p",[n._v("提前加载图片，当用户需要查看时可直接从本地缓存中渲染\n##为什么要使用预加载？")]),n._v(" "),a("p",[n._v("图片预先加载到浏览器中，访问者便可顺利地在你的网站上冲浪，并享受到极快的加载速度。这对图片画廊及图片占据很大比例的网站来说十分有利，它保证了图片快速、无缝地发布，也可帮助用户在浏览你网站内容时获得更好的用户体验。")]),n._v(" "),a("h2",{attrs:{id:"实现预加载的方法有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现预加载的方法有哪些"}},[n._v("#")]),n._v(" 实现预加载的方法有哪些？")]),n._v(" "),a("p",[n._v("方法一：用CSS和JavaScript实现预加载")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('function preloader() {  \n    if (document.getElementById) {  \n        document.getElementById("preload-01").style.background = "url(http://domain.tld/image-01.png) no-repeat -9999px -9999px";  \n        document.getElementById("preload-02").style.background = "url(http://domain.tld/image-02.png) no-repeat -9999px -9999px";  \n        document.getElementById("preload-03").style.background = "url(http://domain.tld/image-03.png) no-repeat -9999px -9999px";  \n    }  \n}  \nfunction addLoadEvent(func) {  \n    var oldonload = window.onload;  \n    if (typeof window.onload != \'function\') {  \n        window.onload = func;  \n    } else {  \n        window.onload = function() {  \n            if (oldonload) {  \n                oldonload();  \n            }  \n            func();  \n        }  \n    }  \n}  \naddLoadEvent(preloader);\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("p",[n._v("方法二：仅使用JavaScript实现预加载")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('<div class="hidden">  \n    <script type="text/javascript">  \n        \x3c!--//--\x3e<![CDATA[//>\x3c!--  \n            var images = new Array()  \n            function preload() {  \n                for (i = 0; i < preload.arguments.length; i++) {  \n                    images[i] = new Image()  \n                    images[i].src = preload.arguments[i]  \n                }  \n            }  \n            preload(  \n                "http://domain.tld/gallery/image-001.jpg",  \n                "http://domain.tld/gallery/image-002.jpg",  \n                "http://domain.tld/gallery/image-003.jpg"  \n            )  \n        //--\x3e<!]]>  \n    <\/script>  \n</div>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('function preloader() {  \n    if (document.images) {  \n        var img1 = new Image();  \n        var img2 = new Image();  \n        var img3 = new Image();  \n        img1.src = "http://domain.tld/path/to/image-001.gif";  \n        img2.src = "http://domain.tld/path/to/image-002.gif";  \n        img3.src = "http://domain.tld/path/to/image-003.gif";  \n    }  \n}  \nfunction addLoadEvent(func) {  \n    var oldonload = window.onload;  \n    if (typeof window.onload != \'function\') {  \n        window.onload = func;  \n    } else {  \n        window.onload = function() {  \n            if (oldonload) {  \n                oldonload();  \n            }  \n            func();  \n        }  \n    }  \n}  \naddLoadEvent(preloader);\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br")])]),a("p",[n._v("方法三：使用Ajax实现预加载")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("window.onload = function() {  \n    setTimeout(function() {  \n        // XHR to request a JS and a CSS  \n        var xhr = new XMLHttpRequest();  \n        xhr.open('GET', 'http://domain.tld/preload.js');  \n        xhr.send('');  \n        xhr = new XMLHttpRequest();  \n        xhr.open('GET', 'http://domain.tld/preload.css');  \n        xhr.send('');  \n        // preload image  \n        new Image().src = \"http://domain.tld/preload.png\";  \n    }, 1000);  \n};\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('window.onload = function() {  \n  \n    setTimeout(function() {  \n  \n        // reference to <head>  \n        var head = document.getElementsByTagName(\'head\')[0];  \n  \n        // a new CSS  \n        var css = document.createElement(\'link\');  \n        css.type = "text/css";  \n        css.rel  = "stylesheet";  \n        css.href = "http://domain.tld/preload.css";  \n  \n        // a new JS  \n        var js  = document.createElement("script");  \n        js.type = "text/javascript";  \n        js.src  = "http://domain.tld/preload.js";  \n  \n        // preload JS and CSS  \n        head.appendChild(css);  \n        head.appendChild(js);  \n  \n        // preload image  \n        new Image().src = "http://domain.tld/preload.png";  \n  \n    }, 1000);  \n  \n};\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);