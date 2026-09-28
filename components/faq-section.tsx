'use client'

import { FAQ } from '@/components/ui/faq-tabs'

const categories = {
  "general": "General",
  "caracteristicas": "Características Clínicas",
  "seguridad": "Seguridad y Datos",
  "precios": "Precios e Implementación"
};

const faqData = {
  "general": [
    {
      question: '¿Qué es Kenkomed y para quién está pensado?',
      answer: 'Kenkomed es un software de gestión clínica y Sistema de Soporte a la Decisión (DSS) diseñado para kinesiólogos, fisioterapeutas y centros de rehabilitación en Chile. Centraliza fichas clínicas digitales, agenda, 13 cuestionarios validados (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, etc) y reportes en una sola plataforma web.'
    },
    {
      question: '¿Hay demo gratuita del software?',
      answer: 'Sí. Puedes solicitar una demo guiada sin costo desde la web o ver la sección Demo con capturas y video del panel. Un especialista te muestra el sistema DSS, la agenda inteligente y las historias clínicas digitales antes de contratar.'
    },
    {
      question: '¿Necesito instalar algún programa en mi computadora?',
      answer: 'No, Kenkomed es un software 100% basado en la nube (SaaS). Solo necesitas conexión a internet y un navegador web para acceder de forma segura desde cualquier computadora, tablet o teléfono celular, sin descargas ni actualizaciones manuales.'
    }
  ],
  "caracteristicas": [
    {
      question: '¿En qué se diferencia Kenkomed de un software genérico de salud?',
      answer: 'Kenkomed no es una agenda médica ni un ERP adaptado: es un DSS (Sistema de Soporte a la Decisión Clínica) construido desde cero para kinesiología. Incluye 13 escalas validadas integradas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDash, Barthel, GROC, EQ-5D, Oswestry, LEFS y screening de comorbilidades), admisión remota vía QR con anamnesis de 14 páginas, evolución en formato SOAP enlazada a objetivos funcionales, gráficos automáticos de resultados para demostrar la evolución al paciente y al médico derivador, y un módulo de Packs de Sesiones compatible con tarifas Fonasa y Particular. Además, cumple con la Ley 21.719 de protección de datos personales: trazabilidad de accesos, cifrado, exportación ARCO y auditoría PDF por período.'
    },
    {
      question: '¿Qué escalas y cuestionarios clínicos incluye?',
      answer: 'Incluye 13 escalas clínicas (EVA, PSFS, WOMAC, TUG, Berg, Tinetti, QuickDash, Barthel, GROC, EQ-5D, Oswestry, LEFS), screening de comorbilidades (fibromialgia, neuropatía, ansiedad, depresión) y generación automática de informes clínicos al completar la anamnesis, sin papel ni Excel.'
    },
    {
      question: '¿Funciona en celular y para clínicas con varios kinesiólogos?',
      answer: 'Kenkomed funciona en cualquier navegador web, incluyendo el de tu celular — no necesitas instalar nada. Escala desde un kinesiólogo independiente hasta redes de clínicas con múltiples sedes, con roles diferenciados y panel de monitoreo en tiempo real.'
    },
    {
      question: '¿Y si mis pacientes no usan el código QR?',
      answer: 'El QR es opcional. Si un paciente no lo completa antes de la cita, tú puedes ingresar los datos directamente en el sistema durante la sesión. El QR simplemente ahorra tiempo cuando el paciente lo usa.'
    }
  ],
  "seguridad": [
    {
      question: '¿Kenkomed cumple con la protección de datos de pacientes?',
      answer: 'Sí. La plataforma utiliza cifrado de datos, respaldos automáticos y control de roles (administrador vs clínico). Cada profesional accede solo a la información de sus pacientes asignados. El sistema incluye herramientas de trazabilidad pensadas para la Ley 21.719 de protección de datos personales.'
    },
    {
      question: '¿Dónde están mis datos y quién los ve?',
      answer: 'Tus datos clínicos se almacenan en servidores seguros con cifrado. Solo tú y los profesionales autorizados de tu centro pueden acceder a la información de los pacientes. El sistema registra cada acceso para trazabilidad.'
    },
    {
      question: '¿Puedo exportar o descargar las fichas de mis pacientes si lo necesito?',
      answer: 'Sí, como profesional o clínica, eres el dueño absoluto de tus datos. Puedes exportar la información clínica en formato PDF para entregarla a tus pacientes, médicos derivadores o respaldarla. También puedes solicitar exportaciones completas si lo requieres, cumpliendo con la normativa de portabilidad.'
    }
  ],
  "precios": [
    {
      question: '¿Cuánto cuesta y hay permanencia?',
      answer: 'Los planes parten desde $15.990 CLP/mes (plan anual). No hay permanencia mínima: puedes cancelar cuando quieras. Ofrecemos facturación mensual, semestral y anual. Solicita una demo para conocer el plan que mejor se adapta a tu clínica.'
    },
    {
      question: '¿Ya uso Excel u otra agenda, puedo migrar mis datos?',
      answer: 'Sí. Kenkomed te permite comenzar de cero o migrar tus fichas históricas. En el plan Clínica ofrecemos asistencia personalizada para importar datos desde Excel u otro software. Contáctanos para evaluar tu caso.'
    },
    {
      question: '¿Ofrecen soporte técnico y capacitación para mi equipo?',
      answer: 'Absolutamente. Todos nuestros planes incluyen soporte técnico continuo ante cualquier duda. Además, para los planes que lo requieran, ofrecemos sesiones de capacitación (onboarding) iniciales para garantizar que todo tu equipo domine la plataforma rápidamente.'
    }
  ]
};

export function FaqSection() {
  return (
    <FAQ 
      title="Preguntas Frecuentes"
      subtitle="Resolvemos tus dudas"
      categories={categories}
      faqData={faqData}
      className="bg-transparent"
    />
  )
}
