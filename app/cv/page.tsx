import cvData from './cv-data.json';

// Single linear column, no sidebar, no CSS grid columns, no tables:
// ATS parsers read the DOM top-to-bottom and can scramble text pulled
// out of a multi-column layout, so the visual order below is the DOM order.

function jobMeta(job: { period: string; company: string; location: string; industry: string }) {
  let text = `${job.period} · ${job.company}`;
  if (job.location) text += `, ${job.location}`;
  if (job.industry) text += ` · ${job.industry}`;
  return text;
}

export default function CVPage() {
  const { meta, experience, skills_categories, languages, education } = cvData;

  return (
    <div className="cv-wrapper">
      <main className="cv-page">
        <header className="cv-header">
          <h1 className="cv-name">{meta.name}</h1>
          <p className="cv-role">{meta.title}</p>
          <p className="cv-loc">{meta.location}</p>
          <p className="cv-contacts">
            <a href={`mailto:${meta.contacts.email}`}>{meta.contacts.email}</a>
            {' | '}
            <span>{meta.contacts.phone}</span>
            {' | '}
            <a href={`https://${meta.contacts.site}`} target="_blank" rel="noopener noreferrer">
              {meta.contacts.site}
            </a>
            {' | '}
            <a
              href={`https://${meta.contacts.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {meta.contacts.linkedin}
            </a>
          </p>
        </header>

        <section className="cv-section">
          <h2 className="cv-section-title">Key Achievements</h2>
          <ul className="cv-list cv-achievements">
            {meta.key_achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Summary</h2>
          {meta.summary.map((paragraph, idx) => (
            <p key={idx} className="cv-summary">
              {paragraph}
            </p>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Professional Experience</h2>
          {experience.map((job) => (
            <div key={job.id} className="cv-job">
              <h3 className="cv-job-title">{job.role}</h3>
              <p className="cv-job-meta">{jobMeta(job)}</p>
              <ul className="cv-list cv-job-list">
                {job.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Core Skills</h2>
          {skills_categories.map((cat, idx) => (
            <p key={idx} className="cv-skills-line">
              <strong>{cat.category}:</strong> {cat.items.join(', ')}
            </p>
          ))}
        </section>

        <section className="cv-section">
          <h2 className="cv-section-title">Languages</h2>
          <p className="cv-lang">{languages}</p>
        </section>

        <section className="cv-section cv-section-last">
          <h2 className="cv-section-title">Education</h2>
          {education.map((edu, idx) => (
            <p key={idx} className="cv-edu-line">
              {edu.degree} — {edu.school}, {edu.period}
            </p>
          ))}
        </section>

        <style
          dangerouslySetInnerHTML={{
            __html: `
              .cv-wrapper {
                background: #d1d5db;
                min-height: 100vh;
                padding: 2rem 0;
                display: flex;
                justify-content: center;
              }
              .cv-page {
                width: 210mm;
                min-height: 297mm;
                background: #f2efea;
                padding: 16mm 18mm;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
                box-sizing: border-box;
                font-family: Arial, Helvetica, "Helvetica Neue", sans-serif;
                color: #1a1a1a;
              }
              .cv-header { margin-bottom: 6mm; }
              .cv-name {
                font-size: 2.4rem;
                font-weight: 900;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                line-height: 1;
                margin: 0;
              }
              .cv-role {
                font-size: 13px;
                font-weight: 800;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                color: #4a5568;
                margin: 0.5rem 0 0 0;
              }
              .cv-loc { font-size: 11px; color: #2d3748; margin: 0.4rem 0 0 0; }
              .cv-contacts { font-size: 11px; color: #4a5568; font-weight: 700; margin: 0.3rem 0 0 0; }
              .cv-contacts a { color: #1a1a1a; text-decoration: none; }

              .cv-section { margin-bottom: 5mm; }
              .cv-section-last { margin-bottom: 0; }
              .cv-section-title {
                font-size: 13px;
                font-weight: 900;
                letter-spacing: 0.1em;
                color: #000000;
                border-bottom: 2px solid #000000;
                padding-bottom: 3px;
                margin: 0 0 2.5mm 0;
                text-transform: uppercase;
              }

              .cv-list { list-style: disc; margin: 0; padding-left: 4mm; }
              .cv-list li { font-size: 10.5px; line-height: 1.35; margin-bottom: 1mm; }
              .cv-list li:last-child { margin-bottom: 0; }

              .cv-summary { font-size: 11px; line-height: 1.35; margin: 0; text-align: justify; }

              .cv-job { margin-top: 3.5mm; }
              .cv-job:first-of-type { margin-top: 0; }
              .cv-job-title { font-size: 11.5px; font-weight: 900; margin: 0; }
              .cv-job-meta { font-size: 10.5px; font-weight: 700; color: #4a5568; margin: 0.5mm 0 0 0; }
              .cv-job-list { margin-top: 1.5mm; }

              .cv-skills-line { font-size: 10.5px; line-height: 1.35; margin: 1.5mm 0 0 0; }
              .cv-skills-line:first-child { margin-top: 0; }

              .cv-lang { font-size: 10.5px; line-height: 1.35; margin: 0; }

              .cv-edu-line { font-size: 10.5px; line-height: 1.35; margin: 1.5mm 0 0 0; }
              .cv-edu-line:first-child { margin-top: 0; }

              @media (max-width: 800px) {
                .cv-wrapper { padding: 0; }
                .cv-page {
                  width: 100%;
                  min-height: auto;
                  padding: 7mm 5vw;
                  box-shadow: none;
                }
                .cv-name { font-size: 1.7rem; }
              }

              @page { size: A4; margin: 0; }
              @media print {
                html, body { background: #ffffff !important; }
                .cv-wrapper {
                  background: #ffffff !important;
                  min-height: 0 !important;
                  padding: 0 !important;
                  display: block !important;
                }
                nav, footer, button, .no-print { display: none !important; }
                .cv-page {
                  width: 210mm !important;
                  min-height: 0 !important;
                  background: #ffffff !important;
                  color: #000000 !important;
                  box-shadow: none !important;
                  border-radius: 0 !important;
                  padding: 13mm !important;
                  hyphens: none !important;
                }
                .cv-list {
                  list-style: disc !important;
                  padding-left: 12px !important;
                }
                .cv-name, .cv-role, .cv-loc, .cv-contacts,
                .cv-section-title, .cv-job-title, .cv-job-meta,
                .cv-summary, .cv-list li, .cv-skills-line, .cv-lang, .cv-edu-line {
                  color: #000000 !important;
                }
                .cv-name { font-size: 19pt !important; }
                .cv-role { font-size: 10pt !important; }
                .cv-loc, .cv-contacts { font-size: 9.5pt !important; }
                .cv-section-title { font-size: 10.5pt !important; border-bottom-color: #000000 !important; }
                .cv-summary,
                .cv-list li,
                .cv-job-meta,
                .cv-skills-line,
                .cv-lang,
                .cv-edu-line { font-size: 9.5pt !important; line-height: 1.27 !important; }
                .cv-job-title { font-size: 10pt !important; }

                .cv-header { margin-bottom: 3mm !important; }
                .cv-role { margin-top: 1mm !important; }
                .cv-loc { margin-top: 0.8mm !important; }
                .cv-contacts { margin-top: 0.8mm !important; }
                .cv-section { margin-bottom: 2.5mm !important; }
                .cv-section-title { margin-bottom: 1.5mm !important; }
                .cv-job { margin-top: 1.6mm !important; }
                .cv-job-list { margin-top: 0.5mm !important; }
                .cv-list li { margin-bottom: 0.45mm !important; }
                .cv-skills-line, .cv-edu-line { margin-top: 0.5mm !important; }

                .cv-job, .cv-edu-line, .cv-list li {
                  page-break-inside: avoid;
                  break-inside: avoid;
                }

                a { color: #000000 !important; text-decoration: none !important; }
                a[href]::after { content: '' !important; }
              }
            `,
          }}
        />
      </main>
    </div>
  );
}
