'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
)

export function MedicalLottie({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`w-full aspect-square max-w-[400px] flex items-center justify-center rounded-2xl ${className}`}
        aria-hidden="true"
      />
    )
  }

  return (
    <div className={`relative w-full flex items-center justify-center ${className}`}>
      <DotLottieReact
        src="/medical.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%', maxWidth: '440px', maxHeight: '440px' }}
      />
    </div>
  )
}
