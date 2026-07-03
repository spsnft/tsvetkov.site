'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';

export const Footer = () => {
  return (
    <footer style={{
      padding: '2.5rem clamp(1.25rem,5vw,2.5rem)',
      borderTop: `1px solid ${T.border}`,
      background: 'transparent',
      position: 'relative',
      zIndex: 5,
    }}>
      <style>{`
        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row !important;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Левая сторона: Копирайт */}
        <div style={{ color: T.muted, fontSize: '0.85rem', fontFamily: 'inherit' }}>
          © {new Date().getFullYear()} TSVETKOV. Engineered to Scale.
        </div>

        {/* Правая сторона: Чистые B2B-каналы связи */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a 
            href="https://linkedin.com/in/YOUR_PROFILE" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: T.muted, fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = T.muted}
          >
            LinkedIn
          </a>

          <a 
            href="mailto:hi@tsvetkov.site" 
            style={{ color: T.muted, fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = T.muted}
          >
            hi@tsvetkov.site
          </a>
        </div>
      </div>
    </footer>
  );
};
