'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const cases = [
  {
    id: 1, industry: 'E-Commerce', highlight: '7X', suffix: 'GROWTH',
    title: 'Performance Infrastructure Scaling', color: T.accent,
    // ИСПРАВЛЕНО: Максимально плотный и емкий текст, чтобы "leaks" не выпадало на ПК
    problem: 'Lack of end-to-end CRM & analytics sync, chaotic marketing, and cross-department lead leaks.',
    solution: 'Deployed a transparent data infrastructure, implemented full-funnel tracking, and optimized unit economics for actual margin rather than empty clicks.',
  },
  {
    id: 2, industry: 'HealthTech', highlight: '$3–5', suffix: 'CUSTOMER ACQUISITION COST',
    title: 'Global User Acquisition Optimization', color: T.acc2,
    problem: 'Aggressive, overheated competition in the US and EU markets burning ad budgets, and a high baseline CAC.',
    solution: 'Launched behavior-driven precision targeting, restructured auction logic, and optimized page conversions.',
  },
  {
    id: 3, industry: 'B2B Manufacturing', highlight: '1,000+', suffix: 'LEADS/MO',
    title: 'Digital Inbound Expansion Protocol', color: '#C084FC',
    problem: 'Complete reliance on offline sales, zero digital inbound flow, and lack of systematic B2B lead qualification.',
    solution: 'Digitized acquisition, automated lead routing, and scaled omnichannel capture across 40+ global markets.',
  },
];

export const CaseStudies = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="work" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: 'transparent', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Case Studies</span>
          <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
            Results that speak<br />for themselves
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cases.map((c) => {
            const isOpen = openId === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setOpenId(isOpen ? null : c.id)}
                style={{
                  background: isOpen 
                    ? `linear-gradient(135deg, rgba(14, 14, 18, 0.85) 0%, ${c.color}06 100%)` 
                    : `linear-gradient(135deg, rgba(10, 10, 12, 0.75) 0%, ${c.color}02 100%)`,
                  border: `1px solid ${isOpen ? `${c.color}35` : `${c.color}12`}`,
                  borderRadius: 16, padding: '1.5rem 2rem',
                  cursor: 'pointer', userSelect: 'none',
                  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
                  backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: isOpen ? `0 15px 40px rgba(0,0,0,0.6)` : `0 4px 20px rgba(0,0,0,0.3)`,
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', flex: 1 }}>
                    
                    {/* Giant stat with rigid desktop alignment */}
                    <div style={{ width: '260px', maxWidth: '100%', flexShrink: 0 }}>
                      <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1 }}>{c.highlight}</div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 800, color: c.color, letterSpacing: '0.06em', marginTop: 4, textTransform: 'uppercase' as const }}>{c.suffix}</div>
                    </div>
                    
                    {/* Title */}
                    <div style={{ flex: 1, minWidth: 240 }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>{c.title}</span>
                    </div>
                  </div>

                  {/* Right: industry tag + chevron */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
                    <span style={{ display: 'inline-block', padding: '4px 10px', borderRadius: 6, fontSize: 10, fontWeight: 700, background: `${c.color}12`, border: `1px solid ${c.color}25`, color: c.color, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
                      {c.industry}
                    </span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke={isOpen ? c.color : T.sub} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </div>
                </div>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem' }}>
                        <div>
                          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: T.muted, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Problem Context</span>
                          <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{c.problem}</p>
                        </div>
                        <div>
                          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, color: c.color, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Engineered Solution</span>
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
