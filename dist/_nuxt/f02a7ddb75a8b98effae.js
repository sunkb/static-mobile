(window.webpackJsonp=window.webpackJsonp||[]).push([[8,41,44,45],{178:function(e,t,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Array.isArray,l=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),c=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:c,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var o=t[i],l=o.obj[o.prop],c=Object.keys(l),d=0;d<c.length;++d){var m=c[d],f=l[m];"object"==typeof f&&null!==f&&-1===r.indexOf(f)&&(t.push({obj:l,prop:m}),r.push(f))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(n(r)){for(var o=[],l=0;l<r.length;++l)void 0!==r[l]&&o.push(r[l]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r){if(0===e.length)return e;var o="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(o).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var n="",i=0;i<o.length;++i){var c=o.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?n+=o.charAt(i):c<128?n+=l[c]:c<2048?n+=l[192|c>>6]+l[128|63&c]:c<55296||c>=57344?n+=l[224|c>>12]+l[128|c>>6&63]+l[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&o.charCodeAt(i)),n+=l[240|c>>18]+l[128|c>>12&63]+l[128|c>>6&63]+l[128|63&c])}return n},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(n(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!o.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var l=t;return n(t)&&!n(source)&&(l=c(t,r)),n(t)&&n(source)?(source.forEach(function(n,i){if(o.call(t,i)){var l=t[i];l&&"object"==typeof l&&n&&"object"==typeof n?t[i]=e(l,n,r):t.push(n)}else t[i]=n}),t):Object.keys(source).reduce(function(t,n){var l=source[n];return o.call(t,n)?t[n]=e(t[n],l,r):t[n]=l,t},l)}}},179:function(e,t,r){"use strict";var o=String.prototype.replace,n=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return o.call(e,n,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},180:function(e,t,r){"use strict";r(13),r(57),r(73);var o=r(74),n=r.n(o),l=r(184),c=r.n(l);console.log("process.env.ENV_API","https://www.landi.com/");var d=n.a.create({baseURL:"http:"===document.location.protocol?"https://www.landi.com/".replace("https","http"):"https://www.landi.com/",transformRequest:[function(data){return c.a.stringify(data)}],headers:{"Content-Type":"application/x-www-form-urlencoded"},withCredentials:!0,timeout:5e4});d.interceptors.request.use(function(e){return e},function(e){return console.log(e),Promise.reject(e)}),d.interceptors.response.use(function(e){return 200===e.status?Promise.resolve(e.data):Promise.reject(e)},function(e){if(e.response)switch(e.response.status){case 401:break;case 404:e.message="请求错误,未找到该资源";break;case 500:e.message="服务器端出错";break;default:e.message="连接错误".concat(e.response.status)}return Promise.reject(e)}),t.a=d},182:function(e,t,r){"use strict";var o=r(178),n=r(179),l=Object.prototype.hasOwnProperty,c={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},d=Array.isArray,m=Array.prototype.push,f=function(e,t){m.apply(e,d(t)?t:[t])},h=Date.prototype.toISOString,v={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,formatter:n.formatters[n.default],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},w=function e(object,t,r,n,l,c,filter,m,h,w,y,x,k){var _=object;if("function"==typeof filter?_=filter(t,_):_ instanceof Date?_=w(_):"comma"===r&&d(_)&&(_=_.join(",")),null===_){if(n)return c&&!x?c(t,v.encoder,k):t;_=""}if("string"==typeof _||"number"==typeof _||"boolean"==typeof _||o.isBuffer(_))return c?[y(x?t:c(t,v.encoder,k))+"="+y(c(_,v.encoder,k))]:[y(t)+"="+y(String(_))];var C,z=[];if(void 0===_)return z;if(d(filter))C=filter;else{var j=Object.keys(_);C=m?j.sort(m):j}for(var i=0;i<C.length;++i){var A=C[i];l&&null===_[A]||(d(_)?f(z,e(_[A],"function"==typeof r?r(t,A):t,r,n,l,c,filter,m,h,w,y,x,k)):f(z,e(_[A],t+(h?"."+A:"["+A+"]"),r,n,l,c,filter,m,h,w,y,x,k)))}return z};e.exports=function(object,e){var t,r=object,o=function(e){if(!e)return v;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||v.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=n.default;if(void 0!==e.format){if(!l.call(n.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=n.formatters[r],filter=v.filter;return("function"==typeof e.filter||d(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:v.addQueryPrefix,allowDots:void 0===e.allowDots?v.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:v.charsetSentinel,delimiter:void 0===e.delimiter?v.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:v.encode,encoder:"function"==typeof e.encoder?e.encoder:v.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:v.encodeValuesOnly,filter:filter,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:v.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:v.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:v.strictNullHandling}}(e);"function"==typeof o.filter?r=(0,o.filter)("",r):d(o.filter)&&(t=o.filter);var m,h=[];if("object"!=typeof r||null===r)return"";m=e&&e.arrayFormat in c?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var y=c[m];t||(t=Object.keys(r)),o.sort&&t.sort(o.sort);for(var i=0;i<t.length;++i){var x=t[i];o.skipNulls&&null===r[x]||f(h,w(r[x],x,y,o.strictNullHandling,o.skipNulls,o.encode?o.encoder:null,o.filter,o.sort,o.allowDots,o.serializeDate,o.formatter,o.encodeValuesOnly,o.charset))}var k=h.join(o.delimiter),_=!0===o.addQueryPrefix?"?":"";return o.charsetSentinel&&("iso-8859-1"===o.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),k.length>0?_+k:""}},183:function(e,t,r){"use strict";var o=r(178),n=Object.prototype.hasOwnProperty,l={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},d=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,l=/(\[[^[\]]*])/g,c=/(\[[^[\]]*])/.exec(o),d=c?o.slice(0,c.index):o,m=[];if(d){if(!r.plainObjects&&n.call(Object.prototype,d)&&!r.allowPrototypes)return;m.push(d)}for(var i=0;null!==(c=l.exec(o))&&i<r.depth;){if(i+=1,!r.plainObjects&&n.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;m.push(c[1])}return c&&m.push("["+o.slice(c.index)+"]"),function(e,t,r){for(var o=t,i=e.length-1;i>=0;--i){var n,l=e[i];if("[]"===l&&r.parseArrays)n=[].concat(o);else{n=r.plainObjects?Object.create(null):{};var c="["===l.charAt(0)&&"]"===l.charAt(l.length-1)?l.slice(1,-1):l,d=parseInt(c,10);r.parseArrays||""!==c?!isNaN(d)&&l!==c&&String(d)===c&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(n=[])[d]=o:n[c]=o:n={0:o}}o=n}return o}(m,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return l;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?l.charset:e.charset;return{allowDots:void 0===e.allowDots?l.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:l.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:l.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:l.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:l.comma,decoder:"function"==typeof e.decoder?e.decoder:l.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:l.delimiter,depth:"number"==typeof e.depth?e.depth:l.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:l.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:l.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:l.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:l.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var m="string"==typeof e?function(e,t){var i,r={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,m=t.parameterLimit===1/0?void 0:t.parameterLimit,f=d.split(t.delimiter,m),h=-1,v=t.charset;if(t.charsetSentinel)for(i=0;i<f.length;++i)0===f[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[i]?v="utf-8":"utf8=%26%2310003%3B"===f[i]&&(v="iso-8859-1"),h=i,i=f.length);for(i=0;i<f.length;++i)if(i!==h){var w,y,x=f[i],k=x.indexOf("]="),_=-1===k?x.indexOf("="):k+1;-1===_?(w=t.decoder(x,l.decoder,v),y=t.strictNullHandling?null:""):(w=t.decoder(x.slice(0,_),l.decoder,v),y=t.decoder(x.slice(_+1),l.decoder,v)),y&&t.interpretNumericEntities&&"iso-8859-1"===v&&(y=c(y)),y&&t.comma&&y.indexOf(",")>-1&&(y=y.split(",")),n.call(r,w)?r[w]=o.combine(r[w],y):r[w]=y}return r}(e,r):e,f=r.plainObjects?Object.create(null):{},h=Object.keys(m),i=0;i<h.length;++i){var v=h[i],w=d(v,m[v],r);f=o.merge(f,w,r)}return o.compact(f)}},184:function(e,t,r){"use strict";var o=r(182),n=r(183),l=r(179);e.exports={formats:l,parse:n,stringify:o}},205:function(e,t,r){var content=r(268);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("82ef953e",content,!0,{sourceMap:!1})},267:function(e,t,r){"use strict";var o=r(205);r.n(o).a},268:function(e,t,r){(e.exports=r(38)(!1)).push([e.i,'@-webkit-keyframes bounce-wave-data-v-587a47c2{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-0.26667rem);transform:translateY(-0.26667rem)}}@-moz-keyframes bounce-wave-data-v-587a47c2{0%{-moz-transform:translateY(0);transform:translateY(0)}100%{-moz-transform:translateY(-0.26667rem);transform:translateY(-0.26667rem)}}@-o-keyframes bounce-wave-data-v-587a47c2{0%{-o-transform:translateY(0);transform:translateY(0)}100%{-o-transform:translateY(-0.26667rem);transform:translateY(-0.26667rem)}}@keyframes bounce-wave-data-v-587a47c2{0%{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-0.26667rem);-moz-transform:translateY(-0.26667rem);-o-transform:translateY(-0.26667rem);transform:translateY(-0.26667rem)}}.bounce-animation[data-v-587a47c2]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.8);z-index:100;font-family:"Helvetica Neue", Helvetica, STHeiTi, "Microsoft Yahei", Arial, sans-serif;-webkit-font-smoothing:antialiased}.bounce-animation .loading-container[data-v-587a47c2]{position:fixed;left:50%;top:50%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-transform:translate(-50%, -50%);-moz-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);-o-transform:translate(-50%, -50%);transform:translate(-50%, -50%);z-index:101}.bounce-animation .loading-container .item[data-v-587a47c2]{color:#fff;font-size:0.61333rem;font-weight:bold;margin-right:0.34667rem;-moz-animation:bounce-wave-data-v-587a47c2 0.3s infinite alternate;-o-animation:bounce-wave-data-v-587a47c2 0.3s infinite alternate;animation:bounce-wave-data-v-587a47c2 0.3s infinite alternate;-webkit-animation:bounce-wave-data-v-587a47c2 0.3s infinite alternate}.loading-container .item[data-v-587a47c2]:nth-child(2){-webkit-animation-delay:0.2s;-moz-animation-delay:0.2s;-o-animation-delay:0.2s;animation-delay:0.2s}.loading-container .item[data-v-587a47c2]:nth-child(3){-webkit-animation-delay:0.3s;-moz-animation-delay:0.3s;-o-animation-delay:0.3s;animation-delay:0.3s}.loading-container .item[data-v-587a47c2]:nth-child(4){-webkit-animation-delay:0.4s;-moz-animation-delay:0.4s;-o-animation-delay:0.4s;animation-delay:0.4s}.loading-container .item[data-v-587a47c2]:nth-child(5){-webkit-animation-delay:0.5s;-moz-animation-delay:0.5s;-o-animation-delay:0.5s;animation-delay:0.5s}.loading-container .item[data-v-587a47c2]:nth-child(6){-webkit-animation-delay:0.6s;-moz-animation-delay:0.6s;-o-animation-delay:0.6s;animation-delay:0.6s}.loading-container .item[data-v-587a47c2]:nth-child(7){-webkit-animation-delay:0.7s;-moz-animation-delay:0.7s;-o-animation-delay:0.7s;animation-delay:0.7s}.loading-container .item[data-v-587a47c2]:nth-child(8){-webkit-animation-delay:0.8s;-moz-animation-delay:0.8s;-o-animation-delay:0.8s;animation-delay:0.8s}.loading-container .item[data-v-587a47c2]:nth-child(9){-webkit-animation-delay:0.9s;-moz-animation-delay:0.9s;-o-animation-delay:0.9s;animation-delay:0.9s}.loading-container .item[data-v-587a47c2]:nth-child(10){-webkit-animation-delay:1s;-moz-animation-delay:1s;-o-animation-delay:1s;animation-delay:1s}\n',""])},269:function(e,t,r){var content=r(434);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(39).default)("24edfb4d",content,!0,{sourceMap:!1})},307:function(e,t,r){"use strict";r(40);var o,n,l=r(5),c=r(180);t.a={posterIndex:(n=Object(l.a)(regeneratorRuntime.mark(function e(t){var data,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return data={url:t},r="/Mobile/Wx/share",console.log("data",data),console.log("url",r),e.next=6,c.a.post(r,data);case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),getPosterImage:(o=Object(l.a)(regeneratorRuntime.mark(function e(t){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="/Mobile/Wx/getImage?mediaId=".concat(t),e.next=3,c.a.get(r);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)})}},308:function(e,t,r){"use strict";r.r(t);var o=r(309),n=r.n(o);t.default=function(e,img){var t,r=0,o=0,l=1;function c(e,t,r){var o="translate3d(".concat(e,"px,").concat(t,"px,0)");return r="scale(".concat(r,")"),"".concat(o," ").concat(r)}n.a.on(e,"touchstart",function(e){e.preventDefault()}),n.a.on(e,"drag",function(e){var t=r+e.x,n=o+e.y;img.style.webkitTransform=c(t,n,l),img.style.transform=c(t,n,l)}),n.a.on(e,"dragend",function(e){r+=e.x,o+=e.y}),n.a.on(e,"pinch",function(e){void 0!==e.scale&&(t=e.scale-1+l,img.style.webkitTransform=c(r,o,t),img.style.transform=c(r,o,t))}),n.a.on(e,"pinchend",function(){l=t})}},310:function(e,t,r){"use strict";r.r(t);var o={pixelRatio:function(){return window.devicePixelRatio||1},filterImage:function(image,e,t,r){var canvas=document.createElement("canvas"),n=o.pixelRatio();canvas.width=e/n,canvas.height=t/n;var l=canvas.getContext("2d");return l.fillStyle="#fff",l.fillRect(0,0,canvas.width,canvas.height),r?(l.rotate(r*Math.PI/180),l.drawImage(image,0,-canvas.width)):l.drawImage(image,0,0,canvas.width,canvas.height),canvas.toDataURL("image/jpeg",.7)},drawImage:function(e,image,t){var r,n=o.pixelRatio();for(r in e.save(),t.image)t.image[r]=Math.floor(t.image[r]);for(r in t.frame)t.frame[r]=Math.floor(t.frame[r]);e.drawImage(image[0]||image,t.image.x,t.image.y,t.image.w,t.image.h,t.frame.x*n,t.frame.y*n,t.frame.w*n,t.frame.h*n),console.log("image-------\x3e",t.image.x,t.image.y,t.image.w,t.image.h),console.log("frame---------\x3e",t.frame.x*n,t.frame.y*n,t.frame.w*n,t.frame.h*n),e.restore()},intersect:function(e,t){var r,o,n,l,c,d,m=0,f=0,h=0,v=0,w=0,y=0;r=t.offset(),o=e.offset(),l=(n=r.left-o.left)+r.width,d=(c=r.top-o.top)+r.height,l<=0||n>=o.width||d<=0||c>=o.height||(n<0?(m=-n,w=0,h=l<o.width?l:o.width):(m=0,w=n,h=(l<o.width?l:o.width)-n),c<0?(f=-c,y=0,v=d<o.height?d:o.height):(f=0,y=c,v=(d<o.height?d:o.height)-c));var x=t.data("width")/t.width(),k=v*x;return+t.data("height")<k&&(k=t.data("height")),{frame:{x:w,y:y,w:h,h:v},image:{x:m*x,y:f*x,w:h*x,h:k}}}};t.default=o},321:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{}}},n=(r(267),r(19)),component=Object(n.a)(o,function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bounce-animation",attrs:{id:"animate-wrapper"}},[r("div",{staticClass:"loading-container"},[r("span",{staticClass:"item"},[e._v("海")]),e._v(" "),r("span",{staticClass:"item"},[e._v("报")]),e._v(" "),r("span",{staticClass:"item"},[e._v("正")]),e._v(" "),r("span",{staticClass:"item"},[e._v("在")]),e._v(" "),r("span",{staticClass:"item"},[e._v("制")]),e._v(" "),r("span",{staticClass:"item"},[e._v("作")]),e._v(" "),r("span",{staticClass:"item"},[e._v("中")]),e._v(" "),r("span",{staticClass:"item"},[e._v(".")]),e._v(" "),r("span",{staticClass:"item"},[e._v(".")]),e._v(" "),r("span",{staticClass:"item"},[e._v(".")])])])}],!1,null,"587a47c2",null);t.default=component.exports},430:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABGdBTUEAA1teXP8meAAAAp5JREFUWAnVmTFv00AUx+OqIFXK1CFIEZ3SjWxdGLuwRYoU6JeI1CXsnMSG1IUPwMDQhQohGFjzCVjoVImwIFVthg5NGVgafn8nFznFiS/2nVOe9M+59r17Pz/nzi/XqJLTxuNxA9c22kP1hDisnCf0jePPURQNdCGoAVVDr9EpWtXkI9+ad0gGrSKDRqioaQyDql5AGaiDLpBv05id3JA4R8igWxTKNLZB0UqgOGyhE1SWfSDQlhMkHZW5MuFsEgSZnUk6GeuxhtYszSJAmhAhv3NZ96zYcxNnllIuaNr/QI+W3kX4i5eE2GVhv1GojUS8lxyvG044YhBLbHEGyZ5Wd72K/Cyek7GLfCp7DbI4tBk8LBFuSKz36AotMiVKTBMjg3nerbitbAM8dhSV9kWG96n6bdBJVUlTfwS2n4y/z2P7NY3zOCNeU2x6xCqZQtscHIFbBHzjELQtQNVzIS0N7iMBHzoE3ROgis1QVgROTHVXwK90foreycvRisIpTF2zyaUIfWah6P8WZdlstsqPzi30J8sp5frIFfALzpuOkL7gxHstwDMdOZjKoSxIn3BCOhNgX0eOtgzSN5yQ+gI8doSz3dIgQ8Ap3rEAezbyCu1dyO3E9zPvhEgL3xNgI+2Kw7k5yIKzdVE4vYbjZSBvsTCDJILPzAk4LhbsrPwEZ56C4QC/Jwz2nfY5eoB8mZgq/0fBqsoV2CNft+5hnKMp0ySDGpDHVKW5Lz+aVO7/FpeKhdg4od8BXTSenFnLp2J3LVwqAZk0aF32KhUqeRIybX1o+SjbFHP2Oz3J9M8xHbV5VCakYrltHlla3Q0yKORWSL7tNwupFsD7uYF5B7I6zaZL9U3XpaYxDNKy5tcYtPRNdLdZk3KfwJbyb4i/o56HYBFLRlAAAAAASUVORK5CYII="},433:function(e,t,r){"use strict";var o=r(269);r.n(o).a},434:function(e,t,r){(e.exports=r(38)(!1)).push([e.i,".default-btn[data-v-55d0a0b2]{box-sizing:border-box;text-align:center;border:1px solid #29d5e5;color:#29d5e5;background:#fff}.primary-btn[data-v-55d0a0b2]{box-sizing:border-box;text-align:center;border:1px solid #29d5e5;color:#fff;background:#29d5e5}.primary-btn[data-v-55d0a0b2]:active{box-sizing:border-box;text-align:center;border:1px solid #179aa7;color:#fff;background:#179aa7}.poster-two[data-v-55d0a0b2]{width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:column;position:relative}.poster-two .clip-wrapper[data-v-55d0a0b2]{width:100%;flex:1;background:#fff;padding:0.48rem 0;overflow:auto}.poster-two .clip-wrapper .clip-box[data-v-55d0a0b2]{width:8rem;height:10.26667rem;margin:0 auto;position:relative;overflow:hidden}.poster-two .clip-wrapper .clip-box .p-info[data-v-55d0a0b2]{position:absolute;z-index:99;left:1.6rem;height:2.13333rem;display:flex;flex-direction:column;justify-content:center;padding-top:0.26667rem}.poster-two .clip-wrapper .clip-box .p-info .name[data-v-55d0a0b2]{color:#C64E24;font-size:0.34667rem;font-weight:700;margin-left:-0.26667rem;height:0.8rem}.poster-two .clip-wrapper .clip-box .p-info .date1[data-v-55d0a0b2]{font-size:0.58667rem;font-weight:700;color:#C64E24}.poster-two .clip-wrapper .clip-box .p-info .date2[data-v-55d0a0b2]{color:#C64E24;font-size:0.34667rem;font-weight:700}.poster-two .clip-wrapper .clip-box #temp-img[data-v-55d0a0b2]{width:8rem;height:10.26667rem;position:absolute;top:0;left:0;z-index:10}.poster-two .clip-wrapper .clip-box #clip-img[data-v-55d0a0b2]{width:100%;position:absolute;top:0;left:0;transform:translate3d(0, 0, 0) scale(1)}.poster-two .temp-container[data-v-55d0a0b2]{box-shadow:0 -0.01333rem 0.13333rem 0 rgba(0,0,0,0.2);height:4.66667rem;overflow-x:scroll;width:100%}.poster-two .temp-container .temp-box[data-v-55d0a0b2]{display:flex;overflow:auto;box-sizing:border-box;padding:0.26667rem 0 0.4rem 0.4rem}.poster-two .temp-container .temp-box .temp-item[data-v-55d0a0b2]{width:2.08rem;height:2.66667rem;position:relative;margin-right:0.18667rem;flex-shrink:0;flex-grow:0}.poster-two .temp-container .temp-box .temp-item .temp-img[data-v-55d0a0b2]{width:2.08rem;height:2.66667rem}.poster-two .temp-container .temp-box .temp-item .modal-mask[data-v-55d0a0b2]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.6);z-index:10}.poster-two .temp-container .temp-box .temp-item .modal-mask img[data-v-55d0a0b2]{width:0.53333rem;height:0.53333rem;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%)}.poster-two .temp-container .btn-box[data-v-55d0a0b2]{display:flex;padding:0 0.4rem;justify-content:space-between}.poster-two .temp-container .btn-box .btn[data-v-55d0a0b2]{width:2.4rem;height:0.93333rem;line-height:0.93333rem;border-radius:0.46667rem;font-size:0.37333rem}.poster-two .poster-model[data-v-55d0a0b2]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.6);z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center}.poster-two .poster-model .modal[data-v-55d0a0b2]{width:7.33333rem;height:8.34667rem;background-color:#fff;display:flex;flex-direction:column;align-items:center;padding:0.66667rem}.poster-two .poster-model .modal h3[data-v-55d0a0b2]{font-size:0.45333rem;color:#333333;text-align:center}.poster-two .poster-model .modal h4[data-v-55d0a0b2]{color:#808080;font-size:0.34667rem;text-align:center;margin-top:0.21333rem}.poster-two .poster-model .modal .input-wrap[data-v-55d0a0b2]{margin-top:0.8rem}.poster-two .poster-model .modal .input-area[data-v-55d0a0b2]{margin-bottom:0.53333rem;width:6rem;height:1.2rem;border:1px solid #d9d9d9;font-size:0.37333rem;color:#333333}.poster-two .poster-model .modal .btn[data-v-55d0a0b2]{background-color:#fb9253;color:#fff;width:6rem;height:1.2rem;border-radius:0.58667rem;text-align:center;line-height:1.2rem;font-size:0.42667rem}.poster-two .poster-model .modal .input-area[data-v-55d0a0b2]::placeholder{color:#b2b2b2;font-size:0.37333rem}.poster-two .poster-model .modal .tip-image-box img[data-v-55d0a0b2]{width:5.52rem}.poster-two .poster-model .modal .know-btn[data-v-55d0a0b2]{width:2.66667rem;height:0.93333rem;margin-top:0.8rem}\n",""])},494:function(e,t,r){"use strict";r.r(t);r(307),r(310);var o=r(321),n=r(431),l=r(432),c=r(308),u=navigator.userAgent,d=u.indexOf("Android")>-1||u.indexOf("Adr")>-1,m={components:{makePosterModel:o.default},props:{posterUrl:{},posterData:{}},data:function(){return{isDev:!1,tempList:[l.default,n.default],currentImg:l.default,modelShow:!0,makePosterShow:!1,clipImgUrl:"",mediaId:"",p_name:"",p_date:"",p_date_string:""}},methods:{getDateDay:function(){console.log("this.p_date",this.p_date);var e=new Date(this.p_date);console.log("p_date",e);var t=new Date;console.log("today",t);var r=Math.abs(t.getTime()-e.getTime());return console.log("diff",r),parseInt(r/864e5)},submitInfo:function(){this.modelShow=!1,this.p_date_string=this.getDateDay(),this.chooseImage()},chooseImage:function(){var e=this,t=this;wx.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(r){d?(t.makePosterShow=!0,wx.getLocalImgData({localId:r.localIds[0],success:function(e){var r=e.localData;t.clipImgUrl="data:image/jpg;base64,"+r,console.log("本地base64数据",t.clipImgUrl),t.makePosterShow=!1}})):e.clipImgUrl=r.localIds[0]},fail:function(e){console.log("err",e)},complete:function(){}})},makePoster:function(){var e=this,t=document.getElementById("clip-box");console.log("posterElement",t),html2canvas(t).then(function(canvas){var t=canvas.toDataURL("image/png");console.log("dataURL",t),e.$emit("update:posterUrl",t),e.$emit("changeType",1)}).catch(function(e){})},uploadImage:function(){this.makePoster()}},mounted:function(){c.default(this.$refs["clip-box"],this.$refs["clip-img"])},created:function(){}},f=(r(433),r(19)),component=Object(f.a)(m,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"poster-two"},[o("div",{staticClass:"clip-wrapper"},[o("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"canvas"}}),e._v(" "),o("div",{ref:"clip-box",staticClass:"clip-box",attrs:{id:"clip-box"}},[o("div",{staticClass:"p-info"},[o("p",{staticClass:"name"},[e._v(e._s(this.p_name))]),e._v(" "),o("p",{directives:[{name:"show",rawName:"v-show",value:""!==this.p_date_string,expression:"this.p_date_string !==''"}],staticClass:"date"},[o("span",{staticClass:"date1"},[e._v(e._s(this.p_date_string))]),e._v(" "),o("span",{staticClass:"date2"},[e._v("天")])])]),e._v(" "),o("img",{ref:"temp-img",attrs:{id:"temp-img",src:e.currentImg,alt:""}}),e._v(" "),o("img",{ref:"clip-img",attrs:{id:"clip-img",src:e.clipImgUrl,alt:""}})])]),e._v(" "),o("div",{staticClass:"temp-container"},[o("div",{staticClass:"temp-box"},e._l(e.tempList,function(image,t){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.tempList.length>0,expression:"tempList.length>0"}],key:t,staticClass:"temp-item",on:{click:function(t){e.currentImg=image}}},[o("img",{staticClass:"temp-img",attrs:{src:image,alt:""}}),e._v(" "),e.currentImg==image?o("div",{staticClass:"modal-mask"},[o("img",{attrs:{src:r(430),alt:""}})]):e._e()])}),0),e._v(" "),o("div",{staticClass:"btn-box"},[o("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"file",id:"chooseFile",accept:"image/*"}}),e._v(" "),o("div",{staticClass:"default-btn btn",on:{click:e.chooseImage}},[e._v("重选照片")]),e._v(" "),o("div",{staticClass:"primary-btn btn",on:{click:e.uploadImage}},[e._v("生成海报")])])]),e._v(" "),e.modelShow?o("div",{staticClass:"poster-model"},[o("div",{staticClass:"modal"},[o("div",{staticClass:"tip-image-box"},[o("h3",[e._v("基本信息")]),e._v(" "),o("h4",[e._v("请填写姓名和入职日期")]),e._v(" "),o("div",{staticClass:"input-wrap"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.p_name,expression:"p_name"}],staticClass:"input-area",attrs:{type:"text",placeholder:"请填写名字"},domProps:{value:e.p_name},on:{input:function(t){t.target.composing||(e.p_name=t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.p_date,expression:"p_date"}],staticClass:"input-area",attrs:{type:"date",placeholder:"请填写入职日期"},domProps:{value:e.p_date},on:{input:function(t){t.target.composing||(e.p_date=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"btn",on:{click:e.submitInfo}},[e._v("提交信息")])])])]):e._e(),e._v(" "),o("make-poster-model",{directives:[{name:"show",rawName:"v-show",value:e.makePosterShow,expression:"makePosterShow"}]})],1)},[],!1,null,"55d0a0b2",null);t.default=component.exports}}]);