'use client';

import React from 'react';
import { NetworkBackground } from '@/src/components/NetworkBackground';
import { Nav } from '@/src/components/Nav';
import { Hero } from '@/src/components/Hero';
import { Bottleneck } from '@/src/components/Bottleneck';
import { Expertise } from '@/src/components/Expertise';
import { Services } from '@/src/components/Services';
import { CaseStudies } from '@/src/components/CaseStudies';
import { Contact } from '@/src/components/Contact';

export default function TsvetkovB2C() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Единый неубиваемый интерактивный фон на весь сайт */}
      <NetworkBackground />

      {/* Контент слоями скользит поверх фона */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Nav />
        <Hero />
        <Bottleneck />
        <Expertise />
        <Services />
        <CaseStudies />
        <Contact />
      </div>
    </main>
  );
}
