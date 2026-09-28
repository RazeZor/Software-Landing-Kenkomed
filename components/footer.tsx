'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Instagram, Linkedin, Moon, Send, Sun, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <footer className="relative border-t border-border/40 bg-surface text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="relative">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <Image
                src="/images/LogoKenko.png"
                alt="Kenkomed logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-foreground">
                Kenko<span className="text-emerald">med</span>
              </span>
            </Link>
            <p className="mb-6 text-foreground-muted text-sm">
              El software clínico que los kinesiólogos de Chile merecían. Únete a nuestro newsletter para recibir actualizaciones.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Ingresa tu correo"
                className="pr-12 backdrop-blur-sm bg-background/50 border-border"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Suscribirse</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold font-display">Enlaces Rápidos</h3>
            <nav className="space-y-3 text-sm text-foreground-muted">
              <Link href="/funcionalidades" className="block transition-colors hover:text-primary">Funcionalidades</Link>
              <Link href="/solucion" className="block transition-colors hover:text-primary">Nuestra Solución</Link>
              <Link href="/demo" className="block transition-colors hover:text-primary">Ver Demo</Link>
              <Link href="/investigacion" className="block transition-colors hover:text-primary">Investigación</Link>
              <Link href="/nosotros" className="block transition-colors hover:text-primary">Nosotros</Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold font-display">Contacto</h3>
            <address className="space-y-3 text-sm not-italic text-foreground-muted">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Concepción, Chile
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+56940966266" className="hover:text-primary transition-colors">+56 9 4096 6266</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:kenkomedplus@gmail.com" className="hover:text-primary transition-colors">kenkomedplus@gmail.com</a>
              </p>
            </address>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-bold font-display">Síguenos</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full bg-background border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30">
                      <a href="https://www.instagram.com/_kenkomed_/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
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
                    <Button variant="outline" size="icon" className="rounded-full bg-background border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30">
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Conecta en LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="flex items-center space-x-2 text-foreground-muted">
              <Sun className="h-4 w-4" />
              {mounted && (
                <Switch
                  id="dark-mode"
                  checked={isDark}
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                />
              )}
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Modo oscuro
              </Label>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-center md:flex-row">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Kenkomed. Todos los derechos reservados. Hecho en Chile.
          </p>
          <nav className="flex gap-4 text-sm text-foreground-muted">
            <Link href="/privacidad" className="transition-colors hover:text-primary">
              Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-primary">
              Términos de Uso
            </Link>
            <Link href="/seguridad" className="transition-colors hover:text-primary">
              Seguridad
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
