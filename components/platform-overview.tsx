'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SectionEyebrow } from '@/components/brand-elements'
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
    CalendarCheck,
    Wallet,
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
    { icon: CalendarCheck, text: 'Agendamiento Online & Multi-Box inteligente', detail: 'Tus pacientes reservan por internet con tu logo y es imposible que dos citas se topen.' },
    { icon: Dumbbell,      text: 'Pautas de ejercicios en casa por WhatsApp',     detail: 'Ejercicios con fotos e indicaciones claras, enviadas directo al WhatsApp del paciente en 1 clic.' },
    { icon: ClipboardList, text: '13 escalas clínicas validadas internacionalmente', detail: 'Oswestry, LEFS, WOMAC, QuickDASH, Berg, TUG, Tinetti, EVA, PSFS, Barthel y más (se calculan solas).' },
    { icon: Brain,         text: 'Sistema inteligente de apoyo a decisiones (DSS)', detail: 'Detecta banderas rojas, síntomas de alarma y genera el informe de evaluación al instante.' },
    { icon: FileText,      text: 'Ficha kinésica y ciclos de tratamiento',          detail: 'Evoluciones rápidas en formato SOAP y altas médicas con gráficos que demuestran la mejoría.' },
    { icon: QrCode,        text: 'Admisión remota vía QR — formulario de 14 páginas', detail: 'El paciente completa antecedentes, dolor y estilo de vida desde su celular antes de entrar al box.' },
    { icon: Wallet,        text: 'Control de pagos y paquetes de sesiones',        detail: 'Registro de ingresos, control de deudas y descuento automático de sesiones por asistencia.' },
    { icon: ShieldCheck,   text: 'Fichas 100% legales y protegidas en Chile',     detail: 'Cumple con la ley chilena de ficha médica y privacidad, con bloqueo automático de pantalla.' },
    { icon: Network,       text: 'Multiclínica y roles: Director, Kine y Recepción', detail: 'Pacientes y agendas separados por centro, cambio de sede con 1 clic y permisos claros.' },
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
            className="py-28 md:py-36 kenko-band-mist relative overflow-hidden"
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
                    <SectionEyebrow>La Plataforma</SectionEyebrow>
                    <h2
                        id="platform-heading"
                        className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
                    >
                        Una plataforma integral.{' '}
                        <span className="text-gradient">Cero compromisos.</span>
                    </h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        Plataforma de <strong className="text-foreground">software para kinesiólogos y fisioterapeutas en Chile</strong>:
                        gestión de pacientes, sistema DSS, admisión QR y reportes clínicos que cubren{' '}
                        <strong className="text-foreground">todo el ciclo del paciente</strong> — desde el primer contacto hasta el alta.
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
                                    <p className="text-xs text-foreground-muted">Ecosistema clínico integral, listo para usar</p>
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
                                <p className="font-display font-bold text-4xl text-teal-700 mb-1">13</p>
                                <p className="text-xs text-teal-700/80 font-medium">Escalas clínicas validadas</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200/60 text-center">
                                <p className="font-display font-bold text-4xl text-blue-700 mb-1">0%</p>
                                <p className="text-xs text-blue-700/80 font-medium">Sobrecupos (bloqueo atómico)</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-purple-50 border border-purple-200/60 text-center">
                                <p className="font-display font-bold text-4xl text-purple-700 mb-1">QR</p>
                                <p className="text-xs text-purple-700/80 font-medium">Admisión remota sin papel</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-center">
                                <p className="font-display font-bold text-4xl text-emerald-700 mb-1">100%</p>
                                <p className="text-xs text-emerald-700/80 font-medium">Ley 21.719 y 20.584</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link href="/solucion"
                            className="group justify-center btn-kenko-primary">
                            Ver validación completa
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
