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
        paddingLeft: 0,
        paddingRight: 0,
        background: 'transparent',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style jsx>{`
        .hero-grid {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          position: relative;
          z-index: 4;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            gap: 2rem;
          }
        }

        @media (max-width: 767px) {
          .hero-grid {
            flex-direction: column;
            gap: 2rem;
          }
        }

        .hero-left {
          max-width: 580px;
          flex-shrink: 0;
        }

        @media (max-width: 767px) {
          .hero-left {
            max-width: 100%;
            flex-shrink: 1;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        .hero-right {
          width: 440px;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .hero-right {
            width: 390px;
          }
        }

        @media (max-width: 767px) {
          .hero-right {
            width: 100%;
            flex-shrink: 1;
          }
        }

        .hero-title-line {
          display: block;
          font-size: clamp(2.2rem, 4.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #fff;
        }

        .hero-title-gradient {
          display: block;
          font-size: clamp(2.2rem, 4.5vw, 4.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.035em;
          background: linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 20px rgba(0, 229, 153, 0.2));
        }

        .hero-bullets {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 767px) {
          .hero-bullets {
            align-items: center;
          }
        }

        .hero-bullet-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: ${T.sub};
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 2rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.01em;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          background: linear-gradient(180deg, #00E599 0%, #00A3FF 100%);
          color: #0A0A0C;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 
            inset 0 2px 0 rgba(255, 255, 255, 0.5),
            inset 0 -3px 0 rgba(0, 0, 0, 0.25),
            0 8px 20px -6px rgba(0, 229, 153, 0.4),
            0 4px 12px rgba(0, 163, 255, 0.2);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          background: linear-gradient(180deg, #1affaa 0%, #1ab1ff 100%);
          box-shadow: 
            inset 0 2px 0 rgba(255, 255, 255, 0.6),
            inset 0 -3px 0 rgba(0, 0, 0, 0.2),
            0 12px 25px -6px rgba(0, 229, 153, 0.55),
            0 6px 16px rgba(0, 163, 255, 0.35);
        }

        .btn-primary-hero:active {
          transform: translateY(1px);
          box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.3),
            0 2px 8px -4px rgba(0, 229, 153, 0.3);
        }

        @media (max-width: 640px) {
          .btn-primary-hero {
            width: auto;
            min-width: 220px;
          }
        }
      `}</style>

      {/* Фоновое свечение */}
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

      {/* Использование глобального контейнера для идеального выравнивания */}
      <div className="container">
        <div className="hero-grid">
          {/* Левая колонка */}
          <div className="hero-left">
            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: T.accent,
                  background: T.accent08,
                  padding: '5px 12px',
                  borderRadius: 20,
                  border: `1px solid ${T.accent25}`,
                }}
              >
                {t.badge}
              </span>
            </div>

            <h1 style={{ margin: '0 0 1.5rem 0' }}>
              <span className="hero-title-line">{t.titleLine1}</span>
              <span className="hero-title-gradient">{t.titleLine2}</span>
            </h1>

            <div className="hero-bullets">
              <div className="hero-bullet-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{renderWithStrong(t.sub1)}</span>
              </div>

              <div className="hero-bullet-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{renderWithStrong(t.sub2)}</span>
              </div>

              <div className="hero-bullet-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{renderWithStrong(t.sub3)}</span>
              </div>
            </div>

            <a href="#contact" className="btn-primary-hero">
              {t.cta}
            </a>
          </div>

          {/* Правая колонка */}
          <div className="hero-right">
            <HeroEngine />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
