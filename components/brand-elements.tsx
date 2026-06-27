'use client'

import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────────────────
   RecoveryPulse — Elemento firma de Kenkomed
   La línea de pulso cardíaco que representa recuperación
   ───────────────────────────────────────────────────────── */
export function RecoveryPulse({
  className,
  variant = 'default',
  animated = false,
}: {
  className?: string
  variant?: 'default' | 'subtle' | 'accent'
  animated?: boolean
}) {
  const stroke =
    variant === 'accent'
      ? 'var(--kenko-mint)'
      : variant === 'subtle'
        ? 'currentColor'
        : 'var(--brand-light)'

  const glowColor =
    variant === 'accent'
      ? 'oklch(0.66 0.19 163 / 0.4)'
      : 'oklch(0.62 0.16 246 / 0.3)'

  if (animated) {
    return (
      <AnimatedPulse className={className} stroke={stroke} glowColor={glowColor} />
    )
  }

  return (
    <svg
      viewBox="0 0 400 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full h-auto', className)}
      aria-hidden="true"
    >
      <path
        d="M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/* Pulso animado — el elemento firma que LATE */
function AnimatedPulse({
  className,
  stroke,
  glowColor,
}: {
  className?: string
  stroke: string
  glowColor: string
}) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    path.style.strokeDasharray = `${len}`
    path.style.strokeDashoffset = `${len}`
  }, [])

  return (
    <svg
      viewBox="0 0 400 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-full h-auto overflow-visible', className)}
      aria-hidden="true"
    >
      <defs>
        <filter id="pulse-glow" x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Trazo base tenue */}
      <path
        d="M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400"
        stroke={stroke}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity={0.25}
      />
      {/* Trazo principal animado */}
      <path
        ref={pathRef}
        d="M0 24 H100 L112 24 L120 6 L130 42 L140 24 L158 24 L170 10 L182 38 L194 24 H400"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        filter="url(#pulse-glow)"
        style={{
          animation: 'pulse-draw 3s ease-in-out infinite',
        }}
      />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────
   PulseDivider — Separador de sección con heartbeat
   El elemento más distintivo: divide secciones con latido
   ───────────────────────────────────────────────────────── */
export function PulseDivider({
  className,
  variant = 'light',
  animated = true,
}: {
  className?: string
  variant?: 'light' | 'dark'
  animated?: boolean
}) {
  return (
    <div
      className={cn(
        'relative w-full flex items-center justify-center py-4 overflow-hidden',
        className
      )}
      aria-hidden="true"
    >
      {/* Línea base izquierda */}
      <div
        className={cn(
          'flex-1 h-px',
          variant === 'dark'
            ? 'bg-gradient-to-r from-transparent to-[oklch(0.66_0.19_163_/_0.25)]'
            : 'bg-gradient-to-r from-transparent to-[oklch(0.48_0.18_246_/_0.15)]'
        )}
      />
      {/* El pulso SVG central */}
      <div className="px-6 flex-shrink-0 w-64">
        <RecoveryPulse
          variant={variant === 'dark' ? 'accent' : 'default'}
          animated={animated}
        />
      </div>
      {/* Línea base derecha */}
      <div
        className={cn(
          'flex-1 h-px',
          variant === 'dark'
            ? 'bg-gradient-to-l from-transparent to-[oklch(0.66_0.19_163_/_0.25)]'
            : 'bg-gradient-to-l from-transparent to-[oklch(0.48_0.18_246_/_0.15)]'
        )}
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   BrandGrid — Cuadrícula clínica de fondo
   ───────────────────────────────────────────────────────── */
export function BrandGrid({ className }: { className?: string }) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none kenko-grid', className)}
      aria-hidden="true"
    />
  )
}

/* ─────────────────────────────────────────────────────────
   SectionEyebrow — Label de sección con barra esmeralda
   ───────────────────────────────────────────────────────── */
export function SectionEyebrow({
  children,
  className,
  light = false,
}: {
  children: React.ReactNode
  className?: string
  light?: boolean
}) {
  return (
    <div className={cn('flex items-center justify-center gap-3 mb-4', className)}>
      <span
        className={cn(
          'w-8 h-0.5 rounded-full',
          light ? 'bg-[var(--kenko-pulse)]' : 'bg-[var(--kenko-mint)]'
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          'text-xs font-bold tracking-[0.22em] uppercase font-display',
          light ? 'text-white/70' : 'text-[var(--kenko-sapphire)]'
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          'w-8 h-0.5 rounded-full',
          light ? 'bg-[var(--kenko-pulse)]' : 'bg-[var(--kenko-mint)]'
        )}
        aria-hidden="true"
      />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   BrandBand — Banda institucional de sección
   ───────────────────────────────────────────────────────── */
export function BrandBand({
  children,
  className,
  variant = 'deep',
}: {
  children: React.ReactNode
  className?: string
  variant?: 'deep' | 'hero' | 'mist' | 'white'
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden',
        variant === 'deep'  && 'kenko-band-deep',
        variant === 'hero'  && 'kenko-band-hero',
        variant === 'mist'  && 'kenko-band-mist',
        variant === 'white' && 'bg-background',
        className
      )}
    >
      {(variant === 'deep' || variant === 'hero') && (
        <>
          <BrandGrid className="opacity-[0.05]" />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 100% 0%, oklch(0.66 0.19 163 / 0.12), transparent 60%)',
            }}
          />
          {/* Glow esmeralda inferior */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                'radial-gradient(ellipse 60% 40% at 20% 100%, oklch(0.48 0.18 246 / 0.10), transparent 60%)',
            }}
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
   DataParticle — Elemento flotante de datos médicos
   Pequeñas burbujas con métricas clínicas para el hero
   ───────────────────────────────────────────────────────── */
export function DataParticle({
  label,
  value,
  color = 'blue',
  style,
  className,
}: {
  label: string
  value: string
  color?: 'blue' | 'mint' | 'sky'
  style?: React.CSSProperties
  className?: string
}) {
  const colorMap = {
    blue: 'border-[oklch(0.48_0.18_246_/_0.3)] bg-[oklch(0.22_0.10_240_/_0.7)]',
    mint: 'border-[oklch(0.66_0.19_163_/_0.3)] bg-[oklch(0.15_0.08_163_/_0.7)]',
    sky:  'border-[oklch(0.62_0.16_230_/_0.3)] bg-[oklch(0.18_0.08_230_/_0.7)]',
  }
  const valueColorMap = {
    blue: 'text-[var(--kenko-sky)]',
    mint: 'text-[var(--kenko-pulse)]',
    sky:  'text-[oklch(0.80_0.14_230)]',
  }

  return (
    <div
      className={cn(
        'absolute rounded-2xl px-4 py-3 border shadow-xl hidden md:block animate-float hero-particle',
        'backdrop-blur-md',
        colorMap[color],
        className
      )}
      style={style}
    >
      <p className="text-[9px] text-white/45 font-bold uppercase tracking-wider mb-0.5 font-display">
        {label}
      </p>
      <p className={cn('text-sm font-bold font-display', valueColorMap[color])}>
        {value}
      </p>
    </div>
  )
}
