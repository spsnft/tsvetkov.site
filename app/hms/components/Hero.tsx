'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface HeroProps {
  t: {
    heroTitle: string;
    heroSubtitle?: string;
  };
  lang?: 'en' | 'ru' | 'th';
}

export default function Hero({ t }: HeroProps) {
  // Заголовок хранится как две строки через "\n" — перенос между ними
  // жёсткий (не на усмотрение браузера), внутри строки перенос обычный.
  // Единая логика для всех локалей (см. ТЗ «Синхронизировать RU/TH с EN») —
  // кнопка переехала в CalculatorSection и здесь больше не рисуется ни для
  // одной локали
  const titleLines = (t.heroTitle || '').split('\n');

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

        /* H1, подзаголовок — кнопка в CalculatorSection, после калькулятора,
           для всех локалей (см. ТЗ №7, п. 2) */
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
          /* Подзаголовок → калькулятор — согласовано с заказчиком: было
             64px (это margin-bottom + padding-bottom секции), убираем
             margin здесь и оставляем только padding-bottom секции (32px),
             чтобы Hero и калькулятор читались одним блоком (см. ТЗ №4) */
          margin: 0;
          color: #CBD5E1;
          font-weight: 400;
          text-wrap: pretty;
          max-width: 560px;
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
        }
      `}</style>

      <div className="container">
        <div className="hero-inner">
          <h1 className="title">
            {titleLines.map((line, i) => {
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
            })}
          </h1>

          <p className="subtitle">
            {t.heroSubtitle ||
              'Guests book direct on your site. Every channel stays in one calendar. Everything is in your name.'}
          </p>
        </div>
      </div>
    </section>
  );
}
