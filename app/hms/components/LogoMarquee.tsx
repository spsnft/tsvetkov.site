'use client';

import React from 'react';
import Image from 'next/image';
import { T } from '../../../src/theme/tokens';

interface LogoMarqueeProps {
  t?: {
    marqueeLabel?: string;
  };
}

export default function LogoMarquee({ t }: LogoMarqueeProps) {
  const logoSrcs = [
    '/logos/booking.svg',
    '/logos/airbnb.svg',
    '/logos/tripadvisor.svg',
    '/logos/agoda.svg',
    '/logos/expedia.svg',
    '/logos/makemytrip.svg',
    '/logos/traveloka.svg',
    '/logos/hotelbeds.svg',
    '/logos/klook.svg',
    '/logos/trip.svg',
    '/logos/hostelworld.svg'
  ];

  return (
    <section className="marquee-block">
      <style jsx>{`
        /* Без своего отступа сверху — зазор до предыдущей секции уже
           задаёт её собственный нижний паддинг (calc-section), свой
           margin-top здесь задваивал бы разрыв */
        .marquee-block {
          width: 100%;
        }

        .marquee-label {
          margin: 0 0 1rem 0;
          text-align: center;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: ${T.sub};
          opacity: 0.8;
        }

        .marquee-wrapper {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          padding: 1.25rem 0;
          position: relative;
          background: linear-gradient(90deg, rgba(10,10,12,0) 0%, rgba(255,255,255,0.02) 50%, rgba(10,10,12,0) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          z-index: 20;

          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          width: fit-content;
          animation: scroll 35s linear infinite;
          gap: 5rem;
          align-items: center;
          will-change: transform;
        }

        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 72px;
          opacity: 0.85;
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @media (max-width: 768px) {
          .marquee-label {
            margin-bottom: 0.85rem;
            font-size: 0.68rem;
          }
          .marquee-wrapper {
            padding: 0.85rem 0;
          }
          .marquee-track {
            gap: 3.5rem;
          }
        }
      `}</style>

      {t?.marqueeLabel && (
        <div className="container">
          <p className="marquee-label">{t.marqueeLabel}</p>
        </div>
      )}

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...logoSrcs, ...logoSrcs, ...logoSrcs].map((src, index) => {
            // Вычисляем высоту для каждого логотипа (соответствует старым CSS-правилам)
            const getHeight = (s: string) => {
              if (s.includes('booking')) return 75;
              if (s.includes('hostelworld') || s.includes('hotelbeds')) return 42;
              if (s.includes('tripadvisor')) return 68;
              if (s.includes('agoda') || s.includes('airbnb') || s.includes('traveloka')) return 55;
              return 58;
            };
            const h = getHeight(src);

            return (
              <div key={index} className="logo-item">
                <Image
                  src={src}
                  alt="OTA Logo"
                  width={280}
                  height={h}
                  style={{ height: h, width: 'auto', maxWidth: 280, objectFit: 'contain' }}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
