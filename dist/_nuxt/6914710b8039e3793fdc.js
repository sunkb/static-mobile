(window.webpackJsonp=window.webpackJsonp||[]).push([[22,18,20],{178:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,l=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),c=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:c,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],i=0;i<e.length;++i)for(var r=e[i],l=r.obj[r.prop],c=Object.keys(l),d=0;d<c.length;++d){var f=c[d],m=l[f];"object"==typeof m&&null!==m&&-1===n.indexOf(m)&&(e.push({obj:l,prop:f}),n.push(m))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(o(n)){for(var r=[],l=0;l<n.length;++l)void 0!==n[l]&&r.push(n[l]);e.obj[e.prop]=r}}}(e),t},decode:function(t,e,n){var r=t.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(t,e,n){if(0===t.length)return t;var r="string"==typeof t?t:String(t);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",i=0;i<r.length;++i){var c=r.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=r.charAt(i):c<128?o+=l[c]:c<2048?o+=l[192|c>>6]+l[128|63&c]:c<55296||c>=57344?o+=l[224|c>>12]+l[128|c>>6&63]+l[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&r.charCodeAt(i)),o+=l[240|c>>18]+l[128|c>>12&63]+l[128|c>>6&63]+l[128|63&c])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,n){if(!source)return e;if("object"!=typeof source){if(o(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(n&&(n.plainObjects||n.allowPrototypes)||!r.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var l=e;return o(e)&&!o(source)&&(l=c(e,n)),o(e)&&o(source)?(source.forEach(function(o,i){if(r.call(e,i)){var l=e[i];l&&"object"==typeof l&&o&&"object"==typeof o?e[i]=t(l,o,n):e.push(o)}else e[i]=o}),e):Object.keys(source).reduce(function(e,o){var l=source[o];return r.call(e,o)?e[o]=t(e[o],l,n):e[o]=l,e},l)}}},179:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},181:function(t,e,n){"use strict";n(13),n(57),n(73),n(108);var r=n(75),o=n.n(r),l=n(184),c=n.n(l);function d(t){var e=window.location,n=e.origin+e.pathname+"?",r=e.search.substr(1);if(r.indexOf(t)>-1){for(var o={},l=r.split("&"),i=0;i<l.length;i++)l[i]=l[i].split("="),o[l[i][0]]=l[i][1];return delete o[t],n+JSON.stringify(o).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&")}return window.location.href}console.log("process.env.ENV_API","https://release6.landi.com/");var f=o.a.create({baseURL:"https://release6.landi.com/",transformRequest:[function(data){return c.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});f.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),f.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){if(t.response)switch(t.response.status){case 401:encodeURIComponent(window.location.href);d("code");var e="https://release6.landi.com/Mobile/Login/index?redirect_url="+d("state");console.log("loginUrl",e),window.location.href=e;break;case 404:t.message="请求错误,未找到该资源";break;case 500:t.message="服务器端出错";break;default:t.message="连接错误".concat(t.response.status)}return Promise.reject(t)}),e.a=f},182:function(t,e,n){"use strict";var r=n(178),o=n(179),l=Object.prototype.hasOwnProperty,c={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,m=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,n,o,l,c,filter,f,h,y,w,k,_){var x=object;if("function"==typeof filter?x=filter(e,x):x instanceof Date?x=y(x):"comma"===n&&d(x)&&(x=x.join(",")),null===x){if(o)return c&&!k?c(e,v.encoder,_):e;x=""}if("string"==typeof x||"number"==typeof x||"boolean"==typeof x||r.isBuffer(x))return c?[w(k?e:c(e,v.encoder,_))+"="+w(c(x,v.encoder,_))]:[w(e)+"="+w(String(x))];var j,O=[];if(void 0===x)return O;if(d(filter))j=filter;else{var E=Object.keys(x);j=f?E.sort(f):E}for(var i=0;i<j.length;++i){var S=j[i];l&&null===x[S]||(d(x)?m(O,t(x[S],"function"==typeof n?n(e,S):e,n,o,l,c,filter,f,h,y,w,k,_)):m(O,t(x[S],e+(h?"."+S:"["+S+"]"),n,o,l,c,filter,f,h,y,w,k,_)))}return O};t.exports=function(object,t){var e,n=object,r=function(t){if(!t)return v;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||v.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==t.format){if(!l.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var r=o.formatters[n],filter=v.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===t.allowDots?v.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:v.charsetSentinel,delimiter:void 0===t.delimiter?v.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:v.encode,encoder:"function"==typeof t.encoder?t.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:v.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:v.strictNullHandling}}(t);"function"==typeof r.filter?n=(0,r.filter)("",n):d(r.filter)&&(e=r.filter);var f,h=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in c?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var w=c[f];e||(e=Object.keys(n)),r.sort&&e.sort(r.sort);for(var i=0;i<e.length;++i){var k=e[i];r.skipNulls&&null===n[k]||m(h,y(n[k],k,w,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var _=h.join(r.delimiter),x=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?x+="utf8=%26%2310003%3B&":x+="utf8=%E2%9C%93&"),_.length>0?x+_:""}},183:function(t,e,n){"use strict";var r=n(178),o=Object.prototype.hasOwnProperty,l={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,l=/(\[[^[\]]*])/g,c=/(\[[^[\]]*])/.exec(r),d=c?r.slice(0,c.index):r,f=[];if(d){if(!n.plainObjects&&o.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(c=l.exec(r))&&i<n.depth;){if(i+=1,!n.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(c[1])}return c&&f.push("["+r.slice(c.index)+"]"),function(t,e,n){for(var r=e,i=t.length-1;i>=0;--i){var o,l=t[i];if("[]"===l&&n.parseArrays)o=[].concat(r);else{o=n.plainObjects?Object.create(null):{};var c="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,d=parseInt(c,10);n.parseArrays||""!==c?!isNaN(d)&&l!==c&&String(d)===c&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(o=[])[d]=r:o[c]=r:o={0:r}}r=o}return r}(f,e,n)}};t.exports=function(t,e){var n=function(t){if(!t)return l;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?l.charset:t.charset;return{allowDots:void 0===t.allowDots?l.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:l.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:l.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:l.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:l.comma,decoder:"function"==typeof t.decoder?t.decoder:l.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:l.delimiter,depth:"number"==typeof t.depth?t.depth:l.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:l.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:l.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:l.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:l.strictNullHandling}}(e);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,n={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,m=d.split(e.delimiter,f),h=-1,v=e.charset;if(e.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,w,k=m[i],_=k.indexOf("]="),x=-1===_?k.indexOf("="):_+1;-1===x?(y=e.decoder(k,l.decoder,v),w=e.strictNullHandling?null:""):(y=e.decoder(k.slice(0,x),l.decoder,v),w=e.decoder(k.slice(x+1),l.decoder,v)),w&&e.interpretNumericEntities&&"iso-8859-1"===v&&(w=c(w)),w&&e.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(n,y)?n[y]=r.combine(n[y],w):n[y]=w}return n}(t,n):t,m=n.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],n);m=r.merge(m,y,n)}return r.compact(m)}},184:function(t,e,n){"use strict";var r=n(182),o=n(183),l=n(179);t.exports={formats:l,parse:o,stringify:r}},188:function(t,e,n){"use strict";n.r(e),n.d(e,"STEPS",function(){return o}),n.d(e,"API",function(){return l}),n.d(e,"SIGNUP_DATA_RULE",function(){return c}),n.d(e,"TOPICS",function(){return d}),n.d(e,"VIDEO_STATUS_TYPE",function(){return v}),n.d(e,"STROGE",function(){return y}),n.d(e,"LANDI_LEVEL",function(){return f}),n.d(e,"RANK_LIST",function(){return m}),n.d(e,"INDEX_STEPS",function(){return h});var r=n(196);n.d(e,"REGION_DATA",function(){return r.default});var o=["报名信息","选择题目","上传视频","确认提交","我的作品"],l={STU_SHARE_DATA:"",ACTIVITY_DETAIL:"/Mobile/StudentActivityDetail/detail",MY_WORK:"/Mobile/StudentActivity/myWork",SUBMIT_WORK:"/Mobile/StudentActivity/submitWork",RANK:"/Mobile/StudentActivityDetail/rank",WX_SHARE:"/Mobile/StudentActivityDetail/share",WORK:"/Mobile/StudentActivityDetail/work",LIKE:"/Mobile/StudentActivityDetail/zan",UNLIKE:"/Mobile/StudentActivityDetail/unZan",GET_OPENID:"/Mobile/StudentActivityDetail/getOpenid"},c={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:1},{name:"E1-E2",type:2},{name:"E3-E7",type:3}],m=[{name:"Nina",like:2330,avatar:"https://www.abc360.com/Public/abc360mp/img/p3.png"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h=["提交报名信息","选择参赛题目","上传参赛视频","确认提交参赛","分享好友点赞"],v={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"上传的文件不符合条件,尝试重新上传,也可直接将作品以邮件形式发送至 bisai@rochi.com"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},y={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name",FORM_DATA:"prt_form_data"}},189:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("75bd2bd6",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";n.r(e);n(57);e.default={methods:{gotoPage:function(t){var e=this.$route.query;delete e.code,delete e.state,delete e.work_id,this.$router.replace({name:t,query:e})}}}},192:function(t,e,n){"use strict";var r={name:"Toast",data:function(){return{show:!1,text:"",position:{},mask:!0,loading:!1}},methods:{showToast:function(text){var t=this,mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};this.text=text,this.mask=mask,this.position=n,this.show=!0,setTimeout(function(){t.show=!1},e)},showLoadingToast:function(text){var mask=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.text=text,this.mask=mask,this.position=t,this.loading=!0,this.show=!0},hideLoadingToast:function(){this.loading=!1,this.show=!1}}},o=(n(202),n(19)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"toasttrs"}},[t.show?n("div",[t.mask?n("div",{staticClass:"toast-mask"}):t._e(),t._v(" "),n("div",{staticClass:"toast-content",style:t.position},[t.loading?n("div",{staticClass:"toast-content-loading"},[n("div",{staticClass:"toast-content-loading-content"},[n("div"),t._v(" "),n("div"),t._v(" "),n("div"),t._v(" "),n("div")])]):t._e(),t._v(" "),t.text&&""!=t.text&&t.loading?n("div",{staticClass:"toast-content-div"}):t._e(),t._v(" "),t.text&&""!=t.text?n("div",{staticClass:"toast-content-text"},[t._v(t._s(t.text))]):t._e()])]):t._e()])},[],!1,null,null,null);e.a=component.exports},202:function(t,e,n){"use strict";var r=n(189);n.n(r).a},203:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".toasttrs-enter-active,\n.toasttrs-leave-active {\n  transition: opacity .5s;\n}\n.toasttrs-enter,\n.toasttrs-leave-to {\n  opacity: 0;\n}\n.toast-mask {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n}\n.toast-content {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  max-width: 5.333333rem;\n  transform: translate(-50%, -50%);\n  padding: 0.266667rem 0.4rem;\n  color: #fff;\n  font-size: 0.373333rem;\n  border-radius: 0.133333rem;\n  background: rgba(0, 0, 0, 0.6);\n}\n.toast-content-div {\n  height: 0.133333rem;\n}\n.toast-content-loading {\n  display: flex;\n  justify-content: center;\n}\n.toast-content-loading-content {\n  position: relative;\n  width: 1.066667rem;\n  height: 1.066667rem;\n}\n.toast-content-loading-content div {\n  box-sizing: border-box;\n  position: absolute;\n  width: 1.066667rem;\n  height: 1.066667rem;\n  border: 1vw solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n.toast-content-loading-content div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.toast-content-loading-content div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.toast-content-loading-content div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes lds-ring {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}",""])},241:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1e5b9186",content,!0,{sourceMap:!1})},344:function(t,e,n){t.exports=n.p+"img/171d5a9.png"},345:function(t,e,n){t.exports=n.p+"img/0294e59.png"},346:function(t,e,n){t.exports=n.p+"img/c279763.png"},347:function(t,e,n){"use strict";var r=n(241);n.n(r).a},348:function(t,e,n){e=t.exports=n(38)(!1);var r=n(180),o=r(n(349)),l=r(n(350));e.push([t.i,".top-step-bar[data-v-7ef441af] {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-7ef441af] {\n  padding: 0 0.4rem;\n}\nh1[data-v-7ef441af] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-7ef441af] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-7ef441af] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-7ef441af] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#rank[data-v-7ef441af] {\n  background: #fff;\n  width: 100vw;\n  height: 100vh;\n}\n.headbar[data-v-7ef441af] {\n  height: 4.67rem;\n  width: 100vw;\n  background: url("+o+") 61vw 4vw/38vw no-repeat, url("+l+") 0 0/cover;\n  background-color: #3b7ada;\n  color: #fff;\n  position: relative;\n}\n.headbar-content[data-v-7ef441af] {\n  position: absolute;\n  top: 50%;\n  left: 0.4rem;\n  transform: translate(0, -50%);\n}\n.headbar-content-title[data-v-7ef441af] {\n  font-size: 0.533333rem;\n  font-weight: bold;\n  margin-bottom: 0.2rem;\n}\n.headbar-content-text[data-v-7ef441af] {\n  width: 5.733333rem;\n}\n.level[data-v-7ef441af] {\n  height: 1.2rem;\n  width: 100vw;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background: #3781D6;\n  top: 0;\n}\n.level-item[data-v-7ef441af] {\n  position: relative;\n  width: 1.7rem;\n  text-align: center;\n}\n.level-item-content[data-v-7ef441af] {\n  color: #fff;\n  font-size: 0.4rem;\n  line-height: 1.2rem;\n}\n.level-item .accent[data-v-7ef441af] {\n  font-weight: bold;\n}\n.level-item-selector[data-v-7ef441af] {\n  position: absolute;\n  left: 50%;\n  bottom: -0.02rem;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 0.2rem solid transparent;\n  border-right: 0.2rem solid transparent;\n  border-bottom: 0.2rem solid #fff;\n}\n.rank[data-v-7ef441af] {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  padding: 0 0.4rem;\n}\n.rank[data-v-7ef441af]::-webkit-scrollbar {\n  display: none;\n}\n.rank-item[data-v-7ef441af] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.25rem 0;\n  box-sizing: content-box;\n  border-bottom: 0.02rem solid #EBEBEB;\n}\n.rank-item-left[data-v-7ef441af] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 7.5rem;\n}\n.rank-item-rank[data-v-7ef441af] {\n  width: 0.8rem;\n  text-align: center;\n  font-size: 0.36rem;\n  color: #B2B2B2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rank-item-rank img[data-v-7ef441af] {\n  width: 0.8rem;\n  height: 0.8rem;\n}\n.rank-item-avatar[data-v-7ef441af] {\n  width: 1.3rem;\n  height: 1.3rem;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.rank-item-avatar-img[data-v-7ef441af] {\n  width: inherit;\n}\n.rank-item-name[data-v-7ef441af] {\n  width: 4.5rem;\n  padding-left: 0.2rem;\n  text-align: left;\n  font-size: 0.4rem;\n  color: #333333;\n}\n.rank-item-like[data-v-7ef441af] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.rank-item-like-num[data-v-7ef441af] {\n  color: #F0552D;\n  font-size: 0.42rem;\n}\n.rank-item-like-text[data-v-7ef441af] {\n  color: #B2B2B2;\n  font-size: 0.293333rem;\n}",""])},349:function(t,e,n){t.exports=n.p+"img/9d750df.png"},350:function(t,e,n){t.exports=n.p+"img/459c9b7.png"},409:function(t,e,n){"use strict";n.r(e);n(40);var r,o=n(5),l=n(188),c=n(181),d=n(192),f={name:"Rank",mixins:[n(190).default],head:function(){return{title:"点赞排行榜"}},components:{toast:d.a},data:function(){return{landiLevels:[],landiLevelIndex:0,rankList:[],innerScroll:!1,headbarBottom:0}},methods:{listUpdate:function(t){this.landiLevelIndex=t,this.rankList=this.landiLevels[t].students},handleScroll:function(){window.scrollY>=this.headbarBottom?this.innerScroll=!0:this.innerScroll=!1}},mounted:(r=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.headbarBottom=this.$refs.headbar.getBoundingClientRect().bottom,window.addEventListener("scroll",this.handleScroll),this.$refs.toast.showLoadingToast(),e=this.$route.query.activity_id,t.next=6,c.a.get("".concat(l.API.RANK,"?activity_id=").concat(e));case 6:if((n=t.sent).status){t.next=11;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(n.info),t.abrupt("return");case 11:document.title=n.data.activity_name,this.landiLevels=n.data.combinations,this.listUpdate(0),this.$refs.toast.hideLoadingToast();case 15:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},m=(n(347),n(19)),component=Object(m.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"rank"}},[r("div",{ref:"headbar",staticClass:"headbar"},[t._m(0)]),t._v(" "),r("div",{staticClass:"level",style:{position:t.innerScroll?"fixed":"static"}},t._l(t.landiLevels,function(e,n){return r("div",{key:e.id,staticClass:"level-item",on:{click:function(e){return t.listUpdate(n)}}},[r("div",{class:["level-item-content",t.landiLevelIndex==n?"accent":""]},[t._v(t._s(e.name))]),t._v(" "),t.landiLevelIndex==n?r("div",{staticClass:"level-item-selector"}):t._e()])}),0),t._v(" "),r("div",{staticClass:"rank"},t._l(t.rankList,function(e,o){return r("div",{key:e.sid,staticClass:"rank-item"},[r("div",{staticClass:"rank-item-left"},[r("div",{staticClass:"rank-item-rank"},[o>2?r("div",[t._v(t._s((""+(o+1)).padStart(2,"0")))]):t._e(),t._v(" "),0==o?r("img",{attrs:{src:n(344)}}):t._e(),t._v(" "),1==o?r("img",{attrs:{src:n(345)}}):t._e(),t._v(" "),2==o?r("img",{attrs:{src:n(346)}}):t._e()]),t._v(" "),r("div",{staticClass:"rank-item-avatar"},[r("img",{staticClass:"rank-item-avatar-img",attrs:{src:e.avatar}})]),t._v(" "),r("div",{staticClass:"rank-item-name"},[t._v(t._s(e.en_name))])]),t._v(" "),r("div",{staticClass:"rank-item-like"},[r("div",{staticClass:"rank-item-like-num"},[t._v(t._s(e.zan))]),t._v(" "),r("div",{staticClass:"rank-item-like-text"},[t._v("点赞数")])])])}),0),t._v(" "),r("toast",{ref:"toast"})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"headbar-content"},[e("div",{staticClass:"headbar-content-title"},[this._v("点赞排行榜")]),this._v(" "),e("div",{staticClass:"headbar-content-text"},[this._v("在比赛中，小朋友们的精彩表现，让我们为选手们送上祝福的掌声，期待他们在未来取得更多成就")])])}],!1,null,"7ef441af",null);e.default=component.exports}}]);