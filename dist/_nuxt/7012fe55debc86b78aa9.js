(window.webpackJsonp=window.webpackJsonp||[]).push([[1,27,29],{180:function(t,e,n){"use strict";n(13),n(57),n(73);var o=n(74),r=n.n(o),c=n(184),l=n.n(c);console.log("process.env.ENV_API","https://release6.landi.com/");var d=r.a.create({baseURL:"http:"===document.location.protocol?"https://release6.landi.com/".replace("https","http"):"https://release6.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=d},186:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("08a709fc",content,!0,{sourceMap:!1})},189:function(t,e,n){"use strict";var o={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=n,this.show=!0,setTimeout(function(){t.show=!1},e)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},r=(n(199),n(19)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toasttrs"}},[t.show?n("div",[t.mask?n("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),n("div",{staticClass:"toast-content",style:t.position},[t.loading?n("div",{staticClass:"toast-content-loading"},[n("div",{staticClass:"toast-content-loading-content"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?n("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?n("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},192:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("60fb927a",content,!0,{sourceMap:!1})},193:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("137c1396",content,!0,{sourceMap:!1})},194:function(t,e,n){var content=n(226);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("3bf1dc2c",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";n.r(e),n.d(e,"STEPS",function(){return r}),n.d(e,"API",function(){return c}),n.d(e,"SIGNUP_DATA_RULE",function(){return l}),n.d(e,"TOPICS",function(){return d}),n.d(e,"VIDEO_STATUS_TYPE",function(){return h}),n.d(e,"STROGE",function(){return _}),n.d(e,"LANDI_LEVEL",function(){return m}),n.d(e,"RANK_LIST",function(){return f}),n.d(e,"INDEX_STEPS",function(){return v});var o=n(202);n.d(e,"REGION_DATA",function(){return o.default});var r=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache",CHECK_LOGIN:"/Mobile/StudentActivity/login",GET_ZAN_CONFIG:"/Mobile/StudentActivityDetail/getZanConfig",MY_SID:"/Mobile/StudentActivity/mySid"},l={engNumName:{rule:/^[0-9a-zA-Z]+$/,message:"请输入正确的英文名"},chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],m=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],f=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],v=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],h={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},_={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},196:function(t,e,n){"use strict";n.r(e);n(57);e.default={methods:{gotoPage:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.replace({name:t,query:e})},gotoPageWithHistory:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.push({name:t,query:e})}}}},198:function(t,e,n){"use strict";n(185);var o={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},r=(n(215),n(19)),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"stepbar"}},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),n("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),n("div",{staticClass:"wrapper"},t._l(t.steps,function(e,o){return n("div",{key:e,staticClass:"wrapper-item"},[n("div",{staticClass:"circle-wrapper"},[n("div",{staticClass:"circle"},[n("div",{class:["circle-content",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(o+1))])])]),t._v(" "),n("div",{staticClass:"step"},[n("div",{class:["step-item",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(e))])])])}),0)])},[],!1,null,"0b8731a7",null).exports,l={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")},gotoLoginRegister:function(t){this.$emit("click",t)}}},d=(n(223),Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.show?o("div",{staticClass:"wrapper"},[o("div",{staticClass:"content"},[o("div",{staticClass:"content-close"},[o("img",{staticClass:"content-close-img",attrs:{src:n(217)},on:{click:t.close}})]),t._v(" "),0==t.poster?o("img",{staticClass:"content-poster",attrs:{src:n(218)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?o("img",{staticClass:"content-poster",attrs:{src:n(219)},on:{click:t.gotoLink}}):t._e(),t._v(" "),2==t.poster?o("div",{staticClass:"content-poster content-register"},[2==t.poster?o("img",{staticClass:"content-poster",attrs:{src:n(220)}}):t._e(),t._v(" "),o("div",{staticClass:"register-button",on:{click:function(e){return t.gotoLoginRegister("login")}}},[o("img",{staticClass:"register-button-img",attrs:{src:n(221)}})]),t._v(" "),o("div",{staticClass:"login-button",on:{click:function(e){return t.gotoLoginRegister("register")}}},[o("img",{staticClass:"login-button-img",attrs:{src:n(222)}})])]):t._e()])]):t._e()])},[],!1,null,"daa783c0",null).exports),m={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},f=(n(225),Object(r.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"submit"},[n("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),n("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);n.d(e,"b",function(){return c}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return f})},199:function(t,e,n){"use strict";var o=n(186);n.n(o).a},200:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:50%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.6)}.toast-content-div{height:0.13333rem}.toast-content-loading{display:flex;justify-content:center}.toast-content-loading-content{position:relative;width:1.06667rem;height:1.06667rem}.toast-content-loading-content div{box-sizing:border-box;position:absolute;width:1.06667rem;height:1.06667rem;border:1vw solid #fff;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#fff transparent transparent transparent}.toast-content-loading-content div:nth-child(1){animation-delay:-0.45s}.toast-content-loading-content div:nth-child(2){animation-delay:-0.3s}.toast-content-loading-content div:nth-child(3){animation-delay:-0.15s}@keyframes lds-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n",""])},203:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(108);var o=function(t){var video=t,e=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?void 0!==video.play()&&(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var t,e=(t=video).webkitEnterFullScreen?"webkitEnterFullScreen":!!t.webkitRequestFullScreen&&"webkitRequestFullScreen";video[e]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play())}},210:function(t,e,n){t.exports=n.p+"img/6446c2c.png"},215:function(t,e,n){"use strict";var o=n(192);n.n(o).a},216:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-0b8731a7]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-0b8731a7]{padding:0 0.4rem}.page-content-content[data-v-0b8731a7]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-0b8731a7]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-0b8731a7]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#stepbar[data-v-0b8731a7]{position:relative;width:100vw}.wrapper[data-v-0b8731a7]{display:flex;align-items:center;justify-content:space-around;padding:0 0.53333rem;width:100%;position:absolute;top:0;left:0}.circle[data-v-0b8731a7]{height:0.66667rem;width:0.66667rem;border-radius:50%;background:#fff;box-shadow:0 0 0.15rem -0.07rem #666666;display:flex;justify-content:center;align-items:center}.circle-wrapper[data-v-0b8731a7]{height:1.2rem;display:flex;align-items:center;justify-content:center}.circle-content[data-v-0b8731a7]{height:0.50667rem;width:0.50667rem;color:#fff;background:#E6E6E6;border-radius:50%;font-family:STYuanti-SC-Regular;font-size:0.29333rem;display:flex;justify-content:center;align-items:center}.circle .accent[data-v-0b8731a7]{background:#16C8D2}.step-item[data-v-0b8731a7]{color:#B2B2B2;font-size:0.29333rem;font-weight:400}.step .accent[data-v-0b8731a7]{color:#16C8D2}.progress[data-v-0b8731a7]{height:1.2rem;width:90%;position:absolute;top:0;left:5%;overflow:hidden}.progress-bar[data-v-0b8731a7]{position:absolute;top:50%;left:0;transform:translate(0, -50%);height:0.08rem;border-radius:0.05333rem}.progress-empty[data-v-0b8731a7]{width:100%;background:#E6E6E6;height:0.02667rem}.progress-fill[data-v-0b8731a7]{background:#16C8D2}\n",""])},217:function(t,e,n){t.exports=n.p+"img/7fef1c0.png"},218:function(t,e,n){t.exports=n.p+"img/9f5ce98.png"},219:function(t,e,n){t.exports=n.p+"img/31eeb1c.png"},220:function(t,e,n){t.exports=n.p+"img/6de9023.png"},221:function(t,e,n){t.exports=n.p+"img/344d247.png"},222:function(t,e,n){t.exports=n.p+"img/a2c329a.png"},223:function(t,e,n){"use strict";var o=n(193);n.n(o).a},224:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".wrapper[data-v-daa783c0]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.6);z-index:999}.content[data-v-daa783c0]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:inherit;height:inherit}.content-poster[data-v-daa783c0]{width:7.46667rem}.content-register[data-v-daa783c0]{position:relative}.content-register .register-button[data-v-daa783c0]{position:absolute;bottom:1.2rem;left:0.73333rem;width:6rem}.content-register .register-button-img[data-v-daa783c0]{width:6rem}.content-register .login-button[data-v-daa783c0]{position:absolute;bottom:0.66667rem;left:1.86667rem}.content-register .login-button-img[data-v-daa783c0]{width:3.73333rem}.content-close[data-v-daa783c0]{width:60%;text-align:right;margin-bottom:-0.10667rem}.content-close-img[data-v-daa783c0]{width:0.66667rem}\n",""])},225:function(t,e,n){"use strict";var o=n(194);n.n(o).a},226:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content{padding:0 0.4rem}.page-content-content{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}.submit{text-align:center;width:100%;position:fixed;bottom:0.58667rem;left:0}.submit-text{margin:0.26667rem 0;color:#B2B2B2;font-size:0.32rem;padding:0 0.6rem}.submit-btn{display:inline-block;width:8.66667rem;line-height:1.33333rem;text-align:center;font-size:0.45333rem;color:#fff;background:#B2B2B2}.submit .accent{background:#16C8D2}\n",""])}}]);