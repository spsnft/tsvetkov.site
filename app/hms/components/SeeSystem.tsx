'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { T } from '../../../src/theme/tokens';

interface SeeSystemProps {
  t?: {
    seeSystemTitle?: string;
    seeSystemStep1?: string;
    seeSystemStep2?: string;
    seeSystemStep3?: string;
    seeSystemLabel1?: string;
    seeSystemBenefit1?: string;
    seeSystemLabel2?: string;
    seeSystemBenefit2?: string;
    seeSystemLabel3?: string;
    seeSystemBenefit3?: string;
    seeSystemCaption?: string;
    seeSystemDisclaimer?: string;
  };
}

// Три условных демо-экрана — не скриншоты Little Hotelier/Beds24/Cloudbeds
// (клиентам подключаются разные платформы), а нейтральный интерфейс,
// свёрстанный в дизайн-системе сайта. См. /scripts/demo-screens.
//
// Десктоп (≥1024px): одна перекрывающаяся сцена — дашборд снизу, телефон и
// письмо поверх. Мобилка (<1024px): горизонтальная карусель с peek и
// пошаговым индикатором. Обе разметки лежат в DOM одновременно и
// переключаются media-запросом (тот же приём, что в IndustryProof/Hero).
export default function SeeSystem({ t = {} }: SeeSystemProps) {
  // Short forms — used only by the clickable step pills in the mobile nav,
  // which don't have room for the full label + benefit line
  const steps = [
    t.seeSystemStep1 || 'Guest books',
    t.seeSystemStep2 || 'You see it',
    t.seeSystemStep3 || 'Guest gets this',
  ];

  // Full label + benefit line — the actual caption shown at each screen
  const labels = [
    t.seeSystemLabel1 || 'Guest books on your site',
    t.seeSystemLabel2 || 'You see it instantly',
    t.seeSystemLabel3 || 'Guest gets confirmed',
  ];
  const benefits = [
    t.seeSystemBenefit1 || 'Not on Booking.com. Zero commission on this one.',
    t.seeSystemBenefit2 || 'Every channel in one calendar. The room closes everywhere automatically.',
    t.seeSystemBenefit3 || 'Sent automatically, in your name. You do nothing.',
  ];

  const slides = [
    { src: '/hms/screens/guest-booking.png', alt: 'Direct booking page for Baan Sirin Villa' },
    { src: '/hms/screens/dashboard-mobile.png', alt: 'Owner dashboard and channel calendar for Baan Sirin Villa' },
    { src: '/hms/screens/confirmation-email.png', alt: 'Booking confirmation email from Baan Sirin Villa' },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const els = slideRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    if (!scroller || !els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = els.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root: scroller, threshold: [0.6] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (i: number) => {
    const slide = slideRefs.current[i];
    const scroller = scrollerRef.current;
    if (!slide || !scroller) return;
    scroller.scrollTo({ left: slide.offsetLeft - 20, behavior: 'smooth' });
  };

  return (
    <section id="see-system" className="see-section">
      <style jsx>{`
        .see-section {
          width: 100%;
          padding: 3rem 0 3.5rem 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .see-title {
          text-align: center;
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 3rem 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
          text-wrap: balance;
        }

        .see-step {
          display: inline-flex;
          align-items: baseline;
          gap: 0.4rem;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: ${T.muted};
          white-space: nowrap;
        }
        .see-step .step-num {
          color: ${T.accent};
        }

        /* Тише лейбла — тот же муted, но ниже непрозрачность */
        .see-benefit {
          margin: 0.3rem 0 0 0;
          font-size: 0.76rem;
          line-height: 1.45;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.32);
          text-wrap: pretty;
        }

        /* ================= DESKTOP: overlapping scene ================= */
        .see-stage-wrap {
          display: none;
        }

        @media (min-width: 1024px) {
          .see-stage-wrap {
            display: block;
            max-width: 980px;
            margin: 44px auto 0 auto;
          }

          .see-stage {
            position: relative;
            width: 100%;
            aspect-ratio: 1000 / 700;
          }

          .see-layer {
            position: absolute;
          }
          .see-layer :global(img) {
            display: block;
            width: 100%;
            height: auto;
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          /* Base layer. Positioned low enough that the phone/email overlap
             only grazes its header, never the metric numbers. */
          .see-layer-dashboard {
            left: 30%;
            top: 30%;
            width: 64%;
            z-index: 1;
          }
          .see-layer-dashboard :global(img) {
            border-radius: 18px;
            box-shadow: 0 24px 55px rgba(0, 0, 0, 0.4);
          }
          .see-layer-dashboard .see-cap-block {
            position: absolute;
            left: 2px;
            top: 100%;
            margin-top: 14px;
            max-width: 380px;
          }

          .see-layer-phone {
            left: 18%;
            top: 24%;
            width: 15.5%;
            z-index: 2;
          }
          .see-layer-phone :global(img) {
            box-shadow: 0 30px 55px rgba(0, 0, 0, 0.55), 0 10px 22px rgba(0, 0, 0, 0.4);
          }
          .see-layer-phone .see-cap-block {
            position: absolute;
            left: 2px;
            bottom: 100%;
            margin-bottom: 10px;
            width: 210px;
          }

          .see-layer-email {
            left: 84%;
            top: 1%;
            width: 11%;
            z-index: 3;
          }
          .see-layer-email :global(img) {
            box-shadow: 0 30px 55px rgba(0, 0, 0, 0.55), 0 10px 22px rgba(0, 0, 0, 0.4);
          }
          .see-layer-email .see-cap-block {
            position: absolute;
            left: 2px;
            bottom: 100%;
            margin-bottom: 10px;
            width: 190px;
          }
        }

        /* ================= MOBILE: carousel ================= */
        .see-carousel-wrap {
          margin-top: 0.5rem;
        }

        .see-carousel {
          position: relative;
          display: flex;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 0 0 6px 0;
          scrollbar-width: none;
        }
        .see-carousel::-webkit-scrollbar {
          display: none;
        }

        .see-slide {
          flex: 0 0 84%;
          scroll-snap-align: start;
          display: flex;
          flex-direction: column;
        }

        .see-slide .see-cap-block {
          margin: 0 0 0.75rem 2px;
        }

        .see-slide-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 390 / 844;
          max-height: 78vh;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 44px rgba(0, 0, 0, 0.45);
          background: ${T.bg0};
        }
        .see-slide-frame :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }
        .see-slide-frame::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 64px;
          background: linear-gradient(to bottom, transparent, ${T.bg0});
          pointer-events: none;
        }

        .see-steps-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.2rem 0.5rem;
          margin-top: 1.35rem;
        }
        .see-step-btn {
          display: inline-flex;
          align-items: baseline;
          gap: 0.32rem;
          background: none;
          border: none;
          padding: 0.4rem 0.1rem;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: 0.76rem;
          font-weight: 700;
          color: ${T.muted};
          cursor: pointer;
          white-space: nowrap;
        }
        .see-step-btn .step-num {
          color: ${T.muted};
          font-weight: 800;
        }
        .see-step-btn.active,
        .see-step-btn.active .step-num {
          color: ${T.accent};
        }
        .see-step-sep {
          color: ${T.muted};
          opacity: 0.5;
          font-size: 0.85rem;
        }

        @media (min-width: 1024px) {
          .see-carousel-wrap {
            display: none;
          }
        }

        /* ================= shared: money line + disclaimer ================= */
        /* Единственная цифра в секции — это аргумент, не сноска, поэтому
           кегль заметно крупнее обычной подписи */
        .see-caption {
          margin: 2.75rem auto 0 auto;
          max-width: 560px;
          text-align: center;
          font-size: clamp(1.15rem, 2.4vw, 1.55rem);
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.01em;
          color: #ffffff;
          text-wrap: pretty;
        }

        .see-disclaimer {
          margin: 0.9rem 0 0 0;
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
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="see-title">{t.seeSystemTitle || 'See how it works end to end'}</h2>

        {/* Desktop scene */}
        <div className="see-stage-wrap">
          <div className="see-stage">
            <div className="see-layer see-layer-dashboard">
              <Image
                src="/hms/screens/dashboard-desktop.png"
                alt="Owner dashboard and channel calendar for Baan Sirin Villa"
                width={1280}
                height={800}
                loading="lazy"
              />
              <div className="see-cap-block">
                <span className="see-step">
                  <span className="step-num">2</span>
                  {labels[1]}
                </span>
                <p className="see-benefit">{benefits[1]}</p>
              </div>
            </div>
            <div className="see-layer see-layer-phone">
              <Image
                src="/hms/screens/guest-booking.png"
                alt="Direct booking page for Baan Sirin Villa"
                width={390}
                height={844}
                loading="lazy"
              />
              <div className="see-cap-block">
                <span className="see-step">
                  <span className="step-num">1</span>
                  {labels[0]}
                </span>
                <p className="see-benefit">{benefits[0]}</p>
              </div>
            </div>
            <div className="see-layer see-layer-email">
              <Image
                src="/hms/screens/confirmation-email.png"
                alt="Booking confirmation email from Baan Sirin Villa"
                width={390}
                height={844}
                loading="lazy"
              />
              <div className="see-cap-block">
                <span className="see-step">
                  <span className="step-num">3</span>
                  {labels[2]}
                </span>
                <p className="see-benefit">{benefits[2]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="see-carousel-wrap">
          <div className="see-carousel" ref={scrollerRef}>
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className="see-slide"
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
              >
                <div className="see-cap-block">
                  <span className="see-step">
                    <span className="step-num">{i + 1}</span>
                    {labels[i]}
                  </span>
                  <p className="see-benefit">{benefits[i]}</p>
                </div>
                <div className="see-slide-frame">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="84vw"
                    loading="lazy"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="see-steps-nav" role="tablist" aria-label="Screens">
            {steps.map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span className="see-step-sep" aria-hidden="true">·</span>}
                <button
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`see-step-btn${active === i ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  <span className="step-num">{i + 1}</span>
                  {label}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        <p className="see-caption">
          {t.seeSystemCaption || 'From booking to confirmation — without the commission.'}
        </p>
        <p className="see-disclaimer">
          {t.seeSystemDisclaimer ||
            'Interface shown for illustration. The actual platform is selected per property.'}
        </p>
      </div>
    </section>
  );
}
