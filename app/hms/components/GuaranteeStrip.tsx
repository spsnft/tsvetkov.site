'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface GuaranteeStripProps {
  t?: {
    riskTitle?: string;
    riskText?: string;
  };
}

// Единственный риск-реверс на странице. Дублируется внизу прайсинга
// намеренно — здесь его видят те, кто не доскроллит.
export default function GuaranteeStrip({ t = {} }: GuaranteeStripProps) {
  return (
    <section className="guarantee-strip">
      <style jsx>{`
        .guarantee-strip {
          width: 100%;
          padding: 0 0 2.75rem 0;
        }

        .strip-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .strip-title {
          margin: 0;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(1.3rem, 2.6vw, 1.7rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          color: #ffffff;
          text-wrap: balance;
        }

        .strip-text {
          margin: 0.5rem 0 0 0;
          font-size: clamp(0.95rem, 1.5vw, 1.05rem);
          font-weight: 500;
          color: ${T.sub};
          text-wrap: pretty;
        }

        @media (max-width: 767px) {
          .guarantee-strip {
            padding: 0 0 2rem 0;
          }
        }
      `}</style>

      <div className="container">
        <div className="strip-inner">
          <p className="strip-title">{t.riskTitle || '50% upfront, 50% on launch.'}</p>
          <p className="strip-text">
            {t.riskText || "Not live in 14 days — you don't pay the second half."}
          </p>
        </div>
      </div>
    </section>
  );
}
