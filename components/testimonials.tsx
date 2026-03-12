'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Kenkomed transformó completamente mi consulta. Lo que antes me tomaba 2 horas de papeleo, ahora lo hago en 20 minutos. Mis pacientes también aman poder reservar online.',
    name: 'Kinesiólogo Renato Espinoza',
    role: 'Clínica Vitale, Santiago',
    initials: 'RE',
    rating: 5,
  },
  {
    quote:
      'Por fin un software que entiende cómo trabaja un kinesiólogo. Las fichas SOAP, la agenda, los cobros — todo en un lugar. El soporte es increíble, responden en minutos.',
    name: 'Kinesióloga Mónica Fuentes',
    role: 'Rehabilitación Integral, Viña del Mar',
    initials: 'MF',
    rating: 5,
  },
  {
    quote:
      'Probé 4 softwares distintos antes de Kenkomed. Ninguno pensó en el kinesiólogo. Éste sí. La app móvil es un plus increíble para cuando atiendo a domicilio.',
    name: 'Kinesiólogo Andrés Valdés',
    role: 'Fisio en Movimiento, Concepción',
    initials: 'AV',
    rating: 5,
  },
  {
    quote:
      'La reducción en inasistencias es real. Con los recordatorios automáticos bajamos de un 25% a menos del 8%. Eso se traduce directamente en más ingresos.',
    name: 'Kinesióloga Camila Ortega',
    role: 'Centro KineSalud, Temuco',
    initials: 'CO',
    rating: 5,
  },
  {
    quote:
      'La implementación fue rapidísima. En una tarde ya tenía todo configurado y mis pacientes importados. No necesité ningún tutorial — la interfaz es muy intuitiva.',
    name: 'Kinesiólogo Felipe Torres',
    role: 'Torres Rehabilitación, La Serena',
    initials: 'FT',
    rating: 5,
  },
  {
    quote:
      'Los reportes de ingresos y asistencia me permiten tomar decisiones reales sobre mi clínica. Por primera vez tengo claridad financiera total de mi negocio.',
    name: 'Kinesióloga Isabel Lagos',
    role: 'Clínica FisioActiva, Puerto Montt',
    initials: 'IL',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)
  const itemsPerView = 3

  const maxIndex = testimonials.length - itemsPerView

  const navigate = (dir: 'prev' | 'next') => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => {
      if (dir === 'next') return Math.min(prev + 1, maxIndex)
      return Math.max(prev - 1, 0)
    })
    setTimeout(() => setIsAnimating(false), 400)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-28 md:py-36 bg-teal-50 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 scroll-reveal ${revealed ? 'is-visible' : ''}`}>
          <div>
            <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
              Testimonios
            </span>
            <h2
              id="testimonials-heading"
              className="font-display font-bold text-4xl md:text-5xl text-foreground text-balance"
            >
              Lo que dicen los{' '}
              <span className="text-gradient">kinesiólogos.</span>
            </h2>
          </div>
          {/* Arrows */}
          <div className="flex gap-3" role="group" aria-label="Navegar testimonios">
            <button
              onClick={() => navigate('prev')}
              disabled={current === 0}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-brand disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => navigate('next')}
              disabled={current >= maxIndex}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-foreground-muted hover:text-foreground hover:border-brand disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" aria-live="polite">
          <div
            ref={trackRef}
            className="flex gap-5 ease-in-out"
            style={{
              transition: 'transform 400ms ease-in-out',
              transform: `translateX(calc(-${current * (100 / itemsPerView)}% - ${current * 20 / itemsPerView}px))`,
            }}
          >
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className={`flex-shrink-0 w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] bg-card rounded-2xl border border-border/60 p-7 flex flex-col gap-5 scroll-reveal stagger-${i + 1} ${revealed ? 'is-visible' : ''}`}
                aria-label={`Testimonio de ${t.name}`}
              >
                {/* Stars */}
                <div className="flex gap-1" aria-label={`${t.rating} de 5 estrellas`}>
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-[15px] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-sm font-bold text-brand flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-foreground-muted">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Indicadores de carrusel">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={current === i}
              aria-label={`Ir a posición ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? 'bg-brand w-6' : 'bg-border w-1.5'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
