'use client'

import { InteractiveSystemDemo } from '@/components/interactive-system-demo'

export function SolucionTeaser() {
  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground text-center text-balance">
          De la admisión al alta en un solo flujo clínico
        </h2>
        <p className="text-foreground-muted text-center max-w-2xl mx-auto mb-14 text-balance text-base md:text-lg">
          Cada etapa del tratamiento kinésico — admisión remota, evaluación funcional, evolución SOAP y alta médica — conectada sin duplicar datos.
        </p>
        <InteractiveSystemDemo />
      </div>
    </section>
  )
}

export function ProductShowcase() {
  return null
}

export function Features() {
  return null
}
