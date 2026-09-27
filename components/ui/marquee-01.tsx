"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Klgo. Juan Pérez",
    username: "@kinejuan",
    body: "“Kenkomed transformó la forma en que atiendo a mis pacientes. La ficha electrónica y el sistema de admisión con código QR me ahorra muchísimo tiempo.”",
    profile: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Klga. María González",
    username: "@mariakine",
    body: "“Las evoluciones son rapidísimas y los gráficos de resultados (EVA, escalas) le dan mucha claridad a mis pacientes sobre su mejora.”",
    profile: "https://images.unsplash.com/photo-1594824436998-d1d86d5257e8?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Klgo. Matías López",
    username: "@matiaslopezk",
    body: "“Increíble. Ya no pierdo horas haciendo reportes. Todo está unificado. Y la agenda integrada con recordatorios redujo el ausentismo enormemente.”",
    profile: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Centro KineMove",
    username: "@kinemove.cl",
    body: "“Para un centro de rehabilitación como el nuestro, el panel de control de sesiones y pagos es todo lo que necesitábamos. Altamente recomendado.”",
    profile: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2670&auto=format&fit=crop",
  },
  {
    name: "Klga. Daniela Silva",
    username: "@danisilkine",
    body: "“Antes anotaba todo en papel, ahora tengo la clínica entera en mi teléfono. Muy intuitivo y excelente soporte técnico cuando tienes dudas.”",
    profile: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop",
  },
];

// Duplicate for infinite scroll smoothness
const extendedReviews = [...reviews, ...reviews];
const firstRow = extendedReviews.slice(0, extendedReviews.length / 2);
const secondRow = extendedReviews.slice(extendedReviews.length / 2);

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border-border/60 bg-card hover:bg-card/90 transition-colors shadow-sm hover:shadow-md p-5 rounded-2xl mx-2">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <img
            className="rounded-full object-cover w-10 h-10 border border-border"
            alt={name}
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs font-medium text-brand">{username}</p>
          </div>
        </div>
        <p className="text-sm text-foreground-muted leading-relaxed">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 mb-12 text-center"
      >
        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground text-balance">
          Varios ya confían en <span className="text-brand">nosotros</span>
        </h2>
        <p className="text-foreground-muted mt-4">Esto es lo que dicen los kinesiólogos que usan Kenkomed.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
      >
        <Marquee pauseOnHover className="[--duration:40s]">
          {firstRow.map((review, idx) => (
            <ReviewCard key={`${review.username}-${idx}`} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
          {secondRow.map((review, idx) => (
            <ReviewCard key={`${review.username}-${idx}`} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r z-10"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l z-10"></div>
      </motion.div>
    </section>
  );
}
