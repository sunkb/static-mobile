(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{178:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],h=c[d];"object"==typeof h&&null!==h&&-1===r.indexOf(h)&&(t.push({obj:c,prop:d}),r.push(h))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach(function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o}),t):Object.keys(source).reduce(function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t},c)}}},179:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},181:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},182:function(e,t,r){"use strict";var n=r(178),o=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,h=function(e,t){d.apply(e,f(t)?t:[t])},m=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(e){return m.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(object,t,r,o,c,l,filter,d,m,y,w,O,A){var S=object;if("function"==typeof filter?S=filter(t,S):S instanceof Date?S=y(S):"comma"===r&&f(S)&&(S=S.join(",")),null===S){if(o)return l&&!O?l(t,v.encoder,A):t;S=""}if("string"==typeof S||"number"==typeof S||"boolean"==typeof S||n.isBuffer(S))return l?[w(O?t:l(t,v.encoder,A))+"="+w(l(S,v.encoder,A))]:[w(t)+"="+w(String(S))];var N,j=[];if(void 0===S)return j;if(f(filter))N=filter;else{var x=Object.keys(S);N=d?x.sort(d):x}for(var i=0;i<N.length;++i){var E=N[i];c&&null===S[E]||(f(S)?h(j,e(S[E],"function"==typeof r?r(t,E):t,r,o,c,l,filter,d,m,y,w,O,A)):h(j,e(S[E],t+(m?"."+E:"["+E+"]"),r,o,c,l,filter,d,m,y,w,O,A)))}return j};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=v.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):f(n.filter)&&(t=n.filter);var d,m=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var w=l[d];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var O=t[i];n.skipNulls&&null===r[O]||h(m,y(r[O],O,w,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var A=m.join(n.delimiter),S=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?S+="utf8=%26%2310003%3B&":S+="utf8=%E2%9C%93&"),A.length>0?S+A:""}},183:function(e,t,r){"use strict";var n=r(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},f=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(n),f=l?n.slice(0,l.index):n,d=[];if(f){if(!r.plainObjects&&o.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(o=[])[f]=n:o[l]=n:o={0:n}}n=o}return n}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var d="string"==typeof e?function(e,t){var i,r={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,h=f.split(t.delimiter,d),m=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<h.length;++i)0===h[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===h[i]?v="utf-8":"utf8=%26%2310003%3B"===h[i]&&(v="iso-8859-1"),m=i,i=h.length);for(i=0;i<h.length;++i)if(i!==m){var y,w,O=h[i],A=O.indexOf("]="),S=-1===A?O.indexOf("="):A+1;-1===S?(y=t.decoder(O,c.decoder,v),w=t.strictNullHandling?null:""):(y=t.decoder(O.slice(0,S),c.decoder,v),w=t.decoder(O.slice(S+1),c.decoder,v)),w&&t.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&t.comma&&w.indexOf(",")>-1&&(w=w.split(",")),o.call(r,y)?r[y]=n.combine(r[y],w):r[y]=w}return r}(e,r):e,h=r.plainObjects?Object.create(null):{},m=Object.keys(d),i=0;i<m.length;++i){var v=m[i],y=f(v,d[v],r);h=n.merge(h,y,r)}return n.compact(h)}},184:function(e,t,r){"use strict";var n=r(182),o=r(183),c=r(179);e.exports={formats:c,parse:o,stringify:n}},186:function(e,t,r){"use strict";var n=r(3),o=r(16),c=r(21),l=r(109),f=r(57),d=r(10),h=r(41).f,m=r(58).f,v=r(9).f,y=r(187).trim,w=n.Number,O=w,A=w.prototype,S="Number"==c(r(74)(A)),N="trim"in String.prototype,j=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=N?t.trim():y(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(S?d(function(){A.valueOf.call(r)}):"Number"!=c(r))?l(new O(j(t)),r,w):j(t)};for(var x,E=r(8)?h(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)o(O,x=E[C])&&!o(w,x)&&v(w,x,m(O,x));w.prototype=A,A.constructor=w,r(11)(n,"Number",w)}},187:function(e,t,r){var n=r(7),o=r(20),c=r(10),l=r(188),f="["+l+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),m=function(e,t,r){var o={},f=c(function(){return!!l[e]()||"​"!="​"[e]()}),d=o[e]=f?t(v):l[e];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},v=m.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},188:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},260:function(e,t,r){var content=r(394);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("f270c8fa",content,!0,{sourceMap:!1})},392:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAqpJREFUWAntl01ME0EUx//b0g/a8E1pUUtLbGuUqBev3ozeuHlREyKJ6MGzB2MwAQ7Gqxz8SA8kNiZejR7gphcuXgyaiJCUgraAgiilaGnrm9k22W6XZrpLG2L2Hdp9szNvfvvfef9kpZ7ZDwUc4rAcYjaOZgIafUOmgqaCRhUwut48g6aCRhVQrx9wOfHuTBijfp/6lmbe0DPoszUhdiKISLMTlz3tmkDqwYYBuiwSnhNcr93GGV6sbapZNPOGAEq09ZNQH067mznE9OYvPFhZ1QRSDzYEcDzQi4sdrXzvuXQGNxeWkVeT7JMLATolCQGHfZ8S1YeHvV244evmk5J/s7j6OY6dvCgeIAT48mQ/Zs9GcMXTUZ1GdfdCewsmSD0W6VyOw6Wye6pZ1VMhQC91n4VUfBg8ivOt7uoVi3dPkZ08DflhpXX5QoG/1o87u0JrlZOEAMcSKRRoExt1YjQcQNjpUNaouGYPFIsE4bZa+b17S0nM/PxdMU9kQAjwNXXdxLLcdW1NVu5l3fSvFcxOmNcdcch2Ek19R3T1h9ZUoTEhQFZpMrmO2NoGLxpw2jFFCjno9SmDZY8VdjJDD8bUMxLCgGyTO/GveLu1zfc71+LC5HF/2d5j1BCXFHYyUoOdlBVSJDUB7tEH6vCXJcxn5MM+2NWGu8e8vNx1bydGinaS0mEnCqayS0nPd3Efna83AyF4qBlYTNEZu9bTyTs2nctj8NMi5nR0bBlZMalJwVKBxJ8shubj2C0a7hCZcclObi0kDgyO7acLkC18v53B7cUVbj8sZzFKDTGt007kCpW/ugFZqVcbW7ifSCJDSj76to5nBuykEk0e0XUG1cVsZDdZMvJ6hCEFS0D1gmP1DwSwBFqPfxPQqKqmgqaCRhUwut48g/+9gv8AkUm57sAQyxIAAAAASUVORK5CYII="},393:function(e,t,r){"use strict";var n=r(260);r.n(n).a},394:function(e,t,r){t=e.exports=r(38)(!1);var n=r(181)(r(220));t.push([e.i,".top-step-bar[data-v-277e88ef] {\n  padding-top: 0.4rem;\n  margin-bottom: 0.4rem;\n  height: 2.2rem;\n}\n.page-content[data-v-277e88ef] {\n  padding: 0 0.4rem;\n}\nh1[data-v-277e88ef] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-277e88ef] {\n  font-size: 0.373333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-277e88ef] {\n  font-size: 0.346667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-277e88ef] {\n  font-size: 0.346667rem;\n  color: #808080;\n}\n#step4[data-v-277e88ef] {\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n}\n.video[data-v-277e88ef] {\n  margin-top: 0.3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.video-content[data-v-277e88ef] {\n  width: 8.5rem;\n  height: 5.6rem;\n  overflow: hidden;\n  position: relative;\n  background: #E6E6E6;\n}\n.video-content-play[data-v-277e88ef] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 1.333333rem;\n  height: 1.333333rem;\n  background: url("+n+") 50% 50%/contain no-repeat;\n}\n.rule[data-v-277e88ef] {\n  display: flex;\n  align-items: center;\n  margin: 0.3rem 0.3rem;\n}\n.rule-select[data-v-277e88ef] {\n  margin-right: 0.3rem;\n  width: 0.533333rem;\n  height: 0.533333rem;\n  border: 0.02rem solid #E6E6E6;\n}\n.rule-select-img[data-v-277e88ef] {\n  width: inherit;\n  height: inherit;\n}",""])},416:function(e,t,r){"use strict";r.r(t);r(40);var n,o,c=r(5),l=r(200),f=r(189),d=r(180),h=r(192),m=r(190),v=r(205),y={name:"Signup",mixins:[m.default],head:function(){return{title:"确认提交"}},components:{"step-bar":l.b,"submit-area":l.c,"poster-modal":l.a,toast:h.a},data:function(){return{steps:f.STEPS,videoSrc:"",ruleSelected:!1,showPosterModal:!1,formData:null}},methods:{selectRule:function(){this.ruleSelected=!this.ruleSelected},submit:(o=Object(c.a)(regeneratorRuntime.mark(function e(){var data,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.ruleSelected){e.next=7;break}return data={activity_id:this.$route.query.activity_id,combination_id:this.formData.landiLevel.id,topic_id:this.formData.topicID,video_url:this.formData.videoKey,address:this.formData.address},this.formData.workID&&(data.id=this.formData.workID),e.next=5,d.a.post(f.API.SUBMIT_WORK,data);case 5:(t=e.sent).status?this.showPosterModal=!0:this.$refs.toast.showToast(t.info);case 7:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),gotoStep5:function(){this.gotoPage("presentation-signup-step5")},gotoRulePage:function(){this.gotoPage("presentation-protocol")},playFn:function(e){var t=document.getElementById(e);Object(v.a)(t)}},mounted:(n=Object(c.a)(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$refs.toast.showLoadingToast(),t=JSON.parse(localStorage.getItem(f.STROGE.FORM_DATA)),this.videoSrc=t.videoSrc,r=this.$route.query.activity_id,e.next=6,d.a.get("".concat(f.API.MY_WORK,"?activity_id=").concat(r));case 6:(n=e.sent).status?n.data.id&&(t.workID=n.data.id):this.$refs.toast.showToast(n.info),this.formData=t,this.$refs.toast.hideLoadingToast();case 10:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})},w=(r(393),r(19)),component=Object(w.a)(y,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"step4"}},[n("div",{staticClass:"top-step-bar"},[n("step-bar",{attrs:{steps:e.steps,progress:70}})],1),e._v(" "),n("div",{staticClass:"page-content"},[n("h1",[e._v("确认提交")]),e._v(" "),n("div",{staticClass:"video"},[e.videoSrc&&""!=e.videoSrc?n("div",{staticClass:"video-content",on:{click:function(t){return e.playFn("video-upload")}}},[n("video",{staticStyle:{display:"none"},attrs:{id:"video-upload",controls:"",preload:"auto",src:e.videoSrc}}),e._v(" "),n("div",{staticClass:"video-content-play"})]):e._e()]),e._v(" "),n("div",{staticClass:"rule"},[n("div",{staticClass:"rule-select",on:{click:e.selectRule}},[e.ruleSelected?n("img",{staticClass:"rule-select-img",attrs:{src:r(392)}}):e._e()]),e._v(" "),n("h3",{on:{click:e.gotoRulePage}},[e._v("我已阅读并同意《视频授权用户协议书》")])])]),e._v(" "),n("submit-area",{attrs:{hint:"确认提交之后，活动结束前可重新上传,届时原作品将自动覆盖、点赞数清零，详见活动规则",btnText:"确认提交",isClickable:e.ruleSelected},on:{submit:e.submit}}),e._v(" "),n("toast",{ref:"toast"}),e._v(" "),n("poster-modal",{attrs:{poster:1},on:{click:e.gotoStep5,changeShow:e.gotoStep5},model:{value:e.showPosterModal,callback:function(t){e.showPosterModal=t},expression:"showPosterModal"}})],1)},[],!1,null,"277e88ef",null);t.default=component.exports}}]);