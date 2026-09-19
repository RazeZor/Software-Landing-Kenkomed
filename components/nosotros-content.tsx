'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    ArrowLeft,
    ArrowRight,
    Linkedin,
    MapPin,
    Target,
    HeartPulse,
    ShieldCheck,
    Microscope,
    Compass,
    Sparkles,
} from 'lucide-react'

/* ─── Reveal on scroll (local, mismo patrón que el resto del sitio) ─── */
function useReveal() {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    obs.disconnect()
                }
            },
            { threshold: 0.08 },
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return { ref, visible }
}

/* ─── Team data ─── */
const team = [
    {
        name: 'Ignacio Castillo',
        role: 'Jefe de Proyecto',
        bio: 'Planifica, organiza y supervisa el proyecto. Gestiona tiempos, recursos, presupuesto y riesgos para que Kenkomed avance con foco.',
        image: '/images/fotonacho.jpeg',
        linkedin: 'https://www.linkedin.com/in/ignacio-castillo-jaramillo-831811295/',
    },
    {
        name: 'Ignacio Cabrera',
        role: 'Arquitecto de Software',
        bio: 'Define la arquitectura general, selecciona tecnologías y establece los patrones de diseño que aseguran escalabilidad y seguridad.',
        image: '/images/fotopelao.jpeg',
        linkedin: 'https://www.linkedin.com/in/icabrerabalmaceda/',
    },
    {
        name: 'Nicolás Jeldres',
        role: 'Desarrollador Frontend',
        bio: 'Construye la interfaz del sistema cuidando la compatibilidad entre navegadores y una experiencia de usuario fluida.',
        image: '/images/fotoNico.jpeg',
        linkedin: '#',
    },
    {
        name: 'Sebastián Molina',
        role: 'Desarrollador Backend',
        bio: 'Responsable de la lógica del servidor, la gestión de bases de datos y las APIs. Enfocado en seguridad y estabilidad.',
        image: '/images/fotoseba.jpeg',
        linkedin: '',
    },
    {
        name: 'Maximiliano Cuevas',
        role: 'DevOps & QA',
        bio: 'Despliega el sistema en producción, gestiona la infraestructura y ejecuta las pruebas de calidad que mantienen todo en pie.',
        image: '/images/fotomaxi.jpeg',
        linkedin: '',
    },
]

/* ─── Valores / principios ─── */
const values = [
    {
        icon: Microscope,
        title: 'Evidencia primero',
        desc: 'Cada escala y algoritmo del sistema está respaldado por literatura clínica validada, no por intuición.',
    },
    {
        icon: HeartPulse,
        title: 'El paciente al centro',
        desc: 'Diseñamos para devolverle tiempo al kinesiólogo y que ese tiempo vuelva a la atención del paciente.',
    },
    {
        icon: ShieldCheck,
        title: 'Datos que se respetan',
        desc: 'La información clínica es sensible. La tratamos con seguridad y responsabilidad en cada capa del producto.',
    },
    {
        icon: Compass,
        title: 'Hecho en terreno',
        desc: 'Nacimos investigando clínicas reales en Concepción. El producto se moldea con quienes lo usan.',
    },
]

export default function NosotrosContent() {
    const heroSection = useReveal()
    const storySection = useReveal()
    const valuesSection = useReveal()
    const teamSection = useReveal()
    const ctaSection = useReveal()

    return (
        <main className="bg-background text-foreground">

            {/* ═══════════════════════════════════════════════
                HERO — Manifiesto navy
                ═══════════════════════════════════════════════ */}
            <section
                className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
                style={{
                    background:
                        'linear-gradient(160deg, #05111e 0%, #081b35 32%, #0d2a50 56%, #091e3a 80%, #05111e 100%)',
                }}
            >
                <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.05]" aria-hidden="true" />
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div
                        className="absolute -top-40 left-1/2 w-[1100px] h-[1100px] -translate-x-1/2 rounded-full opacity-[0.14]"
                        style={{ background: 'radial-gradient(circle, oklch(0.48 0.18 246) 0%, transparent 65%)', filter: 'blur(110px)' }}
                    />
                    <div
                        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.10]"
                        style={{ background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)', filter: 'blur(90px)' }}
                    />
                </div>

                <div
                    ref={heroSection.ref}
                    className={`relative z-10 max-w-5xl mx-auto px-6 text-center scroll-reveal ${heroSection.visible ? 'is-visible' : ''}`}
                >
                    <div className="inline-flex items-center gap-2.5 glass-mint rounded-full px-5 py-2 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--kenko-pulse)' }} />
                            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--kenko-mint)' }} />
                        </span>
                        <Sparkles size={12} style={{ color: 'var(--kenko-pulse)' }} />
                        <span className="text-xs font-bold font-display tracking-[0.18em] uppercase" style={{ color: 'oklch(0.97 0.003 246 / 0.7)' }}>
                            Nosotros
                        </span>
                    </div>

                    <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-on-brand mb-7 text-balance">
                        No hacemos software.{' '}
                        <span
                            style={{
                                background: 'linear-gradient(135deg, var(--kenko-sapphire), var(--kenko-sky), var(--kenko-pulse))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Devolvemos tiempo clínico.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-on-brand-muted leading-relaxed max-w-3xl mx-auto">
                        Somos un equipo chileno que decidió meterse a las clínicas, entender el trabajo real del
                        kinesiólogo y construir la herramienta que siempre debió existir. Kenkomed es el resultado
                        de esa obsesión.
                    </p>

                    {/* Mini-stats */}
                    <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10">
                        {[
                            { value: '5', label: 'Profesionales' },
                            { value: '9', label: 'Escalas validadas' },
                            { value: '100%', label: 'Hecho en Chile' },
                            { value: '1', label: 'Misión clara' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/[0.03] px-4 py-6 text-center backdrop-blur-sm">
                                <p className="font-display font-bold text-3xl md:text-4xl text-on-brand mb-1">{stat.value}</p>
                                <p className="text-xs text-on-brand-subtle uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                HISTORIA — editorial de dos columnas
                ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-surface">
                <div ref={storySection.ref} className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
                        <div className={`scroll-reveal-left ${storySection.visible ? 'is-visible' : ''}`}>
                            <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                                Nuestra historia
                            </span>
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
                                Empezó con una pregunta incómoda.
                            </h2>
                            <div className="space-y-5 text-foreground-muted leading-relaxed">
                                <p>
                                    ¿Por qué los kinesiólogos, que trabajan con evidencia y precisión, siguen anotando
                                    en papel y perdiendo horas en burocracia? Esa pregunta nos llevó a la provincia de
                                    Concepción, a conversar con profesionales de la salud reales.
                                </p>
                                <p>
                                    Lo que encontramos fue claro: fichas dispersas, software caro que nadie entiende y
                                    cero apoyo a la decisión clínica. Decidimos construir lo contrario —{' '}
                                    <strong className="text-foreground font-semibold">
                                        un sistema que piensa con el kinesiólogo
                                    </strong>
                                    , no contra él.
                                </p>
                                <p>
                                    Hoy Kenkomed combina historia clínica digital, escalas validadas y un motor de
                                    apoyo a la decisión en una sola plataforma diseñada para el flujo real de la consulta.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-2 text-sm text-foreground-subtle">
                                <MapPin size={15} className="text-brand" />
                                Concepción, Chile
                            </div>
                        </div>

                        {/* Bloque visual */}
                        <div className={`scroll-reveal-right ${storySection.visible ? 'is-visible' : ''}`}>
                            <div
                                className="relative rounded-3xl overflow-hidden p-8 md:p-10 border border-border/60"
                                style={{
                                    background:
                                        'linear-gradient(150deg, #05111e 0%, #0d2a50 60%, #091e3a 100%)',
                                }}
                            >
                                <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.06]" aria-hidden="true" />
                                <div className="relative z-10">
                                    <Target size={28} style={{ color: 'var(--kenko-pulse)' }} className="mb-6" />
                                    <p className="font-display text-xl md:text-2xl font-semibold text-on-brand leading-snug mb-6">
                                        &ldquo;Cada minuto que un kinesiólogo pasa peleando con papeleo es un minuto que
                                        no está con su paciente.&rdquo;
                                    </p>
                                    <p className="text-sm text-on-brand-subtle">
                                        Es el principio que ordena cada decisión de producto que tomamos.
                                    </p>

                                    <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                                        <div>
                                            <p className="font-display font-bold text-3xl text-on-brand mb-1">30%+</p>
                                            <p className="text-xs text-on-brand-subtle leading-snug">del tiempo clínico se pierde hoy en burocracia</p>
                                        </div>
                                        <div>
                                            <p className="font-display font-bold text-3xl text-on-brand mb-1">7/10</p>
                                            <p className="text-xs text-on-brand-subtle leading-snug">centros sin sistema clínico estructurado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                VALORES — principios que nos ordenan
                ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-background">
                <div ref={valuesSection.ref} className="max-w-6xl mx-auto px-6">
                    <div className={`max-w-2xl mx-auto text-center mb-16 scroll-reveal ${valuesSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            Lo que nos ordena
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            Cuatro principios, cero atajos.
                        </h2>
                        <p className="text-foreground-muted leading-relaxed">
                            No son frases de marketing. Son los filtros por los que pasa cada funcionalidad antes de
                            llegar a tu consulta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {values.map((value, i) => {
                            const Icon = value.icon
                            return (
                                <div
                                    key={value.title}
                                    className={`group relative flex gap-5 p-7 rounded-2xl bg-card border border-border/60 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 scroll-reveal stagger-${i + 1} ${valuesSection.visible ? 'is-visible' : ''}`}
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-brand/10 text-brand group-hover:scale-110 transition-transform">
                                        <Icon size={22} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                                        <p className="text-sm text-foreground-muted leading-relaxed">{value.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                EQUIPO — presentación editorial (no cards genéricas)
                ═══════════════════════════════════════════════ */}
            <section className="py-24 md:py-32 bg-surface">
                <div ref={teamSection.ref} className="max-w-6xl mx-auto px-6">
                    <div className={`max-w-2xl mb-16 scroll-reveal ${teamSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            Las personas
                        </span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 text-balance">
                            Cinco personas detrás de cada detalle.
                        </h2>
                        <p className="text-foreground-muted leading-relaxed">
                            Un equipo multidisciplinario que combina gestión, arquitectura, desarrollo y calidad para
                            que Kenkomed funcione de verdad.
                        </p>
                    </div>

                    <div className="flex flex-col divide-y divide-border/60 border-y border-border/60">
                        {team.map((member, i) => (
                            <article
                                key={member.name}
                                className={`group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 py-7 transition-colors scroll-reveal stagger-${i + 1} ${teamSection.visible ? 'is-visible' : ''}`}
                            >
                                {/* Foto + nombre */}
                                <div className="flex items-center gap-5">
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl overflow-hidden ring-1 ring-border/60">
                                        <Image
                                            src={member.image}
                                            alt={`Fotografía de ${member.name}`}
                                            fill
                                            className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="md:hidden">
                                        <h3 className="font-display font-semibold text-lg text-foreground">{member.name}</h3>
                                        <p className="text-sm text-brand font-medium">{member.role}</p>
                                    </div>
                                </div>

                                {/* Info (desktop) */}
                                <div className="hidden md:block">
                                    <div className="flex items-baseline gap-3 mb-1.5">
                                        <h3 className="font-display font-semibold text-xl text-foreground">{member.name}</h3>
                                        <span className="text-sm text-brand font-medium">· {member.role}</span>
                                    </div>
                                    <p className="text-sm text-foreground-muted leading-relaxed max-w-2xl">{member.bio}</p>
                                </div>

                                {/* Bio en mobile */}
                                <p className="md:hidden text-sm text-foreground-muted leading-relaxed">{member.bio}</p>

                                {/* LinkedIn */}
                                {member.linkedin ? (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`LinkedIn de ${member.name}`}
                                        className="justify-self-start md:justify-self-end inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 text-foreground-subtle hover:text-brand hover:border-brand/40 hover:bg-brand/5 transition-all"
                                    >
                                        <Linkedin size={16} />
                                    </a>
                                ) : (
                                    <div className="justify-self-start md:justify-self-end w-10 h-10"></div>
                                )}
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                CTA final
                ═══════════════════════════════════════════════ */}
            <section
                ref={ctaSection.ref}
                className="relative py-24 md:py-32 overflow-hidden"
                style={{
                    background: 'linear-gradient(160deg, #05111e 0%, #0d2a50 55%, #05111e 100%)',
                }}
            >
                <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.05]" aria-hidden="true" />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.10] pointer-events-none"
                    style={{ background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)', filter: 'blur(100px)' }}
                    aria-hidden="true"
                />

                <div className={`relative z-10 max-w-3xl mx-auto px-6 text-center scroll-reveal ${ctaSection.visible ? 'is-visible' : ''}`}>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-on-brand mb-6 text-balance">
                        ¿Construimos el futuro de tu clínica juntos?
                    </h2>
                    <p className="text-lg text-on-brand-muted leading-relaxed mb-10 max-w-xl mx-auto">
                        Cuéntanos cómo trabajas hoy y te mostramos exactamente cómo Kenkomed encaja en tu día a día.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/#contact" className="btn-kenko-primary">
                            Hablemos
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/" className="btn-kenko-ghost text-sm font-medium">
                            <ArrowLeft size={14} /> Volver al inicio
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
