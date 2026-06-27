import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Términos de Uso',
  description:
    'Condiciones de uso del sitio web y la plataforma Kenkomed para kinesiólogos y centros clínicos en Chile.',
  alternates: { canonical: '/terminos' },
  robots: { index: true, follow: true },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Términos de Uso', url: 'https://kenkomed.cl/terminos' },
])

const sections = [
  {
    id: 'aceptacion',
    title: 'Aceptación de los términos',
    content: (
      <>
        <p>
          Al acceder a <strong>kenkomed.cl</strong> o utilizar la plataforma Kenkomed, aceptas
          estos Términos de Uso. Si no estás de acuerdo, no utilices el servicio.
        </p>
        <p>
          El uso clínico de la plataforma está destinado a profesionales de la salud y centros
          autorizados para el ejercicio de la kinesiología y fisioterapia.
        </p>
      </>
    ),
  },
  {
    id: 'servicio',
    title: 'Descripción del servicio',
    content: (
      <>
        <p>
          Kenkomed es un software de gestión clínica con sistema de apoyo a la decisión (DSS) para
          kinesiólogos. Incluye, entre otras funciones: historias clínicas digitales, agenda,
          cuestionarios validados, admisión remota y reportes.
        </p>
        <p>
          Kenkomed es una herramienta de apoyo administrativo y clínico.{' '}
          <strong>No reemplaza el juicio profesional</strong> del kinesiólogo ni constituye
          diagnóstico médico por sí mismo.
        </p>
      </>
    ),
  },
  {
    id: 'cuentas',
    title: 'Cuentas y acceso',
    content: (
      <>
        <p>El usuario es responsable de:</p>
        <ul>
          <li>Mantener la confidencialidad de sus credenciales.</li>
          <li>Notificar accesos no autorizados de inmediato.</li>
          <li>Usar la plataforma conforme a su rol asignado (administrador o clínico).</li>
          <li>No compartir cuentas entre personas no autorizadas.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'uso-permitido',
    title: 'Uso permitido',
    content: (
      <>
        <p>Está permitido utilizar Kenkomed para la gestión legítima de pacientes y operación de
        clínicas kinesiológicas. Está prohibido:</p>
        <ul>
          <li>Acceder a datos de pacientes sin autorización.</li>
          <li>Intentar vulnerar la seguridad del sistema.</li>
          <li>Usar el servicio con fines ilícitos o contrarios a la ética profesional.</li>
          <li>Copiar, descompilar o revender el software sin autorización expresa.</li>
          <li>Introducir malware o contenido que dañe la plataforma.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'contenido',
    title: 'Contenido y datos clínicos',
    content: (
      <>
        <p>
          Los datos clínicos ingresados por el usuario permanecen bajo su responsabilidad
          profesional y la del centro tratante. Kenkomed procesa esa información para prestar el
          servicio contratado.
        </p>
        <p>
          El usuario garantiza que cuenta con las autorizaciones necesarias para registrar datos de
          sus pacientes conforme a la normativa chilena aplicable.
        </p>
      </>
    ),
  },
  {
    id: 'propiedad',
    title: 'Propiedad intelectual',
    content: (
      <>
        <p>
          Kenkomed, su marca, diseño, código, documentación y materiales del sitio son propiedad
          de Kenkomed o de sus licenciantes. No se concede ningún derecho de propiedad sobre el
          software más allá del uso autorizado del servicio.
        </p>
      </>
    ),
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad y cambios',
    content: (
      <>
        <p>
          Trabajamos para mantener la plataforma disponible y segura, pero no garantizamos
          operación ininterrumpida. Podemos modificar funciones, realizar mantenimientos o
          actualizar estos términos. Los cambios relevantes se comunicarán por canales razonables.
        </p>
      </>
    ),
  },
  {
    id: 'limitacion',
    title: 'Limitación de responsabilidad',
    content: (
      <>
        <p>
          Kenkomed no será responsable por decisiones clínicas tomadas por el profesional ni por
          daños derivados del uso indebido de la plataforma. En la medida permitida por la ley
          chilena, la responsabilidad de Kenkomed se limita al monto pagado por el servicio en los
          últimos 12 meses, salvo dolo o culpa grave.
        </p>
      </>
    ),
  },
  {
    id: 'terminacion',
    title: 'Suspensión y terminación',
    content: (
      <p>
        Podemos suspender o terminar el acceso ante incumplimiento de estos términos, riesgo de
        seguridad o solicitud del cliente, conforme al acuerdo comercial vigente y plazos de
        exportación o eliminación de datos acordados.
      </p>
    ),
  },
  {
    id: 'ley',
    title: 'Ley aplicable',
    content: (
      <p>
        Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia
        será sometida a los tribunales competentes de Concepción, salvo pacto en contrario en un
        contrato comercial específico.
      </p>
    ),
  },
]

export default function TerminosPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <LegalPageLayout
        title="Términos de Uso"
        description="Condiciones que rigen el acceso al sitio web y la plataforma Kenkomed."
        lastUpdated="26 de junio de 2026"
        sections={sections}
      />
    </>
  )
}
