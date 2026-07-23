'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';
import { Logo } from '@/src/ui/Logo';

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Logo />
      </a>

      {!isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#expertise" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>Expertise</a>
          <a href="#services" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>Services</a>
          <a href="#work" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}>Work</a>
          
          {/* КАПСУЛА-ССЫЛКА НА HMS В СТИЛЕ ЛЕНДИНГА */}
          <a 
            href="/hms" 
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
            Hospitality Tech (/hms)
          </a>
        </div>
      )}

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          padding: '9px 18px', borderRadius: 10,
          background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
          color: '#0A0A0C', fontWeight: 800, fontSize: '0.82rem', textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(0, 229, 153, 0.2)'
        }}
      >
        Let&apos;s talk
      </motion.a>
    </motion.nav>
  );
};
