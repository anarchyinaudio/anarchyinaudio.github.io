(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{755:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(1777)}])},1047:function(e,t,n){"use strict";n.d(t,{N:function(){return l}});var r=n(5893),i=(n(7294),n(8182)),o=n(8695),u=n(8072),l=function(e){var t=e.audiobooks;return(0,r.jsx)(i.Z,{style:{minHeight:"300px",marginTop:"100px"},children:t.length>0?(0,r.jsx)(u.l,{list:t,itemsPerPage:10,useMinimalControls:!0,renderList:function(e){return(0,r.jsxs)(r.Fragment,{children:[e.map((function(e,t){return(0,r.jsx)(o.Z.Item,{children:(0,r.jsxs)("a",{href:"/audiobook/".concat(e.id),children:[e.title," - ",e.author]})},t)}))," "]})}}):(0,r.jsx)("h4",{style:{textAlign:"center",marginTop:"50px"},children:"No results were found for your search."})})}},1777:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(1163),o=n(9098),u=n(1047),l=n(9008),c=n(7852),a=n.n(c),s=n(7294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}var h=function(e){var t=e.title,n=e.items,i=e.checkedItems,o=(0,s.useState)({}),u=o[0],l=o[1],c=(0,s.useState)(10),a=c[0],h=c[1];return(0,s.useEffect)((function(){l(i.reduce((function(e,t){return f({},e,d({},t,!0))}),{}))}),[i[0]]),{checkedItems:Object.keys(u).filter((function(e){return u[e]})),Checklist:(0,r.jsxs)("ul",{children:[(0,r.jsx)("h5",{children:t}),n.sort((function(e,t){return t.count-e.count})).slice(void 0,a).map((function(e,t){return(0,r.jsxs)("li",{children:[(0,r.jsx)("input",{type:"checkbox","data-key":e.title,onChange:function(){return l(f({},u,d({},e.title,!u[e.title])))},value:u[e.title],checked:u[e.title]}),(0,r.jsxs)("label",{children:[e.title," (",e.count,")"]})]},t)})),n.length>a&&(0,r.jsx)("a",{href:"",onClick:function(e){return e.preventDefault(),h(a+10)},children:"show more..."})]})}},v=n(8455),m=n.n(v);function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=function(e){return e?Array.isArray(e)?e:[e]:[]},p=function(e,t){return t&&y((n=new Set(e||[]),r=new Set(Array.isArray(t)?t:[t]),new Set(y(n).filter((function(e){return r.has(e)}))))).length>0||0===(null===t||void 0===t?void 0:t.length)||!t;var n,r},j=function(){var e,t,n,c,s,d=(0,i.useRouter)(),f=o.Lw.filter((function(e){var t;return function(e,t){return e.title.toLowerCase().includes(null===t||void 0===t?void 0:t.toLowerCase())}(e,(null===d||void 0===d||null===(t=d.query)||void 0===t?void 0:t.title)||"")})).filter((function(e){var t;return p((null===e||void 0===e?void 0:e.tags)||[],null===d||void 0===d||null===(t=d.query)||void 0===t?void 0:t.tags)})).filter((function(e){var t;return p([null===e||void 0===e?void 0:e.author]||0,null===d||void 0===d||null===(t=d.query)||void 0===t?void 0:t.authors)})).filter((function(e){var t;return p((null===e||void 0===e?void 0:e.urls.map((function(e){return(0,o.ZX)(e.format)})))||[],null===d||void 0===d||null===(t=d.query)||void 0===t?void 0:t.formats)})).filter((function(e){var t;return p((null===e||void 0===e?void 0:e.urls.map((function(e){return e.author||"Unknown"})))||[],null===d||void 0===d||null===(t=d.query)||void 0===t?void 0:t.audiobookCreators)})),v=f.reduce((function(e,t){return e[t.author]||(e[t.author]=0),e[t.author]+=1,e}),{}),y=Object.keys(v).map((function(e){return{title:e,count:v[e]}})),j=f.reduce((function(e,t){var n;return null===(n=t.urls)||void 0===n||n.map((function(t){t.author&&(e[t.author]||(e[t.author]=0),e[t.author]+=1)})),e}),{}),b=f.reduce((function(e,t){var n;return null===(n=t.urls)||void 0===n||n.map((function(t){var n=(0,o.ZX)(t.format);e[n]||(e[n]=0),e[n]+=1})),e}),{}),x=Object.keys(b).map((function(e){return{title:e,count:b[e]}})),g=f.reduce((function(e,t){var n;return null===(n=t.tags)||void 0===n||n.map((function(t){e[t]||(e[t]=0),e[t]+=1})),e}),{}),w=Object.keys(g).map((function(e){return{title:e,count:g[e]}})),C=Object.keys(j).map((function(e){return{title:e,count:j[e]}})),O=h({items:w,checkedItems:k(null===d||void 0===d||null===(e=d.query)||void 0===e?void 0:e.tags),title:"Tags"}),A=O.checkedItems,I=O.Checklist,N=h({items:y,checkedItems:k(null===d||void 0===d||null===(t=d.query)||void 0===t?void 0:t.authors),title:"Author"}),_=N.checkedItems,q=N.Checklist,S=h({items:x,checkedItems:k(null===d||void 0===d||null===(n=d.query)||void 0===n?void 0:n.formats),title:"Vocal Type"}),E=S.checkedItems,P=S.Checklist,T=h({items:C,checkedItems:k(null===d||void 0===d||null===(c=d.query)||void 0===c?void 0:c.audiobookCreators),title:"Audiobook Creator"}),L=T.checkedItems,X=T.Checklist,Z=function(e){d.push({pathname:"/search",query:{title:e,tags:A,formats:E,audiobookCreators:L,authors:_}})};return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:"Anarchy In Audio"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsx)("div",{children:(0,r.jsx)(m(),{placeholder:"Search...",searchText:null===d||void 0===d||null===(s=d.query)||void 0===s?void 0:s.title,onEnter:Z,onSearchClick:Z,classNames:"d-flex"})}),(0,r.jsxs)("div",{className:a().search,children:[(0,r.jsxs)("div",{children:[q," ",P," ",X," ",I," "]}),(0,r.jsx)(u.N,{audiobooks:f})]})]})]})}}},function(e){e.O(0,[390,98,774,888,179],(function(){return t=755,e(e.s=t);var t}));var t=e.O();_N_E=t}]);