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
    color: '#00A3FF',
  },
  {
    num: '02',
    badge: 'SYSTEM BUILD / TURNKEY',
    title: 'Growth Infrastructure Build',
    description: 'End-to-end architecture deployment: high-intent funnels, automated lead routing, zero-leakage CRM configuration, and custom P&L attribution dashboards.',
    deliverables: ['Custom Funnel Architecture', 'Instant CRM Lead Routing', 'End-to-End P&L Tracking', 'AI Workflow Automation'],
    impact: 'Scalable system ready for high-budget traffic expansion',
    color: T.accent,
  },
  {
    num: '03',
    badge: 'ONGOING / FRACTIONAL CMO',
    title: 'Growth Partner & Performance Scaling',
    description: 'Continuous strategic direction and hands-on execution. We optimize CAC, manage ad spend, accelerate sales speed, and scale net margin month-over-month.',
    deliverables: ['Omnichannel Traffic Mgmt', 'Weekly P&L Optimization', 'Funnel Conversion Tuning', 'Executive Reporting'],
    impact: 'Predictable revenue growth and guaranteed system reliability',
    color: '#C084FC',
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
          background: 'rgba(0, 229, 153, 0.05)', 
          border: '1px solid rgba(0, 229, 153, 0.2)', 
          color: T.accent 
        }}>
          ENGAGEMENT MODELS
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {models.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1 }}
            style={{
              background: `linear-gradient(135deg, rgba(14, 14, 18, 0.8) 0%, ${item.color}04 100%)`,
              border: `1px solid ${item.color}20`,
              borderRadius: 20,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              position: 'relative',
            }}
          >
            <div>
              {/* Top Bar: Badge & Number */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '0.65rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.1em', 
                  color: item.color, 
                  textTransform: 'uppercase', 
                  background: `${item.color}10`, 
                  padding: '4px 10px', 
                  borderRadius: 6, 
                  border: `1px solid ${item.color}25` 
                }}>
                  {item.badge}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.2)' }}>
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
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                  Key Deliverables
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
                  {item.deliverables.map((del, di) => (
                    <div key={di} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.825rem', color: 'rgba(255,255,255,0.85)' }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Outcome */}
            <div style={{ 
              paddingTop: '1rem', 
              borderTop: '1px solid rgba(255,255,255,0.06)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem' 
            }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: T.muted, lineHeight: 1.4 }}>
                Outcome: <span style={{ color: '#fff' }}>{item.impact}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
