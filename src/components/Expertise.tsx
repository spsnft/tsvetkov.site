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
      card1Pills: string[];
      hmsBadge: string;
      hmsTitle: string;
      hmsDesc: string;
      hmsCta: string;
      card2Title: string;
      card2Desc: string;
      card2Pills: string[];
      card3Title: string;
      card3Desc: string;
      card3Pills: string[];
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
    card1Pills: ['100% Revenue Visibility', 'Real-Time Unit Economics', 'Zero OTA Commissions'],
    hmsBadge: 'SPECIALIZED OFFER',
    hmsTitle: 'Hospitality & HoReCa Systems',
    hmsDesc: 'A dedicated ecosystem for hotels & resorts designed to eliminate OTA commissions, sync PMS data seamlessly, and maximize direct bookings.',
    hmsCta: 'Explore HMS Solution',
    card2Title: 'Strategic Audits & Funnel Optimization',
    card2Desc: 'We analyze your entire customer journey to find exactly where you are losing money. By <strong>auditing bottlenecks, rebuilding sales funnels, and optimizing conversion</strong>, we maximize revenue from existing traffic.',
    card2Pills: ['Bottleneck Audits', 'Maximized ROI', 'CAC Reduction'],
    card3Title: 'Process Automation & AI Workflows',
    card3Desc: 'Eliminate operational lag and human error across your pipelines. Instantly route leads, <strong>automate CRM handoffs, and deploy custom AI agents</strong> to speed up sales cycles and cut overhead.',
    card3Pills: ['Zero Lead Lag', 'Automated CRM Sync', 'Reduced Overhead'],
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

        .bento-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          width: 100%;
        }

        /* CARD FULL (Top / Featured 2+1 Layout) */
        .card-full {
          flex: 1 1 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 2.25rem 2rem;
          border-radius: 20px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          background: rgba(18, 18, 22, 0.5);
          backdrop-filter: blur(12px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .card-full:hover {
          border-color: rgba(0, 163, 255, 0.35) !important;
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 163, 255, 0.08);
        }

        .featured-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 992px) {
          .featured-content {
            grid-template-columns: 1fr 320px;
          }
        }

        .featured-main {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        /* EMBEDDED HMS OFFER BOX */
        .hms-offer-box {
          position: relative;
          background: rgba(0, 229, 153, 0.03);
          border: 1px solid rgba(0, 229, 153, 0.22);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.25rem;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }

        .hms-offer-box:hover {
          background: rgba(0, 229, 153, 0.06);
          border-color: rgba(0, 229, 153, 0.45);
          transform: translateY(-2px);
        }

        .hms-tag {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.accent};
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.25);
          padding: 3px 8px;
          border-radius: 6px;
        }

        .hms-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0.5rem 0 0.35rem 0;
          line-height: 1.25;
        }

        .hms-desc {
          font-size: 0.82rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        .hms-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: ${T.accent};
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .hms-offer-box:hover .hms-cta {
          color: #ffffff;
          gap: 10px;
        }

        /* CARD HALF (Bottom Row) */
        .card-half {
          flex: 1 1 420px;
          min-width: 0;
          position: relative;
          overflow: hidden;
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 18px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          background: rgba(12, 12, 16, 0.25);
          backdrop-filter: blur(10px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .card-half:hover {
          border-color: rgba(0, 163, 255, 0.35) !important;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 163, 255, 0.08);
        }

        .asset-slot {
          position: relative;
          height: 130px;
          width: 100%;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .asset-glow {
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          filter: blur(20px);
        }

        .asset-glow.cyan {
          background: radial-gradient(circle, rgba(0, 163, 255, 0.18) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .asset-glow.green {
          background: radial-gradient(circle, rgba(0, 229, 153, 0.16) 0%, rgba(0, 0, 0, 0) 70%);
        }

        :global(.asset-img) {
          max-height: 100%;
          width: auto !important;
          height: auto !important;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }

        .card-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 1.5rem 0;
        }

        /* PILLS / BADGES */
        .pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .pill {
          font-size: 0.74rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 5px 12px;
          border-radius: 8px;
          letter-spacing: -0.01em;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">{t.badge}</span>
          <h2 className="title">{t.title}</h2>
          {t.subtitle && <p className="subtitle">{t.subtitle}</p>}
        </div>

        <div className="bento-grid">
          
          {/* 1. FEATURED BLOCK (Top / Full-Width Systems, Data & HMS) */}
          <div className="card-full card-matte">
            <div className="featured-content">
              
              <div className="featured-main">
                <div className="asset-slot" style={{ height: 110, justifyContent: 'flex-start', marginBottom: '0.75rem' }}>
                  <div className="asset-glow green" style={{ left: 0 }} />
                  <Image 
                    src="/assets/3d-data-cube.png" 
                    alt="Systems & Data Architecture" 
                    className="asset-img"
                    width={180}
                    height={110}
                  />
                </div>

                <div>
                  <h3 className="card-title">{t.card1Title}</h3>
                  <p className="card-desc">
                    {renderWithStrong(t.card1Desc)}
                  </p>
                </div>

                <div className="pills-container">
                  {t.card1Pills.map((pill, i) => (
                    <span key={i} className="pill">✓ {pill}</span>
                  ))}
                </div>
              </div>

              {/* HMS Embedded Offer Box */}
              <div className="hms-offer-box">
                <div>
                  <span className="hms-tag">{t.hmsBadge}</span>
                  <h4 className="hms-title">{t.hmsTitle}</h4>
                  <p className="hms-desc">{t.hmsDesc}</p>
                </div>

                <Link href="/hms" className="hms-cta">
                  <span>{t.hmsCta}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

          {/* 2. SECONDARY BLOCK A (Strategic Audits & Funnel Optimization) */}
          <div className="card-half card-matte">
            <div className="asset-slot">
              <div className="asset-glow cyan" />
              <Image 
                src="/assets/3d-gtm-prism.png" 
                alt="Funnel Strategy Visual" 
                className="asset-img"
                width={180}
                height={130}
              />
            </div>

            <div>
              <h3 className="card-title">{t.card2Title}</h3>
              <p className="card-desc">
                {renderWithStrong(t.card2Desc)}
              </p>
            </div>

            <div className="pills-container">
              {t.card2Pills.map((pill, i) => (
                <span key={i} className="pill">✓ {pill}</span>
              ))}
            </div>
          </div>

          {/* 3. SECONDARY BLOCK B (Process Automation & AI Workflows) */}
          <div className="card-half card-matte">
            <div className="asset-slot">
              <div className="asset-glow green" />
              <Image 
                src="/assets/3d-ai-loop.png" 
                alt="AI Automation Visual" 
                className="asset-img"
                width={180}
                height={130}
              />
            </div>

            <div>
              <h3 className="card-title">{t.card3Title}</h3>
              <p className="card-desc">
                {renderWithStrong(t.card3Desc)}
              </p>
            </div>

            <div className="pills-container">
              {t.card3Pills.map((pill, i) => (
                <span key={i} className="pill">✓ {pill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
