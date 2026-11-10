'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, FAQItemProps[]>;
  className?: string;
}

export const FAQ = ({
  title = 'Preguntas Frecuentes',
  subtitle = 'Resolvemos tus dudas sobre la plataforma, seguridad e implementación',
  categories,
  faqData,
  className,
  ...props
}: FAQProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');

  const visibleGroups =
    selectedCategory === 'todas'
      ? Object.entries(faqData)
      : Object.entries(faqData).filter(([key]) => key === selectedCategory);

  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="faq-heading"
      className={cn(
        'relative bg-background py-20 md:py-24 px-6 text-foreground border-t border-border/60',
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-3xl">
        {/* Encabezado limpio y tradicional */}
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-brand/6 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" aria-hidden="true" />
            Resolvemos tus dudas
          </p>
          <h2
            id="faq-heading"
            className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-[-0.024em] leading-[1.12] text-foreground text-balance"
          >
            {title}.
          </h2>
          <p className="mt-3.5 max-w-2xl mx-auto text-base sm:text-[1.0625rem] leading-relaxed text-foreground-muted">
            {subtitle}
          </p>
        </div>

        {/* Filtro simple y clásico */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory('todas')}
            className={cn(
              'rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer',
              selectedCategory === 'todas'
                ? 'border-brand bg-brand text-white'
                : 'border-border bg-white text-foreground-muted hover:text-foreground hover:border-brand/40'
            )}
          >
            Todas
          </button>
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCategory(key)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer',
                selectedCategory === key
                  ? 'border-brand bg-brand text-white'
                  : 'border-border bg-white text-foreground-muted hover:text-foreground hover:border-brand/40'
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Acordeón tradicional nativo (<details>) accesible y buscable con Ctrl+F */}
        <div className="space-y-8">
          {visibleGroups.map(([categoryKey, questions], groupIndex) => (
            <div key={categoryKey}>
              {selectedCategory === 'todas' && (
                <h3 className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.12em] text-brand">
                  {categories[categoryKey] ?? categoryKey}
                </h3>
              )}

              <div className="divide-y divide-border rounded-2xl border border-border bg-card shadow-2xs overflow-hidden">
                {questions.map((faq, itemIndex) => (
                  <details
                    key={faq.question}
                    name="kenkomed-faq"
                    open={groupIndex === 0 && itemIndex === 0}
                    className="group"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left transition-colors hover:bg-slate-50/70 [&::-webkit-details-marker]:hidden">
                      <span className="font-display text-base sm:text-[1.0625rem] font-bold leading-snug text-foreground">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className="shrink-0 text-foreground-muted transition-transform duration-200 group-open:rotate-180 group-open:text-brand"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                      <p className="text-sm sm:text-[0.9375rem] leading-relaxed text-foreground-muted">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
