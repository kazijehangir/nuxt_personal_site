import{d as m,r,aj as B,ak as k,x,b as s,c as u,e as _,h as C,w,V as f,H as y,T as $,n as v,a8 as S,k as g,t as P,g as V,X as z}from"./entry.c34b60ab.js";const I={class:"icon-wrapper"},N=m({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=r(),{copy:t}=B();k(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=x(),o=r("init"),h=b=>{t(n.content).then(()=>{o.value="copied"}).catch(l=>{console.warn("Couldn't copy to clipboard!",l)})};return(b,l)=>{const p=S;return s(),u("button",{ref_key:"copyButtonRef",ref:a,class:v([(e.show||o.value==="copied")&&"show"]),onClick:h},[l[0]||(l[0]=_("span",{class:"sr-only"},"Copy to clipboard",-1)),_("span",I,[C($,{name:"fade"},{default:w(()=>{var i,d;return[o.value==="copied"?(s(),f(p,{key:0,name:(i=y(c).copyButton)==null?void 0:i.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),f(p,{key:1,name:(d=y(c).copyButton)==null?void 0:d.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const T=g(N,[["__scopeId","data-v-ef181be2"]]),A={key:0,class:"filename"},M=m({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=r(!1);return(a,t)=>{const c=T;return s(),u("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),u("span",A,P(e.filename),1)):V("",!0),z(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const j=g(M,[["__scopeId","data-v-2cbf927b"]]);export{j as default};
