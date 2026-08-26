'use client'

/* Hallmark · component: FAQ Section · genre: modern-minimal · theme: Cobalt
 * Left-aligned, Geist Mono numbered items, hairline rules as dividers
 * gates fixed: 6 (not centered), 9 (hairline rules between items, not whitespace-only),
 *              24 (no transition:all), 26 (focus-visible on accordion triggers),
 *              27 (prefers-reduced-motion), 38a (no italic headings)
 */

import { useEffect, useRef, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { homeFaqItems } from '@/lib/faq-data'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export function FaqSection() {
  const { ref, visible } = useReveal()

  return (
    <>
      <style>{`
        /* Hallmark · FAQ Section · modern-minimal
         * Left-aligned, numbered with Geist Mono, hairline dividers
         */
        .hm-faq-section {
          background: var(--color-paper-2);
          border-top: var(--hairline);
        }

        .hm-faq-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-4xl);
          align-items: start;
        }

        /* Left column: label + heading */
        .hm-faq-header {
          position: sticky;
          top: var(--feature-stack-sticky-top);
        }

        .hm-faq-section-label {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: var(--space-lg);
          display: block;
        }

        .hm-faq-heading {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);
          font-weight: 800;
          font-style: normal; /* gate 38a */
          line-height: 1.08;
          letter-spacing: -0.04em;
          color: var(--color-ink);
          margin-bottom: var(--space-md);
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-faq-sub {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-ink-2);
          line-height: 1.65;
        }

        /* Right column: accordion items */
        .hm-faq-list {
          opacity: 0;
          transform: translateY(12px);
          transition-property: opacity, transform;
          transition-duration: 400ms;
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        .hm-faq-list.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-faq-list { opacity: 1; transform: none; transition: none; }
        }

        /* Accordion item — hairline rule top (gate 9: not whitespace-only) */
        .hm-faq-item {
          border-top: var(--hairline);
        }
        .hm-faq-item:last-child {
          border-bottom: var(--hairline);
        }

        /* Trigger row: number + question */
        .hm-faq-trigger {
          display: flex;
          align-items: baseline;
          gap: var(--space-md);
          padding-block: var(--space-lg);
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          outline: 2px solid transparent; /* gate 26 — focus ring */
          outline-offset: 2px;
          border-radius: var(--radius-sm);
          transition-property: background-color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-faq-trigger:focus-visible {
          outline-color: var(--color-focus);
        }

        .hm-faq-number {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          color: var(--color-ink-3);
          letter-spacing: 0.06em;
          flex-shrink: 0;
          margin-top: 0.15em;
        }

        .hm-faq-question {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          font-style: normal; /* gate 38a */
          color: var(--color-ink);
          line-height: 1.4;
          flex: 1;
          text-align: left;
        }

        .hm-faq-answer {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          color: var(--color-ink-2);
          line-height: 1.7;
          padding-bottom: var(--space-lg);
          padding-left: calc(var(--space-md) + 2.5rem); /* aligns with question text */
          max-width: 60ch;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hm-faq-inner {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
          }
          .hm-faq-header { position: static; }
          .hm-faq-inner { padding-inline: var(--space-md); }
          .hm-faq-answer { padding-left: calc(var(--space-md) + 1.875rem); }
        }
      `}</style>

      <section
        id="preguntas-frecuentes"
        className="hm-faq-section"
        aria-labelledby="faq-heading"
      >
        <div className="hm-faq-inner">
          {/* Left: sticky header */}
          <div className="hm-faq-header">
            <span className="hm-faq-section-label" aria-hidden="true">
              Preguntas frecuentes
            </span>
            <h2 id="faq-heading" className="hm-faq-heading">
              Lo que los kinesiólogos siempre preguntan.
            </h2>
            <p className="hm-faq-sub">
              Sobre el software, las escalas clínicas, la agenda, las fichas
              digitales y la implementación en Chile.
            </p>
          </div>

          {/* Right: accordion with numbered items */}
          <div
            ref={ref}
            className={`hm-faq-list ${visible ? 'is-visible' : ''}`}
          >
            <Accordion type="single" collapsible className="w-full">
              {homeFaqItems.map((item, index) => {
                const num = String(index + 1).padStart(2, '0')
                return (
                  <AccordionItem
                    key={item.question}
                    value={`faq-${index}`}
                    className="hm-faq-item"
                  >
                    <AccordionTrigger
                      className="hm-faq-trigger"
                      aria-label={`Pregunta ${num}: ${item.question}`}
                    >
                      <span className="hm-faq-number" aria-hidden="true">{num} ·</span>
                      <span className="hm-faq-question">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="hm-faq-answer">
                        {item.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
