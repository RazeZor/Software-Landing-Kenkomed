"use client";

import React from "react";
import Link from "next/link";
import { MacbookMockup } from "@/components/ui/great-ui-macbook-mockup";
import { QrCode, ArrowRight, Dumbbell, FileText } from "lucide-react";

export interface KenkomedChatShowcaseProps {
  className?: string;
}

export function KenkomedChatShowcase({ className }: KenkomedChatShowcaseProps) {
  return (
    <section
      id="comunicacion-clinica"
      className={`relative w-full py-20 md:py-28 px-4 md:px-8 bg-[#040e1a] text-white overflow-hidden border-t border-white/[0.06] ${className || ""}`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabecera de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight text-balance">
            Comunicación clínica directa con tu paciente
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed text-balance">
            Envía la anamnesis previa y las pautas de ejercicios directo al WhatsApp del paciente en un clic, manteniendo cada documento vinculado a su ficha clínica.
          </p>
        </div>

        {/* Layout: Mockup MacBook interactivo + Puntos destacados */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 flex justify-center w-full">
            <MacbookMockup />
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-emerald-500/35">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <QrCode size={20} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white text-base">Admisión previa por QR o enlace</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Comparte el enlace o código QR por WhatsApp para que el paciente complete su anamnesis desde su celular antes de llegar al box.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-emerald-500/35">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Dumbbell size={20} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white text-base">Pautas de ejercicios en PDF</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Prescribe rutinas del catálogo anatómico con series, repeticiones y carga, y despacha el PDF membretado al WhatsApp del paciente.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-sky-500/35">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <FileText size={20} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white text-base">Certificados para Isapres y médicos</h3>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Emite resúmenes de evolución y detalles de sesiones con códigos FONASA listos para reembolso en Isapres o entrega al médico derivador.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-colors duration-200"
              >
                Agendar demo gratuita
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KenkomedChatShowcase;
