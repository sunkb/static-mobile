(window.webpackJsonp=window.webpackJsonp||[]).push([[41,20],{180:function(t,e,o){"use strict";o(13),o(73);var n=o(75),r=o.n(n),d=o(184),c=o.n(d);console.log("process.env.ENV_API","https://release6.landi.com/");var l=r.a.create({baseURL:"https://release6.landi.com/",transformRequest:[function(data){return c.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});l.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),l.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=l},185:function(t,e,o){var content=o(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("08a709fc",content,!0,{sourceMap:!1})},189:function(t,e,o){"use strict";var n={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1,queue:[]}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.show?this.queue.push({text:text,mask:mask,timeout:e,position:o}):(this.queue.shift(),this.text=text,this.mask=mask,this.position=o,this.show=!0,setTimeout(function(){t.show=!1,t.queue.length>0&&t.showToast(t.queue[0].text,t.queue[0].mask,t.queue[0].timeout,t.queue[0].position)},e))},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},r=(o(195),o(19)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"toasttrs"}},[t.show?o("div",[t.mask?o("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),o("div",{staticClass:"toast-content",style:t.position},[t.loading?o("svg",{staticClass:"toast-content-loading",attrs:{viewBox:"25 25 50 50"}},[o("circle",{staticClass:"toast-content-loading",attrs:{cx:"50",cy:"50",r:"20"}})]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?o("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?o("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},191:function(t,e,o){"use strict";o.r(e),o.d(e,"STEPS",function(){return r}),o.d(e,"API",function(){return d}),o.d(e,"SIGNUP_DATA_RULE",function(){return c}),o.d(e,"TOPICS",function(){return l}),o.d(e,"VIDEO_STATUS_TYPE",function(){return v}),o.d(e,"STROGE",function(){return _}),o.d(e,"LANDI_LEVEL",function(){return f}),o.d(e,"RANK_LIST",function(){return m}),o.d(e,"INDEX_STEPS",function(){return h});var n=o(193);o.d(e,"REGION_DATA",function(){return n.default});var r=["报名信息","选择题目","上传视频","确认提交","我的作品"],d={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache",CHECK_LOGIN:"/Mobile/StudentActivity/login",GET_ZAN_CONFIG:"/Mobile/StudentActivityDetail/getZanConfig",MY_SID:"/Mobile/StudentActivity/mySid"},c={engNumName:{rule:/^[0-9a-zA-Z]+$/,message:"请输入正确的英文名"},chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},l=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},_={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},195:function(t,e,o){"use strict";var n=o(185);o.n(n).a},196:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:30%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;flex-direction:column}.toast-content-div{height:0.13333rem}.toast-content-loading{width:1.06667rem;transform-origin:center;animation:rotate 2s linear infinite;position:relative}.toast-content-loading circle{fill:none;stroke:#fff;stroke-width:4;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-25px}100%{stroke-dashoffset:-125px}}\n",""])},205:function(t,e,o){"use strict";o.d(e,"b",function(){return h}),o.d(e,"a",function(){return m});o(221),o(112),o(113),o(13),o(57),o(42),o(73),o(40);var n=o(5),r=o(211),d=o(212),c=o(180),l=o(222),f={video:{mimeType:["video/mp4","video/mpeg","video/quicktime","video/x-msvideo","video/ogg","video/webm","application/vnd.rn-realmedia-vbr"],limit:300}},m={VIDEO:"video"},h=function(){function t(){Object(r.a)(this,t)}var e;return Object(d.a)(t,[{key:"init",value:(e=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/Mobile/StudentActivity/token");case 2:(e=t.sent).status&&(this.domain=e.data.domain,this.token=e.data.uptoken);case 4:case"end":return t.stop()}},t,this)})),function(){return e.apply(this,arguments)})},{key:"upload",value:function(t,e,o,n,r){var d=30,c={};if(e&&f[e]&&(d=f[e].limit,c.mimeType=f[e].mimeType),t.size>1024*d*1024)return{error:"上传文件不能大于".concat(d,"MB")};var m=t.name.split("."),h="".concat(v(),".").concat(m[m.length-1]),_=l.upload(t,h,this.token,c);return _.subscribe({next:o,error:n,complete:r}),{subscription:_}}}]),t}(),v=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}},279:function(t,e,o){var content=o(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("8d5c8316",content,!0,{sourceMap:!1})},444:function(t,e,o){t.exports=o.p+"img/4074ece.png"},445:function(t,e,o){"use strict";var n=o(279);o.n(n).a},446:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".upLoadVideo[data-v-c89416d0]{display:flex;justify-content:center;align-items:center;text-align:center;margin-top:4.8rem}.upLoadVideo .content .thisWeekVideo[data-v-c89416d0]{font-size:0.37333rem;color:#666666;padding-bottom:0.13333rem}.upLoadVideo .content .quicklyUpLoad[data-v-c89416d0]{font-size:0.37333rem;color:#666666;padding-bottom:0.53333rem}.upLoadVideo .content .upLoadSpan[data-v-c89416d0]{display:inline-block;background-color:#ffd750;line-height:1.06667rem;font-size:0.37333rem;font-weight:700;width:3.73333rem;height:1.06667rem;margin-bottom:0.53333rem}.upLoadVideo .content .videoRules[data-v-c89416d0]{font-size:0.32rem;color:#999999}.upLoadVideo .content .img[data-v-c89416d0]{margin-top:30%;width:6.19093rem;height:4.704rem}\n",""])},469:function(t,e,o){"use strict";o.r(e);o(40);var n,r=o(5),d=o(189),c=o(205),l=o(191),f={head:function(){return{title:"上传作品"}},components:{toast:d.a},data:function(){return{homeworkId:this.$route.query.homeworkId||"",videoSrc:""}},methods:{videoUpload:(n=Object(r.a)(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=new c.b,t.next=4,e.init();case 4:if(this.videoSrc=e.domain,console.log(this.videoSrc,"222"),o=e.upload(this.$refs.videoUploadInput.files[0],c.a.VIDEO,this.fileUploadNext,this.fileUploadError,this.fileUploadComplete),this.$refs.toast.hideLoadingToast(),!o.error){t.next=11;break}return this.$refs.toast.showToast(o.error),t.abrupt("return");case 11:this.videoStatus=l.VIDEO_STATUS_TYPE.UPLOADING;case 12:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),fileUploadNext:function(t){console.log(this.videoStatus,"this.video"),this.videoStatus.progress=Math.round(100*t.total.percent)/100,this.$refs.toast.showToast("上传进度"+this.videoStatus.progress+"%")},fileUploadError:function(t){console.log(t),this.videoStatus=l.VIDEO_STATUS_TYPE.ERROR,this.$refs.toast.showToast(t.message)},fileUploadComplete:function(t){var e=this;this.videoStatus=l.VIDEO_STATUS_TYPE.UPLOADED,this.videoSrc="".concat(this.videoSrc).concat(t.key),console.log(this.videoSrc),localStorage.setItem("videoUrl",this.videoSrc),this.$refs.toast.showToast("上传成功"),setTimeout(function(){window.location="".concat("https://release6.landi.com/static-web/mobile","/sign_in/addComments/addComments?homeworkId=").concat(e.homeworkId)},6e3)}}},m=(o(445),o(19)),component=Object(m.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upLoadVideo"},[n("div",{staticClass:"content"},[n("div",{staticClass:"thisWeekVideo"},[t._v("本周的作业视频录制完成啦")]),t._v(" "),n("div",{staticClass:"quicklyUpLoad"},[t._v("赶快上传班主任老师才能点评哦~")]),t._v(" "),n("label",{staticClass:"upLoadSpan",attrs:{for:"video-upload-input"}},[t._v("上传视频")]),t._v(" "),n("input",{ref:"videoUploadInput",staticClass:"video-upload-input",staticStyle:{display:"none"},attrs:{id:"video-upload-input",type:"file",accept:"video/*"},on:{change:t.videoUpload}}),t._v(" "),n("div",{staticClass:"videoRules"},[t._v("视频要求:10秒≤时长≤180秒,视频大小≤300M")]),t._v(" "),n("img",{staticClass:"img",attrs:{src:o(444),alt:""}})]),t._v(" "),n("toast",{ref:"toast"})],1)},[],!1,null,"c89416d0",null);e.default=component.exports}}]);