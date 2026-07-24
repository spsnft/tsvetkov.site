'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const models = [
  {
    num: '01',
    badge: 'QUICK START / 1-2 WEEKS',
    title: 'Audit & Growth Roadmap',
    description: 'Deep-dive diagnostic of your current ad channels, CRM workflows, and unit economics. We identify traffic leakage, broken attribution, and sales bottlenecks.',
    deliverables: ['P&L & Analytics Audit', 'CRM & Pipeline Diagnostic', 'Growth Bottleneck Map', 'Step-by-Step Action Plan'],
    impact: 'Full clarity on lost revenue before committing capital',
    color: '#34D399',
  },
  {
    num: '02',
    badge: 'SYSTEM BUILD / TURNKEY',
    title: 'Growth Infrastructure Build',
    description: 'End-to-end architecture deployment: high-intent funnels, automated lead routing, zero-leakage CRM configuration, and custom P&L attribution dashboards.',
    deliverables: ['Custom Funnel Architecture', 'Instant CRM Lead Routing', 'End-to-End P&L Tracking', 'AI Workflow Automation'],
    impact: 'Scalable system ready for high-budget traffic expansion',
    color: T.accent, // #00E599
  },
  {
    num: '03',
    badge: 'ONGOING / FRACTIONAL CMO',
    title: 'Growth Partner & Performance Scaling',
    description: 'Continuous strategic direction and hands-on execution. We optimize CAC, manage ad spend, accelerate sales speed, and scale net margin month-over-month.',
    deliverables: ['Omnichannel Traffic Mgmt', 'Weekly P&L Optimization', 'Funnel Conversion Tuning', 'Executive Reporting'],
    impact: 'Predictable revenue growth and guaranteed system reliability',
    color: '#10B981',
  },
];

export const Services = () => (
  <section 
    id="services" 
    style={{ 
      width: '100%',
      position: 'relative',
      paddingTop: 0,
      paddingBottom: 'clamp(3rem, 6vw, 6rem)',
      paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
      paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
      background: 'transparent',
    }}
  >
    <style jsx>{`
      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 1.5rem;
      }

      .service-card {
        background: radial-gradient(
          circle at 50% 0%,
          rgba(0, 229, 153, 0.05) 0%,
          rgba(12, 22, 20, 0.88) 75%
        );
        border: 1px solid rgba(0, 229, 153, 0.2);
        border-radius: 20px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        box-sizing: border-box;
      }

      .service-card:hover {
        transform: translateY(-4px);
        border-color: rgba(0, 229, 153, 0.45);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 229, 153, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2);
      }
    `}</style>

    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      {/* Centered Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <span style={{ 
          display: 'inline-block', 
          padding: '0.35rem 0.85rem', 
          borderRadius: 20, 
          marginBottom: '1rem', 
          fontSize: '0.7rem', 
          fontWeight: 700, 
          letterSpacing: '0.15em', 
          textTransform: 'uppercase', 
          background: 'rgba(0, 229, 153, 0.08)', 
          border: '1px solid rgba(0, 229, 153, 0.25)', 
          color: T.accent 
        }}>
          ENGAGEMENT MODELS & SERVICES
        </span>
        
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
          fontWeight: 800, 
          lineHeight: 1.1, 
          letterSpacing: '-0.03em', 
          color: '#fff', 
          margin: 0 
        }}>
          How We Work Together
        </h2>
      </motion.div>

      {/* Grid of Engagement Cards */}
      <div className="services-grid">
        {models.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1 }}
          >
            <div className="service-card">
              <div>
                {/* Top Bar: Badge & Number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    fontSize: '0.65rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.1em', 
                    color: item.color, 
                    textTransform: 'uppercase', 
                    background: `${item.color}12`, 
                    padding: '4px 10px', 
                    borderRadius: 6, 
                    border: `1px solid ${item.color}30` 
                  }}>
                    {item.badge}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.25)' }}>
                    {item.num}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', lineHeight: 1.6, margin: 0, marginBottom: '1.75rem' }}>
                  {item.description}
                </p>

                {/* Deliverables List */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.725rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                    Key Deliverables
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.55rem' }}>
                    {item.deliverables.map((del, di) => (
                      <div key={di} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.825rem', color: 'rgba(255,255,255,0.85)' }}>
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}`, flexShrink: 0 }} />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Outcome */}
              <div style={{ 
                paddingTop: '1rem', 
                borderTop: '1px solid rgba(255,255,255,0.08)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: T.muted, lineHeight: 1.4 }}>
                  Outcome: <span style={{ color: '#fff', fontWeight: 700 }}>{item.impact}</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
