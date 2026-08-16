'use client';

import React from 'react';
import Image from 'next/image';
import { T } from '../../../src/theme/tokens';

interface SeeSystemProps {
  t?: {
    seeSystemTitle?: string;
    seeSystemCaption1?: string;
    seeSystemMoney1?: string;
    seeSystemCaption2?: string;
    seeSystemMoney2?: string;
    seeSystemCaption3?: string;
    seeSystemMoney3?: string;
    seeSystemDisclaimer?: string;
  };
}

// Три условных демо-экрана — не скриншоты Little Hotelier/Beds24/Cloudbeds
// (клиентам подключаются разные платформы), а нейтральный интерфейс,
// свёрстанный в дизайн-системе сайта. См. /scripts/demo-screens.
export default function SeeSystem({ t = {} }: SeeSystemProps) {
  return (
    <section id="see-system" className="see-section">
      <style jsx>{`
        .see-section {
          width: 100%;
          padding: 3rem 0 3.5rem 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .see-inner {
          max-width: 640px;
          margin: 0 auto;
        }

        .see-title {
          text-align: center;
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 3.5rem 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
          text-wrap: balance;
        }

        .see-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 4rem;
        }

        .see-block:last-of-type {
          margin-bottom: 1.75rem;
        }

        .see-caption {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.2rem;
          color: #ffffff;
          margin: 0 0 1.35rem 0;
          text-align: center;
          letter-spacing: -0.01em;
        }

        .see-frame {
          position: relative;
          width: 100%;
          border-radius: ${T.radius.xl};
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          background: ${T.bg0};
        }

        .see-frame :global(img) {
          display: block;
          width: 100%;
          height: auto;
        }

        .see-frame-portrait {
          max-width: 340px;
        }

        .see-frame-dashboard {
          aspect-ratio: 390 / 844;
        }

        @media (min-width: 900px) {
          .see-frame-dashboard {
            aspect-ratio: 1280 / 800;
          }
        }

        .see-money {
          margin: 1.15rem 0 0 0;
          max-width: 460px;
          text-align: center;
          font-size: 0.98rem;
          line-height: 1.55;
          color: ${T.sub};
          text-wrap: pretty;
        }

        .see-disclaimer {
          margin: 0;
          text-align: center;
          font-size: 0.78rem;
          line-height: 1.5;
          color: ${T.muted};
          text-wrap: pretty;
        }

        @media (max-width: 767px) {
          .see-section {
            padding: 2.5rem 0 2.75rem 0;
          }
          .see-title {
            font-size: 1.9rem;
            margin-bottom: 2.75rem;
          }
          .see-caption {
            font-size: 1.05rem;
          }
          .see-block {
            margin-bottom: 3rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="see-inner">
          <h2 className="see-title">{t.seeSystemTitle || 'See how it works end to end'}</h2>

          <div className="see-block">
            <p className="see-caption">{t.seeSystemCaption1 || 'What your guest sees'}</p>
            <div className="see-frame see-frame-portrait">
              <Image
                src="/hms/screens/guest-booking.png"
                alt="Direct booking page for Baan Sirin Villa, shown on a phone"
                width={390}
                height={844}
                loading="lazy"
              />
            </div>
            <p className="see-money">
              {t.seeSystemMoney1 || 'Your rooms, your rates, your page. No commission on the booking.'}
            </p>
          </div>

          <div className="see-block">
            <p className="see-caption">{t.seeSystemCaption2 || 'What you see'}</p>
            <div className="see-frame see-frame-dashboard">
              <picture>
                <source media="(min-width: 900px)" srcSet="/hms/screens/dashboard-desktop.png" />
                <img
                  src="/hms/screens/dashboard-mobile.png"
                  alt="Owner dashboard: occupancy, direct bookings, commission saved, and a channel calendar for Baan Sirin Villa"
                  width={390}
                  height={844}
                  loading="lazy"
                />
              </picture>
            </div>
            <p className="see-money">
              {t.seeSystemMoney2 ||
                'Every booking from every channel in one calendar — and what each one costs you.'}
            </p>
          </div>

          <div className="see-block">
            <p className="see-caption">{t.seeSystemCaption3 || 'What your guest gets'}</p>
            <div className="see-frame see-frame-portrait">
              <Image
                src="/hms/screens/confirmation-email.png"
                alt="Booking confirmation email sent directly from Baan Sirin Villa"
                width={390}
                height={844}
                loading="lazy"
              />
            </div>
            <p className="see-money">
              {t.seeSystemMoney3 || "The confirmation comes from you. The guest is yours, not the platform's."}
            </p>
          </div>

          <p className="see-disclaimer">
            {t.seeSystemDisclaimer ||
              'Interface shown for illustration. The actual platform is selected per property.'}
          </p>
        </div>
      </div>
    </section>
  );
}
