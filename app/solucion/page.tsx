import type { Metadata } from 'next'
import SolucionContent from '@/components/solucion-content'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Nuestra Solución — Kenkomed Transforma tu Clínica',
  description:
    'Descubre cómo Kenkomed elimina los dolores más críticos de los kinesiólogos: papel, Excel, pérdida de datos y decisiones sin respaldo. DSS clínico con 9 escalas validadas internacionalmente.',
  openGraph: {
    title: 'Kenkomed: La Solución que tu Clínica Estaba Esperando',
    description:
      'Compara cómo trabaja una clínica SIN y CON Kenkomed. Escalas EVA, PSFS, Barthel, Oswestry, Lefebvre y más. Sistema DSS que piensa contigo.',
    url: '/solucion',
    images: [
      {
        url: '/images/dss-flow-diagram.png',
        width: 1200,
        height: 800,
        alt: 'Kenkomed — Sistema DSS para kinesiólogos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenkomed: La Solución que tu Clínica Estaba Esperando',
    description:
      'DSS clínico con escalas validadas, anamnesis inteligente e informes automáticos para kinesiólogos.',
    images: ['/images/dss-flow-diagram.png'],
  },
  alternates: {
    canonical: '/solucion',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Nuestra Solución', url: 'https://kenkomed.cl/solucion' },
])

export default function SolucionPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <SolucionContent />
    </>
  )
}
