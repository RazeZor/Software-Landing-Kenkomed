'use client'

import React from 'react'
import { DemoFeatures } from '@/components/blocks/demo-features'
import { StickyFeatureStack } from '@/components/sticky-feature-stack'

export function InteractiveSystemDemo() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20">
      <DemoFeatures />

      <div className="w-full pt-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/6 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
            Recorrido paso a paso · 7 etapas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.024em] leading-[1.12] text-foreground text-balance">
            De la admisión al alta en un solo flujo clínico.
          </h2>
          <p className="mx-auto mt-3.5 max-w-2xl text-base sm:text-[1.0625rem] leading-relaxed text-foreground-muted">
            Recorre paso a paso las 7 etapas del sistema kinésico, desde el primer envío por WhatsApp hasta el alta clínica y control de pagos.
          </p>
        </div>

        <StickyFeatureStack />
      </div>
    </div>
  )
}
