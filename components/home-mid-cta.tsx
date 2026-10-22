'use client'

/* Hallmark · component: Statement CTA Strip · genre: modern-minimal · theme: Cobalt
 * Asymmetric strip — left-aligned heading, single CTA button, no gradient background card
 * gates fixed: 6 (not centred-everything), 8 (strip rhythm, not rounded card),
 *              9 (hairline border top/bottom), 24 (no transition:all), 27 (prefers-reduced-motion),
 *              48 (tokens only, no inline oklch in gradients)
 */

import Link from 'next/link'
import { RiArrowRightLine as ArrowRight } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { AnimatedIcon } from '@/components/ui/animated-icon'
import activity from 'react-useanimations/lib/activity'
import shield from 'react-useanimations/lib/shield'
import checkmark from 'react-useanimations/lib/checkmark'
import { AgendaLottie } from '@/components/agenda-lottie'

const proof = [
  { text: 'Demo en 24 h', animation: activity },
  { text: 'Sin tarjeta de crédito', animation: shield },
  { text: 'Datos encriptados', animation: checkmark },
]

export function HomeMidCta() {
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
          position: relative;
          overflow: hidden;
        }

        .hm-cta-strip-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl);
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto;
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

        /* Center: Agenda Lottie animation */
        .hm-cta-lottie-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 160px;
          height: 160px;
          flex-shrink: 0;
        }

        .hm-cta-lottie-glow {
          position: absolute;
          width: 140%;
          height: 140%;
          border-radius: 50%;
          background: radial-gradient(circle, oklch(0.48 0.18 246 / 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
          filter: blur(12px);
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

        /* Responsive */
        @media (max-width: 960px) {
          .hm-cta-strip-inner {
            grid-template-columns: 1fr auto;
            gap: var(--space-xl);
          }
          .hm-cta-lottie-wrap {
            width: 130px;
            height: 130px;
          }
        }

        @media (max-width: 768px) {
          .hm-cta-strip-inner {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
            padding-inline: var(--space-md);
            padding-block: var(--space-2xl);
          }
          .hm-cta-lottie-wrap {
            width: 140px;
            height: 140px;
            margin-inline: auto;
          }
          .hm-cta-strip-action {
            align-items: stretch;
            width: 100%;
          }
          .hm-cta-btn-primary {
            justify-content: center;
          }
        }
      `}</style>

      <section
        className="hm-cta-strip"
        aria-labelledby="mid-cta-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.5 }}
          className="hm-cta-strip-inner"
        >
          {/* Left: heading + sub + proof chips */}
          <div className="hm-cta-strip-content">
            <p className="hm-cta-strip-label" aria-hidden="true">¿Quieres verlo funcionando?</p>
            <h2 id="mid-cta-heading" className="hm-cta-strip-heading">
              Agenda tu demo gratuita ahora.
            </h2>
            <p className="hm-cta-strip-sub">
              Te mostramos Kenkomed en vivo y resolvemos tus dudas en una llamada corta.
              Sin obligaciones.
            </p>
            <div className="hm-cta-proof" role="list" aria-label="Garantías">
              {proof.map(({ text, animation }) => (
                <span key={text} className="hm-cta-proof-chip flex items-center gap-1.5" role="listitem">
                  <AnimatedIcon animation={animation} size={15} strokeColor="currentColor" autoplay />
                  <span>{text}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Center: Agenda Lottie */}
          <div className="hm-cta-lottie-wrap" aria-hidden="true">
            <div className="hm-cta-lottie-glow" />
            <AgendaLottie className="w-full h-full relative z-10" />
          </div>

          {/* Right: single CTA — not two buttons */}
          <div className="hm-cta-strip-action">
            <a href="#contact" className="hm-cta-btn-primary" id="mid-cta-btn">
              Solicitar demo gratuita
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  )
}
