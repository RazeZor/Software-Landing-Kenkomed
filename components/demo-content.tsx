'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  RiHome5Line,
  RiCalendarEventLine,
  RiFolderUserLine,
  RiBankCardLine,
  RiStore2Line,
  RiQuestionLine,
  RiSettings4Line,
  RiLogoutBoxRLine,
  RiSearchLine,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiCloseLine,
  RiWhatsappLine,
  RiFileTextLine,
  RiPrinterLine,
  RiDownload2Line,
  RiAddLine,
  RiDeleteBin6Line,
  RiCompass3Line,
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiMenuFoldLine,
  RiMenuUnfoldLine,
  RiUserAddLine,
  RiUserLine,
  RiUserHeartLine,
  RiPulseLine,
  RiShieldCheckLine,
  RiFullscreenLine,
  RiFullscreenExitLine,
  RiCalendarCheckLine,
  RiExchangeLine,
  RiSparklingLine,
  RiCheckLine,
  RiCheckDoubleLine,
  RiInformationLine,
  RiExternalLinkLine,
  RiLock2Line,
} from 'react-icons/ri'
import { Dumbbell } from 'lucide-react'

/* ── INTERFACES ─────────────────────────────────────────────── */

interface Patient {
  id: string
  name: string
  rut: string
  age: number
  phone: string
  time: string
  specialty: string
  status: 'Confirmada' | 'En Box' | 'Pendiente' | 'Completada'
  box: string
  evaStart: number
  evaCurrent: number
  sessionsUsed: number
  sessionsTotal: number
  diagnosis: string
  doctor: string
  soap: {
    s: string
    o: string
    a: string
    p: string
  }
}

interface TodoItem {
  id: number
  text: string
  completed: boolean
}

/* ── DATOS CLÍNICOS REALISTAS ───────────────────────────────── */

const INITIAL_PATIENTS: Patient[] = [
  {
    id: 'p1',
    name: 'María Ignacia González Tapia',
    rut: '18.492.381-4',
    age: 29,
    phone: '+56 9 8472 9182',
    time: '14:30 - 15:15',
    specialty: 'Traumatología & Deporte',
    status: 'Confirmada',
    box: 'Box 2 (Camilla)',
    evaStart: 8,
    evaCurrent: 3,
    sessionsUsed: 4,
    sessionsTotal: 10,
    diagnosis: 'Desgarro Isquiotibial Grado II (Bíceps Femoral)',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Paciente refiere disminución significativa del dolor matutino (EVA 3/10). No presenta dolor en marcha plana, ligera molestia al subir escaleras.',
      o: 'ROM flexión cadera activa 85° sin dolor. Palpación del tercio medio con leve fibrosis residual. Prueba de contracción isométrica contra resistencia negativa.',
      a: 'Evolución favorable en fase de remodelación tisular. Cumple criterios funcionales para iniciar trote suave y fortalecimiento excéntrico.',
      p: '1. Ejercicio nórdico asistido 3x8.\n2. Peso muerto unilateral 3x10 con kettlebell 8kg.\n3. Trote intermitente 10 min en cinta.\n4. Crioterapia final 12 min.',
    },
  },
  {
    id: 'p2',
    name: 'Carlos Andrés Silva Sepúlveda',
    rut: '15.823.109-K',
    age: 38,
    phone: '+56 9 7381 2940',
    time: '15:15 - 16:00',
    specialty: 'Rehabilitación Postquirúrgica',
    status: 'En Box',
    box: 'Box 1 (Rehab)',
    evaStart: 7,
    evaCurrent: 2,
    sessionsUsed: 8,
    sessionsTotal: 12,
    diagnosis: 'Post-op Reconstrucción Ligamento Cruzado Anterior (LCA)',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Semana 7 postoperatoria. Refiere buena tolerancia al apoyo monopodal sin inestabilidad subjetiva.',
      o: 'Extensión completa 0°, flexión activa 125°. Fuerza cuádriceps MMT 4/5. Sin derrame articular.',
      a: 'Fase de fortalecimiento y control neuromuscular avanzado.',
      p: 'Prensa horizontal monopodal, sentadillas en bosu y reeducación propioceptiva.',
    },
  },
  {
    id: 'p3',
    name: 'Andrea Paz Valenzuela Morales',
    rut: '19.120.482-2',
    age: 26,
    phone: '+56 9 6291 0039',
    time: '16:00 - 16:45',
    specialty: 'Columna & Postura',
    status: 'Confirmada',
    box: 'Box 3 (Gimnasio)',
    evaStart: 9,
    evaCurrent: 4,
    sessionsUsed: 2,
    sessionsTotal: 8,
    diagnosis: 'Cervicobraquialgia Derecha C6-C7 por Protrusión',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Disminución de parestesias en pulgar derecho. Persiste tensión cervical al finalizar jornada laboral.',
      o: 'Spurling negativo bilateral. Contractura moderada de trapecios superiores y elevador de la escápula.',
      a: 'Respuesta favorable a terapia manual y neurodinamia del nervio mediano.',
      p: 'Tracción cervical suave, neurodinamia deslizamiento mediano y pauta ergonómica.',
    },
  },
  {
    id: 'p4',
    name: 'Matías Rozas Alarcón',
    rut: '17.391.028-5',
    age: 34,
    phone: '+56 9 5519 2831',
    time: '16:45 - 17:30',
    specialty: 'Traumatología',
    status: 'Pendiente',
    box: 'Box 2 (Camilla)',
    evaStart: 6,
    evaCurrent: 4,
    sessionsUsed: 3,
    sessionsTotal: 6,
    diagnosis: 'Tendinopatía Patelar Crónica (Rodilla de Saltador)',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Dolor en polo inferior de rótula al aterrizar en saltos. Mejoría en sentadilla estática.',
      o: 'Prueba de declive 25° positiva con EVA 4/10. Tensión banda iliotibial derecha.',
      a: 'Tendinopatía en fase reactiva-degenerativa con sobrecarga excéntrica.',
      p: 'Protocolo de cargas isométricas pesadas en prensa y educación en carga de entrenamiento.',
    },
  },
  {
    id: 'p5',
    name: 'Camila Francisca Fuentes Soto',
    rut: '20.391.847-1',
    age: 22,
    phone: '+56 9 9182 3740',
    time: '17:30 - 18:15',
    specialty: 'Deportiva',
    status: 'Confirmada',
    box: 'Box 1 (Rehab)',
    evaStart: 8,
    evaCurrent: 2,
    sessionsUsed: 5,
    sessionsTotal: 6,
    diagnosis: 'Esguince de Tobillo Grado II (Lig. Peroneoastragalino Ant.)',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Sin dolor en marcha diaria. Buena estabilidad al realizar saltos laterales.',
      o: 'Cajón anterior negativo. Balance monopodal en plataforma inestable 30s sin compensaciones.',
      a: 'Cercana al alta deportiva kinésica. Se programan pruebas de Return to Play.',
      p: 'Circuito de agilidad en escalera, pliometría media y vendaje neuromuscular.',
    },
  },
  {
    id: 'p6',
    name: 'Ignacio Javier Peña Morales',
    rut: '16.892.410-9',
    age: 41,
    phone: '+56 9 4482 1928',
    time: '18:15 - 19:00',
    specialty: 'Columna',
    status: 'Confirmada',
    box: 'Box 3 (Gimnasio)',
    evaStart: 8,
    evaCurrent: 3,
    sessionsUsed: 6,
    sessionsTotal: 10,
    diagnosis: 'Lumbalgia Mecánica Inespecífica con Disfunción Sacroilíaca',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Dolor lumbar matutino ausente. Fatiga moderada tras permanecer sentado 3 horas continuas.',
      o: 'Test de Patrick (FABER) negativo. Buena activación de transverso abdominal y multífidos.',
      a: 'Estabilidad de core adecuada. Enfocar en resistencia muscular y bisagra de cadera.',
      p: 'Deadbug 3x12, Bird-dog 3x10, Puente de glúteo monopodal y pauta de pausas activas.',
    },
  },
]

const EVE_TIPS = [
  'Aprende a usar la app con nuestro tour interactivo.',
  '🚀 ¿Te gusta cómo se ve? Agenda tu demostración oficial para activar tu consulta en 24h.',
  '💡 En el software real, las pautas de ejercicios se envían en 1 clic al WhatsApp de tus pacientes.',
  '📋 La Ficha SOAP incluye guardado automático y cumplimiento legal Ley 21.719 en Chile.',
  '📱 Los pacientes reservan online validando RUT y fecha de nacimiento en tu portal público.',
  '📈 13 escalas clínicas validadas automáticas: Oswestry, LEFS, WOMAC, EVA y Barthel.',
  '💰 Control de pagos por Fonasa, Isapre, transferencia o débito con cálculo de IVA y boletas.',
]

const INITIAL_TODOS: TodoItem[] = [
  { id: 1, text: 'Enviar pauta de manguito rotador a Carlos Silva por WhatsApp', completed: true },
  { id: 2, text: 'Revisar escala Oswestry de Andrea Valenzuela antes de su cita', completed: false },
  { id: 3, text: 'Emitir boleta electrónica sesión 4 María González', completed: true },
  { id: 4, text: 'Firmar informe de evolución kinésica para médico tratante', completed: false },
]

export function DemoContent() {
  /* ── ESTADOS DE LA APLICACIÓN ──────────────────────────────── */
  const [activeTab, setActiveTab] = useState<'inicio' | 'agenda' | 'pacientes' | 'pagos' | 'centro' | 'pautas'>('inicio')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSoapTab, setSelectedSoapTab] = useState<'s' | 'o' | 'a' | 'p'>('s')
  const [showNewPatientModal, setShowNewPatientModal] = useState(false)
  const [showScheduleDemoModal, setShowScheduleDemoModal] = useState(false)
  const [showEveTourModal, setShowEveTourModal] = useState(false)
  const [showFeatureLimitModal, setShowFeatureLimitModal] = useState(false)
  const [featureLimitNotice, setFeatureLimitNotice] = useState<string>('')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [eveTipIndex, setEveTipIndex] = useState(0)
  const [showEveBubble, setShowEveBubble] = useState(true)
  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS)
  const [newTodoText, setNewTodoText] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [showDemoTopBanner, setShowDemoTopBanner] = useState(true)

  // Saludo dinámico según hora del día
  const greeting = useMemo(() => {
    const hours = new Date().getHours()
    if (hours < 12) return 'Buenos días'
    if (hours < 19) return 'Buenas tardes'
    return 'Buenas noches'
  }, [])

  // Mostrar toast temporal
  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3800)
  }

  // Siguiente tip de E.V.E
  const nextEveTip = () => {
    setEveTipIndex((prev) => (prev + 1) % EVE_TIPS.length)
  }

  // Notificar al usuario que es una función limitada de la demo
  const notifyLimitedFeature = (featureName: string) => {
    setFeatureLimitNotice(featureName)
    setShowFeatureLimitModal(true)
  }

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      document.exitFullscreen().catch(() => {})
      setIsFullscreen(false)
    }
  }

  // Agregar Tarea To-Do
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTodoText.trim()) return
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodoText.trim(),
        completed: false,
      },
    ])
    setNewTodoText('')
    triggerToast('✓ Tarea agregada en modo demostración')
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  // Búsqueda rápida por RUT o Nombre
  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const found = patients.find(
      (p) =>
        p.rut.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (found) {
      setSelectedPatient(found)
      triggerToast(`Ficha clínica abierta: ${found.name}`)
    } else {
      triggerToast(`No se encontró paciente con "${searchQuery}"`)
    }
  }

  // Pacientes filtrados en el directorio
  const filteredPatients = useMemo(() => {
    if (!searchQuery.trim()) return patients
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.rut.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.diagnosis.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [patients, searchQuery])

  // Próxima cita inmediata (para el banner destacado)
  const nextAppointment = patients[0]

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex flex-col selection:bg-sky-100 selection:text-sky-900 pb-20 sm:pb-16">
      
      {/* ════════════════════════════════════════════════════════════
          1. BANNER DESTACADO DE MODO DEMOSTRACIÓN (AVISO AL USUARIO)
          ════════════════════════════════════════════════════════════ */}
      {showDemoTopBanner && (
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 px-4 py-2 text-xs font-semibold flex items-center justify-between gap-3 shadow-sm border-b border-amber-600/30 z-50 shrink-0">
          <div className="flex items-center gap-2 max-w-4xl mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping shrink-0" />
            <span className="bg-slate-950 text-amber-300 px-1.5 py-0.5 rounded text-[10px] uppercase font-black tracking-wider">
              DEMO VISUAL
            </span>
            <p className="leading-snug truncate">
              Estás viendo una <strong className="font-bold underline decoration-slate-900">demostración visual interactiva</strong> de la interfaz de KenkoMed. Las bases de datos y funciones completas están limitadas a esta prueba.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowScheduleDemoModal(true)}
              className="bg-slate-950 hover:bg-slate-900 text-white font-bold px-3 py-1 rounded-md text-[11px] shadow-xs transition-all flex items-center gap-1 cursor-pointer"
            >
              <RiSparklingLine className="text-amber-300" size={13} />
              <span>Solicitar Software Completo</span>
            </button>
            <button
              onClick={() => setShowDemoTopBanner(false)}
              className="text-slate-950 hover:text-black p-1 transition-colors cursor-pointer"
              title="Ocultar aviso"
            >
              <RiCloseLine size={16} />
            </button>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          2. BARRA SUPERIOR DE SIMULACIÓN SOFTWARE MÉDICO
          ════════════════════════════════════════════════════════════ */}
      <header className="h-11 bg-[#05111e] text-white px-4 sm:px-6 flex items-center justify-between text-xs z-40 border-b border-slate-800/80 shrink-0">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/LogoKenko.png"
              alt="Logo KenkoMed"
              width={22}
              height={22}
              className="h-5.5 w-5.5 object-contain"
              priority
            />
            <span className="font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
              Kenko<span className="text-sky-400 font-extrabold">Med</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">&middot; Demo Interactivo Real</span>
          </Link>
          <span className="hidden md:inline-block text-[11px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 border border-slate-700 font-medium">
            Entorno de Prueba Clínico
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleFullscreen}
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px] cursor-pointer"
            title="Pantalla Completa"
          >
            {isFullscreen ? <RiFullscreenExitLine size={13} /> : <RiFullscreenLine size={13} />}
            <span>{isFullscreen ? 'Salir' : 'Pantalla Completa'}</span>
          </button>

          <button
            onClick={() => setShowScheduleDemoModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-600 hover:bg-sky-500 text-white font-bold text-[11px] shadow-sm transition-all cursor-pointer"
          >
            <RiSparklingLine size={13} />
            <span>Agendar Demo en Vivo</span>
          </button>

          <Link
            href="/"
            className="text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors text-[11px] flex items-center gap-1"
          >
            <RiArrowLeftSLine size={14} />
            <span className="hidden sm:inline">Volver al Sitio</span>
          </Link>
        </div>
      </header>

      {/* ════════════════════════════════════════════════════════════
          CONTENEDOR PRINCIPAL: SIDEBAR + ESPACIO DE TRABAJO
          ════════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex overflow-hidden">

        {/* ── SIDEBAR DESKTOP (xl+) Estilo KenkoMed Django ── */}
        <aside
          className={`hidden xl:flex flex-col bg-white text-slate-800 border-r border-slate-200/80 select-none z-30 transition-all duration-300 ease-in-out shrink-0 ${
            sidebarCollapsed ? 'w-20 px-2' : 'w-64 px-3'
          }`}
        >
          {/* Header del Sidebar: Marca KenkoMed + Toggle Collapse */}
          <div className="flex items-center justify-between h-16 border-b border-slate-100 flex-shrink-0 px-1">
            {!sidebarCollapsed ? (
              <Link href="/" className="flex items-center gap-2.5 min-w-0 group" title="Ir a la web de KenkoMed">
                <div className="w-9 h-9 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-center overflow-hidden shrink-0 p-1">
                  <Image
                    src="/images/LogoKenko.png"
                    alt="Logo KenkoMed"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col min-w-0 leading-tight">
                  <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                    Kenko<span className="text-sky-600 font-extrabold">Med</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium truncate">
                    Software Clínico Kinésico
                  </span>
                </div>
              </Link>
            ) : (
              <Link href="/" className="w-full flex justify-center" title="KenkoMed">
                <div className="w-9 h-9 rounded-xl border border-slate-200/80 bg-white shadow-2xs flex items-center justify-center overflow-hidden p-1">
                  <Image
                    src="/images/LogoKenko.png"
                    alt="Logo KenkoMed"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            )}

            <button
              type="button"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 border border-slate-200/60 transition-all shrink-0 ml-auto cursor-pointer"
              title={sidebarCollapsed ? 'Expandir menú' : 'Contraer menú'}
            >
              {sidebarCollapsed ? <RiMenuUnfoldLine size={15} /> : <RiMenuFoldLine size={15} />}
            </button>
          </div>

          {/* Buscador Rápido de Pacientes (Estilo Input Shadcn) */}
          {!sidebarCollapsed && (
            <div className="py-3 border-b border-slate-100 flex-shrink-0">
              <form onSubmit={handleQuickSearch} className="relative">
                <RiSearchLine className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
                <input
                  type="text"
                  placeholder="Buscar paciente (RUT / Nombre)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-2.5 py-1.5 bg-slate-50 hover:bg-slate-100/60 focus:bg-white border border-slate-200/80 rounded-lg text-xs font-medium focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 text-slate-700"
                />
              </form>
            </div>
          )}

          {/* Menú de Navegación Principal */}
          <div className="flex-1 overflow-y-auto py-3 space-y-1">
            
            {/* 1. Inicio */}
            <button
              onClick={() => setActiveTab('inicio')}
              className={`w-full flex items-center p-2 rounded-lg transition-all group relative cursor-pointer ${
                activeTab === 'inicio'
                  ? 'bg-slate-100 text-sky-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title="Inicio"
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-md transition-all ${
                  activeTab === 'inicio'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-500 group-hover:bg-white group-hover:text-sky-600'
                }`}
              >
                <RiHome5Line size={17} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 text-left">
                  <span className="text-xs font-medium leading-none truncate block">Inicio</span>
                </div>
              )}
            </button>

            {/* 2. Mi Agenda */}
            <button
              onClick={() => setActiveTab('agenda')}
              className={`w-full flex items-center p-2 rounded-lg transition-all group relative cursor-pointer ${
                activeTab === 'agenda'
                  ? 'bg-slate-100 text-sky-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title="Mi Agenda"
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-md transition-all ${
                  activeTab === 'agenda'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-500 group-hover:bg-white group-hover:text-sky-600'
                }`}
              >
                <RiCalendarEventLine size={17} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 text-left">
                  <span className="text-xs font-medium leading-none truncate block">Mi Agenda</span>
                </div>
              )}
            </button>

            {/* 3. Mis Pacientes */}
            <button
              onClick={() => setActiveTab('pacientes')}
              className={`w-full flex items-center p-2 rounded-lg transition-all group relative cursor-pointer ${
                activeTab === 'pacientes'
                  ? 'bg-slate-100 text-sky-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title="Mis Pacientes"
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-md transition-all ${
                  activeTab === 'pacientes'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-500 group-hover:bg-white group-hover:text-sky-600'
                }`}
              >
                <RiFolderUserLine size={17} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 text-left flex items-center justify-between">
                  <span className="text-xs font-medium leading-none truncate block">Mis Pacientes</span>
                  <RiArrowRightSLine className="text-xs text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
              )}
            </button>

            {/* 4. Pagos & Packs */}
            <button
              onClick={() => setActiveTab('pagos')}
              className={`w-full flex items-center p-2 rounded-lg transition-all group relative cursor-pointer ${
                activeTab === 'pagos'
                  ? 'bg-slate-100 text-sky-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title="Pagos & Packs"
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-md transition-all ${
                  activeTab === 'pagos'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-500 group-hover:bg-white group-hover:text-sky-600'
                }`}
              >
                <RiBankCardLine size={17} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 text-left flex items-center justify-between">
                  <span className="text-xs font-medium leading-none truncate block">Pagos & Packs</span>
                  <span className="text-[9px] bg-amber-100 text-amber-800 font-bold px-1 rounded">Demo</span>
                </div>
              )}
            </button>

            {/* 5. Mi Centro */}
            <button
              onClick={() => setActiveTab('centro')}
              className={`w-full flex items-center p-2 rounded-lg transition-all group relative cursor-pointer ${
                activeTab === 'centro'
                  ? 'bg-slate-100 text-sky-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title="Mi Centro"
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-md transition-all ${
                  activeTab === 'centro'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-500 group-hover:bg-white group-hover:text-sky-600'
                }`}
              >
                <RiStore2Line size={17} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 text-left flex items-center justify-between">
                  <span className="text-xs font-medium leading-none truncate block">Mi Centro</span>
                  <RiArrowRightSLine className="text-xs text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5 transition-transform" />
                </div>
              )}
            </button>

            {/* 6. Pautas de Ejercicios WhatsApp */}
            <button
              onClick={() => setActiveTab('pautas')}
              className={`w-full flex items-center p-2 rounded-lg transition-all group relative cursor-pointer ${
                activeTab === 'pautas'
                  ? 'bg-slate-100 text-sky-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100/70 hover:text-slate-900'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
              title="Pautas WhatsApp"
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-md transition-all ${
                  activeTab === 'pautas'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100'
                }`}
              >
                <Dumbbell size={16} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 text-left flex items-center justify-between">
                  <span className="text-xs font-medium leading-none truncate block">Pautas WhatsApp</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">1 Clic</span>
                </div>
              )}
            </button>
          </div>

          {/* Tarjeta de invitación constante dentro del Sidebar */}
          {!sidebarCollapsed && (
            <div className="mx-1 mb-2 p-3 bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200/80 rounded-xl space-y-2">
              <div className="flex items-center gap-1.5 text-sky-900 font-bold text-xs">
                <RiSparklingLine className="text-sky-600" />
                <span>¿Te gusta el software?</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                Pruébalo con tu propio centro médico y datos reales.
              </p>
              <button
                onClick={() => setShowScheduleDemoModal(true)}
                className="w-full py-1.5 bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-bold rounded-lg shadow-2xs transition-colors cursor-pointer text-center block"
              >
                Solicitar Acceso Real &rarr;
              </button>
            </div>
          )}

          {/* Footer del Sidebar: Ayuda con E.V.E + Ajustes + Perfil */}
          <div className="p-2 border-t border-slate-100 flex-shrink-0 flex flex-col gap-1 bg-white">
            
            {/* Ayuda & Guías con badge E.V.E */}
            <button
              onClick={() => setShowEveTourModal(true)}
              className="w-full flex items-center p-2 rounded-lg text-slate-600 hover:bg-slate-100/70 hover:text-slate-900 transition-all text-left cursor-pointer"
              title="Ayuda & Guías con Asistente E.V.E"
            >
              <div className="w-7 h-7 rounded-md bg-slate-100/80 text-slate-500 flex items-center justify-center flex-shrink-0">
                <RiQuestionLine size={17} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 flex items-center justify-between">
                  <span className="text-xs font-medium leading-none truncate block">Ayuda</span>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-sky-50 text-sky-600 border border-sky-200/50 font-semibold px-1.5 py-0.5 rounded">
                    <img
                      src="/images/eve.gif"
                      alt="E.V.E"
                      className="w-3.5 h-3.5 object-contain pointer-events-none"
                    />
                    <span>E.V.E</span>
                  </span>
                </div>
              )}
            </button>

            {/* Ajustes */}
            <button
              onClick={() => notifyLimitedFeature('Configuración avanzada del Centro y Facturación')}
              className="w-full flex items-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-all text-left cursor-pointer"
              title="Ajustes de Perfil"
            >
              <div className="w-7 h-7 rounded-md bg-slate-100/80 text-slate-500 flex items-center justify-center flex-shrink-0">
                <RiSettings4Line size={17} />
              </div>
              {!sidebarCollapsed && (
                <div className="ml-2.5 flex-1 min-w-0 flex items-center justify-between">
                  <span className="text-xs font-medium truncate block">Ajustes</span>
                  <RiLock2Line size={12} className="text-slate-400" />
                </div>
              )}
            </button>

            {/* Perfil del Profesional */}
            <div className={`pt-2 mt-1 border-t border-slate-100 flex items-center gap-2.5 ${sidebarCollapsed ? 'justify-center' : 'px-1'}`}>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-600 to-sky-400 text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                CA
              </div>
              {!sidebarCollapsed && (
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-xs font-bold text-slate-800 truncate">Klgo. Cristóbal Arias</p>
                  <p className="text-[10px] text-slate-400 truncate">Perfil Demostración</p>
                </div>
              )}
            </div>

          </div>
        </aside>

        {/* ── ÁREA PRINCIPAL DE CONTENIDO (Scrollable) ── */}
        <main className="flex-1 overflow-y-auto flex flex-col bg-[#f8fafc]">

          {/* Sub-header de Navegación Móvil (xl:hidden) */}
          <div className="xl:hidden bg-white border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between shrink-0 shadow-2xs">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/LogoKenko.png"
                alt="Logo KenkoMed"
                width={26}
                height={26}
                className="h-6.5 w-6.5 object-contain"
              />
              <span className="font-bold text-xs text-slate-800">Kenko<span className="text-sky-600 font-extrabold">Med</span></span>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">Demo</span>
            </Link>

            {/* Mobile Tab Pills */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('inicio')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                  activeTab === 'inicio' ? 'bg-sky-50 text-sky-700' : 'text-slate-600'
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => setActiveTab('agenda')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                  activeTab === 'agenda' ? 'bg-sky-50 text-sky-700' : 'text-slate-600'
                }`}
              >
                Agenda
              </button>
              <button
                onClick={() => setActiveTab('pacientes')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                  activeTab === 'pacientes' ? 'bg-sky-50 text-sky-700' : 'text-slate-600'
                }`}
              >
                Pacientes
              </button>
              <button
                onClick={() => setActiveTab('pautas')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                  activeTab === 'pautas' ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600'
                }`}
              >
                Pautas
              </button>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              HEADER DE ATENCIÓN CON E.V.E ASISTENTE (panel.html replica)
              ════════════════════════════════════════════════════════ */}
          <div className="max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Saludo y Datos Clínicos */}
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">
                    {greeting}, Klgo. Cristóbal Arias
                  </h1>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-[10px] font-bold">
                    Modo Demostración
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5 flex items-center gap-1.5 flex-wrap">
                  <span>Viernes 24 de Octubre</span>
                  <span>&middot;</span>
                  <span className="text-sky-600 font-medium">Kinesiólogo</span>
                  <span>&middot;</span>
                  <span className="text-gray-600 font-medium">Clínica Providencia</span>
                  <span>&middot;</span>
                  <span className="text-amber-600 font-semibold">Datos Simulados</span>
                </p>
              </div>

              {/* Apartado de Tour con E.V.E (Exact match a panel.html) */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* E.V.E GIF flotante interactivo */}
                <div
                  className="flex-shrink-0 cursor-pointer select-none transition-transform hover:scale-105 active:scale-95"
                  onClick={nextEveTip}
                  title="Haz clic para ver un consejo clínico"
                >
                  <img
                    src="/images/eve.gif"
                    alt="E.V.E"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-sm pointer-events-none"
                  />
                </div>

                {/* Diálogo y botones integrados */}
                <div className="flex flex-col gap-1.5 min-w-0">
                  {/* Burbuja de diálogo minimalista */}
                  {showEveBubble && (
                    <div className="relative bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-2xs flex items-center justify-between gap-2 max-w-[280px] sm:max-w-[340px]">
                      <div className="hidden sm:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-white border-l border-b border-gray-200 rotate-45" />
                      <p
                        className="text-xs text-gray-700 leading-snug font-medium select-none cursor-pointer hover:text-sky-600 transition-colors truncate"
                        onClick={nextEveTip}
                        title="Haz clic para ver otro tip"
                      >
                        {EVE_TIPS[eveTipIndex]}
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowEveBubble(false)}
                        className="text-gray-400 hover:text-gray-600 p-0.5 rounded transition-colors text-xs leading-none flex-shrink-0 cursor-pointer"
                        title="Ocultar mensaje"
                      >
                        <RiCloseLine size={14} />
                      </button>
                    </div>
                  )}

                  {/* Botones limpios originales KenkoMed */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowEveTourModal(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold rounded-lg border border-sky-200/80 transition-colors shadow-2xs cursor-pointer"
                    >
                      <RiCompass3Line className="text-base text-sky-600" />
                      <span>Tour interactivo</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowScheduleDemoModal(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-lg border border-gray-200 transition-colors shadow-2xs cursor-pointer"
                    >
                      <RiSparklingLine className="text-base text-amber-500" />
                      <span>Solicitar Software</span>
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* ════════════════════════════════════════════════════════
                1. TAB INICIO: PANEL DE CONTROL COMPLETO
                ════════════════════════════════════════════════════════ */}
            {activeTab === 'inicio' && (
              <div className="space-y-6 animate-fade-in">

                {/* ── TARJETAS DE MÉTRICAS (KPIs) (panel.html replica) ── */}
                <section aria-labelledby="metricas-titulo">
                  <h2 id="metricas-titulo" className="sr-only">Resumen de Métricas</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    
                    {/* Card 1: Citas Hoy */}
                    <div className="bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider truncate">
                          Citas Hoy
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 flex items-center justify-center text-sky-600 flex-shrink-0">
                          <RiCalendarCheckLine className="text-base sm:text-lg" />
                        </div>
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-800 tabular-nums">24</span>
                        <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 truncate">8 realizadas de 24</p>
                      </div>
                    </div>

                    {/* Card 2: Citas Semana */}
                    <div className="bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider truncate">
                          Citas Semana
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                          <RiCalendarEventLine className="text-base sm:text-lg" />
                        </div>
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-800 tabular-nums">142</span>
                        <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 truncate">Semana en curso (+14%)</p>
                      </div>
                    </div>

                    {/* Card 3: Mis Pacientes */}
                    <div className="bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider truncate">
                          Mis Pacientes
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                          <RiUserHeartLine className="text-base sm:text-lg" />
                        </div>
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-800 tabular-nums">1.204</span>
                        <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 truncate">
                          Nuevos mes: <span className="text-emerald-600 font-semibold">+18</span>
                        </p>
                      </div>
                    </div>

                    {/* Card 4: Sesiones */}
                    <div className="bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider truncate">
                          Sesiones
                        </span>
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                          <RiPulseLine className="text-base sm:text-lg" />
                        </div>
                      </div>
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-800 tabular-nums">382</span>
                        <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 truncate">Atenciones del mes</p>
                      </div>
                    </div>

                  </div>
                </section>

                {/* ── BANNER PRÓXIMA CITA INMEDIATA (panel.html replica) ── */}
                {nextAppointment && (
                  <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 rounded-xl p-4 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white shrink-0">
                        <RiTimeLine className="text-xl" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider font-bold bg-white/20 text-white px-2 py-0.5 rounded">
                            Siguiente atención hoy
                          </span>
                          <span className="text-xs font-bold text-sky-100">
                            {nextAppointment.time}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-white mt-0.5 leading-tight">
                          {nextAppointment.name}
                        </h3>
                        <p className="text-xs text-sky-100 font-normal">
                          RUT: {nextAppointment.rut} &middot; {nextAppointment.diagnosis}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedPatient(nextAppointment)}
                      className="w-full sm:w-auto px-4 py-2 bg-white text-sky-700 hover:bg-sky-50 text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0"
                    >
                      <RiCheckboxCircleLine className="text-base" />
                      <span>Iniciar Atención</span>
                    </button>
                  </div>
                )}

                {/* ── AGENDA + MIS TAREAS (2 Columnas: panel.html replica) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  
                  {/* Columna Izquierda: Agenda y Lista de Citas */}
                  <div className="lg:col-span-2 space-y-4">
                    <section aria-labelledby="agenda-titulo">
                      <div className="flex items-center justify-between mb-2">
                        <h2 id="agenda-titulo" className="text-sm font-semibold text-gray-800">
                          Próximas Citas y Atenciones
                        </h2>
                        <button
                          onClick={() => setActiveTab('agenda')}
                          className="text-xs text-sky-600 font-medium hover:underline cursor-pointer"
                        >
                          Ver calendario completo &rarr;
                        </button>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                        {/* Grupo Hoy */}
                        <div className="flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gray-50 border-b border-gray-100 sticky top-0 z-10">
                          <span className="text-xs font-semibold text-white bg-sky-600 rounded px-1.5 py-0.5">
                            Hoy
                          </span>
                          <span className="text-xs font-medium text-gray-600">Viernes 24 de Octubre</span>
                          <span className="text-xs text-gray-400 ml-auto">
                            {patients.length} citas programadas
                          </span>
                        </div>

                        {/* Lista de citas */}
                        <ul className="divide-y divide-gray-100">
                          {patients.map((pat) => (
                            <li
                              key={pat.id}
                              className="group relative flex items-center gap-4 px-4 sm:px-5 py-3 hover:bg-slate-50/80 transition-colors"
                            >
                              {/* Hora */}
                              <div className="w-14 flex-shrink-0 tabular-nums">
                                <p className="text-sm font-semibold text-gray-800 leading-tight">
                                  {pat.time.split(' - ')[0]}
                                </p>
                                <p className="text-xs text-gray-400 leading-tight">
                                  {pat.time.split(' - ')[1]}
                                </p>
                              </div>

                              {/* Paciente y Diagnóstico */}
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-800 truncate">
                                  {pat.name}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                  {pat.box} &middot; {pat.diagnosis}
                                </p>
                              </div>

                              {/* Estado */}
                              <div className="flex items-center gap-3">
                                {pat.status === 'Confirmada' && (
                                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-600">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="hidden sm:inline">Confirmada</span>
                                  </span>
                                )}
                                {pat.status === 'En Box' && (
                                  <span className="inline-flex items-center gap-1.5 text-xs text-sky-700">
                                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                                    <span className="hidden sm:inline font-semibold">En Box</span>
                                  </span>
                                )}
                                {pat.status === 'Pendiente' && (
                                  <span className="inline-flex items-center gap-1.5 text-xs text-amber-600">
                                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                                    <span className="hidden sm:inline">Pendiente</span>
                                  </span>
                                )}

                                {/* Botón Atender */}
                                <button
                                  type="button"
                                  onClick={() => setSelectedPatient(pat)}
                                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
                                >
                                  <RiCheckboxCircleLine size={14} />
                                  <span>Atender</span>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </div>

                  {/* Columna Derecha: Mis Tareas + Gráfica Semanal */}
                  <div className="space-y-6">
                    
                    {/* Mis Tareas (To-Do) interactivo */}
                    <section aria-labelledby="tareas-titulo">
                      <h2 id="tareas-titulo" className="text-sm font-semibold text-gray-800 mb-2">
                        Mis Tareas (To-Do)
                      </h2>
                      <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col shadow-2xs">
                        
                        <form onSubmit={handleAddTodo} className="flex gap-2 mb-3">
                          <input
                            type="text"
                            placeholder="Añadir nueva tarea..."
                            value={newTodoText}
                            onChange={(e) => setNewTodoText(e.target.value)}
                            className="flex-1 text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-700"
                          />
                          <button
                            type="submit"
                            className="bg-sky-600 hover:bg-sky-700 text-white rounded-lg px-3 py-2 transition-colors flex items-center justify-center cursor-pointer"
                            title="Agregar tarea"
                          >
                            <RiAddLine size={16} />
                          </button>
                        </form>

                        <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                          {todos.map((todo) => (
                            <div
                              key={todo.id}
                              className="flex items-center justify-between group p-1.5 rounded hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                            >
                              <label className="flex items-center gap-2.5 flex-1 min-w-0 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={todo.completed}
                                  onChange={() => toggleTodo(todo.id)}
                                  className="w-4 h-4 text-sky-600 rounded border-gray-300 focus:ring-sky-500 cursor-pointer"
                                />
                                <span
                                  className={`text-xs select-none truncate ${
                                    todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                                  }`}
                                >
                                  {todo.text}
                                </span>
                              </label>

                              <button
                                type="button"
                                onClick={() => deleteTodo(todo.id)}
                                className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity p-1 cursor-pointer"
                                title="Eliminar tarea"
                              >
                                <RiDeleteBin6Line size={14} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* Gráfica de Citas (Últimos 7 días) */}
                    <section aria-labelledby="grafica-titulo">
                      <h2 id="grafica-titulo" className="text-sm font-semibold text-gray-800 mb-2">
                        Citas (Últimos 7 días)
                      </h2>
                      <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between h-[180px] shadow-2xs">
                        <div className="flex items-end justify-between gap-2 h-28 pt-4 px-2">
                          {[
                            { day: 'Lun', val: 18, pct: '60%' },
                            { day: 'Mar', val: 22, pct: '75%' },
                            { day: 'Mié', val: 26, pct: '88%' },
                            { day: 'Jue', val: 21, pct: '70%' },
                            { day: 'Vie', val: 24, pct: '82%', current: true },
                            { day: 'Sáb', val: 14, pct: '48%' },
                          ].map((item, idx) => (
                            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                              <span className="text-[10px] font-bold text-slate-500">{item.val}</span>
                              <div
                                style={{ height: item.pct }}
                                className={`w-full max-w-[28px] rounded-t-md transition-all ${
                                  item.current
                                    ? 'bg-sky-600 shadow-sm'
                                    : 'bg-sky-100 hover:bg-sky-200'
                                }`}
                              />
                              <span className="text-[10px] text-slate-500 font-medium">{item.day}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[11px] text-slate-400 text-center border-t border-slate-100 pt-2">
                          Promedio diario: <span className="font-semibold text-slate-700">20.8 pacientes</span>
                        </p>
                      </div>
                    </section>

                    {/* Acciones Rápidas con llamado a la acción */}
                    <div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-sky-900">Acciones Clínicas</span>
                        <span className="text-[10px] text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded font-semibold">Demo</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setShowNewPatientModal(true)}
                          className="px-3 py-2 bg-white hover:bg-sky-100/50 text-sky-800 text-xs font-semibold rounded-lg border border-sky-200 transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                        >
                          <RiUserAddLine size={14} />
                          <span>+ Paciente</span>
                        </button>
                        <button
                          onClick={() => setActiveTab('pautas')}
                          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                        >
                          <RiWhatsappLine size={14} />
                          <span>Pauta WhatsApp</span>
                        </button>
                      </div>
                      <button
                        onClick={() => setShowScheduleDemoModal(true)}
                        className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <RiSparklingLine size={14} />
                        <span>Pedir Demostración Personalizada</span>
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                2. TAB MI AGENDA (MULTI-BOX EN TIEMPO REAL)
                ════════════════════════════════════════════════════════ */}
            {activeTab === 'agenda' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-gray-900">Agenda Multi-Box en Tiempo Real</h2>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">Vista de Muestra</span>
                    </div>
                    <p className="text-xs text-gray-500">Distribución de camillas y gimnasio kinésico para hoy</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => triggerToast('Mostrando vista de Box')}
                      className="px-3 py-1.5 bg-sky-600 text-white text-xs font-semibold rounded-lg shadow-2xs cursor-pointer"
                    >
                      Vista por Box
                    </button>
                    <button
                      onClick={() => notifyLimitedFeature('Sincronización bidireccional con Google Calendar')}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <RiLock2Line size={12} className="text-gray-500" />
                      <span>Sincronizar</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Box 1 (Rehab)', 'Box 2 (Camilla)', 'Box 3 (Gimnasio)'].map((boxName, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-2xs">
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <span className="text-xs font-bold text-gray-800">{boxName}</span>
                        <span className="text-[10px] bg-sky-50 text-sky-700 font-semibold px-2 py-0.5 rounded">
                          {i === 1 ? 'Ocupado' : 'Disponible'}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {patients
                          .filter((p) => p.box.includes(`Box ${i + 1}`))
                          .map((pat) => (
                            <div
                              key={pat.id}
                              onClick={() => setSelectedPatient(pat)}
                              className="p-3 rounded-lg border border-slate-200/80 bg-slate-50/70 hover:bg-sky-50 hover:border-sky-300 transition-all cursor-pointer space-y-1"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold text-sky-700">{pat.time}</span>
                                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                                  {pat.status}
                                </span>
                              </div>
                              <p className="text-xs font-semibold text-gray-900 truncate">{pat.name}</p>
                              <p className="text-[11px] text-gray-500 truncate">{pat.diagnosis}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                3. TAB MIS PACIENTES (DIRECTORIO Y FICHAS)
                ════════════════════════════════════════════════════════ */}
            {activeTab === 'pacientes' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-2xs">
                  <div className="relative flex-1 max-w-md">
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Buscar por RUT, nombre o diagnóstico..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowNewPatientModal(true)}
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RiUserAddLine size={15} />
                      <span>+ Registrar Paciente Demo</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-gray-50 border-b border-gray-200 text-gray-600 font-semibold uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3 px-4">Paciente & RUT</th>
                        <th className="py-3 px-4">Diagnóstico</th>
                        <th className="py-3 px-4">Dolor EVA</th>
                        <th className="py-3 px-4">Sesiones</th>
                        <th className="py-3 px-4">Acción</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredPatients.map((pat) => (
                        <tr key={pat.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-4">
                            <p className="font-bold text-gray-900">{pat.name}</p>
                            <p className="text-[11px] text-gray-400 font-mono">{pat.rut} &middot; {pat.age} años</p>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-gray-700 font-medium">{pat.diagnosis}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-emerald-600">{pat.evaCurrent}/10</span>
                              <span className="text-[10px] text-gray-400">(inicio: {pat.evaStart})</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-bold text-sky-700">{pat.sessionsUsed}</span>
                            <span className="text-gray-400">/{pat.sessionsTotal}</span>
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => setSelectedPatient(pat)}
                              className="px-3 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold rounded-md border border-sky-200 transition-colors cursor-pointer"
                            >
                              Ver Ficha SOAP
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <RiInformationLine size={18} className="text-amber-600 shrink-0" />
                    <span>En el software real cuentas con <strong>historias clínicas ilimitadas</strong>, carga de exámenes radiológicos y firma electrónica avanzada.</span>
                  </div>
                  <button
                    onClick={() => setShowScheduleDemoModal(true)}
                    className="font-bold underline hover:text-black cursor-pointer shrink-0"
                  >
                    Activar en mi consulta &rarr;
                  </button>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                4. TAB PAGOS & PACKS
                ════════════════════════════════════════════════════════ */}
            {activeTab === 'pagos' && (
              <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-2xs">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Total Recaudado Mes</span>
                    <p className="text-2xl font-bold text-gray-900 mt-1">$4.280.000</p>
                    <span className="text-xs text-emerald-600 font-medium">94% pagado al día</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-2xs">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Packs de 10 Sesiones</span>
                    <p className="text-2xl font-bold text-sky-600 mt-1">28 Activos</p>
                    <span className="text-xs text-gray-500 font-medium">Promedio $180.000 / pack</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-2xs">
                    <span className="text-xs font-semibold text-gray-500 uppercase">Saldos Pendientes</span>
                    <p className="text-2xl font-bold text-amber-600 mt-1">$145.000</p>
                    <span className="text-xs text-amber-600 font-medium">4 pacientes con cuota pendiente</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 text-center space-y-3 shadow-2xs">
                  <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 mx-auto flex items-center justify-center">
                    <RiBankCardLine size={24} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">Control de Caja y Facturación Electrónica</h3>
                  <p className="text-xs text-gray-500 max-w-lg mx-auto">
                    El módulo de pagos en el software completo automatiza la conciliación con Transbank, transferencias bancarias y emisión automática de boletas electrónicas autorizadas por el SII.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => notifyLimitedFeature('Emisión de boletas electrónicas SII y conciliación bancaria')}
                      className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer transition-colors"
                    >
                      Conocer Módulo de Pagos Completo
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                5. TAB MI CENTRO & AUDITORÍA LEY 21.719
                ════════════════════════════════════════════════════════ */}
            {activeTab === 'centro' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-lg">
                        <RiStore2Line size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">Clínica Providencia (Centro Demo)</h3>
                        <p className="text-xs text-gray-500">Av. Pedro de Valdivia 1420, Of. 602 &middot; Santiago, Chile</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-1 rounded">
                      Vista Demostración
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                      <span className="font-bold text-gray-700">Normativa de Salud y Seguridad:</span>
                      <p className="text-gray-500">Cumplimiento estricto Ley 21.719 (Datos Personales de Salud) y Ley 20.584 de Derechos y Deberes.</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                      <span className="font-bold text-gray-700">Equipo Profesional Activo:</span>
                      <p className="text-gray-500">3 Kinesiólogos &middot; 1 Secretaria de Admisión &middot; 3 Boxes Clínicos.</p>
                    </div>
                  </div>

                  <div className="p-4 bg-sky-50/70 border border-sky-100 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-xs text-sky-900">
                      ¿Quieres configurar este centro con <strong>tu logo institucional</strong>, los RUTs de tus profesionales y tu propio dominio web?
                    </p>
                    <button
                      onClick={() => setShowScheduleDemoModal(true)}
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-lg shrink-0 transition-colors cursor-pointer"
                    >
                      Personalizar mi Centro
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════
                6. TAB PAUTAS DE EJERCICIOS WHATSAPP (1 CLIC)
                ════════════════════════════════════════════════════════ */}
            {activeTab === 'pautas' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 px-2 py-0.5 rounded">
                      Prescripción Médica Auditada
                    </span>
                    <h2 className="text-lg font-bold">Catálogo Anatómico con Envío en 1 Clic a WhatsApp</h2>
                    <p className="text-xs text-emerald-100">
                      Envía videos, series, repeticiones y descansos al celular del paciente con tu membrete clínico.
                    </p>
                  </div>

                  <button
                    onClick={() => triggerToast('📲 Pauta simulada enviada. En la versión real se despacha vía WhatsApp Cloud API.')}
                    className="px-4 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer flex-shrink-0"
                  >
                    <RiWhatsappLine size={16} />
                    <span>Simular Envío WhatsApp</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      name: 'Ejercicio Nórdico Asistido',
                      region: 'Cadena Posterior & Isquiotibiales',
                      series: '3 series x 8 repeticiones',
                      rest: '90s de descanso',
                      level: 'Fase 3 Fortalecimiento',
                    },
                    {
                      name: 'Rotación Externa con Elástico',
                      region: 'Hombro & Manguito Rotador',
                      series: '3 series x 12 repeticiones',
                      rest: '60s de descanso',
                      level: 'Fase 2 Estabilidad',
                    },
                    {
                      name: 'Sentadilla Búlgara Unilateral',
                      region: 'Rodilla & Cuádriceps',
                      series: '4 series x 10 repeticiones',
                      rest: '75s de descanso',
                      level: 'Fase 4 Pliometría',
                    },
                  ].map((ex, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-2xs hover:shadow-xs transition-shadow">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                          {ex.region}
                        </span>
                        <span className="text-[10px] text-gray-400 font-semibold">{ex.level}</span>
                      </div>
                      <h4 className="text-sm font-bold text-gray-900">{ex.name}</h4>
                      <div className="text-xs text-gray-500 space-y-0.5">
                        <p>&bull; {ex.series}</p>
                        <p>&bull; {ex.rest}</p>
                      </div>
                      <button
                        onClick={() => triggerToast(`Añadido "${ex.name}" a la pauta del paciente`)}
                        className="w-full py-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-300 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                      >
                        + Añadir a Pauta
                      </button>
                    </div>
                  ))}
                </div>

                <div className="text-center p-4 bg-white border border-gray-200 rounded-xl space-y-2">
                  <p className="text-xs text-gray-600">
                    El software completo incluye más de <strong>120 videos kinésicos profesionales en alta definición</strong> grabados en camilla y gimnasio.
                  </p>
                  <button
                    onClick={() => setShowScheduleDemoModal(true)}
                    className="text-xs text-emerald-700 hover:text-emerald-900 font-bold underline cursor-pointer"
                  >
                    Ver el catálogo completo en una demostración en vivo &rarr;
                  </button>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* ════════════════════════════════════════════════════════════
          3. BARRA INFERIOR FLOTANTE PERSISTENTE (LLAMADO A SOLICITAR)
          ════════════════════════════════════════════════════════════ */}
      <aside aria-label="Aviso de demostración" className="fixed bottom-0 left-0 right-0 z-40 bg-[#05111e]/95 backdrop-blur-md border-t border-slate-800 text-white py-2.5 px-4 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-sky-600/30 text-sky-400 flex items-center justify-center shrink-0 hidden sm:flex">
              <RiSparklingLine size={18} />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">
                ¿Quieres implementar KenkoMed en tu consulta o centro médico?
              </p>
              <p className="text-[11px] text-slate-400">
                Esta demo muestra solo una parte. Obtén el software completo con soporte y migración gratuita.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center">
            <a
              href="https://wa.me/56934444539?text=Hola%20equipo%20KenkoMed,%20estoy%20probando%20la%20demo%20interactiva%20y%20quiero%20solicitar%20el%20software%20para%20mi%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <RiWhatsappLine size={15} />
              <span>WhatsApp Directo</span>
            </a>

            <button
              onClick={() => setShowScheduleDemoModal(true)}
              className="px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Solicitar Software
            </button>
          </div>
        </div>
      </aside>

      {/* ════════════════════════════════════════════════════════════
          MODAL 1: FICHA CLÍNICA SOAP DIGITAL HOSPITALARIA
          ════════════════════════════════════════════════════════════ */}
      {selectedPatient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
            
            {/* Header del Expediente */}
            <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-lg">
                  <RiFileTextLine size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-white/20 px-2 py-0.5 rounded">
                      Ficha Clínica SOAP
                    </span>
                    <span className="text-xs text-amber-300 font-mono">Modo Prueba</span>
                  </div>
                  <h3 className="text-base font-bold text-white mt-0.5">{selectedPatient.name}</h3>
                  <p className="text-xs text-slate-300">
                    RUT: {selectedPatient.rut} &middot; {selectedPatient.age} años &middot; Tel: {selectedPatient.phone}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPatient(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            {/* Barra de Datos Clave (Diagnóstico + Dolor EVA) */}
            <div className="px-5 py-3 bg-sky-50/70 border-b border-sky-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Diagnóstico</span>
                <span className="font-bold text-slate-800">{selectedPatient.diagnosis}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Escala EVA</span>
                <span className="font-bold text-emerald-700">
                  {selectedPatient.evaCurrent}/10 (Inició en {selectedPatient.evaStart}/10)
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Sesiones</span>
                <span className="font-bold text-sky-700">
                  {selectedPatient.sessionsUsed} de {selectedPatient.sessionsTotal} completadas
                </span>
              </div>
            </div>

            {/* Selector de Pestañas SOAP */}
            <div className="flex border-b border-gray-200 px-5 pt-3 gap-2 bg-gray-50/80">
              {[
                { id: 's', label: 'S · Subjetivo' },
                { id: 'o', label: 'O · Objetivo' },
                { id: 'a', label: 'A · Análisis' },
                { id: 'p', label: 'P · Plan Terapéutico' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSoapTab(tab.id as any)}
                  className={`px-3 py-2 text-xs font-bold rounded-t-lg transition-all border-b-2 cursor-pointer ${
                    selectedSoapTab === tab.id
                      ? 'bg-white text-sky-700 border-sky-600 shadow-2xs'
                      : 'text-gray-500 hover:text-gray-800 border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido de la Ficha SOAP */}
            <div className="p-5 overflow-y-auto flex-1 space-y-4 text-xs">
              {selectedSoapTab === 's' && (
                <div className="space-y-2">
                  <label className="font-bold text-gray-700 block">Reporte y percepción del paciente:</label>
                  <textarea
                    rows={6}
                    defaultValue={selectedPatient.soap.s}
                    className="w-full p-3 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 leading-relaxed"
                  />
                  <p className="text-[11px] text-gray-400">Autoguardado y cumplimiento legal Ley 21.719 en el software completo.</p>
                </div>
              )}

              {selectedSoapTab === 'o' && (
                <div className="space-y-2">
                  <label className="font-bold text-gray-700 block">Evaluación física, rangos articulares y pruebas ortopédicas:</label>
                  <textarea
                    rows={6}
                    defaultValue={selectedPatient.soap.o}
                    className="w-full p-3 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 leading-relaxed"
                  />
                </div>
              )}

              {selectedSoapTab === 'a' && (
                <div className="space-y-2">
                  <label className="font-bold text-gray-700 block">Juicio clínico kinésico y evolución funcional:</label>
                  <textarea
                    rows={6}
                    defaultValue={selectedPatient.soap.a}
                    className="w-full p-3 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 leading-relaxed"
                  />
                </div>
              )}

              {selectedSoapTab === 'p' && (
                <div className="space-y-2">
                  <label className="font-bold text-gray-700 block">Plan de tratamiento y ejercicios prescritos:</label>
                  <textarea
                    rows={6}
                    defaultValue={selectedPatient.soap.p}
                    className="w-full p-3 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 leading-relaxed font-mono"
                  />
                </div>
              )}
            </div>

            {/* Aviso de función completa dentro de la ficha */}
            <div className="px-5 py-2 bg-amber-50 border-t border-amber-100 flex items-center justify-between text-[11px] text-amber-900">
              <span>💡 En la versión completa los cambios se sincronizan en la nube y quedan respaldados con auditoría médica.</span>
              <button
                onClick={() => setShowScheduleDemoModal(true)}
                className="font-bold underline hover:text-black cursor-pointer"
              >
                Solicitar Acceso
              </button>
            </div>

            {/* Footer con Acciones */}
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => triggerToast('📲 Pauta simulada enviada. En la versión real se despacha vía WhatsApp Cloud API.')}
                  className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RiWhatsappLine size={15} />
                  <span>Enviar Pauta WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => triggerToast('📄 PDF membretado auditado generado para descarga en modo demo')}
                  className="px-3 py-1.5 bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <RiDownload2Line size={15} />
                  <span>PDF Auditado</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  triggerToast('✓ Evolución clínica guardada (Modo Demostración)')
                  setSelectedPatient(null)
                }}
                className="px-5 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Guardar Evolución
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          MODAL 2: NUEVO PACIENTE (REGISTRO RÁPIDO)
          ════════════════════════════════════════════════════════════ */}
      {showNewPatientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h3 className="font-bold text-base text-gray-900">Registrar Nuevo Paciente</h3>
                <p className="text-[11px] text-amber-600 font-semibold">Simulador de Admisión</p>
              </div>
              <button
                onClick={() => setShowNewPatientModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                triggerToast('✓ Paciente registrado en modo demo temporal')
                setShowNewPatientModal(false)
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="font-semibold text-gray-700 block mb-1">Nombre Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Sofía Morales Contreras"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">RUT Chileno</label>
                  <input
                    type="text"
                    required
                    placeholder="19.482.019-3"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="font-semibold text-gray-700 block mb-1">Edad</label>
                  <input
                    type="number"
                    required
                    placeholder="31"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Teléfono (WhatsApp)</label>
                <input
                  type="text"
                  required
                  placeholder="+56 9 8172 3849"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 block mb-1">Diagnóstico Inicial</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Tendinopatía Aquiliana Derecha"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewPatientModal(false)}
                  className="px-4 py-2 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-lg shadow-sm cursor-pointer"
                >
                  Crear en Modo Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          MODAL 3: TOUR INTERACTIVO CON E.V.E
          ════════════════════════════════════════════════════════════ */}
      {showEveTourModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-gray-200 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/eve.gif"
                alt="E.V.E"
                className="w-14 h-14 object-contain pointer-events-none"
              />
              <div className="flex-1">
                <h3 className="font-bold text-base text-gray-900">Asistente Clínico E.V.E</h3>
                <p className="text-xs text-sky-600 font-medium">Guía de uso para Kinesiólogos & Centros</p>
              </div>
              <button
                onClick={() => setShowEveTourModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0">1</span>
                <p><strong>Ficha SOAP hospitalaria:</strong> Registra anamnesis, escalas de dolor EVA y pruebas ortopédicas con autoguardado.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">2</span>
                <p><strong>Envío de Pautas a WhatsApp:</strong> Tus pacientes reciben sus ejercicios con videos e indicaciones claras sin instalar nada.</p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold shrink-0">3</span>
                <p><strong>Portal de Reservas Online:</strong> Reduce un 78% el ausentismo con validación de RUT y recordatorios automáticos.</p>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-gray-100">
              <span className="text-[11px] text-gray-400">Demostración KenkoMed v2.4</span>
              <button
                onClick={() => {
                  setShowEveTourModal(false)
                  setShowScheduleDemoModal(true)
                }}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-lg cursor-pointer"
              >
                Solicitar Demostración en Vivo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          MODAL 4: AVISO DE FUNCIÓN LIMITADA EN DEMO
          ════════════════════════════════════════════════════════════ */}
      {showFeatureLimitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 mx-auto flex items-center justify-center">
              <RiLock2Line size={24} />
            </div>

            <div className="text-center space-y-1">
              <h3 className="font-bold text-base text-gray-900">Función Exclusiva del Software Completo</h3>
              <p className="text-xs text-amber-700 font-semibold">{featureLimitNotice}</p>
            </div>

            <p className="text-xs text-gray-600 text-center leading-relaxed">
              En este entorno de prueba mostramos la maqueta y la experiencia visual de KenkoMed. Para conectar tus pacientes reales, bases de datos y firma médica, activa tu cuenta oficial.
            </p>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => {
                  setShowFeatureLimitModal(false)
                  setShowScheduleDemoModal(true)
                }}
                className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Solicitar Software y Demostración en Vivo
              </button>
              <button
                onClick={() => setShowFeatureLimitModal(false)}
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Volver a la Demostración
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          MODAL 5: AGENDAR DEMOSTRACIÓN OFICIAL (CONVERSIÓN ALTA)
          ════════════════════════════════════════════════════════════ */}
      {showScheduleDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-gray-200 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                  <RiSparklingLine size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">Solicitar Software KenkoMed</h3>
                  <p className="text-[10px] text-gray-400">Implementación personalizada en 24 horas</p>
                </div>
              </div>
              <button
                onClick={() => setShowScheduleDemoModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <RiCloseLine size={18} />
              </button>
            </div>

            <div className="space-y-2 text-xs text-gray-600">
              <p>
                <strong>¡Excelente decisión!</strong> El software completo incluye:
              </p>
              <ul className="space-y-1 text-slate-700 font-medium pl-2">
                <li>&bull; Historias clínicas y pacientes ilimitados</li>
                <li>&bull; Envío en 1 clic de pautas a WhatsApp con videos en HD</li>
                <li>&bull; Portal público de reservas online con validación de RUT</li>
                <li>&bull; Facturación electrónica y control de caja</li>
                <li>&bull; Migración gratuita de tus fichas clínicas actuales</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-gray-100">
              <a
                href="https://wa.me/56934444539?text=Hola%20equipo%20KenkoMed,%20acabo%20de%20ver%20la%20demo%20interactiva%20y%20quiero%20solicitar%20el%20software%20para%20mi%20consulta%20kin%C3%A9sica"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <RiWhatsappLine size={16} />
                <span>Hablar por WhatsApp con un Especialista</span>
              </a>

              <Link
                href="/#contact/"
                className="w-full py-2.5 px-4 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Formulario de Contacto & Agendamiento</span>
                <RiExternalLinkLine size={13} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════════════════════════════════════
          TOAST FEEDBACK INTERACTIVO
          ════════════════════════════════════════════════════════════ */}
      {toastMessage && (
        <div className="fixed bottom-16 right-5 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs flex items-center gap-2 border border-slate-700 animate-slide-up">
          <RiCheckboxCircleLine className="text-emerald-400 text-base" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  )
}

export default DemoContent
