import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '@/components/footer'
import { SectionEyebrow } from '@/components/brand-elements'

type LegalSection = {
  id: string
  title: string
  content: React.ReactNode
}

type LegalPageLayoutProps = {
  title: string
  description: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalPageLayout({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <main className="min-h-screen bg-background">
        <div className="kenko-band-deep pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionEyebrow light>Legal</SectionEyebrow>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-on-brand mb-4 text-balance">
              {title}
            </h1>
            <p className="text-on-brand-muted leading-relaxed">{description}</p>
            <p className="text-xs text-on-brand-subtle mt-4">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-brand transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Volver al inicio
          </Link>

          <nav
            aria-label="Contenido del documento"
            className="mb-12 p-5 rounded-2xl kenko-band-mist border border-border/60"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
              En esta página
            </p>
            <ol className="space-y-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-foreground-muted hover:text-brand transition-colors"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">
                  {section.title}
                </h2>
                <div className="prose-legal">{section.content}</div>
              </section>
            ))}
          </article>

          <aside className="mt-16 p-5 rounded-2xl border border-border/60 bg-surface text-sm text-foreground-muted leading-relaxed">
            <strong className="text-foreground">Nota:</strong> este documento describe las
            prácticas generales de Kenkomed. Si necesitas un acuerdo específico para tu clínica
            (DPA, contrato de servicios o cláusulas adicionales), escríbenos a{' '}
            <a href="mailto:kenkomedplus@gmail.com" className="text-brand hover:underline">
              kenkomedplus@gmail.com
            </a>
            .
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
