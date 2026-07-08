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
        backgroundColor: '#f2efea', // Плотный бежевый оттенок дорогой бумажной текстуры
        margin: '0 auto',
        padding: '14mm 12mm',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact'
      }}>
        
        {/* ВЕРХНЯЯ СЕКЦИЯ (ХЕДЕР): Имя слева, Фото справа */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '6mm' }}>
          
          {/* Левая часть хедера: Имя и Саммари */}
          <div style={{ width: '135mm' }}>
            <h1 style={{ fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: '0.95', color: '#000000', margin: 0 }}>
              {cvData.meta.name.split(' ')[0]}<br />
              {cvData.meta.name.split(' ')[1]}
            </h1>
            <p style={{ fontSize: '9.5px', color: '#2d3748', lineHeight: '1.4', fontWeight: 500, textAlign: 'justify', marginTop: '0.75rem', paddingRight: '1rem', marginBottom: 0 }}>
              {cvData.meta.summary}
            </p>
          </div>

          {/* Правая часть хедера: Фото */}
          <div style={{ width: '42mm', height: '48mm', overflow: 'hidden', borderRadius: '5mm', border: '1.5px solid #1a1a1a', flexShrink: 0 }}>
            <img 
              src="/avatar.png" 
              alt="Fedor Tsvetkov" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        </header>

        {/* ОСНОВНОЙ КОНТЕНТ: Двухколоночный грид */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '10mm', alignItems: 'start', flexGrow: 1 }}>
          
          {/* ЛЕВАЯ КОЛОНКА: Только Опыт работы */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '3px', margin: 0 }}>
                EXPERIENCE
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {updatedExperience.map((job) => (
                  <div key={job.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h3 style={{ fontSize: '10.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                        {job.role}
                      </h3>
                      <span style={{ fontSize: '9px', fontWeight: 700, color: '#4a5568', textTransform: 'lowercase', letterSpacing: '-0.02em' }}>
                        {job.period}
                      </span>
                    </div>
                    <div style={{ fontSize: '8.5px', fontWeight: 800, color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                      {job.company}, {job.location}
                    </div>
                    <ul style={{ margin: '0.2rem 0 0 0', paddingLeft: '0.85rem', listStyleType: 'disc' }}>
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} style={{ fontSize: '8.5px', color: '#1a1a1a', lineHeight: '1.35', marginBottom: '0.2rem' }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА: Прокачанные Скиллы -> Образование */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.75rem', paddingLeft: '2mm' }}>
            
            {/* Секция: CORE SKILLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '3px', margin: 0 }}>
                CORE SKILLS
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Категория 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <h4 style={{ fontSize: '9.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                    Growth Strategy & Performance Marketing
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {["Google Ads (Search, Display, Video)", "Meta Ads Manager", "SEO Strategy & Enterprise Scale", "Programmatic Advertising", "Google Analytics / GA4 & Looker Studio", "SEMrush / Ahrefs", "Data-Driven User Acquisition"].map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '9px', color: '#2d3748', fontWeight: 500, lineHeight: '1.2' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Категория 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <h4 style={{ fontSize: '9.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                    Systems Architecture & Automation
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {["B2B Business Digitization & Systems Design", "CRM Architecture & Logic Design (amoCRM)", "AI-Driven Marketing & Workflow Automation", "Omnichannel Funnel Optimization", "End-to-End Analytics Synchronization", "Unit Economics & Budget Management", "Web3 Growth Protocols & Tokenomics alignment"].map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '9px', color: '#2d3748', fontWeight: 500, lineHeight: '1.2' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Секция: EDUCATION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '3px', margin: 0 }}>
                EDUCATION
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cvData.education_pool.map((edu, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h4 style={{ fontSize: '9px', fontWeight: 900, color: '#000000', textTransform: 'uppercase', margin: 0, lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                      {edu.degree}
                    </h4>
                    <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#4a5568' }}>
                      {edu.school} <span style={{ color: '#718096', fontWeight: 500 }}>| {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4-КОЛОНОЧНЫЙ ФУТЕР: Имя + Почта + Телефон + Сайт */}
        <footer style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1.5fr 1.1fr 1fr', 
          borderTop: '1px solid #1a1a1a', 
          paddingTop: '0.5rem', 
          marginTop: '1rem', 
          color: '#000000', 
          fontSize: '8.5px', 
          fontWeight: 800, 
          letterSpacing: '0.03em', 
          textTransform: 'uppercase' 
        }}>
          <div style={{ fontWeight: 900, color: '#000000' }}>{cvData.meta.name}</div>
          <div>{cvData.meta.contacts.email}</div>
          <div>{cvData.meta.contacts.phone}</div>
          <div style={{ textAlign: 'right' }}>
            <a href={`https://${cvData.meta.contacts.site}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none', borderBottom: '1px solid #1a1a1a', fontWeight: 900 }}>
              {cvData.meta.contacts.site}
            </a>
          </div>
        </footer>

        {/* Стили для печати */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body { background: none !important; padding: 0 !important; }
            main { box-shadow: none !important; margin: 0 !important; padding: 12mm 10mm !important; background-color: #f2efea !important; }
            .print-page { width: 210mm !important; height: 297mm !important; }
          }
        `}} />

      </main>
    </div>
  );
}
