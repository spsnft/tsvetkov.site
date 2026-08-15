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
    replaces: "Replaces manual rate updates, around the clock",
    endValue: "Instant Sync",
    desc: "Cloud PMS & Channel Manager integration. Every reservation instantly locks your inventory grid across Booking.com, Agoda & 300+ OTAs"
  },
  {
    replaces: "Replaces 15–20% platform commission on every booking",
    endValue: "100% Direct Revenue",
    desc: "Zero-commission booking engine with a secure payment gateway. Process bookings on your own terms and keep all revenue in-house"
  },
  {
    replaces: "Replaces dependency on channels you don't control",
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
  const replacesWord = t?.scaleReplacesWord || 'Replaces';
  const subtitleText = t?.scaleSub || "Automate workflows so your team can focus on guest experience";

  // Первое слово строки («Replaces» и его переводы) выделяется цветом
  const renderReplaces = (text: string) => {
    if (!text.startsWith(replacesWord)) return text;
    return (
      <>
        <span className="replaces-word">{replacesWord}</span>
        {text.slice(replacesWord.length)}
      </>
    );
  };

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

        /* Что заменяет решение — одна строка под заголовком, вместо панели «сейчас» */
        .replaces-line {
          margin: 10px 0 14px;
          font-size: 13px;
          line-height: 1.45;
          font-weight: 400;
          color: #868C95;
          text-align: center;
          text-wrap: pretty;
        }

        :global(.replaces-word) {
          color: #6EE7A8;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .replaces-divider {
          width: 48px;
          height: 1px;
          margin: 0 auto 14px;
          background: rgba(255, 255, 255, 0.07);
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
          .replaces-line {
            font-size: 12px;
            margin: 8px 0 12px;
          }
          .replaces-divider {
            margin-bottom: 12px;
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

                    {item.replaces && (
                      <>
                        <p className="replaces-line">{renderReplaces(item.replaces)}</p>
                        <span className="replaces-divider" aria-hidden="true" />
                      </>
                    )}

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
