'use client';

import React, { useState, useEffect } from 'react';
import { useCalendlyPopup } from '@/src/components/useCalendlyPopup';

interface OtaCostRow {
  value: string;
  unit: string;
  detail: string;
}

interface HeroProps {
  t: {
    heroLocation?: string;
    heroTitle: string;
    heroSub1: string;
    heroSub2: string;
    btnAudit?: string;
    btnAuditNote?: string;
    btnChat?: string;
    otaCostBadge?: string;
    otaCostRows?: OtaCostRow[];
    otaCostCaption?: string;
  };
}

export default function Hero({ t }: HeroProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { calendlyReady, popupLoading, openPopup } = useCalendlyPopup('https://calendly.com/fediatsvetkov/15min');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Универсальное деление подзаголовка
  const rawSub = t.heroSub1 || '';
  let line1 = rawSub;
  let line2 = '';

  if (rawSub.includes('\n')) {
    const parts = rawSub.split('\n');
    line1 = parts[0];
    line2 = parts.slice(1).join(' ');
  } else if (rawSub.includes('. ')) {
    const dotIndex = rawSub.indexOf('. ');
    line1 = rawSub.substring(0, dotIndex);
    line2 = rawSub.substring(dotIndex + 2);
  }

  const costRows: OtaCostRow[] = t.otaCostRows || [];

  return (
    <section
      className="hero-section"
      style={{
        opacity: isMounted ? 1 : 0,
        transition: 'opacity 0.4s ease-out'
      }}
    >
      <style jsx>{`
        .hero-section {
          width: 100%;
          padding: clamp(5.25rem, 8vw, 8rem) 0 4rem 0;
          position: relative;
          z-index: 10;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 58fr 42fr;
          gap: 2.5rem;
          align-items: stretch;
          position: relative;
          box-sizing: border-box;
        }

        .text-column {
          text-align: left;
          position: relative;
          z-index: 10;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .location-line {
          font-size: 0.85rem;
          line-height: 1.4;
          font-weight: 500;
          color: #94A3B8;
          margin: 0 0 0.75rem 0;
        }

        .title {
          font-size: clamp(2.4rem, 4.4vw, 3.9rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
          color: #fff;
          text-wrap: balance;
          width: 100%;
        }

        .subtitles-block {
          margin-bottom: 1.5rem;
          display: block !important;
        }

        .sub-line-1, .sub-line-2 {
          display: block !important;
          font-size: clamp(1.05rem, 1.7vw, 1.2rem);
          line-height: 1.55;
          margin: 0;
          color: #CBD5E1;
          font-weight: 400;
          text-wrap: pretty;
          white-space: pre-line;
        }
        .sub-line-2 {
          margin-top: 0.4rem;
        }

        .utp-highlight {
          font-size: clamp(1.25rem, 2.1vw, 1.45rem);
          font-weight: 700;
          color: #00E599;
          margin-bottom: 2.2rem;
          letter-spacing: -0.01em;
          display: block;
        }

        .cta-container {
          display: flex;
          align-items: stretch;
          gap: 0.85rem;
          flex-wrap: nowrap;
          width: 100%;
          max-width: 620px;
        }

        .cta-container :global(.btn-premium-core) {
          flex: 3 1 0;
          min-width: 0;
          padding: 0 1.25rem;
        }

        .cta-note {
          margin: 0.85rem 0 0;
          font-size: 0.8rem;
          line-height: 1.45;
          color: #6B7688;
          max-width: 620px;
        }

        .btn-secondary-chat {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          flex: 2 1 0;
          min-width: 0;
          height: 52px;
          padding: 0 1.25rem;
          border-radius: 12px;
          background: rgba(0, 229, 153, 0.06);
          border: 1px solid rgba(0, 229, 153, 0.25);
          backdrop-filter: blur(8px);
          color: #00E599;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 229, 153, 0.1);
          box-sizing: border-box;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-secondary-chat:hover {
          transform: translateY(-2px);
          background: rgba(0, 229, 153, 0.15);
          border-color: rgba(0, 229, 153, 0.5);
          box-shadow: 0 6px 25px rgba(0, 229, 153, 0.3);
          color: #00E599;
        }

        .btn-secondary-chat svg {
          width: 22px;
          height: 22px;
          display: block;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .btn-secondary-chat:hover svg {
          transform: scale(1.08);
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

        .visual-column {
          position: relative;
          width: 100%;
          display: flex;
          height: 100%;
          min-width: 0;
        }

        .bento-card-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
        }

        .bento-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0, 229, 153, 0.14) 0%, rgba(0, 163, 255, 0.08) 55%, transparent 80%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 1;
        }

        .bento-card {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: rgba(12, 14, 20, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.8rem;
          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.12);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .bento-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 0.5rem;
        }

        .sync-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #00E599;
          background: rgba(0, 229, 153, 0.08);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 229, 153, 0.25);
          backdrop-filter: blur(12px);
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: #00E599;
          border-radius: 50%;
          box-shadow: 0 0 8px #00E599;
          animation: pulse 2s infinite;
          flex-shrink: 0;
        }

        /* Три строки в столбец — подписи стали длиннее и не помещаются в половину карточки */
        .bento-rows {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin-top: 1.2rem;
          gap: 0.75rem;
        }

        .bento-row {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 0.9rem 1rem;
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.15rem;
          min-width: 0;
          transition: border-color 0.25s ease, background 0.25s ease;
          cursor: default;
        }

        .bento-row:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 229, 153, 0.3);
        }

        .cost-value {
          font-size: clamp(1.85rem, 2.9vw, 2.35rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cost-unit {
          font-size: 0.82rem;
          color: #94A3B8;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .cost-detail {
          font-size: 0.72rem;
          line-height: 1.35;
          color: #6B7688;
          font-weight: 500;
          text-wrap: pretty;
        }

        .outcomes-caption {
          margin: 0.9rem 0 0;
          font-size: 0.7rem;
          line-height: 1.45;
          font-weight: 500;
          color: #6B7688;
          text-align: center;
          text-wrap: pretty;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
        }

        @media (min-width: 1025px) {
          .sync-badge {
            font-size: 0.8rem;
            font-weight: 800;
            padding: 0.5rem 1rem;
          }
          /* Отступ до ленты каналов задаётся самой лентой (4rem), чтобы цифры героя
             и логотипы OTA не читались как один блок */
          .hero-section {
            padding-bottom: 0;
          }
        }

        @media (max-width: 1024px) {
          .hero-section { padding-bottom: 2rem; }
          .hero-grid { grid-template-columns: 1fr; gap: 0; }
          .text-column { text-align: center; align-items: center; }
          .cta-container {
            flex-direction: row;
            justify-content: center;
            align-items: stretch;
            gap: 0.85rem;
            width: 100%;
            max-width: 520px;
          }
          .cta-note {
            text-align: center;
            max-width: 520px;
          }
          .visual-column { display: none !important; }
        }

        /* Мобилка: обе кнопки в столбец, каждая на всю ширину */
        @media (max-width: 767px) {
          .cta-container {
            flex-direction: column;
            max-width: 100%;
          }
          .cta-container :global(.btn-premium-core),
          .btn-secondary-chat {
            flex: 0 0 auto;
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <div className="hero-grid">
          <div className="text-column">
            {t.heroLocation && <p className="location-line">{t.heroLocation}</p>}

            <h1 className="title">{t.heroTitle}</h1>

            <div className="subtitles-block">
              <div className="sub-line-1">{line1}</div>
              {line2 && <div className="sub-line-2">{line2}</div>}
            </div>

            <div className="utp-highlight">
              {t.heroSub2}
            </div>

            <div className="cta-container">
              <button
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
                {!calendlyReady ? "Loading…" : popupLoading ? "Opening…" : (t.btnAudit || "Free 20-min Revenue Check")}
              </button>

              <a
                href="https://wa.me/66650255229"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-chat"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t.btnChat || "WhatsApp"}
              </a>
            </div>

            {t.btnAuditNote && <p className="cta-note">{t.btnAuditNote}</p>}
          </div>

          <div className="visual-column">
            <div className="bento-card-wrapper">
              <div className="bento-glow"></div>

              <div className="bento-card">
                <div className="bento-header">
                  <div className="sync-badge">
                    <div className="pulse-dot"></div> {t.otaCostBadge || "WHAT OTAs COST YOU"}
                  </div>
                </div>

                <div className="bento-rows">
                  {costRows.map((row, idx) => (
                    <div className="bento-row" key={idx}>
                      <div className="cost-value">{row.value}</div>
                      <div className="cost-unit">{row.unit}</div>
                      <div className="cost-detail">{row.detail}</div>
                    </div>
                  ))}
                </div>

                <p className="outcomes-caption">{t.otaCostCaption}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
