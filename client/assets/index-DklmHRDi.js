import{d as E,u as I,r as l,a as u,c,j as S,e as j,i as v,f as s,g,s as m,x as P,b as V,v as b,m as B,_ as L}from"./index-cWoudk2G.js";import{u as $,E as N}from"./post-DRJRo5u7.js";import{I as T,u as D}from"./index-BSvSO581.js";import{c as y}from"./index-MHjKn8wD.js";import"./request-DIB7XEWZ.js";const F={key:0,class:"imgBox"},O=["src"],A={class:"fileAndEmoji"},M={style:{display:"flex"}},W={class:"submit"},X=E({__name:"index",setup(q){const p=B(),{setWritePost:f}=$(),{userId:k}=I(),a=l(),w=window.URL||window.webkitURL,i=l(!1),r=l(""),n=l(""),C=l(),d=l(!1),h=t=>{a.value=t.target.files[0]},R=t=>{n.value+=t.innerText},U=t=>{t.target!==C.value&&(i.value=!1)},_=async()=>{if(a.value){const t=new FormData;t.append("file",a.value);const e=await D(t),o={title:r.value,content:n.value,pic:"http://localhost:3000/"+e.data,authorId:k},x=await y(o);f(x.data),alert("上传成功"),p.push("/post/"+x.data.id)}else{const t={title:r.value,content:n.value,authorId:k},e=await y(t);f(e.data),alert("上传成功"),p.push("/post/"+e.data.id)}};return(t,e)=>(u(),c("div",{class:"container",onClick:U},[a.value?(u(),c("div",F,[d.value?(u(),S(T,{key:0,src:j(w).createObjectURL(a.value),onImgClose:e[0]||(e[0]=o=>d.value=!1)},null,8,["src"])):v("",!0),s("img",{src:j(w).createObjectURL(a.value),alt:"",onClick:e[1]||(e[1]=o=>d.value=!0)},null,8,O),s("span",{onClick:e[2]||(e[2]=o=>a.value=void 0)},"X")])):v("",!0),s("div",A,[s("div",M,[s("label",{title:"封面",onClick:e[3]||(e[3]=o=>a.value=void 0)},[g(" 📸 "),a.value?v("",!0):(u(),c("input",{key:0,type:"file",onChange:h},null,32))]),s("label",{title:"emoji",ref_key:"emjRef",ref:C,onClick:e[4]||(e[4]=o=>i.value=!i.value)},[g("😉 "),m(V(N,{onEmojiClick:R},null,512),[[P,i.value]])],512)]),s("div",W,[m(s("input",{type:"",placeholder:"起个标题吧...",autofocus:"","onUpdate:modelValue":e[5]||(e[5]=o=>r.value=o)},null,512),[[b,r.value]]),s("button",{onClick:_},"提交")])]),m(s("textarea",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.value=o),placeholder:"写点什么...",id:"",cols:"30",rows:"10",onChange:e[7]||(e[7]=()=>{})},null,544),[[b,n.value]])]))}}),Q=L(X,[["__scopeId","data-v-159a38e6"]]);export{Q as default};
