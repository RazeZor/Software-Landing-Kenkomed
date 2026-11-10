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
  RiWhatsappLine as Whatsapp,
  RiWhatsappFill as WhatsappFill,
  RiCalendarCheckLine as CalendarCheck,
  RiArrowRightSLine as ChevronRight,
  RiCloseLine as CloseIcon,
  RiPlayFill as Play,
  RiRefreshLine as RefreshLine,
} from 'react-icons/ri'
import { DropdownNavigation, NavItem } from '@/components/ui/dropdown-navigation'

/* ── Nav Links Configuration ──────────────────────────────────── */

const funcionesSubMenu = [
  {
    title: 'Agendamiento & Multi-Box',
    href: '/funcionalidades#funcionalidades',
    desc: 'Reservas online 24/7 sin cruces de horario.',
    icon: CalendarCheck,
  },
  {
    title: 'Pautas WhatsApp en PDF',
    href: '/funcionalidades#funcionalidades',
    desc: 'Catálogo anatómico enviado en 1 clic.',
    icon: Whatsapp,
  },
  {
    title: 'DSS Clínico & 13 Escalas',
    href: '/funcionalidades#plataforma',
    desc: 'Banderas rojas, puntaje e interpretación.',
    icon: Stethoscope,
  },
  {
    title: 'Admisión Remota QR',
    href: '/funcionalidades#admision-remota',
    desc: 'Anamnesis de 14 páginas previa al box.',
    icon: QrCode,
  },
  {
    title: 'Ficha Digital & SOAP',
    href: '/funcionalidades#funcionalidades',
    desc: 'Evoluciones ordenadas y consentimiento.',
    icon: FileText,
  },
  {
    title: 'Curvas y Reportes',
    href: '/funcionalidades#monitoreo',
    desc: 'Evolución del paciente e informes Isapre.',
    icon: LineChart,
  },
]

const solucionSubMenu = [
  {
    title: 'Nuestra Solución',
    href: '/solucion',
    desc: 'Flujo completo para consultas y centros kinésicos.',
    icon: Sparkles,
  },
  {
    title: 'Investigación Científica',
    href: '/investigacion',
    desc: '13 escalas validadas, PubMed y motor DSS.',
    icon: Flask,
  },
  {
    title: 'Migración Gratuita',
    href: '/#migracion',
    desc: 'Traspaso guiado desde Excel, papel u otro software.',
    icon: RefreshLine,
  },
]

const recursosSubMenu = [
  {
    title: 'Blog & Guías Clínicas',
    href: '/blog',
    desc: 'Guías de ficha digital, SOAP y reembolso Isapre.',
    icon: BookOpen,
    badge: 'Guías',
  },
  {
    title: 'Preguntas Frecuentes',
    href: '/#preguntas-frecuentes',
    desc: 'Dudas sobre planes, operación y puesta en marcha.',
    icon: Questionnaire,
  },
  {
    title: 'Seguridad & Datos',
    href: '/seguridad',
    desc: 'Privacidad, roles y cumplimiento Ley 20.584 / 21.719.',
    icon: ShieldCheck,
  },
]

const NAV_ITEMS: NavItem[] = [
  {
    id: 1,
    label: 'Solución',
    subMenus: [
      {
        items: solucionSubMenu.map((item) => ({
          label: item.title,
          description: item.desc,
          href: item.href,
          icon: item.icon,
        })),
      },
    ],
  },
  {
    id: 2,
    label: 'Funcionalidades',
    columns: 2,
    footerLink: {
      label: 'Explorar catálogo completo de 26 módulos',
      href: '/funcionalidades',
    },
    subMenus: [
      {
        title: 'Ecosistema clínico kenkomed',
        items: funcionesSubMenu.map((item) => ({
          label: item.title,
          description: item.desc,
          href: item.href,
          icon: item.icon,
        })),
      },
    ],
  },
  {
    id: 3,
    label: 'Precios',
    link: '/precios',
  },
  {
    id: 4,
    label: 'Blog',
    link: '/blog',
  },
  {
    id: 5,
    label: 'Recursos',
    subMenus: [
      {
        items: recursosSubMenu.map((item) => ({
          label: item.title,
          description: item.desc,
          href: item.href,
          icon: item.icon,
          badge: item.badge,
        })),
      },
    ],
  },
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

/* ── SiteHeader Component ─────────────────────────────────────── */

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

  // En la página de demo interactiva ocultamos el header para experiencia full-screen
  if (pathname === '/demo' || pathname === '/demo/') {
    return null
  }

  return (
    <>
      {/* Skip to content para usuarios de teclado */}
      <a
        href="#main-content"
        onClick={(e) => {
          const main = document.querySelector('main')
          if (main) {
            e.preventDefault()
            main.setAttribute('tabindex', '-1')
            main.focus()
            main.scrollIntoView()
          }
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-xs focus:font-bold focus:text-white focus:shadow-lg"
      >
        Saltar al contenido
      </a>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'border-b border-border/80 bg-background/95 shadow-[0_6px_25px_-16px_rgba(10,35,64,0.18)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/90'
            : 'border-b border-border/40 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/80',
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-xl p-1 transition-colors hover:bg-foreground/[0.04]"
            aria-label="Ir al inicio de Kenkomed"
          >
            <Image
              src="/images/LogoKenko.png"
              alt="Logo Kenkomed"
              width={34}
              height={34}
              className="h-8.5 w-8.5 object-contain"
              priority
            />
            <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
              Kenko<span className="text-emerald">med</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" aria-label="Principal">
            <DropdownNavigation navItems={NAV_ITEMS} />
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://wa.me/56937105872"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Escribir por WhatsApp a Kenkomed"
              title="Hablar por WhatsApp (+56 9 3710 5872)"
              className="hidden xl:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-white text-[#1ea952] transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
            >
              <WhatsappFill className="h-4 w-4" aria-hidden="true" />
            </a>

            <Link
              href="/demo/"
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border/80 bg-white px-4 text-xs font-semibold text-foreground transition-all duration-200 hover:border-brand/40 hover:text-brand active:scale-95 shadow-2xs"
            >
              <Play className="h-2.5 w-2.5 text-brand" aria-hidden="true" />
              <span>Ver Demo</span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-brand px-4.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-dark active:scale-[0.98]"
            >
              <span>Agendar demo</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Hamburger Drawer Overlay */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-foreground hover:bg-foreground/5 relative z-50 rounded-xl flex items-center justify-center p-2"
                  aria-label="Abrir menú"
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
                <SheetHeader className="flex flex-row items-center justify-between border-b border-border/40 px-6 py-4 bg-background/80 shrink-0 space-y-0 text-left">
                  <SheetTitle className="flex items-center gap-2.5 text-foreground text-left font-normal m-0 p-0">
                    <Image
                      src="/images/LogoKenko.png"
                      alt="Logo Kenkomed"
                      width={30}
                      height={30}
                      className="h-7.5 w-7.5 object-contain"
                    />
                    <span className="font-display font-extrabold text-lg tracking-tight text-foreground">
                      Kenko<span className="text-emerald">med</span>
                    </span>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Menú principal de Kenkomed
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
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
                  <nav aria-label="Menú móvil" className="flex flex-col divide-y divide-border/40">
                    <Link
                      href="/solucion"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-3.5 text-base font-display font-semibold transition-colors',
                        pathname === '/solucion' ? 'text-brand' : 'text-foreground/90 hover:text-brand'
                      )}
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
                          className={cn(
                            'text-base font-display font-semibold transition-colors',
                            pathname === '/funcionalidades' ? 'text-brand' : 'text-foreground/90 hover:text-brand'
                          )}
                        >
                          Funcionalidades
                        </Link>
                        <button
                          type="button"
                          onClick={() => setFuncionalidadesOpen(!funcionalidadesOpen)}
                          aria-expanded={funcionalidadesOpen}
                          className="p-1.5 text-foreground-muted hover:text-foreground rounded-lg transition-colors"
                          aria-label="Expandir funcionalidades"
                        >
                          <ChevronRight
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              funcionalidadesOpen && 'rotate-90 text-brand'
                            )}
                          />
                        </button>
                      </div>

                      {funcionalidadesOpen && (
                        <div className="pl-3.5 mt-1 mb-2 space-y-2 border-l-2 border-brand/30">
                          {funcionesSubMenu.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-xs text-foreground-muted hover:text-foreground transition-colors"
                            >
                              <span className="font-semibold text-foreground/90 block">{item.title}</span>
                              <span className="text-[11px] text-foreground-muted/80">{item.desc}</span>
                            </Link>
                          ))}
                          <Link
                            href="/funcionalidades"
                            onClick={() => setMobileOpen(false)}
                            className="inline-flex items-center gap-1 pt-1 text-xs font-semibold text-brand hover:underline"
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
                      className={cn(
                        'flex items-center justify-between py-3.5 text-base font-display font-semibold transition-colors',
                        pathname === '/precios' ? 'text-brand' : 'text-foreground/90 hover:text-brand'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span>Precios</span>
                        <span className="text-[10px] font-semibold text-emerald-dark bg-emerald/15 border border-emerald/25 px-2 py-0.5 rounded-full">
                          Desde 0,4 UF / mes
                        </span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    <Link
                      href="/investigacion"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-3.5 text-base font-display font-semibold transition-colors',
                        pathname === '/investigacion' ? 'text-brand' : 'text-foreground/90 hover:text-brand'
                      )}
                    >
                      <span>Investigación Científica</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    <Link
                      href="/blog"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-3.5 text-base font-display font-semibold transition-colors',
                        pathname.startsWith('/blog') ? 'text-brand' : 'text-foreground/90 hover:text-brand'
                      )}
                    >
                      <span>Blog & Guías Clínicas</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    <Link
                      href="/#migracion"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-3.5 text-base font-display font-semibold text-foreground/90 hover:text-brand transition-colors"
                    >
                      <span>Migración Gratuita</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>

                    <Link
                      href="/seguridad"
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-3.5 text-base font-display font-semibold transition-colors',
                        pathname === '/seguridad' ? 'text-brand' : 'text-foreground/90 hover:text-brand'
                      )}
                    >
                      <span>Seguridad & Privacidad</span>
                      <ChevronRight className="h-4 w-4 text-foreground-muted/50" />
                    </Link>
                  </nav>

                  {/* WhatsApp Support Row */}
                  <div className="pt-1">
                    <a
                      href="https://wa.me/56937105872"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card hover:border-[#25D366]/50 transition-colors group"
                    >
                      <div className="h-8 w-8 rounded-lg bg-[#25D366]/10 text-[#1ea952] flex items-center justify-center shrink-0">
                        <WhatsappFill className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-foreground group-hover:text-brand transition-colors">
                          Soporte por WhatsApp
                        </p>
                        <p className="text-[11px] text-foreground-muted truncate">
                          +56 9 3710 5872 · Atención en Chile
                        </p>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-foreground-muted group-hover:text-brand transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Clean Bottom Actions */}
                <div className="border-t border-border/40 p-5 bg-background/95 backdrop-blur-md space-y-2.5 shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="w-full font-bold text-sm rounded-full bg-brand hover:bg-brand-dark text-white shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Link href="/#contact" onClick={() => setMobileOpen(false)}>
                      <span>Agendar demo gratuita</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>

                  <Link
                    href="/demo/"
                    onClick={() => setMobileOpen(false)}
                    className="w-full h-11 font-semibold text-sm rounded-full border border-border/80 hover:border-brand/40 bg-white hover:text-brand text-foreground flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    <Play className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    <span>Ver Demo en Vivo</span>
                  </Link>

                  <p className="text-[11px] text-center text-foreground-muted">
                    Demo guiada sin costo · Implementación acompañada
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
