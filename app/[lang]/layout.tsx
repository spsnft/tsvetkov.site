import type { Metadata } from "next";
import "../globals.css";
import { CalendlyScript } from "@/src/components/CalendlyScript";
import StyledJsxRegistry from "@/src/components/StyledJsxRegistry";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  // Await the params promise
  const { lang } = await params;
  
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
  const locale = lang === 'ru' ? 'ru_RU' : lang === 'th' ? 'th_TH' : 'en_US';

  return {
    metadataBase: new URL('https://www.tsvetkov.site'),
    title: currentMeta.title,
    description: currentMeta.desc,
    alternates: {
      canonical: `/${lang}`,
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.desc,
      url: `https://www.tsvetkov.site/${lang}`,
      siteName: "Fedor Tsvetkov",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: currentMeta.title,
      description: currentMeta.desc,
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  // Await the params promise before using lang
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
      </head>
      <body>
        <StyledJsxRegistry>
          {children}
          <CalendlyScript />
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
