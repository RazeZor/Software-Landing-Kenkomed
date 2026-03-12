'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import {
  CalendarCheck,
  FileText,
  BarChart3,
  Smartphone,
  Bell,
  Shield,
  Zap,
  Brain,
  Users,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Historias Clínicas Digitales',
    desc: 'Registros médicos completos y seguros con acceso instantáneo desde cualquier dispositivo.',
  },
  {
    icon: BarChart3,
    title: 'Análisis y Reportes',
    desc: 'Visualización de datos con gráficos interactivos y reportes automáticos para mejores decisiones.',
  },
  {
    icon: Brain,
    title: 'Cuestionarios Clínicos',
    desc: 'Automatización de evaluaciones clínicas con escalas validadas (EVA, PSFS, Barthel, etc.).',
  },
  {
    icon: Users,
    title: 'Gestión de Pacientes',
    desc: 'Seguimiento personalizado con alertas, recordatorios y evolución del tratamiento.',
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    desc: 'Encriptación de datos, respaldos automáticos y cumplimiento de normativas de salud.',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda Inteligente',
    desc: 'Gestión de citas con recordatorios automáticos y optimización de horarios.',
  },
  {
    icon: Smartphone,
    title: 'App Móvil',
    desc: 'Accede a toda tu clínica desde tu iPhone o Android. Disponible en cualquier momento y lugar.',
  },
  {
    icon: Zap,
    title: 'Configuración en Minutos',
    desc: 'Sin instalaciones. Entra, configura tu perfil y comienza a usar. Soporte real incluido.',
  },
]

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            const cards = entry.target.querySelectorAll('.feature-card')
            cards.forEach((card, i) => {
              setTimeout(() => {
                ; (card as HTMLElement).style.opacity = '1'
                  ; (card as HTMLElement).style.transform = 'translateY(0)'
              }, i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-28 md:py-36 bg-background"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
            Funciones
          </span>
          <h2
            id="features-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
          >
            Todo lo que necesitas,{' '}
            <span className="text-gradient">nada de lo que no.</span>
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Diseñado específicamente para el flujo de trabajo de un kinesiólogo.
            Sin funciones de más, sin curva de aprendizaje.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="feature-card group p-6 rounded-2xl bg-card border border-border/60 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/5 cursor-default"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
                role="article"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                  <Icon size={20} className="text-brand" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{feat.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Large CTA banner */}
        <div className="mt-20 rounded-3xl bg-teal-50 dark:bg-surface-2 border border-teal-200/60 dark:border-border/60 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
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
          <a
            href="#pricing"
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Comenzar ahora
          </a>
        </div>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────
   PRODUCT SHOWCASE — Apple-style scroll reveal
──────────────────────────────────────────────── */

const showcaseItems = [
  {
    tag: 'DSS Clínico',
    title: 'Decisiones basadas en datos.',
    desc: 'Algoritmos clínicos inteligentes que asisten a kinesiólogos en la toma de decisiones médicas basadas en datos, evidencia científica y estándares clínicos actualizados.',
    images: [
      { src: '/software/DSS.jpg', alt: 'Sistema DSS de apoyo a la decisión clínica' },
      { src: '/software/Graficos.jpg', alt: 'Gráficos y visualización de datos clínicos' },
      { src: '/software/Panel.jpg', alt: 'Panel de control del sistema médico' },
    ],
    reverse: false,
  },
  {
    tag: 'Cuestionarios',
    title: 'Evaluaciones que fluyen.',
    desc: 'Semiautomatización de cuestionarios clínicos para agilizar la recopilación de datos y mejorar la precisión en diagnósticos y tratamientos, parametrizadas por sesiones.',
    images: [
      { src: '/software/EVA.jpg', alt: 'Cuestionario EVA - Escala Visual Analógica' },
      { src: '/software/Bartel.jpg', alt: 'Cuestionario Barthel de independencia funcional' },
      { src: '/software/PSFS.jpg', alt: 'Cuestionario PSFS - Escala Funcional' },
      { src: '/software/Groc.jpg', alt: 'Cuestionario GROC de percepción de cambio' },
    ],
    reverse: true,
  },
  {
    tag: 'App Móvil',
    title: 'Siempre contigo, en cualquier lugar.',
    desc: 'Tu clínica en el bolsillo. Consulta fichas, confirma citas y gestiona pacientes desde tu teléfono — disponible 24/7.',
    images: [
      { src: '/software/FichaClinica.jpg', alt: 'Ficha clínica digital del paciente' },
      { src: '/software/Recetas.jpg', alt: 'Gestión de recetas médicas' },
      { src: '/software/Cuerpo.jpg', alt: 'Mapa corporal interactivo' },
    ],
    reverse: false,
  },
]

/* ── Image Carousel sub-component ── */

function ImageCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
  }, [])

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Autoplay
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(next, 4000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, next])

  return (
    <div
      className="carousel-root relative rounded-2xl overflow-hidden shadow-xl border border-border/30 group/carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full aspect-[3/2] bg-gray-50 dark:bg-surface">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              transform: i === current ? 'scale(1)' : 'scale(1.04)',
              zIndex: i === current ? 1 : 0,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent pointer-events-none z-[2]" />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-card/80 backdrop-blur-sm border border-gray-200/60 dark:border-border/60 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-card shadow-md"
        aria-label="Imagen anterior"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-700 dark:text-foreground">
          <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 dark:bg-card/80 backdrop-blur-sm border border-gray-200/60 dark:border-border/60 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-card shadow-md"
        aria-label="Imagen siguiente"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-700 dark:text-foreground">
          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-white/40 shadow-sm ${
              i === current
                ? 'bg-white scale-110 shadow-md'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export function ProductShowcase() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const left = entry.target.querySelector('.reveal-left')
            const right = entry.target.querySelector('.reveal-right')
            if (left) {
              left.classList.add('animate-slide-left')
                ; (left as HTMLElement).style.opacity = '1'
            }
            if (right) {
              right.classList.add('animate-slide-right')
                ; (right as HTMLElement).style.opacity = '1'
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const items = document.querySelectorAll('.showcase-item')
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="product"
      className="py-28 md:py-36 bg-surface"
      aria-labelledby="product-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
            El Producto
          </span>
          <h2
            id="product-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance"
          >
            Diseñado para la realidad clínica.
          </h2>
        </div>

        <div className="flex flex-col gap-28">
          {showcaseItems.map((item) => (
            <div
              key={item.tag}
              className={`showcase-item flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Text side */}
              <div
                className={`flex-1 max-w-lg reveal-${item.reverse ? 'right' : 'left'}`}
                style={{ opacity: 0 }}
              >
                <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-5">
                  {item.tag}
                </span>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5 leading-tight text-balance">
                  {item.title}
                </h3>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  {item.desc}
                </p>
                <div className="w-12 h-1 rounded-full bg-brand mt-8" />
              </div>

              {/* Image carousel side */}
              <div
                className={`flex-1 w-full reveal-${item.reverse ? 'left' : 'right'}`}
                style={{ opacity: 0 }}
              >
                <ImageCarousel images={item.images} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

