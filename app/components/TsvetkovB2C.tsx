'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// ============================================================================
// TSVETKOV.SITE - B2C Landing Page (React + Framer Motion)
// Growth Architecture & Business Transformation
// ============================================================================

const TsvetkovB2C = () => {
  const [expandedMethod, setExpandedMethod] = useState<number | null>(null);
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

  // =========================================================================
  // HERO SECTION
  // =========================================================================
  const HeroSection = () => {
    return (
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Ваш бизнес растёт. Но система отстаёт?</h1>
          <p className="hero-subtitle">
            Диагностика + интеграция = новая скорость
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Посчитаем вашу ситуацию
          </motion.button>
        </motion.div>
      </section>
    );
  };

  // =========================================================================
  // PROBLEMS SECTION
  // =========================================================================
  const ProblemsSection = () => {
    const problems = [
      {
        icon: '📊',
        title: 'Данные разпредстены везде',
        desc: 'Чаты, почта, звонки, соцсети. Лиды теряются, никто не знает где.'
      },
      {
        icon: '🔗',
        title: 'Нет единого источника истины',
        desc: 'Системы не говорят друг с другом. Люди вводят данные вручную.'
      },
      {
        icon: '👁️',
        title: 'Воронка не видна',
        desc: 'Не знаете где задерживаются лиды, какие каналы работают.'
      },
      {
        icon: '👥',
        title: 'Масштабирование требует людей',
        desc: 'Вместо автоматизации нужны новые менеджеры. Затраты растут.'
      },
      {
        icon: '🤖',
        title: 'ИИ-инструменты не встроены',
        desc: 'ChatGPT есть, но в воронку не интегрирован. Работает вхолостую.'
      },
      {
        icon: '💰',
        title: 'Теряете 10-30% дохода',
        desc: 'Результат: неоптимальные процессы, упущенные возможности.'
      }
    ];

    return (
      <section className="problems">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Почему вы здесь
        </motion.h2>
        <div className="problems-grid">
          {problems.map((problem, idx) => (
            <motion.div 
              key={idx}
              className="problem-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <p>{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // =========================================================================
  // METHOD SECTION (Interactive Accordion)
  // =========================================================================
  const MethodSection = () => {
    const methods = [
      {
        id: 1,
        title: '🔍 ДИАГНОСТИКА',
        subtitle: 'Неделя 1',
        content: 'Смотрю как вы сейчас продаете и где ломается воронка. Выясняю узкие места — ручная работа, потеря лидов, отсутствие автоматизации. Это дает нам полную карту текущего состояния.'
      },
      {
        id: 2,
        title: '🔗 ИНТЕГРАЦИЯ',
        subtitle: 'Недели 2–4',
        content: 'Связываю все системы через API и интеграции. CRM с сайтом, реклама с мессенджерами, телефония со статистикой. Одна база данных, единый источник истины для всех операций.'
      },
      {
        id: 3,
        title: '⚙️ АВТОМАТИЗАЦИЯ',
        subtitle: 'Недели 5–8',
        content: 'Запускаю воронки на автопилоте. Лиды текут сами, сделки движутся без ручного вмешательства. Система работает 24/7, даже когда вы спите.'
      },
      {
        id: 4,
        title: '📈 РЕЗУЛЬТАТ',
        subtitle: 'После этого',
        content: 'Компания растет сама. Вы получаете данные, я ухожу. Система — это ваше конкурентное преимущество. Масштабируйте без новых людей.'
      }
    ];

    return (
      <section className="method">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Как я решаю проблему
        </motion.h2>
        <div className="method-list">
          {methods.map((method) => (
            <motion.div 
              key={method.id}
              className="method-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button 
                className="method-header"
                onClick={() => setExpandedMethod(expandedMethod === method.id ? null : method.id)}
                whileHover={{ backgroundColor: '#f0f0f0' }}
              >
                <div>
                  <h3>{method.title}</h3>
                  <p className="subtitle">{method.subtitle}</p>
                </div>
                <span className="toggle-icon">
                  {expandedMethod === method.id ? '−' : '+'}
                </span>
              </motion.button>
              <motion.div
                className="method-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedMethod === method.id ? 'auto' : 0,
                  opacity: expandedMethod === method.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{method.content}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // =========================================================================
  // CASES SECTION (Cards with Expandable Content)
  // =========================================================================
  const CasesSection = () => {
    const cases = [
      {
        id: 1,
        title: 'E-Commerce с проблемой масштабирования',
        metric: '+386%',
        short: '$7k → $34k за сезон',
        problem: 'Компания торговала в чатах. Рост зависел от одного человека. Без системы не могла расширяться.',
        solution: 'Создал единую платформу (сайт + боты + интеграции), настроил парсинг лидов по географии, запустил рекламу и retention-систему.',
        result: '• Система работает без меня, компания может нанимать новых менеджеров\n• "Крепость" от блокировок (независимый сайт + резервные каналы)\n• Масштабируется само по себе'
      },
      {
        id: 2,
        title: 'B2B Производство (5 лет развития)',
        metric: '5 лет',
        short: 'Экспоненциальный рост',
        problem: 'Офлайн-бизнес с недоделанным сайтом. Сложно масштабировать на новые регионы. Нет CRM, нет систем.',
        solution: 'Доделал и наполнил сайт (сотни товаров), внедрил amoCRM с нуля (интеграции со всем), настроил региональное расширение.',
        result: '• Филиалы открылись в разных регионах\n• Частные предприниматели сами создают контент (UGC)\n• Стабильный положительный ROI, управлял $300k+/год'
      },
      {
        id: 3,
        title: 'Стартап в новой нише',
        metric: '0 → 15',
        short: 'За 4-5 месяцев',
        problem: 'Нулевые продажи. Нет маркетинговой инфраструктуры, систем привлечения.',
        solution: 'Организовал процессы (контент, съёмки, персонал), создал лендинги и контент-план, настроил лидогенерацию.',
        result: '• За 4–5 месяцев: 0 → ~15 продаж\n• Доказал, что система работает с нуля\n• Готовая инфраструктура для масштабирования'
      }
    ];

    return (
      <section className="cases">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Кейсы
        </motion.h2>
        <div className="cases-grid">
          {cases.map((c, idx) => (
            <motion.div 
              key={c.id}
              className="case-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="case-header">
                <h3>{c.title}</h3>
                <div className="case-metric">{c.metric}</div>
              </div>
              <p className="case-short">{c.short}</p>

              {expandedCase === c.id && (
                <motion.div 
                  className="case-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="detail-block">
                    <h4>Проблема:</h4>
                    <p>{c.problem}</p>
                  </div>
                  <div className="detail-block">
                    <h4>Что я сделал:</h4>
                    <p>{c.solution}</p>
                  </div>
                  <div className="detail-block">
                    <h4>Результат:</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{c.result}</p>
                  </div>
                </motion.div>
              )}

              <motion.button 
                className="expand-button"
                onClick={() => setExpandedCase(expandedCase === c.id ? null : c.id)}
                whileHover={{ backgroundColor: '#333' }}
              >
                {expandedCase === c.id ? 'Скрыть' : 'Подробнее'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // =========================================================================
  // PACKAGES SECTION
  // =========================================================================
  const PackagesSection = () => {
    const packages = [
      {
        id: 1,
        title: '💼 ПРОЕКТНАЯ РАБОТА',
        subtitle: 'Фиксированная цена',
        price: '$3k–$10k',
        timing: '2–8 недель',
        features: [
          'Диагностика вашего бизнеса',
          'План интеграции и автоматизации',
          'Реализация (частичная или полная)',
          'Тестирование и настройка',
          'Передача знаний вашей команде'
        ],
        best_for: 'Когда нужна конкретная система, а не долгосрочное сотрудничество'
      },
      {
        id: 2,
        title: '📊 СО ДОЛЕЙ ПРИБЫЛИ',
        subtitle: 'Когда выгодно обеим сторонам',
        price: 'Base + % от прироста',
        timing: '6 месяцев',
        features: [
          'Фиксированная базовая оплата',
          'Процент от дополнительной выручки',
          'Я заинтересован в вашем росте',
          'Долгосрочное партнерство',
          'Постоянная оптимизация'
        ],
        best_for: 'Когда вы уверены в потенциале и хотите минимизировать риск'
      },
      {
        id: 3,
        title: '🤝 КОНТРАКТНАЯ РАБОТА',
        subtitle: 'Я как член вашей команды',
        price: 'Договорная',
        timing: '3–6 месяцев',
        features: [
          'Я в вашей команде полный рабочий день',
          'Стратегия, внедрение, управление',
          'Гибкий график',
          'Результат-ориентированный подход',
          'Для B2B сайта — отдельная страница'
        ],
        best_for: 'Когда нужна глубокая трансформация и постоянное присутствие'
      }
    ];

    return (
      <section className="packages">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Варианты сотрудничества
        </motion.h2>
        <div className="packages-grid">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              className="package-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3>{pkg.title}</h3>
              <p className="package-subtitle">{pkg.subtitle}</p>
              
              <div className="package-pricing">
                <div className="price">{pkg.price}</div>
                <div className="timing">{pkg.timing}</div>
              </div>

              <motion.button 
                className="package-toggle"
                onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                whileHover={{ scale: 1.02 }}
              >
                {expandedPackage === pkg.id ? '−' : '+'} Детали
              </motion.button>

              {expandedPackage === pkg.id && (
                <motion.div 
                  className="package-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <ul>
                    {pkg.features.map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>
                  <p className="best-for">
                    <strong>Подходит для:</strong> {pkg.best_for}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

  // =========================================================================
  // ABOUT ME SECTION
  // =========================================================================
  const AboutSection = () => {
    const StatCounter = ({ number, label }: { number: string; label: string }) => {
      const [count, setCount] = useState(0);
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });

      useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = parseInt(number);
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }, [isInView, number]);

      return (
        <div ref={ref} className="stat">
          <div className="stat-number">{count}+</div>
          <div className="stat-label">{label}</div>
        </div>
      );
    };

    return (
      <section className="about">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Обо мне</h2>
          <p className="about-text">
            Я помогаю SMB и mid-market компаниям превращать хаотичные коммерческие процессы 
            в автоматизированные системы, которые растут сами.
          </p>

          <div className="stats-grid">
            <StatCounter number="10" label="лет в B2B и e-commerce" />
            <StatCounter number="300" label="k+ управляемых USD в год" />
            <StatCounter number="5" label="лет стабильного роста клиентов" />
            <StatCounter number="386" label="% максимального прироста" />
          </div>

          <div className="skills-grid">
            <div className="skill">CRM & Интеграции</div>
            <div className="skill">Автоматизация процессов</div>
            <div className="skill">Growth & Масштабирование</div>
            <div className="skill">Unit Economics</div>
            <div className="skill">Аналитика & BI</div>
            <div className="skill">Team Leadership</div>
          </div>

          <p className="about-closing">
            Я работаю на результаты. Если проект не приносит рост или оптимизацию — 
            я переделываю, пока не будет работать. Это моя философия.
          </p>
        </motion.div>
      </section>
    );
  };

  // =========================================================================
  // CTA SECTION
  // =========================================================================
  const CTASection = () => {
    return (
      <section className="cta-final">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Готовы к переменам?</h2>
          <p>Давайте диагностируем вашу ситуацию за бесплатную 30-минутку</p>
          
          <div className="cta-buttons">
            <motion.button 
              className="cta-button cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📅 Забронировать звонок
            </motion.button>
            <motion.button 
              className="cta-button cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✉️ Email
            </motion.button>
            <motion.button 
              className="cta-button cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Telegram
            </motion.button>
          </div>

          <p className="contact-info">
            <a href="mailto:fediatsvetkov@gmail.com">fediatsvetkov@gmail.com</a> • 
            <a href="https://t.me/fedorov_tsvetkov">@fedorov_tsvetkov</a> • 
            <a href="tel:+66955183783">+66 955 183 783</a>
          </p>
        </motion.div>
      </section>
    );
  };

  // =========================================================================
  // RENDER
  // =========================================================================
  return (
    <div className="tsvetkov-site">
      <HeroSection />
      <ProblemsSection />
      <MethodSection />
      <CasesSection />
      <PackagesSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default TsvetkovB2C;
