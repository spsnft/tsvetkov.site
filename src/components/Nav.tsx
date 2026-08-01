'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';
import { onCalendlyReady } from '@/src/components/CalendlyScript';
import { contentData as hmsContentData } from '@/app/hms/constants';

interface NavProps {
  lang: string;
  dict: {
    nav: {
      expertise: string;
      services: string;
      work: string;
      hospitality: string;
      about: string;
      letsTalk: string;
    };
  } | null;
}

const BACK_LABEL: Record<string, string> = {
  en: 'About',
  ru: 'О нас',
  th: 'เกี่ยวกับเรา',
};

export const Nav = ({ lang, dict }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [calendlyReady, setCalendlyReady] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const isHms = pathname?.includes('/hms') ?? false;

  const t = dict?.nav ?? {
    expertise: 'Expertise',
    services: 'Process',
    work: 'Work',
    hospitality: 'For Hotels & Villas',
    about: 'About',
    letsTalk: "Let's talk",
  };

  const hmsT = (hmsContentData as Record<string, typeof hmsContentData.en>)[lang] ?? hmsContentData.en;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    onCalendlyReady(() => setCalendlyReady(true));
  }, []);

  // Функция для переключения языка с сохранением текущего пути
  const switchLang = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLang; // Заменяем /en на /ru или /th
    router.push(segments.join('/'));
  };

  const handleCalendlyPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/fediatsvetkov/15min' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(1rem,5vw,2.5rem)', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,12,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
        transition: 'background .3s, border-color .3s',
      }}
    >
      {/* ЛОГОТИП */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href={`/${lang}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo />
        </a>
      </div>

      {/* ОСНОВНАЯ НАВИГАЦИЯ */}
      {!isMobile && (
        isHms ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href={`/${lang}`} style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>
              {BACK_LABEL[lang] ?? BACK_LABEL.en}
            </a>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href={`/${lang}#expertise`} style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>{t.expertise}</a>
            <a href={`/${lang}#services`} style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>{t.services}</a>
            <a href={`/${lang}#cases`} style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>{t.work}</a>

            <a
              href={`/${lang}/hms`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.35rem 0.8rem',
                borderRadius: '20px',
                background: 'rgba(0, 229, 153, 0.06)',
                border: '1px solid rgba(0, 229, 153, 0.25)',
                color: T.accent,
                fontSize: '0.78rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 229, 153, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(0, 229, 153, 0.5)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 229, 153, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(0, 229, 153, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} />
              {t.hospitality}
            </a>
          </div>
        )
      )}

      {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА И CTA-КНОПКА */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div
          style={{
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: 30,
            padding: 2,
            gap: 2,
            backdropFilter: 'blur(8px)',
          }}
        >
          {['en', 'ru', 'th'].map((l) => {
            const isActive = lang === l;
            return (
              <button
                key={l}
                onClick={() => switchLang(l)}
                style={{
                  padding: '0.35rem 0.75rem',
                  borderRadius: 26,
                  border: isActive ? `1px solid ${T.accent25}` : '1px solid transparent',
                  background: isActive ? T.accent10 : 'transparent',
                  color: isActive ? T.accent : T.muted,
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {l}
              </button>
            );
          })}
        </div>

        {isHms ? (
          <motion.button
            type="button"
            onClick={handleCalendlyPopup}
            disabled={!calendlyReady}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '9px 18px', borderRadius: 10,
              background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
              color: '#0A0A0C', fontWeight: 800, fontSize: '0.82rem',
              border: 'none', boxShadow: '0 4px 15px rgba(0, 229, 153, 0.2)',
              opacity: calendlyReady ? 1 : 0.6, cursor: calendlyReady ? 'pointer' : 'not-allowed',
            }}
          >
            {calendlyReady ? (hmsT.btnAudit || "Book a Free Audit") : 'Loading…'}
          </motion.button>
        ) : (
          <motion.a
            href={`/${lang}#contact`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '9px 18px', borderRadius: 10,
              background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
              color: '#0A0A0C', fontWeight: 800, fontSize: '0.82rem', textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(0, 229, 153, 0.2)'
            }}
          >
            {t.letsTalk}
          </motion.a>
        )}
      </div>
    </motion.nav>
  );
};
