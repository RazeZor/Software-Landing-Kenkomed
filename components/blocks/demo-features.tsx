import { Card, CardContent } from '@/components/ui/card'
import { Activity, Shield, Users, QrCode, TrendingUp, CalendarCheck } from 'lucide-react'

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
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center text-[#0284c7]">
                                    <svg className="absolute inset-0 size-full opacity-10" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor" />
                                    </svg>
                                    <span className="mx-auto block w-fit text-5xl font-black tracking-tighter">QR</span>
                                </div>
                                <h2 className="mt-6 text-center text-xl font-bold text-slate-800">Admisión Remota</h2>
                                <p className="mt-2 text-center text-sm text-slate-500">
                                  El paciente completa sus datos, anamnesis y escalas desde casa.
                                </p>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600">
                                    <Activity className="m-auto size-14" strokeWidth={1.5} />
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-xl font-bold text-slate-800">IA y Banderas Rojas</h2>
                                    <p className="text-sm text-slate-500">Sistema DSS que pre-analiza el ingreso y detecta riesgos clínicos al instante.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 border-slate-200/80 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-violet-100 bg-violet-50 text-violet-600">
                                    <TrendingUp className="m-auto size-14" strokeWidth={1.5} />
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
