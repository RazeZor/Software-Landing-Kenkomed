'use client'

import { useEffect, useRef, useState } from 'react'
import { HelpCircle } from 'lucide-react'
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
  const header = useReveal()

  return (
    <section
      id="preguntas-frecuentes"
      className="py-28 md:py-36 bg-background relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div
          ref={header.ref}
          className={`text-center mb-12 scroll-reveal ${header.visible ? 'is-visible' : ''}`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold text-brand tracking-widest uppercase mb-4">
            <HelpCircle size={14} aria-hidden="true" />
            Preguntas frecuentes
          </span>
          <h2
            id="faq-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
          >
            Todo sobre el software para kinesiólogos
          </h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            Respuestas sobre gestión clínica, sistema DSS, fichas digitales, agenda y
            cuestionarios EVA, PSFS y Barthel en Chile.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full rounded-2xl border border-border/60 bg-surface/50 px-2 md:px-4 shadow-sm">
          {homeFaqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand px-2">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground-muted leading-relaxed px-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
