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

  // Softer pair of the same accent — data viz, comparison bars, table checkmarks
  mint:   '#6EE7A8',
  sky:    '#5BB8F0',
  
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
    // Общий радиус карточки калькулятора /hms — единственный источник
    // истины, чтобы кнопка Hero могла выровняться по нему (см. ТЗ №8, п. 2.4)
    card: '20px',
  },

  // Page padding
  pagePadding: 'clamp(1rem, 4vw, 2.5rem)',

  // Section rhythm — shared vertical spacing logic for every content section
  section: {
    // Gap from the previous section down to this section's badge/tag —
    // this is the ONLY source of inter-section spacing (see bottomPad below)
    topPad: 'clamp(1.5rem, 3vw, 2.5rem)',
    // Trailing space at the end of a section's own content. Kept small on
    // purpose: the visible gap between two sections is topPad + bottomPad,
    // and topPad alone should carry most of it so the badge/title doesn't
    // end up stranded near the bottom of an oversized gap.
    bottomPad: 'clamp(1rem, 2vw, 1.5rem)',
    // Section H2 size — unified across Bottleneck/Expertise/Services/CaseStudies/Contact
    titleSize: 'clamp(2rem, 5vw, 3.2rem)',
    // Badge -> title gap — kept tight so the badge reads as one unit with the title
    badgeGap: '0.6rem',
    // Title -> content gap — the bigger breathing-room jump before cards/timeline
    titleGap: '3rem',
  },

  // /hms page — shared rhythm for the unified eyebrow+H2 section pattern
  // (ScalePractice, SeeSystem, About, Pricing, FAQ, FooterCTA). Hero (H1
  // case, its own composition) is the only exception. One flat background
  // across the page — section boundaries are padding + eyebrow/H2 only,
  // no more alternating tint (see ТЗ №3, п. 1)
  //
  // Top/bottom are asymmetric on purpose: a symmetric 120/72px pad on every
  // section compounded to 240px/144px at every boundary (each section's own
  // bottom pad stacking with the next one's top pad) — read as dead space,
  // not a section break (see ТЗ раунд 2, №1). Top carries most of the gap
  // so the eyebrow still reads as "new section starts here"; bottom is
  // trimmed since the heading above already does that job once combined.
  hms: {
    sectionPadTop: '88px',
    sectionPadBottom: '32px',
    sectionPadTopMobile: '56px',
    sectionPadBottomMobile: '24px',
    eyebrowGap: '8px',
  },

  // Breakpoint standard: Mobile <768px / Tablet 768–1023px / Desktop ≥1024px

  // Homepage v2 — light-theme design system (design/system-report-v2.md).
  // Separate namespace, on purpose: the rest of the site (incl. /hms and
  // /ecommerce) reads the dark-theme keys above directly, so this doesn't
  // touch or extend them. Breakpoints/container here are also v2-only —
  // 768/1280, not the site-wide 1024 standard noted above.
  home: {
    color: {
      accent: '#B8431F',
      accentHoverLight: '#A03A1A',
      accentHoverDark: '#E8703F',
      dark: '#14292D',
      darkBorder: '#24312F',
      textPrimary: '#17130F',
      textSecondary: '#5A544C',
      textOnDarkMuted: '#9A9E97',
      textOnDarkFaint: '#C8CCC6',
      textOnDarkPrimary: '#F5F3EE',
      bgLight: '#F5F3EE',
      bgLightAlt: '#E4E2DC',
      ruleLight: '#DDD7CC',
      flagRed: '#A51931',
      flagWhite: '#F4F5F8',
      flagBlue: '#2D2A4A',
    },

    // Per-locale font stacks. The literal fallback here is the /en stack
    // (Archivo/IBM Plex Mono, loaded unconditionally) — --home-font-sans/
    // --home-font-mono are only defined for lang=ru/th, scoped via :lang()
    // in app/[lang]/layout.tsx, so /en never resolves the var and never
    // loads a font it doesn't use.
    font: {
      sans: "var(--home-font-sans, 'Archivo', system-ui, sans-serif)",
      mono: "var(--home-font-mono, 'IBM Plex Mono', ui-monospace, monospace)",
    },

    // Type scale — 7 desktop steps / 6 mobile steps (design/system-report-v2.md
    // §2). One value, one name, reused by every section that needs that size —
    // do not add a component-local px value that duplicates one of these.
    // Tablet mostly reuses the desktop step; the rare tablet-only size (e.g.
    // hero H1 52px) is a one-off, kept local to its component.
    type: {
      desktop: {
        display: '90px',  // Hero H1
        metric:  '80px',  // Proof metric value
        h2:      '54px',  // Section H2; also Proof metric value on tablet
        slogan:  '38px',  // Proof slogan
        body:    '24px',  // Service/How body & titles, Contact channel link
        base:    '16px',  // Metric note, Contact subtitle, nav link, CTA button, service number
        label:   '13px',  // Metric field, how-label, status line, footer copyright
      },
      mobile: {
        display: '44px',  // Hero H1, Proof metric value
        h2:      '30px',  // Section H2
        body:    '17px',  // Service/How body & titles, Contact channel link
        base:    '15px',  // Metric note, Contact subtitle, CTA button, service number, brand wordmark
        label:   '13px',  // how-label, slogan
        micro:   '12px',  // Metric field, status line, footer copyright
      },
    },

    // Vertical rhythm — 8 steps (design/system-report-v2.md §3). One-off
    // values (hero optical compensation, Proof row→slogan gap, portrait
    // placeholder height, tablet-only sizes) stay local to their component,
    // not here — folding them in would make this scale unreadable.
    space: {
      xxs: '8px',
      xs:  '12px',
      sm:  '16px',
      md:  '24px',
      lg:  '32px',
      xl:  '48px',
      xxl: '64px',
      xxxl:'80px',
    },

    breakpoint: {
      tablet: 768,
      desktop: 1280,
    },

    // Container cap + outer pad (design/system-report-v2.md §4):
    // pad0 = max(0, (viewport − cap) / 2); --pad = pad0 + padExtra.
    container: {
      tablet: { cap: 768, padExtra: 32 },
      desktop: { cap: 1280, padExtra: 48 },
      // Mobile has no cap/centering — fixed padding instead.
      mobilePad: '24px',
    },
  },

  // Gradients
  linearGradient: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
  textGradientStyles: {
    background: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
} as const;
