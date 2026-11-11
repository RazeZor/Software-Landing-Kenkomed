'use client'

import { useState } from 'react'
import {
  RiSendPlaneLine as Send,
  RiUserLine as User,
  RiMailLine as Mail,
  RiPhoneLine as Phone,
  RiBuilding4Line as Building2,
  RiChat1Line as MessageSquare,
  RiCheckboxCircleLine as CheckCircle2,
  RiWhatsappFill,
} from 'react-icons/ri'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const TEAM_SIZE_OPTIONS = [
  { value: '1 kinesiólogo (Individual)', label: '1 kinesiólogo' },
  { value: '2 a 3 profesionales', label: '2 a 3 profesionales' },
  { value: '4 o más (Clínica / Centro)', label: '4 o más (Clínica)' },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    teamSize: '1 kinesiólogo (Individual)',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const structuredMessage = `
==================================================
📩 SOLICITUD DE DEMO — KENKOMED LANDING
==================================================

👤 DATOS DE CONTACTO:
- Nombre: ${form.name}
- Email: ${form.email}
- Teléfono / WhatsApp: ${form.phone}
- Tamaño de equipo: ${form.teamSize}
- Clínica / Consulta: ${form.clinic || 'Consulta independiente'}

💬 MENSAJE / CONSULTA:
${form.message || 'Solicita demostración guiada de la plataforma.'}

==================================================
Fecha: ${new Date().toLocaleString('es-CL')}
Origen: Sección Contacto Principal Landing
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
          subject: `💬 Demo solicitada — ${form.name} (${form.teamSize})`,
          from_name: 'Kenkomed Landing — Solicitud Demo',
          name: form.name,
          email: form.email,
          phone: form.phone,
          team_size: form.teamSize,
          clinic: form.clinic || 'Consulta independiente',
          comentarios: form.message,
          message: structuredMessage,
        }),
      })

      const contentType = response.headers.get('content-type')
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const result = await response.json()
        if (result.success) {
          setIsSubmitting(false)
          setIsSubmitted(true)
          if (typeof window !== 'undefined' && Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
            ;(window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
              event: 'lead_form_submit',
              team_size: form.teamSize,
            })
          }
        } else {
          setIsSubmitting(false)
          setSubmitError(
            'No pudimos enviar el formulario en este momento. Puedes agendar directamente con nosotros por WhatsApp.'
          )
        }
      } else {
        setIsSubmitting(false)
        setSubmitError(
          'Hubo un inconveniente temporal con el servicio de correo. Escríbenos por WhatsApp y te responderemos de inmediato.'
        )
      }
    } catch {
      setIsSubmitting(false)
      setSubmitError(
        'Error de conexión al enviar tu solicitud. Por favor intenta nuevamente o escríbenos por WhatsApp.'
      )
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface/60 border-t border-border/60 py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/6 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
            Atención personalizada en Chile
          </p>
          <h2 id="contact-heading" className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.024em] leading-[1.12] text-foreground text-balance">
            Solicita tu software con nosotros.
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-foreground-muted text-base sm:text-[1.0625rem] leading-relaxed">
            Te mostramos Kenkomed en vivo en 20 minutos y dejamos todo listo para tu consulta o centro de rehabilitación.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center py-10 text-center"
              role="status"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald/15">
                <CheckCircle2 size={30} className="text-emerald" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-display text-2xl font-bold text-foreground">¡Solicitud recibida!</h3>
              <p className="mb-6 max-w-md text-sm sm:text-base text-foreground-muted">
                Nuestro equipo te contactará dentro de las próximas 24 horas hábiles para coordinar tu demostración.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false)
                  setForm({
                    name: '',
                    email: '',
                    phone: '',
                    clinic: '',
                    teamSize: '1 kinesiólogo (Individual)',
                    message: '',
                  })
                }}
                className="text-sm font-semibold text-brand hover:underline cursor-pointer"
              >
                Enviar otra consulta
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitError && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                >
                  <span>{submitError}</span>
                  <a
                    href="https://wa.me/56937105872"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-rose-950 underline shrink-0"
                  >
                    <RiWhatsappFill className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                    Abrir WhatsApp
                  </a>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                    Nombre completo <span className="text-rose-600">*</span>
                  </Label>
                  <div className="relative mt-2">
                    <User
                      size={16}
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="text"
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ej. Camila Rojas"
                      className="rounded-xl pl-9"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                    Correo electrónico <span className="text-rose-600">*</span>
                  </Label>
                  <div className="relative mt-2">
                    <Mail
                      size={16}
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="email"
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="camila@consulta.cl"
                      className="rounded-xl pl-9"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
                    Teléfono / WhatsApp <span className="text-rose-600">*</span>
                  </Label>
                  <div className="relative mt-2">
                    <Phone
                      size={16}
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                      className="rounded-xl pl-9"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-clinic" className="text-sm font-medium text-foreground">
                    Consulta o centro <span className="text-xs font-normal text-foreground-muted">(opcional)</span>
                  </Label>
                  <div className="relative mt-2">
                    <Building2
                      size={16}
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <Input
                      type="text"
                      id="contact-clinic"
                      name="clinic"
                      autoComplete="organization"
                      value={form.clinic}
                      onChange={handleChange}
                      placeholder="Ej. Consulta particular o nombre de clínica"
                      className="rounded-xl pl-9"
                    />
                  </div>
                </div>
              </div>

              <fieldset>
                <legend className="text-sm font-medium text-foreground mb-2.5">
                  ¿Cuántos profesionales atienden en tu consulta o centro?
                </legend>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TEAM_SIZE_OPTIONS.map((option) => {
                    const checked = form.teamSize === option.value
                    return (
                      <label
                        key={option.value}
                        className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-sm font-medium cursor-pointer transition-colors ${
                          checked
                            ? 'border-brand bg-brand/5 text-brand'
                            : 'border-border bg-background text-foreground hover:border-brand/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="teamSize"
                          value={option.value}
                          checked={checked}
                          onChange={handleChange}
                          className="accent-brand"
                        />
                        <span>{option.label}</span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <div>
                <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  Comentarios <span className="text-xs font-normal text-foreground-muted">(opcional)</span>
                </Label>
                <div className="relative mt-2">
                  <MessageSquare
                    size={16}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-3.5 text-muted-foreground"
                  />
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos si buscas agendamiento multi-box, fichas SOAP, admisión QR o migración de pacientes..."
                    className=" rounded-xl pl-9"
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse items-center gap-4 border-t border-border/60 pt-5 sm:flex-row sm:justify-between">
                <p className="text-center text-xs text-foreground-muted sm:text-left">
                  Al enviar aceptas nuestra{' '}
                  <a href="/privacidad" className="text-brand hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar mi software
                      <Send size={15} aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
