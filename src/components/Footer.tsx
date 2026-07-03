'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';

export const Footer = () => {
  return (
    <footer style={{
      padding: '2rem clamp(1.25rem,5vw,2.5rem)',
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
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        @media (min-width: 640px) {
          .footer-container {
            flex-direction: row !important;
            gap: 1.5rem;
          }
        }
      `}</style>

          <div className="footer-container">
            {/* Ультра-минималистичный B2B знак качества */}
            <div style={{ color: T.muted, fontSize: '0.8rem', fontFamily: 'monospace', letterSpacing: '0.05em' }}>
              TSVETKOV © 2026
            </div>

            {/* Профессиональные каналы связи */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a 
                href="https://linkedin.com/in/YOUR_PROFILE" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: T.muted, fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = T.muted}
              >
                LinkedIn
              </a>

              <a 
                href="mailto:fedor@tsvetkov.site" 
                style={{ color: T.muted, fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 500 }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = T.muted}
              >
                fedor@tsvetkov.site
              </a>
            </div>
          </div>
    </footer>
  );
};
