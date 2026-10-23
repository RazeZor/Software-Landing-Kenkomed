'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  RiHome5Line,
  RiUserHeartLine,
  RiBankCardLine,
  RiCalendarEventLine,
  RiPulseLine,
  RiSearchLine,
  RiUserAddLine,
  RiFolderUserLine,
  RiCheckDoubleLine,
  RiArrowRightSLine,
  RiCheckboxCircleLine,
  RiTimeLine,
  RiMapPinLine,
  RiFullscreenLine,
  RiFullscreenExitLine,
  RiRefreshLine,
  RiCloseLine,
  RiWhatsappLine,
  RiFileTextLine,
  RiShieldCheckLine,
  RiLockLine,
  RiStethoscopeLine,
  RiCalendarCheckLine,
  RiExchangeLine,
} from 'react-icons/ri'

/* ── MOCK DATA ─────────────────────────────────────────────── */

interface Patient {
  id: string
  name: string
  rut: string
  age: number
  phone: string
  time: string
  specialty: string
  status: 'CONFIRMADA' | 'EN ATENCIÓN' | 'PENDIENTE PAGO' | 'COMPLETADA'
  box: string
  evaStart: number
  evaCurrent: number
  sessionsUsed: number
  sessionsTotal: number
  diagnosis: string
  soap: {
    s: string
    o: string
    a: string
    p: string
  }
  exercises: string[]
}

const INITIAL_PATIENTS: Patient[] = [
  {
    id: 'p1',
    name: 'María González',
    rut: '18.421.905-2',
    age: 34,
    phone: '+56 9 8452 1190',
    time: '09:00 - 09:45',
    specialty: 'Kinesiología Motora',
    status: 'CONFIRMADA',
    box: 'Box 1 · Fisioterapia',
    evaStart: 8,
    evaCurrent: 2,
    sessionsUsed: 6,
    sessionsTotal: 10,
    diagnosis: 'Tendinopatía supraespinoso derecho con pinzamiento subacromial',
    soap: {
      s: 'Paciente refiere disminución sustancial del dolor nocturno (EVA 2/10). Realizó la pauta de ejercicios enviada a su WhatsApp 4 días en la semana.',
      o: 'Abducción activa glenohumeral 160° sin dolor. Test de Neer negativo. Fuerza muscular rotadores externos M4+.',
      a: 'Evolución altamente favorable. Respuesta positiva a carga progresiva y ejercicios de control escapular.',
      p: 'Avanzar a fortalecimiento con banda elástica nivel azul. Mantener crioterapia post-esfuerzo si persiste molestia residual.',
    },
    exercises: [
      'Rotación externa con banda elástica (3 series de 12 rep.)',
      'Retracción escapular en pared (3 series de 10 rep.)',
      'Estiramiento cápsula posterior de hombro (30 seg x 3 veces)',
    ],
  },
  {
    id: 'p2',
    name: 'Carlos Silva Valenzuela',
    rut: '15.902.314-8',
    age: 41,
    phone: '+56 9 9312 8841',
    time: '10:00 - 10:45',
    specialty: 'Rehabilitación LCA Post-Op',
    status: 'EN ATENCIÓN',
    box: 'Gimnasio · Readaptación',
    evaStart: 7,
    evaCurrent: 1,
    sessionsUsed: 8,
    sessionsTotal: 12,
    diagnosis: 'Post-operado plastía LCA rodilla izquierda (semana 10)',
    soap: {
      s: 'Sin derrame articular post-sesión anterior. Tolera bicicleta estática 20 min con baja resistencia.',
      o: 'Extensión completa 0°. Flexión pasiva 130°. Sin signo de bostezo ni Lachman. Circunferencia de cuádriceps +1.5 cm vs inicio.',
      a: 'Excelente integración del injerto. Inicio de fase de fuerza pliométrica controlada.',
      p: 'Sentadilla isométrica contra pared, trabajo propioceptivo en plato de Freeman y crioterapia.',
    },
    exercises: [
      'Puente glúteo unilateral (3 series x 10 repeticiones)',
      'Equilibrio monopodal en superficie inestable (45 seg x 3)',
      'Subidas al cajón (step-up) con control de valgo dinámico (3 x 12)',
    ],
  },
  {
    id: 'p3',
    name: 'Valentina Muñoz Lagos',
    rut: '19.782.110-3',
    age: 28,
    phone: '+56 9 7619 4502',
    time: '11:00 - 11:45',
    specialty: 'Columna Lumbar (Oswestry)',
    status: 'CONFIRMADA',
    box: 'Box 2 · Camilla',
    evaStart: 9,
    evaCurrent: 3,
    sessionsUsed: 4,
    sessionsTotal: 8,
    diagnosis: 'Lumbago mecánico subagudo con espasmo paravertebral L4-L5',
    soap: {
      s: 'Comenta que puede sentarse en su trabajo de oficina por bloques de 2 horas sin dolor punzante.',
      o: 'Distancia dedos-suelo 10 cm (mejoría de 15 cm). Test de Lasègue negativo bilateral. Disminución del tono en erectores espinales.',
      a: 'Mejora de movilidad lumbopélvica y reducción de la incapacidad funcional según Oswestry (baja de 38% a 18%).',
      p: 'Terapia manual miofascial lumbar + reeducación del transverso del abdomen con biofeedback.',
    },
    exercises: [
      'Gato-Camello movilidad toracolumbar (2 series x 12)',
      'Bird-Dog con activación de core (3 series x 8 rep por lado)',
      'Respiración diafragmática en decúbito supino (5 minutos)',
    ],
  },
  {
    id: 'p4',
    name: 'Andrés Tapia Reyes',
    rut: '17.204.661-K',
    age: 36,
    phone: '+56 9 8123 9901',
    time: '12:00 - 12:45',
    specialty: 'Terapia Manual Cervical',
    status: 'PENDIENTE PAGO',
    box: 'Box 1 · Fisioterapia',
    evaStart: 6,
    evaCurrent: 2,
    sessionsUsed: 2,
    sessionsTotal: 5,
    diagnosis: 'Cervicobraquialgia derecha postural por teletrabajo',
    soap: {
      s: 'Cefalea tensional disminuyó completamente. Persiste molestia leve en trapecio superior derecho.',
      o: 'Rotación cervical derecha simétrica 75°. Deslizamiento neural mediano positivo leve a 110° abducción.',
      a: 'Respuesta favorable a tracción cervical suave y liberación miofascial suboccipital.',
      p: 'Neurodinamia del nervio mediano + ergonomía en pantalla y envío de pauta preventiva.',
    },
    exercises: [
      'Chin tucks / Doble mentón en posición sedente (3 x 10)',
      'Estiramiento suave de elevador de la escápula (20 seg x 3)',
      'Deslizamiento neurodinámico nervio mediano (2 x 15 oscilaciones)',
    ],
  },
]

export function InteractiveSoftwareDemo() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'pacientes' | 'pagos' | 'agenda' | 'stats'>('inicio')
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showNewPatientModal, setShowNewPatientModal] = useState(false)
  const [showHistorySearchModal, setShowHistorySearchModal] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  // Formulario nuevo paciente
  const [newPatientForm, setNewPatientForm] = useState({
    name: '',
    rut: '',
    phone: '',
    specialty: 'Kinesiología Motora',
    box: 'Box 1 · Fisioterapia',
    diagnosis: '',
  })

  // Toast temporal
  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 4500)
  }

  // Handle escape to close modals or exit fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPatient(null)
        setShowNewPatientModal(false)
        setShowHistorySearchModal(false)
        if (isFullscreen) setIsFullscreen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  // Crear nuevo paciente
  const handleCreatePatient = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPatientForm.name || !newPatientForm.rut) return

    const newP: Patient = {
      id: `p-${Date.now()}`,
      name: newPatientForm.name,
      rut: newPatientForm.rut,
      age: 32,
      phone: newPatientForm.phone || '+56 9 9123 4567',
      time: '13:00 - 13:45',
      specialty: newPatientForm.specialty,
      status: 'CONFIRMADA',
      box: newPatientForm.box,
      evaStart: 7,
      evaCurrent: 5,
      sessionsUsed: 1,
      sessionsTotal: 10,
      diagnosis: newPatientForm.diagnosis || 'Evaluación kinésica de ingreso',
      soap: {
        s: 'Paciente ingresa a primera sesión derivado por traumatólogo. Manifiesta dolor moderado.',
        o: 'Movilidad articular conservada con dolor al final del rango. Sin signos neurológicos de alarma.',
        a: 'Ingreso clínico satisfactorio. Se establecen objetivos funcionales a 4 semanas.',
        p: 'Prescripción de pauta inicial de ejercicios domiciliarios vía WhatsApp y citar a sesión 2.',
      },
      exercises: [
        'Movilidad articular suave (2 series x 10 rep)',
        'Ejercicios respiratorios y descarga postural (5 min)',
      ],
    }

    setPatients([newP, ...patients])
    setShowNewPatientModal(false)
    setNewPatientForm({
      name: '',
      rut: '',
      phone: '',
      specialty: 'Kinesiología Motora',
      box: 'Box 1 · Fisioterapia',
      diagnosis: '',
    })
    triggerToast(`✓ Paciente ${newP.name} creado exitosamente. Se envió el link de admisión QR a su WhatsApp.`)
  }

  // Reset a datos iniciales
  const handleReset = () => {
    setPatients(INITIAL_PATIENTS)
    setActiveTab('inicio')
    setSelectedPatient(null)
    triggerToast('↻ Datos de la demo restablecidos al estado inicial.')
  }

  return (
    <div
      className={
        isFullscreen
          ? 'fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-md p-2 sm:p-4 md:p-6 flex flex-col justify-center items-center overflow-y-auto'
          : 'relative w-full'
      }
    >
      {/* ── Outer Browser Window Frame ── */}
      <div
        className={`w-full max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col overflow-hidden transition-all duration-300 ${
          isFullscreen ? 'h-[95vh] max-h-[900px]' : 'min-h-[640px]'
        }`}
      >
        {/* ── macOS / Browser Bar Header ── */}
        <div className="bg-[#f6f8fb] dark:bg-slate-950/80 px-4 py-2.5 border-b border-slate-200/90 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0">
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm hover:opacity-80 transition-opacity" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm hover:opacity-80 transition-opacity" />
          </div>

          {/* URL Pill */}
          <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono shadow-xs">
            <RiLockLine size={12} className="text-emerald-500 shrink-0" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">app.kenkomed.com</span>
            <span className="text-slate-400 dark:text-slate-600">/panel</span>
          </div>

          {/* Controls Right */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              title="Restablecer datos de prueba"
              className="px-2.5 py-1 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 flex items-center gap-1 transition-colors"
            >
              <RiRefreshLine size={13} />
              <span className="hidden md:inline text-[11px]">Reiniciar</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="px-2.5 py-1 text-xs font-medium text-brand bg-brand/10 hover:bg-brand/15 border border-brand/20 rounded-lg flex items-center gap-1.5 transition-colors"
              title={isFullscreen ? 'Salir de pantalla completa' : 'Ver a pantalla completa'}
            >
              {isFullscreen ? (
                <>
                  <RiFullscreenExitLine size={13} />
                  <span className="text-[11px]">Reducir</span>
                </>
              ) : (
                <>
                  <RiFullscreenLine size={13} />
                  <span className="text-[11px]">Pantalla Completa</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── Main App Layout (Sidebar + Content) ── */}
        <div className="flex-1 flex overflow-hidden bg-[#f4f7fb] dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-[580px]">
          {/* ══ SIDEBAR (Matches User's Screenshot) ══ */}
          <aside className="w-48 sm:w-56 md:w-60 bg-white dark:bg-slate-900 border-r border-slate-200/90 dark:border-slate-800/80 flex flex-col justify-between shrink-0 p-3 sm:p-4 select-none">
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-2 px-2 py-1">
                <Image
                  src="/images/LogoKenko.png"
                  alt="KenkoMed Logo"
                  width={34}
                  height={34}
                  className="rounded-lg object-contain shrink-0"
                />
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#006bb8] dark:text-[#38bdf8]">
                  KenkoMed
                </span>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1.5">
                {/* 1. Inicio */}
                <button
                  onClick={() => setActiveTab('inicio')}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                    activeTab === 'inicio'
                      ? 'bg-[#eaf4fd] dark:bg-sky-950/60 text-[#006bb8] dark:text-sky-300 border border-[#bde0fe] dark:border-sky-800 shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <RiHome5Line size={18} className={activeTab === 'inicio' ? 'text-[#006bb8] dark:text-sky-400' : ''} />
                  <span>Inicio</span>
                </button>

                {/* 2. Mis Pacientes */}
                <button
                  onClick={() => setActiveTab('pacientes')}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    activeTab === 'pacientes'
                      ? 'bg-[#eaf4fd] dark:bg-sky-950/60 text-[#006bb8] dark:text-sky-300 border border-[#bde0fe] dark:border-sky-800 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <RiUserHeartLine size={18} />
                  <span>Mis Pacientes</span>
                </button>

                {/* 3. Pagos & Packs */}
                <button
                  onClick={() => setActiveTab('pagos')}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    activeTab === 'pagos'
                      ? 'bg-[#eaf4fd] dark:bg-sky-950/60 text-[#006bb8] dark:text-sky-300 border border-[#bde0fe] dark:border-sky-800 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <RiBankCardLine size={18} />
                  <span>Pagos & Packs</span>
                </button>

                {/* 4. Agenda */}
                <button
                  onClick={() => setActiveTab('agenda')}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    activeTab === 'agenda'
                      ? 'bg-[#eaf4fd] dark:bg-sky-950/60 text-[#006bb8] dark:text-sky-300 border border-[#bde0fe] dark:border-sky-800 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <RiCalendarEventLine size={18} />
                  <span>Agenda</span>
                </button>

                {/* 5. Estadísticas */}
                <button
                  onClick={() => setActiveTab('stats')}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                    activeTab === 'stats'
                      ? 'bg-[#eaf4fd] dark:bg-sky-950/60 text-[#006bb8] dark:text-sky-300 border border-[#bde0fe] dark:border-sky-800 shadow-xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <RiPulseLine size={18} />
                  <span>Estadísticas</span>
                </button>
              </nav>
            </div>

            {/* Bottom Profile card */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50">
                <div className="w-8 h-8 rounded-full bg-[#006bb8] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                  CA
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">Dr. Arias</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Klgo. Principal</p>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" title="En línea" />
              </div>
            </div>
          </aside>

          {/* ══ MAIN WORKSPACE CONTENT ══ */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
            
            {/* ── TAB 1: INICIO (Dashboard Principal de la Captura) ── */}
            {activeTab === 'inicio' && (
              <div className="space-y-6 animate-fade-in">
                {/* Header Title */}
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Panel de Control
                  </h2>
                  <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <RiMapPinLine size={13} className="text-[#006bb8]" />
                    <span>Sede Central · Boxes 1 & 2 Activos</span>
                  </div>
                </div>

                {/* ── Blue Hero Banner (Exact match to screenshot) ── */}
                <div className="relative rounded-3xl p-6 sm:p-8 overflow-hidden shadow-lg bg-gradient-to-r from-[#0168b3] via-[#01529a] to-[#003c73] text-white">
                  {/* Decorative background glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 right-20 w-60 h-60 bg-blue-300/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="space-y-3 max-w-xl">
                      {/* Pill: EN LÍNEA */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase border border-white/15">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>EN LÍNEA</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">
                        Hola, Dr. Arias
                      </h3>
                      <p className="text-sm sm:text-base text-blue-100/90 font-normal leading-relaxed">
                        Bienvenido al panel de control de KenkoMed
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button
                          onClick={() => setShowNewPatientModal(true)}
                          className="px-5 py-2.5 rounded-full bg-white text-[#006bb8] hover:bg-blue-50 font-bold text-xs sm:text-sm shadow-md hover:shadow-lg flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <RiUserAddLine size={16} />
                          <span>Nuevo Paciente</span>
                        </button>

                        <button
                          onClick={() => setShowHistorySearchModal(true)}
                          className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
                        >
                          <RiFolderUserLine size={16} />
                          <span>Buscar Historial</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Logo Icon Badge */}
                    <div className="hidden md:flex shrink-0 w-24 h-24 rounded-2xl bg-white/95 shadow-xl border border-white/40 p-3 items-center justify-center transform rotate-2 hover:rotate-0 transition-transform">
                      <Image
                        src="/images/LogoKenko.png"
                        alt="KenkoMed Icon"
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Métricas del Centro ── */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                    <RiPulseLine size={16} className="text-[#006bb8] dark:text-sky-400" />
                    <span>Métricas del Centro</span>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {/* 1. Pacientes Activos */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          PACIENTES ACTIVOS
                        </span>
                        <div className="w-8 h-8 rounded-full bg-sky-50 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                          <RiUserHeartLine size={16} />
                        </div>
                      </div>
                      <p className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        1,204
                      </p>
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                        +18 este mes
                      </span>
                    </div>

                    {/* 2. Citas Hoy */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          CITAS HOY
                        </span>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                          <RiCalendarCheckLine size={16} />
                        </div>
                      </div>
                      <p className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        24
                      </p>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        8 realizadas · 16 en espera
                      </span>
                    </div>

                    {/* 3. Citas Esta Semana */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          CITAS ESTA SEMANA
                        </span>
                        <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                          <RiPulseLine size={16} />
                        </div>
                      </div>
                      <p className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        142
                      </p>
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                        95% tasa de asistencia
                      </span>
                    </div>

                    {/* 4. Anamnesis Completadas */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          ANAMNESIS COMPLETADAS
                        </span>
                        <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                          <RiCheckDoubleLine size={16} />
                        </div>
                      </div>
                      <p className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                        89
                      </p>
                      <span className="text-[11px] text-[#006bb8] font-medium">
                        100% recibidas vía QR
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Próximos Agendamientos ── */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                      <RiCalendarEventLine size={16} className="text-[#006bb8]" />
                      <span>Próximos Agendamientos</span>
                    </div>
                    <button
                      onClick={() => setActiveTab('agenda')}
                      className="text-xs font-semibold text-[#006bb8] hover:underline flex items-center gap-1"
                    >
                      <span>Ver calendario</span>
                      <RiArrowRightSLine size={14} />
                    </button>
                  </div>

                  {/* List of Appointment Cards */}
                  <div className="space-y-2.5">
                    {patients.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setSelectedPatient(p)}
                        className="group p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#006bb8]/40 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          {/* Date badge: HOY 28 */}
                          <div className="w-12 h-12 rounded-xl bg-[#006bb8] text-white flex flex-col items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                            <span className="text-[9px] font-bold uppercase tracking-wider opacity-80 leading-none">
                              HOY
                            </span>
                            <span className="font-display font-extrabold text-base leading-tight">28</span>
                          </div>

                          {/* Patient details */}
                          <div className="min-w-0">
                            <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-[#006bb8] transition-colors truncate">
                              {p.name}
                            </h4>
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                              <span className="flex items-center gap-1">
                                <RiTimeLine size={12} />
                                {p.time}
                              </span>
                              <span>•</span>
                              <span className="truncate">{p.specialty}</span>
                              <span className="hidden md:inline">•</span>
                              <span className="hidden md:inline text-[11px] text-slate-400">
                                {p.box}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Status + Chevron */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase border flex items-center gap-1.5 ${
                              p.status === 'CONFIRMADA'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800'
                                : p.status === 'EN ATENCIÓN'
                                ? 'bg-sky-50 text-[#006bb8] border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800'
                                : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                p.status === 'CONFIRMADA'
                                  ? 'bg-emerald-500'
                                  : p.status === 'EN ATENCIÓN'
                                  ? 'bg-sky-500 animate-ping'
                                  : 'bg-amber-500'
                              }`}
                            />
                            {p.status}
                          </span>

                          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white group-hover:bg-[#006bb8]/10 flex items-center justify-center transition-colors">
                            <RiArrowRightSLine size={18} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 2: MIS PACIENTES ── */}
            {activeTab === 'pacientes' && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      Directorio de Pacientes
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Fichas clínicas digitales, historial de evoluciones SOAP y pautas prescritas
                    </p>
                  </div>
                  <button
                    onClick={() => setShowNewPatientModal(true)}
                    className="btn-kenko-primary px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 self-start"
                  >
                    <RiUserAddLine size={15} />
                    <span>Nuevo Paciente</span>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <RiSearchLine size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por Nombre, RUT o Diagnóstico..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30 transition-all"
                  />
                </div>

                {/* Patients Table */}
                <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xs">
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {patients
                      .filter(
                        (p) =>
                          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.rut.includes(searchQuery) ||
                          p.diagnosis.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedPatient(p)}
                          className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 transition-colors"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-sm text-slate-900 dark:text-white">{p.name}</span>
                              <span className="text-xs text-slate-400 font-mono">({p.rut})</span>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-1">
                              <strong>Diagnóstico:</strong> {p.diagnosis}
                            </p>
                          </div>

                          <div className="flex items-center gap-4 text-xs shrink-0">
                            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                              <span className="text-slate-400">Dolor EVA:</span>
                              <strong className="text-emerald-600 dark:text-emerald-400">{p.evaCurrent}/10</strong>
                              <span className="text-[10px] text-slate-400">(era {p.evaStart})</span>
                            </div>

                            <div className="flex items-center gap-1.5 bg-sky-50 dark:bg-sky-950/50 text-[#006bb8] px-2.5 py-1 rounded-lg font-medium">
                              <span>Pack: {p.sessionsUsed}/{p.sessionsTotal} ses.</span>
                            </div>

                            <button className="text-xs font-semibold text-[#006bb8] hover:underline flex items-center gap-1">
                              <span>Ver Ficha</span>
                              <RiArrowRightSLine size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 3: PAGOS & PACKS ── */}
            {activeTab === 'pagos' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Control de Caja & Paquetes de Sesiones
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Registro de cobros diarios (transferencias, tarjetas, efectivo) y saldos pendientes
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500">Recaudación de Hoy</span>
                    <p className="font-display font-bold text-2xl text-emerald-600 dark:text-emerald-400 mt-1">
                      $240.000 CLP
                    </p>
                    <span className="text-[11px] text-slate-400">8 cobros registrados</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500">Packs Activos en Curso</span>
                    <p className="font-display font-bold text-2xl text-[#006bb8] dark:text-sky-400 mt-1">
                      34 paquetes
                    </p>
                    <span className="text-[11px] text-slate-400">Promedio 8.4 sesiones por pack</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500">Pagos Pendientes</span>
                    <p className="font-display font-bold text-2xl text-amber-600 dark:text-amber-400 mt-1">
                      1 paciente
                    </p>
                    <span className="text-[11px] text-amber-600 dark:text-amber-400">Andrés Tapia ($25.000)</span>
                  </div>
                </div>

                {/* Session Packs Table */}
                <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 space-y-4">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Estado de Packs por Paciente</h3>
                  <div className="space-y-3">
                    {patients.map((p) => {
                      const pct = Math.round((p.sessionsUsed / p.sessionsTotal) * 100)
                      return (
                        <div key={p.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="font-bold text-sm text-slate-900 dark:text-white">{p.name}</span>
                            <p className="text-xs text-slate-500">Pack de {p.sessionsTotal} Sesiones · {p.specialty}</p>
                          </div>
                          <div className="flex items-center gap-3 w-full sm:w-64">
                            <div className="flex-1">
                              <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                                <div className="h-full bg-[#006bb8] rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                              <span className="text-[10px] text-slate-400 mt-1 block">
                                {p.sessionsUsed} de {p.sessionsTotal} realizadas ({pct}%)
                              </span>
                            </div>
                            <button
                              onClick={() => triggerToast(`✓ Sesión descontada para ${p.name}. Quedan ${p.sessionsTotal - p.sessionsUsed - 1} sesiones.`)}
                              className="px-2.5 py-1 text-xs font-semibold bg-white dark:bg-slate-800 text-[#006bb8] border border-slate-200 dark:border-slate-700 rounded-lg shrink-0 hover:bg-slate-50"
                            >
                              + Marcar Asistencia
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 4: AGENDA (Multi-Box Simultáneo) ── */}
            {activeTab === 'agenda' && (
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                      Agenda Multi-Box Simultánea
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                      Atención en paralelo con control de sobrecupos garantizado
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#006bb8] bg-[#eaf4fd] px-3 py-1.5 rounded-full border border-[#bde0fe]">
                    Hoy, 28 de Octubre
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Columna Box 1 */}
                  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">Box 1 · Fisioterapia</h3>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Activo</span>
                    </div>
                    <div
                      onClick={() => setSelectedPatient(patients[0])}
                      className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 cursor-pointer hover:shadow-xs transition-shadow"
                    >
                      <span className="text-[11px] font-bold text-[#006bb8]">09:00 - 09:45</span>
                      <p className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">María González</p>
                      <span className="text-xs text-slate-500">Manguito Rotador</span>
                    </div>
                    <div
                      onClick={() => setSelectedPatient(patients[3])}
                      className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 cursor-pointer hover:shadow-xs transition-shadow"
                    >
                      <span className="text-[11px] font-bold text-amber-700">12:00 - 12:45</span>
                      <p className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">Andrés Tapia</p>
                      <span className="text-xs text-slate-500">Terapia Manual Cervical</span>
                    </div>
                  </div>

                  {/* Columna Box 2 */}
                  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">Box 2 · Camilla</h3>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Activo</span>
                    </div>
                    <div
                      onClick={() => setSelectedPatient(patients[2])}
                      className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 cursor-pointer hover:shadow-xs transition-shadow"
                    >
                      <span className="text-[11px] font-bold text-[#006bb8]">11:00 - 11:45</span>
                      <p className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">Valentina Muñoz</p>
                      <span className="text-xs text-slate-500">Columna Lumbar</span>
                    </div>
                  </div>

                  {/* Columna Gimnasio */}
                  <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">Gimnasio Readaptación</h3>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Activo</span>
                    </div>
                    <div
                      onClick={() => setSelectedPatient(patients[1])}
                      className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 cursor-pointer hover:shadow-xs transition-shadow"
                    >
                      <span className="text-[11px] font-bold text-purple-700">10:00 - 10:45</span>
                      <p className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">Carlos Silva</p>
                      <span className="text-xs text-slate-500">Post-Op LCA Rodilla</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── TAB 5: ESTADÍSTICAS ── */}
            {activeTab === 'stats' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    Estadísticas Clínicas & Evolución
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Demuestra con datos el impacto de los tratamientos a tus pacientes y médicos derivadores
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500">Reducción Media del Dolor</span>
                    <p className="font-display font-bold text-3xl text-emerald-600 dark:text-emerald-400 mt-1">-72%</p>
                    <p className="text-xs text-slate-500 mt-1">De EVA 7.8 a EVA 2.1 promedio al alta</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500">Adherencia a Pautas WhatsApp</span>
                    <p className="font-display font-bold text-3xl text-[#006bb8] dark:text-sky-400 mt-1">88.4%</p>
                    <p className="text-xs text-slate-500 mt-1">Pacientes que completan sus ejercicios en casa</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500">Altas Médicas Cumplidas</span>
                    <p className="font-display font-bold text-3xl text-purple-600 dark:text-purple-400 mt-1">94%</p>
                    <p className="text-xs text-slate-500 mt-1">Con informe de alta emitido en 1 clic</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Curva de Recuperación por Sesión</h3>
                  <div className="h-44 w-full flex items-end justify-between gap-2 pt-6 pb-2 px-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl">
                    {[
                      { s: 'Sesión 1', val: 8.5 },
                      { s: 'Sesión 2', val: 7.2 },
                      { s: 'Sesión 3', val: 6.0 },
                      { s: 'Sesión 4', val: 4.8 },
                      { s: 'Sesión 5', val: 3.5 },
                      { s: 'Sesión 6', val: 2.2 },
                      { s: 'Sesión 7', val: 1.5 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <span className="text-[10px] font-bold text-[#006bb8]">{item.val}</span>
                        <div
                          className="w-full max-w-[40px] rounded-t-lg bg-gradient-to-t from-[#006bb8] to-sky-400 transition-all hover:opacity-90"
                          style={{ height: `${(item.val / 10) * 100}%` }}
                        />
                        <span className="text-[10px] text-slate-400 truncate">{item.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>

      {/* ══ MODAL 1: DETALLE DE FICHA CLÍNICA SOAP (Drawer interactivo) ══ */}
      {selectedPatient && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-xs flex items-center justify-end p-0 sm:p-4"
          onClick={() => setSelectedPatient(null)}
        >
          <div
            className="w-full sm:max-w-xl h-full sm:h-auto sm:max-h-[90vh] bg-white dark:bg-slate-900 rounded-none sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border-l sm:border border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-[#0168b3] to-[#01529a] text-white flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-200">
                  Ficha Kinésica Digital · Formato SOAP
                </span>
                <h3 className="font-display font-bold text-xl">{selectedPatient.name}</h3>
                <p className="text-xs text-blue-100">
                  RUT: {selectedPatient.rut} · {selectedPatient.age} años · {selectedPatient.box}
                </p>
              </div>
              <button
                onClick={() => setSelectedPatient(null)}
                className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
              >
                <RiCloseLine size={20} />
              </button>
            </div>

            {/* Content SOAP */}
            <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 space-y-1">
                <span className="font-bold text-[#006bb8] uppercase tracking-wider text-[11px]">Diagnóstico</span>
                <p className="font-medium text-slate-800 dark:text-slate-200">{selectedPatient.diagnosis}</p>
              </div>

              {/* SOAP Blocks */}
              <div className="space-y-3">
                <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#006bb8] text-[10px] font-bold flex items-center justify-center">S</span>
                    Subjetivo (Relato del Paciente)
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">{selectedPatient.soap.s}</p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold flex items-center justify-center">O</span>
                    Objetivo (Evaluación Física y Escalas)
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">{selectedPatient.soap.o}</p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold flex items-center justify-center">A</span>
                    Análisis Clínico
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">{selectedPatient.soap.a}</p>
                </div>

                <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold flex items-center justify-center">P</span>
                    Plan Terapéutico
                  </span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">{selectedPatient.soap.p}</p>
                </div>
              </div>

              {/* Pauta Ejercicios */}
              <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800 space-y-2">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5 text-xs">
                  <RiWhatsappLine size={16} />
                  Pauta de Ejercicios Enviada a WhatsApp
                </span>
                <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
                  {selectedPatient.exercises.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
                <button
                  onClick={() => triggerToast(`✓ Pauta PDF reenviada al WhatsApp de ${selectedPatient.name}`)}
                  className="w-full mt-2 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RiWhatsappLine size={14} />
                  Reenviar Pauta al WhatsApp del Paciente
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══ MODAL 2: NUEVO PACIENTE ══ */}
      {showNewPatientModal && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowNewPatientModal(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Ingreso Rápido de Paciente
              </h3>
              <button
                onClick={() => setShowNewPatientModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <RiCloseLine size={20} />
              </button>
            </div>

            <form onSubmit={handleCreatePatient} className="space-y-3 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Rodrigo Fernández Soto"
                  value={newPatientForm.name}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">RUT *</label>
                  <input
                    type="text"
                    required
                    placeholder="17.842.109-3"
                    value={newPatientForm.rut}
                    onChange={(e) => setNewPatientForm({ ...newPatientForm, rut: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+56 9 8765 4321"
                    value={newPatientForm.phone}
                    onChange={(e) => setNewPatientForm({ ...newPatientForm, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Motivo de Consulta / Diagnóstico
                </label>
                <input
                  type="text"
                  placeholder="Ej. Esguince de tobillo grado II"
                  value={newPatientForm.diagnosis}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, diagnosis: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Box Asignado</label>
                <select
                  value={newPatientForm.box}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, box: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                >
                  <option value="Box 1 · Fisioterapia">Box 1 · Fisioterapia</option>
                  <option value="Box 2 · Camilla">Box 2 · Camilla</option>
                  <option value="Gimnasio · Readaptación">Gimnasio · Readaptación</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNewPatientModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn-kenko-primary px-5 py-2 rounded-xl font-bold shadow-md"
                >
                  Guardar Paciente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══ MODAL 3: BUSCAR HISTORIAL ══ */}
      {showHistorySearchModal && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowHistorySearchModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-150 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                Búsqueda Rápida de Expediente
              </h3>
              <button
                onClick={() => setShowHistorySearchModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                <RiCloseLine size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                autoFocus
                placeholder="Escribe el RUT o nombre del paciente..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
              />

              <div className="text-xs text-slate-400">Pacientes recientes:</div>
              <div className="space-y-1.5">
                {patients.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setShowHistorySearchModal(false)
                      setSelectedPatient(p)
                    }}
                    className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">{p.name}</span>
                      <span className="text-slate-400 ml-2 font-mono text-xs">{p.rut}</span>
                    </div>
                    <span className="text-xs text-[#006bb8] font-semibold">Abrir Ficha</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[150] bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 text-xs sm:text-sm animate-in slide-in-from-bottom-5">
          <RiCheckboxCircleLine size={18} className="text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}
