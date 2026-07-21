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
import ScalePractice from './components/ScalePractice';
import IndustryProof from './components/IndustryProof';
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
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem' }}>
          <a href="/" style={{ textDecoration: 'none' }}><Logo /></a>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
            
            {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ В СТИЛЕ DARK GLASS CAPSULE */}
            <div style={{ 
              display: 'flex', 
              backgroundColor: 'rgba(255, 255, 255, 0.02)', 
              border: '1px solid rgba(255, 255, 255, 0.05)', 
              borderRadius: '30px', 
              padding: '2px',
              backdropFilter: 'blur(8px)',
              gap: '2px'
            }}>
              <button 
                onClick={() => setLang('en')} 
                style={{ 
                  padding: '0.35rem 0.85rem', 
                  backgroundColor: lang === 'en' ? 'rgba(255, 255, 255, 0.08)' : 'transparent', 
                  color: lang === 'en' ? '#ffffff' : 'rgba(255, 255, 255, 0.4)', 
                  border: lang === 'en' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                  borderRadius: '26px',
                  boxShadow: lang === 'en' ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none',
                  cursor: 'pointer', 
                  fontWeight: 700, 
                  fontSize: '0.75rem',
                  transition: 'all 0.2s ease'
                }}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('th')} 
                style={{ 
                  padding: '0.35rem 0.85rem', 
                  backgroundColor: lang === 'th' ? 'rgba(255, 255, 255, 0.08)' : 'transparent', 
                  color: lang === 'th' ? '#ffffff' : 'rgba(255, 255, 255, 0.4)', 
                  border: lang === 'th' ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid transparent',
                  borderRadius: '26px',
                  boxShadow: lang === 'th' ? '0 2px 8px rgba(0, 0, 0, 0.4)' : 'none',
                  cursor: 'pointer', 
                  fontWeight: 700, 
                  fontSize: '0.75rem',
                  transition: 'all 0.2s ease'
                }}
              >
                TH
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ОСНОВНОЙ КОНТЕНТ ЛЕНДИНГА (Теперь без сжимающего maxWidth) */}
      <main style={{ width: '100%', position: 'relative', zIndex: 10 }}>
        
        {/* БЛОК 1: ПЕРВЫЙ ЭКРАН */}
        <Hero t={t} />

        {/* БЛОК 1.5: БЕГУЩАЯ СТРОКА ЛОГОТИПОВ */}
        <LogoMarquee />

        {/* БЛОК 2: НАШ ОБЪЕДИНЕННЫЙ ГИБРИДНЫЙ БЛОК */}
        <ScalePractice t={t} />

        {/* БЛОК 3: ОТРАСЛЕВЫЕ МЕТРИКИ И ДОКАЗАТЕЛЬСТВА */}
        <IndustryProof t={t} />

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
