(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{229:function(t,n,e){var content=e(307);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("68591f22",content,!0,{sourceMap:!1})},306:function(t,n,e){"use strict";var o=e(229);e.n(o).a},307:function(t,n,e){n=t.exports=e(38)(!1);var o=e(186),r=o(e(308)),c=o(e(309)),d=o(e(310)),l=o(e(311)),f=o(e(312)),h=o(e(313)),m=o(e(314));n.push([t.i,".index-container[data-v-4240a9f5] {\n  width: 100vw;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.index-container .top[data-v-4240a9f5] {\n  padding-top: 9.67rem;\n  background-image: url("+r+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 22.07rem;\n}\n.index-container .top .class-content[data-v-4240a9f5] {\n  display: flex;\n  flex-direction: column;\n  width: 9.33rem;\n  height: 4.67rem;\n  margin-left: 0.33rem;\n  padding: 1.44rem 0.73rem 0.43rem;\n}\n.index-container .top .class-content .class-content-title[data-v-4240a9f5] {\n  color: #060002;\n  font-size: 0.48rem;\n  font-weight: bold;\n}\n.index-container .top .class-content .class-content-describe[data-v-4240a9f5] {\n  color: #878787;\n  font-size: 0.35rem;\n  margin-top: 0.28rem;\n}\n.index-container .top .class-content .class-content-bottom[data-v-4240a9f5] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  color: #fff;\n  margin-top: 0.48rem;\n  font-size: 0.45rem;\n}\n.index-container .top .class-content .class-content-bottom div span[data-v-4240a9f5]:nth-child(2) {\n  font-size: 0.8rem;\n  font-weight: bold;\n}\n.index-container .bottom[data-v-4240a9f5] {\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-image: url("+c+");\n  width: 100vw;\n  height: 26.41rem;\n}\n.index-container .bottom .tab[data-v-4240a9f5] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 1rem 0;\n}\n.index-container .bottom .tab .tab-btn[data-v-4240a9f5] {\n  width: 3.65rem;\n  height: 1.23rem;\n  color: #c6c5c5;\n  font-size: 0.53rem;\n  font-weight: bold;\n  line-height: 1.1rem;\n  text-align: center;\n}\n.index-container .bottom .tab .active-btn[data-v-4240a9f5] {\n  color: #fe5794 !important;\n}\n.index-container .bottom .btn-content[data-v-4240a9f5] {\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.79rem 0.45rem 0.95rem;\n}\n.index-container .bottom .btn-content div[data-v-4240a9f5] {\n  width: 4.4rem;\n  height: 1.6rem;\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-size: 0.48rem;\n  line-height: 1.6rem;\n  text-align: center;\n  font-family: FZYuan;\n}\n.index-container .bottom .btn-content div[data-v-4240a9f5]:nth-child(1) {\n  color: #ff327d;\n  background-image: url("+d+");\n}\n.index-container .bottom .btn-content div[data-v-4240a9f5]:nth-child(2) {\n  color: #ffffff;\n  background-image: url("+l+");\n}\n.bg-grey[data-v-4240a9f5] {\n  background-image: url("+d+") !important;\n}\n.bg-detail[data-v-4240a9f5] {\n  background-image: url("+f+") !important;\n  height: 50.25rem !important;\n}\n.bg-spell[data-v-4240a9f5] {\n  background-image: url("+h+") !important;\n  height: 21.37rem !important;\n}\n.bg-top-spell[data-v-4240a9f5] {\n  background-image: url("+m+") !important;\n  height: 22.11rem !important;\n}",""])},308:function(t,n,e){t.exports=e.p+"img/fc61232.png"},309:function(t,n,e){t.exports=e.p+"img/925cfba.png"},310:function(t,n,e){t.exports=e.p+"img/1f2e701.png"},311:function(t,n,e){t.exports=e.p+"img/d3b25a0.png"},312:function(t,n,e){t.exports=e.p+"img/6ac1ba4.png"},313:function(t,n,e){t.exports=e.p+"img/a7b0462.png"},314:function(t,n,e){t.exports=e.p+"img/0b8f78f.png"},387:function(t,n,e){"use strict";e.r(n);var o=e(263),r=e(264),dialog=e(207),c=e(180),d=(e(41),e(5)),l=(e(75),e(13),e(111),e(108),e(110),e(226));console.log("wx",l);var f=function(){var t=Object(d.a)(regeneratorRuntime.mark(function t(){var n,e,o,r,d,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise(function(t){-1==window.location.href.indexOf("from")&&-1==window.location.href.indexOf("isappinstalled")||(window.location.href=window.location.href.split("&")[0]),c.a.get("Web/Api/getDyhSignature?url=".concat(decodeURIComponent(window.location.href.split("#")[0]))).then(function(n){t(n.data)})});case 2:return n=t.sent,e=n.appId,o=n.timestamp,r=n.nonceStr,d=n.signature,f={debug:!1,appId:e,timestamp:o,nonceStr:r,signature:d,jsApiList:["checkJsApi","updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline","chooseWXPay"]},l.config(f),t.abrupt("return",l);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),h=e(257),m=e(211),v={head:function(){return{title:"拼团「Smart Phonics智慧自然拼读小课堂」"}},data:function(){return{showPopup:!1,activeTab:"rule",showDialog:!1,dialogText:"",popupType:"download",groupCount:178,GroupStatus:"0",statusCode:0,groupbuyId:"",openId:"",currentUser:{},btnType:"",indexData:{}}},components:{popupDownloadApp:o.a,tabContent:r.a,"v-dialog":dialog.a},mounted:function(){console.log("加载首页"),Object(h.init)(),this.eventOnListen(),this.initData(),"wx"===sessionStorage.getItem("currentPlatform")&&(f(),this.wxLogin())},methods:{initData:function(){var t=this;c.a.get("/MiniProgramApi/LessonGroupBuy/getInfo").then(function(n){t.statusCode=n.code,3011===n.code?t.groupCount=200:t.groupCount=Object(h.getGroupCount)(n.data.count),t.GroupStatus=n.data.status,n.data.current_user&&(t.currentUser=n.data.current_user,t.$router.push({name:"group_buy-detail",query:{groupbuyId:n.data.current_user.groupbuy_id}}))})},wxLogin:function(){var t=this,n=Object(h.getQueryString)("code");n&&c.a.post("/MiniProgramApi/LessonGroupBuy/getWxLogin",{code:n}).then(function(n){(t.openId=n.data.open_id,0===n.data.is_login)?t.$router.push({name:"group_buy-login"}):"myGroupBuy"===Object(h.getQueryString)("btnType")?t.$router.push({name:"group_buy-my_group"}):t.funPay()})},tabChange:function(t){this.activeTab=t},myGroupBuy:function(){switch(this.btnType="myGroupBuy",sessionStorage.getItem("currentPlatform")){case"wx":Object(h.getWXCode)();break;case"app":this.$router.push({name:"group_buy-my_group"});break;case"other":this.$router.push({name:"group_buy-prompt"})}},funPay:function(){var t=this;console.log(location.href);var n={};this.$store.state.groupBuy.platform.isWeixin&&(n.open_id=this.openId),c.a.post("/MiniProgramApi/LessonGroupBuy/openGroup",n).then(function(n){if(0!==n.code)return t.showDialog=!0,void(t.dialogText=n.msg);t.groupbuyId=n.data.groupbuy.id;var e=n.data.order;if(t.$store.state.groupBuy.platform.isWeixin){var o=JSON.parse(n.data.pay.data);console.log(o),setTimeout(function(){wx.chooseWXPay({timestamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:o.signType,paySign:o.paySign,success:function(t){that.$router.push({name:"group_buy-detail",query:{groupbuyId:that.groupbuyId}})},fail:function(t){console.log(t)}})},500)}else Object(h.jsCallNative)(e)}).catch(function(t){console.log("axios error",t)})},startGroupBuy:function(){var t=sessionStorage.getItem("currentPlatform");if(console.log("currentPlatform",t),this.btnType="startGroupBuy",this.currentUser.is_leader){if("1"===this.currentUser.is_leader)return;"0"===this.currentUser.is_leader&&(this.showDialog=!0,this.dialogText="您已参团，每人限拼团1次")}else{if(3013===this.statusCode)return this.showDialog=!0,void(this.dialogText="此活动仅限abc360老学员(购买过正式课)发起");if(200===this.groupCount)return this.showPopup=!0,void(this.popupType="download");switch(t){case"wx":Object(h.getWXCode)();break;case"app":this.funPay();break;case"other":this.$router.push({name:"group_buy-prompt"})}}},funBtnSide:function(){this.activeTab="spell"},goBack:function(){this.activeTab="detail"},eventOnListen:function(){var t=this;m.a.on("nativePayCallBack",function(data){var n=t.groupbuyId;"0"===data.result?t.$router.push({name:"group_buy-detail",query:{groupbuyId:n,indexPay:"true"}}):(t.showDialog=!0,t.dialogText="支付失败")})},downloadAppClick:function(){Object(h.groupbuy_downloadApp)()}}},y=(e(306),e(19)),component=Object(y.a)(v,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index-container"},[e("div",{class:[{"bg-top-spell":"spell"===t.activeTab},"top"]},[e("div",{staticClass:"class-content"},[e("span",{staticClass:"class-content-title"},[t._v("Smart Phonics智慧自然拼读小课堂")]),t._v(" "),e("span",{staticClass:"class-content-describe"},[t._v("每天10分钟跟外教轻松入门自然拼读")]),t._v(" "),e("div",{staticClass:"class-content-bottom"},[t._m(0),t._v(" "),e("span",[t._v("已拼"+t._s(t.groupCount)+"团")])])])]),t._v(" "),e("div",{class:[{"bg-detail":"detail"===t.activeTab,"bg-spell":"spell"===t.activeTab},"bottom"]},[e("div",{staticClass:"tab"},[e("span",{class:[{"active-btn":"rule"===t.activeTab},"tab-btn"],on:{click:function(n){return t.tabChange("rule")}}},[t._v("活动规则")]),t._v(" "),e("span",{class:[{"active-btn":"detail"===t.activeTab||"spell"===t.activeTab},"tab-btn"],on:{click:function(n){return t.tabChange("detail")}}},[t._v("课程详情")])]),t._v(" "),e("tab-content",{attrs:{activeTab:t.activeTab},on:{funBtnSide:t.funBtnSide,goBack:t.goBack}}),t._v(" "),e("div",{staticClass:"btn-content"},[e("div",{on:{click:t.myGroupBuy}},[t._v("我的拼团")]),t._v(" "),e("div",{class:{"bg-grey":"1"===t.currentUser.is_leader},on:{click:t.startGroupBuy}},[t._v("发起拼团")])])],1),t._v(" "),t.showPopup?e("popup-download-app",{attrs:{popupType:t.popupType},on:{downloadApp:t.downloadAppClick,closePopup:function(n){t.showPopup=!1}}}):t._e(),t._v(" "),t.showDialog?e("v-dialog",{attrs:{dialogText:t.dialogText},on:{closeDialog:function(n){t.showDialog=!1}}}):t._e()],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("span",[this._v("¥")]),this._v(" "),n("span",[this._v("19.9")]),this._v(" "),n("s",[this._v("¥99")])])}],!1,null,"4240a9f5",null);n.default=component.exports}}]);