(function(t){function e(e){for(var n,o,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08aa":function(t,e,a){"use strict";var n=a("7a23"),r={class:"input-group mb-3"},i=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"글제목",-1),o={type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},c={class:"input-group mb-3"},s=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"작성자",-1),u={type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},l={class:"input-group mb-3"},p=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"글내용",-1),d={style:{height:"500px"},type:"text",class:"form-control","aria-label":"Sizing example textarea","aria-describedby":"inputGroup-sizing-default"},b=Object(n["f"])("br",null,null,-1);function f(t,e,a,f,O,j){return Object(n["o"])(),Object(n["d"])("div",null,[Object(n["f"])("div",r,[i,Object(n["f"])("span",o,Object(n["x"])(O.title),1)]),Object(n["f"])("div",c,[s,Object(n["f"])("span",u,Object(n["x"])(O.user),1)]),Object(n["f"])("div",l,[p,Object(n["f"])("span",d,Object(n["x"])(O.contents),1)]),Object(n["B"])(Object(n["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return O.password=t}),type:"password",style:{align:"center"},placeholder:"수정, 삭제시 비밀번호 입력"},null,512),[[n["z"],O.password]]),b,Object(n["f"])("button",{onClick:e[2]||(e[2]=function(t){return j.editPost()})}," 수정 "),Object(n["f"])("button",{onClick:e[3]||(e[3]=function(t){return j.deletePost()})}," 삭제 ")])}var O=a("bc3a"),j=a.n(O),g={name:"detail",props:{posts:Array},data:function(){return{password:"",title:"",user:"",contents:""}},created:function(){var t=this,e=this.$route.params.id;j.a.get("/post/"+e).then((function(e){t.title=e.data[0].title,t.user=e.data[0].user,t.contents=e.data[0].contents})).catch((function(e){t.$router.push("/error"),console.log(e)}))},methods:{editPost:function(){var t=this,e=this.$route.params.id;j.a.get("/post/"+e).then((function(a){t.password===a.data[0].password?t.$router.push("/board/"+e+"/edit"):alert("비밀번호를 확인해주세요.")}))},deletePost:function(){var t=this,e=this.$route.params.id;j.a.get("/post/"+e).then((function(a){t.password===a.data[0].password?(j.a.delete("/post/"+e),alert("글이 삭제되었습니다."),t.updateData(),t.$router.push("/")):alert("비밀번호를 확인해주세요.")}))},updateData:function(){this.$emit("updateData")}}};g.render=f;e["a"]=g},"0e72":function(t,e,a){},"2e90":function(t,e,a){"use strict";var n=a("7a23"),r=Object(n["C"])("data-v-50240c05");Object(n["r"])("data-v-50240c05");var i={class:"table"},o=Object(n["f"])("thead",null,[Object(n["f"])("tr",null,[Object(n["f"])("th",{scope:"col"},"글 번호"),Object(n["f"])("th",{scope:"col"},"글 제목"),Object(n["f"])("th",{scope:"col"},"작성자"),Object(n["f"])("th",{scope:"col"},"작성일자"),Object(n["f"])("th",{scope:"col"},"수정일자")])],-1),c={scope:"row"},s=Object(n["e"])("글쓰기");Object(n["p"])();var u=r((function(t,e,a,u,l,p){var d=Object(n["v"])("router-link");return Object(n["o"])(),Object(n["d"])("div",null,[Object(n["f"])("table",i,[o,Object(n["f"])("tbody",null,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(a.posts,(function(e,a){return Object(n["o"])(),Object(n["d"])("tr",{class:"tr_cursor",onClick:function(a){return t.$router.push("/board/"+e.id)},key:a},[Object(n["f"])("th",c,Object(n["x"])(e.id),1),Object(n["f"])("td",null,Object(n["x"])(e.title),1),Object(n["f"])("td",null,Object(n["x"])(e.user),1),Object(n["f"])("td",null,Object(n["x"])(e.createdDate),1),Object(n["f"])("td",null,Object(n["x"])(e.modifiedDate),1)],8,["onClick"])})),128))])]),Object(n["f"])("button",null,[Object(n["f"])(d,{to:"/board/create",class:"nav-link active"},{default:r((function(){return[s]})),_:1})])])})),l={name:"list",props:{posts:Array}};a("a71e");l.render=u,l.__scopeId="data-v-50240c05";e["a"]=l},"3fb9":function(t,e,a){"use strict";var n=a("7a23");function r(t,e,a,r,i,o){return Object(n["o"])(),Object(n["d"])("div",null," 잘못된 접근입니다. ")}var i={};i.render=r;e["a"]=i},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("7a23");function r(t,e,a,r,i,o){var c=Object(n["v"])("NavBar"),s=Object(n["v"])("router-view");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(c),Object(n["f"])(s,{onUpdateData:o.update,posts:i.posts},null,8,["onUpdateData","posts"])],64)}var i=a("2909"),o=a("cf05"),c=a.n(o),s=Object(n["C"])("data-v-f4cb0a10");Object(n["r"])("data-v-f4cb0a10");var u={class:"navbar navbar-expand-lg navbar-light",style:{"background-color":"#e3f2fd"}},l={class:"container-fluid"},p=Object(n["f"])("a",{class:"navbar-brand",href:"http://www.jinong.co.kr/pages/index.html"},[Object(n["f"])("img",{src:c.a,alt:"logo",width:"118",style:{"margin-right":"0vw"}})],-1),d=Object(n["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav"},O={class:"nav-item"},j=Object(n["e"])("글보기"),g={class:"nav-item"},v=Object(n["e"])("글쓰기");Object(n["p"])();var h=s((function(t,e,a,r,i,o){var c=Object(n["v"])("router-link");return Object(n["o"])(),Object(n["d"])("nav",u,[Object(n["f"])("div",l,[p,d,Object(n["f"])("div",b,[Object(n["f"])("ul",f,[Object(n["f"])("li",O,[Object(n["f"])(c,{to:"/",class:"nav-link active","aria-current":"page"},{default:s((function(){return[j]})),_:1})]),Object(n["f"])("li",g,[Object(n["f"])(c,{to:"/board/create",class:"nav-link active"},{default:s((function(){return[v]})),_:1})])])])])])})),m={};m.render=h,m.__scopeId="data-v-f4cb0a10";var x=m,y=a("bc3a"),w=a.n(y),z={name:"App",data:function(){return{posts:[]}},mounted:function(){this.update()},methods:{update:function(){var t=this;w.a.get("/post").then((function(e){t.posts=Object(i["a"])(e.data)})).catch((function(t){console.log(t)}))}},components:{NavBar:x}};a("d548");z.render=r;var D=z,G=(a("7b17"),a("ab8b"),a("e26c")),k=Object(n["c"])(D).use(G["a"]);k.config.globalProperties.$axios=w.a,k.mount("#app")},6411:function(t,e,a){"use strict";var n=a("7a23"),r={class:"input-group mb-3"},i=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"글제목",-1),o={class:"input-group mb-3"},c=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"작성자",-1),s={class:"input-group mb-3"},u=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"암호화",-1),l={class:"input-group mb-3"},p=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"글내용",-1);function d(t,e,a,d,b,f){return Object(n["o"])(),Object(n["d"])("div",null,[Object(n["f"])("div",r,[i,Object(n["B"])(Object(n["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return b.title=t}),type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},null,512),[[n["z"],b.title]])]),Object(n["f"])("div",o,[c,Object(n["B"])(Object(n["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return b.user=t}),type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default"},null,512),[[n["z"],b.user]])]),Object(n["f"])("div",s,[u,Object(n["B"])(Object(n["f"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return b.password=t}),type:"password",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",placeholder:"비밀번호를 입력해주세요(글 삭제, 수정 시 필요합니다.)"},null,512),[[n["z"],b.password]])]),Object(n["f"])("div",l,[p,Object(n["B"])(Object(n["f"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return b.contents=t}),style:{height:"500px"},type:"text",class:"form-control","aria-label":"Sizing example textarea","aria-describedby":"inputGroup-sizing-default",placeholder:"내용을 입력해주세요."},null,512),[[n["z"],b.contents]])]),Object(n["f"])("button",{onClick:e[5]||(e[5]=function(t){return f.editData()})}," 수정 ")])}var b=a("bc3a"),f=a.n(b),O={name:"edit",data:function(){return{title:"",user:"",password:"",contents:"",modifiedDate:(new Date).toLocaleString()}},mounted:function(){var t=this,e=this.$route.params.id;f.a.get("/post/"+e).then((function(e){t.title=e.data[0].title,t.user=e.data[0].user,t.password=e.data[0].password,t.contents=e.data[0].contents}))},methods:{updateData:function(){this.$emit("updateData")},editData:function(){var t=this.$route.params.id,e={id:t,title:this.title,user:this.user,password:this.password,contents:this.contents,modifiedDate:this.modifiedDate};f.a.put("/post/"+t,e).then(this.updateData()),alert("글 내용이 수정되었습니다."),this.$router.push("/board/"+t)}}};O.render=d;e["a"]=O},a71e:function(t,e,a){"use strict";a("e280")},cf05:function(t,e,a){t.exports=a.p+"img/logo.f52c9571.png"},d548:function(t,e,a){"use strict";a("0e72")},e26c:function(t,e,a){"use strict";(function(t){var n=a("6c02"),r=a("2e90"),i=a("eeea"),o=a("6411"),c=a("08aa"),s=a("3fb9"),u=a("df7c"),l=a.n(u),p=[{path:"/board/:id",component:c["a"]},{path:"/board/create",component:i["a"]},{path:"/board/:id/edit",component:o["a"]},{path:"/:any(.*)",component:s["a"]},{path:"/",component:r["a"]}],d=Object(n["a"])({index:l.a.resolve(t,"../../backend/public/index.html"),assetsRoot:l.a.resolve(t,"../../backend/public"),history:Object(n["b"])(),routes:p});e["a"]=d}).call(this,"/")},e280:function(t,e,a){},eeea:function(t,e,a){"use strict";var n=a("7a23"),r={class:"input-group mb-3"},i=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"글제목",-1),o={class:"input-group mb-3"},c=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"작성자",-1),s={class:"input-group mb-3"},u=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"암호화",-1),l={class:"input-group mb-3"},p=Object(n["f"])("span",{class:"input-group-text",id:"inputGroup-sizing-default"},"글내용",-1);function d(t,e,a,d,b,f){return Object(n["o"])(),Object(n["d"])("div",null,[Object(n["f"])("div",r,[i,Object(n["B"])(Object(n["f"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return b.title=t}),type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",placeholder:"제목을 입력해주세요."},null,512),[[n["z"],b.title]])]),Object(n["f"])("div",o,[c,Object(n["B"])(Object(n["f"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return b.user=t}),type:"text",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",placeholder:"작성자를 입력해주세요."},null,512),[[n["z"],b.user]])]),Object(n["f"])("div",s,[u,Object(n["B"])(Object(n["f"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return b.password=t}),type:"password",class:"form-control","aria-label":"Sizing example input","aria-describedby":"inputGroup-sizing-default",placeholder:"비밀번호를 입력해주세요(글 삭제, 수정 시 필요합니다.)"},null,512),[[n["z"],b.password]])]),Object(n["f"])("div",l,[p,Object(n["B"])(Object(n["f"])("textarea",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return b.contents=t}),style:{height:"500px"},type:"text",class:"form-control","aria-label":"Sizing example textarea","aria-describedby":"inputGroup-sizing-default",placeholder:"내용을 입력해주세요."},null,512),[[n["z"],b.contents]])]),Object(n["f"])("button",{onClick:e[5]||(e[5]=function(t){return f.register()})}," 등록 ")])}var b=a("bc3a"),f=a.n(b),O={name:"Create",data:function(){return{title:"",user:"",password:"",contents:"",createdDate:(new Date).toLocaleString(),modifiedDate:(new Date).toLocaleString()}},methods:{register:function(){var t=this,e=0,a={title:this.title,user:this.user,password:this.password,contents:this.contents,createdDate:this.createdDate,modifiedDate:this.modifiedDate};f.a.post("/post",a),f.a.get("/post").then((function(a){t.updateData(),e=a.data[a.data.length-1].id,t.$router.push("/board/"+e)})).catch((function(t){console.log(t)}))},updateData:function(){this.$emit("updateData")}}};O.render=d;e["a"]=O}});
//# sourceMappingURL=app.8c39a5eb.js.map