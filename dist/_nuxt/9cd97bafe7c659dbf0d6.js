(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{185:function(t,e,n){"use strict";var r=n(3),o=n(16),c=n(21),f=n(109),l=n(58),h=n(10),d=n(41).f,v=n(59).f,m=n(9).f,_=n(187).trim,w=r.Number,y=w,x=w.prototype,I="Number"==c(n(75)(x)),N="trim"in String.prototype,P=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=N?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,f=e.slice(2),i=0,h=f.length;i<h;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,r)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(I?h(function(){x.valueOf.call(n)}):"Number"!=c(n))?f(new y(P(e)),n,w):P(e)};for(var C,S=n(8)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;S.length>O;O++)o(y,C=S[O])&&!o(w,C)&&m(w,C,v(y,C));w.prototype=x,x.constructor=w,n(11)(r,"Number",w)}},187:function(t,e,n){var r=n(7),o=n(20),c=n(10),f=n(188),l="["+f+"]",h=RegExp("^"+l+l+"*"),d=RegExp(l+l+"*$"),v=function(t,e,n){var o={},l=c(function(){return!!f[t]()||"​"!="​"[t]()}),h=o[t]=l?e(m):f[t];n&&(o[n]=h),r(r.P+r.F*l,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(d,"")),t};t.exports=v},188:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},211:function(t,e,n){"use strict";n(227)("link",function(t){return function(e){return t(this,"a","href",e)}})},227:function(t,e,n){var r=n(7),o=n(10),c=n(20),f=/"/g,l=function(t,e,n,r){var o=String(c(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+String(r).replace(f,"&quot;")+'"'),l+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(l),r(r.P+r.F*o(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},230:function(t,e,n){"use strict";var r=n(252),o=new(n.n(r).a);o.removeAllListeners(),e.a=o},252:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o="~";function c(){}function f(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function l(t,e,n,r,c){if("function"!=typeof n)throw new TypeError("The listener must be a function");var l=new f(n,r||t,c),h=o?o+e:e;return t._events[h]?t._events[h].fn?t._events[h]=[t._events[h],l]:t._events[h].push(l):(t._events[h]=l,t._eventsCount++),t}function h(t,e){0==--t._eventsCount?t._events=new c:delete t._events[e]}function d(){this._events=new c,this._eventsCount=0}Object.create&&(c.prototype=Object.create(null),(new c).__proto__||(o=!1)),d.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)r.call(t,e)&&n.push(o?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},d.prototype.listeners=function(t){var e=o?o+t:t,n=this._events[e];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,r=n.length,c=new Array(r);i<r;i++)c[i]=n[i].fn;return c},d.prototype.listenerCount=function(t){var e=o?o+t:t,n=this._events[e];return n?n.fn?1:n.length:0},d.prototype.emit=function(t,e,n,r,c,f){var l=o?o+t:t;if(!this._events[l])return!1;var h,i,d=this._events[l],v=arguments.length;if(d.fn){switch(d.once&&this.removeListener(t,d.fn,void 0,!0),v){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,e),!0;case 3:return d.fn.call(d.context,e,n),!0;case 4:return d.fn.call(d.context,e,n,r),!0;case 5:return d.fn.call(d.context,e,n,r,c),!0;case 6:return d.fn.call(d.context,e,n,r,c,f),!0}for(i=1,h=new Array(v-1);i<v;i++)h[i-1]=arguments[i];d.fn.apply(d.context,h)}else{var m,_=d.length;for(i=0;i<_;i++)switch(d[i].once&&this.removeListener(t,d[i].fn,void 0,!0),v){case 1:d[i].fn.call(d[i].context);break;case 2:d[i].fn.call(d[i].context,e);break;case 3:d[i].fn.call(d[i].context,e,n);break;case 4:d[i].fn.call(d[i].context,e,n,r);break;default:if(!h)for(m=1,h=new Array(v-1);m<v;m++)h[m-1]=arguments[m];d[i].fn.apply(d[i].context,h)}}return!0},d.prototype.on=function(t,e,n){return l(this,t,e,n,!1)},d.prototype.once=function(t,e,n){return l(this,t,e,n,!0)},d.prototype.removeListener=function(t,e,n,r){var c=o?o+t:t;if(!this._events[c])return this;if(!e)return h(this,c),this;var f=this._events[c];if(f.fn)f.fn!==e||r&&!f.once||n&&f.context!==n||h(this,c);else{for(var i=0,l=[],d=f.length;i<d;i++)(f[i].fn!==e||r&&!f[i].once||n&&f[i].context!==n)&&l.push(f[i]);l.length?this._events[c]=1===l.length?l[0]:l:h(this,c)}return this},d.prototype.removeAllListeners=function(t){var e;return t?(e=o?o+t:t,this._events[e]&&h(this,e)):(this._events=new c,this._eventsCount=0),this},d.prototype.off=d.prototype.removeListener,d.prototype.addListener=d.prototype.on,d.prefixed=o,d.EventEmitter=d,t.exports=d},286:function(t,e,n){"use strict";n.r(e);n(211),n(57),n(185),n(111),n(108),n(110);var r=n(230);function o(){var u=navigator.userAgent;return{ios:!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:u.indexOf("Android")>-1||u.indexOf("Linux")>-1,iPhone:u.indexOf("iPhone")>-1,iPad:u.indexOf("iPad")>-1,isWeixin:-1!==u.toLowerCase().indexOf("micromessenger"),uCBrowser:u.indexOf("UCBrowser")>-1}}function c(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null}function f(t){var e=t=Number(t);return t<=140?e+=38:t>140&&t<=178?e=178:t>200&&(e=200),e}function l(t){var e=Object.assign({acoin:0,begin_time:0,combo_name:"",create_time:0,id:0,installment:0,payed:-1,split_id:-1,tmoney:0},t),n="abc360://pay?acoin=".concat(e.acoin,"&begin_time=").concat(e.begin_time,"&combo_name=").concat(e.combo_name,"&create_time=").concat(e.create_time,"&id=").concat(e.order_id,"&installment=").concat(e.installment,"&payed=").concat(e.pay_status,"&split_id=").concat(e.split_id,"&tmoney=").concat(e.sale_price),r=o();if(r.iPhone&&(window.location.href=n),r.android){console.log("payurl",n);prompt(n)}}function h(){var t=c("token");if(o().isWeixin?sessionStorage.setItem("currentPlatform","wx"):t?sessionStorage.setItem("currentPlatform","app"):"app"===!sessionStorage.getItem("currentPlatform")&&sessionStorage.setItem("currentPlatform","other"),console.log("currentPlatform",sessionStorage.getItem("currentPlatform")),t){var e="".concat("https://release6.landi.com/","Web/Index/fast_login?token=").concat(t,"&url=").concat("https://release6.landi.com/static-web/mobile","/group_buy/index");console.log("fastLoginUrl",e),window.location.replace(e)}console.log("currentPlatform",sessionStorage.getItem("currentPlatform"))}function d(t){console.log("支付结果",t),0===t?r.a.emit("nativePayCallBack",{result:"0"}):1===t&&r.a.emit("nativePayCallBack",{result:"1"})}function v(t){var e=o(),n=Object.assign({title:"为了宝贝拼了「7天突破26个字母的标准发音」",image:"https://qn-static.landi.com/uploadtoola4b025bbf7c19dfc16895b0ab0b776a2.png"},t),r="abc360://share?title=".concat(n.title,"&image=").concat(n.image,"&link=").concat(n.link);if(console.log("分享链接",r),e.iPhone&&(window.location.href=r),e.android)prompt(r)}function m(){window.location.href="https://a.app.qq.com/o/simple.jsp?pkgname=com.abc360.student"}function _(){var t={appid:"wx9632cb5f0990954d",redirect_uri:encodeURIComponent("".concat("https://release6.landi.com/static-web/mobile","/group_buy/index")),response_type:"code",scope:"snsapi_base"};window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(t.appid,"&redirect_uri=").concat(t.redirect_uri,"?btnType=").concat(this.btnType,"&response_type=").concat(t.response_type,"&scope=").concat(t.scope,"#wechat_redirect")}n.d(e,"getQueryString",function(){return c}),n.d(e,"getGroupCount",function(){return f}),n.d(e,"jsCallNative",function(){return l}),n.d(e,"init",function(){return h}),n.d(e,"funPayNativeCallBack",function(){return d}),n.d(e,"appShare",function(){return v}),n.d(e,"groupbuy_downloadApp",function(){return m}),n.d(e,"getWXCode",function(){return _}),window.funPayNativeCallBack=d}}]);