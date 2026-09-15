'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useScrollProgress } from '@/hooks/use-scroll-animation'
import { ChevronDown, ArrowRight, Brain, QrCode, FileText, BarChart3, ShieldCheck, Sparkles, Users } from 'lucide-react'

/* ── Nav Links Configuration ──────────────────────────────────── */

const funcionesSubMenu = [
  {
    title: 'DSS Clínico & Algoritmos',
    href: '/funcionalidades#plataforma',
    desc: 'Escalas EVA, PSFS, Barthel y banderas rojas.',
    icon: Brain,
  },
  {
    title: 'Admisión Express QR',
    href: '/funcionalidades#admision-remota',
    desc: 'Anamnesis inteligente desde el celular.',
    icon: QrCode,
  },
  {
    title: 'Ficha Digital Unificada',
    href: '/funcionalidades#funcionalidades',
    desc: 'Historial clínico, sesiones y evoluciones.',
    icon: FileText,
  },
  {
    title: 'Monitoreo & Outcomes',
    href: '/funcionalidades#monitoreo',
    desc: 'Gráficos de recuperación en tiempo real.',
    icon: BarChart3,
  },
]

const solucionSubMenu = [
  {
    title: 'Nuestra Solución',
    href: '/solucion',
    desc: 'Transformación digital clínica integral.',
    icon: Sparkles,
  },
  {
    title: 'Investigación Científica',
    href: '/investigacion',
    desc: 'Evidencia clínica y base de datos DSS.',
    icon: Brain,
  },
  {
    title: 'Sobre Nosotros',
    href: '/nosotros',
    desc: 'El equipo detrás de Kenkomed.',
    icon: Users,
  },
]

const recursosSubMenu = [
  { title: 'Preguntas Frecuentes', href: '/#preguntas-frecuentes' },
  { title: 'Seguridad & Datos', href: '/seguridad' },
  { title: 'Privacidad', href: '/privacidad' },
  { title: 'Términos de uso', href: '/terminos' },
]

/* ── Scroll hook ──────────────────────────────────────────────── */

function useScrolled(threshold = 15) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    let raf = 0
    const handler = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        setScrolled(window.scrollY > threshold)
      })
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}

/* ── Simple, Rock-Solid SiteHeader Component ──────────────────── */

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const scrolled = useScrolled(15)
  const progress = useScrollProgress()

  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <style>{`
        /* Simple, bulletproof CSS hover dropdowns — zero radix glitches, zero black boxes */
        .hm-nav-group {
          position: relative;
        }

        .hm-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          padding-top: 0.5rem;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(6px);
          transition-property: opacity, transform, visibility;
          transition-duration: 180ms;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 100;
        }

        .hm-nav-group:hover .hm-dropdown-menu,
        .hm-nav-group:focus-within .hm-dropdown-menu {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .hm-dropdown-panel {
          background: var(--card);
          border: var(--hairline);
          border-radius: var(--radius-xl);
          box-shadow: 0 10px 30px -5px oklch(0.12 0.02 246 / 0.12), 0 0 0 1px oklch(0.12 0.02 246 / 0.04);
          padding: 0.75rem;
        }
      `}</style>

      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? [
                'border-b border-border/80',
                'bg-background/95 shadow-sm',
                'backdrop-blur-xl supports-[backdrop-filter]:bg-background/90',
              ]
            : [
                'border-b border-border/40',
                'bg-background/85',
                'backdrop-blur-md supports-[backdrop-filter]:bg-background/75',
              ],
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg p-1 transition-colors hover:bg-foreground/5"
            aria-label="Ir al inicio de Kenkomed"
          >
            <Image
              src="/images/LogoKenko.png"
              alt="Logo Kenkomed"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
              Ken<span className="text-emerald">ko</span>med
            </span>
          </Link>

          {/* Desktop Navigation — Clean, Fast, Bulletproof Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">

            {/* Solución Dropdown */}
            <div className="hm-nav-group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
              >
                Solución
                <ChevronDown size={14} className="text-foreground-muted" />
              </button>
              <div className="hm-dropdown-menu w-72">
                <div className="hm-dropdown-panel flex flex-col gap-1">
                  {solucionSubMenu.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-foreground/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-foreground-muted leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Funcionalidades Dropdown */}
            <div className="hm-nav-group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
              >
                Funcionalidades
                <ChevronDown size={14} className="text-foreground-muted" />
              </button>
              <div className="hm-dropdown-menu w-80">
                <div className="hm-dropdown-panel flex flex-col gap-1">
                  {funcionesSubMenu.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-foreground/5 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground group-hover:text-brand transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-foreground-muted leading-tight mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                  <div className="pt-1 mt-1 border-t border-border/60">
                    <Link
                      href="/funcionalidades"
                      className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-brand hover:bg-brand/10 transition-colors"
                    >
                      Ver todas las funcionalidades
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Recursos & Legal Dropdown */}
            <div className="hm-nav-group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors cursor-pointer"
              >
                Recursos
                <ChevronDown size={14} className="text-foreground-muted" />
              </button>
              <div className="hm-dropdown-menu w-56">
                <div className="hm-dropdown-panel flex flex-col gap-0.5">
                  {recursosSubMenu.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-brand hover:bg-foreground/5 transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Precios Principal Link */}
            <Link
              href="/#pricing"
              className="px-3.5 py-2 rounded-lg text-sm font-bold text-brand bg-brand/10 hover:bg-brand/20 transition-colors"
            >
              Precios
            </Link>

            {/* Nosotros Link */}
            <Link
              href="/nosotros"
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
              Nosotros
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              asChild
              className="bg-brand hover:bg-brand-dark text-white font-semibold text-sm shadow-md shadow-brand/15 transition-all hover:shadow-brand/25"
            >
              <Link href="/#pricing">Ver Planes y Precios</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Drawer */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-foreground hover:bg-foreground/5"
                  aria-label="Abrir menú de navegación"
                >
                  <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100vw-2rem,360px)] overflow-y-auto border-l border-border bg-background text-foreground"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-foreground">
                    <Image
                      src="/images/LogoKenko.png"
                      alt="Logo Kenkomed"
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                    <span className="font-display font-extrabold text-lg">
                      Ken<span className="text-emerald">ko</span>med
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-6" aria-label="Navegación móvil">
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/#pricing"
                      className="rounded-xl px-4 py-3 text-base font-bold text-brand bg-brand/10 border border-brand/20 transition-colors flex items-center justify-between"
                    >
                      Precios y Planes
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {[
                    { label: 'Solución & Empresa', items: solucionSubMenu },
                    { label: 'Funcionalidades', items: funcionesSubMenu },
                    { label: 'Recursos & Legal', items: recursosSubMenu },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-foreground-muted">
                        {label}
                      </p>
                      <div className="flex flex-col gap-1">
                        {items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/85 transition-colors hover:bg-foreground/5 hover:text-brand"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-col gap-2 border-t border-border pt-4">
                    <Button
                      asChild
                      className="w-full bg-brand font-semibold text-white hover:bg-brand-dark"
                    >
                      <Link href="/#pricing">Ver Planes y Precios</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </header>
    </>
  )
}
