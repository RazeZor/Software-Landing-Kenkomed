import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/legal-page-layout'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Seguridad de Datos',
  description:
    'Medidas de seguridad, confidencialidad y protección de datos clínicos en la plataforma Kenkomed.',
  alternates: { canonical: '/seguridad' },
  robots: { index: true, follow: true },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://kenkomed.cl' },
  { name: 'Seguridad de Datos', url: 'https://kenkomed.cl/seguridad' },
])

const sections = [
  {
    id: 'compromiso',
    title: 'Nuestro compromiso',
    content: (
      <>
        <p>
          Kenkomed gestiona información clínica sensible. Por eso diseñamos la plataforma con
          principios de confidencialidad, integridad y disponibilidad desde el inicio.
        </p>
        <p>
          La seguridad es un proceso continuo: revisamos accesos, actualizamos dependencias y
          mejoramos controles conforme evoluciona el producto.
        </p>
      </>
    ),
  },
  {
    id: 'datos-clinicos',
    title: 'Protección de datos clínicos',
    content: (
      <>
        <p>Los datos de pacientes y fichas clínicas reciben tratamiento reforzado:</p>
        <ul>
          <li>Acceso restringido por roles (administrador vs clínico regular).</li>
          <li>Separación lógica de datos entre cuentas de distintos centros.</li>
          <li>Registro de actividad relevante para auditoría operativa.</li>
          <li>Políticas de acceso mínimo necesario para cada perfil.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cifrado',
    title: 'Cifrado y transmisión',
    content: (
      <>
        <p>
          Las comunicaciones con la plataforma se realizan mediante conexiones cifradas (HTTPS/TLS).
          Las credenciales y datos en tránsito entre el navegador y nuestros servidores están
          protegidos contra interceptación en la red.
        </p>
        <p>
          Los datos en reposo se almacenan en infraestructura con controles de acceso restringido
          y prácticas de seguridad acordes a un servicio de salud digital.
        </p>
      </>
    ),
  },
  {
    id: 'accesos',
    title: 'Control de accesos',
    content: (
      <>
        <p>Implementamos controles para reducir el riesgo de acceso no autorizado:</p>
        <ul>
          <li>Autenticación individual por usuario.</li>
          <li>Roles con permisos diferenciados.</li>
          <li>Posibilidad de revocar accesos al desvincular personal.</li>
          <li>Recomendación de contraseñas robustas y no compartidas.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'respaldo',
    title: 'Respaldo y continuidad',
    content: (
      <>
        <p>
          Realizamos respaldos periódicos para facilitar la recuperación ante incidentes técnicos.
          Nuestro objetivo es minimizar la pérdida de información y el tiempo de inactividad.
        </p>
        <p>
          En caso de incidente mayor, activamos procedimientos de respuesta para contener,
          investigar y comunicar según corresponda.
        </p>
      </>
    ),
  },
  {
    id: 'proveedores',
    title: 'Proveedores e infraestructura',
    content: (
      <>
        <p>
          Seleccionamos proveedores de hosting y servicios con estándares de seguridad
          reconocidos. Exigimos confidencialidad y evaluamos el riesgo antes de integrar nuevos
          servicios que procesen datos.
        </p>
      </>
    ),
  },
  {
    id: 'landing',
    title: 'Datos del formulario de contacto',
    content: (
      <>
        <p>
          La landing recopila solo los datos que envías voluntariamente en el formulario de
          contacto (nombre, email, teléfono, clínica y mensaje). Esos datos se usan exclusivamente
          para responder tu solicitud comercial.
        </p>
        <p>
          Consulta la{' '}
          <a href="/privacidad">Política de Privacidad</a> para más detalle sobre tratamiento y
          derechos.
        </p>
      </>
    ),
  },
  {
    id: 'usuario',
    title: 'Tu parte en la seguridad',
    content: (
      <>
        <p>La seguridad también depende del uso responsable:</p>
        <ul>
          <li>No compartas tu contraseña ni dejes sesiones abiertas en equipos compartidos.</li>
          <li>Desactiva accesos de personal que ya no trabaja en la clínica.</li>
          <li>Reporta actividad sospechosa a soporte de inmediato.</li>
          <li>Cumple la normativa de protección de datos de tus pacientes.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'incidentes',
    title: 'Reporte de vulnerabilidades',
    content: (
      <>
        <p>
          Si detectas una vulnerabilidad o incidente de seguridad relacionado con Kenkomed,
          contáctanos de inmediato en{' '}
          <a href="mailto:kenkomedplus@gmail.com">kenkomedplus@gmail.com</a> con el asunto{' '}
          <strong>Seguridad Kenkomed</strong>.
        </p>
        <p>No divulgues públicamente detalles técnicos antes de darnos oportunidad de investigar.</p>
      </>
    ),
  },
]

export default function SeguridadPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <LegalPageLayout
        title="Seguridad de Datos"
        description="Cómo protegemos la información clínica y personal en Kenkomed."
        lastUpdated="26 de junio de 2026"
        sections={sections}
      />
    </>
  )
}
