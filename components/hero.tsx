'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Shield, Zap, Clock, CheckCircle2 } from 'lucide-react'
import { useReveal, useCountUp, useMousePosition } from '@/hooks/use-scroll-animation'

const stats = [
  { value: 8,   prefix: '', suffix: '',  label: 'Escalas clínicas validadas' },
  { value: 9,   prefix: '', suffix: '',  label: 'Pasos de anamnesis inteligente' },
  { value: 100, prefix: '', suffix: '%', label: 'Especializado en kinesiología' },
]

const tickerItems = [
  'DSS Clínico',
  'Admisión Remota por QR',
  'Historias Clínicas Digitales',
  'Cuestionarios PSFS · GROC · Barthel',
  'Agenda Inteligente',
  'Anamnesis de 14 Páginas Sin Papel',
  'Reportes Automáticos con DSS',
  'Escalas Oswestry · LEFS · EQ-5D',
  'Recetas Médicas Digitales',
  'Panel de Monitoreo en Tiempo Real',
  'Prescripciones para Impresión',
  'Soporte Especializado en Kinesiología',
  'Screening · ENA · Control de Roles',
]

const trustBadges = [
  { icon: Shield,       text: 'Datos encriptados' },
  { icon: Zap,          text: 'Configuración en minutos' },
  { icon: Clock,        text: 'Soporte Lun–Vie' },
  { icon: CheckCircle2, text: 'Escalas validadas OMS' },
]

function AnimatedStat({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const display = useCountUp(stat.value, isVisible, 2000, stat.prefix, stat.suffix)
  return (
    <div className="text-center">
      <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">{display}</p>
      <p className="text-sm text-foreground-muted">{stat.label}</p>
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const mouse   = useMousePosition(heroRef)
  const { ref: statsRef, isVisible: statsVisible } = useReveal<HTMLDivElement>({ threshold: 0.3 })

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const handler = () => {
      const sy = window.scrollY
      heroRef.current?.querySelectorAll('.hero-mesh').forEach((m, i) => {
        ;(m as HTMLElement).style.transform = `translateY(${sy * (i + 1) * 0.05}px)`
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — una sola sección unificada: texto + panel integrado
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-background"
        aria-label="Sección principal"
      >
        {/* Mouse glow */}
        <div
          className="hero-glow"
          aria-hidden="true"
          style={{ left: `${mouse.x * 100}%`, top: `${mouse.y * 100}%`, transform: 'translate(-50%,-50%)' }}
        />

        {/* Background meshes */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="hero-mesh absolute -top-32 left-1/2 -translate-x-1/2 w-[1400px] h-[600px] opacity-[0.08]"
            style={{ background: 'radial-gradient(ellipse at center top, oklch(0.48 0.18 246), transparent 65%)' }}
          />
          <div
            className="hero-mesh absolute top-1/3 -left-40 w-[600px] h-[600px] opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, oklch(0.66 0.18 163), transparent 70%)' }}
          />
          <div
            className="hero-mesh absolute top-1/3 -right-40 w-[600px] h-[600px] opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, oklch(0.48 0.18 246), transparent 70%)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'linear-gradient(oklch(0.48 0.18 246) 1px,transparent 1px),linear-gradient(90deg,oklch(0.48 0.18 246) 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        {/* ── TEXT content ── */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-16 text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8 animate-fade-up"
            style={{ opacity: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-semibold text-brand tracking-wide uppercase">
              Sistema DSS Avanzado para Kinesiólogos
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.04] tracking-tight text-foreground mb-6 animate-fade-up delay-100 text-balance"
            style={{ opacity: 0 }}
          >
            Digitaliza tu clínica.{' '}
            <span className="text-gradient">Potencia tu práctica.</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-9 max-w-2xl mx-auto animate-fade-up delay-200"
            style={{ opacity: 0 }}
          >
            Kenkomed es el{' '}
            <strong className="text-foreground">Sistema de Soporte a la Decisión Clínica (DSS)</strong>{' '}
            diseñado para kinesiólogos y fisioterapeutas. Anamnesis inteligente, 9&nbsp;escalas
            validadas y gestión integral — todo en una plataforma.
          </p>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-9 animate-fade-up delay-200"
            style={{ opacity: 0 }}
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-foreground-muted">
                <Icon size={13} className="text-emerald-500" />
                {text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up delay-300"
            style={{ opacity: 0 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Solicitar Demo Gratuita
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
            >
              Ver Demo del Software
              <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center">
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          {/* Social proof */}
          <div
            className="flex items-center justify-center gap-5 animate-fade-up delay-400"
            style={{ opacity: 0 }}
          >
            <div className="flex -space-x-2">
              {['IC', 'NJ', 'SM', 'MC', 'KP'].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-blue-100 border-2 border-background flex items-center justify-center text-[10px] font-bold text-brand"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-foreground-muted">
                <strong className="text-foreground">Confianza</strong> en Kenkomed
              </p>
            </div>
          </div>
        </div>

        {/* ── DASHBOARD MOCKUP — integrado dentro del hero ── */}
        <div
          className="relative z-10 animate-fade-up delay-500"
          style={{ opacity: 0 }}
        >
          {/* Glow suave detrás del panel */}
          <div
            className="absolute inset-x-0 top-0 h-40 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 0%, oklch(0.48 0.18 246 / 0.12), transparent 80%)',
            }}
          />

          {/* Contenedor del mockup — márgenes laterales para dar perspectiva */}
          <div className="px-4 sm:px-10 lg:px-20 xl:px-28">
            <div
              className="relative rounded-t-2xl overflow-hidden"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(0,0,0,0.08), 0 24px 80px rgba(0,0,0,0.18), 0 60px 160px oklch(0.48 0.18 246 / 0.1)',
              }}
            >
              {/* Chrome del browser */}
              <div className="flex items-center gap-3 px-5 py-3 bg-[#e8e8e8] dark:bg-[#1c1c1e] border-b border-black/[0.07] dark:border-white/[0.07]">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>

                {/* Barra URL */}
                <div className="flex-1 max-w-xs mx-auto">
                  <div className="flex items-center gap-2 bg-white dark:bg-[#2c2c2e] rounded-md px-3 py-1 border border-black/[0.07] dark:border-white/[0.07]">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" className="text-emerald-500 flex-shrink-0">
                      <rect x="1" y="5" width="8" height="7" rx="1.5" fill="currentColor" opacity="0.3" />
                      <path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <circle cx="5" cy="8.5" r="1" fill="currentColor" />
                    </svg>
                    <span className="text-[11px] text-foreground-muted font-medium tracking-tight select-none">
                      app.kenkomed.cl/panel
                    </span>
                  </div>
                </div>

                {/* Iconos de navegación placeholder */}
                <div className="flex gap-2 opacity-25 flex-shrink-0">
                  <div className="w-4 h-4 rounded bg-gray-400" />
                  <div className="w-4 h-4 rounded bg-gray-400" />
                  <div className="w-4 h-4 rounded bg-gray-400" />
                </div>
              </div>

              {/* Screenshot del dashboard */}
              <div className="relative w-full" style={{ aspectRatio: '1440 / 820' }}>
                <Image
                  src="/software/Panel.jpg"
                  alt="Panel de control Kenkomed — gestión clínica para kinesiólogos"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                  priority
                />

                {/* Fade inferior que une la imagen con la sección siguiente */}
                <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none hero-panel-fade" />
              </div>
            </div>
          </div>

          {/* Floating badges sobre el mockup */}
          <div className="relative">
            <div className="absolute -top-48 left-4 sm:left-6 lg:left-24 glass rounded-2xl px-4 py-3 shadow-xl border border-border/50 hidden md:block animate-float">
              <p className="text-[10px] text-foreground-muted font-medium uppercase tracking-wide mb-0.5">Citas hoy</p>
              <p className="text-base font-bold text-brand">4 confirmadas</p>
            </div>
            <div className="absolute -top-40 right-4 sm:right-6 lg:right-24 glass rounded-2xl px-4 py-3 shadow-xl border border-border/50 hidden md:block animate-float" style={{ animationDelay: '1.8s' }}>
              <p className="text-[10px] text-foreground-muted font-medium uppercase tracking-wide mb-0.5">DSS activo</p>
              <p className="text-[11px] font-bold text-emerald-600">● En línea</p>
            </div>
            <div className="absolute -top-20 right-4 sm:right-8 lg:right-40 glass rounded-2xl px-4 py-3 shadow-xl border border-border/50 hidden lg:block animate-float" style={{ animationDelay: '3s' }}>
              <p className="text-[10px] text-foreground-muted font-medium uppercase tracking-wide mb-0.5">Cuestionarios</p>
              <p className="text-base font-bold text-teal-600">97% completos</p>
            </div>
            <div className="absolute -top-20 left-4 sm:left-8 lg:left-40 glass rounded-2xl px-4 py-3 shadow-xl border border-border/50 hidden lg:block animate-float" style={{ animationDelay: '0.8s' }}>
              <p className="text-[10px] text-foreground-muted font-medium uppercase tracking-wide mb-0.5">Admisión QR</p>
              <p className="text-[11px] font-bold text-blue-600">● Paciente en camino</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar — fuera del hero, debajo del panel ── */}
      <div className="relative bg-background">
        <div
          ref={statsRef}
          className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-6 py-12 border-t border-border/40"
        >
          {stats.map(stat => (
            <AnimatedStat key={stat.label} stat={stat} isVisible={statsVisible} />
          ))}
        </div>
      </div>

      {/* ── Ticker ── */}
      <div className="relative overflow-hidden border-y border-border/40 bg-blue-50 dark:bg-surface py-3">
        <div className="flex gap-0 animate-ticker whitespace-nowrap" aria-hidden="true">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-medium text-brand">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-80" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
