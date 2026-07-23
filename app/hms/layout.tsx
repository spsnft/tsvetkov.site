import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality Growth Solutions — Stop Paying 15-20% OTA Commissions',
  description: 'Connect your hotel or villa directly to guests. Cloud PMS, zero-commission booking engine, and direct revenue infrastructure.',
  openGraph: {
    title: 'Hospitality Growth Solutions — Direct Booking Engines',
    description: 'Keep 100% of your booking profits. Automated sync across 300+ OTAs without double-bookings.',
    url: 'https://tsvetkov.site/hms',
    siteName: 'Tsvetkov Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HMSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
