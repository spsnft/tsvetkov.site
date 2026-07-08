import cvData from './cv-data.json';

export default function CVPage() {
  return (
    <div style={{ backgroundColor: '#e5e7eb', minHeight: '100vh', padding: '2rem 0', color: '#1a1a1a', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
      
      {/* Контейнер листа А4 с текстурным бумажным оттенком */}
      <main className="print-page" style={{
        width: '210mm',
        height: '297mm',
        backgroundColor: '#f5f4f0', // Премиальный бумажный оттенок (Ivory/Bone)
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
        
        {/* Основной двухколоночный грид */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '10mm', alignItems: 'start', flexGrow: 1 }}>
          
          {/* ЛЕВАЯ КОЛОНКА: Фото -> Имя -> Саммари -> Опыт -> Контакты */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Фото в оригинальном цвете с черной рамкой */}
              <div style={{ width: '42mm', height: '48mm', overflow: 'hidden', borderRadius: '5mm', border: '1.5px solid #1a1a1a' }}>
                <img 
                  src="/avatar.png" 
                  alt="Fedor Tsvetkov" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ч/б фильтр полностью удален
                />
              </div>
              
              {/* Крупное блочное имя как в оригинале */}
              <div style={{ marginTop: '-0.25rem' }}>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase', lineHeight: '0.95', color: '#000000', margin: 0 }}>
                  {cvData.meta.name.split(' ')[0]}<br />
                  {cvData.meta.name.split(' ')[1]}
                </h1>
                <p style={{ fontSize: '9.5px', color: '#2d3748', lineHeight: '1.4 font-medium', textAlign: 'justify', marginTop: '0.75rem', paddingRight: '0.5rem', marginBottom: 0 }}>
                  {cvData.meta.summary}
                </p>
              </div>

              {/* Секция: EXPERIENCE */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '3px', margin: 0 }}>
                  EXPERIENCE
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {cvData.experience_pool.map((job) => (
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

            {/* Контакты, опущенные в самый подвал левой колонки */}
            <div style={{ fontSize: '9.5px', color: '#000000', fontWeight: 700, display: 'flex', gap: '1.5rem', borderTop: '1px solid #cbd5e1', paddingTop: '0.75rem', marginTop: 'auto' }}>
              <div>{cvData.meta.contacts.email}</div>
              <div>{cvData.meta.contacts.phone}</div>
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА: Скиллы -> Образование */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.75rem', paddingLeft: '2mm' }}>
            
            {/* Секция: CORE SKILLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '3px', margin: 0 }}>
                CORE SKILLS
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cvData.skills_categories.map((cat, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h4 style={{ fontSize: '9.5px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>
                      {cat.category}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {cat.items.map((skill, sIdx) => (
                        <span key={sIdx} style={{ fontSize: '9px', color: '#2d3748', fontWeight: 500, lineHeight: '1.2' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
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

        {/* Конечный журнальный футер внизу листа */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', borderTop: '1px solid #1a1a1a', paddingTop: '0.4rem', marginTop: '1rem', color: '#1a1a1a', fontSize: '7.5px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          <div>{cvData.meta.name}</div>
          <div>CV | RESUME</div>
        </div>

        {/* Стили для безупречной печати без серых полей дев-сервера */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body { background: none !important; padding: 0 !important; }
            main { box-shadow: none !important; margin: 0 !important; padding: 10mm 10mm !important; background-color: #f5f4f0 !important; }
            .print-page { width: 210mm !important; height: 297mm !important; }
          }
        `}} />

      </main>
    </div>
  );
}
