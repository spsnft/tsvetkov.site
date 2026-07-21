'use client';

import React from 'react';

export default function LogoMarquee() {
  const logoSrcs = [
    // 1. Первые 4:
    '/logos/booking.svg',
    '/logos/airbnb.svg',
    '/logos/tripadvisor.svg',
    '/logos/agoda.svg',

    // 2. Все остальные:
    '/logos/expedia.svg',
    '/logos/makemytrip.svg',
    '/logos/traveloka.svg',
    '/logos/hotelbeds.svg',
    '/logos/klook.svg',
    '/logos/trip.svg',
    '/logos/hostelworld.svg'
  ];

  return (
    <div className="marquee-wrapper">
      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 3.5rem 0;
          position: relative;
          background: linear-gradient(90deg, rgba(10,10,12,0) 0%, rgba(255,255,255,0.03) 50%, rgba(10,10,12,0) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-bottom: 2rem;
          z-index: 20;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite; 
          gap: 6rem;
          align-items: center;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 64px; /* Увеличено с 48px */
          transition: all 0.3s ease;
          opacity: 0.75; /* Увеличено с 0.35 для хорошей читаемости */
        }
        .logo-item:hover {
          transform: scale(1.05);
          opacity: 1; 
        }
        
        .marquee-img {
          height: 40px; /* Базовая высота увеличена с 28px до 40px */
          width: auto;
          max-width: 200px;
          object-fit: contain;
          display: block;
        }

        /* Оптическая калибровка (пропорционально увеличена) */
        .marquee-img[src*="booking"] { height: 52px; }
        .marquee-img[src*="hostelworld"] { height: 28px; }
        .marquee-img[src*="hotelbeds"] { height: 28px; }
        .marquee-img[src*="tripadvisor"] { height: 46px; }
        .marquee-img[src*="agoda"] { height: 36px; }
        .marquee-img[src*="airbnb"] { height: 36px; }
        .marquee-img[src*="traveloka"] { height: 36px; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      <div className="marquee-track">
        {[...logoSrcs, ...logoSrcs, ...logoSrcs].map((src, index) => (
          <div key={index} className="logo-item">
            <img 
              src={src} 
              alt="OTA Logo" 
              className="marquee-img"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
