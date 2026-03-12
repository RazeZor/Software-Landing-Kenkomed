'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/* ─── Scroll-triggered reveal ─── */
interface UseRevealOptions {
    threshold?: number
    rootMargin?: string
    once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLElement>(
    options: UseRevealOptions = {}
) {
    const { threshold = 0.15, rootMargin = '0px', once = true } = options
    const ref = useRef<T>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (once) observer.unobserve(el)
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [threshold, rootMargin, once])

    return { ref, isVisible }
}

/* ─── Animated counter ─── */
export function useCountUp(
    end: number,
    isActive: boolean,
    duration = 2000,
    prefix = '',
    suffix = ''
) {
    const [display, setDisplay] = useState(`${prefix}0${suffix}`)

    useEffect(() => {
        if (!isActive) return

        let start = 0
        const startTime = performance.now()

        const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(start + (end - start) * eased)
            setDisplay(`${prefix}${current}${suffix}`)
            if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
    }, [isActive, end, duration, prefix, suffix])

    return display
}

/* ─── Scroll progress (0-1) ─── */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
        }

        window.addEventListener('scroll', update, { passive: true })
        update()
        return () => window.removeEventListener('scroll', update)
    }, [])

    return progress
}

/* ─── Mouse position tracker ─── */
export function useMousePosition(containerRef: React.RefObject<HTMLElement | null>) {
    const [pos, setPos] = useState({ x: 0.5, y: 0.5 })

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const handler = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            setPos({
                x: (e.clientX - rect.left) / rect.width,
                y: (e.clientY - rect.top) / rect.height,
            })
        }

        el.addEventListener('mousemove', handler, { passive: true })
        return () => el.removeEventListener('mousemove', handler)
    }, [containerRef])

    return pos
}

/* ─── Parallax value based on scroll ─── */
export function useParallax(speed = 0.3) {
    const [offset, setOffset] = useState(0)
    const ref = useRef<HTMLElement>(null)

    useEffect(() => {
        const update = () => {
            const el = ref.current
            if (!el) return
            const rect = el.getBoundingClientRect()
            const viewH = window.innerHeight
            const center = rect.top + rect.height / 2 - viewH / 2
            setOffset(center * speed * -1)
        }

        window.addEventListener('scroll', update, { passive: true })
        update()
        return () => window.removeEventListener('scroll', update)
    }, [speed])

    return { ref, offset }
}
