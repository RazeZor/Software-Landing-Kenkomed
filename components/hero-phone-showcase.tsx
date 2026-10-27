'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    tag: 'Ley 21.719',
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
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SCREENS.length)
  }, [])

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isHovered, nextSlide])

  // Parallax tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8
    setMouseOffset({ x, y })
  }

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const activeScreen = SCREENS[activeIndex]

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn("relative flex flex-col items-center justify-center select-none py-2", className)}
    >
      <style>{`
        @keyframes k-hero-phone-float {
          0%, 100% {
            transform: perspective(1200px) translateY(6px) rotateY(-8deg) rotateX(4deg);
          }
          50% {
            transform: perspective(1200px) translateY(-10px) rotateY(-2deg) rotateX(2deg);
          }
        }

        @keyframes k-hero-glass-shine {
          0%, 100% { transform: translateX(-120%); }
          50% { transform: translateX(120%); }
        }

        @keyframes k-hero-island-pulse {
          0%, 100% { box-shadow: 0 0 0 rgba(16, 185, 129, 0); }
          50% { box-shadow: 0 0 12px rgba(16, 185, 129, 0.4); }
        }

        .k-hero-phone-device {
          animation: k-hero-phone-float 6.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        .k-hero-glass-reflection {
          animation: k-hero-glass-shine 7.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        .k-hero-island {
          animation: k-hero-island-pulse 3s ease-in-out infinite;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Ambient soft glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[520px] rounded-full pointer-events-none blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, rgba(16, 185, 129, 0.08) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* ── 3D Floating Phone Mockup ── */}
      <div
        className="k-hero-phone-device relative w-[290px] xs:w-[310px] sm:w-[340px] h-[580px] xs:h-[620px] sm:h-[650px] transition-transform duration-200 ease-out"
        style={{
          transform: `perspective(1200px) rotateY(${mouseOffset.x - 7}deg) rotateX(${mouseOffset.y + 3}deg)`,
        }}
      >
        {/* Surgical Titanium Hardware Rim */}
        <div
          className="absolute inset-0 rounded-[52px] shadow-[0_25px_60px_-15px_rgba(2,132,199,0.22),0_12px_30px_-10px_rgba(15,23,42,0.25)]"
          style={{
            background: 'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 22%, #e2e8f0 45%, #94a3b8 75%, #cbd5e1 100%)',
          }}
        />

        {/* Physical Hardware Buttons */}
        <div className="absolute -left-[3px] top-28 w-[4px] h-12 rounded-l-md bg-gradient-to-r from-slate-400 to-slate-300" />
        <div className="absolute -left-[3px] top-44 w-[4px] h-12 rounded-l-md bg-gradient-to-r from-slate-400 to-slate-300" />
        <div className="absolute -right-[3px] top-36 w-[4px] h-16 rounded-r-md bg-gradient-to-l from-slate-400 to-slate-300" />

        {/* Bezel Interior (Deep Obsidian) */}
        <div className="absolute inset-[4px] rounded-[48px] bg-[#090d16]" />

        {/* Phone Screen Area */}
        <div className="absolute inset-[10px] rounded-[42px] overflow-hidden bg-[#f8fafc] border border-slate-200/80 flex flex-col select-none">
          {/* Dynamic Island */}
          <div className="k-hero-island absolute left-1/2 -translate-x-1/2 top-3 w-[100px] h-[28px] rounded-full bg-black z-40 flex items-center justify-between px-3 shadow-md">
            <div className="w-3 h-3 rounded-full bg-[#111927] border border-slate-800 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-950/80" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono font-bold text-emerald-400">DSS</span>
            </div>
          </div>

          {/* iOS Status Bar */}
          <div className="relative z-30 h-11 px-7 flex items-center justify-between text-xs font-semibold text-slate-700 pt-1">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              {/* Signal bars */}
              <svg className="w-3.5 h-2.5 fill-current text-slate-700" viewBox="0 0 18 12">
                <rect x="0" y="8" width="3" height="4" rx="0.5" />
                <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
                <rect x="9" y="3" width="3" height="9" rx="0.5" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
              </svg>
              {/* 5G text */}
              <span className="text-[10px] font-bold text-[#0284c7]">5G</span>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-slate-500 rounded-[3px] p-[1px] flex items-center">
                <div className="w-full h-full bg-emerald-500 rounded-[1.5px]" />
              </div>
            </div>
          </div>

          {/* Kenkomed App Header inside Phone */}
          <div className="relative z-20 px-4 pt-1 pb-2.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/images/LogoKenKoMed-removebg-preview.png"
                  alt="Kenkomed"
                  className="w-5 h-5 object-contain"
                />
                <span className="font-display font-bold text-sm tracking-tight text-slate-900">
                  Ken<span className="text-[#0284c7]">ko</span>med
                </span>
                <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                  Box 2
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-sky-50 text-[#0284c7] border border-sky-200">
                  {activeScreen.tag}
                </span>
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0284c7] to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  FM
                </div>
              </div>
            </div>

            {/* Horizontal Filter Pills to Switch Photos */}
            <div className="flex gap-1.5 mt-2 overflow-x-auto no-scrollbar py-0.5">
              {SCREENS.map((item, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-all cursor-pointer",
                      isActive
                        ? "bg-[#0284c7] text-white font-bold shadow-sm scale-[1.02]"
                        : "bg-slate-100/90 text-slate-600 border border-slate-200/80 hover:bg-slate-200/80"
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
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <img
                  src={activeScreen.src}
                  alt={activeScreen.alt}
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  loading="eager"
                />
              </motion.div>
            </AnimatePresence>

            {/* Specular Glass Reflection Sheen */}
            <div
              className="k-hero-glass-reflection absolute inset-0 pointer-events-none z-30"
              style={{
                background: 'linear-gradient(125deg, transparent 35%, rgba(255,255,255,0.14) 45%, rgba(255,255,255,0.28) 50%, transparent 60%)',
              }}
            />
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="h-6 w-full flex items-center justify-center bg-white/95 backdrop-blur-md border-t border-slate-200/60 shrink-0 z-30">
            <div className="w-28 h-1 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>

      {/* Dots Indicator beneath phone */}
      <div className="flex items-center gap-1.5 mt-4 z-20">
        {SCREENS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ver pantalla ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all cursor-pointer",
              idx === activeIndex
                ? "w-6 bg-[#0284c7]"
                : "w-1.5 bg-slate-300 hover:bg-slate-400"
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroPhoneShowcase
