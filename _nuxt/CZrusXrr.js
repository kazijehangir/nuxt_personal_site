import{W as a,L as w,q as y,$ as D,z as H,p as g,d as q,a0 as S,a1 as _,a2 as p}from"./BOIsKrQD.js";import $ from"./CRTifJUM.js";import b from"./CNpn0Nq1.js";import"./CtqFNfc1.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./B3o27EU7.js";import"./DD8fc-KM.js";import"./CcbNf96S.js";const d=(u,s=y())=>{const e=a(u),f=g();w(()=>a(u),(n=e)=>{if(!s.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),f.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),D(()=>H(t))},{immediate:!0})},x=q({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(u){const{contentHead:s}=g().public.content,e=S(),{tag:f,excerpt:m,path:n,query:t,head:r}=u,c=r===void 0?s:r,l={...t||{},path:n||(t==null?void 0:t.path)||_(y().path),find:"one"},C=(o,i)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return p(b,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:v})=>{var h;return c&&d(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:v,excerpt:m,...this.$attrs})}:({data:o})=>(c&&d(o),p($,{value:o,excerpt:m,tag:f,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):C("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||p("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||p("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),J=x;export{J as default};
