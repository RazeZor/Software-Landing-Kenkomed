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
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useScrollProgress } from '@/hooks/use-scroll-animation'
import {
  RiArrowRightLine as ArrowRight,
  RiStethoscopeLine as Stethoscope,
  RiQrCodeLine as QrCode,
  RiFileTextLine as FileText,
  RiLineChartLine as LineChart,
  RiSparklingLine as Sparkles,
  RiFlaskLine as Flask,
  RiTeamLine as Team,
  RiBookOpenLine as BookOpen,
  RiQuestionnaireLine as Questionnaire,
  RiShieldCheckLine as ShieldCheck,
  RiPriceTag3Line as PriceTag,
  RiWhatsappLine as Whatsapp,
  RiArrowRightSLine as ChevronRight,
  RiCheckLine as Check,
} from 'react-icons/ri'
import { DropdownNavigation, NavItem } from '@/components/ui/dropdown-navigation'

/* ── Nav Links Configuration ──────────────────────────────────── */

const funcionesSubMenu = [
  {
    title: 'DSS Clínico & Algoritmos',
    href: '/funcionalidades#plataforma',
    desc: 'Escalas EVA, PSFS, Barthel y banderas rojas.',
    icon: Stethoscope,
    color: 'text-emerald bg-emerald/10 border-emerald/20',
  },
  {
    title: 'Admisión Express QR',
    href: '/funcionalidades#admision-remota',
    desc: 'Anamnesis inteligente desde el celular.',
    icon: QrCode,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'Ficha Digital Unificada',
    href: '/funcionalidades#funcionalidades',
    desc: 'Historial clínico, sesiones y evoluciones.',
    icon: FileText,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  },
  {
    title: 'Monitoreo & Outcomes',
    href: '/funcionalidades#monitoreo',
    desc: 'Gráficos de recuperación en tiempo real.',
    icon: LineChart,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
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
    icon: Flask,
  },
  {
    title: 'Sobre Nosotros',
    href: '/nosotros',
    desc: 'El equipo detrás de Kenkomed.',
    icon: Team,
  },
]

const recursosSubMenu = [
  { title: 'Blog & Guías Clínicas', href: '/blog', desc: 'Guías de Ficha Digital, SOAP e Isapre', icon: BookOpen, badge: 'SEO' },
  { title: 'Preguntas Frecuentes', href: '/#preguntas-frecuentes', desc: 'Respuestas a dudas comunes', icon: Questionnaire },
  { title: 'Seguridad & Datos', href: '/seguridad', desc: 'Cumplimiento Ley 21.719 y cifrado', icon: ShieldCheck },
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
            href: item.href,
          })),
          {
            label: "Ver todas las funcionalidades",
            href: "/funcionalidades",
          }
        ]
      }
    ]
  },
  {
    id: 3,
    label: "Precios",
    link: "/precios"
  },
  {
    id: 4,
    label: "Blog",
    link: "/blog"
  },
  {
    id: 5,
    label: "Nosotros",
    link: "/nosotros"
  },
  {
    id: 6,
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

          {/* Mobile Hamburger Drawer Overlay */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-foreground hover:bg-foreground/5 relative z-50"
                  aria-label="Abrir menú de navegación"
                >
                  <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                hideCloseButton={true}
                className="w-full sm:max-w-md h-[100dvh] max-h-[100dvh] p-0 border-l border-border/60 bg-background/95 backdrop-blur-2xl text-foreground flex flex-col justify-between shadow-2xl overflow-hidden"
              >
                {/* Header in drawer */}
                <SheetHeader className="flex flex-row items-center justify-between border-b border-border/50 px-5 py-4 bg-card/50 backdrop-blur-md shrink-0 space-y-0 text-left">
                  <SheetTitle className="flex items-center gap-2.5 text-foreground text-left font-normal m-0 p-0">
                    <Image
                      src="/images/LogoKenko.png"
                      alt="Logo Kenkomed"
                      width={30}
                      height={30}
                      className="h-7.5 w-7.5 object-contain"
                    />
                    <span className="font-display font-extrabold text-lg tracking-tight text-foreground">
                      Ken<span className="text-emerald">ko</span>med
                    </span>
                    <span className="rounded-full bg-emerald/10 border border-emerald/20 text-emerald text-[10px] font-bold px-2 py-0.5">
                      DSS 2.0
                    </span>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navegación principal y accesos a servicios de Kenkomed
                  </SheetDescription>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full h-8 px-3 text-xs text-foreground-muted hover:text-foreground hover:bg-foreground/5"
                  >
                    Cerrar
                  </Button>
                </SheetHeader>

                {/* Scrollable Nav Content */}
                <div className="flex-1 overflow-y-auto px-5 py-5 space-y-6 scrollbar-thin">
                  {/* Featured Pricing Card */}
                  <Link
                    href="/precios"
                    onClick={() => setMobileOpen(false)}
                    className="group relative block overflow-hidden rounded-2xl border border-emerald/30 bg-gradient-to-br from-emerald/15 via-primary/10 to-transparent p-4 transition-all duration-300 hover:border-emerald/50 active:scale-[0.98] shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald/20 border border-emerald/30 px-2.5 py-0.5 text-[11px] font-bold text-emerald">
                          <PriceTag className="h-3 w-3" />
                          <span>Desde $15.990 CLP/mes</span>
                        </div>
                        <h4 className="font-display text-base font-bold text-foreground group-hover:text-emerald transition-colors pt-1">
                          Precios & Planes Transparentes
                        </h4>
                        <p className="text-xs text-foreground-muted leading-relaxed">
                          Sin costos ocultos ni permanencia. Incluye 14 días de prueba sin compromiso.
                        </p>
                      </div>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald/20 text-emerald group-hover:scale-110 transition-transform">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </Link>

                  {/* Funcionalidades */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between px-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-foreground-muted">
                        Funcionalidades Clínicas
                      </p>
                      <span className="text-[10px] font-medium text-emerald bg-emerald/10 px-2 py-0.5 rounded-full">
                        DSS Incluido
                      </span>
                    </div>
                    <div className="grid gap-2">
                      {funcionesSubMenu.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/40 p-3 transition-all hover:bg-card hover:border-border active:scale-[0.98] group"
                          >
                            <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border", item.color)}>
                              <Icon className="h-4.5 w-4.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-foreground group-hover:text-emerald transition-colors truncate">
                                {item.title}
                              </p>
                              <p className="text-[11px] text-foreground-muted truncate">
                                {item.desc}
                              </p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-foreground-muted opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Solución & Empresa */}
                  <div className="space-y-2.5">
                    <p className="px-1 text-[11px] font-bold uppercase tracking-wider text-foreground-muted">
                      Nuestra Solución & Empresa
                    </p>
                    <div className="grid gap-2">
                      {solucionSubMenu.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/30 p-2.5 transition-all hover:bg-card hover:border-border active:scale-[0.98] group"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-foreground-muted group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                                {item.title}
                              </p>
                              <p className="text-[11px] text-foreground-muted truncate">
                                {item.desc}
                              </p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-foreground-muted opacity-40 group-hover:opacity-100 transition-all" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>

                  {/* Recursos & Blog */}
                  <div className="space-y-2.5">
                    <p className="px-1 text-[11px] font-bold uppercase tracking-wider text-foreground-muted">
                      Recursos & Guías SEO
                    </p>
                    <div className="grid gap-1.5">
                      {recursosSubMenu.map((item) => {
                        const Icon = item.icon
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-foreground/85 transition-colors hover:bg-foreground/5 hover:text-primary group"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <Icon className="h-4 w-4 text-foreground-muted group-hover:text-primary transition-colors shrink-0" />
                              <span className="truncate">{item.title}</span>
                              {item.badge && (
                                <span className="rounded bg-primary/10 text-primary text-[9px] font-bold px-1.5 py-0.2 shrink-0">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <ChevronRight className="h-3.5 w-3.5 text-foreground-muted opacity-40 group-hover:opacity-100 transition-all" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Sticky Action Footer */}
                <div className="border-t border-border/60 p-5 bg-card/80 backdrop-blur-xl space-y-2.5 shrink-0">
                  <Button asChild size="lg" className="w-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 text-sm rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                    <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                      <span>Solicitar Demo Gratuita</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <a
                    href="https://wa.me/56940966266"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald/30 bg-emerald/5 px-4 py-2.5 text-xs font-semibold text-emerald transition-all hover:bg-emerald/10 active:scale-[0.98]"
                  >
                    <Whatsapp className="h-4 w-4" />
                    <span>¿Dudas? Hablar por WhatsApp</span>
                  </a>

                  <p className="text-[10px] text-center text-foreground-muted font-medium pt-1 flex items-center justify-center gap-1">
                    <Check className="h-3.5 w-3.5 text-emerald shrink-0" />
                    <span>Sin tarjeta de crédito · Configuración guiada en 5 min</span>
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </header>
    </>
  )
}
