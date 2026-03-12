'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'
import { useScrollProgress } from '@/hooks/use-scroll-animation'

const navLinks = [

  { label: 'Producto', href: '/#product' },
  { label: 'Funcionalidades', href: '/#features' },
  { label: 'Equipo', href: '/#team' },
  { label: 'Contacto', href: '/#contact' },
  { label: 'Investigación', href: '/investigacion' },
  { label: 'Información', href: '/#footer' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = useScrollProgress()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/images/LogoKenKo.png"
                alt="Kenkomed logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-display font-bold text-xl text-foreground tracking-tight">
              Ken<span className="text-gradient-blue">ko</span>med
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative group",
                  link.href === '/demo'
                    ? 'text-brand hover:text-brand-dark'
                    : 'text-foreground-muted hover:text-foreground'
                )}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-dark transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Ver Demo
            </Link>
          </div>

          {/* Mobile: Theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
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
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="glass border-t border-border/50 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-border/50">

              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="text-center bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full"
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
