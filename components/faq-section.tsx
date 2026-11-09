'use client'

import { FAQ } from '@/components/ui/faq-tabs'
import { faqCategories, faqDataByCategory } from '@/lib/faq-data'

export function FaqSection() {
  return (
    <FAQ
      title="Preguntas Frecuentes"
      subtitle="Resolvemos tus dudas sobre la plataforma, seguridad e implementación"
      categories={faqCategories}
      faqData={faqDataByCategory}
      className="bg-transparent"
    />
  )
}
