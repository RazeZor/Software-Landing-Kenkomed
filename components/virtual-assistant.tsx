'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowUp,
  CalendarDays,
  MessageCircle,
  Minimize2,
  Sparkles,
  X,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import {
  getBotReply,
  QUICK_PROMPTS,
  type ChatAction,
} from '@/lib/chatbot-knowledge'

type Message = {
  id: string
  role: 'user' | 'assistant'
  content: string
  actions?: ChatAction[]
  timestamp: Date
}

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5">
      <AssistantAvatar size="sm" />
      <div className="rounded-2xl rounded-bl-md border border-border/60 bg-card px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1">
          {[0, 150, 300].map((delay) => (
            <span
              key={delay}
              className="size-1.5 animate-bounce rounded-full bg-brand/60"
              style={{ animationDelay: `${delay}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function AssistantAvatar({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const dim = size === 'sm' ? 'size-7' : 'size-8'
  return (
    <Avatar className={cn(dim, 'ring-2 ring-brand/15')}>
      <AvatarImage src="/images/LogoKenko.png" alt="Kenkomed" />
      <AvatarFallback className="bg-brand text-[10px] font-bold text-white">
        K
      </AvatarFallback>
    </Avatar>
  )
}

function ActionChip({
  action,
  onSelect,
}: {
  action: ChatAction
  onSelect: (action: ChatAction) => void
}) {
  if (action.href) {
    return (
      <Button
        asChild
        variant="outline"
        size="sm"
        className="h-8 rounded-full border-brand/20 bg-background/80 text-xs font-medium text-brand hover:bg-brand/5 hover:text-brand"
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
      className="h-8 rounded-full border-brand/20 bg-background/80 text-xs font-medium text-brand hover:bg-brand/5 hover:text-brand"
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

  const pushAssistantMessage = useCallback(
    (content: string, actions?: ChatAction[]) => {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content,
          actions,
          timestamp: new Date(),
        },
      ])
    },
    [],
  )

  const respondToUser = useCallback(
    (userText: string) => {
      setIsTyping(true)
      window.setTimeout(() => {
        const reply = getBotReply(userText)
        pushAssistantMessage(reply.content, reply.actions)
        setIsTyping(false)
      }, 650)
    },
    [pushAssistantMessage],
  )

  const sendUserMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || isTyping) return

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'user',
          content: trimmed,
          timestamp: new Date(),
        },
      ])
      respondToUser(trimmed)
    },
    [isTyping, respondToUser],
  )

  const handleQuickPrompt = (prompt: string) => {
    sendUserMessage(prompt)
  }

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
      pushAssistantMessage(
        'Hola, soy el asistente de Kenkomed. Te ayudo a conocer el software, agendar una demo o contactar al equipo.',
        QUICK_PROMPTS.map((item) => ({ label: item.label })),
      )
    }
  }, [hasGreeted, isOpen, pushAssistantMessage])

  useEffect(() => {
    if (isOpen) scrollToBottom()
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

  if (!isOpen) {
    return (
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        <div className="hidden max-w-[220px] animate-in fade-in slide-in-from-bottom-2 rounded-2xl border border-border/60 bg-card/95 px-4 py-3 text-sm text-foreground shadow-xl backdrop-blur-md duration-300 sm:block">
          <p className="font-medium">¿Necesitas ayuda?</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Pregúntame sobre Kenkomed, demo o contacto.
          </p>
        </div>

        <Button
          type="button"
          size="icon-lg"
          aria-label="Abrir asistente virtual"
          onClick={() => setIsOpen(true)}
          className="group relative size-14 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white shadow-lg shadow-brand/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-brand/30"
        >
          <MessageCircle className="size-6 transition-transform group-hover:scale-110" />
          <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-emerald text-[10px] text-white ring-2 ring-background">
            <Sparkles className="size-3" />
          </span>
        </Button>
      </div>
    )
  }

  return (
    <div
      role="dialog"
      aria-label="Asistente virtual Kenkomed"
      className="fixed bottom-5 right-5 z-50 flex w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-2xl shadow-black/10 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-300 sm:bottom-6 sm:right-6 sm:h-[min(640px,calc(100vh-3rem))]"
    >
      {/* Header */}
      <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#05111e] via-brand-dark to-brand px-4 py-4 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,217,139,0.18),transparent_55%)]" />
        <div className="relative flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex size-11 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
                <Image
                  src="/images/LogoKenko.png"
                  alt="Kenkomed"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-brand-dark bg-emerald" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold tracking-tight">Asistente Kenkomed</h3>
                <Badge className="border-emerald/30 bg-emerald/15 px-2 py-0 text-[10px] font-medium text-emerald-light hover:bg-emerald/15">
                  En línea
                </Badge>
              </div>
              <p className="mt-0.5 text-xs text-white/70">
                Respuestas instantáneas sobre el software
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Minimizar chat"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:bg-white/10 hover:text-white"
            >
              <Minimize2 className="size-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label="Cerrar chat"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:bg-white/10 hover:text-white"
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="min-h-0 flex-1 bg-gradient-to-b from-muted/30 to-background">
        <div className="space-y-4 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex flex-col gap-2',
                message.role === 'user' ? 'items-end' : 'items-start',
              )}
            >
              <div
                className={cn(
                  'flex max-w-[88%] items-end gap-2',
                  message.role === 'user' && 'flex-row-reverse',
                )}
              >
                {message.role === 'assistant' && <AssistantAvatar size="sm" />}

                <div
                  className={cn(
                    'rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm',
                    message.role === 'user'
                      ? 'rounded-br-md bg-brand text-white'
                      : 'rounded-bl-md border border-border/60 bg-card text-foreground',
                  )}
                >
                  {message.content}
                </div>
              </div>

              {message.role === 'assistant' && message.actions && message.actions.length > 0 && (
                <div className="ml-9 flex max-w-[88%] flex-wrap gap-2">
                  {message.actions.map((action) => (
                    <ActionChip
                      key={`${message.id}-${action.label}`}
                      action={action}
                      onSelect={handleActionSelect}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Quick prompts */}
      {!isTyping && messages.length <= 2 && (
        <div className="shrink-0 border-t border-border/50 bg-background/80 px-3 py-2.5">
          <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            <CalendarDays className="size-3" />
            Sugerencias rápidas
          </div>
          <div className="flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {QUICK_PROMPTS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleQuickPrompt(item.prompt)}
                className="shrink-0 rounded-full border border-border/70 bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand/30 hover:bg-brand/5 hover:text-brand"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="shrink-0 border-t border-border/60 bg-card p-3"
      >
        <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-background p-1.5 shadow-xs focus-within:border-brand/40 focus-within:ring-2 focus-within:ring-brand/15">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Escribe tu pregunta..."
            disabled={isTyping}
            className="h-9 flex-1 border-0 bg-transparent shadow-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            size="icon-sm"
            disabled={!inputValue.trim() || isTyping}
            aria-label="Enviar mensaje"
            className="rounded-lg bg-brand text-white hover:bg-brand-dark"
          >
            <ArrowUp className="size-4" />
          </Button>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          Enter para enviar · Esc para cerrar
        </p>
      </form>
    </div>
  )
}
