import { redirect } from 'next/navigation';
import HospitalityB2BClient from '@/app/hms/HospitalityB2BClient';
import { SITE_URL } from '@/src/lib/siteUrl';

const META = {
  en: {
    title: 'Hospitality Growth Solutions — Stop Paying 15–20% OTA Commissions',
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
  const locale = lang === 'ru' ? 'ru_RU' : lang === 'th' ? 'th_TH' : 'en_US';
  const url = `${SITE_URL}/${lang}/hms`;

  // Картинка объявлена абсолютным URL, а не оставлена на файловую конвенцию
  // opengraph-image.tsx. Для картинок соцсетей Next подменяет metadataBase на
  // адрес превью-деплоя (getSocialImageMetadataBaseFallback: при
  // VERCEL_ENV=preview выигрывает VERCEL_BRANCH_URL, даже если metadataBase
  // задан явно) — именно поэтому в мету уезжал *-git-*.vercel.app. Абсолютный
  // URL резолвер пропускает как есть, без всякой базы.
  const ogImage = {
    url: `${SITE_URL}/${lang}/hms/opengraph-image`,
    width: 1200,
    height: 630,
    alt: meta.title,
  };

  return {
    // Явный metadataBase: canonical и прочие относительные URL резолвятся от
    // продакшен-домена, а не от адреса превью-деплоя
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}/hms`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: 'Fedor Tsvetkov',
      locale,
      type: 'website',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [ogImage.url],
    },
  };
}

export default async function HMSLangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang !== 'en' && lang !== 'ru' && lang !== 'th') {
    redirect('/en/hms');
  }

  return <HospitalityB2BClient lang={lang as 'en' | 'ru' | 'th'} />;
}
