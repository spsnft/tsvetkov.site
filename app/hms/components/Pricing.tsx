'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface PricingProps {
  t: {
    priceTitle: string;
    priceSub: string;
    tier1Title: string;
    tier1Desc: string;
    tier1F1: string;
    tier1F2: string;
    tier1F3: string;
    tier1F4: string;
    tier2Title: string;
    tier2Desc: string;
    tier2F1: string;
    tier2F1Badge: string;
    tier2F2: string;
    tier2F3: string;
    tier2F4: string;
    tier3Title: string;
    tier3Desc: string;
    tier3F1: string;
    tier3F1Badge: string;
    tier3F2: string;
    tier3F3: string;
    tier3F4: string;
  };
}

export default function Pricing({ t }: PricingProps) {
  return (
    <section style={{ padding: '6rem 0' }}>
      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 992px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>

      {/* ЗАГОЛОВОК СЕКЦИИ */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>{t.priceTitle}</h2>
        <p style={{ color: T.sub }}>{t.priceSub}</p>
      </div>

      {/* ТАРИФНЫЕ ПЛАНЫ */}
      <div className="pricing-grid">
        
        {/* LITE */}
        <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.muted}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: T.muted, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier1Title}</span>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem', color: '#fff' }}>$500</h3>
          <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier1Desc}</p>
          <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
            <li>{t.tier1F1}</li>
            <li>{t.tier1F2}</li>
            <li>{t.tier1F3}</li>
            <li>{t.tier1F4}</li>
          </ul>
        </div>

        {/* STANDARD */}
        <div style={{ backgroundColor: T.bg1, border: `2px solid ${T.accent}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: `0 0 40px ${T.glow}` }}>
          <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: T.accent, color: T.bg0, padding: '2px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800 }}>POPULAR</div>
          <span style={{ color: T.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier2Title}</span>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem', color: '#fff' }}>$1,200</h3>
          <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier2Desc}</p>
          <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
            <li>{t.tier2F1}<span style={{ color: T.muted, fontWeight: 700 }}>{t.tier2F1Badge}</span></li>
            <li>{t.tier2F2}</li>
            <li>{t.tier2F3}</li>
            <li>{t.tier2F4}</li>
          </ul>
        </div>

        {/* ENTERPRISE */}
        <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.acc2}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: T.acc2, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier3Title}</span>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem', color: '#fff' }}>Custom</h3>
          <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier3Desc}</p>
          <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
            <li>{t.tier3F1}<span style={{ color: T.accent, fontWeight: 700 }}>{t.tier3F1Badge}</span></li>
            <li>{t.tier3F2}</li>
            <li>{t.tier3F3}</li>
            <li>{t.tier3F4}</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
