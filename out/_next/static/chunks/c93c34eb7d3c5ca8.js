(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,35804,e=>{"use strict";var a=e.i(71645),t=e.i(34620);function r(e){let[r,s]=a.useState(void 0);return(0,t.useLayoutEffect)(()=>{if(e){s({width:e.offsetWidth,height:e.offsetHeight});let a=new ResizeObserver(a=>{let t,r;if(!Array.isArray(a)||!a.length)return;let i=a[0];if("borderBoxSize"in i){let e=i.borderBoxSize,a=Array.isArray(e)?e[0]:e;t=a.inlineSize,r=a.blockSize}else t=e.offsetWidth,r=e.offsetHeight;s({width:t,height:r})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}s(void 0)},[e]),r}e.s(["useSize",()=>r])},72520,e=>{"use strict";let a=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>a],72520)},46897,e=>{"use strict";let a=(0,e.i(75254).default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>a],46897)},76841,63488,e=>{"use strict";let a;var t=e.i(43476),r=e.i(67881),s=e.i(71645),i=e.i(81140),n=e.i(20783),o=e.i(30030),l=e.i(26330),d=e.i(10772),c=e.i(53660),m=e.i(74606),p=e.i(96626),x=e.i(48425),u=Symbol("radix.slottable"),h=e.i(69340),f=e.i(59411),[g,b]=(0,o.createContextScope)("Tooltip",[c.createPopperScope]),v=(0,c.createPopperScope)(),y="TooltipProvider",w="tooltip.open",[j,N]=g(y),k=e=>{let{__scopeTooltip:a,delayDuration:r=700,skipDelayDuration:i=300,disableHoverableContent:n=!1,children:o}=e,l=s.useRef(!0),d=s.useRef(!1),c=s.useRef(0);return s.useEffect(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,t.jsx)(j,{scope:a,isOpenDelayedRef:l,delayDuration:r,onOpen:s.useCallback(()=>{window.clearTimeout(c.current),l.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>l.current=!0,i)},[i]),isPointerInTransitRef:d,onPointerInTransitChange:s.useCallback(e=>{d.current=e},[]),disableHoverableContent:n,children:o})};k.displayName=y;var C="Tooltip",[q,z]=g(C),S=e=>{let{__scopeTooltip:a,children:r,open:i,defaultOpen:n,onOpenChange:o,disableHoverableContent:l,delayDuration:m}=e,p=N(C,e.__scopeTooltip),x=v(a),[u,f]=s.useState(null),g=(0,d.useId)(),b=s.useRef(0),y=l??p.disableHoverableContent,j=m??p.delayDuration,k=s.useRef(!1),[z,S]=(0,h.useControllableState)({prop:i,defaultProp:n??!1,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(w))):p.onClose(),o?.(e)},caller:C}),A=s.useMemo(()=>z?k.current?"delayed-open":"instant-open":"closed",[z]),P=s.useCallback(()=>{window.clearTimeout(b.current),b.current=0,k.current=!1,S(!0)},[S]),M=s.useCallback(()=>{window.clearTimeout(b.current),b.current=0,S(!1)},[S]),E=s.useCallback(()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{k.current=!0,S(!0),b.current=0},j)},[j,S]);return s.useEffect(()=>()=>{b.current&&(window.clearTimeout(b.current),b.current=0)},[]),(0,t.jsx)(c.Root,{...x,children:(0,t.jsx)(q,{scope:a,contentId:g,open:z,stateAttribute:A,trigger:u,onTriggerChange:f,onTriggerEnter:s.useCallback(()=>{p.isOpenDelayedRef.current?E():P()},[p.isOpenDelayedRef,E,P]),onTriggerLeave:s.useCallback(()=>{y?M():(window.clearTimeout(b.current),b.current=0)},[M,y]),onOpen:P,onClose:M,disableHoverableContent:y,children:r})})};S.displayName=C;var A="TooltipTrigger",P=s.forwardRef((e,a)=>{let{__scopeTooltip:r,...o}=e,l=z(A,r),d=N(A,r),m=v(r),p=s.useRef(null),u=(0,n.useComposedRefs)(a,p,l.onTriggerChange),h=s.useRef(!1),f=s.useRef(!1),g=s.useCallback(()=>h.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",g),[g]),(0,t.jsx)(c.Anchor,{asChild:!0,...m,children:(0,t.jsx)(x.Primitive.button,{"aria-describedby":l.open?l.contentId:void 0,"data-state":l.stateAttribute,...o,ref:u,onPointerMove:(0,i.composeEventHandlers)(e.onPointerMove,e=>{"touch"!==e.pointerType&&(f.current||d.isPointerInTransitRef.current||(l.onTriggerEnter(),f.current=!0))}),onPointerLeave:(0,i.composeEventHandlers)(e.onPointerLeave,()=>{l.onTriggerLeave(),f.current=!1}),onPointerDown:(0,i.composeEventHandlers)(e.onPointerDown,()=>{l.open&&l.onClose(),h.current=!0,document.addEventListener("pointerup",g,{once:!0})}),onFocus:(0,i.composeEventHandlers)(e.onFocus,()=>{h.current||l.onOpen()}),onBlur:(0,i.composeEventHandlers)(e.onBlur,l.onClose),onClick:(0,i.composeEventHandlers)(e.onClick,l.onClose)})})});P.displayName=A;var M="TooltipPortal",[E,L]=g(M,{forceMount:void 0}),T=e=>{let{__scopeTooltip:a,forceMount:r,children:s,container:i}=e,n=z(M,a);return(0,t.jsx)(E,{scope:a,forceMount:r,children:(0,t.jsx)(p.Presence,{present:r||n.open,children:(0,t.jsx)(m.Portal,{asChild:!0,container:i,children:s})})})};T.displayName=M;var R="TooltipContent",D=s.forwardRef((e,a)=>{let r=L(R,e.__scopeTooltip),{forceMount:s=r.forceMount,side:i="top",...n}=e,o=z(R,e.__scopeTooltip);return(0,t.jsx)(p.Presence,{present:s||o.open,children:o.disableHoverableContent?(0,t.jsx)(_,{side:i,...n,ref:a}):(0,t.jsx)(O,{side:i,...n,ref:a})})}),O=s.forwardRef((e,a)=>{let r=z(R,e.__scopeTooltip),i=N(R,e.__scopeTooltip),o=s.useRef(null),l=(0,n.useComposedRefs)(a,o),[d,c]=s.useState(null),{trigger:m,onClose:p}=r,x=o.current,{onPointerInTransitChange:u}=i,h=s.useCallback(()=>{c(null),u(!1)},[u]),f=s.useCallback((e,a)=>{let t,r=e.currentTarget,s={x:e.clientX,y:e.clientY},i=function(e,a){let t=Math.abs(a.top-e.y),r=Math.abs(a.bottom-e.y),s=Math.abs(a.right-e.x),i=Math.abs(a.left-e.x);switch(Math.min(t,r,s,i)){case i:return"left";case s:return"right";case t:return"top";case r:return"bottom";default:throw Error("unreachable")}}(s,r.getBoundingClientRect());c(((t=[...function(e,a,t=5){let r=[];switch(a){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t})}return r}(s,i),...function(e){let{top:a,right:t,bottom:r,left:s}=e;return[{x:s,y:a},{x:t,y:a},{x:t,y:r},{x:s,y:r}]}(a.getBoundingClientRect())].slice()).sort((e,a)=>e.x<a.x?-1:e.x>a.x?1:e.y<a.y?-1:1*!!(e.y>a.y)),function(e){if(e.length<=1)return e.slice();let a=[];for(let t=0;t<e.length;t++){let r=e[t];for(;a.length>=2;){let e=a[a.length-1],t=a[a.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))a.pop();else break}a.push(r)}a.pop();let t=[];for(let a=e.length-1;a>=0;a--){let r=e[a];for(;t.length>=2;){let e=t[t.length-1],a=t[t.length-2];if((e.x-a.x)*(r.y-a.y)>=(e.y-a.y)*(r.x-a.x))t.pop();else break}t.push(r)}return(t.pop(),1===a.length&&1===t.length&&a[0].x===t[0].x&&a[0].y===t[0].y)?a:a.concat(t)}(t))),u(!0)},[u]);return s.useEffect(()=>()=>h(),[h]),s.useEffect(()=>{if(m&&x){let e=e=>f(e,x),a=e=>f(e,m);return m.addEventListener("pointerleave",e),x.addEventListener("pointerleave",a),()=>{m.removeEventListener("pointerleave",e),x.removeEventListener("pointerleave",a)}}},[m,x,f,h]),s.useEffect(()=>{if(d){let e=e=>{let a=e.target,t={x:e.clientX,y:e.clientY},r=m?.contains(a)||x?.contains(a),s=!function(e,a){let{x:t,y:r}=e,s=!1;for(let e=0,i=a.length-1;e<a.length;i=e++){let n=a[e],o=a[i],l=n.x,d=n.y,c=o.x,m=o.y;d>r!=m>r&&t<(c-l)*(r-d)/(m-d)+l&&(s=!s)}return s}(t,d);r?h():s&&(h(),p())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[m,x,d,p,h]),(0,t.jsx)(_,{...e,ref:l})}),[F,I]=g(C,{isInside:!1}),K=((a=({children:e})=>(0,t.jsx)(t.Fragment,{children:e})).displayName="TooltipContent.Slottable",a.__radixId=u,a),_=s.forwardRef((e,a)=>{let{__scopeTooltip:r,children:i,"aria-label":n,onEscapeKeyDown:o,onPointerDownOutside:d,...m}=e,p=z(R,r),x=v(r),{onClose:u}=p;return s.useEffect(()=>(document.addEventListener(w,u),()=>document.removeEventListener(w,u)),[u]),s.useEffect(()=>{if(p.trigger){let e=e=>{let a=e.target;a?.contains(p.trigger)&&u()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[p.trigger,u]),(0,t.jsx)(l.DismissableLayer,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:d,onFocusOutside:e=>e.preventDefault(),onDismiss:u,children:(0,t.jsxs)(c.Content,{"data-state":p.stateAttribute,...x,...m,ref:a,style:{...m.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[(0,t.jsx)(K,{children:i}),(0,t.jsx)(F,{scope:r,isInside:!0,children:(0,t.jsx)(f.Root,{id:p.contentId,role:"tooltip",children:n||i})})]})})});D.displayName=R;var B="TooltipArrow",H=s.forwardRef((e,a)=>{let{__scopeTooltip:r,...s}=e,i=v(r);return I(B,r).isInside?null:(0,t.jsx)(c.Arrow,{...i,...s,ref:a})});H.displayName=B;var U=e.i(47163);function W({delayDuration:e=0,...a}){return(0,t.jsx)(k,{"data-slot":"tooltip-provider",delayDuration:e,...a})}function V({...e}){return(0,t.jsx)(W,{children:(0,t.jsx)(S,{"data-slot":"tooltip",...e})})}function Q({...e}){return(0,t.jsx)(P,{"data-slot":"tooltip-trigger",...e})}function $({className:e,sideOffset:a=0,children:r,...s}){return(0,t.jsx)(T,{children:(0,t.jsxs)(D,{"data-slot":"tooltip-content",sideOffset:a,className:(0,U.cn)("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",e),...s,children:[r,(0,t.jsx)(H,{className:"bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}var X=e.i(75254);let Y=(0,X.default)("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),G=(0,X.default)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),Z=(0,X.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>Z],63488);let J=(0,X.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var ee=e.i(46897),ea=e.i(72520),et=e.i(1859),er=e.i(57688),es=e.i(22016);function ei(){return(0,t.jsx)("footer",{className:"relative border-t border-border/60 bg-surface text-foreground",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-7xl",children:[(0,t.jsxs)("div",{className:"grid gap-10 md:grid-cols-2 lg:grid-cols-4",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)(es.default,{href:"/",className:"inline-flex items-center gap-2.5 mb-4 group",children:[(0,t.jsx)(er.default,{src:"/images/LogoKenko.png",alt:"Logo Kenkomed",width:36,height:36,className:"object-contain"}),(0,t.jsxs)("span",{className:"font-display font-extrabold text-xl tracking-tight text-foreground",children:["Kenko",(0,t.jsx)("span",{className:"text-emerald",children:"med"})]})]}),(0,t.jsx)("p",{className:"mb-5 text-foreground-muted text-sm leading-relaxed",children:"Software clínico y Sistema de Soporte a la Decisión (DSS) creado en Concepción para kinesiólogos y centros de rehabilitación en Chile."}),(0,t.jsxs)(es.default,{href:"/#contact",className:"inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand/90",children:["Agendar demo gratuita",(0,t.jsx)(ea.ArrowRight,{className:"h-3.5 w-3.5","aria-hidden":"true"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"mb-4 text-base font-bold font-display text-foreground",children:"Plataforma"}),(0,t.jsxs)("nav",{className:"space-y-2.5 text-sm text-foreground-muted","aria-label":"Enlaces del pie de página",children:[(0,t.jsx)(es.default,{href:"/precios",className:"block transition-colors hover:text-brand font-medium text-foreground",children:"Precios y Planes"}),(0,t.jsx)(es.default,{href:"/funcionalidades",className:"block transition-colors hover:text-brand",children:"Catálogo de Funcionalidades"}),(0,t.jsx)(es.default,{href:"/solucion",className:"block transition-colors hover:text-brand",children:"Nuestra Solución"}),(0,t.jsx)(es.default,{href:"/investigacion",className:"block transition-colors hover:text-brand",children:"Investigación y Evidencia"}),(0,t.jsx)(es.default,{href:"/demo",className:"block transition-colors hover:text-brand",children:"Ver Demo Interactiva"}),(0,t.jsx)(es.default,{href:"/blog",className:"block transition-colors hover:text-brand",children:"Blog Clínico y Guías"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"mb-4 text-base font-bold font-display text-foreground",children:"Contacto Directo"}),(0,t.jsxs)("address",{className:"space-y-3 text-sm not-italic text-foreground-muted",children:[(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(ee.MapPin,{className:"h-4 w-4 text-brand shrink-0","aria-hidden":"true"}),"Concepción, Región del Biobío, Chile"]}),(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(et.RiWhatsappFill,{className:"h-4 w-4 text-[#25D366] shrink-0","aria-hidden":"true"}),(0,t.jsx)("a",{href:"https://wa.me/56937105872",target:"_blank",rel:"noopener noreferrer",className:"hover:text-brand transition-colors font-medium text-foreground",children:"+56 9 3710 5872 (WhatsApp)"})]}),(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(J,{className:"h-4 w-4 text-brand shrink-0","aria-hidden":"true"}),(0,t.jsx)("a",{href:"tel:+56937105872",className:"hover:text-brand transition-colors",children:"+56 9 3710 5872"})]}),(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(Z,{className:"h-4 w-4 text-brand shrink-0","aria-hidden":"true"}),(0,t.jsx)("a",{href:"mailto:kenkomedplus@gmail.com",className:"hover:text-brand transition-colors",children:"kenkomedplus@gmail.com"})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"mb-4 text-base font-bold font-display text-foreground",children:"Comunidad"}),(0,t.jsx)("p",{className:"text-sm text-foreground-muted mb-4 leading-relaxed",children:"Síguenos para conocer nuevas escalas clínicas, guías normativas y actualizaciones de la plataforma."}),(0,t.jsxs)("div",{className:"flex space-x-3",children:[(0,t.jsx)(W,{children:(0,t.jsxs)(V,{children:[(0,t.jsx)(Q,{asChild:!0,children:(0,t.jsx)(r.Button,{asChild:!0,variant:"outline",size:"icon",className:"rounded-full bg-background border-border hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/30",children:(0,t.jsx)("a",{href:"https://wa.me/56937105872",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp Empresa (+56 9 3710 5872)",children:(0,t.jsx)(et.RiWhatsappFill,{className:"h-4 w-4 text-[#25D366]","aria-hidden":"true"})})})}),(0,t.jsx)($,{children:(0,t.jsx)("p",{children:"WhatsApp Empresa (+56 9 3710 5872)"})})]})}),(0,t.jsx)(W,{children:(0,t.jsxs)(V,{children:[(0,t.jsx)(Q,{asChild:!0,children:(0,t.jsx)(r.Button,{asChild:!0,variant:"outline",size:"icon",className:"rounded-full bg-background border-border hover:bg-brand/10 hover:text-brand hover:border-brand/30",children:(0,t.jsx)("a",{href:"https://www.instagram.com/_kenkomed_/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram de Kenkomed",children:(0,t.jsx)(Y,{className:"h-4 w-4","aria-hidden":"true"})})})}),(0,t.jsx)($,{children:(0,t.jsx)("p",{children:"Síguenos en Instagram"})})]})}),(0,t.jsx)(W,{children:(0,t.jsxs)(V,{children:[(0,t.jsx)(Q,{asChild:!0,children:(0,t.jsx)(r.Button,{asChild:!0,variant:"outline",size:"icon",className:"rounded-full bg-background border-border hover:bg-brand/10 hover:text-brand hover:border-brand/30",children:(0,t.jsx)("a",{href:"https://www.linkedin.com/company/kenkomed/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn de Kenkomed",children:(0,t.jsx)(G,{className:"h-4 w-4","aria-hidden":"true"})})})}),(0,t.jsx)($,{children:(0,t.jsx)("p",{children:"Conecta en LinkedIn"})})]})})]})]})]}),(0,t.jsxs)("div",{className:"mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-center md:flex-row",children:[(0,t.jsxs)("p",{className:"text-sm text-foreground-muted",children:["© ",new Date().getFullYear()," Kenkomed. Todos los derechos reservados. Desarrollado en Concepción, Chile."]}),(0,t.jsxs)("nav",{className:"flex flex-wrap justify-center gap-4 text-sm text-foreground-muted","aria-label":"Enlaces legales",children:[(0,t.jsx)(es.default,{href:"/privacidad",className:"transition-colors hover:text-brand",children:"Privacidad"}),(0,t.jsx)(es.default,{href:"/terminos",className:"transition-colors hover:text-brand",children:"Términos de Uso"}),(0,t.jsx)(es.default,{href:"/seguridad",className:"transition-colors hover:text-brand",children:"Seguridad Clínica"}),(0,t.jsx)("button",{type:"button",onClick:()=>{window.dispatchEvent(new CustomEvent("open-cookie-banner"))},className:"transition-colors hover:text-brand cursor-pointer",children:"Preferencias de Cookies"})]})]})]})})}e.s(["Footer",()=>ei],76841)},3116,e=>{"use strict";let a=(0,e.i(75254).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",()=>a],3116)},98919,e=>{"use strict";let a=(0,e.i(75254).default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);e.s(["Shield",()=>a],98919)},23287,e=>{"use strict";let a=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["default",()=>a])},95468,e=>{"use strict";var a=e.i(23287);e.s(["CheckCircle2",()=>a.default])},78583,e=>{"use strict";let a=(0,e.i(75254).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>a],78583)},10708,e=>{"use strict";var a=e.i(43476),t=e.i(71645);e.i(74080);var r=e.i(91918),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,s)=>{let i=(0,r.createSlot)(`Primitive.${s}`),n=t.forwardRef((e,t)=>{let{asChild:r,...n}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(r?i:s,{...n,ref:t})});return n.displayName=`Primitive.${s}`,{...e,[s]:n}},{}),i=t.forwardRef((e,t)=>(0,a.jsx)(s.label,{...e,ref:t,onMouseDown:a=>{a.target.closest("button, input, select, textarea")||(e.onMouseDown?.(a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));i.displayName="Label";var n=e.i(47163);function o({className:e,...t}){return(0,a.jsx)(i,{"data-slot":"label",className:(0,n.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...t})}e.s(["Label",()=>o],10708)},23750,e=>{"use strict";var a=e.i(43476),t=e.i(47163);function r({className:e,type:r,...s}){return(0,a.jsx)("input",{type:r,"data-slot":"input",className:(0,t.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...s})}e.s(["Input",()=>r])},84762,e=>{"use strict";var a=e.i(43476),t=e.i(47163);function r({className:e,...r}){return(0,a.jsx)("textarea",{"data-slot":"textarea",className:(0,t.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...r})}e.s(["Textarea",()=>r])},99682,e=>{"use strict";var a=e.i(71645);function t(e){let t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}e.s(["usePrevious",()=>t])},94179,e=>{"use strict";var a=e.i(43476),t=e.i(91918),r=e.i(25913),s=e.i(47163);let i=(0,r.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function n({className:e,variant:r,asChild:n=!1,...o}){let l=n?t.Slot:"span";return(0,a.jsx)(l,{"data-slot":"badge",className:(0,s.cn)(i({variant:r}),e),...o})}e.s(["Badge",()=>n])},38982,e=>{"use strict";let a=(0,e.i(75254).default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]);e.s(["FlaskConical",()=>a],38982)},51804,e=>{"use strict";let a=(0,e.i(75254).default)("calendar-check",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);e.s(["CalendarCheck",()=>a],51804)},81418,e=>{"use strict";let a=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>a],81418)},70065,e=>{"use strict";var a=e.i(43476),t=e.i(47163);function r({className:e,...r}){return(0,a.jsx)("div",{"data-slot":"card",className:(0,t.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...r})}function s({className:e,...r}){return(0,a.jsx)("div",{"data-slot":"card-content",className:(0,t.cn)("px-6",e),...r})}e.s(["Card",()=>r,"CardContent",()=>s])},1886,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(88653),s=e.i(46932);let i=(0,e.i(75254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var n=e.i(47163);let o=({title:e="FAQs",subtitle:r="Frequently Asked Questions",categories:s,faqData:i,className:o,...m})=>{let p=Object.keys(s),[x,u]=(0,t.useState)(p[0]);return(0,a.jsxs)("section",{id:"preguntas-frecuentes",className:(0,n.cn)("relative overflow-hidden bg-background px-4 py-12 text-foreground",o),...m,children:[(0,a.jsx)(l,{title:e,subtitle:r}),(0,a.jsx)(d,{categories:s,selected:x,setSelected:u}),(0,a.jsx)(c,{faqData:i,selected:x})]})},l=({title:e,subtitle:t})=>(0,a.jsxs)("div",{className:"relative z-10 flex flex-col items-center justify-center text-center",children:[(0,a.jsx)("span",{className:"mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-medium text-transparent",children:t}),(0,a.jsx)("h2",{className:"mb-8 text-5xl font-bold",children:e}),(0,a.jsx)("span",{className:"absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl"})]}),d=({categories:e,selected:t,setSelected:i})=>(0,a.jsx)("div",{className:"relative z-10 flex flex-wrap items-center justify-center gap-4",children:Object.entries(e).map(([e,o])=>(0,a.jsxs)("button",{onClick:()=>i(e),className:(0,n.cn)("relative overflow-hidden whitespace-nowrap rounded-md border px-3 py-1.5 text-sm font-medium transition-colors duration-500",t===e?"border-primary text-background":"border-border bg-transparent text-muted-foreground hover:text-foreground"),children:[(0,a.jsx)("span",{className:"relative z-10",children:o}),(0,a.jsx)(r.AnimatePresence,{children:t===e&&(0,a.jsx)(s.motion.span,{initial:{y:"100%"},animate:{y:"0%"},exit:{y:"100%"},transition:{duration:.25,ease:"easeOut"},className:"absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary/80"})})]},e))}),c=({faqData:e,selected:t})=>(0,a.jsx)("div",{className:"mx-auto mt-12 max-w-3xl",children:(0,a.jsx)(r.AnimatePresence,{mode:"wait",children:Object.entries(e).map(([e,r])=>t===e?(0,a.jsx)(s.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.25,ease:"easeOut"},className:"space-y-4",children:r.map((e,t)=>(0,a.jsx)(m,{...e},t))},e):null)})}),m=({question:e,answer:r})=>{let[o,l]=(0,t.useState)(!1);return(0,a.jsxs)(s.motion.div,{animate:o?"open":"closed",className:(0,n.cn)("rounded-xl border transition-colors",o?"bg-muted/50":"bg-card"),children:[(0,a.jsxs)("button",{onClick:()=>l(!o),className:"flex w-full items-center justify-between gap-4 p-4 text-left",children:[(0,a.jsx)("span",{className:(0,n.cn)("text-lg font-medium transition-colors",o?"text-foreground":"text-muted-foreground"),children:e}),(0,a.jsx)(s.motion.span,{variants:{open:{rotate:"45deg"},closed:{rotate:"0deg"}},transition:{duration:.2},children:(0,a.jsx)(i,{className:(0,n.cn)("h-5 w-5 transition-colors",o?"text-foreground":"text-muted-foreground")})})]}),(0,a.jsx)(s.motion.div,{initial:!1,animate:{height:o?"auto":"0px",marginBottom:o?"16px":"0px"},transition:{duration:.2,ease:"easeOut"},className:"overflow-hidden px-4",children:(0,a.jsx)("p",{className:"text-muted-foreground",children:r})})]})},p={general:"General",caracteristicas:"Características Clínicas",seguridad:"Seguridad y Normativa",precios:"Precios e Implementación"},x={general:[{question:"¿Qué es Kenkomed y para quién está pensado?",answer:"Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda multi-box, 13 cuestionarios validados (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, Oswestry, LEFS, etc.) y reportes clínicos en una sola plataforma web."},{question:"¿Hay demostración guiada sin costo?",answer:"Sí. Puedes agendar una demostración guiada sin costo desde la web o explorar la sección Demo. Un especialista de nuestro equipo te muestra en vivo el sistema DSS, la agenda multi-box y las historias clínicas digitales aplicadas a tu flujo de atención."},{question:"¿Necesito instalar algún programa en mi computador?",answer:"No. Kenkomed es una plataforma 100% basada en la nube (SaaS). Solo necesitas conexión a internet y un navegador web para acceder desde cualquier computador, tablet o teléfono celular, sin instalaciones ni actualizaciones manuales."}],caracteristicas:[{question:"¿En qué se diferencia Kenkomed de un software genérico de salud?",answer:"Kenkomed no es una agenda médica genérica adaptada: es un Sistema de Soporte a la Decisión Clínica (DSS) diseñado desde cero para kinesiología. Integra 13 escalas funcionales validadas, admisión remota vía código QR (anamnesis de 14 páginas), evolución en formato SOAP enlazada a objetivos funcionales, alertas clínicas automáticas (banderas rojas y amarillas), gráficos de evolución para el paciente y médico derivador, y control de packs de sesiones."},{question:"¿Kenkomed genera el detalle de sesiones para reembolso en Isapres y seguros?",answer:"Sí. Con un clic emites el certificado y detalle de sesiones en formato PDF con las fechas de atención, diagnóstico kinésico y códigos de arancel FONASA solicitados por Isapres y seguros complementarios de salud en Chile para facilitar el reembolso del paciente."},{question:"¿Cómo funciona el envío de anamnesis y pautas de ejercicios por WhatsApp?",answer:"Puedes compartir el enlace o código QR de admisión previa por WhatsApp para que el paciente complete su anamnesis desde su celular antes de llegar a la consulta. Asimismo, al prescribir ejercicios del catálogo anatómico (con series, repeticiones y dosificación), generas un PDF membretado que se envía en un clic al WhatsApp o correo del paciente."},{question:"¿Qué escalas y cuestionarios clínicos incluye?",answer:"Incluye 13 escalas clínicas validadas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDASH, Barthel, GROC, EQ-5D, Oswestry, LEFS y screening de comorbilidades), calculando puntajes e interpretaciones automáticamente al completar la evaluación."},{question:"¿Funciona en celular y para clínicas con varios kinesiólogos?",answer:"Sí. Funciona en cualquier navegador móvil o de escritorio y escala desde un kinesiólogo independiente hasta centros de rehabilitación con múltiples boxes y sedes, con permisos diferenciados por rol."},{question:"¿Y si mis pacientes no usan el código QR?",answer:"El código QR es completamente opcional. Si un paciente prefiere no completarlo antes de la cita, puedes registrar los datos directamente en la ficha durante la sesión."}],seguridad:[{question:"¿Cómo protege Kenkomed los datos clínicos de los pacientes?",answer:"La plataforma utiliza cifrado de datos en tránsito y en reposo, respaldos automáticos, bloqueo automático de pantalla en box y control de acceso por roles (Director Técnico, Administrador, Kinesiólogo y Recepción). Su arquitectura de trazabilidad está diseñada conforme a la Ley N° 20.584 (Derechos y Deberes de los Pacientes) y preparada para los estándares de la Ley N° 21.719 de Protección de Datos Personales."},{question:"¿Dónde se almacenan los datos y quién puede acceder a ellos?",answer:"Los datos clínicos se resguardan en servidores seguros con cifrado. Solo el profesional tratante y el personal autorizado de tu centro pueden acceder a las fichas según su rol, quedando cada acceso registrado en el historial de auditoría."},{question:"¿Puedo exportar o descargar las fichas de mis pacientes?",answer:"Sí. El profesional o centro de salud mantiene la titularidad de sus registros y puede exportar las fichas e informes clínicos en formato PDF en cualquier momento para entregarlos al paciente, al médico derivador o para respaldo institucional."}],precios:[{question:"¿Cuánto cuesta y existe permanencia mínima?",answer:"Los planes comienzan en 0,4 UF / mes neto (+ IVA en plan anual, aprox. $15.000 CLP neto) para el Plan Individual, 0,7 UF / mes neto (aprox. $26.000 CLP) para el Plan Clínico Pro y 1,1 UF / mes neto (aprox. $41.000 CLP) para el Plan Clínica / Centro. No exigimos contratos de permanencia forzosa: puedes optar por modalidad mensual o anual con factura o boleta legal."},{question:"¿Permite llevar el control de pagos y datos para Boleta de Honorarios o factura?",answer:"Sí. Incluye registro de pagos por sesión o packs de tratamiento con desglose por medio de pago (efectivo, transferencia o tarjeta) y datos del paciente (RUT, nombre y correo) para agilizar la emisión de tus documentos tributarios."},{question:"¿Puedo migrar mis datos si hoy uso papel, Excel u otro sistema?",answer:"Sí. Puedes iniciar desde cero o importar tus registros históricos. En los planes Clínico Pro y Clínica incluimos acompañamiento para migrar tu base de pacientes y configurar tus boxes y horarios."},{question:"¿Incluye soporte técnico y capacitación para mi equipo?",answer:"Todos los planes incluyen soporte directo por WhatsApp y correo con nuestro equipo en Chile, además de onboarding guiado para que tú y tu equipo dominen el flujo clínico desde el primer día."}]};function u(){return(0,a.jsx)(o,{title:"Preguntas Frecuentes",subtitle:"Resolvemos tus dudas sobre la plataforma, seguridad e implementación",categories:p,faqData:x,className:"bg-transparent"})}Object.values(x).flat(),e.s(["FaqSection",()=>u],1886)},55944,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(1859),s=e.i(46932),i=e.i(23750),n=e.i(84762),o=e.i(10708);let l=[{value:"1 kinesiólogo (Individual)",label:"1 kinesiólogo"},{value:"2 a 3 profesionales",label:"2 a 3 profesionales"},{value:"4 o más (Clínica / Centro)",label:"4 o más (Clínica)"}];function d(){let[e,d]=(0,t.useState)(!1),[c,m]=(0,t.useState)(!1),[p,x]=(0,t.useState)(null),[u,h]=(0,t.useState)({name:"",email:"",phone:"",clinic:"",teamSize:"1 kinesiólogo (Individual)",message:""}),f=e=>{h(a=>({...a,[e.target.name]:e.target.value}))},g=async e=>{e.preventDefault(),d(!0),x(null);let a=`
==================================================
📩 SOLICITUD DE DEMO — KENKOMED LANDING
==================================================

👤 DATOS DE CONTACTO:
- Nombre: ${u.name}
- Email: ${u.email}
- Tel\xe9fono / WhatsApp: ${u.phone}
- Tama\xf1o de equipo: ${u.teamSize}
- Cl\xednica / Consulta: ${u.clinic||"Consulta independiente"}

💬 MENSAJE / CONSULTA:
${u.message||"Solicita demostración guiada de la plataforma."}

==================================================
Fecha: ${new Date().toLocaleString("es-CL")}
Origen: Secci\xf3n Contacto Principal Landing
==================================================
`.trim();try{let e=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"491d435e-576c-4b14-86a2-7d9540776b32",subject:`💬 Demo solicitada — ${u.name} (${u.teamSize})`,from_name:"Kenkomed Landing — Solicitud Demo",name:u.name,email:u.email,phone:u.phone,team_size:u.teamSize,clinic:u.clinic||"Consulta independiente",comentarios:u.message,message:a})}),t=e.headers.get("content-type");t&&-1!==t.indexOf("application/json")?(await e.json()).success?(d(!1),m(!0),Array.isArray(window.dataLayer)&&window.dataLayer.push({event:"lead_form_submit",team_size:u.teamSize})):(d(!1),x("No pudimos enviar el formulario en este momento. Puedes agendar directamente con nosotros por WhatsApp.")):(d(!1),x("Hubo un inconveniente temporal con el servicio de correo. Escríbenos por WhatsApp y te responderemos de inmediato."))}catch{d(!1),x("Error de conexión al enviar tu solicitud. Por favor intenta nuevamente o escríbenos por WhatsApp.")}};return(0,a.jsx)("section",{id:"contact",className:"relative overflow-hidden bg-surface/60 border-t border-border/60 py-20 md:py-28","aria-labelledby":"contact-heading",children:(0,a.jsxs)("div",{className:"relative mx-auto max-w-3xl px-6",children:[(0,a.jsxs)("div",{className:"mb-10 text-center",children:[(0,a.jsx)("h2",{id:"contact-heading",className:"font-display text-3xl font-bold text-foreground sm:text-4xl",children:"Agenda tu demostración gratuita"}),(0,a.jsx)("p",{className:"mx-auto mt-3 max-w-lg text-foreground-muted text-base",children:"Te mostramos Kenkomed en vivo en 20 minutos, adaptado a tu flujo de consulta o centro de rehabilitación."})]}),(0,a.jsx)("div",{className:"rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10",children:c?(0,a.jsxs)(s.motion.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.35},className:"flex flex-col items-center py-10 text-center",role:"status",children:[(0,a.jsx)("div",{className:"mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald/15",children:(0,a.jsx)(r.RiCheckboxCircleLine,{size:30,className:"text-emerald","aria-hidden":"true"})}),(0,a.jsx)("h3",{className:"mb-2 font-display text-2xl font-bold text-foreground",children:"¡Solicitud recibida!"}),(0,a.jsx)("p",{className:"mb-6 max-w-md text-sm sm:text-base text-foreground-muted",children:"Nuestro equipo te contactará dentro de las próximas 24 horas hábiles para coordinar tu demostración."}),(0,a.jsx)("button",{type:"button",onClick:()=>{m(!1),h({name:"",email:"",phone:"",clinic:"",teamSize:"1 kinesiólogo (Individual)",message:""})},className:"text-sm font-semibold text-brand hover:underline cursor-pointer",children:"Enviar otra consulta"})]}):(0,a.jsxs)("form",{onSubmit:g,className:"space-y-6",children:[p&&(0,a.jsxs)("div",{role:"alert","aria-live":"assertive",className:"rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",children:[(0,a.jsx)("span",{children:p}),(0,a.jsxs)("a",{href:"https://wa.me/56937105872",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 font-bold text-rose-950 underline shrink-0",children:[(0,a.jsx)(r.RiWhatsappFill,{className:"h-4 w-4 text-[#25D366]","aria-hidden":"true"}),"Abrir WhatsApp"]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Label,{htmlFor:"contact-name",className:"text-sm font-medium text-foreground",children:["Nombre completo ",(0,a.jsx)("span",{className:"text-rose-600",children:"*"})]}),(0,a.jsxs)("div",{className:"relative mt-2",children:[(0,a.jsx)(r.RiUserLine,{size:16,"aria-hidden":"true",className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),(0,a.jsx)(i.Input,{type:"text",id:"contact-name",name:"name",autoComplete:"name",required:!0,value:u.name,onChange:f,placeholder:"Ej. Camila Rojas",className:"rounded-xl pl-9"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Label,{htmlFor:"contact-email",className:"text-sm font-medium text-foreground",children:["Correo electrónico ",(0,a.jsx)("span",{className:"text-rose-600",children:"*"})]}),(0,a.jsxs)("div",{className:"relative mt-2",children:[(0,a.jsx)(r.RiMailLine,{size:16,"aria-hidden":"true",className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),(0,a.jsx)(i.Input,{type:"email",id:"contact-email",name:"email",autoComplete:"email",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,required:!0,value:u.email,onChange:f,placeholder:"camila@consulta.cl",className:"rounded-xl pl-9"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Label,{htmlFor:"contact-phone",className:"text-sm font-medium text-foreground",children:["Teléfono / WhatsApp ",(0,a.jsx)("span",{className:"text-rose-600",children:"*"})]}),(0,a.jsxs)("div",{className:"relative mt-2",children:[(0,a.jsx)(r.RiPhoneLine,{size:16,"aria-hidden":"true",className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),(0,a.jsx)(i.Input,{type:"tel",id:"contact-phone",name:"phone",autoComplete:"tel",required:!0,value:u.phone,onChange:f,placeholder:"+56 9 1234 5678",className:"rounded-xl pl-9"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Label,{htmlFor:"contact-clinic",className:"text-sm font-medium text-foreground",children:["Consulta o centro ",(0,a.jsx)("span",{className:"text-xs font-normal text-foreground-muted",children:"(opcional)"})]}),(0,a.jsxs)("div",{className:"relative mt-2",children:[(0,a.jsx)(r.RiBuilding4Line,{size:16,"aria-hidden":"true",className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"}),(0,a.jsx)(i.Input,{type:"text",id:"contact-clinic",name:"clinic",autoComplete:"organization",value:u.clinic,onChange:f,placeholder:"Ej. Consulta particular o nombre de clínica",className:"rounded-xl pl-9"})]})]})]}),(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("legend",{className:"text-sm font-medium text-foreground mb-2.5",children:"¿Cuántos profesionales atienden en tu consulta o centro?"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5",children:l.map(e=>{let t=u.teamSize===e.value;return(0,a.jsxs)("label",{className:`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm font-medium cursor-pointer transition-colors ${t?"border-brand bg-brand/5 text-brand":"border-border bg-background text-foreground hover:border-brand/40"}`,children:[(0,a.jsx)("input",{type:"radio",name:"teamSize",value:e.value,checked:t,onChange:f,className:"accent-brand"}),(0,a.jsx)("span",{children:e.label})]},e.value)})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)(o.Label,{htmlFor:"contact-message",className:"text-sm font-medium text-foreground",children:["Comentarios ",(0,a.jsx)("span",{className:"text-xs font-normal text-foreground-muted",children:"(opcional)"})]}),(0,a.jsxs)("div",{className:"relative mt-2",children:[(0,a.jsx)(r.RiChat1Line,{size:16,"aria-hidden":"true",className:"pointer-events-none absolute left-3 top-3.5 text-muted-foreground"}),(0,a.jsx)(n.Textarea,{id:"contact-message",name:"message",rows:3,value:u.message,onChange:f,placeholder:"Cuéntanos si buscas agendamiento multi-box, fichas SOAP, admisión QR o migración de pacientes...",className:" rounded-xl pl-9"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col-reverse items-center gap-4 border-t border-border/60 pt-5 sm:flex-row sm:justify-between",children:[(0,a.jsxs)("p",{className:"text-center text-xs text-foreground-muted sm:text-left",children:["Al enviar aceptas nuestra"," ",(0,a.jsx)("a",{href:"/privacidad",className:"text-brand hover:underline",children:"Política de Privacidad"}),"."]}),(0,a.jsx)("button",{type:"submit",disabled:e,className:"inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto cursor-pointer",children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"}),"Enviando..."]}):(0,a.jsxs)(a.Fragment,{children:["Agendar demo gratuita",(0,a.jsx)(r.RiSendPlaneLine,{size:15,"aria-hidden":"true"})]})})]})]})})]})})}e.s(["ContactForm",()=>d])},12475,e=>{"use strict";let a=(0,e.i(75254).default)("dumbbell",[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]);e.s(["Dumbbell",()=>a],12475)},70756,e=>{"use strict";let a=(0,e.i(75254).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",()=>a],70756)},23962,e=>{"use strict";let a=(0,e.i(75254).default)("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);e.s(["QrCode",()=>a],23962)},31343,e=>{"use strict";let a=(0,e.i(75254).default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);e.s(["Play",()=>a],31343)},11858,94771,e=>{"use strict";var a=e.i(43476),t=e.i(22016),r=e.i(71645),s=e.i(46932),i=e.i(88653),n=e.i(47163),o=e.i(75254);let l=(0,o.default)("check-check",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);e.s(["CheckCheck",()=>l],94771);let d=(0,o.default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),c=(0,o.default)("list-filter",[["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M9 19h6",key:"456am0"}]]),m=(0,o.default)("ellipsis-vertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]),p=(0,o.default)("circle-dashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]),x=(0,o.default)("message-square-plus",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 8v6",key:"1ib9pf"}],["path",{d:"M9 11h6",key:"1fldmi"}]]),u=(0,o.default)("paperclip",[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]]),h=(0,o.default)("mic",[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]),f=(0,o.default)("smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);var g=e.i(31343),b=e.i(70756),v=e.i(95468);let y=[{id:1,sender:"Kinesiólogo Tratante",avatarInitial:"K",text:"Hola Laura, te comparto el link directo y el código QR de Kenkomed para que puedas completar tu formulario de anamnesis desde tu celular antes de nuestra sesión de evaluación.",isCurrentUser:!0,timestamp:"09:15"},{id:2,sender:"Laura Mendoza",avatarInitial:"L",text:"¡Hola! Perfecto, acabo de abrir el link y completé todos mis datos, antecedentes y la molestia en el hombro desde mi celular 📱✅",isCurrentUser:!1,timestamp:"10:30"},{id:3,sender:"Kinesiólogo Tratante",avatarInitial:"K",text:"¡Excelente! Ya me aparece cargado en tu ficha clínica digital en Kenkomed. Nos vemos mañana en la consulta a las 11:00 hrs para comenzar tu evaluación y tratamiento.",isCurrentUser:!0,timestamp:"10:32"},{id:4,sender:"Laura Mendoza",avatarInitial:"L",text:"¡Súper claro y rápido! Muchas gracias, nos vemos mañana en la clínica 🙌",isCurrentUser:!1,timestamp:"10:35",reaction:"💪"}],w=[{id:"1",name:"Laura Mendoza (Hombro)",initial:"L",avatarUrl:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",lastMsg:"¡Nos vemos en la clínica! 🙌",time:"10:35",isActive:!0},{id:"2",name:"Soporte Equipo Kenkomed",initial:"K",avatarUrl:"/images/LogoKenKoMed-removebg-preview.png",lastMsg:"Equipo Kenkomed: Hola, estamos atentos para asistirte",time:"10:15",unreadCount:1},{id:"3",name:"Carlos Silva (Post-Op Rodilla)",initial:"C",avatarUrl:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",lastMsg:"Terminé la serie de ejercicios de extensión",time:"09:40"},{id:"4",name:"Dra. Elena Ortiz (Traumatología)",initial:"E",avatarUrl:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",lastMsg:"Paciente derivado con orden médica adjunta",time:"Ayer"}];function j({headerTitle:e="Laura Mendoza (Lumbalgia)",headerSubtitle:t="Paciente Activa • Ficha #4092",avatarUrl:o="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",avatarFallback:j="L",userAvatarUrl:N="/images/LogoKenKoMed-removebg-preview.png",isVerified:k=!0,messages:C=y,sidebarChats:q=w,autoPlay:z=!0,className:S,children:A}){let[P,M]=(0,r.useState)([]),[E,L]=(0,r.useState)(!1),[T,R]=(0,r.useState)(!1),[D,O]=(0,r.useState)(0);(0,r.useEffect)(()=>{let e,a,t,r,s;if(!z||A)return;let i=!0;return M([]),L(!1),e=setTimeout(()=>{i&&(C[0]&&M([C[0]]),L(!0))},800),a=setTimeout(()=>{i&&(L(!1),C[0]&&C[1]&&M([C[0],C[1]]),setTimeout(()=>{i&&L(!0)},650))},2700),t=setTimeout(()=>{i&&(L(!1),C.length>=3&&M([C[0],C[1],C[2]]))},5e3),r=setTimeout(()=>{i&&(L(!1),M(C))},7400),s=setTimeout(()=>{i&&O(e=>e+1)},11500),()=>{i=!1,clearTimeout(e),clearTimeout(a),clearTimeout(t),clearTimeout(r),clearTimeout(s)}},[z,A,C,D]);let F=!z||A?C:P;return(0,a.jsxs)("div",{className:(0,n.cn)("relative mx-auto flex w-full max-w-[480px] transform-gpu flex-col items-center justify-center py-4 select-none [perspective:1200px] sm:max-w-[620px] md:max-w-[720px]",S),children:[(0,a.jsx)(s.motion.div,{initial:{rotateX:-70,opacity:0,scale:.92},animate:{rotateX:0,opacity:1,scale:1},transition:{type:"spring",stiffness:140,damping:20,mass:.9},style:{transformOrigin:"bottom center"},className:"relative z-10 flex h-[320px] w-full transform-gpu flex-col overflow-hidden rounded-t-2xl bg-neutral-900 p-2 sm:h-[390px] sm:p-2.5 md:h-[430px] dark:bg-neutral-950 shadow-2xl",children:(0,a.jsxs)("div",{className:"relative isolate flex h-full w-full transform-gpu overflow-hidden rounded-t-[10px] bg-white text-neutral-900 transition-colors dark:bg-[#111b21] dark:text-neutral-100",children:[(0,a.jsxs)("div",{className:"flex w-[170px] shrink-0 flex-col bg-[#f0f2f5] transition-colors sm:w-[220px] md:w-[250px] dark:bg-[#111b21] border-r border-neutral-200/60 dark:border-neutral-800/60",children:[(0,a.jsxs)("div",{className:"flex shrink-0 items-center justify-between bg-[#f0f2f5] px-3 py-2 dark:bg-[#202c33]",children:[(0,a.jsx)("div",{className:"flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#111b21] border border-emerald-500/40 p-0.5 shadow-xs",children:N?(0,a.jsx)("img",{src:N,alt:"Logo Kenkomed",className:"h-full w-full object-contain"}):(0,a.jsx)("span",{className:"text-[10px] font-bold text-emerald-600",children:"K"})}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-neutral-600 dark:text-neutral-400",children:[(0,a.jsx)("button",{type:"button","aria-label":"Estado",className:"transition-colors hover:text-emerald-600 dark:hover:text-emerald-400",children:(0,a.jsx)(p,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"})}),(0,a.jsx)("button",{type:"button","aria-label":"Nuevo chat",className:"transition-colors hover:text-emerald-600 dark:hover:text-emerald-400",children:(0,a.jsx)(x,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"})}),(0,a.jsx)("button",{type:"button","aria-label":"Más opciones",className:"transition-colors hover:text-emerald-600 dark:hover:text-emerald-400",children:(0,a.jsx)(m,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"})})]})]}),(0,a.jsx)("div",{className:"p-2",children:(0,a.jsxs)("div",{className:"flex items-center gap-2 rounded-lg bg-white px-2.5 py-1 text-xs text-neutral-400 dark:bg-[#202c33]",children:[(0,a.jsx)(d,{className:"h-3.5 w-3.5 shrink-0 text-neutral-500 dark:text-neutral-400"}),(0,a.jsx)("span",{className:"truncate text-[10.5px]",children:"Buscar chat o ficha..."}),(0,a.jsx)(c,{className:"ml-auto h-3 w-3 shrink-0 text-neutral-400"})]})}),(0,a.jsx)("div",{className:"flex-1 [scrollbar-width:none] overflow-y-auto [&::-webkit-scrollbar]:hidden",children:q.map(e=>(0,a.jsxs)("div",{className:(0,n.cn)("relative flex cursor-pointer items-center gap-2.5 px-3 py-2.5 transition-colors",e.isActive?"bg-neutral-200/70 dark:bg-[#2a3942]":"hover:bg-neutral-200/40 dark:hover:bg-[#202c33]/60"),children:[e.isActive&&(0,a.jsx)("div",{className:"absolute top-0 bottom-0 left-0 w-1 bg-[#00a884]"}),(0,a.jsx)("div",{className:"flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-700 text-xs font-bold text-white sm:h-8 sm:w-8 dark:bg-emerald-900",children:e.avatarUrl?(0,a.jsx)("img",{src:e.avatarUrl,alt:e.name,className:(0,n.cn)("h-full w-full",e.avatarUrl.includes("Logo")?"object-contain bg-white dark:bg-[#111b21] p-0.5":"object-cover")}):(0,a.jsx)("span",{children:e.initial})}),(0,a.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("span",{className:"truncate text-[11px] font-semibold text-neutral-900 dark:text-neutral-100",children:e.name}),(0,a.jsx)("span",{className:"shrink-0 text-[9px] text-neutral-400 dark:text-neutral-400",children:e.time})]}),(0,a.jsx)("p",{className:"mt-0.5 truncate text-[10px] text-neutral-500 dark:text-neutral-400",children:e.lastMsg})]}),e.unreadCount&&(0,a.jsx)("span",{className:"flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-[9px] font-bold text-white",children:e.unreadCount})]},e.id))})]}),(0,a.jsxs)("div",{className:"relative flex min-w-0 flex-1 flex-col bg-[#efeae2] transition-colors dark:bg-[#0b141a]",children:[(0,a.jsxs)("div",{className:"z-10 flex shrink-0 items-center justify-between bg-[#f0f2f5] px-3.5 py-2 dark:bg-[#202c33] border-b border-neutral-200/40 dark:border-neutral-800/40",children:[(0,a.jsxs)("div",{className:"flex min-w-0 items-center gap-2.5",children:[(0,a.jsx)("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#111b21] border border-emerald-500/40 p-1 shadow-xs",children:o?(0,a.jsx)("img",{src:o,alt:e,className:(0,n.cn)("h-full w-full",o.includes("Logo")?"object-contain":"object-cover rounded-full")}):(0,a.jsx)("span",{className:"text-xs font-bold text-emerald-600",children:j})}),(0,a.jsxs)("div",{className:"flex min-w-0 flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1",children:[(0,a.jsx)("span",{className:"truncate text-xs leading-tight font-semibold text-neutral-900 dark:text-neutral-100",children:e}),k&&(0,a.jsx)(v.CheckCircle2,{className:"h-3 w-3 fill-emerald-500 text-white shrink-0"})]}),(0,a.jsx)("span",{className:"text-[10px] font-medium text-emerald-600 dark:text-emerald-400",children:t})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-3 text-neutral-600 dark:text-neutral-400",children:[(0,a.jsx)("button",{type:"button","aria-label":"Buscar",className:"transition-colors hover:text-emerald-600 dark:hover:text-emerald-400",children:(0,a.jsx)(d,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"})}),(0,a.jsx)("button",{type:"button","aria-label":"Opciones",className:"transition-colors hover:text-emerald-600 dark:hover:text-emerald-400",children:(0,a.jsx)(m,{className:"h-3.5 w-3.5 sm:h-4 sm:w-4"})})]})]}),(0,a.jsx)("div",{className:"relative z-10 flex min-h-0 flex-1 flex-col justify-end space-y-2.5 overflow-hidden p-3.5",children:A?(0,a.jsx)("div",{className:"h-full w-full [scrollbar-width:none] overflow-y-auto [&::-webkit-scrollbar]:hidden",children:A}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"mx-auto my-1 flex max-w-[90%] items-center justify-center gap-1.5 rounded-md bg-[#ffeebd] px-3 py-1 text-center text-[9.5px] text-amber-900 dark:bg-[#182229] dark:text-amber-200/80 shadow-xs",children:[(0,a.jsx)(b.Lock,{className:"h-2.5 w-2.5 shrink-0 text-amber-700 dark:text-amber-400"}),(0,a.jsx)("span",{children:"Comunicación encriptada y conforme a ficha clínica digital Kenkomed."})]}),(0,a.jsx)("div",{className:"mx-auto my-0.5 rounded-md bg-white/80 px-2.5 py-0.5 text-[9px] font-semibold tracking-wider text-neutral-500 uppercase dark:bg-[#182229]/90 dark:text-neutral-400",children:"HOY"}),(0,a.jsx)("div",{className:"flex flex-1 [scrollbar-width:none] flex-col justify-end space-y-2.5 overflow-y-auto [&::-webkit-scrollbar]:hidden",children:(0,a.jsxs)(i.AnimatePresence,{mode:"sync",children:[F.map(e=>(0,a.jsx)(s.motion.div,{initial:{opacity:0,y:10,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",stiffness:400,damping:25},className:`flex flex-col ${e.isCurrentUser?"items-end":"items-start"}`,children:(0,a.jsxs)("div",{className:(0,n.cn)("relative max-w-[78%] rounded-lg px-3 py-1.5 text-xs transition-colors shadow-xs",e.isCurrentUser?"rounded-tr-none bg-[#dcf8c6] text-neutral-900 dark:bg-[#005c4b] dark:text-neutral-100":"rounded-tl-none bg-white text-neutral-900 dark:bg-[#202c33] dark:text-neutral-100"),children:[!e.isCurrentUser&&(0,a.jsx)("p",{className:"mb-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400",children:e.sender}),e.isAudio?(0,a.jsxs)("div",{className:"flex min-w-[180px] items-center gap-3 py-1",children:[(0,a.jsx)("button",{type:"button",onClick:()=>R(!T),"aria-label":T?"Pausar nota de voz":"Reproducir nota de voz",className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors hover:bg-emerald-700",children:(0,a.jsx)(g.Play,{className:"ml-0.5 h-3 w-3 fill-current"})}),(0,a.jsxs)("div",{className:"flex flex-1 flex-col gap-1",children:[(0,a.jsx)("div",{className:"flex h-3 items-center gap-0.5",children:[40,75,30,90,60,100,45,80,50,70,35,90,65,40,85,55].map((e,t)=>(0,a.jsx)("span",{className:"w-1 rounded-full bg-emerald-600/80 dark:bg-emerald-400/80",style:{height:`${e}%`}},t))}),(0,a.jsxs)("span",{className:"text-[9px] text-neutral-500 dark:text-neutral-400",children:["Nota de voz • ",e.audioDuration]})]})]}):(0,a.jsx)("p",{className:"xs:text-xs text-[11.5px] leading-snug",children:e.text}),(0,a.jsxs)("div",{className:"mt-0.5 flex items-center justify-end gap-1",children:[(0,a.jsx)("span",{className:(0,n.cn)("text-[9px]",e.isCurrentUser?"text-emerald-950 dark:text-emerald-100 font-medium":"text-neutral-600 dark:text-neutral-300"),children:e.timestamp}),e.isCurrentUser&&(0,a.jsx)(l,{className:"h-3.5 w-3.5 text-[#53bdeb]"})]}),e.reaction&&(0,a.jsx)("div",{className:"py-0.2 absolute right-2 -bottom-2 rounded-full bg-white px-1.5 text-[9px] dark:bg-[#182229] border border-neutral-200 dark:border-neutral-700 shadow-xs",children:e.reaction})]})},`${D}-${e.id}`)),E&&(0,a.jsx)(s.motion.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:"flex items-center justify-start",children:(0,a.jsxs)("div",{className:"flex items-center gap-1.5 rounded-lg rounded-tl-none bg-white px-3 py-2 dark:bg-[#202c33] shadow-xs",children:[(0,a.jsx)("span",{className:"text-[10px] font-semibold text-emerald-600 dark:text-emerald-400",children:"escribiendo"}),(0,a.jsx)("div",{className:"flex items-center gap-1",children:[0,1,2].map(e=>(0,a.jsx)(s.motion.span,{className:"h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400",animate:{y:[0,-3,0],opacity:[.4,1,.4]},transition:{duration:.6,repeat:1/0,delay:.15*e}},e))})]})})]})})]})}),(0,a.jsxs)("div",{className:"z-10 flex shrink-0 items-center gap-2 bg-[#f0f2f5] p-2.5 dark:bg-[#111b21] border-t border-neutral-200/40 dark:border-neutral-800/40",children:[(0,a.jsx)("button",{type:"button","aria-label":"Emojis",className:"p-1 text-neutral-600 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400",children:(0,a.jsx)(f,{className:"h-4 w-4"})}),(0,a.jsx)("button",{type:"button","aria-label":"Adjuntar archivo o ficha",className:"p-1 text-neutral-600 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400",children:(0,a.jsx)(u,{className:"h-4 w-4"})}),(0,a.jsx)("div",{className:"flex-1 rounded-lg bg-white px-3 py-1.5 text-xs text-neutral-400 dark:bg-[#2a3942] dark:text-neutral-400",children:"Escribe un mensaje o indicación clínica..."}),(0,a.jsx)("button",{type:"button","aria-label":"Grabar audio",className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white transition-colors hover:bg-emerald-600 shadow-xs",children:(0,a.jsx)(h,{className:"h-4 w-4"})})]})]})]})}),(0,a.jsx)("div",{className:"relative z-20 flex h-3.5 w-[105%] max-w-[520px] items-start justify-center rounded-b-xl bg-neutral-300 sm:h-4 sm:max-w-[670px] md:max-w-[770px] dark:bg-neutral-800 shadow-lg",children:(0,a.jsx)("div",{className:"h-1.5 w-14 rounded-b-md bg-neutral-400/90 sm:w-20 dark:bg-neutral-700/90"})})]})}var N=e.i(23962),k=e.i(72520),C=e.i(12475),q=e.i(78583);function z({className:e}){return(0,a.jsx)("section",{id:"comunicacion-clinica",className:`relative w-full py-20 md:py-28 px-4 md:px-8 bg-[#040e1a] text-white overflow-hidden border-t border-white/[0.06] ${e||""}`,children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto relative z-10",children:[(0,a.jsxs)("div",{className:"text-center max-w-3xl mx-auto mb-14 md:mb-16",children:[(0,a.jsx)("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight text-balance",children:"Comunicación clínica directa con tu paciente"}),(0,a.jsx)("p",{className:"text-base sm:text-lg text-zinc-300 leading-relaxed text-balance",children:"Envía la anamnesis previa y las pautas de ejercicios directo al WhatsApp del paciente en un clic, manteniendo cada documento vinculado a su ficha clínica."})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[(0,a.jsx)("div",{className:"lg:col-span-8 flex justify-center w-full",children:(0,a.jsx)(j,{})}),(0,a.jsxs)("div",{className:"lg:col-span-4 flex flex-col gap-4",children:[(0,a.jsxs)("div",{className:"p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-emerald-500/35",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-2.5",children:[(0,a.jsx)("div",{className:"p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400",children:(0,a.jsx)(N.QrCode,{size:20,"aria-hidden":"true"})}),(0,a.jsx)("h3",{className:"font-semibold text-white text-base",children:"Admisión previa por QR o enlace"})]}),(0,a.jsx)("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Comparte el enlace o código QR por WhatsApp para que el paciente complete su anamnesis desde su celular antes de llegar al box."})]}),(0,a.jsxs)("div",{className:"p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-emerald-500/35",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-2.5",children:[(0,a.jsx)("div",{className:"p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400",children:(0,a.jsx)(C.Dumbbell,{size:20,"aria-hidden":"true"})}),(0,a.jsx)("h3",{className:"font-semibold text-white text-base",children:"Pautas de ejercicios en PDF"})]}),(0,a.jsx)("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Prescribe rutinas del catálogo anatómico con series, repeticiones y carga, y despacha el PDF membretado al WhatsApp del paciente."})]}),(0,a.jsxs)("div",{className:"p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-sky-500/35",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 mb-2.5",children:[(0,a.jsx)("div",{className:"p-2.5 rounded-xl bg-sky-500/20 text-sky-400",children:(0,a.jsx)(q.FileText,{size:20,"aria-hidden":"true"})}),(0,a.jsx)("h3",{className:"font-semibold text-white text-base",children:"Certificados para Isapres y médicos"})]}),(0,a.jsx)("p",{className:"text-sm text-zinc-300 leading-relaxed",children:"Emite resúmenes de evolución y detalles de sesiones con códigos FONASA listos para reembolso en Isapres o entrega al médico derivador."})]}),(0,a.jsx)("div",{className:"pt-2",children:(0,a.jsxs)(t.default,{href:"/#contact",className:"inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-colors duration-200",children:["Agendar demo gratuita",(0,a.jsx)(k.ArrowRight,{size:15,"aria-hidden":"true"})]})})]})]})]})})}e.s(["KenkomedChatShowcase",()=>z,"default",0,z],11858)},10324,e=>{"use strict";var a=e.i(43476),t=e.i(22016),r=e.i(81418),s=e.i(38982),i=e.i(46897),n=e.i(72520);let o=[{icon:i.MapPin,title:"Desarrollado desde Concepción junto a kinesiólogos",description:"Construido en terreno en la Región del Biobío junto a profesionales clínicos para resolver la realidad diaria de consultas particulares, atención domiciliaria y centros de rehabilitación en Chile.",linkHref:"/solucion",linkLabel:"Conocer nuestra solución"},{icon:s.FlaskConical,title:"Respaldo en evidencia clínica internacional",description:"El motor de soporte a la decisión (DSS) integra 13 escalas funcionales validadas (Oswestry, LEFS, WOMAC, EVA, PSFS, Barthel y más) y criterios de derivación basados en guías clínicas (NICE, IASP y OMS).",linkHref:"/investigacion",linkLabel:"Ver base científica y escalas"},{icon:r.ShieldCheck,title:"Seguridad y normativa chilena de datos en salud",description:"Cifrado en tránsito y reposo, control de acceso por roles (Director Técnico, Kinesiólogo y Recepción), bloqueo automático en box y trazabilidad conforme a la Ley N° 20.584 y preparada para la Ley N° 21.719.",linkHref:"/seguridad",linkLabel:"Revisar arquitectura de seguridad"}];function l(){return(0,a.jsx)("section",{id:"respaldo-clinico","aria-labelledby":"backing-heading",className:"py-20 md:py-24 px-6 bg-surface/60 border-y border-border/60",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,a.jsxs)("div",{className:"max-w-2xl mx-auto text-center mb-12",children:[(0,a.jsx)("h2",{id:"backing-heading",className:"font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance",children:"Rigor clínico, evidencia y resguardo normativo"}),(0,a.jsx)("p",{className:"mt-3 text-base sm:text-lg text-foreground-muted leading-relaxed text-balance",children:"Kenkomed combina ingeniería de software y práctica kinesiológica real bajo los estándares de salud de Chile."})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:o.map(e=>{let r=e.icon;return(0,a.jsxs)("div",{className:"flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-2xs",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand mb-5",children:(0,a.jsx)(r,{className:"h-5 w-5","aria-hidden":"true"})}),(0,a.jsx)("h3",{className:"font-display text-lg font-bold text-foreground mb-2.5",children:e.title}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted leading-relaxed",children:e.description})]}),(0,a.jsx)("div",{className:"mt-6 pt-4 border-t border-border/60",children:(0,a.jsxs)(t.default,{href:e.linkHref,className:"inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline",children:[e.linkLabel,(0,a.jsx)(n.ArrowRight,{className:"h-4 w-4","aria-hidden":"true"})]})})]},e.title)})})]})})}e.s(["ClinicalBackingSection",()=>l])},7968,e=>{"use strict";var a=e.i(43476),t=e.i(46932),r=e.i(1859);let s=["Cruces de horarios y confusiones por agendas en papel o WhatsApp personal","Pautas de ejercicios en fotocopias o mensajes sueltos que el paciente extravía","Cálculo y graficación manual de escalas (EVA, Oswestry, WOMAC, LEFS)","Riesgo normativo (Ley 20.584 y 21.719) por fichas sin trazabilidad ni respaldo","Tiempo de consulta perdido transcribiendo datos básicos de ingreso y anamnesis"],i=["Agenda multi-box sincronizada con bloqueo atómico de cupos en tiempo real","Pautas de ejercicios en PDF membretado enviadas en 1 clic a WhatsApp y correo","13 cuestionarios y escalas calculadas automáticamente con gráficos de evolución","Trazabilidad de accesos, consentimiento digital y respaldo alineado con Ley 20.584 y 21.719","Admisión remota vía QR: el paciente completa su anamnesis desde el celular antes de la cita"],n={hidden:{},show:{transition:{staggerChildren:.06}}},o={hidden:{opacity:0,y:12},show:{opacity:1,y:0,transition:{duration:.45,ease:[.16,1,.3,1]}}},l=()=>(0,a.jsx)("section",{className:"relative w-full overflow-hidden bg-surface/60 border-y border-border/60 px-6 py-20 sm:py-28",id:"impact",children:(0,a.jsxs)("div",{className:"relative mx-auto max-w-5xl",children:[(0,a.jsxs)(t.motion.div,{initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"200px"},variants:n,className:"mx-auto max-w-2xl text-center",children:[(0,a.jsx)(t.motion.h2,{variants:o,className:"font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance",children:"Menos papeleo administrativo, más tiempo clínico con tu paciente"}),(0,a.jsx)(t.motion.p,{variants:o,className:"mt-4 text-base sm:text-lg leading-relaxed text-foreground-muted text-balance mx-auto max-w-xl",children:"Kenkomed reemplaza fichas en papel, planillas sueltas y cálculos manuales por un flujo clínico estructurado de principio a fin."})]}),(0,a.jsxs)("div",{className:"relative mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8",children:[(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"200px"},transition:{duration:.5,ease:[.16,1,.3,1]},className:"rounded-3xl border border-border bg-card p-6 sm:p-8",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2.5 text-sm font-semibold text-foreground-muted",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-bold text-xs",children:"–"}),"Flujo tradicional fragmentado"]}),(0,a.jsx)("ul",{className:"mt-5 space-y-3",children:s.map(e=>(0,a.jsxs)("li",{className:"flex items-start gap-3 rounded-xl bg-surface p-3.5 text-sm text-foreground-muted leading-relaxed",children:[(0,a.jsx)("span",{className:"mt-0.5 text-rose-500 font-bold shrink-0","aria-hidden":"true",children:"–"}),(0,a.jsx)("span",{children:e})]},e))})]}),(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"200px"},transition:{duration:.5,delay:.08,ease:[.16,1,.3,1]},className:"rounded-3xl border-2 border-brand/25 bg-card p-6 sm:p-8 shadow-sm",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2.5 text-sm font-semibold text-brand",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-emerald/15 text-emerald",children:(0,a.jsx)(r.RiCheckLine,{className:"h-3.5 w-3.5","aria-hidden":"true"})}),"Flujo clínico con Kenkomed"]}),(0,a.jsx)("ul",{className:"mt-5 space-y-3",children:i.map(e=>(0,a.jsxs)("li",{className:"flex items-start gap-3 rounded-xl bg-surface/80 border border-border/50 p-3.5 text-sm text-foreground leading-relaxed",children:[(0,a.jsx)(r.RiCheckLine,{className:"mt-0.5 text-emerald font-bold h-4 w-4 shrink-0","aria-hidden":"true"}),(0,a.jsx)("span",{className:"font-medium",children:e})]},e))})]})]})]})});function d(){return(0,a.jsx)(l,{})}e.s(["BeforeAfter",()=>d],7968)},7618,e=>{"use strict";var a=e.i(43476),t=e.i(47163),r=e.i(57688);let s=(0,e.i(75254).default)("quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);var i=e.i(95468),n=e.i(3116);let o={quote:"Llevo 2 meses con el software de gestión clínica Kenkomed y sin duda ha sido un gran acierto ya que me ha ayudado bastante a simplificar el trabajo administrativo con un sistema de registro clínico completo y detallado que me permite agendar pacientes, registrar evaluaciones y evoluciones clínicas facilitando el proceso y haciendo más ligero el trabajo de gestión de una manera mucho más organizada.",secondaryQuote:"Además debo agradecer la excelente disposición del equipo de soporte para resolver dudas y solucionar problemas que puedan surgir. Recomendado 100%.",author:"Klgo. David Barraza Oliveros",role:"Kinesiólogo especializado en movilidad funcional y envejecimiento saludable",image:"/images/fotodavid.jpeg",period:"Usuario activo · 2 meses de uso clínico",highlights:["Registro clínico completo y ordenado","Agendamiento y evoluciones en un solo lugar","Soporte clínico directo y oportuno"]};function l({item:e=o,className:l}){return(0,a.jsxs)("section",{className:(0,t.cn)("py-20 md:py-28 px-4 md:px-8 relative overflow-hidden bg-background",l),children:[(0,a.jsxs)("div",{className:"max-w-4xl mx-auto mb-10 text-center",children:[(0,a.jsx)("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance",children:"Experiencia real en consulta kinésica"}),(0,a.jsx)("p",{className:"text-foreground-muted mt-3 max-w-2xl mx-auto text-base md:text-lg",children:"Testimonio de un profesional de la salud en Chile que gestiona su práctica clínica diaria con Kenkomed."})]}),(0,a.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,a.jsxs)("div",{className:"relative rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12 shadow-sm overflow-hidden",children:[(0,a.jsx)(s,{className:"absolute right-6 top-6 h-16 w-16 md:h-24 md:w-24 text-brand/5 pointer-events-none stroke-1","aria-hidden":"true"}),(0,a.jsxs)("div",{className:"relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center text-center shrink-0 w-full md:w-52",children:[(0,a.jsx)("div",{className:"w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-border relative bg-surface",children:(0,a.jsx)(r.default,{src:e.image,alt:e.author,fill:!0,sizes:"(max-width: 640px) 128px, 144px",className:"object-cover object-top",priority:!1})}),(0,a.jsxs)("div",{className:"mt-4 flex flex-col items-center gap-1.5",children:[(0,a.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs font-semibold text-emerald bg-emerald/10 border border-emerald/20 px-2.5 py-0.5 rounded-full",children:[(0,a.jsx)(i.CheckCircle2,{className:"h-3.5 w-3.5 text-emerald","aria-hidden":"true"})," Kinesiólogo Clínico"]}),e.period&&(0,a.jsxs)("span",{className:"inline-flex items-center gap-1 text-xs text-foreground-muted font-medium",children:[(0,a.jsx)(n.Clock,{className:"h-3.5 w-3.5 text-foreground-muted","aria-hidden":"true"})," ",e.period]})]})]}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col justify-between text-left",children:[(0,a.jsxs)("blockquote",{className:"space-y-3.5 text-foreground text-sm sm:text-base leading-relaxed font-normal",children:[(0,a.jsxs)("p",{children:["“",e.quote,"”"]}),e.secondaryQuote&&(0,a.jsxs)("p",{className:"font-medium text-foreground bg-surface border-l-2 border-brand pl-3.5 py-1.5 rounded-r-md",children:["“",e.secondaryQuote,"”"]})]}),(0,a.jsxs)("div",{className:"mt-6 pt-5 border-t border-border/60",children:[(0,a.jsx)("p",{className:"font-display font-bold text-base sm:text-lg text-foreground",children:e.author}),(0,a.jsx)("p",{className:"text-xs sm:text-sm font-medium text-brand mt-0.5",children:e.role})]}),e.highlights&&e.highlights.length>0&&(0,a.jsx)("div",{className:"mt-5 flex flex-wrap gap-2 pt-1",children:e.highlights.map((e,t)=>(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs font-medium bg-surface border border-border text-foreground-muted px-3 py-1 rounded-full",children:[(0,a.jsx)(i.CheckCircle2,{className:"h-3.5 w-3.5 text-emerald shrink-0","aria-hidden":"true"}),e]},t))})]})]})]})})]})}e.s(["davidTestimonial",0,o,"default",()=>l],7618)},67585,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let r=e.r(32061);function s({reason:e,children:a}){if("u"<typeof window)throw Object.defineProperty(new r.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}},9885,(e,a,t)=>{"use strict";function r(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return r}})},52157,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return l}});let r=e.r(43476),s=e.r(74080),i=e.r(63599),n=e.r(9885),o=e.r(43369);function l({moduleIds:e}){if("u">typeof window)return null;let a=i.workAsyncStorage.getStore();if(void 0===a)return null;let t=[];if(a.reactLoadableManifest&&e){let r=a.reactLoadableManifest;for(let a of e){if(!r[a])continue;let e=r[a].files;t.push(...e)}}if(0===t.length)return null;let l=(0,o.getDeploymentIdQueryOrEmptyString)();return(0,r.jsx)(r.Fragment,{children:t.map(e=>{let t=`${a.assetPrefix}/_next/${(0,n.encodeURIPath)(e)}${l}`;return e.endsWith(".css")?(0,r.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style",nonce:a.nonce},e):((0,s.preload)(t,{as:"script",fetchPriority:"low",nonce:a.nonce}),null)})})}},85161,e=>{"use strict";var a=e.i(43476),t=e.i(22016),r=e.i(72520),s=e.i(95468),i=e.i(46932),n=e.i(30408),o=e.i(71645),l=e.i(88653);let d=(0,e.i(75254).default)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);var c=e.i(31343),m=e.i(47163);let p=[{id:"panel",title:"Panel",label:"Panel de Control",src:"/software/panelphone_clean.png",alt:"Panel de control clínico Kenkomed",tag:"Turno Activo"},{id:"agenda",title:"Agenda",label:"Agenda Semanal",src:"/software/agendaphone_clean.png",alt:"Agenda multi-box y citas de pacientes",tag:"Multi-Box"},{id:"estadisticas",title:"Estadísticas",label:"Outcomes & EVA",src:"/software/estadisticasphone_clean.png",alt:"Estadísticas de recuperación y escalas clínicas",tag:"Resultados"},{id:"sesion",title:"Escalas",label:"Escalas Clínicas",src:"/software/sesionphone_clean.png",alt:"Escalas funcionales y cuestionarios validados",tag:"Oswestry / LEFS"},{id:"historial",title:"Historial",label:"Historial Clínico",src:"/software/historialphone_clean.png",alt:"Historial clínico digital Ley 20.584",tag:"Ley 20.584"},{id:"anamnesis",title:"Anamnesis",label:"Admisión Remota",src:"/software/anamnesisphone_clean.png",alt:"Formulario de admisión remota y mapa de dolor",tag:"QR Móvil"}];function x({className:e}){let[t,r]=(0,o.useState)(0),[s,n]=(0,o.useState)(!1),[x,u]=(0,o.useState)(!1),[h,f]=(0,o.useState)(!1),g=(0,o.useRef)(null),b=(0,o.useRef)(null),v=(0,o.useCallback)(()=>{r(e=>(e+1)%p.length)},[]);(0,o.useEffect)(()=>{if(s||x||h){b.current&&clearInterval(b.current);return}return b.current=setInterval(()=>{v()},4500),()=>{b.current&&clearInterval(b.current)}},[s,x,h,v]);let y=p[t];return(0,a.jsxs)("div",{ref:g,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onFocusCapture:()=>f(!0),onBlurCapture:e=>{e.currentTarget.contains(e.relatedTarget)||f(!1)},className:(0,m.cn)("relative flex flex-col items-center justify-center select-none py-2",e),children:[(0,a.jsx)("style",{children:`
        @keyframes k-hero-phone-float {
          0%, 100% {
            transform: perspective(1200px) translateY(4px) rotateY(-5deg) rotateX(2deg);
          }
          50% {
            transform: perspective(1200px) translateY(-6px) rotateY(-2deg) rotateX(1deg);
          }
        }

        .k-hero-phone-device {
          animation: k-hero-phone-float 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          @media (prefers-reduced-motion: reduce) {
            animation: none;
            transform: none;
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}),(0,a.jsxs)("div",{className:"k-hero-phone-device relative w-[290px] xs:w-[310px] sm:w-[340px] h-[580px] xs:h-[620px] sm:h-[650px]",children:[(0,a.jsx)("div",{className:"absolute inset-0 rounded-[52px] shadow-[0_24px_50px_-15px_rgba(15,23,42,0.22)]",style:{background:"linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 22%, #e2e8f0 45%, #94a3b8 75%, #cbd5e1 100%)"}}),(0,a.jsx)("div",{className:"absolute -left-[3px] top-28 w-[4px] h-12 rounded-l-md bg-slate-300"}),(0,a.jsx)("div",{className:"absolute -left-[3px] top-44 w-[4px] h-12 rounded-l-md bg-slate-300"}),(0,a.jsx)("div",{className:"absolute -right-[3px] top-36 w-[4px] h-16 rounded-r-md bg-slate-300"}),(0,a.jsx)("div",{className:"absolute inset-[4px] rounded-[48px] bg-[#090d16]"}),(0,a.jsxs)("div",{className:"absolute inset-[10px] rounded-[42px] overflow-hidden bg-[#f8fafc] border border-slate-200/80 flex flex-col select-none",children:[(0,a.jsxs)("div",{className:"absolute left-1/2 -translate-x-1/2 top-3 w-[100px] h-[28px] rounded-full bg-black z-40 flex items-center justify-between px-3 shadow-sm",children:[(0,a.jsx)("div",{className:"w-3 h-3 rounded-full bg-[#111927] border border-slate-800 flex items-center justify-center",children:(0,a.jsx)("div",{className:"w-1.5 h-1.5 rounded-full bg-sky-950/80"})}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),(0,a.jsx)("span",{className:"text-[9px] font-sans font-bold text-emerald-400",children:"DSS"})]})]}),(0,a.jsxs)("div",{className:"relative z-30 h-11 px-7 flex items-center justify-between text-xs font-semibold text-slate-700 pt-1",children:[(0,a.jsx)("span",{children:"09:41"}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsxs)("svg",{className:"w-3.5 h-2.5 fill-current text-slate-700",viewBox:"0 0 18 12","aria-hidden":"true",children:[(0,a.jsx)("rect",{x:"0",y:"8",width:"3",height:"4",rx:"0.5"}),(0,a.jsx)("rect",{x:"4.5",y:"5.5",width:"3",height:"6.5",rx:"0.5"}),(0,a.jsx)("rect",{x:"9",y:"3",width:"3",height:"9",rx:"0.5"}),(0,a.jsx)("rect",{x:"13.5",y:"0",width:"3",height:"12",rx:"0.5"})]}),(0,a.jsx)("span",{className:"text-[10px] font-bold text-brand",children:"5G"}),(0,a.jsx)("div",{className:"w-5 h-2.5 border border-slate-500 rounded-[3px] p-[1px] flex items-center",children:(0,a.jsx)("div",{className:"w-full h-full bg-emerald-500 rounded-[1.5px]"})})]})]}),(0,a.jsxs)("div",{className:"relative z-20 px-4 pt-1 pb-2.5 bg-white border-b border-slate-200/80",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("img",{src:"/images/LogoKenko.png",alt:"",width:20,height:20,className:"w-5 h-5 object-contain"}),(0,a.jsxs)("span",{className:"font-display font-extrabold text-sm tracking-tight text-slate-900",children:["Kenko",(0,a.jsx)("span",{className:"text-emerald",children:"med"})]}),(0,a.jsx)("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200",children:"Box 2"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"text-[10px] font-semibold px-1.5 py-0.5 rounded bg-sky-50 text-brand border border-sky-200",children:y.tag}),(0,a.jsx)("div",{className:"w-6 h-6 rounded-full bg-brand flex items-center justify-center text-[10px] font-bold text-white",children:"FM"})]})]}),(0,a.jsx)("div",{className:"flex gap-1.5 mt-2 overflow-x-auto no-scrollbar py-0.5",role:"tablist","aria-label":"Vistas de la plataforma móvil",children:p.map((e,s)=>{let i=s===t;return(0,a.jsx)("button",{type:"button",role:"tab","aria-selected":i,onClick:()=>r(s),className:(0,m.cn)("text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer",i?"bg-brand text-white font-bold":"bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/80"),children:e.title},e.id)})})]}),(0,a.jsx)("div",{className:"relative flex-1 w-full overflow-hidden bg-slate-900",children:(0,a.jsx)(l.AnimatePresence,{mode:"wait",children:(0,a.jsx)(i.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25,ease:"easeOut"},className:"w-full h-full relative",children:(0,a.jsx)("img",{src:y.src,alt:y.alt,width:320,height:540,className:"w-full h-full object-cover object-top select-none pointer-events-none",...0===t?{fetchPriority:"high"}:{fetchPriority:"low",loading:"lazy"}})},y.id)})}),(0,a.jsx)("div",{className:"h-6 w-full flex items-center justify-center bg-white border-t border-slate-200/60 shrink-0 z-30",children:(0,a.jsx)("div",{className:"w-28 h-1 rounded-full bg-slate-300"})})]})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 mt-4 z-20",children:[(0,a.jsx)("div",{className:"flex items-center gap-1.5",role:"group","aria-label":"Seleccionar captura",children:p.map((e,s)=>(0,a.jsx)("button",{type:"button","aria-label":`Ver captura ${e.label}`,"aria-current":s===t?"true":void 0,onClick:()=>r(s),className:(0,m.cn)("h-2 rounded-full transition-all cursor-pointer",s===t?"w-6 bg-brand":"w-2 bg-slate-300 hover:bg-slate-400")},e.id))}),(0,a.jsx)("button",{type:"button",onClick:()=>u(e=>!e),"aria-label":x?"Reanudar rotación de capturas":"Pausar rotación de capturas","aria-pressed":x,className:"ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-foreground-muted hover:text-foreground transition-colors cursor-pointer",children:x?(0,a.jsx)(c.Play,{size:11,"aria-hidden":"true"}):(0,a.jsx)(d,{size:11,"aria-hidden":"true"})})]})]})}let u=[{value:13,suffix:"",label:"Escalas clínicas validadas (Oswestry, LEFS, WOMAC, EVA y más)"},{value:14,suffix:" págs.",label:"Anamnesis remota vía QR que el paciente completa antes de su cita"},{value:1,suffix:" clic",label:"Envío de pautas por WhatsApp e informes PDF para médicos e Isapres"}];function h({stat:e,isVisible:t}){let r=(0,n.useCountUp)(e.value,t,1200,"",e.suffix);return(0,a.jsxs)("div",{className:"hm-proof-stat",children:[(0,a.jsx)("p",{className:"hm-proof-number",children:r}),(0,a.jsx)("p",{className:"hm-proof-label",children:e.label})]})}function f(){let{ref:e,isVisible:o}=(0,n.useReveal)({threshold:.3}),l={hidden:{opacity:0,y:12},show:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:28}}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        .hm-hero-section {
          position: relative;
          padding-top: 5rem;
          padding-bottom: 2.5rem;
          background: var(--background);
          overflow: hidden;
        }
        .hm-hero-grid {
          max-width: 84rem;
          width: 100%;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl) var(--space-3xl);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: var(--space-3xl);
          align-items: center;
          box-sizing: border-box;
        }
        .hm-hero-outlier {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--kenko-sapphire);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          background: oklch(0.48 0.18 246 / 0.06);
          border: 1px solid oklch(0.48 0.18 246 / 0.14);
          margin-bottom: var(--space-md);
          max-width: 100%;
        }
        .hm-outlier-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--kenko-mint);
          flex-shrink: 0;
        }
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
          word-break: break-word;
        }
        .hm-hero-h1-highlight { color: var(--kenko-sapphire); }
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 50ch;
          word-break: break-word;
        }
        .hm-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-lg);
        }
        .hm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--kenko-sapphire);
          color: oklch(0.99 0.002 246);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          border-radius: 999px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .hm-btn-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
        }
        .hm-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          font-size: 0.9375rem;
          font-weight: 500;
          padding: 0.875rem 1.5rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--card);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .hm-btn-ghost:hover {
          color: var(--kenko-sapphire);
          border-color: var(--kenko-sapphire);
        }
        .hm-trust-badges {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem 1.25rem;
        }
        .hm-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--foreground-muted);
        }
        .hm-visual-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-width: 0;
          max-width: 100%;
        }
        .hm-float-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 0.65rem 0.9rem;
          box-shadow: 0 12px 28px -12px oklch(0.12 0.02 246 / 0.16);
          z-index: 20;
        }
        .hm-float-reminder { left: -1rem; bottom: 5rem; }
        .hm-float-title { font-size: 0.75rem; font-weight: 600; color: var(--foreground); }
        .hm-float-sub { font-size: 0.6875rem; color: var(--foreground-muted); }
        .hm-float-waitlist { right: -0.5rem; top: 4.5rem; }
        .hm-float-waitlist .hm-float-title { color: var(--kenko-sapphire); }
        .hm-proof-strip {
          position: relative;
          z-index: 10;
          max-width: 84rem;
          margin-inline: auto;
          padding: var(--space-md) var(--space-lg) var(--space-2xl);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }
        .hm-proof-stat {
          border-radius: 1.25rem;
          border: 1px solid var(--border);
          background: var(--card);
          padding: var(--space-lg);
        }
        .hm-proof-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
          color: var(--foreground);
          font-variant-numeric: tabular-nums;
        }
        .hm-proof-label {
          font-size: 0.875rem;
          color: var(--foreground-muted);
          margin-top: 0.25rem;
          line-height: 1.45;
        }
        @media (max-width: 960px) {
          .hm-hero-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: var(--space-2xl);
          }
          .hm-float-card { display: none !important; }
        }
        @media (max-width: 640px) {
          .hm-hero-section {
            padding-top: 3.5rem;
            padding-bottom: 1.5rem;
          }
          .hm-hero-grid {
            padding-inline: 1.25rem;
            padding-block: var(--space-xl) var(--space-xl);
            gap: var(--space-xl);
          }
          .hm-hero-outlier {
            font-size: 0.75rem;
            padding: 0.3rem 0.75rem;
          }
          .hm-hero-h1 {
            font-size: clamp(1.85rem, 7.5vw, 2.5rem);
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 0.75rem;
          }
          .hm-hero-lede {
            font-size: 0.9375rem;
            line-height: 1.55;
            margin-bottom: 1.25rem;
            max-width: 100%;
          }
          .hm-hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 0.625rem;
            margin-bottom: 1.25rem;
          }
          .hm-btn-primary, .hm-btn-ghost {
            justify-content: center;
            width: 100%;
            text-align: center;
          }
          .hm-proof-strip {
            grid-template-columns: 1fr;
            padding-inline: 1.25rem;
            gap: var(--space-xs);
          }
          .hm-proof-stat {
            padding: var(--space-md);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-btn-primary, .hm-btn-ghost {
            transition: none;
          }
          .hm-btn-primary:hover {
            transform: none;
          }
        }
      `}),(0,a.jsx)("section",{className:"hm-hero-section","aria-label":"Sección principal",children:(0,a.jsxs)("div",{className:"hm-hero-grid relative z-10",children:[(0,a.jsxs)(i.motion.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},initial:"hidden",animate:"show",className:"w-full min-w-0 max-w-full",children:[(0,a.jsxs)(i.motion.div,{variants:l,className:"hm-hero-outlier",children:[(0,a.jsx)("span",{className:"hm-outlier-dot","aria-hidden":"true"}),"Software clínico y DSS para kinesiología en Chile"]}),(0,a.jsxs)(i.motion.h1,{variants:l,className:"hm-hero-h1",children:["El software clínico creado"," ",(0,a.jsx)("span",{className:"hm-hero-h1-highlight",children:"por y para kinesiólogos."})]}),(0,a.jsx)(i.motion.p,{variants:l,className:"hm-hero-lede",children:"Agenda multi-box, fichas SOAP con 13 escalas validadas, admisión remota por QR y pautas de ejercicios a WhatsApp en 1 clic. Alineado con la normativa de salud en Chile."}),(0,a.jsxs)(i.motion.div,{variants:l,className:"hm-hero-actions",children:[(0,a.jsxs)(t.default,{href:"/#contact",className:"hm-btn-primary",children:["Agendar demo gratuita",(0,a.jsx)(r.ArrowRight,{size:15,"aria-hidden":"true"})]}),(0,a.jsx)(t.default,{href:"/funcionalidades",className:"hm-btn-ghost",children:"Ver funcionalidades"})]}),(0,a.jsxs)(i.motion.div,{variants:l,className:"hm-trust-badges",children:[(0,a.jsxs)("span",{className:"hm-trust-badge",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald shrink-0","aria-hidden":"true"}),"Alineado con Ley 20.584 y 21.719"]}),(0,a.jsxs)("span",{className:"hm-trust-badge",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald shrink-0","aria-hidden":"true"}),"Demo guiada sin costo"]}),(0,a.jsxs)("span",{className:"hm-trust-badge",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald shrink-0","aria-hidden":"true"}),"Onboarding y migración asistida"]})]})]}),(0,a.jsxs)("div",{className:"hm-visual-wrap",children:[(0,a.jsx)(i.motion.div,{className:"w-full flex justify-center",initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.16,1,.3,1],delay:.1},children:(0,a.jsx)(x,{})}),(0,a.jsxs)(i.motion.div,{className:"hm-float-card hm-float-reminder hidden sm:flex","aria-hidden":"true",initial:{opacity:0,scale:.95,y:8},animate:{opacity:1,scale:1,y:0},transition:{duration:.45,delay:.7,ease:[.16,1,.3,1]},children:[(0,a.jsx)("div",{className:"w-7 h-7 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0",children:(0,a.jsx)("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.285"})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-float-title",children:"Pauta PDF"}),(0,a.jsx)("p",{className:"hm-float-sub",children:"Enviada a WhatsApp"})]})]}),(0,a.jsx)(i.motion.div,{className:"hm-float-card hm-float-waitlist hidden sm:flex","aria-hidden":"true",initial:{opacity:0,scale:.95,y:-8},animate:{opacity:1,scale:1,y:0},transition:{duration:.45,delay:.85,ease:[.16,1,.3,1]},children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-float-title",children:"Alerta DSS"}),(0,a.jsx)("p",{className:"hm-float-sub",children:"Bandera roja detectada"})]})})]})]})}),(0,a.jsx)("div",{ref:e,children:(0,a.jsx)("div",{className:"hm-proof-strip",children:u.map(e=>(0,a.jsx)(h,{stat:e,isVisible:o},e.label))})})]})}e.s(["Hero",()=>f],85161)},96,e=>{"use strict";var a=e.i(43476),t=e.i(70065),r=e.i(98919),s=e.i(51804);function i(){return(0,a.jsx)("div",{className:"w-full max-w-6xl mx-auto",children:(0,a.jsxs)("div",{className:"relative z-10 grid grid-cols-6 gap-5",children:[(0,a.jsx)(t.Card,{className:"relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-border bg-card shadow-xs",children:(0,a.jsxs)(t.CardContent,{className:"pt-6 flex flex-col h-full",children:[(0,a.jsx)("div",{className:"relative w-full h-44 rounded-xl border border-border/80 bg-surface overflow-hidden",children:(0,a.jsx)("img",{src:"/software/anamnesisphone_clean.png",alt:"Interfaz de admisión remota y mapa corporal en Kenkomed",width:320,height:240,loading:"lazy",className:"w-full h-full object-cover object-top"})}),(0,a.jsxs)("div",{className:"mt-5 space-y-2",children:[(0,a.jsx)("h3",{className:"text-lg font-display font-bold text-foreground",children:"Admisión Remota por QR"}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"El paciente completa su anamnesis de 14 páginas, mapa de dolor y antecedentes desde su celular antes de entrar al box."})]})]})}),(0,a.jsx)(t.Card,{className:"relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-border bg-card shadow-xs",children:(0,a.jsxs)(t.CardContent,{className:"pt-6 flex flex-col h-full",children:[(0,a.jsx)("div",{className:"relative w-full h-44 rounded-xl border border-border/80 bg-surface overflow-hidden",children:(0,a.jsx)("img",{src:"/software/DSS.png",alt:"Panel de soporte a la decisión clínica y escalas validadas en Kenkomed",width:380,height:240,loading:"lazy",className:"w-full h-full object-cover object-left-top"})}),(0,a.jsxs)("div",{className:"mt-5 space-y-2",children:[(0,a.jsx)("h3",{className:"text-lg font-display font-bold text-foreground",children:"Alertas Clínicas y Banderas Rojas"}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"Sistema de soporte a la decisión (DSS) que destaca signos de alarma, comorbilidades y puntajes de 13 escalas al instante."})]})]})}),(0,a.jsx)(t.Card,{className:"relative col-span-full overflow-hidden sm:col-span-6 lg:col-span-2 border-border bg-card shadow-xs",children:(0,a.jsxs)(t.CardContent,{className:"pt-6 flex flex-col h-full",children:[(0,a.jsx)("div",{className:"relative w-full h-44 rounded-xl border border-border/80 bg-surface overflow-hidden",children:(0,a.jsx)("img",{src:"/software/Objetivos_y_prescripcion.png",alt:"Catálogo anatómico de prescripción de ejercicios en Kenkomed",width:380,height:240,loading:"lazy",className:"w-full h-full object-cover object-left-top"})}),(0,a.jsxs)("div",{className:"mt-5 space-y-2",children:[(0,a.jsx)("h3",{className:"text-lg font-display font-bold text-foreground",children:"Pautas de Ejercicios en PDF"}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"Catálogo anatómico con dosificación clínica (series, repeticiones y carga) y envío en 1 clic a WhatsApp o correo."})]})]})}),(0,a.jsx)(t.Card,{className:"relative col-span-full overflow-hidden lg:col-span-3 border-border bg-card shadow-xs",children:(0,a.jsxs)(t.CardContent,{className:"grid h-full pt-6 sm:grid-cols-2 gap-6 items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center space-y-3",children:[(0,a.jsx)("div",{className:"flex size-12 rounded-xl border border-brand/20 bg-brand/10 text-brand items-center justify-center",children:(0,a.jsx)(r.Shield,{className:"size-6",strokeWidth:1.75,"aria-hidden":"true"})}),(0,a.jsx)("h3",{className:"text-lg font-display font-bold text-foreground",children:"Trazabilidad y Seguridad Clínica"}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"Consentimiento informado digital, historial de accesos por rol y bloqueo automático de pantalla en box."})]}),(0,a.jsxs)("div",{className:"rounded-xl border border-border bg-surface p-5 flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"space-y-2.5",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between text-xs font-semibold text-foreground bg-card p-2.5 rounded-lg border border-border",children:[(0,a.jsx)("span",{children:"Historial de Accesos"}),(0,a.jsx)("span",{className:"text-emerald font-bold",children:"Fecha, hora y rol"})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between text-xs font-semibold text-foreground bg-card p-2.5 rounded-lg border border-border",children:[(0,a.jsx)("span",{children:"Ficha e Informes"}),(0,a.jsx)("span",{className:"text-brand font-bold",children:"Exportación PDF"})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between text-xs font-semibold text-foreground bg-card p-2.5 rounded-lg border border-border",children:[(0,a.jsx)("span",{children:"Privacidad en Box"}),(0,a.jsx)("span",{className:"text-foreground font-bold",children:"Bloqueo automático"})]})]}),(0,a.jsxs)("div",{className:"mt-3.5 flex items-center justify-between border-t border-border pt-2.5",children:[(0,a.jsx)("span",{className:"text-xs font-semibold text-foreground-muted",children:"Marco normativo"}),(0,a.jsx)("span",{className:"text-xs font-bold text-emerald",children:"Ley 20.584 y 21.719"})]})]})]})}),(0,a.jsx)(t.Card,{className:"relative col-span-full overflow-hidden lg:col-span-3 border-border bg-card shadow-xs",children:(0,a.jsxs)(t.CardContent,{className:"grid h-full pt-6 sm:grid-cols-2 gap-6 items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col justify-center space-y-3",children:[(0,a.jsx)("div",{className:"flex size-12 rounded-xl border border-brand/20 bg-brand/10 text-brand items-center justify-center",children:(0,a.jsx)(s.CalendarCheck,{className:"size-6",strokeWidth:1.75,"aria-hidden":"true"})}),(0,a.jsx)("h3",{className:"text-lg font-display font-bold text-foreground",children:"Agenda Multi-Box Sincronizada"}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted leading-relaxed",children:"Coordina atención simultánea en múltiples boxes y gimnasio con portal de reserva online y control de packs."})]}),(0,a.jsxs)("div",{className:"flex flex-col justify-center space-y-3 rounded-xl border border-border bg-surface p-5",children:[(0,a.jsxs)("div",{className:"rounded-lg border border-border bg-card p-3 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("span",{className:"text-xs font-bold text-foreground",children:"Box 1: Gimnasio Terapéutico"}),(0,a.jsx)("span",{className:"text-xs bg-emerald/15 text-emerald font-bold px-2 py-0.5 rounded-full",children:"En sesión"})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("span",{className:"text-xs font-bold text-foreground",children:"Box 2: Evaluación / Camilla"}),(0,a.jsx)("span",{className:"text-xs bg-brand/10 text-brand font-bold px-2 py-0.5 rounded-full",children:"Disponible"})]})]}),(0,a.jsx)("p",{className:"text-xs text-foreground-muted",children:"Bloqueo atómico de horarios para evitar cruces entre profesionales y boxes."})]})]})})]})})}var n=e.i(47163),o=e.i(30408);function l({className:e,kicker:t="Panel clínico en vivo",headline:r="Tu clínica completa en una pantalla",caption:s="Fichas SOAP, agenda multi-box, 13 escalas validadas y alertas clínicas DSS en vivo para tu equipo.",imageSrc:i="/software/panel.png"}){let{ref:l,isVisible:d}=(0,o.useReveal)({threshold:.1,rootMargin:"60px"});return(0,a.jsxs)("div",{ref:l,className:(0,n.cn)("relative w-full max-w-6xl mx-auto my-4",e),style:{"--laptop-play-state":d?"running":"paused"},children:[(0,a.jsx)("style",{children:`
        /* ── 21st.dev mg-dev-laptop Exact Engine ── */
        .v-dev-laptop-root {
          container-type: inline-size;
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 480px;
          border-radius: 2rem;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04);
          color: #0f172a;
          font-family: inherit;
          box-sizing: border-box;
          user-select: none;
        }

        .v-dev-laptop-root *,
        .v-dev-laptop-root *::before,
        .v-dev-laptop-root *::after {
          box-sizing: border-box;
        }

        /* Ambient haze */
        .v-dev-laptop-root .haze {
          position: absolute;
          inset: 0;
          background: radial-gradient(50% 35% at 75% 85%, rgba(2, 132, 199, 0.04), transparent 70%);
          pointer-events: none;
        }

        /* 3D Scene Viewport */
        .v-dev-laptop-root .scene {
          position: absolute;
          inset: 0;
          perspective: 165cqw;
          perspective-origin: 50% 22%;
        }

        /* 3D Rig - animated 21st.dev orbit (runs once, stays open) */
        .v-dev-laptop-root .rig {
          position: absolute;
          left: 50%;
          top: 33.4cqw;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          animation: dev-laptop-orbit 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        /* Ground Shadow */
        .v-dev-laptop-root .shadow {
          position: absolute;
          left: -36cqw;
          top: 0;
          width: 72cqw;
          height: 48cqw;
          transform-origin: 50% 0;
          transform: rotateX(90deg) translate3d(0, -7cqw, -1.35cqw);
          background: radial-gradient(46% 40% at 50% 46%, rgba(15, 23, 42, 0.32), rgba(15, 23, 42, 0.09) 55%, transparent 100%);
          filter: blur(5px);
        }

        /* Laptop Base (Keyboard Deck) */
        .v-dev-laptop-root .base {
          position: absolute;
          left: -23cqw;
          top: 0;
          width: 46cqw;
          height: 31cqw;
          transform-origin: 50% 0;
          transform: rotateX(90deg);
          transform-style: preserve-3d;
          border-radius: 0.5cqw 0.5cqw 2.2cqw 2.2cqw;
          background: linear-gradient(180deg, #c4c4ca 0%, #dcdce1 18%, #d6d6db 70%, #cbcbd1 100%);
          box-shadow: inset 0 -0.3cqw 0.3cqw rgba(255, 255, 255, 0.75), inset 0 0.25cqw 0.5cqw rgba(0, 0, 0, 0.2);
        }

        /* Chiclet keyboard */
        .v-dev-laptop-root .kb {
          position: absolute;
          left: 6.2cqw;
          right: 6.2cqw;
          top: 2.4cqw;
          height: 12.4cqw;
          border-radius: 0.7cqw;
          background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0) 0 2.16cqw, #121215 2.16cqw 2.48cqw),
                      repeating-linear-gradient(90deg, #2b2b31 0 2.3cqw, #121215 2.3cqw 2.62cqw);
          box-shadow: 0 0 0 0.22cqw #bdbdc3, inset 0 0.1cqw 0.3cqw rgba(0, 0, 0, 0.6);
        }

        /* Speaker Grilles */
        .v-dev-laptop-root .spk {
          position: absolute;
          top: 2.4cqw;
          height: 12.4cqw;
          width: 3.4cqw;
          background: radial-gradient(circle, rgba(40, 41, 44, 0.4) 0.11cqw, rgba(0, 0, 0, 0) 0.16cqw) 0 0/0.55cqw 0.55cqw;
        }
        .v-dev-laptop-root .spk.l { left: 1.6cqw; }
        .v-dev-laptop-root .spk.r { right: 1.6cqw; }

        /* Trackpad */
        .v-dev-laptop-root .tp {
          position: absolute;
          left: 50%;
          top: 16.8cqw;
          width: 17cqw;
          height: 11.4cqw;
          margin-left: -8.5cqw;
          border-radius: 1cqw;
          background: linear-gradient(180deg, #d2d2d8, #cacad0);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08), inset 0 0.12cqw 0.2cqw rgba(255, 255, 255, 0.7);
        }

        /* Sapphire/Teal Screen Light Spill */
        .v-dev-laptop-root .spill {
          position: absolute;
          left: 3cqw;
          right: 3cqw;
          top: 0;
          height: 14cqw;
          background: radial-gradient(60% 100% at 50% 0%, rgba(2, 132, 199, 0.45) 0%, rgba(2, 132, 199, 0.12) 42%, transparent 72%);
          opacity: 0;
          animation: dev-laptop-on 3.4s ease forwards;
          animation-play-state: var(--laptop-play-state, running);
          pointer-events: none;
        }

        /* Front Edge Lip */
        .v-dev-laptop-root .lip {
          position: absolute;
          left: 1.6cqw;
          right: 1.6cqw;
          top: 100%;
          height: 1.15cqw;
          transform-origin: 50% 0;
          transform: rotateX(-90deg);
          border-radius: 0 0 1.2cqw 1.2cqw;
          background: linear-gradient(180deg, #bcbcc2, #8b8b93);
        }
        .v-dev-laptop-root .lip i {
          position: absolute;
          left: 50%;
          top: 0;
          width: 7cqw;
          height: 0.45cqw;
          margin-left: -3.5cqw;
          border-radius: 0 0 0.6cqw 0.6cqw;
          background: #7d7d85;
        }

        /* Screen Lid (Upright open in 3D - animated opening, stays open) */
        .v-dev-laptop-root .lid {
          position: absolute;
          left: -23cqw;
          top: -27.5cqw;
          width: 46cqw;
          height: 27.5cqw;
          transform-origin: 50% 100%;
          transform-style: preserve-3d;
          animation: dev-laptop-lid 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        .v-dev-laptop-root .front,
        .v-dev-laptop-root .back {
          position: absolute;
          inset: 0;
          border-radius: 1.6cqw 1.6cqw 0.5cqw 0.5cqw;
          backface-visibility: hidden;
        }

        .v-dev-laptop-root .front {
          background: #0a0a0c;
          box-shadow: inset 0 0 0 0.2cqw #5a5a62, inset 0 0 0 0.34cqw #0b0b0e;
        }

        .v-dev-laptop-root .back {
          transform: rotateY(180deg) translateZ(0.12cqw);
          background: linear-gradient(165deg, #efeff2 0%, #d2d2d8 45%, #b3b3ba 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .v-dev-laptop-root .back svg {
          width: 4.6cqw;
          height: 4.6cqw;
          fill: rgba(255, 255, 255, 0.7);
          filter: drop-shadow(0 0.1cqw 0.1cqw rgba(0, 0, 0, 0.18));
        }

        /* Display Viewport */
        .v-dev-laptop-root .scr {
          position: absolute;
          left: 1.1cqw;
          right: 1.1cqw;
          top: 1.1cqw;
          bottom: 1.8cqw;
          border-radius: 0.55cqw;
          overflow: hidden;
          background: #030305;
          container-type: inline-size;
        }

        /* 21st.dev Boot Screen Logo */
        .v-dev-laptop-root .boot {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: dev-laptop-boot 3.4s ease forwards;
          animation-play-state: var(--laptop-play-state, running);
          z-index: 10;
          pointer-events: none;
        }
        .v-dev-laptop-root .boot span {
          width: 8.5cqw;
          height: 8.5cqw;
          border-radius: 2.2cqw;
          background: linear-gradient(135deg, #0284c7, #38bdf8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 7cqw rgba(2, 132, 199, 0.6);
        }
        .v-dev-laptop-root .boot svg {
          width: 5cqw;
          height: 5cqw;
          fill: #fff;
        }

        .v-dev-laptop-root .screen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left top;
          display: block;
          user-select: none;
          pointer-events: none;
          opacity: 0;
          animation: dev-laptop-app 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        /* Camera Notch */
        .v-dev-laptop-root .notch {
          position: absolute;
          left: 50%;
          top: 1.05cqw;
          width: 5.4cqw;
          height: 1.05cqw;
          margin-left: -2.7cqw;
          border-radius: 0 0 0.6cqw 0.6cqw;
          background: #0a0a0c;
          z-index: 50;
        }
        .v-dev-laptop-root .notch i {
          position: absolute;
          left: 50%;
          top: 0.3cqw;
          width: 0.42cqw;
          height: 0.42cqw;
          margin-left: -0.21cqw;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #3c4a7a, #0d0f18 70%);
        }

        /* Glare */
        .v-dev-laptop-root .glare {
          position: absolute;
          left: -40%;
          top: -20%;
          width: 180%;
          height: 140%;
          background: linear-gradient(112deg, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.14) 45%, rgba(255, 255, 255, 0.03) 52%, transparent 58%);
          pointer-events: none;
          z-index: 20;
          animation: dev-laptop-glare 3.4s ease forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        /* ── 21st.dev Core Keyframes (Single Reveal Entrance Sequence) ── */
        @keyframes dev-laptop-orbit {
          0% {
            transform: scale3d(0.92, 0.92, 0.92) translate3d(0cqw, 0cqw, -12cqw) rotateX(-26deg) rotateY(-18deg);
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          }
          100% {
            transform: scale3d(0.92, 0.92, 0.92) translate3d(0cqw, 0cqw, 0cqw) rotateX(-13deg) rotateY(12deg);
          }
        }

        @keyframes dev-laptop-lid {
          0%, 8% {
            transform: rotateX(-88.6deg);
            animation-timing-function: cubic-bezier(0.5, 0, 0.2, 1);
          }
          46% {
            transform: rotateX(21deg);
            animation-timing-function: cubic-bezier(0.3, 0, 0.3, 1);
          }
          66%, 100% {
            transform: rotateX(16deg);
          }
        }

        @keyframes dev-laptop-boot {
          0%, 18% {
            opacity: 0;
            transform: scale(0.82);
          }
          27% {
            opacity: 1;
            transform: scale(1);
            animation-timing-function: ease-in;
          }
          36% {
            opacity: 1;
            transform: scale(1.02);
          }
          46%, 100% {
            opacity: 0;
            transform: scale(1.1);
            pointer-events: none;
          }
        }

        @keyframes dev-laptop-app {
          0%, 38% {
            opacity: 0;
            transform: scale(1.03);
            animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          54%, 100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes dev-laptop-on {
          0%, 34% {
            opacity: 0;
          }
          52%, 100% {
            opacity: 0.85;
          }
        }

        @keyframes dev-laptop-glare {
          0% {
            transform: translateX(-22cqw);
            animation-timing-function: cubic-bezier(0.4, 0.1, 0.5, 1);
          }
          65%, 100% {
            transform: translateX(18cqw);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .v-dev-laptop-root .rig {
            animation: none !important;
            transform: scale3d(0.92, 0.92, 0.92) rotateX(-13deg) rotateY(12deg) !important;
          }
          .v-dev-laptop-root .lid {
            animation: none !important;
            transform: rotateX(16deg) !important;
          }
          .v-dev-laptop-root .screen-img {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .v-dev-laptop-root .boot {
            display: none !important;
          }
          .v-dev-laptop-root .spill {
            animation: none !important;
            opacity: 0.85 !important;
          }
          .v-dev-laptop-root .glare {
            animation: none !important;
          }
        }

        /* ── Transform Frame (xfr) for Positioning & Scale ── */
        .v-dev-laptop-root .xfr {
          position: absolute;
          left: 0;
          top: 0;
          width: 100cqw;
          height: 56.25cqw;
          transform-origin: 0 0;
          transform: translate(29cqw, 6cqw) scale(0.8);
        }

        /* ── Left Column Copy (xcopy) ── */
        .v-dev-laptop-root .xcopy {
          position: absolute;
          left: 6cqw;
          top: 0;
          bottom: 0;
          width: 32cqw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2.4cqw;
          z-index: 40;
          color: #0f172a;
        }

        .v-dev-laptop-root .xtop {
          display: flex;
          flex-direction: column;
          gap: 1.5cqw;
        }

        .v-dev-laptop-root .xk {
          display: flex;
          align-items: center;
          gap: 0.8cqw;
          font-family: var(--font-mono, monospace);
          font-weight: 600;
          font-size: 1.4cqw;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #64748b;
        }
        .v-dev-laptop-root .xk b {
          width: 0.8cqw;
          height: 0.8cqw;
          border-radius: 50%;
          background: #0284c7;
          box-shadow: 0 0 1cqw #0284c7;
          flex: none;
        }

        .v-dev-laptop-root .xh {
          font-family: var(--font-display, inherit);
          font-weight: 800;
          font-size: 4.4cqw;
          line-height: 1.04;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .v-dev-laptop-root .xc {
          font-size: 1.6cqw;
          line-height: 1.55;
          color: #475569;
        }

        /* Interactive Action Buttons on Left */
        .v-dev-laptop-root .xactions {
          display: flex;
          align-items: center;
          gap: 1.2cqw;
          margin-top: 0.5cqw;
        }

        .v-dev-laptop-root .xbtn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6cqw;
          padding: 0.8cqw 1.8cqw;
          background: #0284c7;
          color: #fff;
          font-weight: 700;
          font-size: 1.4cqw;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 0.8cqw 2cqw rgba(2, 132, 199, 0.28);
          transition: transform 0.2s, background 0.2s;
          cursor: pointer;
        }
        .v-dev-laptop-root .xbtn-primary:hover {
          background: #0369a1;
          transform: translateY(-0.1cqw);
        }

        .v-dev-laptop-root .xbtn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 0.8cqw 1.4cqw;
          color: #334155;
          font-weight: 600;
          font-size: 1.4cqw;
          border-radius: 999px;
          text-decoration: none;
          cursor: pointer;
        }
        .v-dev-laptop-root .xbtn-ghost:hover {
          color: #0284c7;
        }

        /* ── Responsive Architecture for All Devices ── */

        /* Tablet & Small Desktop (901px - 1100px) */
        @media (min-width: 901px) and (max-width: 1100px) {
          .v-dev-laptop-root {
            min-height: 440px;
          }
          .v-dev-laptop-root .xfr {
            transform: translate(25cqw, 7cqw) scale(0.76);
          }
          .v-dev-laptop-root .xcopy {
            left: 5cqw;
            width: 35cqw;
            gap: 1.8cqw;
          }
          .v-dev-laptop-root .xh {
            font-size: 4cqw;
          }
        }

        /* Mobile & Tablet Portrait (<= 900px) */
        @media (max-width: 900px) {
          .v-dev-laptop-root {
            aspect-ratio: auto;
            min-height: auto;
            padding: 2.5rem 1.5rem 2.75rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 1.5rem;
            overflow: hidden;
          }

          /* Ambient haze adapted for vertical card */
          .v-dev-laptop-root .haze {
            background: radial-gradient(60% 40% at 50% 85%, rgba(2, 132, 199, 0.05), transparent 75%);
          }

          /* Text column becomes full-width header stacked on top */
          .v-dev-laptop-root .xcopy {
            position: relative;
            left: auto;
            top: auto;
            bottom: auto;
            width: 100%;
            max-width: 520px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 0 auto;
            gap: 1.15rem;
            z-index: 10;
          }

          .v-dev-laptop-root .xtop {
            align-items: center;
            gap: 0.65rem;
            text-align: center;
          }

          .v-dev-laptop-root .xk {
            font-size: 0.8125rem;
            letter-spacing: 0.06em;
            justify-content: center;
            gap: 0.5rem;
          }

          .v-dev-laptop-root .xk b {
            width: 0.5rem;
            height: 0.5rem;
          }

          .v-dev-laptop-root .xh {
            font-size: clamp(1.75rem, 5.5vw, 2.35rem);
            line-height: 1.12;
            letter-spacing: -0.035em;
          }

          .v-dev-laptop-root .xc {
            font-size: clamp(0.92rem, 2.8vw, 1.05rem);
            line-height: 1.55;
            max-width: 440px;
          }

          .v-dev-laptop-root .xactions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            flex-wrap: wrap;
            margin-top: 0.25rem;
            width: 100%;
          }

          .v-dev-laptop-root .xbtn-primary {
            font-size: 0.875rem;
            padding: 0.7rem 1.45rem;
          }

          .v-dev-laptop-root .xbtn-ghost {
            font-size: 0.875rem;
            padding: 0.7rem 1.15rem;
          }

          /* 3D Laptop Stage positioned below the copy */
          .v-dev-laptop-root .xfr {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            height: clamp(280px, 60vw, 380px);
            transform: none;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0.75rem;
          }

          .v-dev-laptop-root .scene {
            position: absolute;
            inset: 0;
            perspective: 140cqw;
            perspective-origin: 50% 25%;
          }

          .v-dev-laptop-root .rig {
            left: 50%;
            top: 50%;
            transform: scale3d(1.35, 1.35, 1.35) rotateX(-14deg) rotateY(8deg);
          }

          .v-dev-laptop-root:hover .rig {
            transform: scale3d(1.38, 1.38, 1.38) rotateX(-12deg) rotateY(5deg);
          }
        }

        /* Small Phones (<= 480px, e.g. iPhone, Galaxy) */
        @media (max-width: 480px) {
          .v-dev-laptop-root {
            padding: 1.75rem 1rem 2rem;
            border-radius: 1.25rem;
          }

          .v-dev-laptop-root .xcopy {
            gap: 0.9rem;
          }

          .v-dev-laptop-root .xh {
            font-size: clamp(1.5rem, 6.5vw, 1.85rem);
            line-height: 1.15;
          }

          .v-dev-laptop-root .xc {
            font-size: 0.875rem;
            line-height: 1.5;
          }

          .v-dev-laptop-root .xactions {
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
          }

          .v-dev-laptop-root .xbtn-primary,
          .v-dev-laptop-root .xbtn-ghost {
            width: 100%;
            justify-content: center;
            text-align: center;
            box-sizing: border-box;
          }

          .v-dev-laptop-root .xfr {
            height: 250px;
            margin-top: 0.25rem;
          }

          .v-dev-laptop-root .rig {
            top: 52%;
            transform: scale3d(1.22, 1.22, 1.22) rotateX(-14deg) rotateY(6deg);
          }
        }
      `}),(0,a.jsxs)("div",{className:"v-dev-laptop-root",children:[(0,a.jsx)("div",{className:"haze","aria-hidden":"true"}),(0,a.jsx)("div",{className:"xfr",children:(0,a.jsx)("div",{className:"scene",children:(0,a.jsxs)("div",{className:"rig",children:[(0,a.jsx)("div",{className:"shadow"}),(0,a.jsxs)("div",{className:"base",children:[(0,a.jsx)("div",{className:"spk l"}),(0,a.jsx)("div",{className:"spk r"}),(0,a.jsx)("div",{className:"kb"}),(0,a.jsx)("div",{className:"tp"}),(0,a.jsx)("div",{className:"spill"}),(0,a.jsx)("div",{className:"lip",children:(0,a.jsx)("i",{})})]}),(0,a.jsxs)("div",{className:"lid",children:[(0,a.jsx)("div",{className:"back",children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"})})}),(0,a.jsxs)("div",{className:"front",children:[(0,a.jsxs)("div",{className:"scr",children:[(0,a.jsx)("div",{className:"boot",children:(0,a.jsx)("span",{children:(0,a.jsx)("svg",{viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z"})})})}),(0,a.jsx)("img",{src:i,alt:"Panel de control clínico KenkoMed",className:"screen-img",loading:"lazy",decoding:"async"}),(0,a.jsx)("div",{className:"glare"})]}),(0,a.jsx)("div",{className:"notch",children:(0,a.jsx)("i",{})})]})]})]})})}),(0,a.jsxs)("div",{className:"xcopy",children:[(0,a.jsxs)("div",{className:"xtop",children:[(0,a.jsxs)("div",{className:"xk",children:[(0,a.jsx)("b",{}),t]}),(0,a.jsx)("div",{className:"xh",children:r})]}),(0,a.jsx)("div",{className:"xc",children:s}),(0,a.jsxs)("div",{className:"xactions",children:[(0,a.jsx)("a",{href:"#contact",className:"xbtn-primary",children:"Agendar demo gratuita"}),(0,a.jsx)("a",{href:"/funcionalidades",className:"xbtn-ghost",children:"Ver funcionalidades →"})]})]})]})]})}function d(){return(0,a.jsxs)("div",{className:"relative w-full max-w-6xl mx-auto flex flex-col items-center gap-10",children:[(0,a.jsx)(i,{}),(0,a.jsx)(l,{})]})}function c(){return(0,a.jsx)("section",{id:"features",className:"py-20 md:py-28 px-6 bg-background",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto w-full",children:[(0,a.jsx)("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground text-center text-balance",children:"De la admisión al alta en un solo flujo clínico"}),(0,a.jsx)("p",{className:"text-foreground-muted text-center max-w-2xl mx-auto mb-14 text-balance text-base md:text-lg",children:"Cada etapa del tratamiento kinésico — admisión remota, evaluación funcional, evolución SOAP y alta médica — conectada sin duplicar datos."}),(0,a.jsx)(d,{})]})})}function m(){return null}function p(){return null}e.s(["Features",()=>p,"ProductShowcase",()=>m,"SolucionTeaser",()=>c],96)}]);