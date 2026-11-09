export type FaqItem = {
  question: string
  answer: string
}

export const faqCategories: Record<string, string> = {
  general: 'General',
  caracteristicas: 'Características Clínicas',
  seguridad: 'Seguridad y Normativa',
  precios: 'Precios e Implementación',
}

export const faqDataByCategory: Record<string, FaqItem[]> = {
  general: [
    {
      question: '¿Qué es Kenkomed y para quién está pensado?',
      answer:
        'Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda multi-box, 13 cuestionarios validados (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, Oswestry, LEFS, etc.) y reportes clínicos en una sola plataforma web.',
    },
    {
      question: '¿Hay demostración guiada sin costo?',
      answer:
        'Sí. Puedes agendar una demostración guiada sin costo desde la web o explorar la sección Demo. Un especialista de nuestro equipo te muestra en vivo el sistema DSS, la agenda multi-box y las historias clínicas digitales aplicadas a tu flujo de atención.',
    },
    {
      question: '¿Necesito instalar algún programa en mi computador?',
      answer:
        'No. Kenkomed es una plataforma 100% basada en la nube (SaaS). Solo necesitas conexión a internet y un navegador web para acceder desde cualquier computador, tablet o teléfono celular, sin instalaciones ni actualizaciones manuales.',
    },
  ],
  caracteristicas: [
    {
      question: '¿En qué se diferencia Kenkomed de un software genérico de salud?',
      answer:
        'Kenkomed no es una agenda médica genérica adaptada: es un Sistema de Soporte a la Decisión Clínica (DSS) diseñado desde cero para kinesiología. Integra 13 escalas funcionales validadas, admisión remota vía código QR (anamnesis de 14 páginas), evolución en formato SOAP enlazada a objetivos funcionales, alertas clínicas automáticas (banderas rojas y amarillas), gráficos de evolución para el paciente y médico derivador, y control de packs de sesiones.',
    },
    {
      question: '¿Kenkomed genera el detalle de sesiones para reembolso en Isapres y seguros?',
      answer:
        'Sí. Con un clic emites el certificado y detalle de sesiones en formato PDF con las fechas de atención, diagnóstico kinésico y códigos de arancel FONASA solicitados por Isapres y seguros complementarios de salud en Chile para facilitar el reembolso del paciente.',
    },
    {
      question: '¿Cómo funciona el envío de anamnesis y pautas de ejercicios por WhatsApp?',
      answer:
        'Puedes compartir el enlace o código QR de admisión previa por WhatsApp para que el paciente complete su anamnesis desde su celular antes de llegar a la consulta. Asimismo, al prescribir ejercicios del catálogo anatómico (con series, repeticiones y dosificación), generas un PDF membretado que se envía en un clic al WhatsApp o correo del paciente.',
    },
    {
      question: '¿Qué escalas y cuestionarios clínicos incluye?',
      answer:
        'Incluye 13 escalas clínicas validadas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDASH, Barthel, GROC, EQ-5D, Oswestry, LEFS y screening de comorbilidades), calculando puntajes e interpretaciones automáticamente al completar la evaluación.',
    },
    {
      question: '¿Funciona en celular y para clínicas con varios kinesiólogos?',
      answer:
        'Sí. Funciona en cualquier navegador móvil o de escritorio y escala desde un kinesiólogo independiente hasta centros de rehabilitación con múltiples boxes y sedes, con permisos diferenciados por rol.',
    },
    {
      question: '¿Y si mis pacientes no usan el código QR?',
      answer:
        'El código QR es completamente opcional. Si un paciente prefiere no completarlo antes de la cita, puedes registrar los datos directamente en la ficha durante la sesión.',
    },
  ],
  seguridad: [
    {
      question: '¿Cómo protege Kenkomed los datos clínicos de los pacientes?',
      answer:
        'La plataforma utiliza cifrado de datos en tránsito y en reposo, respaldos automáticos, bloqueo automático de pantalla en box y control de acceso por roles (Director Técnico, Administrador, Kinesiólogo y Recepción). Su arquitectura de trazabilidad está diseñada conforme a la Ley N° 20.584 (Derechos y Deberes de los Pacientes) y preparada para los estándares de la Ley N° 21.719 de Protección de Datos Personales.',
    },
    {
      question: '¿Dónde se almacenan los datos y quién puede acceder a ellos?',
      answer:
        'Los datos clínicos se resguardan en servidores seguros con cifrado. Solo el profesional tratante y el personal autorizado de tu centro pueden acceder a las fichas según su rol, quedando cada acceso registrado en el historial de auditoría.',
    },
    {
      question: '¿Puedo exportar o descargar las fichas de mis pacientes?',
      answer:
        'Sí. El profesional o centro de salud mantiene la titularidad de sus registros y puede exportar las fichas e informes clínicos en formato PDF en cualquier momento para entregarlos al paciente, al médico derivador o para respaldo institucional.',
    },
  ],
  precios: [
    {
      question: '¿Cuánto cuesta y existe permanencia mínima?',
      answer:
        'Los planes comienzan en 0,4 UF / mes neto (+ IVA en plan anual, aprox. $15.000 CLP neto) para el Plan Individual, 0,7 UF / mes neto (aprox. $26.000 CLP) para el Plan Clínico Pro y 1,1 UF / mes neto (aprox. $41.000 CLP) para el Plan Clínica / Centro. No exigimos contratos de permanencia forzosa: puedes optar por modalidad mensual o anual con factura o boleta legal.',
    },
    {
      question: '¿Permite llevar el control de pagos y datos para Boleta de Honorarios o factura?',
      answer:
        'Sí. Incluye registro de pagos por sesión o packs de tratamiento con desglose por medio de pago (efectivo, transferencia o tarjeta) y datos del paciente (RUT, nombre y correo) para agilizar la emisión de tus documentos tributarios.',
    },
    {
      question: '¿Puedo migrar mis datos si hoy uso papel, Excel u otro sistema?',
      answer:
        'Sí. Puedes iniciar desde cero o importar tus registros históricos. En los planes Clínico Pro y Clínica incluimos acompañamiento para migrar tu base de pacientes y configurar tus boxes y horarios.',
    },
    {
      question: '¿Incluye soporte técnico y capacitación para mi equipo?',
      answer:
        'Todos los planes incluyen soporte directo por WhatsApp y correo con nuestro equipo en Chile, además de onboarding guiado para que tú y tu equipo dominen el flujo clínico desde el primer día.',
    },
  ],
}

export const homeFaqItems: FaqItem[] = Object.values(faqDataByCategory).flat()
