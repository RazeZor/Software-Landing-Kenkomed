"use client";

import {
  ArrowRight,
  Check,
  CircleAlert,
  CircleCheck,
  Minus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BEFORE = [
  "Riesgo de perder o traspapelar la ficha clínica",
  "Búsqueda manual de fichas de sesiones anteriores",
  "Cálculo y graficación a mano de escalas clínicas",
  "Tardas 15 minutos solo en transcribir datos de ingreso",
] as const;

const AFTER = [
  "Todo el historial clínico en la nube y accesible con un clic",
  "Evolución SOAP rápida con opciones pre-llenadas",
  "Escalas (EVA, PSFS, WOMAC) se calculan y grafican solas",
  "Admisión vía QR: el paciente llena sus datos antes de entrar",
] as const;

const OUTCOMES = [
  { value: "-80%", label: "tiempo en tareas administrativas" },
  { value: "0 papel", label: "información clínica segura y ordenada" },
  { value: "1 solo lugar", label: "para evolución, escalas y gráficas" },
] as const;

export const Comparison03 = () => {
  return (
    <section
      className="bg-background py-20 sm:py-28"
      aria-labelledby="comparison-03-heading"
    >
      <div className="container mx-auto px-6 w-full max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand font-bold">
            El Impacto
          </p>
          <h2
            id="comparison-03-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl text-foreground text-balance"
          >
            De 45 minutos en papel a 5 minutos en digital
          </h2>
          <p className="mt-4 text-foreground-muted text-lg max-w-xl mx-auto text-balance">
            Kenkomed reemplaza fichas en papel, planillas Excel y cálculos manuales por un flujo clínico digital completo — para que tu tiempo vuelva al paciente.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 shadow-sm"
        >
          <div className="bg-red-50/40 p-7 sm:p-10">
            <div className="flex items-center gap-2">
              <CircleAlert
                aria-hidden
                className="size-5 text-red-500"
              />
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-red-600">
                El flujo tradicional
              </h3>
            </div>
            <ul className="mt-8 flex flex-col gap-5">
              {BEFORE.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-sm text-red-900/70"
                >
                  <Minus
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-red-400"
                  />
                  <span className="line-through decoration-red-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card p-7 sm:p-10">
            <div className="flex items-center gap-2">
              <CircleCheck aria-hidden className="size-5 text-emerald-500" />
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-600">
                Con Kenkomed
              </h3>
            </div>
            <ul className="mt-8 flex flex-col gap-5">
              {AFTER.map((item) => (
                <li key={item} className="flex gap-4 text-sm text-foreground-muted">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-emerald-500 font-bold" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center bg-brand/5 p-6 rounded-2xl border border-brand/10"
        >
          <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-4">
            {OUTCOMES.map((outcome) => (
              <div key={outcome.value} className="flex items-baseline gap-2">
                <dd className="order-first font-mono text-xl sm:text-2xl font-bold tracking-tight text-brand">
                  {outcome.value}
                </dd>
                <dt className="text-xs font-medium text-foreground-muted">
                  {outcome.label}
                </dt>
              </div>
            ))}
          </dl>
          <Button asChild className="group bg-brand text-white hover:bg-brand/90 transition-colors shrink-0">
            <Link href="/#contact">
              Agendar demo gratuita
              <ArrowRight className="ml-2 size-4 transition-transform duration-150 ease-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison03;
