(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{631:function(t,e,n){"use strict";var r=n(50),c=n(653),a=n.n(c),u=n(85),i=n(639),s=a.a.create({baseURL:i.a.API});s.interceptors.request.use((function(t){return function(t){var e=localStorage.getItem("token");return t.headers.Authorization="Bearer ".concat(e),t}(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return function(t){return t.response&&t.response.data?u.b.error(t.response.data.message):"Network Error"===t.message?u.b.error("Sepertinya koneksi internet Anda terputus, silakan cek."):u.b.error(JSON.stringify(t)),Promise.reject(Object(r.a)({},t))}(t)})),e.a=s},636:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(629),c=n.n(r),a=n(630),u=n(631);function i(t){return s.apply(this,arguments)}function s(){return(s=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post("/auth/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},637:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"j",(function(){return b})),n.d(e,"d",(function(){return h})),n.d(e,"k",(function(){return O})),n.d(e,"l",(function(){return m})),n.d(e,"f",(function(){return w})),n.d(e,"c",(function(){return k})),n.d(e,"g",(function(){return N})),n.d(e,"h",(function(){return C})),n.d(e,"a",(function(){return P}));var r=n(629),c=n.n(r),a=n(648),u=n(630),i=n(631);function s(t){return o.apply(this,arguments)}function o(){return(o=Object(u.a)(c.a.mark((function t(e){var n,r,u,s,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r in n=new FormData,e)if("suspectDob"===r||"dateMadeAvailable"===r||"incidentDate"===r)n.append(r,new Date(e[r]).toUTCString());else if("files"===r){u=Object(a.a)(e.files);try{for(u.s();!(s=u.n()).done;)o=s.value,n.append("files",o)}catch(c){u.e(c)}finally{u.f()}}else n.append(r,e[r]);return t.next=4,i.a.post("/cyber-tipline",n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cyber-tipline/search",{params:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(c.a.mark((function t(){var e,n,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:null,n=a.length>1&&void 0!==a[1]?a[1]:0,r="?size=10&page=".concat(n>0?n-1:n),e&&(r+="&search=".concat(e)),t.next=6,i.a.get("/cyber-tipline".concat(r));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cyber-tipline/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.delete("/cyber-tipline/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("/cyber-tipline",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(c.a.mark((function t(e,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("/cyber-tipline/report/".concat(n),{report:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cyber-tipline/stat/daily");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cyber-tipline/pdf/".concat(e),{responseType:"blob"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cyber-tipline/stat/monthly");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/cyber-tipline/stat/pie");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(t){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("/cyber-tipline/assign-to/".concat(e.ctId,"/").concat(e.uId));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},638:function(t,e,n){"use strict";var r=n(628),c=n(16);e.a=function(t){var e=t.color,n=t.size;return Object(c.jsxs)(r.e,{color:null!==e&&void 0!==e?e:"primary",size:null!==n&&void 0!==n?n:"",disabled:!0,children:[Object(c.jsx)("span",{className:"spinner-border spinner-border-sm"}),"\u2002 Loading..."]})}},639:function(t,e,n){"use strict";e.a={API:"https://cybertipline-api.nugrohospace.com/",FILE_URL:"https://cybertipline-files.nugrohospace.com/"}},640:function(t,e,n){"use strict";n.d(e,"d",(function(){return r.b})),n.d(e,"m",(function(){return r.i})),n.d(e,"j",(function(){return r.e})),n.d(e,"n",(function(){return r.j})),n.d(e,"g",(function(){return r.d})),n.d(e,"o",(function(){return r.k})),n.d(e,"p",(function(){return r.l})),n.d(e,"f",(function(){return r.c})),n.d(e,"a",(function(){return r.a})),n.d(e,"k",(function(){return s})),n.d(e,"l",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"i",(function(){return b})),n.d(e,"q",(function(){return h})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return w})),n.d(e,"s",(function(){return k})),n.d(e,"r",(function(){return N}));n(636);var r=n(637),c=n(629),a=n.n(c),u=n(630),i=n(631);function s(){return o.apply(this,arguments)}function o(){return(o=Object(u.a)(a.a.mark((function t(){var e,n,r,c=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:null,n=c.length>1&&void 0!==c[1]?c[1]:0,r="?size=10&page=".concat(n>0?n-1:n),e&&(r+="&search=".concat(e)),t.next=6,i.a.get("/user".concat(r));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/user/level/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.post("/user",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.delete("/user/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("/user",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("/user/change-password/".concat(n),e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.put("/user/change-my-password",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.delete("/file/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t,e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("file",e),t.next=4,i.a.put("/image/upload/".concat(n),r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t,e){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(a.a.mark((function t(e,n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(r=new FormData).append("file",e),t.next=4,i.a.put("/file/upload/".concat(n),r);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},641:function(t,e,n){"use strict";var r=n(656),c=n(16);e.a=function(){return Object(c.jsx)("div",{className:"d-flex justify-content-center align-items-end",style:{height:400},children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)(r.a,{size:256}),Object(c.jsx)("h1",{className:"mt-4",children:"Loading..."})]})})}},648:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(652);function c(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r.a)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var c=0,a=function(){};return{s:a,n:function(){return c>=t.length?{done:!0}:{done:!1,value:t[c++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,u=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw u}}}}},654:function(t,e,n){"use strict";var r=n(628),c=n(638),a=n(16);e.a=function(t){var e=t.show,n=t.onPositive,u=t.onNegative,i=t.text,s=t.btnLoading;return Object(a.jsxs)(r.H,{show:e,onClose:u,children:[Object(a.jsx)(r.K,{children:Object(a.jsx)(r.L,{children:"Konfirmasi!"})}),Object(a.jsx)(r.I,{children:null!==i&&void 0!==i?i:"Apakah anda yakin akan menghapus data?"}),Object(a.jsxs)(r.J,{children:[Object(a.jsx)("button",{className:"btn btn-secondary",onClick:u,children:"Tidak"}),s?Object(a.jsx)(c.a,{color:"danger"}):Object(a.jsx)("button",{className:"btn btn-danger",onClick:n,children:"Ya"})]})]})}},663:function(t,e,n){"use strict";var r=n(16);e.a=function(t){var e;return Object(r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h4",{className:"d-inline",children:t.title})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"clearfix",children:null===t||void 0===t||null===(e=t.buttons)||void 0===e?void 0:e.map((function(t,e){return Object(r.jsx)("button",{className:"btn btn-primary ml-1",onClick:t.onClick,children:t.text},e)}))})})]})}},672:function(t,e,n){"use strict";function r(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth(),c=e.getDate(),a="";switch(r){case 0:a="Januari";break;case 1:a="Februari";break;case 2:a="Maret";break;case 3:a="April";break;case 4:a="Mei";break;case 5:a="Juni";break;case 6:a="Juli";break;case 7:a="Agustus";break;case 8:a="September";break;case 9:a="Oktober";break;case 10:a="November";break;case 11:a="Desember";break;default:a="not found"}return"".concat(c," ").concat(a," ").concat(n)}n.d(e,"a",(function(){return r}))},673:function(t,e,n){"use strict";var r=n(633),c=n(1),a=n(657),u=n(628),i=n(16);e.a=function(t){var e=null===t||void 0===t?void 0:t.data,n=e.columns,s=e.rows,o=t.onSearch,l=t.search,p=t.pages,d=t.currentPage,f=t.onActivePageChange,b=Object(c.useState)(""),j=Object(r.a)(b,2),h=j[0],x=j[1],O=function(t){t.preventDefault(),o(h)};return void 0===t.data?Object(i.jsx)("div",{}):Object(i.jsxs)(i.Fragment,{children:[l&&Object(i.jsx)("div",{className:"clear-fix",children:Object(i.jsx)("form",{onSubmit:O,children:Object(i.jsx)("div",{className:"float-right",children:Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)("div",{className:"form-group mr-1",children:Object(i.jsx)("input",{type:"search",className:"form-control",value:h,onChange:function(t){return x(t.target.value)},placeholder:"Search..."})}),Object(i.jsx)("div",{className:"form-group",children:Object(i.jsx)("button",{className:"btn btn-secondary",onClick:O,children:Object(i.jsx)(a.c,{})})})]})})})}),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsx)("tr",{children:null===n||void 0===n?void 0:n.map((function(t,e){var n,r;return Object(i.jsx)("th",{style:null!==(n=null===t||void 0===t?void 0:t.style)&&void 0!==n?n:{},children:null!==(r=null===t||void 0===t?void 0:t.text)&&void 0!==r?r:t},e)}))})}),Object(i.jsx)("tbody",{children:0===(null===s||void 0===s?void 0:s.length)?Object(i.jsx)("tr",{children:Object(i.jsx)("td",{children:Object(i.jsx)("h4",{children:"Data tidak ada!"})})}):null===s||void 0===s?void 0:s.map((function(t,e){return Object(i.jsx)("tr",{children:t.map((function(t,e){var n,r;return Object(i.jsx)("td",{style:null!==(n=null===t||void 0===t?void 0:t.style)&&void 0!==n?n:{},children:null!==(r=null===t||void 0===t?void 0:t.text)&&void 0!==r?r:t},e)}))},e)}))})]}),p>1&&Object(i.jsx)(u.P,{activePage:d,pages:t.pages||1,onActivePageChange:function(t){return f(t)}})]})}},674:function(t,e,n){"use strict";var r=n(628),c=n(16);e.a=function(t){var e=t.items;return Object(c.jsxs)(r.o,{children:[Object(c.jsx)(r.r,{size:"sm",color:"warning",children:"Action"}),Object(c.jsx)(r.q,{children:e.map((function(t,e){return Object(c.jsx)(r.p,{onClick:t.onClick,children:t.text},e)}))})]})}},706:function(t,e){t.exports=function(t,e,n,r){var c=new Blob("undefined"!==typeof r?[r,t]:[t],{type:n||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(c,e);else{var a=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(c):window.webkitURL.createObjectURL(c),u=document.createElement("a");u.style.display="none",u.href=a,u.setAttribute("download",e),"undefined"===typeof u.download&&u.setAttribute("target","_blank"),document.body.appendChild(u),u.click(),setTimeout((function(){document.body.removeChild(u),window.URL.revokeObjectURL(a)}),200)}}},938:function(t,e,n){"use strict";n.r(e);var r=n(629),c=n.n(r),a=n(630),u=n(633),i=n(628),s=n(1),o=n(640),l=n(672),p=n(654),d=n(673),f=n(674),b=n(663),j=n(641),h=n(671),x=n(662),O=n(706),v=n.n(O),m=n(638),y=n(16);e.default=function(t){var e=Object(s.useState)({}),n=Object(u.a)(e,2),r=n[0],O=n[1],w=Object(s.useState)(!1),g=Object(u.a)(w,2),k=g[0],S=g[1],N=Object(s.useState)(null),A=Object(u.a)(N,2),C=A[0],L=A[1],P=Object(s.useState)(!0),D=Object(u.a)(P,2),R=D[0],I=D[1],T=Object(s.useState)(!1),U=Object(u.a)(T,2),z=U[0],E=U[1],F=Object(s.useState)(null),B=Object(u.a)(F,2),J=B[0],Y=B[1],M=Object(s.useState)(""),q=Object(u.a)(M,2),K=q[0],H=q[1],_=Object(s.useState)(0),G=Object(u.a)(_,2),Q=G[0],V=G[1],W=Object(s.useState)(0),X=Object(u.a)(W,2),Z=X[0],$=X[1],tt=Object(s.useState)(null),et=Object(u.a)(tt,2),nt=et[0],rt=et[1],ct=Object(s.useState)([]),at=Object(u.a)(ct,2),ut=at[0],it=at[1],st=Object(s.useState)(null),ot=Object(u.a)(st,2),lt=ot[0],pt=ot[1],dt=function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I(!0),t.prev=1,t.next=4,Object(o.j)(e,n);case 4:return r=t.sent,t.next=7,Object(o.l)(x.a.ANALYST);case 7:a=t.sent,it(a.data.content),bt(r.data.content),V(r.data.totalPages),$(r.data.number+1),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:I(!1);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,n){return t.apply(this,arguments)}}(),ft=function(t){return Object(y.jsx)("span",{className:"badge badge-secondary",children:["Batal","Sidik","Lidik","Selesai"][t]})},bt=function(t){var e=[];e=Object(h.c)(x.a.ANALYST)?["CT Number","Priority","Status","Suspect Screen Name","Suspect Phone","Incident Date",""]:["CT Number","Priority","Status","Suspect Screen Name","Suspect Phone","Incident Date","Analyst",""];var n=t.map((function(t){var e,n;return Object(h.c)(x.a.ANALYST)?[t.ctNumber,t.priority,ft(t.status),t.suspectScreenName,t.suspectPhone,Object(l.a)(t.incidentDate),ht(t)]:[t.ctNumber,t.priority,ft(t.status),t.suspectScreenName,t.suspectPhone,Object(l.a)(t.incidentDate),null!==(e=null===t||void 0===t||null===(n=t.analyzedBy)||void 0===n?void 0:n.name)&&void 0!==e?e:"-",ht(t)]}));O({rows:n,columns:e})},jt=function(){var t=Object(a.a)(c.a.mark((function t(e){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(o.f)(e.id);case 3:n=t.sent,v()(n.data,"".concat(e.ctNumber,".pdf")),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),ht=function(e){var n=[{text:"Edit",onClick:function(){return t.history.push("/cyber-tipline/edit?id=".concat(e.id))}},{text:"Detail",onClick:function(){return t.history.push("/cyber-tipline/detail?id=".concat(e.id))}},{text:"Download PDF",onClick:function(){return jt(e)}},{text:"Delete",onClick:function(){return Ot(e)}}];return Object(h.c)(x.a.MANAGER)?n.push({text:"Assign to",onClick:function(){return function(t){rt("assignment"),pt(t)}(e)}}):Object(h.c)(x.a.ANALYST)&&n.push({text:"Report",onClick:function(){return t.history.push("/cyber-tipline/report?id=".concat(e.id))}}),Object(y.jsx)(f.a,{items:n})},xt=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Y(e.id),t.prev=1,t.next=4,Object(o.a)({ctId:lt.id,uId:e.id});case 4:return rt(null),t.next=7,dt();case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:Y(null);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),Ot=function(t){S(!0),L(t)},vt=function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(!0),t.prev=1,t.next=4,Object(o.g)(C.id);case 4:return S(!1),t.next=7,dt();case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:E(!1);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){dt()}),[]),R?Object(y.jsx)(j.a,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(i.g,{children:[Object(y.jsx)(i.k,{children:Object(y.jsx)(b.a,{title:"Cyber Tipline",buttons:Object(h.c)(x.a.OPERATOR)?[{onClick:function(){return t.history.push("/cyber-tipline/create")},text:"Tambah"}]:[]})}),Object(y.jsx)(i.h,{children:Object(y.jsx)(d.a,{data:r,search:!0,onSearch:function(t){H(t),dt(t,0)},pages:Q,currentPage:Z,onActivePageChange:function(t){return dt(K,t)}})})]}),Object(y.jsx)(p.a,{show:k,onNegative:function(){return S(null)},onPositive:vt,btnLoading:z}),Object(y.jsxs)(i.H,{show:"assignment"===nt,onClose:function(){return rt(null)},size:"lg",children:[Object(y.jsx)(i.K,{children:Object(y.jsx)(i.L,{children:"Analyst"})}),Object(y.jsx)(i.I,{children:Object(y.jsxs)("table",{className:"table",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{width:"40%",children:"Nama"}),Object(y.jsx)("td",{width:"40%",children:"Email"}),Object(y.jsx)("td",{width:"20%"})]})}),Object(y.jsx)("tbody",{children:ut.map((function(t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:t.name}),Object(y.jsx)("td",{children:t.email}),Object(y.jsx)("td",{children:J===t.id?Object(y.jsx)(m.a,{size:"sm",color:"info"}):null===(null===lt||void 0===lt?void 0:lt.analyzedBy)&&Object(y.jsx)("button",{className:"btn btn-info btn-sm",onClick:function(){return xt(t)},children:"Assign"})})]},t.id)}))})]})}),Object(y.jsx)(i.J,{children:Object(y.jsx)("button",{className:"btn btn-secondary",onClick:function(){return rt(null)},children:"Batal"})})]})]})}}}]);
//# sourceMappingURL=10.19d6a468.chunk.js.map