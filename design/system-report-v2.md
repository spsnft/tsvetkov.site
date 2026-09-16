# Этап 2 — извлечённая система (из `design/reference-v2.html`)

Источник: `tsvetkov.site Full Page v2.dc.html` (2a Grid & record — softer voice), сохранён как `design/reference-v2.html`. `support.js` — только рантайм Claude Design canvas (парсер `<x-dc>`/`{{ }}`/`sc-for`/`sc-if`, resize-zone механика); токенов дизайна не содержит, скопирован рядом для полноты.

Ничего не менял, только чтение.

## 1. Палитра (все hex/цветовые токены)

| Токен | Значение | Где используется |
|---|---|---|
| Accent (light bg) | `#B8431F` | ссылки, CTA-кнопка, активная локаль `en`, точка после заголовка, hover ссылок на светлом фоне |
| Accent hover (light bg) | `#A03A1A` | hover CTA-кнопки |
| Accent hover (dark bg) | `#E8703F` | hover контактных ссылок на тёмном фоне (Contact) — **другой** оттенок, не `#A03A1A` |
| Dark surface | `#14292D` | Header-бейдж лого, Proof, Contact, Footer, портрет-заглушка — все full-bleed тёмные блоки |
| Dark surface border | `#24312F` | разделители внутри тёмных блоков (Contact channels, Footer top border) |
| Text primary | `#17130F` | основной текст на светлом фоне |
| Text secondary | `#5A544C` | второстепенный текст на светлом фоне (nav, статус-строка, описания) |
| Text on dark, muted | `#9A9E97` | второстепенный текст на тёмном фоне (metric field, contact sub, copyright) |
| Text on dark, faint | `#C8CCC6` | slogan-строка в Proof |
| Text on dark, primary | `#F5F3EE` | основной текст/фон-цвет текста на тёмном фоне |
| Light surface (base) | `#F5F3EE` | фон страницы (frame background) |
| Light surface (alt) | `#E4E2DC` | фон секции How I work — единственный тональный сдвиг на светлой части страницы |
| Rule/border (light) | `#DDD7CC` | все разделители на светлом фоне, рамка фрейма |
| Canvas page bg (chrome, не сайт) | `oklch(0.88 0.004 90)` | фон самого канваса Design, не часть сайта |
| Флаг (декоративный, статус-строка) | `#A51931` красный / `#F4F5F8` белый / `#2D2A4A` тёмно-синий | флаг Таиланда рядом с `{{ place }}` |

Правило акцента: `#B8431F`/`#A03A1A` — только на светлом фоне (Header/Hero/Services). `#E8703F` — hover-состояние ссылок именно на тёмном фоне (Contact). Разные оттенки для разных контекстов, не одна и та же пара.

## 2. Шкала кеглей

Зоны фиксированные: **mobile <768 (fluid)**, **tablet 768–1279 (контейнер 768)**, **desktop ≥1280 (контейнер 1280)**.

| Элемент | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero H1 | 90px / 600 / lh 0.95 / ls -0.04em | 52px (макс. кегль, держащий 2 строки в 448px) | 44px / lh 0.98 / ls -0.038em, 3 строки вручную |
| Metric value (m1–m3) | 80px / 600 / ls -0.04em / tabular-nums | 54px | 44px |
| Metric note | 16px / 500 | 16px | 15px / 500 |
| Metric field | 13px | 13px | 12px |
| Section H2 (Services/How/Contact) | 54px / 700 / ls -0.03em | 54px (не меняется) | 30px / 700 / ls -0.03em |
| Service number (01–05) | 16px mono / 500 | 16px mono | 15px mono |
| Service title | 24px / 600 / ls -0.015em | 24px | 17px / 600 / ls -0.015em |
| Service body | 24px / lh 1.45 / ls -0.012em | 24px | 17px / lh 1.55 |
| How-label (eyebrow) | 13px mono / ls 0.12em / upper | 13px | 13px |
| How body | 24px / lh 1.45 | 24px | 17px / lh 1.55 |
| Contact subtitle | 16px / lh 1.6 | 16px | 15px / lh 1.6 |
| Contact channel link | 24px / 600 / ls -0.015em | 24px | 17px / 600 / ls -0.01em |
| Slogan (mono) | 38px / ls 0.049em, nowrap | 28px / ls 0.045em, nowrap | 13px / ls 0.055em, nowrap |
| Status line (flag+место+время) | 13px mono / ls 0.09em / upper | 13px | 12px mono / ls 0.09em |
| Nav link / brand wordmark | 16px / 15px(mobile brand) | 16px | brand 15px |
| CTA button | 16px / 600 | 16px | 15px / 600 |
| Footer copyright | 13px | 13px | 12px |
| Logo badge "FT" | 11px mono, box 30×30 (header) / 28×28 (footer) | тот же | box 28×28 |

Неиспользуемое поле: `COPY.kicker = "10 years in marketing"` определено в данных, но нигде не выведено в разметке — мёртвое поле, в вёрстку не тащить (или уточнить у автора, не потерялось ли).

## 3. Шкала вертикальных отступов

Наблюдаемый ритм (только значения из самого сайта, не canvas-chrome): **8, 12, 14, 16, 24, 32, 48, 52, 64, 80** px, плюс derived `heroGap1/heroGap2` (18–21px, оптическая компенсация вокруг заголовка) и `descGap` 10px (tablet).

По секциям:
- **Header**: паддинг лого-блока `16px 32px` (desktop) / `12px 12px` (mobile)
- **Hero**: секция `80px` сверху/снизу (desktop/tablet); блок kicker→H1 gap ≈18–21px; H1-блок→CTA gap ≈18–21px; mobile — паддинг секции `24px 24px 32px 24px`, внутренние gap 16/24px
- **Proof**: паддинг `48px var(--pad)`; gap между строкой метрик и slogan `52px`; gap внутри каждой метрики `16px` (mobile `12px`, между метриками `24px`)
- **Services**: заголовок паддинг `64px var(--pad) 32px var(--pad)`; каждая строка `24px 0` + `border-top`; mobile — секция `32px 24px`, строки `24px 0`, внутренний gap `8px`
- **How I work**: секция `64px 0`; заголовок `margin-bottom 32px`; между колонками — tablet добавляет `32px` (stack); mobile секция `32px 24px`, gap `16px`/`8px`
- **Contact**: секция `64px var(--pad) [32px desktop / 64px tablet] var(--pad)`; title→subtitle gap `16px`; между колонками `48px`; каждая ссылка-канал `24px 0` + border-top (первая без верхнего борда, `padding-bottom:24px` только); mobile — секция `32px 24px 48px 24px`, gap `24px`/`32px`/`8px`
- **Footer**: `24px var(--pad)` (desktop и mobile)

## 4. Контейнеры и брейкпоинты

- Три зоны: **mobile <768** (fluid, без контейнера, паддинг фиксированный `24px`), **tablet 768–1279** (контейнер/cap `768px`), **desktop ≥1280** (контейнер/cap `1280px`).
- `pad0 = max(0, (viewport − cap) / 2)` — при превышении cap появляется боковой гаттер, контент остаётся зафиксированной ширины и центрируется.
- `--pad` (внешний паддинг grid-колонки) = `pad0 + 32px` (tablet) или `pad0 + 48px` (desktop).
- Портретная колонка в Hero = `round(cap × 0.3)` (+ pad0) — т.е. 30% от ширины контейнера.
- Проверочные точки: **375 / 768 / 1280** (вход в зону — «Сверка»); **767 / 1279 / 1920** (края зон — «Механика», чтобы убедиться, что на границе зоны ведут себя одинаково при любом реальном размере окна).

## 5. Правила: акцент / моноширинный / full-bleed

**Акцент (`#B8431F` / `#A03A1A` / `#E8703F`)** используется только на:
- primary CTA-кнопке ("WhatsApp me")
- активной локали `en` в переключателе
- точке после заголовка Hero (`.` в конце `heroB`)
- ссылке `s5.linkLabel` ("See the direct booking system → /hms")
- hover-состоянии всех ссылок (nav, WhatsApp в шапке, контактные каналы)

Больше нигде — акцент не используется декоративно, не используется в фоне, не используется в заголовках.

**Моноширинный (`IBM Plex Mono`)** используется только на:
- статусной строке (флаг + место + время)
- переключателе локалей `en/ru/th`
- номерах услуг `01–05`
- eyebrow-метках How I work (`How it starts`, `The team`)
- slogan-строке в Proof
- логотип-бейдже `FT`

Все заголовки, основной текст, кнопки, nav, контактные ссылки — `Archivo`. `Instrument Sans` в файле встречается только в обёртке самого canvas (`<section id="2a">` — служебный лейбл `2a — full page v2 · сверка...`), к самому сайту не относится.

**Full-bleed (тёмные, `#14292D`) блоки**, растянутые на всю ширину секции независимо от контейнера:
- Proof
- Contact
- Footer
- лого-бейдж в Header (маленький, не секция)
- портрет-заглушка в Hero

Светлые секции (Header, Hero-текст, Services) — фон `#F5F3EE` (унаследован от body). **How I work** — единственная светлая секция с собственным фоном `#E4E2DC` (тональный сдвиг, по формулировке автора в чате).

## 6. Все тексты на английском (копирайт-объект `COPY`)

```
brand: "Fedor Tsvetkov"
kicker: "10 years in marketing"   ← определено, нигде не отрендерено (см. §2)
place: "Phuket, Thailand"
heroA: "I take marketing over"
heroB: "and make it earn"
cta: "WhatsApp me"
waLink: "https://wa.me/66650255229"
slogan: "Different businesses. Same approach."

m1: { value: "$10M", note: "in sales over one year", field: "Real estate" }
m2: { value: "7×", note: "growth in 18 months", field: "D2C retail" }
m3: { value: "1,000+", note: "leads per month, from zero", field: "B2B machinery" }

servicesTitle: "What I do"
s1: { n: "01", title: "Numbers first",
      body: "Most of your ad spend works. You just don't know which part. I put every number in one system, so you do." }
s2: { n: "02", title: "Paid traffic",
      body: "Your budget is set up to buy cheap leads. I set it up to buy paying customers." }
s3: { n: "03", title: "Sales automation",
      body: "While your lead waits, a competitor is already talking to them. I set up the system that answers first, qualifies, and logs the deal itself." }
s4: { n: "04", title: "AI where it pays off",
      body: "Your team spends hours on reports, CRM entries and paperwork. AI does that in minutes. I find where it fits and put it there." }
s5: { n: "05", title: "Direct bookings",
      body: "Booking.com takes 15–20% of every reservation. I move that demand onto the property itself, so the money stays with the owner.",
      link: "/hms", linkLabel: "See the direct booking system" }

howTitle: "How I work"
how1: { label: "How it starts",
        body: "It starts with a look at what you already have. Channels, numbers, tools. Then I tell you what I'd change and what it costs, and you decide whether to go ahead." }
how2: { label: "The team",
        body: "I run FT Agency. I put people from it on a project when it needs them. You don't manage them, you don't hire them, and you don't pay for anyone sitting idle. You deal with me throughout, and the result is on me." }

contactTitle: "Talk to me"
contactSub: "I usually answer the same day."
ch1: { label: "WhatsApp", href: "https://wa.me/66650255229" }
ch2: { label: "Telegram", href: "https://t.me/advertisment_th" }
ch3: { label: "Line", href: "https://line.me/ti/p/~ftagency_th" }
email: "fedor@tsvetkov.site"
mailLink: "mailto:fedor@tsvetkov.site"
copyright: "© 2026 Fedor Tsvetkov. All rights reserved."
```

Прочее в разметке, не входящее в `COPY`: nav-подписи `en`/`ru`/`th` (хардкод), `WhatsApp` как подпись кнопки в шапке (хардкод, отдельно от `cta`), время в статусной строке — живое, `Asia/Bangkok`, формат `hh:mm AM/PM`.

## Не проверено (нет доступа к целевому стеку из этой сессии)

Соответствие `@/src/theme/tokens`, существующих брейкпоинтов/шкал в Next.js-проекте, i18n-структуры для `ru`/`th` — не сверено, т.к. эта сессия не имеет доступа к репозиторию сайта. Сверку и Этап 3 нужно делать в сессии, открытой на реальном репозитории.
