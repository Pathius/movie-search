(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,v=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(v.length)v.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-0a0fc91b":"c7dccbcb","chunk-35c55d6e":"1d634c4f","chunk-462c0bcd":"0bf72e36","chunk-67cd98ec":"666d682b","chunk-9ed21f58":"1b789489","chunk-c9239628":"27e44123"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0a0fc91b":1,"chunk-35c55d6e":1,"chunk-462c0bcd":1,"chunk-67cd98ec":1,"chunk-9ed21f58":1,"chunk-c9239628":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0a0fc91b":"5c6aab83","chunk-35c55d6e":"4121f259","chunk-462c0bcd":"aa5d1002","chunk-67cd98ec":"4f21055f","chunk-9ed21f58":"4f3de54d","chunk-c9239628":"e4630509"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var v=document.getElementsByTagName("style");for(c=0;c<v.length;c++){u=v[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var v=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;v.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",v.name="ChunkLoadError",v.type=a,v.request=r,n[1](v)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var v=0;v<u.length;v++)t(u[v]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e3f":function(e,t,n){"use strict";var a=n("f657"),r=n.n(a);r.a},"31dc":function(e,t,n){"use strict";var a=n("8fe6"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page",attrs:{id:"app"}},[n("TheNavigation"),n("section",{staticClass:"page__content"},[n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("router-view")],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page__nav nav"},[n("router-link",{staticClass:"nav__logo",attrs:{tag:"div",to:"/"},nativeOn:{click:function(t){return e.initialState(t)}}},[n("TheMovieClip"),n("h1",{staticClass:"nav__logo-header"},[n("span",[e._v("Movie")]),n("span",{staticClass:"nav__logo-span"},[e._v("Search")])])],1),n("ul",{staticClass:"nav__navigation"},[n("router-link",{staticClass:"nav__navigation-element",attrs:{tag:"li",to:"/","active-class":"nav__navigation-element-active",exact:""}},[n("h3",{staticClass:"nav__navigation-element-text"},[e._v("Home")])]),n("router-link",{staticClass:"nav__navigation-element",attrs:{tag:"li",to:"/upcoming","active-class":"nav__navigation-element-active"}},[n("h3",{staticClass:"nav__navigation-element-text"},[e._v("Upcoming")])]),n("router-link",{staticClass:"nav__navigation-element",attrs:{tag:"li",to:"/popular","active-class":"nav__navigation-element-active"}},[n("h3",{staticClass:"nav__navigation-element-text"},[e._v("Popular")])]),n("router-link",{staticClass:"nav__navigation-element",attrs:{tag:"li",to:"/favourite","active-class":"nav__navigation-element-active"}},[n("h3",{staticClass:"nav__navigation-element-text"},[e._v("Favourite")])])],1)],1)},c=[],s=function(e,t){var n=t._c;return n("svg",{staticStyle:{"enable-background":"new 0 0 277.446 277.446"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"white",viewBox:"0 10 270.446 350.446","xml:space":"preserve"}},[n("path",{attrs:{id:"_x30_6-Movie_Clapper",d:"M59.488,117.299c-0.504-4.237-2.007-8.171-4.273-11.556l202.992-67.776L247.552,6.051\n\tc-1.549-4.638-6.566-7.141-11.201-5.594L15.54,74.182c-4.635,1.547-7.143,6.563-5.594,11.201l5.225,15.647\n\tc-5.216,4.843-8.488,11.752-8.488,19.415c0,9.924,5.486,18.586,13.582,23.127v125.02c0,4.891,3.967,8.853,8.854,8.853h232.793\n\tc4.885,0,8.852-3.963,8.852-8.853V117.299H59.488z M188.869,26.724l26.875-8.973l-6.467,26.14l-26.875,8.973L188.869,26.724z\n\tM122.47,48.893l26.877-8.973l-6.467,26.139l-26.875,8.974L122.47,48.893z M33.181,133.946c-7.442,0-13.498-6.056-13.498-13.5\n\tc0-7.444,6.056-13.5,13.498-13.5c7.444,0,13.5,6.056,13.5,13.5C46.681,127.89,40.625,133.946,33.181,133.946z M56.074,71.062\n\tl26.877-8.973l-6.467,26.14l-26.877,8.974L56.074,71.062z M82.476,147.192H54.142l14.412-22.746h28.334L82.476,147.192z\n\tM138.554,124.446h28.334l-14.412,22.746h-28.334L138.554,124.446z M131.599,234.372v-60l47.783,30L131.599,234.372z\n\tM222.476,147.192h-28.334l14.412-22.746h28.334L222.476,147.192z"}})])},u=[],l=(n("31dc"),n("2877")),v={},f=Object(l["a"])(v,s,u,!0,null,"75714fdb",null),p=f.exports,d={components:{TheMovieClip:p},methods:{initialState:function(){this.$store.state.movies=[],this.$store.state.searched=!1}}},h=d,m=(n("2e3f"),Object(l["a"])(h,i,c,!1,null,null,null)),g=m.exports,b={components:{TheNavigation:g},created:function(){this.$store.commit("setFavouriteMovies",JSON.parse(localStorage.getItem("favouriteMovies"))),this.$store.commit("setFavouriteMoviesIds",JSON.parse(localStorage.getItem("favouriteMovies"))),this.$store.dispatch("getUpcomingMovies"),this.$store.dispatch("getPopularMovies")}},_=b,M=(n("5c0b"),Object(l["a"])(_,r,o,!1,null,null,null)),k=M.exports,y=(n("d3b7"),n("8c4f"));a["a"].use(y["a"]);var w=[{path:"/",name:"search",component:function(){return n.e("chunk-9ed21f58").then(n.bind(null,"cbf8"))}},{path:"/favourite",name:"favourite",component:function(){return n.e("chunk-67cd98ec").then(n.bind(null,"47a7"))}},{path:"/movie/:id",name:"movie:id",props:function(e){return{id:e.params.id}},component:function(){return n.e("chunk-462c0bcd").then(n.bind(null,"849b"))}},{path:"/upcoming",name:"upcoming",component:function(){return n.e("chunk-c9239628").then(n.bind(null,"5c33"))}},{path:"/popular",name:"popular",component:function(){return n.e("chunk-35c55d6e").then(n.bind(null,"9f58"))}},{path:"/error",name:"error",component:function(){return n.e("chunk-0a0fc91b").then(n.bind(null,"dda8"))}},{path:"/*",redirect:"/error"}],x=new y["a"]({mode:"history",routes:w}),O=x,S=(n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("c740"),n("a434"),n("3ca3"),n("ddb0"),n("96cf"),n("1da1")),C=n("2f62"),R=n("bc3a"),j=n.n(R),E=n("a7fe"),I=n.n(E);j.a.defaults.baseURL="https://api.themoviedb.org/3/",a["a"].use(C["a"],I.a,j.a);var L=new C["a"].Store({state:{loading:!1,searched:!1,movies:[],favouriteMovies:[],upcomingMovies:[],popularMovies:[],favouriteMoviesIds:[],actualMovie:{}},mutations:{resetMovies:function(e){e.movies=[],e.loading=!0,e.searched=!1},resetActualMovie:function(e){e.actualMovie={}},setMovies:function(e,t){e.movies=t,e.loading=!1,e.searched=!0},setActualMovie:function(e,t){e.actualMovie=t},setFavouriteMovies:function(e,t){e.favouriteMovies=t},setFavouriteMoviesIds:function(e,t){if(t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var s=i.value;n.push(s.id)}}catch(u){r=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}e.favouriteMoviesIds=n}},setUpcomingMovies:function(e,t){e.upcomingMovies=t},setPopularMovies:function(e,t){e.popularMovies=t}},actions:{searchByTitle:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,a("resetMovies"),e.prev=2,e.next=5,j.a.get("search/movie?api_key=".concat("4a2556ad0cbaf0c9369adc89e3aaf7de","&query=").concat(n));case 5:r=e.sent,o=r.data,a("setMovies",o.results),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),console.log("ERROR 404",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,n){return e.apply(this,arguments)}return t}(),findExactMovie:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.commit,a("resetActualMovie"),e.prev=2,e.next=5,j.a.get("movie/".concat(n,"?api_key=").concat("4a2556ad0cbaf0c9369adc89e3aaf7de"));case 5:r=e.sent,o=r.data,a("setActualMovie",o),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](2),O.push("/error"),console.log("ERROR",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,n){return e.apply(this,arguments)}return t}(),addFavouriteMovies:function(e,t){var n=e.commit,a=JSON.parse(localStorage.getItem("favouriteMovies"));a?(a.push(t),localStorage.setItem("favouriteMovies",JSON.stringify(a))):localStorage.setItem("favouriteMovies",JSON.stringify([t])),n("setFavouriteMovies",a),n("setFavouriteMoviesIds",a)},removeFavouriteMovie:function(e,t){var n=e.commit,a=JSON.parse(localStorage.getItem("favouriteMovies")),r=a.findIndex((function(e){return e.id===t}));a.splice(r,1),localStorage.setItem("favouriteMovies",JSON.stringify(a)),n("setFavouriteMovies",a),n("setFavouriteMoviesIds",a)},getUpcomingMovies:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,j.a.get("movie/upcoming?api_key=".concat("4a2556ad0cbaf0c9369adc89e3aaf7de","&language=en-US"));case 4:a=e.sent,r=a.data,n("setUpcomingMovies",r.results),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log("ERROR 404",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}(),getPopularMovies:function(){var e=Object(S["a"])(regeneratorRuntime.mark((function e(t){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,j.a.get("movie/popular?api_key=".concat("4a2556ad0cbaf0c9369adc89e3aaf7de"));case 4:a=e.sent,r=a.data,n("setPopularMovies",r.results),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log("ERROR 404",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}()}});a["a"].config.productionTip=!1,new a["a"]({router:O,store:L,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"8fe6":function(e,t,n){},"9c0c":function(e,t,n){},f657:function(e,t,n){}});
//# sourceMappingURL=app.9d39f0f6.js.map