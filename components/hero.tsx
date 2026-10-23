'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star, Mail } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import {
  useReveal,
  useCountUp,
  useMousePosition,
  usePrefersMotionFx,
} from '@/hooks/use-scroll-animation'
import { PhoneCarousel } from '@/components/ui/phone-mockups-1-utils/phone-carousel'



const stats = [
  { value: 13, suffix: '', label: 'Escalas clínicas validadas (Oswestry, LEFS, WOMAC, etc.)' },
  { value: 0, suffix: '%', label: 'Sobrecupos: agenda multi-box con bloqueo atómico' },
  { value: 100, suffix: '%', label: 'Kinesiología basada en evidencia y Ley 21.719 / 20.584' },
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
          width: 100%;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-3xl) var(--space-4xl);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: var(--space-3xl);
          align-items: center;
          box-sizing: border-box;
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
          max-width: 100%;
        }
        .hm-outlier-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--kenko-mint); flex-shrink: 0; }
        .hm-hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4.5vw + 0.5rem, 4.25rem);
          font-weight: 800;
          line-height: 1.04;
          letter-spacing: -0.045em;
          color: var(--foreground);
          margin-bottom: var(--space-md);
          word-break: break-word;
        }
        .hm-hero-h1-highlight { color: var(--kenko-sapphire); }
        .hm-hero-lede {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          color: var(--foreground-muted);
          line-height: 1.65;
          margin-bottom: var(--space-xl);
          max-width: 50ch;
          word-break: break-word;
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
        .hm-social-stars { display: flex; gap: 1px; color: #F5A623; flex-shrink: 0; }
        .hm-social-text { font-size: 0.8125rem; color: var(--foreground-muted); }
        .hm-social-text strong { color: var(--foreground); font-weight: 600; }

        .hm-trust-list { display: flex; flex-direction: column; gap: 0.625rem; }
        .hm-trust-item { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; font-weight: 500; color: var(--foreground-muted); }

        /* ── Right column: Phone mockup showcase + floating overlap cards ── */
        .hm-visual-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-width: 0;
          max-width: 100%;
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
          backdrop-filter: blur(12px);
        }
        .hm-float-reminder { left: -1rem; bottom: 5rem; }
        .hm-float-icon-mail {
          width: 2rem; height: 2rem; border-radius: 999px;
          background: oklch(0.48 0.18 246 / 0.12);
          color: var(--kenko-sapphire);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .hm-float-title { font-size: 0.75rem; font-weight: 600; color: var(--foreground); }
        .hm-float-sub { font-size: 0.6875rem; color: var(--foreground-muted); }

        .hm-float-waitlist { right: -0.5rem; top: 4.5rem; }
        .hm-float-waitlist .hm-float-title { color: var(--kenko-sapphire); }

        .hm-float-rom { right: -1rem; bottom: 8rem; }

        .hm-proof-strip {
          position: relative; z-index: 10;
          max-width: 84rem; margin-inline: auto; padding: var(--space-lg) var(--space-lg) var(--space-2xl);
          display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md);
        }
        .hm-proof-stat { border-radius: 1.25rem; border: 1px solid var(--border); background: var(--card); padding: var(--space-lg); }
        .hm-proof-number { font-family: var(--font-display); font-weight: 800; font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem); color: var(--foreground); }
        .hm-proof-label { font-size: 0.8125rem; color: var(--foreground-muted); margin-top: 0.25rem; }

        @media (max-width: 960px) {
          .hm-hero-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: var(--space-2xl);
          }
          .hm-float-card { display: none !important; }
        }
        @media (max-width: 640px) {
          .hm-hero-section {
            padding-top: 3.5rem;
            padding-bottom: 2rem;
          }
          .hm-hero-grid {
            padding-inline: 1.25rem;
            padding-block: var(--space-xl) var(--space-2xl);
            gap: var(--space-xl);
          }
          .hm-hero-outlier {
            font-size: 0.6875rem;
            letter-spacing: 0.04em;
            padding: 0.3rem 0.75rem;
          }
          .hm-hero-h1 {
            font-size: clamp(1.85rem, 7.5vw, 2.5rem);
            line-height: 1.1;
            letter-spacing: -0.03em;
            margin-bottom: 0.75rem;
          }
          .hm-hero-lede {
            font-size: 0.9375rem;
            line-height: 1.55;
            margin-bottom: 1.25rem;
            max-width: 100%;
          }
          .hm-hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 0.625rem;
            margin-bottom: 1.25rem;
          }
          .hm-btn-primary, .hm-btn-ghost {
            justify-content: center;
            width: 100%;
            text-align: center;
          }
          .hm-social-proof {
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.25rem;
          }
          .hm-social-text {
            font-size: 0.8rem;
            line-height: 1.4;
          }
          .hm-trust-item {
            font-size: 0.8125rem;
            align-items: flex-start;
          }
          .hm-proof-strip {
            grid-template-columns: repeat(2, 1fr);
            padding-inline: 1.25rem;
            gap: var(--space-xs);
          }
          .hm-proof-strip .hm-proof-stat:last-child {
            grid-column: 1 / -1;
          }
          .hm-proof-stat {
            padding: var(--space-sm);
          }
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
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="w-full min-w-0 max-w-full">
            <motion.div variants={itemVariants} className="hm-hero-outlier">
              <span className="hm-outlier-dot" aria-hidden="true" />
              El primer sistema kinésico de soporte a la decisión clínica en Chile
            </motion.div>

            <motion.h1 variants={itemVariants} className="hm-hero-h1">
              El software clínico creado{' '}
              <span className="hm-hero-h1-highlight">por y para kinesiólogos.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hm-hero-lede">
              Automatiza tu agendamiento online multi-box sin sobrecupos, evalúa con cuestionarios funcionales validados,
              prescribe pautas de ejercicios en 1 clic y cumple con la{' '}
              <strong className="font-semibold text-foreground">Ley 21.719 de Protección de Datos Personales</strong> en Chile.
            </motion.p>

            <motion.div variants={itemVariants} className="hm-hero-actions">
              <Link href="/#contact" className="hm-btn-primary">
                Comenzar prueba gratis
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/funcionalidades" className="hm-btn-ghost">
                Ver catálogo completo
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
                <strong>Clínicas y Kinesiólogos en Chile</strong> confían en KenkoMed v2.4
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="hm-trust-list">
              <span className="hm-trust-item">
                <CheckCircle2 size={16} className="text-emerald" />
                Agenda Multi-Box sin choques (Doble factor seguro RUT + Fecha de nacimiento)
              </span>
              <span className="hm-trust-item">
                <CheckCircle2 size={16} className="text-emerald" />
                Pautas de ejercicios en WhatsApp y PDF membretado auditado en 1 clic
              </span>
              <span className="hm-trust-item">
                <CheckCircle2 size={16} className="text-emerald" />
                Blindaje normativo chileno: Ley 21.719, Ley 20.584 y Derechos ARCO
              </span>
            </motion.div>
          </motion.div>

          <div className="hm-visual-wrap" ref={chartRef}>
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <PhoneCarousel variant="single" />
            </motion.div>

            {/* Floating card #1 — WhatsApp Pauta de Ejercicios */}
            <motion.div
              className="hm-float-card hm-float-reminder hidden sm:flex"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-7 h-7 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.285" />
                </svg>
              </div>
              <div>
                <p className="hm-float-title">Pauta de Ejercicios</p>
                <p className="hm-float-sub">Enviada en 1 clic a WhatsApp</p>
              </div>
            </motion.div>

            {/* Floating card #2 — Multi-Box Zero Overbooking */}
            <motion.div
              className="hm-float-card hm-float-waitlist hidden sm:flex"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <p className="hm-float-title">Agenda Multi-Box</p>
                <p className="hm-float-sub">Cero sobrecupos en paralelo</p>
              </div>
            </motion.div>

            {/* Floating card #3 — Cumplimiento Ley 21.719 */}
            <motion.div
              className="hm-float-card hm-float-rom hidden lg:flex"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <div>
                <p className="hm-float-title">Ley 21.719 y 20.584</p>
                <p className="hm-float-sub">Auditoría médica inmutable</p>
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
