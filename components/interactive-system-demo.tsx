'use client'

import React from 'react'
import { DemoFeatures } from '@/components/blocks/demo-features'
import { StickyFeatureStack } from '@/components/sticky-feature-stack'

export function InteractiveSystemDemo() {
  return (
    <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-24">
      <DemoFeatures />

      <div className="w-full pt-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
            De la admisión al alta en un solo flujo clínico.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-foreground-muted text-balance md:text-lg">
            Recorre paso a paso las 6 etapas del sistema kinésico: cada tarjeta se apila al hacer scroll mostrando la operación real de tu consulta.
          </p>
        </div>

        <StickyFeatureStack />
      </div>
    </div>
  )
}
