'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Play,
    ArrowRight,
    CalendarCheck,
    FileText,
    BarChart3,
    Smartphone,
    ArrowLeft,
    ChevronDown,
    Star,
    Shield,
    Zap,
} from 'lucide-react'
import { Footer } from '@/components/footer'

/* ─── YouTube Video ID ─── */
const YOUTUBE_VIDEO_ID = '3ECdRZUSPlw'

const highlights = [
    {
        icon: CalendarCheck,
        title: 'Agenda Inteligente',
        desc: 'Organiza tu día con una agenda que se adapta a ti.',
    },
    {
        icon: FileText,
        title: 'Fichas Clínicas',
        desc: 'Documentación SOAP digital con plantillas listas.',
    },
    {
        icon: BarChart3,
        title: 'Reportes DSS',
        desc: 'Métricas clínicas en tiempo real para decisiones informadas.',
    },
    {
        icon: Smartphone,
        title: 'App Móvil',
        desc: 'Tu clínica en el bolsillo, disponible 24/7.',
    },
]

/* Real software screenshots for the gallery */
const galleryImages = [
    { src: '/software/Panel.jpg', alt: 'Panel de control del sistema clínico Kenkomed', caption: 'Panel Principal' },
    { src: '/software/DSS.jpg', alt: 'Sistema de apoyo a la decisión clínica DSS Kenkomed', caption: 'DSS Clínico' },
    { src: '/software/FichaClinica.jpg', alt: 'Ficha clínica digital del paciente en Kenkomed', caption: 'Ficha Clínica' },
    { src: '/software/Graficos.jpg', alt: 'Gráficos y visualización de datos clínicos en Kenkomed', caption: 'Estadísticas' },
    { src: '/software/EVA.jpg', alt: 'Cuestionario EVA - Escala Visual Analógica en Kenkomed', caption: 'Cuestionario EVA' },
    { src: '/software/Bartel.jpg', alt: 'Cuestionario Barthel de independencia funcional en Kenkomed', caption: 'Barthel' },
    { src: '/software/PSFS.jpg', alt: 'Escala Funcional Específica del Paciente PSFS en Kenkomed', caption: 'PSFS' },
    { src: '/software/Groc.jpg', alt: 'Cuestionario GROC de percepción de cambio global en Kenkomed', caption: 'GROC' },
    { src: '/software/Condiciones.jpg', alt: 'Gestión de condiciones clínicas en Kenkomed', caption: 'Condiciones' },
    { src: '/software/Ingreso.jpg', alt: 'Pantalla de ingreso de pacientes en Kenkomed', caption: 'Ingreso' },
    { src: '/software/Recetas.jpg', alt: 'Gestión de recetas médicas en Kenkomed', caption: 'Recetas Médicas' },
    { src: '/software/Cuerpo.jpg', alt: 'Mapa corporal interactivo para evaluación kinesiológica', caption: 'Mapa Corporal' },
]

function useRevealOnScroll() {
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

export default function DemoContent() {
    const [videoPlaying, setVideoPlaying] = useState(false)
    const videoSection = useRevealOnScroll()
    const highlightsSection = useRevealOnScroll()
    const gallerySection = useRevealOnScroll()
    const ctaSection = useRevealOnScroll()

    return (
        <main className="bg-background text-foreground">

            {/* ═══ HERO — Identidad Kenkomed Navy ═══ */}
            <section
                className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
                style={{
                    background: 'linear-gradient(160deg, #05111e 0%, #081b35 30%, #0d2a50 55%, #091e3a 78%, #05111e 100%)',
                }}
            >
                {/* Grid de fondo */}
                <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.05]" aria-hidden="true" />

                {/* Orbes atmosféricos */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.15]"
                        style={{ background: 'radial-gradient(circle, oklch(0.48 0.18 246) 0%, transparent 65%)', filter: 'blur(80px)' }} />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.10]"
                        style={{ background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)', filter: 'blur(80px)' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full opacity-[0.08]"
                        style={{ background: 'radial-gradient(ellipse, oklch(0.62 0.16 230) 0%, transparent 60%)', filter: 'blur(60px)' }} />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2.5 glass-mint rounded-full px-5 py-2 mb-8 animate-fade-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--kenko-pulse)' }} />
                            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--kenko-mint)' }} />
                        </span>
                        <Play size={12} style={{ color: 'var(--kenko-pulse)', fill: 'var(--kenko-pulse)' }} />
                        <span className="text-xs font-bold font-display tracking-[0.18em] uppercase" style={{ color: 'oklch(0.97 0.003 246 / 0.7)' }}>
                            Demo del Producto
                        </span>
                    </div>

                    <h1
                        className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] tracking-tight text-on-brand mb-6 animate-fade-up delay-100 text-balance"
                        style={{ opacity: 0 }}
                    >
                        Descubre Kenkomed{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, var(--kenko-sapphire), var(--kenko-sky), var(--kenko-pulse))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>en Acción</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-on-brand-muted leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-up delay-200"
                        style={{ opacity: 0 }}
                    >
                        Mira cómo Kenkomed transforma la gestión clínica de kinesiólogos.
                        Un software pensado por y para profesionales de la salud.
                    </p>

                    <div className="animate-fade-up delay-300" style={{ opacity: 0 }}>
                        <ChevronDown size={20} className="mx-auto animate-bounce" style={{ color: 'var(--kenko-pulse)' }} />
                    </div>
                </div>
            </section>

            {/* ═══ VIDEO SECTION ═══ */}
            <section className="pb-20 md:pb-28 px-6">
                <div
                    ref={videoSection.ref}
                    className={`max-w-5xl mx-auto scroll-reveal-scale ${videoSection.visible ? 'is-visible' : ''}`}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30">
                        {!videoPlaying ? (
                            <div
                                className="relative aspect-video bg-surface flex items-center justify-center cursor-pointer group"
                                onClick={() => setVideoPlaying(true)}
                            >
                                {/* Thumbnail — uses first gallery image as background */}
                                <Image
                                    src="/software/Panel.jpg"
                                    alt="Vista previa del video demo de Kenkomed - software de gestión clínica para kinesiólogos"
                                    fill
                                    className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

                                {/* Kenkomed watermark */}
                                <div className="absolute top-4 left-4 glass rounded-lg px-3 py-2 border border-border/40">
                                    <p className="text-[10px] font-bold text-brand tracking-wider uppercase">Demo Kenkomed</p>
                                </div>

                                {/* Play button */}
                                <button
                                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl"
                                    style={{ background: 'linear-gradient(135deg, var(--kenko-mint), var(--kenko-pulse))' }}
                                    aria-label="Reproducir video demo de Kenkomed"
                                >
                                    <Play size={28} className="fill-[#05111e] text-[#05111e] ml-1" />
                                </button>

                                {/* Duration */}
                                <div className="absolute bottom-4 right-4 glass rounded-lg px-3 py-1.5 border border-border/40">
                                    <span className="text-xs font-mono font-medium text-foreground-muted">Demo</span>
                                </div>
                            </div>
                        ) : (
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                                    title="Demo de Kenkomed — Software para Kinesiólogos"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ═══ HIGHLIGHTS ═══ */}
            <section className="py-20 md:py-28 bg-surface">
                <div ref={highlightsSection.ref} className="max-w-7xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${highlightsSection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            ¿Qué Verás?
                        </span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance">
                            Todo lo que necesitas,{' '}
                            <span className="text-gradient">en un solo lugar.</span>
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Kenkomed integra todas las herramientas que un kinesiólogo necesita en su día a día.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {highlights.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={item.title}
                                    className={`group p-6 rounded-2xl bg-card border border-border/60 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1 cursor-default scroll-reveal stagger-${i + 1} ${highlightsSection.visible ? 'is-visible' : ''}`}
                                >
                                    <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                                        <Icon size={20} className="text-brand" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-foreground-muted leading-relaxed">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ SCROLLING IMAGE GALLERY ═══ */}
            <section className="py-20 md:py-28">
                <div ref={gallerySection.ref} className="max-w-7xl mx-auto px-6">
                    <div className={`text-center mb-16 scroll-reveal ${gallerySection.visible ? 'is-visible' : ''}`}>
                        <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                            Capturas
                        </span>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance">
                            Así se ve{' '}
                            <span className="text-gradient">Kenkomed</span>
                        </h2>
                        <p className="text-lg text-foreground-muted leading-relaxed max-w-2xl mx-auto">
                            Explora las distintas vistas del software diseñado para kinesiólogos.
                        </p>
                    </div>

                    {/* Scrolling gallery — horizontal scroll on mobile, grid on desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((img, i) => (
                            <div
                                key={i}
                                className={`group relative rounded-2xl overflow-hidden border border-border/60 hover:border-teal-200 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/5 card-hover scroll-reveal stagger-${i + 1} ${gallerySection.visible ? 'is-visible' : ''}`}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-4 bg-card">
                                    <p className="text-sm font-semibold text-foreground">{img.caption}</p>
                                    <p className="text-xs text-foreground-muted mt-1">{img.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SOCIAL PROOF STRIP ═══ */}
            <section
                className="py-14 border-y"
                style={{
                    background: 'linear-gradient(90deg, #05111e, #081b35, #05111e)',
                    borderColor: 'oklch(0.48 0.18 246 / 0.2)',
                }}
            >
                <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {['RE', 'MF', 'AV', 'CO', 'FT'].map((initials, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 rounded-full kenko-card border-2 flex items-center justify-center text-[10px] font-bold font-display text-on-brand"
                                    style={{ borderColor: 'oklch(0.48 0.18 246 / 0.3)' }}
                                >
                                    {initials}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <p className="text-sm text-on-brand-muted">
                                <strong className="text-on-brand">+500 clínicas</strong> confían en Kenkomed
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5 text-xs text-on-brand-subtle">
                            <Shield size={13} style={{ color: 'var(--kenko-pulse)' }} />
                            Datos encriptados
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-on-brand-subtle">
                            <Zap size={13} style={{ color: 'var(--kenko-pulse)' }} />
                            Configuración en minutos
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA SECTION ═══ */}
            <section className="py-20 md:py-28">
                <div ref={ctaSection.ref} className={`max-w-7xl mx-auto px-6 scroll-reveal ${ctaSection.visible ? 'is-visible' : ''}`}>
                    <div
                        className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
                        style={{
                            background: 'linear-gradient(135deg, #05111e 0%, #0a2340 40%, #0d2d52 70%, #081b35 100%)',
                            border: '1px solid oklch(0.48 0.18 246 / 0.2)',
                            boxShadow: '0 24px 80px oklch(0.05 0.01 240 / 0.5)',
                        }}
                    >
                        <div className="absolute inset-0 pointer-events-none kenko-grid opacity-[0.04]" aria-hidden="true" />
                        <div
                            className="absolute right-0 top-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
                            aria-hidden="true"
                            style={{ background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)', filter: 'blur(60px)' }}
                        />
                        <div className="relative z-10">
                            <h3 className="font-display font-bold text-2xl md:text-3xl text-on-brand mb-3 text-balance">
                                ¿Listo para transformar tu clínica?
                            </h3>
                            <p className="text-on-brand-muted max-w-lg leading-relaxed">
                                Únete a más de 500 kinesiólogos que ya optimizaron su práctica con Kenkomed.
                                Sin tarjeta de crédito — 30 días gratis.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <a href="/#contact" className="btn-kenko-primary">
                                Solicitar Demo
                                <ArrowRight size={16} />
                            </a>
                            <Link href="/" className="btn-kenko-ghost text-sm">
                                <ArrowLeft size={14} />
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
