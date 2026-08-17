// Названия компонентов системы не переводятся — одинаковы во всех локалях
export const FEATURE_NAMES = [
  "Cloud PMS Setup",
  "0% Commission Engine",
  "Booking & Agoda Sync",
  "Payment Integration",
  "Connect 300+ OTA Channels",
  "Direct Promo Engine",
  "Marketing Analytics Setup",
  "Custom CRM Setup",
  "Consolidated Revenue Reporting",
  "Multi-Property Dashboard"
] as const;

// Сколько пунктов из FEATURE_NAMES принадлежит каждому тарифу нарастающим итогом
export const TIER_FEATURE_COUNTS = [4, 7, 10] as const;

// Единственная точка контакта — WhatsApp с преднабранным текстом
export const WHATSAPP_PHONE = "66650255229";

export const contentData = {
  en: {
    // --- HERO SECTION ---
    // Три элемента: H1, подзаголовок, кнопка. Калькулятор — отдельный блок
    // сразу под хиро (CalculatorSection), не часть хиро
    heroTitle: "Stop Paying 15–20% Commissions to Booking.com & Agoda",
    heroSubtitle: "Guests book direct on your site. Every channel stays in one calendar. Everything is in your name.",
    // Обещание держится на результате, а не на длительности: календаря и созвона
    // на странице нет, конверсия ведёт в WhatsApp
    btnAudit: "Free Revenue Check",
    btnAuditShort: "Free Check",

    // Единственный преднабранный текст WhatsApp — тариф человек называет сам
    waMessage: "Hi! I'd like a free revenue check for my property.",

    // --- NAV ---
    navAbout: "About Us",
    navHowItWorks: "How It Works",
    navPricing: "Pricing",
    navFaq: "FAQ",

    // Калькулятор показывает потерю и — вторым, заметно тише — сколько из
    // неё реально возвращается в первый год. Окупаемости (сроков в
    // месяцах) по-прежнему нет нигде на странице, это предмет бесплатного
    // Revenue Check (см. ТЗ №2, п. 3.6 — не возвращать payback в тарифы)
    calcUnitsLabel: "Rooms or villas",
    calcAdrLabel: "Average nightly rate",
    calcOutputLabel: "You pay OTAs",
    calcYearLabel: "per year",
    calcMonthLabel: "per month",
    calcAssumptions: "Based on 65% occupancy, 70% of bookings via OTA, 17% average commission.",
    calcAssumptionsAria: "Show calculation assumptions",
    // Уровень 2 — возврат, акцентный цвет, годовые (не /mo — см. ТЗ №2, п. 3.4)
    calcRecoveryLabel: "You keep back in year one",
    // {pct} подставляется из константы YEAR_ONE_RECOVERY_RATE в HeroCalculator.tsx
    calcRecoveryPctLabel: "≈ {pct}% of what you pay now",
    // Уровень 3 — статичная строка, проценты не считаются
    calcRecoveryNote: "Year two and beyond, 30–40% is realistic once direct traffic builds.",
    calcRecoveryTooltip: "Assumes about 20% of your OTA volume moves to direct bookings in year one — a conservative figure for a property starting with no direct channel. The shift builds over time, so year one is the slowest.",

    // --- LOGO MARQUEE ---
    marqueeLabel: "CHANNELS WE CONNECT",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    // Три пары проблема→решение, деньги первыми, операционка последней.
    // Заменяет прежнюю двухколоночную полосу сравнения (WITHOUT/WITH).
    scaleLabel: "WHAT CHANGES",
    scaleTitle: "What changes when bookings come direct",
    scaleColToday: "Today",
    scaleColWith: "With your own system",
    scalePair1Problem: "15–20% of every booking goes to the platform",
    scalePair1Solution: "Direct bookings at 0% commission, forever",
    scalePair2Problem: "Your guests belong to the platform",
    scalePair2Solution: "Your guest list belongs to you",
    scalePair3Problem: "Rates updated by hand, around the clock",
    scalePair3Solution: "One calendar, synced across 300+ channels",

    // --- WHO'S BEHIND THIS ---
    // Повествование блока теперь идёт от человека, а не агентства: заголовок —
    // имя, agентство и локация — подпись под ним. aboutAgency намеренно не
    // задаётся для EN — по его отсутствию About.tsx выбирает новую вёрстку
    // (см. компонент); RU/TH задают aboutAgency и остаются на старой.
    aboutLabel: "WHO'S BEHIND THIS",
    aboutName: "Fedor Tsvetkov",
    aboutRole: "Founder, FT Agency · Phuket",
    aboutP1: "FT Agency builds customer acquisition systems — sites, analytics, CRM, outreach — for companies that sell directly to their customers. B2B, e-commerce, services: 20+ brands over 10 years.",
    aboutP2: "Hospitality is that same problem at its sharpest — the property does all the work, and the platform owns the guest.",
    aboutP3: "I founded the agency and I run these projects myself. From your first message to launch you're dealing with me, not a support queue.",
    aboutLinkAgency: "More about FT Agency",

    // Trust Stats
    stat2Num: "20+",
    stat2Name: "Brands Scaled",
    stat2Sub: "B2B & Direct models",
    stat3Num: "10+",
    stat3Name: "Years Experience",
    stat3Sub: "Growth & systems",

    // --- SEE THE SYSTEM ---
    // Три демо-экрана — не скриншоты Little Hotelier/Beds24/Cloudbeds
    // (клиентам подключаются разные платформы), а нейтральный интерфейс в
    // дизайн-системе сайта. Демо-объект: Baan Sirin Villa, Rawai, Phuket.
    // Сквозная бронь на всех трёх экранах: Klaus Müller, Pool Villa 2,
    // 18–24 Dec, ฿4,000/night, ฿24,000 total, Direct, booked 21:47.
    seeSystemEyebrow: "HOW IT WORKS",
    seeSystemTitle: "See how it works end to end",
    // Короткие версии — только для кликабельных шагов-пилюль в карусели.
    // Формулировка шага 3 синхронизирована с заголовком слайда (seeSystemLabel3)
    seeSystemStep1: "Guest books",
    seeSystemStep2: "You see it",
    seeSystemStep3: "Guest confirmed",
    // Полные лейблы + строка выгоды — подписи у самих экранов
    seeSystemLabel1: "Guest books on your site",
    seeSystemBenefit1: "Your page, your rates. No commission on this booking.",
    seeSystemLabel2: "You see it instantly",
    seeSystemBenefit2: "Every channel in one calendar. Rooms close everywhere automatically.",
    seeSystemLabel3: "Guest gets confirmed",
    seeSystemBenefit3: "Sent automatically, in your name. You do nothing.",
    // Высота блока описания фиксируется в две строки для EN — при
    // локализации RU/TH это число может понадобиться увеличить отдельно,
    // строки там длиннее (см. SeeSystem.tsx)
    seeSystemBenefitLines: 2,
    // ฿24,000 ≈ $690 direct; при 17%-комиссии (то же допущение, что в
    // калькуляторе героя) через Booking.com осталось бы $573
    seeSystemCaption: "This booking: $690 direct. Through Booking.com you'd have kept $573.",
    seeSystemDisclaimer: "Demo property, built for this page.",

    // --- PRICING ---
    // Заголовок секции получает eyebrow и укорачивается — старый вариант
    // (One-time setup fee. Zero commission on direct bookings forever) был
    // без eyebrow и длиннее необходимого
    priceLabel: "PRICING",
    priceTitle: "One-time setup. Zero commission forever",
    pricePopular: "Popular",
    priceMore2: "+ 4 from Lite",
    priceMore3: "+ 7 from Standard",

    // Первое появление термина на странице объясняется человеческим языком;
    // подсказка показывается только в собственном списке тарифа, не в свёрнутом
    featureHints: {
      "Cloud PMS Setup": "all your bookings in one place, not in a spreadsheet",
      "0% Commission Engine": "booking page on your own site",
      "Direct Promo Engine": "direct-only offers and discounts",
      "Marketing Analytics Setup": "see which channel each booking came from"
    } as Record<string, string>,

    // Единственная строка под сеткой тарифов. Раньше их было две (окупаемость
    // + итоговая цена/PMS отдельно после CTA); фраза про окупаемость снята —
    // страница больше не называет сроки payback ни в одном месте
    pricePaybackNote: "Final price confirmed after your revenue check. PMS and channel manager are billed separately by the provider — typically $30–100/month.",

    // Реверс риска: стоит выше кнопки, чтобы снятие риска прошло до нажатия
    riskTitle: "50% upfront, 50% on launch.",
    riskText: "Not live in 14 days — you don't pay the second half.",

    // Микрокопия под кнопкой в финальном CTA-блоке (FooterCTA). В героя эта
    // строка больше не выводится — там она дублировала эту же
    ctaNote: "Send us your property name. We reply with what OTAs are costing you — your numbers, not an example.",

    tier1Title: "LITE",
    tier1Price: "From $1,200",
    tier1Desc: "For small villas & guesthouses (1–9 units)",

    tier2Title: "STANDARD",
    tier2Price: "From $2,500",
    tier2Desc: "For boutique hotels & resorts (10–29 units)",

    tier3Title: "ENTERPRISE",
    tier3Price: "Custom",
    tier3Desc: "For hotel chains & operators (multi-property)",

    // --- FAQ SECTION ---
    // faqTitle снят для EN — FAQ.tsx для lang==='en' поднимает faqSub на
    // место H2 и добавляет eyebrow faqLabel. RU/TH сохраняют старую пару
    // faqTitle (H2) + faqSub (подзаголовок), см. FAQ.tsx
    faqLabel: "FAQ",
    faqSub: "The questions owners actually ask",
    // Порядок вопросов идёт от главного возражения (уход с OTA) к механике
    // сделки. Пустая строка внутри `a` разбивает ответ на абзацы при рендере
    faqItems: [
      {
        q: "Do I have to leave Booking.com and Agoda?",
        a: "No. You keep every channel you use today. A direct booking system doesn't replace OTAs — it adds a channel you own. Most properties still get 70–85% of bookings through OTAs in year one. The difference is that the bookings that come direct cost you 0% instead of 15–20%."
      },
      {
        q: "Will Booking.com penalise me for taking direct bookings?",
        a: "Direct bookings themselves are never a problem — every property on Booking.com also sells directly. What OTA contracts do restrict is showing a lower public price on your own site: break that and the response isn't a fine, it's quieter — a drop in ranking, loss of Preferred status. Most owners find that out the hard way.\n\nWe set your system up so it never happens. Your public rates stay aligned, you simply stop paying commission on the bookings that come direct. And when you do want to reward direct guests, there are ways the contracts allow — member rates behind an email signup, breakfast, late checkout. We configure those correctly."
      },
      {
        q: "Are there any hidden fees, and what does the software cost each month?",
        a: "Zero commission from us, ever. You pay our one-time setup fee and keep 100% of direct booking revenue. The one ongoing cost is the software subscription, paid directly to the provider — typically $30–100/month depending on platform and property size. No markup from us, no agent fees. We'll confirm the exact figure for your property before you commit to anything."
      },
      {
        q: "Who owns the system if we stop working together?",
        a: "You do — the accounts, the data, the guest list, the booking engine. Everything is set up in your name from day one. There's no lock-in and no revenue share. If you want to run it alone after launch, you can. If you want us on monthly support, that's optional and separate."
      },
      {
        q: "What happens after I send a message?",
        a: "You send your property name. We reply — usually the same day — with what OTAs are costing you based on your actual listings: your rates, your room count, your channel mix. Your numbers, not an example.\n\nIf it looks worth doing, we scope the setup: most properties are live in 7–14 days, with configuration and testing running in the background so your current bookings are never interrupted. Payment is 50% upfront, 50% on launch — and if it's not live in 14 days, you don't pay the second half."
      },
      {
        q: "How do guests pay, and how fast do I get my money?",
        a: "Guests pay through a secure payment gateway connected to your own booking engine. The money goes to your business bank account directly — no middleman holding it, no waiting for a platform payout cycle. The gateway is in your name, not ours."
      }
    ],

    // --- FOOTER CTA ---
    // Единственная секция без eyebrow — приведена к общему правилу (см. ТЗ №2, п. 4)
    footerLabel: "GET STARTED",
    footerTitle: "See what OTAs actually cost you",
    footerSub1: "Stop leaving 15–20% on the table",
    footerSub2: "Take full control of your direct bookings",
    footerBtn: "Free Revenue Check"
  },

  ru: {
    // --- HERO SECTION ---
    heroTitle: "Хватит платить 15–20% комиссии Booking.com и Agoda",
    heroSub1: "Подключите свой объект на Пхукете напрямую к гостям\nНикаких ошибок и двойных броней",
    heroSub2: "Оставляйте 100% прибыли себе",
    btnAudit: "Бесплатный разбор, 20 минут",
    btnAuditShort: "Бесплатный разбор",

    // Единственный преднабранный текст WhatsApp — тариф человек называет сам
    waMessage: "Здравствуйте! Хочу бесплатный разбор по прямым бронированиям.",

    // --- NAV ---
    navAbout: "О нас",
    navHowItWorks: "Как это работает",
    navPricing: "Тарифы",
    navFaq: "Вопросы",

    // Карточка расчёта в герое — одна бронь, затем та же потеря за месяц и за год
    otaCostBadge: "СКОЛЬКО ВЫ ОТДАЁТЕ OTA",
    calcUnitLabel: "ОДНА БРОНЬ НА $100",
    calcKeepInline: "вам — $83",
    calcLossInline: "−$17",
    calcFullMark: "Напрямую: $100",
    calcPayLabel: "Вы платите OTA",
    calcMonthValue: "$2,790/мес",
    calcYearValue: "$33,400/год",
    calcRecoverLabel: "Реально вернёте за первый год",
    calcRecoverValue: "~$560/мес",
    calcRecoverHintAria: "Откуда эта цифра",
    calcRecoverHint: "За первый год система прямых броней обычно переводит на ваш канал 15–25% объёма OTA. Здесь взяли 20%. Остальное продолжает идти через площадки: вы от них не уходите, а перестаёте платить комиссию с той доли, которую можете забрать себе.",
    // Сегмент «70% через OTA» снят: русская строка — самая длинная, в одну
    // строку на 320px она не помещается даже на нижней границе кегля
    calcFootnote: "12 номеров · загрузка 65% · комиссия 17%",

    // --- LOGO MARQUEE ---
    marqueeLabel: "КАНАЛЫ, КОТОРЫЕ МЫ ПОДКЛЮЧАЕМ",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    scaleTitle: "Где утекает ваша выручка",

    // Полоса сравнения — единственное место, где на странице проговаривается
    // «было → стало». Иллюстрации из удалённых карточек живут здесь иконками
    scaleCmpNowLabel: "КАК ЕСТЬ СЕЙЧАС",
    scaleCmpAfterLabel: "С FT AGENCY",
    scaleCmpNow: [
      "Цены и доступность обновляются вручную и круглые сутки",
      "15–20% с каждой брони уходит платформе",
      "Каждый гость приходит через чужой канал"
    ],
    scaleCmpAfter: [
      "Один календарь номеров, синхронный с 300+ каналами",
      "Прямые брони без комиссии — навсегда",
      "Собственный поисковый трафик и возвраты гостей"
    ],

    // --- WHO'S BEHIND THIS ---
    // Повествование блока идёт от «мы», поэтому заголовок — агентство,
    // а человек становится подписью под ним
    aboutLabel: "КТО ЗА ЭТИМ СТОИТ",
    aboutAgency: "FT Agency",
    aboutName: "Фёдор Цветков",
    aboutRole: "основатель и управляющий директор",
    aboutLocation: "Сейчас базируемся на Пхукете",
    // Первым идёт то, что решает: условия сделки и владение системой.
    // Общее описание агентства — вторым
    aboutP1: "Мы собираем систему прямых бронирований, передаём её вам в полную собственность и остаёмся на поддержке. Без привязки и без процента с выручки. В отелях и виллах это нужнее всего: объекты отдают 15–20% выручки платформам, которые им не принадлежат.",
    aboutP2: "Мы строим системы привлечения и автоматизации для бизнесов, которые продают напрямую своим клиентам, и ведём их от начала до конца, а не разовыми проектами.",
    aboutLinkAgency: "Подробнее об FT Agency",

    // Trust Stats
    stat2Num: "20+",
    stat2Name: "Проектов масштабировано",
    stat2Sub: "B2B и прямые модели",
    stat3Num: "10+",
    stat3Name: "Лет опыта",
    stat3Sub: "Рост и системы",

    // --- SEE THE SYSTEM ---
    // Экраны внутри — на английском во всех локалях (см. constants.ts EN);
    // локализуются только подписи вокруг них
    seeSystemTitle: "Как это работает — от брони до заезда",
    seeSystemStep1: "Гость бронирует",
    seeSystemStep2: "Вы это видите",
    seeSystemStep3: "Гость получает",
    seeSystemCaption: "От брони до подтверждения — без комиссии.",
    seeSystemDisclaimer: "Интерфейс показан для примера. Реальная платформа подбирается под объект.",

    // --- PRICING ---
    priceTitle: "Прозрачное внедрение. Постоянная независимость",
    priceSub: "Разовая оплата. Ноль комиссии с прямых броней навсегда",
    pricePopular: "Популярный",
    priceDisclaimerAudit: "Финальная цена подтверждается после бесплатного разбора. Подписку на PMS и channel manager (один календарь, который обновляет все площадки разом) вы оплачиваете напрямую провайдеру.",
    priceMore2: "+ 4 из Lite",
    priceMore3: "+ 7 из Standard",

    // Первое появление термина на странице объясняется человеческим языком;
    // подсказка показывается только в собственном списке тарифа, не в свёрнутом
    featureHints: {
      "Cloud PMS Setup": "все брони в одном месте, а не в таблице",
      "0% Commission Engine": "страница, на которой гость бронирует у вас на сайте",
      "Direct Promo Engine": "акции и скидки только для прямых броней",
      "Marketing Analytics Setup": "видно, откуда приходят брони"
    } as Record<string, string>,

    // Диапазоны — ориентир, а не правило: реальная сегментация идёт по ADR
    pricePaybackNote: "Окупаемость зависит от размера объекта и цены за ночь — в примере выше объект на 12 номеров.",
    priceFitHint: "Не знаете, какой ваш? На разборе это решают два вопроса.",

    // Реверс риска: стоит выше кнопки, чтобы снятие риска прошло до нажатия
    riskTitle: "50% на старте, 50% при запуске.",
    riskText: "Не запустили за 14 дней — вторую половину вы не платите.",

    // Микрокопия под каждой главной кнопкой — что человек даёт и что получает
    // TODO(i18n): временно английский — языковой проход по RU идёт отдельной
    // задачей, полуперевод намеренно не делаем
    ctaNote: "Send us your property name. We reply with what OTAs are costing you — your numbers, not an example.",

    tier1Title: "LITE",
    tier1Price: "From $1,200",
    tier1Payback: "Окупаемость: 3–4 месяца",
    tier1Fit: "Обычно подходит: 1–9 номеров",
    tier1Desc: "Для небольших вилл и гестхаусов",

    tier2Title: "STANDARD",
    tier2Price: "From $2,500",
    tier2Payback: "Окупаемость: 2–3 месяца",
    tier2Fit: "Обычно подходит: 10–29 номеров",
    tier2Desc: "Для бутик-отелей и резортов",

    tier3Title: "ENTERPRISE",
    tier3Price: "Custom",
    tier3Payback: "Окупаемость: менее 2 месяцев",
    tier3Fit: "Несколько объектов и управляющие компании",
    tier3Desc: "Для сетей отелей и операторов",

    // --- FAQ SECTION ---
    faqTitle: "Частые вопросы",
    // TODO(i18n): весь блок FAQ временно на английском — тексты будут писаться
    // от смысла в отдельной языковой задаче, а не переводиться дословно
    faqSub: "The questions owners actually ask",
    faqItems: [
      {
        q: "Do I have to leave Booking.com and Agoda?",
        a: "No. You keep every channel you use today. A direct booking system doesn't replace OTAs — it adds a channel you own. Most properties still get 70–85% of bookings through OTAs in year one. The difference is that the bookings that come direct cost you 0% instead of 15–20%."
      },
      {
        q: "Will Booking.com penalise me for taking direct bookings?",
        a: "Direct bookings themselves are never a problem — every property on Booking.com also sells directly. What OTA contracts do restrict is showing a lower public price on your own site: break that and the response isn't a fine, it's quieter — a drop in ranking, loss of Preferred status. Most owners find that out the hard way.\n\nWe set your system up so it never happens. Your public rates stay aligned, you simply stop paying commission on the bookings that come direct. And when you do want to reward direct guests, there are ways the contracts allow — member rates behind an email signup, breakfast, late checkout. We configure those correctly."
      },
      {
        q: "Are there any hidden fees, and what does the software cost each month?",
        a: "Zero commission from us, ever. You pay our one-time setup fee and keep 100% of direct booking revenue. The one ongoing cost is the software subscription, paid directly to the provider — typically $30–100/month depending on platform and property size. No markup from us, no agent fees. We'll confirm the exact figure for your property before you commit to anything."
      },
      {
        q: "Who owns the system if we stop working together?",
        a: "You do — the accounts, the data, the guest list, the booking engine. Everything is set up in your name from day one. There's no lock-in and no revenue share. If you want to run it alone after launch, you can. If you want us on monthly support, that's optional and separate."
      },
      {
        q: "What happens after I send a message?",
        a: "You send your property name. We reply — usually the same day — with what OTAs are costing you based on your actual listings: your rates, your room count, your channel mix. Your numbers, not an example.\n\nIf it looks worth doing, we scope the setup: most properties are live in 7–14 days, with configuration and testing running in the background so your current bookings are never interrupted. Payment is 50% upfront, 50% on launch — and if it's not live in 14 days, you don't pay the second half."
      },
      {
        q: "How do guests pay, and how fast do I get my money?",
        a: "Guests pay through a secure payment gateway connected to your own booking engine. The money goes to your business bank account directly — no middleman holding it, no waiting for a platform payout cycle. The gateway is in your name, not ours."
      }
    ],

    // --- FOOTER CTA ---
    footerTitle: "Готовы увеличить выручку?",
    footerSub1: "Хватит терять 15–20% выручки",
    footerSub2: "Возьмите полный контроль над прямыми бронями",
    footerBtn: "Бесплатный разбор, 20 минут"
  },

  th: {
    // --- HERO SECTION ---
    heroTitle: "หยุดจ่ายค่าคอมมิชชั่น 15‑20% ให้ Booking.com และ Agoda",
    heroSub1: "เชื่อมต่อที่พักของคุณในภูเก็ตกับผู้เข้าพักโดยตรง\nไร้ความเสี่ยงจากความผิดพลาดและปัญหาการจองซ้ำ",
    heroSub2: "รับกำไรเต็ม 100% เข้ากระเป๋าคุณ",
    btnAudit: "ตรวจสอบรายได้ฟรี 20 นาที",
    btnAuditShort: "ตรวจสอบฟรี",

    // Единственный преднабранный текст WhatsApp — тариф человек называет сам
    waMessage: "สวัสดีครับ สนใจตรวจสอบรายได้ฟรี 20 นาที สำหรับที่พักครับ",

    // --- NAV ---
    navAbout: "เกี่ยวกับเรา",
    navHowItWorks: "วิธีการทำงาน",
    navPricing: "ราคา",
    navFaq: "คำถาม",

    // การ์ดคำนวณในฮีโร่ — การจองหนึ่งครั้ง แล้วขยายเป็นต่อเดือนและต่อปี
    otaCostBadge: "ค่าคอมมิชชั่นที่คุณเสียให้ OTA",
    calcUnitLabel: "การจองหนึ่งครั้ง $100",
    calcKeepInline: "คุณได้ $83",
    calcLossInline: "−$17",
    calcFullMark: "จองตรง: $100",
    calcPayLabel: "คุณจ่ายให้ OTA",
    calcMonthValue: "$2,790/เดือน",
    calcYearValue: "$33,400/ปี",
    calcRecoverLabel: "ที่ได้คืนจริงในปีแรก",
    calcRecoverValue: "~$560/เดือน",
    calcRecoverHintAria: "ตัวเลขนี้มาจากไหน",
    calcRecoverHint: "ในปีแรก ระบบจองตรงมักดึงยอดจองจาก OTA มาที่ช่องทางของคุณเองได้ 15–25% ที่นี่เราคิดไว้ที่ 20% ส่วนที่เหลือยังมาทาง OTA ต่อไป คุณไม่ได้เลิกใช้ OTA แต่หยุดจ่ายค่าคอมมิชชั่นในส่วนที่เป็นของคุณได้",
    calcFootnote: "12 ห้อง · เข้าพัก 65% · ผ่าน OTA 70% · คอมมิชชั่น 17%",

    // --- LOGO MARQUEE ---
    marqueeLabel: "ช่องทางที่เราเชื่อมต่อให้",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    scaleTitle: "รายได้ของคุณรั่วไหลตรงไหน",

    // Полоса сравнения — единственное место, где на странице проговаривается
    // «было → стало». Иллюстрации из удалённых карточек живут здесь иконками
    scaleCmpNowLabel: "เมื่อยังไม่มีระบบจองตรง",
    scaleCmpAfterLabel: "เมื่อทำงานกับ FT Agency",
    scaleCmpNow: [
      "อัปเดตราคาและห้องว่างด้วยมือตลอดเวลา",
      "ทุกการจองเสียให้แพลตฟอร์ม 15–20%",
      "ลูกค้าทุกคนมาจากช่องทางที่ไม่ใช่ของคุณ"
    ],
    scaleCmpAfter: [
      "ปฏิทินห้องพักชุดเดียว ซิงค์กับกว่า 300 ช่องทาง",
      "จองตรงโดยไม่เสียค่าคอมมิชชั่น ตลอดไป",
      "ทราฟฟิกค้นหาของคุณเองและลูกค้าที่กลับมาซ้ำ"
    ],

    // --- WHO'S BEHIND THIS ---
    // Повествование блока идёт от «мы», поэтому заголовок — агентство,
    // а человек становится подписью под ним
    aboutLabel: "ใครอยู่เบื้องหลัง",
    aboutAgency: "FT Agency",
    aboutName: "Fedor Tsvetkov",
    aboutRole: "ผู้ก่อตั้งและกรรมการผู้จัดการ",
    aboutLocation: "ปัจจุบันอยู่ที่ภูเก็ต",
    // Первым идёт то, что решает: условия сделки и владение системой.
    // Общее описание агентства — вторым
    aboutP1: "เราสร้างระบบจองตรง ส่งมอบความเป็นเจ้าของให้คุณทั้งหมด และดูแลต่อหลังส่งมอบ ไม่มีสัญญาผูกมัด ไม่มีส่วนแบ่งรายได้ ธุรกิจที่พักคือกลุ่มที่เรื่องนี้สำคัญที่สุด — ที่พักต้องยกรายได้ 15–20% ให้แพลตฟอร์มที่ตัวเองควบคุมไม่ได้",
    aboutP2: "เราสร้างระบบหาลูกค้าและระบบอัตโนมัติให้ธุรกิจที่ขายตรงถึงลูกค้า และดูแลตั้งแต่ต้นจนจบ ไม่ใช่งานครั้งเดียวจบ",
    aboutLinkAgency: "ดูข้อมูล FT Agency เพิ่มเติม",

    // Trust Stats
    stat2Num: "20+",
    stat2Name: "แบรนด์ที่ขยาย",
    stat2Sub: "โมเดล B2B & Direct",
    stat3Num: "10+",
    stat3Name: "ประสบการณ์ (ปี)",
    stat3Sub: "การเติบโตและระบบ",

    // --- SEE THE SYSTEM ---
    seeSystemTitle: "ระบบทำงานอย่างไรตั้งแต่ต้นจนจบ",
    seeSystemStep1: "แขกจอง",
    seeSystemStep2: "คุณเห็นเลย",
    seeSystemStep3: "แขกได้รับ",
    seeSystemCaption: "จากการจองถึงการยืนยัน — ไม่มีค่าคอมมิชชั่น",
    seeSystemDisclaimer: "อินเทอร์เฟซที่แสดงเป็นเพียงตัวอย่างประกอบ แพลตฟอร์มจริงจะเลือกตามแต่ละที่พัก",

    // --- PRICING ---
    priceTitle: "วางระบบโปร่งใส เป็นอิสระจากแพลตฟอร์มถาวร",
    priceSub: "จ่ายค่าติดตั้งครั้งเดียว ไม่มีค่าคอมมิชชั่นจากการจองตรงตลอดไป",
    pricePopular: "ยอดนิยม",
    priceDisclaimerAudit: "ราคาสุดท้ายยืนยันหลังตรวจสอบรายได้ฟรี",
    priceMore2: "+ อีก 4 รายการจาก Lite",
    priceMore3: "+ อีก 7 รายการจาก Standard",
    priceDisclaimerSub: "+ ค่าสมัครใช้งาน PMS และ channel manager (ปฏิทินเดียวที่อัปเดตทุกแพลตฟอร์มพร้อมกัน) ชำระตรงกับผู้ให้บริการ",

    // Первое появление термина на странице объясняется человеческим языком;
    // подсказка показывается только в собственном списке тарифа, не в свёрнутом
    featureHints: {
      "Cloud PMS Setup": "การจองทั้งหมดอยู่ที่เดียว ไม่ใช่ในไฟล์ตาราง",
      "0% Commission Engine": "หน้าที่ลูกค้าจองบนเว็บไซต์ของคุณเอง",
      "Direct Promo Engine": "โปรโมชั่นและส่วนลดเฉพาะการจองตรง",
      "Marketing Analytics Setup": "ดูได้ว่ายอดจองมาจากช่องทางไหน"
    } as Record<string, string>,

    // Диапазоны — ориентир, а не правило: реальная сегментация идёт по ADR
    pricePaybackNote: "ระยะคืนทุนขึ้นอยู่กับขนาดที่พักและราคาห้องเฉลี่ย — ตัวอย่างด้านบนคือที่พัก 12 ห้อง",
    priceFitHint: "ไม่แน่ใจว่าแพ็กเกจไหนใช่? สองคำถามตอนตรวจสอบก็รู้แล้ว",

    // Реверс риска: стоит выше кнопки, чтобы снятие риска прошло до нажатия
    riskTitle: "จ่าย 50% ตอนเริ่ม อีก 50% ตอนระบบเปิดใช้งาน",
    riskText: "ถ้าระบบไม่เปิดใช้งานใน 14 วัน คุณไม่ต้องจ่ายครึ่งหลัง",

    // Микрокопия под каждой главной кнопкой — что произойдёт после нажатия
    // TODO(i18n): временно английский — языковой проход по TH идёт отдельной
    // задачей, полуперевод намеренно не делаем
    ctaNote: "Send us your property name. We reply with what OTAs are costing you — your numbers, not an example.",

    tier1Title: "LITE",
    tier1Price: "From $1,200",
    tier1Payback: "คืนทุนโดยทั่วไป: 3–4 เดือน",
    tier1Fit: "เหมาะกับ: 1–9 ห้อง",
    tier1Desc: "สำหรับวิลล่าและเกสต์เฮาส์ขนาดเล็ก",

    tier2Title: "STANDARD",
    tier2Price: "From $2,500",
    tier2Payback: "คืนทุนโดยทั่วไป: 2–3 เดือน",
    tier2Fit: "เหมาะกับ: 10–29 ห้อง",
    tier2Desc: "สำหรับบูติกโฮเทลและรีสอร์ท",

    tier3Title: "ENTERPRISE",
    tier3Price: "Custom",
    tier3Payback: "คืนทุนโดยทั่วไป: ไม่ถึง 2 เดือน",
    tier3Fit: "หลายที่พักและบริษัทจัดการ",
    tier3Desc: "สำหรับเครือโรงแรมและบริษัทจัดการ",

    // --- FAQ SECTION ---
    faqTitle: "คำถามที่พบบ่อย",
    // TODO(i18n): весь блок FAQ временно на английском — тексты будут писаться
    // от смысла в отдельной языковой задаче, а не переводиться дословно
    faqSub: "The questions owners actually ask",
    // Порядок вопросов идёт от главного возражения (уход с OTA) к механике
    // сделки. Пустая строка внутри `a` разбивает ответ на абзацы при рендере
    faqItems: [
      {
        q: "Do I have to leave Booking.com and Agoda?",
        a: "No. You keep every channel you use today. A direct booking system doesn't replace OTAs — it adds a channel you own. Most properties still get 70–85% of bookings through OTAs in year one. The difference is that the bookings that come direct cost you 0% instead of 15–20%."
      },
      {
        q: "Will Booking.com penalise me for taking direct bookings?",
        a: "Direct bookings themselves are never a problem — every property on Booking.com also sells directly. What OTA contracts do restrict is showing a lower public price on your own site: break that and the response isn't a fine, it's quieter — a drop in ranking, loss of Preferred status. Most owners find that out the hard way.\n\nWe set your system up so it never happens. Your public rates stay aligned, you simply stop paying commission on the bookings that come direct. And when you do want to reward direct guests, there are ways the contracts allow — member rates behind an email signup, breakfast, late checkout. We configure those correctly."
      },
      {
        q: "Are there any hidden fees, and what does the software cost each month?",
        a: "Zero commission from us, ever. You pay our one-time setup fee and keep 100% of direct booking revenue. The one ongoing cost is the software subscription, paid directly to the provider — typically $30–100/month depending on platform and property size. No markup from us, no agent fees. We'll confirm the exact figure for your property before you commit to anything."
      },
      {
        q: "Who owns the system if we stop working together?",
        a: "You do — the accounts, the data, the guest list, the booking engine. Everything is set up in your name from day one. There's no lock-in and no revenue share. If you want to run it alone after launch, you can. If you want us on monthly support, that's optional and separate."
      },
      {
        q: "What happens after I send a message?",
        a: "You send your property name. We reply — usually the same day — with what OTAs are costing you based on your actual listings: your rates, your room count, your channel mix. Your numbers, not an example.\n\nIf it looks worth doing, we scope the setup: most properties are live in 7–14 days, with configuration and testing running in the background so your current bookings are never interrupted. Payment is 50% upfront, 50% on launch — and if it's not live in 14 days, you don't pay the second half."
      },
      {
        q: "How do guests pay, and how fast do I get my money?",
        a: "Guests pay through a secure payment gateway connected to your own booking engine. The money goes to your business bank account directly — no middleman holding it, no waiting for a platform payout cycle. The gateway is in your name, not ours."
      }
    ],

    // --- FOOTER CTA ---
    footerTitle: "พร้อมที่จะเพิ่มรายได้หรือยัง?",
    footerSub1: "เลิกเสียรายได้ 15–20% ไปกับค่าคอมมิชชั่น",
    footerSub2: "ควบคุมยอดจองตรงของคุณได้อย่างสมบูรณ์",
    footerBtn: "ตรวจสอบรายได้ฟรี 20 นาที"
  }
};
