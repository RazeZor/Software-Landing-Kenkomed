"use client";

import React, { memo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import {
  Activity,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  TrendingUp,
  FileText,
  CalendarCheck,
  CheckCircle2,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

export interface KenkomedBentoPanProps {
  panSpeed?: number;
  accentColor?: string;
  speed?: number;
  className?: string;
}

const FONT_FAMILY =
  "var(--font-geist-sans), var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

// Dimensiones de repetición infinita para el bucle continuo perfecto
const TILE_W = 2400;
const TILE_H = 1400;

// Paleta de colores de alta fidelidad Kenkomed (vibrante + fondo ultra-dark premium)
const KENKO_BLUE = "#1a6fc4";
const KENKO_MINT = "#00d98b";
const KENKO_SKY = "#38bdf8";
const KENKO_AMBER = "#f59e0b";
const KENKO_CORAL = "#f43f5e";
const KENKO_NAVY = "#05111e";

type CardKind =
  | "chart"
  | "bars"
  | "counter"
  | "stat"
  | "soap"
  | "logo"
  | "whatsapp"
  | "redflags"
  | "convenios"
  | "photo"
  | "gradient";

interface CardDef {
  x: number;
  y: number;
  w: number;
  h: number;
  kind: CardKind;
  accent: string;
  label?: string;
  value?: string;
  delta?: string;
  title?: string;
  sub?: string;
  imgUrl?: string;
}

// 22 tarjetas seleccionadas con la estética exacta del original (números gigantes, gráficos y códigos limpios)
const CARDS: CardDef[] = [
  // ── FILA 1 (y: 60, h: 260) ──
  {
    x: 60,
    y: 60,
    w: 480,
    h: 260,
    kind: "chart",
    accent: KENKO_MINT,
    label: "Evolución ROM Articular",
    title: "Flexión Hombro · 122° (Inicial: 42°)",
  },
  {
    x: 580,
    y: 60,
    w: 280,
    h: 260,
    kind: "counter",
    accent: KENKO_BLUE,
    label: "Pacientes Activos",
    value: "1,420",
    delta: "+18.4%",
  },
  {
    x: 900,
    y: 60,
    w: 460,
    h: 260,
    kind: "soap",
    accent: KENKO_SKY,
    label: "Ficha Clínica SOAP",
    title: "M75.1 Tendinopatía Manguito",
  },
  {
    x: 1400,
    y: 60,
    w: 280,
    h: 260,
    kind: "logo",
    accent: KENKO_BLUE,
    label: "Kenkomed DSS",
  },
  {
    x: 1720,
    y: 60,
    w: 340,
    h: 260,
    kind: "stat",
    accent: KENKO_MINT,
    label: "Tasa de Alta Exitosa",
    value: "89.4",
    sub: "Objetivos funcionales cumplidos",
  },
  {
    x: 2100,
    y: 60,
    w: 260,
    h: 260,
    kind: "gradient",
    accent: KENKO_MINT,
  },

  // ── FILA 2 (y: 360, h: 260) ──
  {
    x: 60,
    y: 360,
    w: 360,
    h: 260,
    kind: "whatsapp",
    accent: "#25D366",
    label: "WhatsApp Automático",
    value: "96.4%",
    delta: "−82% inasistencias",
  },
  {
    x: 460,
    y: 360,
    w: 460,
    h: 260,
    kind: "redflags",
    accent: KENKO_MINT,
    label: "Seguridad Clínica DSS",
    title: "Screening Banderas Rojas",
    sub: "0 alertas críticas detectadas",
  },
  {
    x: 960,
    y: 360,
    w: 380,
    h: 260,
    kind: "bars",
    accent: KENKO_AMBER,
    label: "Escala EVA de Dolor",
    title: "Semana 1 (EVA 8) → Semana 8 (EVA 1)",
  },
  {
    x: 1380,
    y: 360,
    w: 300,
    h: 260,
    kind: "counter",
    accent: KENKO_MINT,
    label: "Ahorro Anamnesis QR",
    value: "-15m",
    delta: "por consulta",
  },
  {
    x: 1720,
    y: 360,
    w: 360,
    h: 260,
    kind: "photo",
    accent: KENKO_BLUE,
    label: "Kinesiología Clínica",
    title: "Rehabilitación y Biomecánica",
    imgUrl:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&auto=format&fit=crop&q=80",
  },
  {
    x: 2120,
    y: 360,
    w: 240,
    h: 260,
    kind: "gradient",
    accent: KENKO_BLUE,
  },

  // ── FILA 3 (y: 660, h: 260) ──
  {
    x: 60,
    y: 660,
    w: 460,
    h: 260,
    kind: "convenios",
    accent: KENKO_SKY,
    label: "Convenios de Salud Chile",
    title: "FONASA + Isapres + SII",
    sub: "Cruce automático de bonos y copagos",
  },
  {
    x: 560,
    y: 660,
    w: 300,
    h: 260,
    kind: "stat",
    accent: KENKO_BLUE,
    label: "Tiempo Registro SOAP",
    value: "2.4",
    sub: "minutos promedio por paciente",
  },
  {
    x: 900,
    y: 660,
    w: 480,
    h: 260,
    kind: "chart",
    accent: KENKO_SKY,
    label: "Dinamometría Isométrica",
    title: "Fuerza Cuádriceps (+45% progreso)",
  },
  {
    x: 1420,
    y: 660,
    w: 360,
    h: 260,
    kind: "photo",
    accent: KENKO_MINT,
    label: "Evaluación en Box",
    title: "Seguimiento Digital en Tablet",
    imgUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&auto=format&fit=crop&q=80",
  },
  {
    x: 1820,
    y: 660,
    w: 280,
    h: 260,
    kind: "logo",
    accent: KENKO_MINT,
    label: "Kenkomed Cloud",
  },
  {
    x: 2140,
    y: 660,
    w: 220,
    h: 260,
    kind: "gradient",
    accent: KENKO_SKY,
  },

  // ── FILA 4 (y: 960, h: 260) ──
  {
    x: 60,
    y: 960,
    w: 320,
    h: 260,
    kind: "counter",
    accent: KENKO_AMBER,
    label: "Sesiones Atendidas",
    value: "8,840",
    delta: "+24% trimestral",
  },
  {
    x: 420,
    y: 960,
    w: 440,
    h: 260,
    kind: "soap",
    accent: KENKO_MINT,
    label: "Protocolo Hombro Doloroso",
    title: "QuickDASH: 68% → 12% discapacidad",
  },
  {
    x: 900,
    y: 960,
    w: 360,
    h: 260,
    kind: "stat",
    accent: KENKO_MINT,
    label: "Adherencia Domiciliaria",
    value: "94.2",
    sub: "Ejercicios prescritos completados",
  },
  {
    x: 1300,
    y: 960,
    w: 480,
    h: 260,
    kind: "bars",
    accent: KENKO_CORAL,
    label: "Escala WOMAC (Artrosis)",
    title: "Disminución progresiva de rigidez",
  },
  {
    x: 1820,
    y: 960,
    w: 300,
    h: 260,
    kind: "counter",
    accent: KENKO_SKY,
    label: "Centros Kinésicos",
    value: "140+",
    delta: "en todo Chile",
  },
  {
    x: 2160,
    y: 960,
    w: 200,
    h: 260,
    kind: "gradient",
    accent: KENKO_AMBER,
  },
];

// Gráfica de curvas ultraligera de alto rendimiento (SVG precomputado estático + estilo original)
function ChartCard({ accent }: { accent: string }) {
  const points = [
    [0, 52],
    [9, 48],
    [18, 44],
    [27, 40],
    [36, 34],
    [45, 29],
    [54, 25],
    [63, 21],
    [72, 16],
    [81, 13],
    [90, 9],
    [100, 6],
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <svg
        viewBox="0 0 100 60"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "95px" }}
      >
        <polyline
          points={`${points} 100,60 0,60`}
          fill={`${accent}22`}
          stroke="none"
        />
        <polyline
          points={points}
          fill="none"
          stroke={accent}
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, fontFamily: "ui-monospace, monospace", color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
        <span>S1: 42°</span>
        <span>S4: 80°</span>
        <span style={{ color: accent, fontWeight: 700 }}>S8: 122° (Alta)</span>
      </div>
    </div>
  );
}

// Barras verticales de alta velocidad
function BarsCard({ accent }: { accent: string }) {
  const heights = [80, 72, 64, 52, 42, 32, 22, 14, 10];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: "100px", width: "100%", paddingTop: 8 }}>
        {heights.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${h}%`,
              background: `linear-gradient(180deg, ${accent} 0%, ${accent}44 100%)`,
              borderRadius: 4,
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.5)", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 6 }}>
        <span style={{ color: "#f87171" }}>Inicial: EVA 8</span>
        <span style={{ color: "#34d399", fontWeight: 600 }}>Final: EVA 1 (Mínimo)</span>
      </div>
    </div>
  );
}

// Ficha SOAP con la esencia visual del CodeCard original
function SoapCard({ title, accent }: { title?: string; accent: string }) {
  const lines = [
    { label: "S:", text: "Dolor remitido 85%, tolera carga", color: "#34d399" },
    { label: "O:", text: "ROM 122° flexión sin compensar", color: "#38bdf8" },
    { label: "A:", text: "Mejoría QuickDASH favorable", color: "#fde047" },
    { label: "P:", text: "Ejercicios domiciliarios + Alta", color: "#c084fc" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 12 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 2 }}>{title}</div>
      {lines.map((l, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ color: l.color, fontWeight: 800, width: 16 }}>{l.label}</span>
          <span style={{ color: "rgba(255,255,255,0.85)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {l.text}
          </span>
        </div>
      ))}
    </div>
  );
}

// Banderas Rojas / Seguridad
function RedFlagsCard({ title, sub, accent }: { title?: string; sub?: string; accent: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div style={{ width: 42, height: 42, borderRadius: 12, background: `${accent}20`, border: `1px solid ${accent}40`, display: "flex", alignItems: "center", justifyContent: "center", color: accent }}>
          <ShieldCheck size={24} />
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{title}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{sub}</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 10, fontSize: 11, color: "rgba(255,255,255,0.85)" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <CheckCircle2 size={13} style={{ color: accent }} /> Sin banderas rojas
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <CheckCircle2 size={13} style={{ color: accent }} /> Consentimiento OK
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <CheckCircle2 size={13} style={{ color: accent }} /> Ficha encriptada
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <CheckCircle2 size={13} style={{ color: accent }} /> CIE-10 verificado
        </span>
      </div>
    </div>
  );
}

// Convenios Fonasa e Isapres
function ConveniosCard({ title, sub, accent }: { title?: string; sub?: string; accent: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Wallet size={18} style={{ color: accent }} />
        <span style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{title}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, margin: "8px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 10px", borderRadius: 8, background: "rgba(255,255,255,0.05)", fontSize: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.8)" }}>Bono FONASA MLE</span>
          <span style={{ color: "#34d399", fontWeight: 700, fontFamily: "monospace" }}>Aprobado</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 10px", borderRadius: 8, background: "rgba(255,255,255,0.05)", fontSize: 12 }}>
          <span style={{ color: "rgba(255,255,255,0.8)" }}>Isapres / I-Med</span>
          <span style={{ color: "#38bdf8", fontWeight: 700, fontFamily: "monospace" }}>En línea</span>
        </div>
      </div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 6, display: "flex", justifyContent: "space-between" }}>
        <span>{sub}</span>
        <span style={{ color: accent, fontWeight: 600 }}>Boletas SII</span>
      </div>
    </div>
  );
}

// Logo con sombra 3D (estilo original)
function LogoCard({ accent }: { accent: string }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div
        style={{
          width: 76,
          height: 76,
          borderRadius: 22,
          background: `linear-gradient(135deg, ${KENKO_BLUE} 0%, ${KENKO_MINT} 100%)`,
          boxShadow: `0 12px 36px ${KENKO_BLUE}66`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Activity size={38} color="white" />
      </div>
      <div style={{ fontSize: 17, fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>Kenkomed</div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Software Kinésico · Chile</div>
    </div>
  );
}

// Foto con overlay cinemático
function PhotoCard({ imgUrl, title, label, accent }: { imgUrl?: string; title?: string; label?: string; accent: string }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {imgUrl && (
        <img
          src={imgUrl}
          alt={title || "Kenkomed"}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65)" }}
        />
      )}
      <div style={{ position: "absolute", inset: 0, padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", padding: "3px 8px", borderRadius: 6, background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", color: accent }}>
            {label}
          </span>
          <ArrowUpRight size={16} color="white" />
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "white", lineHeight: 1.3 }}>{title}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>Kinesiología basada en evidencia</div>
        </div>
      </div>
    </div>
  );
}

// Gradient Card (estilo original)
function GradientCard({ accent }: { accent: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `radial-gradient(circle at 30% 30%, ${accent} 0%, ${KENKO_BLUE} 55%, #05111e 100%)`,
        opacity: 0.85,
      }}
    />
  );
}

// Componente Card memoizado para máximo rendimiento (cero re-renderizados individuales de tarjeta)
const MemoizedCard = memo(function Card({ card }: { card: CardDef }) {
  const baseStyle: React.CSSProperties = {
    position: "absolute",
    left: card.x,
    top: card.y,
    width: card.w,
    height: card.h,
    borderRadius: 18,
    background: "linear-gradient(180deg, #0e1e32 0%, #060e1a 100%)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.45)",
    overflow: "hidden",
    padding: card.kind === "photo" || card.kind === "gradient" ? 0 : 18,
    color: "white",
    display: "flex",
    flexDirection: "column",
  };

  const labelEl =
    card.label && card.kind !== "photo" && card.kind !== "gradient" ? (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
          {card.label}
        </div>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: card.accent }} />
      </div>
    ) : null;

  if (card.kind === "chart") {
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 4 }}>{card.title}</div>
        <div style={{ flex: 1 }}>
          <ChartCard accent={card.accent} />
        </div>
      </div>
    );
  }

  if (card.kind === "bars") {
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ fontSize: 13, fontWeight: 700, color: "white", marginBottom: 4 }}>{card.title}</div>
        <div style={{ flex: 1 }}>
          <BarsCard accent={card.accent} />
        </div>
      </div>
    );
  }

  if (card.kind === "soap") {
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ flex: 1 }}>
          <SoapCard title={card.title} accent={card.accent} />
        </div>
      </div>
    );
  }

  if (card.kind === "redflags") {
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ flex: 1 }}>
          <RedFlagsCard title={card.title} sub={card.sub} accent={card.accent} />
        </div>
      </div>
    );
  }

  if (card.kind === "convenios") {
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ flex: 1 }}>
          <ConveniosCard title={card.title} sub={card.sub} accent={card.accent} />
        </div>
      </div>
    );
  }

  if (card.kind === "whatsapp") {
    return (
      <div style={baseStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#25D36625", display: "flex", alignItems: "center", justifyContent: "center", color: "#25D366" }}>
              <MessageSquare size={14} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 700, color: "white" }}>WhatsApp</span>
          </div>
          <span style={{ fontSize: 10, color: "#25D366", background: "#25D36620", padding: "2px 6px", borderRadius: 999 }}>En vivo</span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: "-0.04em", color: "white" }}>{card.value}</div>
          <div style={{ fontSize: 12, color: "#25D366", fontWeight: 700, marginTop: 2 }}>{card.delta}</div>
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.04)", padding: "5px 8px", borderRadius: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          "Cita confirmada para hoy 09:15 hrs"
        </div>
      </div>
    );
  }

  if (card.kind === "counter") {
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 54, fontWeight: 800, letterSpacing: "-0.04em", color: "white", lineHeight: 1 }}>
            {card.value}
          </div>
          {card.delta && (
            <div style={{ fontSize: 13, color: card.accent, fontWeight: 700, marginTop: 8, display: "flex", alignItems: "center", gap: 4 }}>
              <TrendingUp size={14} />
              {card.delta}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (card.kind === "stat") {
    return (
      <div style={baseStyle}>
        {labelEl}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 50, fontWeight: 800, letterSpacing: "-0.04em", color: "white", display: "flex", alignItems: "baseline" }}>
            {card.value}
            <span style={{ fontSize: 22, color: "rgba(255,255,255,0.45)", marginLeft: 3 }}>%</span>
          </div>
          {card.sub && <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{card.sub}</div>}
        </div>
      </div>
    );
  }

  if (card.kind === "photo") {
    return (
      <div style={baseStyle}>
        <PhotoCard imgUrl={card.imgUrl} title={card.title} label={card.label} accent={card.accent} />
      </div>
    );
  }

  if (card.kind === "logo") {
    return (
      <div style={{ ...baseStyle, padding: 0 }}>
        <LogoCard accent={card.accent} />
      </div>
    );
  }

  // Gradient
  return (
    <div style={{ ...baseStyle, padding: 0 }}>
      <GradientCard accent={card.accent} />
    </div>
  );
});

// Renderizado de 1 Tile individual memoizado (cero re-renderizados de DOM por frame)
const MemoizedTile = memo(function Tile({
  offsetX,
  offsetY,
}: {
  offsetX: number;
  offsetY: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        left: offsetX,
        top: offsetY,
        width: TILE_W,
        height: TILE_H,
        contain: "paint layout",
      }}
    >
      {CARDS.map((card, i) => (
        <MemoizedCard key={i} card={card} />
      ))}
    </div>
  );
});

export function KenkomedBentoPan({
  panSpeed = 1,
  speed = 1,
  className,
}: KenkomedBentoPanProps) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Bucle infinito continuo (0 a 1 estricto)
  const totalFrames = durationInFrames > 0 ? durationInFrames : 480;
  const loopProgress = ((frame * speed) % totalFrames) / totalFrames;

  // Desplazamiento exacto de 1 Tile completo por cada ciclo de animación
  const px = loopProgress * TILE_W * panSpeed;
  const py = loopProgress * TILE_H * panSpeed;

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background: KENKO_NAVY,
        overflow: "hidden",
        fontFamily: FONT_FAMILY,
      }}
    >
      {/* Contenedor acelerado por hardware GPU (transform3d + willChange) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: TILE_W * 2,
          height: TILE_H * 2,
          transform: `translate3d(${-px}px, ${-py}px, 0)`,
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        <MemoizedTile offsetX={0} offsetY={0} />
        <MemoizedTile offsetX={TILE_W} offsetY={0} />
        <MemoizedTile offsetX={0} offsetY={TILE_H} />
        <MemoizedTile offsetX={TILE_W} offsetY={TILE_H} />
      </div>

      {/* Viñeta sutil periférica */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, transparent 38%, rgba(5,17,30,0.7) 80%, #05111e 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
