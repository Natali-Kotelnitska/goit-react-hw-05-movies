"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[460],{777:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r=e(885),a=e(4543),c=e(8296),u=e(5493),o=e(2791),i=e(1207),s=e(501),f=e(184);function l(){return(0,f.jsxs)("h1",{children:["Page is not found :( Go to ",(0,f.jsx)(s.rU,{to:"/",children:"Home page"})," "]})}function d(){var n=(0,o.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],d=(0,o.useState)(null),p=(0,r.Z)(d,2),v=p[0],h=p[1],g=(0,o.useState)(!1),x=(0,r.Z)(g,2),m=x[0],w=x[1];(0,o.useEffect)((function(){w(!0),(0,i.XT)().then((function(n){s(n)})).catch((function(n){h("Ooops. Something went wrong..."),console.log(n)})).finally((function(){return w(!1)}))}),[]);var _=!m&&!e.length;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(a.Z,{children:[(0,f.jsx)(c.Z,{text:"Trending Movies"}),m&&"Loading ...",_&&(0,f.jsx)(l,{}),v&&(0,f.jsx)("div",{children:v}),e&&(0,f.jsx)(u.Z,{movies:e})]})})}},8296:function(n,t,e){e.d(t,{Z:function(){return c}});var r="PageHeading_title__whdE-",a=e(184);function c(n){var t=n.text;return(0,a.jsx)("h1",{className:r,children:t})}},5493:function(n,t,e){var r=e(501),a=e(184);t.Z=function(n){var t=n.movies,e=n.prevLocation;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((function(n){var t=n.id,c=n.original_title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:e},children:(0,a.jsx)("h3",{children:c})})},t)}))})})}},1207:function(n,t,e){e.d(t,{Hq:function(){return h},XT:function(){return v},fU:function(){return x},l2:function(){return g},sv:function(){return m}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),o=e.n(u),i="e744dd987f832ad945563dbad49387aa";o().defaults.baseURL="https://api.themoviedb.org/3";var s="/trending/movie/week",f="/search/movie",l="/movie",d="/credits",p="/reviews",v=function(){var n=(0,r.Z)(c().mark((function n(){var t,e,r=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,o().get("".concat(s,"?api_key=").concat(i,"&page=").concat(t,"&language=en-US&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o().get("".concat(f,"?api_key=").concat(i,"&page=").concat(e,"&query=").concat(t,"&language=en-US&include_adult=false"));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("".concat(l,"/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t).concat(d,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>1&&void 0!==a[1]?a[1]:1,n.next=3,o().get("/movie/".concat(t).concat(p,"?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=HomePage.f6b908b4.chunk.js.map