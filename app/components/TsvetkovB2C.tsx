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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(1rem,5vw,2.5rem)', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,12,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
        transition: 'background .3s, border-color .3s',
      }}
    >
      <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Logo />
      </a>

      {!isMobile && (
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {[['#expertise','Expertise'],['#services','Services'],['#work','Work'],['#contact','Contact']].map(([href,label]) => (
            <a key={href} href={href}
              style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = T.sub)}
            >{label}</a>
          ))}
        </div>
      )}

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          padding: '8px 16px', borderRadius: 10,
          background: `linear-gradient(135deg,${T.accent},${T.acc2})`,
          color: '#0A0A0C', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none',
        }}
      >Let&apos;s talk</motion.a>
    </motion.nav>
  );
};

// ─────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────
const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(5rem,12vw,9rem) 1rem clamp(4rem,8vw,6rem)',
    }}>
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 'clamp(300px,60vw,650px)', height: 'clamp(300px,60vw,650px)',
        borderRadius: '50%',
        background: `radial-gradient(circle,${T.glow} 0%,transparent 70%)`, pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 960, width: '100%' }}>
        
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, background: 'rgba(0,255,179,0.05)', border: `1px solid ${T.accent}20`, fontSize: 10, fontWeight: 700, color: T.accent, letterSpacing: '0.15em' }}>
            TSVETKOV <span style={{ width: 5, height: 5, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} /> FOUNDER-LED GROWTH AGENCY
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ fontSize: 'clamp(2.1rem, 6.5vw, 4.8rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.04em', color: '#fff', marginBottom: '2rem' }}>
          Value Growth.<br />
          <span style={{ background: `linear-gradient(135deg,${T.accent} 0%,${T.acc2} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Engineered to Scale.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: T.sub, lineHeight: 1.6, maxWidth: 640, margin: '0 auto 3rem', fontWeight: 400 }}>
          We eliminate chaos in marketing and digital systems.
          <span style={{ display: 'block', marginTop: '1rem', color: T.body, fontWeight: 500 }}>No fluff — just high-performance architectures.</span>
          <span style={{ display: 'block', marginTop: '0.25rem', color: T.body, fontWeight: 500 }}>Track every dollar and automate sales flow.</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
          <motion.a href="#contact" whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${T.glow}` }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', borderRadius: 999, background: `linear-gradient(135deg,${T.accent},${T.acc2})`, color: '#0A0A0C', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
            Audit My Business
          </motion.a>
        </motion.div>

        {/* Scroll Animation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: T.muted, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }} style={{ width: 1, height: 36, background: `linear-gradient(to bottom,${T.accent},transparent)` }} />
        </motion.div>

      </motion.div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// EXPERTISE — Side-by-Side Row & Symmetrical 2x2 Grid
// ─────────────────────────────────────────────────────────────────
const Expertise = () => {
  const cards = [
    {
      id: 'demand', color: T.accent,
      title: 'Demand & Acquisition Engines',
      desc: 'Precision targeting. Maximum scale.',
      items: ['High-Budget Ads', 'Omnichannel Scale', 'B2B Lead Gen', 'Performance SEO'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
          <path d="M3 23L9 17l4 4 6-8 8-6" stroke={T.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 'data', color: T.acc2,
      title: 'Data & Unit Economics',
      desc: 'Numbers that tell the real story.',
      items: ['BI Dashboards', 'GA4 Infrastructure', 'CRO Optimization', 'Funnel Analytics'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
          <rect x="3"  y="19" width="5" height="8" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.5"/>
          <rect x="11" y="13" width="5" height="14" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.5"/>
          <rect x="19" y="7"  width="5" height="20" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      id: 'ai', color: '#C084FC',
      title: 'AI Workflows & CRM Logic',
      desc: 'Systems that think ahead.',
      items: ['Custom CRM Systems', 'AI Lead Processing', 'Workflow Design', 'Retention Loops'],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" fill="rgba(192, 132, 252, 0.15)" />
        </svg>
      ),
    },
  ];

  return (
    <section id="expertise" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Expertise</span>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>Three pillars.<br />One scalable machine.</h2>
        </motion.div>
        <div className="bento" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {cards.map((card, i) => (
            <motion.div key={card.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div style={{ height: '100%', minHeight: 250, background: 'rgba(255,255,255,0.02)', border: `1px solid ${T.border}`, borderRadius: 20, padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
                
                {/* Row Header: Icon + Title aligned together */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: `${card.color}10`, border: `1px solid ${card.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {card.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>{card.title}</h3>
                </div>

                <p style={{ fontSize: '0.85rem', color: T.muted, margin: 0, lineHeight: 1.4 }}>{card.desc}</p>
                
                {/* Symmetrical 2x2 Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: 'auto' }}>
                  {card.items.map((item, j) => (
                    <span key={j} style={{ padding: '6px 8px', borderRadius: 6, fontSize: '0.75rem', background: `${card.color}08`, border: `1px solid ${card.color}15`, color: card.color, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item}
                    </span>
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
// SERVICES — 3 High-Value Protocols with Clean Copy & 2x2 Grids
// ─────────────────────────────────────────────────────────────────
const Services = () => {
  const offers = [
    {
      num: '01', color: T.accent,
      title: 'Upgraded Sales Infrastructure',
      copy: "Fix the leaks in your sales process and connect everything into one system, no leads are left behind. Your team gets to focus on closing deals, not copy-pasting data.",
      tags: ['CRM Integration', 'Pipeline Auto', 'Lead Routing', 'Analytics Sync'],
    },
    {
      num: '02', color: T.acc2,
      title: 'Profit-Focused Ad Scaling',
      copy: "We manage ad campaigns where every single dollar is tracked — stopping the budget bleed, cutting out what doesn't work, and doubling down on channels that actually bring paying clients to grow your bottom line.",
      tags: ['Paid Media', 'ROAS Opt', 'Multi-channel', 'Funnel Tracking'],
    },
    {
      num: '03', color: '#C084FC',
      title: 'Practical AI Integration',
      copy: "We implement simple, affordable AI tools that actually work for your daily tasks. Automate the boring routine, speed up your team, and keep your business ahead of the trends without the headache.",
      tags: ['AI Automation', 'Workflow Design', 'Tool Deploy', 'Routine Cuts'],
    },
  ];

  return (
    <section id="services" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg1, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Services</span>
            <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>Three protocols.<br />Measurable results.</h2>
          </motion.div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {offers.map((offer, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.015)', border: `1px solid ${T.border}`, borderRadius: 20, padding: '2rem', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ width: '100%' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: offer.color }}>{offer.num}</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{offer.title}</h3>
                  <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 750, marginBottom: '1.5rem' }}>{offer.copy}</p>
                  
                  {/* Symmetrical 2x2 grid for advantages / specifications */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', maxWidth: 360 }}>
                    {offer.tags.map((tag, ti) => (
                      <span key={ti} style={{ padding: '6px 10px', borderRadius: 6, fontSize: '0.75rem', background: `${offer.color}08`, border: `1px solid ${offer.color}15`, color: offer.color, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {tag}
                      </span>
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
// CASE STUDIES — Optimized Accordion Rows (No Period, Relocated Tags)
// ─────────────────────────────────────────────────────────────────
const CaseStudies = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const cases = [
    {
      id: 1, industry: 'E-Commerce', highlight: '7X', suffix: 'GROWTH',
      title: 'Performance Infrastructure Scaling',
      problem: 'Хаос в маркетинговых кампаниях, отсутствие сквозной синхронизации CRM с аналитикой и критические потери лидов на стыке отделов.',
      solution: 'Развернули прозрачную инфраструктуру данных, внедрили сквозной трекинг воронки и оптимизировали юнит-экономику под реальную маржу, а не пустые клики.',
      color: T.accent,
    },
    {
      id: 2, industry: 'HealthTech', highlight: '$3–5', suffix: 'CUSTOMER ACQUISITION COST',
      title: 'Global User Acquisition Optimization',
      problem: 'Агрессивная перегретая конкуренция на рынках США и Европы, выжигающая рекламный бюджет, и высокая базовая стоимость привлечения клиента.',
      solution: 'Запустили систему прецизионного таргетинга поведенческих факторов, перестроили логику аукционов и оптимизировали конверсию посадочных страниц.',
      color: T.acc2,
    },
    {
      id: 3, industry: 'B2B Manufacturing', highlight: '1,000+', suffix: 'LEADS/MO',
      title: 'Digital Inbound Expansion Protocol',
      problem: 'Полная зависимость бизнеса от офлайн-продаж, нулевой входящий поток из цифровых каналов и отсутствие системной B2B-квалификации заявок.',
      solution: 'Оцифровали привлечение с нуля, выстроили автоматические воронки распределения лидов и масштабировали омниканальный захват на 40+ международных рынков.',
      color: '#C084FC',
    },
  ];

  return (
    <section id="work" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: T.bg0, borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Case Studies</span>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>Results that speak<br />for themselves.</h2>
        </motion.div>

        {/* Full-width interactive rows container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cases.map((c) => {
            const isOpen = openId === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setOpenId(isOpen ? null : c.id)}
                style={{
                  background: isOpen ? 'rgba(255,255,255,0.025)' : 'rgba(255,255,255,0.01)',
                  border: `1px solid ${isOpen ? `${c.color}45` : T.border}`,
                  borderRadius: 16,
                  padding: '1.5rem 2rem',
                  cursor: 'pointer',
                  userSelect: 'none',
                  transition: 'background 0.3s, border-color 0.3s',
                }}
              >
                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', flex: 1 }}>
                    
                    {/* Big Stat Segment */}
                    <div style={{ minWidth: 150, flexShrink: 0 }}>
                      <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{c.highlight}</div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: c.color, letterSpacing: '0.06em', marginTop: 4, textTransform: 'uppercase' }}>{c.suffix}</div>
                    </div>

                    {/* Title Description */}
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>{c.title}</span>
                    </div>

                  </div>

                  {/* Right Controls: Relocated Industry Tag and Action Arrow */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
                    <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 6, fontSize: 10, fontWeight: 700, background: `${c.color}12', border: 1px solid ${c.color}25`, border: `1px solid ${c.color}25`, color: c.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {c.industry}
                    </span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? c.color : T.sub} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </motion.svg>
                  </div>
                </div>

                {/* Animated Body Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        <div>
                          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Problem Context</span>
                          <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{c.problem}</p>
                        </div>
                        <div>
                          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: c.color, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Engineered Solution</span>
                          <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{c.solution}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
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
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Contact</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1rem' }}>Ready to scale?</h2>
          <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6 }}>
            Drop your details below or message directly on Telegram.<br />
            We respond within 24 hours.
          </p>
        </div>

        {/* Telegram Direct Link */}
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
          <span style={{ color: T.muted, fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>or leave your details</span>
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
                <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 600, textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Name</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 600, textTransform: 'uppercase' as const, marginBottom: '0.5rem' }}>Contact Info (Email / Telegram)</label>
                <input type="text" required placeholder="How should we reach you?" value={form.contact} onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} style={inputStyle} />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01, boxShadow: `0 0 30px ${T.glow}` }}
                whileTap={{ scale: 0.99 }}
                style={{
                  padding: '14px 28px', borderRadius: 999, border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '1rem',
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
