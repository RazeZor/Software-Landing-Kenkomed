"use client";

import React from "react";
import Link from "next/link";
import { MacbookMockup } from "@/components/ui/great-ui-macbook-mockup";
import { QrCode, Mic, ShieldCheck, ArrowRight, Sparkles, MessageSquareHeart } from "lucide-react";

export interface KenkomedChatShowcaseProps {
  className?: string;
}

export function KenkomedChatShowcase({ className }: KenkomedChatShowcaseProps) {
  return (
    <section
      id="comunicacion-clinica"
      className={`relative w-full py-24 md:py-32 px-4 md:px-8 bg-[#040e1a] text-white overflow-hidden border-t border-white/[0.06] ${className || ""}`}
    >
      {/* Resplandor ambiental de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[480px] bg-gradient-to-tr from-emerald-500/12 via-blue-600/15 to-transparent blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={13} className="text-emerald-400" />
            Comunicación y Seguimiento Clínico
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight text-balance">
            Conecta la ficha clínica con WhatsApp en tiempo real
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Tus pacientes responden la anamnesis por código QR y reciben sus pautas de ejercicios con notas de voz explicativas. Tú monitoreas todo desde tu MacBook o escritorio con Kenkomed sin perder el contexto clínico.
          </p>
        </div>

        {/* Layout: Mockup MacBook interactivo + Puntos destacados */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Mockup MacBook interactivo */}
          <div className="lg:col-span-8 flex justify-center w-full">
            <MacbookMockup />
          </div>

          {/* Tarjetas de beneficios clínicos */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/35 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <QrCode size={20} />
                </div>
                <h3 className="font-semibold text-white text-base">Admisión Digital por QR</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                El paciente recibe el enlace directo a su WhatsApp y responde la anamnesis antes de pisar el box de atención.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/35 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                  <Mic size={20} />
                </div>
                <h3 className="font-semibold text-white text-base">Pautas y Notas de Voz</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                Envía dosificaciones de ejercicios y explicaciones grabadas sin salir de tu flujo de trabajo kinésico.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/35 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-semibold text-white text-base">DSS & Alertas de Dolor</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                Escalas EVA, banderas rojas y mapas corporales quedan archivados automáticamente en el historial SOAP.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:scale-[1.01]"
              >
                <MessageSquareHeart size={16} />
                Solicitar demo clínica
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KenkomedChatShowcase;
