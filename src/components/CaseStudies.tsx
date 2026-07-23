'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const cases = [
  {
    category: 'HIGH-TICKET B2B',
    title: 'Scaling Qualified Lead Velocity & GTM Architecture',
    challenge: 'High cost per lead with low sales conversion due to manual handoffs and poor traffic filtering.',
    solution: 'Rebuilt acquisition funnels, implemented high-intent lead filtering, and integrated automated instant routing into CRM.',
    metrics: [
      { value: '+340%', label: 'Qualified Leads' },
      { value: '-42%', label: 'Customer Acquisition Cost' },
      { value: '$1.4M', label: 'Net New Pipeline ARR' },
    ],
    tags: ['GTM Strategy', 'CRM Routing', 'High-Intent Funnels', 'CAC Optimization'],
  },
  {
    category: 'E-COMMERCE & REAL ESTATE',
    title: 'P&L Attribution & Omnichannel Scale',
    challenge: 'Marketing spend was spread across 5 channels with zero visibility into true net profit or cohort retention.',
    solution: 'Architected end-to-end data pipelines connecting ad platform metrics directly to net P&L and CRM deal stages.',
    metrics: [
      { value: '5.2x', label: 'Average Blended ROAS' },
      { value: '100%', label: 'P&L Data Transparency' },
      { value: '+$520k', label: 'Net Margin Growth' },
    ],
    tags: ['Revenue Attribution', 'Unit Economics', 'BI Dashboards', 'Paid Media'],
  },
  {
    category: 'OPERATIONAL EFFICIENCY',
    title: 'Zero-Leakage AI Sales Automation',
    challenge: 'Leads sat untouched for up to 6 hours. Sales managers spent 40% of their day copy-pasting data across sheets.',
    solution: 'Deployed custom AI parsing for inbound inquiries and auto-assignment protocols within 90 seconds of lead creation.',
    metrics: [
      { value: '< 90s', label: 'Lead Response Time' },
      { value: '80%', label: 'Manual Tasks Automated' },
      { value: '2.3x', label: 'Close Rate Improvement' },
    ],
    tags: ['AI Automation', 'Process Redesign', 'CRM Workflows', 'Retention Loops'],
  },
];

export const CaseStudies = () => (
  <section
    id="cases"
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
      
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <span
          style={{
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
            color: T.accent,
          }}
        >
          PROOF OF EXECUTION
        </span>

        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: 0,
          }}
        >
          Proven Growth Architectures
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              background: 'linear-gradient(135deg, rgba(14, 14, 18, 0.8) 0%, rgba(0, 229, 153, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 20,
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
              position: 'relative',
            }}
          >
            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: T.accent,
                  textTransform: 'uppercase',
                  background: 'rgba(0, 229, 153, 0.08)',
                  padding: '4px 10px',
                  borderRadius: 6,
                  border: '1px solid rgba(0, 229, 153, 0.2)',
                }}
              >
                {item.category}
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'start',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '1rem',
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: T.sub, lineHeight: 1.6 }}>
                    <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Bottleneck:</strong> {item.challenge}
                  </p>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: T.sub, lineHeight: 1.6 }}>
                    <strong style={{ color: T.accent }}>Architected Solution:</strong> {item.solution}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {item.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: '0.725rem',
                        fontWeight: 500,
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: T.sub,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                  gap: '1rem',
                  background: 'rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 16,
                  padding: '1.25rem',
                }}
              >
                {item.metrics.map((m, mi) => (
                  <div key={mi} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                        fontWeight: 800,
                        color: T.accent,
                        lineHeight: 1.1,
                        marginBottom: '0.35rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 500, color: T.muted, lineHeight: 1.3 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default CaseStudies;
