'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

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
        <rect x="3"  y="19" width="5" height="8"  rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.5"/>
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
        <circle cx="12" cy="12" r="3" fill="rgba(192,132,252,0.15)" />
      </svg>
    ),
  },
];

export const Expertise = () => (
  <section id="expertise" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: 'transparent' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3.5rem' }}>
        <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Expertise</span>
        <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
          Three pillars.<br />One scalable machine.
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
          >
            <div style={{
              height: '100%', minHeight: 250,
              // Глубокий темный микс + 2% цветного напыления на дне
              background: `linear-gradient(135deg, rgba(10, 10, 12, 0.75) 0%, ${card.color}05 100%)`, 
              // Подкрашенная неоновая рамка для high-tech эффекта
              border: `1px solid ${card.color}18`, 
              borderRadius: 20, padding: '1.75rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.03)`,
            }}>
              {/* Icon + Title row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: `${card.color}10`, border: `1px solid ${card.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {card.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>{card.title}</h3>
              </div>

              <p style={{ fontSize: '0.85rem', color: T.muted, margin: 0, lineHeight: 1.4 }}>{card.desc}</p>

              {/* Symmetrical 2×2 skill grid */}
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
