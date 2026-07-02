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
        background: scrolled ? 'rgba(10,10,12,0.9)' : 'transparent',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {[['#expertise','Expertise'],['#services','Services'],['#work','Work'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href}
              style={{ color: T.sub, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, transition: 'color .2s' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = T.sub)}
            >{label}</a>
          ))}
        </div>
      )}

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          padding: '8px 16px', borderRadius: 10,
          background: `linear-gradient(135deg,${T.accent},${T.acc2})`,
          color: '#0A0A0C', fontWeight: 700, fontSize: '0.8rem', textDecoration: 'none',
        }}
      >Let&apos;s talk</motion.a>
    </motion.nav>
  );
};
