import type { Metadata } from 'next'
import { LegalPageLayout, type LegalHighlight } from '@/components/legal-page-layout'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Uso',
  description:
    'Condiciones de uso del sitio web y la plataforma clínica Kenkomed para kinesiólogos y centros de rehabilitación en Chile.',
  alternates: { canonical: '/terminos' },
  robots: { index: true, follow: true },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://www.kenkomed.cl' },
  { name: 'Términos de Uso', url: 'https://www.kenkomed.cl/terminos' },
])

const highlights: LegalHighlight[] = [
  {
    badge: 'Uso Profesional',
    title: 'Exclusivo para salud y rehabilitación',
    description:
      'Diseñado para kinesiólogos, fisioterapeutas y centros clínicos habilitados en Chile.',
  },
  {
    badge: 'Criterio Clínico',
    title: 'El DSS apoya, no reemplaza al clínico',
    description:
      'Las alertas y puntajes son herramientas de soporte; la decisión terapéutica es siempre del profesional.',
  },
  {
    badge: 'Propiedad de Datos',
    title: 'Tus fichas pertenecen a tu centro',
    description:
      'Garantizamos portabilidad completa en formatos abiertos (JSON, HTML y PDF) en todo momento.',
  },
  {
    badge: 'Jurisdicción',
    title: 'Legislación chilena aplicable',
    description:
      'Contrato regido por las leyes de la República de Chile con domicilio en Concepción.',
  },
]

const sections = [
  {
    id: 'aceptacion',
    title: 'Aceptación de los términos',
    content: (
      <>
        <p>
          Al acceder a <strong>kenkomed.cl</strong> o utilizar la plataforma clínica Kenkomed (
          <strong>app.kenkomed.cl</strong>), aceptas estos Términos de Uso. Si no estás de acuerdo
          con alguna de estas condiciones, debes abstenerte de utilizar el servicio.
        </p>
        <p>
          El uso de los módulos clínicos de la plataforma está destinado a profesionales de la
          salud, kinesiólogos, fisioterapeutas y centros autorizados para la atención de pacientes.
        </p>
      </>
    ),
  },
  {
    id: 'servicio',
    title: 'Alcance del servicio y rol del algoritmo DSS',
    content: (
      <>
        <p>
          Kenkomed es un software como servicio (SaaS) de gestión clínica y apoyo a la decisión
          (DSS) para kinesiología. Incluye fichas digitales SOAP, admisión remota por QR, 13 escalas
          validadas, prescripción de ejercicios domiciliarios, agenda multi-box y control de pagos.
        </p>
        <p>
          <strong>Delimitación de responsabilidad clínica:</strong> el motor DSS y los cálculos
          automatizados de escalas constituyen herramientas de apoyo basadas en literatura científica
          y reglas clínicas, pero <strong>en ningún caso reemplazan el juicio clínico</strong>, la
          evaluación física presencial ni el diagnóstico del profesional tratante.
        </p>
      </>
    ),
  },
  {
    id: 'cuentas',
    title: 'Cuentas profesionales y control de acceso',
    content: (
      <>
        <p>Cada centro y profesional usuario se compromete a:</p>
        <ul>
          <li>Mantener la confidencialidad de sus credenciales de inicio de sesión.</li>
          <li>
            Asignar a cada integrante del equipo el rol que corresponda a sus funciones (Director,
            Kinesiólogo o Recepción).
          </li>
          <li>Revocar oportunamente el acceso de profesionales o personal desvinculado.</li>
          <li>Notificar de inmediato a soporte ante cualquier sospecha de acceso no autorizado.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'uso-permitido',
    title: 'Uso permitido y restricciones',
    content: (
      <>
        <p>
          Kenkomed debe utilizarse exclusivamente para la gestión legítima de atenciones de salud y
          administración de centros clínicos. Queda estrictamente prohibido:
        </p>
        <ul>
          <li>Registrar o consultar datos de pacientes sin contar con base legal o consentimiento.</li>
          <li>Intentar eludir los controles de acceso por rol (RBAC) o las medidas de seguridad.</li>
          <li>Realizar ingeniería inversa, copiar o sublicenciar el software sin autorización.</li>
          <li>Utilizar los canales de notificación de la plataforma para el envío de spam.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'contenido',
    title: 'Titularidad y portabilidad de los datos clínicos',
    content: (
      <>
        <p>
          Los registros clínicos ingresados en la plataforma pertenecen y están bajo la
          responsabilidad del centro de salud o profesional tratante. Kenkomed procesa dichos datos
          exclusivamente para prestar el servicio contratado.
        </p>
        <p>
          El centro o profesional puede exportar en cualquier momento sus fichas e informes en
          formatos estándar (<code>JSON</code>, <code>HTML</code> y <code>PDF</code>).
        </p>
      </>
    ),
  },
  {
    id: 'propiedad',
    title: 'Propiedad intelectual del software',
    content: (
      <>
        <p>
          El código fuente, arquitectura, algoritmos DSS, diseño de interfaz, logotipos y
          documentación de Kenkomed son propiedad exclusiva de Kenkomed. La suscripción otorga una
          licencia de uso temporal, no exclusiva e intransferible durante la vigencia del plan
          contratado.
        </p>
      </>
    ),
  },
  {
    id: 'disponibilidad',
    title: 'Disponibilidad, soporte y actualizaciones',
    content: (
      <>
        <p>
          Monitoreamos continuamente la infraestructura de Kenkomed y realizamos mejoras periódicas
          de seguridad y funcionalidad. Las mantenciones programadas que puedan requerir breves
          ventanas de actualización se informarán oportunamente y se ejecutarán preferentemente en
          horarios de baja actividad clínica.
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
          Kenkomed no asume responsabilidad por decisiones clínicas o terapéuticas adoptadas por los
          profesionales usuarios, ni por contingencias derivadas del uso de credenciales compartidas
          por parte del cliente. En la máxima medida permitida por la legislación chilena, la
          responsabilidad patrimonial de Kenkomed frente al cliente estará limitada al monto
          efectivamente pagado por la suscripción durante los 12 meses previos al evento.
        </p>
      </>
    ),
  },
  {
    id: 'terminacion',
    title: 'Término del servicio y retiro de datos',
    content: (
      <p>
        El cliente puede solicitar el término de su suscripción en cualquier momento sin cláusulas
        de permanencia forzosa, contando con asistencia para la exportación íntegra de sus registros
        clínicos conforme a nuestra <a href="/privacidad">Política de Privacidad</a>.
      </p>
    ),
  },
  {
    id: 'ley',
    title: 'Legislación aplicable y jurisdicción',
    content: (
      <p>
        Estos Términos de Uso se rigen íntegramente por las leyes de la República de Chile. Para
        cualquier controversia derivada de su interpretación o cumplimiento, las partes se someten a
        la competencia de los tribunales ordinarios de justicia de la ciudad de Concepción, Región
        del Biobío.
      </p>
    ),
  },
]

export default function TerminosPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <LegalPageLayout
        title="Términos y Condiciones de Uso"
        description="Reglas claras sobre el uso profesional de la plataforma Kenkomed, propiedad de datos y responsabilidades."
        lastUpdated="Abril de 2026"
        currentPath="/terminos"
        highlights={highlights}
        sections={sections}
      />
    </>
  )
}
