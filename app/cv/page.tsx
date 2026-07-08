import cvData from './cv-data.json';

export default function CVPage() {
  const updatedExperience = cvData.experience_pool.map(job => {
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
        
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10mm' }}>
          <div style={{ width: '132mm' }}>
            <h1 style={{ fontSize: '3.3rem', fontWeight: 900, letterSpacing: '-0.05em', textTransform: 'uppercase', lineHeight: '0.9', color: '#000000', margin: 0, whiteSpace: 'nowrap' }}>
              {cvData.meta.name}
            </h1>
            <h3 style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#4a5568', margin: '0.6rem 0 0 0' }}>
              CHIEF MARKETING OFFICER / MARKETING DIRECTOR
            </h3>

            {/* Фикс Саммари: убрали "traditional" и удлинили 4-ю строку для избежания висячих слов */}
            <div style={{ fontSize: '12px', color: '#2d3748', lineHeight: '1.5', fontWeight: 500, textAlign: 'justify', marginTop: '1.1rem', paddingRight: '0.5rem' }}>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                Marketing Executive with 10+ years of expertise in driving corporate digital transformation, scaling revenue, and architecting enterprise MarTech ecosystems.
              </p>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                Proven track record managing $500K+ annual media budgets with a focus on P&L optimization, unit economics, and end-to-end analytics.
              </p>
              <p style={{ margin: '0 0 0.5rem 0' }}>
                Expert in turning business operations into highly automated online growth engines.
              </p>
              <p style={{ margin: 0 }}>
                Accomplished leader of cross-functional agile teams in fintech, e-commerce, and SaaS environments.
              </p>
            </div>
          </div>

          <div style={{ width: '42mm', height: '46mm', overflow: 'hidden', borderRadius: '4mm', border: '1.5px solid #1a1a1a', flexShrink: 0 }}>
            <img src="/avatar.png" alt="Fedor Tsvetkov" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '12mm', alignItems: 'start', flexGrow: 1, marginBottom: '2mm' }}>
          
          <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
              EXPERIENCE
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
              {updatedExperience.map((job) => (
                <div key={job.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '11px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>{job.role}</h3>
                    <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#4a5568', textTransform: 'lowercase', letterSpacing: '-0.01em' }}>{job.period}</span>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{job.company}, {job.location}</div>
                  <ul style={{ margin: '0.4rem 0 0 0', paddingLeft: '0.9rem', listStyleType: 'disc' }}>
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} style={{ fontSize: '10px', color: '#1a1a1a', lineHeight: '1.5', marginBottom: '0.4rem' }}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка: Education с фиксированным отступом */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', height: '100%', paddingLeft: '1mm' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                CORE SKILLS
              </h2>
              {/* Скиллы остаются наверху */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {["Marketing Strategy & Global Growth", "MarTech Infrastructure & Automation", "Executive Leadership & Operations"].map((cat, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <h4 style={{ fontSize: '11px', fontWeight: 900, color: '#000000', margin: 0, letterSpacing: '-0.01em' }}>{cat}</h4>
                    {/* (Здесь подставляются сами скиллы, логика та же) */}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Образование теперь имеет marginTop, который прижмет его к середине между скиллами и футером */}
            <div style={{ marginTop: 'auto', paddingTop: '2.5rem' }}>
              <h2 style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.12em', color: '#000000', borderBottom: '2px solid #000000', paddingBottom: '4px', margin: 0 }}>
                EDUCATION
              </h2>
              {/* ... (список образования) */}
            </div>
          </div>
        </div>

        <footer style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', borderTop: '1.5px solid #1a1a1a', paddingTop: '0.6rem', color: '#000000', fontSize: '9.5px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          <div><a href="mailto:fedor@tsvetkov.site" style={{ color: '#000000', textDecoration: 'none', fontWeight: 900 }}>fedor@tsvetkov.site</a></div>
          <div style={{ textAlign: 'center' }}><span className="phone-link" style={{ color: '#1a1a1a', textDecoration: 'none', fontWeight: 900 }}>+66-95-518-37-83</span></div>
          <div style={{ textAlign: 'right' }}><a href={`https://${cvData.meta.contacts.site}`} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', textDecoration: 'none', fontWeight: 900 }}>{cvData.meta.contacts.site}</a></div>
        </footer>

        <style dangerouslySetInnerHTML={{__html: `
          @media screen, print {
            body { background: none !important; padding: 0 !important; }
            main { box-shadow: none !important; margin: 0 !important; padding: 12mm 12mm !important; background-color: #f2efea !important; }
            .print-page { width: 210mm !important; height: 297mm !important; }
            .phone-link { color: #1a1a1a !important; text-decoration: none !important; pointer-events: none !important; }
          }
        `}} />
      </main>
    </div>
  );
}
