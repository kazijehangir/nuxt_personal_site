import _ from"./ButtonLink.b6e28a70.js";import f from"./Terminal.b0ff68b0.js";import y from"./VideoPlayer.58ee30f3.js";import{r as n}from"./slot.28cc3999.js";import{d as k,b as o,c as r,e as s,g as a,F as h,V as i,w as v,f as d,t as l,X as $,k as B}from"./entry.c34b60ab.js";import"./node.676c5e99.js";import"./NuxtImg.vue.fed88a77.js";const w={class:"block-hero"},g={class:"layout"},b={class:"content"},H={key:0,class:"announce"},S={class:"title"},V={class:"description"},q={key:1,class:"extra"},x={class:"actions"},A=["href"],C={class:"support"},N=k({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,c)=>{const u=_,p=f,m=y;return o(),r("section",w,[s("div",g,[s("div",b,[t.$slots.announce?(o(),r("p",H,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):a("",!0),s("h1",S,[n(t.$slots,"title",{unwrap:"p"},()=>[c[0]||(c[0]=d(" Hero Title "))],!0)]),s("p",V,[n(t.$slots,"description",{unwrap:"p"},()=>[c[1]||(c[1]=d(" Hero default description. "))],!0)]),t.$slots.extra?(o(),r("div",q,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):a("",!0),s("div",x,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),r(h,{key:1},[e.cta?(o(),i(u,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:v(()=>[d(l(e.cta[0]),1)]),_:1},8,["href"])):a("",!0),e.secondary?(o(),r("a",{key:1,href:e.secondary[1],class:"secondary"},l(e.secondary[0]),9,A)):a("",!0)],64))])]),s("div",C,[$(t.$slots,"support",{},()=>[e.snippet?(o(),i(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),i(m,{key:1,src:e.video},null,8,["src"])):a("",!0)],!0)])])])}}});const P=B(N,[["__scopeId","data-v-fe8b6dea"]]);export{P as default};
