(window.webpackJsonp=window.webpackJsonp||[]).push([[43,33,35,36],{178:function(t,e,o){"use strict";var r=Object.prototype.hasOwnProperty,n=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],o=[],i=0;i<e.length;++i)for(var r=e[i],c=r.obj[r.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===o.indexOf(m)&&(e.push({obj:c,prop:f}),o.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),o=e.obj[e.prop];if(n(o)){for(var r=[],c=0;c<o.length;++c)void 0!==o[c]&&r.push(o[c]);e.obj[e.prop]=r}}}(e),t},decode:function(t,e,o){var r=t.replace(/\+/g," ");if("iso-8859-1"===o)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(t,e,o){if(0===t.length)return t;var r="string"==typeof t?t:String(t);if("iso-8859-1"===o)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var n="",i=0;i<r.length;++i){var l=r.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?n+=r.charAt(i):l<128?n+=c[l]:l<2048?n+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?n+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&r.charCodeAt(i)),n+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return n},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,o){if(!source)return e;if("object"!=typeof source){if(n(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(o&&(o.plainObjects||o.allowPrototypes)||!r.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return n(e)&&!n(source)&&(c=l(e,o)),n(e)&&n(source)?(source.forEach(function(n,i){if(r.call(e,i)){var c=e[i];c&&"object"==typeof c&&n&&"object"==typeof n?e[i]=t(c,n,o):e.push(n)}else e[i]=n}),e):Object.keys(source).reduce(function(e,n){var c=source[n];return r.call(e,n)?e[n]=t(e[n],c,o):e[n]=c,e},c)}}},179:function(t,e,o){"use strict";var r=String.prototype.replace,n=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,n,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,o){"use strict";o(13),o(57),o(73);var r=o(74),n=o.n(r),c=o(183),l=o.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var d=n.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=d},181:function(t,e,o){var content=o(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("08a709fc",content,!0,{sourceMap:!1})},182:function(t,e,o){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},183:function(t,e,o){"use strict";var r=o(184),n=o(185),c=o(179);t.exports={formats:c,parse:n,stringify:r}},184:function(t,e,o){"use strict";var r=o(178),n=o(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,o,n,c,l,filter,f,h,y,w,_,x){var k=object;if("function"==typeof filter?k=filter(e,k):k instanceof Date?k=y(k):"comma"===o&&d(k)&&(k=k.join(",")),null===k){if(n)return l&&!_?l(e,v.encoder,x):e;k=""}if("string"==typeof k||"number"==typeof k||"boolean"==typeof k||r.isBuffer(k))return l?[w(_?e:l(e,v.encoder,x))+"="+w(l(k,v.encoder,x))]:[w(e)+"="+w(String(k))];var S,E=[];if(void 0===k)return E;if(d(filter))S=filter;else{var C=Object.keys(k);S=f?C.sort(f):C}for(var i=0;i<S.length;++i){var A=S[i];c&&null===k[A]||(d(k)?m(E,t(k[A],"function"==typeof o?o(e,A):e,o,n,c,l,filter,f,h,y,w,_,x)):m(E,t(k[A],e+(h?"."+A:"["+A+"]"),o,n,c,l,filter,f,h,y,w,_,x)))}return E};t.exports=function(object,t){var e,o=object,r=function(t){if(!t)return v;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var o=n.default;if(void 0!==t.format){if(!c.call(n.formatters,t.format))throw new TypeError("Unknown format option provided.");o=t.format}var r=n.formatters[o],filter=v.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(t);"function"==typeof r.filter?o=(0,r.filter)("",o):d(r.filter)&&(e=r.filter);var f,h=[];if("object"!=typeof o||null===o)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var w=l[f];e||(e=Object.keys(o)),r.sort&&e.sort(r.sort);for(var i=0;i<e.length;++i){var _=e[i];r.skipNulls&&null===o[_]||m(h,y(o[_],_,w,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var x=h.join(r.delimiter),k=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?k+="utf8=%26%2310003%3B&":k+="utf8=%E2%9C%93&"),x.length>0?k+x:""}},185:function(t,e,o){"use strict";var r=o(178),n=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,o){if(t){var r=o.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(r),d=l?r.slice(0,l.index):r,f=[];if(d){if(!o.plainObjects&&n.call(Object.prototype,d)&&!o.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(r))&&i<o.depth;){if(i+=1,!o.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!o.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),function(t,e,o){for(var r=e,i=t.length-1;i>=0;--i){var n,c=t[i];if("[]"===c&&o.parseArrays)n=[].concat(r);else{n=o.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);o.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&o.parseArrays&&d<=o.arrayLimit?(n=[])[d]=r:n[l]=r:n={0:r}}r=n}return r}(f,e,o)}};t.exports=function(t,e){var o=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return o.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,o={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),h=-1,v=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,w,_=m[i],x=_.indexOf("]="),k=-1===x?_.indexOf("="):x+1;-1===k?(y=e.decoder(_,c.decoder,v),w=e.strictNullHandling?null:""):(y=e.decoder(_.slice(0,k),c.decoder,v),w=e.decoder(_.slice(k+1),c.decoder,v)),w&&e.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&e.comma&&w.indexOf(",")>-1&&(w=w.split(",")),n.call(o,y)?o[y]=r.combine(o[y],w):o[y]=w}return o}(t,o):t,m=o.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],o);m=r.merge(m,y,o)}return r.compact(m)}},186:function(t,e,o){"use strict";var r=o(3),n=o(16),c=o(21),l=o(109),d=o(58),f=o(10),m=o(41).f,h=o(59).f,v=o(9).f,y=o(194).trim,w=r.Number,_=w,x=w.prototype,k="Number"==c(o(75)(x)),S="trim"in String.prototype,E=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var o,r,n,c=(e=S?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof w&&(k?f(function(){x.valueOf.call(o)}):"Number"!=c(o))?l(new _(E(e)),o,w):E(e)};for(var C,A=o(8)?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;A.length>j;j++)n(_,C=A[j])&&!n(w,C)&&v(w,C,h(_,C));w.prototype=x,x.constructor=w,o(11)(r,"Number",w)}},187:function(t,e,o){"use strict";var r={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1,queue:[]}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.show?this.queue.push({text:text,mask:mask,timeout:e,position:o}):(this.queue.shift(),this.text=text,this.mask=mask,this.position=o,this.show=!0,setTimeout(function(){t.show=!1,t.queue.length>0&&t.showToast(t.queue[0].text,t.queue[0].mask,t.queue[0].timeout,t.queue[0].position)},e))},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},n=(o(188),o(19)),component=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"toasttrs"}},[t.show?o("div",[t.mask?o("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),o("div",{staticClass:"toast-content",style:t.position},[t.loading?o("svg",{staticClass:"toast-content-loading",attrs:{viewBox:"25 25 50 50"}},[o("circle",{staticClass:"toast-content-loading",attrs:{cx:"50",cy:"50",r:"20"}})]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?o("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?o("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},188:function(t,e,o){"use strict";var r=o(181);o.n(r).a},189:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".toasttrs-enter-active,.toasttrs-leave-active{transition:opacity .5s}.toasttrs-enter,.toasttrs-leave-to{opacity:0}.toast-mask{position:fixed;top:0;left:0;width:100vw;height:100vh}.toast-content{position:fixed;top:30%;left:50%;max-width:5.33333rem;transform:translate(-50%, -50%);padding:0.26667rem 0.4rem;color:#fff;font-size:0.37333rem;border-radius:0.13333rem;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;flex-direction:column}.toast-content-div{height:0.13333rem}.toast-content-loading{width:1.06667rem;transform-origin:center;animation:rotate 2s linear infinite;position:relative}.toast-content-loading circle{fill:none;stroke:#fff;stroke-width:4;stroke-dasharray:1, 200;stroke-dashoffset:0;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:90, 200;stroke-dashoffset:-25px}100%{stroke-dashoffset:-125px}}\n",""])},190:function(t,e,o){var content=o(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("60fb927a",content,!0,{sourceMap:!1})},191:function(t,e,o){var content=o(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("12a4d364",content,!0,{sourceMap:!1})},192:function(t,e,o){var content=o(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("3bf1dc2c",content,!0,{sourceMap:!1})},194:function(t,e,o){var r=o(7),n=o(20),c=o(10),l=o(195),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,o){var n={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=n[t]=d?e(v):l[t];o&&(n[o]=f),r(r.P+r.F*d,"String",n)},v=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},195:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},196:function(t,e,o){"use strict";o.r(e),o.d(e,"STEPS",function(){return n}),o.d(e,"API",function(){return c}),o.d(e,"SIGNUP_DATA_RULE",function(){return l}),o.d(e,"TOPICS",function(){return d}),o.d(e,"VIDEO_STATUS_TYPE",function(){return v}),o.d(e,"STROGE",function(){return y}),o.d(e,"LANDI_LEVEL",function(){return f}),o.d(e,"RANK_LIST",function(){return m}),o.d(e,"INDEX_STEPS",function(){return h});var r=o(193);o.d(e,"REGION_DATA",function(){return r.default});var n=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WX_SHARE1:"/Mobile/StudentActivityDetail/share1",WX_INDEX_SHARE:"/Mobile/StudentActivityDetail/indexShare",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid",GET_RANK_CONFIG:"/Mobile/StudentActivityDetail/getRankConfig",NEW_RANK:"/Mobile/StudentActivityDetail/rank",FROM_TJM:"/Mobile/StudentActivityDetail/changeFromAndTjm",GET_SIGN_INFO:"/Mobile/StudentActivityDetail/getSignInfo",GET_GOOD_WORK:"/Mobile/StudentActivityDetail/getGoodWork",CLEAR_CACHE:"/Mobile/StudentActivityDetail/clearCache",CHECK_LOGIN:"/Mobile/StudentActivity/login",GET_ZAN_CONFIG:"/Mobile/StudentActivityDetail/getZanConfig",MY_SID:"/Mobile/StudentActivity/mySid"},l={engNumName:{rule:/^[0-9a-zA-Z]+$/,message:"请输入正确的英文名"},chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},y={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},197:function(t,e,o){"use strict";o.d(e,"a",function(){return r});o(108);var r=function(t){var video=t,e=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?void 0!==video.play()&&(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var t,e=(t=video).webkitEnterFullScreen?"webkitEnterFullScreen":!!t.webkitRequestFullScreen&&"webkitRequestFullScreen";video[e]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play())}},198:function(t,e,o){"use strict";o.r(e);o(57);e.default={methods:{gotoPage:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.replace({name:t,query:e})},gotoPageWithHistory:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.push({name:t,query:e})}}}},200:function(t,e,o){"use strict";o(186);var r={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},n=(o(201),o(19)),c=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"stepbar"}},[o("div",{staticClass:"progress"},[o("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),o("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),o("div",{staticClass:"wrapper"},t._l(t.steps,function(e,r){return o("div",{key:e,staticClass:"wrapper-item"},[o("div",{staticClass:"circle-wrapper"},[o("div",{staticClass:"circle"},[o("div",{class:["circle-content",r/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(r+1))])])]),t._v(" "),o("div",{staticClass:"step"},[o("div",{class:["step-item",r/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(e))])])])}),0)])},[],!1,null,"0b8731a7",null).exports,l={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")},gotoLoginRegister:function(t){this.$emit("click",t)}}},d=(o(209),Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"wrapper"},[r("div",{staticClass:"content"},[r("div",{staticClass:"content-close"},[r("img",{staticClass:"content-close-img",attrs:{src:o(203)},on:{click:t.close}})]),t._v(" "),0==t.poster?r("img",{staticClass:"content-poster",attrs:{src:o(204)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?r("img",{staticClass:"content-poster",attrs:{src:o(205)},on:{click:t.gotoLink}}):t._e(),t._v(" "),2==t.poster?r("div",{staticClass:"content-poster content-register"},[2==t.poster?r("img",{staticClass:"content-poster",attrs:{src:o(206)}}):t._e(),t._v(" "),r("div",{staticClass:"register-button",on:{click:function(e){return t.gotoLoginRegister("login")}}},[r("img",{staticClass:"register-button-img",attrs:{src:o(207)}})]),t._v(" "),r("div",{staticClass:"login-button",on:{click:function(e){return t.gotoLoginRegister("register")}}},[r("img",{staticClass:"login-button-img",attrs:{src:o(208)}})])]):t._e()])]):t._e()])},[],!1,null,"b2fea874",null).exports),f={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},m=(o(211),Object(n.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"submit"},[o("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),o("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);o.d(e,"b",function(){return c}),o.d(e,"a",function(){return d}),o.d(e,"c",function(){return m})},201:function(t,e,o){"use strict";var r=o(190);o.n(r).a},202:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".top-step-bar[data-v-0b8731a7]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-0b8731a7]{padding:0 0.4rem}.page-content-content[data-v-0b8731a7]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-0b8731a7]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-0b8731a7]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#stepbar[data-v-0b8731a7]{position:relative;width:100vw}.wrapper[data-v-0b8731a7]{display:flex;align-items:center;justify-content:space-around;padding:0 0.53333rem;width:100%;position:absolute;top:0;left:0}.circle[data-v-0b8731a7]{height:0.66667rem;width:0.66667rem;border-radius:50%;background:#fff;box-shadow:0 0 0.15rem -0.07rem #666666;display:flex;justify-content:center;align-items:center}.circle-wrapper[data-v-0b8731a7]{height:1.2rem;display:flex;align-items:center;justify-content:center}.circle-content[data-v-0b8731a7]{height:0.50667rem;width:0.50667rem;color:#fff;background:#E6E6E6;border-radius:50%;font-family:STYuanti-SC-Regular;font-size:0.29333rem;display:flex;justify-content:center;align-items:center}.circle .accent[data-v-0b8731a7]{background:#16C8D2}.step-item[data-v-0b8731a7]{color:#B2B2B2;font-size:0.29333rem;font-weight:400}.step .accent[data-v-0b8731a7]{color:#16C8D2}.progress[data-v-0b8731a7]{height:1.2rem;width:90%;position:absolute;top:0;left:5%;overflow:hidden}.progress-bar[data-v-0b8731a7]{position:absolute;top:50%;left:0;transform:translate(0, -50%);height:0.08rem;border-radius:0.05333rem}.progress-empty[data-v-0b8731a7]{width:100%;background:#E6E6E6;height:0.02667rem}.progress-fill[data-v-0b8731a7]{background:#16C8D2}\n",""])},203:function(t,e,o){t.exports=o.p+"img/7fef1c0.png"},204:function(t,e,o){t.exports=o.p+"img/d6f907b.png"},205:function(t,e,o){t.exports=o.p+"img/31eeb1c.png"},206:function(t,e,o){t.exports=o.p+"img/6de9023.png"},207:function(t,e,o){t.exports=o.p+"img/344d247.png"},208:function(t,e,o){t.exports=o.p+"img/a2c329a.png"},209:function(t,e,o){"use strict";var r=o(191);o.n(r).a},210:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".wrapper[data-v-b2fea874]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.6);z-index:999}.content[data-v-b2fea874]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:inherit;height:inherit}.content-poster[data-v-b2fea874]{width:7.46667rem}.content-register[data-v-b2fea874]{position:relative}.content-register .register-button[data-v-b2fea874]{position:absolute;bottom:1.2rem;left:0.73333rem;width:6rem}.content-register .register-button-img[data-v-b2fea874]{width:6rem}.content-register .login-button[data-v-b2fea874]{position:absolute;bottom:0.66667rem;left:1.86667rem}.content-register .login-button-img[data-v-b2fea874]{width:3.73333rem}.content-close[data-v-b2fea874]{width:60%;text-align:right;margin-bottom:-0.10667rem}.content-close-img[data-v-b2fea874]{width:0.66667rem}\n",""])},211:function(t,e,o){"use strict";var r=o(192);o.n(r).a},212:function(t,e,o){(t.exports=o(38)(!1)).push([t.i,".top-step-bar{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content{padding:0 0.4rem}.page-content-content{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}.submit{text-align:center;width:100%;position:fixed;bottom:0.58667rem;left:0}.submit-text{margin:0.26667rem 0;color:#B2B2B2;font-size:0.32rem;padding:0 0.6rem}.submit-btn{display:inline-block;width:8.66667rem;line-height:1.33333rem;text-align:center;font-size:0.45333rem;color:#fff;background:#B2B2B2}.submit .accent{background:#16C8D2}\n",""])},214:function(t,e,o){t.exports=o.p+"img/6446c2c.png"},216:function(t,e){},308:function(t,e,o){var content=o(523);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("3bd0da0c",content,!0,{sourceMap:!1})},521:function(t,e,o){t.exports=o.p+"img/e7bcd12.png"},522:function(t,e,o){"use strict";var r=o(308);o.n(r).a},523:function(t,e,o){e=t.exports=o(38)(!1);var r=o(182)(o(214));e.push([t.i,".top-step-bar[data-v-288e6a58]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-288e6a58]{padding:0 0.4rem}.page-content-content[data-v-288e6a58]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-288e6a58]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-288e6a58]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#step2[data-v-288e6a58]{width:100vw;height:100vh;background:#fff}.level[data-v-288e6a58]{display:flex;align-items:center}.level-hint[data-v-288e6a58]{margin-left:0.4rem;font-size:0.32rem;color:#B2B2B2;margin-bottom:0.26667rem}.level-hint[data-v-288e6a58]::before{content:'*';color:#F0552D}.topic[data-v-288e6a58]{display:flex;white-space:nowrap;overflow-x:scroll}.topic[data-v-288e6a58]::-webkit-scrollbar{display:none}.topic-item[data-v-288e6a58]{display:inline-block;margin-right:0.5rem;box-sizing:content-box;position:relative}.topic-item-video[data-v-288e6a58]{width:6.4rem;height:4.8rem;overflow:hidden;position:relative}.topic-item-video-pic[data-v-288e6a58]{width:inherit;height:inherit}.topic-item-video-play[data-v-288e6a58]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:1.01333rem;height:1.01333rem;background:url("+r+") 50% 50%/contain no-repeat}.topic-item-videoplay[data-v-288e6a58]{width:6.4rem;height:4.8rem;overflow:hidden;position:absolute;top:0;left:0}.topic-item-eng[data-v-288e6a58]{font-size:0.34667rem;color:#333333;letter-spacing:0;margin-top:0.26667rem}.topic-item-chn[data-v-288e6a58]{font-size:0.32rem;color:#B2B2B2;letter-spacing:0;line-height:0.50667rem;margin-top:0.13333rem}.topic-item-text[data-v-288e6a58]{white-space:normal;width:6.4rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.topic-item-selector[data-v-288e6a58]{width:0.72rem;height:0.72rem;border-radius:50%;background:#fff;box-shadow:0 0 0.2rem -0.07rem #666666;display:flex;justify-content:center;align-items:center}.topic-item-selector-wrapper[data-v-288e6a58]{position:absolute;top:0;right:0;padding:0.25333rem}.topic-item-selector-img[data-v-288e6a58]{width:0.56rem;height:0.56rem}\n",""])},584:function(t,e,o){"use strict";o.r(e);o(61),o(23),o(22),o(42),o(40);var r,n=o(5),c=o(200),l=o(196),d=o(187),f=o(180),m=o(198),h=o(197),v=(o(216),{name:"Signup",mixins:[m.default],head:function(){return{title:"选择题目"}},components:{"step-bar":c.b,"submit-area":c.c,toast:d.a},data:function(){return{steps:l.STEPS,landiLevel:"",topics:[],topicSelectID:-1,lastTopicSelectID:null,formData:null}},computed:{topicSelected:function(){return this.topicSelectID>=0}},methods:{submit:function(){this.topicSelected&&(this.lastTopicSelectID!=this.topicSelectID&&(delete this.formData.videoSrc,delete this.formData.videoKey),this.formData.topicID=this.topicSelectID,localStorage.setItem(l.STROGE.FORM_DATA,JSON.stringify(this.formData)),this.gotoPage("presentation-signup-step3"))},selectTopic:function(t){this.topicSelectID=t},srcType:function(t){return t.videos.length>0?"video":t.audios.length>0?"audio":"pic"},getSrc:function(t){return t.videos.length>0?t.videos[0].url:t.audios.length>0?t.audios[0].url:void 0},playFn:function(t){var e=document.getElementById(t);Object(h.a)(e)}},mounted:(r=Object(n.a)(regeneratorRuntime.mark(function t(){var e,o,r,n,c,d,m,h,v;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.$refs.toast.showLoadingToast(),e=JSON.parse(localStorage.getItem(l.STROGE.FORM_DATA)),o=this.$route.query.activity_id,!e.landiLevel.name){t.next=8;break}this.landiLevel=e.landiLevel,this.topics=e.landiLevel.topics,t.next=44;break;case 8:return t.next=10,f.a.get("".concat(l.API.ACTIVITY_DETAIL,"?activity_id=").concat(o));case 10:if((r=t.sent).status){t.next=15;break}this.$refs.toast.showToast(r.info),t.next=44;break;case 15:n=!0,c=!1,d=void 0,t.prev=18,m=r.data.combinations[Symbol.iterator]();case 20:if(n=(h=m.next()).done){t.next=28;break}if((v=h.value).id!=e.landiLevel.id){t.next=25;break}return e.landiLevel=v,t.abrupt("break",28);case 25:n=!0,t.next=20;break;case 28:t.next=34;break;case 30:t.prev=30,t.t0=t.catch(18),c=!0,d=t.t0;case 34:t.prev=34,t.prev=35,n||null==m.return||m.return();case 37:if(t.prev=37,!c){t.next=40;break}throw d;case 40:return t.finish(37);case 41:return t.finish(34);case 42:this.landiLevel=e.landiLevel,this.topics=e.landiLevel.topics;case 44:e.topicID&&(this.topicSelectID=this.lastTopicSelectID=e.topicID),this.formData=e,this.$refs.toast.hideLoadingToast();case 47:case"end":return t.stop()}},t,this,[[18,30,34,42],[35,,37,41]])})),function(){return r.apply(this,arguments)})}),y=(o(522),o(19)),component=Object(y.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"step2"}},[r("div",{staticClass:"top-step-bar"},[r("step-bar",{attrs:{steps:t.steps,progress:30}})],1),t._v(" "),r("div",{staticClass:"page-content"},[r("div",{staticClass:"signup-title"},[t._v("选择题目")]),t._v(" "),r("div",{staticClass:"level"},[r("div",{staticClass:"signup-title2"},[t._v("当前级别: "+t._s(t.landiLevel.name))]),t._v(" "),r("div",{staticClass:"level-hint"},[t._v("左右滑屏可以切换样板和主题")])]),t._v(" "),r("div",{staticClass:"topic"},t._l(t.topics,function(e,n){return r("div",{key:e.id,staticClass:"topic-item"},["video"==t.srcType(e)||"audio"==t.srcType(e)?r("video",{key:n,staticClass:"topic-item-videoplay",staticStyle:{display:"none"},attrs:{id:"video"+n,controls:"",preload:"auto",src:t.getSrc(e)}}):t._e(),t._v(" "),r("div",{staticClass:"topic-item-video",on:{click:function(e){return t.playFn("video"+n)}}},[e.videos.length>0||e.audios.length>0?r("div",{staticClass:"topic-item-video-play"}):t._e(),t._v(" "),e.videos.length>0?r("img",{staticClass:"topic-item-video-pic",attrs:{src:e.videos[0].pic_url}}):t._e(),t._v(" "),e.audios.length>0&&0==e.videos.length?r("img",{staticClass:"topic-item-video-pic",attrs:{src:e.audios[0].pic_url}}):t._e(),t._v(" "),e.pics.length>0&&0==e.videos.length&&0==e.audios.length?r("img",{staticClass:"topic-item-video-pic",attrs:{src:e.pics[0]}}):t._e()]),t._v(" "),r("div",{staticClass:"topic-item-selector-wrapper",on:{click:function(o){return t.selectTopic(e.id)}}},[r("div",{staticClass:"topic-item-selector"},[t.topicSelectID==e.id?r("img",{staticClass:"topic-item-selector-img",attrs:{src:o(521)}}):t._e()])]),t._v(" "),r("div",{staticClass:"topic-item-eng topic-item-text"},[t._v(t._s(e.en_topic_name))]),t._v(" "),r("div",{staticClass:"topic-item-chn topic-item-text"},[t._v(t._s(e.cn_topic_name))])])}),0),t._v(" "),r("submit-area",{attrs:{hint:"请勾选主题右上角选择当前参赛题目",btnText:"上传我的视频",isClickable:t.topicSelected},on:{submit:t.submit}})],1),t._v(" "),r("toast",{ref:"toast"})],1)},[],!1,null,"288e6a58",null);e.default=component.exports}}]);