'use client'

import React from "react";
import { Star } from "lucide-react";

export interface DemoReviewItem {
    name: string;
    role: string;
    image: string;
    text: string;
    stars?: number;
}

const defaultDemoReviews: DemoReviewItem[] = [
    {
        name: "Klgo. Donald Jackman",
        role: "Kinesiólogo Clínico",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300&auto=format&fit=crop",
        text: "Llevo usando Kenkomed casi dos años, principalmente para el registro diario de evoluciones y escalas de dolor. Ha sido increíblemente intuitivo y me ahorra horas de papeleo cada semana.",
        stars: 5,
    },
    {
        name: "Klga. Richard Nelson",
        role: "Directora de Rehabilitación",
        image: "https://images.unsplash.com/photo-1594824436998-d1d86d5257e8?q=80&w=300&auto=format&fit=crop",
        text: "La facilidad con que los pacientes completan su anamnesis antes de llegar a la consulta y la precisión de los informes finales para los médicos derivadores marcaron un antes y un después.",
        stars: 5,
    },
    {
        name: "Klgo. James Washington",
        role: "Especialista Kinesioterapia Deportiva",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=300&auto=format&fit=crop",
        text: "Tener el control de los packs de atención, cobranzas y la trazabilidad de los ejercicios prescritos en una sola plataforma nos permitió escalar nuestro centro sin perder calidad asistencial.",
        stars: 5,
    },
];

export default function Demo({ reviews = defaultDemoReviews }: { reviews?: DemoReviewItem[] }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 pt-14">
            {reviews.map((review, idx) => (
                <div
                    key={idx}
                    className="text-sm w-80 border border-gray-200 dark:border-zinc-800 pb-6 rounded-2xl bg-white dark:bg-zinc-900 shadow-[0px_4px_15px_0px] shadow-black/5"
                >
                    <div className="flex flex-col items-center px-5 py-4 relative">
                        <img
                            className="h-24 w-24 absolute -top-14 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-md"
                            src={review.image}
                            alt={review.name}
                            loading="lazy"
                        />
                        <div className="pt-8 text-center">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-zinc-100">{review.name}</h3>
                            <p className="text-gray-600 dark:text-zinc-400 text-xs">{review.role}</p>
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-zinc-300 px-6 text-center leading-relaxed">
                        {review.text}
                    </p>
                    <div className="flex justify-center pt-4">
                        <div className="flex gap-0.5" aria-label="5 estrellas">
                            {[...Array(review.stars || 5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    className="fill-[#FF532E] text-[#FF532E]"
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
