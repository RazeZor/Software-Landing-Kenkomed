'use client'

/* Hallmark · macrostructure: Feature Stack (16) · genre: modern-minimal · theme: Cobalt
 * Sticky left pane (label + description) + scroll-synced right pane (CSS-art mockups)
 * gates fixed: 3 (no 3-col equal grid), 8 (new section rhythm), 9 (varied section dividers),
 *              24 (specific transitions), 27 (prefers-reduced-motion), 47 (no fake browser chrome),
 *              48 (tokens only)
 */

import Link from 'next/link'
import {
  RiBrainLine as Brain,
  RiQrCodeLine as QrCode,
  RiCalendarCheckLine as CalendarCheck,
  RiFileTextLine as FileText,
  RiBarChartBoxLine as BarChart3,
  RiArrowRightLine as ArrowRight,
  RiCheckboxCircleLine as CheckCircle2,
  RiWallet3Line as Wallet,
} from 'react-icons/ri'
import { FeatureSteps } from '@/components/ui/feature-section'
import { InteractiveSystemDemo } from '@/components/interactive-system-demo'

import { MedicalLottie } from '@/components/medical-lottie'
import { AnimatedIcon } from '@/components/ui/animated-icon'
import checkmark from 'react-useanimations/lib/checkmark'

/* ── Feature data — real product content, no invented metrics ── */
const stackFeatures = [
  {
    number: '01',
    label: 'Antes de la cita',
    title: 'Anamnesis desde el celular',
    desc: 'El paciente completa su anamnesis desde casa. Tú llegas a la consulta con la ficha lista y las alertas ya marcadas.',
    tags: ['Código QR único', 'Ahorro de 15 minutos'],
    icon: QrCode,
    imageSrc: '/software/Cuerpo.jpg',
    imageAlt: 'Paciente llenando anamnesis en el celular',
    accentToken: '--color-accent',
  },
  {
    number: '02',
    label: 'Primera sesión',
    title: 'Evaluación y Banderas Rojas',
    desc: 'Escalas validadas, mapa corporal y screening, con las banderas rojas visibles desde el minuto uno para tomar mejores decisiones.',
    tags: ['Banderas rojas automáticas', 'Mapa corporal'],
    icon: Brain,
    imageSrc: '/software/DSS.png',
    imageAlt: 'Panel DSS clínico de Kenkomed mostrando escalas validadas',
    accentToken: '--color-accent-2',
  },
  {
    number: '03',
    label: 'Prescripción y Casa',
    title: 'Pautas de Ejercicios por WhatsApp',
    desc: 'Catálogo anatómico completo con dosificación clínica exacta. Envíale la pauta en PDF membretado directo a su WhatsApp o correo en 1 clic.',
    tags: ['Directo a WhatsApp', 'PDF membretado auditado'],
    icon: CalendarCheck,
    imageSrc: '/software/Objetivos_y_prescripcion.png',
    imageAlt: 'Pantalla de prescripción de ejercicios de Kenkomed',
    accentToken: '--color-accent',
  },
  {
    number: '04',
    label: 'Cada sesión',
    title: 'Evolución estructurada (SOAP)',
    desc: 'Evolución estructurada en formato SOAP, sin reescribir nada. Cada sesión se enlaza con los objetivos planteados inicialmente.',
    tags: ['Formato SOAP', 'Trazabilidad clínica'],
    icon: FileText,
    imageSrc: '/software/ficha_clinica.png',
    imageAlt: 'Ficha clínica digital de Kenkomed',
    accentToken: '--color-accent-2',
  },
  {
    number: '05',
    label: 'Reevaluación',
    title: 'Demuestra tus resultados',
    desc: 'Repites las escalas y ves el cambio en un gráfico automático. El paciente ve su progreso, tú demuestras tu resultado.',
    tags: ['Gráficos automáticos', 'Comparación de escalas'],
    icon: BarChart3,
    imageSrc: '/software/graficos_nuevo.png',
    imageAlt: 'Panel de monitoreo y outcomes de Kenkomed',
    accentToken: '--color-accent',
  },
  {
    number: '06',
    label: 'Alta e informe',
    title: 'Diagnóstico y Reporte Final',
    desc: 'Diagnóstico final y reporte listo para el médico derivador. Exporta el resumen clínico en PDF con un solo clic.',
    tags: ['Reporte para médico derivador', 'Diagnóstico kinésico'],
    icon: CheckCircle2,
    imageSrc: '/software/Diagnostico_final.png',
    imageAlt: 'Reporte clínico de alta exportado',
    accentToken: '--color-accent-2',
  },
  {
    number: '07',
    label: 'Pagos y Finanzas',
    title: 'Packs y Deudas',
    desc: 'Vende packs de atención y el sistema cruza la deuda automáticamente. Control total de morosos y flujos de caja del centro.',
    tags: ['Packs de atención', 'Cruce automático'],
    icon: Wallet,
    imageSrc: '/software/pagos_foto.png',
    imageAlt: 'Gestión de pagos y Packs de atención en Kenkomed',
    accentToken: '--color-accent',
  },
]

export function SolucionTeaser() {
  return (
    <>
      <style>{`
        .hm-cta-wrap {
          max-width: 78rem;
          margin-inline: auto;
          margin-top: var(--space-5xl);
          padding-inline: var(--space-lg);
        }
        .hm-cta-panel {
          position: relative;
          border-radius: 2rem;
          border: var(--hairline);
          background: var(--color-paper);
          box-shadow: 0 20px 48px -12px oklch(0.48 0.18 246 / 0.08);
          overflow: hidden;
          padding: clamp(2rem, 4vw, 3.5rem);
        }
        .hm-cta-glow {
          position: absolute;
          top: -25%;
          right: -10%;
          width: 36rem;
          height: 28rem;
          background: radial-gradient(circle, oklch(0.48 0.18 246 / 0.10) 0%, transparent 70%);
          pointer-events: none;
        }
        .hm-cta-grid {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-2xl);
          align-items: center;
        }
        @media (min-width: 1024px) {
          .hm-cta-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: clamp(2.5rem, 4vw, 4.5rem);
          }
        }
        .hm-cta-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-accent);
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          background: oklch(0.48 0.18 246 / 0.08);
          margin-bottom: var(--space-md);
        }
        .hm-cta-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 8px var(--color-accent);
        }
        .hm-cta-heading {
          position: relative;
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          font-weight: 700;
          color: var(--color-ink);
          line-height: 1.12;
          letter-spacing: -0.035em;
          margin-bottom: var(--space-md);
        }
        .hm-cta-description {
          font-family: var(--font-body);
          font-size: clamp(1rem, 1.2vw, 1.0625rem);
          color: var(--color-ink-2);
          line-height: 1.6;
          margin-bottom: var(--space-xl);
          max-width: 48ch;
        }
        .hm-cta-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: var(--space-xl);
          padding: 0;
          list-style: none;
        }
        .hm-cta-bullet-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-ink);
        }
        .hm-cta-bullet-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .hm-cta-actions {
          position: relative;
          display: flex;
          gap: var(--space-md);
          flex-wrap: wrap;
          align-items: center;
        }
        .hm-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          color: white;
          background: var(--color-accent);
          padding: 0.875rem 1.75rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 10px 26px oklch(0.48 0.18 246 / 0.25);
          transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
        }
        .hm-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px oklch(0.48 0.18 246 / 0.35);
        }
        .hm-cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2xs);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-ink-2);
          padding: 0.875rem 1.5rem;
          border-radius: 999px;
          text-decoration: none;
          border: var(--hairline);
          background: oklch(0.48 0.18 246 / 0.03);
          transition: color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out);
        }
        .hm-cta-ghost:hover {
          color: var(--color-accent);
          border-color: var(--color-accent);
          background: oklch(0.48 0.18 246 / 0.06);
        }
        .hm-cta-visual-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .hm-cta-visual-card {
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.75rem;
          background: radial-gradient(circle at center, oklch(0.48 0.18 246 / 0.08) 0%, oklch(0.48 0.18 246 / 0.02) 65%, transparent 100%);
          border: var(--hairline);
          padding: 1.25rem;
          box-shadow: inset 0 0 20px oklch(0.48 0.18 246 / 0.04);
        }
        .hm-cta-lottie-ambient {
          position: absolute;
          inset: 15%;
          background: radial-gradient(circle, oklch(0.48 0.18 246 / 0.14) 0%, transparent 70%);
          filter: blur(28px);
          pointer-events: none;
        }
        .hm-cta-floating-badge {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          background: var(--color-paper);
          border: var(--hairline);
          box-shadow: 0 4px 16px -2px oklch(0 0 0 / 0.08);
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-ink);
        }
        .hm-cta-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
        }
        @media (prefers-reduced-motion: reduce) {
          .hm-cta-primary, .hm-cta-ghost { transition: none; }
        }
      `}</style>

      <section id="features">
        <div className="py-20 md:py-32 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0284c7]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0284c7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
                Tu día, paso a paso
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground text-center text-balance">
              De la admisión al alta
            </h2>
            <p className="text-foreground-muted text-center max-w-2xl mx-auto mb-16 text-balance text-base md:text-lg">
              Cada paso del tratamiento kinésico — admisión, evaluación, evolución, alta — en una sola plataforma. Sin papel, sin planillas, sin duplicar datos.
            </p>
            <InteractiveSystemDemo />
          </div>
        </div>

        {/* ─── Bottom CTA (Izquierda a Derecha) ─── */}
        <div className="hm-cta-wrap">
          <div className="hm-cta-panel">
            <div className="hm-cta-glow" aria-hidden="true" />
            <div className="hm-cta-grid">
              {/* Left Column: Copy & Actions */}
              <div>
                <span className="hm-cta-eyebrow">
                  <span className="hm-cta-dot" aria-hidden="true" />
                  ¿Listo para empezar?
                </span>
                <h2 className="hm-cta-heading">
                  Solicita una demo gratuita. Te mostramos todo en 30 minutos.
                </h2>
                <p className="hm-cta-description">
                  Descubre cómo Kenkomed simplifica tu práctica clínica diaria: agenda multi-box sin sobrecupos, pautas de ejercicios por WhatsApp, fichas con escalas automáticas y cumplimiento estricto de la Ley 21.719.
                </p>

                <ul className="hm-cta-bullets">
                  <li className="hm-cta-bullet-item">
                    <AnimatedIcon animation={checkmark} size={22} strokeColor="#0284c7" autoplay />
                    <span>Configuración personalizada a tu centro o consulta (boxes, equipo y horarios)</span>
                  </li>
                  <li className="hm-cta-bullet-item">
                    <AnimatedIcon animation={checkmark} size={22} strokeColor="#0284c7" autoplay />
                    <span>Migración de datos y acompañamiento clínico continuo sin costo adicional</span>
                  </li>
                  <li className="hm-cta-bullet-item">
                    <AnimatedIcon animation={checkmark} size={22} strokeColor="#0284c7" autoplay />
                    <span>Cumplimiento legal garantizado: Ley 21.719, Ley 20.584 y Derechos ARCO</span>
                  </li>
                </ul>

                <div className="hm-cta-actions">
                  <a href="#contact" className="hm-cta-primary">
                    Solicitar demo
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                  <Link href="/funcionalidades" className="hm-cta-ghost">
                    Ver funcionalidades completas
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Medical Lottie Animation */}
              <div className="hm-cta-visual-wrap">
                <div className="hm-cta-visual-card">
                  <div className="hm-cta-lottie-ambient" aria-hidden="true" />
                  <MedicalLottie className="w-full h-full" />
                  <div className="hm-cta-floating-badge">
                    <span className="hm-cta-badge-dot" aria-hidden="true" />
                    <span>Especializado en Kinesiología</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ── ProductShowcase is now unified into SolucionTeaser above ── */
export function ProductShowcase() {
  return null
}

/* ── Legacy Features export (kept for any other imports) ── */
export function Features() {
  return null
}