import React from 'react';
import { T } from '@/src/theme/tokens';

const RED_ACCENT = '#FF5555';

const bottlenecks = [
  {
    num: '01',
    tag: 'EMPTY TRAFFIC',
    title: 'Traffic Without Profit',
    description: (
      <>
        Agencies report clicks and leads, but your sales team gets <strong style={{ color: '#fff', fontWeight: 600 }}>poor-quality inquiries</strong>. Ad budgets keep growing, but <strong style={{ color: '#fff', fontWeight: 600 }}>net profit stays flat</strong>.
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
        Ad platforms, CRM, and actual revenue live in separate places. You end up <strong style={{ color: '#fff', fontWeight: 600 }}>guessing what works</strong> instead of seeing real ROI and true net profit.
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
        Leads sit untouched for hours due to manual CRM handoffs. Your team wastes time <strong style={{ color: '#fff', fontWeight: 600 }}>managing spreadsheets</strong> instead of closing deals.
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
    <style>{`
      .bottleneck-card {
        transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
      }
      .bottleneck-card:hover {
        border-color: rgba(255, 85, 85, 0.4) !important;
        transform: translateY(-3px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 85, 85, 0.08);
      }
      .watermark {
        position: absolute;
        top: 10px;
        right: 18px;
        font-family: var(--font-space-grotesk), sans-serif;
        font-size: 5rem;
        font-weight: 900;
        line-height: 1;
        color: rgba(255, 85, 85, 0.04);
        pointer-events: none;
        user-select: none;
        z-index: 0;
        transition: color 0.25s ease;
      }
      .bottleneck-card:hover .watermark {
        color: rgba(255, 85, 85, 0.08);
      }
    `}</style>

    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      
      {/* Centered Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
          lineHeight: 1.15, 
          letterSpacing: '-0.03em', 
          color: '#fff', 
          margin: 0 
        }}>
          Why your business isn't growing
        </h2>
      </div>

      {/* 3-Column Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {bottlenecks.map((item, i) => (
          <div
            key={i}
            className="card-matte bottleneck-card"
            style={{
              position: 'relative', 
              overflow: 'hidden',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
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
                    background: 'rgba(255, 85, 85, 0.08)', 
                    padding: '4px 10px', 
                    borderRadius: 6, 
                    border: '1px solid rgba(255, 85, 85, 0.2)' 
                  }}>
                    {item.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ 
                  fontSize: '0.9rem', 
                  lineHeight: 1.6, 
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
                borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
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
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Bottleneck;
