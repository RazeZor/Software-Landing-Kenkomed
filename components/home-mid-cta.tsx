'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, Shield, Sparkles } from 'lucide-react'
import { useReveal } from '@/hooks/use-scroll-animation'

const perks = [
  { icon: Calendar, text: 'Demo en 24 h' },
  { icon: Shield, text: 'Datos encriptados' },
  { icon: Sparkles, text: 'Sin tarjeta' },
]

export function HomeMidCta() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section className="py-12 md:py-16 px-6 bg-background" aria-labelledby="mid-cta-heading">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center border transition-shadow duration-500 hover:shadow-2xl hover:shadow-brand/10"
          style={{
            background:
              'linear-gradient(145deg, #05111e 0%, #0d2a50 50%, #081b35 100%)',
            borderColor: 'oklch(0.48 0.18 246 / 0.25)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(circle at 80% 20%, oklch(0.66 0.19 163 / 0.2), transparent 50%)',
            }}
          />

          <div className="relative z-10">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3 font-display"
              style={{ color: 'var(--kenko-pulse)' }}
            >
              ¿Te convenció lo que viste?
            </p>
            <h2
              id="mid-cta-heading"
              className="font-display font-bold text-2xl md:text-4xl text-on-brand mb-4 text-balance"
            >
              Agenda tu demo gratuita ahora
            </h2>
            <p className="text-on-brand-muted max-w-lg mx-auto mb-8 leading-relaxed">
              No necesitas leer toda la página. Te mostramos Kenkomed en vivo y resolvemos tus
              dudas en una llamada corta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a
                href="#contact"
                className="btn-kenko-primary w-full sm:w-auto justify-center group"
              >
                Solicitar demo gratuita
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <Link
                href="/demo"
                className="btn-kenko-ghost w-full sm:w-auto justify-center text-sm font-medium"
              >
                Explorar demo interactiva
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {perks.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-xs text-on-brand-subtle kenko-card rounded-full px-3 py-1.5"
                >
                  <Icon size={12} style={{ color: 'var(--kenko-pulse)' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
