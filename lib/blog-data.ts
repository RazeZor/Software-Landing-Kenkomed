export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  description: string
  category: 'Normativa & Legal' | 'Práctica Clínica' | 'Gestión & Finanzas' | 'Escalas & Evidencia' | 'Comparativas'
  author: {
    name: string
    role: string
    avatar: string
  }
  publishedAt: string
  readTime: string
  featured?: boolean
  tags: string[]
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ficha-kinesica-digital',
    title: 'Ficha Kinésica Digital en Chile: Guía Completa, Normativa Ley 20.584 y Ley 21.719',
    subtitle: 'Requisitos legales, protección de datos sensibles y estructura recomendada para expedientes clínicos en kinesiología.',
    description: 'Conoce los requisitos exigidos por la Ley 20.584 de Deberes y Derechos del Paciente y la Ley 21.719 de Protección de Datos Personales para fichas kinésicas electrónicas en Chile.',
    category: 'Normativa & Legal',
    author: {
      name: 'Equipo Clínico Kenkomed',
      role: 'Asesoría Clínica & Legal',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-01',
    readTime: '8 min de lectura',
    featured: true,
    tags: ['Ficha Kinésica', 'Ley 20.584', 'Ley 21.719', 'Chile', 'Normativa Médica'],
    content: `
## Introducción a la Ficha Kinésica Digital en Chile

La digitalización de la consulta kinésica en Chile ha dejado de ser un lujo optativo para convertirse en un estándar indispensable de eficiencia y cumplimiento normativo. Sin embargo, migrar del papel a la ficha clínica electrónica implica cumplir estrictamente con el marco legal chileno vigente.

En este artículo analizaremos los pilares exigidos por la **Ley N° 20.584** (Deberes y Derechos de los Pacientes) y la **Ley N° 21.719** (Protección de Datos Personales y Datos Sensibles de Salud), así como la estructura idónea de una ficha kinésica especializada.

---

## 1. Marco Legal Chileno para Fichas Clínicas

### Ley N° 20.584: Titularidad y Confidencialidad
La ley establece que la ficha clínica es de propiedad del paciente, mientras que el centro o kinesiólogo es el depositario y custodio de la información. Sus principios clave incluyen:

1. **Custodia y Reserva**: La información clínica es confidencial. Solo pueden acceder el paciente, sus representantes legales o profesionales directamente involucrados en la atención.
2. **Conservación de Registros**: Los registros clínicos deben ser conservados por al menos **15 años**.
3. **Disponibilidad para Reembolsos**: El paciente tiene derecho a solicitar copia de su ficha o certificado de prestaciones para trámites en Isapres, FONASA o Seguros Complementarios.

### Ley N° 21.719: Protección de Datos Personales Sensibles
Los datos de salud corresponden a la categoría de **datos sensibles**. Para cumplir con la nueva institucionalidad de protección de datos en Chile:

- Se requiere consentimiento explicito del titular para el tratamiento de datos.
- Debe garantizarse la trazabilidad (saber quién, cuándo y desde qué IP se accedió o modificó una ficha).
- Está prohibida la venta o compartición no autorizada de datos de pacientes con terceros.

---

## 2. Estructura Recomendada de una Ficha Kinésica Profesional

A diferencia de una ficha médica generalista, la ficha kinésica requiere módulos anatómicos y de evaluación biomecánica. Una ficha completa debe incluir:

1. **Datos de Identificación del Paciente**: Nombre completo, RUT, fecha de nacimiento, previsión (FONASA/Isapre), contacto de emergencia.
2. **Anamnesis Próxima y Remota**: Motivo de consulta, antecedente del trauma o dolencia, síntomas actuales, dolor según escala EVA/NPRS.
3. **Evaluación Física Biomecánica**: Rango de movimiento articular (ROM), fuerza muscular (MRC), pruebas especiales ortopédicas y postura.
4. **Cuestionarios y Escalas Validadas**: Registro de puntajes basales como PSFS, Barthel, Oswestry, GROC, WOMAC o DASH.
5. **Diagnóstico Kinésico y Objetivos**: Definición de deficiencias estructurales, limitaciones en la actividad y restricciones en la participación (CIF - OMS).
6. **Plan de Tratamiento y Evoluciones SOAP**: Registro sesión a sesión del progreso del paciente y ajustes de dosificación de ejercicio.

---

## 3. Ventajas de Implementar un Software DSS Kinésico como Kenkomed

El uso de plantillas genéricas o documentos Word sin encriptación expone al profesional a multas por infracción a la Ley de Protección de Datos y pérdida de información.

Con un software especializado como **Kenkomed**:
- Las fichas están resguardadas en la nube con encriptación de nivel bancario (AES-256).
- La firma digital y el código de verificación garantizan la validez legal ante Isapres y entidades reguladoras.
- Se ahorra hasta un 80% del tiempo de redacción mediante admisiones automatizadas con código QR.
`,
  },
  {
    slug: 'plantilla-evolucion-soap-kinesiologia',
    title: 'Plantilla de Evolución SOAP para Kinesiólogos: Formato Práctico y Ejemplos Clínicos',
    subtitle: 'Aprende a estructurar tus notas de evolución kinésica con la metodología SOAP de manera ágil y estandarizada.',
    description: 'Descarga y copia la plantilla de evolución SOAP adaptada a kinesiología musculoesquelética y deportiva con ejemplos reales.',
    category: 'Práctica Clínica',
    author: {
      name: 'Klgo. Cristóbal Morales',
      role: 'Especialista en Kinesiología Musculoesquelética',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-02',
    readTime: '6 min de lectura',
    featured: false,
    tags: ['SOAP', 'Evolución Kinésica', 'Plantilla', 'Kinesiología', 'Ficha Clínica'],
    content: `
## ¿Qué es la Metodología SOAP en Kinesiología?

El formato **SOAP** (Subjetivo, Objetivo, Análisis, Plan) es el estándar internacional más recomendado para la redacción de notas clínicas en salud física y rehabilitación. Permite mantener un expediente estructurado, comprensible para cualquier colega del equipo y con alto valor legal.

---

## Estructura del Formato SOAP Kinésico

### S — Subjetivo (Lo que el paciente refiere)
Registra la percepción del paciente sobre sus síntomas desde la última sesión.
- Dolor actual según escala EVA (0 a 10).
- Cambios en las actividades de la vida diaria (AVD).
- Cumplimiento de las pautas de ejercicios en el hogar.

### O — Objetivo (Lo que el kinesiólogo evalúa y mide)
Datos cuantitativos y reproducibles recolectados durante la sesión.
- Rango de movimiento articular (ROM activo/pasivo con goniómetro).
- Evaluación del dolor a la palpación o maniobras específicas.
- Test de carga o resistencia muscular.
- Técnicas aplicadas en la sesión (ej. ejercicio terapéutico, terapia manual, agentes físicos).

### A — Análisis / Evaluación (El juicio clínico del profesional)
Interpretación de la evolución comparando los datos actuales con la línea de base.
- ¿Hubo respuesta positiva a la carga aplicada?
- Identificación de banderas amarillas o rojas.
- Nivel de progreso hacia las metas funcionales del ciclo clínico.

### P — Plan (Pasos siguientes y dosificación)
Plan de acción para las próximas sesiones.
- Pauta de ejercicios domiciliarios y ajustes de carga.
- Frecuencia de atenciones recomendada.
- Criterios de reevaluación o solicitud de exámenes.

---

## Ejemplo Práctico: Sesión 4 de Reconstrucción de LCA (Rodilla)

\`\`\`text
[S - Subjetivo]
Paciente refiere molestia leve (EVA 2/10) al subir escaleras. Sin inflamación matutina ni episodios de inestabilidad. Realizó la pauta domiciliaria 4 veces esta semana sin dolor.

[O - Objetivo]
- ROM Rodilla Derecha: Flexión 125° (previo 115°), Extensión completa 0°.
- Test de Fuerza Cuádriceps: 4/5 en escala MRC. Sin derrame articular perceptible (Test de la ola negativo).
- Intervención realizada: Sentadilla bulgara asistida (3x10), Puente unilateral en fitball (3x12), Ciclismo estático 15 min a 75 RPM.

[A - Análisis]
Evolución favorable en ROM de flexión (+10°) y tolerancia a la carga cuadricipital. Adecuada adherencia a ejercicios.

[P - Plan]
Aumentar carga en ejercicios de cadena cinética cerrada en próxima sesión. Mantener pauta de fortalecimiento domiciliario 3v/semana.
\`\`\`

---

## Optimiza tus evoluciones SOAP con Kenkomed

En **Kenkomed**, las evoluciones SOAP están integradas directamente en la historia clínica digital del paciente. Con plantillas predefinidas y gráficos interactivos de progreso, puedes redactar tus evoluciones en menos de 2 minutos por sesión.
`,
  },
  {
    slug: 'escala-eva-kinesiologia',
    title: 'Escala EVA (Escala Visual Analógica) en Kinesiología: Evaluación e Interpretación del Dolor',
    subtitle: 'Cómo utilizar la escala EVA y NPRS de forma rigurosa en tu evaluación kinésica inicial y seguimiento.',
    description: 'Guía clínica sobre la aplicación de la Escala Visual Analógica (EVA) en kinesiterapia, valores de corte y diferencia mínima clínicamente importante (MCID).',
    category: 'Escalas & Evidencia',
    author: {
      name: 'Dra. María Paz Silva',
      role: 'Investigación & Outcome Measures',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-03',
    readTime: '5 min de lectura',
    featured: false,
    tags: ['Escala EVA', 'Dolor', 'Evaluación Kinésica', 'NPRS', 'DSS'],
    content: `
## La Escala Visual Analógica (EVA) en la Práctica Kinésica

La medición del dolor es un pilar fundamental en la kinesiología. La **Escala Visual Analógica (EVA)** y su variante la **Escala Numérica del Dolor (NPRS)** son las herramientas más validadas a nivel mundial para cuantificar la intensidad del dolor percibido por el paciente.

---

## Interpretación de Puntajes y Valores de Corte

| Puntaje EVA | Clasificación del Dolor | Impacto Funcional Habitual |
| :--- | :--- | :--- |
| **0** | Sin Dolor | Función articular y muscular normal |
| **1 – 3** | Dolor Leve | Molestia tolerable, no interrumpe el sueño |
| **4 – 6** | Dolor Moderado | Interfiere con AVD y rendimiento deportivo |
| **7 – 10** | Dolor Severo / Intenso | Incapacidad funcional alta, altera el sueño y marcha |

---

## Diferencia Mínima Clínicamente Importante (MCID)

Un error común es considerar cualquier baja de puntaje como un éxito clínico. En la literatura científica kinésica, la **MCID** para la escala EVA se sitúa generalmente en **2 puntos (o una reducción del 30%)**.

Esto significa que una disminución de EVA 7 a EVA 5 representa un cambio clínicamente significativo en la percepción del dolor del paciente, mientras que una variación de EVA 7 a EVA 6.5 puede estar dentro del margen de error o fluctuación diaria.

---

## Registro Automatizado en el DSS de Kenkomed

El módulo **DSS (Clinical Decision Support System)** de **Kenkomed** permite ingresar el valor EVA en cada sesión mediante una interfaz táctil intuitiva y genera automáticamente:
- Gráficos longitudinales de curva de dolor por paciente.
- Alertas automáticas ante estancamiento del dolor (EVA sin variación durante 4+ sesiones).
- Comparativa de EVA vs Rango de Movimiento (ROM).
`,
  },
  {
    slug: 'detalle-sesiones-reembolso-isapre',
    title: 'Detalle de Sesiones de Kinesiología para Reembolso Isapre y Seguro Complementario en Chile',
    subtitle: 'Requisitos indispensables que exigen las aseguradoras de salud en Chile para autorizar el reembolso de prestaciones kinésicas.',
    description: 'Aprende los datos obligatorios que debe incluir el detalle de sesiones e informe kinésico para evitar rechazos en Banmédica, Colmena, Consalud y Cruz Blanca.',
    category: 'Gestión & Finanzas',
    author: {
      name: 'Equipo Kenkomed',
      role: 'Gestión Médica y Previsión',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-03',
    readTime: '7 min de lectura',
    featured: false,
    tags: ['Reembolso Isapre', 'FONASA', 'Seguro Complementario', 'Boleta', 'Códigos FONASA'],
    content: `
## Requisitos de Reembolso para Sesiones de Kinesiología

Uno de los mayores dolores de cabeza para los pacientes que se atienden de forma particular con kinesiólogos es la solicitud de **Detalle de Sesiones** requerida por las Isapres y Seguros Complementarios de Salud en Chile.

Si el informe kinésico carece de alguno de los datos exigidos por la normativa de la Superintendencia de Salud, la aseguradora rechazará la solicitud de reembolso, causando fricción con el paciente.

---

## Lista de Verificación de Datos Obligatorios

Para que un Detalle de Sesiones kinésicas sea aprobado sin objeciones, debe contener:

1. **Datos del Profesional Tratante**:
   - Nombre completo del kinesiólogo.
   - RUT del profesional.
   - Número de Registro Nacional de Prestadores Individuales de Salud (SIS).
   - Firma y timbre (o firma digital verificable).

2. **Datos del Paciente**:
   - Nombre completo y RUT del paciente.
   - Diagnóstico médico de origen (según orden médica emitida por médico tratante).

3. **Desglose de Sesiones**:
   - Fecha exacta de cada sesión realizada (DD/MM/AAAA).
   - Código arancelario FONASA asociado a la prestación (ej. \`0601001\` para evaluación kinésica, \`0601003\` para tratamiento kinésico integral).
   - Valor cobrado por sesión.

4. **N° de Boleta de Honorarios Asociada**:
   - Número de boleta de honorarios o comprobante de pago vinculado a las sesiones prestadas.

---

## Generación Automática de Informes en Kenkomed

Con **Kenkomed**, al finalizar un ciclo clínico puedes exportar con un solo clic el **Informe de Detalle de Sesiones en PDF** con tu logo, firma digital encriptada, código QR de verificación de validez y desglose automático de fechas y códigos FONASA.
`,
  },
  {
    slug: 'boleta-honorarios-kinesiologo',
    title: 'Boleta de Honorarios para Kinesiólogos en Chile: Guía Tributaria, Retención SII y Cotizaciones',
    subtitle: 'Todo lo que necesitas saber sobre impuestos, retención tributaria del SII y cotizaciones previsionales obligatorias para kinesiólogos independientes.',
    description: 'Guía práctica para emitir boletas de honorarios en el SII siendo kinesiólogo en Chile. Porcentajes de retención, cobertura de salud (FONASA/Isapre) y cotización AFP.',
    category: 'Gestión & Finanzas',
    author: {
      name: 'Equipo Kenkomed',
      role: 'Asesoría Tributaria y Legal',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-04',
    readTime: '6 min de lectura',
    featured: false,
    tags: ['Boleta de Honorarios', 'SII', 'Impuestos', 'Kinesiólogo Independiente', 'Previsión'],
    content: `
## Aspectos Tributarios del Kinesiólogo Independiente en Chile

Emitir boletas de honorarios electrónicas a través del sitio del **Servicio de Impuestos Internos (SII)** es la modalidad de tributación más habitual para los kinesiólogos que ejercen de forma libre o en consultas particulares.

A continuación explicamos las reglas tributarias vigentes y cómo planificar adecuadamente tus finanzas profesionales.

---

## 1. Porcentaje de Retención en Boletas de Honorarios

De acuerdo con la ley de incremento gradual de la retención de impuestos a honorarios en Chile, el porcentaje de retención se ajusta anualmente hasta alcanzar el **17% en el año 2028**.

- **Retención vigente (2025–2026)**: **13.75% / 14%**
- **Efecto en el cobro**: Si fijas el valor neto de tu sesión kinésica en **$20.000 CLP**, la boleta emitida por el total bruto con retención debe calcularse dividiendo el monto neto por el factor de retención correspondiente.

---

## 2. Cotizaciones Obligatorias de Previsión y Salud

Al emitir boletas de honorarios en Segunda Categoría, tus retenciones son destinadas en la Operación Renta anual al pago de:

1. **Seguro de Accidentes del Trabajo y Enfermedades Profesionales** (ACHS / IST / Mutual).
2. **Seguro de Acompañamiento Niños y Niñas (Ley SANNA)**.
3. **Salud**: Cobertura en FONASA o Isapre.
4. **AFP / Pensiones**: Fondo de pensiones obligatorio.

---

## 3. Módulo de Cobros y Registro de Boletas en Kenkomed

Para mantener un control impecable de tus ingresos, **Kenkomed** incluye un **Módulo de Caja y Pagos** donde puedes registrar las boletas emitidas por paciente, conciliar pagos en efectivo, transferencia o Webpay, y descargar resúmenes contables mensuales listos para enviar a tu contador.
`,
  },
  {
    slug: 'software-para-kinesiologos-comparativa',
    title: 'Software para Kinesiólogos en Chile: Comparativa de Sistemas de Gestión Clínica',
    subtitle: 'Analizamos las diferencias entre Kenkomed, AgendaPro, Medilink, Kibo y VitalDesk para ayudarte a elegir la mejor opción.',
    description: 'Comparativa 2026 de software médico y de kinesiología en Chile. Analizamos fichas clínicas, escalas DSS, admisión QR, agenda y precios por profesional.',
    category: 'Comparativas',
    author: {
      name: 'Equipo de Producto Kenkomed',
      role: 'Análisis de Software Clínico',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-04',
    readTime: '9 min de lectura',
    featured: true,
    tags: ['Software Kinesiología', 'AgendaPro', 'Medilink', 'Kenkomed', 'Comparativa'],
    content: `
## Elección del Software Clínico para tu Consulta Kinésica

Elegir la plataforma tecnológica adecuada para tu consulta o centro de kinesiología impacta directamente en tu tiempo administrativo, en la adherencia del paciente y en el cumplimiento normativo de tu clínica.

En esta comparativa objetiva evaluamos los sistemas más presentes en el mercado chileno.

---

## Tabla Comparativa de Funcionalidades

| Criterio / Plataforma | **Kenkomed** | AgendaPro | Medilink | Kibo |
| :--- | :--- | :--- | :--- | :--- |
| **Especialidad Principal** | 🎯 100% Kinesiología | Agenda General | Medicina / Dental | Kinesiología / Estética |
| **Ficha Kinésica DSS** | ✅ Incluida (Escalas validadas) | ❌ Genérica | ❌ Genérica | ⚠️ Básica |
| **Admisión Remota QR** | ✅ De 14 páginas automatizada | ❌ No disponible | ❌ No disponible | ❌ No disponible |
| **Prescripción de Ejercicios** | ✅ Integrada con envío | ❌ No disponible | ❌ No disponible | ⚠️ Limitada |
| **Módulo de Caja y Packs** | ✅ Incluido sin costo extra | ⚠️ Cobro adicional | ⚠️ Cobro adicional | ⚠️ Cobro adicional |
| **Transparencia de Precios** | ✅ Claro desde $15.990 CLP | ⚠️ Varía según plan | ⚠️ Cotización requerida | ⚠️ Cotización requerida |

---

## ¿Por qué elegir Kenkomed?

Mientras que plataformas como AgendaPro o Medilink son excelentes agendadores genéricos para peluquerías, spas o consultas médicas generales, **Kenkomed** fue construido desde su origen escuchando la neurobiología del dolor, las escalas kinésicas (EVA, PSFS, Barthel, GROC) y las necesidades reales de los kinesiólogos en Chile.
`,
  },
  {
    slug: 'escalas-clinicas-kinesiologia',
    title: 'Escalas de Evaluación Kinésica Validadas: PSFS, Barthel, GROC, WOMAC y Oswestry',
    subtitle: 'Guía de uso clínico de los cuestionarios más aplicados en fisioterapia y cómo utilizarlos para fundamentar altas clínicas.',
    description: 'Aprende a aplicar las escalas clínicas PSFS, Barthel, GROC, WOMAC y Oswestry en tu evaluación kinesiológica diaria.',
    category: 'Escalas & Evidencia',
    author: {
      name: 'Dra. María Paz Silva',
      role: 'Investigación & Outcome Measures',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-05',
    readTime: '8 min de lectura',
    featured: false,
    tags: ['Escalas Clínicas', 'PSFS', 'Barthel', 'GROC', 'Evidencia Clínica'],
    content: `
## La Importancia de las Escalas Validadas en Kinesiología

El uso de **escalas clínicas y cuestionarios estandarizados** permite transformar impresiones subjetivas en indicadores cuantificables objetivamente. Esto no solo fortalece el juicio clínico, sino que respalda informes ante médicos derivadores, aseguradoras y comisiones médicas.

---

## 1. Patient-Specific Functional Scale (PSFS)
La **PSFS** es una de las escalas más sensibles a los cambios funcionales. El paciente identifica de 3 a 5 actividades específicas que le resulta difícil o imposible realizar debido a su condición (ej. correr 5 km, cargar a su hijo, dormir sobre el hombro afectado) y las puntúa de 0 a 10.

- **MCID (Cambio Mínimo Significativo)**: 2 puntos promedio.

---

## 2. Global Rating of Change (GROC)
La escala **GROC** mide la percepción global del paciente sobre su mejoría o empeoramiento desde el inicio del tratamiento en una escala de 15 puntos (-7 a +7).

- **Puntaje +4 o superior**: Representa una mejoría moderada a alta clínicamente relevante.

---

## 3. Índice de Barthel
Utilizado frecuentemente en kinesiología neuro-rehabilitadora y gerontológica, evalúa la independencia en 10 actividades de la vida diaria (bañarse, vestirse, trasladarse, continencia).

---

## Motor de Decisión Clínica DSS de Kenkomed

**Kenkomed** integra **13 escalas clínicas validadas** con cálculo automático de puntajes, interpretación de severidad instantánea y generación de gráficos comparativos para el alta kinésica.
`,
  },
  {
    slug: 'telemedicina-kinesiologia-chile',
    title: 'Telemedicina y Firma Digital en Kinesiología en Chile: Requisitos y Consentimiento Informado',
    subtitle: 'Aspectos legales y prácticos de la atención kinésica a distancia y prescripción remota de ejercicios.',
    description: 'Requisitos del MINSAL para telekinesiología en Chile, formularios de consentimiento informado remoto y firma digital.',
    category: 'Normativa & Legal',
    author: {
      name: 'Equipo Clínico Kenkomed',
      role: 'Telemedicina & Innovación',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-05',
    readTime: '6 min de lectura',
    featured: false,
    tags: ['Telemedicina', 'Telekinesiología', 'Firma Digital', 'MINSAL', 'Consentimiento'],
    content: `
## Normativa de Telekinesiología en Chile

La teleatención kinésica ha demostrado ser un complemento sumamente valioso para el monitoreo de ejercicios en el hogar, el seguimiento de pacientes en zonas rurales y la telerrehabilitación neuromuscular.

---

## Requisitos Esenciales para la Atención a Distancia

1. **Consentimiento Informado Remoto**: El paciente debe aceptar expresamente ser atendido mediante telemedicina y ser informado de las limitaciones de la evaluación virtual.
2. **Plataforma Segura**: Las sesiones deben realizarse en sistemas con cifrado de punto a punto y sin grabación no autorizada.
3. **Firma y Registro en Ficha Clínica**: Cada sesión remota debe registrarse en la historia clínica digital con la misma exhaustividad que una consulta presencial.

---

## Prescripción Digital de Ejercicios en Kenkomed

Con **Kenkomed**, puedes enviar a tus pacientes sus pautas de ejercicios con instrucciones claras, series, repeticiones y videos explicativos directamente a su correo o WhatsApp con trazabilidad completa.
`,
  },
  {
    slug: 'historia-clinica-electronica-kinesiologia',
    title: 'Historia Clínica Electrónica para Kinesiólogos: Trazabilidad, Seguridad y Auditoría de Datos',
    subtitle: 'Por qué abandonar las carpetas de papel y planillas Excel vulnerables en tu consulta kinésica.',
    description: 'Descubre los riesgos de mantener fichas kinésicas en papel o Excel y cómo la historia clínica electrónica en la nube protege tu práctica profesional.',
    category: 'Normativa & Legal',
    author: {
      name: 'Equipo de Seguridad Kenkomed',
      role: 'Ciberseguridad & Privacidad',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-05',
    readTime: '7 min de lectura',
    featured: false,
    tags: ['Historia Clínica Electrónica', 'Seguridad de Datos', 'Excel vs Software', 'Kinesiología'],
    content: `
## Los Riesgos del Papel y las Planillas Excel

Muchos kinesiólogos independientes continúan administrando sus registros de pacientes en cuadernos de papel o archivos Excel almacenados en su computador personal. Esta práctica conlleva serios riesgos:

- **Riesgo de Pérdida y Fuga**: Robo de computador, daño en disco duro o extravío físico de la libreta.
- **Incumplimiento de la Ley 21.719**: Carece de registros de auditoría (logs) que demuestren quién modificó una ficha o quién accedió a los datos de salud.
- **Dificultad de Trabajo en Equipo**: En clínicas con 2 o más profesionales, compartir planillas genera duplicaciones y errores de versión.

---

## Estándares de Seguridad de Kenkomed

**Kenkomed** ofrece:
- Almacenamiento seguro en la nube con respaldos automáticos diarios.
- Encriptación SSL/TLS de 256 bits para todas las transmisiones de datos.
- Perfiles de acceso basados en roles (Director, Kinesiólogo, Secretaria).
`,
  },
  {
    slug: 'gestion-centro-kinesiologia',
    title: 'Cómo Administrar un Centro de Kinesiología: Agenda, Cobros, Packs de Sesiones y Métricas',
    subtitle: 'Estrategias de gestión operativa para aumentar la rentabilidad de tu centro de rehabilitación física.',
    description: 'Guía práctica de administración para centros de kinesiología: control de no-shows, gestión de bonos y packs de sesiones, y análisis de rendimiento por box.',
    category: 'Gestión & Finanzas',
    author: {
      name: 'Equipo de Gestión Kenkomed',
      role: 'Consultoría Operativa',
      avatar: '/images/LogoKenko.png',
    },
    publishedAt: '2026-10-05',
    readTime: '8 min de lectura',
    featured: false,
    tags: ['Gestión Clínica', 'Packs de Sesiones', 'Ausentismo', 'Kinesiología', 'Rendimiento'],
    content: `
## Claves para Administrar un Centro Kinésico Exitoso

Administrar un centro de kinesiología con múltiples profesionales exige equilibrar la excelencia asistencial con la sostenibilidad económica de la clínica.

---

## 1. Reducción de Ausentismo (No-Shows)
El ausentismo no programado paraliza la agenda y reduce la ocupación de los boxes de atención. La implementación de **recordatorios automáticos por WhatsApp y correo electrónico** reduce la tasa de no-shows hasta en un 40%.

---

## 2. Gestión Eficiente de Packs y Bonos de Sesiones
En kinesiología es habitual vender paquetes de 10 o 12 sesiones de rehabilitación. Llevar este control en papel o cuadernos suele derivar en cobros no realizados o confusión en las sesiones restantes.

Con **Kenkomed**, el módulo de **Bolsillo de Sesiones** descuenta automáticamente las sesiones consumidas al confirmar la cita y avisa cuando el paciente requiere renovar su paquete.

---

## 3. Métricas de Rendimiento por Profesional
Monitorea la cantidad de pacientes atendidos, tasa de altas médicas otorgadas y recaudación mensual por cada kinesiólogo de tu centro con los **Dashboards Gerenciales** de Kenkomed.
`,
  },
]
