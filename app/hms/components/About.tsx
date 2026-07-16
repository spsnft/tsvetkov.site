'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t: {
    aboutTitle: string;
    aboutDesc: string;
    aboutBtn: string;
  };
}

export default function About({ t }: AboutProps) {
  return (
    <section style={{ 
      backgroundColor: T.bg1, 
      border: `1px solid ${T.border}`, 
      padding: '4rem 3rem', 
      borderRadius: '12px', 
      textAlign: 'center' 
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>
        {t.aboutTitle}
      </h2>
      <p style={{ 
        color: T.body, 
        lineHeight: 1.7, 
        maxWidth: '750px', 
        margin: '0 auto 2.5rem auto', 
        fontSize: '1.05rem' 
      }}>
        {t.aboutDesc}
      </p>
      <a 
        href="/" 
        style={{ 
          border: `1px solid ${T.border}`, 
          color: '#fff', 
          padding: '0.9rem 2.2rem', 
          borderRadius: '6px', 
          textDecoration: 'none', 
          fontWeight: 700, 
          display: 'inline-block' 
        }}
      >
        {t.aboutBtn}
      </a>
    </section>
  );
}
