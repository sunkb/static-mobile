(window.webpackJsonp=window.webpackJsonp||[]).push([[21,18,20],{180:function(t,e,n){"use strict";n(13),n(57),n(73);var r=n(74),o=n.n(r),c=n(183),d=n.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var l=o.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return d.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});l.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),l.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=l},181:function(t,e,n){var content=n(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("08a709fc",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},187:function(t,e,n){"use strict";var r={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1,queue:[]}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.show?this.queue.push({text:text,mask:mask,timeout:e,position:n}):(this.queue.shift(),this.text=text,this.mask=mask,this.position=n,this.show=!0,setTimeout(function(){t.show=!1,t.queue.length>0&&t.showToast(t.queue[0].text,t.queue[0].mask,t.queue[0].timeout,t.queue[0].position)},e))},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},o=(n(188),n(19)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toasttrs"}},[t.show?n("div",[t.mask?n("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),n("div",{staticClass:"toast-content",style:t.position},[t.loading?n("svg",{staticClass:"toast-content-loading",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"toast-content-loading",attrs:{cx:"50",cy:"50",r:"20"}})]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?n("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?n("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},188:function(t,e,n){"use strict";var r=n(181);n.n(r).a},189:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:30%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;flex-direction:column}.toast-content-div{height:0.13333rem}.toast-content-loading{width:1.06667rem;transform-origin:center;animation:rotate 2s linear infinite;position:relative}.toast-content-loading circle{fill:none;stroke:#fff;stroke-width:4;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-25px}100%{stroke-dashoffset:-125px}}\n",""])},219:function(t,e,n){"use strict";n.r(e),n.d(e,"API",function(){return r});var r={WX_SHARE:"/Mobile/JiXiongActivity/share",MY_BRUIN:"/Mobile/JiXiongActivity/my",BRUIN_PMD:"/Mobile/JiXiongActivity/pmd",GRAD_BRUIN:"/Mobile/JiXiongActivity/grab",BRUIN_LOGIN:"/Mobile/JiXiongActivity/login",ACTIVITY_DETAIL:"/Mobile/JiXiongActivity/detail"}},223:function(t,e,n){var content=n(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("c3cd6d98",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("e5b6d910",content,!0,{sourceMap:!1})},252:function(t,e,n){t.exports=n.p+"img/791d285.png"},256:function(t,e,n){"use strict";var r=n(223);n.n(r).a},257:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,'.slide-pages[data-v-07b25016]{position:absolute;bottom:0.26667rem;right:0.4rem}.slide-pages li[data-v-07b25016]{display:inline-block;height:0.24rem}.slide-pages li a[data-v-07b25016]{display:block;width:0.08rem;height:0.08rem;margin:0 0.06667rem;border:2px solid #fff;border-color:rgba(255,255,255,0.3);border-radius:0.13333rem;text-align:left;text-indent:-133.32rem;overflow:hidden;_zoom:1;background:#f5f5f5;background:rgba(0,0,0,0.4);-webkit-transition:all .2s;transition:all .2s}.slide-pages li a.active[data-v-07b25016]{background:#fff;background:rgba(255,255,255,0.4);border-color:#757575;border-color:rgba(0,0,0,0.4)}.control-wrapper a[data-v-07b25016]{display:inline-block;position:absolute;top:50%;width:0.54667rem;height:0.92rem;transform:translateY(-50%)}.prev[data-v-07b25016]{left:0;background:url("http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -1.12rem 50%}.prev[data-v-07b25016]:hover{background-position:0 50%}.next[data-v-07b25016]{right:0;display:inline-block;background:url(//c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -1.66667rem 50%}.next[data-v-07b25016]:hover{background-position:-0.56rem 50%}.slide-show[data-v-07b25016]{position:relative;overflow:hidden}.slide-ul[data-v-07b25016]{width:100%;height:100%}.slide-ul li[data-v-07b25016]{position:absolute;width:100%;height:100%}.slide-ul li img[data-v-07b25016]{width:100%;height:100%}.move-enter-active[data-v-07b25016]{transition:all 0.5s ease;transform:translateX(0)}.move-leave-active[data-v-07b25016]{transition:all 0.5s ease;transform:translateX(-100%)}.move-enter[data-v-07b25016]{transform:translateX(100%)}.move-leave[data-v-07b25016]{transform:translateX(0)}.fade-enter-active[data-v-07b25016],.fade-leave-active[data-v-07b25016]{transition:opacity .5s}.fade-enter[data-v-07b25016],.fade-leave-active[data-v-07b25016]{opacity:0}\n',""])},258:function(t,e,n){"use strict";var r=n(224);n.n(r).a},259:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,'.abstract[data-v-2f89574c]{overflow:auto;-webkit-overflow-scrolling:auto;width:100vw;height:100vh;position:relative}.abstract-background[data-v-2f89574c]{width:100vw;height:100vh;background:black;opacity:0.4;position:fixed;top:0;z-index:100}.abstract-stage[data-v-2f89574c]{width:7.89333rem;height:10.66667rem;background:url("https://qn-static.landi.com/uploadtool43e9e7eef83e79229aec4f7f0b62a0bf.png") no-repeat;background-size:100%;position:fixed;top:1.74667rem;left:50%;margin-left:-3.94667rem;z-index:1000}.abstract-stage-name[data-v-2f89574c]{width:4.05333rem;height:0.77333rem;position:absolute;left:50%;margin-left:-2.02667rem;top:0.26667rem}.abstract-stage-name-img[data-v-2f89574c]{width:4.05333rem;height:0.77333rem}.abstract-stage-swipe[data-v-2f89574c]{width:7.89333rem;height:4rem;position:absolute;top:3.33333rem;z-index:2000;display:flex;justify-content:center}.abstract-stage-swipe-div[data-v-2f89574c]{width:3.28rem;height:5.06667rem}.abstract-stage-button[data-v-2f89574c]{width:4.18667rem;height:1.32rem;background:#ff7e7e;box-shadow:0 0.13333rem 0 0 #b84747;border-radius:0.32rem;position:absolute;bottom:0.58667rem;left:50%;margin-left:-2.09333rem;display:flex;justify-content:center;align-items:center;z-index:3000}.abstract-stage-button-content[data-v-2f89574c]{font-size:0.58667rem;font-family:PingFang SC;font-weight:600;color:#fff;line-height:0.32rem}.abstract-stage-result[data-v-2f89574c]{width:3.56rem;height:4.61333rem;z-index:40000;position:absolute;left:50%;margin-left:-1.8rem;top:2.4rem}.abstract-stage-result-img[data-v-2f89574c]{width:3.56rem;height:4.61333rem}@keyframes fade-in-data-v-2f89574c{0%{opacity:0}40%{opacity:0}100%{opacity:1}}@-webkit-keyframes fade-in-data-v-2f89574c{0%{opacity:0}40%{opacity:0}100%{opacity:1}}.wrapper[data-v-2f89574c]{animation:fade-in-data-v-2f89574c;animation-duration:2s;-webkit-animation:fade-in-data-v-2f89574c 2s}\n',""])},260:function(t,e,n){var content=n(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("541ace20",content,!0,{sourceMap:!1})},346:function(t,e,n){"use strict";n.r(e);n(40);var r,o=n(5),c=n(25),d=(n(186),{props:{slides:{type:Array,default:[]},inv:{type:Number,default:1e3},name:{type:String,default:"move"},target:{type:String,default:"_blank"}},data:function(){return{nowIndex:0,invId:null}},computed:{prevIndex:function(){return 0===this.nowIndex?this.slides.length-1:this.nowIndex-1},nextIndex:function(){return this.nowIndex===this.slides.length-1?0:this.nowIndex+1}},methods:{goto:function(t){this.nowIndex=t},runInv:function(){var t=this;this.invId=setInterval(function(){t.goto(t.nextIndex)},this.inv)},clearInv:function(){clearInterval(this.invId)}},watch:{inv:function(t){var e=this;this.clearInv(),this.invId=setInterval(function(){e.goto(e.nextIndex)},t)}},mounted:function(){this.runInv()}}),l=(n(256),n(19)),m=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide-show"},[n("transition-group",{staticClass:"slide-ul",attrs:{tag:"ul",name:t.name}},t._l(t.slides,function(e,r){return n("li",{directives:[{name:"show",rawName:"v-show",value:r===t.nowIndex,expression:"index===nowIndex"}],key:r+1},[n("div",{staticClass:"slide-div"},[n("img",{staticStyle:{"background-size":"100%"},attrs:{src:e.src,alt:""}})])])}),0),t._v(" "),n("ul",{staticClass:"slide-pages",staticStyle:{display:"none"}},t._l(t.slides,function(e,r){return n("li",{staticClass:"slide-page-point",on:{click:function(e){return t.goto(r)}}},[n("a",{class:{active:r===t.nowIndex}},[t._v(t._s(r+1))])])}),0),t._v(" "),n("div",{staticClass:"control-wrapper",staticStyle:{display:"none"}},[n("a",{staticClass:"prev",on:{click:function(e){return t.goto(t.prevIndex)}}}),t._v(" "),n("a",{staticClass:"next",on:{click:function(e){return t.goto(t.nextIndex)}}})])],1)},[],!1,null,"07b25016",null).exports,f=n(219),h=n(180),v=(n(248),{name:"abstract",props:{abstractShow:{type:Boolean,default:!1}},data:function(){var t;return t={isShowIndicators:!1,swipeTime:300,swipeObj:null,timeParam:1,nameAndButtonShow:!1,slides:[{src:"https://qn-static.landi.com/uploadtool4f6c2142f18d9a0feccacbd73c7c1ed0.png"},{src:"https://qn-static.landi.com/uploadtool98d52df665c24b5e29b8bb1e030af934.png"},{src:"https://qn-static.landi.com/uploadtoolcdb18852e43ed742d245e496dca2483e.png"},{src:"https://qn-static.landi.com/uploadtool57cfdb371c7f82c0fd3d6319ca52eb3f.png"},{src:"https://qn-static.landi.com/uploadtool6425ca67c5dc62ee4c4cc80a0267cd29.png"}],bruinName:[{src:"https://qn-static.landi.com/uploadtoolb9c1ec278872b7404fc6a66e02b40a7d.png"},{src:"https://qn-static.landi.com/uploadtool35f628547667cc5bc6b418c807682b02.png"},{src:"https://qn-static.landi.com/uploadtool8bdd328f9c8a7cdb33d4ee74713e4bdf.png"},{src:"https://qn-static.landi.com/uploadtool52d8102aa7e04b6048d155eff313c2f8.png"},{src:"https://qn-static.landi.com/uploadtool570e028a322ed1035d954d79bd197518.png"}],bruinResult:[{src:"https://qn-static.landi.com/uploadtoolf1c9c56c723ca8b49ac30e9d91f363fc.png"},{src:"https://qn-static.landi.com/uploadtool2e783b008fb670950ac337f8439512b0.png"},{src:"https://qn-static.landi.com/uploadtool9e4f71ef5a28b872315dc775cdd2a7af.png"},{src:"https://qn-static.landi.com/uploadtoolc6d0c31facd904eef2bb2dec5c99faaa.png"},{src:"https://qn-static.landi.com/uploadtool0abba42258b5d7a7cf89eaf7d98603e3.png"}],transitionName1:"move",target:"_blank"},Object(c.a)(t,"swipeObj",null),Object(c.a)(t,"awardBruinNumber",1),t},components:{slide:m},created:function(){},mounted:function(){this.swipeTime=180,this.timeParam=1},methods:{cancelShow:function(){this.swipeTime=300,this.timeParam=1,this.nameAndButtonShow=!1,this.$emit("fcancelShow")}},watch:{abstractShow:(r=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=19;break}return this.swipeObj=setTimeout(function(){r.swipeTime=3e6,r.nameAndButtonShow=!0},4e3),t.prev=2,t.next=6,h.a.post(f.API.GRAD_BRUIN,{activity_id:1});case 6:if((n=t.sent).status){t.next=10;break}return console.log(n.info),t.abrupt("return");case 10:this.awardBruinNumber=n.data,t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(2),console.log(t.t0),t.abrupt("return");case 17:t.next=22;break;case 19:this.swipeTime=300,this.timeParam=1,this.nameAndButtonShow=!1;case 22:case"end":return t.stop()}},t,this,[[2,13]])})),function(t){return r.apply(this,arguments)})}}),w=(n(258),Object(l.a)(v,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.abstractShow,expression:"abstractShow"}],staticClass:"abstract"},[n("div",{staticClass:"abstract-background"}),t._v(" "),n("div",{staticClass:"abstract-stage"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.nameAndButtonShow,expression:"nameAndButtonShow"}],class:t.abstractShow?"abstract-stage-name wrapper":"abstract-stage-name"},[n("img",{staticClass:"abstract-stage-name-img",attrs:{src:t.bruinName[t.awardBruinNumber-1].src}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.nameAndButtonShow,expression:"!nameAndButtonShow"}],class:t.abstractShow?"abstract-stage-swipe":"abstract-stage-swipe wrapper"},[n("slide",{staticClass:"abstract-stage-swipe-div",attrs:{slides:t.slides,inv:t.swipeTime,name:t.transitionName1,target:t.target}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.nameAndButtonShow,expression:"nameAndButtonShow"}],class:t.abstractShow?"abstract-stage-result wrapper":"abstract-stage-result"},[n("img",{staticClass:"abstract-stage-result-img",attrs:{src:t.bruinResult[t.awardBruinNumber-1].src}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.nameAndButtonShow,expression:"nameAndButtonShow"}],staticClass:"abstract-stage-button",class:t.abstractShow?"abstract-stage-button-content wrapper":"abstract-stage-button-content",on:{click:t.cancelShow}},[n("div",[t._v("放入熊库")])])])])},[],!1,null,"2f89574c",null));e.default=w.exports},370:function(t,e,n){t.exports=n.p+"img/7dda827.png"},371:function(t,e,n){t.exports=n.p+"img/03b9a1e.png"},373:function(t,e,n){"use strict";var r=n(260);n.n(r).a},374:function(t,e,n){e=t.exports=n(38)(!1);var r=n(182),o=r(n(375)),c=r(n(376)),d=r(n(377)),l=r(n(378)),m=r(n(379)),f=r(n(380)),h=r(n(381)),v=r(n(382)),w=r(n(383)),k=r(n(384)),x=r(n(385)),y=r(n(386)),_=r(n(387)),C=r(n(388)),z=r(n(389)),I=r(n(390));e.push([t.i,'.top-step-bar[data-v-02664268]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-02664268]{padding:0 0.4rem}.page-content-content[data-v-02664268]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-02664268]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-02664268]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#bruin[data-v-02664268]{overflow:auto;-webkit-overflow-scrolling:auto;width:100vw;height:27.49333rem}#bruin .bruin-background[data-v-02664268]{background:url("https://qn-static.landi.com/uploadtoolbf48b4285e482a65331d63a35874cd7b.png") no-repeat;background-size:100%;width:100vw;height:27.49333rem}#bruin .bruin-background .bruin-marquee[data-v-02664268]{height:0.66667rem;width:100%;background:#000;opacity:0.5;font-size:0.37333rem;font-weight:400;color:#fff;text-align:center;padding-top:0.06667rem}#bruin .bruin-background .bruin-header[data-v-02664268]{padding-top:0.49333rem;display:flex;align-items:center;justify-content:space-between}#bruin .bruin-background .bruin-header-ways[data-v-02664268]{width:1.49333rem;height:0.94667rem}#bruin .bruin-background .bruin-header-work[data-v-02664268]{width:1.28rem;height:1.25333rem;margin-right:0.24rem}#bruin .bruin-background .bruin-first[data-v-02664268]{margin-top:0.18667rem;padding-left:0.42667rem;display:flex}#bruin .bruin-background .bruin-first .bruin-first-div[data-v-02664268]{width:3.02667rem;height:4.41333rem;position:relative}#bruin .bruin-background .bruin-first .bruin-first-div .bruin-first-name[data-v-02664268]{position:absolute;bottom:0.13333rem;left:50%;margin-left:-0.77333rem}#bruin .bruin-background .bruin-first .bruin-first-div .bruin-first-name-content[data-v-02664268]{text-align:center;width:1.65333rem;font-size:0.34667rem;font-family:PingFang SC;font-weight:600;color:#ffeba7;line-height:0.32rem}#bruin .bruin-background .bruin-first .bruin-first-div .bruin-first-name-content1[data-v-02664268]{text-align:center;width:1.65333rem;font-size:0.34667rem;font-family:PingFang SC;font-weight:600;color:#822ab4;line-height:0.32rem}#bruin .bruin-background .bruin-first .bruin-first-div .bruin-first-img[data-v-02664268]{width:3.02667rem;height:4.41333rem}#bruin .bruin-background .bruin-first .bruin-first-div .bruin-first-view[data-v-02664268]{width:2.33333rem;height:3.30667rem;position:absolute;top:0.4rem;left:50%;margin-left:-1.16rem}#bruin .bruin-background .bruin-first .bruin-first-div .bruin-first-own-light[data-v-02664268]{width:3.04rem;height:4.53333rem;position:absolute;top:0;left:0}#bruin .bruin-background .bruin-second[data-v-02664268]{margin-top:0.48rem;display:flex;justify-content:center}#bruin .bruin-background .bruin-second .bruin-second-div[data-v-02664268]{width:3.02667rem;height:4.41333rem;position:relative}#bruin .bruin-background .bruin-second .bruin-second-div .bruin-second-name[data-v-02664268]{position:absolute;bottom:0.13333rem;left:50%;margin-left:-0.77333rem}#bruin .bruin-background .bruin-second .bruin-second-div .bruin-second-name-content[data-v-02664268]{text-align:center;width:1.65333rem;font-size:0.34667rem;font-family:PingFang SC;font-weight:600;color:#ffeba7;line-height:0.32rem}#bruin .bruin-background .bruin-second .bruin-second-div .bruin-second-name-content1[data-v-02664268]{text-align:center;width:1.65333rem;font-size:0.34667rem;font-family:PingFang SC;font-weight:600;color:#822ab4;line-height:0.32rem}#bruin .bruin-background .bruin-second .bruin-second-div .bruin-second-img[data-v-02664268]{width:3.02667rem;height:4.41333rem}#bruin .bruin-background .bruin-second .bruin-second-div .bruin-second-view[data-v-02664268]{width:2.33333rem;height:3.30667rem;position:absolute;top:0.4rem;left:50%;margin-left:-1.16rem}#bruin .bruin-background .bruin-second .bruin-second-div .bruin-second-own-light[data-v-02664268]{width:3.04rem;height:4.53333rem;position:absolute;top:0;left:0}#bruin .bruin-background .button-div[data-v-02664268]{display:flex;margin-top:1.6rem;justify-content:center;position:relative}#bruin .bruin-background .button-div .button-div-first[data-v-02664268]{width:4.18667rem;height:1.46667rem;margin-right:0.4rem;display:flex;align-items:center;justify-content:center}#bruin .bruin-background .button-div .button-div-first-content[data-v-02664268]{width:4.18667rem;height:1.46667rem;background:url("https://qn-static.landi.com/uploadtool6187279bc8421bac5aa6da1c706a87b8.png") no-repeat;background-size:100%;display:flex;align-items:center;justify-content:center}#bruin .bruin-background .button-div .button-div-first-content-name[data-v-02664268]{font-size:0.58667rem;font-weight:600;color:#fff}#bruin .bruin-background .button-div .button-div-first-open[data-v-02664268]{width:4.18667rem;height:1.46667rem;background:url("https://qn-static.landi.com/uploadtool58e8e59ece8939ea1acd4a468e6425d2.png") no-repeat;background-size:100%}#bruin .bruin-background .button-div .button-div-second[data-v-02664268]{width:4.18667rem;height:1.32rem;background:#ff7e7e;box-shadow:0 0.13333rem 0 0 #b84747;border-radius:0.32rem;display:flex;align-items:center;justify-content:center}#bruin .bruin-background .button-div .button-div-second-content[data-v-02664268]{display:flex;align-items:center;justify-content:center}#bruin .bruin-background .button-div .button-div-second-content-name[data-v-02664268]{font-size:0.58667rem;font-weight:600;color:#fff}#bruin .bruin-background .button-div .abstract-time[data-v-02664268]{width:2.88rem;height:0.86667rem;position:absolute;top:-0.84rem;right:0.4rem;background:url('+o+") no-repeat;background-size:100%}#bruin .bruin-background .button-div .abstract-time-div[data-v-02664268]{display:flex;align-items:center;justify-content:center;font-size:0.37333rem;font-weight:600;color:#7d7d7d;margin-top:0.08rem}#bruin .bruin-background .button-div .abstract-time-div-content[data-v-02664268]{font-size:0.37333rem;font-weight:600;color:red;text-align:center}#bruin .bruin-background .button-div .abstract-time-div-content1[data-v-02664268]{font-size:0.37333rem;font-weight:600;color:green;text-align:center}#bruin .bruin-background .rule-content[data-v-02664268]{width:9.09333rem;height:10.33333rem;margin:0 auto;margin-top:0.94667rem;position:relative}#bruin .bruin-background .rule-content .rule-content-img[data-v-02664268]{width:9.09333rem;height:10.33333rem}#bruin .bruin-background .rule-content .rule-content-button[data-v-02664268]{position:absolute;width:3.92rem;height:0.37333rem;bottom:0.66667rem;right:0.53333rem}#bruin-keys1[data-v-02664268]{animation-name:rainbow1-data-v-02664268;animation-duration:1s;animation-iteration-count:infinite;width:2.62667rem;height:3.04rem;position:absolute;top:0.53333rem;left:0.13333rem;background-size:100%;background-repeat:no-repeat}#bruin-keys2[data-v-02664268]{animation-name:rainbow2-data-v-02664268;animation-duration:1s;animation-iteration-count:infinite;width:2.62667rem;height:3.04rem;position:absolute;top:0.53333rem;left:0.13333rem;background-size:100%;background-repeat:no-repeat}#bruin-keys3[data-v-02664268]{animation-name:rainbow3-data-v-02664268;animation-duration:1s;animation-iteration-count:infinite;width:2.62667rem;height:3.04rem;position:absolute;top:0.53333rem;left:0.13333rem;background-size:100%;background-repeat:no-repeat}#bruin-keys4[data-v-02664268]{animation-name:rainbow4-data-v-02664268;animation-duration:1s;animation-iteration-count:infinite;width:2.62667rem;height:3.04rem;position:absolute;top:0.53333rem;left:0.13333rem;background-size:100%;background-repeat:no-repeat}#bruin-keys5[data-v-02664268]{animation-name:rainbow5-data-v-02664268;animation-duration:0.75s;animation-iteration-count:infinite;width:2.62667rem;height:3.04rem;position:absolute;top:0.53333rem;left:0.13333rem;background-size:100%;background-repeat:no-repeat}@keyframes rainbow1-data-v-02664268{0%{background:url("+c+");background-size:100%}25%{background:url("+d+");background-size:100%}50%{background:url("+l+");background-size:100%}75%{background:url("+d+");background-size:100%}100%{background:url("+c+");background-size:100%}}@keyframes rainbow2-data-v-02664268{0%{background:url("+m+");background-size:100%}25%{background:url("+f+");background-size:100%}50%{background:url("+h+");background-size:100%}75%{background:url("+f+");background-size:100%}100%{background:url("+m+");background-size:100%}}@keyframes rainbow3-data-v-02664268{0%{background:url("+v+");background-size:100%}25%{background:url("+w+");background-size:100%}50%{background:url("+k+");background-size:100%}75%{background:url("+w+");background-size:100%}100%{background:url("+v+");background-size:100%}}@keyframes rainbow4-data-v-02664268{0%{background:url("+x+");background-size:100%}25%{background:url("+y+");background-size:100%}50%{background:url("+_+");background-size:100%}75%{background:url("+y+");background-size:100%}100%{background:url("+x+");background-size:100%}}@keyframes rainbow5-data-v-02664268{0%{background:url("+C+");background-size:100%}25%{background:url("+z+");background-size:100%}50%{background:url("+I+");background-size:100%}75%{background:url("+z+");background-size:100%}100%{background:url("+C+");background-size:100%}}\n",""])},375:function(t,e,n){t.exports=n.p+"img/da55c2e.png"},376:function(t,e,n){t.exports=n.p+"img/149c6eb.png"},377:function(t,e,n){t.exports=n.p+"img/edd7a1b.png"},378:function(t,e,n){t.exports=n.p+"img/e78e305.png"},379:function(t,e,n){t.exports=n.p+"img/bd9b667.png"},380:function(t,e,n){t.exports=n.p+"img/1c4d5e2.png"},381:function(t,e,n){t.exports=n.p+"img/31a001c.png"},382:function(t,e,n){t.exports=n.p+"img/873b9e2.png"},383:function(t,e,n){t.exports=n.p+"img/b90b102.png"},384:function(t,e,n){t.exports=n.p+"img/eb473cd.png"},385:function(t,e,n){t.exports=n.p+"img/7c3393d.png"},386:function(t,e,n){t.exports=n.p+"img/57efd8d.png"},387:function(t,e,n){t.exports=n.p+"img/bcf641a.png"},388:function(t,e,n){t.exports=n.p+"img/ce4a8cb.png"},389:function(t,e,n){t.exports=n.p+"img/03523d9.png"},390:function(t,e,n){t.exports=n.p+"img/4bc0b04.png"},591:function(t,e,n){"use strict";n.r(e);n(186),n(40);var r,o,c,d=n(5),l=n(346),m=n(219),f=n(180),h=n(187),v={name:"myBruin",head:function(){return{title:"集五熊，赢千万课时"}},data:function(){return{firstDiv:[{card_no:1,num:0,name:"乐学熊"},{card_no:2,num:0,name:"聪慧熊"},{card_no:3,num:0,name:"健康熊"}],secondDiv:[{card_no:4,num:0,name:"勤奋熊"},{card_no:5,num:0,name:"勇敢熊"}],abstractShow:!1,awardChange:0,pmdInfo:"",slidesView:[{src:"https://qn-static.landi.com/uploadtoolcdb18852e43ed742d245e496dca2483e.png"},{src:"https://qn-static.landi.com/uploadtool4f6c2142f18d9a0feccacbd73c7c1ed0.png"},{src:"https://qn-static.landi.com/uploadtool98d52df665c24b5e29b8bb1e030af934.png"},{src:"https://qn-static.landi.com/uploadtool57cfdb371c7f82c0fd3d6319ca52eb3f.png"},{src:"https://qn-static.landi.com/uploadtool6425ca67c5dc62ee4c4cc80a0267cd29.png"}],isOpen:!0}},components:{Abstract:l.default,toast:h.a},methods:{goToRule:function(){window.location="".concat("https://www.landi.com/static-web/mobile","/bruin/rule/")},goToHome:function(){window.location="".concat("https://www.landi.com/static-web/mobile","/bruin/")},openInfo:function(){this.$refs.toast.showToast("2020年1月1日 18:00开奖")},abstractAction:(c=Object(d.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Number(this.awardChange)){t.next=3;break}return this.$refs.toast.showToast("您当前可抽取次数为0！"),t.abrupt("return");case 3:this.abstractShow=!0;case 4:case"end":return t.stop()}},t,this)})),function(){return c.apply(this,arguments)}),cancelShow:function(){this.abstractShow=!1,this.getMyBruinData()},getMyBruinData:(o=Object(d.a)(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,f.a.get("".concat(m.API.MY_BRUIN,"?activity_id=").concat(1));case 4:if((e=t.sent).status){t.next=8;break}return console.log(e.info),t.abrupt("return");case 8:this.awardChange=e.data.lucky_num,this.secondDiv=[],this.firstDiv=[],(e.data.cards||[]).forEach(function(element,t){0==Number(element.num)&&(n.isOpen=!1),t>2?n.secondDiv.push(element):n.firstDiv.push(element)}),console.log(this.secondDiv),console.log(this.firstDiv),t.next=21;break;case 17:return t.prev=17,t.t0=t.catch(1),console.log(t.t0),t.abrupt("return");case 21:case"end":return t.stop()}},t,this,[[1,17]])})),function(){return o.apply(this,arguments)}),getBruinPMD:(r=Object(d.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=4,f.a.get("".concat(m.API.BRUIN_PMD,"?activity_id=").concat(1));case 4:if((e=t.sent).status){t.next=8;break}return console.log(e.info),t.abrupt("return");case 8:this.pmdInfo=e.data||"0人已集齐，2019年1月1日18：00开奖",t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),console.log(res),t.abrupt("return");case 15:case"end":return t.stop()}},t,this,[[0,11]])})),function(){return r.apply(this,arguments)})},created:function(){this.getMyBruinData(),this.getBruinPMD()}},w=(n(373),n(19)),component=Object(w.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"bruin"}},[r("div",{staticClass:"bruin-background"},[r("div",{staticClass:"bruin-marquee"},[t._v("\n      "+t._s(t.pmdInfo)+"\n    ")]),t._v(" "),r("div",{staticClass:"bruin-header"},[r("img",{staticClass:"bruin-header-ways",attrs:{src:n(252)},on:{click:t.goToRule}}),t._v(" "),r("img",{staticClass:"bruin-header-work",attrs:{src:n(370)},on:{click:t.goToHome}})]),t._v(" "),r("div",{staticClass:"bruin-first"},t._l(t.firstDiv,function(e,n){return r("div",{key:n,staticClass:"bruin-first-div"},[r("div",{staticClass:"bruin-first-name"},[Number(e.num)>0?r("div",{staticClass:"bruin-first-name-content"},[t._v(t._s(e.name+" x"+e.num))]):t._e(),t._v(" "),Number(e.num)>0?t._e():r("div",{staticClass:"bruin-first-name-content1"},[t._v(t._s(e.name))])]),t._v(" "),r("img",{staticClass:"bruin-first-img",attrs:{src:"https://qn-static.landi.com/uploadtool543d8258ed2c2579eb63b890d7207056.png"}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:!(Number(e.num)>0),expression:"Number(item.num) > 0 ? false : true"}],staticClass:"bruin-first-view",attrs:{src:t.slidesView[e.card_no-1].src}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:Number(e.num)>0,expression:"Number(item.num) > 0 ? true : false"}],staticClass:"bruin-first-own"},[r("img",{staticClass:"bruin-first-own-light",attrs:{src:"https://qn-static.landi.com/uploadtool1fe0c9c2ae04dae40e2d23643afd82eb.png"}}),t._v(" "),r("div",{attrs:{id:"bruin-keys"+e.card_no}})])])}),0),t._v(" "),r("div",{staticClass:"bruin-second"},t._l(t.secondDiv,function(e,n){return r("div",{key:n,staticClass:"bruin-second-div"},[r("div",{staticClass:"bruin-second-name"},[Number(e.num)>0?r("div",{staticClass:"bruin-second-name-content"},[t._v(t._s(e.name+" x"+e.num))]):t._e(),t._v(" "),Number(e.num)>0?t._e():r("div",{staticClass:"bruin-second-name-content1"},[t._v(t._s(e.name))])]),t._v(" "),r("img",{staticClass:"bruin-second-img",attrs:{src:"https://qn-static.landi.com/uploadtool543d8258ed2c2579eb63b890d7207056.png"}}),t._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:!(Number(e.num)>0),expression:"Number(item.num) > 0 ? false : true"}],staticClass:"bruin-second-view",attrs:{src:t.slidesView[e.card_no-1].src}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:Number(e.num)>0,expression:"Number(item.num) > 0 ? true : false"}],staticClass:"bruin-second-own"},[r("img",{staticClass:"bruin-second-own-light",attrs:{src:"https://qn-static.landi.com/uploadtool1fe0c9c2ae04dae40e2d23643afd82eb.png"}}),t._v(" "),r("div",{attrs:{id:"bruin-keys"+e.card_no}})])])}),0),t._v(" "),r("div",{staticClass:"button-div"},[r("div",{staticClass:"button-div-first"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOpen,expression:"!isOpen"}],staticClass:"button-div-first-content",on:{click:t.goToHome}},[r("div",{staticClass:"button-div-first-content-name"},[t._v("获取熊卡")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"button-div-first-open",on:{click:t.openInfo}})]),t._v(" "),r("div",{staticClass:"button-div-second",on:{click:t.abstractAction}},[t._m(0)]),t._v(" "),r("div",{staticClass:"abstract-time"},[r("div",{staticClass:"abstract-time-div"},[r("div",[t._v("当前可抽取")]),t._v(" "),r("div",{class:t.awardChange>0?"abstract-time-div-content1":"abstract-time-div-content"},[t._v(t._s(t.awardChange))]),r("div",[t._v("次")])])])]),t._v(" "),r("div",{staticClass:"rule-content"},[r("img",{staticClass:"rule-content-img",attrs:{src:"https://qn-static.landi.com/uploadtool51dc78a12a233403690780d3cd48c421.png"}}),t._v(" "),r("img",{staticClass:"rule-content-button",attrs:{src:n(371)},on:{click:t.goToRule}})])]),t._v(" "),r("toast",{ref:"toast"}),t._v(" "),r("Abstract",{attrs:{abstractShow:t.abstractShow},on:{fcancelShow:t.cancelShow}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"button-div-second-content"},[e("div",{staticClass:"button-div-second-content-name"},[this._v("开始抽取")])])}],!1,null,"02664268",null);e.default=component.exports}}]);