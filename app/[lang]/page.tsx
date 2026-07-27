import TsvetkovB2C from '@/src/components/TsvetkovB2C';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Fedor Tsvetkov — Growth Architect & Performance Marketer',
  description:
    'Data-driven performance marketer managing high-budget ad campaigns and AI-powered automation. Growth Architecture, CRM Automation, Performance Marketing.',
  openGraph: {
    title: 'Fedor Tsvetkov — Growth Architect & Performance Marketer',
    description:
      'Managing $500K+ annual media budgets. Scaled monthly revenue 7×. 1,000+ qualified B2B leads per month.',
    url: 'https://tsvetkov.site',
    siteName: 'Fedor Tsvetkov',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Home() {
  return <TsvetkovB2C />;
}
