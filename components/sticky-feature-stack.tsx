'use client'

import Link from 'next/link'
import { ArrowRight, Check, ExternalLink } from 'lucide-react'

interface StackBullet {
  title: string
  description: string
}

interface StackCard {
  id: string
  kicker: string
  title: string
  description: string
  bullets: StackBullet[]
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  phoneImage?: string
  phoneAlt?: string
  secondaryHref?: string
  secondaryLabel?: string
  secondaryExternal?: boolean
}

const STACK_CARDS: StackCard[] = [
  {
    id: 'admision-remota',
    kicker: 'Etapa 01 · Admisión remota',
    title: 'Cada paciente llega al box con su anamnesis ya completa.',
    description:
      'Comparte un código QR o enlace por WhatsApp y el paciente responde su anamnesis de 14 páginas, mapa corporal y antecedentes desde su celular, antes de la cita.',
    bullets: [
      {
        title: 'Enlace de un solo uso',
        description: 'Cada QR o enlace queda asociado a una única ficha clínica.',
      },
      {
        title: 'Datos estructurados desde el inicio',
        description: 'Antecedentes, mapa de dolor y banderas rojas llegan listos a la ficha.',
      },
      {
        title: 'Menos digitación en box',
        description: 'El kinesiólogo revisa y valida en lugar de transcribir.',
      },
    ],
    image: '/software/formulario_remoto.png',
    imageAlt: 'Formulario de admisión remota de Kenkomed completado por el paciente',
    imageWidth: 1261,
    imageHeight: 479,
    phoneImage: '/software/anamnesisphone_clean.png',
    phoneAlt: 'Anamnesis remota de Kenkomed en el celular del paciente',
    secondaryHref: '/funcionalidades',
    secondaryLabel: 'Ver todas las funcionalidades',
  },
  {
    id: 'evaluacion-funcional',
    kicker: 'Etapa 02 · Evaluación funcional',
    title: '13 escalas validadas con puntaje y alertas automáticas.',
    description:
      'Aplica EVA, PSFS, Oswestry, DASH, LEFS, WOMAC, Barthel, Berg, TUG y más. El sistema calcula el puntaje y lo compara contra el cambio mínimo clínicamente importante.',
    bullets: [
      {
        title: 'Cálculo automático de puntajes',
        description: 'Sin planillas ni errores de suma, con gráficos sesión a sesión.',
      },
      {
        title: 'Algoritmo DSS basado en reglas',
        description: 'Destaca banderas rojas y amarillas para apoyar tu juicio clínico.',
      },
      {
        title: 'Respaldo en literatura',
        description: 'Cada escala referencia su publicación original en PubMed.',
      },
    ],
    image: '/software/DSS.png',
    imageAlt: 'Panel de soporte a la decisión clínica de Kenkomed con escalas validadas',
    imageWidth: 841,
    imageHeight: 842,
    phoneImage: '/software/estadisticasphone_clean.png',
    phoneAlt: 'Estadísticas y fenotipo conductual del paciente en Kenkomed móvil',
    secondaryHref: '/investigacion',
    secondaryLabel: 'Ver el respaldo científico',
  },
  {
    id: 'ficha-soap',
    kicker: 'Etapa 03 · Ficha y evolución SOAP',
    title: 'Evoluciones SOAP ordenadas en una sola ficha longitudinal.',
    description:
      'Registra cada sesión en formato SOAP y mantén evaluaciones, objetivos y diagnóstico kinésico vinculados al mismo expediente del paciente.',
    bullets: [
      {
        title: 'Historial completo por paciente',
        description: 'Sesiones, escalas y objetivos en un solo lugar, sin carpetas sueltas.',
      },
      {
        title: 'Acceso por roles',
        description: 'Recepción gestiona agenda y pagos sin acceso a notas clínicas.',
      },
      {
        title: 'Trazabilidad de accesos',
        description: 'Registro de quién consultó o modificó cada ficha.',
      },
    ],
    image: '/software/ficha_clinica.png',
    imageAlt: 'Ficha clínica electrónica de Kenkomed con evolución por sesión',
    imageWidth: 772,
    imageHeight: 499,
    phoneImage: '/software/sesionphone_clean.png',
    phoneAlt: 'Registro de sesión de Kenkomed en el celular del kinesiólogo',
    secondaryHref: '/seguridad',
    secondaryLabel: 'Ver seguridad y cumplimiento',
  },
  {
    id: 'pautas-ejercicios',
    kicker: 'Etapa 04 · Prescripción de ejercicios',
    title: 'La pauta de ejercicios llega al WhatsApp del paciente en 1 clic.',
    description:
      'Arma rutinas desde el catálogo anatómico con series, repeticiones y carga, y envía el PDF membretado directo a WhatsApp o correo.',
    bullets: [
      {
        title: 'Catálogo anatómico',
        description: 'Ejercicios organizados por región para prescribir más rápido.',
      },
      {
        title: 'Dosificación clínica clara',
        description: 'Series, repeticiones y carga quedan registradas en la ficha.',
      },
      {
        title: 'Mejor adherencia entre sesiones',
        description: 'El paciente conserva su pauta en el celular.',
      },
    ],
    image: '/software/Objetivos_y_prescripcion.png',
    imageAlt: 'Catálogo de prescripción de ejercicios y objetivos terapéuticos de Kenkomed',
    imageWidth: 903,
    imageHeight: 527,
    secondaryHref: '/funcionalidades',
    secondaryLabel: 'Ver prescripción en detalle',
  },
  {
    id: 'agenda-reservas',
    kicker: 'Etapa 05 · Agenda y reservas online',
    title: 'Agenda multi-box con reserva online para tus pacientes.',
    description:
      'Cada profesional tiene su portal público de reservas, y el centro coordina boxes y gimnasio sin cruces de horario.',
    bullets: [
      {
        title: 'Portal de reserva propio',
        description: 'Tus pacientes agendan de forma autónoma desde un enlace público.',
      },
      {
        title: 'Bloqueo de horarios',
        description: 'Evita cruces entre profesionales y boxes en la misma franja.',
      },
      {
        title: 'Control de packs de sesiones',
        description: 'Descuenta cada sesión asistida y avisa cuando toca renovar.',
      },
    ],
    image: '/software/panel.png',
    imageAlt: 'Panel de agenda y gestión clínica de Kenkomed',
    imageWidth: 1901,
    imageHeight: 951,
    phoneImage: '/software/agendaphone_clean.png',
    phoneAlt: 'Agenda de Kenkomed en el celular',
    secondaryHref: 'https://app.kenkomed.cl/reservar/daniela-huichalaf/',
    secondaryLabel: 'Ver un portal de reservas real',
    secondaryExternal: true,
  },
  {
    id: 'cobros-informes',
    kicker: 'Etapa 06 · Cobros, informes y alta',
    title: 'Pagos, packs e informes listos para Isapre y médicos.',
    description:
      'Registra pagos, controla saldos y emite el detalle de sesiones con códigos FONASA y el informe de alta con la evolución de tus escalas.',
    bullets: [
      {
        title: 'Pagos y saldos por paciente',
        description: 'Sabes qué se pagó, qué se usó y qué queda pendiente.',
      },
      {
        title: 'Detalle de sesiones para reembolso',
        description: 'Fechas y códigos FONASA para tramitar con Isapres y seguros.',
      },
      {
        title: 'Informe de alta en PDF',
        description: 'Evolución de escalas lista para entregar al médico derivador.',
      },
    ],
    image: '/software/pagos_foto.png',
    imageAlt: 'Módulo de pagos y control de sesiones de Kenkomed',
    imageWidth: 1229,
    imageHeight: 595,
    phoneImage: '/software/historialphone_clean.png',
    phoneAlt: 'Historial del paciente en Kenkomed móvil',
    secondaryHref: '/precios',
    secondaryLabel: 'Ver planes y precios',
  },
]

/* Fotos de fondo de kinesiólogos / rehabilitación (Unsplash) */
const BG_PHOTOS: Record<string, string> = {
  'admision-remota': 'photo-1576091160550-2173dba999ef',
  'evaluacion-funcional': 'photo-1584515979956-d9f6e5d09982',
  'ficha-soap': 'photo-1579684385127-1ef15d508118',
  'pautas-ejercicios': 'photo-1571019613454-1cb2f99b2d8b',
  'agenda-reservas': 'photo-1519494026892-80bbd2d6fd0d',
  'cobros-informes': 'photo-1516549655169-df83a0774514',
}
const bgUrl = (id: string) =>
  `https://images.unsplash.com/${BG_PHOTOS[id]}?auto=format&fit=crop&w=2200&q=85`

/* Animación nativa por scroll: cada tarjeta se "aleja" levemente cuando la
   siguiente sube a cubrirla. Es decorativa → mejora progresiva, sin fallback JS. */
const timelineNames = STACK_CARDS.slice(1).map((_, i) => `--kk-${i + 1}`)

const stackCss = `
  .kk-stack {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .kk-card {
    transform-origin: 50% 0;
  }
  @media (min-width: 1024px) {
    .kk-stack {
      gap: 14vh;
      padding-bottom: 4vh;
    }
    .kk-slot {
      position: sticky;
      top: calc(6rem + var(--kk-i, 0) * 0.875rem);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    @supports ((animation-timeline: view()) and (animation-range: entry)) {
      @media (min-width: 1024px) {
        @keyframes kk-recede {
          to { scale: 0.94; }
        }
        .kk-stack {
          timeline-scope: ${timelineNames.join(', ')};
        }
        ${STACK_CARDS.slice(1)
          .map(
            (_, i) => `
        .kk-slot:nth-child(${i + 2}) { view-timeline: --kk-${i + 1} block; }
        .kk-slot:nth-child(${i + 1}) .kk-card {
          animation: kk-recede linear both;
          animation-timeline: --kk-${i + 1};
          animation-range: entry 0% entry 100%;
        }`
          )
          .join('')}
      }
    }
  }
`

export function StickyFeatureStack() {
  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <style>{stackCss}</style>

      <div className="kk-stack">
        {STACK_CARDS.map((card, index) => (
          <div
            key={card.id}
            className="kk-slot"
            style={{ ['--kk-i' as string]: index } as React.CSSProperties}
          >
            <article
              aria-labelledby={`kk-title-${card.id}`}
              className="kk-card kenko-band-deep relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 shadow-[0_30px_70px_-30px_rgba(5,17,30,0.55)] grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] min-h-[34rem] lg:min-h-[38rem]"
            >
              {/* Foto de fondo de kinesiología */}
              <img
                src={bgUrl(card.id)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(100deg, rgba(5,17,30,0.97) 0%, rgba(10,35,64,0.92) 42%, rgba(10,35,64,0.55) 100%)',
                }}
              />
              {/* Columna de texto */}
              <div className="relative z-10 flex flex-col justify-center gap-7 p-7 sm:p-11 lg:p-14">
                <div className="space-y-4">
                  <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[var(--kenko-pulse)]"
                      aria-hidden="true"
                    />
                    {card.kicker}
                  </p>

                  <h3
                    id={`kk-title-${card.id}`}
                    className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.08] tracking-tight text-balance"
                  >
                    {card.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0a2340] transition-colors hover:bg-slate-100"
                    >
                      Agendar demo gratuita
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>

                    {card.secondaryHref &&
                      (card.secondaryExternal ? (
                        <a
                          href={card.secondaryHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white underline-offset-4 hover:underline"
                        >
                          {card.secondaryLabel}
                          <ExternalLink size={13} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          href={card.secondaryHref}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-white underline-offset-4 hover:underline"
                        >
                          {card.secondaryLabel}
                          <ArrowRight size={13} aria-hidden="true" />
                        </Link>
                      ))}
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] leading-relaxed text-white/70 max-w-xl">
                  {card.description}
                </p>

                <ul className="space-y-3.5">
                  {card.bullets.map((bullet) => (
                    <li key={bullet.title} className="flex items-start gap-3">
                      <Check
                        size={16}
                        strokeWidth={2.5}
                        className="mt-0.5 shrink-0 text-[var(--kenko-pulse)]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white leading-snug">
                          {bullet.title}
                        </p>
                        <p className="text-[13px] leading-relaxed text-white/60">
                          {bullet.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna visual con capturas reales del software */}
              <div
                className="relative z-10 flex items-center justify-center overflow-hidden p-5 sm:p-8 lg:p-11 min-h-[20rem]"
              >
                <div className="relative w-full">
                  <div className="overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
                    <div
                      className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2"
                      aria-hidden="true"
                    >
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                    </div>
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      width={card.imageWidth}
                      height={card.imageHeight}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full object-cover object-left-top"
                    />
                  </div>

                  {card.phoneImage && (
                    <div className="absolute -bottom-4 -right-1 w-[27%] sm:-right-3 overflow-hidden rounded-[1.1rem] border-[3px] border-slate-900 bg-slate-900 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)]">
                      <img
                        src={card.phoneImage}
                        alt={card.phoneAlt ?? ''}
                        width={739}
                        height={1415}
                        loading="lazy"
                        decoding="async"
                        className="block h-auto w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  )
}
