'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, CalendarCheck } from 'lucide-react'
import { RobotLottie } from '@/components/robot-lottie'
import { QRLottie } from '@/components/qr-lottie'
import { StatsLottie } from '@/components/stats-lottie'
import { EjercicioLottie } from '@/components/ejercicio-lottie'

export function DemoFeatures() {
    return (
        <section className="bg-slate-50/50 py-10 dark:bg-transparent">
            <div className="mx-auto w-full max-w-5xl px-4 md:px-0">
                
                <div className="mb-10 text-center">
                    <h3 className="text-3xl font-bold text-slate-800 mb-3">Todo el ciclo clínico en un solo lugar</h3>
                    <p className="text-base font-medium text-slate-500 max-w-2xl mx-auto">
                      Explora la plataforma interactiva a continuación. Kenkomed simplifica tu día a día, desde la admisión remota hasta el alta médica.
                    </p>
                </div>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-4">
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-sky-100 bg-sky-50 items-center justify-center p-3 overflow-hidden">
                                    <QRLottie className="w-full h-full" />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-xl font-bold text-slate-800">Admisión Remota</h2>
                                    <p className="text-sm text-slate-500">
                                      El paciente completa su anamnesis, mapa de dolor y antecedentes antes de entrar al box.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-emerald-100 bg-emerald-50 items-center justify-center p-3 overflow-hidden">
                                    <RobotLottie className="w-full h-full" />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-xl font-bold text-slate-800">IA y Banderas Rojas</h2>
                                    <p className="text-sm text-slate-500">Sistema DSS que detecta alertas de alarma y factores psicosociales al instante.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-rose-100 bg-rose-50 items-center justify-center p-3 overflow-hidden">
                                    <EjercicioLottie className="w-full h-full" />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-xl font-bold text-slate-800">Pautas de Ejercicios</h2>
                                    <p className="text-sm text-slate-500">Catálogo anatómico curado con envío en 1 clic a WhatsApp y PDF membretado auditado.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-6">
                                <div className="relative z-10 flex flex-col justify-center space-y-4">
                                    <div className="relative flex aspect-square size-14 rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                                        <Shield className="m-auto size-7" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-bold text-slate-800">Fichas 100% Legales y Seguras</h2>
                                        <p className="text-sm text-slate-500">Consentimiento informado digital, fichas protegidas por ley, historial de accesos y bloqueo de pantalla si te alejas.</p>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col justify-center">
                                    <div className="space-y-3">
                                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/70">
                                        <span>Historial de Accesos</span>
                                        <span className="text-emerald-600 font-bold">Protegido con fecha y hora</span>
                                      </div>
                                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/70">
                                        <span>Ficha Descargable</span>
                                        <span className="text-sky-600 font-bold">PDF oficial en 1 clic</span>
                                      </div>
                                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200/70">
                                        <span>Privacidad en Box</span>
                                        <span className="text-violet-600 font-bold">Bloqueo automático</span>
                                      </div>
                                    </div>
                                    <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                                      <span className="text-[11px] font-bold text-slate-400 uppercase">Seguridad en Salud</span>
                                      <span className="text-[11px] font-bold text-emerald-600">Normativa chilena 100%</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2 gap-6">
                                <div className="relative z-10 flex flex-col justify-center space-y-4">
                                    <div className="relative flex aspect-square size-14 rounded-2xl border border-amber-100 bg-amber-50 text-amber-600">
                                        <CalendarCheck className="m-auto size-7" strokeWidth={1.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-bold text-slate-800">Agenda Multi-Box y Cero Sobrecupos</h2>
                                        <p className="text-sm text-slate-500">Horarios en paralelo para tus boxes y gimnasio. El sistema asegura que nunca se topen dos citas y el paciente reserva fácil por internet.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-3 py-4 pr-4">
                                    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm space-y-1.5">
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-800">Box 1: Gimnasio Terapéutico</span>
                                        <span className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">Ocupado</span>
                                      </div>
                                      <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-800">Box 2: Fisioterapia / Electro</span>
                                        <span className="text-[10px] bg-sky-100 text-sky-700 font-bold px-2 py-0.5 rounded-full">Disponible</span>
                                      </div>
                                    </div>
                                    <p className="text-[11px] text-slate-400 text-center">Sincronización en tiempo real: cero choques de citas en tus boxes.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
