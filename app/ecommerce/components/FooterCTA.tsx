'use client';

import React, { useState, useEffect } from 'react';
import { T } from '@/src/theme/tokens';
import { onCalendlyReady } from '@/src/components/CalendlyScript';
import { EcommerceContent } from '../constants';

export default function FooterCTA({ t }: { t: EcommerceContent }) {
  const [calendlyReady, setCalendlyReady] = useState(false);

  useEffect(() => {
    onCalendlyReady(() => setCalendlyReady(true));
  }, []);

  const handleCalendlyPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/fediatsvetkov/15min' });
    }
  };

  return (
    <section className="footer-cta-section">
      <style jsx>{`
        .footer-cta-section {
          width: 100%;
          padding: 0 0 clamp(3rem, 6vw, 5rem) 0;
          text-align: center;
        }

        .cta-box {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .main-title {
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
          color: #ffffff;
          text-wrap: pretty;
        }

        .subtitle-box {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          color: ${T.sub};
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          line-height: 1.5;
          margin: 0;
        }
      `}</style>

      <div className="container">
        <div className="cta-box">
          <h2 className="main-title">{t.footerTitle}</h2>
          <div className="subtitle-box">
            <p className="subtitle">{t.footerSub1}</p>
            <p className="subtitle">{t.footerSub2}</p>
          </div>
          <button
            type="button"
            onClick={handleCalendlyPopup}
            className="btn-premium-core"
            disabled={!calendlyReady}
            style={{ opacity: calendlyReady ? 1 : 0.6, cursor: calendlyReady ? 'pointer' : 'not-allowed' }}
          >
            {calendlyReady ? t.footerBtn : 'Loading…'}
          </button>
        </div>
      </div>
    </section>
  );
}
