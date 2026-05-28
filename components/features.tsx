'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CalendarCheck,
  FileText,
  BarChart3,
  Smartphone,
  Bell,
  Shield,
  Zap,
  Brain,
  Users,
  ArrowRight,
  XCircle,
  CheckCheck,
  ClipboardList,
  Clock,
  BrainCircuit,
  Sparkles,
  CheckCircle2,
  QrCode,
  TrendingUp,
  Activity,
  Lock,
  MessageSquare,
  Layers,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Historias Clínicas Digitales',
    desc: 'Registros médicos completos y seguros con acceso instantáneo desde cualquier dispositivo.',
  },
  {
    icon: BarChart3,
    title: 'Análisis y Reportes',
    desc: 'Visualización de datos con gráficos interactivos y reportes automáticos para mejores decisiones.',
  },
  {
    icon: Brain,
    title: 'Cuestionarios Clínicos',
    desc: 'Automatización de evaluaciones clínicas con escalas validadas (EVA, PSFS, Barthel, etc.).',
  },
  {
    icon: Users,
    title: 'Gestión de Pacientes',
    desc: 'Seguimiento personalizado con alertas, recordatorios y evolución del tratamiento.',
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    desc: 'Encriptación de datos, respaldos automáticos y cumplimiento de normativas de salud.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda Inteligente',
    desc: 'Gestión de citas con recordatorios automáticos y optimización de horarios.',
  },
  {
    icon: Smartphone,
    title: 'App Móvil',
    desc: 'Accede a toda tu clínica desde tu iPhone o Android. Disponible en cualquier momento y lugar.',
  },
  {
    icon: Zap,
    title: 'Configuración en Minutos',
    desc: 'Sin instalaciones. Entra, configura tu perfil y comienza a usar. Soporte real incluido.',
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            const cards = entry.target.querySelectorAll('.feature-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                ;(card as HTMLElement).style.opacity = '1'
                ;(card as HTMLElement).style.transform = 'translateY(0)'
              }, i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-28 md:py-36 bg-background"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
            Funciones
          </span>
          <h2
            id="features-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
          >
            Todo lo que necesitas,{' '}
            <span className="text-gradient">nada de lo que no.</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Diseñado específicamente para el flujo de trabajo de un kinesiólogo.
            Sin funciones de más, sin curva de aprendizaje.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="feature-card group p-6 rounded-2xl bg-card border border-border/60 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 cursor-default"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
                role="article"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <Icon size={20} className="text-brand" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{feat.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Large CTA banner */}
        <div className="mt-20 rounded-3xl bg-teal-50 dark:bg-surface-2 border border-teal-200/60 dark:border-border/60 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div
            className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none"
            aria-hidden="true"
            style={{
              background: 'radial-gradient(circle, oklch(0.42 0.12 210), transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 text-balance">
              ¿Listo para transformar tu clínica?
            </h3>
            <p className="text-foreground-muted max-w-lg leading-relaxed">
              Únete a más de 500 kinesiólogos que ya optimizaron su práctica con Kenkomed.
              Sin tarjeta de crédito — 30 días gratis.
            </p>
          </div>
          <a
            href="#pricing"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Comenzar ahora
          </a>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────
   PRODUCT SHOWCASE — Bento Grid estilo AgendaPro
   Grillas compactas, unidas y de distintos tamaños.
──────────────────────────────────────────────── */

/** Componente reutilizable: ventana de browser con imagen */
function BrowserMockup({
  src,
  alt,
  aspectClass = 'aspect-[16/10]',
  className = '',
}: {
  src: string
  alt: string
  aspectClass?: string
  className?: string
}) {
  return (
    <div
      className={`relative ${aspectClass} w-full rounded-2xl overflow-hidden border border-border/30 bg-surface shadow-lg group-hover/card:scale-[1.02] transition-transform duration-500 ${className}`}
    >
      {/* Browser chrome */}
      <div className="w-full h-7 bg-secondary/80 backdrop-blur-sm flex items-center gap-1.5 px-3 border-b border-border/30 flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-rose-400/80" />
        <div className="w-2 h-2 rounded-full bg-amber-400/80" />
        <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
        <div className="ml-2 flex-1 h-3.5 bg-border/40 rounded-full max-w-[140px]" />
      </div>
      <div className="relative w-full h-[calc(100%-28px)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Subtle inner shadow overlay to make images pop */}
        <div className="absolute inset-0 shadow-[inset_0_-40px_60px_rgba(0,0,0,0.08)] pointer-events-none" />
      </div>
    </div>
  )
}

export function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="product"
      className="py-28 md:py-36 bg-surface relative overflow-hidden"
      aria-labelledby="product-heading"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(oklch(0.48 0.18 246) 1px,transparent 1px),linear-gradient(90deg,oklch(0.48 0.18 246) 1px,transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
            El Producto
          </span>
          <h2
            id="product-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance"
          >
            Plataforma diseñada para la{' '}
            <span className="text-gradient">realidad del kinesiólogo.</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Una solución todo en uno que simplifica la operación administrativa y eleva el rigor
            clínico en cada sesión.
          </p>
        </div>

        {/* ── BENTO GRID ── */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 scroll-reveal ${visible ? 'is-visible' : ''}`}
        >

          {/* ══ FILA 1 ══════════════════════════════════════════════════════
              [  DSS — 7 cols, tall  ]  [  QR Admisión — 5 cols  ]
          ═══════════════════════════════════════════════════════════════════ */}

          {/* Card 1: DSS — hero card (7/12 columns, spans 2 rows) */}
          <div className="lg:col-span-7 lg:row-span-2 group/card rounded-3xl border border-border/70 bg-card overflow-hidden flex flex-col hover:shadow-2xl hover:border-teal-300/60 transition-all duration-500 shadow-sm">
            {/* Image — tall, full-bleed */}
            <div className="relative w-full flex-1 min-h-[280px] md:min-h-[340px] overflow-hidden">
              <Image
                src="/software/DSS.jpg"
                alt="DSS clínico de Kenkomed"
                fill
                className="object-cover object-top group-hover/card:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              {/* Gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              {/* Badge over image */}
              <div className="absolute top-5 left-5">
                <span className="inline-block text-[10px] font-bold text-teal-700 bg-teal-50/95 border border-teal-200 rounded-full px-3 py-1 tracking-widest uppercase shadow-sm backdrop-blur-sm">
                  Inteligencia Clínica
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="p-8 pt-5">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 group-hover/card:text-brand transition-colors">
                DSS e Inteligencia Clínica
              </h3>
              <p className="text-sm text-foreground-muted mb-5 leading-relaxed">
                Sistema de Apoyo a Decisiones que interpreta automáticamente escalas validadas,
                detecta banderas rojas y guía cada evaluación con rigor científico.
              </p>
              {/* Pill-style feature list */}
              <div className="flex flex-wrap gap-2">
                {[
                  'Escalas EVA · PSFS · Barthel',
                  'Detección de comorbilidades',
                  'Algoritmo de dolor',
                  'Banderas rojas automáticas',
                  'Anamnesis 14 páginas',
                  'Gráficos de outcomes',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 text-xs bg-teal-50 text-teal-700 border border-teal-200/80 rounded-full px-3 py-1 font-medium"
                  >
                    <CheckCircle2 size={11} className="text-teal-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Admisión QR — 5/12 cols */}
          <div className="lg:col-span-5 group/card rounded-3xl border border-border/70 bg-card overflow-hidden flex flex-col hover:shadow-2xl hover:border-purple-300/60 transition-all duration-500 shadow-sm">
            <div className="p-7 pb-4">
              <span className="inline-block text-[10px] font-bold text-purple-600 bg-purple-50 border border-purple-200 rounded-full px-2.5 py-0.5 mb-4 tracking-widest uppercase">
                Admisión Digital
              </span>
              <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover/card:text-brand transition-colors">
                Admisión Express y QR
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                El paciente completa su anamnesis desde el celular antes de llegar. Cero papel,
                cero burocracia en recepción.
              </p>
              {/* Mini stats row */}
              <div className="flex gap-4 mb-5">
                <div className="flex-1 bg-purple-50 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-purple-700">0</div>
                  <div className="text-[10px] text-purple-500 font-medium">Papel</div>
                </div>
                <div className="flex-1 bg-purple-50 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-purple-700">100%</div>
                  <div className="text-[10px] text-purple-500 font-medium">Digital</div>
                </div>
                <div className="flex-1 bg-purple-50 rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-purple-700">&lt;3'</div>
                  <div className="text-[10px] text-purple-500 font-medium">Admisión</div>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="px-6 pb-6 mt-auto">
              <BrowserMockup
                src="/software/Cuerpo.jpg"
                alt="Mapa corporal y anamnesis"
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>

          {/* Card 3: Ficha clínica — 5/12 cols */}
          <div className="lg:col-span-5 group/card rounded-3xl border border-border/70 bg-card overflow-hidden flex flex-col hover:shadow-2xl hover:border-blue-300/60 transition-all duration-500 shadow-sm">
            <div className="p-7 pb-4">
              <span className="inline-block text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-2.5 py-0.5 mb-4 tracking-widest uppercase">
                Gestión Profesional
              </span>
              <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover/card:text-brand transition-colors">
                Ficha y Gestión Clínica
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                Historia clínica digital unificada. Sesiones, evolución diaria, prescripciones e
                informes automáticos en un solo lugar.
              </p>
            </div>
            {/* Image */}
            <div className="px-6 pb-6 mt-auto">
              <BrowserMockup
                src="/software/Panel.jpg"
                alt="Panel clínico y ficha médica"
                aspectClass="aspect-[4/3]"
              />
            </div>
          </div>


          {/* ══ FILA 2 ══════════════════════════════════════════════════════
              [  Agenda — 4 cols  ]  [  Seguridad — 4 cols  ]  [  App móvil — 4 cols  ]
          ═══════════════════════════════════════════════════════════════════ */}

          {/* Card 4: Agenda inteligente */}
          <div className="lg:col-span-4 group/card rounded-3xl border border-border/70 bg-card overflow-hidden hover:shadow-xl hover:border-amber-300/60 transition-all duration-500 shadow-sm">
            {/* Colored header band */}
            <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-400" />
            <div className="p-7">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center mb-5">
                <CalendarCheck size={22} className="text-amber-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover/card:text-brand transition-colors">
                Agenda Inteligente
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                Gestión de citas con recordatorios automáticos por WhatsApp y optimización de horarios en tiempo real.
              </p>
              <ul className="flex flex-col gap-2">
                {['Recordatorios automáticos', 'Vista semanal y mensual', 'Bloqueo de horarios'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-foreground-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Card 5: Seguridad */}
          <div className="lg:col-span-4 group/card rounded-3xl border border-border/70 bg-card overflow-hidden hover:shadow-xl hover:border-emerald-300/60 transition-all duration-500 shadow-sm">
            <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-400" />
            <div className="p-7">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-5">
                <Lock size={22} className="text-emerald-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover/card:text-brand transition-colors">
                Seguridad & Privacidad
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                Encriptación de extremo a extremo, respaldos automáticos diarios y cumplimiento
                normativo en salud.
              </p>
              {/* Security badges */}
              <div className="flex flex-wrap gap-2">
                {['SSL/TLS', 'HIPAA', 'Backup diario', 'Rol-based access'].map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-2 py-1"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 6: Metodología de Sesiones */}
          <div className="lg:col-span-4 group/card rounded-3xl border border-border/70 bg-card overflow-hidden hover:shadow-xl hover:border-sky-300/60 transition-all duration-500 shadow-sm">
            <div className="h-2 bg-linear-to-r from-sky-400 to-blue-500" />
            <div className="p-7">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200/60 flex items-center justify-center mb-5">
                <ClipboardList size={22} className="text-sky-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover/card:text-brand transition-colors">
                Metodología de Sesiones
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                Estructura sistemática de evaluación inicial, progresión terapéutica y registro de avances clínicos.
              </p>
              {/* Methodology steps */}
              <div className="space-y-2">
                {['Evaluación inicial completa', 'Planificación personalizada', 'Seguimiento sesión a sesión', 'Análisis de progreso'].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-sky-600 flex-shrink-0" />
                    <span className="text-xs text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* ══ FILA 3 ══════════════════════════════════════════════════════
              Stat bar full width + 2 compact tiles + 1 large CTA tile
          ═══════════════════════════════════════════════════════════════════ */}

          {/* Card 8: Reportes y análisis — 5 cols */}
          <div className="lg:col-span-5 group/card rounded-3xl border border-border/70 bg-card overflow-hidden hover:shadow-xl hover:border-teal-300/60 transition-all duration-500 shadow-sm">
            <div className="p-7">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="inline-block text-[10px] font-bold text-teal-600 bg-teal-50 border border-teal-200 rounded-full px-2.5 py-0.5 mb-3 tracking-widest uppercase">
                    Analytics
                  </span>
                  <h3 className="font-display font-bold text-lg text-foreground group-hover/card:text-brand transition-colors">
                    Reportes y Análisis
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <BarChart3 size={18} className="text-teal-600" />
                </div>
              </div>
              <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                Visualiza la evolución clínica de cada paciente con gráficos interactivos. Toma
                decisiones basadas en datos reales.
              </p>
              {/* Fake mini chart bars */}
              <div className="flex items-end gap-1.5 h-16">
                {[40, 55, 45, 70, 60, 80, 65, 90, 75, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-teal-500 to-teal-300 opacity-80 group-hover/card:opacity-100 transition-opacity"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-foreground-muted">
                <span>Ene</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span>
              </div>
            </div>
          </div>

          {/* Card 9: Informes automáticos — 3 cols */}
          <div className="lg:col-span-3 group/card rounded-3xl border border-border/70 bg-card overflow-hidden hover:shadow-xl hover:border-indigo-300/60 transition-all duration-500 shadow-sm">
            <div className="p-7 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                <FileText size={22} className="text-indigo-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover/card:text-brand transition-colors">
                Informes Automáticos
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-5 flex-1">
                Genera informes clínicos listos para imprimir en un solo clic. Comparte con el
                médico derivador al instante.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 group-hover/card:gap-3 transition-all">
                Ver ejemplo
                <ArrowRight size={13} />
              </div>
            </div>
          </div>

          {/* Card 10: Cuestionarios clínicos — 4 cols */}
          <div className="lg:col-span-4 group/card rounded-3xl border border-border/70 bg-card overflow-hidden hover:shadow-xl hover:border-rose-300/60 transition-all duration-500 shadow-sm">
            <div className="p-7 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-5">
                <Brain size={22} className="text-rose-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover/card:text-brand transition-colors">
                Cuestionarios Clínicos
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed mb-5 flex-1">
                Aplica escalas validadas (EVA, PSFS, Barthel, DASH, etc.) directamente desde la
                plataforma. Resultados interpretados al instante.
              </p>
              {/* Scale chips */}
              <div className="flex flex-wrap gap-1.5">
                {['EVA', 'PSFS', 'Barthel', 'DASH', 'NDI', 'OSAS'].map((scale) => (
                  <span
                    key={scale}
                    className="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-2.5 py-1"
                  >
                    {scale}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
        {/* ── END BENTO GRID ── */}
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────
   SOLUCIÓN TEASER — Homepage sales block
──────────────────────────────────────────────── */

const teaserPains = [
  {
    icon: ClipboardList,
    color: 'bg-rose-50 text-rose-600',
    title: 'Fichas en papel o Excel',
    bad: 'Datos perdidos, sin trazabilidad, sin análisis.',
    good: 'Historia digital estructurada, lista en segundos.',
  },
  {
    icon: BrainCircuit,
    color: 'bg-purple-50 text-purple-600',
    title: 'Cero apoyo a la decisión',
    bad: 'Todo depende de tu memoria y tiempo.',
    good: 'DSS que recomienda escalas y alerta automáticamente.',
  },
  {
    icon: Clock,
    color: 'bg-amber-50 text-amber-600',
    title: 'Tiempo clínico perdido',
    bad: '+30% del tiempo en papeleo y burocracia.',
    good: 'Anamnesis en minutos. Informe generado al instante.',
  },
]

export function SolucionTeaser() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="solucion-teaser"
      className="py-28 md:py-36 bg-background relative overflow-hidden"
      aria-labelledby="solucion-teaser-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, oklch(0.48 0.18 246), transparent 70%)',
          }}
        />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 scroll-reveal ${visible ? 'is-visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={12} className="text-rose-600" />
            <span className="text-xs font-semibold text-rose-600 tracking-wide uppercase">
              ¿Te identificas?
            </span>
          </div>
          <h2
            id="solucion-teaser-heading"
            className="font-display font-bold text-3xl md:text-5xl text-foreground mb-5 text-balance"
          >
            Estos problemas te están{' '}
            <span className="text-gradient">costando pacientes y tiempo.</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            La mayoría de los kinesiólogos en Chile trabajan con herramientas del pasado. Kenkomed
            los soluciona todos — en una sola plataforma.
          </p>
        </div>

        {/* Pain / Solution cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {teaserPains.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`group rounded-2xl border border-border/60 overflow-hidden bg-card hover:shadow-lg hover:border-teal-200 transition-all duration-300 scroll-reveal stagger-${i + 1} ${visible ? 'is-visible' : ''}`}
              >
                {/* Top — pain */}
                <div className="p-6 border-b border-rose-100/60 bg-rose-50/30">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <div className="flex items-start gap-2">
                    <XCircle size={13} className="text-rose-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground-muted">{item.bad}</p>
                  </div>
                </div>
                {/* Bottom — solution */}
                <div className="p-6 bg-teal-50/30">
                  <div className="flex items-start gap-2">
                    <CheckCheck size={13} className="text-teal-500 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-foreground font-medium">{item.good}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className={`text-center scroll-reveal stagger-4 ${visible ? 'is-visible' : ''}`}>
          <Link
            href="/solucion"
            className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Ver cómo Kenkomed lo resuelve
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-foreground-muted mt-3">
            Solución + validación científica completa →
          </p>
        </div>
      </div>
    </section>
  )
}