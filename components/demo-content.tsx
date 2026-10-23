'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
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
  RiCalendarCheckLine,
  RiNotification3Line,
  RiArrowLeftLine,
  RiPrinterLine,
  RiDownload2Line,
  RiFilter3Line,
  RiShareForwardLine,
} from 'react-icons/ri'
import { Dumbbell } from 'lucide-react'

/* ── MOCK DATA CLÍNICA ─────────────────────────────────────── */

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
  doctor: string
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
    doctor: 'Klgo. Cristóbal Arias',
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
    doctor: 'Klgo. Cristóbal Arias',
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
    doctor: 'Klgo. Cristóbal Arias',
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
    doctor: 'Klgo. Cristóbal Arias',
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
  {
    id: 'p5',
    name: 'Francisca Vega Castro',
    rut: '16.541.229-4',
    age: 31,
    phone: '+56 9 7844 1209',
    time: '13:00 - 13:45',
    specialty: 'Traumatología Tobillo',
    status: 'CONFIRMADA',
    box: 'Box 2 · Camilla',
    evaStart: 8,
    evaCurrent: 2,
    sessionsUsed: 5,
    sessionsTotal: 8,
    diagnosis: 'Esguince ligamento peroneoastragalino anterior grado II tobillo derecho',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Logra marcha en terreno plano sin cojera. Edema residual mínimo al final de la jornada laboral.',
      o: 'Cajón anterior levemente positivo sin dolor agudo. Dorsiflexión con rodilla en pared (Weight-Bearing Lunge Test) 11 cm.',
      a: 'Fase de readaptación avanzada. Puntuación LEFS de 68/80.',
      p: 'Trabajo neuromuscular reactivo, salto en minitrampolín y fortalecimiento de peroneos con theraband.',
    },
    exercises: [
      'Fortalecimiento excéntrico de gemelos y sóleo (3 x 15)',
      'Eversión con banda elástica (3 series x 12 rep)',
      'Desplazamientos laterales con banda en tobillos (3 x 10 metros)',
    ],
  },
  {
    id: 'p6',
    name: 'Matías Contreras Soto',
    rut: '18.112.983-5',
    age: 25,
    phone: '+56 9 9411 7720',
    time: '15:00 - 15:45',
    specialty: 'Kinesiología Deportiva',
    status: 'CONFIRMADA',
    box: 'Gimnasio · Readaptación',
    evaStart: 7,
    evaCurrent: 1,
    sessionsUsed: 9,
    sessionsTotal: 10,
    diagnosis: 'Tendinopatía rotuliana insercional rodilla derecha (Jumper’s Knee)',
    doctor: 'Klgo. Cristóbal Arias',
    soap: {
      s: 'Tolera trote continuo 25 minutos y saltos bipodales sin dolor punzante en polo inferior de rótula.',
      o: 'Test de declive 25° sin dolor. Palpación del tendón rotuliano sin hiperalgesia. Test de salto vertical simétrico.',
      a: 'Fase final de descarga y tolerancia a energía elástica. Próximo a alta kinésica deportiva.',
      p: 'Protocolo de salto reactivo (drop jumps) + pliometría y reevaluación final la próxima sesión.',
    },
    exercises: [
      'Sentadilla española isométrica en plano declinado (5 x 45 seg)',
      'Búlgaras con mancuernas énfasis en cuádriceps (3 x 10)',
      'Pliometría de baja intensidad con caída controlada (3 x 8)',
    ],
  },
]

export default function DemoContent() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'pacientes' | 'pagos' | 'agenda' | 'ejercicios' | 'stats'>('inicio')
  const [patients, setPatients] = useState<Patient[]>(INITIAL_PATIENTS)
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showNewPatientModal, setShowNewPatientModal] = useState(false)
  const [showHistorySearchModal, setShowHistorySearchModal] = useState(false)
  const [showDemoRequestModal, setShowDemoRequestModal] = useState(false)
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

  // Handle escape to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPatient(null)
        setShowNewPatientModal(false)
        setShowHistorySearchModal(false)
        setShowDemoRequestModal(false)
        if (isFullscreen) {
          if (document.fullscreenElement) {
            document.exitFullscreen()
          }
          setIsFullscreen(false)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

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
      time: '16:00 - 16:45',
      specialty: newPatientForm.specialty,
      status: 'CONFIRMADA',
      box: newPatientForm.box,
      evaStart: 7,
      evaCurrent: 4,
      sessionsUsed: 1,
      sessionsTotal: 10,
      diagnosis: newPatientForm.diagnosis || 'Evaluación kinésica de ingreso',
      doctor: 'Klgo. Cristóbal Arias',
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
    <div className="min-h-screen h-screen flex flex-col bg-[#f0f4f9] text-slate-800 overflow-hidden font-sans select-none antialiased">
      
      {/* ═════════════════════════════════════════════════════════════
          TOP APPLICATION FRAME BAR (Identidad Software Real)
          ═════════════════════════════════════════════════════════════ */}
      <header className="h-11 bg-[#091e3a] text-white px-3 sm:px-5 flex items-center justify-between gap-3 shrink-0 border-b border-white/10 z-30">
        {/* Left: Window Controls + Software Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 mr-1">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs" />
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-slate-200">
            <RiLockLine size={12} className="text-emerald-400" />
            <span>https://app.kenkomed.com/panel</span>
          </div>

          <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Simulador en Vivo · Datos de Prueba
          </span>
        </div>

        {/* Right: Actions and Exit */}
        <div className="flex items-center gap-2 text-xs">
          <button
            onClick={handleReset}
            title="Restablecer datos de prueba"
            className="px-2.5 py-1 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 flex items-center gap-1.5 transition-colors"
          >
            <RiRefreshLine size={14} />
            <span className="hidden md:inline">Reiniciar</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="px-2.5 py-1 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 flex items-center gap-1.5 transition-colors"
            title="Alternar Pantalla Completa"
          >
            {isFullscreen ? <RiFullscreenExitLine size={14} /> : <RiFullscreenLine size={14} />}
            <span className="hidden md:inline">Pantalla Completa</span>
          </button>

          <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block" />

          <button
            onClick={() => setShowDemoRequestModal(true)}
            className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-[11px] sm:text-xs shadow-md transition-all flex items-center gap-1"
          >
            <RiCalendarCheckLine size={13} />
            <span>Agendar Demo con Asesor</span>
          </button>

          <Link
            href="/"
            className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white border border-white/20 font-semibold text-[11px] sm:text-xs flex items-center gap-1 transition-all"
          >
            <RiArrowLeftLine size={13} />
            <span>Volver a la Web</span>
          </Link>
        </div>
      </header>

      {/* ═════════════════════════════════════════════════════════════
          BODY WORKSPACE: SIDEBAR + MAIN VIEW
          ═════════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* ── SIDEBAR DE NAVEGACIÓN (Idéntica a la Captura) ── */}
        <aside className="w-56 sm:w-60 md:w-64 bg-white border-r border-slate-200/90 flex flex-col justify-between shrink-0 p-4 select-none shadow-xs">
          <div className="space-y-6">
            
            {/* Top Brand */}
            <div className="flex items-center gap-3 px-1 py-1">
              <Image
                src="/images/LogoKenko.png"
                alt="KenkoMed Logo"
                width={38}
                height={38}
                className="rounded-xl object-contain shrink-0 drop-shadow-xs"
              />
              <div>
                <span className="font-display font-black text-xl tracking-tight text-[#006bb8]">
                  KenkoMed
                </span>
                <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  Cloud DSS Clínico
                </span>
              </div>
            </div>

            {/* Sede indicator */}
            <div className="px-3 py-2 rounded-xl bg-[#f4f8fc] border border-[#d9ebf9] text-xs space-y-1">
              <div className="flex items-center justify-between text-[#006bb8] font-bold text-[11px]">
                <span className="flex items-center gap-1">
                  <RiMapPinLine size={12} />
                  Sede Providencia
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-[10px] text-slate-500">Box 1, Box 2 y Gimnasio activos</p>
            </div>

            {/* Nav List */}
            <nav className="space-y-1.5">
              {/* 1. Inicio */}
              <button
                onClick={() => setActiveTab('inicio')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm font-semibold transition-all ${
                  activeTab === 'inicio'
                    ? 'bg-[#eaf4fd] text-[#006bb8] border border-[#bde0fe] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <div className="flex items-center gap-3">
                  <RiHome5Line size={18} className={activeTab === 'inicio' ? 'text-[#006bb8]' : 'text-slate-400'} />
                  <span>Inicio</span>
                </div>
                {activeTab === 'inicio' && <span className="w-1.5 h-1.5 rounded-full bg-[#006bb8]" />}
              </button>

              {/* 2. Mis Pacientes */}
              <button
                onClick={() => setActiveTab('pacientes')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm transition-all ${
                  activeTab === 'pacientes'
                    ? 'bg-[#eaf4fd] text-[#006bb8] border border-[#bde0fe] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <RiUserHeartLine size={18} className={activeTab === 'pacientes' ? 'text-[#006bb8]' : 'text-slate-400'} />
                  <span>Mis Pacientes</span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                  {patients.length}
                </span>
              </button>

              {/* 3. Pagos & Packs */}
              <button
                onClick={() => setActiveTab('pagos')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm transition-all ${
                  activeTab === 'pagos'
                    ? 'bg-[#eaf4fd] text-[#006bb8] border border-[#bde0fe] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <RiBankCardLine size={18} className={activeTab === 'pagos' ? 'text-[#006bb8]' : 'text-slate-400'} />
                  <span>Pagos & Packs</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Al día
                </span>
              </button>

              {/* 4. Agenda */}
              <button
                onClick={() => setActiveTab('agenda')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm transition-all ${
                  activeTab === 'agenda'
                    ? 'bg-[#eaf4fd] text-[#006bb8] border border-[#bde0fe] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <RiCalendarEventLine size={18} className={activeTab === 'agenda' ? 'text-[#006bb8]' : 'text-slate-400'} />
                  <span>Agenda</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-[#006bb8]">
                  24 hoy
                </span>
              </button>

              {/* 5. Pautas de Ejercicios */}
              <button
                onClick={() => setActiveTab('ejercicios')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm transition-all ${
                  activeTab === 'ejercicios'
                    ? 'bg-[#eaf4fd] text-[#006bb8] border border-[#bde0fe] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Dumbbell size={18} className={activeTab === 'ejercicios' ? 'text-[#006bb8]' : 'text-slate-400'} />
                  <span>Pautas WhatsApp</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  1 Clic
                </span>
              </button>

              {/* 6. Estadísticas */}
              <button
                onClick={() => setActiveTab('stats')}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-sm transition-all ${
                  activeTab === 'stats'
                    ? 'bg-[#eaf4fd] text-[#006bb8] border border-[#bde0fe] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 font-medium'
                }`}
              >
                <div className="flex items-center gap-3">
                  <RiPulseLine size={18} className={activeTab === 'stats' ? 'text-[#006bb8]' : 'text-slate-400'} />
                  <span>Estadísticas</span>
                </div>
              </button>
            </nav>
          </div>

          {/* Bottom Doctor Profile Card */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <div className="flex items-center gap-3 px-2 py-2 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#006bb8] to-sky-400 text-white flex items-center justify-center font-bold text-sm shadow-sm shrink-0">
                CA
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-slate-800 truncate">Dr. Arias</p>
                <p className="text-[11px] text-slate-500 truncate">Klgo. Principal</p>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-xs shrink-0" title="En línea" />
            </div>
            <div className="flex items-center justify-between px-2 text-[10px] text-slate-400">
              <span>Ley 21.719 · Activa</span>
              <span>v2.4 Pro</span>
            </div>
          </div>
        </aside>

        {/* ── WORKSPACE CONTENT (Generoso, Grande, Escala Real) ── */}
        <main className="flex-1 overflow-y-auto bg-[#f8fafc] flex flex-col">
          
          {/* Subheader Toolbar */}
          <div className="h-16 bg-white border-b border-slate-200/80 px-6 flex items-center justify-between gap-4 shrink-0 shadow-xs">
            <div className="flex items-center gap-3">
              <h1 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                {activeTab === 'inicio' && 'Panel de Control'}
                {activeTab === 'pacientes' && 'Directorio de Pacientes & Fichas SOAP'}
                {activeTab === 'pagos' && 'Control de Caja & Paquetes de Sesiones'}
                {activeTab === 'agenda' && 'Agenda Multi-Box en Tiempo Real'}
                {activeTab === 'ejercicios' && 'Prescripción de Ejercicios Terapéuticos'}
                {activeTab === 'stats' && 'Métricas Clínicas & Sistema DSS'}
              </h1>
            </div>

            {/* Quick search input + notification bell */}
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block w-72">
                <RiSearchLine size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar paciente o RUT... (Ctrl+K)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200/90 text-xs focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30 transition-all"
                />
              </div>

              <div className="relative p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 cursor-pointer">
                <RiNotification3Line size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <button
                onClick={() => setShowNewPatientModal(true)}
                className="px-4 py-2 rounded-xl bg-[#006bb8] hover:bg-[#005a9c] text-white font-bold text-xs shadow-md flex items-center gap-1.5 transition-all"
              >
                <RiUserAddLine size={16} />
                <span>+ Nuevo Paciente</span>
              </button>
            </div>
          </div>

          {/* Main Tab Panels */}
          <div className="flex-1 p-6 sm:p-8 space-y-8 max-w-7xl w-full mx-auto">
            
            {/* ══════════════════════════════════════════════════════
                1. TAB INICIO: EL DASHBOARD DE LA FOTO DEL USUARIO
                ══════════════════════════════════════════════════════ */}
            {activeTab === 'inicio' && (
              <div className="space-y-8 animate-fade-in">
                
                {/* ── Blue Hero Banner (Exact match to screenshot) ── */}
                <div className="relative rounded-3xl p-8 sm:p-10 overflow-hidden shadow-xl bg-gradient-to-r from-[#006bb8] via-[#01529a] to-[#00386b] text-white">
                  {/* Subtle background glow */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-10 right-28 w-72 h-72 bg-blue-300/15 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                      {/* Pill: EN LÍNEA */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/25 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase border border-white/20">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>EN LÍNEA</span>
                      </div>

                      {/* Title */}
                      <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
                        Hola, Dr. Arias
                      </h2>
                      <p className="text-base sm:text-lg text-blue-100 font-normal leading-relaxed">
                        Bienvenido al panel de control de KenkoMed
                      </p>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3.5 pt-2">
                        <button
                          onClick={() => setShowNewPatientModal(true)}
                          className="px-6 py-3 rounded-full bg-white text-[#006bb8] hover:bg-blue-50 font-bold text-sm shadow-lg hover:shadow-xl flex items-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                          <RiUserAddLine size={18} />
                          <span>Nuevo Paciente</span>
                        </button>

                        <button
                          onClick={() => setShowHistorySearchModal(true)}
                          className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-semibold text-sm flex items-center gap-2 transition-all"
                        >
                          <RiFolderUserLine size={18} />
                          <span>Buscar Historial</span>
                        </button>

                        <button
                          onClick={() => setActiveTab('ejercicios')}
                          className="px-5 py-3 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 backdrop-blur-md font-semibold text-sm flex items-center gap-2 transition-all"
                        >
                          <RiWhatsappLine size={18} />
                          <span>Pautas WhatsApp</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Logo Icon Badge */}
                    <div className="hidden md:flex shrink-0 w-32 h-32 rounded-3xl bg-white shadow-2xl border-4 border-white/60 p-4 items-center justify-center transform hover:scale-105 transition-transform">
                      <Image
                        src="/images/LogoKenko.png"
                        alt="KenkoMed Logo Badge"
                        width={90}
                        height={90}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* ── Métricas del Centro ── */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-base font-bold text-slate-800">
                    <RiPulseLine size={18} className="text-[#006bb8]" />
                    <span>Métricas del Centro</span>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {/* 1. Pacientes Activos */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          PACIENTES ACTIVOS
                        </span>
                        <div className="w-10 h-10 rounded-full bg-sky-50 text-[#006bb8] flex items-center justify-center">
                          <RiUserHeartLine size={20} />
                        </div>
                      </div>
                      <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                        1,204
                      </p>
                      <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">
                        ↑ +18 este mes · 94% retención
                      </span>
                    </div>

                    {/* 2. Citas Hoy */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          CITAS HOY
                        </span>
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                          <RiCalendarCheckLine size={20} />
                        </div>
                      </div>
                      <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                        24
                      </p>
                      <span className="text-xs text-slate-500 font-medium mt-1 inline-block">
                        8 realizadas · 16 en espera
                      </span>
                    </div>

                    {/* 3. Citas Esta Semana */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          CITAS ESTA SEMANA
                        </span>
                        <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                          <RiPulseLine size={20} />
                        </div>
                      </div>
                      <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                        142
                      </p>
                      <span className="text-xs text-emerald-600 font-semibold mt-1 inline-block">
                        95% tasa de asistencia general
                      </span>
                    </div>

                    {/* 4. Anamnesis Completadas */}
                    <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          ANAMNESIS COMPLETADAS
                        </span>
                        <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                          <RiCheckDoubleLine size={20} />
                        </div>
                      </div>
                      <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
                        89
                      </p>
                      <span className="text-xs text-[#006bb8] font-semibold mt-1 inline-block">
                        100% recibidas vía QR previo
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Próximos Agendamientos ── */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-base font-bold text-slate-800">
                      <RiCalendarEventLine size={18} className="text-[#006bb8]" />
                      <span>Próximos Agendamientos</span>
                    </div>
                    <button
                      onClick={() => setActiveTab('agenda')}
                      className="text-sm font-semibold text-[#006bb8] hover:underline flex items-center gap-1"
                    >
                      <span>Ver calendario completo</span>
                      <RiArrowRightSLine size={16} />
                    </button>
                  </div>

                  {/* List of Appointment Cards */}
                  <div className="space-y-3">
                    {patients.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => setSelectedPatient(p)}
                        className="group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#006bb8]/50 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          {/* Date badge: HOY 28 */}
                          <div className="w-14 h-14 rounded-2xl bg-[#006bb8] text-white flex flex-col items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                            <span className="text-[10px] font-bold uppercase tracking-wider opacity-85 leading-none">
                              HOY
                            </span>
                            <span className="font-display font-black text-lg leading-tight">28</span>
                          </div>

                          {/* Patient details */}
                          <div className="min-w-0">
                            <h3 className="font-bold text-base text-slate-900 group-hover:text-[#006bb8] transition-colors truncate">
                              {p.name}
                            </h3>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1">
                              <span className="flex items-center gap-1 font-medium text-slate-700">
                                <RiTimeLine size={13} className="text-[#006bb8]" />
                                {p.time}
                              </span>
                              <span>•</span>
                              <span className="truncate font-medium">{p.specialty}</span>
                              <span>•</span>
                              <span className="text-slate-400">{p.box}</span>
                              <span className="hidden sm:inline">•</span>
                              <span className="hidden sm:inline text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">
                                EVA {p.evaStart} → {p.evaCurrent}/10
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Status + Chevron */}
                        <div className="flex items-center gap-3 shrink-0">
                          <span
                            className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border flex items-center gap-2 ${
                              p.status === 'CONFIRMADA'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : p.status === 'EN ATENCIÓN'
                                ? 'bg-sky-50 text-[#006bb8] border-sky-200 font-extrabold'
                                : 'bg-amber-50 text-amber-700 border-amber-200'
                            }`}
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${
                                p.status === 'CONFIRMADA'
                                  ? 'bg-emerald-500'
                                  : p.status === 'EN ATENCIÓN'
                                  ? 'bg-sky-500 animate-ping'
                                  : 'bg-amber-500'
                              }`}
                            />
                            {p.status}
                          </span>

                          <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-400 group-hover:text-white group-hover:bg-[#006bb8] flex items-center justify-center transition-all">
                            <RiArrowRightSLine size={20} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                2. TAB MIS PACIENTES: DIRECTORIO COMPLETO
                ══════════════════════════════════════════════════════ */}
            {activeTab === 'pacientes' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
                  <div>
                    <h2 className="font-display font-extrabold text-2xl text-slate-900">
                      Directorio de Pacientes
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      1.204 historias clínicas activas con trazabilidad conforme a la Ley N° 20.584 y Ley N° 21.719
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => triggerToast('✓ Exportando informe consolidado en PDF membretado.')}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <RiDownload2Line size={15} />
                      <span>Exportar PDF</span>
                    </button>
                    <button
                      onClick={() => setShowNewPatientModal(true)}
                      className="btn-kenko-primary px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
                    >
                      <RiUserAddLine size={16} />
                      <span>Nuevo Paciente</span>
                    </button>
                  </div>
                </div>

                {/* Filter and search */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="relative flex-1 w-full">
                    <RiSearchLine size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filtrar por Nombre, RUT o Diagnóstico clínico..."
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30 shadow-xs"
                    />
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1">
                    {['Todos (1.204)', 'En Tratamiento (48)', 'Alta Médica (152)', 'Por Reevaluar (12)'].map((filter, i) => (
                      <button
                        key={i}
                        className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                          i === 0
                            ? 'bg-[#006bb8] text-white'
                            : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Patient Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#006bb8]/50 hover:shadow-md cursor-pointer transition-all space-y-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-base text-slate-900">{p.name}</h3>
                              <span className="text-xs text-slate-400 font-mono">({p.rut})</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                              <strong>Diagnóstico:</strong> {p.diagnosis}
                            </p>
                          </div>
                          <span className="text-xs font-bold text-[#006bb8] bg-[#eaf4fd] px-3 py-1 rounded-full border border-[#bde0fe]">
                            {p.sessionsUsed}/{p.sessionsTotal} Sesiones
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100">
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500">Dolor EVA:</span>
                            <span className="font-bold text-emerald-600">{p.evaCurrent}/10</span>
                            <span className="text-[11px] text-slate-400">(Ingreso: {p.evaStart}/10)</span>
                          </div>
                          <span className="text-[#006bb8] font-bold flex items-center gap-1 hover:underline">
                            <span>Ver Ficha SOAP</span>
                            <RiArrowRightSLine size={14} />
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                3. TAB PAGOS & PACKS: CONTROL DE CAJA COMPLETO
                ══════════════════════════════════════════════════════ */}
            {activeTab === 'pagos' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-display font-extrabold text-2xl text-slate-900">
                      Caja Diaria & Paquetes de Sesiones
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Registro de pagos con RUT del paciente para emitir Boleta de Honorarios en el SII
                    </p>
                  </div>
                  <button
                    onClick={() => triggerToast('✓ Módulo de Nuevo Cobro abierto.')}
                    className="btn-kenko-primary px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2"
                  >
                    <RiBankCardLine size={16} />
                    <span>+ Registrar Cobro</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      RECAUDACIÓN DE HOY
                    </span>
                    <p className="font-display font-black text-3xl text-emerald-600 mt-2">
                      $240.000 CLP
                    </p>
                    <span className="text-xs text-slate-500 mt-1 block">
                      6 por Transferencia · 2 por Débito
                    </span>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      PACKS ACTIVOS
                    </span>
                    <p className="font-display font-black text-3xl text-[#006bb8] mt-2">
                      34 paquetes
                    </p>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Promedio 8.4 sesiones por pack
                    </span>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      SALDOS PENDIENTES
                    </span>
                    <p className="font-display font-black text-3xl text-amber-600 mt-2">
                      $25.000 CLP
                    </p>
                    <span className="text-xs text-amber-600 font-semibold mt-1 block">
                      1 paciente (Andrés Tapia)
                    </span>
                  </div>
                </div>

                {/* Session Packs Table */}
                <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
                  <h3 className="font-bold text-base text-slate-900">Control de Sesiones por Paciente</h3>
                  <div className="space-y-3">
                    {patients.map((p) => {
                      const pct = Math.round((p.sessionsUsed / p.sessionsTotal) * 100)
                      return (
                        <div
                          key={p.id}
                          className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div>
                            <span className="font-bold text-base text-slate-900">{p.name}</span>
                            <p className="text-xs text-slate-500">
                              RUT: {p.rut} · Pack de {p.sessionsTotal} Sesiones ({p.specialty})
                            </p>
                          </div>

                          <div className="flex items-center gap-4 w-full sm:w-80">
                            <div className="flex-1">
                              <div className="h-2.5 w-full rounded-full bg-slate-200 overflow-hidden">
                                <div className="h-full bg-[#006bb8] rounded-full" style={{ width: `${pct}%` }} />
                              </div>
                              <span className="text-[11px] font-medium text-slate-500 mt-1 block">
                                {p.sessionsUsed} de {p.sessionsTotal} realizadas ({pct}%)
                              </span>
                            </div>

                            <button
                              onClick={() => triggerToast(`✓ Asistencia registrada para ${p.name}. Quedan ${p.sessionsTotal - p.sessionsUsed - 1} sesiones.`)}
                              className="px-3 py-1.5 text-xs font-bold bg-white text-[#006bb8] border border-slate-300 rounded-xl hover:bg-slate-100 shadow-xs shrink-0"
                            >
                              + Descontar
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                4. TAB AGENDA: MULTI-BOX EN PARALELO
                ══════════════════════════════════════════════════════ */}
            {activeTab === 'agenda' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
                  <div>
                    <h2 className="font-display font-extrabold text-2xl text-slate-900">
                      Agenda Multi-Box Simultánea
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Visualización de boxes en paralelo con bloqueo anti-sobrecupo
                    </p>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-[#eaf4fd] text-[#006bb8] border border-[#bde0fe] font-bold text-xs">
                    Hoy, 28 de Octubre
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Box 1 */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h3 className="font-bold text-base text-slate-900">Box 1 · Fisioterapia</h3>
                        <p className="text-xs text-slate-400">Camilla 1 + Ultrasonido</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                        En Operación
                      </span>
                    </div>

                    <div
                      onClick={() => setSelectedPatient(patients[0])}
                      className="p-4 rounded-2xl bg-sky-50 border border-sky-200 cursor-pointer hover:shadow-md transition-all space-y-1"
                    >
                      <span className="text-xs font-bold text-[#006bb8]">09:00 - 09:45</span>
                      <p className="font-bold text-sm text-slate-900">María González</p>
                      <p className="text-xs text-slate-500">Manguito Rotador Derecho</p>
                    </div>

                    <div
                      onClick={() => setSelectedPatient(patients[3])}
                      className="p-4 rounded-2xl bg-amber-50 border border-amber-200 cursor-pointer hover:shadow-md transition-all space-y-1"
                    >
                      <span className="text-xs font-bold text-amber-700">12:00 - 12:45</span>
                      <p className="font-bold text-sm text-slate-900">Andrés Tapia</p>
                      <p className="text-xs text-slate-500">Terapia Manual Cervical</p>
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h3 className="font-bold text-base text-slate-900">Box 2 · Camilla</h3>
                        <p className="text-xs text-slate-400">Camilla 2 + Magnetoterapia</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                        En Operación
                      </span>
                    </div>

                    <div
                      onClick={() => setSelectedPatient(patients[2])}
                      className="p-4 rounded-2xl bg-sky-50 border border-sky-200 cursor-pointer hover:shadow-md transition-all space-y-1"
                    >
                      <span className="text-xs font-bold text-[#006bb8]">11:00 - 11:45</span>
                      <p className="font-bold text-sm text-slate-900">Valentina Muñoz</p>
                      <p className="text-xs text-slate-500">Columna Lumbar</p>
                    </div>

                    <div
                      onClick={() => setSelectedPatient(patients[4])}
                      className="p-4 rounded-2xl bg-sky-50 border border-sky-200 cursor-pointer hover:shadow-md transition-all space-y-1"
                    >
                      <span className="text-xs font-bold text-[#006bb8]">13:00 - 13:45</span>
                      <p className="font-bold text-sm text-slate-900">Francisca Vega</p>
                      <p className="text-xs text-slate-500">Esguince Tobillo Grado II</p>
                    </div>
                  </div>

                  {/* Gimnasio */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <h3 className="font-bold text-base text-slate-900">Gimnasio Terapéutico</h3>
                        <p className="text-xs text-slate-400">Poles, Mancuernas y Pliometría</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                        En Operación
                      </span>
                    </div>

                    <div
                      onClick={() => setSelectedPatient(patients[1])}
                      className="p-4 rounded-2xl bg-purple-50 border border-purple-200 cursor-pointer hover:shadow-md transition-all space-y-1"
                    >
                      <span className="text-xs font-bold text-purple-700">10:00 - 10:45</span>
                      <p className="font-bold text-sm text-slate-900">Carlos Silva</p>
                      <p className="text-xs text-slate-500">Reconstrucción LCA (Semana 10)</p>
                    </div>

                    <div
                      onClick={() => setSelectedPatient(patients[5])}
                      className="p-4 rounded-2xl bg-purple-50 border border-purple-200 cursor-pointer hover:shadow-md transition-all space-y-1"
                    >
                      <span className="text-xs font-bold text-purple-700">15:00 - 15:45</span>
                      <p className="font-bold text-sm text-slate-900">Matías Contreras</p>
                      <p className="text-xs text-slate-500">Tendinopatía Rotuliana</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                5. TAB PAUTAS DE EJERCICIOS WHATSAPP
                ══════════════════════════════════════════════════════ */}
            {activeTab === 'ejercicios' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-display font-extrabold text-2xl text-slate-900">
                      Pautas de Ejercicios Terapéuticos
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Catálogo anatómico curado con despacho automático en PDF a WhatsApp y correo en 1 clic
                    </p>
                  </div>
                  <button
                    onClick={() => triggerToast('✓ Pauta en blanco lista para prescribir.')}
                    className="btn-kenko-primary px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2"
                  >
                    <Dumbbell size={16} />
                    <span>+ Nueva Pauta</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      region: 'Hombro & Cintura Escapular',
                      count: '42 ejercicios',
                      desc: 'Rotadores externos, elevador escápula, estabilización glenohumeral.',
                      ejemplos: ['Rotación con banda azul', 'Retracción en pared', 'Pendulares de Codman'],
                    },
                    {
                      region: 'Columna Lumbar & Pelvis',
                      count: '38 ejercicios',
                      desc: 'Control motor transverso abdominal, bird-dog, gato-camello.',
                      ejemplos: ['Bird-Dog cruzado', 'Puente glúteo isométrico', 'Descompresión pélvica'],
                    },
                    {
                      region: 'Rodilla & Miembro Inferior',
                      count: '48 ejercicios',
                      desc: 'Cuádriceps excéntrico, estabilidad monopodal, descarga rotuliana.',
                      ejemplos: ['Sentadilla española', 'Step-up excéntrico', 'Propiocepción en bosu'],
                    },
                  ].map((cat, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200/80 space-y-4 shadow-xs">
                      <div>
                        <span className="text-xs font-bold text-[#006bb8] uppercase tracking-wider">{cat.count}</span>
                        <h3 className="font-bold text-lg text-slate-900 mt-1">{cat.region}</h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{cat.desc}</p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <span className="text-[11px] font-bold text-slate-700 uppercase">Ejemplos Rápidos:</span>
                        <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                          {cat.ejemplos.map((ex, i) => (
                            <li key={i}>{ex}</li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => triggerToast(`✓ Pauta de ${cat.region} enviada al WhatsApp del paciente.`)}
                        className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                      >
                        <RiWhatsappLine size={16} />
                        <span>Enviar al WhatsApp del Paciente</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ══════════════════════════════════════════════════════
                6. TAB ESTADÍSTICAS & DSS
                ══════════════════════════════════════════════════════ */}
            {activeTab === 'stats' && (
              <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs">
                  <h2 className="font-display font-extrabold text-2xl text-slate-900">
                    Estadísticas Clínicas & Decision Support System (DSS)
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Métricas objetivas para respaldar tus resultados ante médicos derivadores e Isapres
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      REDUCCIÓN MEDIA DEL DOLOR
                    </span>
                    <p className="font-display font-black text-4xl text-emerald-600 mt-2">-72%</p>
                    <p className="text-xs text-slate-500 mt-1">
                      De EVA 7.8 inicial a EVA 2.1 al alta promedio
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      ADHERENCIA A PAUTAS WHATSAPP
                    </span>
                    <p className="font-display font-black text-4xl text-[#006bb8] mt-2">88.4%</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Pacientes que completan sus ejercicios en casa
                    </p>
                  </div>

                  <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      ALTAS MÉDICAS CUMPLIDAS
                    </span>
                    <p className="font-display font-black text-4xl text-purple-600 mt-2">94%</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Con informe de alta emitido en 1 clic
                    </p>
                  </div>
                </div>

                {/* Gráfico Curva de Recuperación */}
                <div className="p-8 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-base text-slate-900">
                        Curva de Dolor EVA por Sesión de Tratamiento
                      </h3>
                      <p className="text-xs text-slate-400">
                        Promedio ponderado en 1.204 pacientes de la sede
                      </p>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      Evolución Favorable Constante
                    </span>
                  </div>

                  <div className="h-56 w-full flex items-end justify-between gap-3 pt-8 pb-3 px-6 bg-slate-50 rounded-2xl border border-slate-100">
                    {[
                      { s: 'Sesión 1', val: 8.5, label: '8.5/10' },
                      { s: 'Sesión 2', val: 7.2, label: '7.2/10' },
                      { s: 'Sesión 3', val: 5.9, label: '5.9/10' },
                      { s: 'Sesión 4', val: 4.6, label: '4.6/10' },
                      { s: 'Sesión 5', val: 3.4, label: '3.4/10' },
                      { s: 'Sesión 6', val: 2.3, label: '2.3/10' },
                      { s: 'Alta', val: 1.4, label: '1.4/10' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                        <span className="text-xs font-bold text-[#006bb8] opacity-80 group-hover:opacity-100">
                          {item.label}
                        </span>
                        <div
                          className="w-full max-w-[56px] rounded-t-xl bg-gradient-to-t from-[#006bb8] to-sky-400 transition-all group-hover:brightness-110 shadow-xs"
                          style={{ height: `${(item.val / 10) * 100}%` }}
                        />
                        <span className="text-xs font-medium text-slate-500 mt-1 truncate">{item.s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>

      {/* ═════════════════════════════════════════════════════════════
          MODAL 1: FICHA CLÍNICA SOAP (Drawer Lateral Interactivo)
          ═════════════════════════════════════════════════════════════ */}
      {selectedPatient && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-xs flex items-center justify-end p-0 sm:p-4"
          onClick={() => setSelectedPatient(null)}
        >
          <div
            className="w-full sm:max-w-2xl h-full sm:h-auto sm:max-h-[92vh] bg-white rounded-none sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border-l sm:border border-slate-200 animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-[#006bb8] to-[#01529a] text-white flex items-start justify-between gap-4 shrink-0">
              <div>
                <span className="text-[11px] uppercase font-bold tracking-wider text-sky-200">
                  Ficha Kinésica Oficial · Formato SOAP
                </span>
                <h3 className="font-display font-extrabold text-2xl mt-0.5">{selectedPatient.name}</h3>
                <p className="text-xs text-blue-100 mt-1">
                  RUT: {selectedPatient.rut} · {selectedPatient.age} años · {selectedPatient.box} · {selectedPatient.doctor}
                </p>
              </div>
              <button
                onClick={() => setSelectedPatient(null)}
                className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            {/* Content SOAP */}
            <div className="p-6 overflow-y-auto space-y-5 text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-[#006bb8] uppercase tracking-wider text-xs">
                  Diagnóstico Kinésico Principal
                </span>
                <p className="font-semibold text-slate-800 text-base">{selectedPatient.diagnosis}</p>
              </div>

              {/* SOAP Blocks */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-[#006bb8] text-xs font-bold flex items-center justify-center">
                      S
                    </span>
                    Subjetivo (Anamnesis y Relato del Paciente)
                  </span>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm pl-8">
                    {selectedPatient.soap.s}
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                      O
                    </span>
                    Objetivo (Evaluación Física, Goniometría y Escalas)
                  </span>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm pl-8">
                    {selectedPatient.soap.o}
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs font-bold flex items-center justify-center">
                      A
                    </span>
                    Análisis Clínico & Progresión
                  </span>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm pl-8">
                    {selectedPatient.soap.a}
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">
                      P
                    </span>
                    Plan Terapéutico & Próxima Sesión
                  </span>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm pl-8">
                    {selectedPatient.soap.p}
                  </p>
                </div>
              </div>

              {/* Pauta de Ejercicios */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
                <span className="font-bold text-emerald-900 flex items-center gap-2 text-sm">
                  <RiWhatsappLine size={18} className="text-emerald-600" />
                  Pauta de Ejercicios Enviada a WhatsApp
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside">
                  {selectedPatient.exercises.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
                <button
                  onClick={() => triggerToast(`✓ Pauta PDF reenviada exitosamente al WhatsApp de ${selectedPatient.name}`)}
                  className="w-full mt-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <RiWhatsappLine size={16} />
                  <span>Reenviar Pauta al WhatsApp del Paciente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          MODAL 2: NUEVO PACIENTE
          ═════════════════════════════════════════════════════════════ */}
      {showNewPatientModal && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowNewPatientModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-7 border border-slate-200 animate-in zoom-in-95 duration-150 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  Ingreso de Nuevo Paciente
                </h3>
                <p className="text-xs text-slate-500">
                  Se generará su ficha digital y se enviará el link de admisión QR a su WhatsApp
                </p>
              </div>
              <button
                onClick={() => setShowNewPatientModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            <form onSubmit={handleCreatePatient} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Nombre Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Rodrigo Fernández Soto"
                  value={newPatientForm.name}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">RUT Chileno *</label>
                  <input
                    type="text"
                    required
                    placeholder="17.842.109-3"
                    value={newPatientForm.rut}
                    onChange={(e) => setNewPatientForm({ ...newPatientForm, rut: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="+56 9 8765 4321"
                    value={newPatientForm.phone}
                    onChange={(e) => setNewPatientForm({ ...newPatientForm, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Motivo de Consulta / Diagnóstico
                </label>
                <input
                  type="text"
                  placeholder="Ej. Esguince de tobillo grado II"
                  value={newPatientForm.diagnosis}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, diagnosis: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Box Asignado</label>
                <select
                  value={newPatientForm.box}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, box: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30"
                >
                  <option value="Box 1 · Fisioterapia">Box 1 · Fisioterapia</option>
                  <option value="Box 2 · Camilla">Box 2 · Camilla</option>
                  <option value="Gimnasio · Readaptación">Gimnasio · Readaptación</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowNewPatientModal(false)}
                  className="px-5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn-kenko-primary px-6 py-2.5 rounded-xl font-bold shadow-md"
                >
                  Guardar Paciente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          MODAL 3: BUSCAR HISTORIAL RÁPIDO
          ═════════════════════════════════════════════════════════════ */}
      {showHistorySearchModal && (
        <div
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowHistorySearchModal(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-7 border border-slate-200 animate-in zoom-in-95 duration-150 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-display font-extrabold text-xl text-slate-900">
                Búsqueda Rápida de Expediente
              </h3>
              <button
                onClick={() => setShowHistorySearchModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                autoFocus
                placeholder="Escribe el RUT o nombre del paciente..."
                className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#006bb8]/30 shadow-xs"
              />

              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Pacientes recientes:
              </div>
              <div className="space-y-2">
                {patients.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setShowHistorySearchModal(false)
                      setSelectedPatient(p)
                    }}
                    className="p-3.5 rounded-2xl hover:bg-slate-100 cursor-pointer flex items-center justify-between transition-colors border border-transparent hover:border-slate-200"
                  >
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{p.name}</span>
                      <span className="text-slate-400 ml-2 font-mono text-xs">{p.rut}</span>
                      <p className="text-xs text-slate-500 mt-0.5">{p.diagnosis}</p>
                    </div>
                    <span className="text-xs text-[#006bb8] font-bold">Abrir Ficha →</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═════════════════════════════════════════════════════════════
          MODAL 4: AGENDAR DEMO CON ASESOR
          ═════════════════════════════════════════════════════════════ */}
      {showDemoRequestModal && (
        <div
          className="fixed inset-0 z-[130] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowDemoRequestModal(false)}
        >
          <div
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-7 border border-slate-200 animate-in zoom-in-95 duration-150 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  Agendar Demostración Guiada
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Un especialista de KenkoMed te guiará paso a paso en vivo
                </p>
              </div>
              <button
                onClick={() => setShowDemoRequestModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <p className="text-slate-600 leading-relaxed">
                ¿Te gustaría probar KenkoMed en tu propia consulta o clínica con tus datos reales? Te ofrecemos una demo guiada de 20 minutos por Google Meet y 3 días de prueba completa sin compromiso.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="font-bold text-emerald-800 text-xs flex items-center gap-1.5">
                  <RiShieldCheckLine size={16} />
                  Garantía KenkoMed:
                </span>
                <ul className="text-xs text-emerald-900 space-y-1 list-disc list-inside">
                  <li>3 días de acceso libre completo a la plataforma</li>
                  <li>Migración gratuita de tus datos desde Excel u otro software</li>
                  <li>Soporte directo por WhatsApp con nuestro equipo</li>
                </ul>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowDemoRequestModal(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cerrar
                </button>
                <Link
                  href="/precios"
                  className="btn-kenko-primary px-5 py-2.5 rounded-xl font-bold shadow-md flex items-center gap-2"
                >
                  <RiCalendarCheckLine size={16} />
                  <span>Ver Planes & Precios</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[150] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 text-xs sm:text-sm animate-in slide-in-from-bottom-5">
          <RiCheckboxCircleLine size={20} className="text-emerald-400 shrink-0" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

    </div>
  )
}
