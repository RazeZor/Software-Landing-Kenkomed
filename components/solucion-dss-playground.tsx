"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Heart,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function SolucionDssPlayground() {
  const [activeTab, setActiveTab] = useState<"eva" | "redflags" | "prescription" | "soap">("eva");
  const [evaScore, setEvaScore] = useState<number>(6);
  const [hasRedFlag, setHasRedFlag] = useState<boolean>(false);
  const [exerciseGoal, setExerciseGoal] = useState<"movilidad" | "fuerza" | "control">("movilidad");

  // Interpretación dinámica de EVA
  const getEvaStatus = (val: number) => {
    if (val <= 3) return { label: "Dolor Leve", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", badge: "Manejo funcional activo" };
    if (val <= 6) return { label: "Dolor Moderado", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", badge: "Dosificación adaptativa recomendada" };
    return { label: "Dolor Severo", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", badge: "Alerta DSS: Priorizar neuromodulación y desescalada" };
  };

  const status = getEvaStatus(evaScore);

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#040d18] text-white overflow-hidden border-y border-white/[0.08]">
      {/* Resplandor ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/12 via-blue-600/15 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} className="text-emerald-400" />
            Sistema en Vivo · Demostración Interactiva
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Prueba cómo piensa el DSS clínico de Kenkomed
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Interactúa con los módulos en tiempo real. Observa cómo el algoritmo analiza datos, clasifica riesgos y genera recomendaciones clínicas automáticas.
          </p>
        </div>

        {/* Consola Interactiva */}
        <div className="rounded-3xl bg-[#081525] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Barra superior de navegación por pestañas del sistema */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#06101c] border-b border-white/10 overflow-x-auto scrollbar-none">
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mr-2 shrink-0">
              Módulo DSS:
            </span>
            <button
              onClick={() => setActiveTab("eva")}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0",
                activeTab === "eva"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Activity size={14} />
              1. Escala EVA Dinámica
            </button>
            <button
              onClick={() => setActiveTab("redflags")}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0",
                activeTab === "redflags"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-xs"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <ShieldAlert size={14} />
              2. Detección de Banderas Rojas
            </button>
            <button
              onClick={() => setActiveTab("prescription")}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0",
                activeTab === "prescription"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/40 shadow-xs"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Zap size={14} />
              3. Dosificación Terapéutica
            </button>
            <button
              onClick={() => setActiveTab("soap")}
              className={cn(
                "flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0",
                activeTab === "soap"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-xs"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              )}
            >
              <ClipboardList size={14} />
              4. Evolución SOAP & Alta
            </button>
          </div>

          {/* Cuerpo de la consola */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {activeTab === "eva" && (
                <motion.div
                  key="eva"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 mb-2">
                        <Activity size={14} />
                        Simulador Clínico en Tiempo Real
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        Desplaza el nivel de dolor del paciente:
                      </h3>
                      <p className="text-sm text-zinc-400 mt-1">
                        El DSS clasifica la severidad al instante y sugiere el abordaje óptimo para la primera sesión.
                      </p>
                    </div>

                    {/* Slider Interactivo */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-400 uppercase">Puntuación EVA:</span>
                        <span className={cn("text-2xl font-black font-mono px-3 py-1 rounded-xl border", status.bg, status.color, status.border)}>
                          {evaScore} / 10
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        step="1"
                        value={evaScore}
                        onChange={(e) => setEvaScore(Number(e.target.value))}
                        className="w-full h-2.5 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                      />
                      <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                        <span>0: Sin dolor</span>
                        <span>5: Moderado</span>
                        <span>10: Insuperable</span>
                      </div>
                    </div>
                  </div>

                  {/* Panel de Salida del DSS */}
                  <div className="lg:col-span-6">
                    <div className={cn("p-6 rounded-2xl border transition-all", status.bg, status.border)}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                          Respuesta del Algoritmo DSS:
                        </span>
                        <span className={cn("text-xs font-bold px-2.5 py-0.5 rounded-full border", status.bg, status.color, status.border)}>
                          {status.label}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2">
                        {status.badge}
                      </h4>

                      <div className="space-y-2.5 text-xs text-zinc-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span><strong>Mapeo corporal:</strong> Registro automático de dermatomas afectados</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span><strong>Escala sugerida:</strong> {evaScore >= 6 ? "Oswestry ODI + Cuestionario Roland-Morris" : "Escala PSFS de objetivos específicos"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                          <span><strong>Ficha SOAP:</strong> Puntuación precargada en la sección 'O' (Objetivo)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "redflags" && (
                <motion.div
                  key="redflags"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Tamizaje Automático de Seguridad Clínica
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Kenkomed analiza las respuestas de la anamnesis remota y alerta al kinesiólogo antes de que el paciente ingrese al box.
                    </p>

                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                      <label className="flex items-center justify-between cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-colors">
                        <span className="text-xs text-zinc-200">Simular paciente con dolor nocturno severo y pérdida motora:</span>
                        <input
                          type="checkbox"
                          checked={hasRedFlag}
                          onChange={(e) => setHasRedFlag(e.target.checked)}
                          className="w-4 h-4 accent-rose-500 rounded cursor-pointer"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <div className={cn(
                      "p-6 rounded-2xl border transition-all",
                      hasRedFlag ? "bg-rose-500/10 border-rose-500/40 text-rose-200" : "bg-emerald-500/10 border-emerald-500/30 text-emerald-200"
                    )}>
                      <div className="flex items-center gap-3 mb-3">
                        {hasRedFlag ? (
                          <AlertTriangle className="text-rose-400 h-6 w-6 shrink-0 animate-bounce" />
                        ) : (
                          <CheckCircle2 className="text-emerald-400 h-6 w-6 shrink-0" />
                        )}
                        <h4 className="font-bold text-base text-white">
                          {hasRedFlag ? "¡ALERTA CRÍTICA: Bandera Roja Detectada!" : "Zona Segura: Sin Banderas Rojas"}
                        </h4>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                        {hasRedFlag
                          ? "El DSS detectó déficit neurológico progresivo. Se genera automáticamente un informe de derivación médica prioritaria y se bloquea la terapia manual invasiva."
                          : "Paciente apto para tratamiento kinésico estándar y ejercicio activo supervisado según guías internacionales."}
                      </p>
                      <div className="text-[11px] font-mono text-zinc-400">
                        Protocolo de seguridad: Ley 20.584 & Guías Clínicas de Chile
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "prescription" && (
                <motion.div
                  key="prescription"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-6 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Prescripción y Dosificación Estructurada
                    </h3>
                    <p className="text-sm text-zinc-300">
                      Selecciona el objetivo clínico para ver cómo el sistema estructura las series, repeticiones y la pauta enviada por WhatsApp:
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setExerciseGoal("movilidad")}
                        className={cn("px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all", exerciseGoal === "movilidad" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-white/5 border-white/10 text-zinc-400")}
                      >
                        Movilidad Articular
                      </button>
                      <button
                        onClick={() => setExerciseGoal("fuerza")}
                        className={cn("px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all", exerciseGoal === "fuerza" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-white/5 border-white/10 text-zinc-400")}
                      >
                        Fuerza e Hipertrofia
                      </button>
                      <button
                        onClick={() => setExerciseGoal("control")}
                        className={cn("px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all", exerciseGoal === "control" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-white/5 border-white/10 text-zinc-400")}
                      >
                        Control Motor & Propiocepción
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <span className="text-xs font-mono text-zinc-400 uppercase">Pauta Kinésica Generada</span>
                      <span className="text-xs font-bold text-emerald-400">Sincronizado vía WhatsApp</span>
                    </div>

                    {exerciseGoal === "movilidad" && (
                      <div className="space-y-3 text-xs">
                        <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/5">
                          <span className="text-white font-medium">Movilidad Lumbopélvica (Cat-Camel)</span>
                          <span className="text-emerald-400 font-mono">3 series x 10 rep · 60s descanso</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/5">
                          <span className="text-white font-medium">Puente de Glúteo Isométrico</span>
                          <span className="text-emerald-400 font-mono">3 series x 20 seg · RPE 5/10</span>
                        </div>
                      </div>
                    )}

                    {exerciseGoal === "fuerza" && (
                      <div className="space-y-3 text-xs">
                        <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/5">
                          <span className="text-white font-medium">Prensa de Piernas / Sentadilla en Cajón</span>
                          <span className="text-blue-400 font-mono">4 series x 8 rep · RPE 8/10</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/5">
                          <span className="text-white font-medium">Peso Muerto Rumano Unipodal</span>
                          <span className="text-blue-400 font-mono">3 series x 10 rep cada lado</span>
                        </div>
                      </div>
                    )}

                    {exerciseGoal === "control" && (
                      <div className="space-y-3 text-xs">
                        <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/5">
                          <span className="text-white font-medium">Bird-Dog con banda elástica</span>
                          <span className="text-purple-400 font-mono">3 series x 8 rep pausadas</span>
                        </div>
                        <div className="flex justify-between items-center p-2.5 rounded-lg bg-white/5">
                          <span className="text-white font-medium">Equilibrio en Bosu con ojos cerrados</span>
                          <span className="text-purple-400 font-mono">3 series x 30 seg</span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "soap" && (
                <motion.div
                  key="soap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5 space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Evolución SOAP & Gráfico de Progreso
                    </h3>
                    <p className="text-sm text-zinc-300">
                      Demuestra a tu paciente y al médico derivador cómo avanzó la rehabilitación desde la sesión 1 hasta el alta.
                    </p>
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
                      <TrendingDown size={18} className="shrink-0" />
                      <span><strong>Reducción de dolor comprobada:</strong> De EVA 8 a EVA 2 en 8 sesiones.</span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                    <div className="flex justify-between text-xs text-zinc-400 font-mono">
                      <span>Curva de Evolución EVA (Sesión 1 a 8)</span>
                      <span className="text-emerald-400 font-bold">-75% Dolor Percibido</span>
                    </div>

                    {/* Gráfico en barras SVG simplificado */}
                    <div className="h-32 flex items-end gap-3 pt-4 border-b border-white/10 pb-2">
                      {[8, 7, 6, 5, 4, 3, 2, 2].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                          <span className="text-[10px] font-mono text-zinc-400">{val}</span>
                          <div
                            className={cn(
                              "w-full rounded-t-md transition-all duration-500",
                              idx === 0 ? "bg-rose-500" : idx > 5 ? "bg-emerald-400" : "bg-blue-500"
                            )}
                            style={{ height: `${(val / 10) * 100}%` }}
                          />
                          <span className="text-[9px] text-zinc-500">S{idx + 1}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between text-[11px] text-zinc-400">
                      <span>Diagnóstico Inicial: Lumbalgia Mecánica Aguda</span>
                      <span className="text-white font-semibold">Estado: Alta Médica Aprobada</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolucionDssPlayground;
