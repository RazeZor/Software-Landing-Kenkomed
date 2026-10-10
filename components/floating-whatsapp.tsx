'use client'

import { useState, useEffect } from 'react'
import { RiWhatsappFill, RiCloseLine as X } from 'react-icons/ri'

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const phoneNumber = '56937105872'
  const message = 'Hola, me gustaría obtener más información sobre el software Kenkomed'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Show button after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800)
    
    // Show tooltip intermittently to attract attention
    const tooltipTimer = setInterval(() => {
      setIsTooltipVisible(true)
      setTimeout(() => setIsTooltipVisible(false), 6000)
    }, 25000)

    return () => {
      clearTimeout(timer)
      clearInterval(tooltipTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none"
    >
      {/* Tooltip WhatsApp Bubble */}
      <div 
        className={`bg-white dark:bg-card text-foreground px-4 py-3 rounded-2xl shadow-xl border border-emerald/20 max-w-[240px] transition-all duration-300 origin-bottom-right pointer-events-auto flex items-start gap-2.5 ${
          isTooltipVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <p className="text-xs font-bold text-foreground">WhatsApp Empresa</p>
          </div>
          <p className="text-xs text-foreground-muted leading-snug">
            ¿Dudas o quieres ver una demo? Háblanos directamente aquí.
          </p>
        </div>
        <button 
          onClick={() => setIsTooltipVisible(false)}
          className="text-foreground-muted hover:text-foreground transition-colors p-0.5"
          aria-label="Cerrar notificación"
        >
          <X size={14} />
        </button>
        {/* Tail triangle */}
        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-card border-b border-r border-emerald/20 rotate-45" />
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 pointer-events-auto"
        aria-label="Contactar por WhatsApp (+56 9 3710 5872)"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <RiWhatsappFill size={30} className="fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full border border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
      </a>
    </aside>
  )
}
