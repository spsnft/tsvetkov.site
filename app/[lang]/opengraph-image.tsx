import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/src/lib/ogFont';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Hero badge/title are fixed in English across every locale (see src/components/Hero.tsx)
const BADGE = 'FOUNDER-LED AGENCY';
const TITLE_LINE1 = 'More Revenue';
const TITLE_LINE2 = 'Engineered';

export default async function Image() {
  const spaceGrotesk = await loadGoogleFont(
    'Space Grotesk',
    `${BADGE}${TITLE_LINE1}${TITLE_LINE2}tsvetkov.site`,
    700
  );

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
          backgroundColor: '#0A0A0C',
          backgroundImage:
            'radial-gradient(circle at 28% 65%, rgba(0,229,153,0.35) 0%, rgba(0,163,255,0.16) 45%, rgba(10,10,12,0) 75%)',
          fontFamily: 'Space Grotesk',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 26px',
            borderRadius: 999,
            marginBottom: 40,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 5,
            textTransform: 'uppercase',
            color: '#00E599',
            backgroundColor: 'rgba(0,229,153,0.08)',
            border: '2px solid rgba(0,229,153,0.3)',
          }}
        >
          <div style={{ display: 'flex', width: 14, height: 14, borderRadius: '50%', backgroundColor: '#00E599' }} />
          {BADGE}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
          <div style={{ display: 'flex', fontSize: 104, fontWeight: 800, letterSpacing: '-3px', color: '#ffffff' }}>
            {TITLE_LINE1}
            <span
              style={{
                display: 'flex',
                width: 16,
                height: 16,
                marginLeft: 16,
                marginTop: 30,
                borderRadius: '50%',
                backgroundColor: '#00E599',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: '-3px',
              backgroundImage: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {TITLE_LINE2}
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: 56, fontSize: 26, fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>
          tsvetkov.site
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Space Grotesk', data: spaceGrotesk, weight: 700, style: 'normal' }],
    }
  );
}
