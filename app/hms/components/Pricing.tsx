'use client';

import React from 'react';

export default function Pricing() {
  return (
    <section className="pricing-section">
      <style jsx>{`
        .pricing-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 1.5rem;
          text-align: center;
        }

        .section-title {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4rem;
          letter-spacing: -0.02em;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch; /* Заставляет гриды тянуть карточки на одну высоту */
        }

        .pricing-card {
          background: #0d0d11;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 3rem 2rem 2.5rem 2rem;
          text-align: left;
          display: flex;
          flex-direction: column; /* Включаем флекс-контейнер для внутренних элементов */
          position: relative;
        }

        .pricing-card.popular {
          border-color: rgba(0, 229, 153, 0.3);
          box-shadow: 0 20px 40px rgba(0, 229, 153, 0.02);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #00e599;
          color: #000000;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.35rem 1rem;
          border-radius: 20px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-tier {
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }
        
        .pricing-card.popular .card-tier {
          color: #00A3FF;
        }

        .card-price {
          font-size: clamp(2.6rem, 4vw, 3.5rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .card-desc {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.95rem;
          margin-bottom: 2.5rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 3rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .feature-icon {
          color: #00E599;
          flex-shrink: 0;
        }

        .btn-pricing {
          margin-top: auto; /* Главный трюк: выталкивает кнопку к самому низу карточки */
          width: 100%;
          padding: 1.1rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          color: #ffffff;
          transition: all 0.2s ease;
        }

        .pricing-card.popular .btn-pricing {
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #000000;
          border: none;
        }

        .btn-pricing:hover {
          background: rgba(255, 255, 255, 0.05);
        }

        .pricing-card.popular .btn-pricing:hover {
          filter: brightness(1.08);
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
        }

        @media (max-width: 968px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            max-width: 450px;
            margin: 0 auto;
          }
        }
      `}</style>

      <h2 className="section-title">Scale Your Practice</h2>

      <div className="pricing-grid">
        {/* LITE */}
        <div className="pricing-card">
          <div className="card-tier">LITE (1-10 ROOMS)</div>
          <div className="card-price">$500</div>
          <div className="card-desc">For small villas & guesthouses</div>
          
          <ul className="features-list">
            <li className="feature-item"><span className="feature-icon">✓</span> Cloud PMS & Dashboard</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Direct Website Booking button</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Booking & Agoda Sync</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Google Maps Setup</li>
          </ul>
          
          <button className="btn-pricing">Get Started</button>
        </div>

        {/* STANDARD */}
        <div className="pricing-card popular">
          <div className="popular-badge">Popular</div>
          <div className="card-tier">STANDARD (10-30 ROOMS)</div>
          <div className="card-price">$1,200</div>
          <div className="card-desc">For boutique hotels & resorts</div>
          
          <ul className="features-list">
            <li className="feature-item"><span className="feature-icon">✓</span> Everything in LITE</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Connect 300+ OTA Channels</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Guest Return System</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Guides for your Staff</li>
          </ul>
          
          <button className="btn-pricing">Get Started</button>
        </div>

        {/* ENTERPRISE */}
        <div className="pricing-card">
          <div className="card-tier">ENTERPRISE (30+ ROOMS)</div>
          <div className="card-price">Custom</div>
          <div className="card-desc">For hotel chains & management firms</div>
          
          <ul className="features-list">
            <li className="feature-item"><span className="feature-icon">✓</span> Everything in STANDARD</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Anti-Thief Logs</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Multichannel Ads Setup</li>
            <li className="feature-item"><span className="feature-icon">✓</span> Analytics Dashboard</li>
          </ul>
          
          <button className="btn-pricing">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
