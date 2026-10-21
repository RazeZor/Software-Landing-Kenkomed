export type FaqItem = {
  question: string
  answer: string
}

export const homeFaqItems: FaqItem[] = [
  {
    question: '¿Qué es Kenkomed y para quién está pensado?',
    answer:
      'Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda, 13 cuestionarios validados (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, etc) y reportes en una sola plataforma web.',
  },
  {
    question: '¿En qué se diferencia Kenkomed de un software genérico de salud?',
    answer:
      'Kenkomed no es una agenda médica ni un ERP adaptado: es un DSS (Sistema de Soporte a la Decisión Clínica) construido desde cero para kinesiología. Incluye 13 escalas validadas integradas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDash, Barthel, GROC, EQ-5D, Oswestry, LEFS y screening de comorbilidades), admisión remota vía QR con anamnesis de 14 páginas, evolución en formato SOAP enlazada a objetivos funcionales, gráficos automáticos de resultados para demostrar la evolución al paciente y al médico derivador, y un módulo de Packs de Sesiones flexible para cobros por sesión y tarifas particulares. Además, incorpora arquitectura orientada a la privacidad y trazabilidad clínica (Ley 20.584 y estándares de datos de salud): trazabilidad de accesos, cifrado, control por profesional y auditoría PDF por período.',
  },
  {
    question: '¿Kenkomed cumple con la protección de datos de pacientes?',
    answer:
      'Sí. La plataforma utiliza cifrado de datos, respaldos automáticos y control de roles (administrador vs clínico). Cada profesional accede solo a la información de sus pacientes asignados. El sistema incluye herramientas de trazabilidad y seguridad alineadas con la Ley N° 20.584 y preparadas para la normativa de datos personales en salud.',
  },
  {
    question: '¿Hay demo gratuita del software?',
    answer:
      'Sí. Puedes solicitar una demo guiada sin costo desde la web o ver la sección Demo con capturas y video del panel. Un especialista te muestra el sistema DSS, la agenda inteligente y las historias clínicas digitales antes de contratar.',
  },
  {
    question: '¿Funciona en celular y para clínicas con varios kinesiólogos?',
    answer:
      'Kenkomed funciona en cualquier navegador web, incluyendo el de tu celular — no necesitas instalar nada. Escala desde un kinesiólogo independiente hasta redes de clínicas con múltiples sedes, con roles diferenciados y panel de monitoreo en tiempo real.',
  },
  {
    question: '¿Qué escalas y cuestionarios clínicos incluye?',
    answer:
      'Incluye 13 escalas clínicas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDash, Barthel, GROC, EQ-5D, Oswestry, LEFS), screening de comorbilidades (fibromialgia, neuropatía, ansiedad, depresión) y generación automática de informes clínicos al completar la anamnesis, sin papel ni Excel.',
  },
  // ─── Preguntas clave del mercado chileno (Isapre, WhatsApp, SII) ───
  {
    question: '¿Kenkomed genera el detalle de sesiones para reembolso en Isapre y seguros complementarios?',
    answer:
      'Sí. Con un solo clic emites el certificado y detalle de sesiones en PDF con fechas asistidas, diagnóstico kinésico y códigos de arancel FONASA exigidos por todas las Isapres (Colmena, Banmédica, Consalud, CruzBlanca, Vida Tres, Nueva Masvida, etc.) y seguros complementarios en Chile para reembolsar sin trabas.',
  },
  {
    question: '¿Cómo funcionan los recordatorios por WhatsApp y correo electrónico?',
    answer:
      'Kenkomed sincroniza la comunicación con el paciente a través de WhatsApp y correo: envía confirmaciones y recordatorios de cita por WhatsApp con el enlace QR para completar su anamnesis previa, notifica al kinesiólogo cuando los datos han sido cargados a la ficha, y avisa al paciente por WhatsApp cuando su pauta de ejercicios con video ha llegado a su correo electrónico.',
  },
  {
    question: '¿Permite gestionar cobros para emitir Boleta de Honorarios en el SII o factura?',
    answer:
      'Sí. Incluye módulo de control de caja y registro de pagos por sesión individual o pack (transferencia, tarjeta o efectivo), entregando el desglose con RUT y datos fiscales del paciente para facilitar la emisión de tu Boleta de Honorarios Electrónica en el portal del SII o la facturación médica de tu centro.',
  },
  // ─── Nuevas preguntas de objeciones ───
  {
    question: '¿Ya uso Excel u otra agenda, puedo migrar mis datos?',
    answer:
      'Sí. Kenkomed te permite comenzar de cero o migrar tus fichas históricas. En el plan Clínica ofrecemos asistencia personalizada para importar datos desde Excel u otro software. Contáctanos para evaluar tu caso.',
  },
  {
    question: '¿Y si mis pacientes no usan el código QR?',
    answer:
      'El QR es opcional. Si un paciente no lo completa antes de la cita, tú puedes ingresar los datos directamente en el sistema durante la sesión. El QR simplemente ahorra tiempo cuando el paciente lo usa.',
  },
  {
    question: '¿Dónde están mis datos y quién los ve?',
    answer:
      'Tus datos clínicos se almacenan en servidores seguros con cifrado. Solo tú y los profesionales autorizados de tu centro pueden acceder a la información de los pacientes. El sistema registra cada acceso para trazabilidad.',
  },
  {
    question: '¿Cuánto cuesta y hay permanencia?',
    answer:
      'Los planes parten desde $15.990 CLP/mes neto (plan anual). No hay permanencia mínima: puedes cancelar cuando quieras. Ofrecemos facturación mensual, semestral y anual con IVA incluido. Solicita una demo para conocer el plan que mejor se adapta a tu consulta o clínica.',
  },
]
