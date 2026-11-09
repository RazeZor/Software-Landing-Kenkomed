import type { Metadata } from 'next'
import { LegalPageLayout, type LegalHighlight } from '@/components/legal-page-layout'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Política de Privacidad y Protección de Datos',
  description:
    'Cómo Kenkomed recopila, utiliza y resguarda los datos personales y clínicos conforme a la Ley 19.628, Ley 20.584 y Ley 21.719 en Chile.',
  alternates: { canonical: '/privacidad' },
  robots: { index: true, follow: true },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://www.kenkomed.cl' },
  { name: 'Política de Privacidad', url: 'https://www.kenkomed.cl/privacidad' },
])

const highlights: LegalHighlight[] = [
  {
    badge: 'Roles Legales',
    title: 'Titularidad clara de la ficha',
    description:
      'El centro o kinesiólogo tratante es responsable de sus fichas; Kenkomed opera como encargado tecnológico.',
  },
  {
    badge: 'Cero Tráfico de Datos',
    title: 'Sin venta ni uso publicitario',
    description:
      'Los datos clínicos jamás se comercializan ni se comparten con terceros ajenos a la prestación del servicio.',
  },
  {
    badge: 'Derechos ARCO',
    title: 'Portabilidad en 1 clic',
    description:
      'Exportación completa del historial del paciente en formatos abiertos (JSON, HTML y PDF) cuando lo solicite.',
  },
  {
    badge: 'Marco Chileno',
    title: 'Ley 19.628, 20.584 y 21.719',
    description:
      'Tratamiento sujeto a la legislación chilena de protección de datos personales y derechos del paciente.',
  },
]

const sections = [
  {
    id: 'responsable',
    title: 'Identificación y roles en el tratamiento de datos',
    content: (
      <>
        <p>
          En el tratamiento de datos dentro del ecosistema Kenkomed se distinguen dos ámbitos
          jurídicos conforme a la normativa chilena:
        </p>
        <ul>
          <li>
            <strong>Datos comerciales y de cuentas de profesionales:</strong> Kenkomed es el{' '}
            <strong>Responsable del Tratamiento</strong> respecto de los datos recopilados en este
            sitio web (<strong>kenkomed.cl</strong>) y de las cuentas de los profesionales y centros
            registrados en la plataforma (<strong>app.kenkomed.cl</strong>).
          </li>
          <li>
            <strong>Datos clínicos y fichas de pacientes:</strong> cada centro de salud o
            kinesiólogo tratante actúa como <strong>Responsable de los Datos</strong> frente a sus
            pacientes conforme a la Ley N° 20.584, mientras que Kenkomed actúa como{' '}
            <strong>Encargado del Tratamiento / Proveedor Tecnológico</strong>, procesando dicha
            información únicamente bajo las instrucciones del profesional o centro.
          </li>
        </ul>
        <p>
          Contacto oficial para asuntos de privacidad y protección de datos:{' '}
          <a href="mailto:kenkomedplus@gmail.com">kenkomedplus@gmail.com</a> · +56 9 3710 5872 ·
          Concepción, Región del Biobío, Chile.
        </p>
      </>
    ),
  },
  {
    id: 'datos',
    title: 'Categorías de datos que tratamos',
    content: (
      <>
        <p>Según tu relación con Kenkomed, tratamos las siguientes categorías de información:</p>
        <ul>
          <li>
            <strong>Datos de contacto comercial:</strong> nombre, correo electrónico, teléfono,
            nombre de la clínica, tamaño del equipo y mensaje enviados voluntariamente en el
            formulario de solicitud de demo.
          </li>
          <li>
            <strong>Datos de cuenta profesional:</strong> nombre, RUT profesional, especialidad,
            rol asignado (Director, Kinesiólogo o Recepción), credenciales cifradas y bitácora de
            accesos.
          </li>
          <li>
            <strong>Datos sensibles de salud (ingresados por pacientes o clínicos):</strong>{' '}
            anamnesis remota de 14 páginas, ubicación y comportamiento del dolor, puntajes en las 13
            escalas funcionales, evoluciones SOAP, pautas de ejercicios y consentimientos informados
            electrónicos.
          </li>
          <li>
            <strong>Datos técnicos y de auditoría:</strong> dirección IP, fecha y hora de acceso,
            tipo de navegador y registros necesarios para la bitácora de seguridad (
            <code>AuditoriaAcceso</code>).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'finalidad',
    title: 'Finalidad del tratamiento',
    content: (
      <>
        <p>Utilizamos la información recopilada exclusivamente para:</p>
        <ul>
          <li>Agendar demostraciones guiadas, responder consultas comerciales y brindar soporte.</li>
          <li>
            Operar los módulos clínicos de la plataforma: admisión remota por QR, cálculo de
            escalas, soporte a la decisión clínica (DSS), agenda multi-box y emisión de pautas o
            informes.
          </li>
          <li>
            Enviar notificaciones transaccionales solicitadas por el profesional o paciente
            (confirmaciones de cita, enlaces de admisión y envío de pautas domiciliarias).
          </li>
          <li>
            Mantener la trazabilidad médico-legal, prevenir accesos no autorizados y garantizar la
            continuidad operativa del servicio.
          </li>
        </ul>
        <p>
          <strong>Compromiso estricto:</strong> Kenkomed no vende, arrienda ni cede datos personales
          o clínicos a terceros, ni utiliza información de fichas médicas con fines publicitarios.
        </p>
      </>
    ),
  },
  {
    id: 'base-legal',
    title: 'Marco legal aplicable en Chile',
    content: (
      <>
        <p>
          El tratamiento de datos se rige por la legislación vigente en la República de Chile, en
          particular:
        </p>
        <ul>
          <li>
            <strong>Ley N° 20.584:</strong> regula los derechos y deberes que tienen las personas en
            relación con acciones vinculadas a su atención en salud y el carácter reservado de la
            ficha clínica.
          </li>
          <li>
            <strong>Ley N° 19.628 y adecuación a la Ley N° 21.719:</strong> regula la protección de
            datos personales, los principios de licitud, finalidad, proporcionalidad, seguridad y el
            ejercicio de los derechos ARCO y portabilidad.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'conservacion',
    title: 'Conservación y custodia de registros',
    content: (
      <>
        <p>
          Los datos de cuenta y registros clínicos se mantienen activos mientras esté vigente el
          servicio contratado por el profesional o centro de salud, y durante los plazos legales de
          conservación aplicables a la documentación clínica en Chile.
        </p>
        <p>
          Al término del servicio, el centro o profesional titular puede exportar la totalidad de
          sus fichas clínicas en formatos estándar (<code>JSON</code>, <code>HTML</code> y{' '}
          <code>PDF</code>) antes del cierre definitivo de la cuenta.
        </p>
      </>
    ),
  },
  {
    id: 'terceros',
    title: 'Subencargados e infraestructura tecnológica',
    content: (
      <>
        <p>
          Para operar con alta disponibilidad utilizamos proveedores de infraestructura cloud, base
          de datos y despacho de correo transaccional que cumplen estándares internacionales de
          seguridad de la información.
        </p>
        <p>
          El formulario comercial de esta página web utiliza el servicio <em>Web3Forms</em>{' '}
          únicamente para canalizar tu solicitud de contacto hacia nuestro correo de atención.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies y almacenamiento local',
    content: (
      <>
        <p>
          En nuestro sitio informativo y en la aplicación clínica utilizamos cookies técnicas y de
          análisis acotadas:
        </p>
        <ul>
          <li>
            <strong>Cookies técnicas y de sesión (esenciales):</strong> indispensables para mantener
            la sesión autenticada del profesional, proteger formularios contra falsificación de
            solicitudes (CSRF) y recordar preferencias básicas.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> nos permiten medir de forma agregada el rendimiento
            y las visitas del sitio web informativo para optimizar su velocidad y claridad.
          </li>
        </ul>
        <p>
          Puedes bloquear o eliminar las cookies en cualquier momento desde la configuración de
          privacidad de tu navegador.
        </p>
      </>
    ),
  },
  {
    id: 'derechos',
    title: 'Ejercicio de derechos ARCO y portabilidad',
    content: (
      <>
        <p>
          Todo titular de datos personales tiene derecho a solicitar el{' '}
          <strong>Acceso, Rectificación, Cancelación (supresión), Oposición y Portabilidad</strong>{' '}
          de sus datos conforme a la ley chilena:
        </p>
        <ul>
          <li>
            <strong>Si eres paciente de un centro que utiliza Kenkomed:</strong> puedes solicitar
            directamente a tu kinesiólogo o centro tratante la copia íntegra o rectificación de tu
            ficha clínica; la plataforma dispone de herramientas nativas para emitir tu historial en
            formatos <code>JSON</code>, <code>HTML</code> y <code>PDF</code>.
          </li>
          <li>
            <strong>Si eres profesional usuario o contacto comercial:</strong> puedes ejercer tus
            derechos escribiendo directamente a{' '}
            <a href="mailto:kenkomedplus@gmail.com">kenkomedplus@gmail.com</a>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'cambios',
    title: 'Actualizaciones de esta política',
    content: (
      <p>
        Actualizaremos esta Política de Privacidad cuando incorporemos nuevas funcionalidades o
        entren en vigor nuevas disposiciones reglamentarias en Chile. La fecha de última revisión se
        indica siempre en el encabezado de esta página.
      </p>
    ),
  },
]

export default function PrivacidadPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <LegalPageLayout
        title="Política de Privacidad"
        description="Transparencia sobre cómo tratamos y resguardamos los datos personales y clínicos en Kenkomed."
        lastUpdated="Abril de 2026"
        currentPath="/privacidad"
        highlights={highlights}
        sections={sections}
      />
    </>
  )
}
