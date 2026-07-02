'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────
const T = {
  bg0:    '#0A0A0C',
  bg1:    '#121214',
  border: 'rgba(255,255,255,0.07)',
  brd2:   'rgba(255,255,255,0.12)',
  muted:  'rgba(255,255,255,0.40)',
  sub:    'rgba(255,255,255,0.60)',
  body:   'rgba(255,255,255,0.82)',
  accent: '#00FFB3',
  acc2:   '#00C6FF',
  glow:   'rgba(0,255,179,0.15)',
  glow2:  'rgba(0,198,255,0.12)',
};

// ─────────────────────────────────────────────────────────────────
// LOGO — "FT with green online dot"
// ─────────────────────────────────────────────────────────────────
const Logo = ({ size = 38 }: { size?: number }) => (
  <div style={{
    width: size, height: size,
    borderRadius: Math.round(size * 0.26),
    background: `linear-gradient(135deg,${T.accent}20,${T.acc2}20)`,
    border: `1.5px solid ${T.accent}35`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', flexShrink: 0,
  }}>
    <span style={{ fontWeight: 800, fontSize: size * 0.36, color: '#fff', letterSpacing: '-0.04em' }}>FT</span>
    {/* Green online status dot */}
    <span style={{
      position: 'absolute',
      bottom: Math.round(size * 0.07), right: Math.round(size * 0.07),
      width: Math.round(size * 0.22), height: Math.round(size * 0.22),
      borderRadius: '50%',
      background: T.accent,
      boxShadow: `0 0 ${Math.round(size * 0.18)}px ${T.accent}`,
      border: `${Math.max(1, Math.round(size * 0.04))}px solid #0A0A0C`,
    }} />
  </div>
);

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
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(1.25rem,5vw,2.5rem)', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,12,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
        transition: 'background .3s, border-color .3s',
      }}
    >
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <Logo />
        <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.02em' }}>
          Tsvetkov<span style={{ color: T.accent }}>.</span>
        </span>
      </a>

      <div className="nav-links">
        {[['#expertise','Expertise'],['#services','Services'],['#work','Work'],['#contact','Contact']].map(([href,label]) => (
          <a key={href} href={href}
            style={{ color: T.sub, textDecoration: 'none', fontSize: '0.87rem', fontWeight: 500, transition: 'color .2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = T.sub)}
          >{label}</a>
        ))}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            padding: '9px 20px', borderRadius: 10,
            background: `linear-gradient(135deg,${T.accent},${T.acc2})`,
            color: '#0A0A0C', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none',
          }}
        >Let&apos;s talk</motion.a>
      </div>
    </motion.nav>
  );
};

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(5rem,12vw,9rem) clamp(1.25rem,5vw,2.5rem) clamp(4rem,8vw,6rem)',
    }}>
      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '15%', right: '8%',
        width: 'clamp(240px,44vw,560px)', height: 'clamp(240px,44vw,560px)',
        borderRadius: '50%',
        background: `radial-gradient(circle,${T.glow} 0%,transparent 70%)`,
        animation: 'float-a 18s ease-in-out infinite', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '2%',
        width: 'clamp(160px,34vw,420px)', height: 'clamp(160px,34vw,420px)',
        borderRadius: '50%',
        background: `radial-gradient(circle,${T.glow2} 0%,transparent 70%)`,
        animation: 'float-b 24s ease-in-out infinite', pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 920, width: '100%' }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 999,
            background: 'rgba(0,255,179,0.07)', border: `1px solid ${T.accent}28`,
            fontSize: 11, fontWeight: 600, color: T.accent, letterSpacing: '0.1em',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: T.accent, boxShadow: `0 0 8px ${T.accent}`,
              animation: 'pdot 2s ease-in-out infinite',
            }} />
            FOUNDER-LED BOUTIQUE AGENCY
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(3rem,10vw,7rem)',
            fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.04em',
            color: '#fff', marginBottom: '1.5rem',
          }}
        >
          Fedor{' '}
          <span style={{
            background: `linear-gradient(135deg,${T.accent} 0%,${T.acc2} 100%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Tsvetkov</span>
        </motion.h1>

        {/* Subtitle — EXACT COPY from TZ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(1.1rem,2.8vw,1.5rem)',
            color: T.sub, lineHeight: 1.55,
            maxWidth: 720, margin: '0 auto 3rem', fontWeight: 400,
          }}
        >
          We build high-ticket growth engines.{' '}
          <span style={{ color: T.body, fontWeight: 500 }}>No fluff, just architecture that scales.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${T.glow},0 0 80px ${T.glow2}` }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 32px', borderRadius: 12,
              background: `linear-gradient(135deg,${T.accent},${T.acc2})`,
              color: '#0A0A0C', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
            }}
          >
            Start a project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 32px', borderRadius: 12,
              background: 'rgba(255,255,255,0.05)', border: `1px solid ${T.brd2}`,
              color: '#fff', fontWeight: 600, fontSize: '1rem', textDecoration: 'none',
            }}
          >
            View case studies
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{
            marginTop: '5rem', display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: 8,
            color: T.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase',
          }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 1, height: 36, background: `linear-gradient(to bottom,${T.accent},transparent)` }}
          />
        </motion.div>

      </motion.div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// EXPERTISE — Asymmetrical Bento Grid
// ─────────────────────────────────────────────────────────────────
const Expertise = () => {
  const cards = [
    {
      id: 'demand', gridClass: 'bento-g1', tag: '01', color: T.accent,
      title: 'Demand & Acquisition Engines',
      desc: 'Precision targeting. Maximum scale.',
      items: ['High-Budget Ad Buying', 'Omnichannel Scaling', 'Advanced B2B Lead Gen', 'Performance SEO'],
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M3 23L9 17l4 4 6-8 8-6" stroke={T.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="17" r="2" fill={`${T.accent}30`} stroke={T.accent} strokeWidth="1"/>
          <circle cx="13" cy="21" r="2" fill={`${T.accent}30`} stroke={T.accent} strokeWidth="1"/>
          <circle cx="19" cy="13" r="2" fill={`${T.accent}30`} stroke={T.accent} strokeWidth="1"/>
          <circle cx="27" cy="7" r="2"  fill={`${T.accent}30`} stroke={T.accent} strokeWidth="1"/>
        </svg>
      ),
    },
    {
      id: 'data', gridClass: 'bento-g2', tag: '02', color: T.acc2,
      title: 'Data Architecture & Unit Economics',
      desc: 'Numbers that tell the real story.',
      items: ['Custom BI Dashboards', 'GA4 Infrastructure', 'Conversion Rate Optimization', 'LTV & Funnel Analytics'],
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="3"  y="19" width="5" height="8" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.2"/>
          <rect x="11" y="13" width="5" height="14" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.2"/>
          <rect x="19" y="7"  width="5" height="20" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.2"/>
          <path d="M5 10L11 7l8 4 6-3" stroke={T.acc2} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2"/>
        </svg>
      ),
    },
    {
      id: 'ai', gridClass: 'bento-g3', tag: '03', color: '#C084FC',
      title: 'AI Workflows & CRM Logic',
      desc: 'Systems that think ahead.',
      items: ['Proprietary CRM Systems', 'AI-Driven Lead Processing', 'Workflow Automation', 'Retention Architectures'],
      icon: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="11" y="3"  width="8" height="8" rx="2" stroke="#C084FC" strokeWidth="1.4"/>
          <rect x="3"  y="19" width="8" height="8" rx="2" stroke="#C084FC" strokeWidth="1.4"/>
          <rect x="19" y="19" width="8" height="8" rx="2" stroke="#C084FC" strokeWidth="1.4"/>
          <path d="M15 11v5M15 16l-8 3.5M15 16l8 3.5" stroke="#C084FC" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="expertise" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span style={{
            display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
            background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent,
          }}>Expertise</span>
          <h2 style={{
            fontSize: 'clamp(2rem,5vw,3.2rem)',
            fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0,
          }}>Three pillars.<br />One scalable machine.</h2>
        </motion.div>

        <div className="bento">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className={card.gridClass}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <motion.div
                whileHover={{ borderColor: `${card.color}44`, y: -4 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                style={{
                  height: '100%', minHeight: 240,
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                  border: `1px solid ${T.border}`, borderRadius: 20,
                  padding: 'clamp(1.5rem,3vw,2.25rem)',
                  position: 'relative', overflow: 'hidden',
                  display: 'flex', flexDirection: 'column', gap: '1.25rem',
                }}
              >
                {/* Corner accent glow */}
                <div style={{
                  position: 'absolute', top: 0, right: 0, width: 130, height: 130,
                  background: `radial-gradient(circle at top right,${card.color}12,transparent 70%)`,
                  borderRadius: '0 20px 0 0', pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: 54, height: 54, borderRadius: 14, flexShrink: 0,
                  background: `${card.color}0E`, border: `1px solid ${card.color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{card.icon}</div>

                {/* Header */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: card.color, opacity: 0.6, letterSpacing: '0.1em' }}>{card.tag}</span>
                    <div style={{ flex: 1, height: 1, background: `${card.color}1A` }} />
                  </div>
                  <h3 style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: T.muted }}>{card.desc}</p>
                </div>

                {/* Skill tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: 'auto' }}>
                  {card.items.map((item, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + j * 0.06, duration: 0.3 }}
                      style={{
                        padding: '5px 12px', borderRadius: 8,
                        fontSize: '0.78rem', fontWeight: 500,
                        background: `${card.color}0C`, border: `1px solid ${card.color}28`, color: card.color,
                      }}
                    >{item}</motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// SERVICES — 3 High-Value Protocols
// ─────────────────────────────────────────────────────────────────
const Services = () => {
  const offers = [
    {
      num: '01', color: T.accent,
      title: 'Upgraded Sales Infrastructure',
      copy: "Every business wants a smoother, more efficient machine. By fixing the leaks in your current sales process and connecting everything into one clean system, no leads are left behind. Your team gets to focus on closing deals, not copy-pasting data.",
      tags: ['CRM Integration', 'Pipeline Automation', 'Lead Routing'],
    },
    {
      num: '02', color: T.acc2,
      title: 'Profit-Focused Ad Scaling',
      copy: "We manage ad campaigns where every single dollar is tracked — stopping the budget bleed, cutting out what doesn't work, and doubling down on channels that actually bring paying clients to grow your bottom line.",
      tags: ['Paid Media', 'ROAS Optimization', 'Multi-channel'],
    },
    {
      num: '03', color: '#C084FC',
      title: 'Practical AI Integration',
      copy: "The AI hype is everywhere, but you don't need to buy expensive, overcomplicated corporate software. We help you implement simple, affordable AI tools that actually work for your daily tasks. Automate the boring routine, speed up your team, and keep your business ahead of the curve without the headache.",
      tags: ['AI Automation', 'Workflow Design', 'Tool Implementation'],
    },
  ];

  return (
    <section id="services" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg1, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem',
              fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
              background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent,
            }}>Services</span>
            <h2 style={{
              fontSize: 'clamp(2rem,5vw,3.2rem)',
              fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0,
            }}>Three protocols.<br />Measurable results.</h2>
          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px', borderRadius: 12,
              background: 'rgba(255,255,255,0.05)', border: `1px solid ${T.brd2}`,
              color: '#fff', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
            }}
          >
            See what fits your business
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        {/* Offer rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ borderColor: `${offer.color}44` }}
                transition={{ duration: 0.2 }}
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${T.border}`,
                  borderRadius: 20,
                  padding: 'clamp(1.5rem,3vw,2.25rem) clamp(1.5rem,3vw,2.5rem)',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Left accent line */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                  borderRadius: '20px 0 0 20px',
                  background: `linear-gradient(to bottom,${offer.color},${offer.color}44)`,
                }} />

                <div className="svc-inner">
                  {/* Decorative number */}
                  <div className="svc-num" style={{
                    fontSize: 'clamp(2.8rem,5vw,3.8rem)',
                    fontWeight: 800, letterSpacing: '-0.04em',
                    color: `${offer.color}28`, lineHeight: 1,
                    userSelect: 'none',
                  }}>{offer.num}</div>

                  {/* Text content */}
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1.1rem,2vw,1.3rem)',
                      fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.75rem',
                    }}>{offer.title}</h3>
                    <p style={{
                      color: T.sub,
                      fontSize: 'clamp(0.87rem,1.4vw,0.97rem)',
                      lineHeight: 1.77, marginBottom: '1.25rem', maxWidth: 700,
                    }}>{offer.copy}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {offer.tags.map((tag, ti) => (
                        <span key={ti} style={{
                          padding: '4px 12px', borderRadius: 8,
                          fontSize: '0.77rem', fontWeight: 600,
                          background: `${offer.color}0C`, border: `1px solid ${offer.color}28`, color: offer.color,
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow button */}
                  <a className="svc-arrow" href="#contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: `${offer.color}12`, border: `1px solid ${offer.color}28`,
                    color: offer.color, textDecoration: 'none',
                  }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// CASE STUDIES — NOGOOD Style: Giant Numbers
// ─────────────────────────────────────────────────────────────────
const CaseStudies = () => {
  const cases = [
    {
      industry: 'E-Commerce',
      highlight: '7X',
      suffix: 'GROWTH',
      context: 'Scaled monthly revenue 7x within 18 months by building performance infrastructure and integrating custom CRM.',
      color: T.accent,
      period: '18 months',
    },
    {
      industry: 'HealthTech',
      highlight: '$3–5',
      suffix: 'CAC',
      context: 'Managed highly efficient user acquisition campaigns in competitive US/EU English-speaking markets.',
      color: T.acc2,
      period: 'US & EU markets',
    },
    {
      industry: 'B2B Manufacturing',
      highlight: '1,000+',
      suffix: 'LEADS/MO',
      context: 'Transitioned offline business to digital, driving expansion across 40+ markets from zero inbound flow.',
      color: '#C084FC',
      period: '40+ markets',
    },
  ];

  return (
    <section id="work" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg0, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
            background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent,
          }}>Case Studies</span>
          <h2 style={{
            fontSize: 'clamp(2rem,5vw,3.2rem)',
            fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0,
          }}>Results that speak<br />for themselves.</h2>
        </motion.div>

        <div className="cases-grid">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <motion.div
                whileHover={{ y: -6, borderColor: `${c.color}44` }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                style={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${T.border}`, borderRadius: 20,
                  padding: 'clamp(1.75rem,3vw,2.5rem)',
                  overflow: 'hidden', position: 'relative',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                }}
              >
                {/* Corner glow */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, width: 200, height: 200,
                  background: `radial-gradient(circle at bottom left,${c.color}0D,transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Industry badge */}
                <span style={{
                  display: 'inline-block', padding: '4px 12px', borderRadius: 999, alignSelf: 'flex-start',
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const,
                  background: `${c.color}10`, border: `1px solid ${c.color}28`, color: c.color,
                }}>{c.industry}</span>

                {/* GIANT number — NOGOOD style */}
                <div>
                  <div style={{
                    fontSize: 'clamp(5rem,13vw,9rem)',
                    fontWeight: 900, lineHeight: 0.88, letterSpacing: '-0.05em',
                    background: `linear-gradient(135deg,${c.color} 30%,rgba(255,255,255,0.8) 100%)`,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>{c.highlight}</div>
                  <div style={{
                    fontSize: 'clamp(1rem,2vw,1.35rem)',
                    fontWeight: 800, letterSpacing: '0.1em',
                    color: c.color, opacity: 0.65, marginTop: '0.2rem',
                  }}>{c.suffix}</div>
                </div>

                {/* Context text */}
                <p style={{ color: T.sub, fontSize: 'clamp(0.85rem,1.4vw,0.95rem)', lineHeight: 1.72, flex: 1 }}>
                  {c.context}
                </p>

                {/* Period */}
                <div style={{
                  fontSize: '0.77rem', fontWeight: 600, color: T.muted,
                  letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                  paddingTop: '1rem', borderTop: `1px solid ${T.border}`,
                }}>{c.period}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: '', contact: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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
    width: '100%', padding: '16px 20px',
    background: 'rgba(255,255,255,0.04)', border: `1px solid ${T.brd2}`,
    borderRadius: 12, color: '#fff', fontSize: '1rem',
    fontFamily: 'inherit', outline: 'none', transition: 'border-color .2s',
  };

  return (
    <section id="contact" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg1, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{
            display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const,
            background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent,
          }}>Contact</span>
          <h2 style={{
            fontSize: 'clamp(2rem,5vw,3.2rem)',
            fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1rem',
          }}>Ready to scale?</h2>
          <p style={{ color: T.sub, fontSize: 'clamp(1rem,1.8vw,1.15rem)', lineHeight: 1.65 }}>
            Drop your details below or message directly on Telegram.<br />
            We respond within 24 hours.
          </p>
        </motion.div>

        {/* Telegram — highly visible CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}
        >
          <motion.a
            href="https://t.me/advertisment_th"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 0 48px rgba(39,174,228,0.28)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '17px 34px', borderRadius: 14,
              background: 'linear-gradient(135deg,rgba(39,174,228,0.14),rgba(39,174,228,0.07))',
              border: '1.5px solid rgba(39,174,228,0.38)',
              color: '#27AEE4', textDecoration: 'none',
              fontSize: 'clamp(0.95rem,2vw,1.05rem)', fontWeight: 700,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#27AEE4">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"/>
            </svg>
            Message directly on Telegram
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>

        {/* OR divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ color: T.muted, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>or leave your details</span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>

        {/* Form */}
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                textAlign: 'center', padding: 'clamp(2.5rem,5vw,4rem) 2rem',
                background: 'rgba(0,255,179,0.05)', border: `1px solid ${T.accent}30`, borderRadius: 20,
              }}
            >
              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                style={{
                  width: 64, height: 64, borderRadius: '50%',
                  background: `linear-gradient(135deg,${T.accent},${T.acc2})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M5 14l6 6L23 8" stroke="#0A0A0C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>You&apos;re on our radar.</h3>
              <p style={{ color: T.sub, fontSize: '1rem' }}>We&apos;ll reach out within 24 hours. Talk soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              <div>
                <label style={{
                  display: 'block', fontSize: '0.77rem', color: T.muted, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.6rem',
                }}>Name</label>
                <input
                  type="text" required placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLInputElement).style.borderColor = T.accent; }}
                  onBlur={e  => { (e.target as HTMLInputElement).style.borderColor = T.brd2;  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block', fontSize: '0.77rem', color: T.muted, fontWeight: 600,
                  letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '0.6rem',
                }}>Email / Telegram / WhatsApp / Phone</label>
                <input
                  type="text" required placeholder="How should we reach you?"
                  value={form.contact}
                  onChange={e => setForm(p => ({ ...p, contact: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { (e.target as HTMLInputElement).style.borderColor = T.accent; }}
                  onBlur={e  => { (e.target as HTMLInputElement).style.borderColor = T.brd2;  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02, boxShadow: `0 0 40px ${T.glow},0 0 80px ${T.glow2}` }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '17px 32px', borderRadius: 12,
                  border: 'none', fontFamily: 'inherit', fontWeight: 700,
                  fontSize: '1.05rem', letterSpacing: '0.02em',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  background: `linear-gradient(135deg,${T.accent},${T.acc2})`,
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
                    Get in touch
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 9h14M11 5l4 4-4 4" stroke="#0A0A0C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <p style={{ color: '#FF6B6B', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.5rem' }}>
                  Something went wrong. Please message us directly on Telegram.
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
    padding: '2.5rem clamp(1.25rem,5vw,2.5rem)',
    background: T.bg0, borderTop: `1px solid ${T.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: '1rem',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <Logo size={32} />
      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.02em' }}>
        Tsvetkov<span style={{ color: T.accent }}>.</span>
      </span>
    </div>
    <p style={{ color: T.muted, fontSize: '0.8rem' }}>© {new Date().getFullYear()} Fedor Tsvetkov. All rights reserved.</p>
    <a
      href="https://t.me/advertisment_th" target="_blank" rel="noopener noreferrer"
      style={{ color: T.sub, fontSize: '0.82rem', textDecoration: 'none', fontWeight: 500 }}
    >@advertisment_th</a>
  </footer>
);

// ─────────────────────────────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────────────────────────────
export default function TsvetkovB2C() {
  return (
    <main style={{ background: '#0A0A0C', minHeight: '100vh', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Expertise />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
