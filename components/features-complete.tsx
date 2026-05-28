'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
    CheckCircle2,
    ArrowRight,
    QrCode,
    Brain,
    FileText,
    BarChart3,
    ClipboardList,
    Stethoscope,
    Shield,
    Calendar,
    Users,
    Activity,
    Pill,
    StickyNote,
    Lock,
    Smartphone,
    ChevronDown,
    ChevronUp,
    Star,
    UserCheck,
} from 'lucide-react'

function useReveal() {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
            { threshold: 0.06 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return { ref, visible }
}

/* ─── Feature categories ─── */
const clinicianGroups = [
    {
        icon: Lock,
        color: 'bg-slate-50 text-slate-600',
        accent: 'border-slate-200',
        title: 'Autenticación y Acceso',
        count: 4,
        features: [
            'Iniciar sesión con RUT y contraseña',
            'Opción "Recordarme" por 30 días',
            'Cerrar sesión seguro',
            'Ver y gestionar perfil clínico',
        ],
    },
    {
        icon: Users,
        color: 'bg-blue-50 text-blue-600',
        accent: 'border-blue-200',
        title: 'Gestión de Clinicians',
        count: 4,
        features: [
            'Agregar nuevo clínico (Admin exclusivo)',
            'Ver lista completa de clinicians',
            'Editar datos del clínico',
            'Validación de rol administrador del sistema',
        ],
    },
    {
        icon: UserCheck,
        color: 'bg-teal-50 text-teal-600',
        accent: 'border-teal-200',
        title: 'Gestión de Pacientes',
        count: 5,
        features: [
            'Agregar paciente (manual o remoto vía QR)',
            'Ver lista de todos sus pacientes',
            'Editar información del paciente',
            'Eliminar paciente en cascada (todo relacionado)',
            'Visualizar historial clínico completo',
        ],
    },
    {
        icon: QrCode,
        color: 'bg-indigo-50 text-indigo-600',
        accent: 'border-indigo-200',
        title: 'Formulario Clínico Inicial — 14 páginas',
        count: 4,
        badge: 'Exclusivo',
        features: [
            'Crear anamnesis inicial completa de 14 páginas',
            'Editar anamnesis ya completada',
            'Generar token QR para admisión remota del paciente',
            'Ver y descargar QR generado en PNG',
        ],
    },
    {
        icon: Activity,
        color: 'bg-emerald-50 text-emerald-600',
        accent: 'border-emerald-200',
        title: 'Sesiones de Kinesiología',
        count: 6,
        features: [
            'Crear primera sesión (evaluación inicial comprensiva)',
            'Crear sesiones de seguimiento',
            'Crear sesión final (alta del paciente)',
            'Ver lista completa de sesiones del paciente',
            'Ver detalles de una sesión específica',
            'Editar sesión existente',
        ],
    },
    {
        icon: ClipboardList,
        color: 'bg-purple-50 text-purple-600',
        accent: 'border-purple-200',
        title: 'Cuestionarios Clínicos — 8 escalas',
        count: 8,
        badge: '8 escalas',
        features: [
            'PSFS — Escala Funcional Específica del Paciente',
            'GROC — Calificación Global de Cambio',
            'EQ-5D — Calidad de Vida Euroquol',
            'Barthel — Índice de Independencia Funcional',
            'Screening — Evaluación de Riesgos y Comorbilidades',
            'ENA — Evaluación Nutricional Abreviada',
            'Oswestry / ODI — Discapacidad Lumbar',
            'LEFS — Funcionalidad de Extremidad Inferior',
        ],
    },
    {
        icon: Pill,
        color: 'bg-rose-50 text-rose-600',
        accent: 'border-rose-200',
        title: 'Prescripciones Médicas',
        count: 5,
        features: [
            'Crear receta médica para paciente',
            'Visualizar receta existente',
            'Editar receta médica',
            'Eliminar receta médica',
            'Renderizar receta para impresión directa',
        ],
    },
    {
        icon: FileText,
        color: 'bg-amber-50 text-amber-600',
        accent: 'border-amber-200',
        title: 'Reportes e Informes',
        count: 4,
        features: [
            'Generar informe de anamnesis con análisis DSS',
            'Generar ficha clínica integral del paciente',
            'Ver informe completo del paciente',
            'Visualizar anamnesis con interpretaciones clínicas',
        ],
    },
    {
        icon: BarChart3,
        color: 'bg-cyan-50 text-cyan-600',
        accent: 'border-cyan-200',
        title: 'Dashboard Principal',
        count: 3,
        features: [
            'Panel de control con 8 próximas citas agendadas',
            'Ver estadísticas del clinician en tiempo real',
            'Acceso rápido a historiales clínicos',
        ],
    },
    {
        icon: Calendar,
        color: 'bg-orange-50 text-orange-600',
        accent: 'border-orange-200',
        title: 'Reservas y Citas',
        count: 3,
        features: [
            'Crear reserva / cita con paciente',
            'Ver próximas citas agendadas',
            'Cambiar estado de cita (Pendiente / Confirmada / Cancelada)',
        ],
    },
    {
        icon: StickyNote,
        color: 'bg-lime-50 text-lime-700',
        accent: 'border-lime-200',
        title: 'Notas Clínicas',
        count: 2,
        features: [
            'Agregar notas generales del paciente',
            'Editar notas clínicas',
        ],
    },
    {
        icon: Brain,
        color: 'bg-violet-50 text-violet-600',
        accent: 'border-violet-200',
        title: 'Sistema de Análisis DSS',
        count: 3,
        badge: 'IA Clínica',
        features: [
            'Generar Sistema de Apoyo a Decisiones (DSS)',
            'Ver interpretación automática de cuestionarios',
            'Visualizar gráficos de evolución del paciente',
        ],
    },
    {
        icon: Shield,
        color: 'bg-gray-50 text-gray-600',
        accent: 'border-gray-200',
        title: 'Control de Acceso por Roles',
        count: 2,
        features: [
            'Admin: Acceso a TODOS los pacientes y clinicians',
            'Clinician Regular: Acceso solo a sus pacientes asignados',
        ],
    },
]

const patientGroups = [
    {
        icon: QrCode,
        color: 'bg-blue-50 text-blue-600',
        accent: 'border-blue-200',
        title: 'Acceso Remoto — Token QR',
        count: 3,
        features: [
            'Escanear código QR generado por el clínico',
            'Acceder con token de admisión único',
            'Validación automática de token expirado',
        ],
    },
    {
        icon: ClipboardList,
        color: 'bg-teal-50 text-teal-600',
        accent: 'border-teal-200',
        title: 'Formulario Clínico — 14 páginas',
        count: 9,
        badge: '14 páginas',
        features: [
            'Completar anamnesis inicial completa desde casa',
            'Responder sobre dolor: ubicación, intensidad, características',
            'Ingresar comorbilidades y antecedentes médicos',
            'Registrar hábitos de sueño (horarios, despertares, duración)',
            'Ingresar estilo de vida (dieta, ejercicio, peso)',
            'Completar evaluación psicosocial (ánimo, ansiedad, apoyo social)',
            'Registrar uso de sustancias (nicotina, alcohol, drogas)',
            'Indicar motivación y objetivos en salud',
            'Consentimiento informado digital',
        ],
    },
    {
        icon: UserCheck,
        color: 'bg-purple-50 text-purple-600',
        accent: 'border-purple-200',
        title: 'Datos Personales',
        count: 2,
        features: [
            'Ver su perfil de paciente creado por el clínico',
            'Datos capturados automáticamente (RUT, nombre, contacto)',
        ],
    },
    {
        icon: FileText,
        color: 'bg-amber-50 text-amber-600',
        accent: 'border-amber-200',
        title: 'Historial del Paciente',
        count: 2,
        features: [
            'Sus sesiones kinésicas quedan registradas y accesibles',
            'Sus cuestionarios se almacenan con historial completo',
        ],
    },
]

/* ─── Collapsible group card ─── */
function GroupCard({
    group,
    index,
    visible,
    defaultOpen = false,
}: {
    group: typeof clinicianGroups[0]
    index: number
    visible: boolean
    defaultOpen?: boolean
}) {
    const [open, setOpen] = useState(defaultOpen)
    const Icon = group.icon

    return (
        <div
            className={`rounded-2xl border ${group.accent} bg-card overflow-hidden transition-all duration-300 hover:shadow-md scroll-reveal stagger-${(index % 6) + 1} ${visible ? 'is-visible' : ''}`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface/50 transition-colors"
                aria-expanded={open}
            >
                <div className={`w-10 h-10 rounded-xl ${group.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-foreground text-sm">{group.title}</p>
                        {group.badge && (
                            <span className="text-[10px] font-bold text-brand bg-teal-50 border border-teal-200 rounded-full px-2 py-0.5">
                                {group.badge}
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-foreground-muted mt-0.5">{group.count} funcionalidades</p>
                </div>
                <div className="flex-shrink-0 text-foreground-muted">
                    {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
            </button>

            {open && (
                <div className="px-5 pb-5 border-t border-border/40">
                    <div className="flex flex-col gap-2 pt-4">
                        {group.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 size={14} className="text-teal-500 flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-foreground-muted leading-relaxed">{feat}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export function FeaturesComplete() {
    const headerSection = useReveal()
    const statsSection  = useReveal()
    const clinSection   = useReveal()
    const patSection    = useReveal()

    const totalClinician = clinicianGroups.reduce((a, g) => a + g.count, 0)
    const totalPatient   = patientGroups.reduce((a, g)   => a + g.count, 0)

    return (
        <section
            id="funcionalidades"
            className="py-28 md:py-36 bg-surface relative overflow-hidden"
            aria-labelledby="features-complete-heading"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.025]" aria-hidden="true"
                style={{ backgroundImage: 'linear-gradient(oklch(0.48 0.18 246) 1px,transparent 1px),linear-gradient(90deg,oklch(0.48 0.18 246) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerSection.ref} className={`max-w-3xl mx-auto text-center mb-16 scroll-reveal ${headerSection.visible ? 'is-visible' : ''}`}>
                    <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                        Funcionalidades Completas
                    </span>
                    <h2
                        id="features-complete-heading"
                        className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
                    >
                        Todo lo que{' '}
                        <span className="text-gradient">Kenkomed hace por ti.</span>
                    </h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        Un sistema completo construido para la realidad del kinesiólogo chileno.
                        Cada funcionalidad fue diseñada con un propósito clínico concreto.
                    </p>
                </div>

                {/* Stats summary */}
                <div ref={statsSection.ref} className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 scroll-reveal ${statsSection.visible ? 'is-visible' : ''}`}>
                    {[
                        { value: `${totalClinician}+`, label: 'Funcionalidades para clínicos', color: 'bg-blue-50 border-blue-200 text-blue-700' },
                        { value: `${totalPatient}`,    label: 'Funcionalidades para pacientes', color: 'bg-teal-50 border-teal-200 text-teal-700' },
                        { value: '8',                  label: 'Escalas clínicas integradas',    color: 'bg-purple-50 border-purple-200 text-purple-700' },
                        { value: '14',                 label: 'Páginas de anamnesis remota',    color: 'bg-amber-50 border-amber-200 text-amber-700' },
                    ].map((s, i) => (
                        <div key={i} className={`rounded-2xl border ${s.color} p-5 text-center`}>
                            <p className="font-display font-bold text-4xl mb-1">{s.value}</p>
                            <p className="text-xs font-medium opacity-80 leading-snug">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Two columns: Clinicians + Patients */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* ── CLINICIANS ── */}
                    <div ref={clinSection.ref}>
                        <div className={`flex items-center gap-3 mb-6 scroll-reveal ${clinSection.visible ? 'is-visible' : ''}`}>
                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                                <Stethoscope size={18} className="text-blue-600" />
                            </div>
                            <div>
                                <p className="font-display font-bold text-xl text-foreground">Para Clínicos</p>
                                <p className="text-xs text-foreground-muted">{totalClinician} funcionalidades en {clinicianGroups.length} módulos</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {clinicianGroups.map((group, i) => (
                                <GroupCard
                                    key={i}
                                    group={group}
                                    index={i}
                                    visible={clinSection.visible}
                                    defaultOpen={i === 0}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── PATIENTS ── */}
                    <div ref={patSection.ref}>
                        <div className={`flex items-center gap-3 mb-6 scroll-reveal ${patSection.visible ? 'is-visible' : ''}`}>
                            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center">
                                <Smartphone size={18} className="text-teal-600" />
                            </div>
                            <div>
                                <p className="font-display font-bold text-xl text-foreground">Para Pacientes</p>
                                <p className="text-xs text-foreground-muted">{totalPatient} funcionalidades en {patientGroups.length} módulos</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-8">
                            {patientGroups.map((group, i) => (
                                <GroupCard
                                    key={i}
                                    group={group}
                                    index={i}
                                    visible={patSection.visible}
                                    defaultOpen={i === 0}
                                />
                            ))}
                        </div>

                        {/* Ideal para card */}
                        <div className="rounded-2xl border border-teal-200/60 bg-teal-50/50 p-6">
                            <p className="text-xs font-bold text-brand tracking-widest uppercase mb-4">Ideal para</p>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    'Kinesiólogos independientes',
                                    'Fisioterapeutas',
                                    'Clínicas de rehabilitación',
                                    'Centros de medicina deportiva',
                                    'Hospitales con servicio de kinesiología',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <CheckCircle2 size={14} className="text-teal-500 flex-shrink-0" />
                                        <p className="text-sm text-foreground-muted">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6">
                            <Link
                                href="/#contact"
                                className="group w-full inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
                            >
                                Quiero todo esto para mi clínica
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
