import React from 'react';
import { HeroEngine } from './HeroEngine';
import { T } from '@/src/theme/tokens';

interface HeroProps {
  dict: {
    hero: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      sub1: string;
      sub2: string;
      sub3: string;
      cta: string;
    };
  } | null;
}

export const Hero = ({ dict }: HeroProps) => {
  const t = dict?.hero ?? {
    badge: 'TSVETKOV • FOUNDER-LED AGENCY',
    titleLine1: 'Value Growth',
    titleLine2: 'Engineered to Scale',
    sub1: 'We eliminate chaos in <strong>marketing and digital systems</strong>',
    sub2: 'No fluff — just <strong>high-performance architectures</strong>',
    sub3: 'Track every dollar and <strong>automate sales flow</strong>',
    cta: 'Audit My Business',
  };

  // Хелпер: парсит строку вида "текст <strong>жирный</strong> текст" в JSX
  const renderWithStrong = (text: string) => {
    const parts = text.split(/<strong>(.*?)<\/strong>/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} style={{ color: '#fff' }}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section
      style={{
        width: '100%',
        position: 'relative',
        paddingTop: 'clamp(4rem, 8vw, 8rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
        background: 'transparent',
        overflow: 'hidden',
      }}
    >
      <style jsx>{`
        .btn-glass-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0.9rem 1.8rem;
          border-radius: 14px;
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.4);
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
          text-decoration: none;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 0 20px rgba(0, 229, 153, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .btn-glass-cta:hover {
          background: rgba(0, 229, 153, 0.16);
          border-color: rgba(0, 229, 153, 0.8);
          box-shadow: 0 0 30px rgba(0, 229, 153, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .btn-glass-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        .cta-arrow {
          transition: transform 0.25s ease;
        }
      `}</style>

      {/* ФОНОВОЕ СВЕЧЕНИЕ */}
      <div
        style={{
          position: 'absolute',
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '450px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`,
          opacity: 0.5,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 4,
        }}
      >
        {/* ЛЕВАЯ КОЛОНКА */}
        <div>
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: T.accent,
                background: 'rgba(0, 229, 153, 0.08)',
                padding: '5px 12px',
                borderRadius: 20,
                border: '1px solid rgba(0, 229, 153, 0.25)',
              }}
            >
              {t.badge}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#fff',
              margin: '0 0 1.5rem 0',
            }}
          >
            {t.titleLine1}<br />
            <span
              style={{
                background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(0, 229, 153, 0.2))',
              }}
            >
              {t.titleLine2}
            </span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: T.sub }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{renderWithStrong(t.sub1)}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: T.sub }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{renderWithStrong(t.sub2)}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: T.sub }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{renderWithStrong(t.sub3)}</span>
            </div>
          </div>

          <a href="#contact" className="btn-glass-cta">
            <span>{t.cta}</span>
            <svg className="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* ПРАВАЯ КОЛОНКА */}
        <HeroEngine />
      </div>
    </section>
  );
};

export default Hero;
