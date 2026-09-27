(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31171,e=>{"use strict";let a=(0,e.i(75254).default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["default",()=>a])},21218,e=>{"use strict";let a=(0,e.i(75254).default)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);e.s(["Activity",()=>a],21218)},95468,e=>{"use strict";var a=e.i(23287);e.s(["CheckCircle2",()=>a.default])},23287,e=>{"use strict";let a=(0,e.i(75254).default)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["default",()=>a])},76841,e=>{"use strict";var a=e.i(43476),t=e.i(22016),r=e.i(57688),i=e.i(46932),o=e.i(1859);let n=[{label:"Funcionalidades",href:"/funcionalidades"},{label:"Nuestra Solución",href:"/solucion"},{label:"Ver Demo",href:"/demo"},{label:"Investigación",href:"/investigacion"},{label:"Nosotros",href:"/nosotros"},{label:"Privacidad",href:"/privacidad"},{label:"Términos de Uso",href:"/terminos"},{label:"Seguridad",href:"/seguridad"}],s=[{icon:o.RiInstagramLine,label:"Instagram de Kenkomed",href:"https://www.instagram.com/_kenkomed_/"},{icon:o.RiLinkedinBoxLine,label:"LinkedIn de Kenkomed",href:"#"}];function l(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
      `}),(0,a.jsx)("footer",{className:"hm-footer",role:"contentinfo",children:(0,a.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{duration:.5},className:"hm-footer-inner",children:[(0,a.jsxs)("div",{className:"hm-footer-statement-block",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)(t.default,{href:"/",className:"inline-flex items-center gap-2 mb-6 group",children:[(0,a.jsx)(r.default,{src:"/images/LogoKenko.png",alt:"Kenkomed logo",width:36,height:36,className:"object-contain"}),(0,a.jsxs)("span",{className:"font-display font-extrabold text-xl tracking-tight text-foreground",children:["Kenko",(0,a.jsx)("span",{className:"text-emerald",children:"med"})]})]}),(0,a.jsxs)("h2",{className:"hm-footer-brand-heading",children:["El software clínico que los"," ",(0,a.jsx)("span",{className:"hm-footer-accent-text",children:"kinesiólogos"})," de Chile merecían."]})]}),(0,a.jsxs)("div",{className:"hm-footer-contact-box",children:[(0,a.jsx)("span",{className:"font-mono text-xs uppercase tracking-widest text-emerald font-semibold",children:"Contacto directo"}),(0,a.jsxs)("a",{href:"mailto:kenkomedplus@gmail.com",className:"hm-footer-contact-link",children:[(0,a.jsx)(o.RiMailLine,{size:14,"aria-hidden":"true"}),"kenkomedplus@gmail.com"]}),(0,a.jsxs)("a",{href:"tel:+56940966266",className:"hm-footer-contact-link",children:[(0,a.jsx)(o.RiPhoneLine,{size:14,"aria-hidden":"true"}),"+56 9 4096 6266"]}),(0,a.jsxs)("span",{className:"inline-flex items-center gap-1.5 text-xs text-foreground-muted",children:[(0,a.jsx)(o.RiMapPinLine,{size:13,"aria-hidden":"true"}),"Concepción, Chile"]})]})]}),(0,a.jsx)("nav",{className:"hm-footer-nav-row","aria-label":"Navegación del pie de página",children:n.map(e=>(0,a.jsx)(t.default,{href:e.href,className:"hm-footer-link",children:e.label},e.label))}),(0,a.jsxs)("div",{className:"hm-footer-bottom",children:[(0,a.jsxs)("p",{children:["© ",new Date().getFullYear()," Kenkomed. Todos los derechos reservados. Hecho en Chile."]}),(0,a.jsx)("div",{className:"hm-footer-social-group",children:s.map(({icon:e,label:t,href:r})=>(0,a.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":t,className:"hm-footer-social-btn",children:(0,a.jsx)(e,{size:15,"aria-hidden":"true"})},t))})]})]})})]})}e.s(["Footer",()=>l])},72520,e=>{"use strict";let a=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>a],72520)},70065,e=>{"use strict";var a=e.i(43476),t=e.i(47163);function r({className:e,...r}){return(0,a.jsx)("div",{"data-slot":"card",className:(0,t.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...r})}function i({className:e,...r}){return(0,a.jsx)("div",{"data-slot":"card-content",className:(0,t.cn)("px-6",e),...r})}e.s(["Card",()=>r,"CardContent",()=>i])},23750,e=>{"use strict";var a=e.i(43476),t=e.i(47163);function r({className:e,type:r,...i}){return(0,a.jsx)("input",{type:r,"data-slot":"input",className:(0,t.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...i})}e.s(["Input",()=>r])},10708,e=>{"use strict";var a=e.i(43476),t=e.i(71645);e.i(74080);var r=e.i(91918),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,i)=>{let o=(0,r.createSlot)(`Primitive.${i}`),n=t.forwardRef((e,t)=>{let{asChild:r,...n}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(r?o:i,{...n,ref:t})});return n.displayName=`Primitive.${i}`,{...e,[i]:n}},{}),o=t.forwardRef((e,t)=>(0,a.jsx)(i.label,{...e,ref:t,onMouseDown:a=>{a.target.closest("button, input, select, textarea")||(e.onMouseDown?.(a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));o.displayName="Label";var n=e.i(47163);function s({className:e,...t}){return(0,a.jsx)(o,{"data-slot":"label",className:(0,n.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...t})}e.s(["Label",()=>s],10708)},84762,e=>{"use strict";var a=e.i(43476),t=e.i(47163);function r({className:e,...r}){return(0,a.jsx)("textarea",{"data-slot":"textarea",className:(0,t.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...r})}e.s(["Textarea",()=>r])},99682,e=>{"use strict";var a=e.i(71645);function t(e){let t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}e.s(["usePrevious",()=>t])},35804,e=>{"use strict";var a=e.i(71645),t=e.i(34620);function r(e){let[r,i]=a.useState(void 0);return(0,t.useLayoutEffect)(()=>{if(e){i({width:e.offsetWidth,height:e.offsetHeight});let a=new ResizeObserver(a=>{let t,r;if(!Array.isArray(a)||!a.length)return;let o=a[0];if("borderBoxSize"in o){let e=o.borderBoxSize,a=Array.isArray(e)?e[0]:e;t=a.inlineSize,r=a.blockSize}else t=e.offsetWidth,r=e.offsetHeight;i({width:t,height:r})});return a.observe(e,{box:"border-box"}),()=>a.unobserve(e)}i(void 0)},[e]),r}e.s(["useSize",()=>r])},86318,e=>{"use strict";var a=e.i(71645);e.i(43476);var t=a.createContext(void 0);function r(e){let r=a.useContext(t);return e||r||"ltr"}e.s(["useDirection",()=>r])},75830,9797,e=>{"use strict";var a=e.i(71645),t=e.i(30030),r=e.i(20783),i=e.i(43476);function o(e){var t;let o,n=(t=e,(o=a.forwardRef((e,t)=>{let{children:i,...o}=e;if(a.isValidElement(i)){var n;let e,s,l=(n=i,(s=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.ref:(s=(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?n.props.ref:n.props.ref||n.ref),c=function(e,a){let t={...a};for(let r in a){let i=e[r],o=a[r];/^on[A-Z]/.test(r)?i&&o?t[r]=(...e)=>{let a=o(...e);return i(...e),a}:i&&(t[r]=i):"style"===r?t[r]={...i,...o}:"className"===r&&(t[r]=[i,o].filter(Boolean).join(" "))}return{...e,...t}}(o,i.props);return i.type!==a.Fragment&&(c.ref=t?(0,r.composeRefs)(t,l):l),a.cloneElement(i,c)}return a.Children.count(i)>1?a.Children.only(null):null})).displayName=`${t}.SlotClone`,o),l=a.forwardRef((e,t)=>{let{children:r,...o}=e,l=a.Children.toArray(r),c=l.find(s);if(c){let e=c.props.children,r=l.map(t=>t!==c?t:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,i.jsx)(n,{...o,ref:t,children:a.isValidElement(e)?a.cloneElement(e,void 0,r):null})}return(0,i.jsx)(n,{...o,ref:t,children:r})});return l.displayName=`${e}.Slot`,l}var n=Symbol("radix.slottable");function s(e){return a.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===n}function l(e){let n=e+"CollectionProvider",[s,l]=(0,t.createContextScope)(n),[c,d]=s(n,{collectionRef:{current:null},itemMap:new Map}),m=e=>{let{scope:t,children:r}=e,o=a.default.useRef(null),n=a.default.useRef(new Map).current;return(0,i.jsx)(c,{scope:t,itemMap:n,collectionRef:o,children:r})};m.displayName=n;let p=e+"CollectionSlot",u=o(p),h=a.default.forwardRef((e,a)=>{let{scope:t,children:o}=e,n=d(p,t),s=(0,r.useComposedRefs)(a,n.collectionRef);return(0,i.jsx)(u,{ref:s,children:o})});h.displayName=p;let f=e+"CollectionItemSlot",x="data-radix-collection-item",g=o(f),b=a.default.forwardRef((e,t)=>{let{scope:o,children:n,...s}=e,l=a.default.useRef(null),c=(0,r.useComposedRefs)(t,l),m=d(f,o);return a.default.useEffect(()=>(m.itemMap.set(l,{ref:l,...s}),()=>void m.itemMap.delete(l))),(0,i.jsx)(g,{...{[x]:""},ref:c,children:n})});return b.displayName=f,[{Provider:m,Slot:h,ItemSlot:b},function(t){let r=d(e+"CollectionConsumer",t);return a.default.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let a=Array.from(e.querySelectorAll(`[${x}]`));return Array.from(r.itemMap.values()).sort((e,t)=>a.indexOf(e.ref.current)-a.indexOf(t.ref.current))},[r.collectionRef,r.itemMap])},l]}var c=new WeakMap;function d(e,a){var t,r;let i,o,n;if("at"in Array.prototype)return Array.prototype.at.call(e,a);let s=(t=e,r=a,i=t.length,(n=(o=m(r))>=0?o:i+o)<0||n>=i?-1:n);return -1===s?void 0:e[s]}function m(e){return e!=e||0===e?0:Math.trunc(e)}(class e extends Map{#e;constructor(e){super(e),this.#e=[...super.keys()],c.set(this,!0)}set(e,a){return c.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,a),this}insert(e,a,t){let r,i=this.has(a),o=this.#e.length,n=m(e),s=n>=0?n:o+n,l=s<0||s>=o?-1:s;if(l===this.size||i&&l===this.size-1||-1===l)return this.set(a,t),this;let c=this.size+ +!i;n<0&&s++;let d=[...this.#e],p=!1;for(let e=s;e<c;e++)if(s===e){let o=d[e];d[e]===a&&(o=d[e+1]),i&&this.delete(a),r=this.get(o),this.set(a,t)}else{p||d[e-1]!==a||(p=!0);let t=d[p?e:e-1],i=r;r=this.get(t),this.delete(t),this.set(t,i)}return this}with(a,t,r){let i=new e(this);return i.insert(a,t,r),i}before(e){let a=this.#e.indexOf(e)-1;if(!(a<0))return this.entryAt(a)}setBefore(e,a,t){let r=this.#e.indexOf(e);return -1===r?this:this.insert(r,a,t)}after(e){let a=this.#e.indexOf(e);if(-1!==(a=-1===a||a===this.size-1?-1:a+1))return this.entryAt(a)}setAfter(e,a,t){let r=this.#e.indexOf(e);return -1===r?this:this.insert(r+1,a,t)}first(){return this.entryAt(0)}last(){return this.entryAt(-1)}clear(){return this.#e=[],super.clear()}delete(e){let a=super.delete(e);return a&&this.#e.splice(this.#e.indexOf(e),1),a}deleteAt(e){let a=this.keyAt(e);return void 0!==a&&this.delete(a)}at(e){let a=d(this.#e,e);if(void 0!==a)return this.get(a)}entryAt(e){let a=d(this.#e,e);if(void 0!==a)return[a,this.get(a)]}indexOf(e){return this.#e.indexOf(e)}keyAt(e){return d(this.#e,e)}from(e,a){let t=this.indexOf(e);if(-1===t)return;let r=t+a;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)}keyFrom(e,a){let t=this.indexOf(e);if(-1===t)return;let r=t+a;return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)}find(e,a){let t=0;for(let r of this){if(Reflect.apply(e,a,[r,t,this]))return r;t++}}findIndex(e,a){let t=0;for(let r of this){if(Reflect.apply(e,a,[r,t,this]))return t;t++}return -1}filter(a,t){let r=[],i=0;for(let e of this)Reflect.apply(a,t,[e,i,this])&&r.push(e),i++;return new e(r)}map(a,t){let r=[],i=0;for(let e of this)r.push([e[0],Reflect.apply(a,t,[e,i,this])]),i++;return new e(r)}reduce(...e){let[a,t]=e,r=0,i=t??this.at(0);for(let t of this)i=0===r&&1===e.length?t:Reflect.apply(a,this,[i,t,r,this]),r++;return i}reduceRight(...e){let[a,t]=e,r=t??this.at(-1);for(let t=this.size-1;t>=0;t--){let i=this.at(t);r=t===this.size-1&&1===e.length?i:Reflect.apply(a,this,[r,i,t,this])}return r}toSorted(a){return new e([...this.entries()].sort(a))}toReversed(){let a=new e;for(let e=this.size-1;e>=0;e--){let t=this.keyAt(e),r=this.get(t);a.set(t,r)}return a}toSpliced(...a){let t=[...this.entries()];return t.splice(...a),new e(t)}slice(a,t){let r=new e,i=this.size-1;if(void 0===a)return r;a<0&&(a+=this.size),void 0!==t&&t>0&&(i=t-1);for(let e=a;e<=i;e++){let a=this.keyAt(e),t=this.get(a);r.set(a,t)}return r}every(e,a){let t=0;for(let r of this){if(!Reflect.apply(e,a,[r,t,this]))return!1;t++}return!0}some(e,a){let t=0;for(let r of this){if(Reflect.apply(e,a,[r,t,this]))return!0;t++}return!1}}),e.s(["createCollection",()=>l],75830);var p=e.i(31171);e.s(["ChevronDownIcon",()=>p.default],9797)},80882,e=>{"use strict";var a=e.i(43476),t=e.i(70065),r=e.i(47163);function i({className:e,reverse:t,pauseOnHover:i=!1,children:o,vertical:n=!1,repeat:s=4,...l}){return(0,a.jsx)("div",{...l,className:(0,r.cn)("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!n,"flex-col":n},e),children:Array(s).fill(0).map((e,s)=>(0,a.jsx)("div",{className:(0,r.cn)("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!n,"animate-marquee-vertical flex-col":n,"group-hover:[animation-play-state:paused]":i,"[animation-direction:reverse]":t}),children:o},s))})}var o=e.i(46932);let n=[{name:"Klgo. Juan Pérez",username:"@kinejuan",body:"“Kenkomed transformó la forma en que atiendo a mis pacientes. La ficha electrónica y el sistema de admisión con código QR me ahorra muchísimo tiempo.”",profile:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop"},{name:"Klga. María González",username:"@mariakine",body:"“Las evoluciones son rapidísimas y los gráficos de resultados (EVA, escalas) le dan mucha claridad a mis pacientes sobre su mejora.”",profile:"https://images.unsplash.com/photo-1594824436998-d1d86d5257e8?q=80&w=2670&auto=format&fit=crop"},{name:"Klgo. Matías López",username:"@matiaslopezk",body:"“Increíble. Ya no pierdo horas haciendo reportes. Todo está unificado. Y la agenda integrada con recordatorios redujo el ausentismo enormemente.”",profile:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop"},{name:"Centro KineMove",username:"@kinemove.cl",body:"“Para un centro de rehabilitación como el nuestro, el panel de control de sesiones y pagos es todo lo que necesitábamos. Altamente recomendado.”",profile:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2670&auto=format&fit=crop"},{name:"Klga. Daniela Silva",username:"@danisilkine",body:"“Antes anotaba todo en papel, ahora tengo la clínica entera en mi teléfono. Muy intuitivo y excelente soporte técnico cuando tienes dudas.”",profile:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop"}],s=[...n,...n],l=s.slice(0,s.length/2),c=s.slice(s.length/2),d=({profile:e,name:r,username:i,body:o})=>(0,a.jsx)(t.Card,{className:"relative h-full w-80 cursor-pointer overflow-hidden border-border/60 bg-card hover:bg-card/90 transition-colors shadow-sm hover:shadow-md p-5 rounded-2xl mx-2",children:(0,a.jsxs)(t.CardContent,{className:"p-0 flex flex-col gap-3",children:[(0,a.jsxs)("div",{className:"flex flex-row items-center gap-3",children:[(0,a.jsx)("img",{className:"rounded-full object-cover w-10 h-10 border border-border",alt:r,src:e}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("p",{className:"text-sm font-semibold text-foreground",children:r}),(0,a.jsx)("p",{className:"text-xs font-medium text-brand",children:i})]})]}),(0,a.jsx)("p",{className:"text-sm text-foreground-muted leading-relaxed",children:o})]})});function m(){return(0,a.jsxs)("section",{className:"py-24 bg-background overflow-hidden",children:[(0,a.jsxs)(o.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{duration:.5},className:"max-w-7xl mx-auto px-6 mb-12 text-center",children:[(0,a.jsxs)("h2",{className:"font-display font-bold text-3xl md:text-4xl text-foreground text-balance",children:["Varios ya confían en ",(0,a.jsx)("span",{className:"text-brand",children:"nosotros"})]}),(0,a.jsx)("p",{className:"text-foreground-muted mt-4",children:"Esto es lo que dicen los kinesiólogos que usan Kenkomed."})]}),(0,a.jsxs)(o.motion.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-10%"},transition:{duration:.6,delay:.2},className:"relative flex w-full flex-col items-center justify-center overflow-hidden",children:[(0,a.jsx)(i,{pauseOnHover:!0,className:"[--duration:40s]",children:l.map((e,t)=>(0,a.jsx)(d,{...e},`${e.username}-${t}`))}),(0,a.jsx)(i,{reverse:!0,pauseOnHover:!0,className:"[--duration:40s] mt-4",children:c.map((e,t)=>(0,a.jsx)(d,{...e},`${e.username}-${t}`))}),(0,a.jsx)("div",{className:"from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r z-10"}),(0,a.jsx)("div",{className:"from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l z-10"})]})]})}e.s(["default",()=>m],80882)},57053,e=>{"use strict";var a=e.i(43476),t=e.i(1859),r=e.i(46932);let i=[{text:"Demo en 24 h"},{text:"Sin tarjeta de crédito"},{text:"Datos encriptados"}];function o(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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


        /* Responsive */
        @media (max-width: 768px) {
          .hm-cta-strip-inner {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          .hm-cta-strip-action { align-items: flex-start; }
          .hm-cta-strip-inner { padding-inline: var(--space-md); }
        }
      `}),(0,a.jsx)("section",{className:"hm-cta-strip","aria-labelledby":"mid-cta-heading",children:(0,a.jsxs)(r.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{duration:.5},className:"hm-cta-strip-inner",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-cta-strip-label","aria-hidden":"true",children:"¿Quieres verlo funcionando?"}),(0,a.jsx)("h2",{id:"mid-cta-heading",className:"hm-cta-strip-heading",children:"Agenda tu demo gratuita ahora."}),(0,a.jsx)("p",{className:"hm-cta-strip-sub",children:"Te mostramos Kenkomed en vivo y resolvemos tus dudas en una llamada corta. Sin obligaciones."}),(0,a.jsx)("div",{className:"hm-cta-proof",role:"list","aria-label":"Garantías",children:i.map(({text:e})=>(0,a.jsx)("span",{className:"hm-cta-proof-chip",role:"listitem",children:e},e))})]}),(0,a.jsx)("div",{className:"hm-cta-strip-action",children:(0,a.jsxs)("a",{href:"#contact",className:"hm-cta-btn-primary",id:"mid-cta-btn",children:["Solicitar demo gratuita",(0,a.jsx)(t.RiArrowRightLine,{size:15,"aria-hidden":"true"})]})})]})})]})}e.s(["HomeMidCta",()=>o])},7968,e=>{"use strict";var a=e.i(43476),t=e.i(46932);let r=["Riesgo de perder o traspapelar la ficha clínica","Búsqueda manual de fichas de sesiones anteriores","Cálculo y graficación a mano de escalas clínicas","Tardas 15 minutos solo en transcribir datos de ingreso"],i=["Todo el historial clínico en la nube y accesible con un clic","Evolución SOAP rápida con opciones pre-llenadas","Escalas (EVA, PSFS, WOMAC) se calculan y grafican solas","Admisión vía QR: el paciente llena sus datos antes de entrar"],o=[{value:"-80%",label:"tiempo en tareas administrativas"},{value:"0 papel",label:"información clínica segura y ordenada"},{value:"1 solo lugar",label:"para evolución, escalas y gráficas"}],n={hidden:{},show:{transition:{staggerChildren:.07}}},s={hidden:{opacity:0,y:12},show:{opacity:1,y:0,transition:{duration:.5,ease:[.16,1,.3,1]}}},l=()=>(0,a.jsxs)("section",{className:"relative w-full overflow-hidden bg-background px-6 py-24 sm:py-32",id:"impact",children:[(0,a.jsx)("div",{className:"pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"}),(0,a.jsxs)("div",{className:"relative mx-auto max-w-5xl",children:[(0,a.jsxs)(t.motion.div,{initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-80px"},variants:n,className:"mx-auto max-w-2xl text-center",children:[(0,a.jsx)(t.motion.p,{variants:s,className:"font-mono text-[10px] uppercase tracking-[0.14em] text-brand font-bold",children:"El impacto"}),(0,a.jsxs)(t.motion.h2,{variants:s,className:"mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance",children:["De 45 minutos en papel",(0,a.jsx)("br",{}),"a 5 minutos en digital"]}),(0,a.jsx)(t.motion.p,{variants:s,className:"mt-5 text-lg leading-relaxed text-foreground-muted text-balance mx-auto max-w-xl",children:"Kenkomed reemplaza fichas en papel, planillas Excel y cálculos manuales por un flujo clínico digital completo — para que tu tiempo vuelva al paciente."})]}),(0,a.jsxs)("div",{className:"relative mt-16 grid gap-6 sm:grid-cols-2 sm:gap-10",children:[(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:20,rotate:-1},whileInView:{opacity:1,y:0,rotate:-1},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,ease:[.16,1,.3,1]},className:"rounded-[2rem] border border-rose-100 bg-rose-50/60 p-8 shadow-[0_20px_50px_-25px_rgba(244,63,94,0.35)] dark:bg-rose-950/20 dark:border-rose-900/50",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm font-semibold text-rose-500 dark:text-rose-400",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-500 dark:bg-rose-900/50 dark:text-rose-300",children:"!"}),"El flujo tradicional"]}),(0,a.jsx)("ul",{className:"mt-6 space-y-3",children:r.map(e=>(0,a.jsxs)("li",{className:"flex items-start gap-3 rounded-xl bg-white/70 dark:bg-rose-950/30 p-3 text-foreground-muted",children:[(0,a.jsx)("span",{className:"mt-0.5 text-rose-400 font-bold",children:"–"}),(0,a.jsx)("span",{className:"line-through decoration-rose-300 dark:decoration-rose-700/60",children:e})]},e))})]}),(0,a.jsx)(t.motion.div,{initial:{opacity:0,scale:.6},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-80px"},transition:{duration:.5,delay:.25,ease:[.16,1,.3,1]},className:"absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 sm:flex",children:"→"}),(0,a.jsxs)(t.motion.div,{initial:{opacity:0,y:20,rotate:1},whileInView:{opacity:1,y:0,rotate:1},viewport:{once:!0,margin:"-80px"},transition:{duration:.6,delay:.1,ease:[.16,1,.3,1]},className:"rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-8 shadow-[0_20px_50px_-25px_rgba(16,185,129,0.35)] dark:bg-emerald-950/20 dark:border-emerald-900/50",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400",children:"✓"}),"Con Kenkomed"]}),(0,a.jsx)("ul",{className:"mt-6 space-y-3",children:i.map(e=>(0,a.jsxs)("li",{className:"flex items-start gap-3 rounded-xl bg-white dark:bg-emerald-950/40 p-3 text-foreground shadow-sm",children:[(0,a.jsx)("span",{className:"mt-0.5 text-emerald-500 font-bold",children:"✓"}),(0,a.jsx)("span",{className:"font-medium",children:e})]},e))})]})]}),(0,a.jsx)(t.motion.div,{initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},variants:n,className:"mt-10 flex flex-col gap-4 sm:flex-row",children:o.map(e=>(0,a.jsxs)(t.motion.div,{variants:s,className:"flex-1 rounded-2xl border border-border/60 bg-card p-6 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.15)] text-center sm:text-left flex flex-col items-center sm:items-start",children:[(0,a.jsx)("div",{className:"font-mono text-3xl font-bold text-brand",children:e.value}),(0,a.jsx)("div",{className:"mt-1 text-sm font-medium text-foreground-muted text-balance",children:e.label})]},e.label))}),(0,a.jsx)(t.motion.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,delay:.15,ease:[.16,1,.3,1]},className:"mt-12 flex justify-center",children:(0,a.jsxs)(t.motion.a,{href:"/#contact",whileHover:{scale:1.03},whileTap:{scale:.98},className:"group flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand/90",children:["Agendar demo gratuita",(0,a.jsx)(t.motion.span,{"aria-hidden":!0,className:"inline-block",whileHover:{x:3},children:"→"})]})})]})]});function c(){return(0,a.jsx)(l,{})}e.s(["BeforeAfter",()=>c],7968)},55944,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(1859),i=e.i(46932),o=e.i(23750),n=e.i(84762),s=e.i(10708);function l(){let[e,l]=(0,t.useState)(!1),[c,d]=(0,t.useState)(!1),[m,p]=(0,t.useState)({name:"",email:"",phone:"",clinic:"",message:""}),u=e=>{p(a=>({...a,[e.target.name]:e.target.value}))},h=async e=>{e.preventDefault(),l(!0);let a=`
==================================================
📩 NUEVO MENSAJE DE CONTACTO — KENKOMED LANDING
==================================================

👤 DATOS DE CONTACTO:
- Nombre: ${m.name}
- Email: ${m.email}
- Tel\xe9fono: ${m.phone||"No especificado"}
- Cl\xednica / Centro: ${m.clinic||"No especificado"}

💬 MENSAJE / CONSULTA:
${m.message}

==================================================
Fecha: ${new Date().toLocaleString("es-CL")}
Origen: Seccion Contacto General Landing
==================================================
`.trim();try{let e=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:"491d435e-576c-4b14-86a2-7d9540776b32",subject:`💬 Mensaje Contacto — ${m.name} (${m.clinic||"Consulta"})`,from_name:"Kenkomed Landing — Contacto General",name:m.name,email:m.email,phone:m.phone,clinic:m.clinic,comentarios:m.message,message:a})}),t=e.headers.get("content-type");if(t&&-1!==t.indexOf("application/json")){let a=await e.json();a.success?(l(!1),d(!0)):(console.error("Error desde Web3Forms:",a),l(!1),alert(`Error de validaci\xf3n: ${a.message||"La key podría ser inválida."}`))}else{let a=await e.text();console.error("Respuesta inesperada (no-JSON):",a),l(!1),alert("El servidor de correos bloqueó la solicitud (posiblemente por estar en localhost). Revisa la consola o verifica tu API Key.")}}catch(e){console.error("Error al enviar el formulario:",e),l(!1),alert("Hubo un error de conexión al enviar. Por favor intenta de nuevo.")}};return(0,a.jsx)("section",{id:"contact",className:"py-24 md:py-32 bg-background overflow-hidden","aria-labelledby":"contact-heading",children:(0,a.jsx)("div",{className:"max-w-6xl mx-auto px-6",children:c?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[(0,a.jsx)("div",{className:"w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6",children:(0,a.jsx)(r.RiCheckboxCircleLine,{size:32,className:"text-emerald-500"})}),(0,a.jsx)("h3",{className:"font-display font-bold text-2xl text-foreground mb-3",children:"¡Mensaje enviado!"}),(0,a.jsx)("p",{className:"text-muted-foreground max-w-md mb-8",children:"Gracias por tu interés en Kenkomed. Nuestro equipo te contactará dentro de las próximas 24 horas hábiles."}),(0,a.jsx)("button",{onClick:()=>{d(!1),p({name:"",email:"",phone:"",clinic:"",message:""})},className:"text-sm font-medium text-brand hover:underline transition-all",children:"Enviar otro mensaje"})]}):(0,a.jsx)(i.motion.form,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-10%"},transition:{duration:.5},onSubmit:h,children:(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{id:"contact-heading",className:"text-2xl font-semibold text-foreground",children:"Solicita tu software"}),(0,a.jsx)("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:"Completa el formulario y nuestro equipo se pondrá en contacto contigo para mostrarte cómo Kenkomed puede transformar tu clínica."})]}),(0,a.jsxs)("div",{className:"sm:max-w-3xl md:col-span-2",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-6",children:[(0,a.jsxs)("div",{className:"col-span-full sm:col-span-3",children:[(0,a.jsx)(s.Label,{htmlFor:"contact-name",className:"text-sm font-medium text-foreground",children:"Nombre completo"}),(0,a.jsx)(o.Input,{type:"text",id:"contact-name",name:"name",required:!0,value:m.name,onChange:u,placeholder:"Ej. Camila Rojas",className:"mt-2"})]}),(0,a.jsxs)("div",{className:"col-span-full sm:col-span-3",children:[(0,a.jsx)(s.Label,{htmlFor:"contact-email",className:"text-sm font-medium text-foreground",children:"Email"}),(0,a.jsx)(o.Input,{type:"email",id:"contact-email",name:"email",required:!0,value:m.email,onChange:u,placeholder:"camila@clinica.com",className:"mt-2"})]}),(0,a.jsxs)("div",{className:"col-span-full sm:col-span-3",children:[(0,a.jsx)(s.Label,{htmlFor:"contact-phone",className:"text-sm font-medium text-foreground",children:"Número de teléfono"}),(0,a.jsx)(o.Input,{type:"tel",id:"contact-phone",name:"phone",required:!0,value:m.phone,onChange:u,placeholder:"+56 9 1234 5678",className:"mt-2"})]}),(0,a.jsxs)("div",{className:"col-span-full sm:col-span-3",children:[(0,a.jsx)(s.Label,{htmlFor:"contact-clinic",className:"text-sm font-medium text-foreground",children:"Clínica / Centro"}),(0,a.jsx)(o.Input,{type:"text",id:"contact-clinic",name:"clinic",required:!0,value:m.clinic,onChange:u,placeholder:"Nombre de tu clínica",className:"mt-2"})]}),(0,a.jsxs)("div",{className:"col-span-full",children:[(0,a.jsx)(s.Label,{htmlFor:"contact-message",className:"text-sm font-medium text-foreground",children:"Mensaje"}),(0,a.jsx)(n.Textarea,{id:"contact-message",name:"message",rows:4,required:!0,value:m.message,onChange:u,placeholder:"Cuéntanos sobre tu clínica, cuántos profesionales trabajan y qué necesidades tienes...",className:"mt-2 resize-none"}),(0,a.jsx)("p",{className:"mt-2 text-xs text-muted-foreground",children:"Responderemos dentro de 24 horas hábiles. Sin compromiso."})]})]}),(0,a.jsxs)("div",{className:"mt-8 flex items-center justify-end space-x-4 border-t border-border/50 pt-8",children:[(0,a.jsxs)("p",{className:"text-xs text-muted-foreground mr-auto hidden sm:block",children:["Al enviar aceptas nuestra ",(0,a.jsx)("a",{href:"/privacidad",className:"text-brand hover:underline",children:"Política de Privacidad"}),"."]}),(0,a.jsx)("button",{type:"submit",disabled:e,className:"inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",children:e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"}),"Enviando..."]}):"Solicitar Software"})]})]})]})})})})}e.s(["ContactForm",()=>l])},96,e=>{"use strict";var a=e.i(43476),t=e.i(22016),r=e.i(1859),i=e.i(71645),o=e.i(46932),n=e.i(88653),s=e.i(57688),l=e.i(47163);function c({features:e,className:t,title:r="How to get Started",label:c,description:d,autoPlayInterval:m=3e3,imageHeight:p="h-[400px]"}){let[u,h]=(0,i.useState)(0),[f,x]=(0,i.useState)(0);return(0,i.useEffect)(()=>{let a=setInterval(()=>{f<100?x(e=>e+100/(m/100)):(h(a=>(a+1)%e.length),x(0))},100);return()=>clearInterval(a)},[f,e.length,m]),(0,a.jsx)("div",{className:(0,l.cn)("py-20 md:py-32",t),children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto w-full px-6",children:[c&&(0,a.jsx)("p",{className:"text-sm uppercase tracking-widest text-brand font-bold text-center mb-3",children:c}),(0,a.jsx)("h2",{className:"text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground text-center text-balance",children:r}),d&&(0,a.jsx)("p",{className:"text-foreground-muted text-center max-w-2xl mx-auto mb-16 text-balance",children:d}),(0,a.jsxs)("div",{className:"flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16",children:[(0,a.jsx)("div",{className:"order-2 md:order-1 space-y-8",children:e.map((e,t)=>(0,a.jsxs)(o.motion.div,{className:"flex items-start gap-6 md:gap-8 cursor-pointer group",initial:{opacity:.3},animate:{opacity:t===u?1:.4},transition:{duration:.5},onClick:()=>{h(t),x(0)},children:[(0,a.jsx)(o.motion.div,{className:(0,l.cn)("w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 shrink-0 transition-colors",t===u?"bg-brand border-brand text-primary-foreground scale-110":"bg-transparent border-border/80 text-foreground-muted group-hover:border-foreground/30"),children:t<=u?(0,a.jsx)("span",{className:"text-lg font-bold text-white",children:"✓"}):(0,a.jsx)("span",{className:"text-lg font-semibold",children:t+1})}),(0,a.jsxs)("div",{className:"flex-1 pt-1",children:[(0,a.jsx)("p",{className:"text-xs uppercase tracking-wider font-semibold text-brand mb-1",children:e.step}),(0,a.jsx)("h3",{className:"text-xl md:text-2xl font-bold text-foreground mb-2",children:e.title}),(0,a.jsx)("p",{className:"text-sm md:text-base text-foreground-muted leading-relaxed",children:e.content})]})]},t))}),(0,a.jsx)("div",{className:(0,l.cn)("order-1 md:order-2 relative h-[300px] md:h-auto overflow-hidden rounded-2xl border border-border/60 bg-card/50 shadow-lg lg:min-h-[480px] flex items-center justify-center"),children:(0,a.jsx)(n.AnimatePresence,{mode:"wait",children:e.map((e,t)=>t===u&&(0,a.jsx)(o.motion.div,{className:"absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center p-3 md:p-6",initial:{y:50,opacity:0,rotateX:-10},animate:{y:0,opacity:1,rotateX:0},exit:{y:-50,opacity:0,rotateX:10},transition:{duration:.5,ease:"easeInOut"},children:(0,a.jsx)("div",{className:"relative w-full h-full rounded-xl overflow-hidden border border-border/30 shadow-md",children:(0,a.jsx)(s.default,{src:e.image,alt:e.title||e.step,className:"w-full h-full object-contain object-center",fill:!0,sizes:"(max-width: 768px) 100vw, 50vw"})})},t))})})]})]})})}let d=[{number:"01",label:"Antes de la cita",title:"Anamnesis desde el celular",desc:"El paciente completa su anamnesis desde casa. Tú llegas a la consulta con la ficha lista y las alertas ya marcadas.",tags:["Código QR único","Ahorro de 15 minutos"],icon:r.RiQrCodeLine,imageSrc:"/software/Cuerpo.jpg",imageAlt:"Paciente llenando anamnesis en el celular",accentToken:"--color-accent"},{number:"02",label:"Primera sesión",title:"Evaluación y Banderas Rojas",desc:"Escalas validadas, mapa corporal y screening, con las banderas rojas visibles desde el minuto uno para tomar mejores decisiones.",tags:["Banderas rojas automáticas","Mapa corporal"],icon:r.RiBrainLine,imageSrc:"/software/DSS.png",imageAlt:"Panel DSS clínico de Kenkomed mostrando escalas validadas",accentToken:"--color-accent-2"},{number:"03",label:"Plan de tratamiento",title:"Objetivos y Prescripción",desc:"Definición de objetivos funcionales, número de sesiones y dosificación de ejercicios estructurada en un solo lugar.",tags:["Objetivos funcionales","Prescripción de ejercicios"],icon:r.RiCalendarCheckLine,imageSrc:"/software/Objetivos_y_prescripcion.png",imageAlt:"Pantalla de prescripción de ejercicios",accentToken:"--color-accent"},{number:"04",label:"Cada sesión",title:"Evolución estructurada (SOAP)",desc:"Evolución estructurada en formato SOAP, sin reescribir nada. Cada sesión se enlaza con los objetivos planteados inicialmente.",tags:["Formato SOAP","Trazabilidad clínica"],icon:r.RiFileTextLine,imageSrc:"/software/ficha_clinica.png",imageAlt:"Ficha clínica digital de Kenkomed",accentToken:"--color-accent-2"},{number:"05",label:"Reevaluación",title:"Demuestra tus resultados",desc:"Repites las escalas y ves el cambio en un gráfico automático. El paciente ve su progreso, tú demuestras tu resultado.",tags:["Gráficos automáticos","Comparación de escalas"],icon:r.RiBarChartBoxLine,imageSrc:"/software/graficos_nuevo.png",imageAlt:"Panel de monitoreo y outcomes de Kenkomed",accentToken:"--color-accent"},{number:"06",label:"Alta e informe",title:"Diagnóstico y Reporte Final",desc:"Diagnóstico final y reporte listo para el médico derivador. Exporta el resumen clínico en PDF con un solo clic.",tags:["Reporte para médico derivador","Diagnóstico kinésico"],icon:r.RiCheckboxCircleLine,imageSrc:"/software/Diagnostico_final.png",imageAlt:"Reporte clínico de alta exportado",accentToken:"--color-accent-2"},{number:"07",label:"Pagos y Finanzas",title:"Packs y Deudas",desc:"Vende packs de atención y el sistema cruza la deuda automáticamente. Control total de morosos y flujos de caja del centro.",tags:["Packs de atención","Cruce automático"],icon:r.RiWallet3Line,imageSrc:"/software/pagos_foto.png",imageAlt:"Gestión de pagos y Packs de atención en Kenkomed",accentToken:"--color-accent"}];function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out);
        }
        .hm-bento-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-accent);
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
      `}),(0,a.jsxs)("section",{id:"features",children:[(0,a.jsx)(c,{label:"Tu día, paso a paso",title:"De la admisión al alta",description:"Cada paso del tratamiento kinésico — admisión, evaluación, evolución, alta — en una sola plataforma. Sin papel, sin planillas, sin duplicar datos.",features:d.map(e=>({step:e.label,title:e.title,content:e.desc,image:e.imageSrc})),autoPlayInterval:5e3}),(0,a.jsxs)("div",{className:"hm-bento-cta",style:{marginTop:"var(--space-5xl)",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("span",{className:"hm-bento-label",children:"¿Listo para empezar?"}),(0,a.jsx)("h2",{className:"hm-bento-heading",style:{marginBottom:"var(--space-xl)",maxWidth:"20ch"},children:"Solicita una demo gratuita. Te mostramos todo en 30 minutos."}),(0,a.jsxs)("div",{style:{display:"flex",gap:"var(--space-lg)",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},children:[(0,a.jsxs)("a",{href:"#contact",style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2xs)",fontFamily:"var(--font-body)",fontSize:"0.9375rem",fontWeight:600,color:"var(--color-accent)",textDecoration:"none",borderBottom:"1px solid oklch(0.48 0.18 246 / 0.30)",paddingBottom:"1px"},children:["Solicitar Demo",(0,a.jsx)(r.RiArrowRightLine,{size:14,"aria-hidden":"true"})]}),(0,a.jsxs)(t.default,{href:"/funcionalidades",style:{display:"inline-flex",alignItems:"center",gap:"var(--space-2xs)",fontFamily:"var(--font-body)",fontSize:"0.9375rem",fontWeight:600,color:"var(--color-ink-2)",textDecoration:"none",borderBottom:"1px solid oklch(0.12 0.02 246 / 0.20)",paddingBottom:"1px"},children:["Ver funcionalidades completas",(0,a.jsx)(r.RiArrowRightLine,{size:14,"aria-hidden":"true"})]})]})]})]})]})}function p(){return null}function u(){return null}e.s(["Features",()=>u,"ProductShowcase",()=>p,"SolucionTeaser",()=>m],96)},1886,e=>{"use strict";var a=e.i(43476),t=e.i(46932),r=e.i(47163),i=e.i(71645),o=e.i(30030),n=e.i(75830),s=e.i(20783),l=e.i(81140),c=e.i(69340),d=e.i(48425),m=e.i(34620),p=e.i(96626),u=e.i(10772),h="Collapsible",[f,x]=(0,o.createContextScope)(h),[g,b]=f(h),v=i.forwardRef((e,t)=>{let{__scopeCollapsible:r,open:o,defaultOpen:n,disabled:s,onOpenChange:l,...m}=e,[p,f]=(0,c.useControllableState)({prop:o,defaultProp:n??!1,onChange:l,caller:h});return(0,a.jsx)(g,{scope:r,disabled:s,contentId:(0,u.useId)(),open:p,onOpenToggle:i.useCallback(()=>f(e=>!e),[f]),children:(0,a.jsx)(d.Primitive.div,{"data-state":C(p),"data-disabled":s?"":void 0,...m,ref:t})})});v.displayName=h;var y="CollapsibleTrigger",j=i.forwardRef((e,t)=>{let{__scopeCollapsible:r,...i}=e,o=b(y,r);return(0,a.jsx)(d.Primitive.button,{type:"button","aria-controls":o.contentId,"aria-expanded":o.open||!1,"data-state":C(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...i,ref:t,onClick:(0,l.composeEventHandlers)(e.onClick,o.onOpenToggle)})});j.displayName=y;var w="CollapsibleContent",k=i.forwardRef((e,t)=>{let{forceMount:r,...i}=e,o=b(w,e.__scopeCollapsible);return(0,a.jsx)(p.Presence,{present:r||o.open,children:({present:e})=>(0,a.jsx)(N,{...i,ref:t,present:e})})});k.displayName=w;var N=i.forwardRef((e,t)=>{let{__scopeCollapsible:r,present:o,children:n,...l}=e,c=b(w,r),[p,u]=i.useState(o),h=i.useRef(null),f=(0,s.useComposedRefs)(t,h),x=i.useRef(0),g=x.current,v=i.useRef(0),y=v.current,j=c.open||p,k=i.useRef(j),N=i.useRef(void 0);return i.useEffect(()=>{let e=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,m.useLayoutEffect)(()=>{let e=h.current;if(e){N.current=N.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let a=e.getBoundingClientRect();x.current=a.height,v.current=a.width,k.current||(e.style.transitionDuration=N.current.transitionDuration,e.style.animationName=N.current.animationName),u(o)}},[c.open,o]),(0,a.jsx)(d.Primitive.div,{"data-state":C(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!j,...l,ref:f,style:{"--radix-collapsible-content-height":g?`${g}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style},children:j&&n})});function C(e){return e?"open":"closed"}var S=e.i(86318),z="Accordion",A=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[R,E,O]=(0,n.createCollection)(z),[P,I]=(0,o.createContextScope)(z,[O,x]),D=x(),L=i.default.forwardRef((e,t)=>{let{type:r,...i}=e;return(0,a.jsx)(R.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,a.jsx)($,{...i,ref:t}):(0,a.jsx)(K,{...i,ref:t})})});L.displayName=z;var[F,T]=P(z),[q,M]=P(z,{collapsible:!1}),K=i.default.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:n=()=>{},collapsible:s=!1,...l}=e,[d,m]=(0,c.useControllableState)({prop:r,defaultProp:o??"",onChange:n,caller:z});return(0,a.jsx)(F,{scope:e.__scopeAccordion,value:i.default.useMemo(()=>d?[d]:[],[d]),onItemOpen:m,onItemClose:i.default.useCallback(()=>s&&m(""),[s,m]),children:(0,a.jsx)(q,{scope:e.__scopeAccordion,collapsible:s,children:(0,a.jsx)(B,{...l,ref:t})})})}),$=i.default.forwardRef((e,t)=>{let{value:r,defaultValue:o,onValueChange:n=()=>{},...s}=e,[l,d]=(0,c.useControllableState)({prop:r,defaultProp:o??[],onChange:n,caller:z}),m=i.default.useCallback(e=>d((a=[])=>[...a,e]),[d]),p=i.default.useCallback(e=>d((a=[])=>a.filter(a=>a!==e)),[d]);return(0,a.jsx)(F,{scope:e.__scopeAccordion,value:l,onItemOpen:m,onItemClose:p,children:(0,a.jsx)(q,{scope:e.__scopeAccordion,collapsible:!0,children:(0,a.jsx)(B,{...s,ref:t})})})}),[_,V]=P(z),B=i.default.forwardRef((e,t)=>{let{__scopeAccordion:r,disabled:o,dir:n,orientation:c="vertical",...m}=e,p=i.default.useRef(null),u=(0,s.useComposedRefs)(p,t),h=E(r),f="ltr"===(0,S.useDirection)(n),x=(0,l.composeEventHandlers)(e.onKeyDown,e=>{if(!A.includes(e.key))return;let a=e.target,t=h().filter(e=>!e.ref.current?.disabled),r=t.findIndex(e=>e.ref.current===a),i=t.length;if(-1===r)return;e.preventDefault();let o=r,n=i-1,s=()=>{(o=r+1)>n&&(o=0)},l=()=>{(o=r-1)<0&&(o=n)};switch(e.key){case"Home":o=0;break;case"End":o=n;break;case"ArrowRight":"horizontal"===c&&(f?s():l());break;case"ArrowDown":"vertical"===c&&s();break;case"ArrowLeft":"horizontal"===c&&(f?l():s());break;case"ArrowUp":"vertical"===c&&l()}let d=o%i;t[d].ref.current?.focus()});return(0,a.jsx)(_,{scope:r,disabled:o,direction:n,orientation:c,children:(0,a.jsx)(R.Slot,{scope:r,children:(0,a.jsx)(d.Primitive.div,{...m,"data-orientation":c,ref:u,onKeyDown:o?void 0:x})})})}),W="AccordionItem",[G,H]=P(W),Q=i.default.forwardRef((e,t)=>{let{__scopeAccordion:r,value:i,...o}=e,n=V(W,r),s=T(W,r),l=D(r),c=(0,u.useId)(),d=i&&s.value.includes(i)||!1,m=n.disabled||e.disabled;return(0,a.jsx)(G,{scope:r,open:d,disabled:m,triggerId:c,children:(0,a.jsx)(v,{"data-orientation":n.orientation,"data-state":ea(d),...l,...o,ref:t,disabled:m,open:d,onOpenChange:e=>{e?s.onItemOpen(i):s.onItemClose(i)}})})});Q.displayName=W;var U="AccordionHeader",Y=i.default.forwardRef((e,t)=>{let{__scopeAccordion:r,...i}=e,o=V(z,r),n=H(U,r);return(0,a.jsx)(d.Primitive.h3,{"data-orientation":o.orientation,"data-state":ea(n.open),"data-disabled":n.disabled?"":void 0,...i,ref:t})});Y.displayName=U;var J="AccordionTrigger",X=i.default.forwardRef((e,t)=>{let{__scopeAccordion:r,...i}=e,o=V(z,r),n=H(J,r),s=M(J,r),l=D(r);return(0,a.jsx)(R.ItemSlot,{scope:r,children:(0,a.jsx)(j,{"aria-disabled":n.open&&!s.collapsible||void 0,"data-orientation":o.orientation,id:n.triggerId,...l,...i,ref:t})})});X.displayName=J;var Z="AccordionContent",ee=i.default.forwardRef((e,t)=>{let{__scopeAccordion:r,...i}=e,o=V(z,r),n=H(Z,r),s=D(r);return(0,a.jsx)(k,{role:"region","aria-labelledby":n.triggerId,"data-orientation":o.orientation,...s,...i,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function ea(e){return e?"open":"closed"}ee.displayName=Z;var et=e.i(9797);function er({...e}){return(0,a.jsx)(L,{"data-slot":"accordion",...e})}function ei({className:e,...t}){return(0,a.jsx)(Q,{"data-slot":"accordion-item",className:(0,r.cn)("border-b last:border-b-0",e),...t})}function eo({className:e,children:t,...i}){return(0,a.jsx)(Y,{className:"flex",children:(0,a.jsxs)(X,{"data-slot":"accordion-trigger",className:(0,r.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...i,children:[t,(0,a.jsx)(et.ChevronDownIcon,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function en({className:e,children:t,...i}){return(0,a.jsx)(ee,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...i,children:(0,a.jsx)("div",{className:(0,r.cn)("pt-0 pb-4",e),children:t})})}let es=[{question:"What is the purpose of this website?",answer:"This website is a place to help you find the best products and services in the world. We curate top-quality offerings so you can make informed decisions without spending hours on research."}];function el({title:e="Preguntas frecuentes",description:i="Estamos aquí para ayudarte con cualquier duda que tengas. Si no encuentras lo que buscas, contáctanos a",data:o=es,className:n,supportEmail:s="contacto@kenkomed.cl"}){let l=e.split(" ");return(0,a.jsx)("section",{className:(0,r.cn)("relative w-full overflow-hidden py-24",n),children:(0,a.jsxs)("div",{className:"mx-auto max-w-3xl px-6",children:[(0,a.jsx)("h2",{className:"relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-5xl",children:l.map((e,r)=>(0,a.jsx)(t.motion.span,{initial:{opacity:0,filter:"blur(6px)",y:12},whileInView:{opacity:1,filter:"blur(0px)",y:0},viewport:{once:!0},transition:{duration:.4,delay:.08*r,ease:"easeInOut"},className:"mr-2 inline-block",children:e},`${e}-${r}`))}),(0,a.jsxs)(t.motion.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.4},className:"relative z-10 mx-auto mt-6 max-w-2xl text-center text-base text-foreground-muted md:text-lg",children:[i," ",(0,a.jsx)("a",{href:`mailto:${s}`,className:"text-brand underline underline-offset-4 hover:opacity-80 transition-opacity font-medium",children:s})]}),(0,a.jsx)(t.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.5},className:"mt-14",children:(0,a.jsx)(er,{type:"single",collapsible:!0,className:"w-full",children:o.map((e,r)=>(0,a.jsx)(t.motion.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.35,delay:.5+.07*r,ease:"easeOut"},children:(0,a.jsxs)(ei,{value:`item-${r}`,children:[(0,a.jsx)(eo,{className:"text-left font-semibold text-base py-5",children:e.question}),(0,a.jsx)(en,{className:"text-foreground-muted leading-relaxed pb-6 text-base",children:e.answer})]})},`faq-${r}`))})})]})})}let ec=[{question:"¿Qué es Kenkomed y para quién está pensado?",answer:"Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda, 13 cuestionarios validados (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, etc) y reportes en una sola plataforma web."},{question:"¿En qué se diferencia Kenkomed de un software genérico de salud?",answer:"Kenkomed no es una agenda médica ni un ERP adaptado: es un DSS (Sistema de Soporte a la Decisión Clínica) construido desde cero para kinesiología. Incluye 13 escalas validadas integradas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDash, Barthel, GROC, EQ-5D, Oswestry, LEFS y screening de comorbilidades), admisión remota vía QR con anamnesis de 14 páginas, evolución en formato SOAP enlazada a objetivos funcionales, gráficos automáticos de resultados para demostrar la evolución al paciente y al médico derivador, y un módulo de Packs de Sesiones compatible con tarifas Fonasa y Particular. Además, cumple con la Ley 21.719 de protección de datos personales: trazabilidad de accesos, cifrado, exportación ARCO y auditoría PDF por período."},{question:"¿Kenkomed cumple con la protección de datos de pacientes?",answer:"Sí. La plataforma utiliza cifrado de datos, respaldos automáticos y control de roles (administrador vs clínico). Cada profesional accede solo a la información de sus pacientes asignados. El sistema incluye herramientas de trazabilidad pensadas para la Ley 21.719 de protección de datos personales."},{question:"¿Hay demo gratuita del software?",answer:"Sí. Puedes solicitar una demo guiada sin costo desde la web o ver la sección Demo con capturas y video del panel. Un especialista te muestra el sistema DSS, la agenda inteligente y las historias clínicas digitales antes de contratar."},{question:"¿Funciona en celular y para clínicas con varios kinesiólogos?",answer:"Kenkomed funciona en cualquier navegador web, incluyendo el de tu celular — no necesitas instalar nada. Escala desde un kinesiólogo independiente hasta redes de clínicas con múltiples sedes, con roles diferenciados y panel de monitoreo en tiempo real."},{question:"¿Qué escalas y cuestionarios clínicos incluye?",answer:"Incluye 13 escalas clínicas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDash, Barthel, GROC, EQ-5D, Oswestry, LEFS), screening de comorbilidades (fibromialgia, neuropatía, ansiedad, depresión) y generación automática de informes clínicos al completar la anamnesis, sin papel ni Excel."},{question:"¿Ya uso Excel u otra agenda, puedo migrar mis datos?",answer:"Sí. Kenkomed te permite comenzar de cero o migrar tus fichas históricas. En el plan Clínica ofrecemos asistencia personalizada para importar datos desde Excel u otro software. Contáctanos para evaluar tu caso."},{question:"¿Y si mis pacientes no usan el código QR?",answer:"El QR es opcional. Si un paciente no lo completa antes de la cita, tú puedes ingresar los datos directamente en el sistema durante la sesión. El QR simplemente ahorra tiempo cuando el paciente lo usa."},{question:"¿Dónde están mis datos y quién los ve?",answer:"Tus datos clínicos se almacenan en servidores seguros con cifrado. Solo tú y los profesionales autorizados de tu centro pueden acceder a la información de los pacientes. El sistema registra cada acceso para trazabilidad."},{question:"¿Cuánto cuesta y hay permanencia?",answer:"Los planes parten desde $15.990 CLP/mes (plan anual). No hay permanencia mínima: puedes cancelar cuando quieras. Ofrecemos facturación mensual, semestral y anual. Solicita una demo para conocer el plan que mejor se adapta a tu clínica."}];function ed(){return(0,a.jsx)(el,{data:ec,className:"bg-background"})}e.s(["FaqSection",()=>ed],1886)},85161,e=>{"use strict";var a=e.i(43476),t=e.i(71645),r=e.i(57688),i=e.i(22016),o=e.i(72520),n=e.i(21218),s=e.i(95468),l=e.i(46932),c=e.i(1859),d=e.i(30408);let m="#1E9E85",p="#B8452C",u=["S1","S2","S3","S4","S5","S6","S7","S8"],h=[42,58,70,84,96,108,116,122],f=[8,7,6,5,3,2,2,1];function x(e,a,t,r,i){return e.map((o,n)=>({x:i+n/(e.length-1)*(t-2*i),y:r-i-o/a*(r-2*i),v:o}))}function g(e){return e.map(e=>`${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(" ")}function b({animated:e}){let r,i,o,[n,s]=(0,t.useState)(null),l=x(h,135,420,200,20),c=x(f,10,420,200,20),d=g(l),b=g(c),v=(r=l.map(e=>`${e.x.toFixed(1)},${e.y.toFixed(1)}`).join(" "),i=l[l.length-1],o=l[0],`${o.x.toFixed(1)},180 ${r} ${i.x.toFixed(1)},180`);return(0,a.jsxs)("svg",{viewBox:"0 0 420 200","aria-label":"Gráfico de evolución clínica",role:"img",style:{width:"100%",height:"auto",display:"block"},children:[(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"romGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:m,stopOpacity:"0.18"}),(0,a.jsx)("stop",{offset:"100%",stopColor:m,stopOpacity:"0"})]}),(0,a.jsxs)("linearGradient",{id:"evaGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,a.jsx)("stop",{offset:"0%",stopColor:p,stopOpacity:"0.12"}),(0,a.jsx)("stop",{offset:"100%",stopColor:p,stopOpacity:"0"})]}),(0,a.jsx)("clipPath",{id:"chartClip",children:(0,a.jsx)("rect",{x:20,y:20,width:380,height:160})})]}),[.25,.5,.75].map((e,t)=>{let r=20+160*e;return(0,a.jsx)("line",{x1:20,y1:r,x2:400,y2:r,stroke:"currentColor",strokeWidth:"0.5",strokeDasharray:"3 3",style:{color:"var(--border)"},opacity:"0.5"},t)}),l.map((e,t)=>(0,a.jsx)("text",{x:e.x,y:196,textAnchor:"middle",fontSize:"9",fontFamily:"var(--font-mono)",fill:"var(--foreground-muted)",opacity:"0.7",children:u[t]},t)),(0,a.jsxs)("g",{clipPath:"url(#chartClip)",children:[(0,a.jsx)("polygon",{points:v,fill:"url(#romGrad)",style:{opacity:+!!e,transition:"opacity 0.8s ease-out 1.2s"}}),(0,a.jsx)("polyline",{points:d,fill:"none",stroke:m,strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:480,strokeDashoffset:480*!e,style:{transition:"stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.1s"}}),(0,a.jsx)("polyline",{points:b,fill:"none",stroke:p,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:430,strokeDashoffset:430*!e,style:{transition:"stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.4s"},opacity:"0.85"}),l.map((t,r)=>(0,a.jsxs)("g",{children:[(0,a.jsx)("circle",{cx:t.x,cy:t.y,r:n===r?5:3.5,fill:n===r?m:"var(--card)",stroke:m,strokeWidth:"2",style:{opacity:+!!e,transition:`opacity 0.3s ease ${.1+.12*r}s, r 0.15s ease`,cursor:"default"}}),(0,a.jsx)("circle",{cx:t.x,cy:t.y,r:"12",fill:"transparent",onMouseEnter:()=>s(r),onMouseLeave:()=>s(null)}),n===r&&(0,a.jsxs)("g",{children:[(0,a.jsx)("rect",{x:t.x-28,y:t.y-30,width:"56",height:"22",rx:"4",fill:"var(--card)",stroke:"var(--border)",strokeWidth:"1"}),(0,a.jsxs)("text",{x:t.x,y:t.y-15,textAnchor:"middle",fontSize:"10",fontWeight:"600",fontFamily:"var(--font-mono)",fill:m,children:[t.v,"° ROM"]})]})]},r)),c.map((t,r)=>r===c.length-1?(0,a.jsx)("circle",{cx:t.x,cy:t.y,r:"3.5",fill:"var(--card)",stroke:p,strokeWidth:"2",style:{opacity:+!!e,transition:"opacity 0.3s ease 1.8s"}},r):null)]}),(0,a.jsxs)("g",{transform:"translate(20, 20)",children:[(0,a.jsx)("circle",{cx:"5",cy:"5",r:"4",fill:m}),(0,a.jsx)("text",{x:"13",y:"9",fontSize:"9",fontFamily:"var(--font-sans)",fill:"var(--foreground-muted)",children:"ROM (°)"}),(0,a.jsx)("circle",{cx:"70",cy:"5",r:"4",fill:p,opacity:"0.85"}),(0,a.jsx)("text",{x:"78",y:"9",fontSize:"9",fontFamily:"var(--font-sans)",fill:"var(--foreground-muted)",children:"Dolor EVA"})]})]})}function v({animated:e}){let t=[{label:"ROM final",value:"122°",sub:"+80° vs. inicial",positive:!0,color:m},{label:"EVA",value:"1 / 10",sub:"−7 pts en 8 sesiones",positive:!0,color:p},{label:"Sesiones",value:"S8",sub:"Lista para alta",positive:!0,color:"#1B67B0"}];return(0,a.jsx)("div",{className:"hc-pills",children:t.map((t,r)=>(0,a.jsxs)("div",{className:"hc-pill",style:{opacity:+!!e,transform:e?"translateY(0)":"translateY(6px)",transition:`opacity 0.4s ease ${.6+.15*r}s, transform 0.4s ease ${.6+.15*r}s`},children:[(0,a.jsx)("div",{className:"hc-pill-dot",style:{background:t.color}}),(0,a.jsxs)("div",{className:"hc-pill-body",children:[(0,a.jsx)("span",{className:"hc-pill-label",children:t.label}),(0,a.jsx)("span",{className:"hc-pill-value",style:{color:t.color},children:t.value}),(0,a.jsxs)("span",{className:"hc-pill-sub",children:[t.positive?(0,a.jsx)(c.RiArrowUpLine,{size:10}):(0,a.jsx)(c.RiArrowDownLine,{size:10}),t.sub]})]})]},r))})}let y=[{value:13,prefix:"",suffix:"",label:"Escalas clínicas validadas (EVA, PSFS, WOMAC, etc.)"},{value:14,prefix:"",suffix:"",label:"Pasos de anamnesis inteligente vía QR"},{value:100,prefix:"",suffix:"%",label:"Especializado en kinesiología y fisioterapia"}];function j({stat:e,isVisible:t}){let r=(0,d.useCountUp)(e.value,t,1400,e.prefix,e.suffix);return(0,a.jsxs)("div",{className:"hm-proof-stat",children:[(0,a.jsx)("p",{className:"hm-proof-number","aria-label":`${r} ${e.label}`,children:r}),(0,a.jsx)("p",{className:"hm-proof-label",children:e.label})]})}function w(){let e=(0,t.useRef)(null),p=(0,t.useRef)(null),{motion:u,finePointer:h}=(0,d.usePrefersMotionFx)(),f=u&&h,x=(0,d.useMousePosition)(e,f),{ref:g,isVisible:w}=(0,d.useReveal)({threshold:.3}),{ref:k,isVisible:N}=(0,d.useReveal)({threshold:.05}),[C,S]=(0,t.useState)(!1);(0,t.useEffect)(()=>{N&&!C&&S(!0)},[N,C]),(0,t.useEffect)(()=>{let e=p.current;e&&f&&(e.style.transform=`translate3d(calc(${100*x.x}% - 50%), calc(${100*x.y}% - 50%), 0)`)},[x.x,x.y,f]);let z={hidden:{opacity:0,y:15},show:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:24}}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
        }
        .hm-hero-h1-highlight {
          color: var(--kenko-sapphire);
        }
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 50ch;
        }
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
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          box-shadow: 0 4px 16px oklch(0.48 0.18 246 / 0.25);
          transition: all 0.2s ease;
        }
        .hm-btn-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 6px 22px oklch(0.48 0.18 246 / 0.35);
        }
        .hm-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.875rem 1.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          background: var(--background);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .hm-btn-ghost:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-sapphire);
          background: oklch(0.48 0.18 246 / 0.04);
        }
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
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--foreground-muted);
        }
        .hm-hero-diptych {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
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
        .hm-ui-frame {
          position: absolute;
          width: 90%;
          top: 15%;
          right: -5%;
          background: var(--card);
          border-radius: var(--radius-lg);
          border: var(--hairline-accent);
          box-shadow: 0 20px 45px -10px oklch(0.12 0.02 246 / 0.18), 0 0 0 1px oklch(0.48 0.18 246 / 0.12);
          overflow: hidden;
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
        .hm-ui-dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; }
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
        }
        .hm-annotation-sub {
          font-size: 0.75rem;
          color: var(--foreground-muted);
        }
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
        .hm-proof-stat + .hm-proof-stat { border-left: var(--hairline); }
        .hm-proof-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2rem, 4vw + 0.5rem, 3rem);
          color: var(--color-ink);
        }
        .hm-proof-label {
          font-size: 0.8125rem;
          color: var(--color-ink-2);
        }

        /* ── Chart & Pills Styles ── */
        .hc-pills {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--border);
        }
        .hc-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.75rem;
          border-right: 1px solid var(--border);
          min-width: 0;
        }
        .hc-pill:last-child { border-right: none; }
        .hc-pill-dot { width: 6px; height: 6px; border-radius: 50%; margin-top: 0.35rem; flex-shrink: 0; }
        .hc-pill-body { display: flex; flex-direction: column; gap: 0; min-width: 0; }
        .hc-pill-label { font-size: 0.6rem; font-weight: 600; color: var(--foreground-muted); text-transform: uppercase; white-space: nowrap; }
        .hc-pill-value { font-family: var(--font-mono); font-size: 0.875rem; font-weight: 700; }
        .hc-pill-sub { display: flex; alignItems: center; gap: 0.15rem; font-size: 0.6rem; color: var(--foreground-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        @media (max-width: 960px) {
          .hm-hero-grid { grid-template-columns: 1fr; gap: var(--space-2xl); }
          .hm-photo-wrapper { width: 100%; transform: none; }
          .hm-ui-frame { position: static; width: 100%; margin-top: var(--space-md); transform: none; }
          .hm-annotation-card { display: none; }
        }
        @media (max-width: 640px) {
          .hm-proof-strip { flex-direction: column; }
          .hm-proof-stat + .hm-proof-stat { border-left: none; border-top: var(--hairline); }
          .hm-hero-actions { flex-direction: column; align-items: stretch; }
          .hc-pills { grid-template-columns: 1fr 1fr; }
          .hc-pill:nth-child(2) { border-right: none; }
          .hc-pill:nth-child(3) { border-right: none; border-top: 1px solid var(--border); grid-column: span 2; }
        }
      `}),(0,a.jsxs)("section",{ref:e,className:"hm-hero-section overflow-hidden","aria-label":"Sección principal",children:[(0,a.jsx)("div",{className:"absolute inset-0 pointer-events-none opacity-[0.03]","aria-hidden":"true",style:{backgroundImage:"linear-gradient(var(--kenko-sapphire) 1px, transparent 1px), linear-gradient(90deg, var(--kenko-sapphire) 1px, transparent 1px)",backgroundSize:"48px 48px"}}),(0,a.jsxs)("div",{className:"absolute inset-0 pointer-events-none","aria-hidden":"true",children:[(0,a.jsx)("div",{className:"absolute -top-40 right-0 w-[550px] h-[550px] rounded-full",style:{background:"radial-gradient(circle, oklch(0.48 0.18 246 / 0.10) 0%, transparent 65%)",filter:u?"blur(60px)":"none"}}),(0,a.jsx)("div",{className:"absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full",style:{background:"radial-gradient(circle, oklch(0.66 0.19 163 / 0.08) 0%, transparent 65%)",filter:u?"blur(70px)":"none"}})]}),f&&(0,a.jsx)("div",{ref:p,className:"absolute pointer-events-none z-[1] top-0 left-0","aria-hidden":"true",style:{width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, oklch(0.48 0.18 246 / 0.06) 0%, transparent 70%)",filter:"blur(60px)",transform:"translate3d(-50%, -50%, 0)"}}),(0,a.jsxs)("div",{className:"hm-hero-grid relative z-10",children:[(0,a.jsxs)(l.motion.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.15,delayChildren:.1}}},initial:"hidden",animate:"show",children:[(0,a.jsxs)(l.motion.div,{variants:z,className:"hm-hero-outlier",children:[(0,a.jsx)("span",{className:"hm-outlier-dot","aria-hidden":"true"}),"01 · PLATAFORMA CLÍNICA DE KINESIOLOGÍA"]}),(0,a.jsxs)(l.motion.h1,{variants:z,className:"hm-hero-h1",children:["El sistema clínico del kinesiólogo:"," ",(0,a.jsx)("span",{className:"hm-hero-h1-highlight",children:"de la admisión al alta."})]}),(0,a.jsxs)(l.motion.p,{variants:z,className:"hm-hero-lede",children:["Del QR de admisión al informe de alta. Kenkomed acompaña cada etapa clínica de tu paciente: ",(0,a.jsx)("strong",{className:"text-foreground font-semibold",children:"evaluación, seguimiento y resultados"}),", sin papel."]}),(0,a.jsxs)(l.motion.div,{variants:z,className:"hm-hero-actions",children:[(0,a.jsxs)(i.default,{href:"/#contact",className:"hm-btn-primary",children:["Solicitar software",(0,a.jsx)(o.ArrowRight,{size:15,"aria-hidden":"true"})]}),(0,a.jsxs)(i.default,{href:"/#pricing",className:"hm-btn-ghost",children:["Ver precios",(0,a.jsx)(o.ArrowRight,{size:14,"aria-hidden":"true"})]})]}),(0,a.jsxs)(l.motion.div,{variants:z,className:"hm-trust-pills",role:"list",children:[(0,a.jsxs)("span",{className:"hm-trust-item",role:"listitem",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald"}),"Demuestra la evolución de tu paciente"]}),(0,a.jsxs)("span",{className:"hm-trust-item",role:"listitem",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald"}),"1ª sesión lista antes que llegue el paciente"]}),(0,a.jsxs)("span",{className:"hm-trust-item",role:"listitem",children:[(0,a.jsx)(s.CheckCircle2,{size:15,className:"text-emerald"}),"Hecho por kinesiólogos, precio transparente"]})]})]}),(0,a.jsxs)("div",{className:"hm-hero-diptych",children:[(0,a.jsx)(l.motion.div,{className:"hm-photo-wrapper",initial:{opacity:0,scale:.95,rotate:-3},animate:{opacity:1,scale:1,rotate:-1.5},transition:{duration:.8,ease:"easeOut"},children:(0,a.jsx)(r.default,{src:"/software/ficha_clinica.png",alt:"Ficha clínica digital de Kenkomed",fill:!0,priority:!0,className:"hm-photo-img",sizes:"(max-width: 960px) 100vw, 42vw"})}),(0,a.jsxs)(l.motion.div,{className:"hm-ui-frame",ref:k,initial:{opacity:0,x:20,rotate:0},animate:{opacity:1,x:0,rotate:1},transition:{duration:.8,delay:.3,ease:"easeOut"},children:[(0,a.jsxs)("div",{className:"hm-ui-bar",children:[(0,a.jsx)("span",{className:"hm-ui-dot bg-rose-400"}),(0,a.jsx)("span",{className:"hm-ui-dot bg-amber-400"}),(0,a.jsx)("span",{className:"hm-ui-dot bg-emerald-400"}),(0,a.jsx)("span",{className:"hm-ui-path",children:"kenkomed.cl/panel-clinico"})]}),(0,a.jsxs)("div",{style:{padding:"0.875rem 1rem 0.25rem",borderBottom:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{style:{fontSize:"0.8125rem",fontWeight:600,color:"var(--foreground)"},children:"Evolución Clínica"}),(0,a.jsx)("p",{style:{fontSize:"0.6875rem",color:"var(--foreground-muted)",marginTop:"0.125rem"},children:"Flexión de rodilla · 8 sesiones"})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem",padding:"0.25rem 0.625rem",borderRadius:"999px",fontSize:"0.625rem",fontWeight:600,background:"oklch(0.94 0.06 163 / 1)",color:m},children:[(0,a.jsx)(c.RiPulseLine,{size:10})," Alta médica"]})]}),(0,a.jsx)("div",{style:{padding:"0.75rem 0.5rem 0"},children:(0,a.jsx)(b,{animated:C})}),(0,a.jsx)(v,{animated:C})]}),(0,a.jsxs)(l.motion.div,{className:"hm-annotation-card",initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.6,delay:.7},children:[(0,a.jsx)(n.Activity,{size:18,className:"text-emerald"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"hm-annotation-tag",children:"[SOPORTE A LA DECISIÓN CLÍNICA]"}),(0,a.jsx)("p",{className:"hm-annotation-sub",children:"Banderas rojas & EVA/Barthel en tiempo real"})]})]})]})]})]}),(0,a.jsx)("div",{className:"relative bg-background",ref:g,children:(0,a.jsx)("div",{className:"hm-proof-strip max-w-none",children:y.map(e=>(0,a.jsx)(j,{stat:e,isVisible:w},e.label))})})]})}e.s(["Hero",()=>w])}]);