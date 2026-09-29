'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowUp, CalendarDays, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { getBotReply, QUICK_PROMPTS, type ChatAction } from '@/lib/chatbot-knowledge'

const BLUE = '#1B67B0'
const TEAL = '#1E9E85'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
  actions?: ChatAction[]
  timestamp: Date
}

/* ── Brand signature: an ECG-style pulse trace, echoes the hero's ClinicalChart ── */
function PulseTrace({
  animate = true,
  className,
  style,
}: {
  animate?: boolean
  className?: string
  style?: React.CSSProperties
}) {
  const path = 'M0 12 H10 L14 4 L20 20 L24 12 H34 L38 6 L42 18 L46 12 H80'
  return (
    <svg viewBox="0 0 80 24" className={className} style={style} preserveAspectRatio="none" aria-hidden="true">
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        style={
          animate
            ? {
                strokeDasharray: 1,
                strokeDashoffset: 1,
                animation: 'hm-pulse-draw 2.2s ease-in-out infinite',
              }
            : undefined
        }
      />
    </svg>
  )
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex items-end gap-2.5"
    >
      <AssistantAvatar size="sm" />
      <div className="flex items-center rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-sm">
        <PulseTrace className="h-4 w-12" style={{ color: TEAL } as React.CSSProperties} />
      </div>
    </motion.div>
  )
}

function AssistantAvatar({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'size-7' : 'size-8'
  return (
    <div className="relative shrink-0">
      <Avatar className={cn(dim, 'bg-[#1E9E85] ring-2 ring-[#1E9E85]/15')}>
        <AvatarImage src="/images/LogoKenko.png" alt="Kenkomed" className="object-contain p-1.5 brightness-0 invert" />
        <AvatarFallback className="bg-[#1B67B0] text-[10px] font-bold text-white">K</AvatarFallback>
      </Avatar>
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: `0 0 0 1.5px ${TEAL}` }}
        animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
        aria-hidden="true"
      />
    </div>
  )
}

function ActionChip({ action, onSelect }: { action: ChatAction; onSelect: (action: ChatAction) => void }) {
  if (action.href) {
    return (
      <Button
        asChild
        variant="outline"
        size="sm"
        className="h-8 rounded-full border-[#1B67B0]/20 bg-background/80 text-xs font-semibold tracking-wide text-[#1B67B0] shadow-sm transition-colors hover:bg-[#1B67B0]/10 hover:text-[#1B67B0]"
      >
        <Link href={action.href}>{action.label}</Link>
      </Button>
    )
  }
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="h-8 rounded-full border-[#1B67B0]/20 bg-background/80 text-xs font-semibold tracking-wide text-[#1B67B0] shadow-sm transition-colors hover:bg-[#1B67B0]/10 hover:text-[#1B67B0]"
      onClick={() => onSelect(action)}
    >
      {action.label}
    </Button>
  )
}

export function VirtualAssistant() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [hasGreeted, setHasGreeted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const pushAssistantMessage = useCallback((content: string, actions?: ChatAction[]) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: 'assistant', content, actions, timestamp: new Date() },
    ])
  }, [])

  const respondToUser = useCallback(
    (userText: string) => {
      setIsTyping(true)
      window.setTimeout(() => {
        const reply = getBotReply(userText)
        pushAssistantMessage(reply.content, reply.actions)
        setIsTyping(false)
      }, 800)
    },
    [pushAssistantMessage],
  )

  const sendUserMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isTyping) return
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'user', content: trimmed, timestamp: new Date() },
      ])
      respondToUser(trimmed)
    },
    [isTyping, respondToUser],
  )

  const handleQuickPrompt = (prompt: string) => sendUserMessage(prompt)

  const handleActionSelect = (action: ChatAction) => {
    if (action.href) {
      router.push(action.href)
      setIsOpen(false)
      return
    }
    if (action.scrollTo) {
      document.getElementById(action.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
      return
    }
    sendUserMessage(action.label)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const value = inputValue
    setInputValue('')
    sendUserMessage(value)
  }

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true)
      setIsTyping(true)
      window.setTimeout(() => {
        setIsTyping(false)
        pushAssistantMessage(
          'Hola, soy el asistente de Kenkomed. Te ayudo a conocer el software, agendar una demo o contactar al equipo.',
          QUICK_PROMPTS.map((item) => ({ label: item.label })),
        )
      }, 600)
    }
  }, [hasGreeted, isOpen, pushAssistantMessage])

  useEffect(() => {
    if (isOpen) setTimeout(scrollToBottom, 50)
  }, [messages, isTyping, isOpen, scrollToBottom])

  useEffect(() => {
    if (!isOpen) return
    inputRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <>
      <style>{`
        @keyframes hm-pulse-draw {
          0% { stroke-dashoffset: 1; opacity: 0.3; }
          45% { stroke-dashoffset: 0; opacity: 1; }
          55% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -1; opacity: 0.3; }
        }
      `}</style>

      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            key="launcher"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }}
            className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              className="hidden max-w-[220px] rounded-2xl border border-border/60 bg-card/95 px-4 py-3 text-sm text-foreground shadow-xl backdrop-blur-md sm:block"
            >
              <p className="font-semibold text-[#1B67B0]">¿Necesitas ayuda?</p>
              <p className="mt-1 text-xs font-medium text-muted-foreground leading-relaxed">
                Pregúntame sobre Kenkomed, demos o contacto.
              </p>
            </motion.div>

            <Button
              type="button"
              aria-label="Abrir asistente virtual"
              onClick={() => setIsOpen(true)}
              className="group relative h-14 w-auto overflow-hidden rounded-full border border-white/10 bg-gradient-to-r from-[#1E9E85] to-[#14806a] px-5 text-white shadow-xl shadow-[#1E9E85]/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#1E9E85]/40"
            >
              <PulseTrace
                className="pointer-events-none absolute inset-x-0 bottom-1 h-3 w-full text-white/25"
                style={{ color: 'rgba(255,255,255,0.25)' } as React.CSSProperties}
              />
              <div className="relative flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-full bg-white/20 shadow-inner">
                  <Image src="/images/LogoKenko.png" alt="KenkoAI" width={18} height={18} className="brightness-0 invert drop-shadow-md" />
                </div>
                <span className="pr-1 text-[0.95rem] font-bold tracking-wide">Kenko AI</span>
              </div>
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-label="Asistente virtual Kenkomed"
            className="fixed bottom-5 right-5 z-50 flex h-[min(640px,calc(100vh-3rem))] w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-[1.75rem] border border-border/60 bg-card/95 shadow-[0_30px_60px_-30px_rgba(27,103,176,0.3)] backdrop-blur-xl sm:bottom-6 sm:right-6"
          >
            {/* Header — pulse trace watermark instead of a plain gradient */}
            <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#14806a] via-[#1E9E85] to-[#2cb59a] px-5 py-4 text-white shadow-sm">
              <PulseTrace
                className="pointer-events-none absolute bottom-0 left-0 h-10 w-full opacity-20"
                style={{ color: 'white' } as React.CSSProperties}
                animate={false}
              />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="flex size-11 items-center justify-center overflow-hidden rounded-full bg-white/20 ring-1 ring-white/40 shadow-inner backdrop-blur-md">
                      <Image src="/images/LogoKenko.png" alt="Kenkomed" width={24} height={24} className="object-contain brightness-0 invert drop-shadow-sm" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold tracking-tight">Kenko AI</h3>
                      <Badge className="border-white/40 bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
                        En línea
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-emerald-50">Respuestas instantáneas 24/7</p>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Cerrar chat"
                  onClick={() => setIsOpen(false)}
                  className="size-8 rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                >
                  <X className="size-4.5" />
                </Button>
              </div>
            </div>

            {/* Messages — no speech-bubble "tail", reads more like clinical record entries */}
            <ScrollArea className="min-h-0 flex-1 bg-gradient-to-b from-muted/30 to-background/50">
              <div className="space-y-5 p-5">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className={cn('flex flex-col gap-2', message.role === 'user' ? 'items-end' : 'items-start')}
                    >
                      <div className={cn('flex max-w-[88%] items-end gap-2.5', message.role === 'user' && 'flex-row-reverse')}>
                        {message.role === 'assistant' && <AssistantAvatar size="sm" />}
                        <div
                          className={cn(
                            'rounded-2xl px-4 py-3 text-[0.925rem] leading-relaxed shadow-sm',
                            message.role === 'user'
                              ? 'bg-gradient-to-br from-[#1B67B0] to-[#155a9c] text-white shadow-md'
                              : 'border border-border/60 bg-card text-foreground',
                          )}
                        >
                          {message.content}
                        </div>
                      </div>

                      {message.role === 'assistant' && message.actions && message.actions.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="ml-10 flex max-w-[88%] flex-wrap gap-2 pt-1"
                        >
                          {message.actions.map((action) => (
                            <ActionChip key={`${message.id}-${action.label}`} action={action} onSelect={handleActionSelect} />
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                  {isTyping && <TypingIndicator key="typing" />}
                </AnimatePresence>
                <div ref={messagesEndRef} className="h-1" />
              </div>
            </ScrollArea>

            {/* Quick prompts */}
            <AnimatePresence>
              {!isTyping && messages.length <= 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="shrink-0 border-t border-border/50 bg-muted/20 px-4 py-3"
                >
                  <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#1B67B0]">
                    <CalendarDays className="size-3.5" />
                    Sugerencias rápidas
                  </div>
                  <div className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {QUICK_PROMPTS.map((item, i) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        type="button"
                        onClick={() => handleQuickPrompt(item.prompt)}
                        className="shrink-0 rounded-full border border-border/70 bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-all hover:border-[#1B67B0]/40 hover:bg-[#1B67B0]/5 hover:text-[#1B67B0]"
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <form onSubmit={handleSubmit} className="z-10 shrink-0 bg-card p-3.5 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-2 rounded-[1.25rem] border border-border/70 bg-background p-1.5 shadow-inner transition-all focus-within:border-[#1B67B0]/40 focus-within:ring-4 focus-within:ring-[#1B67B0]/10">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="Escribe tu duda aquí..."
                  disabled={isTyping}
                  className="h-10 flex-1 border-0 bg-transparent px-3 text-[0.95rem] shadow-none placeholder:text-muted-foreground/60 focus-visible:ring-0"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Enviar mensaje"
                  className="size-10 rounded-xl bg-gradient-to-br from-[#1B67B0] to-[#155a9c] text-white shadow-md transition-all hover:shadow-lg disabled:opacity-50 disabled:shadow-none"
                >
                  <ArrowUp className="size-5" />
                </Button>
              </div>
              <p className="mt-2.5 text-center text-[10px] font-medium text-muted-foreground/70">
                Kenkomed AI · Las respuestas son orientativas
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
