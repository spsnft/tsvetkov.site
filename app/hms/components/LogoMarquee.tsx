'use client';

import React from 'react';

export default function LogoMarquee() {
  // Пути к файлам (Next.js автоматически берет их из корневой папки public)
  // Имена файлов точно соответствуют твоему скриншоту
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
          animation: scroll 35s linear infinite; /* Чуть замедлили, так как логотипов стало больше */
     .logo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  /* Убрали фильтр инверсии. Оставляем родные цвета, но деликатно гасим их */
  opacity: 0.35; 
}
.logo-item:hover {
  transform: scale(1.03);
  opacity: 0.9; /* При наведении логотип плавно загорается своим родным цветом */
}
: brightness(0) invert(1);
          opacity: 0.3;
        }
        .logo-item:hover {
          transform: scale(1.05);
          opacity: 0.6;
        }
        .marquee-img {
          height: 24px;
          width: auto;
          display: block;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>

      {/* Троекратное дублирование массива для идеального зацикливания */}
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
