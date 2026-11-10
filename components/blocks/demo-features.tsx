'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ShieldCheck,
  CalendarCheck,
  Activity,
  Sparkles,
  FileCheck2,
  QrCode,
  TrendingUp,
} from 'lucide-react'

/* ── Piezas reutilizables ── */
function Bullets({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-1.5">
      {items.map((t) => (
        <li
          key={t}
          className={`flex items-start gap-2 text-[13px] leading-snug ${
            dark ? 'text-white/85' : 'text-foreground-muted'
          }`}
        >
          <span
            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
              dark ? 'bg-[var(--kenko-pulse)]' : 'bg-brand'
            }`}
            aria-hidden="true"
          />
          {t}
        </li>
      ))}
    </ul>
  )
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex items-center gap-2 text-[13px] font-medium text-foreground">
          <Check size={14} strokeWidth={2.5} className="shrink-0 text-emerald" aria-hidden="true" />
          {t}
        </li>
      ))}
    </ul>
  )
}

const cardBase =
  'relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] border border-slate-200/90 bg-white p-6 shadow-[0_12px_35px_-18px_rgba(0,113,193,0.12)]'
const softStage =
  'mt-5 rounded-2xl border border-[#0071c1]/15 bg-gradient-to-b from-[#0071c1]/[0.05] via-[#16a996]/[0.04] to-slate-50/90 p-3.5'

export function DemoFeatures() {
  return (
    <div className="w-full">
      {/* Encabezado estilo Bento */}
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/6 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand">
          <Sparkles size={12} aria-hidden="true" />
          Ecosistema clínico todo en uno
        </p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.024em] leading-[1.12] text-foreground text-balance">
          Todo lo que tu centro necesita para operar en un solo lugar.
        </h2>
        <p className="mx-auto mt-3.5 max-w-2xl text-base sm:text-[1.0625rem] leading-relaxed text-foreground-muted">
          Agenda de sesiones, historia clínica SOAP, 13 escalas validadas, pautas PDF y cobros trabajando conectados desde la admisión hasta el alta.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-10px_rgba(0,113,193,0.5)] transition-all hover:bg-brand-dark"
          >
            Agendar demo gratuita
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Bento Grid principal (3 columnas en desktop + 2 tarjetas anchas abajo) */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:items-stretch">
        {/* ── COLUMNA IZQUIERDA (2 tarjetas apiladas) ── */}
        <div className="flex flex-col gap-5 lg:col-span-4">
          {/* Tarjeta 1: Agenda de sesiones */}
          <article className={`${cardBase} flex-1`}>
            <div>
              <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Agenda de sesiones
              </h3>
              <div className="mt-2.5">
                <Bullets
                  items={[
                    'Reservas online 24/7 por profesional',
                    'Confirmación y recordatorios por WhatsApp',
                    'Bloqueo atómico de boxes y gimnasio',
                    'Control automático de packs de sesiones',
                  ]}
                />
              </div>
            </div>

            {/* Mini-widget de calendario HD en vivo (100% colores del logo) */}
            <div className={softStage}>
              <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-extrabold text-slate-900">Lun 12 · Hoy</span>
                  <div className="flex items-center gap-2 text-[10px] font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-brand" />
                      Klga. Daniela
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald" />
                      Klgo. David
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 grid grid-cols-[2.2rem_1fr_1fr] gap-1.5 text-[10px]">
                  <span className="py-1 font-mono text-slate-400">10:00</span>
                  <div className="rounded-md border-l-[3px] border-brand bg-[#0071c1]/[0.08] px-2 py-1">
                    <p className="font-bold text-[#062b47] leading-tight">Esguince tobillo</p>
                    <p className="text-brand">Camila R. · Box 1</p>
                  </div>
                  <div className="rounded-md border-l-[3px] border-emerald bg-[#16a996]/[0.1] px-2 py-1">
                    <p className="font-bold text-[#063a34] leading-tight">Kinesio motora</p>
                    <p className="text-emerald-dark">Andrés M. · Gimnasio</p>
                  </div>

                  <span className="py-1 font-mono text-slate-400">11:00</span>
                  <div className="rounded-md border-l-[3px] border-emerald bg-[#16a996]/[0.1] px-2 py-1">
                    <p className="font-bold text-[#063a34] leading-tight">Lumbalgia aguda</p>
                    <p className="text-emerald-dark">Sofía V. · Ses. 3/10</p>
                  </div>
                  <div className="rounded-md border-l-[3px] border-brand bg-[#0071c1]/[0.08] px-2 py-1">
                    <p className="font-bold text-[#062b47] leading-tight">Post-op hombro</p>
                    <p className="text-brand">Matías P. · Box 2</p>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-emerald/25 bg-[#16a996]/[0.08] px-2.5 py-1.5 text-[11px]">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald text-white">
                    <CalendarCheck size={10} aria-hidden="true" />
                  </span>
                  <div className="leading-tight">
                    <span className="font-bold text-slate-800">Reserva online confirmada</span>
                    <span className="block text-[10px] text-slate-500">WhatsApp · Camila R. · 10:00 hs</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Tarjeta 2: Portal de Reservas + Admisión QR */}
          <article className={`${cardBase} flex-1`}>
            <div>
              <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Portal Online + Admisión QR
              </h3>
              <div className="mt-2.5">
                <Bullets
                  items={[
                    'Enlace público para tu Instagram y WhatsApp',
                    'Anamnesis remota de 14 páginas vía código QR',
                    'Selección de previsión (FONASA, Isapre, Particular)',
                    'Cero cruces de horario entre boxes y profesionales',
                  ]}
                />
              </div>
            </div>

            {/* Mini-widget de Portal Público de Reserva */}
            <div className={softStage}>
              <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs">
                <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                  app.kenkomed.cl/reservar/daniela-huichalaf
                </div>

                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">Klga. Daniela Huichalaf</p>
                    <p className="text-[10px] font-semibold text-brand">
                      ★★★★★ <span className="text-slate-500">Atención kinésica integral</span>
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold text-emerald-dark">
                      Agenda abierta · Horas disponibles hoy
                    </p>
                  </div>
                  <img
                    src="/images/fotodaniela.jpeg"
                    alt="Klga. Daniela Huichalaf"
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="h-11 w-11 shrink-0 rounded-xl object-cover ring-2 ring-brand/20"
                  />
                </div>

                <div className="mt-2.5 flex items-center gap-1.5">
                  <a
                    href="https://app.kenkomed.cl/reservar/daniela-huichalaf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[10px] font-bold text-white hover:bg-brand-dark"
                  >
                    Reservar hora
                  </a>
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand/20 bg-[#0071c1]/[0.05] px-2.5 py-1 text-[10px] font-semibold text-slate-700">
                    <QrCode size={10} className="text-brand" aria-hidden="true" />
                    QR Anamnesis 14 etapas
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ── COLUMNA CENTRAL OSCURA (Azul profundo derivado de #0071C1) ── */}
        <article className="kenko-band-deep relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 p-6 sm:p-7 shadow-[0_30px_70px_-30px_rgba(4,26,46,0.6)] md:col-span-2 lg:col-span-4">
          <div>
            <h3 className="font-display text-2xl sm:text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-white">
              Lo que Kenkomed hace por tu consulta kinésica
            </h3>
            <div className="mt-4">
              <Bullets
                dark
                items={[
                  'Recibe la anamnesis y mapa de dolor antes de que el paciente entre al box',
                  'Calcula automáticamente 13 escalas clínicas validadas en PubMed',
                  'Detecta banderas rojas, amarillas y comorbilidades (motor DSS)',
                  'Estructura tus evoluciones SOAP y objetivos sesión a sesión',
                  'Envía pautas de ejercicios ilustradas en PDF directo a WhatsApp',
                  'Muestra curvas de dolor (EVA) y función frente al umbral MCID',
                ]}
              />
            </div>
          </div>

          {/* Composición visual: Tarjeta clínica principal + 4 tarjetas con paleta del logo */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-[1.12fr_0.88fr] items-stretch">
            {/* Tarjeta izquierda: Evaluación + DSS en vivo */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-3.5 text-slate-900 shadow-lg">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#062b47]">
                    <span className="flex h-4 w-4 items-center justify-center rounded-md bg-brand text-white">
                      <Activity size={10} aria-hidden="true" />
                    </span>
                    Kenkomed DSS
                  </span>
                  <span className="rounded-full bg-[#16a996]/15 px-2 py-0.5 text-[9px] font-bold text-emerald-dark">
                    En box
                  </span>
                </div>

                <div className="mt-2.5 overflow-hidden rounded-xl border border-slate-200/80">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85"
                    alt="Evaluación kinésica asistida con Kenkomed"
                    width={900}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-28 w-full object-cover"
                  />
                </div>

                <div className="mt-2.5 rounded-lg bg-[#0071c1]/[0.05] p-2 text-[10px]">
                  <p className="font-bold text-[#062b47]">
                    “Dolor lumbar al levantar carga · EVA 6/10”
                  </p>
                  <p className="mt-0.5 text-slate-500">
                    Anamnesis QR recibida · Oswestry 28% (Moderado)
                  </p>
                </div>
              </div>

              {/* Barra de progreso de escalas */}
              <div className="mt-2.5 space-y-1.5 border-t border-slate-100 pt-2">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-slate-600">Puntaje funcional LEFS</span>
                  <span className="font-extrabold text-brand">64 / 80 pts</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-4/5 rounded-full bg-brand" />
                </div>
                <p className="text-[9px] font-semibold text-emerald-dark">
                  ✓ Sin banderas rojas · Apto para carga progresiva
                </p>
              </div>
            </div>

            {/* Columna derecha: 4 mini-tarjetas de inteligencia clínica (colores logo) */}
            <div className="flex flex-col justify-between gap-2.5">
              <div className="rounded-xl bg-white p-2.5 text-slate-900 shadow-md">
                <p className="text-[9px] font-bold uppercase tracking-wider text-brand">
                  ● Alerta clínica DSS
                </p>
                <p className="mt-0.5 text-[11px] font-extrabold leading-tight text-slate-900">
                  Bandera amarilla: Kinesiofobia alta
                </p>
                <span className="mt-1 inline-block rounded-md bg-[#0071c1]/10 px-2 py-0.5 text-[9px] font-bold text-brand">
                  Sugerencia: Educación en dolor
                </span>
              </div>

              <div className="rounded-xl bg-white p-2.5 text-slate-900 shadow-md">
                <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-dark">
                  ● Escalas integradas
                </p>
                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="font-display text-lg font-extrabold leading-none text-slate-900">
                    13
                  </span>
                  <span className="text-[10px] font-semibold text-slate-600">
                    escalas automatizadas
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[9px] font-medium text-slate-400">PubMed + MCID</span>
                  <span className="rounded-full bg-brand px-2 py-0.5 text-[9px] font-bold text-white">
                    1 clic
                  </span>
                </div>
              </div>

              <div className="rounded-xl bg-white p-2.5 text-slate-900 shadow-md">
                <p className="text-[9px] font-bold uppercase tracking-wider text-brand">
                  ● Pautas a WhatsApp
                </p>
                <p className="mt-0.5 text-[11px] font-extrabold text-slate-900">
                  PDF con series y carga
                </p>
                <div className="mt-1 flex items-center justify-between text-[10px]">
                  <span className="font-bold text-emerald-dark">Enviada al celular</span>
                  <span className="font-mono text-[9px] text-slate-400">100% digital</span>
                </div>
              </div>

              <div className="rounded-xl bg-white p-2.5 text-slate-900 shadow-md">
                <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-dark">
                  ● Soporte de decisión
                </p>
                <p className="mt-0.5 text-[10px] font-semibold text-slate-700">
                  Cruza anamnesis + comorbilidades
                </p>
                <span className="mt-1 inline-block rounded-md bg-[#16a996]/15 px-2 py-0.5 text-[9px] font-bold text-emerald-dark">
                  9 etapas de análisis
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* ── COLUMNA DERECHA (2 tarjetas apiladas) ── */}
        <div className="flex flex-col gap-5 lg:col-span-4">
          {/* Tarjeta 3: Ficha clínica SOAP */}
          <article className={`${cardBase} flex-1`}>
            <div>
              <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Historia clínica kinésica
              </h3>
              <div className="mt-2.5">
                <Bullets
                  items={[
                    'Anamnesis y evaluaciones kinésicas configurables',
                    'Plan de rehabilitación y evoluciones SOAP por sesión',
                    'Consentimiento informado Ley 20.584 y firma digital',
                    'Datos resguardados con control de acceso por rol',
                  ]}
                />
              </div>
            </div>

            {/* Mini-widget de Ficha de Paciente HD */}
            <div className={softStage}>
              <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/10 font-display text-xs font-extrabold text-brand">
                      CR
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-slate-900">Camila Rojas</p>
                      <p className="text-[10px] text-slate-500">
                        Paciente activa · Klga. Daniela H.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-md bg-[#0071c1]/10 px-2 py-0.5 text-[10px] font-bold text-brand">
                    FONASA / Isapre
                  </span>
                </div>

                <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
                  <div className="rounded-lg border border-slate-100 bg-slate-50/80 px-2 py-1.5">
                    <p className="text-[9px] font-medium text-slate-400">Sesiones</p>
                    <p className="text-xs font-extrabold text-slate-900">4 de 10</p>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50/80 px-2 py-1.5">
                    <p className="text-[9px] font-medium text-slate-400">Dolor (EVA)</p>
                    <p className="text-xs font-extrabold text-emerald-dark">2/10</p>
                  </div>
                  <div className="rounded-lg border border-slate-100 bg-slate-50/80 px-2 py-1.5">
                    <p className="text-[9px] font-medium text-slate-400">Pauta PDF</p>
                    <p className="text-xs font-extrabold text-brand">Activa</p>
                  </div>
                </div>

                <div className="mt-2.5 space-y-1 text-[10px]">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>
                      <strong className="font-mono text-slate-400">10 nov</strong> · Propiocepción y carga
                    </span>
                    <span className="text-slate-400">Klga. Daniela</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>
                      <strong className="font-mono text-slate-400">05 nov</strong> · Evaluación inicial + DSS
                    </span>
                    <span className="text-slate-400">Klga. Daniela</span>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between rounded-lg border border-emerald/25 bg-[#16a996]/[0.08] px-2.5 py-1.5 text-[10px]">
                  <span className="inline-flex items-center gap-1 font-bold text-slate-800">
                    <ShieldCheck size={12} className="text-emerald-dark" aria-hidden="true" />
                    Consentimiento informado
                  </span>
                  <span className="rounded-full bg-[#16a996]/20 px-2 py-0.5 font-extrabold text-emerald-dark">
                    Firmado
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* Tarjeta 4: Reportes y análisis clínico */}
          <article className={`${cardBase} flex-1`}>
            <div>
              <h3 className="font-display text-lg font-extrabold tracking-tight text-foreground">
                Reportes y evolución clínica
              </h3>
              <div className="mt-2.5">
                <Bullets
                  items={[
                    'Curvas de dolor (EVA) y función por paciente',
                    'Comparación automática con umbral clínico MCID',
                    'Informes PDF de evolución y alta para médicos',
                    'Estadísticas de adherencia y sesiones del centro',
                  ]}
                />
              </div>
            </div>

            {/* Mini-widget de Indicadores Clínicos HD */}
            <div className={softStage}>
              <div className="rounded-xl border border-slate-200/90 bg-white p-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">
                      Evolución funcional · Cohorte activa
                    </p>
                    <p className="text-[10px] text-slate-400">Seguimiento longitudinal por escala</p>
                  </div>
                  <TrendingUp size={15} className="text-emerald" aria-hidden="true" />
                </div>

                <div className="mt-2.5 space-y-2 text-[11px]">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-600">Reducción dolor (EVA ≤ 3)</span>
                      <span className="font-extrabold text-slate-900">92%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[92%] rounded-full bg-emerald" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-600">Logro umbral MCID (LEFS/DASH)</span>
                      <span className="font-extrabold text-slate-900">86%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[86%] rounded-full bg-brand" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-slate-600">Adherencia a packs kinésicos</span>
                      <span className="font-extrabold text-slate-900">81%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full w-[81%] rounded-full bg-[#2b95df]" />
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between rounded-lg bg-[#16a996]/10 px-2.5 py-1.5 text-[10px]">
                  <div>
                    <p className="font-extrabold text-[#063a34]">
                      ↗ Informe de alta listo en PDF
                    </p>
                    <p className="text-emerald-dark">Respaldo bibliográfico PubMed incluido</p>
                  </div>
                  <span className="rounded-full bg-[#062b47] px-2 py-0.5 font-bold text-white">
                    +38%
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* ── FILA INFERIOR ANCHA (2 tarjetas horizontales de 6 columnas) ── */}
        <article
          className={`${cardBase} md:col-span-2 lg:col-span-6 lg:flex-row lg:items-center lg:gap-6`}
        >
          <div className="flex flex-col justify-between lg:w-[48%]">
            <div>
              <h3 className="font-display text-xl font-extrabold leading-snug tracking-tight text-foreground">
                Tus pacientes completan su admisión antes de entrar al box
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground-muted">
                Comparte un enlace o código QR por WhatsApp y recibe la anamnesis de 14 etapas, mapa corporal del dolor y antecedentes listos en la ficha.
              </p>
              <div className="mt-3.5">
                <CheckList
                  items={[
                    'Enlace seguro de un solo uso',
                    'Mapa de dolor y banderas rojas',
                    'Cero tiempo perdido digitando en box',
                  ]}
                />
              </div>
            </div>

            <Link
              href="/funcionalidades"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold text-brand hover:underline"
            >
              Conocer la admisión remota
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={`${softStage} mt-5 flex-1 lg:mt-0`}>
            <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold text-slate-500">
                <span>Admisión Remota · 14 etapas</span>
                <span className="rounded-full bg-[#16a996]/15 px-2 py-0.5 text-[9px] font-bold text-emerald-dark">
                  Recibido en ficha
                </span>
              </div>
              <img
                src="/software/formulario_remoto.png"
                alt="Formulario de admisión remota por QR de Kenkomed"
                width={1261}
                height={479}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-cover object-left-top"
              />
            </div>
          </div>
        </article>

        <article
          className={`${cardBase} md:col-span-2 lg:col-span-6 lg:flex-row lg:items-center lg:gap-6`}
        >
          <div className="flex flex-col justify-between lg:w-[48%]">
            <div>
              <h3 className="font-display text-xl font-extrabold leading-snug tracking-tight text-foreground">
                Opera tus pagos, packs y reembolsos en un solo lugar
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-foreground-muted">
                Cada sesión asistida, abono o paquete kinésico queda registrado al instante, con certificado de asistencia y códigos FONASA para reembolso en Isapre.
              </p>
              <div className="mt-3.5">
                <CheckList
                  items={[
                    'Control de packs y saldos por paciente',
                    'Certificado con códigos FONASA para Isapres',
                    'Pautas de ejercicios en PDF a WhatsApp',
                  ]}
                />
              </div>
            </div>

            <Link
              href="/precios"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-extrabold text-brand hover:underline"
            >
              Conocer planes y módulo de cobros
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className={`${softStage} mt-5 flex-1 lg:mt-0`}>
            <div className="relative rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-[10px]">
                <span className="font-extrabold text-slate-800">Resumen de pack #0042</span>
                <span className="rounded-md bg-[#16a996]/15 px-2 py-0.5 font-bold text-emerald-dark">
                  Pagado
                </span>
              </div>
              <div className="mt-2 space-y-1 text-[11px]">
                <div className="flex justify-between text-slate-600">
                  <span>Evaluación kinésica inicial</span>
                  <span className="font-semibold text-slate-900">$35.000</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Pack 10 sesiones rehabilitación</span>
                  <span className="font-semibold text-slate-900">$250.000</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-1.5 text-xs font-extrabold text-slate-900">
                  <span>Total registrado</span>
                  <span className="text-brand">$285.000</span>
                </div>
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-md border border-brand/20 bg-[#0071c1]/[0.05] px-2 py-1 text-[10px] font-semibold text-[#062b47]">
                  <FileCheck2 size={11} className="text-brand" aria-hidden="true" />
                  Código FONASA listo para Isapre
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Franja inferior de métricas verificables (100% colores del logo) */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 divide-y divide-slate-200 rounded-2xl border border-brand/15 bg-white/80 px-4 py-3 shadow-2xs sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          {
            v: '13',
            accent: 'text-brand',
            l: 'Escalas clínicas validadas en PubMed con cálculo automático',
          },
          {
            v: '14 etapas',
            accent: 'text-emerald',
            l: 'De anamnesis remota por QR completadas antes de entrar al box',
          },
          {
            v: '26 módulos',
            accent: 'text-brand',
            l: 'Clínicos y administrativos diseñados para kinesiología en Chile',
          },
        ].map((s) => (
          <div key={s.v} className="flex items-center justify-center gap-3.5 px-6 py-4">
            <span className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${s.accent}`}>
              {s.v}
            </span>
            <span className="max-w-[12.5rem] text-xs leading-snug text-foreground-muted">
              {s.l}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
