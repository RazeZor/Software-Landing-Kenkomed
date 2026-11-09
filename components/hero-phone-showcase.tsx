'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface HeroPhoneScreen {
  id: string
  title: string
  label: string
  src: string
  alt: string
  tag: string
}

const SCREENS: HeroPhoneScreen[] = [
  {
    id: 'panel',
    title: 'Panel',
    label: 'Panel de Control',
    src: '/software/panelphone_clean.png',
    alt: 'Panel de control clínico Kenkomed',
    tag: 'Turno Activo',
  },
  {
    id: 'agenda',
    title: 'Agenda',
    label: 'Agenda Semanal',
    src: '/software/agendaphone_clean.png',
    alt: 'Agenda multi-box y citas de pacientes',
    tag: 'Multi-Box',
  },
  {
    id: 'estadisticas',
    title: 'Estadísticas',
    label: 'Outcomes & EVA',
    src: '/software/estadisticasphone_clean.png',
    alt: 'Estadísticas de recuperación y escalas clínicas',
    tag: 'Resultados',
  },
  {
    id: 'sesion',
    title: 'Escalas',
    label: 'Escalas Clínicas',
    src: '/software/sesionphone_clean.png',
    alt: 'Escalas funcionales y cuestionarios validados',
    tag: 'Oswestry / LEFS',
  },
  {
    id: 'historial',
    title: 'Historial',
    label: 'Historial Clínico',
    src: '/software/historialphone_clean.png',
    alt: 'Historial clínico digital Ley 20.584',
    tag: 'Ley 20.584',
  },
  {
    id: 'anamnesis',
    title: 'Anamnesis',
    label: 'Admisión Remota',
    src: '/software/anamnesisphone_clean.png',
    alt: 'Formulario de admisión remota y mapa de dolor',
    tag: 'QR Móvil',
  },
]

export function HeroPhoneShowcase({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isPausedByUser, setIsPausedByUser] = useState(false)
  const [isFocusedWithin, setIsFocusedWithin] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SCREENS.length)
  }, [])

  useEffect(() => {
    if (isHovered || isPausedByUser || isFocusedWithin) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered, isPausedByUser, isFocusedWithin, nextSlide])

  const activeScreen = SCREENS[activeIndex]

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusedWithin(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsFocusedWithin(false)
        }
      }}
      className={cn('relative flex flex-col items-center justify-center select-none py-2', className)}
    >
      <style>{`
        @keyframes k-hero-phone-float {
          0%, 100% {
            transform: perspective(1200px) translateY(4px) rotateY(-5deg) rotateX(2deg);
          }
          50% {
            transform: perspective(1200px) translateY(-6px) rotateY(-2deg) rotateX(1deg);
          }
        }

        .k-hero-phone-device {
          animation: k-hero-phone-float 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          @media (prefers-reduced-motion: reduce) {
            animation: none;
            transform: none;
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* ── 3D Phone Mockup ── */}
      <div className="k-hero-phone-device relative w-[290px] xs:w-[310px] sm:w-[340px] h-[580px] xs:h-[620px] sm:h-[650px]">
        {/* Surgical Titanium Hardware Rim */}
        <div
          className="absolute inset-0 rounded-[52px] shadow-[0_24px_50px_-15px_rgba(15,23,42,0.22)]"
          style={{
            background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 22%, #e2e8f0 45%, #94a3b8 75%, #cbd5e1 100%)',
          }}
        />

        {/* Physical Hardware Buttons */}
        <div className="absolute -left-[3px] top-28 w-[4px] h-12 rounded-l-md bg-slate-300" />
        <div className="absolute -left-[3px] top-44 w-[4px] h-12 rounded-l-md bg-slate-300" />
        <div className="absolute -right-[3px] top-36 w-[4px] h-16 rounded-r-md bg-slate-300" />

        {/* Bezel Interior (Deep Obsidian) */}
        <div className="absolute inset-[4px] rounded-[48px] bg-[#090d16]" />

        {/* Phone Screen Area */}
        <div className="absolute inset-[10px] rounded-[42px] overflow-hidden bg-[#f8fafc] border border-slate-200/80 flex flex-col select-none">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-3 w-[100px] h-[28px] rounded-full bg-black z-40 flex items-center justify-between px-3 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-[#111927] border border-slate-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-950/80" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-sans font-bold text-emerald-400">DSS</span>
            </div>
          </div>

          {/* iOS Status Bar */}
          <div className="relative z-30 h-11 px-7 flex items-center justify-between text-xs font-semibold text-slate-700 pt-1">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-2.5 fill-current text-slate-700" viewBox="0 0 18 12" aria-hidden="true">
                <rect x="0" y="8" width="3" height="4" rx="0.5" />
                <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
                <rect x="9" y="3" width="3" height="9" rx="0.5" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
              </svg>
              <span className="text-[10px] font-bold text-brand">5G</span>
              <div className="w-5 h-2.5 border border-slate-500 rounded-[3px] p-[1px] flex items-center">
                <div className="w-full h-full bg-emerald-500 rounded-[1.5px]" />
              </div>
            </div>
          </div>

          {/* Kenkomed App Header inside Phone */}
          <div className="relative z-20 px-4 pt-1 pb-2.5 bg-white border-b border-slate-200/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/images/LogoKenko.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span className="font-display font-extrabold text-sm tracking-tight text-slate-900">
                  Kenko<span className="text-emerald">med</span>
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Box 2
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-sky-50 text-brand border border-sky-200">
                  {activeScreen.tag}
                </span>
                <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center text-[10px] font-bold text-white">
                  FM
                </div>
              </div>
            </div>

            {/* Horizontal Filter Pills to Switch Photos */}
            <div className="flex gap-1.5 mt-2 overflow-x-auto no-scrollbar py-0.5" role="tablist" aria-label="Vistas de la plataforma móvil">
              {SCREENS.map((item, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      'text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer',
                      isActive
                        ? 'bg-brand text-white font-bold'
                        : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/80'
                    )}
                  >
                    {item.title}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Photo Display Viewport */}
          <div className="relative flex-1 w-full overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="w-full h-full relative"
              >
                <img
                  src={activeScreen.src}
                  alt={activeScreen.alt}
                  width={320}
                  height={540}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  {...(activeIndex === 0
                    ? { fetchPriority: 'high' as const }
                    : { fetchPriority: 'low' as const, loading: 'lazy' as const })}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="h-6 w-full flex items-center justify-center bg-white border-t border-slate-200/60 shrink-0 z-30">
            <div className="w-28 h-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>

      {/* Dots Indicator + Pause Control beneath phone */}
      <div className="flex items-center gap-2 mt-4 z-20">
        <div className="flex items-center gap-1.5" role="group" aria-label="Seleccionar captura">
          {SCREENS.map((screen, idx) => (
            <button
              key={screen.id}
              type="button"
              aria-label={`Ver captura ${screen.label}`}
              aria-current={idx === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                'h-2 rounded-full transition-all cursor-pointer',
                idx === activeIndex
                  ? 'w-6 bg-brand'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIsPausedByUser((prev) => !prev)}
          aria-label={isPausedByUser ? 'Reanudar rotación de capturas' : 'Pausar rotación de capturas'}
          aria-pressed={isPausedByUser}
          className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
        >
          {isPausedByUser ? <Play size={11} aria-hidden="true" /> : <Pause size={11} aria-hidden="true" />}
        </button>
      </div>
    </div>
  )
}

export default HeroPhoneShowcase
