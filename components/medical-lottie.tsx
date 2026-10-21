'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'

const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
)

export function MedicalLottie({ className = '' }: { className?: string }) {
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
      className={`relative w-full flex items-center justify-center ${className}`}
    >
      {inView ? (
        <DotLottieReact
          src="/medical.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%', maxWidth: '440px', maxHeight: '440px' }}
        />
      ) : (
        <div
          className="w-full aspect-square max-w-[400px]"
          aria-hidden="true"
        />
      )}
    </div>
  )
}
