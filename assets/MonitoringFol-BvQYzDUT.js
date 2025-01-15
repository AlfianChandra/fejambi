import{u as he}from"./theme-CKAttjlI.js";import{d as Ee,i as be}from"./index-CehbAW_K.js";import{_ as Xe}from"./MainWrapperView.vue_vue_type_style_index_0_lang-BJ0qikSj.js";import{_ as re}from"./InputView.vue_vue_type_style_index_0_lang-1hC75LMg.js";import{_ as pe}from"./SelectView.vue_vue_type_style_index_0_lang-zJHKqYe8.js";import{_ as W}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-DfbZXUMX.js";import{_ as xe}from"./ModalEditorView.vue_vue_type_style_index_0_lang-DOdUjCLc.js";import{d as ge,r as Se,o as b,c as I,g as t,h as ue,u as q,t as Z,a as s,q as le,w as x,e as o,l as F,j as ke,k as Ie,n as ie,m as ne,p as fe,_ as Te,y as Me,D as Ce,f as Ke,F as me,z as ve}from"./index-BzVVXQ9R.js";import{a as ye}from"./axios-BimPEqV4.js";import{t as je}from"./trunk-CuaAdnZJ.js";import{_ as Ye}from"./BatteryView.vue_vue_type_style_index_0_computed_true_lang-C6K1Zbml.js";import{h as Ze}from"./moment-C5S46NFB.js";const Qe={class:"itemlist-wrapper"},et={class:"itemlist-group"},Y=ge({__name:"ItemList",props:{itemName:{type:String,required:!0},itemDesc:{type:String,required:!0},itemId:{type:[String,Number],required:!0},itemSafemark:{type:Number,default:0,required:!0}},emits:["onItemSelect"],setup(oe,{emit:L}){const B=he(),C=L,h=oe,y=()=>{C("onItemSelect",{id:h.itemId,name:h.itemName,desc:h.itemDesc})};return(P,A)=>{const u=Se("font-awesome-icon");return b(),I("div",Qe,[t("div",et,[t("span",{style:ue({color:q(B).accentColor})},[t("b",null,Z(oe.itemName),1)],4),t("span",{style:ue({color:q(B).accentColor})},[s(u,{icon:"map-pin"}),le(" "+Z(oe.itemDesc),1)],4)]),s(W,{onClick:y,"bt-disabled":!1,"bt-size":"small"},{default:x(()=>[s(u,{icon:"plus"})]),_:1})])}}}),tt={class:"chart-containers"},at={class:"col-md-4"},lt={class:"loaderparent"},st=ge({__name:"LiveMonitorChart",props:{dateFilter:{type:String,required:!0},timeFilter:{type:Number,required:!0}},setup(oe){const L=oe,B=o(!0),C=o(null),h=o(null),y=he(),P=o(15),A=o([]),u=o(0),m=o("Building chart..."),R=o("Initializing..."),f=o(0),$=o({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:[],scale:!0,boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}}}),e=T=>new Date(T).toISOString(),U=async()=>new Promise((T,M)=>{ye.get(fe.baseEnd+"api/Spot/getspots").then(n=>{T(n.data)}).catch(n=>{console.error(n),M(n)})});F(()=>C.value,async()=>{H(),await U().then(T=>{A.value=T})});const H=()=>{if(u.value=5,C.value){const T=be(C.value);h.value=T,h.value.setOption($.value)}},E=async()=>new Promise(async(T,M)=>{try{const n=[],i=new Set,g=A.value.length;let d=0;R.value="Setting up...";for(let k=0;k<A.value.length;k++){R.value=`Applying filter for ${A.value[k].spotName}...`;const j={id:A.value[k].id+"",date:e(L.dateFilter),timespan:L.timeFilter+"",firstrequest:B.value},G=await ye.post(fe.baseEnd+"api/Data/getsingledata",j);for(let z=0;z<G.data.length;z++)setTimeout(()=>{f.value++},1);const p=G.data.map(z=>{const Q=z.timestamp.replace(".",":").split("T")[1],[ee,S]=Q.split(":"),c=`${ee}:${S}`;return i.add(c),c}),O=G.data.map(z=>parseFloat(z.psiValue));n.push({psies:O,categories:p}),d+=1;const D=d/g*90;u.value=Math.round(D)}const K=Array.from(i).sort((k,j)=>{const[G,p]=k.split(":").map(Number),[O,D]=j.split(":").map(Number);return G!==O?G-O:p-D}),J=n.map((k,j)=>{const G={};k.categories.forEach((O,D)=>{G[O]=k.psies[D]});const p=K.map(O=>G[O]!==void 0?parseFloat(G[O]):null);return{name:`${A.value[j].spotName}`,type:"line",data:p,smooth:!1,sampling:"average",symbol:"none",lineStyle:{width:1},endLabel:{show:!0,fontSize:12,color:"#fff",offset:[-5,0],padding:3,borderRadius:3,textBorderWidth:0,backgroundColor:"inherit",formatter:function(O){let D=0;const z=n[O.seriesIndex].psies.length;for(let N=0;N<z;N++)n[O.seriesIndex].psies[N]!==null&&(D=n[O.seriesIndex].psies[N].toFixed(2));return D}}}}),ce={backgroundColor:"transparent",legend:{data:J.map(k=>({name:k.name,icon:"circle",textStyle:{color:"inherit"}}))},xAxis:{type:"category",data:K,scale:!0,alignTicks:!0,name:"Time",axisPointer:{value:"2016-10-7",snap:!0,label:{show:!0,formatter:function(k){return k.value}},handle:{show:!0}},axisTick:{show:!0,alignWithLabel:!0},axisLabel:{color:`${y.accentColor}`,rotate:-45,interval:k=>{const[j,G]=K[k].split(":").map(Number);return G%P.value===0},formatter:function(k){return k}},boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",axisTick:{show:!0},axisLine:{show:!0},scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},series:J};T(ce)}catch(n){console.error(n),M(n)}});return F(()=>A.value,async()=>{await E().then(T=>{h.value.setOption(T),R.value="Drawing series...",u.value=99.99,setTimeout(()=>{u.value=100,f.value=0},2e3)})}),F(()=>P.value,async()=>{u.value=5,R.value="Setting up...",m.value="Options & filter updated. Rebuilding chart with new series...",h.value&&(h.value=null),H(),setTimeout(async()=>{await E().then(T=>{h.value.setOption(T),u.value=99.99,R.value="Drawing series...",setTimeout(()=>{u.value=100,f.value=0},2e3)})},1e3)}),ke(()=>{H()}),Ie(()=>{C.value&&Ee(C.value)}),(T,M)=>(b(),I("div",tt,[t("h3",{style:{padding:"15px"},class:ie([`${q(y).textTheme}`])},M[1]||(M[1]=[t("b",null,"Live Monitor Chart",-1)]),2),t("div",at,[s(pe,{"in-label":"X-Axis Time Split","model-value":P.value,"onUpdate:modelValue":M[0]||(M[0]=n=>P.value=n)},{default:x(()=>M[2]||(M[2]=[t("option",{value:"5"},"5 Minutes",-1),t("option",{value:"10"},"10 Minutes",-1),t("option",{value:"15"},"15 Minutes",-1),t("option",{value:"30"},"30 Minutes",-1),t("option",{value:"45"},"45 Minutes",-1),t("option",{value:"60"},"1 Hour",-1)])),_:1},8,["model-value"])]),t("div",{ref_key:"chart",ref:C,style:{width:"100%",position:"relative",height:"90%"}},null,512),u.value!=100?(b(),I("div",{key:0,class:ie(["chartloader",[`${q(y).mTheme}`]])},[M[3]||(M[3]=t("img",{style:{"border-radius":"1000px"},src:"https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-10.gif"},null,-1)),t("span",{class:ie([`${q(y).textTheme}`])},Z(m.value)+" ("+Z(f.value)+" objects collected)",3),t("span",{style:ue({color:`${q(y).accentColorSecondary}`})},Z(R.value),5),t("div",lt,[t("span",{style:ue({width:`${u.value}%`,background:`${q(y).accentColor}`}),class:"loaderinner"},null,4)])],2)):ne("",!0)]))}}),ot=Te(st,[["__scopeId","data-v-78c03b71"]]),nt={class:"chart-containers"},it={class:"col-md-4"},rt={class:"loaderparent"},ut=ge({__name:"LiveMonitorSegmentView",props:{dateFilter:{type:String,required:!0},timeFilter:{type:Number,required:!0}},setup(oe){const L=je(),B=oe,C=o(!0),h=o(null),y=o(null),P=he(),A=o(15),u=o([]),m=o(0),R=o("Building chart..."),f=o("Initializing..."),$=o(0),e=o("trunk1"),U=o({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:[],scale:!0,boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}}}),H=o({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:[],scale:!0,boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}}}),E=i=>new Date(i).toISOString(),T=()=>{u.value=L.getTrunk(e.value).spot};F(()=>h.value,()=>{M(),T()});const M=()=>{if(m.value=5,h.value){const i=be(h.value);y.value=i,y.value.setOption(U.value)}},n=async()=>new Promise(async(i,g)=>{try{const d=[],K=new Set,J=u.value.length;let ce=0;f.value="Setting up...";for(let p=0;p<u.value.length;p++){f.value=`Applying filter for ${u.value[p].spotName}...`;const O={id:u.value[p].id+"",date:E(B.dateFilter),timespan:B.timeFilter+"",firstrequest:C.value},D=await ye.post(fe.baseEnd+"api/Data/getsingledata",O);for(let ee=0;ee<D.data.length;ee++)setTimeout(()=>{$.value++},1);const z=D.data.map(ee=>{const c=ee.timestamp.replace(".",":").split("T")[1],[te,_]=c.split(":"),ae=`${te}:${_}`;return K.add(ae),ae}),N=D.data.map(ee=>parseFloat(ee.psiValue));d.push({psies:N,categories:z}),ce+=1;const Q=ce/J*90;m.value=Math.round(Q)}const k=Array.from(K).sort((p,O)=>{const[D,z]=p.split(":").map(Number),[N,Q]=O.split(":").map(Number);return D!==N?D-N:z-Q}),j=d.map((p,O)=>{const D={};p.categories.forEach((N,Q)=>{D[N]=p.psies[Q]});const z=k.map(N=>D[N]!==void 0?parseFloat(D[N]):null);return{name:`${u.value[O].spotName}`,type:"line",data:z,smooth:!1,sampling:"average",symbol:"none",lineStyle:{width:2},endLabel:{show:!0,fontSize:12,color:"#fff",offset:[-5,0],padding:3,borderRadius:3,textBorderWidth:0,backgroundColor:"inherit",formatter:function(N){let Q=0;const ee=d[N.seriesIndex].psies.length;for(let S=0;S<ee;S++)d[N.seriesIndex].psies[S]!==null&&(Q=d[N.seriesIndex].psies[S].toFixed(2));return Q}}}}),G={backgroundColor:"transparent",legend:{data:j.map(p=>({name:p.name,icon:"circle",textStyle:{color:"inherit"}}))},xAxis:{type:"category",data:k,scale:!0,alignTicks:!0,name:"Time",axisPointer:{value:"2016-10-7",snap:!0,label:{show:!0,formatter:function(p){return p.value}},handle:{show:!0}},axisTick:{show:!0,alignWithLabel:!0},axisLabel:{color:`${P.accentColor}`,rotate:-45,interval:p=>{const[O,D]=k[p].split(":").map(Number);return D%A.value===0},formatter:function(p){return p}},boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",axisTick:{show:!0},axisLine:{show:!0},scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},series:j};i(G)}catch(d){console.error(d),g(d)}});return F(()=>u.value,async()=>{await n().then(i=>{y.value.setOption(i),f.value="Drawing series...",m.value=99.99,setTimeout(()=>{m.value=100,$.value=0},2e3)})}),F(()=>A.value,async()=>{m.value=5,f.value="Setting up...",R.value="Options & filter updated. Rebuilding chart with new series...",y.value&&(y.value=null),M(),setTimeout(async()=>{await n().then(i=>{y.value.setOption(i),m.value=99.99,f.value="Drawing series...",setTimeout(()=>{m.value=100,$.value=0},2e3)})},1e3)}),ke(()=>{M()}),Ie(()=>{h.value&&Ee(h.value)}),F(()=>e.value,()=>{u.value=L.getTrunk(e.value).spot,y.value.clear(),y.value.setOption(H),M()}),(i,g)=>(b(),I("div",nt,[t("h3",{style:{padding:"15px"},class:ie([`${q(P).textTheme}`])},g[2]||(g[2]=[t("b",null,"Live Monitor Chart",-1)]),2),t("div",it,[s(pe,{"in-label":"Select Spot","model-value":e.value,"onUpdate:modelValue":g[0]||(g[0]=d=>e.value=d)},{default:x(()=>g[3]||(g[3]=[t("option",{value:"trunk1"},"MGS BJG - BOOSTER",-1),t("option",{value:"trunk2"},"MGS KAS - MOS SPPP",-1),t("option",{value:"trunk3"},"SGL LINE",-1),t("option",{value:"trunk4"},"BETUNG - BAJUBANG",-1)])),_:1},8,["model-value"]),s(pe,{"in-label":"X-Axis Time Split","model-value":A.value,"onUpdate:modelValue":g[1]||(g[1]=d=>A.value=d)},{default:x(()=>g[4]||(g[4]=[t("option",{value:"5"},"5 Minutes",-1),t("option",{value:"10"},"10 Minutes",-1),t("option",{value:"15"},"15 Minutes",-1),t("option",{value:"30"},"30 Minutes",-1),t("option",{value:"45"},"45 Minutes",-1),t("option",{value:"60"},"1 Hour",-1)])),_:1},8,["model-value"])]),t("div",{ref_key:"chart",ref:h,style:{width:"100%",position:"relative",height:"100%"}},null,512),m.value!=100?(b(),I("div",{key:0,class:ie(["chartloader",[`${q(P).mTheme}`]])},[g[5]||(g[5]=t("img",{style:{"border-radius":"1000px"},src:"https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-10.gif"},null,-1)),t("span",{class:ie([`${q(P).textTheme}`])},Z(R.value)+" ("+Z($.value)+" objects collected)",3),t("span",{style:ue({color:`${q(P).accentColorSecondary}`})},Z(f.value),5),t("div",rt,[t("span",{style:ue({width:`${m.value}%`,background:`${q(P).accentColor}`}),class:"loaderinner"},null,4)])],2)):ne("",!0)]))}}),dt=Te(ut,[["__scopeId","data-v-da253721"]]),ct={style:{display:"flex","flex-flow":"column","margin-bottom":"1rem"}},mt=["id"],pt={key:0,style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end",gap:"0.5rem","margin-bottom":"1.5rem"}},vt={contenteditable:"true",spellcheck:"false"},ft=ge({__name:"ChartView2",props:{filterDate:{type:String,required:!0},filterTime:{type:Number,required:!0},spotId:{type:String,required:!0},chartName:{type:String,required:!0},yMax:{type:Number,required:!0,default:350},yMin:{type:Number,required:!0,default:0},gridview:{type:Boolean,default:!1},tickAmount:{type:Number,default:100},dataFetchInterval:{type:Number,default:1e4},curveType:{type:String,default:"smooth"},safeMark:{type:Number,default:0},isDataPaused:Boolean,showUis:{type:Boolean,default:!0}},emits:["onChartClose","onChartReady","onPause","onResume","onDrawingMode"],setup(oe,{emit:L}){const B=o([]),C=o([]),h=L,y=he(),P=o(!1),A=o(!0),u=o(null),m=o(null),R=o(!1),f=o(!1);let $;const e=oe,U=o(!1),H=o(e.yMax),E=o(e.yMin),T=o(e.tickAmount),M=o(50),n=o(e.dataFetchInterval),i=o(e.curveType),g=o(!0),d=o(!0);function K(S,c){return{tooltip:{show:!0,trigger:"item",axisPointer:{type:"cross",axis:"auto",label:{show:!0}}},xAxis:[{type:"category",interval:T.value,axisLine:{show:!0,lineStyle:{color:y.accentColor}},splitLine:{show:d,lineStyle:{color:"#ddd",type:"dashed"}},axisTick:{show:!0},boundaryGap:!1,axisLabel:{rotate:45},data:[]}],yAxis:[{type:"value",min:E,max:H,minorTick:{show:!0},axisTick:{show:!0},minorSplitLine:{show:g,lineStyle:{color:"#ddd",type:"dashed"}},interval:M,axisLine:{show:!0,lineStyle:{color:y.accentColor}},axisLabel:{formatter:"{value}"}}],toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:"Save as Image",name:"PSI Data",type:"png",pixelRatio:2},dataZoom:{show:!0,title:{zoom:"Zoom",back:"Reset Zoom"}},magicType:{show:!0,type:["line","bar"],title:{line:"Line Chart",bar:"Bar Chart"}}}},series:[{name:"PSI Data",type:"line",symbol:"none",smooth:c==="smooth",data:[],tooltip:{position:["50%","50%"]},endLabel:{show:!0,distance:-10,formatter:function(te){const _=te.dataIndex,ae=J.value.series[0].data;let V=0,w=0;for(let a=0;a<ae.length;a++){const l=parseInt(ae[a]);(parseInt(e.spotId)==1&&l>=128&&l<=150||parseInt(e.spotId)==2&&l>=70&&l<=100||parseInt(e.spotId)==3&&l>=120&&l<=150||parseInt(e.spotId)==4&&l>=16&&l<=38||parseInt(e.spotId)==5&&l>=250&&l<=300||parseInt(e.spotId)==6&&l>=225&&l<=250||parseInt(e.spotId)==7&&l>=50&&l<=100||parseInt(e.spotId)==8&&l>=200&&l<=260||parseInt(e.spotId)==9&&l>=38&&l<=50||parseInt(e.spotId)==10&&l>=10&&l<=56||parseInt(e.spotId)==11&&l>=7&&l<=35||parseInt(e.spotId)==12&&l>=38&&l<=50||parseInt(e.spotId)==13&&l>=3&&l<=30||parseInt(e.spotId)==14&&l>=38&&l<=50||parseInt(e.spotId)==15&&l>=90&&l<=120||parseInt(e.spotId)==16&&l>=30&&l<=60)&&(V+=l,w++)}const de=V/w,v=ae.length-1;return _===v?`Curr: ${te.value}
Avg: ${de.toFixed(2)}`:""},color:"black",backgroundColor:"white",padding:5,borderRadius:5}},{name:"Safe Mark",type:"line",tooltip:{trigger:"item"},lineStyle:{color:"red",type:"solid"},markLine:{symbol:"none",label:{show:!1},lineStyle:{color:"red",type:"dashed"},data:[{yAxis:e.safeMark}]}}]}}const J=o(K(e.yMax,e.curveType));F(()=>[H.value,E.value,T.value,n.value,i.value,M.value,g.value,d.value],()=>{m.value.setOption(J.value)});const ce=()=>{var S;!m.value&&u.value&&(m.value=be(u.value)),(S=m.value)==null||S.setOption(J.value)},k=S=>new Date(S).toISOString(),j=async()=>{var c;const S={id:e.spotId,date:k(e.filterDate),timespan:e.filterTime+""};try{const _=(await ye.post(fe.baseEnd+"api/Data/getdata2",S)).data,ae=_.map(w=>{const v=w.timestamp.replace(".",":").split("T")[1],[a,l]=v.split(":");return`${a}:${l}`}),V=_.map(w=>parseFloat(w.psiValue).toFixed(2)).map(w=>parseFloat(w));B.value=ae,C.value=V,V.length?(R.value=!1,J.value.xAxis[0].data=ae,J.value.series[0].data=V,(c=m.value)==null||c.setOption(J.value)):(R.value=!0,A.value=!1)}catch(te){console.error("Error fetching chart data:",te)}},G=()=>{const S=new Date().toISOString().slice(0,10);if(e.filterDate.slice(0,10)!==S){$&&clearInterval($);return}else $&&clearInterval($),$=setInterval(()=>{f.value||j()},n.value)};F(()=>u.value,()=>{u.value&&ce()}),F(()=>e.gridview,()=>{m.value&&setTimeout(()=>{var S;(S=m.value)==null||S.resize()},500)}),F(()=>e.dataFetchInterval,()=>{n.value=e.dataFetchInterval,G()}),F(()=>[u.value],()=>{j(),G()}),Ie(()=>{clearInterval($)});let p=null;F(()=>[e.filterDate,e.filterTime,e.yMax,e.yMin,e.tickAmount,e.curveType],()=>{p&&clearTimeout(p),p=setTimeout(()=>{H.value=e.yMax,E.value=e.yMin,T.value=e.tickAmount,i.value=e.curveType,n.value=e.dataFetchInterval,J.value=K(e.yMax,e.curveType),A.value=!0,P.value=!1},300)});let O=null;F(()=>[H.value,E.value,T.value,n.value,i.value],()=>{O&&clearTimeout(O),O=setTimeout(()=>{j()},500)}),y.$subscribe((S,c)=>{setTimeout(()=>{j()},2e3)});const D=()=>{h("onChartClose",e.spotId)},z=()=>{U.value=!U.value},N=()=>{U.value=!1},Q=()=>{f.value=!f.value,f.value?h("onPause",e.spotId):h("onResume",e.spotId)};F(()=>[e.isDataPaused],()=>{f.value=e.isDataPaused,f.value?h("onPause",e.spotId):h("onResume",e.spotId)}),F(()=>f.value,()=>{f.value?h("onPause",e.spotId):h("onResume",e.spotId)}),F(()=>y.asideVisible,()=>{m.value&&setTimeout(()=>{var S;(S=m.value)==null||S.resize()},500)});const ee=()=>{h("onDrawingMode",e.spotId)};return(S,c)=>{const te=Se("font-awesome-icon");return b(),I(me,null,[s(xe,{"mod-show":U.value,"onUpdate:modShow":c[8]||(c[8]=_=>U.value=_),"mod-title":`${e.chartName} Preferences`},{default:x(()=>[s(re,{"in-type":"number","in-label":"Y-Axis Max Tick","model-value":H.value,"onUpdate:modelValue":c[0]||(c[0]=_=>H.value=_)},null,8,["model-value"]),s(re,{"in-type":"number","in-label":"Y-Axis Min Tick","model-value":E.value,"onUpdate:modelValue":c[1]||(c[1]=_=>E.value=_)},null,8,["model-value"]),s(re,{"in-type":"number","in-label":"Y-Axis Interval","model-value":M.value,"onUpdate:modelValue":c[2]||(c[2]=_=>M.value=_)},null,8,["model-value"]),s(re,{"in-type":"number","in-label":"X-Axis Tick Amount","model-value":T.value,"onUpdate:modelValue":c[3]||(c[3]=_=>T.value=_)},null,8,["model-value"]),s(re,{"in-type":"number","in-label":"Data Update Interval (Milisecond)","model-value":n.value,"onUpdate:modelValue":c[4]||(c[4]=_=>n.value=_)},null,8,["model-value"]),s(pe,{"in-label":"Curve Type","model-value":i.value,"onUpdate:modelValue":c[5]||(c[5]=_=>i.value=_)},{default:x(()=>c[9]||(c[9]=[t("option",{value:"smooth"},"Smooth",-1),t("option",{value:"straight"},"Straight",-1),t("option",{value:"monotoneCubic"},"Monotone Cubic",-1),t("option",{value:"stepline"},"Stepline",-1),t("option",{value:"linestep"},"Linestep",-1)])),_:1},8,["model-value"]),t("div",ct,[t("label",null,[Me(t("input",{type:"checkbox","onUpdate:modelValue":c[6]||(c[6]=_=>g.value=_)},null,512),[[Ce,g.value]]),c[10]||(c[10]=le(" Show Y-Axis Minor Split "))]),t("label",null,[Me(t("input",{type:"checkbox","onUpdate:modelValue":c[7]||(c[7]=_=>d.value=_)},null,512),[[Ce,d.value]]),c[11]||(c[11]=le(" Show X-Axis Split "))])]),s(W,{onClick:N,"bt-type":"button","bt-disabled":!1},{default:x(()=>c[12]||(c[12]=[le("Dismiss")])),_:1})]),_:1},8,["mod-show","mod-title"]),t("div",{id:`chart${e.spotId}`,style:ue({width:e.gridview?q(y).asideVisible?"680px":"600.5px":"100%"}),class:ie(["chartwrap",f.value?"chartwrap-paused":""])},[e.showUis?(b(),I("div",pt,[s(W,{onClick:ee,"bt-type":"button","bt-size":"small","bt-disabled":!1},{default:x(()=>[s(te,{icon:"edit"})]),_:1}),s(W,{onClick:Q,"bt-type":"button","bt-size":"small","bt-disabled":!1},{default:x(()=>[s(te,{icon:f.value?"pause":"play"},null,8,["icon"])]),_:1}),C.value.length?(b(),Ke(W,{key:0,onClick:z,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:x(()=>[s(te,{icon:"sliders"})]),_:1})):ne("",!0),s(W,{onClick:D,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:x(()=>[s(te,{icon:"close"})]),_:1})])):ne("",!0),s(Ye,{"id-spot":parseInt(e.spotId)},null,8,["id-spot"]),t("h4",{style:ue({textAlign:"center",color:q(y).accentColor})},[t("b",vt,"SPOT: "+Z(e.chartName),1)],4),C.value.length?(b(),I("p",{key:1,style:{"text-align":"center","margin-bottom":"5px"},class:ie(q(y).textTheme)}," Displaying data for last "+Z(e.filterTime)+" hour(s) on "+Z(e.filterDate),3)):ne("",!0),t("div",{ref_key:"chartRef",ref:u,style:{width:"100%",height:"600px"}},null,512)],14,mt)],64)}}}),yt={class:"cl-filter"},ht={key:0,class:"trunk-selector"},gt={style:{width:"500px",display:"flex",padding:"15px","flex-flow":"column"}},bt=["value"],St={style:{width:"500px",display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem",position:"relative"}},wt={style:{display:"flex","flex-flow":"column","align-items":"center"}},xt={style:{display:"flex","flex-flow":"row wrap","justify-content":"center"}},kt=["onClick"],It=ge({__name:"ChartLayerView",props:{dateFilter:{type:String,required:!0},timeFilter:{type:Number,required:!0}},setup(oe){const L=o(null),B=o(null),C=o(je().getAllTrunk());o(Object.keys(C)),he();const h=n=>new Date(n).toISOString(),y=oe,P=o(y.dateFilter),A=o("15"),u=o({legend:{show:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},xAxis:{type:"category",name:"Time",data:[],nameGap:40,boundaryGap:0,nameLocation:"center",axisLabel:{show:!0,rotate:45,interval:n=>e.value[n]===void 0?!1:e.value[n].split(":")[1]%A.value===0},axisSplitLine:{show:!0,lineStyle:{type:"solid"}},axisLine:{show:!0,lineStyle:{type:"solid"}}},yAxis:{type:"value",min:0,max:550,interval:50,minorTick:{show:!0},scale:!0,nameLocation:"center",nameGap:50,boundaryGap:0,splitLine:{show:!0,lineStyle:{type:"solid",color:"#00000055"}},minorSplitLine:{show:!0,lineStyle:{type:"dashed",color:"#00000022"}},axisTick:{show:!0},name:"Pressure (PSI)",axisLine:{show:!0}},series:[]});F(()=>A.value,()=>{u.value.xAxis.axisLabel.interval=n=>e.value[n].split(":")[1]%A.value===0,f()}),F(()=>P.value,()=>{Object.keys(m.value).length>0&&E()});const m=o({}),R=o(),f=()=>{B.value.setOption(u.value)};F(()=>L.value,()=>{B.value=be(L.value),f()});const $=o({}),e=o([]),U=o(!1),H=()=>{const n=R.value,i=C.value[n].name,g=C.value[n].spot;m.value[i]=g,U.value=!1,$.value={},e.value=[],B.value.clear(),u.value.series=[],B.value.setOption(u.value),E()},E=()=>{Object.keys(m.value).forEach(async n=>{const i=[],g=[];for(let d=0;d<m.value[n].length;d++){const J={id:m.value[n][d].id+"",date:h(P.value),timespan:y.timeFilter+"",firstrequest:!0},k=(await ye.post(fe.baseEnd+"api/Data/getsingledata",J)).data,j=k.map(p=>p.psiValue.toFixed(2));g.push({type:"line",data:j,smooth:!1,symbol:"none",name:m.value[n][d].name});const G=k.map(p=>Ze(p.timestamp).format("HH:mm"));for(let p=0;p<G.length;p++)i.includes(G[p])||i.push(G[p])}$.value[n]=g,e.value=i})};F(()=>$,()=>{B.value.clear(),B.value.setOption(u.value),T()},{deep:!0});const T=()=>{u.value.xAxis.data=e.value,Object.keys($.value).forEach(n=>{for(let i=0;i<$.value[n].length;i++)u.value.series.push($.value[n][i])}),B.value.setOption(u.value)},M=n=>{delete m.value[n],E()};return(n,i)=>{const g=Se("font-awesome-icon");return b(),I(me,null,[t("div",yt,[U.value?(b(),I("div",ht,[t("button",{onClick:i[0]||(i[0]=d=>U.value=!U.value),type:"button",class:"drwclose"},[s(g,{icon:"close"})]),t("div",gt,[i[7]||(i[7]=t("h5",null,[t("b",null,"Trunkline Preference")],-1)),s(pe,{"in-label":"Trunkline",style:{width:"100%"},"model-value":R.value,"onUpdate:modelValue":i[1]||(i[1]=d=>R.value=d)},{default:x(()=>[i[5]||(i[5]=t("option",{selected:"",value:""},"Select Trunkline...",-1)),(b(!0),I(me,null,ve(C.value,(d,K)=>(b(),I("option",{key:K,value:K},Z(d.name),9,bt))),128))]),_:1},8,["model-value"]),s(W,{onClick:H,"bt-disabled":!1,"bt-size":"small",style:{height:"fit-content",padding:"13px",width:"170px"}},{default:x(()=>i[6]||(i[6]=[le("Load into Chart")])),_:1})])])):ne("",!0),i[9]||(i[9]=t("h3",null,[t("b",null,"Chart Layer")],-1)),t("div",St,[s(re,{"in-type":"date","in-label":"Date Filter","model-value":P.value,"onUpdate:modelValue":i[2]||(i[2]=d=>P.value=d)},null,8,["model-value"]),s(pe,{"in-label":"X-Axis Gap",style:{width:"100%"},"model-value":A.value,"onUpdate:modelValue":i[3]||(i[3]=d=>A.value=d)},{default:x(()=>i[8]||(i[8]=[t("option",{value:"5"},"5 Minutes",-1),t("option",{value:"10"},"10 Minutes",-1),t("option",{value:"15"},"15 Minutes",-1),t("option",{value:"30"},"30 Minutes",-1),t("option",{value:"45"},"45 Minutes",-1),t("option",{value:"60"},"1 Hour",-1)])),_:1},8,["model-value"]),s(W,{onClick:i[4]||(i[4]=d=>U.value=!U.value),"bt-disabled":!1,"bt-size":"small",style:{height:"fit-content","margin-top":"36px",padding:"13px"}},{default:x(()=>[s(g,{icon:"plus"})]),_:1})])]),t("div",{ref_key:"chart",ref:L,style:{width:"100%",height:"480px"}},null,512),i[11]||(i[11]=t("hr",null,null,-1)),t("div",wt,[i[10]||(i[10]=t("label",null,[t("b",null,"Active Trunklines")],-1)),t("div",xt,[(b(!0),I(me,null,ve(m.value,(d,K)=>(b(),I("span",{class:"active-trunklines",key:K,onClick:J=>M(K),style:{margin:"5px"}},[t("span",null,Z(K),1)],8,kt))),128))])])],64)}}}),Tt=Te(It,[["__scopeId","data-v-e401e0fe"]]),Mt={key:0,class:"chart-layer"},Ct={class:"chart-layer-inner"},At={key:1,class:"live-window"},Ot={key:2,class:"live-window"},_t={key:3,class:"drw-wd"},$t={class:"row"},Gt={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end"}},Dt={class:"col-md-12"},Lt={class:"col-md-12"},Pt={style:{display:"flex","flex-flow":"row nowrap",gap:"0.4rem"}},Nt={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end"}},Vt={class:"spot-reading-control"},Ft={class:"spot-basket"},Bt=["onClick","onDblclick"],Rt={key:0,style:{"margin-top":"1rem",display:"flex","flex-flow":"row nowrap","justify-content":"flex-end"}},Ae=1,Ut=15,Oe=2,qt=16,_e=3,$e=4,Ge=5,De=6,Le=7,Pe=8,Ne=9,Ve=10,Fe=11,Be=12,Re=13,Ue=14,qe=17,aa=ge({__name:"MonitoringFol",setup(oe){const L=he();L.asideToggle(!0);const B=o(null),C=o(!1),h=o(350),y=o(0),P=o(30),A=o(7e3),u=o(!1),m=o(""),R=o("smooth"),f=o(24),$=o(!1),e=o([]),U=o(0),H=v=>Object.keys(v),E=()=>{U.value<e.value.length&&setTimeout(()=>{U.value++,E()},100)},T=()=>{const v=new Date,a=v.getFullYear(),l=String(v.getMonth()+1).padStart(2,"0"),r=String(v.getDate()).padStart(2,"0"),se=`${a}-${l}-${r}`;m.value=se};ke(()=>{T(),E()});const M=()=>{$.value=!0},n=v=>{$.value=!1,e.value.some(l=>l[v.id])?L.notifyShowError("Selected spot already displayed"):e.value.push({[v.id]:v})},i=v=>{e.value=e.value.filter(a=>!a[v])};(()=>{e.value.push({1:{id:Ae,name:"MGS BJG (1)",desc:"Bajubang",safemark:136,yMax:250}}),e.value.push({15:{id:Ut,name:"MGS BJG (2)",desc:"Bajubang",safemark:136,yMax:250}}),e.value.push({2:{id:Oe,name:"BOOSTER (MOS TPN)",desc:"Tempino",safemark:85,yMax:200}}),e.value.push({16:{id:qt,name:"MGS BJG (3)",desc:"Tempino",safemark:85,yMax:150}}),e.value.push({3:{id:_e,name:"MGS KAS",desc:"Kenali Asam Atas",safemark:140,yMax:250}}),e.value.push({4:{id:$e,name:"MOS TPN",desc:"Tempino",safemark:25,yMax:150}}),e.value.push({5:{id:Ge,name:"GS 02 SGL",desc:"Sungai Gelam",safemark:287,yMax:400}}),e.value.push({6:{id:De,name:"GS 02 SGL (2)",desc:"Sungai Gelam",safemark:0,yMax:350}}),e.value.push({7:{id:Le,name:"GS 02 SGL (3)",desc:"Sungai Gelam",safemark:0,yMax:350}}),e.value.push({8:{id:Pe,name:"GS 01 KTT",desc:"Ketaling",safemark:242,yMax:350}}),e.value.push({9:{id:Ne,name:"MGS TPN",desc:"Tempino",safemark:43,yMax:150}}),e.value.push({10:{id:Ve,name:"0 KM SP BETUNG",desc:"Betung",safemark:0,yMax:250}}),e.value.push({11:{id:Fe,name:"5.3 KM SIMP. PASAR GAJAH (5.3)",desc:"Pasar Gajah",safemark:0,yMax:200}}),e.value.push({12:{id:Be,name:"9.5 KM SANDTRAP II (4.2)",desc:"Sandtrap",safemark:0,yMax:150}}),e.value.push({13:{id:Re,name:"13.8 KM MGS BJG (4.3)",desc:"Bajubang",safemark:0,yMax:100}}),e.value.push({14:{id:Ue,name:"MINIATUR (CIP)",desc:"Miniatur",safemark:0,yMax:350}}),e.value.push({17:{id:qe,name:"CF KAS",desc:"Kenali Asam Atas",safemark:140,yMax:250}})})();const d=o(!1),K=()=>{d.value=!d.value},J=()=>{d.value=!1,L.notifyShow("Options has been applied")},ce=v=>{const a=document.getElementById("chart"+v);a&&a.scrollIntoView({behavior:"smooth",block:"start"})},k=()=>{C.value=!C.value},j=v=>{e.value=e.value.filter(a=>!a[v])};let G=o([]);const p=v=>{G.value.push({id:v});const a=`spotdata-${v}`,l=document.querySelector(`.${a}`);l?(l.style.background="red",l.style.color="white"):console.warn(`Element dengan class ${a} gak ditemukan bro!`)},O=v=>{const a=`spotdata-${v}`,l=document.querySelector(`.${a}`);l?(l.style.background="#000",l.style.color="#fff"):console.warn(`Element dengan class ${a} gak ditemukan bro!`);const r=G.value.findIndex(se=>se.id===v);G.value.splice(r,1)},D=v=>{const a=Object.keys(v)[0];return v[a].id},z=()=>{u.value=!1},N=()=>{u.value=!0},Q=v=>new Date(v).toISOString(),ee=async v=>new Promise(async(a,l)=>{try{const r={id:v,date:Q(m.value),timespan:f.value+"",firstrequest:!1},se=await ye.post(fe.baseEnd+"api/Data/getsingledata",r),X=se.data.map(we=>{const He=we.timestamp.replace(".",":").split("T")[1],[Je,We]=He.split(":");return`${Je}:${We}`}),ze=se.data.map(we=>parseFloat(we.psiValue).toFixed(2));a({cats:X,series:ze})}catch(r){l(r)}}),S=o(!1),c=v=>{u.value=!0,S.value=!0,setTimeout(()=>{te(v)},3e3)},te=async v=>{const a=be(B.value);await ee(v).then(l=>{const r=l.cats,se=l.series,X={graphic:[{type:"rect",shape:{x:0,y:0,width:a.getWidth(),height:a.getHeight()},style:{fill:"transparent"}}],backgroundColor:"#fff",tooltip:{trigger:"axis"},xAxis:{type:"category",data:r},yAxis:{type:"value",min:0,max:350},series:[{type:"line",data:se,color:r.map(()=>`${L.accentColor}`)}]};a.setOption(X),a.setOption({yAxis:{name:"Pressure (PSI)"}})})},_=()=>{S.value=!1},ae=o(!1),V=()=>{ae.value=!1},w=o(!1),de=o(!1);return F(()=>de.value,()=>{de.value?u.value=!0:u.value=!1}),(v,a)=>{const l=Se("font-awesome-icon");return b(),I(me,null,[de.value?(b(),I("div",Mt,[t("div",Ct,[t("button",{onClick:a[0]||(a[0]=r=>de.value=!de.value),type:"button",class:"drwclose"},[s(l,{icon:"close"})]),s(Tt,{"date-filter":m.value,"time-filter":f.value},null,8,["date-filter","time-filter"])])])):ne("",!0),w.value?(b(),I("div",At,[t("div",{class:ie(["live-window-inner",[`${q(L).mTheme}`]])},[t("button",{onClick:a[1]||(a[1]=r=>w.value=!w.value),type:"button",class:"drwclose"},[s(l,{icon:"close"})]),s(dt,{"date-filter":m.value,"time-filter":f.value},null,8,["date-filter","time-filter"])],2)])):ne("",!0),ae.value?(b(),I("div",Ot,[t("div",{class:ie(["live-window-inner",[`${q(L).mTheme}`]])},[t("button",{type:"button",class:"drwclose",onClick:V},[s(l,{icon:"close"})]),s(ot,{"date-filter":m.value,"time-filter":f.value},null,8,["date-filter","time-filter"])],2)])):ne("",!0),S.value?(b(),I("div",_t,[t("div",{class:"drw-inner",style:ue({background:`${q(L).themeDarkColor}`})},[t("button",{onClick:_,type:"button",style:ue({color:`${q(L).accentColor}`}),class:"drwclose"},[s(l,{icon:"close"})],4),t("div",{ref_key:"eCharts",ref:B,style:{width:"100%",height:"100%",position:"relative"}},null,512)],4)])):ne("",!0),s(xe,{"mod-show":$.value,"onUpdate:modShow":a[2]||(a[2]=r=>$.value=r),"mod-title":"Select spot"},{default:x(()=>[s(Y,{onOnItemSelect:n,"item-id":Ae,"item-name":"MGS BJG","item-desc":"Bajubang","item-safemark":136}),s(Y,{onOnItemSelect:n,"item-id":Oe,"item-name":"BOOSTER (MOS TPN)","item-desc":"Tempino","item-safemark":85}),s(Y,{onOnItemSelect:n,"item-id":_e,"item-name":"MGS KAS","item-desc":"Kenali Asam Atas","item-safemark":140}),s(Y,{onOnItemSelect:n,"item-id":$e,"item-name":"MOS TPN","item-desc":"Tempino","item-safemark":25}),s(Y,{onOnItemSelect:n,"item-id":Ge,"item-name":"GS 02 SGL","item-desc":"Sungai Gelam","item-safemark":287}),s(Y,{onOnItemSelect:n,"item-id":De,"item-name":"GS 02 SGL (2)","item-desc":"Sungai Gelam","item-safemark":0}),s(Y,{onOnItemSelect:n,"item-id":Le,"item-name":"GS 02 SGL (3)","item-desc":"Sungai Gelam","item-safemark":0}),s(Y,{onOnItemSelect:n,"item-id":Pe,"item-name":"GS 01 KTT","item-desc":"Ketaling","item-safemark":242}),s(Y,{onOnItemSelect:n,"item-id":Ne,"item-name":"MGS TPN","item-desc":"Tempino","item-safemark":43}),s(Y,{onOnItemSelect:n,"item-id":Ve,"item-name":"0 KM SP BETUNG","item-desc":"Betung","item-safemark":0}),s(Y,{onOnItemSelect:n,"item-id":Fe,"item-name":"5.3 KM SIMP. PASAR GAJAH (5.3)","item-desc":"Pasar Gajah","item-safemark":0}),s(Y,{onOnItemSelect:n,"item-id":Be,"item-name":"9.5 KM SANDTRAP II (4.2)","item-desc":"Sandtrap","item-safemark":0}),s(Y,{onOnItemSelect:n,"item-id":Re,"item-name":"13.8 KM MGS BJG (4.3)","item-desc":"Bajubang","item-safemark":0}),s(Y,{onOnItemSelect:n,"item-id":Ue,"item-name":"MINIATUR (CIP)","item-desc":"Miniatur","item-safemark":0}),s(Y,{onOnItemSelect:n,"item-id":qe,"item-name":"CF KAS","item-desc":"Kenali Asam Atas","item-safemark":0})]),_:1},8,["mod-show"]),s(xe,{"mod-show":d.value,"onUpdate:modShow":a[8]||(a[8]=r=>d.value=r),"mod-title":"Global Chart Preference"},{default:x(()=>[t("p",{style:ue({color:q(L).accentColor})},"These parameters applies to all displayed charts",4),s(re,{"in-label":"Y-Axis Max Tick Range","in-type":"number","model-value":h.value,"onUpdate:modelValue":a[3]||(a[3]=r=>h.value=r)},null,8,["model-value"]),s(re,{"in-label":"Y-Axis Min Tick Range","in-type":"number","model-value":y.value,"onUpdate:modelValue":a[4]||(a[4]=r=>y.value=r)},null,8,["model-value"]),s(re,{"in-label":"X-Axis Tick Amount","in-helper":"Greater value produces denser tick rates while lesser value loosen it but trims certain data in some points of time","in-type":"number","model-value":P.value,"onUpdate:modelValue":a[5]||(a[5]=r=>P.value=r)},null,8,["model-value"]),s(re,{"in-label":"Data Update Interval (Milisecond)","in-helper":"Higher value increases the delay while lower value decreases it. Warning: Lower value require more resources and may significantly affect client-side performance","in-type":"number","model-value":A.value,"onUpdate:modelValue":a[6]||(a[6]=r=>A.value=r)},null,8,["model-value"]),s(pe,{"in-label":"Curve Type","model-value":R.value,"onUpdate:modelValue":a[7]||(a[7]=r=>R.value=r)},{default:x(()=>a[14]||(a[14]=[t("option",{value:"smooth"},"Smooth",-1),t("option",{value:"straight"},"Straight",-1),t("option",{value:"monotoneCubic"},"Monotone Cubic",-1),t("option",{value:"stepline"},"Stepline",-1),t("option",{value:"linestep"},"Linestep",-1)])),_:1},8,["model-value"]),s(W,{onClick:J,"bt-type":"button","bt-disabled":!1},{default:x(()=>a[15]||(a[15]=[le("Dismiss")])),_:1})]),_:1},8,["mod-show"]),s(Xe,{"context-title":"Monitoring FOL"},{default:x(()=>[t("div",$t,[t("div",Gt,[s(W,{onClick:K,"bt-size":"small","bt-disabled":!1},{default:x(()=>[s(l,{icon:"sliders"}),a[16]||(a[16]=le(" Global Chart Preferences"))]),_:1})]),t("div",Dt,[s(re,{"in-type":"date","in-label":"Date Filter","model-value":m.value,"onUpdate:modelValue":a[9]||(a[9]=r=>m.value=r)},null,8,["model-value"]),s(pe,{"in-label":"Time Range Filter","model-value":f.value,"onUpdate:modelValue":a[10]||(a[10]=r=>f.value=r)},{default:x(()=>a[17]||(a[17]=[t("option",{value:"1"},"1 Hour",-1),t("option",{value:"3"},"3 Hours",-1),t("option",{value:"6"},"6 Hours",-1),t("option",{value:"12"},"12 Hours",-1),t("option",{value:"24"},"24 Hours",-1)])),_:1},8,["model-value"]),t("div",Lt,[t("div",Pt,[s(W,{onClick:a[11]||(a[11]=r=>ae.value=!ae.value),"bt-size":"small","bt-disabled":!1},{default:x(()=>[s(l,{icon:"chart-line"}),a[18]||(a[18]=le(" Live Monitor"))]),_:1}),s(W,{"bt-size":"small",onClick:a[12]||(a[12]=r=>w.value=!w.value),"bt-disabled":!1},{default:x(()=>[s(l,{icon:"chart-line"}),a[19]||(a[19]=le("Trunkline Monitor"))]),_:1}),s(W,{"bt-size":"small",onClick:a[13]||(a[13]=r=>de.value=!de.value),"bt-disabled":!1},{default:x(()=>[s(l,{icon:"chart-line"}),a[20]||(a[20]=le("Chart Layer"))]),_:1})])]),t("div",Nt,[s(W,{onClick:M,"bt-type":"button","bt-disabled":!1,"bt-size":"small"},{default:x(()=>[s(l,{icon:"add"}),a[21]||(a[21]=le(" Add Chart"))]),_:1})]),t("div",Vt,[s(W,{onClick:z,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:x(()=>[s(l,{icon:"play"}),a[22]||(a[22]=le(" Resume All"))]),_:1}),s(W,{onClick:N,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:x(()=>[s(l,{icon:"pause"}),a[23]||(a[23]=le(" Pause All"))]),_:1})]),t("div",Ft,[(b(!0),I(me,null,ve(e.value,(r,se)=>(b(),I("span",{title:"Click to navigate to this spot",key:se,class:ie(["spot-data",[`spotdata-${D(r)}`]]),onClick:X=>ce(Object.keys(r)[0]),onDblclick:X=>i(Object.keys(r)[0])},[(b(!0),I(me,null,ve(H(r),X=>(b(),I("span",{key:X},Z(r[X].name+" - "+r[X].desc),1))),128))],42,Bt))),128))]),e.value.length?(b(),I("div",Rt,[s(W,{onClick:k,"bt-disabled":!1,"bt-size":"small"},{default:x(()=>[s(l,{icon:C.value?"grip-vertical":"expand"},null,8,["icon"]),le(" "+Z(C.value?"Grid chart view":"Full chart view"),1)]),_:1})])):ne("",!0),t("div",{style:{},class:ie(C.value?"chart-basket-gridview":"chart-basket-fullview")},[(b(!0),I(me,null,ve(e.value,(r,se)=>(b(),I("div",{key:se},[(b(!0),I(me,null,ve(H(r),X=>(b(),I("div",{key:X,class:"chart-wrapper"},[se<U.value?(b(),Ke(ft,{key:0,onOnChartReady:E,id:"chart"+Object.keys(r)[0],"chart-name":r[X].name,"filter-date":m.value,"filter-time":f.value,"safe-mark":r[X].safemark,"spot-id":X,"curve-type":R.value,"y-max":r[X].yMax,"y-min":y.value,"tick-amount":P.value,"data-fetch-interval":A.value,gridview:C.value,"is-data-paused":u.value,onOnDrawingMode:c,onOnChartClose:j,onOnPause:p,onOnResume:O},null,8,["id","chart-name","filter-date","filter-time","safe-mark","spot-id","curve-type","y-max","y-min","tick-amount","data-fetch-interval","gridview","is-data-paused"])):ne("",!0)]))),128))]))),128))],2)])])]),_:1})],64)}}});export{aa as default};
