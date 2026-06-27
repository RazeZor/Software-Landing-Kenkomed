'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PlatformOverview } from '@/components/platform-overview'
import { FeaturesComplete } from '@/components/features-complete'
import { QRAdmission } from '@/components/qr-admission'
import { StatsMonitor } from '@/components/stats-monitor'
import { SectionEyebrow } from '@/components/brand-elements'

export function FuncionalidadesContent() {
  return (
    <>
      <Navbar />
      <main>
        <div className="kenko-band-deep pt-32 pb-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionEyebrow light>Producto</SectionEyebrow>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-on-brand mb-4 text-balance">
              Todo lo que Kenkomed puede hacer por tu clínica
            </h1>
            <p className="text-on-brand-muted leading-relaxed mb-8">
              Detalle de plataforma, módulos clave y listado completo de funcionalidades.
              Ideal si ya viste la landing y quieres profundizar antes de solicitar una demo.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-on-brand-subtle hover:text-on-brand transition-colors"
            >
              <ArrowLeft size={14} />
              Volver al inicio
            </Link>
          </div>
        </div>

        <PlatformOverview />
        <QRAdmission />
        <StatsMonitor />
        <FeaturesComplete />

        <section className="py-16 kenko-band-mist">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4">
              ¿Listo para verlo en acción?
            </h2>
            <p className="text-foreground-muted mb-8">
              Agenda una demo gratuita o explora la solución completa desde la perspectiva del
              kinesiólogo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#contact" className="btn-kenko-primary group">
                Solicitar demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/solucion" className="btn-kenko-ghost text-sm">
                Ver nuestra solución
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
