import{_ as oe}from"./InputView.vue_vue_type_style_index_0_lang-CoFzTMND.js";import{_ as se}from"./MainWrapperView.vue_vue_type_style_index_0_lang-BYsi6QkY.js";import{u as ne}from"./theme-Cq7fnomA.js";import{i as z}from"./index-CehbAW_K.js";import{_ as re,u as ie}from"./http-tIPYkjHV.js";import{_ as ce}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-DqdUcRsS.js";import{_ as U}from"./CheckboxView.vue_vue_type_style_index_0_computed_true_lang-B1_LeTAr.js";import{d as ue,e as h,l as H,A as de,j as pe,r as me,o as c,c as u,a as g,w as N,g as a,n as b,u as s,h as m,F as v,y as C,m as fe,t as k,q as O}from"./index-CHApRfAO.js";import"./axios-BimPEqV4.js";const he={class:"col-md-3"},ye={class:"col-md-12"},ve={class:"table-responsive"},xe={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end",gap:"1rem"}},ge={style:{display:"flex","flex-flow":"row wrap","justify-content":"flex-end","align-items":"center",gap:"0.5rem","margin-bottom":"1rem",border:"1px solid #ccc",width:"fit-content",padding:"10px","border-radius":"100px"}},be={style:{display:"flex","flex-flow":"row nowrap","align-items":"center"}},_e={style:{display:"flex","flex-flow":"row nowrap","align-items":"center"}},Se={class:"tbl"},we={class:"theads"},Te={style:{display:"flex","flex-flow":"column"}},Ce={key:1,style:{color:"#ccc"}},ke={style:{display:"flex","flex-flow":"row nowrap"}},Ae={style:{width:"50%",display:"flex","flex-flow":"column"}},$e={style:{width:"50%",display:"flex","flex-flow":"column"}},Me={class:"table-responsive"},Pe={class:"tbl2"},Ee=ue({__name:"HistoryFol",setup(De){const G=h(null),F=h(null),w=Object.entries({1:{spot:"SPOT MGS BJG"},2:{spot:"BOOSTER"},3:{spot:"MGS KAS"},4:{spot:"MOS TPN"},5:{spot:"GS 02 SGL"},6:{spot:"GS 02 SGL (02)"},7:{spot:"GS 02 SGL (03)"},8:{spot:"GS 01 KTT"},9:{spot:"MGS TPN"},10:{spot:"0 KM SP BETUNG"},11:{spot:"5.3 KM SIMP. PASAR GAJAH (5.3)"},12:{spot:"9.5 KM SANDTRAP II (4.2)"},13:{spot:"13.8 KM MGS BJG (4.3)"},14:{spot:"MINIATUR (CIP)"}}).map(([o,{spot:t}])=>({id:Number(o),spot:t})),r=ne(),$=h(60),A=h(),T=h([]),V=h(!1);r.asideToggle(!1);const J=()=>{const o=new Date,t=o.getFullYear(),n=String(o.getMonth()+1).padStart(2,"0"),e=String(o.getDate()).padStart(2,"0"),l=`${t}-${n}-${e}`;A.value=l};H(()=>[A.value,$.value],async()=>{T.value=[],d.value=[],_.value=null,await R().then(o=>{T.value=o}).catch(o=>{})});const R=async()=>new Promise(async(o,t)=>{try{const n={datefilter:A.value,timeFilter:$.value},e=await ie().httpPost("api/History/gethistdata",n);o(e)}catch(n){t(n)}}),j=h({});function W(o){const t={};return o.forEach(n=>{n.data.forEach(e=>{const{idSpot:l,avgPsiValues:i}=e;t[l]?(i>t[l].maxValue&&(t[l].maxValue=i),i<t[l].minValue&&(t[l].minValue=i)):t[l]={maxValue:i,minValue:i}})}),j.value=t,j.value}const q=de(()=>W(T.value));function Y(o,t){const n=q.value;if(!n[t])return"";const e=o.data.find(l=>l.idSpot===t);if(e){if(e.avgPsiValues===n[t].maxValue)return"highest-value";if(e.avgPsiValues===n[t].minValue)return"lowest-value"}return""}const d=h({});let L=null;const _=h(null);H(()=>d.value,()=>{L=Object.keys(d.value)});const I=(o,t,n)=>{const e=t.timeRange,l=t.type,i=t.rangeData;o?(d.value[e+"."+l]={timerange:e,type:l,checkbox:n,data:i},l==="normal"&&(_.value=e+"."+l)):(delete d.value[e+"."+l],l==="normal"&&_.value===e+"."+l&&(_.value=null)),d.value=Q(d.value),M()},Q=o=>{const t=Object.entries(o);return t.sort((e,l)=>e[1].type==="normal"&&l[1].type!=="normal"?-1:e[1].type!=="normal"&&l[1].type==="normal"?1:0),Object.fromEntries(t)},X=o=>o.type==="normal"?_.value!==null&&_.value!==o.timeRange+"."+o.type:!1,M=()=>{Object.keys(d.value).length>0?(V.value=!0,setTimeout(()=>{te()},500)):V.value=!1},Z=async()=>{T.value=[],E(),M(),await R().then(o=>{T.value=o}).catch(o=>{})},ee=()=>{E(),M()},E=()=>{Object.keys(d.value).forEach(o=>{const t=d.value[o].checkbox;t.checked=!1}),_.value=null,d.value={},M()},P=h(),D=h(),te=()=>{if(Object.keys(d.value).length>0){const o=z(G.value),t=z(F.value);P.value=o,D.value=t,le()}else P.value=null,D.value=null},ae=async(o,t)=>{const n=o.map((f,x)=>{const S=f.map(B=>Number(B)||0);return x==0?(console.log(S),{name:"Normal",type:"line",data:S,xAxisIndex:0,yAxisIndex:0}):(console.log(S),{name:"Drop "+x,type:"line",data:S,xAxisIndex:0,yAxisIndex:0})}),e=await Promise.all(n);e.sort((f,x)=>f.name==="Normal"?-1:x.name==="Normal"?1:0);const l={notMerge:!0,lazyUpdate:!0,tooltip:{trigger:"item",axisPointer:{type:"cross"}},grid:{left:"10%",right:"10%",bottom:"10%",containLabel:!0},legend:{data:e.map(f=>f.name)},xAxis:{type:"category",data:["MGS BJG","BOOSTER"],nameLocation:"start",boundaryGap:!1,axisTick:{alignWithLabel:!0}},yAxis:{name:"Pressure (PSI)",nameTextStyle:{verticalAlign:"middle"},axisTick:{show:!0,inside:!0},type:"value",axisLine:{show:!0}},series:e};P.value.setOption(l);const i=t.map((f,x)=>{const S=f.map(B=>Number(B)||0);return x==0?{name:"Normal",type:"line",data:S}:{name:"Drop "+x,type:"line",data:S}}),p=await Promise.all(i);p.sort((f,x)=>f.name==="Normal"?-1:x.name==="Normal"?1:0);const y={notMerge:!0,lazyUpdate:!0,tooltip:{trigger:"item",axisPointer:{type:"cross"}},grid:{left:"10%",right:"10%",bottom:"10%",containLabel:!0},legend:{data:p.map(f=>f.name)},xAxis:{type:"category",data:["MGS KAS","MOS TPN"],nameLocation:"start",boundaryGap:!1,axisTick:{alignWithLabel:!0}},yAxis:{name:"Pressure (PSI)",nameTextStyle:{verticalAlign:"middle"},axisTick:{show:!0,inside:!0},type:"value",axisLine:{show:!0}},series:p};D.value.setOption(y)},le=()=>{if(P.value&&D.value){let o=[],t=[];Object.keys(d.value).forEach(n=>{const e=d.value[n].data;let l=[],i=[];for(let p=0;p<e.length;p++){const y=e[p].idSpot;y==1&&l.push(parseFloat(e[p].avgPsiValues).toFixed(2)),y==2&&l.push(parseFloat(e[p].avgPsiValues).toFixed(2)),y==3&&i.push(parseFloat(e[p].avgPsiValues).toFixed(2)),y==4&&i.push(parseFloat(e[p].avgPsiValues).toFixed(2))}o.push(l),t.push(i)}),ae(o,t)}};pe(()=>{J()});const K=(o,t)=>{const e=d.value[o].data;for(let l=0;l<e.length;l++)if(e[l].idSpot==t)return e[l].avgPsiValues.toFixed(2)};return(o,t)=>{const n=me("font-awesome-icon");return c(),u(v,null,[g(se,{"context-title":"FOL | History Data"},{default:N(()=>[a("div",he,[g(re,{"in-label":"Time Range","model-value":$.value,"onUpdate:modelValue":t[0]||(t[0]=e=>$.value=e)},{default:N(()=>t[2]||(t[2]=[a("option",{value:"1"},"1 Menit",-1),a("option",{value:"2"},"2 Menit",-1),a("option",{value:"3"},"3 Menit",-1),a("option",{value:"4"},"4 Menit",-1),a("option",{value:"5"},"5 Menit",-1),a("option",{value:"15"},"15 Menit",-1),a("option",{value:"30"},"30 Menit",-1),a("option",{value:"60"},"60 Menit",-1)])),_:1},8,["model-value"]),g(oe,{"in-type":"date","in-label":"Date Filter","model-value":A.value,"onUpdate:modelValue":t[1]||(t[1]=e=>A.value=e)},null,8,["model-value"])]),a("div",ye,[a("div",ve,[a("div",xe,[a("div",ge,[a("div",be,[t[3]||(t[3]=a("div",{style:{"background-color":"green",width:"20px",height:"20px","border-radius":"100px"}},null,-1)),a("span",{class:b([`${s(r).textTheme}`]),style:{"margin-left":"0.2rem","font-size":"12px","font-weight":"bold"}},"Nilai Tertinggi",2)]),a("div",_e,[t[4]||(t[4]=a("div",{style:{"background-color":"red",width:"20px",height:"20px","border-radius":"100px"}},null,-1)),a("span",{class:b([`${s(r).textTheme}`]),style:{"margin-left":"0.2rem","font-size":"12px","font-weight":"bold"}},"Nilai Terendah",2)])]),g(ce,{onClick:Z,"bt-disabled":!1,"bt-type":"button","bt-size":"small",style:{height:"42px",width:"42px","border-radius":"100px",display:"flex","flex-flow":"row nowrap","align-items":"center"}},{default:N(()=>[g(n,{icon:"refresh"})]),_:1})]),a("table",Se,[a("thead",we,[a("tr",{style:{padding:"20px"},class:b([`${s(r).textTheme}`])},[a("th",{style:m({border:`1px solid ${s(r).accentColor}`})},[g(n,{icon:"check-double"})],4),a("th",{style:m({border:`1px solid ${s(r).accentColor}`})},"Interval",4),(c(!0),u(v,null,C(s(w),(e,l)=>(c(),u("th",{style:m({border:`1px solid ${s(r).accentColor}`}),key:l},k(s(w)[l].spot),5))),128))],2)]),a("tbody",null,[(c(!0),u(v,null,C(T.value,(e,l)=>(c(),u("tr",{key:l},[a("td",{style:m({border:`1px solid ${s(r).accentColor}`}),class:b([`${s(r).textTheme}`])},[a("div",Te,[g(U,{cb_disabled:X({timeRange:e.timeRange,type:"normal"}),cb_data:{timeRange:e.timeRange,type:"normal",rangeData:e.data},onOnCheckBoxChange:I,cb_label:"Normal"},null,8,["cb_disabled","cb_data"]),g(U,{cb_disabled:!1,cb_checked:!1,cb_data:{timeRange:e.timeRange,type:"drop",rangeData:e.data},onOnCheckBoxChange:I,cb_label:"Drop"},null,8,["cb_data"])])],6),a("td",{style:m({border:`1px solid ${s(r).accentColor}`}),class:b([`${s(r).textTheme}`])},k(e.timeRange),7),(c(!0),u(v,null,C(s(w),(i,p)=>(c(),u("td",{style:m({border:`1px solid ${s(r).accentColor}`,position:"relative"}),key:p,class:b([`${Y(e,i.id)}`,`${s(r).textTheme}`])},[e.data.find(y=>y.idSpot===i.id)?(c(),u(v,{key:0},[O(k(e.data.find(y=>y.idSpot===i.id).avgPsiValues.toFixed(2)),1)],64)):(c(),u("span",Ce,"N/A"))],6))),128))]))),128))])])])])]),_:1}),V.value?(c(),u("div",{key:0,class:b(["chart-container",[`${s(r).mTheme}`]])},[a("button",{onClick:ee,class:"chc-dismiss",style:m({color:`${s(r).accentColor}`})},[g(n,{icon:"close"})],4),a("div",ke,[a("div",Ae,[a("h4",{style:m([{color:`${s(r).accentColor}`},{"text-align":"center","font-weight":"bold"}])}," MGS BJG - BOOSTER ",4),a("div",{ref_key:"eChartsA",ref:G,style:{width:"100%",height:"300px",position:"relative"}},null,512)]),a("div",$e,[a("h4",{style:m([{color:`${s(r).accentColor}`},{"text-align":"center","font-weight":"bold"}])}," MGS KAS - MOS TPN ",4),a("div",{ref_key:"eChartsB",ref:F,style:{width:"100%",height:"300px",position:"relative"}},null,512)])]),a("div",Me,[a("table",Pe,[a("thead",null,[a("tr",{style:{padding:"5px"},class:b([`${s(r).textTheme}`])},[a("th",{style:m({border:`1px solid ${s(r).accentColor}`})},null,4),(c(!0),u(v,null,C(s(w),(e,l)=>(c(),u("th",{style:m({border:`1px solid ${s(r).accentColor}`}),key:l},k(s(w)[l].spot),5))),128))],2)]),a("tbody",null,[(c(!0),u(v,null,C(s(L),(e,l)=>(c(),u("tr",{key:l},[a("td",{style:m({border:`1px solid ${s(r).accentColor}`,position:"relative",textTransform:"uppercase",fontWeight:"bold"})},k(d.value[e].timerange+`
`+d.value[e].type),5),(c(!0),u(v,null,C(s(w),(i,p)=>(c(),u("td",{style:m({border:`1px solid ${s(r).accentColor}`}),key:p},[K(e,i.id)?(c(),u(v,{key:0},[O(k(K(e,i.id)),1)],64)):(c(),u(v,{key:1},[O("0.00")],64))],4))),128))]))),128))])])])],2)):fe("",!0)],64)}}});export{Ee as default};
