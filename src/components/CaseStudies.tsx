import React from 'react';
import { T } from '@/src/theme/tokens';

const ACCENT = '#00E599'; // Фирменный мятно-зеленый из скриншота

export const CaseStudies = () => {
  return (
    <section
      id="cases"
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
      <style>{`
        .case-card {
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .case-card:hover {
          border-color: rgba(0, 229, 153, 0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 229, 153, 0.08);
        }
        .hms-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: ${ACCENT};
          color: #000;
          font-weight: 700;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .hms-btn:hover {
          background: #00c785;
          transform: scale(1.02);
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
              background: 'rgba(0, 229, 153, 0.08)',
              border: '1px solid rgba(0, 229, 153, 0.25)',
              color: ACCENT,
            }}
          >
            PROVEN RESULTS
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#fff',
              margin: 0,
            }}
          >
            Built for high-margin growth
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* TOP CARD: HMS HERO OFFER */}
          <div
            className="card-matte case-card"
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Left Info */}
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', color: ACCENT, textTransform: 'uppercase', background: 'rgba(0, 229, 153, 0.1)', padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(0, 229, 153, 0.25)' }}>
                  SPECIALIZED OFFER
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: T.sub, textTransform: 'uppercase', padding: '4px 0' }}>
                  HOSPITALITY / HMS
                </span>
              </div>
              
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
                Direct Booking System for Hotels & Resorts
              </h3>
              
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: T.sub, marginBottom: '2rem', maxWidth: '500px' }}>
                Stop giving 15-20% of your revenue to Booking.com and Airbnb. We build high-converting direct booking funnels so you can <strong style={{ color: '#fff' }}>keep your margins and own your guest data</strong>.
              </p>

              <a href="/hms" className="hms-btn">
                View Hospitality Solution
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

            {/* Right Metrics Box */}
            <div style={{ 
              flex: '1 1 350px', 
              background: 'rgba(0, 0, 0, 0.2)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: 16, 
              padding: '2rem' 
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                HMS Direct Booking Impact
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: ACCENT, lineHeight: 1 }}>+40%</div>
                  <div style={{ fontSize: '0.85rem', color: '#fff', marginTop: '0.5rem' }}>Direct Bookings</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>0%</div>
                  <div style={{ fontSize: '0.85rem', color: T.sub, marginTop: '0.5rem' }}>OTA Commission Leakage</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', fontSize: '0.8rem', color: T.sub, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: ACCENT }}>✓</span> Full Guest Data Ownership & CRM Sync
              </div>
            </div>
          </div>

          {/* BOTTOM CARDS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            
            {/* CARD 1: B2B */}
            <div className="card-matte case-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', color: '#fff', textTransform: 'uppercase', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: 6, display: 'inline-block', marginBottom: '1.25rem' }}>
                  B2B & HIGH-TICKET
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '2rem', lineHeight: 1.3 }}>
                  Scaled pipeline velocity and automated CRM routing.
                </h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT }}>+340%</div>
                  <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.25rem' }}>Qual. Leads</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>-42%</div>
                  <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.25rem' }}>CAC</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>$1.4M</div>
                  <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.25rem' }}>Pipeline ARR</div>
                </div>
              </div>
            </div>

            {/* CARD 2: E-COMMERCE */}
            <div className="card-matte case-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', color: '#fff', textTransform: 'uppercase', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: 6, display: 'inline-block', marginBottom: '1.25rem' }}>
                  E-COMMERCE & REAL ESTATE
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '2rem', lineHeight: 1.3 }}>
                  Achieved 100% P&L clarity across 5 ad channels.
                </h3>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT }}>5.2x</div>
                  <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.25rem' }}>Blended ROAS</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.25rem' }}>Data Clear</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>+$520k</div>
                  <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.25rem' }}>Net Margin</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
