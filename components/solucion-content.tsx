'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
    ArrowLeft,
    ArrowRight,
    FileText,
    Download,
    ExternalLink,
    Brain,
    Activity,
    Heart,
    ClipboardList,
    Stethoscope,
    BarChart3,
    Moon,
    Apple,
    Shield,
    ChevronRight,
    Zap,
    GraduationCap,
    CheckCircle2,
    XCircle,
    CircleDollarSign,
    BrainCircuit,
    AlertCircle,
    TrendingUp,
    Clock,
    Users,
    Layers,
    Sparkles,
    CheckCheck,
    X,
    Check,
} from 'lucide-react'
import { Footer } from '@/components/footer'

/* ─── Reveal on scroll hook ─── */
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

/* ─── Pain Points (dolores actuales del mercado) ─── */
const pains = [
    {
        icon: ClipboardList,
        color: 'bg-rose-100 text-rose-600',
        border: 'border-rose-200/60',
        title: 'Fichas en papel o Excel',
        desc: 'Los datos del paciente se pierden, son difíciles de encontrar y nunca generan información útil. Cada sesión parte de cero.',
    },
    {
        icon: CircleDollarSign,
        color: 'bg-amber-100 text-amber-600',
        border: 'border-amber-200/60',
        title: 'Software caro y genérico',
        desc: 'Las plataformas existentes cuestan fortunas, no entienden el flujo clínico del kinesiólogo y obligan a adaptar tu forma de trabajar.',
    },
    {
        icon: BrainCircuit,
        color: 'bg-purple-100 text-purple-600',
        border: 'border-purple-200/60',
        title: 'Cero apoyo a la decisión',
        desc: 'Ninguna herramienta te recomienda qué escala aplicar, detecta señales de alarma o genera un informe automático. Dependes solo de tu memoria.',
    },
    {
        icon: Clock,
        color: 'bg-blue-100 text-blue-600',
        border: 'border-blue-200/60',
        title: 'Tiempo clínico desperdiciado',
        desc: 'Más de 30% del tiempo de una sesión se va en papeleo, transcripción y búsqueda de información. Tiempo que debería ir al paciente.',
    },
    {
        icon: BarChart3,
        color: 'bg-teal-100 text-teal-600',
        border: 'border-teal-200/60',
        title: 'Sin trazabilidad evolutiva',
        desc: 'Imposible demostrar progreso clínico sin datos estructurados. Tus resultados excelentes son invisibles para el paciente y para ti.',
    },
    {
        icon: AlertCircle,
        color: 'bg-orange-100 text-orange-600',
        border: 'border-orange-200/60',
        title: 'Comorbilidades sin detectar',
        desc: 'Fibromialgia, neuropatía, catastrofización, depresión, ansiedad… condiciones que cambian el tratamiento y que una anamnesis manual suele pasar por alto.',
    },
]

/* ─── Comparison table ─── */
const comparisons = [
    { topic: 'Registro de pacientes', sin: 'Papel / Excel desorganizado', con: 'Historia clínica digital estructurada' },
    { topic: 'Escalas clínicas', sin: 'Impresas o no se usan', con: '13 escalas validadas integradas y automáticas' },
    { topic: 'Toma de decisiones', sin: 'Solo intuición del profesional', con: 'DSS: alertas y recomendaciones basadas en evidencia' },
    { topic: 'Informes clínicos', sin: 'No existen o son manuales', con: 'Generados automáticamente al terminar la anamnesis' },
    { topic: 'Detección de comorbilidades', sin: 'Depende de la memoria del profesional', con: 'Screening automático: fibromialgia, neuropatía, ansiedad, depresión' },
    { topic: 'Evolución del paciente', sin: 'Invisible, sin comparativas', con: 'Gráficos de progreso sesión a sesión' },
    { topic: 'Tiempo por sesión', sin: '+30% en papeleo y búsqueda', con: 'Anamnesis en minutos, informe listo al instante' },
    { topic: 'Costo de implementación', sin: 'ERPs costosos e inaccesibles', con: 'Diseñado para centros emergentes y en crecimiento' },
]

/* ─── Clinical Scales Data (9 escalas incluye Oswestry + Lefebvre) ─── */
const scales = [
    {
        name: 'EVA — Escala Visual Analógica',
        abbr: 'EVA',
        icon: Activity,
        description: 'Gold standard internacional para medir la intensidad del dolor percibido, en una escala de 0 a 10.',
        evidence: 'Huskisson (1974). Validada en múltiples idiomas y contextos clínicos.',
        color: 'bg-teal-50 text-teal-600',
    },
    {
        name: 'PSFS — Patient-Specific Functional Scale',
        abbr: 'PSFS',
        icon: ClipboardList,
        description: 'Permite al paciente identificar actividades difíciles y medir el cambio funcional durante el tratamiento.',
        evidence: 'Stratford et al. (1995). Alta sensibilidad al cambio y excelente fiabilidad test-retest.',
        color: 'bg-blue-50 text-blue-600',
    },
    {
        name: 'Índice de Barthel',
        abbr: 'Barthel',
        icon: Heart,
        description: 'Evalúa la capacidad funcional en 10 actividades básicas de la vida diaria: alimentación, baño, vestido, traslados y más.',
        evidence: 'Mahoney & Barthel (1965). Uno de los instrumentos más utilizados en rehabilitación a nivel mundial.',
        color: 'bg-rose-50 text-rose-600',
    },
    {
        name: 'GROC — Global Rating of Change',
        abbr: 'GROC',
        icon: BarChart3,
        description: 'Escala de percepción global que permite al paciente valorar su mejoría o empeoramiento desde el inicio del tratamiento.',
        evidence: 'Jaeschke et al. (1989). Ampliamente validada en rehabilitación musculoesquelética.',
        color: 'bg-purple-50 text-purple-600',
    },
    {
        name: 'EQ-5D — Calidad de Vida',
        abbr: 'EQ-5D',
        icon: Shield,
        description: 'Evalúa calidad de vida en 5 dimensiones: movilidad, cuidado personal, actividades cotidianas, dolor y ansiedad.',
        evidence: 'EuroQol Group (1990). Utilizado en más de 180 países.',
        color: 'bg-amber-50 text-amber-600',
    },
    {
        name: 'ENA — Evaluación Nutricional Abreviada',
        abbr: 'ENA',
        icon: Activity,
        description: 'Herramienta validada para la detección rápida de riesgo nutricional. Evalúa estado alimenticio y su impacto en la recuperación clínica.',
        evidence: 'Guigoz et al. (1994). Ampliamente utilizada en contextos clínicos de rehabilitación y geriatría.',
        color: 'bg-sky-50 text-sky-600',
    },
    {
        name: 'Screening de Riesgos y Comorbilidades',
        abbr: 'Screening',
        icon: Stethoscope,
        description: 'Protocolo de detección temprana de comorbilidades: fibromialgia, neuropatías, diabetes, ansiedad y depresión.',
        evidence: 'Basado en guías clínicas NICE, IASP y recomendaciones de la OMS.',
        color: 'bg-indigo-50 text-indigo-600',
    },
    {
        name: 'ODI / Oswestry — Discapacidad Lumbar',
        abbr: 'Oswestry',
        icon: Layers,
        description: 'Cuestionario de 10 ítems que mide la discapacidad funcional en pacientes con dolor lumbar. Evalúa sedestación, carga de peso, desplazamientos y vida social.',
        evidence: 'Fairbank et al. (1980). Estándar de oro en discapacidad lumbar, validado en más de 30 idiomas.',
        color: 'bg-emerald-50 text-emerald-600',
    },
    {
        name: 'LEFS — Escala Funcional de Extremidad Inferior',
        abbr: 'LEFS',
        icon: TrendingUp,
        description: '20 ítems que evalúan la capacidad funcional de la extremidad inferior: caminar, subir escaleras, actividades de ocio y trabajo. Ideal para rodilla, cadera y tobillo.',
        evidence: 'Binkley et al. (1999). Alta fiabilidad y sensibilidad al cambio en rehabilitación musculoesquelética.',
        color: 'bg-orange-50 text-orange-600',
    },
]

/* ─── DSS Flow Steps ─── */
const flowSteps = [
    { step: 1, title: 'Datos del Paciente', description: 'Registro de información demográfica, antecedentes médicos y motivo de consulta.', icon: FileText, color: 'bg-blue-500' },
    { step: 2, title: 'Ubicación e Intensidad del Dolor', description: 'Mapa corporal interactivo con EVA/ENA por cada zona de dolor.', icon: Activity, color: 'bg-teal-500' },
    { step: 3, title: 'Características del Dolor', description: 'Detecta componente neuropático (ardiente, corriente, hormigueo) y recomienda escala DN4.', icon: Brain, color: 'bg-purple-500', decision: '¿Neuropático? → Recomendar DN4' },
    { step: 4, title: 'Screening de Condiciones', description: 'Fibromialgia → FIQ | Neuropatías → DN4 | Diabetes → evaluación | Ansiedad → GAD-7 | Depresión → PHQ-9.', icon: Stethoscope, color: 'bg-amber-500' },
    { step: 5, title: 'Creencias sobre el Dolor', description: 'Detecta catastrofización y recomienda Pain Catastrophizing Scale (PCS).', icon: Brain, color: 'bg-rose-500', decision: '¿Catastrofización? → Recomendar PCS' },
    { step: 6, title: 'Patrón Conductual', description: 'Clasifica: Evitativo (kinesiofobia), Persistente (sobreactividad) o Equilibrado.', icon: ClipboardList, color: 'bg-indigo-500' },
    { step: 7, title: 'Evaluación del Sueño', description: 'Analiza 5 parámetros: hora de acostarse, latencia, despertares, hora de despertar y tiempo en levantarse.', icon: Moon, color: 'bg-sky-500' },
    { step: 8, title: 'Determinantes Sociales de Salud', description: 'Salud percibida, calidad del sueño, percepción del peso y hábitos alimenticios. Clasifica nivel de riesgo.', icon: Apple, color: 'bg-emerald-500' },
    { step: 9, title: 'Informe DSS', description: 'Informe clínico automático con análisis, nivel de riesgo global y recomendaciones basadas en evidencia.', icon: BarChart3, color: 'bg-teal-600' },
]

/* ─── Validation signals ─── */
const validations = [
    { icon: GraduationCap, color: 'bg-blue-50 text-blue-600', title: 'Escalas publicadas internacionalmente', desc: 'Instrumentos como PSFS, Barthel, GROC y EQ-5D, publicados en revistas científicas y utilizados en la práctica clínica en Chile.' },
    { icon: CheckCircle2, color: 'bg-emerald-50 text-emerald-600', title: 'Guías Internacionales', desc: 'Algoritmos basados en guías NICE (UK), IASP y recomendaciones de la OMS.' },
    { icon: Shield, color: 'bg-teal-50 text-teal-600', title: 'Investigación en terreno', desc: 'Desarrollado a partir de investigación de campo en clínicas de la provincia de Concepción, Chile.' },
]

export default function SolucionContent() {
    const heroSection = useReveal()
    const painSection = useReveal()
    const comparisonSection = useReveal()
    const solucionSection = useReveal()
    const scalesSection = useReveal()
    const flowSection = useReveal()
    const validacionSection = useReveal()

    return (
        <main className="bg-background text-foreground">

            {/* ═══ HERO — Identidad Kenkomed Navy ═══ */}
            <section
                className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
                style={{
                    background: 'linear-gradient(160deg, #05111e 0%, #081b35 30%, #0d2a50 55%, #091e3a 78%, #05111e 100%)',
                }}
            >
                <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.05]" aria-hidden="true" />

                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 left-1/2 w-[1100px] h-[1100px] -translate-x-1/2 rounded-full opacity-[0.13]"
                        style={{ background: 'radial-gradient(circle, oklch(0.48 0.18 246) 0%, transparent 65%)', filter: 'blur(100px)' }} />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.10]"
                        style={{ background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)', filter: 'blur(80px)' }} />
                </div>

                <div ref={heroSection.ref} className={`relative z-10 max-w-5xl mx-auto px-6 text-center scroll-reveal ${heroSection.visible ? 'is-visible' : ''}`}>
                    <div className="inline-flex items-center gap-2.5 glass-mint rounded-full px-5 py-2 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--kenko-pulse)' }} />
                            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--kenko-mint)' }} />
                        </span>
                        <Sparkles size={12} style={{ color: 'var(--kenko-pulse)' }} />
                        <span className="text-xs font-bold font-display tracking-[0.18em] uppercase" style={{ color: 'oklch(0.97 0.003 246 / 0.7)' }}>Solución &amp; Validación Clínica</span>
                    </div>

                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-on-brand mb-6 text-balance">
                        El problema es real.{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, var(--kenko-sapphire), var(--kenko-sky), var(--kenko-pulse))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Kenkomed lo resuelve.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-on-brand-muted leading-relaxed max-w-3xl mx-auto mb-10">
                        Cada día, kinesiólogos de todo Chile pierden tiempo, datos y oportunidades de mejora clínica por no tener las herramientas correctas.
                        Kenkomed nació para cambiar eso — con <strong className="text-on-brand font-semibold">evidencia científica real</strong> y un sistema que piensa contigo.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#contact" className="btn-kenko-primary">
                            Quiero transformar mi clínica
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/" className="btn-kenko-ghost text-sm font-medium">
                            <ArrowLeft size={14} /> Volver al inicio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ LOS DOLORES ACTUALES ═══ */}
            <section className="py-20 md:py-28 bg-surface">
                <div ref={painSection.ref} className="max-w-6xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${painSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-rose-600 tracking-widest uppercase mb-4">
                            Los Dolores del Mercado
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            ¿Te identificas con alguno de estos problemas?
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Tras investigación en terreno en la provincia de Concepción, identificamos las 6 barreras más críticas que enfrentan los profesionales de la salud hoy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {pains.map((pain, i) => {
                            const Icon = pain.icon
                            return (
                                <div key={i}
                                    className={`group p-6 rounded-2xl bg-card border ${pain.border} hover:shadow-lg transition-all duration-300 scroll-reveal stagger-${i + 1} ${painSection.visible ? 'is-visible' : ''}`}>
                                    <div className={`w-11 h-11 rounded-xl ${pain.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <Icon size={20} />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{pain.title}</h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed">{pain.desc}</p>
                                </div>
                            )
                        })}
                    </div>

                    {/* Impact stat */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="text-center p-6 rounded-2xl bg-card border border-border/60">
                            <p className="font-display font-bold text-4xl text-rose-500 mb-2">30%+</p>
                            <p className="text-sm text-foreground-muted">del tiempo clínico perdido en burocracia y papeleo</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-card border border-border/60">
                            <p className="font-display font-bold text-4xl text-amber-500 mb-2">7 de 10</p>
                            <p className="text-sm text-foreground-muted">centros de salud no tienen sistema clínico estructurado</p>
                        </div>
                        <div className="text-center p-6 rounded-2xl bg-card border border-border/60">
                            <p className="font-display font-bold text-4xl text-purple-500 mb-2">0%</p>
                            <p className="text-sm text-foreground-muted">de apoyo a la decisión clínica en software genérico</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SIN KENKOMED vs CON KENKOMED ═══ */}
            <section className="py-20 md:py-28">
                <div ref={comparisonSection.ref} className="max-w-5xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${comparisonSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            La Diferencia es Clara
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            Tu clínica, antes y después de Kenkomed
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Compara punto a punto qué pasa en una clínica sin herramientas modernas y qué cambia cuando usas Kenkomed.
                        </p>
                    </div>

                    <div className={`rounded-3xl border border-border/60 overflow-hidden shadow-xl scroll-reveal ${comparisonSection.visible ? 'is-visible' : ''}`}>
                        {/* Header */}
                        <div className="grid grid-cols-[1fr_1fr_1fr] bg-surface">
                            <div className="p-5 border-b border-border/60">
                                <p className="text-xs font-bold text-foreground-muted tracking-widest uppercase">Aspecto</p>
                            </div>
                            <div className="p-5 border-b border-l border-rose-200/60 bg-rose-50/40">
                                <div className="flex items-center gap-2">
                                    <X size={14} className="text-rose-500" />
                                    <p className="text-xs font-bold text-rose-600 tracking-widest uppercase">Sin Kenkomed</p>
                                </div>
                            </div>
                            <div className="p-5 border-b border-l border-teal-200/60 bg-teal-50/40">
                                <div className="flex items-center gap-2">
                                    <Check size={14} className="text-teal-600" />
                                    <p className="text-xs font-bold text-teal-700 tracking-widest uppercase">Con Kenkomed</p>
                                </div>
                            </div>
                        </div>

                        {/* Rows */}
                        {comparisons.map((row, i) => (
                            <div key={i} className={`grid grid-cols-[1fr_1fr_1fr] ${i % 2 === 0 ? 'bg-card' : 'bg-surface'}`}>
                                <div className="p-4 border-b border-border/40 flex items-center">
                                    <p className="text-sm font-semibold text-foreground">{row.topic}</p>
                                </div>
                                <div className="p-4 border-b border-l border-rose-100/60 bg-rose-50/20 flex items-center gap-2">
                                    <XCircle size={14} className="text-rose-400 flex-shrink-0" />
                                    <p className="text-sm text-foreground-muted leading-relaxed">{row.sin}</p>
                                </div>
                                <div className="p-4 border-b border-l border-teal-100/60 bg-teal-50/20 flex items-center gap-2">
                                    <CheckCheck size={14} className="text-teal-500 flex-shrink-0" />
                                    <p className="text-sm text-foreground leading-relaxed font-medium">{row.con}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ NUESTRA SOLUCIÓN — DSS ═══ */}
            <section className="py-20 md:py-28 bg-surface">
                <div ref={solucionSection.ref} className="max-w-4xl mx-auto px-6">
                    <div className={`scroll-reveal ${solucionSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            Nuestra Solución
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
                            Un sistema que piensa contigo, no solo almacena datos
                        </h2>
                        <p className="text-foreground-muted leading-relaxed mb-10">
                            Kenkomed integra un <strong className="text-foreground">Sistema de Soporte a la Decisión Clínica (DSS)</strong> que
                            analiza las respuestas del paciente durante la anamnesis y genera recomendaciones personalizadas
                            de evaluaciones complementarias y abordajes terapéuticos — todo basado en evidencia científica.
                        </p>

                        <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200/60 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                                    <Brain size={22} className="text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground mb-2">¿Qué lo hace diferente?</h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed">
                                        A diferencia de los ERPs o fichas digitales estáticas, nuestro DSS <strong className="text-foreground">profundiza en los datos,
                                        navega entre ellos y los analiza desde múltiples perspectivas</strong>. No solo registra: interpreta,
                                        alerta y recomienda. El profesional siempre toma la decisión final, pero con información que antes no tenía.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: BarChart3, label: 'Gráficos de evolución', desc: 'Tendencias visuales del progreso del paciente' },
                                { icon: FileText, label: 'Informes automáticos', desc: 'Reportes clínicos exportables con un clic' },
                                { icon: ClipboardList, label: '9 escalas validadas', desc: 'Instrumentos reconocidos internacionalmente' },
                                { icon: Zap, label: 'Alertas inteligentes', desc: 'Recomendaciones automáticas según respuestas' },
                            ].map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.label} className="p-4 rounded-xl bg-card border border-border/60 text-center">
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mx-auto mb-3">
                                            <Icon size={18} className="text-brand" />
                                        </div>
                                        <h4 className="font-semibold text-foreground text-xs mb-1">{item.label}</h4>
                                        <p className="text-[11px] text-foreground-muted leading-relaxed">{item.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ ESCALAS CLÍNICAS — 13 escalas ═══ */}
            <section className="py-20 md:py-28">
                <div ref={scalesSection.ref} className="max-w-7xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${scalesSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">Escalas Clínicas</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            8 instrumentos validados internacionalmente
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Cada escala fue seleccionada por su evidencia científica, fiabilidad y relevancia clínica.
                            Incluye <strong className="text-foreground">PSFS, GROC, EQ-5D, Barthel, Screening, ENA, Oswestry y LEFS</strong>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {scales.map((scale, i) => {
                            const Icon = scale.icon
                            return (
                                <div key={scale.abbr}
                                    className={`group p-6 rounded-2xl bg-card border border-border/60 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 scroll-reveal stagger-${(i % 6) + 1} ${scalesSection.visible ? 'is-visible' : ''}`}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-11 h-11 rounded-xl ${scale.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <span className="inline-block text-[10px] font-bold text-brand tracking-widest uppercase">{scale.abbr}</span>
                                            <h3 className="font-semibold text-foreground text-sm leading-tight">{scale.name}</h3>
                                        </div>
                                    </div>
                                    <p className="text-sm text-foreground-muted leading-relaxed mb-4">{scale.description}</p>
                                    <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100/40">
                                        <p className="text-xs text-foreground-muted leading-relaxed">
                                            <strong className="text-foreground">Evidencia:</strong> {scale.evidence}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ FLUJO DSS — 14 pasos ═══ */}
            <section className="py-20 md:py-28 bg-surface">
                <div ref={flowSection.ref} className="max-w-6xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${flowSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">Flujo DSS</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            14 pasos. Una anamnesis inteligente.
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Desde el ingreso del paciente hasta el informe clínico automático, el sistema guía al profesional paso a paso,
                            tomando decisiones en tiempo real.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/60" aria-hidden="true" />
                        <div className="flex flex-col gap-6">
                            {flowSteps.map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.step}
                                        className={`relative flex gap-5 md:gap-8 scroll-reveal stagger-${Math.min(i + 1, 6)} ${flowSection.visible ? 'is-visible' : ''}`}>
                                        <div className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                            <Icon size={20} className="text-white" />
                                        </div>
                                        <div className="flex-1 pb-2">
                                            <span className="text-xs font-bold text-brand tracking-widest uppercase">Paso {item.step}</span>
                                            <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                                            <p className="text-sm text-foreground-muted leading-relaxed mb-2">{item.description}</p>
                                            {item.decision && (
                                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/60">
                                                    <ChevronRight size={12} className="text-amber-600" />
                                                    <span className="text-xs font-medium text-amber-700">{item.decision}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ VALIDACIÓN — Trust signals ═══ */}
            <section className="py-20 md:py-28">
                <div ref={validacionSection.ref} className="max-w-4xl mx-auto px-6">
                    <div className={`scroll-reveal ${validacionSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            Validación Científica
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
                            No solo prometemos. Lo probamos.
                        </h2>
                        <p className="text-foreground-muted mb-8 text-lg">
                            Kenkomed fue construido sobre investigación real, integrando escalas validadas internacionalmente y adaptadas al contexto clínico chileno. Cada algoritmo del DSS tiene respaldo bibliográfico.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                            {validations.map((v, i) => {
                                const Icon = v.icon
                                return (
                                    <div key={i} className="p-6 rounded-2xl bg-card border border-border/60">
                                        <div className={`w-12 h-12 rounded-xl ${v.color} flex items-center justify-center mb-4`}>
                                            <Icon size={22} />
                                        </div>
                                        <h3 className="font-semibold text-foreground mb-2 text-sm">{v.title}</h3>
                                        <p className="text-xs text-foreground-muted leading-relaxed">{v.desc}</p>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Summary quote */}
                        <div className="p-8 rounded-2xl bg-blue-50/60 border border-blue-100/50">
                            <blockquote className="text-lg font-medium text-foreground leading-relaxed mb-4 italic">
                                "La digitalización médica en Chile sigue en etapa temprana: se reemplazó el papel por registros digitales,
                                pero sin análisis de datos, sin seguimiento evolutivo, sin personalización. La información existe, pero no se usa inteligentemente."
                            </blockquote>
                            <p className="text-xs text-foreground-muted">
                                <strong className="text-foreground">Fuente:</strong>{' '}
                                <a href="https://portalredsalud.cl/2025/04/05/salud-digital-en-chile-innovacion-tecnologica-para-un-sistema-sanitario-mas-eficiente"
                                    target="_blank" rel="noopener noreferrer"
                                    className="text-brand hover:text-brand-dark transition-colors underline underline-offset-2">
                                    Portal Red Salud — Salud digital en Chile
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA FINAL ═══ */}
            <section className="py-16 md:py-24 bg-surface">
                <div className="max-w-4xl mx-auto px-6">
                    <div
                        className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #05111e 0%, #0a2340 40%, #0d2d52 70%, #081b35 100%)',
                            border: '1px solid oklch(0.48 0.18 246 / 0.2)',
                            boxShadow: '0 24px 80px oklch(0.05 0.01 240 / 0.5)',
                        }}
                    >
                        <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.04]" aria-hidden="true" />
                        <div className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-15 pointer-events-none" aria-hidden="true"
                            style={{ background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)', filter: 'blur(60px)' }} />
                        <div className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" aria-hidden="true"
                            style={{ background: 'radial-gradient(circle, oklch(0.48 0.18 246) 0%, transparent 65%)', filter: 'blur(60px)' }} />
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2.5 glass-mint rounded-full px-5 py-2 mb-6">
                                <Sparkles size={12} style={{ color: 'var(--kenko-pulse)' }} />
                                <span className="text-xs font-bold font-display tracking-[0.18em] uppercase" style={{ color: 'oklch(0.97 0.003 246 / 0.7)' }}>Transforma tu práctica hoy</span>
                            </div>
                            <h3 className="font-display font-bold text-2xl md:text-4xl text-on-brand mb-4 text-balance">
                                ¿Listo para dejar atrás el papel y el Excel?
                            </h3>
                            <p className="text-on-brand-muted max-w-lg mx-auto leading-relaxed mb-8">
                                Únete a los kinesiólogos que ya gestionan sus pacientes con inteligencia clínica real.
                                Contáctanos y te mostramos cómo en una demo personalizada.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/#contact" className="btn-kenko-primary">
                                    Solicitar Demo Gratuita
                                    <ArrowRight size={16} />
                                </Link>
                                <Link href="/" className="btn-kenko-ghost text-sm">
                                    <ArrowLeft size={14} /> Volver al inicio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

