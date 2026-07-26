import { redirect } from 'next/navigation';
import HospitalityB2BClient from '@/app/hms/HospitalityB2BClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isTh = lang === 'th';
  
  return {
    title: isTh 
      ? 'โซลูชั่นเพื่อการเติบโตของธุรกิจโรงแรม — หยุดจ่ายค่าคอมมิชชั่น 15-20%' 
      : 'Hospitality Growth Solutions — Stop Paying 15-20% OTA Commissions',
    description: isTh
      ? 'เชื่อมต่อที่พักของคุณกับลูกค้าโดยตรง Cloud PMS, ระบบจองตรง 0% ค่าคอมมิชชั่น'
      : 'Connect your hotel or villa directly to guests. Cloud PMS, zero-commission booking engine, and direct revenue infrastructure.',
  };
}

export default async function HMSLangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang !== 'en' && lang !== 'th') {
    redirect('/en/hms');
  }

  return <HospitalityB2BClient lang={lang as 'en' | 'th'} />;
}
