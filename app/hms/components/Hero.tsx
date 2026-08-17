'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';
import WhatsAppCta from './WhatsAppCta';

interface HeroProps {
  t: {
    heroTitle: string;
    heroSubtitle?: string;
    btnAudit?: string;
    waMessage?: string;
  };
  lang?: 'en' | 'ru' | 'th';
}

export default function Hero({ t, lang = 'en' }: HeroProps) {
  // EN: H1 — два предложения на жёстко заданных строках, "15–20%" в
  // фирменном градиенте, кнопка переехала в CalculatorSection и здесь
  // больше не рисуется (см. ТЗ №7, п. 1/2). RU/TH: старая логика —
  // однострочный заголовок с некрашеным «15–20%» без переноса — не трогаем
  const isEn = lang === 'en';

  // Число не красим (было — сняли зелёный: комиссия не должна читаться как
  // деньги владельца), но всё ещё держим «15–20%» на одной строке — иначе
  // перенос ровно по en dash на глаз превращается в дефис
  const titleParts = (() => {
    const match = /1\s?5\s?[-‐‑‒–—]\s?2\s?0\s?%/.exec(t.heroTitle || '');
    if (!match) return null;
    return {
      before: t.heroTitle.slice(0, match.index),
      accent: match[0],
      after: t.heroTitle.slice(match.index + match[0].length)
    };
  })();

  // EN-заголовок хранится как две строки через "\n" — перенос между ними
  // жёсткий (не на усмотрение браузера), внутри строки перенос обычный
  const enTitleLines = isEn ? (t.heroTitle || '').split('\n') : null;

  return (
    // Секция рендерится сразу, без фейда по монтированию: первый экран
    // должен приходить с рабочим CTA ещё до гидрации. id нужен хедеру —
    // по нему IntersectionObserver в Nav решает, показывать ghost или
    // залитую кнопку (см. ТЗ №7, п. 4.2)
    <section id="hero-section" className="hero-section">
      <style jsx>{`
        .hero-section {
          width: 100%;
          padding: clamp(4.5rem, 7vw, 8rem) 0 2rem 0;
          position: relative;
          z-index: 10;
        }

        /* EN: H1, подзаголовок — кнопка теперь в CalculatorSection, после
           калькулятора (см. ТЗ №7, п. 2). RU/TH: H1, подзаголовок, кнопка,
           как раньше */
        .hero-inner {
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .title {
          font-size: clamp(30px, 5.4vw, 54px);
          font-weight: 800;
          line-height: 1.14;
          letter-spacing: -0.03em;
          margin: 0 0 18px 0;
          color: #fff;
          text-wrap: balance;
          width: 100%;
        }

        .title-nowrap {
          white-space: nowrap;
        }

        /* Градиент маркирует то, что владелец получает — тот же приём,
           что у direct/~$6,800/20+ по всей странице (см. ТЗ №7, п. 1.3) */
        .accent {
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: clamp(1.05rem, 1.7vw, 1.2rem);
          line-height: 1.55;
          margin: 0 0 2rem 0;
          color: #CBD5E1;
          font-weight: 400;
          text-wrap: pretty;
          max-width: 560px;
        }

        .cta-container {
          display: flex;
          align-items: stretch;
          justify-content: center;
          width: 100%;
          max-width: 480px;
        }

        .cta-container :global(.btn-premium-core) {
          flex: 1 1 auto;
          min-width: 0;
          width: 100%;
        }

        .cta-container :global(.btn-premium-core svg) {
          flex-shrink: 0;
        }

        /* На 320px длинный русский текст не влезает в кнопку при обычном паддинге */
        @media (max-width: 360px) {
          .cta-container :global(.btn-premium-core) {
            padding: 0 0.7rem;
            font-size: 0.95rem;
          }
        }

        /* Хиро + калькулятор должны целиком помещаться на 390×844 без
           скролла — воздух над H1 и под подзаголовком отсюда убран до
           минимума, по фиксированному бюджету отступов, а не clamp().
           Nav — position:fixed высотой 64px и не участвует в потоке,
           поэтому «низ шапки → H1: 28px» = 64px нава + сам зазор */
        @media (max-width: 767px) {
          .hero-section {
            padding: calc(64px + 28px) 0 32px 0;
          }
          .title {
            margin-bottom: 12px;
          }
          .subtitle {
            margin-bottom: 24px;
          }
        }
      `}</style>

      <div className="container">
        <div className="hero-inner">
          <h1 className="title">
            {isEn && enTitleLines
              ? enTitleLines.map((line, i) => {
                  const m = /1\s?5\s?[-‐‑‒–—]\s?2\s?0\s?%/.exec(line);
                  return (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      {m ? (
                        <>
                          {line.slice(0, m.index)}
                          <span className="accent">{m[0]}</span>
                          {line.slice(m.index + m[0].length)}
                        </>
                      ) : (
                        line
                      )}
                    </React.Fragment>
                  );
                })
              : titleParts
              ? (
                <>
                  {titleParts.before}
                  <span className="title-nowrap">{titleParts.accent}</span>
                  {titleParts.after}
                </>
              )
              : t.heroTitle}
          </h1>

          <p className="subtitle">
            {t.heroSubtitle ||
              'Guests book direct on your site. Every channel stays in one calendar. Everything is in your name.'}
          </p>

          {!isEn && (
            <div className="cta-container">
              <WhatsAppCta
                label={t.btnAudit || "Free Revenue Check"}
                message={t.waMessage}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
