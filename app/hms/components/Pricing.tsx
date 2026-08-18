'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';
import { FEATURE_NAMES, TIER_FEATURE_COUNTS } from '../constants';
import PrimaryCta from './PrimaryCta';

interface PricingProps {
  lang?: 'en' | 'ru' | 'th';
  t?: {
    priceLabel?: string;
    priceTitle?: string;
    pricePopular?: string;
    priceMore2?: string;
    priceMore3?: string;
    pricePaybackNote?: string;
    riskTitle?: string;
    featureHints?: Record<string, string>;
    heroCtaLabel?: string;
    heroCtaNote?: string;
    waMessage?: string;
    tier1Title?: string; tier1Price?: string; tier1Desc?: string;
    tier2Title?: string; tier2Price?: string; tier2Desc?: string;
    tier3Title?: string; tier3Price?: string; tier3Desc?: string;
  };
}

export default function Pricing({ t }: PricingProps) {
  const names: string[] = [...FEATURE_NAMES];
  const hints = t?.featureHints || {};

  const tiers = [
    {
      title: t?.tier1Title || 'LITE',
      price: t?.tier1Price || 'From $1,200',
      desc: t?.tier1Desc || 'For small villas & guesthouses (1–9 units)',
      featured: false,
      own: names.slice(0, TIER_FEATURE_COUNTS[0]),
      inherited: [] as string[],
      moreLabel: ''
    },
    {
      title: t?.tier2Title || 'STANDARD',
      price: t?.tier2Price || 'From $2,500',
      desc: t?.tier2Desc || 'For boutique hotels & resorts (10–29 units)',
      featured: true,
      own: names.slice(TIER_FEATURE_COUNTS[0], TIER_FEATURE_COUNTS[1]),
      inherited: names.slice(0, TIER_FEATURE_COUNTS[0]),
      moreLabel: t?.priceMore2 || '+ 4 from Lite'
    },
    {
      title: t?.tier3Title || 'ENTERPRISE',
      price: t?.tier3Price || 'Custom',
      desc: t?.tier3Desc || 'For hotel chains & operators (multi-property)',
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
          padding: ${T.hms.sectionPadTop} 0 ${T.hms.sectionPadBottom} 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .pricing-header {
          text-align: center;
          /* Единый отступ «заголовок секции → первый контент» на всей
             странице — согласовано с заказчиком по итогам аудита (ТЗ №4):
             было 3.5rem/56px, приводим к общему 48px */
          margin-bottom: 48px;
        }

        .pricing-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          opacity: 0.8;
          margin: 0 0 ${T.hms.eyebrowGap} 0;
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

        /* Единственная строка позиционирования тарифа: «для кого» + число
           номеров в скобках — раньше это были две отдельные строки */
        .price-desc {
          display: block;
          margin-top: 0.55rem;
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

        /* Реверс риска: заметен, но тише кнопки — главный элемент экрана
           остаётся один */
        .risk-box {
          margin: 24px auto 0;
          max-width: 560px;
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

        /* Одна кнопка под блоком тарифов: ширина по контенту на десктопе,
           на всю ширину на мобильном — задаёт сама PrimaryCta */
        .pricing-cta-primary {
          display: flex;
          justify-content: center;
          margin-top: 24px;
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

        /* Было 1.25rem margin + 1.25rem padding (40px) — на тарифах с
           однострочным price-desc (LITE: «For small villas...» не
           переносится, хотя min-height выше держит место под 2 строки для
           выравнивания чек-листов между колонками) это давало вдвое
           больший зазор, чем задумано, поверх уже зарезервированной пустой
           строки (см. ТЗ пакет 3, п. A7) */
        .card-features {
          list-style: none;
          padding: 1rem 0 0;
          margin: 0.75rem 0 0;
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

        @media (min-width: 900px) and (max-width: 1100px) {
          .price {
            font-size: 2rem;
          }
          .price-desc {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 767px) {
          .pricing-section {
            padding: ${T.hms.sectionPadTopMobile} 0 ${T.hms.sectionPadBottomMobile} 0;
          }
          .pricing-title {
            font-size: 1.75rem;
          }
          .price {
            font-size: 2.2rem;
          }
        }

        /* card-features li чуть мельче на мобиле — иначе «Marketing
           Analytics (booking sources)» переносится на 375px (см. ТЗ №6,
           п. 4). Стоит последним в файле нарочно: у безусловного правила
           .card-features li та же специфичность и более позднее место в
           каскаде, так что более ранний @media (max-width: 599px) его не
           перебивает */
        @media (max-width: 599px) {
          .card-features li {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="pricing-header">
          {t?.priceLabel && <p className="pricing-eyebrow">{t.priceLabel}</p>}
          <h2 className="pricing-title">
            {t?.priceTitle || "One-time setup. Zero commission forever"}
          </h2>
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

        {/* Один блок в рамке — гарантия результата (50% upfront...) крупно +
            мелкая приглушённая строка про итоговую цену и подписки, без
            обещания срока, для всех локалей (см. ТЗ №3, п. 7) */}
        {t?.riskTitle && (
          <div className="risk-box">
            <p className="risk-title">{t.riskTitle}</p>
            {t.pricePaybackNote && <p className="risk-text">{t.pricePaybackNote}</p>}
          </div>
        )}

        <div className="pricing-cta-primary">
          <PrimaryCta
            label={t?.heroCtaLabel || 'Ask for my revenue check'}
            message={t?.waMessage}
            note={t?.heroCtaNote || 'One WhatsApp message. No commitment.'}
            align="center"
          />
        </div>
      </div>
    </section>
  );
}
