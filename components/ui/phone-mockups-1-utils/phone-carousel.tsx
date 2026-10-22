"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  QrCode,
  Activity,
  FileText,
  Calendar,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Brain,
  CheckSquare,
  AlertTriangle,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  badge?: string;
  description?: string;
}

export interface InteractiveScreenItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  render: () => React.ReactNode;
}

export interface PhoneCarouselProps {
  images?: ImageItem[];
  screens?: InteractiveScreenItem[];
  autoPlayInterval?: number;
  initialActiveIndex?: number;
  showControls?: boolean;
  className?: string;
  variant?: "trio" | "single";
}

/* ─────────────────────────────────────────────────────────────
 * AUDITORÍA HALLMARK & KENKOMED:
 * - Modo 100% interactivo ligero y estandarizado (sin doble toggle ni imágenes pesadas)
 * - Tema de pantalla: Blanco Clínico Oficial Kenkomed (#f8fafc / #ffffff)
 * - Cero emojis (100% iconografía SVG médica: Lucide)
 * - Paleta Kenkomed: Azul Zafiro (#0284c7 / #1a6fc4), Esmeralda (#10b981), Pizarra (#0f172a)
 * - Terminología kinésica clínica rigurosa y auténtica (Ley 20.584 MINSAL)
 * ───────────────────────────────────────────────────────────── */

/* Header clínico superior con logo oficial de Kenkomed y datos del paciente */
function MobilePatientHeader({ currentStepTitle }: { currentStepTitle: string }) {
  return (
    <div className="bg-white border-b border-slate-200/80 shrink-0">
      {/* Barra superior de marca Kenkomed con logo */}
      <div className="px-3 py-1.5 flex items-center justify-between border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center gap-1.5">
          <img
            src="/images/LogoKenko.png"
            alt="Logo Kenkomed"
            className="w-4 h-4 object-contain"
          />
          <span className="text-[10px] font-extrabold tracking-tight text-slate-800">
            Ken<span className="text-emerald-600">ko</span>med
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[7.5px] font-bold text-slate-500 uppercase tracking-wider font-mono">
            Clínica Digital
          </span>
        </div>
      </div>

      {/* Sub-header con información del paciente y etapa actual */}
      <div className="px-3 py-1.5 flex items-center justify-between bg-white">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-[#0284c7]/10 text-[#0284c7] flex items-center justify-center font-bold text-[9px]">
            MA
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-800 leading-tight">Miguel Arias Silva</span>
            <span className="text-[7.5px] font-medium text-slate-400">Expediente #4092 · 34 años</span>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#0284c7] text-[8px] font-bold uppercase tracking-wider border border-blue-200">
          {currentStepTitle}
        </span>
      </div>
    </div>
  );
}

/* 1. ANAMNESIS MÓVIL (Paso 2 de 15 del formulario de admisión) */
function ScreenAnamnesis() {
  const [selectedTime, setSelectedTime] = useState("Semanas");
  const [eva, setEva] = useState(8);

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 select-none font-sans overflow-hidden">
      <MobilePatientHeader currentStepTitle="Admisión QR" />

      <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/60">
          <div>
            <span className="text-[8px] font-black uppercase tracking-wider text-[#0284c7]">Paso 2 de 15</span>
            <p className="text-xs font-bold text-slate-800">Sobre tu molestia o dolor</p>
          </div>
          <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-50 text-[#0284c7] font-semibold border border-blue-100">
            Formulario Remoto
          </span>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm space-y-1.5">
          <label className="text-[9px] font-bold text-slate-700 block">
            ¿Cuánto tiempo llevas con esta molestia?
          </label>
          <div className="grid grid-cols-4 gap-1">
            {["Días", "Semanas", "Meses", "Años"].map((t) => (
              <button
                key={t}
                type="button"
                aria-label={`Seleccionar duración: ${t}`}
                onClick={() => setSelectedTime(t)}
                className={cn(
                  "py-1 text-center text-[9px] font-semibold rounded-lg border transition-colors cursor-pointer",
                  selectedTime === t
                    ? "bg-blue-50 border-[#0284c7] text-[#0284c7]"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                )}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-[9px] font-bold text-slate-700">Escala de Dolor (EVA)</label>
            <span className="text-[10px] font-black text-rose-600 font-mono">{eva} / 10</span>
          </div>
          <div className="flex items-center gap-0.5 p-1 bg-slate-50 rounded-lg border border-slate-100">
            {[0, 2, 4, 6, 8, 10].map((val) => (
              <button
                key={val}
                type="button"
                aria-label={`Nivel de dolor EVA ${val}`}
                onClick={() => setEva(val)}
                className={cn(
                  "flex-1 py-1 text-center text-[8px] font-bold rounded cursor-pointer transition-all",
                  val === eva
                    ? "bg-rose-500 text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-200"
                )}
              >
                {val}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-[7px] font-bold text-slate-400 uppercase tracking-wider px-1">
            <span>Sin dolor</span>
            <span>Máximo dolor</span>
          </div>
        </div>

        <div className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-sm">
          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Motivo declarado por el paciente
          </div>
          <p className="text-[9px] text-slate-600 leading-snug">
            "Dolor agudo en la zona lumbar baja irradiado a la pierna derecha al levantar carga."
          </p>
        </div>
      </div>

      <div className="p-2.5 bg-white border-t border-slate-200/80 shrink-0">
        <div className="w-full py-1.5 bg-[#0284c7] rounded-lg text-center text-[10px] font-bold text-white shadow-sm flex items-center justify-center gap-1.5">
          <CheckCircle2 size={11} />
          Ficha pre-cargada en consulta
        </div>
      </div>
    </div>
  );
}

/* 2. EVALUACIÓN Y BANDERAS ROJAS (Screening y Tests de Kenkomed) */
function ScreenEvaluacion() {
  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 select-none font-sans overflow-hidden">
      <MobilePatientHeader currentStepTitle="Evaluación" />

      <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
        <div className="p-2.5 rounded-xl border border-rose-200 bg-rose-50/80 shadow-sm flex items-start gap-2">
          <div className="w-5 h-5 rounded-md bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle size={12} />
          </div>
          <div>
            <div className="text-[9px] font-black text-rose-700 uppercase tracking-wider">
              1 Bandera Roja Detectada
            </div>
            <div className="text-[9px] font-semibold text-rose-900 leading-tight mt-0.5">
              Déficit neurológico miotoma L4-L5. Hormigueo persistente.
            </div>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
              ROM Lumbar Flexión
            </span>
            <span className="text-[11px] font-black text-slate-700 font-mono">30% (Inicial)</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[30%] h-full bg-amber-400 rounded-full" />
          </div>
          <div className="flex justify-between text-[7px] text-slate-400 mt-1 font-mono">
            <span>Tope doloroso 30°</span>
            <span>Meta: 90°</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-[8px] font-black text-[#0284c7] uppercase tracking-wider">
              Oswestry Disability Index
            </div>
            <div className="text-[9px] text-slate-500 font-medium">Incapacidad funcional severa</div>
          </div>
          <div className="text-right">
            <div className="text-base font-black text-[#0284c7] font-mono leading-none">42%</div>
            <span className="text-[8px] font-bold text-rose-600 uppercase">Severa</span>
          </div>
        </div>

        <div className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#0284c7] flex items-center justify-center">
              <Brain size={12} />
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-800">Test SLR (Lasègue)</div>
              <div className="text-[8px] text-slate-400">Positivo a 35°</div>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[8px] font-bold border border-amber-200">
            Radiculopatía
          </span>
        </div>
      </div>

      <div className="p-2.5 bg-white border-t border-slate-200/80 shrink-0">
        <div className="w-full py-1.5 bg-[#0284c7] rounded-lg text-center text-[10px] font-bold text-white shadow-sm flex items-center justify-center gap-1.5">
          <CheckCircle2 size={11} />
          Planificar Tratamiento
        </div>
      </div>
    </div>
  );
}

/* 3. PLAN DE TRATAMIENTO & EJERCICIOS */
function ScreenPlanTratamiento() {
  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 select-none font-sans overflow-hidden">
      <MobilePatientHeader currentStepTitle="Plan Clínico" />

      <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
          <div className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <CheckSquare size={11} className="text-[#0284c7]" />
            Objetivos Funcionales
          </div>
          <div className="space-y-1.5">
            {[
              { text: "Disminuir EVA a 3/10 en reposo.", done: true },
              { text: "Caminar 30 min sin claudicación.", done: false },
              { text: "Recuperar fuerza extensión rodilla (M5).", done: false },
            ].map((obj, i) => (
              <div key={i} className="flex items-center gap-2 text-[9px] font-medium">
                <div
                  className={cn(
                    "w-3.5 h-3.5 rounded flex items-center justify-center text-[8px]",
                    obj.done ? "bg-[#0284c7] text-white" : "border border-slate-300"
                  )}
                >
                  {obj.done && <CheckCircle2 size={9} />}
                </div>
                <span className={obj.done ? "text-slate-400 line-through" : "text-slate-700"}>
                  {obj.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm">
          <div className="text-[8px] font-black text-slate-400 uppercase tracking-wider mb-2">
            Prescripción de Ejercicios
          </div>
          <div className="space-y-1.5">
            {[
              { name: "Neurodinamia Ciático", reps: "3 series x 10 reps", tag: "Movilidad" },
              { name: "Puente Glúteo Bipodal", reps: "4 series x 12 reps", tag: "Fuerza" },
            ].map((ej, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-between"
              >
                <div>
                  <div className="text-[9px] font-bold text-slate-800">{ej.name}</div>
                  <div className="text-[8px] text-slate-500 font-mono">{ej.reps}</div>
                </div>
                <span className="text-[8px] font-semibold text-[#0284c7] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {ej.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-2.5 bg-white border-t border-slate-200/80 shrink-0">
        <div className="w-full py-1.5 bg-[#0284c7] rounded-lg text-center text-[10px] font-bold text-white shadow-sm flex items-center justify-center gap-1.5">
          <CheckCircle2 size={11} />
          Sesión en Curso (5 de 10)
        </div>
      </div>
    </div>
  );
}

/* 4. EVOLUCIÓN SOAP (Registro estructurado) */
function ScreenFichaSOAP() {
  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 select-none font-sans overflow-hidden">
      <MobilePatientHeader currentStepTitle="Evolución SOAP" />

      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        <div className="flex items-center justify-between pb-1 border-b border-slate-200/60 text-[9px]">
          <span className="font-bold text-slate-800">Sesión 5 de 10 · Hoy</span>
          <span className="text-emerald-600 font-semibold font-mono">Ley 20.584 ✓</span>
        </div>

        {/* S */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-black flex items-center justify-center shrink-0 text-[10px] font-mono">
            S
          </div>
          <div className="flex-1 p-2 rounded-xl border border-slate-200/80 bg-white text-[9px] text-slate-700 shadow-sm leading-snug">
            "Siento mucho menos dolor, pude dormir de corrido." <strong className="text-emerald-600">EVA 3/10</strong>.
          </div>
        </div>

        {/* O */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-black flex items-center justify-center shrink-0 text-[10px] font-mono">
            O
          </div>
          <div className="flex-1 p-2 rounded-xl border border-slate-200/80 bg-white text-[9px] text-slate-700 shadow-sm leading-snug">
            Aumento ROM flexión lumbar a 60°. Fuerza cuádriceps M4+. SLR (-) a los 60°.
          </div>
        </div>

        {/* A */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-black flex items-center justify-center shrink-0 text-[10px] font-mono">
            A
          </div>
          <div className="flex-1 p-2 rounded-xl border border-slate-200/80 bg-white text-[9px] text-slate-700 shadow-sm leading-snug">
            Evolución muy favorable, disminuyó sintomatología radicular. Buena tolerancia.
          </div>
        </div>

        {/* P */}
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#0284c7] text-white font-black flex items-center justify-center shrink-0 text-[10px] font-mono shadow-sm">
            P
          </div>
          <div className="flex-1 p-2 rounded-xl border border-[#0284c7]/30 bg-blue-50/60 text-[9px] font-bold text-[#0284c7] shadow-sm flex items-center">
            Progresar carga en Core. Mantener neurodinamia ciático...
            <span className="w-1 h-3 bg-[#0284c7] ml-1 animate-pulse rounded-full" />
          </div>
        </div>
      </div>

      <div className="p-2.5 bg-white border-t border-slate-200/80 shrink-0">
        <div className="w-full py-1.5 bg-[#0284c7] rounded-lg text-center text-[10px] font-bold text-white shadow-sm flex items-center justify-center gap-1.5">
          <CheckCircle2 size={11} />
          Guardar y Firmar Sesión
        </div>
      </div>
    </div>
  );
}

/* 5. RESULTADOS Y OUTCOMES (Gráficos comparativos EVA) */
function ScreenReevaluacion() {
  const evaValues = [8, 7, 5, 4, 3, 2, 1];

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 select-none font-sans overflow-hidden">
      <MobilePatientHeader currentStepTitle="Resultados" />

      <div className="flex-1 p-3 overflow-y-auto space-y-2.5">
        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">
              Evolución del Dolor (EVA)
            </span>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              -87% Dolor
            </span>
          </div>

          <div className="h-24 flex items-end gap-1.5 pb-1">
            {evaValues.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[7px] font-bold text-slate-400 font-mono">{val}</span>
                <div
                  className="w-full bg-gradient-to-t from-teal-500 to-emerald-400 rounded-t-md transition-all"
                  style={{ height: `${(val / 10) * 70}px` }}
                />
                <span className="text-[7px] font-bold text-slate-400 uppercase">S{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[7px] font-bold text-slate-400 uppercase tracking-wider border-t border-slate-100 pt-1.5 mt-1">
            <span>Ingreso (8/10)</span>
            <span className="text-emerald-600">Alta Clínica (1/10)</span>
          </div>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-[9px]">
              PDF
            </div>
            <div>
              <div className="text-[9px] font-bold text-slate-800">Informe_Alta_Clinica.pdf</div>
              <div className="text-[8px] text-slate-400">Listo para médico derivador</div>
            </div>
          </div>
          <span className="px-2 py-1 rounded bg-[#0284c7] text-white text-[8px] font-bold shadow-sm">
            Exportar
          </span>
        </div>
      </div>

      <div className="p-2.5 bg-white border-t border-slate-200/80 shrink-0">
        <div className="w-full py-1.5 bg-emerald-600 rounded-lg text-center text-[10px] font-bold text-white shadow-sm flex items-center justify-center gap-1.5">
          <CheckCircle2 size={11} />
          Emitir Certificado de Alta
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * LISTAS PREESTABLECIDAS DE PANTALLAS INTERACTIVAS
 * ───────────────────────────────────────────────────────────── */

function MobileScreenImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-full bg-[#f8fafc] overflow-hidden flex flex-col">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top select-none pointer-events-none"
        loading="eager"
      />
    </div>
  );
}

export const DEFAULT_KENKOMED_SCREENS: InteractiveScreenItem[] = [
  {
    id: "panel",
    title: "Panel de Control",
    category: "Gestión",
    badge: "Dashboard",
    render: () => (
      <MobileScreenImage
        src="/software/panelphone_clean.png"
        alt="Panel de control Kenkomed móvil"
      />
    ),
  },
  {
    id: "agenda",
    title: "Agenda Semanal",
    category: "Citas",
    badge: "Calendario",
    render: () => (
      <MobileScreenImage
        src="/software/agendaphone_clean.png"
        alt="Agenda semanal de atenciones kinésicas Kenkomed"
      />
    ),
  },
  {
    id: "estadisticas",
    title: "Estadísticas & EVA",
    category: "Outcomes",
    badge: "Resultados",
    render: () => (
      <MobileScreenImage
        src="/software/estadisticasphone_clean.png"
        alt="Estadísticas de dolor EVA y conducta kinésica Kenkomed"
      />
    ),
  },
  {
    id: "sesion",
    title: "Escalas Clínicas",
    category: "Evaluación",
    badge: "QuickDASH",
    render: () => (
      <MobileScreenImage
        src="/software/sesionphone_clean.png"
        alt="Escalas clínicas validadas y seguimiento Kenkomed"
      />
    ),
  },
  {
    id: "historial",
    title: "Historial Clínico",
    category: "Tratamiento",
    badge: "Ley 20.584",
    render: () => (
      <MobileScreenImage
        src="/software/historialphone_clean.png"
        alt="Historial clínico y seguimiento kinésico Kenkomed"
      />
    ),
  },
];

/* Preservamos DEFAULT_KENKOMED_IMAGES para tipado y retrocompatibilidad */
export const DEFAULT_KENKOMED_IMAGES: ImageItem[] = [
  {
    src: "/software/Cuerpo.jpg",
    alt: "Mapa corporal y anamnesis en el celular Kenkomed",
    title: "Anamnesis Móvil & Mapa Corporal",
    badge: "Admisión QR",
    description: "El paciente completa el mapa del dolor desde su smartphone antes de llegar.",
  },
  {
    src: "/software/DSS.png",
    alt: "Panel DSS clínico y banderas rojas Kenkomed",
    title: "DSS Clínico & Banderas Rojas",
    badge: "Seguridad Clínica",
    description: "Detección inteligente de signos de alarma para una consulta segura.",
  },
  {
    src: "/software/ficha_clinica.png",
    alt: "Ficha clínica estructurada SOAP Kenkomed",
    title: "Ficha Clínica SOAP Digital",
    badge: "100% Sin Papel",
    description: "Evolución sesión a sesión enlazada a los objetivos iniciales.",
  },
  {
    src: "/software/graficos_nuevo.png",
    alt: "Gráficos de evolución clínica y progreso Kenkomed",
    title: "Gráficos de Evolución de Outcomes",
    badge: "Resultados Objetivos",
    description: "Comparativa de ingreso vs. alta con goniometría y escalas validadas.",
  },
  {
    src: "/software/Diagnostico_final.png",
    alt: "Diagnóstico final y reporte para médico derivador",
    title: "Diagnóstico y Alta Médica",
    badge: "Informe PDF",
    description: "Generación automática del informe kinésico para el médico tratante.",
  },
];

/* ─────────────────────────────────────────────────────────────
 * SUBCOMPONENTE DE UN DISPOSITIVO INDIVIDUAL (IPHONE FRAME)
 * ───────────────────────────────────────────────────────────── */

interface PhoneDeviceProps {
  content: React.ReactNode;
  isMain?: boolean;
  className?: string;
  onClick?: () => void;
}

function PhoneDevice({
  content,
  isMain = false,
  className,
  onClick,
}: PhoneDeviceProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-[38px] sm:rounded-[44px] p-[6px] sm:p-[8px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.12)] border border-zinc-700/60 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 flex flex-col transition-all duration-500 select-none",
        isMain
          ? "w-[220px] xs:w-[240px] sm:w-[275px] md:w-[310px] h-[420px] xs:h-[460px] sm:h-[540px] md:h-[600px] z-20 cursor-default ring-1 ring-white/20"
          : "w-[195px] xs:w-[215px] sm:w-[240px] md:w-[270px] h-[380px] xs:h-[420px] sm:h-[470px] md:h-[520px] z-10 cursor-pointer opacity-60 hover:opacity-100 filter brightness-95 hover:brightness-100",
        className
      )}
    >
      {/* Botones físicos laterales */}
      <div className="absolute -left-[10px] top-[95px] w-[2px] h-[22px] bg-zinc-700 rounded-l-sm" />
      <div className="absolute -left-[10px] top-[130px] w-[2px] h-[40px] bg-zinc-700 rounded-l-sm" />
      <div className="absolute -left-[10px] top-[180px] w-[2px] h-[40px] bg-zinc-700 rounded-l-sm" />
      <div className="absolute -right-[10px] top-[140px] w-[2px] h-[55px] bg-zinc-700 rounded-r-sm" />

      {/* Pantalla interior con bordes curvos y fondo blanco clínico */}
      <div className="relative w-full h-full bg-[#f8fafc] rounded-[32px] sm:rounded-[36px] overflow-hidden flex flex-col border border-zinc-800/80 shadow-inner">
        {/* Barra de estado iOS limpia */}
        <div className="relative z-30 h-8 w-full px-5 flex items-center justify-between text-[10px] font-semibold text-slate-800 select-none pt-0.5 bg-white border-b border-slate-100">
          <span className="font-mono tracking-tight text-[9px] font-bold">09:41</span>

          {/* Dynamic Island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-[76px] h-[19px] bg-black rounded-full flex items-center justify-between px-2 shadow-sm z-40">
            <div className="w-2 h-2 rounded-full bg-[#0a1f33] border border-blue-500/40 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-[#0284c7] animate-pulse" />
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-900 border border-zinc-700" />
          </div>

          <div className="flex items-center gap-1 text-slate-700">
            <span className="text-[8px] font-mono font-bold tracking-tight">5G</span>
            <div className="w-4 h-2 rounded-[3px] border border-slate-700 p-[1px] flex items-center">
              <div className="h-full w-full bg-slate-800 rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Contenido clínico */}
        <div className="relative flex-1 w-full overflow-hidden">
          {content}
        </div>

        {/* Home indicator bar */}
        <div className="h-3.5 w-full flex items-center justify-center select-none shrink-0 bg-white border-t border-slate-100">
          <div className="w-24 h-1 bg-slate-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * COMPONENTE PRINCIPAL PHONE CAROUSEL (TRIO PHONE SHOWCASE)
 * ───────────────────────────────────────────────────────────── */

export function PhoneCarousel({
  screens,
  autoPlayInterval = 4500,
  initialActiveIndex = 0,
  showControls = true,
  className,
  variant = "single",
}: PhoneCarouselProps) {
  const activeScreens = screens || DEFAULT_KENKOMED_SCREENS;
  const totalItems = activeScreens.length;

  const [currentIndex, setCurrentIndex] = useState(initialActiveIndex);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, nextSlide, autoPlayInterval]);

  const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
  const nextIndex = (currentIndex + 1) % totalItems;

  const renderItemContent = (idx: number) => {
    const screen = activeScreens[idx % activeScreens.length];
    return <div className="w-full h-full">{screen.render()}</div>;
  };

  return (
    <div
      className={cn("flex flex-col items-center justify-center w-full max-w-full min-w-0 select-none", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tabs / píldoras rápidas de navegación por etapas clínicas */}
      <div className="relative w-full max-w-full min-w-0 mb-4 overflow-hidden md:w-auto md:overflow-visible">
        {/* Fade edges on mobile to hint scroll */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white/90 to-transparent z-10 md:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white/90 to-transparent z-10 md:hidden" />
        <div className="flex items-center gap-1.5 w-full max-w-full min-w-0 px-2 overflow-x-auto scrollbar-hide md:flex-wrap md:justify-center md:overflow-visible">
          {activeScreens.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "px-2.5 py-0.5 rounded-full text-[10px] font-medium transition-all cursor-pointer whitespace-nowrap shrink-0",
                  isActive
                    ? "bg-blue-50 border border-blue-200 text-[#0284c7] font-semibold shadow-sm"
                    : "bg-white/80 border border-slate-200/60 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SHOWCASE DEL CELULAR INTERACTIVO ── */}
      <div className="relative w-full max-w-full min-w-0 flex items-center justify-center py-2 px-1">
        {/* Resplandor ambiental suave de fondo: halo radial difuminado al 100% transparente para evitar cualquier borde o corte cuadrado */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, oklch(0.48 0.18 246 / 0.12) 0%, oklch(0.65 0.15 160 / 0.05) 45%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {variant === "trio" ? (
          <div className="relative flex items-center justify-center w-full max-w-full min-w-0 min-h-[430px] sm:min-h-[520px] md:min-h-[590px]">
            {/* 1. CELULAR IZQUIERDO — solo visible en md+ */}
            <div
              className={cn(
                "absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-500",
                "hidden md:block",
                "md:-left-4 lg:md:-left-8 md:-rotate-6 md:scale-95 md:opacity-80 md:hover:-rotate-3 md:hover:scale-100"
              )}
            >
              <PhoneDevice
                content={renderItemContent(prevIndex)}
                isMain={false}
                onClick={prevSlide}
              />
            </div>

            {/* 2. CELULAR CENTRAL (Activo / Principal)
                - Con soporte de swipe/drag táctil en móvil para navegar */}
            <div className="relative z-20 shadow-2xl transition-transform duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`center-${currentIndex}`}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -35 || info.velocity.x < -300) {
                      nextSlide();
                    } else if (info.offset.x > 35 || info.velocity.x > 300) {
                      prevSlide();
                    }
                  }}
                  className="touch-pan-y cursor-grab active:cursor-grabbing"
                >
                  <PhoneDevice
                    content={renderItemContent(currentIndex)}
                    isMain={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 3. CELULAR DERECHO — solo visible en md+ */}
            <div
              className={cn(
                "absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-500",
                "hidden md:block",
                "md:left-auto md:-right-4 lg:md:-right-8 md:rotate-6 md:scale-95 md:opacity-80 md:hover:rotate-3 md:hover:scale-100"
              )}
            >
              <PhoneDevice
                content={renderItemContent(nextIndex)}
                isMain={false}
                onClick={nextSlide}
              />
            </div>
          </div>
        ) : (
          /* Modo Single */
          <div className="relative z-20 shadow-2xl transition-transform duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={`single-${currentIndex}`}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -35 || info.velocity.x < -300) {
                    nextSlide();
                  } else if (info.offset.x > 35 || info.velocity.x > 300) {
                    prevSlide();
                  }
                }}
                className="touch-pan-y cursor-grab active:cursor-grabbing"
              >
                <PhoneDevice
                  content={renderItemContent(currentIndex)}
                  isMain={true}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

    </div>
  );
}

export default PhoneCarousel;
