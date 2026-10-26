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
  url: 'https://www.kenkomed.cl',
  logo: 'https://www.kenkomed.cl/images/LogoKenko.png',
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
  url: 'https://www.kenkomed.cl',
  description:
    'Software para kinesiólogos con sistema DSS de apoyo a la decisión clínica.',
  inLanguage: 'es',
  publisher: {
    '@type': 'Organization',
    name: 'Kenkomed',
    url: 'https://www.kenkomed.cl',
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
    lowPrice: '15000',
    highPrice: '53000',
    offerCount: '3',
    offers: [
      {
        '@type': 'Offer',
        name: 'Plan Individual',
        price: '15000',
        priceCurrency: 'CLP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '15000',
          priceCurrency: 'CLP',
          valueAddedTaxIncluded: 'false',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
        description: 'Plan anual para 1 kinesiólogo independiente o atención a domicilio. 0,4 UF / mes neto (aprox. $15.000 CLP neto).',
      },
      {
        '@type': 'Offer',
        name: 'Plan Clínico Pro',
        price: '26000',
        priceCurrency: 'CLP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '26000',
          priceCurrency: 'CLP',
          valueAddedTaxIncluded: 'false',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
        description: 'Plan anual para hasta 2 kinesiólogos + cuenta secretaria incluida. 0,7 UF / mes neto (aprox. $26.000 CLP neto).',
      },
      {
        '@type': 'Offer',
        name: 'Plan Clínica / Centro',
        price: '41000',
        priceCurrency: 'CLP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '41000',
          priceCurrency: 'CLP',
          valueAddedTaxIncluded: 'false',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '1',
            unitCode: 'MON',
          },
        },
        description: 'Plan anual para centros de rehabilitación y clínicas con hasta 4 kinesiólogos incluidos, multi-sede y secretaría. 1,1 UF / mes neto (aprox. $41.000 CLP neto).',
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
    url: 'https://www.kenkomed.cl',
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

