'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch — only render after mount
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center"
        aria-label="Cambiar tema"
      >
        <span className="w-4 h-4" />
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-9 h-9 rounded-full border border-border/60 bg-card hover:bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-105 group"
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      {/* Sun icon — visible in dark mode */}
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${
          isDark
            ? 'rotate-0 scale-100 opacity-100 text-amber-400'
            : 'rotate-90 scale-0 opacity-0'
        }`}
      />
      {/* Moon icon — visible in light mode */}
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${
          isDark
            ? '-rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100 text-foreground-muted group-hover:text-foreground'
        }`}
      />
    </button>
  )
}
