(window.webpackJsonp=window.webpackJsonp||[]).push([[63,33],{178:function(t,e,o){"use strict";var r=Object.prototype.hasOwnProperty,n=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],o=[],i=0;i<e.length;++i)for(var r=e[i],c=r.obj[r.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===o.indexOf(m)&&(e.push({obj:c,prop:f}),o.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),o=e.obj[e.prop];if(n(o)){for(var r=[],c=0;c<o.length;++c)void 0!==o[c]&&r.push(o[c]);e.obj[e.prop]=r}}}(e),t},decode:function(t,e,o){var r=t.replace(/\+/g," ");if("iso-8859-1"===o)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(t,e,o){if(0===t.length)return t;var r="string"==typeof t?t:String(t);if("iso-8859-1"===o)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var n="",i=0;i<r.length;++i){var l=r.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?n+=r.charAt(i):l<128?n+=c[l]:l<2048?n+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?n+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&r.charCodeAt(i)),n+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return n},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,o){if(!source)return e;if("object"!=typeof source){if(n(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(o&&(o.plainObjects||o.allowPrototypes)||!r.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return n(e)&&!n(source)&&(c=l(e,o)),n(e)&&n(source)?(source.forEach(function(n,i){if(r.call(e,i)){var c=e[i];c&&"object"==typeof c&&n&&"object"==typeof n?e[i]=t(c,n,o):e.push(n)}else e[i]=n}),e):Object.keys(source).reduce(function(e,n){var c=source[n];return r.call(e,n)?e[n]=t(e[n],c,o):e[n]=c,e},c)}}},179:function(t,e,o){"use strict";var r=String.prototype.replace,n=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,n,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,o){"use strict";o(13),o(57),o(73);var r=o(74),n=o.n(r),c=o(184),l=o.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var d=n.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=d},182:function(t,e,o){"use strict";var r=o(178),n=o(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,o,n,c,l,filter,f,h,y,w,k,S){var O=object;if("function"==typeof filter?O=filter(e,O):O instanceof Date?O=y(O):"comma"===o&&d(O)&&(O=O.join(",")),null===O){if(n)return l&&!k?l(e,v.encoder,S):e;O=""}if("string"==typeof O||"number"==typeof O||"boolean"==typeof O||r.isBuffer(O))return l?[w(k?e:l(e,v.encoder,S))+"="+w(l(O,v.encoder,S))]:[w(e)+"="+w(String(O))];var j,_=[];if(void 0===O)return _;if(d(filter))j=filter;else{var A=Object.keys(O);j=f?A.sort(f):A}for(var i=0;i<j.length;++i){var E=j[i];c&&null===O[E]||(d(O)?m(_,t(O[E],"function"==typeof o?o(e,E):e,o,n,c,l,filter,f,h,y,w,k,S)):m(_,t(O[E],e+(h?"."+E:"["+E+"]"),o,n,c,l,filter,f,h,y,w,k,S)))}return _};t.exports=function(object,t){var e,o=object,r=function(t){if(!t)return v;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var o=n.default;if(void 0!==t.format){if(!c.call(n.formatters,t.format))throw new TypeError("Unknown format option provided.");o=t.format}var r=n.formatters[o],filter=v.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(t);"function"==typeof r.filter?o=(0,r.filter)("",o):d(r.filter)&&(e=r.filter);var f,h=[];if("object"!=typeof o||null===o)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var w=l[f];e||(e=Object.keys(o)),r.sort&&e.sort(r.sort);for(var i=0;i<e.length;++i){var k=e[i];r.skipNulls&&null===o[k]||m(h,y(o[k],k,w,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var S=h.join(r.delimiter),O=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?O+="utf8=%26%2310003%3B&":O+="utf8=%E2%9C%93&"),S.length>0?O+S:""}},183:function(t,e,o){"use strict";var r=o(178),n=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,o){if(t){var r=o.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(r),d=l?r.slice(0,l.index):r,f=[];if(d){if(!o.plainObjects&&n.call(Object.prototype,d)&&!o.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(r))&&i<o.depth;){if(i+=1,!o.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!o.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),function(t,e,o){for(var r=e,i=t.length-1;i>=0;--i){var n,c=t[i];if("[]"===c&&o.parseArrays)n=[].concat(r);else{n=o.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);o.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&o.parseArrays&&d<=o.arrayLimit?(n=[])[d]=r:n[l]=r:n={0:r}}r=n}return r}(f,e,o)}};t.exports=function(t,e){var o=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return o.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,o={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),h=-1,v=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,w,k=m[i],S=k.indexOf("]="),O=-1===S?k.indexOf("="):S+1;-1===O?(y=e.decoder(k,c.decoder,v),w=e.strictNullHandling?null:""):(y=e.decoder(k.slice(0,O),c.decoder,v),w=e.decoder(k.slice(O+1),c.decoder,v)),w&&e.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&e.comma&&w.indexOf(",")>-1&&(w=w.split(",")),n.call(o,y)?o[y]=r.combine(o[y],w):o[y]=w}return o}(t,o):t,m=o.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],o);m=r.merge(m,y,o)}return r.compact(m)}},184:function(t,e,o){"use strict";var r=o(182),n=o(183),c=o(179);t.exports={formats:c,parse:n,stringify:r}},185:function(t,e,o){var content=o(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("08a709fc",content,!0,{sourceMap:!1})},187:function(t,e,o){"use strict";var r={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1,queue:[]}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.show?this.queue.push({text:text,mask:mask,timeout:e,position:o}):(this.queue.shift(),this.text=text,this.mask=mask,this.position=o,this.show=!0,setTimeout(function(){t.show=!1,t.queue.length>0&&t.showToast(t.queue[0].text,t.queue[0].mask,t.queue[0].timeout,t.queue[0].position)},e))},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},n=(o(190),o(19)),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"toasttrs"}},[t.show?o("div",[t.mask?o("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),o("div",{staticClass:"toast-content",style:t.position},[t.loading?o("svg",{staticClass:"toast-content-loading",attrs:{viewBox:"25 25 50 50"}},[o("circle",{staticClass:"toast-content-loading",attrs:{cx:"50",cy:"50",r:"20"}})]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?o("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?o("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},190:function(t,e,o){"use strict";var r=o(185);o.n(r).a},191:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:30%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;flex-direction:column}.toast-content-div{height:0.13333rem}.toast-content-loading{width:1.06667rem;transform-origin:center;animation:rotate 2s linear infinite;position:relative}.toast-content-loading circle{fill:none;stroke:#fff;stroke-width:4;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-25px}100%{stroke-dashoffset:-125px}}\n",""])},192:function(t,e,o){"use strict";o.r(e),o.d(e,"STEPS",function(){return n}),o.d(e,"API",function(){return c}),o.d(e,"SIGNUP_DATA_RULE",function(){return l}),o.d(e,"TOPICS",function(){return d}),o.d(e,"VIDEO_STATUS_TYPE",function(){return v}),o.d(e,"STROGE",function(){return y}),o.d(e,"LANDI_LEVEL",function(){return f}),o.d(e,"RANK_LIST",function(){return m}),o.d(e,"INDEX_STEPS",function(){return h});var r=o(193);o.d(e,"REGION_DATA",function(){return r.default});var n=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache",CHECK_LOGIN:"/Mobile/StudentActivity/login",GET_ZAN_CONFIG:"/Mobile/StudentActivityDetail/getZanConfig",MY_SID:"/Mobile/StudentActivity/mySid"},l={engNumName:{rule:/^[0-9a-zA-Z]+$/,message:"请输入正确的英文名"},chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},y={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},218:function(t,e,o){"use strict";o.d(e,"b",function(){return h}),o.d(e,"a",function(){return m});o(247),o(112),o(113),o(13),o(57),o(42),o(73),o(40);var r=o(5),n=o(208),c=o(209),l=o(180),d=o(248),f={video:{mimeType:["video/mp4","video/mpeg","video/quicktime","video/x-msvideo","video/ogg","video/webm","application/vnd.rn-realmedia-vbr"],limit:300},video2:{mimeType:["video/mp4","video/mpeg","video/quicktime","video/x-msvideo","video/ogg","video/webm","application/vnd.rn-realmedia-vbr"],limit:100}},m={VIDEO:"video",VIDEO2:"video2"},h=function(){function t(){Object(n.a)(this,t)}var e;return Object(c.a)(t,[{key:"init",value:(e=Object(r.a)(regeneratorRuntime.mark(function t(e){var o,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o="/Mobile/StudentActivity/token",1===e&&(o="/mobile/StudentWeekHomework/token"),t.next=4,l.a.get(o);case 4:(r=t.sent).status&&(this.domain=r.data.domain,this.token=r.data.uptoken);case 6:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)})},{key:"upload",value:function(t,e,o,r,n){var c=30,l={};if(e&&f[e]&&(c=f[e].limit,l.mimeType=f[e].mimeType),t.size>1024*c*1024)return{error:"上传文件不能大于".concat(c,"MB")};var m=t.name.split("."),h="".concat(v(),".").concat(m[m.length-1]),y=d.upload(t,h,this.token,l);return y.subscribe({next:o,error:r,complete:n}),{subscription:y}}}]),t}(),v=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}},320:function(t,e,o){var content=o(530);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("138ca664",content,!0,{sourceMap:!1})},529:function(t,e,o){"use strict";var r=o(320);o.n(r).a},530:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".upLoadVideo[data-v-23935c9b]{display:flex;justify-content:center;align-items:center;text-align:center;margin-top:4.8rem}.upLoadVideo .content .thisWeekVideo[data-v-23935c9b]{font-size:0.37333rem;color:#666666;padding-bottom:0.13333rem}.upLoadVideo .content .quicklyUpLoad[data-v-23935c9b]{font-size:0.37333rem;color:#666666;padding-bottom:0.53333rem}.upLoadVideo .content .upLoadSpan[data-v-23935c9b]{display:inline-block;background-color:#ffd750;line-height:1.06667rem;font-size:0.37333rem;font-weight:700;width:3.73333rem;height:1.06667rem;margin-bottom:0.53333rem}.upLoadVideo .content .videoRules[data-v-23935c9b]{font-size:0.32rem;color:#999999}.upLoadVideo .content .img[data-v-23935c9b]{margin-top:30%;width:6.19093rem;height:4.704rem}\n",""])},561:function(t,e,o){"use strict";o.r(e);o(40);var r,n=o(5),c=o(187),l=o(218),d=o(192),f={head:function(){return{title:"上传作品"}},components:{toast:c.a},data:function(){return{homeworkId:this.$route.query.homeworkId||"",videoSrc:"",myVid:"",videoFirstImg:""}},methods:{videoUpload:(r=Object(n.a)(regeneratorRuntime.mark(function t(){var e,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=new l.b,t.next=4,e.init(1);case 4:if(this.videoSrc=e.domain,o=e.upload(this.$refs.videoUploadInput.files[0],l.a.VIDEO2,this.fileUploadNext,this.fileUploadError,this.fileUploadComplete),this.$refs.toast.hideLoadingToast(),!o.error){t.next=10;break}return this.$refs.toast.showToast(o.error),t.abrupt("return");case 10:this.videoStatus=d.VIDEO_STATUS_TYPE.UPLOADING;case 11:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),fileUploadNext:function(t){console.log(this.videoStatus,"this.video"),this.videoStatus.progress=Math.round(100*t.total.percent)/100,this.$refs.toast.showLoadingToast(this.videoStatus.progress+"%")},fileUploadError:function(t){console.log(t),this.videoStatus=d.VIDEO_STATUS_TYPE.ERROR,this.$refs.toast.showToast(t.message)},fileUploadComplete:function(t){this.videoStatus=d.VIDEO_STATUS_TYPE.UPLOADED,this.videoFirstImg="".concat(this.videoSrc).concat(t.key),this.videoSrc="".concat(t.key),localStorage.setItem("videoUrl",this.videoSrc),localStorage.setItem("videoFirstImg",this.videoFirstImg),this.$refs.toast.showToast("上传成功"),window.location="".concat("https://www.landi.com/static-web/mobile","/sign_in/addComments/addComments/?homeworkId=").concat(this.homeworkId)}}},m=(o(529),o(19)),component=Object(m.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upLoadVideo"},[o("div",{staticClass:"content"},[o("div",{staticClass:"thisWeekVideo"},[t._v("本周的作业视频录好了吗？")]),t._v(" "),o("div",{staticClass:"quicklyUpLoad"},[t._v("赶快上传班主任老师才能点评哦~")]),t._v(" "),o("label",{staticClass:"upLoadSpan",attrs:{for:"video-upload-input"}},[t._v("上传视频")]),t._v(" "),o("input",{ref:"videoUploadInput",staticClass:"video-upload-input",staticStyle:{display:"none"},attrs:{id:"video-upload-input",type:"file",accept:"video/*",mutiple:"mutiple",capture:"camera"},on:{change:t.videoUpload}}),t._v(" "),o("div",{staticClass:"videoRules"},[t._v("视频要求:10秒≤视频时长,视频大小≤100M")]),t._v(" "),o("img",{staticClass:"img",attrs:{src:"https://qn-static.landi.com/uploadtool964fda54b98513378231d7284da7e59b.png",alt:""}})]),t._v(" "),o("toast",{ref:"toast"})],1)},[],!1,null,"23935c9b",null);e.default=component.exports}}]);