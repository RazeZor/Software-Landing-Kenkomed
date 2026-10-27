'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface MgDevLaptopProps {
  className?: string
  kicker?: string
  headline?: string
  caption?: string
}

export function MgDevLaptopShowcase({
  className,
  kicker = "KenkoMed for clinics",
  headline = "Tu clínica completa en una pantalla",
  caption = "Fichas SOAP, agenda multi-box y resúmenes clínicos con IA, en vivo para tu equipo."
}: MgDevLaptopProps) {
  const [activeTab, setActiveTab] = useState<'kpi' | 'soap' | 'agenda'>('kpi')

  return (
    <div className={cn("relative w-full max-w-6xl mx-auto my-4", className)}>
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

        /* 3D Rig positioned precisely like 21st mg-dev-laptop */
        .v-dev-laptop-root .rig {
          position: absolute;
          left: 50%;
          top: 33.4cqw;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
          transform: scale3d(0.92, 0.92, 0.92) translate3d(0cqw, 0cqw, 0cqw) rotateX(-14deg) rotateY(12deg);
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .v-dev-laptop-root:hover .rig {
          transform: scale3d(0.94, 0.94, 0.94) translate3d(0cqw, -0.8cqw, 0cqw) rotateX(-12deg) rotateY(8deg);
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
          opacity: 0.85;
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

        /* Screen Lid (Upright open in 3D) */
        .v-dev-laptop-root .lid {
          position: absolute;
          left: -23cqw;
          top: -30cqw;
          width: 46cqw;
          height: 30cqw;
          transform-origin: 50% 100%;
          transform-style: preserve-3d;
          transform: rotateX(16deg);
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

        /* Screen App UI */
        .v-dev-laptop-root .app {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 20cqw 1fr;
          background: #0d0e14;
          color: #eaecf0;
          font-size: 1.9cqw;
          opacity: 1;
        }

        .v-dev-laptop-root .side {
          background: #090a0f;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          padding: 2.6cqw 1.6cqw;
          display: flex;
          flex-direction: column;
          gap: 0.5cqw;
        }

        .v-dev-laptop-root .ws {
          display: flex;
          align-items: center;
          gap: 1.2cqw;
          font-weight: 700;
          font-size: 2.2cqw;
          margin: 0 0 2.2cqw 0.6cqw;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .v-dev-laptop-root .mk {
          width: 3.4cqw;
          height: 3.4cqw;
          border-radius: 1cqw;
          background: linear-gradient(135deg, #0284c7, #38bdf8);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.4);
        }
        .v-dev-laptop-root .mk svg {
          width: 2.2cqw;
          height: 2.2cqw;
          fill: #fff;
        }

        .v-dev-laptop-root .nv {
          display: flex;
          align-items: center;
          gap: 1.2cqw;
          padding: 1cqw 1.1cqw;
          border-radius: 1cqw;
          color: #8e90a6;
          font-size: 1.8cqw;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .v-dev-laptop-root .nv:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }
        .v-dev-laptop-root .nv.on {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          font-weight: 600;
        }
        .v-dev-laptop-root .nv svg {
          width: 2.3cqw;
          height: 2.3cqw;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .v-dev-laptop-root .nv em {
          margin-left: auto;
          font-style: normal;
          font-size: 1.4cqw;
          font-weight: 700;
          background: #0284c7;
          color: #fff;
          border-radius: 1cqw;
          padding: 0.1cqw 0.8cqw;
        }

        .v-dev-laptop-root .cap {
          font-size: 1.4cqw;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #5d6078;
          margin: 1.8cqw 0 0.5cqw 1.1cqw;
        }

        .v-dev-laptop-root .sp {
          display: flex;
          align-items: center;
          gap: 1.2cqw;
          padding: 0.7cqw 1.1cqw;
          color: #a7a9bd;
          font-size: 1.7cqw;
        }
        .v-dev-laptop-root .sp i {
          width: 1.3cqw;
          height: 1.3cqw;
          border-radius: 0.4cqw;
          background: var(--c);
        }

        /* Main Workspace */
        .v-dev-laptop-root .main {
          padding: 2.6cqw 3.2cqw;
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
        }

        .v-dev-laptop-root .top {
          display: flex;
          align-items: center;
          gap: 1.4cqw;
          color: #7f8299;
          font-size: 1.7cqw;
        }
        .v-dev-laptop-root .top b {
          color: #d9dae6;
          font-weight: 600;
        }

        .v-dev-laptop-root .avs {
          margin-left: auto;
          display: flex;
        }
        .v-dev-laptop-root .avs i {
          width: 2.8cqw;
          height: 2.8cqw;
          border-radius: 50%;
          border: 0.3cqw solid #0d0e14;
          margin-left: -0.9cqw;
          background: linear-gradient(135deg, #ffb38a, #e5677d);
        }
        .v-dev-laptop-root .avs i:nth-child(2) {
          background: linear-gradient(135deg, #7fd3ff, #5a6cff);
        }
        .v-dev-laptop-root .avs i:nth-child(3) {
          background: linear-gradient(135deg, #9ff0c9, #2fb98a);
        }

        .v-dev-laptop-root .share {
          background: #f1f1f6;
          color: #111219;
          border-radius: 1cqw;
          padding: 0.6cqw 1.5cqw;
          font-weight: 600;
          font-size: 1.6cqw;
          cursor: pointer;
        }

        .v-dev-laptop-root .h {
          font-size: 4.4cqw;
          font-weight: 700;
          letter-spacing: -0.035em;
          margin-top: 2.4cqw;
          color: #fff;
          line-height: 1.1;
        }

        .v-dev-laptop-root .sub {
          display: flex;
          align-items: center;
          gap: 0.8cqw;
          color: #7f8299;
          font-size: 1.7cqw;
          margin-top: 0.6cqw;
        }
        .v-dev-laptop-root .sub svg {
          width: 1.9cqw;
          height: 1.9cqw;
          fill: #38bdf8;
        }

        /* KPIs Row */
        .v-dev-laptop-root .kpis {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6cqw;
          margin-top: 2.6cqw;
        }
        .v-dev-laptop-root .k {
          background: #14151e;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 1.5cqw;
          padding: 1.6cqw 1.8cqw;
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          row-gap: 0.4cqw;
        }
        .v-dev-laptop-root .k span {
          grid-column: 1 / 3;
          color: #8b8da5;
          font-size: 1.6cqw;
        }
        .v-dev-laptop-root .k b {
          font-size: 3.6cqw;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .v-dev-laptop-root .k em {
          font-style: normal;
          font-size: 1.45cqw;
          font-weight: 700;
          color: #45e0a0;
          background: rgba(69, 224, 160, 0.12);
          border-radius: 0.8cqw;
          padding: 0.2cqw 0.8cqw;
          margin-bottom: 0.5cqw;
        }

        /* Bottom Row (Chart + AI) */
        .v-dev-laptop-root .row {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 1.6cqw;
          margin-top: 1.6cqw;
          flex: 1;
          min-height: 0;
          margin-bottom: 0.4cqw;
        }

        .v-dev-laptop-root .chart,
        .v-dev-laptop-root .ai {
          border-radius: 1.5cqw;
          padding: 1.6cqw 1.8cqw;
          display: flex;
          flex-direction: column;
        }

        .v-dev-laptop-root .chart {
          background: #14151e;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .v-dev-laptop-root .chart span {
          color: #8b8da5;
          font-size: 1.6cqw;
          font-weight: 500;
        }

        .v-dev-laptop-root .bars {
          flex: 1;
          display: flex;
          align-items: flex-end;
          gap: 0.9cqw;
          margin-top: 1.4cqw;
          transform-origin: 50% 100%;
        }
        .v-dev-laptop-root .bars i {
          flex: 1;
          height: calc(var(--h) * 100%);
          border-radius: 0.5cqw 0.5cqw 0.2cqw 0.2cqw;
          background: linear-gradient(180deg, #38bdf8 0%, #0369a1 100%);
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .v-dev-laptop-root .bars i.hi {
          background: linear-gradient(180deg, #67e8f9 0%, #0284c7 100%);
          opacity: 1;
          box-shadow: 0 0 2cqw rgba(2, 132, 199, 0.55);
        }

        .v-dev-laptop-root .ai {
          background: linear-gradient(160deg, rgba(2, 132, 199, 0.22), rgba(2, 132, 199, 0.08)), #14151e;
          border: 1px solid rgba(56, 189, 248, 0.35);
        }
        .v-dev-laptop-root .aih {
          display: flex;
          align-items: center;
          gap: 0.8cqw;
          font-weight: 700;
          font-size: 1.8cqw;
          color: #fff;
        }
        .v-dev-laptop-root .aih svg {
          width: 2.2cqw;
          height: 2.2cqw;
          fill: #38bdf8;
        }
        .v-dev-laptop-root .ai p {
          margin: 1.2cqw 0 0;
          color: #c9cad8;
          font-size: 1.7cqw;
          line-height: 1.45;
        }

        .v-dev-laptop-root .chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8cqw;
          margin-top: auto;
          padding-top: 0.6cqw;
        }
        .v-dev-laptop-root .chips span {
          font-size: 1.45cqw;
          font-weight: 600;
          border-radius: 2cqw;
          padding: 0.4cqw 1.1cqw;
          background: rgba(255, 255, 255, 0.1);
          color: #e2e4e8;
          cursor: pointer;
          transition: background 0.2s;
        }
        .v-dev-laptop-root .chips span:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        /* Glare */
        .v-dev-laptop-root .glare {
          position: absolute;
          left: -40%;
          top: -20%;
          width: 180%;
          height: 140%;
          background: linear-gradient(112deg, rgba(255, 255, 255, 0) 38%, rgba(255, 255, 255, 0.11) 45%, rgba(255, 255, 255, 0.03) 52%, transparent 58%);
          pointer-events: none;
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
                    <div className="app">
                      {/* Left Sidebar */}
                      <div className="side">
                        <div className="ws">
                          <span className="mk">
                            <svg viewBox="0 0 24 24">
                              <path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z" />
                            </svg>
                          </span>
                          KenkoMed
                        </div>

                        <div className="nv on">
                          <svg viewBox="0 0 24 24">
                            <path d="M4 11l8-7 8 7v9h-5v-6H9v6H4z" />
                          </svg>
                          Inicio
                        </div>

                        <div className="nv">
                          <svg viewBox="0 0 24 24">
                            <path d="M4 13l2-8h12l2 8v6H4zM4 13h5l1 2h4l1-2h5" />
                          </svg>
                          Pacientes
                          <em>8</em>
                        </div>

                        <div className="nv">
                          <svg viewBox="0 0 24 24">
                            <path d="M3 7h6l2 2h10v10H3z" />
                          </svg>
                          Agenda
                        </div>

                        <div className="nv">
                          <svg viewBox="0 0 24 24">
                            <path d="M12 3v3M5 9h14v10H5zM9.5 14h.01M14.5 14h.01" />
                          </svg>
                          DSS IA
                        </div>

                        <div className="cap">Boxes Clínicos</div>
                        <div className="sp"><i style={{ ['--c' as any]: '#0284c7' }} />Box 1 (Kine)</div>
                        <div className="sp"><i style={{ ['--c' as any]: '#10b981' }} />Box 2 (Columna)</div>
                        <div className="sp"><i style={{ ['--c' as any]: '#f59e0b' }} />Box 3 (Deporte)</div>
                      </div>

                      {/* Main Workspace */}
                      <div className="main">
                        <div className="top">
                          <span>Box 2 / <b>Paciente #4092 · M. Arias</b></span>
                          <span className="avs"><i /><i /><i /></span>
                          <span className="share">Ley 21.719 ✓</span>
                        </div>

                        <div className="h">Tu gestión clínica en tiempo real</div>

                        <div className="sub">
                          <svg viewBox="0 0 24 24">
                            <path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z" />
                          </svg>
                          Resumen clínico automatizado por IA · 8 pacientes agendados hoy
                        </div>

                        {/* 3 KPIs matching Image 1 */}
                        <div className="kpis">
                          <div className="k">
                            <span>Pacientes Hoy</span>
                            <b>8</b>
                            <em>Multi-Box</em>
                          </div>
                          <div className="k">
                            <span>Adherencia Pautas</span>
                            <b>94%</b>
                            <em>+12%</em>
                          </div>
                          <div className="k">
                            <span>Recuperación ROM</span>
                            <b>+38°</b>
                            <em>+24%</em>
                          </div>
                        </div>

                        {/* Bottom Row: Weekly Bars + AI Card matching Image 1 */}
                        <div className="row">
                          <div className="chart">
                            <span>Evolución ROM Semanal (Goniometría)</span>
                            <div className="bars">
                              <i style={{ ['--h' as any]: 0.28 }} />
                              <i style={{ ['--h' as any]: 0.36 }} />
                              <i style={{ ['--h' as any]: 0.32 }} />
                              <i style={{ ['--h' as any]: 0.45 }} />
                              <i style={{ ['--h' as any]: 0.41 }} />
                              <i style={{ ['--h' as any]: 0.52 }} />
                              <i style={{ ['--h' as any]: 0.50 }} />
                              <i style={{ ['--h' as any]: 0.63 }} />
                              <i style={{ ['--h' as any]: 0.60 }} />
                              <i style={{ ['--h' as any]: 0.74 }} />
                              <i style={{ ['--h' as any]: 0.82 }} />
                              <i className="hi" style={{ ['--h' as any]: 1 }} />
                            </div>
                          </div>

                          <div className="ai">
                            <div className="aih">
                              <svg viewBox="0 0 24 24">
                                <path d="M12 3C12.6 8.4 15.6 11.4 21 12 15.6 12.6 12.6 15.6 12 21 11.4 15.6 8.4 12.6 3 12 8.4 11.4 11.4 8.4 12 3Z" />
                              </svg>
                              KenkoMed DSS
                            </div>
                            <p>Sin banderas rojas detectadas. Pauta de manguito rotador enviada a WhatsApp.</p>
                            <div className="chips">
                              <span>Pauta WhatsApp</span>
                              <span>Ficha SOAP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

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
