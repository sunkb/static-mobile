(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{341:function(n,t,o){"use strict";o.r(t);var c=o(342),r=o.n(c);t.default=function(n,img){var t,o=0,c=0,e=1;function f(n,t,o){var c="translate3d(".concat(n,"px,").concat(t,"px,0)");return o="scale(".concat(o,")"),"".concat(c," ").concat(o)}r.a.on(n,"touchstart",(function(n){n.preventDefault()})),r.a.on(n,"drag",(function(n){var t=o+n.x,r=c+n.y;img.style.webkitTransform=f(t,r,e),img.style.transform=f(t,r,e)})),r.a.on(n,"dragend",(function(n){o+=n.x,c+=n.y})),r.a.on(n,"pinch",(function(n){void 0!==n.scale&&(t=n.scale-1+e,img.style.webkitTransform=f(o,c,t),img.style.transform=f(o,c,t))})),r.a.on(n,"pinchend",(function(){e=t}))}}}]);