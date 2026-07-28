import React from 'react';
import { T } from '@/src/theme/tokens';

const ENGINE_DATA = [
  {
    id: '01',
    title: 'Scale & Revenue',
    tags: ['Smart Funnels', 'Unit Economics', 'Profit Tracking'],
  },
  {
    id: '02',
    title: 'BI & Attribution',
    tags: ['Live Dashboards', 'Cross-Platform Sync', 'Clean Data'],
  },
  {
    id: '03',
    title: 'AI & Sales Automation',
    tags: ['Auto-Routing', 'AI Workflows', 'Lead Scoring'],
  },
];

export const HeroEngine = () => {
  return (
    <div className="engine-container">
      {ENGINE_DATA.map((card, index) => (
        <div key={card.id} className="engine-card">
          <div className="card-header">
            {/* ПУНКТ 3: Единая градиентная точка вместо "светофора" */}
            <span className="dot-indicator"></span>
            <span className="card-id">{card.id}. {card.title.toUpperCase()}</span>
          </div>
          <h3 className="card-title">{card.title}</h3>
          
          <div className="card-tags">
            {card.tags.map((tag, i) => (
              <span key={i} className="engine-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
      <style jsx>{`
        .engine-container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem; 
        }

        .engine-card {
          background: rgba(10, 10, 12, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 1.75rem;
          backdrop-filter: blur(12px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        /* Градиентная рамка при наведении */
        .engine-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .engine-card:hover {
          transform: translateY(-4px) scale(1.01);
          background: rgba(10, 10, 12, 0.7);
          box-shadow: 0 12px 30px -10px rgba(0, 229, 153, 0.15);
        }

        .engine-card:hover::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.75rem;
        }

        .dot-indicator {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%);
          box-shadow: 0 0 10px rgba(0, 229, 153, 0.5);
        }

        .card-id {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: ${T.accent};
          text-transform: uppercase;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 1.25rem 0;
          letter-spacing: -0.01em;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .engine-tag {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
        }

        /* "Чипсы" окрашиваются в фирменные цвета при наведении на карточку */
        .engine-card:hover .engine-tag {
          border-color: rgba(0, 229, 153, 0.2);
          color: #fff;
          background: rgba(0, 229, 153, 0.05);
        }
      `}</style>
    </div>
  );
};

export default HeroEngine;
