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
import {
  RiArrowDownSLine as ChevronDown,
  RiArrowRightLine as ArrowRight,
  RiBrainLine as Brain,
  RiQrCodeLine as QrCode,
  RiFileTextLine as FileText,
  RiBarChartBoxLine as BarChart3,
  RiShieldCheckLine as ShieldCheck,
  RiSparklingLine as Sparkles,
  RiTeamLine as Users
} from 'react-icons/ri'
import { DropdownNavigation, NavItem } from '@/components/ui/dropdown-navigation'

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

const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: "Solución",
    subMenus: [
      {
        items: solucionSubMenu.map(item => ({
          label: item.title,
          description: item.desc,
          icon: item.icon,
          href: item.href,
        }))
      }
    ]
  },
  {
    id: 2,
    label: "Funcionalidades",
    subMenus: [
      {
        items: [
          ...funcionesSubMenu.map(item => ({
            label: item.title,
            description: item.desc,
            icon: item.icon,
            href: item.href,
          })),
          {
            label: "Ver todas las funcionalidades",
            icon: ArrowRight,
            href: "/funcionalidades",
          }
        ]
      }
    ]
  },
  {
    id: 3,
    label: "Precios",
    link: "/#pricing"
  },
  {
    id: 4,
    label: "Nosotros",
    link: "/nosotros"
  },
  {
    id: 5,
    label: "Recursos",
    subMenus: [
      {
        items: recursosSubMenu.map(item => ({
          label: item.title,
          href: item.href,
        }))
      }
    ]
  }
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
        /* ── Removing hm-nav-group old styles since we use framer-motion now ── */
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" aria-label="Navegación principal">
            <DropdownNavigation navItems={NAV_ITEMS} />
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild>
              <Link href="/#contact">Solicitar Demo</Link>
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
                      className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:text-brand transition-colors flex items-center justify-between"
                    >
                      Precios
                      <ArrowRight size={14} className="text-foreground-muted" />
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
                    <Button asChild className="w-full">
                      <Link href="/#contact">Solicitar Demo Gratuita</Link>
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
