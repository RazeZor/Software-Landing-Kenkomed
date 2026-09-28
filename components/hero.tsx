'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Calendar, Clock, Star } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { RiPulseLine as PulseIcon, RiWhatsappLine as WhatsappIcon } from 'react-icons/ri'
import {
  useReveal,
  useCountUp,
  useMousePosition,
  usePrefersMotionFx,
} from '@/hooks/use-scroll-animation'

/* ── Colour palette (token references only) ── */
const BLUE  = '#1B67B0'
const TEAL  = '#1E9E85'
const ALERT = '#B8452C'

/* ── Chart data: 8 weekly evaluation points ── */
const SESSIONS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']
const ROM_DATA = [42, 58, 70, 84, 96, 108, 116, 122]
const EVA_DATA = [8, 7, 6, 5, 3, 2, 2, 1]
const ROM_MAX = 135
const EVA_MAX = 10

function buildPoints(data: number[], max: number, W: number, H: number, pad: number) {
  return data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2)
    const y = H - pad - (v / max) * (H - pad * 2)
    return { x, y, v }
  })
}
function pointsToPolyline(pts: { x: number; y: number }[]) {
  return pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
}
function pointsToArea(pts: { x: number; y: number }[], H: number, pad: number) {
  const line = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const last = pts[pts.length - 1]
  const first = pts[0]
  return `${first.x.toFixed(1)},${H - pad} ${line} ${last.x.toFixed(1)},${H - pad}`
}

function ClinicalChart({ animated }: { animated: boolean }) {
  const W = 420, H = 190, PAD = 20
  const [hover, setHover] = useState<number | null>(null)
  const romPts = buildPoints(ROM_DATA, ROM_MAX, W, H, PAD)
  const evaPts = buildPoints(EVA_DATA, EVA_MAX, W, H, PAD)
  const romLine = pointsToPolyline(romPts)
  const evaLine = pointsToPolyline(evaPts)
  const romArea = pointsToArea(romPts, H, PAD)
  const romLen = 480
  const evaLen = 430

  return (
    <svg viewBox={`0 0 ${W} ${H}`} aria-label="Gráfico de evolución clínica" role="img" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <linearGradient id="romGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TEAL} stopOpacity="0.16" />
          <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
        </linearGradient>
        <clipPath id="chartClip">
          <rect x={PAD} y={PAD} width={W - PAD * 2} height={H - PAD * 2} />
        </clipPath>
      </defs>

      {[0.25, 0.5, 0.75].map((frac, i) => {
        const y = PAD + frac * (H - PAD * 2)
        return <line key={i} x1={PAD} y1={y} x2={W - PAD} y2={y} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.5" />
      })}

      {romPts.map((p, i) => (
        <text key={i} x={p.x} y={H - 4} textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--foreground-muted)" opacity="0.7">
          {SESSIONS[i]}
        </text>
      ))}

      <g clipPath="url(#chartClip)">
        <polygon points={romArea} fill="url(#romGrad)" style={{ opacity: animated ? 1 : 0, transition: 'opacity 0.8s ease-out 1.2s' }} />
        <polyline points={romLine} fill="none" stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={romLen} strokeDashoffset={animated ? 0 : romLen}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.1s' }} />
        <polyline points={evaLine} fill="none" stroke={ALERT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray={evaLen} strokeDashoffset={animated ? 0 : evaLen}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.4s' }} opacity="0.85" />

        {romPts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={hover === i ? 5 : 3.5} fill={hover === i ? TEAL : 'var(--card)'} stroke={TEAL} strokeWidth="2"
              style={{ opacity: animated ? 1 : 0, transition: `opacity 0.3s ease ${0.1 + i * 0.12}s, r 0.15s ease` }} />
            <circle cx={p.x} cy={p.y} r="12" fill="transparent" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} />
            {hover === i && (
              <g>
                <rect x={p.x - 28} y={p.y - 30} width="56" height="22" rx="6" fill="var(--card)" stroke="var(--border)" />
                <text x={p.x} y={p.y - 15} textAnchor="middle" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)" fill={TEAL}>
                  {p.v}° ROM
                </text>
              </g>
            )}
          </g>
        ))}

        {evaPts.map((p, i) =>
          i === evaPts.length - 1 ? (
            <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="var(--card)" stroke={ALERT} strokeWidth="2"
              style={{ opacity: animated ? 1 : 0, transition: 'opacity 0.3s ease 1.8s' }} />
          ) : null
        )}
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
    { label: 'ROM final', value: '122°', sub: '+80° vs. inicial', color: TEAL },
    { label: 'EVA', value: '1 / 10', sub: '−7 pts en 8 sesiones', color: ALERT },
    { label: 'Sesiones', value: 'S8', sub: 'Lista para alta', color: BLUE },
  ]
  return (
    <div className="hc-pills">
      {pills.map((p, i) => (
        <div key={i} className="hc-pill" style={{
          opacity: animated ? 1 : 0,
          transform: animated ? 'translateY(0)' : 'translateY(6px)',
          transition: `opacity 0.4s ease ${0.6 + i * 0.15}s, transform 0.4s ease ${0.6 + i * 0.15}s`,
        }}>
          <span className="hc-pill-label">{p.label}</span>
          <span className="hc-pill-value" style={{ color: p.color }}>{p.value}</span>
          <span className="hc-pill-sub">{p.sub}</span>
        </div>
      ))}
    </div>
  )
}

/* Initials avatar — human touch without needing real photos */
function Avatar({ name, color }: { name: string; color: string }) {
  const initials = name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div className="hm-avatar" style={{ background: `${color}1a`, color }}>
      {initials}
    </div>
  )
}

function AgendaMockup({ animated }: { animated: boolean }) {
  const appointments = [
    { time: '08:00', name: 'Juan Pérez', type: 'Evaluación inicial', color: TEAL },
    { time: '09:15', name: 'María Gómez', type: 'Rehab. rodilla (S4)', color: BLUE },
    { time: '10:30', name: 'Carlos Díaz', type: 'Control de evolución', color: ALERT },
  ]
  return (
    <div className="hm-agenda-mockup" aria-hidden="true">
      <div className="hm-agenda-header">
        <div className="hm-agenda-date"><Calendar size={13} /> Hoy, 28 Sept</div>
        <div className="hm-agenda-badge">3 turnos</div>
      </div>
      <div className="hm-agenda-list">
        {appointments.map((apt, i) => (
          <div key={i} className="hm-agenda-item" style={{
            opacity: animated ? 1 : 0,
            transform: animated ? 'translateX(0)' : 'translateX(-12px)',
            transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.15}s`,
          }}>
            <div className="hm-agenda-time"><Clock size={12} /> {apt.time}</div>
            <Avatar name={apt.name} color={apt.color} />
            <div className="hm-agenda-details">
              <div className="hm-agenda-name">{apt.name}</div>
              <div className="hm-agenda-type">{apt.type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const stats = [
  { value: 13, suffix: '', label: 'Escalas clínicas validadas (EVA, PSFS, WOMAC, etc.)' },
  { value: 14, suffix: '', label: 'Pasos de anamnesis inteligente vía QR' },
  { value: 100, suffix: '%', label: 'Especializado en kinesiología y fisioterapia' },
]

function ProofStat({ stat, isVisible }: { stat: (typeof stats)[0]; isVisible: boolean }) {
  const display = useCountUp(stat.value, isVisible, 1400, '', stat.suffix)
  return (
    <div className="hm-proof-stat">
      <p className="hm-proof-number">{display}</p>
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
  const { ref: chartRef, isVisible: chartVisible } = useReveal<HTMLDivElement>({ threshold: 0.05 })
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (chartVisible && !animated) setAnimated(true)
  }, [chartVisible, animated])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow || !mouseGlow) return
    glow.style.transform = `translate3d(calc(${mouse.x * 100}% - 50%), calc(${mouse.y * 100}% - 50%), 0)`
  }, [mouse.x, mouse.y, mouseGlow])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 26 } },
  }

  return (
    <>
      <style>{`
        .hm-hero-section {
          position: relative;
          padding-top: 5rem;
          padding-bottom: 4rem;
          background: linear-gradient(180deg, oklch(0.48 0.18 246 / 0.05) 0%, var(--background) 65%);
          overflow: hidden;
        }
        .hm-hero-section::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3rem;
          background: var(--background);
          border-radius: 50% 50% 0 0 / 100% 100% 0 0;
          transform: scale(1.4, 1);
        }
        .hm-hero-grid {
          max-width: 84rem;
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
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--kenko-sapphire);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          background: oklch(0.48 0.18 246 / 0.06);
          margin-bottom: var(--space-md);
        }
        .hm-outlier-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--kenko-mint); }
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
        }
        .hm-hero-h1-highlight { color: var(--kenko-sapphire); }
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 50ch;
        }
        .hm-hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-sm); margin-bottom: var(--space-lg); }
        .hm-btn-primary {
          display: inline-flex; align-items: center; gap: var(--space-xs);
          background: var(--kenko-sapphire); color: oklch(0.99 0.002 246);
          font-size: 0.9375rem; font-weight: 600; padding: 0.875rem 1.75rem;
          border-radius: 999px; text-decoration: none;
          box-shadow: 0 8px 24px oklch(0.48 0.18 246 / 0.22);
          transition: all 0.2s ease;
        }
        .hm-btn-primary:hover { transform: translateY(-1px); box-shadow: 0 10px 28px oklch(0.48 0.18 246 / 0.3); }
        .hm-btn-ghost {
          display: inline-flex; align-items: center; gap: var(--space-xs);
          color: var(--foreground); font-size: 0.9375rem; font-weight: 500;
          padding: 0.875rem 1.5rem; border-radius: 999px; background: transparent;
          text-decoration: none; transition: all 0.2s ease;
        }
        .hm-btn-ghost:hover { color: var(--kenko-sapphire); }

        /* ── Social proof row ── */
        .hm-social-proof {
          display: flex; align-items: center; gap: 0.625rem;
          margin-bottom: var(--space-xl);
        }
        .hm-social-stars { display: flex; gap: 1px; color: #F5A623; }
        .hm-social-text { font-size: 0.8125rem; color: var(--foreground-muted); }
        .hm-social-text strong { color: var(--foreground); font-weight: 600; }

        .hm-trust-list { display: flex; flex-direction: column; gap: 0.625rem; }
        .hm-trust-item { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; font-weight: 500; color: var(--foreground-muted); }

        /* ── Right column: panel + floating overlap cards ── */
        .hm-visual-wrap { position: relative; }
        .hm-visual-panel {
          position: relative;
          width: 100%;
          border-radius: 1.75rem;
          background: var(--card);
          border: 1px solid var(--border);
          box-shadow: 0 30px 60px -30px oklch(0.12 0.02 246 / 0.18);
          overflow: hidden;
        }
        .hm-visual-body { padding: 1.25rem 1.25rem 0; }
        .hm-visual-head { display: flex; justify-content: space-between; align-items: center; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border); }
        .hm-visual-title { font-size: 0.875rem; font-weight: 600; color: var(--foreground); }
        .hm-visual-sub { font-size: 0.75rem; color: var(--foreground-muted); margin-top: 0.125rem; }
        .hm-visual-badge {
          display: inline-flex; align-items: center; gap: 0.25rem;
          padding: 0.3rem 0.7rem; border-radius: 999px; font-size: 0.6875rem; font-weight: 600;
          background: oklch(0.94 0.06 163 / 1);
        }

        /* floating cards */
        .hm-float-card {
          position: absolute;
          display: flex; align-items: center; gap: 0.6rem;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 0.65rem 0.9rem;
          box-shadow: 0 16px 36px -14px oklch(0.12 0.02 246 / 0.25);
          z-index: 20;
        }
        .hm-float-reminder { left: -1.25rem; bottom: 4.5rem; }
        .hm-float-icon-wa {
          width: 2rem; height: 2rem; border-radius: 999px;
          background: #25D366; color: white;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .hm-float-title { font-size: 0.75rem; font-weight: 600; color: var(--foreground); }
        .hm-float-sub { font-size: 0.6875rem; color: var(--foreground-muted); }

        .hm-float-waitlist { right: -1rem; top: 1.5rem; }
        .hm-float-waitlist .hm-float-title { color: var(--kenko-sapphire); }

        /* ── Agenda Mockup ── */
        .hm-agenda-mockup { background: var(--background); border-bottom: 1px solid var(--border); padding: 1.25rem; }
        .hm-agenda-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .hm-agenda-date { display: flex; align-items: center; gap: 0.35rem; font-size: 0.75rem; font-weight: 600; color: var(--foreground); }
        .hm-agenda-badge { font-size: 0.65rem; font-weight: 600; background: var(--kenko-sapphire); color: white; padding: 0.2rem 0.5rem; border-radius: 999px; }
        .hm-agenda-list { display: flex; flex-direction: column; gap: 0.5rem; }
        .hm-agenda-item {
          display: flex; align-items: center; gap: 0.75rem;
          background: var(--card); border: 1px solid var(--border); border-radius: 0.75rem;
          padding: 0.6rem 0.85rem; box-shadow: 0 4px 12px -4px oklch(0 0 0 / 0.05);
        }
        .hm-agenda-time { display: flex; align-items: center; gap: 0.3rem; font-size: 0.7rem; font-family: var(--font-mono); font-weight: 600; color: var(--foreground-muted); width: 3.5rem; flex-shrink: 0; }
        .hm-avatar {
          width: 1.75rem; height: 1.75rem; border-radius: 999px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.625rem; font-weight: 700; flex-shrink: 0;
        }
        .hm-agenda-details { display: flex; flex-direction: column; gap: 0.1rem; }
        .hm-agenda-name { font-size: 0.8125rem; font-weight: 600; color: var(--foreground); }
        .hm-agenda-type { font-size: 0.7rem; color: var(--foreground-muted); }

        .hc-pills { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--border); }
        .hc-pill { display: flex; flex-direction: column; gap: 0.15rem; padding: 0.85rem 1rem; border-right: 1px solid var(--border); }
        .hc-pill:last-child { border-right: none; }
        .hc-pill-label { font-size: 0.6875rem; font-weight: 600; color: var(--foreground-muted); text-transform: uppercase; letter-spacing: 0.03em; }
        .hc-pill-value { font-family: var(--font-mono); font-size: 1rem; font-weight: 700; }
        .hc-pill-sub { font-size: 0.6875rem; color: var(--foreground-muted); }

        .hm-proof-strip {
          position: relative; z-index: 10;
          max-width: 84rem; margin-inline: auto; padding: var(--space-lg) var(--space-lg) var(--space-2xl);
          display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md);
        }
        .hm-proof-stat { border-radius: 1.25rem; border: 1px solid var(--border); background: var(--card); padding: var(--space-lg); }
        .hm-proof-number { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem); color: var(--foreground); }
        .hm-proof-label { font-size: 0.8125rem; color: var(--foreground-muted); margin-top: 0.25rem; }

        @media (max-width: 960px) {
          .hm-hero-grid { grid-template-columns: 1fr; gap: var(--space-2xl); }
          .hm-float-card { display: none; }
        }
        @media (max-width: 640px) {
          .hm-hero-actions { flex-direction: column; align-items: stretch; }
          .hm-proof-strip { grid-template-columns: 1fr; }
          .hc-pills { grid-template-columns: 1fr; }
          .hc-pill { border-right: none; border-top: 1px solid var(--border); }
          .hc-pill:first-child { border-top: none; }
        }
      `}</style>

      <section ref={heroRef} className="hm-hero-section" aria-label="Sección principal">
        <div
          className="absolute -top-32 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background: 'radial-gradient(circle, oklch(0.48 0.18 246 / 0.1) 0%, transparent 65%)',
            filter: preferMotion ? 'blur(70px)' : 'none',
          }}
        />
        {mouseGlow && (
          <div ref={glowRef} className="absolute pointer-events-none z-[1] top-0 left-0" aria-hidden="true" style={{
            width: '480px', height: '480px', borderRadius: '50%',
            background: 'radial-gradient(circle, oklch(0.48 0.18 246 / 0.05) 0%, transparent 70%)',
            filter: 'blur(60px)', transform: 'translate3d(-50%, -50%, 0)',
          }} />
        )}

        <div className="hm-hero-grid relative z-10">
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.div variants={itemVariants} className="hm-hero-outlier">
              <span className="hm-outlier-dot" aria-hidden="true" />
              Plataforma clínica de kinesiología
            </motion.div>

            <motion.h1 variants={itemVariants} className="hm-hero-h1">
              El sistema clínico del kinesiólogo:{' '}
              <span className="hm-hero-h1-highlight">de la admisión al alta.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hm-hero-lede">
              Del QR de admisión al informe de alta. Kenkomed acompaña cada etapa clínica de tu
              paciente: <strong className="font-semibold text-foreground">evaluación, seguimiento y resultados</strong>, sin papel.
            </motion.p>

            <motion.div variants={itemVariants} className="hm-hero-actions">
              <Link href="/#contact" className="hm-btn-primary">
                Solicitar software
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/#pricing" className="hm-btn-ghost">
                Ver precios
              </Link>
            </motion.div>

            {/* Social proof — swap the number for a real, verifiable one before shipping */}
            <motion.div variants={itemVariants} className="hm-social-proof">
              <span className="hm-social-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
              </span>
              <span className="hm-social-text">
                <strong>Kinesiólogos en Chile</strong> ya gestionan sus fichas con Kenkomed
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="hm-trust-list">
              <span className="hm-trust-item">
                <CheckCircle2 size={16} className="text-emerald" />
                Demuestra la evolución de tu paciente
              </span>
              <span className="hm-trust-item">
                <CheckCircle2 size={16} className="text-emerald" />
                1ª sesión lista antes que llegue el paciente
              </span>
              <span className="hm-trust-item">
                <CheckCircle2 size={16} className="text-emerald" />
                Hecho por kinesiólogos, precio transparente
              </span>
            </motion.div>
          </motion.div>

          <div className="hm-visual-wrap">
            <motion.div
              ref={chartRef}
              className="hm-visual-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <AgendaMockup animated={animated} />

              <div className="hm-visual-body">
                <div className="hm-visual-head">
                  <div>
                    <p className="hm-visual-title">Evolución clínica</p>
                    <p className="hm-visual-sub">Flexión de rodilla · 8 sesiones</p>
                  </div>
                  <span className="hm-visual-badge" style={{ color: TEAL }}>
                    <PulseIcon size={11} /> Alta médica
                  </span>
                </div>
                <div style={{ paddingTop: '0.75rem' }}>
                  <ClinicalChart animated={animated} />
                </div>
              </div>
              <MetricPills animated={animated} />
            </motion.div>

            {/* Floating card #1 — WhatsApp reminder, gives depth + shows a real feature */}
            <motion.div
              className="hm-float-card hm-float-reminder"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="hm-float-icon-wa">
                <WhatsappIcon size={16} />
              </div>
              <div>
                <p className="hm-float-title">Recordatorio enviado</p>
                <p className="hm-float-sub">Cita confirmada · María G.</p>
              </div>
            </motion.div>

            {/* Floating card #2 — waitlist stat, mirrors AgendaPro's "+40% nuevos clientes" pattern */}
            <motion.div
              className="hm-float-card hm-float-waitlist"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <p className="hm-float-title">-80%</p>
                <p className="hm-float-sub">tiempo administrativo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div ref={statsRef}>
        <div className="hm-proof-strip">
          {stats.map((stat) => (
            <ProofStat key={stat.label} stat={stat} isVisible={statsVisible} />
          ))}
        </div>
      </div>
    </>
  )
}
