'use client'

import dynamic from 'next/dynamic'

const VirtualAssistant = dynamic(
  () => import('@/components/virtual-assistant').then((m) => m.VirtualAssistant),
  { ssr: false }
)

export function VirtualAssistantLazy() {
  return <VirtualAssistant />
}
