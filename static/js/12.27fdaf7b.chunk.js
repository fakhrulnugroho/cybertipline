(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{631:function(e,t,n){"use strict";var r=n(50),a=n(653),c=n.n(a),u=n(85),s=n(639),i=c.a.create({baseURL:s.a.API});i.interceptors.request.use((function(e){return function(e){var t=localStorage.getItem("token");return e.headers.Authorization="Bearer ".concat(t),e}(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return function(e){return e.response&&e.response.data?u.b.error(e.response.data.message):"Network Error"===e.message?u.b.error("Sepertinya koneksi internet Anda terputus, silakan cek."):u.b.error(JSON.stringify(e)),Promise.reject(Object(r.a)({},e))}(e)})),t.a=i},636:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(629),a=n.n(r),c=n(630),u=n(631);function s(e){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("/auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},637:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"i",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"k",(function(){return x})),n.d(t,"l",(function(){return O})),n.d(t,"f",(function(){return w})),n.d(t,"c",(function(){return k})),n.d(t,"g",(function(){return P})),n.d(t,"h",(function(){return S})),n.d(t,"a",(function(){return E}));var r=n(629),a=n.n(r),c=n(648),u=n(630),s=n(631);function i(e){return o.apply(this,arguments)}function o(){return(o=Object(u.a)(a.a.mark((function e(t){var n,r,u,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r in n=new FormData,t)if("suspectDob"===r||"dateMadeAvailable"===r||"incidentDate"===r)n.append(r,new Date(t[r]).toUTCString());else if("files"===r){u=Object(c.a)(t.files);try{for(u.s();!(i=u.n()).done;)o=i.value,n.append("files",o)}catch(a){u.e(a)}finally{u.f()}}else n.append(r,t[r]);return e.next=4,s.a.post("/cyber-tipline",n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/cyber-tipline/search",{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(a.a.mark((function e(){var t,n,r,c=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:null,n=c.length>1&&void 0!==c[1]?c[1]:0,r="?size=10&page=".concat(n>0?n-1:n),t&&(r+="&search=".concat(t)),e.next=6,s.a.get("/cyber-tipline".concat(r));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/cyber-tipline/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("/cyber-tipline/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("/cyber-tipline",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("/cyber-tipline/report/".concat(n),{report:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/cyber-tipline/stat/daily");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/cyber-tipline/pdf/".concat(t),{responseType:"blob"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/cyber-tipline/stat/monthly");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/cyber-tipline/stat/pie");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("/cyber-tipline/assign-to/".concat(t.ctId,"/").concat(t.uId));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},638:function(e,t,n){"use strict";var r=n(628),a=n(16);t.a=function(e){var t=e.color,n=e.size;return Object(a.jsxs)(r.e,{color:null!==t&&void 0!==t?t:"primary",size:null!==n&&void 0!==n?n:"",disabled:!0,children:[Object(a.jsx)("span",{className:"spinner-border spinner-border-sm"}),"\u2002 Loading..."]})}},639:function(e,t,n){"use strict";t.a={API:"https://cybertipline-api.nugrohospace.com/",FILE_URL:"https://cybertipline-files.nugrohospace.com/"}},640:function(e,t,n){"use strict";n.d(t,"d",(function(){return r.b})),n.d(t,"m",(function(){return r.i})),n.d(t,"j",(function(){return r.e})),n.d(t,"n",(function(){return r.j})),n.d(t,"g",(function(){return r.d})),n.d(t,"o",(function(){return r.k})),n.d(t,"p",(function(){return r.l})),n.d(t,"f",(function(){return r.c})),n.d(t,"a",(function(){return r.a})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"q",(function(){return j})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"h",(function(){return w})),n.d(t,"s",(function(){return k})),n.d(t,"r",(function(){return P}));n(636);var r=n(637),a=n(629),c=n.n(a),u=n(630),s=n(631);function i(){return o.apply(this,arguments)}function o(){return(o=Object(u.a)(c.a.mark((function e(){var t,n,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:null,n=a.length>1&&void 0!==a[1]?a[1]:0,r="?size=10&page=".concat(n>0?n-1:n),t&&(r+="&search=".concat(t)),e.next=6,s.a.get("/user".concat(r));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/user/level/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/user",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("/user/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("/user",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("/user/change-password/".concat(n),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.put("/user/change-my-password",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.delete("/file/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",t),e.next=4,s.a.put("/image/upload/".concat(n),r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",t),e.next=4,s.a.put("/file/upload/".concat(n),r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},642:function(e,t,n){"use strict";var r=n(628),a=n(702),c=n(16);t.a=function(e){var t=e.label,n=e.type,u=e.value,s=e.onChange,i=e.options;return"textarea"===n?Object(c.jsxs)(r.v,{children:[Object(c.jsx)("label",{children:t}),Object(c.jsx)("textarea",{onChange:s,className:"form-control",rows:"5",defaultValue:u})]}):"select"===n?Object(c.jsxs)(r.v,{children:[Object(c.jsx)("label",{children:t}),Object(c.jsx)(a.a,{options:i,value:u,onChange:s})]}):Object(c.jsxs)(r.v,{children:[Object(c.jsx)("label",{children:t}),Object(c.jsx)("input",{type:n,className:"form-control",value:u,onChange:s})]})}},663:function(e,t,n){"use strict";var r=n(16);t.a=function(e){var t;return Object(r.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h4",{className:"d-inline",children:e.title})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"clearfix",children:null===e||void 0===e||null===(t=e.buttons)||void 0===t?void 0:t.map((function(e,t){return Object(r.jsx)("button",{className:"btn btn-primary ml-1",onClick:e.onClick,children:e.text},t)}))})})]})}},685:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(642),u=n(16);t.a=function(e){var t=e.fields,n=e.col;return Object(u.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(u.jsx)("div",{className:"col-md-".concat(null!==n&&void 0!==n?n:6),children:e.map((function(e,t){return a.a.isValidElement(e)?e:Object(u.jsx)(c.a,{type:e.type,value:e.value,onChange:e.onChange,label:e.label,options:null===e||void 0===e?void 0:e.options},t)}))},t)}))})}},949:function(e,t,n){"use strict";n.r(t);var r=n(633),a=n(628),c=n(1),u=n(640),s=n(663),i=n(662),o=n(671),l=n(629),p=n.n(l),f=n(630),d=n(685),b=n(638),h=n(85),j=n(16),v=function(e){var t,n,s,i=e.modalTitle,o=e.show,l=e.onCancel,v=e.type,x=e.data,m=Object(c.useState)(null!==(t=null===x||void 0===x?void 0:x.name)&&void 0!==t?t:""),O=Object(r.a)(m,2),y=O[0],w=O[1],g=Object(c.useState)(null!==(n=null===x||void 0===x?void 0:x.email)&&void 0!==n?n:""),k=Object(r.a)(g,2),C=k[0],P=k[1],N=Object(c.useState)(""),S=Object(r.a)(N,2),I=S[0],E=S[1],D=Object(c.useState)(""),L=Object(r.a)(D,2),z=L[0],A=L[1],F=Object(c.useState)(null!==(s=null===x||void 0===x?void 0:x.position)&&void 0!==s?s:""),J=Object(r.a)(F,2),T=J[0],q=J[1],U=Object(c.useState)(""),K=Object(r.a)(U,2),M=K[0],R=K[1],V=Object(c.useState)(!1),B=Object(r.a)(V,2),H=B[0],_=B[1],G=function(){w(""),P(""),q(""),R(""),E(""),A("")},Q=function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),e.prev=1,"editProfile"!==v){e.next=9;break}return e.next=5,Object(u.q)({name:y,email:C,position:T,level:x.level,id:x.id});case 5:t=e.sent,localStorage.setItem("userdata",JSON.stringify(t.data)),e.next=17;break;case 9:if(""!==I){e.next=11;break}return e.abrupt("return",h.b.error("Password tidak boleh kosong!"));case 11:if(!(I.length<6)){e.next=13;break}return e.abrupt("return",h.b.error("Password minimal 6 karakter!"));case 13:if(I===z){e.next=15;break}return e.abrupt("return",h.b.error("Konfirmasi password tidak sesuai!"));case 15:return e.next=17,Object(u.b)({oldPassword:M,newPassword:I});case 17:G(),l(),e.next=23;break;case 21:e.prev=21,e.t0=e.catch(1);case 23:_(!1);case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(a.H,{show:o,onClose:l,children:[Object(j.jsx)(a.K,{children:Object(j.jsx)(a.L,{children:i})}),Object(j.jsx)(a.I,{children:Object(j.jsx)(d.a,{fields:"editProfile"===v?[[{label:"Name",value:y,onChange:function(e){return w(e.target.value)},type:"text"},{label:"Email",value:C,onChange:function(e){return P(e.target.value)},type:"email"},{label:"Position",value:T,onChange:function(e){return q(e.target.value)},type:"text"}]]:[[{label:"Old Password",value:M,onChange:function(e){return R(e.target.value)},type:"password"},{label:"New Password",value:I,onChange:function(e){return E(e.target.value)},type:"password"},{label:"Confirm New Password",value:z,onChange:function(e){return A(e.target.value)},type:"password"}]],col:"12"})}),Object(j.jsxs)(a.J,{children:[Object(j.jsx)("button",{className:"btn btn-secondary",onClick:function(){l(),G()},children:"Cancel"}),H?Object(j.jsx)(b.a,{}):Object(j.jsx)("button",{className:"btn btn-primary",onClick:Q,children:"Save"})]})]})};t.default=function(e){var t=Object(o.a)(),n=Object(c.useState)(null),u=Object(r.a)(n,2),l=u[0],p=u[1],f=[{label:"Name",value:t.name},{label:"Email",value:t.email},{label:"Position",value:t.position},{label:"Level",value:Object(j.jsx)("span",{className:"badge bg-secondary",children:Object.keys(i.a)[t.level-1]})}];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(a.g,{children:[Object(j.jsx)(a.k,{children:Object(j.jsx)(s.a,{title:"My Profile"})}),Object(j.jsx)(a.h,{children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)("table",{className:"table table-sm",children:Object(j.jsx)("tbody",{children:f.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{width:"200",children:e.label}),Object(j.jsxs)("td",{children:[":\u2002\u2002",e.value]})]})}))})})})})}),Object(j.jsxs)(a.i,{children:[Object(j.jsx)("button",{className:"btn btn-success mr-1",onClick:function(){return p("editProfile")},children:"Edit Profile"}),Object(j.jsx)("button",{className:"btn btn-info",onClick:function(){return p("changePassword")},children:"Change Password"})]})]}),Object(j.jsx)(v,{show:"editProfile"===l,type:"editProfile",modalTitle:"Edit Profile",data:t,onCancel:function(){return p(null)}}),Object(j.jsx)(v,{show:"changePassword"===l,type:"changePassword",modalTitle:"Change Password",data:t,onCancel:function(){return p(null)}})]})}}}]);
//# sourceMappingURL=12.27fdaf7b.chunk.js.map