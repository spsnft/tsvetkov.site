'use client';

import React from 'react';
import { useDictionary } from '@/src/locales/getDictionary';

const RED_ACCENT = '#FF5555';

type BottleneckProps = {
  lang?: string;
};

export const Bottleneck = ({ lang = 'en' }: BottleneckProps) => {
  const dict = useDictionary(lang);

  // Пока словарь грузится — рендерим скелетон той же высоты, чтобы не было скачков
  if (!dict) {
    return (
      <section className="bottleneck-section" style={{ width: '100%', position: 'relative', padding: '1rem 0 clamp(3rem, 6vw, 6rem) 0', background: 'transparent' }}>
        <div className="container">
          <div className="header-box" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge" style={{ display: 'inline-block', padding: '0.35rem 0.85rem', borderRadius: 20, marginBottom: '1rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', background: 'rgba(255, 85, 85, 0.08)', border: '1px solid rgba(255, 85, 85, 0.25)', color: RED_ACCENT }}>&nbsp;</span>
            <h2 className="title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#ffffff', margin: 0 }}>&nbsp;</h2>
          </div>
          <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} className="card-matte" style={{ height: 320, borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: '#121214' }} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const t = dict.bottleneck;

  return (
    <section id="problems" className="bottleneck-section">
      <style jsx>{`
        .bottleneck-section {
          width: 100%;
          position: relative;
          padding: 1rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
        }

        .header-box {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .badge {
          display: inline-block;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(255, 85, 85, 0.08);
          border: 1px solid rgba(255, 85, 85, 0.25);
          color: ${RED_ACCENT};
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .card {
          position: relative;
          overflow: hidden;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card:hover {
          border-color: rgba(255, 85, 85, 0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 85, 85, 0.08);
        }

        .watermark {
          position: absolute;
          top: 10px;
          right: 18px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 85, 85, 0.06);
          pointer-events: none;
          user-select: none;
          z-index: 0;
          transition: color 0.25s ease;
        }

        .card:hover .watermark {
          color: rgba(255, 85, 85, 0.12);
        }

        .card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .tag-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: ${RED_ACCENT};
          text-transform: uppercase;
          background: rgba(255, 85, 85, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 85, 85, 0.2);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 2rem 0;
          text-wrap: pretty;
        }

        .highlight-text {
          color: #ffffff;
          font-weight: 600;
        }

        .impact-footer {
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .impact-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        .impact-value {
          color: ${RED_ACCENT};
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">{t.badge}</span>
          <h2 className="title">{t.title}</h2>
        </div>

        <div className="grid">
          {t.items.map((item: any, i: number) => (
            <div key={i} className="card-matte card">
              <div className="watermark">{item.num}</div>

              <div className="card-inner">
                <div>
                  <span className="tag-badge">{item.tag}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">
                    {item.descStart}
                    {item.descHighlight1 && (
                      <strong className="highlight-text">{item.descHighlight1}</strong>
                    )}
                    {item.descMiddle}
                    {item.descHighlight2 && (
                      <strong className="highlight-text">{item.descHighlight2}</strong>
                    )}
                    {item.descEnd}
                  </p>
                </div>

                <div className="impact-footer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={RED_ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                    <polyline points="17 18 23 18 23 12" />
                  </svg>
                  <span className="impact-label">
                    {t.impactLabel} <span className="impact-value">{item.impact}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bottleneck;
