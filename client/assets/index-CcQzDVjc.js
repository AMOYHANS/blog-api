import{d as i,r as a,a as m,c as d,f as p,_ as u}from"./index-DusIQIs_.js";import{a as _}from"./request-Lpnrrob0.js";const f=["src","width"],g=i({__name:"ImgShow",props:{src:{type:String,required:!0}},emits:["imgClose"],setup(t,{emit:r}){const c=r,o=a(),s=a(1),l=e=>{e.preventDefault(),s.value*=e.deltaY<0?1.1:.9},n=e=>{e.target!==o.value&&c("imgClose")};return(e,h)=>(m(),d("div",{class:"modal",onWheel:l,onClick:n},[p("img",{ref_key:"imgRef",ref:o,src:t.src,width:`${s.value*50}%`,alt:""},null,8,f)],32))}}),C=u(g,[["__scopeId","data-v-b52ab267"]]),S=t=>_.post("/upload",t);export{C as I,S as u};