"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  CheckCheck,
  Search,
  ListFilter,
  MoreVertical,
  CircleDashed,
  MessageSquarePlus,
  Paperclip,
  Mic,
  Smile,
  Play,
  Lock,
  CheckCircle2,
} from "lucide-react";

export interface ChatMessage {
  id: number;
  sender: string;
  avatarInitial?: string;
  text: string;
  isCurrentUser: boolean;
  timestamp: string;
  isAudio?: boolean;
  audioDuration?: string;
  reaction?: string;
}

export interface SidebarChatItem {
  id: string;
  name: string;
  initial: string;
  avatarUrl?: string;
  lastMsg: string;
  time: string;
  unreadCount?: number;
  isActive?: boolean;
}

/**
 * Conversación clínica con identidad oficial de Kenkomed:
 * Muestra el flujo entre paciente y el sistema Kenkomed tras completar la anamnesis QR.
 */
export const KENKOMED_DEFAULT_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    sender: "Kinesiólogo Tratante",
    avatarInitial: "K",
    text: "Hola Laura, te comparto el link directo y el código QR de Kenkomed para que puedas completar tu formulario de anamnesis desde tu celular antes de nuestra sesión de evaluación.",
    isCurrentUser: true,
    timestamp: "09:15",
  },
  {
    id: 2,
    sender: "Laura Mendoza",
    avatarInitial: "L",
    text: "¡Hola! Perfecto, acabo de abrir el link y completé todos mis datos, antecedentes y la molestia en el hombro desde mi celular 📱✅",
    isCurrentUser: false,
    timestamp: "10:30",
  },
  {
    id: 3,
    sender: "Kinesiólogo Tratante",
    avatarInitial: "K",
    text: "¡Excelente! Ya me aparece cargado en tu ficha clínica digital en Kenkomed. Nos vemos mañana en la consulta a las 11:00 hrs para comenzar tu evaluación y tratamiento.",
    isCurrentUser: true,
    timestamp: "10:32",
  },
  {
    id: 4,
    sender: "Laura Mendoza",
    avatarInitial: "L",
    text: "¡Súper claro y rápido! Muchas gracias, nos vemos mañana en la clínica 🙌",
    isCurrentUser: false,
    timestamp: "10:35",
    reaction: "💪",
  },
];

export const KENKOMED_SIDEBAR_CHATS: SidebarChatItem[] = [
  {
    id: "1",
    name: "Laura Mendoza (Hombro)",
    initial: "L",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    lastMsg: "¡Nos vemos en la clínica! 🙌",
    time: "10:35",
    isActive: true,
  },
  {
    id: "2",
    name: "Soporte Equipo Kenkomed",
    initial: "K",
    avatarUrl: "/images/LogoKenKoMed-removebg-preview.png",
    lastMsg: "Equipo Kenkomed: Hola, estamos atentos para asistirte",
    time: "10:15",
    unreadCount: 1,
  },
  {
    id: "3",
    name: "Carlos Silva (Post-Op Rodilla)",
    initial: "C",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    lastMsg: "Terminé la serie de ejercicios de extensión",
    time: "09:40",
  },
  {
    id: "4",
    name: "Dra. Elena Ortiz (Traumatología)",
    initial: "E",
    avatarUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200",
    lastMsg: "Paciente derivado con orden médica adjunta",
    time: "Ayer",
  },
];

export interface MacbookMockupProps {
  headerTitle?: string;
  headerSubtitle?: string;
  avatarUrl?: string;
  avatarFallback?: string;
  userAvatarUrl?: string;
  isVerified?: boolean;
  messages?: ChatMessage[];
  sidebarChats?: SidebarChatItem[];
  autoPlay?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function MacbookMockup({
  headerTitle = "Laura Mendoza (Lumbalgia)",
  headerSubtitle = "Paciente Activa • Ficha #4092",
  avatarUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  avatarFallback = "L",
  userAvatarUrl = "/images/LogoKenKoMed-removebg-preview.png",
  isVerified = true,
  messages = KENKOMED_DEFAULT_MESSAGES,
  sidebarChats = KENKOMED_SIDEBAR_CHATS,
  autoPlay = true,
  className,
  children,
}: MacbookMockupProps) {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [showTyping, setShowTyping] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    if (!autoPlay || children) {
      return;
    }

    let isMounted = true;
    let t1: NodeJS.Timeout,
      t2: NodeJS.Timeout,
      t3: NodeJS.Timeout,
      t4: NodeJS.Timeout,
      tReset: NodeJS.Timeout;

    const runSequence = () => {
      if (!isMounted) return;
      setVisibleMessages([]);
      setShowTyping(false);

      t1 = setTimeout(() => {
        if (!isMounted) return;
        if (messages[0]) setVisibleMessages([messages[0]]);
        setShowTyping(true);
      }, 800);

      t2 = setTimeout(() => {
        if (!isMounted) return;
        setShowTyping(false);
        if (messages[0] && messages[1]) {
          setVisibleMessages([messages[0], messages[1]]);
        }
        setTimeout(() => {
          if (isMounted) setShowTyping(true);
        }, 650);
      }, 2700);

      t3 = setTimeout(() => {
        if (!isMounted) return;
        setShowTyping(false);
        if (messages.length >= 3) {
          setVisibleMessages([messages[0], messages[1], messages[2]]);
        }
      }, 5000);

      t4 = setTimeout(() => {
        if (!isMounted) return;
        setShowTyping(false);
        setVisibleMessages(messages);
      }, 7400);

      tReset = setTimeout(() => {
        if (isMounted) {
          setCycleKey((prev) => prev + 1);
        }
      }, 11500);
    };

    runSequence();

    return () => {
      isMounted = false;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tReset);
    };
  }, [autoPlay, children, messages, cycleKey]);

  const displayMessages = !autoPlay || children ? messages : visibleMessages;

  return (
    <div
      className={cn(
        "relative mx-auto flex w-full max-w-[480px] transform-gpu flex-col items-center justify-center py-4 select-none [perspective:1200px] sm:max-w-[620px] md:max-w-[720px]",
        className,
      )}
    >
      <motion.div
        initial={{ rotateX: -70, opacity: 0, scale: 0.92 }}
        animate={{ rotateX: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 20, mass: 0.9 }}
        style={{ transformOrigin: "bottom center" }}
        className="relative z-10 flex h-[320px] w-full transform-gpu flex-col overflow-hidden rounded-t-2xl bg-neutral-900 p-2 sm:h-[390px] sm:p-2.5 md:h-[430px] dark:bg-neutral-950 shadow-2xl"
      >
        <div className="relative isolate flex h-full w-full transform-gpu overflow-hidden rounded-t-[10px] bg-white text-neutral-900 transition-colors dark:bg-[#111b21] dark:text-neutral-100">
          {/* Panel Izquierdo: Lista de Chats */}
          <div className="flex w-[170px] shrink-0 flex-col bg-[#f0f2f5] transition-colors sm:w-[220px] md:w-[250px] dark:bg-[#111b21] border-r border-neutral-200/60 dark:border-neutral-800/60">
            {/* Header del Sidebar */}
            <div className="flex shrink-0 items-center justify-between bg-[#f0f2f5] px-3 py-2 dark:bg-[#202c33]">
              {/* Logo de Kenkomed en el avatar de usuario */}
              <div className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#111b21] border border-emerald-500/40 p-0.5 shadow-xs">
                {userAvatarUrl ? (
                  <img
                    src={userAvatarUrl}
                    alt="Logo Kenkomed"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <span className="text-[10px] font-bold text-emerald-600">K</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                <button
                  type="button"
                  aria-label="Estado"
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <CircleDashed className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Nuevo chat"
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <MessageSquarePlus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Más opciones"
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <MoreVertical className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>

            {/* Barra de búsqueda */}
            <div className="p-2">
              <div className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1 text-xs text-neutral-400 dark:bg-[#202c33]">
                <Search className="h-3.5 w-3.5 shrink-0 text-neutral-500 dark:text-neutral-400" />
                <span className="truncate text-[10.5px]">Buscar chat o ficha...</span>
                <ListFilter className="ml-auto h-3 w-3 shrink-0 text-neutral-400" />
              </div>
            </div>

            {/* Lista de conversaciones */}
            <div className="flex-1 [scrollbar-width:none] overflow-y-auto [&::-webkit-scrollbar]:hidden">
              {sidebarChats.map((chat) => (
                <div
                  key={chat.id}
                  className={cn(
                    "relative flex cursor-pointer items-center gap-2.5 px-3 py-2.5 transition-colors",
                    chat.isActive
                      ? "bg-neutral-200/70 dark:bg-[#2a3942]"
                      : "hover:bg-neutral-200/40 dark:hover:bg-[#202c33]/60",
                  )}
                >
                  {chat.isActive && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#00a884]" />
                  )}

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-700 text-xs font-bold text-white sm:h-8 sm:w-8 dark:bg-emerald-900">
                    {chat.avatarUrl ? (
                      <img
                        src={chat.avatarUrl}
                        alt={chat.name}
                        className={cn(
                          "h-full w-full",
                          chat.avatarUrl.includes("Logo") ? "object-contain bg-white dark:bg-[#111b21] p-0.5" : "object-cover"
                        )}
                      />
                    ) : (
                      <span>{chat.initial}</span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="truncate text-[11px] font-semibold text-neutral-900 dark:text-neutral-100">
                        {chat.name}
                      </span>
                      <span className="shrink-0 text-[9px] text-neutral-400 dark:text-neutral-400">
                        {chat.time}
                      </span>
                    </div>
                    <p className="mt-0.5 truncate text-[10px] text-neutral-500 dark:text-neutral-400">
                      {chat.lastMsg}
                    </p>
                  </div>

                  {chat.unreadCount && (
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-[9px] font-bold text-white">
                      {chat.unreadCount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Panel Derecho: Conversación Activa */}
          <div className="relative flex min-w-0 flex-1 flex-col bg-[#efeae2] transition-colors dark:bg-[#0b141a]">
            {/* Header del chat con Logo de Kenkomed y verificación oficial */}
            <div className="z-10 flex shrink-0 items-center justify-between bg-[#f0f2f5] px-3.5 py-2 dark:bg-[#202c33] border-b border-neutral-200/40 dark:border-neutral-800/40">
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#111b21] border border-emerald-500/40 p-1 shadow-xs">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={headerTitle}
                      className={cn(
                        "h-full w-full",
                        avatarUrl.includes("Logo") ? "object-contain" : "object-cover rounded-full"
                      )}
                    />
                  ) : (
                    <span className="text-xs font-bold text-emerald-600">{avatarFallback}</span>
                  )}
                </div>
                <div className="flex min-w-0 flex-col">
                  <div className="flex items-center gap-1">
                    <span className="truncate text-xs leading-tight font-semibold text-neutral-900 dark:text-neutral-100">
                      {headerTitle}
                    </span>
                    {isVerified && (
                      <CheckCircle2 className="h-3 w-3 fill-emerald-500 text-white shrink-0" />
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                    {headerSubtitle}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                <button
                  type="button"
                  aria-label="Buscar"
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Opciones"
                  className="transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  <MoreVertical className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>

            {/* Mensajes del chat */}
            <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end space-y-2.5 overflow-hidden p-3.5">
              {children ? (
                <div className="h-full w-full [scrollbar-width:none] overflow-y-auto [&::-webkit-scrollbar]:hidden">
                  {children}
                </div>
              ) : (
                <>
                  <div className="mx-auto my-1 flex max-w-[90%] items-center justify-center gap-1.5 rounded-md bg-[#ffeebd] px-3 py-1 text-center text-[9.5px] text-amber-900 dark:bg-[#182229] dark:text-amber-200/80 shadow-xs">
                    <Lock className="h-2.5 w-2.5 shrink-0 text-amber-700 dark:text-amber-400" />
                    <span>Comunicación encriptada y conforme a ficha clínica digital Kenkomed.</span>
                  </div>

                  <div className="mx-auto my-0.5 rounded-md bg-white/80 px-2.5 py-0.5 text-[9px] font-semibold tracking-wider text-neutral-500 uppercase dark:bg-[#182229]/90 dark:text-neutral-400">
                    HOY
                  </div>

                  <div className="flex flex-1 [scrollbar-width:none] flex-col justify-end space-y-2.5 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                    <AnimatePresence mode="sync">
                      {displayMessages.map((msg) => (
                        <motion.div
                          key={`${cycleKey}-${msg.id}`}
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className={`flex flex-col ${msg.isCurrentUser ? "items-end" : "items-start"}`}
                        >
                          <div
                            className={cn(
                              "relative max-w-[78%] rounded-lg px-3 py-1.5 text-xs transition-colors shadow-xs",
                              msg.isCurrentUser
                                ? "rounded-tr-none bg-[#dcf8c6] text-neutral-900 dark:bg-[#005c4b] dark:text-neutral-100"
                                : "rounded-tl-none bg-white text-neutral-900 dark:bg-[#202c33] dark:text-neutral-100",
                            )}
                          >
                            {!msg.isCurrentUser && (
                              <p className="mb-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                                {msg.sender}
                              </p>
                            )}

                            {msg.isAudio ? (
                              <div className="flex min-w-[180px] items-center gap-3 py-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setIsPlayingAudio(!isPlayingAudio)
                                  }
                                  aria-label={isPlayingAudio ? "Pausar nota de voz" : "Reproducir nota de voz"}
                                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors hover:bg-emerald-700"
                                >
                                  <Play className="ml-0.5 h-3 w-3 fill-current" />
                                </button>
                                <div className="flex flex-1 flex-col gap-1">
                                  <div className="flex h-3 items-center gap-0.5">
                                    {[
                                      40, 75, 30, 90, 60, 100, 45, 80, 50, 70,
                                      35, 90, 65, 40, 85, 55,
                                    ].map((h, idx) => (
                                      <span
                                        key={idx}
                                        className="w-1 rounded-full bg-emerald-600/80 dark:bg-emerald-400/80"
                                        style={{ height: `${h}%` }}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-[9px] text-neutral-500 dark:text-neutral-400">
                                    Nota de voz • {msg.audioDuration}
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <p className="xs:text-xs text-[11.5px] leading-snug">
                                {msg.text}
                              </p>
                            )}

                            <div className="mt-0.5 flex items-center justify-end gap-1">
                              <span
                                className={cn(
                                  "text-[9px]",
                                  msg.isCurrentUser
                                    ? "text-emerald-950 dark:text-emerald-100 font-medium"
                                    : "text-neutral-600 dark:text-neutral-300",
                                )}
                              >
                                {msg.timestamp}
                              </span>
                              {msg.isCurrentUser && (
                                <CheckCheck className="h-3.5 w-3.5 text-[#53bdeb]" />
                              )}
                            </div>

                            {msg.reaction && (
                              <div className="py-0.2 absolute right-2 -bottom-2 rounded-full bg-white px-1.5 text-[9px] dark:bg-[#182229] border border-neutral-200 dark:border-neutral-700 shadow-xs">
                                {msg.reaction}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}

                      {showTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center justify-start"
                        >
                          <div className="flex items-center gap-1.5 rounded-lg rounded-tl-none bg-white px-3 py-2 dark:bg-[#202c33] shadow-xs">
                            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                              escribiendo
                            </span>
                            <div className="flex items-center gap-1">
                              {[0, 1, 2].map((dotIndex) => (
                                <motion.span
                                  key={dotIndex}
                                  className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
                                  animate={{
                                    y: [0, -3, 0],
                                    opacity: [0.4, 1, 0.4],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: dotIndex * 0.15,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              )}
            </div>

            {/* Input del Chat */}
            <div className="z-10 flex shrink-0 items-center gap-2 bg-[#f0f2f5] p-2.5 dark:bg-[#111b21] border-t border-neutral-200/40 dark:border-neutral-800/40">
              <button
                type="button"
                aria-label="Emojis"
                className="p-1 text-neutral-600 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
              >
                <Smile className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Adjuntar archivo o ficha"
                className="p-1 text-neutral-600 transition-colors hover:text-emerald-600 dark:text-neutral-400 dark:hover:text-emerald-400"
              >
                <Paperclip className="h-4 w-4" />
              </button>
              <div className="flex-1 rounded-lg bg-white px-3 py-1.5 text-xs text-neutral-400 dark:bg-[#2a3942] dark:text-neutral-400">
                Escribe un mensaje o indicación clínica...
              </div>
              <button
                type="button"
                aria-label="Grabar audio"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white transition-colors hover:bg-emerald-600 shadow-xs"
              >
                <Mic className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Base física del MacBook con notch y bisagra */}
      <div className="relative z-20 flex h-3.5 w-[105%] max-w-[520px] items-start justify-center rounded-b-xl bg-neutral-300 sm:h-4 sm:max-w-[670px] md:max-w-[770px] dark:bg-neutral-800 shadow-lg">
        <div className="h-1.5 w-14 rounded-b-md bg-neutral-400/90 sm:w-20 dark:bg-neutral-700/90" />
      </div>
    </div>
  );
}

export default MacbookMockup;
