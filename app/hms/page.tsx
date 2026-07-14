import React from 'react';
import { T } from '../../src/theme/tokens'; // Корректируй путь в зависимости от вложенности папки

export const metadata = {
  title: 'Phuket Hospitality Automation — Fedor Tsvetkov',
  description: 'Professional PMS & Channel Manager integration for boutique hotels and villa portfolios in Phuket. Stop losing 15–18% to OTA commissions.',
};

export default function HospitalityB2B() {
  return (
    <div style={{ backgroundColor: T.bg0, color: '#fff', minHeight: '100vh', paddingBottom: '6rem' }}>
      
      {/* HEADER / NAVIGATION */}
      <header style={{ 
        borderBottom: `1px solid ${T.border}`, 
        backdropFilter: 'blur(12px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        backgroundColor: 'rgba(10, 10, 12, 0.8)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.03em' }}>
            TSVETKOV<span style={{ color: T.accent }}>.B2B</span>
          </a>
          <a 
            href="https://wa.me/66955183783" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: 'transparent', 
              color: T.accent, 
              border: `1px solid ${T.accent}`, 
              padding: '0.6rem 1.2rem', 
              borderRadius: '4px', 
              fontSize: '0.875rem', 
              fontWeight: 600, 
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: `0 0 15px ${T.glow}`
            }}
          >
            Free Infrastructure Audit
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <section style={{ padding: '6rem 0 4rem 0', textAlign: 'center', position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            top: '10%', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '300px', 
            height: '300px', 
            background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`, 
            zIndex: 0,
            pointerEvents: 'none'
          }} />
          
          <span style={{ color: T.acc2, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
            PHUKET HOSPITALITY AUTOMATION
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 700, 
            lineHeight: 1.05, 
            letterSpacing: '-0.04em', 
            marginTop: '1rem',
            marginBottom: '1.5rem'
          }}>
            Stop Losing 15–18% of Your <br />
            Revenue to OTA Commissions.
          </h1>
          <p style={{ color: T.body, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', maxWidth: '760px', margin: '0 auto 2.5rem auto', lineHeight: 1.4 }}>
            Take complete control of your direct sales infrastructure. I integrate enterprise-grade PMS and Channel Managers to eliminate overbookings and maximize commission-free profits.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/66955183783" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: T.accent, color: T.bg0, padding: '1rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}
            >
              Discuss via WhatsApp
            </a>
            <a 
              href="https://line.me/ti/p/~fedor_tsvetkov" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ backgroundColor: T.bg1, color: '#fff', border: `1px solid ${T.border}`, padding: '1rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}
            >
              Contact via Line
            </a>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* PROBLEM VS SOLUTION (BENTO-STYLE ARRANGEMENT) */}
        <section style={{ padding: '2rem 0' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '3rem' }}>
            Why Your Current Setup is Costing You Money
          </h2>
          
          <div className="bento">
            <div className="bento-g1" style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#FF4D4D', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>The Leakage</h3>
              <p style={{ color: T.body, lineHeight: 1.5 }}>
                Every booking through Agoda or Booking.com shaves off up to 18% of your margin. You are actively paying platforms for guests who would have booked directly if your infrastructure allowed it.
              </p>
            </div>
            
            <div className="bento-g2" style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px', boxShadow: `inset 0 0 20px ${T.glow2}` }}>
              <h3 style={{ color: T.acc2, fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>The Solution</h3>
              <p style={{ color: T.body, lineHeight: 1.5 }}>
                Real-time, two-way synchronization across all global OTAs mapped into a robust commission-free booking engine built directly into your digital domain.
              </p>
            </div>

            <div className="bento-g3" style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>Zero Overbookings</h4>
                <p style={{ color: T.muted, fontSize: '0.95rem', lineHeight: 1.4 }}>Instant pool availability updates prevent double-bookings and costly platform penalties.</p>
              </div>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>Automated Workflows</h4>
                <p style={{ color: T.muted, fontSize: '0.95rem', lineHeight: 1.4 }}>Digitized front-desk processing, automated check-ins, and trigger-based communications.</p>
              </div>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>Data Sovereignty</h4>
                <p style={{ color: T.muted, fontSize: '0.95rem', lineHeight: 1.4 }}>Own your customer data, layer GA4 analytics, and build long-term guest retention models.</p>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* PRICING TIERS */}
        <section style={{ padding: '2rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Transparent Pricing Tiers</h2>
            <p style={{ color: T.sub, maxWidth: '600px', margin: '0 auto' }}>No hidden percentages, no monthly cuts from your direct sales. Fixed implementation fees tailored to your scale.</p>
          </div>

          <div className="cases-grid">
            {/* LITE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: T.muted, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>LITE ARCHITECTURE</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>$500</h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '2rem' }}>Best for independent villas & small guesthouses (Up to 10 units)</p>
                <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  <li>✓ Core PMS Setup & Configuration</li>
                  <li>✓ Direct Booking Engine integration</li>
                  <li>✓ 2-Channel Sync (Booking.com + Agoda)</li>
                  <li>✓ Secure payment gateway linkage</li>
                </ul>
              </div>
              <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', border: `1px solid ${T.border}`, color: '#fff', padding: '0.75rem', borderRadius: '4px', marginTop: '2.5rem', textDecoration: 'none', fontWeight: 600 }}>Deploy Lite</a>
            </div>

            {/* STANDARD */}
            <div style={{ backgroundColor: T.bg1, border: `2px solid ${T.accent}`, padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', boxShadow: `0 0 30px ${T.glow}` }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: T.accent, color: T.bg0, padding: '2px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>MOST POPULAR</div>
              <div>
                <span style={{ color: T.accent, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>STANDARD SCALE</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>$1,200</h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '2rem' }}>Best for boutique hotels & resorts (10–30 units)</p>
                <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  <li>✓ Full PMS & Multi-Channel Architecture</li>
                  <li>✓ Complete Sync (Booking, Agoda, Expedia, Airbnb)</li>
                  <li>✓ Google Analytics 4 tracking framework</li>
                  <li>✓ 2 On-site staff training sessions + docs</li>
                </ul>
              </div>
              <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: T.accent, color: T.bg0, padding: '0.75rem', borderRadius: '4px', marginTop: '2.5rem', textDecoration: 'none', fontWeight: 600 }}>Deploy Standard</a>
            </div>

            {/* ENTERPRISE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: T.muted, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>CUSTOM ENTERPRISE</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>Custom</h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '2rem' }}>Best for hotel chains & large villa management firms (30+ units)</p>
                <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  <li>✓ Custom MarTech integration</li>
                  <li>✓ CRM linking for automated guest retention</li>
                  <li>✓ Custom BI analytics dashboards</li>
                  <li>✓ Dedicated SLA support infrastructure</li>
                </ul>
              </div>
              <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', border: `1px solid ${T.border}`, color: '#fff', padding: '0.75rem', borderRadius: '4px', marginTop: '2.5rem', textDecoration: 'none', fontWeight: 600 }}>Contact For Quote</a>
            </div>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* THE INTEGRATOR */}
        <section style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '3rem', borderRadius: '8px', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <span style={{ color: T.muted, fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em' }}>THE INTEGRATOR</span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Built by an Executive.</h2>
            <p style={{ color: T.body, lineHeight: 1.6, marginBottom: '1rem' }}>
              I am Fedor Tsvetkov, a digital transformation and growth executive based locally in Phuket. I don't just "set up software"—I design robust MarTech architectures that protect operational margins.
            </p>
            <p style={{ color: T.muted, lineHeight: 1.6 }}>
              With over 10 years of experience managing $500K+ budgets and scaling platforms globally, I ensure your tracking, staff workflows, and channel management run flawlessly.
            </p>
          </div>
          <div style={{ flex: '1 1 250px', borderLeft: `2px solid ${T.border}`, paddingLeft: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: T.accent, lineHeight: 1 }}>10+</div>
              <div style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.25rem' }}>Years of MarTech Strategy</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: 700, color: T.acc2, lineHeight: 1 }}>7x</div>
              <div style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.25rem' }}>Proven Monthly Revenue Scale</div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ textAlign: 'center', padding: '6rem 0 2rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Let’s Digitize Your Revenue.</h2>
          <p style={{ color: T.sub, marginBottom: '2.5rem' }}>Stop overpaying aggregators. Claim your independent sales channel today.</p>
          <a 
            href="https://wa.me/66955183783" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ backgroundColor: T.accent, color: T.bg0, padding: '1.2rem 3rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', boxShadow: `0 0 30px ${T.glow}` }}
          >
            Schedule On-Site Meeting
          </a>
        </section>
      </main>
    </div>
  );
}
