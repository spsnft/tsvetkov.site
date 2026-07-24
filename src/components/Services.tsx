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
    <div style={{ maxWidth: 1000, margin: '0 auto' }}>

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

      {/* Vertical Timeline Container */}
      <div style={{ position: 'relative', paddingLeft: 'clamp(1rem, 5vw, 3.5rem)' }}>
        
        {/* Vertical Track Line */}
        <div
          style={{
            position: 'absolute',
            left: 'clamp(0.4rem, 2.2vw, 1.25rem)',
            top: '1.5rem',
            bottom: '3rem',
            width: 2,
            background: `linear-gradient(180deg, ${T.accent} 0%, rgba(0, 229, 153, 0.15) 90%, transparent 100%)`,
            zIndex: 1,
          }}
        />

        {/* Steps List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {models.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.15, duration: 0.4 }}
              style={{ position: 'relative' }}
            >
              {/* Node Point on the Vertical Line */}
              <div
                style={{
                  position: 'absolute',
                  left: 'calc(-1 * clamp(1rem, 5vw, 3.5rem) + clamp(0.4rem, 2.2vw, 1.25rem) - 13px)',
                  top: '1.75rem',
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: '#0c1614',
                  border: `2px solid ${item.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: item.color,
                  zIndex: 2,
                  boxShadow: `0 0 15px ${item.color}40`,
                }}
              >
                {item.num}
              </div>

              {/* Service Card */}
              <div
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(0, 229, 153, 0.05) 0%, rgba(12, 22, 20, 0.88) 75%)',
                  border: `1px solid ${item.color}35`,
                  borderRadius: 20,
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Top Badge */}
                <div style={{ marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: item.color,
                      textTransform: 'uppercase',
                      background: `${item.color}12`,
                      padding: '4px 10px',
                      borderRadius: 6,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.6rem)',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: T.sub,
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    margin: 0,
                    marginBottom: '1.5rem',
                    maxWidth: '850px',
                  }}
                >
                  {item.description}
                </p>

                {/* Key Deliverables Grid */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'rgba(255, 255, 255, 0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Key Deliverables
                  </div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '0.6rem',
                    }}
                  >
                    {item.deliverables.map((del, di) => (
                      <div
                        key={di}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontSize: '0.825rem',
                          color: 'rgba(255, 255, 255, 0.85)',
                        }}
                      >
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            background: item.color,
                            boxShadow: `0 0 8px ${item.color}`,
                            flexShrink: 0,
                          }}
                        />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome Highlight Box (Micro-UI) */}
                <div
                  style={{
                    background: 'rgba(0, 229, 153, 0.06)',
                    border: '1px solid rgba(0, 229, 153, 0.22)',
                    borderRadius: 12,
                    padding: '0.85rem 1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>🎯</span>
                  <div style={{ fontSize: '0.825rem', lineHeight: 1.4, color: T.sub }}>
                    <strong style={{ color: T.accent, fontWeight: 700 }}>
                      Outcome:&nbsp;
                    </strong>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{item.impact}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Services;
