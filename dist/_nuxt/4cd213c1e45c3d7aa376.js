(window.webpackJsonp=window.webpackJsonp||[]).push([[42,33,35,36],{178:function(t,e,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],i=0;i<e.length;++i)for(var n=e[i],c=n.obj[n.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(e.push({obj:c,prop:f}),r.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);e.obj[e.prop]=n}}}(e),t},decode:function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,e,r){if(0===t.length)return t;var n="string"==typeof t?t:String(t);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,r){if(!source)return e;if("object"!=typeof source){if(o(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return o(e)&&!o(source)&&(c=l(e,r)),o(e)&&o(source)?(source.forEach(function(o,i){if(n.call(e,i)){var c=e[i];c&&"object"==typeof c&&o&&"object"==typeof o?e[i]=t(c,o,r):e.push(o)}else e[i]=o}),e):Object.keys(source).reduce(function(e,o){var c=source[o];return n.call(e,o)?e[o]=t(e[o],c,r):e[o]=c,e},c)}}},179:function(t,e,r){"use strict";var n=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,r){"use strict";r(13),r(57),r(73);var n=r(74),o=r.n(n),c=r(184),l=r.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var d=o.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=d},182:function(t,e,r){"use strict";var n=r(178),o=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,r,o,c,l,filter,f,h,y,w,_,x){var k=object;if("function"==typeof filter?k=filter(e,k):k instanceof Date?k=y(k):"comma"===r&&d(k)&&(k=k.join(",")),null===k){if(o)return l&&!_?l(e,v.encoder,x):e;k=""}if("string"==typeof k||"number"==typeof k||"boolean"==typeof k||n.isBuffer(k))return l?[w(_?e:l(e,v.encoder,x))+"="+w(l(k,v.encoder,x))]:[w(e)+"="+w(String(k))];var N,E=[];if(void 0===k)return E;if(d(filter))N=filter;else{var S=Object.keys(k);N=f?S.sort(f):S}for(var i=0;i<N.length;++i){var A=N[i];c&&null===k[A]||(d(k)?m(E,t(k[A],"function"==typeof r?r(e,A):e,r,o,c,l,filter,f,h,y,w,_,x)):m(E,t(k[A],e+(h?"."+A:"["+A+"]"),r,o,c,l,filter,f,h,y,w,_,x)))}return E};t.exports=function(object,t){var e,r=object,n=function(t){if(!t)return v;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==t.format){if(!c.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var n=o.formatters[r],filter=v.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(t);"function"==typeof n.filter?r=(0,n.filter)("",r):d(n.filter)&&(e=n.filter);var f,h=[];if("object"!=typeof r||null===r)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var w=l[f];e||(e=Object.keys(r)),n.sort&&e.sort(n.sort);for(var i=0;i<e.length;++i){var _=e[i];n.skipNulls&&null===r[_]||m(h,y(r[_],_,w,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var x=h.join(n.delimiter),k=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?k+="utf8=%26%2310003%3B&":k+="utf8=%E2%9C%93&"),x.length>0?k+x:""}},183:function(t,e,r){"use strict";var n=r(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,r){if(t){var n=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(n),d=l?n.slice(0,l.index):n,f=[];if(d){if(!r.plainObjects&&o.call(Object.prototype,d)&&!r.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+n.slice(l.index)+"]"),function(t,e,r){for(var n=e,i=t.length-1;i>=0;--i){var o,c=t[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);r.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(o=[])[d]=n:o[l]=n:o={0:n}}n=o}return n}(f,e,r)}};t.exports=function(t,e){var r=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||n.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,r={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),h=-1,v=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,w,_=m[i],x=_.indexOf("]="),k=-1===x?_.indexOf("="):x+1;-1===k?(y=e.decoder(_,c.decoder,v),w=e.strictNullHandling?null:""):(y=e.decoder(_.slice(0,k),c.decoder,v),w=e.decoder(_.slice(k+1),c.decoder,v)),w&&e.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&e.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(r,y)?r[y]=n.combine(r[y],w):r[y]=w}return r}(t,r):t,m=r.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],r);m=n.merge(m,y,r)}return n.compact(m)}},184:function(t,e,r){"use strict";var n=r(182),o=r(183),c=r(179);t.exports={formats:c,parse:o,stringify:n}},185:function(t,e,r){var content=r(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("08a709fc",content,!0,{sourceMap:!1})},186:function(t,e,r){"use strict";var n=r(3),o=r(16),c=r(21),l=r(109),d=r(58),f=r(10),m=r(41).f,h=r(59).f,v=r(9).f,y=r(188).trim,w=n.Number,_=w,x=w.prototype,k="Number"==c(r(75)(x)),N="trim"in String.prototype,E=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=N?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(k?f(function(){x.valueOf.call(r)}):"Number"!=c(r))?l(new _(E(e)),r,w):E(e)};for(var S,A=r(8)?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),D=0;A.length>D;D++)o(_,S=A[D])&&!o(w,S)&&v(w,S,h(_,S));w.prototype=x,x.constructor=w,r(11)(n,"Number",w)}},187:function(t,e,r){"use strict";var n={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1,queue:[]}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.show?this.queue.push({text:text,mask:mask,timeout:e,position:r}):(this.queue.shift(),this.text=text,this.mask=mask,this.position=r,this.show=!0,setTimeout(function(){t.show=!1,t.queue.length>0&&t.showToast(t.queue[0].text,t.queue[0].mask,t.queue[0].timeout,t.queue[0].position)},e))},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},o=(r(190),r(19)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"toasttrs"}},[t.show?r("div",[t.mask?r("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),r("div",{staticClass:"toast-content",style:t.position},[t.loading?r("svg",{staticClass:"toast-content-loading",attrs:{viewBox:"25 25 50 50"}},[r("circle",{staticClass:"toast-content-loading",attrs:{cx:"50",cy:"50",r:"20"}})]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?r("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?r("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},188:function(t,e,r){var n=r(7),o=r(20),c=r(10),l=r(189),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,r){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=d?e(v):l[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},189:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},190:function(t,e,r){"use strict";var n=r(185);r.n(n).a},191:function(t,e,r){(t.exports=r(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:30%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;flex-direction:column}.toast-content-div{height:0.13333rem}.toast-content-loading{width:1.06667rem;transform-origin:center;animation:rotate 2s linear infinite;position:relative}.toast-content-loading circle{fill:none;stroke:#fff;stroke-width:4;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-25px}100%{stroke-dashoffset:-125px}}\n",""])},192:function(t,e,r){"use strict";r.r(e),r.d(e,"STEPS",function(){return o}),r.d(e,"API",function(){return c}),r.d(e,"SIGNUP_DATA_RULE",function(){return l}),r.d(e,"TOPICS",function(){return d}),r.d(e,"VIDEO_STATUS_TYPE",function(){return v}),r.d(e,"STROGE",function(){return y}),r.d(e,"LANDI_LEVEL",function(){return f}),r.d(e,"RANK_LIST",function(){return m}),r.d(e,"INDEX_STEPS",function(){return h});var n=r(193);r.d(e,"REGION_DATA",function(){return n.default});var o=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache",CHECK_LOGIN:"/Mobile/StudentActivity/login",GET_ZAN_CONFIG:"/Mobile/StudentActivityDetail/getZanConfig",MY_SID:"/Mobile/StudentActivity/mySid"},l={engNumName:{rule:/^[0-9a-zA-Z]+$/,message:"请输入正确的英文名"},chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},y={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},197:function(t,e){},198:function(t,e,r){var content=r(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("60fb927a",content,!0,{sourceMap:!1})},199:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("137c1396",content,!0,{sourceMap:!1})},200:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("3bf1dc2c",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";r.r(e);r(57);e.default={methods:{gotoPage:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.replace({name:t,query:e})},gotoPageWithHistory:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.push({name:t,query:e})}}}},205:function(t,e,r){"use strict";r(186);var n={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},o=(r(226),r(19)),c=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"stepbar"}},[r("div",{staticClass:"progress"},[r("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),r("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),r("div",{staticClass:"wrapper"},t._l(t.steps,function(e,n){return r("div",{key:e,staticClass:"wrapper-item"},[r("div",{staticClass:"circle-wrapper"},[r("div",{staticClass:"circle"},[r("div",{class:["circle-content",n/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(n+1))])])]),t._v(" "),r("div",{staticClass:"step"},[r("div",{class:["step-item",n/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(e))])])])}),0)])},[],!1,null,"0b8731a7",null).exports,l={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")},gotoLoginRegister:function(t){this.$emit("click",t)}}},d=(r(234),Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.show?n("div",{staticClass:"wrapper"},[n("div",{staticClass:"content"},[n("div",{staticClass:"content-close"},[n("img",{staticClass:"content-close-img",attrs:{src:r(228)},on:{click:t.close}})]),t._v(" "),0==t.poster?n("img",{staticClass:"content-poster",attrs:{src:r(229)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?n("img",{staticClass:"content-poster",attrs:{src:r(230)},on:{click:t.gotoLink}}):t._e(),t._v(" "),2==t.poster?n("div",{staticClass:"content-poster content-register"},[2==t.poster?n("img",{staticClass:"content-poster",attrs:{src:r(231)}}):t._e(),t._v(" "),n("div",{staticClass:"register-button",on:{click:function(e){return t.gotoLoginRegister("login")}}},[n("img",{staticClass:"register-button-img",attrs:{src:r(232)}})]),t._v(" "),n("div",{staticClass:"login-button",on:{click:function(e){return t.gotoLoginRegister("register")}}},[n("img",{staticClass:"login-button-img",attrs:{src:r(233)}})])]):t._e()])]):t._e()])},[],!1,null,"daa783c0",null).exports),f={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},m=(r(236),Object(o.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"submit"},[r("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),r("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);r.d(e,"b",function(){return c}),r.d(e,"a",function(){return d}),r.d(e,"c",function(){return m})},226:function(t,e,r){"use strict";var n=r(198);r.n(n).a},227:function(t,e,r){(t.exports=r(38)(!1)).push([t.i,".top-step-bar[data-v-0b8731a7]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-0b8731a7]{padding:0 0.4rem}.page-content-content[data-v-0b8731a7]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-0b8731a7]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-0b8731a7]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#stepbar[data-v-0b8731a7]{position:relative;width:100vw}.wrapper[data-v-0b8731a7]{display:flex;align-items:center;justify-content:space-around;padding:0 0.53333rem;width:100%;position:absolute;top:0;left:0}.circle[data-v-0b8731a7]{height:0.66667rem;width:0.66667rem;border-radius:50%;background:#fff;box-shadow:0 0 0.15rem -0.07rem #666666;display:flex;justify-content:center;align-items:center}.circle-wrapper[data-v-0b8731a7]{height:1.2rem;display:flex;align-items:center;justify-content:center}.circle-content[data-v-0b8731a7]{height:0.50667rem;width:0.50667rem;color:#fff;background:#E6E6E6;border-radius:50%;font-family:STYuanti-SC-Regular;font-size:0.29333rem;display:flex;justify-content:center;align-items:center}.circle .accent[data-v-0b8731a7]{background:#16C8D2}.step-item[data-v-0b8731a7]{color:#B2B2B2;font-size:0.29333rem;font-weight:400}.step .accent[data-v-0b8731a7]{color:#16C8D2}.progress[data-v-0b8731a7]{height:1.2rem;width:90%;position:absolute;top:0;left:5%;overflow:hidden}.progress-bar[data-v-0b8731a7]{position:absolute;top:50%;left:0;transform:translate(0, -50%);height:0.08rem;border-radius:0.05333rem}.progress-empty[data-v-0b8731a7]{width:100%;background:#E6E6E6;height:0.02667rem}.progress-fill[data-v-0b8731a7]{background:#16C8D2}\n",""])},228:function(t,e,r){t.exports=r.p+"img/7fef1c0.png"},229:function(t,e,r){t.exports=r.p+"img/9f5ce98.png"},230:function(t,e,r){t.exports=r.p+"img/31eeb1c.png"},231:function(t,e,r){t.exports=r.p+"img/6de9023.png"},232:function(t,e,r){t.exports=r.p+"img/344d247.png"},233:function(t,e,r){t.exports=r.p+"img/a2c329a.png"},234:function(t,e,r){"use strict";var n=r(199);r.n(n).a},235:function(t,e,r){(t.exports=r(38)(!1)).push([t.i,".wrapper[data-v-daa783c0]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.6);z-index:999}.content[data-v-daa783c0]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:inherit;height:inherit}.content-poster[data-v-daa783c0]{width:7.46667rem}.content-register[data-v-daa783c0]{position:relative}.content-register .register-button[data-v-daa783c0]{position:absolute;bottom:1.2rem;left:0.73333rem;width:6rem}.content-register .register-button-img[data-v-daa783c0]{width:6rem}.content-register .login-button[data-v-daa783c0]{position:absolute;bottom:0.66667rem;left:1.86667rem}.content-register .login-button-img[data-v-daa783c0]{width:3.73333rem}.content-close[data-v-daa783c0]{width:60%;text-align:right;margin-bottom:-0.10667rem}.content-close-img[data-v-daa783c0]{width:0.66667rem}\n",""])},236:function(t,e,r){"use strict";var n=r(200);r.n(n).a},237:function(t,e,r){(t.exports=r(38)(!1)).push([t.i,".top-step-bar{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content{padding:0 0.4rem}.page-content-content{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}.submit{text-align:center;width:100%;position:fixed;bottom:0.58667rem;left:0}.submit-text{margin:0.26667rem 0;color:#B2B2B2;font-size:0.32rem;padding:0 0.6rem}.submit-btn{display:inline-block;width:8.66667rem;line-height:1.33333rem;text-align:center;font-size:0.45333rem;color:#fff;background:#B2B2B2}.submit .accent{background:#16C8D2}\n",""])},290:function(t,e,r){var content=r(475);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("32e32042",content,!0,{sourceMap:!1})},474:function(t,e,r){"use strict";var n=r(290);r.n(n).a},475:function(t,e,r){(t.exports=r(38)(!1)).push([t.i,".top-step-bar[data-v-30cbec05]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-30cbec05]{padding:0 0.4rem}.page-content-content[data-v-30cbec05]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-30cbec05]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-30cbec05]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#signup[data-v-30cbec05]{background:#fff;width:100vw;height:100vh}.signupform-item[data-v-30cbec05]{border-top:1px solid #E6E6E6;padding:0.42667rem 0;white-space:nowrap}.signupform-item[data-v-30cbec05]:last-child{border-bottom:1px solid #E6E6E6}.signupform-item-label[data-v-30cbec05]{display:inline-block;color:#333333;font-size:0.37rem;width:2.04rem;margin-right:0.49333rem}.signupform-item .required[data-v-30cbec05]::after{content:'*';color:#F0552D}.signupform-item-input[data-v-30cbec05]{font-size:0.37333rem;outline:none;color:#333333;width:4rem}.signupform-item-input[data-v-30cbec05]::placeholder{color:#B2B2B2}.signupform-item-select[data-v-30cbec05]{font-size:0.37333rem;outline:none;color:#333333;width:5.33333rem;appearance:none;-moz-appearance:none;-webkit-appearance:none}.signupform-item-vcode[data-v-30cbec05]{display:inline-block;background:#F0552D;font-size:0.32rem;color:#fff;line-height:0.9rem;width:2.26667rem;text-align:center}.signupform-item-vcode-timeout[data-v-30cbec05]{background:#B2B2B2}.submitarea[data-v-30cbec05]{position:static;margin-top:1.6rem}\n",""])},575:function(t,e,r){"use strict";r.r(e);r(61),r(23),r(22),r(13),r(43),r(40);var n,o,c,l=r(5),d=r(205),f=r(192),m=r(180),h=r(187),v=r(201),y=(r(197),{name:"Signup",mixins:[v.default],head:function(){return{title:"报名信息"}},components:{"step-bar":d.b,toast:h.a,"poster-modal":d.a,"submit-area":d.c},data:function(){return{steps:f.STEPS,validateCodeTimeout:0,dataNotEmpty:!1,landiLevels:[],regionData:f.REGION_DATA,errorMessage:"",fromInputData:{},fromSelectData:{},signupData:{engNumName:"",landiLevel:""}}},created:(c=Object(l.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.getSignInfo();case 1:case"end":return t.stop()}},t,this)})),function(){return c.apply(this,arguments)}),methods:{provinceSelectChange:function(){this.signupData.city="0"},formBlur:function(){for(var t=0,e=Object.keys(this.signupData);t<e.length;t++){var r=e[t];if(""==this.signupData[r]||"0"==this.signupData[r])return void(this.dataNotEmpty=!1)}this.dataNotEmpty=!0},formSubmit:function(){if(this.dataNotEmpty){for(var t=0,e=Object.keys(this.signupData);t<e.length;t++){var r=e[t];if(!f.SIGNUP_DATA_RULE[r].rule.test(this.signupData[r]))return this.errorMessage=f.SIGNUP_DATA_RULE[r].message,void this.$refs.toast.showToast(this.errorMessage)}var n={},o=!0,c=!1,l=void 0;try{for(var d,m=this.landiLevels[Symbol.iterator]();!(o=(d=m.next()).done);o=!0){var h=d.value;h.id==this.signupData.landiLevel&&(n=h)}}catch(t){c=!0,l=t}finally{try{o||null==m.return||m.return()}finally{if(c)throw l}}localStorage.setItem(f.STROGE.FORM_DATA,JSON.stringify({landiLevel:n,en_name:this.signupData.engNumName})),this.gotoPage("presentation-signup-step2")}},getSignInfo:(o=Object(l.a)(regeneratorRuntime.mark(function t(){var e,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$route.query.activity_id,t.prev=1,t.next=4,m.a.get("".concat(f.API.GET_SIGN_INFO,"?activity_id=").concat(e));case 4:(r=t.sent).status?(this.fromInputData=r.data[0],this.fromSelectData=r.data[1]):console.log(r.info),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[1,8]])})),function(){return o.apply(this,arguments)})},mounted:(n=Object(l.a)(regeneratorRuntime.mark(function t(){var e,r,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=this.$route.query.activity_id,t.next=4,m.a.get("".concat(f.API.ACTIVITY_DETAIL,"?activity_id=").concat(e));case 4:if((r=t.sent).status){t.next=9;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(r.info),t.abrupt("return");case 9:return this.landiLevels=r.data.combinations,t.next=12,m.a.get("".concat(f.API.MY_WORK,"?activity_id=").concat(e));case 12:if((n=t.sent).status){t.next=19;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(n.info),t.abrupt("return");case 19:this.signupData.engNumName=n.data.en_name,n.data.id&&(this.signupData.landiLevel=n.data.combination_id);case 21:this.formBlur(),this.$refs.toast.hideLoadingToast();case 23:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)})}),w=(r(474),r(19)),component=Object(w.a)(y,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"signup"}},[r("div",{staticClass:"top-step-bar"},[r("step-bar",{attrs:{steps:t.steps,progress:10}})],1),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"signup-title"},[t._v("报名信息")]),t._v(" "),r("div",{staticClass:"page-content-content"},[r("div",{staticClass:"signupform"},[r("div",{staticClass:"signupform-item"},[r("span",{staticClass:"signupform-item-label required"},[t._v(t._s(t.fromInputData.label))]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.signupData.engNumName,expression:"signupData.engNumName"}],staticClass:"signupform-item-input",attrs:{placeholder:t.fromInputData.placeholder},domProps:{value:t.signupData.engNumName},on:{blur:t.formBlur,input:function(e){e.target.composing||t.$set(t.signupData,"engNumName",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"signupform-item"},[r("span",{staticClass:"signupform-item-label required"},[t._v(t._s(t.fromSelectData.label))]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.signupData.landiLevel,expression:"signupData.landiLevel"}],staticClass:"signupform-item-select",on:{blur:t.formBlur,change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.signupData,"landiLevel",e.target.multiple?r:r[0])},t.formBlur]}},[r("option",{attrs:{value:""}},[t._v(t._s(t.fromSelectData.placeholder))]),t._v(" "),t._l(t.fromSelectData.options,function(e){return r("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])})],2)])]),t._v(" "),r("submit-area",{staticClass:"submitarea",attrs:{hint:"请确认信息属实, 一旦提交后不可再修改",btnText:"提交报名信息",isClickable:t.dataNotEmpty},on:{submit:t.formSubmit}})],1)]),t._v(" "),r("toast",{ref:"toast"})],1)},[],!1,null,"30cbec05",null);e.default=component.exports}}]);