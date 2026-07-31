// Design tokens — single source of truth for the entire UI
export const T = {
  // Backgrounds
  bg0:    '#0A0A0C',
  bg1:    '#121214',
  
  // Borders
  border: 'rgba(255,255,255,0.08)',
  brd2:   'rgba(255,255,255,0.15)',
  
  // Text
  muted:  'rgba(255,255,255,0.40)',
  sub:    'rgba(255,255,255,0.60)',
  body:   'rgba(255,255,255,0.85)',
  
  // Brand accent — green
  accent: '#00E599',
  acc2:   '#00A3FF',
  
  // Accent with opacity
  accent05: 'rgba(0,229,153,0.05)',
  accent08: 'rgba(0,229,153,0.08)',
  accent10: 'rgba(0,229,153,0.10)',
  accent12: 'rgba(0,229,153,0.12)',
  accent15: 'rgba(0,229,153,0.15)',
  accent20: 'rgba(0,229,153,0.20)',
  accent25: 'rgba(0,229,153,0.25)',
  accent30: 'rgba(0,229,153,0.30)',
  accent35: 'rgba(0,229,153,0.35)',
  accent40: 'rgba(0,229,153,0.40)',
  
  // Glows
  glow:   'rgba(0,229,153,0.12)',
  glow2:  'rgba(0,163,255,0.08)',

  // Red accent (bottleneck section)
  red:    '#FF5555',
  red08:  'rgba(255,85,85,0.08)',
  red12:  'rgba(255,85,85,0.12)',
  red20:  'rgba(255,85,85,0.20)',
  red25:  'rgba(255,85,85,0.25)',
  red40:  'rgba(255,85,85,0.40)',

  // Radius system
  radius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },

  // Page padding
  pagePadding: 'clamp(1rem, 4vw, 2.5rem)',

  // Section rhythm — shared vertical spacing logic for every content section
  section: {
    // Gap from the previous section down to this section's badge/tag
    topPad: 'clamp(1.5rem, 3vw, 2.5rem)',
    // Section H2 size — unified across Bottleneck/Expertise/Services/CaseStudies/Contact
    titleSize: 'clamp(2rem, 5vw, 3.2rem)',
    // Badge -> title gap — kept tight so the badge reads as one unit with the title
    badgeGap: '0.6rem',
    // Title -> content gap — the bigger breathing-room jump before cards/timeline
    titleGap: '3rem',
  },

  // Gradients
  linearGradient: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
  textGradientStyles: {
    background: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
} as const;
