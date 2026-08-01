import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sales & Commerce Systems — Built From Scratch or Scaled to the Next Level',
  description: 'We build sales and marketing systems from the ground up, or take existing ones to the next level — sites, bots, CRM, dealer networks, brand & go-to-market.',
  openGraph: {
    title: 'Sales & Commerce Systems — Tsvetkov',
    description: 'From manual sales to a real system. Real infrastructure, not one-off campaigns.',
    url: 'https://tsvetkov.site/ecommerce',
    siteName: 'Tsvetkov Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EcommerceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
