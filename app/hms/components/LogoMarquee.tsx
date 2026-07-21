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
          overflow: hidden;
          padding: 1rem 0; /* Держим блок узким */
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
          gap: 5rem;
          align-items: center;
        }
        
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 72px; /* Контейнер под крупный размер */
          opacity: 0.85; /* Естественный цвет логотипов, слегка органично вписанный в темную тему */
        }
        
        .marquee-img {
          height: 58px; /* Сильно увеличенный базовый размер */
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
