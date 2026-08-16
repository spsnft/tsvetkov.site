'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';
import { FEATURE_NAMES, TIER_FEATURE_COUNTS } from '../constants';
import WhatsAppCta from './WhatsAppCta';

interface PricingProps {
  t?: {
    priceTitle?: string;
    priceSub?: string;
    pricePopular?: string;
    priceMore2?: string;
    priceMore3?: string;
    priceDisclaimerAudit?: string;
    priceDisclaimerSub?: string;
    pricePaybackNote?: string;
    priceFitHint?: string;
    riskTitle?: string;
    riskText?: string;
    featureHints?: Record<string, string>;
    btnAudit?: string;
    waMessage?: string;
    tier1Title?: string; tier1Price?: string; tier1Payback?: string; tier1Fit?: string; tier1Desc?: string;
    tier2Title?: string; tier2Price?: string; tier2Payback?: string; tier2Fit?: string; tier2Desc?: string;
    tier3Title?: string; tier3Price?: string; tier3Payback?: string; tier3Fit?: string; tier3Desc?: string;
  };
}

export default function Pricing({ t }: PricingProps) {
  const names: string[] = [...FEATURE_NAMES];
  const hints = t?.featureHints || {};

  const tiers = [
    {
      title: t?.tier1Title || 'LITE',
      price: t?.tier1Price || 'From $1,200',
      payback: t?.tier1Payback,
      fit: t?.tier1Fit || 'Typical fit: 1–9 units',
      desc: t?.tier1Desc || 'For small villas & guesthouses',
      featured: false,
      own: names.slice(0, TIER_FEATURE_COUNTS[0]),
      inherited: [] as string[],
      moreLabel: ''
    },
    {
      title: t?.tier2Title || 'STANDARD',
      price: t?.tier2Price || 'From $2,500',
      payback: t?.tier2Payback,
      fit: t?.tier2Fit || 'Typical fit: 10–29 units',
      desc: t?.tier2Desc || 'For boutique hotels & resorts',
      featured: true,
      own: names.slice(TIER_FEATURE_COUNTS[0], TIER_FEATURE_COUNTS[1]),
      inherited: names.slice(0, TIER_FEATURE_COUNTS[0]),
      moreLabel: t?.priceMore2 || '+ 4 from Lite'
    },
    {
      title: t?.tier3Title || 'ENTERPRISE',
      price: t?.tier3Price || 'Custom',
      payback: t?.tier3Payback,
      fit: t?.tier3Fit || 'Multi-property and operators',
      desc: t?.tier3Desc || 'For hotel chains & operators',
      featured: false,
      own: names.slice(TIER_FEATURE_COUNTS[1], TIER_FEATURE_COUNTS[2]),
      inherited: names.slice(0, TIER_FEATURE_COUNTS[1]),
      moreLabel: t?.priceMore3 || '+ 7 from Standard'
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <style jsx>{`
        .pricing-section {
          width: 100%;
          padding: 0 0 5rem 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .pricing-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .pricing-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
          text-wrap: balance;
        }

        .pricing-subtitle {
          color: ${T.sub};
          font-size: 1.05rem;
          line-height: 1.5;
          margin: 0;
          text-wrap: balance;
        }

        .package-title {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }

        .package-title.accent {
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .price {
          font-size: 2.4rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          display: block;
          margin: 0.7rem 0 0.5rem;
        }

        .price-payback {
          display: block;
          font-size: 0.78rem;
          line-height: 1.4;
          color: ${T.muted};
        }

        /* Ориентир по числу номеров — то, по чему владелец узнаёт свой тариф,
           поэтому он ярче существующей подписи «для кого» */
        .price-fit {
          display: block;
          margin-top: 0.55rem;
          font-size: 0.86rem;
          font-weight: 600;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.9);
        }

        .price-desc {
          display: block;
          margin-top: 0.2rem;
          font-size: 0.9rem;
          line-height: 1.4;
          color: ${T.sub};
        }

        /* Пояснение к термину при первом появлении — тише самого названия */
        .feature-hint {
          color: ${T.muted};
          font-weight: 400;
        }

        .popular-badge {
          display: inline-block;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #000000;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0, 229, 153, 0.2);
        }

        /* Развязка калькулятора и окупаемости: пример в герое — 12 номеров,
           окупаемость в карточках — объекты разного размера */
        .payback-note {
          margin: 18px auto 0;
          max-width: 720px;
          text-align: center;
          font-size: 0.78rem;
          line-height: 1.5;
          color: ${T.muted};
          text-wrap: pretty;
        }

        .fit-hint {
          margin: 10px auto 0;
          max-width: 720px;
          text-align: center;
          font-size: 0.92rem;
          line-height: 1.5;
          color: ${T.sub};
          text-wrap: pretty;
        }

        /* Реверс риска: заметен, но тише кнопки — главный элемент экрана
           остаётся один */
        .risk-box {
          margin: 24px auto 0;
          max-width: 520px;
          padding: 16px 20px;
          border: 1px solid rgba(0, 229, 153, 0.28);
          border-radius: 14px;
          background: rgba(0, 229, 153, 0.05);
          text-align: center;
        }

        .risk-title {
          margin: 0;
          font-size: 1.02rem;
          font-weight: 700;
          line-height: 1.4;
          color: #ffffff;
          text-wrap: pretty;
        }

        .risk-text {
          margin: 6px 0 0;
          font-size: 0.92rem;
          line-height: 1.5;
          color: ${T.sub};
          text-wrap: pretty;
        }

        /* Одна кнопка под блоком тарифов вместо трёх в карточках: ширина по
           контенту на десктопе, на всю ширину на мобильном */
        .pricing-cta {
          display: flex;
          justify-content: center;
          margin-top: 24px;
        }

        .pricing-cta :global(.btn-premium-core) {
          flex: 0 1 auto;
          max-width: 100%;
        }

        @media (max-width: 599px) {
          .pricing-cta :global(.btn-premium-core) {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .pricing-cta :global(.btn-premium-core) {
            padding: 0 0.7rem;
            font-size: 0.95rem;
          }
        }

        /* ---------- КАРТОЧКИ НА ВСЕХ РАЗРЕШЕНИЯХ ---------- */
        .pricing-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        /* В три колонки шапки карточек должны стоять на одной высоте: цена не
           переносится, а окупаемость и «для кого» держат по две строки */
        @media (min-width: 600px) {
          .price {
            white-space: nowrap;
          }
          .price-payback,
          .price-fit,
          .price-desc {
            min-height: 2.8em;
          }
        }

        /* Планшет: те же три колонки, кегль и паддинги мельче */
        @media (min-width: 600px) and (max-width: 899px) {
          .pricing-cards {
            gap: 0.85rem;
          }
          .card {
            padding: 1.35rem 1rem;
          }
          .price {
            font-size: clamp(1.15rem, 3.4vw, 1.75rem);
          }
          .price-payback {
            font-size: 0.72rem;
          }
          .price-fit {
            font-size: 0.8rem;
          }
          .price-desc {
            font-size: 0.82rem;
          }
          .card-features li {
            font-size: 0.82rem;
          }
        }

        /* Мобилка: один столбец */
        @media (max-width: 599px) {
          .pricing-cards {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        .card {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          padding: 1.75rem 1.35rem;
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .card.featured {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 229, 153, 0.25);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .card-badge {
          position: absolute;
          top: -12px;
          right: 20px;
        }

        .card-features {
          list-style: none;
          padding: 1.25rem 0 0;
          margin: 1.25rem 0 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .card-features li {
          display: flex;
          align-items: flex-start;
          gap: 0.7rem;
          font-size: 0.92rem;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.75);
          min-width: 0;
          overflow-wrap: break-word;
        }

        .check-icon {
          color: ${T.mint};
          font-weight: 700;
          flex-shrink: 0;
        }

        .more {
          margin-top: 0.75rem;
        }

        /* Тап-зона summary не меньше 44px по высоте */
        .more summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          min-height: 44px;
          font-size: 0.85rem;
          font-weight: 600;
          color: ${T.sub};
          cursor: pointer;
          list-style: none;
          -webkit-tap-highlight-color: transparent;
        }

        .more summary::-webkit-details-marker {
          display: none;
        }

        .chev::after {
          content: '⌄';
          font-size: 0.95rem;
          line-height: 1;
        }

        .more[open] .chev::after {
          content: '⌃';
        }

        .more-list {
          list-style: none;
          padding: 0 0 0.35rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .more-list li {
          display: flex;
          gap: 0.5rem;
          font-size: 13px;
          line-height: 1.35;
          color: #5A6069;
        }

        .shared-disclaimer {
          margin: 20px auto 0;
          max-width: 820px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .shared-disclaimer span {
          font-size: 0.78rem;
          line-height: 1.5;
          color: ${T.muted};
        }

        @media (min-width: 900px) and (max-width: 1100px) {
          .price {
            font-size: 2rem;
          }
          .price-desc {
            font-size: 0.85rem;
          }
          .price-fit {
            font-size: 0.82rem;
          }
          .price-payback {
            font-size: 0.74rem;
          }
        }

        @media (max-width: 767px) {
          .pricing-section {
            padding: 0 0 3rem 0;
          }
          .pricing-header {
            margin-bottom: 2rem;
          }
          .pricing-title {
            font-size: 1.75rem;
          }
          .pricing-subtitle {
            font-size: 0.95rem;
          }
          .price {
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            {t?.priceTitle || "Transparent Integration. Permanent Independence"}
          </h2>
          {t?.priceSub && (
            <p className="pricing-subtitle">
              {t.priceSub}
            </p>
          )}
        </div>

        <div className="pricing-cards">
          {tiers.map((tier) => (
            <div className={`card${tier.featured ? ' featured' : ''}`} key={tier.title}>
              {tier.featured && (
                <span className="card-badge">
                  <span className="popular-badge">{t?.pricePopular || 'Popular'}</span>
                </span>
              )}
              <p className={`package-title${tier.featured ? ' accent' : ''}`}>{tier.title}</p>
              <span className="price">{tier.price}</span>
              {tier.payback && <span className="price-payback">{tier.payback}</span>}
              <span className="price-fit">{tier.fit}</span>
              <span className="price-desc">{tier.desc}</span>

              <ul className="card-features">
                {tier.own.map((f) => (
                  <li key={f}>
                    <span className="check-icon">✓</span>
                    <span>
                      {f}
                      {hints[f] && <span className="feature-hint"> ({hints[f]})</span>}
                    </span>
                  </li>
                ))}
              </ul>

              {tier.inherited.length > 0 && (
                <details className="more">
                  <summary>
                    <span>{tier.moreLabel}</span>
                    <span className="chev" aria-hidden="true" />
                  </summary>
                  <ul className="more-list">
                    {tier.inherited.map((f) => (
                      <li key={f}><span aria-hidden="true">·</span> {f}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          ))}
        </div>

        {t?.pricePaybackNote && (
          <p className="payback-note">{t.pricePaybackNote}</p>
        )}

        {t?.priceFitHint && (
          <p className="fit-hint">{t.priceFitHint}</p>
        )}

        {/* Реверс риска стоит до кнопки: читатель проходит снятие риска
            раньше, чем доходит до нажатия. Рамка приглушённее кнопки */}
        {t?.riskTitle && (
          <div className="risk-box">
            <p className="risk-title">{t.riskTitle}</p>
            {t.riskText && <p className="risk-text">{t.riskText}</p>}
          </div>
        )}

        <div className="pricing-cta">
          <WhatsAppCta
            label={t?.btnAudit || "Free Revenue Check"}
            message={t?.waMessage}
          />
        </div>

        <p className="shared-disclaimer">
          <span>{t?.priceDisclaimerAudit || "Final price confirmed after your free audit. PMS/channel manager subscription billed separately by provider."}</span>
          {t?.priceDisclaimerSub && <span>{t.priceDisclaimerSub}</span>}
        </p>
      </div>
    </section>
  );
}
