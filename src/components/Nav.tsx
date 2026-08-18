'use client';

import { useState, useEffect, useTransition } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';
import { contentData as hmsContentData } from '@/app/hms/constants';
import { waHref, WhatsAppIcon } from '@/app/hms/components/WhatsAppCta';

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
  // На узких экранах шапке не хватает ширины на полный текст CTA
  const [isNarrow, setIsNarrow] = useState(false);
  // 320px + длинный русский текст — самый узкий случай, ужимаем сильнее
  const [isTiny, setIsTiny] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isPending, startTransition] = useTransition();

  const pathname = usePathname();
  const router = useRouter();
  const isHms = pathname?.includes('/hms') ?? false;
  // /hms: хедер-кнопка ghost, пока виден Hero, заливка — после прокрутки за
  // него, одинаково для всех локалей (см. ТЗ №7, п. 4.2)
  const [heroVisible, setHeroVisible] = useState(true);

  const t = dict?.nav ?? {
    expertise: 'Expertise',
    services: 'Process',
    work: 'Work',
    hospitality: 'For Hotels & Villas',
    about: 'About',
    letsTalk: "Let's talk",
  };

  const hmsT = hmsContentData[lang as keyof typeof hmsContentData] ?? hmsContentData.en;

  // Один IntersectionObserver на секцию Hero — переключает ghost/заливку
  // кнопки хедера (см. ТЗ №7, п. 4.2)
  useEffect(() => {
    if (!isHms) return;
    const el = document.getElementById('hero-section');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isHms]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsNarrow(window.innerWidth <= 480);
      setIsTiny(window.innerWidth <= 360);
    };

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
        gap: isNarrow ? 0 : 2,
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
              padding: isTiny ? '0.28rem 0.38rem' : isNarrow ? '0.3rem 0.5rem' : '0.35rem 0.75rem',
              borderRadius: 26,
              border: '1px solid transparent',
              background: 'transparent',
              color: isActive ? T.accent : T.muted,
              fontWeight: isActive ? 700 : 500,
              fontSize: isTiny ? '0.62rem' : isNarrow ? '0.66rem' : '0.72rem',
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

  // Габариты кнопки задаются медиазапросами, а вариант текста — состоянием:
  // в разметке должен быть ровно один текст, иначе скринридер читает оба,
  // а в поисковую выдачу попадает склейка. /hms: ghost, пока виден Hero,
  // иначе заливка — размер кнопки в обоих состояниях одинаковый, меняется
  // только оформление (см. ТЗ №7, п. 4.2)
  const useGhostCta = isHms && heroVisible;

  const ctaElement = isHms ? (
    <motion.a
      className="nav-cta"
      href={waHref(hmsT.waMessage)}
      target="_blank"
      rel="noopener"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      style={{
        borderRadius: 10,
        background: useGhostCta ? 'transparent' : `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
        color: useGhostCta ? '#fff' : '#0A0A0C', fontFamily: 'inherit', fontWeight: 600,
        border: useGhostCta ? `1px solid ${T.border}` : 'none',
        boxShadow: useGhostCta ? 'none' : '0 4px 15px rgba(0, 229, 153, 0.2)',
        textDecoration: 'none', cursor: 'pointer',
        whiteSpace: 'nowrap', minWidth: 0,
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        transition: 'background .2s ease, border-color .2s ease, color .2s ease, box-shadow .2s ease',
      }}
    >
      <WhatsAppIcon size={15} />
      <span>{hmsT.navCtaLabel || 'Revenue check'}</span>
    </motion.a>
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
        padding: isNarrow ? '0 0.75rem' : '0 clamp(1rem,5vw,2.5rem)', height: 64,
        display: isMobile ? 'grid' : 'flex',
        gridTemplateColumns: isMobile ? 'auto 1fr auto' : undefined,
        columnGap: isMobile ? (isNarrow ? '0.4rem' : '0.75rem') : undefined,
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
        :global(.nav-cta) {
          padding: 9px 18px;
          font-size: 0.82rem;
        }

        @media (max-width: 480px) {
          :global(.nav-cta) {
            padding: 9px 12px;
            font-size: 0.76rem;
            gap: 8px !important;
          }
        }

        /* 320px + длинный русский текст — самый узкий случай, ужимаем сильнее */
        @media (max-width: 360px) {
          :global(.nav-cta) {
            padding: 9px 9px;
            font-size: 0.7rem;
            gap: 6px !important;
          }
          :global(.nav-cta svg) {
            width: 13px;
            height: 13px;
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
            <NavLink href="#how-it-works" label={hmsT.navHowItWorks} isActive={activeSection === 'how-it-works'} />
            <NavLink href="#about" label={BACK_LABEL[lang] ?? BACK_LABEL.en} isActive={activeSection === 'about'} />
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
