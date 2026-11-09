'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Quote, CheckCircle2, Clock } from 'lucide-react'

export interface TestimonialItem {
  quote: string
  secondaryQuote?: string
  author: string
  role: string
  image: string
  period?: string
  highlights?: string[]
}

export const davidTestimonial: TestimonialItem = {
  quote:
    'Llevo 2 meses con el software de gestión clínica Kenkomed y sin duda ha sido un gran acierto ya que me ha ayudado bastante a simplificar el trabajo administrativo con un sistema de registro clínico completo y detallado que me permite agendar pacientes, registrar evaluaciones y evoluciones clínicas facilitando el proceso y haciendo más ligero el trabajo de gestión de una manera mucho más organizada.',
  secondaryQuote:
    'Además debo agradecer la excelente disposición del equipo de soporte para resolver dudas y solucionar problemas que puedan surgir. Recomendado 100%.',
  author: 'Klgo. David Barraza Oliveros',
  role: 'Kinesiólogo especializado en movilidad funcional y envejecimiento saludable',
  image: '/images/fotodavid.jpeg',
  period: 'Usuario activo · 2 meses de uso clínico',
  highlights: [
    'Registro clínico completo y ordenado',
    'Agendamiento y evoluciones en un solo lugar',
    'Soporte clínico directo y oportuno',
  ],
}

export default function Testimonial({
  item = davidTestimonial,
  className,
}: {
  item?: TestimonialItem
  items?: TestimonialItem[]
  className?: string
}) {
  return (
    <section className={cn('py-20 md:py-28 px-4 md:px-8 relative overflow-hidden bg-background', className)}>
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
          Experiencia real en consulta kinésica
        </h2>
        <p className="text-foreground-muted mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Testimonio de un profesional de la salud en Chile que gestiona su práctica clínica diaria con Kenkomed.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-border bg-card p-6 sm:p-10 md:p-12 shadow-sm overflow-hidden">
          <Quote
            className="absolute right-6 top-6 h-16 w-16 md:h-24 md:w-24 text-brand/5 pointer-events-none stroke-1"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
            {/* Author photo & metadata */}
            <div className="flex flex-col items-center text-center shrink-0 w-full md:w-52">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-border relative bg-surface">
                <Image
                  src={item.image}
                  alt={item.author}
                  fill
                  sizes="(max-width: 640px) 128px, 144px"
                  className="object-cover object-top"
                  priority={false}
                />
              </div>

              <div className="mt-4 flex flex-col items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald bg-emerald/10 border border-emerald/20 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald" aria-hidden="true" /> Kinesiólogo Clínico
                </span>
                {item.period && (
                  <span className="inline-flex items-center gap-1 text-xs text-foreground-muted font-medium">
                    <Clock className="h-3.5 w-3.5 text-foreground-muted" aria-hidden="true" /> {item.period}
                  </span>
                )}
              </div>
            </div>

            {/* Testimonial body column */}
            <div className="flex-1 flex flex-col justify-between text-left">
              <blockquote className="space-y-3.5 text-foreground text-sm sm:text-base leading-relaxed font-normal">
                <p>“{item.quote}”</p>
                {item.secondaryQuote && (
                  <p className="font-medium text-foreground bg-surface border-l-2 border-brand pl-3.5 py-1.5 rounded-r-md">
                    “{item.secondaryQuote}”
                  </p>
                )}
              </blockquote>

              <div className="mt-6 pt-5 border-t border-border/60">
                <p className="font-display font-bold text-base sm:text-lg text-foreground">
                  {item.author}
                </p>
                <p className="text-xs sm:text-sm font-medium text-brand mt-0.5">
                  {item.role}
                </p>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 pt-1">
                  {item.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-surface border border-border text-foreground-muted px-3 py-1 rounded-full"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald shrink-0" aria-hidden="true" />
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
