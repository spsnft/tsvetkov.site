'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';

const CYAN_ACCENT = T.acc2 || '#00A3FF';

interface ExpertiseProps {
  dict: {
    expertise: {
      badge: string;
      title: string;
      subtitle?: string;
      card1Title: string;
      card1Desc: string;
      hmsBadge: string;
      hmsTitle: string;
      hmsDesc: string;
      hmsCta: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
    };
  } | null;
}

export const Expertise = ({ dict }: ExpertiseProps) => {
  const t = dict?.expertise ?? {
    badge: 'SOLUTIONS & ARSENAL',
    title: 'Systems Built to Scale Your Business',
    subtitle: 'Connecting architecture, funnels, and automation into a predictable growth engine.',
    card1Title: 'Systems, Data & Architecture',
    card1Desc: 'Eliminate blind decision-making by unifying scattered business data into a <strong>single source of truth</strong>. Gain complete clarity on key financial metrics, unit economics, and growth drivers.',
    hmsBadge: 'SPECIALIZED OFFER',
    hmsTitle: 'Hospitality & HoReCa Systems',
    hmsDesc: 'A dedicated ecosystem for hotels & resorts designed to eliminate OTA commissions, sync PMS data seamlessly, and maximize direct bookings.',
    hmsCta: 'Explore HMS Solution',
    card2Title: 'Strategic Audits & Funnel Optimization',
    card2Desc: 'We analyze your entire customer journey to find exactly where you are losing money. By <strong>auditing bottlenecks, rebuilding sales funnels, and optimizing conversion</strong>, we maximize revenue from existing traffic.',
    card3Title: 'Process Automation & AI Workflows',
    card3Desc: 'Eliminate operational lag and human error across your pipelines. Instantly route leads, <strong>automate CRM handoffs, and deploy custom AI agents</strong> to speed up sales cycles and cut overhead.',
  };

  const renderWithStrong = (text: string) => {
    const parts = text.split(/<strong>(.*?)<\/strong>/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} style={{ color: '#ffffff' }}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="expertise" className="expertise-section">
      <style jsx>{`
        .expertise-section {
          width: 100%;
          position: relative;
          padding: 2rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
          z-index: 5;
        }

        .header-box {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0, 163, 255, 0.08);
          border: 1px solid rgba(0, 163, 255, 0.25);
          color: ${CYAN_ACCENT};
          backdrop-filter: blur(12px);
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          text-wrap: balance;
        }

        .subtitle {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          max-width: 640px;
          line-height: 1.5;
        }

        /* BENTO GRID 10-TRACK */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
        }

        @media (min-width: 992px) {
          .bento-grid {
            grid-template-columns: repeat(10, 1fr);
          }

          .col-70 {
            grid-column: span 7;
          }

          .col-30 {
            grid-column: span 3;
          }

          .col-50 {
            grid-column: span 5;
          }
        }

        /* BENTO CARD BASE */
        .bento-card {
          position: relative;
          overflow: hidden;
          padding: 2.25rem 2rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(12, 12, 16, 0.35);
          backdrop-filter: blur(12px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .bento-card:hover {
          border-color: rgba(0, 163, 255, 0.35);
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 163, 255, 0.08);
        }

        /* HERO CARD (FLAGSHIP 70%) SPLIT LAYOUT */
        .hero-split-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: 100%;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .hero-split-container {
            flex-direction: row;
            align-items: center;
          }
        }

        .hero-left {
          flex: 1.3;
        }

        .hero-right {
          flex: 0.9;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* BULLET LIST FOR HERO CARD */
        .hero-bullets {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
        }

        .bullet-icon {
          color: ${T.accent};
          font-size: 0.9rem;
          line-height: 1;
        }

        /* LARGE 3D HERO ASSET */
        .hero-asset-box {
          position: relative;
          width: 150px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-asset-glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 163, 255, 0.22) 0%, rgba(0, 229, 153, 0.12) 45%, transparent 70%);
          filter: blur(24px);
          pointer-events: none;
        }

        /* CARD HEADER (FOR standard 50% & 30% CARDS) */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .header-content {
          flex: 1;
        }

        /* INLINE 3D ASSET SLOT */
        .asset-slot-inline {
          position: relative;
          width: 76px;
          height: 76px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .asset-glow-inline {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          filter: blur(16px);
          pointer-events: none;
        }

        .asset-glow-inline.cyan {
          background: radial-gradient(circle, rgba(0, 163, 255, 0.28) 0%, transparent 70%);
        }

        .asset-glow-inline.green {
          background: radial-gradient(circle, rgba(0, 229, 153, 0.28) 0%, transparent 70%);
        }

        :global(.asset-img-inline) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6));
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin: 0;
        }

        .card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
        }

        /* SPECIALIZED HMS CARD ACCENT (30% WIDTH) */
        .card-hms {
          background: rgba(0, 229, 153, 0.035);
          border: 1px solid rgba(0, 229, 153, 0.3);
        }

        .card-hms:hover {
          background: rgba(0, 229, 153, 0.07);
          border-color: rgba(0, 229, 153, 0.6);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 229, 153, 0.15);
        }

        .hms-tag {
          display: inline-block;
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.accent};
          background: rgba(0, 229, 153, 0.12);
          border: 1px solid rgba(0, 229, 153, 0.3);
          padding: 4px 9px;
          border-radius: 6px;
          margin-bottom: 0.75rem;
        }

        .hms-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 800;
          color: ${T.accent};
          text-decoration: none;
          margin-top: 1.5rem;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .hms-cta-btn:hover {
          color: #ffffff;
          gap: 12px;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">{t.badge}</span>
          <h2 className="title">{t.title}</h2>
          {t.subtitle && <p className="subtitle">{t.subtitle}</p>}
        </div>

        <div className="bento-grid">
          
          {/* РЯД 1: КАРТОЧКА 1 (70% / col-70) — HERO FLAGSHIP WITH SPLIT LAYOUT */}
          <div className="bento-card col-70">
            <div className="hero-split-container">
              <div className="hero-left">
                <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '0.85rem' }}>
                  {t.card1Title}
                </h3>
                <p className="card-desc">
                  {renderWithStrong(t.card1Desc)}
                </p>

                {/* ИНЖЕНЕРНЫЕ ГАРАНТИИ (Заполняют пространство) */}
                <div className="hero-bullets">
                  <div className="bullet-item">
                    <span className="bullet-icon">◆</span>
                    <span>Unified P&amp;L &amp; Multi-Channel Ad Attribution</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-icon">◆</span>
                    <span>Zero-Leakage CRM Lead Routing Protocols</span>
                  </div>
                  <div className="bullet-item">
                    <span className="bullet-icon">◆</span>
                    <span>Real-Time Unit Economics &amp; Margin Dashboards</span>
                  </div>
                </div>
              </div>

              {/* КРУПНЫЙ 3D АССЕТ (150px) */}
              <div className="hero-right">
                <div className="hero-asset-box">
                  <div className="hero-asset-glow" />
                  <Image 
                    src="/assets/3d-data-cube.webp" 
                    alt="Systems & Data Architecture" 
                    className="asset-img-inline"
                    width={150}
                    height={150}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* РЯД 1: КАРТОЧКА 2 (30% / col-30) — Specialized Offer (HMS) */}
          <div className="bento-card card-hms col-30">
            <div>
              <span className="hms-tag">{t.hmsBadge}</span>
              
              <div className="card-header">
                <div className="header-content">
                  <h3 className="card-title" style={{ fontSize: '1.2rem' }}>{t.hmsTitle}</h3>
                </div>
                <div className="asset-slot-inline" style={{ width: 68, height: 68 }}>
                  <div className="asset-glow-inline green" />
                  <Image 
                    src="/assets/3d-hms-core.webp" 
                    alt="HMS Hospitality Tech" 
                    className="asset-img-inline"
                    width={68}
                    height={68}
                  />
                </div>
              </div>

              <p className="card-desc" style={{ fontSize: '0.86rem' }}>
                {t.hmsDesc}
              </p>
            </div>

            <Link href="/hms" className="hms-cta-btn">
              <span>{t.hmsCta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* РЯД 2: КАРТОЧКА 3 (50% / col-50) — Strategic Audits & Funnel Optimization */}
          <div className="bento-card col-50">
            <div>
              <div className="card-header">
                <div className="header-content">
                  <h3 className="card-title">{t.card2Title}</h3>
                </div>
                <div className="asset-slot-inline">
                  <div className="asset-glow-inline cyan" />
                  <Image 
                    src="/assets/3d-gtm-prism.webp" 
                    alt="Funnel Strategy Visual" 
                    className="asset-img-inline"
                    width={76}
                    height={76}
                  />
                </div>
              </div>

              <p className="card-desc">
                {renderWithStrong(t.card2Desc)}
              </p>
            </div>
          </div>

          {/* РЯД 2: КАРТОЧКА 4 (50% / col-50) — Process Automation & AI Workflows */}
          <div className="bento-card col-50">
            <div>
              <div className="card-header">
                <div className="header-content">
                  <h3 className="card-title">{t.card3Title}</h3>
                </div>
                <div className="asset-slot-inline">
                  <div className="asset-glow-inline green" />
                  <Image 
                    src="/assets/3d-ai-loop.webp" 
                    alt="AI Automation Visual" 
                    className="asset-img-inline"
                    width={76}
                    height={76}
                  />
                </div>
              </div>

              <p className="card-desc">
                {renderWithStrong(t.card3Desc)}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
