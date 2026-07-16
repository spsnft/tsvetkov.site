'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface HeroProps {
  t: {
    badge: string;
    heroTitle: string;
    heroSub1: string;
    heroSub2: string;
    btnChat: string;
    btnLine: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section style={{ padding: '8rem 0 3rem 0', textAlign: 'center', position: 'relative', zIndex: 10 }}>
      <style jsx>{`
        .perspective-container {
          perspective: 1200px;
          margin-top: 5rem;
          display: flex;
          justify-content: center;
          padding: 0 1rem;
        }
        .dashboard-mockup {
          width: 100%;
          max-width: 950px;
          height: auto;
          aspect-ratio: 16 / 10;
          background-color: rgba(20, 20, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transform: rotateX(16deg) rotateY(-6deg) rotateZ(4deg);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.6), 
            0 0 40px rgba(0, 229, 153, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
          overflow: hidden;
          position: relative;
        }
        .dashboard-mockup:hover {
          transform: rotateX(10deg) rotateY(-3deg) rotateZ(2deg) translateY(-8px);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.8), 
            0 0 60px rgba(0, 229, 153, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }
        /* Внутренний блик на стекле */
        .dashboard-mockup::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%);
          pointer-events: none;
        }
        /* Текстовая заглушка внутри мокапа, пока нет картинки */
        .mockup-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: rgba(255, 255, 255, 0.15);
          font-weight: 600;
          font-size: 1.1rem;
          letter-spacing: 0.05em;
        }
        /* На мобильных устройствах отключаем 3D-эффект, чтобы не ломать читаемость */
        @media (max-width: 768px) {
          .perspective-container {
            margin-top: 3.5rem;
          }
          .dashboard-mockup {
            transform: none !important;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>

      {/* BADGE */}
      <span style={{ 
        color: T.acc2, 
        textTransform: 'uppercase', 
        letterSpacing: '0.2em', 
        fontSize: '0.75rem', 
        fontWeight: 700 
      }}>
        {t.badge}
      </span>

      {/* MAIN TITLE */}
      <h1 style={{ 
        fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', 
        fontWeight: 700, 
        lineHeight: 1.05, 
        letterSpacing: '-0.03em', 
        marginTop: '1.5rem', 
        marginBottom: '2rem',
        color: '#fff'
      }}>
        {t.heroTitle}
      </h1>

      {/* SUBTITLES */}
      <div style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', maxWidth: '850px', margin: '0 auto 3.5rem auto', lineHeight: 1.4 }}>
        <p style={{ color: T.body, margin: 0 }}>{t.heroSub1}</p>
        <p style={{ color: T.accent, margin: '0.5rem 0 0 0', fontWeight: 700 }}>{t.heroSub2}</p>
      </div>

      {/* CTA BUTTONS */}
      <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a 
          href="https://wa.me/66955183783" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: '#2cb742', 
            color: '#fff', 
            padding: '1.1rem 2.2rem', 
            borderRadius: '6px', 
            fontWeight: 700, 
            textDecoration: 'none', 
            fontSize: '1rem' 
          }}
        >
          <img src="/logos/whatsapp.svg" alt="WA" style={{ height: '1.4rem', width: 'auto', filter: 'brightness(0) invert(1)' }} /> {t.btnChat}
        </a>
        <a 
          href="https://line.me/ti/p/~fedor_tsvetkov" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: '#06C755', 
            color: '#fff', 
            padding: '1.1rem 2.2rem', 
            borderRadius: '6px', 
            fontWeight: 700, 
            textDecoration: 'none', 
            fontSize: '1rem' 
          }}
        >
          <img src="/logos/line.svg" alt="Line" style={{ height: '1.4rem', width: 'auto', filter: 'brightness(0) invert(1)' }} /> {t.btnLine}
        </a>
      </div>

      {/* 3D DASHBOARD MOCKUP CONTAINER */}
      <div className="perspective-container">
        <div className="dashboard-mockup">
          {/* Когда сделаешь ассет, просто замени этот div на тег <img> */}
          {/* <img src="/logos/dashboard-mockup.webp" alt="PREMIUM HMS DASHBOARD" style={{ width: '100%', height: 'auto', display: 'block' }} /> */}
          <div className="mockup-placeholder">
            [ PREMIUM HMS ECOSYSTEM DASHBOARD MOCKUP ]
          </div>
        </div>
      </div>
    </section>
  );
}
