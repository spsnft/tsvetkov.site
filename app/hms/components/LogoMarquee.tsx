'use client';

import React from 'react';

export default function LogoMarquee() {
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
    <div className="marquee-wrapper">
      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          max-width: 1200px; /* Строго выравниваем по каноничной сетке 1200px */
          margin: 0 auto;
          overflow: hidden;
          padding: 1rem 1.5rem;
          position: relative;
          background: linear-gradient(90deg, rgba(10,10,12,0) 0%, rgba(255,255,255,0.02) 50%, rgba(10,10,12,0) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          z-index: 20;

          /* Премиальный эффект мягкого растворения логотипов по краям сетки */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%);
        }
        
        .marquee-track {
          display: flex;
          width: max-content;
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
        }
        
        .marquee-img {
          height: 58px;
          width: auto;
          max-width: 280px;
          object-fit: contain;
          display: block;
        }

        /* Индивидуальная подгонка пропорций под крупный формат */
        .marquee-img[src*="booking"] { height: 75px; }
        .marquee-img[src*="hostelworld"] { height: 42px; }
        .marquee-img[src*="hotelbeds"] { height: 42px; }
        .marquee-img[src*="tripadvisor"] { height: 68px; }
        .marquee-img[src*="agoda"] { height: 55px; }
        .marquee-img[src*="airbnb"] { height: 55px; }
        .marquee-img[src*="traveloka"] { height: 55px; }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        @media (max-width: 768px) {
          .marquee-wrapper {
            padding: 0.75rem 1rem;
          }
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
