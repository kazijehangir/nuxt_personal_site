const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Br8hNQ7Y.js","./BOIsKrQD.js","./entry.DSrKHs56.css","./CcbNf96S.js","./B3o27EU7.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{p,a4 as o,_ as m}from"./BOIsKrQD.js";import{q as f,w as s,e as g,s as c,j as h}from"./CcbNf96S.js";import{u as v}from"./B3o27EU7.js";const $=async t=>{const{content:n}=p().public;typeof(t==null?void 0:t.params)!="function"&&(t=f(t));const a=t.params(),i=n.experimental.stripQueryParameters?s(`/navigation/${`${o(a)}.${n.integrity}`}/${g(a)}.json`):s(`/navigation/${o(a)}.${n.integrity}.json`);if(c())return(await m(()=>import("./Br8hNQ7Y.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(r=>r.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:h(a),previewToken:v().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};export{$ as f};
