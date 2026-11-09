'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    ArrowRight,
    BookOpen,
    FileText,
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
    GraduationCap,
    CheckCircle2,
    TrendingUp,
    Layers,
    FlaskConical,
    MapPin,
} from 'lucide-react'
import { Footer } from '@/components/footer'
import { InvestigacionEvidenceVisualizer } from '@/components/investigacion-evidence-visualizer'

type ScaleCategory = 'all' | 'dolor-calidad' | 'musculoesqueletico' | 'equilibrio-neuro'

interface ClinicalScale {
    name: string
    abbr: string
    category: Exclude<ScaleCategory, 'all'>
    categoryLabel: string
    icon: typeof Activity
    description: string
    evidence: string
    metrics: string
    refLabel: string
    refHref: string
}

/* ─── Clinical Scales Data (13 escalas validadas con referencias PubMed reales) ─── */
const scales: ClinicalScale[] = [
    {
        name: 'EVA / ENA — Escala Visual Análoga y Numérica',
        abbr: 'EVA / ENA',
        category: 'dolor-calidad',
        categoryLabel: 'Dolor y Función Global',
        icon: Activity,
        description: 'Estándar internacional para cuantificar la intensidad del dolor percibido en escala continua y numérica de 0 a 10 por región anatómica.',
        evidence: 'Huskisson EC. The Lancet (1974); Downie WW et al. Ann Rheum Dis (1978).',
        metrics: 'MCID: ~1.5 a 2.0 pts en dolor musculoesquelético',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/4139420/',
    },
    {
        name: 'PSFS — Patient-Specific Functional Scale',
        abbr: 'PSFS',
        category: 'dolor-calidad',
        categoryLabel: 'Dolor y Función Global',
        icon: ClipboardList,
        description: 'Permite al paciente definir de 3 a 5 actividades relevantes de su vida diaria o deportiva y medir el cambio funcional sesión a sesión.',
        evidence: 'Stratford P et al. Physiother Can (1995); Horn KK et al. JOSPT (2012).',
        metrics: 'Fiabilidad test-retest ICC > 0.85 · MCID: 2.0 pts',
        refLabel: 'Ver revisión sistemática en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/22031594/',
    },
    {
        name: 'Oswestry (ODI) — Índice de Discapacidad Lumbar',
        abbr: 'Oswestry (ODI)',
        category: 'musculoesqueletico',
        categoryLabel: 'Columna y Extremidades',
        icon: Layers,
        description: 'Cuestionario de 10 secciones que cuantifica el porcentaje de limitación funcional por dolor lumbar en actividades de la vida diaria.',
        evidence: 'Fairbank JC & Pynsent PB. Spine (2000).',
        metrics: 'Consistencia interna α = 0.85 · MCID: 10 puntos porcentuales',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/11074683/',
    },
    {
        name: 'LEFS — Lower Extremity Functional Scale',
        abbr: 'LEFS',
        category: 'musculoesqueletico',
        categoryLabel: 'Columna y Extremidades',
        icon: TrendingUp,
        description: '20 ítems (0 a 80 puntos) que evalúan la capacidad funcional de extremidad inferior: marcha, escaleras, cuclillas y carrera.',
        evidence: 'Binkley JM et al. Physical Therapy (1999).',
        metrics: 'Consistencia interna α = 0.96 · MCID: 9 puntos',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/10201543/',
    },
    {
        name: 'QuickDASH — Extremidad Superior',
        abbr: 'QuickDASH',
        category: 'musculoesqueletico',
        categoryLabel: 'Columna y Extremidades',
        icon: Activity,
        description: 'Mide síntomas y discapacidad física en hombro, codo, muñeca y mano mediante 11 ítems normalizados en escala de 0 a 100.',
        evidence: 'Beaton DE et al. J Bone Joint Surg Am (2005).',
        metrics: 'Fiabilidad ICC = 0.94 · MCID: 10 a 15 puntos',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/15866982/',
    },
    {
        name: 'WOMAC — Artrosis de Cadera y Rodilla',
        abbr: 'WOMAC',
        category: 'musculoesqueletico',
        categoryLabel: 'Columna y Extremidades',
        icon: Heart,
        description: 'Evalúa 3 dimensiones clínicas (dolor, rigidez articular y capacidad funcional) en pacientes con gonartrosis o coxartrosis.',
        evidence: 'Bellamy N et al. J Rheumatology (1988).',
        metrics: 'Medida primaria recomendada por OARSI y OMS',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/3068365/',
    },
    {
        name: 'GROC — Global Rating of Change',
        abbr: 'GROC',
        category: 'dolor-calidad',
        categoryLabel: 'Dolor y Función Global',
        icon: BarChart3,
        description: 'Escala de transición (-7 a +7) que cuantifica la percepción global de mejoría o deterioro del paciente respecto al ingreso.',
        evidence: 'Jaeschke R et al. Control Clin Trials (1989); Kamper SJ et al. (2009).',
        metrics: 'Cambio clínicamente relevante a partir de ±3 pts',
        refLabel: 'Ver revisión en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/20046623/',
    },
    {
        name: 'EQ-5D — Calidad de Vida Relacionada con Salud',
        abbr: 'EQ-5D',
        category: 'dolor-calidad',
        categoryLabel: 'Dolor y Función Global',
        icon: Shield,
        description: 'Evalúa 5 dimensiones de salud: movilidad, cuidado personal, actividades habituales, dolor/malestar y ansiedad/depresión.',
        evidence: 'The EuroQol Group. Health Policy (1990).',
        metrics: 'Estándar internacional en evaluación de tecnologías sanitarias',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/10109801/',
    },
    {
        name: 'Índice de Barthel — Independencia Funcional',
        abbr: 'Barthel',
        category: 'equilibrio-neuro',
        categoryLabel: 'Equilibrio, Marcha y Neuro',
        icon: Heart,
        description: 'Cuantifica el grado de independencia del paciente en 10 actividades básicas de la vida diaria (ABVD) en escala de 0 a 100.',
        evidence: 'Mahoney FI & Barthel DW. Md State Med J (1965).',
        metrics: 'Estratifica dependencia total, severa, moderada y leve',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/14258950/',
    },
    {
        name: 'TUG — Timed Up and Go',
        abbr: 'TUG',
        category: 'equilibrio-neuro',
        categoryLabel: 'Equilibrio, Marcha y Neuro',
        icon: TrendingUp,
        description: 'Prueba cronometrada en segundos para levantarse de una silla, caminar 3 metros, girar y volver a sentarse.',
        evidence: 'Podsiadlo D & Richardson S. J Am Geriatr Soc (1991).',
        metrics: 'Punto de corte clínico > 13.5 s asociado a riesgo de caída',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/1991946/',
    },
    {
        name: 'Escala de Equilibrio de Berg (BBS)',
        abbr: 'Berg',
        category: 'equilibrio-neuro',
        categoryLabel: 'Equilibrio, Marcha y Neuro',
        icon: Layers,
        description: '14 tareas motoras estáticas y dinámicas (0 a 56 puntos) para determinar objetivamente el control postural y riesgo de caídas.',
        evidence: 'Berg KO et al. Can J Public Health (1992).',
        metrics: 'Fiabilidad inter-evaluador ICC = 0.98 · Corte < 45 pts',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/1468055/',
    },
    {
        name: 'Tinetti (POMA) — Marcha y Equilibrio',
        abbr: 'Tinetti',
        category: 'equilibrio-neuro',
        categoryLabel: 'Equilibrio, Marcha y Neuro',
        icon: Activity,
        description: 'Batería observacional (0 a 28 puntos) que evalúa el equilibrio estático/dinámico (16 pts) y la calidad de la marcha (12 pts).',
        evidence: 'Tinetti ME. J Am Geriatr Soc (1986).',
        metrics: 'Alto valor predictivo de caídas en adulto mayor (< 19 pts)',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/3944402/',
    },
    {
        name: 'Screening Örebro y Banderas Rojas DSS',
        abbr: 'Örebro / DSS',
        category: 'dolor-calidad',
        categoryLabel: 'Dolor y Función Global',
        icon: Stethoscope,
        description: 'Tamizaje temprano de factores psicosociales (banderas amarillas), riesgo de cronicidad laboral y signos de alarma médica.',
        evidence: 'Linton SJ & Halldén K. Clin J Pain (1998); Guías NICE NG59.',
        metrics: 'Identifica riesgo de discapacidad prolongada por dolor',
        refLabel: 'Ver publicación en PubMed',
        refHref: 'https://pubmed.ncbi.nlm.nih.gov/9758070/',
    },
]

/* ─── DSS 9 Analytical Stages ─── */
const flowSteps = [
    {
        step: 1,
        title: 'Perfil Demográfico y Contexto Clínico',
        description: 'Estructuración de edad, ocupación, nivel de actividad y motivo principal de consulta.',
        icon: FileText,
    },
    {
        step: 2,
        title: 'Mapa Corporal y Cuantificación EVA/ENA',
        description: 'Registro topográfico de cada zona sintomática con intensidad basal para seguimiento longitudinal.',
        icon: Activity,
    },
    {
        step: 3,
        title: 'Fenotipado de Mecanismos del Dolor',
        description: 'Identifica descriptores neuropáticos (ardor, corriente, parestesias) y sugiere tamizaje específico.',
        icon: Brain,
        decision: 'Descriptores neuropáticos → Sugerir cuestionario DN4',
    },
    {
        step: 4,
        title: 'Tamizaje de Banderas Rojas y Comorbilidades',
        description: 'Cruza antecedentes sistémicos, síntomas de alarma y patologías concomitantes para alertar derivación oportuna.',
        icon: Stethoscope,
    },
    {
        step: 5,
        title: 'Creencias, Expectativas y Catastrofización',
        description: 'Evalúa cogniciones frente al dolor y expectativas de recuperación que modulan el pronóstico funcional.',
        icon: Brain,
        decision: 'Alerta cognitiva → Sugerir escala PCS / educación en dolor',
    },
    {
        step: 6,
        title: 'Respuesta Conductual al Dolor',
        description: 'Clasifica el patrón motor frente al síntoma en Evitativo (kinesiofobia), Persistente (sobrecarga) o Equilibrado.',
        icon: ClipboardList,
    },
    {
        step: 7,
        title: 'Arquitectura y Calidad del Sueño',
        description: 'Analiza latencia, despertares nocturnos y descanso reparador como moduladores de la sensibilidad central.',
        icon: Moon,
    },
    {
        step: 8,
        title: 'Estilo de Vida y Determinantes de Salud',
        description: 'Integra nivel de actividad física basal, hábitos nutricionales y red de apoyo psicosocial.',
        icon: Apple,
    },
    {
        step: 9,
        title: 'Síntesis Clínica DSS e Informe Inicial',
        description: 'Consolida hallazgos, nivel de alerta biopsicosocial y escalas sugeridas directamente en la ficha del paciente.',
        icon: BarChart3,
    },
]

/* ─── International Clinical Frameworks ─── */
const clinicalFrameworks = [
    {
        org: 'NICE (Reino Unido)',
        code: 'Guías NG59 & NG193',
        title: 'Evaluación de Lumbalgia, Ciática y Dolor Crónico Primario',
        description:
            'Fundamenta el uso de herramientas de estratificación de riesgo biopsicosocial, el fomento del ejercicio terapéutico activo y la detección temprana de banderas rojas.',
        href: 'https://www.nice.org.uk/guidance/ng59',
    },
    {
        org: 'IASP',
        code: 'Clasificación ICD-11',
        title: 'Asociación Internacional para el Estudio del Dolor',
        description:
            'Respalda la diferenciación clínica entre dolor nociceptivo, neuropático y nociplástico incorporada en las reglas de análisis de la anamnesis de Kenkomed.',
        href: 'https://www.iasp-pain.org/',
    },
    {
        org: 'OMS (WHO)',
        code: 'Marco CIF (ICF)',
        title: 'Clasificación Internacional del Funcionamiento y la Discapacidad',
        description:
            'Estructura la evaluación kinésica más allá del daño tisular: integra funciones corporales, limitaciones en la actividad (PSFS, LEFS, QuickDASH) y factores contextuales.',
        href: 'https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health',
    },
    {
        org: 'Consenso COSMIN',
        code: 'Propiedades Psicométricas',
        title: 'Estándares para la Selección de Instrumentos de Medición en Salud (PROMs)',
        description:
            'Guía la selección de los 13 cuestionarios incluidos en Kenkomed en base a su validez de constructo, fiabilidad test-retest (ICC) y cambio clínico mínimo importante (MCID).',
        href: 'https://www.cosmin.nl/',
    },
]

const quickJumpLinks = [
    { href: '#origen-clinico', label: 'Investigación en Concepción' },
    { href: '#consola-evidencia', label: 'Consola de Reglas DSS' },
    { href: '#escalas-validadas', label: '13 Escalas (PubMed)' },
    { href: '#arquitectura-dss', label: 'Pipeline Analítico (9 etapas)' },
    { href: '#marcos-internacionales', label: 'Guías NICE / IASP / OMS' },
]

export default function InvestigacionContent() {
    const [activeCategory, setActiveCategory] = useState<ScaleCategory>('all')

    const filteredScales =
        activeCategory === 'all'
            ? scales
            : scales.filter((s) => s.category === activeCategory)

    return (
        <main className="bg-background text-foreground">

            {/* ═══ HERO — Mismo lenguaje visual limpio de la página principal ═══ */}
            <section
                aria-labelledby="investigacion-hero-heading"
                className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 bg-background border-b border-border/60 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Columna izquierda */}
                    <div className="lg:col-span-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/6 border border-brand/15 text-brand text-xs font-semibold mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0" aria-hidden="true" />
                            Base Científica y Motor DSS · Concepción, Chile
                        </div>

                        <h1
                            id="investigacion-hero-heading"
                            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] text-foreground tracking-tight leading-[1.06] mb-5 text-balance"
                        >
                            Evidencia clínica integrada en cada{' '}
                            <span className="text-brand">decisión terapéutica.</span>
                        </h1>

                        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8 max-w-xl">
                            Kenkomed nace de una investigación aplicada en la provincia de Concepción para
                            transformar la ficha kinésica estática en un sistema de soporte a la decisión
                            (DSS) respaldado por 13 escalas validadas y guías internacionales.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 mb-7">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
                            >
                                Agendar demo gratuita
                                <ArrowRight size={15} aria-hidden="true" />
                            </Link>
                            <a
                                href="#escalas-validadas"
                                className="inline-flex items-center justify-center gap-2 bg-card hover:border-brand hover:text-brand text-foreground font-medium text-sm px-6 py-3.5 rounded-full border border-border transition-colors"
                            >
                                Revisar las 13 escalas y referencias
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-foreground-muted">
                            <span className="inline-flex items-center gap-1.5">
                                <CheckCircle2 size={15} className="text-emerald shrink-0" aria-hidden="true" />
                                Referencias indexadas en PubMed
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <CheckCircle2 size={15} className="text-emerald shrink-0" aria-hidden="true" />
                                Criterios NICE, IASP y OMS
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <CheckCircle2 size={15} className="text-emerald shrink-0" aria-hidden="true" />
                                Investigación en terreno en Biobío
                            </span>
                        </div>
                    </div>

                    {/* Columna derecha: Vista real del motor DSS + Estadísticas */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border">
                                <div className="flex items-center gap-1.5" aria-hidden="true">
                                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald/80" />
                                </div>
                                <span className="text-[11px] font-mono text-foreground-muted">
                                    app.kenkomed.cl · Análisis Clínico DSS
                                </span>
                                <span className="text-[10px] font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full">
                                    Basado en Reglas
                                </span>
                            </div>
                            <img
                                src="/software/DSS.png"
                                alt="Resultados del motor de soporte a la decisión clínica (DSS) de Kenkomed"
                                width={860}
                                height={520}
                                fetchPriority="high"
                                className="w-full h-80 sm:h-96 object-cover object-top"
                            />
                        </div>

                        {/* Tarjeta flotante móvil con patrón conductual al dolor */}
                        <div className="hidden sm:block absolute -bottom-6 -left-4 w-52 rounded-2xl border border-border bg-card p-2 shadow-xl">
                            <div className="rounded-xl overflow-hidden border border-border/60 bg-surface">
                                <img
                                    src="/software/estadisticasphone_clean.png"
                                    alt="Gráfico móvil de Respuesta Conductual al Dolor en Kenkomed"
                                    width={220}
                                    height={360}
                                    loading="lazy"
                                    className="w-full h-40 object-cover object-bottom"
                                />
                            </div>
                            <div className="px-2 pt-2 pb-1">
                                <p className="text-[11px] font-bold text-foreground">Fenotipo Conductual</p>
                                <p className="text-[10px] text-foreground-muted">Evitativo vs. Persistente</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Barra de navegación rápida */}
                <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-border/60">
                    <nav
                        aria-label="Secciones de investigación"
                        className="flex flex-wrap items-center justify-between gap-3"
                    >
                        <span className="text-xs font-semibold text-foreground-muted">
                            Explorar documentación científica:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                            {quickJumpLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-surface hover:bg-brand/8 text-foreground hover:text-brand border border-border hover:border-brand/30 transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </section>

            {/* ═══ ORIGEN CLÍNICO Y FUNDAMENTOS (Bento Grid 3 columnas) ═══ */}
            <section
                id="origen-clinico"
                className="py-20 md:py-28 px-6 bg-surface/60 border-b border-border/60"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance">
                            Por qué digitalizar el papel{' '}
                            <span className="text-brand">no era suficiente</span>
                        </h2>
                        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                            Nuestro levantamiento en terreno en clínicas de rehabilitación de la Región del Biobío demostró que pasar del papel a un cuadro de texto vacío no mejora el razonamiento clínico ni ahorra tiempo en consulta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="rounded-2xl border border-border bg-card p-7 shadow-2xs flex flex-col justify-between">
                            <div>
                                <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center mb-5">
                                    <MapPin size={20} aria-hidden="true" />
                                </div>
                                <span className="inline-block text-[11px] font-semibold text-brand bg-brand/8 border border-brand/15 px-2.5 py-0.5 rounded-full mb-3">
                                    1. Investigación en Terreno
                                </span>
                                <h3 className="font-display font-bold text-xl text-foreground mb-2.5">
                                    Levantamiento en la provincia de Concepción
                                </h3>
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    Identificamos que los sistemas genéricos de agenda médica omiten por completo la evaluación funcional kinésica, obligando a los profesionales a llevar escalas en papel o planillas desconectadas.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-7 shadow-2xs flex flex-col justify-between">
                            <div>
                                <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center mb-5">
                                    <FlaskConical size={20} aria-hidden="true" />
                                </div>
                                <span className="inline-block text-[11px] font-semibold text-brand bg-brand/8 border border-brand/15 px-2.5 py-0.5 rounded-full mb-3">
                                    2. Enfoque Biopsicosocial
                                </span>
                                <h3 className="font-display font-bold text-xl text-foreground mb-2.5">
                                    De datos aislados a estratificación clínica
                                </h3>
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    El dolor persistente está fuertemente modulado por la calidad del sueño, creencias de evitación y factores psicosociales. Kenkomed captura estas dimensiones antes de que el paciente ingrese al box.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-7 shadow-2xs flex flex-col justify-between">
                            <div>
                                <div className="w-11 h-11 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald flex items-center justify-center mb-5">
                                    <GraduationCap size={20} aria-hidden="true" />
                                </div>
                                <span className="inline-block text-[11px] font-semibold text-emerald bg-emerald/10 px-2.5 py-0.5 rounded-full mb-3">
                                    3. Medición Objetiva (PROMs)
                                </span>
                                <h3 className="font-display font-bold text-xl text-foreground mb-2.5">
                                    Desenlaces cuantificables al alta
                                </h3>
                                <p className="text-sm text-foreground-muted leading-relaxed">
                                    El cálculo automatizado de puntajes y deltas funcionales pre/post ciclo permite demostrar objetivamente la evolución del paciente ante médicos derivadores, aseguradoras y el propio paciente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CONSOLA INTERACTIVA DE EVIDENCIA — De la literatura al algoritmo ═══ */}
            <InvestigacionEvidenceVisualizer />

            {/* ═══ 13 ESCALAS CLÍNICAS VALIDADAS (con filtro y enlaces PubMed reales) ═══ */}
            <section
                id="escalas-validadas"
                className="py-20 md:py-28 px-6 bg-background border-b border-border/60"
                aria-labelledby="scales-heading"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h2
                            id="scales-heading"
                            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance"
                        >
                            13 instrumentos clínicos con{' '}
                            <span className="text-brand">respaldo bibliográfico</span>
                        </h2>
                        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8">
                            Cada cuestionario integrado en Kenkomed cuenta con validación psicométrica publicada en revistas científicas indexadas y cálculo automático en ficha.
                        </p>

                        {/* Filtro por dominio clínico */}
                        <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filtrar escalas por dominio clínico">
                            {[
                                { id: 'all', label: 'Todas las escalas (13)' },
                                { id: 'dolor-calidad', label: 'Dolor, Función y Calidad de Vida (5)' },
                                { id: 'musculoesqueletico', label: 'Columna y Extremidades (4)' },
                                { id: 'equilibrio-neuro', label: 'Equilibrio, Marcha y Neuro (4)' },
                            ].map((tab) => {
                                const isActive = activeCategory === tab.id
                                return (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => setActiveCategory(tab.id as ScaleCategory)}
                                        aria-pressed={isActive}
                                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors cursor-pointer ${
                                            isActive
                                                ? 'bg-brand text-white border-brand shadow-2xs'
                                                : 'bg-card hover:bg-surface text-foreground border-border hover:border-brand/30'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredScales.map((scale) => {
                            const Icon = scale.icon
                            return (
                                <div
                                    key={scale.abbr}
                                    className="flex flex-col justify-between p-6 rounded-2xl bg-card border border-border hover:border-brand/35 transition-colors shadow-2xs"
                                >
                                    <div>
                                        <div className="flex items-center justify-between gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0 text-brand">
                                                <Icon size={18} aria-hidden="true" />
                                            </div>
                                            <span className="text-[11px] font-semibold text-brand bg-brand/8 border border-brand/15 px-2.5 py-0.5 rounded-full">
                                                {scale.categoryLabel}
                                            </span>
                                        </div>

                                        <h3 className="font-display font-bold text-foreground text-base leading-snug mb-2">
                                            {scale.name}
                                        </h3>
                                        <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                                            {scale.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="p-3.5 rounded-xl bg-surface border border-border/80 mb-4 space-y-1">
                                            <p className="text-xs text-foreground leading-relaxed">
                                                <strong>Referencia:</strong> {scale.evidence}
                                            </p>
                                            <p className="text-[11px] font-mono text-brand">
                                                {scale.metrics}
                                            </p>
                                        </div>

                                        <a
                                            href={scale.refHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                                        >
                                            <BookOpen size={13} aria-hidden="true" />
                                            {scale.refLabel}
                                            <ExternalLink size={11} aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ PIPELINE ANALÍTICO DSS (9 etapas en Bento Grid 3x3) ═══ */}
            <section
                id="arquitectura-dss"
                className="py-20 md:py-28 px-6 bg-surface/60 border-b border-border/60"
                aria-labelledby="dss-pipeline-heading"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <h2
                            id="dss-pipeline-heading"
                            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance"
                        >
                            Arquitectura de 9 etapas del{' '}
                            <span className="text-brand">análisis DSS</span>
                        </h2>
                        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                            A partir de las 14 páginas del formulario clínico de admisión, el motor ejecuta 9 etapas secuenciales de evaluación biopsicosocial para entregar el pre-informe al kinesiólogo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {flowSteps.map((item) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.step}
                                    className="rounded-2xl border border-border bg-card p-6 shadow-2xs flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center">
                                                <Icon size={18} aria-hidden="true" />
                                            </div>
                                            <span className="text-xs font-mono font-bold text-foreground-subtle">
                                                ETAPA 0{item.step}
                                            </span>
                                        </div>
                                        <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-foreground-muted leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {item.decision && (
                                        <div className="mt-4 pt-3 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-brand">
                                            <ChevronRight size={14} className="shrink-0" aria-hidden="true" />
                                            <span>{item.decision}</span>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ MARCOS INTERNACIONALES DE REFERENCIA (Enlaces verificables) ═══ */}
            <section
                id="marcos-internacionales"
                className="py-20 md:py-28 px-6 bg-background"
                aria-labelledby="frameworks-heading"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <h2
                            id="frameworks-heading"
                            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance"
                        >
                            Guías clínicas y consensos{' '}
                            <span className="text-brand">internacionales de referencia</span>
                        </h2>
                        <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                            Las reglas de apoyo a la decisión y la estructura de fichas de Kenkomed se fundamentan en cuatro marcos internacionales de referencia abierta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                        {clinicalFrameworks.map((fw) => (
                            <a
                                key={fw.org}
                                href={fw.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-2xs hover:border-brand/40 transition-colors flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-3 mb-3">
                                        <span className="text-xs font-bold text-brand bg-brand/8 border border-brand/15 px-3 py-1 rounded-full">
                                            {fw.org}
                                        </span>
                                        <span className="text-xs font-mono text-foreground-subtle">
                                            {fw.code}
                                        </span>
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-brand transition-colors mb-2">
                                        {fw.title}
                                    </h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                                        {fw.description}
                                    </p>
                                </div>
                                <div className="pt-3 border-t border-border/60 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                                    <span>Consultar guía oficial</span>
                                    <ExternalLink size={12} aria-hidden="true" />
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* CTA de cierre coherente con la página principal */}
                    <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface/70 p-8 sm:p-12 text-center shadow-xs">
                        <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 text-balance">
                            ¿Quieres ver el motor DSS y las 13 escalas en vivo?
                        </h3>
                        <p className="text-foreground-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                            Agenda una demostración clínica guiada para recorrer un caso completo desde la admisión remota por QR hasta el informe de evolución al alta.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors w-full sm:w-auto"
                            >
                                Agendar demo gratuita
                                <ArrowRight size={15} aria-hidden="true" />
                            </Link>
                            <Link
                                href="/funcionalidades"
                                className="inline-flex items-center justify-center gap-2 bg-card hover:border-brand hover:text-brand text-foreground font-medium text-sm px-6 py-3.5 rounded-full border border-border transition-colors w-full sm:w-auto"
                            >
                                Ver catálogo de 26 módulos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
