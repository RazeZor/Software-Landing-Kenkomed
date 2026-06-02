import type { Metadata } from 'next'
import InvestigacionContent from '@/components/investigacion-content'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { defaultOgImage, defaultOgImagePath } from '@/lib/seo-assets'

export const metadata: Metadata = {
  title: 'Investigación y Evidencia Científica',
  description:
    'Kenkomed está respaldado por evidencia científica: escalas clínicas validadas (EVA, PSFS, Barthel, GROC, EQ-5D), algoritmo DSS basado en guías NICE, IASP y OMS. Investigación realizada en la provincia de Concepción, Chile.',
  openGraph: {
    title: 'Investigación Científica de Kenkomed — Evidencia y Validación',
    description:
      'Escalas clínicas validadas internacionalmente, algoritmo DSS basado en evidencia y respaldo universitario chileno. Conoce la investigación detrás de Kenkomed.',
    url: '/investigacion',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Investigación y Evidencia — Kenkomed',
    description:
      'Conoce la investigación científica y las escalas clínicas validadas detrás del sistema DSS de Kenkomed.',
    images: [defaultOgImagePath],
  },
  alternates: {
    canonical: '/investigacion',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Investigación', url: 'https://kenkomed.cl/investigacion' },
])

export default function InvestigacionPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <InvestigacionContent />
    </>
  )
}
