import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/ui/site-header'
import { Footer } from '@/components/footer'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { BLOG_POSTS } from '@/lib/blog-data'
import { RiBookOpenLine as BookOpen, RiArrowRightLine as ArrowRight, RiTimeLine as Clock, RiUserLine as User, RiPriceTag3Line as Tag } from 'react-icons/ri'

export const metadata: Metadata = {
  title: 'Blog y Guías para Kinesiólogos — Normativa, Escalas y Gestión | Kenkomed',
  description:
    'Artículos especializados para kinesiólogos en Chile: ficha kinésica digital, plantilla SOAP, escala EVA, detalle de sesiones para Isapre, boleta de honorarios y comparativas de software.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog y Guías para Kinesiólogos | Kenkomed',
    description:
      'Guías clínicas, normativa sanitaria Ley 20.584/21.719, formato SOAP y gestión de centros de kinesiología en Chile.',
    url: 'https://kenkomed.cl/blog',
  },
}

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug)

  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://kenkomed.cl/' },
    { name: 'Blog', url: 'https://kenkomed.cl/blog' },
  ]

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de Kinesiología y Salud Digital Kenkomed',
    description: 'Guías clínicas, normativas legales en Chile y gestión de centros kinesiológicos.',
    url: 'https://kenkomed.cl/blog',
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://kenkomed.cl/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Organization',
        name: post.author.name,
      },
    })),
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={blogListSchema} />

      <SiteHeader />

      <main className="flex-1 pt-28 pb-24">
        {/* Page Header */}
        <section className="bg-surface border-b border-border/40 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center gap-2 text-xs text-foreground-muted mb-4" aria-label="Miga de pan">
              <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Blog & Guías</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-xs font-bold uppercase tracking-wider mb-4">
                <BookOpen size={14} /> Centro de Recursos Clínicos y Legales
              </div>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
                Guías y Artículos para <span className="text-brand">Kinesiólogos</span>
              </h1>
              <p className="text-foreground-muted text-lg leading-relaxed">
                Contenido práctico elaborado por kinesiólogos y especialistas en salud digital sobre la normativa chilena, escalas funcionales validadas, formatos SOAP y gestión de consultas.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 pt-12 space-y-16">
          {/* Featured Hero Article */}
          {featuredPost && (
            <article className="group relative rounded-3xl border border-brand/30 bg-card p-8 md:p-10 shadow-xl overflow-hidden transition-all hover:border-brand/60">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-brand text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Destacado
                    </span>
                    <span className="bg-surface border border-border text-foreground-muted text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-foreground-subtle flex items-center gap-1">
                      <Clock size={12} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground group-hover:text-brand transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
                    {featuredPost.subtitle}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-border/40 text-xs text-foreground-muted">
                    <span className="font-semibold text-foreground flex items-center gap-1.5">
                      <User size={14} className="text-brand" /> {featuredPost.author.name}
                    </span>
                    <span>·</span>
                    <span>{featuredPost.publishedAt}</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex justify-end">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn-kenko-primary px-6 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 shadow-lg shadow-brand/20 group-hover:scale-105 transition-transform"
                  >
                    Leer Artículo Completo <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Grid of Articles */}
          <div className="space-y-8">
            <h2 className="font-display font-bold text-2xl text-foreground">
              Todos los Artículos y Guías
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md hover:border-brand/40 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-surface text-brand font-semibold px-2.5 py-1 rounded-md border border-brand/20">
                        {post.category}
                      </span>
                      <span className="text-foreground-subtle flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-foreground leading-snug group-hover:text-brand transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-foreground-muted text-sm line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between text-xs">
                    <span className="text-foreground-subtle font-medium">
                      {post.publishedAt}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-bold text-brand group-hover:translate-x-1 transition-transform inline-flex items-center gap-1"
                    >
                      Leer más <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
