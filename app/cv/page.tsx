import cvData from './cv-data.json';

export default function CVPage() {
  // СЕЛЕКТОР ВАКАНСИЙ: Выбирай, какие ID из пула отобразить на странице (сохраняя лимит А4)
  const activeJobIds = ['bndretail', 'setka', 'metal_fach'];

  // Фильтруем и форсируем правильные даты
  const displayedExperience = cvData.experience_pool
    .filter(job => activeJobIds.includes(job.id))
    .map(job => {
      if (job.id === 'bndretail') {
        return { ...job, period: 'sep23-may26' };
      }
      return job;
    });

  return (
    <div style={{ 
      backgroundColor: '#d1d5db', 
      minHeight: '100vh', 
      padding: '2rem 0', 
      color: '#1a1a1a', 
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      display: 'flex',          
      justifyContent: 'center', 
      alignItems: 'center'      
    }}>
      
      {/* Лист А4 */}
      <main className="print-page" style={{
        width: '210mm',
        height: '297mm',
        backgroundColor: '#f2efea', 
        padding: '16mm 14mm 12mm 14mm',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact'
      }}>
        
        {/* ХЕДЕР */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10mm' }}>
          
          <div style={{ width: '122mm' }}>
            {/* Оптический фикс: marginLeft: '-4px' идеально ровняет первую букву по сетке */}
            <h1 style={{ fontSize: '3.3rem', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', lineHeight: '0.9', color: '#000000', margin: 0, marginLeft: '-4px', whiteSpace: 'nowrap' }}>
              {cvData.meta.name}
            </h1>
            
            <h3 style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4a5568', margin: '0.6rem 0 0 0' }}>
              {cvData.meta.title}
            </h3>

            {/* Саммари из JSON */}
            <div style={{ fontSize: '12px', color: '#2d3748', lineHeight: '1.5', fontWeight: 500, textAlign: 'justify', marginTop: '1.1rem', paddingRight: '0.5rem' }}>
              {cvData.meta.summary.map((paragraph, idx) => (
                <p key={idx} style={{ margin: idx === cvData.meta.summary.length - 1 ? 0 : '0 0 0.6rem 0' }}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Фото 52x65мм */}
          <div style={{ width: '52mm', height: '65mm', overflow: 'hidden', borderRadius: '4mm', border: '1.5px solid #1a1a1a', flexShrink: 0 }}>
            <img 
              src="/avatar.jpeg" 
              alt={cvData.meta.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

        </header>

        {/* ОСНОВНОЙ КОНТЕНТ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12mm', alignItems: 'stretch', flexGrow: 1, marginBottom: '2mm' }}>
          
          {/* ЛЕВАЯ КОЛОНКА */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
              EXPERIENCE
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {displayedExperience.map((job) => (
                <div key={job.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                      {job.role}
                    </h3>
                    <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#4a5568', textTransform: 'lowercase', letterSpacing: '-0.01em' }}>
                      {job.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
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

          {/* ПРАВАЯ КОЛОНКА */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', height: '100%', paddingLeft: '1mm' }}>
            
            {/* Динамический блок скиллов */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                CORE SKILLS
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {cvData.skills_categories.map((cat, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h4 style={{ fontSize: '11px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                      {cat.category}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {cat.items.map((skill, sIdx) => (
                        <span key={sIdx} style={{ fontSize: '10.5px', color: '#2d3748', fontWeight: 500, lineHeight: '1.35' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ВЕРХНИЙ РАСПОР */}
            <div style={{ flexGrow: 1 }} />

            {/* Блок образования */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                EDUCATION
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {cvData.education_pool.map((edu, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <h4 style={{ fontSize: '11px', fontWeight: 900, color: '#000000', textTransform: 'uppercase', margin: 0, lineHeight: '1.25', letterSpacing: '-0.01em' }}>
                      {edu.degree}
                    </h4>
                    <div style={{ fontSize: '9.5px', fontWeight: 700, color: '#4a5568' }}>
                      {edu.school} <span style={{ color: '#718096', fontWeight: 500 }}>| {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* НИЖНИЙ РАСПОР */}
            <div style={{ flexGrow: 1 }} />

          </div>
        </div>

        {/* ФУТЕР */}
        <footer style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.2fr 1fr 1fr', 
          borderTop: '1.5px solid #1a1a1a', 
          paddingTop: '0.6rem', 
          color: '#000000', 
          fontSize: '9.5px', 
          fontWeight: 800, 
          letterSpacing: '0.04em', 
          textTransform: 'uppercase' 
        }}>
          <div>
            <a href={`mailto:${cvData.meta.contacts.email}`} style={{ color: '#000000', textDecoration: 'none', fontWeight: 900 }}>
              {cvData.meta.contacts.email}
            </a>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className="phone-link" style={{ color: '#1a1a1a', textDecoration: 'none', fontStyle: 'normal', fontWeight: 900 }}>
              {cvData.meta.contacts.phone}
            </span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href={`https://${cvData.meta.contacts.site}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none', fontWeight: 900 }}>
              {cvData.meta.contacts.site}
            </a>
          </div>
        </footer>

        <style dangerouslySetInnerHTML={{__html: `
          @media screen, print {
            body { background: none !important; padding: 0 !important; }
            main { box-shadow: none !important; margin: 0 !important; padding: 12mm 12mm !important; background-color: #f2efea !important; }
            .print-page { width: 210mm !important; height: 297mm !important; }
            .phone-link, a[href^="tel"] { color: #1a1a1a !important; text-decoration: none !important; pointer-events: none !important; }
          }
        `}} />

      </main>
    </div>
  );
}
