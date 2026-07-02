'use client';

import { T } from '@/src/theme/tokens';

export const Logo = ({ size = 38 }: { size?: number }) => (
  <div style={{
    width: size, height: size,
    borderRadius: Math.round(size * 0.26),
    background: `linear-gradient(135deg,${T.accent}20,${T.acc2}20)`,
    border: `1.5px solid ${T.accent}35`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', flexShrink: 0,
  }}>
    <span style={{ fontWeight: 800, fontSize: size * 0.36, color: '#fff', letterSpacing: '-0.04em' }}>FT</span>
    {/* Green online status dot */}
    <span style={{
      position: 'absolute',
      bottom: Math.round(size * 0.07), right: Math.round(size * 0.07),
      width: Math.round(size * 0.22), height: Math.round(size * 0.22),
      borderRadius: '50%',
      background: T.accent,
      boxShadow: `0 0 ${Math.round(size * 0.18)}px ${T.accent}`,
      border: `${Math.max(1, Math.round(size * 0.04))}px solid #0A0A0C`,
    }} />
  </div>
);
