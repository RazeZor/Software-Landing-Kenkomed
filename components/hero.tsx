'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  useReveal,
  useCountUp,
  useMousePosition,
  usePrefersMotionFx,
} from '@/hooks/use-scroll-animation'
import {
  BrandGrid,
  PulseDivider,
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

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-24 text-center md:pb-28">
          <h1
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-on-brand mb-6 animate-fade-up text-balance"
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
            className="text-lg md:text-xl text-on-brand-muted leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up delay-100"
            style={{ opacity: 0 }}
          >
            Kenkomed es el{' '}
            <strong className="text-on-brand font-semibold">software de gestión clínica y Sistema DSS</strong>{' '}
            para kinesiólogos y fisioterapeutas: historias clínicas digitales, agenda inteligente,
            fichas sin papel y cuestionarios EVA, PSFS y Barthel en una sola plataforma.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-up delay-200"
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
