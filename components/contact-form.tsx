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
} from 'react-icons/ri'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const structuredMessage = `
==================================================
📩 NUEVO MENSAJE DE CONTACTO — KENKOMED LANDING
==================================================

👤 DATOS DE CONTACTO:
- Nombre: ${form.name}
- Email: ${form.email}
- Teléfono: ${form.phone || 'No especificado'}
- Clínica / Centro: ${form.clinic || 'No especificado'}

💬 MENSAJE / CONSULTA:
${form.message}

==================================================
Fecha: ${new Date().toLocaleString('es-CL')}
Origen: Seccion Contacto General Landing
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
          subject: `💬 Mensaje Contacto — ${form.name} (${form.clinic || 'Consulta'})`,
          from_name: 'Kenkomed Landing — Contacto General',
          name: form.name,
          email: form.email,
          phone: form.phone,
          clinic: form.clinic,
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
        } else {
          console.error('Error desde Web3Forms:', result)
          setIsSubmitting(false)
          alert(`Error de validación: ${result.message || 'La key podría ser inválida.'}`)
        }
      } else {
        const textResult = await response.text()
        console.error('Respuesta inesperada (no-JSON):', textResult)
        setIsSubmitting(false)
        alert('El servidor de correos bloqueó la solicitud (posiblemente por estar en localhost). Revisa la consola o verifica tu API Key.')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setIsSubmitting(false)
      alert('Hubo un error de conexión al enviar. Por favor intenta de nuevo.')
    }
  }

  const fields: {
    id: keyof typeof form
    label: string
    type: string
    placeholder: string
    icon: React.ElementType
    full?: boolean
  }[] = [
    { id: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Ej. Camila Rojas', icon: User },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'camila@clinica.com', icon: Mail },
    { id: 'phone', label: 'Número de teléfono', type: 'tel', placeholder: '+56 9 1234 5678', icon: Phone },
    { id: 'clinic', label: 'Clínica / Centro', type: 'text', placeholder: 'Nombre de tu clínica', icon: Building2 },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 id="contact-heading" className="text-3xl font-bold text-foreground sm:text-4xl">
            Solicita tu software
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Completa el formulario y nuestro equipo se pondrá en contacto contigo para mostrarte
            cómo Kenkomed puede transformar tu clínica.
          </p>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)] sm:p-10">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center py-10 text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground">¡Mensaje enviado!</h3>
              <p className="mb-8 max-w-md text-muted-foreground">
                Gracias por tu interés en Kenkomed. Nuestro equipo te contactará dentro de las
                próximas 24 horas hábiles.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setForm({ name: '', email: '', phone: '', clinic: '', message: '' })
                }}
                className="text-sm font-medium text-brand hover:underline"
              >
                Enviar otro mensaje
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {fields.map(({ id, label, type, placeholder, icon: Icon }) => (
                  <div key={id}>
                    <Label htmlFor={`contact-${id}`} className="text-sm font-medium text-foreground">
                      {label}
                    </Label>
                    <div className="relative mt-2">
                      <Icon
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <Input
                        type={type}
                        id={`contact-${id}`}
                        name={id}
                        required
                        value={form[id]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="rounded-xl pl-9"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                  Mensaje
                </Label>
                <div className="relative mt-2">
                  <MessageSquare size={16} className="pointer-events-none absolute left-3 top-3.5 text-muted-foreground" />
                  <Textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu clínica, cuántos profesionales trabajan y qué necesidades tienes..."
                    className="resize-none rounded-xl pl-9"
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Responderemos dentro de 24 horas hábiles. Sin compromiso.
                </p>
              </div>

              <div className="flex flex-col-reverse items-center gap-4 border-t border-border/50 pt-6 sm:flex-row sm:justify-between">
                <p className="text-center text-xs text-muted-foreground sm:text-left">
                  Al enviar aceptas nuestra{' '}
                  <a href="/privacidad" className="text-brand hover:underline">
                    Política de Privacidad
                  </a>
                  .
                </p>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar software
                      <Send size={15} />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
