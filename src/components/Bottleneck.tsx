'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const RED_ACCENT = '#FF5555';

const bottlenecks = [
  {
    num: '01',
    tag: 'EMPTY TRAFFIC',
    title: 'Traffic Without Profit',
    description: (
      <>
        Agencies report clicks and leads, but your sales team gets <strong style={{ color: '#fff', fontWeight: 600 }}>poor-quality inquiries</strong>. Ad budgets keep growing, but <strong style={{ color: '#fff', fontWeight: 600 }}>net profit stays flat</strong>
      </>
    ),
    impact: 'Uncontrolled CAC Inflation',
  },
  {
    num: '02',
    tag: 'UNRELIABLE TRACKING',
    title: 'Broken Data & Blind Scaling',
    description: (
      <>
        Ad platforms, CRM, and actual revenue live in separate places. You end up <strong style={{ color: '#fff', fontWeight: 600 }}>guessing what works</strong> instead of seeing real ROI and true net profit
      </>
    ),
    impact: 'Wasted Marketing Capital',
  },
  {
    num: '03',
    tag: 'PROCESS FRICTION',
    title: 'Manual Work & Slow Sales',
    description: (
      <>
        Leads sit untouched for hours due to manual CRM handoffs. Your team wastes time <strong style={{ color: '#fff', fontWeight: 600 }}>managing spreadsheets</strong> instead of closing deals
      </>
    ),
    impact: 'Revenue Leakage & High Overhead',
  },
];

export const Bottleneck = () => (
  <section 
    id="problems" 
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
      .bottleneck-card {
        transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .bottleneck-card:hover {
        border-color: rgba(255, 85, 85, 0.45) !important;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 85, 85, 0.12) !important;
        transform: translateY(-4px);
      }
      .watermark {
        position: absolute;
        top: 12px;
        right: 20px;
        font-size: 5.5rem;
        font-weight: 900;
        line-height: 1;
        color: rgba(255, 85, 85, 0.04);
        pointer-events: none;
        user-select: none;
        z-index: 0;
        transition: color 0.35s ease;
      }
      .bottleneck-card:hover .watermark {
        color: rgba(255, 85, 85, 0.08);
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
          background: 'rgba(255, 85, 85, 0.08)', 
          border: '1px solid rgba(255, 85, 85, 0.25)', 
          color: RED_ACCENT 
        }}>
          SCALING BARRIERS
        </span>
        
        <h2 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.2rem)', 
          fontWeight: 800, 
          lineHeight: 1.1, 
          letterSpacing: '-0.03em', 
          color: '#fff', 
          margin: 0 
        }}>
          Why your business isn't growing
        </h2>
      </motion.div>

      {/* 3-Column Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {bottlenecks.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bottleneck-card"
            style={{
              position: 'relative', 
              overflow: 'hidden',   
              background: 'linear-gradient(135deg, rgba(14, 14, 18, 0.75) 0%, rgba(255, 85, 85, 0.03) 100%)',
              border: '1px solid rgba(255, 85, 85, 0.18)',
              borderRadius: 20,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Background Watermark Number */}
            <div className="watermark">{item.num}</div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              {/* Top Content */}
              <div>
                {/* Tag */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ 
                    fontSize: '0.65rem', 
                    fontWeight: 800, 
                    letterSpacing: '0.1em', 
                    color: RED_ACCENT, 
                    textTransform: 'uppercase', 
                    background: 'rgba(255, 85, 85, 0.1)', 
                    padding: '4px 10px', 
                    borderRadius: 6, 
                    border: '1px solid rgba(255, 85, 85, 0.25)' 
                  }}>
                    {item.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: T.sub, 
                  fontSize: '0.88rem', 
                  lineHeight: 1.55, 
                  margin: 0, 
                  marginBottom: '2rem',
                  textWrap: 'pretty'
                }}>
                  {item.description}
                </p>
              </div>

              {/* Bottom Impact Indicator with Trend Icon */}
              <div style={{ 
                paddingTop: '1rem', 
                borderTop: '1px solid rgba(255,255,255,0.06)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem' 
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={RED_ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                  <polyline points="17 18 23 18 23 12"></polyline>
                </svg>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: T.muted }}>
                  Impact: <span style={{ color: RED_ACCENT }}>{item.impact}</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default Bottleneck;
