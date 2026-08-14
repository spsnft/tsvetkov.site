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
    pain: "Updating rates and availability by hand, around the clock",
    endValue: "Instant Sync",
    desc: "Cloud PMS & Channel Manager integration. Every reservation instantly locks your inventory grid across Booking.com, Agoda & 300+ OTAs"
  },
  {
    pain: "15–20% of every booking goes to the platform",
    endValue: "100% Direct Revenue",
    desc: "Zero-commission booking engine with a secure payment gateway. Process bookings on your own terms and keep all revenue in-house"
  },
  {
    pain: "Every guest arrives through a channel you don't control",
    endValue: "Predictable Scale",
    desc: "Local SEO optimization to capture high-intent search traffic, paired with automated guest retention loops to turn past stays into lifetime revenue"
  }
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
  const nowLabel = t?.scaleNowLabel || 'NOW';
  const subtitleText = t?.scaleSub || "Automate workflows so your team can focus on guest experience";

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

        /* Панель «сейчас» — утопленная в карточку, отделена границей и
           стрелкой перехода к решению */
        .now-panel {
          position: relative;
          width: 100%;
          box-sizing: border-box;
          background: #0B0C0D;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px 16px 0 0;
          padding: 16px 20px 18px;
          text-align: left;
        }

        .now-label {
          margin: 0 0 0.4rem 0;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #4E545C;
        }

        .now-text {
          margin: 0;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.4;
          color: #7B818A;
          text-wrap: pretty;
        }

        .now-arrow {
          position: absolute;
          left: 50%;
          bottom: -13px;
          transform: translateX(-50%);
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #101215;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: ${T.mint};
          font-size: 12px;
          line-height: 1;
          z-index: 1;
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
          gap: 0.75rem;
          align-items: center;
          text-align: center;
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
          margin: 0;
          text-wrap: pretty;
          text-align: center;
        }

        :global(.nobr) {
          white-space: nowrap;
        }

        /* В сетке 3-в-ряд панели должны быть одной высоты, иначе иконки
           и заголовки карточек разъезжаются по вертикали */
        @media (min-width: 768px) {
          .now-text {
            min-height: 2.8em;
          }
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
          .now-panel {
            padding: 12px 14px 14px;
          }
          .now-text {
            font-size: 12.5px;
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

        <div className="scale-grid">
          {items.map((item: any, idx: number) => {
            const metricTitle = item.endValue
              ? `${item.endValue}${item.suffix || ''}${item.fixText || ''}`
              : item.title || "";
            
            return (
              <div className="scale-card" key={idx}>
                {item.pain && (
                  <div className="now-panel">
                    <p className="now-label">{nowLabel}</p>
                    <p className="now-text">{item.pain}</p>
                    <span className="now-arrow" aria-hidden="true">↓</span>
                  </div>
                )}

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
