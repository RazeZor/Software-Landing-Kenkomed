'use client'

import { useState, useEffect, useRef } from 'react'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    monthlyPrice: 19990,
    annualPrice: 14990,
    description: 'Ideal para kinesiólogos independientes que están comenzando.',
    features: [
      'Hasta 100 pacientes activos',
      'Agenda básica con recordatorios',
      'Fichas SOAP digitales',
      'Cobros y emisión de boletas',
      'App móvil incluida',
      'Soporte por email',
    ],
    cta: 'Comenzar gratis',
    highlighted: false,
  },
  {
    name: 'Profesional',
    monthlyPrice: 34990,
    annualPrice: 26990,
    description: 'Para clínicas en crecimiento que necesitan más potencia.',
    features: [
      'Pacientes ilimitados',
      'Agenda avanzada + reserva online',
      'Fichas SOAP + plantillas propias',
      'Cobros + informes de ingresos',
      'Recordatorios WhatsApp + email',
      'Reportes clínicos avanzados',
      'Hasta 3 profesionales',
      'Soporte prioritario',
    ],
    cta: 'Comenzar gratis',
    highlighted: true,
    badge: 'Más popular',
  },
  {
    name: 'Clínica',
    monthlyPrice: 59990,
    annualPrice: 44990,
    description: 'Para clínicas con múltiples profesionales y sedes.',
    features: [
      'Todo lo de Profesional',
      'Profesionales ilimitados',
      'Multi-sede',
      'API e integraciones',
      'Roles y permisos avanzados',
      'Estadísticas por profesional',
      'Gerente de cuenta dedicado',
      'Onboarding personalizado',
    ],
    cta: 'Hablar con ventas',
    highlighted: false,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(price)
}

export function Pricing() {
  const [annual, setAnnual] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-28 md:py-36 bg-background"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`max-w-xl mx-auto text-center mb-14 scroll-reveal ${revealed ? 'is-visible' : ''}`}>
          <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
            Precios
          </span>
          <h2
            id="pricing-heading"
            className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
          >
            Planes transparentes,{' '}
            <span className="text-gradient">sin sorpresas.</span>
          </h2>
          <p className="text-foreground-muted leading-relaxed mb-8">
            30 días gratis en cualquier plan. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-surface border border-border rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${!annual
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-foreground-muted hover:text-foreground'
                }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${annual
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-foreground-muted hover:text-foreground'
                }`}
            >
              Anual
              <span className="text-xs bg-brand text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
                -30%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid — staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 scroll-reveal-scale stagger-${i + 1} ${revealed ? 'is-visible' : ''
                } ${plan.highlighted
                  ? 'bg-brand border-brand shadow-2xl shadow-brand/20 scale-[1.02]'
                  : 'bg-card border-border/60 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5'
                }`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-background text-brand text-xs font-bold px-4 py-1.5 rounded-full border border-teal-200 shadow-sm">
                    <Zap size={11} className="fill-amber-400 text-amber-400" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`font-display font-bold text-xl mb-2 ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${plan.highlighted ? 'text-primary-foreground/70' : 'text-foreground-muted'
                    }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1.5">
                  <span
                    className={`font-display font-bold text-4xl ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
                      }`}
                  >
                    {formatPrice(annual ? plan.annualPrice : plan.monthlyPrice)}
                  </span>
                  <span
                    className={`text-sm mb-1.5 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-foreground-muted'
                      }`}
                  >
                    /mes
                  </span>
                </div>
                {annual && (
                  <p
                    className={`text-xs mt-1 ${plan.highlighted ? 'text-primary-foreground/60' : 'text-foreground-subtle'
                      }`}
                  >
                    Facturado anualmente · {formatPrice((annual ? plan.annualPrice : plan.monthlyPrice) * 12)} /año
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <div
                      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-primary-foreground/20' : 'bg-teal-50'
                        }`}
                    >
                      <Check
                        size={10}
                        className={plan.highlighted ? 'text-primary-foreground' : 'text-brand'}
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={`text-sm ${plan.highlighted ? 'text-primary-foreground/85' : 'text-foreground-muted'
                        }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${plan.highlighted
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md'
                    : 'bg-primary text-primary-foreground hover:bg-brand-dark shadow-sm hover:shadow-md hover:shadow-primary/20'
                  }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-14 text-center">
          <p className="text-sm text-foreground-muted">
            Todos los planes incluyen soporte en español, acceso a documentación y{' '}
            <strong className="text-foreground">garantía de devolución de 30 días.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
