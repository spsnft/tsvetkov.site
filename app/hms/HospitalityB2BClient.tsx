'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';
import { NetworkBackground } from '@/src/components/NetworkBackground';
import { Nav } from '@/src/components/Nav';
import { contentData } from './constants';

import Hero from './components/Hero';
import CalculatorSection from './components/CalculatorSection';
import LogoMarquee from './components/LogoMarquee';
import ScalePractice from './components/ScalePractice';
import About from './components/About';
import SeeSystem from './components/SeeSystem';
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
        <CalculatorSection t={t} />
        <LogoMarquee t={t} />
        <ScalePractice t={t} />
        <SeeSystem t={t} />
        <About t={t} lang={lang} />

        <Pricing t={t} lang={lang} />
        <FAQ t={t} lang={lang} />
        <FooterCTA t={t} />
      </main>
    </div>
  );
}
