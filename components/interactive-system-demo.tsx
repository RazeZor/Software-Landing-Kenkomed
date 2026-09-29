'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  CreditCard,
  FileText,
  Home,
  Users,
  Activity,
  CheckCircle,
  AlertTriangle,
  Brain,
  Download,
  TrendingUp,
  FileCheck,
  QrCode,
  CheckSquare,
  ChevronRight,
  Info
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { DemoFeatures } from '@/components/blocks/demo-features'

const EXPLANATIONS = [
  {
    title: 'Anamnesis desde el celular',
    desc: 'El paciente completa sus datos desde casa. Tú llegas a la consulta con la ficha lista y las alertas ya marcadas.',
  },
  {
    title: 'Evaluación y Banderas Rojas',
    desc: 'Escalas validadas y mapa corporal. El sistema resalta banderas rojas automáticamente para mayor seguridad.',
  },
  {
    title: 'Plan de Tratamiento',
    desc: 'Define objetivos funcionales y prescribe ejercicios de forma estructurada para todo el tratamiento.',
  },
  {
    title: 'Evolución Estructurada (SOAP)',
    desc: 'Registra cada sesión rápidamente con formato SOAP, manteniendo el hilo conductor con los objetivos iniciales.',
  },
  {
    title: 'Reevaluación y Gráficos',
    desc: 'Muestra a tu paciente su progreso real con gráficos automáticos comparando su ingreso vs la actualidad.',
  },
  {
    title: 'Alta e Informe Médico',
    desc: 'Genera el diagnóstico final y exporta un resumen clínico profesional en PDF con un solo clic.',
  },
  {
    title: 'Pagos y Finanzas',
    desc: 'Controla la venta de packs, sesiones descontadas y el flujo de caja de tu centro sin planillas extra.',
  }
]

export function InteractiveSystemDemo() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeTab, setActiveTab] = useState('clinical') // 'clinical', 'inicio'

  // 0-5 are clinical steps (Patient File), 6 is payments
  const isClinical = activeTab === 'clinical' && activeStep >= 0 && activeStep <= 5

  const renderContent = () => {
    if (activeTab === 'inicio') return <InicioMock />
    if (activeTab === 'agenda') return <AgendaMock />
    if (activeTab === 'estadisticas') return <EstadisticasMock />
    
    switch (activeStep) {
      case 0: return <AnamnesisMock />
      case 1: return <EvaluacionMock />
      case 2: return <PlanTratamientoMock />
      case 3: return <EvolucionMock />
      case 4: return <ReevaluacionMock />
      case 5: return <AltaMock />
      case 6: return <PagosMock />
      default: return null
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
      
      {/* Demo Features Grid */}
      <DemoFeatures />

      {/* Browser / App Frame */}
      <div className="w-full h-[700px] bg-[#f8fafc] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/80 flex flex-col relative z-10">
        
        {/* Mac OS Window Controls */}
        <div className="h-10 bg-white border-b border-slate-200/60 flex items-center px-4 gap-2 shrink-0">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>
          <div className="mx-auto px-4 py-1 bg-slate-100 rounded-md text-[10px] font-semibold text-slate-400 flex items-center gap-2">
            app.kenkomed.com
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="hidden sm:flex flex-col w-20 lg:w-56 bg-white border-r border-slate-200/60 flex-shrink-0 z-10">
            <div className="flex items-center justify-center lg:justify-start h-14 px-4 border-b border-slate-50 shrink-0">
              <div className="font-bold text-[#0284c7] flex gap-2.5 items-center">
                <img 
                  src="/images/LogoKenKoMed-removebg-preview.png" 
                  alt="Kenkomed logo" 
                  className="w-7 h-7 object-contain"
                />
                <span className="hidden lg:block tracking-tight text-[0.95rem]">KenkoMed</span>
              </div>
            </div>
            <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
              
              <button onClick={() => setActiveTab('inicio')} className={cn("w-full flex items-center p-2 rounded-xl transition-all", activeTab === 'inicio' ? "bg-blue-50" : "hover:bg-slate-50")}>
                <div className={cn("flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors", activeTab === 'inicio' ? "bg-[#0284c7] text-white shadow-sm" : "bg-slate-100 text-slate-500")}>
                  <Home size={16} strokeWidth={2.5} />
                </div>
                <span className={cn("hidden lg:block ml-3 text-xs font-semibold", activeTab === 'inicio' ? "text-[#0284c7]" : "text-slate-600")}>Inicio</span>
              </button>

              <button onClick={() => { setActiveTab('clinical'); setActiveStep(0) }} className={cn("w-full flex items-center p-2 rounded-xl transition-all", isClinical ? "bg-blue-50" : "hover:bg-slate-50")}>
                <div className={cn("flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors", isClinical ? "bg-[#0284c7] text-white shadow-sm" : "bg-slate-100 text-slate-500")}>
                  <Users size={16} strokeWidth={2.5} />
                </div>
                <span className={cn("hidden lg:block ml-3 text-xs font-semibold", isClinical ? "text-[#0284c7]" : "text-slate-600")}>Mis Pacientes</span>
              </button>

              <button onClick={() => { setActiveTab('clinical'); setActiveStep(6) }} className={cn("w-full flex items-center p-2 rounded-xl transition-all", activeStep === 6 && activeTab === 'clinical' ? "bg-blue-50" : "hover:bg-slate-50")}>
                <div className={cn("flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors", activeStep === 6 && activeTab === 'clinical' ? "bg-[#0284c7] text-white shadow-sm" : "bg-slate-100 text-slate-500")}>
                  <CreditCard size={16} strokeWidth={2.5} />
                </div>
                <span className={cn("hidden lg:block ml-3 text-xs font-semibold", activeStep === 6 && activeTab === 'clinical' ? "text-[#0284c7]" : "text-slate-600")}>Pagos & Packs</span>
              </button>
              <button onClick={() => setActiveTab('agenda')} className={cn("w-full flex items-center p-2 rounded-xl transition-all", activeTab === 'agenda' ? "bg-blue-50" : "hover:bg-slate-50")}>
                <div className={cn("flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors", activeTab === 'agenda' ? "bg-[#0284c7] text-white shadow-sm" : "bg-slate-100 text-slate-500")}>
                  <Calendar size={16} strokeWidth={2.5} />
                </div>
                <span className={cn("hidden lg:block ml-3 text-xs font-semibold", activeTab === 'agenda' ? "text-[#0284c7]" : "text-slate-600")}>Agenda</span>
              </button>

              <button onClick={() => setActiveTab('estadisticas')} className={cn("w-full flex items-center p-2 rounded-xl transition-all", activeTab === 'estadisticas' ? "bg-blue-50" : "hover:bg-slate-50")}>
                <div className={cn("flex items-center justify-center w-8 h-8 rounded-lg shrink-0 transition-colors", activeTab === 'estadisticas' ? "bg-[#0284c7] text-white shadow-sm" : "bg-slate-100 text-slate-500")}>
                  <Activity size={16} strokeWidth={2.5} />
                </div>
                <span className={cn("hidden lg:block ml-3 text-xs font-semibold", activeTab === 'estadisticas' ? "text-[#0284c7]" : "text-slate-600")}>Estadísticas</span>
              </button>
            </div>
          </aside>

          {/* Main Workspace */}
          <main className="flex-1 flex flex-col relative overflow-hidden bg-slate-50/50">
            
            {/* Topbar / Context */}
            {isClinical ? (
              <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 shrink-0 z-10 flex flex-col">
                <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">MA</div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 leading-none mb-0.5">Miguel Arias Silva</span>
                      <span className="text-[10px] font-semibold text-slate-400">Expediente #4092 · 34 años</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider border border-emerald-100">En Tratamiento</span>
                </div>
                
                {/* Clinical Tabs Nav */}
                <div className="flex px-4 pt-2 gap-1 overflow-x-auto hide-scrollbar">
                  {[
                    { id: 0, label: 'Anamnesis' },
                    { id: 1, label: 'Evaluación' },
                    { id: 2, label: 'Plan' },
                    { id: 3, label: 'SOAP' },
                    { id: 4, label: 'Resultados' },
                    { id: 5, label: 'Alta' }
                  ].map(tab => (
                    <button 
                      key={tab.id}
                      onClick={() => setActiveStep(tab.id)}
                      className={cn(
                        "px-4 py-2 text-xs font-bold border-b-2 transition-colors whitespace-nowrap",
                        activeStep === tab.id ? "border-[#0284c7] text-[#0284c7]" : "border-transparent text-slate-400 hover:text-slate-600 hover:border-slate-300"
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </header>
            ) : (
              <header className="h-14 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center px-6 shrink-0 z-10">
                <span className="text-sm font-bold text-slate-800">
                  {activeTab === 'inicio' ? 'Panel de Control' : 
                   activeTab === 'agenda' ? 'Mi Agenda' : 
                   activeTab === 'estadisticas' ? 'Estadísticas del Centro' : 
                   'Panel Financiero'}
                </span>
              </header>
            )}

            {/* Dashboard Content */}
            <div className="flex-1 p-5 sm:p-8 pb-20 sm:pb-8 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${activeStep}`}
                  initial={{ opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "h-full overflow-y-auto",
                    activeTab === 'inicio' ? "" : "bg-white rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-6"
                  )}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
          
          {/* Mobile Bottom Navigation */}
          <nav className="sm:hidden absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200/60 flex justify-around items-center px-2 py-3 z-30">
            <button onClick={() => setActiveTab('inicio')} className={cn("flex flex-col items-center gap-1 transition-colors", activeTab === 'inicio' ? "text-[#0284c7]" : "text-slate-400 hover:text-slate-600")}>
              <Home size={20} strokeWidth={activeTab === 'inicio' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Inicio</span>
            </button>
            <button onClick={() => { setActiveTab('clinical'); setActiveStep(0) }} className={cn("flex flex-col items-center gap-1 transition-colors", isClinical ? "text-[#0284c7]" : "text-slate-400 hover:text-slate-600")}>
              <Users size={20} strokeWidth={isClinical ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Pacientes</span>
            </button>
            <button onClick={() => { setActiveTab('clinical'); setActiveStep(6) }} className={cn("flex flex-col items-center gap-1 transition-colors", activeStep === 6 && activeTab === 'clinical' ? "text-[#0284c7]" : "text-slate-400 hover:text-slate-600")}>
              <CreditCard size={20} strokeWidth={activeStep === 6 && activeTab === 'clinical' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Pagos</span>
            </button>
            <button onClick={() => setActiveTab('agenda')} className={cn("flex flex-col items-center gap-1 transition-colors", activeTab === 'agenda' ? "text-[#0284c7]" : "text-slate-400 hover:text-slate-600")}>
              <Calendar size={20} strokeWidth={activeTab === 'agenda' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Agenda</span>
            </button>
            <button onClick={() => setActiveTab('estadisticas')} className={cn("flex flex-col items-center gap-1 transition-colors", activeTab === 'estadisticas' ? "text-[#0284c7]" : "text-slate-400 hover:text-slate-600")}>
              <Activity size={20} strokeWidth={activeTab === 'estadisticas' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Stats</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────
 * MOCK COMPONENTS
 * ───────────────────────────────────────────────────────── */

function InicioMock() {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-8">
      {/* Hero Welcome */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0284c7] via-[#0369a1] to-sky-900 rounded-3xl shadow-lg p-6 sm:p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/15 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-4">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
              En línea
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Hola, Dr. Arias 👋</h2>
            <p className="text-white/70 text-sm mb-6">Bienvenido al panel de control de KenkoMed</p>
            
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-white text-[#0284c7] hover:bg-slate-50 text-xs font-bold rounded-xl shadow-sm flex items-center gap-2 transition-colors">
                <Users size={16} /> Nuevo Paciente
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold rounded-xl flex items-center gap-2 transition-colors">
                <FileText size={16} /> Buscar Historial
              </button>
            </div>
          </div>
          <div className="hidden sm:flex items-center justify-center w-28 h-28 bg-white/20 rounded-2xl border border-white/30 backdrop-blur-sm p-4 shrink-0 shadow-inner">
            <div className="w-full h-full bg-white rounded-xl shadow-md flex items-center justify-center p-2">
              <img 
                src="/images/LogoKenKoMed-removebg-preview.png" 
                alt="Kenkomed logo" 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div>
        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Activity size={18} className="text-[#0284c7]" /> Métricas del Centro
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Pacientes activos', value: '1,204', icon: Users, color: 'text-[#0284c7]', bg: 'bg-blue-50' },
            { label: 'Citas hoy', value: '24', icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Citas esta semana', value: '142', icon: Activity, color: 'text-violet-600', bg: 'bg-violet-50' },
            { label: 'Anamnesis completadas', value: '89', icon: CheckSquare, color: 'text-amber-600', bg: 'bg-amber-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
                  <h4 className="text-2xl font-black text-slate-800">{stat.value}</h4>
                </div>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${stat.bg} ${stat.color}`}>
                  <stat.icon size={16} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Appointments */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Calendar size={18} className="text-[#0284c7]" /> Próximos Agendamientos
          </h3>
          <span className="text-xs font-bold text-[#0284c7] cursor-pointer hover:underline">Ver calendario</span>
        </div>
        <div className="space-y-3">
          {[
            { name: 'María Gonzalez', time: '09:00 - 09:45', status: 'Confirmada', type: 'Kinesiología Motora' },
            { name: 'Pedro Pascal', time: '10:00 - 10:45', status: 'Pendiente', type: 'Reintegro Deportivo' },
            { name: 'Ana Silva', time: '11:00 - 11:45', status: 'Confirmada', type: 'Evaluación Inicial' },
          ].map((apt, i) => (
            <div key={i} className="bg-white border border-slate-200/60 rounded-2xl p-3 sm:p-4 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0284c7] rounded-xl flex flex-col items-center justify-center text-white shrink-0 shadow-inner">
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-80">Hoy</span>
                <span className="text-lg font-black leading-none">28</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-slate-800 truncate">{apt.name}</h4>
                <div className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mt-1">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {apt.time}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:flex items-center gap-1"><Brain size={12} /> {apt.type}</span>
                </div>
              </div>
              <div className={cn(
                "hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                apt.status === 'Confirmada' ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-amber-50 text-amber-700 border-amber-100"
              )}>
                <span className={cn("w-1.5 h-1.5 rounded-full", apt.status === 'Confirmada' ? "bg-emerald-500" : "bg-amber-400")}></span>
                {apt.status}
              </div>
              <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function AnamnesisMock() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full gap-6">
      {/* Wizard Sidebar */}
      <div className="hidden md:flex flex-col w-64 shrink-0 border-r border-slate-100 pr-6">
        <h3 className="text-sm font-bold text-slate-800 mb-1">Secciones del Formulario</h3>
        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mb-6">Seleccione las secciones</p>
        
        <div className="space-y-1">
          {[
            { num: 1, title: 'Tus Datos', active: false, done: true },
            { num: 2, title: 'Sobre tu Molestia', active: true, done: false },
            { num: 3, title: '¿Dónde te Duele?', active: false, done: false },
            { num: 4, title: '¿Cómo Empezó?', active: false, done: false },
            { num: 5, title: 'Tu Historial Médico', active: false, done: false },
          ].map((sec, i) => (
            <div key={i} className={cn(
              "flex items-center p-2.5 rounded-xl cursor-default transition-all",
              sec.active ? "bg-blue-50 border border-blue-100" : "hover:bg-slate-50 border border-transparent"
            )}>
              <div className={cn(
                "w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0",
                sec.active ? "bg-[#0284c7] text-white" : sec.done ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
              )}>
                {sec.done ? <CheckCircle size={12} strokeWidth={3} /> : sec.num}
              </div>
              <span className={cn(
                "ml-3 text-xs font-semibold truncate",
                sec.active ? "text-[#0284c7]" : sec.done ? "text-slate-700" : "text-slate-500"
              )}>{sec.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wizard Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="text-[10px] font-bold text-[#0284c7] uppercase tracking-wider mb-1">Paso 2 de 15</div>
          <h2 className="text-xl font-bold text-slate-800">Sobre tu molestia o dolor</h2>
        </div>

        <div className="space-y-6 max-w-2xl">
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">¿Cuánto tiempo llevas con este dolor o molestia?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Días', 'Semanas', 'Meses', 'Años'].map((btn, i) => (
                <div key={i} className={cn(
                  "p-3 text-center text-xs font-semibold rounded-xl border transition-colors cursor-pointer",
                  btn === 'Días' ? "bg-blue-50 border-[#0284c7] text-[#0284c7]" : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                )}>
                  {btn}
                </div>
              ))}
            </div>
            <input type="number" placeholder="Ej: 4" className="w-full mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#0284c7]" defaultValue={4} />
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">En una escala del 0 al 10, ¿Cuánto te duele ahora?</label>
            <div className="flex items-center gap-1 p-2 bg-slate-50 rounded-xl border border-slate-100">
              {[0,1,2,3,4,5,6,7,8,9,10].map((val) => (
                <div key={val} className={cn(
                  "flex-1 aspect-square flex items-center justify-center text-xs font-bold rounded-lg cursor-pointer transition-all",
                  val === 8 ? "bg-rose-500 text-white shadow-md scale-110" : "text-slate-500 hover:bg-slate-200"
                )}>
                  {val}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
              <span>Sin dolor</span>
              <span>El peor dolor imaginable</span>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-700">Describe tu molestia principal</label>
            <textarea 
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[#0284c7] min-h-[100px] resize-none"
              defaultValue="Dolor agudo en la zona lumbar baja que irradia hacia la pierna derecha. Comenzó tras levantar una caja pesada en una mudanza."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

function EvaluacionMock() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Brain size={20} strokeWidth={2.5} /></div>
          <div><h3 className="text-base font-bold text-slate-800">Evaluación Clínica</h3><p className="text-[11px] font-medium text-slate-500">Screening y Escalas validadas</p></div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 text-[10px] font-bold flex items-center gap-1.5 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span> 1 Bandera Roja
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 flex flex-col items-center justify-center min-h-[220px] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          <div className="relative z-10 w-20 h-44 bg-slate-300 rounded-full opacity-60 flex items-center justify-center shadow-inner">
             <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center leading-tight">Mapa<br/>Corp.</span>
             <div className="absolute bottom-10 right-4 w-3.5 h-3.5 bg-rose-500 rounded-full shadow-[0_0_15px_rgba(244,63,94,0.8)] animate-pulse border-2 border-white"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50 shadow-sm">
            <div className="text-[10px] font-black text-rose-600 uppercase tracking-widest mb-1.5">Déficit Neurológico</div>
            <div className="text-xs font-bold text-rose-900 leading-snug">Pérdida de fuerza miotoma L4-L5. Hormigueo constante hasta el pie.</div>
          </div>
          <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">ROM Lumbar Flexión</div>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden"><div className="w-[30%] h-full bg-amber-400 rounded-full"></div></div>
              <span className="text-xs font-black text-slate-700">30%</span>
            </div>
          </div>
          <div className="p-3.5 rounded-xl border border-[#0284c7]/20 bg-blue-50/30 shadow-sm">
            <div className="text-[10px] font-black text-[#0284c7] opacity-70 uppercase tracking-widest mb-1">Oswestry Disability Index</div>
            <div className="text-xl font-black text-[#0284c7]">42% <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider ml-1">Severa</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlanTratamientoMock() {
  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckSquare size={20} strokeWidth={2.5} /></div>
        <div><h3 className="text-base font-bold text-slate-800">Plan de Tratamiento</h3><p className="text-[11px] font-medium text-slate-500">10 sesiones programadas</p></div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-[#0284c7] text-white flex items-center justify-center text-[10px]">1</span> Objetivos Funcionales
          </h4>
          <div className="space-y-2.5 pl-7">
            {[
              { text: 'Disminuir EVA a 3/10 en reposo.', done: true },
              { text: 'Caminar 30 min sin claudicación radicular.', done: false },
              { text: 'Recuperar fuerza extensión rodilla (M5).', done: false }
            ].map((obj, i) => (
              <label key={i} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                <div className={cn("w-4 h-4 rounded flex items-center justify-center", obj.done ? "bg-[#0284c7] text-white" : "border-2 border-slate-300")}>
                  {obj.done && <CheckCircle size={10} strokeWidth={4} />}
                </div>
                <span className={cn("text-sm font-semibold", obj.done ? "text-slate-400 line-through" : "text-slate-700")}>{obj.text}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-[#0284c7] text-white flex items-center justify-center text-[10px]">2</span> Prescripción Ejercicios
          </h4>
          <div className="pl-7 grid grid-cols-2 gap-3">
            {[
              { name: 'Neurodinamia ciático', reps: '3x10 reps', img: 'bg-indigo-100 text-indigo-400' },
              { name: 'Puente glúteo', reps: '4x12 reps', img: 'bg-emerald-100 text-emerald-400' }
            ].map((ej, i) => (
              <div key={i} className="p-3 rounded-xl border border-slate-200 bg-white shadow-sm flex items-center gap-3 hover:border-[#0284c7]/30 transition-colors">
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center text-[10px] font-bold", ej.img)}>IMG</div>
                <div><div className="text-xs font-bold text-slate-800">{ej.name}</div><div className="text-[10px] font-semibold text-slate-500">{ej.reps}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function EvolucionMock() {
  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><FileText size={20} strokeWidth={2.5} /></div>
        <div><h3 className="text-base font-bold text-slate-800">Evolución (Formato SOAP)</h3><p className="text-[11px] font-medium text-slate-500">Sesión 5 de 10 — Hoy</p></div>
      </div>

      <div className="space-y-3">
        {[
          { l: 'S', text: '"Siento mucho menos dolor, pude dormir de corrido." EVA actual: 3/10.', bg: 'bg-white' },
          { l: 'O', text: 'Aumento ROM flexión lumbar a 60°. Fuerza cuádriceps M4+. SLR (-) a los 60°.', bg: 'bg-white' },
          { l: 'A', text: 'Evolución muy favorable, disminuyó sintomatología radicular. Buena tolerancia a carga.', bg: 'bg-white' },
        ].map((soap, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-400 font-black flex items-center justify-center shrink-0 text-xs">{soap.l}</div>
            <div className="flex-1 p-3 rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-600 shadow-sm leading-relaxed">{soap.text}</div>
          </div>
        ))}
        <div className="flex gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#0284c7] text-white font-black flex items-center justify-center shrink-0 text-xs shadow-sm shadow-[#0284c7]/30">P</div>
          <div className="flex-1 p-3 rounded-xl border border-[#0284c7]/30 bg-blue-50/50 text-xs font-bold text-[#0284c7] shadow-sm flex items-center">
            Progresar carga en ejercicios de Core. Mantener neurodinamia... <span className="w-1 h-3.5 bg-[#0284c7] ml-1 animate-pulse rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReevaluacionMock() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-teal-50 text-teal-600 rounded-lg"><TrendingUp size={20} strokeWidth={2.5} /></div>
        <div><h3 className="text-base font-bold text-slate-800">Resultados y Outcomes</h3><p className="text-[11px] font-medium text-slate-500">Comparativa Ingreso vs Hoy</p></div>
      </div>

      <div className="grid grid-cols-2 gap-5 flex-1">
        <div className="rounded-xl border border-slate-200 p-5 flex flex-col bg-white shadow-sm">
          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Evolución Dolor (EVA)</div>
          <div className="flex-1 flex items-end gap-2 pb-2">
            {[8, 7, 5, 4, 3, 2, 1].map((val, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-teal-500 to-emerald-400 rounded-t-md relative group" style={{ height: `${(val/10)*100}%`, opacity: 0.7 + (i*0.05) }}>
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">{val}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-wider border-t border-slate-100 pt-3">
            <span>S1</span><span className="text-teal-600">Alta</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 p-5 flex flex-col justify-center gap-5 bg-white shadow-sm">
          <div>
            <div className="flex justify-between text-xs mb-1.5"><span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Oswestry Inicial</span><span className="font-black text-rose-500">42%</span></div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-rose-400 w-[42%] rounded-full"></div></div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1.5"><span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Oswestry Final</span><span className="font-black text-emerald-500">12%</span></div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-emerald-400 w-[12%] rounded-full"></div></div>
          </div>
          <div className="mt-2 p-2.5 bg-emerald-50 rounded-xl border border-emerald-100 text-[10px] font-bold uppercase tracking-wider text-emerald-700 text-center shadow-sm">
            ¡MCID superado con éxito!
          </div>
        </div>
      </div>
    </div>
  )
}

function AltaMock() {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center px-4">
      <div className="relative mb-5">
        <div className="absolute inset-0 bg-emerald-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white relative z-10">
          <CheckCircle size={36} strokeWidth={2.5} />
        </div>
      </div>
      <h3 className="text-2xl font-black text-slate-800 mb-2 tracking-tight">Alta Médica Generada</h3>
      <p className="text-sm font-medium text-slate-500 max-w-sm mb-8 leading-relaxed">El paciente cumplió el 100% de los objetivos. Expediente cerrado y listo para reportar al derivador.</p>
      
      <div className="flex gap-3">
        <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-xl shadow-sm flex items-center gap-2 hover:bg-slate-50 hover:text-slate-900 transition-all">
          <FileCheck size={16} strokeWidth={2.5} /> Ver Resumen
        </button>
        <button className="px-5 py-2.5 bg-gradient-to-r from-[#0284c7] to-[#0369a1] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md shadow-[#0284c7]/20 flex items-center gap-2 hover:shadow-lg transition-all">
          <Download size={16} strokeWidth={2.5} /> Exportar PDF
        </button>
      </div>
    </div>
  )
}

function PagosMock() {
  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><CreditCard size={20} strokeWidth={2.5} /></div>
        <div><h3 className="text-base font-bold text-slate-800">Pagos y Packs</h3><p className="text-[11px] font-medium text-slate-500">Gestión financiera</p></div>
      </div>

      <div className="p-5 rounded-2xl bg-gradient-to-br from-[#0284c7] to-[#0369a1] text-white shadow-lg mb-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
        <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1.5">Pack Activo</div>
        <div className="text-xl font-black tracking-tight mb-5">10 Sesiones Kinesiología</div>
        
        <div className="flex items-end justify-between relative z-10">
          <div>
            <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Estado</div>
            <div className="font-bold text-sm flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-lg backdrop-blur-sm"><CheckCircle size={14} className="text-emerald-300" strokeWidth={3} /> Pagado Total</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Sesiones</div>
            <div className="font-black text-3xl leading-none">10<span className="text-sm font-bold text-blue-200/70 ml-0.5">/10</span></div>
          </div>
        </div>
      </div>

      <div className="flex-1 border border-slate-200/60 rounded-2xl overflow-hidden bg-white shadow-sm">
        <div className="bg-slate-50 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Últimos movimientos</div>
        <div className="divide-y divide-slate-100">
          <div className="flex justify-between items-center p-4 hover:bg-slate-50/50 transition-colors">
            <div className="flex flex-col"><span className="text-sm font-bold text-slate-800">Abono Transferencia</span><span className="text-[10px] font-semibold text-slate-400 mt-0.5">Hace 1 mes</span></div>
            <div className="text-sm font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+$250.000</div>
          </div>
          <div className="flex justify-between items-center p-4 hover:bg-slate-50/50 transition-colors">
            <div className="flex flex-col"><span className="text-sm font-bold text-slate-800">Sesión 10 Descontada</span><span className="text-[10px] font-semibold text-slate-400 mt-0.5">Hoy</span></div>
            <div className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">-1 Sesión</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgendaMock() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-slate-800">Hoy, 28 de Septiembre</h2>
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button className="px-3 py-1 bg-white shadow-sm rounded-md text-xs font-bold text-slate-800">Día</button>
            <button className="px-3 py-1 text-slate-500 hover:text-slate-800 text-xs font-bold">Semana</button>
          </div>
        </div>
        <button className="px-4 py-2 bg-[#0284c7] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm hover:bg-[#0369a1]">
          <Calendar size={14} /> Nueva Cita
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 relative">
        <div className="relative border-l border-slate-200 ml-16 space-y-8 py-4">
          {/* Timeline markers */}
          <div className="absolute top-0 -left-16 w-12 text-right text-xs font-bold text-slate-400">08:00</div>
          <div className="absolute top-24 -left-16 w-12 text-right text-xs font-bold text-slate-400">09:00</div>
          <div className="absolute top-48 -left-16 w-12 text-right text-xs font-bold text-slate-400">10:00</div>
          <div className="absolute top-72 -left-16 w-12 text-right text-xs font-bold text-slate-400">11:00</div>

          {/* Grid lines */}
          <div className="absolute top-0 left-0 right-0 border-t border-slate-100"></div>
          <div className="absolute top-24 left-0 right-0 border-t border-slate-100"></div>
          <div className="absolute top-48 left-0 right-0 border-t border-slate-100"></div>
          <div className="absolute top-72 left-0 right-0 border-t border-slate-100"></div>

          {/* Appointments */}
          <div className="absolute top-4 left-4 right-4 h-16 bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-emerald-800">08:15 - 09:00</span>
              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Confirmada</span>
            </div>
            <span className="text-sm font-semibold text-emerald-900">Tomás Herrera • Evaluación Inicial</span>
          </div>

          <div className="absolute top-28 left-4 right-4 h-16 bg-blue-50 border border-blue-200 rounded-xl p-3 flex flex-col justify-center shadow-sm z-10 scale-[1.01]">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-[#0284c7]">09:15 - 10:00</span>
              <span className="text-[10px] uppercase font-bold text-[#0284c7] tracking-wider">En Sala</span>
            </div>
            <span className="text-sm font-semibold text-slate-800">Miguel Arias Silva • Sesión 3/10</span>
          </div>

          <div className="absolute top-52 left-4 right-4 h-16 bg-amber-50 border border-amber-200 rounded-xl p-3 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-amber-800">10:15 - 11:00</span>
              <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">Pendiente</span>
            </div>
            <span className="text-sm font-semibold text-amber-900">Laura Montes • Punción Seca</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function EstadisticasMock() {
  return (
    <div className="flex flex-col h-full w-full gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Ingresos del Mes</div>
          <div className="text-3xl font-black text-slate-800 mb-1">$4.250.000</div>
          <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1"><TrendingUp size={12} /> +12% vs mes anterior</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Nuevos Pacientes</div>
          <div className="text-3xl font-black text-slate-800 mb-1">45</div>
          <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1"><TrendingUp size={12} /> +5% vs mes anterior</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tasa de Asistencia</div>
          <div className="text-3xl font-black text-slate-800 mb-1">92%</div>
          <div className="text-xs font-semibold text-amber-500 flex items-center gap-1">-2% vs mes anterior</div>
        </div>
      </div>

      <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col">
        <h3 className="text-sm font-bold text-slate-800 mb-6">Citas por Día (Última Semana)</h3>
        <div className="flex-1 flex items-end justify-between px-4 gap-4 pb-2">
          {/* Simple CSS Bar Chart */}
          {[
            { day: 'Lun', val: 60 },
            { day: 'Mar', val: 80 },
            { day: 'Mié', val: 100 },
            { day: 'Jue', val: 85 },
            { day: 'Vie', val: 70 },
            { day: 'Sáb', val: 40 },
          ].map((bar, i) => (
            <div key={i} className="flex flex-col items-center gap-2 flex-1 group h-full">
              <div className="text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}%</div>
              <div className="w-full bg-slate-100 rounded-t-lg relative overflow-hidden h-full flex items-end">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${bar.val}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={cn("w-full rounded-t-lg transition-colors", bar.day === 'Mié' ? "bg-[#0284c7]" : "bg-blue-200 group-hover:bg-blue-300")}
                />
              </div>
              <div className="text-xs font-bold text-slate-500">{bar.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
