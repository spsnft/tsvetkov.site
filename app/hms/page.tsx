'use client';

import React, { useState } from 'react';
import { T } from '../../src/theme/tokens';
import { Logo } from '../../src/ui/Logo';
import { NetworkBackground } from '../../src/components/NetworkBackground';

// Импорт констант и словарей перевода
import { contentData } from './constants';

// Импорт изолированных компонентов секций
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import BentoGrid from './components/BentoGrid';
import ScalePractice from './components/ScalePractice';
import Pricing from './components/Pricing';
import About from './components/About';
import FooterCTA from './components/FooterCTA';

export default function HospitalityB2B() {
  const [lang, setLang] = useState<'en' | 'th'>('en');
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
      
      {/* ЭФФЕКТНЫЙ ФОН С ОСНОВНОГО САЙТА */}
      <NetworkBackground />

      {/* ШАПКА САЙТА (STICKY HEADER) */}
      <header style={{ 
        borderBottom: `1px solid ${T.border}`, 
        backdropFilter: 'blur(16px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100, 
        backgroundColor: 'rgba(10, 10, 12, 0.7)' 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none' }}><Logo /></a>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
            
            {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ */}
            <div style={{ display: 'flex', backgroundColor: T.bg1, border: `1px solid ${T.border}`, borderRadius: '4px', overflow: 'hidden' }}>
              <button 
                onClick={() => setLang('en')} 
                style={{ 
                  padding: '0.4rem 0.8rem', 
                  backgroundColor: lang === 'en' ? T.accent : 'transparent', 
                  color: lang === 'en' ? T.bg0 : T.sub, 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontWeight: 700, 
                  fontSize: '0.75rem' 
                }}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('th')} 
                style={{ 
                  padding: '0.4rem 0.8rem', 
                  backgroundColor: lang === 'th' ? T.accent : 'transparent', 
                  color: lang === 'th' ? T.bg0 : T.sub, 
                  border: 'none', 
                  cursor: 'pointer', 
                  fontWeight: 700, 
                  fontSize: '0.75rem' 
                }}
              >
                TH
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ ЛЕНДИНГА */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        
        {/* БЛОК 1: ПЕРВЫЙ ЭКРАН */}
        <Hero t={t} />

        {/* БЛОК 1.5: БЕГУЩАЯ СТРОКА ЛОГОТИПОВ */}
        <LogoMarquee />

        {/* БЛОК 2: БОЛИ + РЕШЕНИЯ (СЧЕТЧИКИ) */}
        <BentoGrid t={t} />

        {/* БЛОК 3: НАШИ ИНТЕГРАЦИИ В СТИЛЕ CLARION */}
        <ScalePractice t={t} />

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* БЛОК 4: ТАРИФНЫЕ ПЛАНЫ */}
        <Pricing t={t} />

        {/* БЛОК 5: О СЕБЕ / ПАРТНЕРЕ */}
        <About t={t} />

        {/* БЛОК 6: ПРИЗЫВ К ДЕЙСТВИЮ (CALENDLY) */}
        <FooterCTA t={t} />

      </main>
    </div>
  );
}
