'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageSquareText, X, Send, Bot, User, ChevronRight } from 'lucide-react'

type Message = {
  id: string
  sender: 'bot' | 'user'
  type: 'text' | 'options'
  content: string
  options?: { label: string; action: () => void }[]
}

export function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          sender: 'bot',
          type: 'text',
          content: '¡Hola! Soy el asistente virtual de Kenkomed 👋',
        },
        {
          id: '2',
          sender: 'bot',
          type: 'options',
          content: '¿En qué te puedo ayudar hoy?',
          options: [
            {
              label: '📋 ¿Qué es Kenkomed?',
              action: () => handleOptionClick('¿Qué es Kenkomed?', 'Kenkomed es un Sistema de Soporte a la Decisión Clínica (DSS) diseñado específicamente para kinesiólogos y fisioterapeutas. Digitaliza fichas, agenda y seguimiento de pacientes.'),
            },
            {
              label: '💰 Ver Precios',
              action: () => {
                handleOptionClick('Ver Precios', 'Te llevaré a la sección de funcionalidades y contacto para que solicites una cotización personalizada.')
                scrollToSection('features')
              },
            },
            {
              label: '📞 Contactar a un asesor',
              action: () => {
                handleOptionClick('Contactar a un asesor', '¡Perfecto! Completa el formulario de contacto y te llamaremos a la brevedad.')
                scrollToSection('contact')
                setIsOpen(false)
              },
            },
            {
              label: '📅 Agendar Demo',
              action: () => {
                handleOptionClick('Agendar Demo', 'Puedes ver nuestra demo navegando en el menú superior o solicitándola en el formulario.')
                window.location.href = '/demo'
              },
            },
          ],
        },
      ])
    }
  }, [messages.length])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isTyping])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const simulateBotResponse = (userText: string, customBotResponse?: string) => {
    setIsTyping(true)

    // Simulate network delay
    setTimeout(() => {
      let botResponse = customBotResponse
      
      if (!botResponse) {
        // Simple fallback response
        botResponse = 'Gracias por escribirnos. Nuestro equipo revisará tu mensaje o puedes utilizar las opciones rápidas de arriba si necesitas navegar por la web.'
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          type: 'text',
          content: botResponse!,
        },
      ])
      setIsTyping(false)
    }, 1000)
  }

  const handleOptionClick = (userLabel: string, botResponse: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'user',
        type: 'text',
        content: userLabel,
      },
    ])
    
    // Trigger bot typing and response
    simulateBotResponse(userLabel, botResponse)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userText = inputValue.trim()
    setInputValue('')

    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'user',
        type: 'text',
        content: userText,
      },
    ])

    simulateBotResponse(userText)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-transform hover:scale-105">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-brand hover:bg-brand-dark text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-brand/20 transition-all duration-300 pointer-events-auto ring-4 ring-brand/20"
          aria-label="Abrir asistente virtual"
        >
          <MessageSquareText size={26} className="fill-current" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full pointer-events-none" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-[calc(100vw-3rem)] sm:w-[380px] h-[580px] max-h-[calc(100vh-6rem)] bg-card border border-border/60 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 pointer-events-auto">
      
      {/* Header */}
      <div className="bg-brand text-white px-5 py-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative backdrop-blur-sm">
            <Bot size={22} className="text-white" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-brand rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold text-sm leading-tight">Asistente Kenkomed</h3>
            <p className="text-xs text-white/80">En línea ahora</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
          aria-label="Cerrar asistente"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-5 pb-2 bg-slate-50 dark:bg-slate-900/50 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            {/* Context sender row */}
            <div className={`flex items-end gap-2 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              
              {/* Avatar */}
              <div className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-primary/10 text-primary' : 'bg-brand/10 text-brand'}`}>
                {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
              </div>

              {/* Message bubble */}
              <div
                className={`px-4 py-2.5 rounded-2xl text-sm ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-white dark:bg-slate-800 border border-border/50 text-foreground shadow-sm rounded-bl-none'
                }`}
              >
                {msg.content}
              </div>
            </div>

            {/* Options buttons if present */}
            {msg.type === 'options' && msg.options && (
              <div className="flex flex-col gap-2 mt-3 ml-9">
                {msg.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={opt.action}
                    className="text-left text-sm bg-white dark:bg-slate-800 border border-brand/20 text-brand hover:bg-brand/5 px-4 py-2 rounded-xl transition-colors shadow-sm flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ChevronRight size={14} className="text-brand/50 group-hover:text-brand transition-colors" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-end gap-2 max-w-[85%]">
            <div className="w-7 h-7 shrink-0 rounded-full bg-brand/10 text-brand flex items-center justify-center">
              <Bot size={14} />
            </div>
            <div className="bg-white dark:bg-slate-800 border border-border/50 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-brand/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 bg-brand/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 bg-brand/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSendMessage}
        className="bg-card border-t border-border/60 p-3 sm:p-4 flex items-center gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 bg-secondary text-foreground text-sm px-4 py-2.5 rounded-full border-transparent focus:border-brand focus:ring-1 focus:ring-brand focus:outline-none transition-all placeholder:text-foreground-muted"
        />
        <button
          type="submit"
          disabled={!inputValue.trim() || isTyping}
          className="bg-brand hover:bg-brand-dark text-white p-2.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          aria-label="Enviar mensaje"
        >
          <Send size={18} className="translate-x-[1px] translate-y-[-1px]" />
        </button>
      </form>

    </div>
  )
}
