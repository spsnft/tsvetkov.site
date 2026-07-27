import type { Metadata } from "next";
// Убедись, что путь к globals.css правильный (возможно придется поменять на "../../globals.css")
import "../globals.css"; 
import { CalendlyScript } from "@/src/components/CalendlyScript";

// Динамическая генерация SEO в зависимости от языка
export async function generateMetadata({ 
  params: { lang } 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  
  // В идеале эти данные тоже берутся из JSON, но пока зашьем базовые для примера
  const meta = {
    en: {
      title: "Fedor Tsvetkov — Growth Architect & Performance Marketer",
      desc: "We build high-ticket growth engines. No fluff, just architecture that scales."
    },
    ru: {
      title: "Фёдор Цветков — Growth Architect & Performance Marketer",
      desc: "Создаем масштабируемые системы роста. Архитектура, CRM и маркетинг."
    },
    th: {
      title: "Fedor Tsvetkov — สถาปนิกด้านการเติบโตและนักการตลาดประสิทธิภาพ",
      desc: "เราสร้างกลไกการเติบโตที่มีมูลค่าสูง ไม่มีน้ำ มีแต่สถาปัตยกรรมที่ปรับขนาดได้"
    }
  };

  const currentMeta = meta[lang as keyof typeof meta] || meta.en;

  return {
    title: currentMeta.title,
    description: currentMeta.desc,
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.desc,
      url: `https://tsvetkov.site/${lang}`,
      siteName: "Fedor Tsvetkov",
      locale: lang === 'ru' ? 'ru_RU' : lang === 'th' ? 'th_TH' : 'en_US',
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
  params: { lang }
}: Readonly<{ 
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <CalendlyScript />
      </body>
    </html>
  );
}
