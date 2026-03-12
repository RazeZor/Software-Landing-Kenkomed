import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'

const footerLinks = {
  Producto: [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'El Producto', href: '#product' },
    { label: 'Cuestionarios', href: '#product' },
    { label: 'Ver Demo', href: '/demo' },
    { label: 'Investigación', href: '/investigacion' },
  ],
  Empresa: [
    { label: 'Nuestro Equipo', href: '#team' },
    { label: 'Contacto', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacidad', href: '#' },
    { label: 'Términos de uso', href: '#' },
    { label: 'Seguridad', href: '#' },
  ],
}

const socialLinks = [
  { icon: Instagram, label: 'Instagram de Kenkomed', href: 'https://www.instagram.com/_kenkomed_/' },
  { icon: Linkedin, label: 'LinkedIn de Kenkomed', href: '#' },
]

export function Footer() {
  return (
    <footer id="footer" className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden" role="contentinfo">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] opacity-[0.07] rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.60 0.18 200), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] opacity-[0.05] rounded-full"
          style={{ background: 'radial-gradient(circle, oklch(0.55 0.15 170), transparent 70%)' }}
        />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/images/LogoKenKo.png"
                  alt="Kenkomed logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Ken<span className="text-teal-400">ko</span>med
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-7 max-w-sm">
              Software clínico profesional diseñado específicamente para kinesiólogos y fisioterapeutas en Chile. Potenciado con sistema de apoyo a la decisión clínica (DSS).
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-7">
              <a href="mailto:contacto@kenkomed.cl" className="group/link flex items-center gap-2.5 text-sm text-white/45 hover:text-teal-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-teal-500/10 transition-colors">
                  <Mail size={14} className="text-teal-400" />
                </div>
                kenkomedplus@gmail.com
              </a>
              <a href="tel:+56940966266" className="group/link flex items-center gap-2.5 text-sm text-white/45 hover:text-teal-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/link:bg-teal-500/10 transition-colors">
                  <Phone size={14} className="text-teal-400" />
                </div>
                +56 9 4096 6266
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/45">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin size={14} className="text-teal-400" />
                </div>
                Concepcion, Chile
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/45 hover:text-teal-300 hover:bg-teal-500/10 hover:border-teal-500/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">
                  {category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-teal-300 transition-colors duration-200"
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

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Kenkomed. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1.5">
            Hecho con <Heart size={11} className="text-teal-500 fill-teal-500" /> en Chile para kinesiólogos
          </p>
        </div>
      </div>
    </footer>
  )
}
