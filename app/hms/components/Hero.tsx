'use client';

import React from 'react';
import RevenueCalc, { type CalcCopy } from './RevenueCalc';
import WhatsAppCta from './WhatsAppCta';

interface HeroProps {
  t: {
    heroTitle: string;
    heroSub1: string;
    heroSub2: string;
    btnAudit?: string;
    btnAuditNote?: string;
    waMessage?: string;
    otaCostBadge?: string;
  } & CalcCopy;
}

export default function Hero({ t }: HeroProps) {
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

  // Единственный градиентный акцент в заголовке — фрагмент «15-20%»
  const titleParts = (() => {
    const match = /1\s?5\s?[-\u2010\u2011\u2012\u2013\u2014]\s?2\s?0\s?%/.exec(t.heroTitle || '');
    if (!match) return null;
    return {
      before: t.heroTitle.slice(0, match.index),
      accent: match[0],
      after: t.heroTitle.slice(match.index + match[0].length)
    };
  })();

  return (
    // Секция рендерится сразу, без фейда по монтированию: первый экран
    // должен приходить с рабочим CTA ещё до гидрации
    <section className="hero-section">
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

        .title-accent {
          background: linear-gradient(100deg, #6EE7A8, #5BB8F0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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

        /* Одна кнопка: на десктопе по контенту, на мобильном — на всю ширину */
        .cta-container {
          display: flex;
          align-items: stretch;
          width: 100%;
          max-width: 620px;
        }

        .cta-container :global(.btn-premium-core) {
          flex: 0 1 auto;
          min-width: 0;
          max-width: 100%;
        }

        .cta-container :global(.btn-premium-core svg) {
          flex-shrink: 0;
        }

        .cta-note {
          margin: 0.85rem 0 0;
          font-size: 0.8rem;
          line-height: 1.45;
          color: #6B7688;
          max-width: 620px;
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

        .bento-body {
          display: flex;
          flex: 1;
          margin-top: 1.4rem;
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
            justify-content: center;
            width: 100%;
            max-width: 520px;
          }
          .cta-note {
            text-align: center;
            max-width: 520px;
          }
          .visual-column { display: none !important; }
        }

        /* На 320px длинный русский текст не влезает в кнопку при обычном паддинге */
        @media (max-width: 360px) {
          .cta-container :global(.btn-premium-core) {
            padding: 0 0.7rem;
            font-size: 0.95rem;
          }
        }

        /* Поджимаем ритм первого экрана, чтобы подстрочник под кнопкой
           помещался над фолдом на 390px */
        @media (max-width: 480px) {
          .title {
            line-height: 1.06;
          }
          .subtitles-block {
            margin-bottom: 18px;
          }
          .utp-highlight {
            margin-bottom: 22px;
          }
        }

        /* Мобилка: кнопка на всю ширину контейнера */
        @media (max-width: 767px) {
          .cta-container {
            max-width: 100%;
          }
          .cta-container :global(.btn-premium-core) {
            flex: 1 1 auto;
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <div className="hero-grid">
          <div className="text-column">
            <h1 className="title">
              {titleParts ? (
                <>
                  {titleParts.before}
                  <span className="title-accent">{titleParts.accent}</span>
                  {titleParts.after}
                </>
              ) : t.heroTitle}
            </h1>

            <div className="subtitles-block">
              <div className="sub-line-1">{line1}</div>
              {line2 && <div className="sub-line-2">{line2}</div>}
            </div>

            <div className="utp-highlight">
              {t.heroSub2}
            </div>

            <div className="cta-container">
              <WhatsAppCta
                label={t.btnAudit || "Free 20-min Revenue Check"}
                message={t.waMessage}
              />
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

                <div className="bento-body">
                  <RevenueCalc t={t} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
