(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{188:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(108);var o=function(t){var video=t,e=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?void 0!==video.play()&&(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var t,e=(t=video).webkitEnterFullScreen?"webkitEnterFullScreen":!!t.webkitRequestFullScreen&&"webkitRequestFullScreen";video[e]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play())}},191:function(t,e,n){t.exports=n.p+"img/6446c2c.png"},202:function(t,e,n){"use strict";n.r(e),n.d(e,"initWX",function(){return d}),n.d(e,"getWXCode",function(){return l});n(60),n(22),n(23),n(13),n(43);var o=n(25);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var c=n(190);function d(t){return c.config(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},t,{debug:!1,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"]})),c}function l(t){var e={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent(t),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.appid,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"&state=1#wechat_redirect")}},215:function(t,e,n){var content=n(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("0031181b",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";var o=n(215);n.n(o).a},279:function(t,e,n){e=t.exports=n(38)(!1);var o=n(180),r=o(n(191)),c=o(n(280));e.push([t.i,".top-step-bar[data-v-7ab38988] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0.26667rem;\n  height: 2.2rem;\n}\n.page-content[data-v-7ab38988] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-7ab38988] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\n.signup-title[data-v-7ab38988] {\n  font-size: 0.4rem;\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n}\n.signup-title2[data-v-7ab38988] {\n  font-size: 0.37333rem;\n  color: #333333;\n  margin-bottom: 0.26667rem;\n}\n#presentation[data-v-7ab38988] {\n  overflow: auto;\n  -webkit-overflow-scrolling: auto;\n  width: 100vw;\n}\n#presentation[data-v-7ab38988]::-webkit-scrollbar {\n    display: none;\n}\n.card[data-v-7ab38988] {\n  width: 9.2rem;\n  padding: 0.53333rem 0.26667rem 0.66667rem;\n  box-shadow: 0 0.02667rem 0.10667rem 0 #CCCCCC;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, 0);\n  background: #fff;\n}\n.topaction[data-v-7ab38988] {\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  color: #333333;\n  font-size: 0.34667rem;\n  margin-top: 0.8rem;\n}\n.topaction-rank[data-v-7ab38988] {\n    border-top-right-radius: 0.4rem;\n    border-bottom-right-radius: 0.4rem;\n    box-shadow: 0 0 0.4rem -0.3rem #666666;\n    background: #fff;\n}\n.topaction-rank span[data-v-7ab38988] {\n      display: inline-block;\n      width: 1.92rem;\n      line-height: 0.85333rem;\n      text-align: center;\n      padding-right: 0.13333rem;\n}\n.topaction-rule[data-v-7ab38988] {\n    border-top-left-radius: 0.4rem;\n    border-bottom-left-radius: 0.4rem;\n    box-shadow: 0 0 0.4rem -0.3rem #666666;\n    background: #fff;\n    width: 1.92rem;\n    line-height: 0.85333rem;\n    text-align: center;\n    padding-left: 0.13333rem;\n}\n.content[data-v-7ab38988] {\n  margin-top: 6.6rem;\n  text-align: center;\n}\n.content-title[data-v-7ab38988] {\n    font-family: MicrosoftYaHei;\n    font-size: 0.32rem;\n    color: #B2B2B2;\n    margin-top: 0.26667rem;\n}\n.content-level[data-v-7ab38988] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.4rem;\n}\n.content-level-item[data-v-7ab38988] {\n      width: 2rem;\n      height: 0.8rem;\n      border: 1px solid #E6E6E6;\n      border-radius: 0.4rem;\n      color: #333333;\n      font-size: 0.34667rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-right: 0.26667rem;\n}\n.content-level-item[data-v-7ab38988]:last-child {\n        margin-right: 0;\n}\n.content-topictitle[data-v-7ab38988] {\n    font-family: MicrosoftYaHei;\n    font-size: 0.32rem;\n    color: #B2B2B2;\n}\n.content-video[data-v-7ab38988] {\n    display: flex;\n    white-space: nowrap;\n    overflow-x: scroll;\n    margin-top: 0.53333rem;\n    text-align: left;\n}\n.content-video[data-v-7ab38988]::-webkit-scrollbar {\n      display: none;\n}\n.content-video-item[data-v-7ab38988] {\n      display: inline-block;\n      margin-right: 0.5rem;\n      box-sizing: content-box;\n      position: relative;\n}\n.content-video-item-video[data-v-7ab38988] {\n        width: 6.4rem;\n        height: 4.8rem;\n        overflow: hidden;\n        position: relative;\n}\n.content-video-item-video-pic[data-v-7ab38988] {\n          width: inherit;\n          height: inherit;\n}\n.content-video-item-video-play[data-v-7ab38988] {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 1.01333rem;\n          height: 1.01333rem;\n          background: url("+r+") 50% 50%/contain no-repeat;\n}\n.content-video-item-eng[data-v-7ab38988] {\n        font-size: 0.34667rem;\n        color: #333333;\n        letter-spacing: -0.0248rem;\n        margin-top: 0.37333rem;\n}\n.content-video-item-chn[data-v-7ab38988] {\n        font-size: 0.32rem;\n        color: #B2B2B2;\n        margin-top: 0.10667rem;\n}\n.content-video-item-text[data-v-7ab38988] {\n        white-space: normal;\n        width: 6.4rem;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n}\n.action[data-v-7ab38988] {\n  margin: 0.32rem 0 0.8rem;\n  display: inline-block;\n  width: 8.13333rem;\n  height: 1.33333rem;\n}\n.action-content[data-v-7ab38988] {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    line-height: 1.33333rem;\n    border-radius: 0.7rem;\n}\n.action-content-text[data-v-7ab38988] {\n      font-size: 0.45333rem;\n      color: #fff;\n      font-weight: bold;\n}\n.action-content-deco0[data-v-7ab38988] {\n      position: absolute;\n      top: 0.15rem;\n      left: 0.7rem;\n      width: 0.16rem;\n      height: 0.16rem;\n      background: rgba(255, 255, 255, 0.4);\n      border-radius: 0.08rem;\n}\n.action-content-deco1[data-v-7ab38988] {\n      position: absolute;\n      top: 0.15rem;\n      left: 1rem;\n      width: 1.33333rem;\n      height: 0.16rem;\n      background: rgba(255, 255, 255, 0.4);\n      border-radius: 0.08rem;\n}\n.divide-title[data-v-7ab38988] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0.53333rem;\n}\n.divide-title-text[data-v-7ab38988] {\n    margin: 0 0.5rem;\n    font-size: 0.37333rem;\n    color: #333333;\n    font-weight: bold;\n    font-family: MicrosoftYaHei-Bold;\n}\n.divide-decohr[data-v-7ab38988] {\n  width: 1.6rem;\n  border-bottom: 1px solid #E6E6E6;\n}\n.appearance[data-v-7ab38988] {\n  margin-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.appearance .appearance-video[data-v-7ab38988] {\n    position: relative;\n}\n.appearance .appearance-video-item[data-v-7ab38988] {\n      width: 100%;\n      height: 4.8rem;\n}\n.appearance-english[data-v-7ab38988] {\n    margin-top: 0.4rem;\n    font-size: 0.34667rem;\n    color: #333333;\n    letter-spacing: 0;\n    text-align: justify;\n}\n.appearance-chinese[data-v-7ab38988] {\n    margin-top: 0.13333rem;\n    font-size: 0.32rem;\n    color: #B2B2B2;\n    letter-spacing: 0;\n    text-align: justify;\n    line-height: 0.50667rem;\n}\n.appearance-info[data-v-7ab38988] {\n    display: flex;\n    margin-top: 0.53333rem;\n    font-size: 0.34667rem;\n    color: #333333;\n}\n.appearance-info .appearance-info-index[data-v-7ab38988] {\n      margin-left: 0.26667rem;\n      display: flex;\n      align-items: center;\n}\n.appearance-cut[data-v-7ab38988] {\n    width: 1.86667rem;\n    height: 0.8rem;\n    background: #FFFFFF;\n    border: 1px solid #E6E6E6;\n    border-radius: 0.4rem;\n    font-size: 0.34667rem;\n    color: #333333;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 0.14667rem;\n    margin-left: 6.93333rem;\n}\n.description[data-v-7ab38988] {\n  margin-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.description p[data-v-7ab38988] {\n    font-size: 0.34667rem;\n    color: #808080;\n    text-align: justify;\n    line-height: 0.58667rem;\n}\n.step[data-v-7ab38988] {\n  margin: 0.5rem 0 2.31333rem;\n  text-align: center;\n}\n.step-item[data-v-7ab38988] {\n    width: 6.66667rem;\n    display: inline-block;\n    color: #333333;\n    margin-bottom: 0.24rem;\n}\n.step-item[data-v-7ab38988]:last-child {\n      margin-bottom: 0;\n}\n.step-item-content[data-v-7ab38988] {\n      width: 100%;\n      line-height: 0.93333rem;\n      font-size: 0.37333rem;\n      border: 1px dashed #C0C7CC;\n      border-radius: 0.5rem;\n      background: #FAFAFA;\n      margin-bottom: 0.24rem;\n}\n.step-item-deco[data-v-7ab38988] {\n      width: 0.4rem;\n      height: 0.18667rem;\n      background: url("+c+") 50% 50%/cover;\n      position: relative;\n      left: 50%;\n      transform: translateX(-50%);\n}\n.float-action[data-v-7ab38988] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  width: 100vw;\n  height: 1.86667rem;\n  box-shadow: 0 -0.02667rem 0.08rem 0 #CCCCCC;\n  text-align: center;\n}\n",""])},280:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAAAXNSR0IArs4c6QAAAW5JREFUOBG9VLtKxEAUTbIQSGVlERJbbWwkSeVaqigBC8FC/AG/QD9hW1s7SwU7QcRWmzywXtsNiWC1lciK8RzhSrImMazGgcu9c+7jzBkyUR3HOVIUZQD7z3Xcy7Ls3rKsJ7Buw9SO2d9VVT2M4/ikR6I0TWPbtod5nu9g+4l1cICJpmkHURSdcXZJoeu6W8AucQDjL4mh8gXzdkF6LXM1CeiZwKk2EY6L+C/jMWcWSTmvpFgIoHwFqm+wnxdsRv8MtSR9mO6vJGYRyJfgbnGAhemmNnsQjlC3DtJhVX3pqosFbEDzKuyxiLeJ2cPeOlLOqCVmMgzDkWEYfQz5dlXMVy3W6rq+xt6qvGC1Vy0F9PjJzMFdwfrcN6w75Hy80x8/zkbFQsBBULEBNV/PQXLimWNNG1L2tP5ZJEnyZprmBQgW0bcshPTAzvER7gVB8FrEm+JWimUA1Ex8398H0algjIkxJ1in3vO8AW1Wkg+u2HT+zD5m+AAAAABJRU5ErkJggg=="},415:function(t,e,n){"use strict";n.r(e);n(42),n(73),n(40);var o=n(5),r=n(193),c=(n(111),n(110),n(108),n(59),n(208)),d=n(209),l=n(181),v=function(){function t(){Object(c.a)(this,t)}return Object(d.a)(t,[{key:"autoLogin",value:function(){(function(){var t=!1;"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(t=!0);return t})()&&function(){var code=(n=new RegExp("(^|&)"+"code"+"=([^&]*)(&|$)","i"),null!=(o=window.location.search.substr(1).match(n))?unescape(o[2]):null);if(!code){var t={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent(window.location.href),response_type:"code",scope:"snsapi_base"};window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(t.appid,"&redirect_uri=").concat(t.redirect_uri,"&response_type=").concat(t.response_type,"&scope=").concat(t.scope,"&state=1#wechat_redirect"))}var e={code:code};l.a.get("Mobile/StudentActivity/login",{params:e}).then(function(t){console.log("code登录",t)}).catch(function(t){console.log("错误",t)});var n,o}()}},{key:"login",value:function(){}},{key:"register",value:function(){}}]),t}();var m,h,f,_,w=n(195),y=n(199),k=n(194),x=n(188),C=n(202);var A={name:"Presentation",mixins:[k.default],head:function(){return{title:"兰迪英语"}},components:{"poster-modal":y.a,toast:w.a},data:function(){return{levelSelectIndex:0,steps:[],resData:null,haveWork:!1,showFloatAction:!1,centerActionBottom:0,presentationStyle:{},showPosterModal:!1,loginRegistModal:!0,isLogin:!0,appearanceShow:!0,curUserFrom:"",goodWorkData:{},goodWorkPage:1,hasNext:!0}},methods:{selectLevel:function(t){this.levelSelectIndex=t,this.$refs["content-video"].scroll(0,0)},signup:function(){this.resData.is_enable?this.gotoPage("presentation-signup"):this.$refs.toast.showToast("活动已结束")},mainAction:function(){this.isLogin?this.haveWork?window.location="".concat("https://release6.landi.com/static-web/mobile","/presentation/signup/step5/?activity_id=").concat(this.$route.query.activity_id):this.signup():this.loginRegistModal=!0},handleScroll:function(){window.scrollY>this.centerActionBottom?this.showFloatAction=!0:this.showFloatAction=!1},gotoRegister:function(){window.location="https://www.landi.com/Api/FloorPage/index?from=zcyl&param=_bCOvjKLmiST2qHEDcTOScntrYF3wIzwj_ceg"},srcType:function(t){return t.videos.length>0?"video":t.audios.length>0?"audio":"pic"},getSrc:function(t){return t.videos.length>0?t.videos[0].url:t.audios.length>0?t.audios[0].url:void 0},playFn:function(t){var e=document.getElementById(t);Object(x.a)(e)},updateWXShare:(_=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,o,c,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("".concat(r.API.WX_INDEX_SHARE),{url:window.location.href.split("#")[0],activity_id:this.$route.query.activity_id,sid:window.localStorage.getItem("userSid")});case 2:if((e=t.sent).status){t.next=6;break}return this.$refs.toast.showToast(e.info),t.abrupt("return");case 6:n=e.data.wx_config,o=e.data.wx_data,c=Object(C.initWX)({appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature}),d={title:o.share_title,desc:o.share_desc,link:o.share_link,imgUrl:o.share_img_url},c.ready(function(){c.updateAppMessageShareData(d),c.updateTimelineShareData(d),c.onMenuShareAppMessage(d),c.onMenuShareTimeline(d),c.error(function(t){console.log(t)})});case 11:case"end":return t.stop()}},t,this)})),function(){return _.apply(this,arguments)}),gotoLoginRegister:(f=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("register"!==e){t.next=7;break}return n="https://release6.landi.com//mobile/login/index/#/login",console.log("loginUrl",n),window.location.href=n,t.abrupt("return");case 7:return o={from:this.curUserFrom,tjm:window.localStorage.getItem("userSid")},t.prev=8,t.next=11,l.a.post("".concat(r.API.FROM_TJM),o);case 11:t.sent,window.location="https://release6.landi.com//mobile/Login",t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),console.log(t.t0);case 18:case"end":return t.stop()}},t,this,[[8,15]])})),function(t){return f.apply(this,arguments)}),cutStudentMien:(h=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query.activity_id,this.hasNext||(this.hasNext=!0,this.goodWorkPage=1),t.prev=2,t.next=5,l.a.get("".concat(r.API.GET_GOOD_WORK,"?activity_id=").concat(e,"&page=").concat(this.goodWorkPage));case 5:(n=t.sent).status?(this.goodWorkData=n.data.work,this.hasNext=n.data.has_next,this.goodWorkPage++):(this.appearanceShow=!1,console.log(n.info)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),this.appearanceShow=!1,console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[2,9]])})),function(){return h.apply(this,arguments)})},created:function(){(new v).autoLogin()},mounted:(m=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query.sid||"",window.localStorage.setItem("userSid",e),this.cutStudentMien(),this.steps=r.INDEX_STEPS,n=this.$route.query.activity_id,t.next=7,l.a.get("".concat(r.API.ACTIVITY_DETAIL,"?activity_id=").concat(n));case 7:return(o=t.sent).status?(this.resData=o.data,document.title=this.resData.name,this.presentationStyle.background="url(".concat(this.resData.background_pic_url,") 0 0 / contain local no-repeat"),this.presentationStyle.backgroundColor="#fff",this.curUserFrom=this.resData.ad_source_id):this.$refs.toast.showToast(o.info),t.prev=9,t.next=12,l.a.get("".concat(r.API.MY_WORK,"?activity_id=").concat(n));case 12:(c=t.sent).status?(c.data.id&&(this.haveWork=!0),window.localStorage.setItem("userSid",c.data.sid)):this.$refs.toast.showToast(c.info),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(9),console.log(t.t0),401===t.t0.response.status&&(this.isLogin=!1,console.log(t.t0.response.info));case 20:return t.next=22,this.updateWXShare();case 22:this.centerActionBottom=this.$refs.centerAction.getBoundingClientRect().bottom,window.addEventListener("scroll",this.handleScroll);case 24:case"end":return t.stop()}},t,this,[[9,16]])})),function(){return m.apply(this,arguments)})},S=(n(278),n(19)),component=Object(S.a)(A,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.presentationStyle,attrs:{id:"presentation"}},[t.resData?n("div",[n("div",{staticClass:"topaction"},[n("div",{staticClass:"topaction-rank",on:{click:function(e){return t.gotoPageWithHistory("presentation-rank")}}},[n("span",[t._v("点赞排行")])]),t._v(" "),n("div",{staticClass:"topaction-rule",on:{click:function(e){return t.gotoPageWithHistory("presentation-rule")}}},[t._v("活动规则")])]),t._v(" "),n("div",{staticClass:"content card"},[n("div",{staticClass:"content-title"},[t._v("报名参赛，分享更多宝贝高光时刻")]),t._v(" "),n("div",{ref:"centerAction",staticClass:"action",on:{click:t.mainAction}},[n("div",{staticClass:"action-content",style:{background:t.resData.button_color}},[n("div",{staticClass:"action-content-text"},[t._v(t._s(t.haveWork?"查看我的作品":"我要报名参赛"))]),t._v(" "),n("div",{staticClass:"action-content-deco0"}),t._v(" "),n("div",{staticClass:"action-content-deco1"})])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"content-level"},t._l(t.resData.combinations,function(e,o){return n("div",{key:e.id,staticClass:"content-level-item",style:t.levelSelectIndex==o?{background:t.resData.button_color,color:"#fff",border:"none"}:{},on:{click:function(e){return t.selectLevel(o)}}},[t._v(t._s(e.name))])}),0),t._v(" "),n("div",{staticClass:"content-topictitle"},[t._v("以下演讲主题，任意选择其中之一即可")]),t._v(" "),n("div",{ref:"content-video",staticClass:"content-video"},t._l(t.resData.combinations[t.levelSelectIndex].topics,function(e,o){return n("div",{key:e.id,staticClass:"content-video-item"},["video"==t.srcType(e)||"audio"==t.srcType(e)?n("video",{key:o,staticStyle:{display:"none"},attrs:{id:"video"+o,controls:"",preload:"auto",src:t.getSrc(e)}}):t._e(),t._v(" "),n("div",{staticClass:"content-video-item-video",on:{click:function(e){return t.playFn("video"+o)}}},[e.videos.length>0||e.audios.length>0?n("div",{staticClass:"content-video-item-video-play"}):t._e(),t._v(" "),e.videos.length>0?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:e.videos[0].pic_url}}):t._e(),t._v(" "),e.audios.length>0&&0==e.videos.length?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:e.audios[0].pic_url}}):t._e(),t._v(" "),e.pics.length>0&&0==e.videos.length&&0==e.audios.length?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:e.pics[0]}}):t._e()]),t._v(" "),n("div",{staticClass:"content-video-item-eng content-video-item-text"},[t._v(t._s(e.en_topic_name))]),t._v(" "),n("div",{staticClass:"content-video-item-chn content-video-item-text"},[t._v(t._s(e.cn_topic_name))])])}),0)]),t._v(" "),t.appearanceShow?n("div",{staticClass:"appearance card"},[n("div",{staticClass:"divide-title divide-title-space"},[n("div",{staticClass:"divide-decohr"}),t._v(" "),n("div",{staticClass:"divide-title-text"},[t._v(t._s(t.goodWorkData.activity_name))]),t._v(" "),n("div",{staticClass:"divide-decohr"})]),t._v(" "),n("div",{staticClass:"appearance-video"},[n("video",{staticStyle:{display:"none"},attrs:{preload:"auto",controls:"",src:t.goodWorkData.video_url}}),t._v(" "),t._m(1)]),t._v(" "),n("p",{staticClass:"appearance-english"},[t._v(t._s(t.goodWorkData.en_topic_name))]),t._v(" "),n("p",{staticClass:"appearance-chinese"},[t._v(t._s(t.goodWorkData.cn_topic_name))]),t._v(" "),n("div",{staticClass:"appearance-info"},[n("div",[t._v("作者："+t._s(t.goodWorkData.nickname))]),t._v(" "),t._m(2)]),t._v(" "),n("div",{staticClass:"appearance-cut",on:{click:t.cutStudentMien}},[n("p",[t._v("再看看")])])]):t._e(),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"step card"},[t._m(4),t._v(" "),t._l(t.steps,function(e,o){return n("div",{key:o,staticClass:"step-item"},[n("div",{staticClass:"step-item-content"},[t._v(t._s(e))]),t._v(" "),o+1<t.steps.length?n("div",{staticClass:"step-item-deco"}):t._e()])})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFloatAction,expression:"showFloatAction"}],staticClass:"float-action"},[n("div",{staticClass:"action",on:{click:t.mainAction}},[n("div",{staticClass:"action-content",style:{background:t.resData.button_color}},[n("div",{staticClass:"action-content-text"},[t._v(t._s(t.haveWork?"查看我的作品":"我要报名参赛"))]),t._v(" "),n("div",{staticClass:"action-content-deco0"}),t._v(" "),n("div",{staticClass:"action-content-deco1"})])])])]):t._e(),t._v(" "),n("toast",{ref:"toast"}),t._v(" "),n("poster-modal",{attrs:{poster:0},on:{click:t.gotoRegister},model:{value:t.showPosterModal,callback:function(e){t.showPosterModal=e},expression:"showPosterModal"}}),t._v(" "),n("poster-modal",{attrs:{poster:2},on:{click:t.gotoLoginRegister},model:{value:t.loginRegistModal,callback:function(e){t.loginRegistModal=e},expression:"loginRegistModal"}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide-title"},[e("div",{staticClass:"divide-decohr"}),this._v(" "),e("div",{staticClass:"divide-title-text"},[this._v("参赛作品样板")]),this._v(" "),e("div",{staticClass:"divide-decohr"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"appearance-video-item"},[e("div",{staticClass:"content-video-item-video-play"}),this._v(" "),e("img",{staticClass:"content-video-item-video-pic",attrs:{src:"https://qn-static.landi.com/uploadtoole039de222d3bce70bc1c871709412986.jpeg"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"appearance-info-index"},[this._v("推荐指数："),e("div",{staticStyle:{color:"red"}},[this._v("★★★★★")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"description card"},[e("div",{staticClass:"divide-title divide-title-space"},[e("div",{staticClass:"divide-decohr"}),this._v(" "),e("div",{staticClass:"divide-title-text"},[this._v("兰迪简介")]),this._v(" "),e("div",{staticClass:"divide-decohr"})]),this._v(" "),e("p",[this._v("兰迪少儿英语是专注为4-12岁少儿提供优质的英语学习内容与体验的在线外教小班课教育品牌，引进牛津大学出版社原版最新美式英语 Starlight教材，优选“英美加”等英语为母语国家的外教。")]),this._v(" "),e("p",[this._v("以“同伴学习”为教学理念，营造同伴竞争和同伴合作的场景，激发孩子学习英语的主动性，有效提升孩子的语言、思维及社交能力，让更多孩自如对话世界。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide-title divide-title-space"},[e("div",{staticClass:"divide-decohr"}),this._v(" "),e("div",{staticClass:"divide-title-text"},[this._v("活动步骤")]),this._v(" "),e("div",{staticClass:"divide-decohr"})])}],!1,null,"7ab38988",null);e.default=component.exports}}]);