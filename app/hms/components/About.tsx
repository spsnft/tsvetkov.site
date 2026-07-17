'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t: {
    aboutTitle: string;
    aboutDesc: string;
    aboutBtn: string;
  };
}

export default function About({ t }: AboutProps) {
  return (
    <section style={{ width: '100%', borderBottom: `1px solid ${T.border}`, backgroundColor: 'transparent' }}>
      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
        .about-left {
          padding: 4.5rem 3rem;
          border-right: 1px solid ${T.border};
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .about-right {
          padding: 4.5rem 3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 2rem;
        }
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-left {
            border-right: none !important;
            border-bottom: 1px solid ${T.border};
            padding: 3rem 1.5rem !important;
          }
          .about-right {
            padding: 3rem 1.5rem !important;
          }
        }
      `}</style>

      <div className="about-grid">
        
        {/* ЛЕВАЯ КОЛОНКА (1/3) — Анкор роли */}
        <div className="about-left">
          <span style={{ color: T.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
            GROWTH ARCHITECTURE
          </span>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
            {t.aboutTitle}
          </h2>
        </div>

        {/* ПРАВАЯ КОЛОНКА (2/3) — Контентная часть и кнопка */}
        <div className="about-right">
          <p style={{ color: T.body, lineHeight: 1.65, fontSize: '1.05rem', margin: 0, fontWeight: 500 }}>
            {t.aboutDesc}
          </p>
          
          <a 
            href="/" 
            style={{ 
              border: `1px solid ${T.border}`, 
              backgroundColor: 'rgba(255,255,255,0.015)',
              color: '#fff', 
              padding: '0.8rem 2.2rem', 
              borderRadius: '6px', 
              textDecoration: 'none', 
              fontWeight: 600, 
              fontSize: '0.95rem',
              transition: 'all 0.2s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.015)';
              e.currentTarget.style.borderColor = T.border;
            }}
          >
            {t.aboutBtn}
          </a>
        </div>

      </div>
    </section>
  );
}
