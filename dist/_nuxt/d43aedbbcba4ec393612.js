(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{179:function(t,n,e){"use strict";e(13);var o=e(73),r=e.n(o),c=e(183),l=e.n(c);console.log("process.env.ENV_API","http://release2.landi.com/");var d=r.a.create({baseURL:"http://release2.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){return console.log(t,t.response),Promise.reject(t)}),n.a=d},182:function(t,n,e){var content=e(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("28d83c20",content,!0,{sourceMap:!1})},188:function(t,n,e){"use strict";var o={data:function(){return{timer:null}},props:{dialogText:{type:String,default:""}},mounted:function(){var t=this;this.timer=setTimeout(function(){clearTimeout(t.timer),t.timer=null,t.$emit("closeDialog")},2e3)}},r=(e(190),e(19)),component=Object(r.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("div",{staticClass:"dialog-container"},[n("div",{staticClass:"content"},[this._v(this._s(this.dialogText))])])])},[],!1,null,"0e84e6c6",null);n.a=component.exports},190:function(t,n,e){"use strict";var o=e(182);e.n(o).a},191:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".fade-enter-active[data-v-0e84e6c6],\n.fade-leave-active[data-v-0e84e6c6] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-0e84e6c6],\n.fade-leave-to[data-v-0e84e6c6] {\n  opacity: 0;\n}\n.dialog-container[data-v-0e84e6c6] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n.dialog-container .content[data-v-0e84e6c6] {\n  padding: 0.13rem 0.27rem;\n  background: #000;\n  opacity: 0.6;\n  border-radius: 0.106667rem;\n  text-align: center;\n  color: #fff;\n}",""])},192:function(t,n,e){"use strict";var o=e(3),r=e(16),c=e(21),l=e(113),d=e(57),f=e(10),m=e(41).f,v=e(58).f,h=e(9).f,_=e(193).trim,A=o.Number,w=A,C=A.prototype,y="Number"==c(e(75)(C)),x="trim"in String.prototype,T=function(t){var n=d(t,!1);if("string"==typeof n&&n.length>2){var e,o,r,c=(n=x?n.trim():_(n,3)).charCodeAt(0);if(43===c||45===c){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===c){switch(n.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+n}for(var code,l=n.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+n};if(!A(" 0o1")||!A("0b1")||A("+0x1")){A=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof A&&(y?f(function(){C.valueOf.call(e)}):"Number"!=c(e))?l(new w(T(n)),e,A):T(n)};for(var k,V=e(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),P=0;V.length>P;P++)r(w,k=V[P])&&!r(A,k)&&h(A,k,v(w,k));A.prototype=C,C.constructor=A,e(11)(o,"Number",A)}},193:function(t,n,e){var o=e(7),r=e(20),c=e(10),l=e(194),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,n,e){var r={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=r[t]=d?n(h):l[t];e&&(r[e]=f),o(o.P+o.F*d,"String",r)},h=v.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(m,"")),t};t.exports=v},194:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},195:function(t,n,e){"use strict";var o=e(205),r=new(e.n(o).a);r.removeAllListeners(),n.a=r},197:function(t,n,e){var content=e(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("3f4af3d0",content,!0,{sourceMap:!1})},199:function(t,n,e){var content=e(257);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("5d40c78b",content,!0,{sourceMap:!1})},205:function(t,n,e){"use strict";var o=Object.prototype.hasOwnProperty,r="~";function c(){}function l(t,n,e){this.fn=t,this.context=n,this.once=e||!1}function d(t,n,e,o,c){if("function"!=typeof e)throw new TypeError("The listener must be a function");var d=new l(e,o||t,c),f=r?r+n:n;return t._events[f]?t._events[f].fn?t._events[f]=[t._events[f],d]:t._events[f].push(d):(t._events[f]=d,t._eventsCount++),t}function f(t,n){0==--t._eventsCount?t._events=new c:delete t._events[n]}function m(){this._events=new c,this._eventsCount=0}Object.create&&(c.prototype=Object.create(null),(new c).__proto__||(r=!1)),m.prototype.eventNames=function(){var t,n,e=[];if(0===this._eventsCount)return e;for(n in t=this._events)o.call(t,n)&&e.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e},m.prototype.listeners=function(t){var n=r?r+t:t,e=this._events[n];if(!e)return[];if(e.fn)return[e.fn];for(var i=0,o=e.length,c=new Array(o);i<o;i++)c[i]=e[i].fn;return c},m.prototype.listenerCount=function(t){var n=r?r+t:t,e=this._events[n];return e?e.fn?1:e.length:0},m.prototype.emit=function(t,n,e,o,c,l){var d=r?r+t:t;if(!this._events[d])return!1;var f,i,m=this._events[d],v=arguments.length;if(m.fn){switch(m.once&&this.removeListener(t,m.fn,void 0,!0),v){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,n),!0;case 3:return m.fn.call(m.context,n,e),!0;case 4:return m.fn.call(m.context,n,e,o),!0;case 5:return m.fn.call(m.context,n,e,o,c),!0;case 6:return m.fn.call(m.context,n,e,o,c,l),!0}for(i=1,f=new Array(v-1);i<v;i++)f[i-1]=arguments[i];m.fn.apply(m.context,f)}else{var h,_=m.length;for(i=0;i<_;i++)switch(m[i].once&&this.removeListener(t,m[i].fn,void 0,!0),v){case 1:m[i].fn.call(m[i].context);break;case 2:m[i].fn.call(m[i].context,n);break;case 3:m[i].fn.call(m[i].context,n,e);break;case 4:m[i].fn.call(m[i].context,n,e,o);break;default:if(!f)for(h=1,f=new Array(v-1);h<v;h++)f[h-1]=arguments[h];m[i].fn.apply(m[i].context,f)}}return!0},m.prototype.on=function(t,n,e){return d(this,t,n,e,!1)},m.prototype.once=function(t,n,e){return d(this,t,n,e,!0)},m.prototype.removeListener=function(t,n,e,o){var c=r?r+t:t;if(!this._events[c])return this;if(!n)return f(this,c),this;var l=this._events[c];if(l.fn)l.fn!==n||o&&!l.once||e&&l.context!==e||f(this,c);else{for(var i=0,d=[],m=l.length;i<m;i++)(l[i].fn!==n||o&&!l[i].once||e&&l[i].context!==e)&&d.push(l[i]);d.length?this._events[c]=1===d.length?d[0]:d:f(this,c)}return this},m.prototype.removeAllListeners=function(t){var n;return t?(n=r?r+t:t,this._events[n]&&f(this,n)):(this._events=new c,this._eventsCount=0),this},m.prototype.off=m.prototype.removeListener,m.prototype.addListener=m.prototype.on,m.prefixed=r,m.EventEmitter=m,t.exports=m},226:function(t,n,e){"use strict";e.r(n);e(189),e(59),e(192),e(110),e(108),e(109);var o=e(195);function r(){var u=navigator.userAgent;return{ios:!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:u.indexOf("Android")>-1||u.indexOf("Linux")>-1,iPhone:u.indexOf("iPhone")>-1,iPad:u.indexOf("iPad")>-1,isWeixin:-1!==u.toLowerCase().indexOf("micromessenger"),uCBrowser:u.indexOf("UCBrowser")>-1}}function c(t){var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),e=window.location.search.substr(1).match(n);return null!=e?unescape(e[2]):null}function l(t){var n=t=Number(t);return t<=140?n+=38:t>140&&t<=178?n=178:t>200&&(n=200),n}function d(t){var n=Object.assign({acoin:0,begin_time:0,combo_name:"",create_time:0,id:0,installment:0,payed:-1,split_id:-1,tmoney:0},t),e="abc360://pay?acoin=".concat(n.acoin,"&begin_time=").concat(n.begin_time,"&combo_name=").concat(n.combo_name,"&create_time=").concat(n.create_time,"&id=").concat(n.order_id,"&installment=").concat(n.installment,"&payed=").concat(n.pay_status,"&split_id=").concat(n.split_id,"&tmoney=").concat(n.sale_price),o=r();if(o.iPhone&&(window.location.href=e),o.android){console.log("payurl",e);prompt(e)}}function f(){var t=c("token");if(r().isWeixin?sessionStorage.setItem("currentPlatform","wx"):t?sessionStorage.setItem("currentPlatform","app"):"app"===!sessionStorage.getItem("currentPlatform")&&sessionStorage.setItem("currentPlatform","other"),console.log("currentPlatform",sessionStorage.getItem("currentPlatform")),t){var n="".concat("http://release2.landi.com/","Web/Index/fast_login?token=").concat(t,"&url=").concat("http://release2.landi.com/static-web/mobile","/group_buy/index");console.log("fastLoginUrl",n),window.location.replace(n)}console.log("currentPlatform",sessionStorage.getItem("currentPlatform"))}function m(t){console.log("支付结果",t),0===t?o.a.emit("nativePayCallBack",{result:"0"}):1===t&&o.a.emit("nativePayCallBack",{result:"1"})}function v(t){var n=r(),e=Object.assign({title:"为了宝贝拼了「7天突破26个字母的标准发音」",image:"https://qn-static.landi.com/uploadtoola4b025bbf7c19dfc16895b0ab0b776a2.png"},t),o="abc360://share?title=".concat(e.title,"&image=").concat(e.image,"&link=").concat(e.link);if(console.log("分享链接",o),n.iPhone&&(window.location.href=o),n.android)prompt(o)}function h(){window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.abc360.student"}function _(){var t={appid:"wxfcc48a994f9a1a32",redirect_uri:encodeURIComponent("".concat("http://release2.landi.com/static-web/mobile","/group_buy/index")),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(t.appid,"&redirect_uri=").concat(t.redirect_uri,"?btnType=").concat(this.btnType,"&response_type=").concat(t.response_type,"&scope=").concat(t.scope,"#wechat_redirect")}e.d(n,"getQueryString",function(){return c}),e.d(n,"getGroupCount",function(){return l}),e.d(n,"jsCallNative",function(){return d}),e.d(n,"init",function(){return f}),e.d(n,"funPayNativeCallBack",function(){return m}),e.d(n,"appShare",function(){return v}),e.d(n,"groupbuy_downloadApp",function(){return h}),e.d(n,"getWXCode",function(){return _}),window.funPayNativeCallBack=m},228:function(t,n,e){t.exports=e.p+"img/de0fba3.png"},229:function(t,n,e){"use strict";var o={data:function(){return{isFadeIn:!0}},props:{popupType:{type:String,default:""}},mounted:function(){this.isFadeIn=!0},beforeDestroy:function(){this.isFadeIn=!1},methods:{closePopup:function(){this.$emit("closePopup")},downloadApp:function(){this.$emit("downloadApp")},saveQrCode:function(){this.$emit("saveQrCode")}}},r=(e(256),e(19)),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"container"},[o("div",{class:[{"fade-in":t.isFadeIn},"mask"]}),t._v(" "),o("div",{staticClass:"popup-content"},["download"===t.popupType?o("img",{staticClass:"img-download",attrs:{src:e(254)}}):t._e(),t._v(" "),"qrCode"===t.popupType?o("img",{staticClass:"img-qr-code",attrs:{src:e(255)}}):t._e(),t._v(" "),o("span",{staticClass:"message"},[t._v("很遗憾，卖完了！")]),t._v(" "),"download"===t.popupType?o("span",{staticClass:"describe"},[t._v("下载app，更多福利早知道！")]):t._e(),t._v(" "),"qrCode"===t.popupType?o("span",{staticClass:"describe"},[t._v("关注服务号，更多福利早知道！")]):t._e(),t._v(" "),"download"===t.popupType?o("span",{staticClass:"btn",on:{click:t.downloadApp}},[t._v("下载客户端")]):t._e(),t._v(" "),"qrCode"===t.popupType?o("span",{staticClass:"btn",on:{click:t.saveQrCode}},[t._v("保存二维码到本地")]):t._e(),t._v(" "),o("div",{staticClass:"btn-close",on:{click:t.closePopup}})])])},[],!1,null,"1014bbbf",null);n.a=component.exports},230:function(t,n,e){"use strict";var o={data:function(){return{}},props:{activeTab:{type:String,default:"rule"}},methods:{funBtnSide:function(){this.$emit("funBtnSide")},goBack:function(){this.$emit("goBack")}}},r=(e(231),e(19)),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",["rule"===t.activeTab?e("div",{staticClass:"tab-content"},[e("i",{staticClass:"rule-title rule-title-1"}),t._v(" "),e("p",{staticClass:"rule-content-1"},[t._v("\n      本活动于2019年9月4日开始，限量200团，先到先得，\n      额满为止。\n    ")]),t._v(" "),e("i",{staticClass:"rule-title rule-title-2"}),t._v(" "),e("p",{staticClass:"rule-content-2"},[t._v("\n      活动仅限老用户（已购买正式课程的用户）发起拼团，新用户（未注册用户）参与拼团，3人起拼团。\n    ")]),t._v(" "),e("i",{staticClass:"rule-title rule-title-3"}),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"rule-content-4"},[t._v("在法律允许范围内，本活动的最终解释权abc360所有")])]):t._e(),t._v(" "),"detail"===t.activeTab?e("div",{staticClass:"tab-content"},[e("i",{staticClass:"detail-title detail-title-1"}),t._v(" "),e("div",{staticClass:"detail-content detail-content-1"}),t._v(" "),e("div",{staticClass:"detail-content detail-content-2"}),t._v(" "),e("i",{staticClass:"detail-title detail-title-2"}),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"video-describe"}),t._v(" "),e("i",{staticClass:"detail-title detail-title-3"}),t._v(" "),e("div",{staticClass:"detail-content detail-content-4"}),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"btn-side",on:{click:t.funBtnSide}},[e("span",[t._v("自然拼读小科普")]),t._v(" "),e("i")])]):t._e(),t._v(" "),"spell"===t.activeTab?e("div",{staticClass:"tab-content"},[e("i",{staticClass:"spell-title"}),t._v(" "),e("p",{staticClass:"spell-title-1"},[t._v("为什么要学习自然拼读法?")]),t._v(" "),t._m(3),t._v(" "),e("p",{staticClass:"spell-title-1"},[t._v("自然拼读课程适合的人群是谁？")]),t._v(" "),e("p",{staticClass:"spell-content-2"},[t._v("     想要培养地道发音，或者期望轻松记忆单词并提高单词量的孩子，都可以开始学习。")]),t._v(" "),e("p",{staticClass:"spell-content-3"},[t._v("\n      英语单词80%以上都符合自然拼读的发音规则，只要掌握这些规则并加以练习，就可轻松的做到看字读音，听音拼字哦~\n    ")]),t._v(" "),e("div",{staticClass:"btn-goback",on:{click:t.goBack}},[t._v("返回")])]):t._e()])},[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"rule-content-3"},[t._v("\n      1、每位老学员有"),e("span",[t._v("1")]),t._v("次开团机会，每位新学员有"),e("span",[t._v("1")]),t._v("次参团机会。拼团失败不占用拼团成功次数。\n      "),e("br"),t._v("2、开团后，邀请至少"),e("span",[t._v("2")]),t._v("位新学员成功参团，即拼团成功。\n      "),e("br"),t._v("3、拼团成功后，团长可得"),e("span",[t._v("「4节外教真人课」")]),t._v("。团员可得"),e("span",[t._v("「7节自然拼读课+1节精品外教真人课+配套精美单词卡」")]),t._v("。\n      "),e("br"),t._v("4、发起拼团后，在该页下方点击"),e("span",[t._v("“我的拼团”")]),t._v("可以查看拼团进度。\n      "),e("br"),t._v("5、拼团失败，款项将在活动结束后"),e("span",[t._v("10")]),t._v("个工作日内退回。\n      "),e("br"),t._v("6、因本次组团优惠力度大，拼团成功后不可退费、退课。\n      "),e("br"),t._v("7、拼团活动结束后，单词卡将于"),e("span",[t._v("3-5")]),t._v("个工作日，按拼团成功的先后顺序发货（"),e("span",[t._v("包邮")]),t._v("）。\n      "),e("br"),t._v("8、自然拼读课程请前往"),e("span",[t._v("「abc360英语服务号-享服务-个人中心-我」查看并学习")]),t._v("。\n      "),e("br"),t._v("9、自然拼读课程可以永久免费观看学习。\n      "),e("br"),t._v("10、参与拼团的未注册用户，无论是否拼团成功，注册成功后均可享受"),e("span",[t._v("1")]),t._v("节免费外教体验课，参与拼团后"),e("span",[t._v("24")]),t._v("小时内，会有课程顾问老师致电联系。\n      "),e("br"),t._v("11、未注册学员，如果该学员通过老学员[邀请参团页面中专属链接]注册"),e("span",[t._v("abc360")]),t._v("并首次购买课程，邀请人可根据阶梯获得对应的赠币、被邀请人也可获得对应的赠币。\n    ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"detail-content-3"},[n("video",{attrs:{controls:"",poster:"https://qn-smilejunior-admin.abc360.com/uploadtool4d3af4ea89c305f2cd444075c3a8865c.png"}},[n("source",{attrs:{src:"https://qn-video.abc360.com/Intro-190828.mp4",type:"video/mp4"}})])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"detail-content detail-content-5"},[n("i",{staticClass:"detail-title detail-title-4"})])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"spell-content-1"},[this._v("\n           传统记忆单词的方式：将单词拆成一个一个字母，记忆字母的排列顺序。\n      "),n("br"),this._v("1.容易扼杀孩子的学习兴趣；\n      "),n("br"),this._v("2.无法掌握最纯正的发音方式；\n      "),n("br"),this._v("     自然拼读法: 通过建立字母和发音的对应关系，根据英文字母在单词里的发音规律将这个单词读出来。实现从“字母发音-字母组合发音-单词-简单句子-整段句子”的系统学习。\n      "),n("br"),this._v("1.帮助孩子培养地道的发音；\n      "),n("br"),this._v("2.帮助提高单词量和认读能力，增强阅读兴趣；\n      "),n("br"),this._v("3.帮助快速记忆单词，准确拼写；\n    ")])}],!1,null,"7df4e616",null);n.a=component.exports},231:function(t,n,e){"use strict";var o=e(197);e.n(o).a},232:function(t,n,e){n=t.exports=e(38)(!1);var o=e(178),r=o(e(233)),c=o(e(234)),l=o(e(235)),d=o(e(236)),f=o(e(237)),m=o(e(238)),v=o(e(239)),h=o(e(240)),_=o(e(241)),A=o(e(242)),w=o(e(243)),C=o(e(244)),y=o(e(245)),x=o(e(246)),T=o(e(247)),k=o(e(248));n.push([t.i,".tab-content[data-v-7df4e616] {\n  width: 9.35rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 0.32rem;\n  position: relative;\n}\n.tab-content .rule-title[data-v-7df4e616] {\n  height: 1.01rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.tab-content .rule-title-1[data-v-7df4e616] {\n  width: 5.47rem;\n  margin-top: 0.27rem;\n  background-image: url("+r+");\n}\n.tab-content .rule-title-2[data-v-7df4e616] {\n  width: 3.73rem;\n  background-image: url("+c+");\n}\n.tab-content .rule-title-3[data-v-7df4e616] {\n  width: 3.73rem;\n  background-image: url("+l+");\n}\n.tab-content p[data-v-7df4e616] {\n  color: #878787;\n  font-size: 0.35rem;\n  font-weight: 500;\n  font-family: PingFang SC;\n  line-height: 0.59rem;\n}\n.tab-content p span[data-v-7df4e616] {\n  color: #fe5f8f;\n}\n.tab-content .rule-content-1[data-v-7df4e616] {\n  width: 8.6rem;\n  margin: 0.27rem 0.39rem 0.19rem 0.36rem;\n}\n.tab-content .rule-content-2[data-v-7df4e616] {\n  width: 8.65rem;\n  margin: 0.21rem 0.33rem 0.33rem 0.36rem;\n}\n.tab-content .rule-content-3[data-v-7df4e616] {\n  width: 8.84rem;\n  margin: 0.28rem 0.16rem 0 0.35rem;\n}\n.tab-content .rule-content-4[data-v-7df4e616] {\n  color: #878787;\n  font-size: 0.32rem;\n  margin-top: 0.7rem;\n}\n.tab-content .detail-title[data-v-7df4e616] {\n  height: 1rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.tab-content .detail-title-1[data-v-7df4e616] {\n  width: 3.97rem;\n  margin-top: 0.27rem;\n  background-image: url("+d+");\n}\n.tab-content .detail-title-2[data-v-7df4e616] {\n  width: 7.23rem;\n  margin-top: 0.75rem;\n  background-image: url("+f+");\n}\n.tab-content .detail-title-3[data-v-7df4e616] {\n  width: 3.97rem;\n  margin-top: 0.83rem;\n  background-image: url("+m+");\n}\n.tab-content .detail-title-4[data-v-7df4e616] {\n  width: 5.87rem;\n  background-image: url("+v+");\n  position: absolute;\n  right: 0.27rem;\n  top: -0.27rem;\n}\n.tab-content .detail-content[data-v-7df4e616] {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.tab-content .detail-content-1[data-v-7df4e616] {\n  width: 8.37rem;\n  height: 6.8rem;\n  background-image: url("+h+");\n  margin-top: 0.32rem;\n}\n.tab-content .detail-content-2[data-v-7df4e616] {\n  width: 8.24rem;\n  height: 6.63rem;\n  background-image: url("+_+");\n  margin-top: .32rem;\n}\n.tab-content .detail-content-3[data-v-7df4e616] {\n  width: 8.05rem;\n  height: 4.27rem;\n  border-radius: 0.4rem;\n  margin-top: 0.48rem;\n}\n.tab-content .detail-content-3 video[data-v-7df4e616] {\n  width: 100%;\n  height: 100%;\n}\n.tab-content .video-describe[data-v-7df4e616] {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("+A+");\n  width: 8.52rem;\n  height: 3.52rem;\n  margin-top: .19rem;\n}\n.tab-content .detail-content-4[data-v-7df4e616] {\n  width: 8.37rem;\n  height: 10.19rem;\n  background-image: url("+w+");\n  margin-top: 0.29rem;\n}\n.tab-content .detail-content-5[data-v-7df4e616] {\n  width: 8.37rem;\n  height: 6.45rem;\n  background-image: url("+C+");\n  margin-top: 0.69rem;\n  position: relative;\n}\n.tab-content .btn-side[data-v-7df4e616] {\n  display: flex;\n  align-items: center;\n  width: 2.39rem;\n  height: 0.53rem;\n  position: absolute;\n  top: 9.95rem;\n  right: 0;\n  background-image: url("+y+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding-left: 0.28rem;\n}\n.tab-content .btn-side span[data-v-7df4e616] {\n  font-weight: 500;\n  color: #ffffff;\n  font-size: 0.27rem;\n}\n.tab-content .btn-side i[data-v-7df4e616] {\n  width: 0.19rem;\n  height: 0.17rem;\n  background-image: url("+x+");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.tab-content .spell-title[data-v-7df4e616] {\n  width: 6.2rem;\n  height: 1rem;\n  background-image: url("+T+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin-top: 0.24rem;\n}\n.tab-content .spell-title-1[data-v-7df4e616] {\n  width: 100%;\n  padding-left: 0.51rem;\n  font-size: 0.4rem;\n  color: #525050;\n  font-family: PingFang SC;\n  font-weight: bold;\n}\n.tab-content .spell-content-1[data-v-7df4e616] {\n  padding: 0.53rem 0.51rem 0 0.52rem;\n}\n.tab-content .spell-content-2[data-v-7df4e616] {\n  padding: 0.25rem 0.37rem 0 0.44rem;\n}\n.tab-content .spell-content-3[data-v-7df4e616] {\n  font-size: 0.29rem;\n  color: #666666;\n  line-height: 0.48rem;\n  padding: 1.71rem 0.43rem 0 2.56rem;\n}\n.tab-content .btn-goback[data-v-7df4e616] {\n  width: 2.03rem;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  text-align: center;\n  font-size: 0.48rem;\n  color: #ffffff;\n  background-image: url("+k+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0.8rem 1.13rem 0.8rem 7.29rem;\n}",""])},233:function(t,n,e){t.exports=e.p+"img/4fed6f6.png"},234:function(t,n,e){t.exports=e.p+"img/c96b556.png"},235:function(t,n,e){t.exports=e.p+"img/3c47704.png"},236:function(t,n,e){t.exports=e.p+"img/ae8788b.png"},237:function(t,n,e){t.exports=e.p+"img/5efdd40.png"},238:function(t,n,e){t.exports=e.p+"img/4f027ac.png"},239:function(t,n,e){t.exports=e.p+"img/e714a4b.png"},240:function(t,n,e){t.exports=e.p+"img/58f0363.png"},241:function(t,n,e){t.exports=e.p+"img/feea13b.png"},242:function(t,n,e){t.exports=e.p+"img/93505e7.png"},243:function(t,n,e){t.exports=e.p+"img/bb888ad.png"},244:function(t,n,e){t.exports=e.p+"img/af6ebed.png"},245:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAABQCAMAAAADZR+TAAAAYFBMVEUAAAD/Wpb/WJT+V5T/Upb+V5T+V5T/Wpb+V5T9V5X/VpT/V5T+V5T/V5T9VpT/VpT+VpX+V5T/VpP/V5L/VpT/WZX/WJf/UpL9V5T/V5P+V5T+V5T/V5X+V5T9V5X+V5QqBhMYAAAAH3RSTlMAIjfiCvPrFtSbWkfcbpJPvLh2MCkeEwenRMjGePmo4JA2lQAAAbVJREFUeNrt3VtuwjAQRuHYTQmFcimBAL3N/ndZqQ8dVYGQFv4Rls63hCMUbCe2q1G642K5nk4eDf9zbKuL6tVyarhO21QXzA/8jG9g21VD6sWD4RZyGsq8mRj0oWf8miNC714MAaFn/AVGhN4/GQJCN2+GgNDp2RAQestowyJCJzo7YeiG54YTht6/GpwuNOM6pww9Mzhd6B3zQacMzfqGSk48ONT6oWtG0E4ZemNwutA171OcMvTC4IShmXs7Zei5wQlDHwxOF7pmUqjkoVcGoZxYtguRE2OOCB66MSjlxOAugod+NyjlxH9hBA+9Ngh5aDZPSHlolkilPDQTcCkPbVDy0B+G33hGF+knNC/AexjelYgJy3lMwUvEotJ5LJOWiIX/IbzKKg8vZ4fwuUF5+IAmiIeuPg19fORYmO/QrCsN4EP0srC14jI2C5WE7W9jsKGzHGxRHiAMnZgensYxEqXgYJSROOqnEBxeNRrHsRWBAwbVPHTfjs+WpKFdxyGw0tBuvzQoQ7sVa6ancfT8feMyhT/jepC7lhMX3oTIiSucQmw7LiUL0TbVKM2ca/aucmy/AFCF/nXKQjcUAAAAAElFTkSuQmCC"},246:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaBAMAAABWeiG6AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMAd+4Ru0SqM93MVSKIZpn5ULwXAAAAlUlEQVQY013OMQrCQBBGYcVCEITFC4iFjY05gHiGYGXvAfQWlpYWFgpewMKreBDDEhII/En2zTR5xQcDy86MBr3BW7zAWjYZ2Kgr0FgKQEfFD6QmZ22A5ludgL6qcvDf/0DTmx5Ae0Xw5xH88wi+eg2pg8oM+nYqQoI1T93BjmjATixy6Jt1t4M9XYGN9QVsDGD9wGoBKFFWY/zTOEMAAAAASUVORK5CYII="},247:function(t,n,e){t.exports=e.p+"img/c024536.png"},248:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATAAAAB4CAMAAABCWV50AAAAY1BMVEUAAAD+V5T/V5T/V5X/apv+V5T+VpT+V5T9V5T/V5T/V5X/WpP/Vpb/VpD+V5X+V5T/V5P+VpT9V5T+V5T+V5T+V5X9V5X/V5T/V5T/V5X/V5P+V5T/WJP/VpX/VpT/VZP+V5RdU5pbAAAAIHRSTlMA8mRRAczkxZ0+OBwQBq/SXL6l+OKrhWxIIRe8dHMwLWTbRfUAAALeSURBVHja7d3rcqMwDAVgydzB5paENLRp/f5PuTvtTLebK4eSH8HnewTGCGFbksBsYYa+a1JV/7RU06brB1NYeShXHuutX5VtfSydPMRodk+8pm7R2oyyMGte/ap1xspyynyla+snzUtZRBxlPhBZFC/wuBofkOa3j6xIfGCSQuareh+gvpJ54n0Aof4S3ccywyGYWH8uOwisDXR5fdFWMC73gcudAKrgPo7nEiD2v6eefPouE70EHb7+0ReZJNp4+rSJZILW07dW7oo8/RDdjV98H/+zuRPHPhjvT+iH3FAxnziTVnKVY756QeLkmuD/hy7LmVAsk1wcGPCv0INcEAe8/3VPFsu5vaer9nKm4gt5g1Zyaufphp2cKDzdVJxEfKasdyQx9yh+sW8RB3UfYJ4m5gKbv8SYs06QybfS0wQldylm7lpYJvmTqJUvxtMkRr50nibp5NPoaaKRb+Scd7L2NFEtfzl+IydTx6wVz13fPE32xhCGB7GV1fM91lbEegJYbuZjCqatGCODJ8AgQdZfzdfLykuTl/YqPJCEJMJLmpBU+OsNUT4wjIonCB8YiK8kY9hDKdMKTMrEFZPw1wjzyp9vTM/tHczADUSM4RY1puAhCMbymA2y5UEupuZVAcwbL6NgSl53gqjjhTpIzSubGMNLwZiR184hHQsbMIalMxC1LM6C5Cz/w5QsMIVkLGHGRCyShzQx2zBAIjb6gCQxW8lACjYrguzYDguiFRuuQfZs6QfJYjaNROiBbUkhLRvfQnK2VoYkjs27EWnF9vAI/eAAAmwAAUdcQCIOUYG0HNOD2EQcBIXQF44aQ6TvHGaHSCqOS0TkjgM5Adpy5CsiO3CoMDhUeJ4qyJORXcXB6ICk4Oh9ePT+bx9ZMNE/i2JZRJkHEP41L2U51qz85nBnrCxsNLuVrjOtzSgP4cpjvbJqwW19LJ08lC3M0HdNqk+83lTTpusHU1hB/QHCi0XLkP99WgAAAABJRU5ErkJggg=="},254:function(t,n,e){t.exports=e.p+"img/d3d0c77.png"},255:function(t,n,e){t.exports=e.p+"img/49d6e4c.png"},256:function(t,n,e){"use strict";var o=e(199);e.n(o).a},257:function(t,n,e){n=t.exports=e(38)(!1);var o=e(178),r=o(e(258)),c=o(e(228));n.push([t.i,".mask[data-v-1014bbbf] {\n  background-color: #535353;\n  opacity: 0.85;\n  position: fixed;\n  z-index: 500;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n.fade-in[data-v-1014bbbf] {\n  animation: fadeIn-data-v-1014bbbf 0.5s;\n}\n@keyframes fadeIn-data-v-1014bbbf {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 0.85;\n}\n}\n.popup-content[data-v-1014bbbf] {\n  position: fixed;\n  z-index: 800;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  right: 0;\n  margin: auto;\n  background-image: url("+r+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 9rem;\n  height: 8.8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n}\n.popup-content .img-download[data-v-1014bbbf] {\n  width: 3.04rem;\n  height: 2.32rem;\n  margin-bottom: 0.77rem;\n}\n.popup-content .img-qr-code[data-v-1014bbbf] {\n  width: 3.81rem;\n  height: 3.81rem;\n}\n.popup-content .describe[data-v-1014bbbf] {\n  color: #060002;\n  font-family: PingFang SC;\n  font-weight: bold;\n  font-size: 0.37rem;\n  margin-bottom: 0.21rem;\n}\n.popup-content .btn[data-v-1014bbbf] {\n  color: #fe5f8f;\n  font-family: PingFang SC;\n  font-weight: 500;\n  font-size: 0.48rem;\n  width: 8.4rem;\n  height: 1.65rem;\n  text-align: center;\n  line-height: 1.65rem;\n  margin-bottom: 0.3rem;\n  border-top: 0.026667rem solid #dcdcdc;\n}\n.popup-content .message[data-v-1014bbbf] {\n  color: #060002;\n  font-size: 0.48rem;\n  margin-bottom: 0.15rem;\n}\n.popup-content .btn-close[data-v-1014bbbf] {\n  width: 0.75rem;\n  height: 0.75rem;\n  position: absolute;\n  bottom: -1rem;\n  left: 4.09rem;\n  background-image: url("+c+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  z-index: 999;\n}",""])},258:function(t,n,e){t.exports=e.p+"img/8fc84e2.png"}}]);