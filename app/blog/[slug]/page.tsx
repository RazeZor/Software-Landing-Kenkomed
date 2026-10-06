import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SiteHeader } from '@/components/ui/site-header'
import { Footer } from '@/components/footer'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { BLOG_POSTS, BlogPost } from '@/lib/blog-data'
import { RiArrowLeftLine as ArrowLeft, RiTimeLine as Clock, RiUserLine as User, RiCalendarLine as Calendar, RiShieldCheckLine as ShieldCheck, RiFlashlightLine as Zap } from 'react-icons/ri'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Artículo No Encontrado | Kenkomed',
    }
  }

  return {
    title: `${post.title} | Kenkomed`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      url: `https://kenkomed.cl/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://kenkomed.cl/' },
    { name: 'Blog', url: 'https://kenkomed.cl/blog' },
    { name: post.title, url: `https://kenkomed.cl/blog/${post.slug}` },
  ]

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kenkomed.cl/blog/${post.slug}`,
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kenkomed',
      url: 'https://kenkomed.cl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kenkomed.cl/images/LogoKenko.png',
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={articleSchema} />

      <SiteHeader />

      <main className="flex-1 pt-28 pb-24">
        {/* Article Header */}
        <header className="bg-surface border-b border-border/40 py-12 px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
            >
              <ArrowLeft size={14} /> Volver a todas las guías y artículos
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-brand/10 border border-brand/30 text-brand text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-foreground-muted flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-xs text-foreground-muted flex items-center gap-1">
                <Calendar size={12} /> {post.publishedAt}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-foreground-muted text-lg sm:text-xl leading-relaxed font-medium">
              {post.subtitle}
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
              <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm">
                <User size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{post.author.name}</p>
                <p className="text-xs text-foreground-muted">{post.author.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="max-w-4xl mx-auto px-6 pt-12">
          <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-foreground-muted prose-li:text-foreground-muted prose-strong:text-foreground">
            {/* Simple Markdown Parser Rendering */}
            {post.content.split('\n\n').map((block, idx) => {
              const trimmed = block.trim()

              if (trimmed.startsWith('## ')) {
                return <h2 key={idx} className="font-display font-bold text-2xl md:text-3xl text-foreground mt-10 mb-4">{trimmed.replace('## ', '')}</h2>
              }
              if (trimmed.startsWith('### ')) {
                return <h3 key={idx} className="font-display font-bold text-xl text-foreground mt-8 mb-3">{trimmed.replace('### ', '')}</h3>
              }
              if (trimmed.startsWith('---')) {
                return <hr key={idx} className="my-8 border-border/60" />
              }
              if (trimmed.startsWith('```')) {
                const codeContent = trimmed.replace(/^```[a-z]*\n?/, '').replace(/```$/, '')
                return (
                  <pre key={idx} className="bg-surface border border-border p-5 rounded-2xl overflow-x-auto text-xs font-mono text-foreground my-6">
                    <code>{codeContent}</code>
                  </pre>
                )
              }
              if (trimmed.startsWith('|')) {
                const rows = trimmed.split('\n').filter((r) => !r.includes('---'))
                return (
                  <div key={idx} className="overflow-x-auto my-6">
                    <table className="w-full text-left text-sm border-collapse border border-border/60 rounded-xl overflow-hidden">
                      {rows.map((row, rIdx) => {
                        const cols = row.split('|').filter((c) => c.trim() !== '')
                        const isHeader = rIdx === 0
                        return (
                          <tr key={rIdx} className={isHeader ? 'bg-surface font-bold text-foreground border-b border-border' : 'border-b border-border/40 hover:bg-surface/50'}>
                            {cols.map((col, cIdx) => (
                              isHeader ? (
                                <th key={cIdx} className="p-3 text-xs uppercase tracking-wider">{col.trim()}</th>
                              ) : (
                                <td key={cIdx} className="p-3 text-foreground-muted">{col.trim()}</td>
                              )
                            ))}
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                )
              }
              if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                const items = trimmed.split('\n')
                return (
                  <ul key={idx} className="space-y-2 my-4 list-disc list-inside text-foreground-muted">
                    {items.map((item, iIdx) => (
                      <li key={iIdx} className="leading-relaxed">
                        {item.replace(/^[-*]|\d+\.\s*/, '').trim()}
                      </li>
                    ))}
                  </ul>
                )
              }

              return (
                <p key={idx} className="text-foreground-muted text-base sm:text-lg leading-relaxed mb-6">
                  {trimmed}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-6 border-t border-border/60 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-surface border border-border text-foreground-muted px-3 py-1 rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Box */}
          <div className="mt-10 p-6 rounded-2xl bg-surface border border-border/60 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-lg shrink-0">
              <Zap size={22} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-foreground">{post.author.name}</h4>
              <p className="text-xs text-foreground-muted">{post.author.role}</p>
              <p className="text-xs text-foreground-subtle pt-1">
                Kenkomed es el software clínico especializado en kinesiología y fisioterapia en Chile, diseñado para digitalizar la atención con respaldo científico.
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand to-brand-dark text-white shadow-xl space-y-4 text-center">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl">
              ¿Listo para digitalizar tu consulta kinésica?
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Prueba Kenkomed con 3 días de prueba gratuita y agenda una demostración guiada sin costo. Fichas digitales DSS, cuestionarios EVA/PSFS y admisión QR.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/precios"
                className="bg-white text-brand hover:bg-slate-100 font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-md"
              >
                Ver Planes y Precios
              </Link>
              <Link
                href="/#contact"
                className="bg-brand-dark/40 hover:bg-brand-dark/60 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-full text-sm transition-all"
              >
                Solicitar Demo Guiada
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
