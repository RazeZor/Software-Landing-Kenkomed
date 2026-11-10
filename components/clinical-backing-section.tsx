'use client'

import Link from 'next/link'
import { ShieldCheck, FlaskConical, MapPin, ArrowRight } from 'lucide-react'

const pillars = [
  {
    icon: MapPin,
    title: 'Desarrollado desde Concepción junto a kinesiólogos',
    description:
      'Construido en terreno en la Región del Biobío junto a profesionales clínicos para resolver la realidad diaria de consultas particulares, atención domiciliaria y centros de rehabilitación en Chile.',
    linkHref: '/solucion',
    linkLabel: 'Conocer nuestra solución',
  },
  {
    icon: FlaskConical,
    title: 'Respaldo en evidencia clínica internacional',
    description:
      'El motor de soporte a la decisión (DSS) integra 13 escalas funcionales validadas (Oswestry, LEFS, WOMAC, EVA, PSFS, Barthel y más) y criterios de derivación basados en guías clínicas (NICE, IASP y OMS).',
    linkHref: '/investigacion',
    linkLabel: 'Ver base científica y escalas',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad y normativa chilena de datos en salud',
    description:
      'Cifrado en tránsito y reposo, control de acceso por roles (Director Técnico, Kinesiólogo y Recepción), bloqueo automático en box y trazabilidad conforme a la Ley N° 20.584 y preparada para la Ley N° 21.719.',
    linkHref: '/seguridad',
    linkLabel: 'Revisar arquitectura de seguridad',
  },
]

export function ClinicalBackingSection() {
  return (
    <section
      id="respaldo-clinico"
      aria-labelledby="backing-heading"
      className="py-20 md:py-24 px-6 bg-surface/60 border-y border-border/60"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/6 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
            Respaldo científico y normativo
          </p>
          <h2
            id="backing-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.024em] leading-[1.12] text-foreground text-balance"
          >
            Rigor clínico, evidencia y resguardo normativo.
          </h2>
          <p className="mt-3.5 text-base sm:text-[1.0625rem] text-foreground-muted leading-relaxed max-w-2xl mx-auto">
            Kenkomed combina ingeniería de software y práctica kinesiológica real bajo los estándares de salud de Chile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-2xs"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand mb-5">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    href={pillar.linkHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
                  >
                    {pillar.linkLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
