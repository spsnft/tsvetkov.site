'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface ScalePracticeProps {
  t?: any;
}

export default function ScalePractice({ t }: ScalePracticeProps) {
  return (
    <section className="scale-section">
      <style jsx>{`
        .scale-section {
          width: 100%;
          padding: 6rem 0;
          border-bottom: 1px solid ${T.border};
          background: transparent;
        }

        .scale-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }

        .scale-title {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }

        .scale-subtitle {
          color: ${T.sub};
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          margin: 0;
        }

        .scale-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: stretch;
        }

        /* 🪄 Единый холст: фон и подсветка заданы прямо на карточке */
        .scale-card {
          background: 
            radial-gradient(
              circle at 50% 120px,
              rgba(0, 229, 153, 0.14) 0%,
              rgba(0, 163, 255, 0.03) 45%,
              rgba(255, 255, 255, 0.01) 75%
            );
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .scale-card:hover {
          border-color: rgba(0, 229, 153, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px -10px rgba(0, 229, 153, 0.12);
          background: 
            radial-gradient(
              circle at 50% 120px,
              rgba(0, 229, 153, 0.18) 0%,
              rgba(0, 163, 255, 0.05) 50%,
              rgba(255, 255, 255, 0.015) 80%
            );
        }

        /* Прозрачный оберточный блок без собственных фонов и рамок */
        .image-wrapper {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          margin-bottom: 1rem;
        }

        .visual-asset {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          mix-blend-mode: screen; 

          /* Контраст и свечение иконки */
          filter: contrast(1.18) brightness(1.08) drop-shadow(0 0 20px rgba(0, 229, 153, 0.22));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .scale-card:hover .visual-asset {
          transform: scale(1.06);
          filter: contrast(1.2) brightness(1.12) drop-shadow(0 0 30px rgba(0, 229, 153, 0.4));
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .context-label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.35);
          margin: 0;
        }

        .focus-metric {
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
          display: inline-block;
        }

        .card-description {
          color: ${T.sub};
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          text-wrap: pretty;
        }

        @media (max-width: 992px) {
          .scale-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            max-width: 500px;
            margin: 0 auto;
          }
          .scale-card {
            padding: 1.75rem;
          }
        }
      `}</style>

      <div className="scale-header">
        <h2 className="scale-title">{t?.scaleTitle || "Scale your property bookings"}</h2>
        <p className="scale-subtitle">{t?.scaleSub || "Automate workflows so your team can focus on guest experience"}</p>
      </div>

      <div className="scale-grid">
        {/* КАРТОЧКА 1: SYNC */}
        <div className="scale-card">
          <div className="image-wrapper">
            <img src="/assets/sync.webp" alt="1 second sync visual" className="visual-asset" />
          </div>
          <div className="card-content">
            <p className="context-label">24/7 manual updates</p>
            <h3 className="focus-metric">1 second sync</h3>
            <p className="card-description">
              Cloud PMS & Channel Manager integration. Every reservation locks your entire grid automatically across Booking.com, Agoda & 300+ OTAs.
            </p>
          </div>
        </div>

        {/* КАРТОЧКА 2: REVENUE */}
        <div className="scale-card">
          <div className="image-wrapper">
            <img src="/assets/revenue.webp" alt="100% direct revenue visual" className="visual-asset" />
          </div>
          <div className="card-content">
            <p className="context-label">20% OTA commission</p>
            <h3 className="focus-metric">100% direct revenue</h3>
            <p className="card-description">
              Zero-commission booking engine with a secure payment gateway. Process bookings on your own terms and keep all revenue in-house.
            </p>
          </div>
        </div>

        {/* КАРТОЧКА 3: GROWTH */}
        <div className="scale-card">
          <div className="image-wrapper">
            <img src="/assets/growth.webp" alt="10x booking growth visual" className="visual-asset" />
          </div>
          <div className="card-content">
            <p className="context-label">0 leads from direct traffic</p>
            <h3 className="focus-metric">10x booking growth</h3>
            <p className="card-description">
              Local SEO optimization to capture high-intent direct search traffic, paired with automated messenger retention loops for returning guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
