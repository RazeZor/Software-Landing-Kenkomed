'use client'

import ComparisonBlock from '@/components/ui/comparison-3'

export interface PricingComparisonTableProps {
  onSelectPlan: (slug: string) => void
  isMonthly?: boolean
}

export function PricingComparisonTable({ onSelectPlan, isMonthly }: PricingComparisonTableProps) {
  return <ComparisonBlock onSelectPlan={onSelectPlan} isMonthly={isMonthly} />
}
