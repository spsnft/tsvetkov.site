'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';
import { NetworkBackground } from '@/src/components/NetworkBackground';
import { Nav } from '@/src/components/Nav';
import { contentData } from './constants';

import Hero from './components/Hero';
import IndustryProof from './components/IndustryProof';
import LogoMarquee from './components/LogoMarquee';
import ScalePractice from './components/ScalePractice';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';

export default function HospitalityB2BClient({ lang }: { lang: 'en' | 'ru' | 'th' }) {
  const t = contentData[lang];

  return (
    <div style={{
      backgroundColor: T.bg0,
      color: '#fff',
      minHeight: '100vh',
      paddingBottom: '6rem',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <NetworkBackground />

      <Nav lang={lang} dict={null} />

      <main style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <Hero t={t} />
        <IndustryProof t={t} />
        <LogoMarquee t={t} />
        <ScalePractice t={t} />
        <About t={t} />

        {/*
          ЗАРЕЗЕРВИРОВАНО ПОД ДЕМО-СТЕНД. На странице сейчас ничего не
          отображается: пока нет живого кейса, пустой слот только рекламирует
          его отсутствие. Раскомментировать, когда будут готовы ссылка и ролик;
          тексты заголовка и подписей завести в constants.ts на все три локали.

          <section id="demo" className="demo-section">
            <div className="container">
              -- Заголовок секции: t.demoTitle («See it working»)
              <h2 className="demo-title">{t.demoTitle}</h2>

              -- Ссылка на живую страницу бронирования, новой вкладкой
              <a
                className="demo-link"
                href="DEMO_BOOKING_URL"
                target="_blank"
                rel="noopener"
              >
                {t.demoLinkLabel}
              </a>

              -- Встроенное видео 60–90 сек: постер, без автоплея,
                 preload="none", чтобы не тянуть вес в первый экран
              <div className="demo-video">
                <video controls preload="none" poster="DEMO_POSTER_URL" playsInline>
                  <source src="DEMO_VIDEO_URL" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
        */}

        <Pricing t={t} />
        <FAQ t={t} />
        <FooterCTA t={t} />
      </main>
    </div>
  );
}
