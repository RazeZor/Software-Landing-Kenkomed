'use client'

import React, { useState, useEffect } from 'react'
import UseAnimations from 'react-useanimations'

interface AnimatedIconProps {
  animation: any
  size?: number
  strokeColor?: string
  autoplay?: boolean
  loop?: boolean
  reverse?: boolean
  className?: string
  fallback?: React.ReactNode
}

export function AnimatedIcon({
  animation,
  size = 20,
  strokeColor = 'currentColor',
  autoplay = false,
  loop = false,
  reverse,
  className = '',
  fallback,
}: AnimatedIconProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <span
        style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        className={className}
        aria-hidden="true"
      >
        {fallback || null}
      </span>
    )
  }

  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <UseAnimations
        animation={animation}
        size={size}
        strokeColor={strokeColor}
        autoplay={autoplay}
        loop={loop}
        reverse={reverse}
      />
    </span>
  )
}
