import type { Metadata } from "next";
import "../globals.css";
import { CalendlyScript } from "@/src/components/CalendlyScript";
import StyledJsxRegistry from "@/src/components/StyledJsxRegistry";
import { SITE_URL } from "@/src/lib/siteUrl";
import { getDictionary } from "@/src/locales/getDictionary";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  // Await the params promise
  const { lang } = await params;

  const { meta } = getDictionary(lang).home;
  const locale = lang === 'ru' ? 'ru_RU' : 'en_US';

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/${lang}`,
      siteName: "Fedor Tsvetkov",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: meta.title,
      description: meta.description,
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
        {/* RU locale font — loaded only on its own locale, /en loads none.
            Archivo has no cyrillic subset, so ru layers its own font in
            front of the existing stack via --home-font-sans (see
            src/theme/tokens.ts), scoped with :lang() below. */}
        {lang === 'ru' && (
          <link
            href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        )}
        <style>{`
          :lang(ru) {
            --home-font-sans: 'Inter Tight', 'Archivo', system-ui, sans-serif;
          }
        `}</style>
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
