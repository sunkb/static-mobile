(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{178:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var t=[],i=0;i<256;++i)t.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return t}(),l=function(source,t){for(var e=t&&t.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(e[i]=source[i]);return e};t.exports={arrayToObject:l,assign:function(t,source){return Object.keys(source).reduce(function(t,e){return t[e]=source[e],t},t)},combine:function(a,b){return[].concat(a,b)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],i=0;i<e.length;++i)for(var r=e[i],c=r.obj[r.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],v=c[f];"object"==typeof v&&null!==v&&-1===n.indexOf(v)&&(e.push({obj:c,prop:f}),n.push(v))}return function(t){for(;t.length>1;){var e=t.pop(),n=e.obj[e.prop];if(o(n)){for(var r=[],c=0;c<n.length;++c)void 0!==n[c]&&r.push(n[c]);e.obj[e.prop]=r}}}(e),t},decode:function(t,e,n){var r=t.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(t){return r}},encode:function(t,e,n){if(0===t.length)return t;var r="string"==typeof t?t:String(t);if("iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var o="",i=0;i<r.length;++i){var l=r.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=r.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&r.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(t){return!(!t||"object"!=typeof t)&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function t(e,source,n){if(!source)return e;if("object"!=typeof source){if(o(e))e.push(source);else{if(!e||"object"!=typeof e)return[e,source];(n&&(n.plainObjects||n.allowPrototypes)||!r.call(Object.prototype,source))&&(e[source]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(source);var c=e;return o(e)&&!o(source)&&(c=l(e,n)),o(e)&&o(source)?(source.forEach(function(o,i){if(r.call(e,i)){var c=e[i];c&&"object"==typeof c&&o&&"object"==typeof o?e[i]=t(c,o,n):e.push(o)}else e[i]=o}),e):Object.keys(source).reduce(function(e,o){var c=source[o];return r.call(e,o)?e[o]=t(e[o],c,n):e[o]=c,e},c)}}},179:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},182:function(t,e,n){"use strict";var r=n(178),o=n(179),c=Object.prototype.hasOwnProperty,l={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},d=Array.isArray,f=Array.prototype.push,v=function(t,e){f.apply(t,d(e)?e:[e])},m=Date.prototype.toISOString,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(t){return m.call(t)},skipNulls:!1,strictNullHandling:!1},y=function t(object,e,n,o,c,l,filter,f,m,y,w,_,x){var C=object;if("function"==typeof filter?C=filter(e,C):C instanceof Date?C=y(C):"comma"===n&&d(C)&&(C=C.join(",")),null===C){if(o)return l&&!_?l(e,h.encoder,x):e;C=""}if("string"==typeof C||"number"==typeof C||"boolean"==typeof C||r.isBuffer(C))return l?[w(_?e:l(e,h.encoder,x))+"="+w(l(C,h.encoder,x))]:[w(e)+"="+w(String(C))];var k,E=[];if(void 0===C)return E;if(d(filter))k=filter;else{var j=Object.keys(C);k=f?j.sort(f):j}for(var i=0;i<k.length;++i){var O=k[i];c&&null===C[O]||(d(C)?v(E,t(C[O],"function"==typeof n?n(e,O):e,n,o,c,l,filter,f,m,y,w,_,x)):v(E,t(C[O],e+(m?"."+O:"["+O+"]"),n,o,c,l,filter,f,m,y,w,_,x)))}return E};t.exports=function(object,t){var e,n=object,r=function(t){if(!t)return h;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var e=t.charset||h.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if(void 0!==t.format){if(!c.call(o.formatters,t.format))throw new TypeError("Unknown format option provided.");n=t.format}var r=o.formatters[n],filter=h.filter;return("function"==typeof t.filter||d(t.filter))&&(filter=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:h.addQueryPrefix,allowDots:void 0===t.allowDots?h.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:h.charsetSentinel,delimiter:void 0===t.delimiter?h.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:h.encode,encoder:"function"==typeof t.encoder?t.encoder:h.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:h.encodeValuesOnly,filter:filter,formatter:r,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:h.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:h.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:h.strictNullHandling}}(t);"function"==typeof r.filter?n=(0,r.filter)("",n):d(r.filter)&&(e=r.filter);var f,m=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in l?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var w=l[f];e||(e=Object.keys(n)),r.sort&&e.sort(r.sort);for(var i=0;i<e.length;++i){var _=e[i];r.skipNulls&&null===n[_]||v(m,y(n[_],_,w,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.formatter,r.encodeValuesOnly,r.charset))}var x=m.join(r.delimiter),C=!0===r.addQueryPrefix?"?":"";return r.charsetSentinel&&("iso-8859-1"===r.charset?C+="utf8=%26%2310003%3B&":C+="utf8=%E2%9C%93&"),x.length>0?C+x:""}},183:function(t,e,n){"use strict";var r=n(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})},d=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(r),d=l?r.slice(0,l.index):r,f=[];if(d){if(!n.plainObjects&&o.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(r))&&i<n.depth;){if(i+=1,!n.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+r.slice(l.index)+"]"),function(t,e,n){for(var r=e,i=t.length-1;i>=0;--i){var o,c=t[i];if("[]"===c&&n.parseArrays)o=[].concat(r);else{o=n.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);n.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(o=[])[d]=r:o[l]=r:o={0:r}}r=o}return r}(f,e,n)}};t.exports=function(t,e){var n=function(t){if(!t)return c;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?c.charset:t.charset;return{allowDots:void 0===t.allowDots?c.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:c.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:c.comma,decoder:"function"==typeof t.decoder?t.decoder:c.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:c.delimiter,depth:"number"==typeof t.depth?t.depth:c.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:c.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:c.strictNullHandling}}(e);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof t?function(t,e){var i,n={},d=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,f=e.parameterLimit===1/0?void 0:e.parameterLimit,v=d.split(e.delimiter,f),m=-1,h=e.charset;if(e.charsetSentinel)for(i=0;i<v.length;++i)0===v[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===v[i]?h="utf-8":"utf8=%26%2310003%3B"===v[i]&&(h="iso-8859-1"),m=i,i=v.length);for(i=0;i<v.length;++i)if(i!==m){var y,w,_=v[i],x=_.indexOf("]="),C=-1===x?_.indexOf("="):x+1;-1===C?(y=e.decoder(_,c.decoder,h),w=e.strictNullHandling?null:""):(y=e.decoder(_.slice(0,C),c.decoder,h),w=e.decoder(_.slice(C+1),c.decoder,h)),w&&e.interpretNumericEntities&&"iso-8859-1"===h&&(w=l(w)),w&&e.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(n,y)?n[y]=r.combine(n[y],w):n[y]=w}return n}(t,n):t,v=n.plainObjects?Object.create(null):{},m=Object.keys(f),i=0;i<m.length;++i){var h=m[i],y=d(h,f[h],n);v=r.merge(v,y,n)}return r.compact(v)}},184:function(t,e,n){"use strict";var r=n(182),o=n(183),c=n(179);t.exports={formats:c,parse:o,stringify:r}},185:function(t,e,n){var r=n(7),o=n(20),c=n(10),l=n(186),d="["+l+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),m=function(t,e,n){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=d?e(h):l[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=m},186:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},187:function(t,e,n){"use strict";var r=n(3),o=n(16),c=n(21),l=n(109),d=n(57),f=n(10),v=n(41).f,m=n(58).f,h=n(9).f,y=n(185).trim,w=r.Number,_=w,x=w.prototype,C="Number"==c(n(74)(x)),k="trim"in String.prototype,E=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=k?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(C?f(function(){x.valueOf.call(n)}):"Number"!=c(n))?l(new _(E(e)),n,w):E(e)};for(var j,O=n(8)?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;O.length>S;S++)o(_,j=O[S])&&!o(w,j)&&h(w,j,m(_,j));w.prototype=x,x.constructor=w,n(11)(r,"Number",w)}},188:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(108);function r(t){return t.webkitEnterFullScreen?"webkitEnterFullScreen":!!t.webkitRequestFullScreen&&"webkitRequestFullScreen"}var o=function(t){var video=t,e=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var t=r(video);video[t]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play(),video.addEventListener("play",function(){var t=r(video);video[t]()}),video.addEventListener("webkitfullscreenchange",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(t){e.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))}},193:function(t,e,n){t.exports=n.p+"img/6446c2c.png"},210:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},211:function(t,e,n){"use strict";function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return o})},215:function(t,e,n){var content=n(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("23241b32",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";var r=n(215);n.n(r).a},275:function(t,e,n){e=t.exports=n(38)(!1);var r=n(180)(n(193));e.push([t.i,".top-step-bar[data-v-216137f0] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0;\n  height: 2.2rem;\n}\n.page-content[data-v-216137f0] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-216137f0] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\nh1[data-v-216137f0] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-216137f0] {\n  font-size: 0.37333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-216137f0] {\n  font-size: 0.34667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-216137f0] {\n  font-size: 0.34667rem;\n  color: #808080;\n}\n.title-content-space[data-v-216137f0] {\n  margin-bottom: -0.1rem;\n}\n.level2text[data-v-216137f0] {\n  margin-top: 0.1rem;\n  margin-bottom: 0.2rem;\n}\n.chntext[data-v-216137f0] {\n  font-size: 0.32rem;\n}\n#presentation[data-v-216137f0] {\n  overflow: auto;\n  -webkit-overflow-scrolling: auto;\n  width: 100vw;\n}\n#presentation[data-v-216137f0]::-webkit-scrollbar {\n    display: none;\n}\n.card[data-v-216137f0] {\n  width: 9.2rem;\n  padding: 0.3rem 0.56rem;\n  box-shadow: 0 0.02667rem 0.10667rem 0 #CCCCCC;\n  position: relative;\n  left: 50%;\n  transform: translate(-50%, 0);\n  background: #fff;\n}\n.topaction[data-v-216137f0] {\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  color: #333333;\n  font-size: 0.34667rem;\n  margin-top: 0.8rem;\n}\n.topaction-rank[data-v-216137f0] {\n    border-top-right-radius: 0.4rem;\n    border-bottom-right-radius: 0.4rem;\n    box-shadow: 0 0 0.4rem -0.3rem #666666;\n    background: #fff;\n}\n.topaction-rank span[data-v-216137f0] {\n      display: inline-block;\n      width: 1.92rem;\n      line-height: 0.85333rem;\n      text-align: center;\n      padding-right: 0.13333rem;\n}\n.topaction-rule[data-v-216137f0] {\n    border-top-left-radius: 0.4rem;\n    border-bottom-left-radius: 0.4rem;\n    box-shadow: 0 0 0.4rem -0.3rem #666666;\n    background: #fff;\n    width: 1.92rem;\n    line-height: 0.85333rem;\n    text-align: center;\n    padding-left: 0.13333rem;\n}\n.content[data-v-216137f0] {\n  margin-top: 6.6rem;\n  text-align: center;\n}\n.content-level[data-v-216137f0] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.3rem;\n}\n.content-level-item[data-v-216137f0] {\n      width: 2rem;\n      height: 0.8rem;\n      border: 0.02rem solid #E6E6E6;\n      border-radius: 0.4rem;\n      color: #333333;\n      font-size: 0.34667rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-right: 0.26667rem;\n}\n.content-level-item[data-v-216137f0]:last-child {\n        margin-right: 0;\n}\n.content-video[data-v-216137f0] {\n    display: flex;\n    white-space: nowrap;\n    overflow-x: scroll;\n    margin-top: 0.3rem;\n    text-align: left;\n}\n.content-video[data-v-216137f0]::-webkit-scrollbar {\n      display: none;\n}\n.content-video-item[data-v-216137f0] {\n      display: inline-block;\n      margin-right: 0.5rem;\n      box-sizing: content-box;\n      position: relative;\n}\n.content-video-item-video[data-v-216137f0] {\n        width: 6.4rem;\n        height: 4.8rem;\n        overflow: hidden;\n        position: relative;\n}\n.content-video-item-video-pic[data-v-216137f0] {\n          width: inherit;\n}\n.content-video-item-video-play[data-v-216137f0] {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%);\n          width: 1.01333rem;\n          height: 1.01333rem;\n          background: url("+r+") 50% 50%/contain no-repeat;\n}\n.content-video-item-eng[data-v-216137f0] {\n        color: #333333;\n        max-height: 0.74667rem;\n        box-sizing: content-box;\n}\n.content-video-item-chn[data-v-216137f0] {\n        padding-top: 0.2rem;\n        margin-top: -0.13333rem;\n}\n.content-video-item-text[data-v-216137f0] {\n        white-space: normal;\n        width: 6.4rem;\n        display: -webkit-box;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        overflow: hidden;\n}\n.action[data-v-216137f0] {\n  margin: 0.22rem 0 0.8rem;\n  display: inline-block;\n  width: 8.13333rem;\n  height: 1.33333rem;\n}\n.action-content[data-v-216137f0] {\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    line-height: 1.33333rem;\n    border-radius: 0.7rem;\n}\n.action-content-text[data-v-216137f0] {\n      font-size: 0.45333rem;\n      color: #fff;\n      font-weight: bold;\n}\n.action-content-deco0[data-v-216137f0] {\n      position: absolute;\n      top: 0.15rem;\n      left: 0.7rem;\n      width: 0.16rem;\n      height: 0.16rem;\n      background: rgba(255, 255, 255, 0.4);\n      border-radius: 0.08rem;\n}\n.action-content-deco1[data-v-216137f0] {\n      position: absolute;\n      top: 0.15rem;\n      left: 1rem;\n      width: 1.33333rem;\n      height: 0.16rem;\n      background: rgba(255, 255, 255, 0.4);\n      border-radius: 0.08rem;\n}\n.divide-title[data-v-216137f0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 0.53333rem;\n}\n.divide-title-space[data-v-216137f0] {\n    margin-top: 0.26667rem;\n}\n.divide-title-text[data-v-216137f0] {\n    margin: 0 0.5rem;\n    font-size: 0.37333rem;\n    color: #333333;\n    font-weight: bold;\n    font-family: MicrosoftYaHei-Bold;\n}\n.divide-decohr[data-v-216137f0] {\n  width: 1.6rem;\n  border-bottom: 0.01333rem solid #E6E6E6;\n}\n.description[data-v-216137f0] {\n  margin-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.description p[data-v-216137f0] {\n    line-height: 0.58667rem;\n}\n.step[data-v-216137f0] {\n  margin: 0.5rem 0 2.31333rem;\n  text-align: center;\n}\n.step-item[data-v-216137f0] {\n    width: 6.66667rem;\n    display: inline-block;\n    color: #333333;\n    margin-bottom: 0.3rem;\n}\n.step-item-content[data-v-216137f0] {\n      width: 100%;\n      line-height: 0.93333rem;\n      font-size: 0.37333rem;\n      border: 0.02rem dashed #C0C7CC;\n      border-radius: 0.5rem;\n      background: #FAFAFA;\n      margin-bottom: 0.3rem;\n}\n.step-item-deco[data-v-216137f0] {\n      border-left: 0.2rem solid transparent;\n      border-right: 0.2rem solid transparent;\n      border-top: 0.2rem solid #333333;\n      width: 0.4rem;\n      position: relative;\n      left: 50%;\n      transform: translateX(-50%);\n}\n.float-action[data-v-216137f0] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  background: #fff;\n  width: 100vw;\n  height: 1.86667rem;\n  box-shadow: 0 -0.02667rem 0.08rem 0 #CCCCCC;\n  text-align: center;\n}\n.content-title[data-v-216137f0] {\n  margin-top: 0.26667rem;\n}\n",""])},404:function(t,e,n){"use strict";n.r(e);n(73),n(42),n(40);var r=n(5),o=n(190),c=(n(111),n(110),n(108),n(59),n(210)),l=n(211),d=n(181),f=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"autoLogin",value:function(){(function(){var t=!1;"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)&&(t=!0);return t})()&&function(){var code=(n=new RegExp("(^|&)"+"code"+"=([^&]*)(&|$)","i"),null!=(r=window.location.search.substr(1).match(n))?unescape(r[2]):null);if(!code){var t={appid:"wx575385af6b09a6e0",redirect_uri:encodeURIComponent(window.location.href),response_type:"code",scope:"snsapi_base"};window.location.replace("https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(t.appid,"&redirect_uri=").concat(t.redirect_uri,"&response_type=").concat(t.response_type,"&scope=").concat(t.scope,"&state=1#wechat_redirect"))}var e={code:code};d.a.get("Mobile/StudentActivity/login",{params:e}).then(function(t){console.log("code登录",t)}).catch(function(t){console.log("错误",t)});var n,r}()}},{key:"login",value:function(){}},{key:"register",value:function(){}}]),t}();var v,m=n(195),h=n(202),y=n(192),w=n(188);function _(t,e){var n=e.split("?")[0],r=[],o=-1!==e.indexOf("?")?e.split("?")[1]:"";if(""!==o){for(var i=(r=o.split("&")).length-1;i>=0;i-=1)r[i].split("=")[0]===t&&r.splice(i,1);n=n+"?"+r.join("&")}return n}var x={name:"Presentation",mixins:[y.default],head:function(){return{title:"兰迪英语"}},components:{"poster-modal":h.a,toast:m.a},data:function(){return{levelSelectIndex:0,steps:[],resData:null,haveWork:!1,showFloatAction:!1,centerActionBottom:0,presentationStyle:{},isClassing:!1,showPosterModal:!1,isLogin:!0}},methods:{selectLevel:function(t){this.levelSelectIndex=t,this.$refs["content-video"].scroll(0,0)},signup:function(){this.resData.is_enable?this.gotoPage("presentation-signup"):this.$refs.toast.showToast("活动已结束")},mainAction:function(){if(!this.isLogin){var t=window.location.href;t=_("code",t),console.log("code",t),t=_("state",t),console.log("state",t),t=encodeURIComponent(t),console.log("loginUrl",t);var e="https://www.landi.com/Mobile/Login/index?redirect_url="+t;return console.log("loginUrl",e),void(window.location.href=e)}this.haveWork?window.location="".concat("https://www.landi.com/static-web/mobile","/presentation/signup/step5/?activity_id=").concat(this.$route.query.activity_id):this.isClassing?this.signup():this.showPosterModal=!0},handleScroll:function(){window.scrollY>this.centerActionBottom?this.showFloatAction=!0:this.showFloatAction=!1},gotoRegister:function(){window.location="https://www.landi.com/Api/FloorPage/index?from=zcyl&param=_bCOvjKLmiST2qHEDcTOScntrYF3wIzwj_ceg"},srcType:function(t){return t.videos.length>0?"video":t.audios.length>0?"audio":"pic"},getSrc:function(t){return t.videos.length>0?t.videos[0].url:t.audios.length>0?t.audios[0].url:void 0},playFn:function(t){var e=document.getElementById(t);Object(w.a)(e)}},created:function(){(new f).autoLogin()},mounted:(v=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.steps=o.INDEX_STEPS,e=this.$route.query.activity_id,t.next=4,d.a.get("".concat(o.API.ACTIVITY_DETAIL,"?activity_id=").concat(e));case 4:return(n=t.sent).status?(this.resData=n.data,document.title=this.resData.name,this.presentationStyle.background="url(".concat(this.resData.background_pic_url,") 0 0 / contain local no-repeat"),this.presentationStyle.backgroundColor="#fff"):this.$refs.toast.showToast(n.info),t.prev=6,t.next=9,d.a.get("".concat(o.API.MY_WORK,"?activity_id=").concat(e));case 9:(r=t.sent).status?(r.data.id&&(this.haveWork=!0),this.isClassing=r.data.is_classing):this.$refs.toast.showToast(r.info),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(6),console.log(t.t0),401===t.t0.response.status&&(this.isLogin=!1);case 17:this.centerActionBottom=this.$refs.centerAction.getBoundingClientRect().bottom,window.addEventListener("scroll",this.handleScroll);case 19:case"end":return t.stop()}},t,this,[[6,13]])})),function(){return v.apply(this,arguments)})},C=(n(274),n(19)),component=Object(C.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.presentationStyle,attrs:{id:"presentation"}},[t.resData?n("div",[n("div",{staticClass:"topaction"},[n("div",{staticClass:"topaction-rank",on:{click:function(e){return t.gotoPageWithHistory("presentation-rank")}}},[t.haveWork?n("span",[t._v("点赞排行")]):t._e()]),t._v(" "),n("div",{staticClass:"topaction-rule",on:{click:function(e){return t.gotoPageWithHistory("presentation-rule")}}},[t._v("活动规则")])]),t._v(" "),n("div",{staticClass:"content card"},[n("h3",{staticClass:"content-title"},[t._v("报名参赛，分享更多宝贝高光时刻")]),t._v(" "),n("div",{ref:"centerAction",staticClass:"action",on:{click:t.mainAction}},[n("div",{staticClass:"action-content",style:{background:t.resData.button_color}},[n("div",{staticClass:"action-content-text"},[t._v(t._s(t.haveWork?"查看我的作品":"我要报名参赛"))]),t._v(" "),n("div",{staticClass:"action-content-deco0"}),t._v(" "),n("div",{staticClass:"action-content-deco1"})])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"content-level"},t._l(t.resData.combinations,function(e,r){return n("div",{key:e.id,staticClass:"content-level-item",style:t.levelSelectIndex==r?{background:t.resData.button_color,color:"#fff",border:"none"}:{},on:{click:function(e){return t.selectLevel(r)}}},[t._v(t._s(e.name))])}),0),t._v(" "),n("h3",[t._v("以下演讲主题，任意选择其中之一即可")]),t._v(" "),n("div",{ref:"content-video",staticClass:"content-video"},t._l(t.resData.combinations[t.levelSelectIndex].topics,function(e,r){return n("div",{key:e.id,staticClass:"content-video-item"},["video"==t.srcType(e)||"audio"==t.srcType(e)?n("video",{key:r,staticStyle:{display:"none"},attrs:{id:"video"+r,controls:"",preload:"auto",src:t.getSrc(e)}}):t._e(),t._v(" "),n("div",{staticClass:"content-video-item-video",on:{click:function(e){return t.playFn("video"+r)}}},[e.videos.length>0||e.audios.length>0?n("div",{staticClass:"content-video-item-video-play"}):t._e(),t._v(" "),e.videos.length>0?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:e.videos[0].pic_url}}):t._e(),t._v(" "),e.audios.length>0&&0==e.videos.length?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:e.audios[0].pic_url}}):t._e(),t._v(" "),e.pics.length>0&&0==e.videos.length&&0==e.audios.length?n("img",{staticClass:"content-video-item-video-pic",attrs:{src:e.pics[0]}}):t._e()]),t._v(" "),n("h3",{staticClass:"content-video-item-eng content-video-item-text"},[t._v(t._s(e.en_topic_name))]),t._v(" "),n("h3",{staticClass:"content-video-item-chn content-video-item-text chntext"},[t._v(t._s(e.cn_topic_name))])])}),0)]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"step card"},[t._m(2),t._v(" "),t._l(t.steps,function(e,r){return n("div",{key:r,staticClass:"step-item"},[n("div",{staticClass:"step-item-content"},[t._v(t._s(e))]),t._v(" "),r+1<t.steps.length?n("div",{staticClass:"step-item-deco"}):t._e()])})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFloatAction,expression:"showFloatAction"}],staticClass:"float-action"},[n("div",{staticClass:"action",on:{click:t.mainAction}},[n("div",{staticClass:"action-content",style:{background:t.resData.button_color}},[n("div",{staticClass:"action-content-text"},[t._v(t._s(t.haveWork?"查看我的作品":"我要报名参赛"))]),t._v(" "),n("div",{staticClass:"action-content-deco0"}),t._v(" "),n("div",{staticClass:"action-content-deco1"})])])])]):t._e(),t._v(" "),n("toast",{ref:"toast"}),t._v(" "),n("poster-modal",{attrs:{poster:0},on:{click:t.gotoRegister},model:{value:t.showPosterModal,callback:function(e){t.showPosterModal=e},expression:"showPosterModal"}})],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide-title"},[e("div",{staticClass:"divide-decohr"}),this._v(" "),e("div",{staticClass:"divide-title-text"},[this._v("参赛作品样板")]),this._v(" "),e("div",{staticClass:"divide-decohr"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"description card"},[e("div",{staticClass:"divide-title divide-title-space"},[e("div",{staticClass:"divide-decohr"}),this._v(" "),e("div",{staticClass:"divide-title-text"},[this._v("兰迪简介")]),this._v(" "),e("div",{staticClass:"divide-decohr"})]),this._v(" "),e("p",[this._v("兰迪少儿英语是专注为4-12岁少儿提供优质的英语学习内容与体验的在线外教小班课教育品牌，引进牛津大学出版社原版最新美式英语 Starlight教材，优选“英美加”等英语为母语国家的外教。")]),this._v(" "),e("p",[this._v("以“同伴学习”为教学理念，营造同伴竞争和同伴合作的场景，激发孩子学习英语的主动性，有效提升孩子的语言、思维及社交能力，让更多孩自如对话世界。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"divide-title divide-title-space"},[e("div",{staticClass:"divide-decohr"}),this._v(" "),e("div",{staticClass:"divide-title-text"},[this._v("活动步骤")]),this._v(" "),e("div",{staticClass:"divide-decohr"})])}],!1,null,"216137f0",null);e.default=component.exports}}]);