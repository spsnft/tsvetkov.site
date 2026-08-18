// Названия компонентов системы не переводятся — одинаковы во всех локалях.
// "Direct Promo Engine" → "Promo Engine" и "Marketing Analytics Setup" →
// "Marketing Analytics" укорочены (см. ТЗ №3, п. 6) — featureHints в
// каждой локали ниже переключены на новые ключи. "Booking & Agoda Sync" →
// "Booking.com & Agoda sync" — площадка называется Booking.com, "Booking"
// само по себе читается как «бронирование» (см. ТЗ №10, п. C3)
export const FEATURE_NAMES = [
  "Cloud PMS Setup",
  "0% Commission Engine",
  "Booking.com & Agoda sync",
  "Payment Integration",
  "Connect 300+ OTA Channels",
  "Promo Engine",
  "Marketing Analytics",
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
    // Порядок: H1 → подзаголовок → калькулятор → кнопка → микрокопия
    // (см. ТЗ №7, п. 2) — калькулятор рендерится между ними в
    // CalculatorSection, кнопка Hero больше не рисует. "\n" — жёсткий
    // перенос между двумя предложениями H1, не на усмотрение браузера
    // (см. ТЗ №7, п. 1.4); внутри каждой строки перенос обычный
    heroTitle: "Take bookings direct.\nKeep the 15–20%.",
    heroSubtitle: "Guests book direct on your site. Every channel stays in one calendar. Everything is in your name.",
    // Главная кнопка первого экрана — переехала из Hero в CalculatorSection,
    // текст свой, не переиспользует btnAudit (тот остаётся во всех местах,
    // где раньше — Pricing, FooterCTA, Nav). "my" вместо "your" — решение
    // читается как собственное (см. ТЗ №7, п. 3.1)
    heroCtaLabel: "Ask for my revenue check",
    heroCtaNote: "One WhatsApp message. No commitment.",
    // Текст кнопки в хедере — свой, короче и без "free" (см. ТЗ №7, п. 4.1):
    // "free" уже есть в главной кнопке, дублировать на одном экране незачем
    navCtaLabel: "Revenue check",
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

    // Калькулятор — один ряд, две группы: расход («you pay») слева,
    // возврат («you keep») справа — расход первым, иначе «~$6,800» без
    // якоря «$33,900» не читается. Оба процента/примечания, которые раньше
    // стояли в самом ряду, теперь только в общей сноске calcAssumptions
    // (см. ТЗ №4, п. 2.2/2.4). Окупаемости (сроков в месяцах) по-прежнему
    // нет нигде на странице, это предмет бесплатного Revenue Check
    calcUnitsLabel: "Rooms or villas",
    calcAdrLabel: "Average nightly rate",
    calcOutputLabel: "You pay OTAs",
    calcYearLabel: "per year",
    calcMonthLabel: "per month",
    calcAssumptions: "Based on 65% occupancy, 70% of bookings through OTAs, and 17% average commission. The first-year figure assumes about 20% of your OTA volume moves to direct — conservative for a property starting with no direct channel. Year two and beyond, 30–40% is realistic.",
    calcAssumptionsAria: "Show calculation assumptions",
    // Параллельно с calcOutputLabel — «you pay» / «you keep» одного стиля
    // и кегля, читаются как одно предложение (см. ТЗ №4, п. 2.3).
    // "Year 1" вместо "year one" — на 375px лейбл переносился на две
    // строки и ломал выравнивание сумм из ТЗ №6 (см. ТЗ №8, п. 1.1)
    calcRecoveryLabel: "You keep — Year 1",

    // --- LOGO MARQUEE ---
    marqueeLabel: "CHANNELS WE CONNECT",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    // Три пары проблема→решение, деньги первыми, операционка последней.
    // Заменяет прежнюю двухколоночную полосу сравнения (WITHOUT/WITH).
    // Eyebrow больше не повторяет H2 дословно — «тема + утверждение», а не
    // повтор (см. ТЗ №10, п. A1)
    scaleLabel: "THE DIFFERENCE",
    scaleTitle: "What changes when bookings come direct",
    // Один и тот же лейбл на обоих брейкпоинтах — пара про канал
    // (OTA vs direct), а не про время (см. ТЗ №4, п. 3.2). Строчные:
    // регистр не несёт смысла, различие — в цвете и весе, не в капсе
    // (см. ТЗ №5, п. 2.3). "OTAs" — аббревиатура, капитализация внутри
    // слова не трогается
    scaleLabelToday: "on OTAs",
    scaleLabelDirect: "direct",
    scalePair1Problem: "15–20% of every booking goes to the platform",
    scalePair1Solution: "Bookings at 0% commission, forever",
    scalePair2Problem: "Your guests belong to the platform",
    scalePair2Solution: "Your guest list belongs to you",
    scalePair3Problem: "Rates updated by hand, around the clock",
    // Было "One calendar for 300+ channels" — отвечало не на то возражение
    // (слева про ручной труд, справа про число каналов). Новая строка
    // отвечает про труд, число каналов сохранено (см. ТЗ №10, п. A2)
    scalePair3Solution: "Update once — 300+ channels follow",

    // --- WHO'S BEHIND THIS ---
    // Повествование блока теперь идёт от человека, а не агентства: заголовок —
    // имя, agентство и локация — подпись под ним. aboutAgency намеренно не
    // задаётся для EN — по его отсутствию About.tsx выбирает новую вёрстку
    // (см. компонент); RU/TH задают aboutAgency и остаются на старой.
    aboutLabel: "WHO'S BEHIND THIS",
    aboutName: "Fedor Tsvetkov",
    aboutRole: "Founder, FT Agency · Phuket",
    // Последнее предложение («B2B, e-commerce, services: 20+ brands over
    // 10 years») снято — дублирует блок статистики двумя абзацами ниже
    aboutP1: "FT Agency builds customer acquisition systems — sites, analytics, CRM, outreach — for companies that sell directly to their customers.",
    aboutP2: "Hospitality is that same problem at its sharpest — the property does all the work, and the platform owns the guest.",
    // Второе предложение вынесено в aboutClosingLine — отдельной строкой
    // крупнее абзацев, между текстом и счётчиками. Формулировка не менялась,
    // кроме пунктуации самой выносимой строки (см. ТЗ №10, п. B3)
    aboutP3: "I founded the agency and I run these projects myself.",
    aboutClosingLine: "From your first message to launch, you're dealing with me — not a support queue.",
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
    // Без финальной точки — внутренние точки (после "your rates" и т.п.)
    // остаются (см. ТЗ №4, п. 4)
    seeSystemBenefit1: "Your page, your rates. No commission on this booking",
    seeSystemLabel2: "You see it instantly",
    seeSystemBenefit2: "Every channel in one calendar. Rooms close everywhere automatically",
    seeSystemLabel3: "Guest gets confirmed",
    seeSystemBenefit3: "Sent automatically, in your name. You do nothing",
    // Высота блока описания фиксируется в две строки для EN — при
    // локализации RU/TH это число может понадобиться увеличить отдельно,
    // строки там длиннее (см. SeeSystem.tsx)
    seeSystemBenefitLines: 2,
    // ฿24,000 ≈ $690 direct; при 17%-комиссии (то же допущение, что в
    // калькуляторе героя) через Booking.com осталось бы $573 — разница $117.
    // THB-строка переведена по фиксированному демо-курсу ~32.5 THB/USD (не
    // живой курс, только чтобы показать масштаб в батах): $117 × 32.5 ≈
    // ฿3,800. seeSystemDisclaimer для EN намеренно не задан — компонент
    // рендерит его только если пришёл (см. ТЗ №3, п. 4.1). Первая строка
    // короче прежней — укладывается в одну линию на любом экране, без
    // некрасивого переноса (см. ТЗ №5, п. 3)
    seeSystemCaption: "You keep $117 more on this booking",
    seeSystemCaptionSub: "≈ ฿3,800 — Booking.com would have taken 17%",

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
    // "0% Commission Engine": было "bookings on your site" — дублировало
    // "bookings" со строкой Cloud PMS Setup выше. "Marketing Analytics":
    // "where bookings come from" короче на одну строку (см. ТЗ №5, п. 5)
    featureHints: {
      "Cloud PMS Setup": "all bookings in one place",
      "0% Commission Engine": "on your own site",
      "Promo Engine": "direct-only offers",
      "Marketing Analytics": "booking sources"
    } as Record<string, string>,

    // Вторая (мелкая, приглушённая) строка объединённого risk-box — не
    // отдельный элемент над рамкой, см. Pricing.tsx. $30–100/month снят
    // отсюда, остаётся только в FAQ (там он снимает страх, а не пугает в
    // момент выбора тарифа, см. ТЗ №3, п. 7.2)
    pricePaybackNote: "Final price confirmed after your revenue check. PMS and channel manager subscriptions are billed by the provider, separately from our fee.",

    // Реверс риска: стоит выше кнопки, чтобы снятие риска прошло до нажатия.
    // Обещание срока (14 дней) снято — гарантия результата без обещания
    // срока (см. ТЗ №3, п. 7.2); riskText для EN больше не задаётся
    riskTitle: "50% upfront. The second half only when your system is live.",

    // Микрокопия под кнопкой в финальном CTA-блоке (FooterCTA). Часть
    // смысла («your numbers, not an example») переехала в footerTitle,
    // поэтому строка короче. Не переиспользует heroCtaNote — здесь
    // конкретика про имя объекта работает лучше в точке решения
    // (см. ТЗ №10, п. D4)
    ctaNote: "Send us your property name. We reply within a day.",

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
    faqSub: "Questions owners ask",
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
        // Второй абзац переписан целиком — не дублировать обещание 14 дней
        // из risk-box под тарифами (см. ТЗ №3, п. 8.2)
        a: "You send your property name. We reply — usually the same day — with what OTAs are costing you based on your actual listings: your rates, your room count, your channel mix. Your numbers, not an example.\n\nMost setups take one to two weeks, depending on how fast we get access to your listings. Configuration and testing run in the background, so your current bookings are never interrupted. Payment is 50% upfront, and the second half only when your system is live."
      },
      {
        q: "How do guests pay, and how fast do I get my money?",
        a: "Guests pay through a secure payment gateway connected to your own booking engine. The money goes to your business bank account directly — no middleman holding it, no waiting for a platform payout cycle. The gateway is in your name, not ours."
      }
    ],

    // --- FOOTER CTA ---
    // Единственная секция без eyebrow — приведена к общему правилу (см. ТЗ №2, п. 4)
    footerLabel: "GET STARTED",
    // Было "See what OTAs actually cost you" — дословно повторяло обещание
    // первого экрана, к этому моменту читатель уже видел сумму в
    // калькуляторе. Новый заголовок называет разницу между калькулятором
    // (усреднённые допущения) и revenue check (реальные листинги)
    // (см. ТЗ №10, п. D2)
    footerTitle: "Your numbers, not an example",
    // Одна строка вместо двух центрированных — обе старые были общими
    // агентскими формулировками, "15–20%" звучало бы третий раз на странице.
    // footerSub2 больше не задаётся — FooterCTA.tsx рендерит вторую строку
    // только если она пришла (см. ТЗ №10, п. D3)
    footerSub1: "The calculator runs on averages. The revenue check runs on your listings.",
    footerBtn: "Free Revenue Check"
  },

  ru: {
    // --- HERO SECTION ---
    heroTitle: "Хватит платить 15–20% комиссии Booking.com и Agoda",
    heroSub1: "Подключите свой объект на Пхукете напрямую к гостям\nНикаких ошибок и двойных броней",
    heroSub2: "Оставляйте 100% прибыли себе",
    // Читается компонентом Hero для всех локалей одинаково (см. ТЗ №3, п. 3.1.1);
    // heroSub1/heroSub2 выше больше не используются Hero.tsx, но оставлены —
    // это данные, а не мёртвый код, могут понадобиться при возврате к старой вёрстке
    heroSubtitle: "Гости бронируют напрямую на вашем сайте. Все каналы — в одном календаре. Всё оформлено на ваше имя.",
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

    // Калькулятор в HeroCalculator.tsx общий для всех локалей — читает эти
    // ключи напрямую, без ветвления по lang (см. ТЗ №3, п. 3.1.2)
    calcUnitsLabel: "Номера или виллы",
    calcAdrLabel: "Средний тариф за ночь",
    calcOutputLabel: "Вы платите OTA",
    calcYearLabel: "в год",
    calcMonthLabel: "в месяц",
    calcAssumptions: "Расчёт на основе загрузки 65%, доли OTA-броней 70% и средней комиссии 17%. Цифра за первый год предполагает, что около 20% объёма OTA перейдёт на прямой канал — консервативная оценка для объекта, который только начинает работать без прямого канала. Со второго года реалистичный показатель — 30–40%.",
    calcAssumptionsAria: "Показать допущения расчёта",
    calcRecoveryLabel: "Вы вернёте — год 1",

    // --- LOGO MARQUEE ---
    marqueeLabel: "КАНАЛЫ, КОТОРЫЕ МЫ ПОДКЛЮЧАЕМ",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    // scaleLabel/scaleLabelToday/scaleLabelDirect/scalePair* — читаются
    // ScalePractice.tsx для всех локалей (см. ТЗ №3, п. 3.1.3); старые
    // scaleCmpNow/scaleCmpAfter ниже больше не рендерятся этим компонентом,
    // но оставлены как данные
    scaleLabel: "РАЗНИЦА",
    scaleTitle: "Где утекает ваша выручка",
    scaleLabelToday: "через OTA",
    scaleLabelDirect: "напрямую",
    scalePair1Problem: "15–20% с каждой брони уходит платформе",
    scalePair1Solution: "Прямые брони с нулевой комиссией — навсегда",
    scalePair2Problem: "Ваши гости принадлежат платформе",
    scalePair2Solution: "База гостей принадлежит вам",
    scalePair3Problem: "Цены обновляются вручную, круглые сутки",
    scalePair3Solution: "Обновили один раз — синхронизировано на 300+ каналах",

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
    seeSystemEyebrow: "КАК ЭТО РАБОТАЕТ",
    seeSystemTitle: "Как это работает — от брони до заезда",
    seeSystemStep1: "Гость бронирует",
    seeSystemStep2: "Вы это видите",
    seeSystemStep3: "Гость получает",
    // Полные лейблы + строка выгоды у каждого демо-экрана (см. ТЗ №3, п. 3.1.4)
    seeSystemLabel1: "Гость бронирует у вас на сайте",
    seeSystemBenefit1: "Ваша страница, ваши тарифы. Комиссии с этой брони нет",
    seeSystemLabel2: "Вы видите это мгновенно",
    seeSystemBenefit2: "Все каналы — в одном календаре. Номера закрываются везде автоматически",
    seeSystemLabel3: "Гость получает подтверждение",
    seeSystemBenefit3: "Отправляется автоматически, от вашего имени. Вам делать ничего не нужно",
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
    // Ключи синхронизированы с переименованием в FEATURE_NAMES (см. ТЗ №3,
    // п. 6) — текст подсказок не менялся
    featureHints: {
      "Cloud PMS Setup": "все брони в одном месте, а не в таблице",
      "0% Commission Engine": "страница, на которой гость бронирует у вас на сайте",
      "Promo Engine": "акции и скидки только для прямых броней",
      "Marketing Analytics": "видно, откуда приходят брони"
    } as Record<string, string>,

    // Диапазоны — ориентир, а не правило: реальная сегментация идёт по ADR
    pricePaybackNote: "Окупаемость зависит от размера объекта и цены за ночь — в примере выше объект на 12 номеров.",
    priceFitHint: "Не знаете, какой ваш? На разборе это решают два вопроса.",

    // Реверс риска: стоит выше кнопки, чтобы снятие риска прошло до нажатия
    riskTitle: "50% на старте, 50% при запуске.",
    riskText: "Не запустили за 14 дней — вторую половину вы не платите.",

    // Микрокопия под каждой главной кнопкой — что человек даёт и что получает
    ctaNote: "Напишите название объекта. Мы ответим, сколько вам стоят OTA — на ваших цифрах, а не на примере.",

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
    faqSub: "Вопросы, которые реально задают владельцы",
    faqItems: [
      {
        q: "Обязательно ли уходить с Booking.com и Agoda?",
        a: "Нет. Все каналы, которыми вы пользуетесь сейчас, остаются у вас. Система прямых броней не заменяет OTA — она добавляет канал, которым владеете вы. У большинства объектов в первый год всё ещё 70–85% броней приходит через OTA. Разница в том, что прямые брони стоят вам 0%, а не 15–20%."
      },
      {
        q: "Booking.com не оштрафует меня за приём прямых броней?",
        a: "Сами по себе прямые брони — не проблема: каждый объект на Booking.com тоже продаёт напрямую. Договоры с OTA ограничивают другое — показ более низкой цены на собственном сайте: нарушите это, и в ответ будет не штраф, а что-то тише — падение в рейтинге, потеря статуса Preferred. Большинство владельцев узнают об этом на своём опыте.\n\nМы настраиваем вашу систему так, чтобы этого не произошло. Публичные цены остаются согласованными, вы просто перестаёте платить комиссию с броней, которые приходят напрямую. А когда захотите поощрить гостей за прямое бронирование, есть способы, которые договоры разрешают — цены для подписчиков рассылки, завтрак, поздний выезд. Мы настраиваем это правильно."
      },
      {
        q: "Есть ли скрытые платежи и сколько стоит софт каждый месяц?",
        a: "С нашей стороны — ноль комиссии, всегда. Вы платите разовую плату за настройку и оставляете себе 100% выручки с прямых броней. Единственный постоянный расход — подписка на софт, которую вы платите напрямую провайдеру, обычно $30–100 в месяц в зависимости от платформы и размера объекта. Никакой наценки с нашей стороны, никаких агентских комиссий. Мы подтвердим точную цифру для вашего объекта до того, как вы на что-то согласитесь."
      },
      {
        q: "Кому принадлежит система, если мы перестанем работать вместе?",
        a: "Вам — аккаунты, данные, база гостей, система бронирования. Всё настроено на ваше имя с первого дня. Никакой привязки и никакого процента с выручки. Хотите вести всё самостоятельно после запуска — пожалуйста. Хотите оставить нас на ежемесячной поддержке — это отдельная опция, по желанию."
      },
      {
        q: "Что происходит после того, как я отправлю сообщение?",
        a: "Вы присылаете название объекта. Мы отвечаем — обычно в тот же день — сколько вам стоят OTA, исходя из ваших реальных объявлений: ваши тарифы, количество номеров, микс каналов. Ваши цифры, а не пример.\n\nЕсли это выглядит целесообразным, мы оцениваем объём настройки: большинство объектов запускаются за 7–14 дней, настройка и тестирование идут в фоне, поэтому текущие брони не прерываются ни на день. Оплата — 50% на старте, 50% при запуске, и если систему не запустили за 14 дней, вторую половину вы не платите."
      },
      {
        q: "Как гости платят и как быстро я получаю деньги?",
        a: "Гости платят через защищённый платёжный шлюз, подключённый к вашей собственной системе бронирования. Деньги идут напрямую на ваш бизнес-счёт — без посредника, который их держит, без ожидания цикла выплат от площадки. Шлюз оформлен на ваше имя, а не на наше."
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
    // Читается компонентом Hero для всех локалей одинаково (см. ТЗ №3, п. 3.2.1)
    heroSubtitle: "แขกจองตรงบนเว็บไซต์ของคุณ ทุกช่องทางอยู่ในปฏิทินเดียว ทุกอย่างอยู่ภายใต้ชื่อของคุณ",
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

    // Калькулятор в HeroCalculator.tsx общий для всех локалей — читает эти
    // ключи напрямую, без ветвления по lang (см. ТЗ №3, п. 3.2.2)
    calcUnitsLabel: "จำนวนห้องหรือวิลล่า",
    calcAdrLabel: "ราคาเฉลี่ยต่อคืน",
    calcOutputLabel: "คุณจ่ายให้ OTA",
    calcYearLabel: "ต่อปี",
    calcMonthLabel: "ต่อเดือน",
    calcAssumptions: "คำนวณจากอัตราการเข้าพัก 65% สัดส่วนการจองผ่าน OTA 70% และค่าคอมมิชชั่นเฉลี่ย 17% ตัวเลขปีแรกสมมติว่าประมาณ 20% ของยอดจอง OTA ย้ายมาเป็นการจองตรง ซึ่งเป็นตัวเลขระมัดระวังสำหรับที่พักที่เริ่มต้นโดยยังไม่มีช่องทางจองตรง ตั้งแต่ปีที่สองเป็นต้นไป ตัวเลขที่สมจริงคือ 30–40%",
    calcAssumptionsAria: "แสดงสมมติฐานการคำนวณ",
    calcRecoveryLabel: "คุณได้คืน — ปีแรก",

    // --- LOGO MARQUEE ---
    marqueeLabel: "ช่องทางที่เราเชื่อมต่อให้",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    // scaleLabel/scaleLabelToday/scaleLabelDirect/scalePair* — читаются
    // ScalePractice.tsx для всех локалей (см. ТЗ №3, п. 3.2.3)
    scaleLabel: "ความแตกต่าง",
    scaleTitle: "รายได้ของคุณรั่วไหลตรงไหน",
    scaleLabelToday: "ผ่าน OTA",
    scaleLabelDirect: "จองตรง",
    scalePair1Problem: "ทุกการจองเสียให้แพลตฟอร์ม 15–20%",
    scalePair1Solution: "จองตรงไม่มีค่าคอมมิชชั่น ตลอดไป",
    scalePair2Problem: "แขกของคุณเป็นของแพลตฟอร์ม",
    scalePair2Solution: "รายชื่อแขกเป็นของคุณเอง",
    scalePair3Problem: "อัปเดตราคาด้วยมือตลอดเวลา",
    scalePair3Solution: "อัปเดตครั้งเดียว ซิงค์ครบกว่า 300 ช่องทาง",

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
    seeSystemEyebrow: "วิธีการทำงาน",
    seeSystemTitle: "ระบบทำงานอย่างไรตั้งแต่ต้นจนจบ",
    seeSystemStep1: "แขกจอง",
    seeSystemStep2: "คุณเห็นเลย",
    seeSystemStep3: "แขกได้รับ",
    // Полные лейблы + строка выгоды у каждого демо-экрана (см. ТЗ №3, п. 3.2.4)
    seeSystemLabel1: "แขกจองบนเว็บไซต์ของคุณ",
    seeSystemBenefit1: "หน้าของคุณ ราคาของคุณ ไม่มีค่าคอมมิชชั่นสำหรับการจองนี้",
    seeSystemLabel2: "คุณเห็นทันที",
    seeSystemBenefit2: "ทุกช่องทางอยู่ในปฏิทินเดียว ห้องพักปิดอัตโนมัติทุกที่",
    seeSystemLabel3: "แขกได้รับการยืนยัน",
    seeSystemBenefit3: "ส่งอัตโนมัติในนามของคุณ คุณไม่ต้องทำอะไรเลย",
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
    // Ключи синхронизированы с переименованием в FEATURE_NAMES (см. ТЗ №3,
    // п. 6) — текст подсказок не менялся
    featureHints: {
      "Cloud PMS Setup": "การจองทั้งหมดอยู่ที่เดียว ไม่ใช่ในไฟล์ตาราง",
      "0% Commission Engine": "หน้าที่ลูกค้าจองบนเว็บไซต์ของคุณเอง",
      "Promo Engine": "โปรโมชั่นและส่วนลดเฉพาะการจองตรง",
      "Marketing Analytics": "ดูได้ว่ายอดจองมาจากช่องทางไหน"
    } as Record<string, string>,

    // Диапазоны — ориентир, а не правило: реальная сегментация идёт по ADR
    pricePaybackNote: "ระยะคืนทุนขึ้นอยู่กับขนาดที่พักและราคาห้องเฉลี่ย — ตัวอย่างด้านบนคือที่พัก 12 ห้อง",
    priceFitHint: "ไม่แน่ใจว่าแพ็กเกจไหนใช่? สองคำถามตอนตรวจสอบก็รู้แล้ว",

    // Реверс риска: стоит выше кнопки, чтобы снятие риска прошло до нажатия
    riskTitle: "จ่าย 50% ตอนเริ่ม อีก 50% ตอนระบบเปิดใช้งาน",
    riskText: "ถ้าระบบไม่เปิดใช้งานใน 14 วัน คุณไม่ต้องจ่ายครึ่งหลัง",

    // Микрокопия под каждой главной кнопкой — что произойдёт после нажатия
    ctaNote: "ส่งชื่อที่พักของคุณมา เราจะตอบกลับพร้อมตัวเลขว่า OTA เสียค่าใช้จ่ายให้คุณเท่าไหร่ — ตัวเลขจริงของคุณ ไม่ใช่ตัวอย่าง",

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
    faqSub: "คำถามที่เจ้าของที่พักถามจริง ๆ",
    // Порядок вопросов идёт от главного возражения (уход с OTA) к механике
    // сделки. Пустая строка внутри `a` разбивает ответ на абзацы при рендере
    faqItems: [
      {
        q: "ต้องเลิกใช้ Booking.com และ Agoda หรือไม่",
        a: "ไม่ต้อง คุณยังคงใช้ทุกช่องทางที่ใช้อยู่ในปัจจุบันได้เหมือนเดิม ระบบจองตรงไม่ได้มาแทนที่ OTA แต่เพิ่มช่องทางที่เป็นของคุณเองเข้ามา ที่พักส่วนใหญ่ในปีแรกยังคงมียอดจอง 70–85% ผ่าน OTA อยู่ ความแตกต่างคือการจองที่มาทางตรงไม่เสียค่าคอมมิชชั่นเลย แทนที่จะเสีย 15–20%"
      },
      {
        q: "Booking.com จะลงโทษถ้าฉันรับการจองตรงหรือไม่",
        a: "การจองตรงเองไม่เคยเป็นปัญหา ทุกที่พักบน Booking.com ก็ขายตรงด้วยเช่นกัน สิ่งที่สัญญาของ OTA จำกัดไว้คือการแสดงราคาที่ต่ำกว่าบนเว็บไซต์ของคุณเอง หากทำผิดข้อนี้ ผลที่ตามมาจะไม่ใช่ค่าปรับ แต่เงียบกว่านั้น เช่น อันดับตกลง หรือเสียสถานะ Preferred เจ้าของที่พักส่วนใหญ่รู้เรื่องนี้จากประสบการณ์ตรงที่ไม่ดี\n\nเราวางระบบให้คุณเพื่อไม่ให้เกิดเหตุการณ์แบบนี้ ราคาสาธารณะของคุณยังคงสอดคล้องกันทุกช่องทาง คุณแค่หยุดจ่ายค่าคอมมิชชั่นสำหรับการจองที่มาทางตรง และเมื่อคุณต้องการมอบสิทธิพิเศษให้แขกที่จองตรง ก็มีวิธีที่สัญญาอนุญาตไว้ เช่น ราคาสมาชิกหลังสมัครรับอีเมล อาหารเช้า หรือเช็คเอาท์ล่าช้า เราตั้งค่าสิ่งเหล่านี้ให้ถูกต้อง"
      },
      {
        q: "มีค่าใช้จ่ายแอบแฝงไหม และซอฟต์แวร์มีค่าใช้จ่ายต่อเดือนเท่าไหร่",
        a: "ไม่มีค่าคอมมิชชั่นจากเราเลย ไม่ว่าเวลาใด คุณจ่ายค่าติดตั้งครั้งเดียวและเก็บรายได้จากการจองตรง 100% ค่าใช้จ่ายต่อเนื่องอย่างเดียวคือค่าสมัครใช้งานซอฟต์แวร์ที่จ่ายตรงให้ผู้ให้บริการ โดยทั่วไปอยู่ที่ $30–100 ต่อเดือน ขึ้นอยู่กับแพลตฟอร์มและขนาดที่พัก เราไม่มีการบวกราคาเพิ่มและไม่มีค่านายหน้า เราจะยืนยันตัวเลขที่แน่นอนสำหรับที่พักของคุณก่อนที่คุณจะตัดสินใจทำอะไร"
      },
      {
        q: "หากเลิกทำงานร่วมกัน ระบบจะเป็นของใคร",
        a: "เป็นของคุณ ทั้งบัญชี ข้อมูล รายชื่อแขก และระบบจองห้องพัก ทุกอย่างตั้งค่าในนามของคุณตั้งแต่วันแรก ไม่มีข้อผูกมัดและไม่มีการแบ่งรายได้ หากต้องการดูแลระบบเองหลังเปิดใช้งานก็ทำได้ หรือหากต้องการให้เราซัพพอร์ตรายเดือน ก็เป็นตัวเลือกเสริมแยกต่างหาก"
      },
      {
        q: "หลังจากส่งข้อความไปแล้วจะเกิดอะไรขึ้น",
        a: "คุณส่งชื่อที่พักมาให้เรา เราจะตอบกลับ โดยปกติภายในวันเดียวกัน พร้อมตัวเลขว่า OTA เสียค่าใช้จ่ายให้คุณเท่าไหร่ โดยอิงจากรายการที่พักจริงของคุณ ทั้งราคา จำนวนห้อง และสัดส่วนช่องทางการจอง เป็นตัวเลขของคุณจริง ๆ ไม่ใช่ตัวอย่าง\n\nหากดูแล้วคุ้มค่าที่จะทำ เราจะประเมินขอบเขตการติดตั้ง ที่พักส่วนใหญ่เปิดใช้งานได้ภายใน 7–14 วัน โดยการตั้งค่าและทดสอบทำงานอยู่เบื้องหลัง การจองปัจจุบันของคุณจึงไม่ถูกรบกวนเลย การชำระเงินคือ 50% ล่วงหน้า อีก 50% เมื่อระบบเปิดใช้งาน และหากยังไม่เปิดใช้งานภายใน 14 วัน คุณไม่ต้องจ่ายครึ่งหลัง"
      },
      {
        q: "แขกชำระเงินอย่างไร และฉันจะได้รับเงินเร็วแค่ไหน",
        a: "แขกชำระเงินผ่านช่องทางการชำระเงินที่ปลอดภัย ซึ่งเชื่อมต่อกับระบบจองห้องพักของคุณเอง เงินเข้าบัญชีธนาคารธุรกิจของคุณโดยตรง ไม่มีตัวกลางถือเงินไว้ ไม่ต้องรอรอบจ่ายเงินของแพลตฟอร์ม ช่องทางการชำระเงินนี้อยู่ในนามของคุณ ไม่ใช่ของเรา"
      }
    ],

    // --- FOOTER CTA ---
    footerTitle: "พร้อมที่จะเพิ่มรายได้หรือยัง?",
    footerSub1: "เลิกเสียรายได้ 15–20% ไปกับค่าคอมมิชชั่น",
    footerSub2: "ควบคุมยอดจองตรงของคุณได้อย่างสมบูรณ์",
    footerBtn: "ตรวจสอบรายได้ฟรี 20 นาที"
  }
};
