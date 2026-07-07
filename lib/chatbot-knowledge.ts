export type ChatAction = {
  label: string
  href?: string
  scrollTo?: string
}

export type ChatReply = {
  content: string
  actions?: ChatAction[]
}

export const QUICK_PROMPTS = [
  { id: 'about', label: '¿Qué es Kenkomed?', prompt: '¿Qué es Kenkomed?' },
  { id: 'features', label: 'Funcionalidades', prompt: '¿Qué funcionalidades incluye?' },
  { id: 'demo', label: 'Ver demo', prompt: 'Quiero ver la demo' },
  { id: 'contact', label: 'Contacto', prompt: 'Quiero contactar a un asesor' },
] as const

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function getBotReply(input: string): ChatReply {
  const text = normalize(input)

  if (/(que es|que hace|kenkomed|software|plataforma)/.test(text)) {
    return {
      content:
        'Kenkomed es software clínico para kinesiólogos y fisioterapeutas. Centraliza fichas, agenda, admisión QR y seguimiento con escalas validadas (EVA, PSFS, Barthel) en un solo panel.',
      actions: [
        { label: 'Ver solución', href: '/solucion' },
        { label: 'Explorar funcionalidades', href: '/funcionalidades' },
      ],
    }
  }

  if (/(funcional|modulo|caracteristica|historial|agenda|admision|qr|reporte|escala)/.test(text)) {
    return {
      content:
        'Incluye admisión remota con QR, historial clínico, gestión de citas, reportes de evolución y monitoreo con cuestionarios estandarizados. Todo pensado para el flujo diario del kinesiólogo.',
      actions: [
        { label: 'Ver funcionalidades', href: '/funcionalidades' },
        { label: 'Ver demo interactiva', href: '/demo' },
      ],
    }
  }

  if (/(demo|probar|mostrar|ver en accion)/.test(text)) {
    return {
      content:
        'Puedes recorrer la demo interactiva del panel o solicitar una presentación personalizada con nuestro equipo.',
      actions: [
        { label: 'Abrir demo', href: '/demo' },
        { label: 'Solicitar demo', href: '/#contact' },
      ],
    }
  }

  if (/(precio|plan|cotiz|costo|valor|tarifa|cuanto)/.test(text)) {
    return {
      content:
        'Los planes se adaptan al tamaño de tu centro. Déjanos tus datos y un asesor te contactará con una propuesta a medida.',
      actions: [
        { label: 'Solicitar cotización', href: '/#contact' },
        { label: 'Ver funcionalidades', href: '/funcionalidades' },
      ],
    }
  }

  if (/(contact|asesor|llamar|escribir|correo|whatsapp|hablar)/.test(text)) {
    return {
      content:
        'Completa el formulario de contacto y te responderemos a la brevedad. También puedes revisar nuestra sección de equipo e investigación.',
      actions: [
        { label: 'Ir al formulario', href: '/#contact' },
        { label: 'Ver equipo', href: '/#team' },
      ],
    }
  }

  if (/(investig|ciencia|evidencia|estudio|validad)/.test(text)) {
    return {
      content:
        'Kenkomed se apoya en evidencia clínica y desarrollo orientado a la práctica kinesiológica en Chile.',
      actions: [{ label: 'Ver investigación', href: '/investigacion' }],
    }
  }

  if (/(privacidad|termino|legal|seguridad|datos|encript)/.test(text)) {
    return {
      content:
        'Protegemos la información clínica con buenas prácticas de seguridad. Puedes revisar nuestras políticas legales en detalle.',
      actions: [
        { label: 'Privacidad', href: '/privacidad' },
        { label: 'Seguridad', href: '/seguridad' },
      ],
    }
  }

  if (/(hola|buenas|buenos|hey|saludos)/.test(text)) {
    return {
      content:
        '¡Hola! Soy el asistente de Kenkomed. Puedo orientarte sobre el software, la demo o cómo contactar al equipo.',
      actions: QUICK_PROMPTS.slice(0, 3).map((p) => ({
        label: p.label,
        href: undefined,
      })),
    }
  }

  if (/(gracias|muchas gracias|genial|perfecto)/.test(text)) {
    return {
      content:
        '¡Con gusto! Si necesitas algo más, escríbeme o usa las opciones rápidas.',
    }
  }

  return {
    content:
      'Puedo ayudarte con información sobre Kenkomed, funcionalidades, demo o contacto. Prueba una de las sugerencias o cuéntame qué necesitas.',
    actions: QUICK_PROMPTS.map((p) => ({ label: p.label })),
  }
}
