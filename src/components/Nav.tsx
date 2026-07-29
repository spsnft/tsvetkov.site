'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';

interface NavProps {
  lang: string;
  dict: {
    nav: {
      badge?: string;
      expertise: string;
      services: string;
      work: string;
      hospitality: string;
      about: string;
      letsTalk: string;
    };
  } | null;
}

export const Nav = ({ lang, dict }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  const t = dict?.nav ?? {
    badge: 'FOUNDER-LED AGENCY',
    expertise: 'Expertise',
    services: 'Services',
    work: 'Work',
    hospitality: 'Hospitality Tech',
    about: 'About',
    letsTalk: "Let's talk",
  };

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

  // Функция для переключения языка с сохранением текущего пути
  const switchLang = (newLang: string) => {
    if (!pathname) return;
    const segments = pathname.split('/');
    segments[1] = newLang; // Заменяем /en на /ru или /th
    router.push(segments.join('/'));
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
      {/* ЛОГОТИПИ И ШИЛЬДИК АГЕНТСТВА */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href={`/${lang}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Logo />
        </a>

        {!isMobile && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: T.accent,
              background: 'rgba(0, 229, 153, 0.06)',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid rgba(0, 229, 153, 0.2)',
              backdropFilter: 'blur(8px)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: T.accent,
                boxShadow: `0 0 6px ${T.accent}`,
              }}
            />
            {t.badge ?? 'FOUNDER-LED AGENCY'}
          </span>
        )}
      </div>

      {/* ОСНОВНАЯ НАВИГАЦИЯ */}
      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href={`/${lang}#expertise`} style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>{t.expertise}</a>
          <a href={`/${lang}#services`} style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>{t.services}</a>
          <a href={`/${lang}#work`} style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>{t.work}</a>
          
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
      )}

      {/* ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКА И СТА КНОПКА */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {['en', 'ru', 'th'].map((l) => (
            <button
              key={l}
              onClick={() => switchLang(l)}
              style={{
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                padding: 0,
                color: lang === l ? T.accent : T.sub,
                fontWeight: lang === l ? 700 : 500,
                fontSize: '0.75rem', 
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                opacity: lang === l ? 1 : 0.6
              }}
            >
              {l}
            </button>
          ))}
        </div>

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
      </div>
    </motion.nav>
  );
};
