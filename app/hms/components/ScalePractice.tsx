'use client';

import React from 'react';
import Image from 'next/image';
import { T } from '../../../src/theme/tokens';

interface ScalePracticeProps {
  t?: any;
}

const CARD_ASSETS = [
  '/assets/sync.webp',
  '/assets/revenue.webp',
  '/assets/growth.webp'
];

// Те же два цвета палитры, сдвинуты точки градиента — три заголовка подряд
// перестают читаться как один повторённый оттенок
const TITLE_GRADIENTS = [
  'linear-gradient(135deg, #00E599 0%, #00A3FF 115%)',
  'linear-gradient(135deg, #00E599 30%, #00A3FF 100%)',
  'linear-gradient(120deg, #00E599 -25%, #00A3FF 78%)'
];

const DEFAULT_ITEMS = [
  {
    endValue: "Instant Sync",
    desc: "Cloud PMS & Channel Manager integration. Every reservation instantly locks your inventory grid across Booking.com, Agoda & 300+ OTAs"
  },
  {
    endValue: "100% Direct Revenue",
    desc: "Zero-commission booking engine with a secure payment gateway. Process bookings on your own terms and keep all revenue in-house"
  },
  {
    endValue: "Predictable Scale",
    desc: "Local SEO optimization to capture high-intent search traffic, paired with automated guest retention loops to turn past stays into lifetime revenue"
  }
];

// Полоса сравнения над карточками — единственное место, где на странице
// проговаривается «было → стало»
const DEFAULT_CMP_NOW = [
  "Rates and availability updated by hand, around the clock",
  "15–20% of every booking goes to the platform",
  "Every guest arrives through a channel you don't own"
];

const DEFAULT_CMP_AFTER = [
  "One inventory grid, synced across 300+ channels",
  "Direct bookings at zero commission, forever",
  "Your own search traffic and returning guests"
];

const renderFormattedText = (text: string) => {
  if (!text) return null;

  const processed = text
    .replace(/Agoda & 300\+ OTAs/g, 'Agoda <span class="nobr">& 300+ OTAs</span>')
    .replace(/keep all revenue in-house/g, '<span class="nobr">keep all revenue in-house</span>')
    .replace(/past stays into lifetime revenue/g, '<span class="nobr">past stays into lifetime revenue</span>')
    .replace(/guest retention loops/g, '<span class="nobr">guest retention loops</span>');

  const parts = processed.split(/<span class="nobr">(.*?)<\/span>/g);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="nobr">
          {part}
        </span>
      );
    }
    return part;
  });
};

export default function ScalePractice({ t }: ScalePracticeProps) {
  const items = t?.scaleItems || DEFAULT_ITEMS;
  const subtitleText = t?.scaleSub || "Automate workflows so your team can focus on guest experience";
  const cmpNow: string[] = t?.scaleCmpNow || DEFAULT_CMP_NOW;
  const cmpAfter: string[] = t?.scaleCmpAfter || DEFAULT_CMP_AFTER;

  const renderSubtitle = (sub: string) => {
    const target = "so your team";
    if (sub.includes(target)) {
      const parts = sub.split(target);
      return (
        <>
          {parts[0]}
          <span className="sub-break">{target}{parts[1]}</span>
        </>
      );
    }
    return sub;
  };

  return (
    <section id="how-it-works" className="scale-section">
      <style jsx>{`
        .scale-section {
          width: 100%;
          padding: 3rem 0 3.5rem 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .scale-header {
          text-align: center;
          margin-bottom: 3.5rem; 
        }

        .scale-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .scale-subtitle {
          color: ${T.sub};
          font-size: 1.05rem;
          line-height: 1.5;
          margin: 0 auto;
          max-width: 900px;
          white-space: nowrap;
        }

        :global(.sub-break) {
          display: inline;
        }

        /* ---- ПОЛОСА СРАВНЕНИЯ ----
           Единственный брейкпоинт полосы — 760px, и все её правила собраны
           здесь: остальная секция ломается на 767/768, и если смешать сетки,
           в диапазоне 760–767px обе раскладки применяются разом. */
        .cmp {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }

        .cmp-col {
          background: #101214;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 22px;
          min-width: 0;
        }

        .cmp-col.now {
          background: #0B0C0D;
        }

        .cmp-col.after {
          border-color: rgba(110, 231, 168, 0.22);
        }

        .cmp-h {
          font-size: 10.5px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        .cmp-h.now {
          color: #5A6069;
        }

        .cmp-h.after {
          color: ${T.mint};
        }

        .cmp-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cmp-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 14.5px;
          line-height: 1.45;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          text-wrap: pretty;
        }

        .cmp-list li:last-child {
          border-bottom: none;
        }

        .cmp-col.now .cmp-list li {
          color: #7B818A;
        }

        .cmp-col.after .cmp-list li {
          color: #F2F4F6;
          font-weight: 500;
        }

        .mk {
          flex: none;
          width: 16px;
          text-align: center;
          line-height: 1.45;
        }

        .cmp-col.now .mk {
          color: #41464D;
        }

        .cmp-col.after .mk {
          color: ${T.mint};
        }

        .cmp-mid {
          display: none;
        }

        /* Мобилка: колонки друг под другом, серая сверху, стрелка скрыта */
        @media (max-width: 759px) {
          .cmp {
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
          }
          .cmp-col {
            padding: 18px 16px;
          }
          .cmp-list li {
            font-size: 14px;
          }
        }

        /* Десктоп: две равные колонки, сшитые круглой стрелкой по стыку */
        @media (min-width: 760px) {
          .cmp {
            grid-template-columns: 1fr auto 1fr;
            gap: 0;
            align-items: stretch;
          }
          /* Внутренние границы убраны — полоса читается как единый элемент */
          .cmp-col.now {
            border-radius: 16px 0 0 16px;
            border-right: none;
          }
          .cmp-col.after {
            border-radius: 0 16px 16px 0;
            border-left: none;
          }
          /* Пункты выравниваются попарно: строка держит высоту двух строк
             текста плюс вертикальные паддинги, поэтому однострочный пункт не
             сдвигает соседний столбец */
          .cmp-list li {
            min-height: calc(2.9em + 22px);
          }
          .cmp-mid {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 52px;
            position: relative;
            z-index: 2;
          }
          .cmp-arrow {
            width: 38px;
            height: 38px;
            border-radius: 99px;
            background: ${T.bg0};
            border: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${T.mint};
            font-size: 15px;
            line-height: 1;
          }
        }

        /* Нижний край двухколоночной раскладки: колонка сужается до ~330px, и
           самый длинный пункт (русский) уходит в третью строку — кегль на
           полпункта мельче возвращает его в две, сохраняя парность строк */
        @media (min-width: 760px) and (max-width: 899px) {
          .cmp-col {
            padding: 20px 18px;
          }
          .cmp-list li {
            font-size: 13.5px;
          }
        }

        .scale-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }

        .scale-card {
          position: relative;
          isolation: isolate;
          -webkit-tap-highlight-color: transparent;
          background: 
            radial-gradient(
              circle at 50% 120px,
              rgba(0, 229, 153, 0.14) 0%,
              rgba(0, 163, 255, 0.03) 45%,
              rgba(255, 255, 255, 0.01) 75%
            );
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .scale-card:hover {
          border-color: rgba(0, 229, 153, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px -10px rgba(0, 229, 153, 0.12);
          background: 
            radial-gradient(
              circle at 50% 120px,
              rgba(0, 229, 153, 0.18) 0%,
              rgba(0, 163, 255, 0.05) 50%,
              rgba(255, 255, 255, 0.015) 80%
            );
        }

        .card-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
          padding: 2.25rem 2rem 2rem;
        }

        .image-wrapper {
          width: 100%;
          height: 140px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          margin-bottom: 1.25rem;
        }

        :global(.visual-asset) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          display: block;
          mix-blend-mode: screen; 
          transform: translateZ(0);
          will-change: transform, filter;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          filter: contrast(1.18) brightness(1.08) drop-shadow(0 0 20px rgba(0, 229, 153, 0.22));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .scale-card:hover :global(.visual-asset) {
          transform: scale(1.06) translateZ(0);
          filter: contrast(1.2) brightness(1.12) drop-shadow(0 0 30px rgba(0, 229, 153, 0.4));
        }

        .card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        .focus-metric {
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
          display: inline-block;
          line-height: 1.3;
        }

        .card-description {
          color: ${T.sub};
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 12px 0 0;
          text-wrap: pretty;
          text-align: center;
        }

        :global(.nobr) {
          white-space: nowrap;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .scale-section {
            padding: 2.5rem 0 3rem 0;
          }
          .scale-header {
            margin-bottom: 2.5rem;
          }
          .scale-title {
            font-size: 2rem;
          }
          .scale-subtitle {
            font-size: 0.95rem;
            max-width: 100%;
            white-space: nowrap;
          }
          .scale-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.85rem;
          }
          .card-body {
            padding: 1.5rem 0.85rem 1.25rem;
          }
          .image-wrapper {
            height: 100px;
            margin-bottom: 0.85rem;
          }
          .focus-metric {
            font-size: 1.15rem;
          }
          .card-description {
            font-size: 0.85rem;
            line-height: 1.45;
          }
        }

        @media (max-width: 767px) {
          .scale-section {
            padding: 2.25rem 0 2.75rem 0;
          }
          .scale-header {
            margin-bottom: 2.25rem;
          }
          .scale-title {
            font-size: 1.75rem;
          }
          .scale-subtitle {
            font-size: 0.95rem;
            max-width: 100%;
            white-space: normal;
          }
          :global(.sub-break) {
            display: block;
            margin-top: 0.25rem;
          }
          .scale-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            max-width: 480px;
            margin: 0 auto;
          }
          .card-body {
            padding: 1.85rem 1.25rem 1.5rem;
          }
          .image-wrapper {
            height: 120px;
          }
        }
      `}</style>

      <div className="container">
        <div className="scale-header">
          <h2 className="scale-title">{t?.scaleTitle || "Scale your property bookings"}</h2>
          <p className="scale-subtitle">
            {renderSubtitle(subtitleText)}
          </p>
        </div>

        <div className="cmp">
          <div className="cmp-col now">
            <p className="cmp-h now">{t?.scaleCmpNowLabel || "WITHOUT A DIRECT SYSTEM"}</p>
            <ul className="cmp-list">
              {cmpNow.map((line, i) => (
                <li key={i}>
                  <span className="mk" aria-hidden="true">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cmp-mid" aria-hidden="true">
            <div className="cmp-arrow">→</div>
          </div>

          <div className="cmp-col after">
            <p className="cmp-h after">{t?.scaleCmpAfterLabel || "WITH FT AGENCY"}</p>
            <ul className="cmp-list">
              {cmpAfter.map((line, i) => (
                <li key={i}>
                  <span className="mk" aria-hidden="true">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="scale-grid">
          {items.map((item: any, idx: number) => {
            const metricTitle = item.endValue
              ? `${item.endValue}${item.suffix || ''}${item.fixText || ''}`
              : item.title || "";
            
            return (
              <div className="scale-card" key={idx}>
                <div className="card-body">
                  <div className="image-wrapper">
                    <Image 
                      src={CARD_ASSETS[idx] || CARD_ASSETS[0]} 
                      alt={`${metricTitle} visual`} 
                      className="visual-asset"
                      width={280}
                      height={140}
                    />
                  </div>

                  <div className="card-content">
                    <h3
                      className="focus-metric"
                      style={{ backgroundImage: TITLE_GRADIENTS[idx % TITLE_GRADIENTS.length] }}
                    >
                      {metricTitle}
                    </h3>

                    <p className="card-description">
                      {renderFormattedText(item.desc)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
