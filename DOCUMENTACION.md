# 📖 Documentación del Proyecto — Kenkomed Landing Page

> **Kenkomed** es un software clínico profesional diseñado específicamente para kinesiólogos y fisioterapeutas en Chile, con un Sistema de Soporte a la Decisión Clínica (DSS).

> Este repositorio contiene la **landing page** del producto, construida con **Next.js 16**, **TailwindCSS 4**, **shadcn/ui**, y **TypeScript**.

---

## 📋 Tabla de Contenidos

1. [Requisitos Previos](#-requisitos-previos)
2. [Instalación](#-instalación)
3. [Comandos Disponibles](#-comandos-disponibles)
4. [Estructura del Proyecto](#-estructura-del-proyecto)
5. [Stack Tecnológico](#-stack-tecnológico)
6. [Páginas de la Aplicación](#-páginas-de-la-aplicación)
7. [Componentes](#-componentes)
8. [Hooks Personalizados](#-hooks-personalizados)
9. [Utilidades](#-utilidades)
10. [Estilos y Diseño](#-estilos-y-diseño)
11. [Archivos de Configuración](#-archivos-de-configuración)
12. [Assets y Recursos Estáticos](#-assets-y-recursos-estáticos)
13. [SEO y Metadatos](#-seo-y-metadatos)
14. [Despliegue](#-despliegue)
15. [Guía de Contribución](#-guía-de-contribución)

---

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

| Herramienta | Versión Mínima | Enlace de Descarga |
|---|---|---|
| **Node.js** | v18.17+ | [nodejs.org](https://nodejs.org/) |
| **npm** | v9+ (incluido con Node.js) | — |
| **Git** | Cualquier versión reciente | [git-scm.com](https://git-scm.com/) |

> **Nota:** También puedes usar `pnpm` como gestor de paquetes (el proyecto incluye `pnpm-lock.yaml`).

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd Software-Landing-Kenkomed
```

### 2. Instalar dependencias

Con **npm**:
```bash
npm install
```

O con **pnpm**:
```bash
pnpm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:3000`.

### 4. Abrir en el navegador

Visita [http://localhost:3000](http://localhost:3000) para ver la landing page.

---

## 📦 Comandos Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la versión de producción optimizada |
| `npm run start` | Inicia el servidor con la build de producción |
| `npm run lint` | Ejecuta ESLint para analizar el código |

---

## 🗂 Estructura del Proyecto

```
Software-Landing-Kenkomed/
├── app/                          # App Router de Next.js (páginas y layout)
│   ├── layout.tsx                # Layout raíz (fuentes, metadatos SEO, viewport)
│   ├── page.tsx                  # Página principal (Home)
│   ├── globals.css               # Estilos globales + variables CSS + animaciones
│   ├── demo/
│   │   └── page.tsx              # Página "Demo del Software"
│   └── investigacion/
│       └── page.tsx              # Página "Investigación y Evidencia Científica"
│
├── components/                   # Componentes React reutilizables
│   ├── navbar.tsx                # Barra de navegación (desktop + móvil)
│   ├── hero.tsx                  # Sección hero con carousel de imágenes
│   ├── features.tsx              # Funcionalidades + Product Showcase
│   ├── pricing.tsx               # Planes y precios
│   ├── contact-form.tsx          # Formulario de contacto
│   ├── team.tsx                  # Equipo del proyecto
│   ├── testimonials.tsx          # Testimonios (disponible pero no en uso)
│   ├── footer.tsx                # Pie de página
│   ├── theme-provider.tsx        # Proveedor de temas (next-themes)
│   └── ui/                       # 57 componentes UI base (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── toast.tsx
│       └── ... (y 52 más)
│
├── hooks/                        # Custom React Hooks
│   ├── use-scroll-animation.ts   # Animaciones de scroll (reveal, counter, parallax)
│   ├── use-mobile.ts             # Detección de dispositivo móvil
│   └── use-toast.ts              # Sistema de notificaciones toast
│
├── lib/                          # Utilidades y helpers
│   └── utils.ts                  # Función cn() para clases CSS condicionales
│
├── styles/                       # Estilos adicionales
│   └── globals.css               # Variables CSS adicionales (design tokens)
│
├── public/                       # Archivos estáticos
│   ├── images/                   # Imágenes del sitio (fotos del equipo, hero, etc.)
│   ├── software/                 # Capturas del software (DSS, EVA, Panel, etc.)
│   ├── icon.svg                  # Favicon SVG
│   ├── apple-icon.png            # Icono para Apple
│   └── placeholder-*.{png,svg,jpg}  # Imágenes placeholder
│
├── package.json                  # Dependencias y scripts del proyecto
├── tsconfig.json                 # Configuración de TypeScript
├── next.config.mjs               # Configuración de Next.js
├── postcss.config.mjs            # Configuración de PostCSS (TailwindCSS)
├── components.json               # Configuración de shadcn/ui
└── .gitignore                    # Archivos ignorados por Git
```

---

## 🛠 Stack Tecnológico

### Framework y Runtime
| Tecnología | Versión | Propósito |
|---|---|---|
| **Next.js** | 16.1.6 | Framework React con App Router y SSR |
| **React** | 19.2.4 | Biblioteca de interfaz de usuario |
| **TypeScript** | 5.7.3 | Tipado estático para JavaScript |

### Estilos
| Tecnología | Versión | Propósito |
|---|---|---|
| **TailwindCSS** | 4.2.0 | Framework de CSS utilitario |
| **tw-animate-css** | 1.3.3 | Animaciones CSS para Tailwind |
| **PostCSS** | 8.5+ | Procesador CSS (pipeline de Tailwind) |

### Componentes UI
| Tecnología | Propósito |
|---|---|
| **shadcn/ui** (estilo `new-york`) | Biblioteca de componentes base |
| **Radix UI** | Primitivas de UI accesibles (20+ paquetes) |
| **Lucide React** | Iconografía SVG |
| **class-variance-authority** | Variantes de componentes |
| **clsx + tailwind-merge** | Merge inteligente de clases CSS |

### Formularios y Validación
| Tecnología | Propósito |
|---|---|
| **React Hook Form** | Manejo de formularios |
| **Zod** | Esquemas de validación |
| **@hookform/resolvers** | Integración Zod + React Hook Form |

### Otros
| Tecnología | Propósito |
|---|---|
| **next-themes** | Soporte dark/light mode |
| **recharts** | Gráficos y visualización de datos |
| **sonner** | Notificaciones toast |
| **embla-carousel-react** | Carousel/slider |
| **@vercel/analytics** | Analítica web |

---

## 📄 Páginas de la Aplicación

### 1. Página Principal (`app/page.tsx`)

La **homepage** compone las siguientes secciones en orden:

```
Navbar → Hero → ProductShowcase → Features → Team → ContactForm → Footer
```

**Secciones incluidas:**
- **Navbar**: Navegación fija con barra de progreso de scroll, versión desktop y móvil.
- **Hero**: Titular principal con carousel circular de imágenes, estadísticas animadas, trust badges y CTA.
- **Product Showcase**: 3 bloques de producto (DSS Clínico, Cuestionarios, App Móvil) con carousels de imágenes y animaciones de entrada.
- **Features**: Grid de 8 tarjetas con las funcionalidades del software.
- **Team**: Equipo de 5 miembros con fotos, roles y LinkedIn.
- **Contact Form**: Formulario de contacto con campos (nombre, email, teléfono, clínica, mensaje).
- **Footer**: Pie de página con links, contacto, redes sociales y branding.

---

### 2. Página Demo (`app/demo/page.tsx`)

Muestra el software en acción con:

- **Video embed de YouTube** con thumbnail personalizado y botón play.
- **Highlights**: 4 tarjetas (Agenda, Fichas, Reportes DSS, App Móvil).
- **Galería de capturas**: 12 screenshots reales del software en grid responsive.
- **Social proof strip**: Testimonios y trust badges.
- **CTA final** con botón de solicitar demo.

**Video ID de YouTube:** `3ECdRZUSPlw`

---

### 3. Página Investigación (`app/investigacion/page.tsx`)

Página enfocada en la base científica del producto:

- **El Problema**: Diagnóstico de la realidad tecnológica en salud en Chile.
- **El Costo de no Actuar**: Estadísticas sobre errores diagnósticos.
- **Nuestra Solución**: Explicación del DSS como diferenciador.
- **Validación**: Respaldo universitario, guías internacionales, MINSAL.
- **Escalas Clínicas**: 7 instrumentos (EVA, PSFS, Barthel, GROC, EQ-5D, ENA, Screening).
- **Flujo DSS**: 9 pasos del proceso de anamnesis inteligente con diagrama visual.
- **Documentación**: 6 documentos PDF descargables (protocolo, validación, algoritmo, etc.).

---

## 🧩 Componentes

### Componentes de Sección (en `components/`)

| Componente | Archivo | Descripción |
|---|---|---|
| `Navbar` | `navbar.tsx` | Barra de navegación fija con scroll progress, menú responsive y CTA. Usa `useScrollProgress` para la barra de avance. |
| `Hero` | `hero.tsx` | Sección hero con carousel circular auto-rotativo, estadísticas animadas (`useCountUp`), tracking de mouse para efecto glow, y ticker horizontal infinito. |
| `Features` | `features.tsx` | Grid de 8 tarjetas de funcionalidades con reveal escalonado. También exporta `ProductShowcase`. |
| `ProductShowcase` | `features.tsx` | 3 bloques con texto + carousel de imágenes (DSS, Cuestionarios, App Móvil). Usa `ImageCarousel` interno con autoplay. |
| `Pricing` | `pricing.tsx` | 3 planes de precios (Básico, Profesional, Clínica) con toggle mensual/anual. Precios en CLP con formato `Intl.NumberFormat`. |
| `ContactForm` | `contact-form.tsx` | Formulario de 5 campos con estados de loading y éxito. Submit simulado (requiere API real). |
| `Team` | `team.tsx` | Grid de 5 miembros con foto, rol, bio y link a LinkedIn. Animación de entrada escalonada. |
| `Footer` | `footer.tsx` | Footer completo con logo, contacto (email, teléfono, ubicación), links organizados por categoría, redes sociales y copyright. |
| `Testimonials` | `testimonials.tsx` | Componente disponible pero **no en uso** en la página principal. |

### Componentes shadcn/ui (en `components/ui/`)

El proyecto incluye **57 componentes base** de shadcn/ui con el estilo `new-york`. Estos son componentes de UI primitivos reutilizables:

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`, `button`, `button-group`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `empty`, `field`, `form`, `hover-card`, `input`, `input-group`, `input-otp`, `item`, `kbd`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `sonner`, `spinner`, `switch`, `table`, `tabs`, `textarea`, `toast`, `toaster`, `toggle`, `toggle-group`, `tooltip`, `use-mobile`, `use-toast`

---

## 🪝 Hooks Personalizados

### `use-scroll-animation.ts`

Contiene **5 hooks** para animaciones e interactividad:

| Hook | Descripción | Parámetros principales |
|---|---|---|
| `useReveal<T>()` | Detecta cuando un elemento entra al viewport usando `IntersectionObserver`. Devuelve `{ ref, isVisible }`. | `threshold`, `rootMargin`, `once` |
| `useCountUp()` | Contador animado que va de 0 al valor objetivo con ease-out cúbico. | `end`, `isActive`, `duration`, `prefix`, `suffix` |
| `useScrollProgress()` | Devuelve un valor de 0 a 1 indicando el progreso de scroll de la página. | — |
| `useMousePosition()` | Trackea la posición del mouse dentro de un contenedor, normalizada a 0-1. | `containerRef` |
| `useParallax()` | Calcula un offset de parallax basado en la posición de scroll relativa al elemento. | `speed` |

### `use-mobile.ts`

Detecta si el dispositivo es móvil usando `window.matchMedia` con breakpoint de 768px. Devuelve `boolean`.

### `use-toast.ts`

Sistema de notificaciones toast con API imperativa. Permite crear, actualizar y descartar toasts programáticamente. Incluye gestión de estado con `actionTypes` y un store de toasts.

---

## 🔨 Utilidades

### `lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

La función `cn()` combina `clsx` y `tailwind-merge` para:
- Concatenar clases CSS condicionalmente.
- Resolver conflictos de clases Tailwind (ej: `p-2 p-4` → `p-4`).

Se usa en **todos** los componentes del proyecto.

---

## 🎨 Estilos y Diseño

### Sistema de Colores (variables CSS custom)

El proyecto define un sistema de diseño completo con variables CSS en `app/globals.css` y `styles/globals.css`:

| Variable | Propósito | Ejemplo |
|---|---|---|
| `--brand` | Color principal de la marca | Azul/teal |
| `--brand-dark` | Variante oscura de la marca | — |
| `--emerald` | Color de éxito/positivo | Verde esmeralda |
| `--foreground` | Texto principal | Negro/oscuro |
| `--foreground-muted` | Texto secundario | Gris |
| `--background` | Fondo principal | Blanco |
| `--surface` | Fondo de secciones alternadas | Gris claro |
| `--card` | Fondo de tarjetas | Blanco |
| `--border` | Color de bordes | Gris claro |
| `--primary` | Color primario (botones CTA) | Azul/teal |
| `--primary-foreground` | Texto sobre primario | Blanco |

### Fuentes

Se usan 3 fuentes de Google Fonts:

| Fuente | Variable CSS | Uso |
|---|---|---|
| **Inter** | `--font-inter` | Texto general (`font-sans`) |
| **Sora** | `--font-sora` | Títulos y encabezados (`font-display`) |
| **Geist Mono** | `--font-geist-mono` | Código y datos (`font-mono`) |

### Animaciones

El proyecto incluye animaciones CSS definidas en `app/globals.css`:

- `animate-fade-up` — Entrada con fade + slide desde abajo
- `animate-scale-in` — Entrada con scale desde 0.9
- `animate-slide-left` / `animate-slide-right` — Entrada lateral
- `animate-ticker` — Scroll horizontal infinito (ticker)
- `animate-float` — Flotación suave en Y
- `animate-bounce` — Rebote
- `animate-pulse` — Pulsación
- `scroll-reveal` — Reveal al scroll con transición CSS
- `scroll-reveal-scale` — Reveal al scroll con escala
- Clases `stagger-1` a `stagger-6` — Delays escalonados
- Clases `delay-100` a `delay-500` — Delays numéricos

### Efectos Visuales

- **Glass morphism** (`.glass`): `backdrop-filter: blur()` con fondo semitransparente.
- **Hero glow** (`.hero-glow`): Efecto de luz que sigue al mouse.
- **Text gradient** (`.text-gradient`): Gradiente en textos para títulos.
- **Parallax scroll**: Elementos de fondo que se mueven a distinta velocidad al hacer scroll.
- **Scroll progress bar**: Barra superior que indica el avance del scroll.

---

## ⚙️ Archivos de Configuración

### `next.config.mjs`

```javascript
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,   // Ignora errores TS en build
  },
  images: {
    unoptimized: true,          // Desactiva la optimización de imágenes (útil para export estático)
  },
}
```

### `tsconfig.json`

- **Target:** ES6
- **Module Resolution:** Bundler
- **JSX:** `react-jsx`
- **Strict mode:** Habilitado
- **Path aliases:** `@/*` mapea a la raíz del proyecto (ej: `@/components/navbar`)

### `postcss.config.mjs`

Usa el plugin `@tailwindcss/postcss` para procesar TailwindCSS v4.

### `components.json`

Configuración de shadcn/ui:
- **Estilo:** `new-york`
- **RSC:** Habilitado (React Server Components)
- **Base color:** `neutral`
- **Variables CSS:** Habilitadas
- **Icon library:** `lucide`

### `.gitignore`

Archivos ignorados por Git:
- `node_modules/` — Dependencias
- `.next/` — Build cache de Next.js
- `.env*.local` — Variables de entorno locales
- `.DS_Store` — Archivos de sistema macOS
- Archivos de runtime de v0

---

## 📁 Assets y Recursos Estáticos

### Imágenes del Sitio (`public/images/`)

| Archivo | Descripción |
|---|---|
| `logo.jpeg` | Logo de Kenkomed |
| `fotonacho.jpeg` | Foto del miembro del equipo (Ignacio Castillo) |
| `fotopelao.jpeg` | Foto del miembro del equipo (Ignacio Cabrera) |
| `fotoNico.jpeg` | Foto del miembro del equipo (Nicolás Jeldres) |
| `fotoseba.jpeg` | Foto del miembro del equipo (Sebastián Molina) |
| `fotomaxi.jpeg` | Foto del miembro del equipo (Maximiliano Cuevas) |
| `kinesio-hero-1/2/3.png` | Imágenes del carousel hero |
| `dss-flow-diagram.png` | Diagrama de flujo del DSS |

### Capturas del Software (`public/software/`)

| Archivo | Descripción |
|---|---|
| `Panel.jpg` | Panel de control principal |
| `DSS.jpg` | Sistema DSS de apoyo a la decisión |
| `Graficos.jpg` | Gráficos y visualización de datos |
| `FichaClinica.jpg` | Ficha clínica digital |
| `EVA.jpg` | Cuestionario Escala Visual Analógica |
| `Bartel.jpg` | Cuestionario Barthel |
| `PSFS.jpg` | Escala Funcional Específica del Paciente |
| `Groc.jpg` | Cuestionario GROC |
| `Condiciones.jpg` | Gestión de condiciones clínicas |
| `Ingreso.jpg` | Pantalla de ingreso de pacientes |
| `Recetas.jpg` | Gestión de recetas médicas |
| `Cuerpo.jpg` | Mapa corporal interactivo |

---

## 🔍 SEO y Metadatos

Los metadatos SEO están definidos en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Kenkomed — Software para Kinesiólogos | Sistema DSS de Gestión Clínica',
  description: 'Kenkomed: Sistema de Soporte a la Decisión Clínica (DSS)...',
  keywords: [
    'software kinesiología',
    'sistema DSS kinesiología',
    'gestión clínica kinesiología',
    // ... más keywords
  ],
  openGraph: {
    title: 'Kenkomed — Software para Kinesiólogos | DSS Clínico',
    type: 'website',
    locale: 'es_CL',
    url: 'https://kenkomed.cl',
    siteName: 'Kenkomed',
  },
}
```

**Viewport** configurado con `themeColor: '#1a6fc4'` y `width: 'device-width'`.

---

## 🌐 Despliegue

### Vercel (Recomendado)

1. Sube el repositorio a GitHub, GitLab o Bitbucket.
2. Ve a [vercel.com](https://vercel.com) y conecta tu repositorio.
3. Vercel detectará automáticamente que es un proyecto Next.js.
4. Haz clic en **Deploy**.

### Build Manual

```bash
npm run build    # Genera la carpeta .next/ con la build optimizada
npm run start    # Inicia el servidor de producción en el puerto 3000
```

### Variables de Entorno

Actualmente el proyecto no requiere variables de entorno. Si se integra una API real para el formulario de contacto, se deberá crear un archivo `.env.local`:

```env
# Ejemplo futuro:
CONTACT_API_URL=https://api.kenkomed.cl/contact
```

---

## 👥 Guía de Contribución

### Agregar un nuevo componente

1. Crea el archivo en `components/nombre-componente.tsx`.
2. Usa `'use client'` si requiere interactividad del lado del cliente.
3. Importa la función `cn` desde `@/lib/utils` para clases condicionales.
4. Importa iconos desde `lucide-react`.
5. Sigue el patrón de animación de scroll existente con `IntersectionObserver`.

### Agregar una nueva página

1. Crea una carpeta dentro de `app/` con el nombre de la ruta.
2. Dentro, crea `page.tsx` como componente por defecto.
3. Incluye `<Navbar />` y `<Footer />` para mantener consistencia.
4. Agrega el link al nuevo route en `components/navbar.tsx` (array `navLinks`).

### Agregar un componente shadcn/ui

```bash
npx shadcn@latest add <nombre-componente>
```

Esto descargará el componente en `components/ui/` automáticamente.

### Convenciones de Código

- **Idioma del código:** Inglés (nombres de variables, funciones, tipos).
- **Idioma del contenido:** Español (textos visibles en la UI).
- **Componentes:** PascalCase (ej: `ContactForm`).
- **Archivos:** kebab-case (ej: `contact-form.tsx`).
- **Hooks:** camelCase con prefijo `use` (ej: `useScrollProgress`).
- **Estilos:** TailwindCSS utility-first + variables CSS custom.

---

## 📞 Contacto del Equipo

| Nombre | Rol | LinkedIn |
|---|---|---|
| Ignacio Castillo | Jefe de Proyecto | [LinkedIn](https://www.linkedin.com/in/ignacio-castillo-jaramillo-831811295/) |
| Ignacio Cabrera | Arquitecto de Software | [LinkedIn](https://www.linkedin.com/in/icabrerabalmaceda/) |
| Nicolás Jeldres | Desarrollador Frontend | — |
| Sebastián Molina | Desarrollador Backend | — |
| Maximiliano Cuevas | DevOps & QA | — |

📧 **Email:** contacto@kenkomed.cl  
📱 **Teléfono:** +56 9 9409 6662  
📍 **Ubicación:** Santiago, Chile  
🌐 **Web:** [kenkomed.cl](https://kenkomed.cl)  
📸 **Instagram:** [@kenkomed.cl](https://www.instagram.com/kenkomed.cl/)
