import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/src/lib/ogFont';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Homepage v2 copy is fixed in English across every locale for now
// (design/system-report-v2.md §6 — see src/components/Hero.tsx).
const HERO_A = 'I take marketing over';
const HERO_B = 'and make it earn';

const BG = '#F5F3EE';
const TEXT = '#17130F';
const ACCENT = '#B8431F';
const DARK = '#14292D';

export default async function Image() {
  const archivo = await loadGoogleFont('Archivo', `${HERO_A}${HERO_B}tsvetkov.site`, 600);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          backgroundColor: BG,
          fontFamily: 'Archivo',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: 10,
            marginBottom: 48,
            backgroundColor: DARK,
            color: BG,
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          FT
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.98 }}>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 600, letterSpacing: '-3.5px', color: TEXT }}>
            {HERO_A}
          </div>
          <div style={{ display: 'flex', fontSize: 92, fontWeight: 600, letterSpacing: '-3.5px', color: TEXT }}>
            {HERO_B}
            <span style={{ color: ACCENT }}>.</span>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: 56, fontSize: 26, fontWeight: 500, color: '#5A544C' }}>
          tsvetkov.site
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Archivo', data: archivo, weight: 600, style: 'normal' }],
    }
  );
}
