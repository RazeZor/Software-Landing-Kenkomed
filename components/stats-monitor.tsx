'use client'

import {
    Users,
    Clock,
    CalendarCheck,
    CheckSquare,
    ArrowUpRight,
    Brain,
    BarChart3,
} from 'lucide-react'

/* ─── KPI Cards ─── */
const kpis = [
    {
        icon: Users,
        label: 'Pacientes activos',
        value: 'Vista global',
        trend: 'Separado por sede y profesional',
    },
    {
        icon: Clock,
        label: 'Evolución longitudinal',
        value: 'Pre / Post',
        trend: 'Deltas funcionales por ciclo',
    },
    {
        icon: CalendarCheck,
        label: 'Ocupación Multi-Box',
        value: '1 a 3+ boxes',
        trend: 'Control de citas y asistencia',
    },
    {
        icon: CheckSquare,
        label: 'Escalas y tamizaje',
        value: '13 escalas',
        trend: 'Puntaje e interpretación automática',
    },
]

export function StatsMonitor() {
    return (
        <section
            id="monitoreo"
            className="py-20 md:py-28 px-6 bg-surface/60 border-y border-border/60"
            aria-labelledby="stats-heading"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <h2
                        id="stats-heading"
                        className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance"
                    >
                        Analítica clínica y motor DSS{' '}
                        <span className="text-brand">en tiempo real</span>
                    </h2>
                    <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                        Transforma las respuestas del paciente en gráficos clínicos interpretables, alertas de banderas rojas y métricas operativas para tu centro.
                    </p>
                </div>

                {/* 4 KPI summary cards matching Home page style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                    {kpis.map((kpi) => {
                        const Icon = kpi.icon
                        return (
                            <div
                                key={kpi.label}
                                className="p-6 rounded-2xl bg-card border border-border shadow-2xs"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center">
                                        <Icon size={18} aria-hidden="true" />
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald font-semibold bg-emerald/10 rounded-full px-2.5 py-0.5">
                                        <ArrowUpRight size={12} aria-hidden="true" />
                                        Integrado
                                    </span>
                                </div>
                                <p className="text-xs text-foreground-muted mb-1 font-medium">{kpi.label}</p>
                                <p className="font-display font-bold text-2xl text-foreground mb-1">{kpi.value}</p>
                                <p className="text-xs text-foreground-subtle">{kpi.trend}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Real Product Screenshots: DSS Results + Clinical Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                    {/* Left (6 cols): Análisis DSS y Banderas Rojas */}
                    <div className="lg:col-span-6 rounded-2xl border border-border bg-card p-6 shadow-2xs flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between gap-3 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center">
                                        <Brain size={18} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-base text-foreground">
                                            Motor de Soporte a la Decisión (DSS)
                                        </h3>
                                        <p className="text-xs text-foreground-muted">
                                            Clasificación automática de dolor, factores psicosociales y recomendaciones
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[11px] font-semibold text-brand bg-brand/8 border border-brand/15 px-2.5 py-0.5 rounded-full shrink-0">
                                    Algoritmo DSS
                                </span>
                            </div>

                            <div className="rounded-xl border border-border/80 bg-surface overflow-hidden">
                                <img
                                    src="/software/DSS.png"
                                    alt="Resultados del Análisis DSS en Kenkomed mostrando determinantes de salud, dolor nociceptivo y alerta psicosocial"
                                    width={680}
                                    height={480}
                                    loading="lazy"
                                    className="w-full h-80 object-cover object-top"
                                />
                            </div>
                        </div>

                        <p className="text-xs text-foreground-muted mt-4 pt-3 border-t border-border/60">
                            Destaca signos de alarma y sugiere cuestionarios complementarios según el perfil clínico ingresado por el paciente.
                        </p>
                    </div>

                    {/* Right (6 cols): Gráficos de Estado de Salud y Hábitos */}
                    <div className="lg:col-span-6 rounded-2xl border border-border bg-card p-6 shadow-2xs flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between gap-3 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald flex items-center justify-center">
                                        <BarChart3 size={18} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-base text-foreground">
                                            Estadísticas de cohorte y hábitos de vida
                                        </h3>
                                        <p className="text-xs text-foreground-muted">
                                            Distribución de comorbilidades, respuesta conductual al dolor y calidad del sueño
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[11px] font-semibold text-emerald bg-emerald/10 px-2.5 py-0.5 rounded-full shrink-0">
                                    Panel Estadístico
                                </span>
                            </div>

                            <div className="rounded-xl border border-border/80 bg-surface overflow-hidden">
                                <img
                                    src="/software/graficos_nuevo.png"
                                    alt="Gráficos estadísticos de Kenkomed mostrando distribución de comorbilidades, salud percibida y calidad del sueño"
                                    width={680}
                                    height={480}
                                    loading="lazy"
                                    className="w-full h-80 object-cover object-top"
                                />
                            </div>
                        </div>

                        <p className="text-xs text-foreground-muted mt-4 pt-3 border-t border-border/60">
                            Visualización agregada para directores de centro e individual por ficha para respaldar el alta kinésica con datos objetivos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
