"use client";

import { motion, type Variants } from "framer-motion";
import { RiCheckLine as Check } from "react-icons/ri";

const traditional = [
  "Riesgo de perder o traspapelar la ficha clínica",
  "Búsqueda manual de fichas de sesiones anteriores",
  "Cálculo y graficación a mano de escalas clínicas",
  "Tardas 15 minutos solo en transcribir datos de ingreso",
];

const kenkomed = [
  "Todo el historial clínico en la nube y accesible con un clic",
  "Evolución SOAP rápida con opciones pre-llenadas",
  "Escalas (EVA, PSFS, WOMAC) se calculan y grafican solas",
  "Admisión vía QR: el paciente llena sus datos antes de entrar",
];

const stats = [
  { value: "-80%", label: "tiempo en tareas administrativas" },
  { value: "0 papel", label: "información clínica segura y ordenada" },
  { value: "1 solo lugar", label: "para evolución, escalas y gráficas" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const Comparison03 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-24 sm:py-32" id="impact">
      {/* soft background accent */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "200px" }}
          variants={container}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={item} className="font-mono text-[10px] uppercase tracking-[0.14em] text-brand font-bold">
            El impacto
          </motion.p>
          <motion.h2
            variants={item}
            className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance"
          >
            De 45 minutos en papel
            <br />a 5 minutos en digital
          </motion.h2>
          <motion.p variants={item} className="mt-5 text-lg leading-relaxed text-foreground-muted text-balance mx-auto max-w-xl">
            Kenkomed reemplaza fichas en papel, planillas Excel y cálculos
            manuales por un flujo clínico digital completo — para que tu
            tiempo vuelva al paciente.
          </motion.p>
        </motion.div>

        {/* Comparison — two floating cards with a transform badge between them */}
        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-rose-100 bg-rose-50/60 p-8 shadow-[0_20px_50px_-25px_rgba(244,63,94,0.35)] dark:bg-rose-950/20 dark:border-rose-900/50"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-rose-500 dark:text-rose-400">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-500 dark:bg-rose-900/50 dark:text-rose-300">
                !
              </span>
              El flujo tradicional
            </div>
            <ul className="mt-6 space-y-3">
              {traditional.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-xl bg-white/70 dark:bg-rose-950/30 p-3 text-foreground-muted"
                >
                  <span className="mt-0.5 text-rose-400 font-bold">–</span>
                  <span className="line-through decoration-rose-300 dark:decoration-rose-700/60">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* floating transform badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-brand/30 sm:flex"
          >
            →
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-8 shadow-[0_20px_50px_-25px_rgba(16,185,129,0.35)] dark:bg-emerald-950/20 dark:border-emerald-900/50"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                <Check className="h-3.5 w-3.5" />
              </span>
              Con Kenkomed
            </div>
            <ul className="mt-6 space-y-3">
              {kenkomed.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-xl bg-white dark:bg-emerald-950/40 p-3 text-foreground shadow-sm"
                >
                  <Check className="mt-0.5 text-emerald-500 font-bold h-4 w-4 shrink-0" />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats row — separated floating pills */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "200px" }}
          variants={container}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={item}
              className="flex-1 rounded-2xl border border-border/60 bg-card p-6 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.15)] text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <div className="font-mono text-3xl font-bold text-brand">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-foreground-muted text-balance">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex justify-center"
        >
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand/90"
          >
            Agendar demo gratuita
            <motion.span aria-hidden className="inline-block" whileHover={{ x: 3 }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison03;
