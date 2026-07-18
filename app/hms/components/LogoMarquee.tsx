'use client';

import React from 'react';

export default function LogoMarquee() {
  const logoSrcs = [
    '/logos/Booking.svg',
    '/logos/Agoda.svg',
    '/logos/AirBNB.svg',
    '/logos/Expedia.svg',
    '/logos/tripadvisor.svg',
    '/logos/Traveloka.svg',
    '/logos/Trip.com_logo.svg',
    '/logos/Makemytrip.svg',
    '/logos/Klook.svg',
    '/logos/Hotelbeds.svg',
    '/logos/Hostelworld.svg'
  ];

  return (
    <div className="marquee-wrapper">
      <style jsx>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 2.5rem 0;
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
          gap: 5rem;
          align-items: center;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        
        /* Жесткий контейнер-фрейм для идеального выравнивания по осям */
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 35px; 
          transition: all 0.3s ease;
          opacity: 0.35; 
        }
        .logo-item:hover {
          transform: scale(1.03);
          opacity: 0.9; 
        }
        
        /* Базовый размер для стандартных пропорций */
        .marquee-img {
          height: 22px;
          width: auto;
          max-width: 130px;
          object-fit: contain;
          display: block;
        }

        /* Оптическая калибровка веса (фиксируем разницу размеров без изменения файлов) */
        .marquee-img[src*="Booking"] { height: 27px; }
        .marquee-img[src*="Hostelworld"] { height: 15px; }
        .marquee-img[src*="Hotelbeds"] { height: 15px; }
        .marquee-img[src*="tripadvisor"] { height: 25px; }
        .marquee-img[src*="Agoda"] { height: 20px; }
        .marquee-img[src*="AirBNB"] { height: 20px; }
        .marquee-img[src*="Traveloka"] { height: 20px; }

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
