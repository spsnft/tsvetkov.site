'use client';

import React from 'react';
import HeroCalculator, { type HeroCalculatorCopy } from './HeroCalculator';
import WhatsAppCta from './WhatsAppCta';

interface HeroProps {
  t: {
    heroTitle: string;
    heroSubtitle?: string;
    btnAudit?: string;
    waMessage?: string;
    ctaNote?: string;
  } & HeroCalculatorCopy;
}

export default function Hero({ t }: HeroProps) {
  // Единственный градиентный акцент в заголовке — фрагмент «15–20%»
  const titleParts = (() => {
    const match = /1\s?5\s?[-‐‑‒–—]\s?2\s?0\s?%/.exec(t.heroTitle || '');
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
          padding: clamp(5.25rem, 8vw, 8rem) 0 3.5rem 0;
          position: relative;
          z-index: 10;
        }

        /* Ровно пять элементов друг под другом: H1, подзаголовок,
           калькулятор, кнопка, микрокопия — без боковой колонки */
        .hero-inner {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .title {
          font-size: clamp(30px, 5.4vw, 54px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.03em;
          margin: 0 0 18px 0;
          color: #fff;
          text-wrap: balance;
          width: 100%;
        }

        .title-accent {
          background: linear-gradient(100deg, #6EE7A8, #5BB8F0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          /* без этого браузер переносит строку прямо на en dash,
             и на глаз это снова превращается в дефис */
          white-space: nowrap;
        }

        .subtitle {
          font-size: clamp(1.05rem, 1.7vw, 1.2rem);
          line-height: 1.55;
          margin: 0 0 2rem 0;
          color: #CBD5E1;
          font-weight: 400;
          text-wrap: pretty;
          max-width: 560px;
        }

        .calc-wrap {
          width: 100%;
          max-width: 480px;
          margin: 0 0 2rem 0;
        }

        .cta-container {
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          max-width: 480px;
        }

        .cta-container :global(.btn-premium-core) {
          flex: 1 1 auto;
          min-width: 0;
          width: 100%;
        }

        .cta-container :global(.btn-premium-core svg) {
          flex-shrink: 0;
        }

        /* Что произойдёт после нажатия — тише кнопки, сразу под ней */
        .cta-note {
          margin: 14px 0 0 0;
          font-size: 0.8rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.45);
          max-width: 420px;
          text-wrap: pretty;
        }

        /* На 320px длинный русский текст не влезает в кнопку при обычном паддинге */
        @media (max-width: 360px) {
          .cta-container :global(.btn-premium-core) {
            padding: 0 0.7rem;
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="hero-inner">
          <h1 className="title">
            {titleParts ? (
              <>
                {titleParts.before}
                <span className="title-accent">{titleParts.accent}</span>
                {titleParts.after}
              </>
            ) : t.heroTitle}
          </h1>

          <p className="subtitle">
            {t.heroSubtitle ||
              'We set up the booking system your property runs on, then hand you the keys.'}
          </p>

          <div className="calc-wrap">
            <HeroCalculator t={t} />
          </div>

          <div className="cta-container">
            <WhatsAppCta
              label={t.btnAudit || "Free Revenue Check"}
              message={t.waMessage}
            />
          </div>

          {t.ctaNote && <p className="cta-note">{t.ctaNote}</p>}
        </div>
      </div>
    </section>
  );
}
