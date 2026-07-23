'use client';

import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const bottlenecks = [
  {
    num: '01',
    tag: 'EMPTY TRAFFIC',
    title: 'Traffic Without Profit',
    description: 'Agencies report clicks and leads, but your sales team gets poor-quality inquiries. Ad budgets keep growing, but net profit stays flat',
    impact: 'Uncontrolled CAC Inflation',
    color: '#FF5555',
  },
  {
    num: '02',
    tag: 'UNRELIABLE TRACKING',
    title: 'Broken Data & Unclear Numbers',
    description: 'Ad platforms, CRM, and actual revenue live in separate places. You end up guessing what works instead of seeing real ROI and true net profit',
    impact: 'Wasted Marketing Capital',
    color: '#FFB800',
  },
  {
    num: '03',
    tag: 'MANUAL ROUTINES',
    title: 'Manual Work & Slow Lead Response',
    description: 'Leads sit untouched for hours due to manual handoffs. Your team wastes time copy-pasting data across tables instead of closing deals',
    impact: 'Revenue Leakage & High Overhead',
    color: '#C084FC',
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
      borderTop: `1px solid ${T.border}` 
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
          textTransform: 'uppercase' as const, 
          background: 'rgba(255, 85, 85, 0.08)', 
          border: '1px solid rgba(255, 85, 85, 0.25)', 
          color: '#FF5555' 
        }}>
          GROWTH BARRIERS
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
            style={{
              background: `linear-gradient(135deg, rgba(14, 14, 18, 0.75) 0%, ${item.color}03 100%)`,
              border: `1px solid ${item.color}20`,
              borderRadius: 20,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            }}
          >
            {/* Top Content */}
            <div>
              {/* Tag & Number */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ 
                  fontSize: '0.65rem', 
                  fontWeight: 800, 
                  letterSpacing: '0.1em', 
                  color: item.color, 
                  textTransform: 'uppercase' as const, 
                  background: `${item.color}10`, 
                  padding: '4px 10px', 
                  borderRadius: 6, 
                  border: `1px solid ${item.color}25` 
                }}>
                  {item.tag}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'rgba(255,255,255,0.2)' }}>
                  {item.num}
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                {item.title}
              </h3>
              <p style={{ color: T.sub, fontSize: '0.9rem', lineHeight: 1.6, margin: 0, marginBottom: '2rem' }}>
                {item.description}
              </p>
            </div>

            {/* Bottom Impact Indicator */}
            <div style={{ 
              paddingTop: '1rem', 
              borderTop: '1px solid rgba(255,255,255,0.06)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem' 
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: item.color, display: 'inline-block' }} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: T.muted }}>
                Impact: <span style={{ color: '#fff' }}>{item.impact}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
