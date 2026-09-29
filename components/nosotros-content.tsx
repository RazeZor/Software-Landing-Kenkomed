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
import { TeamSection } from './ui/team-section'

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
const teamMembersData = [
    {
        name: 'Ignacio Castillo',
        designation: 'Jefe de Proyecto',
        imageSrc: '/images/fotonacho.jpeg',
        socialLinks: [
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ignacio-castillo-jaramillo-831811295/' },
        ],
    },
    {
        name: 'Ignacio Cabrera',
        designation: 'Arquitecto de Software',
        imageSrc: '/images/fotopelao.jpeg',
        socialLinks: [
            { icon: Linkedin, href: 'https://www.linkedin.com/in/icabrerabalmaceda/' },
        ],
    },
    {
        name: 'Nicolás Jeldres',
        designation: 'Desarrollador Frontend',
        imageSrc: '/images/fotoNico.jpeg',
        socialLinks: [
            { icon: Linkedin, href: '#' },
        ],
    },
    {
        name: 'Sebastián Molina',
        designation: 'Desarrollador Backend',
        imageSrc: '/images/fotoseba.jpeg',
        socialLinks: [
            { icon: Linkedin, href: '#' },
        ],
    },
    {
        name: 'Maximiliano Cuevas',
        designation: 'DevOps & QA',
        imageSrc: '/images/fotomaxi.jpeg',
        socialLinks: [
            { icon: Linkedin, href: '#' },
        ],
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
                HERO — Less generic with image composition
                ═══════════════════════════════════════════════ */}
            <section
                className="relative min-h-[90vh] flex items-center pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
                style={{
                    background: 'radial-gradient(ellipse at 50% -20%, #0d2a50 0%, #05111e 60%, #03080f 100%)',
                }}
            >
                <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.08]" aria-hidden="true" />
                
                {/* Floating Image Elements for less generic look */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute -right-20 top-20 w-[400px] h-[500px] rounded-[3rem] rotate-12 opacity-40 overflow-hidden mix-blend-overlay">
                        <img src="/images/kinesio-hero-2.png" alt="Clínica" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -left-32 bottom-10 w-[500px] h-[400px] rounded-[4rem] -rotate-6 opacity-30 overflow-hidden mix-blend-overlay">
                        <img src="/images/kinesio-session.jpg" alt="Kinesiólogo" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div
                    ref={heroSection.ref}
                    className={`relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center scroll-reveal ${heroSection.visible ? 'is-visible' : ''}`}
                >
                    <div className="text-left">
                        <div className="inline-flex items-center gap-2.5 glass-mint rounded-full px-5 py-2 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--kenko-pulse)' }} />
                                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--kenko-mint)' }} />
                            </span>
                            <Sparkles size={12} style={{ color: 'var(--kenko-pulse)' }} />
                            <span className="text-xs font-bold font-display tracking-[0.18em] uppercase" style={{ color: 'oklch(0.97 0.003 246 / 0.7)' }}>
                                Sobre Nosotros
                            </span>
                        </div>

                        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-on-brand mb-7 text-balance">
                            No hacemos software.{' '}
                            <span
                                style={{
                                    background: 'linear-gradient(135deg, var(--kenko-sapphire), var(--kenko-sky), var(--kenko-pulse))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Devolvemos tiempo.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-on-brand-muted leading-relaxed max-w-2xl mb-10">
                            Somos un equipo que decidió meterse a las clínicas, entender el trabajo real del kinesiólogo y construir la herramienta que siempre debió existir. Kenkomed es el resultado de esa obsesión.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="/#contact" className="btn-kenko-primary shadow-lg shadow-brand/20">
                                Conoce el equipo <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full aspect-square md:aspect-video lg:aspect-square lg:max-w-md mx-auto mt-8 lg:mt-0">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand/30 to-transparent rounded-[2rem] transform rotate-3 scale-105 blur-xl"></div>
                        <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img src="/images/kinesio-hero-1.png" alt="Kenkomed equipo trabajando" className="w-full h-full object-cover" />
                            
                            {/* Overlay Stats Card */}
                            <div className="absolute bottom-6 -left-4 lg:-left-8 bg-surface/90 backdrop-blur-md border border-border/50 p-5 rounded-2xl shadow-xl max-w-[200px] transform hover:scale-105 transition-transform duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                                        <HeartPulse size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-foreground">100%</p>
                                        <p className="text-xs text-foreground-muted leading-tight mt-0.5">Enfocados en clínica</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                EQUIPO — Componente TeamSection Integrado
                ═══════════════════════════════════════════════ */}
            <div ref={teamSection.ref} className={`scroll-reveal ${teamSection.visible ? 'is-visible' : ''}`}>
                <TeamSection
                    title="EQUIPO"
                    description="Un equipo multidisciplinario que combina gestión, arquitectura, desarrollo y calidad para que Kenkomed funcione de verdad. No son frases de marketing. Somos las cinco personas detrás de cada detalle."
                    members={teamMembersData}
                    className="bg-surface"
                />
            </div>

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
