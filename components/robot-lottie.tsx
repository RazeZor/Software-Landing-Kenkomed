'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
)

export interface RobotLottieProps {
  className?: string
  style?: React.CSSProperties
  loop?: boolean
  autoplay?: boolean
}

export function RobotLottie({
  className = '',
  style,
  loop = true,
  autoplay = true,
}: RobotLottieProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
      style={style}
    >
      {inView ? (
        <DotLottieReact
          src="/images/robot.lottie"
          loop={loop}
          autoplay={autoplay}
          style={{ width: '100%', height: '100%' }}
        />
      ) : null}
    </div>
  )
}

export default RobotLottie
