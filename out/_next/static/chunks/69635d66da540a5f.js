(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,51348,46897,e=>{"use strict";var o=e.i(75254);let r=(0,o.default)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",()=>r],51348);let a=(0,o.default)("map-pin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>a],46897)},63488,e=>{"use strict";let o=(0,e.i(75254).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);e.s(["Mail",()=>o],63488)},43432,e=>{"use strict";let o=(0,e.i(75254).default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);e.s(["Phone",()=>o],43432)},76841,e=>{"use strict";var o=e.i(43476),r=e.i(22016),a=e.i(57688);let t=(0,e.i(75254).default)("instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);var i=e.i(51348),n=e.i(63488),l=e.i(43432),s=e.i(46897);let c=[{label:"Funcionalidades",href:"/funcionalidades"},{label:"Nuestra Solución",href:"/solucion"},{label:"Ver Demo",href:"/demo"},{label:"Investigación",href:"/investigacion"},{label:"Nosotros",href:"/nosotros"},{label:"Privacidad",href:"/privacidad"},{label:"Términos de Uso",href:"/terminos"},{label:"Seguridad",href:"/seguridad"}],d=[{icon:t,label:"Instagram de Kenkomed",href:"https://www.instagram.com/_kenkomed_/"},{icon:i.Linkedin,label:"LinkedIn de Kenkomed",href:"#"}];function m(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{children:`
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
      `}),(0,o.jsx)("footer",{className:"hm-footer",role:"contentinfo",children:(0,o.jsxs)("div",{className:"hm-footer-inner",children:[(0,o.jsxs)("div",{className:"hm-footer-statement-block",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)(r.default,{href:"/",className:"inline-flex items-center gap-2 mb-6 group",children:[(0,o.jsx)(a.default,{src:"/images/LogoKenko.png",alt:"Kenkomed logo",width:36,height:36,className:"object-contain"}),(0,o.jsxs)("span",{className:"font-display font-extrabold text-xl tracking-tight text-foreground",children:["Kenko",(0,o.jsx)("span",{className:"text-emerald",children:"med"})]})]}),(0,o.jsxs)("h2",{className:"hm-footer-brand-heading",children:["El software clínico que los"," ",(0,o.jsx)("span",{className:"hm-footer-accent-text",children:"kinesiólogos"})," de Chile merecían."]})]}),(0,o.jsxs)("div",{className:"hm-footer-contact-box",children:[(0,o.jsx)("span",{className:"font-mono text-xs uppercase tracking-widest text-emerald font-semibold",children:"Contacto directo"}),(0,o.jsxs)("a",{href:"mailto:kenkomedplus@gmail.com",className:"hm-footer-contact-link",children:[(0,o.jsx)(n.Mail,{size:14,"aria-hidden":"true"}),"kenkomedplus@gmail.com"]}),(0,o.jsxs)("a",{href:"tel:+56940966266",className:"hm-footer-contact-link",children:[(0,o.jsx)(l.Phone,{size:14,"aria-hidden":"true"}),"+56 9 4096 6266"]}),(0,o.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs text-foreground-muted",children:[(0,o.jsx)(s.MapPin,{size:13,"aria-hidden":"true"}),"Concepción, Chile"]})]})]}),(0,o.jsx)("nav",{className:"hm-footer-nav-row","aria-label":"Navegación del pie de página",children:c.map(e=>(0,o.jsx)(r.default,{href:e.href,className:"hm-footer-link",children:e.label},e.label))}),(0,o.jsxs)("div",{className:"hm-footer-bottom",children:[(0,o.jsxs)("p",{children:["© ",new Date().getFullYear()," Kenkomed. Todos los derechos reservados. Hecho en Chile."]}),(0,o.jsx)("div",{className:"hm-footer-social-group",children:d.map(({icon:e,label:r,href:a})=>(0,o.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer","aria-label":r,className:"hm-footer-social-btn",children:(0,o.jsx)(e,{size:15,"aria-hidden":"true"})},r))})]})]})})]})}e.s(["Footer",()=>m],76841)}]);