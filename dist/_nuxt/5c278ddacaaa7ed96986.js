(window.webpackJsonp=window.webpackJsonp||[]).push([[22,16],{178:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],i=0;i<e.length;++i)for(var r=e[i],c=r.obj[r.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===n.indexOf(m)&&(e.push({obj:c,prop:f}),n.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(o(n)){for(var r=[],c=0;c<n.length;++c)void 0!==n[c]&&r.push(n[c]);e.obj[e.prop]=r}}}(e),t},decode:function(t,e,n){var r=t.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(t,e,n){if(0===t.length)return t;var r="string"==typeof t?t:String(t);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",i=0;i<r.length;++i){var l=r.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=r.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&r.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,n){if(!source)return e;if("object"!=typeof source){if(o(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(n&&(n.plainObjects||n.allowPrototypes)||!r.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return o(e)&&!o(source)&&(c=l(e,n)),o(e)&&o(source)?(source.forEach(function(o,i){if(r.call(e,i)){var c=e[i];c&&"object"==typeof c&&o&&"object"==typeof o?e[i]=t(c,o,n):e.push(o)}else e[i]=o}),e):Object.keys(source).reduce(function(e,o){var c=source[o];return r.call(e,o)?e[o]=t(e[o],c,n):e[o]=c,e},c)}}},179:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,n){"use strict";n(13);var r=n(73),o=n.n(r),c=n(182),l=n.n(c);console.log("process.env.ENV_API","http://release6.landi.com/");var d=o.a.create({baseURL:"http://release6.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){return console.log(t,t.response),Promise.reject(t)}),e.a=d},181:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var r=n(183),o=n(184),c=n(179);t.exports={formats:c,parse:o,stringify:r}},183:function(t,e,n){"use strict";var r=n(178),o=n(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},v=Date.prototype.toISOString,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(t){return v.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,n,o,c,l,filter,f,v,y,_,w,x){var E=object;if("function"==typeof filter?E=filter(e,E):E instanceof Date?E=y(E):"comma"===n&&d(E)&&(E=E.join(",")),null===E){if(o)return l&&!w?l(e,h.encoder,x):e;E=""}if("string"==typeof E||"number"==typeof E||"boolean"==typeof E||r.isBuffer(E))return l?[_(w?e:l(e,h.encoder,x))+"="+_(l(E,h.encoder,x))]:[_(e)+"="+_(String(E))];var k,j=[];if(void 0===E)return j;if(d(filter))k=filter;else{var D=Object.keys(E);k=f?D.sort(f):D}for(var i=0;i<k.length;++i){var N=k[i];c&&null===E[N]||(d(E)?m(j,t(E[N],"function"==typeof n?n(e,N):e,n,o,c,l,filter,f,v,y,_,w,x)):m(j,t(E[N],e+(v?"."+N:"["+N+"]"),n,o,c,l,filter,f,v,y,_,w,x)))}return j};t.exports=function(object,t){var e,n=object,r=function(t){if(!t)return h;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||h.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==t.format){if(!c.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var r=o.formatters[n],filter=h.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:h.addQueryPrefix,allowDots:void 0===t.allowDots?h.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:h.charsetSentinel,delimiter:void 0===t.delimiter?h.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:h.encode,encoder:"function"==typeof t.encoder?t.encoder:h.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:h.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:h.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:h.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:h.strictNullHandling}}(t);"function"==typeof r.filter?n=(0,r.filter)("",n):d(r.filter)&&(e=r.filter);var f,v=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var _=l[f];e||(e=Object.keys(n)),r.sort&&e.sort(r.sort);for(var i=0;i<e.length;++i){var w=e[i];r.skipNulls&&null===n[w]||m(v,y(n[w],w,_,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var x=v.join(r.delimiter),E=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?E+="utf8=%26%2310003%3B&":E+="utf8=%E2%9C%93&"),x.length>0?E+x:""}},184:function(t,e,n){"use strict";var r=n(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(r),d=l?r.slice(0,l.index):r,f=[];if(d){if(!n.plainObjects&&o.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(r))&&i<n.depth;){if(i+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),function(t,e,n){for(var r=e,i=t.length-1;i>=0;--i){var o,c=t[i];if("[]"===c&&n.parseArrays)o=[].concat(r);else{o=n.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);n.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(o=[])[d]=r:o[l]=r:o={0:r}}r=o}return r}(f,e,n)}};t.exports=function(t,e){var n=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,n={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),v=-1,h=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?h="utf-8":"utf8=%26%2310003%3B"===m[i]&&(h="iso-8859-1"),v=i,i=m.length);for(i=0;i<m.length;++i)if(i!==v){var y,_,w=m[i],x=w.indexOf("]="),E=-1===x?w.indexOf("="):x+1;-1===E?(y=e.decoder(w,c.decoder,h),_=e.strictNullHandling?null:""):(y=e.decoder(w.slice(0,E),c.decoder,h),_=e.decoder(w.slice(E+1),c.decoder,h)),_&&e.interpretNumericEntities&&"iso-8859-1"===h&&(_=l(_)),_&&e.comma&&_.indexOf(",")>-1&&(_=_.split(",")),o.call(n,y)?n[y]=r.combine(n[y],_):n[y]=_}return n}(t,n):t,m=n.plainObjects?Object.create(null):{},v=Object.keys(f),i=0;i<v.length;++i){var h=v[i],y=d(h,f[h],n);m=r.merge(m,y,n)}return r.compact(m)}},185:function(t,e,n){"use strict";var r=n(3),o=n(16),c=n(21),l=n(109),d=n(57),f=n(10),m=n(41).f,v=n(58).f,h=n(9).f,y=n(191).trim,_=r.Number,w=_,x=_.prototype,E="Number"==c(n(74)(x)),k="trim"in String.prototype,j=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=k?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(E?f(function(){x.valueOf.call(n)}):"Number"!=c(n))?l(new w(j(e)),n,_):j(e)};for(var D,N=n(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;N.length>A;A++)o(w,D=N[A])&&!o(_,D)&&h(_,D,v(w,D));_.prototype=x,x.constructor=_,n(11)(r,"Number",_)}},186:function(t,e,n){var content=n(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1febb9da",content,!0,{sourceMap:!1})},187:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5d6f913d",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1291ba86",content,!0,{sourceMap:!1})},191:function(t,e,n){var r=n(7),o=n(20),c=n(10),l=n(192),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t,e,n){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=d?e(h):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},h=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=v},192:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},193:function(t,e,n){"use strict";n.r(e),n.d(e,"STEPS",function(){return o}),n.d(e,"API",function(){return c}),n.d(e,"SIGNUP_DATA_RULE",function(){return l}),n.d(e,"TOPICS",function(){return d}),n.d(e,"VIDEO_STATUS_TYPE",function(){return h}),n.d(e,"STROGE",function(){return y}),n.d(e,"LANDI_LEVEL",function(){return f}),n.d(e,"RANK_LIST",function(){return m}),n.d(e,"INDEX_STEPS",function(){return v});var r=n(190);n.d(e,"REGION_DATA",function(){return r.default});var o=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivity/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan"},l={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],v=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],h={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},y={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},194:function(t,e,n){"use strict";var r=n(181);n.n(r).a},195:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".toasttrs-enter-active,\n.toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter,\n.toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.333333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.266667rem 0.4rem;\n  color: #fff;\n  font-size: 0.373333rem;\n  border-radius: 0.133333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n  height: 0.133333rem;\n}\n.toast-content-loading {\n  display: flex;\n  justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.066667rem;\n  height: 1.066667rem;\n}\n.toast-content-loading-content div {\n  box-sizing: border-box;\n  position: absolute;\n  width: 1.066667rem;\n  height: 1.066667rem;\n  border: 1vw solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}",""])},196:function(t,e,n){"use strict";var r={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=n,this.show=!0,setTimeout(function(){t.show=!1},e)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},o=(n(194),n(19)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toasttrs"}},[t.show?n("div",[t.mask?n("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),n("div",{staticClass:"toast-content",style:t.position},[t.loading?n("div",{staticClass:"toast-content-loading"},[n("div",{staticClass:"toast-content-loading-content"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?n("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?n("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},197:function(t,e,n){"use strict";var r=n(186);n.n(r).a},198:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-20e1ccc8] {\n  margin-top: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-20e1ccc8] {\n  padding: 0 0.4rem;\n}\nh1[data-v-20e1ccc8] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-20e1ccc8] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-20e1ccc8] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-20e1ccc8] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#stepbar[data-v-20e1ccc8] {\n  position: relative;\n}\n.wrapper[data-v-20e1ccc8] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.circle[data-v-20e1ccc8] {\n  height: 0.693333rem;\n  width: 0.693333rem;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 0.15rem -0.07rem #666666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle-wrapper[data-v-20e1ccc8] {\n  height: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.circle-content[data-v-20e1ccc8] {\n  height: 0.533333rem;\n  width: 0.533333rem;\n  color: #fff;\n  background: #E6E6E6;\n  border-radius: 50%;\n  font-family: STYuanti-SC-Regular;\n  font-size: 0.293333rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle .accent[data-v-20e1ccc8] {\n  background: #16C8D2;\n}\n.step-item[data-v-20e1ccc8] {\n  color: #B2B2B2;\n  font-size: 0.293333rem;\n  font-weight: 400;\n}\n.step .accent[data-v-20e1ccc8] {\n  color: #16C8D2;\n}\n.progress[data-v-20e1ccc8] {\n  height: 1.2rem;\n  width: 90%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  overflow: hidden;\n}\n.progress-bar[data-v-20e1ccc8] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(0, -50%);\n  height: 0.08rem;\n  border-radius: 0.04rem;\n}\n.progress-empty[data-v-20e1ccc8] {\n  width: 100%;\n  box-shadow: inset 0 0.02rem 0.03rem -0.025rem #666666;\n}\n.progress-fill[data-v-20e1ccc8] {\n  background: #16C8D2;\n}",""])},199:function(t,e,n){t.exports=n.p+"img/7fef1c0.png"},200:function(t,e,n){t.exports=n.p+"img/a8d20f2.png"},201:function(t,e,n){t.exports=n.p+"img/31eeb1c.png"},202:function(t,e,n){"use strict";var r=n(187);n.n(r).a},203:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".wrapper[data-v-12968d04] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.content[data-v-12968d04] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n}\n.content-poster[data-v-12968d04] {\n  width: 7.466667rem;\n}\n.content-close[data-v-12968d04] {\n  width: 60%;\n  text-align: right;\n  margin-bottom: -0.106667rem;\n}\n.content-close-img[data-v-12968d04] {\n  width: 0.666667rem;\n}",""])},204:function(t,e,n){"use strict";var r=n(188);n.n(r).a},205:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar {\n  margin-top: 0.4rem;\n  height: 2.2rem;\n}\n.page-content {\n  padding: 0 0.4rem;\n}\nh1 {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2 {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3 {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n.submit {\n  text-align: center;\n  width: 100%;\n  position: fixed;\n  bottom: 0.5rem;\n  left: 0;\n}\n.submit-text {\n  margin: 0.3rem 0;\n  color: #B2B2B2;\n  font-size: 0.32rem;\n  padding: 0 0.6rem;\n}\n.submit-btn {\n  display: inline-block;\n  width: 8.666667rem;\n  line-height: 1.333333rem;\n  text-align: center;\n  font-size: 0.453333rem;\n  color: #fff;\n  background: #B2B2B2;\n}\n.submit .accent {\n  background: #16C8D2;\n}",""])},207:function(t,e,n){"use strict";n(185);var r={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},o=(n(197),n(19)),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"stepbar"}},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),n("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),n("div",{staticClass:"wrapper"},t._l(t.steps,function(e,r){return n("div",{key:e,staticClass:"wrapper-item"},[n("div",{staticClass:"circle-wrapper"},[n("div",{staticClass:"circle"},[n("div",{class:["circle-content",r/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(r+1))])])]),t._v(" "),n("div",{staticClass:"step"},[n("div",{class:["step-item",r/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(e))])])])}),0)])},[],!1,null,"20e1ccc8",null).exports,l={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")}}},d=(n(202),Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"wrapper"},[r("div",{staticClass:"content"},[r("div",{staticClass:"content-close"},[r("img",{staticClass:"content-close-img",attrs:{src:n(199)},on:{click:t.close}})]),t._v(" "),0==t.poster?r("img",{staticClass:"content-poster",attrs:{src:n(200)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?r("img",{staticClass:"content-poster",attrs:{src:n(201)},on:{click:t.gotoLink}}):t._e()])]):t._e()])},[],!1,null,"12968d04",null).exports),f={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},m=(n(204),Object(o.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"submit"},[n("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),n("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);n.d(e,"b",function(){return c}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return m})},250:function(t,e,n){var content=n(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("12d5744a",content,!0,{sourceMap:!1})},353:function(t,e,n){"use strict";var r=n(250);n.n(r).a},354:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-1516a588] {\n  margin-top: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-1516a588] {\n  padding: 0 0.4rem;\n}\nh1[data-v-1516a588] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-1516a588] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-1516a588] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-1516a588] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n.signupform-item[data-v-1516a588] {\n  border-top: 0.02rem solid #E6E6E6;\n  padding: 0.4rem 0;\n  white-space: nowrap;\n}\n.signupform-item[data-v-1516a588]:last-child {\n  border-bottom: 0.02rem solid #E6E6E6;\n}\n.signupform-item-label[data-v-1516a588] {\n  display: inline-block;\n  color: #333333;\n  font-size: 0.37rem;\n  width: 2.04rem;\n  margin-right: 0.493333rem;\n}\n.signupform-item .required[data-v-1516a588]::after {\n  content: '*';\n  color: #F0552D;\n}\n.signupform-item-input[data-v-1516a588] {\n  font-size: 0.373333rem;\n  outline: none;\n  color: #333333;\n  width: 4rem;\n}\n.signupform-item-input[data-v-1516a588]::placeholder {\n  color: #B2B2B2;\n}\n.signupform-item-select[data-v-1516a588] {\n  font-size: 0.373333rem;\n  outline: none;\n  color: #333333;\n  appearance: none;\n}\n.signupform-item-vcode[data-v-1516a588] {\n  display: inline-block;\n  background: #F0552D;\n  font-size: 0.32rem;\n  color: #fff;\n  line-height: 0.9rem;\n  width: 2.266667rem;\n  text-align: center;\n}\n.signupform-item-vcode-timeout[data-v-1516a588] {\n  background: #B2B2B2;\n}",""])},411:function(t,e,n){"use strict";n.r(e);n(75),n(40);var r,o=n(5),c=(n(61),n(23),n(24),n(13),n(42),n(207)),l=n(193),d=n(180),f=n(196),m={name:"Signup",head:function(){return{title:"报名信息"}},components:{"step-bar":c.b,toast:f.a,"poster-modal":c.a,"submit-area":c.c},data:function(){return{steps:l.STEPS,signupData:{landiLevel:"",province:"0",city:"0"},validateCodeTimeout:0,dataNotEmpty:!1,landiLevels:[],regionData:l.REGION_DATA,errorMessage:""}},methods:{provinceSelectChange:function(){this.signupData.city="0"},formBlur:function(){for(var t=0,e=Object.keys(this.signupData);t<e.length;t++){var n=e[t];if(""==this.signupData[n]||"0"==this.signupData[n])return void(this.dataNotEmpty=!1)}this.dataNotEmpty=!0},formSubmit:function(){if(this.dataNotEmpty){for(var t=0,e=Object.keys(this.signupData);t<e.length;t++){var n=e[t];if(!l.SIGNUP_DATA_RULE[n].rule.test(this.signupData[n]))return this.errorMessage=l.SIGNUP_DATA_RULE[n].message,void this.$refs.toast.showToast(this.errorMessage)}var r={},o=!0,c=!1,d=void 0;try{for(var f,m=this.landiLevels[Symbol.iterator]();!(o=(f=m.next()).done);o=!0){var v=f.value;v.id==this.signupData.landiLevel&&(r=v)}}catch(t){c=!0,d=t}finally{try{o||null==m.return||m.return()}finally{if(c)throw d}}var h=this.$refs.province,y=this.$refs.city;localStorage.setItem(l.STROGE.FORM_DATA,JSON.stringify({landiLevel:r,address:"".concat(h.options[h.selectedIndex].text,"/").concat(y.options[y.selectedIndex].text,"#").concat(this.signupData.province,"/").concat(this.signupData.city)})),this.$router.push({name:"presentation-signup-step2",query:this.$route.query})}}},mounted:(r=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,r,address;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=this.$route.query.activity_id||1,t.next=4,d.a.get("".concat(l.API.ACTIVITY_DETAIL,"?activity_id=").concat(e));case 4:if((n=t.sent).status){t.next=9;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(n.info),t.abrupt("return");case 9:return this.landiLevels=n.data.combinations,t.next=12,d.a.get("".concat(l.API.MY_WORK,"?activity_id=").concat(e));case 12:if((r=t.sent).status){t.next=19;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(r.info),t.abrupt("return");case 19:r.data.id&&(this.signupData.landiLevel=r.data.combination_id,address=r.data.address.split("#")[1].split("/"),this.signupData.province=address[0],this.signupData.city=address[1]);case 20:this.$refs.toast.hideLoadingToast();case 21:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},v=(n(353),n(19)),component=Object(v.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top-step-bar"},[n("step-bar",{attrs:{steps:t.steps,progress:10}})],1),t._v(" "),n("div",{staticClass:"page-content"},[n("h1",[t._v("报名信息")]),t._v(" "),n("div",{staticClass:"signupform"},[n("div",{staticClass:"signupform-item"},[n("span",{staticClass:"signupform-item-label required"},[t._v("兰迪级别")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.signupData.landiLevel,expression:"signupData.landiLevel"}],staticClass:"signupform-item-select",on:{blur:t.formBlur,change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.signupData,"landiLevel",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[t._v("请选择级别")]),t._v(" "),t._l(t.landiLevels,function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]),t._v(" "),n("div",{staticClass:"signupform-item"},[n("span",{staticClass:"signupform-item-label required"},[t._v("地址")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.signupData.province,expression:"signupData.province"}],ref:"province",staticClass:"signupform-item-select",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.signupData,"province",e.target.multiple?n:n[0])},t.provinceSelectChange],blur:t.formBlur}},[n("option",{attrs:{value:"0"}},[t._v("请选择所在省份")]),t._v(" "),t._l(t.regionData.province,function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.signupData.city,expression:"signupData.city"}],ref:"city",staticClass:"signupform-item-select",on:{blur:t.formBlur,change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.signupData,"city",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"0"}},[t._v("城市")]),t._v(" "),t._l(t.regionData.city[t.signupData.province],function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)])]),t._v(" "),n("submit-area",{attrs:{hint:"请确认信息属实, 一旦提交后不可再修改",btnText:"提交报名信息",isClickable:t.dataNotEmpty},on:{submit:t.formSubmit}})],1),t._v(" "),n("toast",{ref:"toast"})],1)},[],!1,null,"1516a588",null);e.default=component.exports}}]);