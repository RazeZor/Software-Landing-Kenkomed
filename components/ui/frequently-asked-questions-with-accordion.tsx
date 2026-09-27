"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProps {
  title?: string;
  description?: string;
  data?: FAQItem[];
  className?: string;
  supportEmail?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What is the purpose of this website?",
    answer:
      "This website is a place to help you find the best products and services in the world. We curate top-quality offerings so you can make informed decisions without spending hours on research.",
  },
];

export function FrequentlyAskedQuestions({
  title = "Preguntas frecuentes",
  description = "Estamos aquí para ayudarte con cualquier duda que tengas. Si no encuentras lo que buscas, contáctanos a",
  data = defaultFAQs,
  className,
  supportEmail = "contacto@kenkomed.cl",
}: FrequentlyAskedQuestionsProps) {
  const words = title.split(" ");

  return (
    <section className={cn("relative w-full overflow-hidden py-24", className)}>
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-5xl">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
                ease: "easeInOut",
              }}
              className="mr-2 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mx-auto mt-6 max-w-2xl text-center text-base text-foreground-muted md:text-lg"
        >
          {description}{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="text-brand underline underline-offset-4 hover:opacity-80 transition-opacity font-medium"
          >
            {supportEmail}
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="w-full">
            {data.map((item, index) => (
              <motion.div
                key={`faq-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: 0.5 + index * 0.07,
                  ease: "easeOut",
                }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-base py-5">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-foreground-muted leading-relaxed pb-6 text-base">{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
