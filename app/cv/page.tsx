import cvData from './cv-data.json';

// Единая колонка, без фото, без grid — ATS читает сверху вниз без риска
// перемешать текст при извлечении из PDF.
// Выбор вакансий из пула — как и раньше, вручную через activeJobIds.
const activeJobIds = ['bndretail', 'setka', 'metal_fach'];

const sectionHeader = {
  fontSize: '13px',
  fontWeight: 900,
  letterSpacing: '0.12em',
  color: '#000000',
  borderBottom: '2px solid #000000',
  paddingBottom: '4px',
  margin: '0 0 3mm 0',
  textTransform: 'uppercase',
};

export default function CVPage() {
  const displayedExperience = cvData.experience_pool.filter((job) =>
    activeJobIds.includes(job.id)
  );

  return (
    <div
      style={{
        backgroundColor: '#d1d5db',
        minHeight: '100vh',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <main
        className="print-page"
        style={{
          width: '210mm',
          minHeight: '297mm',
          backgroundColor: '#f2efea',
          padding: '16mm 18mm',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
          boxSizing: 'border-box',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
          color: '#1a1a1a',
        }}
      >
        {/* Header */}
        <header style={{ marginBottom: '8mm' }}>
          <h1
            style={{
              fontSize: '2.6rem',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            {cvData.meta.name}
          </h1>
          <h3
            style={{
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: '#4a5568',
              margin: '0.5rem 0 0 0',
            }}
          >
            {cvData.meta.title}
          </h3>
          <div style={{ fontSize: '11px', color: '#2d3748', marginTop: '0.4rem' }}>
            {cvData.meta.location}
          </div>
          <div style={{ fontSize: '11px', color: '#4a5568', marginTop: '0.2rem', fontWeight: 700 }}>
            <a href={`mailto:${cvData.meta.contacts.email}`} style={{ color: '#1a1a1a', textDecoration: 'none' }}>
              {cvData.meta.contacts.email}
            </a>
            {'  |  '}
            <span>{cvData.meta.contacts.phone}</span>
            {'  |  '}
            <a
              href={`https://${cvData.meta.contacts.site}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a1a1a', textDecoration: 'none' }}
            >
              {cvData.meta.contacts.site}
            </a>
          </div>
        </header>

        {/* Key Achievements */}
        <section style={{ marginBottom: '6mm' }}>
          <h2 style={sectionHeader}>Key Achievements</h2>
          <ul style={{ margin: 0, paddingLeft: '4mm' }}>
            {cvData.meta.key_achievements.map((item, idx) => (
              <li key={idx} style={{ fontSize: '10.5px', lineHeight: 1.5, marginBottom: '1.2mm' }}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Summary */}
        <section style={{ marginBottom: '6mm' }}>
          <h2 style={sectionHeader}>Summary</h2>
          {cvData.meta.summary.map((paragraph, idx) => (
            <p key={idx} style={{ fontSize: '11px', lineHeight: 1.5, margin: 0, textAlign: 'justify' }}>
              {paragraph}
            </p>
          ))}
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '6mm' }}>
          <h2 style={sectionHeader}>Professional Experience</h2>
          {displayedExperience.map((job) => (
            <div key={job.id} style={{ marginTop: '4mm' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{ fontSize: '11.5px', fontWeight: 900, margin: 0 }}>{job.role}</h3>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#4a5568' }}>{job.period}</span>
              </div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#4a5568', textTransform: 'uppercase' }}>
                {job.company}, {job.location}
              </div>
              <ul style={{ margin: '2mm 0 0 0', paddingLeft: '4mm' }}>
                {job.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ fontSize: '10px', lineHeight: 1.5, marginBottom: '1.2mm' }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Core Skills */}
        <section style={{ marginBottom: '6mm' }}>
          <h2 style={sectionHeader}>Core Skills</h2>
          {cvData.skills_categories.map((cat, idx) => (
            <p key={idx} style={{ fontSize: '10.5px', lineHeight: 1.5, margin: idx === 0 ? 0 : '2mm 0 0 0' }}>
              <strong>{cat.category}:</strong> {cat.items.join(', ')}
            </p>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2 style={sectionHeader}>Education</h2>
          {cvData.education_pool.map((edu, idx) => (
            <div key={idx} style={{ marginTop: idx === 0 ? 0 : '3mm' }}>
              <h4 style={{ fontSize: '11px', fontWeight: 900, margin: 0, textTransform: 'uppercase' }}>
                {edu.degree}
              </h4>
              <div style={{ fontSize: '10px', color: '#4a5568' }}>
                {edu.school} <span style={{ color: '#718096' }}>| {edu.period}</span>
              </div>
            </div>
          ))}
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              @page { size: A4; margin: 0; }
              @media print {
                body { background: none !important; padding: 0 !important; }
                .print-page { box-shadow: none !important; width: 210mm !important; min-height: 297mm !important; }
              }
            `,
          }}
        />
      </main>
    </div>
  );
}
