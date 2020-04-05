(window.webpackJsonp=window.webpackJsonp||[]).push([[16,15],{180:function(t,e,o){"use strict";o(13),o(57),o(73);var n=o(74),r=o.n(n),c=o(183),h=o.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var m=r.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return h.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});m.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),m.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=m},181:function(t,e,o){var content=o(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("08a709fc",content,!0,{sourceMap:!1})},187:function(t,e,o){"use strict";var n={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1,queue:[]}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.show?this.queue.push({text:text,mask:mask,timeout:e,position:o}):(this.queue.shift(),this.text=text,this.mask=mask,this.position=o,this.show=!0,setTimeout(function(){t.show=!1,t.queue.length>0&&t.showToast(t.queue[0].text,t.queue[0].mask,t.queue[0].timeout,t.queue[0].position)},e))},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},r=(o(188),o(19)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"toasttrs"}},[t.show?o("div",[t.mask?o("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),o("div",{staticClass:"toast-content",style:t.position},[t.loading?o("svg",{staticClass:"toast-content-loading",attrs:{viewBox:"25 25 50 50"}},[o("circle",{staticClass:"toast-content-loading",attrs:{cx:"50",cy:"50",r:"20"}})]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?o("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?o("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},188:function(t,e,o){"use strict";var n=o(181);o.n(n).a},189:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:30%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;flex-direction:column}.toast-content-div{height:0.13333rem}.toast-content-loading{width:1.06667rem;transform-origin:center;animation:rotate 2s linear infinite;position:relative}.toast-content-loading circle{fill:none;stroke:#fff;stroke-width:4;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-25px}100%{stroke-dashoffset:-125px}}\n",""])},190:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("60fb927a",content,!0,{sourceMap:!1})},191:function(t,e,o){var content=o(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("12a4d364",content,!0,{sourceMap:!1})},192:function(t,e,o){var content=o(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("3bf1dc2c",content,!0,{sourceMap:!1})},200:function(t,e,o){"use strict";o(186);var n={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},r=(o(201),o(19)),c=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"stepbar"}},[o("div",{staticClass:"progress"},[o("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),o("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),o("div",{staticClass:"wrapper"},t._l(t.steps,function(e,n){return o("div",{key:e,staticClass:"wrapper-item"},[o("div",{staticClass:"circle-wrapper"},[o("div",{staticClass:"circle"},[o("div",{class:["circle-content",n/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(n+1))])])]),t._v(" "),o("div",{staticClass:"step"},[o("div",{class:["step-item",n/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(e))])])])}),0)])},[],!1,null,"0b8731a7",null).exports,h={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")},gotoLoginRegister:function(t){this.$emit("click",t)}}},m=(o(209),Object(r.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("div",{staticClass:"wrapper"},[n("div",{staticClass:"content"},[n("div",{staticClass:"content-close"},[n("img",{staticClass:"content-close-img",attrs:{src:o(203)},on:{click:t.close}})]),t._v(" "),0==t.poster?n("img",{staticClass:"content-poster",attrs:{src:o(204)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?n("img",{staticClass:"content-poster",attrs:{src:o(205)},on:{click:t.gotoLink}}):t._e(),t._v(" "),2==t.poster?n("div",{staticClass:"content-poster content-register"},[2==t.poster?n("img",{staticClass:"content-poster",attrs:{src:o(206)}}):t._e(),t._v(" "),n("div",{staticClass:"register-button",on:{click:function(e){return t.gotoLoginRegister("login")}}},[n("img",{staticClass:"register-button-img",attrs:{src:o(207)}})]),t._v(" "),n("div",{staticClass:"login-button",on:{click:function(e){return t.gotoLoginRegister("register")}}},[n("img",{staticClass:"login-button-img",attrs:{src:o(208)}})])]):t._e()])]):t._e()])},[],!1,null,"b2fea874",null).exports),d={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},l=(o(211),Object(r.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"submit"},[o("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),o("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);o.d(e,"b",function(){return c}),o.d(e,"a",function(){return m}),o.d(e,"c",function(){return l})},201:function(t,e,o){"use strict";var n=o(190);o.n(n).a},202:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".top-step-bar[data-v-0b8731a7]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-0b8731a7]{padding:0 0.4rem}.page-content-content[data-v-0b8731a7]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-0b8731a7]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-0b8731a7]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#stepbar[data-v-0b8731a7]{position:relative;width:100vw}.wrapper[data-v-0b8731a7]{display:flex;align-items:center;justify-content:space-around;padding:0 0.53333rem;width:100%;position:absolute;top:0;left:0}.circle[data-v-0b8731a7]{height:0.66667rem;width:0.66667rem;border-radius:50%;background:#fff;box-shadow:0 0 0.15rem -0.07rem #666666;display:flex;justify-content:center;align-items:center}.circle-wrapper[data-v-0b8731a7]{height:1.2rem;display:flex;align-items:center;justify-content:center}.circle-content[data-v-0b8731a7]{height:0.50667rem;width:0.50667rem;color:#fff;background:#E6E6E6;border-radius:50%;font-family:STYuanti-SC-Regular;font-size:0.29333rem;display:flex;justify-content:center;align-items:center}.circle .accent[data-v-0b8731a7]{background:#16C8D2}.step-item[data-v-0b8731a7]{color:#B2B2B2;font-size:0.29333rem;font-weight:400}.step .accent[data-v-0b8731a7]{color:#16C8D2}.progress[data-v-0b8731a7]{height:1.2rem;width:90%;position:absolute;top:0;left:5%;overflow:hidden}.progress-bar[data-v-0b8731a7]{position:absolute;top:50%;left:0;transform:translate(0, -50%);height:0.08rem;border-radius:0.05333rem}.progress-empty[data-v-0b8731a7]{width:100%;background:#E6E6E6;height:0.02667rem}.progress-fill[data-v-0b8731a7]{background:#16C8D2}\n",""])},203:function(t,e,o){t.exports=o.p+"img/7fef1c0.png"},204:function(t,e,o){t.exports=o.p+"img/d6f907b.png"},205:function(t,e,o){t.exports=o.p+"img/31eeb1c.png"},206:function(t,e,o){t.exports=o.p+"img/6de9023.png"},207:function(t,e,o){t.exports=o.p+"img/344d247.png"},208:function(t,e,o){t.exports=o.p+"img/a2c329a.png"},209:function(t,e,o){"use strict";var n=o(191);o.n(n).a},210:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".wrapper[data-v-b2fea874]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.6);z-index:999}.content[data-v-b2fea874]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:inherit;height:inherit}.content-poster[data-v-b2fea874]{width:7.46667rem}.content-register[data-v-b2fea874]{position:relative}.content-register .register-button[data-v-b2fea874]{position:absolute;bottom:1.2rem;left:0.73333rem;width:6rem}.content-register .register-button-img[data-v-b2fea874]{width:6rem}.content-register .login-button[data-v-b2fea874]{position:absolute;bottom:0.66667rem;left:1.86667rem}.content-register .login-button-img[data-v-b2fea874]{width:3.73333rem}.content-close[data-v-b2fea874]{width:60%;text-align:right;margin-bottom:-0.10667rem}.content-close-img[data-v-b2fea874]{width:0.66667rem}\n",""])},211:function(t,e,o){"use strict";var n=o(192);o.n(n).a},212:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".top-step-bar{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content{padding:0 0.4rem}.page-content-content{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}.submit{text-align:center;width:100%;position:fixed;bottom:0.58667rem;left:0}.submit-text{margin:0.26667rem 0;color:#B2B2B2;font-size:0.32rem;padding:0 0.6rem}.submit-btn{display:inline-block;width:8.66667rem;line-height:1.33333rem;text-align:center;font-size:0.45333rem;color:#fff;background:#B2B2B2}.submit .accent{background:#16C8D2}\n",""])},219:function(t,e,o){"use strict";o.r(e),o.d(e,"API",function(){return n});var n={WX_SHARE:"/Mobile/JiXiongActivity/share",MY_BRUIN:"/Mobile/JiXiongActivity/my",BRUIN_PMD:"/Mobile/JiXiongActivity/pmd",GRAD_BRUIN:"/Mobile/JiXiongActivity/grab",BRUIN_LOGIN:"/Mobile/JiXiongActivity/login",ACTIVITY_DETAIL:"/Mobile/JiXiongActivity/detail"}},222:function(t,e,o){"use strict";o.r(e),o.d(e,"initWX",function(){return h}),o.d(e,"getWXCode",function(){return m});o(60),o(23),o(22),o(13),o(43);var n=o(25);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,o)}return e}var c=o(213);function h(t){return c.config(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach(function(e){Object(n.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},t,{debug:!1,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"]})),c}function m(t){var e={appid:"wx575385af6b09a6e0",redirect_uri:encodeURIComponent(t),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.appid,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"&state=1#wechat_redirect")}},253:function(t,e,o){t.exports=o.p+"img/791d285.png"},254:function(t,e,o){t.exports=o.p+"img/c8d8c61.png"},255:function(t,e,o){var content=o(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("af0bcf88",content,!0,{sourceMap:!1})},335:function(t,e,o){t.exports=o.p+"img/f77eb41.png"},359:function(t,e,o){t.exports=o.p+"img/19688b2.png"},360:function(t,e,o){t.exports=o.p+"img/28bec19.png"},361:function(t,e,o){t.exports=o.p+"img/b51cd42.png"},362:function(t,e,o){t.exports=o.p+"img/0c7d684.png"},363:function(t,e,o){t.exports=o.p+"img/ec36edf.png"},364:function(t,e,o){t.exports=o.p+"img/f58070d.png"},365:function(t,e,o){t.exports=o.p+"img/dc4ce71.png"},366:function(t,e,o){t.exports=o.p+"img/1f655cd.png"},367:function(t,e,o){t.exports=o.p+"img/27d1642.png"},368:function(t,e,o){t.exports=o.p+"img/b554b87.png"},369:function(t,e,o){"use strict";var n=o(255);o.n(n).a},370:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,'.home[data-v-f182d4f6]{overflow:auto;-webkit-overflow-scrolling:auto;width:100vw;height:19.93333rem}.home .home-background[data-v-f182d4f6]{width:100vw;height:19.93333rem;background:url("https://qn-static.landi.com/uploadtool9b81a286bff56fe0a012a2d881e92761.png");background-size:100%}.home .home-background .home-marquee[data-v-f182d4f6]{height:0.66667rem;width:100%;background:#000;opacity:0.5;font-size:0.37333rem;font-weight:400;color:#fff;text-align:center;padding-top:0.06667rem}.home .home-background .home-header[data-v-f182d4f6]{padding-top:0.49333rem;display:flex;align-items:center;justify-content:space-between}.home .home-background .home-header-ways[data-v-f182d4f6]{width:1.49333rem;height:0.94667rem}.home .home-background .home-header-check[data-v-f182d4f6]{width:1.33333rem;height:1.4rem;margin-left:5.06667rem}.home .home-background .home-header-right[data-v-f182d4f6]{display:flex;position:relative}.home .home-background .home-header-right-work[data-v-f182d4f6]{width:1.28rem;height:1.25333rem;margin-right:0.24rem}.home .home-background .home-header-right-times[data-v-f182d4f6]{width:0.4rem;height:0.4rem;background:#ff3600;border-radius:50%;font-weight:600;color:#fff;display:flex;align-items:center;justify-content:center;position:absolute;top:-0.08rem;right:0.26667rem}.home .home-background .home-pitch[data-v-f182d4f6]{margin-top:4.2rem;display:flex;justify-content:center;position:relative}.home .home-background .home-pitch-first[data-v-f182d4f6]{width:4.82667rem;height:1.38667rem}.home .home-background .home-pitch-first .hot[data-v-f182d4f6]{height:0.81333rem;width:0.56rem;position:absolute;top:-0.26667rem;left:0.8rem}.home .home-background .home-pitch-first-img[data-v-f182d4f6]{width:4.82667rem;height:1.38667rem}.home .home-background .home-pitch-second[data-v-f182d4f6]{width:4.82667rem;height:1.38667rem;position:relative}.home .home-background .home-pitch-second .hot[data-v-f182d4f6]{height:0.81333rem;width:0.56rem;position:absolute;top:-0.26667rem;left:0.53333rem}.home .home-background .home-pitch-second-img[data-v-f182d4f6]{width:4.82667rem;height:1.38667rem}.home .home-background .home-entrance[data-v-f182d4f6]{margin-top:0.6rem;display:flex;flex-direction:column;align-items:center}.home .home-background .home-entrance-new[data-v-f182d4f6]{width:8.4rem;height:3.21333rem}.home .home-background .home-entrance-new-img[data-v-f182d4f6]{width:8.4rem;height:3.21333rem}.home .home-background .home-entrance-invite[data-v-f182d4f6]{width:8.4rem;height:3.21333rem;position:relative}.home .home-background .home-entrance-invite-img[data-v-f182d4f6]{width:8.4rem;height:3.21333rem}.home .home-background .home-entrance-invite-num[data-v-f182d4f6]{display:flex;align-items:center;font-size:0.26667rem;color:#757575;position:absolute;bottom:0.4rem;left:4.13333rem}.home .home-background .home-entrance-invite-num-color[data-v-f182d4f6]{color:red}.home .home-background .home-entrance-renew[data-v-f182d4f6]{width:8.4rem;height:3.21333rem;position:relative}.home .home-background .home-entrance-renew-img[data-v-f182d4f6]{width:8.4rem;height:3.21333rem}.home .home-background .home-entrance-renew-finsh-img[data-v-f182d4f6]{width:1.2rem;height:1.2rem;position:absolute;right:0.50667rem;top:0.48rem}.home .home-background .home-entrance-renew-unfinsh-img[data-v-f182d4f6]{width:1.2rem;height:1.2rem;position:absolute;right:0.50667rem;top:0.48rem}.home .home-background .home-entrance2[data-v-f182d4f6]{margin-top:0.6rem;display:flex;flex-direction:column;align-items:center}.home .home-background .home-entrance2-coin[data-v-f182d4f6]{width:8.4rem;height:3.21333rem}.home .home-background .home-entrance2-coin-img[data-v-f182d4f6]{width:8.4rem;height:3.21333rem}.home .home-background .home-entrance2-gua[data-v-f182d4f6]{width:8.4rem;height:3.21333rem;position:relative}.home .home-background .home-entrance2-gua-img[data-v-f182d4f6]{width:8.4rem;height:3.21333rem}.sharehelp[data-v-f182d4f6]{position:fixed;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,0.8)}.sharehelp-img[data-v-f182d4f6]{width:7.2rem;position:fixed;left:1.8rem;top:0}\n',""])},570:function(t,e,o){"use strict";o.r(e);o(42),o(73),o(40);var n=o(5),r=o(219),c=o(180),h=o(187),m=o(222),d=(o(111),o(110),o(108),o(57),o(220)),l=o(221),f=function(){function t(){Object(d.a)(this,t)}var e;return Object(l.a)(t,[{key:"autoLogin",value:(e=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!w()){t.next=6;break}return t.next=4,v();case 4:return e=t.sent,t.abrupt("return",e);case 6:case"end":return t.stop()}},t)})),function(){return e.apply(this,arguments)})},{key:"login",value:function(){}},{key:"register",value:function(){}}]),t}();function v(){var code=(e=new RegExp("(^|&)"+"code"+"=([^&]*)(&|$)","i"),null!=(o=window.location.search.substr(1).match(e))?unescape(o[2]):null);if(!code){var t={appid:"wx575385af6b09a6e0",redirect_uri:encodeURIComponent(window.location.href),response_type:"code",scope:"snsapi_base"};window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(t.appid,"&redirect_uri=").concat(t.redirect_uri,"&response_type=").concat(t.response_type,"&scope=").concat(t.scope,"&state=1#wechat_redirect"))}console.log(code);var e,o,n={code:code};c.a.get("/Mobile/JiXiongActivity/login",{params:n}).then(function(t){console.log("code登录",t)}).catch(function(t){console.log("错误",t)})}function w(){var t=!1;return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(t=!0),t}var x,_,y,k,C,B;o(200);function A(t,e){var o=e.split("?")[0],n=[],r=-1!==e.indexOf("?")?e.split("?")[1]:"";if(""!==r){for(var i=(n=r.split("&")).length-1;i>=0;i-=1)n[i].split("=")[0]===t&&n.splice(i,1);o=o+"?"+n.join("&")}return o}var j={name:"home",head:function(){return{title:"集五熊，赢千万课时"}},data:function(){return{showShareHelp:!1,pmdInfo:"",activityData:{is_enable:!0,id:1,name:"",start_time:"",end_time:"",is_buy:!1,invite_num:0},curAwardBruinNum:0,isBuy:!1,firstChoose:!1,chooseButton:!1,isAllBruin:!1}},components:{toast:h.a},methods:{goToRule:function(){window.location="".concat("https://www.landi.com/static-web/mobile","/bruin/rule/")},goToMyBruin:function(){window.location="".concat("https://www.landi.com/static-web/mobile","/bruin/my_bruin/")},inviteAction:function(){this.showShareHelp=!0},wxShare:(B=Object(n.a)(regeneratorRuntime.mark(function t(){var e,o,n,h,d,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e={activity_id:1,url:window.location.href.split("#")[0]},t.next=4,c.a.post(r.API.WX_SHARE,e);case 4:if((o=t.sent).status){t.next=10;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(o.info),console.log(o.info),t.abrupt("return");case 10:n=o.data.wx_config,h=o.data.wx_data,d=Object(m.initWX)({appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature}),l={title:h.share_title,desc:h.share_desc,link:h.share_link,imgUrl:h.share_img_url},console.log(l),d.ready(function(){d.updateAppMessageShareData(l),d.updateTimelineShareData(l),d.onMenuShareAppMessage(l),d.onMenuShareTimeline(l),d.error(function(t){console.log(t)})}),t.next=22;break;case 18:return t.prev=18,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return");case 22:case"end":return t.stop()}},t,this,[[0,18]])})),function(){return B.apply(this,arguments)}),getBruinPMD:(C=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=4,c.a.get("".concat(r.API.BRUIN_PMD,"?activity_id=").concat(1));case 4:if((e=t.sent).status){t.next=8;break}return console.log(e.info),t.abrupt("return");case 8:this.pmdInfo=e.data||"0人已集齐，2019年1月1日18：00开奖",t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log(res),t.abrupt("return");case 15:case"end":return t.stop()}},t,this,[[0,11]])})),function(){return C.apply(this,arguments)}),gotoLoginRegister:(k=Object(n.a)(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=A("code",e=window.location.href),e=A("state",e),e=encodeURIComponent(e),o="https://www.landi.com//mobile/login/index/#/login?redirect_url="+e,window.location=o;case 6:case"end":return t.stop()}},t)})),function(){return k.apply(this,arguments)}),getActivityDetail:(y=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=4,c.a.get("".concat(r.API.ACTIVITY_DETAIL,"?activity_id=").concat(1));case 4:if((e=t.sent).status){t.next=8;break}return console.log(e.info),t.abrupt("return");case 8:this.activityData={is_enable:e.data.is_enable||"",id:e.data.id||1,name:e.data.name||"",start_time:e.data.start_time||"",end_time:e.data.end_time||"",is_buy:e.data.is_buy||!1,invite_num:e.data.invite_num||0},localStorage.getItem("firstChoose")?this.firstChoose=!1:(this.firstChoose=!0,localStorage.setItem("firstChoose",!0)),t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return");case 17:case"end":return t.stop()}},t,this,[[0,13]])})),function(){return y.apply(this,arguments)}),getMyBruinData:(_=Object(n.a)(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,c.a.get("".concat(r.API.MY_BRUIN,"?activity_id=").concat(1));case 4:if((e=t.sent).status){t.next=8;break}return console.log(e.info),t.abrupt("return");case 8:this.curAwardBruinNum=e.data?e.data.lucky_num:0,o=!0,e.data&&e.data.cards&&e.data.cards.forEach(function(element){0==element.num&&(o=!1)}),o&&(this.isAllBruin=!0),t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(1),console.log(t.t0),t.abrupt("return");case 18:case"end":return t.stop()}},t,this,[[1,14]])})),function(){return _.apply(this,arguments)}),cutButton:function(t){this.chooseButton="first"===t},goToCoin:function(){window.location="http://www.landi.com/Mobile/PointMall/index?type=2&item=actbear05"},goToGua:function(){window.location="http://www.landi.com/Mobile/PointMall/toActivity?act=ggl"},checkAward:function(){this.$refs.toast.showToast("2020年1月1日 18:00开奖")}},created:function(){(new f).autoLogin()},mounted:(x=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=4,c.a.get("".concat(r.API.BRUIN_PMD,"?activity_id=").concat(1));case 4:if((e=t.sent).status){t.next=8;break}return console.log(e.info),t.abrupt("return");case 8:this.pmdInfo=e.data||"0人已集齐，2019年1月1日18：00开奖",this.wxShare(),this.getActivityDetail(),this.getMyBruinData(),this.$refs.toast.hideLoadingToast(),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0),401===t.t0.response.status&&(this.gotoLoginRegister(),console.log(t.t0.response.info));case 19:case"end":return t.stop()}},t,this,[[0,15]])})),function(){return x.apply(this,arguments)})},M=(o(369),o(19)),component=Object(M.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"home-background"},[n("div",{staticClass:"home-marquee"},[t._v(t._s(t.pmdInfo))]),t._v(" "),n("div",{staticClass:"home-header"},[n("img",{staticClass:"home-header-ways",attrs:{src:o(253)},on:{click:t.goToRule}}),t._v(" "),n("div",{staticClass:"home-header-right"},[n("img",{staticClass:"home-header-right-work",attrs:{src:o(254)},on:{click:t.goToMyBruin}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.curAwardBruinNum,expression:"curAwardBruinNum == 0 ? false : true"}],staticClass:"home-header-right-times"},[n("div",[t._v(t._s(t.curAwardBruinNum))])])])]),t._v(" "),n("div",{staticClass:"home-pitch"},[n("div",{staticClass:"home-pitch-first",on:{click:function(e){return t.cutButton("first")}}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.chooseButton,expression:"chooseButton"}],staticClass:"hot",attrs:{src:o(335)}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.chooseButton,expression:"chooseButton"}],staticClass:"home-pitch-first-img",attrs:{src:o(359)}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.chooseButton,expression:"!chooseButton"}],staticClass:"home-pitch-first-img",attrs:{src:o(360)}})]),t._v(" "),n("div",{staticClass:"home-pitch-second",on:{click:function(e){return t.cutButton("second")}}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.chooseButton,expression:"chooseButton"}],staticClass:"home-pitch-second-img",attrs:{src:o(361)}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.chooseButton,expression:"!chooseButton"}],staticClass:"hot",attrs:{src:o(335)}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.chooseButton,expression:"!chooseButton"}],staticClass:"home-pitch-second-img",attrs:{src:o(362)}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.chooseButton,expression:"chooseButton"}],staticClass:"home-entrance"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.firstChoose,expression:"firstChoose"}],staticClass:"home-entrance-new",on:{click:t.goToMyBruin}},[n("img",{staticClass:"home-entrance-new-img",attrs:{src:o(363)}})]),t._v(" "),n("div",{staticClass:"home-entrance-invite",on:{click:t.inviteAction}},[n("img",{staticClass:"home-entrance-invite-img",attrs:{src:o(364)}}),t._v(" "),n("div",{staticClass:"home-entrance-invite-num"},[n("div",[t._v("已邀请")]),t._v(" "),n("div",{staticClass:"home-entrance-invite-num-color"},[t._v(t._s(t.activityData.invite_num))]),t._v(" "),n("div",[t._v("人")])])]),t._v(" "),n("div",{staticClass:"home-entrance-renew"},[n("img",{staticClass:"home-entrance-renew-img",attrs:{src:o(365)}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!!t.activityData.is_buy,expression:"activityData.is_buy ? true : false"}],staticClass:"home-entrance-renew-finsh-img",attrs:{src:o(366)}}),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.activityData.is_buy,expression:"activityData.is_buy ? false : true"}],staticClass:"home-entrance-renew-unfinsh-img",attrs:{src:o(367)}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.chooseButton,expression:"!chooseButton"}],staticClass:"home-entrance2"},[n("div",{staticClass:"home-entrance2-coin",on:{click:t.goToCoin}},[n("img",{staticClass:"home-entrance2-coin-img",attrs:{src:"https://qn-static.landi.com/uploadtoolb03cbde0945a6bffda545ca618ef08cd.png"}})]),t._v(" "),n("div",{staticClass:"home-entrance2-gua",on:{click:t.goToGua}},[n("img",{staticClass:"home-entrance2-gua-img",attrs:{src:"https://qn-static.landi.com/uploadtool420501adee55e23d7b01f9fac22a6105.png"}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showShareHelp,expression:"showShareHelp"}],staticClass:"sharehelp",on:{click:function(){t.showShareHelp=!1}}},[n("img",{staticClass:"sharehelp-img",attrs:{src:o(368)}})]),t._v(" "),n("toast",{ref:"toast"})],1)])},[],!1,null,"f182d4f6",null);e.default=component.exports}}]);