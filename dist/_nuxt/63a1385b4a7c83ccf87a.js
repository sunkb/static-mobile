(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{178:function(e,t,n){"use strict";var o=Object.prototype.hasOwnProperty,r=Array.isArray,l=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),c=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:c,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],i=0;i<t.length;++i)for(var o=t[i],l=o.obj[o.prop],c=Object.keys(l),d=0;d<c.length;++d){var f=c[d],m=l[f];"object"==typeof m&&null!==m&&-1===n.indexOf(m)&&(t.push({obj:l,prop:f}),n.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(r(n)){for(var o=[],l=0;l<n.length;++l)void 0!==n[l]&&o.push(n[l]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,n){var o=e.replace(/\+/g," ");if("iso-8859-1"===n)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,n){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===n)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var r="",i=0;i<o.length;++i){var c=o.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?r+=o.charAt(i):c<128?r+=l[c]:c<2048?r+=l[192|c>>6]+l[128|63&c]:c<55296||c>=57344?r+=l[224|c>>12]+l[128|c>>6&63]+l[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&o.charCodeAt(i)),r+=l[240|c>>18]+l[128|c>>12&63]+l[128|c>>6&63]+l[128|63&c])}return r},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,n){if(!source)return t;if("object"!=typeof source){if(r(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var l=t;return r(t)&&!r(source)&&(l=c(t,n)),r(t)&&r(source)?(source.forEach(function(r,i){if(o.call(t,i)){var l=t[i];l&&"object"==typeof l&&r&&"object"==typeof r?t[i]=e(l,r,n):t.push(r)}else t[i]=r}),t):Object.keys(source).reduce(function(t,r){var l=source[r];return o.call(t,r)?t[r]=e(t[r],l,n):t[r]=l,t},l)}}},179:function(e,t,n){"use strict";var o=String.prototype.replace,r=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,r,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},181:function(e,t,n){"use strict";n(13),n(73);var o=n(75),r=n.n(o),l=n(184),c=n.n(l);function d(e,t){var n=t.split("?")[0],o=[],r=-1!==t.indexOf("?")?t.split("?")[1]:"";if(""!==r){for(var i=(o=r.split("&")).length-1;i>=0;i-=1)o[i].split("=")[0]===e&&o.splice(i,1);n=n+"?"+o.join("&")}return n}console.log("process.env.ENV_API","https://release6.landi.com/");var f=r.a.create({baseURL:"https://release6.landi.com/",transformRequest:[function(data){return c.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});f.interceptors.request.use(function(e){return e},function(e){return console.log(e),Promise.reject(e)}),f.interceptors.response.use(function(e){return 200===e.status?Promise.resolve(e.data):Promise.reject(e)},function(e){if(e.response)switch(e.response.status){case 401:var t=window.location.href;t=d("code",t),console.log("code",t),t=d("state",t),console.log("state",t),t=encodeURIComponent(t),console.log("loginUrl",t);var n="https://release6.landi.com/Mobile/Login/index?redirect_url="+t;console.log("loginUrl",n),window.location.href=n;break;case 404:e.message="请求错误,未找到该资源";break;case 500:e.message="服务器端出错";break;default:e.message="连接错误".concat(e.response.status)}return Promise.reject(e)}),t.a=f},182:function(e,t,n){"use strict";var o=n(178),r=n(179),l=Object.prototype.hasOwnProperty,c={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},d=Array.isArray,f=Array.prototype.push,m=function(e,t){f.apply(e,d(t)?t:[t])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:r.formatters[r.default],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},y=function e(object,t,n,r,l,c,filter,f,h,y,w,C,x){var _=object;if("function"==typeof filter?_=filter(t,_):_ instanceof Date?_=y(_):"comma"===n&&d(_)&&(_=_.join(",")),null===_){if(r)return c&&!C?c(t,v.encoder,x):t;_=""}if("string"==typeof _||"number"==typeof _||"boolean"==typeof _||o.isBuffer(_))return c?[w(C?t:c(t,v.encoder,x))+"="+w(c(_,v.encoder,x))]:[w(t)+"="+w(String(_))];var j,k=[];if(void 0===_)return k;if(d(filter))j=filter;else{var A=Object.keys(_);j=f?A.sort(f):A}for(var i=0;i<j.length;++i){var O=j[i];l&&null===_[O]||(d(_)?m(k,e(_[O],"function"==typeof n?n(t,O):t,n,r,l,c,filter,f,h,y,w,C,x)):m(k,e(_[O],t+(h?"."+O:"["+O+"]"),n,r,l,c,filter,f,h,y,w,C,x)))}return k};e.exports=function(object,e){var t,n=object,o=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=r.default;if(void 0!==e.format){if(!l.call(r.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=r.formatters[n],filter=v.filter;return("function"==typeof e.filter||d(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof o.filter?n=(0,o.filter)("",n):d(o.filter)&&(t=o.filter);var f,h=[];if("object"!=typeof n||null===n)return"";f=e&&e.arrayFormat in c?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var w=c[f];t||(t=Object.keys(n)),o.sort&&t.sort(o.sort);for(var i=0;i<t.length;++i){var C=t[i];o.skipNulls&&null===n[C]||m(h,y(n[C],C,w,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var x=h.join(o.delimiter),_=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),x.length>0?_+x:""}},183:function(e,t,n){"use strict";var o=n(178),r=Object.prototype.hasOwnProperty,l={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},d=function(e,t,n){if(e){var o=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,l=/(\[[^[\]]*])/g,c=/(\[[^[\]]*])/.exec(o),d=c?o.slice(0,c.index):o,f=[];if(d){if(!n.plainObjects&&r.call(Object.prototype,d)&&!n.allowPrototypes)return;f.push(d)}for(var i=0;null!==(c=l.exec(o))&&i<n.depth;){if(i+=1,!n.plainObjects&&r.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;f.push(c[1])}return c&&f.push("["+o.slice(c.index)+"]"),function(e,t,n){for(var o=t,i=e.length-1;i>=0;--i){var r,l=e[i];if("[]"===l&&n.parseArrays)r=[].concat(o);else{r=n.plainObjects?Object.create(null):{};var c="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,d=parseInt(c,10);n.parseArrays||""!==c?!isNaN(d)&&l!==c&&String(d)===c&&d>=0&&n.parseArrays&&d<=n.arrayLimit?(r=[])[d]=o:r[c]=o:r={0:o}}o=r}return o}(f,t,n)}};e.exports=function(e,t){var n=function(e){if(!e)return l;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?l.charset:e.charset;return{allowDots:void 0===e.allowDots?l.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:l.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:l.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:l.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:l.comma,decoder:"function"==typeof e.decoder?e.decoder:l.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:l.delimiter,depth:"number"==typeof e.depth?e.depth:l.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:l.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:l.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:l.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:l.strictNullHandling}}(t);if(""===e||null==e)return n.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){var i,n={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,m=d.split(t.delimiter,f),h=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?v="utf-8":"utf8=%26%2310003%3B"===m[i]&&(v="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var y,w,C=m[i],x=C.indexOf("]="),_=-1===x?C.indexOf("="):x+1;-1===_?(y=t.decoder(C,l.decoder,v),w=t.strictNullHandling?null:""):(y=t.decoder(C.slice(0,_),l.decoder,v),w=t.decoder(C.slice(_+1),l.decoder,v)),w&&t.interpretNumericEntities&&"iso-8859-1"===v&&(w=c(w)),w&&t.comma&&w.indexOf(",")>-1&&(w=w.split(",")),r.call(n,y)?n[y]=o.combine(n[y],w):n[y]=w}return n}(e,n):e,m=n.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var v=h[i],y=d(v,f[v],n);m=o.merge(m,y,n)}return o.compact(m)}},184:function(e,t,n){"use strict";var o=n(182),r=n(183),l=n(179);e.exports={formats:l,parse:r,stringify:o}},192:function(e,t,n){var content=n(206);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("28d83c20",content,!0,{sourceMap:!1})},199:function(e,t,n){"use strict";var o={data:function(){return{timer:null}},props:{dialogText:{type:String,default:""}},mounted:function(){var e=this;this.timer=setTimeout(function(){clearTimeout(e.timer),e.timer=null,e.$emit("closeDialog")},2e3)}},r=(n(205),n(19)),component=Object(r.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade"}},[t("div",{staticClass:"dialog-container"},[t("div",{staticClass:"content"},[this._v(this._s(this.dialogText))])])])},[],!1,null,"0e84e6c6",null);t.a=component.exports},205:function(e,t,n){"use strict";var o=n(192);n.n(o).a},206:function(e,t,n){(e.exports=n(38)(!1)).push([e.i,".fade-enter-active[data-v-0e84e6c6],\n.fade-leave-active[data-v-0e84e6c6] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-0e84e6c6],\n.fade-leave-to[data-v-0e84e6c6] {\n  opacity: 0;\n}\n.dialog-container[data-v-0e84e6c6] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n.dialog-container .content[data-v-0e84e6c6] {\n  padding: 0.13rem 0.27rem;\n  background: #000;\n  opacity: 0.6;\n  border-radius: 0.106667rem;\n  text-align: center;\n  color: #fff;\n}",""])},216:function(e,t,n){e.exports=n.p+"img/15d9e4c.png"},227:function(e,t,n){var content=n(327);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("568a15e9",content,!0,{sourceMap:!1})},228:function(e,t,n){var content=n(329);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("563e535e",content,!0,{sourceMap:!1})},325:function(e,t,n){e.exports=n.p+"img/114d49c.png"},326:function(e,t,n){"use strict";var o=n(227);n.n(o).a},327:function(e,t,n){(e.exports=n(38)(!1)).push([e.i,".mask[data-v-716f81fe] {\n  background-color: #535353;\n  opacity: 0.85;\n  position: fixed;\n  z-index: 500;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n.fade-in[data-v-716f81fe] {\n  animation: fadeIn-data-v-716f81fe 0.5s;\n}\n@keyframes fadeIn-data-v-716f81fe {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 0.85;\n}\n}\n.popup-content[data-v-716f81fe] {\n  position: fixed;\n  z-index: 800;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  right: 0;\n  margin: auto;\n  width: 7.83rem;\n  height: 3.92rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 0.133333rem;\n  overflow: hidden;\n}\n.popup-content .top[data-v-716f81fe] {\n  display: flex;\n  align-items: center;\n  margin-bottom: .87rem;\n}\n.popup-content .top input[data-v-716f81fe] {\n  width: 3.48rem;\n  height: 1.07rem;\n  border: 0.026667rem solid #bfbfbf;\n  border-radius: 0.133333rem;\n  margin-right: .35rem;\n}\n.popup-content .bottom[data-v-716f81fe] {\n  width: 100%;\n  display: flex;\n  border: 0.013333rem solid #DCDCDC;\n  font-size: .53rem;\n}\n.popup-content .bottom .btn-close[data-v-716f81fe] {\n  width: 50%;\n  color: #181816;\n  text-align: center;\n  line-height: 1.19rem;\n}\n.popup-content .bottom .btn-submit[data-v-716f81fe] {\n  width: 50%;\n  color: #FA4B7E;\n  text-align: center;\n  line-height: 1.19rem;\n}",""])},328:function(e,t,n){"use strict";var o=n(228);n.n(o).a},329:function(e,t,n){t=e.exports=n(38)(!1);var o=n(180),r=o(n(330)),l=o(n(216));t.push([e.i,".login-container[data-v-e9fa5d6a] {\n  background: #ffffff;\n  width: 100vw;\n  height: 100vh;\n}\n.login-container .main[data-v-e9fa5d6a] {\n  padding: 1.44rem 0.65rem 0 0.68rem;\n}\n.login-container .main .logo-content[data-v-e9fa5d6a] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.login-container .main .logo-content img[data-v-e9fa5d6a] {\n  width: 2.09rem;\n  height: 0.52rem;\n  margin-bottom: 0.39rem;\n}\n.login-container .main .logo-content span[data-v-e9fa5d6a] {\n  color: #3f3f3f;\n  font-size: 0.53rem;\n  margin-bottom: 1.35rem;\n  font-weight: bold;\n}\n.login-container .main .tab[data-v-e9fa5d6a] {\n  display: flex;\n  align-items: center;\n}\n.login-container .main .tab .btn-tab-login[data-v-e9fa5d6a],\n.login-container .main .tab .btn-tab-logon[data-v-e9fa5d6a] {\n  font-size: 0.53rem;\n  padding-right: 0.44rem;\n  color: #999999;\n}\n.login-container .main .tab .btn-tab-logon[data-v-e9fa5d6a] {\n  padding-left: 0.44rem;\n}\n.login-container .main .tab .dotted-line[data-v-e9fa5d6a] {\n  display: inline-block;\n  width: 0.027rem;\n  height: 0.44rem;\n  background-image: url("+r+");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.login-container .main .tel[data-v-e9fa5d6a] {\n  border-bottom: 0.026667rem solid #d9d9d9;\n  margin-top: 1.01rem;\n  position: relative;\n}\n.login-container .main .tel i[data-v-e9fa5d6a] {\n  display: block;\n  width: 0.43rem;\n  height: 0.43rem;\n  background-image: url("+l+");\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 0;\n  bottom: 0.2rem;\n  border-radius: 13.32rem;\n}\n.login-container .main .ver-code-img[data-v-e9fa5d6a] {\n  margin-top: .27rem;\n}\n.login-container .main .input-warning[data-v-e9fa5d6a] {\n  color: #fa4b7e;\n  font-size: 0.37rem;\n  margin-top: 0.12rem;\n}\n.login-container .main .ver-code[data-v-e9fa5d6a] {\n  border-bottom: 0.026667rem solid #d9d9d9;\n  margin-top: 0.75rem;\n  position: relative;\n}\n.login-container .main .ver-code .btn-ver-code[data-v-e9fa5d6a] {\n  width: 2.91rem;\n  height: 0.88rem;\n  line-height: 0.88rem;\n  text-align: center;\n  border: 0.026667rem solid #fa4b7e;\n  border-radius: 0.066667rem;\n  position: absolute;\n  right: 0;\n  bottom: 0.53rem;\n  font-size: 0.37rem;\n  color: #fa4b7e;\n}\n.login-container .main .login-input[data-v-e9fa5d6a] {\n  width: 8.67rem;\n  height: 1.23rem;\n  border: 0;\n  font-size: 0.64rem;\n  outline: 0;\n  color: #fa4b7e;\n  font-weight: bold;\n}\n.login-container .main .login-input[data-v-e9fa5d6a]::-webkit-input-placeholder {\n  color: #999999;\n  font-size: 0.37rem;\n  font-weight: 100;\n}\n.login-container .main .input-title[data-v-e9fa5d6a] {\n  color: #3f3f3f;\n  font-size: 0.48rem;\n}\n.login-container .main .btn-login[data-v-e9fa5d6a] {\n  width: 8.67rem;\n  height: 1.07rem;\n  background-color: #fa4b7e;\n  font-size: 0.48rem;\n  color: #fff;\n  border-radius: 0.133333rem;\n  text-align: center;\n  line-height: 1.07rem;\n  margin-top: 1.47rem;\n}\n.login-container .main .btn-text[data-v-e9fa5d6a] {\n  color: #fa4b7e;\n  font-size: 0.37rem;\n  margin-top: 0.21rem;\n}\n.color-black[data-v-e9fa5d6a] {\n  color: #3f3f3f !important;\n}\n.border-pink[data-v-e9fa5d6a] {\n  border-color: #fa4b7e !important;\n}\n.border-color-grey[data-v-e9fa5d6a] {\n  border-color: #d9d9d9 !important;\n  color: #999999 !important;\n}",""])},330:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAABCAQMAAABKPuVMAAAAA1BMVEXl5eX7Oj7PAAAAC0lEQVQI12MYBAAAAIQAAcTjexEAAAAASUVORK5CYII="},401:function(e,t,n){"use strict";n.r(t);n(111),n(108),n(110);var o={data:function(){return{isFadeIn:!0,verCode:""}},props:{popupType:{type:String,default:""},verCodeImg:{type:String,default:""}},mounted:function(){this.isFadeIn=!0},beforeDestroy:function(){this.isFadeIn=!1},methods:{closePopup:function(){this.$emit("closePopup")},changeVerCode:function(){this.$emit("changeVerCode")},submit:function(){this.$emit("submit",this.verCode)}}},r=(n(326),n(19)),l=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{class:[{"fade-in":e.isFadeIn},"mask"]}),e._v(" "),n("div",{staticClass:"popup-content"},[n("div",{staticClass:"top"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.verCode,expression:"verCode"}],attrs:{type:"text",placeholder:"请填写验证码"},domProps:{value:e.verCode},on:{input:function(t){t.target.composing||(e.verCode=t.target.value)}}}),e._v(" "),n("img",{staticClass:"ver-code-img",attrs:{src:e.verCodeImg},on:{click:e.changeVerCode}})]),e._v(" "),n("div",{staticClass:"bottom"},[n("span",{staticClass:"btn-close",on:{click:e.closePopup}},[e._v("取消")]),n("span",{staticClass:"btn-submit",on:{click:e.submit}},[e._v("确定")])])])])},[],!1,null,"716f81fe",null).exports,c=n(181),d={head:function(){return{title:"快登录abc360，学习吧~"}},data:function(){return{formType:"login",isTelFocus:!1,isVerCodeFocus:!1,showNotExit:!1,showRightVerCode:!1,showAlreadyStudent:!1,showRightTel:!1,isLoading:!1,tel:"",verCode:"",timer:null,timerCount:5,verCodeImg:"",showPopupVCode:!1,dialogText:"",showDialog:!1}},components:{"v-dialog":n(199).a,popupVcode:l},computed:{showClearIcon:function(){return""!==this.tel},showGoBack:function(){return"login"===this.formType}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},methods:{funSubmit:function(){var data,e=this;/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.tel)?"logon"===this.formType?(data=this.getQueryString("groupbuyCode")?{mobile:this.tel,code:this.verCode,from:"1154",tjm:this.getQueryString("groupbuyCode"),password:this.tel.substring(5)}:{mobile:this.tel,code:this.verCode,from:"1154",password:this.tel.substring(5)},c.a.post("V1/WxStudents/register2",data).then(function(t){200===t.errorCode&&(e.getQueryString("groupbuyId")?e.$router.push({name:"group_buy-detail",query:{groupbuyId:e.getQueryString("groupbuyId")}}):e.$router.push({name:"group_buy-index"})),e.showDialog=!0,e.dialogText=t.errorMsg})):"login"===this.formType&&c.a.post("NV1/Students/smsLogin",{mobile:this.tel,yzm:this.verCode,source:"qkpt"}).then(function(t){200===t.errorCode&&(e.getQueryString("groupbuyId")?e.$router.push({name:"group_buy-detail",query:{groupbuyId:e.getQueryString("groupbuyId")}}):e.$router.push({name:"group_buy-index"})),e.showDialog=!0,e.dialogText=t.errorMsg}):this.showRightTel=!0},getQueryString:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null},changeTab:function(e){this.formType=e,this.tel="",this.verCode="",this.verCodeImg=""},funFocus:function(e){"tel"===e?this.isTelFocus=!0:"verCode"===e&&(this.isVerCodeFocus=!0)},funBlur:function(e){"tel"===e?this.isTelFocus=!1:"verCode"===e&&(this.isVerCodeFocus=!1)},clearTel:function(){this.tel=""},changeVerCode:function(){var e=this;c.a.get("Board/Public/verify",{responseType:"arraybuffer"}).then(function(t){var n=new Blob([t]),o=(window.URL||window.webkitURL).createObjectURL(n);e.verCodeImg=o})},submitVerCode:function(e){var t=this;c.a.get("V1/Students/smsAuthCode?mobile=".concat(this.tel,"&option=").concat("logon"===this.formType?"3":"4","&verify=").concat(e,"&skipCheck=1")).then(function(e){200===e.errorCode?(t.showPopupVCode=!1,t.showDialog=!0,t.dialogText=e.errorMsg,t.isLoading||(t.isLoading=!0,t.timer=setInterval(function(){t.timerCount-=1,t.timerCount<0&&(clearInterval(t.timer),t.timer=null,t.isLoading=!1,t.timerCount=5)},1e3))):(t.dialogText=e.errorMsg,t.showDialog=!0)})},getVerCode:function(){/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.tel)?(this.showRightTel=!1,this.showPopupVCode=!0,this.changeVerCode()):this.showRightTel=!0}}},f=(n(328),Object(r.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("div",{staticClass:"main"},["logon"===e.formType?o("div",{staticClass:"logo-content"},[o("img",{attrs:{src:n(325)}}),e._v(" "),o("span",[e._v("宝贝英语学习礼包")])]):e._e(),e._v(" "),o("div",{staticClass:"tab"},[o("span",{class:[{"color-black":"login"===e.formType},"btn-tab-login"],on:{click:function(t){return e.changeTab("login")}}},[e._v("登录")]),e._v(" "),o("i",{staticClass:"dotted-line"}),e._v(" "),o("span",{class:[{"color-black":"logon"===e.formType},"btn-tab-logon"],on:{click:function(t){return e.changeTab("logon")}}},[e._v("注册")])]),e._v(" "),o("div",{class:[{"border-pink":e.isTelFocus},"tel"]},[o("div",{staticClass:"input-title"},[e._v("手机号码")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"}],staticClass:"login-input",attrs:{maxlength:"11",placeholder:"+86 请输入手机号码",type:"number"},domProps:{value:e.tel},on:{blur:function(t){return e.funBlur("tel")},focus:function(t){return e.funFocus("tel")},input:function(t){t.target.composing||(e.tel=t.target.value)}}}),e._v(" "),e.showClearIcon?o("i",{on:{click:e.clearTel}}):e._e()]),e._v(" "),e.showNotExit?o("div",{staticClass:"input-warning"},[e._v("该学员不存在,请注册")]):e._e(),e._v(" "),e.showAlreadyStudent?o("div",{staticClass:"input-warning"},[e._v("您已是学员，去登录")]):e._e(),e._v(" "),e.showRightTel?o("div",{staticClass:"input-warning"},[e._v("请输入正确的手机号")]):e._e(),e._v(" "),o("div",{class:[{"border-pink":e.isVerCodeFocus},"ver-code"]},[o("div",{staticClass:"input-title"},[e._v("验证码")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.verCode,expression:"verCode"}],staticClass:"login-input",attrs:{maxlength:"6",placeholder:"请输入短信验证码",type:"number"},domProps:{value:e.verCode},on:{blur:function(t){return e.funBlur("verCode")},focus:function(t){return e.funFocus("verCode")},input:function(t){t.target.composing||(e.verCode=t.target.value)}}}),e._v(" "),o("div",{class:[{"border-color-grey":e.isLoading},"btn-ver-code"],on:{click:e.getVerCode}},[e._v(e._s(e.isLoading?"重新获取("+e.timerCount+")":"获取验证码"))])]),e._v(" "),e.showRightVerCode?o("div",{staticClass:"input-warning"},[e._v("请输入正确验证码哦~")]):e._e(),e._v(" "),o("div",{staticClass:"btn-login",on:{click:e.funSubmit}},[e._v(e._s("login"===e.formType?"登录":"立即注册"))]),e._v(" "),"logon"===e.formType?o("div",{staticClass:"btn-text",on:{click:function(t){e.formType="login"}}},[e._v("返回登录")]):e._e()]),e._v(" "),e.showDialog?o("v-dialog",{attrs:{dialogText:e.dialogText},on:{closeDialog:function(t){e.showDialog=!1}}}):e._e(),e._v(" "),e.showPopupVCode?o("popup-vcode",{attrs:{verCodeImg:e.verCodeImg},on:{changeVerCode:e.changeVerCode,closePopup:function(t){e.showPopupVCode=!1},submit:e.submitVerCode}}):e._e()],1)},[],!1,null,"e9fa5d6a",null));t.default=f.exports}}]);