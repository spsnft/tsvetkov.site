'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';
import { FEATURE_NAMES, TIER_FEATURE_COUNTS } from '../constants';
import { useCalendlyPopup } from '@/src/components/useCalendlyPopup';

interface PricingProps {
  t?: {
    priceTitle?: string;
    priceSub?: string;
    pricePopular?: string;
    priceBtn?: string;
    priceMore2?: string;
    priceMore3?: string;
    priceDisclaimerAudit?: string;
    priceDisclaimerSub?: string;
    tier1Title?: string; tier1Price?: string; tier1Payback?: string; tier1Desc?: string;
    tier2Title?: string; tier2Price?: string; tier2Payback?: string; tier2Desc?: string;
    tier3Title?: string; tier3Price?: string; tier3Payback?: string; tier3Desc?: string;
  };
}

export default function Pricing({ t }: PricingProps) {
  const { calendlyReady, popupLoading, openPopup } = useCalendlyPopup('https://calendly.com/fediatsvetkov/15min');

  const btnLabel = !calendlyReady ? 'Loading…' : popupLoading ? 'Opening…' : (t?.priceBtn || 'Get a quote');
  const btnDisabled = !calendlyReady || popupLoading;

  const names: string[] = [...FEATURE_NAMES];

  const tiers = [
    {
      title: t?.tier1Title || 'LITE',
      price: t?.tier1Price || 'From $1,200',
      payback: t?.tier1Payback,
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

        .price-desc {
          display: block;
          margin-top: 0.35rem;
          font-size: 0.9rem;
          line-height: 1.4;
          color: ${T.sub};
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

        .tier-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 44px;
          margin-top: 1.1rem;
          padding: 0 1rem;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          white-space: nowrap;
          cursor: pointer;
          box-sizing: border-box;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }

        .tier-btn:hover:not(:disabled) {
          border-color: ${T.accent35};
          background: rgba(255, 255, 255, 0.03);
        }

        .tier-btn.primary {
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          border-color: transparent;
          color: #0A0A0C;
          box-shadow: 0 6px 18px rgba(0, 229, 153, 0.2);
        }

        .tier-btn.primary:hover:not(:disabled) {
          transform: translateY(-1px);
        }

        .tier-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ---------- ТАБЛИЦА СРАВНЕНИЯ (≥900px) ---------- */
        .pricing-table {
          display: none;
        }

        .pricing-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 480px;
          margin: 0 auto;
        }

        @media (min-width: 900px) {
          .pricing-table {
            display: table;
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
          }
          .pricing-cards {
            display: none;
          }
          /* Цена в колонке таблицы не переносится, а payback и «для кого»
             держат две строки — иначе шапки колонок разъезжаются */
          .head-cell .price {
            font-size: clamp(1.35rem, 2.1vw, 2rem);
            white-space: nowrap;
          }
          .head-cell .price-payback {
            min-height: 2.2em;
          }
          .head-cell .price-desc {
            min-height: 2.8em;
          }
        }

        .head-cell {
          vertical-align: bottom;
          text-align: center;
          padding: 0 1rem 1.6rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .head-cell.featured {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(0, 229, 153, 0.25);
          border-left: 1px solid rgba(0, 229, 153, 0.25);
          border-right: 1px solid rgba(0, 229, 153, 0.25);
          border-radius: 12px 12px 0 0;
        }

        .head-empty {
          padding: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .badge-slot {
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-cell {
          padding: 0.85rem 0.75rem 0.85rem 0;
          font-size: 0.92rem;
          font-weight: 400;
          line-height: 1.35;
          text-align: left;
          color: rgba(255, 255, 255, 0.75);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .mark-cell {
          padding: 0.85rem 1rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .mark-cell.featured {
          background: rgba(255, 255, 255, 0.02);
          border-left: 1px solid rgba(0, 229, 153, 0.25);
          border-right: 1px solid rgba(0, 229, 153, 0.25);
        }

        .feature-row:hover .feature-cell,
        .feature-row:hover .mark-cell {
          background: rgba(255, 255, 255, 0.018);
        }

        .feature-row:last-child .mark-cell.featured {
          border-bottom: 1px solid rgba(0, 229, 153, 0.25);
          border-radius: 0 0 12px 12px;
        }

        .yes {
          color: ${T.mint};
          font-size: 17px;
          font-weight: 700;
        }

        .no {
          color: #33373C;
          font-size: 15px;
        }

        /* ---------- КАРТОЧКИ (<900px) ---------- */
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
          margin: 2.5rem auto 0;
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
          .feature-cell {
            font-size: 0.85rem;
          }
          .price-desc {
            font-size: 0.82rem;
          }
          .price-payback {
            font-size: 0.72rem;
          }
          .tier-btn {
            font-size: 0.78rem;
            padding: 0 0.6rem;
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

        {/* ---------- ДЕСКТОП: таблица сравнения ---------- */}
        <table className="pricing-table">
          <colgroup>
            <col style={{ width: '38%' }} />
            <col style={{ width: '20.6%' }} />
            <col style={{ width: '20.6%' }} />
            <col style={{ width: '20.6%' }} />
          </colgroup>
          <thead>
            <tr>
              <td className="head-empty" />
              {tiers.map((tier) => (
                <th className={`head-cell${tier.featured ? ' featured' : ''}`} key={tier.title} scope="col">
                  <div className="badge-slot">
                    {tier.featured && <span className="popular-badge">{t?.pricePopular || 'Popular'}</span>}
                  </div>
                  <p className={`package-title${tier.featured ? ' accent' : ''}`}>{tier.title}</p>
                  <span className="price">{tier.price}</span>
                  {tier.payback && <span className="price-payback">{tier.payback}</span>}
                  <span className="price-desc">{tier.desc}</span>
                  <button
                    type="button"
                    onClick={openPopup}
                    disabled={btnDisabled}
                    className={`tier-btn${tier.featured ? ' primary' : ''}`}
                  >
                    {btnLabel}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {names.map((name, i) => (
              <tr className="feature-row" key={name}>
                <th className="feature-cell" scope="row">{name}</th>
                {TIER_FEATURE_COUNTS.map((count, tierIdx) => (
                  <td className={`mark-cell${tierIdx === 1 ? ' featured' : ''}`} key={tierIdx}>
                    {i < count
                      ? <span className="yes">✓</span>
                      : <span className="no">—</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* ---------- МОБИЛКА И ПЛАНШЕТ: карточки ---------- */}
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
              <span className="price-desc">{tier.desc}</span>

              <ul className="card-features">
                {tier.own.map((f) => (
                  <li key={f}><span className="check-icon">✓</span> {f}</li>
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

              <button
                type="button"
                onClick={openPopup}
                disabled={btnDisabled}
                className={`tier-btn${tier.featured ? ' primary' : ''}`}
              >
                {btnLabel}
              </button>
            </div>
          ))}
        </div>

        <p className="shared-disclaimer">
          <span>{t?.priceDisclaimerAudit || "Final price confirmed after your free audit. PMS/channel manager subscription billed separately by provider."}</span>
          {t?.priceDisclaimerSub && <span>{t.priceDisclaimerSub}</span>}
        </p>
      </div>
    </section>
  );
}
