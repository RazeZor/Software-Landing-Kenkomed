'use client'

import { useState } from 'react'
import {
  RiSendPlaneLine as Send,
  RiUserLine as User,
  RiMailLine as Mail,
  RiPhoneLine as Phone,
  RiBuilding4Line as Building2,
  RiChat1Line as MessageSquare,
  RiCheckboxCircleLine as CheckCircle2
} from 'react-icons/ri'
import { motion } from 'framer-motion'
import { SectionEyebrow } from '@/components/brand-elements'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

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
                    Accept: 'application/json'
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
                })
            })

            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                const result = await response.json()
                if (result.success) {
                    setIsSubmitting(false)
                    setIsSubmitted(true)
                } else {
                    console.error("Error desde Web3Forms:", result)
                    setIsSubmitting(false)
                    alert(`Error de validación: ${result.message || 'La key podría ser inválida.'}`)
                }
            } else {
                const textResult = await response.text();
                console.error("Respuesta inesperada (no-JSON):", textResult);
                setIsSubmitting(false);
                alert("El servidor de correos bloqueó la solicitud (posiblemente por estar en localhost). Revisa la consola o verifica tu API Key.");
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error)
            setIsSubmitting(false)
            alert("Hubo un error de conexión al enviar. Por favor intenta de nuevo.")
        }
    }

    return (
        <section
            id="contact"
            className="py-24 md:py-32 bg-background overflow-hidden"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-6xl mx-auto px-6">
                {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                            <CheckCircle2 size={32} className="text-emerald-500" />
                        </div>
                        <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                            ¡Mensaje enviado!
                        </h3>
                        <p className="text-muted-foreground max-w-md mb-8">
                            Gracias por tu interés en Kenkomed. Nuestro equipo te contactará
                            dentro de las próximas 24 horas hábiles.
                        </p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false)
                                setForm({ name: '', email: '', phone: '', clinic: '', message: '' })
                            }}
                            className="text-sm font-medium text-brand hover:underline transition-all"
                        >
                            Enviar otro mensaje
                        </button>
                    </div>
                ) : (
                    <motion.form 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                            {/* Text Sidebar */}
                            <div>
                                <h2 id="contact-heading" className="text-2xl font-semibold text-foreground">
                                    Solicita tu software
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                    Completa el formulario y nuestro equipo se pondrá en contacto contigo
                                    para mostrarte cómo Kenkomed puede transformar tu clínica.
                                </p>
                            </div>

                            {/* Form Fields */}
                            <div className="sm:max-w-3xl md:col-span-2">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                                    {/* Name */}
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                                            Nombre completo
                                        </Label>
                                        <Input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Ej. Camila Rojas"
                                            className="mt-2"
                                        />
                                    </div>
                                    
                                    {/* Email */}
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                                            Email
                                        </Label>
                                        <Input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="camila@clinica.com"
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
                                            Número de teléfono
                                        </Label>
                                        <Input
                                            type="tel"
                                            id="contact-phone"
                                            name="phone"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+56 9 1234 5678"
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Clinic */}
                                    <div className="col-span-full sm:col-span-3">
                                        <Label htmlFor="contact-clinic" className="text-sm font-medium text-foreground">
                                            Clínica / Centro
                                        </Label>
                                        <Input
                                            type="text"
                                            id="contact-clinic"
                                            name="clinic"
                                            required
                                            value={form.clinic}
                                            onChange={handleChange}
                                            placeholder="Nombre de tu clínica"
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div className="col-span-full">
                                        <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                                            Mensaje
                                        </Label>
                                        <Textarea
                                            id="contact-message"
                                            name="message"
                                            rows={4}
                                            required
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Cuéntanos sobre tu clínica, cuántos profesionales trabajan y qué necesidades tienes..."
                                            className="mt-2 resize-none"
                                        />
                                        <p className="mt-2 text-xs text-muted-foreground">
                                            Responderemos dentro de 24 horas hábiles. Sin compromiso.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="mt-8 flex items-center justify-end space-x-4 border-t border-border/50 pt-8">
                                    <p className="text-xs text-muted-foreground mr-auto hidden sm:block">
                                        Al enviar aceptas nuestra <a href="/privacidad" className="text-brand hover:underline">Política de Privacidad</a>.
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            'Solicitar Software'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.form>
                )}
            </div>
        </section>
    )
}
