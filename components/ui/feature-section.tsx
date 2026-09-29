"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
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
  renderCustomDesktopPane?: (currentFeature: number) => React.ReactNode
  renderCustomMobilePane?: (feature: Feature, index: number) => React.ReactNode
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  label,
  description,
  autoPlayInterval = 3000,
  renderCustomDesktopPane,
  renderCustomMobilePane,
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
        {label && (
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/6 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {label}
            </span>
          </div>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-foreground text-center text-balance">
          {title}
        </h2>
        {description && (
          <p className="text-foreground-muted text-center max-w-2xl mx-auto mb-16 text-balance">
            {description}
          </p>
        )}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="order-2 md:order-1 space-y-2">
            {features.map((feature, index) => {
              const isActive = index === currentFeature
              const isDone = index < currentFeature
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setCurrentFeature(index)
                    setProgress(0)
                  }}
                  className={cn(
                    "w-full text-left rounded-2xl p-4 md:p-5 transition-colors",
                    isActive ? "bg-card border border-border/60 shadow-sm" : "border border-transparent hover:bg-card/50"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold transition-colors",
                        isActive
                          ? "bg-brand text-white"
                          : isDone
                          ? "bg-brand/10 text-brand"
                          : "bg-transparent border border-border/70 text-foreground-muted"
                      )}
                    >
                      {isDone ? "✓" : index + 1}
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <p
                        className={cn(
                          "text-xs uppercase tracking-wider font-semibold mb-1 transition-colors",
                          isActive ? "text-brand" : "text-foreground-muted/70"
                        )}
                      >
                        {feature.step}
                      </p>
                      <h3
                        className={cn(
                          "text-lg md:text-xl font-bold mb-1 transition-colors",
                          isActive ? "text-foreground" : "text-foreground-muted"
                        )}
                      >
                        {feature.title}
                      </h3>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm md:text-base text-foreground-muted leading-relaxed pb-3">
                              {feature.content}
                            </p>
                            
                            {/* MOBILE IMAGE PREVIEW */}
                            <div className="md:hidden mt-2 mb-4 w-full h-[220px] sm:h-[280px] relative rounded-xl overflow-hidden border border-border/60 bg-card shadow-sm">
                              {renderCustomMobilePane ? (
                                renderCustomMobilePane(feature, index)
                              ) : (
                                <Image
                                  src={feature.image}
                                  alt={feature.title || feature.step}
                                  className="w-full h-full object-contain object-center"
                                  fill
                                  sizes="(max-width: 768px) 100vw, 0vw"
                                />
                              )}
                            </div>
                            
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-1 ml-[3.25rem] h-1 rounded-full bg-border/60 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-brand"
                        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
                      />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          <div className="hidden md:flex order-1 md:order-2 relative h-[300px] md:h-auto overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)] lg:min-h-[480px] items-center justify-center">
            {renderCustomDesktopPane ? (
              renderCustomDesktopPane(currentFeature)
            ) : (
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0 flex items-center justify-center p-3 md:p-6"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                          <Image
                            src={feature.image}
                            alt={feature.title || feature.step}
                            className="w-full h-full object-contain object-center"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
