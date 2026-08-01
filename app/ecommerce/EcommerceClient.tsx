'use client';

import React from 'react';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';
import { NetworkBackground } from '@/src/components/NetworkBackground';
import { contentData } from './constants';

import Hero from './components/Hero';
import PainSolution from './components/PainSolution';
import Proof from './components/Proof';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';

const LANGS = ['en', 'ru', 'th'] as const;
type Lang = (typeof LANGS)[number];

export default function EcommerceClient({ lang }: { lang: Lang }) {
  const t = contentData[lang];

  return (
    <div
      style={{
        backgroundColor: T.bg0,
        color: '#fff',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <NetworkBackground />

      <header
        style={{
          borderBottom: `1px solid ${T.border}`,
          backdropFilter: 'blur(16px)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'rgba(10, 10, 12, 0.7)',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </Link>

          <div
            style={{
              display: 'flex',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '30px',
              padding: '2px',
              backdropFilter: 'blur(8px)',
              gap: '2px',
            }}
          >
            {LANGS.map((l) => (
              <Link
                key={l}
                href={`/${l}/ecommerce`}
                style={{
                  padding: '0.35rem 0.85rem',
                  backgroundColor: lang === l ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  color: lang === l ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                  border: lang === l ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                  borderRadius: '26px',
                  boxShadow: lang === l ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                }}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <main style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        <Hero t={t} />
        <PainSolution t={t} />
        <Proof t={t} />
        <FAQ t={t} />
        <FooterCTA t={t} />
      </main>
    </div>
  );
}
