(window.webpackJsonp=window.webpackJsonp||[]).push([[1,18,20],{181:function(t,n,e){"use strict";e(13),e(73);var o=e(75),r=e.n(o),c=e(184),d=e.n(c);console.log("process.env.ENV_API","https://release6.landi.com/");var l=r.a.create({baseURL:"https://release6.landi.com/",transformRequest:[function(data){return d.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});l.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),l.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),n.a=l},193:function(t,n,e){"use strict";e.r(n),e.d(n,"STEPS",function(){return r}),e.d(n,"API",function(){return c}),e.d(n,"SIGNUP_DATA_RULE",function(){return d}),e.d(n,"TOPICS",function(){return l}),e.d(n,"VIDEO_STATUS_TYPE",function(){return h}),e.d(n,"STROGE",function(){return _}),e.d(n,"LANDI_LEVEL",function(){return m}),e.d(n,"RANK_LIST",function(){return f}),e.d(n,"INDEX_STEPS",function(){return v});var o=e(201);e.d(n,"REGION_DATA",function(){return o.default});var r=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache"},d={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},l=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],m=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],f=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],v=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],h={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},_={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},194:function(t,n,e){"use strict";e.r(n);e(59);n.default={methods:{gotoPage:function(t){var n=this.$route.query;delete n.code,delete n.state,delete n.work_id,this.$router.replace({name:t,query:n})},gotoPageWithHistory:function(t){var n=this.$route.query;delete n.code,delete n.state,delete n.work_id,this.$router.push({name:t,query:n})}}}},195:function(t,n,e){"use strict";var o={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=e,this.show=!0,setTimeout(function(){t.show=!1},n)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},r=(e(210),e(19)),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"toasttrs"}},[t.show?e("div",[t.mask?e("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),e("div",{staticClass:"toast-content",style:t.position},[t.loading?e("div",{staticClass:"toast-content-loading"},[e("div",{staticClass:"toast-content-loading-content"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?e("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?e("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);n.a=component.exports},196:function(t,n,e){var content=e(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},199:function(t,n,e){"use strict";e(187);var o={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},r=(e(266),e(19)),c=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"stepbar"}},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),e("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),e("div",{staticClass:"wrapper"},t._l(t.steps,function(n,o){return e("div",{key:n,staticClass:"wrapper-item"},[e("div",{staticClass:"circle-wrapper"},[e("div",{staticClass:"circle"},[e("div",{class:["circle-content",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(o+1))])])]),t._v(" "),e("div",{staticClass:"step"},[e("div",{class:["step-item",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(n))])])])}),0)])},[],!1,null,"0b8731a7",null).exports,d={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")},gotoLoginRegister:function(t){this.$emit("click",t)}}},l=(e(274),Object(r.a)(d,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.show?o("div",{staticClass:"wrapper"},[o("div",{staticClass:"content"},[o("div",{staticClass:"content-close"},[o("img",{staticClass:"content-close-img",attrs:{src:e(268)},on:{click:t.close}})]),t._v(" "),0==t.poster?o("img",{staticClass:"content-poster",attrs:{src:e(269)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?o("img",{staticClass:"content-poster",attrs:{src:e(270)},on:{click:t.gotoLink}}):t._e(),t._v(" "),2==t.poster?o("div",{staticClass:"content-poster content-register"},[2==t.poster?o("img",{staticClass:"content-poster",attrs:{src:e(271)}}):t._e(),t._v(" "),o("div",{staticClass:"register-button",on:{click:function(n){return t.gotoLoginRegister("register")}}},[o("img",{staticClass:"register-button-img",attrs:{src:e(272)}})]),t._v(" "),o("div",{staticClass:"login-button",on:{click:function(n){return t.gotoLoginRegister("login")}}},[o("img",{staticClass:"login-button-img",attrs:{src:e(273)}})])]):t._e()])]):t._e()])},[],!1,null,"60de121a",null).exports),m={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},f=(e(276),Object(r.a)(m,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"submit"},[e("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),e("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);e.d(n,"b",function(){return c}),e.d(n,"a",function(){return l}),e.d(n,"c",function(){return f})},210:function(t,n,e){"use strict";var o=e(196);e.n(o).a},211:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".toasttrs-enter-active, .toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter, .toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.33333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.26667rem 0.4rem;\n  color: #fff;\n  font-size: 0.37333rem;\n  border-radius: 0.13333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n    height: 0.13333rem;\n}\n.toast-content-loading {\n    display: flex;\n    justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.06667rem;\n  height: 1.06667rem;\n}\n.toast-content-loading-content div {\n    box-sizing: border-box;\n    position: absolute;\n    width: 1.06667rem;\n    height: 1.06667rem;\n    border: 1vw solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n      animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n      animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n      animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},212:function(t,n,e){var content=e(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("7c864e54",content,!0,{sourceMap:!1})},213:function(t,n,e){var content=e(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("64faa4bf",content,!0,{sourceMap:!1})},214:function(t,n,e){var content=e(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("1291ba86",content,!0,{sourceMap:!1})},266:function(t,n,e){"use strict";var o=e(212);e.n(o).a},267:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar[data-v-0b8731a7] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0.26667rem;\n  height: 2.2rem;\n}\n.page-content[data-v-0b8731a7] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-0b8731a7] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\n.signup-title[data-v-0b8731a7] {\n  font-size: 0.4rem;\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n}\n.signup-title2[data-v-0b8731a7] {\n  font-size: 0.37333rem;\n  color: #333333;\n  margin-bottom: 0.26667rem;\n}\n#stepbar[data-v-0b8731a7] {\n  position: relative;\n  width: 100vw;\n}\n.wrapper[data-v-0b8731a7] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 0.53333rem;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.circle[data-v-0b8731a7] {\n  height: 0.66667rem;\n  width: 0.66667rem;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 0.15rem -0.07rem #666666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle-wrapper[data-v-0b8731a7] {\n    height: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.circle-content[data-v-0b8731a7] {\n    height: 0.50667rem;\n    width: 0.50667rem;\n    color: #fff;\n    background: #E6E6E6;\n    border-radius: 50%;\n    font-family: STYuanti-SC-Regular;\n    font-size: 0.29333rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.circle .accent[data-v-0b8731a7] {\n    background: #16C8D2;\n}\n.step-item[data-v-0b8731a7] {\n  color: #B2B2B2;\n  font-size: 0.29333rem;\n  font-weight: 400;\n}\n.step .accent[data-v-0b8731a7] {\n  color: #16C8D2;\n}\n.progress[data-v-0b8731a7] {\n  height: 1.2rem;\n  width: 90%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  overflow: hidden;\n}\n.progress-bar[data-v-0b8731a7] {\n    position: absolute;\n    top: 50%;\n    left: 0;\n    transform: translate(0, -50%);\n    height: 0.08rem;\n    border-radius: 0.05333rem;\n}\n.progress-empty[data-v-0b8731a7] {\n    width: 100%;\n    background: #E6E6E6;\n    height: 0.02667rem;\n}\n.progress-fill[data-v-0b8731a7] {\n    background: #16C8D2;\n}\n",""])},268:function(t,n,e){t.exports=e.p+"img/7fef1c0.png"},269:function(t,n,e){t.exports=e.p+"img/a8d20f2.png"},270:function(t,n,e){t.exports=e.p+"img/31eeb1c.png"},271:function(t,n,e){t.exports=e.p+"img/1d152b4.png"},272:function(t,n,e){t.exports=e.p+"img/344d247.png"},273:function(t,n,e){t.exports=e.p+"img/a2c329a.png"},274:function(t,n,e){"use strict";var o=e(213);e.n(o).a},275:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".wrapper[data-v-60de121a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 999;\n}\n.content[data-v-60de121a] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n}\n.content-poster[data-v-60de121a] {\n    width: 7.46667rem;\n}\n.content-register[data-v-60de121a] {\n    position: relative;\n}\n.content-register .register-button[data-v-60de121a] {\n      position: absolute;\n      bottom: 1.2rem;\n      left: 0.73333rem;\n      width: 6rem;\n}\n.content-register .register-button-img[data-v-60de121a] {\n        width: 6rem;\n}\n.content-register .login-button[data-v-60de121a] {\n      position: absolute;\n      bottom: 0.66667rem;\n      left: 1.86667rem;\n}\n.content-register .login-button-img[data-v-60de121a] {\n        width: 3.73333rem;\n}\n.content-close[data-v-60de121a] {\n    width: 60%;\n    text-align: right;\n    margin-bottom: -0.10667rem;\n}\n.content-close-img[data-v-60de121a] {\n      width: 0.66667rem;\n}\n",""])},276:function(t,n,e){"use strict";var o=e(214);e.n(o).a},277:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar {\n  padding-top: 0.26667rem;\n  margin-bottom: 0.26667rem;\n  height: 2.2rem;\n}\n.page-content {\n  padding: 0 0.4rem;\n}\n.page-content-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\n.signup-title {\n  font-size: 0.4rem;\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n}\n.signup-title2 {\n  font-size: 0.37333rem;\n  color: #333333;\n  margin-bottom: 0.26667rem;\n}\n.submit {\n  text-align: center;\n  width: 100%;\n  position: fixed;\n  bottom: 0.58667rem;\n  left: 0;\n}\n.submit-text {\n    margin: 0.26667rem 0;\n    color: #B2B2B2;\n    font-size: 0.32rem;\n    padding: 0 0.6rem;\n}\n.submit-btn {\n    display: inline-block;\n    width: 8.66667rem;\n    line-height: 1.33333rem;\n    text-align: center;\n    font-size: 0.45333rem;\n    color: #fff;\n    background: #B2B2B2;\n}\n.submit .accent {\n    background: #16C8D2;\n}\n",""])}}]);