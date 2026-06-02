'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
    QrCode,
    Smartphone,
    Clock,
    CheckCircle2,
    ArrowRight,
    FileText,
    MessageSquare,
    Brain,
    Zap,
    ChevronRight,
    User,
    ClipboardList,
    MapPin,
    AlertCircle,
} from 'lucide-react'

/** Patrón fijo para el mock del QR (evita Math.random y errores de hidratación). */
function isQrMockCellFilled(index: number): boolean {
    const row = Math.floor(index / 7)
    const col = index % 7
    const isCorner =
        (row < 3 && col < 3) ||
        (row < 3 && col > 3) ||
        (row > 3 && col < 3) ||
        (col === 6 && row < 2) ||
        (col === 0 && row > 3 && row < 6)
    if (isCorner) return true
    return ((index * 13 + row * 3 + col * 7) % 17) > 8
}

function useReveal() {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
            { threshold: 0.08 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return { ref, visible }
}

/* ─── Steps of the QR journey ─── */
const steps = [
    {
        step: 1,
        icon: QrCode,
        color: 'bg-blue-500',
        title: 'El kinesiólogo comparte el QR',
        desc: 'Al agendar la cita, se envía automáticamente un link o código QR al paciente por WhatsApp, email o SMS.',
        badge: '1 clic',
    },
    {
        step: 2,
        icon: Smartphone,
        color: 'bg-teal-500',
        title: 'El paciente lo completa desde casa',
        desc: 'Antes de llegar, el paciente responde el formulario de admisión en su teléfono — sin apps, sin instalaciones.',
        badge: '5-10 min',
    },
    {
        step: 3,
        icon: Brain,
        color: 'bg-purple-500',
        title: 'El DSS pre-analiza las respuestas',
        desc: 'Al enviarlo, el sistema identifica señales de alerta, factores de riesgo y sugiere qué escalas aplicar en la primera sesión.',
        badge: 'Automático',
    },
    {
        step: 4,
        icon: FileText,
        color: 'bg-emerald-500',
        title: 'La ficha llega lista al profesional',
        desc: 'Cuando el paciente llega, el kinesiólogo ya tiene su historia cargada, los datos procesados y sabe exactamente por dónde empezar.',
        badge: 'Listo al llegar',
    },
]

/* ─── What the remote form captures ─── */
const formFields = [
    { icon: User, label: 'Datos personales y contacto', color: 'text-blue-500' },
    { icon: MapPin, label: 'Motivo de consulta y zona de dolor', color: 'text-rose-500' },
    { icon: ClipboardList, label: 'Antecedentes médicos y cirugías previas', color: 'text-amber-500' },
    { icon: Clock, label: 'Historia del dolor: inicio, duración, evolución', color: 'text-teal-500' },
    { icon: MessageSquare, label: 'Medicamentos actuales y alergias', color: 'text-purple-500' },
    { icon: AlertCircle, label: 'Red flags y comorbilidades iniciales', color: 'text-red-500' },
    { icon: Brain, label: 'Expectativas y objetivos del tratamiento', color: 'text-indigo-500' },
    { icon: Zap, label: 'Consentimiento informado digital', color: 'text-emerald-500' },
]

/* ─── Problem it solves ─── */
const problems = [
    'Primera sesión de 60 min donde 30+ son solo preguntas básicas',
    'Paciente nervioso que no recuerda fechas ni medicamentos exactos',
    'Datos incompletos porque no hay tiempo de preguntar todo',
    'Kinesiólogo leyendo y escribiendo en vez de evaluar y explorar',
    'Información en papel que luego hay que transcribir al sistema',
]

export function QRAdmission() {
    const headerSection = useReveal()
    const problemSection = useReveal()
    const stepsSection = useReveal()
    const formSection = useReveal()
    const [activeStep, setActiveStep] = useState(0)

    // Auto-advance active step
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % steps.length)
        }, 2800)
        return () => clearInterval(interval)
    }, [])

    return (
        <section
            id="admision-remota"
            className="py-28 md:py-36 bg-surface relative overflow-hidden"
            aria-labelledby="qr-heading"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] opacity-[0.05]"
                    style={{ background: 'radial-gradient(circle, oklch(0.48 0.18 246), transparent 70%)' }} />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-[0.04]"
                    style={{ background: 'radial-gradient(circle, oklch(0.66 0.18 163), transparent 70%)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerSection.ref} className={`max-w-3xl mx-auto text-center mb-20 scroll-reveal ${headerSection.visible ? 'is-visible' : ''}`}>
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
                        <QrCode size={12} className="text-blue-600" />
                        <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Funcionalidad estrella</span>
                    </div>
                    <h2
                        id="qr-heading"
                        className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
                    >
                        La primera sesión,{' '}
                        <span className="text-gradient">sin la parte aburrida.</span>
                    </h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        Con la <strong className="text-foreground">Admisión Remota por QR</strong>, el paciente llega con su ficha ya completada,
                        el DSS ya pre-analizó las respuestas y tú puedes enfocarte en lo que realmente importa:
                        <strong className="text-foreground"> explorar, evaluar y conectar con tu paciente.</strong>
                    </p>
                </div>

                {/* The problem — before */}
                <div ref={problemSection.ref} className={`mb-16 scroll-reveal ${problemSection.visible ? 'is-visible' : ''}`}>
                    <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-rose-50/80 border border-rose-200/60">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                                <Clock size={18} className="text-rose-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground mb-1">El problema actual: la primera sesión perdida</p>
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    La anamnesis inicial puede tomar 30-45 minutos solo en preguntas administrativas y de historia.
                                    Ese tiempo se va en burocracia, no en terapia.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {problems.map((problem, i) => (
                                <div key={i}
                                    className={`flex items-start gap-3 scroll-reveal stagger-${i + 1} ${problemSection.visible ? 'is-visible' : ''}`}>
                                    <div className="w-5 h-5 rounded-full bg-rose-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-rose-700 text-[9px] font-bold">✕</span>
                                    </div>
                                    <p className="text-sm text-foreground-muted">{problem}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Steps — the solution journey */}
                <div ref={stepsSection.ref} className="mb-16">
                    <div className={`text-center mb-10 scroll-reveal ${stepsSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-3">
                            Cómo funciona
                        </span>
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground text-balance">
                            4 pasos. Sin fricción. Sin papel.
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {steps.map((s, i) => {
                            const Icon = s.icon
                            const isActive = activeStep === i
                            return (
                                <div
                                    key={i}
                                    onClick={() => setActiveStep(i)}
                                    className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-500 scroll-reveal stagger-${i + 1} ${stepsSection.visible ? 'is-visible' : ''} ${isActive
                                        ? 'bg-card border-teal-300 shadow-lg shadow-teal-500/10 scale-[1.02]'
                                        : 'bg-card border-border/60 hover:border-teal-200 hover:shadow-md'
                                        }`}
                                >
                                    {/* Step number */}
                                    <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-background border-2 border-border flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-foreground-muted">{s.step}</span>
                                    </div>

                                    {/* Active indicator */}
                                    {isActive && (
                                        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                                    )}

                                    <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                        <Icon size={20} className="text-white" />
                                    </div>
                                    <div className="inline-block text-[10px] font-bold text-brand bg-teal-50 border border-teal-100 rounded-full px-2.5 py-0.5 mb-3">
                                        {s.badge}
                                    </div>
                                    <h4 className="font-semibold text-foreground text-sm mb-2 leading-snug">{s.title}</h4>
                                    <p className="text-xs text-foreground-muted leading-relaxed">{s.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* What the form captures — two column */}
                <div ref={formSection.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center scroll-reveal ${formSection.visible ? 'is-visible' : ''}`}>

                    {/* Left: form fields */}
                    <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                                <ClipboardList size={18} className="text-blue-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground text-sm">¿Qué captura el formulario remoto?</p>
                                <p className="text-xs text-foreground-muted">Todo lo que necesitas antes de que llegue el paciente</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {formFields.map((field, i) => {
                                const Icon = field.icon
                                return (
                                    <div key={i}
                                        className={`flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition-colors scroll-reveal stagger-${(i % 6) + 1} ${formSection.visible ? 'is-visible' : ''}`}>
                                        <Icon size={16} className={`${field.color} flex-shrink-0`} />
                                        <p className="text-sm text-foreground-muted">{field.label}</p>
                                        <CheckCircle2 size={14} className="text-teal-500 ml-auto flex-shrink-0" />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-teal-50/60 border border-teal-100/60">
                            <p className="text-xs text-teal-800 leading-relaxed">
                                <strong>Resultado:</strong> La primera sesión empieza directamente en la evaluación física.
                                Cero preguntas repetitivas, cero transcripción. El tiempo clínico se usa para sanar.
                            </p>
                        </div>
                    </div>

                    {/* Right: visual mock of QR screen */}
                    <div className="flex flex-col gap-5">

                        {/* QR mock card */}
                        <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-sm text-center">
                            {/* Fake QR pattern */}
                            <div className="w-40 h-40 mx-auto mb-5 rounded-2xl bg-white border-2 border-blue-100 p-3 shadow-inner">
                                <div className="w-full h-full grid grid-cols-7 gap-0.5">
                                    {Array.from({ length: 49 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className={`rounded-[1px] ${isQrMockCellFilled(i) ? 'bg-foreground' : 'bg-transparent'}`}
                                            />
                                    ))}
                                </div>
                            </div>
                            <p className="font-semibold text-foreground text-sm mb-1">Tu formulario de admisión</p>
                            <p className="text-xs text-foreground-muted mb-4">Escanea antes de tu primera sesión</p>
                            <div className="flex items-center justify-center gap-2 text-xs text-teal-700 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 font-medium">
                                <Smartphone size={12} />
                                Abre en cualquier teléfono · Sin apps
                            </div>
                        </div>

                        {/* Impact metrics */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-center">
                                <p className="font-display font-bold text-2xl text-blue-700 mb-0.5">-30<span className="text-lg">min</span></p>
                                <p className="text-[10px] text-blue-700/80 font-medium">1ª sesión más corta</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-center">
                                <p className="font-display font-bold text-2xl text-emerald-700 mb-0.5">100%</p>
                                <p className="text-[10px] text-emerald-700/80 font-medium">Datos pre-cargados</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 text-center">
                                <p className="font-display font-bold text-2xl text-purple-700 mb-0.5">0</p>
                                <p className="text-[10px] text-purple-700/80 font-medium">Preguntas perdidas</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link href="/#contact"
                            className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
                            Quiero ver esto en mi clínica
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
