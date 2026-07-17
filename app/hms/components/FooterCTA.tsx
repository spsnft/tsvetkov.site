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
    <section style={{ 
      width: '100%', 
      borderTop: `1px solid ${T.border}`, 
      backgroundColor: 'transparent', 
      textAlign: 'center', 
      padding: '6rem 1.5rem 8rem 1.5rem',
      position: 'relative'
    }}>
      
      {/* Деликатный фоновый блик, дублирующий атмосферу главного экрана */}
      <div style={{ 
        position: 'absolute', 
        top: '0', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '400px', 
        height: '400px', 
        borderRadius: '50%', 
        background: `radial-gradient(circle, ${T.glow2} 0%, transparent 70%)`, 
        opacity: 0.6, 
        pointerEvents: 'none',
        zIndex: 1 
      }} />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Мощный заголовок-триггер */}
        <h2 style={{ 
          fontSize: '2.6rem', 
          fontWeight: 700, 
          marginBottom: '2.5rem', 
          letterSpacing: '-0.02em', 
          color: '#fff',
          lineHeight: 1.2
        }}>
          {t.footerTitle}
        </h2>

        {/* Высококонверсионная премиальная кнопка */}
        <a 
          href="https://calendly.com/fedor_tsvetkov/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-gradient-btn"
          style={{ 
            background: T.linearGradient, 
            color: '#0A0A0C', 
            padding: '1.1rem 3.5rem', 
            borderRadius: '8px', 
            fontWeight: 700, 
            fontSize: '1.05rem',
            textDecoration: 'none', 
            display: 'inline-block', 
            boxShadow: '0 10px 30px -10px rgba(0, 255, 179, 0.3)',
            transition: 'all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 40px -8px rgba(0, 255, 179, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0, 255, 179, 0.3)';
          }}
        >
          {t.footerBtn}
        </a>
      </div>
    </section>
  );
}
