(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{631:function(e,t,r){"use strict";var n=r(50),c=r(653),a=r.n(c),s=r(85),i=r(639),o=a.a.create({baseURL:i.a.API});o.interceptors.request.use((function(e){return function(e){var t=localStorage.getItem("token");return e.headers.Authorization="Bearer ".concat(t),e}(e)})),o.interceptors.response.use((function(e){return e}),(function(e){return function(e){return e.response&&e.response.data?s.b.error(e.response.data.message):"Network Error"===e.message?s.b.error("Sepertinya koneksi internet Anda terputus, silakan cek."):s.b.error(JSON.stringify(e)),Promise.reject(Object(n.a)({},e))}(e)})),t.a=o},636:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(629),c=r.n(n),a=r(630),s=r(631);function i(e){return o.apply(this,arguments)}function o(){return(o=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("/auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},639:function(e,t,r){"use strict";t.a={API:"https://cybertipline-api.nugrohospace.com/",FILE_URL:"https://cybertipline-files.nugrohospace.com/"}},935:function(e,t,r){"use strict";r.r(t);var n=r(629),c=r.n(n),a=r(630),s=r(633),i=r(1),o=r(628),u=r(646),l=r(636),j=r(16);t.default=function(e){var t=Object(i.useState)(""),r=Object(s.a)(t,2),n=r[0],p=r[1],b=Object(i.useState)(""),d=Object(s.a)(b,2),h=d[0],m=d[1],O=function(){var t=Object(a.a)(c.a.mark((function t(r){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.a)({email:n,password:h});case 3:a=t.sent,localStorage.clear(),localStorage.setItem("userdata",JSON.stringify(a.data.user)),localStorage.setItem("token",a.data.token),e.history.push("/dashboard"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(0);case 12:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"c-app c-default-layout flex-row align-items-center",children:Object(j.jsx)(o.m,{children:Object(j.jsx)(o.R,{className:"justify-content-center",children:Object(j.jsx)(o.l,{md:"6",children:Object(j.jsx)(o.j,{children:Object(j.jsx)(o.g,{className:"p-4",children:Object(j.jsx)(o.h,{children:Object(j.jsxs)(o.u,{onSubmit:O,children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(j.jsxs)(o.D,{className:"mb-3",children:[Object(j.jsx)(o.E,{children:Object(j.jsx)(o.F,{children:Object(j.jsx)(u.a,{name:"cil-user"})})}),Object(j.jsx)(o.C,{type:"email",placeholder:"Email",value:n,onChange:function(e){return p(e.target.value)}})]}),Object(j.jsxs)(o.D,{className:"mb-4",children:[Object(j.jsx)(o.E,{children:Object(j.jsx)(o.F,{children:Object(j.jsx)(u.a,{name:"cil-lock-locked"})})}),Object(j.jsx)(o.C,{type:"password",placeholder:"Password",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(j.jsx)(o.R,{children:Object(j.jsx)(o.l,{xs:"6",children:Object(j.jsx)(o.e,{color:"primary",className:"px-4",onClick:O,children:"Login"})})})]})})})})})})})})}}}]);
//# sourceMappingURL=17.270b0535.chunk.js.map