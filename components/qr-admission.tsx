'use client'

import { useEffect, useState } from 'react'
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
    User,
    ClipboardList,
    MapPin,
    AlertCircle,
} from 'lucide-react'

/* ─── Steps of the QR journey ─── */
const steps = [
    {
        step: 1,
        icon: QrCode,
        title: 'El kinesiólogo comparte el QR o enlace',
        desc: 'Envía el código QR o enlace con token de un solo uso por WhatsApp o correo antes de la primera evaluación.',
        badge: 'Token único',
    },
    {
        step: 2,
        icon: Smartphone,
        title: 'El paciente responde desde su celular',
        desc: 'Completa con calma el formulario de 14 páginas desde cualquier navegador móvil, sin descargar aplicaciones.',
        badge: 'Sin instalar apps',
    },
    {
        step: 3,
        icon: Brain,
        title: 'El algoritmo DSS estructura las alertas',
        desc: 'Al enviarse, el motor clínico destaca banderas rojas, factores psicosociales y sugiere escalas funcionales.',
        badge: 'Pre-análisis DSS',
    },
    {
        step: 4,
        icon: FileText,
        title: 'La ficha está lista antes de entrar al box',
        desc: 'Inicias la sesión revisando los hallazgos clave y dedicando el tiempo presencial al examen físico y tratamiento.',
        badge: 'Listo al llegar',
    },
]

/* ─── What the remote form captures ─── */
const formFields = [
    { icon: User, label: 'Datos personales, RUT/pasaporte y contacto' },
    { icon: MapPin, label: 'Motivo de consulta, mapa corporal e intensidad EVA/ENA' },
    { icon: ClipboardList, label: 'Antecedentes médicos, farmacológicos y cirugías previas' },
    { icon: Clock, label: 'Comportamiento del síntoma: inicio, duración y evolución' },
    { icon: MessageSquare, label: 'Hábitos de sueño, actividad física y estilo de vida' },
    { icon: AlertCircle, label: 'Tamizaje de banderas rojas y comorbilidades relevantes' },
    { icon: Brain, label: 'Factores psicosociales, expectativas y objetivos de recuperación' },
    { icon: Zap, label: 'Consentimiento informado electrónico con registro de fecha e IP' },
]

const qrSpecs = [
    {
        value: '14 págs.',
        label: 'Cuestionario estructurado',
    },
    {
        value: '8 áreas',
        label: 'Biopsicosocial y banderas rojas',
    },
    {
        value: 'Sin apps',
        label: 'Navegador móvil con token único',
    },
]

export function QRAdmission() {
    const [activeStep, setActiveStep] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)
        const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        if (isPaused || prefersReducedMotion) return
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % steps.length)
        }, 3500)
        return () => clearInterval(interval)
    }, [isPaused, prefersReducedMotion])

    return (
        <section
            id="admision-remota"
            className="py-20 md:py-28 px-6 bg-background"
            aria-labelledby="qr-heading"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <h2
                        id="qr-heading"
                        className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance"
                    >
                        Admisión remota por QR:{' '}
                        <span className="text-brand">tu paciente llega con la anamnesis lista</span>
                    </h2>
                    <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                        El paciente completa su historia clínica desde el celular antes de asistir a la consulta,
                        el motor DSS pre-analiza las respuestas y tú dedicas la primera sesión a{' '}
                        <strong className="text-foreground">evaluar físicamente, explicar el diagnóstico y tratar.</strong>
                    </p>
                </div>

                {/* Steps — 4 interactive cards */}
                <div
                    className="mb-14"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocusCapture={() => setIsPaused(true)}
                    onBlurCapture={() => setIsPaused(false)}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {steps.map((s, i) => {
                            const Icon = s.icon
                            const isActive = activeStep === i
                            return (
                                <button
                                    key={s.step}
                                    type="button"
                                    onClick={() => setActiveStep(i)}
                                    aria-pressed={isActive}
                                    className={`group relative p-6 rounded-2xl border text-left cursor-pointer transition-all duration-200 ${isActive
                                        ? 'bg-card border-brand shadow-sm ring-1 ring-brand/20'
                                        : 'bg-card border-border hover:border-brand/40 shadow-2xs'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-brand text-white' : 'bg-brand/10 border border-brand/20 text-brand'}`}>
                                            <Icon size={20} aria-hidden="true" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-foreground-subtle">
                                            PASO 0{s.step}
                                        </span>
                                    </div>

                                    <div className="inline-block text-[10px] font-bold text-brand bg-brand/8 border border-brand/15 rounded-full px-2.5 py-0.5 mb-2.5">
                                        {s.badge}
                                    </div>
                                    <h3 className="font-display font-bold text-foreground text-base mb-1.5 leading-snug">{s.title}</h3>
                                    <p className="text-xs text-foreground-muted leading-relaxed">{s.desc}</p>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Two-column layout: Form fields checklist + Real Product Screenshots */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left (6 cols): 8 areas captured */}
                    <div className="lg:col-span-6 bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-2xs">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                            <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                                <ClipboardList size={18} className="text-brand" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-foreground text-base">¿Qué captura el formulario remoto de 14 páginas?</h3>
                                <p className="text-xs text-foreground-muted">Información estructurada antes de que el paciente ingrese al box</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            {formFields.map((field) => {
                                const Icon = field.icon
                                return (
                                    <div
                                        key={field.label}
                                        className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border/60"
                                    >
                                        <Icon size={16} className="text-brand flex-shrink-0" aria-hidden="true" />
                                        <p className="text-sm text-foreground">{field.label}</p>
                                        <CheckCircle2 size={14} className="text-emerald ml-auto flex-shrink-0" aria-hidden="true" />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-surface border border-border">
                            <p className="text-xs text-foreground-muted leading-relaxed">
                                <strong className="text-foreground">Resultado clínico:</strong> La primera sesión comienza con los antecedentes ya estructurados y las alertas identificadas, liberando tiempo presencial para el examen físico y el plan terapéutico.
                            </p>
                        </div>
                    </div>

                    {/* Right (6 cols): Real software screenshots (Desktop Remote Forms + Mobile Patient View) */}
                    <div className="lg:col-span-6 flex flex-col gap-5">

                        {/* Real screenshot #1: Gestión de Formularios Remotos */}
                        <div className="rounded-2xl border border-border bg-card p-5 shadow-2xs">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <h3 className="font-display font-bold text-base text-foreground">
                                        Panel de envío y control de vigencia
                                    </h3>
                                    <p className="text-xs text-foreground-muted">
                                        Genera enlaces con expiración automática y monitorea quién ya completó su ficha
                                    </p>
                                </div>
                                <span className="text-[11px] font-semibold text-brand bg-brand/10 px-2.5 py-0.5 rounded-full shrink-0">
                                    Vista del Clínico
                                </span>
                            </div>
                            <div className="rounded-xl border border-border/80 bg-surface overflow-hidden">
                                <img
                                    src="/software/formulario_remoto.png"
                                    alt="Panel de Formularios Remotos en Kenkomed mostrando generación de enlace y estado de envíos"
                                    width={640}
                                    height={260}
                                    loading="lazy"
                                    className="w-full h-auto object-cover object-top"
                                />
                            </div>
                        </div>

                        {/* Real screenshot #2: Vista móvil del paciente + Especificaciones */}
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-stretch">
                            <div className="sm:col-span-7 rounded-2xl border border-border bg-card p-5 shadow-2xs flex flex-col justify-between">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold text-foreground">Mapa de dolor en celular</span>
                                    <span className="text-[10px] font-semibold text-emerald bg-emerald/10 px-2 py-0.5 rounded-full">
                                        Vista Paciente
                                    </span>
                                </div>
                                <div className="rounded-xl border border-border/80 bg-surface overflow-hidden h-44">
                                    <img
                                        src="/software/anamnesisphone_clean.png"
                                        alt="Formulario móvil de anamnesis y mapa corporal del paciente en Kenkomed"
                                        width={320}
                                        height={240}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-5 flex flex-col justify-between gap-3">
                                {qrSpecs.map((spec) => (
                                    <div
                                        key={spec.label}
                                        className="p-4 rounded-2xl bg-card border border-border shadow-2xs flex-1 flex flex-col justify-center"
                                    >
                                        <p className="font-display font-extrabold text-2xl text-foreground">{spec.value}</p>
                                        <p className="text-xs text-foreground-muted mt-0.5">{spec.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA matching Home page button style */}
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
                        >
                            Agendar demo gratuita
                            <ArrowRight size={15} aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
