import{d as v,e as l,j as _,k as b,p as f,r as h,o as n,c as r,g as o,u as g,h as w,t as k,a as B,q as S}from"./index-BzVVXQ9R.js";import{h as T}from"./moment-C5S46NFB.js";import{a as x}from"./axios-BimPEqV4.js";const M="/assets/batt-OzIihCY1.png",Y={class:"battery-container"},D={key:0,class:"batimg"},I=["src"],N={class:"bt-parent"},V={class:"bt-perc"},C={key:1,class:"batt-failed"},H=v({__name:"BatteryView",props:{idSpot:{type:[Number],required:!0}},setup(d){const p=d,t=l({}),i=l(!1);_(async()=>{await c().then(e=>{t.value=e,m()})});const m=()=>{if(t.value!=null&&t.value.timestamp!=null){const e=T().format("YYYY-MM-DDTHH:MM:SS").split("T")[0],a=t.value.timestamp.split("T")[0];e==a&&(i.value=!0)}},u=setInterval(async()=>{await c().then(e=>{t.value=e})},6e4);b(()=>{clearInterval(u)});const c=async()=>new Promise(async(e,a)=>{try{const s={idspot:p.idSpot},y=await x.post(f.baseEnd+"api/Battery/getbatterylevel",s);e(y.data)}catch(s){a(s)}});return(e,a)=>{const s=h("font-awesome-icon");return n(),r("div",Y,[t.value&&i.value?(n(),r("div",D,[o("img",{src:g(M),alt:"battery"},null,8,I),o("div",N,[o("span",{style:w({width:`${t.value.batt}%`}),class:"bt-child"},null,4),o("div",V,k(t.value.batt)+"%",1)])])):(n(),r("span",C,[o("b",null,[B(s,{icon:"exclamation-triangle"}),a[0]||(a[0]=S(" Battery reading failed"))])]))])}}});export{H as _};
