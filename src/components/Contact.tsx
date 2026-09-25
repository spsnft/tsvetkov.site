'use client';

import { useRef } from 'react';
import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';
import { WhatsAppIcon, TelegramIcon, LineIcon, MailIcon } from '@/src/components/home/Icons';
import ParticleField from '@/src/components/lab/ParticleField';

// Opacity is no longer baked into the color — ParticleField's density mode
// randomizes and flickers per-particle alpha on top of this flat color
// (Claude Design "Proof/Contact particle field").
const PARTICLE_COLOR = 'rgb(245, 243, 238)';

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
}

// Rendered by fixed index (never a component reference stored in a variable
// or array) — some build in this environment pathologically hangs on the
// `const Icon = list[i]; <Icon />` pattern, even with trivial components.
function ChannelIcon({ index }: { index: number }) {
  if (index === 0) return <WhatsAppIcon />;
  if (index === 1) return <TelegramIcon />;
  return <LineIcon />;
}

export const Contact = ({ title, sub, channels, email, mailLink }: ContactProps) => {
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
            grid-template-columns: 1fr 1.35fr;
            gap: 48px;
            align-items: center;
            padding-top: 64px;
            padding-bottom: 64px;
          }
        }

        @media (min-width: 1280px) {
          .wide {
            padding-bottom: 32px;
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
          width: max-content;
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
          particleColors={[PARTICLE_COLOR]}
          density={1}
          minSize={0.5}
          maxSize={1.6}
          connectionLines
          linesNearPointerOnly
          lineMaxDistance={50}
          lineMaxCount={20}
          lineAlpha={0.08}
          attractionRadius={120}
          attractionMaxTargets={20}
          attractionMinDistance={28}
          interactionTarget={sectionRef}
          tapToggle
        />
      </div>

      {/* Mobile */}
      <div className="mobile">
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
    </section>
  );
};
