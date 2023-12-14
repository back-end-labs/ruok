import{h as f,k as M,s as g,r as v,u as R,a as k,_ as C,b as L,c as U,j as e,e as P,Q as T,w as x}from"./index-3P4IBodk.js";import{u as J,S as p,L as N}from"./Loading-IRsZ1C94.js";import{S as _}from"./Sheet-8-9oYB1W.js";const A=f("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]),D=A;function q(t){return M("MuiCardContent",t)}f("MuiCardContent",["root"]);const F=["className","component","children","orientation","slots","slotProps"],E=()=>P({root:["root"]},q,{}),O=g("div")(({ownerState:t})=>({display:"flex",flexDirection:t.orientation==="horizontal"?"row":"column",flex:9999,zIndex:1,columnGap:"var(--Card-padding)",rowGap:"max(2px, calc(0.1875 * var(--Card-padding)))",padding:"var(--unstable_padding)",[`.${D.root} > &`]:{"--unstable_padding":"calc(var(--Card-padding) * 0.75) 0px"}})),W=g(O,{name:"JoyCardContent",slot:"Root",overridesResolver:(t,n)=>n.root})({}),z=v.forwardRef(function(n,r){const i=R({props:n,name:"JoyCardContent"}),{className:o,component:l="div",children:d,orientation:a="vertical",slots:h={},slotProps:j={}}=i,y=k(i,F),S=C({},y,{component:l,slots:h,slotProps:j}),w=C({},i,{component:l,orientation:a}),b=E(),[I,$]=L("root",{ref:r,className:U(b.root,o),elementType:W,externalForwardedProps:S,ownerState:w});return e.jsx(I,C({},$,{children:d}))}),G=z,s=({variant:t="outlined",title:n,description:r})=>e.jsx(T,{variant:t,children:e.jsxs(G,{children:[e.jsx(x,{level:"title-lg",children:n}),e.jsx(x,{level:"body-lg",children:r})]})}),Q="[getInstanceInfo]",V=()=>J({queryKey:[Q],cacheTime:0,queryFn:()=>fetch("http://localhost:8080/v1/instance").then(t=>t.json())}),m=1e6,u=60*m,c=60*u,B=({micro:t})=>{const[n,r]=v.useState("");return v.useEffect(()=>{let i=t,o=Math.floor(t/c),l=Math.floor((t-c*o)/u),d=Math.floor((t-(c*o+l*u))/m),a=`${o} h - ${l} m - ${d} s`;r(a);const h=setInterval(()=>{i+=m,o=Math.floor(i/c),l=Math.floor((i-c*o)/u),d=Math.floor((i-(c*o+l*u))/m),a=`${o} h - ${l} m - ${d} s`,r(a),console.log("tick",a)},1e3);return()=>clearInterval(h)},[]),e.jsx(s,{variant:"outlined",title:"Uptime",description:n})},Y=()=>{const{data:t,error:n,isLoading:r}=V();return n?e.jsx("div",{children:"Request Failed"}):e.jsx(e.Fragment,{children:e.jsxs(p,{spacing:4,children:[e.jsx(x,{style:{marginBottom:"1rem"},level:"h1",children:"Instance Info"}),!!n&&e.jsx(_,{style:{minWidth:"20rem",minHeight:"20rem",display:"flex",alignItems:"center",justifyContent:"center"},color:"danger",variant:"soft",children:e.jsx(x,{color:"danger",level:"body-lg",children:"Couldn't query for instance info"})}),r&&e.jsx(N,{}),t&&e.jsxs(p,{direction:"row",spacing:2,justifyContent:"center",alignItems:"stretch",children:[e.jsxs(p,{direction:"column",spacing:2,children:[e.jsx(s,{variant:"outlined",title:"Application Name",description:(t==null?void 0:t.appName)||"unknown"}),e.jsx(s,{variant:"outlined",title:"Database Connected",description:`${t==null?void 0:t.dbConnected}`}),e.jsx(s,{variant:"outlined",title:"Database URL",description:(t==null?void 0:t.dbURL)||"unknown"}),e.jsx(s,{variant:"outlined",title:"TLS Active",description:`${t==null?void 0:t.tlsActive}`}),e.jsx(s,{variant:"outlined",title:"TLS Version",description:(t==null?void 0:t.tlsVersion)||"unknown"})]}),e.jsxs(p,{direction:"column",spacing:2,children:[e.jsx(s,{variant:"outlined",title:"Started At",description:`${new Date((t==null?void 0:t.startedAtMicro)/1e3).toLocaleString()}`||"unknown"}),e.jsx(B,{micro:(t==null?void 0:t.upTimeMicro)||0}),e.jsx(s,{variant:"outlined",title:"Claimed Jobs",description:`${t==null?void 0:t.claimedJobs}`||"unknown"}),e.jsx(s,{variant:"outlined",title:"Max Jobs",description:`${t==null?void 0:t.maxJobs}`||"unknown"})]})]})]})})};export{Y as default};
