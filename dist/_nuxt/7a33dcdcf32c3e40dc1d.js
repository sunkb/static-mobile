(window.webpackJsonp=window.webpackJsonp||[]).push([[32,24],{181:function(t,e,o){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},186:function(t,e,o){"use strict";o.d(e,"a",function(){return n});o(108);var n=function(t){var video=t,e=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?void 0!==video.play()&&(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var t,e=(t=video).webkitEnterFullScreen?"webkitEnterFullScreen":!!t.webkitRequestFullScreen&&"webkitRequestFullScreen";video[e]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play())}},187:function(t,e,o){var n=o(7),r=o(20),d=o(10),c=o(188),l="["+c+"]",v=RegExp("^"+l+l+"*"),f=RegExp(l+l+"*$"),m=function(t,e,o){var r={},l=d(function(){return!!c[t]()||"​"!="​"[t]()}),v=r[t]=l?e(h):c[t];o&&(r[o]=v),n(n.P+n.F*l,"String",r)},h=m.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},188:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},191:function(t,e,o){"use strict";var n=o(3),r=o(16),d=o(21),c=o(109),l=o(58),v=o(10),f=o(41).f,m=o(59).f,h=o(9).f,A=o(187).trim,S=n.Number,w=S,E=S.prototype,C="Number"==d(o(75)(E)),y="trim"in String.prototype,x=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,d=(e=y?e.trim():A(e,3)).charCodeAt(0);if(43===d||45===d){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===d){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,c=e.slice(2),i=0,v=c.length;i<v;i++)if((code=c.charCodeAt(i))<48||code>r)return NaN;return parseInt(c,n)}}return+e};if(!S(" 0o1")||!S("0b1")||S("+0x1")){S=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof S&&(C?v(function(){E.valueOf.call(o)}):"Number"!=d(o))?c(new w(x(e)),o,S):x(e)};for(var _,I=o(8)?f(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;I.length>k;k++)r(w,_=I[k])&&!r(S,_)&&h(S,_,m(w,_));S.prototype=E,E.constructor=S,o(11)(n,"Number",S)}},192:function(t,e,o){t.exports=o.p+"img/6446c2c.png"},195:function(t,e){},207:function(t,e,o){"use strict";o.d(e,"b",function(){return m}),o.d(e,"a",function(){return f});o(225),o(112),o(113),o(13),o(57),o(42),o(73),o(40);var n=o(5),r=o(214),d=o(215),c=o(180),l=o(226),v={video:{mimeType:["video/mp4","video/mpeg","video/quicktime","video/x-msvideo","video/ogg","video/webm","application/vnd.rn-realmedia-vbr"],limit:300},video2:{mimeType:["video/mp4","video/mpeg","video/quicktime","video/x-msvideo","video/ogg","video/webm","application/vnd.rn-realmedia-vbr"],limit:100}},f={VIDEO:"video",VIDEO2:"video2"},m=function(){function t(){Object(r.a)(this,t)}var e;return Object(d.a)(t,[{key:"init",value:(e=Object(n.a)(regeneratorRuntime.mark(function t(e){var o,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o="/Mobile/StudentActivity/token",1===e&&(o="/mobile/StudentWeekHomework/token"),t.next=4,c.a.get(o);case 4:(n=t.sent).status&&(this.domain=n.data.domain,this.token=n.data.uptoken);case 6:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)})},{key:"upload",value:function(t,e,o,n,r){var d=30,c={};if(e&&v[e]&&(d=v[e].limit,c.mimeType=v[e].mimeType),t.size>1024*d*1024)return{error:"上传文件不能大于".concat(d,"MB")};var f=t.name.split("."),m="".concat(h(),".").concat(f[f.length-1]),A=l.upload(t,m,this.token,c);return A.subscribe({next:o,error:n,complete:r}),{subscription:A}}}]),t}(),h=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}},269:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAUCAYAAAC07qxWAAAAAXNSR0IArs4c6QAAAYhJREFUKBWNkr9Lw1AQx5tflmxCXCKOzqLQqaBg0aRJGxxEEPwXBP8NFxcnERwcXBybtMYKtqJmCoKrkyjGwYBoCzahsX6vtCXRtnjwcpfv+7x79+69VKlU2k39w1iGYXYsyzrodDrsOJ6FqYA2AZ+4riuMghmaKJfL81EU2cjuSpK0kc1mv34v6IIk2rY9G4bhBcInnucNXdc/4/AAJLFarU4HQXCOMMDIG4bhk06WOICiKB62X4IeYlxXKpUZgsgSIAnFYvEdbgUHfETdN1QS6YmtSegbdcDzvGP85wRBUEaCtIB6i7btw2/92bqfkTzq/YZ7gZ/g4hPxGFmYTCazB7+NdmlDt67Vanyz2TwClEc2BW265+NZKHYcR/R9/xTAHMdxi4VC4YH0REZkmmw0Ghb0qXQ6vaqq6jNBZIMa0S+51WpdkoaacpqmvXaJ3qd76t4930L7EEVxGff8FocoZnBNC+12+ww13eHlrA97OQSyuKY6/JUsy2ujIAJTpmkeog1jG0/cD4cAmT4DCe2kAAAAAElFTkSuQmCC"},270:function(t,e,o){var content=o(444);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("72087aae",content,!0,{sourceMap:!1})},434:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAg9JREFUaAXtmr9OwlAUh9sig5PECBOTK0vZ3E3cXFzcXVzgAZx1Y8T4ACaGwTi4GF9AWfgTBt7AwahxYIFE2vo7CSTkpDRV7K2cni69p5R77ne+0yaXYHe73WPLsppBEBRxTup4yeVytWq1ep9UgrjzOgC9TBiW1lL2PK/V7/fduAtL6j4HE+8kNTmbdxPQd4AusOtGQwI2eez6vn+NjrJNJl3MZRrYAuxhr9c7W1yEybFx4BncOaD3TYLOc6UCDMv0smwNBoPyfCGmzqkAExyAi9Pp9LbT6eRNwVKe1IApOaD3bNtu0tjUYaPCgalkEXkeAP6MAvgR96z0Eeb/wPw3/wV4JZi4Xwb0Y6otHXehf3jfQaaA0dJOpoCpUzIHvLHs+cAD/uY4zpHrum2ME3t7Lsv/2+vD4XB7Mpk00L4nYXNEGb7C/vVpnWAJsFKpfJZKpRqGXz8FNrVtDFvXStdGo9EWRIV2b+hFyoaWOMWvIa8YttHaa9PS2HMXxuMx7cZCt6BLgfGFPKAvcLYwCZ1EHFHPsAhADqHAvCLSYjUszSjnUcO8ItJiNSzNKOdRw7wi0mI1LM0o51HDvCLSYjUszSjnUcO8ItJiNSzNKOdRw7wi0mI1LM0o51HDvCLSYjUszSjnUcO8ItJiNSzNKOdRw7wi0mI1LM0o58meYfyB651XQWpMrGS4ngXoGWP9G0Vnh6+nvMDOAAAAAElFTkSuQmCC"},435:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAnZJREFUaAXtmr1KA0EUhbO7WNhZaGU605sEBUtRsLOWvIPptfURxCcQJIVY2IhNwMpq89dbaqWPkOx6D7gwhCRuZu7cGdhZCDvozrnnu2fcnZhEg8HgIs/zu1qttk0vW8dnkiSXrVbr2VaBsrqxACy81GezWW84HO6XNWbrupiEbSar+t7MsuxpNBptqT+UHgNY8tgj6HtaVZFkUbWWNHCNYM9paV+rJiTH4sCAI+gbgj6VBC1qOQGm4glB9yaTSb0wInV2BYyUd6bT6WOaphtSsKjjDBjFCfqITrcYSx0RdTiXKraizksURe/UgGzFNUa/Iv0f0n/wBdgIpuxkgn51uqTLGmW87qxSwLSk40oBY6UEYMa/Fy+lQsJexsJoKiTM2EwvpULCXsbCaCokzNhML6VCwiaxxHF8Ra9Dehv2YaKDudCAFjRNtdT53An32+12Sp8yHJtAYy40oEVm+6ph0zErML396o3H491ms/mlC13AQgNa0DSFVOdzAzfoI5U3Xeh5WGgRcEM1bDpmBYYZGNSBloCFP3ZgHWgpWGvA60BLwloFLgMtDWsdeBW0C1gR4GXQeGwVjx4bd2PUXXSI/iNeTRVm8PiShEVNK3dpCPt6iAGr6SJZ3c2JaSNFgOdhsYx1NiemsJhvHXgRLHZjujsyU2irwMtgC9MuoK0B/wfrCtoKcFlYF9DswOvCSkOzAuvCSkJzA3dMt4vzNzJqYqdoCMeZFZjMntAXzg5Mt4sFNLQIkvULbKJ7aY6ETDVYEzY1IzE/AEt02WWNkLDL7kvUDglLdNlljZCwy+5L1K5ewrQ5/5borA81wIqEu1WA/mPs/gJ/XAadc7UYlQAAAABJRU5ErkJggg=="},436:function(t,e,o){t.exports=o.p+"img/88250a2.png"},443:function(t,e,o){"use strict";var n=o(270);o.n(n).a},444:function(t,e,o){e=t.exports=o(38)(!1);var n=o(181)(o(192));e.push([t.i,".top-step-bar[data-v-5f385024]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-5f385024]{padding:0 0.4rem}.page-content-content[data-v-5f385024]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-5f385024]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-5f385024]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#step3[data-v-5f385024]{width:100vw;height:100vh;background:#fff}.title[data-v-5f385024]{display:flex;justify-content:space-between;align-items:center;padding-right:0.3rem}.title-action-text[data-v-5f385024]{color:#16C8D2;display:inline-block;font-size:0.34667rem;margin-bottom:0.4rem}.title-action-img[data-v-5f385024]{width:0.13333rem}.topic-text[data-v-5f385024]{margin-top:-0.1rem;width:9rem}.topic-text-eng[data-v-5f385024]{font-size:0.34667rem;color:#333333;letter-spacing:0;margin-bottom:0.18667rem}.topic-text-chn[data-v-5f385024]{font-size:0.32rem;color:#B2B2B2;letter-spacing:0}.video[data-v-5f385024]{text-align:center;margin-top:0.4rem;display:flex;justify-content:center;position:relative}.video-hint[data-v-5f385024]{width:7.04rem;height:3.96rem;display:flex;flex-flow:column;justify-content:center;align-items:center;background:#FAFAFA;border:1px dashed #E6E6E6}.video-hint-progresstext[data-v-5f385024]{font-size:0.34667rem;color:#B2B2B2;margin-top:0.26667rem}.video-hint-hint[data-v-5f385024]{width:2.6rem;color:#B2B2B2;font-size:0.32rem;margin-top:0.2rem}.video-hint-hintimg[data-v-5f385024]{width:0.66667rem;height:0.66667rem}.video-hint-progress[data-v-5f385024]{position:relative;width:4.66667rem;height:0.13333rem;margin-bottom:0.3rem}.video-hint-progress-bg[data-v-5f385024]{position:absolute;top:0;left:0;width:100%;height:100%;background:#E6E6E6;border-radius:0.1rem}.video-hint-progress-fg[data-v-5f385024]{position:absolute;top:0;left:0;height:100%;background:#16C8D2;border-radius:0.1rem}.video-uploaded-video[data-v-5f385024]{width:7.04rem;height:3.96rem;overflow:hidden;position:relative;background:#E6E6E6;display:flex;justify-content:center;align-items:center}.video-uploaded-video-play[data-v-5f385024]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:1.01333rem;height:1.01333rem;background:url("+n+") 50% 50%/contain no-repeat}.video-uploaded-video-img[data-v-5f385024]{height:3.96rem}.video-upload[data-v-5f385024]{position:absolute;left:50%;bottom:0;transform:translate(-50%, 50%)}.video-upload-action[data-v-5f385024]{width:1.06667rem;height:1.06667rem;display:flex;justify-content:center;align-items:center;background:#fff;border-radius:0.53333rem;box-shadow:0 0.02667rem 0.05333rem 0 #DEE6EC}.video-upload-action-img[data-v-5f385024]{width:0.85333rem;height:0.85333rem}\n",""])},484:function(t,e,o){"use strict";o.r(e);o(73),o(61),o(22),o(23),o(42),o(40);var n,r,d,c=o(5),l=o(212),v=o(190),f=o(207),m=o(189),h=o(180),A=o(201),S=o(186),w=(o(195),{name:"Signup",mixins:[A.default],head:function(){return{title:"上传视频"}},components:{"step-bar":l.b,"submit-area":l.c,toast:m.a},data:function(){return{steps:v.STEPS,landiLevel:"",topic:null,videoStatus:{},videoSrc:"",formData:null}},computed:{videoUploaded:function(){return"uploaded"==this.videoStatus.type}},methods:{nextStep:function(){this.videoUploaded&&this.gotoPage("presentation-signup-step4")},gotoStep2:function(){this.gotoPage("presentation-signup-step2")},videoUpload:(d=Object(c.a)(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=new f.b,t.next=4,e.init();case 4:if(this.videoSrc=e.domain,o=e.upload(this.$refs.videoUploadInput.files[0],f.a.VIDEO,this.fileUploadNext,this.fileUploadError,this.fileUploadComplete),this.$refs.toast.hideLoadingToast(),!o.error){t.next=10;break}return this.$refs.toast.showToast(o.error),t.abrupt("return");case 10:this.videoStatus=v.VIDEO_STATUS_TYPE.UPLOADING;case 11:case"end":return t.stop()}},t,this)})),function(){return d.apply(this,arguments)}),fileUploadNext:function(t){this.videoStatus.progress=Math.round(100*t.total.percent)/100},fileUploadError:function(t){console.log(t),this.videoStatus=v.VIDEO_STATUS_TYPE.ERROR,this.$refs.toast.showToast(t.message)},fileUploadComplete:function(t){this.videoStatus=v.VIDEO_STATUS_TYPE.UPLOADED,this.videoSrc="".concat(this.videoSrc).concat(t.key),this.formData.videoSrc=this.videoSrc,this.formData.videoKey=t.key,localStorage.setItem(v.STROGE.FORM_DATA,JSON.stringify(this.formData)),this.$refs.toast.showToast("上传成功")},initDataFromStroge:function(){var t=JSON.parse(localStorage.getItem(v.STROGE.FORM_DATA));if(!(t&&t.landiLevel&&t.landiLevel.topics))return!1;this.landiLevel=t.landiLevel.name;var e=!0,o=!1,n=void 0;try{for(var r,d=t.landiLevel.topics[Symbol.iterator]();!(e=(r=d.next()).done);e=!0){var c=r.value;c.id==t.topicID&&(this.topic=c)}}catch(t){o=!0,n=t}finally{try{e||null==d.return||d.return()}finally{if(o)throw n}}return t.videoSrc?(this.videoSrc=t.videoSrc,this.videoStatus=v.VIDEO_STATUS_TYPE.UPLOADED):this.videoStatus=v.VIDEO_STATUS_TYPE.ADD,this.formData=t,!0},initDataFromAPI:(r=Object(c.a)(regeneratorRuntime.mark(function t(){var e,o,video,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=this.$route.query.activity_id,t.next=4,h.a.get("".concat(v.API.MY_WORK,"?activity_id=").concat(e));case 4:if(o=t.sent,this.$refs.toast.hideLoadingToast(),o.status){t.next=11;break}return this.$refs.toast.showToast(o.info),t.abrupt("return",!1);case 11:if(!o.data.id){t.next=22;break}return this.landiLevel=o.data.combination_name,this.topic={cn_topic_name:o.data.cn_topic_name,en_topic_name:o.data.en_topic_name},this.videoSrc=o.data.video_url,this.videoStatus=v.VIDEO_STATUS_TYPE.UPLOADED,video=o.data.video_url.split("/"),n=video[video.length-1],this.formData={landiLevel:{id:o.data.combination_id},topicID:o.data.topic_id,videoKey:n,workID:o.data.id,address:o.data.address},t.abrupt("return",!0);case 22:return t.abrupt("return",!1);case 23:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),playFn:function(t){var e=document.getElementById(t);Object(S.a)(e)}},mounted:(n=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.initDataFromStroge()){t.next=4;break}return t.next=4,this.initDataFromAPI();case 4:localStorage.setItem(v.STROGE.FORM_DATA,JSON.stringify(this.formData));case 5:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})}),E=(o(443),o(19)),component=Object(E.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"step3"}},[n("div",{staticClass:"top-step-bar"},[n("step-bar",{attrs:{steps:t.steps,progress:50}})],1),t._v(" "),n("div",{staticClass:"page-content"},[n("div",{staticClass:"title"},[n("div",{staticClass:"signup-title"},[t._v("上传视频")]),t._v(" "),n("div",{staticClass:"title-action",on:{click:t.gotoStep2}},[n("div",{staticClass:"title-action-text"},[t._v("查看题目")]),t._v(" "),n("img",{staticClass:"title-action-img",attrs:{src:o(269)}})])]),t._v(" "),n("div",[n("div",[n("div",{staticClass:"signup-title2"},[t._v("当前级别: "+t._s(t.landiLevel))]),t._v(" "),n("div",{staticClass:"topic-text"},[t.topic?n("div",{staticClass:"topic-text-eng"},[t._v(t._s(t.topic.en_topic_name))]):t._e(),t._v(" "),t.topic?n("div",{staticClass:"topic-text-chn"},[t._v(t._s(t.topic.cn_topic_name))]):t._e()]),t._v(" "),n("div",{staticClass:"video"},["uploaded"!=t.videoStatus.type?n("div",{staticClass:"video-hint"},["add"==t.videoStatus.type?n("img",{staticClass:"video-hint-hintimg",attrs:{src:o(434)}}):t._e(),t._v(" "),"error"==t.videoStatus.type?n("img",{staticClass:"video-hint-hintimg",attrs:{src:o(435)}}):t._e(),t._v(" "),t.videoStatus.hint?n("div",{staticClass:"video-hint-hint"},[t._v(t._s(t.videoStatus.hint))]):t._e(),t._v(" "),"uploading"==t.videoStatus.type?n("div",[n("div",{staticClass:"video-hint-progress"},[n("div",{staticClass:"video-hint-progress-bg"}),t._v(" "),n("div",{staticClass:"video-hint-progress-fg",style:{width:t.videoStatus.progress+"%"}})]),t._v(" "),n("div",{staticClass:"video-hint-progresstext"},[t._v("正在上传 "+t._s(t.videoStatus.progress)+"%")])]):t._e()]):t._e(),t._v(" "),"uploaded"==t.videoStatus.type?n("div",{staticClass:"video-uploaded"},[n("video",{staticClass:"video-uploaded-videoplay",staticStyle:{display:"none"},attrs:{id:"video-upload",controls:"",preload:"auto",src:t.videoSrc}}),t._v(" "),n("div",{staticClass:"video-uploaded-video",on:{click:function(e){return t.playFn("video-upload")}}},[n("img",{staticClass:"video-uploaded-video-img",attrs:{src:t.videoSrc+"?vframe/jpg/offset/2/h/960/"}}),t._v(" "),n("div",{staticClass:"video-uploaded-video-play"})])]):t._e(),t._v(" "),"uploading"!=t.videoStatus.type?n("div",{staticClass:"video-upload"},[n("label",{staticClass:"video-upload-action",attrs:{for:"video-upload-input"}},[n("img",{staticClass:"video-upload-action-img",attrs:{src:o(436)}})]),t._v(" "),n("input",{ref:"videoUploadInput",staticStyle:{display:"none"},attrs:{id:"video-upload-input",type:"file",accept:"video/*"},on:{change:t.videoUpload}})]):t._e()])]),t._v(" "),n("submit-area",{staticClass:"submitarea",attrs:{hint:"视频要求时长10-90秒, 视频小于300M",btnText:"进入下一步",isClickable:t.videoUploaded},on:{submit:t.nextStep}})],1)]),t._v(" "),n("toast",{ref:"toast"})],1)},[],!1,null,"5f385024",null);e.default=component.exports}}]);