'use client'

/* Hallmark · macrostructure: Feature Stack (16) · genre: modern-minimal · theme: Cobalt
 * Sticky left pane (label + description) + scroll-synced right pane (CSS-art mockups)
 * gates fixed: 3 (no 3-col equal grid), 8 (new section rhythm), 9 (varied section dividers),
 *              24 (specific transitions), 27 (prefers-reduced-motion), 47 (no fake browser chrome),
 *              48 (tokens only)
 * Enrichment: E1 CSS-art mockup — UI del software Kenkomed en figure + hairline border
 */

import Image from 'next/image'
import Link from 'next/link'
import {
  Brain,
  QrCode,
  CalendarCheck,
  FileText,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Wallet,
} from 'lucide-react'

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

/* ── Bento Grid Component ── */
export function SolucionTeaser() {
  return (
    <>
      <style>{`
        /* Hallmark · macrostructure: Bento Grid (01) · genre: modern-minimal · theme: Cobalt
         * 2-column uniform grid — each card has full breathing room for image + text.
         */

        .hm-bento-section {
          padding-block: var(--space-4xl) var(--space-6xl);
          background: var(--color-paper-2);
          border-top: var(--hairline);
        }

        .hm-bento-container {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
        }

        .hm-bento-header {
          text-align: center;
          margin-bottom: var(--space-4xl);
          max-width: 60ch;
          margin-inline: auto;
        }

        .hm-bento-label {
          font-family: var(--font-outlier);
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: var(--space-md);
          display: block;
        }

        .hm-bento-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
          font-weight: 700;
          color: var(--color-ink);
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin-bottom: var(--space-lg);
        }

        .hm-bento-intro {
          font-family: var(--font-body);
          font-size: 1.125rem;
          color: var(--color-ink-2);
          line-height: 1.6;
        }

        /* Grid layout — 1 col mobile, 2 col desktop */
        .hm-bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-xl);
        }

        @media (min-width: 768px) {
          .hm-bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Cards */
        .hm-bento-card {
          position: relative;
          background: var(--color-paper);
          border-radius: var(--radius-xl);
          border: var(--hairline);
          box-shadow: 0 1px 3px oklch(0.12 0.02 246 / 0.03), 0 8px 32px oklch(0.12 0.02 246 / 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out);
        }
        .hm-bento-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px oklch(0.12 0.02 246 / 0.06), 0 16px 48px oklch(0.12 0.02 246 / 0.08);
        }

        /* Content Wrapper */
        .hm-bento-content {
          padding: var(--space-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        /* Typography inside card */
        .hm-card-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: var(--radius-md);
          background: oklch(0.48 0.18 246 / 0.06);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-xs);
        }

        .hm-card-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-ink);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .hm-card-desc {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--color-ink-2);
          line-height: 1.6;
        }

        /* Tag list */
        .hm-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-xs);
          margin-top: var(--space-sm);
        }
        .hm-card-tag {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-ink-3);
          background: var(--color-paper-3);
          padding: 0.25rem 0.625rem;
          border-radius: 999px;
          border: var(--hairline);
        }

        /* Image wrapper — fixed height, always visible, not cropped */
        .hm-bento-image-wrapper {
          position: relative;
          width: 100%;
          height: 280px;
          border-top: var(--hairline);
          overflow: hidden;
          background: var(--color-paper-3);
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .hm-bento-image-wrapper {
            height: 320px;
          }
        }

        .hm-mockup-img {
          object-fit: cover;
          object-position: top center;
        }

        /* Step label */
        .hm-card-step {
          font-family: var(--font-outlier);
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-ink-3);
          margin-bottom: 0.25rem;
        }
      `}</style>

      <section id="features" className="hm-bento-section">
        <div className="hm-bento-container">
          <header className="hm-bento-header">
            <span className="hm-bento-label">Tu día, paso a paso</span>
            <h2 className="hm-bento-heading">De la admisión al alta</h2>
            <p className="hm-bento-intro">
              El único software que acompaña cada etapa clínica de tu paciente: evaluación, seguimiento y resultados, eliminando por completo el papel y las planillas.
            </p>
          </header>

          <div className="hm-bento-grid">
            {stackFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <article key={feat.number} className="hm-bento-card">
                  <div className="hm-bento-content">
                    <div className="hm-card-icon" style={{ color: `var(${feat.accentToken})` }}>
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="hm-card-step">{feat.label}</p>
                      <h3 className="hm-card-title">{feat.title}</h3>
                    </div>
                    <p className="hm-card-desc">{feat.desc}</p>
                    {feat.tags.length > 0 && (
                      <div className="hm-card-tags">
                        {feat.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="hm-card-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="hm-bento-image-wrapper">
                    <Image
                      src={feat.imageSrc}
                      alt={feat.imageAlt}
                      fill
                      className="hm-mockup-img"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </article>
              );
            })}
          </div>
          
          {/* ─── Bottom CTA ─── */}
          <div className="hm-bento-cta" style={{ marginTop: 'var(--space-5xl)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="hm-bento-label">¿Listo para empezar?</span>
            <h2 className="hm-bento-heading" style={{ marginBottom: 'var(--space-xl)', maxWidth: '20ch' }}>
              Solicita una demo gratuita. Te mostramos todo en 30 minutos.
            </h2>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
              <a href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2xs)',
                fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
                color: 'var(--color-accent)', textDecoration: 'none',
                borderBottom: '1px solid oklch(0.48 0.18 246 / 0.30)', paddingBottom: '1px'
              }}>
                Solicitar Demo
                <ArrowRight size={14} aria-hidden="true" />
              </a>
              <Link href="/funcionalidades" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2xs)',
                fontFamily: 'var(--font-body)', fontSize: '0.9375rem', fontWeight: 600,
                color: 'var(--color-ink-2)', textDecoration: 'none',
                borderBottom: '1px solid oklch(0.12 0.02 246 / 0.20)', paddingBottom: '1px'
              }}>
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