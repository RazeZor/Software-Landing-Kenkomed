'use client'

import {
    CheckCircle2,
    Stethoscope,
    Dumbbell,
    Building2,
    User,
    Hospital,
    QrCode,
    FileText,
    ShieldCheck,
    Network,
    ClipboardList,
    Brain,
    CalendarCheck,
    Wallet,
} from 'lucide-react'

const capabilities = [
    {
        icon: QrCode,
        tag: 'Admisión digital',
        text: 'Admisión remota vía QR (14 páginas)',
        detail: 'El paciente responde antecedentes, mapa de dolor y estilo de vida desde su teléfono antes de asistir a la primera consulta.',
    },
    {
        icon: ClipboardList,
        tag: 'Evidencia clínica',
        text: '13 escalas validadas internacionalmente',
        detail: 'Oswestry, LEFS, WOMAC, QuickDASH, Berg, TUG, Tinetti, EVA, PSFS, Barthel y más con puntaje e interpretación automática.',
    },
    {
        icon: Brain,
        tag: 'Algoritmo DSS',
        text: 'Soporte a decisiones clínicas (DSS)',
        detail: 'Evalúa banderas rojas, factores de riesgo biopsicosociales y estructura el informe de evaluación inicial sin duplicar escritura.',
    },
    {
        icon: FileText,
        tag: 'Registro clínico',
        text: 'Ficha kinésica SOAP y ciclos de atención',
        detail: 'Evoluciones estructuradas por episodio patológico y cierre de ciclo con deltas funcionales pre y post tratamiento.',
    },
    {
        icon: Dumbbell,
        tag: 'WhatsApp / PDF',
        text: 'Pautas de ejercicios en casa en 1 clic',
        detail: 'Prescripción por región anatómica con series, repeticiones y carga, enviada en PDF membretado al WhatsApp del paciente.',
    },
    {
        icon: CalendarCheck,
        tag: 'Multi-Box',
        text: 'Agendamiento Online & Multi-Box',
        detail: 'Portal de reservas con la imagen de tu centro, capacidad simultánea por box/gimnasio y bloqueo transaccional en base de datos.',
    },
    {
        icon: Wallet,
        tag: 'Gestión comercial',
        text: 'Control de pagos y paquetes de sesiones',
        detail: 'Registro de ingresos, seguimiento de saldos pendientes y descuento automático de sesiones por asistencia.',
    },
    {
        icon: ShieldCheck,
        tag: 'Ley 20.584 / 21.719',
        text: 'Trazabilidad clínica y resguardo normativo',
        detail: 'Arquitectura alineada con la normativa chilena de datos en salud, registro inmutable de auditoría y bloqueo por inactividad en box.',
    },
    {
        icon: Network,
        tag: 'Escalabilidad',
        text: 'Multiclínica y roles diferenciados (RBAC)',
        detail: 'Separación estricta de fichas por centro, cambio de sede en 1 clic y perfil de recepción sin acceso a notas clínicas sensibles.',
    },
]

const idealFor = [
    { icon: User, label: 'Kinesiólogos independientes' },
    { icon: Stethoscope, label: 'Fisioterapeutas' },
    { icon: Building2, label: 'Clínicas de rehabilitación' },
    { icon: Dumbbell, label: 'Centros de medicina deportiva' },
    { icon: Hospital, label: 'Kinesiología hospitalaria' },
]

export function PlatformOverview() {
    return (
        <section
            id="plataforma"
            className="py-20 md:py-28 px-6 bg-surface/60 border-b border-border/60"
            aria-labelledby="platform-heading"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <h2
                        id="platform-heading"
                        className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance"
                    >
                        9 pilares conectados en un{' '}
                        <span className="text-brand">mismo entorno clínico</span>
                    </h2>
                    <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                        Sin planillas paralelas ni transcripciones manuales: cada módulo alimenta automáticamente la ficha clínica y los reportes del paciente.
                    </p>
                </div>

                {/* 3x3 Bento Grid matching the Home page card style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    {capabilities.map((cap) => {
                        const Icon = cap.icon
                        return (
                            <div
                                key={cap.text}
                                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-2xs hover:border-brand/35 transition-colors"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <span className="text-[11px] font-semibold text-brand bg-brand/8 border border-brand/15 px-2.5 py-0.5 rounded-full">
                                            {cap.tag}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-foreground mb-2 leading-snug">
                                        {cap.text}
                                    </h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed">
                                        {cap.detail}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Strip horizontal: Entornos clínicos donde opera Kenkomed */}
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-2xs">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                        <div>
                            <h3 className="font-display font-bold text-base text-foreground">
                                Adaptable a distintos entornos de atención kinésica
                            </h3>
                            <p className="text-xs text-foreground-muted mt-0.5">
                                Configurable desde consulta particular o atención domiciliaria hasta centros con múltiples sedes y boxes
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5">
                            {idealFor.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div
                                        key={item.label}
                                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface border border-border text-xs font-medium text-foreground"
                                    >
                                        <Icon size={14} className="text-brand shrink-0" aria-hidden="true" />
                                        <span>{item.label}</span>
                                        <CheckCircle2 size={13} className="text-emerald shrink-0" aria-hidden="true" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
