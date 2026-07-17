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
  // Внутренний хелпер для очистки текста от галочек и создания красивого списка с "воздухом"
  const renderLi = (text: string, badge?: React.ReactNode) => {
    if (!text) return null;
    // Удаляем галочку и пробелы после нее из строки перевода, если они там есть
    const cleanText = text.replace(/^✓\s*/, '');
    
    return (
      <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.9rem', lineHeight: 1.5, fontSize: '0.95rem' }}>
        {/* Изолированная кастомная галочка с отступом и приглушенным цветом */}
        <span style={{ color: T.accent, opacity: 0.4, marginRight: '0.8rem', fontSize: '1.05rem', lineHeight: 1, flexShrink: 0, marginTop: '0.15rem', userSelect: 'none' }}>
          ✓
        </span>
        <span style={{ color: T.body }}>
          {cleanText}
          {badge}
        </span>
      </li>
    );
  };

  return (
    <section style={{ padding: '3.5rem 0 6rem 0' }}>
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

      {/* ЗАГОЛОВОК СЕКЦИИ (Сжатые отступы для сращивания блоков) */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '0.75rem', color: '#fff', letterSpacing: '-0.02em' }}>
          {t.priceTitle}
        </h2>
        <p style={{ color: T.sub, fontSize: '1.05rem', margin: 0 }}>
          {t.priceSub}
        </p>
      </div>

      {/* ТАРИФНЫЕ ПЛАНЫ */}
      <div className="pricing-grid">
        
        {/* LITE */}
        <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.muted}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: T.muted, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {t.tier1Title}
          </span>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 700, marginTop: '0.6rem', marginBottom: 0, color: '#fff', letterSpacing: '-0.02em' }}>
            $500
          </h3>
          <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem', lineHeight: 1.4 }}>
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
        <div style={{ 
          backgroundColor: T.bg1, 
          border: `2px solid ${T.accent}`, 
          padding: '3.5rem 2.5rem', 
          borderRadius: '12px', 
          display: 'flex', 
          flexDirection: 'column', 
          position: 'relative', 
          boxShadow: `0 20px 40px -15px rgba(0,0,0,0.7), 0 0 50px 0 rgba(0, 229, 153, 0.06)` 
        }}>
          <div style={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', backgroundColor: T.accent, color: T.bg0, padding: '3px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.05em' }}>
            POPULAR
          </div>
          <span style={{ color: T.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {t.tier2Title}
          </span>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 700, marginTop: '0.6rem', marginBottom: 0, color: '#fff', letterSpacing: '-0.02em' }}>
            $1,200
          </h3>
          <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem', lineHeight: 1.4 }}>
            {t.tier2Desc}
          </p>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {renderLi(t.tier2F1, <span style={{ color: T.muted, fontWeight: 700, marginLeft: '0.3rem' }}>{t.tier2F1Badge}</span>)}
            {renderLi(t.tier2F2)}
            {renderLi(t.tier2F3)}
            {renderLi(t.tier2F4)}
          </ul>
        </div>

        {/* ENTERPRISE (Стиль приведен к нейтральному соответствию с Lite) */}
        <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.muted}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ color: T.muted, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {t.tier3Title}
          </span>
          <h3 style={{ fontSize: '2.2rem', fontWeight: 700, marginTop: '0.6rem', marginBottom: 0, color: '#fff', letterSpacing: '-0.02em' }}>
            Custom
          </h3>
          <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem', lineHeight: 1.4 }}>
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
