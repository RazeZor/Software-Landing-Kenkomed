'use client'

import { Users, Tag, CalendarCheck, ClipboardList } from 'lucide-react'

const steps = [
  {
    number: '01',
    text: (
      <>
        Nos compartes tus <strong className="font-semibold text-foreground">planillas o acceso</strong> a tu sistema actual
      </>
    ),
  },
  {
    number: '02',
    text: (
      <>
        <strong className="font-semibold text-foreground">Importamos</strong> pacientes, prestaciones, fichas y agenda
      </>
    ),
  },
  {
    number: '03',
    text: (
      <>
        Tu consulta o centro <strong className="font-semibold text-foreground">queda operando en Kenkomed</strong>
      </>
    ),
  },
]

const items = [
  {
    icon: Users,
    title: 'Base de pacientes:',
    description: 'Nombres, RUT, teléfonos, correo e historial',
  },
  {
    icon: Tag,
    title: 'Catálogo de prestaciones:',
    description: 'Evaluaciones, sesiones y packs con su valor',
  },
  {
    icon: CalendarCheck,
    title: 'Agenda y horas futuras:',
    description: 'Sin perder ninguna cita ni disponibilidad por box',
  },
  {
    icon: ClipboardList,
    title: 'Packs, saldos y escalas:',
    description: 'Sesiones pendientes, controles y fichas previas',
  },
]

export function MigrationSection() {
  return (
    <section
      id="migracion"
      aria-labelledby="migration-heading"
      className="py-20 md:py-24 px-6 bg-surface/60 border-y border-border/60"
    >
      <div className="max-w-5xl mx-auto">
        {/* Encabezado estandarizado */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/6 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
            Implementación guiada sin costo
          </p>
          <h2
            id="migration-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.024em] leading-[1.12] text-foreground text-balance"
          >
            Nosotros nos encargamos de tu migración gratis.
          </h2>
          <p className="mt-3.5 text-base sm:text-[1.0625rem] text-foreground-muted leading-relaxed">
            ¿Ya usas otro software, fichas en papel o planillas Excel? Nuestro equipo te acompaña para traspasar tu información y dejar tu consulta funcionando sin fricción.
          </p>
        </div>

        {/* Línea de tiempo horizontal en 3 pasos (estilo referencia) */}
        <div className="relative mb-14">
          {/* Conectores discontinuos entre círculos en desktop */}
          <div
            aria-hidden="true"
            className="hidden md:grid grid-cols-3 items-center absolute top-7 inset-x-0 px-[16.666%] pointer-events-none"
          >
            <div className="col-span-3 flex items-center justify-between gap-10">
              <div className="flex flex-1 items-center">
                <span className="h-2 w-2 rounded-full bg-emerald shrink-0" />
                <div className="flex-1 border-t-2 border-dashed border-emerald/75 mx-1" />
                <span className="h-2 w-2 rounded-full bg-emerald shrink-0" />
              </div>
              <div className="flex flex-1 items-center">
                <span className="h-2 w-2 rounded-full bg-emerald shrink-0" />
                <div className="flex-1 border-t-2 border-dashed border-emerald/75 mx-1" />
                <span className="h-2 w-2 rounded-full bg-emerald shrink-0" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white font-display text-lg font-extrabold shadow-sm ring-4 ring-surface">
                  {step.number}
                </div>
                <p className="mt-4 max-w-[16rem] text-sm text-foreground-muted leading-snug">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 tarjetas inferiores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-white/80 p-5 shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-sm font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-foreground-muted leading-snug">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
