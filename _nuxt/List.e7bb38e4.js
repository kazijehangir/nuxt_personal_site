import{d as r,Z as l,G as u,L as n,a8 as p,k as _}from"./entry.c34b60ab.js";import{_ as m}from"./MDCSlot.f1914d02.js";import{u as f,f as d}from"./node.676c5e99.js";const y=()=>({unwrap:f,flatUnwrap:d}),h={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},g=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:e=>["primary","info","success","warning","danger"].includes(e)}},setup(e){const o=l(),{flatUnwrap:s,unwrap:a}=y(),i=u(()=>e.icon||h[e.type]);return()=>{const c=s((o.default&&o.default())??[],["ul"]).map(t=>a(t,["li"]));return n("ul",c.map(t=>n("li",[n("span",{class:`list-icon ${e.type}`},n(p,{name:i.value,class:"icon"})),n("span",n(m,{use:()=>t}))])))}}});const k=_(g,[["__scopeId","data-v-8307691e"]]);export{k as default};
