import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { Pricing } from '@/components/pricing'
import { FaqSection } from '@/components/faq-section'
import { ContactForm } from '@/components/contact-form'
import { JsonLd, faqSchema, breadcrumbSchema, softwareSchema } from '@/components/json-ld'
import { homeFaqItems } from '@/lib/faq-data'
import { RiShieldCheckLine as ShieldCheck, RiFlashlightLine as Zap, RiCheckLine as Check } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'Precios y Planes — Software para Kinesiólogos',
  description:
    'Planes transparentes para kinesiólogos independientes y clínicas en Chile. Desde 0,4 UF / mes neto (+ IVA en plan anual, aprox. $15.000 CLP). Ficha digital y demo sin costo.',
  alternates: {
    canonical: '/precios',
  },
  openGraph: {
    title: 'Precios y Planes — Software para Kinesiólogos',
    description:
      'Conoce los planes de Kenkomed para kinesiología. Transparencia total, precios con IVA incluido y prueba sin compromiso.',
    url: 'https://www.kenkomed.cl/precios',
  },
}

export default function PreciosPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://www.kenkomed.cl/' },
    { name: 'Precios', url: 'https://www.kenkomed.cl/precios' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={faqSchema(homeFaqItems)} />
      <JsonLd data={softwareSchema} />

      <main className="flex-1 pt-28">
        {/* Page Header & Breadcrumb */}
        <div className="bg-surface border-b border-border/40 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-foreground-muted mb-4" aria-label="Miga de pan">
              <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Precios</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-4">
                <Zap size={14} /> Transparencia Total · Sin Letra Chica
              </div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Planes diseñados para la <span className="text-brand">kinesiología chilena</span>
              </h1>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Elige el plan ideal según el tamaño de tu consulta o centro clínico. Todos los planes incluyen actualizaciones continuas, soporte prioritario y demostración guiada sin costo.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Component */}
        <Pricing />

        {/* Guarantee Banner */}
        <section className="py-16 bg-surface/50 border-y border-border/40">
          <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald/10 text-emerald mb-2">
              <ShieldCheck size={28} />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Todo lo que necesitas para tu consulta kinésica en Chile
            </h2>
            <p className="text-foreground-muted text-sm max-w-2xl mx-auto">
              Diseñado específicamente para la práctica clínica, tributaria y operativa de los kinesiólogos en el país.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left pt-4">
              <div className="p-6 rounded-2xl bg-card border border-border/60">
                <div className="w-8 h-8 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center mb-3 font-bold text-sm">✓</div>
                <h3 className="font-bold text-foreground mb-1">Reembolso Isapre y Seguros</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Emisión en 1 clic del certificado oficial y detalle de sesiones con códigos de arancel FONASA, requerido por Isapres (Colmena, Banmédica, Consalud, CruzBlanca, etc.) y seguros complementarios.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/60">
                <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3 font-bold text-sm">✓</div>
                <h3 className="font-bold text-foreground mb-1">Boleta de Honorarios SII y Caja</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Control de pagos por sesión o packs de tratamiento (transferencia, tarjeta o efectivo) con RUT del paciente para facilitar la emisión en el SII y facturación médica.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/60">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center mb-3 font-bold text-sm">✓</div>
                <h3 className="font-bold text-foreground mb-1">WhatsApp + Correo Integrado</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Recordatorios automáticos de cita por WhatsApp con enlace QR de anamnesis previa, aviso inmediato al completar datos y envío de pautas de ejercicios al correo con alerta.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/60">
                <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-3 font-bold text-sm">✓</div>
                <h3 className="font-bold text-foreground mb-1">Precios 100% Claros en CLP</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Valores expresados en pesos chilenos tanto en precio neto como total con IVA incluido (19%). Sin costos sorpresa ni cobros adicionales por paciente registrado.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/60">
                <div className="w-8 h-8 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center mb-3 font-bold text-sm">✓</div>
                <h3 className="font-bold text-foreground mb-1">Cumplimiento Ley N° 20.584</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Fichas clínicas digitales alineadas con los derechos y deberes del paciente, trazabilidad completa de accesos, consentimiento informado y seguridad de datos de salud en Chile.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/60">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-3 font-bold text-sm">✓</div>
                <h3 className="font-bold text-foreground mb-1">Onboarding y Migración Asistida</h3>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Te ayudamos a migrar tus fichas históricas desde Excel u otro software y a configurar tus plantillas clínicas en tiempo récord con asistencia personalizada por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Form CTA */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
