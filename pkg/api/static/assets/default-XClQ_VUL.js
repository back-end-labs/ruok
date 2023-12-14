import{r as a,s as m,_ as o,u as q,a as U,b as g,c as Z,j as s,i as ee,d as A,e as G,g as De,f as ze,T as ue,h as me,k as ve,l as le,m as Pe,n as Be,o as Ae,p as N,q as T,G as xe,t as fe,B as R,v as Ne,w as te,x as Te,O as Me}from"./index-3P4IBodk.js";import{S as ge}from"./Sheet-8-9oYB1W.js";import{l as He,G as Fe,C as Ee,R as We,W as Je,N as ce,g as Oe,I as he,a as Ve,L as Ue,b as qe}from"./IconButton-Ruaqmnt3.js";const Ge=a.createContext(void 0),Xe=Ge,Ye=["component","className","children","nested","sticky","variant","color","startAction","endAction","role","slots","slotProps"],we=t=>{const{sticky:e,nested:r,nesting:n,variant:l,color:i}=t,c={root:["root",r&&"nested",n&&"nesting",e&&"sticky",i&&`color${A(i)}`,l&&`variant${A(l)}`],startAction:["startAction"],endAction:["endAction"]};return G(c,Oe,{})},Ke=m("li")(({theme:t,ownerState:e})=>{var r;return[!e.nested&&{"--ListItemButton-marginInline":"calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))","--ListItemButton-marginBlock":"calc(-1 * var(--ListItem-paddingY))",alignItems:"center",gap:"var(--ListItem-gap)",marginInline:"var(--ListItem-marginInline)"},e.nested&&{"--NestedList-marginRight":"calc(-1 * var(--ListItem-paddingRight))","--NestedList-marginLeft":"calc(-1 * var(--ListItem-paddingLeft))","--NestedListItem-paddingLeft":"calc(var(--ListItem-paddingLeft) + var(--List-nestedInsetStart))","--ListItemButton-marginBlock":"0px","--ListItemButton-marginInline":"calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))","--ListItem-marginInline":"calc(-1 * var(--ListItem-paddingLeft)) calc(-1 * var(--ListItem-paddingRight))",flexDirection:"column"},o({"--unstable_actionRadius":"calc(var(--ListItem-radius) - var(--variant-borderWidth, 0px))"},e.startAction&&{"--unstable_startActionWidth":"2rem"},e.endAction&&{"--unstable_endActionWidth":"2.5rem"},{boxSizing:"border-box",borderRadius:"var(--ListItem-radius)",display:"var(--_ListItem-display)","&:not([hidden])":{"--_ListItem-display":"var(--_List-markerDisplay, flex)"},flex:"none",listStyleType:"var(--_List-markerType, disc)",position:"relative",paddingBlockStart:e.nested?0:"var(--ListItem-paddingY)",paddingBlockEnd:e.nested?0:"var(--ListItem-paddingY)",paddingInlineStart:"var(--ListItem-paddingLeft)",paddingInlineEnd:"var(--ListItem-paddingRight)"},e["data-first-child"]===void 0&&o({},e.row?{marginInlineStart:"var(--List-gap)"}:{marginBlockStart:"var(--List-gap)"}),e.row&&e.wrap&&{marginInlineStart:"var(--List-gap)",marginBlockStart:"var(--List-gap)"},{minBlockSize:"var(--ListItem-minHeight)"},e.sticky&&{position:"sticky",top:"var(--ListItem-stickyTop, 0px)",zIndex:1,background:`var(--ListItem-stickyBackground, ${t.vars.palette.background.body})`},{[`.${He.nested} > &`]:{"--_ListItem-display":"flex"}}),(r=t.variants[e.variant])==null?void 0:r[e.color]]}),Qe=m(Ke,{name:"JoyListItem",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Ze=m("div",{name:"JoyListItem",slot:"StartAction",overridesResolver:(t,e)=>e.startAction})(({ownerState:t})=>({display:"inherit",position:"absolute",top:t.nested?"calc(var(--ListItem-minHeight) / 2)":"50%",left:0,transform:"translate(var(--ListItem-startActionTranslateX), -50%)",zIndex:1})),et=m("div",{name:"JoyListItem",slot:"StartAction",overridesResolver:(t,e)=>e.startAction})(({ownerState:t})=>({display:"inherit",position:"absolute",top:t.nested?"calc(var(--ListItem-minHeight) / 2)":"50%",right:0,transform:"translate(var(--ListItem-endActionTranslateX), -50%)"})),ye=a.forwardRef(function(e,r){const n=q({props:e,name:"JoyListItem"}),l=a.useContext(Fe),i=a.useContext(Ee),c=a.useContext(We),p=a.useContext(Je),v=a.useContext(ce),{component:L,className:b,children:h,nested:u=!1,sticky:x=!1,variant:f="plain",color:M="neutral",startAction:C,endAction:$,role:j,slots:k={},slotProps:H={}}=n,F=U(n,Ye),[E,S]=a.useState(""),[d,I]=(i==null?void 0:i.split(":"))||["",""],y=L||(d&&!d.match(/^(ul|ol|menu)$/)?"div":void 0);let D=l==="menu"?"none":void 0;i&&(D={menu:"none",menubar:"none",group:"presentation"}[I]),j&&(D=j);const z=o({},n,{sticky:x,startAction:C,endAction:$,row:c,wrap:p,variant:f,color:M,nesting:v,nested:u,component:y,role:D}),W=we(z),P=o({},F,{component:y,slots:k,slotProps:H}),[X,Y]=g("root",{additionalProps:{role:D},ref:r,className:Z(W.root,b),elementType:Qe,externalForwardedProps:P,ownerState:z}),[w,B]=g("startAction",{className:W.startAction,elementType:Ze,externalForwardedProps:P,ownerState:z}),[J,O]=g("endAction",{className:W.endAction,elementType:et,externalForwardedProps:P,ownerState:z});return s.jsx(Xe.Provider,{value:S,children:s.jsx(ce.Provider,{value:u?E||!0:!1,children:s.jsxs(X,o({},Y,{children:[C&&s.jsx(w,o({},B,{children:C})),a.Children.map(h,(_,K)=>a.isValidElement(_)?a.cloneElement(_,o({},K===0&&{"data-first-child":""},ee(_,["ListItem"])&&{component:_.props.component||"div"})):_),$&&s.jsx(J,o({},O,{children:$}))]}))})})});ye.muiName="ListItem";const tt=ye;function st(t){return De("MuiBreadcrumbs",t)}ze("MuiBreadcrumbs",["root","ol","li","separator","sizeSm","sizeMd","sizeLg"]);const ot=["children","className","size","separator","component","slots","slotProps"],rt=t=>{const{size:e}=t,r={root:["root",e&&`size${A(e)}`],li:["li"],ol:["ol"],separator:["separator"]};return G(r,st,{})},nt=m("nav",{name:"JoyBreadcrumbs",slot:"Root",overridesResolver:(t,e)=>e.root})(({theme:t,ownerState:e})=>o({},e.size==="sm"&&{"--Icon-fontSize":t.vars.fontSize.lg,gap:"var(--Breadcrumbs-gap, 0.25rem)",padding:"0.5rem"},e.size==="md"&&{"--Icon-fontSize":t.vars.fontSize.xl,gap:"var(--Breadcrumbs-gap, 0.375rem)",padding:"0.75rem"},e.size==="lg"&&{"--Icon-fontSize":t.vars.fontSize.xl2,gap:"var(--Breadcrumbs-gap, 0.5rem)",padding:"1rem"},t.typography[`body-${e.size}`])),at=m("ol",{name:"JoyBreadcrumbs",slot:"Ol",overridesResolver:(t,e)=>e.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",gap:"inherit",padding:0,margin:0,listStyle:"none"}),it=m("li",{name:"JoyBreadcrumbs",slot:"Li",overridesResolver:(t,e)=>e.li})({display:"flex",alignItems:"center"}),lt=m("li",{name:"JoyBreadcrumbs",slot:"Separator",overridesResolver:(t,e)=>e.separator})({display:"flex",userSelect:"none"}),ct=a.forwardRef(function(e,r){const n=q({props:e,name:"JoyBreadcrumbs"}),{children:l,className:i,size:c="md",separator:p="/",component:v,slots:L={},slotProps:b={}}=n,h=U(n,ot),u=o({},n,{separator:p,size:c}),x=rt(u),f=o({},h,{component:v,slots:L,slotProps:b}),[M,C]=g("root",{ref:r,className:Z(x.root,i),elementType:nt,externalForwardedProps:f,ownerState:u}),[$,j]=g("ol",{className:x.ol,elementType:at,externalForwardedProps:f,ownerState:u}),[k,H]=g("li",{className:x.li,elementType:it,externalForwardedProps:f,ownerState:u}),[F,E]=g("separator",{additionalProps:{"aria-hidden":!0},className:x.separator,elementType:lt,externalForwardedProps:f,ownerState:u}),S=a.Children.toArray(l).filter(d=>a.isValidElement(d)).map((d,I)=>{var y;return s.jsx(k,o({},H,{children:ee(d,["Typography"])?a.cloneElement(d,{component:(y=d.props.component)!=null?y:"span"}):d}),`child-${I}`)});return s.jsx(ue.Provider,{value:!0,children:s.jsx(M,o({},C,{children:s.jsx($,o({},j,{children:S.reduce((d,I,y)=>(y<S.length-1?d=d.concat(I,s.jsx(F,o({},E,{children:p}),`separator-${y}`)):d.push(I),d),[])}))}))})}),dt=ct;function pt(t){return ve("MuiLink",t)}const ut=me("MuiLink",["root","disabled","focusVisible","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","focusVisible","variantPlain","variantOutlined","variantSoft","variantSolid","underlineNone","underlineHover","underlineAlways","h1","h2","h3","h4","title-lg","title-md","title-sm","body-lg","body-md","body-sm","body-xs","startDecorator","endDecorator"]),de=ut,mt=["color","textColor","variant"],vt=["children","disabled","onBlur","onFocus","level","overlay","underline","endDecorator","startDecorator","component","slots","slotProps"],xt=t=>{const{level:e,color:r,variant:n,underline:l,focusVisible:i,disabled:c}=t,p={root:["root",r&&`color${A(r)}`,c&&"disabled",i&&"focusVisible",e,l&&`underline${A(l)}`,n&&`variant${A(n)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return G(p,pt,{})},ft=m("span",{name:"JoyLink",slot:"StartDecorator",overridesResolver:(t,e)=>e.startDecorator})(({ownerState:t})=>{var e;return o({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Link-gap, 0.375em), 0.75rem)"},typeof t.startDecorator!="string"&&(t.alignItems==="flex-start"||((e=t.sx)==null?void 0:e.alignItems)==="flex-start")&&{marginTop:"2px"})}),gt=m("span",{name:"JoyLink",slot:"endDecorator",overridesResolver:(t,e)=>e.endDecorator})(({ownerState:t})=>{var e;return o({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Link-gap, 0.25em), 0.5rem)"},typeof t.startDecorator!="string"&&(t.alignItems==="flex-start"||((e=t.sx)==null?void 0:e.alignItems)==="flex-start")&&{marginTop:"2px"})}),ht=m("a",{name:"JoyLink",slot:"Root",overridesResolver:(t,e)=>e.root})(({theme:t,ownerState:e})=>{var r,n,l,i,c,p,v;return[o({"--Icon-fontSize":"1.25em","--Icon-color":"currentColor","--CircularProgress-size":"1.25em","--CircularProgress-thickness":"3px"},e.level&&e.level!=="inherit"&&t.typography[e.level],e.level==="inherit"&&{font:"inherit"},e.underline==="none"&&{textDecoration:"none"},e.underline==="hover"&&{textDecoration:"none","&:hover":{"@media (hover: hover)":{textDecorationLine:"underline"}}},e.underline==="always"&&{textDecoration:"underline"},e.startDecorator&&{verticalAlign:"bottom"},{textDecorationThickness:"max(0.08em, 1px)",textUnderlineOffset:"0.15em",display:"inline-flex",alignItems:"center",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:t.vars.radius.xs,padding:0,cursor:"pointer",textDecorationColor:`var(--variant-outlinedBorder, rgba(${(r=t.vars.palette[e.color])==null?void 0:r.mainChannel} / var(--Link-underlineOpacity, 0.72)))`},e.variant?o({paddingBlock:"min(0.1em, 4px)",paddingInline:"0.25em"},!e.nesting&&{marginInline:"-0.25em"}):{color:`var(--variant-plainColor, rgba(${(n=t.vars.palette[e.color])==null?void 0:n.mainChannel} / 1))`,[`&.${de.disabled}`]:{pointerEvents:"none",color:`var(--variant-plainDisabledColor, rgba(${(l=t.vars.palette[e.color])==null?void 0:l.mainChannel} / 0.6))`}},{userSelect:e.component==="button"?"none":void 0,MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},e.overlay?{position:"initial","&::after":{content:'""',display:"block",position:"absolute",top:0,left:0,bottom:0,right:0,borderRadius:"var(--unstable_actionRadius, inherit)",margin:"var(--unstable_actionMargin)"},[`${t.focus.selector}`]:{"&::after":t.focus.default}}:{position:"relative",[t.focus.selector]:t.focus.default}),e.variant&&o({},(i=t.variants[e.variant])==null?void 0:i[e.color],{"&:hover":{"@media (hover: hover)":(c=t.variants[`${e.variant}Hover`])==null?void 0:c[e.color]},"&:active":(p=t.variants[`${e.variant}Active`])==null?void 0:p[e.color],[`&.${de.disabled}`]:(v=t.variants[`${e.variant}Disabled`])==null?void 0:v[e.color]})]}),yt=a.forwardRef(function(e,r){const n=q({props:e,name:"JoyLink"}),{color:l="primary",textColor:i,variant:c}=n,p=U(n,mt),v=a.useContext(le),L=a.useContext(ue),b=Pe(o({},p,{color:i})),{children:h,disabled:u=!1,onBlur:x,onFocus:f,level:M="body-md",overlay:C=!1,underline:$="hover",endDecorator:j,startDecorator:k,component:H,slots:F={},slotProps:E={}}=b,S=U(b,vt),d=v||L?e.level||"inherit":M,{isFocusVisibleRef:I,onBlur:y,onFocus:D,ref:z}=Be(),[W,P]=a.useState(!1),X=Ae(r,z),Y=V=>{y(V),I.current===!1&&P(!1),x&&x(V)},w=V=>{D(V),I.current===!0&&P(!0),f&&f(V)},B=o({},b,{color:l,disabled:u,focusVisible:W,underline:$,variant:c,level:d,overlay:C,nesting:v}),J=xt(B),O=o({},S,{component:H,slots:F,slotProps:E}),[_,K]=g("root",{additionalProps:{onBlur:Y,onFocus:w},ref:X,className:J.root,elementType:ht,externalForwardedProps:O,ownerState:B}),[_e,Re]=g("startDecorator",{className:J.startDecorator,elementType:ft,externalForwardedProps:O,ownerState:B}),[ke,Se]=g("endDecorator",{className:J.endDecorator,elementType:gt,externalForwardedProps:O,ownerState:B});return s.jsx(le.Provider,{value:!0,children:s.jsxs(_,o({},K,{children:[k&&s.jsx(_e,o({},Re,{children:k})),ee(h,["Skeleton"])?a.cloneElement(h,{variant:h.props.variant||"inline"}):h,j&&s.jsx(ke,o({},Se,{children:j}))]}))})}),pe=yt;function bt(t){return ve("MuiListItemContent",t)}me("MuiListItemContent",["root"]);const It=["component","className","children","slots","slotProps"],Lt=()=>G({root:["root"]},bt,{}),Ct=m("div",{name:"JoyListItemContent",slot:"Root",overridesResolver:(t,e)=>e.root})({flex:"1 1 auto",minWidth:0}),$t=a.forwardRef(function(e,r){const n=q({props:e,name:"JoyListItemContent"}),{component:l,className:i,children:c,slots:p={},slotProps:v={}}=n,L=U(n,It),b=o({},n),h=Lt(),u=o({},L,{component:l,slots:p,slotProps:v}),[x,f]=g("root",{ref:r,className:Z(h.root,i),elementType:Ct,externalForwardedProps:u,ownerState:b});return s.jsx(x,o({},f,{children:c}))}),jt=$t;var se={},_t=T;Object.defineProperty(se,"__esModule",{value:!0});var be=se.default=void 0,Rt=_t(N()),kt=s,St=(0,Rt.default)((0,kt.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"}),"ChevronRightRounded");be=se.default=St;var oe={},Dt=T;Object.defineProperty(oe,"__esModule",{value:!0});var Ie=oe.default=void 0,zt=Dt(N()),Pt=s,Bt=(0,zt.default)((0,Pt.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"}),"HomeRounded");Ie=oe.default=Bt;var re={},At=T;Object.defineProperty(re,"__esModule",{value:!0});var Le=re.default=void 0,Nt=At(N()),Tt=s,Mt=(0,Nt.default)((0,Tt.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");Le=re.default=Mt;function Ht(){return s.jsxs(ge,{sx:{display:{xs:"flex",md:"none"},alignItems:"center",justifyContent:"space-between",position:"fixed",top:0,width:"100vw",height:"var(--Header-height)",zIndex:9995,p:2,gap:1,borderBottom:"1px solid",borderColor:"background.level1",boxShadow:"sm"},children:[s.jsx(xe,{styles:t=>({":root":{"--Header-height":"52px",[t.breakpoints.up("md")]:{"--Header-height":"0px"}}})}),s.jsx(he,{onClick:()=>{},variant:"outlined",color:"neutral",size:"sm",children:s.jsx(Le,{})})]})}var ne={},Ft=T;Object.defineProperty(ne,"__esModule",{value:!0});var Ce=ne.default=void 0,Et=Ft(N()),Wt=s,Jt=(0,Et.default)((0,Wt.jsx)("path",{d:"M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23c-.25-.44-.79-.62-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41c-.02.22-.03.44-.03.67s.01.45.03.68l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"}),"SettingsRounded");Ce=ne.default=Jt;var ae={},Ot=T;Object.defineProperty(ae,"__esModule",{value:!0});var $e=ae.default=void 0,Vt=Ot(N()),Ut=s,qt=(0,Vt.default)((0,Ut.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM16 16c-.39.39-1.02.39-1.41 0l-3.29-3.29c-.19-.19-.3-.44-.3-.71V8c0-.55.45-1 1-1s1 .45 1 1v3.59l3 3c.39.39.39 1.02 0 1.41z"}),"AccessTimeFilledRounded");$e=ae.default=qt;var ie={},Gt=T;Object.defineProperty(ie,"__esModule",{value:!0});var je=ie.default=void 0,Xt=Gt(N()),Yt=s,wt=(0,Xt.default)((0,Yt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.37-.43.65-.82.65h-.3C8.4 9 8 8.44 8.16 7.88c.43-1.47 1.68-2.59 3.23-2.83 1.52-.24 2.97.55 3.87 1.8 1.18 1.63.83 3.38-.19 4.4z"}),"HelpRounded");je=ie.default=wt;function Q({Icon:t,title:e,path:r,outside:n=!1}){const l=fe(),i=a.useCallback(()=>l(r,{state:{key:r}}),[]),c=a.useCallback(()=>window.open(r,"_blank"),[]);return s.jsx(tt,{children:s.jsxs(qe,{onClick:n?c:i,children:[s.jsx(t,{}),s.jsx(jt,{children:s.jsx(te,{fontSize:13,fontWeight:600,children:e})})]})})}function Kt(){const t=fe();return s.jsxs(ge,{className:"Sidebar",sx:{position:{xs:"fixed",md:"sticky"},transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",md:"none"},transition:"transform 0.4s, width 0.4s",zIndex:1e4,height:"100dvh",width:"var(--Sidebar-width)",top:0,p:2,flexShrink:0,display:"flex",flexDirection:"column",gap:2,borderRight:"1px solid",borderColor:"divider"},children:[s.jsx(xe,{styles:e=>({":root":{"--Sidebar-width":"200px",[e.breakpoints.up("lg")]:{"--Sidebar-width":"220px"}}})}),s.jsx(R,{className:"Sidebar-overlay",sx:{position:"fixed",zIndex:9998,top:0,left:0,width:"100vw",height:"100vh",opacity:"var(--SideNavigation-slideIn)",backgroundColor:"var(--joy-palette-background-backdrop)",transition:"opacity 0.4s",transform:{xs:"translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",lg:"translateX(-100%)"}},onClick:()=>{}}),s.jsxs(R,{sx:{display:"flex",gap:1,alignItems:"center"},children:[s.jsx(he,{onClick:()=>t("/"),variant:"soft",color:"primary",style:{color:"#F75F7B"},size:"sm",children:s.jsx(Ne,{})}),s.jsx(te,{fontFamily:"'Exo', sans-serif;",fontWeight:800,level:"title-lg",children:"ruOK?"})]}),s.jsx(R,{sx:{minHeight:0,overflow:"hidden auto",flexGrow:1,display:"flex",flexDirection:"column",[`& .${Ve.root}`]:{gap:1.5}},children:s.jsxs(Ue,{size:"sm",sx:{gap:1,"--List-nestedInsetStart":"30px","--ListItem-radius":e=>e.vars.radius.sm},children:[s.jsx(Q,{outside:!1,path:"/instance",Icon:Ce,title:"Instance Info"}),s.jsx(Q,{outside:!1,path:"/jobs",Icon:$e,title:"Claimed Jobs"}),s.jsx(Q,{outside:!0,path:"https://github.com/back-end-labs/ruok-scheduler",Icon:je,title:"Help"})]})})]})}const ts=()=>{const t=Te();return s.jsx(s.Fragment,{children:s.jsxs(R,{sx:{display:"flex",minHeight:"100dvh"},children:[s.jsx(Ht,{}),s.jsx(Kt,{}),s.jsxs(R,{component:"main",className:"MainContent",sx:{px:{xs:2,md:6},pt:{xs:"calc(12px + var(--Header-height))",sm:"calc(12px + var(--Header-height))",md:3},pb:{xs:2,sm:2,md:3},flex:1,display:"flex",flexDirection:"column",minWidth:0,height:"100dvh",gap:1},children:[s.jsx(R,{sx:{display:"flex",alignItems:"center"},children:s.jsxs(dt,{size:"sm","aria-label":"breadcrumbs",separator:s.jsx(be,{fontSize:"sm"}),sx:{pl:0},children:[s.jsx(pe,{underline:"none",color:"neutral",href:"#some-link","aria-label":"Home",children:s.jsx(Ie,{})}),s.jsx(pe,{underline:"hover",color:"neutral",href:"#some-link",fontSize:12,fontWeight:500,children:"Dashboard"}),s.jsx(te,{color:"primary",fontWeight:500,fontSize:12,children:t.pathname})]})}),s.jsx(R,{sx:{display:"flex",mb:1,gap:1,flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"start",sm:"center"},flexWrap:"wrap",justifyContent:"space-between"},children:s.jsx(Me,{})})]})]})})};export{ts as default};
