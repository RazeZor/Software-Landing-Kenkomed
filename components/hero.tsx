'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Zap, Clock } from 'lucide-react'
import { useReveal, useCountUp, useMousePosition } from '@/hooks/use-scroll-animation'

const stats = [
  { value: 500, prefix: '+', suffix: '', label: 'Clínicas confían en Kenkomed' },
  { value: 94, prefix: '', suffix: '%', label: 'Índice de mejora clínica' },
  { value: 40, prefix: '-', suffix: '%', label: 'Tiempo administrativo' },
]

const tickerItems = [
  'DSS Clínico',
  'Historias Clínicas Digitales',
  'Cuestionarios EVA · PSFS · Barthel',
  'Agenda Inteligente',
  'Anamnesis Digital',
  'Reportes Automáticos',
  'Seguridad de Datos Médicos',
  'Implementación Rápida',
  'Soporte Especializado',
  'Escalas GROC · ENA',
]

const trustBadges = [
  { icon: Shield, text: 'Datos encriptados' },
  { icon: Zap, text: 'Configuración en minutos' },
  { icon: Clock, text: 'Soporte Lun–Vie' },
]

/* ─── Circular carousel images — replace with your own ─── */
const heroSlides = [
  { src: '/images/kinesio-hero-1.png', alt: 'Sesión de kinesiología profesional' },
  { src: '/images/kinesio-hero-2.png', alt: 'Software clínico Kenkomed' },
  { src: '/images/kinesio-hero-3.png', alt: 'Rehabilitación con ejercicios' },
]

function AnimatedStat({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const display = useCountUp(stat.value, isVisible, 2000, stat.prefix, stat.suffix)
  return (
    <div className="text-center">
      <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
        {display}
      </p>
      <p className="text-sm text-foreground-muted">{stat.label}</p>
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const mouse = useMousePosition(heroRef)
  const { ref: statsRef, isVisible: statsVisible } = useReveal<HTMLDivElement>({ threshold: 0.3 })
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Parallax for background elements
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY
      const meshes = heroRef.current?.querySelectorAll('.hero-mesh')
      meshes?.forEach((mesh, i) => {
        const speed = (i + 1) * 0.08
          ; (mesh as HTMLElement).style.transform = `translateY(${scrollY * speed}px)`
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background"
      aria-label="Sección principal"
    >
      {/* Mouse-tracking glow */}
      <div
        className="hero-glow"
        aria-hidden="true"
        style={{
          left: `${mouse.x * 100}%`,
          top: `${mouse.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="hero-mesh absolute top-0 right-0 w-[900px] h-[900px] opacity-[0.06]"
          style={{ background: 'radial-gradient(circle at center, oklch(0.48 0.18 246), transparent 70%)' }}
        />
        <div
          className="hero-mesh absolute bottom-0 left-0 w-[700px] h-[700px] opacity-[0.05]"
          style={{ background: 'radial-gradient(circle at center, oklch(0.66 0.18 163), transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(oklch(0.48 0.18 246) 1px, transparent 1px), linear-gradient(90deg, oklch(0.48 0.18 246) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — Text (clean, no background images here) */}
          <div className="flex-1 max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8 animate-fade-up"
              style={{ opacity: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-brand tracking-wide uppercase">
                Sistema DSS Avanzado para Kinesiólogos
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6 animate-fade-up delay-100 text-balance"
              style={{ opacity: 0 }}
            >
              Digitaliza tu clínica.{' '}
              <span className="text-gradient">Potencia tu práctica.</span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-8 max-w-xl animate-fade-up delay-200"
              style={{ opacity: 0 }}
            >
              Kenkomed es el <strong className="text-foreground">Sistema de Soporte a la Decisión Clínica (DSS)</strong> diseñado
              para kinesiólogos y fisioterapeutas. Optimiza el seguimiento de pacientes con historias
              clínicas digitales, cuestionarios automatizados y gestión integral de tu centro.
            </p>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-3 mb-10 animate-fade-up delay-300"
              style={{ opacity: 0 }}
            >
              {trustBadges.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs text-foreground-muted">
                  <Icon size={13} className="text-emerald" />
                  {text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14 animate-fade-up delay-300"
              style={{ opacity: 0 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Solicitar Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                Ver Demo del Software
                <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors">
                  <ArrowRight size={12} />
                </span>
              </Link>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-6 animate-fade-up delay-400"
              style={{ opacity: 0 }}
            >
              <div className="flex -space-x-2">
                {['IC', 'IC', 'NJ', 'SM', 'MC'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-blue-100 border-2 border-background flex items-center justify-center text-[10px] font-bold text-brand"
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
                  <strong className="text-foreground">Confianza</strong> en kenkomed
                </p>
              </div>
            </div>
          </div>

          {/* Right — Circular Image Carousel */}
          <div
            className="flex-1 w-full max-w-xl flex items-center justify-center animate-scale-in delay-300"
            style={{ opacity: 0 }}
          >
            <div className="relative">
              {/* Decorative rings */}
              <div
                className="absolute -inset-6 rounded-full opacity-[0.07] animate-[spin_25s_linear_infinite]"
                aria-hidden="true"
                style={{
                  border: '2px dashed oklch(0.48 0.18 246)',
                }}
              />
              <div
                className="absolute -inset-12 rounded-full opacity-[0.04] animate-[spin_40s_linear_infinite_reverse]"
                aria-hidden="true"
                style={{
                  border: '1.5px dashed oklch(0.66 0.18 163)',
                }}
              />

              {/* Glow behind circle */}
              <div
                className="absolute -inset-8 rounded-full opacity-30 blur-3xl"
                aria-hidden="true"
                style={{
                  background: 'radial-gradient(circle, oklch(0.48 0.18 246 / 0.3), oklch(0.66 0.18 163 / 0.1), transparent 70%)',
                }}
              />

              {/* Main circular container */}
              <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full overflow-hidden border-4 border-white dark:border-border shadow-2xl">
                {heroSlides.map((slide, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-all duration-1000 ease-in-out"
                    style={{
                      opacity: currentSlide === i ? 1 : 0,
                      transform: currentSlide === i ? 'scale(1)' : 'scale(1.1)',
                    }}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={i === 0}
                    />
                  </div>
                ))}

                {/* Inner shadow for depth */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 60px oklch(0.48 0.18 246 / 0.08)',
                  }}
                />
              </div>

              {/* Carousel dots */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${currentSlide === i ? 'bg-brand w-6' : 'bg-border w-2'
                      }`}
                    aria-label={`Ver imagen ${i + 1}`}
                  />
                ))}
              </div>

              {/* Floating badges around the circle */}
              <div className="absolute -left-4 top-1/4 glass rounded-xl px-3 py-2 shadow-lg border border-border/40 hidden sm:block animate-float">
                <p className="text-[10px] text-foreground-muted">Pacientes</p>
                <p className="text-[10px] text-emerald font-medium">hoy</p>
              </div>

              <div className="absolute -right-4 top-2/3 glass rounded-xl px-3 py-2 shadow-lg border border-border/40 hidden sm:block animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-[10px] text-foreground-muted">Mejora clínica</p>
                <p className="text-[10px] text-emerald font-medium">DSS</p>
              </div>

              <div className="absolute -top-2 right-8 glass rounded-xl px-3 py-2 shadow-lg border border-border/40 hidden sm:block animate-float" style={{ animationDelay: '4s' }}>
                <p className="text-[10px] font-bold text-brand tracking-wider uppercase">Sistema DSS</p>
                <p className="text-[10px] text-foreground-muted">kenkomed.app</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — Animated counters */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-border/50 animate-fade-up delay-500"
          style={{ opacity: 0 }}
        >
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} stat={stat} isVisible={statsVisible} />
          ))}
        </div>
      </div>

      {/* Ticker strip */}
      <div className="relative overflow-hidden border-y border-border/40 bg-blue-50 py-3">
        <div className="flex gap-0 animate-ticker whitespace-nowrap" aria-hidden="true">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-6 text-sm font-medium text-brand"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald opacity-80" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
