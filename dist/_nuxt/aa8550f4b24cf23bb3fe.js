(window.webpackJsonp=window.webpackJsonp||[]).push([[22,18],{181:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce((function(e,t){return e[t]=source[t],e}),e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],m=c[d];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(t.push({obj:c,prop:d}),r.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach((function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o})),t):Object.keys(source).reduce((function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t}),c)}}},182:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,c=r(181),l={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=c.assign({default:l.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},l)},183:function(e,t,r){"use strict";r(14),r(59),r(76);var n=r(31),o=r.n(n),c=r(187),l=r.n(c);console.log("process.env.ENV_API","https://www.landi.com/");var f=o.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return l.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});f.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),f.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e.data):Promise.reject(e)}),(function(e){if(e.response)switch(e.response.status){case 401:break;case 404:e.message="请求错误,未找到该资源";break;case 500:e.message="服务器端出错";break;default:e.message="连接错误".concat(e.response.status)}return Promise.reject(e)})),t.a=f},185:function(e,t,r){"use strict";var n=r(181),o=r(182),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,m=function(e,t){d.apply(e,f(t)?t:[t])},h=Date.prototype.toISOString,y=o.default,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:y,formatter:o.formatters[y],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},w=function e(object,t,r,o,c,l,filter,d,h,y,w,j,O){var x,N=object;if("function"==typeof filter?N=filter(t,N):N instanceof Date?N=y(N):"comma"===r&&f(N)&&(N=N.join(",")),null===N){if(o)return l&&!j?l(t,v.encoder,O,"key"):t;N=""}if("string"==typeof(x=N)||"number"==typeof x||"boolean"==typeof x||"symbol"==typeof x||"bigint"==typeof x||n.isBuffer(N))return l?[w(j?t:l(t,v.encoder,O,"key"))+"="+w(l(N,v.encoder,O,"value"))]:[w(t)+"="+w(String(N))];var k,A=[];if(void 0===N)return A;if(f(filter))k=filter;else{var P=Object.keys(N);k=d?P.sort(d):P}for(var i=0;i<k.length;++i){var D=k[i];c&&null===N[D]||(f(N)?m(A,e(N[D],"function"==typeof r?r(t,D):t,r,o,c,l,filter,d,h,y,w,j,O)):m(A,e(N[D],t+(h?"."+D:"["+D+"]"),r,o,c,l,filter,d,h,y,w,j,O)))}return A};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=v.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):f(n.filter)&&(t=n.filter);var d,h=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var y=l[d];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var j=t[i];n.skipNulls&&null===r[j]||m(h,w(r[j],j,y,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var O=h.join(n.delimiter),x=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?x+="utf8=%26%2310003%3B&":x+="utf8=%E2%9C%93&"),O.length>0?x+O:""}},186:function(e,t,r){"use strict";var n=r(181),o=Object.prototype.hasOwnProperty,c=Array.isArray,l={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},f=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},d=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=r.depth>0&&/(\[[^[\]]*])/.exec(n),f=l?n.slice(0,l.index):n,d=[];if(f){if(!r.plainObjects&&o.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;r.depth>0&&null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(o=[])[f]=n:o[l]=n:o={0:n}}n=o}return n}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return l;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?l.charset:e.charset;return{allowDots:void 0===e.allowDots?l.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:l.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:l.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:l.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:l.comma,decoder:"function"==typeof e.decoder?e.decoder:l.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:l.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:l.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:l.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:l.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:l.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:l.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var m="string"==typeof e?function(e,t){var i,r={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,m=t.parameterLimit===1/0?void 0:t.parameterLimit,h=d.split(t.delimiter,m),y=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<h.length;++i)0===h[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[i]?v="utf-8":"utf8=%26%2310003%3B"===h[i]&&(v="iso-8859-1"),y=i,i=h.length);for(i=0;i<h.length;++i)if(i!==y){var w,j,O=h[i],x=O.indexOf("]="),N=-1===x?O.indexOf("="):x+1;-1===N?(w=t.decoder(O,l.decoder,v,"key"),j=t.strictNullHandling?null:""):(w=t.decoder(O.slice(0,N),l.decoder,v,"key"),j=t.decoder(O.slice(N+1),l.decoder,v,"value")),j&&t.interpretNumericEntities&&"iso-8859-1"===v&&(j=f(j)),j&&"string"==typeof j&&t.comma&&j.indexOf(",")>-1&&(j=j.split(",")),O.indexOf("[]=")>-1&&(j=c(j)?[j]:j),o.call(r,w)?r[w]=n.combine(r[w],j):r[w]=j}return r}(e,r):e,h=r.plainObjects?Object.create(null):{},y=Object.keys(m),i=0;i<y.length;++i){var v=y[i],w=d(v,m[v],r);h=n.merge(h,w,r)}return n.compact(h)}},187:function(e,t,r){"use strict";var n=r(185),o=r(186),c=r(182);e.exports={formats:c,parse:o,stringify:n}},209:function(e,t,r){"use strict";r.r(t),r.d(t,"API",(function(){return n}));var n={WX_SHARE:"/Mobile/JiXiongActivity/share",MY_BRUIN:"/Mobile/JiXiongActivity/my",BRUIN_PMD:"/Mobile/JiXiongActivity/pmd",GRAD_BRUIN:"/Mobile/JiXiongActivity/grab",BRUIN_LOGIN:"/Mobile/JiXiongActivity/login",ACTIVITY_DETAIL:"/Mobile/JiXiongActivity/detail"}},256:function(e,t,r){e.exports=r.p+"img/c8d8c61.png"},264:function(e,t,r){var content=r(396);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(42).default)("953ff810",content,!0,{sourceMap:!1})},394:function(e,t,r){e.exports=r.p+"img/8dedf22.png"},395:function(e,t,r){"use strict";var n=r(264);r.n(n).a},396:function(e,t,r){(t=r(41)(!1)).push([e.i,".bruin-rule[data-v-40fe110d]{overflow:auto;-webkit-overflow-scrolling:auto;width:100vw}.bruin-rule-img[data-v-40fe110d]{width:100vw}.bruin-rule .rule-marquee[data-v-40fe110d]{height:0.66667rem;width:100%;background:#000;opacity:0.5;font-size:0.37333rem;font-weight:400;color:#fff;text-align:center;padding-top:0.06667rem;position:absolute;top:0}.bruin-rule .home-header[data-v-40fe110d]{padding-top:1.02667rem;width:100%;display:flex;align-items:center;justify-content:space-between;position:absolute;top:0;z-index:1000}.bruin-rule .home-header-back[data-v-40fe110d]{width:1.49333rem;height:0.94667rem}.bruin-rule .home-header-right[data-v-40fe110d]{display:flex;position:relative}.bruin-rule .home-header-right-work[data-v-40fe110d]{width:1.28rem;height:1.25333rem;margin-right:0.24rem}.bruin-rule .home-header-right-times[data-v-40fe110d]{width:0.4rem;height:0.4rem;background:#ff3600;border-radius:50%;font-weight:600;color:#fff;display:flex;align-items:center;justify-content:center;position:absolute;top:-0.08rem;right:0.26667rem}\n",""]),e.exports=t},598:function(e,t,r){"use strict";r.r(t);r(30);var n,o,c=r(3),l=r(209),f=r(183),d={name:"rule",head:function(){return{title:"集五熊，赢千万课时"}},data:function(){return{pmdInfo:"",curAwardBruinNum:0}},methods:{goToHome:function(){window.location="".concat("https://www.landi.com/static-web/mobile","/bruin/")},goToMyBruin:function(){window.location="".concat("https://www.landi.com/static-web/mobile","/bruin/my_bruin/")},getBruinPMD:(o=Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=4,f.a.get("".concat(l.API.BRUIN_PMD,"?activity_id=").concat(1));case 4:if((t=e.sent).status){e.next=8;break}return console.log(t.info),e.abrupt("return");case 8:this.pmdInfo=t.data||"0人已集齐，2019年1月1日18：00开奖",e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),console.log(res),e.abrupt("return");case 15:case"end":return e.stop()}}),e,this,[[0,11]])}))),function(){return o.apply(this,arguments)}),getMyBruinData:(n=Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,f.a.get("".concat(l.API.MY_BRUIN,"?activity_id=").concat(1));case 4:if((t=e.sent).status){e.next=8;break}return console.log(t.info),e.abrupt("return");case 8:this.curAwardBruinNum=t.data?t.data.lucky_num:0,e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return");case 15:case"end":return e.stop()}}),e,this,[[1,11]])}))),function(){return n.apply(this,arguments)})},created:function(){},mounted:function(){this.getBruinPMD(),this.getMyBruinData()}},m=(r(395),r(20)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bruin-rule"},[n("div",{staticClass:"rule-marquee"},[e._v("\n    "+e._s(e.pmdInfo)+"\n  ")]),e._v(" "),n("img",{staticClass:"bruin-rule-img",attrs:{src:"https://qn-static.landi.com/uploadtoolb262a0e0a49df29417106c9db65b63c7.png"}}),e._v(" "),n("div",{staticClass:"home-header"},[n("img",{staticClass:"home-header-back",attrs:{src:r(394)},on:{click:e.goToHome}}),e._v(" "),n("div",{staticClass:"home-header-right"},[n("img",{staticClass:"home-header-right-work",attrs:{src:r(256)},on:{click:e.goToMyBruin}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.curAwardBruinNum,expression:"curAwardBruinNum == 0 ? false : true"}],staticClass:"home-header-right-times"},[n("div",[e._v(e._s(e.curAwardBruinNum))])])])])])}),[],!1,null,"40fe110d",null);t.default=component.exports}}]);