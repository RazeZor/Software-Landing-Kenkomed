'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
)

interface AgendaLottieProps {
  className?: string
  style?: React.CSSProperties
}

export function AgendaLottie({ className = '', style }: AgendaLottieProps) {
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
      className={`relative flex items-center justify-center ${className}`}
      style={style}
    >
      {inView ? (
        <DotLottieReact
          src="/Agenda.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div
          className="w-full h-full"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
