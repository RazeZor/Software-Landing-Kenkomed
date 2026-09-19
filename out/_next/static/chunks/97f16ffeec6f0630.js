(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51348,46897,e=>{"use strict";var a=e.i(75254);let r=(0,a.default)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>r],51348);let t=(0,a.default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>t],46897)},63488,e=>{"use strict";let a=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>a],63488)},43432,e=>{"use strict";let a=(0,e.i(75254).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",()=>a],43432)},76841,e=>{"use strict";var a=e.i(43476),r=e.i(22016),t=e.i(57688);let i=(0,e.i(75254).default)("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);var o=e.i(51348),n=e.i(63488),s=e.i(43432),l=e.i(46897);let c=[{label:"Funcionalidades",href:"/funcionalidades"},{label:"Nuestra Solución",href:"/solucion"},{label:"Ver Demo",href:"/demo"},{label:"Investigación",href:"/investigacion"},{label:"Nosotros",href:"/nosotros"},{label:"Privacidad",href:"/privacidad"},{label:"Términos de Uso",href:"/terminos"},{label:"Seguridad",href:"/seguridad"}],d=[{icon:i,label:"Instagram de Kenkomed",href:"https://www.instagram.com/_kenkomed_/"},{icon:o.Linkedin,label:"LinkedIn de Kenkomed",href:"#"}];function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 Statement Footer (Ft5) \xb7 Paper Light */
        .hm-footer {
          background: var(--surface);
          color: var(--foreground);
          border-top: var(--hairline);
          overflow-x: clip;
          position: relative;
        }

        .hm-footer-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl) var(--space-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
        }

        /* ── Top Statement Block ── */
        .hm-footer-statement-block {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--space-2xl);
          align-items: start;
        }

        .hm-footer-brand-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw + 0.5rem, 3.75rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--foreground);
          max-width: 20ch;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-footer-accent-text {
          color: var(--kenko-sapphire);
        }

        .hm-footer-contact-box {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--foreground-muted);
        }

        .hm-footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 2px;
          border-radius: var(--radius-sm);
          transition-property: color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-footer-contact-link:hover {
          color: var(--kenko-sapphire);
        }
        .hm-footer-contact-link:focus-visible {
          outline-color: var(--color-focus);
        }

        /* ── Middle: Single horizontal nav row ── */
        .hm-footer-nav-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-md) var(--space-lg);
          padding-block: var(--space-lg);
          border-top: var(--hairline);
          border-bottom: var(--hairline);
        }

        .hm-footer-link {
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--foreground-muted);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 2px;
          border-radius: var(--radius-sm);
          transition-property: color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-footer-link:hover {
          color: var(--foreground);
        }
        .hm-footer-link:focus-visible {
          outline-color: var(--color-focus);
        }

        /* ── Bottom row: Copyright & Social ── */
        .hm-footer-bottom {
          display: flex;
          flex-wrap: wrap;
          items-center: center;
          justify-content: space-between;
          gap: var(--space-md);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--foreground-subtle);
        }

        .hm-footer-social-group {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
        }

        .hm-footer-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          color: var(--foreground-muted);
          background: var(--background);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 2px;
          transition-property: color, border-color, background-color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-footer-social-btn:hover {
          color: var(--kenko-sapphire);
          border-color: oklch(0.48 0.18 246 / 0.40);
          background: oklch(0.48 0.18 246 / 0.06);
        }
        .hm-footer-social-btn:focus-visible {
          outline-color: var(--color-focus);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hm-footer-statement-block {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          .hm-footer-inner {
            padding-inline: var(--space-md);
          }
        }
      `}),(0,a.jsx)("footer",{className:"hm-footer",role:"contentinfo",children:(0,a.jsxs)("div",{className:"hm-footer-inner",children:[(0,a.jsxs)("div",{className:"hm-footer-statement-block",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.default,{href:"/",className:"inline-flex items-center gap-2 mb-6 group",children:[(0,a.jsx)(t.default,{src:"/images/LogoKenko.png",alt:"Kenkomed logo",width:36,height:36,className:"object-contain"}),(0,a.jsxs)("span",{className:"font-display font-extrabold text-xl tracking-tight text-foreground",children:["Kenko",(0,a.jsx)("span",{className:"text-emerald",children:"med"})]})]}),(0,a.jsxs)("h2",{className:"hm-footer-brand-heading",children:["El software clínico que los"," ",(0,a.jsx)("span",{className:"hm-footer-accent-text",children:"kinesiólogos"})," de Chile merecían."]})]}),(0,a.jsxs)("div",{className:"hm-footer-contact-box",children:[(0,a.jsx)("span",{className:"font-mono text-xs uppercase tracking-widest text-emerald font-semibold",children:"Contacto directo"}),(0,a.jsxs)("a",{href:"mailto:kenkomedplus@gmail.com",className:"hm-footer-contact-link",children:[(0,a.jsx)(n.Mail,{size:14,"aria-hidden":"true"}),"kenkomedplus@gmail.com"]}),(0,a.jsxs)("a",{href:"tel:+56940966266",className:"hm-footer-contact-link",children:[(0,a.jsx)(s.Phone,{size:14,"aria-hidden":"true"}),"+56 9 4096 6266"]}),(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs text-foreground-muted",children:[(0,a.jsx)(l.MapPin,{size:13,"aria-hidden":"true"}),"Concepción, Chile"]})]})]}),(0,a.jsx)("nav",{className:"hm-footer-nav-row","aria-label":"Navegación del pie de página",children:c.map(e=>(0,a.jsx)(r.default,{href:e.href,className:"hm-footer-link",children:e.label},e.label))}),(0,a.jsxs)("div",{className:"hm-footer-bottom",children:[(0,a.jsxs)("p",{children:["© ",new Date().getFullYear()," Kenkomed. Todos los derechos reservados. Hecho en Chile."]}),(0,a.jsx)("div",{className:"hm-footer-social-group",children:d.map(({icon:e,label:r,href:t})=>(0,a.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":r,className:"hm-footer-social-btn",children:(0,a.jsx)(e,{size:15,"aria-hidden":"true"})},r))})]})]})})]})}e.s(["Footer",()=>m],76841)},95468,e=>{"use strict";let a=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>a],95468)},47802,e=>{"use strict";var a=e.i(43476),r=e.i(47163),t=e.i(71645);function i({className:e,variant:t="default",animated:i=!1}){let n="accent"===t?"var(--kenko-mint)":"subtle"===t?"currentColor":"var(--brand-light)";return i?(0,a.jsx)(o,{className:e,stroke:n,glowColor:"accent"===t?"oklch(0.66 0.19 163 / 0.4)":"oklch(0.62 0.16 246 / 0.3)"}):(0,a.jsx)("svg",{viewBox:"0 0 400 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,r.cn)("w-full h-auto",e),"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})})}function o({className:e,stroke:i,glowColor:o}){let n=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e=n.current;if(!e)return;let a=e.getTotalLength();e.style.strokeDasharray=`${a}`,e.style.strokeDashoffset=`${a}`},[]),(0,a.jsxs)("svg",{viewBox:"0 0 400 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,r.cn)("w-full h-auto overflow-visible",e),"aria-hidden":"true",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("filter",{id:"pulse-glow",x:"-20%",y:"-200%",width:"140%",height:"500%",children:[(0,a.jsx)("feGaussianBlur",{stdDeviation:"3",result:"blur"}),(0,a.jsxs)("feMerge",{children:[(0,a.jsx)("feMergeNode",{in:"blur"}),(0,a.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})}),(0,a.jsx)("path",{d:"M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400",stroke:i,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",opacity:.25}),(0,a.jsx)("path",{ref:n,d:"M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400",stroke:i,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",filter:"url(#pulse-glow)",style:{animation:"pulse-draw 3s ease-in-out infinite"}})]})}function n({className:e,variant:t="light",animated:o=!0}){return(0,a.jsxs)("div",{className:(0,r.cn)("relative w-full flex items-center justify-center py-4 overflow-hidden",e),"aria-hidden":"true",children:[(0,a.jsx)("div",{className:(0,r.cn)("flex-1 h-px","dark"===t?"bg-gradient-to-r from-transparent to-[oklch(0.66_0.19_163_/_0.25)]":"bg-gradient-to-r from-transparent to-[oklch(0.48_0.18_246_/_0.15)]")}),(0,a.jsx)("div",{className:"px-6 flex-shrink-0 w-64",children:(0,a.jsx)(i,{variant:"dark"===t?"accent":"default",animated:o})}),(0,a.jsx)("div",{className:(0,r.cn)("flex-1 h-px","dark"===t?"bg-gradient-to-l from-transparent to-[oklch(0.66_0.19_163_/_0.25)]":"bg-gradient-to-l from-transparent to-[oklch(0.48_0.18_246_/_0.15)]")})]})}function s({className:e}){return(0,a.jsx)("div",{className:(0,r.cn)("absolute inset-0 pointer-events-none kenko-grid",e),"aria-hidden":"true"})}function l({children:e,className:t,light:i=!1}){return(0,a.jsxs)("div",{className:(0,r.cn)("flex items-center justify-center gap-3 mb-4",t),children:[(0,a.jsx)("span",{className:(0,r.cn)("w-8 h-0.5 rounded-full",i?"bg-[var(--kenko-pulse)]":"bg-[var(--kenko-mint)]"),"aria-hidden":"true"}),(0,a.jsx)("span",{className:(0,r.cn)("text-xs font-bold tracking-[0.22em] uppercase font-display",i?"text-white/70":"text-[var(--kenko-sapphire)]"),children:e}),(0,a.jsx)("span",{className:(0,r.cn)("w-8 h-0.5 rounded-full",i?"bg-[var(--kenko-pulse)]":"bg-[var(--kenko-mint)]"),"aria-hidden":"true"})]})}function c({children:e,className:t,variant:i="deep"}){return(0,a.jsxs)("div",{className:(0,r.cn)("relative overflow-hidden","deep"===i&&"kenko-band-deep","hero"===i&&"kenko-band-hero","mist"===i&&"kenko-band-mist","white"===i&&"bg-background",t),children:[("deep"===i||"hero"===i)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{className:"opacity-[0.05]"}),(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",style:{background:"radial-gradient(ellipse 80% 60% at 100% 0%, oklch(0.66 0.19 163 / 0.12), transparent 60%)"}}),(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",style:{background:"radial-gradient(ellipse 60% 40% at 20% 100%, oklch(0.48 0.18 246 / 0.10), transparent 60%)"}})]}),(0,a.jsx)("div",{className:"relative z-10",children:e})]})}function d({label:e,value:t,color:i="blue",style:o,className:n}){return(0,a.jsxs)("div",{className:(0,r.cn)("absolute rounded-2xl px-4 py-3 border shadow-xl hidden md:block animate-float hero-particle","backdrop-blur-md",{blue:"border-[oklch(0.48_0.18_246_/_0.3)] bg-[oklch(0.22_0.10_240_/_0.7)]",mint:"border-[oklch(0.66_0.19_163_/_0.3)] bg-[oklch(0.15_0.08_163_/_0.7)]",sky:"border-[oklch(0.62_0.16_230_/_0.3)] bg-[oklch(0.18_0.08_230_/_0.7)]"}[i],n),style:o,children:[(0,a.jsx)("p",{className:"text-[9px] text-white/45 font-bold uppercase tracking-wider mb-0.5 font-display",children:e}),(0,a.jsx)("p",{className:(0,r.cn)("text-sm font-bold font-display",{blue:"text-[var(--kenko-sky)]",mint:"text-[var(--kenko-pulse)]",sky:"text-[oklch(0.80_0.14_230)]"}[i]),children:t})]})}e.s(["BrandBand",()=>c,"BrandGrid",()=>s,"DataParticle",()=>d,"PulseDivider",()=>n,"RecoveryPulse",()=>i,"SectionEyebrow",()=>l])},26707,e=>{"use strict";let a=(0,e.i(75254).default)("smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);e.s(["Smartphone",()=>a],26707)},51804,e=>{"use strict";let a=(0,e.i(75254).default)("calendar-check",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);e.s(["CalendarCheck",()=>a],51804)},86318,e=>{"use strict";var a=e.i(71645);e.i(43476);var r=a.createContext(void 0);function t(e){let t=a.useContext(r);return e||t||"ltr"}e.s(["useDirection",()=>t])},84614,86311,e=>{"use strict";var a=e.i(75254);let r=(0,a.default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>r],84614);let t=(0,a.default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);e.s(["MessageSquare",()=>t],86311)},14764,e=>{"use strict";let a=(0,e.i(75254).default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);e.s(["Send",()=>a],14764)},81418,e=>{"use strict";let a=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>a],81418)},7486,e=>{"use strict";let a=(0,e.i(75254).default)("building-2",[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]]);e.s(["Building2",()=>a],7486)},3116,e=>{"use strict";let a=(0,e.i(75254).default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);e.s(["Clock",()=>a],3116)},20286,e=>{"use strict";let a=(0,e.i(75254).default)("stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);e.s(["Stethoscope",()=>a],20286)},21218,e=>{"use strict";let a=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",()=>a],21218)},39312,e=>{"use strict";let a=(0,e.i(75254).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>a],39312)},63059,e=>{"use strict";let a=(0,e.i(75254).default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["ChevronRight",()=>a],63059)},37727,e=>{"use strict";var a=e.i(41947);e.s(["X",()=>a.default])},43531,e=>{"use strict";let a=(0,e.i(75254).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",()=>a],43531)},57053,e=>{"use strict";var a=e.i(43476),r=e.i(72520),t=e.i(30408);let i=[{text:"Demo en 24 h"},{text:"Sin tarjeta de crédito"},{text:"Datos encriptados"}];function o(){let{ref:e,isVisible:o}=(0,t.useReveal)({threshold:.2});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 Statement CTA Strip \xb7 modern-minimal
         * Asymmetric — left-aligned, not centered card with gradient
         */
        .hm-cta-strip {
          background: var(--color-paper);
          border-top: var(--hairline);
          border-bottom: var(--hairline);
        }

        .hm-cta-strip-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--space-2xl);
          align-items: center;
        }

        .hm-cta-strip-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent-2);
          margin-bottom: var(--space-md);
        }

        .hm-cta-strip-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw + 0.5rem, 2.75rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          max-width: 18ch;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-cta-strip-sub {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.65;
          max-width: 46ch;
          margin-top: var(--space-md);
        }

        /* Proof chips — Geist Mono (outlier font) */
        .hm-cta-proof {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-top: var(--space-lg);
        }

        .hm-cta-proof-chip {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          color: var(--color-ink-3);
          border: var(--hairline);
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          line-height: 1;
        }

        /* Right: single CTA button */
        .hm-cta-strip-action {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-sm);
          flex-shrink: 0;
        }

        .hm-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--color-accent);
          color: oklch(0.99 0.002 246);
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
          outline: 2px solid transparent;
          outline-offset: 2px;
          transition-property: background-color, transform, box-shadow;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-cta-btn-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px oklch(0.48 0.18 246 / 0.30);
        }
        .hm-cta-btn-primary:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-cta-btn-primary:active {
          transform: translateY(0);
          box-shadow: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-cta-btn-primary {
            transition: none;
          }
          .hm-cta-btn-primary:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* Reveal */
        .hm-cta-strip-inner {
          opacity: 0;
          transform: translateY(16px);
          transition-property: opacity, transform;
          transition-duration: 400ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        .hm-cta-strip-inner.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-cta-strip-inner {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hm-cta-strip-inner {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          .hm-cta-strip-action { align-items: flex-start; }
          .hm-cta-strip-inner { padding-inline: var(--space-md); }
        }
      `}),(0,a.jsx)("section",{className:"hm-cta-strip","aria-labelledby":"mid-cta-heading",children:(0,a.jsxs)("div",{ref:e,className:`hm-cta-strip-inner ${o?"is-visible":""}`,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-cta-strip-label","aria-hidden":"true",children:"¿Te convenció?"}),(0,a.jsx)("h2",{id:"mid-cta-heading",className:"hm-cta-strip-heading",children:"Agenda tu demo gratuita ahora."}),(0,a.jsx)("p",{className:"hm-cta-strip-sub",children:"Te mostramos Kenkomed en vivo y resolvemos tus dudas en una llamada corta. Sin obligaciones."}),(0,a.jsx)("div",{className:"hm-cta-proof",role:"list","aria-label":"Garantías",children:i.map(({text:e})=>(0,a.jsx)("span",{className:"hm-cta-proof-chip",role:"listitem",children:e},e))})]}),(0,a.jsx)("div",{className:"hm-cta-strip-action",children:(0,a.jsxs)("a",{href:"#contact",className:"hm-cta-btn-primary",id:"mid-cta-btn",children:["Solicitar demo gratuita",(0,a.jsx)(r.ArrowRight,{size:15,"aria-hidden":"true"})]})})]})})]})}e.s(["HomeMidCta",()=>o])},7968,e=>{"use strict";var a=e.i(43476),r=e.i(30408),t=e.i(72520),i=e.i(3116);let o=(0,e.i(75254).default)("file-x",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);var n=e.i(26707);function s(){let e=(0,r.useReveal)();return(0,a.jsx)("section",{className:"py-24 bg-surface border-y border-border/60",children:(0,a.jsxs)("div",{ref:e.ref,className:"max-w-6xl mx-auto px-6",children:[(0,a.jsxs)("div",{className:`text-center max-w-2xl mx-auto mb-16 scroll-reveal ${e.isVisible?"is-visible":""}`,children:[(0,a.jsx)("span",{className:"inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4",children:"El Impacto"}),(0,a.jsx)("h2",{className:"font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance",children:"De 45 minutos en papel a 5 minutos en digital"}),(0,a.jsx)("p",{className:"text-foreground-muted leading-relaxed",children:"Descubre cómo Kenkomed transforma el caos del papel y las planillas en un flujo de trabajo fluido, para que dediques más tiempo a tus pacientes."})]}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-8 lg:gap-12 relative",children:[(0,a.jsx)("div",{className:"hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background border border-border/60 rounded-full items-center justify-center text-brand shadow-lg",children:(0,a.jsx)(t.ArrowRight,{size:20})}),(0,a.jsxs)("div",{className:`bg-red-50/50 border border-red-100/50 rounded-3xl p-8 lg:p-12 scroll-reveal stagger-1 ${e.isVisible?"is-visible":""}`,children:[(0,a.jsxs)("h3",{className:"font-display font-semibold text-2xl text-red-900 mb-8 flex items-center gap-3",children:[(0,a.jsx)("span",{className:"w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm",children:"❌"}),"Antes de Kenkomed"]}),(0,a.jsxs)("ul",{className:"space-y-6",children:[(0,a.jsxs)("li",{className:"flex gap-4",children:[(0,a.jsx)(o,{className:"text-red-400 shrink-0 mt-1",size:20}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-semibold text-red-900 mb-1",children:"Caos de papel y planillas"}),(0,a.jsx)("p",{className:"text-sm text-red-800/70",children:"Fichas clínicas ilegibles, traspapeladas en cajones o repartidas en cientos de archivos de Excel."})]})]}),(0,a.jsxs)("li",{className:"flex gap-4",children:[(0,a.jsx)(i.Clock,{className:"text-red-400 shrink-0 mt-1",size:20}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-semibold text-red-900 mb-1",children:"Escalas y cálculos manuales"}),(0,a.jsx)("p",{className:"text-sm text-red-800/70",children:"15 minutos perdidos transcribiendo e intentando calcular los puntajes de escalas como WOMAC o TUG a mano."})]})]})]})]}),(0,a.jsxs)("div",{className:`bg-brand/5 border border-brand/20 rounded-3xl p-8 lg:p-12 scroll-reveal stagger-2 ${e.isVisible?"is-visible":""}`,children:[(0,a.jsxs)("h3",{className:"font-display font-semibold text-2xl text-brand mb-8 flex items-center gap-3",children:[(0,a.jsx)("span",{className:"w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand text-sm",children:"✅"}),"Con Kenkomed"]}),(0,a.jsxs)("ul",{className:"space-y-6",children:[(0,a.jsxs)("li",{className:"flex gap-4",children:[(0,a.jsx)(n.Smartphone,{className:"text-brand shrink-0 mt-1",size:20}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-semibold text-foreground mb-1",children:"Todo en una plataforma"}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted",children:"Fichas SOAP digitales y seguras. El paciente completa su anamnesis desde su celular antes de llegar."})]})]}),(0,a.jsxs)("li",{className:"flex gap-4",children:[(0,a.jsx)(i.Clock,{className:"text-brand shrink-0 mt-1",size:20}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-semibold text-foreground mb-1",children:"Cálculos automáticos"}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted",children:"Las 13 escalas (EVA, PSFS, Berg, etc.) se calculan y grafican solas. Las banderas rojas te alertan en tiempo real."})]})]})]})]})]})]})})}e.s(["BeforeAfter",()=>s],7968)},55944,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(14764),i=e.i(84614),o=e.i(63488),n=e.i(86311),s=e.i(95468),l=e.i(47802);function c(){let e=(0,r.useRef)(null),[c,d]=(0,r.useState)(!1),[m,p]=(0,r.useState)(!1),[h,u]=(0,r.useState)(!1),[f,x]=(0,r.useState)({name:"",email:"",phone:"",clinic:"",message:""});(0,r.useEffect)(()=>{let a=new IntersectionObserver(([e])=>{e.isIntersecting&&(d(!0),a.disconnect())},{threshold:.1});return e.current&&a.observe(e.current),()=>a.disconnect()},[]);let g=e=>{x(a=>({...a,[e.target.name]:e.target.value}))},b=async e=>{e.preventDefault(),p(!0);let a=`
==================================================
📩 NUEVO MENSAJE DE CONTACTO — KENKOMED LANDING
==================================================

👤 DATOS DE CONTACTO:
- Nombre: ${f.name}
- Email: ${f.email}
- Tel\xe9fono: ${f.phone||"No especificado"}
- Cl\xednica / Centro: ${f.clinic||"No especificado"}

💬 MENSAJE / CONSULTA:
${f.message}

==================================================
Fecha: ${new Date().toLocaleString("es-CL")}
Origen: Seccion Contacto General Landing
==================================================
`.trim();try{let e=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"491d435e-576c-4b14-86a2-7d9540776b32",subject:`💬 Mensaje Contacto — ${f.name} (${f.clinic||"Consulta"})`,from_name:"Kenkomed Landing — Contacto General",name:f.name,email:f.email,phone:f.phone,clinic:f.clinic,comentarios:f.message,message:a})}),r=e.headers.get("content-type");if(r&&-1!==r.indexOf("application/json")){let a=await e.json();a.success?(p(!1),u(!0)):(console.error("Error desde Web3Forms:",a),p(!1),alert(`Error de validaci\xf3n: ${a.message||"La key podría ser inválida."}`))}else{let a=await e.text();console.error("Respuesta inesperada (no-JSON):",a),p(!1),alert("El servidor de correos bloqueó la solicitud (posiblemente por estar en localhost). Revisa la consola o verifica tu API Key.")}}catch(e){console.error("Error al enviar el formulario:",e),p(!1),alert("Hubo un error de conexión al enviar. Por favor intenta de nuevo.")}};return(0,a.jsx)("section",{id:"contact",ref:e,className:"py-28 md:py-36 kenko-band-mist overflow-hidden","aria-labelledby":"contact-heading",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,a.jsxs)("div",{className:`text-center max-w-2xl mx-auto mb-14 scroll-reveal ${c?"is-visible":""}`,children:[(0,a.jsx)(l.SectionEyebrow,{children:"Contacto"}),(0,a.jsxs)("h2",{id:"contact-heading",className:"font-display font-bold text-4xl md:text-5xl text-foreground text-balance mb-4",children:["Solicita tu"," ",(0,a.jsx)("span",{className:"text-gradient",children:"software."})]}),(0,a.jsx)("p",{className:"text-foreground-muted text-lg leading-relaxed",children:"Completa el formulario y nuestro equipo se pondrá en contacto contigo para mostrarte cómo Kenkomed puede transformar tu clínica."})]}),(0,a.jsx)("div",{className:`max-w-2xl mx-auto scroll-reveal stagger-2 ${c?"is-visible":""}`,children:(0,a.jsxs)("div",{className:"bg-card rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none","aria-hidden":"true",style:{background:"radial-gradient(circle at top right, oklch(0.48 0.18 246), transparent 70%)"}}),h?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center py-12 text-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-6",children:(0,a.jsx)(s.CheckCircle2,{size:32,className:"text-emerald"})}),(0,a.jsx)("h3",{className:"font-display font-bold text-2xl text-foreground mb-3",children:"¡Mensaje enviado!"}),(0,a.jsx)("p",{className:"text-foreground-muted max-w-md mb-8",children:"Gracias por tu interés en Kenkomed. Nuestro equipo te contactará dentro de las próximas 24 horas hábiles."}),(0,a.jsx)("button",{onClick:()=>{u(!1),x({name:"",email:"",phone:"",clinic:"",message:""})},className:"text-sm font-medium text-brand hover:text-brand-dark transition-colors",children:"Enviar otro mensaje"})]}):(0,a.jsxs)("form",{onSubmit:b,className:"relative space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-name",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(i.User,{size:14,className:"text-foreground-muted"}),"Nombre completo"]}),(0,a.jsx)("input",{type:"text",id:"contact-name",name:"name",required:!0,value:f.name,onChange:g,placeholder:"Tu nombre",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-email",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(o.Mail,{size:14,className:"text-foreground-muted"}),"Email"]}),(0,a.jsx)("input",{type:"email",id:"contact-email",name:"email",required:!0,value:f.email,onChange:g,placeholder:"tu@email.com",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-message",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(n.MessageSquare,{size:14,className:"text-foreground-muted"}),"Mensaje"]}),(0,a.jsx)("textarea",{id:"contact-message",name:"message",rows:4,required:!0,value:f.message,onChange:g,placeholder:"Cuéntanos sobre tu clínica, cuántos profesionales trabajan y qué necesidades tienes...",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"})]}),(0,a.jsx)("button",{type:"submit",disabled:m,className:"group w-full justify-center btn-kenko-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md",children:m?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"}),"Enviando..."]}):(0,a.jsxs)(a.Fragment,{children:["Solicitar Software",(0,a.jsx)(t.Send,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})}),(0,a.jsx)("p",{className:"text-xs text-center text-foreground-muted",children:"Responderemos dentro de 24 horas hábiles. Sin compromiso."}),(0,a.jsxs)("p",{className:"text-xs text-center text-foreground-muted",children:["Al enviar este formulario aceptas nuestra"," ",(0,a.jsx)("a",{href:"/privacidad",className:"text-brand hover:underline",children:"Política de Privacidad"})," ","y el tratamiento de tus datos para responder tu solicitud."]})]})]})})]})})}e.s(["ContactForm",()=>c])},42175,e=>{"use strict";var a=e.i(43476),r=e.i(22016),t=e.i(72520),i=e.i(30408);let o=[{number:"13",unit:"",label:"Escalas clínicas validadas",sub:"EVA · PSFS · Barthel · GROC y más"},{number:"14",unit:"",label:"Pasos de anamnesis inteligente",sub:"Completados por el paciente vía QR"},{number:"100",unit:"%",label:"Especializado en kinesiología",sub:"Diseñado para el flujo clínico real"}];function n(){let{ref:e,isVisible:n}=(0,i.useReveal)({threshold:.15});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 Proof Strip \xb7 modern-minimal
         * Pure typography, no cards, no icons above headings
         */
        .hm-proof-section {
          background: var(--color-paper-2);
          border-top: var(--hairline);
          border-bottom: var(--hairline);
        }

        .hm-proof-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl) var(--space-3xl);
        }

        .hm-proof-section-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: var(--space-3xl);
        }

        /* Three stats in horizontal row, divided by hairlines */
        .hm-proof-row {
          display: flex;
          align-items: stretch;
          border-top: var(--hairline);
          border-bottom: var(--hairline);
          margin-bottom: var(--space-3xl);
        }

        .hm-proof-cell {
          flex: 1;
          padding: var(--space-xl) var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          opacity: 0;
          transform: translateY(12px);
          transition-property: opacity, transform;
          transition-duration: 500ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        .hm-proof-cell.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hm-proof-cell:nth-child(2) { transition-delay: 80ms; }
        .hm-proof-cell:nth-child(3) { transition-delay: 160ms; }

        @media (prefers-reduced-motion: reduce) {
          .hm-proof-cell {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        .hm-proof-cell + .hm-proof-cell {
          border-left: var(--hairline);
        }

        .hm-proof-figure {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw + 0.5rem, 4rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1;
          letter-spacing: -0.05em;
          color: var(--color-ink);
        }

        .hm-proof-unit {
          font-size: 0.55em;
          vertical-align: top;
          letter-spacing: -0.02em;
        }

        .hm-proof-cell-label {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-ink);
          line-height: 1.3;
        }

        .hm-proof-cell-sub {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--color-ink-3);
          line-height: 1.4;
        }

        /* Bottom navigation row — text links only */
        .hm-proof-nav {
          display: flex;
          align-items: center;
          gap: var(--space-xl);
          flex-wrap: wrap;
        }

        .hm-proof-nav-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-accent);
          text-decoration: none;
          border-bottom: 1px solid oklch(0.48 0.18 246 / 0.25);
          padding-bottom: 1px;
          outline: 2px solid transparent;
          outline-offset: 4px;
          transition-property: color, border-color;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-proof-nav-link:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-cobalt);
        }
        .hm-proof-nav-link:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-proof-nav-link:active { color: var(--kenko-cobalt); }

        .hm-proof-nav-secondary {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-ink-3);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 4px;
          transition-property: color;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-proof-nav-secondary:hover { color: var(--color-ink-2); }
        .hm-proof-nav-secondary:focus-visible { outline-color: var(--color-focus); }

        /* Responsive */
        @media (max-width: 640px) {
          .hm-proof-row { flex-direction: column; border-bottom: none; }
          .hm-proof-cell + .hm-proof-cell {
            border-left: none;
            border-top: var(--hairline);
          }
          .hm-proof-cell:last-child { border-bottom: var(--hairline); }
          .hm-proof-cell { padding: var(--space-md) 0; }
          .hm-proof-figure { font-size: 2.5rem; }
          .hm-proof-inner { padding-inline: var(--space-md); }
          .hm-proof-nav { gap: var(--space-md); flex-direction: column; align-items: flex-start; }
        }
      `}),(0,a.jsx)("section",{className:"hm-proof-section","aria-labelledby":"proof-heading",children:(0,a.jsxs)("div",{className:"hm-proof-inner",ref:e,children:[(0,a.jsx)("p",{className:"hm-proof-section-label","aria-hidden":"true",children:"En números"}),(0,a.jsx)("div",{className:"hm-proof-row",role:"list",children:o.map((e,r)=>(0,a.jsxs)("div",{className:`hm-proof-cell ${n?"is-visible":""}`,role:"listitem",children:[(0,a.jsxs)("p",{className:"hm-proof-figure","aria-label":`${e.number}${e.unit} ${e.label}`,children:[e.number,e.unit&&(0,a.jsx)("span",{className:"hm-proof-unit","aria-hidden":"true",children:e.unit})]}),(0,a.jsx)("p",{className:"hm-proof-cell-label",id:"proof-heading",children:e.label}),(0,a.jsx)("p",{className:"hm-proof-cell-sub",children:e.sub})]},e.label))}),(0,a.jsxs)("nav",{className:"hm-proof-nav","aria-label":"Explorar Kenkomed",children:[(0,a.jsxs)(r.default,{href:"/funcionalidades",className:"hm-proof-nav-link",children:["Ver todas las funcionalidades",(0,a.jsx)(t.ArrowRight,{size:13,"aria-hidden":"true"})]}),(0,a.jsx)(r.default,{href:"/demo",className:"hm-proof-nav-secondary",children:"Demo interactiva →"}),(0,a.jsx)(r.default,{href:"/investigacion",className:"hm-proof-nav-secondary",children:"Base científica →"})]})]})})]})}e.s(["HomeExploreStrip",()=>n],42175)},96,e=>{"use strict";var a=e.i(43476),r=e.i(57688),t=e.i(22016),i=e.i(55711),o=e.i(23962),n=e.i(51804),s=e.i(78583),l=e.i(17923),c=e.i(72520),d=e.i(95468);let m=[{number:"01",label:"Antes de la cita",title:"Anamnesis desde el celular",desc:"El paciente completa su anamnesis desde casa. Tú llegas a la consulta con la ficha lista y las alertas ya marcadas.",tags:["Código QR único","Ahorro de 15 minutos"],icon:o.QrCode,imageSrc:"/software/Cuerpo.jpg",imageAlt:"Paciente llenando anamnesis en el celular",accentToken:"--color-accent"},{number:"02",label:"Primera sesión",title:"Evaluación y Banderas Rojas",desc:"Escalas validadas, mapa corporal y screening, con las banderas rojas visibles desde el minuto uno para tomar mejores decisiones.",tags:["Banderas rojas automáticas","Mapa corporal"],icon:i.Brain,imageSrc:"/software/DSS.png",imageAlt:"Panel DSS clínico de Kenkomed mostrando escalas validadas",accentToken:"--color-accent-2"},{number:"03",label:"Plan de tratamiento",title:"Objetivos y Prescripción",desc:"Definición de objetivos funcionales, número de sesiones y dosificación de ejercicios estructurada en un solo lugar.",tags:["Objetivos funcionales","Prescripción de ejercicios"],icon:n.CalendarCheck,imageSrc:"/software/Objetivos_y_prescripcion.png",imageAlt:"Pantalla de prescripción de ejercicios",accentToken:"--color-accent"},{number:"04",label:"Cada sesión",title:"Evolución estructurada (SOAP)",desc:"Evolución estructurada en formato SOAP, sin reescribir nada. Cada sesión se enlaza con los objetivos planteados inicialmente.",tags:["Formato SOAP","Trazabilidad clínica"],icon:s.FileText,imageSrc:"/software/ficha_clinica.png",imageAlt:"Ficha clínica digital de Kenkomed",accentToken:"--color-accent-2"},{number:"05",label:"Reevaluación",title:"Demuestra tus resultados",desc:"Repites las escalas y ves el cambio en un gráfico automático. El paciente ve su progreso, tú demuestras tu resultado.",tags:["Gráficos automáticos","Comparación de escalas"],icon:l.BarChart3,imageSrc:"/software/graficos_nuevo.png",imageAlt:"Panel de monitoreo y outcomes de Kenkomed",accentToken:"--color-accent"},{number:"06",label:"Alta e informe",title:"Diagnóstico y Reporte Final",desc:"Diagnóstico final y reporte listo para el médico derivador. Exporta el resumen clínico en PDF con un solo clic.",tags:["Reporte para médico derivador","Diagnóstico kinésico"],icon:d.CheckCircle2,imageSrc:"/software/Diagnostico_final.png",imageAlt:"Reporte clínico de alta exportado",accentToken:"--color-accent-2"}];function p(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 macrostructure: Bento Grid (01) \xb7 genre: modern-minimal \xb7 theme: Cobalt
         * 2-column uniform grid — each card has full breathing room for image + text.
         */

        .hm-bento-section {
          padding-block: var(--space-4xl) var(--space-6xl);
          background: var(--color-paper-2);
          border-top: var(--hairline);
        }

        .hm-bento-container {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
        }

        .hm-bento-header {
          text-align: center;
          margin-bottom: var(--space-4xl);
          max-width: 60ch;
          margin-inline: auto;
        }

        .hm-bento-label {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: var(--space-md);
          display: block;
        }

        .hm-bento-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
          font-weight: 700;
          color: var(--color-ink);
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: var(--space-lg);
        }

        .hm-bento-intro {
          font-family: var(--font-body);
          font-size: 1.125rem;
          color: var(--color-ink-2);
          line-height: 1.6;
        }

        /* Grid layout — 1 col mobile, 2 col desktop */
        .hm-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xl);
        }

        @media (min-width: 768px) {
          .hm-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Cards */
        .hm-bento-card {
          position: relative;
          background: var(--color-paper);
          border-radius: var(--radius-xl);
          border: var(--hairline);
          box-shadow: 0 1px 3px oklch(0.12 0.02 246 / 0.03), 0 8px 32px oklch(0.12 0.02 246 / 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
        }
        .hm-bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px oklch(0.12 0.02 246 / 0.06), 0 16px 48px oklch(0.12 0.02 246 / 0.08);
        }

        /* Content Wrapper */
        .hm-bento-content {
          padding: var(--space-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        /* Typography inside card */
        .hm-card-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: var(--radius-md);
          background: oklch(0.48 0.18 246 / 0.06);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-xs);
        }

        .hm-card-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-ink);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .hm-card-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.6;
        }

        /* Tag list */
        .hm-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-top: var(--space-sm);
        }
        .hm-card-tag {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-ink-3);
          background: var(--color-paper-3);
          padding: 0.25rem 0.625rem;
          border-radius: 999px;
          border: var(--hairline);
        }

        /* Image wrapper — fixed height, always visible, not cropped */
        .hm-bento-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          border-top: var(--hairline);
          overflow: hidden;
          background: var(--color-paper-3);
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .hm-bento-image-wrapper {
            height: 320px;
          }
        }

        .hm-mockup-img {
          object-fit: cover;
          object-position: top center;
        }

        /* Step label */
        .hm-card-step {
          font-family: var(--font-outlier);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: 0.25rem;
        }
      `}),(0,a.jsx)("section",{id:"features",className:"hm-bento-section",children:(0,a.jsxs)("div",{className:"hm-bento-container",children:[(0,a.jsxs)("header",{className:"hm-bento-header",children:[(0,a.jsx)("span",{className:"hm-bento-label",children:"Tu día, paso a paso"}),(0,a.jsx)("h2",{className:"hm-bento-heading",children:"De la admisión al alta"}),(0,a.jsx)("p",{className:"hm-bento-intro",children:"El único software que acompaña cada etapa clínica de tu paciente: evaluación, seguimiento y resultados, eliminando por completo el papel y las planillas."})]}),(0,a.jsx)("div",{className:"hm-bento-grid",children:m.map(e=>{let t=e.icon;return(0,a.jsxs)("article",{className:"hm-bento-card",children:[(0,a.jsxs)("div",{className:"hm-bento-content",children:[(0,a.jsx)("div",{className:"hm-card-icon",style:{color:`var(${e.accentToken})`},children:(0,a.jsx)(t,{size:20,"aria-hidden":"true"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-card-step",children:e.label}),(0,a.jsx)("h3",{className:"hm-card-title",children:e.title})]}),(0,a.jsx)("p",{className:"hm-card-desc",children:e.desc}),e.tags.length>0&&(0,a.jsx)("div",{className:"hm-card-tags",children:e.tags.slice(0,3).map(e=>(0,a.jsx)("span",{className:"hm-card-tag",children:e},e))})]}),(0,a.jsx)("div",{className:"hm-bento-image-wrapper",children:(0,a.jsx)(r.default,{src:e.imageSrc,alt:e.imageAlt,fill:!0,className:"hm-mockup-img",sizes:"(max-width: 768px) 100vw, 50vw"})})]},e.number)})}),(0,a.jsxs)("div",{className:"hm-bento-cta",style:{marginTop:"var(--space-5xl)",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("span",{className:"hm-bento-label",children:"¿Listo para empezar?"}),(0,a.jsx)("h2",{className:"hm-bento-heading",style:{marginBottom:"var(--space-xl)",maxWidth:"20ch"},children:"Solicita una demo gratuita. Te mostramos todo en 30 minutos."}),(0,a.jsxs)("div",{style:{display:"flex",gap:"var(--space-lg)",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[(0,a.jsxs)("a",{href:"#contact",style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2xs)",fontFamily:"var(--font-body)",fontSize:"0.9375rem",fontWeight:600,color:"var(--color-accent)",textDecoration:"none",borderBottom:"1px solid oklch(0.48 0.18 246 / 0.30)",paddingBottom:"1px"},children:["Solicitar Demo",(0,a.jsx)(c.ArrowRight,{size:14,"aria-hidden":"true"})]}),(0,a.jsxs)(t.default,{href:"/funcionalidades",style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2xs)",fontFamily:"var(--font-body)",fontSize:"0.9375rem",fontWeight:600,color:"var(--color-ink-2)",textDecoration:"none",borderBottom:"1px solid oklch(0.12 0.02 246 / 0.20)",paddingBottom:"1px"},children:["Ver funcionalidades completas",(0,a.jsx)(c.ArrowRight,{size:14,"aria-hidden":"true"})]})]})]})]})})]})}function h(){return null}function u(){return null}e.s(["Features",()=>u,"ProductShowcase",()=>h,"SolucionTeaser",()=>p])},85161,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(57688),i=e.i(22016),o=e.i(72520),n=e.i(21218),s=e.i(95468),l=e.i(30408);let c=[{value:13,prefix:"",suffix:"",label:"Escalas clínicas validadas (EVA, PSFS, WOMAC, etc.)"},{value:14,prefix:"",suffix:"",label:"Pasos de anamnesis inteligente vía QR"},{value:100,prefix:"",suffix:"%",label:"Especializado en kinesiología y fisioterapia"}];function d({stat:e,isVisible:r}){let t=(0,l.useCountUp)(e.value,r,1400,e.prefix,e.suffix);return(0,a.jsxs)("div",{className:"hm-proof-stat",children:[(0,a.jsx)("p",{className:"hm-proof-number","aria-label":`${t} ${e.label}`,children:t}),(0,a.jsx)("p",{className:"hm-proof-label",children:e.label})]})}function m(){let e=(0,r.useRef)(null),m=(0,r.useRef)(null),{motion:p,finePointer:h}=(0,l.usePrefersMotionFx)(),u=p&&h,f=(0,l.useMousePosition)(e,u),{ref:x,isVisible:g}=(0,l.useReveal)({threshold:.3});return(0,r.useEffect)(()=>{let e=m.current;e&&u&&(e.style.transform=`translate3d(calc(${100*f.x}% - 50%), calc(${100*f.y}% - 50%), 0)`)},[f.x,f.y,u]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 Split Studio Editorial Hero — Paper Light Cobalt Theme */
        .hm-hero-section {
          background: linear-gradient(180deg, oklch(0.975 0.006 246) 0%, oklch(0.99 0.002 246) 100%);
          border-bottom: var(--hairline);
          position: relative;
          padding-top: 5rem;
        }

        .hm-hero-grid {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl) var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
          align-items: center;
        }

        /* Mono Outlier Tag */
        .hm-hero-outlier {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--kenko-sapphire);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          border: 1px solid oklch(0.48 0.18 246 / 0.18);
          background: oklch(0.48 0.18 246 / 0.05);
          margin-bottom: var(--space-md);
        }

        .hm-outlier-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--kenko-mint);
        }

        /* Editorial Display Headline */
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
        }

        .hm-hero-h1-highlight {
          color: var(--kenko-sapphire);
          position: relative;
        }

        /* Lede Copy */
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 50ch;
        }

        /* Hero Action Buttons */
        .hm-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-2xl);
        }

        .hm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--kenko-sapphire);
          color: oklch(0.99 0.002 246);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          box-shadow: 0 4px 16px oklch(0.48 0.18 246 / 0.25);
          transition-property: background-color, transform, box-shadow;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        .hm-btn-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 6px 22px oklch(0.48 0.18 246 / 0.35);
        }
        .hm-btn-primary:focus-visible { outline-color: var(--color-focus); }

        .hm-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.875rem 1.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          background: var(--background);
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          transition-property: color, border-color, background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        .hm-btn-ghost:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-sapphire);
          background: oklch(0.48 0.18 246 / 0.04);
        }
        .hm-btn-ghost:focus-visible { outline-color: var(--color-focus); }

        /* Trust Pills */
        .hm-trust-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          border-top: var(--hairline);
          padding-top: var(--space-md);
        }

        .hm-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--foreground-muted);
        }

        /* ─── Right Column: Bespoke Diptych Art ─── */
        .hm-hero-diptych {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Backing Kinesiology Photo (E8) */
        .hm-photo-wrapper {
          position: relative;
          width: 82%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: var(--hairline);
          box-shadow: 0 10px 30px oklch(0.12 0.02 246 / 0.08);
          transform: rotate(-1.5deg);
        }

        .hm-photo-img {
          object-fit: cover;
          filter: contrast(1.03) brightness(0.98);
        }

        /* Foreground Software UI Frame (E3) */
        .hm-ui-frame {
          position: absolute;
          width: 86%;
          top: 15%;
          right: 0;
          background: var(--card);
          border-radius: var(--radius-lg);
          border: var(--hairline-accent);
          box-shadow: 0 20px 45px -10px oklch(0.12 0.02 246 / 0.18), 0 0 0 1px oklch(0.48 0.18 246 / 0.12);
          overflow: hidden;
          transform: rotate(1deg);
        }

        .hm-ui-bar {
          height: 2rem;
          background: var(--surface-2);
          border-bottom: var(--hairline);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding-inline: 0.75rem;
        }

        .hm-ui-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }

        .hm-ui-path {
          font-family: var(--font-outlier);
          font-size: 0.625rem;
          color: var(--foreground-subtle);
          margin-left: 0.5rem;
          background: var(--background);
          padding: 0.125rem 0.5rem;
          border-radius: 999px;
          border: var(--hairline);
        }

        .hm-ui-body {
          position: relative;
          aspect-ratio: 16 / 10;
          width: 100%;
          overflow: hidden;
        }

        /* Floating Mono Annotation Cards */
        .hm-annotation-card {
          position: absolute;
          bottom: -1rem;
          left: -1rem;
          background: var(--card);
          border: var(--hairline-accent);
          border-radius: var(--radius-md);
          padding: 0.625rem 0.875rem;
          box-shadow: 0 12px 30px oklch(0.12 0.02 246 / 0.12);
          display: flex;
          align-items: center;
          gap: 0.625rem;
          z-index: 30;
        }

        .hm-annotation-tag {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--kenko-sapphire);
          letter-spacing: 0.04em;
        }

        .hm-annotation-sub {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--foreground-muted);
        }

        /* Proof Strip */
        .hm-proof-strip {
          display: flex;
          align-items: stretch;
          gap: 0;
          border-top: var(--hairline);
          border-bottom: var(--hairline);
          background: var(--color-paper);
        }
        .hm-proof-stat {
          flex: 1;
          padding: var(--space-md) var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-2xs);
        }
        .hm-proof-stat + .hm-proof-stat {
          border-left: var(--hairline);
        }
        .hm-proof-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2rem, 4vw + 0.5rem, 3rem);
          line-height: 1;
          color: var(--color-ink);
          letter-spacing: -0.04em;
          font-style: normal;
        }
        .hm-proof-label {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--color-ink-2);
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .hm-hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }
          .hm-hero-diptych {
            margin-top: var(--space-md);
          }
          .hm-photo-wrapper { width: 100%; transform: none; }
          .hm-ui-frame { position: static; width: 100%; margin-top: var(--space-md); transform: none; }
          .hm-annotation-card { display: none; }
        }

        @media (max-width: 640px) {
          .hm-proof-strip { flex-direction: column; }
          .hm-proof-stat + .hm-proof-stat {
            border-left: none;
            border-top: var(--hairline);
          }
          .hm-proof-stat { padding: var(--space-sm) var(--space-md); }
          .hm-hero-actions { flex-direction: column; align-items: stretch; }
          .hm-hero-grid { padding-inline: var(--space-md); }
        }
      `}),(0,a.jsxs)("section",{ref:e,"data-hero":!0,className:"hm-hero-section overflow-hidden","aria-label":"Sección principal",children:[(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none opacity-[0.03]","aria-hidden":"true",style:{backgroundImage:"linear-gradient(var(--kenko-sapphire) 1px, transparent 1px), linear-gradient(90deg, var(--kenko-sapphire) 1px, transparent 1px)",backgroundSize:"48px 48px"}}),(0,a.jsxs)("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",children:[(0,a.jsx)("div",{className:"hero-mesh absolute -top-40 right-0 w-[550px] h-[550px] rounded-full",style:{background:"radial-gradient(circle, oklch(0.48 0.18 246 / 0.10) 0%, transparent 65%)",filter:p?"blur(60px)":"none"}}),(0,a.jsx)("div",{className:"hero-mesh absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full",style:{background:"radial-gradient(circle, oklch(0.66 0.19 163 / 0.08) 0%, transparent 65%)",filter:p?"blur(70px)":"none"}})]}),u&&(0,a.jsx)("div",{ref:m,className:"absolute pointer-events-none z-[1] top-0 left-0","aria-hidden":"true",style:{width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, oklch(0.48 0.18 246 / 0.06) 0%, transparent 70%)",filter:"blur(60px)",transform:"translate3d(-50%, -50%, 0)"}}),(0,a.jsxs)("div",{className:"hm-hero-grid relative z-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"hm-hero-outlier",children:[(0,a.jsx)("span",{className:"hm-outlier-dot","aria-hidden":"true"}),"01 · PLATAFORMA CLÍNICA DE KINESIOLOGÍA"]}),(0,a.jsxs)("h1",{className:"hm-hero-h1",children:["El sistema clínico del kinesiólogo:"," ",(0,a.jsx)("span",{className:"hm-hero-h1-highlight",children:"de la admisión al alta."})]}),(0,a.jsxs)("p",{className:"hm-hero-lede",children:["Del QR de admisión al informe de alta. Kenkomed acompaña cada etapa clínica de tu paciente: ",(0,a.jsx)("strong",{className:"text-foreground font-semibold",children:"evaluación, seguimiento y resultados"}),", sin papel."]}),(0,a.jsxs)("div",{className:"hm-hero-actions",children:[(0,a.jsxs)(i.default,{href:"/demo",className:"hm-btn-primary",children:["Ver video de demostración",(0,a.jsx)(o.ArrowRight,{size:15,"aria-hidden":"true"})]}),(0,a.jsxs)(i.default,{href:"/demo?modo=invitado",className:"hm-btn-ghost",children:["Probar demo sin registrarse",(0,a.jsx)(o.ArrowRight,{size:14,"aria-hidden":"true"})]})]}),(0,a.jsxs)("div",{className:"hm-trust-pills",role:"list",children:[(0,a.jsxs)("span",{className:"hm-trust-item",role:"listitem",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald"}),"Demuestra la evolución de tu paciente"]}),(0,a.jsxs)("span",{className:"hm-trust-item",role:"listitem",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald"}),"1ª sesión lista antes que llegue el paciente"]}),(0,a.jsxs)("span",{className:"hm-trust-item",role:"listitem",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald"}),"Hecho por kinesiólogos, precio transparente"]})]})]}),(0,a.jsxs)("div",{className:"hm-hero-diptych",children:[(0,a.jsx)("div",{className:"hm-photo-wrapper",children:(0,a.jsx)(t.default,{src:"/software/ficha_clinica.png",alt:"Ficha clínica digital de Kenkomed",fill:!0,priority:!0,className:"hm-photo-img",sizes:"(max-width: 960px) 100vw, 42vw"})}),(0,a.jsxs)("div",{className:"hm-ui-frame",children:[(0,a.jsxs)("div",{className:"hm-ui-bar",children:[(0,a.jsx)("span",{className:"hm-ui-dot bg-rose-400"}),(0,a.jsx)("span",{className:"hm-ui-dot bg-amber-400"}),(0,a.jsx)("span",{className:"hm-ui-dot bg-emerald-400"}),(0,a.jsx)("span",{className:"hm-ui-path",children:"kenkomed.cl/panel-clinico"})]}),(0,a.jsx)("div",{className:"hm-ui-body",children:(0,a.jsx)(t.default,{src:"/software/Panel.jpg",alt:"Panel clínico del software Kenkomed",fill:!0,priority:!0,className:"object-cover object-top",sizes:"(max-width: 960px) 100vw, 40vw"})})]}),(0,a.jsxs)("div",{className:"hm-annotation-card",children:[(0,a.jsx)(n.Activity,{size:18,className:"text-emerald"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"hm-annotation-tag",children:"[SOPORTE A LA DECISIÓN CLÍNICA]"}),(0,a.jsx)("p",{className:"hm-annotation-sub",children:"Banderas rojas & EVA/Barthel en tiempo real"})]})]})]})]})]}),(0,a.jsx)("div",{className:"relative bg-background",ref:x,children:(0,a.jsx)("div",{className:"hm-proof-strip max-w-none",children:c.map(e=>(0,a.jsx)(d,{stat:e,isVisible:g},e.label))})})]})}e.s(["Hero",()=>m])},1886,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(30030),i=e.i(20783);function o(e){var t;let o,n=(t=e,(o=r.forwardRef((e,a)=>{let{children:t,...o}=e;if(r.isValidElement(t)){var n;let e,s,l=(n=t,(s=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.ref:(s=(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.props.ref:n.props.ref||n.ref),c=function(e,a){let r={...a};for(let t in a){let i=e[t],o=a[t];/^on[A-Z]/.test(t)?i&&o?r[t]=(...e)=>{let a=o(...e);return i(...e),a}:i&&(r[t]=i):"style"===t?r[t]={...i,...o}:"className"===t&&(r[t]=[i,o].filter(Boolean).join(" "))}return{...e,...r}}(o,t.props);return t.type!==r.Fragment&&(c.ref=a?(0,i.composeRefs)(a,l):l),r.cloneElement(t,c)}return r.Children.count(t)>1?r.Children.only(null):null})).displayName=`${t}.SlotClone`,o),l=r.forwardRef((e,t)=>{let{children:i,...o}=e,l=r.Children.toArray(i),c=l.find(s);if(c){let e=c.props.children,i=l.map(a=>a!==c?a:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,a.jsx)(n,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,i):null})}return(0,a.jsx)(n,{...o,ref:t,children:i})});return l.displayName=`${e}.Slot`,l}var n=Symbol("radix.slottable");function s(e){return r.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===n}var l=new WeakMap;function c(e,a){var r,t;let i,o,n;if("at"in Array.prototype)return Array.prototype.at.call(e,a);let s=(r=e,t=a,i=r.length,(n=(o=d(t))>=0?o:i+o)<0||n>=i?-1:n);return -1===s?void 0:e[s]}function d(e){return e!=e||0===e?0:Math.trunc(e)}(class e extends Map{#e;constructor(e){super(e),this.#e=[...super.keys()],l.set(this,!0)}set(e,a){return l.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,a),this}insert(e,a,r){let t,i=this.has(a),o=this.#e.length,n=d(e),s=n>=0?n:o+n,l=s<0||s>=o?-1:s;if(l===this.size||i&&l===this.size-1||-1===l)return this.set(a,r),this;let c=this.size+ +!i;n<0&&s++;let m=[...this.#e],p=!1;for(let e=s;e<c;e++)if(s===e){let o=m[e];m[e]===a&&(o=m[e+1]),i&&this.delete(a),t=this.get(o),this.set(a,r)}else{p||m[e-1]!==a||(p=!0);let r=m[p?e:e-1],i=t;t=this.get(r),this.delete(r),this.set(r,i)}return this}with(a,r,t){let i=new e(this);return i.insert(a,r,t),i}before(e){let a=this.#e.indexOf(e)-1;if(!(a<0))return this.entryAt(a)}setBefore(e,a,r){let t=this.#e.indexOf(e);return -1===t?this:this.insert(t,a,r)}after(e){let a=this.#e.indexOf(e);if(-1!==(a=-1===a||a===this.size-1?-1:a+1))return this.entryAt(a)}setAfter(e,a,r){let t=this.#e.indexOf(e);return -1===t?this:this.insert(t+1,a,r)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let a=super.delete(e);return a&&this.#e.splice(this.#e.indexOf(e),1),a}deleteAt(e){let a=this.keyAt(e);return void 0!==a&&this.delete(a)}at(e){let a=c(this.#e,e);if(void 0!==a)return this.get(a)}entryAt(e){let a=c(this.#e,e);if(void 0!==a)return[a,this.get(a)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return c(this.#e,e)}from(e,a){let r=this.indexOf(e);if(-1===r)return;let t=r+a;return t<0&&(t=0),t>=this.size&&(t=this.size-1),this.at(t)}keyFrom(e,a){let r=this.indexOf(e);if(-1===r)return;let t=r+a;return t<0&&(t=0),t>=this.size&&(t=this.size-1),this.keyAt(t)}find(e,a){let r=0;for(let t of this){if(Reflect.apply(e,a,[t,r,this]))return t;r++}}findIndex(e,a){let r=0;for(let t of this){if(Reflect.apply(e,a,[t,r,this]))return r;r++}return -1}filter(a,r){let t=[],i=0;for(let e of this)Reflect.apply(a,r,[e,i,this])&&t.push(e),i++;return new e(t)}map(a,r){let t=[],i=0;for(let e of this)t.push([e[0],Reflect.apply(a,r,[e,i,this])]),i++;return new e(t)}reduce(...e){let[a,r]=e,t=0,i=r??this.at(0);for(let r of this)i=0===t&&1===e.length?r:Reflect.apply(a,this,[i,r,t,this]),t++;return i}reduceRight(...e){let[a,r]=e,t=r??this.at(-1);for(let r=this.size-1;r>=0;r--){let i=this.at(r);t=r===this.size-1&&1===e.length?i:Reflect.apply(a,this,[t,i,r,this])}return t}toSorted(a){return new e([...this.entries()].sort(a))}toReversed(){let a=new e;for(let e=this.size-1;e>=0;e--){let r=this.keyAt(e),t=this.get(r);a.set(r,t)}return a}toSpliced(...a){let r=[...this.entries()];return r.splice(...a),new e(r)}slice(a,r){let t=new e,i=this.size-1;if(void 0===a)return t;a<0&&(a+=this.size),void 0!==r&&r>0&&(i=r-1);for(let e=a;e<=i;e++){let a=this.keyAt(e),r=this.get(a);t.set(a,r)}return t}every(e,a){let r=0;for(let t of this){if(!Reflect.apply(e,a,[t,r,this]))return!1;r++}return!0}some(e,a){let r=0;for(let t of this){if(Reflect.apply(e,a,[t,r,this]))return!0;r++}return!1}});var m=e.i(81140),p=e.i(69340),h=e.i(48425),u=e.i(34620),f=e.i(96626),x=e.i(10772),g="Collapsible",[b,v]=(0,t.createContextScope)(g),[y,k]=b(g),j=r.forwardRef((e,t)=>{let{__scopeCollapsible:i,open:o,defaultOpen:n,disabled:s,onOpenChange:l,...c}=e,[d,m]=(0,p.useControllableState)({prop:o,defaultProp:n??!1,onChange:l,caller:g});return(0,a.jsx)(y,{scope:i,disabled:s,contentId:(0,x.useId)(),open:d,onOpenToggle:r.useCallback(()=>m(e=>!e),[m]),children:(0,a.jsx)(h.Primitive.div,{"data-state":A(d),"data-disabled":s?"":void 0,...c,ref:t})})});j.displayName=g;var w="CollapsibleTrigger",N=r.forwardRef((e,r)=>{let{__scopeCollapsible:t,...i}=e,o=k(w,t);return(0,a.jsx)(h.Primitive.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":A(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...i,ref:r,onClick:(0,m.composeEventHandlers)(e.onClick,o.onOpenToggle)})});N.displayName=w;var C="CollapsibleContent",z=r.forwardRef((e,r)=>{let{forceMount:t,...i}=e,o=k(C,e.__scopeCollapsible);return(0,a.jsx)(f.Presence,{present:t||o.open,children:({present:e})=>(0,a.jsx)(S,{...i,ref:r,present:e})})});z.displayName=C;var S=r.forwardRef((e,t)=>{let{__scopeCollapsible:o,present:n,children:s,...l}=e,c=k(C,o),[d,m]=r.useState(n),p=r.useRef(null),f=(0,i.useComposedRefs)(t,p),x=r.useRef(0),g=x.current,b=r.useRef(0),v=b.current,y=c.open||d,j=r.useRef(y),w=r.useRef(void 0);return r.useEffect(()=>{let e=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.useLayoutEffect)(()=>{let e=p.current;if(e){w.current=w.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let a=e.getBoundingClientRect();x.current=a.height,b.current=a.width,j.current||(e.style.transitionDuration=w.current.transitionDuration,e.style.animationName=w.current.animationName),m(n)}},[c.open,n]),(0,a.jsx)(h.Primitive.div,{"data-state":A(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!y,...l,ref:f,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":v?`${v}px`:void 0,...e.style},children:y&&s})});function A(e){return e?"open":"closed"}var R=e.i(86318),E="Accordion",q=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[M,P,_]=function(e){let n=e+"CollectionProvider",[s,l]=(0,t.createContextScope)(n),[c,d]=s(n,{collectionRef:{current:null},itemMap:new Map}),m=e=>{let{scope:t,children:i}=e,o=r.default.useRef(null),n=r.default.useRef(new Map).current;return(0,a.jsx)(c,{scope:t,itemMap:n,collectionRef:o,children:i})};m.displayName=n;let p=e+"CollectionSlot",h=o(p),u=r.default.forwardRef((e,r)=>{let{scope:t,children:o}=e,n=d(p,t),s=(0,i.useComposedRefs)(r,n.collectionRef);return(0,a.jsx)(h,{ref:s,children:o})});u.displayName=p;let f=e+"CollectionItemSlot",x="data-radix-collection-item",g=o(f),b=r.default.forwardRef((e,t)=>{let{scope:o,children:n,...s}=e,l=r.default.useRef(null),c=(0,i.useComposedRefs)(t,l),m=d(f,o);return r.default.useEffect(()=>(m.itemMap.set(l,{ref:l,...s}),()=>void m.itemMap.delete(l))),(0,a.jsx)(g,{...{[x]:""},ref:c,children:n})});return b.displayName=f,[{Provider:m,Slot:u,ItemSlot:b},function(a){let t=d(e+"CollectionConsumer",a);return r.default.useCallback(()=>{let e=t.collectionRef.current;if(!e)return[];let a=Array.from(e.querySelectorAll(`[${x}]`));return Array.from(t.itemMap.values()).sort((e,r)=>a.indexOf(e.ref.current)-a.indexOf(r.ref.current))},[t.collectionRef,t.itemMap])},l]}(E),[L,D]=(0,t.createContextScope)(E,[_,v]),O=v(),T=r.default.forwardRef((e,r)=>{let{type:t,...i}=e;return(0,a.jsx)(M.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,a.jsx)(H,{...i,ref:r}):(0,a.jsx)($,{...i,ref:r})})});T.displayName=E;var[F,I]=L(E),[B,K]=L(E,{collapsible:!1}),$=r.default.forwardRef((e,t)=>{let{value:i,defaultValue:o,onValueChange:n=()=>{},collapsible:s=!1,...l}=e,[c,d]=(0,p.useControllableState)({prop:i,defaultProp:o??"",onChange:n,caller:E});return(0,a.jsx)(F,{scope:e.__scopeAccordion,value:r.default.useMemo(()=>c?[c]:[],[c]),onItemOpen:d,onItemClose:r.default.useCallback(()=>s&&d(""),[s,d]),children:(0,a.jsx)(B,{scope:e.__scopeAccordion,collapsible:s,children:(0,a.jsx)(W,{...l,ref:t})})})}),H=r.default.forwardRef((e,t)=>{let{value:i,defaultValue:o,onValueChange:n=()=>{},...s}=e,[l,c]=(0,p.useControllableState)({prop:i,defaultProp:o??[],onChange:n,caller:E}),d=r.default.useCallback(e=>c((a=[])=>[...a,e]),[c]),m=r.default.useCallback(e=>c((a=[])=>a.filter(a=>a!==e)),[c]);return(0,a.jsx)(F,{scope:e.__scopeAccordion,value:l,onItemOpen:d,onItemClose:m,children:(0,a.jsx)(B,{scope:e.__scopeAccordion,collapsible:!0,children:(0,a.jsx)(W,{...s,ref:t})})})}),[V,G]=L(E),W=r.default.forwardRef((e,t)=>{let{__scopeAccordion:o,disabled:n,dir:s,orientation:l="vertical",...c}=e,d=r.default.useRef(null),p=(0,i.useComposedRefs)(d,t),u=P(o),f="ltr"===(0,R.useDirection)(s),x=(0,m.composeEventHandlers)(e.onKeyDown,e=>{if(!q.includes(e.key))return;let a=e.target,r=u().filter(e=>!e.ref.current?.disabled),t=r.findIndex(e=>e.ref.current===a),i=r.length;if(-1===t)return;e.preventDefault();let o=t,n=i-1,s=()=>{(o=t+1)>n&&(o=0)},c=()=>{(o=t-1)<0&&(o=n)};switch(e.key){case"Home":o=0;break;case"End":o=n;break;case"ArrowRight":"horizontal"===l&&(f?s():c());break;case"ArrowDown":"vertical"===l&&s();break;case"ArrowLeft":"horizontal"===l&&(f?c():s());break;case"ArrowUp":"vertical"===l&&c()}let d=o%i;r[d].ref.current?.focus()});return(0,a.jsx)(V,{scope:o,disabled:n,direction:s,orientation:l,children:(0,a.jsx)(M.Slot,{scope:o,children:(0,a.jsx)(h.Primitive.div,{...c,"data-orientation":l,ref:p,onKeyDown:n?void 0:x})})})}),U="AccordionItem",[Q,Y]=L(U),J=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,value:i,...o}=e,n=G(U,t),s=I(U,t),l=O(t),c=(0,x.useId)(),d=i&&s.value.includes(i)||!1,m=n.disabled||e.disabled;return(0,a.jsx)(Q,{scope:t,open:d,disabled:m,triggerId:c,children:(0,a.jsx)(j,{"data-orientation":n.orientation,"data-state":ei(d),...l,...o,ref:r,disabled:m,open:d,onOpenChange:e=>{e?s.onItemOpen(i):s.onItemClose(i)}})})});J.displayName=U;var Z="AccordionHeader",X=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,...i}=e,o=G(E,t),n=Y(Z,t);return(0,a.jsx)(h.Primitive.h3,{"data-orientation":o.orientation,"data-state":ei(n.open),"data-disabled":n.disabled?"":void 0,...i,ref:r})});X.displayName=Z;var ee="AccordionTrigger",ea=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,...i}=e,o=G(E,t),n=Y(ee,t),s=K(ee,t),l=O(t);return(0,a.jsx)(M.ItemSlot,{scope:t,children:(0,a.jsx)(N,{"aria-disabled":n.open&&!s.collapsible||void 0,"data-orientation":o.orientation,id:n.triggerId,...l,...i,ref:r})})});ea.displayName=ee;var er="AccordionContent",et=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,...i}=e,o=G(E,t),n=Y(er,t),s=O(t);return(0,a.jsx)(z,{role:"region","aria-labelledby":n.triggerId,"data-orientation":o.orientation,...s,...i,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function ei(e){return e?"open":"closed"}et.displayName=er;var eo=e.i(31171),eo=eo,en=e.i(47163);function es({...e}){return(0,a.jsx)(T,{"data-slot":"accordion",...e})}function el({className:e,...r}){return(0,a.jsx)(J,{"data-slot":"accordion-item",className:(0,en.cn)("border-b last:border-b-0",e),...r})}function ec({className:e,children:r,...t}){return(0,a.jsx)(X,{className:"flex",children:(0,a.jsxs)(ea,{"data-slot":"accordion-trigger",className:(0,en.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...t,children:[r,(0,a.jsx)(eo.default,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function ed({className:e,children:r,...t}){return(0,a.jsx)(et,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...t,children:(0,a.jsx)("div",{className:(0,en.cn)("pt-0 pb-4",e),children:r})})}let em=[{question:"¿Qué es Kenkomed y para quién está pensado?",answer:"Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda, 13 cuestionarios validados (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, etc) y reportes en una sola plataforma web."},{question:"¿En qué se diferencia Kenkomed de un software genérico de salud?",answer:"A diferencia de un ERP o agenda médica genérica, Kenkomed está especializado en kinesiología: incluye anamnesis completa, admisión remota por QR, escalas clínicas validadas y un algoritmo DSS que recomienda evaluaciones según los síntomas del paciente, basado en guías NICE, IASP y OMS."},{question:"¿Kenkomed cumple con la protección de datos de pacientes?",answer:"Sí. La plataforma utiliza cifrado de datos, respaldos automáticos y control de roles (administrador vs clínico). Cada profesional accede solo a la información de sus pacientes asignados. El sistema incluye herramientas de trazabilidad pensadas para la Ley 21.719 de protección de datos personales."},{question:"¿Hay demo gratuita del software?",answer:"Sí. Puedes solicitar una demo guiada sin costo desde la web o ver la sección Demo con capturas y video del panel. Un especialista te muestra el sistema DSS, la agenda inteligente y las historias clínicas digitales antes de contratar."},{question:"¿Funciona en celular y para clínicas con varios kinesiólogos?",answer:"Kenkomed funciona en cualquier navegador web, incluyendo el de tu celular — no necesitas instalar nada. Escala desde un kinesiólogo independiente hasta redes de clínicas con múltiples sedes, con roles diferenciados y panel de monitoreo en tiempo real."},{question:"¿Qué escalas y cuestionarios clínicos incluye?",answer:"Incluye 13 escalas clínicas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDash, Barthel, GROC, EQ-5D, Oswestry, LEFS), screening de comorbilidades (fibromialgia, neuropatía, ansiedad, depresión) y generación automática de informes clínicos al completar la anamnesis, sin papel ni Excel."},{question:"¿Ya uso Excel u otra agenda, puedo migrar mis datos?",answer:"Sí. Kenkomed te permite comenzar de cero o migrar tus fichas históricas. En el plan Clínica ofrecemos asistencia personalizada para importar datos desde Excel u otro software. Contáctanos para evaluar tu caso."},{question:"¿Y si mis pacientes no usan el código QR?",answer:"El QR es opcional. Si un paciente no lo completa antes de la cita, tú puedes ingresar los datos directamente en el sistema durante la sesión. El QR simplemente ahorra tiempo cuando el paciente lo usa."},{question:"¿Dónde están mis datos y quién los ve?",answer:"Tus datos clínicos se almacenan en servidores seguros con cifrado. Solo tú y los profesionales autorizados de tu centro pueden acceder a la información de los pacientes. El sistema registra cada acceso para trazabilidad."},{question:"¿Cuánto cuesta y hay permanencia?",answer:"Los planes parten desde $15.990 CLP/mes (plan anual). No hay permanencia mínima: puedes cancelar cuando quieras. Ofrecemos facturación mensual, semestral y anual. Solicita una demo para conocer el plan que mejor se adapta a tu clínica."}];function ep(){let{ref:e,visible:t}=function(){let e=(0,r.useRef)(null),[a,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let a=e.current;if(!a)return;let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(t(!0),r.disconnect())},{threshold:.08});return r.observe(a),()=>r.disconnect()},[]),{ref:e,visible:a}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 FAQ Section \xb7 modern-minimal
         * Left-aligned, numbered with Geist Mono, hairline dividers
         */
        .hm-faq-section {
          background: var(--color-paper-2);
          border-top: var(--hairline);
        }

        .hm-faq-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-4xl);
          align-items: start;
        }

        /* Left column: label + heading */
        .hm-faq-header {
          position: sticky;
          top: var(--feature-stack-sticky-top);
        }

        .hm-faq-section-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: var(--space-lg);
          display: block;
        }

        .hm-faq-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);
          font-weight: 800;
          font-style: normal; /* gate 38a */
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-faq-sub {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-ink-2);
          line-height: 1.65;
        }

        /* Right column: accordion items */
        .hm-faq-list {
          opacity: 0;
          transform: translateY(12px);
          transition-property: opacity, transform;
          transition-duration: 400ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        .hm-faq-list.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-faq-list { opacity: 1; transform: none; transition: none; }
        }

        /* Accordion item — hairline rule top (gate 9: not whitespace-only) */
        .hm-faq-item {
          border-top: var(--hairline);
        }
        .hm-faq-item:last-child {
          border-bottom: var(--hairline);
        }

        /* Trigger row: number + question */
        .hm-faq-trigger {
          display: flex;
          align-items: baseline;
          gap: var(--space-md);
          padding-block: var(--space-lg);
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          outline: 2px solid transparent; /* gate 26 — focus ring */
          outline-offset: 2px;
          border-radius: var(--radius-sm);
          transition-property: background-color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-faq-trigger:focus-visible {
          outline-color: var(--color-focus);
        }

        .hm-faq-number {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          color: var(--color-ink-3);
          letter-spacing: 0.06em;
          flex-shrink: 0;
          margin-top: 0.15em;
        }

        .hm-faq-question {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          font-style: normal; /* gate 38a */
          color: var(--color-ink);
          line-height: 1.4;
          flex: 1;
          text-align: left;
        }

        .hm-faq-answer {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-ink-2);
          line-height: 1.7;
          padding-bottom: var(--space-lg);
          padding-left: calc(var(--space-md) + 2.5rem); /* aligns with question text */
          max-width: 60ch;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hm-faq-inner {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }
          .hm-faq-header { position: static; }
          .hm-faq-inner { padding-inline: var(--space-md); }
          .hm-faq-answer { padding-left: calc(var(--space-md) + 1.875rem); }
        }
      `}),(0,a.jsx)("section",{id:"preguntas-frecuentes",className:"hm-faq-section","aria-labelledby":"faq-heading",children:(0,a.jsxs)("div",{className:"hm-faq-inner",children:[(0,a.jsxs)("div",{className:"hm-faq-header",children:[(0,a.jsx)("span",{className:"hm-faq-section-label","aria-hidden":"true",children:"Preguntas frecuentes"}),(0,a.jsx)("h2",{id:"faq-heading",className:"hm-faq-heading",children:"Lo que los kinesiólogos siempre preguntan."}),(0,a.jsx)("p",{className:"hm-faq-sub",children:"Sobre el software, las escalas clínicas, la agenda, las fichas digitales y la implementación en Chile."})]}),(0,a.jsx)("div",{ref:e,className:`hm-faq-list ${t?"is-visible":""}`,children:(0,a.jsx)(es,{type:"single",collapsible:!0,className:"w-full",children:em.map((e,r)=>{let t=String(r+1).padStart(2,"0");return(0,a.jsxs)(el,{value:`faq-${r}`,className:"hm-faq-item",children:[(0,a.jsxs)(ec,{className:"hm-faq-trigger","aria-label":`Pregunta ${t}: ${e.question}`,children:[(0,a.jsxs)("span",{className:"hm-faq-number","aria-hidden":"true",children:[t," ·"]}),(0,a.jsx)("span",{className:"hm-faq-question",children:e.question})]}),(0,a.jsx)(ed,{children:(0,a.jsx)("div",{className:"hm-faq-answer",children:e.answer})})]},e.question)})})})]})})]})}e.s(["FaqSection",()=>ep],1886)}]);