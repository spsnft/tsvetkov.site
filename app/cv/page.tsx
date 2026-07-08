import cvData from './cv-data.json';

export default function CVPage() {
  return (
    <div style={{ backgroundColor: '#f3f4f6', minHeight: '100vh', padding: '2rem 0', color: '#1a1a1a', fontFamily: 'system-ui, sans-serif' }}>
      
         {/* Контейнер листа А4 */}
      <main className="print-page" style={{
        width: '210mm',
        height: '297mm',
        backgroundColor: '#ffffff',
        margin: '0 auto',
        padding: '12mm',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        WebkitPrintColorAdjust: 'exact',
        printColorAdjust: 'exact'
      }}>
        
        {/* Основной двухколоночный грид */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '8mm', alignItems: 'start' }}>
          
          {/* ЛЕВАЯ КОЛОНКА (Широкая): Фото, Имя, Опыт */}
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Хедер: Фото + Имя + Саммари */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {/* Жесткие размеры контейнера для фото */}
              <div style={{ width: '32mm', height: '38mm', overflow: 'hidden', borderRadius: '4mm', border: '1px solid #e5e7eb' }}>
                <img 
                  src="/avatar.png" 
                  alt="Fedor Tsvetkov" 
                  style={{ width: '100%', height: '100%', objectCover: 'cover', filter: 'grayscale(100%) contrast(105%)' }}
                />
              </div>
              
              <div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 900, tracking: '-0.05em', textTransform: 'uppercase', lineHeight: 1, color: '#000000', margin: 0 }}>
                  {cvData.meta.name.split(' ')[0]}<br />
                  {cvData.meta.name.split(' ')[1]}
                </h1>
                <p style={{ fontSize: '9.5px', color: '#374151', lineHeight: '1.4', textAlign: 'justify', marginTop: '0.5rem', paddingRight: '0.5rem', marginBottom: 0 }}>
                  {cvData.meta.summary}
                </p>
              </div>
            </div>

            {/* Секция: EXPERIENCE */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.1em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '2px', margin: 0 }}>
                EXPERIENCE
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cvData.experience_pool.map((job) => (
                  <div key={job.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <h3 style={{ fontSize: '10px', fontWeight: 900, color: '#000000', margin: 0, tracking: '-0.02em' }}>
                        {job.role}
                      </h3>
                      <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#6b7280', textTransform: 'lowercase' }}>
                        {job.period}
                      </span>
                    </div>
                    <div style={{ fontSize: '8.5px', fontWeight: 800, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {job.company}, {job.location}
                    </div>
                    <ul style={{ margin: '0.25rem 0 0 0', paddingLeft: '1rem', listStyleType: 'disc' }}>
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} style={{ fontSize: '8.5px', color: '#1f2937', lineHeight: '1.3', marginBottom: '0.25rem' }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ПРАВАЯ КОЛОНКА (Узкая): Контакты, Скиллы, Образование */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingLeft: '2mm' }}>
            
            {/* Контакты */}
            <div style={{ fontSize: '9px', color: '#1f2937', display: 'flex', flexDirection: 'column', gap: '2px', paddingTop: '4px' }}>
              <div><strong style={{ color: '#000000' }}>Email:</strong> {cvData.meta.contacts.email}</div>
              <div><strong style={{ color: '#000000' }}>Phone:</strong> {cvData.meta.contacts.phone}</div>
              <div><strong style={{ color: '#000000' }}>Web:</strong> <span style={{ fontWeight: 700, color: '#000000' }}>{cvData.meta.contacts.site}</span></div>
            </div>

            {/* Секция: CORE SKILLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.1em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '2px', margin: 0 }}>
                CORE SKILLS
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {cvData.skills_categories.map((cat, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h4 style={{ fontSize: '9px', fontWeight: 900, color: '#000000', margin: 0 }}>
                      {cat.category}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.75rem', rowGap: '0.25rem' }}>
                      {cat.items.map((skill, sIdx) => (
                        <span key={sIdx} style={{ fontSize: '8.5px', color: '#374151', fontWeight: 500 }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Секция: EDUCATION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.1em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '2px', margin: 0 }}>
                EDUCATION
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {cvData.education_pool.map((edu, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                    <h4 style={{ fontSize: '9px', fontWeight: 900, color: '#000000', textTransform: 'uppercase', margin: 0, lineHeight: 1.1 }}>
                      {edu.degree}
                    </h4>
                    <div style={{ fontSize: '8.5px', fontWeight: 700, color: '#4b5563' }}>
                      {edu.school} <span style={{ color: '#9ca3af', fontWeight: 400 }}>| {edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Подвал листа */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', borderTop: '1px solid #e5e7eb', paddingTop: '0.5rem', color: '#9ca3af', fontSize: '7.5px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <div>{cvData.meta.name}</div>
          <div>CV | RESUME</div>
        </div>

        {/* Инжектим базовые печатные стили, чтобы скрыть серый фон при выводе в PDF */}
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body { background: none !important; padding: 0 !important; }
            main { box-shadow: none !important; margin: 0 !important; padding: 10mm !important; }
            .print-page { width: 210mm !important; height: 297mm !important; }
          }
        `}} />

      </main>
    </div>
  );
}
