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
  accent: '#00FFB3', // Emerald Neon Glow
  acc2:   '#00C6FF',
  glow:   'rgba(0,255,179,0.08)',
  glow2:  'rgba(0,198,255,0.05)',
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
          TSVETKOV<span style={{ color: T.accent }}>.</span>
        </span>
      </a>

      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
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
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 'clamp(300px,60vw,650px)', height: 'clamp(300px,60vw,650px)',
        borderRadius: '50%',
        background: `radial-gradient(circle,${T.glow} 0%,transparent 70%)`, pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 960, width: '100%' }}>
        
        {/* Unified Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 999,
            background: 'rgba(0,255,179,0.05)', border: `1px solid ${T.accent}20`,
            fontSize: 11, fontWeight: 700, color: T.accent, letterSpacing: '0.15em',
          }}>
            TSVETKOV 
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} />
            FOUNDER-LED GROWTH AGENCY
          </span>
        </motion.div>

        {/* Clean 2-Line Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.5rem,7.5vw,5.2rem)',
            fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em',
            color: '#fff', marginBottom: '1.8rem',
          }}
        >
          High-Ticket Growth Engines.<br />
          <span style={{
            background: `linear-gradient(135deg,${T.accent} 0%,${T.acc2} 100%)`,
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Engineered to Scale.</span>
        </motion.h1>

        {/* Human-Centric Business Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(1rem,2.2vw,1.25rem)',
            color: T.sub, lineHeight: 1.6,
            maxWidth: 740, margin: '0 auto 3.5rem', fontWeight: 400,
          }}
        >
          We eliminate chaos in your marketing and digital systems. No fluff — just high-performance architectures that track every dollar and automate your sales flow.
        </motion.p>

        {/* Audit Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${T.glow}` }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '16px 36px', borderRadius: 999,
              background: `linear-gradient(135deg,${T.accent},${T.acc2})`,
              color: '#0A0A0C', fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            Audit My Sales Machine
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
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
        </svg>
      ),
    },
  ];

  return (
    <section id="expertise" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Expertise</span>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>Three pillars.<br />One scalable machine.</h2>
        </motion.div>
        <div className="bento" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {cards.map((card, i) => (
            <motion.div key={card.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ height: '100%', minHeight: 240, background: 'rgba(255,255,255,0.02)', border: `1px solid ${T.border}`, borderRadius: 20, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${card.color}10`, border: `1px solid ${card.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{card.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: T.muted }}>{card.desc}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {card.items.map((item, j) => (
                    <span key={j} style={{ padding: '4px 10px', borderRadius: 6, fontSize: '0.75rem', background: `${card.color}08`, border: `1px solid ${card.color}15`, color: card.color }}>{item}</span>
                  ))}
                </div>
              </div>
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
      copy: "Let’s talk about margins and profit, not just clicks. We manage ad campaigns where every single dollar is tracked — stopping the budget bleed, cutting out what doesn't work, and doubling down on channels that actually bring paying clients to grow your bottom line.",
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
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Services</span>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>Three protocols.<br />Measurable results.</h2>
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {offers.map((offer, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.015)', border: `1px solid ${T.border}`, borderRadius: 20, padding: '2rem', position: 'relative' }}>
              {/* FIXED TYPE ERROR HERE: changed 'items' to 'alignItems' */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: offer.color }}>{offer.num}</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{offer.title}</h3>
                  {/* FIXED TYPE ERROR HERE: changed 'maxwidth' to 'maxWidth' */}
                  <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 750, marginBottom: '1.25rem' }}>{offer.copy}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {offer.tags.map((tag, ti) => (
                      <span key={ti} style={{ padding: '3px 10px', borderRadius: 6, fontSize: '0.75rem', background: `${offer.color}08`, border: `1px solid ${offer.color}15`, color: offer.color }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
      industry: 'E-Commerce', highlight: '7X', suffix: 'GROWTH',
      context: 'Scaled monthly revenue 7x within 18 months by building performance infrastructure and integrating custom CRM.',
      color: T.accent, period: '18 months',
    },
    {
      industry: 'HealthTech', highlight: '$3–5', suffix: 'CAC',
      context: 'Managed highly efficient user acquisition campaigns in competitive US/EU English-speaking markets.',
      color: T.acc2, period: 'US & EU markets',
    },
    {
      industry: 'B2B Manufacturing', highlight: '1,000+', suffix: 'LEADS/MO',
      context: 'Transitioned offline business to digital, driving expansion across 40+ markets from zero inbound flow.',
      color: '#C084FC', period: '40+ markets',
    },
  ];

  return (
    <section id="work" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg0, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Case Studies</span>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>Results that speak<br />for themselves.</h2>
        </motion.div>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {cases.map((c, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${T.border}`, borderRadius: 20, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, alignSelf: 'flex-start', fontSize: 10, fontWeight: 700, background: `${c.color}10`, border: `1px solid ${c.color}20`, color: c.color, letterSpacing: '0.05em' }}>{c.industry}</span>
              <div>
                <div style={{ fontSize: 'clamp(4.5rem,10vw,6.5rem)', fontWeight: 900, lineHeight: 0.9, color: '#fff' }}>{c.highlight}</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: c.color, letterSpacing: '0.05em' }}>{c.suffix}</div>
              </div>
              <p style={{ color: T.sub, fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>{c.context}</p>
              <div style={{ fontSize: '0.75rem', color: T.muted, borderTop: `1px solid ${T.border}`, paddingTop: '0.75rem' }}>{c.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// CONTACT (Form width optimized to max-w: 460px for premium feel)
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
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.03)', border: `1px solid ${T.brd2}`,
    borderRadius: 10, color: '#fff', fontSize: '0.95rem',
    fontFamily: 'inherit', outline: 'none', transition: 'border-color .2s',
  };

  return (
    <section id="contact" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg1, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 460, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Contact</span>
          {/* FIXED TYPE ERROR HERE: changed 'tracking' to 'letterSpacing' */}
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1rem' }}>Ready to scale?</h2>
          <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6 }}>
            Drop your details below or message directly on Telegram.<br />
            We respond within 24 hours.
          </p>
        </div>

        {/* Telegram Direct Link — Verified Username */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <motion.a
            href="https://t.me/advertisment_th"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(39,174,228,0.15)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 28px', borderRadius: 999,
              background: 'linear-gradient(135deg,rgba(39,174,228,0.1),rgba(39,174,228,0.04))',
              border: '1px solid rgba(39,174,228,0.3)',
              color: '#27AEE4', textDecoration: 'none',
              fontSize: '0.95rem', fontWeight: 700,
            }}
          >
            Message directly on Telegram
          </motion.a>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ color: T.muted, fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>or leave your details</span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>

        {/* Form Logic */}
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0,255,179,0.03)', border: `1px solid ${T.accent}20`, borderRadius: 16 }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>You&apos;re on our radar.</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem' }}>We&apos;ll reach out within 24 hours. Talk soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Name</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Contact Info (Email / Telegram)</label>
                <input type="text" required placeholder="How should we reach you?" value={form.contact} onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} style={inputStyle} />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01, boxShadow: `0 0 30px ${T.glow}` }}
                whileTap={{ scale: 0.99 }}
                style={{
                  padding: '14px 28px', borderRadius: 999, border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '1rem',
                  /* FIXED TYPE ERROR HERE: changed 'justifycontent' to 'justifyContent' */
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer', background: `linear-gradient(135deg,${T.accent},${T.acc2})`, color: '#0A0A0C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: '0.5rem',
                }}
              >
                {status === 'sending' ? 'Sending…' : 'Get in touch'}
              </motion.button>
            </form>
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
        TSVETKOV<span style={{ color: T.accent }}>.</span>
      </span>
    </div>
    <p style={{ color: T.muted, fontSize: '0.8rem' }}>© {new Date().getFullYear()} TSVETKOV. All rights reserved.</p>
    <a href="https://t.me/advertisment_th" target="_blank" rel="noopener noreferrer" style={{ color: T.sub, fontSize: '0.82rem', textDecoration: 'none', fontWeight: 500 }}>@advertisment_th</a>
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
