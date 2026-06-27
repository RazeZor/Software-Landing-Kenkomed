'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Clock, CheckCircle2 } from 'lucide-react'
import {
  useReveal,
  useCountUp,
  useMousePosition,
  usePrefersMotionFx,
} from '@/hooks/use-scroll-animation'
import {
  BrandGrid,
  DataParticle,
  PulseDivider,
  SectionEyebrow,
} from '@/components/brand-elements'

const stats = [
  { value: 8,   prefix: '', suffix: '',  label: 'Escalas clínicas validadas' },
  { value: 9,   prefix: '', suffix: '',  label: 'Pasos de anamnesis inteligente' },
  { value: 100, prefix: '', suffix: '%', label: 'Especializado en kinesiología' },
]

const tickerItems = [
  'DSS clínico para kinesiólogos',
  'Admisión QR sin papel',
  '8 escalas validadas',
  'Agenda y fichas digitales',
  'Hecho en Chile',
]

const trustBadges = [
  { icon: Shield,       text: 'Datos encriptados' },
  { icon: Zap,          text: 'Configuración en minutos' },
  { icon: Clock,        text: 'Soporte Lun–Vie' },
  { icon: CheckCircle2, text: 'Escalas validadas OMS' },
]

function AnimatedStat({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const display = useCountUp(stat.value, isVisible, 1600, stat.prefix, stat.suffix)
  return (
    <div className="text-center group">
      <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1 group-hover:text-gradient transition-colors duration-500">
        {display}
      </p>
      <p className="text-sm text-foreground-muted">{stat.label}</p>
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const { motion, finePointer } = usePrefersMotionFx()
  const mouseGlow = motion && finePointer
  const mouse = useMousePosition(heroRef, mouseGlow)
  const { ref: statsRef, isVisible: statsVisible } = useReveal<HTMLDivElement>({ threshold: 0.3 })

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    heroRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* Parallax en orbes — rAF, solo si motion permitido */
  useEffect(() => {
    if (!motion) return
    const meshes = heroRef.current?.querySelectorAll('.hero-mesh')
    if (!meshes?.length) return

    let rafId = 0
    const handler = () => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = 0
        const sy = window.scrollY
        meshes.forEach((m, i) => {
          ;(m as HTMLElement).style.transform = `translate3d(0, ${sy * (i + 1) * 0.05}px, 0)`
        })
      })
    }

    window.addEventListener('scroll', handler, { passive: true })
    return () => {
      window.removeEventListener('scroll', handler)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [motion])

  /* Glow del cursor — transform vía ref, sin re-render extra */
  useEffect(() => {
    const glow = glowRef.current
    if (!glow || !mouseGlow) return
    glow.style.transform = `translate3d(calc(${mouse.x * 100}% - 50%), calc(${mouse.y * 100}% - 50%), 0)`
  }, [mouse.x, mouse.y, mouseGlow])

  return (
    <>
      <section
        ref={heroRef}
        data-hero
        className="relative overflow-hidden"
        aria-label="Sección principal"
        style={{
          background: `
            linear-gradient(160deg,
              #05111e 0%,
              #081b35 30%,
              #0d2a50 55%,
              #091e3a 78%,
              #05111e 100%
            )`,
        }}
      >
        {/* Imagen de fondo atmosférica */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 mix-blend-luminosity hero-fx-layer"
          aria-hidden="true"
          style={{
            backgroundImage: "url('/images/hero-bg-deep.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <BrandGrid />

        {/* Orbes con profundidad */}
        <div className="absolute inset-0 pointer-events-none hero-fx-layer" aria-hidden="true">
          <div
            className="hero-mesh absolute -top-40 right-0 w-[800px] h-[800px] rounded-full opacity-[0.18]"
            style={{
              background: 'radial-gradient(circle, oklch(0.48 0.18 246) 0%, transparent 65%)',
              filter: motion ? 'blur(60px)' : 'none',
            }}
          />
          <div
            className="hero-mesh absolute bottom-0 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.12]"
            style={{
              background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)',
              filter: motion ? 'blur(80px)' : 'none',
            }}
          />
          <div
            className="hero-mesh absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] opacity-[0.10]"
            style={{
              background: 'radial-gradient(ellipse at center, oklch(0.62 0.16 230) 0%, transparent 60%)',
              filter: motion ? 'blur(50px)' : 'none',
            }}
          />
        </div>

        {/* Glow interactivo — solo desktop con puntero fino */}
        {mouseGlow && (
          <div
            ref={glowRef}
            className="hero-mouse-glow absolute pointer-events-none z-[1] top-0 left-0"
            aria-hidden="true"
            style={{
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, oklch(0.66 0.19 163 / 0.12) 0%, oklch(0.48 0.18 246 / 0.06) 45%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'translate3d(-50%, -50%, 0)',
            }}
          />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-12 text-center">
          <div className="animate-fade-up" style={{ opacity: 0 }}>
            <div className="inline-flex items-center gap-2.5 glass-mint rounded-full px-5 py-2 mb-6">
              {motion ? (
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: 'var(--kenko-pulse)' }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: 'var(--kenko-mint)' }}
                  />
                </span>
              ) : (
                <span
                  className="inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: 'var(--kenko-mint)' }}
                />
              )}
              <SectionEyebrow light className="mb-0">
                Sistema DSS para Kinesiólogos
              </SectionEyebrow>
            </div>
          </div>

          <h1
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-on-brand mb-6 animate-fade-up delay-100 text-balance"
            style={{ opacity: 0 }}
          >
            Software para{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, var(--kenko-sapphire), var(--kenko-sky), var(--kenko-pulse))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              kinesiólogos
            </span>{' '}
            en Chile.{' '}
            <span style={{ color: 'var(--kenko-pulse)' }}>Digitaliza tu clínica.</span>
          </h1>

          <p
            className="text-lg md:text-xl text-on-brand-muted leading-relaxed mb-9 max-w-2xl mx-auto animate-fade-up delay-200"
            style={{ opacity: 0 }}
          >
            Kenkomed es el{' '}
            <strong className="text-on-brand font-semibold">software de gestión clínica y Sistema DSS</strong>{' '}
            para kinesiólogos y fisioterapeutas: historias clínicas digitales, agenda inteligente,
            fichas sin papel y cuestionarios EVA, PSFS y Barthel en una sola plataforma.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 animate-fade-up delay-200"
            style={{ opacity: 0 }}
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-on-brand-subtle">
                <Icon size={13} style={{ color: 'var(--kenko-pulse)' }} />
                {text}
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up delay-300"
            style={{ opacity: 0 }}
          >
            <a href="#contact" className="btn-kenko-primary group">
              Solicitar Demo Gratuita
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/demo" className="btn-kenko-ghost text-sm font-medium">
              Ver Demo del Software
              <span
                className="w-6 h-6 rounded-full border flex items-center justify-center"
                style={{ borderColor: 'oklch(1 0 0 / 0.2)' }}
              >
                <ArrowRight size={12} />
              </span>
            </Link>
          </div>

          <div
            className="flex items-center justify-center gap-5 animate-fade-up delay-400"
            style={{ opacity: 0 }}
          >
            <div className="flex -space-x-2">
              {['IC', 'NJ', 'SM', 'MC', 'KP'].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full kenko-card flex items-center justify-center text-[10px] font-bold font-display text-on-brand"
                  style={{ border: '2px solid oklch(0.48 0.18 246 / 0.3)' }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#f59e0b" aria-hidden="true">
                    <path d="M6 1l1.5 3 3.3.5-2.4 2.3.6 3.2L6 8.5l-3 1.5.6-3.2L1.2 4.5l3.3-.5L6 1z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-on-brand-subtle">
                <strong className="text-on-brand">Confianza</strong> en Kenkomed
              </p>
            </div>
          </div>
        </div>

        {/* Chips flotantes + mockup */}
        <div className="relative z-10 animate-fade-up delay-500" style={{ opacity: 0 }}>
          {motion && (
            <>
              <DataParticle
                label="Citas hoy"
                value="4 confirmadas"
                color="mint"
                style={{ top: '-300px', left: '5%' }}
              />
              <DataParticle
                label="DSS activo"
                value="● En línea"
                color="sky"
                style={{ top: '-260px', right: '5%', animationDelay: '1.8s' }}
              />
              <DataParticle
                label="Cuestionarios"
                value="97% completos"
                color="blue"
                style={{ top: '-120px', right: '12%', animationDelay: '3s' }}
                className="hidden lg:block"
              />
              <DataParticle
                label="Admisión QR"
                value="● Paciente en camino"
                color="mint"
                style={{ top: '-120px', left: '12%', animationDelay: '0.8s' }}
                className="hidden lg:block"
              />
            </>
          )}

          <div
            className="absolute inset-x-0 top-0 h-40 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 70% 80% at 50% 0%, oklch(0.66 0.19 163 / 0.15), transparent 80%)',
            }}
          />

          <div className="px-4 sm:px-10 lg:px-20 xl:px-28">
            <div
              className="relative rounded-t-2xl overflow-hidden"
              style={{
                boxShadow:
                  '0 0 0 1px oklch(0.48 0.18 246 / 0.2), 0 0 0 2px oklch(0.66 0.19 163 / 0.05), 0 24px 80px oklch(0.05 0.02 240 / 0.8), 0 60px 160px oklch(0.48 0.18 246 / 0.25)',
              }}
            >
              <div
                className="flex items-center gap-3 px-5 py-3 border-b"
                style={{ background: '#030d1a', borderColor: 'oklch(0.48 0.18 246 / 0.15)' }}
              >
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 max-w-xs mx-auto">
                  <div
                    className="flex items-center gap-2 rounded-md px-3 py-1 border"
                    style={{
                      background: 'oklch(0.48 0.18 246 / 0.08)',
                      borderColor: 'oklch(0.48 0.18 246 / 0.15)',
                    }}
                  >
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      style={{ color: 'var(--kenko-pulse)', flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <rect x="1" y="5" width="8" height="7" rx="1.5" fill="currentColor" opacity="0.3" />
                      <path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <circle cx="5" cy="8.5" r="1" fill="currentColor" />
                    </svg>
                    <span className="text-[11px] text-white/40 font-medium tracking-tight select-none">
                      app.kenkomed.cl/panel
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 opacity-20 flex-shrink-0" aria-hidden="true">
                  <div className="w-4 h-4 rounded bg-white/30" />
                  <div className="w-4 h-4 rounded bg-white/30" />
                  <div className="w-4 h-4 rounded bg-white/30" />
                </div>
              </div>

              <div className="relative w-full" style={{ aspectRatio: '1440 / 820' }}>
                <Image
                  src="/software/Panel.jpg"
                  alt="Panel de control Kenkomed — gestión clínica para kinesiólogos"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1280px"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none hero-panel-fade-dark" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-background">
        <div className="h-1 kenko-stat-bar" aria-hidden="true" />
        <div
          ref={statsRef}
          className="max-w-7xl mx-auto px-6 grid grid-cols-3 gap-6 py-12"
        >
          {stats.map(stat => (
            <AnimatedStat key={stat.label} stat={stat} isVisible={statsVisible} />
          ))}
        </div>
      </div>

      <div
        className="relative overflow-hidden py-3.5 kenko-ticker"
        style={{
          background: 'linear-gradient(90deg, #05111e 0%, #081d38 50%, #05111e 100%)',
          borderTop: '1px solid oklch(0.48 0.18 246 / 0.15)',
          borderBottom: '1px solid oklch(0.48 0.18 246 / 0.15)',
        }}
        aria-hidden="true"
      >
        <div className={`flex gap-0 whitespace-nowrap ${motion ? 'animate-ticker-fast' : 'flex-wrap justify-center gap-y-2 px-4'}`}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-medium text-on-brand-muted">
              <span
                className="w-1.5 h-1.5 rounded-full opacity-90"
                style={{ backgroundColor: 'var(--kenko-pulse)' }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-background">
        <PulseDivider variant="light" animated={motion} />
      </div>
    </>
  )
}
