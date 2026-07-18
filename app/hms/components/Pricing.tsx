'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface PricingProps {
  t: {
    pricingTitle?: string;
    pricingSub?: string;
    [key: string]: any;
  };
}

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
        }
        
        .card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 3rem 2.5rem;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        /* Выделение центральной рекомендуемой карточки тонким неоновым контуром */
        .card.featured {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 229, 153, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }
        
        /* Фирменный градиентный бейдж POPULAR с черным текстом по твоему стандарту */
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
        
        /* Применение градиента к названию премиального тарифа */
        .card.featured .package-title {
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .price-block {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
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
          gap: 1rem;
        }
        
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.4;
        }
        
        /* Градиентные маркеры-галочки для премиального стиля */
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
        
        /* Сквозная интеграция нашей главной градиентной кнопки */
        .pricing-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #000000 !important;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          padding: 1rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          text-align: center;
          margin-top: auto;
          transition: all 0.25s ease;
          box-shadow: 0 10px 25px rgba(0, 229, 153, 0.15);
        }
        
        .pricing-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(0, 229, 153, 0.3);
          filter: brightness(1.08);
        }
        
        .card:not(.featured) .pricing-btn {
          color: rgba(255, 255, 255, 0.85) !important;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: none;
        }
        
        .card:not(.featured) .pricing-btn:hover {
          color: #fff !important;
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.3);
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
        <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 1rem 0' }}>
          {t?.pricingTitle || "Scale Your Practice"}
        </h2>
      </div>

      <div className="pricing-grid">
        {/* LITE */}
        <div className="card">
          <p className="package-title">Lite (1-10 Rooms)</p>
          <div className="price-block">
            <span className="price">$500</span>
            <span className="price-desc">For small villas & guesthouses</span>
          </div>
          <ul className="features-list">
            <li className="feature-item"><span className="check-icon">✓</span> Cloud PMS & Dashboard</li>
            <li className="feature-item"><span className="check-icon">✓</span> Direct Website Booking button</li>
            <li className="feature-item"><span className="check-icon">✓</span> Booking & Agoda Synchronization</li>
            <li className="feature-item"><span className="check-icon">✓</span> Google Maps Setup</li>
          </ul>
          <a href="https://calendly.com/fediatsvetkov/15min" target="_blank" rel="noopener noreferrer" className="pricing-btn">
            Get Started
          </a>
        </div>

        {/* STANDARD */}
        <div className="card featured">
          <span className="popular-badge">Popular</span>
          <p className="package-title">Standard (10-30 Rooms)</p>
          <div className="price-block">
            <span className="price">$1,200</span>
            <span className="price-desc">For boutique hotels & resorts</span>
          </div>
          <ul className="features-list">
            <li className="feature-item"><span className="check-icon">✓</span> Everything in LITE</li>
            <li className="feature-item"><span className="check-icon">✓</span> Connect 300+ OTA Channels</li>
            <li className="feature-item"><span className="check-icon">✓</span> Guest Return System</li>
            <li className="feature-item"><span className="check-icon">✓</span> Guides for your Staff</li>
          </ul>
          <a href="https://calendly.com/fediatsvetkov/15min" target="_blank" rel="noopener noreferrer" className="pricing-btn">
            Get Started
          </a>
        </div>

        {/* ENTERPRISE */}
        <div className="card">
          <p className="package-title">Enterprise (30+ Rooms)</p>
          <div className="price-block">
            <span className="price">Custom</span>
            <span className="price-desc">For hotel chains & management firms</span>
          </div>
          <ul className="features-list">
            <li className="feature-item"><span className="check-icon">✓</span> Everything in STANDARD</li>
            <li className="feature-item"><span className="check-icon">✓</span> Anti-Theft Logs</li>
            <li className="feature-item"><span className="check-icon">✓</span> Multichannel Ads Setup</li>
            <li className="feature-item"><span className="check-icon">✓</span> Analytics Dashboard</li>
          </ul>
          <a href="https://calendly.com/fediatsvetkov/15min" target="_blank" rel="noopener noreferrer" className="pricing-btn">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}
