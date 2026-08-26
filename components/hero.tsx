'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import {
  useReveal,
  useCountUp,
  useMousePosition,
  usePrefersMotionFx,
} from '@/hooks/use-scroll-animation'

/* Hallmark · component: Split Product Hero · genre: modern-minimal · theme: Cobalt (Paper Light)
 * 2-column layout: Left = messaging + CTAs + proof tags. Right = product UI browser mockup + float badges.
 * Fixed: text invisibility bug (no opacity:0 traps), crisp light theme, visible hero product showcase.
 */

const stats = [
  { value: 8,   prefix: '', suffix: '',  label: 'Escalas clínicas validadas' },
  { value: 9,   prefix: '', suffix: '',  label: 'Pasos de anamnesis inteligente' },
  { value: 100, prefix: '', suffix: '%', label: 'Especializado en kinesiología' },
]

function ProofStat({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const display = useCountUp(stat.value, isVisible, 1400, stat.prefix, stat.suffix)
  return (
    <div className="hm-proof-stat">
      <p className="hm-proof-number" aria-label={`${display} ${stat.label}`}>
        {display}
      </p>
      <p className="hm-proof-label">{stat.label}</p>
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

  /* Glow cursor HP3 */
  useEffect(() => {
    const glow = glowRef.current
    if (!glow || !mouseGlow) return
    glow.style.transform = `translate3d(calc(${mouse.x * 100}% - 50%), calc(${mouse.y * 100}% - 50%), 0)`
  }, [mouse.x, mouse.y, mouseGlow])

  return (
    <>
      <style>{`
        /* Hallmark · Split Product Hero — Paper Light Theme */
        .hm-hero-section {
          background: linear-gradient(180deg, oklch(0.98 0.005 246) 0%, oklch(0.99 0.002 246) 100%);
          border-bottom: var(--hairline);
          position: relative;
          padding-top: 5.5rem; /* space for sticky navbar */
        }

        .hm-hero-container {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl) var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
          align-items: center;
        }

        /* Eyebrow badge */
        .hm-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--kenko-cobalt);
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          border: 1px solid oklch(0.48 0.18 246 / 0.20);
          background: oklch(0.48 0.18 246 / 0.06);
          margin-bottom: var(--space-md);
        }

        .hm-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--kenko-mint);
        }

        /* Headline */
        .hm-hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.25rem, 4vw + 0.75rem, 3.85rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.06;
          letter-spacing: -0.04em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
        }

        .hm-hero-title-accent {
          color: var(--kenko-sapphire);
        }

        /* Subtitle */
        .hm-hero-sub {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 48ch;
        }

        /* CTAs */
        .hm-hero-ctas {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-xl);
        }

        .hm-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--kenko-sapphire);
          color: oklch(0.99 0.002 246);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.8125rem 1.625rem;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          box-shadow: 0 4px 14px oklch(0.48 0.18 246 / 0.22);
          transition-property: background-color, transform, box-shadow;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-cta-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px oklch(0.48 0.18 246 / 0.30);
        }

        .hm-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.8125rem 1.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          background: var(--background);
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          transition-property: color, border-color, background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-cta-ghost:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-sapphire);
          background: oklch(0.48 0.18 246 / 0.04);
        }

        /* Hero feature tags */
        .hm-hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
        }

        .hm-hero-tag {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--foreground-muted);
        }

        /* ─── Right Column: Browser Mockup Showcase ─── */
        .hm-hero-media {
          position: relative;
        }

        .hm-browser-frame {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--card);
          border: var(--hairline-accent);
          box-shadow: 0 20px 40px -15px oklch(0.12 0.02 246 / 0.12), 0 0 0 1px oklch(0.48 0.18 246 / 0.15);
        }

        .hm-browser-bar {
          height: 2.25rem;
          background: var(--surface-2);
          border-bottom: var(--hairline);
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding-inline: 0.875rem;
        }

        .hm-browser-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }

        .hm-browser-url {
          margin-left: 0.5rem;
          height: 1.25rem;
          flex: 1;
          max-width: 14rem;
          background: var(--background);
          border-radius: 999px;
          border: var(--hairline);
          display: flex;
          align-items: center;
          padding-inline: 0.625rem;
          font-family: var(--font-outlier);
          font-size: 0.625rem;
          color: var(--foreground-subtle);
        }

        .hm-browser-content {
          position: relative;
          aspect-ratio: 16 / 10;
          width: 100%;
          overflow: hidden;
        }

        /* Floating UI badges */
        .hm-float-card-1 {
          position: absolute;
          bottom: -1rem;
          left: -1.5rem;
          background: var(--card);
          border: var(--hairline-accent);
          border-radius: var(--radius-lg);
          padding: 0.75rem 1rem;
          box-shadow: 0 10px 25px oklch(0.12 0.02 246 / 0.10);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          z-index: 20;
        }

        .hm-float-card-2 {
          position: absolute;
          top: 1.5rem;
          right: -1.5rem;
          background: var(--card);
          border: var(--hairline-accent);
          border-radius: var(--radius-lg);
          padding: 0.625rem 0.875rem;
          box-shadow: 0 10px 25px oklch(0.12 0.02 246 / 0.10);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 20;
        }

        /* ─── Proof Strip ─── */
        .hm-proof-strip {
          display: flex;
          align-items: stretch;
          gap: 0;
          border-top: var(--hairline);
          border-bottom: var(--hairline);
          background: var(--color-paper);
        }
        .hm-proof-stat {
          flex: 1;
          padding: var(--space-md) var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-2xs);
        }
        .hm-proof-stat + .hm-proof-stat {
          border-left: var(--hairline);
        }
        .hm-proof-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2rem, 4vw + 0.5rem, 3rem);
          line-height: 1;
          color: var(--color-ink);
          letter-spacing: -0.04em;
          font-style: normal;
        }
        .hm-proof-label {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--color-ink-2);
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .hm-hero-container {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
            padding-block: var(--space-2xl);
          }
          .hm-float-card-1, .hm-float-card-2 { display: none; }
        }

        @media (max-width: 640px) {
          .hm-proof-strip { flex-direction: column; }
          .hm-proof-stat + .hm-proof-stat {
            border-left: none;
            border-top: var(--hairline);
          }
          .hm-proof-stat { padding: var(--space-sm) var(--space-md); }
          .hm-hero-ctas { flex-direction: column; align-items: stretch; }
          .hm-hero-container { padding-inline: var(--space-md); }
        }
      `}</style>

      <section
        ref={heroRef}
        data-hero
        className="hm-hero-section overflow-hidden"
        aria-label="Sección principal"
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(var(--kenko-sapphire) 1px, transparent 1px), linear-gradient(90deg, var(--kenko-sapphire) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient light glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="hero-mesh absolute -top-40 right-0 w-[550px] h-[550px] rounded-full"
            style={{
              background: `radial-gradient(circle, oklch(0.48 0.18 246 / 0.10) 0%, transparent 65%)`,
              filter: motion ? 'blur(60px)' : 'none',
            }}
          />
          <div
            className="hero-mesh absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full"
            style={{
              background: `radial-gradient(circle, oklch(0.66 0.19 163 / 0.08) 0%, transparent 65%)`,
              filter: motion ? 'blur(70px)' : 'none',
            }}
          />
        </div>

        {/* HP3 Cursor-spotlight */}
        {mouseGlow && (
          <div
            ref={glowRef}
            className="absolute pointer-events-none z-[1] top-0 left-0"
            aria-hidden="true"
            style={{
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: `radial-gradient(circle, oklch(0.48 0.18 246 / 0.06) 0%, transparent 70%)`,
              filter: 'blur(60px)',
              transform: 'translate3d(-50%, -50%, 0)',
            }}
          />
        )}

        {/* ─── 2-Column Hero Content ─── */}
        <div className="hm-hero-container relative z-10">

          {/* Left Column: Messaging & CTAs */}
          <div>
            <div className="hm-eyebrow">
              <span className="hm-eyebrow-dot" aria-hidden="true" />
              Chile · Kinesiología & Fisioterapia
            </div>

            <h1 className="hm-hero-title">
              Software para{' '}
              <span className="hm-hero-title-accent">kinesiólogos</span>.{' '}
              Digitaliza tu clínica.
            </h1>

            <p className="hm-hero-sub">
              Kenkomed es el <strong className="text-foreground font-semibold">software de gestión clínica y Sistema DSS</strong> para kinesiólogos: historias clínicas digitales, agenda inteligente, fichas sin papel y cuestionarios EVA, PSFS y Barthel.
            </p>

            <div className="hm-hero-ctas">
              <a href="#contact" className="hm-cta-primary">
                Solicitar Demo Gratuita
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <Link href="/demo" className="hm-cta-ghost">
                Ver Demo del Software
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="hm-hero-tags">
              <span className="hm-hero-tag">
                <CheckCircle2 size={15} className="text-emerald" />
                8 escalas validadas
              </span>
              <span className="hm-hero-tag">
                <CheckCircle2 size={15} className="text-emerald" />
                Admisión QR sin papel
              </span>
              <span className="hm-hero-tag">
                <CheckCircle2 size={15} className="text-emerald" />
                Soporte en Chile
              </span>
            </div>
          </div>

          {/* Right Column: Product Showcase Browser Frame */}
          <div className="hm-hero-media">
            <div className="hm-browser-frame">
              <div className="hm-browser-bar">
                <span className="hm-browser-dot bg-rose-400" />
                <span className="hm-browser-dot bg-amber-400" />
                <span className="hm-browser-dot bg-emerald-400" />
                <div className="hm-browser-url">app.kenkomed.cl/dss-clinico</div>
              </div>

              <div className="hm-browser-content">
                <Image
                  src="/software/Panel.jpg"
                  alt="Panel de software clínico Kenkomed"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 960px) 100vw, 45vw"
                />
              </div>
            </div>

            {/* Floating badge 1: DSS Active */}
            <div className="hm-float-card-1">
              <div className="w-9 h-9 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-emerald" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Sistema DSS Activo</p>
                <p className="text-[11px] text-foreground-muted">Interpretación automática EVA / Barthel</p>
              </div>
            </div>

            {/* Floating badge 2: QR Admission */}
            <div className="hm-float-card-2">
              <ShieldCheck size={16} className="text-brand" />
              <span className="text-xs font-semibold text-foreground">Ficha digital encriptada</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Proof Strip ─── */}
      <div className="relative bg-background" ref={statsRef}>
        <div className="hm-proof-strip max-w-none">
          {stats.map(stat => (
            <ProofStat key={stat.label} stat={stat} isVisible={statsVisible} />
          ))}
        </div>
      </div>
    </>
  )
}
