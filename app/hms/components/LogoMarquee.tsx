'use client';

import React from 'react';

export default function LogoMarquee() {
  const logoSrcs = [
    // 1. Первые 4 согласно вашему указанию:
    '/logos/booking.svg',
    '/logos/airbnb.svg',
    '/logos/tripadvisor.svg',
    '/logos/agoda.svg',

    // 2. Все остальные логотипы:
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
          padding: 3rem 0;
          position: relative;
          background: linear-gradient(90deg, rgba(10,10,12,0) 0%, rgba(255,255,255,0.02) 50%, rgba(10,10,12,0) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          margin-bottom: 2rem;
          z-index: 20;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite; 
          gap: 5.5rem;
          align-items: center;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px; 
          transition: all 0.3s ease;
          opacity: 0.35; 
        }
        .logo-item:hover {
          transform: scale(1.03);
          opacity: 0.9; 
        }
        
        .marquee-img {
          height: 28px; 
          width: auto;
          max-width: 150px;
          object-fit: contain;
          display: block;
        }

        /* Оптическая калибровка под увеличенный формат */
        .marquee-img[src*="booking"] { height: 36px; }
        .marquee-img[src*="hostelworld"] { height: 19px; }
        .marquee-img[src*="hotelbeds"] { height: 19px; }
        .marquee-img[src*="tripadvisor"] { height: 33px; }
        .marquee-img[src*="agoda"] { height: 26px; }
        .marquee-img[src*="airbnb"] { height: 26px; }
        .marquee-img[src*="traveloka"] { height: 26px; }

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
