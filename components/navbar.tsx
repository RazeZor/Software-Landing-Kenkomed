'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown, Calendar, FileText, ClipboardList } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { useScrollProgress } from '@/hooks/use-scroll-animation'

const navLinks = [
  { label: 'Producto', href: '/#product' },
  { label: 'Funcionalidades', href: '/funcionalidades' },
  { label: 'Equipo', href: '/#team' },
  { label: 'Contacto', href: '/#contact' },
  { label: 'Nuestra Solución', href: '/solucion' },
  { label: 'Información', href: '/#footer' },
]

const featuresSublinks = [
  {
    label: 'Gestión de Citas',
    description: 'Control de reservas, agenda clínica y admisión remota mediante código QR.',
    href: '/funcionalidades#admision-remota',
    icon: Calendar,
    colorClass: 'bg-blue-50/80 border-blue-200/80 text-blue-600 dark:bg-blue-950/40 dark:border-blue-900/40 dark:text-blue-400'
  },
  {
    label: 'Reportes Clínicos',
    description: 'Historial de sesiones, evolución de cuestionarios y soporte DSS interactivo.',
    href: '/funcionalidades#monitoreo',
    icon: FileText,
    colorClass: 'bg-emerald-50/80 border-emerald-200/80 text-emerald-600 dark:bg-emerald-950/40 dark:border-emerald-900/40 dark:text-emerald-400'
  },
  {
    label: 'Historial Médico',
    description: 'Fichas clínicas profesionales, 14 pasos de anamnesis y 8 escalas validadas.',
    href: '/funcionalidades#funcionalidades',
    icon: ClipboardList,
    colorClass: 'bg-purple-50/80 border-purple-200/80 text-purple-600 dark:bg-purple-950/40 dark:border-purple-900/40 dark:text-purple-400'
  }
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [overHero, setOverHero] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const progress = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const hero = document.querySelector('[data-hero]')
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom
        setOverHero(heroBottom > 80)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLightNav = overHero && !scrolled

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass shadow-sm shadow-border/30 py-3'
            : isLightNav
              ? 'bg-transparent py-5'
              : 'bg-background/80 backdrop-blur-md py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/LogoKenko.png"
                alt="Kenkomed logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className={cn(
              'font-display font-extrabold text-xl tracking-tight transition-colors duration-300',
              isLightNav && !scrolled ? 'text-white' : 'text-foreground'
            )}>
              Ken<span style={{ color: 'var(--kenko-pulse)' }}>ko</span>med
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => {
              if (link.label === 'Funcionalidades') {
                return (
                  <div key={link.label} className="relative group flex items-center">
                    <button className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none cursor-pointer',
                      isLightNav && !scrolled
                        ? 'text-white/75 hover:text-white'
                        : 'text-foreground-muted hover:text-foreground'
                    )}>
                      <span>Funcionalidades</span>
                      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180 text-foreground-subtle group-hover:text-foreground" />
                    </button>
                    {/* Dropdown panel con puente invisible de hover (pt-4) posicionado con solapamiento (top-[calc(100%-8px)]) */}
                    <div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 pt-4 w-[360px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50">
                      <div className="bg-card/95 backdrop-blur-md border border-border/80 shadow-xl rounded-2xl p-3.5 flex flex-col gap-1.5">
                        {featuresSublinks.map((sublink) => {
                          const Icon = sublink.icon
                          return (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-secondary/60 dark:hover:bg-surface-2 transition-all duration-200 group/item"
                            >
                              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300", sublink.colorClass)}>
                                <Icon size={18} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-semibold text-foreground text-sm leading-tight group-hover/item:text-brand transition-colors">
                                  {sublink.label}
                                </p>
                                <p className="text-xs text-foreground-muted mt-1 leading-normal">
                                  {sublink.description}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative group",
                    isLightNav && !scrolled
                      ? 'text-white/75 hover:text-white'
                      : link.href === '/demo'
                        ? 'text-brand hover:text-brand-dark'
                        : 'text-foreground-muted hover:text-foreground'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    'absolute -bottom-0.5 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left',
                    isLightNav && !scrolled ? 'bg-emerald-light' : 'bg-primary'
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/demo"
              style={{
                background: 'linear-gradient(135deg, var(--kenko-mint), var(--kenko-pulse))',
                color: 'var(--kenko-navy)',
                fontFamily: 'var(--font-display), Space Grotesk, sans-serif',
                fontWeight: '700',
                fontSize: '0.875rem',
                letterSpacing: '-0.01em',
                boxShadow: '0 4px 16px oklch(0.66 0.19 163 / 0.35)',
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Ver Demo
            </Link>
          </div>

          {/* Mobile: Theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                isLightNav && !scrolled
                  ? 'text-white hover:bg-white/10'
                  : 'text-foreground hover:bg-secondary'
              )}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 overflow-hidden',
            mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="glass border-t border-border/50 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.label === 'Funcionalidades') {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between w-full text-sm font-medium text-foreground-muted hover:text-foreground transition-colors py-1 focus:outline-none"
                    >
                      <span>Funcionalidades</span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200 text-foreground-subtle",
                          mobileDropdownOpen ? "rotate-180 text-foreground" : ""
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "transition-all duration-300 overflow-hidden pl-4 flex flex-col gap-3.5 border-l border-border/60 ml-2 mt-2",
                        mobileDropdownOpen ? "max-h-80 opacity-100 mb-2 mt-3" : "max-h-0 opacity-0"
                      )}
                    >
                      {featuresSublinks.map((sublink) => {
                        const Icon = sublink.icon
                        return (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => {
                              setMobileDropdownOpen(false)
                              setMobileOpen(false)
                            }}
                            className="flex items-center gap-3 group/item"
                          >
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0", sublink.colorClass)}>
                              <Icon size={14} />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-foreground group-hover/item:text-brand transition-colors">
                                {sublink.label}
                              </span>
                              <span className="text-[10px] text-foreground-muted leading-tight mt-0.5">
                                {sublink.description}
                              </span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                style={{
                  background: 'linear-gradient(135deg, var(--kenko-mint), var(--kenko-pulse))',
                  color: '#05111e',
                  fontFamily: 'var(--font-display), Space Grotesk, sans-serif',
                  fontWeight: '700',
                }}
                className="text-center text-sm px-5 py-2.5 rounded-full"
              >
                Ver Demo
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
