'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import {
  RiPulseLine as PulseIcon,
  RiArrowUpLine as TrendUpIcon,
  RiArrowDownLine as TrendDownIcon,
} from 'react-icons/ri'
import {
  useReveal,
  useCountUp,
  useMousePosition,
  usePrefersMotionFx,
} from '@/hooks/use-scroll-animation'

/* ── Colour palette (token references only) ── */
const BLUE   = '#1B67B0'
const COBALT = '#134f88'
const TEAL   = '#1E9E85'
const ALERT  = '#B8452C'

/* ── Chart data: 8 weekly evaluation points ── */
const SESSIONS = ['S1','S2','S3','S4','S5','S6','S7','S8']

const ROM_DATA  = [42, 58, 70, 84, 96, 108, 116, 122]
const EVA_DATA  = [8,   7,   6,   5,   3,   2,   2,   1]
const ROM_MAX   = 135
const EVA_MAX   = 10

function buildPoints(data: number[], max: number, W: number, H: number, pad: number) {
  return data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2)
    const y = H - pad - (v / max) * (H - pad * 2)
    return { x, y, v }
  })
}

function pointsToPolyline(pts: { x: number; y: number }[]) {
  return pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}

function pointsToArea(pts: { x: number; y: number }[], H: number, pad: number) {
  const line = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const last = pts[pts.length - 1]
  const first = pts[0]
  return `${first.x.toFixed(1)},${H - pad} ${line} ${last.x.toFixed(1)},${H - pad}`
}

function ClinicalChart({ animated }: { animated: boolean }) {
  const W = 420, H = 200, PAD = 20
  const [hover, setHover] = useState<number | null>(null)

  const romPts = buildPoints(ROM_DATA, ROM_MAX, W, H, PAD)
  const evaPts = buildPoints(EVA_DATA, EVA_MAX, W, H, PAD)

  const romLine  = pointsToPolyline(romPts)
  const evaLine  = pointsToPolyline(evaPts)
  const romArea  = pointsToArea(romPts, H, PAD)

  const romLen = 480
  const evaLen = 430

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      aria-label="Gráfico de evolución clínica"
      role="img"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <linearGradient id="romGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TEAL} stopOpacity="0.18" />
          <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="evaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={ALERT} stopOpacity="0.12" />
          <stop offset="100%" stopColor={ALERT} stopOpacity="0" />
        </linearGradient>
        <clipPath id="chartClip">
          <rect x={PAD} y={PAD} width={W - PAD * 2} height={H - PAD * 2} />
        </clipPath>
      </defs>

      {[0.25, 0.5, 0.75].map((frac, i) => {
        const y = PAD + frac * (H - PAD * 2)
        return (
          <line
            key={i}
            x1={PAD} y1={y} x2={W - PAD} y2={y}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="3 3"
            style={{ color: 'var(--border)' }}
            opacity="0.5"
          />
        )
      })}

      {romPts.map((p, i) => (
        <text
          key={i}
          x={p.x} y={H - 4}
          textAnchor="middle"
          fontSize="9"
          fontFamily="var(--font-mono)"
          fill="var(--foreground-muted)"
          opacity="0.7"
        >
          {SESSIONS[i]}
        </text>
      ))}

      <g clipPath="url(#chartClip)">
        <polygon
          points={romArea}
          fill="url(#romGrad)"
          style={{
            opacity: animated ? 1 : 0,
            transition: 'opacity 0.8s ease-out 1.2s',
          }}
        />

        <polyline
          points={romLine}
          fill="none"
          stroke={TEAL}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={romLen}
          strokeDashoffset={animated ? 0 : romLen}
          style={{ transition: `stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.1s` }}
        />

        <polyline
          points={evaLine}
          fill="none"
          stroke={ALERT}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={evaLen}
          strokeDashoffset={animated ? 0 : evaLen}
          style={{ transition: `stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.4s` }}
          opacity="0.85"
        />

        {romPts.map((p, i) => (
          <g key={i}>
            <circle
              cx={p.x} cy={p.y} r={hover === i ? 5 : 3.5}
              fill={hover === i ? TEAL : 'var(--card)'}
              stroke={TEAL}
              strokeWidth="2"
              style={{
                opacity: animated ? 1 : 0,
                transition: `opacity 0.3s ease ${0.1 + i * 0.12}s, r 0.15s ease`,
                cursor: 'default',
              }}
            />
            <circle
              cx={p.x} cy={p.y} r="12"
              fill="transparent"
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            />
            {hover === i && (
              <g>
                <rect
                  x={p.x - 28} y={p.y - 30}
                  width="56" height="22"
                  rx="4"
                  fill="var(--card)"
                  stroke="var(--border)"
                  strokeWidth="1"
                />
                <text
                  x={p.x} y={p.y - 15}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="var(--font-mono)"
                  fill={TEAL}
                >
                  {p.v}° ROM
                </text>
              </g>
            )}
          </g>
        ))}

        {evaPts.map((p, i) => i === evaPts.length - 1 ? (
          <circle
            key={i}
            cx={p.x} cy={p.y} r="3.5"
            fill="var(--card)"
            stroke={ALERT}
            strokeWidth="2"
            style={{
              opacity: animated ? 1 : 0,
              transition: `opacity 0.3s ease 1.8s`,
            }}
          />
        ) : null)}
      </g>

      <g transform={`translate(${PAD}, ${PAD})`}>
        <circle cx="5" cy="5" r="4" fill={TEAL} />
        <text x="13" y="9" fontSize="9" fontFamily="var(--font-sans)" fill="var(--foreground-muted)">ROM (°)</text>
        <circle cx="70" cy="5" r="4" fill={ALERT} opacity="0.85" />
        <text x="78" y="9" fontSize="9" fontFamily="var(--font-sans)" fill="var(--foreground-muted)">Dolor EVA</text>
      </g>
    </svg>
  )
}

function MetricPills({ animated }: { animated: boolean }) {
  const pills = [
    { label: 'ROM final', value: '122°', sub: '+80° vs. inicial', positive: true, color: TEAL },
    { label: 'EVA', value: '1 / 10', sub: '−7 pts en 8 sesiones', positive: true, color: ALERT },
    { label: 'Sesiones', value: 'S8', sub: 'Lista para alta', positive: true, color: BLUE },
  ]
  return (
    <div className="hc-pills">
      {pills.map((p, i) => (
        <div
          key={i}
          className="hc-pill"
          style={{
            opacity: animated ? 1 : 0,
            transform: animated ? 'translateY(0)' : 'translateY(6px)',
            transition: `opacity 0.4s ease ${0.6 + i * 0.15}s, transform 0.4s ease ${0.6 + i * 0.15}s`,
          }}
        >
          <div className="hc-pill-dot" style={{ background: p.color }} />
          <div className="hc-pill-body">
            <span className="hc-pill-label">{p.label}</span>
            <span className="hc-pill-value" style={{ color: p.color }}>{p.value}</span>
            <span className="hc-pill-sub">
              {p.positive ? <TrendUpIcon size={10} /> : <TrendDownIcon size={10} />}
              {p.sub}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

const stats = [
  { value: 13,   prefix: '', suffix: '',  label: 'Escalas clínicas validadas (EVA, PSFS, WOMAC, etc.)' },
  { value: 14,   prefix: '', suffix: '',  label: 'Pasos de anamnesis inteligente vía QR' },
  { value: 100, prefix: '', suffix: '%', label: 'Especializado en kinesiología y fisioterapia' },
]

function ProofStat({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const display = useCountUp(stat.value, isVisible, 1400, stat.prefix, stat.suffix)
  return (
    <div className="hm-proof-stat">
      <p className="hm-proof-number" aria-label={`${display} ${stat.label}`}>
        {display}
      </p>
      <p className="hm-proof-label">{stat.label}</p>
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const { motion: preferMotion, finePointer } = usePrefersMotionFx()
  const mouseGlow = preferMotion && finePointer
  const mouse = useMousePosition(heroRef, mouseGlow)
  const { ref: statsRef, isVisible: statsVisible } = useReveal<HTMLDivElement>({ threshold: 0.3 })
  const { ref: chartRef, isVisible: chartVisible }  = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (chartVisible && !animated) setAnimated(true)
  }, [chartVisible, animated])

  /* Glow cursor HP3 */
  useEffect(() => {
    const glow = glowRef.current
    if (!glow || !mouseGlow) return
    glow.style.transform = `translate3d(calc(${mouse.x * 100}% - 50%), calc(${mouse.y * 100}% - 50%), 0)`
  }, [mouse.x, mouse.y, mouseGlow])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <>
      <style>{`
        .hm-hero-section {
          background: linear-gradient(180deg, oklch(0.975 0.006 246) 0%, oklch(0.99 0.002 246) 100%);
          border-bottom: var(--hairline);
          position: relative;
          padding-top: 5rem;
        }
        .hm-hero-grid {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl) var(--space-4xl);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-3xl);
          align-items: center;
        }
        .hm-hero-outlier {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: var(--kenko-sapphire);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          border: 1px solid oklch(0.48 0.18 246 / 0.18);
          background: oklch(0.48 0.18 246 / 0.05);
          margin-bottom: var(--space-md);
        }
        .hm-outlier-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--kenko-mint);
        }
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
        }
        .hm-hero-h1-highlight {
          color: var(--kenko-sapphire);
        }
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 50ch;
        }
        .hm-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-sm);
          margin-bottom: var(--space-2xl);
        }
        .hm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: var(--kenko-sapphire);
          color: oklch(0.99 0.002 246);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: 0.875rem 1.75rem;
          border-radius: var(--radius-md);
          text-decoration: none;
          box-shadow: 0 4px 16px oklch(0.48 0.18 246 / 0.25);
          transition: all 0.2s ease;
        }
        .hm-btn-primary:hover {
          background: var(--kenko-cobalt);
          transform: translateY(-1px);
          box-shadow: 0 6px 22px oklch(0.48 0.18 246 / 0.35);
        }
        .hm-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          font-size: 0.875rem;
          font-weight: 500;
          padding: 0.875rem 1.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          background: var(--background);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .hm-btn-ghost:hover {
          color: var(--kenko-cobalt);
          border-color: var(--kenko-sapphire);
          background: oklch(0.48 0.18 246 / 0.04);
        }
        .hm-trust-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-md);
          border-top: var(--hairline);
          padding-top: var(--space-md);
        }
        .hm-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--foreground-muted);
        }
        .hm-hero-diptych {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hm-photo-wrapper {
          position: relative;
          width: 82%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-xl);
          overflow: hidden;
          border: var(--hairline);
          box-shadow: 0 10px 30px oklch(0.12 0.02 246 / 0.08);
          transform: rotate(-1.5deg);
        }
        .hm-photo-img {
          object-fit: cover;
          filter: contrast(1.03) brightness(0.98);
        }
        .hm-ui-frame {
          position: absolute;
          width: 90%;
          top: 15%;
          right: -5%;
          background: var(--card);
          border-radius: var(--radius-lg);
          border: var(--hairline-accent);
          box-shadow: 0 20px 45px -10px oklch(0.12 0.02 246 / 0.18), 0 0 0 1px oklch(0.48 0.18 246 / 0.12);
          overflow: hidden;
        }
        .hm-ui-bar {
          height: 2rem;
          background: var(--surface-2);
          border-bottom: var(--hairline);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding-inline: 0.75rem;
        }
        .hm-ui-dot { width: 0.5rem; height: 0.5rem; border-radius: 50%; }
        .hm-ui-path {
          font-family: var(--font-outlier);
          font-size: 0.625rem;
          color: var(--foreground-subtle);
          margin-left: 0.5rem;
          background: var(--background);
          padding: 0.125rem 0.5rem;
          border-radius: 999px;
          border: var(--hairline);
        }
        .hm-annotation-card {
          position: absolute;
          bottom: -1rem;
          left: -1rem;
          background: var(--card);
          border: var(--hairline-accent);
          border-radius: var(--radius-md);
          padding: 0.625rem 0.875rem;
          box-shadow: 0 12px 30px oklch(0.12 0.02 246 / 0.12);
          display: flex;
          align-items: center;
          gap: 0.625rem;
          z-index: 30;
        }
        .hm-annotation-tag {
          font-family: var(--font-outlier);
          font-size: 0.6875rem;
          font-weight: 600;
          color: var(--kenko-sapphire);
        }
        .hm-annotation-sub {
          font-size: 0.75rem;
          color: var(--foreground-muted);
        }
        .hm-proof-strip {
          display: flex;
          align-items: stretch;
          gap: 0;
          border-top: var(--hairline);
          border-bottom: var(--hairline);
          background: var(--color-paper);
        }
        .hm-proof-stat {
          flex: 1;
          padding: var(--space-md) var(--space-lg);
          display: flex;
          flex-direction: column;
          gap: var(--space-2xs);
        }
        .hm-proof-stat + .hm-proof-stat { border-left: var(--hairline); }
        .hm-proof-number {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(2rem, 4vw + 0.5rem, 3rem);
          color: var(--color-ink);
        }
        .hm-proof-label {
          font-size: 0.8125rem;
          color: var(--color-ink-2);
        }

        /* ── Chart & Pills Styles ── */
        .hc-pills {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--border);
        }
        .hc-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.75rem;
          border-right: 1px solid var(--border);
          min-width: 0;
        }
        .hc-pill:last-child { border-right: none; }
        .hc-pill-dot { width: 6px; height: 6px; border-radius: 50%; margin-top: 0.35rem; flex-shrink: 0; }
        .hc-pill-body { display: flex; flex-direction: column; gap: 0; min-width: 0; }
        .hc-pill-label { font-size: 0.6rem; font-weight: 600; color: var(--foreground-muted); text-transform: uppercase; white-space: nowrap; }
        .hc-pill-value { font-family: var(--font-mono); font-size: 0.875rem; font-weight: 700; }
        .hc-pill-sub { display: flex; alignItems: center; gap: 0.15rem; font-size: 0.6rem; color: var(--foreground-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        @media (max-width: 960px) {
          .hm-hero-grid { grid-template-columns: 1fr; gap: var(--space-2xl); }
          .hm-photo-wrapper { width: 100%; transform: none; }
          .hm-ui-frame { position: static; width: 100%; margin-top: var(--space-md); transform: none; }
          .hm-annotation-card { display: none; }
        }
        @media (max-width: 640px) {
          .hm-proof-strip { flex-direction: column; }
          .hm-proof-stat + .hm-proof-stat { border-left: none; border-top: var(--hairline); }
          .hm-hero-actions { flex-direction: column; align-items: stretch; }
          .hc-pills { grid-template-columns: 1fr 1fr; }
          .hc-pill:nth-child(2) { border-right: none; }
          .hc-pill:nth-child(3) { border-right: none; border-top: 1px solid var(--border); grid-column: span 2; }
        }
      `}</style>

      <section
        ref={heroRef}
        className="hm-hero-section overflow-hidden"
        aria-label="Sección principal"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(var(--kenko-sapphire) 1px, transparent 1px), linear-gradient(90deg, var(--kenko-sapphire) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-40 right-0 w-[550px] h-[550px] rounded-full"
            style={{
              background: `radial-gradient(circle, oklch(0.48 0.18 246 / 0.10) 0%, transparent 65%)`,
              filter: preferMotion ? 'blur(60px)' : 'none',
            }}
          />
          <div
            className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full"
            style={{
              background: `radial-gradient(circle, oklch(0.66 0.19 163 / 0.08) 0%, transparent 65%)`,
              filter: preferMotion ? 'blur(70px)' : 'none',
            }}
          />
        </div>

        {mouseGlow && (
          <div
            ref={glowRef}
            className="absolute pointer-events-none z-[1] top-0 left-0"
            aria-hidden="true"
            style={{
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: `radial-gradient(circle, oklch(0.48 0.18 246 / 0.06) 0%, transparent 70%)`,
              filter: 'blur(60px)',
              transform: 'translate3d(-50%, -50%, 0)',
            }}
          />
        )}

        <div className="hm-hero-grid relative z-10">
          {/* ─── Left Column: Framer Motion Staggered ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="hm-hero-outlier">
              <span className="hm-outlier-dot" aria-hidden="true" />
              01 · PLATAFORMA CLÍNICA DE KINESIOLOGÍA
            </motion.div>

            <motion.h1 variants={itemVariants} className="hm-hero-h1">
              El sistema clínico del kinesiólogo:{' '}
              <span className="hm-hero-h1-highlight">de la admisión al alta.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hm-hero-lede">
              Del QR de admisión al informe de alta. Kenkomed acompaña cada etapa clínica de tu paciente: <strong className="text-foreground font-semibold">evaluación, seguimiento y resultados</strong>, sin papel.
            </motion.p>

            <motion.div variants={itemVariants} className="hm-hero-actions">
              <Link href="/#contact" className="hm-btn-primary">
                Solicitar software
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/#pricing" className="hm-btn-ghost">
                Ver precios
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="hm-trust-pills" role="list">
              <span className="hm-trust-item" role="listitem">
                <CheckCircle2 size={15} className="text-emerald" />
                Demuestra la evolución de tu paciente
              </span>
              <span className="hm-trust-item" role="listitem">
                <CheckCircle2 size={15} className="text-emerald" />
                1ª sesión lista antes que llegue el paciente
              </span>
              <span className="hm-trust-item" role="listitem">
                <CheckCircle2 size={15} className="text-emerald" />
                Hecho por kinesiólogos, precio transparente
              </span>
            </motion.div>
          </motion.div>

          {/* ─── Right Column: Editorial Diptych Showcase (Photo + UI Frame) ─── */}
          <div className="hm-hero-diptych">
            <motion.div 
              className="hm-photo-wrapper"
              initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/software/ficha_clinica.png"
                alt="Ficha clínica digital de Kenkomed"
                fill
                priority
                className="hm-photo-img"
                sizes="(max-width: 960px) 100vw, 42vw"
              />
            </motion.div>

            {/* Foreground Real Software UI Browser Frame with Chart injected */}
            <motion.div 
              className="hm-ui-frame"
              ref={chartRef}
              initial={{ opacity: 0, x: 20, rotate: 0 }}
              animate={{ opacity: 1, x: 0, rotate: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              <div className="hm-ui-bar">
                <span className="hm-ui-dot bg-rose-400" />
                <span className="hm-ui-dot bg-amber-400" />
                <span className="hm-ui-dot bg-emerald-400" />
                <span className="hm-ui-path">kenkomed.cl/panel-clinico</span>
              </div>

              <div style={{ padding: '0.875rem 1rem 0.25rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--foreground)' }}>Evolución Clínica</p>
                  <p style={{ fontSize: '0.6875rem', color: 'var(--foreground-muted)', marginTop: '0.125rem' }}>Flexión de rodilla · 8 sesiones</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.25rem 0.625rem', borderRadius: '999px', fontSize: '0.625rem', fontWeight: 600, background: 'oklch(0.94 0.06 163 / 1)', color: TEAL }}>
                  <PulseIcon size={10} /> Alta médica
                </div>
              </div>

              <div style={{ padding: '0.75rem 0.5rem 0' }}>
                <ClinicalChart animated={animated} />
              </div>
              <MetricPills animated={animated} />
            </motion.div>

            <motion.div 
              className="hm-annotation-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Activity size={18} className="text-emerald" />
              <div>
                <span className="hm-annotation-tag">[SOPORTE A LA DECISIÓN CLÍNICA]</span>
                <p className="hm-annotation-sub">Banderas rojas & EVA/Barthel en tiempo real</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Proof Strip ─── */}
      <div className="relative bg-background" ref={statsRef}>
        <div className="hm-proof-strip max-w-none">
          {stats.map(stat => (
            <ProofStat key={stat.label} stat={stat} isVisible={statsVisible} />
          ))}
        </div>
      </div>
    </>
  )
}
