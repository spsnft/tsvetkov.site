// Design tokens — single source of truth for the entire UI
export const T = {
  bg0:    '#0A0A0C',
  bg1:    '#121214',
  border: 'rgba(255,255,255,0.08)',
  brd2:   'rgba(255,255,255,0.15)',
  muted:  'rgba(255,255,255,0.40)',
  sub:    'rgba(255,255,255,0.60)',
  body:   'rgba(255,255,255,0.85)',
  
  // ФИРМЕННЫЙ ПРЕМИУМ-АКЦЕНТ С /HMS
  accent: '#00E599',
  acc2:   '#00A3FF',
  glow:   'rgba(0,229,153,0.12)',
  glow2:  'rgba(0,163,255,0.08)',

  linearGradient: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
  textGradientStyles: {
    background: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
} as const;
