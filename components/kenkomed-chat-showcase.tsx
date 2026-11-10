"use client";

import React from "react";
import Link from "next/link";
import { MacbookMockup } from "@/components/ui/great-ui-macbook-mockup";
import { QrCode, ArrowRight, Dumbbell, FileText } from "lucide-react";

export interface KenkomedChatShowcaseProps {
  className?: string;
  /** 'section' se usa como banda completa en /solucion; 'embedded' como tarjeta destacada sobre el carrusel vertical */
  variant?: "section" | "embedded";
}

function ChatShowcaseBody({ embedded = false }: { embedded?: boolean }) {
  const HeadingTag = embedded ? "h3" : "h2";
  const SubHeadingTag = embedded ? "h4" : "h3";

  return (
    <>
      {/* Cabecera de la sección */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1 text-xs font-semibold tracking-wide text-[var(--kenko-pulse)] mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--kenko-pulse)]" aria-hidden="true" />
          Comunicación por WhatsApp
        </p>
        <HeadingTag className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold tracking-[-0.024em] leading-[1.12] text-white mb-3.5 text-balance">
          Comunicación clínica directa con tu paciente.
        </HeadingTag>
        <p className="text-base sm:text-[1.0625rem] text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          Envía la anamnesis previa y las pautas de ejercicios directo al WhatsApp del paciente en un clic, manteniendo cada documento vinculado a su ficha clínica.
        </p>
      </div>

      {/* Layout: Mockup MacBook interactivo + Puntos destacados */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-8 flex justify-center w-full">
          <MacbookMockup />
        </div>

        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-emerald/40">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2.5 rounded-xl bg-emerald/20 text-[var(--kenko-pulse)]">
                <QrCode size={20} aria-hidden="true" />
              </div>
              <SubHeadingTag className="font-bold text-white text-base">
                Admisión previa por QR o enlace
              </SubHeadingTag>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Comparte el enlace o código QR por WhatsApp para que el paciente complete su anamnesis desde su celular antes de llegar al box.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-emerald/40">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2.5 rounded-xl bg-emerald/20 text-[var(--kenko-pulse)]">
                <Dumbbell size={20} aria-hidden="true" />
              </div>
              <SubHeadingTag className="font-bold text-white text-base">
                Pautas de ejercicios en PDF
              </SubHeadingTag>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Prescribe rutinas del catálogo anatómico con series, repeticiones y carga, y despacha el PDF membretado al WhatsApp del paciente.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 transition-colors duration-200 hover:border-brand/45">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2.5 rounded-xl bg-brand/25 text-brand-light">
                <FileText size={20} aria-hidden="true" />
              </div>
              <SubHeadingTag className="font-bold text-white text-base">
                Certificados para Isapres y médicos
              </SubHeadingTag>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Emite resúmenes de evolución y detalles de sesiones con códigos FONASA listos para reembolso en Isapres o entrega al médico derivador.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald hover:bg-emerald/90 text-white font-bold text-sm transition-colors duration-200"
            >
              Agendar demo gratuita
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function KenkomedChatShowcase({
  className,
  variant = "section",
}: KenkomedChatShowcaseProps) {
  if (variant === "embedded") {
    return (
      <div
        id="comunicacion-clinica"
        className={`kenko-band-deep relative w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16 text-white shadow-[0_30px_70px_-30px_rgba(5,17,30,0.55)] ${
          className || ""
        }`}
      >
        <div className="relative z-10">
          <ChatShowcaseBody embedded />
        </div>
      </div>
    );
  }

  return (
    <section
      id="comunicacion-clinica"
      className={`kenko-band-deep relative w-full py-20 md:py-28 px-4 md:px-8 text-white overflow-hidden border-t border-white/[0.06] ${
        className || ""
      }`}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <ChatShowcaseBody />
      </div>
    </section>
  );
}

export default KenkomedChatShowcase;
