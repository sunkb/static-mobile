(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,c=function(){for(var e=[],i=0;i<256;++i)e.push("%"+((i<16?"0":"")+i.toString(16)).toUpperCase());return e}(),l=function(source,e){for(var t=e&&e.plainObjects?Object.create(null):{},i=0;i<source.length;++i)void 0!==source[i]&&(t[i]=source[i]);return t};e.exports={arrayToObject:l,assign:function(e,source){return Object.keys(source).reduce(function(e,t){return e[t]=source[t],e},e)},combine:function(a,b){return[].concat(a,b)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],i=0;i<t.length;++i)for(var n=t[i],c=n.obj[n.prop],l=Object.keys(c),d=0;d<l.length;++d){var f=l[d],m=c[f];"object"==typeof m&&null!==m&&-1===r.indexOf(m)&&(t.push({obj:c,prop:f}),r.push(m))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],c=0;c<r.length;++c)void 0!==r[c]&&n.push(r[c]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var o="",i=0;i<n.length;++i){var l=n.charCodeAt(i);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122?o+=n.charAt(i):l<128?o+=c[l]:l<2048?o+=c[192|l>>6]+c[128|63&l]:l<55296||l>=57344?o+=c[224|l>>12]+c[128|l>>6&63]+c[128|63&l]:(i+=1,l=65536+((1023&l)<<10|1023&n.charCodeAt(i)),o+=c[240|l>>18]+c[128|l>>12&63]+c[128|l>>6&63]+c[128|63&l])}return o},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,source,r){if(!source)return t;if("object"!=typeof source){if(o(t))t.push(source);else{if(!t||"object"!=typeof t)return[t,source];(r&&(r.plainObjects||r.allowPrototypes)||!n.call(Object.prototype,source))&&(t[source]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(source);var c=t;return o(t)&&!o(source)&&(c=l(t,r)),o(t)&&o(source)?(source.forEach(function(o,i){if(n.call(t,i)){var c=t[i];c&&"object"==typeof c&&o&&"object"==typeof o?t[i]=e(c,o,r):t.push(o)}else t[i]=o}),t):Object.keys(source).reduce(function(t,o){var c=source[o];return n.call(t,o)?t[o]=e(t[o],c,r):t[o]=c,t},c)}}},179:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},182:function(e,t,r){"use strict";var n=r(178),o=r(179),c=Object.prototype.hasOwnProperty,l={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},d=Array.isArray,f=Array.prototype.push,m=function(e,t){f.apply(e,d(t)?t:[t])},h=Date.prototype.toISOString,y={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,formatter:o.formatters[o.default],indices:!1,serializeDate:function(e){return h.call(e)},skipNulls:!1,strictNullHandling:!1},v=function e(object,t,r,o,c,l,filter,f,h,v,S,w,I){var k=object;if("function"==typeof filter?k=filter(t,k):k instanceof Date?k=v(k):"comma"===r&&d(k)&&(k=k.join(",")),null===k){if(o)return l&&!w?l(t,y.encoder,I):t;k=""}if("string"==typeof k||"number"==typeof k||"boolean"==typeof k||n.isBuffer(k))return l?[S(w?t:l(t,y.encoder,I))+"="+S(l(k,y.encoder,I))]:[S(t)+"="+S(String(k))];var _,T=[];if(void 0===k)return T;if(d(filter))_=filter;else{var O=Object.keys(k);_=f?O.sort(f):O}for(var i=0;i<_.length;++i){var x=_[i];c&&null===k[x]||(d(k)?m(T,e(k[x],"function"==typeof r?r(t,x):t,r,o,c,l,filter,f,h,v,S,w,I)):m(T,e(k[x],t+(h?"."+x:"["+x+"]"),r,o,c,l,filter,f,h,v,S,w,I)))}return T};e.exports=function(object,e){var t,r=object,n=function(e){if(!e)return y;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||y.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!c.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],filter=y.filter;return("function"==typeof e.filter||d(e.filter))&&(filter=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:y.addQueryPrefix,allowDots:void 0===e.allowDots?y.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:y.charsetSentinel,delimiter:void 0===e.delimiter?y.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:y.encode,encoder:"function"==typeof e.encoder?e.encoder:y.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:y.encodeValuesOnly,filter:filter,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:y.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:y.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:y.strictNullHandling}}(e);"function"==typeof n.filter?r=(0,n.filter)("",r):d(n.filter)&&(t=n.filter);var f,h=[];if("object"!=typeof r||null===r)return"";f=e&&e.arrayFormat in l?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var S=l[f];t||(t=Object.keys(r)),n.sort&&t.sort(n.sort);for(var i=0;i<t.length;++i){var w=t[i];n.skipNulls&&null===r[w]||m(h,v(r[w],w,S,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.formatter,n.encodeValuesOnly,n.charset))}var I=h.join(n.delimiter),k=!0===n.addQueryPrefix?"?":"";return n.charsetSentinel&&("iso-8859-1"===n.charset?k+="utf8=%26%2310003%3B&":k+="utf8=%E2%9C%93&"),I.length>0?k+I:""}},183:function(e,t,r){"use strict";var n=r(178),o=Object.prototype.hasOwnProperty,c={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},l=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},d=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,c=/(\[[^[\]]*])/g,l=/(\[[^[\]]*])/.exec(n),d=l?n.slice(0,l.index):n,f=[];if(d){if(!r.plainObjects&&o.call(Object.prototype,d)&&!r.allowPrototypes)return;f.push(d)}for(var i=0;null!==(l=c.exec(n))&&i<r.depth;){if(i+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(l[1])}return l&&f.push("["+n.slice(l.index)+"]"),function(e,t,r){for(var n=t,i=e.length-1;i>=0;--i){var o,c=e[i];if("[]"===c&&r.parseArrays)o=[].concat(n);else{o=r.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,d=parseInt(l,10);r.parseArrays||""!==l?!isNaN(d)&&c!==l&&String(d)===l&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(o=[])[d]=n:o[l]=n:o={0:n}}n=o}return n}(f,t,r)}};e.exports=function(e,t){var r=function(e){if(!e)return c;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?c.charset:e.charset;return{allowDots:void 0===e.allowDots?c.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:c.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:c.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:c.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:c.comma,decoder:"function"==typeof e.decoder?e.decoder:c.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:c.delimiter,depth:"number"==typeof e.depth?e.depth:c.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:c.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:c.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:c.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:c.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){var i,r={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,m=d.split(t.delimiter,f),h=-1,y=t.charset;if(t.charsetSentinel)for(i=0;i<m.length;++i)0===m[i].indexOf("utf8=")&&("utf8=%E2%9C%93"===m[i]?y="utf-8":"utf8=%26%2310003%3B"===m[i]&&(y="iso-8859-1"),h=i,i=m.length);for(i=0;i<m.length;++i)if(i!==h){var v,S,w=m[i],I=w.indexOf("]="),k=-1===I?w.indexOf("="):I+1;-1===k?(v=t.decoder(w,c.decoder,y),S=t.strictNullHandling?null:""):(v=t.decoder(w.slice(0,k),c.decoder,y),S=t.decoder(w.slice(k+1),c.decoder,y)),S&&t.interpretNumericEntities&&"iso-8859-1"===y&&(S=l(S)),S&&t.comma&&S.indexOf(",")>-1&&(S=S.split(",")),o.call(r,v)?r[v]=n.combine(r[v],S):r[v]=S}return r}(e,r):e,m=r.plainObjects?Object.create(null):{},h=Object.keys(f),i=0;i<h.length;++i){var y=h[i],v=d(y,f[y],r);m=n.merge(m,v,r)}return n.compact(m)}},184:function(e,t,r){"use strict";var n=r(182),o=r(183),c=r(179);e.exports={formats:c,parse:o,stringify:n}},185:function(e,t,r){"use strict";var n=r(3),o=r(16),c=r(21),l=r(109),d=r(58),f=r(10),m=r(41).f,h=r(59).f,y=r(9).f,v=r(187).trim,S=n.Number,w=S,I=S.prototype,k="Number"==c(r(75)(I)),_="trim"in String.prototype,T=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,c=(t=_?t.trim():v(t,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,l=t.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+t};if(!S(" 0o1")||!S("0b1")||S("+0x1")){S=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof S&&(k?f(function(){I.valueOf.call(r)}):"Number"!=c(r))?l(new w(T(t)),r,S):T(t)};for(var O,x=r(8)?m(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;x.length>N;N++)o(w,O=x[N])&&!o(S,O)&&y(S,O,h(w,O));S.prototype=I,I.constructor=S,r(11)(n,"Number",S)}},187:function(e,t,r){var n=r(7),o=r(20),c=r(10),l=r(188),d="["+l+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(e,t,r){var o={},d=c(function(){return!!l[e]()||"​"!="​"[e]()}),f=o[e]=d?t(y):l[e];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},y=h.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(m,"")),e};e.exports=h},188:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},190:function(e,t){var r;r=window,e.exports=function(e,t){function i(t,i,r){e.WeixinJSBridge?WeixinJSBridge.invoke(t,n(i),function(e){c(t,e,r)}):u(t,r)}function r(t,i,r){e.WeixinJSBridge?WeixinJSBridge.on(t,function(e){r&&r.trigger&&r.trigger(e),c(t,e,i)}):u(t,r||i)}function n(e){return(e=e||{}).appId=A.appId,e.verifyAppId=A.appId,e.verifySignType="sha1",e.verifyTimestamp=A.timestamp+"",e.verifyNonceStr=A.nonceStr,e.verifySignature=A.signature,e}function o(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function c(e,t,i){"openEnterpriseChat"==e&&(t.errCode=t.err_code),delete t.err_code,delete t.err_desc,delete t.err_detail;var r=t.errMsg;r||(r=t.err_msg,delete t.err_msg,r=function(e,t){var i=e,r=h[i];r&&(i=r);var n="ok";if(t){var o=t.indexOf(":");"confirm"==(n=t.substring(o+1))&&(n="ok"),"failed"==n&&(n="fail"),-1!=n.indexOf("failed_")&&(n=n.substring(7)),-1!=n.indexOf("fail_")&&(n=n.substring(5)),"access denied"!=(n=(n=n.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=n||(n="permission denied"),"config"==i&&"function not exist"==n&&(n="ok"),""==n&&(n="fail")}return t=i+":"+n}(e,r),t.errMsg=r),(i=i||{})._complete&&(i._complete(t),delete i._complete),r=t.errMsg||"",A.debug&&!i.isInnerInvoke&&alert(JSON.stringify(t));var n=r.indexOf(":");switch(r.substring(n+1)){case"ok":i.success&&i.success(t);break;case"cancel":i.cancel&&i.cancel(t);break;default:i.fail&&i.fail(t)}i.complete&&i.complete(t)}function l(e){if(e){for(var t=0,i=e.length;t<i;++t){var r=e[t],n=m[r];n&&(e[t]=n)}return e}}function u(e,t){if(!(!A.debug||t&&t.isInnerInvoke)){var i=h[e];i&&(e=i),t&&t._complete&&delete t._complete,console.log('"'+e+'",',t||"")}}function p(){return(new Date).getTime()}function d(t){_&&(e.WeixinJSBridge?t():y.addEventListener&&y.addEventListener("WeixinJSBridgeReady",t,!1))}function f(){V.invoke||(V.invoke=function(t,i,r){e.WeixinJSBridge&&WeixinJSBridge.invoke(t,n(i),r)},V.on=function(t,i){e.WeixinJSBridge&&WeixinJSBridge.on(t,i)})}function g(e){if("string"==typeof e&&e.length>0){var t=e.split("?")[0],i=e.split("?")[1];return t+=".html",void 0!==i?t+"?"+i:t}}if(!e.jWeixin){var m={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},h=function(){var e={};for(var t in m)e[m[t]]=t;return e}(),y=e.document,v=y.title,S=navigator.userAgent.toLowerCase(),w=navigator.platform.toLowerCase(),I=!(!w.match("mac")&&!w.match("win")),k=-1!=S.indexOf("wxdebugger"),_=-1!=S.indexOf("micromessenger"),T=-1!=S.indexOf("android"),O=-1!=S.indexOf("iphone")||-1!=S.indexOf("ipad"),x=function(){var e=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),N={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},P={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:O?1:T?2:-1,clientVersion:x,url:encodeURIComponent(location.href)},A={},E={_completes:[]},M={state:0,data:{}};d(function(){N.initEndTime=p()});var C=!1,j=[],V={config:function(e){A=e,u("config",e);var t=!1!==A.check;d(function(){if(t)i(m.config,{verifyJsApiList:l(A.jsApiList)},function(){E._complete=function(e){N.preVerifyEndTime=p(),M.state=1,M.data=e},E.success=function(e){P.isPreVerifyOk=0},E.fail=function(e){E._fail?E._fail(e):M.state=-1};var e=E._completes;return e.push(function(){!function(e){if(!(I||k||A.debug||x<"6.0.2"||P.systemType<0)){var t=new Image;P.appId=A.appId,P.initTime=N.initEndTime-N.initStartTime,P.preVerifyTime=N.preVerifyEndTime-N.preVerifyStartTime,V.getNetworkType({isInnerInvoke:!0,success:function(e){P.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+P.version+"&o="+P.isPreVerifyOk+"&s="+P.systemType+"&c="+P.clientVersion+"&a="+P.appId+"&n="+P.networkType+"&i="+P.initTime+"&p="+P.preVerifyTime+"&u="+P.url;t.src=i}})}}()}),E.complete=function(t){for(var i=0,r=e.length;i<r;++i)e[i]();E._completes=[]},E}()),N.preVerifyStartTime=p();else{M.state=1;for(var e=E._completes,r=0,n=e.length;r<n;++r)e[r]();E._completes=[]}}),f()},ready:function(e){0!=M.state?e():(E._completes.push(e),!_&&A.debug&&e())},error:function(e){x<"6.0.2"||(-1==M.state?e(M.data):E._fail=e)},checkJsApi:function(e){i("checkJsApi",{jsApiList:l(e.jsApiList)},(e._complete=function(e){if(T){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=function(e){var t=e.checkResult;for(var i in t){var r=h[i];r&&(t[r]=t[i],delete t[i])}return e}(e)},e))},onMenuShareTimeline:function(e){r(m.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){r(m.onMenuShareAppMessage,{complete:function(t){"favorite"===t.scene?i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){r(m.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){r(m.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){r(m.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){r("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){r("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(T){var t=e.localIds;try{t&&(e.localIds=JSON.parse(t))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(m.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===C?(C=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(C=!1,j.length>0){var t=j.shift();wx.getLocalImgData(t)}},e))):j.push(e)},getNetworkType:function(e){i("getNetworkType",{},(e._complete=function(e){e=function(e){var t=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var r=t.indexOf(":"),n=t.substring(r+1);switch(n){case"wifi":case"edge":case"wwan":e.networkType=n;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(m.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(O){var t=e.resultStr;if(t){var i=JSON.parse(t);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(m.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){i(m.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var t=e.cardList,r=[],n=0,o=t.length;n<o;++n){var a=t[n],c={card_id:a.cardId,card_ext:a.cardExt};r.push(c)}i(m.addCard,{card_list:r},(e._complete=function(e){var t=e.card_list;if(t){for(var i=0,r=(t=JSON.parse(t)).length;i<r;++i){var n=t[i];n.cardId=n.card_id,n.cardExt=n.card_ext,n.isSuccess=!!n.is_succ,delete n.card_id,delete n.card_ext,delete n.is_succ}e.cardList=t,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:A.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var t=e.cardList,r=[],n=0,o=t.length;n<o;++n){var a=t[n],c={card_id:a.cardId,code:a.code};r.push(c)}i(m.openCard,{card_list:r},e)},consumeAndShareCard:function(e){i(m.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(m.chooseWXPay,o(e),e)},openEnterpriseRedPacket:function(e){i(m.openEnterpriseRedPacket,o(e),e)},startSearchBeacons:function(e){i(m.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(m.stopSearchBeacons,{},e)},onSearchBeacons:function(e){r(m.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},d(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){d(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){d(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){d(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){d(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(t){d(function(){t({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},b=1,L={};return y.addEventListener("error",function(e){if(!T){var t=e.target,i=t.tagName,r=t.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=r.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var n=t["wx-id"];if(n||(n=b++,t["wx-id"]=n),L[n])return;L[n]=!0,wx.ready(function(){wx.getLocalImgData({localId:r,success:function(e){t.src=e.localData}})})}}},!0),y.addEventListener("load",function(e){if(!T){var t=e.target,i=t.tagName;if(t.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var r=t["wx-id"];r&&(L[r]=!1)}}},!0),t&&(e.wx=e.jWeixin=V),V}}(r)}}]);