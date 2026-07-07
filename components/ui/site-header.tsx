'use client'

import * as React from 'react'
import type { ComponentProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useScrollProgress } from '@/hooks/use-scroll-animation'

/* ── Nav data ─────────────────────────────────────────────────── */

const productItems = [
  {
    title: 'Panel de control',
    href: '/#product',
    description: 'Métricas, accesos rápidos y gestión del centro.',
  },
  {
    title: 'Admisión QR',
    href: '/funcionalidades#admision-remota',
    description: 'Anamnesis digital antes de la consulta.',
  },
  {
    title: 'Historial clínico',
    href: '/funcionalidades#funcionalidades',
    description: 'Fichas, sesiones y evolución del paciente.',
  },
]

const featureItems = [
  {
    title: 'Gestión de citas',
    href: '/funcionalidades#admision-remota',
    description: 'Agenda clínica y admisión remota con código QR.',
  },
  {
    title: 'Reportes clínicos',
    href: '/funcionalidades#monitoreo',
    description: 'Historial de sesiones y evolución de cuestionarios.',
  },
  {
    title: 'Historial médico',
    href: '/funcionalidades#funcionalidades',
    description: 'Fichas profesionales y escalas validadas.',
  },
  {
    title: 'Ver todas',
    href: '/funcionalidades',
    description: 'Explora el detalle completo del software.',
  },
]

const companyItems = [
  {
    title: 'Nuestra solución',
    href: '/solucion',
    description: 'Cómo Kenkomed transforma tu clínica.',
  },
  {
    title: 'Equipo',
    href: '/#team',
    description: 'Conoce al equipo detrás del producto.',
  },
  {
    title: 'Investigación',
    href: '/investigacion',
    description: 'Base científica y evidencia del producto.',
  },
]

const legalItems = [
  { title: 'Privacidad', href: '/privacidad' },
  { title: 'Términos', href: '/terminos' },
  { title: 'Seguridad', href: '/seguridad' },
  { title: 'Contacto', href: '/#contact' },
]

/* ── Shared sub-components ────────────────────────────────────── */

const ListItem = React.forwardRef<
  React.ComponentRef<typeof Link>,
  ComponentProps<typeof Link> & { title: string }
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          'block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors',
          'hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white',
          className,
        )}
        {...props}
      >
        <div className="text-sm font-semibold text-white/90 leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-xs leading-snug text-white/55 mt-1">{children}</p>
        )}
      </Link>
    </NavigationMenuLink>
  </li>
))
ListItem.displayName = 'ListItem'

/* ── Scroll hook ──────────────────────────────────────────────── */

function useScrolled(threshold = 20) {
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
    // Run immediately so state is correct after hydration
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}

/* ── SiteHeader ───────────────────────────────────────────────── */

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const scrolled = useScrolled(20)
  const progress = useScrollProgress()

  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  /* Standalone trigger/link classes — no accent tokens, pure navy */
  const triggerClass =
    'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/80 transition-colors outline-none' +
    ' hover:bg-white/10 hover:text-white' +
    ' focus:bg-white/10 focus:text-white focus-visible:ring-2 focus-visible:ring-white/30' +
    ' data-[state=open]:bg-white/10 data-[state=open]:text-white' +
    ' disabled:pointer-events-none disabled:opacity-50'

  const linkClass =
    'inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white/80 transition-colors outline-none' +
    ' hover:bg-white/10 hover:text-white' +
    ' focus:bg-white/10 focus:text-white focus-visible:ring-2 focus-visible:ring-white/30'

  return (
    <>
      {/* Scroll progress line */}
      <div
        className="scroll-progress"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <header
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? [
                'border-b border-white/10',
                'bg-[#05111e]/96 shadow-lg shadow-black/30',
                'backdrop-blur-xl supports-[backdrop-filter]:bg-[#05111e]/90',
              ]
            : [
                'border-b border-white/5',
                'bg-[#05111e]/80',
                'backdrop-blur-md supports-[backdrop-filter]:bg-[#05111e]/70',
              ],
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg p-1 transition-colors hover:bg-white/10"
          >
            <Image
              src="/images/LogoKenko.png"
              alt="Kenkomed"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="font-display hidden text-lg font-bold tracking-tight text-white sm:inline">
              Ken<span className="text-[var(--kenko-pulse)]">ko</span>med
            </span>
          </Link>

          {/* Desktop nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>

              {/* Producto */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClass}>
                  Producto
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 md:w-[420px] lg:w-[520px] lg:grid-cols-[.8fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/demo"
                          className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-gradient-to-b from-brand/30 to-emerald/20 p-6 no-underline outline-none ring-1 ring-white/10 transition-all hover:from-brand/40 hover:to-emerald/30 focus:shadow-md"
                        >
                          <div className="mb-2 text-base font-bold text-white">Kenkomed</div>
                          <p className="text-xs leading-snug text-white/60">
                            Software de gestión clínica para kinesiólogos en Chile.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {productItems.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Funcionalidades */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClass}>
                  Funcionalidades
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                    {featureItems.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Empresa */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerClass}>
                  Empresa
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[480px] md:grid-cols-2">
                    {companyItems.map((item) => (
                      <ListItem key={item.title} href={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                    {legalItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block rounded-lg p-3 text-sm font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {item.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Demo link */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/demo" className={linkClass}>
                    Demo
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              asChild
              className="text-white/80 hover:bg-white/10 hover:text-white"
            >
              <Link href="/demo">Ver demo</Link>
            </Button>
            <Button
              asChild
              className="bg-emerald hover:bg-emerald-dark text-[#05111e] font-semibold shadow-md shadow-emerald/20 transition-all hover:shadow-emerald/30"
            >
              <Link href="/#contact">Solicitar demo</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  aria-label="Abrir menú"
                >
                  <MenuToggleIcon open={mobileOpen} className="size-5" duration={300} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100vw-2rem,360px)] overflow-y-auto border-l border-white/10 bg-[#05111e] text-white"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-white">
                    <Image
                      src="/images/LogoKenko.png"
                      alt="Kenkomed"
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                    <span className="font-display font-bold">
                      Ken<span className="text-[var(--kenko-pulse)]">ko</span>med
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-6 flex flex-col gap-6" aria-label="Menú móvil">
                  {[
                    { label: 'Producto', items: productItems },
                    { label: 'Funcionalidades', items: featureItems },
                    { label: 'Empresa', items: [...companyItems, ...legalItems] },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
                        {label}
                      </p>
                      <div className="flex flex-col gap-0.5">
                        {items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                    <Button
                      variant="outline"
                      asChild
                      className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                    >
                      <Link href="/demo">Ver demo</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-emerald font-semibold text-[#05111e] hover:bg-emerald-dark"
                    >
                      <Link href="/#contact">Solicitar demo</Link>
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
