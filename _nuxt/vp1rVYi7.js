import{_ as m}from"./DP3ahE6c.js";import{d as f,G as i,r as _,c as o,e as r,H as e,V as k,h as u,F as v,ah as h,f as g,n as w,k as b}from"./B2qqbMpx.js";const x={key:1,class:"loaded"},B=["poster"],V=["src"],C=["src","type"],$=["autoplay","src"],N=f({__name:"VideoPlayer",props:{poster:{type:String,default:""},src:{type:String,default:""},sources:{type:Array,default:()=>[]},autoplay:{type:Boolean,default:!1}},setup(n){const s=n,a=i(()=>{if(s.src&&s.src.includes("youtube.com/watch")){const t=s.src.match(/\?v=([^&]*)/);return{name:"youtube",src:`https://www.youtube-nocookie.com/embed/${(t==null?void 0:t[1])||""}?autoplay=1`,poster:s.poster||`https://i3.ytimg.com/vi/${(t==null?void 0:t[1])||""}/hqdefault.jpg`}}}),p=_(!1);if(!s.src&&!s.sources.length)throw new Error("VideoPlayer: you need to provide either `src` or `sources` props");const d=i(()=>{var t,c;return s.src||((c=(t=s.sources)==null?void 0:t[0])==null?void 0:c.src)||!1});return(t,c)=>{const y=m;return o(),r("div",{class:w(["video-player",{loaded:e(p)}])},[(e(a)?e(a).poster:n.poster)?(o(),k(y,{key:0,src:e(a)?e(a).poster:n.poster},null,8,["src"])):u("",!0),e(p)?(o(),r("div",x,[e(a)?e(a).name==="youtube"?(o(),r("iframe",{key:1,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true",autoplay:n.autoplay,src:e(a).src},null,8,$)):u("",!0):(o(),r("video",{key:0,poster:n.poster,controls:"",autoplay:""},[e(d)?(o(),r("source",{key:0,src:e(d)},null,8,V)):u("",!0),(o(!0),r(v,null,h(n.sources,l=>(o(),r("source",{key:l.src||l,src:l.src||l,type:l.type},null,8,C))),128))],8,B))])):u("",!0),e(p)?u("",!0):(o(),r("div",{key:2,class:"play-button",onClick:c[0]||(c[0]=l=>p.value=!0)},c[1]||(c[1]=[g("button",null,null,-1)])))],2)}}}),I=b(N,[["__scopeId","data-v-cfa5f079"]]);export{I as default};
