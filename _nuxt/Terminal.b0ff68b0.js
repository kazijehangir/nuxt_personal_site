import{d as m,aj as v,r as y,G as f,b as s,c as n,H as c,e,g as d,F as k,ah as C,t as g,k as x}from"./entry.c34b60ab.js";const b={key:0,class:"copied"},h={class:"window"},B={class:"content"},T={key:1,class:"prompt"},w=m({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(l){const a=l,{copy:p}=v(),o=y("init"),i=f(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{p(i.value.join(`
`)).then(()=>{o.value="copied",setTimeout(()=>{o.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,t)=>(s(),n("div",{class:"terminal",onClick:_},[c(o)==="copied"?(s(),n("div",b,t[0]||(t[0]=[e("div",{class:"scrim"},null,-1),e("div",{class:"content"}," Copied! ",-1)]))):d("",!0),t[2]||(t[2]=e("div",{class:"header"},[e("div",{class:"controls"},[e("div"),e("div"),e("div")]),e("div",{class:"title"}," Bash ")],-1)),e("div",h,[(s(!0),n(k,null,C(c(i),r=>(s(),n("span",{key:r,class:"line"},[t[1]||(t[1]=e("span",{class:"sign"},"$",-1)),e("span",B,g(r),1)]))),128))]),c(o)!=="copied"?(s(),n("div",T," Click to copy ")):d("",!0)]))}});const F=x(w,[["__scopeId","data-v-02285ce4"]]);export{F as default};
