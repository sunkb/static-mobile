(window.webpackJsonp=window.webpackJsonp||[]).push([[26,21],{178:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),f=0;f<l.length;++f){var d=l[f],m=c[d];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(t.push({obj:c,prop:d}),r.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach(function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o}),t):Object.keys(source).reduce(function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t},c)}}},179:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},182:function(e,t,r){"use strict";var n=r(178),o=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},f=Array.isArray,d=Array.prototype.push,m=function(e,t){d.apply(e,f(t)?t:[t])},v=Date.prototype.toISOString,h={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(e){return v.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(object,t,r,o,c,l,filter,d,v,y,N,w,D){var _=object;if("function"==typeof filter?_=filter(t,_):_ instanceof Date?_=y(_):"comma"===r&&f(_)&&(_=_.join(",")),null===_){if(o)return l&&!w?l(t,h.encoder,D):t;_=""}if("string"==typeof _||"number"==typeof _||"boolean"==typeof _||n.isBuffer(_))return l?[N(w?t:l(t,h.encoder,D))+"="+N(l(_,h.encoder,D))]:[N(t)+"="+N(String(_))];var x,O=[];if(void 0===_)return O;if(f(filter))x=filter;else{var j=Object.keys(_);x=d?j.sort(d):j}for(var i=0;i<x.length;++i){var E=x[i];c&&null===_[E]||(f(_)?m(O,e(_[E],"function"==typeof r?r(t,E):t,r,o,c,l,filter,d,v,y,N,w,D)):m(O,e(_[E],t+(v?"."+E:"["+E+"]"),r,o,c,l,filter,d,v,y,N,w,D)))}return O};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return h;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=h.filter;return("function"==typeof e.filter||f(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:h.addQueryPrefix,allowDots:void 0===e.allowDots?h.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:h.charsetSentinel,delimiter:void 0===e.delimiter?h.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:h.encode,encoder:"function"==typeof e.encoder?e.encoder:h.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:h.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:h.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:h.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:h.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):f(n.filter)&&(t=n.filter);var d,v=[];if("object"!=typeof r||null===r)return"";d=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var N=l[d];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var w=t[i];n.skipNulls&&null===r[w]||m(v,y(r[w],w,N,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var D=v.join(n.delimiter),_=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),D.length>0?_+D:""}},183:function(e,t,r){"use strict";var n=r(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},f=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(n),f=l?n.slice(0,l.index):n,d=[];if(f){if(!r.plainObjects&&o.call(Object.prototype,f)&&!r.allowPrototypes)return;d.push(f)}for(var i=0;null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,f=parseInt(l,10);r.parseArrays||""!==l?!isNaN(f)&&c!==l&&String(f)===l&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(o=[])[f]=n:o[l]=n:o={0:n}}n=o}return n}(d,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var d="string"==typeof e?function(e,t){var i,r={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,m=f.split(t.delimiter,d),v=-1,h=t.charset;if(t.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?h="utf-8":"utf8=%26%2310003%3B"===m[i]&&(h="iso-8859-1"),v=i,i=m.length);for(i=0;i<m.length;++i)if(i!==v){var y,N,w=m[i],D=w.indexOf("]="),_=-1===D?w.indexOf("="):D+1;-1===_?(y=t.decoder(w,c.decoder,h),N=t.strictNullHandling?null:""):(y=t.decoder(w.slice(0,_),c.decoder,h),N=t.decoder(w.slice(_+1),c.decoder,h)),N&&t.interpretNumericEntities&&"iso-8859-1"===h&&(N=l(N)),N&&t.comma&&N.indexOf(",")>-1&&(N=N.split(",")),o.call(r,y)?r[y]=n.combine(r[y],N):r[y]=N}return r}(e,r):e,m=r.plainObjects?Object.create(null):{},v=Object.keys(d),i=0;i<v.length;++i){var h=v[i],y=f(h,d[h],r);m=n.merge(m,y,r)}return n.compact(m)}},184:function(e,t,r){"use strict";var n=r(182),o=r(183),c=r(179);e.exports={formats:c,parse:o,stringify:n}},185:function(e,t,r){var n=r(7),o=r(20),c=r(10),l=r(186),f="["+l+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(e,t,r){var o={},f=c(function(){return!!l[e]()||"​"!="​"[e]()}),d=o[e]=f?t(h):l[e];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},h=v.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(m,"")),e};e.exports=v},186:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},187:function(e,t,r){"use strict";var n=r(3),o=r(16),c=r(21),l=r(109),f=r(57),d=r(10),m=r(41).f,v=r(58).f,h=r(9).f,y=r(185).trim,N=n.Number,w=N,D=N.prototype,_="Number"==c(r(74)(D)),x="trim"in String.prototype,O=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=x?t.trim():y(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+t};if(!N(" 0o1")||!N("0b1")||N("+0x1")){N=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof N&&(_?d(function(){D.valueOf.call(r)}):"Number"!=c(r))?l(new w(O(t)),r,N):O(t)};for(var j,E=r(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;E.length>C;C++)o(w,j=E[C])&&!o(N,j)&&h(N,j,v(w,j));N.prototype=D,D.constructor=N,r(11)(n,"Number",N)}},189:function(e,t){},246:function(e,t,r){var content=r(359);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("015ffd09",content,!0,{sourceMap:!1})},358:function(e,t,r){"use strict";var n=r(246);r.n(n).a},359:function(e,t,r){(e.exports=r(38)(!1)).push([e.i,".top-step-bar[data-v-26bef1d0] {\n  padding-top: 0.26667rem;\n  margin-bottom: 0;\n  height: 2.2rem;\n}\n.page-content[data-v-26bef1d0] {\n  padding: 0 0.4rem;\n}\n.page-content-content[data-v-26bef1d0] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 73vh;\n}\nh1[data-v-26bef1d0] {\n  font-size: 0.4rem;\n  font-weight: bold;\n  color: #333333;\n  padding: 0.3rem 0;\n}\nh2[data-v-26bef1d0] {\n  font-size: 0.37333rem;\n  color: #333333;\n  padding: 0.2rem 0;\n}\nh3[data-v-26bef1d0] {\n  font-size: 0.34667rem;\n  color: #B2B2B2;\n  padding: 0.1rem 0;\n}\np[data-v-26bef1d0] {\n  font-size: 0.34667rem;\n  color: #808080;\n}\n.title-content-space[data-v-26bef1d0] {\n  margin-bottom: -0.1rem;\n}\n.level2text[data-v-26bef1d0] {\n  margin-top: 0.1rem;\n  margin-bottom: 0.2rem;\n}\n.chntext[data-v-26bef1d0] {\n  font-size: 0.32rem;\n}\n#signup[data-v-26bef1d0] {\n  background: #fff;\n  width: 100vw;\n  height: 100vh;\n}\n.signupform-item[data-v-26bef1d0] {\n  border-top: 0.02rem solid #E6E6E6;\n  padding: 0.4rem 0;\n  white-space: nowrap;\n}\n.signupform-item[data-v-26bef1d0]:last-child {\n    border-bottom: 0.02rem solid #E6E6E6;\n}\n.signupform-item-label[data-v-26bef1d0] {\n    display: inline-block;\n    color: #333333;\n    font-size: 0.37rem;\n    width: 2.04rem;\n    margin-right: 0.49333rem;\n}\n.signupform-item .required[data-v-26bef1d0]::after {\n    content: '*';\n    color: #F0552D;\n}\n.signupform-item-input[data-v-26bef1d0] {\n    font-size: 0.37333rem;\n    outline: none;\n    color: #333333;\n    width: 4rem;\n}\n.signupform-item-input[data-v-26bef1d0]::placeholder {\n      color: #B2B2B2;\n}\n.signupform-item-select[data-v-26bef1d0] {\n    font-size: 0.37333rem;\n    outline: none;\n    color: #333333;\n    width: 5.33333rem;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n}\n.signupform-item-vcode[data-v-26bef1d0] {\n    display: inline-block;\n    background: #F0552D;\n    font-size: 0.32rem;\n    color: #fff;\n    line-height: 0.9rem;\n    width: 2.26667rem;\n    text-align: center;\n}\n.signupform-item-vcode-timeout[data-v-26bef1d0] {\n    background: #B2B2B2;\n}\n.submitarea[data-v-26bef1d0] {\n  position: static;\n  margin-top: 1.6rem;\n}\n",""])},415:function(e,t,r){"use strict";r.r(t);r(73),r(40);var n,o=r(5),c=(r(60),r(23),r(24),r(13),r(43),r(202)),l=r(190),f=r(181),d=r(195),m=r(192),v=(r(189),{name:"Signup",mixins:[m.default],head:function(){return{title:"报名信息"}},components:{"step-bar":c.b,toast:d.a,"poster-modal":c.a,"submit-area":c.c},data:function(){return{steps:l.STEPS,signupData:{chnName:"",engName:"",landiLevel:"",province:"0",city:"0"},validateCodeTimeout:0,dataNotEmpty:!1,landiLevels:[],regionData:l.REGION_DATA,errorMessage:""}},methods:{provinceSelectChange:function(){this.signupData.city="0"},formBlur:function(){for(var e=0,t=Object.keys(this.signupData);e<t.length;e++){var r=t[e];if(""==this.signupData[r]||"0"==this.signupData[r])return void(this.dataNotEmpty=!1)}this.dataNotEmpty=!0},formSubmit:function(){if(this.dataNotEmpty){for(var e=0,t=Object.keys(this.signupData);e<t.length;e++){var r=t[e];if(!l.SIGNUP_DATA_RULE[r].rule.test(this.signupData[r]))return this.errorMessage=l.SIGNUP_DATA_RULE[r].message,void this.$refs.toast.showToast(this.errorMessage)}var n={},o=!0,c=!1,f=void 0;try{for(var d,m=this.landiLevels[Symbol.iterator]();!(o=(d=m.next()).done);o=!0){var v=d.value;v.id==this.signupData.landiLevel&&(n=v)}}catch(e){c=!0,f=e}finally{try{o||null==m.return||m.return()}finally{if(c)throw f}}var h=this.$refs.province,y=this.$refs.city;localStorage.setItem(l.STROGE.FORM_DATA,JSON.stringify({landiLevel:n,address:"".concat(h.options[h.selectedIndex].text,"/").concat(y.options[y.selectedIndex].text,"#").concat(this.signupData.province,"/").concat(this.signupData.city)})),this.gotoPage("presentation-signup-step2")}}},mounted:(n=Object(o.a)(regeneratorRuntime.mark(function e(){var t,r,n,address;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.$refs.toast.showLoadingToast(),t=this.$route.query.activity_id,e.next=4,f.a.get("".concat(l.API.ACTIVITY_DETAIL,"?activity_id=").concat(t));case 4:if((r=e.sent).status){e.next=9;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(r.info),e.abrupt("return");case 9:return this.landiLevels=r.data.combinations,e.next=12,f.a.get("".concat(l.API.MY_WORK,"?activity_id=").concat(t));case 12:if((n=e.sent).status){e.next=19;break}return this.$refs.toast.hideLoadingToast(),this.$refs.toast.showToast(n.info),e.abrupt("return");case 19:this.signupData.engName=n.data.en_name,this.signupData.chnName=n.data.cn_name,n.data.id&&(this.signupData.landiLevel=n.data.combination_id,address=n.data.address.split("#")[1].split("/"),this.signupData.province=address[0],this.signupData.city=address[1]);case 22:this.formBlur(),this.$refs.toast.hideLoadingToast();case 24:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)})}),h=(r(358),r(19)),component=Object(h.a)(v,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"signup"}},[r("div",{staticClass:"top-step-bar"},[r("step-bar",{attrs:{steps:e.steps,progress:10}})],1),e._v(" "),r("div",{staticClass:"page-content"},[r("h1",[e._v("报名信息")]),e._v(" "),r("div",{staticClass:"page-content-content"},[r("div",{staticClass:"signupform"},[r("div",{staticClass:"signupform-item"},[r("span",{staticClass:"signupform-item-label required"},[e._v("孩子中文名")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.signupData.chnName,expression:"signupData.chnName"}],staticClass:"signupform-item-input",attrs:{placeholder:"请填写中文名"},domProps:{value:e.signupData.chnName},on:{blur:e.formBlur,input:function(t){t.target.composing||e.$set(e.signupData,"chnName",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"signupform-item"},[r("span",{staticClass:"signupform-item-label required"},[e._v("孩子英文名")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.signupData.engName,expression:"signupData.engName"}],staticClass:"signupform-item-input",attrs:{placeholder:"请填写英文名"},domProps:{value:e.signupData.engName},on:{blur:e.formBlur,input:function(t){t.target.composing||e.$set(e.signupData,"engName",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"signupform-item"},[r("span",{staticClass:"signupform-item-label required"},[e._v("兰迪级别")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.signupData.landiLevel,expression:"signupData.landiLevel"}],staticClass:"signupform-item-select",on:{blur:e.formBlur,change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.signupData,"landiLevel",t.target.multiple?r:r[0])},e.formBlur]}},[r("option",{attrs:{value:""}},[e._v("请选择级别")]),e._v(" "),e._l(e.landiLevels,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),e._v(" "),r("div",{staticClass:"signupform-item"},[r("span",{staticClass:"signupform-item-label required"},[e._v("省份")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.signupData.province,expression:"signupData.province"}],ref:"province",staticClass:"signupform-item-select",on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.signupData,"province",t.target.multiple?r:r[0])},e.provinceSelectChange],blur:e.formBlur}},[r("option",{attrs:{value:"0"}},[e._v("请选择所在省份")]),e._v(" "),e._l(e.regionData.province,function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)]),e._v(" "),r("div",{staticClass:"signupform-item"},[r("span",{staticClass:"signupform-item-label required"},[e._v("城市")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.signupData.city,expression:"signupData.city"}],ref:"city",staticClass:"signupform-item-select",on:{blur:e.formBlur,change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.signupData,"city",t.target.multiple?r:r[0])},e.formBlur]}},[r("option",{attrs:{value:"0"}},[e._v("请选择所在城市")]),e._v(" "),e._l(e.regionData.city[e.signupData.province],function(t){return r("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})],2)])]),e._v(" "),r("submit-area",{staticClass:"submitarea",attrs:{hint:"请确认信息属实, 一旦提交后不可再修改",btnText:"提交报名信息",isClickable:e.dataNotEmpty},on:{submit:e.formSubmit}})],1)]),e._v(" "),r("toast",{ref:"toast"})],1)},[],!1,null,"26bef1d0",null);t.default=component.exports}}]);