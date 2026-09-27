"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  label?: string
  description?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  label,
  description,
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("py-20 md:py-32", className)}>
      <div className="max-w-7xl mx-auto w-full px-6">
        {label && <p className="text-sm uppercase tracking-widest text-brand font-bold text-center mb-3">{label}</p>}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground text-center text-balance">
          {title}
        </h2>
        {description && (
          <p className="text-foreground-muted text-center max-w-2xl mx-auto mb-16 text-balance">
            {description}
          </p>
        )}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 md:gap-8 cursor-pointer group"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <motion.div
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 shrink-0 transition-colors",
                    index === currentFeature
                      ? "bg-brand border-brand text-primary-foreground scale-110"
                      : "bg-transparent border-border/80 text-foreground-muted group-hover:border-foreground/30",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold text-white">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1 pt-1">
                  <p className="text-xs uppercase tracking-wider font-semibold text-brand mb-1">{feature.step}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative h-[300px] md:h-auto overflow-hidden rounded-2xl border border-border/60 bg-card/50 shadow-lg lg:min-h-[480px] flex items-center justify-center"
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center p-3 md:p-6"
                      initial={{ y: 50, opacity: 0, rotateX: -10 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -50, opacity: 0, rotateX: 10 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="relative w-full h-full rounded-xl overflow-hidden border border-border/30 shadow-md">
                        <Image
                          src={feature.image}
                          alt={feature.title || feature.step}
                          className="w-full h-full object-contain object-center"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
