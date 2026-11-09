import dynamic from 'next/dynamic'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { JsonLd, faqSchema } from '@/components/json-ld'
import { homeFaqItems } from '@/lib/faq-data'
import { SectionSkeleton } from '@/components/section-skeleton'

const BeforeAfter = dynamic(
  () => import('@/components/before-after').then((m) => m.BeforeAfter),
  { loading: () => <SectionSkeleton className="h-[32rem]" /> }
)

const SolucionTeaser = dynamic(
  () => import('@/components/features').then((m) => m.SolucionTeaser),
  { loading: () => <SectionSkeleton className="h-[32rem]" /> }
)

const KenkomedChatShowcase = dynamic(
  () => import('@/components/kenkomed-chat-showcase').then((m) => m.KenkomedChatShowcase),
  { loading: () => <SectionSkeleton className="h-[36rem]" /> }
)

const Testimonials = dynamic(
  () => import('@/components/ui/testimonial').then((m) => m.default),
  { loading: () => <SectionSkeleton className="h-[24rem]" /> }
)

const ClinicalBackingSection = dynamic(
  () => import('@/components/clinical-backing-section').then((m) => m.ClinicalBackingSection),
  { loading: () => <SectionSkeleton className="h-72" /> }
)

const Pricing = dynamic(
  () => import('@/components/pricing').then((m) => m.Pricing),
  { loading: () => <SectionSkeleton className="h-[48rem]" /> }
)

const FaqSection = dynamic(
  () => import('@/components/faq-section').then((m) => m.FaqSection),
  { loading: () => <SectionSkeleton className="h-96" /> }
)

const ContactForm = dynamic(
  () => import('@/components/contact-form').then((m) => m.ContactForm),
  { loading: () => <SectionSkeleton className="h-[36rem]" /> }
)

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(homeFaqItems)} />
      <Hero />
      <BeforeAfter />
      <SolucionTeaser />
      <KenkomedChatShowcase />
      <Testimonials />
      <ClinicalBackingSection />
      <Pricing />
      <FaqSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
