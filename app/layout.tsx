import type { Metadata } from 'next'
import { Inter, Sora, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
  softwareSchema,
} from '@/components/json-ld'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
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

  openGraph: {
    title: 'Kenkomed — Software para Kinesiólogos | DSS Clínico',
    description:
      'Sistema DSS avanzado para kinesiólogos: historias clínicas digitales, cuestionarios automatizados y gestión integral de tu centro kinesiológico.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://kenkomed.cl',
    siteName: 'Kenkomed',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 800,
        height: 600,
        alt: 'Kenkomed — Software para Kinesiólogos',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kenkomed — Software para Kinesiólogos | DSS Clínico',
    description:
      'Sistema de Soporte a la Decisión Clínica para kinesiólogos y fisioterapeutas. Digitaliza tu clínica con Kenkomed.',
    images: ['/images/logo.jpeg'],
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

import { VirtualAssistant } from '@/components/virtual-assistant'

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
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${sora.variable} ${geistMono.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/LogoKenko.png" />
        <link rel="shortcut icon" href="/images/LogoKenko.png" />
        <link rel="icon" type="image/png" href="/images/LogoKenko.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" type="image/png" href="/images/LogoKenko.png" media="(prefers-color-scheme: dark)" />
        <link rel="apple-touch-icon" href="/images/LogoKenko.png" />
        <meta name="theme-color" content="#1a6fc4" />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareSchema} />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <VirtualAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}
