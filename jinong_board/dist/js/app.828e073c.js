(function(t){function e(e){for(var n,o,l=e[0],i=e[1],u=e[2],b=0,f=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);s&&s(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var s=i;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2afa":function(t,e,r){"use strict";r("96f5")},4050:function(t,e,r){"use strict";r("946b")},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("7a23");function a(t,e,r,a,c,o){var l=Object(n["v"])("NavBar"),i=Object(n["v"])("router-view");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(l),Object(n["f"])(i,{posts:c.posts},null,8,["posts"])],64)}var c=r("cf05"),o=r.n(c),l=Object(n["A"])("data-v-939c627e");Object(n["r"])("data-v-939c627e");var i={class:"navbar navbar-expand-lg navbar-light",style:{"background-color":"#e3f2fd"}},u={class:"container-fluid"},s=Object(n["f"])("a",{class:"navbar-brand",href:"http://www.jinong.co.kr/pages/index.html"},[Object(n["f"])("img",{src:o.a,alt:"logo",width:"118",style:{"margin-right":"0vw"}})],-1),b=Object(n["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarNav"},p={class:"navbar-nav"},d={class:"nav-item"},v=Object(n["e"])("게시글 보기"),O={class:"nav-item"},j=Object(n["e"])("글 작성하기");Object(n["p"])();var h=l((function(t,e,r,a,c,o){var h=Object(n["v"])("router-link");return Object(n["o"])(),Object(n["d"])("nav",i,[Object(n["f"])("div",u,[s,b,Object(n["f"])("div",f,[Object(n["f"])("ul",p,[Object(n["f"])("li",d,[Object(n["f"])(h,{to:"/",class:"nav-link active","aria-current":"page"},{default:l((function(){return[v]})),_:1})]),Object(n["f"])("li",O,[Object(n["f"])(h,{to:"/create",class:"nav-link active"},{default:l((function(){return[j]})),_:1})])])])])])})),g={};g.render=h,g.__scopeId="data-v-939c627e";var m=g,y={name:"App",data:function(){return{posts:[{id:0,title:"a",writer:"kk"}]}},created:function(){console.log(this.$axios)},methods:{},components:{NavBar:m}};r("4050");y.render=a;var w=y,x=(r("7b17"),r("ab8b"),r("6c02")),k=Object(n["A"])("data-v-7f82e904");Object(n["r"])("data-v-7f82e904");var _={class:"table"},P=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"글 번호"),Object(n["f"])("th",{scope:"col"},"글 제목"),Object(n["f"])("th",{scope:"col"},"작성자"),Object(n["f"])("th",{scope:"col"},"작성시간")])],-1),N={scope:"row"},S={class:"tr_title"};Object(n["p"])();var $=k((function(t,e,r,a,c,o){return Object(n["o"])(),Object(n["d"])("div",null,[Object(n["f"])("table",_,[P,Object(n["f"])("tbody",null,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(r.posts,(function(e,r){return Object(n["o"])(),Object(n["d"])("tr",{onClick:function(e){return t.$router.push("/detail/"+r)},key:r},[Object(n["f"])("th",N,Object(n["x"])(r),1),Object(n["f"])("td",S,Object(n["x"])(e.title),1),Object(n["f"])("td",null,Object(n["x"])(e.writer),1)],8,["onClick"])})),128))])]),Object(n["f"])("button",{click:o.create},"글 작성하기",8,["click"])])})),A={name:"list",props:{posts:Array},methods:{create:function(){this.$http.get("/api/create")}}};r("2afa");A.render=$,A.__scopeId="data-v-7f82e904";var M=A;function T(t,e,r,n,a,c){return" create "}var B={};B.render=T;var C=B;function I(t,e,r,n,a,c){return" edit "}var J={};J.render=I;var q=J;function z(t,e,r,a,c,o){return Object(n["x"])(t.$route.params.number)+" detail "}var D={props:{}};D.render=z;var E=D;function F(t,e,r,n,a,c){return" 잘못된 접근입니다. "}var G={};G.render=F;var H=G,K=[{path:"/detail/:number",component:E},{path:"/create",component:C},{path:"/edit",component:q},{path:"/:any(.*)",component:H},{path:"/",component:M}],L=Object(x["a"])({history:Object(x["b"])(),routes:K}),Q=L,R=r("bc3a"),U=r.n(R),V=Object(n["c"])(w).use(Q);V.config.globalProperties.$axios=U.a,V.mount("#app")},"946b":function(t,e,r){},"96f5":function(t,e,r){},cf05:function(t,e,r){t.exports=r.p+"img/logo.f52c9571.png"}});
//# sourceMappingURL=app.828e073c.js.map