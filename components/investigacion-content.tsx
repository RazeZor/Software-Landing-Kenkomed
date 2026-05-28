'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowLeft,
    BookOpen,
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
    AlertTriangle,
    Zap,
    GraduationCap,
    CheckCircle2,
    XCircle,
    CircleDollarSign,
    BrainCircuit
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
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
            { threshold: 0.1 }
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return { ref, visible }
}

/* ─── Clinical Scales Data ─── */
const scales = [
    {
        name: 'EVA — Escala Visual Analógica',
        abbr: 'EVA',
        icon: Activity,
        description: 'Gold standard internacional para medir la intensidad del dolor percibido, en una escala de 0 a 10.',
        evidence: 'Huskisson (1974). Validada en múltiples idiomas y contextos clínicos.',
        pdfLabel: 'Referencia EVA',
        pdfHref: '#',
    },
    {
        name: 'PSFS — Patient-Specific Functional Scale',
        abbr: 'PSFS',
        icon: ClipboardList,
        description: 'Permite al paciente identificar actividades difíciles y medir el cambio funcional durante el tratamiento.',
        evidence: 'Stratford et al. (1995). Alta sensibilidad al cambio y excelente fiabilidad test-retest.',
        pdfLabel: 'Referencia PSFS',
        pdfHref: '#',
    },
    {
        name: 'Índice de Barthel',
        abbr: 'Barthel',
        icon: Heart,
        description: 'Evalúa la capacidad funcional en 10 actividades básicas de la vida diaria: alimentación, baño, vestido, traslados y más.',
        evidence: 'Mahoney & Barthel (1965). Uno de los instrumentos más utilizados en rehabilitación a nivel mundial.',
        pdfLabel: 'Referencia Barthel',
        pdfHref: '#',
    },
    {
        name: 'GROC — Global Rating of Change',
        abbr: 'GROC',
        icon: BarChart3,
        description: 'Escala de percepción global que permite al paciente valorar su mejoría o empeoramiento desde el inicio del tratamiento.',
        evidence: 'Jaeschke et al. (1989). Ampliamente validada en rehabilitación musculoesquelética.',
        pdfLabel: 'Referencia GROC',
        pdfHref: '#',
    },
    {
        name: 'EQ-5D — Calidad de Vida',
        abbr: 'EQ-5D',
        icon: Shield,
        description: 'Evalúa calidad de vida en 5 dimensiones: movilidad, cuidado personal, actividades cotidianas, dolor y ansiedad.',
        evidence: 'EuroQol Group (1990). Utilizado en más de 180 países.',
        pdfLabel: 'Referencia EQ-5D',
        pdfHref: '#',
    },
    {
        name: 'ENA — Escala Numérica Analógica',
        abbr: 'ENA',
        icon: Activity,
        description: 'Variante numérica de la EVA, más práctica para uso telefónico y seguimiento remoto del dolor.',
        evidence: 'Downie et al. (1978). Correlación excelente con EVA (r=0.94).',
        pdfLabel: 'Referencia ENA',
        pdfHref: '#',
    },
    {
        name: 'Screening de Condiciones',
        abbr: 'Screening',
        icon: Stethoscope,
        description: 'Protocolo de detección temprana de comorbilidades: fibromialgia, neuropatías, diabetes, ansiedad y depresión.',
        evidence: 'Basado en guías clínicas NICE, IASP y recomendaciones de la OMS.',
        pdfLabel: 'Protocolo Screening',
        pdfHref: '#',
    },
]

/* ─── DSS Flow Steps ─── */
const flowSteps = [
    {
        step: 1, title: 'Datos del Paciente',
        description: 'Registro de información demográfica, antecedentes médicos y motivo de consulta.',
        icon: FileText, color: 'bg-blue-500',
    },
    {
        step: 2, title: 'Ubicación e Intensidad del Dolor',
        description: 'Mapa corporal interactivo con EVA/ENA por cada zona de dolor.',
        icon: Activity, color: 'bg-teal-500',
    },
    {
        step: 3, title: 'Características del Dolor',
        description: 'Detecta componente neuropático (ardiente, corriente, hormigueo) y recomienda escala DN4.',
        icon: Brain, color: 'bg-purple-500',
        decision: '¿Neuropático? → Recomendar DN4',
    },
    {
        step: 4, title: 'Screening de Condiciones',
        description: 'Fibromialgia → FIQ | Neuropatías → DN4 | Diabetes → evaluación | Ansiedad → GAD-7 | Depresión → PHQ-9.',
        icon: Stethoscope, color: 'bg-amber-500',
    },
    {
        step: 5, title: 'Creencias sobre el Dolor',
        description: 'Detecta catastrofización y recomienda Pain Catastrophizing Scale (PCS).',
        icon: Brain, color: 'bg-rose-500',
        decision: '¿Catastrofización? → Recomendar PCS',
    },
    {
        step: 6, title: 'Patrón Conductual',
        description: 'Clasifica: Evitativo (kinesiofobia), Persistente (sobreactividad) o Equilibrado.',
        icon: ClipboardList, color: 'bg-indigo-500',
    },
    {
        step: 7, title: 'Evaluación del Sueño',
        description: 'Analiza 5 parámetros: hora de acostarse, latencia, despertares, hora de despertar y tiempo en levantarse.',
        icon: Moon, color: 'bg-sky-500',
    },
    {
        step: 8, title: 'Determinantes Sociales de Salud',
        description: 'Salud percibida, calidad del sueño, percepción del peso y hábitos alimenticios. Clasifica nivel de riesgo.',
        icon: Apple, color: 'bg-emerald-500',
    },
    {
        step: 9, title: 'Informe DSS',
        description: 'Informe clínico automático con análisis, nivel de riesgo global y recomendaciones basadas en evidencia.',
        icon: BarChart3, color: 'bg-teal-600',
    },
]

/* ─── Documentation Links ─── */
const documents = [
    { title: 'Protocolo de Anamnesis Kenkomed', description: 'Protocolo completo del sistema DSS.', type: 'PDF', href: '#' },
    { title: 'Validación de Escalas Clínicas', description: 'Revisión bibliográfica y validación en contexto chileno.', type: 'PDF', href: '#' },
    { title: 'Algoritmo DSS — Doc. Técnica', description: 'Criterios de evaluación del sistema de decisión.', type: 'PDF', href: '#' },
    { title: 'Guía Clínica — Determinantes Sociales', description: 'Impacto de los DSS en el pronóstico de dolor crónico.', type: 'PDF', href: '#' },
    { title: 'Manual de Cuestionarios', description: 'Guía de uso de los cuestionarios clínicos implementados.', type: 'PDF', href: '#' },
    { title: 'Investigación de Base', description: 'Revisión sistemática sobre dolor crónico en kinesiología.', type: 'PDF', href: '#' },
]

export default function InvestigacionContent() {
    const problemSection = useReveal()
    const impactoSection = useReveal()
    const solucionSection = useReveal()
    const validacionSection = useReveal()
    const scalesSection = useReveal()
    const flowSection = useReveal()
    const docsSection = useReveal()

    return (
        <main className="bg-background text-foreground">
            <Navbar />

            {/* ═══ HERO ═══ */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 left-1/2 w-[900px] h-[900px] -translate-x-1/2 opacity-[0.06]"
                        style={{ background: 'radial-gradient(circle at center, oklch(0.48 0.18 246), transparent 70%)' }} />
                    <div className="absolute inset-0 opacity-[0.02]"
                        style={{ backgroundImage: 'linear-gradient(oklch(0.48 0.18 246) 1px, transparent 1px), linear-gradient(90deg, oklch(0.48 0.18 246) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8">
                        <BookOpen size={12} className="text-brand" />
                        <span className="text-xs font-semibold text-brand tracking-wide uppercase">Investigación & Evidencia</span>
                    </div>

                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground mb-6 text-balance">
                        Respaldado por{' '}
                        <span className="text-gradient">ciencia y evidencia</span>
                    </h1>

                    <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto mb-8">
                        No construimos otro software genérico. Kenkomed nace de una investigación real
                        sobre las carencias tecnológicas en kinesiología y terapia ocupacional en Chile.
                    </p>

                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors">
                        <ArrowLeft size={14} /> Volver al inicio
                    </Link>
                </div>
            </section>

            {/* ═══ EL PROBLEMA — Why this matters ═══ */}
            <section className="py-20 md:py-28 bg-surface">
                <div ref={problemSection.ref} className="max-w-4xl mx-auto px-6">
                    <div className={`scroll-reveal ${problemSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            El Problema
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
                            Los centros de salud en Chile operan con tecnología del pasado
                        </h2>
                        <p className="text-foreground-muted leading-relaxed mb-8">
                            Tras una investigación en terreno en la provincia de Concepción, identificamos una realidad alarmante:
                            los centros de salud de menor escala — especialmente los de seguimiento personalizado — <strong className="text-foreground">no tienen acceso a
                            tecnologías modernas</strong> que apoyen el trabajo clínico. Las soluciones existentes son genéricas, costosas,
                            y no integran escalas validadas ni apoyo al razonamiento clínico.
                        </p>

                        <div className="p-6 rounded-2xl bg-red-50/80 border border-red-200/60 mb-8">
                            <div className="flex items-start gap-4">
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    La digitalización médica en Chile sigue en etapa temprana: se reemplazó el papel por registros digitales,
                                    pero <strong className="text-foreground">sin análisis de datos, sin seguimiento evolutivo, sin personalización</strong>.
                                    La información existe, pero no se usa inteligentemente.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { text: 'Sistemas genéricos que no entienden el flujo del kinesiólogo', icon: XCircle, color: 'text-rose-500' },
                                { text: 'Costos inaccesibles para centros emergentes', icon: CircleDollarSign, color: 'text-amber-500' },
                                { text: 'Datos clínicos almacenados en Excel o papel', icon: ClipboardList, color: 'text-blue-500' },
                                { text: 'Cero apoyo a la decisión basada en evidencia', icon: BrainCircuit, color: 'text-purple-500' },
                            ].map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/60">
                                        <div className={`mt-0.5 w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                            <Icon size={18} />
                                        </div>
                                        <p className="text-sm text-foreground-muted">{item.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ IMPACTO — The cost of doing nothing ═══ */}
            <section className="py-20 md:py-28">
                <div ref={impactoSection.ref} className="max-w-4xl mx-auto px-6">
                    <div className={`scroll-reveal ${impactoSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            El Costo de no Actuar
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
                            La falta de información cuesta vidas
                        </h2>
                        <p className="text-foreground-muted leading-relaxed mb-10">
                            Sin información clínica estructurada y accesible, los profesionales de la salud
                            pierden la capacidad de anticipar riesgos, reconocer patrones y actuar proactivamente.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
                            <div className="text-center p-6 rounded-2xl bg-card border border-border/60">
                                <p className="font-display font-bold text-4xl text-red-500 mb-2">7.4M</p>
                                <p className="text-xs text-foreground-muted">personas mal diagnosticadas al año en EE.UU.</p>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-card border border-border/60">
                                <p className="font-display font-bold text-4xl text-amber-500 mb-2">33%</p>
                                <p className="text-xs text-foreground-muted">más error diagnóstico en mujeres tras ACV</p>
                            </div>
                            <div className="text-center p-6 rounded-2xl bg-card border border-border/60">
                                <p className="font-display font-bold text-4xl text-rose-500 mb-2">50%</p>
                                <p className="text-xs text-foreground-muted">más error en mujeres con infarto cardíaco</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100/50">
                            <p className="text-xs text-foreground-muted">
                                <strong className="text-foreground">Fuente:</strong>{' '}
                                <a href="https://portalredsalud.cl/2025/04/05/salud-digital-en-chile-innovacion-tecnologica-para-un-sistema-sanitario-mas-eficiente"
                                    target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark transition-colors underline underline-offset-2">
                                    Portal Red Salud — Salud digital en Chile
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ LA SOLUCIÓN — DSS as differentiator ═══ */}
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
                                { icon: ClipboardList, label: 'Escalas validadas', desc: 'Instrumentos reconocidos internacionalmente' },
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

            {/* ═══ VALIDACIÓN — Trust signals ═══ */}
            <section className="py-20 md:py-28">
                <div ref={validacionSection.ref} className="max-w-4xl mx-auto px-6">
                    <div className={`scroll-reveal ${validacionSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            Validación
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
                            Construido sobre bases sólidas
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className="p-6 rounded-2xl bg-card border border-border/60">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                                    <GraduationCap size={22} className="text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 text-sm">Respaldo Universitario</h3>
                                <p className="text-xs text-foreground-muted leading-relaxed">
                                    Escalas validadas por universidades chilenas reconocidas: U. de Chile, PUC, U. de Concepción y USACH.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border/60">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                                    <CheckCircle2 size={22} className="text-emerald-600" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 text-sm">Guías Internacionales</h3>
                                <p className="text-xs text-foreground-muted leading-relaxed">
                                    Algoritmos basados en guías clínicas NICE (UK), IASP y recomendaciones de la OMS para dolor crónico.
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-card border border-border/60">
                                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                                    <Shield size={22} className="text-teal-600" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-2 text-sm">MINSAL Chile</h3>
                                <p className="text-xs text-foreground-muted leading-relaxed">
                                    Métricas validadas por grupos de trabajo interdisciplinarios del Ministerio de Salud de Chile.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CLINICAL SCALES ═══ */}
            <section className="py-20 md:py-28 bg-surface">
                <div ref={scalesSection.ref} className="max-w-7xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${scalesSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">Escalas Clínicas</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            7 instrumentos validados internacionalmente
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Cada escala fue seleccionada por su evidencia científica, fiabilidad y relevancia en kinesiología.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {scales.map((scale, i) => {
                            const Icon = scale.icon
                            return (
                                <div key={scale.abbr}
                                    className={`group p-6 rounded-2xl bg-card border border-border/60 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 scroll-reveal stagger-${i + 1} ${scalesSection.visible ? 'is-visible' : ''}`}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                                            <Icon size={20} className="text-brand" />
                                        </div>
                                        <div>
                                            <span className="inline-block text-[10px] font-bold text-brand tracking-widest uppercase">{scale.abbr}</span>
                                            <h3 className="font-semibold text-foreground text-sm leading-tight">{scale.name}</h3>
                                        </div>
                                    </div>
                                    <p className="text-sm text-foreground-muted leading-relaxed mb-4">{scale.description}</p>
                                    <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100/40 mb-4">
                                        <p className="text-xs text-foreground-muted leading-relaxed">
                                            <strong className="text-foreground">Evidencia:</strong> {scale.evidence}
                                        </p>
                                    </div>
                                    <a href={scale.pdfHref} className="inline-flex items-center gap-1.5 text-xs font-medium text-brand hover:text-brand-dark transition-colors">
                                        <Download size={12} /> {scale.pdfLabel} <ExternalLink size={10} />
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ DSS FLOW ═══ */}
            <section className="py-20 md:py-28">
                <div ref={flowSection.ref} className="max-w-6xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${flowSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">Flujo DSS</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            Proceso de Anamnesis Inteligente
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            9 pasos estructurados que guían al kinesiólogo desde el ingreso del paciente
                            hasta la generación del informe clínico con recomendaciones automatizadas.
                        </p>
                    </div>

                    {/* Steps */}
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

            {/* ═══ DOCUMENTATION ═══ */}
            <section className="py-20 md:py-28 bg-surface">
                <div ref={docsSection.ref} className="max-w-5xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${docsSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">Documentación Abierta</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            Transparencia total. Descarga nuestra investigación.
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Creemos en el acceso libre al conocimiento clínico. Toda la documentación
                            está disponible de forma pública para profesionales de la salud.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {documents.map((doc, i) => (
                            <a key={doc.title} href={doc.href}
                                className={`group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border/60 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 scroll-reveal stagger-${i + 1} ${docsSection.visible ? 'is-visible' : ''}`}>
                                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                                    <FileText size={20} className="text-red-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-foreground text-sm">{doc.title}</h3>
                                        <span className="text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">{doc.type}</span>
                                    </div>
                                    <p className="text-xs text-foreground-muted">{doc.description}</p>
                                    <span className="inline-flex items-center gap-1 text-xs font-medium text-brand mt-2 group-hover:gap-2 transition-all">
                                        <Download size={11} /> Descargar
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="rounded-3xl bg-teal-50 dark:bg-surface-2 border border-teal-200/60 dark:border-border/60 p-10 md:p-14 text-center relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none" aria-hidden="true"
                            style={{ background: 'radial-gradient(circle, oklch(0.42 0.12 210), transparent 70%)' }} />
                        <div className="relative z-10">
                            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 text-balance">
                                ¿Listo para llevar tu clínica al siguiente nivel?
                            </h3>
                            <p className="text-foreground-muted max-w-lg mx-auto leading-relaxed mb-8">
                                Contáctanos para conocer cómo Kenkomed puede transformar
                                la forma en que gestionas tu práctica clínica.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/#contact"
                                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-primary/20">
                                    Contactar al equipo
                                </Link>
                                <Link href="/"
                                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors px-6 py-3.5">
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
