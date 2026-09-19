import { SiteHeader } from '@/components/ui/site-header'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Blog',
  description: 'Artículos, casos de estudio y novedades sobre kinesiología digital y Kenkomed.',
}

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24 max-w-4xl mx-auto px-6 w-full">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Blog
        </h1>
        <p className="text-foreground-muted mb-12 text-lg">
          Descubre artículos, guías y casos de estudio sobre tecnología en kinesiología.
        </p>

        {/* ═══ PLACEHOLDER POSTS LIST ═══ */}
        <div className="space-y-12 border-t border-border/60 pt-12">
          
          <article className="group cursor-pointer">
            <span className="text-sm font-medium text-brand mb-2 block">Casos de Estudio</span>
            <h2 className="text-2xl font-bold text-foreground mb-3 font-display">
              Cómo optimizar el tiempo de admisión con códigos QR
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Descubre cómo la implementación de anamnesis móvil reduce hasta un 40% la carga administrativa en recepción.
            </p>
            <span className="text-sm font-semibold text-brand inline-flex items-center gap-1">
              Leer más <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </article>

          <article className="group cursor-pointer">
            <span className="text-sm font-medium text-brand mb-2 block">Actualizaciones</span>
            <h2 className="text-2xl font-bold text-foreground mb-3 font-display">
              Nuevas escalas clínicas agregadas al DSS
            </h2>
            <p className="text-foreground-muted leading-relaxed">
              Conoce las últimas incorporaciones a nuestro motor de decisiones clínicas para una evaluación más precisa.
            </p>
            <span className="text-sm font-semibold text-brand inline-flex items-center gap-1">
              Leer más <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </article>

        </div>
      </main>
      <Footer />
    </div>
  )
}
