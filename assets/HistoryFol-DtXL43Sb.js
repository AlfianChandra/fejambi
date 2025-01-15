import{_ as oe}from"./InputView.vue_vue_type_style_index_0_lang-1hC75LMg.js";import{_ as se}from"./MainWrapperView.vue_vue_type_style_index_0_lang-BJ0qikSj.js";import{u as ne}from"./theme-CKAttjlI.js";import{i as z}from"./index-CehbAW_K.js";import{_ as re}from"./SelectView.vue_vue_type_style_index_0_lang-zJHKqYe8.js";import{_ as ie}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-DfbZXUMX.js";import{a as ce}from"./axios-BimPEqV4.js";import{d as de,e as h,l as U,C as ue,j as pe,r as me,o as c,c as d,a as g,w as N,g as a,n as b,u as s,h as m,F as v,z as C,m as fe,p as he,t as k,q as O}from"./index-BzVVXQ9R.js";import{_ as J}from"./CheckboxView.vue_vue_type_style_index_0_computed_true_lang-C7Yj1eLQ.js";const ye={class:"col-md-3"},ve={class:"col-md-12"},xe={class:"table-responsive"},ge={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end",gap:"1rem"}},be={style:{display:"flex","flex-flow":"row wrap","justify-content":"flex-end","align-items":"center",gap:"0.5rem","margin-bottom":"1rem",border:"1px solid #ccc",width:"fit-content",padding:"10px","border-radius":"100px"}},_e={style:{display:"flex","flex-flow":"row nowrap","align-items":"center"}},Se={style:{display:"flex","flex-flow":"row nowrap","align-items":"center"}},we={class:"tbl"},Te={class:"theads"},Ce={style:{display:"flex","flex-flow":"column"}},ke={key:1,style:{color:"#ccc"}},Ae={style:{display:"flex","flex-flow":"row nowrap"}},$e={style:{width:"50%",display:"flex","flex-flow":"column"}},Me={style:{width:"50%",display:"flex","flex-flow":"column"}},Pe={class:"table-responsive"},De={class:"tbl2"},Ke=de({__name:"HistoryFol",setup(Ve){const G=h(null),F=h(null),w=Object.entries({1:{spot:"SPOT MGS BJG"},2:{spot:"BOOSTER"},3:{spot:"MGS KAS"},4:{spot:"MOS TPN"},5:{spot:"GS 02 SGL"},6:{spot:"GS 02 SGL (02)"},7:{spot:"GS 02 SGL (03)"},8:{spot:"GS 01 KTT"},9:{spot:"MGS TPN"},10:{spot:"0 KM SP BETUNG"},11:{spot:"5.3 KM SIMP. PASAR GAJAH (5.3)"},12:{spot:"9.5 KM SANDTRAP II (4.2)"},13:{spot:"13.8 KM MGS BJG (4.3)"},14:{spot:"MINIATUR (CIP)"}}).map(([o,{spot:t}])=>({id:Number(o),spot:t})),r=ne(),$=h(60),A=h(),T=h([]),V=h(!1);r.asideToggle(!1);const H=()=>{const o=new Date,t=o.getFullYear(),n=String(o.getMonth()+1).padStart(2,"0"),e=String(o.getDate()).padStart(2,"0"),l=`${t}-${n}-${e}`;A.value=l};U(()=>[A.value,$.value],async()=>{T.value=[],u.value=[],_.value=null,await R().then(o=>{T.value=o}).catch(o=>{})});const R=async()=>new Promise(async(o,t)=>{try{const n={datefilter:A.value,timeFilter:$.value},e=await ce.post(he.baseEnd+"api/History/gethistdata",n);o(e.data)}catch(n){t(n)}}),j=h({});function W(o){const t={};return o.forEach(n=>{n.data.forEach(e=>{const{idSpot:l,avgPsiValues:i}=e;t[l]?(i>t[l].maxValue&&(t[l].maxValue=i),i<t[l].minValue&&(t[l].minValue=i)):t[l]={maxValue:i,minValue:i}})}),j.value=t,j.value}const q=ue(()=>W(T.value));function Y(o,t){const n=q.value;if(!n[t])return"";const e=o.data.find(l=>l.idSpot===t);if(e){if(e.avgPsiValues===n[t].maxValue)return"highest-value";if(e.avgPsiValues===n[t].minValue)return"lowest-value"}return""}const u=h({});let L=null;const _=h(null);U(()=>u.value,()=>{L=Object.keys(u.value)});const I=(o,t,n)=>{const e=t.timeRange,l=t.type,i=t.rangeData;o?(u.value[e+"."+l]={timerange:e,type:l,checkbox:n,data:i},l==="normal"&&(_.value=e+"."+l)):(delete u.value[e+"."+l],l==="normal"&&_.value===e+"."+l&&(_.value=null)),u.value=Q(u.value),M()},Q=o=>{const t=Object.entries(o);return t.sort((e,l)=>e[1].type==="normal"&&l[1].type!=="normal"?-1:e[1].type!=="normal"&&l[1].type==="normal"?1:0),Object.fromEntries(t)},X=o=>o.type==="normal"?_.value!==null&&_.value!==o.timeRange+"."+o.type:!1,M=()=>{Object.keys(u.value).length>0?(V.value=!0,setTimeout(()=>{te()},500)):V.value=!1},Z=async()=>{T.value=[],E(),M(),await R().then(o=>{T.value=o}).catch(o=>{})},ee=()=>{E(),M()},E=()=>{Object.keys(u.value).forEach(o=>{const t=u.value[o].checkbox;t.checked=!1}),_.value=null,u.value={},M()},P=h(),D=h(),te=()=>{if(Object.keys(u.value).length>0){const o=z(G.value),t=z(F.value);P.value=o,D.value=t,le()}else P.value=null,D.value=null},ae=async(o,t)=>{const n=o.map((f,x)=>{const S=f.map(B=>Number(B)||0);return x==0?(console.log(S),{name:"Normal",type:"line",data:S,xAxisIndex:0,yAxisIndex:0}):(console.log(S),{name:"Drop "+x,type:"line",data:S,xAxisIndex:0,yAxisIndex:0})}),e=await Promise.all(n);e.sort((f,x)=>f.name==="Normal"?-1:x.name==="Normal"?1:0);const l={notMerge:!0,lazyUpdate:!0,tooltip:{trigger:"item",axisPointer:{type:"cross"}},grid:{left:"10%",right:"10%",bottom:"10%",containLabel:!0},legend:{data:e.map(f=>f.name)},xAxis:{type:"category",data:["MGS BJG","BOOSTER"],nameLocation:"start",boundaryGap:!1,axisTick:{alignWithLabel:!0}},yAxis:{name:"Pressure (PSI)",nameTextStyle:{verticalAlign:"middle"},axisTick:{show:!0,inside:!0},type:"value",axisLine:{show:!0}},series:e};P.value.setOption(l);const i=t.map((f,x)=>{const S=f.map(B=>Number(B)||0);return x==0?{name:"Normal",type:"line",data:S}:{name:"Drop "+x,type:"line",data:S}}),p=await Promise.all(i);p.sort((f,x)=>f.name==="Normal"?-1:x.name==="Normal"?1:0);const y={notMerge:!0,lazyUpdate:!0,tooltip:{trigger:"item",axisPointer:{type:"cross"}},grid:{left:"10%",right:"10%",bottom:"10%",containLabel:!0},legend:{data:p.map(f=>f.name)},xAxis:{type:"category",data:["MGS KAS","MOS TPN"],nameLocation:"start",boundaryGap:!1,axisTick:{alignWithLabel:!0}},yAxis:{name:"Pressure (PSI)",nameTextStyle:{verticalAlign:"middle"},axisTick:{show:!0,inside:!0},type:"value",axisLine:{show:!0}},series:p};D.value.setOption(y)},le=()=>{if(P.value&&D.value){let o=[],t=[];Object.keys(u.value).forEach(n=>{const e=u.value[n].data;let l=[],i=[];for(let p=0;p<e.length;p++){const y=e[p].idSpot;y==1&&l.push(parseFloat(e[p].avgPsiValues).toFixed(2)),y==2&&l.push(parseFloat(e[p].avgPsiValues).toFixed(2)),y==3&&i.push(parseFloat(e[p].avgPsiValues).toFixed(2)),y==4&&i.push(parseFloat(e[p].avgPsiValues).toFixed(2))}o.push(l),t.push(i)}),ae(o,t)}};pe(()=>{H()});const K=(o,t)=>{const e=u.value[o].data;for(let l=0;l<e.length;l++)if(e[l].idSpot==t)return e[l].avgPsiValues.toFixed(2)};return(o,t)=>{const n=me("font-awesome-icon");return c(),d(v,null,[g(se,{"context-title":"FOL | History Data"},{default:N(()=>[a("div",ye,[g(re,{"in-label":"Time Range","model-value":$.value,"onUpdate:modelValue":t[0]||(t[0]=e=>$.value=e)},{default:N(()=>t[2]||(t[2]=[a("option",{value:"1"},"1 Menit",-1),a("option",{value:"2"},"2 Menit",-1),a("option",{value:"3"},"3 Menit",-1),a("option",{value:"4"},"4 Menit",-1),a("option",{value:"5"},"5 Menit",-1),a("option",{value:"15"},"15 Menit",-1),a("option",{value:"30"},"30 Menit",-1),a("option",{value:"60"},"60 Menit",-1)])),_:1},8,["model-value"]),g(oe,{"in-type":"date","in-label":"Date Filter","model-value":A.value,"onUpdate:modelValue":t[1]||(t[1]=e=>A.value=e)},null,8,["model-value"])]),a("div",ve,[a("div",xe,[a("div",ge,[a("div",be,[a("div",_e,[t[3]||(t[3]=a("div",{style:{"background-color":"green",width:"20px",height:"20px","border-radius":"100px"}},null,-1)),a("span",{class:b([`${s(r).textTheme}`]),style:{"margin-left":"0.2rem","font-size":"12px","font-weight":"bold"}},"Nilai Tertinggi",2)]),a("div",Se,[t[4]||(t[4]=a("div",{style:{"background-color":"red",width:"20px",height:"20px","border-radius":"100px"}},null,-1)),a("span",{class:b([`${s(r).textTheme}`]),style:{"margin-left":"0.2rem","font-size":"12px","font-weight":"bold"}},"Nilai Terendah",2)])]),g(ie,{onClick:Z,"bt-disabled":!1,"bt-type":"button","bt-size":"small",style:{height:"42px",width:"42px","border-radius":"100px",display:"flex","flex-flow":"row nowrap","align-items":"center"}},{default:N(()=>[g(n,{icon:"refresh"})]),_:1})]),a("table",we,[a("thead",Te,[a("tr",{style:{padding:"20px"},class:b([`${s(r).textTheme}`])},[a("th",{style:m({border:`1px solid ${s(r).accentColor}`})},[g(n,{icon:"check-double"})],4),a("th",{style:m({border:`1px solid ${s(r).accentColor}`})},"Interval",4),(c(!0),d(v,null,C(s(w),(e,l)=>(c(),d("th",{style:m({border:`1px solid ${s(r).accentColor}`}),key:l},k(s(w)[l].spot),5))),128))],2)]),a("tbody",null,[(c(!0),d(v,null,C(T.value,(e,l)=>(c(),d("tr",{key:l},[a("td",{style:m({border:`1px solid ${s(r).accentColor}`}),class:b([`${s(r).textTheme}`])},[a("div",Ce,[g(J,{cb_disabled:X({timeRange:e.timeRange,type:"normal"}),cb_data:{timeRange:e.timeRange,type:"normal",rangeData:e.data},onOnCheckBoxChange:I,cb_label:"Normal"},null,8,["cb_disabled","cb_data"]),g(J,{cb_disabled:!1,cb_checked:!1,cb_data:{timeRange:e.timeRange,type:"drop",rangeData:e.data},onOnCheckBoxChange:I,cb_label:"Drop"},null,8,["cb_data"])])],6),a("td",{style:m({border:`1px solid ${s(r).accentColor}`}),class:b([`${s(r).textTheme}`])},k(e.timeRange),7),(c(!0),d(v,null,C(s(w),(i,p)=>(c(),d("td",{style:m({border:`1px solid ${s(r).accentColor}`,position:"relative"}),key:p,class:b([`${Y(e,i.id)}`,`${s(r).textTheme}`])},[e.data.find(y=>y.idSpot===i.id)?(c(),d(v,{key:0},[O(k(e.data.find(y=>y.idSpot===i.id).avgPsiValues.toFixed(2)),1)],64)):(c(),d("span",ke,"N/A"))],6))),128))]))),128))])])])])]),_:1}),V.value?(c(),d("div",{key:0,class:b(["chart-container",[`${s(r).mTheme}`]])},[a("button",{onClick:ee,class:"chc-dismiss",style:m({color:`${s(r).accentColor}`})},[g(n,{icon:"close"})],4),a("div",Ae,[a("div",$e,[a("h4",{style:m([{color:`${s(r).accentColor}`},{"text-align":"center","font-weight":"bold"}])}," MGS BJG - BOOSTER ",4),a("div",{ref_key:"eChartsA",ref:G,style:{width:"100%",height:"300px",position:"relative"}},null,512)]),a("div",Me,[a("h4",{style:m([{color:`${s(r).accentColor}`},{"text-align":"center","font-weight":"bold"}])}," MGS KAS - MOS TPN ",4),a("div",{ref_key:"eChartsB",ref:F,style:{width:"100%",height:"300px",position:"relative"}},null,512)])]),a("div",Pe,[a("table",De,[a("thead",null,[a("tr",{style:{padding:"5px"},class:b([`${s(r).textTheme}`])},[a("th",{style:m({border:`1px solid ${s(r).accentColor}`})},null,4),(c(!0),d(v,null,C(s(w),(e,l)=>(c(),d("th",{style:m({border:`1px solid ${s(r).accentColor}`}),key:l},k(s(w)[l].spot),5))),128))],2)]),a("tbody",null,[(c(!0),d(v,null,C(s(L),(e,l)=>(c(),d("tr",{key:l},[a("td",{style:m({border:`1px solid ${s(r).accentColor}`,position:"relative",textTransform:"uppercase",fontWeight:"bold"})},k(u.value[e].timerange+`
`+u.value[e].type),5),(c(!0),d(v,null,C(s(w),(i,p)=>(c(),d("td",{style:m({border:`1px solid ${s(r).accentColor}`}),key:p},[K(e,i.id)?(c(),d(v,{key:0},[O(k(K(e,i.id)),1)],64)):(c(),d(v,{key:1},[O("0.00")],64))],4))),128))]))),128))])])])],2)):fe("",!0)],64)}}});export{Ke as default};
