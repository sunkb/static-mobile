(window.webpackJsonp=window.webpackJsonp||[]).push([[36,30],{178:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var o=t[i],c=o.obj[o.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],m=c[d];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(t.push({obj:c,prop:d}),r.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],c=0;c<r.length;++c)void 0!==r[c]&&o.push(r[c]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var n="",i=0;i<o.length;++i){var l=o.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?n+=o.charAt(i):l<128?n+=c[l]:l<2048?n+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?n+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&o.charCodeAt(i)),n+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(n(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!o.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return n(t)&&!n(source)&&(c=l(t,r)),n(t)&&n(source)?(source.forEach(function(n,i){if(o.call(t,i)){var c=t[i];c&&"object"==typeof c&&n&&"object"==typeof n?t[i]=e(c,n,r):t.push(n)}else t[i]=n}),t):Object.keys(source).reduce(function(t,n){var c=source[n];return o.call(t,n)?t[n]=e(t[n],c,r):t[n]=c,t},c)}}},179:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},181:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},182:function(e,t,r){"use strict";var o=r(178),n=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,m=function(e,t){d.apply(e,f(t)?t:[t])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(object,t,r,n,c,l,filter,d,h,y,w,x,O){var S=object;if("function"==typeof filter?S=filter(t,S):S instanceof Date?S=y(S):"comma"===r&&f(S)&&(S=S.join(",")),null===S){if(n)return l&&!x?l(t,v.encoder,O):t;S=""}if("string"==typeof S||"number"==typeof S||"boolean"==typeof S||o.isBuffer(S))return l?[w(x?t:l(t,v.encoder,O))+"="+w(l(S,v.encoder,O))]:[w(t)+"="+w(String(S))];var j,N=[];if(void 0===S)return N;if(f(filter))j=filter;else{var _=Object.keys(S);j=d?_.sort(d):_}for(var i=0;i<j.length;++i){var D=j[i];c&&null===S[D]||(f(S)?m(N,e(S[D],"function"==typeof r?r(t,D):t,r,n,c,l,filter,d,h,y,w,x,O)):m(N,e(S[D],t+(h?"."+D:"["+D+"]"),r,n,c,l,filter,d,h,y,w,x,O)))}return N};e.exports=function(object,e){var t,r=object,o=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!c.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],filter=v.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof o.filter?r=(0,o.filter)("",r):f(o.filter)&&(t=o.filter);var d,h=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var w=l[d];t||(t=Object.keys(r)),o.sort&&t.sort(o.sort);for(var i=0;i<t.length;++i){var x=t[i];o.skipNulls&&null===r[x]||m(h,y(r[x],x,w,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var O=h.join(o.delimiter),S=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?S+="utf8=%26%2310003%3B&":S+="utf8=%E2%9C%93&"),O.length>0?S+O:""}},183:function(e,t,r){"use strict";var o=r(178),n=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},f=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(o),f=l?o.slice(0,l.index):o,d=[];if(f){if(!r.plainObjects&&n.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;null!==(l=c.exec(o))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+o.slice(l.index)+"]"),function(e,t,r){for(var o=t,i=e.length-1;i>=0;--i){var n,c=e[i];if("[]"===c&&r.parseArrays)n=[].concat(o);else{n=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(n=[])[f]=o:n[l]=o:n={0:o}}o=n}return o}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var d="string"==typeof e?function(e,t){var i,r={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,m=f.split(t.delimiter,d),h=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,w,x=m[i],O=x.indexOf("]="),S=-1===O?x.indexOf("="):O+1;-1===S?(y=t.decoder(x,c.decoder,v),w=t.strictNullHandling?null:""):(y=t.decoder(x.slice(0,S),c.decoder,v),w=t.decoder(x.slice(S+1),c.decoder,v)),w&&t.interpretNumericEntities&&"iso-8859-1"===v&&(w=l(w)),w&&t.comma&&w.indexOf(",")>-1&&(w=w.split(",")),n.call(r,y)?r[y]=o.combine(r[y],w):r[y]=w}return r}(e,r):e,m=r.plainObjects?Object.create(null):{},h=Object.keys(d),i=0;i<h.length;++i){var v=h[i],y=f(v,d[v],r);m=o.merge(m,y,r)}return o.compact(m)}},184:function(e,t,r){"use strict";var o=r(182),n=r(183),c=r(179);e.exports={formats:c,parse:n,stringify:o}},185:function(e,t,r){"use strict";var o=r(3),n=r(16),c=r(21),l=r(109),f=r(58),d=r(10),m=r(41).f,h=r(59).f,v=r(9).f,y=r(187).trim,w=o.Number,x=w,O=w.prototype,S="Number"==c(r(75)(O)),j="trim"in String.prototype,N=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var r,o,n,c=(t=j?t.trim():y(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+t}for(var code,l=t.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>n)return NaN;return parseInt(l,o)}}return+t};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof w&&(S?d(function(){O.valueOf.call(r)}):"Number"!=c(r))?l(new x(N(t)),r,w):N(t)};for(var _,D=r(8)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;D.length>I;I++)n(x,_=D[I])&&!n(w,_)&&v(w,_,h(x,_));w.prototype=O,O.constructor=w,r(11)(o,"Number",w)}},187:function(e,t,r){var o=r(7),n=r(20),c=r(10),l=r(188),f="["+l+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(e,t,r){var n={},f=c(function(){return!!l[e]()||"​"!="​"[e]()}),d=n[e]=f?t(v):l[e];r&&(n[r]=d),o(o.P+o.F*f,"String",n)},v=h.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(m,"")),e};e.exports=h},188:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},191:function(e,t){},278:function(e,t,r){var content=r(446);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("3bd0da0c",content,!0,{sourceMap:!1})},444:function(e,t,r){e.exports=r.p+"img/e7bcd12.png"},445:function(e,t,r){"use strict";var o=r(278);r.n(o).a},446:function(e,t,r){t=e.exports=r(38)(!1);var o=r(181)(r(210));t.push([e.i,".top-step-bar[data-v-288e6a58]{padding-top:0.26667rem;margin-bottom:0.26667rem;height:2.2rem}.page-content[data-v-288e6a58]{padding:0 0.4rem}.page-content-content[data-v-288e6a58]{display:flex;flex-direction:column;justify-content:space-between;height:73vh}.signup-title[data-v-288e6a58]{font-size:0.4rem;color:#333333;font-weight:bold;margin-bottom:0.4rem}.signup-title2[data-v-288e6a58]{font-size:0.37333rem;color:#333333;margin-bottom:0.26667rem}#step2[data-v-288e6a58]{width:100vw;height:100vh;background:#fff}.level[data-v-288e6a58]{display:flex;align-items:center}.level-hint[data-v-288e6a58]{margin-left:0.4rem;font-size:0.32rem;color:#B2B2B2;margin-bottom:0.26667rem}.level-hint[data-v-288e6a58]::before{content:'*';color:#F0552D}.topic[data-v-288e6a58]{display:flex;white-space:nowrap;overflow-x:scroll}.topic[data-v-288e6a58]::-webkit-scrollbar{display:none}.topic-item[data-v-288e6a58]{display:inline-block;margin-right:0.5rem;box-sizing:content-box;position:relative}.topic-item-video[data-v-288e6a58]{width:6.4rem;height:4.8rem;overflow:hidden;position:relative}.topic-item-video-pic[data-v-288e6a58]{width:inherit;height:inherit}.topic-item-video-play[data-v-288e6a58]{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:1.01333rem;height:1.01333rem;background:url("+o+") 50% 50%/contain no-repeat}.topic-item-videoplay[data-v-288e6a58]{width:6.4rem;height:4.8rem;overflow:hidden;position:absolute;top:0;left:0}.topic-item-eng[data-v-288e6a58]{font-size:0.34667rem;color:#333333;letter-spacing:0;margin-top:0.26667rem}.topic-item-chn[data-v-288e6a58]{font-size:0.32rem;color:#B2B2B2;letter-spacing:0;line-height:0.50667rem;margin-top:0.13333rem}.topic-item-text[data-v-288e6a58]{white-space:normal;width:6.4rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.topic-item-selector[data-v-288e6a58]{width:0.72rem;height:0.72rem;border-radius:50%;background:#fff;box-shadow:0 0 0.2rem -0.07rem #666666;display:flex;justify-content:center;align-items:center}.topic-item-selector-wrapper[data-v-288e6a58]{position:absolute;top:0;right:0;padding:0.25333rem}.topic-item-selector-img[data-v-288e6a58]{width:0.56rem;height:0.56rem}\n",""])},489:function(e,t,r){"use strict";r.r(t);r(61),r(22),r(23),r(42),r(40);var o,n=r(5),c=r(198),l=r(195),f=r(189),d=r(180),m=r(196),h=r(203),v=(r(191),{name:"Signup",mixins:[m.default],head:function(){return{title:"选择题目"}},components:{"step-bar":c.b,"submit-area":c.c,toast:f.a},data:function(){return{steps:l.STEPS,landiLevel:"",topics:[],topicSelectID:-1,lastTopicSelectID:null,formData:null}},computed:{topicSelected:function(){return this.topicSelectID>=0}},methods:{submit:function(){this.topicSelected&&(this.lastTopicSelectID!=this.topicSelectID&&(delete this.formData.videoSrc,delete this.formData.videoKey),this.formData.topicID=this.topicSelectID,localStorage.setItem(l.STROGE.FORM_DATA,JSON.stringify(this.formData)),this.gotoPage("presentation-signup-step3"))},selectTopic:function(e){this.topicSelectID=e},srcType:function(e){return e.videos.length>0?"video":e.audios.length>0?"audio":"pic"},getSrc:function(e){return e.videos.length>0?e.videos[0].url:e.audios.length>0?e.audios[0].url:void 0},playFn:function(e){var t=document.getElementById(e);Object(h.a)(t)}},mounted:(o=Object(n.a)(regeneratorRuntime.mark(function e(){var t,r,o,n,c,f,m,h,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$refs.toast.showLoadingToast(),t=JSON.parse(localStorage.getItem(l.STROGE.FORM_DATA)),r=this.$route.query.activity_id,!t.landiLevel.name){e.next=8;break}this.landiLevel=t.landiLevel,this.topics=t.landiLevel.topics,e.next=44;break;case 8:return e.next=10,d.a.get("".concat(l.API.ACTIVITY_DETAIL,"?activity_id=").concat(r));case 10:if((o=e.sent).status){e.next=15;break}this.$refs.toast.showToast(o.info),e.next=44;break;case 15:n=!0,c=!1,f=void 0,e.prev=18,m=o.data.combinations[Symbol.iterator]();case 20:if(n=(h=m.next()).done){e.next=28;break}if((v=h.value).id!=t.landiLevel.id){e.next=25;break}return t.landiLevel=v,e.abrupt("break",28);case 25:n=!0,e.next=20;break;case 28:e.next=34;break;case 30:e.prev=30,e.t0=e.catch(18),c=!0,f=e.t0;case 34:e.prev=34,e.prev=35,n||null==m.return||m.return();case 37:if(e.prev=37,!c){e.next=40;break}throw f;case 40:return e.finish(37);case 41:return e.finish(34);case 42:this.landiLevel=t.landiLevel,this.topics=t.landiLevel.topics;case 44:t.topicID&&(this.topicSelectID=this.lastTopicSelectID=t.topicID),this.formData=t,this.$refs.toast.hideLoadingToast();case 47:case"end":return e.stop()}},e,this,[[18,30,34,42],[35,,37,41]])})),function(){return o.apply(this,arguments)})}),y=(r(445),r(19)),component=Object(y.a)(v,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"step2"}},[o("div",{staticClass:"top-step-bar"},[o("step-bar",{attrs:{steps:e.steps,progress:30}})],1),e._v(" "),o("div",{staticClass:"page-content"},[o("div",{staticClass:"signup-title"},[e._v("选择题目")]),e._v(" "),o("div",{staticClass:"level"},[o("div",{staticClass:"signup-title2"},[e._v("当前级别: "+e._s(e.landiLevel.name))]),e._v(" "),o("div",{staticClass:"level-hint"},[e._v("左右滑屏可以切换样板和主题")])]),e._v(" "),o("div",{staticClass:"topic"},e._l(e.topics,function(t,n){return o("div",{key:t.id,staticClass:"topic-item"},["video"==e.srcType(t)||"audio"==e.srcType(t)?o("video",{key:n,staticClass:"topic-item-videoplay",staticStyle:{display:"none"},attrs:{id:"video"+n,controls:"",preload:"auto",src:e.getSrc(t)}}):e._e(),e._v(" "),o("div",{staticClass:"topic-item-video",on:{click:function(t){return e.playFn("video"+n)}}},[t.videos.length>0||t.audios.length>0?o("div",{staticClass:"topic-item-video-play"}):e._e(),e._v(" "),t.videos.length>0?o("img",{staticClass:"topic-item-video-pic",attrs:{src:t.videos[0].pic_url}}):e._e(),e._v(" "),t.audios.length>0&&0==t.videos.length?o("img",{staticClass:"topic-item-video-pic",attrs:{src:t.audios[0].pic_url}}):e._e(),e._v(" "),t.pics.length>0&&0==t.videos.length&&0==t.audios.length?o("img",{staticClass:"topic-item-video-pic",attrs:{src:t.pics[0]}}):e._e()]),e._v(" "),o("div",{staticClass:"topic-item-selector-wrapper",on:{click:function(r){return e.selectTopic(t.id)}}},[o("div",{staticClass:"topic-item-selector"},[e.topicSelectID==t.id?o("img",{staticClass:"topic-item-selector-img",attrs:{src:r(444)}}):e._e()])]),e._v(" "),o("div",{staticClass:"topic-item-eng topic-item-text"},[e._v(e._s(t.en_topic_name))]),e._v(" "),o("div",{staticClass:"topic-item-chn topic-item-text"},[e._v(e._s(t.cn_topic_name))])])}),0),e._v(" "),o("submit-area",{attrs:{hint:"请勾选主题右上角选择当前参赛题目",btnText:"上传我的视频",isClickable:e.topicSelected},on:{submit:e.submit}})],1),e._v(" "),o("toast",{ref:"toast"})],1)},[],!1,null,"288e6a58",null);t.default=component.exports}}]);