(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{217:function(t,e,n){"use strict";n.r(e),n.d(e,"initWX",function(){return d}),n.d(e,"getWXCode",function(){return l});n(60),n(23),n(24),n(13),n(42);var o=n(27);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var c=n(198);function d(t){return c.config(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},t,{debug:!0,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]})),c}function l(t){var e={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent(t),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.appid,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"#wechat_redirect")}},256:function(t,e,n){var content=n(393);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("47ddcf4a",content,!0,{sourceMap:!1})},391:function(t,e,n){t.exports=n.p+"img/0153727.png"},392:function(t,e,n){"use strict";var o=n(256);n.n(o).a},393:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-08596090] {\n  margin-top: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-08596090] {\n  padding: 0 0.4rem;\n}\nh1[data-v-08596090] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-08596090] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-08596090] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-08596090] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n.topic-text[data-v-08596090] {\n  margin-top: -0.1rem;\n  width: 9rem;\n}\n.topic-text-eng[data-v-08596090] {\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.topic-text-chn[data-v-08596090] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.video[data-v-08596090] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-08596090] {\n  width: 8.506667rem;\n}\n.title[data-v-08596090] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 0.3rem;\n}\n.title-action h3[data-v-08596090] {\n  color: #16C8D2;\n  display: inline-block;\n}\n.title-action-img[data-v-08596090] {\n  width: 0.133333rem;\n}\n.action[data-v-08596090] {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0.5rem;\n}\n.action-btn[data-v-08596090] {\n  width: 4.266667rem;\n  line-height: 1.333333rem;\n  font-size: 0.453333rem;\n  font-family: MicrosoftYaHeiLight;\n  color: #fff;\n  text-align: center;\n}\n.action-left[data-v-08596090] {\n  background: #16C8D2;\n}\n.action-right[data-v-08596090] {\n  background: #FFD750;\n}\n.sharehelp[data-v-08596090] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.sharehelp-img[data-v-08596090] {\n  width: 7.2rem;\n  position: fixed;\n  left: 1.8rem;\n  top: 0;\n}",""])},414:function(t,e,n){"use strict";n.r(e);n(40);var o,r=n(5),c=n(199),d=n(194),l=n(193),h=n(180),f=n(217),v={name:"Signup",head:function(){return{title:"我的作品"}},components:{"step-bar":c.b,toast:d.a},data:function(){return{steps:l.STEPS,stuEngName:"",canReUpload:!0,showShareHelp:!1,mywork:null}},methods:{reUpload:function(){this.$router.push({name:"presentation-signup-step3",query:this.$route.query})},gotoIndex:function(){this.$router.push({name:"presentation",query:this.$route.query})},shareToFrends:function(){this.showShareHelp=!0}},mounted:(o=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,o,r,c,d,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=this.$route.query.activity_id||1,t.next=4,h.a.get("".concat(l.API.MY_WORK,"?activity_id=").concat(e));case 4:if((n=t.sent).status){t.next=11;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(n.info),t.abrupt("return");case 11:if(n.data.id){t.next=13;break}return t.abrupt("return");case 13:return this.mywork={video_url:n.data.video_url,topic:{cn_topic_name:n.data.cn_topic_name,en_topic_name:n.data.en_topic_name},en_name:n.data.en_name},this.canReUpload=n.data.is_reupload,o="".concat(window.location.origin).concat(window.location.pathname,"?activity_id=").concat(e),t.next=18,h.a.get("".concat(l.API.WX_SHARE,"?activity_id=").concat(e,"&url=").concat(encodeURIComponent(o),"&work_id=").concat(n.data.id));case 18:if((r=t.sent).status){t.next=23;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(r.info),t.abrupt("return");case 23:c=r.data.wx_config,d=r.data.wx_data,(v=Object(f.initWX)({appId:c.appId,timestamp:c.timestamp,nonceStr:c.nonceStr,signature:c.signature})).ready(function(){v.updateAppMessageShareData({title:d.share_title,desc:d.share_desc,link:d.share_link,imgUrl:d.share_img_url}),v.updateTimelineShareData({title:d.share_title,link:d.share_link,imgUrl:d.share_img_url}),v.error(function(t){console.log(t)})}),this.$refs.toast.hideLoadingToast();case 28:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},m=(n(392),n(19)),component=Object(m.a)(v,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"top-step-bar"},[o("step-bar",{attrs:{steps:t.steps,progress:100}})],1),t._v(" "),t.mywork?o("div",{staticClass:"page-content"},[o("div",{staticClass:"title"},[o("h1",[t._v("我的作品")]),t._v(" "),t.canReUpload?o("div",{staticClass:"title-action",on:{click:t.reUpload}},[o("h3",[t._v("重新上传")]),t._v(" "),o("img",{staticClass:"title-action-img",attrs:{src:n(263)}})]):t._e()]),t._v(" "),o("h2",[t._v("报名学生: "+t._s(t.mywork.en_name))]),t._v(" "),o("div",{staticClass:"topic-text"},[o("h2",{staticClass:"topic-text-eng"},[t._v(t._s(t.mywork.topic.en_topic_name))]),t._v(" "),o("h3",{staticClass:"topic-text-chn"},[t._v(t._s(t.mywork.topic.cn_topic_name))])]),t._v(" "),o("div",{staticClass:"video"},[o("video",{staticClass:"video-content",attrs:{controls:""}},[o("source",{attrs:{src:t.mywork.video_url}})])])]):t._e(),t._v(" "),o("div",{staticClass:"action"},[o("div",{staticClass:"action-btn action-left",on:{click:t.gotoIndex}},[t._v("去首页看看")]),t._v(" "),o("div",{staticClass:"action-btn action-right",on:{click:t.shareToFrends}},[t._v("分享给好友")])]),t._v(" "),o("toast",{ref:"toast"}),t._v(" "),t.showShareHelp?o("div",{staticClass:"sharehelp",on:{click:function(){t.showShareHelp=!1}}},[o("img",{staticClass:"sharehelp-img",attrs:{src:n(391)}})]):t._e()],1)},[],!1,null,"08596090",null);e.default=component.exports}}]);