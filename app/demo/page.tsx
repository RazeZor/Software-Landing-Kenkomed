import type { Metadata } from 'next'
import DemoContent from '@/components/demo-content'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Demo del Software',
  description:
    'Descubre Kenkomed en acción: video demo, capturas de pantalla y funcionalidades del sistema DSS para kinesiólogos. Agenda inteligente, fichas clínicas, cuestionarios automatizados y reportes clínicos.',
  openGraph: {
    title: 'Demo de Kenkomed — Software para Kinesiólogos en Acción',
    description:
      'Video demo y capturas de pantalla del software clínico Kenkomed. Conoce todas las funcionalidades del sistema DSS.',
    url: '/demo',
    images: [
      {
        url: '/software/Panel.jpg',
        width: 1200,
        height: 630,
        alt: 'Panel de control de Kenkomed - Software para Kinesiólogos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Demo de Kenkomed — Software para Kinesiólogos',
    description:
      'Video demo y capturas de pantalla del sistema DSS para kinesiólogos y fisioterapeutas.',
    images: ['/software/Panel.jpg'],
  },
  alternates: {
    canonical: '/demo',
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Demo', url: 'https://kenkomed.cl/demo' },
])

export default function DemoPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <DemoContent />
    </>
  )
}
