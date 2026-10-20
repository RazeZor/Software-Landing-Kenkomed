# 📖 Documentación del Proyecto — Kenkomed Landing Page

> **Kenkomed** es una plataforma clínica profesional diseñada específicamente para kinesiólogos, centros de rehabilitación y fisioterapeutas en Chile, integrando anamnesis remota por QR, ficha clínica estructurada SOAP, escalas validadas automatizadas y un Sistema de Soporte a la Decisión Clínica (DSS).

> Este repositorio contiene la **landing page** corporativa y portal comercial del producto, construida con **Next.js 16 (App Router)**, **React 19**, **TailwindCSS 4**, **TypeScript**, **shadcn/ui**, **Framer Motion**, **DotLottie** y micro-animaciones interactivas con **react-useanimations**.

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#-requisitos-previos)
2. [Instalación y Configuración](#-instalación-y-configuración)
3. [Comandos Disponibles](#-comandos-disponibles)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Stack Tecnológico](#-stack-tecnológico)
6. [Páginas de la Aplicación](#-páginas-de-la-aplicación)
7. [Arquitectura de Componentes](#-arquitectura-de-componentes)
8. [Animaciones y Micro-interacciones](#-animaciones-y-micro-interacciones)
9. [Hooks Personalizados](#-hooks-personalizados)
10. [Utilidades y Helpers](#-utilidades-y-helpers)
11. [Sistema de Diseño y Tokens](#-sistema-de-diseño-y-tokens)
12. [SEO, Schema.org y Rendimiento](#-seo-schemaorg-y-rendimiento)
13. [Archivos de Configuración](#-archivos-de-configuración)
14. [Despliegue](#-despliegue)
15. [Contacto del Equipo](#-contacto-del-equipo)

---

## 🔧 Requisitos Previos

| Herramienta | Versión Recomendada | Notas |
|---|---|---|
| **Node.js** | v20.x o v22.x LTS | Mínimo v18.17+ |
| **npm** | v10+ (incluido con Node.js) | Gestor de paquetes primario |
| **Git** | Versión reciente | Para control de versiones |

---

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/RazeZor/Software-Landing-Kenkomed.git
cd Software-Landing-Kenkomed
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```
El servidor local iniciará en [http://localhost:3000](http://localhost:3000).

---

## 📦 Comandos Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Next.js (Turbopack) |
| `npm run build` | Compila y optimiza la aplicación para producción (SSG/SSR) |
| `npm run start` | Inicia el servidor de producción local con el bundle generado |
| `npm run lint` | Ejecuta el linter ESLint para análisis estático del código |
| `npm run generate:favicons` | Script PowerShell para generar favicons e iconos PWA |

---

## 🗂 Estructura del Proyecto

```
Software-Landing-Kenkomed/
├── app/                              # Rutas del App Router (Next.js 16)
│   ├── layout.tsx                    # Layout raíz (Navbar, Footer, WhatsApp flotante, SEO)
│   ├── page.tsx                      # Página principal (Landing Page)
│   ├── globals.css                   # Variables CSS, tokens Hallmark Cobalt y resets
│   ├── blog/                         # Blog clínico y guías especializadas
│   │   ├── page.tsx                  # Listado de artículos y categorías
│   │   └── [slug]/page.tsx           # Artículos individuales con metadatos dinámicos
│   ├── demo/page.tsx                 # Video demo interactivo de Kenkomed
│   ├── demo-forms/page.tsx           # Playground de cuestionarios y admisión
│   ├── funcionalidades/page.tsx      # Catálogo exhaustivo de módulos y fichas
│   ├── investigacion/page.tsx        # Base científica, papers y validación DSS
│   ├── precios/page.tsx              # Planes, comparativa y calculadora de retorno
│   ├── privacidad/page.tsx           # Política de privacidad de datos de salud
│   ├── seguridad/page.tsx            # Cumplimiento Ley 21.719, cifrado y respaldo
│   ├── solucion/page.tsx             # Visión integral de la solución para kinesiología
│   └── terminos/page.tsx             # Términos y condiciones del servicio
│
├── components/                       # Componentes de negocio y módulos de sección
│   ├── navbar.tsx                    # Re-export de SiteHeader
│   ├── hero.tsx                      # Hero con slider circular, estadísticas y CTAs
│   ├── before-after.tsx              # Comparativa interactiva clínica (Papel vs Kenkomed)
│   ├── features.tsx                  # Feature stack paso a paso + CTA 2 columnas con Lottie
│   ├── interactive-system-demo.tsx   # Simulador paso a paso del software en vivo
│   ├── kenkomed-chat-showcase.tsx    # Demostración del asistente clínico inteligente
│   ├── home-mid-cta.tsx              # Statement CTA strip con chips y micro-animaciones
│   ├── pricing.tsx                   # Sección de precios con toggle mensual/anual
│   ├── faq-section.tsx               # Acordeón de preguntas frecuentes
│   ├── contact-form.tsx              # Formulario de contacto y solicitud de demo
│   ├── footer.tsx                    # Footer corporativo y navegación secundaria
│   ├── floating-whatsapp.tsx         # Botón flotante de WhatsApp con badge y tooltip
│   ├── medical-lottie.tsx            # Wrapper SSR-safe de DotLottie para medical.lottie
│   ├── json-ld.tsx                   # Esquemas JSON-LD (FAQPage, SoftwareApplication, etc.)
│   └── ui/                           # Primitivas y componentes visuales base
│       ├── site-header.tsx           # Navbar principal desktop + Drawer móvil editorial
│       ├── dropdown-navigation.tsx   # Menús desplegables con iconos animados
│       ├── animated-icon.tsx         # Wrapper seguro de react-useanimations (sin hydration mismatch)
│       ├── testimonial.tsx           # Testimonios con tarjetas oscuras, citas y roles
│       ├── demo.tsx                  # Tarjetas de reseñas con avatares y estrellas
│       └── ...                       # Componentes shadcn/ui (button, card, dialog, sheet, etc.)
│
├── hooks/                            # Custom React Hooks
│   ├── use-scroll-animation.ts       # Hooks de scroll (reveal, countUp, progress, parallax)
│   ├── use-mobile.ts                 # Detección responsiva de viewport móvil
│   └── use-toast.ts                  # Manejo de toasts y notificaciones
│
├── lib/                              # Helpers, utilidades y datos
│   ├── utils.ts                      # Helper cn() con clsx y tailwind-merge
│   ├── blog-data.ts                  # Base de datos local de artículos del blog
│   └── faq-data.ts                   # Preguntas y respuestas estructuradas
│
├── public/                           # Recursos estáticos
│   ├── medical.lottie                # Animación Lottie médica vectorial de alta definición
│   ├── medical.json                  # Respaldo JSON de la animación médica
│   ├── images/                       # Logotipos y fotografías del equipo/clínica
│   ├── software/                     # Capturas reales de la interfaz del sistema
│   └── favicon*                      # Favicons en múltiples resoluciones
│
├── package.json                      # Dependencias y scripts
├── tsconfig.json                     # Configuración estricta de TypeScript
└── next.config.mjs                   # Configuración del bundler y runtime Next.js
```

---

## 🛠 Stack Tecnológico

### Núcleo y Runtime
| Tecnología | Versión | Rol |
|---|---|---|
| **Next.js** | 16.1.6 | App Router, Server/Client Components, Turbopack, SSR/SSG |
| **React** | 19.2.4 | Biblioteca fundamental de interfaz de usuario |
| **TypeScript** | 5.7.3 | Tipado estático estricto y modelos de datos |

### Estilos y Diseño
| Tecnología | Versión | Rol |
|---|---|---|
| **TailwindCSS** | 4.2.0 | Framework CSS con directivas modernas (`@theme`) |
| **PostCSS** | 8.5+ | Procesador de estilos |
| **tw-animate-css** | 1.3.3 | Utilidades de animación fluida |

### Animaciones e Interactividad
| Biblioteca | Propósito |
|---|---|
| **@lottiefiles/dotlottie-react** | Reproductor vectorial de animaciones `.lottie` médicas |
| **react-useanimations** | Micro-animaciones SVG interactivas (hamburguesa, teléfono, pulso, checks, escudos) |
| **framer-motion** / **motion** | Animaciones de layout, transiciones de menús y scroll-linked motion |
| **canvas-confetti** | Micro-celebraciones y feedback visual |
| **@number-flow/react** | Animación suave de números y estadísticas |

### Componentes y Primitivas UI
| Biblioteca | Rol |
|---|---|
| **shadcn/ui** | Colección de componentes accesibles y personalizables |
| **Radix UI** | Primitivas headless (Dialog, Sheet, NavigationMenu, Accordion, Tooltip, etc.) |
| **React Icons (ri)** / **Lucide** | Iconografía médica, de flechas y utilitarias |
| **clsx + tailwind-merge** | Composición condicional de clases (`cn`) |

---

## 📄 Páginas de la Aplicación

### 1. Página de Inicio (`/`) — `app/page.tsx`
Orquesta la experiencia central de conversión y propuesta de valor:
1. **Hero**: Propuesta de valor, carrusel de capturas y métricas de impacto clínico.
2. **Before / After**: Comparativa visual entre la gestión manual (papel/Excel) y Kenkomed.
3. **SolucionTeaser**: Desglose paso a paso del flujo kinésico + **Bottom CTA** con layout de 2 columnas y animación vectorial médica en tiempo real (`medical.lottie`).
4. **KenkomedChatShowcase**: Vista previa interactiva de la inteligencia de apoyo clínico.
5. **Testimonials**: Testimonios reales de kinesiólogos en Chile con tarjetas oscuras y especialidades.
6. **HomeMidCta**: Strip minimalista con chips de garantía y micro-animaciones interactivas.
7. **Pricing**: Resumen de planes y transparencia tarifaria en pesos chilenos (CLP).
8. **FaqSection**: Respuestas a preguntas habituales sobre migración, software e Isapres.
9. **ContactForm**: Formulario para agendar demostración guiada de 30 minutos.

### 2. Solución (`/solucion`)
Explicación detallada de la arquitectura kinésica de Kenkomed: mapa corporal interactivo, banderas rojas, dosificación estructurada de ejercicios y evoluciones SOAP.

### 3. Funcionalidades (`/funcionalidades`)
Catálogo técnico de todas las herramientas: Admisión QR sin contacto, escalas clínicas automatizadas (EVA, PSFS, Oswestry, Barthel), panel de control y módulo de cobranzas y packs.

### 4. Precios (`/precios`)
Estructura de precios transparente:
- **Plan Individual**: Para kinesiólogos independientes.
- **Plan Pro / Centros**: Para clínicas con múltiples profesionales y control de caja.
- Comparativa completa de características y calculadora de ahorro de horas clínicas.

### 5. Investigación (`/investigacion`)
Fundamentos clínicos del DSS: evidencia científica, bibliografía biomédica, algoritmo de banderas rojas y respaldo documental en PDF descargable.

### 6. Blog (`/blog` y `/blog/[slug]`)
Artículos educativos y guías clínicas para posicionamiento orgánico (SEO): fichas electrónicas, código Fonasa/Isapre, telekinesiología y gestión de centros.

### 7. Seguridad y Privacidad (`/seguridad`, `/privacidad`, `/terminos`)
Cumplimiento normativo estricto con la Ley N° 21.719 sobre protección de datos personales en Chile, cifrado de datos de salud en tránsito y reposo, y confidencialidad médico-paciente.

---

## 🧩 Arquitectura de Componentes

### Componentes Clave

| Componente | Ruta | Descripción |
|---|---|---|
| `SiteHeader` | `components/ui/site-header.tsx` | Header fijo con scroll progress, menús desplegables enriquecidos y Drawer móvil editorial libre de clutter. |
| `DropdownNavigation` | `components/ui/dropdown-navigation.tsx` | Menú desplegable flotante con `framer-motion` y micro-iconos animados. |
| `AnimatedIcon` | `components/ui/animated-icon.tsx` | Envoltorio con control de montaje para renderizar `react-useanimations` de forma segura frente a hydration mismatches. |
| `MedicalLottie` | `components/medical-lottie.tsx` | Reproductor dinámico (`ssr: false`) para cargar archivos `.lottie` médicos con soporte de temas. |
| `Testimonial` | `components/ui/testimonial.tsx` | Tarjetas con hover zoom, degradados sutiles y testimonios de directores clínicos. |
| `FloatingWhatsApp` | `components/floating-whatsapp.tsx` | Botón flotante fijo para atención directa por WhatsApp con mensaje preconfigurado. |
| `InteractiveSystemDemo` | `components/interactive-system-demo.tsx` | Simulador interactivo que replica el flujo clínico dentro de la landing. |

---

## 🪄 Animaciones y Micro-interacciones

El proyecto utiliza un enfoque de **micro-animaciones con propósito clínico**:
- **Menú hamburguesa inteligente (`menu4`)**: Transición fluida entre las 3 líneas y la 'X' de cierre sin saltos visuales.
- **Iconos animados de navegación**:
  - `activity`: DSS Clínico y botón de demo (pulso cardíaco continuo).
  - `userCheck`: Admisión QR (icono de paciente verificado).
  - `clipboard`: Fichas digitales y notas SOAP.
  - `trendingUp`: Monitoreo y curvas de recuperación de pacientes.
  - `shield`: Seguridad de datos clínicos y Ley 21.719.
  - `phoneCall`: Soporte directo vía WhatsApp con animación de timbre suave.
  - `checkmark`: Lista de beneficios del CTA con trazo de confirmación animado.

---

## 🪝 Hooks Personalizados

### `use-scroll-animation.ts`
- **`useReveal<T>()`**: Observa elementos con `IntersectionObserver` para activar reveals suaves al hacer scroll.
- **`useCountUp()`**: Incrementa contadores numéricos de manera fluida con curva cúbica.
- **`useScrollProgress()`**: Devuelve el progreso vertical de lectura de la página (0 a 1).
- **`useMousePosition()`**: Coordenadas relativas del cursor para efectos de resplandor ambiental (*ambient glow*).

### `use-mobile.ts`
Detecta cambios en la media query móvil (`max-width: 768px`) para adaptar menús y comportamientos táctiles.

---

## 🎨 Sistema de Diseño y Tokens

La landing aplica una dirección de arte minimalista y médica basada en **Cobalt**:
- **Fondo papel (`--color-paper`)**: Fondo limpio con alto contraste y soporte de modo oscuro.
- **Tinta principal (`--color-ink`)**: Tipografía nítida para encabezados y lectura prolongada.
- **Acento Kenko (`--color-accent` / `--kenko-cobalt`)**: Azul cobalto médico de alta confiabilidad (`#0284c7` / oklch).
- **Esmeralda Clínico (`--emerald`)**: Verde esmeralda de salud y éxito clínico (`#10b981`).
- **Tipografías**:
  - **Sora** (`var(--font-display)`): Títulos y números destacados.
  - **Inter** (`var(--font-body)`): Texto corrido y fichas clínicas.
  - **Geist Mono** (`var(--font-outlier)`): Eyebrows, badges técnicos y chips de garantía.

---

## 🔍 SEO, Schema.org, Analítica y Privacidad

- **Google Tag Manager & Google Consent Mode v2**:
  - Contenedor oficial: `GTM-5LPCDJM9`.
  - Integrado con **Google Consent Mode v2**: Inicializa por defecto en estado denegado (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`) y se actualiza en tiempo real mediante `gtag('consent', 'update', ...)` cuando el usuario guarda sus preferencias.
  - Componente `<CookieBanner />`: Banner flotante no invasivo, con vista resumida y vista detallada para configurar cookies técnicas, analíticas y de marketing conforme a la **Ley N° 19.628 de Protección de Datos Personales en Chile** y estándares internacionales.
  - Re-apertura accesible: Enlace "Cookies" en el pie de página que permite modificar o revocar consentimientos en cualquier momento.
- **Metadatos completos**: OpenGraph, Twitter Cards, Canonical URLs y Viewport optimizado.
- **Datos estructurados (JSON-LD)**:
  - `SoftwareApplication`: Identificación del software de kinesiología.
  - `FAQPage`: Esquema semántico de preguntas frecuentes para Google Rich Snippets.
  - `MedicalBusiness`: Contexto de software especializado en salud.
- **Carga diferida**: Componentes pesados (carruseles, chat showcase, lotties) usan `next/dynamic` para maximizar el First Contentful Paint (FCP) y el Largest Contentful Paint (LCP).

---

## 🌐 Despliegue

La aplicación está lista para desplegarse de manera continua en plataformas como **Vercel**:

```bash
# Generar build de producción local
npm run build

# Probar el bundle de producción localmente
npm run start
```

---

## 📞 Contacto y Soporte

- **Sitio Web Oficial:** [kenkomed.cl](https://kenkomed.cl)
- **WhatsApp Comercial:** [+56 9 3710 5872](https://wa.me/56937105872)
- **Email:** contacto@kenkomed.cl
- **Ubicación:** Santiago de Chile
- **Instagram:** [@kenkomed.cl](https://www.instagram.com/kenkomed.cl/)
