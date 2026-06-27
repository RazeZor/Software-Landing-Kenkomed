import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { BrandGrid, PulseDivider } from '@/components/brand-elements'

const footerLinks = {
  Producto: [
    { label: 'Funcionalidades', href: '/funcionalidades' },
    { label: 'El Producto',      href: '/#product' },
    { label: 'Nuestra Solución', href: '/solucion' },
    { label: 'Ver Demo',         href: '/demo' },
    { label: 'Investigación',    href: '/investigacion' },
  ],
  Empresa: [
    { label: 'Nuestro Equipo', href: '#team' },
    { label: 'Contacto',       href: '#contact' },
  ],
  Legal: [
    { label: 'Privacidad',      href: '/privacidad' },
    { label: 'Términos de uso', href: '/terminos' },
    { label: 'Seguridad',       href: '/seguridad' },
  ],
}

const socialLinks = [
  { icon: Instagram, label: 'Instagram de Kenkomed', href: 'https://www.instagram.com/_kenkomed_/' },
  { icon: Linkedin,  label: 'LinkedIn de Kenkomed',  href: '#' },
]

export function Footer() {
  return (
    <>
      {/* Estilos de hover puramente CSS — sin handlers JS */}
      <style>{`
        .footer-link:hover   { color: var(--kenko-pulse) !important; }
        .footer-social:hover {
          background: oklch(0.66 0.19 163 / 0.15) !important;
          border-color: oklch(0.66 0.19 163 / 0.35) !important;
          color: var(--kenko-pulse) !important;
          transform: translateY(-2px);
        }
        .footer-contact:hover { color: var(--kenko-pulse) !important; }
        .footer-contact:hover .footer-contact-icon {
          border-color: oklch(0.66 0.19 163 / 0.4) !important;
          background: oklch(0.66 0.19 163 / 0.18) !important;
        }
      `}</style>

      <footer
        id="footer"
        className="relative text-white overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, #05111e 0%, #030c18 50%, #020810 100%)',
          borderTop: '1px solid oklch(0.48 0.18 246 / 0.15)',
        }}
        role="contentinfo"
      >
        <BrandGrid className="opacity-[0.04]" />

        {/* Orbes atmosféricos */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.08]"
            style={{
              background: 'radial-gradient(circle, oklch(0.48 0.18 246) 0%, transparent 65%)',
              filter: 'blur(80px)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-[0.06]"
            style={{
              background: 'radial-gradient(circle, oklch(0.66 0.19 163) 0%, transparent 65%)',
              filter: 'blur(80px)',
            }}
          />
        </div>

        {/* Separador animado superior */}
        <div className="relative z-10 pt-4">
          <PulseDivider variant="dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

            {/* Columna de marca */}
            <div className="md:col-span-5">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/images/LogoKenko.png"
                    alt="Kenkomed logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">
                  Ken<span style={{ color: 'var(--kenko-pulse)' }}>ko</span>med
                </span>
              </Link>

              <p className="text-sm text-on-brand-muted leading-relaxed mb-7 max-w-sm">
                Software clínico profesional diseñado específicamente para kinesiólogos y
                fisioterapeutas en Chile. Potenciado con sistema de apoyo a la decisión clínica (DSS).
              </p>

              {/* Contacto */}
              <div className="flex flex-col gap-3 mb-7">
                <a
                  href="mailto:kenkomedplus@gmail.com"
                  className="footer-contact group/link flex items-center gap-2.5 text-sm text-on-brand-subtle transition-colors duration-200"
                >
                  <div
                    className="footer-contact-icon w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'oklch(0.66 0.19 163 / 0.12)',
                      border: '1px solid oklch(0.66 0.19 163 / 0.25)',
                    }}
                  >
                    <Mail size={14} style={{ color: 'var(--kenko-pulse)' }} />
                  </div>
                  kenkomedplus@gmail.com
                </a>
                <a
                  href="tel:+56940966266"
                  className="footer-contact group/link flex items-center gap-2.5 text-sm text-on-brand-subtle transition-colors duration-200"
                >
                  <div
                    className="footer-contact-icon w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'oklch(0.66 0.19 163 / 0.12)',
                      border: '1px solid oklch(0.66 0.19 163 / 0.25)',
                    }}
                  >
                    <Phone size={14} style={{ color: 'var(--kenko-pulse)' }} />
                  </div>
                  +56 9 4096 6266
                </a>
                <div className="flex items-center gap-2.5 text-sm text-on-brand-subtle">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'oklch(0.66 0.19 163 / 0.08)',
                      border: '1px solid oklch(0.66 0.19 163 / 0.15)',
                    }}
                  >
                    <MapPin size={14} style={{ color: 'var(--kenko-mint)' }} />
                  </div>
                  Concepción, Chile
                </div>
              </div>

              {/* Redes sociales */}
              <div className="flex gap-2.5">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social w-10 h-10 rounded-xl flex items-center justify-center text-on-brand-subtle transition-all duration-300"
                    style={{
                      background: 'oklch(1 0 0 / 0.06)',
                      border: '1px solid oklch(1 0 0 / 0.10)',
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Columnas de links */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3
                    className="text-xs font-bold tracking-widest uppercase mb-5 font-display"
                    style={{ color: 'oklch(0.97 0.003 246 / 0.4)' }}
                  >
                    {category}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="footer-link text-sm text-on-brand-muted transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divisor */}
          <div
            className="h-px mb-8"
            style={{
              background: 'linear-gradient(90deg, transparent, oklch(1 0 0 / 0.08), transparent)',
            }}
          />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-on-brand-subtle">
              © {new Date().getFullYear()} Kenkomed. Todos los derechos reservados.
            </p>
            <p className="text-xs text-on-brand-subtle flex items-center gap-1.5">
              Hecho con{' '}
              <Heart size={11} style={{ color: 'var(--kenko-pulse)', fill: 'var(--kenko-pulse)' }} />{' '}
              en Chile para kinesiólogos
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
