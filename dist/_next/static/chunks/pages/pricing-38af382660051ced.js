(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{2691:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return i(6982)}])},7770:function(e,r,i){"use strict";var t=i(5893),n=i(7357),s=i(5861),a=i(9417);i(7294);var c=i(5675),l=i.n(c);r.Z=()=>(0,t.jsx)(n.Z,{sx:{backgroundImage:"url(/assets/images/bg-beta.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:(0,t.jsxs)(n.Z,{sx:{padding:"4.5rem 1.875rem",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"flex-start","@media (min-width: 600px)":{padding:"6rem 5rem",flexDirection:"row",justifyContent:"space-between"}},children:[(0,t.jsx)(s.Z,{variant:"h2",sx:{"@media (min-width: 600px)":{maxWidth:"30vw"}},children:"We’re in beta. Get your invite today!"}),(0,t.jsxs)(a.Z,{sx:{color:"white",padding:0,letterSpacing:2,margin:"1.5rem 0",flexDirection:"row !important","&:hover":{textDecoration:"underline"}},children:["Get An Invite",(0,t.jsx)(l(),{src:"/assets/graphics/arrow.svg",height:"12",width:"42",alt:"arrow",style:{marginLeft:"1.125rem"}})]})]})})},7646:function(e,r,i){"use strict";i.d(r,{Z:function(){return shared_TextAndImageContainer}});var t=i(5893),n=i(7357);i(7294);var s=i(3264);let a=(0,s.Z)("img")(()=>({height:"294px",width:"100vw","@media (min-width: 600px)":{height:"auto",maxWidth:"50vw",aspectRatio:"83 / 60"}}));var shared_StyledImage=e=>{let{src:r}=e;return(0,t.jsx)(a,{src:r})},c=i(5861),l=i(9417),o=i(5675),d=i.n(o),x=i(1163),shared_TextBox=e=>{let{heading:r,description:i,cta:s}=e,a=(0,x.useRouter)(),o=a.route;return(0,t.jsxs)(n.Z,{sx:{padding:"4.5rem 1.875rem",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"flex-start","@media (min-width: 600px)":{padding:"6rem 5rem",maxWidth:"50vw"}},children:[(0,t.jsx)(c.Z,{variant:"h2",sx:{color:r.includes("Create and share")?"black":"white"},children:r}),(0,t.jsx)(c.Z,{variant:"body1",sx:{color:r.includes("Create and share")?"black":"white"},children:i}),(0,t.jsxs)(l.Z,{sx:{display:o.startsWith("/features")||o.startsWith("/pricing")?"none":"block",padding:0,letterSpacing:2,margin:"1.5rem 0",color:r.includes("Create and share")?"black":"white",flexDirection:"row !important","&:hover":{textDecoration:"underline"}},children:[s,(0,t.jsx)(d(),{src:r.includes("Create and share")?"/assets/graphics/arrow-black.svg":"/assets/graphics/arrow.svg",height:"12",width:"42",alt:"arrow",style:{marginLeft:"1.125rem"}})]})]})},shared_TextAndImageContainer=e=>{let{data:r}=e;return(0,t.jsxs)(n.Z,{sx:{display:"flex",flexDirection:"column",backgroundColor:r.heading.includes("Create and share")?"white":"black","@media (min-width: 600px)":{flexDirection:r.heading.includes("BEAUTIFUL")?"row":"row-reverse"}},children:[(0,t.jsx)(shared_StyledImage,{src:r.src}),(0,t.jsx)(shared_TextBox,{heading:r.heading,description:r.description,cta:r.cta})]})}},6982:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return pages_pricing}});var t=i(5893),n=i(7357),s=i(7294),a=i(7646),c=i(860),l=i(5861),o=i(9937),d=i(4267),x=i(2023),h=i(9417),pricing_PricingCard=e=>{let{plan:r,monthlySelected:i}=e,{description:s,monthlyPrice:a,yearlyPrice:c}=r,m=r.plan.includes("Pro");return(0,t.jsxs)(o.Z,{sx:{width:"90vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"2.5rem 2.25rem",backgroundColor:m?"#000000":"#F5F5F5",boxShadow:"none",borderRadius:0,marginBottom:"1.5rem","@media (min-width: 600px)":{padding:"6rem 5rem",maxWidth:"20rem"}},children:[(0,t.jsxs)(d.Z,{children:[(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(l.Z,{sx:{color:m?"white":"black",fontSize:"1.5rem",fontWeight:700,marginBottom:"1.125rem"},variant:"body1",children:r.plan}),(0,t.jsx)(l.Z,{sx:{color:m?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)",fontSize:"0.9375rem"},children:s})]}),i?(0,t.jsxs)(n.Z,{sx:{margin:"2.5rem auto"},children:[(0,t.jsxs)(l.Z,{sx:{color:m?"white":"black",fontSize:"2.5rem",fontWeight:700},children:[a," "]}),(0,t.jsx)(l.Z,{sx:{color:m?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)",fontSize:"0.9375rem"},children:"per month"})]}):(0,t.jsxs)(n.Z,{sx:{margin:"2.5rem auto"},children:[(0,t.jsx)(l.Z,{sx:{color:m?"white":"black",fontSize:"2.5rem",fontWeight:700},children:c}),(0,t.jsx)(l.Z,{sx:{color:m?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.6)",fontSize:"0.9375rem"},children:"per year"})]})]}),(0,t.jsx)(x.Z,{children:(0,t.jsx)(h.Z,{sx:{backgroundColor:m?"white":"black",borderRadius:0,color:m?"black":"white",width:"75vw","@media (min-width: 600px)":{maxWidth:"10rem"}},size:"large",children:"Pick Plan"})})]})},m=i(948),g=i(8102),p=i(2882),j=i(7906),u=i(3184),f=i(3816),b=i(295),Z=i(9755),w=i(5675),y=i.n(w);let Check=()=>(0,t.jsx)(y(),{src:"/assets/graphics/check.svg",height:"12",width:"16",alt:"arrow",style:{marginLeft:"1.125rem"}}),Empty=()=>(0,t.jsx)(n.Z,{sx:{height:"0.75rem",width:"1rem"}}),C=(0,m.ZP)(g.Z)(()=>({["&.".concat(Z.Z.body)]:{fontSize:10,width:"80px",margin:0,padding:"0.5rem"}}));var PricingTable=()=>{function createData(e,r,i,t){return{name:e,basic:r,pro:i,business:t}}let e=[createData("UNLIMITED STORY POSTING",(0,t.jsx)(Check,{}),(0,t.jsx)(Check,{}),(0,t.jsx)(Check,{})),createData("UNLIMITED PHOTO UPLOAD",(0,t.jsx)(Check,{}),(0,t.jsx)(Check,{}),(0,t.jsx)(Check,{})),createData("EMBEDDING CUSTOM CONTENT",(0,t.jsx)(Empty,{}),(0,t.jsx)(Check,{}),(0,t.jsx)(Check,{})),createData("UNLIMITED STORY POSTING",(0,t.jsx)(Empty,{}),(0,t.jsx)(Check,{}),(0,t.jsx)(Check,{})),createData("CUSTOMIZE METADATA",(0,t.jsx)(Empty,{}),(0,t.jsx)(Empty,{}),(0,t.jsx)(Check,{})),createData("ADVANCED METRICS",(0,t.jsx)(Empty,{}),(0,t.jsx)(Empty,{}),(0,t.jsx)(Check,{})),createData("PHOTO DOWNLOADS",(0,t.jsx)(Empty,{}),(0,t.jsx)(Empty,{}),(0,t.jsx)(Check,{})),createData("SEARCH ENGINE INDEXING",(0,t.jsx)(Empty,{}),(0,t.jsx)(Empty,{}),(0,t.jsx)(Check,{})),createData("CUSTOM ANALYTICS",(0,t.jsx)(Empty,{}),(0,t.jsx)(Empty,{}),(0,t.jsx)(Check,{}))];return(0,t.jsxs)(n.Z,{sx:{flexDirection:"column",justifyContent:"center","@media (min-width: 600px)":{display:"flex",margin:"10rem"}},children:[(0,t.jsx)(l.Z,{sx:{fontSize:"2.5rem",color:"black",textTransform:"uppercase",fontWeight:700,display:"flex",justifyContent:"center",marginBottom:"3.5rem"},children:"Compare"}),(0,t.jsx)(p.Z,{sx:{display:"none","@media (min-width: 600px)":{display:"block"}},children:(0,t.jsxs)(j.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,t.jsx)(u.Z,{children:(0,t.jsxs)(f.Z,{sx:{borderBottom:"1.5px solid black"},children:[(0,t.jsx)(g.Z,{children:"The Features"}),(0,t.jsx)(g.Z,{align:"center",children:"basic"}),(0,t.jsx)(g.Z,{align:"center",children:"pro"}),(0,t.jsx)(g.Z,{align:"center",children:"business"})]})}),(0,t.jsx)(b.Z,{children:e.map(e=>(0,t.jsxs)(f.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,t.jsx)(g.Z,{component:"th",scope:"row",children:e.name}),(0,t.jsx)(g.Z,{align:"center",children:e.basic}),(0,t.jsx)(g.Z,{align:"center",children:e.pro}),(0,t.jsx)(g.Z,{align:"center",children:e.business})]},e.name))})]})}),(0,t.jsx)(p.Z,{sx:{display:"flex",justifyContent:"flex-start",padding:"2rem","@media (min-width: 600px)":{display:"none"}},children:(0,t.jsxs)(j.Z,{"aria-label":"simple table",children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(f.Z,{sx:{borderBottom:"1.5px solid black"},children:(0,t.jsx)(g.Z,{sx:{margin:0,padding:"0.5rem"},children:"The Features"})})}),(0,t.jsx)(b.Z,{children:e.map(e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.Z,{sx:{borderBottom:"1px solid white",display:"flex",justifyContent:"flex-start",marginBottom:0},children:(0,t.jsx)(C,{sx:{borderBottom:"1px solid white",marginBottom:0},children:e.name})}),(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(C,{align:"left",sx:{borderBottom:"1px solid white",color:"rgba(0,0,0,0.5)"},children:"basic"}),(0,t.jsx)(C,{align:"center",sx:{borderBottom:"1px solid white",color:"rgba(0,0,0,0.5)"},children:"pro"}),(0,t.jsx)(C,{align:"right",sx:{borderBottom:"1px solid white",color:"rgba(0,0,0,0.5)"},children:"business"})]}),(0,t.jsxs)(f.Z,{children:[(0,t.jsx)(C,{align:"left",children:e.basic}),(0,t.jsx)(C,{align:"center",children:e.pro}),(0,t.jsx)(C,{align:"right",children:e.business})]})]}))})]})})]})};let k={inputProps:{"aria-label":"Switch demo"}};var pricing_PricingContainer=()=>{let[e,r]=(0,s.useState)(!0),[i,a]=(0,s.useState)([{plan:"",description:"",monthlyPrice:"",yearlyPrice:""}]);return(0,s.useEffect)(()=>{fetch("/api/pricing").then(e=>e.json()).then(e=>a(e))},[]),(0,t.jsxs)(n.Z,{sx:{display:"flex",justifyContent:"center",backgroundColor:"#FFFFFF",flexDirection:"column"},children:[(0,t.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",margin:"2.5rem auto"},children:[(0,t.jsx)(l.Z,{sx:{color:e?"black":"grey",fontWeight:700},children:"Monthly"}),(0,t.jsx)(c.Z,{onChange:()=>r(!e),...k,sx:{".MuiSwitch-thumb":{backgroundColor:"black"}}}),(0,t.jsx)(l.Z,{sx:{color:e?"grey":"black",fontWeight:700},children:"Yearly"})]}),(0,t.jsx)(n.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center","@media (min-width: 600px)":{flexDirection:"row",justifyContent:"space-evenly"}},children:i.map(r=>(0,t.jsx)(pricing_PricingCard,{plan:r,monthlySelected:e},r.plan))}),(0,t.jsx)(n.Z,{children:(0,t.jsx)(PricingTable,{})})]})},D=i(7770),pages_pricing=()=>(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(a.Z,{data:{src:"/assets/images/hero.jpg",heading:"PRICING",description:"Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",cta:""}}),(0,t.jsx)(pricing_PricingContainer,{}),(0,t.jsx)(D.Z,{})]})}},function(e){e.O(0,[411,774,888,179],function(){return e(e.s=2691)}),_N_E=e.O()}]);