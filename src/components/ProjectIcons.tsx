interface IconProps { color: string; size?: number }
type IC = (p: IconProps) => JSX.Element

const p = (color: string) => ({
  fill: 'none' as const,
  stroke: color,
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
})

// ── AR ──────────────────────────────────────────────────────────────
const Tooth: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M12 2c-2.8 0-5 1.8-5 4 0 1.3.4 2.6.9 3.8L9 20h6l1.1-10.2c.5-1.2.9-2.5.9-3.8 0-2.2-2.2-4-5-4z" />
    <path d="M9.5 10.5c.4 1.2 2.6 1.2 3 0" />
  </svg>
)

const LaptopAR: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M1 20h22" />
    <rect x="6" y="7" width="5" height="4" rx="0.5" strokeDasharray="2 1" />
    <rect x="13" y="7" width="5" height="4" rx="0.5" strokeDasharray="2 1" />
    <path d="M9 14h6" />
  </svg>
)

const HandAR: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M18 11V8a2 2 0 0 0-4 0v3M14 11V6a2 2 0 0 0-4 0v5M10 11V8a2 2 0 0 0-4 0v8a6 6 0 0 0 12 0v-5" />
    <circle cx="8" cy="3.5" r="1" fill={color} stroke="none" />
    <circle cx="12" cy="2" r="1" fill={color} stroke="none" />
    <circle cx="16" cy="3.5" r="1" fill={color} stroke="none" />
  </svg>
)

const Trophy: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M6 9H3L2 4h7M18 9h3l1-5h-7" />
    <path d="M8 4h8v7a4 4 0 0 1-8 0z" />
    <path d="M12 15v3M8 21h8" />
  </svg>
)

const Pill: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M10.5 20.5L3.5 13.5a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7z" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
)

const Bug: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <ellipse cx="12" cy="13" rx="4" ry="5" />
    <path d="M12 8V5" />
    <path d="M8 11L4 9M16 11l4-2" />
    <path d="M8 15H4M16 15h4" />
    <path d="M8 18L5 21M16 18l3 3" />
    <circle cx="10" cy="7" r="1" fill={color} stroke="none" />
    <circle cx="14" cy="7" r="1" fill={color} stroke="none" />
  </svg>
)

const GamingLaptop: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M1 21h22" />
    <path d="M9 11h2M10 10v2" />
    <circle cx="15" cy="11" r="1.5" />
    <path d="M6 11h1" />
  </svg>
)

const Drum: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <ellipse cx="12" cy="7" rx="9" ry="3" />
    <path d="M3 7v10c0 1.7 4 3 9 3s9-1.3 9-3V7" />
    <path d="M3 13c0 1.7 4 3 9 3s9-1.3 9-3" />
    <path d="M7 4L4 1M17 4l3-3" />
  </svg>
)

const Scroll: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M18 2H8a3 3 0 0 0-3 3v16a1 1 0 0 0 1 1h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    <path d="M5 5a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3" />
    <path d="M8 7h8M8 11h8M8 15h5" />
  </svg>
)

const Car: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M5 17H3a1 1 0 0 1-1-1v-4l2.5-5h13L20 12v4a1 1 0 0 1-1 1h-2" />
    <circle cx="7.5" cy="17" r="2" />
    <circle cx="16.5" cy="17" r="2" />
    <path d="M5 12h14" />
  </svg>
)

const Bottle: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M10 2h4v2a5 5 0 0 1 5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a5 5 0 0 1 5-5z" />
    <path d="M9 12h6M9 16h4" />
    <path d="M10 4v1M14 4v1" />
  </svg>
)

// ── VR ──────────────────────────────────────────────────────────────
const Forklift: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <rect x="2" y="8" width="12" height="10" rx="1" />
    <path d="M14 13h7M14 11h4" />
    <path d="M6 8V3M9 8V4" />
    <circle cx="5" cy="21" r="1.5" />
    <circle cx="11" cy="21" r="1.5" />
    <path d="M2 18h14" />
  </svg>
)

const Scalpel: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M20 4l-6 6-9 11H2v-3l11-9 6-6a2 2 0 0 1 1 2z" />
    <path d="M14 10l-4-4" />
    <path d="M2 22l5-1-4-4z" fill={`${color}30`} />
    <circle cx="17" cy="5" r="1.5" fill={`${color}40`} />
  </svg>
)

const ShieldCyber: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6z" fill={`${color}10`} />
    <path d="M12 2L4 6v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const Lightning: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M13 2L4.5 13.5H11L10 22l9.5-12H13z" fill={`${color}18`} />
    <path d="M13 2L4.5 13.5H11L10 22l9.5-12H13z" />
  </svg>
)

const LightningAlt: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M13 2L4.5 13.5H11L10 22l9.5-12H13z" />
    <circle cx="12" cy="12" r="10" strokeDasharray="3 3" opacity="0.5" />
  </svg>
)

const Globe360: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    <path d="M2 12h20" />
    <path d="M3.5 7h17M3.5 17h17" />
  </svg>
)

const OilRig: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M4 20h16" />
    <path d="M8 20V9l4-7 4 7v11" />
    <path d="M6 20V13h12v7" />
    <path d="M10 13v4M14 13v4" />
    <path d="M2 13h20" />
  </svg>
)

const Hotel: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M3 22V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16" />
    <path d="M1 22h22" />
    <path d="M7 9h2M7 13h2M15 9h2M15 13h2" />
    <path d="M11 22V15a1 1 0 0 1 1-1 1 1 0 0 1 1 1v7" />
  </svg>
)

const Paw: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <circle cx="6" cy="8.5" r="2" fill={`${color}40`} />
    <circle cx="18" cy="8.5" r="2" fill={`${color}40`} />
    <circle cx="10" cy="5" r="2" fill={`${color}40`} />
    <circle cx="14" cy="5" r="2" fill={`${color}40`} />
    <path d="M12 21c-4.5 0-7.5-2.5-7.5-6.5 0-2 1.5-3.5 3.5-4.5L10 9h4l2 1c2 1 3.5 2.5 3.5 4.5C19.5 18.5 16.5 21 12 21z" />
  </svg>
)

const Factory: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M2 22V12l6-4v4l6-4v4l5-3v13z" />
    <path d="M6 22v-5h4v5" />
    <path d="M14 22v-3h3v3" />
    <path d="M6 2v4M9 1v4" />
  </svg>
)

const Showroom: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M1 19h22" />
    <path d="M1 22h22" />
    <path d="M8 12l4-5 4 5" />
    <path d="M12 7v5" />
  </svg>
)

const Hologram: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <polygon points="12,2 22,20 2,20" fill={`${color}08`} />
    <polygon points="12,2 22,20 2,20" />
    <line x1="7" y1="20" x2="17" y2="20" />
    <path d="M9 14h6M10 17h4" />
    <circle cx="12" cy="9" r="1.5" fill={`${color}50`} stroke="none" />
  </svg>
)

const Eye: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
    <path d="M12 5V3M12 21v-2M19 12h2M3 12H1" opacity="0.4" />
  </svg>
)

// ── Interactive ──────────────────────────────────────────────────────
const Music: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
    <path d="M9 9l12-2" />
  </svg>
)

const WorldDots: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2c-3.5 3-5 6-5 10s1.5 7 5 10c3.5-3 5-6 5-10s-1.5-7-5-10z" />
    <path d="M2 12h20" />
    <circle cx="7" cy="8" r="1" fill={color} stroke="none" />
    <circle cx="17" cy="8" r="1" fill={color} stroke="none" />
    <circle cx="12" cy="17" r="1" fill={color} stroke="none" />
  </svg>
)

const Theater: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M9 3C5 3 2 6 2 10c0 4 2.5 8.5 7 10" />
    <path d="M15 3c4 0 7 3 7 7 0 4-2.5 8.5-7 10" />
    <path d="M9 3c1 1 3 4 3 7s-2 6-3 7" />
    <path d="M15 3c-1 1-3 4-3 7s2 6 3 7" />
    <path d="M2 10c3 2 5 4 5 7M22 10c-3 2-5 4-5 7" />
    <path d="M7 17c1 1 2.5 3 5 3s4-2 5-3" />
  </svg>
)

const Portal: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="2" fill={`${color}50`} />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" opacity="0.5" />
  </svg>
)

const Bird: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <path d="M20.5 4.5C18 3 14 3.5 12 7L6 16H3l5-7-4-4h5l3 2c1.5-3.5 5-6 8-5.5-1 1.5-1.5 3-1 5" />
    <path d="M12 7c0 2.5 2 5 5 5" />
    <path d="M6 16l-2 5 4-2-2-3z" fill={`${color}20`} />
  </svg>
)

const CharacterRig: IC = ({ color, size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...p(color)}>
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v6" />
    <path d="M8 10l-3 4M16 10l3 4" />
    <path d="M9 14l-1 5M15 14l1 5" />
    <circle cx="5" cy="14" r="1" fill={color} stroke="none" />
    <circle cx="19" cy="14" r="1" fill={color} stroke="none" />
    <circle cx="8" cy="19" r="1" fill={color} stroke="none" />
    <circle cx="16" cy="19" r="1" fill={color} stroke="none" />
  </svg>
)

// ── Map ──────────────────────────────────────────────────────────────
const MAP: Record<string, IC> = {
  tooth: Tooth,
  laptop: LaptopAR,
  hand: HandAR,
  trophy: Trophy,
  pill: Pill,
  bug: Bug,
  gaming: GamingLaptop,
  drum: Drum,
  scroll: Scroll,
  car: Car,
  bottle: Bottle,
  forklift: Forklift,
  scalpel: Scalpel,
  shield: ShieldCyber,
  lightning: Lightning,
  'lightning-alt': LightningAlt,
  globe: Globe360,
  oil: OilRig,
  hotel: Hotel,
  paw: Paw,
  factory: Factory,
  showroom: Showroom,
  hologram: Hologram,
  eye: Eye,
  music: Music,
  world: WorldDots,
  theater: Theater,
  portal: Portal,
  bird: Bird,
  character: CharacterRig,
}

export function ProjectIcon({ iconKey, color, size = 48 }: { iconKey: string; color: string; size?: number }) {
  const Icon = MAP[iconKey]
  return Icon ? <Icon color={color} size={size} /> : null
}
