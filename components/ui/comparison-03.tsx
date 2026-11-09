"use client";

import { motion, type Variants } from "framer-motion";
import { RiCheckLine as Check } from "react-icons/ri";

const traditional = [
  "Cruces de horarios y confusiones por agendas en papel o WhatsApp personal",
  "Pautas de ejercicios en fotocopias o mensajes sueltos que el paciente extravía",
  "Cálculo y graficación manual de escalas (EVA, Oswestry, WOMAC, LEFS)",
  "Riesgo normativo (Ley 20.584 y 21.719) por fichas sin trazabilidad ni respaldo",
  "Tiempo de consulta perdido transcribiendo datos básicos de ingreso y anamnesis",
];

const kenkomed = [
  "Agenda multi-box sincronizada con bloqueo atómico de cupos en tiempo real",
  "Pautas de ejercicios en PDF membretado enviadas en 1 clic a WhatsApp y correo",
  "13 cuestionarios y escalas calculadas automáticamente con gráficos de evolución",
  "Trazabilidad de accesos, consentimiento digital y respaldo alineado con Ley 20.584 y 21.719",
  "Admisión remota vía QR: el paciente completa su anamnesis desde el celular antes de la cita",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export const Comparison03 = () => {
  return (
    <section className="relative w-full overflow-hidden bg-surface/60 border-y border-border/60 px-6 py-20 sm:py-28" id="impact">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "200px" }}
          variants={container}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={item}
            className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance"
          >
            Menos papeleo administrativo, más tiempo clínico con tu paciente
          </motion.h2>
          <motion.p variants={item} className="mt-4 text-base sm:text-lg leading-relaxed text-foreground-muted text-balance mx-auto max-w-xl">
            Kenkomed reemplaza fichas en papel, planillas sueltas y cálculos manuales por un flujo clínico estructurado de principio a fin.
          </motion.p>
        </motion.div>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground-muted">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600 font-bold text-xs">
                –
              </span>
              Flujo tradicional fragmentado
            </div>
            <ul className="mt-5 space-y-3">
              {traditional.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-xl bg-surface p-3.5 text-sm text-foreground-muted leading-relaxed"
                >
                  <span className="mt-0.5 text-rose-500 font-bold shrink-0" aria-hidden="true">–</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border-2 border-brand/25 bg-card p-6 sm:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2.5 text-sm font-semibold text-brand">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald/15 text-emerald">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              Flujo clínico con Kenkomed
            </div>
            <ul className="mt-5 space-y-3">
              {kenkomed.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-xl bg-surface/80 border border-border/50 p-3.5 text-sm text-foreground leading-relaxed"
                >
                  <Check className="mt-0.5 text-emerald font-bold h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison03;
