<<<<<<< HEAD:dist/_nuxt/e43bd8d5a3540249c612.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[29,21],{178:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],h=c[f];"object"==typeof h&&null!==h&&-1===r.indexOf(h)&&(t.push({obj:c,prop:f}),r.push(h))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach(function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o}),t):Object.keys(source).reduce(function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t},c)}}},179:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},182:function(e,t,r){"use strict";var n=r(178),o=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},d=Array.isArray,f=Array.prototype.push,h=function(e,t){f.apply(e,d(t)?t:[t])},m=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(e){return m.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(object,t,r,o,c,l,filter,f,m,y,w,S,A){var O=object;if("function"==typeof filter?O=filter(t,O):O instanceof Date?O=y(O):"comma"===r&&d(O)&&(O=O.join(",")),null===O){if(o)return l&&!S?l(t,v.encoder,A):t;O=""}if("string"==typeof O||"number"==typeof O||"boolean"==typeof O||n.isBuffer(O))return l?[w(S?t:l(t,v.encoder,A))+"="+w(l(O,v.encoder,A))]:[w(t)+"="+w(String(O))];var x,j=[];if(void 0===O)return j;if(d(filter))x=filter;else{var E=Object.keys(O);x=f?E.sort(f):E}for(var i=0;i<x.length;++i){var N=x[i];c&&null===O[N]||(d(O)?h(j,e(O[N],"function"==typeof r?r(t,N):t,r,o,c,l,filter,f,m,y,w,S,A)):h(j,e(O[N],t+(m?"."+N:"["+N+"]"),r,o,c,l,filter,f,m,y,w,S,A)))}return j};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=v.filter;return("function"==typeof e.filter||d(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):d(n.filter)&&(t=n.filter);var f,m=[];if("object"!=typeof r||null===r)return"";f=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var w=l[f];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var S=t[i];n.skipNulls&&null===r[S]||h(m,y(r[S],S,w,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var A=m.join(n.delimiter),O=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?O+="utf8=%26%2310003%3B&":O+="utf8=%E2%9C%93&"),A.length>0?O+A:""}},183:function(e,t,r){"use strict";var n=r(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},d=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(n),d=l?n.slice(0,l.index):n,f=[];if(d){if(!r.plainObjects&&o.call(Object.prototype,d)&&!r.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);r.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(o=[])[d]=n:o[l]=n:o={0:n}}n=o}return n}(f,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){var i,r={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,h=d.split(t.delimiter,f),m=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<h.length;++i)0===h[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[i]?v="utf-8":"utf8=%26%2310003%3B"===h[i]&&(v="iso-8859-1"),m=i,i=h.length);for(i=0;i<h.length;++i)if(i!==m){var y,w,S=h[i],A=S.indexOf("]="),O=-1===A?S.indexOf("="):A+1;-1===O?(y=t.decoder(S,c.decoder,v),w=t.strictNullHandling?null:""):(y=t.decoder(S.slice(0,O),c.decoder,v),w=t.decoder(S.slice(O+1),c.decoder,v)),w&&t.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&t.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(r,y)?r[y]=n.combine(r[y],w):r[y]=w}return r}(e,r):e,h=r.plainObjects?Object.create(null):{},m=Object.keys(f),i=0;i<m.length;++i){var v=m[i],y=d(v,f[v],r);h=n.merge(h,y,r)}return n.compact(h)}},184:function(e,t,r){"use strict";var n=r(182),o=r(183),c=r(179);e.exports={formats:c,parse:o,stringify:n}},185:function(e,t,r){var n=r(7),o=r(20),c=r(10),l=r(186),d="["+l+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(e,t,r){var o={},d=c(function(){return!!l[e]()||"​"!="​"[e]()}),f=o[e]=d?t(v):l[e];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},v=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},186:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},187:function(e,t,r){"use strict";var n=r(3),o=r(16),c=r(21),l=r(109),d=r(57),f=r(10),h=r(41).f,m=r(58).f,v=r(9).f,y=r(185).trim,w=n.Number,S=w,A=w.prototype,O="Number"==c(r(74)(A)),x="trim"in String.prototype,j=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=x?t.trim():y(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(O?f(function(){A.valueOf.call(r)}):"Number"!=c(r))?l(new S(j(t)),r,w):j(t)};for(var E,N=r(8)?h(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;N.length>k;k++)o(S,E=N[k])&&!o(w,E)&&v(w,E,m(S,E));w.prototype=A,A.constructor=w,r(11)(n,"Number",w)}},188:function(e,t,r){"use strict";r.d(t,"a",function(){return n});r(108);var n=function(e){var video=e,t=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?void 0!==video.play()&&(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var e,t=(e=video).webkitEnterFullScreen?"webkitEnterFullScreen":!!e.webkitRequestFullScreen&&"webkitRequestFullScreen";video[t]()}),video.addEventListener("webkitfullscreenchange",function(e){t.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(e){t.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play())}},189:function(e,t){},193:function(e,t,r){e.exports=r.p+"img/6446c2c.png"},252:function(e,t,r){var content=r(398);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("63f8fe12",content,!0,{sourceMap:!1})},396:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqpJREFUWAntl01ME0EUx//b0g/a8E1pUUtLbGuUqBev3ozeuHlREyKJ6MGzB2MwAQ7Gqxz8SA8kNiZejR7gphcuXgyaiJCUgraAgiilaGnrm9k22W6XZrpLG2L2Hdp9szNvfvvfef9kpZ7ZDwUc4rAcYjaOZgIafUOmgqaCRhUwut48g6aCRhVQrx9wOfHuTBijfp/6lmbe0DPoszUhdiKISLMTlz3tmkDqwYYBuiwSnhNcr93GGV6sbapZNPOGAEq09ZNQH067mznE9OYvPFhZ1QRSDzYEcDzQi4sdrXzvuXQGNxeWkVeT7JMLATolCQGHfZ8S1YeHvV244evmk5J/s7j6OY6dvCgeIAT48mQ/Zs9GcMXTUZ1GdfdCewsmSD0W6VyOw6Wye6pZ1VMhQC91n4VUfBg8ivOt7uoVi3dPkZ08DflhpXX5QoG/1o87u0JrlZOEAMcSKRRoExt1YjQcQNjpUNaouGYPFIsE4bZa+b17S0nM/PxdMU9kQAjwNXXdxLLcdW1NVu5l3fSvFcxOmNcdcch2Ek19R3T1h9ZUoTEhQFZpMrmO2NoGLxpw2jFFCjno9SmDZY8VdjJDD8bUMxLCgGyTO/GveLu1zfc71+LC5HF/2d5j1BCXFHYyUoOdlBVSJDUB7tEH6vCXJcxn5MM+2NWGu8e8vNx1bydGinaS0mEnCqayS0nPd3Efna83AyF4qBlYTNEZu9bTyTs2nctj8NMi5nR0bBlZMalJwVKBxJ8shubj2C0a7hCZcclObi0kDgyO7acLkC18v53B7cUVbj8sZzFKDTGt007kCpW/ugFZqVcbW7ifSCJDSj76to5nBuykEk0e0XUG1cVsZDdZMvJ6hCEFS0D1gmP1DwSwBFqPfxPQqKqmgqaCRhUwut48g/+9gv8AkUm57sAQyxIAAAAASUVORK5CYII="},397:function(e,t,r){"use strict";var n=r(252);r.n(n).a},398:function(e,t,r){t=e.exports=r(38)(!1);var n=r(180)(r(193));t.push([e.i,".top-step-bar[data-v-3ae0d264] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0.26667rem;\n  height: 2.2rem;\n}\n.page-content[data-v-3ae0d264] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-3ae0d264] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\n.signup-title[data-v-3ae0d264] {\n  font-size: 0.4rem;\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n}\n.signup-title2[data-v-3ae0d264] {\n  font-size: 0.37333rem;\n  color: #333333;\n  margin-bottom: 0.26667rem;\n}\n#step4[data-v-3ae0d264] {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n}\n.video[data-v-3ae0d264] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-3ae0d264] {\n    width: 8.5rem;\n    height: 4.8rem;\n    overflow: hidden;\n    position: relative;\n    background: #E6E6E6;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.video-content-play[data-v-3ae0d264] {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 1.01333rem;\n      height: 1.01333rem;\n      background: url("+n+") 50% 50%/contain no-repeat;\n}\n.video-content-img[data-v-3ae0d264] {\n      height: 4.8rem;\n}\n.rule[data-v-3ae0d264] {\n  display: flex;\n  align-items: center;\n  margin: 0.46667rem 0.29333rem;\n}\n.rule-select[data-v-3ae0d264] {\n    margin-right: 0.13333rem;\n    width: 0.53333rem;\n    height: 0.53333rem;\n    border: 1px solid #E6E6E6;\n}\n.rule-select-img[data-v-3ae0d264] {\n      width: inherit;\n      height: inherit;\n}\n.rule .selected[data-v-3ae0d264] {\n    border: none;\n}\n.rule-text[data-v-3ae0d264] {\n    font-size: 0.32rem;\n    color: #B2B2B2;\n}\n",""])},421:function(e,t,r){"use strict";r.r(t);r(40);var n,o,c=r(5),l=r(202),d=r(190),f=r(181),h=r(195),m=r(192),v=r(188),y=(r(189),{name:"Signup",mixins:[m.default],head:function(){return{title:"确认提交"}},components:{"step-bar":l.b,"submit-area":l.c,"poster-modal":l.a,toast:h.a},data:function(){return{steps:d.STEPS,videoSrc:"",ruleSelected:!0,showPosterModal:!1,formData:null}},methods:{selectRule:function(){this.ruleSelected=!this.ruleSelected},submit:(o=Object(c.a)(regeneratorRuntime.mark(function e(){var data,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.ruleSelected){e.next=7;break}return data={activity_id:this.$route.query.activity_id,combination_id:this.formData.landiLevel.id,topic_id:this.formData.topicID,video_url:this.formData.videoKey,address:this.formData.address},this.formData.workID?data.id=this.formData.workID:(data.cn_name=this.formData.cn_name,data.en_name=this.formData.en_name),e.next=5,f.a.post(d.API.SUBMIT_WORK,data);case 5:(t=e.sent).status?this.showPosterModal=!0:this.$refs.toast.showToast(t.info);case 7:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),gotoStep5:function(){this.gotoPage("presentation-signup-step5")},gotoRulePage:function(){this.gotoPageWithHistory("presentation-protocol")},playFn:function(e){var t=document.getElementById(e);Object(v.a)(t)}},mounted:(n=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$refs.toast.showLoadingToast(),t=JSON.parse(localStorage.getItem(d.STROGE.FORM_DATA)),this.videoSrc=t.videoSrc,r=this.$route.query.activity_id,e.next=6,f.a.get("".concat(d.API.MY_WORK,"?activity_id=").concat(r));case 6:(n=e.sent).status?n.data.id&&(t.workID=n.data.id):this.$refs.toast.showToast(n.info),this.formData=t,this.$refs.toast.hideLoadingToast();case 10:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})}),w=(r(397),r(19)),component=Object(w.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"step4"}},[n("div",{staticClass:"top-step-bar"},[n("step-bar",{attrs:{steps:e.steps,progress:70}})],1),e._v(" "),n("div",{staticClass:"page-content"},[n("div",{staticClass:"signup-title"},[e._v("确认提交")]),e._v(" "),n("div",{staticClass:"video"},[e.videoSrc&&""!=e.videoSrc?n("div",{staticClass:"video-content",on:{click:function(t){return e.playFn("video-upload")}}},[n("video",{staticStyle:{display:"none"},attrs:{id:"video-upload",controls:"",preload:"auto",src:e.videoSrc}}),e._v(" "),n("img",{staticClass:"video-content-img",attrs:{src:e.videoSrc+"?vframe/jpg/offset/2/h/960/"}}),e._v(" "),n("div",{staticClass:"video-content-play"})]):e._e()]),e._v(" "),n("div",{staticClass:"rule"},[n("div",{class:["rule-select",e.ruleSelected?"selected":""],on:{click:e.selectRule}},[e.ruleSelected?n("img",{staticClass:"rule-select-img",attrs:{src:r(396)}}):e._e()]),e._v(" "),n("div",{staticClass:"rule-text",on:{click:e.gotoRulePage}},[e._v("我已阅读并同意《视频授权用户协议书》")])])]),e._v(" "),n("submit-area",{attrs:{hint:"确认提交之后，活动结束前可重新上传,届时原作品将自动覆盖、点赞数清零，详见活动规则",btnText:"确认提交",isClickable:e.ruleSelected},on:{submit:e.submit}}),e._v(" "),n("toast",{ref:"toast"}),e._v(" "),n("poster-modal",{attrs:{poster:1},on:{click:e.gotoStep5,changeShow:e.gotoStep5},model:{value:e.showPosterModal,callback:function(t){e.showPosterModal=t},expression:"showPosterModal"}})],1)},[],!1,null,"3ae0d264",null);t.default=component.exports}}]);
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[29,21],{178:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],h=c[f];"object"==typeof h&&null!==h&&-1===r.indexOf(h)&&(t.push({obj:c,prop:f}),r.push(h))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach(function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o}),t):Object.keys(source).reduce(function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t},c)}}},179:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},182:function(e,t,r){"use strict";var n=r(178),o=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},d=Array.isArray,f=Array.prototype.push,h=function(e,t){f.apply(e,d(t)?t:[t])},m=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(e){return m.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(object,t,r,o,c,l,filter,f,m,y,w,S,A){var O=object;if("function"==typeof filter?O=filter(t,O):O instanceof Date?O=y(O):"comma"===r&&d(O)&&(O=O.join(",")),null===O){if(o)return l&&!S?l(t,v.encoder,A):t;O=""}if("string"==typeof O||"number"==typeof O||"boolean"==typeof O||n.isBuffer(O))return l?[w(S?t:l(t,v.encoder,A))+"="+w(l(O,v.encoder,A))]:[w(t)+"="+w(String(O))];var E,x=[];if(void 0===O)return x;if(d(filter))E=filter;else{var j=Object.keys(O);E=f?j.sort(f):j}for(var i=0;i<E.length;++i){var N=E[i];c&&null===O[N]||(d(O)?h(x,e(O[N],"function"==typeof r?r(t,N):t,r,o,c,l,filter,f,m,y,w,S,A)):h(x,e(O[N],t+(m?"."+N:"["+N+"]"),r,o,c,l,filter,f,m,y,w,S,A)))}return x};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=v.filter;return("function"==typeof e.filter||d(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):d(n.filter)&&(t=n.filter);var f,m=[];if("object"!=typeof r||null===r)return"";f=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var w=l[f];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var S=t[i];n.skipNulls&&null===r[S]||h(m,y(r[S],S,w,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var A=m.join(n.delimiter),O=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?O+="utf8=%26%2310003%3B&":O+="utf8=%E2%9C%93&"),A.length>0?O+A:""}},183:function(e,t,r){"use strict";var n=r(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},d=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(n),d=l?n.slice(0,l.index):n,f=[];if(d){if(!r.plainObjects&&o.call(Object.prototype,d)&&!r.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);r.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(o=[])[d]=n:o[l]=n:o={0:n}}n=o}return n}(f,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){var i,r={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,h=d.split(t.delimiter,f),m=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<h.length;++i)0===h[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[i]?v="utf-8":"utf8=%26%2310003%3B"===h[i]&&(v="iso-8859-1"),m=i,i=h.length);for(i=0;i<h.length;++i)if(i!==m){var y,w,S=h[i],A=S.indexOf("]="),O=-1===A?S.indexOf("="):A+1;-1===O?(y=t.decoder(S,c.decoder,v),w=t.strictNullHandling?null:""):(y=t.decoder(S.slice(0,O),c.decoder,v),w=t.decoder(S.slice(O+1),c.decoder,v)),w&&t.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&t.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(r,y)?r[y]=n.combine(r[y],w):r[y]=w}return r}(e,r):e,h=r.plainObjects?Object.create(null):{},m=Object.keys(f),i=0;i<m.length;++i){var v=m[i],y=d(v,f[v],r);h=n.merge(h,y,r)}return n.compact(h)}},184:function(e,t,r){"use strict";var n=r(182),o=r(183),c=r(179);e.exports={formats:c,parse:o,stringify:n}},185:function(e,t,r){var n=r(7),o=r(20),c=r(10),l=r(186),d="["+l+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(e,t,r){var o={},d=c(function(){return!!l[e]()||"​"!="​"[e]()}),f=o[e]=d?t(v):l[e];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},v=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},186:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},187:function(e,t,r){"use strict";var n=r(3),o=r(16),c=r(21),l=r(109),d=r(57),f=r(10),h=r(41).f,m=r(58).f,v=r(9).f,y=r(185).trim,w=n.Number,S=w,A=w.prototype,O="Number"==c(r(74)(A)),E="trim"in String.prototype,x=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=E?t.trim():y(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(O?f(function(){A.valueOf.call(r)}):"Number"!=c(r))?l(new S(x(t)),r,w):x(t)};for(var j,N=r(8)?h(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;N.length>k;k++)o(S,j=N[k])&&!o(w,j)&&v(w,j,m(S,j));w.prototype=A,A.constructor=w,r(11)(n,"Number",w)}},188:function(e,t,r){"use strict";r.d(t,"a",function(){return o});r(108);function n(e){return e.webkitEnterFullScreen?"webkitEnterFullScreen":!!e.webkitRequestFullScreen&&"webkitRequestFullScreen"}var o=function(e){var video=e,t=document;/Android|webOS|iPhone|iPad|BlackBerry|iPod/i.test(navigator.userAgent)?(video.play(),"ipad"==navigator.userAgent.toLowerCase().match(/iPad/i)&&(video.addEventListener("play",function(){var e=n(video);video[e]()}),video.addEventListener("webkitfullscreenchange",function(e){t.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(e){t.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))):(video.requestFullscreen(),video.play(),video.addEventListener("play",function(){var e=n(video);video[e]()}),video.addEventListener("webkitfullscreenchange",function(e){t.webkitIsFullScreen||video.pause()},!1),video.addEventListener("fullscreenchange ",function(e){t.webkitIsFullScreen||video.pause()},!1),video.addEventListener("ended",function(){this.webkitExitFullScreen()},!1))}},189:function(e,t){},194:function(e,t,r){e.exports=r.p+"img/6446c2c.png"},252:function(e,t,r){var content=r(397);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("63f8fe12",content,!0,{sourceMap:!1})},395:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqpJREFUWAntl01ME0EUx//b0g/a8E1pUUtLbGuUqBev3ozeuHlREyKJ6MGzB2MwAQ7Gqxz8SA8kNiZejR7gphcuXgyaiJCUgraAgiilaGnrm9k22W6XZrpLG2L2Hdp9szNvfvvfef9kpZ7ZDwUc4rAcYjaOZgIafUOmgqaCRhUwut48g6aCRhVQrx9wOfHuTBijfp/6lmbe0DPoszUhdiKISLMTlz3tmkDqwYYBuiwSnhNcr93GGV6sbapZNPOGAEq09ZNQH067mznE9OYvPFhZ1QRSDzYEcDzQi4sdrXzvuXQGNxeWkVeT7JMLATolCQGHfZ8S1YeHvV244evmk5J/s7j6OY6dvCgeIAT48mQ/Zs9GcMXTUZ1GdfdCewsmSD0W6VyOw6Wye6pZ1VMhQC91n4VUfBg8ivOt7uoVi3dPkZ08DflhpXX5QoG/1o87u0JrlZOEAMcSKRRoExt1YjQcQNjpUNaouGYPFIsE4bZa+b17S0nM/PxdMU9kQAjwNXXdxLLcdW1NVu5l3fSvFcxOmNcdcch2Ek19R3T1h9ZUoTEhQFZpMrmO2NoGLxpw2jFFCjno9SmDZY8VdjJDD8bUMxLCgGyTO/GveLu1zfc71+LC5HF/2d5j1BCXFHYyUoOdlBVSJDUB7tEH6vCXJcxn5MM+2NWGu8e8vNx1bydGinaS0mEnCqayS0nPd3Efna83AyF4qBlYTNEZu9bTyTs2nctj8NMi5nR0bBlZMalJwVKBxJ8shubj2C0a7hCZcclObi0kDgyO7acLkC18v53B7cUVbj8sZzFKDTGt007kCpW/ugFZqVcbW7ifSCJDSj76to5nBuykEk0e0XUG1cVsZDdZMvJ6hCEFS0D1gmP1DwSwBFqPfxPQqKqmgqaCRhUwut48g/+9gv8AkUm57sAQyxIAAAAASUVORK5CYII="},396:function(e,t,r){"use strict";var n=r(252);r.n(n).a},397:function(e,t,r){t=e.exports=r(38)(!1);var n=r(180)(r(194));t.push([e.i,".top-step-bar[data-v-3ae0d264] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0.26667rem;\n  height: 2.2rem;\n}\n.page-content[data-v-3ae0d264] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-3ae0d264] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\n.signup-title[data-v-3ae0d264] {\n  font-size: 0.4rem;\n  color: #333333;\n  font-weight: bold;\n  margin-bottom: 0.4rem;\n}\n.signup-title2[data-v-3ae0d264] {\n  font-size: 0.37333rem;\n  color: #333333;\n  margin-bottom: 0.26667rem;\n}\n#step4[data-v-3ae0d264] {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n}\n.video[data-v-3ae0d264] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-3ae0d264] {\n    width: 8.5rem;\n    height: 4.8rem;\n    overflow: hidden;\n    position: relative;\n    background: #E6E6E6;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.video-content-play[data-v-3ae0d264] {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 1.01333rem;\n      height: 1.01333rem;\n      background: url("+n+") 50% 50%/contain no-repeat;\n}\n.video-content-img[data-v-3ae0d264] {\n      height: 4.8rem;\n}\n.rule[data-v-3ae0d264] {\n  display: flex;\n  align-items: center;\n  margin: 0.46667rem 0.29333rem;\n}\n.rule-select[data-v-3ae0d264] {\n    margin-right: 0.13333rem;\n    width: 0.53333rem;\n    height: 0.53333rem;\n    border: 1px solid #E6E6E6;\n}\n.rule-select-img[data-v-3ae0d264] {\n      width: inherit;\n      height: inherit;\n}\n.rule .selected[data-v-3ae0d264] {\n    border: none;\n}\n.rule-text[data-v-3ae0d264] {\n    font-size: 0.32rem;\n    color: #B2B2B2;\n}\n",""])},419:function(e,t,r){"use strict";r.r(t);r(40);var n,o,c=r(5),l=r(203),d=r(190),f=r(181),h=r(196),m=r(192),v=r(188),y=(r(189),{name:"Signup",mixins:[m.default],head:function(){return{title:"确认提交"}},components:{"step-bar":l.b,"submit-area":l.c,"poster-modal":l.a,toast:h.a},data:function(){return{steps:d.STEPS,videoSrc:"",ruleSelected:!0,showPosterModal:!1,formData:null}},methods:{selectRule:function(){this.ruleSelected=!this.ruleSelected},submit:(o=Object(c.a)(regeneratorRuntime.mark(function e(){var data,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.ruleSelected){e.next=7;break}return data={activity_id:this.$route.query.activity_id,combination_id:this.formData.landiLevel.id,topic_id:this.formData.topicID,video_url:this.formData.videoKey,address:this.formData.address},this.formData.workID?data.id=this.formData.workID:(data.cn_name=this.formData.cn_name,data.en_name=this.formData.en_name),e.next=5,f.a.post(d.API.SUBMIT_WORK,data);case 5:(t=e.sent).status?this.showPosterModal=!0:this.$refs.toast.showToast(t.info);case 7:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),gotoStep5:function(){this.gotoPage("presentation-signup-step5")},gotoRulePage:function(){this.gotoPageWithHistory("presentation-protocol")},playFn:function(e){var t=document.getElementById(e);Object(v.a)(t)}},mounted:(n=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$refs.toast.showLoadingToast(),t=JSON.parse(localStorage.getItem(d.STROGE.FORM_DATA)),this.videoSrc=t.videoSrc,r=this.$route.query.activity_id,e.next=6,f.a.get("".concat(d.API.MY_WORK,"?activity_id=").concat(r));case 6:(n=e.sent).status?n.data.id&&(t.workID=n.data.id):this.$refs.toast.showToast(n.info),this.formData=t,this.$refs.toast.hideLoadingToast();case 10:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})}),w=(r(396),r(19)),component=Object(w.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"step4"}},[n("div",{staticClass:"top-step-bar"},[n("step-bar",{attrs:{steps:e.steps,progress:70}})],1),e._v(" "),n("div",{staticClass:"page-content"},[n("div",{staticClass:"signup-title"},[e._v("确认提交")]),e._v(" "),n("div",{staticClass:"video"},[e.videoSrc&&""!=e.videoSrc?n("div",{staticClass:"video-content",on:{click:function(t){return e.playFn("video-upload")}}},[n("video",{staticStyle:{display:"none"},attrs:{id:"video-upload",controls:"",preload:"auto",src:e.videoSrc}}),e._v(" "),n("img",{staticClass:"video-content-img",attrs:{src:e.videoSrc+"?vframe/jpg/offset/2/h/960/"}}),e._v(" "),n("div",{staticClass:"video-content-play"})]):e._e()]),e._v(" "),n("div",{staticClass:"rule"},[n("div",{class:["rule-select",e.ruleSelected?"selected":""],on:{click:e.selectRule}},[e.ruleSelected?n("img",{staticClass:"rule-select-img",attrs:{src:r(395)}}):e._e()]),e._v(" "),n("div",{staticClass:"rule-text",on:{click:e.gotoRulePage}},[e._v("我已阅读并同意《视频授权用户协议书》")])])]),e._v(" "),n("submit-area",{attrs:{hint:"确认提交之后，活动结束前可重新上传,届时原作品将自动覆盖、点赞数清零，详见活动规则",btnText:"确认提交",isClickable:e.ruleSelected},on:{submit:e.submit}}),e._v(" "),n("toast",{ref:"toast"}),e._v(" "),n("poster-modal",{attrs:{poster:1},on:{click:e.gotoStep5,changeShow:e.gotoStep5},model:{value:e.showPosterModal,callback:function(t){e.showPosterModal=t},expression:"showPosterModal"}})],1)},[],!1,null,"3ae0d264",null);t.default=component.exports}}]);
>>>>>>> feature/presentation:dist/_nuxt/55dd7afc2f2a97455c43.js
