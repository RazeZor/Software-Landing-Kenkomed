'use client'

import { FrequentlyAskedQuestions } from '@/components/ui/frequently-asked-questions-with-accordion'
import { homeFaqItems } from '@/lib/faq-data'

export function FaqSection() {
  return (
    <FrequentlyAskedQuestions 
      data={homeFaqItems}
      className="bg-background"
    />
  )
}
