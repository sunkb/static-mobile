(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{178:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var o=t[i],c=o.obj[o.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],m=c[d];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(t.push({obj:c,prop:d}),r.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],c=0;c<r.length;++c)void 0!==r[c]&&o.push(r[c]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var n="",i=0;i<o.length;++i){var l=o.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?n+=o.charAt(i):l<128?n+=c[l]:l<2048?n+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?n+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(i)),n+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(n(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!o.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return n(t)&&!n(source)&&(c=l(t,r)),n(t)&&n(source)?(source.forEach(function(n,i){if(o.call(t,i)){var c=t[i];c&&"object"==typeof c&&n&&"object"==typeof n?t[i]=e(c,n,r):t.push(n)}else t[i]=n}),t):Object.keys(source).reduce(function(t,n){var c=source[n];return o.call(t,n)?t[n]=e(t[n],c,r):t[n]=c,t},c)}}},179:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},181:function(e,t,r){"use strict";r(13),r(73);var o=r(75),n=r.n(o),c=r(184),l=r.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var f=n.a.create({baseURL:(document.location.protocol,"https://www.landi.com/"),transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});f.interceptors.request.use(function(e){return e},function(e){return console.log(e),Promise.reject(e)}),f.interceptors.response.use(function(e){return 200===e.status?Promise.resolve(e.data):Promise.reject(e)},function(e){if(e.response)switch(e.response.status){case 401:break;case 404:e.message="请求错误,未找到该资源";break;case 500:e.message="服务器端出错";break;default:e.message="连接错误".concat(e.response.status)}return Promise.reject(e)}),t.a=f},182:function(e,t,r){"use strict";var o=r(178),n=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,m=function(e,t){d.apply(e,f(t)?t:[t])},y=Date.prototype.toISOString,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(e){return y.call(e)},skipNulls:!1,strictNullHandling:!1},v=function e(object,t,r,n,c,l,filter,d,y,v,w,j,O){var x=object;if("function"==typeof filter?x=filter(t,x):x instanceof Date?x=v(x):"comma"===r&&f(x)&&(x=x.join(",")),null===x){if(n)return l&&!j?l(t,h.encoder,O):t;x=""}if("string"==typeof x||"number"==typeof x||"boolean"==typeof x||o.isBuffer(x))return l?[w(j?t:l(t,h.encoder,O))+"="+w(l(x,h.encoder,O))]:[w(t)+"="+w(String(x))];var N,P=[];if(void 0===x)return P;if(f(filter))N=filter;else{var S=Object.keys(x);N=d?S.sort(d):S}for(var i=0;i<N.length;++i){var k=N[i];c&&null===x[k]||(f(x)?m(P,e(x[k],"function"==typeof r?r(t,k):t,r,n,c,l,filter,d,y,v,w,j,O)):m(P,e(x[k],t+(y?"."+k:"["+k+"]"),r,n,c,l,filter,d,y,v,w,j,O)))}return P};e.exports=function(object,e){var t,r=object,o=function(e){if(!e)return h;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!c.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],filter=h.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:h.addQueryPrefix,allowDots:void 0===e.allowDots?h.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:h.charsetSentinel,delimiter:void 0===e.delimiter?h.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:h.encode,encoder:"function"==typeof e.encoder?e.encoder:h.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:h.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:h.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:h.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:h.strictNullHandling}}(e);"function"==typeof o.filter?r=(0,o.filter)("",r):f(o.filter)&&(t=o.filter);var d,y=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var w=l[d];t||(t=Object.keys(r)),o.sort&&t.sort(o.sort);for(var i=0;i<t.length;++i){var j=t[i];o.skipNulls&&null===r[j]||m(y,v(r[j],j,w,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var O=y.join(o.delimiter),x=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?x+="utf8=%26%2310003%3B&":x+="utf8=%E2%9C%93&"),O.length>0?x+O:""}},183:function(e,t,r){"use strict";var o=r(178),n=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},f=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(o),f=l?o.slice(0,l.index):o,d=[];if(f){if(!r.plainObjects&&n.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;null!==(l=c.exec(o))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+o.slice(l.index)+"]"),function(e,t,r){for(var o=t,i=e.length-1;i>=0;--i){var n,c=e[i];if("[]"===c&&r.parseArrays)n=[].concat(o);else{n=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(n=[])[f]=o:n[l]=o:n={0:o}}o=n}return o}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var d="string"==typeof e?function(e,t){var i,r={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,m=f.split(t.delimiter,d),y=-1,h=t.charset;if(t.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?h="utf-8":"utf8=%26%2310003%3B"===m[i]&&(h="iso-8859-1"),y=i,i=m.length);for(i=0;i<m.length;++i)if(i!==y){var v,w,j=m[i],O=j.indexOf("]="),x=-1===O?j.indexOf("="):O+1;-1===x?(v=t.decoder(j,c.decoder,h),w=t.strictNullHandling?null:""):(v=t.decoder(j.slice(0,x),c.decoder,h),w=t.decoder(j.slice(x+1),c.decoder,h)),w&&t.interpretNumericEntities&&"iso-8859-1"===h&&(w=l(w)),w&&t.comma&&w.indexOf(",")>-1&&(w=w.split(",")),n.call(r,v)?r[v]=o.combine(r[v],w):r[v]=w}return r}(e,r):e,m=r.plainObjects?Object.create(null):{},y=Object.keys(d),i=0;i<y.length;++i){var h=y[i],v=f(h,d[h],r);m=o.merge(m,v,r)}return o.compact(m)}},184:function(e,t,r){"use strict";var o=r(182),n=r(183),c=r(179);e.exports={formats:c,parse:n,stringify:o}},241:function(e,t,r){var content=r(350);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("9de46cd0",content,!0,{sourceMap:!1})},349:function(e,t,r){"use strict";var o=r(241);r.n(o).a},350:function(e,t,r){(e.exports=r(38)(!1)).push([e.i,".container[data-v-4a969b80]{width:100vw;height:100vh;background:#fff}.container .content-item[data-v-4a969b80]{display:flex;flex-direction:column;padding:.37rem .61rem 0 .59rem}.container .content-item video[data-v-4a969b80]{width:100%}.container .content-item .video-title[data-v-4a969b80]{color:#000;font-size:.37rem;margin-top:.28rem}\n",""])},440:function(e,t,r){"use strict";r.r(t);var o=r(181),n={data:function(){return{videoList:[],permission:""}},mounted:function(){var e=this;document.title="拼团「Smart Phonics智慧自然拼读小课堂」",o.a.get("/MiniProgramApi/LessonGroupBuy/getUserVideo").then(function(t){e.videoList=t.data.videos,e.permission=t.data.permission})},methods:{}},c=(r(349),r(19)),component=Object(c.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},e._l(e.videoList,function(t){return 1===e.permission?r("div",{staticClass:"content-item"},[r("video",{attrs:{controls:"",poster:t.image_url}},[r("source",{attrs:{src:t.video_url,type:"video/mp4"}})]),e._v(" "),r("p",{staticClass:"video-title"},[e._v(e._s(t.text))])]):e._e()}),0)},[],!1,null,"4a969b80",null);t.default=component.exports}}]);