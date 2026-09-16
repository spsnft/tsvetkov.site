import type { Metadata } from "next";
import "../globals.css";
import { CalendlyScript } from "@/src/components/CalendlyScript";
import StyledJsxRegistry from "@/src/components/StyledJsxRegistry";
import { SITE_URL } from "@/src/lib/siteUrl";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  // Await the params promise
  const { lang } = await params;
  
  // Homepage v2 is English-only for now (RU/TH serve the English copy) —
  // metadata matches that across all three locales.
  const meta = {
    en: {
      title: "Fedor Tsvetkov — I take marketing over and make it earn",
      desc: "Different businesses. Same approach. Numbers, paid traffic, sales automation, AI and direct bookings — one system, one person accountable."
    },
    ru: {
      title: "Fedor Tsvetkov — I take marketing over and make it earn",
      desc: "Different businesses. Same approach. Numbers, paid traffic, sales automation, AI and direct bookings — one system, one person accountable."
    },
    th: {
      title: "Fedor Tsvetkov — I take marketing over and make it earn",
      desc: "Different businesses. Same approach. Numbers, paid traffic, sales automation, AI and direct bookings — one system, one person accountable."
    }
  };

  const currentMeta = meta[lang as keyof typeof meta] || meta.en;
  const locale = lang === 'ru' ? 'ru_RU' : lang === 'th' ? 'th_TH' : 'en_US';

  return {
    metadataBase: new URL(SITE_URL),
    title: currentMeta.title,
    description: currentMeta.desc,
    alternates: {
      canonical: `/${lang}`,
    },
    openGraph: {
      title: currentMeta.title,
      description: currentMeta.desc,
      url: `${SITE_URL}/${lang}`,
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
        {/* Homepage v2 only (design/system-report-v2.md §5) — additive, the
            Space Grotesk link above stays for /hms and /ecommerce. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap"
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
