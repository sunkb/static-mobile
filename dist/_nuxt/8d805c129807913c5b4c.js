(window.webpackJsonp=window.webpackJsonp||[]).push([[26,16],{180:function(t,n,e){"use strict";e(13);var o=e(73),c=e.n(o),r=e(182),d=e.n(r);console.log("process.env.ENV_API","http://release6.landi.com/");var l=c.a.create({baseURL:"http://release6.landi.com/",transformRequest:[function(data){return d.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});l.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),l.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){return console.log(t,t.response),Promise.reject(t)}),n.a=l},181:function(t,n,e){var content=e(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},186:function(t,n,e){var content=e(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("1febb9da",content,!0,{sourceMap:!1})},187:function(t,n,e){var content=e(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("5d6f913d",content,!0,{sourceMap:!1})},188:function(t,n,e){var content=e(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("1291ba86",content,!0,{sourceMap:!1})},193:function(t,n,e){"use strict";e.r(n),e.d(n,"STEPS",function(){return c}),e.d(n,"API",function(){return r}),e.d(n,"SIGNUP_DATA_RULE",function(){return d}),e.d(n,"TOPICS",function(){return l}),e.d(n,"VIDEO_STATUS_TYPE",function(){return v}),e.d(n,"STROGE",function(){return _}),e.d(n,"LANDI_LEVEL",function(){return f}),e.d(n,"RANK_LIST",function(){return m}),e.d(n,"INDEX_STEPS",function(){return h});var o=e(190);e.d(n,"REGION_DATA",function(){return o.default});var c=["报名信息","选择题目","上传视频","确认提交","我的作品"],r={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivity/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan"},d={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},l=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},_={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},194:function(t,n,e){"use strict";var o=e(181);e.n(o).a},195:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".toasttrs-enter-active,\n.toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter,\n.toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.333333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.266667rem 0.4rem;\n  color: #fff;\n  font-size: 0.373333rem;\n  border-radius: 0.133333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n  height: 0.133333rem;\n}\n.toast-content-loading {\n  display: flex;\n  justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.066667rem;\n  height: 1.066667rem;\n}\n.toast-content-loading-content div {\n  box-sizing: border-box;\n  position: absolute;\n  width: 1.066667rem;\n  height: 1.066667rem;\n  border: 1vw solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}",""])},196:function(t,n,e){"use strict";var o={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=e,this.show=!0,setTimeout(function(){t.show=!1},n)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},c=(e(194),e(19)),component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"toasttrs"}},[t.show?e("div",[t.mask?e("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),e("div",{staticClass:"toast-content",style:t.position},[t.loading?e("div",{staticClass:"toast-content-loading"},[e("div",{staticClass:"toast-content-loading-content"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?e("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?e("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);n.a=component.exports},197:function(t,n,e){"use strict";var o=e(186);e.n(o).a},198:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar[data-v-20e1ccc8] {\n  margin-top: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-20e1ccc8] {\n  padding: 0 0.4rem;\n}\nh1[data-v-20e1ccc8] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-20e1ccc8] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-20e1ccc8] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-20e1ccc8] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#stepbar[data-v-20e1ccc8] {\n  position: relative;\n}\n.wrapper[data-v-20e1ccc8] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.circle[data-v-20e1ccc8] {\n  height: 0.693333rem;\n  width: 0.693333rem;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 0.15rem -0.07rem #666666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle-wrapper[data-v-20e1ccc8] {\n  height: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.circle-content[data-v-20e1ccc8] {\n  height: 0.533333rem;\n  width: 0.533333rem;\n  color: #fff;\n  background: #E6E6E6;\n  border-radius: 50%;\n  font-family: STYuanti-SC-Regular;\n  font-size: 0.293333rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle .accent[data-v-20e1ccc8] {\n  background: #16C8D2;\n}\n.step-item[data-v-20e1ccc8] {\n  color: #B2B2B2;\n  font-size: 0.293333rem;\n  font-weight: 400;\n}\n.step .accent[data-v-20e1ccc8] {\n  color: #16C8D2;\n}\n.progress[data-v-20e1ccc8] {\n  height: 1.2rem;\n  width: 90%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  overflow: hidden;\n}\n.progress-bar[data-v-20e1ccc8] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(0, -50%);\n  height: 0.08rem;\n  border-radius: 0.04rem;\n}\n.progress-empty[data-v-20e1ccc8] {\n  width: 100%;\n  box-shadow: inset 0 0.02rem 0.03rem -0.025rem #666666;\n}\n.progress-fill[data-v-20e1ccc8] {\n  background: #16C8D2;\n}",""])},199:function(t,n,e){t.exports=e.p+"img/7fef1c0.png"},200:function(t,n,e){t.exports=e.p+"img/a8d20f2.png"},201:function(t,n,e){t.exports=e.p+"img/31eeb1c.png"},202:function(t,n,e){"use strict";var o=e(187);e.n(o).a},203:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".wrapper[data-v-12968d04] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.content[data-v-12968d04] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n}\n.content-poster[data-v-12968d04] {\n  width: 7.466667rem;\n}\n.content-close[data-v-12968d04] {\n  width: 60%;\n  text-align: right;\n  margin-bottom: -0.106667rem;\n}\n.content-close-img[data-v-12968d04] {\n  width: 0.666667rem;\n}",""])},204:function(t,n,e){"use strict";var o=e(188);e.n(o).a},205:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar {\n  margin-top: 0.4rem;\n  height: 2.2rem;\n}\n.page-content {\n  padding: 0 0.4rem;\n}\nh1 {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2 {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3 {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n.submit {\n  text-align: center;\n  width: 100%;\n  position: fixed;\n  bottom: 0.5rem;\n  left: 0;\n}\n.submit-text {\n  margin: 0.3rem 0;\n  color: #B2B2B2;\n  font-size: 0.32rem;\n  padding: 0 0.6rem;\n}\n.submit-btn {\n  display: inline-block;\n  width: 8.666667rem;\n  line-height: 1.333333rem;\n  text-align: center;\n  font-size: 0.453333rem;\n  color: #fff;\n  background: #B2B2B2;\n}\n.submit .accent {\n  background: #16C8D2;\n}",""])},207:function(t,n,e){"use strict";e(185);var o={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},c=(e(197),e(19)),r=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"stepbar"}},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),e("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),e("div",{staticClass:"wrapper"},t._l(t.steps,function(n,o){return e("div",{key:n,staticClass:"wrapper-item"},[e("div",{staticClass:"circle-wrapper"},[e("div",{staticClass:"circle"},[e("div",{class:["circle-content",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(o+1))])])]),t._v(" "),e("div",{staticClass:"step"},[e("div",{class:["step-item",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(n))])])])}),0)])},[],!1,null,"20e1ccc8",null).exports,d={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")}}},l=(e(202),Object(c.a)(d,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.show?o("div",{staticClass:"wrapper"},[o("div",{staticClass:"content"},[o("div",{staticClass:"content-close"},[o("img",{staticClass:"content-close-img",attrs:{src:e(199)},on:{click:t.close}})]),t._v(" "),0==t.poster?o("img",{staticClass:"content-poster",attrs:{src:e(200)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?o("img",{staticClass:"content-poster",attrs:{src:e(201)},on:{click:t.gotoLink}}):t._e()])]):t._e()])},[],!1,null,"12968d04",null).exports),f={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},m=(e(204),Object(c.a)(f,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"submit"},[e("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),e("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);e.d(n,"b",function(){return r}),e.d(n,"a",function(){return l}),e.d(n,"c",function(){return m})},217:function(t,n,e){"use strict";e.r(n),e.d(n,"initWX",function(){return d}),e.d(n,"getWXCode",function(){return l});e(60),e(23),e(24),e(13),e(42);var o=e(27);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),n.push.apply(n,e)}return n}var r=e(208);function d(t){return r.config(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(source,!0).forEach(function(n){Object(o.a)(t,n,source[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(source).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))})}return t}({},t,{debug:!0,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]})),r}function l(t){var n={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent(t),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(n.appid,"&redirect_uri=").concat(n.redirect_uri,"&response_type=").concat(n.response_type,"&scope=").concat(n.scope,"#wechat_redirect")}},254:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAAXNSR0IArs4c6QAAAYhJREFUKBWNkr9Lw1AQx5tflmxCXCKOzqLQqaBg0aRJGxxEEPwXBP8NFxcnERwcXBybtMYKtqJmCoKrkyjGwYBoCzahsX6vtCXRtnjwcpfv+7x79+69VKlU2k39w1iGYXYsyzrodDrsOJ6FqYA2AZ+4riuMghmaKJfL81EU2cjuSpK0kc1mv34v6IIk2rY9G4bhBcInnucNXdc/4/AAJLFarU4HQXCOMMDIG4bhk06WOICiKB62X4IeYlxXKpUZgsgSIAnFYvEdbgUHfETdN1QS6YmtSegbdcDzvGP85wRBUEaCtIB6i7btw2/92bqfkTzq/YZ7gZ/g4hPxGFmYTCazB7+NdmlDt67Vanyz2TwClEc2BW265+NZKHYcR/R9/xTAHMdxi4VC4YH0REZkmmw0Ghb0qXQ6vaqq6jNBZIMa0S+51WpdkoaacpqmvXaJ3qd76t4930L7EEVxGff8FocoZnBNC+12+ww13eHlrA97OQSyuKY6/JUsy2ujIAJTpmkeog1jG0/cD4cAmT4DCe2kAAAAAElFTkSuQmCC"},257:function(t,n,e){var content=e(393);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("b1090ada",content,!0,{sourceMap:!1})},391:function(t,n,e){t.exports=e.p+"img/0153727.png"},392:function(t,n,e){"use strict";var o=e(257);e.n(o).a},393:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar[data-v-7a6cd5fc] {\n  margin-top: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-7a6cd5fc] {\n  padding: 0 0.4rem;\n}\nh1[data-v-7a6cd5fc] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-7a6cd5fc] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-7a6cd5fc] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-7a6cd5fc] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n.topic-text[data-v-7a6cd5fc] {\n  margin-top: -0.1rem;\n  width: 9rem;\n}\n.topic-text-eng[data-v-7a6cd5fc] {\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.topic-text-chn[data-v-7a6cd5fc] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.video[data-v-7a6cd5fc] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-7a6cd5fc] {\n  width: 8.506667rem;\n}\n.title[data-v-7a6cd5fc] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 0.3rem;\n}\n.title-action h3[data-v-7a6cd5fc] {\n  color: #16C8D2;\n  display: inline-block;\n}\n.title-action-img[data-v-7a6cd5fc] {\n  width: 0.133333rem;\n}\n.action[data-v-7a6cd5fc] {\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  position: fixed;\n  left: 0;\n  bottom: 0.5rem;\n}\n.action-btn[data-v-7a6cd5fc] {\n  width: 4.266667rem;\n  line-height: 1.333333rem;\n  font-size: 0.453333rem;\n  font-family: MicrosoftYaHeiLight;\n  color: #fff;\n  text-align: center;\n}\n.action-left[data-v-7a6cd5fc] {\n  background: #16C8D2;\n}\n.action-right[data-v-7a6cd5fc] {\n  background: #FFD750;\n}\n.sharehelp[data-v-7a6cd5fc] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.sharehelp-img[data-v-7a6cd5fc] {\n  width: 7.2rem;\n  position: fixed;\n  left: 1.8rem;\n  top: 0;\n}",""])},414:function(t,n,e){"use strict";e.r(n);e(40);var o,c=e(5),r=e(207),d=e(196),l=e(193),f=e(180),m=e(217),h={name:"Signup",head:function(){return{title:"我的作品"}},components:{"step-bar":r.b,toast:d.a},data:function(){return{steps:l.STEPS,stuEngName:"",canReUpload:!0,showShareHelp:!1,mywork:null}},methods:{reUpload:function(){this.$router.push({name:"presentation-signup-step3",query:this.$route.query})},gotoIndex:function(){this.$router.push({name:"presentation",query:this.$route.query})},shareToFrends:function(){this.showShareHelp=!0}},mounted:(o=Object(c.a)(regeneratorRuntime.mark(function t(){var n,e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),n=this.$route.query.activity_id||1,t.next=4,f.a.get("".concat(l.API.MY_WORK,"?activity_id=").concat(n));case 4:if((e=t.sent).status){t.next=10;break}return this.$refs.toast.showToast(e.info),t.abrupt("return");case 10:if(e.data.id){t.next=12;break}return t.abrupt("return");case 12:return this.mywork={video_url:e.data.video_url,topic:{cn_topic_name:e.data.cn_topic_name,en_topic_name:e.data.en_topic_name},en_name:e.data.en_name},this.canReUpload=e.data.is_reupload,t.next=16,f.a.get("".concat(l.API.WX_SHARE,"?activity_id=").concat(n,"&url=").concat(encodeURIComponent(window.location.href),"&work_id=").concat(e.data.id));case 16:if((o=t.sent).status){t.next=20;break}return this.$refs.toast.showToast(o.info),t.abrupt("return");case 20:Object(m.initWX)({appId:o.data.appId,timestamp:o.data.timestamp,nonceStr:o.data.nonceStr,signature:o.data.signature}).ready(function(){wx.updateAppMessageShareData({title:o.data.share_title,desc:o.data.share_desc,link:o.data.share_link,imgUrl:o.data.share_img_url}),wx.updateTimelineShareData({title:o.data.share_title,link:o.data.share_link,imgUrl:o.data.share_img_url})}),this.$refs.toast.hideLoadingToast();case 22:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},v=(e(392),e(19)),component=Object(v.a)(h,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"top-step-bar"},[o("step-bar",{attrs:{steps:t.steps,progress:100}})],1),t._v(" "),t.mywork?o("div",{staticClass:"page-content"},[o("div",{staticClass:"title"},[o("h1",[t._v("我的作品")]),t._v(" "),t.canReUpload?o("div",{staticClass:"title-action",on:{click:t.reUpload}},[o("h3",[t._v("重新上传")]),t._v(" "),o("img",{staticClass:"title-action-img",attrs:{src:e(254)}})]):t._e()]),t._v(" "),o("h2",[t._v("报名学生: "+t._s(t.mywork.en_name))]),t._v(" "),o("div",{staticClass:"topic-text"},[o("h2",{staticClass:"topic-text-eng"},[t._v(t._s(t.mywork.topic.en_topic_name))]),t._v(" "),o("h3",{staticClass:"topic-text-chn"},[t._v(t._s(t.mywork.topic.cn_topic_name))])]),t._v(" "),o("div",{staticClass:"video"},[o("video",{staticClass:"video-content",attrs:{controls:""}},[o("source",{attrs:{src:t.mywork.video_url}})])])]):t._e(),t._v(" "),o("div",{staticClass:"action"},[o("div",{staticClass:"action-btn action-left",on:{click:t.gotoIndex}},[t._v("去首页看看")]),t._v(" "),o("div",{staticClass:"action-btn action-right",on:{click:t.shareToFrends}},[t._v("分享给好友")])]),t._v(" "),o("toast",{ref:"toast"}),t._v(" "),t.showShareHelp?o("div",{staticClass:"sharehelp",on:{click:function(){t.showShareHelp=!1}}},[o("img",{staticClass:"sharehelp-img",attrs:{src:e(391)}})]):t._e()],1)},[],!1,null,"7a6cd5fc",null);n.default=component.exports}}]);