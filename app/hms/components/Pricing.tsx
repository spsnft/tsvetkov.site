'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface PricingProps {
  t?: any;
}

// Хелпер для очистки текста от случайных символов '✓'
const cleanText = (str?: string) => {
  if (!str) return '';
  return str.replace(/^✓\s*/, '');
};

export default function Pricing({ t }: PricingProps) {
  return (
    <section className="pricing-section">
      <style jsx>{`
        .pricing-section {
          width: 100%;
          padding: 6rem 2rem;
          border-bottom: 1px solid ${T.border};
          background: transparent;
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: stretch;
        }
        
        .card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 3rem 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        
        .card.featured {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 229, 153, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          right: 24px;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #000000;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.9rem;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0, 229, 153, 0.2);
        }
        
        .package-title {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }
        
        .card.featured .package-title {
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .price-block {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          padding-bottom: 1.5rem;
        }
        
        .price {
          font-size: 3.2rem;
          font-weight: 700;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        
        .price-desc {
          font-size: 0.9rem;
          color: ${T.sub};
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.4;
        }
        
        .check-icon {
          color: #00E599;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .card.featured .check-icon {
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tier-badge {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.85rem;
          color: #fff;
        }
        
        @media (max-width: 992px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .card {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>

      <div className="pricing-header">
        <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 0.75rem 0' }}>
          {t?.priceTitle || "Transparent Integration. Permanent Independence"}
        </h2>
        {t?.priceSub && (
          <p style={{ color: T.sub, fontSize: '1.1rem', margin: 0 }}>
            {t.priceSub}
          </p>
        )}
      </div>

      <div className="pricing-grid">
        {/* LITE */}
        <div className="card">
          <p className="package-title">{t?.tier1Title || "LITE (1-10 Rooms)"}</p>
          <div className="price-block">
            <span className="price">{t?.tier1Price || "$500"}</span>
            <span className="price-desc">{t?.tier1Desc || "For small villas & guesthouses"}</span>
          </div>
          <ul className="features-list">
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier1F1)}</li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier1F2)}</li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier1F3)}</li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier1F4)}</li>
          </ul>
        </div>

        {/* STANDARD */}
        <div className="card featured">
          <span className="popular-badge">{t?.pricePopular || "Popular"}</span>
          <p className="package-title">{t?.tier2Title || "STANDARD (10-30 Rooms)"}</p>
          <div className="price-block">
            <span className="price">{t?.tier2Price || "$1,200"}</span>
            <span className="price-desc">{t?.tier2Desc || "For boutique hotels & resorts"}</span>
          </div>
          <ul className="features-list">
            <li className="feature-item">
              <span className="check-icon">✓</span> 
              <span>
                {cleanText(t?.tier2F1)}
                {t?.tier2F1Badge && <span className="tier-badge">{t.tier2F1Badge}</span>}
              </span>
            </li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier2F2)}</li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier2F3)}</li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier2F4)}</li>
          </ul>
        </div>

        {/* ENTERPRISE */}
        <div className="card">
          <p className="package-title">{t?.tier3Title || "ENTERPRISE (30+ Rooms)"}</p>
          <div className="price-block">
            <span className="price">{t?.tier3Price || "Custom"}</span>
            <span className="price-desc">{t?.tier3Desc || "For hotel chains & management firms"}</span>
          </div>
          <ul className="features-list">
            <li className="feature-item">
              <span className="check-icon">✓</span> 
              <span>
                {cleanText(t?.tier3F1)}
                {t?.tier3F1Badge && <span className="tier-badge">{t.tier3F1Badge}</span>}
              </span>
            </li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier3F2)}</li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier3F3)}</li>
            <li className="feature-item"><span className="check-icon">✓</span> {cleanText(t?.tier3F4)}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
