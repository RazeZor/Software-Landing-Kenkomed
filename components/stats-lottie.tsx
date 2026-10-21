'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
)

export interface StatsLottieProps {
  className?: string
  style?: React.CSSProperties
  loop?: boolean
  autoplay?: boolean
}

export function StatsLottie({
  className = '',
  style,
  loop = true,
  autoplay = true,
}: StatsLottieProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        style={style}
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      style={style}
    >
      <DotLottieReact
        src="/images/stats.lottie"
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default StatsLottie
