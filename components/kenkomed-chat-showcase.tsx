"use client";

import React from "react";
import Link from "next/link";
import { MacbookMockup } from "@/components/ui/great-ui-macbook-mockup";
import { QrCode, Mic, ArrowRight, Sparkles, MessageSquareHeart } from "lucide-react";
import { RobotLottie } from "@/components/robot-lottie";

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
            Comunicación Directa Kinesiólogo – Paciente
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-5 leading-tight text-balance">
            Kenkomed facilita la comunicación directa con tu paciente
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Al estar todo automatizado y centralizado, el clínico tiene a mano toda la información para comunicarse fluidamente con su paciente. Puedes enviarle la anamnesis previa directamente a su WhatsApp mediante código QR o un link directo para que responda desde su celular.
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
                <h3 className="font-semibold text-white text-base">Anamnesis por QR o Link</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                Mándale la anamnesis por WhatsApp a tu paciente: ya sea enviándole el enlace directo o compartiéndole el código QR. La completa desde su celular y su ficha queda lista antes de llegar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/35 transition-all duration-300 shadow-sm">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
                  <Sparkles size={20} />
                </div>
                <h3 className="font-semibold text-white text-base">Información Clínica al Instante</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                Al estar todo automatizado en la plataforma, el kinesiólogo tiene centralizados los datos y evolución de su paciente, facilitando una comunicación directa, rápida y personalizada.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/35 transition-all duration-300 shadow-sm group">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageSquareHeart size={20} />
                </div>
                <h3 className="font-semibold text-white text-base">Atención con el Equipo Kenkomed</h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed">
                La comunicación y soporte con nosotros se realiza directamente a través de WhatsApp de manera efectiva, con un equipo humano especializado y listo para asistirte en lo que necesites.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:scale-[1.01]"
              >
                <MessageSquareHeart size={16} />
                Hablar con el equipo Kenkomed
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
