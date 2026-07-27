'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useDictionary } from '@/src/locales/getDictionary';
import { Nav } from '@/src/components/Nav';
import { Hero } from '@/src/components/Hero';
import { Bottleneck } from '@/src/components/Bottleneck';
import { Expertise } from '@/src/components/Expertise';
import { Services } from '@/src/components/Services';
import { CaseStudies } from '@/src/components/CaseStudies';
import { Contact } from '@/src/components/Contact';

// Динамический импорт холста с частицами без SSR
const NetworkBackground = dynamic(
  () => import('@/src/components/NetworkBackground').then((mod) => mod.NetworkBackground),
  { ssr: false }
);

interface TsvetkovB2CProps {
  lang: string;
}

export default function TsvetkovB2C({ lang }: TsvetkovB2CProps) {
  const dict = useDictionary(lang);

  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <NetworkBackground />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Nav lang={lang} dict={dict} />
        <Hero dict={dict} />
        <Bottleneck lang={lang} />
        <Expertise dict={dict} />
        <Services dict={dict} />
        <CaseStudies />
        <Contact dict={dict} />
      </div>
    </main>
  );
}
