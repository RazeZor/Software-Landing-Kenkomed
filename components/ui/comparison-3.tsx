'use client'

import * as React from 'react'
import {
  RiCheckLine,
  RiCloseLine,
  RiArrowRightLine,
  RiSparkling2Line,
} from '@remixicon/react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

export type CellValue = boolean | string

export type Feature = {
  label: string
  subtitle?: string
  values: [CellValue, CellValue, CellValue]
}

export type FeatureGroup = {
  section: string
  features: Feature[]
}

export interface ComparisonBlockProps {
  onSelectPlan?: (slug: string) => void
  isMonthly?: boolean
  className?: string
}

export const kenkomedGroups: FeatureGroup[] = [
  {
    section: 'Enfoque y Público Objetivo',
    features: [
      {
        label: 'Público objetivo y madurez',
        subtitle: 'Diseñado según el momento de tu práctica profesional',
        values: [
          'Kinesiólogo que recién comienza o a domicilio',
          'Consulta privada, duplas o centros en crecimiento',
          'Clínicas consolidadas, centros y policlínicos',
        ],
      },
    ],
  },
  {
    section: 'Equipo y Capacidad',
    features: [
      {
        label: 'Kinesiólogos incluidos',
        subtitle: 'Licencias clínicas activas con firma profesional',
        values: [
          '1 Profesional',
          'Hasta 2 Cuentas (Titular + Reemplazo o Socio)',
          'Hasta 4 Profesionales (+UF 0,3 por extra)',
        ],
      },
      {
        label: 'Límite de Pacientes registrados',
        values: ['100 Pacientes', 'Ilimitados', 'Ilimitados'],
      },
      {
        label: 'Modalidad de Centro en Onboarding',
        values: ['Individual (Unipersonal)', 'Centro Compartido Activo', 'Centro Compartido Activo'],
      },
      {
        label: 'Cuenta para Secretaría / Recepción',
        subtitle: 'Acceso para recepcionista sin alterar fichas médicas',
        values: [false, 'Incluida (Paso 4 del onboarding)', 'Incluida (Multiusuario recepción)'],
      },
      {
        label: 'Multi-Sede / Sucursales Físicas',
        subtitle: 'Gestión unificada de múltiples direcciones clínicas',
        values: [false, false, 'Exclusivo Clínica'],
      },
    ],
  },
  {
    section: 'Atención y Ficha Clínica',
    features: [
      {
        label: 'Ficha Kinesiológica Digital (SOAP)',
        subtitle: 'Anamnesis, evoluciones y antecedentes históricos',
        values: [true, true, true],
      },
      {
        label: 'Gestión Multi-Box Simultánea',
        subtitle: 'Atención paralela en diferentes boxes o camillas',
        values: ['Libre (Boxes ilimitados)', 'Libre (Boxes ilimitados)', 'Libre (Boxes ilimitados)'],
      },
      {
        label: 'Pautas de Ejercicios en Casa',
        subtitle: 'Prescripción digital con dosificación y series',
        values: ['Libre e ilimitado', 'Libre e ilimitado', 'Libre e ilimitado'],
      },
      {
        label: 'Envío por WhatsApp y PDF',
        subtitle: 'Despacho directo al celular del paciente en 1 clic',
        values: [true, true, true],
      },
      {
        label: 'Catálogo Clínico de Ejercicios',
        subtitle: 'Biblioteca médica ilustrada por región anatómica',
        values: [true, true, true],
      },
    ],
  },
  {
    section: 'Agenda y Reservas de Horas',
    features: [
      {
        label: 'Agenda Interna de Turnos',
        subtitle: 'Organización privada de citas y sobrecupos',
        values: ['Incluida (tú anotas tus horas)', 'Incluida (compartida entre kines)', 'Incluida (con vista de secretaria)'],
      },
      {
        label: 'Web Pública de Agendamiento 24/7',
        subtitle: 'Portal web propio para captar reservas automáticas',
        values: [
          false,
          'Página web propia (/reservar/tu-nombre/)',
          'Página web propia y del centro (/reservar/centro/ID/)',
        ],
      },
      {
        label: 'Auto-Agendamiento de Pacientes',
        subtitle: 'Los pacientes reservan día y hora desde su celular',
        values: [false, true, true],
      },
    ],
  },
  {
    section: 'Admisión Remota (QR)',
    features: [
      {
        label: 'Anamnesis Remota con Código QR',
        subtitle: 'Cuestionario previo que el paciente llena antes de entrar',
        values: ['Tope 20 envíos / mes', 'Ilimitadas', 'Ilimitadas'],
      },
      {
        label: 'Formulario de Sala de Espera',
        subtitle: 'QR impreso en mesón de recepción para pacientes en sala',
        values: [true, true, true],
      },
    ],
  },
  {
    section: 'Marca y Personalización',
    features: [
      {
        label: 'Branding Propio / Logo Personalizado',
        subtitle: 'Tu identidad en pautas, informes y portal web',
        values: [
          'Estándar KenkoMed',
          'Tu Logo en Informes y Fichas',
          'Logo de la Clínica en todo el sistema',
        ],
      },
      {
        label: 'Color y Presencia en Portal',
        values: ['Estándar', 'Personalizado', 'Personalizado con logo del Centro'],
      },
    ],
  },
  {
    section: 'Gestión Comercial y Cobros',
    features: [
      {
        label: 'Control de Pagos y Deudas',
        subtitle: 'Registro de cobros con RUT de paciente para boleta SII',
        values: [false, 'Módulo de Pagos y Abonos', 'Módulo de Pagos y Abonos'],
      },
      {
        label: 'Control de Packs de Sesiones',
        subtitle: 'Bonos de 5 o 10 sesiones con descuento por asistencia',
        values: [false, 'Packs de 5/10 sesiones con saldo', 'Packs compartidos entre kines'],
      },
    ],
  },
  {
    section: 'Informes y Analítica Médica',
    features: [
      {
        label: 'Informes Médicos DSS (Gráficos)',
        subtitle: 'Curvas de evolución del dolor y escalas validadas para derivadores',
        values: [false, 'Informes Pro para Traumatólogos', 'Informes Pro para Traumatólogos'],
      },
      {
        label: 'Dashboard Gerencial / Ingresos',
        subtitle: 'Métricas de ocupación, facturación y rendimiento de boxes',
        values: [false, false, 'Métricas de ocupación, facturación y boxes'],
      },
    ],
  },
  {
    section: 'Cumplimiento Legal (Chile)',
    features: [
      {
        label: 'Exportación ARCO (Ley 21.719)',
        subtitle: 'Protección de datos personales y derechos del paciente',
        values: [true, true, true],
      },
      {
        label: 'Auditoría de Accesos en PDF',
        subtitle: 'Bitácora inalterable lista para fiscalizaciones SEREMI',
        values: ['Descarga Oficial SEREMI', 'Descarga Oficial SEREMI', 'Descarga Oficial SEREMI'],
      },
      {
        label: 'Trazabilidad y Firma (Ley 20.584)',
        subtitle: 'Consentimiento informado digital y deberes y derechos del paciente',
        values: [true, true, true],
      },
    ],
  },
]

function Cell({
  value,
  highlighted,
}: {
  value: CellValue
  highlighted: boolean
}) {
  if (typeof value === 'boolean') {
    return value ? (
      <span
        className={cn(
          'mx-auto flex size-5 shrink-0 items-center justify-center rounded-sm',
          highlighted ? 'bg-primary' : 'bg-foreground/80'
        )}
      >
        <RiCheckLine
          className={cn(
            'size-3.5',
            highlighted ? 'text-primary-foreground' : 'text-background'
          )}
          aria-hidden
        />
        <span className="sr-only">Incluido</span>
      </span>
    ) : (
      <span className="mx-auto flex size-5 shrink-0 items-center justify-center rounded-sm bg-muted">
        <RiCloseLine className="size-3.5 text-muted-foreground" aria-hidden />
        <span className="sr-only">No incluido</span>
      </span>
    )
  }

  return (
    <span
      className={cn(
        'text-xs font-medium leading-relaxed block whitespace-normal break-words text-center px-1',
        highlighted ? 'text-foreground font-semibold' : 'text-muted-foreground'
      )}
    >
      {value}
    </span>
  )
}

export default function ComparisonBlock({
  onSelectPlan,
  isMonthly = false,
  className,
}: ComparisonBlockProps) {
  const plans = [
    {
      slug: 'individual',
      name: 'Plan Individual',
      price: isMonthly ? 'UF 0,5' : 'UF 0,4',
      cadence: isMonthly ? 'Aprox. $19.000 CLP / mes' : 'Aprox. $15.000 CLP / mes',
      highlighted: false,
      cta: 'Pedir Demo',
    },
    {
      slug: 'clinico-pro',
      name: 'Plan Clínico Pro',
      price: isMonthly ? 'UF 0,9' : 'UF 0,7',
      cadence: isMonthly ? 'Aprox. $34.000 CLP / mes' : 'Aprox. $26.000 CLP / mes',
      highlighted: true,
      cta: 'Elegir Plan',
    },
    {
      slug: 'clinica',
      name: 'Plan Clínica / Centro',
      price: isMonthly ? 'UF 1,4' : 'UF 1,1',
      cadence: isMonthly ? 'Aprox. $53.000 CLP / mes' : 'Aprox. $41.000 CLP / mes',
      highlighted: false,
      cta: 'Cotizar Centro',
    },
  ] as const

  return (
    <section className={cn('flex w-full justify-center bg-background px-4 sm:px-6 py-12 text-foreground', className)}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <Badge variant="outline" className="mb-3 border-brand/30 text-brand">
            <RiSparkling2Line className="mr-1.5 size-3.5" aria-hidden />
            Comparativa de Planes
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display text-foreground">
            Elige el plan ideal para tu práctica clínica
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Planes diseñados específicamente para kinesiólogos y clínicas en Chile. Sin límites ocultos ni cobros sorpresa.
          </p>
        </div>

        <div className="relative rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <Badge
            variant="default"
            className="absolute top-2 right-4 sm:top-3 sm:right-6 z-20 bg-brand text-white text-[11px] font-bold"
          >
            Recomendado
          </Badge>
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[880px] table-fixed text-sm">
              <TableHeader>
                <TableRow className="hover:bg-transparent border-b border-border">
                  <TableHead className="sticky top-0 z-20 w-[31%] min-w-[240px] border-b border-border bg-background align-bottom p-4">
                    <span className="inline-block text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      Características
                    </span>
                  </TableHead>
                  {plans.map((plan) => (
                    <TableHead
                      key={plan.name}
                      className={cn(
                        'sticky top-0 z-20 w-[23%] min-w-[200px] border-b border-border text-center align-bottom p-4',
                        plan.highlighted ? 'bg-primary/5' : 'bg-background'
                      )}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-bold text-foreground">
                          {plan.name}
                        </span>
                        <span className="text-xl font-extrabold text-foreground">
                          {plan.price}
                          <span className="text-xs font-normal text-muted-foreground ml-1">/ mes</span>
                        </span>
                        <span className="text-xs font-normal text-muted-foreground">
                          {plan.cadence}
                        </span>
                      </div>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody>
                {kenkomedGroups.map((group) => (
                  <React.Fragment key={group.section}>
                    <TableRow className="bg-muted/40 hover:bg-muted/40 border-t border-border">
                      <TableCell
                        colSpan={4}
                        className="py-2.5 px-4 text-xs font-bold tracking-wider text-foreground uppercase whitespace-normal"
                      >
                        {group.section}
                      </TableCell>
                    </TableRow>
                    {group.features.map((feature) => (
                      <TableRow key={`${group.section}-${feature.label}`} className="border-b border-border/50">
                        <TableCell className="py-3 px-4 font-medium text-foreground text-xs whitespace-normal break-words align-middle">
                          <div className="font-semibold text-foreground text-xs leading-snug">{feature.label}</div>
                          {feature.subtitle && (
                            <div className="text-[11px] text-muted-foreground font-normal mt-0.5 leading-snug">
                              {feature.subtitle}
                            </div>
                          )}
                        </TableCell>
                        {feature.values.map((value, i) => (
                          <TableCell
                            key={`${feature.label}-${plans[i].name}`}
                            className={cn(
                              'py-3 px-3 text-center align-middle whitespace-normal break-words',
                              plans[i].highlighted && 'bg-primary/5'
                            )}
                          >
                            <Cell
                              value={value}
                              highlighted={plans[i].highlighted}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}

                <TableRow className="hover:bg-transparent border-t border-border bg-muted/20">
                  <TableCell className="py-4 px-4 text-xs text-muted-foreground">
                    Demostración guiada sin costo en todos los planes
                  </TableCell>
                  {plans.map((plan) => (
                    <TableCell
                      key={`cta-${plan.name}`}
                      className={cn(
                        'py-4 px-4 text-center',
                        plan.highlighted && 'bg-primary/5'
                      )}
                    >
                      <Button
                        size="sm"
                        variant={plan.highlighted ? 'default' : 'secondary'}
                        className={cn(
                          'w-full text-xs font-semibold cursor-pointer',
                          plan.highlighted && 'bg-brand text-white hover:bg-brand-dark'
                        )}
                        onClick={() => onSelectPlan?.(plan.slug)}
                      >
                        {plan.cta}
                        <RiArrowRightLine className="ml-1 size-3.5" aria-hidden />
                      </Button>
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}
