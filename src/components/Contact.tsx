'use client';

import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';

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

export const Contact = ({ title, sub, channels, email, mailLink }: ContactProps) => {
  return (
    <section className="contact" id="contact">
      <style jsx>{`
        .contact {
          ${homePadCSS()}
          background: ${T.home.color.dark};
          padding-top: 32px;
          padding-bottom: 48px;
        }

        @media (min-width: 768px) {
          .contact {
            padding-top: 64px;
            padding-bottom: 64px;
          }
        }

        @media (min-width: 1280px) {
          .contact {
            padding-bottom: 32px;
          }
        }

        h2 {
          margin: 0 0 16px;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          color: ${T.home.color.textOnDarkPrimary};
          font-size: ${T.home.type.mobile.h2};
        }

        @media (min-width: 768px) {
          h2 {
            font-size: ${T.home.type.desktop.h2};
          }
        }

        .sub {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          line-height: 1.6;
          font-size: ${T.home.type.mobile.base};
        }

        @media (min-width: 768px) {
          .sub {
            font-size: ${T.home.type.desktop.base};
          }
        }

        .columns {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-top: 32px;
        }

        @media (min-width: 768px) {
          .columns {
            flex-direction: row;
            gap: 48px;
          }
        }

        .channels {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .channel {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.01em;
          color: ${T.home.color.textOnDarkPrimary};
          text-decoration: none;
          padding: 24px 0;
          font-size: ${T.home.type.mobile.body};
        }

        .channel:not(:first-child) {
          border-top: 1px solid ${T.home.color.darkBorder};
        }

        @media (min-width: 768px) {
          .channel {
            font-size: ${T.home.type.desktop.body};
            letter-spacing: -0.015em;
          }
        }

        .channel:hover {
          color: ${T.home.color.accentHoverDark};
        }

        .email-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .email-label {
          font-family: ${T.home.font.mono};
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: ${T.home.color.textOnDarkMuted};
          font-size: ${T.home.type.desktop.label};
        }

        .email-link {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.01em;
          color: ${T.home.color.textOnDarkPrimary};
          text-decoration: none;
          font-size: ${T.home.type.mobile.body};
        }

        @media (min-width: 768px) {
          .email-link {
            font-size: ${T.home.type.desktop.body};
            letter-spacing: -0.015em;
          }
        }

        .email-link:hover {
          color: ${T.home.color.accentHoverDark};
        }
      `}</style>

      <h2>{title}</h2>
      <p className="sub">{sub}</p>

      <div className="columns">
        <div className="channels">
          {channels.map((c) => (
            <a className="channel" key={c.label} href={c.href} target="_blank" rel="noopener">
              {c.label}
            </a>
          ))}
        </div>

        <div className="email-col">
          <span className="email-label">Email</span>
          <a className="email-link" href={mailLink}>
            {email}
          </a>
        </div>
      </div>
    </section>
  );
};
