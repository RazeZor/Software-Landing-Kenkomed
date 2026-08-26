'use client'

/* Hallmark · component: Statement CTA Strip · genre: modern-minimal · theme: Cobalt
 * Asymmetric strip — left-aligned heading, single CTA button, no gradient background card
 * gates fixed: 6 (not centred-everything), 8 (strip rhythm, not rounded card),
 *              9 (hairline border top/bottom), 24 (no transition:all), 27 (prefers-reduced-motion),
 *              48 (tokens only, no inline oklch in gradients)
 */

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/use-scroll-animation'

const proof = [
  { text: 'Demo en 24 h' },
  { text: 'Sin tarjeta de crédito' },
  { text: 'Datos encriptados' },
]

export function HomeMidCta() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <>
      <style>{`
        /* Hallmark · Statement CTA Strip · modern-minimal
         * Asymmetric — left-aligned, not centered card with gradient
         */
        .hm-cta-strip {
          background: var(--color-paper);
          border-top: var(--hairline);
          border-bottom: var(--hairline);
        }

        .hm-cta-strip-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--space-2xl);
          align-items: center;
        }

        .hm-cta-strip-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent-2);
          margin-bottom: var(--space-md);
        }

        .hm-cta-strip-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw + 0.5rem, 2.75rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          max-width: 18ch;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-cta-strip-sub {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.65;
          max-width: 46ch;
          margin-top: var(--space-md);
        }

        /* Proof chips — Geist Mono (outlier font) */
        .hm-cta-proof {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-top: var(--space-lg);
        }

        .hm-cta-proof-chip {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          letter-spacing: 0.04em;
          color: var(--color-ink-3);
          border: var(--hairline);
          border-radius: 999px;
          padding: 0.25rem 0.75rem;
          line-height: 1;
        }

        /* Right: single CTA button */
        .hm-cta-strip-action {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-sm);
          flex-shrink: 0;
        }

        .hm-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--color-accent);
          color: oklch(0.99 0.002 246);
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          text-decoration: none;
          line-height: 1;
          white-space: nowrap;
          outline: 2px solid transparent;
          outline-offset: 2px;
          transition-property: background-color, transform, box-shadow;
          transition-duration: 200ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-cta-btn-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px oklch(0.48 0.18 246 / 0.30);
        }
        .hm-cta-btn-primary:focus-visible {
          outline-color: var(--color-focus);
        }
        .hm-cta-btn-primary:active {
          transform: translateY(0);
          box-shadow: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-cta-btn-primary {
            transition: none;
          }
          .hm-cta-btn-primary:hover {
            transform: none;
            box-shadow: none;
          }
        }

        /* Reveal */
        .hm-cta-strip-inner {
          opacity: 0;
          transform: translateY(16px);
          transition-property: opacity, transform;
          transition-duration: 400ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        .hm-cta-strip-inner.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-cta-strip-inner {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hm-cta-strip-inner {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          .hm-cta-strip-action { align-items: flex-start; }
          .hm-cta-strip-inner { padding-inline: var(--space-md); }
        }
      `}</style>

      <section
        className="hm-cta-strip"
        aria-labelledby="mid-cta-heading"
      >
        <div
          ref={ref}
          className={`hm-cta-strip-inner ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Left: heading + sub + proof chips */}
          <div>
            <p className="hm-cta-strip-label" aria-hidden="true">¿Te convenció?</p>
            <h2 id="mid-cta-heading" className="hm-cta-strip-heading">
              Agenda tu demo gratuita ahora.
            </h2>
            <p className="hm-cta-strip-sub">
              Te mostramos Kenkomed en vivo y resolvemos tus dudas en una llamada corta.
              Sin obligaciones.
            </p>
            <div className="hm-cta-proof" role="list" aria-label="Garantías">
              {proof.map(({ text }) => (
                <span key={text} className="hm-cta-proof-chip" role="listitem">{text}</span>
              ))}
            </div>
          </div>

          {/* Right: single CTA — not two buttons */}
          <div className="hm-cta-strip-action">
            <a href="#contact" className="hm-cta-btn-primary" id="mid-cta-btn">
              Solicitar demo gratuita
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
