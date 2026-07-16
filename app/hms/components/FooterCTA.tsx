'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface FooterCTAProps {
  t: {
    footerTitle: string;
    footerBtn: string;
  };
}

export default function FooterCTA({ t }: FooterCTAProps) {
  return (
    <section style={{ textAlign: 'center', padding: '8rem 0 4rem 0' }}>
      <h2 style={{ 
        fontSize: '2.8rem', 
        fontWeight: 700, 
        marginBottom: '3rem', 
        letterSpacing: '-0.02em', 
        color: '#fff' 
      }}>
        {t.footerTitle}
      </h2>
      <a 
        href="https://calendly.com/fedor_tsvetkov/30min" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          backgroundColor: T.accent, 
          color: T.bg0, 
          padding: '1.3rem 3.5rem', 
          borderRadius: '8px', 
          fontWeight: 800, 
          textDecoration: 'none', 
          display: 'inline-block', 
          boxShadow: `0 0 40px ${T.glow}`, 
          fontSize: '1.1rem' 
        }}
      >
        {t.footerBtn}
      </a>
    </section>
  );
}
