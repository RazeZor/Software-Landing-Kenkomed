'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
    CheckCircle2,
    ArrowRight,
    Stethoscope,
    Dumbbell,
    Building2,
    User,
    Hospital,
    Layers,
    Zap,
    QrCode,
    FileText,
    TrendingUp,
    ShieldCheck,
    Network,
    ClipboardList,
    Brain,
} from 'lucide-react'

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

const capabilities = [
    { icon: Zap,          text: 'Automatiza todo el ciclo de vida del paciente',      detail: 'Desde la admisión remota hasta el alta, sin papel ni fricción.' },
    { icon: ClipboardList,text: '8 escalas clínicas validadas internacionalmente',       detail: 'PSFS, GROC, EQ-5D, Barthel, Screening, ENA, Oswestry y LEFS.' },
    { icon: Brain,        text: 'Sistema inteligente de apoyo a decisiones (DSS)',     detail: 'Alertas en tiempo real y recomendaciones basadas en evidencia.' },
    { icon: QrCode,       text: 'Admisión remota via QR — formulario de 14 páginas', detail: 'El paciente completa la anamnesis completa desde casa antes de llegar.' },
    { icon: FileText,     text: 'Fichas clínicas y sesiones de kinesiología',          detail: 'Sesión inicial, seguimiento y alta. Todo estructurado y consultable.' },
    { icon: TrendingUp,   text: 'Seguimiento de evolución y outcomes clínicos',       detail: 'Gráficos interactivos de progreso sesión a sesión con historial.' },
    { icon: Layers,       text: 'Prescripciones médicas con renderizado para impresión', detail: 'Crea, edita, elimina y renderiza recetas médicas directamente.' },
    { icon: ShieldCheck,  text: 'Control de roles: Admin vs Clínico Regular',           detail: 'Admin accede a todo. Clínico solo a sus pacientes asignados.' },
    { icon: Network,      text: 'Escala desde practitioner hasta redes de clínicas',    detail: 'Un profesional independiente o múltiples sedes — mismo sistema.' },
]

const idealFor = [
    { icon: User, label: 'Kinesiólogos independientes' },
    { icon: Stethoscope, label: 'Fisioterapeutas' },
    { icon: Building2, label: 'Clínicas de rehabilitación' },
    { icon: Dumbbell, label: 'Medicina deportiva' },
    { icon: Hospital, label: 'Servicios de kinesiología hospitalaria' },
]

export function PlatformOverview() {
    const headerSection = useReveal()
    const listSection = useReveal()
    const idealSection = useReveal()

    return (
        <section
            id="plataforma"
            className="py-28 md:py-36 bg-surface relative overflow-hidden"
            aria-labelledby="platform-heading"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.05]"
                    style={{ background: 'radial-gradient(circle, oklch(0.66 0.18 163), transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.04]"
                    style={{ background: 'radial-gradient(circle, oklch(0.48 0.18 246), transparent 70%)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerSection.ref} className={`max-w-3xl mx-auto text-center mb-20 scroll-reveal ${headerSection.visible ? 'is-visible' : ''}`}>
                    <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                        La Plataforma
                    </span>
                    <h2
                        id="platform-heading"
                        className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
                    >
                        Una plataforma integral.{' '}
                        <span className="text-gradient">Cero compromisos.</span>
                    </h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        Kenkomed es la solución de gestión clínica especializada en kinesiología que
                        cubre <strong className="text-foreground">todo el ciclo del paciente</strong> — desde el primer contacto remoto hasta el alta.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16">

                    {/* Left: Capability checklist */}
                    <div ref={listSection.ref} className={`scroll-reveal ${listSection.visible ? 'is-visible' : ''}`}>
                        <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center">
                                    <CheckCircle2 size={20} className="text-brand" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm">Kenkomed incluye</p>
                                    <p className="text-xs text-foreground-muted">9 capacidades core, listas para usar</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                {capabilities.map((cap, i) => {
                                    const Icon = cap.icon
                                    return (
                                        <div key={i}
                                            className={`flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-200 scroll-reveal stagger-${(i % 6) + 1} ${listSection.visible ? 'is-visible' : ''}`}>
                                            <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Icon size={16} className="text-brand" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground text-sm leading-snug">{cap.text}</p>
                                                <p className="text-xs text-foreground-muted mt-0.5 leading-relaxed">{cap.detail}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right: Ideal for + visual summary */}
                    <div ref={idealSection.ref} className={`flex flex-col gap-6 scroll-reveal stagger-2 ${idealSection.visible ? 'is-visible' : ''}`}>

                        {/* Ideal for card */}
                        <div className="bg-card border border-border/60 rounded-3xl p-8 shadow-sm">
                            <p className="text-xs font-bold text-brand tracking-widest uppercase mb-6">Ideal para</p>
                            <div className="flex flex-col gap-3">
                                {idealFor.map((item, i) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-teal-50/50 transition-colors duration-200">
                                            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                <Icon size={16} className="text-blue-600" />
                                            </div>
                                            <p className="text-sm font-medium text-foreground">{item.label}</p>
                                            <CheckCircle2 size={14} className="text-teal-500 ml-auto" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Highlight metric boxes */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200/60 text-center">
                                <p className="font-display font-bold text-4xl text-teal-700 mb-1">8</p>
                                <p className="text-xs text-teal-700/80 font-medium">Escalas clínicas validadas</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200/60 text-center">
                                <p className="font-display font-bold text-4xl text-blue-700 mb-1">QR</p>
                                <p className="text-xs text-blue-700/80 font-medium">Admisión remota sin papel</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200/60 text-center">
                                <p className="font-display font-bold text-4xl text-purple-700 mb-1">DSS</p>
                                <p className="text-xs text-purple-700/80 font-medium">Apoyo a decisión inteligente</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-center">
                                <p className="font-display font-bold text-4xl text-emerald-700 mb-1">∞</p>
                                <p className="text-xs text-emerald-700/80 font-medium">Escala con tu clínica</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link href="/solucion"
                            className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5">
                            Ver validación completa
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
