(window.webpackJsonp=window.webpackJsonp||[]).push([[23,18,20],{181:function(t,n,e){"use strict";e(13),e(73);var o=e(75),r=e.n(o),d=e(184),c=e.n(d);console.log("process.env.ENV_API","https://release6.landi.com/");var l=r.a.create({baseURL:"https://release6.landi.com/",transformRequest:[function(data){return c.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});l.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),l.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),n.a=l},193:function(t,n,e){"use strict";e.r(n),e.d(n,"STEPS",function(){return r}),e.d(n,"API",function(){return d}),e.d(n,"SIGNUP_DATA_RULE",function(){return c}),e.d(n,"TOPICS",function(){return l}),e.d(n,"VIDEO_STATUS_TYPE",function(){return h}),e.d(n,"STROGE",function(){return k}),e.d(n,"LANDI_LEVEL",function(){return m}),e.d(n,"RANK_LIST",function(){return f}),e.d(n,"INDEX_STEPS",function(){return v});var o=e(201);e.d(n,"REGION_DATA",function(){return o.default});var r=["报名信息","选择题目","上传视频","确认提交","我的作品"],d={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache",CHECK_LOGIN:"/Mobile/StudentActivity/login",GET_ZAN_CONFIG:"/Mobile/StudentActivityDetail/getZanConfig",MY_SID:"/Mobile/StudentActivityDetail/mySid"},c={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},l=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],m=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],f=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],v=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],h={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},k={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},194:function(t,n,e){"use strict";e.r(n);e(59);n.default={methods:{gotoPage:function(t){var n=this.$route.query;delete n.code,delete n.state,delete n.work_id,this.$router.replace({name:t,query:n})},gotoPageWithHistory:function(t){var n=this.$route.query;delete n.code,delete n.state,delete n.work_id,this.$router.push({name:t,query:n})}}}},195:function(t,n,e){"use strict";var o={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=e,this.show=!0,setTimeout(function(){t.show=!1},n)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},r=(e(210),e(19)),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"toasttrs"}},[t.show?e("div",[t.mask?e("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),e("div",{staticClass:"toast-content",style:t.position},[t.loading?e("div",{staticClass:"toast-content-loading"},[e("div",{staticClass:"toast-content-loading-content"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?e("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?e("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);n.a=component.exports},196:function(t,n,e){var content=e(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},210:function(t,n,e){"use strict";var o=e(196);e.n(o).a},211:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".toasttrs-enter-active, .toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter, .toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.33333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.26667rem 0.4rem;\n  color: #fff;\n  font-size: 0.37333rem;\n  border-radius: 0.13333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n    height: 0.13333rem;\n}\n.toast-content-loading {\n    display: flex;\n    justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.06667rem;\n  height: 1.06667rem;\n}\n.toast-content-loading-content div {\n    box-sizing: border-box;\n    position: absolute;\n    width: 1.06667rem;\n    height: 1.06667rem;\n    border: 1vw solid #fff;\n    border-radius: 50%;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n      animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n      animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n      animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},242:function(t,n,e){var content=e(358);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("7f78c7f7",content,!0,{sourceMap:!1})},350:function(t,n,e){t.exports=e.p+"img/171d5a9.png"},351:function(t,n,e){t.exports=e.p+"img/0294e59.png"},352:function(t,n,e){t.exports=e.p+"img/c279763.png"},357:function(t,n,e){"use strict";var o=e(242);e.n(o).a},358:function(t,n,e){n=t.exports=e(38)(!1);var o=e(180),r=o(e(359)),d=o(e(360)),c=o(e(361));n.push([t.i,".top-step-bar[data-v-3aa97dc4] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0.26667rem;\n  height: 2.2rem;\n}\n.page-content[data-v-3aa97dc4] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-3aa97dc4] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\n.signup-title[data-v-3aa97dc4] {\n  font-size: 0.4rem;\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n}\n.signup-title2[data-v-3aa97dc4] {\n  font-size: 0.37333rem;\n  color: #333333;\n  margin-bottom: 0.26667rem;\n}\n#rank[data-v-3aa97dc4] {\n  background: #fff;\n  width: 100vw;\n  height: 100%;\n}\n.headbar[data-v-3aa97dc4] {\n  height: 4.67rem;\n  width: 100vw;\n  background: url("+r+") 61vw 4vw/38vw no-repeat, url("+d+") 0 0/cover;\n  background-color: #3b7ada;\n  color: #fff;\n  position: relative;\n}\n.headbar-content[data-v-3aa97dc4] {\n    position: absolute;\n    top: 50%;\n    left: 0.4rem;\n    transform: translate(0, -50%);\n}\n.headbar-content-title[data-v-3aa97dc4] {\n      font-size: 0.53333rem;\n      font-weight: bold;\n      margin-bottom: 0.2rem;\n      font-family: MicrosoftYaHei-Bold;\n}\n.headbar-content-text[data-v-3aa97dc4] {\n      width: 5.73333rem;\n      font-family: MicrosoftYaHei;\n      font-size: 0.34667rem;\n      color: #FFFFFF;\n      letter-spacing: 0;\n      line-height: 0.54667rem;\n}\n.level[data-v-3aa97dc4] {\n  height: 1.2rem;\n  width: 100vw;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: #3781D6;\n  top: 0;\n  z-index: 999;\n}\n.level-item[data-v-3aa97dc4] {\n    position: relative;\n    width: 2.66667rem;\n    text-align: center;\n}\n.level-item-content[data-v-3aa97dc4] {\n      color: #fff;\n      font-size: 0.4rem;\n      line-height: 1.2rem;\n      max-lines: 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n}\n.level-item .accent[data-v-3aa97dc4] {\n      font-weight: bold;\n}\n.level-item-selector[data-v-3aa97dc4] {\n      position: absolute;\n      left: 50%;\n      bottom: 0;\n      transform: translateX(-50%);\n      width: 0;\n      height: 0;\n      width: 0.4rem;\n      height: 0.18667rem;\n      background: url("+c+") 50% 50%/cover;\n}\n.rank[data-v-3aa97dc4] {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  padding: 0;\n}\n.rank[data-v-3aa97dc4]::-webkit-scrollbar {\n    display: none;\n}\n.rank-item[data-v-3aa97dc4] {\n    display: flex;\n    justify-content: space-between;\n    box-sizing: content-box;\n    border-bottom: 1px solid #EBEBEB;\n    background: #fff;\n    padding: 0.25rem 0;\n    margin: 0 0.4rem;\n}\n.rank-item-left[data-v-3aa97dc4] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      width: 7.5rem;\n}\n.rank-item-rank[data-v-3aa97dc4] {\n      width: 0.8rem;\n      text-align: center;\n      font-size: 0.36rem;\n      color: #B2B2B2;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n}\n.rank-item-rank img[data-v-3aa97dc4] {\n        width: 0.8rem;\n        height: 0.8rem;\n}\n.rank-item-avatar[data-v-3aa97dc4] {\n      width: 1.3rem;\n      height: 1.3rem;\n      border-radius: 50%;\n      overflow: hidden;\n}\n.rank-item-avatar-img[data-v-3aa97dc4] {\n        width: inherit;\n        height: inherit;\n        object-fit: cover;\n}\n.rank-item-name[data-v-3aa97dc4] {\n      width: 4.5rem;\n      padding-left: 0.2rem;\n      text-align: left;\n      font-size: 0.42667rem;\n      color: #333333;\n      font-family: MicrosoftYaHei;\n}\n.rank-item-like[data-v-3aa97dc4] {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n}\n.rank-item-like-num[data-v-3aa97dc4] {\n        color: #F0552D;\n        font-size: 0.42rem;\n}\n.rank-item-like-text[data-v-3aa97dc4] {\n        color: #B2B2B2;\n        font-size: 0.29333rem;\n}\n.rank-self .rank-division[data-v-3aa97dc4] {\n    width: 100%;\n    height: 0.32rem;\n    background: #E6E6E6;\n}\n.rank-self .rank-self-data[data-v-3aa97dc4] {\n    font-size: 0.29333rem;\n    color: #B2B2B2;\n    letter-spacing: 0;\n    text-align: justify;\n}\n",""])},359:function(t,n,e){t.exports=e.p+"img/9d750df.png"},360:function(t,n,e){t.exports=e.p+"img/459c9b7.png"},361:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAAAXNSR0IArs4c6QAAAORJREFUOBGljbsNg0AQRBESARERISk5OQ1QAR3QAi24BJfgClyAC3Ds2KEjRw4sWecZS4gT3Gf3fNKIZXfmTZYlPmPMgUqM62Moy6EjtDzOuZ6kSKCggE5Lo/XlrlCg5FaAS+hslW1H3ko5UeAEsIIu2ybHPz2VABm3AFRDV0eJb0VvHScHHAA00M3XENgz0wTQ/hOCLXQPwGMnZlt/g+OCQAc9YmTBnYzOUbFfwdhDTwFUaiGr3zdZGxgG6CUlKnxkDlbVOuIwQm8FTGsle1wbMWExQR8tKcHPjulXjmFOAPwbmb9rGZKSx6+73wAAAABJRU5ErkJggg=="},419:function(t,n,e){"use strict";e.r(n);var o,r,d,c=e(257),l=(e(40),e(5)),m=e(193),f=e(181),v=e(195),h=e(194),k=e(353),_={name:"Rank",mixins:[h.default],head:function(){return{title:"点赞排行榜"}},components:{toast:v.a,"mt-loadmore":k.Loadmore},data:function(){return{landiLevels:[],landiLevelIndex:4,rankList:[],innerScroll:!1,headbarBottom:0,selfRankData:{},pageIndex:1,allLoaded:!1,hasNext:!0}},methods:{listUpdate:function(t){this.pageIndex=1,this.landiLevelIndex=t,this.rankList=[],this.allLoaded=!1,this.hasNext=!0,this.getListData(t)},handleScroll:function(){window.scrollY>=this.headbarBottom?this.innerScroll=!0:this.innerScroll=!1},getListData:(d=Object(l.a)(regeneratorRuntime.mark(function t(n){var e,o,r,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query.activity_id,t.prev=1,r="".concat(m.API.NEW_RANK,"?activity_id=").concat(e,"&combination_id=").concat(n,"&page=").concat(this.pageIndex),t.next=5,f.a.get(r);case 5:if((d=t.sent).status){t.next=10;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(d.info),t.abrupt("return");case 10:(o=this.rankList).push.apply(o,Object(c.a)(d.data.list)),this.selfRankData=d.data.my_work||{},this.hasNext=d.data.has_next,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}},t,this,[[1,15]])})),function(t){return d.apply(this,arguments)}),getRankConfig:(r=Object(l.a)(regeneratorRuntime.mark(function t(){var n,e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.$route.query.activity_id,t.prev=1,e="".concat(m.API.GET_RANK_CONFIG,"?activity_id=").concat(n),t.next=5,f.a.get(e);case 5:(o=t.sent).status?(document.title=o.data.activity_name,this.landiLevels=o.data.combinations,this.landiLevelIndex=o.data.combinations[0].id,this.getListData(this.landiLevelIndex)):console.log(o.info),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[1,9]])})),function(){return r.apply(this,arguments)}),onLoad:function(){this.hasNext?(this.pageIndex++,this.getListData(this.landiLevelIndex)):(this.allLoaded=!0,this.$refs.loadmore.onBottomLoaded())},checkProduction:function(t){window.location="".concat("https://release6.landi.com/static-web/mobile","/presentation/share/?activity_id=").concat(this.$route.query.activity_id,"&work_id=").concat(t)}},mounted:(o=Object(l.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.headbarBottom=this.$refs.headbar.getBoundingClientRect().bottom,window.addEventListener("scroll",this.handleScroll),this.$refs.toast.showLoadingToast(),this.getRankConfig(),this.$refs.toast.hideLoadingToast();case 5:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},A=(e(357),e(19)),component=Object(A.a)(_,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"rank"}},[o("div",{ref:"headbar",staticClass:"headbar"},[t._m(0)]),t._v(" "),o("div",{staticClass:"level",style:{position:t.innerScroll?"fixed":"static"}},t._l(t.landiLevels,function(n){return o("div",{key:n.id,staticClass:"level-item",on:{click:function(e){return t.listUpdate(n.id)}}},[o("div",{class:["level-item-content",t.landiLevelIndex==n.id?"accent":""]},[t._v(t._s(n.name))]),t._v(" "),t.landiLevelIndex==n.id?o("div",{staticClass:"level-item-selector"}):t._e()])}),0),t._v(" "),o("mt-loadmore",{ref:"loadmore",staticClass:"rank",attrs:{"bottom-method":t.onLoad,"bottom-all-loaded":t.allLoaded,bottomPullText:"",bottomDropText:"","auto-fill":!1}},[Object.keys(t.selfRankData).length>0?o("div",{staticClass:"rank-self",on:{click:function(n){return t.checkProduction(t.selfRankData.work_id)}}},[o("div",{staticClass:"rank-item"},[o("div",{staticClass:"rank-item-left"},[o("div",{staticClass:"rank-item-rank"}),t._v(" "),o("div",{staticClass:"rank-item-avatar"},[o("img",{staticClass:"rank-item-avatar-img",attrs:{src:t.selfRankData.avatar}})]),t._v(" "),o("div",{staticClass:"rank-item-name"},[o("div",[t._v(t._s(t.selfRankData.en_name))]),t._v(" "),o("div",{staticClass:"rank-self-data"},[t._v("第"+t._s(t.selfRankData.rank)+"名")])])]),t._v(" "),o("div",{staticClass:"rank-item-like"},[o("div",{staticClass:"rank-item-like-num"},[t._v(t._s(t.selfRankData.zan))]),t._v(" "),o("div",{staticClass:"rank-item-like-text"},[t._v("点赞数")])])]),t._v(" "),o("div",{staticClass:"rank-division"})]):t._e(),t._v(" "),t._l(t.rankList,function(n,r){return o("div",{key:n.sid,staticClass:"rank-item",on:{click:function(e){return t.checkProduction(n.work_id)}}},[o("div",{staticClass:"rank-item-left"},[o("div",{staticClass:"rank-item-rank"},[r>2?o("div",[t._v(t._s((""+(r+1)).padStart(2,"0")))]):t._e(),t._v(" "),0==r?o("img",{attrs:{src:e(350)}}):t._e(),t._v(" "),1==r?o("img",{attrs:{src:e(351)}}):t._e(),t._v(" "),2==r?o("img",{attrs:{src:e(352)}}):t._e()]),t._v(" "),o("div",{staticClass:"rank-item-avatar"},[o("img",{staticClass:"rank-item-avatar-img",attrs:{src:n.avatar}})]),t._v(" "),o("div",{staticClass:"rank-item-name"},[t._v(t._s(n.en_name))])]),t._v(" "),o("div",{staticClass:"rank-item-like"},[o("div",{staticClass:"rank-item-like-num"},[t._v(t._s(n.zan))]),t._v(" "),o("div",{staticClass:"rank-item-like-text"},[t._v("点赞数")])])])})],2),t._v(" "),o("toast",{ref:"toast"})],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"headbar-content"},[n("div",{staticClass:"headbar-content-title"},[this._v("点赞排行榜")]),this._v(" "),n("div",{staticClass:"headbar-content-text"},[this._v("在比赛中，小朋友们的精彩表现，让我们为选手们送上祝福的掌声，期待他们在未来取得更多成就")])])}],!1,null,"3aa97dc4",null);n.default=component.exports}}]);