"use client";

import React, { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { KenkomedBentoPan } from "@/components/ui/kenkomed-bento-pan";
import { Activity, Sparkles, Play, Pause } from "lucide-react";

// Remotion Player cargado dinámicamente con ssr: false para evitar discrepancias de hidratación en Next.js App Router
const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-video rounded-3xl bg-[#05111e] flex flex-col items-center justify-center text-zinc-400 gap-3 border border-white/10">
        <div className="w-10 h-10 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
        <span className="text-sm font-medium">Cargando Ecosistema Kenkomed...</span>
      </div>
    ),
  }
);

export function KenkomedBentoShowcase() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const playerProps = useMemo(
    () => ({
      speed: isPlaying ? 1 : 0,
      panSpeed: 1,
    }),
    [isPlaying]
  );

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#05111e] text-white overflow-hidden">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} className="text-emerald-400" />
            Ecosistema Clínico Unificado
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Todo lo que ocurre en tu consulta, en un solo lugar
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Desde la evolución articular y escalas de dolor en tiempo real, hasta recordatorios por WhatsApp y ficha clínica SOAP.
          </p>
        </div>

        {/* Contenedor del Player de Remotion */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-[0_30px_90px_rgba(0,0,0,0.8)] border border-white/10">
          <div className="w-full rounded-[22px] overflow-hidden bg-[#05111e]">
            {mounted && (
              <Player
                component={KenkomedBentoPan as any}
                inputProps={playerProps}
                durationInFrames={480}
                fps={60}
                compositionWidth={1280}
                compositionHeight={720}
                autoPlay
                loop
                controls={false}
                clickToPlay={false}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16 / 9",
                  display: "block",
                }}
              />
            )}
          </div>

          {/* Barra de control sutil inferior */}
          <div className="absolute bottom-5 right-6 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs text-zinc-300">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label={isPlaying ? "Pausar animación" : "Reproducir animación"}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} />}
              <span>{isPlaying ? "Pausar paneo" : "Reanudar"}</span>
            </button>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="text-[11px] text-emerald-400 font-mono">En vivo</span>
          </div>
        </div>

        {/* 3 micro-highlights de confianza bajo el bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Activity size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Escalas Validadas</div>
              <div className="text-xs text-zinc-400 mt-1">
                EVA, WOMAC, DASH, Barthel y mapas corporales calculados automáticamente.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">DSS & Seguridad Clínica</div>
              <div className="text-xs text-zinc-400 mt-1">
                Detección inteligente de banderas rojas para toma de decisiones seguras.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Activity size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Cumplimiento Legal Chile</div>
              <div className="text-xs text-zinc-400 mt-1">
                Ley de Derechos y Deberes 20.584, boletas SII y convenios FONASA/Isapre.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KenkomedBentoShowcase;
