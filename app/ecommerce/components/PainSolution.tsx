'use client';

import React from 'react';
import Image from 'next/image';
import { T } from '@/src/theme/tokens';
import { EcommerceContent } from '../constants';

const CARD_ASSETS = ['/assets/3d-data-cube.webp', '/assets/3d-gtm-prism.webp', '/assets/3d-ai-loop.webp'];

export default function PainSolution({ t }: { t: EcommerceContent }) {
  return (
    <section className="pain-section">
      <style jsx>{`
        .pain-section {
          width: 100%;
          padding: 0 0 clamp(3rem, 6vw, 5rem) 0;
        }

        .header-box {
          text-align: center;
          margin-bottom: ${T.section.titleGap};
        }

        .title {
          font-size: ${T.section.titleSize};
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          text-wrap: balance;
        }

        .subtitle {
          color: ${T.sub};
          font-size: 1.05rem;
          line-height: 1.5;
          margin: 0 auto;
          max-width: 640px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 991px) {
          .grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        .card {
          padding: 2rem 1.75rem 1.75rem 1.75rem;
          border-radius: 18px;
          background: rgba(12, 12, 16, 0.06);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          border: 1px solid ${T.accent15};
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: ${T.accent35};
        }

        .pain-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: ${T.red};
          background: ${T.red08};
          border: 1px solid ${T.red25};
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          margin-bottom: 1.25rem;
        }

        .image-wrapper {
          width: 100px;
          height: 100px;
          margin-bottom: 1.1rem;
          position: relative;
        }

        :global(.pain-asset) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.5));
        }

        .outcome {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 0.75rem 0;
          line-height: 1.3;
        }

        .desc {
          color: ${T.sub};
          font-size: 0.92rem;
          line-height: 1.55;
          margin: 0;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <h2 className="title">{t.scaleTitle}</h2>
          <p className="subtitle">{t.scaleSub}</p>
        </div>

        <div className="grid">
          {t.scaleItems.map((item, i) => (
            <div className="card" key={i}>
              <span className="pain-badge">{item.pain}</span>
              <div className="image-wrapper">
                <Image
                  src={CARD_ASSETS[i] || CARD_ASSETS[0]}
                  alt={item.outcome}
                  className="pain-asset"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="outcome">{item.outcome}</h3>
              <p className="desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
