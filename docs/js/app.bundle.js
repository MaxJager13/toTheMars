!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([,function(e,t,n){"use strict";function o(e){for(var t,n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return(t=e.classList).add.apply(t,o)}function s(e){for(var t,n=arguments.length,o=Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return(t=e.classList).remove.apply(t,o)}function r(e){return document.querySelector(e)}function i(e,t,n){switch(n){case 0:o(e,t);break;case 1:s(e,t)}}function f(e,t,n,o,s){e.map(function(e){setTimeout(function(){var t=e,n=c(t,2);i(n[0],n[1],s)},t+n),n+=o})}function a(){function e(e,n){var o=e.offsetTop;return t+window.innerHeight>o*n}var t=window.scrollY,n=r("#header-h1"),i=r("#header-p"),a=r(".header-arrow");t>.1*a.offsetTop?(o(n,"header-h1-slide-right"),o(i,"header-p-slide-right"),o(a,"header-arrow-fade-out"),s(a,"arrow-animation")):(s(n,"header-h1-slide-right"),s(i,"header-p-slide-right"),s(a,"header-arrow-fade-out"),o(a,"arrow-animation"));var c=r("#aside-container"),h=r("#aside-section-2"),u=r("#aside-section-3"),p=c.offsetTop;t>.1*p&&(s(h,"set-to-left"),setTimeout(function(){s(u,"set-to-right")},200));var l=r("#main-p"),d=r("#main-h1"),g=r("#article-container"),v=e(g,.8);e(g,1.05);v?(s(l,"main-p-offsetY"),s(d,"main-h1-offsetY")):(o(l,"main-p-offsetY"),o(d,"main-h1-offsetY"));var m=r("#article-h2");e(g,1.125)?o(m,"article-h2-scale","h2-transform"):s(m,"article-h2-scale","h2-transform");var y=r("#section-begin-h1"),w=r("#section-begin-p"),b=e(g,1.35);e(g,1.65);b?(s(y,"sec-begin-h1-offset"),s(w,"sec-begin-p-offset")):(o(y,"sec-begin-h1-offset"),o(w,"sec-begin-p-offset"));var T=r("#section-landing-h2"),x=r("#section-landing-p "),Y=r("#section-landing-container");e(Y,1.065)?(s(T,"sec-landing-offset"),s(x,"sec-landing-offset")):(o(T,"sec-landing-offset"),o(x,"sec-landing-offset"));var A=r("#section-onground-h2"),O=r("#section-onground-p"),j=e(Y,1.25);e(Y,1.415);j?(s(A,"sec-ongrd-h2-offset"),s(O,"sec-ongrd-p-offset")):(o(A,"sec-ongrd-h2-offset"),o(O,"sec-ongrd-p-offset"));var L=r("#section-phase1-h2"),S=r("#section-phase1-p"),E=r("#section-phase1-container"),P=e(E,1.05),_=e(E,1.08);P?s(L,"sec-phase1-h2-offset"):o(L,"sec-phase1-h2-offset"),_?s(S,"sec-phase1-p-offset"):o(S,"sec-phase1-p-offset");var k=r("#section-colony-h1"),q=r("#section-colony-h2"),H=r("#section-colony-ul"),I=e(E,1.2),M=[[k,"sec-colony-h-offset"],[q,"sec-colony-h-offset"],[H,"sec-colony-ul-offset"]];I?f(M,0,0,200,1):f(M,0,0,200,0);var z=r("#section-phase1-5-container"),B=r("#section-phase1-5-h2"),C=r("#section-phase1-5-p"),D=r("#pt5"),F=[[B,"sec-phase1-5-h2-offset"],[D,"pt5-offset"],[C,"sec-phase1-5-p-offset"]];e(z,1.055)?f(F,0,0,250,1):f(F,0,0,250,0);var G=r("#section-underground-h1"),J=r("#section-underground-h2"),K=r("#section-underground-ul"),N=e(z,1.175),Q=[[G,"sec-under-offset"],[J,"sec-under-offset"],[K,"sec-under-offset"]];N?f(Q,0,0,200,1):f(Q,0,0,200,0);var R=r("#section-phase2-h1"),U=r("#section-phase2-p"),V=r("#section-phase2-container"),W=e(V,1.045),X=[[R,"sec-phase2-offset"],[U,"sec-phase2-offset"]];W?f(X,0,0,250,1):f(X,0,0,250,0);var Z=r("#section-dome-h1"),$=r("#section-dome-p"),ee=e(V,1.125),te=[[Z,"sec-dome-offset"],[$,"sec-dome-offset"]];ee?f(te,0,0,250,1):f(te,0,0,250,0);var ne=r("#section-phase3-h1"),oe=r("#section-phase3-p"),se=r("#section-phase3-container"),re=e(se,1.04),ie=[[ne,"sec-phase3-offset"],[oe,"sec-phase3-offset"]];re?f(ie,0,0,250,1):f(ie,0,0,250,0);var fe=r("#section-immi-h1"),ae=r("#section-immi-h2"),ce=r("#section-immi-ul"),he=e(se,1.1075),ue=[[fe,"sec-immi-h1-offset"],[ae,"sec-immi-h2-offset"],[ce,"sec-immi-ul-offset"]];he?f(ue,0,0,250,1):f(ue,0,0,250,0);var pe=r("#section-phase4-h1"),le=r("#section-phase4-p"),de=r("#section-phase4-container"),ge=e(de,1.035),ve=[[pe,"sec-phase4-offset"],[le,"sec-phase4-offset"]];ge?f(ve,0,0,250,1):f(ve,0,0,250,0);var me=r("#figure-1"),ye=r("#figure-2"),we=r("#figure-3"),be=r("#figure-4"),Te=r("#fig-div-1"),xe=r("#fig-div-2"),Ye=r("#fig-div-3"),Ae=r("#fig-div-4");e(me,1.015)&&s(Te,"fig-offset-right"),e(ye,1.015)&&s(xe,"fig-offset-left"),e(we,1.015)&&s(Ye,"fig-offset-right"),e(be,1.015)&&s(Ae,"fig-offset-left")}var c=function(){function e(e,t){var n=[],o=!0,s=!1,r=void 0;try{for(var i,f=e[Symbol.iterator]();!(o=(i=f.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){s=!0,r=e}finally{try{!o&&f.return&&f.return()}finally{if(s)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n(2);window.addEventListener("scroll",function(e,t,n){var o=void 0;return function(){var s=this,r=arguments,i=function(){o=null,n||e.apply(s,r)},f=n&&!o;clearTimeout(o),o=setTimeout(i,t),f&&e.apply(s,r)}}(a,12,!0))},function(e,t){}]);