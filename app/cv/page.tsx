import cvData from './cv-data.json';

export default function CVPage() {
  // Форсируем правильные даты для BNDRetail напрямую в шаблоне для надежности
  const updatedExperience = cvData.experience_pool.map(job => {
    if (job.id === 'bndretail') {
      return { ...job, period: 'sep23-may26' };
    }
    return job;
  });

  return (
    <div style={{ backgroundColor: '#d1d5db', minHeight: '100vh', padding: '2rem 0', color: '#1a1a1a', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      
      {/* Контейнер листа А4 */}
      <main className="print-page" style={{
        width: '210mm',
        height: '297mm',
        backgroundColor: '#f2efea', // Плотный бежевый оттенок дорогой верже-бумаги
        margin: '0 auto',
        padding: '16mm 14mm 12mm 14mm',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact'
      }}>
        
        {/* ВЕРХНЯЯ СЕКЦИЯ (ХЕДЕР): Монументальное имя во всю ширину + Фото */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10mm' }}>
          
          {/* Левая часть хедера: Крупное имя + Саммари */}
          <div style={{ width: '132mm' }}>
            <h1 style={{ fontSize: '3.3rem', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', lineHeight: '0.95', color: '#000000', margin: 0, whiteSpace: 'nowrap' }}>
              {cvData.meta.name}
            </h1>
            <p style={{ fontSize: '10.5px', color: '#2d3748', lineHeight: '1.5', fontWeight: 500, textAlign: 'justify', marginTop: '1rem', paddingRight: '0.5rem', marginBottom: 0 }}>
              {cvData.meta.summary}
            </p>
          </div>

          {/* Правая часть хедера: Фото */}
          <div style={{ width: '42mm', height: '46mm', overflow: 'hidden', borderRadius: '4mm', border: '1.5px solid #1a1a1a', flexShrink: 0 }}>
            <img 
              src="/avatar.png" 
              alt="Fedor Tsvetkov" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        </header>

        {/* ОСНОВНОЙ КОНТЕНТ: Двухколоночный грид с распределенной высотой */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12mm', alignItems: 'start', flexGrow: 1, marginBottom: '8mm' }}>
          
          {/* ЛЕВАЯ КОЛОНКА: Опыт работы */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
              EXPERIENCE
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
              {updatedExperience.map((job) => (
                <div key={job.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '11.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                      {job.role}
                    </h3>
                    <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#4a5568', textTransform: 'lowercase', letterSpacing: '-0.01em' }}>
                      {job.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    {job.company}, {job.location}
                  </div>
                  <ul style={{ margin: '0.4rem 0 0 0', paddingLeft: '0.9rem', listStyleType: 'disc' }}>
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: '10px', color: '#1a1a1a', lineHeight: '1.5', marginBottom: '0.4rem' }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА: Сбалансированные по высоте Скиллы и Образование */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '2.5rem', paddingLeft: '1mm' }}>
            
            {/* Секция: CORE SKILLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                CORE SKILLS
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Категория 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h4 style={{ fontSize: '10.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                    Marketing Strategy & Global Growth
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {[
                      "Global Go-To-Market (GTM) Strategy & Execution",
                      "P&L & Media Budget Management ($500K+)",
                      "High-Budget Performance Marketing Architecture",
                      "Global Market Expansion (40+ Countries)",
                      "Data-Driven User Acquisition Strategy",
                      "Cross-Functional Team Scaling & Agile Leadership"
                    ].map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '10px', color: '#2d3748', fontWeight: 500, lineHeight: '1.3' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Категория 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h4 style={{ fontSize: '10.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                    MarTech Infrastructure & Automation
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {[
                      "B2B Business Digitization & Systems Design",
                      "Enterprise CRM Architecture (amoCRM Automation)",
                      "AI-Driven Marketing & Corporate Workflows",
                      "End-to-End Data & Analytics Synchronization",
                      "Unit Economics & Customer LTV Optimization",
                      "Web3 Growth Protocols & Tokenomics Alignment"
                    ].map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '10px', color: '#2d3748', fontWeight: 500, lineHeight: '1.3' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Секция: EDUCATION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                EDUCATION
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {cvData.education_pool.map((edu, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <h4 style={{ fontSize: '10px', fontWeight: 900, color: '#000000', textTransform: 'uppercase', margin: 0, lineHeight: '1.25', letterSpacing: '-0.01em' }}>
                      {edu.degree}
                    </h4>
                    <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#4a5568' }}>
                      {edu.school} <span style={{ color: '#718096', fontWeight: 500 }}>| {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 3-КОЛОНОЧНЫЙ ЧИСТЫЙ ФУТЕР БЕЗ ИМЕНИ */}
        <footer style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          borderTop: '1.5px solid #1a1a1a', 
          paddingTop: '0.6rem', 
          color: '#000000', 
          fontSize: '9.5px', 
          fontWeight: 800, 
          letterSpacing: '0.04em', 
          textTransform: 'uppercase' 
        }}>
          <div>
            <a href="mailto:fedor@tsvetkov.site" style={{ color: '#000000', textDecoration: 'none' }}>fedor@tsvetkov.site</a>
          </div>
          <div style={{ textAlign: 'center' }}>
            {/* Явно глушим синий цвет ссылки для мобильных устройств */}
            <a href="tel:+66955183783" className="phone-link" style={{ color: '#000000', textDecoration: 'none', pointerEvents: 'none' }}>
              +66-95-518-37-83
            </a>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href={`https://${cvData.meta.contacts.site}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none', borderBottom: '1px solid #1a1a1a', fontWeight: 900 }}>
              {cvData.meta.contacts.site}
            </a>
          </div>
        </footer>

        {/* Стили для печати + жесткий фикс системного цвета ссылок */}
        <style dangerouslySetInnerHTML={{__html: `
          @media screen, print {
            body { background: none !important; padding: 0 !important; }
            main { box-shadow: none !important; margin: 0 !important; padding: 12mm 12mm !important; background-color: #f2efea !important; }
            .print-page { width: 210mm !important; height: 297mm !important; }
            /* Железобетонный запрет браузерам подсвечивать телефон синим */
            a.phone-link, a[href^="tel"] { color: #000000 !important; text-decoration: none !important; }
          }
        `}} />

      </main>
    </div>
  );
}
