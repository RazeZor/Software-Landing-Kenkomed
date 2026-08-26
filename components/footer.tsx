'use client'

/* Hallmark · component: Statement Footer (Ft5) · genre: modern-minimal · theme: Cobalt (Paper Light)
 * Clean light paper background, dark typography, vibrant emerald & cobalt accents
 */

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Funcionalidades', href: '/funcionalidades' },
  { label: 'Nuestra Solución', href: '/solucion' },
  { label: 'Ver Demo', href: '/demo' },
  { label: 'Investigación', href: '/investigacion' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Términos de Uso', href: '/terminos' },
  { label: 'Seguridad', href: '/seguridad' },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram de Kenkomed', href: 'https://www.instagram.com/_kenkomed_/' },
  { icon: Linkedin, label: 'LinkedIn de Kenkomed', href: '#' },
]

export function Footer() {
  return (
    <>
      <style>{`
        /* Hallmark · Statement Footer (Ft5) · Paper Light */
        .hm-footer {
          background: var(--surface);
          color: var(--foreground);
          border-top: var(--hairline);
          overflow-x: clip;
          position: relative;
        }

        .hm-footer-inner {
          max-width: 88rem;
          margin-inline: auto;
          padding-inline: var(--space-lg);
          padding-block: var(--space-4xl) var(--space-2xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-3xl);
        }

        /* ── Top Statement Block ── */
        .hm-footer-statement-block {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--space-2xl);
          align-items: start;
        }

        .hm-footer-brand-heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4.5vw + 0.5rem, 3.75rem);
          font-weight: 800;
          font-style: normal;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--foreground);
          max-width: 20ch;
          overflow-wrap: anywhere;
          min-width: 0;
        }

        .hm-footer-accent-text {
          color: var(--kenko-sapphire);
        }

        .hm-footer-contact-box {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          font-family: var(--font-body);
          font-size: 0.875rem;
          color: var(--foreground-muted);
        }

        .hm-footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          color: var(--foreground);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 2px;
          border-radius: var(--radius-sm);
          transition-property: color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-footer-contact-link:hover {
          color: var(--kenko-sapphire);
        }
        .hm-footer-contact-link:focus-visible {
          outline-color: var(--color-focus);
        }

        /* ── Middle: Single horizontal nav row ── */
        .hm-footer-nav-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-md) var(--space-lg);
          padding-block: var(--space-lg);
          border-top: var(--hairline);
          border-bottom: var(--hairline);
        }

        .hm-footer-link {
          font-family: var(--font-body);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--foreground-muted);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 2px;
          border-radius: var(--radius-sm);
          transition-property: color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-footer-link:hover {
          color: var(--foreground);
        }
        .hm-footer-link:focus-visible {
          outline-color: var(--color-focus);
        }

        /* ── Bottom row: Copyright & Social ── */
        .hm-footer-bottom {
          display: flex;
          flex-wrap: wrap;
          items-center: center;
          justify-content: space-between;
          gap: var(--space-md);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          color: var(--foreground-subtle);
        }

        .hm-footer-social-group {
          display: flex;
          align-items: center;
          gap: var(--space-xs);
        }

        .hm-footer-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: var(--radius-md);
          border: var(--hairline);
          color: var(--foreground-muted);
          background: var(--background);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 2px;
          transition-property: color, border-color, background-color;
          transition-duration: 150ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hm-footer-social-btn:hover {
          color: var(--kenko-sapphire);
          border-color: oklch(0.48 0.18 246 / 0.40);
          background: oklch(0.48 0.18 246 / 0.06);
        }
        .hm-footer-social-btn:focus-visible {
          outline-color: var(--color-focus);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hm-footer-statement-block {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
          .hm-footer-inner {
            padding-inline: var(--space-md);
          }
        }
      `}</style>

      <footer className="hm-footer" role="contentinfo">
        <div className="hm-footer-inner">
          {/* Top Statement Block */}
          <div className="hm-footer-statement-block">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <Image
                  src="/images/LogoKenko.png"
                  alt="Kenkomed logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
                <span className="font-display font-extrabold text-xl tracking-tight text-foreground">
                  Kenko<span className="text-emerald">med</span>
                </span>
              </Link>
              <h2 className="hm-footer-brand-heading">
                El software clínico que los{' '}
                <span className="hm-footer-accent-text">kinesiólogos</span> de Chile merecían.
              </h2>
            </div>

            {/* Contact info box */}
            <div className="hm-footer-contact-box">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald font-semibold">Contacto directo</span>
              <a href="mailto:kenkomedplus@gmail.com" className="hm-footer-contact-link">
                <Mail size={14} aria-hidden="true" />
                kenkomedplus@gmail.com
              </a>
              <a href="tel:+56940966266" className="hm-footer-contact-link">
                <Phone size={14} aria-hidden="true" />
                +56 9 4096 6266
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs text-foreground-muted">
                <MapPin size={13} aria-hidden="true" />
                Concepción, Chile
              </span>
            </div>
          </div>

          {/* Single horizontal link row */}
          <nav className="hm-footer-nav-row" aria-label="Navegación del pie de página">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hm-footer-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Copyright & Social */}
          <div className="hm-footer-bottom">
            <p>© {new Date().getFullYear()} Kenkomed. Todos los derechos reservados. Hecho en Chile.</p>
            <div className="hm-footer-social-group">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hm-footer-social-btn"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
