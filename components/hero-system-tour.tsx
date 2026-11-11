'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Pause,
  Play,
  RotateCcw,
  Check,
  CheckCheck,
  CalendarCheck,
  QrCode,
  FileText,
  Dumbbell,
  ShieldCheck,
  Activity,
  Send,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/* ══════════════════════════════════════════════════════════════
   RECORRIDO INTERACTIVO DEL SISTEMA (estilo video, 100% HTML/CSS)
   6 escenas que se reproducen solas, con cursor animado, barra de
   progreso por escena, pausa y navegación manual. Se pausa al pasar
   el mouse y arranca detenido si el usuario prefiere menos movimiento.
   Los datos mostrados son de ejemplo (pacientes ficticios).
   ══════════════════════════════════════════════════════════════ */

const SCENE_SECONDS = 7

interface TourScene {
  id: string
  tab: string
  caption: string
}

const SCENES: TourScene[] = [
  {
    id: 'agenda',
    tab: 'Agenda',
    caption: 'Tus pacientes reservan online y la agenda se actualiza sola, sin cruces de box.',
  },
  {
    id: 'admision',
    tab: 'Admisión',
    caption: 'El paciente completa su anamnesis de 14 páginas desde el celular, antes de llegar.',
  },
  {
    id: 'escalas',
    tab: 'Escalas',
    caption: 'Las 13 escalas validadas se calculan automáticamente al completar la evaluación.',
  },
  {
    id: 'dss',
    tab: 'DSS',
    caption: 'El motor DSS cruza anamnesis y escalas para destacar alertas clínicas.',
  },
  {
    id: 'pauta',
    tab: 'Pauta',
    caption: 'Armas la pauta de ejercicios y llega en PDF al WhatsApp del paciente en 1 clic.',
  },
  {
    id: 'cobros',
    tab: 'Cobros',
    caption: 'Pagos, packs e informe de alta con códigos FONASA, listos para Isapre y médicos.',
  },
]

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4, ease: 'easeOut' as const },
})

/* ── Cursor animado + ripple de clic ── */
function Cursor({
  x,
  y,
  delay,
  duration = 1.1,
}: {
  x: number[]
  y: number[]
  delay: number
  duration?: number
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 z-30"
      initial={{ opacity: 0, x: x[0], y: y[0] }}
      animate={{ opacity: [0, 1, 1, 1], x, y }}
      transition={{ delay, duration, ease: 'easeInOut' }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" className="drop-shadow-md">
        <path
          d="M4 2l16 9-7 2-3 7L4 2z"
          fill="#062b47"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <motion.span
        className="absolute -left-2 -top-2 h-5 w-5 rounded-full border-2 border-[#0071c1]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5], opacity: [0.7, 0] }}
        transition={{ delay: delay + duration, duration: 0.5 }}
      />
    </motion.div>
  )
}

function SceneShell({ children }: { children: React.ReactNode }) {
  return <div className="relative h-full w-full overflow-hidden px-3.5 pb-24 pt-3">{children}</div>
}

function SceneTitle({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="mb-2.5 flex items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0071c1]/10 text-[#0071c1]">
        <Icon size={13} aria-hidden="true" />
      </span>
      <p className="font-display text-[13px] font-extrabold tracking-tight text-slate-900">{children}</p>
    </div>
  )
}

/* ── Escena 1 · Agenda con reserva online ── */
function AgendaScene() {
  const rows = [
    { h: '09:00', name: 'Esguince tobillo', who: 'Andrés M. · Box 2', tone: 'emerald' as const },
    { h: '11:00', name: 'Lumbalgia aguda', who: 'Sofía V. · Ses. 3/10', tone: 'emerald' as const },
    { h: '12:00', name: 'Post-op hombro', who: 'Matías P. · Box 2', tone: 'brand' as const },
  ]
  const tone = {
    emerald: 'border-[#16a996] bg-[#16a996]/10 text-[#063a34]',
    brand: 'border-[#0071c1] bg-[#0071c1]/10 text-[#062b47]',
  }
  return (
    <SceneShell>
      <SceneTitle icon={CalendarCheck}>Agenda · Lun 12</SceneTitle>

      <motion.div
        {...{
          initial: { opacity: 0, y: -14 },
          animate: { opacity: [0, 1, 1, 0], y: [-14, 0, 0, -8] },
          transition: { delay: 1.2, duration: 2.6, times: [0, 0.12, 0.8, 1] },
        }}
        className="absolute inset-x-3.5 top-9 z-20 flex items-center gap-2 rounded-xl border border-[#16a996]/30 bg-white px-3 py-2 shadow-lg"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16a996] text-white">
          <CalendarCheck size={12} aria-hidden="true" />
        </span>
        <div className="leading-tight">
          <p className="text-[11px] font-extrabold text-slate-900">Nueva reserva online</p>
          <p className="text-[10px] text-slate-500">Camila R. · portal público</p>
        </div>
      </motion.div>

      <div className="space-y-2">
        {rows.slice(0, 1).map((r, i) => (
          <motion.div
            key={r.h}
            {...rise(0.15 + i * 0.1)}
            className="grid grid-cols-[2.4rem_1fr] items-center gap-2"
          >
            <span className="font-mono text-[10px] text-slate-400">{r.h}</span>
            <div className={cn('rounded-lg border-l-[3px] px-2.5 py-1.5', tone[r.tone])}>
              <p className="text-[11px] font-bold leading-tight">{r.name}</p>
              <p className="text-[10px] opacity-75">{r.who}</p>
            </div>
          </motion.div>
        ))}

        {/* Slot 10:00: pasa de libre a reservado */}
        <motion.div {...rise(0.25)} className="grid grid-cols-[2.4rem_1fr] items-center gap-2">
          <span className="font-mono text-[10px] text-slate-400">10:00</span>
          <div className="relative h-[46px]">
            <motion.div
              className="absolute inset-0 flex items-center rounded-lg border border-dashed border-slate-300 px-2.5 text-[10px] font-medium text-slate-400"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 1.7, duration: 0.3 }}
            >
              Hora disponible · Box 1
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-lg border-l-[3px] border-[#0071c1] bg-[#0071c1]/10 px-2.5 py-1.5 text-[#062b47]"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, duration: 0.4 }}
            >
              <p className="text-[11px] font-bold leading-tight">Evaluación kinésica inicial</p>
              <p className="text-[10px] text-[#0071c1]">Camila R. · Box 1 · Confirmada</p>
            </motion.div>
          </div>
        </motion.div>

        {rows.slice(1).map((r, i) => (
          <motion.div
            key={r.h}
            {...rise(0.35 + i * 0.1)}
            className="grid grid-cols-[2.4rem_1fr] items-center gap-2"
          >
            <span className="font-mono text-[10px] text-slate-400">{r.h}</span>
            <div className={cn('rounded-lg border-l-[3px] px-2.5 py-1.5', tone[r.tone])}>
              <p className="text-[11px] font-bold leading-tight">{r.name}</p>
              <p className="text-[10px] opacity-75">{r.who}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...rise(3.2)}
        className="mt-3 flex items-center gap-2 rounded-xl border border-[#16a996]/25 bg-[#16a996]/[0.08] px-3 py-2"
      >
        <CheckCheck size={14} className="text-[#0e7b6d]" aria-hidden="true" />
        <p className="text-[10px] font-semibold text-slate-700">
          Confirmación enviada por WhatsApp · sin cruces de box
        </p>
      </motion.div>
    </SceneShell>
  )
}

/* ── Escena 2 · Admisión remota por QR ── */
function QrScene() {
  const size = 9
  const cells = Array.from({ length: size * size }, (_, k) => {
    const i = Math.floor(k / size)
    const j = k % size
    const finder =
      (i < 3 && j < 3) || (i < 3 && j >= size - 3) || (i >= size - 3 && j < 3)
    return finder || (i * 7 + j * 13 + i * j) % 3 !== 0
  })
  const steps = ['Antecedentes y comorbilidades', 'Mapa corporal del dolor', 'Banderas rojas y objetivos']
  return (
    <SceneShell>
      <SceneTitle icon={QrCode}>Admisión remota por QR</SceneTitle>

      <div className="flex items-center gap-3">
        <motion.div
          {...rise(0.1)}
          className="relative shrink-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm"
        >
          <div className="grid grid-cols-9 gap-[2px]">
            {cells.map((on, k) => (
              <span
                key={k}
                className={cn('h-[9px] w-[9px] rounded-[1.5px]', on ? 'bg-[#062b47]' : 'bg-transparent')}
              />
            ))}
          </div>
          <motion.span
            aria-hidden="true"
            className="absolute inset-x-1.5 top-2 h-[2px] rounded-full bg-[#16a996] shadow-[0_0_8px_#16a996]"
            animate={{ y: [0, 92, 0] }}
            transition={{ delay: 0.6, duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div {...rise(0.3)} className="leading-tight">
          <p className="text-[11px] font-extrabold text-slate-900">Enlace de un solo uso</p>
          <p className="mt-0.5 text-[10px] text-slate-500">Enviado por WhatsApp a Camila R.</p>
          <p className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#0071c1]/10 px-2 py-0.5 text-[9px] font-bold text-[#0071c1]">
            <QrCode size={9} aria-hidden="true" /> Anamnesis · 14 páginas
          </p>
        </motion.div>
      </div>

      <motion.div {...rise(1.4)} className="mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold text-slate-700">Completando en su celular…</span>
          <span className="font-extrabold text-[#0071c1]">14 / 14</span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#0071c1] to-[#16a996]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.6, duration: 2.6, ease: 'easeInOut' }}
          />
        </div>
        <ul className="mt-2.5 space-y-1.5">
          {steps.map((s, i) => (
            <motion.li
              key={s}
              {...rise(2.2 + i * 0.7)}
              className="flex items-center gap-2 text-[10px] font-medium text-slate-700"
            >
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#16a996] text-white">
                <Check size={9} strokeWidth={3} aria-hidden="true" />
              </span>
              {s}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        {...rise(4.6)}
        className="mt-3 flex items-center justify-between rounded-xl bg-[#062b47] px-3 py-2 text-white"
      >
        <span className="text-[10px] font-bold">Recibido en la ficha clínica</span>
        <span className="rounded-full bg-[#16a996] px-2 py-0.5 text-[9px] font-extrabold">Listo</span>
      </motion.div>
    </SceneShell>
  )
}

/* ── Escena 3 · Escalas clínicas ── */
function ScaleBar({
  label,
  value,
  pct,
  delay,
  color,
}: {
  label: string
  value: string
  pct: number
  delay: number
  color: string
}) {
  return (
    <motion.div {...rise(delay)} className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
      <div className="flex items-center justify-between text-[10px]">
        <span className="font-bold text-slate-700">{label}</span>
        <motion.span
          className="font-extrabold text-slate-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 1.1 }}
        >
          {value}
        </motion.span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: '0%' }}
          animate={{ width: `${pct}%` }}
          transition={{ delay: delay + 0.2, duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

function ScalesScene() {
  return (
    <SceneShell>
      <SceneTitle icon={Activity}>Escalas validadas</SceneTitle>
      <div className="space-y-2">
        <ScaleBar label="EVA · dolor actual" value="6 / 10" pct={60} delay={0.2} color="#0071c1" />
        <ScaleBar label="Oswestry · discapacidad lumbar" value="28% · moderada" pct={28} delay={1.1} color="#16a996" />
        <ScaleBar label="LEFS · función extremidad inferior" value="64 / 80" pct={80} delay={2.0} color="#0071c1" />
      </div>
      <motion.p {...rise(3.4)} className="mt-3 text-center text-[10px] font-semibold text-slate-500">
        13 escalas con puntaje e interpretación automática
      </motion.p>
    </SceneShell>
  )
}

/* ── Escena 4 · Motor DSS ── */
function DssScene() {
  return (
    <SceneShell>
      <SceneTitle icon={ShieldCheck}>Motor de soporte a la decisión</SceneTitle>

      <motion.div
        className="absolute inset-x-3.5 top-14 z-10 flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white py-5 shadow-sm"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0], pointerEvents: ['auto', 'auto', 'none'] }}
        transition={{ duration: 1.8, times: [0, 0.75, 1] }}
      >
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              className="h-2 w-2 rounded-full bg-[#0071c1]"
              animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
              transition={{ duration: 0.7, repeat: 2, delay: d * 0.12 }}
            />
          ))}
        </div>
        <p className="text-[10px] font-bold text-slate-600">Cruzando anamnesis + escalas…</p>
      </motion.div>

      <div className="space-y-2">
        <motion.div
          {...rise(1.9)}
          className="flex items-center gap-2.5 rounded-xl border border-[#16a996]/30 bg-[#16a996]/[0.08] p-3"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16a996] text-white">
            <Check size={13} strokeWidth={3} aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-[11px] font-extrabold text-slate-900">Sin banderas rojas</p>
            <p className="text-[10px] text-slate-600">Apto para carga progresiva</p>
          </div>
        </motion.div>

        <motion.div
          {...rise(2.7)}
          className="rounded-xl border border-[#0071c1]/30 bg-white p-3 shadow-sm"
        >
          <p className="text-[9px] font-bold uppercase tracking-wider text-[#0071c1]">● Alerta clínica</p>
          <p className="mt-0.5 text-[11px] font-extrabold text-slate-900">Bandera amarilla: kinesiofobia alta</p>
          <span className="mt-1.5 inline-block rounded-md bg-[#0071c1]/10 px-2 py-0.5 text-[9px] font-bold text-[#0071c1]">
            Sugerencia: educación en dolor
          </span>
        </motion.div>

        <motion.div
          {...rise(3.5)}
          className="rounded-xl border border-slate-200 bg-white p-3 text-[10px] text-slate-600"
        >
          <span className="font-bold text-slate-800">Patrón conductual: </span>
          evitativo · el algoritmo basado en reglas apoya tu juicio clínico, no lo reemplaza.
        </motion.div>
      </div>
    </SceneShell>
  )
}

/* ── Escena 5 · Pauta PDF a WhatsApp ── */
function PautaScene() {
  const exercises = [
    { n: 'Puente de glúteo', d: '3 × 12 · carga corporal' },
    { n: 'Rotación de tronco', d: '3 × 10 por lado' },
    { n: 'Estiramiento de isquiosurales', d: '3 × 30 s' },
  ]
  return (
    <SceneShell>
      <SceneTitle icon={Dumbbell}>Pauta de ejercicios</SceneTitle>

      <ul className="space-y-1.5">
        {exercises.map((e, i) => (
          <motion.li
            key={e.n}
            {...rise(0.15 + i * 0.25)}
            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-xs"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#0071c1]/10 text-[10px] font-extrabold text-[#0071c1]">
              {i + 1}
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-bold text-slate-900">{e.n}</p>
              <p className="text-[10px] text-slate-500">{e.d}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <motion.div {...rise(1.1)} className="relative mt-3 h-9">
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-1.5 rounded-full bg-[#062b47] text-[11px] font-bold text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3.1, duration: 0.2 }}
        >
          <Send size={12} aria-hidden="true" /> Enviar por WhatsApp
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-1.5 rounded-full bg-[#16a996] text-[11px] font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.2 }}
        >
          <Check size={12} strokeWidth={3} aria-hidden="true" /> Enviado
        </motion.div>
      </motion.div>

      <motion.div
        {...rise(3.7)}
        className="ml-auto mt-3 w-[78%] rounded-xl rounded-tr-sm border border-[#16a996]/25 bg-[#16a996]/[0.12] p-2.5"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[#0071c1] shadow-xs">
            <FileText size={13} aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-[10px] font-bold text-slate-900">Pauta_Camila_R.pdf</p>
            <p className="text-[9px] text-slate-500">PDF membretado · 3 ejercicios</p>
          </div>
        </div>
        <p className="mt-1 flex items-center justify-end gap-1 text-[9px] font-semibold text-[#0e7b6d]">
          Entregado <CheckCheck size={11} aria-hidden="true" />
        </p>
      </motion.div>

      <Cursor x={[250, 190, 150]} y={[220, 130, 118]} delay={1.9} duration={1.1} />
    </SceneShell>
  )
}

/* ── Escena 6 · Cobros e informe de alta ── */
function CobrosScene() {
  return (
    <SceneShell>
      <SceneTitle icon={FileText}>Cobros e informe de alta</SceneTitle>

      <motion.div {...rise(0.15)} className="rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 text-[10px]">
          <span className="font-extrabold text-slate-800">Pack 10 sesiones · Camila R.</span>
          <motion.span
            className="rounded-md bg-[#16a996]/15 px-2 py-0.5 font-bold text-[#0e7b6d]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          >
            Pagado
          </motion.span>
        </div>
        <div className="mt-1.5 flex items-center justify-between text-[11px]">
          <span className="text-slate-600">Sesiones usadas</span>
          <span className="font-extrabold text-slate-900">10 / 10</span>
        </div>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            className="h-full rounded-full bg-[#0071c1]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 1.4, ease: 'easeOut' }}
          />
        </div>
      </motion.div>

      <motion.div {...rise(1.8)} className="mt-2 rounded-xl border border-slate-200 bg-white p-3 shadow-xs">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold text-slate-700">Evolución del dolor (EVA)</span>
          <span className="font-extrabold text-[#0e7b6d]">6 → 2</span>
        </div>
        <svg viewBox="0 0 200 56" className="mt-1.5 h-14 w-full" aria-hidden="true">
          <line x1="0" y1="52" x2="200" y2="52" stroke="#e2e8f0" strokeWidth="1" />
          <motion.path
            d="M6 8 L46 16 L86 26 L126 34 L166 42 L194 46"
            fill="none"
            stroke="#0071c1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.1, duration: 1.6, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="194"
            cy="46"
            r="3.5"
            fill="#16a996"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.6 }}
          />
        </svg>
      </motion.div>

      <motion.div
        {...rise(4.0)}
        className="mt-2 flex items-center justify-between rounded-xl bg-[#062b47] px-3 py-2 text-white"
      >
        <div className="leading-tight">
          <p className="text-[10px] font-bold">Informe de alta en PDF</p>
          <p className="text-[9px] text-white/70">Códigos FONASA para Isapre</p>
        </div>
        <span className="rounded-full bg-[#16a996] px-2 py-0.5 text-[9px] font-extrabold">Listo</span>
      </motion.div>
    </SceneShell>
  )
}

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  agenda: AgendaScene,
  admision: QrScene,
  escalas: ScalesScene,
  dss: DssScene,
  pauta: PautaScene,
  cobros: CobrosScene,
}

export function HeroSystemTour({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [runId, setRunId] = useState(0)
  const [pausedByUser, setPausedByUser] = useState(false)
  const [hovered, setHovered] = useState(false)

  const paused = pausedByUser || hovered || !!reduceMotion
  const scene = SCENES[index]
  const SceneComponent = SCENE_COMPONENTS[scene.id]

  const goTo = (i: number) => {
    setIndex(i)
    setRunId((r) => r + 1)
  }
  const next = () => goTo((index + 1) % SCENES.length)

  return (
    <div
      className={cn('relative flex select-none flex-col items-center justify-center py-2', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>{`
        @keyframes k-tour-float {
          0%, 100% { transform: perspective(1200px) translateY(4px) rotateY(-5deg) rotateX(2deg); }
          50% { transform: perspective(1200px) translateY(-6px) rotateY(-2deg) rotateX(1deg); }
        }
        @keyframes k-tour-bar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .k-tour-device {
          animation: k-tour-float 7s cubic-bezier(0.45, 0, 0.55, 1) infinite;
          @media (prefers-reduced-motion: reduce) { animation: none; transform: none; }
        }
        .k-tour-bar {
          transform-origin: left center;
          animation: k-tour-bar ${SCENE_SECONDS}s linear forwards;
        }
        .k-tour-noscroll::-webkit-scrollbar { display: none; }
        .k-tour-noscroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ── Teléfono ── */}
      <div className="k-tour-device relative h-[580px] w-[290px] xs:h-[620px] xs:w-[310px] sm:h-[650px] sm:w-[340px]">
        <div
          className="absolute inset-0 rounded-[52px] shadow-[0_24px_50px_-15px_rgba(15,23,42,0.22)]"
          style={{
            background:
              'linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 22%, #e2e8f0 45%, #94a3b8 75%, #cbd5e1 100%)',
          }}
        />
        <div className="absolute -left-[3px] top-28 h-12 w-[4px] rounded-l-md bg-slate-300" />
        <div className="absolute -left-[3px] top-44 h-12 w-[4px] rounded-l-md bg-slate-300" />
        <div className="absolute -right-[3px] top-36 h-16 w-[4px] rounded-r-md bg-slate-300" />
        <div className="absolute inset-[4px] rounded-[48px] bg-[#090d16]" />

        <div className="absolute inset-[10px] flex flex-col overflow-hidden rounded-[42px] border border-slate-200/80 bg-[#f8fafc]">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-3 z-40 flex h-[28px] w-[100px] -translate-x-1/2 items-center justify-between rounded-full bg-black px-3 shadow-sm">
            <div className="flex h-3 w-3 items-center justify-center rounded-full border border-slate-800 bg-[#111927]">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-950/80" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#16a996]" />
              <span className="text-[9px] font-bold text-[#24c9b3]">DSS</span>
            </div>
          </div>

          {/* Status bar */}
          <div className="relative z-30 flex h-11 items-center justify-between px-7 pt-1 text-xs font-semibold text-slate-700">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-brand">5G</span>
              <div className="flex h-2.5 w-5 items-center rounded-[3px] border border-slate-500 p-[1px]">
                <div className="h-full w-full rounded-[1.5px] bg-[#16a996]" />
              </div>
            </div>
          </div>

          {/* App header + pestañas con progreso */}
          <div className="relative z-20 border-b border-slate-200/80 bg-white px-3.5 pb-2.5 pt-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/images/LogoKenko.png" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
                <span className="font-display text-sm font-extrabold tracking-tight text-slate-900">
                  Kenko<span className="text-emerald">med</span>
                </span>
              </div>
              <span className="rounded-full border border-[#0071c1]/20 bg-[#0071c1]/[0.07] px-2 py-0.5 text-[9px] font-bold text-brand">
                Recorrido · datos de ejemplo
              </span>
            </div>

            <div
              className="k-tour-noscroll mt-2 flex gap-1 overflow-x-auto py-0.5"
              role="tablist"
              aria-label="Escenas del recorrido del sistema"
            >
              {SCENES.map((s, i) => {
                const active = i === index
                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => goTo(i)}
                    className={cn(
                      'relative shrink-0 cursor-pointer overflow-hidden rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors',
                      active
                        ? 'bg-[#0071c1]/12 text-brand'
                        : i < index
                        ? 'bg-slate-100 text-slate-700'
                        : 'border border-slate-200 bg-white text-slate-500 hover:bg-slate-100'
                    )}
                  >
                    <span className="relative z-10">{s.tab}</span>
                    {active && (
                      <span
                        key={runId}
                        aria-hidden="true"
                        onAnimationEnd={next}
                        className="k-tour-bar absolute inset-y-0 left-0 w-full bg-[#0071c1]/25"
                        style={{ animationPlayState: paused ? 'paused' : 'running' }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Escena */}
          <div className="relative flex-1 overflow-hidden bg-slate-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${scene.id}-${runId}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <SceneComponent />
              </motion.div>
            </AnimatePresence>

            {/* Subtítulo estilo video */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-[#041a2e] via-[#041a2e]/95 to-transparent px-4 pb-3 pt-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={scene.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-center text-[11px] font-semibold leading-snug text-white"
                  aria-live="polite"
                >
                  <span className="mr-1 text-[#24c9b3]">
                    {index + 1}/{SCENES.length}
                  </span>
                  {scene.caption}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="z-30 flex h-6 w-full shrink-0 items-center justify-center border-t border-slate-200/60 bg-white">
            <div className="h-1 w-28 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>

      {/* Controles bajo el teléfono */}
      <div className="z-20 mt-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPausedByUser((p) => !p)}
          aria-label={pausedByUser ? 'Reproducir recorrido' : 'Pausar recorrido'}
          aria-pressed={pausedByUser}
          className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground-muted transition-colors hover:text-foreground"
        >
          {pausedByUser || reduceMotion ? <Play size={12} aria-hidden="true" /> : <Pause size={12} aria-hidden="true" />}
        </button>
        <button
          type="button"
          onClick={() => goTo(index)}
          aria-label="Repetir escena"
          className="inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground-muted transition-colors hover:text-foreground"
        >
          <RotateCcw size={12} aria-hidden="true" />
        </button>
        <span className="text-[11px] font-semibold text-foreground-muted">
          {reduceMotion ? 'Toca una pestaña para ver cada paso' : 'Pasa el mouse para pausar'}
        </span>
      </div>
    </div>
  )
}

export default HeroSystemTour
