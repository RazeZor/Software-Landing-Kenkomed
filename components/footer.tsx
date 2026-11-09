'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { RiWhatsappFill } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <Image
                src="/images/LogoKenko.png"
                alt="Logo Kenkomed"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-foreground">
                Kenko<span className="text-emerald">med</span>
              </span>
            </Link>
            <p className="mb-5 text-foreground-muted text-sm leading-relaxed">
              Software clínico y Sistema de Soporte a la Decisión (DSS) creado en Concepción para kinesiólogos y centros de rehabilitación en Chile.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand/90"
            >
              Agendar demo gratuita
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold font-display text-foreground">Plataforma</h3>
            <nav className="space-y-2.5 text-sm text-foreground-muted" aria-label="Enlaces del pie de página">
              <Link href="/precios" className="block transition-colors hover:text-brand font-medium text-foreground">
                Precios y Planes
              </Link>
              <Link href="/funcionalidades" className="block transition-colors hover:text-brand">
                Catálogo de Funcionalidades
              </Link>
              <Link href="/solucion" className="block transition-colors hover:text-brand">
                Nuestra Solución
              </Link>
              <Link href="/investigacion" className="block transition-colors hover:text-brand">
                Investigación y Evidencia
              </Link>
              <Link href="/demo" className="block transition-colors hover:text-brand">
                Ver Demo Interactiva
              </Link>
              <Link href="/blog" className="block transition-colors hover:text-brand">
                Blog Clínico y Guías
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold font-display text-foreground">Contacto Directo</h3>
            <address className="space-y-3 text-sm not-italic text-foreground-muted">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                Concepción, Región del Biobío, Chile
              </p>
              <p className="flex items-center gap-2">
                <RiWhatsappFill className="h-4 w-4 text-[#25D366] shrink-0" aria-hidden="true" />
                <a
                  href="https://wa.me/56937105872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors font-medium text-foreground"
                >
                  +56 9 3710 5872 (WhatsApp)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <a href="tel:+56937105872" className="hover:text-brand transition-colors">
                  +56 9 3710 5872
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand shrink-0" aria-hidden="true" />
                <a href="mailto:kenkomedplus@gmail.com" className="hover:text-brand transition-colors">
                  kenkomedplus@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold font-display text-foreground">Comunidad</h3>
            <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
              Síguenos para conocer nuevas escalas clínicas, guías normativas y actualizaciones de la plataforma.
            </p>
            <div className="flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-background border-border hover:bg-[#25D366]/10 hover:text-[#25D366] hover:border-[#25D366]/30"
                    >
                      <a
                        href="https://wa.me/56937105872"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Empresa (+56 9 3710 5872)"
                      >
                        <RiWhatsappFill className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>WhatsApp Empresa (+56 9 3710 5872)</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-background border-border hover:bg-brand/10 hover:text-brand hover:border-brand/30"
                    >
                      <a
                        href="https://www.instagram.com/_kenkomed_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de Kenkomed"
                      >
                        <Instagram className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Síguenos en Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-background border-border hover:bg-brand/10 hover:text-brand hover:border-brand/30"
                    >
                      <a
                        href="https://www.linkedin.com/company/kenkomed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn de Kenkomed"
                      >
                        <Linkedin className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conecta en LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-center md:flex-row">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Kenkomed. Todos los derechos reservados. Desarrollado en Concepción, Chile.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-foreground-muted" aria-label="Enlaces legales">
            <Link href="/privacidad" className="transition-colors hover:text-brand">
              Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-brand">
              Términos de Uso
            </Link>
            <Link href="/seguridad" className="transition-colors hover:text-brand">
              Seguridad Clínica
            </Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-cookie-banner'))
                }
              }}
              className="transition-colors hover:text-brand cursor-pointer"
            >
              Preferencias de Cookies
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}
