(window.webpackJsonp=window.webpackJsonp||[]).push([[22,15],{180:function(t,n,e){"use strict";e(13);var o=e(74),d=e.n(o),r=e(185),c=e.n(r);console.log("process.env.ENV_API","http://release6.landi.com/");var l=d.a.create({baseURL:"http://release6.landi.com/",transformRequest:[function(data){return c.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});l.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),l.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){return console.log(t,t.response),Promise.reject(t)}),n.a=l},182:function(t,n,e){var content=e(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("fec0ffbc",content,!0,{sourceMap:!1})},183:function(t,n,e){var content=e(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("5bd156c3",content,!0,{sourceMap:!1})},184:function(t,n,e){var content=e(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("1291ba86",content,!0,{sourceMap:!1})},192:function(t,n,e){"use strict";e.r(n),e.d(n,"STEPS",function(){return d}),e.d(n,"API",function(){return r}),e.d(n,"SIGNUP_DATA_RULE",function(){return c}),e.d(n,"TOPICS",function(){return l}),e.d(n,"VIDEO_STATUS_TYPE",function(){return h}),e.d(n,"STROGE",function(){return m}),e.d(n,"LANDI_LEVEL",function(){return v}),e.d(n,"RANK_LIST",function(){return f});var o=e(191);e.d(n,"REGION_DATA",function(){return o.default});var d=["报名信息","选择题目","上传视频","确认提交","我的作品"],r={STU_SHARE_DATA:""},c={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},l=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],v=[{name:"PRE E",type:0},{name:"E1-E2",type:1},{name:"E3即以上",type:2}],f=[{name:"Nina",like:2330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"视频上传失败, 上传的文件不符合条件"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},m={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name"}},194:function(t,n,e){"use strict";var o=e(182);e.n(o).a},195:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar[data-v-40a39e63] {\n  margin-top: 4vw;\n  height: 22vw;\n}\n.page-content[data-v-40a39e63] {\n  padding: 0 4vw;\n}\nh1[data-v-40a39e63] {\n  font-size: 4vw;\n  font-weight: bold;\n  color: #333333;\n  padding: 3vw 0;\n}\nh2[data-v-40a39e63] {\n  font-size: 3.7vw;\n  color: #333333;\n  padding: 2vw 0;\n}\nh3[data-v-40a39e63] {\n  font-size: 3.4vw;\n  color: #B2B2B2;\n  padding: 1vw 0;\n}\np[data-v-40a39e63] {\n  font-size: 3.4vw;\n  color: #808080;\n}\n#stepbar[data-v-40a39e63] {\n  position: relative;\n}\n.wrapper[data-v-40a39e63] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.circle[data-v-40a39e63] {\n  height: 6.67vw;\n  width: 6.67vw;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 1.5vw -0.7vw #666666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle-wrapper[data-v-40a39e63] {\n  height: 12vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.circle-content[data-v-40a39e63] {\n  height: 5.06vw;\n  width: 5.06vw;\n  color: #fff;\n  background: #E6E6E6;\n  border-radius: 50%;\n  font-family: STYuanti-SC-Regular;\n  font-size: 2.93vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle .accent[data-v-40a39e63] {\n  background: #16C8D2;\n}\n.step-item[data-v-40a39e63] {\n  color: #B2B2B2;\n  font-size: 2.9vw;\n  font-weight: 400;\n}\n.step .accent[data-v-40a39e63] {\n  color: #16C8D2;\n}\n.progress[data-v-40a39e63] {\n  height: 12vw;\n  width: 90%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  overflow: hidden;\n}\n.progress-bar[data-v-40a39e63] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(0, -50%);\n  height: 0.8vw;\n  border-radius: 0.4vw;\n}\n.progress-empty[data-v-40a39e63] {\n  width: 100%;\n  box-shadow: inset 0 0.2vw .3vw -.25vw #666666;\n}\n.progress-fill[data-v-40a39e63] {\n  background: #16C8D2;\n}",""])},196:function(t,n,e){t.exports=e.p+"img/7fef1c0.png"},197:function(t,n,e){t.exports=e.p+"img/a8d20f2.png"},198:function(t,n,e){t.exports=e.p+"img/31eeb1c.png"},199:function(t,n,e){"use strict";var o=e(183);e.n(o).a},200:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".wrapper[data-v-b61e6f3c] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.content[data-v-b61e6f3c] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n}\n.content-poster[data-v-b61e6f3c] {\n  width: 74.6vw;\n}\n.content-close[data-v-b61e6f3c] {\n  width: 60%;\n  text-align: right;\n  margin-bottom: -1vw;\n}\n.content-close-img[data-v-b61e6f3c] {\n  width: 6.67vw;\n}",""])},201:function(t,n,e){"use strict";var o=e(184);e.n(o).a},202:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar {\n  margin-top: 4vw;\n  height: 22vw;\n}\n.page-content {\n  padding: 0 4vw;\n}\nh1 {\n  font-size: 4vw;\n  font-weight: bold;\n  color: #333333;\n  padding: 3vw 0;\n}\nh2 {\n  font-size: 3.7vw;\n  color: #333333;\n  padding: 2vw 0;\n}\nh3 {\n  font-size: 3.4vw;\n  color: #B2B2B2;\n  padding: 1vw 0;\n}\np {\n  font-size: 3.4vw;\n  color: #808080;\n}\n.submit {\n  text-align: center;\n  width: 100%;\n  position: fixed;\n  bottom: 5vw;\n  left: 0;\n}\n.submit-text {\n  margin: 3vw 0;\n  color: #B2B2B2;\n  font-size: 3.2vw;\n  padding: 0 6vw;\n}\n.submit-btn {\n  display: inline-block;\n  width: 86.67vw;\n  line-height: 13.3vw;\n  text-align: center;\n  font-size: 4.53vw;\n  color: #fff;\n  background: #B2B2B2;\n}\n.submit .accent {\n  background: #16C8D2;\n}",""])},203:function(t,n,e){var content=e(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},204:function(t,n,e){"use strict";e(181);var o={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},d=(e(194),e(19)),r=Object(d.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"stepbar"}},[e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),e("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),e("div",{staticClass:"wrapper"},t._l(t.steps,function(n,o){return e("div",{key:n,staticClass:"wrapper-item"},[e("div",{staticClass:"circle-wrapper"},[e("div",{staticClass:"circle"},[e("div",{class:["circle-content",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(o+1))])])]),t._v(" "),e("div",{staticClass:"step"},[e("div",{class:["step-item",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(n))])])])}),0)])},[],!1,null,"40a39e63",null).exports,c={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")}}},l=(e(199),Object(d.a)(c,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.show?o("div",{staticClass:"wrapper"},[o("div",{staticClass:"content"},[o("div",{staticClass:"content-close"},[o("img",{staticClass:"content-close-img",attrs:{src:e(196)},on:{click:t.close}})]),t._v(" "),0==t.poster?o("img",{staticClass:"content-poster",attrs:{src:e(197)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?o("img",{staticClass:"content-poster",attrs:{src:e(198)},on:{click:t.gotoLink}}):t._e()])]):t._e()])},[],!1,null,"b61e6f3c",null).exports),v={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},f=(e(201),Object(d.a)(v,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"submit"},[e("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),e("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);e.d(n,"b",function(){return r}),e.d(n,"a",function(){return l}),e.d(n,"c",function(){return f})},212:function(t,n,e){"use strict";var o=e(203);e.n(o).a},213:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".toasttrs-enter-active,\n.toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter,\n.toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.333333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.266667rem 0.4rem;\n  color: #fff;\n  font-size: 0.373333rem;\n  border-radius: 0.133333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n  height: 0.133333rem;\n}\n.toast-content-loading {\n  display: flex;\n  justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.066667rem;\n  height: 1.066667rem;\n}\n.toast-content-loading-content div {\n  box-sizing: border-box;\n  position: absolute;\n  width: 1.066667rem;\n  height: 1.066667rem;\n  border: 1vw solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}",""])},214:function(t,n,e){"use strict";var o={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=e,this.show=!0,setTimeout(function(){t.show=!1},n)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},d=(e(212),e(19)),component=Object(d.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"toasttrs"}},[t.show?e("div",[t.mask?e("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),e("div",{staticClass:"toast-content",style:t.position},[t.loading?e("div",{staticClass:"toast-content-loading"},[e("div",{staticClass:"toast-content-loading-content"},[e("div"),t._v(" "),e("div"),t._v(" "),e("div"),t._v(" "),e("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?e("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?e("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);n.a=component.exports},250:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAAXNSR0IArs4c6QAAAYhJREFUKBWNkr9Lw1AQx5tflmxCXCKOzqLQqaBg0aRJGxxEEPwXBP8NFxcnERwcXBybtMYKtqJmCoKrkyjGwYBoCzahsX6vtCXRtnjwcpfv+7x79+69VKlU2k39w1iGYXYsyzrodDrsOJ6FqYA2AZ+4riuMghmaKJfL81EU2cjuSpK0kc1mv34v6IIk2rY9G4bhBcInnucNXdc/4/AAJLFarU4HQXCOMMDIG4bhk06WOICiKB62X4IeYlxXKpUZgsgSIAnFYvEdbgUHfETdN1QS6YmtSegbdcDzvGP85wRBUEaCtIB6i7btw2/92bqfkTzq/YZ7gZ/g4hPxGFmYTCazB7+NdmlDt67Vanyz2TwClEc2BW265+NZKHYcR/R9/xTAHMdxi4VC4YH0REZkmmw0Ghb0qXQ6vaqq6jNBZIMa0S+51WpdkoaacpqmvXaJ3qd76t4930L7EEVxGff8FocoZnBNC+12+ww13eHlrA97OQSyuKY6/JUsy2ujIAJTpmkeog1jG0/cD4cAmT4DCe2kAAAAAElFTkSuQmCC"},251:function(t,n,e){var content=e(373);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("5f88fd79",content,!0,{sourceMap:!1})},361:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAg9JREFUaAXtmr9OwlAUh9sig5PECBOTK0vZ3E3cXFzcXVzgAZx1Y8T4ACaGwTi4GF9AWfgTBt7AwahxYIFE2vo7CSTkpDRV7K2cni69p5R77ne+0yaXYHe73WPLsppBEBRxTup4yeVytWq1ep9UgrjzOgC9TBiW1lL2PK/V7/fduAtL6j4HE+8kNTmbdxPQd4AusOtGQwI2eez6vn+NjrJNJl3MZRrYAuxhr9c7W1yEybFx4BncOaD3TYLOc6UCDMv0smwNBoPyfCGmzqkAExyAi9Pp9LbT6eRNwVKe1IApOaD3bNtu0tjUYaPCgalkEXkeAP6MAvgR96z0Eeb/wPw3/wV4JZi4Xwb0Y6otHXehf3jfQaaA0dJOpoCpUzIHvLHs+cAD/uY4zpHrum2ME3t7Lsv/2+vD4XB7Mpk00L4nYXNEGb7C/vVpnWAJsFKpfJZKpRqGXz8FNrVtDFvXStdGo9EWRIV2b+hFyoaWOMWvIa8YttHaa9PS2HMXxuMx7cZCt6BLgfGFPKAvcLYwCZ1EHFHPsAhADqHAvCLSYjUszSjnUcO8ItJiNSzNKOdRw7wi0mI1LM0o51HDvCLSYjUszSjnUcO8ItJiNSzNKOdRw7wi0mI1LM0o51HDvCLSYjUszSjnUcO8ItJiNSzNKOdRw7wi0mI1LM0o58meYfyB651XQWpMrGS4ngXoGWP9G0Vnh6+nvMDOAAAAAElFTkSuQmCC"},362:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAnZJREFUaAXtmr1KA0EUhbO7WNhZaGU605sEBUtRsLOWvIPptfURxCcQJIVY2IhNwMpq89dbaqWPkOx6D7gwhCRuZu7cGdhZCDvozrnnu2fcnZhEg8HgIs/zu1qttk0vW8dnkiSXrVbr2VaBsrqxACy81GezWW84HO6XNWbrupiEbSar+t7MsuxpNBptqT+UHgNY8tgj6HtaVZFkUbWWNHCNYM9paV+rJiTH4sCAI+gbgj6VBC1qOQGm4glB9yaTSb0wInV2BYyUd6bT6WOaphtSsKjjDBjFCfqITrcYSx0RdTiXKraizksURe/UgGzFNUa/Iv0f0n/wBdgIpuxkgn51uqTLGmW87qxSwLSk40oBY6UEYMa/Fy+lQsJexsJoKiTM2EwvpULCXsbCaCokzNhML6VCwiaxxHF8Ra9Dehv2YaKDudCAFjRNtdT53An32+12Sp8yHJtAYy40oEVm+6ph0zErML396o3H491ms/mlC13AQgNa0DSFVOdzAzfoI5U3Xeh5WGgRcEM1bDpmBYYZGNSBloCFP3ZgHWgpWGvA60BLwloFLgMtDWsdeBW0C1gR4GXQeGwVjx4bd2PUXXSI/iNeTRVm8PiShEVNK3dpCPt6iAGr6SJZ3c2JaSNFgOdhsYx1NiemsJhvHXgRLHZjujsyU2irwMtgC9MuoK0B/wfrCtoKcFlYF9DswOvCSkOzAuvCSkJzA3dMt4vzNzJqYqdoCMeZFZjMntAXzg5Mt4sFNLQIkvULbKJ7aY6ETDVYEzY1IzE/AEt02WWNkLDL7kvUDglLdNlljZCwy+5L1K5ewrQ5/5borA81wIqEu1WA/mPs/gJ/XAadc7UYlQAAAABJRU5ErkJggg=="},363:function(t,n,e){t.exports=e.p+"img/88250a2.png"},372:function(t,n,e){"use strict";var o=e(251);e.n(o).a},373:function(t,n,e){(t.exports=e(38)(!1)).push([t.i,".top-step-bar[data-v-6dd1ee46] {\n  margin-top: 4vw;\n  height: 22vw;\n}\n.page-content[data-v-6dd1ee46] {\n  padding: 0 4vw;\n}\nh1[data-v-6dd1ee46] {\n  font-size: 4vw;\n  font-weight: bold;\n  color: #333333;\n  padding: 3vw 0;\n}\nh2[data-v-6dd1ee46] {\n  font-size: 3.7vw;\n  color: #333333;\n  padding: 2vw 0;\n}\nh3[data-v-6dd1ee46] {\n  font-size: 3.4vw;\n  color: #B2B2B2;\n  padding: 1vw 0;\n}\np[data-v-6dd1ee46] {\n  font-size: 3.4vw;\n  color: #808080;\n}\n.title[data-v-6dd1ee46] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-right: 3vw;\n}\n.title-action h3[data-v-6dd1ee46] {\n  color: #16C8D2;\n  display: inline-block;\n}\n.title-action-img[data-v-6dd1ee46] {\n  width: 1.33vw;\n}\n.topic-text[data-v-6dd1ee46] {\n  margin-top: -1vw;\n  width: 90vw;\n}\n.topic-text-eng[data-v-6dd1ee46] {\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.topic-text-chn[data-v-6dd1ee46] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.video[data-v-6dd1ee46] {\n  text-align: center;\n  margin-top: 3vw;\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.video-hint[data-v-6dd1ee46] {\n  width: 85.3vw;\n  height: 48vw;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  background: #FAFAFA;\n  border: .2vw dashed #E6E6E6;\n}\n.video-hint-hint[data-v-6dd1ee46] {\n  width: 26vw;\n  color: #B2B2B2;\n  font-size: 3.2vw;\n  margin-top: 2vw;\n}\n.video-hint-hintimg[data-v-6dd1ee46] {\n  width: 8vw;\n  height: 8vw;\n}\n.video-hint-progress[data-v-6dd1ee46] {\n  position: relative;\n  width: 46.7vw;\n  height: 1.33vw;\n  margin-bottom: 3vw;\n}\n.video-hint-progress-bg[data-v-6dd1ee46] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #E6E6E6;\n  border-radius: 1vw;\n}\n.video-hint-progress-fg[data-v-6dd1ee46] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: #16C8D2;\n  border-radius: 1vw;\n}\n.video-uploaded-video[data-v-6dd1ee46] {\n  width: 85.3vw;\n}\n.video-upload[data-v-6dd1ee46] {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(50%);\n}\n.video-upload-action[data-v-6dd1ee46] {\n  width: 12vw;\n  height: 12vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #fff;\n  border-radius: 6vw;\n  box-shadow: 0 0 5vw -3vw #666666;\n}\n.video-upload-action-img[data-v-6dd1ee46] {\n  width: 8.6vw;\n  height: 8.6vw;\n}",""])},386:function(t,n,e){"use strict";e.r(n);e(41);var o,d=e(5),r=e(204),c=e(192),l=(e(364),e(112),e(113),e(13),e(59),e(42),e(75),e(215)),v=e(216),f=(e(180),e(371)),h={video:{mimeType:["video/mp4","video/mpeg","video/quicktime","video/x-msvideo","video/ogg","video/webm","application/vnd.rn-realmedia-vbr"],limit:300}},m="video",w=function(){function t(){Object(l.a)(this,t)}var n;return Object(v.a)(t,[{key:"init",value:(n=Object(d.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.domain="http://qn-video.abc360.com/",this.token="Bl9oeQfJyIIivU7q24veVhydurPTib1lcHneu68K:hw7XzfJiqztuccqyqdeTXPSfL2w=:eyJzY29wZSI6ImFiYzM2MC12aWRlb3MiLCJkZWFkbGluZSI6MTU2OTc1MzEyOSwidXBIb3N0cyI6WyJodHRwOlwvXC91cC5xaW5pdS5jb20iLCJodHRwOlwvXC91cGxvYWQucWluaXUuY29tIiwiLUggdXAucWluaXUuY29tIGh0dHA6XC9cLzE4My4xMzEuNy4zIl19";case 2:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})},{key:"upload",value:function(t,n,e,o,d){var r=30,c={};if(n&&h[n]&&(r=h[n].limit,c.mimeType=h[n].mimeType),t.size>1024*r*1024)return{error:"上传文件不能大于".concat(r,"MB")};var l=t.name.split("."),v="".concat(A(),".").concat(l[l.length-1]),m=f.upload(t,v,this.token,c);return m.subscribe({next:e,error:o,complete:d}),{subscription:m}}}]),t}(),A=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})},C=e(214),S={name:"Signup",head:function(){return{title:"上传视频"}},components:{"step-bar":r.b,"submit-area":r.c,toast:C.a},data:function(){return{steps:c.STEPS,landiLevel:"",topic:null,videoStatus:{},videoSrc:""}},computed:{videoUploaded:function(){return"uploaded"==this.videoStatus.type}},methods:{nextStep:function(){this.videoUploaded&&this.$router.push({name:"presentation-signup-step4"})},gotoStep2:function(){this.$router.push({name:"presentation-signup-step2"})},videoUpload:(o=Object(d.a)(regeneratorRuntime.mark(function t(){var n,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),n=new w,t.next=4,n.init();case 4:this.videoStatus=c.VIDEO_STATUS_TYPE.UPLOADING,this.videoSrc=n.domain,e=n.upload(this.$refs.videoUploadInput.files[0],m,this.fileUploadNext,this.fileUploadError,this.fileUploadComplete),this.$refs.toast.hideLoadingToast(),e.error&&this.$refs.toast.showToast(e.error);case 9:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),fileUploadNext:function(t){this.videoStatus.progress=Math.round(100*t.total.percent)/100},fileUploadError:function(t){console.log(t),this.videoStatus=c.VIDEO_STATUS_TYPE.ERROR,this.$refs.toast.showToast(t.message)},fileUploadComplete:function(t){this.videoStatus=c.VIDEO_STATUS_TYPE.UPLOADED,this.videoSrc="".concat(this.videoSrc,"/").concat(t.key),localStorage.setItem(c.STROGE.VIDEO_SRC,this.videoSrc),this.$refs.toast.showToast("上传成功")}},mounted:function(){this.landiLevel=localStorage.getItem(c.STROGE.LANDI_LEVEL)||"",this.topic=c.TOPICS[localStorage.getItem(c.STROGE.TOPIC)||0],this.videoStatus=c.VIDEO_STATUS_TYPE.ADD;var t=localStorage.getItem(c.STROGE.VIDEO_SRC);t&&(this.videoSrc=t,this.videoStatus=c.VIDEO_STATUS_TYPE.UPLOADED)}},x=(e(372),e(19)),component=Object(x.a)(S,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"top-step-bar"},[o("step-bar",{attrs:{steps:t.steps,progress:50}})],1),t._v(" "),o("div",{staticClass:"page-content"},[o("div",{staticClass:"title"},[o("h1",[t._v("上传视频")]),t._v(" "),o("div",{staticClass:"title-action",on:{click:t.gotoStep2}},[o("h3",[t._v("查看题目")]),t._v(" "),o("img",{staticClass:"title-action-img",attrs:{src:e(250)}})])]),t._v(" "),o("h2",[t._v("当前级别: "+t._s(t.landiLevel))]),t._v(" "),o("div",{staticClass:"topic-text"},[t.topic?o("h2",{staticClass:"topic-text-eng"},[t._v(t._s(t.topic.text.eng))]):t._e(),t._v(" "),t.topic?o("h3",{staticClass:"topic-text-chn"},[t._v(t._s(t.topic.text.chn))]):t._e()]),t._v(" "),o("div",{staticClass:"video"},["uploaded"!=t.videoStatus.type?o("div",{staticClass:"video-hint"},["add"==t.videoStatus.type?o("img",{staticClass:"video-hint-hintimg",attrs:{src:e(361)}}):t._e(),t._v(" "),"error"==t.videoStatus.type?o("img",{staticClass:"video-hint-hintimg",attrs:{src:e(362)}}):t._e(),t._v(" "),t.videoStatus.hint?o("div",{staticClass:"video-hint-hint"},[t._v(t._s(t.videoStatus.hint))]):t._e(),t._v(" "),"uploading"==t.videoStatus.type?o("div",[o("div",{staticClass:"video-hint-progress"},[o("div",{staticClass:"video-hint-progress-bg"}),t._v(" "),o("div",{staticClass:"video-hint-progress-fg",style:{width:t.videoStatus.progress+"%"}})]),t._v(" "),o("h3",[t._v("正在上传 "+t._s(t.videoStatus.progress)+"%")])]):t._e()]):t._e(),t._v(" "),"uploaded"==t.videoStatus.type?o("div",{staticClass:"video-uploaded"},[o("video",{staticClass:"video-uploaded-video",attrs:{controls:""}},[o("source",{attrs:{src:t.videoSrc}})])]):t._e(),t._v(" "),"uploading"!=t.videoStatus.type?o("div",{staticClass:"video-upload"},[o("label",{staticClass:"video-upload-action",attrs:{for:"video-upload-input"}},[o("img",{staticClass:"video-upload-action-img",attrs:{src:e(363)}})]),t._v(" "),o("input",{ref:"videoUploadInput",staticStyle:{display:"none"},attrs:{id:"video-upload-input",type:"file",accept:"video/*"},on:{change:t.videoUpload}})]):t._e()])]),t._v(" "),o("submit-area",{attrs:{hint:"视频要求时长10-90秒, 视频小于300M",btnText:"进入下一步",isClickable:t.videoUploaded},on:{submit:t.nextStep}}),t._v(" "),o("toast",{ref:"toast"})],1)},[],!1,null,"6dd1ee46",null);n.default=component.exports}}]);