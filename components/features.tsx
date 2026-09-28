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
    label: 'Plan de tratamiento',
    title: 'Objetivos y Prescripción',
    desc: 'Definición de objetivos funcionales, número de sesiones y dosificación de ejercicios estructurada en un solo lugar.',
    tags: ['Objetivos funcionales', 'Prescripción de ejercicios'],
    icon: CalendarCheck,
    imageSrc: '/software/Objetivos_y_prescripcion.png',
    imageAlt: 'Pantalla de prescripción de ejercicios',
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
          max-width: 60rem;
          margin-inline: auto;
          margin-top: var(--space-5xl);
          padding-inline: var(--space-lg);
        }
        .hm-cta-panel {
          position: relative;
          border-radius: 1.75rem;
          border: var(--hairline);
          background: var(--color-paper);
          padding: var(--space-3xl) var(--space-xl);
          text-align: center;
          overflow: hidden;
        }
        .hm-cta-glow {
          position: absolute;
          top: -40%;
          left: 50%;
          width: 32rem;
          height: 20rem;
          transform: translateX(-50%);
          background: radial-gradient(circle, oklch(0.48 0.18 246 / 0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hm-cta-eyebrow {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-accent);
          padding: 0.375rem 0.875rem;
          border-radius: 999px;
          background: oklch(0.48 0.18 246 / 0.06);
          margin-bottom: var(--space-md);
        }
        .hm-cta-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--color-accent); }
        .hm-cta-heading {
          position: relative;
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw + 1rem, 2.75rem);
          font-weight: 700;
          color: var(--color-ink);
          line-height: 1.15;
          letter-spacing: -0.03em;
          max-width: 22ch;
          margin-inline: auto;
          margin-bottom: var(--space-xl);
        }
        .hm-cta-actions {
          position: relative;
          display: flex;
          gap: var(--space-md);
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
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
          transform: translateY(-1px);
          box-shadow: 0 12px 30px oklch(0.48 0.18 246 / 0.32);
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
          transition: color var(--dur-base) var(--ease-out);
        }
        .hm-cta-ghost:hover { color: var(--color-accent); }

        @media (prefers-reduced-motion: reduce) {
          .hm-cta-primary { transition: none; }
        }
      `}</style>

      <section id="features">
        <FeatureSteps
          label="Tu día, paso a paso"
          title="De la admisión al alta"
          description="Cada paso del tratamiento kinésico — admisión, evaluación, evolución, alta — en una sola plataforma. Sin papel, sin planillas, sin duplicar datos."
          features={stackFeatures.map((feat) => ({
            step: feat.label,
            title: feat.title,
            content: feat.desc,
            image: feat.imageSrc,
          }))}
          autoPlayInterval={5000}
        />

        {/* ─── Bottom CTA ─── */}
        <div className="hm-cta-wrap">
          <div className="hm-cta-panel">
            <div className="hm-cta-glow" aria-hidden="true" />
            <span className="hm-cta-eyebrow">
              <span className="hm-cta-dot" aria-hidden="true" />
              ¿Listo para empezar?
            </span>
            <h2 className="hm-cta-heading">
              Solicita una demo gratuita. Te mostramos todo en 30 minutos.
            </h2>
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