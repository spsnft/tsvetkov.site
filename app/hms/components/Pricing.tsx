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
          /* Верх: 0 (отступ дает предыдущий блок) | Низ: 80px (5rem) */
          padding: 0 0 5rem 0; 
          background: transparent;
        }
        
        .pricing-header {
          text-align: center;
          /* Стандартный воздух от заголовка к карточкам (56px / 3.5rem) */
          margin-bottom: 3.5rem;
        }

        .pricing-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .pricing-subtitle {
          color: ${T.sub};
          font-size: 1.05rem;
          line-height: 1.5;
          margin: 0;
        }
        
        .pricing-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
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
          transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .card:not(.featured):hover {
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          transform: translateY(-2px);
        }
        
        .card.featured {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 229, 153, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .card.featured:hover {
          transform: translateY(-2px);
          box-shadow: 0 25px 60px rgba(0, 229, 153, 0.15);
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
          .pricing-section {
            padding: 0 0 3.5rem 0;
          }
          .pricing-header {
            margin-bottom: 2.5rem;
          }
          .pricing-title {
            font-size: 1.8rem;
          }
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 500px;
            margin: 0 auto;
          }
          .card {
            padding: 2.5rem 2rem;
          }
        }

        @media (max-width: 576px) {
          .card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            {t?.priceTitle || "Transparent Integration. Permanent Independence"}
          </h2>
          {t?.priceSub && (
            <p className="pricing-subtitle">
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
      </div>
    </section>
  );
}
