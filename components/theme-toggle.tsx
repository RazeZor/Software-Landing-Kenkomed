'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-full bg-secondary',
          className,
        )}
        aria-label="Cambiar tema"
      >
        <span className="h-4 w-4" />
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group relative flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card transition-all duration-300 hover:scale-105 hover:bg-secondary',
        className,
      )}
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
