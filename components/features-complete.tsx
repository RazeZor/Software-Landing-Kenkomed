'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    CheckCircle2,
    ArrowRight,
    QrCode,
    Brain,
    FileText,
    BarChart3,
    ClipboardList,
    Stethoscope,
    Shield,
    Calendar,
    Users,
    Activity,
    StickyNote,
    Lock,
    Smartphone,
    ChevronDown,
    ChevronUp,
    UserCheck,
    Mail,
    FileOutput,
    Scale,
    Wallet,
    Building2,
    Dumbbell,
    Layers,
    BookOpen,
    ShieldCheck,
} from 'lucide-react'

interface FeatureGroup {
    icon: typeof Lock
    title: string
    count: number
    badge?: string
    defaultOpen?: boolean
    features: string[]
}

/* ─── Feature categories ─── */
const clinicianGroups: FeatureGroup[] = [
    {
        icon: QrCode,
        title: 'Formulario Clínico Inicial — 14 páginas',
        count: 4,
        badge: 'Admisión QR',
        defaultOpen: true,
        features: [
            'Crear anamnesis inicial estructurada de 14 páginas',
            'Editar y actualizar antecedentes ya completados',
            'Generar token QR único para admisión remota del paciente',
            'Ver y descargar código QR generado en formato PNG',
        ],
    },
    {
        icon: ClipboardList,
        title: 'Cuestionarios Clínicos — 13 escalas validadas',
        count: 13,
        badge: '13 escalas',
        defaultOpen: true,
        features: [
            'PSFS — Escala Funcional Específica del Paciente',
            'GROC — Calificación Global de Cambio',
            'EQ-5D — Calidad de Vida EuroQol',
            'Barthel — Índice de Independencia Funcional',
            'Screening Örebro — Evaluación Psicosocial y de Riesgos',
            'ENA — Escala Numérica de Dolor',
            'Oswestry / ODI — Índice de Discapacidad Lumbar',
            'LEFS — Escala Funcional de Extremidad Inferior',
            'QuickDASH — Discapacidad de Hombro, Codo y Mano',
            'WOMAC — Artrosis de Rodilla y Cadera (dolor, rigidez, función)',
            'TUG — Timed Up and Go (riesgo de caída y movilidad)',
            'Berg — Escala de Equilibrio de Berg (14 tareas, 0–56 pts)',
            'Tinetti — Evaluación de Equilibrio y Marcha (0–28 pts)',
        ],
    },
    {
        icon: Dumbbell,
        title: 'Pautas de Ejercicios en Casa (Prescripción Digital)',
        count: 8,
        badge: 'WhatsApp / PDF',
        defaultOpen: true,
        features: [
            'Biblioteca organizada por regiones anatómicas (cervical, hombro, lumbar, cadera, rodilla, pie)',
            'Dosificación clínica: series, repeticiones, descanso, frecuencia y alertas de precaución',
            'Registro trazable de cada prescripción (PautaEjercicio) en el historial de auditoría',
            'Envío por correo electrónico transaccional con diseño responsivo',
            'Despacho directo al WhatsApp del paciente con mensaje preconfigurado en 1 clic',
            'Exportación a PDF membretado con código de verificación y logo del centro',
            'Buscador rápido de pacientes en el directorio de la clínica',
            'Historial de pautas emitidas integrado en la ficha del paciente',
        ],
    },
    {
        icon: Activity,
        title: 'Sesiones de Kinesiología y Evolución SOAP',
        count: 10,
        features: [
            'Crear primera sesión con evaluación inicial integral',
            'Registrar sesiones de seguimiento con evolución estructurada SOAP',
            'Registrar sesión final con síntesis kinésica de alta',
            'Documentar resumen del tratamiento y objetivos alcanzados',
            'Estado al alta: mejorado, alta kinésica, derivado o estable',
            'Recomendaciones al alta y plan de mantenimiento domiciliario',
            'Consultar listado histórico de sesiones del paciente',
            'Inspeccionar el detalle completo de cualquier sesión previa',
            'Editar registros dentro de la ventana clínica permitida',
            'Vincular puntajes de escalas clínicas aplicadas durante la sesión',
        ],
    },
    {
        icon: Layers,
        title: 'Ciclos Clínicos (Episodios de Atención)',
        count: 5,
        badge: 'Por patología',
        features: [
            'Agrupación estructurada de sesiones por patología o diagnóstico específico',
            'Control de sesiones planificadas vs. realizadas con indicador de avance',
            'Alta kinésica estructurada con informe de evolución final y deltas funcionales',
            'Comparativa objetiva de dolor y escalas funcionales pre y post tratamiento',
            'Preservación íntegra del historial del episodio tras el alta',
        ],
    },
    {
        icon: Brain,
        title: 'Sistema de Apoyo a Decisiones Clínicas (DSS)',
        count: 3,
        badge: 'Algoritmo DSS',
        features: [
            'Detección automatizada de banderas rojas y factores de riesgo biopsicosociales',
            'Interpretación clínica automática de puntajes y umbrales MCID en escalas',
            'Gráficos longitudinales de evolución funcional del paciente',
        ],
    },
    {
        icon: Calendar,
        title: 'Agendamiento Online & Multi-Box',
        count: 9,
        badge: 'Multi-Box',
        features: [
            'Portal de reservas online público por profesional (/reservar/slug/) y por centro',
            'Personalización con logo del profesional o clínica e indicador de disponibilidad',
            'Verificación para paciente habitual (RUT + Fecha de nacimiento) con control de intentos',
            'Token criptográfico temporal firmado (TimestampSigner) para resguardo de datos',
            'Capacidad Multi-Box en paralelo (1 a 3+ boxes simultáneos por profesional)',
            'Prevención de cruces de horario mediante bloqueo transaccional en base de datos',
            'Cálculo dinámico de disponibilidad respetando pausas, colación y duración de sesión',
            'Enlaces directos para Google Calendar, Apple Calendar y Outlook',
            'Calendario del centro con estados cromáticos de cita (confirmada, atendida, ausente)',
        ],
    },
    {
        icon: FileText,
        title: 'Reportes e Informes Clínicos',
        count: 4,
        features: [
            'Generar informe de anamnesis inicial con síntesis DSS',
            'Emitir ficha clínica integral del paciente en PDF',
            'Generar certificados y resúmenes con códigos FONASA para reembolso en Isapres',
            'Visualizar anamnesis con interpretaciones clínicas estructuradas',
        ],
    },
    {
        icon: Wallet,
        title: 'Finanzas, Pagos y Paquetes de Sesiones',
        count: 5,
        features: [
            'Creación y control de paquetes o ciclos de sesiones prepagadas',
            'Cruce automático de sesiones asistidas vs. saldo pendiente',
            'Resumen financiero y registro de ingresos mensuales del centro',
            'Soporte para tarifas diferenciadas por convenio o atención particular',
            'Filtro rápido de cuentas con pagos pendientes',
        ],
    },
    {
        icon: Scale,
        title: 'Seguridad Legal y Cumplimiento (Ley 20.584 / 21.719)',
        count: 6,
        badge: 'Normativa CL',
        features: [
            'Registro inmutable de auditoría clínica (AuditoriaAcceso): IP, usuario, fecha y acción',
            'Bloqueo automático de pantalla tras 10 minutos de inactividad en box',
            'Consentimiento informado electrónico con marca de tiempo y dirección IP',
            'Arquitectura alineada con la Ley N° 20.584, Ley N° 19.628 y preparada para la Ley N° 21.719',
            'Exportación del registro de auditoría en PDF filtrable por períodos (30, 90 o 180 días)',
            'Endpoint de monitoreo de salud (/health/) para supervisión de base de datos y servicios',
        ],
    },
    {
        icon: FileOutput,
        title: 'Exportación y Portabilidad ARCO',
        count: 4,
        badge: 'Portabilidad',
        features: [
            'Exportar ficha completa del paciente en formato estructurado JSON',
            'Exportar ficha clínica legible en formato HTML/PDF',
            'Exportación segmentada por ciclo clínico específico',
            'Soporte técnico para solicitudes ARCO (Acceso, Rectificación, Cancelación y Oposición)',
        ],
    },
    {
        icon: Building2,
        title: 'Gestión Multi-Centro',
        count: 4,
        badge: 'Multiclínica',
        features: [
            'Configuración de múltiples sedes o centros bajo una misma cuenta profesional',
            'Panel "Mi Centro" con directorio del equipo clínico y administrativo',
            'Aislamiento estricto de fichas y agendas por centro de trabajo',
            'Cambio de sede activa en un clic desde la barra superior',
        ],
    },
    {
        icon: Shield,
        title: 'Control de Acceso por Roles (RBAC)',
        count: 4,
        features: [
            'Administrador del sistema: supervisión global de configuración y auditoría',
            'Director / Admin del centro: gestión del equipo, finanzas y agenda completa',
            'Kinesiólogo miembro: acceso clínico restringido a sus pacientes asignados',
            'Recepción / Secretaría: gestión de agenda y pagos sin acceso a notas clínicas sensibles',
        ],
    },
    {
        icon: UserCheck,
        title: 'Directorio y Gestión de Pacientes',
        count: 5,
        features: [
            'Alta de paciente de forma manual o remota mediante código QR',
            'Directorio con búsqueda instantánea por nombre o RUT',
            'Actualización de datos demográficos y de contacto',
            'Baja controlada de registros según política de retención',
            'Línea de tiempo unificada del historial clínico del paciente',
        ],
    },
    {
        icon: BarChart3,
        title: 'Dashboard y Métricas del Centro',
        count: 6,
        features: [
            'Indicador de pacientes activos en el centro',
            'Resumen de citas del día y proyección semanal',
            'Conteo de nuevas admisiones QR completadas en el mes',
            'Total de sesiones kinésicas realizadas por período',
            'Tasa de cuestionarios funcionales respondidos',
            'Vista diferenciada para Dirección del Centro vs. Kinesiólogo Tratante',
        ],
    },
    {
        icon: Mail,
        title: 'Notificaciones Automáticas por Correo',
        count: 8,
        badge: '8 eventos',
        features: [
            'Confirmación al registrar un nuevo paciente',
            'Aviso al clínico cuando el paciente completa su anamnesis vía QR',
            'Envío de nueva pauta de ejercicios prescrita',
            'Aviso de actualización en pauta o indicación domiciliaria',
            'Envío de resumen al emitir el alta kinésica',
            'Confirmación inmediata al reservar una cita online',
            'Notificación de reagendamiento de hora',
            'Notificación de cancelación de cita',
        ],
    },
    {
        icon: Users,
        title: 'Gestión de Profesionales Clínicos',
        count: 4,
        features: [
            'Incorporar nuevos kinesiólogos al centro (exclusivo Admin)',
            'Ver directorio completo de profesionales del centro',
            'Configurar especialidad, horarios y capacidad de boxes por profesional',
            'Asignación y revocación de permisos administrativos',
        ],
    },
    {
        icon: StickyNote,
        title: 'Notas Clínicas Rápidas',
        count: 2,
        features: [
            'Registrar observaciones clínicas generales en la ficha del paciente',
            'Editar y mantener bitácora complementaria entre sesiones',
        ],
    },
    {
        icon: Lock,
        title: 'Autenticación y Sesión Segura',
        count: 4,
        features: [
            'Inicio de sesión con RUT validado y contraseña encriptada',
            'Sesión persistente opcional con cookies seguras',
            'Cierre de sesión inmediato y limpieza de credenciales locales',
            'Gestión de perfil profesional, firma y datos de contacto',
        ],
    },
]

const patientGroups: FeatureGroup[] = [
    {
        icon: Calendar,
        title: 'Portal de Agendamiento Online',
        count: 5,
        badge: 'Online 24/7',
        defaultOpen: true,
        features: [
            'Reservar hora kinésica 24/7 desde el enlace público del profesional o centro',
            'Autocompletado seguro para paciente habitual con RUT y fecha de nacimiento',
            'Enmascaramiento de datos sensibles durante la reserva pública (j***@correo.cl)',
            'Botón directo para agregar la cita a Google Calendar, Apple Calendar u Outlook',
            'Comprobante inmediato vía correo electrónico transaccional',
        ],
    },
    {
        icon: ClipboardList,
        title: 'Formulario Clínico Pre-Consulta — 14 páginas',
        count: 9,
        badge: '14 páginas',
        defaultOpen: true,
        features: [
            'Completar la anamnesis inicial desde el teléfono antes de asistir a la consulta',
            'Indicar ubicación del dolor e intensidad mediante escala EVA/ENA',
            'Declarar comorbilidades, cirugías y antecedentes médicos relevantes',
            'Registrar calidad y hábitos de sueño (horarios, despertares, descanso)',
            'Informar actividad física, ocupación y estilo de vida',
            'Responder tamizaje psicosocial (ánimo, estrés, red de apoyo)',
            'Registrar medicamentos actuales y alergias conocidas',
            'Expresar expectativas y objetivos funcionales de recuperación',
            'Firmar consentimiento informado digital con fecha y hora',
        ],
    },
    {
        icon: Dumbbell,
        title: 'Recepción de Pautas de Ejercicios en Casa',
        count: 4,
        badge: 'WhatsApp',
        features: [
            'Recibir la pauta personalizada directamente en su WhatsApp o correo electrónico',
            'Descargar PDF membretado con código de verificación de autenticidad',
            'Consultar instrucciones claras de ejecución para cada ejercicio',
            'Revisar series, repeticiones, tiempos de descanso y precauciones clínicas',
        ],
    },
    {
        icon: QrCode,
        title: 'Acceso Remoto con Token QR Único',
        count: 3,
        features: [
            'Escanear el código QR en recepción o abrir el enlace directo enviado por WhatsApp',
            'Ingresar sin crear cuentas ni recordar contraseñas mediante token de un solo uso',
            'Expiración automática del enlace una vez enviada la ficha para proteger su privacidad',
        ],
    },
    {
        icon: Scale,
        title: 'Derechos ARCO y Privacidad del Paciente',
        count: 4,
        badge: 'Privacidad',
        features: [
            'Solicitar ejercicio de derechos ARCO: Acceso, Rectificación, Cancelación y Oposición',
            'Recibir copia íntegra de su historial clínico en formatos interoperables (JSON/HTML/PDF)',
            'Resguardo de datos sensibles de salud alineado con Ley N° 20.584 y Ley N° 21.719',
            'Protección visual en box mediante bloqueo automático de pantalla por inactividad',
        ],
    },
    {
        icon: UserCheck,
        title: 'Identificación Nacional e Internacional',
        count: 2,
        features: [
            'Validación automática de RUT chileno con dígito verificador',
            'Soporte completo para pacientes extranjeros mediante número de pasaporte o DNI',
        ],
    },
    {
        icon: FileText,
        title: 'Informes de Evolución y Reembolso',
        count: 2,
        features: [
            'Recibir informes de evolución con comparativa objetiva del progreso funcional',
            'Certificados de asistencia y detalle de prestaciones listos para presentar en Isapres',
        ],
    },
]

/* ─── Collapsible group card ─── */
function GroupCard({
    group,
    isOpen,
    onToggle,
    variant,
}: {
    group: FeatureGroup
    isOpen: boolean
    onToggle: () => void
    variant: 'clinician' | 'patient'
}) {
    const Icon = group.icon
    const iconTone =
        variant === 'clinician'
            ? 'bg-brand/10 border border-brand/20 text-brand'
            : 'bg-emerald/10 border border-emerald/20 text-emerald'

    return (
        <div
            className="rounded-2xl border border-border bg-card overflow-hidden transition-colors hover:border-brand/30 shadow-2xs"
        >
            <button
                type="button"
                onClick={onToggle}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-surface/60 transition-colors"
                aria-expanded={isOpen}
            >
                <div className={`w-10 h-10 rounded-xl ${iconTone} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-display font-bold text-foreground text-sm">{group.title}</p>
                        {group.badge && (
                            <span className="text-[10px] font-bold text-brand bg-brand/8 border border-brand/15 rounded-full px-2 py-0.5">
                                {group.badge}
                            </span>
                        )}
                    </div>
                    <p className="text-xs text-foreground-muted mt-0.5">{group.count} capacidades incluidas</p>
                </div>
                <div className="flex-shrink-0 text-foreground-muted">
                    {isOpen ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
                </div>
            </button>

            {isOpen && (
                <div className="px-5 pb-5 border-t border-border/60 bg-surface/30">
                    <div className="flex flex-col gap-2 pt-4">
                        {group.features.map((feat, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 size={14} className="text-emerald flex-shrink-0 mt-0.5" aria-hidden="true" />
                                <p className="text-sm text-foreground-muted leading-relaxed">{feat}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export function FeaturesComplete() {
    const [openClinician, setOpenClinician] = useState<Record<number, boolean>>(() =>
        Object.fromEntries(clinicianGroups.map((g, idx) => [idx, Boolean(g.defaultOpen)]))
    )
    const [openPatient, setOpenPatient] = useState<Record<number, boolean>>(() =>
        Object.fromEntries(patientGroups.map((g, idx) => [idx, Boolean(g.defaultOpen)]))
    )

    const totalClinician = clinicianGroups.reduce((a, g) => a + g.count, 0)
    const totalPatient   = patientGroups.reduce((a, g)   => a + g.count, 0)

    const allExpanded =
        clinicianGroups.every((_, idx) => openClinician[idx]) &&
        patientGroups.every((_, idx) => openPatient[idx])

    const handleToggleAll = () => {
        const nextState = !allExpanded
        setOpenClinician(Object.fromEntries(clinicianGroups.map((_, idx) => [idx, nextState])))
        setOpenPatient(Object.fromEntries(patientGroups.map((_, idx) => [idx, nextState])))
    }

    return (
        <section
            id="funcionalidades"
            className="py-20 md:py-28 px-6 bg-background"
            aria-labelledby="features-complete-heading"
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2
                        id="features-complete-heading"
                        className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4 text-balance"
                    >
                        Catálogo técnico de{' '}
                        <span className="text-brand">módulos y capacidades</span>
                    </h2>
                    <p className="text-base sm:text-lg text-foreground-muted leading-relaxed mb-6">
                        Inspecciona las {totalClinician + totalPatient} funcionalidades desarrolladas para el flujo diario del kinesiólogo y la experiencia digital de sus pacientes.
                    </p>
                    <button
                        type="button"
                        onClick={handleToggleAll}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-card border border-border hover:border-brand hover:text-brand text-foreground transition-colors shadow-2xs"
                    >
                        {allExpanded ? (
                            <>
                                <ChevronUp size={14} aria-hidden="true" />
                                Contraer todos los módulos
                            </>
                        ) : (
                            <>
                                <ChevronDown size={14} aria-hidden="true" />
                                Expandir los {clinicianGroups.length + patientGroups.length} módulos
                            </>
                        )}
                    </button>
                </div>

                {/* Two columns: Clinicians + Patients */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* ── CLINICIANS ── */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                                <Stethoscope size={18} className="text-brand" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-foreground">Entorno del Profesional y Centro</h3>
                                <p className="text-xs text-foreground-muted">{totalClinician} capacidades en {clinicianGroups.length} módulos clínicos y administrativos</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {clinicianGroups.map((group, i) => (
                                <GroupCard
                                    key={group.title}
                                    group={group}
                                    isOpen={Boolean(openClinician[i])}
                                    onToggle={() =>
                                        setOpenClinician((prev) => ({ ...prev, [i]: !prev[i] }))
                                    }
                                    variant="clinician"
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── PATIENTS ── */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald/10 border border-emerald/20 flex items-center justify-center">
                                <Smartphone size={18} className="text-emerald" aria-hidden="true" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-xl text-foreground">Experiencia del Paciente</h3>
                                <p className="text-xs text-foreground-muted">{totalPatient} capacidades en {patientGroups.length} módulos de autoservicio y seguimiento</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-8">
                            {patientGroups.map((group, i) => (
                                <GroupCard
                                    key={group.title}
                                    group={group}
                                    isOpen={Boolean(openPatient[i])}
                                    onToggle={() =>
                                        setOpenPatient((prev) => ({ ...prev, [i]: !prev[i] }))
                                    }
                                    variant="patient"
                                />
                            ))}
                        </div>

                        {/* Deep-dive links to Research & Security */}
                        <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-2xs">
                            <h4 className="font-display font-bold text-lg text-foreground mb-2">
                                Documentación científica y normativa
                            </h4>
                            <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                                ¿Evalúas Kenkomed desde dirección clínica, TI o comité académico? Revisa las referencias bibliográficas de nuestras escalas y el detalle de nuestra arquitectura de seguridad.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Link
                                    href="/investigacion"
                                    className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-brand/40 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <BookOpen size={16} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-foreground group-hover:text-brand transition-colors flex items-center gap-1">
                                            Base científica y 13 escalas
                                            <ArrowRight size={12} aria-hidden="true" />
                                        </p>
                                        <p className="text-[11px] text-foreground-muted mt-0.5">
                                            Guías NICE, IASP, OMS y literatura de respaldo
                                        </p>
                                    </div>
                                </Link>
                                <Link
                                    href="/seguridad"
                                    className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border hover:border-emerald/40 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <ShieldCheck size={16} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-foreground group-hover:text-emerald transition-colors flex items-center gap-1">
                                            Seguridad y Ley 20.584 / 21.719
                                            <ArrowRight size={12} aria-hidden="true" />
                                        </p>
                                        <p className="text-[11px] text-foreground-muted mt-0.5">
                                            Auditoría de accesos, RBAC y portabilidad ARCO
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
