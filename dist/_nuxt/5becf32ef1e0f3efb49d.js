(window.webpackJsonp=window.webpackJsonp||[]).push([[19,15],{178:function(t,e,n){"use strict";var o=Object.prototype.hasOwnProperty,r=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],i=0;i<e.length;++i)for(var o=e[i],c=o.obj[o.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],v=c[f];"object"==typeof v&&null!==v&&-1===n.indexOf(v)&&(e.push({obj:c,prop:f}),n.push(v))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(r(n)){for(var o=[],c=0;c<n.length;++c)void 0!==n[c]&&o.push(n[c]);e.obj[e.prop]=o}}}(e),t},decode:function(t,e,n){var o=t.replace(/\+/g," ");if("iso-8859-1"===n)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(t){return o}},encode:function(t,e,n){if(0===t.length)return t;var o="string"==typeof t?t:String(t);if("iso-8859-1"===n)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var r="",i=0;i<o.length;++i){var l=o.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?r+=o.charAt(i):l<128?r+=c[l]:l<2048?r+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?r+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(i)),r+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return r},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,n){if(!source)return e;if("object"!=typeof source){if(r(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return r(e)&&!r(source)&&(c=l(e,n)),r(e)&&r(source)?(source.forEach(function(r,i){if(o.call(e,i)){var c=e[i];c&&"object"==typeof c&&r&&"object"==typeof r?e[i]=t(c,r,n):e.push(r)}else e[i]=r}),e):Object.keys(source).reduce(function(e,r){var c=source[r];return o.call(e,r)?e[r]=t(e[r],c,n):e[r]=c,e},c)}}},179:function(t,e,n){"use strict";var o=String.prototype.replace,r=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return o.call(t,r,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,n){"use strict";n(13);var o=n(74),r=n.n(o),c=n(185),l=n.n(c);console.log("process.env.ENV_API","http://release6.landi.com/");var d=r.a.create({baseURL:"http://release6.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(t){return t},function(t){return console.log(t),Promise.reject(t)}),d.interceptors.response.use(function(t){return 200===t.status?Promise.resolve(t.data):Promise.reject(t)},function(t){return console.log(t,t.response),Promise.reject(t)}),e.a=d},181:function(t,e,n){"use strict";var o=n(3),r=n(16),c=n(21),l=n(109),d=n(57),f=n(10),v=n(40).f,h=n(58).f,m=n(9).f,w=n(189).trim,y=o.Number,j=y,x=y.prototype,_="Number"==c(n(73)(x)),k="trim"in String.prototype,C=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,c=(e=k?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,o)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(_?f(function(){x.valueOf.call(n)}):"Number"!=c(n))?l(new j(C(e)),n,y):C(e)};for(var O,N=n(8)?v(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;N.length>E;E++)r(j,O=N[E])&&!r(y,O)&&m(y,O,h(j,O));y.prototype=x,x.constructor=y,n(11)(o,"Number",y)}},182:function(t,e,n){var content=n(195);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("fec0ffbc",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(200);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("5bd156c3",content,!0,{sourceMap:!1})},184:function(t,e,n){var content=n(202);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("1291ba86",content,!0,{sourceMap:!1})},185:function(t,e,n){"use strict";var o=n(187),r=n(188),c=n(179);t.exports={formats:c,parse:r,stringify:o}},187:function(t,e,n){"use strict";var o=n(178),r=n(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,v=function(t,e){f.apply(t,d(e)?e:[e])},h=Date.prototype.toISOString,m={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:r.formatters[r.default],indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},w=function t(object,e,n,r,c,l,filter,f,h,w,y,j,x){var _=object;if("function"==typeof filter?_=filter(e,_):_ instanceof Date?_=w(_):"comma"===n&&d(_)&&(_=_.join(",")),null===_){if(r)return l&&!j?l(e,m.encoder,x):e;_=""}if("string"==typeof _||"number"==typeof _||"boolean"==typeof _||o.isBuffer(_))return l?[y(j?e:l(e,m.encoder,x))+"="+y(l(_,m.encoder,x))]:[y(e)+"="+y(String(_))];var k,C=[];if(void 0===_)return C;if(d(filter))k=filter;else{var O=Object.keys(_);k=f?O.sort(f):O}for(var i=0;i<k.length;++i){var N=k[i];c&&null===_[N]||(d(_)?v(C,t(_[N],"function"==typeof n?n(e,N):e,n,r,c,l,filter,f,h,w,y,j,x)):v(C,t(_[N],e+(h?"."+N:"["+N+"]"),n,r,c,l,filter,f,h,w,y,j,x)))}return C};t.exports=function(object,t){var e,n=object,o=function(t){if(!t)return m;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||m.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=r.default;if(void 0!==t.format){if(!c.call(r.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var o=r.formatters[n],filter=m.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:m.addQueryPrefix,allowDots:void 0===t.allowDots?m.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:m.charsetSentinel,delimiter:void 0===t.delimiter?m.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:m.encode,encoder:"function"==typeof t.encoder?t.encoder:m.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:m.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:m.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:m.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:m.strictNullHandling}}(t);"function"==typeof o.filter?n=(0,o.filter)("",n):d(o.filter)&&(e=o.filter);var f,h=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var y=l[f];e||(e=Object.keys(n)),o.sort&&e.sort(o.sort);for(var i=0;i<e.length;++i){var j=e[i];o.skipNulls&&null===n[j]||v(h,w(n[j],j,y,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var x=h.join(o.delimiter),_=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),x.length>0?_+x:""}},188:function(t,e,n){"use strict";var o=n(178),r=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,n){if(t){var o=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(o),d=l?o.slice(0,l.index):o,f=[];if(d){if(!n.plainObjects&&r.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(o))&&i<n.depth;){if(i+=1,!n.plainObjects&&r.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+o.slice(l.index)+"]"),function(t,e,n){for(var o=e,i=t.length-1;i>=0;--i){var r,c=t[i];if("[]"===c&&n.parseArrays)r=[].concat(o);else{r=n.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);n.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(r=[])[d]=o:r[l]=o:r={0:o}}o=r}return o}(f,e,n)}};t.exports=function(t,e){var n=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||o.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,n={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,v=d.split(e.delimiter,f),h=-1,m=e.charset;if(e.charsetSentinel)for(i=0;i<v.length;++i)0===v[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===v[i]?m="utf-8":"utf8=%26%2310003%3B"===v[i]&&(m="iso-8859-1"),h=i,i=v.length);for(i=0;i<v.length;++i)if(i!==h){var w,y,j=v[i],x=j.indexOf("]="),_=-1===x?j.indexOf("="):x+1;-1===_?(w=e.decoder(j,c.decoder,m),y=e.strictNullHandling?null:""):(w=e.decoder(j.slice(0,_),c.decoder,m),y=e.decoder(j.slice(_+1),c.decoder,m)),y&&e.interpretNumericEntities&&"iso-8859-1"===m&&(y=l(y)),y&&e.comma&&y.indexOf(",")>-1&&(y=y.split(",")),r.call(n,w)?n[w]=o.combine(n[w],y):n[w]=y}return n}(t,n):t,v=n.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var m=h[i],w=d(m,f[m],n);v=o.merge(v,w,n)}return o.compact(v)}},189:function(t,e,n){var o=n(7),r=n(20),c=n(10),l=n(190),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,n){var r={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=r[t]=d?e(m):l[t];n&&(r[n]=f),o(o.P+o.F*d,"String",r)},m=h.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},190:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},192:function(t,e,n){"use strict";n.r(e),n.d(e,"STEPS",function(){return r}),n.d(e,"API",function(){return c}),n.d(e,"SIGNUP_DATA_RULE",function(){return l}),n.d(e,"TOPICS",function(){return d}),n.d(e,"VIDEO_STATUS_TYPE",function(){return h}),n.d(e,"STROGE",function(){return m}),n.d(e,"LANDI_LEVEL",function(){return f}),n.d(e,"RANK_LIST",function(){return v});var o=n(191);n.d(e,"REGION_DATA",function(){return o.default});var r=["报名信息","选择题目","上传视频","确认提交","我的作品"],c={STU_SHARE_DATA:""},l={chnName:{rule:/[\u4e00-\u9fa5]{2,}/,message:"请输入正确的中文名"},engName:{rule:/^[a-z]{2,}$/i,message:"请输入正确的英文名"},landiLevel:{rule:/.+/,message:"请选择兰迪级别"},phone:{rule:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,message:"请输入正确的手机号码"},validateCode:{rule:/.+/,message:"请输入验证码"},province:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择省份"},city:{rule:/^[1-9]\d*(\.\d+)?$/,messgae:"请选择城市"}},d=[{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"We can't just leave environmental protection to our govern ment every bady.",chn:"环境保护不仅仅是政府的事情，我们在日常生活中能为保护环境做什么呢？"}},{video:{src:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",poster:"https://qn-static.landi.com/uploadtoolc64639d85d1b028a645b35a27acfe218.png"},text:{eng:"How do you spend your holiday?",chn:"你的假期是怎样度过的呢？"}}],f=[{name:"PRE E",type:0},{name:"E1-E2",type:1},{name:"E3即以上",type:2}],v=[{name:"Nina",like:2330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Saeah",like:1330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Alina",like:330,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Liz",like:200,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Luke",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Dandi",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Pengy",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Zoe",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Loft",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Tina",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Carol",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"},{name:"Roma",like:100,avatar:"https://qn-static.landi.com/uploadtoolec4589c658440d583bbfdbf6b88608fd.jpg"}],h={ADD:{type:"add",hint:"宝爸/宝妈们, 快来上传宝贝的视频"},UPLOADING:{type:"uploading",progress:0},ERROR:{type:"error",hint:"视频上传失败, 上传的文件不符合条件"},UPLOADED:{type:"uploaded",hint:"上传成功, 点击重新上传"}},m={LANDI_LEVEL:"prt_landi_level",TOPIC:"prt_topic",VIDEO_SRC:"prt_video_src",STU_ENG_NAME:"prt_stu_eng_name"}},194:function(t,e,n){"use strict";var o=n(182);n.n(o).a},195:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-40a39e63] {\n  margin-top: 4vw;\n  height: 22vw;\n}\n.page-content[data-v-40a39e63] {\n  padding: 0 4vw;\n}\nh1[data-v-40a39e63] {\n  font-size: 4vw;\n  font-weight: bold;\n  color: #333333;\n  padding: 3vw 0;\n}\nh2[data-v-40a39e63] {\n  font-size: 3.7vw;\n  color: #333333;\n  padding: 2vw 0;\n}\nh3[data-v-40a39e63] {\n  font-size: 3.4vw;\n  color: #B2B2B2;\n  padding: 1vw 0;\n}\np[data-v-40a39e63] {\n  font-size: 3.4vw;\n  color: #808080;\n}\n#stepbar[data-v-40a39e63] {\n  position: relative;\n}\n.wrapper[data-v-40a39e63] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.circle[data-v-40a39e63] {\n  height: 6.67vw;\n  width: 6.67vw;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 1.5vw -0.7vw #666666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle-wrapper[data-v-40a39e63] {\n  height: 12vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.circle-content[data-v-40a39e63] {\n  height: 5.06vw;\n  width: 5.06vw;\n  color: #fff;\n  background: #E6E6E6;\n  border-radius: 50%;\n  font-family: STYuanti-SC-Regular;\n  font-size: 2.93vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle .accent[data-v-40a39e63] {\n  background: #16C8D2;\n}\n.step-item[data-v-40a39e63] {\n  color: #B2B2B2;\n  font-size: 2.9vw;\n  font-weight: 400;\n}\n.step .accent[data-v-40a39e63] {\n  color: #16C8D2;\n}\n.progress[data-v-40a39e63] {\n  height: 12vw;\n  width: 90%;\n  position: absolute;\n  top: 0;\n  left: 5%;\n  overflow: hidden;\n}\n.progress-bar[data-v-40a39e63] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translate(0, -50%);\n  height: 0.8vw;\n  border-radius: 0.4vw;\n}\n.progress-empty[data-v-40a39e63] {\n  width: 100%;\n  box-shadow: inset 0 0.2vw .3vw -.25vw #666666;\n}\n.progress-fill[data-v-40a39e63] {\n  background: #16C8D2;\n}",""])},196:function(t,e,n){t.exports=n.p+"img/7fef1c0.png"},197:function(t,e,n){t.exports=n.p+"img/a8d20f2.png"},198:function(t,e,n){t.exports=n.p+"img/31eeb1c.png"},199:function(t,e,n){"use strict";var o=n(183);n.n(o).a},200:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".wrapper[data-v-b61e6f3c] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n}\n.content[data-v-b61e6f3c] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: inherit;\n  height: inherit;\n}\n.content-poster[data-v-b61e6f3c] {\n  width: 74.6vw;\n}\n.content-close[data-v-b61e6f3c] {\n  width: 60%;\n  text-align: right;\n  margin-bottom: -1vw;\n}\n.content-close-img[data-v-b61e6f3c] {\n  width: 6.67vw;\n}",""])},201:function(t,e,n){"use strict";var o=n(184);n.n(o).a},202:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar {\n  margin-top: 4vw;\n  height: 22vw;\n}\n.page-content {\n  padding: 0 4vw;\n}\nh1 {\n  font-size: 4vw;\n  font-weight: bold;\n  color: #333333;\n  padding: 3vw 0;\n}\nh2 {\n  font-size: 3.7vw;\n  color: #333333;\n  padding: 2vw 0;\n}\nh3 {\n  font-size: 3.4vw;\n  color: #B2B2B2;\n  padding: 1vw 0;\n}\np {\n  font-size: 3.4vw;\n  color: #808080;\n}\n.submit {\n  text-align: center;\n  width: 100%;\n  position: fixed;\n  bottom: 5vw;\n  left: 0;\n}\n.submit-text {\n  margin: 3vw 0;\n  color: #B2B2B2;\n  font-size: 3.2vw;\n  padding: 0 6vw;\n}\n.submit-btn {\n  display: inline-block;\n  width: 86.67vw;\n  line-height: 13.3vw;\n  text-align: center;\n  font-size: 4.53vw;\n  color: #fff;\n  background: #B2B2B2;\n}\n.submit .accent {\n  background: #16C8D2;\n}",""])},204:function(t,e,n){"use strict";n(181);var o={name:"StepBar",props:{progress:{type:Number,default:0},steps:{type:Array,default:function(){return[]}}},data:function(){return{}}},r=(n(194),n(19)),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"stepbar"}},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-empty progress-bar"}),t._v(" "),n("div",{staticClass:"progress-fill progress-bar",style:{width:t.progress+"%"}})]),t._v(" "),n("div",{staticClass:"wrapper"},t._l(t.steps,function(e,o){return n("div",{key:e,staticClass:"wrapper-item"},[n("div",{staticClass:"circle-wrapper"},[n("div",{staticClass:"circle"},[n("div",{class:["circle-content",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(o+1))])])]),t._v(" "),n("div",{staticClass:"step"},[n("div",{class:["step-item",o/t.steps.length*100<=t.progress?"accent":""]},[t._v(t._s(e))])])])}),0)])},[],!1,null,"40a39e63",null).exports,l={name:"PosterModal",model:{prop:"show",event:"changeShow"},props:{show:{type:Boolean,default:!1},poster:{type:Number,default:0}},methods:{close:function(){this.$emit("changeShow",!1)},gotoLink:function(){this.$emit("click")}}},d=(n(199),Object(r.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.show?o("div",{staticClass:"wrapper"},[o("div",{staticClass:"content"},[o("div",{staticClass:"content-close"},[o("img",{staticClass:"content-close-img",attrs:{src:n(196)},on:{click:t.close}})]),t._v(" "),0==t.poster?o("img",{staticClass:"content-poster",attrs:{src:n(197)},on:{click:t.gotoLink}}):t._e(),t._v(" "),1==t.poster?o("img",{staticClass:"content-poster",attrs:{src:n(198)},on:{click:t.gotoLink}}):t._e()])]):t._e()])},[],!1,null,"b61e6f3c",null).exports),f={name:"SubmitArea",props:{hint:{type:String,default:""},btnText:{type:String,default:""},isClickable:{type:Boolean,default:!1}},methods:{submit:function(){this.$emit("submit")}}},v=(n(201),Object(r.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"submit"},[n("div",{staticClass:"submit-text"},[t._v(t._s(t.hint))]),t._v(" "),n("div",{class:["submit-btn",t.isClickable?"accent":""],on:{click:t.submit}},[t._v(t._s(t.btnText))])])},[],!1,null,null,null).exports);n.d(e,"b",function(){return c}),n.d(e,"a",function(){return d}),n.d(e,"c",function(){return v})},245:function(t,e,n){var content=n(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("38b0f31c",content,!0,{sourceMap:!1})},337:function(t,e,n){"use strict";var o=n(245);n.n(o).a},338:function(t,e,n){(t.exports=n(38)(!1)).push([t.i,".top-step-bar[data-v-4ddf59b8] {\n  margin-top: 4vw;\n  height: 22vw;\n}\n.page-content[data-v-4ddf59b8] {\n  padding: 0 4vw;\n}\nh1[data-v-4ddf59b8] {\n  font-size: 4vw;\n  font-weight: bold;\n  color: #333333;\n  padding: 3vw 0;\n}\nh2[data-v-4ddf59b8] {\n  font-size: 3.7vw;\n  color: #333333;\n  padding: 2vw 0;\n}\nh3[data-v-4ddf59b8] {\n  font-size: 3.4vw;\n  color: #B2B2B2;\n  padding: 1vw 0;\n}\np[data-v-4ddf59b8] {\n  font-size: 3.4vw;\n  color: #808080;\n}\n.bg[data-v-4ddf59b8] {\n  background: #fff;\n  width: 100vw;\n  height: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.bg-img[data-v-4ddf59b8] {\n  width: inherit;\n}\n.content[data-v-4ddf59b8] {\n  width: 92vw;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 5vw 3vw;\n  box-shadow: 0 0 3vw -1.5vw #999999;\n}\n.content-video[data-v-4ddf59b8] {\n  width: 85.2vw;\n}\n.content-topic-eng[data-v-4ddf59b8] {\n  color: #333333;\n  margin-top: 3vw;\n}\n.content-action[data-v-4ddf59b8] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 3vw;\n}\n.content-action-author[data-v-4ddf59b8] {\n  color: #333333;\n  font-size: 3.46vw;\n}\n.content-action-actions[data-v-4ddf59b8] {\n  display: flex;\n  align-items: center;\n}\n.content-action-actions-text[data-v-4ddf59b8] {\n  color: #B2B2B2;\n  font-size: 3.2vw;\n}\n.action[data-v-4ddf59b8] {\n  position: absolute;\n  bottom: 5vw;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 86.6vw;\n  height: 13.3vw;\n}\n.action-content[data-v-4ddf59b8] {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  line-height: 13.3vw;\n  border-radius: 7vw;\n}\n.action-content-text[data-v-4ddf59b8] {\n  font-size: 4.5vw;\n  color: #fff;\n}\n.action-content-deco0[data-v-4ddf59b8] {\n  position: absolute;\n  top: 1.5vw;\n  left: 7vw;\n  width: 1.6vw;\n  height: 1.6vw;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 0.8vw;\n}\n.action-content-deco1[data-v-4ddf59b8] {\n  position: absolute;\n  top: 1.5vw;\n  left: 10vw;\n  width: 13.3vw;\n  height: 1.6vw;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 0.8vw;\n}",""])},392:function(t,e,n){"use strict";n.r(e);n(42),n(41);var o,r,c=n(5),l=(n(180),n(192)),d={name:"Share",head:function(){return{title:"才艺视频"}},components:{"poster-modal":n(204).a},data:function(){return{stuData:{videoSrc:"",like:0,name:"",topic:0},themeColor:"#F0552D",topic:{eng:"",chn:""},showPosterModal:!1}},methods:{getStuData:(r=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.stuData={videoSrc:"http://qn-video.abc360.com/40bc5e48-ca2d-48c8-9ff8-7a80e8a7ecdf.mp4",like:2329,name:"Jimmy",topic:0},this.topic=l.TOPICS[this.stuData.topic].text;case 2:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),gotoRegister:function(){}},mounted:(o=Object(c.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getStuData();case 2:document.title=this.stuData.name+"的才艺视频",this.themeColor="#F0552D";case 4:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)})},f=(n(337),n(19)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg"}),t._v(" "),n("div",{staticClass:"content"},[n("video",{staticClass:"content-video",attrs:{controls:""}},[n("source",{attrs:{src:t.stuData.videoSrc}})]),t._v(" "),n("h3",{staticClass:"content-topic-eng"},[t._v(t._s(t.topic.eng))]),t._v(" "),n("h3",{staticClass:"content-topic-chn"},[t._v(t._s(t.topic.chn))]),t._v(" "),n("div",{staticClass:"content-action"},[n("div",{staticClass:"content-action-author"},[t._v("作者: "+t._s(t.stuData.name))]),t._v(" "),n("div",{staticClass:"content-action-actions"},[n("div",{staticClass:"content-action-actions-share"}),t._v(" "),n("div",{staticClass:"content-action-actions-like"}),t._v(" "),n("div",{staticClass:"content-action-actions-text"},[t._v(t._s(t.stuData.like)+"人点赞")])])])]),t._v(" "),n("div",{staticClass:"action"},[n("div",{staticClass:"action-content",style:{background:t.themeColor}},[n("div",{staticClass:"action-content-text"},[t._v("去首页看看")]),t._v(" "),n("div",{staticClass:"action-content-deco0"}),t._v(" "),n("div",{staticClass:"action-content-deco1"})])]),t._v(" "),n("poster-modal",{attrs:{poster:0},on:{click:t.gotoRegister},model:{value:t.showPosterModal,callback:function(e){t.showPosterModal=e},expression:"showPosterModal"}})],1)},[],!1,null,"4ddf59b8",null);e.default=component.exports}}]);