import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Space_Grotesk, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import {
  JsonLd,
  organizationSchema,
  websiteSchema,
  softwareSchema,
} from '@/components/json-ld'
import { defaultOgImage } from '@/lib/seo-assets'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { CookieBanner } from '@/components/cookie-banner'
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
  metadataBase: new URL('https://www.kenkomed.cl'),

  title: {
    default: 'Kenkomed — Software y Ficha Clínica para Kinesiólogos',
    template: '%s | Kenkomed',
  },

  description:
    'Software y app para kinesiólogos en Chile. Ficha clínica digital SOAP, 13 escalas validadas, admisión QR y agenda clínica integral.',

  authors: [{ name: 'Kenkomed', url: 'https://www.kenkomed.cl' }],
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
    title: 'Kenkomed — Software y Ficha Clínica para Kinesiólogos',
    description:
      'Ficha clínica digital SOAP, 13 escalas validadas (EVA, Barthel), admisión QR y agenda integral para kinesiólogos en Chile.',
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.kenkomed.cl',
    siteName: 'Kenkomed',
    images: [defaultOgImage],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kenkomed — Software y Ficha Clínica para Kinesiólogos',
    description:
      'Ficha clínica digital SOAP, 13 escalas validadas (EVA, Barthel), admisión QR y agenda integral para kinesiólogos en Chile.',
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
  manifest: '/manifest.json',
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
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-background text-foreground"
      >
        {/* Google Consent Mode v2 Default Settings */}
        <Script
          id="google-consent-mode"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              var defaultConsent = 'denied';
              try {
                var saved = localStorage.getItem('kenkomed_cookie_consent');
                if (saved) {
                  var parsed = JSON.parse(saved);
                  if (parsed.analytics) defaultConsent = 'granted';
                }
              } catch (e) {}

              gtag('consent', 'default', {
                'analytics_storage': defaultConsent,
                'ad_storage': defaultConsent,
                'ad_user_data': defaultConsent,
                'ad_personalization': defaultConsent,
                'wait_for_update': 500
              });
            `,
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5LPCDJM9');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LPCDJM9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager */}

        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareSchema} />

        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false} disableTransitionOnChange>
          <noscript>
            <div style={{ padding: '1rem', background: '#fee2e2', color: '#991b1b', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
              <strong>JavaScript está deshabilitado.</strong> Kenkomed requiere JavaScript para funcionar correctamente. Por favor, actívalo en tu navegador.
            </div>
          </noscript>
          <SiteHeader />
          {children}
          <FloatingWhatsApp />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}
