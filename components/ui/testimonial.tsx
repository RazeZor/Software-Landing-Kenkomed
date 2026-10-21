'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import { Star, Quote, CheckCircle2, ShieldCheck, Clock } from "lucide-react"

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
    "Llevo 2 meses con el software de gestión clínica Kenkomed y sin duda ha sido un gran acierto ya que me ha ayudado bastante a simplificar el trabajo administrativo con un sistema de registro clínico completo y detallado que me permite agendar pacientes, registrar evaluaciones y evoluciones clínicas facilitando el proceso y haciendo más ligero el trabajo de gestión de una manera mucho más organizada.",
  secondaryQuote:
    "Además debo agradecer la excelente disposición del equipo de soporte para resolver dudas y solucionar problemas que puedan surgir. Recomendado 100%.",
  author: "Klgo. David Barraza Oliveros",
  role: "Kinesiólogo especializado en movilidad funcional y envejecimiento saludable",
  image: "/images/fotodavid.jpeg",
  period: "Usuario activo · 2 meses de uso clínico",
  highlights: [
    "Registro clínico completo y ordenado",
    "Agendamiento y evoluciones en un solo lugar",
    "Soporte clínico con excelente disposición",
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
    <section className={cn("py-20 md:py-28 px-4 md:px-8 relative overflow-hidden", className)}>
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald/10 border border-emerald/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald mb-3">
          <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
          Caso Real · Testimonio Verificado
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
          La experiencia de un kinesiólogo con Kenkomed
        </h2>
        <p className="text-foreground-muted mt-3 max-w-2xl mx-auto text-base md:text-lg">
          Opinión directa de un profesional de la salud en Chile que gestiona su práctica clínica diaria con nuestra plataforma.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-border/80 bg-card p-6 sm:p-10 md:p-12 shadow-xl shadow-brand/5 overflow-hidden">
          {/* Subtle decorative glow */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, oklch(0.48 0.18 246 / 0.08) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />

          <Quote
            className="absolute right-6 top-6 h-20 w-20 md:h-28 md:w-28 text-brand/5 pointer-events-none stroke-1"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-center md:items-start">
            {/* Author photo & verification column */}
            <div className="flex flex-col items-center text-center shrink-0 w-full md:w-56">
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-brand/20 shadow-lg relative bg-surface">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover object-top"
                    priority={false}
                  />
                </div>
                <div
                  className="absolute -bottom-2.5 -right-2.5 bg-emerald text-white p-1.5 rounded-full shadow-md border-2 border-card"
                  title="Testimonio verificado"
                >
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald bg-emerald/10 border border-emerald/20 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3 text-emerald" /> Kinesiólogo Clínico
                </span>
                {item.period && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-foreground-muted font-medium">
                    <Clock className="h-3 w-3 text-foreground-muted/70" /> {item.period}
                  </span>
                )}
              </div>
            </div>

            {/* Testimonial body column */}
            <div className="flex-1 flex flex-col justify-between text-left">
              {/* Rating stars */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex text-amber-400" aria-label="Calificación 5 de 5 estrellas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-foreground-muted ml-1.5">
                  5.0 · Recomendado 100%
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="space-y-3.5 text-foreground/90 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  “{item.quote}”
                </p>
                {item.secondaryQuote && (
                  <p className="font-medium text-foreground bg-surface/70 border-l-2 border-brand pl-3 py-1 rounded-r-md">
                    “{item.secondaryQuote}”
                  </p>
                )}
              </blockquote>

              {/* Author signature */}
              <div className="mt-6 pt-5 border-t border-border/60">
                <p className="font-display font-bold text-base sm:text-lg text-foreground">
                  {item.author}
                </p>
                <p className="text-xs sm:text-sm font-medium text-brand mt-0.5">
                  {item.role}
                </p>
              </div>

              {/* Verified Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 pt-1">
                  {item.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-surface border border-border/70 text-foreground-muted px-3 py-1 rounded-full shadow-2xs"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald shrink-0" />
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
