import { redirect } from 'next/navigation';
import HospitalityB2BClient from '@/app/hms/HospitalityB2BClient';

const META = {
  en: {
    title: 'Hospitality Growth Solutions — Stop Paying 15-20% OTA Commissions',
    description: 'Connect your hotel or villa directly to guests. Cloud PMS, zero-commission booking engine, and direct revenue infrastructure.',
  },
  ru: {
    title: 'Решения для роста отелей — хватит платить 15-20% комиссии OTA',
    description: 'Подключите отель или виллу напрямую к гостям. Cloud PMS, система прямых броней без комиссии и инфраструктура прямой выручки.',
  },
  th: {
    title: 'โซลูชั่นเพื่อการเติบโตของธุรกิจโรงแรม — หยุดจ่ายค่าคอมมิชชั่น 15-20%',
    description: 'เชื่อมต่อที่พักของคุณกับลูกค้าโดยตรง Cloud PMS, ระบบจองตรง 0% ค่าคอมมิชชั่น',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const meta = META[lang as keyof typeof META] || META.en;

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function HMSLangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang !== 'en' && lang !== 'ru' && lang !== 'th') {
    redirect('/en/hms');
  }

  return <HospitalityB2BClient lang={lang as 'en' | 'ru' | 'th'} />;
}
