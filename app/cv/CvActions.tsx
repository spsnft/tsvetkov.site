'use client';

export function CvActions() {
  return (
    <div className="cv-actions no-print">
      <a className="cv-btn" href="/cv.pdf" download>
        Download PDF
      </a>
      <button type="button" className="cv-btn" onClick={() => window.print()}>
        Print
      </button>
    </div>
  );
}
