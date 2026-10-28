'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { useReveal } from '@/hooks/use-scroll-animation'

interface MgDevLaptopProps {
  className?: string
  kicker?: string
  headline?: string
  caption?: string
  imageSrc?: string
}

export function MgDevLaptopShowcase({
  className,
  kicker = "KenkoMed for clinics",
  headline = "Tu clínica completa en una pantalla",
  caption = "Fichas SOAP, agenda multi-box y resúmenes clínicos con IA, en vivo para tu equipo.",
  imageSrc = "/software/panel.png"
}: MgDevLaptopProps) {
  const { ref: containerRef, isVisible } = useReveal<HTMLDivElement>({ threshold: 0.1, rootMargin: '60px' })

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-6xl mx-auto my-4", className)}
      style={{ '--laptop-play-state': isVisible ? 'running' : 'paused' } as React.CSSProperties}
    >
      <style>{`
        /* ── 21st.dev mg-dev-laptop Exact Engine ── */
        .v-dev-laptop-root {
          container-type: inline-size;
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          min-height: 480px;
          border-radius: 2rem;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 25px 60px -15px rgba(15, 23, 42, 0.08), 0 1px 3px rgba(15, 23, 42, 0.04);
          color: #0f172a;
          font-family: inherit;
          box-sizing: border-box;
          user-select: none;
        }

        .v-dev-laptop-root *,
        .v-dev-laptop-root *::before,
        .v-dev-laptop-root *::after {
          box-sizing: border-box;
        }

        /* Ambient haze */
        .v-dev-laptop-root .haze {
          position: absolute;
          inset: 0;
          background: radial-gradient(50% 35% at 75% 85%, rgba(2, 132, 199, 0.04), transparent 70%);
          pointer-events: none;
        }

        /* 3D Scene Viewport */
        .v-dev-laptop-root .scene {
          position: absolute;
          inset: 0;
          perspective: 165cqw;
          perspective-origin: 50% 22%;
        }

        /* 3D Rig - animated 21st.dev orbit (runs once, stays open) */
        .v-dev-laptop-root .rig {
          position: absolute;
          left: 50%;
          top: 33.4cqw;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          animation: dev-laptop-orbit 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        /* Ground Shadow */
        .v-dev-laptop-root .shadow {
          position: absolute;
          left: -36cqw;
          top: 0;
          width: 72cqw;
          height: 48cqw;
          transform-origin: 50% 0;
          transform: rotateX(90deg) translate3d(0, -7cqw, -1.35cqw);
          background: radial-gradient(46% 40% at 50% 46%, rgba(15, 23, 42, 0.32), rgba(15, 23, 42, 0.09) 55%, transparent 100%);
          filter: blur(5px);
        }

        /* Laptop Base (Keyboard Deck) */
        .v-dev-laptop-root .base {
          position: absolute;
          left: -23cqw;
          top: 0;
          width: 46cqw;
          height: 31cqw;
          transform-origin: 50% 0;
          transform: rotateX(90deg);
          transform-style: preserve-3d;
          border-radius: 0.5cqw 0.5cqw 2.2cqw 2.2cqw;
          background: linear-gradient(180deg, #c4c4ca 0%, #dcdce1 18%, #d6d6db 70%, #cbcbd1 100%);
          box-shadow: inset 0 -0.3cqw 0.3cqw rgba(255, 255, 255, 0.75), inset 0 0.25cqw 0.5cqw rgba(0, 0, 0, 0.2);
        }

        /* Chiclet keyboard */
        .v-dev-laptop-root .kb {
          position: absolute;
          left: 6.2cqw;
          right: 6.2cqw;
          top: 2.4cqw;
          height: 12.4cqw;
          border-radius: 0.7cqw;
          background: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0) 0 2.16cqw, #121215 2.16cqw 2.48cqw),
                      repeating-linear-gradient(90deg, #2b2b31 0 2.3cqw, #121215 2.3cqw 2.62cqw);
          box-shadow: 0 0 0 0.22cqw #bdbdc3, inset 0 0.1cqw 0.3cqw rgba(0, 0, 0, 0.6);
        }

        /* Speaker Grilles */
        .v-dev-laptop-root .spk {
          position: absolute;
          top: 2.4cqw;
          height: 12.4cqw;
          width: 3.4cqw;
          background: radial-gradient(circle, rgba(40, 41, 44, 0.4) 0.11cqw, rgba(0, 0, 0, 0) 0.16cqw) 0 0/0.55cqw 0.55cqw;
        }
        .v-dev-laptop-root .spk.l { left: 1.6cqw; }
        .v-dev-laptop-root .spk.r { right: 1.6cqw; }

        /* Trackpad */
        .v-dev-laptop-root .tp {
          position: absolute;
          left: 50%;
          top: 16.8cqw;
          width: 17cqw;
          height: 11.4cqw;
          margin-left: -8.5cqw;
          border-radius: 1cqw;
          background: linear-gradient(180deg, #d2d2d8, #cacad0);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08), inset 0 0.12cqw 0.2cqw rgba(255, 255, 255, 0.7);
        }

        /* Sapphire/Teal Screen Light Spill */
        .v-dev-laptop-root .spill {
          position: absolute;
          left: 3cqw;
          right: 3cqw;
          top: 0;
          height: 14cqw;
          background: radial-gradient(60% 100% at 50% 0%, rgba(2, 132, 199, 0.45) 0%, rgba(2, 132, 199, 0.12) 42%, transparent 72%);
          opacity: 0;
          animation: dev-laptop-on 3.4s ease forwards;
          animation-play-state: var(--laptop-play-state, running);
          pointer-events: none;
        }

        /* Front Edge Lip */
        .v-dev-laptop-root .lip {
          position: absolute;
          left: 1.6cqw;
          right: 1.6cqw;
          top: 100%;
          height: 1.15cqw;
          transform-origin: 50% 0;
          transform: rotateX(-90deg);
          border-radius: 0 0 1.2cqw 1.2cqw;
          background: linear-gradient(180deg, #bcbcc2, #8b8b93);
        }
        .v-dev-laptop-root .lip i {
          position: absolute;
          left: 50%;
          top: 0;
          width: 7cqw;
          height: 0.45cqw;
          margin-left: -3.5cqw;
          border-radius: 0 0 0.6cqw 0.6cqw;
          background: #7d7d85;
        }

        /* Screen Lid (Upright open in 3D - animated opening, stays open) */
        .v-dev-laptop-root .lid {
          position: absolute;
          left: -23cqw;
          top: -27.5cqw;
          width: 46cqw;
          height: 27.5cqw;
          transform-origin: 50% 100%;
          transform-style: preserve-3d;
          animation: dev-laptop-lid 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        .v-dev-laptop-root .front,
        .v-dev-laptop-root .back {
          position: absolute;
          inset: 0;
          border-radius: 1.6cqw 1.6cqw 0.5cqw 0.5cqw;
          backface-visibility: hidden;
        }

        .v-dev-laptop-root .front {
          background: #0a0a0c;
          box-shadow: inset 0 0 0 0.2cqw #5a5a62, inset 0 0 0 0.34cqw #0b0b0e;
        }

        .v-dev-laptop-root .back {
          transform: rotateY(180deg) translateZ(0.12cqw);
          background: linear-gradient(165deg, #efeff2 0%, #d2d2d8 45%, #b3b3ba 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .v-dev-laptop-root .back svg {
          width: 4.6cqw;
          height: 4.6cqw;
          fill: rgba(255, 255, 255, 0.7);
          filter: drop-shadow(0 0.1cqw 0.1cqw rgba(0, 0, 0, 0.18));
        }

        /* Display Viewport */
        .v-dev-laptop-root .scr {
          position: absolute;
          left: 1.1cqw;
          right: 1.1cqw;
          top: 1.1cqw;
          bottom: 1.8cqw;
          border-radius: 0.55cqw;
          overflow: hidden;
          background: #030305;
          container-type: inline-size;
        }

        /* 21st.dev Boot Screen Logo */
        .v-dev-laptop-root .boot {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          animation: dev-laptop-boot 3.4s ease forwards;
          animation-play-state: var(--laptop-play-state, running);
          z-index: 10;
          pointer-events: none;
        }
        .v-dev-laptop-root .boot span {
          width: 8.5cqw;
          height: 8.5cqw;
          border-radius: 2.2cqw;
          background: linear-gradient(135deg, #0284c7, #38bdf8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 7cqw rgba(2, 132, 199, 0.6);
        }
        .v-dev-laptop-root .boot svg {
          width: 5cqw;
          height: 5cqw;
          fill: #fff;
        }

        .v-dev-laptop-root .screen-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: left top;
          display: block;
          user-select: none;
          pointer-events: none;
          opacity: 0;
          animation: dev-laptop-app 3.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        /* Camera Notch */
        .v-dev-laptop-root .notch {
          position: absolute;
          left: 50%;
          top: 1.05cqw;
          width: 5.4cqw;
          height: 1.05cqw;
          margin-left: -2.7cqw;
          border-radius: 0 0 0.6cqw 0.6cqw;
          background: #0a0a0c;
          z-index: 50;
        }
        .v-dev-laptop-root .notch i {
          position: absolute;
          left: 50%;
          top: 0.3cqw;
          width: 0.42cqw;
          height: 0.42cqw;
          margin-left: -0.21cqw;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #3c4a7a, #0d0f18 70%);
        }

        /* Glare */
        .v-dev-laptop-root .glare {
          position: absolute;
          left: -40%;
          top: -20%;
          width: 180%;
          height: 140%;
          background: linear-gradient(112deg, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.14) 45%, rgba(255, 255, 255, 0.03) 52%, transparent 58%);
          pointer-events: none;
          z-index: 20;
          animation: dev-laptop-glare 3.4s ease forwards;
          animation-play-state: var(--laptop-play-state, running);
        }

        /* ── 21st.dev Core Keyframes (Single Reveal Entrance Sequence) ── */
        @keyframes dev-laptop-orbit {
          0% {
            transform: scale3d(0.92, 0.92, 0.92) translate3d(0cqw, 0cqw, -12cqw) rotateX(-26deg) rotateY(-18deg);
            animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          }
          100% {
            transform: scale3d(0.92, 0.92, 0.92) translate3d(0cqw, 0cqw, 0cqw) rotateX(-13deg) rotateY(12deg);
          }
        }

        @keyframes dev-laptop-lid {
          0%, 8% {
            transform: rotateX(-88.6deg);
            animation-timing-function: cubic-bezier(0.5, 0, 0.2, 1);
          }
          46% {
            transform: rotateX(21deg);
            animation-timing-function: cubic-bezier(0.3, 0, 0.3, 1);
          }
          66%, 100% {
            transform: rotateX(16deg);
          }
        }

        @keyframes dev-laptop-boot {
          0%, 18% {
            opacity: 0;
            transform: scale(0.82);
          }
          27% {
            opacity: 1;
            transform: scale(1);
            animation-timing-function: ease-in;
          }
          36% {
            opacity: 1;
            transform: scale(1.02);
          }
          46%, 100% {
            opacity: 0;
            transform: scale(1.1);
            pointer-events: none;
          }
        }

        @keyframes dev-laptop-app {
          0%, 38% {
            opacity: 0;
            transform: scale(1.03);
            animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
          }
          54%, 100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes dev-laptop-on {
          0%, 34% {
            opacity: 0;
          }
          52%, 100% {
            opacity: 0.85;
          }
        }

        @keyframes dev-laptop-glare {
          0% {
            transform: translateX(-22cqw);
            animation-timing-function: cubic-bezier(0.4, 0.1, 0.5, 1);
          }
          65%, 100% {
            transform: translateX(18cqw);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .v-dev-laptop-root .rig {
            animation: none !important;
            transform: scale3d(0.92, 0.92, 0.92) rotateX(-13deg) rotateY(12deg) !important;
          }
          .v-dev-laptop-root .lid {
            animation: none !important;
            transform: rotateX(16deg) !important;
          }
          .v-dev-laptop-root .screen-img {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .v-dev-laptop-root .boot {
            display: none !important;
          }
          .v-dev-laptop-root .spill {
            animation: none !important;
            opacity: 0.85 !important;
          }
          .v-dev-laptop-root .glare {
            animation: none !important;
          }
        }

        /* ── Transform Frame (xfr) for Positioning & Scale ── */
        .v-dev-laptop-root .xfr {
          position: absolute;
          left: 0;
          top: 0;
          width: 100cqw;
          height: 56.25cqw;
          transform-origin: 0 0;
          transform: translate(29cqw, 6cqw) scale(0.8);
        }

        /* ── Left Column Copy (xcopy) ── */
        .v-dev-laptop-root .xcopy {
          position: absolute;
          left: 6cqw;
          top: 0;
          bottom: 0;
          width: 32cqw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2.4cqw;
          z-index: 40;
          color: #0f172a;
        }

        .v-dev-laptop-root .xtop {
          display: flex;
          flex-direction: column;
          gap: 1.5cqw;
        }

        .v-dev-laptop-root .xk {
          display: flex;
          align-items: center;
          gap: 0.8cqw;
          font-family: var(--font-mono, monospace);
          font-weight: 600;
          font-size: 1.4cqw;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #64748b;
        }
        .v-dev-laptop-root .xk b {
          width: 0.8cqw;
          height: 0.8cqw;
          border-radius: 50%;
          background: #0284c7;
          box-shadow: 0 0 1cqw #0284c7;
          flex: none;
        }

        .v-dev-laptop-root .xh {
          font-family: var(--font-display, inherit);
          font-weight: 800;
          font-size: 4.4cqw;
          line-height: 1.04;
          letter-spacing: -0.04em;
          color: #0f172a;
        }

        .v-dev-laptop-root .xc {
          font-size: 1.6cqw;
          line-height: 1.55;
          color: #475569;
        }

        /* Interactive Action Buttons on Left */
        .v-dev-laptop-root .xactions {
          display: flex;
          align-items: center;
          gap: 1.2cqw;
          margin-top: 0.5cqw;
        }

        .v-dev-laptop-root .xbtn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6cqw;
          padding: 0.8cqw 1.8cqw;
          background: #0284c7;
          color: #fff;
          font-weight: 700;
          font-size: 1.4cqw;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 0.8cqw 2cqw rgba(2, 132, 199, 0.28);
          transition: transform 0.2s, background 0.2s;
          cursor: pointer;
        }
        .v-dev-laptop-root .xbtn-primary:hover {
          background: #0369a1;
          transform: translateY(-0.1cqw);
        }

        .v-dev-laptop-root .xbtn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 0.8cqw 1.4cqw;
          color: #334155;
          font-weight: 600;
          font-size: 1.4cqw;
          border-radius: 999px;
          text-decoration: none;
          cursor: pointer;
        }
        .v-dev-laptop-root .xbtn-ghost:hover {
          color: #0284c7;
        }

        /* ── Responsive Architecture for All Devices ── */

        /* Tablet & Small Desktop (901px - 1100px) */
        @media (min-width: 901px) and (max-width: 1100px) {
          .v-dev-laptop-root {
            min-height: 440px;
          }
          .v-dev-laptop-root .xfr {
            transform: translate(25cqw, 7cqw) scale(0.76);
          }
          .v-dev-laptop-root .xcopy {
            left: 5cqw;
            width: 35cqw;
            gap: 1.8cqw;
          }
          .v-dev-laptop-root .xh {
            font-size: 4cqw;
          }
        }

        /* Mobile & Tablet Portrait (<= 900px) */
        @media (max-width: 900px) {
          .v-dev-laptop-root {
            aspect-ratio: auto;
            min-height: auto;
            padding: 2.5rem 1.5rem 2.75rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 1.5rem;
            overflow: hidden;
          }

          /* Ambient haze adapted for vertical card */
          .v-dev-laptop-root .haze {
            background: radial-gradient(60% 40% at 50% 85%, rgba(2, 132, 199, 0.05), transparent 75%);
          }

          /* Text column becomes full-width header stacked on top */
          .v-dev-laptop-root .xcopy {
            position: relative;
            left: auto;
            top: auto;
            bottom: auto;
            width: 100%;
            max-width: 520px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 0 auto;
            gap: 1.15rem;
            z-index: 10;
          }

          .v-dev-laptop-root .xtop {
            align-items: center;
            gap: 0.65rem;
            text-align: center;
          }

          .v-dev-laptop-root .xk {
            font-size: 0.8125rem;
            letter-spacing: 0.06em;
            justify-content: center;
            gap: 0.5rem;
          }

          .v-dev-laptop-root .xk b {
            width: 0.5rem;
            height: 0.5rem;
          }

          .v-dev-laptop-root .xh {
            font-size: clamp(1.75rem, 5.5vw, 2.35rem);
            line-height: 1.12;
            letter-spacing: -0.035em;
          }

          .v-dev-laptop-root .xc {
            font-size: clamp(0.92rem, 2.8vw, 1.05rem);
            line-height: 1.55;
            max-width: 440px;
          }

          .v-dev-laptop-root .xactions {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            flex-wrap: wrap;
            margin-top: 0.25rem;
            width: 100%;
          }

          .v-dev-laptop-root .xbtn-primary {
            font-size: 0.875rem;
            padding: 0.7rem 1.45rem;
          }

          .v-dev-laptop-root .xbtn-ghost {
            font-size: 0.875rem;
            padding: 0.7rem 1.15rem;
          }

          /* 3D Laptop Stage positioned below the copy */
          .v-dev-laptop-root .xfr {
            position: relative;
            left: auto;
            top: auto;
            width: 100%;
            height: clamp(280px, 60vw, 380px);
            transform: none;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 0.75rem;
          }

          .v-dev-laptop-root .scene {
            position: absolute;
            inset: 0;
            perspective: 140cqw;
            perspective-origin: 50% 25%;
          }

          .v-dev-laptop-root .rig {
            left: 50%;
            top: 50%;
            transform: scale3d(1.35, 1.35, 1.35) rotateX(-14deg) rotateY(8deg);
          }

          .v-dev-laptop-root:hover .rig {
            transform: scale3d(1.38, 1.38, 1.38) rotateX(-12deg) rotateY(5deg);
          }
        }

        /* Small Phones (<= 480px, e.g. iPhone, Galaxy) */
        @media (max-width: 480px) {
          .v-dev-laptop-root {
            padding: 1.75rem 1rem 2rem;
            border-radius: 1.25rem;
          }

          .v-dev-laptop-root .xcopy {
            gap: 0.9rem;
          }

          .v-dev-laptop-root .xh {
            font-size: clamp(1.5rem, 6.5vw, 1.85rem);
            line-height: 1.15;
          }

          .v-dev-laptop-root .xc {
            font-size: 0.875rem;
            line-height: 1.5;
          }

          .v-dev-laptop-root .xactions {
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
          }

          .v-dev-laptop-root .xbtn-primary,
          .v-dev-laptop-root .xbtn-ghost {
            width: 100%;
            justify-content: center;
            text-align: center;
            box-sizing: border-box;
          }

          .v-dev-laptop-root .xfr {
            height: 250px;
            margin-top: 0.25rem;
          }

          .v-dev-laptop-root .rig {
            top: 52%;
            transform: scale3d(1.22, 1.22, 1.22) rotateX(-14deg) rotateY(6deg);
          }
        }
      `}</style>

      <div className="v-dev-laptop-root">
        {/* Ambient warm haze */}
        <div className="haze" aria-hidden="true" />

        {/* ── 3D Laptop in Orbit Angle (Right Side) ── */}
        <div className="xfr">
          <div className="scene">
            <div className="rig">
              {/* Soft ground shadow */}
              <div className="shadow" />

              {/* Laptop base (keyboard & trackpad) */}
              <div className="base">
                <div className="spk l" />
                <div className="spk r" />
                <div className="kb" />
                <div className="tp" />
                <div className="spill" />
                <div className="lip"><i /></div>
              </div>

              {/* Laptop screen lid */}
              <div className="lid">
                <div className="back">
                  {/* Subtle clean logo badge on aluminum cover */}
                  <svg viewBox="0 0 24 24">
                    <path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z" />
                  </svg>
                </div>

                <div className="front">
                  {/* Display screen */}
                  <div className="scr">
                    {/* 21st.dev Boot Screen Logo */}
                    <div className="boot">
                      <span>
                        <svg viewBox="0 0 24 24">
                          <path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z" />
                        </svg>
                      </span>
                    </div>

                    <img
                      src={imageSrc}
                      alt="Panel de control clínico KenkoMed"
                      className="screen-img"
                      loading="eager"
                      decoding="async"
                    />

                    {/* Glare specular reflection */}
                    <div className="glare" />
                  </div>

                  {/* Display camera notch */}
                  <div className="notch"><i /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Left Column Copy (Exact matching Image 1) ── */}
        <div className="xcopy">
          <div className="xtop">
            <div className="xk">
              <b />
              {kicker}
            </div>
            <div className="xh">
              {headline}
            </div>
          </div>

          <div className="xc">
            {caption}
          </div>

          <div className="xactions">
            <a href="#contact" className="xbtn-primary">
              Probar plataforma
            </a>
            <a href="/funcionalidades" className="xbtn-ghost">
              Ver catálogo →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MgDevLaptopShowcase
