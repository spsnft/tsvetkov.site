// Design tokens — single source of truth for the entire UI
export const T = {
  bg0:    '#0A0A0C',
  bg1:    '#121214',
  border: 'rgba(255,255,255,0.07)',
  brd2:   'rgba(255,255,255,0.12)',
  muted:  'rgba(255,255,255,0.40)',
  sub:    'rgba(255,255,255,0.60)',
  body:   'rgba(255,255,255,0.82)',
  accent: '#00FFB3',
  acc2:   '#00C6FF',
  glow:   'rgba(0,255,179,0.08)',
  glow2:  'rgba(0,198,255,0.05)',

  // ФИРМЕННЫЕ ГРАДИЕНТЫ ДЛЯ ПОВТОРНОГО ИСПОЛЬЗОВАНИЯ
  linearGradient: 'linear-gradient(135deg, #00FFB3 0%, #00C6FF 100%)',
  textGradientStyles: {
    background: 'linear-gradient(135deg, #00FFB3 0%, #00C6FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
} as const;
