'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  RiShieldCheckLine, 
  RiCloseLine, 
  RiCheckLine, 
  RiSettings4Line, 
  RiInformationLine 
} from 'react-icons/ri'
import { Button } from '@/components/ui/button'

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

const COOKIE_STORAGE_KEY = 'kenkomed_cookie_consent'

interface ConsentPreferences {
  essential: true
  analytics: boolean
  marketing: boolean
  timestamp: string
}

export function CookieBanner() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsConsent, setAnalyticsConsent] = useState(true)
  const [marketingConsent, setMarketingConsent] = useState(false)

  // Initialize and check saved consent
  useEffect(() => {
    setMounted(true)

    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY)
      if (!saved) {
        // Show banner after brief delay for smooth appearance
        const timer = setTimeout(() => setIsOpen(true), 1200)
        return () => clearTimeout(timer)
      } else {
        const parsed: ConsentPreferences = JSON.parse(saved)
        setAnalyticsConsent(parsed.analytics)
        setMarketingConsent(parsed.marketing)
      }
    } catch {
      setIsOpen(true)
    }

    // Listen to manual open triggers from footer or privacy page
    const handleOpen = () => {
      setIsOpen(true)
      setShowPreferences(true)
    }

    window.addEventListener('open-cookie-banner', handleOpen)
    return () => window.removeEventListener('open-cookie-banner', handleOpen)
  }, [])

  // Push consent state to Google Consent Mode v2 / GTM dataLayer
  const updateGtmConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      const consentState = {
        analytics_storage: analytics ? 'granted' : 'denied',
        ad_storage: marketing ? 'granted' : 'denied',
        ad_user_data: marketing ? 'granted' : 'denied',
        ad_personalization: marketing ? 'granted' : 'denied',
      }

      window.dataLayer.push(['consent', 'update', consentState])
      window.dataLayer.push({
        event: 'cookie_consent_update',
        consent_analytics: analytics,
        consent_marketing: marketing,
      })
    }
  }

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const preferences: ConsentPreferences = {
      essential: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    }

    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(preferences))
    } catch {}

    updateGtmConsent(analytics, marketing)
    setIsOpen(false)
    setShowPreferences(false)
  }

  const handleAcceptAll = () => {
    setAnalyticsConsent(true)
    setMarketingConsent(true)
    saveConsent(true, true)
  }

  const handleRejectAll = () => {
    setAnalyticsConsent(false)
    setMarketingConsent(false)
    saveConsent(false, false)
  }

  const handleSaveCustom = () => {
    saveConsent(analyticsConsent, marketingConsent)
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <aside
          role="region"
          aria-label="Consentimiento de Cookies"
          className="fixed bottom-5 left-5 z-50 w-[calc(100%-2.5rem)] sm:w-full sm:max-w-md pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="rounded-2xl border border-border/80 bg-background/95 p-5 shadow-2xl backdrop-blur-md text-foreground transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <RiShieldCheckLine className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Privacidad & Cookies en Kenkomed
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Cumplimiento Ley N° 19.628 y Salud Digital
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleRejectAll}
                className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                aria-label="Cerrar y rechazar opcionales"
              >
                <RiCloseLine className="size-5" />
              </button>
            </div>

            {/* Content view */}
            {!showPreferences ? (
              <div className="mt-3 space-y-3">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Utilizamos cookies esenciales para el funcionamiento de la plataforma y cookies analíticas para medir el rendimiento y optimizar la experiencia de los kinesiólogos. Puedes aceptar todas o elegir solo las necesarias.
                </p>

                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <RiInformationLine className="size-4 shrink-0" />
                  <Link 
                    href="/privacidad" 
                    className="hover:underline transition-all"
                  >
                    Conoce nuestra Política de Privacidad
                  </Link>
                </div>

                {/* Primary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <Button
                    size="sm"
                    onClick={handleAcceptAll}
                    className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs h-9 shadow-sm"
                  >
                    <RiCheckLine className="size-4 mr-1" />
                    Aceptar todas
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleRejectAll}
                    className="w-full sm:flex-1 text-xs h-9 hover:bg-muted"
                  >
                    Solo esenciales
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowPreferences(true)}
                    className="px-2.5 text-xs h-9 hover:bg-muted text-muted-foreground hover:text-foreground"
                    title="Configurar preferencias"
                  >
                    <RiSettings4Line className="size-4" />
                  </Button>
                </div>
              </div>
            ) : (
              /* Detailed Preferences view */
              <div className="mt-3 space-y-3.5">
                <p className="text-xs text-muted-foreground">
                  Elige qué categorías de cookies permites durante tu navegación:
                </p>

                <div className="space-y-2.5 rounded-xl border border-border/60 bg-muted/30 p-3 text-xs">
                  {/* Essential Cookies */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-foreground flex items-center gap-1">
                        Técnicas y Esenciales
                        <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded-full font-normal">
                          Siempre activas
                        </span>
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                        Garantizan la seguridad, navegación, autenticación y estabilidad básica del sistema.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      aria-label="Cookies técnicas obligatorias"
                      className="size-4 mt-0.5 accent-primary cursor-not-allowed opacity-75"
                    />
                  </div>

                  <div className="h-px bg-border/40" />

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-foreground">
                        Analíticas y Métricas (GTM / GA4)
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                        Nos permiten comprender cómo interactúan los usuarios con la web para mejorar la usabilidad clínica.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      id="cookie-analytics"
                      checked={analyticsConsent}
                      onChange={(e) => setAnalyticsConsent(e.target.checked)}
                      aria-label="Permitir cookies analíticas"
                      className="size-4 mt-0.5 accent-primary cursor-pointer rounded"
                    />
                  </div>

                  <div className="h-px bg-border/40" />

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-foreground">
                        Publicidad & Campañas
                      </p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                        Permiten medir conversiones y relevancia de anuncios sobre software de kinesiología.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      id="cookie-marketing"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      aria-label="Permitir cookies de marketing"
                      className="size-4 mt-0.5 accent-primary cursor-pointer rounded"
                    />
                  </div>
                </div>

                {/* Preference Buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <Button
                    size="sm"
                    onClick={handleSaveCustom}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs h-9"
                  >
                    Guardar preferencias
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowPreferences(false)}
                    className="text-xs h-9 hover:bg-muted"
                  >
                    Volver
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
  )
}
