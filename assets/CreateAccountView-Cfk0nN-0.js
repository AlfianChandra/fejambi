<<<<<<< HEAD
<<<<<<<< HEAD:assets/CreateAccountView-DHlCAE_q.js
import{d as $,e as a,l as M,r as z,o as y,f as E,w as x,g as l,n as V,u as A,a as r,q as C,B as R,c as G,z as I,F as L,p as F}from"./index-WX7TTTPk.js";import{u as W}from"./theme-C84dlgFN.js";import{a as j}from"./axios-BimPEqV4.js";import{_ as p}from"./InputView.vue_vue_type_style_index_0_lang-XO7BhfDz.js";import{_ as H}from"./MainWrapperView.vue_vue_type_style_index_0_lang-CNBZ5gR7.js";import{_ as J}from"./SelectView.vue_vue_type_style_index_0_lang-DH9-Zs0R.js";import{_ as K}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-Df8yPA0p.js";import{m as O}from"./formValidator-OdL4bhgE.js";import{_ as Q}from"./UiErrorItem.vue_vue_type_style_index_0_lang-DGoabgEg.js";const X={class:"col-md-12"},Y={class:"col-md-5"},Z={class:"form-group"},me=$({__name:"CreateAccountView",setup(ee){const{vFullname:U,vPhone:P,vPassword:q,vEmail:k,vIsEmpty:D,checkValidation:S}=O(),n=W(),v=a(!0),c=a(),u=a(""),i=a(""),t=a(""),m=a(""),d=a(""),f=a(""),h=a(""),w=a(""),_=a(""),g=a(""),T=[f,w,g,h,_];M([t,u,m,d,i],()=>{f.value=U(u).message||"",h.value=D(i).message||"",w.value=k(t).message||"",_.value=q(m).message||"",g.value=P(d).message||"",v.value=S(T)},{immediate:!0});const B=async()=>{if(c.value="",!v.value)try{const o={fullname:u.value,password:m.value,email:t.value,phone:d.value,username:t.value,level:i.value},b=(await j.post(F.baseEnd+"api/user/createuser",o,{headers:F.headerSet})).data;n.notifyAlertSuccess("Success",b.message.content,"Dismiss",()=>{t.value="",u.value="",m.value="",i.value="",d.value=""})}catch(o){if(o.response)if(o.response.data.errors)if(o.response.data.errors.length!=0)c.value=o.response.data.errors,n.notifyAlertError("Failed","Got multiple errors. Check your inputs","Dismiss",()=>{});else{const e=o.response.data;n.notifyAlertError("Failed",e.message.content,"Dismiss",()=>{}),console.log(e)}else n.notifyAlertError("Failed",o.response.data.message.content,"Dismiss",()=>{})}};return(o,e)=>{const b=z("font-awesome-icon");return y(),E(H,{"context-title":"Create Account","context-desc":"Create a new account, whether it intended for Admin or User"},{default:x(()=>[l("div",X,[l("h3",{class:V(A(n).textTheme)},e[5]||(e[5]=[l("b",null,"User's Account Detail",-1)]),2),l("p",{class:V(A(n).textTheme)},[r(b,{icon:"info-circle"}),e[6]||(e[6]=C(" Fill all required fields to create an account "))],2)]),l("div",Y,[l("form",{onSubmit:R(B,["prevent"])},[r(p,{"in-label":"Full Name","in-required":!0,"in-type":"text","model-value":u.value,"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),"in-placeholder":"User's full name. Text only","in-helper":f.value},null,8,["model-value","in-helper"]),r(p,{"in-label":"E-Mail","in-required":!0,"in-type":"text","model-value":t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),"in-placeholder":"example@email.com","in-helper":w.value},null,8,["model-value","in-helper"]),r(p,{"in-label":"Password","in-required":!0,"in-type":"password","model-value":m.value,"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),"in-placeholder":"Min. 8 chars password length","in-helper":_.value},null,8,["model-value","in-helper"]),r(J,{"in-helper":h.value,"model-value":i.value,"onUpdate:modelValue":e[3]||(e[3]=s=>i.value=s),"in-label":"Account Type","in-required":!0},{default:x(()=>e[7]||(e[7]=[l("option",{value:""},"Select...",-1),l("option",{value:"webmaster"},"Webmaster",-1),l("option",{value:"user"},"User",-1),l("option",{value:"customer"},"Customer",-1)])),_:1},8,["in-helper","model-value"]),r(p,{"in-label":"Phone","in-required":!0,"in-type":"text","model-value":d.value,"onUpdate:modelValue":e[4]||(e[4]=s=>d.value=s),"in-placeholder":"+628","in-helper":g.value},null,8,["model-value","in-helper"]),l("div",Z,[(y(!0),G(L,null,I(c.value,(s,N)=>(y(),E(Q,{key:N,"error-message":s.msg},null,8,["error-message"]))),128))]),r(K,{"bt-type":"submit","bt-disabled":v.value},{default:x(()=>e[8]||(e[8]=[C("Create!")])),_:1},8,["bt-disabled"])],32)])]),_:1})}}});export{me as default};
========
import{d as $,e as a,l as M,r as z,o as y,f as E,w as x,g as l,n as V,u as A,a as r,q as C,B as R,c as G,z as I,F as L,p as F}from"./index-DkutxhN8.js";import{u as W}from"./theme-BVDE6LBf.js";import{a as j}from"./axios-BimPEqV4.js";import{_ as p}from"./InputView.vue_vue_type_style_index_0_lang-Di0lpbn7.js";import{_ as H}from"./MainWrapperView.vue_vue_type_style_index_0_lang-C7k__tM6.js";import{_ as J}from"./SelectView.vue_vue_type_style_index_0_lang-CXuIjTfC.js";import{_ as K}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-C-8Nx7-y.js";import{m as O}from"./formValidator-OdL4bhgE.js";import{_ as Q}from"./UiErrorItem.vue_vue_type_style_index_0_lang-By-GV0Vr.js";const X={class:"col-md-12"},Y={class:"col-md-5"},Z={class:"form-group"},me=$({__name:"CreateAccountView",setup(ee){const{vFullname:U,vPhone:P,vPassword:q,vEmail:k,vIsEmpty:D,checkValidation:S}=O(),n=W(),v=a(!0),c=a(),u=a(""),i=a(""),t=a(""),m=a(""),d=a(""),f=a(""),h=a(""),w=a(""),_=a(""),g=a(""),T=[f,w,g,h,_];M([t,u,m,d,i],()=>{f.value=U(u).message||"",h.value=D(i).message||"",w.value=k(t).message||"",_.value=q(m).message||"",g.value=P(d).message||"",v.value=S(T)},{immediate:!0});const B=async()=>{if(c.value="",!v.value)try{const o={fullname:u.value,password:m.value,email:t.value,phone:d.value,username:t.value,level:i.value},b=(await j.post(F.baseEnd+"api/user/createuser",o,{headers:F.headerSet})).data;n.notifyAlertSuccess("Success",b.message.content,"Dismiss",()=>{t.value="",u.value="",m.value="",i.value="",d.value=""})}catch(o){if(o.response)if(o.response.data.errors)if(o.response.data.errors.length!=0)c.value=o.response.data.errors,n.notifyAlertError("Failed","Got multiple errors. Check your inputs","Dismiss",()=>{});else{const e=o.response.data;n.notifyAlertError("Failed",e.message.content,"Dismiss",()=>{}),console.log(e)}else n.notifyAlertError("Failed",o.response.data.message.content,"Dismiss",()=>{})}};return(o,e)=>{const b=z("font-awesome-icon");return y(),E(H,{"context-title":"Create Account","context-desc":"Create a new account, whether it intended for Admin or User"},{default:x(()=>[l("div",X,[l("h3",{class:V(A(n).textTheme)},e[5]||(e[5]=[l("b",null,"User's Account Detail",-1)]),2),l("p",{class:V(A(n).textTheme)},[r(b,{icon:"info-circle"}),e[6]||(e[6]=C(" Fill all required fields to create an account "))],2)]),l("div",Y,[l("form",{onSubmit:R(B,["prevent"])},[r(p,{"in-label":"Full Name","in-required":!0,"in-type":"text","model-value":u.value,"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),"in-placeholder":"User's full name. Text only","in-helper":f.value},null,8,["model-value","in-helper"]),r(p,{"in-label":"E-Mail","in-required":!0,"in-type":"text","model-value":t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),"in-placeholder":"example@email.com","in-helper":w.value},null,8,["model-value","in-helper"]),r(p,{"in-label":"Password","in-required":!0,"in-type":"password","model-value":m.value,"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),"in-placeholder":"Min. 8 chars password length","in-helper":_.value},null,8,["model-value","in-helper"]),r(J,{"in-helper":h.value,"model-value":i.value,"onUpdate:modelValue":e[3]||(e[3]=s=>i.value=s),"in-label":"Account Type","in-required":!0},{default:x(()=>e[7]||(e[7]=[l("option",{value:""},"Select...",-1),l("option",{value:"webmaster"},"Webmaster",-1),l("option",{value:"user"},"User",-1),l("option",{value:"customer"},"Customer",-1)])),_:1},8,["in-helper","model-value"]),r(p,{"in-label":"Phone","in-required":!0,"in-type":"text","model-value":d.value,"onUpdate:modelValue":e[4]||(e[4]=s=>d.value=s),"in-placeholder":"+628","in-helper":g.value},null,8,["model-value","in-helper"]),l("div",Z,[(y(!0),G(L,null,I(c.value,(s,N)=>(y(),E(Q,{key:N,"error-message":s.msg},null,8,["error-message"]))),128))]),r(K,{"bt-type":"submit","bt-disabled":v.value},{default:x(()=>e[8]||(e[8]=[C("Create!")])),_:1},8,["bt-disabled"])],32)])]),_:1})}}});export{me as default};
>>>>>>>> parent of f45e513 (-):assets/CreateAccountView-Cfk0nN-0.js
=======
import{d as $,e as a,l as M,r as z,o as y,f as E,w as x,g as l,n as V,u as A,a as r,q as C,B as R,c as G,z as I,F as L,p as F}from"./index-DkutxhN8.js";import{u as W}from"./theme-BVDE6LBf.js";import{a as j}from"./axios-BimPEqV4.js";import{_ as p}from"./InputView.vue_vue_type_style_index_0_lang-Di0lpbn7.js";import{_ as H}from"./MainWrapperView.vue_vue_type_style_index_0_lang-C7k__tM6.js";import{_ as J}from"./SelectView.vue_vue_type_style_index_0_lang-CXuIjTfC.js";import{_ as K}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-C-8Nx7-y.js";import{m as O}from"./formValidator-OdL4bhgE.js";import{_ as Q}from"./UiErrorItem.vue_vue_type_style_index_0_lang-By-GV0Vr.js";const X={class:"col-md-12"},Y={class:"col-md-5"},Z={class:"form-group"},me=$({__name:"CreateAccountView",setup(ee){const{vFullname:U,vPhone:P,vPassword:q,vEmail:k,vIsEmpty:D,checkValidation:S}=O(),n=W(),v=a(!0),c=a(),u=a(""),i=a(""),t=a(""),m=a(""),d=a(""),f=a(""),h=a(""),w=a(""),_=a(""),g=a(""),T=[f,w,g,h,_];M([t,u,m,d,i],()=>{f.value=U(u).message||"",h.value=D(i).message||"",w.value=k(t).message||"",_.value=q(m).message||"",g.value=P(d).message||"",v.value=S(T)},{immediate:!0});const B=async()=>{if(c.value="",!v.value)try{const o={fullname:u.value,password:m.value,email:t.value,phone:d.value,username:t.value,level:i.value},b=(await j.post(F.baseEnd+"api/user/createuser",o,{headers:F.headerSet})).data;n.notifyAlertSuccess("Success",b.message.content,"Dismiss",()=>{t.value="",u.value="",m.value="",i.value="",d.value=""})}catch(o){if(o.response)if(o.response.data.errors)if(o.response.data.errors.length!=0)c.value=o.response.data.errors,n.notifyAlertError("Failed","Got multiple errors. Check your inputs","Dismiss",()=>{});else{const e=o.response.data;n.notifyAlertError("Failed",e.message.content,"Dismiss",()=>{}),console.log(e)}else n.notifyAlertError("Failed",o.response.data.message.content,"Dismiss",()=>{})}};return(o,e)=>{const b=z("font-awesome-icon");return y(),E(H,{"context-title":"Create Account","context-desc":"Create a new account, whether it intended for Admin or User"},{default:x(()=>[l("div",X,[l("h3",{class:V(A(n).textTheme)},e[5]||(e[5]=[l("b",null,"User's Account Detail",-1)]),2),l("p",{class:V(A(n).textTheme)},[r(b,{icon:"info-circle"}),e[6]||(e[6]=C(" Fill all required fields to create an account "))],2)]),l("div",Y,[l("form",{onSubmit:R(B,["prevent"])},[r(p,{"in-label":"Full Name","in-required":!0,"in-type":"text","model-value":u.value,"onUpdate:modelValue":e[0]||(e[0]=s=>u.value=s),"in-placeholder":"User's full name. Text only","in-helper":f.value},null,8,["model-value","in-helper"]),r(p,{"in-label":"E-Mail","in-required":!0,"in-type":"text","model-value":t.value,"onUpdate:modelValue":e[1]||(e[1]=s=>t.value=s),"in-placeholder":"example@email.com","in-helper":w.value},null,8,["model-value","in-helper"]),r(p,{"in-label":"Password","in-required":!0,"in-type":"password","model-value":m.value,"onUpdate:modelValue":e[2]||(e[2]=s=>m.value=s),"in-placeholder":"Min. 8 chars password length","in-helper":_.value},null,8,["model-value","in-helper"]),r(J,{"in-helper":h.value,"model-value":i.value,"onUpdate:modelValue":e[3]||(e[3]=s=>i.value=s),"in-label":"Account Type","in-required":!0},{default:x(()=>e[7]||(e[7]=[l("option",{value:""},"Select...",-1),l("option",{value:"webmaster"},"Webmaster",-1),l("option",{value:"user"},"User",-1),l("option",{value:"customer"},"Customer",-1)])),_:1},8,["in-helper","model-value"]),r(p,{"in-label":"Phone","in-required":!0,"in-type":"text","model-value":d.value,"onUpdate:modelValue":e[4]||(e[4]=s=>d.value=s),"in-placeholder":"+628","in-helper":g.value},null,8,["model-value","in-helper"]),l("div",Z,[(y(!0),G(L,null,I(c.value,(s,N)=>(y(),E(Q,{key:N,"error-message":s.msg},null,8,["error-message"]))),128))]),r(K,{"bt-type":"submit","bt-disabled":v.value},{default:x(()=>e[8]||(e[8]=[C("Create!")])),_:1},8,["bt-disabled"])],32)])]),_:1})}}});export{me as default};
>>>>>>> parent of f45e513 (-)
