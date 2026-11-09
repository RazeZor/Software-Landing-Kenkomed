'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, CalendarCheck } from 'lucide-react'

export function DemoFeatures() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative z-10 grid grid-cols-6 gap-5">
        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-border bg-card shadow-xs">
          <CardContent className="pt-6 flex flex-col h-full">
            <div className="relative w-full h-44 rounded-xl border border-border/80 bg-surface overflow-hidden">
              <img
                src="/software/anamnesisphone_clean.png"
                alt="Interfaz de admisión remota y mapa corporal en Kenkomed"
                width={320}
                height={240}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-lg font-display font-bold text-foreground">Admisión Remota por QR</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                El paciente completa su anamnesis de 14 páginas, mapa de dolor y antecedentes desde su celular antes de entrar al box.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-border bg-card shadow-xs">
          <CardContent className="pt-6 flex flex-col h-full">
            <div className="relative w-full h-44 rounded-xl border border-border/80 bg-surface overflow-hidden">
              <img
                src="/software/DSS.png"
                alt="Panel de soporte a la decisión clínica y escalas validadas en Kenkomed"
                width={380}
                height={240}
                loading="lazy"
                className="w-full h-full object-cover object-left-top"
              />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-lg font-display font-bold text-foreground">Alertas Clínicas y Banderas Rojas</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Sistema de soporte a la decisión (DSS) que destaca signos de alarma, comorbilidades y puntajes de 13 escalas al instante.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="relative col-span-full overflow-hidden sm:col-span-6 lg:col-span-2 border-border bg-card shadow-xs">
          <CardContent className="pt-6 flex flex-col h-full">
            <div className="relative w-full h-44 rounded-xl border border-border/80 bg-surface overflow-hidden">
              <img
                src="/software/Objetivos_y_prescripcion.png"
                alt="Catálogo anatómico de prescripción de ejercicios en Kenkomed"
                width={380}
                height={240}
                loading="lazy"
                className="w-full h-full object-cover object-left-top"
              />
            </div>
            <div className="mt-5 space-y-2">
              <h3 className="text-lg font-display font-bold text-foreground">Pautas de Ejercicios en PDF</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Catálogo anatómico con dosificación clínica (series, repeticiones y carga) y envío en 1 clic a WhatsApp o correo.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-border bg-card shadow-xs">
          <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col justify-center space-y-3">
              <div className="flex size-12 rounded-xl border border-brand/20 bg-brand/10 text-brand items-center justify-center">
                <Shield className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">Trazabilidad y Seguridad Clínica</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Consentimiento informado digital, historial de accesos por rol y bloqueo automático de pantalla en box.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-5 flex flex-col justify-center">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold text-foreground bg-card p-2.5 rounded-lg border border-border">
                  <span>Historial de Accesos</span>
                  <span className="text-emerald font-bold">Fecha, hora y rol</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-foreground bg-card p-2.5 rounded-lg border border-border">
                  <span>Ficha e Informes</span>
                  <span className="text-brand font-bold">Exportación PDF</span>
                </div>
                <div className="flex items-center justify-between text-xs font-semibold text-foreground bg-card p-2.5 rounded-lg border border-border">
                  <span>Privacidad en Box</span>
                  <span className="text-foreground font-bold">Bloqueo automático</span>
                </div>
              </div>
              <div className="mt-3.5 flex items-center justify-between border-t border-border pt-2.5">
                <span className="text-xs font-semibold text-foreground-muted">Marco normativo</span>
                <span className="text-xs font-bold text-emerald">Ley 20.584 y 21.719</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-border bg-card shadow-xs">
          <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col justify-center space-y-3">
              <div className="flex size-12 rounded-xl border border-brand/20 bg-brand/10 text-brand items-center justify-center">
                <CalendarCheck className="size-6" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground">Agenda Multi-Box Sincronizada</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Coordina atención simultánea en múltiples boxes y gimnasio con portal de reserva online y control de packs.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-3 rounded-xl border border-border bg-surface p-5">
              <div className="rounded-lg border border-border bg-card p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">Box 1: Gimnasio Terapéutico</span>
                  <span className="text-xs bg-emerald/15 text-emerald font-bold px-2 py-0.5 rounded-full">En sesión</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground">Box 2: Evaluación / Camilla</span>
                  <span className="text-xs bg-brand/10 text-brand font-bold px-2 py-0.5 rounded-full">Disponible</span>
                </div>
              </div>
              <p className="text-xs text-foreground-muted">
                Bloqueo atómico de horarios para evitar cruces entre profesionales y boxes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
