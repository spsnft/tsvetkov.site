import { ImageResponse } from 'next/og';
import { loadGoogleFont } from '@/src/lib/ogFont';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Mirrors the "Stop Paying 15-20% OTA Commissions" clause already
// localized and shipped in app/[lang]/hms/page.tsx's og:title
const TITLE: Record<string, string> = {
  en: 'Stop Paying 15-20% OTA Commissions',
  ru: 'Хватит платить 15-20% комиссии OTA',
  th: 'หยุดจ่ายค่าคอมมิชชั่น 15-20%',
};

// Space Grotesk (the site's brand font) only covers Latin — Cyrillic/Thai
// need a different font family so glyphs actually render
const FONT_FAMILY: Record<string, string> = {
  en: 'Space Grotesk',
  ru: 'Noto Sans',
  th: 'Noto Sans Thai',
};

const BADGE = 'HOSPITALITY GROWTH SOLUTIONS';
const DOMAIN = 'tsvetkov.site/hms';

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const title = TITLE[lang] || TITLE.en;
  const fontFamily = FONT_FAMILY[lang] || FONT_FAMILY.en;

  const font = await loadGoogleFont(fontFamily, `${title} ${BADGE} ${DOMAIN}`, 700);

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
            'radial-gradient(circle at 72% 35%, rgba(0,229,153,0.32) 0%, rgba(0,163,255,0.16) 45%, rgba(10,10,12,0) 75%)',
          fontFamily,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 26px',
            borderRadius: 999,
            marginBottom: 44,
            fontSize: 22,
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

        <div
          style={{
            display: 'flex',
            maxWidth: 980,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: '-2px',
            color: '#ffffff',
          }}
        >
          {title}
        </div>

        <div style={{ display: 'flex', marginTop: 56, fontSize: 26, fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>
          {DOMAIN}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: fontFamily, data: font, weight: 700, style: 'normal' }],
    }
  );
}
