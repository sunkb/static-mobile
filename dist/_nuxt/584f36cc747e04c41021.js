(window.webpackJsonp=window.webpackJsonp||[]).push([[30,21],{188:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(108);var o=function(t){var video=t,e=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?void 0!==video.play()&&(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var t,e=(t=video).webkitEnterFullScreen?"webkitEnterFullScreen":!!t.webkitRequestFullScreen&&"webkitRequestFullScreen";video[e]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play())}},189:function(t,e){},191:function(t,e,n){t.exports=n.p+"img/6446c2c.png"},202:function(t,e,n){"use strict";n.r(e),n.d(e,"initWX",function(){return d}),n.d(e,"getWXCode",function(){return l});n(60),n(22),n(23),n(13),n(43);var o=n(25);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var c=n(190);function d(t){return c.config(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},t,{debug:!1,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"]})),c}function l(t){var e={appid:"wx575385af6b09a6e0",redirect_uri:encodeURIComponent(t),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.appid,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"&state=1#wechat_redirect")}},244:function(t,e,n){t.exports=n.p+"img/0153727.png"},250:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAAXNSR0IArs4c6QAAAYhJREFUKBWNkr9Lw1AQx5tflmxCXCKOzqLQqaBg0aRJGxxEEPwXBP8NFxcnERwcXBybtMYKtqJmCoKrkyjGwYBoCzahsX6vtCXRtnjwcpfv+7x79+69VKlU2k39w1iGYXYsyzrodDrsOJ6FqYA2AZ+4riuMghmaKJfL81EU2cjuSpK0kc1mv34v6IIk2rY9G4bhBcInnucNXdc/4/AAJLFarU4HQXCOMMDIG4bhk06WOICiKB62X4IeYlxXKpUZgsgSIAnFYvEdbgUHfETdN1QS6YmtSegbdcDzvGP85wRBUEaCtIB6i7btw2/92bqfkTzq/YZ7gZ/g4hPxGFmYTCazB7+NdmlDt67Vanyz2TwClEc2BW265+NZKHYcR/R9/xTAHMdxi4VC4YH0REZkmmw0Ghb0qXQ6vaqq6jNBZIMa0S+51WpdkoaacpqmvXaJ3qd76t4930L7EEVxGff8FocoZnBNC+12+ww13eHlrA97OQSyuKY6/JUsy2ujIAJTpmkeog1jG0/cD4cAmT4DCe2kAAAAAElFTkSuQmCC"},253:function(t,e,n){var content=n(408);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("9b429cea",content,!0,{sourceMap:!1})},407:function(t,e,n){"use strict";var o=n(253);n.n(o).a},408:function(t,e,n){e=t.exports=n(38)(!1);var o=n(180)(n(191));e.push([t.i,".top-step-bar[data-v-413cfede] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0.26667rem;\n  height: 2.2rem;\n}\n.page-content[data-v-413cfede] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-413cfede] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\n.signup-title[data-v-413cfede] {\n  font-size: 0.4rem;\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n}\n.signup-title2[data-v-413cfede] {\n  font-size: 0.37333rem;\n  color: #333333;\n  margin-bottom: 0.26667rem;\n}\n#step5[data-v-413cfede] {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n}\n.production-info[data-v-413cfede] {\n  display: flex;\n}\n.production-info-like[data-v-413cfede] {\n    display: flex;\n    font-family: MicrosoftYaHei;\n    font-size: 0.32rem;\n    color: #B2B2B2;\n    letter-spacing: 0;\n    text-align: justify;\n    margin-left: 0.26667rem;\n    align-items: center;\n}\n.production-info-like .number[data-v-413cfede] {\n      font-family: MicrosoftYaHei;\n      color: red;\n      letter-spacing: 0;\n      text-align: justify;\n      line-height: 0.41333rem;\n      margin: 0 0.06667rem 0 0.06667rem;\n}\n.topic-text[data-v-413cfede] {\n  width: 9rem;\n}\n.topic-text-eng[data-v-413cfede] {\n    font-size: 0.34667rem;\n    color: #333333;\n    letter-spacing: 0;\n}\n.topic-text-chn[data-v-413cfede] {\n    font-size: 0.32rem;\n    color: #B2B2B2;\n    letter-spacing: 0;\n    line-height: 0.50667rem;\n    margin-top: 0.18667rem;\n}\n.video[data-v-413cfede] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-413cfede] {\n    width: 8.50667rem;\n    height: 4.8rem;\n    overflow: hidden;\n    position: relative;\n    background: #E6E6E6;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.video-content-play[data-v-413cfede] {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 1.01333rem;\n      height: 1.01333rem;\n      background: url("+o+") 50% 50%/contain no-repeat;\n}\n.video-content-img[data-v-413cfede] {\n      height: 4.8rem;\n}\n.title[data-v-413cfede] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 0.3rem;\n}\n.title-action-img[data-v-413cfede] {\n    width: 0.13333rem;\n}\n.title-action-text[data-v-413cfede] {\n    color: #16C8D2;\n    display: inline-block;\n    font-size: 0.34667rem;\n    margin-bottom: 0.4rem;\n}\n.reminder[data-v-413cfede] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  bottom: 2rem;\n}\n.reminder p[data-v-413cfede] {\n    font-family: MicrosoftYaHei;\n    font-size: 0.32rem;\n    color: #B2B2B2;\n}\n.action[data-v-413cfede] {\n  display: flex;\n  justify-content: space-around;\n  padding: 0 0.26667rem;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0.5rem;\n}\n.action-btn[data-v-413cfede] {\n    width: 4.26667rem;\n    line-height: 1.33333rem;\n    font-size: 0.45333rem;\n    font-family: MicrosoftYaHeiLight;\n    color: #fff;\n    text-align: center;\n}\n.action-left[data-v-413cfede] {\n    background: #16C8D2;\n}\n.action-right[data-v-413cfede] {\n    background: #FFD750;\n}\n.sharehelp[data-v-413cfede] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.sharehelp-img[data-v-413cfede] {\n    width: 7.2rem;\n    position: fixed;\n    left: 1.8rem;\n    top: 0;\n}\n",""])},427:function(t,e,n){"use strict";n.r(e);n(40);var o,r=n(5),c=n(199),d=n(195),l=n(193),f=n(181),m=n(202),v=n(194),h=n(188),_=(n(189),{name:"Signup",mixins:[v.default],head:function(){return{title:"我的作品"}},components:{"step-bar":c.b,toast:d.a},data:function(){return{steps:l.STEPS,stuEngName:"",canReUpload:!0,showShareHelp:!1,mywork:{video_url:"",topic:{cn_topic_name:"",en_topic_name:""},en_name:"",zan:"",reupload_time:""}}},methods:{reUpload:function(){this.gotoPage("presentation-signup-step3")},gotoIndex:function(){window.location="".concat("https://www.landi.com/static-web/mobile","/presentation/?activity_id=").concat(this.$route.query.activity_id)},shareToFrends:function(){this.showShareHelp=!0},playFn:function(t){var e=document.getElementById(t);Object(h.a)(e)}},mounted:(o=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,o,r,c,d,v,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=this.$route.query.activity_id,t.next=4,f.a.get("".concat(l.API.MY_WORK,"?activity_id=").concat(e));case 4:if((n=t.sent).status){t.next=11;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(n.info),t.abrupt("return");case 11:if(n.data.id){t.next=13;break}return t.abrupt("return");case 13:return this.mywork={video_url:n.data.video_url,topic:{cn_topic_name:n.data.cn_topic_name||"",en_topic_name:n.data.en_topic_name||""},en_name:n.data.en_name,zan:n.data.zan,reupload_time:n.data.reupload_time||""},this.canReUpload=n.data.is_reupload,o=encodeURIComponent(window.location.href),t.next=18,f.a.get("".concat(l.API.WX_SHARE,"?activity_id=").concat(e,"&url=").concat(o,"&work_id=").concat(n.data.id,"&sid=").concat(window.localStorage.getItem("userSid")));case 18:if((r=t.sent).status){t.next=23;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(r.info),t.abrupt("return");case 23:c=r.data.wx_config,d=r.data.wx_data,v=Object(m.initWX)({appId:c.appId,timestamp:c.timestamp,nonceStr:c.nonceStr,signature:c.signature}),h={title:d.share_title,desc:d.share_desc,link:d.share_link,imgUrl:d.share_img_url},v.ready(function(){v.updateAppMessageShareData(h),v.updateTimelineShareData(h),v.onMenuShareAppMessage(h),v.onMenuShareTimeline(h),v.error(function(t){console.log(t)})}),this.$refs.toast.hideLoadingToast();case 29:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})}),w=(n(407),n(19)),component=Object(w.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"step5"}},[o("div",{staticClass:"top-step-bar"},[o("step-bar",{attrs:{steps:t.steps,progress:100}})],1),t._v(" "),t.mywork?o("div",{staticClass:"page-content"},[o("div",{staticClass:"title"},[o("div",{staticClass:"signup-title"},[t._v("我的作品")]),t._v(" "),t.canReUpload?o("div",{staticClass:"title-action",on:{click:t.reUpload}},[o("div",{staticClass:"title-action-text"},[t._v("重新上传")]),t._v(" "),o("img",{staticClass:"title-action-img",attrs:{src:n(250)}})]):t._e()]),t._v(" "),o("div",{staticClass:"production-info"},[o("div",{staticClass:"signup-title2"},[t._v("报名学生: "+t._s(t.mywork.en_name))]),t._v(" "),o("div",{staticClass:"signup-title2 production-info-like"},[t._v("作品"),o("p",{staticClass:"number"},[t._v(t._s(t.mywork.zan))]),t._v("人已点赞")])]),t._v(" "),o("div",{staticClass:"topic-text"},[o("div",{staticClass:"topic-text-eng"},[t._v(t._s(t.mywork.topic.en_topic_name))]),t._v(" "),o("div",{staticClass:"topic-text-chn"},[t._v(t._s(t.mywork.topic.cn_topic_name))])]),t._v(" "),o("div",{staticClass:"video"},[o("div",{staticClass:"video-content",on:{click:function(e){return t.playFn("video-upload")}}},[o("video",{staticStyle:{display:"none"},attrs:{id:"video-upload",controls:"",preload:"auto",src:t.mywork.video_url}}),t._v(" "),o("img",{staticClass:"video-content-img",attrs:{src:t.mywork.video_url+"?vframe/jpg/offset/2/h/960/"}}),t._v(" "),o("div",{staticClass:"video-content-play"})])])]):t._e(),t._v(" "),!t.mywork.reupload_time?t._e():o("div",{staticClass:"reminder"},[o("p",[t._v("重新上传截止时间 "+t._s(t.mywork.reupload_time))])]),t._v(" "),o("div",{staticClass:"action"},[o("div",{staticClass:"action-btn action-left",on:{click:t.gotoIndex}},[t._v("去首页看看")]),t._v(" "),o("div",{staticClass:"action-btn action-right",on:{click:t.shareToFrends}},[t._v("分享给好友")])]),t._v(" "),o("toast",{ref:"toast"}),t._v(" "),t.showShareHelp?o("div",{staticClass:"sharehelp",on:{click:function(){t.showShareHelp=!1}}},[o("img",{staticClass:"sharehelp-img",attrs:{src:n(244)}})]):t._e()],1)},[],!1,null,"413cfede",null);e.default=component.exports}}]);