import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
  softwareSchema,
} from '@/components/json-ld'
import { defaultOgImage } from '@/lib/seo-assets'
import { VirtualAssistantLazy } from '@/components/virtual-assistant-lazy'
import { SiteHeader } from '@/components/ui/site-header'
import './globals.css'

/* ──────────────────────────────────────────────────────────────
   SISTEMA TIPOGRÁFICO KENKOMED — Clínico y Preciso
   ──────────────────────────────────────────────────────────────
   Inter         → cuerpo de texto · estándar médico/SaaS, legibilidad máxima
   Space Grotesk → display / titulares · técnica, autoridad sin decoración
   Geist Mono    → código / datos clínicos / métricas
   ────────────────────────────────────────────────────────────── */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  metadataBase: new URL('https://kenkomed.cl'),

  title: {
    default: 'Kenkomed — Software para Kinesiólogos | Sistema DSS de Gestión Clínica',
    template: '%s | Kenkomed',
  },

  description:
    'Kenkomed: Sistema de Soporte a la Decisión Clínica (DSS) para kinesiólogos y fisioterapeutas. Historias clínicas digitales, cuestionarios automatizados (EVA, PSFS, Barthel, GROC), agenda inteligente y gestión integral de tu centro kinesiológico en Chile.',

  keywords: [
    'software kinesiología',
    'sistema DSS kinesiología',
    'gestión clínica kinesiología',
    'fichas digitales fisioterapia',
    'kenkomed',
    'software kinesiólogos Chile',
    'cuestionarios EVA PSFS Barthel',
    'agenda médica kinesiología',
    'software fisioterapia Chile',
    'historia clínica digital kinesiología',
    'sistema decisión clínica',
    'ficha clínica kinesiología',
    'software centro kinesiológico',
    'gestión pacientes kinesiólogos',
    'escala visual analógica kinesiología',
    'software rehabilitación Chile',
    'sistema gestión kinesiólogos',
    'plataforma kinesiología online',
    'software salud Chile',
    'DSS kinesiología fisioterapia',
  ],

  authors: [{ name: 'Kenkomed', url: 'https://kenkomed.cl' }],
  creator: 'Kenkomed',
  publisher: 'Kenkomed',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },

  openGraph: {
    title: 'Kenkomed — Software para Kinesiólogos | DSS Clínico',
    description:
      'Sistema DSS avanzado para kinesiólogos: historias clínicas digitales, cuestionarios automatizados y gestión integral de tu centro kinesiológico.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://kenkomed.cl',
    siteName: 'Kenkomed',
    images: [defaultOgImage],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kenkomed — Software para Kinesiólogos | DSS Clínico',
    description:
      'Sistema de Soporte a la Decisión Clínica para kinesiólogos y fisioterapeutas. Digitaliza tu clínica con Kenkomed.',
    images: [defaultOgImage.url],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'health',
}

export const viewport = {
  themeColor: '#1a6fc4',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a6fc4" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareSchema} />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-background text-foreground"
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <SiteHeader />
          {children}
          <VirtualAssistantLazy />
        </ThemeProvider>
      </body>
    </html>
  )
}
