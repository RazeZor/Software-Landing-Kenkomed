type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/* ─── Prebuilt schemas ─── */

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kenkomed',
  url: 'https://kenkomed.cl',
  logo: 'https://kenkomed.cl/images/logo.jpeg',
  description:
    'Software clínico profesional para kinesiólogos y fisioterapeutas en Chile. Sistema de Soporte a la Decisión Clínica (DSS).',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressCountry: 'CL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contacto@kenkomed.cl',
    telephone: '+56940966266',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.instagram.com/kenkomed.cl/',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kenkomed',
  url: 'https://kenkomed.cl',
  description:
    'Software para kinesiólogos con sistema DSS de apoyo a la decisión clínica.',
  inLanguage: 'es',
  publisher: {
    '@type': 'Organization',
    name: 'Kenkomed',
    url: 'https://kenkomed.cl',
  },
}

export const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kenkomed',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  description:
    'Sistema de Soporte a la Decisión Clínica (DSS) para kinesiólogos. Fichas clínicas digitales, cuestionarios automatizados EVA, PSFS, Barthel, GROC, agenda inteligente y reportes clínicos.',
  offers: {
    '@type': 'Offer',
    price: '15990',
    priceCurrency: 'CLP',
    description: 'Desde $15.990 CLP/mes (plan anual). Demo guiada sin costo.',
  },
  author: {
    '@type': 'Organization',
    name: 'Kenkomed',
  },
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
