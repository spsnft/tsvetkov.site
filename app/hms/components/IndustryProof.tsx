'use client';

import React from 'react';

// Описываем интерфейс входящих пропсов
interface IndustryProofProps {
  t?: any;
}

export default function IndustryProof({ t }: IndustryProofProps) {
  return (
    <section className="proof-section">
      <style jsx>{`
        .proof-section {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .proof-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0.5rem;
        }

        .proof-number {
          font-size: clamp(2.2rem, 3.8vw, 3.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }

        .proof-item:nth-child(1) .proof-number { color: #00E599; }
        .proof-item:nth-child(2) .proof-number { color: #00A3FF; }
        .proof-item:nth-child(3) .proof-number { color: #ffffff; }
        .proof-item:nth-child(4) .proof-number { color: #00E599; }

        .proof-label {
          color: rgba(255, 255, 255, 0.65);
          font-size: clamp(0.9rem, 1.2vw, 1.05rem);
          line-height: 1.4;
          font-weight: 500;
          max-width: 240px;
          text-wrap: pretty;
        }

        @media (max-width: 968px) {
          .proof-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .proof-section {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>

      <div className="proof-item">
        <div className="proof-number">+40%</div>
        <div className="proof-label">Direct Revenue Growth</div>
      </div>
      
      <div className="proof-item">
        <div className="proof-number">60-70%</div>
        <div className="proof-label">Margin Boost per Every Guest</div>
      </div>
      
      <div className="proof-item">
        <div className="proof-number">3x</div>
        <div className="proof-label">Local Search Visibility Increase</div>
      </div>
      
      <div className="proof-item">
        <div className="proof-number">+35%</div>
        <div className="proof-label">Repeat Guest Bookings Rate</div>
      </div>
    </section>
  );
}
