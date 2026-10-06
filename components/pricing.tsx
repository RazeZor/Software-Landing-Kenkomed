'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import NumberFlow from '@number-flow/react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import {
  RiCheckLine as Check,
  RiFlashlightLine as Zap,
  RiCloseLine as X,
  RiSendPlaneLine as Send,
  RiUserLine as User,
  RiMailLine as Mail,
  RiPhoneLine as Phone,
  RiBuilding4Line as Building2,
  RiTeamLine as Users,
  RiArrowRightSLine as ChevronRight,
  RiStethoscopeLine as Stethoscope,
  RiTimeLine as Clock,
  RiChat1Line as MessageSquare,
  RiShieldCheckLine as ShieldCheck,
  RiSparklingLine as Sparkles,
  RiPulseLine as Activity,
  RiFileTextLine as FileText,
  RiBrainLine as Brain,
  RiBankCardLine as CreditCard,
  RiReceiptLine as Receipt,
  RiStackLine as Layers,
  RiWallet3Line as Wallet
} from 'react-icons/ri'

/* ── Plan data (Opción B aprobada) ─────────────────────────────── */

export type BillingCycle = 'monthly' | 'semi-annual' | 'annual'

const plans = [
  {
    slug: 'individual',
    name: 'Solo / Independiente',
    monthlyPrice: 19990,
    semiAnnualPrice: 17990,
    annualPrice: 15990,
    description: 'Para 1 kinesiólogo independiente que busca digitalizar su consulta.',
    badge: null,
    highlighted: false,
    users: '1 Kinesiólogo',
    features: [
      'Pacientes e historias clínicas ilimitadas',
      'Agenda digital con calendario personal',
      'Fichas clínicas SOAP digitales y evoluciones',
      '13 escalas clínicas validadas (EVA, PSFS, Barthel, GROC)',
      'Admisiones con código QR y anamnesis',
      'Dashboard con métricas en tiempo real',
      'Prescripción de ejercicios con envío por email',
      'Notificaciones automáticas por correo',
      'Soporte prioritario por email (48h)',
    ],
    cta: 'Agendar Demo',
  },
  {
    slug: 'clinica-duo',
    name: 'Clínico Pro',
    monthlyPrice: 34990,
    semiAnnualPrice: 30990,
    annualPrice: 27990,
    description: 'Para kinesiólogos que trabajan con asistente o clínicas de hasta 2 kinesiólogos.',
    badge: '⭐ Recomendado',
    highlighted: true,
    users: 'Hasta 2 Kinesiólogos (o 1 Kine + Secretaria)',
    features: [
      'Hasta 2 cuentas profesionales independientes (o 1 Kine + 1 Asistente)',
      'Módulo de Pagos y Caja (Cobros, saldos y recibos)',
      'Gestión de Packs de Sesiones (Bolsillo Fonasa / Particular)',
      'Agenda avanzada (Presencial · Domicilio · Telemedicina)',
      'Anamnesis remota QR de 14 páginas',
      'Ciclos clínicos con alta y diagnóstico final',
      'Reportes clínicos y análisis DSS por profesional',
      'Trazabilidad y firmas independientes (Cumple Ley 21.719)',
      'Branding personalizado (Logo en correos, informes y PDF)',
      'Soporte prioritario por WhatsApp (24h)',
    ],
    cta: 'Agendar Demo',
  },
  {
    slug: 'clinica',
    name: 'Clínica Pro',
    monthlyPrice: 54990,
    semiAnnualPrice: 48990,
    annualPrice: 43990,
    description: 'Para centros de rehabilitación con 3 o más kinesiólogos. Escalable.',
    badge: 'Para centros multi-kine',
    highlighted: false,
    users: '3 Kinesiólogos incluidos (+ staff)',
    extraKinePrice: 12990,
    features: [
      'Todo lo del Plan Clínico Pro',
      '3 licencias de Kinesiólogo incluidas',
      'Módulo de Pagos y Caja Centralizado (Multi-kine y auditoría)',
      'Gestión de Packs de Sesiones Multi-Kinesiólogo',
      'Multi-sede con migración de pacientes',
      'Roles avanzados: Director · Admin · Kine · Secretaria',
      'Calendario unificado del centro',
      'Dashboard gerencial con métricas comparativas por profesional',
      'Auditoría PDF exportable por período',
      'Onboarding y migración de datos personalizada',
      'Gerente de cuenta dedicado (12h)',
    ],
    cta: 'Agendar Demo',
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
        kines: plan?.slug === 'clinica' ? '3+' : plan?.slug === 'clinica-duo' ? '2' : '1',
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

    const priceText = priceValue ? `${formatPrice(priceValue)} CLP/mes + IVA (${cycleLabel})` : 'A convenir'

    let structuredMessage = ''
    let emailSubject = ''

    if (plan?.slug === 'individual') {
      emailSubject = `⚡ Solicitud de Demo [Plan Individual] — ${form.name}`
      structuredMessage = `
==================================================
⚡ SOLICITUD DE DEMO — PLAN INDIVIDUAL
==================================================

👤 DATOS DEL PROFESIONAL:
- Nombre completo: ${form.name}
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
- Nombre completo: ${form.name}
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
- Número de teléfono: ${form.phone}

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
  const isClinicoPro = plan?.slug === 'clinica-duo' || plan?.slug === 'clinico-pro'
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
              Plan {plan?.name} {selectedPrice ? `· ${formatPrice(selectedPrice)} CLP/mes + IVA` : ''}
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
            <motion.form 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              
              {/* MODAL 1: PLAN INDIVIDUAL */}
              {isIndividual && (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald border-b border-border/50 pb-2">
                      <span className="w-5 h-5 rounded-full bg-emerald/10 text-emerald flex items-center justify-center text-[10px]">1</span>
                      Datos del Kinesiólogo
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-name" className="text-sm font-medium text-foreground">
                        <User size={13} className="text-emerald" />
                        Nombre y Apellidos <span className="text-destructive">*</span>
                      </Label>
                      <Input
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
                        <Label htmlFor="lead-email" className="text-sm font-medium text-foreground">
                          <Mail size={13} className="text-emerald" />
                          Email (para recibir tus accesos) <span className="text-destructive">*</span>
                        </Label>
                        <Input
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
                        <Label htmlFor="lead-phone" className="text-sm font-medium text-foreground">
                          <Phone size={13} className="text-emerald" />
                          WhatsApp de contacto <span className="text-destructive">*</span>
                        </Label>
                        <Input
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
                        <Label htmlFor="lead-specialty" className="text-sm font-medium text-foreground">
                          <Stethoscope size={13} className="text-emerald" />
                          Especialidad Principal
                        </Label>
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
                        <Label htmlFor="lead-modality" className="text-sm font-medium text-foreground">
                          <Activity size={13} className="text-emerald" />
                          Modalidad de Atención
                        </Label>
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
                        <Label htmlFor="lead-currentSystem" className="text-sm font-medium text-foreground">
                          <FileText size={13} className="text-emerald" />
                          ¿Cómo gestionas tus fichas hoy?
                        </Label>
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
                        <Label htmlFor="lead-startTimeline" className="text-sm font-medium text-foreground">
                          <Clock size={13} className="text-emerald" />
                          ¿Cuándo deseas comenzar?
                        </Label>
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
                      <Label htmlFor="lead-name" className="text-sm font-medium text-foreground">
                        Nombre y Apellidos <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="lead-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ej. Dr. Andrés Soto"
                        className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-email" className="text-sm font-medium text-foreground">
                          Email Profesional <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="email"
                          id="lead-email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="contacto@kinepro.cl"
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-phone" className="text-sm font-medium text-foreground">
                          Teléfono / WhatsApp <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="tel"
                          id="lead-phone"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+56 9 8765 4321"
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-clinic" className="text-sm font-medium text-foreground">
                        Nombre de la Consulta o Centro
                      </Label>
                      <Input
                        type="text"
                        id="lead-clinic"
                        name="clinic"
                        value={form.clinic}
                        onChange={handleChange}
                        placeholder="Ej. Centro de Kinesiología y Rehabilitación Soto"
                        className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <Label htmlFor="lead-demoPlatform" className="text-sm font-medium text-foreground">
                          Plataforma de Videollamada
                        </Label>
                        <select
                          id="lead-demoPlatform"
                          name="demoPlatform"
                          value={form.demoPlatform}
                          onChange={handleChange}
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="Google Meet">Google Meet</option>
                          <option value="Zoom">Zoom</option>
                          <option value="WhatsApp Videollamada">WhatsApp Videollamada</option>
                          <option value="Llamada telefónica explicativa">Llamada telefónica explicativa</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-preferredSchedule" className="text-sm font-medium text-foreground">
                          Horario Preferido
                        </Label>
                        <select
                          id="lead-preferredSchedule"
                          name="preferredSchedule"
                          value={form.preferredSchedule}
                          onChange={handleChange}
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="Mañana (9:00 - 12:00)">Mañana (9:00 - 12:00)</option>
                          <option value="Tarde (14:00 - 18:00)">Tarde (14:00 - 18:00)</option>
                          <option value="Noche (18:30 - 20:00)">Noche (18:30 - 20:00)</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="lead-demoFocus" className="text-sm font-medium text-foreground">
                        ¿Qué te interesa profundizar en la demo?
                      </Label>
                      <select
                        id="lead-demoFocus"
                        name="demoFocus"
                        value={form.demoFocus}
                        onChange={handleChange}
                        className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        <Label htmlFor="lead-name" className="text-sm font-medium text-foreground">
                          Nombre completo <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="text"
                          id="lead-name"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Ej. Dra. Valeria Fuentes"
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-role" className="text-sm font-medium text-foreground">
                          Cargo o Rol en el Centro
                        </Label>
                        <Input
                          type="text"
                          id="lead-role"
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          placeholder="Ej. Directora Clínica / Dueña"
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-email" className="text-sm font-medium text-foreground">
                          Email Corporativo <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="email"
                          id="lead-email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="direccion@clinica.cl"
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-phone" className="text-sm font-medium text-foreground">
                          Número de teléfono <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          type="tel"
                          id="lead-phone"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+56 9 8765 4321"
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      <Label htmlFor="lead-clinic" className="text-sm font-medium text-foreground">
                        Nombre de la Clínica o Red de Centros <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="lead-clinic"
                        name="clinic"
                        required
                        value={form.clinic}
                        onChange={handleChange}
                        placeholder="Ej. Red de Clínicas Kinesiología Biobío"
                        className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-kines" className="text-sm font-medium text-foreground">
                          Cantidad de Kinesiólogos
                        </Label>
                        <select
                          id="lead-kines"
                          name="kines"
                          value={form.kines}
                          onChange={handleChange}
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="3-4">3 a 4 profesionales</option>
                          <option value="5-8">5 a 8 profesionales</option>
                          <option value="9-15">9 a 15 profesionales</option>
                          <option value="Más de 15">Más de 15 profesionales</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="lead-branches" className="text-sm font-medium text-foreground">
                          Número de Sedes
                        </Label>
                        <select
                          id="lead-branches"
                          name="branches"
                          value={form.branches}
                          onChange={handleChange}
                          className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="1 sede">1 sede</option>
                          <option value="2 a 3 sedes">2 a 3 sedes</option>
                          <option value="Más de 3 sedes">Más de 3 sedes</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-semibold text-foreground block">
                        Requerimientos Especiales (Selecciona los que apliquen):
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {[
                          'Branding y Logo personalizado en reportes',
                          'Migración de fichas históricas desde Excel/Otro software',
                          'Capacitación inicial para todo el equipo',
                          'Acuerdo de confidencialidad / DPA corporativo',
                        ].map((item) => (
                          <Label key={item} className="flex items-center gap-2 p-2 rounded-lg bg-background border border-border/60 hover:bg-surface cursor-pointer transition-colors">
                            <Input
                              type="checkbox"
                              checked={form.enterpriseNeeds.includes(item)}
                              onChange={() => handleCheckboxChange(item)}
                              className="rounded border-border text-brand focus:ring-brand"
                            />
                            <span className="text-foreground-muted">{item}</span>
                          </Label>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Comentarios / Observaciones en común */}
              <div className="space-y-1.5">
                <Label htmlFor="lead-comments" className="text-sm font-medium text-foreground">
                  Observaciones o Consultas Específicas <span className="text-foreground-subtle font-normal">(Opcional)</span>
                </Label>
                <Textarea
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
            </motion.form>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Main Pricing Section ──────────────────────────────────────── */


export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false) // Default to annual as before
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const switchRef = useRef<HTMLButtonElement>(null)
  const [modalPlan, setModalPlan] = useState<(typeof plans)[number] | null>(null)

  const closeModal = useCallback(() => setModalPlan(null), [])

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked)
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      })
    }
  }

  const billingCycle: BillingCycle = isMonthly ? 'monthly' : 'annual'

  return (
    <>
      <section
        id="pricing"
        className="py-28 md:py-36 bg-background overflow-hidden perspective-[2000px]"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 mb-12"
          >
            <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-2">
              Hecho por y para kinesiología
            </span>
            <h2 id="pricing-heading" className="text-4xl font-bold tracking-tight sm:text-5xl font-display text-balance">
              Tus costos, claros <span className="text-brand">desde el día uno.</span>
            </h2>
            <p className="text-muted-foreground text-lg whitespace-pre-line">
              Sin cobros extra por módulos ni límites ocultos.
              Demo guiada sin costo en cualquier plan.
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-10">
            <span className={cn("text-xs sm:text-sm font-semibold transition-colors", isMonthly ? "text-foreground font-bold" : "text-foreground-muted")}>
              Facturación Mensual
            </span>
            <Label className="relative inline-flex items-center cursor-pointer">
              <Switch
                ref={switchRef as any}
                checked={!isMonthly}
                onCheckedChange={handleToggle}
                className="relative data-[state=checked]:bg-brand"
              />
            </Label>
            <span className={cn("text-xs sm:text-sm font-semibold transition-colors", !isMonthly ? "text-foreground font-bold" : "text-foreground-muted")}>
              Facturación Anual <span className="text-emerald font-bold">(Ahorra hasta 20%)</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 max-w-6xl mx-auto">
            {plans.map((plan, index) => {
              const basePrice = isMonthly ? plan.monthlyPrice : plan.annualPrice
              const priceWithIva = Math.round(basePrice * 1.19)

              return (
              <motion.div
                key={plan.slug}
                initial={{ y: 50, opacity: 0 }}
                whileInView={
                  isDesktop
                    ? {
                        y: plan.highlighted ? -20 : 0,
                        opacity: 1,
                        x: index === 2 ? -30 : index === 0 ? 30 : 0,
                        scale: index === 0 || index === 2 ? 0.94 : 1.0,
                      }
                    : { y: 0, opacity: 1 }
                }
                viewport={{ once: true, margin: "200px" }}
                transition={{
                  duration: 1.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  delay: 0.2 + (index * 0.1),
                  opacity: { duration: 0.5 },
                }}
                className={cn(
                  `rounded-3xl border p-6 sm:p-8 bg-card text-center lg:flex lg:flex-col lg:justify-center relative shadow-lg`,
                  plan.highlighted ? "border-brand border-2 shadow-brand/10 shadow-2xl" : "border-border/60",
                  "flex flex-col",
                  !plan.highlighted && "mt-5",
                  (index === 0 || index === 2) && isDesktop
                    ? "z-0 transform translate-x-0 translate-y-0 rotate-y-[10deg]"
                    : "z-10",
                  index === 0 && isDesktop && "origin-right",
                  index === 2 && isDesktop && "origin-left"
                )}
                style={isDesktop && index === 0 ? { transform: 'perspective(1000px) rotateY(5deg)' } : isDesktop && index === 2 ? { transform: 'perspective(1000px) rotateY(-5deg)' } : {}}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-[11px] uppercase tracking-widest font-bold py-1 px-3 rounded-full flex items-center shadow-md">
                    <Zap className="h-3 w-3 fill-current mr-1" />
                    {plan.badge}
                  </div>
                )}
                <div className="flex-1 flex flex-col text-left">
                  <p className="text-xl font-bold font-display text-foreground">
                    {plan.name}
                  </p>
                  <p className="text-sm font-medium text-brand mt-1">{plan.users}</p>
                  
                  <div className="mt-6 flex flex-col gap-1">
                    <div className="flex items-end gap-x-2">
                      <span className="text-4xl font-bold tracking-tight text-foreground flex items-center">
                        $
                        <NumberFlow
                          value={basePrice}
                          format={{
                            style: "decimal",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }}
                          transformTiming={{
                            duration: 600,
                            easing: "ease-out",
                          }}
                          willChange
                          className="font-variant-numeric: tabular-nums"
                        />
                      </span>
                      <span className="text-xs font-semibold text-foreground-muted mb-1 flex items-baseline gap-1">
                        / mes <span className="text-[10px] uppercase font-bold text-brand ml-0.5">neto</span>
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald bg-emerald/10 border border-emerald/20 px-2.5 py-1 rounded-md w-fit">
                      <ShieldCheck size={13} className="text-emerald" />
                      <span>Total con IVA (19%): <strong>${formatPrice(priceWithIva)} / mes</strong></span>
                    </div>
                  </div>

                  <p className="text-xs leading-5 text-foreground-subtle mt-2 mb-6">
                    {isMonthly ? "Facturado mensualmente" : `Facturado anualmente ($${formatPrice(basePrice * 12)} neto / $${formatPrice(priceWithIva * 12)} IVA incl.)`}
                  </p>

                  <ul className="gap-3 flex flex-col flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-emerald mt-0.5 flex-shrink-0 stroke-[3]" />
                        <span className="text-sm text-foreground-muted leading-snug">{feature}</span>
                      </li>
                    ))}
                    {'extraKinePrice' in plan && plan.extraKinePrice && (
                      <li className="flex items-start gap-3 mt-2 border-t border-border pt-3">
                        <User className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-brand font-medium leading-snug">
                          +${new Intl.NumberFormat('es-CL').format(plan.extraKinePrice)}/mes <span className="text-[10px] uppercase font-bold">+ IVA</span> por kinesiólogo adicional
                        </span>
                      </li>
                    )}
                  </ul>

                  <button
                    onClick={() => setModalPlan(plan)}
                    className={cn(
                      "mt-8 group relative w-full flex items-center justify-center gap-2 overflow-hidden text-sm font-semibold tracking-wide py-3.5 rounded-full transition-all duration-300 ease-out hover:shadow-lg",
                      plan.highlighted
                        ? "bg-brand text-white hover:bg-brand-dark hover:shadow-brand/25"
                        : "bg-surface border border-border/80 text-foreground hover:bg-foreground hover:text-background"
                    )}
                  >
                    {plan.cta}
                    <ChevronRight size={16} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="mt-4 text-xs text-foreground-muted text-center min-h-[40px]">
                    {plan.description}
                  </p>
                </div>
              </motion.div>
            )})}
          </div>

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
