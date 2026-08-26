(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51348,46897,e=>{"use strict";var a=e.i(75254);let r=(0,a.default)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>r],51348);let t=(0,a.default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>t],46897)},63488,43432,e=>{"use strict";var a=e.i(75254);let r=(0,a.default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>r],63488);let t=(0,a.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",()=>t],43432)},76841,e=>{"use strict";var a=e.i(43476),r=e.i(22016),t=e.i(57688);let o=(0,e.i(75254).default)("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);var i=e.i(51348),n=e.i(63488),s=e.i(43432),l=e.i(46897);let c=[{label:"Funcionalidades",href:"/funcionalidades"},{label:"Nuestra Solución",href:"/solucion"},{label:"Ver Demo",href:"/demo"},{label:"Investigación",href:"/investigacion"},{label:"Nosotros",href:"/nosotros"},{label:"Privacidad",href:"/privacidad"},{label:"Términos de Uso",href:"/terminos"},{label:"Seguridad",href:"/seguridad"}],d=[{icon:o,label:"Instagram de Kenkomed",href:"https://www.instagram.com/_kenkomed_/"},{icon:i.Linkedin,label:"LinkedIn de Kenkomed",href:"#"}];function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsx)("footer",{className:"hm-footer",role:"contentinfo",children:(0,a.jsxs)("div",{className:"hm-footer-inner",children:[(0,a.jsxs)("div",{className:"hm-footer-statement-block",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.default,{href:"/",className:"inline-flex items-center gap-2 mb-6 group",children:[(0,a.jsx)(t.default,{src:"/images/LogoKenko.png",alt:"Kenkomed logo",width:36,height:36,className:"object-contain"}),(0,a.jsxs)("span",{className:"font-display font-extrabold text-xl tracking-tight text-foreground",children:["Kenko",(0,a.jsx)("span",{className:"text-emerald",children:"med"})]})]}),(0,a.jsxs)("h2",{className:"hm-footer-brand-heading",children:["El software clínico que los"," ",(0,a.jsx)("span",{className:"hm-footer-accent-text",children:"kinesiólogos"})," de Chile merecían."]})]}),(0,a.jsxs)("div",{className:"hm-footer-contact-box",children:[(0,a.jsx)("span",{className:"font-mono text-xs uppercase tracking-widest text-emerald font-semibold",children:"Contacto directo"}),(0,a.jsxs)("a",{href:"mailto:kenkomedplus@gmail.com",className:"hm-footer-contact-link",children:[(0,a.jsx)(n.Mail,{size:14,"aria-hidden":"true"}),"kenkomedplus@gmail.com"]}),(0,a.jsxs)("a",{href:"tel:+56940966266",className:"hm-footer-contact-link",children:[(0,a.jsx)(s.Phone,{size:14,"aria-hidden":"true"}),"+56 9 4096 6266"]}),(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs text-foreground-muted",children:[(0,a.jsx)(l.MapPin,{size:13,"aria-hidden":"true"}),"Concepción, Chile"]})]})]}),(0,a.jsx)("nav",{className:"hm-footer-nav-row","aria-label":"Navegación del pie de página",children:c.map(e=>(0,a.jsx)(r.default,{href:e.href,className:"hm-footer-link",children:e.label},e.label))}),(0,a.jsxs)("div",{className:"hm-footer-bottom",children:[(0,a.jsxs)("p",{children:["© ",new Date().getFullYear()," Kenkomed. Todos los derechos reservados. Hecho en Chile."]}),(0,a.jsx)("div",{className:"hm-footer-social-group",children:d.map(({icon:e,label:r,href:t})=>(0,a.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer","aria-label":r,className:"hm-footer-social-btn",children:(0,a.jsx)(e,{size:15,"aria-hidden":"true"})},r))})]})]})})]})}e.s(["Footer",()=>m],76841)},95468,e=>{"use strict";let a=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>a],95468)},47802,e=>{"use strict";var a=e.i(43476),r=e.i(47163),t=e.i(71645);function o({className:e,variant:t="default",animated:o=!1}){let n="accent"===t?"var(--kenko-mint)":"subtle"===t?"currentColor":"var(--brand-light)";return o?(0,a.jsx)(i,{className:e,stroke:n,glowColor:"accent"===t?"oklch(0.66 0.19 163 / 0.4)":"oklch(0.62 0.16 246 / 0.3)"}):(0,a.jsx)("svg",{viewBox:"0 0 400 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,r.cn)("w-full h-auto",e),"aria-hidden":"true",children:(0,a.jsx)("path",{d:"M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke"})})}function i({className:e,stroke:o,glowColor:i}){let n=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let e=n.current;if(!e)return;let a=e.getTotalLength();e.style.strokeDasharray=`${a}`,e.style.strokeDashoffset=`${a}`},[]),(0,a.jsxs)("svg",{viewBox:"0 0 400 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,r.cn)("w-full h-auto overflow-visible",e),"aria-hidden":"true",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("filter",{id:"pulse-glow",x:"-20%",y:"-200%",width:"140%",height:"500%",children:[(0,a.jsx)("feGaussianBlur",{stdDeviation:"3",result:"blur"}),(0,a.jsxs)("feMerge",{children:[(0,a.jsx)("feMergeNode",{in:"blur"}),(0,a.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})}),(0,a.jsx)("path",{d:"M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400",stroke:o,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",opacity:.25}),(0,a.jsx)("path",{ref:n,d:"M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400",stroke:o,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",vectorEffect:"non-scaling-stroke",filter:"url(#pulse-glow)",style:{animation:"pulse-draw 3s ease-in-out infinite"}})]})}function n({className:e,variant:t="light",animated:i=!0}){return(0,a.jsxs)("div",{className:(0,r.cn)("relative w-full flex items-center justify-center py-4 overflow-hidden",e),"aria-hidden":"true",children:[(0,a.jsx)("div",{className:(0,r.cn)("flex-1 h-px","dark"===t?"bg-gradient-to-r from-transparent to-[oklch(0.66_0.19_163_/_0.25)]":"bg-gradient-to-r from-transparent to-[oklch(0.48_0.18_246_/_0.15)]")}),(0,a.jsx)("div",{className:"px-6 flex-shrink-0 w-64",children:(0,a.jsx)(o,{variant:"dark"===t?"accent":"default",animated:i})}),(0,a.jsx)("div",{className:(0,r.cn)("flex-1 h-px","dark"===t?"bg-gradient-to-l from-transparent to-[oklch(0.66_0.19_163_/_0.25)]":"bg-gradient-to-l from-transparent to-[oklch(0.48_0.18_246_/_0.15)]")})]})}function s({className:e}){return(0,a.jsx)("div",{className:(0,r.cn)("absolute inset-0 pointer-events-none kenko-grid",e),"aria-hidden":"true"})}function l({children:e,className:t,light:o=!1}){return(0,a.jsxs)("div",{className:(0,r.cn)("flex items-center justify-center gap-3 mb-4",t),children:[(0,a.jsx)("span",{className:(0,r.cn)("w-8 h-0.5 rounded-full",o?"bg-[var(--kenko-pulse)]":"bg-[var(--kenko-mint)]"),"aria-hidden":"true"}),(0,a.jsx)("span",{className:(0,r.cn)("text-xs font-bold tracking-[0.22em] uppercase font-display",o?"text-white/70":"text-[var(--kenko-sapphire)]"),children:e}),(0,a.jsx)("span",{className:(0,r.cn)("w-8 h-0.5 rounded-full",o?"bg-[var(--kenko-pulse)]":"bg-[var(--kenko-mint)]"),"aria-hidden":"true"})]})}function c({children:e,className:t,variant:o="deep"}){return(0,a.jsxs)("div",{className:(0,r.cn)("relative overflow-hidden","deep"===o&&"kenko-band-deep","hero"===o&&"kenko-band-hero","mist"===o&&"kenko-band-mist","white"===o&&"bg-background",t),children:[("deep"===o||"hero"===o)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{className:"opacity-[0.05]"}),(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",style:{background:"radial-gradient(ellipse 80% 60% at 100% 0%, oklch(0.66 0.19 163 / 0.12), transparent 60%)"}}),(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",style:{background:"radial-gradient(ellipse 60% 40% at 20% 100%, oklch(0.48 0.18 246 / 0.10), transparent 60%)"}})]}),(0,a.jsx)("div",{className:"relative z-10",children:e})]})}function d({label:e,value:t,color:o="blue",style:i,className:n}){return(0,a.jsxs)("div",{className:(0,r.cn)("absolute rounded-2xl px-4 py-3 border shadow-xl hidden md:block animate-float hero-particle","backdrop-blur-md",{blue:"border-[oklch(0.48_0.18_246_/_0.3)] bg-[oklch(0.22_0.10_240_/_0.7)]",mint:"border-[oklch(0.66_0.19_163_/_0.3)] bg-[oklch(0.15_0.08_163_/_0.7)]",sky:"border-[oklch(0.62_0.16_230_/_0.3)] bg-[oklch(0.18_0.08_230_/_0.7)]"}[o],n),style:i,children:[(0,a.jsx)("p",{className:"text-[9px] text-white/45 font-bold uppercase tracking-wider mb-0.5 font-display",children:e}),(0,a.jsx)("p",{className:(0,r.cn)("text-sm font-bold font-display",{blue:"text-[var(--kenko-sky)]",mint:"text-[var(--kenko-pulse)]",sky:"text-[oklch(0.80_0.14_230)]"}[o]),children:t})]})}e.s(["BrandBand",()=>c,"BrandGrid",()=>s,"DataParticle",()=>d,"PulseDivider",()=>n,"RecoveryPulse",()=>o,"SectionEyebrow",()=>l])},83086,e=>{"use strict";let a=(0,e.i(75254).default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",()=>a],83086)},72520,e=>{"use strict";let a=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>a],72520)},78583,17923,e=>{"use strict";var a=e.i(75254);let r=(0,a.default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>r],78583);let t=(0,a.default)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>t],17923)},55711,e=>{"use strict";let a=(0,e.i(75254).default)("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]);e.s(["Brain",()=>a],55711)},81418,e=>{"use strict";let a=(0,e.i(75254).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["ShieldCheck",()=>a],81418)},51804,e=>{"use strict";let a=(0,e.i(75254).default)("calendar-check",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);e.s(["CalendarCheck",()=>a],51804)},23962,e=>{"use strict";let a=(0,e.i(75254).default)("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);e.s(["QrCode",()=>a],23962)},84614,e=>{"use strict";let a=(0,e.i(75254).default)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>a],84614)},7486,e=>{"use strict";let a=(0,e.i(75254).default)("building-2",[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]]);e.s(["Building2",()=>a],7486)},86311,e=>{"use strict";let a=(0,e.i(75254).default)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]]);e.s(["MessageSquare",()=>a],86311)},57053,e=>{"use strict";var a=e.i(43476),r=e.i(72520),t=e.i(30408);let o=[{text:"Demo en 24 h"},{text:"Sin tarjeta de crédito"},{text:"Datos encriptados"}];function i(){let{ref:e,isVisible:i}=(0,t.useReveal)({threshold:.2});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsx)("section",{className:"hm-cta-strip","aria-labelledby":"mid-cta-heading",children:(0,a.jsxs)("div",{ref:e,className:`hm-cta-strip-inner ${i?"is-visible":""}`,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-cta-strip-label","aria-hidden":"true",children:"¿Te convenció?"}),(0,a.jsx)("h2",{id:"mid-cta-heading",className:"hm-cta-strip-heading",children:"Agenda tu demo gratuita ahora."}),(0,a.jsx)("p",{className:"hm-cta-strip-sub",children:"Te mostramos Kenkomed en vivo y resolvemos tus dudas en una llamada corta. Sin obligaciones."}),(0,a.jsx)("div",{className:"hm-cta-proof",role:"list","aria-label":"Garantías",children:o.map(({text:e})=>(0,a.jsx)("span",{className:"hm-cta-proof-chip",role:"listitem",children:e},e))})]}),(0,a.jsx)("div",{className:"hm-cta-strip-action",children:(0,a.jsxs)("a",{href:"#contact",className:"hm-cta-btn-primary",id:"mid-cta-btn",children:["Solicitar demo gratuita",(0,a.jsx)(r.ArrowRight,{size:15,"aria-hidden":"true"})]})})]})})]})}e.s(["HomeMidCta",()=>i])},42175,e=>{"use strict";var a=e.i(43476),r=e.i(22016),t=e.i(72520),o=e.i(30408);let i=[{number:"8",unit:"",label:"Escalas clínicas validadas",sub:"EVA · PSFS · Barthel · GROC y más"},{number:"9",unit:"",label:"Pasos de anamnesis inteligente",sub:"Completados por el paciente vía QR"},{number:"100",unit:"%",label:"Especializado en kinesiología",sub:"Diseñado para el flujo clínico real"}];function n(){let{ref:e,isVisible:n}=(0,o.useReveal)({threshold:.15});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsx)("section",{className:"hm-proof-section","aria-labelledby":"proof-heading",children:(0,a.jsxs)("div",{className:"hm-proof-inner",ref:e,children:[(0,a.jsx)("p",{className:"hm-proof-section-label","aria-hidden":"true",children:"En números"}),(0,a.jsx)("div",{className:"hm-proof-row",role:"list",children:i.map((e,r)=>(0,a.jsxs)("div",{className:`hm-proof-cell ${n?"is-visible":""}`,role:"listitem",children:[(0,a.jsxs)("p",{className:"hm-proof-figure","aria-label":`${e.number}${e.unit} ${e.label}`,children:[e.number,e.unit&&(0,a.jsx)("span",{className:"hm-proof-unit","aria-hidden":"true",children:e.unit})]}),(0,a.jsx)("p",{className:"hm-proof-cell-label",id:"proof-heading",children:e.label}),(0,a.jsx)("p",{className:"hm-proof-cell-sub",children:e.sub})]},e.label))}),(0,a.jsxs)("nav",{className:"hm-proof-nav","aria-label":"Explorar Kenkomed",children:[(0,a.jsxs)(r.default,{href:"/funcionalidades",className:"hm-proof-nav-link",children:["Ver todas las funcionalidades",(0,a.jsx)(t.ArrowRight,{size:13,"aria-hidden":"true"})]}),(0,a.jsx)(r.default,{href:"/demo",className:"hm-proof-nav-secondary",children:"Demo interactiva →"}),(0,a.jsx)(r.default,{href:"/investigacion",className:"hm-proof-nav-secondary",children:"Base científica →"})]})]})})]})}e.s(["HomeExploreStrip",()=>n])},55944,e=>{"use strict";var a=e.i(43476),r=e.i(71645);let t=(0,e.i(75254).default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var o=e.i(84614),i=e.i(63488),n=e.i(43432),s=e.i(7486),l=e.i(86311),c=e.i(95468),d=e.i(47802);function m(){let e=(0,r.useRef)(null),[m,p]=(0,r.useState)(!1),[h,u]=(0,r.useState)(!1),[f,g]=(0,r.useState)(!1),[x,v]=(0,r.useState)({name:"",email:"",phone:"",clinic:"",message:""});(0,r.useEffect)(()=>{let a=new IntersectionObserver(([e])=>{e.isIntersecting&&(p(!0),a.disconnect())},{threshold:.1});return e.current&&a.observe(e.current),()=>a.disconnect()},[]);let b=e=>{v(a=>({...a,[e.target.name]:e.target.value}))},k=async e=>{e.preventDefault(),u(!0);try{let e=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"491d435e-576c-4b14-86a2-7d9540776b32",...x,subject:`Nuevo mensaje de Kenkomed Landing de: ${x.name}`,from_name:"Kenkomed Landing Page"})}),a=e.headers.get("content-type");if(a&&-1!==a.indexOf("application/json")){let a=await e.json();a.success?(u(!1),g(!0)):(console.error("Error desde Web3Forms:",a),u(!1),alert(`Error de validaci\xf3n: ${a.message||"La key podría ser inválida."}`))}else{let a=await e.text();console.error("Respuesta inesperada (no-JSON):",a),u(!1),alert("El servidor de correos bloqueó la solicitud (posiblemente por estar en localhost). Revisa la consola o verifica tu API Key.")}}catch(e){console.error("Error al enviar el formulario:",e),u(!1),alert("Hubo un error de conexión al enviar. Por favor intenta de nuevo.")}};return(0,a.jsx)("section",{id:"contact",ref:e,className:"py-28 md:py-36 kenko-band-mist overflow-hidden","aria-labelledby":"contact-heading",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-6",children:[(0,a.jsxs)("div",{className:`text-center max-w-2xl mx-auto mb-14 scroll-reveal ${m?"is-visible":""}`,children:[(0,a.jsx)(d.SectionEyebrow,{children:"Contacto"}),(0,a.jsxs)("h2",{id:"contact-heading",className:"font-display font-bold text-4xl md:text-5xl text-foreground text-balance mb-4",children:["Solicita tu"," ",(0,a.jsx)("span",{className:"text-gradient",children:"software."})]}),(0,a.jsx)("p",{className:"text-foreground-muted text-lg leading-relaxed",children:"Completa el formulario y nuestro equipo se pondrá en contacto contigo para mostrarte cómo Kenkomed puede transformar tu clínica."})]}),(0,a.jsx)("div",{className:`max-w-2xl mx-auto scroll-reveal stagger-2 ${m?"is-visible":""}`,children:(0,a.jsxs)("div",{className:"bg-card rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm relative overflow-hidden",children:[(0,a.jsx)("div",{className:"absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none","aria-hidden":"true",style:{background:"radial-gradient(circle at top right, oklch(0.48 0.18 246), transparent 70%)"}}),f?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center py-12 text-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-6",children:(0,a.jsx)(c.CheckCircle2,{size:32,className:"text-emerald"})}),(0,a.jsx)("h3",{className:"font-display font-bold text-2xl text-foreground mb-3",children:"¡Mensaje enviado!"}),(0,a.jsx)("p",{className:"text-foreground-muted max-w-md mb-8",children:"Gracias por tu interés en Kenkomed. Nuestro equipo te contactará dentro de las próximas 24 horas hábiles."}),(0,a.jsx)("button",{onClick:()=>{g(!1),v({name:"",email:"",phone:"",clinic:"",message:""})},className:"text-sm font-medium text-brand hover:text-brand-dark transition-colors",children:"Enviar otro mensaje"})]}):(0,a.jsxs)("form",{onSubmit:k,className:"relative space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-name",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(o.User,{size:14,className:"text-foreground-muted"}),"Nombre completo"]}),(0,a.jsx)("input",{type:"text",id:"contact-name",name:"name",required:!0,value:x.name,onChange:b,placeholder:"Tu nombre",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-email",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(i.Mail,{size:14,className:"text-foreground-muted"}),"Email"]}),(0,a.jsx)("input",{type:"email",id:"contact-email",name:"email",required:!0,value:x.email,onChange:b,placeholder:"tu@email.com",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-phone",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(n.Phone,{size:14,className:"text-foreground-muted"}),"Teléfono"]}),(0,a.jsx)("input",{type:"tel",id:"contact-phone",name:"phone",value:x.phone,onChange:b,placeholder:"+56 9 1234 5678",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-clinic",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(s.Building2,{size:14,className:"text-foreground-muted"}),"Clínica / Centro"]}),(0,a.jsx)("input",{type:"text",id:"contact-clinic",name:"clinic",value:x.clinic,onChange:b,placeholder:"Nombre de tu clínica",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("label",{htmlFor:"contact-message",className:"text-sm font-medium text-foreground flex items-center gap-1.5",children:[(0,a.jsx)(l.MessageSquare,{size:14,className:"text-foreground-muted"}),"Mensaje"]}),(0,a.jsx)("textarea",{id:"contact-message",name:"message",rows:4,required:!0,value:x.message,onChange:b,placeholder:"Cuéntanos sobre tu clínica, cuántos profesionales trabajan y qué necesidades tienes...",className:"w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"})]}),(0,a.jsx)("button",{type:"submit",disabled:h,className:"group w-full justify-center btn-kenko-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md",children:h?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"}),"Enviando..."]}):(0,a.jsxs)(a.Fragment,{children:["Solicitar Software",(0,a.jsx)(t,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})}),(0,a.jsx)("p",{className:"text-xs text-center text-foreground-muted",children:"Responderemos dentro de 24 horas hábiles. Sin compromiso."}),(0,a.jsxs)("p",{className:"text-xs text-center text-foreground-muted",children:["Al enviar este formulario aceptas nuestra"," ",(0,a.jsx)("a",{href:"/privacidad",className:"text-brand hover:underline",children:"Política de Privacidad"})," ","y el tratamiento de tus datos para responder tu solicitud."]})]})]})})]})})}e.s(["ContactForm",()=>m],55944)},85161,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(57688),o=e.i(22016),i=e.i(72520),n=e.i(95468),s=e.i(81418),l=e.i(83086),c=e.i(30408);let d=[{value:8,prefix:"",suffix:"",label:"Escalas clínicas validadas"},{value:9,prefix:"",suffix:"",label:"Pasos de anamnesis inteligente"},{value:100,prefix:"",suffix:"%",label:"Especializado en kinesiología"}];function m({stat:e,isVisible:r}){let t=(0,c.useCountUp)(e.value,r,1400,e.prefix,e.suffix);return(0,a.jsxs)("div",{className:"hm-proof-stat",children:[(0,a.jsx)("p",{className:"hm-proof-number","aria-label":`${t} ${e.label}`,children:t}),(0,a.jsx)("p",{className:"hm-proof-label",children:e.label})]})}function p(){let e=(0,r.useRef)(null),p=(0,r.useRef)(null),{motion:h,finePointer:u}=(0,c.usePrefersMotionFx)(),f=h&&u,g=(0,c.useMousePosition)(e,f),{ref:x,isVisible:v}=(0,c.useReveal)({threshold:.3});return(0,r.useEffect)(()=>{let e=p.current;e&&f&&(e.style.transform=`translate3d(calc(${100*g.x}% - 50%), calc(${100*g.y}% - 50%), 0)`)},[g.x,g.y,f]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 Split Product Hero — Paper Light Theme */
        .hm-hero-section {
          background: linear-gradient(180deg, oklch(0.98 0.005 246) 0%, oklch(0.99 0.002 246) 100%);
          border-bottom: var(--hairline);
          position: relative;
          padding-top: 5.5rem; /* space for sticky navbar */
        }

        .hm-hero-container {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl) var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
          align-items: center;
        }

        /* Eyebrow badge */
        .hm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--kenko-cobalt);
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          border: 1px solid oklch(0.48 0.18 246 / 0.20);
          background: oklch(0.48 0.18 246 / 0.06);
          margin-bottom: var(--space-md);
        }

        .hm-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--kenko-mint);
        }

        /* Headline */
        .hm-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.25rem, 4vw + 0.75rem, 3.85rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.06;
          letter-spacing: -0.04em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
        }

        .hm-hero-title-accent {
          color: var(--kenko-sapphire);
        }

        /* Subtitle */
        .hm-hero-sub {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 48ch;
        }

        /* CTAs */
        .hm-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-xl);
        }

        .hm-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--kenko-sapphire);
          color: oklch(0.99 0.002 246);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.8125rem 1.625rem;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          box-shadow: 0 4px 14px oklch(0.48 0.18 246 / 0.22);
          transition-property: background-color, transform, box-shadow;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-cta-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px oklch(0.48 0.18 246 / 0.30);
        }

        .hm-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.8125rem 1.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          background: var(--background);
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          transition-property: color, border-color, background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-cta-ghost:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-sapphire);
          background: oklch(0.48 0.18 246 / 0.04);
        }

        /* Hero feature tags */
        .hm-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
        }

        .hm-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--foreground-muted);
        }

        /* ─── Right Column: Browser Mockup Showcase ─── */
        .hm-hero-media {
          position: relative;
        }

        .hm-browser-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--card);
          border: var(--hairline-accent);
          box-shadow: 0 20px 40px -15px oklch(0.12 0.02 246 / 0.12), 0 0 0 1px oklch(0.48 0.18 246 / 0.15);
        }

        .hm-browser-bar {
          height: 2.25rem;
          background: var(--surface-2);
          border-bottom: var(--hairline);
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding-inline: 0.875rem;
        }

        .hm-browser-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }

        .hm-browser-url {
          margin-left: 0.5rem;
          height: 1.25rem;
          flex: 1;
          max-width: 14rem;
          background: var(--background);
          border-radius: 999px;
          border: var(--hairline);
          display: flex;
          align-items: center;
          padding-inline: 0.625rem;
          font-family: var(--font-outlier);
          font-size: 0.625rem;
          color: var(--foreground-subtle);
        }

        .hm-browser-content {
          position: relative;
          aspect-ratio: 16 / 10;
          width: 100%;
          overflow: hidden;
        }

        /* Floating UI badges */
        .hm-float-card-1 {
          position: absolute;
          bottom: -1rem;
          left: -1.5rem;
          background: var(--card);
          border: var(--hairline-accent);
          border-radius: var(--radius-lg);
          padding: 0.75rem 1rem;
          box-shadow: 0 10px 25px oklch(0.12 0.02 246 / 0.10);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          z-index: 20;
        }

        .hm-float-card-2 {
          position: absolute;
          top: 1.5rem;
          right: -1.5rem;
          background: var(--card);
          border: var(--hairline-accent);
          border-radius: var(--radius-lg);
          padding: 0.625rem 0.875rem;
          box-shadow: 0 10px 25px oklch(0.12 0.02 246 / 0.10);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 20;
        }

        /* ─── Proof Strip ─── */
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
          .hm-hero-container {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
            padding-block: var(--space-2xl);
          }
          .hm-float-card-1, .hm-float-card-2 { display: none; }
        }

        @media (max-width: 640px) {
          .hm-proof-strip { flex-direction: column; }
          .hm-proof-stat + .hm-proof-stat {
            border-left: none;
            border-top: var(--hairline);
          }
          .hm-proof-stat { padding: var(--space-sm) var(--space-md); }
          .hm-hero-ctas { flex-direction: column; align-items: stretch; }
          .hm-hero-container { padding-inline: var(--space-md); }
        }
      `}),(0,a.jsxs)("section",{ref:e,"data-hero":!0,className:"hm-hero-section overflow-hidden","aria-label":"Sección principal",children:[(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none opacity-[0.035]","aria-hidden":"true",style:{backgroundImage:"linear-gradient(var(--kenko-sapphire) 1px, transparent 1px), linear-gradient(90deg, var(--kenko-sapphire) 1px, transparent 1px)",backgroundSize:"48px 48px"}}),(0,a.jsxs)("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",children:[(0,a.jsx)("div",{className:"hero-mesh absolute -top-40 right-0 w-[550px] h-[550px] rounded-full",style:{background:"radial-gradient(circle, oklch(0.48 0.18 246 / 0.10) 0%, transparent 65%)",filter:h?"blur(60px)":"none"}}),(0,a.jsx)("div",{className:"hero-mesh absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full",style:{background:"radial-gradient(circle, oklch(0.66 0.19 163 / 0.08) 0%, transparent 65%)",filter:h?"blur(70px)":"none"}})]}),f&&(0,a.jsx)("div",{ref:p,className:"absolute pointer-events-none z-[1] top-0 left-0","aria-hidden":"true",style:{width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, oklch(0.48 0.18 246 / 0.06) 0%, transparent 70%)",filter:"blur(60px)",transform:"translate3d(-50%, -50%, 0)"}}),(0,a.jsxs)("div",{className:"hm-hero-container relative z-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"hm-eyebrow",children:[(0,a.jsx)("span",{className:"hm-eyebrow-dot","aria-hidden":"true"}),"Chile · Kinesiología & Fisioterapia"]}),(0,a.jsxs)("h1",{className:"hm-hero-title",children:["Software para"," ",(0,a.jsx)("span",{className:"hm-hero-title-accent",children:"kinesiólogos"}),"."," ","Digitaliza tu clínica."]}),(0,a.jsxs)("p",{className:"hm-hero-sub",children:["Kenkomed es el ",(0,a.jsx)("strong",{className:"text-foreground font-semibold",children:"software de gestión clínica y Sistema DSS"})," para kinesiólogos: historias clínicas digitales, agenda inteligente, fichas sin papel y cuestionarios EVA, PSFS y Barthel."]}),(0,a.jsxs)("div",{className:"hm-hero-ctas",children:[(0,a.jsxs)("a",{href:"#contact",className:"hm-cta-primary",children:["Solicitar Demo Gratuita",(0,a.jsx)(i.ArrowRight,{size:15,"aria-hidden":"true"})]}),(0,a.jsxs)(o.default,{href:"/demo",className:"hm-cta-ghost",children:["Ver Demo del Software",(0,a.jsx)(i.ArrowRight,{size:14,"aria-hidden":"true"})]})]}),(0,a.jsxs)("div",{className:"hm-hero-tags",children:[(0,a.jsxs)("span",{className:"hm-hero-tag",children:[(0,a.jsx)(n.CheckCircle2,{size:15,className:"text-emerald"}),"8 escalas validadas"]}),(0,a.jsxs)("span",{className:"hm-hero-tag",children:[(0,a.jsx)(n.CheckCircle2,{size:15,className:"text-emerald"}),"Admisión QR sin papel"]}),(0,a.jsxs)("span",{className:"hm-hero-tag",children:[(0,a.jsx)(n.CheckCircle2,{size:15,className:"text-emerald"}),"Soporte en Chile"]})]})]}),(0,a.jsxs)("div",{className:"hm-hero-media",children:[(0,a.jsxs)("div",{className:"hm-browser-frame",children:[(0,a.jsxs)("div",{className:"hm-browser-bar",children:[(0,a.jsx)("span",{className:"hm-browser-dot bg-rose-400"}),(0,a.jsx)("span",{className:"hm-browser-dot bg-amber-400"}),(0,a.jsx)("span",{className:"hm-browser-dot bg-emerald-400"}),(0,a.jsx)("div",{className:"hm-browser-url",children:"app.kenkomed.cl/dss-clinico"})]}),(0,a.jsx)("div",{className:"hm-browser-content",children:(0,a.jsx)(t.default,{src:"/software/Panel.jpg",alt:"Panel de software clínico Kenkomed",fill:!0,priority:!0,className:"object-cover object-top",sizes:"(max-width: 960px) 100vw, 45vw"})})]}),(0,a.jsxs)("div",{className:"hm-float-card-1",children:[(0,a.jsx)("div",{className:"w-9 h-9 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center flex-shrink-0",children:(0,a.jsx)(l.Sparkles,{size:18,className:"text-emerald"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-xs font-bold text-foreground",children:"Sistema DSS Activo"}),(0,a.jsx)("p",{className:"text-[11px] text-foreground-muted",children:"Interpretación automática EVA / Barthel"})]})]}),(0,a.jsxs)("div",{className:"hm-float-card-2",children:[(0,a.jsx)(s.ShieldCheck,{size:16,className:"text-brand"}),(0,a.jsx)("span",{className:"text-xs font-semibold text-foreground",children:"Ficha digital encriptada"})]})]})]})]}),(0,a.jsx)("div",{className:"relative bg-background",ref:x,children:(0,a.jsx)("div",{className:"hm-proof-strip max-w-none",children:d.map(e=>(0,a.jsx)(m,{stat:e,isVisible:v},e.label))})})]})}e.s(["Hero",()=>p])},96,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(57688),o=e.i(22016),i=e.i(55711),n=e.i(23962),s=e.i(51804),l=e.i(78583),c=e.i(17923),d=e.i(72520);let m=[{number:"01",label:"DSS Clínico",title:"Sistema de Apoyo a Decisiones",desc:"Interpreta automáticamente escalas validadas, detecta banderas rojas y guía cada evaluación con rigor científico. Escalas EVA, PSFS, Barthel, GROC y más.",tags:["EVA · PSFS · Barthel","Banderas rojas","Algoritmo de dolor","Anamnesis 14 págs."],icon:i.Brain,imageSrc:"/software/DSS.jpg",imageAlt:"Panel DSS clínico de Kenkomed mostrando escalas validadas",accentToken:"--color-accent"},{number:"02",label:"Admisión QR",title:"Admisión Express sin papel",desc:"El paciente completa su anamnesis completa desde el celular antes de llegar. Cero formularios en recepción, cero errores de transcripción.",tags:["Código QR único","Anamnesis remota","Mapa corporal digital","Sin instalación"],icon:n.QrCode,imageSrc:"/software/Cuerpo.jpg",imageAlt:"Mapa corporal y formulario de anamnesis QR de Kenkomed",accentToken:"--color-accent-2"},{number:"03",label:"Agenda Inteligente",title:"Agenda + recordatorios automáticos",desc:"Gestiona citas, recordatorios por WhatsApp y bloqueo de horarios. Vista semanal y mensual con optimización automática de la agenda del centro.",tags:["Recordatorios WhatsApp","Vista semanal/mensual","Multi-kinesiólogo","Bloqueos automáticos"],icon:s.CalendarCheck,imageSrc:"/software/Panel.jpg",imageAlt:"Agenda inteligente del software Kenkomed",accentToken:"--color-accent"},{number:"04",label:"Ficha Digital",title:"Historia clínica digital unificada",desc:"Sesiones, evolución diaria, prescripciones e informes automáticos en un solo lugar. Acceso seguro desde cualquier dispositivo.",tags:["Sesiones y evolución","Prescripciones","Informes automáticos","Multi-dispositivo"],icon:l.FileText,imageSrc:"/software/Panel.jpg",imageAlt:"Ficha clínica digital de Kenkomed",accentToken:"--color-accent-2"},{number:"05",label:"Monitoreo",title:"Panel de outcomes en tiempo real",desc:"Visualización de evolución de pacientes, métricas de adherencia y gráficos de resultados clínicos. Toma decisiones informadas en cada sesión.",tags:["Outcomes clínicos","Adherencia","Gráficos de evolución","Exportar informes"],icon:c.BarChart3,imageSrc:"/software/DSS.jpg",imageAlt:"Panel de monitoreo y outcomes de Kenkomed",accentToken:"--color-accent"}];function p({feature:e,isActive:r}){return(0,a.jsxs)("figure",{className:`hm-feature-mockup ${r?"is-active":""}`,"aria-label":e.imageAlt,children:[(0,a.jsxs)("div",{className:"hm-mockup-inner",children:[(0,a.jsxs)("div",{className:"hm-mockup-badge",children:[(0,a.jsx)("span",{className:"hm-badge-dot",style:{background:`var(${e.accentToken})`},"aria-hidden":"true"}),e.label]}),(0,a.jsx)(t.default,{src:e.imageSrc,alt:e.imageAlt,fill:!0,loading:r?"eager":"lazy",className:"hm-mockup-img object-cover object-top",sizes:"(max-width: 768px) 100vw, 55vw"}),(0,a.jsx)("div",{className:"hm-mockup-vignette","aria-hidden":"true"})]}),(0,a.jsx)("figcaption",{className:"sr-only",children:e.imageAlt})]})}function h(){let[e,t]=(0,r.useState)(0),i=(0,r.useRef)(null),n=(0,r.useRef)([]);return(0,r.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let e=()=>{let e=i.current;if(!e)return;let a=e.getBoundingClientRect().top,r=window.innerHeight,o=Math.max(0,Math.min(1,-a/(e.offsetHeight-r)));t(Math.min(m.length-1,Math.floor(o*m.length)))};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        /* Hallmark \xb7 Feature Stack (16) \xb7 modern-minimal \xb7 Cobalt
         * No 3-col grid, no equal-height cards, no icon-above-heading
         */

        /* ─── Section wrapper ─── */
        .hm-feature-stack {
          position: relative;
          background: var(--color-paper);
          border-top: var(--hairline);
        }

        /* ─── Layout: sticky left + scroll-synced right ─── */
        .hm-stack-layout {
          display: grid;
          grid-template-columns: var(--feature-stack-left-width) var(--feature-stack-right-width);
          min-height: 100vh;
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
        }

        /* ─── Left pane — sticky ─── */
        .hm-stack-left {
          position: sticky;
          top: var(--feature-stack-sticky-top);
          align-self: start;
          padding-block: var(--space-4xl);
          padding-right: var(--space-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .hm-stack-section-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: var(--space-lg);
        }

        .hm-stack-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw + 0.5rem, 2.75rem);
          font-weight: 800;
          font-style: normal; /* gate 38a */
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-stack-intro {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
        }

        /* Feature nav items — inline, not icon-above-heading */
        .hm-feature-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid oklch(0.12 0.02 246 / 0.08);
        }
        .dark .hm-feature-nav {
          border-left-color: oklch(0.97 0.003 246 / 0.10);
        }

        .hm-feature-nav-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-sm) var(--space-md);
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          position: relative;
          transition-property: background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        .hm-feature-nav-item:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-feature-nav-item::before {
          content: '';
          position: absolute;
          left: -1px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: transparent;
          transition-property: background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-feature-nav-item.is-active::before {
          background: var(--color-accent);
        }
        .hm-feature-nav-item.is-active {
          background: oklch(0.48 0.18 246 / 0.04);
        }
        .dark .hm-feature-nav-item.is-active {
          background: oklch(0.62 0.16 230 / 0.10);
        }

        .hm-feature-number {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.06em;
          color: var(--color-ink-3);
          flex-shrink: 0;
          transition-property: color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-feature-nav-item.is-active .hm-feature-number {
          color: var(--color-accent);
        }

        .hm-feature-nav-label {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-ink-2);
          transition-property: color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-feature-nav-item.is-active .hm-feature-nav-label {
          color: var(--color-ink);
          font-weight: 600;
        }

        /* ─── Right pane ─── */
        .hm-stack-right {
          padding-block: var(--space-4xl);
          padding-left: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
        }

        /* ─── Feature panel ─── */
        .hm-feature-panel {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .hm-panel-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .hm-panel-number {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          color: var(--color-accent-2);
          letter-spacing: 0.08em;
        }

        .hm-panel-title {
          font-family: var(--font-display);
          font-size: clamp(1.375rem, 2vw + 0.5rem, 1.875rem);
          font-weight: 700;
          font-style: normal; /* gate 38a */
          color: var(--color-ink);
          line-height: 1.12;
          letter-spacing: -0.03em;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-panel-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.65;
          max-width: 52ch;
        }

        .hm-panel-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2xs);
        }

        .hm-panel-tag {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-accent);
          background: oklch(0.48 0.18 246 / 0.06);
          border: 1px solid oklch(0.48 0.18 246 / 0.14);
          border-radius: 999px;
          padding: 0.3125rem 0.75rem;
          line-height: 1;
        }
        .dark .hm-panel-tag {
          background: oklch(0.62 0.16 230 / 0.12);
          border-color: oklch(0.62 0.16 230 / 0.20);
          color: var(--kenko-sky);
        }

        .hm-panel-tag-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-accent);
          flex-shrink: 0;
        }
        .dark .hm-panel-tag-dot { background: var(--kenko-sky); }

        /* ─── CSS-art mockup — NO fake browser chrome (gate 47) ─── */
        .hm-feature-mockup {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: var(--hairline-accent);
          box-shadow: 0 1px 3px oklch(0.12 0.02 246 / 0.06), 0 8px 32px oklch(0.12 0.02 246 / 0.08);
          aspect-ratio: 16 / 10;
          transition-property: opacity, transform;
          transition-duration: var(--dur-slow);
          transition-timing-function: var(--ease-out);
          opacity: 0.7;
          transform: translateY(8px);
        }
        .hm-feature-mockup.is-active {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-feature-mockup { opacity: 1; transform: none; }
        }

        .hm-mockup-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hm-mockup-badge {
          position: absolute;
          top: var(--space-md);
          left: var(--space-md);
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: oklch(0.99 0.002 246);
          background: oklch(0.09 0.018 240 / 0.80);
          backdrop-filter: blur(8px);
          border: 1px solid oklch(0.97 0.003 246 / 0.12);
          padding: 0.25rem 0.625rem;
          border-radius: 999px;
        }

        .hm-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .hm-mockup-img {
          object-fit: cover;
          object-position: top;
        }

        .hm-mockup-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, oklch(0.09 0.018 240 / 0.20) 100%);
          pointer-events: none;
        }
        .dark .hm-mockup-vignette {
          background: linear-gradient(to bottom, transparent 60%, oklch(0.07 0.015 240 / 0.30) 100%);
        }

        /* ─── Section divider — hairline rule (not whitespace only, gate 9) ─── */
        .hm-section-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, oklch(0.12 0.02 246 / 0.12) 20%, oklch(0.12 0.02 246 / 0.12) 80%, transparent 100%);
          max-width: 88rem;
          margin-inline: auto;
        }
        .dark .hm-section-rule {
          background: linear-gradient(90deg, transparent 0%, oklch(0.97 0.003 246 / 0.08) 20%, oklch(0.97 0.003 246 / 0.08) 80%, transparent 100%);
        }

        /* ─── CTA section at bottom ─── */
        .hm-stack-cta {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-md);
          border-top: var(--hairline);
        }

        .hm-stack-cta-heading {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem);
          font-weight: 700;
          font-style: normal;
          color: var(--color-ink);
          letter-spacing: -0.03em;
          line-height: 1.12;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-stack-cta-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-accent);
          text-decoration: none;
          border-bottom: 1px solid oklch(0.48 0.18 246 / 0.30);
          padding-bottom: 1px;
          outline: 2px solid transparent;
          outline-offset: 4px;
          transition-property: color, border-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-stack-cta-link:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-cobalt);
        }
        .hm-stack-cta-link:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-stack-cta-link:active {
          color: var(--kenko-cobalt);
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .hm-stack-layout {
            grid-template-columns: 1fr;
          }
          .hm-stack-left {
            position: static;
            padding-right: 0;
            padding-bottom: var(--space-xl);
          }
          .hm-stack-right {
            padding-left: 0;
            padding-top: 0;
          }
          .hm-feature-nav { border-left: none; flex-direction: row; flex-wrap: wrap; gap: var(--space-2xs); }
          .hm-feature-nav-item::before { display: none; }
          .hm-feature-nav-item { border-radius: 999px; padding: var(--space-2xs) var(--space-sm); }
          .hm-feature-nav-item.is-active { border: 1px solid oklch(0.48 0.18 246 / 0.30); }
          .hm-stack-cta { align-items: flex-start; }
        }
        @media (max-width: 640px) {
          .hm-stack-layout { padding-inline: var(--space-md); }
          .hm-stack-cta { padding-inline: var(--space-md); }
          .hm-panel-tags { gap: var(--space-3xs); }
        }
      `}),(0,a.jsxs)("section",{id:"features",ref:i,className:"hm-feature-stack","aria-labelledby":"feature-stack-heading",style:{minHeight:`${60*m.length}vh`},children:[(0,a.jsxs)("div",{className:"hm-stack-layout",children:[(0,a.jsxs)("div",{className:"hm-stack-left",children:[(0,a.jsx)("p",{className:"hm-stack-section-label","aria-hidden":"true",children:"Plataforma Kenkomed"}),(0,a.jsx)("h2",{id:"feature-stack-heading",className:"hm-stack-heading",children:"Todo lo que necesita tu clínica"}),(0,a.jsx)("p",{className:"hm-stack-intro",children:"Cada módulo diseñado para el flujo de trabajo real de un kinesiólogo. Sin funciones de más, sin curva de aprendizaje."}),(0,a.jsx)("nav",{className:"hm-feature-nav","aria-label":"Módulos de Kenkomed",children:m.map((r,o)=>{let i=r.icon;return(0,a.jsxs)("button",{ref:e=>{n.current[o]=e},className:`hm-feature-nav-item ${e===o?"is-active":""}`,onClick:()=>t(o),"aria-pressed":e===o,"aria-label":`Ver m\xf3dulo ${r.number}: ${r.label}`,type:"button",children:[(0,a.jsxs)("span",{className:"hm-feature-number","aria-hidden":"true",children:[r.number," ·"]}),(0,a.jsx)(i,{size:15,"aria-hidden":"true",style:{color:e===o?"var(--color-accent)":"var(--color-ink-3)",flexShrink:0}}),(0,a.jsx)("span",{className:"hm-feature-nav-label",children:r.label})]},r.number)})})]}),(0,a.jsx)("div",{className:"hm-stack-right",children:m.map((r,t)=>(0,a.jsxs)("div",{id:`feature-panel-${r.number}`,className:"hm-feature-panel","aria-label":`M\xf3dulo ${r.number}: ${r.title}`,children:[(0,a.jsxs)("div",{className:"hm-panel-header",children:[(0,a.jsxs)("span",{className:"hm-panel-number","aria-hidden":"true",children:[r.number," ·"]}),(0,a.jsx)("h3",{className:"hm-panel-title",children:r.title})]}),(0,a.jsx)("p",{className:"hm-panel-desc",children:r.desc}),(0,a.jsx)("div",{className:"hm-panel-tags",role:"list","aria-label":"Características",children:r.tags.map(e=>(0,a.jsxs)("span",{className:"hm-panel-tag",role:"listitem",children:[(0,a.jsx)("span",{className:"hm-panel-tag-dot","aria-hidden":"true"}),e]},e))}),(0,a.jsx)(p,{feature:r,isActive:e===t})]},r.number))})]}),(0,a.jsx)("div",{className:"hm-section-rule","aria-hidden":"true"}),(0,a.jsxs)("div",{className:"hm-stack-cta",children:[(0,a.jsx)("p",{className:"hm-stack-section-label","aria-hidden":"true",children:"¿Listo para empezar?"}),(0,a.jsxs)("h2",{className:"hm-stack-cta-heading",children:["Solicita una demo gratuita.",(0,a.jsx)("br",{}),"Te mostramos todo en 30 minutos."]}),(0,a.jsxs)("div",{style:{display:"flex",gap:"var(--space-lg)",flexWrap:"wrap",alignItems:"center"},children:[(0,a.jsxs)("a",{href:"#contact",className:"hm-stack-cta-link",children:["Solicitar Demo",(0,a.jsx)(d.ArrowRight,{size:14,"aria-hidden":"true"})]}),(0,a.jsxs)(o.default,{href:"/funcionalidades",className:"hm-stack-cta-link",style:{color:"var(--color-ink-2)",borderColor:"oklch(0.12 0.02 246 / 0.20)"},children:["Ver funcionalidades completas",(0,a.jsx)(d.ArrowRight,{size:14,"aria-hidden":"true"})]})]})]})]})]})}function u(){return null}function f(){return null}e.s(["Features",()=>f,"ProductShowcase",()=>u,"SolucionTeaser",()=>h])},1886,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(30030),o=e.i(75830),i=e.i(20783),n=e.i(81140),s=e.i(69340),l=e.i(48425),c=e.i(34620),d=e.i(96626),m=e.i(10772),p="Collapsible",[h,u]=(0,t.createContextScope)(p),[f,g]=h(p),x=r.forwardRef((e,t)=>{let{__scopeCollapsible:o,open:i,defaultOpen:n,disabled:c,onOpenChange:d,...h}=e,[u,g]=(0,s.useControllableState)({prop:i,defaultProp:n??!1,onChange:d,caller:p});return(0,a.jsx)(f,{scope:o,disabled:c,contentId:(0,m.useId)(),open:u,onOpenToggle:r.useCallback(()=>g(e=>!e),[g]),children:(0,a.jsx)(l.Primitive.div,{"data-state":j(u),"data-disabled":c?"":void 0,...h,ref:t})})});x.displayName=p;var v="CollapsibleTrigger",b=r.forwardRef((e,r)=>{let{__scopeCollapsible:t,...o}=e,i=g(v,t);return(0,a.jsx)(l.Primitive.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":j(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...o,ref:r,onClick:(0,n.composeEventHandlers)(e.onClick,i.onOpenToggle)})});b.displayName=v;var k="CollapsibleContent",y=r.forwardRef((e,r)=>{let{forceMount:t,...o}=e,i=g(k,e.__scopeCollapsible);return(0,a.jsx)(d.Presence,{present:t||i.open,children:({present:e})=>(0,a.jsx)(w,{...o,ref:r,present:e})})});y.displayName=k;var w=r.forwardRef((e,t)=>{let{__scopeCollapsible:o,present:n,children:s,...d}=e,m=g(k,o),[p,h]=r.useState(n),u=r.useRef(null),f=(0,i.useComposedRefs)(t,u),x=r.useRef(0),v=x.current,b=r.useRef(0),y=b.current,w=m.open||p,N=r.useRef(w),S=r.useRef(void 0);return r.useEffect(()=>{let e=requestAnimationFrame(()=>N.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.useLayoutEffect)(()=>{let e=u.current;if(e){S.current=S.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let a=e.getBoundingClientRect();x.current=a.height,b.current=a.width,N.current||(e.style.transitionDuration=S.current.transitionDuration,e.style.animationName=S.current.animationName),h(n)}},[m.open,n]),(0,a.jsx)(l.Primitive.div,{"data-state":j(m.open),"data-disabled":m.disabled?"":void 0,id:m.contentId,hidden:!w,...d,ref:f,style:{"--radix-collapsible-content-height":v?`${v}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style},children:w&&s})});function j(e){return e?"open":"closed"}var N=e.i(86318),S="Accordion",z=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[C,q,M]=(0,o.createCollection)(S),[A,R]=(0,t.createContextScope)(S,[M,u]),P=u(),_=r.default.forwardRef((e,r)=>{let{type:t,...o}=e;return(0,a.jsx)(C.Provider,{scope:e.__scopeAccordion,children:"multiple"===t?(0,a.jsx)(T,{...o,ref:r}):(0,a.jsx)(H,{...o,ref:r})})});_.displayName=S;var[L,E]=A(S),[F,D]=A(S,{collapsible:!1}),H=r.default.forwardRef((e,t)=>{let{value:o,defaultValue:i,onValueChange:n=()=>{},collapsible:l=!1,...c}=e,[d,m]=(0,s.useControllableState)({prop:o,defaultProp:i??"",onChange:n,caller:S});return(0,a.jsx)(L,{scope:e.__scopeAccordion,value:r.default.useMemo(()=>d?[d]:[],[d]),onItemOpen:m,onItemClose:r.default.useCallback(()=>l&&m(""),[l,m]),children:(0,a.jsx)(F,{scope:e.__scopeAccordion,collapsible:l,children:(0,a.jsx)(B,{...c,ref:t})})})}),T=r.default.forwardRef((e,t)=>{let{value:o,defaultValue:i,onValueChange:n=()=>{},...l}=e,[c,d]=(0,s.useControllableState)({prop:o,defaultProp:i??[],onChange:n,caller:S}),m=r.default.useCallback(e=>d((a=[])=>[...a,e]),[d]),p=r.default.useCallback(e=>d((a=[])=>a.filter(a=>a!==e)),[d]);return(0,a.jsx)(L,{scope:e.__scopeAccordion,value:c,onItemOpen:m,onItemClose:p,children:(0,a.jsx)(F,{scope:e.__scopeAccordion,collapsible:!0,children:(0,a.jsx)(B,{...l,ref:t})})})}),[I,K]=A(S),B=r.default.forwardRef((e,t)=>{let{__scopeAccordion:o,disabled:s,dir:c,orientation:d="vertical",...m}=e,p=r.default.useRef(null),h=(0,i.useComposedRefs)(p,t),u=q(o),f="ltr"===(0,N.useDirection)(c),g=(0,n.composeEventHandlers)(e.onKeyDown,e=>{if(!z.includes(e.key))return;let a=e.target,r=u().filter(e=>!e.ref.current?.disabled),t=r.findIndex(e=>e.ref.current===a),o=r.length;if(-1===t)return;e.preventDefault();let i=t,n=o-1,s=()=>{(i=t+1)>n&&(i=0)},l=()=>{(i=t-1)<0&&(i=n)};switch(e.key){case"Home":i=0;break;case"End":i=n;break;case"ArrowRight":"horizontal"===d&&(f?s():l());break;case"ArrowDown":"vertical"===d&&s();break;case"ArrowLeft":"horizontal"===d&&(f?l():s());break;case"ArrowUp":"vertical"===d&&l()}let c=i%o;r[c].ref.current?.focus()});return(0,a.jsx)(I,{scope:o,disabled:s,direction:c,orientation:d,children:(0,a.jsx)(C.Slot,{scope:o,children:(0,a.jsx)(l.Primitive.div,{...m,"data-orientation":d,ref:h,onKeyDown:s?void 0:g})})})}),$="AccordionItem",[V,O]=A($),G=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,value:o,...i}=e,n=K($,t),s=E($,t),l=P(t),c=(0,m.useId)(),d=o&&s.value.includes(o)||!1,p=n.disabled||e.disabled;return(0,a.jsx)(V,{scope:t,open:d,disabled:p,triggerId:c,children:(0,a.jsx)(x,{"data-orientation":n.orientation,"data-state":Z(d),...l,...i,ref:r,disabled:p,open:d,onOpenChange:e=>{e?s.onItemOpen(o):s.onItemClose(o)}})})});G.displayName=$;var Q="AccordionHeader",Y=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,i=K(S,t),n=O(Q,t);return(0,a.jsx)(l.Primitive.h3,{"data-orientation":i.orientation,"data-state":Z(n.open),"data-disabled":n.disabled?"":void 0,...o,ref:r})});Y.displayName=Q;var U="AccordionTrigger",W=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,i=K(S,t),n=O(U,t),s=D(U,t),l=P(t);return(0,a.jsx)(C.ItemSlot,{scope:t,children:(0,a.jsx)(b,{"aria-disabled":n.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:n.triggerId,...l,...o,ref:r})})});W.displayName=U;var J="AccordionContent",X=r.default.forwardRef((e,r)=>{let{__scopeAccordion:t,...o}=e,i=K(S,t),n=O(J,t),s=P(t);return(0,a.jsx)(y,{role:"region","aria-labelledby":n.triggerId,"data-orientation":i.orientation,...s,...o,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function Z(e){return e?"open":"closed"}X.displayName=J;var ee=e.i(9797),ea=e.i(47163);function er({...e}){return(0,a.jsx)(_,{"data-slot":"accordion",...e})}function et({className:e,...r}){return(0,a.jsx)(G,{"data-slot":"accordion-item",className:(0,ea.cn)("border-b last:border-b-0",e),...r})}function eo({className:e,children:r,...t}){return(0,a.jsx)(Y,{className:"flex",children:(0,a.jsxs)(W,{"data-slot":"accordion-trigger",className:(0,ea.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...t,children:[r,(0,a.jsx)(ee.ChevronDownIcon,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function ei({className:e,children:r,...t}){return(0,a.jsx)(X,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...t,children:(0,a.jsx)("div",{className:(0,ea.cn)("pt-0 pb-4",e),children:r})})}let en=[{question:"¿Qué es Kenkomed y para quién está pensado?",answer:"Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda, cuestionarios validados (EVA, PSFS, Barthel, GROC) y reportes en una sola plataforma web y móvil."},{question:"¿En qué se diferencia Kenkomed de un software genérico de salud?",answer:"A diferencia de un ERP o agenda médica genérica, Kenkomed está especializado en kinesiología: incluye anamnesis de 14 páginas, admisión remota por QR, 9 escalas clínicas validadas y un algoritmo DSS que recomienda evaluaciones según los síntomas del paciente, basado en guías NICE, IASP y OMS."},{question:"¿Kenkomed cumple con la protección de datos de pacientes?",answer:"Sí. La plataforma utiliza cifrado de datos, respaldos automáticos y control de roles (administrador vs clínico). Cada profesional accede solo a la información de sus pacientes asignados, alineado con buenas prácticas de seguridad en software de salud en Chile."},{question:"¿Hay prueba gratuita o demo del software?",answer:"Sí. Puedes solicitar una demo gratuita desde la web o ver la sección Demo con capturas y video del panel. Kenkomed ofrece un período de prueba para que evalúes el sistema DSS, la agenda inteligente y las historias clínicas digitales antes de contratar."},{question:"¿Funciona en celular y para clínicas con varios kinesiólogos?",answer:"Kenkomed funciona en navegador web y app móvil (iOS y Android). Escala desde un kinesiólogo independiente hasta redes de clínicas con múltiples sedes, con roles diferenciados y panel de monitoreo en tiempo real para la gestión del centro kinesiológico."},{question:"¿Qué escalas y cuestionarios clínicos incluye?",answer:"Incluye EVA, PSFS, Barthel, GROC, EQ-5D, Oswestry, LEFS, screening de comorbilidades (fibromialgia, neuropatía, ansiedad, depresión) y generación automática de informes clínicos al completar la anamnesis, sin papel ni Excel."}];function es(){let{ref:e,visible:t}=function(){let e=(0,r.useRef)(null),[a,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let a=e.current;if(!a)return;let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(t(!0),r.disconnect())},{threshold:.08});return r.observe(a),()=>r.disconnect()},[]),{ref:e,visible:a}}();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsx)("section",{id:"preguntas-frecuentes",className:"hm-faq-section","aria-labelledby":"faq-heading",children:(0,a.jsxs)("div",{className:"hm-faq-inner",children:[(0,a.jsxs)("div",{className:"hm-faq-header",children:[(0,a.jsx)("span",{className:"hm-faq-section-label","aria-hidden":"true",children:"Preguntas frecuentes"}),(0,a.jsx)("h2",{id:"faq-heading",className:"hm-faq-heading",children:"Lo que los kinesiólogos siempre preguntan."}),(0,a.jsx)("p",{className:"hm-faq-sub",children:"Sobre el software, las escalas clínicas, la agenda, las fichas digitales y la implementación en Chile."})]}),(0,a.jsx)("div",{ref:e,className:`hm-faq-list ${t?"is-visible":""}`,children:(0,a.jsx)(er,{type:"single",collapsible:!0,className:"w-full",children:en.map((e,r)=>{let t=String(r+1).padStart(2,"0");return(0,a.jsxs)(et,{value:`faq-${r}`,className:"hm-faq-item",children:[(0,a.jsxs)(eo,{className:"hm-faq-trigger","aria-label":`Pregunta ${t}: ${e.question}`,children:[(0,a.jsxs)("span",{className:"hm-faq-number","aria-hidden":"true",children:[t," ·"]}),(0,a.jsx)("span",{className:"hm-faq-question",children:e.question})]}),(0,a.jsx)(ei,{children:(0,a.jsx)("div",{className:"hm-faq-answer",children:e.answer})})]},e.question)})})})]})})]})}e.s(["FaqSection",()=>es],1886)}]);