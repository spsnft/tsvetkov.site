'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const CYAN_ACCENT = '#00A3FF';

export const Expertise = () => {
  return (
    <section
      id="expertise"
      style={{
        width: '100%',
        position: 'relative',
        paddingTop: 'clamp(2rem, 4vw, 4rem)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
        background: 'transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Header Section */}
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
              background: 'rgba(0, 163, 255, 0.08)',
              border: '1px solid rgba(0, 163, 255, 0.25)',
              color: CYAN_ACCENT,
            }}
          >
            THE SOLUTION
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
            How We Fix Your Growth Engine
          </h2>
        </motion.div>

        {/* Robust Bento Grid Container using Flexbox */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            width: '100%',
          }}
        >
          {/* CARD 1: GTM & Strategy (50% on Desktop / 100% on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, borderColor: 'rgba(0, 163, 255, 0.45)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.25 }}
            style={{
              flex: '1 1 420px',
              minWidth: 0,
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(10, 18, 28, 0.8) 0%, rgba(0, 163, 255, 0.03) 100%)',
              border: '1px solid rgba(0, 163, 255, 0.18)',
              borderRadius: 20,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                Go-To-Market & Growth Strategy
              </h3>
              <p style={{ color: T.sub, fontSize: '0.88rem', lineHeight: 1.55, margin: 0, marginBottom: '1.5rem', textWrap: 'pretty' }}>
                Designing scalable acquisition funnels and positioning that turn market demand into <strong style={{ color: '#fff', fontWeight: 600 }}>predictable, high-margin revenue</strong>
              </p>
            </div>

            {/* Micro UI Widget: Conversion Funnel */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 12,
              padding: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: T.muted, marginBottom: '8px' }}>
                <span>Funnel Conversion Rate</span>
                <span style={{ color: CYAN_ACCENT, fontWeight: 700 }}>+142% vs Benchmark</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', height: '8px', borderRadius: 4, overflow: 'hidden', background: 'rgba(255,255,255,0.05)' }}>
                <div style={{ width: '45%', background: CYAN_ACCENT, borderRadius: 2 }} />
                <div style={{ width: '30%', background: '#38BDF8', borderRadius: 2 }} />
                <div style={{ width: '25%', background: '#818CF8', borderRadius: 2 }} />
              </div>
            </div>

            {/* Skill Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['GTM Strategy', 'Funnel Architecture', 'Omnichannel Scale', 'CAC Optimization'].map((pill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: T.sub,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '4px 10px',
                    borderRadius: 6,
                  }}
                >
                  • {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CARD 2: Data & Revenue Intelligence (50% on Desktop / 100% on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, borderColor: 'rgba(0, 163, 255, 0.45)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.25 }}
            style={{
              flex: '1 1 420px',
              minWidth: 0,
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(10, 18, 28, 0.8) 0%, rgba(0, 163, 255, 0.03) 100%)',
              border: '1px solid rgba(0, 163, 255, 0.18)',
              borderRadius: 20,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                Data & Revenue Intelligence
              </h3>
              <p style={{ color: T.sub, fontSize: '0.88rem', lineHeight: 1.55, margin: 0, marginBottom: '1.5rem', textWrap: 'pretty' }}>
                End-to-end attribution bridging marketing spend directly with <strong style={{ color: '#fff', fontWeight 600 }}>net P&L, cohort retention, and true customer LTV</strong>
              </p>
            </div>

            {/* Micro UI Widget: P&L Chart */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 12,
              padding: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.72rem', color: T.muted }}>Attributed Net P&L</span>
                <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>Real-Time Synced</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '28px', paddingTop: '4px' }}>
                <div style={{ width: '20%', height: '40%', background: 'rgba(0, 163, 255, 0.3)', borderRadius: 3 }} />
                <div style={{ width: '20%', height: '65%', background: 'rgba(0, 163, 255, 0.5)', borderRadius: 3 }} />
                <div style={{ width: '20%', height: '50%', background: 'rgba(0, 163, 255, 0.4)', borderRadius: 3 }} />
                <div style={{ width: '20%', height: '85%', background: 'rgba(0, 163, 255, 0.8)', borderRadius: 3 }} />
                <div style={{ width: '20%', height: '100%', background: CYAN_ACCENT, borderRadius: 3, boxShadow: `0 0 10px ${CYAN_ACCENT}` }} />
              </div>
            </div>

            {/* Skill Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['P&L Attribution', 'Unit Economics', 'BI Dashboards', 'LTV & Cohorts'].map((pill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: T.sub,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '4px 10px',
                    borderRadius: 6,
                  }}
                >
                  • {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CARD 3: CRM & AI Automation (100% Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, borderColor: 'rgba(0, 163, 255, 0.45)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.25 }}
            style={{
              flex: '1 1 100%',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(10, 18, 28, 0.85) 0%, rgba(0, 163, 255, 0.05) 100%)',
              border: '1px solid rgba(0, 163, 255, 0.22)',
              borderRadius: 20,
              padding: '2rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  CRM & AI-Powered Operations
                </h3>
                <p style={{ color: T.sub, fontSize: '0.88rem', lineHeight: 1.55, margin: 0, marginBottom: '1.5rem', textWrap: 'pretty' }}>
                  Building zero-leakage CRM workflows and AI processing to <strong style={{ color: '#fff', fontWeight: 600 }}>eliminate manual routines, slash overhead, and accelerate deal closure</strong>
                </p>

                {/* Skill Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['CRM Architecture', 'AI Lead Scoring', 'Process Automation', 'Retention Loops'].map((pill, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: T.sub,
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '4px 10px',
                        borderRadius: 6,
                      }}
                    >
                      • {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Micro UI Widget: Automation Node Flow */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(0, 163, 255, 0.2)',
                borderRadius: 14,
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                  <span style={{ fontSize: '0.7rem', color: T.muted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Automated Pipeline</span>
                  <span style={{ fontSize: '0.65rem', color: CYAN_ACCENT, background: 'rgba(0,163,255,0.1)', padding: '2px 8px', borderRadius: 10, border: '1px solid rgba(0,163,255,0.2)' }}>Instant Sync</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: '#fff' }}>
                  <span style={{ background: 'rgba(255,255,255,0.08)', padding: '4px 8px', borderRadius: 6, fontSize: '0.7rem', color: T.sub }}>New Lead</span>
                  <span style={{ color: CYAN_ACCENT }}>➔</span>
                  <span style={{ background: 'rgba(0, 163, 255, 0.15)', border: '1px solid rgba(0, 163, 255, 0.3)', padding: '4px 8px', borderRadius: 6, fontSize: '0.7rem', color: CYAN_ACCENT, fontWeight: 600 }}>AI Qualifier</span>
                  <span style={{ color: CYAN_ACCENT }}>➔</span>
                  <span style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '4px 8px', borderRadius: 6, fontSize: '0.7rem', color: '#10B981', fontWeight: 600 }}>Deal Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
