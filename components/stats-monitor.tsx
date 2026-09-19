'use client'

import { useEffect, useRef, useState } from 'react'
import {
    Users,
    Clock,
    BarChart3,
    CalendarCheck,
    CheckSquare,
    TrendingUp,
    Activity,
    Zap,
    ArrowUp,
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

/* ─── Fake animated bar chart data ─── */
const weeklyData = [62, 75, 58, 80, 91, 74, 88]
const weekDays = ['L', 'M', 'X', 'J', 'V', 'S', 'D']

/* ─── KPI Cards ─── */
const kpis = [
    {
        icon: Users,
        color: 'bg-blue-50 text-blue-600',
        border: 'border-blue-100',
        label: 'Pacientes activos',
        value: '124',
        trend: '+12% este mes',
        trendUp: true,
    },
    {
        icon: Clock,
        color: 'bg-teal-50 text-teal-600',
        border: 'border-teal-100',
        label: 'Tiempo promedio sesión',
        value: '47 min',
        trend: '-8 min vs anterior',
        trendUp: true,
    },
    {
        icon: CalendarCheck,
        color: 'bg-emerald-50 text-emerald-600',
        border: 'border-emerald-100',
        label: 'Próximas citas (7 días)',
        value: '38',
        trend: '100% confirmadas',
        trendUp: true,
    },
    {
        icon: CheckSquare,
        color: 'bg-purple-50 text-purple-600',
        border: 'border-purple-100',
        label: 'Cuestionarios completados',
        value: '97%',
        trend: '+5% vs mes anterior',
        trendUp: true,
    },
]

/* ─── Sparkline mini chart (pure CSS/SVG inline) ─── */
function MiniSparkline({ data, color }: { data: number[]; color: string }) {
    const max = Math.max(...data)
    const min = Math.min(...data)
    const range = max - min || 1
    const w = 120, h = 36
    const pts = data.map((v, i) => {
        const x = (i / (data.length - 1)) * w
        const y = h - ((v - min) / range) * h
        return `${x},${y}`
    }).join(' ')
    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
            <polyline
                points={pts}
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Last point dot */}
            {(() => {
                const last = data[data.length - 1]
                const x = w
                const y = h - ((last - min) / range) * h
                return <circle cx={x} cy={y} r="3" fill={color} />
            })()}
        </svg>
    )
}

export function StatsMonitor() {
    const headerSection = useReveal()
    const kpiSection = useReveal()
    const chartSection = useReveal()
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        if (chartSection.visible && !animated) {
            setAnimated(true)
        }
    }, [chartSection.visible, animated])

    return (
        <section
            id="monitoreo"
            className="py-28 md:py-36 bg-background relative overflow-hidden"
            aria-labelledby="stats-heading"
        >
            {/* Background grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.025]" aria-hidden="true"
                style={{ backgroundImage: 'linear-gradient(oklch(0.48 0.18 246) 1px, transparent 1px), linear-gradient(90deg, oklch(0.48 0.18 246) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerSection.ref} className={`max-w-3xl mx-auto text-center mb-20 scroll-reveal ${headerSection.visible ? 'is-visible' : ''}`}>
                    <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                        Panel de Monitoreo
                    </span>
                    <h2
                        id="stats-heading"
                        className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
                    >
                        Tu clínica, en{' '}
                        <span className="text-gradient">tiempo real.</span>
                    </h2>
                    <p className="text-lg text-foreground-muted leading-relaxed">
                        Kenkomed te da visibilidad total de lo que ocurre en tu centro —
                        pacientes, tiempos, cuestionarios y citas — en un solo vistazo.
                    </p>
                </div>

                {/* KPI Cards */}
                <div ref={kpiSection.ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                    {kpis.map((kpi, i) => {
                        const Icon = kpi.icon
                        return (
                            <div key={i}
                                className={`group p-6 rounded-2xl bg-card border ${kpi.border} hover:shadow-lg transition-all duration-300 scroll-reveal stagger-${i + 1} ${kpiSection.visible ? 'is-visible' : ''}`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-10 h-10 rounded-xl ${kpi.color} flex items-center justify-center`}>
                                        <Icon size={18} />
                                    </div>
                                    {kpi.trendUp && (
                                        <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium bg-emerald-50 rounded-full px-2 py-0.5">
                                            <ArrowUp size={10} />
                                            <span>↑</span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs text-foreground-muted mb-1 font-medium">{kpi.label}</p>
                                <p className="font-display font-bold text-3xl text-foreground mb-2">{kpi.value}</p>
                                <p className="text-xs text-emerald-600 font-medium">{kpi.trend}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Chart + sidebar */}
                <div ref={chartSection.ref} className={`grid grid-cols-1 lg:grid-cols-3 gap-6 scroll-reveal ${chartSection.visible ? 'is-visible' : ''}`}>

                    {/* Bar chart — sesiones por día */}
                    <div className="lg:col-span-2 bg-card border border-border/60 rounded-3xl p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="font-semibold text-foreground text-sm">Tendencia de Sesiones</p>
                                <p className="text-xs text-foreground-muted">Cuestionarios completados esta semana</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-teal-600 bg-teal-50 border border-teal-100 rounded-full px-3 py-1 font-medium">
                                <TrendingUp size={12} />
                                +14% vs semana anterior
                            </div>
                        </div>

                        {/* Bars */}
                        <div className="flex items-end gap-3 h-40">
                            {weeklyData.map((val, i) => {
                                const height = animated ? `${(val / 100) * 100}%` : '0%'
                                const isToday = i === 4 // Friday
                                return (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                        <p className="text-[10px] font-medium text-foreground-muted">{val}</p>
                                        <div className="w-full flex items-end" style={{ height: '112px' }}>
                                            <div
                                                className={`w-full rounded-t-lg transition-all duration-700 ease-out ${isToday ? 'bg-brand' : 'bg-teal-200 dark:bg-teal-800/50'}`}
                                                style={{
                                                    height: animated ? `${(val / 100) * 112}px` : '0px',
                                                    transitionDelay: `${i * 80}ms`,
                                                }}
                                            />
                                        </div>
                                        <p className={`text-[11px] font-semibold ${isToday ? 'text-brand' : 'text-foreground-muted'}`}>{weekDays[i]}</p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Mini sparklines row */}
                        <div className="mt-8 pt-6 border-t border-border/40 grid grid-cols-3 gap-4">
                            {[
                                { label: 'EVA promedio', data: [6.2, 5.8, 5.1, 4.7, 4.2, 3.9, 3.4], color: '#0ea5e9' },
                                { label: 'Adherencia', data: [71, 74, 78, 80, 82, 85, 88], color: '#10b981' },
                                { label: 'Satisfacción', data: [82, 84, 81, 86, 88, 87, 91], color: '#8b5cf6' },
                            ].map((spark, i) => (
                                <div key={i} className="text-center">
                                    <MiniSparkline data={spark.data} color={spark.color} />
                                    <p className="text-[10px] text-foreground-muted mt-1 font-medium">{spark.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar — quick stats */}
                    <div className="flex flex-col gap-4">
                        {/* Próximas citas list */}
                        <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                <CalendarCheck size={16} className="text-brand" />
                                <p className="font-semibold text-foreground text-sm">Próximas Citas</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                {[
                                    { name: 'María González', time: '09:00', scale: 'EVA', color: 'bg-teal-100 text-teal-700' },
                                    { name: 'Carlos Pérez', time: '10:30', scale: 'PSFS', color: 'bg-blue-100 text-blue-700' },
                                    { name: 'Ana Torres', time: '11:45', scale: 'Barthel', color: 'bg-purple-100 text-purple-700' },
                                    { name: 'Luis Ramírez', time: '14:00', scale: 'Oswestry', color: 'bg-amber-100 text-amber-700' },
                                ].map((appt, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-surface hover:bg-teal-50/30 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                                            <span className="text-[10px] font-bold text-brand">{appt.name.charAt(0)}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs font-semibold text-foreground truncate">{appt.name}</p>
                                            <p className="text-[10px] text-foreground-muted">{appt.time}</p>
                                        </div>
                                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${appt.color}`}>{appt.scale}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Estado cuestionarios */}
                        <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <Activity size={16} className="text-brand" />
                                <p className="font-semibold text-foreground text-sm">Estado de Evaluaciones</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                {[
                                    { label: 'Completas', pct: 97, color: 'bg-emerald-500' },
                                    { label: 'Pendientes', pct: 2, color: 'bg-amber-400' },
                                    { label: 'Vencidas', pct: 1, color: 'bg-rose-400' },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between mb-1">
                                            <p className="text-[11px] text-foreground-muted font-medium">{item.label}</p>
                                            <p className="text-[11px] font-bold text-foreground">{item.pct}%</p>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                                                style={{ width: chartSection.visible ? `${item.pct}%` : '0%', transitionDelay: `${i * 200}ms` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom note */}
                <div className={`mt-8 text-center scroll-reveal stagger-3 ${chartSection.visible ? 'is-visible' : ''}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 mb-3">
                        <span className="text-xs font-semibold text-amber-700">📊 Datos de ejemplo — no representan métricas reales de una clínica</span>
                    </div>
                    <p className="text-sm text-foreground-muted">
                        <span className="inline-flex items-center gap-1.5"><Zap size={12} className="text-brand" /> Datos actualizados en tiempo real en tu panel</span>
                        {' — '}
                        Disponible desde cualquier dispositivo
                    </p>
                </div>
            </div>
        </section>
    )
}
