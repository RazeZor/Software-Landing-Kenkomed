'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)

  const phoneNumber = '56940966266'
  const message = 'Hola, estoy interesado en conocer más sobre el software Kenkomed para mi consulta.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  // Show button after a short delay
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000)
    
    // Show tooltip intermittently to attract attention
    const tooltipTimer = setInterval(() => {
      setIsTooltipVisible(true)
      setTimeout(() => setIsTooltipVisible(false), 5000)
    }, 20000) // Every 20 seconds, show for 5 seconds

    return () => {
      clearTimeout(timer)
      clearInterval(tooltipTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Tooltip Assistant Bubble */}
      <div 
        className={`bg-white dark:bg-card text-foreground px-4 py-3 rounded-2xl shadow-lg border border-border/50 max-w-[220px] transition-all duration-500 origin-bottom-right pointer-events-auto flex items-start gap-2 ${
          isTooltipVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex-1">
          <p className="text-sm font-medium leading-tight mb-1">¡Hola! 👋</p>
          <p className="text-xs text-foreground-muted leading-snug">
            Soy el <strong>asistente virtual</strong> de Kenkomed. ¿En qué te puedo ayudar?
          </p>
        </div>
        <button 
          onClick={() => setIsTooltipVisible(false)}
          className="text-foreground-muted hover:text-foreground transition-colors p-0.5"
          aria-label="Cerrar mensaje"
        >
          <X size={14} />
        </button>
        {/* Tail triangle */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-card border-b border-r border-border/50 rotate-45" />
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-[#25D366]/20 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 pointer-events-auto"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <MessageCircle size={28} className="fill-current" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full border border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75" />
      </a>
    </div>
  )
}
