'use client'

import { useReveal } from '@/hooks/use-scroll-animation'
import { ArrowRight, Clock, FileX, Smartphone } from 'lucide-react'

export function BeforeAfter() {
    const section = useReveal()

    return (
        <section className="py-24 bg-surface border-y border-border/60">
            <div ref={section.ref} className="max-w-6xl mx-auto px-6">
                <div className={`text-center max-w-2xl mx-auto mb-16 scroll-reveal ${section.isVisible ? 'is-visible' : ''}`}>
                    <span className="inline-block text-xs font-bold text-brand tracking-widest uppercase mb-4">
                        El Impacto
                    </span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 text-balance">
                        De 45 minutos en papel a 5 minutos en digital
                    </h2>
                    <p className="text-foreground-muted leading-relaxed">
                        Descubre cómo Kenkomed transforma el caos del papel y las planillas en un flujo de trabajo fluido, para que dediques más tiempo a tus pacientes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
                    {/* Flecha conectora (desktop) */}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background border border-border/60 rounded-full items-center justify-center text-brand shadow-lg">
                        <ArrowRight size={20} />
                    </div>

                    {/* ANTES */}
                    <div className={`bg-red-50/50 border border-red-100/50 rounded-3xl p-8 lg:p-12 scroll-reveal stagger-1 ${section.isVisible ? 'is-visible' : ''}`}>
                        <h3 className="font-display font-semibold text-2xl text-red-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm">❌</span>
                            Antes de Kenkomed
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <FileX className="text-red-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-semibold text-red-900 mb-1">Caos de papel y planillas</h4>
                                    <p className="text-sm text-red-800/70">Fichas clínicas ilegibles, traspapeladas en cajones o repartidas en cientos de archivos de Excel.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Clock className="text-red-400 shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-semibold text-red-900 mb-1">Escalas y cálculos manuales</h4>
                                    <p className="text-sm text-red-800/70">15 minutos perdidos transcribiendo e intentando calcular los puntajes de escalas como WOMAC o TUG a mano.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* DESPUÉS */}
                    <div className={`bg-brand/5 border border-brand/20 rounded-3xl p-8 lg:p-12 scroll-reveal stagger-2 ${section.isVisible ? 'is-visible' : ''}`}>
                        <h3 className="font-display font-semibold text-2xl text-brand mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand text-sm">✅</span>
                            Con Kenkomed
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <Smartphone className="text-brand shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Todo en una plataforma</h4>
                                    <p className="text-sm text-foreground-muted">Fichas SOAP digitales y seguras. El paciente completa su anamnesis desde su celular antes de llegar.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Clock className="text-brand shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-semibold text-foreground mb-1">Cálculos automáticos</h4>
                                    <p className="text-sm text-foreground-muted">Las 13 escalas (EVA, PSFS, Berg, etc.) se calculan y grafican solas. Las banderas rojas te alertan en tiempo real.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
