import type { Metadata } from 'next'
import { LegalPageLayout, type LegalHighlight } from '@/components/legal-page-layout'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Seguridad y Trazabilidad Clínica',
  description:
    'Arquitectura de seguridad, control de acceso por roles (RBAC), auditoría de fichas y cumplimiento normativo (Ley 20.584 y 21.719) en Kenkomed.',
  alternates: { canonical: '/seguridad' },
  robots: { index: true, follow: true },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Inicio', url: 'https://www.kenkomed.cl' },
  { name: 'Seguridad de Datos', url: 'https://www.kenkomed.cl/seguridad' },
])

const highlights: LegalHighlight[] = [
  {
    badge: 'Normativa Salud CL',
    title: 'Alineado con Ley 20.584 y 21.719',
    description:
      'Resguardo de confidencialidad de la ficha clínica, consentimiento informado digital y portabilidad ARCO.',
  },
  {
    badge: 'Control RBAC',
    title: '4 niveles de acceso por rol',
    description:
      'Recepción gestiona agenda y pagos sin acceso a notas clínicas SOAP ni diagnósticos kinésicos.',
  },
  {
    badge: 'Trazabilidad',
    title: 'Bitácora AuditoriaAcceso',
    description:
      'Registro inmutable de usuario, rol, marca de tiempo e IP en operaciones sensibles, exportable en PDF.',
  },
  {
    badge: 'Protección en Box',
    title: 'Bloqueo y tokens temporales',
    description:
      'Bloqueo automático tras 10 min de inactividad en consulta y tokens QR de un solo uso con expiración.',
  },
]

const sections = [
  {
    id: 'arquitectura-normativa',
    title: 'Arquitectura y marco normativo en Chile',
    content: (
      <>
        <p>
          Kenkomed procesa información clínica sensible sujeta a reserva legal. Nuestra arquitectura
          de software fue diseñada desde su base bajo los principios de{' '}
          <strong>confidencialidad, integridad, disponibilidad y trazabilidad</strong> exigidos para
          los registros de salud en Chile.
        </p>
        <p>
          Los controles técnicos y operativos de la plataforma están alineados con la{' '}
          <strong>Ley N° 20.584</strong> (Derechos y Deberes de las Personas en Atención de Salud),
          la <strong>Ley N° 19.628</strong> sobre Protección de la Vida Privada y preparados para
          los estándares de gobernanza, seguridad y portabilidad de la{' '}
          <strong>Ley N° 21.719</strong> sobre Protección de Datos Personales.
        </p>
      </>
    ),
  },
  {
    id: 'rbac-aislamiento',
    title: 'Control de acceso por roles (RBAC) y aislamiento multiclínica',
    content: (
      <>
        <p>
          Aplicamos el principio de privilegio mínimo mediante separación estricta de permisos según
          la función dentro del centro:
        </p>
        <ul>
          <li>
            <strong>Director / Administrador del Centro:</strong> gestión integral del equipo
            profesional, configuración de sedes, reportes financieros y agenda global.
          </li>
          <li>
            <strong>Kinesiólogo / Profesional Clínico:</strong> acceso exclusivo a las fichas,
            escalas funcionales y evoluciones SOAP de sus pacientes asignados.
          </li>
          <li>
            <strong>Recepción / Secretaría:</strong> acceso acotado a agendamiento multi-box,
            confirmación de asistencia y registro de pagos, <strong>sin acceso</strong> al contenido
            clínico de las fichas ni a los informes DSS.
          </li>
          <li>
            <strong>Aislamiento por sede:</strong> en cuentas multiclínica, las fichas y agendas se
            mantienen lógicamente segregadas por centro de trabajo.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'trazabilidad-auditoria',
    title: 'Trazabilidad clínica y registro de auditoría (AuditoriaAcceso)',
    content: (
      <>
        <p>
          Para respaldar la responsabilidad médico-legal del centro y cumplir con la trazabilidad de
          la ficha clínica, Kenkomed mantiene una bitácora inmutable de eventos relevantes (
          <code>AuditoriaAcceso</code>):
        </p>
        <ul>
          <li>
            Registro de lectura, creación y modificación de fichas clínicas, ciclos de atención y
            pautas de ejercicio (<code>PautaEjercicio</code>) con fecha, hora exacta, usuario y
            dirección IP.
          </li>
          <li>
            Consentimiento informado electrónico firmado por el paciente en la admisión remota con
            sello de tiempo y dirección IP de origen.
          </li>
          <li>
            Capacidad para que el administrador del centro exporte reportes de auditoría en formato
            PDF filtrables por ventanas de 30, 90 o 180 días.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'seguridad-box-tokens',
    title: 'Seguridad en box de atención y enlaces públicos',
    content: (
      <>
        <p>
          El entorno físico de una consulta kinésica o gimnasio terapéutico presenta riesgos
          específicos de exposición visual que mitigamos con controles dedicados:
        </p>
        <ul>
          <li>
            <strong>Bloqueo automático por inactividad:</strong> la sesión clínica bloquea la
            pantalla automáticamente tras 10 minutos sin interacción para evitar exposición de datos
            en el box (<em>shoulder surfing</em>).
          </li>
          <li>
            <strong>Tokens QR de un solo uso:</strong> los enlaces de admisión remota utilizan
            tokens únicos con vigencia acotada que se invalidan automáticamente una vez completada la
            anamnesis.
          </li>
          <li>
            <strong>Reserva online protegida:</strong> el portal público de agendamiento utiliza
            firmas criptográficas temporales (<code>TimestampSigner</code>), control de tasa de
            intentos (<em>rate limiting</em>) y enmascaramiento de datos de contacto (ej.{' '}
            <code>j***@correo.cl</code>).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'cifrado-infraestructura',
    title: 'Cifrado en tránsito, reposo y continuidad operativa',
    content: (
      <>
        <p>
          Todas las conexiones entre navegadores, dispositivos móviles de pacientes y los servidores
          de Kenkomed se realizan exclusivamente bajo cifrado <strong>HTTPS/TLS</strong>. Las
          contraseñas de los profesionales se almacenan mediante algoritmos de hash criptográfico con
          sal y nunca en texto plano.
        </p>
        <p>
          La base de datos cuenta con bloqueo transaccional para preservar la integridad de agendas
          y registros, respaldos automatizados periódicos y monitoreo continuo de disponibilidad
          mediante endpoints de salud (<code>/health/</code>).
        </p>
      </>
    ),
  },
  {
    id: 'portabilidad-arco',
    title: 'Portabilidad e interoperabilidad (Derechos ARCO)',
    content: (
      <>
        <p>
          Facilitamos a los centros clínicos el cumplimiento oportuno de solicitudes de acceso y
          portabilidad de la ficha clínica por parte de sus pacientes:
        </p>
        <ul>
          <li>
            Exportación íntegra de la ficha clínica del paciente en formatos estructurados y
            abiertos (<strong>JSON</strong>, <strong>HTML</strong> y <strong>PDF</strong>).
          </li>
          <li>Exportación segmentada por episodio o ciclo clínico específico.</li>
          <li>
            Consulta nuestra <a href="/privacidad">Política de Privacidad</a> para conocer el
            procedimiento detallado de ejercicio de derechos ARCO.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'responsabilidad-compartida',
    title: 'Buenas prácticas del centro y profesionales',
    content: (
      <>
        <p>
          La protección efectiva de los datos clínicos es una responsabilidad compartida entre
          Kenkomed y cada centro de salud:
        </p>
        <ul>
          <li>Utilizar cuentas individuales por profesional y nunca compartir credenciales.</li>
          <li>Revocar de inmediato el acceso de profesionales o administrativos desvinculados.</li>
          <li>Verificar la identidad del paciente antes de entregar copias impresas o digitales.</li>
          <li>Notificar cualquier anomalía de acceso a nuestro equipo de soporte.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'reporte-vulnerabilidades',
    title: 'Reporte responsable de incidentes o vulnerabilidades',
    content: (
      <>
        <p>
          Si eres investigador de seguridad, administrador de TI de una clínica o usuario y detectas
          un posible incidente o vulnerabilidad técnica en Kenkomed, escríbenos directamente a{' '}
          <a href="mailto:kenkomedplus@gmail.com">kenkomedplus@gmail.com</a> con el asunto{' '}
          <strong>Seguridad Kenkomed</strong>.
        </p>
        <p>
          Acusamos recibo prioritario de todo reporte técnico y coordinamos su análisis y
          remediación antes de cualquier divulgación pública.
        </p>
      </>
    ),
  },
]

export default function SeguridadPage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <LegalPageLayout
        title="Seguridad y Trazabilidad Clínica"
        description="Arquitectura técnica, controles de acceso por rol y medidas de protección de datos de salud en Kenkomed."
        lastUpdated="Abril de 2026"
        currentPath="/seguridad"
        highlights={highlights}
        sections={sections}
      />
    </>
  )
}
