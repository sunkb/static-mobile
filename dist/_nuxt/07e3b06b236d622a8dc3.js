(window.webpackJsonp=window.webpackJsonp||[]).push([[24,18,20],{181:function(t,e,n){"use strict";n(13);var o=n(74),r=n.n(o),c=n(184),d=n.n(c);console.log("process.env.ENV_API","https://release6.landi.com/");var l=r.a.create({baseURL:"https://release6.landi.com/",transformRequest:[function(data){return d.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});l.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),l.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:var e="https://release6.landi.com/Mobile/Login/index?redirect_url="+window.location.href;console.log("loginUrl",e),window.location.href=e;break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=l},188:function(t,e,n){"use strict";n.r(e),n.d(e,"STEPS",function(){return r}),n.d(e,"API",function(){return c}),n.d(e,"SIGNUP_DATA_RULE",function(){return d}),n.d(e,"TOPICS",function(){return l}),n.d(e,"VIDEO_STATUS_TYPE",function(){return v}),n.d(e,"STROGE",function(){return w}),n.d(e,"LANDI_LEVEL",function(){return f}),n.d(e,"RANK_LIST",function(){return m}),n.d(e,"INDEX_STEPS",function(){return h});var o=n(196);n.d(e,"REGION_DATA",function(){return o.default});var r=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid"},d={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},l=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},w={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},189:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";n.r(e);n(59);e.default={methods:{gotoPage:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.replace({name:t,query:e})}}}},192:function(t,e,n){"use strict";var o={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=n,this.show=!0,setTimeout(function(){t.show=!1},e)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},r=(n(202),n(19)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toasttrs"}},[t.show?n("div",[t.mask?n("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),n("div",{staticClass:"toast-content",style:t.position},[t.loading?n("div",{staticClass:"toast-content-loading"},[n("div",{staticClass:"toast-content-loading-content"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?n("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?n("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},202:function(t,e,n){"use strict";var o=n(189);n.n(o).a},203:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".toasttrs-enter-active,\n.toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter,\n.toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.333333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.266667rem 0.4rem;\n  color: #fff;\n  font-size: 0.373333rem;\n  border-radius: 0.133333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n  height: 0.133333rem;\n}\n.toast-content-loading {\n  display: flex;\n  justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.066667rem;\n  height: 1.066667rem;\n}\n.toast-content-loading-content div {\n  box-sizing: border-box;\n  position: absolute;\n  width: 1.066667rem;\n  height: 1.066667rem;\n  border: 1vw solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}",""])},208:function(t,e,n){"use strict";n.r(e),n.d(e,"initWX",function(){return d}),n.d(e,"getWXCode",function(){return l});n(61),n(23),n(24),n(13),n(43);var o=n(27);function r(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,n)}return e}var c=n(194);function d(t){return c.config(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(source,!0).forEach(function(e){Object(o.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):r(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}({},t,{debug:!1,jsApiList:["onMenuShareAppMessage","onMenuShareTimeline"]})),c}function l(t){var e={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent(t),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.appid,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"&state=1#wechat_redirect")}},243:function(t,e,n){t.exports=n.p+"img/0153727.png"},244:function(t,e,n){var content=n(356);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("04dd6b44",content,!0,{sourceMap:!1})},353:function(t,e,n){t.exports=n.p+"img/1fcd863.png"},354:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAAhxJREFUWAnNWD9PwkAcbREENl1IjIuLxgE/BAkrhoGExJEwufERDCMJH4L4ARwwUWd2Bx2MDLiAJg66mWgA32vukl7TXtqzR/0lL/fn9+e93rXXguOE2Hq9LgFnwBiYAV+ivUPbAcohad4UfSKGsTNA5rIWa5aicpV5BNaAKaCzdzhPlUQMOAfQpzPWrgVzlTECeLVLXZWAry8LYL4f8OmG5OjIXKWFowWsdNkRvnPME0mNXC0pwmUHE/toHoBdjhPaUsRvJcxj+Adw4rruPCeSL9CaiGA6BZiIYC45ye24WI09tC/ANpCFfYP0gCvSBLISwQsnd5NC6hxlbHUKqWYsgvRVCqn8AyEVCol35NpVW6aQN7scsaq/UsgiVqjdoAWFTOxyxKo+oZBxrFC7QWOerBTzBBza5YqsPoXnOIcXzgqdQWSYfceAGuTbtwC+R+DIPq/C8IxRFUJ+uC0OO2h67G/YeoJbpcX9MgI2ZSM/u7c1cgIKdtDnFvFDyabNUZxb8ilJvK2RA+FoY8xvBFvG2m2/iEgirEzX4v50I4nDHBAytCBmGMalnYMIHnaXKYphLeWe1ArwO5FYAK5TEMMaPKvMDQWKwM0fxDC3aK7Al4lC/C18ayCGOel+eKEgV+YqgRjGprMSvkXxuiicB+LcwIzJB/NTHYOAT5Pu0abP7OkwUQqyHuD/54D9LF6c3o/3BsjvBRomFyRzfgEo9JTJnRgrcgAAAABJRU5ErkJggg=="},355:function(t,e,n){"use strict";var o=n(244);n.n(o).a},356:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-32bede50] {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-32bede50] {\n  padding: 0 0.4rem;\n}\nh1[data-v-32bede50] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-32bede50] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-32bede50] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-32bede50] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#share[data-v-32bede50] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.content[data-v-32bede50] {\n  width: 9.2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 0.3rem;\n  box-shadow: 0 0 0.3rem -0.15rem #999999;\n  background: #fff;\n}\n.content-video[data-v-32bede50] {\n  width: 8.52rem;\n  height: 5.6rem;\n  overflow: hidden;\n}\n.content-topic-eng[data-v-32bede50] {\n  color: #333333;\n  margin-top: 0.3rem;\n}\n.content-action[data-v-32bede50] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 0.3rem;\n}\n.content-action-author[data-v-32bede50] {\n  color: #333333;\n  font-size: 0.346667rem;\n}\n.content-action-actions[data-v-32bede50] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 4rem;\n}\n.content-action-actions-text[data-v-32bede50] {\n  color: #B2B2B2;\n  font-size: 0.32rem;\n}\n.content-action-actions-btn[data-v-32bede50] {\n  width: 0.8rem;\n  height: 0.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n}\n.content-action-actions .share[data-v-32bede50] {\n  width: 0.5rem;\n  height: 0.5rem;\n}\n.content-action-actions .like[data-v-32bede50] {\n  width: 0.47rem;\n  height: 0.46rem;\n}\n.action[data-v-32bede50] {\n  background: #fff;\n  width: 100vw;\n  padding: 0.5rem 0;\n  text-align: center;\n}\n.action-text[data-v-32bede50] {\n  text-align: center;\n  font-size: 0.32rem;\n  color: #B2B2B2;\n  margin-bottom: 0.3rem;\n}\n.action-text-accent[data-v-32bede50] {\n  color: #16C8D2;\n}\n.action-content[data-v-32bede50] {\n  display: inline-block;\n  text-align: center;\n  width: 8.666667rem;\n  position: relative;\n  line-height: 1.333333rem;\n  border-radius: 0.666667rem;\n}\n.action-content-text[data-v-32bede50] {\n  font-size: 0.45rem;\n  color: #fff;\n}\n.action-content-deco0[data-v-32bede50] {\n  position: absolute;\n  top: 0.15rem;\n  left: 0.7rem;\n  width: 0.16rem;\n  height: 0.16rem;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 0.08rem;\n}\n.action-content-deco1[data-v-32bede50] {\n  position: absolute;\n  top: 0.15rem;\n  left: 1rem;\n  width: 1.333333rem;\n  height: 0.16rem;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 0.08rem;\n}\n.topaction[data-v-32bede50] {\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  color: #333333;\n  font-size: 0.346667rem;\n  margin-top: 0.8rem;\n}\n.topaction-rank[data-v-32bede50] {\n  border-top-left-radius: 0.4rem;\n  border-bottom-left-radius: 0.4rem;\n  box-shadow: 0 0 0.4rem -0.3rem #666666;\n  background: #fff;\n  width: 1.92rem;\n  line-height: 0.853333rem;\n  text-align: center;\n  padding-left: 0.133333rem;\n}\n.sharehelp[data-v-32bede50] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.sharehelp-img[data-v-32bede50] {\n  width: 7.2rem;\n  position: fixed;\n  left: 1.8rem;\n  top: 0;\n}",""])},413:function(t,e,n){"use strict";n.r(e);n(75),n(40);var o,r,c,d,l=n(5),f=n(181),m=n(188),h=n(208),v=n(192),w={name:"Share",mixins:[n(190).default],head:function(){return{title:"才艺视频"}},components:{toast:v.a},data:function(){return{stuData:{videoSrc:null,like:0,name:""},themeColor:"#fff",topic:{cn_topic_name:"",en_topic_name:""},liked:!1,shareStyle:{},showShareHelp:!1}},methods:{clickLike:(d=Object(l.a)(regeneratorRuntime.mark(function t(){var e,n,o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.liked,(n=this.$route.query).activity_id,o=n.work_id,e){t.next=8;break}return t.next=5,f.a.get("".concat(m.API.LIKE,"?work_id=").concat(o));case 5:r=t.sent,t.next=11;break;case 8:return t.next=10,f.a.get("".concat(m.API.UNLIKE,"?&work_id=").concat(o));case 10:r=t.sent;case 11:if(!r.status){t.next=16;break}return t.next=14,this.initData();case 14:t.next=17;break;case 16:this.$refs.toast.showToast(r.info);case 17:case"end":return t.stop()}},t,this)})),function(){return d.apply(this,arguments)}),initData:(c=Object(l.a)(regeneratorRuntime.mark(function t(){var e,n,o,r,c,d,l,v,w;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query,n=e.activity_id,o=e.work_id,r=encodeURIComponent(location.href.split("#")[0]),t.next=4,f.a.get("".concat(m.API.WX_SHARE,"?activity_id=").concat(n,"&url=").concat(encodeURIComponent(r),"&work_id=").concat(o));case 4:if((c=t.sent).status){t.next=8;break}return this.$refs.toast.showToast(c.info),t.abrupt("return");case 8:d=c.data.wx_config,l=c.data.wx_data,v=Object(h.initWX)({appId:d.appId,timestamp:d.timestamp,nonceStr:d.nonceStr,signature:d.signature}),w={title:l.share_title,desc:l.share_desc,link:l.share_link,imgUrl:l.share_img_url},v.ready(function(){v.onMenuShareAppMessage(w),v.onMenuShareTimeline(w)});case 13:case"end":return t.stop()}},t,this)})),function(){return c.apply(this,arguments)}),gotoRegister:function(){window.location="https://www.landi.com/Api/FloorPage/index?from=zcyl&param=_bCOvjKLmiST2qHEDcTOScntrYF3wIzwj_ceg"},getOpenid:(r=Object(l.a)(regeneratorRuntime.mark(function t(){var e,code,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query,code=e.code,e.activity_id,e.work_id,t.next=3,f.a.get("".concat(m.API.GET_OPENID,"?code=").concat(code));case 3:(n=t.sent).status||this.$refs.toast.showToast(n.info);case 5:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),shareToFrends:function(){this.showShareHelp=!0}},mounted:(o=Object(l.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),t.next=3,this.initData();case 3:this.$refs.toast.hideLoadingToast();case 4:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},_=(n(355),n(19)),component=Object(_.a)(w,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{style:t.shareStyle,attrs:{id:"share"}},[o("div",{staticClass:"topaction"},[o("div"),t._v(" "),o("div",{staticClass:"topaction-rank",on:{click:function(e){return t.gotoPage("presentation-rank")}}},[t._v("点赞排行")])]),t._v(" "),o("div",{staticClass:"content"},[t.stuData.videoSrc?o("video",{staticClass:"content-video",attrs:{controls:""}},[o("source",{attrs:{src:t.stuData.videoSrc}})]):t._e(),t._v(" "),o("h3",{staticClass:"content-topic-eng"},[t._v(t._s(t.topic.en_topic_name))]),t._v(" "),o("h3",{staticClass:"content-topic-chn"},[t._v(t._s(t.topic.cn_topic_name))]),t._v(" "),o("div",{staticClass:"content-action"},[o("div",{staticClass:"content-action-author"},[t._v("作者: "+t._s(t.stuData.name))]),t._v(" "),o("div",{staticClass:"content-action-actions"},[o("div",{staticClass:"content-action-actions-btn",staticStyle:{background:"#FFD750"},on:{click:t.shareToFrends}},[o("img",{staticClass:"share",attrs:{src:n(353)}})]),t._v(" "),o("div",{staticClass:"content-action-actions-btn",style:{background:t.liked?"#F0552D":"#E6E6E6"},on:{click:t.clickLike}},[o("img",{staticClass:"like",attrs:{src:n(354)}})]),t._v(" "),o("div",{staticClass:"content-action-actions-text"},[t._v(t._s(t.stuData.like)+"人点赞")])])])]),t._v(" "),o("div",{staticClass:"action"},[o("div",{staticClass:"action-text"},[o("span",{staticClass:"action-text-accent",on:{click:t.gotoRegister}},[t._v("免费领取")]),t._v(" "),o("span",[t._v("兰迪288元试听课大礼包")])]),t._v(" "),o("div",{staticClass:"action-content",style:{background:t.themeColor},on:{click:function(e){return t.gotoPage("presentation")}}},[o("div",{staticClass:"action-content-text"},[t._v("去首页看看")]),t._v(" "),o("div",{staticClass:"action-content-deco0"}),t._v(" "),o("div",{staticClass:"action-content-deco1"})])]),t._v(" "),t.showShareHelp?o("div",{staticClass:"sharehelp",on:{click:function(){t.showShareHelp=!1}}},[o("img",{staticClass:"sharehelp-img",attrs:{src:n(243)}})]):t._e(),t._v(" "),o("toast",{ref:"toast"})],1)},[],!1,null,"32bede50",null);e.default=component.exports}}]);