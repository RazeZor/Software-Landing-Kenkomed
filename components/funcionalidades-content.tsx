'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Layers, QrCode, BarChart3, ListChecks } from 'lucide-react'
import { Footer } from '@/components/footer'
import { PlatformOverview } from '@/components/platform-overview'
import { FeaturesComplete } from '@/components/features-complete'
import { QRAdmission } from '@/components/qr-admission'
import { StatsMonitor } from '@/components/stats-monitor'

const quickJumpLinks = [
  { href: '#plataforma', label: 'Ecosistema (9 áreas)', icon: Layers },
  { href: '#admision-remota', label: 'Admisión remota QR', icon: QrCode },
  { href: '#monitoreo', label: ' Analítica y DSS', icon: BarChart3 },
  { href: '#funcionalidades', label: 'Catálogo completo (26 módulos)', icon: ListChecks },
]

export function FuncionalidadesContent() {
  return (
    <>
      <main className="bg-background">
        {/* Hero con el mismo lenguaje visual limpio de la página principal */}
        <section
          aria-labelledby="funcionalidades-hero-heading"
          className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 bg-background border-b border-border/60 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Columna izquierda: Tipografía Space Grotesk + Píldora Zafiro + CTAs */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/6 border border-brand/15 text-brand text-xs font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald shrink-0" aria-hidden="true" />
                Arquitectura del producto · 26 módulos y 131 capacidades
              </div>

              <h1
                id="funcionalidades-hero-heading"
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] text-foreground tracking-tight leading-[1.06] mb-5 text-balance"
              >
                Cada módulo diseñado para el{' '}
                <span className="text-brand">flujo clínico kinésico.</span>
              </h1>

              <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-8 max-w-xl">
                Explora cómo Kenkomed conecta la admisión remota por QR, las 13 escalas funcionales,
                el motor de soporte a la decisión (DSS), las pautas por WhatsApp y la agenda
                multi-box en una sola plataforma.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-7">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors"
                >
                  Agendar demo gratuita
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/solucion"
                  className="inline-flex items-center justify-center gap-2 bg-card hover:border-brand hover:text-brand text-foreground font-medium text-sm px-6 py-3.5 rounded-full border border-border transition-colors"
                >
                  Ver flujo clínico paso a paso
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-foreground-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald shrink-0" aria-hidden="true" />
                  13 escalas con cálculo automático
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald shrink-0" aria-hidden="true" />
                  Anamnesis QR de 14 páginas
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-emerald shrink-0" aria-hidden="true" />
                  Alineado con Ley 20.584 y 21.719
                </span>
              </div>
            </div>

            {/* Columna derecha: Vista real del software (Desktop + Móvil) */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-surface border-b border-border">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald/80" />
                  </div>
                  <span className="text-[11px] font-mono text-foreground-muted">
                    app.kenkomed.cl · Panel Clínico y Pacientes
                  </span>
                  <span className="text-[10px] font-semibold text-emerald bg-emerald/10 px-2 py-0.5 rounded-full">
                    En línea
                  </span>
                </div>
                <img
                  src="/software/panel.png"
                  alt="Panel de control clínico de Kenkomed mostrando citas, pacientes activos y sesiones"
                  width={960}
                  height={540}
                  fetchPriority="high"
                  className="w-full h-auto object-cover object-left-top"
                />
              </div>

              {/* Tarjeta flotante con vista móvil de escalas clínicas */}
              <div className="hidden sm:block absolute -bottom-6 -right-4 w-52 rounded-2xl border border-border bg-card p-2 shadow-xl">
                <div className="rounded-xl overflow-hidden border border-border/60 bg-surface">
                  <img
                    src="/software/sesionphone_clean.png"
                    alt="Vista móvil de seguimiento con escala QuickDASH e informes clínicos"
                    width={220}
                    height={360}
                    loading="lazy"
                    className="w-full h-44 object-cover object-top"
                  />
                </div>
                <div className="px-2 pt-2 pb-1">
                  <p className="text-[11px] font-bold text-foreground">Escalas e Informes</p>
                  <p className="text-[10px] text-foreground-muted">Vista móvil en box · Exportación PDF/JSON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de salto rápido a secciones */}
          <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-border/60">
            <nav
              aria-label="Secciones de funcionalidades"
              className="flex flex-wrap items-center justify-between gap-3"
            >
              <span className="text-xs font-semibold text-foreground-muted">
                Ir directamente a:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {quickJumpLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-surface hover:bg-brand/8 text-foreground hover:text-brand border border-border hover:border-brand/30 transition-colors"
                    >
                      <Icon size={14} className="text-brand" aria-hidden="true" />
                      {item.label}
                    </a>
                  )
                })}
              </div>
            </nav>
          </div>
        </section>

        <PlatformOverview />
        <QRAdmission />
        <StatsMonitor />
        <FeaturesComplete />

        {/* Cierre con el mismo diseño limpio de tarjetas de la página principal */}
        <section className="py-20 px-6 bg-surface/60 border-t border-border/60">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-8 sm:p-12 text-center shadow-xs">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 text-balance">
              ¿Listo para evaluar Kenkomed en tu consulta o centro?
            </h2>
            <p className="text-foreground-muted text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Agenda una demostración personalizada de 25 minutos o revisa los planes disponibles
              según el tamaño de tu equipo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors w-full sm:w-auto"
              >
                Agendar demo gratuita
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center justify-center gap-2 bg-surface hover:border-brand hover:text-brand text-foreground font-medium text-sm px-6 py-3.5 rounded-full border border-border transition-colors w-full sm:w-auto"
              >
                Ver planes y precios
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
