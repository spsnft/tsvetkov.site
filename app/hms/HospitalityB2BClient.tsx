'use client';

import React from 'react';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';
import { NetworkBackground } from '@/src/components/NetworkBackground';
import { contentData } from './constants';

import Hero from './components/Hero';
import IndustryProof from './components/IndustryProof';
import LogoMarquee from './components/LogoMarquee';
import ScalePractice from './components/ScalePractice';
import About from './components/About';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';

export default function HospitalityB2BClient({ lang }: { lang: 'en' | 'th' }) {
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

      <header style={{ 
        borderBottom: `1px solid ${T.border}`, 
        backdropFilter: 'blur(16px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100, 
        backgroundColor: 'rgba(10, 10, 12, 0.7)' 
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <Link href="/" style={{ textDecoration: 'none' }}><Logo /></Link>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</Link>
            
            {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ В СТИЛЕ DARK GLASS CAPSULE (NEXT.JS ROUTER) */}
            <div style={{ 
              display: 'flex', 
              backgroundColor: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '30px', 
              padding: '2px',
              backdropFilter: 'blur(8px)',
              gap: '2px'
            }}>
              <Link 
                href="/en/hms" 
                style={{ 
                  padding: '0.35rem 0.85rem', 
                  backgroundColor: lang === 'en' ? 'rgba(255, 255, 255, 0.08)' : 'transparent', 
                  color: lang === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.4)', 
                  border: lang === 'en' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                  borderRadius: '26px',
                  boxShadow: lang === 'en' ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none',
                  textDecoration: 'none',
                  fontWeight: 700, 
                  fontSize: '0.75rem',
                  transition: 'all 0.2s ease',
                  display: 'inline-block'
                }}
              >
                EN
              </Link>
              <Link 
                href="/th/hms" 
                style={{ 
                  padding: '0.35rem 0.85rem', 
                  backgroundColor: lang === 'th' ? 'rgba(255, 255, 255, 0.08)' : 'transparent', 
                  color: lang === 'th' ? '#ffffff' : 'rgba(255, 255, 255, 0.4)', 
                  border: lang === 'th' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                  borderRadius: '26px',
                  boxShadow: lang === 'th' ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none',
                  textDecoration: 'none',
                  fontWeight: 700, 
                  fontSize: '0.75rem',
                  transition: 'all 0.2s ease',
                  display: 'inline-block'
                }}
              >
                TH
              </Link>
            </div>
          </div>
        </div>
      </header>

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
