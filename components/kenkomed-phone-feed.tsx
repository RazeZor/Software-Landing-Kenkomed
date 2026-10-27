'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  FileText,
  Activity,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Play,
  Pause,
  MessageSquare
} from 'lucide-react'

const CLINICAL_STEPS = [
  {
    id: 'admission',
    stepNumber: '01',
    title: 'Admisión & Anamnesis remota',
    shortDesc: 'El paciente llena su ficha y mapa de dolor desde su celular antes de entrar al box.',
    badge: 'Ahorro 15 min / sesión',
    accent: '#0284c7',
    targetScroll: 0,
  },
  {
    id: 'dss',
    stepNumber: '02',
    title: 'DSS y Banderas Rojas',
    shortDesc: 'Escalas funcionales (Oswestry, LEFS) y cribado de alarma automático.',
    badge: 'Seguridad clínica total',
    accent: '#10b981',
    targetScroll: 140,
  },
  {
    id: 'whatsapp',
    stepNumber: '03',
    title: 'Pautas de Ejercicios a WhatsApp',
    shortDesc: 'Videos HD explicativos con dosificación enviada en 1 clic al paciente.',
    badge: '92% adherencia activa',
    accent: '#25D366',
    targetScroll: 290,
  },
  {
    id: 'outcomes',
    stepNumber: '04',
    title: 'Métricas, ROM y Ley 21.719',
    shortDesc: 'Gráficos comparativos de recuperación e informe de alta médica auditado.',
    badge: 'Auditoría inmutable',
    accent: '#0284c7',
    targetScroll: 440,
  },
]

export function KenkomedPhoneFeed() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)
  const feedScrollRef = useRef<HTMLDivElement>(null)

  // Subtle 3D tilt tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    setMouseOffset({ x, y })
  }

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 })
  }

  // Handle manual step selection
  const handleSelectStep = (index: number) => {
    setActiveStepIndex(index)
    setIsAutoPlaying(false)
    if (feedScrollRef.current) {
      feedScrollRef.current.scrollTo({
        top: CLINICAL_STEPS[index].targetScroll,
        behavior: 'smooth',
      })
    }
  }

  // Reset to auto-play loop
  const handleResumeAutoPlay = () => {
    setIsAutoPlaying(true)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] p-6 sm:p-10 md:p-14 overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(2,132,199,0.08),0_10px_25px_-5px_rgba(0,0,0,0.04)] bg-white text-slate-800"
    >
      <style>{`
        /* ─── Phone Feed Animations ─── */
        @keyframes k-phone-float {
          0%, 100% {
            transform: perspective(1200px) translateY(8px) rotateY(-8deg) rotateX(4deg);
          }
          50% {
            transform: perspective(1200px) translateY(-10px) rotateY(-2deg) rotateX(2deg);
          }
        }

        @keyframes k-phone-buzz {
          0%, 39% { transform: rotate(0deg); }
          40% { transform: rotate(0.8deg); }
          41% { transform: rotate(-0.8deg); }
          42% { transform: rotate(0.6deg); }
          43% { transform: rotate(-0.4deg); }
          44%, 100% { transform: rotate(0deg); }
        }

        @keyframes k-dynamic-island {
          0%, 35% { transform: scale(1, 1); }
          38% { transform: scale(1.15, 1.12); box-shadow: 0 0 16px rgba(37, 211, 102, 0.4); }
          45%, 100% { transform: scale(1, 1); }
        }

        @keyframes k-notification-drop {
          0%, 34% {
            transform: translateY(-90px) scale(0.9);
            opacity: 0;
            pointer-events: none;
          }
          40% {
            transform: translateY(0px) scale(1.02);
            opacity: 1;
            pointer-events: auto;
          }
          43% {
            transform: translateY(0px) scale(1);
            opacity: 1;
            pointer-events: auto;
          }
          74% {
            transform: translateY(0px) scale(1);
            opacity: 1;
            pointer-events: auto;
          }
          82%, 100% {
            transform: translateY(-90px) scale(0.92);
            opacity: 0;
            pointer-events: none;
          }
        }

        @keyframes k-feed-loop {
          0%, 10% {
            transform: translateY(0px);
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          }
          26%, 52% {
            transform: translateY(-165px);
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          }
          68%, 86% {
            transform: translateY(-330px);
            animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
          }
          96%, 100% {
            transform: translateY(0px);
          }
        }

        @keyframes k-glass-shine {
          0%, 100% { transform: translateX(-110%); }
          50% { transform: translateX(110%); }
        }

        @keyframes k-ambient-halo {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 0.8; }
        }

        .k-phone-halo {
          animation: k-ambient-halo 7s ease-in-out infinite;
        }

        .k-phone-device {
          animation: k-phone-float 6.5s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        .k-phone-buzz {
          animation: k-phone-buzz 7s linear infinite;
        }

        .k-dynamic-island {
          animation: k-dynamic-island 7s linear infinite;
        }

        .k-notification {
          animation: k-notification-drop 7s linear infinite;
        }

        .k-feed-animated {
          animation: k-feed-loop 10s linear infinite;
        }

        .k-glass-reflection {
          animation: k-glass-shine 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        /* Hide scrollbars but allow scrolling */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Subtle Background Glows (Clean Light Style) */}
      <div
        className="k-phone-halo absolute -top-24 right-1/4 w-[520px] h-[520px] rounded-full pointer-events-none blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, rgba(37, 211, 102, 0.05) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Interactive Story & Step Selector */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-semibold uppercase tracking-wider w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Flujo Clínico Móvil & WhatsApp KenkoMed
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Tu práctica kinésica en{' '}
            <span className="text-[#0284c7]">
              tiempo real.
            </span>
          </h3>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            Desde la anamnesis completada en el celular del paciente antes de la consulta, hasta el envío de pautas con videos HD por WhatsApp y la firma auditada de la evolución SOAP.
          </p>

          {/* Interactive Step Selector */}
          <div className="space-y-3 pt-1">
            {CLINICAL_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx
              return (
                <button
                  key={step.id}
                  onClick={() => handleSelectStep(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-sky-50/80 border-[#0284c7] shadow-sm translate-x-1.5'
                      : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/70 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#0284c7] text-white shadow-sm'
                        : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    {step.stepNumber}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`text-sm sm:text-base font-semibold truncate ${
                          isSelected ? 'text-[#0284c7]' : 'text-slate-900'
                        }`}
                      >
                        {step.title}
                      </h4>
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border shrink-0 hidden sm:inline-block ${
                        isSelected
                          ? 'bg-sky-100/80 text-[#0284c7] border-sky-200'
                          : 'bg-white text-slate-600 border-slate-200'
                      }`}>
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {step.shortDesc}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Bottom Action */}
          <div className="pt-3 flex items-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(2,132,199,0.35)] hover:shadow-[0_14px_30px_-5px_rgba(2,132,199,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <span>Agendar demo gratuita</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Floating Phone Mockup */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[580px] sm:min-h-[640px] py-4">
          <div
            className="k-phone-device relative w-[310px] sm:w-[340px] h-[620px] sm:h-[650px] transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1200px) rotateY(${mouseOffset.x - 4}deg) rotateX(${mouseOffset.y + 3}deg)`,
            }}
          >
            <div className="k-phone-buzz absolute inset-0">
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
                {/* Dynamic Island with animated expansion */}
                <div className="k-dynamic-island absolute left-1/2 -translate-x-1/2 top-3 w-[100px] h-[28px] rounded-full bg-black z-40 flex items-center justify-between px-3 shadow-md">
                  <div className="w-3 h-3 rounded-full bg-[#111927] border border-slate-800 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-950/80" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono font-bold text-emerald-400">DSS</span>
                  </div>
                </div>

                {/* Status Bar */}
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

                {/* Floating Notification Dropdown (Spring Drops from Island) */}
                <div className="k-notification absolute left-3 right-3 top-11 z-50 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-500/40 p-3 shadow-xl shadow-slate-900/15 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/25">
                    <MessageSquare size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-emerald-700">WhatsApp KenkoMed</span>
                      <span className="text-[10px] text-slate-400">ahora</span>
                    </div>
                    <p className="text-[11px] text-slate-700 font-medium leading-tight line-clamp-2 mt-0.5">
                      Camila Soto: <span className="text-emerald-800 font-semibold">&quot;¡Pauta recibida! Comencé los ejercicios de lumbalgia.&quot;</span>
                    </p>
                  </div>
                </div>

                {/* Kenkomed App Header inside Phone */}
                <div className="relative z-20 px-4 pt-2 pb-3 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
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
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0284c7] to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                      FM
                    </div>
                  </div>

                  {/* Horizontal Segment Filter Pills */}
                  <div className="flex gap-1.5 mt-2.5 overflow-x-auto no-scrollbar">
                    {['Resumen', 'Anamnesis', 'Pautas', 'Métricas'].map((tab, idx) => (
                      <span
                        key={tab}
                        className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                          activeStepIndex === idx
                            ? 'bg-[#0284c7] text-white font-bold shadow-sm'
                            : 'bg-slate-100 text-slate-600 border border-slate-200/80'
                        }`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* The Scrolling Feed */}
                <div
                  ref={feedScrollRef}
                  className={`flex-1 overflow-y-auto no-scrollbar px-3 pt-2.5 pb-16 space-y-3 relative z-10 ${
                    !isAutoPlaying ? 'scroll-smooth' : ''
                  }`}
                >
                  <div className={isAutoPlaying ? 'k-feed-animated space-y-3' : 'space-y-3'}>
                    {/* Card 1: Clinical Morning Digest */}
                    <div className="rounded-2xl p-3.5 bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white shadow-md">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-sky-100 font-semibold text-xs">
                          <Sparkles size={14} />
                          <span>Resumen de Turno · DSS IA</span>
                        </div>
                        <span className="text-[10px] font-medium text-sky-200">09:30</span>
                      </div>
                      <p className="text-xs text-white mt-2 font-medium leading-relaxed">
                        8 pacientes agendados hoy. 2 anamnesis completadas desde casa sin banderas rojas.
                      </p>
                      <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px]">
                        <span className="text-sky-100">Capacidad Multi-Box:</span>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-[92%] h-full bg-emerald-300 rounded-full" />
                          </div>
                          <span className="font-bold text-white">92%</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Paciente & Evaluación en Curso */}
                    <div className="rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-xs">
                          CS
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="text-xs font-bold text-slate-900 truncate">Camila Soto (34a)</h5>
                          <p className="text-[10px] text-slate-500">Anamnesis remota · hace 8 min</p>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                          Confirmada
                        </span>
                      </div>

                      <div className="mt-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-slate-500">Diagnóstico:</span>
                          <span className="font-semibold text-slate-900">Lumbalgia Mecánica L5-S1</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] mt-1.5">
                          <span className="text-slate-500">Escala Oswestry:</span>
                          <span className="font-bold text-emerald-600">28% (Incapacidad Leve)</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-2 text-[10px] text-emerald-700 font-medium">
                          <CheckCircle2 size={12} />
                          Banderas Rojas: Descartadas por el sistema
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Pauta de Ejercicios a WhatsApp */}
                    <div className="rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                          MR
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="text-xs font-bold text-slate-900 truncate">Matías Rivas (42a)</h5>
                          <p className="text-[10px] text-slate-500">Pauta enviada a WhatsApp</p>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                            <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.285" />
                          </svg>
                        </div>
                      </div>

                      <div className="mt-2.5 p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-slate-800">
                        <div className="font-semibold text-emerald-800 text-[11px]">
                          4 ejercicios excéntricos (Manguito Rotador)
                        </div>
                        <div className="text-[10px] text-slate-500 mt-0.5">
                          Videos HD clínicos + PDF membretado entregado
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-[10px]">
                          <span className="text-emerald-700 font-bold">✓✓ Leído</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-600 font-medium">4/4 realizados hoy</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 4: Métricas y Recuperación ROM */}
                    <div className="rounded-2xl p-3.5 bg-white border border-slate-200/90 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-500 font-medium">Recuperación ROM</span>
                          <div className="text-lg font-extrabold text-slate-900 mt-0.5">+38° Flexión</div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          +24% vs ingreso
                        </span>
                      </div>

                      {/* Animated Bars */}
                      <div className="flex items-end gap-1.5 h-12 mt-3 pt-1">
                        {[35, 45, 42, 60, 58, 78, 100].map((height, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                            <div
                              className={`w-full rounded-t-sm transition-all duration-500 ${
                                i === 6
                                  ? 'bg-[#0284c7] shadow-sm shadow-[#0284c7]/40'
                                  : 'bg-slate-200'
                              }`}
                              style={{ height: `${height}%` }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-mono">
                        <span>S1</span>
                        <span>S2</span>
                        <span>S3</span>
                        <span>S4</span>
                        <span>S5</span>
                        <span>S6</span>
                        <span className="text-[#0284c7] font-bold">Hoy</span>
                      </div>
                    </div>

                    {/* Card 5: Documento Legal y Auditoría Ley 21.719 */}
                    <div className="rounded-2xl p-3 bg-white border border-slate-200/90 shadow-sm flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0284c7] flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          Ficha Médica Inmutable
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          Ley 21.719 & Ley 20.584 · Certificada
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom App Navigation Bar inside Phone */}
                <div className="absolute left-0 right-0 bottom-0 h-14 bg-white/95 backdrop-blur-md border-t border-slate-200/80 flex items-center justify-around px-4 z-30">
                  <div className="flex flex-col items-center text-[#0284c7]">
                    <Activity size={16} />
                    <span className="text-[9px] font-semibold mt-0.5">Clínica</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-400">
                    <Calendar size={16} />
                    <span className="text-[9px] font-medium mt-0.5">Agenda</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-400">
                    <FileText size={16} />
                    <span className="text-[9px] font-medium mt-0.5">Fichas</span>
                  </div>
                  <div className="flex flex-col items-center text-slate-400">
                    <TrendingUp size={16} />
                    <span className="text-[9px] font-medium mt-0.5">Reportes</span>
                  </div>
                </div>

                {/* iOS Home Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-1.5 w-28 h-1 rounded-full bg-slate-300 z-40" />

                {/* Specular Diagonal Glass Shine */}
                <div
                  className="k-glass-reflection absolute inset-0 pointer-events-none z-30"
                  style={{
                    background: 'linear-gradient(125deg, transparent 35%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.3) 50%, transparent 60%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
