(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{178:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],i=0;i<t.length;++i)for(var r=t[i],c=r.obj[r.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],v=c[f];"object"==typeof v&&null!==v&&-1===n.indexOf(v)&&(t.push({obj:c,prop:f}),n.push(v))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(o(n)){for(var r=[],c=0;c<n.length;++c)void 0!==n[c]&&r.push(n[c]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(e){return r}},encode:function(e,t,n){if(0===e.length)return e;var r="string"==typeof e?e:String(e);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<r.length;++i){var l=r.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=r.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&r.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,n){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(n&&(n.plainObjects||n.allowPrototypes)||!r.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,n)),o(t)&&o(source)?(source.forEach(function(o,i){if(r.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,n):t.push(o)}else t[i]=o}),t):Object.keys(source).reduce(function(t,o){var c=source[o];return r.call(t,o)?t[o]=e(t[o],c,n):t[o]=c,t},c)}}},179:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},182:function(e,t,n){"use strict";var r=n(178),o=n(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},d=Array.isArray,f=Array.prototype.push,v=function(e,t){f.apply(e,d(t)?t:[t])},h=Date.prototype.toISOString,m={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(object,t,n,o,c,l,filter,f,h,y,w,_,C){var x=object;if("function"==typeof filter?x=filter(t,x):x instanceof Date?x=y(x):"comma"===n&&d(x)&&(x=x.join(",")),null===x){if(o)return l&&!_?l(t,m.encoder,C):t;x=""}if("string"==typeof x||"number"==typeof x||"boolean"==typeof x||r.isBuffer(x))return l?[w(_?t:l(t,m.encoder,C))+"="+w(l(x,m.encoder,C))]:[w(t)+"="+w(String(x))];var k,j=[];if(void 0===x)return j;if(d(filter))k=filter;else{var O=Object.keys(x);k=f?O.sort(f):O}for(var i=0;i<k.length;++i){var S=k[i];c&&null===x[S]||(d(x)?v(j,e(x[S],"function"==typeof n?n(t,S):t,n,o,c,l,filter,f,h,y,w,_,C)):v(j,e(x[S],t+(h?"."+S:"["+S+"]"),n,o,c,l,filter,f,h,y,w,_,C)))}return j};e.exports=function(object,e){var t,n=object,r=function(e){if(!e)return m;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||m.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=o.formatters[n],filter=m.filter;return("function"==typeof e.filter||d(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:m.addQueryPrefix,allowDots:void 0===e.allowDots?m.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:m.charsetSentinel,delimiter:void 0===e.delimiter?m.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:m.encode,encoder:"function"==typeof e.encoder?e.encoder:m.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:m.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:m.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:m.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:m.strictNullHandling}}(e);"function"==typeof r.filter?n=(0,r.filter)("",n):d(r.filter)&&(t=r.filter);var f,h=[];if("object"!=typeof n||null===n)return"";f=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var w=l[f];t||(t=Object.keys(n)),r.sort&&t.sort(r.sort);for(var i=0;i<t.length;++i){var _=t[i];r.skipNulls&&null===n[_]||v(h,y(n[_],_,w,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var C=h.join(r.delimiter),x=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?x+="utf8=%26%2310003%3B&":x+="utf8=%E2%9C%93&"),C.length>0?x+C:""}},183:function(e,t,n){"use strict";var r=n(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},d=function(e,t,n){if(e){var r=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(r),d=l?r.slice(0,l.index):r,f=[];if(d){if(!n.plainObjects&&o.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(r))&&i<n.depth;){if(i+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),function(e,t,n){for(var r=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&n.parseArrays)o=[].concat(r);else{o=n.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);n.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(o=[])[d]=r:o[l]=r:o={0:r}}r=o}return r}(f,t,n)}};e.exports=function(e,t){var n=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){var i,n={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,v=d.split(t.delimiter,f),h=-1,m=t.charset;if(t.charsetSentinel)for(i=0;i<v.length;++i)0===v[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===v[i]?m="utf-8":"utf8=%26%2310003%3B"===v[i]&&(m="iso-8859-1"),h=i,i=v.length);for(i=0;i<v.length;++i)if(i!==h){var y,w,_=v[i],C=_.indexOf("]="),x=-1===C?_.indexOf("="):C+1;-1===x?(y=t.decoder(_,c.decoder,m),w=t.strictNullHandling?null:""):(y=t.decoder(_.slice(0,x),c.decoder,m),w=t.decoder(_.slice(x+1),c.decoder,m)),w&&t.interpretNumericEntities&&"iso-8859-1"===m&&(w=l(w)),w&&t.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(n,y)?n[y]=r.combine(n[y],w):n[y]=w}return n}(e,n):e,v=n.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var m=h[i],y=d(m,f[m],n);v=r.merge(v,y,n)}return r.compact(v)}},184:function(e,t,n){"use strict";var r=n(182),o=n(183),c=n(179);e.exports={formats:c,parse:o,stringify:r}},185:function(e,t,n){var r=n(7),o=n(20),c=n(10),l=n(186),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(e,t,n){var o={},d=c(function(){return!!l[e]()||"​"!="​"[e]()}),f=o[e]=d?t(m):l[e];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},m=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(v,"")),e};e.exports=h},186:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},187:function(e,t,n){"use strict";var r=n(3),o=n(16),c=n(21),l=n(109),d=n(57),f=n(10),v=n(41).f,h=n(58).f,m=n(9).f,y=n(185).trim,w=r.Number,_=w,C=w.prototype,x="Number"==c(n(73)(C)),k="trim"in String.prototype,j=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,c=(t=k?t.trim():y(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(x?f(function(){C.valueOf.call(n)}):"Number"!=c(n))?l(new _(j(t)),n,w):j(t)};for(var O,S=n(8)?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;S.length>E;E++)o(_,O=S[E])&&!o(w,O)&&m(w,O,h(_,O));w.prototype=C,C.constructor=w,n(11)(r,"Number",w)}},193:function(e,t,n){e.exports=n.p+"img/6446c2c.png"},209:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return r})},210:function(e,t,n){"use strict";function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",function(){return o})},214:function(e,t,n){var content=n(274);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("5664528f",content,!0,{sourceMap:!1})},273:function(e,t,n){"use strict";var r=n(214);n.n(r).a},274:function(e,t,n){t=e.exports=n(38)(!1);var r=n(180)(n(193));t.push([e.i,".top-step-bar[data-v-03a81e68] {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-03a81e68] {\n  padding: 0 0.4rem;\n}\nh1[data-v-03a81e68] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-03a81e68] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-03a81e68] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-03a81e68] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#presentation[data-v-03a81e68] {\n  overflow: auto;\n  -webkit-overflow-scrolling: auto;\n  width: 100vw;\n}\n#presentation[data-v-03a81e68]::-webkit-scrollbar {\n  display: none;\n}\n.card[data-v-03a81e68] {\n  width: 9.2rem;\n  padding: 0.3rem 0.4rem;\n  box-shadow: 0 0.026667rem 0.106667rem 0 #CCCCCC;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, 0);\n  background: #fff;\n}\n.topaction[data-v-03a81e68] {\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  color: #333333;\n  font-size: 0.346667rem;\n  margin-top: 0.8rem;\n}\n.topaction-rank[data-v-03a81e68] {\n  border-top-right-radius: 0.4rem;\n  border-bottom-right-radius: 0.4rem;\n  box-shadow: 0 0 0.4rem -0.3rem #666666;\n  background: #fff;\n}\n.topaction-rank span[data-v-03a81e68] {\n  display: inline-block;\n  width: 1.92rem;\n  line-height: 0.853333rem;\n  text-align: center;\n  padding-right: 0.133333rem;\n}\n.topaction-rule[data-v-03a81e68] {\n  border-top-left-radius: 0.4rem;\n  border-bottom-left-radius: 0.4rem;\n  box-shadow: 0 0 0.4rem -0.3rem #666666;\n  background: #fff;\n  width: 1.92rem;\n  line-height: 0.853333rem;\n  text-align: center;\n  padding-left: 0.133333rem;\n}\n.content[data-v-03a81e68] {\n  margin-top: 6.6rem;\n  text-align: center;\n}\n.content-level[data-v-03a81e68] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin-bottom: 0.3rem;\n  padding: 0 0.533333rem;\n}\n.content-level-item[data-v-03a81e68] {\n  width: 2rem;\n  height: 0.8rem;\n  border: 0.02rem solid #E6E6E6;\n  border-radius: 0.4rem;\n  color: #333333;\n  font-size: 0.346667rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content-video[data-v-03a81e68] {\n  display: flex;\n  white-space: nowrap;\n  overflow-x: scroll;\n  margin-top: 0.3rem;\n  text-align: left;\n}\n.content-video[data-v-03a81e68]::-webkit-scrollbar {\n  display: none;\n}\n.content-video-item[data-v-03a81e68] {\n  display: inline-block;\n  margin-right: 0.5rem;\n  box-sizing: content-box;\n  position: relative;\n}\n.content-video-item-video[data-v-03a81e68] {\n  width: 6.666667rem;\n  height: 3.733333rem;\n  overflow: hidden;\n  position: relative;\n}\n.content-video-item-video-pic[data-v-03a81e68] {\n  width: inherit;\n}\n.content-video-item-video-play[data-v-03a81e68] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 1.333333rem;\n  height: 1.333333rem;\n  background: url("+r+") 50% 50%/contain no-repeat;\n}\n.content-video-item-eng[data-v-03a81e68] {\n  color: #333333;\n}\n.content-video-item-text[data-v-03a81e68] {\n  white-space: normal;\n  width: 6.666667rem;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.action[data-v-03a81e68] {\n  margin: 0.3rem 0;\n  display: inline-block;\n  width: 8.133333rem;\n  height: 1.333333rem;\n}\n.action-content[data-v-03a81e68] {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  line-height: 1.333333rem;\n  border-radius: 0.7rem;\n}\n.action-content-text[data-v-03a81e68] {\n  font-size: 0.453333rem;\n  color: #fff;\n}\n.action-content-deco0[data-v-03a81e68] {\n  position: absolute;\n  top: 0.15rem;\n  left: 0.7rem;\n  width: 0.16rem;\n  height: 0.16rem;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 0.08rem;\n}\n.action-content-deco1[data-v-03a81e68] {\n  position: absolute;\n  top: 0.15rem;\n  left: 1rem;\n  width: 1.333333rem;\n  height: 0.16rem;\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 0.08rem;\n}\n.divide-title[data-v-03a81e68] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.divide-title h1[data-v-03a81e68] {\n  margin: 0 0.5rem;\n}\n.divide-decohr[data-v-03a81e68] {\n  width: 1.6rem;\n  border-bottom: 0.026667rem solid #E6E6E6;\n}\n.description[data-v-03a81e68] {\n  margin-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.description p[data-v-03a81e68] {\n  line-height: 0.586667rem;\n}\n.step[data-v-03a81e68] {\n  margin: 0.5rem 0 2.313333rem;\n  text-align: center;\n}\n.step-item[data-v-03a81e68] {\n  width: 6.666667rem;\n  display: inline-block;\n  color: #333333;\n  margin-bottom: 0.3rem;\n}\n.step-item-content[data-v-03a81e68] {\n  width: 100%;\n  line-height: 0.933333rem;\n  font-size: 0.373333rem;\n  border: 0.02rem dashed #C0C7CC;\n  border-radius: 0.5rem;\n  background: #FAFAFA;\n  margin-bottom: 0.3rem;\n}\n.step-item-deco[data-v-03a81e68] {\n  border-left: 0.2rem solid transparent;\n  border-right: 0.2rem solid transparent;\n  border-top: 0.2rem solid #333333;\n  width: 0.4rem;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.float-action[data-v-03a81e68] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  width: 100vw;\n  height: 1.866667rem;\n  box-shadow: 0 -0.026667rem 0.08rem 0 #CCCCCC;\n  text-align: center;\n}",""])},402:function(e,t,n){"use strict";n.r(t);n(42),n(40);var r=n(5),o=n(188),c=(n(111),n(110),n(108),n(209)),l=n(210),d=n(181),f=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"autoLogin",value:function(){(function(){var e=!1;"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(e=!0);return e})()&&function(){var code=(n=new RegExp("(^|&)"+"code"+"=([^&]*)(&|$)","i"),null!=(r=window.location.search.substr(1).match(n))?unescape(r[2]):null);if(!code){var e={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent(window.location.href),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(e.appid,"&redirect_uri=").concat(e.redirect_uri,"&response_type=").concat(e.response_type,"&scope=").concat(e.scope,"&state=1#wechat_redirect")}var t={code:code};d.a.get("Mobile/StudentActivity/login",{params:t}).then(function(e){console.log("code登录",e)});var n,r}()}},{key:"login",value:function(){}},{key:"register",value:function(){}}]),e}();var v,h=n(192),m=n(201),y={name:"Presentation",mixins:[n(190).default],head:function(){return{title:"兰迪英语"}},components:{"poster-modal":m.a,toast:h.a},data:function(){return{levelSelectIndex:0,steps:[],resData:null,haveWork:!1,showFloatAction:!1,centerActionBottom:0,presentationStyle:{},isClassing:!1,showPosterModal:!1}},methods:{selectLevel:function(e){this.levelSelectIndex=e},signup:function(){this.resData.is_enable?this.gotoPage("presentation-signup"):this.$refs.toast.showToast("活动已结束")},mainAction:function(){this.haveWork?this.gotoPage("presentation-signup-step5"):this.isClassing?this.signup():this.showPosterModal=!0},handleScroll:function(){window.scrollY>this.centerActionBottom?this.showFloatAction=!0:this.showFloatAction=!1},gotoRegister:function(){window.location="https://www.landi.com/Api/FloorPage/index?from=zcyl&param=_bCOvjKLmiST2qHEDcTOScntrYF3wIzwj_ceg"},srcType:function(e){return e.videos.length>0?"video":e.audios.length>0?"audio":"pic"},getSrc:function(e){return e.videos.length>0?e.videos[0].url:e.audios.length>0?e.audios[0].url:void 0},playFn:function(e){var t=document.getElementById(e);videoPlayerEvent(t)}},created:function(){(new f).autoLogin()},mounted:(v=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.steps=o.INDEX_STEPS,t=this.$route.query.activity_id,e.next=4,d.a.get("".concat(o.API.ACTIVITY_DETAIL,"?activity_id=").concat(t));case 4:return(n=e.sent).status?(this.resData=n.data,document.title=this.resData.name,this.presentationStyle.background="url(".concat(this.resData.background_pic_url,") 0 0 / contain local no-repeat"),this.presentationStyle.backgroundColor="#fff"):this.$refs.toast.showToast(n.info),e.next=8,d.a.get("".concat(o.API.MY_WORK,"?activity_id=").concat(t));case 8:(r=e.sent).status?(r.data.id&&(this.haveWork=!0),this.isClassing=r.data.is_classing):this.$refs.toast.showToast(r.info),this.centerActionBottom=this.$refs.centerAction.getBoundingClientRect().bottom,window.addEventListener("scroll",this.handleScroll);case 12:case"end":return e.stop()}},e,this)})),function(){return v.apply(this,arguments)})},w=(n(273),n(19)),component=Object(w.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:e.presentationStyle,attrs:{id:"presentation"}},[e.resData?n("div",[n("div",{staticClass:"topaction"},[n("div",{staticClass:"topaction-rank",on:{click:function(t){return e.gotoPage("presentation-rank")}}},[e.haveWork?n("span",[e._v("点赞排行")]):e._e()]),e._v(" "),n("div",{staticClass:"topaction-rule",on:{click:function(t){return e.gotoPage("presentation-rule")}}},[e._v("活动规则")])]),e._v(" "),n("div",{staticClass:"content card"},[n("h3",[e._v("报名参赛，分享更多宝贝高光时刻")]),e._v(" "),n("div",{ref:"centerAction",staticClass:"action",on:{click:e.mainAction}},[n("div",{staticClass:"action-content",style:{background:e.resData.button_color}},[n("div",{staticClass:"action-content-text"},[e._v(e._s(e.haveWork?"查看我的作品":"我要报名参赛"))]),e._v(" "),n("div",{staticClass:"action-content-deco0"}),e._v(" "),n("div",{staticClass:"action-content-deco1"})])]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"content-level"},e._l(e.resData.combinations,function(t,r){return n("div",{key:t.id,staticClass:"content-level-item",style:e.levelSelectIndex==r?{background:e.resData.button_color,color:"#fff",border:"none"}:{},on:{click:function(t){return e.selectLevel(r)}}},[e._v(e._s(t.name))])}),0),e._v(" "),n("h3",[e._v("以下2个演讲主题，任意选择其中之一报名即可")]),e._v(" "),n("div",{staticClass:"content-video"},e._l(e.resData.combinations[e.levelSelectIndex].topics,function(t,r){return n("div",{key:t.id,staticClass:"content-video-item"},["video"==e.srcType(t)||"audio"==e.srcType(t)?n("video",{key:r,staticStyle:{display:"none"},attrs:{id:"video"+r,controls:"",preload:"auto",src:e.getSrc(t)}}):e._e(),e._v(" "),n("div",{staticClass:"content-video-item-video",on:{click:function(t){return e.playFn("video"+r)}}},[t.videos.length>0||t.audios.length>0?n("div",{staticClass:"content-video-item-video-play"}):e._e(),e._v(" "),t.videos.length>0?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:t.videos[0].pic_url}}):e._e(),e._v(" "),t.audios.length>0&&0==t.videos.length?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:t.audios[0].pic_url}}):e._e(),e._v(" "),t.pics.length>0&&0==t.videos.length&&0==t.audios.length?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:t.pics[0]}}):e._e()]),e._v(" "),n("h3",{staticClass:"content-video-item-eng content-video-item-text"},[e._v(e._s(t.en_topic_name))]),e._v(" "),n("h3",{staticClass:"content-video-item-chn content-video-item-text"},[e._v(e._s(t.cn_topic_name))])])}),0)]),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"step card"},[e._m(2),e._v(" "),e._l(e.steps,function(t,r){return n("div",{key:r,staticClass:"step-item"},[n("div",{staticClass:"step-item-content"},[e._v(e._s(t))]),e._v(" "),r+1<e.steps.length?n("div",{staticClass:"step-item-deco"}):e._e()])})],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showFloatAction,expression:"showFloatAction"}],staticClass:"float-action"},[n("div",{staticClass:"action",on:{click:e.mainAction}},[n("div",{staticClass:"action-content",style:{background:e.resData.button_color}},[n("div",{staticClass:"action-content-text"},[e._v(e._s(e.haveWork?"查看我的作品":"我要报名参赛"))]),e._v(" "),n("div",{staticClass:"action-content-deco0"}),e._v(" "),n("div",{staticClass:"action-content-deco1"})])])])]):e._e(),e._v(" "),n("toast",{ref:"toast"}),e._v(" "),n("poster-modal",{attrs:{poster:0},on:{click:e.gotoRegister,changeShow:e.gotoRegister},model:{value:e.showPosterModal,callback:function(t){e.showPosterModal=t},expression:"showPosterModal"}})],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"divide-title"},[t("div",{staticClass:"divide-decohr"}),this._v(" "),t("h1",{staticStyle:{color:"#333333"}},[this._v("参赛作品样板")]),this._v(" "),t("div",{staticClass:"divide-decohr"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"description card"},[t("div",{staticClass:"divide-title"},[t("div",{staticClass:"divide-decohr"}),this._v(" "),t("h1",{staticStyle:{color:"#333333"}},[this._v("兰迪简介")]),this._v(" "),t("div",{staticClass:"divide-decohr"})]),this._v(" "),t("p",[this._v("兰迪少儿英语是专注为4-12岁少儿提供优质的英语学习内容与体验的在线外教小班课教育品牌，引进牛津大学出版社原版最新美式英语 Starlight教材，优选“英美加”等英语为母语国家的外教。")]),this._v(" "),t("p",[this._v("以“同伴学习”为教学理念，营造同伴竞争和同伴合作的场景，激发孩子学习英语的主动性，有效提升孩子的语言、思维及社交能力，让更多孩自如对话世界。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"divide-title"},[t("div",{staticClass:"divide-decohr"}),this._v(" "),t("h1",{staticStyle:{color:"#333333"}},[this._v("活动步骤")]),this._v(" "),t("div",{staticClass:"divide-decohr"})])}],!1,null,"03a81e68",null);t.default=component.exports}}]);