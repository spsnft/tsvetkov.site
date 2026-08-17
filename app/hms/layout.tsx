import type { Metadata } from 'next';

const TITLE = 'Hospitality Growth Solutions — Stop Paying 15–20% OTA Commissions';
const DESCRIPTION = 'Connect your hotel or villa directly to guests. Cloud PMS, zero-commission booking engine, and direct revenue infrastructure.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tsvetkov.site'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/en/hms',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.tsvetkov.site/en/hms',
    siteName: 'Tsvetkov Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function HMSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
