(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8219)}])},8670:function(e,t,n){"use strict";var r=n(3454),o={title:"\u5e03\u9c81\u65af\u9c7c\u7684\u5999\u60f3\u5929\u5f00",author:"amazing-blues",email:"bluesedenyu@gmail.com",link:"https://emergencyexit.xyz/",description:"\u6b64\u95f4\u7684\u535a\u6587\u5927\u62b5\u6709\u4e24\u7c7b\uff0c\u4e00\u79cd\u662f\u6c34\u7684\uff0c\u53e6\u4e00\u79cd\u4ecd\u662f\u6c34\u7684\u7f62\u3002 \u2014\u2014 \u9c81\u8fc5",lang:"en-US",appearance:"auto",font:"sans-serif",lightBackground:"#ffffff",darkBackground:"#18181B",path:"",since:2021,postsPerPage:7,sortByDate:!1,showAbout:!0,showArchive:!0,autoCollapsedNavBar:!1,ogImageGenerateURL:"https://og-image-craigary.vercel.app",socialLink:"https://twitter.com/bluesedenyu",seo:{keywords:["Blog","Website","Notion"],googleSiteVerification:""},notionPageId:r.env.NOTION_PAGE_ID,notionAccessToken:r.env.NOTION_ACCESS_TOKEN,analytics:{provider:"",ackeeConfig:{tracker:"",dataAckeeServer:"",domainId:""},gaConfig:{measurementId:""}},comment:{provider:"",gitalkConfig:{repo:"",owner:"",admin:[],clientID:"",clientSecret:"",distractionFreeMode:!1},utterancesConfig:{repo:""},cusdisConfig:{appId:"",host:"https://cusdis.com",scriptSrc:"https://cusdis.com/js/cusdis.es.js"}},isProd:"production"===r.env.VERCEL_ENV};e.exports=o},4873:function(e,t,n){"use strict";n.d(t,{I:function(){return h},b:function(){return y}});var r=n(7997),o=n(1720),a=n(8670),i=n.n(a),u={NAV:{INDEX:"Blog",RSS:"RSS",SEARCH:"Search",ABOUT:"About"},PAGINATION:{PREV:"Prev",NEXT:"Next"},POST:{BACK:"Back",TOP:"Top"}},s={NAV:{INDEX:"\u535a\u5ba2",RSS:"\u8ba2\u9605",SEARCH:"\u641c\u7d22",ABOUT:"\u5173\u4e8e"},PAGINATION:{PREV:"\u4e0a\u4e00\u9875",NEXT:"\u4e0b\u4e00\u9875"},POST:{BACK:"\u8fd4\u56de",TOP:"\u56de\u5230\u9876\u90e8"}},c={NAV:{INDEX:"\u7db2\u8a8c",RSS:"\u8a02\u95b1",SEARCH:"\u641c\u5c0b",ABOUT:"\u95dc\u65bc"},PAGINATION:{PREV:"\u4e0a\u4e00\u9801",NEXT:"\u4e0b\u4e00\u9801"},POST:{BACK:"\u8fd4\u56de",TOP:"\u56de\u5230\u9802\u7aef"}},l={NAV:{INDEX:"\u90e8\u843d\u683c",RSS:"\u8a02\u95b1",SEARCH:"\u641c\u5c0b",ABOUT:"\u95dc\u65bc"},PAGINATION:{PREV:"\u4e0a\u4e00\u9801",NEXT:"\u4e0b\u4e00\u9801"},POST:{BACK:"\u8fd4\u56de",TOP:"\u56de\u5230\u9802\u7aef"}},d={NAV:{INDEX:"\u30d6\u30ed\u30b0",RSS:"\u8cfc\u8aad",SEARCH:"\u691c\u7d22",ABOUT:"\u3053\u306e\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"},PAGINATION:{PREV:"\u524d\u30da\u30fc\u30b8",NEXT:"\u6b21\u30da\u30fc\u30b8"},POST:{BACK:"\u623b\u308b",TOP:"\u30c8\u30c3\u30d7\u306b\u623b\u308b"}},f={NAV:{INDEX:"Blog",RSS:"RSS",SEARCH:"Buscar",ABOUT:"Acerca de m\xed"},PAGINATION:{PREV:"Anterior",NEXT:"Siguiente"},POST:{BACK:"Atr\xe1s",TOP:"Arriba"}},p=function(){switch(i().lang.toLowerCase()){case"zh-cn":case"zh-sg":return s;case"zh-hk":return c;case"zh-tw":return l;case"ja":case"ja-jp":return d;case"es":case"es-ES":return f;default:return u}}(),v=(0,o.createContext)();function h(e){var t=e.children;return(0,r.tZ)(v.Provider,{value:p,children:t})}var y=function(){return(0,o.useContext)(v)}},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,a=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=o({},a,e));if((a=o({},a,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.suspense&&(delete a.ssr,delete a.loading);a.loadableGenerated&&delete(a=o({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,u(n,a);delete a.ssr}return n(a)},t.noSSR=u;var o=n(6495).Z,a=n(2648).Z,i=(a(n(1720)),a(n(4302)));function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(1720)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,i=(0,n(2648).Z)(n(1720)),u=n(6319),s=n(1688).useSyncExternalStore,c=[],l=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var n=function(){if(!c){var t=new p(e,o);c={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return c.promise()},r=function(){n();var e=i.default.useContext(u.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=i.default.lazy(o.loader));var c=null;if(!d){var f=o.webpack?o.webpack():o.modules;f&&l.push((function(e){var t=!0,r=!1,o=void 0;try{for(var a,i=f[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var u=a.value;if(-1!==e.indexOf(u))return n()}}catch(s){r=!0,o=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw o}}}))}var v=o.suspense?function(e,t){return r(),i.default.createElement(o.lazy,a({},e,{ref:t}))}:function(e,t){r();var n=s(c.subscribe,c.getCurrentValue,c.getCurrentValue);return i.default.useImperativeHandle(t,(function(){return{retry:c.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:c.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return v.preload=function(){return n()},v.displayName="LoadableComponent",i.default.forwardRef(v)}(f,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){h(c).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};h(l,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var y=v;t.default=y},8219:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(1799),o=n(7997),a=(n(2427),n(5560),n(7604),n(906),n(4722),n(8670)),i=n.n(a),u=n(5152),s=n.n(u),c=n(4873),l=n(4298),d=n.n(l),f=function(){return(0,o.BX)(o.HY,{children:[i().analytics&&"ackee"===i().analytics.provider&&(0,o.tZ)(d(),{src:i().analytics.ackeeConfig.tracker,"data-ackee-server":i().analytics.ackeeConfig.dataAckeeServer,"data-ackee-domain-id":i().analytics.ackeeConfig.domainId}),i().analytics&&"ga"===i().analytics.provider&&(0,o.BX)(o.HY,{children:[(0,o.tZ)(d(),{src:"https://www.googletagmanager.com/gtag/js?id=".concat(i().analytics.gaConfig.measurementId)}),(0,o.tZ)(d(),{strategy:"lazyOnload",id:"ga",children:"window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(i().analytics.gaConfig.measurementId,"', {\n              page_path: window.location.pathname,\n            });")})]})]})},p=s()((function(){return Promise.all([n.e(605),n.e(359)]).then(n.bind(n,1359))}),{loadableGenerated:{webpack:function(){return[1359]}},ssr:!1}),v=s()((function(){return n.e(921).then(n.bind(n,5921))}),{loadableGenerated:{webpack:function(){return[5921]}},ssr:!1});var h=function(e){var t,n,a=e.Component,u=e.pageProps;return(0,o.BX)(o.HY,{children:[(0,o.tZ)(f,{}),(0,o.tZ)(c.I,{children:(0,o.BX)(o.HY,{children:[i().isProd&&"ackee"===(null===i()||void 0===i()||null===(t=i().analytics)||void 0===t?void 0:t.provider)&&(0,o.tZ)(p,{ackeeServerUrl:i().analytics.ackeeConfig.dataAckeeServer,ackeeDomainId:i().analytics.ackeeConfig.domainId}),i().isProd&&"ga"===(null===i()||void 0===i()||null===(n=i().analytics)||void 0===n?void 0:n.provider)&&(0,o.tZ)(v,{}),(0,o.tZ)(a,(0,r.Z)({},u))]})})]})}},7604:function(){},2427:function(){},5560:function(){},906:function(){},4722:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,s=[],c=!1,l=-1;function d(){c&&u&&(c=!1,u.length?s=u.concat(s):l=-1,s.length&&f())}function f(){if(!c){var e=i(d);c=!0;for(var t=s.length;t;){for(u=s,s=[];++l<t;)u&&u[l].run();l=-1,t=s.length}u=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||c||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,r),i=!1}finally{i&&delete n[e]}return a.exports}r.ab="//";var o=r(229);e.exports=o}()},5152:function(e,t,n){e.exports=n(638)},4298:function(e,t,n){e.exports=n(699)},3250:function(e,t,n){"use strict";var r=n(1720);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=r.useState,i=r.useEffect,u=r.useLayoutEffect,s=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return u((function(){o.value=n,o.getSnapshot=t,c(o)&&l({inst:o})}),[e,n,t]),i((function(){return c(o)&&l({inst:o}),e((function(){c(o)&&l({inst:o})}))}),[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},1688:function(e,t,n){"use strict";e.exports=n(3250)},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})},7997:function(e,t,n){"use strict";n.d(t,{HY:function(){return r.HY},tZ:function(){return a},BX:function(){return a}});n(1720);var r=n(6400),o=0;function a(e,t,n,a,i){var u,s,c={};for(s in t)"ref"==s?u=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:i,__self:a};if("function"==typeof e&&(u=e.defaultProps))for(s in u)void 0===c[s]&&(c[s]=u[s]);return r.YM.vnode&&r.YM.vnode(l),l}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);