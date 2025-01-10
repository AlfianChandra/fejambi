import{l as F,_ as R,B as z,a as W}from"./ThemeSetting.vue_vue_type_style_index_0_lang-BtJsQGPo.js";import{u as p}from"./theme-MMYVCpC6.js";import{d as y,r as k,o as l,c as m,a as s,n as r,b as Y,e as h,f as C,w as $,g as o,h as v,u as t,t as x,F as A,i as G,j as V,k as P,l as K,m as f,p as B,q as U,s as H}from"./index-UmRKcWIK.js";import{l as X}from"./index-NsU1tN7b.js";import"./axios-BimPEqV4.js";const T=y({__name:"TopNavAnchor",props:{icon:{type:String,required:!0},textTheme:{type:String}},setup(e){return(i,n)=>{const c=k("font-awesome-icon");return l(),m("a",{href:"javascript:void(0)",class:r([e.textTheme?e.textTheme:"text-light","topnav-item"])},[s(c,{icon:e.icon},null,8,["icon"])],2)}}}),w=p(),Z=Y("socket",()=>{const e=h(null),i=h("Disconnected");return{socket:e,connectionStatus:i,connectSocket:()=>{e.value||(e.value=X("http://localhost:3000"),e.value.on("connect",()=>{var a;i.value="Connected",w.notifyShow("Connected to socket!"),(a=e.value)==null||a.emit("onSocketRegister",localStorage.getItem("userid"))}),e.value.on("disconnect",()=>{i.value="Disconnected",w.notifyShow("Disconnected from socket!"),console.log("Socket disconnected!")}),e.value.on("message",a=>{console.log("Message from server:",a)}),e.value.on("onRegistered",a=>{w.notifyShow(a.message)}))},disconnectSocket:()=>{var a;(a=e.value)==null||a.disconnect,i.value="Disconnected",w.notifyShow("Disconnected from socket!"),console.log("Socket disconnected!")}}}),J={key:1,href:"javascript:void(0)",class:"navitem-item","active-class":"navitem-active"},d=y({__name:"NavItem",props:{icon:{type:String,required:!0},menuName:{type:String,required:!0},redirect:{type:String,required:!0},textTheme:{type:String,default:"mtext-light"},isNegative:{type:Boolean,required:!1}},setup(e){const i=p();return(n,c)=>{const a=k("font-awesome-icon"),u=k("router-link");return e.redirect?(l(),C(u,{key:0,to:e.redirect,class:"navitem-item","active-class":"navitem-active"},{default:$(()=>[o("div",{style:v({background:`linear-gradient(-310deg,${t(i).accentColor},${t(i).accentColorSecondary})`})},[s(a,{icon:e.icon},null,8,["icon"])],4),o("span",{class:r(e.isNegative?"mtext-danger":e.textTheme)},x(e.menuName),3)]),_:1},8,["to"])):(l(),m("a",J,[o("div",{style:v({background:`linear-gradient(-310deg,${t(i).accentColor},${t(i).accentColorSecondary})`})},[s(a,{icon:e.icon},null,8,["icon"])],4),o("span",{class:r(e.isNegative?"mtext-danger":e.textTheme)},x(e.menuName),3)]))}}}),Q=y({__name:"DashSidebarMenu",props:{textTheme:{type:String,required:!0}},emits:["clickSignOut"],setup(e,{emit:i}){const n=p();Z();const c=()=>{n.notifyConfirm("Keluar","Anda yakin ingin keluar?","Ya","Batal",async()=>{try{localStorage.setItem("authToken",""),localStorage.setItem("userid",""),n.notifyAlertSuccess("Berhasil","Anda telah keluar","Oke!",()=>{window.location.href="/login"})}catch{n.notifyAlertSuccess("Gagal","Anda telah keluar","Oke!",()=>{})}},()=>{})};return(a,u)=>(l(),m(A,null,[s(d,{"text-theme":`${e.textTheme}`,icon:"home",redirect:"/dashboard","menu-name":"Dashboard"},null,8,["text-theme"]),o("div",{style:v({color:t(n).accentColor}),class:"aside-menu-divider"},"FOL",4),s(d,{"text-theme":`${e.textTheme}`,icon:"chart-line",redirect:"/fol/monitoring","menu-name":"Monitoring FOL"},null,8,["text-theme"]),s(d,{"text-theme":`${e.textTheme}`,icon:"chart-line",redirect:"/fol/linechart","menu-name":"Line Chart"},null,8,["text-theme"]),s(d,{"text-theme":`${e.textTheme}`,icon:"tachometer-alt",redirect:"/fol/gauge","menu-name":"Gauges"},null,8,["text-theme"]),s(d,{"text-theme":`${e.textTheme}`,icon:"clock",redirect:"/fol/histdata_splitted","menu-name":"History Data - Splitted"},null,8,["text-theme"]),s(d,{"text-theme":`${e.textTheme}`,icon:"play",redirect:"/fol/playback","menu-name":"Playback"},null,8,["text-theme"]),o("div",{style:v({color:t(n).accentColor}),class:"aside-menu-divider"},"Keluar",4),s(d,{"text-theme":`${e.textTheme}`,icon:"sign-out",redirect:"","is-negative":!0,"menu-name":"Sign-out",onClick:c},null,8,["text-theme"])],64))}}),ee="/assets/skk-a155yGtW.webp",te="/assets/iog-Xuip5NNy.webp",ne="/assets/bumn-CTkNxYDZ.webp",oe={style:{display:"flex","flex-flow":"row-nowrap","justify-content":"flex-start",gap:"1rem","align-items":"center"}},ae=["src"],se={class:"nav-gr"},ie={class:"nav-crumb"},ce={class:"nav-gr"},le={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-start",gap:"0.8rem","margin-right":"0.8rem"}},re=["src"],me=["src"],ue=["src"],de={class:"aside-header"},he={class:"aside-menu"},ve=y({__name:"DashNavLight",props:{theme:{type:String}},setup(e){const i=G(),n=p(),c=h(!1),a=h(!1),u=h(!1);h(!1);const b=()=>{c.value=window.innerWidth<768};V(()=>{b(),window.addEventListener("resize",b)}),P(()=>{window.removeEventListener("resize",b)});const O=g=>{console.log(g)},M=()=>{u.value=!u.value},N=()=>{a.value=!a.value},D=h(0),q=()=>{D.value=window.scrollY||window.pageYOffset};V(()=>{window.addEventListener("scroll",q)});const L=()=>{const g=document.getElementById("mainview");g&&g.scrollIntoView({behavior:"smooth",block:"start"})},j=()=>{n.asideToggle()};return K(()=>c.value,()=>{c.value&&n.notifyAlertError("Peringatan","Tidak sarankan dijalankan pada perangkat Mobile karena dapat mempengaruhi performa","Tutup",()=>{})}),(g,_)=>{const S=k("font-awesome-icon"),E=k("router-link");return l(),m(A,null,[o("nav",{class:r([`${t(n).asideVisible?"nav-main":"nav-main-full"}`,t(n).mTheme,c.value?"topnav-mobile":""])},[o("div",oe,[c.value?f("",!0):(l(),m("button",{key:0,onClick:j,class:r([[`${t(n).textTheme}`],"side-hide"])},[s(S,{icon:t(n).asideVisible?"arrow-left":"bars"},null,8,["icon"])],2)),t(n).asideVisible?f("",!0):(l(),m("img",{key:1,src:t(F),class:"prt-1"},null,8,ae))]),o("div",se,[o("div",ie,[o("div",{class:r(t(n).textTheme)},[s(E,{to:"/dashboard",style:v({color:t(n).accentColor}),class:"nav-crumb-link"},{default:$(()=>[o("span",{style:v({background:t(n).gradientValue,WebkitTextFillColor:"transparent",WebkitBackgroundClip:"text"})},x(t(B).appName),5)]),_:1},8,["style"]),U(" ··· "+x(t(i).name),1)],2),o("div",{class:r(t(n).textTheme)},x(t(i).name),3)])]),o("div",ce,[c.value?(l(),C(T,{key:0,onClick:N,icon:"bars","text-theme":t(n).textTheme},null,8,["text-theme"])):f("",!0),o("div",le,[o("img",{src:t(ee),class:"prt"},null,8,re),o("img",{src:t(te),class:"prt"},null,8,me),o("img",{src:t(ne),class:"prt"},null,8,ue)]),s(R,{style:{"margin-right":"5px"}}),s(T,{onClick:M,icon:"gear","text-theme":t(n).textTheme},null,8,["text-theme"]),s(T,{icon:"sign-out","text-theme":t(n).textTheme},null,8,["text-theme"])])],2),t(n).asideVisible?(l(),m("aside",{key:0,class:r(["aside-main",t(n).mTheme,c.value?"sidenav-mobile":"",a.value?"sidenav-show":""])},[a.value?(l(),m("button",{key:0,onClick:N,class:r([t(n).textTheme,"navmob-dismiss"]),type:"button"},[s(S,{icon:"arrow-left"})],2)):f("",!0),o("div",de,[s(z,{"site-name":t(B).appName},null,8,["site-name"])]),_[1]||(_[1]=o("div",{class:"separator"},null,-1)),o("div",he,[s(Q,{onClickSignOut:O,"text-theme":t(n).textTheme},null,8,["text-theme"])])],2)):f("",!0),s(W,{visible:u.value,"onUpdate:visible":_[0]||(_[0]=I=>u.value=I)},null,8,["visible"]),o("div",{id:"mainview",class:r([`${t(n).asideVisible?"main-wrapper":"main-wrapper-full"}`,c.value?"main-wrapper-mobile":""])},[H(g.$slots,"default")],2),D.value?(l(),m("button",{key:1,onClick:L,style:v({backgroundColor:t(n).accentColor}),type:"button",class:"scrolltotop"},[s(S,{icon:"arrow-up"})],4)):f("",!0)],64)}}}),ye=y({__name:"DashDefault",setup(e){const i=p();return(n,c)=>{const a=k("RouterView");return l(),C(ve,{theme:t(i).mTheme},{default:$(()=>[s(a)]),_:1},8,["theme"])}}});export{ye as default};
