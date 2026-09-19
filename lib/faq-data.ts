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
      'A diferencia de un ERP o agenda médica genérica, Kenkomed está especializado en kinesiología: incluye anamnesis completa, admisión remota por QR, escalas clínicas validadas y un algoritmo DSS que recomienda evaluaciones según los síntomas del paciente, basado en guías NICE, IASP y OMS.',
  },
  {
    question: '¿Kenkomed cumple con la protección de datos de pacientes?',
    answer:
      'Sí. La plataforma utiliza cifrado de datos, respaldos automáticos y control de roles (administrador vs clínico). Cada profesional accede solo a la información de sus pacientes asignados. El sistema incluye herramientas de trazabilidad pensadas para la Ley 21.719 de protección de datos personales.',
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
      'Los planes parten desde $15.990 CLP/mes (plan anual). No hay permanencia mínima: puedes cancelar cuando quieras. Ofrecemos facturación mensual, semestral y anual. Solicita una demo para conocer el plan que mejor se adapta a tu clínica.',
  },
]
