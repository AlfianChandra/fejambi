<<<<<<<< HEAD:assets/AccountListView-SY9dpsiG.js
import{d as ce,e as o,C as ie,l as se,r as ve,o as v,c as p,g as a,f as Ee,w,a as d,q as M,t as P,m as U,h as F,u as C,n as N,F as R,z as Z,j as De,p as y,B as ae}from"./index-WX7TTTPk.js";import{_ as Ae}from"./MainWrapperView.vue_vue_type_style_index_0_lang-CNBZ5gR7.js";import{u as pe}from"./theme-C84dlgFN.js";import{_ as B}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-Df8yPA0p.js";import{a as I}from"./axios-BimPEqV4.js";import{_ as oe}from"./ModalEditorView.vue_vue_type_style_index_0_lang-8c2aTPCu.js";import{_ as L}from"./InputView.vue_vue_type_style_index_0_lang-XO7BhfDz.js";import{_ as de}from"./SelectView.vue_vue_type_style_index_0_lang-DH9-Zs0R.js";import{m as xe}from"./formValidator-OdL4bhgE.js";const $e={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end","margin-bottom":"0.4rem"}},Ue={class:"table-responsive"},Ie={key:0,style:{"text-align":"center"}},Pe=["checked","disabled"],Te=["disabled","checked","onChange"],Ve=["contenteditable","spellcheck","onInput","innerHTML"],Me={style:{gap:"0.3rem",display:"flex","flex-flow":"row wrap"}},Be=["disabled","onClick"],ze=ce({__name:"TableView",props:{headers:{},actions:{},rows:{},selection:{},liveEdit:{}},emits:["onBtnClick","onItemCheck","onEditableUpdate","onEditableDone"],setup(ne,{expose:ee,emit:te}){const T=te,h=pe(),S=ne,l=o(!1),q=(n,u)=>{T("onBtnClick",{data:n,action:u})},f=o([]),b=o([]),O=n=>{S.rows[n].locked||(f.value.includes(n)?f.value=f.value.filter(u=>u!==n):f.value.push(n),b.value=[],f.value.map(u=>{b.value.push(S.rows[u])}),T("onItemCheck",b.value))},le=n=>{const u=n.target.checked;f.value=u?S.rows.map((m,i)=>S.rows[i].locked?null:i).filter(m=>m!=null):[],b.value=[],f.value.map(m=>{b.value.push(S.rows[m])}),T("onItemCheck",b.value)},x=ie(()=>{const n=S.rows.filter(u=>!u.locked);return f.value.length===n.length}),Y=()=>{f.value=[],b.value=[],T("onItemCheck",b.value)},W=o(null);ee({clearSelection:Y});const D=o({}),$=(n,u,m)=>{const i=n.target.innerText;D.value[u.id]||(D.value[u.id]=[]);const g=D.value[u.id].findIndex(c=>c.field===m);g!==-1?D.value[u.id][g].content=i:D.value[u.id].push({content:i,field:m,origin:u})},_=()=>{l.value=!l.value};se(l,()=>{l.value||T("onEditableDone",D.value),Y(),D.value={}});const E=ie(()=>Object.keys(D.value).length>0);return(n,u)=>{const m=ve("font-awesome-icon");return v(),p(R,null,[a("div",$e,[n.liveEdit?(v(),Ee(B,{key:0,onClick:_,style:{width:"fit-content"},"bt-size":"small","bt-disabled":!1},{default:w(()=>[d(m,{icon:l.value?E.value?"check":"times":"edit"},null,8,["icon"]),M(" "+P(l.value?E.value?"Apply Changes":"Cancel":"Live Edit"),1)]),_:1})):U("",!0)]),a("div",Ue,[a("table",{style:F({border:`1px solid ${C(h).accentColor}`}),class:N(["tv-table",C(h).mTheme])},[a("thead",null,[a("tr",null,[n.selection?(v(),p("th",Ie,[a("input",{type:"checkbox",checked:x.value,disabled:l.value,onChange:le},null,40,Pe)])):U("",!0),(v(!0),p(R,null,Z(S.headers,(i,g)=>(v(),p("th",{key:g,class:N([C(h).textTheme,i.colClass]),style:F({...i.style,textTransform:"capitalize",border:`1px solid ${C(h).accentColor}`,color:C(h).textTheme})},[a("b",null,P(i.label),1)],6))),128)),n.actions?(v(),p("th",{key:1,class:N(C(h).textTheme)},[d(m,{icon:"edit"})],2)):U("",!0)])]),a("tbody",null,[(v(!0),p(R,null,Z(S.rows,(i,g)=>(v(),p("tr",{key:g},[n.selection?(v(),p("td",{key:0,style:F({border:`1px solid ${C(h).accentColor}`,textAlign:"center"})},[i.locked?U("",!0):(v(),p("input",{key:0,type:"checkbox",disabled:l.value,checked:f.value.includes(g),onChange:()=>O(g)},null,40,Te))],4)):U("",!0),(v(!0),p(R,null,Z(S.headers,(c,V)=>(v(),p("td",{class:N([C(h).textTheme,"tv-col"]),key:V,contenteditable:!i.locked&&c.editable?l.value:!1,spellcheck:!i.locked&&c.editable?!1:l.value,ref_for:!0,ref_key:"editableDiv",ref:W,onInput:G=>!i.locked&&c.editable?$(G,i,c.field):"",style:F({...c.style,border:`1px solid ${C(h).accentColor}`}),innerHTML:!i.locked&&c.editable&&l.value?`<span class='tv-editablecol'>${i[c.field]}</span>`:`${i[c.field]}`},null,46,Ve))),128)),n.actions?(v(),p("td",{key:1,style:F({border:`1px solid ${C(h).accentColor}`})},[a("div",Me,[(v(!0),p(R,null,Z(n.actions,(c,V)=>(v(),p("button",{disabled:i.locked,key:V,style:F({...c.danger?{color:"#eee"}:{background:C(h).accentColor,color:"#eee"},...i.locked?{opacity:.3}:{opacity:1}}),class:N(["tv-btn",c.danger?"tv-btn-danger":""]),type:"button",onClick:G=>q(i,c.action)},[d(m,{icon:c.icon},null,8,["icon"])],14,Be))),128))])],4)):U("",!0)]))),128))])],6)])],64)}}}),Fe={class:"row"},Le={class:"col-md-5"},Ne={class:"col-md-1"},Re={key:0,class:"row",style:{"margin-bottom":"1rem"}},qe={class:"col-md-12"},Oe={style:{display:"flex","flex-flow":"row wrap",gap:"0.5rem"}},Ye={style:{"font-size":"9px"}},je={key:0},He={key:1},lt=ce({__name:"AccountListView",setup(ne){const{vFullname:ee,vEmail:te,vPhone:T,vIsEmpty:h,checkValidation:S}=xe(),l=pe(),q=o([]),f=o(!1),b=o(""),O=o(!0),le=o(0),x=o(10),Y=o(0),W=o(0);De(async()=>{await $()});const D=o([{label:"#",field:"no",style:{textAlign:"center"}},{label:"ID",field:"id"},{label:"Name",field:"fullname",editable:!0,style:{textTransform:"capitalize",border:`1px solid ${l.accentColor}`}},{label:"E-Mail",field:"email",editable:!0},{label:"Phone",field:"phone",editable:!0},{label:"Role",field:"role",style:{textTransform:"capitalize"}}]),$=async()=>{try{const t={keyword:b.value,show:x.value},r=(await I.post(y.baseEnd+"api/user/getusers",t,{headers:y.headerSet})).data;Y.value=r.actualCount,W.value=r.resultCount;let s=1;q.value=r.payload.map(k=>({no:s++,id:k._id,fullname:k.profile.fullname,email:k.email,phone:k.profile.phone,role:k.level,locked:k.level==="webmaster"})),le.value=q.value.length}catch(t){const e=t.response.data;l.notifyShowError(e.message)}};se([b,x],()=>{$()});const _=o(""),E=o(""),n=o(""),u=o(""),m=o(""),i=o(""),g=o(""),c=o(""),V=o(""),G=[i,c,V,g];se([_,E,u,n],()=>{i.value=ee(_).message||"",g.value=te(E).message||"",V.value=h(u).message||"",c.value=T(n).message||"",O.value=S(G)},{immediate:!0});const me=t=>{localStorage.getItem("userid")===t.id?l.notifyAlertInfo("Edit Account","Please access 'Me' page to update your account","Dismiss",()=>{}):t.role==="webmaster"?l.notifyAlertError("Edit Account","Cannot modify other top level account","Dismiss",()=>{}):(f.value=!0,_.value=t.fullname,E.value=t.email,n.value=t.phone,u.value=t.role,m.value=t.id)},fe=async t=>{localStorage.getItem("userid")!==t.id?t.role!=="webmaster"?l.notifyConfirm("Delete Account",`Delete ${t.email}? Data related to this account will also be deleted`,"Delete","Cancel",async()=>{try{const r={id:t.id},k=(await I.post(y.baseEnd+"api/user/deleteuser",r,{headers:y.headerSet})).data;l.notifyShow(k.message),$()}catch(r){const s=r.response.data;l.notifyShowError(s.message)}},()=>{}):l.notifyAlertError("Delete","Cannot delete other top level account","Dismiss",()=>{}):l.notifyAlertError("Delete","Cannot delete yourself!","Dismiss",()=>{})},z=o(""),j=o(""),H=o(""),K=o(!1),be=async()=>{j.value!==localStorage.getItem("userid")?(K.value=!1,l.notifyConfirm(`${z.value}'s Password`,`Are you sure? You gotta tell ${z.value} about this action you're about to commit`,"Update","Cancel",async()=>{try{const t={id:j.value,password:H.value},r=(await I.post(y.baseEnd+"api/user/updateuser/password",t,{headers:y.headerSet})).data;l.notifyAlertSuccess("Success",r.message,"Okay",()=>{H.value="",z.value="",j.value=""})}catch(t){const e=t.response.data;l.notifyShowError(e.message),H.value="",z.value="",j.value=""}},()=>{})):(l.notifyShowError("Cannot update password. Acsess 'Me' to update your own password"),K.value=!1)},ye=t=>{const e=t.action,r=t.data;e==="edit"?me(r):e==="delete"?fe(r):e==="changepass"&&(r.id===localStorage.getItem("userid")?l.notifyShowError("Cannot update password. Acsess 'Me' to update your own password"):(K.value=!0,z.value=r.fullname,j.value=r.id))},he=async()=>{if(f.value=!1,O.value)l.notifyShow("Check for errors before proceed!");else try{const t={fullname:_.value,phone:n.value,email:E.value,level:u.value,id:m.value},r=(await I.post(y.baseEnd+"api/user/updateuser",t,{headers:y.headerSet})).data;l.notifyAlertSuccess("Success",r.message,"OK",()=>{_.value="",E.value="",n.value="",u.value="",m.value="",$()})}catch(t){const e=t.response.data;l.notifyAlertError("Failed",e.message,"Dismiss",()=>{_.value="",E.value="",n.value="",u.value="",m.value=""})}},A=o([]),we=t=>{A.value=t,console.log(t)},J=o(!1),Q=o(""),re=()=>{J.value=!J.value},ge=async()=>{re();try{const t={password:Q.value};(await I.post(y.baseEnd+"auth/action/protected",t,{headers:y.headerSet})).status===200&&ke()}catch(t){const e=t.response.data;l.notifyAlertError("Failed",e.message,"Dismiss",()=>{}),X(),A.value=[]}},ke=()=>{A.value.length>0&&l.notifyConfirm("Bulk Deletion","Are you really sure? All data related to these "+A.value.length+" selected account(s) will be removed. Action cannot be undone!","Yes","Cancel",async()=>{let t=[];for(let e=0;e<A.value.length;e++)t.push(A.value[e].id);try{const e={target:t},r=await I.post(y.baseEnd+"api/user/deleteuser/bulk",e,{headers:y.headerSet});l.notifyAlertSuccess("Success",r.data.message,"Done",()=>{$(),X(),A.value=[]})}catch(e){const r=e.response.data;l.notifyAlertError("Failed",r.message,"Dismiss",()=>{})}},()=>{X(),A.value=[]})},Ce=o([{icon:"lock",action:"changepass"},{icon:"trash",action:"delete",danger:!0}]),ue=o(),X=()=>{var t;(t=ue.value)==null||t.clearSelection()},Se=async t=>{let e=[];for(let r in t)e.push(t[r]);e.length>0&&l.notifyConfirm("Update data?","Are you sure want to update "+e.length+" accounts?","Yes","Cancel",async()=>{const r=t;try{l.notifyShow("Updating...");const k=(await I.post(y.baseEnd+"api/user/updateuser/bulk",r,{headers:y.headerSet})).data;l.notifyAlertSuccess("Success",k.message,"Okay",()=>{$()}),e.length=0}catch(s){const k=s.response.data;l.notifyAlertError("Failed",k.message,"Dismiss",()=>{}),e.length=0}},()=>{e.length=0})},_e=async()=>{try{const t=await I.get(y.baseEnd+"api/user/createdummy");l.notifyShow(t.data.message),$()}catch(t){l.notifyShowError(t.response.data.message)}};return(t,e)=>{const r=ve("font-awesome-icon");return v(),p(R,null,[d(Ae,{"context-title":"Account List","context-desc":"Manage registered Waterlo accounts here"},{default:w(()=>[a("div",Fe,[a("div",Le,[d(L,{"model-value":b.value,"onUpdate:modelValue":e[0]||(e[0]=s=>b.value=s),"in-label":"Search Account","in-placeholder":"Type the keyword","in-type":"text"},null,8,["model-value"])]),a("div",Ne,[d(de,{"model-value":x.value,"onUpdate:modelValue":e[1]||(e[1]=s=>x.value=s),"in-label":"Result"},{default:w(()=>e[11]||(e[11]=[a("option",{value:"1"},"1",-1),a("option",{value:"2"},"2",-1),a("option",{value:"5"},"5",-1),a("option",{value:"10"},"10",-1),a("option",{value:"30"},"30",-1),a("option",{value:"50"},"50",-1),a("option",{value:"100"},"100",-1),a("option",{value:"0"},"All",-1)])),_:1},8,["model-value"])])]),d(ze,{ref_key:"tableRef",ref:ue,"live-edit":!0,selection:!0,headers:D.value,rows:q.value,actions:Ce.value,onOnBtnClick:ye,onOnItemCheck:we,onOnEditableDone:Se},null,8,["headers","rows","actions"]),A.value.length?(v(),p("div",Re,[a("div",qe,[a("div",Oe,[d(B,{onClick:re,"bt-danger":!0,"bt-size":"small","bt-disabled":!1,"bt-type":"button"},{default:w(()=>[d(r,{icon:"trash"}),M(" Remove "+P(A.value.length)+" Selected",1)]),_:1}),d(B,{onClick:X,"bt-danger":!1,"bt-size":"small","bt-disabled":!1,"bt-type":"button"},{default:w(()=>[d(r,{icon:"times"})]),_:1})])])])):U("",!0),a("p",{class:N([C(l).textTheme])},[a("b",null,"Showing "+P(W.value)+" item(s) out of "+P(Y.value)+" actual items",1),e[13]||(e[13]=a("br",null,null,-1)),a("code",null,[a("span",Ye,[b.value?(v(),p("span",je,[e[12]||(e[12]=M("Showing result of ")),a("i",null,P(b.value+" "),1)])):U("",!0),x.value?(v(),p("span",He,P(x.value==0?"without result filter":"capped by "+x.value+" result items"),1)):U("",!0)])])],2),d(B,{style:{width:"150px"},onClick:_e,"bt-size":"small","bt-disabled":!1,"bt-type":"button"},{default:w(()=>e[14]||(e[14]=[M("Create Dummies")])),_:1})]),_:1}),d(oe,{"mod-show":J.value,"onUpdate:modShow":e[3]||(e[3]=s=>J.value=s),"mod-title":"Protected Action"},{default:w(()=>[a("form",{onSubmit:ae(ge,["prevent"])},[d(L,{"in-label":"Your Password","in-type":"password","in-required":!0,"model-value":Q.value,"onUpdate:modelValue":e[2]||(e[2]=s=>Q.value=s)},null,8,["model-value"]),d(B,{"bt-type":"submit","bt-disabled":!Q.value},{default:w(()=>e[15]||(e[15]=[M("Continue")])),_:1},8,["bt-disabled"])],32)]),_:1},8,["mod-show"]),d(oe,{"mod-title":`New Password for ${z.value}`,"mod-show":K.value,"onUpdate:modShow":e[5]||(e[5]=s=>K.value=s)},{default:w(()=>[a("form",{onSubmit:ae(be,["prevent"])},[d(L,{"in-label":"New Password","in-type":"password","in-required":!0,"model-value":H.value,"onUpdate:modelValue":e[4]||(e[4]=s=>H.value=s)},null,8,["model-value"]),d(B,{"bt-type":"submit","bt-disabled":!1},{default:w(()=>e[16]||(e[16]=[M("Update")])),_:1})],32)]),_:1},8,["mod-title","mod-show"]),d(oe,{"mod-title":`${_.value}`,"mod-show":f.value,"onUpdate:modShow":e[10]||(e[10]=s=>f.value=s)},{default:w(()=>[a("code",null,"ID: "+P(m.value),1),a("form",{onSubmit:ae(he,["prevent"])},[d(L,{"in-label":"Full Name","in-required":!0,"in-type":"text","model-value":_.value,"onUpdate:modelValue":e[6]||(e[6]=s=>_.value=s),"in-helper":i.value},null,8,["model-value","in-helper"]),d(L,{"in-label":"E-Mail","in-required":!0,"in-type":"text","model-value":E.value,"onUpdate:modelValue":e[7]||(e[7]=s=>E.value=s),"in-helper":g.value},null,8,["model-value","in-helper"]),d(L,{"in-label":"Phone","in-required":!0,"in-type":"text","model-value":n.value,"onUpdate:modelValue":e[8]||(e[8]=s=>n.value=s),"in-helper":c.value},null,8,["model-value","in-helper"]),d(de,{"in-helper":V.value,"in-label":"Level/Role","model-value":u.value,"onUpdate:modelValue":e[9]||(e[9]=s=>u.value=s),"in-required":!0},{default:w(()=>e[17]||(e[17]=[a("option",{value:""},"Select...",-1),a("option",{value:"webmaster"},"Webmaster",-1),a("option",{value:"user"},"User",-1),a("option",{value:"customer"},"Customer",-1)])),_:1},8,["in-helper","model-value"]),d(B,{"bt-disabled":O.value,"bt-type":"submit"},{default:w(()=>e[18]||(e[18]=[M("Update")])),_:1},8,["bt-disabled"])],32)]),_:1},8,["mod-title","mod-show"])],64)}}});export{lt as default};
========
import{d as ce,e as o,C as ie,l as se,r as ve,o as v,c as p,g as a,f as Ee,w,a as d,q as M,t as P,m as U,h as F,u as C,n as N,F as R,z as Z,j as De,p as y,B as ae}from"./index-DkutxhN8.js";import{_ as Ae}from"./MainWrapperView.vue_vue_type_style_index_0_lang-C7k__tM6.js";import{u as pe}from"./theme-BVDE6LBf.js";import{_ as B}from"./ButtonView.vue_vue_type_style_index_0_computed_true_lang-C-8Nx7-y.js";import{a as I}from"./axios-BimPEqV4.js";import{_ as oe}from"./ModalEditorView.vue_vue_type_style_index_0_lang-CG_wvN3V.js";import{_ as L}from"./InputView.vue_vue_type_style_index_0_lang-Di0lpbn7.js";import{_ as de}from"./SelectView.vue_vue_type_style_index_0_lang-CXuIjTfC.js";import{m as xe}from"./formValidator-OdL4bhgE.js";const $e={style:{display:"flex","flex-flow":"row nowrap","justify-content":"flex-end","margin-bottom":"0.4rem"}},Ue={class:"table-responsive"},Ie={key:0,style:{"text-align":"center"}},Pe=["checked","disabled"],Te=["disabled","checked","onChange"],Ve=["contenteditable","spellcheck","onInput","innerHTML"],Me={style:{gap:"0.3rem",display:"flex","flex-flow":"row wrap"}},Be=["disabled","onClick"],ze=ce({__name:"TableView",props:{headers:{},actions:{},rows:{},selection:{},liveEdit:{}},emits:["onBtnClick","onItemCheck","onEditableUpdate","onEditableDone"],setup(ne,{expose:ee,emit:te}){const T=te,h=pe(),S=ne,l=o(!1),q=(n,u)=>{T("onBtnClick",{data:n,action:u})},f=o([]),b=o([]),O=n=>{S.rows[n].locked||(f.value.includes(n)?f.value=f.value.filter(u=>u!==n):f.value.push(n),b.value=[],f.value.map(u=>{b.value.push(S.rows[u])}),T("onItemCheck",b.value))},le=n=>{const u=n.target.checked;f.value=u?S.rows.map((m,i)=>S.rows[i].locked?null:i).filter(m=>m!=null):[],b.value=[],f.value.map(m=>{b.value.push(S.rows[m])}),T("onItemCheck",b.value)},x=ie(()=>{const n=S.rows.filter(u=>!u.locked);return f.value.length===n.length}),Y=()=>{f.value=[],b.value=[],T("onItemCheck",b.value)},W=o(null);ee({clearSelection:Y});const D=o({}),$=(n,u,m)=>{const i=n.target.innerText;D.value[u.id]||(D.value[u.id]=[]);const g=D.value[u.id].findIndex(c=>c.field===m);g!==-1?D.value[u.id][g].content=i:D.value[u.id].push({content:i,field:m,origin:u})},_=()=>{l.value=!l.value};se(l,()=>{l.value||T("onEditableDone",D.value),Y(),D.value={}});const E=ie(()=>Object.keys(D.value).length>0);return(n,u)=>{const m=ve("font-awesome-icon");return v(),p(R,null,[a("div",$e,[n.liveEdit?(v(),Ee(B,{key:0,onClick:_,style:{width:"fit-content"},"bt-size":"small","bt-disabled":!1},{default:w(()=>[d(m,{icon:l.value?E.value?"check":"times":"edit"},null,8,["icon"]),M(" "+P(l.value?E.value?"Apply Changes":"Cancel":"Live Edit"),1)]),_:1})):U("",!0)]),a("div",Ue,[a("table",{style:F({border:`1px solid ${C(h).accentColor}`}),class:N(["tv-table",C(h).mTheme])},[a("thead",null,[a("tr",null,[n.selection?(v(),p("th",Ie,[a("input",{type:"checkbox",checked:x.value,disabled:l.value,onChange:le},null,40,Pe)])):U("",!0),(v(!0),p(R,null,Z(S.headers,(i,g)=>(v(),p("th",{key:g,class:N([C(h).textTheme,i.colClass]),style:F({...i.style,textTransform:"capitalize",border:`1px solid ${C(h).accentColor}`,color:C(h).textTheme})},[a("b",null,P(i.label),1)],6))),128)),n.actions?(v(),p("th",{key:1,class:N(C(h).textTheme)},[d(m,{icon:"edit"})],2)):U("",!0)])]),a("tbody",null,[(v(!0),p(R,null,Z(S.rows,(i,g)=>(v(),p("tr",{key:g},[n.selection?(v(),p("td",{key:0,style:F({border:`1px solid ${C(h).accentColor}`,textAlign:"center"})},[i.locked?U("",!0):(v(),p("input",{key:0,type:"checkbox",disabled:l.value,checked:f.value.includes(g),onChange:()=>O(g)},null,40,Te))],4)):U("",!0),(v(!0),p(R,null,Z(S.headers,(c,V)=>(v(),p("td",{class:N([C(h).textTheme,"tv-col"]),key:V,contenteditable:!i.locked&&c.editable?l.value:!1,spellcheck:!i.locked&&c.editable?!1:l.value,ref_for:!0,ref_key:"editableDiv",ref:W,onInput:G=>!i.locked&&c.editable?$(G,i,c.field):"",style:F({...c.style,border:`1px solid ${C(h).accentColor}`}),innerHTML:!i.locked&&c.editable&&l.value?`<span class='tv-editablecol'>${i[c.field]}</span>`:`${i[c.field]}`},null,46,Ve))),128)),n.actions?(v(),p("td",{key:1,style:F({border:`1px solid ${C(h).accentColor}`})},[a("div",Me,[(v(!0),p(R,null,Z(n.actions,(c,V)=>(v(),p("button",{disabled:i.locked,key:V,style:F({...c.danger?{color:"#eee"}:{background:C(h).accentColor,color:"#eee"},...i.locked?{opacity:.3}:{opacity:1}}),class:N(["tv-btn",c.danger?"tv-btn-danger":""]),type:"button",onClick:G=>q(i,c.action)},[d(m,{icon:c.icon},null,8,["icon"])],14,Be))),128))])],4)):U("",!0)]))),128))])],6)])],64)}}}),Fe={class:"row"},Le={class:"col-md-5"},Ne={class:"col-md-1"},Re={key:0,class:"row",style:{"margin-bottom":"1rem"}},qe={class:"col-md-12"},Oe={style:{display:"flex","flex-flow":"row wrap",gap:"0.5rem"}},Ye={style:{"font-size":"9px"}},je={key:0},He={key:1},lt=ce({__name:"AccountListView",setup(ne){const{vFullname:ee,vEmail:te,vPhone:T,vIsEmpty:h,checkValidation:S}=xe(),l=pe(),q=o([]),f=o(!1),b=o(""),O=o(!0),le=o(0),x=o(10),Y=o(0),W=o(0);De(async()=>{await $()});const D=o([{label:"#",field:"no",style:{textAlign:"center"}},{label:"ID",field:"id"},{label:"Name",field:"fullname",editable:!0,style:{textTransform:"capitalize",border:`1px solid ${l.accentColor}`}},{label:"E-Mail",field:"email",editable:!0},{label:"Phone",field:"phone",editable:!0},{label:"Role",field:"role",style:{textTransform:"capitalize"}}]),$=async()=>{try{const t={keyword:b.value,show:x.value},r=(await I.post(y.baseEnd+"api/user/getusers",t,{headers:y.headerSet})).data;Y.value=r.actualCount,W.value=r.resultCount;let s=1;q.value=r.payload.map(k=>({no:s++,id:k._id,fullname:k.profile.fullname,email:k.email,phone:k.profile.phone,role:k.level,locked:k.level==="webmaster"})),le.value=q.value.length}catch(t){const e=t.response.data;l.notifyShowError(e.message)}};se([b,x],()=>{$()});const _=o(""),E=o(""),n=o(""),u=o(""),m=o(""),i=o(""),g=o(""),c=o(""),V=o(""),G=[i,c,V,g];se([_,E,u,n],()=>{i.value=ee(_).message||"",g.value=te(E).message||"",V.value=h(u).message||"",c.value=T(n).message||"",O.value=S(G)},{immediate:!0});const me=t=>{localStorage.getItem("userid")===t.id?l.notifyAlertInfo("Edit Account","Please access 'Me' page to update your account","Dismiss",()=>{}):t.role==="webmaster"?l.notifyAlertError("Edit Account","Cannot modify other top level account","Dismiss",()=>{}):(f.value=!0,_.value=t.fullname,E.value=t.email,n.value=t.phone,u.value=t.role,m.value=t.id)},fe=async t=>{localStorage.getItem("userid")!==t.id?t.role!=="webmaster"?l.notifyConfirm("Delete Account",`Delete ${t.email}? Data related to this account will also be deleted`,"Delete","Cancel",async()=>{try{const r={id:t.id},k=(await I.post(y.baseEnd+"api/user/deleteuser",r,{headers:y.headerSet})).data;l.notifyShow(k.message),$()}catch(r){const s=r.response.data;l.notifyShowError(s.message)}},()=>{}):l.notifyAlertError("Delete","Cannot delete other top level account","Dismiss",()=>{}):l.notifyAlertError("Delete","Cannot delete yourself!","Dismiss",()=>{})},z=o(""),j=o(""),H=o(""),K=o(!1),be=async()=>{j.value!==localStorage.getItem("userid")?(K.value=!1,l.notifyConfirm(`${z.value}'s Password`,`Are you sure? You gotta tell ${z.value} about this action you're about to commit`,"Update","Cancel",async()=>{try{const t={id:j.value,password:H.value},r=(await I.post(y.baseEnd+"api/user/updateuser/password",t,{headers:y.headerSet})).data;l.notifyAlertSuccess("Success",r.message,"Okay",()=>{H.value="",z.value="",j.value=""})}catch(t){const e=t.response.data;l.notifyShowError(e.message),H.value="",z.value="",j.value=""}},()=>{})):(l.notifyShowError("Cannot update password. Acsess 'Me' to update your own password"),K.value=!1)},ye=t=>{const e=t.action,r=t.data;e==="edit"?me(r):e==="delete"?fe(r):e==="changepass"&&(r.id===localStorage.getItem("userid")?l.notifyShowError("Cannot update password. Acsess 'Me' to update your own password"):(K.value=!0,z.value=r.fullname,j.value=r.id))},he=async()=>{if(f.value=!1,O.value)l.notifyShow("Check for errors before proceed!");else try{const t={fullname:_.value,phone:n.value,email:E.value,level:u.value,id:m.value},r=(await I.post(y.baseEnd+"api/user/updateuser",t,{headers:y.headerSet})).data;l.notifyAlertSuccess("Success",r.message,"OK",()=>{_.value="",E.value="",n.value="",u.value="",m.value="",$()})}catch(t){const e=t.response.data;l.notifyAlertError("Failed",e.message,"Dismiss",()=>{_.value="",E.value="",n.value="",u.value="",m.value=""})}},A=o([]),we=t=>{A.value=t,console.log(t)},J=o(!1),Q=o(""),re=()=>{J.value=!J.value},ge=async()=>{re();try{const t={password:Q.value};(await I.post(y.baseEnd+"auth/action/protected",t,{headers:y.headerSet})).status===200&&ke()}catch(t){const e=t.response.data;l.notifyAlertError("Failed",e.message,"Dismiss",()=>{}),X(),A.value=[]}},ke=()=>{A.value.length>0&&l.notifyConfirm("Bulk Deletion","Are you really sure? All data related to these "+A.value.length+" selected account(s) will be removed. Action cannot be undone!","Yes","Cancel",async()=>{let t=[];for(let e=0;e<A.value.length;e++)t.push(A.value[e].id);try{const e={target:t},r=await I.post(y.baseEnd+"api/user/deleteuser/bulk",e,{headers:y.headerSet});l.notifyAlertSuccess("Success",r.data.message,"Done",()=>{$(),X(),A.value=[]})}catch(e){const r=e.response.data;l.notifyAlertError("Failed",r.message,"Dismiss",()=>{})}},()=>{X(),A.value=[]})},Ce=o([{icon:"lock",action:"changepass"},{icon:"trash",action:"delete",danger:!0}]),ue=o(),X=()=>{var t;(t=ue.value)==null||t.clearSelection()},Se=async t=>{let e=[];for(let r in t)e.push(t[r]);e.length>0&&l.notifyConfirm("Update data?","Are you sure want to update "+e.length+" accounts?","Yes","Cancel",async()=>{const r=t;try{l.notifyShow("Updating...");const k=(await I.post(y.baseEnd+"api/user/updateuser/bulk",r,{headers:y.headerSet})).data;l.notifyAlertSuccess("Success",k.message,"Okay",()=>{$()}),e.length=0}catch(s){const k=s.response.data;l.notifyAlertError("Failed",k.message,"Dismiss",()=>{}),e.length=0}},()=>{e.length=0})},_e=async()=>{try{const t=await I.get(y.baseEnd+"api/user/createdummy");l.notifyShow(t.data.message),$()}catch(t){l.notifyShowError(t.response.data.message)}};return(t,e)=>{const r=ve("font-awesome-icon");return v(),p(R,null,[d(Ae,{"context-title":"Account List","context-desc":"Manage registered Waterlo accounts here"},{default:w(()=>[a("div",Fe,[a("div",Le,[d(L,{"model-value":b.value,"onUpdate:modelValue":e[0]||(e[0]=s=>b.value=s),"in-label":"Search Account","in-placeholder":"Type the keyword","in-type":"text"},null,8,["model-value"])]),a("div",Ne,[d(de,{"model-value":x.value,"onUpdate:modelValue":e[1]||(e[1]=s=>x.value=s),"in-label":"Result"},{default:w(()=>e[11]||(e[11]=[a("option",{value:"1"},"1",-1),a("option",{value:"2"},"2",-1),a("option",{value:"5"},"5",-1),a("option",{value:"10"},"10",-1),a("option",{value:"30"},"30",-1),a("option",{value:"50"},"50",-1),a("option",{value:"100"},"100",-1),a("option",{value:"0"},"All",-1)])),_:1},8,["model-value"])])]),d(ze,{ref_key:"tableRef",ref:ue,"live-edit":!0,selection:!0,headers:D.value,rows:q.value,actions:Ce.value,onOnBtnClick:ye,onOnItemCheck:we,onOnEditableDone:Se},null,8,["headers","rows","actions"]),A.value.length?(v(),p("div",Re,[a("div",qe,[a("div",Oe,[d(B,{onClick:re,"bt-danger":!0,"bt-size":"small","bt-disabled":!1,"bt-type":"button"},{default:w(()=>[d(r,{icon:"trash"}),M(" Remove "+P(A.value.length)+" Selected",1)]),_:1}),d(B,{onClick:X,"bt-danger":!1,"bt-size":"small","bt-disabled":!1,"bt-type":"button"},{default:w(()=>[d(r,{icon:"times"})]),_:1})])])])):U("",!0),a("p",{class:N([C(l).textTheme])},[a("b",null,"Showing "+P(W.value)+" item(s) out of "+P(Y.value)+" actual items",1),e[13]||(e[13]=a("br",null,null,-1)),a("code",null,[a("span",Ye,[b.value?(v(),p("span",je,[e[12]||(e[12]=M("Showing result of ")),a("i",null,P(b.value+" "),1)])):U("",!0),x.value?(v(),p("span",He,P(x.value==0?"without result filter":"capped by "+x.value+" result items"),1)):U("",!0)])])],2),d(B,{style:{width:"150px"},onClick:_e,"bt-size":"small","bt-disabled":!1,"bt-type":"button"},{default:w(()=>e[14]||(e[14]=[M("Create Dummies")])),_:1})]),_:1}),d(oe,{"mod-show":J.value,"onUpdate:modShow":e[3]||(e[3]=s=>J.value=s),"mod-title":"Protected Action"},{default:w(()=>[a("form",{onSubmit:ae(ge,["prevent"])},[d(L,{"in-label":"Your Password","in-type":"password","in-required":!0,"model-value":Q.value,"onUpdate:modelValue":e[2]||(e[2]=s=>Q.value=s)},null,8,["model-value"]),d(B,{"bt-type":"submit","bt-disabled":!Q.value},{default:w(()=>e[15]||(e[15]=[M("Continue")])),_:1},8,["bt-disabled"])],32)]),_:1},8,["mod-show"]),d(oe,{"mod-title":`New Password for ${z.value}`,"mod-show":K.value,"onUpdate:modShow":e[5]||(e[5]=s=>K.value=s)},{default:w(()=>[a("form",{onSubmit:ae(be,["prevent"])},[d(L,{"in-label":"New Password","in-type":"password","in-required":!0,"model-value":H.value,"onUpdate:modelValue":e[4]||(e[4]=s=>H.value=s)},null,8,["model-value"]),d(B,{"bt-type":"submit","bt-disabled":!1},{default:w(()=>e[16]||(e[16]=[M("Update")])),_:1})],32)]),_:1},8,["mod-title","mod-show"]),d(oe,{"mod-title":`${_.value}`,"mod-show":f.value,"onUpdate:modShow":e[10]||(e[10]=s=>f.value=s)},{default:w(()=>[a("code",null,"ID: "+P(m.value),1),a("form",{onSubmit:ae(he,["prevent"])},[d(L,{"in-label":"Full Name","in-required":!0,"in-type":"text","model-value":_.value,"onUpdate:modelValue":e[6]||(e[6]=s=>_.value=s),"in-helper":i.value},null,8,["model-value","in-helper"]),d(L,{"in-label":"E-Mail","in-required":!0,"in-type":"text","model-value":E.value,"onUpdate:modelValue":e[7]||(e[7]=s=>E.value=s),"in-helper":g.value},null,8,["model-value","in-helper"]),d(L,{"in-label":"Phone","in-required":!0,"in-type":"text","model-value":n.value,"onUpdate:modelValue":e[8]||(e[8]=s=>n.value=s),"in-helper":c.value},null,8,["model-value","in-helper"]),d(de,{"in-helper":V.value,"in-label":"Level/Role","model-value":u.value,"onUpdate:modelValue":e[9]||(e[9]=s=>u.value=s),"in-required":!0},{default:w(()=>e[17]||(e[17]=[a("option",{value:""},"Select...",-1),a("option",{value:"webmaster"},"Webmaster",-1),a("option",{value:"user"},"User",-1),a("option",{value:"customer"},"Customer",-1)])),_:1},8,["in-helper","model-value"]),d(B,{"bt-disabled":O.value,"bt-type":"submit"},{default:w(()=>e[18]||(e[18]=[M("Update")])),_:1},8,["bt-disabled"])],32)]),_:1},8,["mod-title","mod-show"])],64)}}});export{lt as default};
>>>>>>>> parent of f45e513 (-):assets/AccountListView-u5dwlDPG.js
