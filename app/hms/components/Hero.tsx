'use client';

import React from 'react';
import WhatsAppCta from './WhatsAppCta';

interface HeroProps {
  t: {
    heroTitle: string;
    heroSubtitle?: string;
    btnAudit?: string;
    waMessage?: string;
  };
}

export default function Hero({ t }: HeroProps) {
  // Число не красим (было — сняли зелёный: комиссия не должна читаться как
  // деньги владельца), но всё ещё держим «15–20%» на одной строке — иначе
  // перенос ровно по en dash на глаз превращается в дефис
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
          padding: clamp(4.5rem, 7vw, 8rem) 0 2rem 0;
          position: relative;
          z-index: 10;
        }

        /* Три элемента друг под другом: H1, подзаголовок, кнопка —
           калькулятор теперь отдельный блок ниже по странице */
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

        .title-nowrap {
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

        /* На 320px длинный русский текст не влезает в кнопку при обычном паддинге */
        @media (max-width: 360px) {
          .cta-container :global(.btn-premium-core) {
            padding: 0 0.7rem;
            font-size: 0.95rem;
          }
        }

        /* Хиро + калькулятор должны целиком помещаться на 390×844 без
           скролла — воздух над H1 и под кнопкой отсюда убран до
           минимума, по фиксированному бюджету отступов, а не clamp().
           Nav — position:fixed высотой 64px и не участвует в потоке,
           поэтому «низ шапки → H1: 28px» = 64px нава + сам зазор */
        @media (max-width: 767px) {
          .hero-section {
            padding: calc(64px + 28px) 0 32px 0;
          }
          .title {
            margin-bottom: 12px;
          }
          .subtitle {
            margin-bottom: 24px;
          }
        }
      `}</style>

      <div className="container">
        <div className="hero-inner">
          <h1 className="title">
            {titleParts ? (
              <>
                {titleParts.before}
                <span className="title-nowrap">{titleParts.accent}</span>
                {titleParts.after}
              </>
            ) : t.heroTitle}
          </h1>

          <p className="subtitle">
            {t.heroSubtitle ||
              'Direct bookings on your own site, every channel in one calendar — and you own it.'}
          </p>

          <div className="cta-container">
            <WhatsAppCta
              label={t.btnAudit || "Free Revenue Check"}
              message={t.waMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
