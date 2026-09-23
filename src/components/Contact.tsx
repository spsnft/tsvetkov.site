'use client';

import { useRef } from 'react';
import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';
import { WhatsAppIcon, TelegramIcon, LineIcon, MailIcon } from '@/src/components/home/Icons';
import ParticleField from '@/src/components/lab/ParticleField';

const PARTICLE_COLORS = ['rgba(245, 243, 238, 0.55)', 'rgba(245, 243, 238, 0.28)'];
// ParticleField's own default maxSize is 2.5 — this block wants that × 1.5.
const PARTICLE_MAX_SIZE = 3.75;

interface Channel {
  label: string;
  href: string;
}

interface ContactProps {
  title: string;
  sub: string;
  channels: Channel[];
  email: string;
  mailLink: string;
  portraitAlt?: string;
}

// Rendered by fixed index (never a component reference stored in a variable
// or array) — some build in this environment pathologically hangs on the
// `const Icon = list[i]; <Icon />` pattern, even with trivial components.
function ChannelIcon({ index }: { index: number }) {
  if (index === 0) return <WhatsAppIcon />;
  if (index === 1) return <TelegramIcon />;
  return <LineIcon />;
}

export const Contact = ({ title, sub, channels, email, mailLink, portraitAlt = 'Fedor Tsvetkov' }: ContactProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <style jsx>{`
        .contact {
          position: relative;
          overflow: hidden;
          background: ${T.home.color.dark};
          color: ${T.home.color.textOnDarkPrimary};
        }

        .particle-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* Mobile */
        .mobile {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 32px 24px 48px 24px;
        }

        @media (min-width: 768px) {
          .mobile {
            display: none;
          }
        }

        .photo-mobile {
          position: relative;
          z-index: 1;
          display: block;
          align-self: center;
          width: 220px;
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }

        .header-mobile {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        h2.section-title-mobile {
          margin: 0;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          font-size: ${T.home.type.mobile.h2};
        }

        .sub-mobile {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          line-height: 1.6;
          font-size: ${T.home.type.mobile.base};
        }

        .channels-mobile {
          display: flex;
          flex-direction: column;
          width: max-content;
        }

        .channel-mobile {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 24px 0;
          color: ${T.home.color.textOnDarkPrimary};
          text-decoration: none;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.01em;
          font-size: ${T.home.type.mobile.body};
        }

        .channel-mobile:first-child {
          padding-top: 0;
          border-top: none;
        }

        .channel-mobile:not(:first-child) {
          border-top: 1px solid ${T.home.color.darkBorder};
        }

        .channel-mobile:hover {
          color: ${T.home.color.accentHoverDark};
        }

        /* Tablet/desktop */
        .wide {
          position: relative;
          z-index: 1;
          display: none;
        }

        @media (min-width: 768px) {
          .wide {
            ${homePadCSS()}
            display: grid;
            grid-template-columns: 1fr 240px;
            gap: 40px;
            align-items: center;
            padding-top: 64px;
            padding-bottom: 64px;
          }
        }

        @media (min-width: 1280px) {
          .wide {
            grid-template-columns: 50% 50%;
            gap: 0;
            padding-bottom: 32px;
          }
        }

        .left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .photo-wide {
          position: relative;
          z-index: 1;
          display: block;
          justify-self: end;
          width: 240px;
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }

        @media (min-width: 1280px) {
          .photo-wide {
            width: 360px;
          }
        }

        .header-wide {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        h2.section-title-wide {
          margin: 0;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          font-size: ${T.home.type.desktop.h2};
        }

        .sub-wide {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          line-height: 1.6;
          max-width: 30ch;
          font-size: ${T.home.type.desktop.base};
        }

        .channels-wide {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .channel-wide {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 0;
          color: ${T.home.color.textOnDarkPrimary};
          text-decoration: none;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.015em;
          font-size: ${T.home.type.desktop.body};
        }

        .channel-wide:first-child {
          padding-top: 0;
          border-top: none;
        }

        .channel-wide:not(:first-child) {
          border-top: 1px solid ${T.home.color.darkBorder};
        }

        .channel-wide:hover {
          color: ${T.home.color.accentHoverDark};
        }
      `}</style>

      <div className="particle-bg" aria-hidden="true">
        <ParticleField
          backgroundColor="transparent"
          particleColors={PARTICLE_COLORS}
          particleCount={24}
          mobileParticleCount={14}
          maxSize={PARTICLE_MAX_SIZE}
          connectionLines
          linesNearPointerOnly
          lineAlpha={0.15}
          interactionTarget={sectionRef}
          tapToggle
        />
      </div>

      {/* Mobile */}
      <div className="mobile">
        <img className="photo-mobile" src="/hero-card.webp" alt={portraitAlt} />
        <div className="header-mobile">
          <h2 className="section-title-mobile">{title}</h2>
          <p className="sub-mobile">{sub}</p>
        </div>
        <div className="channels-mobile">
          {channels.map((c, i) => (
            <a className="channel-mobile" key={c.label} href={c.href} target="_blank" rel="noopener">
              <ChannelIcon index={i} />
              <span>{c.label}</span>
            </a>
          ))}
          <a className="channel-mobile" href={mailLink}>
            <MailIcon />
            <span>{email}</span>
          </a>
        </div>
      </div>

      {/* Tablet/desktop */}
      <div className="wide">
        <div className="left">
          <div className="header-wide">
            <h2 className="section-title-wide">{title}</h2>
            <p className="sub-wide">{sub}</p>
          </div>
          <div className="channels-wide">
            {channels.map((c, i) => (
              <a className="channel-wide" key={c.label} href={c.href} target="_blank" rel="noopener">
                <ChannelIcon index={i} />
                <span>{c.label}</span>
              </a>
            ))}
            <a className="channel-wide" href={mailLink}>
              <MailIcon />
              <span>{email}</span>
            </a>
          </div>
        </div>
        <img className="photo-wide" src="/hero-card.webp" alt={portraitAlt} />
      </div>
    </section>
  );
};
