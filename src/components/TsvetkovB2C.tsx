'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { getDictionary } from '@/src/locales/getDictionary';
import { Nav } from '@/src/components/Nav';
import { Hero } from '@/src/components/Hero';
import { Bottleneck } from '@/src/components/Bottleneck';
import { Expertise } from '@/src/components/Expertise';
import { Services } from '@/src/components/Services';
import { CaseStudies } from '@/src/components/CaseStudies';
import { Contact } from '@/src/components/Contact';

const NetworkBackground = dynamic(
  () => import('@/src/components/NetworkBackground').then((mod) => mod.NetworkBackground),
  { ssr: false }
);

interface TsvetkovB2CProps {
  lang: string;
  dict: ReturnType<typeof getDictionary>;
}

export default function TsvetkovB2C({ lang, dict }: TsvetkovB2CProps) {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      <NetworkBackground />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Nav lang={lang} dict={dict} />
        <Hero lang={lang} dict={dict} />
        <Bottleneck dict={dict} />
        <Expertise dict={dict} />
        <Services dict={dict} />
        <CaseStudies dict={dict} />
        <Contact dict={dict} />
      </div>
    </main>
  );
}
