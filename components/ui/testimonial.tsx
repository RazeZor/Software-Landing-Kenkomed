'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {
  Quote,
  CheckCircle2,
  Clock,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

export interface TestimonialItem {
  quote: string
  secondaryQuote?: string
  author: string
  role: string
  badgeLabel: string
  image: string
  period?: string
  highlights?: string[]
  livePortalUrl?: string
  livePortalLabel?: string
  internalLinkUrl?: string
  internalLinkLabel?: string
}

export const davidTestimonial: TestimonialItem = {
  quote:
    'Llevo 2 meses con el software de gestión clínica Kenkomed y sin duda ha sido un gran acierto, ya que me ha ayudado bastante a simplificar el trabajo administrativo con un sistema de registro clínico completo y detallado que me permite agendar pacientes, registrar evaluaciones y evoluciones clínicas facilitando el proceso y haciendo más ligero el trabajo de gestión de una manera mucho más organizada.',
  secondaryQuote:
    'Además debo agradecer la excelente disposición del equipo de soporte para resolver dudas y solucionar problemas que puedan surgir. Recomendado 100%.',
  author: 'Klgo. David Barraza Oliveros',
  role: 'Kinesiólogo especializado en movilidad funcional y envejecimiento saludable',
  badgeLabel: 'Kinesiólogo Clínico Verificado',
  image: '/images/fotodavid.jpeg',
  period: 'Usuario activo · 2 meses de uso clínico',
  highlights: [
    'Registro clínico completo y ordenado',
    'Agendamiento y evoluciones en un solo lugar',
    'Soporte clínico directo y oportuno',
  ],
  internalLinkUrl: '/funcionalidades',
  internalLinkLabel: 'Ver módulos de ficha clínica y evolución SOAP',
}

export const danielaTestimonial: TestimonialItem = {
  quote:
    'Hasta el momento me ha parecido bastante práctico; me ha ayudado a gestionar mi agenda facilitando también que los pacientes puedan agendar sus horas de manera autónoma desde el enlace de reserva.',
  secondaryQuote:
    'Lo más importante es que la agenda es bastante práctica para el día a día en consulta y además cuenta con escalas funcionales integradas para las evaluaciones.',
  author: 'Klga. Daniela Huichalaf',
  role: 'Kinesióloga Clínica · Rehabilitación y Atención Funcional',
  badgeLabel: 'Kinesióloga Clínica Verificada',
  image: '/images/fotodaniela.jpeg',
  period: 'Usuaria activa · Agenda online en producción',
  highlights: [
    'Autogestión de reservas para pacientes',
    'Agenda clínica práctica e intuitiva',
    'Escalas funcionales integradas',
  ],
  livePortalUrl: 'https://app.kenkomed.cl/reservar/daniela-huichalaf/',
  livePortalLabel: 'Ver su portal de reserva activo (app.kenkomed.cl)',
}

export const clinicalTestimonials: TestimonialItem[] = [
  davidTestimonial,
  danielaTestimonial,
]

export default function Testimonial({
  items = clinicalTestimonials,
  className,
}: {
  item?: TestimonialItem
  items?: TestimonialItem[]
  className?: string
}) {
  return (
    <section
      aria-label="Testimonios de kinesiólogos en Chile"
      className={cn(
        'py-20 md:py-28 px-5 sm:px-8 relative overflow-hidden bg-background border-t border-border/60',
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 0%, rgba(16,85,198,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/6 border border-brand/15 text-brand text-xs font-semibold tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Validación Clínica Real en Chile
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-foreground tracking-tight leading-[1.1] text-balance">
            Experiencia real en{' '}
            <span className="text-brand">consulta kinésica.</span>
          </h2>

          <p className="text-foreground-muted mt-3.5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Profesionales de la kinesiología en Chile que gestionan su agenda, admisión autónoma de pacientes y evaluaciones con escalas funcionales en Kenkomed.
          </p>
        </div>

        {/* 2-Column Balanced Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">
          {items.map((t) => (
            <article
              key={t.author}
              className="group relative rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xs hover:border-brand/40 transition-all flex flex-col justify-between overflow-hidden"
            >
              <Quote
                className="absolute right-5 top-5 h-14 w-14 sm:h-16 sm:w-16 text-brand/[0.06] pointer-events-none stroke-1"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                {/* Top Clinician Profile Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pb-5 border-b border-border/60">
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden border-2 border-brand/20 ring-4 ring-brand/5 relative bg-surface shrink-0">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      sizes="88px"
                      className="object-cover object-center scale-[1.03]"
                    />
                  </div>

                  <div className="space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald bg-emerald/10 border border-emerald/20 px-2.5 py-0.5 rounded-full">
                        <ShieldCheck
                          className="h-3.5 w-3.5 text-emerald shrink-0"
                          aria-hidden="true"
                        />
                        {t.badgeLabel}
                      </span>
                      {t.period && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-foreground-subtle font-medium">
                          <Clock
                            className="h-3 w-3 text-brand shrink-0"
                            aria-hidden="true"
                          />
                          {t.period}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-foreground leading-snug">
                      {t.author}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-brand leading-snug">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Quote Body */}
                <blockquote className="space-y-3.5 text-foreground text-sm sm:text-[15px] leading-relaxed font-normal">
                  <p className="text-foreground-muted leading-[1.7]">
                    “{t.quote}”
                  </p>
                  {t.secondaryQuote && (
                    <p className="font-medium text-foreground bg-surface/80 border-l-2 border-brand pl-4 py-2.5 pr-3 rounded-r-xl text-sm leading-relaxed">
                      “{t.secondaryQuote}”
                    </p>
                  )}
                </blockquote>
              </div>

              {/* Bottom Highlights & Live Verification Link */}
              <div className="relative z-10 mt-6 pt-5 border-t border-border/60 space-y-4">
                {t.highlights && t.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {t.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs font-medium bg-surface border border-border text-foreground-muted px-3 py-1 rounded-full"
                      >
                        <CheckCircle2
                          className="h-3.5 w-3.5 text-emerald shrink-0"
                          aria-hidden="true"
                        />
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}

                {t.livePortalUrl && (
                  <div className="pt-1 flex items-center justify-between gap-3 rounded-xl bg-brand/[0.04] border border-brand/15 px-4 py-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-2 h-2 rounded-full bg-emerald shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-xs font-medium text-foreground-muted truncate">
                        Agenda online pública en producción
                      </span>
                    </div>
                    <a
                      href={t.livePortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                    >
                      <span>{t.livePortalLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}

                {t.internalLinkUrl && (
                  <div className="pt-1 flex items-center justify-between gap-3 rounded-xl bg-surface/70 border border-border/80 px-4 py-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-2 h-2 rounded-full bg-brand shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-xs font-medium text-foreground-muted truncate">
                        Flujo clínico diario en box
                      </span>
                    </div>
                    <Link
                      href={t.internalLinkUrl}
                      className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                    >
                      <span>{t.internalLinkLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
