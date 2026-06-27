'use client'

import Link from 'next/link'
import { ArrowRight, Brain, QrCode, BarChart3, Layers } from 'lucide-react'
import { SectionEyebrow } from '@/components/brand-elements'
import { useReveal } from '@/hooks/use-scroll-animation'

const pillars = [
  {
    icon: Brain,
    title: 'DSS clínico',
    desc: '8 escalas validadas, banderas rojas y apoyo a la decisión en cada sesión.',
    href: '/funcionalidades#plataforma',
  },
  {
    icon: QrCode,
    title: 'Admisión QR',
    desc: 'Anamnesis de 14 páginas completada por el paciente antes de llegar.',
    href: '/funcionalidades#admision-remota',
  },
  {
    icon: BarChart3,
    title: 'Monitoreo',
    desc: 'Panel en tiempo real con evolución de pacientes y outcomes clínicos.',
    href: '/funcionalidades#monitoreo',
  },
]

export function HomeExploreStrip() {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.15 })

  return (
    <section
      className="py-20 md:py-24 kenko-band-mist relative overflow-hidden"
      aria-labelledby="explore-heading"
    >
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div
          className={`text-center mb-12 scroll-reveal ${isVisible ? 'is-visible' : ''}`}
        >
          <SectionEyebrow>Profundidad sin saturar</SectionEyebrow>
          <h2
            id="explore-heading"
            className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4 text-balance"
          >
            Lo esencial aquí.{' '}
            <span className="text-gradient">El detalle, cuando lo necesites.</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto leading-relaxed">
            Esta página convence y orienta. Si quieres revisar módulo por módulo — DSS, QR,
            funcionalidades completas y monitoreo — está todo en un solo lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <Link
                key={pillar.title}
                href={pillar.href}
                className={`group kenko-card-solid rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 scroll-reveal stagger-${i + 1} ${isVisible ? 'is-visible' : ''}`}
              >
                <div className="w-10 h-10 rounded-xl bg-brand-lighter flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                  <Icon size={18} className="text-brand" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-brand transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-foreground-muted leading-relaxed">{pillar.desc}</p>
              </Link>
            )
          })}
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 scroll-reveal stagger-4 ${isVisible ? 'is-visible' : ''}`}
        >
          <Link href="/funcionalidades" className="btn-kenko-primary group">
            <Layers size={16} />
            Ver todas las funcionalidades
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/demo" className="btn-kenko-ghost text-sm">
            Ver demo interactiva
          </Link>
        </div>
      </div>
    </section>
  )
}
