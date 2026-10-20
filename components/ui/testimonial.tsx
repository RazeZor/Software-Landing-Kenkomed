'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";

export interface TestimonialItem {
    quote: string;
    author: string;
    role: string;
    image: string;
}

export const defaultTestimonials: TestimonialItem[] = [
    {
        quote: "“Kenkomed transformó la forma en que atiendo a mis pacientes. La ficha digital y las evaluaciones automatizadas me ahorran más de 45 minutos al día.”",
        author: "Klgo. Juan Pérez",
        role: "Kinesiología Traumatológica",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    },
    {
        quote: "“Las evoluciones SOAP son rapidísimas y los gráficos de resultados le dan total claridad al paciente y al médico derivador sobre el progreso.”",
        author: "Klga. María González",
        role: "Directora Clínica KineMove",
        image: "https://images.unsplash.com/photo-1594824436998-d1d86d5257e8?q=80&w=800&auto=format&fit=crop",
    },
    {
        quote: "“Toda la clínica en un solo lugar: agenda, fichas clínicas, escalas validadas y cobranza. Redujimos el ausentismo más de un 40%.”",
        author: "Klgo. Matías López",
        role: "Kinesiólogo Deportivo",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop",
    },
];

export default function Testimonial({
    items = defaultTestimonials,
    className,
}: {
    items?: TestimonialItem[];
    className?: string;
}) {
    return (
        <section className={cn("py-20 px-4 md:px-8 relative overflow-hidden", className)}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
            
                .testimonial-font, .testimonial-font * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <div className="max-w-6xl mx-auto mb-12 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#0284c7]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0284c7] mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0284c7]" />
                    Casos Reales
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-balance">
                    Kinesiólogos y centros que confían en Kenkomed
                </h2>
                <p className="text-foreground-muted mt-3 max-w-2xl mx-auto text-base md:text-lg">
                    Conoce cómo profesionales de la salud en Chile optimizan su tiempo clínico y mejoran la adherencia de sus pacientes.
                </p>
            </div>

            <div className="testimonial-font flex flex-wrap items-stretch justify-center gap-6 max-w-6xl mx-auto">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="max-w-80 w-full bg-black text-white rounded-2xl flex flex-col justify-between shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <div className="relative -mt-px overflow-hidden rounded-2xl">
                            <img
                                src={item.image}
                                alt={item.author}
                                className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent" />
                        </div>
                        <div className="px-5 pb-5 pt-1 flex flex-col justify-between flex-1">
                            <p className="font-medium text-white/90 border-b border-gray-700/80 pb-5 text-sm leading-relaxed">
                                {item.quote}
                            </p>
                            <div className="mt-4">
                                <p className="font-semibold text-white tracking-tight">— {item.author}</p>
                                <p className="text-xs font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text mt-0.5">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
