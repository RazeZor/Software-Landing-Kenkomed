'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Shield, CalendarCheck } from 'lucide-react'
import { RobotLottie } from '@/components/robot-lottie'
import { QRLottie } from '@/components/qr-lottie'
import { StatsLottie } from '@/components/stats-lottie'

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
                                      El paciente completa sus datos, anamnesis y escalas desde casa.
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
                                    <p className="text-sm text-slate-500">Sistema DSS que pre-analiza el ingreso y detecta riesgos clínicos al instante.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-violet-100 bg-violet-50 items-center justify-center p-3 overflow-hidden">
                                    <StatsLottie className="w-full h-full" />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-xl font-bold text-slate-800">Resultados y Alta</h2>
                                    <p className="text-sm text-slate-500">Gráficos de evolución y reportes en PDF listos para el médico derivador.</p>
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
                                        <h2 className="text-xl font-bold text-slate-800">Seguridad Clínica</h2>
                                        <p className="text-sm text-slate-500">Escalas validadas, mapas corporales interactivos y alertas tempranas para tu práctica diaria.</p>
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 flex flex-col justify-center">
                                    <div className="space-y-3">
                                      {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-3">
                                          <div className="h-2 w-2 rounded-full bg-blue-400" />
                                          <div className="h-2 w-full rounded-full bg-slate-200" />
                                        </div>
                                      ))}
                                    </div>
                                    <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                                      <span className="text-xs font-bold text-slate-400 uppercase">Evolución ROM</span>
                                      <span className="text-xs font-bold text-emerald-600">+42%</span>
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
                                        <h2 className="text-xl font-bold text-slate-800">Gestión Integrada</h2>
                                        <p className="text-sm text-slate-500">Agenda, control de sesiones en packs y flujo de pagos directamente en la misma plataforma.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-4 py-4 pr-4">
                                    <div className="relative flex w-full items-center justify-end gap-3 opacity-60">
                                        <span className="block rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">Pedro S.</span>
                                        <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">PS</div>
                                    </div>
                                    <div className="relative flex items-center gap-3 mr-8">
                                        <div className="size-10 rounded-full bg-blue-100 text-blue-600 border-2 border-white shadow-sm flex items-center justify-center text-xs font-bold">MA</div>
                                        <span className="block rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-md">María A.</span>
                                    </div>
                                    <div className="relative flex w-full items-center justify-end gap-3 opacity-60">
                                        <span className="block rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">Juan P.</span>
                                        <div className="size-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">JP</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
