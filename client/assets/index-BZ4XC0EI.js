import{d as U,m as D,u as j,r as l,a as I,c as x,f as e,y as F,g as w,j as N,i as $,s as p,v,p as B,q as O,_ as k,b as A}from"./index-cWoudk2G.js";import{I as E,u as g}from"./index-BSvSO581.js";import{f as P}from"./index-CywiBz59.js";import{u as T}from"./index-Cw-u4ckk.js";import"./request-DIB7XEWZ.js";const u=i=>(B("data-v-24d16ca2"),i=i(),O(),i),q={class:"container"},z=u(()=>e("div",{class:"title"},"更新账户",-1)),M=["src"],G={title:"点击更换"},H={class:"bgEdit",title:"更换个人背景"},J={class:"inputItem"},K=u(()=>e("label",null,"用户名 ",-1)),Q={class:"inputItem"},W=u(()=>e("label",null,"邮箱 ",-1)),X={class:"inputItem"},Y=u(()=>e("label",null,"密码 ",-1)),Z={class:"inputItem"},ee=u(()=>e("label",null,"个性签名 ",-1)),te=u(()=>e("div",{class:"inputItem"},[e("button",{type:"submit"},"确认修改")],-1)),ae=U({__name:"AccountInfo",setup(i){const y=D(),{userInfo:d,userId:S,setUserInfo:R}=j(),m=l(!1),o=l(d.avatar),r=l(d.bgImg),_=l(),f=l(),c=window.URL||window.webkitURL,s=l({...d}),h=l([]),V=async n=>{n.preventDefault(),await Promise.all(h.value);const t=await T(S,P(s.value));t.status==200?(R(t.data),y.push("/home")):alert("更新失败")},L=n=>{_.value=n.target.files[0],o.value=c.createObjectURL(_.value);const t=new FormData;t.append("file",_.value);const a=g(t).then(b=>{o.value="http://localhost:3000/"+b.data,s.value.avatar=o.value,c.revokeObjectURL(o.value)});h.value.push(a)},C=n=>{f.value=n.target.files[0],r.value=c.createObjectURL(f.value);const t=new FormData;t.append("file",f.value);const a=g(t).then(b=>{r.value="http://localhost:3000/"+b.data,s.value.bgImg=r.value,c.revokeObjectURL(r.value)});h.value.push(a)};return(n,t)=>(I(),x("div",q,[z,e("form",{onSubmit:V},[e("div",{class:"avatar",style:F(`background-image: url(${r.value});`)},[e("img",{src:o.value,onClick:t[0]||(t[0]=a=>m.value=!0)},null,8,M),e("label",G,[w(" 更换头像 "),e("input",{type:"file",style:{display:"none"},onChange:L},null,32)]),e("label",H,[w(" ✍️ "),e("input",{type:"file",style:{display:"none"},onChange:C},null,32)]),m.value?(I(),N(E,{key:0,src:o.value,onImgClose:t[1]||(t[1]=a=>m.value=!1)},null,8,["src"])):$("",!0)],4),e("div",J,[K,p(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=a=>s.value.name=a),placeholder:"请输入用户名"},null,512),[[v,s.value.name]])]),e("div",Q,[W,p(e("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=a=>s.value.email=a),placeholder:"请输入邮箱",readonly:""},null,512),[[v,s.value.email]])]),e("div",X,[Y,p(e("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=a=>s.value.password=a),placeholder:"请输入密码"},null,512),[[v,s.value.password]])]),e("div",Z,[ee,p(e("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=a=>s.value.desc=a),placeholder:"请输入个性签名"},null,512),[[v,s.value.desc]])]),te],32)]))}}),se=k(ae,[["__scopeId","data-v-24d16ca2"]]),le={class:"container"},oe=U({__name:"index",setup(i){return(y,d)=>(I(),x("div",le,[A(se)]))}}),ce=k(oe,[["__scopeId","data-v-1f23dbdb"]]);export{ce as default};
