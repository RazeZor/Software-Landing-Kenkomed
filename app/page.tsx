import dynamic from 'next/dynamic'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { JsonLd, faqSchema } from '@/components/json-ld'
import { homeFaqItems } from '@/lib/faq-data'
import { SectionSkeleton } from '@/components/section-skeleton'

const SolucionTeaser = dynamic(
  () => import('@/components/features').then((m) => m.SolucionTeaser),
  { loading: () => <SectionSkeleton className="h-[32rem]" /> }
)

const BeforeAfter = dynamic(
  () => import('@/components/before-after').then((m) => m.BeforeAfter),
  { loading: () => <SectionSkeleton className="h-[32rem]" /> }
)

const ProductShowcase = dynamic(
  () => import('@/components/features').then((m) => m.ProductShowcase),
  { loading: () => <SectionSkeleton className="h-[40rem]" /> }
)

const HomeMidCta = dynamic(
  () => import('@/components/home-mid-cta').then((m) => m.HomeMidCta),
  { loading: () => <SectionSkeleton className="h-48" /> }
)

const HomeExploreStrip = dynamic(
  () => import('@/components/home-explore-strip').then((m) => m.HomeExploreStrip),
  { loading: () => <SectionSkeleton className="h-80" /> }
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
      <ProductShowcase />
      <HomeMidCta />
      <HomeExploreStrip />
      <Pricing />
      <FaqSection />
      <ContactForm />
      <Footer />
    </main>
  )
}

