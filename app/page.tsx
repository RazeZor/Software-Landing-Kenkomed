import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features, ProductShowcase, SolucionTeaser } from '@/components/features'
import { PlatformOverview } from '@/components/platform-overview'
import { FeaturesComplete } from '@/components/features-complete'
import { QRAdmission } from '@/components/qr-admission'
import { StatsMonitor } from '@/components/stats-monitor'
import { Team } from '@/components/team'
import { FaqSection } from '@/components/faq-section'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { JsonLd, faqSchema } from '@/components/json-ld'
import { homeFaqItems } from '@/lib/faq-data'

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(homeFaqItems)} />
      <Navbar />
      <Hero />
      <ProductShowcase />
      <PlatformOverview />
      <FeaturesComplete />
      <QRAdmission />
      <StatsMonitor />
      <SolucionTeaser />
      <FaqSection />
      <Team />
      <ContactForm />
      <Footer />
    </main>
  )
}
