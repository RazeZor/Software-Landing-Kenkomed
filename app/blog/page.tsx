import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { BlogPortal } from '@/components/blog-portal'
import { BLOG_POSTS } from '@/lib/blog-data'
import { defaultOgImage } from '@/lib/seo-assets'

export const metadata: Metadata = {
  title: 'Blog y Publicaciones Clínicas para Kinesiólogos — Normativa, Escalas y Gestión',
  description:
    'Portal de actualidad clínica, normativa sanitaria (Ley 20.584, Decreto 41 MINSAL, Ley 21.719), escalas PROMs validadas en PubMed, reembolsos Isapre/FONASA y gestión de centros de kinesiología en Chile.',
  keywords: [
    'blog kinesiología chile',
    'ficha kinésica digital',
    'normativa ley 20584 ficha clínica',
    'decreto 41 minsal fichas clínicas',
    'escalas clínicas kinesiología',
    'escala eva kinesiología',
    'evolución soap kinesiología',
    'reembolso isapre kinesiología códigos fonasa',
    'boleta de honorarios kinesiólogo sii',
    'software para kinesiólogos chile',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Publicaciones Clínicas y Normativa para Kinesiólogos | Kenkomed',
    description:
      'Reportajes técnicos, escalas validadas en PubMed, normativa MINSAL/BCN y gestión clínica para kinesiólogos en Chile.',
    url: 'https://www.kenkomed.cl/blog',
    siteName: 'Kenkomed',
    locale: 'es_CL',
    type: 'website',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Publicaciones Clínicas y Normativa para Kinesiólogos | Kenkomed',
    description:
      'Reportajes técnicos, escalas validadas en PubMed, normativa MINSAL/BCN y gestión clínica para kinesiólogos en Chile.',
    images: [defaultOgImage.url],
  },
}

export default function BlogPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://www.kenkomed.cl/' },
    { name: 'Blog y Publicaciones', url: 'https://www.kenkomed.cl/blog' },
  ]

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Publicaciones Clínicas y Normativa en Kinesiología — Kenkomed',
    description:
      'Portal editorial de evidencia clínica, normativas legales en Chile (BCN, MINSAL, SIS, FONASA, SII) y gestión de centros kinesiológicos.',
    url: 'https://www.kenkomed.cl/blog',
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      image: post.coverImage,
      url: `https://www.kenkomed.cl/blog/${post.slug}`,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Organization',
        name: post.author.name,
      },
      citation: post.sources.map((src) => ({
        '@type': 'CreativeWork',
        name: src.title,
        publisher: src.institution,
        url: src.url,
      })),
    })),
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={blogListSchema} />

      <BlogPortal />

      <Footer />
    </div>
  )
}
