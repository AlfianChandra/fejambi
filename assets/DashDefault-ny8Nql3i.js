import{l as j,_ as z,B as G,a as I}from"./ThemeSetting.vue_vue_type_style_index_0_lang-4BzQ_TgG.js";import{u as b}from"./theme-CRTIywMi.js";import{d as y,r as p,o as l,c as m,a as o,n as c,b as S,w as C,e as a,f as v,u as e,t as x,F as A,g as P,h as k,i as V,j as R,k as W,l as f,m as B,p as T,q as H}from"./index-B5Igh5uo.js";import{u as U}from"./http-Cy4Dnr33.js";import{h as J}from"./moment-C5S46NFB.js";const O=y({__name:"TopNavAnchor",props:{icon:{type:String,required:!0},textTheme:{type:String}},setup(n){return(r,t)=>{const s=p("font-awesome-icon");return l(),m("a",{href:"javascript:void(0)",class:c([n.textTheme?n.textTheme:"text-light","topnav-item"])},[o(s,{icon:n.icon},null,8,["icon"])],2)}}}),K={key:1,href:"javascript:void(0)",class:"navitem-item","active-class":"navitem-active"},h=y({__name:"NavItem",props:{icon:{type:String,required:!0},menuName:{type:String,required:!0},redirect:{type:String,required:!0},textTheme:{type:String,default:"mtext-light"},isNegative:{type:Boolean,required:!1}},setup(n){const r=b();return(t,s)=>{const i=p("font-awesome-icon"),d=p("router-link");return n.redirect?(l(),S(d,{key:0,to:n.redirect,class:"navitem-item","active-class":"navitem-active"},{default:C(()=>[a("div",{style:v({background:`linear-gradient(-310deg,${e(r).accentColor},${e(r).accentColorSecondary})`})},[o(i,{icon:n.icon},null,8,["icon"])],4),a("span",{class:c(n.isNegative?"mtext-danger":n.textTheme)},x(n.menuName),3)]),_:1},8,["to"])):(l(),m("a",K,[a("div",{style:v({background:`linear-gradient(-310deg,${e(r).accentColor},${e(r).accentColorSecondary})`})},[o(i,{icon:n.icon},null,8,["icon"])],4),a("span",{class:c(n.isNegative?"mtext-danger":n.textTheme)},x(n.menuName),3)]))}}}),Q=y({__name:"DashSidebarMenu",props:{textTheme:{type:String,required:!0}},emits:["clickSignOut"],setup(n,{emit:r}){const t=b(),s=()=>{t.notifyConfirm("Logout","Anda yakin ingin keluar?","Ya","Batal",async()=>{try{await U().clientLogout().then(i=>{t.notifyAlertSuccess("Berhasil","Anda telah keluar","Oke!",()=>{window.location.href="/login"})}).catch(i=>{t.notifyAlertSuccess("Gagal",i,"Oke!",()=>{})})}catch(i){console.log(i),t.notifyAlertSuccess("Gagal",i,"Oke!",()=>{})}},()=>{})};return(i,d)=>(l(),m(A,null,[o(h,{"text-theme":`${n.textTheme}`,icon:"home",redirect:"/dashboard","menu-name":"Dashboard"},null,8,["text-theme"]),a("div",{style:v({color:e(t).accentColor}),class:"aside-menu-divider"},"FOL",4),o(h,{"text-theme":`${n.textTheme}`,icon:"chart-line",redirect:"/fol/monitoring","menu-name":"Monitoring FOL"},null,8,["text-theme"]),o(h,{"text-theme":`${n.textTheme}`,icon:"chart-line",redirect:"/fol/linechart","menu-name":"Line Chart"},null,8,["text-theme"]),o(h,{"text-theme":`${n.textTheme}`,icon:"tachometer-alt",redirect:"/fol/gauge","menu-name":"Gauges"},null,8,["text-theme"]),o(h,{"text-theme":`${n.textTheme}`,icon:"clock",redirect:"/fol/histdata_splitted","menu-name":"History Data - Splitted"},null,8,["text-theme"]),o(h,{"text-theme":`${n.textTheme}`,icon:"play",redirect:"/fol/playback","menu-name":"Playback"},null,8,["text-theme"]),a("div",{style:v({color:e(t).accentColor}),class:"aside-menu-divider"},"Keluar",4),o(h,{"text-theme":`${n.textTheme}`,icon:"sign-out",redirect:"","is-negative":!0,"menu-name":"Sign-out",onClick:s},null,8,["text-theme"])],64))}}),X={style:{display:"flex","flex-flow":"row-nowrap","justify-content":"flex-start",gap:"1rem","align-items":"center"}},Z=["src"],ee={class:"nav-gr"},te={class:"nav-crumb"},ne={class:"nav-gr"},ae={class:"aside-header"},oe={class:"aside-menu"},ie={class:"copyright"},se=y({__name:"DashNavLight",props:{theme:{type:String}},setup(n){const r=P(),t=b(),s=k(!1),i=k(!1),d=k(!1);k(!1);const _=()=>{s.value=window.innerWidth<768};V(()=>{_(),window.addEventListener("resize",_)}),R(()=>{window.removeEventListener("resize",_)});const L=g=>{console.log(g)},D=()=>{d.value=!d.value},$=()=>{i.value=!i.value},N=k(0),q=()=>{N.value=window.scrollY||window.pageYOffset};V(()=>{window.addEventListener("scroll",q)});const M=()=>{const g=document.getElementById("mainview");g&&g.scrollIntoView({behavior:"smooth",block:"start"})},Y=()=>{t.asideToggle()};return W(()=>s.value,()=>{s.value&&t.notifyAlertError("Peringatan","Tidak sarankan dijalankan pada perangkat Mobile karena dapat mempengaruhi performa","Tutup",()=>{})}),(g,u)=>{const w=p("font-awesome-icon"),E=p("router-link");return l(),m(A,null,[a("nav",{class:c([`${e(t).asideVisible?"nav-main":"nav-main-full"}`,e(t).mTheme,s.value?"topnav-mobile":""])},[a("div",X,[s.value?f("",!0):(l(),m("button",{key:0,onClick:Y,class:c([[`${e(t).textTheme}`],"side-hide"])},[o(w,{icon:e(t).asideVisible?"arrow-left":"bars"},null,8,["icon"])],2)),e(t).asideVisible?f("",!0):(l(),m("img",{key:1,src:e(j),class:"prt-1"},null,8,Z))]),a("div",ee,[a("div",te,[a("div",{class:c(e(t).textTheme)},[o(E,{to:"/dashboard",style:v({color:e(t).accentColor}),class:"nav-crumb-link"},{default:C(()=>[a("span",{style:v({background:e(t).gradientValue,WebkitTextFillColor:"transparent",WebkitBackgroundClip:"text"})},x(e(B).appName),5)]),_:1},8,["style"]),T(" ··· "+x(e(r).name),1)],2),a("div",{class:c(e(t).textTheme)},x(e(r).name),3)])]),a("div",ne,[s.value?(l(),S(O,{key:0,onClick:$,icon:"bars","text-theme":e(t).textTheme},null,8,["text-theme"])):f("",!0),o(z,{style:{"margin-right":"5px"}}),o(O,{onClick:D,icon:"gear","text-theme":e(t).textTheme},null,8,["text-theme"])])],2),e(t).asideVisible?(l(),m("aside",{key:0,class:c(["aside-main",e(t).mTheme,s.value?"sidenav-mobile":"",i.value?"sidenav-show":""])},[i.value?(l(),m("button",{key:0,onClick:$,class:c([e(t).textTheme,"navmob-dismiss"]),type:"button"},[o(w,{icon:"arrow-left"})],2)):f("",!0),a("div",ae,[o(G,{"site-name":e(B).appName},null,8,["site-name"])]),u[3]||(u[3]=a("div",{class:"separator"},null,-1)),a("div",oe,[o(Q,{onClickSignOut:L,"text-theme":e(t).textTheme},null,8,["text-theme"])]),a("span",ie,[a("i",null,[T("Copyright © "+x(e(J)().format("YYYY"))+" ",1),u[1]||(u[1]=a("b",null,"FOL Jambi Data Center",-1)),u[2]||(u[2]=T(" all rights reserved"))])])],2)):f("",!0),o(I,{visible:d.value,"onUpdate:visible":u[0]||(u[0]=F=>d.value=F)},null,8,["visible"]),a("div",{id:"mainview",class:c([`${e(t).asideVisible?"main-wrapper":"main-wrapper-full"}`,s.value?"main-wrapper-mobile":""])},[H(g.$slots,"default")],2),N.value?(l(),m("button",{key:1,onClick:M,style:v({backgroundColor:e(t).accentColor}),type:"button",class:"scrolltotop"},[o(w,{icon:"arrow-up"})],4)):f("",!0)],64)}}}),de=y({__name:"DashDefault",setup(n){const r=b();return(t,s)=>{const i=p("RouterView");return l(),S(se,{theme:e(r).mTheme},{default:C(()=>[o(i)]),_:1},8,["theme"])}}});export{de as default};
