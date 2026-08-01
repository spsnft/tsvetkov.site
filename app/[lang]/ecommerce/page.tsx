import { redirect } from 'next/navigation';
import EcommerceClient from '@/app/ecommerce/EcommerceClient';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isRu = lang === 'ru';
  const isTh = lang === 'th';

  return {
    title: isRu
      ? 'Системы продаж — с нуля или на новый уровень'
      : isTh
        ? 'ระบบการขายและอีคอมเมิร์ซ — สร้างใหม่หรือขยายสู่ระดับต่อไป'
        : 'Sales & Commerce Systems — Built From Scratch or Scaled to the Next Level',
    description: isRu
      ? 'Строим системы продаж и маркетинга с нуля — или выводим существующие на новый уровень.'
      : isTh
        ? 'เราสร้างระบบการขายและการตลาดตั้งแต่เริ่มต้น หรือขยายระบบที่มีอยู่สู่ระดับต่อไป'
        : 'We build sales and marketing systems from the ground up, or take existing ones to the next level.',
  };
}

export default async function EcommerceLangPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang !== 'en' && lang !== 'ru' && lang !== 'th') {
    redirect('/en/ecommerce');
  }

  return <EcommerceClient lang={lang as 'en' | 'ru' | 'th'} />;
}
