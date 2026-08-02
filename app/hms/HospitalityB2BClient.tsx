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
        <LogoMarquee />
        <ScalePractice t={t} />
        <About t={t} />
        <Pricing t={t} />
        <FAQ t={t} />
        <FooterCTA t={t} />
      </main>
    </div>
  );
}
