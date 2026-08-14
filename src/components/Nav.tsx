'use client';

import { useState, useEffect, useTransition } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';
import { useCalendlyPopup } from '@/src/components/useCalendlyPopup';
import { contentData as hmsContentData } from '@/app/hms/constants';

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <a
      href={href}
      style={{
        position: 'relative',
        color: isActive ? '#fff' : T.sub,
        textDecoration: 'none',
        fontSize: '0.85rem',
        fontWeight: isActive ? 700 : 500,
        paddingBottom: 6,
        transition: 'color .2s',
      }}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="nav-underline"
          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 2,
            borderRadius: 2,
            background: T.accent,
            boxShadow: `0 0 8px ${T.accent}`,
          }}
        />
      )}
    </a>
  );
}

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
  en: 'About Us',
  ru: 'О нас',
  th: 'เกี่ยวกับเรา',
};

export const Nav = ({ lang, dict }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { calendlyReady, popupLoading, openPopup } = useCalendlyPopup('https://calendly.com/fediatsvetkov/15min');
  const [activeSection, setActiveSection] = useState('');
  const [isPending, startTransition] = useTransition();

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

  // Подсветка активного пункта навигации по скроллу
  useEffect(() => {
    const ids = isHms ? ['how-it-works', 'pricing', 'faq'] : ['expertise', 'services', 'cases'];
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      setActiveSection(current);
    };
    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [isHms]);

  // Функция для переключения языка с сохранением текущего пути
  const switchLang = (newLang: string) => {
    if (!pathname || newLang === lang) return;
    const segments = pathname.split('/');
    segments[1] = newLang; // Заменяем /en на /ru или /th
    startTransition(() => {
      router.push(segments.join('/'));
    });
  };

  const langSwitcher = (
    <div
      style={{
        display: 'flex',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: 30,
        padding: 2,
        gap: 2,
        backdropFilter: 'blur(8px)',
        opacity: isPending ? 0.6 : 1,
        pointerEvents: isPending ? 'none' : 'auto',
        transition: 'opacity .2s ease',
      }}
    >
      {['en', 'ru', 'th'].map((l) => {
        const isActive = lang === l;
        return (
          <motion.button
            key={l}
            onClick={() => switchLang(l)}
            whileTap={{ scale: 0.92 }}
            style={{
              position: 'relative',
              padding: '0.35rem 0.75rem',
              borderRadius: 26,
              border: '1px solid transparent',
              background: 'transparent',
              color: isActive ? T.accent : T.muted,
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              cursor: 'pointer',
              transition: 'color .2s ease',
            }}
          >
            {isActive && (
              <motion.div
                layoutId="lang-pill"
                transition={{ type: 'spring', stiffness: 500, damping: 32 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 26,
                  background: T.accent10,
                  border: `1px solid ${T.accent25}`,
                  zIndex: -1,
                }}
              />
            )}
            {l}
          </motion.button>
        );
      })}
    </div>
  );

  const ctaElement = isHms ? (
    <motion.button
      type="button"
      onClick={openPopup}
      disabled={!calendlyReady || popupLoading}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      style={{
        padding: '9px 18px', borderRadius: 10,
        background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
        color: '#0A0A0C', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.82rem',
        border: 'none', boxShadow: '0 4px 15px rgba(0, 229, 153, 0.2)',
        opacity: calendlyReady ? 1 : 0.6, cursor: calendlyReady && !popupLoading ? 'pointer' : 'not-allowed',
        whiteSpace: 'nowrap',
        display: 'inline-flex', alignItems: 'center', gap: '8px',
      }}
    >
      {popupLoading && <span className="nav-btn-spinner" />}
      {!calendlyReady ? 'Loading…' : popupLoading ? 'Opening…' : (hmsT.btnAudit || "Book a Free Audit")}
    </motion.button>
  ) : (
    <motion.a
      href={`/${lang}#contact`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      style={{
        padding: '9px 18px', borderRadius: 10,
        background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
        color: '#0A0A0C', fontFamily: 'inherit', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none',
        boxShadow: '0 4px 15px rgba(0, 229, 153, 0.2)',
        whiteSpace: 'nowrap',
      }}
    >
      {t.letsTalk}
    </motion.a>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(1rem,5vw,2.5rem)', height: 64,
        display: isMobile ? 'grid' : 'flex',
        gridTemplateColumns: isMobile ? 'auto 1fr auto' : undefined,
        columnGap: isMobile ? '0.75rem' : undefined,
        alignItems: 'center',
        justifyContent: isMobile ? undefined : 'space-between',
        background: scrolled ? 'rgba(10,10,12,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${T.border}` : '1px solid transparent',
        transition: 'background .3s, border-color .3s',
      }}
    >
      <style jsx>{`
        .nav-btn-spinner {
          width: 12px;
          height: 12px;
          border: 2px solid rgba(10, 10, 12, 0.3);
          border-top-color: #0a0a0c;
          border-radius: 50%;
          display: inline-block;
          animation: navBtnSpin 0.7s linear infinite;
        }
        @keyframes navBtnSpin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* ЛОГОТИП */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href={`/${lang}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo />
        </a>
      </div>

      {/* ОСНОВНАЯ НАВИГАЦИЯ (десктоп) / ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА, ОТЦЕНТРОВАННЫЙ (мобайл) */}
      {isMobile ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {langSwitcher}
        </div>
      ) : (
        isHms ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#about" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>
              {BACK_LABEL[lang] ?? BACK_LABEL.en}
            </a>
            <span style={{ width: 1, height: 16, background: T.border }} />
            <NavLink href="#how-it-works" label={hmsT.navHowItWorks} isActive={activeSection === 'how-it-works'} />
            <NavLink href="#pricing" label={hmsT.navPricing} isActive={activeSection === 'pricing'} />
            <NavLink href="#faq" label={hmsT.navFaq} isActive={activeSection === 'faq'} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <NavLink href={`/${lang}#expertise`} label={t.expertise} isActive={activeSection === 'expertise'} />
            <NavLink href={`/${lang}#services`} label={t.services} isActive={activeSection === 'services'} />
            <NavLink href={`/${lang}#cases`} label={t.work} isActive={activeSection === 'cases'} />

            <a
              href={`/${lang}/hms`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.35rem 0.85rem',
                borderRadius: '20px',
                background: 'rgba(0, 229, 153, 0.06)',
                border: '1px solid rgba(0, 229, 153, 0.25)',
                color: T.accent,
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
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

      {/* CTA-КНОПКА (мобайл) / ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА + CTA-КНОПКА (десктоп) */}
      {isMobile ? (
        ctaElement
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {langSwitcher}
          {ctaElement}
        </div>
      )}
    </motion.nav>
  );
};
