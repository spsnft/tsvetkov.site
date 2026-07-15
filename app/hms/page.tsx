'use client';

import React, { useState } from 'react';
import { T } from '../../src/theme/tokens';
import { Logo } from '../../src/ui/Logo';
import { contentData } from './types';
import B2BAccordion from './components/B2BAccordion';

export default function HospitalityB2B() {
  const [lang, setLang] = useState<'en' | 'th'>('en');
  const t = contentData[lang];

  return (
    <div style={{ backgroundColor: T.bg0, color: '#fff', minHeight: '100vh', paddingBottom: '6rem', overflow: 'hidden', position: 'relative' }}>
      
      {/* BACKGROUND BLUR EFFECTS */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, opacity: 0.4, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: '350px', height: '350px', background: T.glow, filter: 'blur(100px)', borderRadius: '50%', animation: 'float-a 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: '450px', height: '450px', background: T.glow2, filter: 'blur(120px)', borderRadius: '50%', animation: 'float-b 14s ease-in-out infinite' }} />
      </div>

      {/* HEADER */}
      <header style={{ borderBottom: `1px solid ${T.border}`, backdropFilter: 'blur(16px)', position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(10, 10, 12, 0.7)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none' }}><Logo /></a>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
            <div style={{ display: 'flex', backgroundColor: T.bg1, border: `1px solid ${T.border}`, borderRadius: '4px', overflow: 'hidden' }}>
              <button onClick={() => setLang('en')} style={{ padding: '0.4rem 0.8rem', backgroundColor: lang === 'en' ? T.accent : 'transparent', color: lang === 'en' ? T.bg0 : T.sub, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}>EN</button>
              <button onClick={() => setLang('th')} style={{ padding: '0.4rem 0.8rem', backgroundColor: lang === 'th' ? T.accent : 'transparent', color: lang === 'th' ? T.bg0 : T.sub, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}>TH</button>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '8rem 0 5rem 0', textAlign: 'center' }}>
          <span style={{ color: T.acc2, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', fontWeight: 700 }}>{t.badge}</span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginTop: '1.5rem', marginBottom: '2rem' }}>{t.heroTitle}</h1>
          <div style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', maxWidth: '850px', margin: '0 auto 3.5rem auto', lineHeight: 1.4 }}>
            <p style={{ color: T.body, margin: 0 }}>{t.heroSub1}</p>
            <p style={{ color: T.accent, margin: '0.5rem 0 0 0', fontWeight: 700 }}>{t.heroSub2}</p>
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#2cb742', color: '#fff', padding: '1.1rem 2.2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '1.4rem' }} /> {t.btnChat}
            </a>
            <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#06C755', color: '#fff', padding: '1.1rem 2.2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              <i className="fab fa-line" style={{ fontSize: '1.4rem' }} /> {t.btnLine}
            </a>
          </div>
        </section>

        {/* DECOUPLED CORE ACCORDION MODULE */}
        <B2BAccordion tabs={t.tabs} title={t.problemTitle} />

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* PRICING PLANS */}
        <section style={{ padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>{t.priceTitle}</h2>
            <p style={{ color: T.sub }}>{t.priceSub}</p>
          </div>
          <div className="cases-grid">
            {/* LITE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.muted}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: T.muted, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier1Title}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>$500</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier1Desc}</p>
              <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
                <li>{t.tier1F1}</li><li>{t.tier1F2}</li><li>{t.tier1F3}</li><li>{t.tier1F4}</li>
              </ul>
            </div>
            {/* STANDARD */}
            <div style={{ backgroundColor: T.bg1, border: `2px solid ${T.accent}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: `0 0 40px ${T.glow}` }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: T.accent, color: T.bg0, padding: '2px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800 }}>POPULAR</div>
              <span style={{ color: T.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier2Title}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>$1,200</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier2Desc}</p>
              <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
                <li>{t.tier2F1}<span style={{ color: T.muted, fontWeight: 700 }}>{t.tier2F1Badge}</span></li>
                <li>{t.tier2F2}</li><li>{t.tier2F3}</li><li>{t.tier2F4}</li>
              </ul>
            </div>
            {/* ENTERPRISE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.acc2}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: T.acc2, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier3Title}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>Custom</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier3Desc}</p>
              <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
                <li>{t.tier3F1}<span style={{ color: T.accent, fontWeight: 700 }}>{t.tier3F1Badge}</span></li>
                <li>{t.tier3F2}</li><li>{t.tier3F3}</li><li>{t.tier3F4}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OFFSHORE ARCHITECT DESCRIPTION */}
        <section style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '4rem 3rem', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t.aboutTitle}</h2>
          <p style={{ color: T.body, lineHeight: 1.7, maxWidth: '750px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem' }}>{t.aboutDesc}</p>
          <a href="/" style={{ border: `1px solid ${T.border}`, color: '#fff', padding: '0.9rem 2.2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>{t.aboutBtn}</a>
        </section>

        {/* CALENDLY INTEGRATION */}
        <section style={{ textAlign: 'center', padding: '8rem 0 4rem 0' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em' }}>{t.footerTitle}</h2>
          <a href="https://calendly.com/fedor_tsvetkov/30min" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: T.accent, color: T.bg0, padding: '1.3rem 3.5rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', display: 'inline-block', boxShadow: `0 0 40px ${T.glow}`, fontSize: '1.1rem' }}>{t.footerBtn}</a>
        </section>

      </main>

      {/* Global CSS Compatibility layer */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
