(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{178:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],y=c[d];"object"==typeof y&&null!==y&&-1===r.indexOf(y)&&(t.push({obj:c,prop:d}),r.push(y))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach(function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o}),t):Object.keys(source).reduce(function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t},c)}}},179:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},181:function(e,t,r){"use strict";r(13),r(57),r(73);var n=r(75),o=r.n(n),c=r(184),l=r.n(c);console.log("process.env.ENV_API","https://release6.landi.com/");var f=o.a.create({baseURL:"http:"===document.location.protocol?"https://release6.landi.com/".replace("https","http"):"https://release6.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});f.interceptors.request.use(function(e){return e},function(e){return console.log(e),Promise.reject(e)}),f.interceptors.response.use(function(e){return 200===e.status?Promise.resolve(e.data):Promise.reject(e)},function(e){if(e.response)switch(e.response.status){case 401:break;case 404:e.message="请求错误,未找到该资源";break;case 500:e.message="服务器端出错";break;default:e.message="连接错误".concat(e.response.status)}return Promise.reject(e)}),t.a=f},182:function(e,t,r){"use strict";var n=r(178),o=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,y=function(e,t){d.apply(e,f(t)?t:[t])},m=Date.prototype.toISOString,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(e){return m.call(e)},skipNulls:!1,strictNullHandling:!1},v=function e(object,t,r,o,c,l,filter,d,m,v,j,w,O){var x=object;if("function"==typeof filter?x=filter(t,x):x instanceof Date?x=v(x):"comma"===r&&f(x)&&(x=x.join(",")),null===x){if(o)return l&&!w?l(t,h.encoder,O):t;x=""}if("string"==typeof x||"number"==typeof x||"boolean"==typeof x||n.isBuffer(x))return l?[j(w?t:l(t,h.encoder,O))+"="+j(l(x,h.encoder,O))]:[j(t)+"="+j(String(x))];var N,P=[];if(void 0===x)return P;if(f(filter))N=filter;else{var k=Object.keys(x);N=d?k.sort(d):k}for(var i=0;i<N.length;++i){var S=N[i];c&&null===x[S]||(f(x)?y(P,e(x[S],"function"==typeof r?r(t,S):t,r,o,c,l,filter,d,m,v,j,w,O)):y(P,e(x[S],t+(m?"."+S:"["+S+"]"),r,o,c,l,filter,d,m,v,j,w,O)))}return P};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return h;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=h.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:h.addQueryPrefix,allowDots:void 0===e.allowDots?h.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:h.charsetSentinel,delimiter:void 0===e.delimiter?h.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:h.encode,encoder:"function"==typeof e.encoder?e.encoder:h.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:h.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:h.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:h.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:h.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):f(n.filter)&&(t=n.filter);var d,m=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var j=l[d];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var w=t[i];n.skipNulls&&null===r[w]||y(m,v(r[w],w,j,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var O=m.join(n.delimiter),x=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?x+="utf8=%26%2310003%3B&":x+="utf8=%E2%9C%93&"),O.length>0?x+O:""}},183:function(e,t,r){"use strict";var n=r(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},f=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(n),f=l?n.slice(0,l.index):n,d=[];if(f){if(!r.plainObjects&&o.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(o=[])[f]=n:o[l]=n:o={0:n}}n=o}return n}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var d="string"==typeof e?function(e,t){var i,r={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,y=f.split(t.delimiter,d),m=-1,h=t.charset;if(t.charsetSentinel)for(i=0;i<y.length;++i)0===y[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===y[i]?h="utf-8":"utf8=%26%2310003%3B"===y[i]&&(h="iso-8859-1"),m=i,i=y.length);for(i=0;i<y.length;++i)if(i!==m){var v,j,w=y[i],O=w.indexOf("]="),x=-1===O?w.indexOf("="):O+1;-1===x?(v=t.decoder(w,c.decoder,h),j=t.strictNullHandling?null:""):(v=t.decoder(w.slice(0,x),c.decoder,h),j=t.decoder(w.slice(x+1),c.decoder,h)),j&&t.interpretNumericEntities&&"iso-8859-1"===h&&(j=l(j)),j&&t.comma&&j.indexOf(",")>-1&&(j=j.split(",")),o.call(r,v)?r[v]=n.combine(r[v],j):r[v]=j}return r}(e,r):e,y=r.plainObjects?Object.create(null):{},m=Object.keys(d),i=0;i<m.length;++i){var h=m[i],v=f(h,d[h],r);y=n.merge(y,v,r)}return n.compact(y)}},184:function(e,t,r){"use strict";var n=r(182),o=r(183),c=r(179);e.exports={formats:c,parse:o,stringify:n}},208:function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"a",function(){return n})},250:function(e,t,r){var content=r(378);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("ef9f3f70",content,!0,{sourceMap:!1})},377:function(e,t,r){"use strict";var n=r(250);r.n(n).a},378:function(e,t,r){(e.exports=r(38)(!1)).push([e.i,".container[data-v-ed1b3710]{width:100vw;height:100vh;background:#fff}.container .content-item[data-v-ed1b3710]{display:flex;flex-direction:column;padding:0.37rem 0.61rem 0 0.59rem}.container .content-item video[data-v-ed1b3710]{width:100%}.container .content-item .video-title[data-v-ed1b3710]{color:#000;font-size:0.37rem;margin-top:0.28rem}\n",""])},434:function(e,t,r){"use strict";r.r(t);var n,o=r(208),c=(r(40),r(5)),l=r(181),f={data:function(){return{videoList:[]}},mounted:(n=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="自然拼读",e.prev=1,e.next=4,l.a.post("/Mobile/My/getQingKeVideo",{});case 4:if((r=e.sent).status){e.next=8;break}return console.log(r.info),e.abrupt("return");case 8:(t=this.videoList).push.apply(t,Object(o.a)(r.data)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[1,11]])})),function(){return n.apply(this,arguments)}),methods:{}},d=(r(377),r(19)),component=Object(d.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},e._l(e.videoList,function(t,n){return r("div",{key:n,staticClass:"content-item"},[r("p",{staticClass:"video-title"},[e._v(e._s(t.text))]),e._v(" "),r("video",{attrs:{controls:"",poster:t.image_url}},[r("source",{attrs:{src:t.video_url,type:"video/mp4"}})])])}),0)},[],!1,null,"ed1b3710",null);t.default=component.exports}}]);