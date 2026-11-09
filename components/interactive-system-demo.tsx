'use client'

import React from 'react'
import { DemoFeatures } from '@/components/blocks/demo-features'
import { MgDevLaptopShowcase } from '@/components/mg-dev-laptop-showcase'

export function InteractiveSystemDemo() {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center gap-10">
      <DemoFeatures />
      <MgDevLaptopShowcase />
    </div>
  )
}
