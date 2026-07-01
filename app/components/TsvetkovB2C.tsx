'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────
const T = {
  bg0:      '#0A0A0C',
  bg1:      '#121214',
  bg2:      '#18181C',
  border:   'rgba(255,255,255,0.07)',
  border2:  'rgba(255,255,255,0.13)',
  muted:    'rgba(255,255,255,0.42)',
  sub:      'rgba(255,255,255,0.62)',
  body:     'rgba(255,255,255,0.82)',
  accent:   '#00FFB3',
  accent2:  '#00C6FF',
  glow:     'rgba(0,255,179,0.18)',
  glow2:    'rgba(0,198,255,0.14)',
};

// ─────────────────────────────────────────────────────────────────
// SHARED MICRO-COMPONENTS
// ─────────────────────────────────────────────────────────────────
const S = {
  Pill: ({ children, color = T.accent }: { children: React.ReactNode; color?: string }) => (
    <span style={{
      display: 'inline-block',
      padding: '3px 12px',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
      background: `${color}18`,
      border: `1px solid ${color}40`,
      color,
    }}>{children}</span>
  ),

  SectionTag: ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
    >
      <span style={{
        display: 'inline-block',
        padding: '3px 12px',
        borderRadius: 999,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase' as const,
        background: `${T.accent}18`,
        border: `1px solid ${T.accent}40`,
        color: T.accent,
      }}>{children}</span>
    </motion.div>
  ),

  H2: ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        fontSize: 'clamp(2rem, 4.5vw, 3rem)',
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        color: '#fff',
        marginBottom: '1.25rem',
        ...style,
      }}
    >{children}</motion.h2>
  ),

  Lead: ({ children }: { children: React.ReactNode }) => (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{
        textAlign: 'center',
        color: T.sub,
        fontSize: 'clamp(1rem, 2vw, 1.15rem)',
        lineHeight: 1.7,
        maxWidth: 600,
        margin: '0 auto 4rem',
      }}
    >{children}</motion.p>
  ),

  GlassCard: ({
    children, style, hover = true,
  }: {
    children: React.ReactNode;
    style?: React.CSSProperties;
    hover?: boolean;
  }) => (
    <motion.div
      whileHover={hover ? { y: -6, borderColor: `${T.accent}40` } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{
        background: 'rgba(255,255,255,0.035)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${T.border}`,
        borderRadius: 20,
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >{children}</motion.div>
  ),

  CTABtn: ({
    children, onClick, href, variant = 'primary', style,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: 'primary' | 'ghost';
    style?: React.CSSProperties;
  }) => {
    const base: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 30px',
      borderRadius: 12,
      fontWeight: 600,
      fontSize: '0.95rem',
      letterSpacing: '0.01em',
      cursor: 'pointer',
      border: 'none',
      textDecoration: 'none',
      ...style,
    };
    const prim: React.CSSProperties = {
      ...base,
      background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accent2} 100%)`,
      color: '#0A0A0C',
    };
    const ghost: React.CSSProperties = {
      ...base,
      background: 'rgba(255,255,255,0.05)',
      border: `1px solid ${T.border2}`,
      color: '#fff',
    };
    return (
      <motion.a
        href={href || '#contact'}
        onClick={onClick}
        whileHover={{
          boxShadow: variant === 'primary'
            ? `0 0 32px ${T.glow}, 0 0 64px ${T.glow2}`
            : '0 0 20px rgba(255,255,255,0.06)',
          scale: 1.03,
        }}
        whileTap={{ scale: 0.97 }}
        style={variant === 'primary' ? prim : ghost}
      >{children}</motion.a>
    );
  },
};

// ─────────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────────
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2rem',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,12,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
        transition: 'background 0.35s, border-color 0.35s',
      }}
    >
      <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#fff' }}>
        FT<span style={{ color: T.accent }}>.</span>
      </span>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['About', 'Work', 'Contact'].map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} style={{
            color: T.sub, textDecoration: 'none', fontSize: '0.88rem', fontWeight: 500,
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = T.sub)}
          >{l}</a>
        ))}
        <S.CTABtn href="#contact" variant="ghost" style={{ padding: '9px 20px', fontSize: '0.85rem' }}>
          Let&apos;s talk
        </S.CTABtn>
      </div>
    </motion.nav>
  );
};

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '8rem 2rem 5rem',
    }}>
      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '10%',
        width: 520, height: 520, borderRadius: '50%',
        background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`,
        animation: 'float-a 18s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: 380, height: 380, borderRadius: '50%',
        background: `radial-gradient(circle, ${T.glow2} 0%, transparent 70%)`,
        animation: 'float-b 24s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 840 }}>
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 16px', borderRadius: 999,
            background: 'rgba(0,255,179,0.07)',
            border: `1px solid ${T.accent}30`,
            fontSize: 12, fontWeight: 600, color: T.accent, letterSpacing: '0.1em',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: T.accent,
              boxShadow: `0 0 8px ${T.accent}`,
              animation: 'pdot 2s ease-in-out infinite',
            }} />
            AVAILABLE FOR NEW PROJECTS
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: '#fff',
            marginBottom: '1.5rem',
          }}
        >
          Fedor{' '}
          <span style={{
            background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accent2} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Tsvetkov</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
            color: T.sub,
            lineHeight: 1.65,
            maxWidth: 680,
            margin: '0 auto 3rem',
          }}
        >
          Data-driven performance marketer &amp; Growth Architect.<br />
          Managing high-budget ad campaigns and AI-powered automation.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <S.CTABtn href="#contact" variant="primary">
            Let&apos;s discuss your growth
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </S.CTABtn>
          <S.CTABtn href="#work" variant="ghost">View case studies</S.CTABtn>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: T.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 1, height: 36, background: `linear-gradient(to bottom, ${T.accent}, transparent)` }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// STATS STRIP
// ─────────────────────────────────────────────────────────────────
const StatStrip = () => {
  const stats = [
    { num: '10+',    label: 'Years Experience' },
    { num: '$500K+', label: 'Annual Media Budget' },
    { num: '7×',     label: 'Revenue Growth' },
    { num: '1,000+', label: 'Qualified B2B Leads / mo' },
  ];

  return (
    <section style={{ borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, background: T.bg1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="stat-border"
            style={{
              padding: '2.5rem 2rem',
              textAlign: 'center',
              borderRight: i < 3 ? `1px solid ${T.border}` : 'none',
            }}
          >
            <div style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accent2} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.4rem',
            }}>{s.num}</div>
            <div style={{ fontSize: '0.82rem', color: T.muted, fontWeight: 500, letterSpacing: '0.04em' }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────
const About = () => {
  const skills = [
    'Performance Marketing', 'CRM Automation', 'Growth Architecture',
    'High-Budget Ad Campaigns', 'AI-Powered Automation', 'B2B Lead Generation',
    'E-commerce Scaling', 'Unit Economics', 'Analytics & BI', 'Team Leadership',
  ];

  return (
    <section id="about" style={{ padding: '9rem 2rem', background: T.bg0 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <S.SectionTag>About</S.SectionTag>
        <S.H2>Built on results,{'\n'}not promises</S.H2>
        <S.Lead>
          10+ years managing high-budget ad campaigns and SEO. $500K+ annual media
          budgets. Scaled monthly revenue 7× and consistently generating 1,000+ qualified
          B2B leads per month.
        </S.Lead>

        <div className="sg-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{ color: T.body, fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              I specialize in building the systems that make growth predictable —
              not just running ads, but architecting the full performance stack:
              attribution, CRM pipelines, automation layers, and creative intelligence.
            </p>
            <p style={{ color: T.sub, fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Working across E-commerce, HealthTech, and B2B Manufacturing,
              I&apos;ve managed campaigns in US, EU, and 40+ international markets.
              I don&apos;t stop until the numbers move.
            </p>
            <S.CTABtn href="#contact" variant="primary">Start a conversation</S.CTABtn>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div style={{ fontSize: '0.78rem', color: T.muted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 600 }}>Expertise</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {skills.map((sk, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  style={{
                    padding: '7px 14px',
                    borderRadius: 8,
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${T.border2}`,
                    color: T.sub,
                  }}
                >{sk}</motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────
const Services = () => {
  const services = [
    {
      color: T.accent,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 3L25 9v10l-11 6L3 19V9L14 3z" stroke={T.accent} strokeWidth="1.4" strokeLinejoin="round"/>
          <path d="M14 3v22M3 9l11 6 11-6" stroke={T.accent} strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Growth Architecture',
      desc: 'Full-funnel strategy from acquisition to retention. I design the system, not just the campaign — so growth compounds over time.',
    },
    {
      color: T.accent2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="3" y="3" width="8" height="8" rx="2" stroke={T.accent2} strokeWidth="1.4"/>
          <rect x="17" y="3" width="8" height="8" rx="2" stroke={T.accent2} strokeWidth="1.4"/>
          <rect x="3" y="17" width="8" height="8" rx="2" stroke={T.accent2} strokeWidth="1.4"/>
          <rect x="17" y="17" width="8" height="8" rx="2" stroke={T.accent2} strokeWidth="1.4"/>
          <path d="M11 7h6M7 11v6M21 11v6M11 21h6" stroke={T.accent2} strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
      title: 'CRM Automation',
      desc: 'End-to-end pipeline automation: lead routing, nurture sequences, attribution tracking. CRM that actually works for your team.',
    },
    {
      color: '#C084FC',
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 20L10 14l4 4 6-8 4 4" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="14" r="1.5" fill="#C084FC"/>
          <circle cx="14" cy="18" r="1.5" fill="#C084FC"/>
          <circle cx="20" cy="10" r="1.5" fill="#C084FC"/>
          <circle cx="24" cy="14" r="1.5" fill="#C084FC"/>
        </svg>
      ),
      title: 'Performance Marketing',
      desc: 'Managing $500K+ annual budgets across paid search, paid social, and programmatic. CAC under control, ROAS maximized.',
    },
  ];

  return (
    <section style={{ padding: '9rem 2rem', background: T.bg1, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <S.SectionTag>Services</S.SectionTag>
        <S.H2>What I do</S.H2>
        <S.Lead>Precision execution on the channels and systems that actually move revenue.</S.Lead>

        <div className="sg-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {services.map((sv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <S.GlassCard style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '2.25rem' }}>
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: 80, height: 80,
                  background: `radial-gradient(circle at top right, ${T.glow}, transparent 70%)`,
                  borderRadius: '0 20px 0 0',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${T.border2}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{sv.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{sv.title}</h3>
                <p style={{ color: T.sub, fontSize: '0.92rem', lineHeight: 1.7, flex: 1 }}>{sv.desc}</p>
                <a href="#contact" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: sv.color, fontSize: '0.85rem', fontWeight: 600,
                  textDecoration: 'none', letterSpacing: '0.02em',
                }}>
                  Discuss this service
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </S.GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// CASE STUDIES
// ─────────────────────────────────────────────────────────────────
const CaseStudies = () => {
  const [active, setActive] = useState<number | null>(null);

  const cases = [
    {
      company: 'BNDRETAIL',
      industry: 'E-commerce',
      metric: '7× Revenue',
      period: '18 months',
      color: T.accent,
      summary: 'Built performance marketing infrastructure from scratch.',
      challenge: 'Zero digital infrastructure. All operations manual, no attribution, no automation pipeline.',
      solution: 'Built performance marketing infrastructure from scratch. Integrated proprietary CRM with custom order management. Established full attribution and analytics stack.',
      result: 'Scaled monthly revenue 7× within the first 18 months. Automated order management reduced operational overhead by 60%.',
      tags: ['E-commerce', 'CRM Integration', 'Performance Marketing'],
    },
    {
      company: 'SETKA',
      industry: 'HealthTech App',
      metric: 'CAC $3–5',
      period: 'US & EU markets',
      color: T.accent2,
      summary: 'User acquisition at scale in competitive English-speaking markets.',
      challenge: 'Entering hyper-competitive US and EU HealthTech space with a new brand and limited recognition.',
      solution: 'Managed user acquisition campaigns targeting US and EU markets. Built data-driven creative testing framework. Optimized full-funnel from impression to retained user.',
      result: 'Achieved CAC $3–5 in competitive English-speaking markets — well below industry benchmark of $15–40.',
      tags: ['HealthTech', 'User Acquisition', 'US & EU Markets'],
    },
    {
      company: 'METAL-FACH',
      industry: 'B2B Manufacturing',
      metric: '1,000+ leads / mo',
      period: '40+ markets',
      color: '#C084FC',
      summary: 'Full digital transformation of an offline industrial business.',
      challenge: 'Traditional offline B2B manufacturer with no digital presence, zero inbound lead generation, and no international reach.',
      solution: 'Transitioned offline B2B business entirely into digital channels. Built full content and SEO infrastructure. Deployed CRM and lead scoring system across all markets.',
      result: 'Grew inbound lead generation from 0 to 1,000+ qualified leads/month. Drove digital expansion across 40+ markets globally.',
      tags: ['B2B', 'Lead Generation', 'Digital Transformation'],
    },
  ];

  return (
    <section id="work" style={{ padding: '9rem 2rem', background: T.bg0, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <S.SectionTag>Case Studies</S.SectionTag>
        <S.H2>Selected work</S.H2>
        <S.Lead>Real results from real engagements. No fluff, no vanity metrics.</S.Lead>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <S.GlassCard hover={false} style={{ padding: 0, overflow: 'hidden' }}>
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                    padding: '2rem 2.5rem',
                    display: 'flex', alignItems: 'center', gap: '1.5rem', textAlign: 'left',
                  }}
                >
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 700, color: c.color,
                    background: `${c.color}15`, border: `1px solid ${c.color}30`,
                    borderRadius: 8, padding: '4px 10px', letterSpacing: '0.08em', flexShrink: 0,
                  }}>0{i + 1}</span>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{c.company}</span>
                      <span style={{
                        display: 'inline-block', padding: '3px 12px', borderRadius: 999,
                        fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
                        textTransform: 'uppercase' as const,
                        background: `${c.color}18`, border: `1px solid ${c.color}40`, color: c.color,
                      }}>{c.industry}</span>
                    </div>
                    <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: 4 }}>{c.summary}</p>
                  </div>

                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{
                      fontSize: '1.5rem', fontWeight: 700,
                      background: `linear-gradient(135deg, ${c.color} 0%, ${T.accent2} 100%)`,
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      letterSpacing: '-0.02em',
                    }}>{c.metric}</div>
                    <div style={{ fontSize: '0.78rem', color: T.muted }}>{c.period}</div>
                  </div>

                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ color: T.muted, fontSize: '1.5rem', lineHeight: 1, flexShrink: 0 }}
                  >+</motion.div>
                </button>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '2rem 2.5rem 2.5rem',
                        borderTop: `1px solid ${T.border}`,
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem',
                      }}>
                        {[
                          { label: 'Challenge', text: c.challenge },
                          { label: 'Solution', text: c.solution },
                          { label: 'Result', text: c.result },
                        ].map((bl, bi) => (
                          <div key={bi}>
                            <div style={{ fontSize: '0.72rem', color: c.color, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: '0.75rem' }}>{bl.label}</div>
                            <p style={{ color: T.body, fontSize: '0.9rem', lineHeight: 1.75 }}>{bl.text}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: '0 2.5rem 2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        {c.tags.map((tag, ti) => (
                          <span key={ti} style={{
                            display: 'inline-block', padding: '3px 12px', borderRadius: 999,
                            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em',
                            textTransform: 'uppercase' as const,
                            background: `${c.color}18`, border: `1px solid ${c.color}40`, color: c.color,
                          }}>{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </S.GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: '', projectType: '', budget: '', contact: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const budgets = ['< $5K', '$5K – $20K', '$20K – $50K', '$50K – $150K', '$150K+'];
  const projectTypes = ['Growth Architecture', 'CRM Automation', 'Performance Marketing', 'Full-Stack Marketing', 'Consulting / Advisory'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('YOUR_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${T.border2}`,
    borderRadius: 12,
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle,
    cursor: 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 16px center',
    backgroundSize: '12px',
    paddingRight: 44,
  };

  return (
    <section id="contact" style={{ padding: '9rem 2rem', background: T.bg1, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <S.SectionTag>Contact</S.SectionTag>
        <S.H2>Let&apos;s discuss your growth</S.H2>
        <S.Lead>Tell me about your project. I&apos;ll respond within 24 hours with a clear assessment and next steps.</S.Lead>

        {/* Telegram direct */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}
        >
          <a
            href="https://t.me/fedorov_tsvetkov"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '12px 24px', borderRadius: 12,
              background: 'rgba(39,174,228,0.1)',
              border: '1px solid rgba(39,174,228,0.25)',
              color: '#27AEE4', textDecoration: 'none',
              fontSize: '0.9rem', fontWeight: 600,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(39,174,228,0.18)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(39,174,228,0.1)'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#27AEE4">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
            </svg>
            Message directly on Telegram
          </a>
        </motion.div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ color: T.muted, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>or</span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                textAlign: 'center', padding: '4rem 2rem',
                background: 'rgba(0,255,179,0.05)',
                border: `1px solid ${T.accent}30`,
                borderRadius: 20,
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${T.accent}, ${T.accent2})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l6 6L23 8" stroke="#0A0A0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Message received.</h3>
              <p style={{ color: T.sub, fontSize: '1rem' }}>I&apos;ll get back to you within 24 hours. Talk soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div className="sg-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: T.muted, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.6rem' }}>Name</label>
                  <input
                    type="text" required placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = T.accent; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = T.border2; }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: T.muted, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.6rem' }}>Project Type</label>
                  <select
                    required value={form.projectType}
                    onChange={e => setForm(p => ({ ...p, projectType: e.target.value }))}
                    style={{ ...selectStyle, color: form.projectType ? '#fff' : 'rgba(255,255,255,0.22)' }}
                  >
                    <option value="" disabled>Select a service</option>
                    {projectTypes.map(t => <option key={t} value={t} style={{ background: T.bg1, color: '#fff' }}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="sg-form" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: T.muted, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.6rem' }}>Budget</label>
                  <select
                    required value={form.budget}
                    onChange={e => setForm(p => ({ ...p, budget: e.target.value }))}
                    style={{ ...selectStyle, color: form.budget ? '#fff' : 'rgba(255,255,255,0.22)' }}
                  >
                    <option value="" disabled>Monthly budget range</option>
                    {budgets.map(b => <option key={b} value={b} style={{ background: T.bg1, color: '#fff' }}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: T.muted, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.6rem' }}>Email or Telegram</label>
                  <input
                    type="text" required placeholder="you@company.com or @telegram"
                    value={form.contact}
                    onChange={e => setForm(p => ({ ...p, contact: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = T.accent; }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = T.border2; }}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02, boxShadow: `0 0 40px ${T.glow}, 0 0 80px ${T.glow2}` }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '15px 32px', borderRadius: 12,
                  border: 'none', fontFamily: 'inherit', fontWeight: 700,
                  fontSize: '1rem', letterSpacing: '0.02em',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accent2} 100%)`,
                  color: '#0A0A0C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  opacity: status === 'sending' ? 0.7 : 1,
                  marginTop: '0.5rem',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      style={{ width: 18, height: 18, border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#0A0A0C', borderRadius: '50%' }}
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 9h14M11 5l4 4-4 4" stroke="#0A0A0C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <p style={{ color: '#FF6B6B', fontSize: '0.85rem', textAlign: 'center' }}>
                  Something went wrong. Please try again or message me on Telegram.
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{
    padding: '2.5rem 2rem',
    background: T.bg0,
    borderTop: `1px solid ${T.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
  }}>
    <span style={{ fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>
      FT<span style={{ color: T.accent }}>.</span>
    </span>
    <p style={{ color: T.muted, fontSize: '0.8rem' }}>© {new Date().getFullYear()} Fedor Tsvetkov. All rights reserved.</p>
    <a href="https://t.me/fedorov_tsvetkov" target="_blank" rel="noopener noreferrer"
      style={{ color: T.sub, fontSize: '0.82rem', textDecoration: 'none', fontWeight: 500 }}
    >@fedorov_tsvetkov</a>
  </footer>
);

// ─────────────────────────────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────────────────────────────
export default function TsvetkovB2C() {
  return (
    <main style={{ background: '#0A0A0C', minHeight: '100vh' }}>
      <Nav />
      <Hero />
      <StatStrip />
      <About />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
