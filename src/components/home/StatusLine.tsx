'use client';

import { useEffect, useState } from 'react';
import { T } from '@/src/theme/tokens';
import { FlagThailand } from '@/src/components/home/Icons';

const DATE_FORMAT_LOCALE: Record<string, string> = {
  en: 'en-US',
  ru: 'ru-RU',
};

function formatBangkokTime(lang: string) {
  const locale = DATE_FORMAT_LOCALE[lang] ?? DATE_FORMAT_LOCALE.en;
  return new Intl.DateTimeFormat(locale, {
    timeZone: 'Asia/Bangkok',
    hour: 'numeric',
    minute: '2-digit',
    hour12: lang === 'en',
  }).formatToParts(new Date());
}

// `lang` is only read on mount (via the lazy initializer) and inside the
// interval closure — the caller remounts this hook's component with
// `key={lang}` when the locale changes, rather than resyncing state here.
function useBangkokTime(lang: string) {
  const [parts, setParts] = useState(() => formatBangkokTime(lang));

  useEffect(() => {
    const id = setInterval(() => setParts(formatBangkokTime(lang)), 30_000);
    return () => clearInterval(id);
  }, [lang]);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  return { hh: get('hour'), mm: get('minute'), ampm: get('dayPeriod') };
}

// Mobile: 17×12 flag, 12px text, gap 8. Tablet/desktop: 19×13 flag, 13px
// text, gap 24 (design/reference-v2.html Hero status line).
export const StatusLine = ({ lang, place }: { lang: string; place: string }) => {
  const { hh, mm, ampm } = useBangkokTime(lang);

  return (
    <div className="status-line">
      <style jsx>{`
        .status-line {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: ${T.home.font.mono};
          font-size: 12px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .status-line {
            gap: 24px;
            font-size: 13px;
          }
        }

        .flag-place {
          display: flex;
          align-items: center;
          gap: 8px;
          color: ${T.home.color.textSecondary};
        }

        @media (min-width: 768px) {
          .flag-place {
            gap: 10px;
          }
        }

        .flag {
          width: 17px;
          height: 12px;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .flag {
            width: 19px;
            height: 13px;
          }
        }

        .dot {
          color: ${T.home.color.ruleLight};
        }

        .time {
          font-variant-numeric: tabular-nums;
          font-weight: 500;
          color: ${T.home.color.textSecondary};
        }
      `}</style>
      <span className="flag-place">
        <span className="flag">
          <FlagThailand />
        </span>
        <span>{place}</span>
      </span>
      <span className="dot">·</span>
      <span className="time">
        {hh}
        <span>:</span>
        {mm} {ampm}
      </span>
    </div>
  );
};
