// NOTE: ru/th mirror the English copy for now (structure over translation,
// same convention as src/locales) — translate before this goes fully live.
//
// Trust-stat placeholders and the FAQ block are drafts — flagged inline
// with TODO where a real number or a final decision is still needed.

const en = {
  // --- HERO ---
  badge: 'SALES & COMMERCE SYSTEMS',
  heroTitleLine1: 'From Manual Sales',
  heroTitleLine2: 'To a Real System',
  heroSub1: 'We build sales and marketing systems from the ground up — or take existing ones to the next level',
  heroSub2: 'Websites, bots, CRM, dealer networks, brand & go-to-market — whatever the growth stage requires',
  heroSub3: 'Real infrastructure, not one-off campaigns',
  btnAudit: 'Book a Free Audit',

  // --- PAIN -> SOLUTION (3 real transformations) ---
  scaleTitle: 'From Wherever You Are, To the Next Level',
  scaleSub: 'Three different starting points. Same approach: replace manual chaos with a real system',
  scaleItems: [
    {
      pain: 'MANUAL ORDERS VIA PERSONAL TELEGRAM',
      outcome: 'Full Digital Sales Ecosystem',
      desc: 'Built a complete system from scratch: website, ordering bot, branded Telegram channel with a designed visual menu, Instagram & video/SMM, a client database with a discount and bonus system, menu categorization, and inventory tracking tied to promo planning for fast sell-through.',
    },
    {
      pain: 'OFFLINE B2B, ONE SMALL DEALER NETWORK',
      outcome: '+340% Qualified Leads',
      desc: 'Took an offline B2B business online: a core equipment site, a separate parts site, a CRM to route and track every lead, and an expanded dealer network — replacing manual handoffs with automated pipeline infrastructure.',
    },
    {
      pain: 'PRE-LAUNCH APP, NO MARKETING FOUNDATION',
      outcome: 'Brand & Go-To-Market, Built From Zero',
      desc: 'Brought in at stage zero to lead marketing. Delivered a full go-to-market plan, brand identity and tone of voice, then launched the first paid traffic with a small contractor team — in a matter of weeks, not months.',
    },
  ],

  // --- TRUST / PROOF ---
  aboutTitle: 'Systems Over One-Off Campaigns',
  aboutDescFirst: 'We step into businesses at very different stages — and build what that stage actually needs.',
  aboutDescRest: 'From a single-person Telegram operation to a multi-site B2B dealer network to a pre-launch app — the common thread is replacing manual, ad-hoc work with a system that keeps running without you holding it together.',

  // TODO: confirm real numbers before publishing — stat1 is the one verified
  // fact reused site-wide, stat2/stat3 are qualitative on purpose (no invented figures)
  stat1Num: '10+',
  stat1Name: 'Years Experience',
  stat1Sub: 'Growth & systems',
  stat2Num: '0→1',
  stat2Name: 'Built From Scratch',
  stat2Sub: 'Sites, bots, CRM, brand',
  stat3Num: '1→N',
  stat3Name: 'Scaled Existing Systems',
  stat3Sub: 'Across delivery, B2B, apps',

  proofLabel: 'Proven Results',
  case1Title: 'Manual TG Orders → Full Digital Ecosystem',
  case1Badge: 'Delivery Business',
  case1Desc: 'Site, ordering bot, designed TG menu, Instagram/SMM, client CRM, discount system, inventory-driven promo planning.',
  case2Title: '+340% Qualified Leads | -42% CAC',
  case2Badge: 'B2B Distributor',
  case2Desc: 'Replaced manual dealer handoffs with automated pipeline routing, a CRM, and an expanded dealer network.',

  // --- FAQ (kept short and general on purpose) ---
  faqTitle: 'Common Questions',
  faqSub: 'The scope varies a lot by project — here is the general shape of it',
  faqItems: [
    {
      q: 'How fast can I see results?',
      a: 'Depends on the starting point. A from-scratch build (site, CRM, ordering flow) usually launches in 2–4 weeks. Scaling an existing system typically shows traction within the first 30 days.',
    },
    {
      q: 'What does working together look like — pricing and format?',
      a: 'It depends on scope: from-scratch builds are typically project-based, ongoing growth work is retainer-based. We figure out the right format on a quick call once we understand what you actually need.',
    },
  ],

  // --- FOOTER CTA ---
  footerTitle: 'Ready to Build Your System?',
  footerSub1: 'From first sale to scalable infrastructure',
  footerSub2: 'Book a free audit — no pressure, just clarity',
  footerBtn: 'Book a Free Audit',
};

export const contentData = {
  en,
  ru: en,
  th: en,
};

export type EcommerceContent = typeof en;
