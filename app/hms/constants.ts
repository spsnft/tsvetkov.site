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
    heroTitle: "Stop Paying 15-20% Commissions to Booking.com & Agoda",
    heroSub1: "Connect your Phuket property directly to guests\nZero risk of human error and double-bookings",
    heroSub2: "Keep 100% of the profit in your pocket",
    btnAudit: "Free 20-min Revenue Check",
    btnAuditShort: "Free Check",

    // Единственный преднабранный текст WhatsApp — тариф человек называет сам
    waMessage: "Hi! I'd like a free 20-min revenue check for my property.",

    // --- NAV ---
    navAbout: "About Us",
    navHowItWorks: "How It Works",
    navPricing: "Pricing",
    navFaq: "FAQ",

    // Hero calculation card — one booking, then the same loss per month and per year
    otaCostBadge: "WHAT OTAs COST YOU",
    calcUnitLabel: "ONE $100 BOOKING",
    calcKeepInline: "you keep $83",
    calcLossInline: "−$17",
    calcFullMark: "Direct: $100",
    calcMonthLabel: "Every month",
    calcMonthValue: "$2,790",
    calcYearLabel: "Every year",
    calcYearValue: "$33,400",
    calcFootnote: "12 units · 65% occupancy · 70% via OTA · 17% commission",

    // --- LOGO MARQUEE ---
    marqueeLabel: "CHANNELS WE CONNECT",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    scaleTitle: "Scale your property bookings",
    scaleSub: "Automate workflows so your team can focus on guest experience",

    // Полоса сравнения над карточками: контраст «было → стало» рассказывается
    // здесь один раз, поэтому карточки ниже несут только решения
    scaleCmpNowLabel: "WITHOUT A DIRECT SYSTEM",
    scaleCmpAfterLabel: "WITH FT AGENCY",
    scaleCmpNow: [
      "Rates and availability updated by hand, around the clock",
      "15–20% of every booking goes to the platform",
      "Every guest arrives through a channel you don't own"
    ],
    scaleCmpAfter: [
      "One inventory grid, synced across 300+ channels",
      "Direct bookings at zero commission, forever",
      "Your own search traffic and returning guests"
    ],

    scaleItems: [
      {
        endValue: "Instant Sync",
        desc: "Cloud PMS & Channel Manager integration. Every reservation instantly locks your inventory grid across Booking.com, Agoda & 300+ OTAs"
      },
      {
        endValue: "100% Direct Revenue",
        desc: "Zero-commission booking engine with a secure payment gateway. Process bookings on your own terms and keep all revenue in-house"
      },
      {
        endValue: "Predictable Scale",
        desc: "Local SEO optimization to capture high-intent search traffic, paired with automated guest retention loops to turn past stays into lifetime revenue"
      }
    ],

    // --- WHO'S BEHIND THIS ---
    // Повествование блока идёт от «мы», поэтому заголовок — агентство,
    // а человек становится подписью под ним
    aboutLabel: "WHO'S BEHIND THIS",
    aboutAgency: "FT Agency",
    aboutRole: "Fedor Tsvetkov · Founder & Managing Director",
    aboutLocation: "Currently based in Phuket",
    aboutP1: "We build acquisition and automation systems for businesses that sell directly to their customers — and we run them end to end, not as one-off projects.",
    aboutP2: "Hospitality is where that translates most directly: properties handing 15–20% of revenue to platforms they don't control. We build the direct booking system, transfer full ownership to you, and stay on for support. No lock-in, no revenue share.",
    aboutLinkAgency: "More about FT Agency",

    // Trust Stats
    stat2Num: "20+",
    stat2Name: "Brands Scaled",
    stat2Sub: "B2B & Direct models",
    stat3Num: "10+",
    stat3Name: "Years Experience",
    stat3Sub: "Growth & systems",

    // --- PRICING ---
    priceTitle: "Transparent Integration. Permanent Independence",
    priceSub: "One-time setup fee. Zero commission on direct bookings forever",
    pricePopular: "Popular",
    priceDisclaimerAudit: "Final price confirmed after your free audit. PMS/channel manager subscription billed separately by provider.",
    priceMore2: "+ 4 from Lite",
    priceMore3: "+ 7 from Standard",

    tier1Title: "LITE",
    tier1Price: "From $1,200",
    tier1Payback: "Typical payback: 3–4 months",
    tier1Desc: "For small villas & guesthouses",

    tier2Title: "STANDARD",
    tier2Price: "From $2,500",
    tier2Payback: "Typical payback: 2–3 months",
    tier2Desc: "For boutique hotels & resorts",

    tier3Title: "ENTERPRISE",
    tier3Price: "Custom",
    tier3Payback: "Typical payback: under 2 months",
    tier3Desc: "For hotel chains & operators",

    // --- FAQ SECTION ---
    faqTitle: "Frequently Asked Questions",
    faqSub: "Everything you need to know about pricing, setup, and system ownership",
    faqItems: [
      {
        q: "Are there any hidden fees or commissions?",
        a: "Zero commission from us — you pay our one-time setup fee and keep 100% of direct booking revenue. The only separate expense is the third-party software subscription, paid directly to providers without any agent markups"
      },
      {
        q: "Will my team be able to manage the system easily?",
        a: "Yes — modern Cloud PMS platforms are as intuitive as a smartphone app and need zero technical background. If your team wants custom operational handbooks, checklists, or hands-on staff onboarding, that's available as a tailored add-on — we'll scope it together on your audit call."
      },
      {
        q: "How long does the setup take, and will it interrupt my daily bookings?",
        a: "Most properties are fully integrated in 7 to 14 days — larger or multi-property portfolios are scoped individually. All technical configuration, payment testing, and channel syncing happen in the background, so your existing reservations and daily operations run smoothly without downtime."
      },
      {
        q: "What support do you offer after the system goes live?",
        a: "We don't disappear after setup. Every project includes 14 days of dedicated post-launch monitoring to fine-tune operations and ensure everything runs flawlessly. After that, you can manage it independently or opt for our monthly maintenance package"
      },
      {
        q: "How do guests pay, and how fast do I get my money?",
        a: "We connect secure payment gateways directly to your direct booking engine. Guest payments go into your corporate bank account without middleman delays"
      }
    ],

    // --- FOOTER CTA ---
    footerTitle: "Ready to maximize your revenue?",
    footerSub1: "Stop leaving 15–20% on the table",
    footerSub2: "Take full control of your direct bookings",
    footerBtn: "Free 20-min Revenue Check"
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
    calcMonthLabel: "Каждый месяц",
    calcMonthValue: "$2,790",
    calcYearLabel: "Каждый год",
    calcYearValue: "$33,400",
    // Сегмент «70% через OTA» снят: русская строка — самая длинная, в одну
    // строку на 320px она не помещается даже на нижней границе кегля
    calcFootnote: "12 номеров · загрузка 65% · комиссия 17%",

    // --- LOGO MARQUEE ---
    marqueeLabel: "КАНАЛЫ, КОТОРЫЕ МЫ ПОДКЛЮЧАЕМ",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    scaleTitle: "Масштабируйте бронирования объекта",
    scaleSub: "Автоматизируйте процессы, чтобы команда фокусировалась на гостях",

    // Полоса сравнения над карточками: контраст «было → стало» рассказывается
    // здесь один раз, поэтому карточки ниже несут только решения
    scaleCmpNowLabel: "КАК ЕСТЬ СЕЙЧАС",
    scaleCmpAfterLabel: "С FT AGENCY",
    scaleCmpNow: [
      "Цены и доступность обновляются вручную и круглые сутки",
      "15–20% с каждой брони уходит платформе",
      "Каждый гость приходит через чужой канал"
    ],
    scaleCmpAfter: [
      "Один номерной фонд, синхронный с 300+ каналами",
      "Прямые брони без комиссии — навсегда",
      "Собственный поисковый трафик и возвраты гостей"
    ],

    scaleItems: [
      {
        endValue: "Мгновенная синхронизация",
        desc: "Интеграция Cloud PMS и Channel Manager. Каждое бронирование мгновенно резервирует номера во всех каналах — Booking.com, Agoda и 300+ других OTA"
      },
      {
        endValue: "100% прямой выручки",
        desc: "Система прямых броней без комиссии с защищённым платёжным шлюзом. Принимайте оплату на своих условиях и оставляйте всю выручку себе"
      },
      {
        endValue: "Предсказуемый рост",
        desc: "Локальное SEO для привлечения целевого поискового трафика в связке с автоматическим удержанием гостей — превращаем прошлые заезды в постоянный доход"
      }
    ],

    // --- WHO'S BEHIND THIS ---
    // Повествование блока идёт от «мы», поэтому заголовок — агентство,
    // а человек становится подписью под ним
    aboutLabel: "КТО ЗА ЭТИМ СТОИТ",
    aboutAgency: "FT Agency",
    aboutRole: "Фёдор Цветков · основатель и управляющий директор",
    aboutLocation: "Сейчас базируемся на Пхукете",
    aboutP1: "Мы строим системы привлечения и автоматизации для бизнесов, которые продают напрямую своим клиентам, и ведём их от начала до конца, а не разовыми проектами.",
    aboutP2: "В отелях и виллах это работает нагляднее всего: объекты отдают 15–20% выручки платформам, которые им не принадлежат. Мы собираем систему прямых бронирований, передаём её вам в полную собственность и остаёмся на поддержке. Без привязки и без процента с выручки.",
    aboutLinkAgency: "Подробнее об FT Agency",

    // Trust Stats
    stat2Num: "20+",
    stat2Name: "Проектов масштабировано",
    stat2Sub: "B2B и прямые модели",
    stat3Num: "10+",
    stat3Name: "Лет опыта",
    stat3Sub: "Рост и системы",

    // --- PRICING ---
    priceTitle: "Прозрачное внедрение. Постоянная независимость",
    priceSub: "Разовая оплата. Ноль комиссии с прямых броней навсегда",
    pricePopular: "Популярный",
    priceDisclaimerAudit: "Финальная цена подтверждается после аудита. Подписка на PMS/channel manager — оплата напрямую провайдеру.",
    priceMore2: "+ 4 из Lite",
    priceMore3: "+ 7 из Standard",

    tier1Title: "LITE",
    tier1Price: "From $1,200",
    tier1Payback: "Окупаемость: 3–4 месяца",
    tier1Desc: "Для небольших вилл и гестхаусов",

    tier2Title: "STANDARD",
    tier2Price: "From $2,500",
    tier2Payback: "Окупаемость: 2–3 месяца",
    tier2Desc: "Для бутик-отелей и резортов",

    tier3Title: "ENTERPRISE",
    tier3Price: "Custom",
    tier3Payback: "Окупаемость: менее 2 месяцев",
    tier3Desc: "Для сетей отелей и операторов",

    // --- FAQ SECTION ---
    faqTitle: "Частые вопросы",
    faqSub: "Всё, что нужно знать о цене, внедрении и владении системой",
    faqItems: [
      {
        q: "Есть ли скрытые платежи или комиссии?",
        a: "С нашей стороны — ноль комиссии: вы платите разовую стоимость внедрения и оставляете 100% выручки с прямых броней себе. Единственный отдельный расход — подписка на стороннее ПО, которая оплачивается напрямую провайдеру без каких-либо наценок с нашей стороны"
      },
      {
        q: "Сможет ли моя команда легко управлять системой?",
        a: "Да — современные Cloud PMS так же интуитивны, как приложение на смартфоне, и не требуют технической подготовки. Если команде нужны индивидуальные инструкции, чек-листы или практическое обучение персонала — это доступно как отдельная опция, детали обсудим на аудите"
      },
      {
        q: "Сколько занимает внедрение и повлияет ли это на текущие брони?",
        a: "Для большинства объектов внедрение занимает 7–14 дней — для крупных или мультиобъектных портфелей сроки оцениваются индивидуально. Вся техническая настройка, тестирование платежей и синхронизация каналов проходят в фоне, поэтому текущие брони и ежедневная работа не прерываются"
      },
      {
        q: "Какая поддержка есть после запуска системы?",
        a: "Мы не исчезаем после внедрения. Каждый проект включает 14 дней сопровождения после запуска — донастраиваем процессы и следим, чтобы всё работало без сбоев. После этого можно управлять системой самостоятельно или перейти на ежемесячный пакет сопровождения"
      },
      {
        q: "Как гости оплачивают и как быстро я получаю деньги?",
        a: "Мы подключаем защищённые платёжные шлюзы напрямую к системе прямых броней. Оплата от гостей поступает на ваш корпоративный счёт без задержек посредников"
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
    calcMonthLabel: "ต่อเดือน",
    calcMonthValue: "$2,790",
    calcYearLabel: "ต่อปี",
    calcYearValue: "$33,400",
    calcFootnote: "12 ห้อง · เข้าพัก 65% · ผ่าน OTA 70% · คอมมิชชั่น 17%",

    // --- LOGO MARQUEE ---
    marqueeLabel: "ช่องทางที่เราเชื่อมต่อให้",

    // --- SCALE PRACTICE (PAIN & SOLUTION) ---
    scaleTitle: "ขยายยอดจองโรงแรมของคุณ",
    scaleSub: "จัดการระบบหลังบ้านอัตโนมัติ เพื่อให้ทีมงานของคุณโฟกัสกับการบริการลูกค้าได้อย่างเต็มที่",

    // Полоса сравнения над карточками: контраст «было → стало» рассказывается
    // здесь один раз, поэтому карточки ниже несут только решения
    scaleCmpNowLabel: "เมื่อยังไม่มีระบบจองตรง",
    scaleCmpAfterLabel: "เมื่อทำงานกับ FT Agency",
    scaleCmpNow: [
      "อัปเดตราคาและห้องว่างด้วยมือตลอดเวลา",
      "ทุกการจองเสียให้แพลตฟอร์ม 15–20%",
      "ลูกค้าทุกคนมาจากช่องทางที่ไม่ใช่ของคุณ"
    ],
    scaleCmpAfter: [
      "ห้องพักชุดเดียว ซิงค์กับกว่า 300 ช่องทาง",
      "จองตรงโดยไม่เสียค่าคอมมิชชั่น ตลอดไป",
      "ทราฟฟิกค้นหาของคุณเองและลูกค้าที่กลับมาซ้ำ"
    ],

    scaleItems: [
      {
        endValue: "ซิงค์ระบบทันที",
        desc: "ระบบ Cloud PMS & Channel Manager อัปเดตการจองแบบเรียลไทม์ ล็อกห้องพักทันทีบน Booking.com, Agoda และ OTA กว่า 300+ แห่ง"
      },
      {
        endValue: "รายได้ตรง 100%",
        desc: "ระบบจองตรง 0% ค่าคอมมิชชั่น พร้อมช่องทางชำระเงินที่ปลอดภัย รับและเก็บรายได้ทั้งหมดไว้กับคุณโดยไม่ต้องแบ่งใคร"
      },
      {
        endValue: "เติบโตอย่างมั่นคง",
        desc: "การทำ Local SEO เพื่อดึงดูดลูกค้าที่มีความต้องการจองสูง พร้อมระบบดึงดูดลูกค้าเก่าให้กลับมาจองซ้ำเพื่อเพิ่มรายได้ระยะยาว"
      }
    ],

    // --- WHO'S BEHIND THIS ---
    // Повествование блока идёт от «мы», поэтому заголовок — агентство,
    // а человек становится подписью под ним
    aboutLabel: "ใครอยู่เบื้องหลัง",
    aboutAgency: "FT Agency",
    aboutRole: "Fedor Tsvetkov · ผู้ก่อตั้งและกรรมการผู้จัดการ",
    aboutLocation: "ปัจจุบันอยู่ที่ภูเก็ต",
    aboutP1: "เราสร้างระบบหาลูกค้าและระบบอัตโนมัติให้ธุรกิจที่ขายตรงถึงลูกค้า และดูแลตั้งแต่ต้นจนจบ ไม่ใช่งานครั้งเดียวจบ",
    aboutP2: "ธุรกิจที่พักคือกลุ่มที่เห็นผลชัดที่สุด — ที่พักที่ต้องยกรายได้ 15–20% ให้แพลตฟอร์มที่ตัวเองควบคุมไม่ได้ เราสร้างระบบจองตรง ส่งมอบความเป็นเจ้าของให้คุณทั้งหมด และดูแลต่อหลังส่งมอบ ไม่มีสัญญาผูกมัด ไม่มีส่วนแบ่งรายได้",
    aboutLinkAgency: "ดูข้อมูล FT Agency เพิ่มเติม",

    // Trust Stats
    stat2Num: "20+",
    stat2Name: "แบรนด์ที่ขยาย",
    stat2Sub: "โมเดล B2B & Direct",
    stat3Num: "10+",
    stat3Name: "ประสบการณ์ (ปี)",
    stat3Sub: "การเติบโตและระบบ",

    // --- PRICING ---
    priceTitle: "วางระบบโปร่งใส เป็นอิสระจากแพลตฟอร์มถาวร",
    priceSub: "จ่ายค่าติดตั้งครั้งเดียว ไม่มีค่าคอมมิชชั่นจากการจองตรงตลอดไป",
    pricePopular: "ยอดนิยม",
    priceDisclaimerAudit: "ราคาสุดท้ายยืนยันหลังการตรวจสอบฟรี",
    priceMore2: "+ อีก 4 รายการจาก Lite",
    priceMore3: "+ อีก 7 รายการจาก Standard",
    priceDisclaimerSub: "+ ค่าสมัครใช้งาน PMS/channel manager ชำระตรงกับผู้ให้บริการ",

    tier1Title: "LITE",
    tier1Price: "From $1,200",
    tier1Payback: "คืนทุนโดยทั่วไป: 3–4 เดือน",
    tier1Desc: "สำหรับวิลล่าและเกสต์เฮาส์ขนาดเล็ก",

    tier2Title: "STANDARD",
    tier2Price: "From $2,500",
    tier2Payback: "คืนทุนโดยทั่วไป: 2–3 เดือน",
    tier2Desc: "สำหรับบูติกโฮเทลและรีสอร์ท",

    tier3Title: "ENTERPRISE",
    tier3Price: "Custom",
    tier3Payback: "คืนทุนโดยทั่วไป: ไม่ถึง 2 เดือน",
    tier3Desc: "สำหรับเครือโรงแรมและบริษัทจัดการ",

    // --- FAQ SECTION ---
    faqTitle: "คำถามที่พบบ่อย",
    faqSub: "ทุกเรื่องที่คุณต้องรู้เกี่ยวกับราคา การติดตั้ง และการครอบครองระบบ",
    faqItems: [
      {
        q: "มีค่าธรรมเนียมแอบแฝงหรือค่าคอมมิชชั่นหรือไม่?",
        a: "ไม่มีค่าคอมมิชชั่นจากเรา — คุณจ่ายเพียงค่าตั้งค่าระบบครั้งเดียวและรับรายได้จากการจองตรง 100% โดยมีเพียงค่าสมัครใช้งานซอฟต์แวร์ภายนอกที่ชำระตรงกับผู้ให้บริการโดยไม่มีการบวกเพิ่ม"
      },
      {
        q: "ทีมงานของเราจะสามารถดูแลระบบได้ง่ายหรือไม่?",
        a: "แน่นอนครับ ระบบ Cloud PMS สมัยใหม่ถูกออกแบบให้ใช้งานง่ายเหมือนแอปบนมือถือ ไม่จำเป็นต้องมีความรู้ทางเทคนิค หากทีมของคุณต้องการคู่มือการทำงาน (SOP) เช็กลิสต์ หรือการฝึกอบรมทีมงานแบบเจาะลึก เราจัดให้ได้เป็นออปชันเสริมเฉพาะทาง — พูดคุยรายละเอียดกันได้ในคอลตรวจสอบฟรี"
      },
      {
        q: "การติดตั้งใช้เวลานานเท่าใด และจะกระทบต่อการจองประจำวันหรือไม่?",
        a: "สำหรับที่พักส่วนใหญ่ การติดตั้งระบบใช้เวลา 7 ถึง 14 วัน ส่วนพอร์ตโฟลิโอขนาดใหญ่หรือหลายสาขาจะประเมินระยะเวลาเฉพาะราย การเชื่อมต่อระบบ การทดสอบชำระเงิน และการซิงค์ปฏิทินทั้งหมดจะทำอยู่หลังบ้าน ทำให้การจองที่มีอยู่และการทำงานประจำวันของคุณดำเนินไปได้อย่างต่อเนื่องโดยไม่มีชะงัก"
      },
      {
        q: "มีการดูแลอย่างไรหลังจากเปิดใช้งานระบบแล้ว?",
        a: "เราไม่ทิ้งคุณหลังตั้งค่าเสร็จ ทุกโครงการรวมการดูแลและติดตามผลหลังเปิดใช้งาน 14 วันเพื่อปรับแต่งระบบให้สมบูรณ์แบบ หลังจากนั้นคุณสามารถดูแลระบบเอง หรือเลือกใช้บริการดูแลและติดตามผลรายเดือนจากเราได้"
      },
      {
        q: "ผู้เข้าพักชำระเงินอย่างไร และเราจะได้รับเงินเร็วแค่ไหน?",
        a: "เราเชื่อมต่อระบบชำระเงินที่ปลอดภัยเข้ากับระบบจองตรงของคุณโดยตรง เงินจากผู้เข้าพักจะโอนเข้าบัญชีธนาคารของคุณโดยตรงโดยไม่มีการล่าช้าจากคนกลาง"
      }
    ],

    // --- FOOTER CTA ---
    footerTitle: "พร้อมที่จะเพิ่มรายได้หรือยัง?",
    footerSub1: "เลิกเสียรายได้ 15–20% ไปกับค่าคอมมิชชั่น",
    footerSub2: "ควบคุมยอดจองตรงของคุณได้อย่างสมบูรณ์",
    footerBtn: "ตรวจสอบรายได้ฟรี 20 นาที"
  }
};
