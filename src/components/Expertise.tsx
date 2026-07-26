import React from 'react';

const CYAN_ACCENT = '#00A3FF';

export const Expertise = () => {
  return (
    <section id="expertise" className="expertise-section">
      <style jsx>{`
        .expertise-section {
          width: 100%;
          position: relative;
          padding: 2rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
        }

        .header-box {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .badge {
          display: inline-block;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0, 163, 255, 0.08);
          border: 1px solid rgba(0, 163, 255, 0.25);
          color: ${CYAN_ACCENT};
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
        }

        .bento-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          width: 100%;
        }

        .card-half {
          flex: 1 1 420px;
          min-width: 0;
          position: relative;
          overflow: hidden;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card-full {
          flex: 1 1 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 2.5rem 2rem;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card-half:hover,
        .card-full:hover {
          border-color: rgba(0, 163, 255, 0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 163, 255, 0.08);
        }

        .asset-slot {
          position: relative;
          height: 180px;
          width: 100%;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .asset-glow {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          filter: blur(20px);
        }

        .asset-glow.cyan {
          background: radial-gradient(circle, rgba(0, 163, 255, 0.18) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .asset-glow.green {
          background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .asset-img {
          max-height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }

        .card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 1.5rem 0;
        }

        .pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pill {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 5px 12px;
          border-radius: 8px;
        }

        .full-card-inner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          align-items: center;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">THE SOLUTION</span>
          <h2 className="title">How We Fix Your Growth Engine</h2>
        </div>

        <div className="bento-grid">
          {/* CARD 1 */}
          <div className="card-matte card-half">
            <div className="asset-slot">
              <div className="asset-glow cyan" />
              <img src="/assets/3d-gtm-prism.png" alt="GTM Strategy Visual" className="asset-img" />
            </div>

            <div>
              <h3 className="card-title">Go-To-Market & Growth Strategy</h3>
              <p className="card-desc">
                Designing scalable acquisition funnels and positioning that turn market demand into <strong style={{ color: '#fff' }}>predictable, high-margin revenue</strong>.
              </p>
            </div>

            <div className="pills-container">
              {['GTM Strategy', 'Funnel Architecture', 'Omnichannel Scale', 'CAC Optimization'].map((pill, i) => (
                <span key={i} className="pill">• {pill}</span>
              ))}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card-matte card-half">
            <div className="asset-slot">
              <div className="asset-glow green" />
              <img src="/assets/3d-data-cube.png" alt="Data Intelligence Visual" className="asset-img" />
            </div>

            <div>
              <h3 className="card-title">Data & Revenue Intelligence</h3>
              <p className="card-desc">
                End-to-end attribution bridging marketing spend directly with <strong style={{ color: '#fff' }}>net P&L, cohort retention, and true customer LTV</strong>.
              </p>
            </div>

            <div className="pills-container">
              {['P&L Attribution', 'Unit Economics', 'BI Dashboards', 'LTV & Cohorts'].map((pill, i) => (
                <span key={i} className="pill">• {pill}</span>
              ))}
            </div>
          </div>

          {/* CARD 3 (WIDE) */}
          <div className="card-matte card-full">
            <div className="full-card-inner">
              <div>
                <h3 className="card-title">CRM & AI-Powered Operations</h3>
                <p className="card-desc">
                  Building zero-leakage CRM workflows and AI processing to <strong style={{ color: '#fff' }}>eliminate manual routines, slash overhead, and accelerate deal closure</strong>.
                </p>

                <div className="pills-container">
                  {['CRM Architecture', 'AI Lead Scoring', 'Process Automation', 'Retention Loops'].map((pill, i) => (
                    <span key={i} className="pill">• {pill}</span>
                  ))}
                </div>
              </div>

              <div className="asset-slot" style={{ height: 160 }}>
                <div className="asset-glow cyan" style={{ width: 200, height: 100 }} />
                <img src="/assets/3d-ai-loop.png" alt="CRM AI Automation Visual" className="asset-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
