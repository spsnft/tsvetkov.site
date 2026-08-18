'use client';

import React, { useEffect, useRef, useState } from 'react';
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
    aboutP3?: string;
    aboutClosingLine?: string;
    aboutDirectLine?: string;
    aboutLinkAgency?: string;
    stat2Num?: string;
    stat2Name?: string;
    stat2Sub?: string;
    stat3Num?: string;
    stat3Name?: string;
    stat3Sub?: string;
  };
  lang?: 'en' | 'ru' | 'th';
}

// Реальный файл — public/hms/fedor.webp (см. ТЗ №4, п. 1). onError ниже
// остаётся как safety net: если файл когда-нибудь пропадёт, плейсхолдер
// (нейтральная заливка контейнера) возьмёт на себя показ вместо 404
const PHOTO_SRC = '/hms/fedor.webp';
const PHOTO_ALT = 'Fedor Tsvetkov, founder of FT Agency';

export default function About({ t = {}, lang = 'en' }: AboutProps) {
  // Живёт в About, а не в отдельном компоненте: styled-jsx скоупит классы
  // только по элементам, написанным прямо в теле функции с <style jsx>, —
  // вынесенный компонент их не получит и отрисуется без стилей вовсе
  const [photoBroken, setPhotoBroken] = useState(false);
  const photoRef = useRef<HTMLImageElement>(null);

  // React's onError на SSR'нутом <img> ненадёжен: 404 на localhost часто
  // прилетает раньше гидратации и обработчик React его просто не увидит.
  // Проверяем img.complete/naturalWidth сразу после маунта — если к этому
  // моменту загрузка уже провалилась, событие error не понадобится
  useEffect(() => {
    const img = photoRef.current;
    if (!img) return;
    if (img.complete && img.naturalWidth === 0) {
      setPhotoBroken(true);
    }
  }, []);

  const trustStats = [
    { num: t.stat2Num || "20+", name: t.stat2Name || "Brands Scaled", sub: t.stat2Sub || "B2B & Direct models" },
    { num: t.stat3Num || "10+", name: t.stat3Name || "Years Experience", sub: t.stat3Sub || "Growth & systems" }
  ];

  // EN: заголовок блока — человек, весь блок выровнен по левому краю, фото
  // в шапке (top-right на desktop, в строке с именем на mobile), статистика
  // без рамок. RU/TH: старая центрированная вёрстка с карточками остаётся
  // нетронутой — копирайт под неё пока не переписан (см. ТЗ, п. «Чего не делать»)
  const isPersonLed = lang === 'en';

  return (
    <section id="about" className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          padding: ${T.hms.sectionPad} 0;
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

        /* EN: один левый край на весь блок — раньше eyebrow/фото/имя были
           центрированы, а абзацы прижаты влево, отсюда ощущение дыры
           справа (см. ТЗ №5, п. 4.1) */
        .about-block.left {
          align-items: stretch;
          text-align: left;
        }

        .about-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: ${T.sub};
          opacity: 0.8;
          margin: 0 0 ${T.hms.eyebrowGap} 0;
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

        /* Человек — подпись к агентству, а не объект блока (RU/TH) */
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

        /* EN: фото + (eyebrow + имя) в одной строке. justify-content:
           space-between растягивает строку на всю ширину блока — на
           широком desktop это и даёт «фото в правом верхнем углу», на
           узком mobile колонка с именем и фото естественно сжимаются друг
           к другу и читаются как одна строка (см. ТЗ №5, п. 4.2) — один и
           тот же flex-ряд без брейкпоинтов. Eyebrow теперь первая строка
           текстовой колонки (не отдельный элемент над рядом) — так верх
           фото (align-items: flex-start) оказывается на одной линии с
           верхом eyebrow, а не с верхом имени (см. ТЗ №10, п. B2) */
        .about-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .about-header-text {
          text-align: left;
        }

        /* Скруглённый прямоугольник — консистентно с карточками/кнопками
           дизайн-системы (12-20px), а не с чем-то не встречающимся больше
           нигде на странице. Заливка держится, даже если <img> 404-ит.
           112px — 64/72px читался как аватар в списке контактов, сигнал
           «за этим стоит живой человек» на нём не работал (см. ТЗ №10, п. B1) */
        .about-photo {
          flex: 0 0 auto;
          width: 112px;
          height: 112px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          overflow: hidden;
          display: block;
        }

        .about-photo :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .about-name {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(26px, 4vw, 36px);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .about-meta {
          font-size: 0.9rem;
          color: ${T.sub};
          margin: 0.3rem 0 0 0;
          line-height: 1.4;
        }

        .about-text {
          /* Единый отступ «заголовок секции → первый контент» на всей
             странице — согласовано с заказчиком по итогам аудита (ТЗ №4):
             было 2rem/32px, приводим к общему 48px */
          margin: 48px 0 0 0;
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

        /* EN-only: длинные слова («acquisition», «Hospitality», «directly»)
           рвали правый край короче возможного. hyphens вместе с
           text-wrap: pretty убирают эффект без text-align: justify —
           выключка по формату здесь дала бы «реки» между словами
           (см. ТЗ №6, п. 3.1) */
        .about-paragraph.hyphenate {
          -webkit-hyphens: auto;
          hyphens: auto;
          text-wrap: pretty;
        }

        /* Третий уровень типографики между прозой абзацев и цифрами
           счётчиков — не рамка и не подложка, просто строка другого кегля.
           ≈1.25× от 1.05rem основного текста, белая, не приглушённая
           (см. ТЗ №10, п. B3) */
        .about-closing-line {
          margin: 24px 0 0 0;
          font-size: 1.3125rem;
          line-height: 1.45;
          font-weight: 600;
          color: #ffffff;
          text-wrap: pretty;
        }

        /* RU/TH: карточки с рамками, как раньше */
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

        /* EN: строка без подложек, границ и обработчиков нажатия — число
           не кликабельно и никуда не ведёт, рамка тут читалась бы как
           сломанная кнопка (см. ТЗ №5, п. 4.3). Grid, а не flex-wrap —
           две равные колонки в одну строку на любой ширине, число над
           подписью, а не слева от неё: на ~350px «20+» рядом с «Brands
           Scaled» не помещается и уводит блок в две строки
           (см. ТЗ №6, п. 3.3) */
        .stats-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem 2rem;
          width: 100%;
          margin: 2.25rem 0 0 0;
        }

        /* Префикс row- отличает эти классы от .stat-num/.stat-name/.stat-sub
           внутри .trust-stat-card (RU/TH) ниже — иначе два правила с
           одинаковым именем класса конфликтуют, и более позднее (здесь —
           градиент) перебивает белый цвет цифр в RU/TH-карточках */
        .row-stat {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .row-stat + .row-stat {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding-left: 1.5rem;
        }

        /* Зелёно-синий градиент — только на самих цифрах (см. ТЗ №5, п. 4.3).
           Число стоит над подписью, а не слева от неё (см. ТЗ №6, п. 3.3) */
        .row-stat-num {
          flex: 0 0 auto;
          margin-bottom: 0.3rem;
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .row-stat-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #ffffff;
        }

        .row-stat-sub {
          margin-top: 2px;
          font-size: 0.76rem;
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

        .about-links.left {
          justify-content: flex-start;
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
          .about-paragraph {
            font-size: 0.98rem;
            line-height: 1.6;
          }
          .about-closing-line {
            font-size: 1.225rem;
          }
        }

        @media (max-width: 767px) {
          .about-section {
            padding: ${T.hms.sectionPadMobile} 0;
          }
          .about-role {
            font-size: 0.94rem;
          }
          .about-location {
            font-size: 0.82rem;
          }
          /* 112px не берём на мобиле — рядом с "Fedor Tsvetkov" на 375px
             это зажимает имя в две строки (см. ТЗ №10, п. B1). Радиус —
             без изменений */
          .about-photo {
            width: 80px;
            height: 80px;
            border-radius: 14px;
          }
          .about-closing-line {
            font-size: 1.1875rem;
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
          .stats-row {
            gap: 1rem 1.25rem;
          }
          .row-stat + .row-stat {
            padding-left: 1.25rem;
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
        <div className={`about-block${isPersonLed ? ' left' : ''}`}>
          {/* RU/TH: eyebrow — отдельный элемент над шапкой, как раньше.
              EN: eyebrow переехал в about-header-text — верх фото
              выравнивается по верху eyebrow, а не по верху имени
              (см. ТЗ №10, п. B2) */}
          {!isPersonLed && t.aboutLabel && <p className="about-label">{t.aboutLabel}</p>}

          {isPersonLed ? (
            <div className="about-header">
              <div className="about-header-text">
                {t.aboutLabel && <p className="about-label">{t.aboutLabel}</p>}
                <h2 className="about-name">{t.aboutName || "Fedor Tsvetkov"}</h2>
                {t.aboutRole && <p className="about-meta">{t.aboutRole}</p>}
              </div>
              <span className="about-photo">
                {!photoBroken && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    ref={photoRef}
                    src={PHOTO_SRC}
                    alt={PHOTO_ALT}
                    onError={() => setPhotoBroken(true)}
                  />
                )}
              </span>
            </div>
          ) : (
            <>
              <h3 className="about-agency">{t.aboutAgency || "FT Agency"}</h3>
              <p className="about-role">
                {t.aboutName || "Fedor Tsvetkov"} · {t.aboutRole || "Founder & Managing Director"}
              </p>
              {t.aboutLocation && <p className="about-location">{t.aboutLocation}</p>}
            </>
          )}

          <div className="about-text">
            <p className={`about-paragraph${isPersonLed ? ' hyphenate' : ''}`}>{t.aboutP1}</p>
            {isPersonLed ? (
              <>
                {t.aboutP2 && <p className="about-paragraph hyphenate">{t.aboutP2}</p>}
                {t.aboutP3 && <p className="about-paragraph hyphenate">{t.aboutP3}</p>}
              </>
            ) : (
              <>
                {t.aboutP2 && <p className="about-paragraph dimmed">{t.aboutP2}</p>}
                {t.aboutDirectLine && <p className="about-paragraph">{t.aboutDirectLine}</p>}
              </>
            )}
          </div>

          {isPersonLed && t.aboutClosingLine && (
            <p className="about-closing-line">{t.aboutClosingLine}</p>
          )}

          {isPersonLed ? (
            <div className="stats-row">
              {trustStats.map((stat, i) => (
                <div className="row-stat" key={i}>
                  <span className="row-stat-num">{stat.num}</span>
                  <span className="row-stat-name">{stat.name}</span>
                  <span className="row-stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="trust-stats-grid">
              {trustStats.map((stat, i) => (
                <div className="trust-stat-card" key={i}>
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-name">{stat.name}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>
          )}

          <div className={`about-links${isPersonLed ? ' left' : ''}`}>
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
