import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { BLOG_POSTS } from '@/lib/blog-data'
import {
  RiArrowLeftLine as ArrowLeft,
  RiArrowRightLine as ArrowRight,
  RiArrowRightUpLine as ArrowUpRight,
  RiTimeLine as Clock,
  RiCalendarLine as Calendar,
  RiShieldCheckLine as ShieldCheck,
  RiCheckboxCircleLine as CheckCircle,
  RiBookOpenLine as BookOpen,
  RiFileList3Line as FileList,
  RiBookmarkLine as Bookmark,
} from 'react-icons/ri'

interface Props {
  params: Promise<{ slug: string }>
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Renders inline markdown (**bold** and `code`) into React elements
 * so raw asterisks or backticks never appear in paragraphs, lists, or tables.
 */
function renderInlineMarkdown(text: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return tokens.map((token, idx) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={idx} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>
      )
    }
    if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded-md bg-surface border border-border/80 font-mono text-[0.85em] text-brand font-medium"
        >
          {token.slice(1, -1)}
        </code>
      )
    }
    return token
  })
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
      title: 'Artículo No Encontrado',
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name, url: 'https://www.kenkomed.cl/blog' }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'es_CL',
      siteName: 'Kenkomed',
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      section: post.category,
      tags: post.tags,
      authors: [post.author.name],
      url: `https://www.kenkomed.cl/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 675,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : b.category === post.category ? 1 : 0))
    .slice(0, 3)

  const headings = post.content
    .split('\n\n')
    .map((b) => b.trim())
    .filter((b) => b.startsWith('## '))
    .map((b) => {
      const title = b.replace('## ', '').trim()
      return { title, id: slugifyHeading(title) }
    })

  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://www.kenkomed.cl/' },
    { name: 'Publicaciones', url: 'https://www.kenkomed.cl/blog' },
    { name: post.title, url: `https://www.kenkomed.cl/blog/${post.slug}` },
  ]

  const wordCount = post.content.trim().split(/\s+/).length

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: post.title,
    alternativeHeadline: post.subtitle,
    description: post.description,
    image: [post.coverImage, `https://www.kenkomed.cl${post.clinicalSnapshot.image}`],
    articleSection: post.category,
    keywords: post.tags.join(', '),
    inLanguage: 'es-CL',
    isAccessibleForFree: true,
    wordCount,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.kenkomed.cl/blog/${post.slug}`,
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: 'https://www.kenkomed.cl/investigacion',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kenkomed',
      url: 'https://www.kenkomed.cl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.kenkomed.cl/images/LogoKenko.png',
      },
    },
    citation: post.sources.map((src) => ({
      '@type': 'CreativeWork',
      name: src.title,
      publisher: src.institution,
      datePublished: src.year,
      url: src.url,
    })),
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={articleSchema} />

      <main className="flex-1 pt-28 pb-24">
        {/* 1. Editorial Article Header */}
        <header className="relative overflow-hidden bg-background border-b border-border/60 pb-10 pt-4 md:pt-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 65% 50% at 80% 15%, rgba(16,85,198,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
            {/* Breadcrumb & Back Link */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-border/60">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Volver al portal de publicaciones
              </Link>

              <nav
                className="hidden sm:flex items-center gap-2 text-xs text-foreground-muted"
                aria-label="Miga de pan"
              >
                <Link href="/" className="hover:text-brand transition-colors">
                  Inicio
                </Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-brand transition-colors">
                  Publicaciones
                </Link>
                <span>/</span>
                <span className="text-foreground font-semibold">
                  {post.category}
                </span>
              </nav>
            </div>

            <div className="max-w-4xl space-y-5">
              {/* Metadata Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="bg-brand/8 border border-brand/20 text-brand text-xs font-semibold px-3 py-1 rounded-full">
                  {post.editorialSection}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-foreground-muted font-medium">
                  <Calendar className="w-3.5 h-3.5 text-brand" />
                  {post.displayDate}
                </span>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1 text-xs text-foreground-muted">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span className="text-border">·</span>
                <a
                  href="#fuentes-bibliograficas"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald hover:underline"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {post.sources.length} fuentes oficiales citadas
                </a>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-foreground tracking-tight leading-[1.12]">
                {post.title}
              </h1>

              <p className="text-foreground-muted text-lg sm:text-xl leading-relaxed font-normal">
                {post.subtitle}
              </p>

              {/* Author & Editorial Verification Bar */}
              <div className="pt-4 mt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-bold text-sm shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {post.author.role} ·{' '}
                      <span className="text-emerald font-semibold">
                        {post.updatedAt}
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href="#fuentes-bibliograficas"
                  className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface border border-border text-xs font-semibold text-foreground hover:border-brand/40 transition-colors"
                >
                  <FileList className="w-3.5 h-3.5 text-brand" />
                  Ver bibliografía y normas ({post.sources.length})
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Lead Cover Image + 2-Column Editorial Layout */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8">
          {/* Lead Editorial Photo Figure */}
          <figure className="mb-10 rounded-2xl border border-border bg-card overflow-hidden shadow-2xs">
            <div className="relative aspect-[16/9] max-h-[480px] w-full overflow-hidden bg-surface">
              <img
                src={post.coverImage}
                alt={post.coverImageAlt}
                fetchPriority="high"
                width={1400}
                height={780}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <figcaption className="px-5 py-3.5 bg-surface/60 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-foreground-muted">
              <span>
                <strong className="text-foreground font-semibold">
                  Contexto clínico:
                </strong>{' '}
                {post.coverImageCaption}
              </span>
              <span className="shrink-0 text-[11px] text-foreground-subtle font-mono">
                Archivo Editorial · Salud Digital Chile
              </span>
            </figcaption>
          </figure>

          {/* 2-Column Content + Sticky Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Main Article Body (8 columns) */}
            <article className="lg:col-span-8 space-y-8">
              {/* Executive Takeaways Box ("Resumen Ejecutivo") */}
              <div className="rounded-2xl border border-brand/25 bg-brand/[0.03] p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
                    <Bookmark className="w-4 h-4" />
                    Resumen Ejecutivo · Puntos Clave
                  </div>
                  <span className="text-[11px] font-semibold text-foreground-subtle">
                    Lectura rápida
                  </span>
                </div>

                <ul className="space-y-3">
                  {post.keyTakeaways.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-foreground leading-relaxed"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Parsed Markdown Blocks */}
              <div className="space-y-5">
                {post.content.split('\n\n').map((block, idx) => {
                  const trimmed = block.trim()
                  if (!trimmed) return null

                  if (trimmed.startsWith('## ')) {
                    const headingText = trimmed.replace('## ', '').trim()
                    const headingId = slugifyHeading(headingText)
                    return (
                      <h2
                        key={idx}
                        id={headingId}
                        className="scroll-mt-28 font-display font-extrabold text-2xl sm:text-[1.7rem] text-foreground pt-6 pb-1 tracking-tight border-b border-border/50"
                      >
                        {headingText}
                      </h2>
                    )
                  }

                  if (trimmed.startsWith('### ')) {
                    const subHeadingText = trimmed.replace('### ', '').trim()
                    return (
                      <h3
                        key={idx}
                        className="font-display font-bold text-lg sm:text-xl text-foreground pt-4"
                      >
                        {subHeadingText}
                      </h3>
                    )
                  }

                  if (trimmed.startsWith('---')) {
                    return <hr key={idx} className="my-6 border-border/60" />
                  }

                  if (trimmed.startsWith('> ')) {
                    const quoteText = trimmed.replace(/^>\s*/, '').trim()
                    return (
                      <blockquote
                        key={idx}
                        className="my-6 rounded-2xl border-l-4 border-brand bg-surface/70 p-5 text-sm sm:text-base text-foreground italic leading-relaxed"
                      >
                        {renderInlineMarkdown(quoteText)}
                      </blockquote>
                    )
                  }

                  if (trimmed.startsWith('```')) {
                    const codeContent = trimmed
                      .replace(/^```[a-z]*\n?/, '')
                      .replace(/```$/, '')
                    return (
                      <div
                        key={idx}
                        className="my-6 rounded-2xl border border-border bg-surface overflow-hidden shadow-2xs"
                      >
                        <div className="px-4 py-2 bg-card border-b border-border flex items-center justify-between text-[11px] font-semibold text-foreground-muted">
                          <span>Ejemplo de Registro Clínico Estructurado</span>
                          <span className="font-mono text-brand">Formato SOAP</span>
                        </div>
                        <pre className="p-5 overflow-x-auto text-xs sm:text-[13px] font-mono text-foreground leading-relaxed whitespace-pre-wrap">
                          <code>{codeContent}</code>
                        </pre>
                      </div>
                    )
                  }

                  if (trimmed.startsWith('|')) {
                    const rows = trimmed
                      .split('\n')
                      .filter((r) => !r.includes('---'))
                    return (
                      <div
                        key={idx}
                        className="overflow-x-auto my-6 rounded-2xl border border-border bg-card shadow-2xs"
                      >
                        <table className="w-full text-left text-sm border-collapse">
                          <tbody>
                            {rows.map((row, rIdx) => {
                              const cols = row
                                .split('|')
                                .filter((c) => c.trim() !== '')
                              const isHeader = rIdx === 0
                              return (
                                <tr
                                  key={rIdx}
                                  className={
                                    isHeader
                                      ? 'bg-surface font-bold text-foreground border-b border-border'
                                      : 'border-b border-border/50 last:border-b-0 hover:bg-surface/40'
                                  }
                                >
                                  {cols.map((col, cIdx) =>
                                    isHeader ? (
                                      <th
                                        key={cIdx}
                                        className="p-3.5 text-xs uppercase tracking-wider text-foreground"
                                      >
                                        {renderInlineMarkdown(col.trim())}
                                      </th>
                                    ) : (
                                      <td
                                        key={cIdx}
                                        className="p-3.5 text-foreground-muted text-xs sm:text-sm"
                                      >
                                        {renderInlineMarkdown(col.trim())}
                                      </td>
                                    )
                                  )}
                                </tr>
                              )
                            })}
                          </tbody>
                        </table>
                      </div>
                    )
                  }

                  if (trimmed.startsWith('- ') || /^\d+\.\s/.test(trimmed)) {
                    const isOrdered = /^\d+\.\s/.test(trimmed)
                    const items = trimmed.split('\n')
                    const ListTag = isOrdered ? 'ol' : 'ul'
                    return (
                      <ListTag
                        key={idx}
                        className={`space-y-2.5 my-4 pl-5 text-foreground-muted text-base leading-relaxed ${
                          isOrdered ? 'list-decimal' : 'list-disc'
                        }`}
                      >
                        {items.map((item, iIdx) => (
                          <li key={iIdx} className="pl-1">
                            {renderInlineMarkdown(
                              item.replace(/^[-*]|\d+\.\s*/, '').trim()
                            )}
                          </li>
                        ))}
                      </ListTag>
                    )
                  }

                  return (
                    <p
                      key={idx}
                      className="text-foreground-muted text-base sm:text-[17px] leading-[1.75]"
                    >
                      {renderInlineMarkdown(trimmed)}
                    </p>
                  )
                })}
              </div>

              {/* Inline Clinical Software Figure (#aplicacion-clinica) */}
              <figure
                id="aplicacion-clinica"
                className="scroll-mt-28 my-10 rounded-2xl border border-border bg-card overflow-hidden shadow-2xs"
              >
                <div className="px-5 py-3 bg-surface border-b border-border flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald" />
                    <span className="text-xs font-bold text-foreground">
                      Aplicación Práctica · {post.clinicalSnapshot.title}
                    </span>
                  </div>
                  <Link
                    href="/funcionalidades"
                    className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1"
                  >
                    Ver módulo en detalle <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <div className="p-4 bg-surface/30">
                  <img
                    src={post.clinicalSnapshot.image}
                    alt={post.clinicalSnapshot.title}
                    loading="lazy"
                    width={1100}
                    height={650}
                    className="w-full h-auto rounded-xl border border-border/80 object-cover"
                  />
                </div>

                <figcaption className="px-5 py-3.5 bg-surface/60 border-t border-border/60 text-xs text-foreground-muted leading-relaxed">
                  <strong className="text-foreground font-semibold">
                    Interfaz real Kenkomed:
                  </strong>{' '}
                  {post.clinicalSnapshot.caption}
                </figcaption>
              </figure>

              {/* Verified Sources & Bibliography Section (#fuentes-bibliograficas) */}
              <section
                id="fuentes-bibliograficas"
                className="scroll-mt-28 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-2xs space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      Respaldo Normativo y Científico Verificable
                    </div>
                    <h2 className="font-display font-extrabold text-xl sm:text-2xl text-foreground">
                      Fuentes Oficiales y Referencias Bibliográficas
                    </h2>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface border border-border text-foreground-muted self-start sm:self-auto">
                    {post.sources.length} referencias primarias
                  </span>
                </div>

                <ol className="space-y-3">
                  {post.sources.map((src) => (
                    <li
                      key={src.id}
                      className="rounded-xl border border-border/80 bg-surface/40 p-4 hover:border-brand/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-md">
                            [{src.id}]
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald">
                            {src.type}
                          </span>
                          <span className="text-xs font-semibold text-foreground-muted">
                            {src.institution} ({src.year})
                          </span>
                        </div>
                        <p className="text-sm font-bold text-foreground leading-snug">
                          {src.title}
                        </p>
                      </div>

                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 self-start sm:self-center inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-card border border-border text-xs font-bold text-brand hover:border-brand/40 transition-colors"
                      >
                        Consultar fuente
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-foreground-subtle mr-1">
                  Temas relacionados:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-surface border border-border text-foreground-muted px-3 py-1 rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Clean Clinical CTA Card */}
              <div className="rounded-2xl border border-border bg-surface/60 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-brand">
                    <span className="w-2 h-2 rounded-full bg-emerald" />
                    Software Clínico Kinesiológico en Chile
                  </div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-foreground">
                    Lleva esta metodología a tu consulta con Kenkomed
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Ficha electrónica conforme a la Ley N° 20.584, admisión remota por código QR y las 13 escalas clínicas validadas integradas en el motor DSS.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand hover:bg-brand-dark text-white text-xs font-bold transition-colors shadow-2xs"
                  >
                    Probar Demo Interactiva
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/precios"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-card hover:bg-surface border border-border text-foreground text-xs font-bold transition-colors"
                  >
                    Ver Planes
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Sticky Editorial Sidebar (4 columns) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* 1. Table of Contents */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-2xs space-y-4">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-foreground border-b border-border/60 pb-2.5">
                  Índice de la Publicación
                </h3>
                <nav aria-label="Tabla de contenidos del artículo">
                  <ol className="space-y-2 text-xs">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="flex items-start gap-2 text-foreground-muted hover:text-brand transition-colors py-1"
                        >
                          <span className="font-mono font-bold text-brand shrink-0">
                            0{i + 1}.
                          </span>
                          <span className="leading-snug font-medium">
                            {h.title}
                          </span>
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#aplicacion-clinica"
                        className="flex items-start gap-2 text-foreground-muted hover:text-brand transition-colors py-1"
                      >
                        <span className="font-mono font-bold text-emerald shrink-0">
                          →
                        </span>
                        <span className="leading-snug font-semibold text-foreground">
                          Aplicación Práctica en Software
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#fuentes-bibliograficas"
                        className="flex items-start gap-2 text-foreground-muted hover:text-brand transition-colors py-1"
                      >
                        <span className="font-mono font-bold text-emerald shrink-0">
                          →
                        </span>
                        <span className="leading-snug font-semibold text-foreground">
                          Fuentes Oficiales ({post.sources.length})
                        </span>
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>

              {/* 2. Quick Primary Sources Card */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-2xs space-y-3.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-sm text-foreground">
                    Fuentes Verificadas Citadas
                  </h3>
                  <ShieldCheck className="w-4 h-4 text-emerald" />
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Acceso directo a los repositorios normativos y científicos utilizados en este reportaje:
                </p>
                <div className="space-y-2">
                  {post.sources.map((src) => (
                    <a
                      key={src.id}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-2 p-2.5 rounded-xl bg-surface/60 border border-border/70 hover:border-brand/40 transition-colors text-xs"
                    >
                      <div className="min-w-0">
                        <p className="font-bold text-foreground truncate group-hover:text-brand transition-colors">
                          {src.institution}
                        </p>
                        <p className="text-[11px] text-foreground-subtle truncate">
                          {src.type} · {src.year}
                        </p>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              {/* 3. Related Articles in Sidebar */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-2xs space-y-4">
                <h3 className="font-display font-bold text-sm text-foreground border-b border-border/60 pb-2.5">
                  Lecturas Relacionadas
                </h3>
                <div className="space-y-3.5">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group flex items-start gap-3"
                    >
                      <img
                        src={rel.coverImage}
                        alt={rel.coverImageAlt}
                        loading="lazy"
                        width={96}
                        height={68}
                        className="w-20 h-14 rounded-lg object-cover shrink-0 border border-border/60"
                      />
                      <div className="min-w-0 space-y-1">
                        <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">
                          {rel.category}
                        </span>
                        <h4 className="text-xs font-bold text-foreground group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* 3. Bottom Related Publications Grid */}
          <section className="mt-20 pt-12 border-t border-border/60 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display font-extrabold text-2xl text-foreground">
                  Continúa Leyendo en nuestro Portal Clínico
                </h2>
                <p className="text-xs text-foreground-muted mt-0.5">
                  Más guías sobre regulación chilena, escalas psicométricas y gestión de centros kinésicos.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-brand hover:underline inline-flex items-center gap-1"
              >
                Ver todas las publicaciones <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <article
                  key={rel.slug}
                  className="group rounded-2xl border border-border bg-card overflow-hidden shadow-2xs hover:border-brand/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="block relative aspect-[16/10] overflow-hidden bg-surface border-b border-border/60"
                    >
                      <img
                        src={rel.coverImage}
                        alt={rel.coverImageAlt}
                        loading="lazy"
                        width={500}
                        height={310}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/15">
                        {rel.category}
                      </span>
                    </Link>
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] text-foreground-subtle">
                        <span>{rel.displayDate}</span>
                        <span>{rel.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-foreground group-hover:text-brand transition-colors leading-snug">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h3>
                      <p className="text-xs text-foreground-muted line-clamp-2 leading-relaxed">
                        {rel.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 py-3 border-t border-border/50 bg-surface/30 flex items-center justify-between text-[11px]">
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {rel.sources.length} fuentes oficiales
                    </span>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="font-bold text-brand inline-flex items-center gap-1"
                    >
                      Leer <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
