'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Check, Zap, X, Send, User, Mail, Phone, Building2, Users, ChevronRight } from 'lucide-react'

/* ── Plan data (Opción B aprobada) ─────────────────────────────── */

const plans = [
  {
    slug: 'individual',
    name: 'Individual',
    monthlyPrice: 19990,
    annualPrice: 15990,
    description: 'Para kinesiólogos independientes que trabajan solos.',
    badge: null,
    highlighted: false,
    users: '1 kinesiólogo',
    features: [
      'Hasta 100 pacientes activos',
      'Agenda con calendario personal',
      'Fichas clínicas SOAP digitales',
      'Sesiones kinésicas con evolución',
      '13 escalas clínicas validadas',
      'Dashboard con métricas en tiempo real',
      'Notificaciones automáticas por email',
      'Soporte por email (48h)',
    ],
    cta: 'Quiero saber más',
    ctaStyle: 'secondary' as const,
  },
  {
    slug: 'clinico-pro',
    name: 'Clínico Pro',
    monthlyPrice: 29990,
    annualPrice: 23990,
    description: 'Para kinesiólogos que quieren más potencia o trabajan con un asistente.',
    badge: 'Más popular',
    highlighted: true,
    users: '1 kine + 1 asistente',
    features: [
      'Pacientes ilimitados',
      'Agenda avanzada (Presencial · Domicilio · Telemedicina)',
      'Admisión QR — anamnesis remota 14 págs.',
      'Ciclos clínicos con alta y diagnóstico final',
      'Recetas médicas digitales con email automático',
      'Reportes clínicos con análisis DSS',
      'Auditoría clínica (Ley 21.719)',
      'Exportación ARCO (JSON / HTML)',
      'Logo personalizado en correos e informes',
      'Soporte prioritario (24h)',
    ],
    cta: 'Quiero saber más',
    ctaStyle: 'primary' as const,
  },
  {
    slug: 'clinica',
    name: 'Clínica',
    monthlyPrice: 69990,
    annualPrice: 55990,
    description: 'Para centros con 3 a 4 kinesiólogos. Todo incluido.',
    badge: 'Máximo poder',
    highlighted: false,
    users: '3–4 kinesiólogos + staff',
    extraKinePrice: 12990,
    features: [
      'Todo lo de Clínico Pro',
      'Multi-sede con migración de pacientes',
      'Roles avanzados: Admin · Miembro · Secretaria',
      'Calendario del centro (todo el equipo)',
      'Dashboard gerencial con métricas por profesional',
      'Auditoría PDF exportable por período',
      'Onboarding personalizado',
      'Branding completo (logo en correos, informes, PDF)',
      'Exportación avanzada (ARCO + auditoría PDF)',
      'Gerente de cuenta dedicado (12h)',
    ],
    cta: 'Quiero saber más',
    ctaStyle: 'secondary' as const,
  },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(price)
}

/* ── Lead Capture Modal ────────────────────────────────────────── */

function LeadModal({
  plan,
  open,
  onClose,
}: {
  plan: (typeof plans)[number] | null
  open: boolean
  onClose: () => void
}) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    kines: '1',
  })

  // Reset form on open
  useEffect(() => {
    if (open) {
      setIsSubmitted(false)
      setForm({ name: '', email: '', phone: '', clinic: '', kines: '1' })
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '491d435e-576c-4b14-86a2-7d9540776b32',
          ...form,
          plan_interes: plan?.name ?? 'No especificado',
          subject: `🎯 Lead Pricing — ${plan?.name} — ${form.name}`,
          from_name: 'Kenkomed Landing – Planes',
        }),
      })

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json()
        if (result.success) {
          setIsSubmitted(true)
        } else {
          alert(`Error: ${result.message || 'Intenta de nuevo.'}`)
        }
      } else {
        alert('Error de conexión. Intenta de nuevo más tarde.')
      }
    } catch {
      alert('Hubo un error de conexión. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={(e) => e.target === backdropRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Solicitar información del plan ${plan?.name}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-2xl border border-border/60 shadow-2xl animate-in zoom-in-95 fade-in duration-300 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-foreground-muted hover:text-foreground hover:bg-surface transition-all z-10"
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <div className="p-8">
          {isSubmitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-6">
                <Check size={32} className="text-emerald" />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                ¡Recibimos tu solicitud!
              </h3>
              <p className="text-foreground-muted max-w-sm mb-2">
                Te contactaremos dentro de <strong className="text-foreground">24 horas hábiles</strong> con
                toda la información del plan <strong className="text-foreground">{plan?.name}</strong>.
              </p>
              <p className="text-sm text-foreground-subtle mb-6">
                Revisa tu bandeja de entrada y spam.
              </p>
              <button
                onClick={onClose}
                className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand tracking-widest uppercase mb-3">
                  <Zap size={12} className="fill-brand text-brand" />
                  Plan {plan?.name}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-1">
                  Cuéntanos sobre ti
                </h3>
                <p className="text-sm text-foreground-muted">
                  Completa tus datos y te contactaremos para mostrarte cómo KenkoMed
                  puede transformar tu práctica.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="lead-name" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                    <User size={13} className="text-foreground-muted" />
                    Nombre completo <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="lead-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="lead-email" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Mail size={13} className="text-foreground-muted" />
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="lead-email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lead-phone" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Phone size={13} className="text-foreground-muted" />
                      Teléfono <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="lead-phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>
                </div>

                {/* Clinic & Kines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="lead-clinic" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Building2 size={13} className="text-foreground-muted" />
                      Clínica / Centro
                    </label>
                    <input
                      type="text"
                      id="lead-clinic"
                      name="clinic"
                      value={form.clinic}
                      onChange={handleChange}
                      placeholder="Nombre de tu clínica"
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="lead-kines" className="text-sm font-medium text-foreground flex items-center gap-1.5">
                      <Users size={13} className="text-foreground-muted" />
                      ¿Cuántos kinesiólogos? <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="lead-kines"
                      name="kines"
                      required
                      value={form.kines}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all appearance-none"
                    >
                      <option value="1">1 (solo yo)</option>
                      <option value="2">2 profesionales</option>
                      <option value="3-4">3 a 4 profesionales</option>
                      <option value="5-8">5 a 8 profesionales</option>
                      <option value="9+">9 o más</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar información
                      <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-foreground-subtle">
                  Sin compromiso · Respuesta en 24h hábiles ·{' '}
                  <a href="/privacidad" className="text-brand hover:underline">
                    Política de Privacidad
                  </a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Main Pricing Section ──────────────────────────────────────── */

export function Pricing() {
  const [annual, setAnnual] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [modalPlan, setModalPlan] = useState<(typeof plans)[number] | null>(null)

  const closeModal = useCallback(() => setModalPlan(null), [])

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
    <>
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
                <span className="text-xs bg-emerald text-primary-foreground px-2 py-0.5 rounded-full font-semibold">
                  2 meses gratis
                </span>
              </button>
            </div>
          </div>

          {/* Plans grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <div
                key={plan.slug}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 scroll-reveal-scale stagger-${i + 1} ${revealed ? 'is-visible' : ''
                  } ${plan.highlighted
                    ? 'bg-brand border-brand shadow-2xl shadow-brand/20 scale-[1.02]'
                    : 'bg-card border-border/60 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5'
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full border shadow-sm ${plan.highlighted
                        ? 'bg-background text-brand border-teal-200'
                        : 'bg-background text-foreground border-border'
                      }`}>
                      <Zap size={11} className={plan.highlighted ? 'fill-amber-400 text-amber-400' : 'fill-brand text-brand'} />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan name & description */}
                <div className="mb-6">
                  <h3
                    className={`font-display font-bold text-xl mb-1 ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'
                      }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs font-medium mb-2 ${plan.highlighted ? 'text-primary-foreground/60' : 'text-foreground-subtle'
                      }`}
                  >
                    {plan.users}
                  </p>
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
                      /mes + IVA
                    </span>
                  </div>
                  {annual && (
                    <p
                      className={`text-xs mt-1 ${plan.highlighted ? 'text-primary-foreground/60' : 'text-foreground-subtle'
                        }`}
                    >
                      Facturado anualmente · {formatPrice(plan.annualPrice * 12)} /año
                    </p>
                  )}
                  {/* Extra kine pricing for Clínica */}
                  {'extraKinePrice' in plan && plan.extraKinePrice && (
                    <p
                      className={`text-xs mt-2 font-medium ${plan.highlighted ? 'text-primary-foreground/70' : 'text-brand'
                        }`}
                    >
                      +{formatPrice(plan.extraKinePrice)}/mes por kinesiólogo adicional
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
                <button
                  onClick={() => setModalPlan(plan)}
                  className={`w-full flex items-center justify-center gap-2 text-center py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${plan.highlighted
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-md'
                    : 'bg-primary text-primary-foreground hover:bg-brand-dark shadow-sm hover:shadow-md hover:shadow-primary/20'
                    }`}
                >
                  {plan.cta}
                  <ChevronRight size={15} className="opacity-60" />
                </button>
              </div>
            ))}
          </div>

          {/* IVA notice + Guarantee */}
          <div className="mt-14 text-center space-y-2">
            <p className="text-sm text-foreground-muted">
              Todos los precios son neto + IVA (19%). Incluyen soporte en español y{' '}
              <strong className="text-foreground">garantía de devolución de 30 días.</strong>
            </p>
            <p className="text-xs text-foreground-subtle">
              ¿Necesitas un plan personalizado?{' '}
              <a href="#contact" className="text-brand hover:underline font-medium">
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Lead capture modal */}
      <LeadModal plan={modalPlan} open={modalPlan !== null} onClose={closeModal} />
    </>
  )
}
