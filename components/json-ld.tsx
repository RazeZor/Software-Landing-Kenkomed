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
  logo: 'https://kenkomed.cl/images/LogoKenko.png',
  description:
    'Software clínico profesional para kinesiólogos y fisioterapeutas en Chile. Sistema de Soporte a la Decisión Clínica (DSS).',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Concepción',
    addressRegion: 'Región del Bío-Bío',
    postalCode: '4030000',
    addressCountry: 'CL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'kenkomedplus@gmail.com',
    telephone: '+56937105872',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.instagram.com/_kenkomed_/',
    'https://www.linkedin.com/company/kenkomed/',
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
  applicationCategory: 'HealthApplication, MedicalApplication',
  operatingSystem: 'Web, Mobile, iOS, Android',
  keywords: 'software para kinesiologos, app para kinesiologos, app de ficha clinica, ficha clinica digital chile, escalas clinicas digitales, cuestionarios kinesiologia',
  description:
    'Software y App de Ficha Clínica Digital y Sistema de Soporte a la Decisión Clínica (DSS) para kinesiólogos en Chile. Cuestionarios y escalas clínicas digitales EVA, PSFS, Barthel, GROC, admisión QR y agenda inteligente.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'CLP',
    lowPrice: '15990',
    highPrice: '54990',
    offerCount: '3',
    offers: [
      {
        '@type': 'Offer',
        name: 'Plan Solo / Independiente',
        price: '15990',
        priceCurrency: 'CLP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '15990',
          priceCurrency: 'CLP',
          valueAddedTaxIncluded: 'false',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
        description: 'Plan anual para 1 kinesiólogo independiente. $15.990 CLP/mes neto ($19.028 IVA incluido).',
      },
      {
        '@type': 'Offer',
        name: 'Plan Clínico Pro',
        price: '27990',
        priceCurrency: 'CLP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '27990',
          priceCurrency: 'CLP',
          valueAddedTaxIncluded: 'false',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
        description: 'Plan anual para hasta 2 kinesiólogos o Kine + Secretaria. $27.990 CLP/mes neto ($33.308 IVA incluido).',
      },
      {
        '@type': 'Offer',
        name: 'Plan Clínica Pro',
        price: '43990',
        priceCurrency: 'CLP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '43990',
          priceCurrency: 'CLP',
          valueAddedTaxIncluded: 'false',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
        description: 'Plan anual para centros de rehabilitación con 3 kinesiólogos incluidos. $43.990 CLP/mes neto ($52.348 IVA incluido).',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '48',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'Kenkomed',
    url: 'https://kenkomed.cl',
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

