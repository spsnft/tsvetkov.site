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
        padding: '16mm 14mm 12mm 14mm',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact'
      }}>
        
        {/* ВЕРХНЯЯ СЕКЦИЯ (ХЕДЕР): Имя слева (в одну строку), Фото справа */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8mm' }}>
          
          {/* Левая часть хедера: Имя в одну строку и Саммари */}
          <div style={{ width: '130mm' }}>
            <h1 style={{ fontSize: '2.1rem', fontWeight: 900, letterSpacing: '-0.03em', textTransform: 'uppercase', lineHeight: '1', color: '#000000', margin: 0, whiteSpace: 'nowrap' }}>
              {cvData.meta.name}
            </h1>
            <p style={{ fontSize: '10px', color: '#2d3748', lineHeight: '1.45', fontWeight: 500, textAlign: 'justify', marginTop: '0.85rem', paddingRight: '0.5rem', marginBottom: 0 }}>
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

        {/* ОСНОВНОЙ КОНТЕНТ: Двухколоночный грид с увеличенными вертикальными отступами */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '10mm', alignItems: 'start', flexGrow: 1, marginBottom: '6mm' }}>
          
          {/* ЛЕВАЯ КОЛОНКА: Опыт работы */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <h2 style={{ fontSize: '11.5px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
              EXPERIENCE
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {updatedExperience.map((job) => (
                <div key={job.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                      {job.role}
                    </h3>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#4a5568', textTransform: 'lowercase', letterSpacing: '-0.01em' }}>
                      {job.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '9px', fontTriangle: 'bold', fontWeight: 800, color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                    {job.company}, {job.location}
                  </div>
                  <ul style={{ margin: '0.3rem 0 0 0', paddingLeft: '0.9rem', listStyleType: 'disc' }}>
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: '9px', color: '#1a1a1a', lineHeight: '1.45', marginBottom: '0.3rem' }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА: Прокачанные Директорские Скиллы -> Образование */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '1mm' }}>
            
            {/* Секция: CORE SKILLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                CORE SKILLS
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {/* Категория 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4 style={{ fontSize: '9.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                    Marketing Strategy & Global Growth
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {[
                      "Global Go-To-Market (GTM) Strategy & Execution",
                      "P&L & Media Budget Management ($500K+)",
                      "High-Budget Performance Marketing Architecture",
                      "Global Market Expansion (40+ Countries)",
                      "Data-Driven User Acquisition Strategy",
                      "Cross-Functional Team Scaling & Agile Leadership"
                    ].map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '9.5px', color: '#2d3748', fontWeight: 500, lineHeight: '1.25' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Категория 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4 style={{ fontSize: '9.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                    MarTech Infrastructure & Automation
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    {[
                      "B2B Business Digitization & Systems Design",
                      "Enterprise CRM Architecture (amoCRM Automation)",
                      "AI-Driven Marketing & Corporate Workflows",
                      "End-to-End Data & Analytics Synchronization",
                      "Unit Economics & Customer LTV Optimization",
                      "Web3 Growth Protocols & Tokenomics Alignment"
                    ].map((skill, sIdx) => (
                      <span key={sIdx} style={{ fontSize: '9.5px', color: '#2d3748', fontWeight: 500, lineHeight: '1.25' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Секция: EDUCATION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                EDUCATION
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cvData.education_pool.map((edu, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h4 style={{ fontSize: '9.5px', fontWeight: 900, color: '#000000', textTransform: 'uppercase', margin: 0, lineHeight: '1.2', letterSpacing: '-0.01em' }}>
                      {edu.degree}
                    </h4>
                    <div style={{ fontSize: '9px', fontWeight: 700, color: '#4a5568' }}>
                      {edu.school} <span style={{ color: '#718096', fontWeight: 500 }}>| {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4-КОЛОНОЧНЫЙ СТАТУСНЫЙ ФУТЕР */}
        <footer style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1.5fr 1.1fr 1fr', 
          borderTop: '1.5px solid #1a1a1a', 
          paddingTop: '0.6rem', 
          color: '#000000', 
          fontSize: '9px', 
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
            main { box-shadow: none !important; margin: 0 !important; padding: 12mm 12mm !important; background-color: #f2efea !important; }
            .print-page { width: 210mm !important; height: 297mm !important; }
          }
        `}} />

      </main>
    </div>
  );
}
