(window.webpackJsonp=window.webpackJsonp||[]).push([[38,33,35],{178:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],i=0;i<e.length;++i)for(var r=e[i],c=r.obj[r.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===n.indexOf(m)&&(e.push({obj:c,prop:f}),n.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(o(n)){for(var r=[],c=0;c<n.length;++c)void 0!==n[c]&&r.push(n[c]);e.obj[e.prop]=r}}}(e),t},decode:function(t,e,n){var r=t.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(t,e,n){if(0===t.length)return t;var r="string"==typeof t?t:String(t);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",i=0;i<r.length;++i){var l=r.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=r.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&r.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,n){if(!source)return e;if("object"!=typeof source){if(o(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(n&&(n.plainObjects||n.allowPrototypes)||!r.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return o(e)&&!o(source)&&(c=l(e,n)),o(e)&&o(source)?(source.forEach(function(o,i){if(r.call(e,i)){var c=e[i];c&&"object"==typeof c&&o&&"object"==typeof o?e[i]=t(c,o,n):e.push(o)}else e[i]=o}),e):Object.keys(source).reduce(function(e,o){var c=source[o];return r.call(e,o)?e[o]=t(e[o],c,n):e[o]=c,e},c)}}},179:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,n){"use strict";n(13),n(57),n(73);var r=n(74),o=n.n(r),c=n(183),l=n.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var d=o.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=d},181:function(t,e,n){var content=n(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("08a709fc",content,!0,{sourceMap:!1})},183:function(t,e,n){"use strict";var r=n(184),o=n(185),c=n(179);t.exports={formats:c,parse:o,stringify:r}},184:function(t,e,n){"use strict";var r=n(178),o=n(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,n,o,c,l,filter,f,h,y,k,w,_){var A=object;if("function"==typeof filter?A=filter(e,A):A instanceof Date?A=y(A):"comma"===n&&d(A)&&(A=A.join(",")),null===A){if(o)return l&&!w?l(e,v.encoder,_):e;A=""}if("string"==typeof A||"number"==typeof A||"boolean"==typeof A||r.isBuffer(A))return l?[k(w?e:l(e,v.encoder,_))+"="+k(l(A,v.encoder,_))]:[k(e)+"="+k(String(A))];var x,j=[];if(void 0===A)return j;if(d(filter))x=filter;else{var O=Object.keys(A);x=f?O.sort(f):O}for(var i=0;i<x.length;++i){var E=x[i];c&&null===A[E]||(d(A)?m(j,t(A[E],"function"==typeof n?n(e,E):e,n,o,c,l,filter,f,h,y,k,w,_)):m(j,t(A[E],e+(h?"."+E:"["+E+"]"),n,o,c,l,filter,f,h,y,k,w,_)))}return j};t.exports=function(object,t){var e,n=object,r=function(t){if(!t)return v;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==t.format){if(!c.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var r=o.formatters[n],filter=v.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(t);"function"==typeof r.filter?n=(0,r.filter)("",n):d(r.filter)&&(e=r.filter);var f,h=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var k=l[f];e||(e=Object.keys(n)),r.sort&&e.sort(r.sort);for(var i=0;i<e.length;++i){var w=e[i];r.skipNulls&&null===n[w]||m(h,y(n[w],w,k,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var _=h.join(r.delimiter),A=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?A+="utf8=%26%2310003%3B&":A+="utf8=%E2%9C%93&"),_.length>0?A+_:""}},185:function(t,e,n){"use strict";var r=n(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(r),d=l?r.slice(0,l.index):r,f=[];if(d){if(!n.plainObjects&&o.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(r))&&i<n.depth;){if(i+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),function(t,e,n){for(var r=e,i=t.length-1;i>=0;--i){var o,c=t[i];if("[]"===c&&n.parseArrays)o=[].concat(r);else{o=n.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);n.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(o=[])[d]=r:o[l]=r:o={0:r}}r=o}return r}(f,e,n)}};t.exports=function(t,e){var n=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,n={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),h=-1,v=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,k,w=m[i],_=w.indexOf("]="),A=-1===_?w.indexOf("="):_+1;-1===A?(y=e.decoder(w,c.decoder,v),k=e.strictNullHandling?null:""):(y=e.decoder(w.slice(0,A),c.decoder,v),k=e.decoder(w.slice(A+1),c.decoder,v)),k&&e.interpretNumericEntities&&"iso-8859-1"===v&&(k=l(k)),k&&e.comma&&k.indexOf(",")>-1&&(k=k.split(",")),o.call(n,y)?n[y]=r.combine(n[y],k):n[y]=k}return n}(t,n):t,m=n.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],n);m=r.merge(m,y,n)}return r.compact(m)}},187:function(t,e,n){"use strict";var r={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1,queue:[]}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.show?this.queue.push({text:text,mask:mask,timeout:e,position:n}):(this.queue.shift(),this.text=text,this.mask=mask,this.position=n,this.show=!0,setTimeout(function(){t.show=!1,t.queue.length>0&&t.showToast(t.queue[0].text,t.queue[0].mask,t.queue[0].timeout,t.queue[0].position)},e))},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},o=(n(188),n(19)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toasttrs"}},[t.show?n("div",[t.mask?n("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),n("div",{staticClass:"toast-content",style:t.position},[t.loading?n("svg",{staticClass:"toast-content-loading",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"toast-content-loading",attrs:{cx:"50",cy:"50",r:"20"}})]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?n("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?n("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},188:function(t,e,n){"use strict";var r=n(181);n.n(r).a},189:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:30%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;flex-direction:column}.toast-content-div{height:0.13333rem}.toast-content-loading{width:1.06667rem;transform-origin:center;animation:rotate 2s linear infinite;position:relative}.toast-content-loading circle{fill:none;stroke:#fff;stroke-width:4;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-25px}100%{stroke-dashoffset:-125px}}\n",""])},196:function(t,e,n){"use strict";n.r(e),n.d(e,"STEPS",function(){return o}),n.d(e,"API",function(){return c}),n.d(e,"SIGNUP_DATA_RULE",function(){return l}),n.d(e,"TOPICS",function(){return d}),n.d(e,"VIDEO_STATUS_TYPE",function(){return v}),n.d(e,"STROGE",function(){return y}),n.d(e,"LANDI_LEVEL",function(){return f}),n.d(e,"RANK_LIST",function(){return m}),n.d(e,"INDEX_STEPS",function(){return h});var r=n(193);n.d(e,"REGION_DATA",function(){return r.default});var o=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache",CHECK_LOGIN:"/Mobile/StudentActivity/login",GET_ZAN_CONFIG:"/Mobile/StudentActivityDetail/getZanConfig",MY_SID:"/Mobile/StudentActivity/mySid"},l={engNumName:{rule:/^[0-9a-zA-Z]+$/,message:"请输入正确的英文名"},chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},y={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},198:function(t,e,n){"use strict";n.r(e);n(57);e.default={methods:{gotoPage:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.replace({name:t,query:e})},gotoPageWithHistory:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.push({name:t,query:e})}}}},248:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return r})},289:function(t,e,n){var content=n(474);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("e0e09e12",content,!0,{sourceMap:!1})},467:function(t,e,n){t.exports=n.p+"img/171d5a9.png"},468:function(t,e,n){t.exports=n.p+"img/0294e59.png"},469:function(t,e,n){t.exports=n.p+"img/c279763.png"},473:function(t,e,n){"use strict";var r=n(289);n.n(r).a},474:function(t,e,n){e=t.exports=n(38)(!1);var r=n(182),o=r(n(475)),c=r(n(476)),l=r(n(477));e.push([t.i,".top-step-bar[data-v-ec459954]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-ec459954]{padding:0 0.4rem}.page-content-content[data-v-ec459954]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-ec459954]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-ec459954]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#rank[data-v-ec459954]{background:#fff;width:100vw;height:100%}.headbar[data-v-ec459954]{height:4.67rem;width:100vw;background:url("+o+") 61vw 4vw/38vw no-repeat,url("+c+") 0 0/cover;background-color:#3b7ada;color:#fff;position:relative}.headbar-content[data-v-ec459954]{position:absolute;top:50%;left:0.4rem;transform:translate(0, -50%)}.headbar-content-title[data-v-ec459954]{font-size:0.53333rem;font-weight:bold;margin-bottom:0.2rem;font-family:MicrosoftYaHei-Bold}.headbar-content-text[data-v-ec459954]{width:5.73333rem;font-family:MicrosoftYaHei;font-size:0.34667rem;color:#FFFFFF;letter-spacing:0;line-height:0.54667rem}.level[data-v-ec459954]{height:1.2rem;width:100vw;display:flex;justify-content:space-around;align-items:center;background:#3781D6;top:0;z-index:999}.level-item[data-v-ec459954]{position:relative;width:2.66667rem;text-align:center}.level-item-content[data-v-ec459954]{color:#fff;font-size:0.4rem;line-height:1.2rem;max-lines:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.level-item .accent[data-v-ec459954]{font-weight:bold}.level-item-selector[data-v-ec459954]{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:0;height:0;width:0.4rem;height:0.18667rem;background:url("+l+") 50% 50%/cover}.rank[data-v-ec459954]{overflow-y:scroll;-webkit-overflow-scrolling:touch;padding:0}.rank[data-v-ec459954]::-webkit-scrollbar{display:none}.rank-item[data-v-ec459954]{display:flex;justify-content:space-between;box-sizing:content-box;border-bottom:1px solid #EBEBEB;background:#fff;padding:0.25rem 0;margin:0 0.4rem}.rank-item-left[data-v-ec459954]{display:flex;align-items:center;justify-content:space-between;width:7.5rem}.rank-item-rank[data-v-ec459954]{width:0.8rem;text-align:center;font-size:0.36rem;color:#B2B2B2;display:flex;align-items:center;justify-content:center}.rank-item-rank img[data-v-ec459954]{width:0.8rem;height:0.8rem}.rank-item-avatar[data-v-ec459954]{width:1.3rem;height:1.3rem;border-radius:50%;overflow:hidden}.rank-item-avatar-img[data-v-ec459954]{width:inherit;height:inherit;object-fit:cover}.rank-item-name[data-v-ec459954]{width:4.5rem;padding-left:0.2rem;text-align:left;font-size:0.42667rem;color:#333333;font-family:MicrosoftYaHei}.rank-item-like[data-v-ec459954]{display:flex;flex-direction:column;justify-content:center;align-items:center}.rank-item-like-num[data-v-ec459954]{color:#F0552D;font-size:0.42rem}.rank-item-like-text[data-v-ec459954]{color:#B2B2B2;font-size:0.29333rem}.rank-self .rank-division[data-v-ec459954]{width:100%;height:0.32rem;background:#E6E6E6}.rank-self .rank-self-data[data-v-ec459954]{font-size:0.29333rem;color:#B2B2B2;letter-spacing:0;text-align:justify}\n",""])},475:function(t,e,n){t.exports=n.p+"img/9d750df.png"},476:function(t,e,n){t.exports=n.p+"img/459c9b7.png"},477:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAAAXNSR0IArs4c6QAAAORJREFUOBGljbsNg0AQRBESARERISk5OQ1QAR3QAi24BJfgClyAC3Ds2KEjRw4sWecZS4gT3Gf3fNKIZXfmTZYlPmPMgUqM62Moy6EjtDzOuZ6kSKCggE5Lo/XlrlCg5FaAS+hslW1H3ko5UeAEsIIu2ybHPz2VABm3AFRDV0eJb0VvHScHHAA00M3XENgz0wTQ/hOCLXQPwGMnZlt/g+OCQAc9YmTBnYzOUbFfwdhDTwFUaiGr3zdZGxgG6CUlKnxkDlbVOuIwQm8FTGsle1wbMWExQR8tKcHPjulXjmFOAPwbmb9rGZKSx6+73wAAAABJRU5ErkJggg=="},588:function(t,e,n){"use strict";n.r(e);var r,o,c,l=n(248),d=(n(40),n(5)),f=n(196),m=n(180),h=n(187),v=n(198),y=n(338),k={name:"Rank",mixins:[v.default],head:function(){return{title:"点赞排行榜"}},components:{toast:h.a,"mt-loadmore":y.Loadmore},data:function(){return{landiLevels:[],landiLevelIndex:4,rankList:[],innerScroll:!1,headbarBottom:0,selfRankData:{},pageIndex:1,allLoaded:!1,hasNext:!0}},methods:{listUpdate:function(t){this.pageIndex=1,this.landiLevelIndex=t,this.rankList=[],this.allLoaded=!1,this.hasNext=!0,this.getListData(t)},handleScroll:function(){window.scrollY>=this.headbarBottom?this.innerScroll=!0:this.innerScroll=!1},getListData:(c=Object(d.a)(regeneratorRuntime.mark(function t(e){var n,r,o,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.$route.query.activity_id,t.prev=1,o="".concat(f.API.NEW_RANK,"?activity_id=").concat(n,"&combination_id=").concat(e,"&page=").concat(this.pageIndex),t.next=5,m.a.get(o);case 5:if((c=t.sent).status){t.next=10;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(c.info),t.abrupt("return");case 10:(r=this.rankList).push.apply(r,Object(l.a)(c.data.list)),this.selfRankData=c.data.my_work||{},this.hasNext=c.data.has_next,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),console.log(t.t0);case 18:case"end":return t.stop()}},t,this,[[1,15]])})),function(t){return c.apply(this,arguments)}),getRankConfig:(o=Object(d.a)(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query.activity_id,t.prev=1,n="".concat(f.API.GET_RANK_CONFIG,"?activity_id=").concat(e),t.next=5,m.a.get(n);case 5:(r=t.sent).status?(document.title=r.data.activity_name,this.landiLevels=r.data.combinations,this.landiLevelIndex=r.data.combinations[0].id,this.getListData(this.landiLevelIndex)):console.log(r.info),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[1,9]])})),function(){return o.apply(this,arguments)}),onLoad:function(){this.hasNext?(this.pageIndex++,this.getListData(this.landiLevelIndex)):(this.allLoaded=!0,this.$refs.loadmore.onBottomLoaded())},checkProduction:function(t){console.log(t),window.location="".concat("https://www.landi.com/static-web/mobile","/presentation/share/?activity_id=").concat(this.$route.query.activity_id,"&work_id=").concat(t)}},mounted:(r=Object(d.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.headbarBottom=this.$refs.headbar.getBoundingClientRect().bottom,window.addEventListener("scroll",this.handleScroll),this.$refs.toast.showLoadingToast(),this.getRankConfig(),this.$refs.toast.hideLoadingToast();case 5:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},w=(n(473),n(19)),component=Object(w.a)(k,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"rank"}},[r("div",{ref:"headbar",staticClass:"headbar"},[t._m(0)]),t._v(" "),r("div",{staticClass:"level",style:{position:t.innerScroll?"fixed":"static"}},t._l(t.landiLevels,function(e){return r("div",{key:e.id,staticClass:"level-item",on:{click:function(n){return t.listUpdate(e.id)}}},[r("div",{class:["level-item-content",t.landiLevelIndex==e.id?"accent":""]},[t._v(t._s(e.name))]),t._v(" "),t.landiLevelIndex==e.id?r("div",{staticClass:"level-item-selector"}):t._e()])}),0),t._v(" "),r("mt-loadmore",{ref:"loadmore",staticClass:"rank",attrs:{"bottom-method":t.onLoad,"bottom-all-loaded":t.allLoaded,bottomPullText:"",bottomDropText:"","auto-fill":!1}},[Object.keys(t.selfRankData).length>0?r("div",{staticClass:"rank-self",on:{click:function(e){return t.checkProduction(t.selfRankData.work_id)}}},[r("div",{staticClass:"rank-item"},[r("div",{staticClass:"rank-item-left"},[r("div",{staticClass:"rank-item-rank"}),t._v(" "),r("div",{staticClass:"rank-item-avatar"},[r("img",{staticClass:"rank-item-avatar-img",attrs:{src:t.selfRankData.avatar}})]),t._v(" "),r("div",{staticClass:"rank-item-name"},[r("div",[t._v(t._s(t.selfRankData.en_name))]),t._v(" "),r("div",{staticClass:"rank-self-data"},[t._v("第"+t._s(t.selfRankData.rank)+"名")])])]),t._v(" "),r("div",{staticClass:"rank-item-like"},[r("div",{staticClass:"rank-item-like-num"},[t._v(t._s(t.selfRankData.zan))]),t._v(" "),r("div",{staticClass:"rank-item-like-text"},[t._v("点赞数")])])]),t._v(" "),r("div",{staticClass:"rank-division"})]):t._e(),t._v(" "),t._l(t.rankList,function(e,o){return r("div",{key:e.sid,staticClass:"rank-item",on:{click:function(n){return t.checkProduction(e.work_id)}}},[r("div",{staticClass:"rank-item-left"},[r("div",{staticClass:"rank-item-rank"},[o>2?r("div",[t._v(t._s((""+(o+1)).padStart(2,"0")))]):t._e(),t._v(" "),0==o?r("img",{attrs:{src:n(467)}}):t._e(),t._v(" "),1==o?r("img",{attrs:{src:n(468)}}):t._e(),t._v(" "),2==o?r("img",{attrs:{src:n(469)}}):t._e()]),t._v(" "),r("div",{staticClass:"rank-item-avatar"},[r("img",{staticClass:"rank-item-avatar-img",attrs:{src:e.avatar}})]),t._v(" "),r("div",{staticClass:"rank-item-name"},[t._v(t._s(e.en_name))])]),t._v(" "),r("div",{staticClass:"rank-item-like"},[r("div",{staticClass:"rank-item-like-num"},[t._v(t._s(e.zan))]),t._v(" "),r("div",{staticClass:"rank-item-like-text"},[t._v("点赞数")])])])})],2),t._v(" "),r("toast",{ref:"toast"})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headbar-content"},[e("div",{staticClass:"headbar-content-title"},[this._v("点赞排行榜")]),this._v(" "),e("div",{staticClass:"headbar-content-text"},[this._v("在比赛中，小朋友们的精彩表现，让我们为选手们送上祝福的掌声，期待他们在未来取得更多成就")])])}],!1,null,"ec459954",null);e.default=component.exports}}]);