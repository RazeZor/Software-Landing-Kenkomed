import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Cómo Kenkomed recopila, usa y protege los datos personales y clínicos en su plataforma para kinesiólogos en Chile.',
  alternates: { canonical: '/privacidad' },
  robots: { index: true, follow: true },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Política de Privacidad', url: 'https://kenkomed.cl/privacidad' },
])

const sections = [
  {
    id: 'responsable',
    title: 'Responsable del tratamiento',
    content: (
      <>
        <p>
          Kenkomed es el responsable del tratamiento de los datos personales recopilados a través
          de este sitio web (<strong>kenkomed.cl</strong>) y de la plataforma de software clínico
          Kenkomed (<strong>app.kenkomed.cl</strong>).
        </p>
        <p>
          Contacto para consultas de privacidad:{' '}
          <a href="mailto:kenkomedplus@gmail.com">kenkomedplus@gmail.com</a> · +56 9 4096 6266 ·
          Concepción, Chile.
        </p>
      </>
    ),
  },
  {
    id: 'datos',
    title: 'Qué datos recopilamos',
    content: (
      <>
        <p>Según el servicio que uses, podemos tratar:</p>
        <ul>
          <li>
            <strong>Datos de contacto comercial:</strong> nombre, email, teléfono, nombre de
            clínica y mensaje enviado desde el formulario de la landing.
          </li>
          <li>
            <strong>Datos de cuenta:</strong> credenciales de acceso, rol (administrador o
            clínico), preferencias y registros de actividad en la plataforma.
          </li>
          <li>
            <strong>Datos clínicos y de pacientes:</strong> fichas, anamnesis, cuestionarios,
            escalas validadas, evolución de tratamiento y documentos asociados ingresados por
            profesionales autorizados.
          </li>
          <li>
            <strong>Datos técnicos:</strong> dirección IP, tipo de navegador, logs de seguridad y
            cookies estrictamente necesarias para el funcionamiento del sitio.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'finalidad',
    title: 'Para qué usamos los datos',
    content: (
      <>
        <p>Tratamos los datos con las siguientes finalidades:</p>
        <ul>
          <li>Responder solicitudes de demo, contacto comercial o soporte.</li>
          <li>Prestar, mantener y mejorar el software de gestión clínica Kenkomed.</li>
          <li>Permitir el registro clínico, la admisión remota y el sistema DSS.</li>
          <li>Garantizar la seguridad, integridad y continuidad del servicio.</li>
          <li>Cumplir obligaciones legales aplicables en Chile.</li>
        </ul>
        <p>
          No vendemos datos personales ni los usamos para publicidad de terceros ajenos al
          servicio.
        </p>
      </>
    ),
  },
  {
    id: 'base-legal',
    title: 'Base legal',
    content: (
      <>
        <p>
          El tratamiento se realiza conforme a la{' '}
          <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong> y normativa
          complementaria aplicable en Chile, en función de:
        </p>
        <ul>
          <li>La ejecución de un contrato o medidas precontractuales a solicitud del titular.</li>
          <li>El consentimiento del titular, cuando corresponda.</li>
          <li>El interés legítimo de Kenkomed en operar un servicio seguro y confiable.</li>
          <li>El cumplimiento de obligaciones legales en materia de salud y registros clínicos.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'conservacion',
    title: 'Conservación de los datos',
    content: (
      <>
        <p>
          Conservamos los datos mientras exista una relación activa con el cliente o profesional
          usuario, y posteriormente durante el plazo necesario para cumplir obligaciones legales,
          resolver reclamos o respaldar auditorías de seguridad.
        </p>
        <p>
          Los datos clínicos ingresados en la plataforma son responsabilidad del centro o
          profesional tratante; Kenkomed actúa como proveedor tecnológico según el acuerdo de
          servicio correspondiente.
        </p>
      </>
    ),
  },
  {
    id: 'terceros',
    title: 'Encargados y transferencias',
    content: (
      <>
        <p>
          Podemos compartir datos con proveedores que nos ayudan a operar el servicio (hosting,
          email transaccional, formularios de contacto), siempre bajo obligaciones de
          confidencialidad y seguridad.
        </p>
        <p>
          El formulario de contacto de esta landing utiliza un servicio de envío de correo
          (Web3Forms) para entregar tu mensaje a nuestro equipo.
        </p>
        <p>
          No transferimos datos fuera de Chile salvo que sea técnicamente necesario para la
          operación del servicio y con las salvaguardas correspondientes.
        </p>
      </>
    ),
  },
  {
    id: 'derechos',
    title: 'Tus derechos',
    content: (
      <>
        <p>Como titular de datos personales, puedes solicitar:</p>
        <ul>
          <li>Acceso a tus datos.</li>
          <li>Rectificación de datos inexactos o incompletos.</li>
          <li>Eliminación o bloqueo, cuando proceda legalmente.</li>
          <li>Oposición al tratamiento en los casos previstos por la ley.</li>
        </ul>
        <p>
          Envía tu solicitud a{' '}
          <a href="mailto:kenkomedplus@gmail.com">kenkomedplus@gmail.com</a>. Responderemos en un
          plazo razonable conforme a la normativa vigente.
        </p>
      </>
    ),
  },
  {
    id: 'menores',
    title: 'Menores de edad',
    content: (
      <p>
        Kenkomed no está dirigido a menores de 18 años de forma autónoma. Los datos de pacientes
        menores ingresados en la plataforma deben ser tratados exclusivamente por profesionales de
        la salud autorizados y conforme a la normativa clínica aplicable.
      </p>
    ),
  },
  {
    id: 'cambios',
    title: 'Cambios a esta política',
    content: (
      <p>
        Podemos actualizar esta política para reflejar cambios legales o del servicio. Publicaremos
        la versión vigente en esta página con la fecha de actualización correspondiente.
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
        description="Información sobre cómo Kenkomed trata los datos personales y clínicos en su sitio web y plataforma."
        lastUpdated="26 de junio de 2026"
        sections={sections}
      />
    </>
  )
}
