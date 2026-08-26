'use client'

/* Hallmark · component: Proof Strip · genre: modern-minimal · theme: Cobalt
 * Replaces: 3-col icon-above-heading card grid (gate 3 fix)
 * Pure typography: real stats in horizontal row, separated by hairline rules
 * gates fixed: 3 (no grid with equal cards), 9 (varied rhythm), 24 (no transition:all),
 *              27 (prefers-reduced-motion), 46 (only real numbers), 48 (tokens only)
 */

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/use-scroll-animation'

/* Real data — no invented metrics (gate 46) */
const proofStats = [
  {
    number: '8',
    unit: '',
    label: 'Escalas clínicas validadas',
    sub: 'EVA · PSFS · Barthel · GROC y más',
  },
  {
    number: '9',
    unit: '',
    label: 'Pasos de anamnesis inteligente',
    sub: 'Completados por el paciente vía QR',
  },
  {
    number: '100',
    unit: '%',
    label: 'Especializado en kinesiología',
    sub: 'Diseñado para el flujo clínico real',
  },
]

export function HomeExploreStrip() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.15 })

  return (
    <>
      <style>{`
        /* Hallmark · Proof Strip · modern-minimal
         * Pure typography, no cards, no icons above headings
         */
        .hm-proof-section {
          background: var(--color-paper-2);
          border-top: var(--hairline);
          border-bottom: var(--hairline);
        }

        .hm-proof-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl) var(--space-3xl);
        }

        .hm-proof-section-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: var(--space-3xl);
        }

        /* Three stats in horizontal row, divided by hairlines */
        .hm-proof-row {
          display: flex;
          align-items: stretch;
          border-top: var(--hairline);
          border-bottom: var(--hairline);
          margin-bottom: var(--space-3xl);
        }

        .hm-proof-cell {
          flex: 1;
          padding: var(--space-xl) var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
          opacity: 0;
          transform: translateY(12px);
          transition-property: opacity, transform;
          transition-duration: 500ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        .hm-proof-cell.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hm-proof-cell:nth-child(2) { transition-delay: 80ms; }
        .hm-proof-cell:nth-child(3) { transition-delay: 160ms; }

        @media (prefers-reduced-motion: reduce) {
          .hm-proof-cell {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        .hm-proof-cell + .hm-proof-cell {
          border-left: var(--hairline);
        }

        .hm-proof-figure {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw + 0.5rem, 4rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1;
          letter-spacing: -0.05em;
          color: var(--color-ink);
        }

        .hm-proof-unit {
          font-size: 0.55em;
          vertical-align: top;
          letter-spacing: -0.02em;
        }

        .hm-proof-cell-label {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-ink);
          line-height: 1.3;
        }

        .hm-proof-cell-sub {
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--color-ink-3);
          line-height: 1.4;
        }

        /* Bottom navigation row — text links only */
        .hm-proof-nav {
          display: flex;
          align-items: center;
          gap: var(--space-xl);
          flex-wrap: wrap;
        }

        .hm-proof-nav-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-accent);
          text-decoration: none;
          border-bottom: 1px solid oklch(0.48 0.18 246 / 0.25);
          padding-bottom: 1px;
          outline: 2px solid transparent;
          outline-offset: 4px;
          transition-property: color, border-color;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-proof-nav-link:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-cobalt);
        }
        .hm-proof-nav-link:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-proof-nav-link:active { color: var(--kenko-cobalt); }

        .hm-proof-nav-secondary {
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--color-ink-3);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 4px;
          transition-property: color;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-proof-nav-secondary:hover { color: var(--color-ink-2); }
        .hm-proof-nav-secondary:focus-visible { outline-color: var(--color-focus); }

        /* Responsive */
        @media (max-width: 640px) {
          .hm-proof-row { flex-direction: column; border-bottom: none; }
          .hm-proof-cell + .hm-proof-cell {
            border-left: none;
            border-top: var(--hairline);
          }
          .hm-proof-cell:last-child { border-bottom: var(--hairline); }
          .hm-proof-cell { padding: var(--space-md) 0; }
          .hm-proof-figure { font-size: 2.5rem; }
          .hm-proof-inner { padding-inline: var(--space-md); }
          .hm-proof-nav { gap: var(--space-md); flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section
        className="hm-proof-section"
        aria-labelledby="proof-heading"
      >
        <div className="hm-proof-inner" ref={ref}>
          <p className="hm-proof-section-label" aria-hidden="true">En números</p>

          <div className="hm-proof-row" role="list">
            {proofStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`hm-proof-cell ${isVisible ? 'is-visible' : ''}`}
                role="listitem"
              >
                <p className="hm-proof-figure" aria-label={`${stat.number}${stat.unit} ${stat.label}`}>
                  {stat.number}
                  {stat.unit && <span className="hm-proof-unit" aria-hidden="true">{stat.unit}</span>}
                </p>
                <p className="hm-proof-cell-label" id={`proof-heading`}>{stat.label}</p>
                <p className="hm-proof-cell-sub">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Text-only navigation (not buttons) */}
          <nav className="hm-proof-nav" aria-label="Explorar Kenkomed">
            <Link href="/funcionalidades" className="hm-proof-nav-link">
              Ver todas las funcionalidades
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
            <Link href="/demo" className="hm-proof-nav-secondary">
              Demo interactiva →
            </Link>
            <Link href="/investigacion" className="hm-proof-nav-secondary">
              Base científica →
            </Link>
          </nav>
        </div>
      </section>
    </>
  )
}
