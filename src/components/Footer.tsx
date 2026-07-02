'use client';

import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';

export const Footer = () => (
  <footer style={{
    padding: '2.5rem clamp(1.25rem,5vw,2.5rem)',
    background: T.bg0, borderTop: `1px solid ${T.border}`,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: '1rem',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Logo size={32} />
      <a
        href="https://t.me/advertisment_th"
        target="_blank" rel="noopener noreferrer"
        style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 700, letterSpacing: '-0.02em' }}
      >
        @advertisment_th
      </a>
    </div>
    <p style={{ color: T.muted, fontSize: '0.8rem' }}>© {new Date().getFullYear()}. All rights reserved.</p>
  </footer>
);
