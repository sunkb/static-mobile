(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{180:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},185:function(t,e,n){var r=n(7),o=n(20),c=n(10),d=n(186),l="["+d+"]",f=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),v=function(t,e,n){var o={},l=c(function(){return!!d[t]()||"​"!="​"[t]()}),f=o[t]=l?e(m):d[t];n&&(o[n]=f),r(r.P+r.F*l,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},186:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},187:function(t,e,n){"use strict";var r=n(3),o=n(16),c=n(21),d=n(109),l=n(57),f=n(10),h=n(41).f,v=n(58).f,m=n(9).f,w=n(185).trim,_=r.Number,y=_,A=_.prototype,k="Number"==c(n(73)(A)),x="trim"in String.prototype,E=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=x?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>o)return NaN;return parseInt(d,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(k?f(function(){A.valueOf.call(n)}):"Number"!=c(n))?d(new y(E(e)),n,_):E(e)};for(var S,C=n(8)?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;C.length>I;I++)o(y,S=C[I])&&!o(_,S)&&m(_,S,v(y,S));_.prototype=A,A.constructor=_,n(11)(r,"Number",_)}},193:function(t,e,n){t.exports=n.p+"img/6446c2c.png"},195:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(108);function r(t){return t.webkitEnterFullScreen?"webkitEnterFullScreen":!!t.webkitRequestFullScreen&&"webkitRequestFullScreen"}var o=function(t){var video=t,e=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var t=r(video);video[t]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play(),video.addEventListener("play",function(){var t=r(video);video[t]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))}},208:function(t,e,n){"use strict";n.r(e),n.d(e,"initWX",function(){return d}),n.d(e,"getWXCode",function(){return l});n(61),n(23),n(24),n(13),n(43);var r=n(27);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var c=n(194);function d(t){return c.config(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(source,!0).forEach(function(e){Object(r.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},t,{debug:!1,jsApiList:["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"]})),c}function l(t){var e={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent(t),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.appid,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"&state=1#wechat_redirect")}},243:function(t,e,n){t.exports=n.p+"img/0153727.png"},249:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAAXNSR0IArs4c6QAAAYhJREFUKBWNkr9Lw1AQx5tflmxCXCKOzqLQqaBg0aRJGxxEEPwXBP8NFxcnERwcXBybtMYKtqJmCoKrkyjGwYBoCzahsX6vtCXRtnjwcpfv+7x79+69VKlU2k39w1iGYXYsyzrodDrsOJ6FqYA2AZ+4riuMghmaKJfL81EU2cjuSpK0kc1mv34v6IIk2rY9G4bhBcInnucNXdc/4/AAJLFarU4HQXCOMMDIG4bhk06WOICiKB62X4IeYlxXKpUZgsgSIAnFYvEdbgUHfETdN1QS6YmtSegbdcDzvGP85wRBUEaCtIB6i7btw2/92bqfkTzq/YZ7gZ/g4hPxGFmYTCazB7+NdmlDt67Vanyz2TwClEc2BW265+NZKHYcR/R9/xTAHMdxi4VC4YH0REZkmmw0Ghb0qXQ6vaqq6jNBZIMa0S+51WpdkoaacpqmvXaJ3qd76t4930L7EEVxGff8FocoZnBNC+12+ww13eHlrA97OQSyuKY6/JUsy2ujIAJTpmkeog1jG0/cD4cAmT4DCe2kAAAAAElFTkSuQmCC"},252:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("f213739e",content,!0,{sourceMap:!1})},395:function(t,e,n){"use strict";var r=n(252);n.n(r).a},396:function(t,e,n){e=t.exports=n(38)(!1);var r=n(180)(n(193));e.push([t.i,".top-step-bar[data-v-e8c43116] {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-e8c43116] {\n  padding: 0 0.4rem;\n}\nh1[data-v-e8c43116] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-e8c43116] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-e8c43116] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-e8c43116] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#step5[data-v-e8c43116] {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n}\n.topic-text[data-v-e8c43116] {\n  margin-top: -0.1rem;\n  width: 9rem;\n}\n.topic-text-eng[data-v-e8c43116] {\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.topic-text-chn[data-v-e8c43116] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.video[data-v-e8c43116] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-e8c43116] {\n  width: 8.506667rem;\n  height: 4.8rem;\n  overflow: hidden;\n  position: relative;\n  background: #E6E6E6;\n}\n.video-content-play[data-v-e8c43116] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 1.333333rem;\n  height: 1.333333rem;\n  background: url("+r+") 50% 50%/contain no-repeat;\n}\n.title[data-v-e8c43116] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 0.3rem;\n}\n.title-action h3[data-v-e8c43116] {\n  color: #16C8D2;\n  display: inline-block;\n}\n.title-action-img[data-v-e8c43116] {\n  width: 0.133333rem;\n}\n.action[data-v-e8c43116] {\n  display: flex;\n  justify-content: space-around;\n  padding: 0 0.266667rem;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0.5rem;\n}\n.action-btn[data-v-e8c43116] {\n  width: 4.266667rem;\n  line-height: 1.333333rem;\n  font-size: 0.453333rem;\n  font-family: MicrosoftYaHeiLight;\n  color: #fff;\n  text-align: center;\n}\n.action-left[data-v-e8c43116] {\n  background: #16C8D2;\n}\n.action-right[data-v-e8c43116] {\n  background: #FFD750;\n}\n.sharehelp[data-v-e8c43116] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.sharehelp-img[data-v-e8c43116] {\n  width: 7.2rem;\n  position: fixed;\n  left: 1.8rem;\n  top: 0;\n}",""])},417:function(t,e,n){"use strict";n.r(e);n(40);var r,o=n(5),c=n(201),d=n(192),l=n(188),f=n(181),h=n(208),v=n(190),m=n(195),w={name:"Signup",mixins:[v.default],head:function(){return{title:"我的作品"}},components:{"step-bar":c.b,toast:d.a},data:function(){return{steps:l.STEPS,stuEngName:"",canReUpload:!0,showShareHelp:!1,mywork:null}},methods:{reUpload:function(){this.gotoPage("presentation-signup-step3")},gotoIndex:function(){window.location="".concat("https://release6.landi.com/static-web/mobile","/presentation/?activity_id=").concat(this.$route.query.activity_id)},shareToFrends:function(){this.showShareHelp=!0},playFn:function(t){var e=document.getElementById(t);Object(m.a)(e)}},mounted:(r=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,r,o,c,d,v,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=this.$route.query.activity_id,t.next=4,f.a.get("".concat(l.API.MY_WORK,"?activity_id=").concat(e));case 4:if((n=t.sent).status){t.next=11;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(n.info),t.abrupt("return");case 11:if(n.data.id){t.next=13;break}return t.abrupt("return");case 13:return this.mywork={video_url:n.data.video_url,topic:{cn_topic_name:n.data.cn_topic_name,en_topic_name:n.data.en_topic_name},en_name:n.data.en_name},this.canReUpload=n.data.is_reupload,r=encodeURIComponent(window.location.href),t.next=18,f.a.get("".concat(l.API.WX_SHARE,"?activity_id=").concat(e,"&url=").concat(r,"&work_id=").concat(n.data.id));case 18:if((o=t.sent).status){t.next=23;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(o.info),t.abrupt("return");case 23:c=o.data.wx_config,d=o.data.wx_data,v=Object(h.initWX)({appId:c.appId,timestamp:c.timestamp,nonceStr:c.nonceStr,signature:c.signature}),m={title:d.share_title,desc:d.share_desc,link:d.share_link,imgUrl:d.share_img_url},v.ready(function(){v.updateAppMessageShareData(m),v.updateTimelineShareData(m),v.error(function(t){console.log(t)})}),this.$refs.toast.hideLoadingToast();case 29:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},_=(n(395),n(19)),component=Object(_.a)(w,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"step5"}},[r("div",{staticClass:"top-step-bar"},[r("step-bar",{attrs:{steps:t.steps,progress:100}})],1),t._v(" "),t.mywork?r("div",{staticClass:"page-content"},[r("div",{staticClass:"title"},[r("h1",[t._v("我的作品")]),t._v(" "),t.canReUpload?r("div",{staticClass:"title-action",on:{click:t.reUpload}},[r("h3",[t._v("重新上传")]),t._v(" "),r("img",{staticClass:"title-action-img",attrs:{src:n(249)}})]):t._e()]),t._v(" "),r("h2",[t._v("报名学生: "+t._s(t.mywork.en_name))]),t._v(" "),r("div",{staticClass:"topic-text"},[r("h2",{staticClass:"topic-text-eng"},[t._v(t._s(t.mywork.topic.en_topic_name))]),t._v(" "),r("h3",{staticClass:"topic-text-chn"},[t._v(t._s(t.mywork.topic.cn_topic_name))])]),t._v(" "),r("div",{staticClass:"video"},[r("div",{staticClass:"video-content",on:{click:function(e){return t.playFn("video-upload")}}},[r("video",{staticStyle:{display:"none"},attrs:{id:"video-upload",controls:"",preload:"auto",src:t.mywork.video_url}}),t._v(" "),r("div",{staticClass:"video-content-play"})])])]):t._e(),t._v(" "),r("div",{staticClass:"action"},[r("div",{staticClass:"action-btn action-left",on:{click:t.gotoIndex}},[t._v("去首页看看")]),t._v(" "),r("div",{staticClass:"action-btn action-right",on:{click:t.shareToFrends}},[t._v("分享给好友")])]),t._v(" "),r("toast",{ref:"toast"}),t._v(" "),t.showShareHelp?r("div",{staticClass:"sharehelp",on:{click:function(){t.showShareHelp=!1}}},[r("img",{staticClass:"sharehelp-img",attrs:{src:n(243)}})]):t._e()],1)},[],!1,null,"e8c43116",null);e.default=component.exports}}]);