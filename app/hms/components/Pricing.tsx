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
  const renderLi = (text: string, badge?: React.ReactNode) => {
    if (!text) return null;
    const cleanText = text.replace(/^✓\s*/, '');
    
    return (
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem', lineHeight: 1.5, fontSize: '0.95rem' }}>
        <span style={{ color: T.accent, opacity: 0.4, marginRight: '0.8rem', fontSize: '1.05rem', lineHeight: 1, flexShrink: 0, marginTop: '0.15rem', userSelect: 'none' }}>
          ✓
        </span>
        <span style={{ color: T.body, fontWeight: 500, textWrap: 'pretty' }}>
          {cleanText}
          {badge}
        </span>
      </li>
    );
  };

  return (
    <section style={{ width: '100%', borderBottom: `1px solid ${T.border}`, backgroundColor: 'transparent', margin: '0' }}>
      <style jsx>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .pricing-col {
          padding: 4.5rem 3rem;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .pricing-col:not(:last-child) {
          border-right: 1px solid ${T.border};
        }
        .pricing-col.popular {
          background-color: rgba(255, 255, 255, 0.012);
        }
        @media (max-width: 992px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .pricing-col {
            padding: 3rem 1.5rem !important;
          }
          .pricing-col:not(:last-child) {
            border-right: none !important;
            border-bottom: 1px solid ${T.border};
          }
          .pricing-col.popular {
            background-color: rgba(0, 255, 179, 0.01) !important;
          }
        }
      `}</style>

      {/* ШАПКА БЛОКА — Выровнена по Книге Шрифтов */}
      <div style={{ padding: '5rem 1.5rem 4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
          {t.priceTitle}
        </h2>
        <p style={{ color: T.sub, fontSize: '1.05rem', margin: 0, lineHeight: 1.5 }}>
          {t.priceSub}
        </p>
      </div>

      {/* МОНОЛИТНАЯ СЕТКА ТАРИФОВ */}
      <div className="pricing-grid" style={{ borderTop: `1px solid ${T.border}` }}>
        
        {/* LITE */}
        <div className="pricing-col">
          <span style={{ color: T.muted, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            {t.tier1Title}
          </span>
          <h3 style={{ fontSize: '2.6rem', fontWeight: 700, marginTop: '0.75rem', marginBottom: 0, color: '#fff', letterSpacing: '-0.02em' }}>
            $500
          </h3>
          <p style={{ color: T.sub, fontSize: '0.95rem', margin: '1rem 0 3rem 0', lineHeight: 1.4, minHeight: '40px', textWrap: 'pretty' }}>
            {t.tier1Desc}
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {renderLi(t.tier1F1)}
            {renderLi(t.tier1F2)}
            {renderLi(t.tier1F3)}
            {renderLi(t.tier1F4)}
          </ul>
        </div>

        {/* STANDARD (POPULAR) */}
        <div className="pricing-col popular">
          {/* Премиальный кибер-минималистичный бейдж */}
          <div style={{ 
            position: 'absolute', 
            top: '1.5rem', 
            right: '3rem', 
            backgroundColor: 'rgba(0, 255, 179, 0.05)', 
            border: `1px solid ${T.accent}30`, 
            color: T.accent, 
            padding: '4px 14px', 
            borderRadius: '999px', 
            fontSize: '0.65rem', 
            fontWeight: 800, 
            letterSpacing: '0.15em' 
          }}>
            POPULAR
          </div>

          <span style={{ color: T.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            {t.tier2Title}
          </span>
          <h3 style={{ fontSize: '2.6rem', fontWeight: 700, marginTop: '0.75rem', marginBottom: 0, color: '#fff', letterSpacing: '-0.02em' }}>
            $1,200
          </h3>
          <p style={{ color: T.sub, fontSize: '0.95rem', margin: '1rem 0 3rem 0', lineHeight: 1.4, minHeight: '40px', textWrap: 'pretty' }}>
            {t.tier2Desc}
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {renderLi(t.tier2F1, <span style={{ color: T.muted, fontWeight: 700, marginLeft: '0.3rem' }}>{t.tier2F1Badge}</span>)}
            {renderLi(t.tier2F2)}
            {renderLi(t.tier2F3)}
            {renderLi(t.tier2F4)}
          </ul>
        </div>

        {/* ENTERPRISE */}
        <div className="pricing-col">
          <span style={{ color: T.muted, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            {t.tier3Title}
          </span>
          <h3 style={{ fontSize: '2.6rem', fontWeight: 700, marginTop: '0.75rem', marginBottom: 0, color: '#fff', letterSpacing: '-0.02em' }}>
            Custom
          </h3>
          <p style={{ color: T.sub, fontSize: '0.95rem', margin: '1rem 0 3rem 0', lineHeight: 1.4, minHeight: '40px', textWrap: 'pretty' }}>
            {t.tier3Desc}
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {renderLi(t.tier3F1, <span style={{ color: T.accent, fontWeight: 700, marginLeft: '0.3rem' }}>{t.tier3F1Badge}</span>)}
            {renderLi(t.tier3F2)}
            {renderLi(t.tier3F3)}
            {renderLi(t.tier3F4)}
          </ul>
        </div>

      </div>
    </section>
  );
}
