'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AnimatedIcon } from '@/components/ui/animated-icon'
import menu4 from 'react-useanimations/lib/menu4'
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
  RiBookOpenLine as BookOpen,
  RiQuestionnaireLine as Questionnaire,
  RiShieldCheckLine as ShieldCheck,
  RiPriceTag3Line as PriceTag,
  RiWhatsappLine as Whatsapp,
  RiCalendarCheckLine as CalendarCheck,
  RiArrowRightSLine as ChevronRight,
  RiCheckLine as Check,
  RiCloseLine as CloseIcon,
} from 'react-icons/ri'
import { DropdownNavigation, NavItem } from '@/components/ui/dropdown-navigation'

/* ── Nav Links Configuration ──────────────────────────────────── */

const funcionesSubMenu = [
  {
    title: 'Agendamiento & Multi-Box',
    href: '/funcionalidades#funcionalidades',
    desc: 'Reservas online 24/7 con bloqueo atómico.',
    icon: CalendarCheck,
  },
  {
    title: 'Pautas de Ejercicios WhatsApp',
    href: '/funcionalidades#funcionalidades',
    desc: 'Catálogo anatómico y PDF membretado.',
    icon: Whatsapp,
  },
  {
    title: 'DSS Clínico & 13 Escalas',
    href: '/funcionalidades#plataforma',
    desc: '13 escalas validadas, banderas rojas y algoritmos.',
    icon: Stethoscope,
  },
  {
    title: 'Admisión Express QR',
    href: '/funcionalidades#admision-remota',
    desc: 'Anamnesis inteligente desde el celular (14 págs).',
    icon: QrCode,
  },
  {
    title: 'Ficha Digital & Ciclos',
    href: '/funcionalidades#funcionalidades',
    desc: 'Episodios clínicos, evoluciones SOAP y alta.',
    icon: FileText,
  },
  {
    title: 'Monitoreo & Outcomes',
    href: '/funcionalidades#monitoreo',
    desc: 'Gráficos de recuperación en tiempo real.',
    icon: LineChart,
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
]

const recursosSubMenu = [
  { title: 'Blog & Guías Clínicas', href: '/blog', desc: 'Guías de Ficha Digital, SOAP e Isapre', icon: BookOpen, badge: 'Guías' },
  { title: 'Preguntas Frecuentes', href: '/#preguntas-frecuentes', desc: 'Respuestas a dudas comunes', icon: Questionnaire },
  { title: 'Seguridad & Datos', href: '/seguridad', desc: 'Privacidad y cifrado de datos', icon: ShieldCheck },
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
          icon: item.icon,
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
            icon: item.icon,
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
    label: "Recursos",
    subMenus: [
      {
        items: recursosSubMenu.map(item => ({
          label: item.title,
          href: item.href,
          icon: item.icon,
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
  const [funcionalidadesOpen, setFuncionalidadesOpen] = React.useState(false)
  const scrolled = useScrolled(15)
  const progress = useScrollProgress()

  React.useEffect(() => {
    setMobileOpen(false)
    setFuncionalidadesOpen(false)
  }, [pathname])

  // En la página de demo interactiva, no mostramos el header general para dar experiencia 100% full-screen de software
  if (pathname === '/demo' || pathname === '/demo/') {
    return null
  }

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
          <div className="hidden items-center gap-2.5 md:flex">
            <Link
              href="/demo/"
              className="inline-flex items-center gap-2 h-9 px-3.5 rounded-lg text-xs font-semibold text-foreground/80 hover:text-foreground bg-foreground/[0.04] hover:bg-foreground/[0.08] border border-border/70 hover:border-border transition-all duration-200 active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>Ver Demo</span>
            </Link>

            <Button asChild>
              <Link href="/#contact/" className="inline-flex items-center gap-1.5 font-semibold text-xs">
                <span>Solicitar Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Hamburger Drawer Overlay */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-foreground hover:bg-foreground/5 relative z-50 rounded-xl flex items-center justify-center p-2"
                  aria-label="Abrir menú de navegación"
                >
                  <AnimatedIcon
                    animation={menu4}
                    size={22}
                    reverse={mobileOpen}
                    strokeColor="currentColor"
                  />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                hideCloseButton={true}
                className="w-[88vw] sm:max-w-sm h-[100dvh] max-h-[100dvh] p-0 border-l border-border/40 bg-background/98 backdrop-blur-2xl text-foreground flex flex-col justify-between shadow-2xl overflow-hidden"
              >
                {/* Header in drawer */}
                <SheetHeader className="flex flex-row items-center justify-between border-b border-border/40 px-6 py-4.5 bg-background/80 shrink-0 space-y-0 text-left">
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
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navegación principal de Kenkomed
                  </SheetDescription>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-full h-8 w-8 text-foreground-muted hover:text-foreground hover:bg-foreground/5"
                    aria-label="Cerrar menú"
                  >
                    <CloseIcon className="h-5 w-5" />
                  </Button>
                </SheetHeader>

                {/* Editorial Nav Content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                  <nav className="flex flex-col divide-y divide-border/30">
                    <Link
                      href="/solucion"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-display font-semibold text-foreground/90 hover:text-emerald transition-colors"
                    >
                      <span>Solución</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    {/* Funcionalidades con despliegue limpio */}
                    <div className="py-2">
                      <div className="flex items-center justify-between py-1.5">
                        <Link
                          href="/funcionalidades"
                          onClick={() => setMobileOpen(false)}
                          className="text-base font-display font-semibold text-foreground/90 hover:text-emerald transition-colors"
                        >
                          Funcionalidades
                        </Link>
                        <button
                          type="button"
                          onClick={() => setFuncionalidadesOpen(!funcionalidadesOpen)}
                          className="p-1.5 text-foreground-muted hover:text-foreground rounded-lg transition-colors"
                          aria-label="Expandir funcionalidades"
                        >
                          <ChevronRight
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              funcionalidadesOpen && "rotate-90 text-emerald"
                            )}
                          />
                        </button>
                      </div>

                      {funcionalidadesOpen && (
                        <div className="pl-3.5 mt-1 mb-2 space-y-2 border-l-2 border-emerald/30">
                          {funcionesSubMenu.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-xs text-foreground-muted hover:text-foreground transition-colors"
                            >
                              <span className="font-medium text-foreground/90 block">{item.title}</span>
                              <span className="text-[11px] text-foreground-muted/70">{item.desc}</span>
                            </Link>
                          ))}
                          <Link
                            href="/funcionalidades"
                            onClick={() => setMobileOpen(false)}
                            className="inline-flex items-center gap-1 pt-1 text-xs font-semibold text-emerald hover:underline"
                          >
                            <span>Ver todas las funcionalidades</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/precios"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-display font-semibold text-foreground/90 hover:text-emerald transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span>Precios</span>
                        <span className="text-[10px] font-semibold text-emerald bg-emerald/10 border border-emerald/20 px-2 py-0.5 rounded-full">
                          Desde 0,4 UF / mes
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    <Link
                      href="/investigacion"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-display font-semibold text-foreground/90 hover:text-emerald transition-colors"
                    >
                      <span>Investigación Científica</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    <Link
                      href="/blog"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-display font-semibold text-foreground/90 hover:text-emerald transition-colors"
                    >
                      <span>Blog & Guías Clínicas</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    <Link
                      href="/seguridad"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-display font-semibold text-foreground/90 hover:text-emerald transition-colors"
                    >
                      <span>Seguridad & Privacidad</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>
                  </nav>

                  {/* WhatsApp Support Row */}
                  <div className="pt-2">
                    <a
                      href="https://wa.me/56937105872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-border/50 bg-card/60 hover:border-emerald/40 hover:bg-card transition-colors group"
                    >
                      <div className="h-8 w-8 rounded-lg bg-foreground/5 text-foreground flex items-center justify-center shrink-0">
                        <Whatsapp className="h-4 w-4 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground group-hover:text-emerald transition-colors">
                          Soporte por WhatsApp
                        </p>
                        <p className="text-[11px] text-foreground-muted truncate">
                          +56 9 3710 5872 · Respuesta rápida
                        </p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-foreground-muted group-hover:text-emerald transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Clean Bottom Actions */}
                <div className="border-t border-border/40 p-5 bg-background/95 backdrop-blur-md space-y-2.5 shrink-0">
                  <Button asChild size="lg" className="w-full font-semibold text-sm rounded-full bg-emerald hover:bg-emerald/90 text-white shadow-md shadow-emerald/20 flex items-center justify-center gap-2 transition-all">
                    <Link href="/#contact/" onClick={() => setMobileOpen(false)}>
                      <span>Solicitar Demo Gratuita</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>

                  <Link
                    href="/demo/"
                    onClick={() => setMobileOpen(false)}
                    className="w-full h-11 font-semibold text-sm rounded-full border border-border/80 hover:border-border bg-foreground/[0.03] hover:bg-foreground/[0.07] text-foreground flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span>Ver Demo en Vivo</span>
                  </Link>

                  <p className="text-[11px] text-center text-foreground-muted">
                    Sin tarjeta de crédito · Prueba de 14 días
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
