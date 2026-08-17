'use client';

import React from 'react';
import Link from 'next/link';
import { T } from '../../../src/theme/tokens';
import WhatsAppCta from './WhatsAppCta';

interface FooterCTAProps {
  t?: {
    footerLabel?: string;
    footerTitle?: string;
    footerSub1?: string;
    footerSub2?: string;
    footerSub?: string;
    footerBtn?: string;
    btnAudit?: string;
    waMessage?: string;
    [key: string]: any;
  };
}

export default function FooterCTA({ t = {} }: FooterCTAProps) {
  const titleText = t.footerTitle || "Ready to maximize your revenue?";
  const sub1Text = t.footerSub1 || t.footerSub || "Stop leaving 15–20% on the table";
  const sub2Text = t.footerSub2 || "Take full control of your direct bookings";
  const btnText = t.footerBtn || t.btnAudit || "Free Revenue Check";

  return (
    <section className="footer-cta-section">
      <style jsx>{`
        .footer-cta-section {
          width: 100%;
          padding: 0 0 7rem 0;
          text-align: center;
          position: relative;
          background: transparent;
        }
        
        .cta-box {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        /* Единственная секция без eyebrow приведена к общему правилу —
           тот же паттерн (8px, мельче и глуше H2), что и в остальных
           секциях страницы. Обёртка нужна, чтобы 8px-зазор не потерялся
           в общем gap: 1.5rem у .cta-box */
        .cta-header {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-eyebrow {
          margin: 0 0 ${T.hms.eyebrowGap} 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          opacity: 0.8;
        }

        .main-title {
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0;
          color: #ffffff;
          text-wrap: pretty;
        }
        
        .subtitle-box {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 0.8rem;
        }

        .subtitle {
          color: ${T.sub};
          font-size: clamp(1.05rem, 1.5vw, 1.2rem);
          line-height: 1.5;
          margin: 0;
          text-wrap: pretty;
        }

        /* Одна кнопка: по контенту на десктопе, на всю ширину на мобильном */
        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .cta-actions :global(.btn-premium-core svg) {
          flex-shrink: 0;
        }

        /* Что произойдёт после нажатия — тише кнопки, сразу под ней */
        .cta-note {
          margin: -0.6rem 0 0 0;
          font-size: 0.8rem;
          line-height: 1.45;
          color: rgba(255, 255, 255, 0.45);
          max-width: 420px;
          text-wrap: pretty;
        }

        .legal-footer {
          width: 100%;
          max-width: 1100px;
          margin: 4rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .legal-footer :global(a) {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-footer :global(a:hover) {
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 767px) {
          .cta-actions :global(.btn-premium-core) {
            width: 100%;
            padding: 0 1rem;
          }
        }

        @media (max-width: 360px) {
          .cta-actions :global(.btn-premium-core) {
            padding: 0 0.7rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 768px) {
          .footer-cta-section {
            padding: 0 0 4.5rem 0;
          }
          .legal-footer {
            justify-content: center;
            text-align: center;
            margin-top: 3rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="cta-box">
          <div className="cta-header">
            {t.footerLabel && <p className="footer-eyebrow">{t.footerLabel}</p>}
            <h2 className="main-title">{titleText}</h2>
          </div>

          <div className="subtitle-box">
            <p className="subtitle">{sub1Text}</p>
            {sub2Text && <p className="subtitle">{sub2Text}</p>}
          </div>

          <div className="cta-actions">
            <WhatsAppCta label={btnText} message={t.waMessage} />
          </div>

          {t.ctaNote && <p className="cta-note">{t.ctaNote}</p>}
        </div>

        <div className="legal-footer">
          <div>© 2026 FT Agency. All rights reserved.</div>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
