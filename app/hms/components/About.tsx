'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t?: {
    aboutLabel?: string;
    aboutAgency?: string;
    aboutName?: string;
    aboutRole?: string;
    aboutLocation?: string;
    aboutP1?: string;
    aboutP2?: string;
    aboutDirectLine?: string;
    aboutLinkAgency?: string;
    stat2Num?: string;
    stat2Name?: string;
    stat2Sub?: string;
    stat3Num?: string;
    stat3Name?: string;
    stat3Sub?: string;
  };
}

export default function About({ t = {} }: AboutProps) {
  const trustStats = [
    { num: t.stat2Num || "20+", name: t.stat2Name || "Brands Scaled", sub: t.stat2Sub || "B2B & Direct models" },
    { num: t.stat3Num || "10+", name: t.stat3Name || "Years Experience", sub: t.stat3Sub || "Growth & systems" }
  ];

  return (
    <section id="about" className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          padding: 0 0 3.5rem 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .about-block {
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .about-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: ${T.sub};
          opacity: 0.8;
          margin: 0 0 0.9rem 0;
        }

        /* Та же дисплейная гарнитура и то же начертание, что у заголовков
           секций, ступенью мельче — агентство не должно выпадать из страницы */
        .about-agency {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(26px, 4vw, 36px);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        /* Человек — подпись к агентству, а не объект блока */
        .about-role {
          font-size: 1rem;
          color: ${T.body};
          margin: 0.5rem 0 0 0;
          line-height: 1.45;
          text-wrap: pretty;
        }

        .about-location {
          font-size: 0.875rem;
          color: ${T.muted};
          margin: 0.35rem 0 0 0;
          line-height: 1.45;
          text-wrap: pretty;
          max-width: 560px;
        }

        .about-text {
          margin: 2rem 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
          width: 100%;
        }

        .about-paragraph {
          font-size: 1.05rem;
          line-height: 1.65;
          margin: 0;
          color: ${T.body};
          text-wrap: pretty;
        }

        .about-paragraph.dimmed {
          color: ${T.sub};
        }

        .trust-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          width: 100%;
          max-width: 520px;
          margin: 2.25rem 0 0 0;
        }

        .trust-stat-card {
          background: rgba(12, 14, 20, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.25rem 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.25rem;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .trust-stat-card:hover {
          background: rgba(22, 27, 38, 0.75);
          border-color: ${T.accent35};
        }

        /* Зелёно-синий градиент здесь снят: он закреплён за деньгами
           владельца (CTA, калькулятор, маркеры решений), а не за
           регалиями агентства */
        .stat-num {
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
          color: #ffffff;
        }

        .stat-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.2rem;
        }

        .stat-sub {
          font-size: 0.7rem;
          color: ${T.sub};
          line-height: 1.3;
        }

        .about-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 0.6rem 2rem;
          margin-top: 1.75rem;
        }

        /* Ссылка уводит со страницы прямо перед прайсингом — не должна
           читаться как основное действие блока */
        .about-link {
          font-size: 0.82rem;
          font-weight: 600;
          color: ${T.sub};
          text-decoration: none;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }

        .about-link:hover {
          opacity: 0.75;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .about-section {
            padding: 0 0 3rem 0;
          }
          .about-paragraph {
            font-size: 0.98rem;
            line-height: 1.6;
          }
        }

        @media (max-width: 767px) {
          .about-section {
            padding: 0 0 2.5rem 0;
          }
          .about-role {
            font-size: 0.94rem;
          }
          .about-location {
            font-size: 0.82rem;
          }
          .about-text {
            margin-top: 1.6rem;
          }
          .about-paragraph {
            font-size: 0.95rem;
            line-height: 1.55;
          }
          .trust-stats-grid {
            gap: 0.5rem;
            margin-top: 1.75rem;
          }
          .trust-stat-card {
            padding: 0.9rem 0.4rem;
            border-radius: 10px;
          }
          .stat-num {
            font-size: 1.3rem;
          }
          .stat-name {
            font-size: 0.75rem;
            margin-top: 0.15rem;
            line-height: 1.2;
          }
          .stat-sub {
            font-size: 0.62rem;
            line-height: 1.2;
            opacity: 0.85;
          }
          .about-links {
            gap: 0.75rem 1.5rem;
            margin-top: 1.5rem;
          }
          .about-link {
            font-size: 0.88rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="about-block">
          {t.aboutLabel && <p className="about-label">{t.aboutLabel}</p>}

          <h3 className="about-agency">{t.aboutAgency || "FT Agency"}</h3>
          <p className="about-role">
            {t.aboutName || "Fedor Tsvetkov"} · {t.aboutRole || "Founder & Managing Director"}
          </p>
          {t.aboutLocation && <p className="about-location">{t.aboutLocation}</p>}

          <div className="about-text">
            <p className="about-paragraph">{t.aboutP1}</p>
            {t.aboutP2 && <p className="about-paragraph dimmed">{t.aboutP2}</p>}
            {t.aboutDirectLine && <p className="about-paragraph">{t.aboutDirectLine}</p>}
          </div>

          <div className="trust-stats-grid">
            {trustStats.map((stat, i) => (
              <div className="trust-stat-card" key={i}>
                <span className="stat-num">{stat.num}</span>
                <span className="stat-name">{stat.name}</span>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            ))}
          </div>

          <div className="about-links">
            <a
              className="about-link"
              href="https://tsvetkov.site"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.aboutLinkAgency || "More about FT Agency"} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
