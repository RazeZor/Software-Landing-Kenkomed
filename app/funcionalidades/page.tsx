import type { Metadata } from 'next'
import { FuncionalidadesContent } from '@/components/funcionalidades-content'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { defaultOgImage, defaultOgImagePath } from '@/lib/seo-assets'

export const metadata: Metadata = {
  title: 'Funcionalidades — Software Clínico para Kinesiólogos',
  description:
    'Explora en detalle el DSS clínico, admisión QR, monitoreo en tiempo real y el listado completo de funcionalidades de Kenkomed para kinesiólogos en Chile.',
  openGraph: {
    title: 'Funcionalidades Kenkomed — DSS, QR y Gestión Clínica',
    description:
      'Módulo por módulo: escalas validadas, anamnesis digital, panel de monitoreo y gestión integral de pacientes.',
    url: '/funcionalidades',
    images: [defaultOgImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funcionalidades Kenkomed — DSS, QR y Gestión Clínica',
    description:
      'Detalle completo de la plataforma Kenkomed para kinesiólogos y fisioterapeutas.',
    images: [defaultOgImagePath],
  },
  alternates: { canonical: '/funcionalidades' },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Funcionalidades', url: 'https://kenkomed.cl/funcionalidades' },
])

export default function FuncionalidadesPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <FuncionalidadesContent />
    </>
  )
}
