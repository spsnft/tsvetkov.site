'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface HeroProps {
  t: {
    badge: string;
    heroTitle: string;
    heroSub1: string;
    heroSub2: string;
    btnChat: string;
    btnLine: string;
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section style={{ padding: '8rem 0 5rem 0', textAlign: 'center', position: 'relative', zIndex: 10 }}>
      {/* BADGE */}
      <span style={{ 
        color: T.acc2, 
        textTransform: 'uppercase', 
        letterSpacing: '0.2em', 
        fontSize: '0.75rem', 
        fontWeight: 700 
      }}>
        {t.badge}
      </span>

      {/* MAIN TITLE */}
      <h1 style={{ 
        fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', 
        fontWeight: 700, 
        lineHeight: 1.05, 
        letterSpacing: '-0.03em', 
        marginTop: '1.5rem', 
        marginBottom: '2rem',
        color: '#fff'
      }}>
        {t.heroTitle}
      </h1>

      {/* SUBTITLES */}
      <div style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', maxWidth: '850px', margin: '0 auto 3.5rem auto', lineHeight: 1.4 }}>
        <p style={{ color: T.body, margin: 0 }}>{t.heroSub1}</p>
        <p style={{ color: T.accent, margin: '0.5rem 0 0 0', fontWeight: 700 }}>{t.heroSub2}</p>
      </div>

      {/* CTA BUTTONS */}
      <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a 
          href="https://wa.me/66955183783" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: '#2cb742', 
            color: '#fff', 
            padding: '1.1rem 2.2rem', 
            borderRadius: '6px', 
            fontWeight: 700, 
            textDecoration: 'none', 
            fontSize: '1rem' 
          }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '1.4rem' }} /> {t.btnChat}
        </a>
        <a 
          href="https://line.me/ti/p/~fedor_tsvetkov" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: '#06C755', 
            color: '#fff', 
            padding: '1.1rem 2.2rem', 
            borderRadius: '6px', 
            fontWeight: 700, 
            textDecoration: 'none', 
            fontSize: '1rem' 
          }}
        >
          <i className="fab fa-line" style={{ fontSize: '1.4rem' }} /> {t.btnLine}
        </a>
      </div>
    </section>
  );
}
