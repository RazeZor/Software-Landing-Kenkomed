import type { Metadata } from 'next'
import NosotrosContent from '@/components/nosotros-content'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { defaultOgImage, defaultOgImagePath } from '@/lib/seo-assets'

export const metadata: Metadata = {
  title: 'Nosotros — El Equipo detrás de Kenkomed',
  description:
    'Conoce al equipo chileno detrás de Kenkomed: profesionales que investigaron clínicas reales en Concepción para construir el software clínico que los kinesiólogos necesitan. Nuestra historia, valores y misión.',
  openGraph: {
    title: 'Nosotros — El Equipo detrás de Kenkomed',
    description:
      'Un equipo multidisciplinario chileno con una misión clara: devolverle tiempo clínico al kinesiólogo con software respaldado por evidencia.',
    url: '/nosotros',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nosotros — El Equipo detrás de Kenkomed',
    description:
      'Conoce la historia, los valores y las personas que construyen Kenkomed en Chile.',
    images: [defaultOgImagePath],
  },
  alternates: {
    canonical: '/nosotros',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Nosotros', url: 'https://kenkomed.cl/nosotros' },
])

export default function NosotrosPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <NosotrosContent />
    </>
  )
}
