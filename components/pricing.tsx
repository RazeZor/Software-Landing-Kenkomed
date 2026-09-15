'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Check, Zap, X, Send, User, Mail, Phone, Building2, Users, ChevronRight, Stethoscope, Clock, MessageSquare, ShieldCheck, Sparkles, Activity } from 'lucide-react'

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
    cta: 'Prueba gratis 3 días',
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
    cta: 'Solicitar Demo',
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
    cta: 'Hablar con Ventas',
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

/* ── Lead Capture Modal Formal ────────────────────────────────── */

function LeadModal({
  plan,
  annual,
  open,
  onClose,
}: {
  plan: (typeof plans)[number] | null
  annual: boolean
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
    specialty: 'Traumatología y Ortopedia',
    modality: 'Presencial en consulta',
    contactPreference: 'WhatsApp (Mañana 9:00 - 13:00)',
    comments: '',
  })

  // Reset form on open
  useEffect(() => {
    if (open) {
      setIsSubmitted(false)
      setForm({
        name: '',
        email: '',
        phone: '',
        clinic: '',
        kines: plan?.slug === 'clinica' ? '3-4' : '1',
        specialty: 'Traumatología y Ortopedia',
        modality: 'Presencial en consulta',
        contactPreference: 'WhatsApp (Mañana 9:00 - 13:00)',
        comments: '',
      })
    }
  }, [open, plan])

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const planName = plan?.name ?? 'No especificado'
    const priceValue = annual ? plan?.annualPrice : plan?.monthlyPrice
    const priceText = priceValue ? `${formatPrice(priceValue)} CLP/mes (${annual ? 'Plan Anual' : 'Plan Mensual'})` : 'A convenir'

    const structuredMessage = `
==================================================
🎯 NUEVO LEAD QUALIFICADO — KENKOMED LANDING
==================================================

📋 SOLICITUD DE PLAN:
- Plan Seleccionado: ${planName}
- Modalidad y Valor: ${priceText}
- Acción: ${plan?.cta ?? 'Consulta Comercial'}

👤 1. INFORMACIÓN DE CONTACTO:
- Nombre completo: ${form.name}
- Email profesional: ${form.email}
- Teléfono / WhatsApp: ${form.phone}

🏥 2. PERFIL DEL CENTRO O PROFESIONAL:
- Nombre de Clínica / Consulta: ${form.clinic || 'Consulta Individual'}
- N° de Kinesiólogos: ${form.kines}
- Especialidad Principal: ${form.specialty}
- Modalidad de Atención: ${form.modality}

📞 3. PREFERENCIAS DE ATENCIÓN Y HORARIO:
- Canal y Horario Preferido: ${form.contactPreference}
- Comentarios / Necesidades: ${form.comments || 'Sin comentarios adicionales.'}

==================================================
Fecha de solicitud: ${new Date().toLocaleString('es-CL')}
Origen: Landing Kenkomed (Formulario Formal Lead)
==================================================
`.trim()

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '491d435e-576c-4b14-86a2-7d9540776b32',
          subject: `🎯 Lead Kenkomed [${planName}] — ${form.name} (${form.clinic || 'Consulta'})`,
          from_name: 'Kenkomed Landing — Leads Formales',
          name: form.name,
          email: form.email,
          phone: form.phone,
          clinic: form.clinic,
          kinesiologos: form.kines,
          especialidad: form.specialty,
          modalidad_atencion: form.modality,
          horario_preferido: form.contactPreference,
          plan_interes: `${planName} - ${priceText}`,
          comentarios: form.comments,
          message: structuredMessage,
        }),
      })

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json()
        if (result.success) {
          setIsSubmitted(true)
        } else {
          alert(`Error al enviar la solicitud: ${result.message || 'Por favor intenta de nuevo.'}`)
        }
      } else {
        alert('Respuesta inesperada de servidor. Intenta de nuevo.')
      }
    } catch {
      alert('Hubo un error de conexión al enviar la solicitud. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!open) return null

  const selectedPrice = annual ? plan?.annualPrice : plan?.monthlyPrice

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={(e) => e.target === backdropRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Solicitar información del plan ${plan?.name}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-200" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-card rounded-2xl border border-border/80 shadow-2xl animate-in zoom-in-95 fade-in duration-300 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="relative bg-surface p-6 border-b border-border/60 flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-brand tracking-widest uppercase mb-1.5 px-2.5 py-0.5 rounded-full bg-brand/10 border border-brand/20">
              <Zap size={11} className="fill-brand text-brand" />
              Plan {plan?.name} {selectedPrice ? `· ${formatPrice(selectedPrice)} CLP/mes` : ''}
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              {plan?.slug === 'individual'
                ? 'Solicitud de Prueba Gratuita (3 Días)'
                : plan?.slug === 'clinica'
                ? 'Asesoría Personalizada para Centros Clínicos'
                : 'Solicitud de Demostración Guiada'}
            </h3>
            <p className="text-xs sm:text-sm text-foreground-muted mt-1">
              Completa la información para que un especialista clínico coordine la atención de tu consulta o centro.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-foreground-muted hover:text-foreground hover:bg-background border border-transparent hover:border-border/60 transition-all shrink-0"
            aria-label="Cerrar ventana"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald/15 border border-emerald/30 flex items-center justify-center text-emerald">
                <Check size={36} />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                ¡Solicitud Registrada Exitosamente!
              </h3>
              <p className="text-sm text-foreground-muted max-w-md leading-relaxed">
                Hemos recibido los datos de tu consulta. Un especialista comercial de <strong>Kenkomed</strong> se pondrá en contacto contigo en un plazo máximo de <strong className="text-foreground">24 horas hábiles</strong>.
              </p>
              <div className="bg-surface rounded-xl p-4 border border-border/60 max-w-md w-full text-left space-y-2 text-xs text-foreground-muted">
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="font-medium text-foreground">Plan solicitado:</span>
                  <span className="font-semibold text-brand">Plan {plan?.name}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="font-medium text-foreground">Contacto registrado:</span>
                  <span>{form.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">Canal preferido:</span>
                  <span>{form.contactPreference}</span>
                </div>
              </div>
              <p className="text-xs text-foreground-subtle">
                Enviamos una confirmación de respaldo a tu bandeja de entrada (revisa también tu carpeta de Spam).
              </p>
              <button
                onClick={onClose}
                className="btn-kenko-primary text-sm px-6 py-2.5 rounded-full font-semibold mt-2"
              >
                Entendido, cerrar ventana
              </button>
            </div>
          ) : (
            /* ── Formal Form ── */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Sección 1: Datos de contacto */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand border-b border-border/50 pb-2">
                  <span className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-[10px]">1</span>
                  Información de Contacto Principal
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lead-name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <User size={13} className="text-brand" />
                    Nombre y Apellidos <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="lead-name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ej. Dr. Mauricio Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="lead-email" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Mail size={13} className="text-brand" />
                      Correo Electrónico <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="lead-email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="kine@tucultura.cl"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lead-phone" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Phone size={13} className="text-brand" />
                      Teléfono / WhatsApp <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      id="lead-phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+56 9 8765 4321"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Sección 2: Datos del Centro / Práctica */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand border-b border-border/50 pb-2">
                  <span className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-[10px]">2</span>
                  Perfil de la Clínica o Ejercicio Profesional
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="lead-clinic" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Building2 size={13} className="text-brand" />
                      Nombre de la Clínica o Consulta
                    </label>
                    <input
                      type="text"
                      id="lead-clinic"
                      name="clinic"
                      value={form.clinic}
                      onChange={handleChange}
                      placeholder="Ej. Centro de Rehabilitación KinePro"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lead-kines" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Users size={13} className="text-brand" />
                      Cantidad de Profesionales <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="lead-kines"
                      name="kines"
                      required
                      value={form.kines}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    >
                      <option value="1">1 kinesiólogo (ejercicio independiente)</option>
                      <option value="2">2 kinesiólogos</option>
                      <option value="3-4">3 a 4 kinesiólogos</option>
                      <option value="5-8">5 a 8 kinesiólogos</option>
                      <option value="9+">9 o más (centro de salud mayor)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="lead-specialty" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Stethoscope size={13} className="text-brand" />
                      Especialidad Principal
                    </label>
                    <select
                      id="lead-specialty"
                      name="specialty"
                      value={form.specialty}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    >
                      <option value="Traumatología y Ortopedia">Traumatología y Ortopedia</option>
                      <option value="Kinesiología Respiratoria">Kinesiología Respiratoria</option>
                      <option value="Neurología / Neurorehabilitación">Neurología / Neurorehabilitación</option>
                      <option value="Kinesiología Deportiva">Kinesiología Deportiva</option>
                      <option value="Suelo Pélvico / Uroginecología">Suelo Pélvico / Uroginecología</option>
                      <option value="Kinesiología General / Policlínico">Kinesiología General / Policlínico</option>
                      <option value="Otra especialidad">Otra especialidad</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lead-modality" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Activity size={13} className="text-brand" />
                      Modalidad de Atención
                    </label>
                    <select
                      id="lead-modality"
                      name="modality"
                      value={form.modality}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    >
                      <option value="Presencial en consulta">Presencial en consulta o centro</option>
                      <option value="Atención a domicilio">Atención a domicilio</option>
                      <option value="Mixta (Presencial + Domicilio)">Mixta (Presencial + Domicilio)</option>
                      <option value="Telemedicina / Remota">Telemedicina / Remota</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Sección 3: Preferencia de contacto y comentarios */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand border-b border-border/50 pb-2">
                  <span className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-[10px]">3</span>
                  Preferencia de Contacto y Comentarios
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lead-contactPref" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Clock size={13} className="text-brand" />
                    Horario y Canal Preferido de Contacto
                  </label>
                  <select
                    id="lead-contactPref"
                    name="contactPreference"
                    value={form.contactPreference}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                  >
                    <option value="WhatsApp (Mañana 9:00 - 13:00)">WhatsApp (Mañana 9:00 - 13:00)</option>
                    <option value="WhatsApp (Tarde 14:00 - 18:00)">WhatsApp (Tarde 14:00 - 18:00)</option>
                    <option value="Llamada Telefónica (Mañana 9:00 - 13:00)">Llamada Telefónica (Mañana 9:00 - 13:00)</option>
                    <option value="Llamada Telefónica (Tarde 14:00 - 18:00)">Llamada Telefónica (Tarde 14:00 - 18:00)</option>
                    <option value="Correo Electrónico Directo">Correo Electrónico Directo</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lead-comments" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <MessageSquare size={13} className="text-brand" />
                    Notas Adicionales o Necesidades Específicas <span className="text-foreground-subtle font-normal">(Opcional)</span>
                  </label>
                  <textarea
                    id="lead-comments"
                    name="comments"
                    rows={2}
                    value={form.comments}
                    onChange={handleChange}
                    placeholder="Ej. Me interesa migrar fichas desde Excel o consultar sobre integración..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/40 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"
                  />
                </div>
              </div>

              {/* Action Submit */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full flex items-center justify-center gap-2.5 btn-kenko-primary py-3.5 rounded-xl font-bold text-sm shadow-md shadow-brand/20 transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Procesando Solicitud Formal...
                    </>
                  ) : (
                    <>
                      {plan?.slug === 'individual'
                        ? 'Enviar Solicitud y Activar 3 Días Gratis'
                        : plan?.slug === 'clinica'
                        ? 'Solicitar Propuesta y Asesoría Corporativa'
                        : 'Agendar Demostración Personalizada'}
                      <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-foreground-subtle">
                  <ShieldCheck size={14} className="text-emerald shrink-0" />
                  <span>Información confidencial resguardada bajo la Ley N° 19.628 de Protección de Datos Personales en Chile.</span>
                </div>
              </div>
            </form>
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
              3 días gratis en cualquier plan. Sin tarjeta de crédito. Cancela cuando quieras.
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
      <LeadModal plan={modalPlan} annual={annual} open={modalPlan !== null} onClose={closeModal} />
    </>
  )
}
