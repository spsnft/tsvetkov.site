'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const cards = [
  {
    id: 'demand', color: T.accent,
    badge: 'ACQUISITION ENGINE',
    title: 'Demand & Lead Capture',
    desc: 'High-intent performance marketing built for maximum ROI and predictable client pipelines.',
    items: ['High-Budget Ads', 'Omnichannel Scale', 'B2B Lead Gen', 'Performance SEO'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
        <path d="M3 23L9 17l4 4 6-8 8-6" stroke={T.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'data', color: T.acc2,
    badge: 'UNIT ECONOMICS',
    title: 'Data & Revenue Analytics',
    desc: 'Full-funnel tracking from first ad impression to net margin and customer LTV.',
    items: ['BI Dashboards', 'GA4 Infrastructure', 'CRO Optimization', 'Funnel Analytics'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
        <rect x="3"  y="19" width="5" height="8"  rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.8"/>
        <rect x="11" y="13" width="5" height="14" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.8"/>
        <rect x="19" y="7"  width="5" height="20" rx="1.5" fill={`${T.acc2}20`} stroke={T.acc2} strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    id: 'ai', color: '#C084FC',
    badge: 'SYSTEM AUTOMATION',
    title: 'AI Workflows & CRM Systems',
    desc: 'Automating operational routine and lead qualification into zero-leakage sales funnels.',
    items: ['Custom CRM Systems', 'AI Lead Processing', 'Workflow Design', 'Retention Loops'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" fill="rgba(192,132,252,0.15)" />
      </svg>
    ),
  },
];

export const Expertise = () => (
  <section id="expertise" style={{ padding: 'clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,2.5rem)', background: 'transparent' }}>
    <style jsx>{`
      .expertise-grid {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      }

      .bento-expertise-card {
        height: 100%;
        min-height: 280px;
        background: radial-gradient(
          circle at 50% 0%,
          rgba(255, 255, 255, 0.03) 0%,
          rgba(12, 14, 20, 0.85) 75%
        );
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        box-sizing: border-box;
      }

      .bento-expertise-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 255, 255, 0.18);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7), inset 0 1px 1px rgba(255, 255, 255, 0.2);
      }

      .card-badge {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        padding: 0.25rem 0.6rem;
        border-radius: 6px;
        width: fit-content;
      }

      .skill-tag {
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.06);
        color: rgba(255, 255, 255, 0.8);
      }
    `}</style>

    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '3.5rem' }}>
        <span style={{ 
          display: 'inline-block', padding: '0.35rem 0.85rem', borderRadius: 20, marginBottom: '1rem', 
          fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', 
          background: 'rgba(0, 229, 153, 0.05)', border: '1px solid rgba(0, 229, 153, 0.2)', color: T.accent 
        }}>
          SYSTEM ARCHITECTURE
        </span>
        
        <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
          Three pillars<br />One growth machine
        </h2>
      </motion.div>

      <div className="expertise-grid">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1 }}
          >
            <div className="bento-expertise-card">
              
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: `${card.color}12`, border: `1px solid ${card.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                  <span className="card-badge" style={{ color: card.color, background: `${card.color}10`, border: `1px solid ${card.color}25` }}>
                    {card.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', margin: '0 0 0.6rem 0', letterSpacing: '-0.02em' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: T.sub, margin: 0, lineHeight: 1.55 }}>
                  {card.desc}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '2rem' }}>
                {card.items.map((item, j) => (
                  <span key={j} className="skill-tag">
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
