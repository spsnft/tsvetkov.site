'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const cards = [
  {
    id: 'growth', 
    color: '#00A3FF',
    badge: 'GTM & STRATEGY',
    title: 'Go-To-Market & Growth Strategy',
    desc: 'Designing scalable acquisition funnels and positioning that convert demand into predictable revenue — without budget waste',
    items: ['GTM Strategy', 'Funnel Architecture', 'Omnichannel Scale', 'CAC Optimization'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
        <path d="M3 23L9 17l4 4 6-8 8-6" stroke="#00A3FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'data', 
    color: '#38BDF8',
    badge: 'UNIT ECONOMICS',
    title: 'Data & Revenue Intelligence',
    desc: 'End-to-end attribution bridging marketing spend directly with net P&L, cohort retention, and true customer LTV',
    items: ['P&L Attribution', 'Unit Economics', 'BI Dashboards', 'LTV & Cohorts'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 30 30" fill="none">
        <rect x="3"  y="19" width="5" height="8"  rx="1.5" fill="rgba(56, 189, 248, 0.15)" stroke="#38BDF8" strokeWidth="1.8"/>
        <rect x="11" y="13" width="5" height="14" rx="1.5" fill="rgba(56, 189, 248, 0.15)" stroke="#38BDF8" strokeWidth="1.8"/>
        <rect x="19" y="7"  width="5" height="20" rx="1.5" fill="rgba(56, 189, 248, 0.15)" stroke="#38BDF8" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    id: 'ai', 
    color: '#60A5FA',
    badge: 'SYSTEM AUTOMATION',
    title: 'CRM & AI Automation',
    desc: 'Architecting zero-leakage CRM workflows and AI processing to slash operational overhead and accelerate deal cycles',
    items: ['CRM Architecture', 'AI Lead Scoring', 'Process Automation', 'Retention Loops'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" fill="rgba(96, 165, 250, 0.15)" />
      </svg>
    ),
  },
];

export const Expertise = () => (
  <section 
    id="expertise" 
    style={{ 
      width: '100%',
      position: 'relative',
      paddingTop: 0,
      paddingBottom: 'clamp(3rem, 6vw, 6rem)',
      paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
      paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
      background: 'transparent' 
    }}
  >
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
          rgba(0, 163, 255, 0.05) 0%,
          rgba(10, 16, 26, 0.88) 75%
        );
        border: 1px solid rgba(0, 163, 255, 0.2);
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
        border-color: rgba(0, 163, 255, 0.45);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 163, 255, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2);
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
        background: rgba(0, 163, 255, 0.05);
        border: 1px solid rgba(0, 163, 255, 0.15);
        color: #E0F2FE;
        transition: all 0.2s ease;
      }

      .bento-expertise-card:hover .skill-tag {
        background: rgba(0, 163, 255, 0.1);
        border-color: rgba(0, 163, 255, 0.3);
      }
    `}</style>

    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        style={{ marginBottom: '3rem', textAlign: 'center' }}
      >
        <span style={{ 
          display: 'inline-block', padding: '0.35rem 0.85rem', borderRadius: 20, marginBottom: '1rem', 
          fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', 
          background: 'rgba(0, 163, 255, 0.08)', border: '1px solid rgba(0, 163, 255, 0.25)', color: T.acc2 
        }}>
          CORE CAPABILITIES & ENGINEERING
        </span>
        
        <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
          Architecting Growth<br />Engineering Scalable Revenue
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
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: `${card.color}15`, border: `1px solid ${card.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {card.icon}
                  </div>
                  <span className="card-badge" style={{ color: card.color, background: `${card.color}12`, border: `1px solid ${card.color}30` }}>
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
