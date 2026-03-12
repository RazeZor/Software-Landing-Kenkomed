'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, User, Mail, Phone, Building2, MessageSquare, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
    const sectionRef = useRef<HTMLElement>(null)
    const [revealed, setRevealed] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        clinic: '',
        message: '',
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Se usa Web3Forms. Asegúrate de que este access_key sea válido y esté activo.
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: '491d435e-576c-4b14-86a2-7d9540776b32',
                    ...form,
                    subject: `Nuevo mensaje de Kenkomed Landing de: ${form.name}`,
                    from_name: 'Kenkomed Landing Page'
                })
            })

            // Comprobar si la respuesta es JSON (por si Cloudflare bloquea la IP local)
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
                // Si la respuesta no es JSON (ej. HTML de Cloudflare)
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
            ref={sectionRef}
            className="py-28 md:py-36 bg-teal-50 dark:bg-surface overflow-hidden"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div
                    className={`text-center max-w-2xl mx-auto mb-14 scroll-reveal ${revealed ? 'is-visible' : ''}`}
                >
                    <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                        Contacto
                    </span>
                    <h2
                        id="contact-heading"
                        className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance mb-4"
                    >
                        Solicita tu{' '}
                        <span className="text-gradient">software.</span>
                    </h2>
                    <p className="text-foreground-muted text-lg leading-relaxed">
                        Completa el formulario y nuestro equipo se pondrá en contacto contigo
                        para mostrarte cómo Kenkomed puede transformar tu clínica.
                    </p>
                </div>

                {/* Form Card */}
                <div
                    className={`max-w-2xl mx-auto scroll-reveal stagger-2 ${revealed ? 'is-visible' : ''}`}
                >
                    <div className="bg-card rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm relative overflow-hidden">
                        {/* Decorative gradient */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] pointer-events-none"
                            aria-hidden="true"
                            style={{
                                background:
                                    'radial-gradient(circle at top right, oklch(0.48 0.18 246), transparent 70%)',
                            }}
                        />

                        {isSubmitted ? (
                            /* Success state */
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-6">
                                    <CheckCircle2 size={32} className="text-emerald" />
                                </div>
                                <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                                    ¡Mensaje enviado!
                                </h3>
                                <p className="text-foreground-muted max-w-md mb-8">
                                    Gracias por tu interés en Kenkomed. Nuestro equipo te contactará
                                    dentro de las próximas 24 horas hábiles.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false)
                                        setForm({ name: '', email: '', phone: '', clinic: '', message: '' })
                                    }}
                                    className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            /* Form */
                            <form onSubmit={handleSubmit} className="relative space-y-6">
                                {/* Name & Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact-name"
                                            className="text-sm font-medium text-foreground flex items-center gap-1.5"
                                        >
                                            <User size={14} className="text-foreground-muted" />
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Tu nombre"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact-email"
                                            className="text-sm font-medium text-foreground flex items-center gap-1.5"
                                        >
                                            <Mail size={14} className="text-foreground-muted" />
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="tu@email.com"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Clinic row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact-phone"
                                            className="text-sm font-medium text-foreground flex items-center gap-1.5"
                                        >
                                            <Phone size={14} className="text-foreground-muted" />
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="contact-phone"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+56 9 1234 5678"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="contact-clinic"
                                            className="text-sm font-medium text-foreground flex items-center gap-1.5"
                                        >
                                            <Building2 size={14} className="text-foreground-muted" />
                                            Clínica / Centro
                                        </label>
                                        <input
                                            type="text"
                                            id="contact-clinic"
                                            name="clinic"
                                            value={form.clinic}
                                            onChange={handleChange}
                                            placeholder="Nombre de tu clínica"
                                            className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="contact-message"
                                        className="text-sm font-medium text-foreground flex items-center gap-1.5"
                                    >
                                        <MessageSquare size={14} className="text-foreground-muted" />
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Cuéntanos sobre tu clínica, cuántos profesionales trabajan y qué necesidades tienes..."
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border/80 text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group w-full inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Solicitar Software
                                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-foreground-muted">
                                    Responderemos dentro de 24 horas hábiles. Sin compromiso.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
