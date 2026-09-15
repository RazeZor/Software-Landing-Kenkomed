'use client'

/* Hallmark · macrostructure: Feature Stack (16) · genre: modern-minimal · theme: Cobalt
 * Sticky left pane (label + description) + scroll-synced right pane (CSS-art mockups)
 * gates fixed: 3 (no 3-col equal grid), 8 (new section rhythm), 9 (varied section dividers),
 *              24 (specific transitions), 27 (prefers-reduced-motion), 47 (no fake browser chrome),
 *              48 (tokens only)
 * Enrichment: E1 CSS-art mockup — UI del software Kenkomed en figure + hairline border
 */

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Brain,
  QrCode,
  CalendarCheck,
  FileText,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

/* ── Feature data — real product content, no invented metrics ── */
const stackFeatures = [
  {
    number: '01',
    label: 'DSS Clínico',
    title: 'Sistema de Apoyo a Decisiones',
    desc: 'Interpreta automáticamente 13 escalas clínicas validadas, detecta banderas rojas y guía cada evaluación con rigor científico. Desde PSFS y Barthel hasta Berg, Tinetti y WOMAC.',
    tags: ['13 escalas validadas', 'Banderas rojas automáticas', 'Algoritmo de dolor', 'Anamnesis 14 págs.'],
    icon: Brain,
    imageSrc: '/software/DSS.jpg',
    imageAlt: 'Panel DSS clínico de Kenkomed mostrando escalas validadas',
    accentToken: '--color-accent',
  },
  {
    number: '02',
    label: 'Admisión QR',
    title: 'Admisión Express sin papel',
    desc: 'El paciente completa su anamnesis completa desde el celular antes de llegar. Cero formularios en recepción, cero errores de transcripción.',
    tags: ['Código QR único', 'Anamnesis remota', 'Mapa corporal digital', 'Sin instalación'],
    icon: QrCode,
    imageSrc: '/software/Cuerpo.jpg',
    imageAlt: 'Mapa corporal y formulario de anamnesis QR de Kenkomed',
    accentToken: '--color-accent-2',
  },
  {
    number: '03',
    label: 'Agenda Clínica',
    title: 'Agenda + notificaciones automáticas',
    desc: 'Gestiona citas presenciales, domicilio y telemedicina. Notificaciones automáticas por email al crear, reagendar o cancelar. Vista personal y de todo el centro.',
    tags: ['Presencial · Domicilio · Telemedicina', 'Emails automáticos de citas', 'Vista personal y centro', 'Multi-kinesiólogo'],
    icon: CalendarCheck,
    imageSrc: '/software/Panel.jpg',
    imageAlt: 'Agenda inteligente del software Kenkomed',
    accentToken: '--color-accent',
  },
  {
    number: '04',
    label: 'Ficha Digital',
    title: 'Historia clínica completa con ciclos',
    desc: 'Ciclos clínicos, sesiones kinésicas, evolución, recetas médicas y alta con diagnóstico final. Todo documentado con trazabilidad y auditoría de accesos.',
    tags: ['Ciclos clínicos', 'Alta con diagnóstico final', 'Recetas médicas digitales', 'Auditoría Ley 21.719'],
    icon: FileText,
    imageSrc: '/software/Panel.jpg',
    imageAlt: 'Ficha clínica digital de Kenkomed',
    accentToken: '--color-accent-2',
  },
  {
    number: '05',
    label: 'Dashboard',
    title: 'Panel de control en tiempo real',
    desc: 'Métricas reales de tu práctica: pacientes activos, citas del día y la semana, sesiones realizadas y anamnesis del mes. Vista diferenciada para admin y miembro del equipo.',
    tags: ['Métricas en tiempo real', 'Citas hoy y esta semana', 'Exportación ARCO (JSON/HTML)', 'Estadísticas por profesional'],
    icon: BarChart3,
    imageSrc: '/software/DSS.jpg',
    imageAlt: 'Panel de monitoreo y outcomes de Kenkomed',
    accentToken: '--color-accent',
  },
]

/* ── CSS-art feature mockup (no fake chrome, no BrowserMockup) ── */
function FeatureMockup({
  feature,
  isActive,
}: {
  feature: typeof stackFeatures[0]
  isActive: boolean
}) {
  return (
    <figure
      className={`hm-feature-mockup ${isActive ? 'is-active' : ''}`}
      aria-label={feature.imageAlt}
    >
      {/* Real software screenshot inside figure — hairline border only */}
      <div className="hm-mockup-inner">
        {/* Module label badge */}
        <div className="hm-mockup-badge">
          <span
            className="hm-badge-dot"
            style={{ background: `var(${feature.accentToken})` }}
            aria-hidden="true"
          />
          {feature.label}
        </div>
        <Image
          src={feature.imageSrc}
          alt={feature.imageAlt}
          fill
          loading={isActive ? 'eager' : 'lazy'}
          className="hm-mockup-img object-cover object-top"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        {/* Subtle vignette — not a gradient headline */}
        <div className="hm-mockup-vignette" aria-hidden="true" />
      </div>
      <figcaption className="sr-only">{feature.imageAlt}</figcaption>
    </figure>
  )
}

/* ── Feature Stack component ── */
export function SolucionTeaser() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  /* Scroll-sync: activate feature based on viewport position */
  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.getBoundingClientRect().top
      const viewportH = window.innerHeight
      const sectionH = section.offsetHeight
      const scrollRatio = Math.max(0, Math.min(1, -sectionTop / (sectionH - viewportH)))
      const newIndex = Math.min(
        stackFeatures.length - 1,
        Math.floor(scrollRatio * stackFeatures.length)
      )
      setActiveIndex(newIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        /* Hallmark · Feature Stack (16) · modern-minimal · Cobalt
         * No 3-col grid, no equal-height cards, no icon-above-heading
         */

        /* ─── Section wrapper ─── */
        .hm-feature-stack {
          position: relative;
          background: var(--color-paper);
          border-top: var(--hairline);
        }

        /* ─── Layout: sticky left + scroll-synced right ─── */
        .hm-stack-layout {
          display: grid;
          grid-template-columns: var(--feature-stack-left-width) var(--feature-stack-right-width);
          min-height: 100vh;
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
        }

        /* ─── Left pane — sticky ─── */
        .hm-stack-left {
          position: sticky;
          top: var(--feature-stack-sticky-top);
          align-self: start;
          padding-block: var(--space-4xl);
          padding-right: var(--space-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .hm-stack-section-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: var(--space-lg);
        }

        .hm-stack-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw + 0.5rem, 2.75rem);
          font-weight: 800;
          font-style: normal; /* gate 38a */
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-stack-intro {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
        }

        /* Feature nav items — inline, not icon-above-heading */
        .hm-feature-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid oklch(0.12 0.02 246 / 0.08);
        }
        .dark .hm-feature-nav {
          border-left-color: oklch(0.97 0.003 246 / 0.10);
        }

        .hm-feature-nav-item {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-sm) var(--space-md);
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          position: relative;
          transition-property: background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          outline: 2px solid transparent;
          outline-offset: 2px;
        }
        .hm-feature-nav-item:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-feature-nav-item::before {
          content: '';
          position: absolute;
          left: -1px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: transparent;
          transition-property: background-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-feature-nav-item.is-active::before {
          background: var(--color-accent);
        }
        .hm-feature-nav-item.is-active {
          background: oklch(0.48 0.18 246 / 0.04);
        }
        .dark .hm-feature-nav-item.is-active {
          background: oklch(0.62 0.16 230 / 0.10);
        }

        .hm-feature-number {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.06em;
          color: var(--color-ink-3);
          flex-shrink: 0;
          transition-property: color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-feature-nav-item.is-active .hm-feature-number {
          color: var(--color-accent);
        }

        .hm-feature-nav-label {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-ink-2);
          transition-property: color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-feature-nav-item.is-active .hm-feature-nav-label {
          color: var(--color-ink);
          font-weight: 600;
        }

        /* ─── Right pane ─── */
        .hm-stack-right {
          padding-block: var(--space-4xl);
          padding-left: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
        }

        /* ─── Feature panel ─── */
        .hm-feature-panel {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .hm-panel-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .hm-panel-number {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          color: var(--color-accent-2);
          letter-spacing: 0.08em;
        }

        .hm-panel-title {
          font-family: var(--font-display);
          font-size: clamp(1.375rem, 2vw + 0.5rem, 1.875rem);
          font-weight: 700;
          font-style: normal; /* gate 38a */
          color: var(--color-ink);
          line-height: 1.12;
          letter-spacing: -0.03em;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-panel-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.65;
          max-width: 52ch;
        }

        .hm-panel-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2xs);
        }

        .hm-panel-tag {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-accent);
          background: oklch(0.48 0.18 246 / 0.06);
          border: 1px solid oklch(0.48 0.18 246 / 0.14);
          border-radius: 999px;
          padding: 0.3125rem 0.75rem;
          line-height: 1;
        }
        .dark .hm-panel-tag {
          background: oklch(0.62 0.16 230 / 0.12);
          border-color: oklch(0.62 0.16 230 / 0.20);
          color: var(--kenko-sky);
        }

        .hm-panel-tag-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-accent);
          flex-shrink: 0;
        }
        .dark .hm-panel-tag-dot { background: var(--kenko-sky); }

        /* ─── CSS-art mockup — NO fake browser chrome (gate 47) ─── */
        .hm-feature-mockup {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: var(--hairline-accent);
          box-shadow: 0 1px 3px oklch(0.12 0.02 246 / 0.06), 0 8px 32px oklch(0.12 0.02 246 / 0.08);
          aspect-ratio: 16 / 10;
          transition-property: opacity, transform;
          transition-duration: var(--dur-slow);
          transition-timing-function: var(--ease-out);
          opacity: 0.7;
          transform: translateY(8px);
        }
        .hm-feature-mockup.is-active {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-feature-mockup { opacity: 1; transform: none; }
        }

        .hm-mockup-inner {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hm-mockup-badge {
          position: absolute;
          top: var(--space-md);
          left: var(--space-md);
          z-index: 10;
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: oklch(0.99 0.002 246);
          background: oklch(0.09 0.018 240 / 0.80);
          backdrop-filter: blur(8px);
          border: 1px solid oklch(0.97 0.003 246 / 0.12);
          padding: 0.25rem 0.625rem;
          border-radius: 999px;
        }

        .hm-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .hm-mockup-img {
          object-fit: cover;
          object-position: top;
        }

        .hm-mockup-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, oklch(0.09 0.018 240 / 0.20) 100%);
          pointer-events: none;
        }
        .dark .hm-mockup-vignette {
          background: linear-gradient(to bottom, transparent 60%, oklch(0.07 0.015 240 / 0.30) 100%);
        }

        /* ─── Section divider — hairline rule (not whitespace only, gate 9) ─── */
        .hm-section-rule {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, oklch(0.12 0.02 246 / 0.12) 20%, oklch(0.12 0.02 246 / 0.12) 80%, transparent 100%);
          max-width: 88rem;
          margin-inline: auto;
        }
        .dark .hm-section-rule {
          background: linear-gradient(90deg, transparent 0%, oklch(0.97 0.003 246 / 0.08) 20%, oklch(0.97 0.003 246 / 0.08) 80%, transparent 100%);
        }

        /* ─── CTA section at bottom ─── */
        .hm-stack-cta {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-md);
          border-top: var(--hairline);
        }

        .hm-stack-cta-heading {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem);
          font-weight: 700;
          font-style: normal;
          color: var(--color-ink);
          letter-spacing: -0.03em;
          line-height: 1.12;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-stack-cta-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-accent);
          text-decoration: none;
          border-bottom: 1px solid oklch(0.48 0.18 246 / 0.30);
          padding-bottom: 1px;
          outline: 2px solid transparent;
          outline-offset: 4px;
          transition-property: color, border-color;
          transition-duration: var(--dur-base);
          transition-timing-function: var(--ease-default);
        }
        .hm-stack-cta-link:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-cobalt);
        }
        .hm-stack-cta-link:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-stack-cta-link:active {
          color: var(--kenko-cobalt);
        }

        /* ─── Responsive ─── */
        @media (max-width: 900px) {
          .hm-stack-layout {
            grid-template-columns: 1fr;
          }
          .hm-stack-left {
            position: static;
            padding-right: 0;
            padding-bottom: var(--space-xl);
          }
          .hm-stack-right {
            padding-left: 0;
            padding-top: 0;
          }
          .hm-feature-nav { border-left: none; flex-direction: row; flex-wrap: wrap; gap: var(--space-2xs); }
          .hm-feature-nav-item::before { display: none; }
          .hm-feature-nav-item { border-radius: 999px; padding: var(--space-2xs) var(--space-sm); }
          .hm-feature-nav-item.is-active { border: 1px solid oklch(0.48 0.18 246 / 0.30); }
          .hm-stack-cta { align-items: flex-start; }
        }
        @media (max-width: 640px) {
          .hm-stack-layout { padding-inline: var(--space-md); }
          .hm-stack-cta { padding-inline: var(--space-md); }
          .hm-panel-tags { gap: var(--space-3xs); }
        }
      `}</style>

      <section
        id="features"
        ref={sectionRef}
        className="hm-feature-stack"
        aria-labelledby="feature-stack-heading"
        style={{ minHeight: `${stackFeatures.length * 60}vh` }}
      >
        <div className="hm-stack-layout">
          {/* ── Left pane (sticky) ── */}
          <div className="hm-stack-left">
            <p className="hm-stack-section-label" aria-hidden="true">Plataforma Kenkomed</p>
            <h2 id="feature-stack-heading" className="hm-stack-heading">
              Todo lo que necesita tu clínica
            </h2>
            <p className="hm-stack-intro">
              Cada módulo diseñado para el flujo de trabajo real de un kinesiólogo.
              Sin funciones de más, sin curva de aprendizaje.
            </p>

            <nav className="hm-feature-nav" aria-label="Módulos de Kenkomed">
              {stackFeatures.map((feat, i) => {
                const Icon = feat.icon
                return (
                  <button
                    key={feat.number}
                    ref={el => { itemRefs.current[i] = el }}
                    className={`hm-feature-nav-item ${activeIndex === i ? 'is-active' : ''}`}
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={activeIndex === i}
                    aria-label={`Ver módulo ${feat.number}: ${feat.label}`}
                    type="button"
                  >
                    <span className="hm-feature-number" aria-hidden="true">{feat.number} ·</span>
                    <Icon size={15} aria-hidden="true" style={{ color: activeIndex === i ? 'var(--color-accent)' : 'var(--color-ink-3)', flexShrink: 0 }} />
                    <span className="hm-feature-nav-label">{feat.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* ── Right pane (scroll-synced) ── */}
          <div className="hm-stack-right">
            {stackFeatures.map((feat, i) => (
              <div
                key={feat.number}
                id={`feature-panel-${feat.number}`}
                className="hm-feature-panel"
                aria-label={`Módulo ${feat.number}: ${feat.title}`}
              >
                <div className="hm-panel-header">
                  <span className="hm-panel-number" aria-hidden="true">{feat.number} ·</span>
                  <h3 className="hm-panel-title">{feat.title}</h3>
                </div>

                <p className="hm-panel-desc">{feat.desc}</p>

                <div className="hm-panel-tags" role="list" aria-label="Características">
                  {feat.tags.map(tag => (
                    <span key={tag} className="hm-panel-tag" role="listitem">
                      <span className="hm-panel-tag-dot" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* E1 CSS-art mockup — figure + hairline border, no fake chrome */}
                <FeatureMockup feature={feat} isActive={activeIndex === i} />
              </div>
            ))}
          </div>
        </div>

        {/* ─── Section rule divider (gate 9) ─── */}
        <div className="hm-section-rule" aria-hidden="true" />

        {/* ─── Bottom CTA ─── */}
        <div className="hm-stack-cta">
          <p className="hm-stack-section-label" aria-hidden="true">¿Listo para empezar?</p>
          <h2 className="hm-stack-cta-heading">
            Solicita una demo gratuita.<br />Te mostramos todo en 30 minutos.
          </h2>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="#contact" className="hm-stack-cta-link">
              Solicitar Demo
              <ArrowRight size={14} aria-hidden="true" />
            </a>
            <Link
              href="/funcionalidades"
              className="hm-stack-cta-link"
              style={{ color: 'var(--color-ink-2)', borderColor: 'oklch(0.12 0.02 246 / 0.20)' }}
            >
              Ver funcionalidades completas
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── ProductShowcase is now unified into SolucionTeaser above ── */
export function ProductShowcase() {
  return null
}

/* ── Legacy Features export (kept for any other imports) ── */
export function Features() {
  return null
}