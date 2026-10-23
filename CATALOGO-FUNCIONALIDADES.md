# Catálogo Integral de Funcionalidades — KenkoMed

> **Documento maestro para Landing Page (`Software-Landing-Kenkomed`), material comercial, propuestas y documentación de producto.**  
> *Última actualización: 23 de Octubre de 2026 | Versión de plataforma: KenkoMed v2.4 (Producción: `https://software.kenkomed.cl`)*

---

## 🧭 Propuesta de Valor

**KenkoMed** es la plataforma clínica integral en la nube diseñada específicamente para centros de kinesiología, rehabilitación, fisioterapia y profesionales de la salud en Chile y Latinoamérica. 

A diferencia de los softwares médicos genéricos, KenkoMed está construido desde su núcleo para responder a las dinámicas reales del quehacer kinésico: episodios de tratamiento por ciclos terapéuticos, baterías de pruebas funcionales validadas, prescripción de pautas de ejercicios domiciliarios con catálogo anatómico, agendamiento online con soporte multi-box en tiempo real y cumplimiento estricto del marco normativo chileno (**Ley 21.719 de Protección de Datos Personales, Ley 20.584 de Derechos y Deberes del Paciente y Ley 19.628**).

---

## 📑 Resumen de Módulos para la Landing Page

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             ECOSISTEMA KENKOMED                             │
├─────────────────────┬─────────────────────┬─────────────────────────────────┤
│   GESTIÓN CLÍNICA   │     PACIENTES Y     │        ADMINISTRACIÓN Y         │
│   ESPECIALIZADA     │    AGENDAMIENTO     │            CENTRO               │
├─────────────────────┼─────────────────────┼─────────────────────────────────┤
│ • Ficha Kinésica    │ • Agenda Online     │ • Soporte Multi-Box             │
│ • Ciclos Clínicos   │ • Portal Pacientes  │ • Pagos y Packs de Sesiones     │
│ • Cuestionarios     │ • Recordatorios     │ • Multiclínica / Multitenant    │
│ • DSS & Banderas    │ • Formulario QR     │ • Estadísticas y Métricas       │
│ • Pautas Ejercicios │ • WhatsApp / Email  │ • Auditoría Leyes 21.719/20.584 │
└─────────────────────┴─────────────────────┴─────────────────────────────────┘
```

---

## 1. 📅 Agendamiento Online y Agenda Clínica Inteligente

### 1.1. Portal de Reservas Público Personalizado
- **Enlace Único y Seguro por Profesional y Centro:** Cada kinesiólogo cuenta con su página pública mediante slug seguro (`/reservar/<slug-profesional>/`), protegiendo el RUT del profesional de la URL. Cada clínica dispone de su catálogo de equipo y especialidades (`/reservar/centro/<id>/`).
- **Diseño Móvil de Alta Conversión con Branding Dual:**
  - Co-branding integrado: logotipo oficial de KenkoMed con indicador en vivo *"Agenda en línea activa"* co-existiendo con la marca y logotipo propio del profesional o centro en tarjeta traslúcida.
  - Avatar clínico en alta resolución con tratamiento de capas (`relative z-20`, borde de contraste blanco `border-4` y sombra de profundidad) que garantiza legibilidad y presencia en cualquier dispositivo móvil.
  - Badges de años de experiencia, especialidad clínica, redes sociales integradas (Instagram, LinkedIn, sitio web) y selector interactivo de fechas en tiempo real.
- **Flujo de Paciente Doble con Privacidad Reforzada (Cero Fuga de Datos):**
  - **Paciente Habitual (Verificación en 2 Pasos):** Validación segura mediante **RUT + Fecha de Nacimiento** con protección estricta contra fuerza bruta (*Rate Limiting* por IP de máx. 5 intentos y bloqueo temporal de 15 min). Al validarse, se expide un **Token criptográfico temporal firmado con HMAC (`TimestampSigner`, validez de 1 hora)** y se muestran los datos de contacto enmascarados (ej: `j***@gmail.com`). La reserva se confirma directamente en su ficha médica sin exponer datos personales ni permitir raspado de información sensible.
  - **Paciente Nuevo:** Formulario ágil de primera consulta que genera automáticamente su ficha clínica preliminar en el centro.
- **Confirmación Inmediata Multicanal:** Generación de comprobante con opción directa de *"Añadir a Google Calendar / Apple Calendar / Outlook"* y envío automático de correos transaccionales de confirmación tanto al paciente como al clínico tratante.

### 1.2. Concurrencia Robusta, Disponibilidad Real y Soporte Multi-Box
- **Capacidad Multi-Box en Paralelo:** Si un clínico o centro atiende con 2 o 3 boxes simultáneos (ej: paciente en electroterapia/crioterapia y otro en gimnasio), el sistema admite exactamente el número de cupos configurados.
- **Cálculo Dinámico de Bloques Horarios:** El motor de disponibilidad cruza en tiempo real el horario semanal del profesional (`DisponibilidadHorariaClinico`), pausas y colaciones configuradas (`pausa_inicio`, `pausa_fin`), duración parametrizable de sesión (ej: 30, 45, 60 min) y días inactivos/festivos.
- **Prevención Matemática de Doble Reserva (Cero Overbooking):** Bloqueo pesimista en base de datos (`select_for_update`) con transacciones atómicas. Si dos pacientes intentan confirmar el último cupo en la misma fracción de segundo, el sistema garantiza consistencia matemática entregando respuesta limpia (`HTTP 409 Conflict`) sin colisiones ni citas duplicadas.

### 1.3. Calendario Clínico del Centro y Personal
- **Vistas Flexibles:** Visualización por día, semana, mes y agenda cronológica tipo lista.
- **Gestión Visual de Estados:** Identificación cromática clara de citas (Agendada, Confirmada, En Sala de Espera, En Box/Atención, Realizada, Cancelada, No Asistió).
- **Arrastrar y Soltar (*Drag & Drop*):** Reprogramación intuitiva de citas con validación automática de solapamientos horarios.
- **Agenda Unificada de Centro:** Vista consolidada para recepcionistas y directores médicos con filtro simultáneo por profesional y box de atención.

---

## 2. 🩻 Ficha Clínica Electrónica y Expediente Kinésico

### 2.1. Expediente Clínico Unificado
- **Identificación Universal:** Validación en tiempo real de RUT chileno (módulo 11) y soporte nativo para pacientes extranjeros (Pasaporte, DNI de origen u otros documentos) con formato internacional.
- **Perfil Sociodemográfico y Previsión:** Cobertura de salud (FONASA, Isapres, Particular, Convenios), ocupación, actividad física y datos de contacto de emergencia.
- **Historial Clínico Continuo:** Registro cronológico de evoluciones, notas clínicas rápidas, antecedentes mórbidos y quirúrgicos.

### 2.2. Ciclos Clínicos (Episodios de Atención)
- **Gestión por Episodio Terapéutico:** Agrupa las atenciones de un paciente bajo un diagnóstico u objetivo de tratamiento concreto (ej: *"Rehabilitación Post-Operatoria LCA — Rodilla Derecha"*).
- **Trazabilidad de Metas y Sesiones:** Control de sesiones planificadas vs. ejecutadas con indicadores visuales de avance.
- **Alta Kinésica Estructurada:** Resumen formal de cierre de ciclo con comparativa de dolor, funcionalidad inicial vs. final (deltas funcionales objetivos) y recomendaciones de mantención.

### 2.3. Sistema de Soporte a Decisiones Clínicas (DSS)
- **Algoritmo de Detección de Banderas Rojas (*Red Flags*):** Alerta temprana sobre síntomas de alarma que contraindican tratamiento kinésico directo y sugieren derivación médica urgente.
- **Identificación de Banderas Amarillas (*Yellow Flags*):** Factores psicosociales, catastrofismo y creencias de miedo-evitación que pueden cronificar el dolor del paciente.
- **Generación Automática de Informes:** Resumen clínico estructurado de anamnesis con recomendaciones clínicas asistidas por computadora.

### 2.4. Formulario Remoto y Anamnesis por Código QR
- **Cero Papel en Sala de Espera:** El paciente escanea un código QR en recepción o recibe un enlace temporal seguro en su WhatsApp.
- **Llenado en su Propio Smartphone:** Completa su anamnesis previa, mapa de dolor e historial médico antes de ingresar al box.
- **Integración Inmediata:** Los datos ingresan automáticamente a la ficha del paciente para revisión del tratante, ahorrando hasta 15 minutos por primera consulta.

---

## 3. 📊 Batería de Cuestionarios y Escalas Funcionales Validadas

KenkoMed incorpora el compendio más exhaustivo de escalas estandarizadas en kinesiología, con cálculo automático de puntajes, estratificación de severidad y gráficos de evolución:

| Cuestionario | Propósito y Región Clínica | Métrica Evaluada |
|---|---|---|
| **EVA / ENA** | Dolor agudo y crónico (todas las patologías) | Escala Visual / Numérica 0 a 10 |
| **GROC** | Percepción global de cambio | Escala de -7 a +7 (Mejoría vs Empeoramiento) |
| **PSFS** | Escala Funcional Específica del Paciente | Capacidad en 3 a 5 actividades clave del paciente |
| **Oswestry (ODI)** | Columna lumbar | Porcentaje de discapacidad por lumbalgia |
| **LEFS** | Extremidad inferior (cadera, rodilla, tobillo, pie) | Capacidad funcional en 20 actividades cotidianas |
| **QuickDASH** | Extremidad superior (hombro, codo, muñeca, mano) | Discapacidad y síntomas musculoesqueléticos |
| **WOMAC** | Artrosis de cadera y rodilla | Dolor, rigidez y capacidad funcional |
| **EQ-5D** | Calidad de vida general | Movilidad, cuidado personal, dolor, ansiedad/depresión |
| **Índice de Barthel** | Adulto mayor y neuro-rehabilitación | Independencia en 10 actividades de la vida diaria |
| **TUG** | Adulto mayor y equilibrio dinámico | Riesgo de caídas en segundos (*Timed Up and Go*) |
| **Escala de Berg** | Equilibrio funcional y estabilidad | 14 pruebas de equilibrio estático y dinámico |
| **Tinetti** | Movilidad y marcha | Calidad de la marcha y balance postural |
| **Screening DSS** | Tamizaje de banderas rojas | Criterios de derivación médica de urgencia |

*Todas las evaluaciones generan gráficos comparativos entre sesiones para demostrar objetivamente la evolución al paciente o al médico derivador.*

---

## 4. 🏋️ Pautas de Ejercicios en Casa (Prescripción Terapéutica Digital)

### 4.1. Catálogo Clínico de Ejercicios
- **Biblioteca Curada por Regiones Anatómicas:**
  - Columna Cervical y Dorsal
  - Hombro y Cintura Escapular
  - Columna Lumbar y Pelvis
  - Cadera y Rodilla
  - Tobillo y Pie
- **Fichas Técnicas Completas:** Cada ejercicio contiene nombre técnico, descripción paso a paso de la ejecución biomecánicamente correcta, dosificación recomendada (series, repeticiones, tiempo de descanso, frecuencia semanal) y alertas de dolor o precauciones.

### 4.2. Prescripción y Envío Multicanal al Paciente
- **Modelo Clínico Auditado (`PautaEjercicio`):** Cada pauta emitida queda formalmente registrada en la ficha del paciente con trazabilidad en el log inmutable de auditoría médica (`AuditoriaAcceso`).
- **Buscador Inteligente con Paginación:** Búsqueda rápida por nombre, apellido o RUT con directorio de pacientes del centro.
- **Exportación e Impresión Membretada:** Generación de **PDF profesional** listo para imprimir en formato A4 con membrete, logotipo del centro y código de verificación.
- **Entrega Automatizada por Correo:** Envío directo de la pauta en plantilla HTML responsiva de alta calidad (`pauta_ejercicios_creada.html`) legible en teléfonos móviles.
- **Despacho Instantáneo a WhatsApp:** Botón con enlace preconfigurado y mensaje personalizado para enviar la pauta directamente al chat del paciente con un solo clic.

---

## 5. 💳 Finanzas, Pagos y Packs de Sesiones

- **Registro de Pagos Ágil:** Registro de pagos en efectivo, transferencia bancaria, débito, crédito o bonos de previsión.
- **Packs de Tratamiento (Bono / Paquete de Sesiones):**
  - Creación de planes de 5, 10 o 12 sesiones de kinesiología con precio preferencial.
  - Descuento automático de sesiones cada vez que el paciente asiste a consulta.
  - Indicador visual permanente en la ficha: *"Sesión 4 de 10 — 6 restantes"*.
- **Control de Cuentas y Deudas:** Resumen de saldos pendientes por paciente para evitar atenciones sin cobro.
- **Trazabilidad Financiera:** Historial de transacciones, estados de pago y anulación justificada con registro de auditoría.

---

## 6. 🔒 Seguridad, Cumplimiento Legal y Privacidad (Leyes 21.719, 20.584 y 19.628)

KenkoMed está adaptado a las exigencias normativas chilenas e internacionales más rigurosas del sector salud:

- **Marco Legal Chileno Integral:**
  - **Ley 21.719 (Protección de Datos Personales):** Consentimiento informado electrónico con registro de fecha, hora e IP; gestión integral de **Derechos ARCO** (Acceso, Rectificación, Cancelación y Oposición); y exportación de expediente clínico completo en formatos interoperables (JSON y HTML estructurado).
  - **Ley 20.584 (Derechos y Deberes de las Personas en Salud):** Confidencialidad de la ficha médica electrónica y respaldo inalterable de evoluciones.
  - **Ley 19.628 (Protección de la Vida Privada):** Doble factor de autenticación y enmascaramiento de datos en interfaces públicas para evitar vulnerabilidades de enumeración o filtración masiva de datos de pacientes.
- **Registro Inmutable de Auditoría Médica (`AuditoriaAcceso`):** Registro de cada consulta de ficha, edición de notas, emisión de pautas, eliminación o exportación de datos con identificación del clínico responsable, timestamp e IP.
- **Bloqueo Automático contra *Shoulder Surfing*:** Si el profesional se aleja del computador durante 10 minutos, la pantalla se bloquea automáticamente para evitar que terceros o acompañantes visualicen datos de salud en el box.
- **Monitoreo CENS y Uptime (`/health/`):** Endpoint de supervisión 24/7 para verificar la salud de base de datos y servicios en tiempo real.

---

## 7. 🏢 Modelo Multiclínica y Roles de Acceso

- **Multitenancy Estricto:** Cada clínica cuenta con su entorno aislado. Los datos de los pacientes de un centro nunca son visibles por otro centro.
- **Clínico Multicentro:** Un mismo kinesiólogo puede atender en dos clínicas distintas y cambiar de contexto con 1 solo clic sin cerrar sesión.
- **Perfiles y Permisos Diferenciados:**
  - **Administrador del Centro / Director:** Acceso a métricas globales, configuración de boxes, gestión de equipo y finanzas.
  - **Kinesiólogo / Clínico:** Gestión de agenda propia, fichas clínicas asignadas, cuestionarios y pautas de ejercicios.
  - **Secretaría / Recepción:** Control de agenda de citas, recepción de pacientes y cobros, sin acceso no autorizado a notas clínicas confidenciales.

---

## 8. 📱 Experiencia de Usuario y Asistente E.V.E

- **Asistente Virtual E.V.E:** Asistente vectorizada moderna integrada en el menú y los módulos para guiar el onboarding de nuevos terapeutas y resolver dudas de uso en segundos.
- **Tours Interactivos Paso a Paso (Driver.js):** Recorridos visuales explicativos en las pantallas clave (Lista de Pacientes, Calendario, Panel de Control).
- **Diseño Adaptativo Premium:**
  - **Desktop (1280px+):** Sidebar blanco con submenús flotantes rápidos al pasar el cursor y atajo colapsable para maximizar el área de trabajo clínico.
  - **Tablets e iPads:** Navegación táctil fluida con dock inferior optimizado y drawer lateral deslizante.
  - **Smartphones (iPhone 15+ y Android):** Aceleración por hardware (`translateZ`), respeto del área segura (*safe area*) del home indicator y botones táctiles optimizados para el uso con una sola mano.

---

## 💡 Textos y Titulares Sugeridos para la Landing Page

### Hero Section
> **Titular:** *El Software Clínico Creado por y para Kinesiólogos.*  
> **Subtítulo:** *Automatiza tu agendamiento sin sobrecupos, evalúa con cuestionarios funcionales validados, prescribe pautas de ejercicios en segundos y cumple con las Leyes de Datos Personales y Derechos del Paciente en Chile.*  
> **CTA Principal:** *Comenzar Prueba Gratis* | *Ver Demostración en Vivo*

### Bloque de Beneficios Clave
1. **Agenda Multi-Box sin Choques:** *"Atiende a más pacientes en paralelo con slots inteligentes por box y prevención atómica de sobrecupos."*
2. **Kinesiología Basada en Evidencia:** *"Mide el progreso real con más de 12 escalas funcionales estandarizadas (Oswestry, LEFS, QuickDASH, WOMAC) y gráficos comparativos automáticos."*
3. **Pautas de Ejercicios en 1 Clic:** *"Prescribe rutinas domiciliarias con catálogo anatómico auditado y envíalas directamente por WhatsApp o correo al paciente."*
4. **Anamnesis Remota con Código QR:** *"Ahorra hasta 15 minutos por primera consulta permitiendo que el paciente llene su historial desde su celular antes de entrar al box."*
5. **Cumplimiento Legal y Privacidad Blindada:** *"Protección integral bajo Ley 21.719, Ley 20.584 y Ley 19.628 con doble factor seguro, auditoría médica inmutable y derechos ARCO."*
