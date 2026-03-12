import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features, ProductShowcase } from '@/components/features'
import { Team } from '@/components/team'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <Team />
      <ContactForm />
      <Footer />
    </main>
  )
  
}
