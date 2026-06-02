export type FaqItem = {
  question: string
  answer: string
}

export const homeFaqItems: FaqItem[] = [
  {
    question: '¿Qué es Kenkomed y para quién está pensado?',
    answer:
      'Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda, cuestionarios validados (EVA, PSFS, Barthel, GROC) y reportes en una sola plataforma web y móvil.',
  },
  {
    question: '¿En qué se diferencia Kenkomed de un software genérico de salud?',
    answer:
      'A diferencia de un ERP o agenda médica genérica, Kenkomed está especializado en kinesiología: incluye anamnesis de 14 páginas, admisión remota por QR, 9 escalas clínicas validadas y un algoritmo DSS que recomienda evaluaciones según los síntomas del paciente, basado en guías NICE, IASP y OMS.',
  },
  {
    question: '¿Kenkomed cumple con la protección de datos de pacientes?',
    answer:
      'Sí. La plataforma utiliza cifrado de datos, respaldos automáticos y control de roles (administrador vs clínico). Cada profesional accede solo a la información de sus pacientes asignados, alineado con buenas prácticas de seguridad en software de salud en Chile.',
  },
  {
    question: '¿Hay prueba gratuita o demo del software?',
    answer:
      'Sí. Puedes solicitar una demo gratuita desde la web o ver la sección Demo con capturas y video del panel. Kenkomed ofrece un período de prueba para que evalúes el sistema DSS, la agenda inteligente y las historias clínicas digitales antes de contratar.',
  },
  {
    question: '¿Funciona en celular y para clínicas con varios kinesiólogos?',
    answer:
      'Kenkomed funciona en navegador web y app móvil (iOS y Android). Escala desde un kinesiólogo independiente hasta redes de clínicas con múltiples sedes, con roles diferenciados y panel de monitoreo en tiempo real para la gestión del centro kinesiológico.',
  },
  {
    question: '¿Qué escalas y cuestionarios clínicos incluye?',
    answer:
      'Incluye EVA, PSFS, Barthel, GROC, EQ-5D, Oswestry, LEFS, screening de comorbilidades (fibromialgia, neuropatía, ansiedad, depresión) y generación automática de informes clínicos al completar la anamnesis, sin papel ni Excel.',
  },
]
