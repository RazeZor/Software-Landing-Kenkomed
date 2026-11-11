(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,67585,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let s=e.r(32061);function i({reason:e,children:a}){if("u"<typeof window)throw Object.defineProperty(new s.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}},9885,(e,a,t)=>{"use strict";function s(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return s}})},52157,(e,a,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return o}});let s=e.r(43476),i=e.r(74080),r=e.r(63599),n=e.r(9885),l=e.r(43369);function o({moduleIds:e}){if("u">typeof window)return null;let a=r.workAsyncStorage.getStore();if(void 0===a)return null;let t=[];if(a.reactLoadableManifest&&e){let s=a.reactLoadableManifest;for(let a of e){if(!s[a])continue;let e=s[a].files;t.push(...e)}}if(0===t.length)return null;let o=(0,l.getDeploymentIdQueryOrEmptyString)();return(0,s.jsx)(s.Fragment,{children:t.map(e=>{let t=`${a.assetPrefix}/_next/${(0,n.encodeURIPath)(e)}${o}`;return e.endsWith(".css")?(0,s.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style",nonce:a.nonce},e):((0,i.preload)(t,{as:"script",fetchPriority:"low",nonce:a.nonce}),null)})})}},85161,e=>{"use strict";var a=e.i(43476),t=e.i(22016),s=e.i(72520),i=e.i(95468),r=e.i(46932),n=e.i(30408),l=e.i(71645),o=e.i(88653);e.i(47167);var d=e.i(71164),c=e.i(38544),m=e.i(75254);let x=(0,m.default)("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]);var p=e.i(31343);let h=(0,m.default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);var u=e.i(43531),f=e.i(94771),b=e.i(51804),g=e.i(23962),j=e.i(78583),v=e.i(12475),y=e.i(81418),N=e.i(21218);let w=(0,m.default)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var k=e.i(47163);let C=[{id:"agenda",tab:"Agenda",caption:"Tus pacientes reservan online y la agenda se actualiza sola, sin cruces de box."},{id:"admision",tab:"Admisión",caption:"El paciente completa su anamnesis de 14 páginas desde el celular, antes de llegar."},{id:"escalas",tab:"Escalas",caption:"Las 13 escalas validadas se calculan automáticamente al completar la evaluación."},{id:"dss",tab:"DSS",caption:"El motor DSS cruza anamnesis y escalas para destacar alertas clínicas."},{id:"pauta",tab:"Pauta",caption:"Armas la pauta de ejercicios y llega en PDF al WhatsApp del paciente en 1 clic."},{id:"cobros",tab:"Cobros",caption:"Pagos, packs e informe de alta con códigos FONASA, listos para Isapre y médicos."}],z=e=>({initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:e,duration:.4,ease:"easeOut"}});function A({x:e,y:t,delay:s,duration:i=1.1}){return(0,a.jsxs)(r.motion.div,{"aria-hidden":"true",className:"pointer-events-none absolute left-0 top-0 z-30",initial:{opacity:0,x:e[0],y:t[0]},animate:{opacity:[0,1,1,1],x:e,y:t},transition:{delay:s,duration:i,ease:"easeInOut"},children:[(0,a.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",className:"drop-shadow-md",children:(0,a.jsx)("path",{d:"M4 2l16 9-7 2-3 7L4 2z",fill:"#062b47",stroke:"#fff",strokeWidth:"1.6",strokeLinejoin:"round"})}),(0,a.jsx)(r.motion.span,{className:"absolute -left-2 -top-2 h-5 w-5 rounded-full border-2 border-[#0071c1]",initial:{scale:0,opacity:0},animate:{scale:[0,1.5],opacity:[.7,0]},transition:{delay:s+i,duration:.5}})]})}function P({children:e}){return(0,a.jsx)("div",{className:"relative h-full w-full overflow-hidden px-3.5 pb-24 pt-3",children:e})}function E({icon:e,children:t}){return(0,a.jsxs)("div",{className:"mb-2.5 flex items-center gap-2",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 items-center justify-center rounded-lg bg-[#0071c1]/10 text-[#0071c1]",children:(0,a.jsx)(e,{size:13,"aria-hidden":"true"})}),(0,a.jsx)("p",{className:"font-display text-[13px] font-extrabold tracking-tight text-slate-900",children:t})]})}function S({label:e,value:t,pct:s,delay:i,color:n}){return(0,a.jsxs)(r.motion.div,{...z(i),className:"rounded-xl border border-slate-200 bg-white p-3 shadow-xs",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between text-[10px]",children:[(0,a.jsx)("span",{className:"font-bold text-slate-700",children:e}),(0,a.jsx)(r.motion.span,{className:"font-extrabold text-slate-900",initial:{opacity:0},animate:{opacity:1},transition:{delay:i+1.1},children:t})]}),(0,a.jsx)("div",{className:"mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100",children:(0,a.jsx)(r.motion.div,{className:"h-full rounded-full",style:{background:n},initial:{width:"0%"},animate:{width:`${s}%`},transition:{delay:i+.2,duration:1.2,ease:"easeOut"}})})]})}let L={agenda:function(){let e=[{h:"09:00",name:"Esguince tobillo",who:"Andrés M. · Box 2",tone:"emerald"},{h:"11:00",name:"Lumbalgia aguda",who:"Sofía V. · Ses. 3/10",tone:"emerald"},{h:"12:00",name:"Post-op hombro",who:"Matías P. · Box 2",tone:"brand"}],t={emerald:"border-[#16a996] bg-[#16a996]/10 text-[#063a34]",brand:"border-[#0071c1] bg-[#0071c1]/10 text-[#062b47]"};return(0,a.jsxs)(P,{children:[(0,a.jsx)(E,{icon:b.CalendarCheck,children:"Agenda · Lun 12"}),(0,a.jsxs)(r.motion.div,{initial:{opacity:0,y:-14},animate:{opacity:[0,1,1,0],y:[-14,0,0,-8]},transition:{delay:1.2,duration:2.6,times:[0,.12,.8,1]},className:"absolute inset-x-3.5 top-9 z-20 flex items-center gap-2 rounded-xl border border-[#16a996]/30 bg-white px-3 py-2 shadow-lg",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-[#16a996] text-white",children:(0,a.jsx)(b.CalendarCheck,{size:12,"aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"leading-tight",children:[(0,a.jsx)("p",{className:"text-[11px] font-extrabold text-slate-900",children:"Nueva reserva online"}),(0,a.jsx)("p",{className:"text-[10px] text-slate-500",children:"Camila R. · portal público"})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[e.slice(0,1).map((e,s)=>(0,a.jsxs)(r.motion.div,{...z(.15+.1*s),className:"grid grid-cols-[2.4rem_1fr] items-center gap-2",children:[(0,a.jsx)("span",{className:"font-mono text-[10px] text-slate-400",children:e.h}),(0,a.jsxs)("div",{className:(0,k.cn)("rounded-lg border-l-[3px] px-2.5 py-1.5",t[e.tone]),children:[(0,a.jsx)("p",{className:"text-[11px] font-bold leading-tight",children:e.name}),(0,a.jsx)("p",{className:"text-[10px] opacity-75",children:e.who})]})]},e.h)),(0,a.jsxs)(r.motion.div,{...z(.25),className:"grid grid-cols-[2.4rem_1fr] items-center gap-2",children:[(0,a.jsx)("span",{className:"font-mono text-[10px] text-slate-400",children:"10:00"}),(0,a.jsxs)("div",{className:"relative h-[46px]",children:[(0,a.jsx)(r.motion.div,{className:"absolute inset-0 flex items-center rounded-lg border border-dashed border-slate-300 px-2.5 text-[10px] font-medium text-slate-400",initial:{opacity:1},animate:{opacity:0},transition:{delay:1.7,duration:.3},children:"Hora disponible · Box 1"}),(0,a.jsxs)(r.motion.div,{className:"absolute inset-0 rounded-lg border-l-[3px] border-[#0071c1] bg-[#0071c1]/10 px-2.5 py-1.5 text-[#062b47]",initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{delay:1.7,duration:.4},children:[(0,a.jsx)("p",{className:"text-[11px] font-bold leading-tight",children:"Evaluación kinésica inicial"}),(0,a.jsx)("p",{className:"text-[10px] text-[#0071c1]",children:"Camila R. · Box 1 · Confirmada"})]})]})]}),e.slice(1).map((e,s)=>(0,a.jsxs)(r.motion.div,{...z(.35+.1*s),className:"grid grid-cols-[2.4rem_1fr] items-center gap-2",children:[(0,a.jsx)("span",{className:"font-mono text-[10px] text-slate-400",children:e.h}),(0,a.jsxs)("div",{className:(0,k.cn)("rounded-lg border-l-[3px] px-2.5 py-1.5",t[e.tone]),children:[(0,a.jsx)("p",{className:"text-[11px] font-bold leading-tight",children:e.name}),(0,a.jsx)("p",{className:"text-[10px] opacity-75",children:e.who})]})]},e.h))]}),(0,a.jsxs)(r.motion.div,{...z(3.2),className:"mt-3 flex items-center gap-2 rounded-xl border border-[#16a996]/25 bg-[#16a996]/[0.08] px-3 py-2",children:[(0,a.jsx)(f.CheckCheck,{size:14,className:"text-[#0e7b6d]","aria-hidden":"true"}),(0,a.jsx)("p",{className:"text-[10px] font-semibold text-slate-700",children:"Confirmación enviada por WhatsApp · sin cruces de box"})]})]})},admision:function(){let e=Array.from({length:81},(e,a)=>{let t=Math.floor(a/9),s=a%9;return t<3&&s<3||t<3&&s>=6||t>=6&&s<3||(7*t+13*s+t*s)%3!=0});return(0,a.jsxs)(P,{children:[(0,a.jsx)(E,{icon:g.QrCode,children:"Admisión remota por QR"}),(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsxs)(r.motion.div,{...z(.1),className:"relative shrink-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm",children:[(0,a.jsx)("div",{className:"grid grid-cols-9 gap-[2px]",children:e.map((e,t)=>(0,a.jsx)("span",{className:(0,k.cn)("h-[9px] w-[9px] rounded-[1.5px]",e?"bg-[#062b47]":"bg-transparent")},t))}),(0,a.jsx)(r.motion.span,{"aria-hidden":"true",className:"absolute inset-x-1.5 top-2 h-[2px] rounded-full bg-[#16a996] shadow-[0_0_8px_#16a996]",animate:{y:[0,92,0]},transition:{delay:.6,duration:2.2,ease:"easeInOut"}})]}),(0,a.jsxs)(r.motion.div,{...z(.3),className:"leading-tight",children:[(0,a.jsx)("p",{className:"text-[11px] font-extrabold text-slate-900",children:"Enlace de un solo uso"}),(0,a.jsx)("p",{className:"mt-0.5 text-[10px] text-slate-500",children:"Enviado por WhatsApp a Camila R."}),(0,a.jsxs)("p",{className:"mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#0071c1]/10 px-2 py-0.5 text-[9px] font-bold text-[#0071c1]",children:[(0,a.jsx)(g.QrCode,{size:9,"aria-hidden":"true"})," Anamnesis · 14 páginas"]})]})]}),(0,a.jsxs)(r.motion.div,{...z(1.4),className:"mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-xs",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between text-[10px]",children:[(0,a.jsx)("span",{className:"font-bold text-slate-700",children:"Completando en su celular…"}),(0,a.jsx)("span",{className:"font-extrabold text-[#0071c1]",children:"14 / 14"})]}),(0,a.jsx)("div",{className:"mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100",children:(0,a.jsx)(r.motion.div,{className:"h-full rounded-full bg-gradient-to-r from-[#0071c1] to-[#16a996]",initial:{width:"0%"},animate:{width:"100%"},transition:{delay:1.6,duration:2.6,ease:"easeInOut"}})}),(0,a.jsx)("ul",{className:"mt-2.5 space-y-1.5",children:["Antecedentes y comorbilidades","Mapa corporal del dolor","Banderas rojas y objetivos"].map((e,t)=>(0,a.jsxs)(r.motion.li,{...z(2.2+.7*t),className:"flex items-center gap-2 text-[10px] font-medium text-slate-700",children:[(0,a.jsx)("span",{className:"flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#16a996] text-white",children:(0,a.jsx)(u.Check,{size:9,strokeWidth:3,"aria-hidden":"true"})}),e]},e))})]}),(0,a.jsxs)(r.motion.div,{...z(4.6),className:"mt-3 flex items-center justify-between rounded-xl bg-[#062b47] px-3 py-2 text-white",children:[(0,a.jsx)("span",{className:"text-[10px] font-bold",children:"Recibido en la ficha clínica"}),(0,a.jsx)("span",{className:"rounded-full bg-[#16a996] px-2 py-0.5 text-[9px] font-extrabold",children:"Listo"})]})]})},escalas:function(){return(0,a.jsxs)(P,{children:[(0,a.jsx)(E,{icon:N.Activity,children:"Escalas validadas"}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(S,{label:"EVA · dolor actual",value:"6 / 10",pct:60,delay:.2,color:"#0071c1"}),(0,a.jsx)(S,{label:"Oswestry · discapacidad lumbar",value:"28% · moderada",pct:28,delay:1.1,color:"#16a996"}),(0,a.jsx)(S,{label:"LEFS · función extremidad inferior",value:"64 / 80",pct:80,delay:2,color:"#0071c1"})]}),(0,a.jsx)(r.motion.p,{...z(3.4),className:"mt-3 text-center text-[10px] font-semibold text-slate-500",children:"13 escalas con puntaje e interpretación automática"})]})},dss:function(){return(0,a.jsxs)(P,{children:[(0,a.jsx)(E,{icon:y.ShieldCheck,children:"Motor de soporte a la decisión"}),(0,a.jsxs)(r.motion.div,{className:"absolute inset-x-3.5 top-14 z-10 flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white py-5 shadow-sm",initial:{opacity:1},animate:{opacity:[1,1,0],pointerEvents:["auto","auto","none"]},transition:{duration:1.8,times:[0,.75,1]},children:[(0,a.jsx)("div",{className:"flex items-center gap-1.5",children:[0,1,2].map(e=>(0,a.jsx)(r.motion.span,{className:"h-2 w-2 rounded-full bg-[#0071c1]",animate:{opacity:[.25,1,.25],y:[0,-3,0]},transition:{duration:.7,repeat:2,delay:.12*e}},e))}),(0,a.jsx)("p",{className:"text-[10px] font-bold text-slate-600",children:"Cruzando anamnesis + escalas…"})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)(r.motion.div,{...z(1.9),className:"flex items-center gap-2.5 rounded-xl border border-[#16a996]/30 bg-[#16a996]/[0.08] p-3",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a996] text-white",children:(0,a.jsx)(u.Check,{size:13,strokeWidth:3,"aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"leading-tight",children:[(0,a.jsx)("p",{className:"text-[11px] font-extrabold text-slate-900",children:"Sin banderas rojas"}),(0,a.jsx)("p",{className:"text-[10px] text-slate-600",children:"Apto para carga progresiva"})]})]}),(0,a.jsxs)(r.motion.div,{...z(2.7),className:"rounded-xl border border-[#0071c1]/30 bg-white p-3 shadow-sm",children:[(0,a.jsx)("p",{className:"text-[9px] font-bold uppercase tracking-wider text-[#0071c1]",children:"● Alerta clínica"}),(0,a.jsx)("p",{className:"mt-0.5 text-[11px] font-extrabold text-slate-900",children:"Bandera amarilla: kinesiofobia alta"}),(0,a.jsx)("span",{className:"mt-1.5 inline-block rounded-md bg-[#0071c1]/10 px-2 py-0.5 text-[9px] font-bold text-[#0071c1]",children:"Sugerencia: educación en dolor"})]}),(0,a.jsxs)(r.motion.div,{...z(3.5),className:"rounded-xl border border-slate-200 bg-white p-3 text-[10px] text-slate-600",children:[(0,a.jsx)("span",{className:"font-bold text-slate-800",children:"Patrón conductual: "}),"evitativo · el algoritmo basado en reglas apoya tu juicio clínico, no lo reemplaza."]})]})]})},pauta:function(){return(0,a.jsxs)(P,{children:[(0,a.jsx)(E,{icon:v.Dumbbell,children:"Pauta de ejercicios"}),(0,a.jsx)("ul",{className:"space-y-1.5",children:[{n:"Puente de glúteo",d:"3 × 12 · carga corporal"},{n:"Rotación de tronco",d:"3 × 10 por lado"},{n:"Estiramiento de isquiosurales",d:"3 × 30 s"}].map((e,t)=>(0,a.jsxs)(r.motion.li,{...z(.15+.25*t),className:"flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-xs",children:[(0,a.jsx)("span",{className:"flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0071c1]/10 text-[10px] font-extrabold text-[#0071c1]",children:t+1}),(0,a.jsxs)("div",{className:"leading-tight",children:[(0,a.jsx)("p",{className:"text-[11px] font-bold text-slate-900",children:e.n}),(0,a.jsx)("p",{className:"text-[10px] text-slate-500",children:e.d})]})]},e.n))}),(0,a.jsxs)(r.motion.div,{...z(1.1),className:"relative mt-3 h-9",children:[(0,a.jsxs)(r.motion.div,{className:"absolute inset-0 flex items-center justify-center gap-1.5 rounded-full bg-[#062b47] text-[11px] font-bold text-white",initial:{opacity:1},animate:{opacity:0},transition:{delay:3.1,duration:.2},children:[(0,a.jsx)(w,{size:12,"aria-hidden":"true"})," Enviar por WhatsApp"]}),(0,a.jsxs)(r.motion.div,{className:"absolute inset-0 flex items-center justify-center gap-1.5 rounded-full bg-[#16a996] text-[11px] font-bold text-white",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.2,duration:.2},children:[(0,a.jsx)(u.Check,{size:12,strokeWidth:3,"aria-hidden":"true"})," Enviado"]})]}),(0,a.jsxs)(r.motion.div,{...z(3.7),className:"ml-auto mt-3 w-[78%] rounded-xl rounded-tr-sm border border-[#16a996]/25 bg-[#16a996]/[0.12] p-2.5",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#0071c1] shadow-xs",children:(0,a.jsx)(j.FileText,{size:13,"aria-hidden":"true"})}),(0,a.jsxs)("div",{className:"leading-tight",children:[(0,a.jsx)("p",{className:"text-[10px] font-bold text-slate-900",children:"Pauta_Camila_R.pdf"}),(0,a.jsx)("p",{className:"text-[9px] text-slate-500",children:"PDF membretado · 3 ejercicios"})]})]}),(0,a.jsxs)("p",{className:"mt-1 flex items-center justify-end gap-1 text-[9px] font-semibold text-[#0e7b6d]",children:["Entregado ",(0,a.jsx)(f.CheckCheck,{size:11,"aria-hidden":"true"})]})]}),(0,a.jsx)(A,{x:[250,190,150],y:[220,130,118],delay:1.9,duration:1.1})]})},cobros:function(){return(0,a.jsxs)(P,{children:[(0,a.jsx)(E,{icon:j.FileText,children:"Cobros e informe de alta"}),(0,a.jsxs)(r.motion.div,{...z(.15),className:"rounded-xl border border-slate-200 bg-white p-3 shadow-xs",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between border-b border-slate-100 pb-1.5 text-[10px]",children:[(0,a.jsx)("span",{className:"font-extrabold text-slate-800",children:"Pack 10 sesiones · Camila R."}),(0,a.jsx)(r.motion.span,{className:"rounded-md bg-[#16a996]/15 px-2 py-0.5 font-bold text-[#0e7b6d]",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:1.2,duration:.3},children:"Pagado"})]}),(0,a.jsxs)("div",{className:"mt-1.5 flex items-center justify-between text-[11px]",children:[(0,a.jsx)("span",{className:"text-slate-600",children:"Sesiones usadas"}),(0,a.jsx)("span",{className:"font-extrabold text-slate-900",children:"10 / 10"})]}),(0,a.jsx)("div",{className:"mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100",children:(0,a.jsx)(r.motion.div,{className:"h-full rounded-full bg-[#0071c1]",initial:{width:"0%"},animate:{width:"100%"},transition:{delay:.5,duration:1.4,ease:"easeOut"}})})]}),(0,a.jsxs)(r.motion.div,{...z(1.8),className:"mt-2 rounded-xl border border-slate-200 bg-white p-3 shadow-xs",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between text-[10px]",children:[(0,a.jsx)("span",{className:"font-bold text-slate-700",children:"Evolución del dolor (EVA)"}),(0,a.jsx)("span",{className:"font-extrabold text-[#0e7b6d]",children:"6 → 2"})]}),(0,a.jsxs)("svg",{viewBox:"0 0 200 56",className:"mt-1.5 h-14 w-full","aria-hidden":"true",children:[(0,a.jsx)("line",{x1:"0",y1:"52",x2:"200",y2:"52",stroke:"#e2e8f0",strokeWidth:"1"}),(0,a.jsx)(r.motion.path,{d:"M6 8 L46 16 L86 26 L126 34 L166 42 L194 46",fill:"none",stroke:"#0071c1",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",initial:{pathLength:0},animate:{pathLength:1},transition:{delay:2.1,duration:1.6,ease:"easeInOut"}}),(0,a.jsx)(r.motion.circle,{cx:"194",cy:"46",r:"3.5",fill:"#16a996",initial:{opacity:0},animate:{opacity:1},transition:{delay:3.6}})]})]}),(0,a.jsxs)(r.motion.div,{...z(4),className:"mt-2 flex items-center justify-between rounded-xl bg-[#062b47] px-3 py-2 text-white",children:[(0,a.jsxs)("div",{className:"leading-tight",children:[(0,a.jsx)("p",{className:"text-[10px] font-bold",children:"Informe de alta en PDF"}),(0,a.jsx)("p",{className:"text-[9px] text-white/70",children:"Códigos FONASA para Isapre"})]}),(0,a.jsx)("span",{className:"rounded-full bg-[#16a996] px-2 py-0.5 text-[9px] font-extrabold",children:"Listo"})]})]})}};function R({className:e}){let t=function(){d.hasReducedMotionListener.current||(0,c.initPrefersReducedMotion)();let[e]=(0,l.useState)(d.prefersReducedMotion.current);return e}(),[s,i]=(0,l.useState)(0),[n,m]=(0,l.useState)(0),[u,f]=(0,l.useState)(!1),[b,g]=(0,l.useState)(!1),j=u||b||!!t,v=C[s],y=L[v.id],N=e=>{i(e),m(e=>e+1)},w=()=>N((s+1)%C.length);return(0,a.jsxs)("div",{className:(0,k.cn)("relative flex select-none flex-col items-center justify-center py-2",e),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),children:[(0,a.jsx)("style",{children:`
        @keyframes k-tour-float {
          0%, 100% { transform: perspective(1200px) translateY(4px) rotateY(-5deg) rotateX(2deg); }
          50% { transform: perspective(1200px) translateY(-6px) rotateY(-2deg) rotateX(1deg); }
        }
        @keyframes k-tour-bar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .k-tour-device {
          animation: k-tour-float 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          @media (prefers-reduced-motion: reduce) { animation: none; transform: none; }
        }
        .k-tour-bar {
          transform-origin: left center;
          animation: k-tour-bar 7s linear forwards;
        }
        .k-tour-noscroll::-webkit-scrollbar { display: none; }
        .k-tour-noscroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}),(0,a.jsxs)("div",{className:"k-tour-device relative h-[580px] w-[290px] xs:h-[620px] xs:w-[310px] sm:h-[650px] sm:w-[340px]",children:[(0,a.jsx)("div",{className:"absolute inset-0 rounded-[52px] shadow-[0_24px_50px_-15px_rgba(15,23,42,0.22)]",style:{background:"linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 22%, #e2e8f0 45%, #94a3b8 75%, #cbd5e1 100%)"}}),(0,a.jsx)("div",{className:"absolute -left-[3px] top-28 h-12 w-[4px] rounded-l-md bg-slate-300"}),(0,a.jsx)("div",{className:"absolute -left-[3px] top-44 h-12 w-[4px] rounded-l-md bg-slate-300"}),(0,a.jsx)("div",{className:"absolute -right-[3px] top-36 h-16 w-[4px] rounded-r-md bg-slate-300"}),(0,a.jsx)("div",{className:"absolute inset-[4px] rounded-[48px] bg-[#090d16]"}),(0,a.jsxs)("div",{className:"absolute inset-[10px] flex flex-col overflow-hidden rounded-[42px] border border-slate-200/80 bg-[#f8fafc]",children:[(0,a.jsxs)("div",{className:"absolute left-1/2 top-3 z-40 flex h-[28px] w-[100px] -translate-x-1/2 items-center justify-between rounded-full bg-black px-3 shadow-sm",children:[(0,a.jsx)("div",{className:"flex h-3 w-3 items-center justify-center rounded-full border border-slate-800 bg-[#111927]",children:(0,a.jsx)("div",{className:"h-1.5 w-1.5 rounded-full bg-sky-950/80"})}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"h-2 w-2 rounded-full bg-[#16a996]"}),(0,a.jsx)("span",{className:"text-[9px] font-bold text-[#24c9b3]",children:"DSS"})]})]}),(0,a.jsxs)("div",{className:"relative z-30 flex h-11 items-center justify-between px-7 pt-1 text-xs font-semibold text-slate-700",children:[(0,a.jsx)("span",{children:"09:41"}),(0,a.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"text-[10px] font-bold text-brand",children:"5G"}),(0,a.jsx)("div",{className:"flex h-2.5 w-5 items-center rounded-[3px] border border-slate-500 p-[1px]",children:(0,a.jsx)("div",{className:"h-full w-full rounded-[1.5px] bg-[#16a996]"})})]})]}),(0,a.jsxs)("div",{className:"relative z-20 border-b border-slate-200/80 bg-white px-3.5 pb-2.5 pt-1",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("img",{src:"/images/LogoKenko.png",alt:"",width:20,height:20,className:"h-5 w-5 object-contain"}),(0,a.jsxs)("span",{className:"font-display text-sm font-extrabold tracking-tight text-slate-900",children:["Kenko",(0,a.jsx)("span",{className:"text-emerald",children:"med"})]})]}),(0,a.jsx)("span",{className:"rounded-full border border-[#0071c1]/20 bg-[#0071c1]/[0.07] px-2 py-0.5 text-[9px] font-bold text-brand",children:"Recorrido · datos de ejemplo"})]}),(0,a.jsx)("div",{className:"k-tour-noscroll mt-2 flex gap-1 overflow-x-auto py-0.5",role:"tablist","aria-label":"Escenas del recorrido del sistema",children:C.map((e,t)=>{let i=t===s;return(0,a.jsxs)("button",{type:"button",role:"tab","aria-selected":i,onClick:()=>N(t),className:(0,k.cn)("relative shrink-0 cursor-pointer overflow-hidden rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors",i?"bg-[#0071c1]/12 text-brand":t<s?"bg-slate-100 text-slate-700":"border border-slate-200 bg-white text-slate-500 hover:bg-slate-100"),children:[(0,a.jsx)("span",{className:"relative z-10",children:e.tab}),i&&(0,a.jsx)("span",{"aria-hidden":"true",onAnimationEnd:w,className:"k-tour-bar absolute inset-y-0 left-0 w-full bg-[#0071c1]/25",style:{animationPlayState:j?"paused":"running"}},n)]},e.id)})})]}),(0,a.jsxs)("div",{className:"relative flex-1 overflow-hidden bg-slate-50",children:[(0,a.jsx)(o.AnimatePresence,{mode:"wait",children:(0,a.jsx)(r.motion.div,{className:"absolute inset-0",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:(0,a.jsx)(y,{})},`${v.id}-${n}`)}),(0,a.jsx)("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-[#041a2e] via-[#041a2e]/95 to-transparent px-4 pb-3 pt-8",children:(0,a.jsx)(o.AnimatePresence,{mode:"wait",children:(0,a.jsxs)(r.motion.p,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:.25},className:"text-center text-[11px] font-semibold leading-snug text-white","aria-live":"polite",children:[(0,a.jsxs)("span",{className:"mr-1 text-[#24c9b3]",children:[s+1,"/",C.length]}),v.caption]},v.id)})})]}),(0,a.jsx)("div",{className:"z-30 flex h-6 w-full shrink-0 items-center justify-center border-t border-slate-200/60 bg-white",children:(0,a.jsx)("div",{className:"h-1 w-28 rounded-full bg-slate-300"})})]})]}),(0,a.jsxs)("div",{className:"z-20 mt-4 flex items-center gap-2",children:[(0,a.jsx)("button",{type:"button",onClick:()=>f(e=>!e),"aria-label":u?"Reproducir recorrido":"Pausar recorrido","aria-pressed":u,className:"inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground-muted transition-colors hover:text-foreground",children:u||t?(0,a.jsx)(p.Play,{size:12,"aria-hidden":"true"}):(0,a.jsx)(x,{size:12,"aria-hidden":"true"})}),(0,a.jsx)("button",{type:"button",onClick:()=>N(s),"aria-label":"Repetir escena",className:"inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground-muted transition-colors hover:text-foreground",children:(0,a.jsx)(h,{size:12,"aria-hidden":"true"})}),(0,a.jsx)("span",{className:"text-[11px] font-semibold text-foreground-muted",children:t?"Toca una pestaña para ver cada paso":"Pasa el mouse para pausar"})]})]})}let O=[{value:13,suffix:"",label:"Escalas clínicas validadas (Oswestry, LEFS, WOMAC, EVA y más)"},{value:14,suffix:" págs.",label:"Anamnesis remota vía QR que el paciente completa antes de su cita"},{value:1,suffix:" clic",label:"Envío de pautas por WhatsApp e informes PDF para médicos e Isapres"}];function M({stat:e,isVisible:t}){let s=(0,n.useCountUp)(e.value,t,1200,"",e.suffix);return(0,a.jsxs)("div",{className:"hm-proof-stat",children:[(0,a.jsx)("p",{className:"hm-proof-number",children:s}),(0,a.jsx)("p",{className:"hm-proof-label",children:e.label})]})}function _(){let{ref:e,isVisible:l}=(0,n.useReveal)({threshold:.3}),o={hidden:{opacity:0,y:12},show:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:28}}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
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
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.25rem, 3.6vw + 0.85rem, 3.65rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.028em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
          text-wrap: balance;
          overflow-wrap: break-word;
        }
        .hm-hero-h1-highlight { color: var(--kenko-sapphire); }
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.62;
          margin-bottom: var(--space-xl);
          max-width: 52ch;
          text-wrap: pretty;
          overflow-wrap: break-word;
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
          .hm-hero-col {
            text-align: center;
          }
          .hm-hero-h1 {
            font-size: clamp(1.875rem, 7vw, 2.35rem);
            line-height: 1.1;
            letter-spacing: -0.024em;
            margin-bottom: 0.75rem;
            text-align: center;
          }
          .hm-hero-lede {
            font-size: 0.9375rem;
            line-height: 1.55;
            margin-bottom: 1.25rem;
            margin-inline: auto;
            max-width: 100%;
          }
          .hm-trust-badges {
            justify-content: center;
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
      `}),(0,a.jsx)("section",{className:"hm-hero-section","aria-label":"Sección principal",children:(0,a.jsxs)("div",{className:"hm-hero-grid relative z-10",children:[(0,a.jsxs)(r.motion.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.1,delayChildren:.05}}},initial:"hidden",animate:"show",className:"hm-hero-col w-full min-w-0 max-w-full",children:[(0,a.jsxs)(r.motion.h1,{variants:o,className:"hm-hero-h1",children:["El software clínico creado"," ",(0,a.jsx)("span",{className:"hm-hero-h1-highlight",children:"por y para kinesiólogos."})]}),(0,a.jsx)(r.motion.p,{variants:o,className:"hm-hero-lede",children:"Agenda multi-box, fichas SOAP con 13 escalas validadas, admisión remota por QR y pautas de ejercicios a WhatsApp en 1 clic. Alineado con la normativa de salud en Chile."}),(0,a.jsxs)(r.motion.div,{variants:o,className:"hm-hero-actions",children:[(0,a.jsxs)(t.default,{href:"/#contact",className:"hm-btn-primary",children:["Agendar demo gratuita",(0,a.jsx)(s.ArrowRight,{size:15,"aria-hidden":"true"})]}),(0,a.jsx)(t.default,{href:"/funcionalidades",className:"hm-btn-ghost",children:"Ver funcionalidades"})]}),(0,a.jsxs)(r.motion.div,{variants:o,className:"hm-trust-badges",children:[(0,a.jsxs)("span",{className:"hm-trust-badge",children:[(0,a.jsx)(i.CheckCircle2,{size:15,className:"text-emerald shrink-0","aria-hidden":"true"}),"Alineado con Ley 20.584 y 21.719"]}),(0,a.jsxs)("span",{className:"hm-trust-badge",children:[(0,a.jsx)(i.CheckCircle2,{size:15,className:"text-emerald shrink-0","aria-hidden":"true"}),"Demo guiada sin costo"]}),(0,a.jsxs)("span",{className:"hm-trust-badge",children:[(0,a.jsx)(i.CheckCircle2,{size:15,className:"text-emerald shrink-0","aria-hidden":"true"}),"Onboarding y migración asistida"]})]})]}),(0,a.jsxs)("div",{className:"hm-visual-wrap",children:[(0,a.jsx)(r.motion.div,{className:"w-full flex justify-center",initial:{opacity:0,y:20,scale:.98},animate:{opacity:1,y:0,scale:1},transition:{duration:.6,ease:[.16,1,.3,1],delay:.1},children:(0,a.jsx)(R,{})}),(0,a.jsxs)(r.motion.div,{className:"hm-float-card hm-float-reminder hidden sm:flex","aria-hidden":"true",initial:{opacity:0,scale:.95,y:8},animate:{opacity:1,scale:1,y:0},transition:{duration:.45,delay:.7,ease:[.16,1,.3,1]},children:[(0,a.jsx)("div",{className:"w-7 h-7 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0",children:(0,a.jsx)("svg",{className:"w-3.5 h-3.5 fill-current",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.285"})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-float-title",children:"Pauta PDF"}),(0,a.jsx)("p",{className:"hm-float-sub",children:"Enviada a WhatsApp"})]})]}),(0,a.jsx)(r.motion.div,{className:"hm-float-card hm-float-waitlist hidden sm:flex","aria-hidden":"true",initial:{opacity:0,scale:.95,y:-8},animate:{opacity:1,scale:1,y:0},transition:{duration:.45,delay:.85,ease:[.16,1,.3,1]},children:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"hm-float-title",children:"Alerta DSS"}),(0,a.jsx)("p",{className:"hm-float-sub",children:"Bandera roja detectada"})]})})]})]})}),(0,a.jsx)("div",{ref:e,children:(0,a.jsx)("div",{className:"hm-proof-strip",children:O.map(e=>(0,a.jsx)(M,{stat:e,isVisible:l},e.label))})})]})}e.s(["Hero",()=>_],85161)}]);