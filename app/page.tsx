import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features, ProductShowcase, SolucionTeaser } from '@/components/features'
import { PlatformOverview } from '@/components/platform-overview'
import { FeaturesComplete } from '@/components/features-complete'
import { QRAdmission } from '@/components/qr-admission'
import { StatsMonitor } from '@/components/stats-monitor'
import { Team } from '@/components/team'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <PlatformOverview />
      <Features />
      <FeaturesComplete />
      <QRAdmission />
      <StatsMonitor />
      <SolucionTeaser />
      <Team />
      <ContactForm />
      <Footer />
    </main>
  )
  
}
