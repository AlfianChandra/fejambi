import{u}from"./theme-GC-kKod8.js";import{d as p,r as f,o as s,c as i,g as a,t as m,h as r,u as t,n as y,s as g,a as V,q as b,m as v}from"./index-CQxd4T_Y.js";const h={class:"form-group",style:{"margin-bottom":"0.5rem","margin-top":"1.5rem"}},C={style:{position:"relative",overflow:"clip","border-radius":"5px"}},S=["required","value"],k=p({__name:"SelectView",props:{inLabel:{type:String,required:!0},inHelper:{type:String},modelValue:{},inRequired:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:_}){const o=u();return(l,n)=>{const c=f("font-awesome-icon");return s(),i("div",h,[a("label",{class:"flabel",style:r({color:`${t(o).accentColor}`})},m(e.inLabel),5),a("div",C,[a("select",{onInput:n[0]||(n[0]=d=>l.$emit("update:modelValue",d.target.value)),required:e.inRequired,class:y(["sinput",t(o).mTheme,t(o).textTheme]),style:r({border:`1px solid ${t(o).accentColor}`}),value:e.modelValue},[g(l.$slots,"default")],46,S)]),e.inHelper?(s(),i("span",{key:0,style:r([{color:t(o).accentColor},{"font-size":"11px",display:"block","margin-top":"0.2rem"}])},[V(c,{icon:"info-circle"}),b(" "+m(e.inHelper),1)],4)):v("",!0)])}}});export{k as _};