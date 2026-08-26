'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react'
import {
  useReveal,
  useCountUp,
  useMousePosition,
  usePrefersMotionFx,
} from '@/hooks/use-scroll-animation'

/* Hallmark · component: Split Studio Editorial Hero · genre: modern-minimal · theme: Cobalt Paper Light
 * Diptych layout: Real Kinesiology Photography (E8) + Foreground Software Browser Frame (E3)
 * Phrasing: 'Soporte a la Decisión Clínica' (NO DSS acronym)
 */

const stats = [
  { value: 8,   prefix: '', suffix: '',  label: 'Escalas clínicas validadas (EVA, PSFS, Barthel)' },
  { value: 9,   prefix: '', suffix: '',  label: 'Pasos de anamnesis inteligente vía QR' },
  { value: 100, prefix: '', suffix: '%', label: 'Especializado en kinesiología y fisioterapia' },
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
        /* Hallmark · Split Studio Editorial Hero — Paper Light Cobalt Theme */
        .hm-hero-section {
          background: linear-gradient(180deg, oklch(0.975 0.006 246) 0%, oklch(0.99 0.002 246) 100%);
          border-bottom: var(--hairline);
          position: relative;
          padding-top: 5rem;
        }

        .hm-hero-grid {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl) var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
          align-items: center;
        }

        /* Mono Outlier Tag */
        .hm-hero-outlier {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--kenko-sapphire);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          border: 1px solid oklch(0.48 0.18 246 / 0.18);
          background: oklch(0.48 0.18 246 / 0.05);
          margin-bottom: var(--space-md);
        }

        .hm-outlier-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--kenko-mint);
        }

        /* Editorial Display Headline */
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
        }

        .hm-hero-h1-highlight {
          color: var(--kenko-sapphire);
          position: relative;
        }

        /* Lede Copy */
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 50ch;
        }

        /* Hero Action Buttons */
        .hm-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-2xl);
        }

        .hm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--kenko-sapphire);
          color: oklch(0.99 0.002 246);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          box-shadow: 0 4px 16px oklch(0.48 0.18 246 / 0.25);
          transition-property: background-color, transform, box-shadow;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        .hm-btn-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 6px 22px oklch(0.48 0.18 246 / 0.35);
        }
        .hm-btn-primary:focus-visible { outline-color: var(--color-focus); }

        .hm-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.875rem 1.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          background: var(--background);
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          transition-property: color, border-color, background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        .hm-btn-ghost:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-sapphire);
          background: oklch(0.48 0.18 246 / 0.04);
        }
        .hm-btn-ghost:focus-visible { outline-color: var(--color-focus); }

        /* Trust Pills */
        .hm-trust-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          border-top: var(--hairline);
          padding-top: var(--space-md);
        }

        .hm-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--foreground-muted);
        }

        /* ─── Right Column: Bespoke Diptych Art ─── */
        .hm-hero-diptych {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Backing Kinesiology Photo (E8) */
        .hm-photo-wrapper {
          position: relative;
          width: 82%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: var(--hairline);
          box-shadow: 0 10px 30px oklch(0.12 0.02 246 / 0.08);
          transform: rotate(-1.5deg);
        }

        .hm-photo-img {
          object-fit: cover;
          filter: contrast(1.03) brightness(0.98);
        }

        /* Foreground Software UI Frame (E3) */
        .hm-ui-frame {
          position: absolute;
          width: 86%;
          top: 15%;
          right: 0;
          background: var(--card);
          border-radius: var(--radius-lg);
          border: var(--hairline-accent);
          box-shadow: 0 20px 45px -10px oklch(0.12 0.02 246 / 0.18), 0 0 0 1px oklch(0.48 0.18 246 / 0.12);
          overflow: hidden;
          transform: rotate(1deg);
        }

        .hm-ui-bar {
          height: 2rem;
          background: var(--surface-2);
          border-bottom: var(--hairline);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding-inline: 0.75rem;
        }

        .hm-ui-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
        }

        .hm-ui-path {
          font-family: var(--font-outlier);
          font-size: 0.625rem;
          color: var(--foreground-subtle);
          margin-left: 0.5rem;
          background: var(--background);
          padding: 0.125rem 0.5rem;
          border-radius: 999px;
          border: var(--hairline);
        }

        .hm-ui-body {
          position: relative;
          aspect-ratio: 16 / 10;
          width: 100%;
          overflow: hidden;
        }

        /* Floating Mono Annotation Cards */
        .hm-annotation-card {
          position: absolute;
          bottom: -1rem;
          left: -1rem;
          background: var(--card);
          border: var(--hairline-accent);
          border-radius: var(--radius-md);
          padding: 0.625rem 0.875rem;
          box-shadow: 0 12px 30px oklch(0.12 0.02 246 / 0.12);
          display: flex;
          align-items: center;
          gap: 0.625rem;
          z-index: 30;
        }

        .hm-annotation-tag {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--kenko-sapphire);
          letter-spacing: 0.04em;
        }

        .hm-annotation-sub {
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: var(--foreground-muted);
        }

        /* Proof Strip */
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
          .hm-hero-grid {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }
          .hm-hero-diptych {
            margin-top: var(--space-md);
          }
          .hm-photo-wrapper { width: 100%; transform: none; }
          .hm-ui-frame { position: static; width: 100%; margin-top: var(--space-md); transform: none; }
          .hm-annotation-card { display: none; }
        }

        @media (max-width: 640px) {
          .hm-proof-strip { flex-direction: column; }
          .hm-proof-stat + .hm-proof-stat {
            border-left: none;
            border-top: var(--hairline);
          }
          .hm-proof-stat { padding: var(--space-sm) var(--space-md); }
          .hm-hero-actions { flex-direction: column; align-items: stretch; }
          .hm-hero-grid { padding-inline: var(--space-md); }
        }
      `}</style>

      <section
        ref={heroRef}
        data-hero
        className="hm-hero-section overflow-hidden"
        aria-label="Sección principal"
      >
        {/* Subtle structural grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(var(--kenko-sapphire) 1px, transparent 1px), linear-gradient(90deg, var(--kenko-sapphire) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Atmosphere glows */}
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

        {/* ─── 2-Column Split Studio Layout ─── */}
        <div className="hm-hero-grid relative z-10">

          {/* Left Column: Authoritative Copy */}
          <div>
            <div className="hm-hero-outlier">
              <span className="hm-outlier-dot" aria-hidden="true" />
              01 · PLATAFORMA CLÍNICA DE KINESIOLOGÍA
            </div>

            <h1 className="hm-hero-h1">
              Rigor clínico.{' '}
              <span className="hm-hero-h1-highlight">Sin burocracia.</span>
            </h1>

            <p className="hm-hero-lede">
              Kenkomed es la plataforma integral de <strong className="text-foreground font-semibold">soporte a la decisión clínica</strong> diseñada en Chile para kinesiólogos y fisioterapeutas: historias digitales, admisión QR, agenda inteligente y cuestionarios EVA, PSFS y Barthel automatizados.
            </p>

            <div className="hm-hero-actions">
              <a href="#contact" className="hm-btn-primary">
                Solicitar Demo Gratuita
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <Link href="/demo" className="hm-btn-ghost">
                Ver Demo del Software
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className="hm-trust-pills" role="list">
              <span className="hm-trust-item" role="listitem">
                <CheckCircle2 size={15} className="text-emerald" />
                8 escalas validadas
              </span>
              <span className="hm-trust-item" role="listitem">
                <CheckCircle2 size={15} className="text-emerald" />
                Admisión QR sin papel
              </span>
              <span className="hm-trust-item" role="listitem">
                <CheckCircle2 size={15} className="text-emerald" />
                Desarrollo e infraestructura en Chile
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Diptych Showcase (Photo + UI Frame) */}
          <div className="hm-hero-diptych">

            {/* Backing Software UI Card */}
            <div className="hm-photo-wrapper">
              <Image
                src="/software/FichaClinica.jpg"
                alt="Ficha clínica digital de Kenkomed"
                fill
                priority
                className="hm-photo-img"
                sizes="(max-width: 960px) 100vw, 42vw"
              />
            </div>

            {/* Foreground Real Software UI Browser Frame (E3) */}
            <div className="hm-ui-frame">
              <div className="hm-ui-bar">
                <span className="hm-ui-dot bg-rose-400" />
                <span className="hm-ui-dot bg-amber-400" />
                <span className="hm-ui-dot bg-emerald-400" />
                <span className="hm-ui-path">kenkomed.cl/panel-clinico</span>
              </div>

              <div className="hm-ui-body">
                <Image
                  src="/software/Panel.jpg"
                  alt="Panel clínico del software Kenkomed"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 960px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Mono Annotation Card */}
            <div className="hm-annotation-card">
              <Activity size={18} className="text-emerald" />
              <div>
                <span className="hm-annotation-tag">[SOPORTE A LA DECISIÓN CLÍNICA]</span>
                <p className="hm-annotation-sub">Banderas rojas & EVA/Barthel en tiempo real</p>
              </div>
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
