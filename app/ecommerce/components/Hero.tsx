'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';
import { useCalendlyPopup } from '@/src/components/useCalendlyPopup';
import { EcommerceContent } from '../constants';

export default function Hero({ t }: { t: EcommerceContent }) {
  const { calendlyReady, popupLoading, openPopup } = useCalendlyPopup('https://calendly.com/fediatsvetkov/15min');

  return (
    <section className="ecom-hero">
      <style jsx>{`
        .ecom-hero {
          width: 100%;
          padding: ${T.section.topPad} 0 clamp(3rem, 6vw, 5rem) 0;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1.25rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${T.accent};
          background: ${T.accent05};
          border: 1px solid ${T.accent25};
          backdrop-filter: blur(12px);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.accent};
          box-shadow: 0 0 8px ${T.accent};
          animation: pulseDot 1.8s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .title {
          font-size: clamp(2.6rem, 5.5vw, 4.4rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.035em;
          margin: 0 0 1.75rem 0;
          text-wrap: balance;
          max-width: 720px;
        }

        .title-line2 {
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sub-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-left: 2px solid ${T.accent30};
          padding-left: 1.25rem;
          margin-bottom: 2.25rem;
          max-width: 620px;
        }

        .sub-item {
          font-size: clamp(0.95rem, 1.3vw, 1.1rem);
          line-height: 1.6;
          color: ${T.body};
          margin: 0;
        }

        .cta-row {
          display: flex;
          align-items: center;
        }

        .btn-spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(10, 10, 12, 0.3);
          border-top-color: #0a0a0c;
          border-radius: 50%;
          display: inline-block;
          animation: btnSpin 0.7s linear infinite;
        }

        @keyframes btnSpin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      <div className="container">
        <span className="badge">
          <span className="badge-dot" />
          {t.badge}
        </span>

        <h1 className="title">
          {t.heroTitleLine1}
          <br />
          <span className="title-line2">{t.heroTitleLine2}</span>
        </h1>

        <div className="sub-list">
          <p className="sub-item">{t.heroSub1}</p>
          <p className="sub-item">{t.heroSub2}</p>
          <p className="sub-item">{t.heroSub3}</p>
        </div>

        <div className="cta-row">
          <button
            type="button"
            onClick={openPopup}
            className="btn-premium-core"
            disabled={!calendlyReady || popupLoading}
            style={{
              opacity: calendlyReady ? 1 : 0.6,
              cursor: calendlyReady && !popupLoading ? 'pointer' : 'not-allowed',
              gap: '8px',
            }}
          >
            {popupLoading && <span className="btn-spinner" />}
            {!calendlyReady ? 'Loading…' : popupLoading ? 'Opening…' : t.btnAudit}
          </button>
        </div>
      </div>
    </section>
  );
}
