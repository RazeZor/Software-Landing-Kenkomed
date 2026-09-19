'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { Check, Zap, X, Send, User, Mail, Phone, Building2, Users, ChevronRight, Stethoscope, Clock, MessageSquare, ShieldCheck, Sparkles, Activity, FileText, Brain } from 'lucide-react'

/* ── Plan data (Opción B aprobada) ─────────────────────────────── */

export type BillingCycle = 'monthly' | 'semi-annual' | 'annual'

const plans = [
  {
    slug: 'individual',
    name: 'Individual',
    monthlyPrice: 19990,
    semiAnnualPrice: 17990,
    annualPrice: 15990,
    description: 'Para kinesiólogos independientes que trabajan solos.',
    badge: null,
    highlighted: false,
    users: '1 kinesiólogo',
    features: [
      'Hasta 100 pacientes activos',
      'Agenda con calendario personal',
      '20 Admisiones QR al mes',
      'Fichas clínicas SOAP digitales',
      'Sesiones kinésicas con evolución',
      '13 escalas clínicas validadas',
      'Dashboard con métricas en tiempo real',
      'Notificaciones automáticas por email',
      'Soporte por email (48h)',
    ],
    cta: 'Agendar llamada',
  },
  {
    slug: 'clinico-pro',
    name: 'Clínico Pro',
    monthlyPrice: 29990,
    semiAnnualPrice: 26990,
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
      'Evoluciones sin límite',
      'Prescripción de ejercicios con envío automático',
      'Reportes clínicos con análisis DSS',
      'Trazabilidad clínica (Ley 21.719)',
      'Exportación ARCO (JSON / HTML)',
      'Logo personalizado en correos e informes',
      'Soporte prioritario (24h)',
    ],
    cta: 'Agendar demo 30 min',
  },
  {
    slug: 'clinica',
    name: 'Clínica',
    monthlyPrice: 69990,
    semiAnnualPrice: 62990,
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

/* ── Lead Capture Modal Formal & Personalizado ───────────────── */

function LeadModal({
  plan,
  billingCycle,
  open,
  onClose,
}: {
  plan: (typeof plans)[number] | null
  billingCycle: BillingCycle
  open: boolean
  onClose: () => void
}) {
  const backdropRef = useRef<HTMLDivElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Estados diferenciados del formulario
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    role: 'Kinesiólogo Principal',
    kines: '1',
    branches: '1 sede',
    specialty: 'Traumatología y Ortopedia',
    modality: 'Presencial en consulta',
    currentSystem: 'Fichas en papel / Cuaderno',
    startTimeline: 'Hoy mismo',
    demoPlatform: 'Google Meet',
    demoFocus: 'Admisión QR y Ficha Digital DSS',
    preferredSchedule: 'Mañana (9:00 - 12:00)',
    enterpriseNeeds: [] as string[],
    comments: '',
  })

  // Reset y precarga según el tipo de plan elegido
  useEffect(() => {
    if (open) {
      setIsSubmitted(false)
      setForm({
        name: '',
        email: '',
        phone: '',
        clinic: '',
        role: plan?.slug === 'clinica' ? 'Director / Kinesiólogo Jefe' : 'Kinesiólogo Principal',
        kines: plan?.slug === 'clinica' ? '3-4' : '1',
        branches: '1 sede',
        specialty: 'Traumatología y Ortopedia',
        modality: 'Presencial en consulta',
        currentSystem: 'Fichas en papel / Cuaderno',
        startTimeline: 'Hoy mismo',
        demoPlatform: 'Google Meet',
        demoFocus: 'Admisión QR y Ficha Digital DSS',
        preferredSchedule: 'Mañana (9:00 - 12:00)',
        enterpriseNeeds: ['Branding y Logo personalizado en reportes'],
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

  const handleCheckboxChange = (need: string) => {
    setForm((prev) => {
      const exists = prev.enterpriseNeeds.includes(need)
      return {
        ...prev,
        enterpriseNeeds: exists
          ? prev.enterpriseNeeds.filter((n) => n !== need)
          : [...prev.enterpriseNeeds, need],
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const planName = plan?.name ?? 'No especificado'
    const priceValue = plan
      ? billingCycle === 'annual'
        ? plan.annualPrice
        : billingCycle === 'semi-annual'
        ? plan.semiAnnualPrice
        : plan.monthlyPrice
      : undefined

    const cycleLabel =
      billingCycle === 'annual'
        ? 'Facturación Anual'
        : billingCycle === 'semi-annual'
        ? 'Facturación Semestral (6 meses)'
        : 'Facturación Mensual'

    const priceText = priceValue ? `${formatPrice(priceValue)} CLP/mes (${cycleLabel})` : 'A convenir'

    let structuredMessage = ''
    let emailSubject = ''

    if (plan?.slug === 'individual') {
      emailSubject = `⚡ Solicitud de Demo [Plan Individual] — ${form.name}`
      structuredMessage = `
==================================================
⚡ SOLICITUD DE DEMO — PLAN INDIVIDUAL
==================================================

👤 DATOS DEL PROFESIONAL:
- Nombre Completo: ${form.name}
- Email Acceso: ${form.email}
- Teléfono / WhatsApp: ${form.phone}

🏥 DETALLES DE LA CONSULTA:
- Especialidad Principal: ${form.specialty}
- Modalidad de Atención: ${form.modality}
- Sistema Actual: ${form.currentSystem}
- Desea comenzar: ${form.startTimeline}

💬 NOTAS / COMENTARIOS:
${form.comments || 'Sin comentarios adicionales.'}

==================================================
Fecha: ${new Date().toLocaleString('es-CL')}
Plan: Individual (${priceText})
==================================================
`.trim()
    } else if (plan?.slug === 'clinico-pro') {
      emailSubject = `🎯 Solicitud de Demo [Plan Clínico Pro] — ${form.name} (${form.clinic || 'Consulta'})`
      structuredMessage = `
==================================================
🎯 SOLICITUD DE DEMO EN VIVO — PLAN CLÍNICO PRO
==================================================

👤 DATOS DE CONTACTO:
- Nombre Completo: ${form.name}
- Email Profesional: ${form.email}
- Teléfono / WhatsApp: ${form.phone}
- Clínica / Consulta: ${form.clinic || 'Consulta Particular'}

🎥 PREFERENCIAS DE LA DEMOSTRACIÓN:
- Plataforma Preferida: ${form.demoPlatform}
- Horario Preferido: ${form.preferredSchedule}
- Módulo Clave a Evaluar: ${form.demoFocus}
- N° Kinesiólogos: ${form.kines}

💬 NOTAS / REQUERIMIENTOS:
${form.comments || 'Sin comentarios adicionales.'}

==================================================
Fecha: ${new Date().toLocaleString('es-CL')}
Plan: Clínico Pro (${priceText})
==================================================
`.trim()
    } else {
      emailSubject = `🏢 PROPUESTA CORPORATIVA [Plan Clínica] — ${form.clinic || form.name}`
      structuredMessage = `
==================================================
🏢 ASESORÍA COMERCIAL CORPORATIVA — PLAN CLÍNICA
==================================================

👔 CONTACTO EJECUTIVO:
- Nombre y Apellidos: ${form.name}
- Cargo / Rol: ${form.role}
- Email Corporativo: ${form.email}
- Teléfono Directo: ${form.phone}

🏥 DATOS INSTITUCIONALES DEL CENTRO:
- Nombre de la Clínica / Red: ${form.clinic}
- N° Total Kinesiólogos: ${form.kines}
- N° de Sedes: ${form.branches}

⚙️ REQUERIMIENTOS CORPORATIVOS:
- Servicios Necesarios: ${form.enterpriseNeeds.length > 0 ? form.enterpriseNeeds.join(', ') : 'Ninguno seleccionado'}
- Horario Preferido de Reunión: ${form.preferredSchedule}

💬 OBSERVACIONES DEL PROYECTO:
${form.comments || 'Sin observaciones adicionales.'}

==================================================
Fecha: ${new Date().toLocaleString('es-CL')}
Plan: Clínica (${priceText})
==================================================
`.trim()
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '491d435e-576c-4b14-86a2-7d9540776b32',
          subject: emailSubject,
          from_name: `Kenkomed Landing — Lead ${planName}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          clinic: form.clinic,
          cargo: form.role,
          kinesiologos: form.kines,
          sedes: form.branches,
          especialidad: form.specialty,
          modalidad_atencion: form.modality,
          horario_preferido: form.preferredSchedule,
          requerimientos_corporativos: form.enterpriseNeeds.join(', '),
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

  const selectedPrice = plan
    ? billingCycle === 'annual'
      ? plan.annualPrice
      : billingCycle === 'semi-annual'
      ? plan.semiAnnualPrice
      : plan.monthlyPrice
    : undefined
  const isIndividual = plan?.slug === 'individual'
  const isClinicoPro = plan?.slug === 'clinico-pro'
  const isClinica = plan?.slug === 'clinica'

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
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md animate-in fade-in duration-200" />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-card rounded-2xl border border-border/80 shadow-2xl animate-in zoom-in-95 fade-in duration-300 max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Modal Header Diferenciado */}
        <div className={`relative p-6 border-b border-border/60 flex items-start justify-between gap-4 shrink-0 ${
          isIndividual ? 'bg-emerald/5' : isClinicoPro ? 'bg-brand/5' : 'bg-sapphire/10'
        }`}>
          <div>
            <div className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase mb-1.5 px-3 py-0.5 rounded-full border ${
              isIndividual ? 'bg-emerald/10 border-emerald/30 text-emerald' : isClinicoPro ? 'bg-brand/10 border-brand/30 text-brand' : 'bg-sapphire/20 border-sapphire/40 text-foreground'
            }`}>
              <Zap size={11} className={isIndividual ? 'fill-emerald text-emerald' : 'fill-brand text-brand'} />
              Plan {plan?.name} {selectedPrice ? `· ${formatPrice(selectedPrice)} CLP/mes` : ''}
            </div>
            
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              {isIndividual && 'Agendemos tu Demostración Personalizada'}
              {isClinicoPro && 'Agendemos tu Demostración Guiada en Vivo'}
              {isClinica && 'Solicitud de Cotización & Propuesta Corporativa'}
            </h3>
            
            <p className="text-xs sm:text-sm text-foreground-muted mt-1 leading-relaxed">
              {isIndividual && 'Conoce la potencia de Kenkomed en tu consulta mediante una demostración guiada.'}
              {isClinicoPro && 'Un especialista en kinesiología te guiará en vivo sobre la admisión QR, DSS y agenda.'}
              {isClinica && 'Armemos una solución personalizada multi-sede a la medida del equipo de tu clínica.'}
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
            /* ── Success state diferenciado ── */
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald/15 border border-emerald/30 flex items-center justify-center text-emerald">
                <Check size={36} />
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                {isIndividual && '¡Demostración Solicitada Exitosamente!'}
                {isClinicoPro && '¡Demostración Solicitada!'}
                {isClinica && '¡Solicitud Corporativa Recibida!'}
              </h3>
              <p className="text-sm text-foreground-muted max-w-md leading-relaxed">
                {isIndividual && <>Te hemos enviado la confirmación a <strong className="text-foreground">{form.email}</strong>. Un especialista te contactará para agendar la demostración.</>}
                {isClinicoPro && <>Un consultor clínico agendará el espacio en tu horario preferido (<strong className="text-foreground">{form.preferredSchedule}</strong>) mediante <strong className="text-foreground">{form.demoPlatform}</strong>.</>}
                {isClinica && <>Nuestro equipo ejecutivo revisará los requerimientos de tu centro (<strong className="text-foreground">{form.clinic}</strong>) y te enviará la cotización personalizada en menos de 24h hábiles.</>}
              </p>
              
              <div className="bg-surface rounded-xl p-4 border border-border/60 max-w-md w-full text-left space-y-2 text-xs text-foreground-muted">
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="font-medium text-foreground">Plan Seleccionado:</span>
                  <span className="font-semibold text-brand">Plan {plan?.name}</span>
                </div>
                <div className="flex justify-between border-b border-border/40 pb-1.5">
                  <span className="font-medium text-foreground">Contacto Registrado:</span>
                  <span>{form.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-foreground">Teléfono / WA:</span>
                  <span>{form.phone}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="btn-kenko-primary text-sm px-6 py-2.5 rounded-full font-semibold mt-2"
              >
                Entendido, cerrar ventana
              </button>
            </div>
          ) : (
            /* ── Formulario Diferenciado según Slug ── */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* MODAL 1: PLAN INDIVIDUAL */}
              {isIndividual && (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald border-b border-border/50 pb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald/10 text-emerald flex items-center justify-center text-[10px]">1</span>
                      Datos del Kinesiólogo
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lead-name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <User size={13} className="text-emerald" />
                        Nombre y Apellidos <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="lead-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ej. Klgo. Cristóbal Morales"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-email" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Mail size={13} className="text-emerald" />
                          Email (para recibir tus accesos) <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          id="lead-email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="kine@gmail.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-phone" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Phone size={13} className="text-emerald" />
                          WhatsApp de contacto <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          id="lead-phone"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+56 9 8765 4321"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald border-b border-border/50 pb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald/10 text-emerald flex items-center justify-center text-[10px]">2</span>
                      Configuración de tu Consulta
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-specialty" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Stethoscope size={13} className="text-emerald" />
                          Especialidad Principal
                        </label>
                        <select
                          id="lead-specialty"
                          name="specialty"
                          value={form.specialty}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        >
                          <option value="Traumatología y Ortopedia">Traumatología y Ortopedia</option>
                          <option value="Kinesiología Respiratoria">Kinesiología Respiratoria</option>
                          <option value="Neurología / Neurorehabilitación">Neurología / Neurorehabilitación</option>
                          <option value="Kinesiología Deportiva">Kinesiología Deportiva</option>
                          <option value="Suelo Pélvico / Uroginecología">Suelo Pélvico / Uroginecología</option>
                          <option value="Kinesiología General / Policlínico">Kinesiología General / Policlínico</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-modality" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Activity size={13} className="text-emerald" />
                          Modalidad de Atención
                        </label>
                        <select
                          id="lead-modality"
                          name="modality"
                          value={form.modality}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        >
                          <option value="Presencial en consulta">Presencial en consulta</option>
                          <option value="Atención a domicilio">Atención a domicilio</option>
                          <option value="Mixta (Presencial + Domicilio)">Mixta (Presencial + Domicilio)</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-currentSystem" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <FileText size={13} className="text-emerald" />
                          ¿Cómo gestionas tus fichas hoy?
                        </label>
                        <select
                          id="lead-currentSystem"
                          name="currentSystem"
                          value={form.currentSystem}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        >
                          <option value="Fichas en papel / Cuaderno">Fichas en papel / Cuaderno</option>
                          <option value="Planillas Excel / Word">Planillas Excel / Word</option>
                          <option value="Otro software (Busco cambiarme)">Otro software (Busco cambiarme)</option>
                          <option value="Apenas voy comenzando">Apenas voy comenzando</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-startTimeline" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Clock size={13} className="text-emerald" />
                          ¿Cuándo deseas comenzar?
                        </label>
                        <select
                          id="lead-startTimeline"
                          name="startTimeline"
                          value={form.startTimeline}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-emerald/30 focus:border-emerald transition-all"
                        >
                          <option value="Hoy mismo">Hoy mismo</option>
                          <option value="Esta semana">Esta semana</option>
                          <option value="Próxima semana">Próxima semana</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* MODAL 2: PLAN CLÍNICO PRO */}
              {isClinicoPro && (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand border-b border-border/50 pb-2">
                      <span className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-[10px]">1</span>
                      Información de Contacto & Consulta
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
                        placeholder="Ej. Dr. Andrés Soto"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-email" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Mail size={13} className="text-brand" />
                          Email Profesional <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          id="lead-email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="contacto@kinepro.cl"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
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
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lead-clinic" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Building2 size={13} className="text-brand" />
                        Nombre de la Consulta o Centro
                      </label>
                      <input
                        type="text"
                        id="lead-clinic"
                        name="clinic"
                        value={form.clinic}
                        onChange={handleChange}
                        placeholder="Ej. Centro de Kinesiología y Rehabilitación Soto"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand border-b border-border/50 pb-2">
                      <span className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center text-[10px]">2</span>
                      Coordinación de la Demostración Guiada
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-demoPlatform" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Sparkles size={13} className="text-brand" />
                          Plataforma de Videollamada
                        </label>
                        <select
                          id="lead-demoPlatform"
                          name="demoPlatform"
                          value={form.demoPlatform}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        >
                          <option value="Google Meet">Google Meet</option>
                          <option value="Zoom">Zoom</option>
                          <option value="WhatsApp Videollamada">WhatsApp Videollamada</option>
                          <option value="Llamada telefónica explicativa">Llamada telefónica explicativa</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-preferredSchedule" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Clock size={13} className="text-brand" />
                          Horario Preferido
                        </label>
                        <select
                          id="lead-preferredSchedule"
                          name="preferredSchedule"
                          value={form.preferredSchedule}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        >
                          <option value="Mañana (9:00 - 12:00)">Mañana (9:00 - 12:00)</option>
                          <option value="Tarde (14:00 - 18:00)">Tarde (14:00 - 18:00)</option>
                          <option value="Noche (18:30 - 20:00)">Noche (18:30 - 20:00)</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lead-demoFocus" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Brain size={13} className="text-brand" />
                        ¿Qué te interesa profundizar en la demo?
                      </label>
                      <select
                        id="lead-demoFocus"
                        name="demoFocus"
                        value={form.demoFocus}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                      >
                        <option value="Admisión QR y Ficha Digital DSS">Admisión QR y Ficha Digital DSS</option>
                        <option value="Escalas Validadas (EVA, PSFS, Barthel)">Escalas Validadas (EVA, PSFS, Barthel)</option>
                        <option value="Trazabilidad y Auditoría de Accesos">Trazabilidad y Auditoría de Accesos</option>
                        <option value="Prescripción de ejercicios y Reportes PDF">Prescripción de ejercicios y Reportes PDF</option>
                        <option value="Agenda para múltiples profesionales">Agenda para múltiples profesionales</option>
                        <option value="Agenda y Telemedicina">Agenda y Telemedicina</option>
                        <option value="Todo el software completo">Todo el software completo</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* MODAL 3: PLAN CLÍNICA */}
              {isClinica && (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sapphire border-b border-border/50 pb-2">
                      <span className="w-5 h-5 rounded-full bg-brand/20 text-foreground flex items-center justify-center text-[10px]">1</span>
                      Contacto del Encargado / Administrador
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <User size={13} className="text-brand" />
                          Nombre Completo <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="lead-name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ej. Dra. Valeria Fuentes"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-role" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Building2 size={13} className="text-brand" />
                          Cargo o Rol en el Centro
                        </label>
                        <input
                          type="text"
                          id="lead-role"
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          placeholder="Ej. Directora Clínica / Dueña"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-email" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Mail size={13} className="text-brand" />
                          Email Corporativo <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          id="lead-email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="direccion@clinica.cl"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-phone" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Phone size={13} className="text-brand" />
                          Teléfono Directo <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          id="lead-phone"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+56 9 8765 4321"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sapphire border-b border-border/50 pb-2">
                      <span className="w-5 h-5 rounded-full bg-brand/20 text-foreground flex items-center justify-center text-[10px]">2</span>
                      Estructura Institucional del Centro
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lead-clinic" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Building2 size={13} className="text-brand" />
                        Nombre de la Clínica o Red de Centros <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="lead-clinic"
                        name="clinic"
                        required
                        value={form.clinic}
                        onChange={handleChange}
                        placeholder="Ej. Red de Clínicas Kinesiología Biobío"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label htmlFor="lead-kines" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Users size={13} className="text-brand" />
                          Cantidad de Kinesiólogos
                        </label>
                        <select
                          id="lead-kines"
                          name="kines"
                          value={form.kines}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        >
                          <option value="3-4">3 a 4 profesionales</option>
                          <option value="5-8">5 a 8 profesionales</option>
                          <option value="9-15">9 a 15 profesionales</option>
                          <option value="Más de 15">Más de 15 profesionales</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="lead-branches" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <Building2 size={13} className="text-brand" />
                          Número de Sedes
                        </label>
                        <select
                          id="lead-branches"
                          name="branches"
                          value={form.branches}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                        >
                          <option value="1 sede">1 sede</option>
                          <option value="2 a 3 sedes">2 a 3 sedes</option>
                          <option value="Más de 3 sedes">Más de 3 sedes</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-foreground block">
                        Requerimientos Especiales (Selecciona los que apliquen):
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          'Branding y Logo personalizado en reportes',
                          'Migración de fichas históricas desde Excel/Otro software',
                          'Capacitación inicial para todo el equipo',
                          'Acuerdo de confidencialidad / DPA corporativo',
                        ].map((item) => (
                          <label key={item} className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border/60 hover:bg-surface cursor-pointer transition-colors">
                            <input
                              type="checkbox"
                              checked={form.enterpriseNeeds.includes(item)}
                              onChange={() => handleCheckboxChange(item)}
                              className="rounded border-border text-brand focus:ring-brand"
                            />
                            <span className="text-foreground-muted">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Comentarios / Observaciones en común */}
              <div className="space-y-1.5">
                <label htmlFor="lead-comments" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <MessageSquare size={13} className="text-brand" />
                  Observaciones o Consultas Específicas <span className="text-foreground-subtle font-normal">(Opcional)</span>
                </label>
                <textarea
                  id="lead-comments"
                  name="comments"
                  rows={2}
                  value={form.comments}
                  onChange={handleChange}
                  placeholder={
                    isIndividual
                      ? 'Ej. Deseo probar la prescripción de ejercicios y admisión QR en mi consulta...'
                      : isClinicoPro
                      ? 'Ej. Queremos revisar cómo funciona la firma digital y las escalas...'
                      : 'Ej. Necesitamos cotizar para 6 profesionales y 2 sedes...'
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border/80 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"
                />
              </div>

              {/* Action Submit Diferenciado */}
              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed ${
                    isIndividual
                      ? 'bg-emerald hover:bg-emerald-dark text-white shadow-emerald/20'
                      : isClinicoPro
                      ? 'btn-kenko-primary shadow-brand/20'
                      : 'bg-brand-dark hover:bg-brand text-white shadow-brand/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Procesando Solicitud...
                    </>
                  ) : (
                    <>
                      {isIndividual && 'Solicitar Demo'}
                      {isClinicoPro && 'Solicitar Demo'}
                      {isClinica && 'Solicitar Propuesta y Cotización Corporativa'}
                      <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-foreground-subtle">
                  <ShieldCheck size={14} className="text-emerald shrink-0" />
                  <span>Información resguardada bajo la Ley N° 19.628 de Protección de Datos Personales en Chile.</span>
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
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('annual')
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
              Hecho por y para kinesiología
            </span>
            <h2
              id="pricing-heading"
              className="font-display font-bold text-4xl md:text-5xl text-foreground mb-5 text-balance"
            >
              Precio transparente,{' '}
              <span className="text-gradient">sin sorpresas.</span>
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-8">
              Sin cobros extra por módulos ni límites ocultos. Demo guiada sin costo en cualquier plan.
            </p>

            {/* Toggle 3 Opciones (Mensual / 6 Meses / Anual) */}
            <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1.5 bg-surface border border-border rounded-full shadow-inner max-w-full overflow-x-auto">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  billingCycle === 'monthly'
                    ? 'bg-card text-foreground shadow-sm font-semibold'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                Mensual
              </button>
              <button
                onClick={() => setBillingCycle('semi-annual')}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  billingCycle === 'semi-annual'
                    ? 'bg-card text-foreground shadow-sm font-semibold'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                6 Meses
                <span className="text-[10px] sm:text-xs bg-brand/10 text-brand border border-brand/20 px-2 py-0.5 rounded-full font-bold">
                  -10%
                </span>
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  billingCycle === 'annual'
                    ? 'bg-card text-foreground shadow-sm font-semibold'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                Anual
                <span className="text-[10px] sm:text-xs bg-emerald text-primary-foreground px-2 py-0.5 rounded-full font-bold">
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
                      {formatPrice(
                        billingCycle === 'annual'
                          ? plan.annualPrice
                          : billingCycle === 'semi-annual'
                          ? plan.semiAnnualPrice
                          : plan.monthlyPrice
                      )}
                    </span>
                    <span
                      className={`text-sm mb-1.5 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-foreground-muted'
                        }`}
                    >
                      /mes + IVA
                    </span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p
                      className={`text-xs mt-1 ${plan.highlighted ? 'text-primary-foreground/60' : 'text-foreground-subtle'
                        }`}
                    >
                      Facturado anualmente · {formatPrice(plan.annualPrice * 12)} /año
                    </p>
                  )}
                  {billingCycle === 'semi-annual' && (
                    <p
                      className={`text-xs mt-1 ${plan.highlighted ? 'text-primary-foreground/60' : 'text-foreground-subtle'
                        }`}
                    >
                      Facturado semestralmente · {formatPrice(plan.semiAnnualPrice * 6)} cada 6 meses
                    </p>
                  )}
                  {billingCycle === 'monthly' && (
                    <p
                      className={`text-xs mt-1 ${plan.highlighted ? 'text-primary-foreground/60' : 'text-foreground-subtle'
                        }`}
                    >
                      Facturado mes a mes sin permanencia
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
              Todos los precios son neto + IVA (19%). Sabemos que cambiar de software es una decisión importante, por eso te ofrecemos{' '}
              <strong className="text-foreground">3 días de prueba gratuita</strong> y una demo en video guiada paso a paso.
            </p>
            <p className="text-sm text-foreground-muted">
              ¿Tienes dudas sobre los planes?{' '}
              <a href="#contact" className="text-brand font-medium hover:underline">
                Escríbenos y te asesoramos
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Lead capture modal */}
      <LeadModal plan={modalPlan} billingCycle={billingCycle} open={modalPlan !== null} onClose={closeModal} />
    </>
  )
}
