import{u as ve}from"./theme-MMYVCpC6.js";import{d as qe,i as be}from"./index-CehbAW_K.js";import{_ as We}from"./MainWrapperView.vue_vue_type_style_index_0_lang-BcW0l8sl.js";import{_ as ue}from"./InputView.vue_vue_type_style_index_0_lang-CaHuBQMV.js";import{_ as me}from"./SelectView.vue_vue_type_style_index_0_lang-brkBsuxJ.js";import{_ as j}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-DJ1Yxgjp.js";import{_ as xe}from"./ModalEditorView.vue_vue_type_style_index_0_lang-t-odfmc3.js";import{d as fe,r as Se,o as b,c as I,g as t,h as re,u as B,t as ae,a as s,q as te,w as g,e as o,l as z,j as ke,k as Ie,n as oe,m as se,p as he,_ as Te,y as Me,D as Ce,f as Ee,F as pe,z as ye}from"./index-UmRKcWIK.js";import{a as ge}from"./axios-BimPEqV4.js";import{t as ze}from"./trunk-2yh5zSir.js";const Xe={class:"itemlist-wrapper"},Ye={class:"itemlist-group"},ee=fe({__name:"ItemList",props:{itemName:{type:String,required:!0},itemDesc:{type:String,required:!0},itemId:{type:[String,Number],required:!0},itemSafemark:{type:Number,default:0,required:!0}},emits:["onItemSelect"],setup(ne,{emit:_}){const H=ve(),S=_,p=ne,v=()=>{S("onItemSelect",{id:p.itemId,name:p.itemName,desc:p.itemDesc})};return(G,O)=>{const c=Se("font-awesome-icon");return b(),I("div",Xe,[t("div",Ye,[t("span",{style:re({color:B(H).accentColor})},[t("b",null,ae(ne.itemName),1)],4),t("span",{style:re({color:B(H).accentColor})},[s(c,{icon:"map-pin"}),te(" "+ae(ne.itemDesc),1)],4)]),s(j,{onClick:v,"bt-disabled":!1,"bt-size":"small"},{default:g(()=>[s(c,{icon:"plus"})]),_:1})])}}}),Ze={class:"chart-containers"},Qe={class:"col-md-4"},et={class:"loaderparent"},tt=fe({__name:"LiveMonitorChart",props:{dateFilter:{type:String,required:!0},timeFilter:{type:Number,required:!0}},setup(ne){const _=ne,H=o(!0),S=o(null),p=o(null),v=ve(),G=o(15),O=o([]),c=o(0),u=o("Building chart..."),U=o("Initializing..."),m=o(0),T=o({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:[],scale:!0,boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}}}),e=M=>new Date(M).toISOString(),F=async()=>new Promise((M,C)=>{ge.get(he.baseEnd+"api/Spot/getspots").then(i=>{M(i.data)}).catch(i=>{console.error(i),C(i)})});z(()=>S.value,async()=>{D(),await F().then(M=>{O.value=M})});const D=()=>{if(c.value=5,S.value){const M=be(S.value);p.value=M,p.value.setOption(T.value)}},q=async()=>new Promise(async(M,C)=>{try{const i=[],V=new Set,L=O.value.length;let w=0;U.value="Setting up...";for(let A=0;A<O.value.length;A++){U.value=`Applying filter for ${O.value[A].spotName}...`;const K={id:O.value[A].id+"",date:e(_.dateFilter),timespan:_.timeFilter+"",firstrequest:H.value},R=await ge.post(he.baseEnd+"api/Data/getsingledata",K);for(let E=0;E<R.data.length;E++)setTimeout(()=>{m.value++},1);const f=R.data.map(E=>{const X=E.timestamp.replace(".",":").split("T")[1],[Y,y]=X.split(":"),r=`${Y}:${y}`;return V.add(r),r}),x=R.data.map(E=>parseFloat(E.psiValue));i.push({psies:x,categories:f}),w+=1;const $=w/L*90;c.value=Math.round($)}const ie=Array.from(V).sort((A,K)=>{const[R,f]=A.split(":").map(Number),[x,$]=K.split(":").map(Number);return R!==x?R-x:f-$}),W=i.map((A,K)=>{const R={};A.categories.forEach((x,$)=>{R[x]=A.psies[$]});const f=ie.map(x=>R[x]!==void 0?parseFloat(R[x]):null);return{name:`${O.value[K].spotName}`,type:"line",data:f,smooth:!1,sampling:"average",symbol:"none",lineStyle:{width:1},endLabel:{show:!0,fontSize:12,color:"#fff",offset:[-5,0],padding:3,borderRadius:3,textBorderWidth:0,backgroundColor:"inherit",formatter:function(x){let $=0;const E=i[x.seriesIndex].psies.length;for(let P=0;P<E;P++)i[x.seriesIndex].psies[P]!==null&&($=i[x.seriesIndex].psies[P].toFixed(2));return $}}}}),de={backgroundColor:"transparent",legend:{data:W.map(A=>({name:A.name,icon:"circle",textStyle:{color:"inherit"}}))},xAxis:{type:"category",data:ie,scale:!0,alignTicks:!0,name:"Time",axisPointer:{value:"2016-10-7",snap:!0,label:{show:!0,formatter:function(A){return A.value}},handle:{show:!0}},axisTick:{show:!0,alignWithLabel:!0},axisLabel:{color:`${v.accentColor}`,rotate:-45,interval:A=>{const[K,R]=ie[A].split(":").map(Number);return R%G.value===0},formatter:function(A){return A}},boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",axisTick:{show:!0},axisLine:{show:!0},scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},series:W};M(de)}catch(i){console.error(i),C(i)}});return z(()=>O.value,async()=>{await q().then(M=>{p.value.setOption(M),U.value="Drawing series...",c.value=99.99,setTimeout(()=>{c.value=100,m.value=0},2e3)})}),z(()=>G.value,async()=>{c.value=5,U.value="Setting up...",u.value="Options & filter updated. Rebuilding chart with new series...",p.value&&(p.value=null),D(),setTimeout(async()=>{await q().then(M=>{p.value.setOption(M),c.value=99.99,U.value="Drawing series...",setTimeout(()=>{c.value=100,m.value=0},2e3)})},1e3)}),ke(()=>{D()}),Ie(()=>{S.value&&qe(S.value)}),(M,C)=>(b(),I("div",Ze,[t("h3",{style:{padding:"15px"},class:oe([`${B(v).textTheme}`])},C[1]||(C[1]=[t("b",null,"Live Monitor Chart",-1)]),2),t("div",Qe,[s(me,{"in-label":"X-Axis Time Split","model-value":G.value,"onUpdate:modelValue":C[0]||(C[0]=i=>G.value=i)},{default:g(()=>C[2]||(C[2]=[t("option",{value:"5"},"5 Minutes",-1),t("option",{value:"10"},"10 Minutes",-1),t("option",{value:"15"},"15 Minutes",-1),t("option",{value:"30"},"30 Minutes",-1),t("option",{value:"45"},"45 Minutes",-1),t("option",{value:"60"},"1 Hour",-1)])),_:1},8,["model-value"])]),t("div",{ref_key:"chart",ref:S,style:{width:"100%",position:"relative",height:"90%"}},null,512),c.value!=100?(b(),I("div",{key:0,class:oe(["chartloader",[`${B(v).mTheme}`]])},[C[3]||(C[3]=t("img",{style:{"border-radius":"1000px"},src:"https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-10.gif"},null,-1)),t("span",{class:oe([`${B(v).textTheme}`])},ae(u.value)+" ("+ae(m.value)+" objects collected)",3),t("span",{style:re({color:`${B(v).accentColorSecondary}`})},ae(U.value),5),t("div",et,[t("span",{style:re({width:`${c.value}%`,background:`${B(v).accentColor}`}),class:"loaderinner"},null,4)])],2)):se("",!0)]))}}),at=Te(tt,[["__scopeId","data-v-78c03b71"]]),lt={class:"chart-containers"},st={class:"col-md-4"},ot={class:"loaderparent"},nt=fe({__name:"LiveMonitorSegmentView",props:{dateFilter:{type:String,required:!0},timeFilter:{type:Number,required:!0}},setup(ne){const _=ze(),H=ne,S=o(!0),p=o(null),v=o(null),G=ve(),O=o(15),c=o([]),u=o(0),U=o("Building chart..."),m=o("Initializing..."),T=o(0),e=o("trunk1"),F=o({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:[],scale:!0,boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}}}),D=o({tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",data:[],scale:!0,boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}}}),q=V=>new Date(V).toISOString(),M=()=>{c.value=_.getTrunk(e.value).spot};z(()=>p.value,()=>{C(),M()});const C=()=>{if(u.value=5,p.value){const V=be(p.value);v.value=V,v.value.setOption(F.value)}},i=async()=>new Promise(async(V,L)=>{try{const w=[],ie=new Set,W=c.value.length;let de=0;m.value="Setting up...";for(let f=0;f<c.value.length;f++){m.value=`Applying filter for ${c.value[f].spotName}...`;const x={id:c.value[f].id+"",date:q(H.dateFilter),timespan:H.timeFilter+"",firstrequest:S.value},$=await ge.post(he.baseEnd+"api/Data/getsingledata",x);for(let Y=0;Y<$.data.length;Y++)setTimeout(()=>{T.value++},1);const E=$.data.map(Y=>{const r=Y.timestamp.replace(".",":").split("T")[1],[Z,k]=r.split(":"),Q=`${Z}:${k}`;return ie.add(Q),Q}),P=$.data.map(Y=>parseFloat(Y.psiValue));w.push({psies:P,categories:E}),de+=1;const X=de/W*90;u.value=Math.round(X)}const A=Array.from(ie).sort((f,x)=>{const[$,E]=f.split(":").map(Number),[P,X]=x.split(":").map(Number);return $!==P?$-P:E-X}),K=w.map((f,x)=>{const $={};f.categories.forEach((P,X)=>{$[P]=f.psies[X]});const E=A.map(P=>$[P]!==void 0?parseFloat($[P]):null);return{name:`${c.value[x].spotName}`,type:"line",data:E,smooth:!1,sampling:"average",symbol:"none",lineStyle:{width:2},endLabel:{show:!0,fontSize:12,color:"#fff",offset:[-5,0],padding:3,borderRadius:3,textBorderWidth:0,backgroundColor:"inherit",formatter:function(P){let X=0;const Y=w[P.seriesIndex].psies.length;for(let y=0;y<Y;y++)w[P.seriesIndex].psies[y]!==null&&(X=w[P.seriesIndex].psies[y].toFixed(2));return X}}}}),R={backgroundColor:"transparent",legend:{data:K.map(f=>({name:f.name,icon:"circle",textStyle:{color:"inherit"}}))},xAxis:{type:"category",data:A,scale:!0,alignTicks:!0,name:"Time",axisPointer:{value:"2016-10-7",snap:!0,label:{show:!0,formatter:function(f){return f.value}},handle:{show:!0}},axisTick:{show:!0,alignWithLabel:!0},axisLabel:{color:`${G.accentColor}`,rotate:-45,interval:f=>{const[x,$]=A[f].split(":").map(Number);return $%O.value===0},formatter:function(f){return f}},boundaryGap:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},yAxis:{type:"value",axisTick:{show:!0},axisLine:{show:!0},scale:!0,splitLine:{show:!0,lineStyle:{color:"#55555555"}}},series:K};V(R)}catch(w){console.error(w),L(w)}});return z(()=>c.value,async()=>{await i().then(V=>{v.value.setOption(V),m.value="Drawing series...",u.value=99.99,setTimeout(()=>{u.value=100,T.value=0},2e3)})}),z(()=>O.value,async()=>{u.value=5,m.value="Setting up...",U.value="Options & filter updated. Rebuilding chart with new series...",v.value&&(v.value=null),C(),setTimeout(async()=>{await i().then(V=>{v.value.setOption(V),u.value=99.99,m.value="Drawing series...",setTimeout(()=>{u.value=100,T.value=0},2e3)})},1e3)}),ke(()=>{C()}),Ie(()=>{p.value&&qe(p.value)}),z(()=>e.value,()=>{c.value=_.getTrunk(e.value).spot,v.value.clear(),v.value.setOption(D),C()}),(V,L)=>(b(),I("div",lt,[t("h3",{style:{padding:"15px"},class:oe([`${B(G).textTheme}`])},L[2]||(L[2]=[t("b",null,"Live Monitor Chart",-1)]),2),t("div",st,[s(me,{"in-label":"Select Spot","model-value":e.value,"onUpdate:modelValue":L[0]||(L[0]=w=>e.value=w)},{default:g(()=>L[3]||(L[3]=[t("option",{value:"trunk1"},"MGS BJG - BOOSTER",-1),t("option",{value:"trunk2"},"MGS KAS - MOS SPPP",-1),t("option",{value:"trunk3"},"SGL LINE",-1),t("option",{value:"trunk4"},"BETUNG - BAJUBANG",-1)])),_:1},8,["model-value"]),s(me,{"in-label":"X-Axis Time Split","model-value":O.value,"onUpdate:modelValue":L[1]||(L[1]=w=>O.value=w)},{default:g(()=>L[4]||(L[4]=[t("option",{value:"5"},"5 Minutes",-1),t("option",{value:"10"},"10 Minutes",-1),t("option",{value:"15"},"15 Minutes",-1),t("option",{value:"30"},"30 Minutes",-1),t("option",{value:"45"},"45 Minutes",-1),t("option",{value:"60"},"1 Hour",-1)])),_:1},8,["model-value"])]),t("div",{ref_key:"chart",ref:p,style:{width:"100%",position:"relative",height:"100%"}},null,512),u.value!=100?(b(),I("div",{key:0,class:oe(["chartloader",[`${B(G).mTheme}`]])},[L[5]||(L[5]=t("img",{style:{"border-radius":"1000px"},src:"https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-10.gif"},null,-1)),t("span",{class:oe([`${B(G).textTheme}`])},ae(U.value)+" ("+ae(T.value)+" objects collected)",3),t("span",{style:re({color:`${B(G).accentColorSecondary}`})},ae(m.value),5),t("div",ot,[t("span",{style:re({width:`${u.value}%`,background:`${B(G).accentColor}`}),class:"loaderinner"},null,4)])],2)):se("",!0)]))}}),it=Te(nt,[["__scopeId","data-v-da253721"]]),rt={style:{display:"flex","flex-flow":"column","margin-bottom":"1rem"}},ut=["id"],dt={key:0,style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end",gap:"0.5rem","margin-bottom":"1.5rem"}},ct={contenteditable:"true",spellcheck:"false"},pt=fe({__name:"ChartView2",props:{filterDate:{type:String,required:!0},filterTime:{type:Number,required:!0},spotId:{type:String,required:!0},chartName:{type:String,required:!0},yMax:{type:Number,required:!0,default:350},yMin:{type:Number,required:!0,default:0},gridview:{type:Boolean,default:!1},tickAmount:{type:Number,default:100},dataFetchInterval:{type:Number,default:1e4},curveType:{type:String,default:"smooth"},safeMark:{type:Number,default:0},isDataPaused:{type:Boolean,default:!1},showUis:{type:Boolean,default:!0}},emits:["onChartClose","onChartReady","onPause","onResume","onDrawingMode"],setup(ne,{emit:_}){const H=o([]),S=o([]),p=_,v=ve(),G=o(!1),O=o(!0),c=o(null),u=o(null),U=o(!1),m=o(!1);let T;const e=ne,F=o(!1),D=o(e.yMax),q=o(e.yMin),M=o(e.tickAmount),C=o(50),i=o(e.dataFetchInterval),V=o(e.curveType),L=o(!0),w=o(!0);m.value=e.isDataPaused;function ie(y,r){return{tooltip:{show:!0,trigger:"item",axisPointer:{type:"cross",axis:"auto",label:{show:!0}}},xAxis:[{type:"category",interval:M.value,axisLine:{show:!0,lineStyle:{color:v.accentColor}},splitLine:{show:w,lineStyle:{color:"#ddd",type:"dashed"}},axisTick:{show:!0},boundaryGap:!1,axisLabel:{rotate:45},data:[]}],yAxis:[{type:"value",min:q,max:D,minorTick:{show:!0},axisTick:{show:!0},minorSplitLine:{show:L,lineStyle:{color:"#ddd",type:"dashed"}},interval:C,axisLine:{show:!0,lineStyle:{color:v.accentColor}},axisLabel:{formatter:"{value}"}}],toolbox:{show:!0,feature:{saveAsImage:{show:!0,title:"Save as Image",name:"PSI Data",type:"png",pixelRatio:2},dataZoom:{show:!0,title:{zoom:"Zoom",back:"Reset Zoom"}},magicType:{show:!0,type:["line","bar"],title:{line:"Line Chart",bar:"Bar Chart"}}}},series:[{name:"PSI Data",type:"line",symbol:"none",smooth:r==="smooth",data:[],tooltip:{position:["50%","50%"]},endLabel:{show:!0,distance:-10,formatter:function(Z){const k=Z.dataIndex,Q=W.value.series[0].data;let N=0,h=0;for(let a=0;a<Q.length;a++){const l=parseInt(Q[a]);(parseInt(e.spotId)==1&&l>=128&&l<=150||parseInt(e.spotId)==2&&l>=70&&l<=100||parseInt(e.spotId)==3&&l>=120&&l<=150||parseInt(e.spotId)==4&&l>=16&&l<=38||parseInt(e.spotId)==5&&l>=250&&l<=300||parseInt(e.spotId)==6&&l>=225&&l<=250||parseInt(e.spotId)==7&&l>=50&&l<=100||parseInt(e.spotId)==8&&l>=200&&l<=260||parseInt(e.spotId)==9&&l>=38&&l<=50||parseInt(e.spotId)==10&&l>=10&&l<=56||parseInt(e.spotId)==11&&l>=7&&l<=35||parseInt(e.spotId)==12&&l>=38&&l<=50||parseInt(e.spotId)==13&&l>=3&&l<=30||parseInt(e.spotId)==14&&l>=38&&l<=50||parseInt(e.spotId)==15&&l>=90&&l<=120||parseInt(e.spotId)==16&&l>=30&&l<=60)&&(N+=l,h++)}const ce=N/h,d=Q.length-1;return k===d?`Curr: ${Z.value}
Avg: ${ce.toFixed(2)}`:""},color:"black",backgroundColor:"white",padding:5,borderRadius:5}},{name:"Safe Mark",type:"line",tooltip:{trigger:"item"},lineStyle:{color:"red",type:"solid"},markLine:{symbol:"none",label:{show:!1},lineStyle:{color:"red",type:"dashed"},data:[{yAxis:e.safeMark}]}}]}}const W=o(ie(e.yMax,e.curveType));z(()=>[D.value,q.value,M.value,i.value,V.value,C.value,L.value,w.value],()=>{u.value.setOption(W.value)});const de=()=>{var y;!u.value&&c.value&&(u.value=be(c.value)),(y=u.value)==null||y.setOption(W.value)},A=y=>new Date(y).toISOString(),K=async()=>{var r;const y={id:e.spotId,date:A(e.filterDate),timespan:e.filterTime+""};try{const k=(await ge.post(he.baseEnd+"api/Data/getdata2",y)).data,Q=k.map(h=>{const d=h.timestamp.replace(".",":").split("T")[1],[a,l]=d.split(":");return`${a}:${l}`}),N=k.map(h=>parseFloat(h.psiValue).toFixed(2)).map(h=>parseFloat(h));H.value=Q,S.value=N,N.length?(U.value=!1,W.value.xAxis[0].data=Q,W.value.series[0].data=N,(r=u.value)==null||r.setOption(W.value)):(U.value=!0,O.value=!1)}catch(Z){console.error("Error fetching chart data:",Z)}},R=()=>{const y=new Date().toISOString().slice(0,10);if(e.filterDate.slice(0,10)!==y){T&&clearInterval(T);return}else T&&clearInterval(T),T=setInterval(()=>{m.value||K()},i.value)};z(()=>c.value,()=>{c.value&&de()}),z(()=>e.gridview,()=>{u.value&&setTimeout(()=>{var y;(y=u.value)==null||y.resize()},500)}),z(()=>e.dataFetchInterval,()=>{i.value=e.dataFetchInterval,R()}),z(()=>[c.value],()=>{K(),R()}),Ie(()=>{clearInterval(T)});let f=null;z(()=>[e.filterDate,e.filterTime,e.yMax,e.yMin,e.tickAmount,e.curveType],()=>{f&&clearTimeout(f),f=setTimeout(()=>{D.value=e.yMax,q.value=e.yMin,M.value=e.tickAmount,V.value=e.curveType,i.value=e.dataFetchInterval,W.value=ie(e.yMax,e.curveType),O.value=!0,G.value=!1},300)});let x=null;z(()=>[D.value,q.value,M.value,i.value,V.value],()=>{x&&clearTimeout(x),x=setTimeout(()=>{K()},500)}),v.$subscribe((y,r)=>{setTimeout(()=>{K()},2e3)});const $=()=>{p("onChartClose",e.spotId)},E=()=>{F.value=!F.value},P=()=>{F.value=!1},X=()=>{m.value=!m.value,m.value?p("onPause",e.spotId):p("onResume",e.spotId)};z(()=>[e.isDataPaused],()=>{m.value=e.isDataPaused,m.value?p("onPause",e.spotId):p("onResume",e.spotId)}),z(()=>m.value,()=>{m.value?p("onPause",e.spotId):p("onResume",e.spotId)}),z(()=>v.asideVisible,()=>{u.value&&setTimeout(()=>{var y;(y=u.value)==null||y.resize()},500)});const Y=()=>{p("onDrawingMode",e.spotId)};return(y,r)=>{const Z=Se("font-awesome-icon");return b(),I(pe,null,[s(xe,{"mod-show":F.value,"onUpdate:modShow":r[8]||(r[8]=k=>F.value=k),"mod-title":`${e.chartName} Preferences`},{default:g(()=>[s(ue,{"in-type":"number","in-label":"Y-Axis Max Tick","model-value":D.value,"onUpdate:modelValue":r[0]||(r[0]=k=>D.value=k)},null,8,["model-value"]),s(ue,{"in-type":"number","in-label":"Y-Axis Min Tick","model-value":q.value,"onUpdate:modelValue":r[1]||(r[1]=k=>q.value=k)},null,8,["model-value"]),s(ue,{"in-type":"number","in-label":"Y-Axis Interval","model-value":C.value,"onUpdate:modelValue":r[2]||(r[2]=k=>C.value=k)},null,8,["model-value"]),s(ue,{"in-type":"number","in-label":"X-Axis Tick Amount","model-value":M.value,"onUpdate:modelValue":r[3]||(r[3]=k=>M.value=k)},null,8,["model-value"]),s(ue,{"in-type":"number","in-label":"Data Update Interval (Milisecond)","model-value":i.value,"onUpdate:modelValue":r[4]||(r[4]=k=>i.value=k)},null,8,["model-value"]),s(me,{"in-label":"Curve Type","model-value":V.value,"onUpdate:modelValue":r[5]||(r[5]=k=>V.value=k)},{default:g(()=>r[9]||(r[9]=[t("option",{value:"smooth"},"Smooth",-1),t("option",{value:"straight"},"Straight",-1),t("option",{value:"monotoneCubic"},"Monotone Cubic",-1),t("option",{value:"stepline"},"Stepline",-1),t("option",{value:"linestep"},"Linestep",-1)])),_:1},8,["model-value"]),t("div",rt,[t("label",null,[Me(t("input",{type:"checkbox","onUpdate:modelValue":r[6]||(r[6]=k=>L.value=k)},null,512),[[Ce,L.value]]),r[10]||(r[10]=te(" Show Y-Axis Minor Split "))]),t("label",null,[Me(t("input",{type:"checkbox","onUpdate:modelValue":r[7]||(r[7]=k=>w.value=k)},null,512),[[Ce,w.value]]),r[11]||(r[11]=te(" Show X-Axis Split "))])]),s(j,{onClick:P,"bt-type":"button","bt-disabled":!1},{default:g(()=>r[12]||(r[12]=[te("Dismiss")])),_:1})]),_:1},8,["mod-show","mod-title"]),t("div",{id:`chart${e.spotId}`,style:re({width:e.gridview?B(v).asideVisible?"680px":"600.5px":"100%"}),class:oe(["chartwrap",m.value?"chartwrap-paused":""])},[e.showUis?(b(),I("div",dt,[s(j,{onClick:Y,"bt-type":"button","bt-size":"small","bt-disabled":!1},{default:g(()=>[s(Z,{icon:"edit"})]),_:1}),s(j,{onClick:X,"bt-type":"button","bt-size":"small","bt-disabled":!1},{default:g(()=>[s(Z,{icon:m.value?"pause":"play"},null,8,["icon"])]),_:1}),S.value.length?(b(),Ee(j,{key:0,onClick:E,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:g(()=>[s(Z,{icon:"sliders"})]),_:1})):se("",!0),s(j,{onClick:$,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:g(()=>[s(Z,{icon:"close"})]),_:1})])):se("",!0),t("h4",{style:re({textAlign:"center",color:B(v).accentColor})},[t("b",ct,"SPOT: "+ae(e.chartName),1)],4),S.value.length?(b(),I("p",{key:1,style:{"text-align":"center","margin-bottom":"5px"},class:oe(B(v).textTheme)}," Displaying data for last "+ae(e.filterTime)+" hour(s) on "+ae(e.filterDate),3)):se("",!0),t("div",{ref_key:"chartRef",ref:c,style:{width:"100%",height:"600px"}},null,512)],14,ut)],64)}}}),mt={class:"cl-filter"},vt={key:0,class:"trunk-selector"},ft={style:{width:"500px",display:"flex",padding:"15px","flex-flow":"column"}},yt=["value"],ht={style:{width:"300px",display:"flex","flex-flow":"row nowrap","align-items":"center",gap:"0.5rem",position:"relative"}},gt=fe({__name:"ChartLayerView",setup(ne){const _=o(null),H=o(null),S=o(ze().getAllTrunk());o(Object.keys(S)),ve();const p=o("15"),v=o({xAxis:{type:"category",name:"Time",data:[],boundaryGap:0,nameLocation:"center",nameGap:30,axisLabel:{show:!0,rotate:45},axisLine:{show:!0,lineStyle:{type:"solid"}}},yAxis:{type:"value",min:0,max:550,interval:100,minorTick:{show:!0},scale:!0,nameLocation:"center",nameGap:50,boundaryGap:0,splitLine:{show:!0,lineStyle:{type:"solid",color:"#00000055"}},minorSplitLine:{show:!0,lineStyle:{type:"dashed",color:"#00000022"}},axisTick:{show:!0},name:"Pressure (PSI)",axisLine:{show:!0}}}),G=o({}),O=o(),c=()=>{H.value.setOption(v.value)};z(()=>_.value,()=>{H.value=be(_.value),c()});const u=o(!1),U=()=>{const T=O.value,e=S.value[T].name,F=S.value[T].spot;G.value[e]=F,u.value=!1,m()},m=()=>{Object.keys(G.value).forEach(T=>{for(let e=0;e<G.value[T].length;e++)G.value[T][e].id})};return(T,e)=>{const F=Se("font-awesome-icon");return b(),I(pe,null,[t("div",mt,[u.value?(b(),I("div",vt,[t("button",{onClick:e[0]||(e[0]=D=>u.value=!u.value),type:"button",class:"drwclose"},[s(F,{icon:"close"})]),t("div",ft,[e[6]||(e[6]=t("h5",null,[t("b",null,"Trunkline Preference")],-1)),s(me,{"in-label":"Trunkline",style:{width:"100%"},"model-value":O.value,"onUpdate:modelValue":e[1]||(e[1]=D=>O.value=D)},{default:g(()=>[e[4]||(e[4]=t("option",{selected:"",value:""},"Select Trunkline...",-1)),(b(!0),I(pe,null,ye(S.value,(D,q)=>(b(),I("option",{key:q,value:q},ae(D.name),9,yt))),128))]),_:1},8,["model-value"]),s(j,{onClick:U,"bt-disabled":!1,"bt-size":"small",style:{height:"fit-content",padding:"13px",width:"170px"}},{default:g(()=>e[5]||(e[5]=[te("Load into Chart")])),_:1})])])):se("",!0),e[8]||(e[8]=t("h3",null,[t("b",null,"Chart Layer")],-1)),t("div",ht,[s(me,{"in-label":"X-Axis Gap",style:{width:"100%"},"model-value":p.value,"onUpdate:modelValue":e[2]||(e[2]=D=>p.value=D)},{default:g(()=>e[7]||(e[7]=[t("option",{value:"5"},"5 Minutes",-1),t("option",{value:"10"},"10 Minutes",-1),t("option",{value:"15"},"15 Minutes",-1),t("option",{value:"30"},"30 Minutes",-1),t("option",{value:"45"},"45 Minutes",-1),t("option",{value:"60"},"1 Hour",-1)])),_:1},8,["model-value"]),s(j,{onClick:e[3]||(e[3]=D=>u.value=!u.value),"bt-disabled":!1,"bt-size":"small",style:{height:"fit-content","margin-top":"36px",padding:"13px"}},{default:g(()=>[s(F,{icon:"plus"})]),_:1})])]),t("div",{ref_key:"chart",ref:_,style:{width:"100%",height:"480px"}},null,512)],64)}}}),bt=Te(gt,[["__scopeId","data-v-1bfcb7cd"]]),St={key:0,class:"chart-layer"},wt={class:"chart-layer-inner"},xt={key:1,class:"live-window"},kt={key:2,class:"live-window"},It={key:3,class:"drw-wd"},Tt={class:"row"},Mt={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end"}},Ct={class:"col-md-12"},At={class:"col-md-12"},$t={style:{display:"flex","flex-flow":"row nowrap",gap:"0.4rem"}},Ot={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end"}},_t={class:"spot-reading-control"},Gt={class:"spot-basket"},Dt=["onClick","onDblclick"],Lt={key:0,style:{"margin-top":"1rem",display:"flex","flex-flow":"row nowrap","justify-content":"flex-end"}},Ae=1,$e=2,Oe=3,_e=4,Ge=5,De=6,Le=7,Pe=8,Ne=9,Ve=10,Re=11,Be=12,Ue=13,Fe=14,Kt=fe({__name:"MonitoringFol",setup(ne){const _=ve();_.asideToggle(!0);const H=o(null),S=o(!1),p=o(350),v=o(0),G=o(30),O=o(7e3),c=o(!1),u=o(""),U=o("smooth"),m=o(24),T=o(!1),e=o([]),F=o(0),D=d=>Object.keys(d),q=()=>{F.value<e.value.length&&setTimeout(()=>{F.value++,q()},1e3)},M=()=>{const d=new Date,a=d.getFullYear(),l=String(d.getMonth()+1).padStart(2,"0"),n=String(d.getDate()).padStart(2,"0"),le=`${a}-${l}-${n}`;u.value=le};ke(()=>{M(),q()});const C=()=>{T.value=!0},i=d=>{T.value=!1,e.value.some(l=>l[d.id])?_.notifyShowError("Selected spot already displayed"):e.value.push({[d.id]:d})},V=d=>{e.value=e.value.filter(a=>!a[d])};(()=>{e.value.push({1:{id:Ae,name:"MGS BJG",desc:"Bajubang",safemark:136,yMax:250}}),e.value.push({15:{id:15,name:"MGS BJG 2",desc:"Bajubang",safemark:136,yMax:250}}),e.value.push({2:{id:$e,name:"BOOSTER (MOS TPN)",desc:"Tempino",safemark:85,yMax:200}}),e.value.push({16:{id:16,name:"MGS BJG 3",desc:"Tempino",safemark:85,yMax:150}}),e.value.push({3:{id:Oe,name:"MGS KAS",desc:"Kenali Asam Atas",safemark:140,yMax:250}}),e.value.push({4:{id:_e,name:"MOS TPN",desc:"Tempino",safemark:25,yMax:150}}),e.value.push({5:{id:Ge,name:"GS 02 SGL",desc:"Sungai Gelam",safemark:287,yMax:400}}),e.value.push({6:{id:De,name:"GS 02 SGL (2)",desc:"Sungai Gelam",safemark:0,yMax:350}}),e.value.push({7:{id:Le,name:"GS 02 SGL (3)",desc:"Sungai Gelam",safemark:0,yMax:350}}),e.value.push({8:{id:Pe,name:"GS 01 KTT",desc:"Ketaling",safemark:242,yMax:350}}),e.value.push({9:{id:Ne,name:"MGS TPN",desc:"Tempino",safemark:43,yMax:150}}),e.value.push({10:{id:Ve,name:"0 KM SP BETUNG",desc:"Betung",safemark:0,yMax:250}}),e.value.push({11:{id:Re,name:"5.3 KM SIMP. PASAR GAJAH (5.3)",desc:"Pasar Gajah",safemark:0,yMax:200}}),e.value.push({12:{id:Be,name:"9.5 KM SANDTRAP II (4.2)",desc:"Sandtrap",safemark:0,yMax:150}}),e.value.push({13:{id:Ue,name:"13.8 KM MGS BJG (4.3)",desc:"Bajubang",safemark:0,yMax:100}}),e.value.push({14:{id:Fe,name:"MINIATUR (CIP)",desc:"Miniatur",safemark:0,yMax:350}})})();const w=o(!1),ie=()=>{w.value=!w.value},W=()=>{w.value=!1,_.notifyShow("Options has been applied")},de=d=>{const a=document.getElementById("chart"+d);a&&a.scrollIntoView({behavior:"smooth",block:"start"})},A=()=>{S.value=!S.value},K=d=>{e.value=e.value.filter(a=>!a[d])};let R=o([]);const f=d=>{R.value.push({id:d});const a=`spotdata-${d}`,l=document.querySelector(`.${a}`);l?(l.style.background="red",l.style.color="white"):console.warn(`Element dengan class ${a} gak ditemukan bro!`)},x=d=>{const a=`spotdata-${d}`,l=document.querySelector(`.${a}`);l?(l.style.background="#000",l.style.color="#fff"):console.warn(`Element dengan class ${a} gak ditemukan bro!`);const n=R.value.findIndex(le=>le.id===d);R.value.splice(n,1)},$=d=>{const a=Object.keys(d)[0];return d[a].id},E=()=>{c.value=!1},P=()=>{c.value=!0},X=d=>new Date(d).toISOString(),Y=async d=>new Promise(async(a,l)=>{try{const n={id:d,date:X(u.value),timespan:m.value+"",firstrequest:!1},le=await ge.post(he.baseEnd+"api/Data/getsingledata",n),J=le.data.map(we=>{const Ke=we.timestamp.replace(".",":").split("T")[1],[He,Je]=Ke.split(":");return`${He}:${Je}`}),je=le.data.map(we=>parseFloat(we.psiValue).toFixed(2));a({cats:J,series:je})}catch(n){l(n)}}),y=o(!1),r=d=>{c.value=!0,y.value=!0,setTimeout(()=>{Z(d)},3e3)},Z=async d=>{const a=be(H.value);await Y(d).then(l=>{const n=l.cats,le=l.series,J={graphic:[{type:"rect",shape:{x:0,y:0,width:a.getWidth(),height:a.getHeight()},style:{fill:"transparent"}}],backgroundColor:"#fff",tooltip:{trigger:"axis"},xAxis:{type:"category",data:n},yAxis:{type:"value",min:0,max:350},series:[{type:"line",data:le,color:n.map(()=>`${_.accentColor}`)}]};a.setOption(J),a.setOption({yAxis:{name:"Pressure (PSI)"}})})},k=()=>{y.value=!1},Q=o(!1),N=()=>{Q.value=!1},h=o(!1),ce=o(!1);return(d,a)=>{const l=Se("font-awesome-icon");return b(),I(pe,null,[ce.value?(b(),I("div",St,[t("div",wt,[t("button",{onClick:a[0]||(a[0]=n=>ce.value=!ce.value),type:"button",class:"drwclose"},[s(l,{icon:"close"})]),s(bt)])])):se("",!0),h.value?(b(),I("div",xt,[t("div",{class:oe(["live-window-inner",[`${B(_).mTheme}`]])},[t("button",{onClick:a[1]||(a[1]=n=>h.value=!h.value),type:"button",class:"drwclose"},[s(l,{icon:"close"})]),s(it,{"date-filter":u.value,"time-filter":m.value},null,8,["date-filter","time-filter"])],2)])):se("",!0),Q.value?(b(),I("div",kt,[t("div",{class:oe(["live-window-inner",[`${B(_).mTheme}`]])},[t("button",{type:"button",class:"drwclose",onClick:N},[s(l,{icon:"close"})]),s(at,{"date-filter":u.value,"time-filter":m.value},null,8,["date-filter","time-filter"])],2)])):se("",!0),y.value?(b(),I("div",It,[t("div",{class:"drw-inner",style:re({background:`${B(_).themeDarkColor}`})},[t("button",{onClick:k,type:"button",style:re({color:`${B(_).accentColor}`}),class:"drwclose"},[s(l,{icon:"close"})],4),t("div",{ref_key:"eCharts",ref:H,style:{width:"100%",height:"100%",position:"relative"}},null,512)],4)])):se("",!0),s(xe,{"mod-show":T.value,"onUpdate:modShow":a[2]||(a[2]=n=>T.value=n),"mod-title":"Select spot"},{default:g(()=>[s(ee,{onOnItemSelect:i,"item-id":Ae,"item-name":"MGS BJG","item-desc":"Bajubang","item-safemark":136}),s(ee,{onOnItemSelect:i,"item-id":$e,"item-name":"BOOSTER (MOS TPN)","item-desc":"Tempino","item-safemark":85}),s(ee,{onOnItemSelect:i,"item-id":Oe,"item-name":"MGS KAS","item-desc":"Kenali Asam Atas","item-safemark":140}),s(ee,{onOnItemSelect:i,"item-id":_e,"item-name":"MOS TPN","item-desc":"Tempino","item-safemark":25}),s(ee,{onOnItemSelect:i,"item-id":Ge,"item-name":"GS 02 SGL","item-desc":"Sungai Gelam","item-safemark":287}),s(ee,{onOnItemSelect:i,"item-id":De,"item-name":"GS 02 SGL (2)","item-desc":"Sungai Gelam","item-safemark":0}),s(ee,{onOnItemSelect:i,"item-id":Le,"item-name":"GS 02 SGL (3)","item-desc":"Sungai Gelam","item-safemark":0}),s(ee,{onOnItemSelect:i,"item-id":Pe,"item-name":"GS 01 KTT","item-desc":"Ketaling","item-safemark":242}),s(ee,{onOnItemSelect:i,"item-id":Ne,"item-name":"MGS TPN","item-desc":"Tempino","item-safemark":43}),s(ee,{onOnItemSelect:i,"item-id":Ve,"item-name":"0 KM SP BETUNG","item-desc":"Betung","item-safemark":0}),s(ee,{onOnItemSelect:i,"item-id":Re,"item-name":"5.3 KM SIMP. PASAR GAJAH (5.3)","item-desc":"Pasar Gajah","item-safemark":0}),s(ee,{onOnItemSelect:i,"item-id":Be,"item-name":"9.5 KM SANDTRAP II (4.2)","item-desc":"Sandtrap","item-safemark":0}),s(ee,{onOnItemSelect:i,"item-id":Ue,"item-name":"13.8 KM MGS BJG (4.3)","item-desc":"Bajubang","item-safemark":0}),s(ee,{onOnItemSelect:i,"item-id":Fe,"item-name":"MINIATUR (CIP)","item-desc":"Miniatur","item-safemark":0})]),_:1},8,["mod-show"]),s(xe,{"mod-show":w.value,"onUpdate:modShow":a[8]||(a[8]=n=>w.value=n),"mod-title":"Global Chart Preference"},{default:g(()=>[t("p",{style:re({color:B(_).accentColor})},"These parameters applies to all displayed charts",4),s(ue,{"in-label":"Y-Axis Max Tick Range","in-type":"number","model-value":p.value,"onUpdate:modelValue":a[3]||(a[3]=n=>p.value=n)},null,8,["model-value"]),s(ue,{"in-label":"Y-Axis Min Tick Range","in-type":"number","model-value":v.value,"onUpdate:modelValue":a[4]||(a[4]=n=>v.value=n)},null,8,["model-value"]),s(ue,{"in-label":"X-Axis Tick Amount","in-helper":"Greater value produces denser tick rates while lesser value loosen it but trims certain data in some points of time","in-type":"number","model-value":G.value,"onUpdate:modelValue":a[5]||(a[5]=n=>G.value=n)},null,8,["model-value"]),s(ue,{"in-label":"Data Update Interval (Milisecond)","in-helper":"Higher value increases the delay while lower value decreases it. Warning: Lower value require more resources and may significantly affect client-side performance","in-type":"number","model-value":O.value,"onUpdate:modelValue":a[6]||(a[6]=n=>O.value=n)},null,8,["model-value"]),s(me,{"in-label":"Curve Type","model-value":U.value,"onUpdate:modelValue":a[7]||(a[7]=n=>U.value=n)},{default:g(()=>a[14]||(a[14]=[t("option",{value:"smooth"},"Smooth",-1),t("option",{value:"straight"},"Straight",-1),t("option",{value:"monotoneCubic"},"Monotone Cubic",-1),t("option",{value:"stepline"},"Stepline",-1),t("option",{value:"linestep"},"Linestep",-1)])),_:1},8,["model-value"]),s(j,{onClick:W,"bt-type":"button","bt-disabled":!1},{default:g(()=>a[15]||(a[15]=[te("Dismiss")])),_:1})]),_:1},8,["mod-show"]),s(We,{"context-title":"Monitoring FOL"},{default:g(()=>[t("div",Tt,[t("div",Mt,[s(j,{onClick:ie,"bt-size":"small","bt-disabled":!1},{default:g(()=>[s(l,{icon:"sliders"}),a[16]||(a[16]=te(" Global Chart Preferences"))]),_:1})]),t("div",Ct,[s(ue,{"in-type":"date","in-label":"Date Filter","model-value":u.value,"onUpdate:modelValue":a[9]||(a[9]=n=>u.value=n)},null,8,["model-value"]),s(me,{"in-label":"Time Range Filter","model-value":m.value,"onUpdate:modelValue":a[10]||(a[10]=n=>m.value=n)},{default:g(()=>a[17]||(a[17]=[t("option",{value:"1"},"1 Hour",-1),t("option",{value:"3"},"3 Hours",-1),t("option",{value:"6"},"6 Hours",-1),t("option",{value:"12"},"12 Hours",-1),t("option",{value:"24"},"24 Hours",-1)])),_:1},8,["model-value"]),t("div",At,[t("div",$t,[s(j,{onClick:a[11]||(a[11]=n=>Q.value=!Q.value),"bt-size":"small","bt-disabled":!1},{default:g(()=>[s(l,{icon:"chart-line"}),a[18]||(a[18]=te(" Live Monitor"))]),_:1}),s(j,{"bt-size":"small",onClick:a[12]||(a[12]=n=>h.value=!h.value),"bt-disabled":!1},{default:g(()=>[s(l,{icon:"chart-line"}),a[19]||(a[19]=te("Trunkline Monitor"))]),_:1}),s(j,{"bt-size":"small",onClick:a[13]||(a[13]=n=>ce.value=!ce.value),"bt-disabled":!1},{default:g(()=>[s(l,{icon:"chart-line"}),a[20]||(a[20]=te("Chart Layer"))]),_:1})])]),t("div",Ot,[s(j,{onClick:C,"bt-type":"button","bt-disabled":!1,"bt-size":"small"},{default:g(()=>[s(l,{icon:"add"}),a[21]||(a[21]=te(" Add Chart"))]),_:1})]),t("div",_t,[s(j,{onClick:E,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:g(()=>[s(l,{icon:"play"}),a[22]||(a[22]=te(" Resume All"))]),_:1}),s(j,{onClick:P,"bt-disabled":!1,"bt-type":"button","bt-size":"small"},{default:g(()=>[s(l,{icon:"pause"}),a[23]||(a[23]=te(" Pause All"))]),_:1})]),t("div",Gt,[(b(!0),I(pe,null,ye(e.value,(n,le)=>(b(),I("span",{title:"Click to navigate to this spot",key:le,class:oe(["spot-data",`spotdata-${$(n)}`]),onClick:J=>de(Object.keys(n)[0]),onDblclick:J=>V(Object.keys(n)[0])},[(b(!0),I(pe,null,ye(D(n),J=>(b(),I("span",{key:J},ae(n[J].name+" - "+n[J].desc),1))),128))],42,Dt))),128))]),e.value.length?(b(),I("div",Lt,[s(j,{onClick:A,"bt-disabled":!1,"bt-size":"small"},{default:g(()=>[s(l,{icon:S.value?"grip-vertical":"expand"},null,8,["icon"]),te(" "+ae(S.value?"Grid chart view":"Full chart view"),1)]),_:1})])):se("",!0),t("div",{style:{},class:oe(S.value?"chart-basket-gridview":"chart-basket-fullview")},[(b(!0),I(pe,null,ye(e.value,(n,le)=>(b(),I("div",{key:le},[(b(!0),I(pe,null,ye(D(n),J=>(b(),I("div",{key:J,class:"chart-wrapper"},[le<F.value?(b(),Ee(pt,{key:0,onOnChartReady:q,id:"chart"+Object.keys(n)[0],"chart-name":n[J].name,"filter-date":u.value,"filter-time":m.value,"safe-mark":n[J].safemark,"spot-id":J,"curve-type":U.value,"y-max":n[J].yMax,"y-min":v.value,"tick-amount":G.value,"data-fetch-interval":O.value,gridview:S.value,"is-paused":c.value,onOnDrawingMode:r,onOnChartClose:K,onOnPause:f,onOnResume:x},null,8,["id","chart-name","filter-date","filter-time","safe-mark","spot-id","curve-type","y-max","y-min","tick-amount","data-fetch-interval","gridview","is-paused"])):se("",!0)]))),128))]))),128))],2)])])]),_:1})],64)}}});export{Kt as default};
