"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Award,
  BookOpen,
  Brain,
  CheckCircle2,
  FileCheck2,
  FlaskConical,
  Scale,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SCIENTIFIC_PROTOCOLS = [
  {
    id: "startback",
    title: "Estratificación STarT Back (Keele University)",
    category: "Lumbalgia & Pronóstico",
    evidence: "Hill et al., The Lancet (2011). Reducción del 30% en costos de salud mediante estratificación.",
    badge: "Validado en Chile",
    subgroups: [
      {
        name: "Riesgo Bajo",
        score: "≤ 3 puntos",
        action: "Educación activa, pauta de ejercicios básicos, desescalada de miedo.",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      },
      {
        name: "Riesgo Medio",
        score: "≥ 4 puntos físicos",
        action: "Terapia física supervisada, control motor, dosificación progresiva.",
        color: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      },
      {
        name: "Riesgo Alto",
        score: "≥ 4 puntos psicosociales",
        action: "Abordaje biopsicosocial combinado, desensibilización central y manejo de catastrofización.",
        color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      },
    ],
  },
  {
    id: "oswestry",
    title: "Oswestry Disability Index (ODI)",
    category: "Discapacidad Funcional Lumbar",
    evidence: "Fairbank & Pynsent, Spine (2000). Instrumento gold standard recomendado por OMS y Cochrane.",
    badge: "Gold Standard",
    subgroups: [
      {
        name: "0% - 20%: Discapacidad Mínima",
        score: "Leve",
        action: "El paciente puede realizar casi todas las actividades. Foco en prevención y fuerza.",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      },
      {
        name: "21% - 40%: Discapacidad Moderada",
        score: "Moderada",
        action: "Dificultades en estar de pie y levantar peso. Tratamiento kinésico prioritario.",
        color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      },
      {
        name: "41% - 60%: Discapacidad Severa",
        score: "Severa",
        action: "Afecta el sueño y la vida laboral activa. DSS alerta necesidad de evaluación integral.",
        color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
      },
    ],
  },
  {
    id: "neuropathic",
    title: "Cuestionario DN4 (Douleur Neuropathique 4)",
    category: "Screening Neuropático",
    evidence: "Bouhassira et al., Pain (2005). Sensibilidad del 83% y especificidad del 90%.",
    badge: "Diagnóstico Clínico",
    subgroups: [
      {
        name: "Puntaje < 4/10",
        score: "Dolor Nociceptivo P dominante",
        action: "Manejo mecánico osteoarticular estándar. Respuesta favorable a carga tisular.",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      },
      {
        name: "Puntaje ≥ 4/10",
        score: "Componente Neuropático Activo",
        action: "DSS sugiere neurodinamia suave, educación en neurobiología del dolor y consulta médica.",
        color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
      },
    ],
  },
];

export function InvestigacionEvidenceVisualizer() {
  const [selectedProtocol, setSelectedProtocol] = useState(SCIENTIFIC_PROTOCOLS[0]);

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#040d18] text-white overflow-hidden border-y border-white/[0.08]">
      {/* Luz ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-emerald-500/12 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FlaskConical size={13} className="text-emerald-400" />
            De la Literatura Científica al Algoritmo
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Cómo Kenkomed traduce la evidencia en decisiones
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Explora las guías científicas integradas en el software y comprueba cómo el algoritmo procesa las respuestas del paciente para guiar tu conducta terapéutica.
          </p>
        </div>

        {/* Consola de Algoritmos */}
        <div className="rounded-3xl bg-[#081525] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Selector de Protocolo */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-[#06101c]">
            {SCIENTIFIC_PROTOCOLS.map((protocol) => {
              const isSelected = selectedProtocol.id === protocol.id;
              return (
                <button
                  key={protocol.id}
                  onClick={() => setSelectedProtocol(protocol)}
                  className={cn(
                    "flex flex-col text-left p-4 sm:p-5 transition-all border-b md:border-b-0 md:border-r border-white/10 last:border-r-0",
                    isSelected ? "bg-white/[0.06] text-white" : "text-zinc-400 hover:bg-white/[0.02] hover:text-zinc-200"
                  )}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
                      {protocol.category}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                      {protocol.badge}
                    </span>
                  </div>
                  <span className="font-bold text-sm text-white">{protocol.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detalle del Algoritmo Activo */}
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 uppercase">Referencia Bibliográfica de Base:</span>
                <p className="text-sm font-medium text-emerald-300">{selectedProtocol.evidence}</p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-500/20 text-blue-300 text-xs font-semibold shrink-0">
                <BookOpen size={14} />
                Regla DSS Activa
              </div>
            </div>

            {/* Clasificación automática en el software */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                Estratificación y Recomendación del Algoritmo en Ficha Kenkomed:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedProtocol.subgroups.map((group, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "p-5 rounded-2xl border flex flex-col justify-between transition-all",
                      group.color
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-white uppercase tracking-wider">{group.score}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-white">Nivel {idx + 1}</span>
                      </div>
                      <h5 className="font-extrabold text-white text-base mb-2">{group.name}</h5>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">{group.action}</p>
                    </div>

                    <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>Automatizado en informe</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestigacionEvidenceVisualizer;
