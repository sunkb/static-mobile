(window.webpackJsonp=window.webpackJsonp||[]).push([[29,19,21],{178:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],i=0;i<e.length;++i)for(var r=e[i],c=r.obj[r.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===n.indexOf(m)&&(e.push({obj:c,prop:f}),n.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(o(n)){for(var r=[],c=0;c<n.length;++c)void 0!==n[c]&&r.push(n[c]);e.obj[e.prop]=r}}}(e),t},decode:function(t,e,n){var r=t.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(t,e,n){if(0===t.length)return t;var r="string"==typeof t?t:String(t);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",i=0;i<r.length;++i){var l=r.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=r.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&r.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,n){if(!source)return e;if("object"!=typeof source){if(o(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(n&&(n.plainObjects||n.allowPrototypes)||!r.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return o(e)&&!o(source)&&(c=l(e,n)),o(e)&&o(source)?(source.forEach(function(o,i){if(r.call(e,i)){var c=e[i];c&&"object"==typeof c&&o&&"object"==typeof o?e[i]=t(c,o,n):e.push(o)}else e[i]=o}),e):Object.keys(source).reduce(function(e,o){var c=source[o];return r.call(e,o)?e[o]=t(e[o],c,n):e[o]=c,e},c)}}},179:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,n){"use strict";n(13);var r=n(73),o=n.n(r),c=n(182),l=n.n(c);console.log("process.env.ENV_API","https://release6.landi.com/");var d=o.a.create({baseURL:"https://release6.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){return console.log(t,t.response),Promise.reject(t)}),e.a=d},181:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var r=n(183),o=n(184),c=n(179);t.exports={formats:c,parse:o,stringify:r}},183:function(t,e,n){"use strict";var r=n(178),o=n(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,n,o,c,l,filter,f,h,y,w,x,A){var S=object;if("function"==typeof filter?S=filter(e,S):S instanceof Date?S=y(S):"comma"===n&&d(S)&&(S=S.join(",")),null===S){if(o)return l&&!x?l(e,v.encoder,A):e;S=""}if("string"==typeof S||"number"==typeof S||"boolean"==typeof S||r.isBuffer(S))return l?[w(x?e:l(e,v.encoder,A))+"="+w(l(S,v.encoder,A))]:[w(e)+"="+w(String(S))];var _,k=[];if(void 0===S)return k;if(d(filter))_=filter;else{var j=Object.keys(S);_=f?j.sort(f):j}for(var i=0;i<_.length;++i){var E=_[i];c&&null===S[E]||(d(S)?m(k,t(S[E],"function"==typeof n?n(e,E):e,n,o,c,l,filter,f,h,y,w,x,A)):m(k,t(S[E],e+(h?"."+E:"["+E+"]"),n,o,c,l,filter,f,h,y,w,x,A)))}return k};t.exports=function(object,t){var e,n=object,r=function(t){if(!t)return v;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==t.format){if(!c.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var r=o.formatters[n],filter=v.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(t);"function"==typeof r.filter?n=(0,r.filter)("",n):d(r.filter)&&(e=r.filter);var f,h=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var w=l[f];e||(e=Object.keys(n)),r.sort&&e.sort(r.sort);for(var i=0;i<e.length;++i){var x=e[i];r.skipNulls&&null===n[x]||m(h,y(n[x],x,w,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var A=h.join(r.delimiter),S=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?S+="utf8=%26%2310003%3B&":S+="utf8=%E2%9C%93&"),A.length>0?S+A:""}},184:function(t,e,n){"use strict";var r=n(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(r),d=l?r.slice(0,l.index):r,f=[];if(d){if(!n.plainObjects&&o.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(r))&&i<n.depth;){if(i+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),function(t,e,n){for(var r=e,i=t.length-1;i>=0;--i){var o,c=t[i];if("[]"===c&&n.parseArrays)o=[].concat(r);else{o=n.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);n.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(o=[])[d]=r:o[l]=r:o={0:r}}r=o}return r}(f,e,n)}};t.exports=function(t,e){var n=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,n={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),h=-1,v=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,w,x=m[i],A=x.indexOf("]="),S=-1===A?x.indexOf("="):A+1;-1===S?(y=e.decoder(x,c.decoder,v),w=e.strictNullHandling?null:""):(y=e.decoder(x.slice(0,S),c.decoder,v),w=e.decoder(x.slice(S+1),c.decoder,v)),w&&e.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&e.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(n,y)?n[y]=r.combine(n[y],w):n[y]=w}return n}(t,n):t,m=n.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],n);m=r.merge(m,y,n)}return r.compact(m)}},186:function(t,e,n){"use strict";var r=n(3),o=n(16),c=n(21),l=n(110),d=n(57),f=n(10),m=n(41).f,h=n(58).f,v=n(9).f,y=n(192).trim,w=r.Number,x=w,A=w.prototype,S="Number"==c(n(74)(A)),_="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=_?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(S?f(function(){A.valueOf.call(n)}):"Number"!=c(n))?l(new x(k(e)),n,w):k(e)};for(var j,E=n(8)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;E.length>O;O++)o(x,j=E[O])&&!o(w,j)&&v(w,j,h(x,j));w.prototype=A,A.constructor=w,n(11)(r,"Number",w)}},187:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1febb9da",content,!0,{sourceMap:!1})},188:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("a880ad0c",content,!0,{sourceMap:!1})},189:function(t,e,n){var content=n(208);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1291ba86",content,!0,{sourceMap:!1})},191:function(t,e,n){"use strict";n.r(e),n.d(e,"STEPS",function(){return o}),n.d(e,"API",function(){return c}),n.d(e,"SIGNUP_DATA_RULE",function(){return l}),n.d(e,"TOPICS",function(){return d}),n.d(e,"VIDEO_STATUS_TYPE",function(){return v}),n.d(e,"STROGE",function(){return y}),n.d(e,"LANDI_LEVEL",function(){return f}),n.d(e,"RANK_LIST",function(){return m}),n.d(e,"INDEX_STEPS",function(){return h});var r=n(190);n.d(e,"REGION_DATA",function(){return r.default});var o=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivity/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid"},l={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},y={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},192:function(t,e,n){var r=n(7),o=n(20),c=n(10),l=n(193),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=d?e(v):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},193:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},194:function(t,e,n){"use strict";n.r(e);var r={methods:{gotoPage:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.push({name:t,query:e})},playFn:function(t){var e=document.getElementById(t);videoPlayerEvent(e)}}};e.default=r},195:function(t,e,n){"use strict";var r={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=n,this.show=!0,setTimeout(function(){t.show=!1},e)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},o=(n(196),n(19)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toasttrs"}},[t.show?n("div",[t.mask?n("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),n("div",{staticClass:"toast-content",style:t.position},[t.loading?n("div",{staticClass:"toast-content-loading"},[n("div",{staticClass:"toast-content-loading-content"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?n("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?n("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},196:function(t,e,n){"use strict";var r=n(181);n.n(r).a},197:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".toasttrs-enter-active,\n.toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter,\n.toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.333333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.266667rem 0.4rem;\n  color: #fff;\n  font-size: 0.373333rem;\n  border-radius: 0.133333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n  height: 0.133333rem;\n}\n.toast-content-loading {\n  display: flex;\n  justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.066667rem;\n  height: 1.066667rem;\n}\n.toast-content-loading-content div {\n  box-sizing: border-box;\n  position: absolute;\n  width: 1.066667rem;\n  height: 1.066667rem;\n  border: 1vw solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}",""])},199:function(t,e,n){"use strict";n(186);var r={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},o=(n(200),n(19)),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"stepbar"}},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),n("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),n("div",{staticClass:"wrapper"},t._l(t.steps,function(e,r){return n("div",{key:e,staticClass:"wrapper-item"},[n("div",{staticClass:"circle-wrapper"},[n("div",{staticClass:"circle"},[n("div",{class:["circle-content",r/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(r+1))])])]),t._v(" "),n("div",{staticClass:"step"},[n("div",{class:["step-item",r/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(e))])])])}),0)])},[],!1,null,"20e1ccc8",null).exports,l={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")}}},d=(n(205),Object(o.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.show?r("div",{staticClass:"wrapper"},[r("div",{staticClass:"content"},[r("div",{staticClass:"content-close"},[r("img",{staticClass:"content-close-img",attrs:{src:n(202)},on:{click:t.close}})]),t._v(" "),0==t.poster?r("img",{staticClass:"content-poster",attrs:{src:n(203)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?r("img",{staticClass:"content-poster",attrs:{src:n(204)},on:{click:t.gotoLink}}):t._e()])]):t._e()])},[],!1,null,"c6fd7e3e",null).exports),f={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},m=(n(207),Object(o.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"submit"},[n("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),n("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);n.d(e,"b",function(){return c}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return m})},200:function(t,e,n){"use strict";var r=n(187);n.n(r).a},201:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-20e1ccc8] {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-20e1ccc8] {\n  padding: 0 0.4rem;\n}\nh1[data-v-20e1ccc8] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-20e1ccc8] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-20e1ccc8] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-20e1ccc8] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#stepbar[data-v-20e1ccc8] {\n  position: relative;\n}\n.wrapper[data-v-20e1ccc8] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.circle[data-v-20e1ccc8] {\n  height: 0.693333rem;\n  width: 0.693333rem;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 0.15rem -0.07rem #666666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle-wrapper[data-v-20e1ccc8] {\n  height: 1.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.circle-content[data-v-20e1ccc8] {\n  height: 0.533333rem;\n  width: 0.533333rem;\n  color: #fff;\n  background: #E6E6E6;\n  border-radius: 50%;\n  font-family: STYuanti-SC-Regular;\n  font-size: 0.293333rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle .accent[data-v-20e1ccc8] {\n  background: #16C8D2;\n}\n.step-item[data-v-20e1ccc8] {\n  color: #B2B2B2;\n  font-size: 0.293333rem;\n  font-weight: 400;\n}\n.step .accent[data-v-20e1ccc8] {\n  color: #16C8D2;\n}\n.progress[data-v-20e1ccc8] {\n  height: 1.2rem;\n  width: 90%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  overflow: hidden;\n}\n.progress-bar[data-v-20e1ccc8] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(0, -50%);\n  height: 0.08rem;\n  border-radius: 0.04rem;\n}\n.progress-empty[data-v-20e1ccc8] {\n  width: 100%;\n  box-shadow: inset 0 0.02rem 0.03rem -0.025rem #666666;\n}\n.progress-fill[data-v-20e1ccc8] {\n  background: #16C8D2;\n}",""])},202:function(t,e,n){t.exports=n.p+"img/7fef1c0.png"},203:function(t,e,n){t.exports=n.p+"img/a8d20f2.png"},204:function(t,e,n){t.exports=n.p+"img/31eeb1c.png"},205:function(t,e,n){"use strict";var r=n(188);n.n(r).a},206:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".wrapper[data-v-c6fd7e3e] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 999;\n}\n.content[data-v-c6fd7e3e] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n}\n.content-poster[data-v-c6fd7e3e] {\n  width: 7.466667rem;\n}\n.content-close[data-v-c6fd7e3e] {\n  width: 60%;\n  text-align: right;\n  margin-bottom: -0.106667rem;\n}\n.content-close-img[data-v-c6fd7e3e] {\n  width: 0.666667rem;\n}",""])},207:function(t,e,n){"use strict";var r=n(189);n.n(r).a},208:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content {\n  padding: 0 0.4rem;\n}\nh1 {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2 {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3 {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n.submit {\n  text-align: center;\n  width: 100%;\n  position: fixed;\n  bottom: 0.5rem;\n  left: 0;\n}\n.submit-text {\n  margin: 0.3rem 0;\n  color: #B2B2B2;\n  font-size: 0.32rem;\n  padding: 0 0.6rem;\n}\n.submit-btn {\n  display: inline-block;\n  width: 8.666667rem;\n  line-height: 1.333333rem;\n  text-align: center;\n  font-size: 0.453333rem;\n  color: #fff;\n  background: #B2B2B2;\n}\n.submit .accent {\n  background: #16C8D2;\n}",""])},257:function(t,e,n){var content=n(393);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("076d345d",content,!0,{sourceMap:!1})},391:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqpJREFUWAntl01ME0EUx//b0g/a8E1pUUtLbGuUqBev3ozeuHlREyKJ6MGzB2MwAQ7Gqxz8SA8kNiZejR7gphcuXgyaiJCUgraAgiilaGnrm9k22W6XZrpLG2L2Hdp9szNvfvvfef9kpZ7ZDwUc4rAcYjaOZgIafUOmgqaCRhUwut48g6aCRhVQrx9wOfHuTBijfp/6lmbe0DPoszUhdiKISLMTlz3tmkDqwYYBuiwSnhNcr93GGV6sbapZNPOGAEq09ZNQH067mznE9OYvPFhZ1QRSDzYEcDzQi4sdrXzvuXQGNxeWkVeT7JMLATolCQGHfZ8S1YeHvV244evmk5J/s7j6OY6dvCgeIAT48mQ/Zs9GcMXTUZ1GdfdCewsmSD0W6VyOw6Wye6pZ1VMhQC91n4VUfBg8ivOt7uoVi3dPkZ08DflhpXX5QoG/1o87u0JrlZOEAMcSKRRoExt1YjQcQNjpUNaouGYPFIsE4bZa+b17S0nM/PxdMU9kQAjwNXXdxLLcdW1NVu5l3fSvFcxOmNcdcch2Ek19R3T1h9ZUoTEhQFZpMrmO2NoGLxpw2jFFCjno9SmDZY8VdjJDD8bUMxLCgGyTO/GveLu1zfc71+LC5HF/2d5j1BCXFHYyUoOdlBVSJDUB7tEH6vCXJcxn5MM+2NWGu8e8vNx1bydGinaS0mEnCqayS0nPd3Efna83AyF4qBlYTNEZu9bTyTs2nctj8NMi5nR0bBlZMalJwVKBxJ8shubj2C0a7hCZcclObi0kDgyO7acLkC18v53B7cUVbj8sZzFKDTGt007kCpW/ugFZqVcbW7ifSCJDSj76to5nBuykEk0e0XUG1cVsZDdZMvJ6hCEFS0D1gmP1DwSwBFqPfxPQqKqmgqaCRhUwut48g/+9gv8AkUm57sAQyxIAAAAASUVORK5CYII="},392:function(t,e,n){"use strict";var r=n(257);n.n(r).a},393:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-742af840] {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-742af840] {\n  padding: 0 0.4rem;\n}\nh1[data-v-742af840] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-742af840] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-742af840] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-742af840] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#step4[data-v-742af840] {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n}\n.video[data-v-742af840] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-742af840] {\n  width: 8.5rem;\n  max-height: 5.6rem;\n  overflow: hidden;\n}\n.rule[data-v-742af840] {\n  display: flex;\n  align-items: center;\n  margin: 0.3rem 0.3rem;\n}\n.rule-select[data-v-742af840] {\n  margin-right: 0.3rem;\n  width: 0.533333rem;\n  height: 0.533333rem;\n  border: 0.02rem solid #E6E6E6;\n}\n.rule-select-img[data-v-742af840] {\n  width: inherit;\n  height: inherit;\n}",""])},415:function(t,e,n){"use strict";n.r(e);n(40);var r,o,c=n(5),l=n(199),d=n(191),f=n(180),m=n(195),h={name:"Signup",mixins:[n(194).default],head:function(){return{title:"确认提交"}},components:{"step-bar":l.b,"submit-area":l.c,"poster-modal":l.a,toast:m.a},data:function(){return{steps:d.STEPS,videoSrc:"",ruleSelected:!1,showPosterModal:!1,formData:null}},methods:{selectRule:function(){this.ruleSelected=!this.ruleSelected},submit:(o=Object(c.a)(regeneratorRuntime.mark(function t(){var data,e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.ruleSelected){t.next=7;break}return data={activity_id:this.$route.query.activity_id,combination_id:this.formData.landiLevel.id,topic_id:this.formData.topicID,video_url:this.formData.videoKey,address:this.formData.address},this.formData.workID&&(data.id=this.formData.workID),t.next=5,f.a.post(d.API.SUBMIT_WORK,data);case 5:(e=t.sent).status?this.showPosterModal=!0:this.$refs.toast.showToast(e.info);case 7:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),gotoStep5:function(){this.gotoPage("presentation-signup-step5")},gotoRulePage:function(){this.gotoPage("presentation-protocol")}},mounted:(r=Object(c.a)(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.$refs.toast.showLoadingToast(),e=JSON.parse(localStorage.getItem(d.STROGE.FORM_DATA)),this.videoSrc=e.videoSrc,n=this.$route.query.activity_id,t.next=6,f.a.get("".concat(d.API.MY_WORK,"?activity_id=").concat(n));case 6:(r=t.sent).status?r.data.id&&(e.workID=r.data.id):this.$refs.toast.showToast(r.info),this.formData=e,this.$refs.toast.hideLoadingToast();case 10:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},v=(n(392),n(19)),component=Object(v.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"step4"}},[r("div",{staticClass:"top-step-bar"},[r("step-bar",{attrs:{steps:t.steps,progress:70}})],1),t._v(" "),r("div",{staticClass:"page-content"},[r("h1",[t._v("确认提交")]),t._v(" "),r("div",{staticClass:"video"},[t.videoSrc&&""!=t.videoSrc?r("video",{staticClass:"video-content",attrs:{controls:"","x5-video-player-type":"h5"}},[r("source",{attrs:{src:t.videoSrc}})]):t._e()]),t._v(" "),r("div",{staticClass:"rule"},[r("div",{staticClass:"rule-select",on:{click:t.selectRule}},[t.ruleSelected?r("img",{staticClass:"rule-select-img",attrs:{src:n(391)}}):t._e()]),t._v(" "),r("h3",{on:{click:t.gotoRulePage}},[t._v("我已阅读并同意《视频授权用户协议书》")])])]),t._v(" "),r("submit-area",{attrs:{hint:"确认提交之后，活动结束前可重新上传,届时原作品将自动覆盖、点赞数清零，详见活动规则",btnText:"确认提交",isClickable:t.ruleSelected},on:{submit:t.submit}}),t._v(" "),r("toast",{ref:"toast"}),t._v(" "),r("poster-modal",{attrs:{poster:1},on:{click:t.gotoStep5,changeShow:t.gotoStep5},model:{value:t.showPosterModal,callback:function(e){t.showPosterModal=e},expression:"showPosterModal"}})],1)},[],!1,null,"742af840",null);e.default=component.exports}}]);