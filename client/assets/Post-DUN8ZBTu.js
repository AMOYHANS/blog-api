import{d as _,u as k,r as v,l as $,a as h,c as m,f as t,e as p,t as c,m as g,p as b,q as x,_ as I,o as y,n as C,g as P,i as S}from"./index-DusIQIs_.js";import{g as U}from"./index-DbGqQ7II.js";import{f as B}from"./index-CywiBz59.js";import{d as N}from"./dayjs.min-CxMP4GVf.js";import{l as T}from"./index-DH2sJWvk.js";const D=s=>(b("data-v-adf12fb1"),s=s(),x(),s),M={class:"container"},w=["src"],A={class:"divide"},V=D(()=>t("hr",{class:"hr"},null,-1)),j=["src"],q={class:"txt"},H={class:"name"},L={class:"desc"},O=_({__name:"Top",props:{userId:{type:Number,default:0}},setup(s){const n=k(),r=s,e=v(n.userInfo);$(async()=>{const o=await U(r.userId);e.value={...e.value,...B(o.data)}});const l=g();return(o,i)=>{var d,u;return h(),m("div",M,[t("img",{class:"homeBg",src:e.value.bgImg,alt:""},null,8,w),t("div",A,[V,t("img",{class:"avatar",src:(d=e.value)==null?void 0:d.avatar,onClick:i[0]||(i[0]=a=>p(l).push("/about"))},null,8,j),t("div",q,[t("span",H,c((u=e.value)==null?void 0:u.name),1),t("span",L,c(e.value.desc?e.value.desc:"该用户没有个性签名"),1)])])])}}}),as=I(O,[["__scopeId","data-v-adf12fb1"]]),z={class:"container"},E={class:"top"},R=["src"],F={class:"right"},G={class:"name"},J={class:"desc"},K={class:"num"},Q=["src"],W={class:"content"},X=_({__name:"Post",props:{post:{type:Object,required:!0}},setup(s){const{userId:n}=k(),r=g(),e=s,l=v(e.post.likeUsers.length),o=v(!1);y(()=>{for(let a=0;a<e.post.likeUsers.length;a++)if(e.post.likeUsers[a].likerId===n){o.value=!0;break}});const i=()=>{e.post.authorId===n?r.push("/home"):r.push(`/user/${e.post.authorId}`)},d=()=>{T(e.post.id,{userId:n}).then(a=>{a.status===201&&(o.value=!o.value,o.value?l.value+=1:l.value-=1)})},u="http://yxhe51918689.vicp.fun/default.webp";return(a,f)=>(h(),m("div",z,[t("div",E,[t("img",{class:"avatar",src:s.post.author.avatar?s.post.author.avatar:p(u),alt:"",onClick:i},null,8,R),t("div",F,[t("div",G,c(s.post.author.name),1),t("div",J,c(p(N)(s.post.createdAt).format("MM-DD HH:mm")),1)]),t("div",{class:C(["like",o.value?"liked":""]),onClick:d},[P(" ❤ "),t("div",K,c(l.value)+"人赞过",1)],2)]),s.post.pic?(h(),m("img",{key:0,class:"cover",src:s.post.pic,alt:""},null,8,Q)):S("",!0),t("span",{class:"title",onClick:f[0]||(f[0]=Y=>p(r).push(`/post/${s.post.id}`))},c(s.post.title),1),t("span",W,c(s.post.content),1)]))}}),cs=I(X,[["__scopeId","data-v-7c6293ef"]]);export{cs as P,as as T};
