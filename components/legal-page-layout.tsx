import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Lock, FileText, Mail, ArrowRight } from 'lucide-react'
import { Footer } from '@/components/footer'

export type LegalSection = {
  id: string
  title: string
  content: React.ReactNode
}

export type LegalHighlight = {
  badge: string
  title: string
  description: string
}

type LegalPageLayoutProps = {
  title: string
  description: string
  lastUpdated: string
  currentPath?: '/seguridad' | '/privacidad' | '/terminos'
  highlights?: LegalHighlight[]
  sections: LegalSection[]
}

const legalNavItems = [
  {
    href: '/seguridad',
    label: 'Seguridad de Datos',
    icon: ShieldCheck,
  },
  {
    href: '/privacidad',
    label: 'Política de Privacidad',
    icon: Lock,
  },
  {
    href: '/terminos',
    label: 'Términos de Uso',
    icon: FileText,
  },
] as const

export function LegalPageLayout({
  title,
  description,
  lastUpdated,
  currentPath,
  highlights,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero con el mismo lenguaje visual limpio de la página principal */}
        <section className="pt-28 pb-14 md:pt-36 md:pb-16 px-6 bg-background border-b border-border/60">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-foreground-muted hover:text-brand transition-colors"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Volver al inicio
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/6 border border-brand/15 text-brand text-xs font-semibold mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0" aria-hidden="true" />
                  Marco Normativo y Confianza Clínica · Chile
                </div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance">
                  {title}
                </h1>
                <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <span className="text-xs font-medium text-foreground-subtle bg-surface border border-border px-3.5 py-1.5 rounded-full">
                  Última revisión: {lastUpdated}
                </span>
              </div>
            </div>

            {/* Pestañas de navegación entre documentos de confianza y legales */}
            <nav
              aria-label="Documentos legales y de seguridad"
              className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center gap-2.5"
            >
              {legalNavItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPath === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold border transition-colors ${
                      isActive
                        ? 'bg-brand text-white border-brand shadow-2xs'
                        : 'bg-surface hover:bg-brand/6 text-foreground hover:text-brand border-border hover:border-brand/30'
                    }`}
                  >
                    <Icon size={14} aria-hidden="true" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </section>

        {/* Tarjetas de resumen ejecutivo (Bento Highlights) si la página las define */}
        {highlights && highlights.length > 0 && (
          <section className="py-12 px-6 bg-surface/60 border-b border-border/60">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-semibold text-brand bg-brand/8 border border-brand/15 px-2.5 py-0.5 rounded-full mb-3">
                      {item.badge}
                    </span>
                    <h2 className="font-display font-bold text-base text-foreground mb-1.5">
                      {item.title}
                    </h2>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contenido en 2 columnas: Índice lateral fijo + Tarjetas de cláusulas */}
        <section className="py-16 md:py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sidebar izquierdo: Índice del documento + Contacto DPA */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-5">
              <nav
                aria-label="Contenido del documento"
                className="p-6 rounded-2xl bg-card border border-border shadow-2xs"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-4 pb-3 border-b border-border/60">
                  Contenido del documento
                </p>
                <ol className="space-y-2.5">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-baseline gap-2.5 text-xs font-medium text-foreground-muted hover:text-brand transition-colors"
                      >
                        <span className="font-mono text-[11px] text-foreground-subtle group-hover:text-brand shrink-0">
                          {String(index + 1).padStart(2, '0')}.
                        </span>
                        <span className="leading-snug">{section.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <aside className="p-6 rounded-2xl border border-border bg-surface/70 text-xs text-foreground-muted leading-relaxed">
                <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                  <Mail size={15} className="text-brand shrink-0" aria-hidden="true" />
                  <span>Consultas normativas y convenios</span>
                </div>
                <p className="mb-4">
                  ¿Tu clínica o institución requiere revisar anexos de protección de datos (DPA) o
                  protocolos de seguridad antes de contratar?
                </p>
                <a
                  href="mailto:kenkomedplus@gmail.com"
                  className="inline-flex items-center gap-1.5 font-semibold text-brand hover:underline"
                >
                  kenkomedplus@gmail.com
                  <ArrowRight size={13} aria-hidden="true" />
                </a>
              </aside>
            </div>

            {/* Columna derecha: Secciones numeradas en tarjetas limpias */}
            <article className="lg:col-span-8 flex flex-col gap-6">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xs"
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/60">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-brand/10 border border-brand/20 font-mono text-xs font-bold text-brand shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="prose-legal text-sm sm:text-base text-foreground-muted leading-relaxed space-y-3">
                    {section.content}
                  </div>
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
