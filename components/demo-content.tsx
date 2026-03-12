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
import { Navbar } from '@/components/navbar'
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
            <Navbar />

            {/* ═══ HERO ═══ */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
                {/* Background mesh — same as landing */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                    <div
                        className="absolute top-0 right-0 w-[800px] h-[800px] opacity-[0.06]"
                        style={{ background: 'radial-gradient(circle at center, oklch(0.48 0.18 246), transparent 70%)' }}
                    />
                    <div
                        className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.05]"
                        style={{ background: 'radial-gradient(circle at center, oklch(0.66 0.18 163), transparent 70%)' }}
                    />
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: 'linear-gradient(oklch(0.48 0.18 246) 1px, transparent 1px), linear-gradient(90deg, oklch(0.48 0.18 246) 1px, transparent 1px)',
                            backgroundSize: '64px 64px',
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8 animate-fade-up">
                        <Play size={12} className="text-brand fill-brand" />
                        <span className="text-xs font-semibold text-brand tracking-wide uppercase">
                            Demo del Producto
                        </span>
                    </div>

                    <h1
                        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6 animate-fade-up delay-100 text-balance"
                        style={{ opacity: 0 }}
                    >
                        Descubre Kenkomed{' '}
                        <span className="text-gradient">en Acción</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto mb-8 animate-fade-up delay-200"
                        style={{ opacity: 0 }}
                    >
                        Mira cómo Kenkomed transforma la gestión clínica de kinesiólogos.
                        Un software pensado por y para profesionales de la salud.
                    </p>

                    <div className="animate-fade-up delay-300" style={{ opacity: 0 }}>
                        <ChevronDown size={20} className="mx-auto text-foreground-muted animate-bounce" />
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
                                    className="relative z-10 w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl"
                                    aria-label="Reproducir video demo de Kenkomed"
                                >
                                    <Play size={28} className="fill-primary-foreground text-primary-foreground ml-1" />
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
            <section className="py-14 bg-blue-50 dark:bg-surface border-y border-border/40">
                <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">
                    <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {['RE', 'MF', 'AV', 'CO', 'FT'].map((initials, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 rounded-full bg-blue-100 border-2 border-background flex items-center justify-center text-[10px] font-bold text-brand"
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
                            <p className="text-sm text-foreground-muted">
                                <strong className="text-foreground">+500 clínicas</strong> confían en Kenkomed
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
                            <Shield size={13} className="text-emerald" />
                            Datos encriptados
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
                            <Zap size={13} className="text-emerald" />
                            Configuración en minutos
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA SECTION ═══ */}
            <section className="py-20 md:py-28">
                <div ref={ctaSection.ref} className={`max-w-7xl mx-auto px-6 scroll-reveal ${ctaSection.visible ? 'is-visible' : ''}`}>
                    <div className="rounded-3xl bg-teal-50 dark:bg-surface-2 border border-teal-200/60 dark:border-border/60 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
                        <div
                            className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none"
                            aria-hidden="true"
                            style={{
                                background: 'radial-gradient(circle, oklch(0.42 0.12 210), transparent 70%)',
                            }}
                        />
                        <div className="relative z-10">
                            <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3 text-balance">
                                ¿Listo para transformar tu clínica?
                            </h3>
                            <p className="text-foreground-muted max-w-lg leading-relaxed">
                                Únete a más de 500 kinesiólogos que ya optimizaron su práctica con Kenkomed.
                                Sin tarjeta de crédito — 30 días gratis.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
                            >
                                Solicitar Demo
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors px-6 py-3.5"
                            >
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
