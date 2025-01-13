import{d as J,e as o,l as E,r as U,o as w,c as $,a as n,g as a,n as y,u as t,p as x,q as h,h as V,B as P,F as q,z as I,t as L,w as O,f as W,H}from"./index-DAYxNTuQ.js";import{a as K}from"./axios-BimPEqV4.js";import{_ as R}from"./UiErrorItem.vue_vue_type_style_index_0_lang-C7lqghIu.js";import{_}from"./InputView.vue_vue_type_style_index_0_lang-B5UKdZ9m.js";import{a as G,_ as Q,B as X}from"./ThemeSetting.vue_vue_type_style_index_0_lang-25B-8v7H.js";import{m as Y}from"./formValidator-OdL4bhgE.js";import{u as Z}from"./theme-Bdyol71Y.js";const ee={class:y(["bl-wrapper"])},ae={class:"bl-opt"},se={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-start","margin-bottom":"1rem"}},le={class:"form-group"},oe={class:"form-group"},te=["disabled"],ne={class:"form-group"},fe=J({__name:"RegisterView",setup(re){const{vFullname:S,vEmail:C,vPassword:B,vPhone:N,checkValidation:T}=Y(),s=Z(),b=o(!1),z=()=>{b.value=!b.value},i=o(""),r=o(""),u=o(""),m=o(""),p=o(!0),k=o(),v=o(""),c=o(""),f=o(""),g=o(""),D=[v,c,f,g];v.value=S(i).message,f.value=N(u).message,g.value=B(m).message,c.value=C(r).message,E([i,u,m,r],()=>{v.value=S(i).message||"",f.value=N(u).message||"",g.value=B(m).message||"",c.value=C(r).message||"",p.value=T(D)},{immediate:!0}),E([v,f,g,c],()=>{p.value=T(D)},{immediate:!0});const M=()=>{p.value?s.notifyShow("Mohon isi form dengan benar!"):s.notifyConfirm("Daftar?","Pastikan data sudah benar. Jika sudah, klik Daftar Sekarang","Daftar Sekarang","Batal",async()=>{const A={username:r.value,email:r.value,password:m.value,phone:u.value,fullname:i.value};try{const d=(await K.post(x.baseEnd+"auth/register",JSON.stringify(A),{headers:{"Content-Type":"application/json"}})).data.message;s.notifyAlertSuccess(d.area,d.content,"Oke!",()=>{r.value="",m.value="",u.value="",i.value="",k.value=null,H.push("/login")})}catch(e){if(e.response&&e.response.data.errors){let d=e.response.data.errors;k.value=d}else k.value=[{msg:e.response.data.message.content}]}},()=>{})};return(A,e)=>{const d=U("font-awesome-icon"),F=U("router-link");return w(),$(q,null,[n(G,{visible:b.value,"onUpdate:visible":e[0]||(e[0]=l=>b.value=l)},null,8,["visible"]),a("div",ee,[a("div",{class:y(["bl-inner",t(s).mTheme])},[a("div",ae,[n(Q),a("a",{class:y([t(s).textTheme]),onClick:z,href:"javascript:void(0)"},[n(d,{icon:"gear"})],2)]),a("div",se,[n(X,{style:{"padding-left":"1rem"},"site-name":t(x).appName},null,8,["site-name"])]),a("p",{class:y(t(s).textTheme),style:{"padding-left":"1rem","font-size":"14px"}},[e[5]||(e[5]=h(" Daftar Akun ")),a("span",{style:V({color:t(s).accentColor})},"Waterlo",4),e[6]||(e[6]=h(" sekarang dan kelola bisnis Depot Air Minum Isi Ulang Anda bersama ")),a("span",{style:V({color:t(s).accentColor})},"Waterlo",4),e[7]||(e[7]=h("! "))],2),a("form",{onSubmit:P(M,["prevent"])},[n(_,{"in-label":"Nama Lengkap","in-placeholder":"Mis. John Doe","in-type":"text","in-required":!0,"in-helper":v.value,modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=l=>i.value=l)},null,8,["in-helper","modelValue"]),n(_,{"in-label":"Alamat E-mail","in-placeholder":"contoh@email.com","in-type":"email","in-required":!0,"in-helper":c.value,modelValue:r.value,"onUpdate:modelValue":e[2]||(e[2]=l=>r.value=l)},null,8,["in-helper","modelValue"]),n(_,{"in-label":"Nomor Telepon","in-placeholder":"+628","in-type":"text","in-required":!0,"in-helper":f.value,modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=l=>u.value=l)},null,8,["in-helper","modelValue"]),n(_,{"in-label":"Kata Sandi","in-placeholder":"","in-type":"password","in-required":!0,"in-helper":g.value,modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=l=>m.value=l)},null,8,["in-helper","modelValue"]),a("div",le,[(w(!0),$(q,null,I(k.value,(l,j)=>(w(),W(R,{key:j,"error-message":l.msg},null,8,["error-message"]))),128))]),a("div",oe,[a("button",{type:"submit",class:"bl-submit",style:V({background:`${t(s).gradientValue}`,opacity:p.value?"0.5":"1"}),disabled:p.value}," Buat Akun! ",12,te)])],32),a("div",ne,[a("p",{class:y(t(s).textTheme),style:{"margin-top":"1rem","font-size":"14px"}},[h(" Sudah punya akun "+L(t(x).appName)+"? ",1),n(F,{to:"/login",style:V({color:`${t(s).accentColor}`})},{default:O(()=>e[8]||(e[8]=[h("Masuk")])),_:1},8,["style"])],2)])],2)])],64)}}});export{fe as default};