import React from 'react';
import { T } from '@/src/theme/tokens';

const CYAN_ACCENT = '#00A3FF';

export const Expertise = () => {
  return (
    <section
      id="expertise"
      style={{
        width: '100%',
        position: 'relative',
        paddingTop: 'clamp(2rem, 4vw, 4rem)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
        background: 'transparent',
      }}
    >
      <style>{`
        .expertise-card {
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }
        .expertise-card:hover {
          border-color: rgba(0, 163, 255, 0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 163, 255, 0.08);
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '0.35rem 0.85rem',
              borderRadius: 20,
              marginBottom: '1rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: 'rgba(0, 163, 255, 0.08)',
              border: '1px solid rgba(0, 163, 255, 0.25)',
              color: CYAN_ACCENT,
            }}
          >
            THE SOLUTION
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#fff',
              margin: 0,
            }}
          >
            How We Fix Your Growth Engine
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            width: '100%',
          }}
        >
          {/* CARD 1: GTM Strategy */}
          <div
            className="card-matte expertise-card"
            style={{
              flex: '1 1 420px',
              minWidth: 0,
              position: 'relative',
              overflow: 'hidden',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* 3D Visual Asset Slot */}
            <div style={{
              position: 'relative',
              height: 180,
              width: '100%',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute',
                width: 140,
                height: 140,
                background: 'radial-gradient(circle, rgba(0,163,255,0.18) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(20px)',
              }} />
              <img
                src="/assets/3d-gtm-prism.png"
                alt="GTM Strategy Visual"
                style={{
                  maxHeight: '100%',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                }}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                Go-To-Market & Growth Strategy
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, marginBottom: '1.5rem' }}>
                Designing scalable acquisition funnels and positioning that turn market demand into <strong style={{ color: '#fff', fontWeight: 600 }}>predictable, high-margin revenue</strong>.
              </p>
            </div>

            {/* Skill Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['GTM Strategy', 'Funnel Architecture', 'Omnichannel Scale', 'CAC Optimization'].map((pill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: T.sub,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '5px 12px',
                    borderRadius: 8,
                  }}
                >
                  • {pill}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 2: Data & Revenue Intelligence */}
          <div
            className="card-matte expertise-card"
            style={{
              flex: '1 1 420px',
              minWidth: 0,
              position: 'relative',
              overflow: 'hidden',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* 3D Visual Asset Slot */}
            <div style={{
              position: 'relative',
              height: 180,
              width: '100%',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                position: 'absolute',
                width: 140,
                height: 140,
                background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(20px)',
              }} />
              <img
                src="/assets/3d-data-cube.png"
                alt="Data Intelligence Visual"
                style={{
                  maxHeight: '100%',
                  objectFit: 'contain',
                  position: 'relative',
                  zIndex: 1,
                  filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                }}
              />
            </div>

            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                Data & Revenue Intelligence
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, marginBottom: '1.5rem' }}>
                End-to-end attribution bridging marketing spend directly with <strong style={{ color: '#fff', fontWeight: 600 }}>net P&L, cohort retention, and true customer LTV</strong>.
              </p>
            </div>

            {/* Skill Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['P&L Attribution', 'Unit Economics', 'BI Dashboards', 'LTV & Cohorts'].map((pill, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: T.sub,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '5px 12px',
                    borderRadius: 8,
                  }}
                >
                  • {pill}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 3: CRM & AI Operations */}
          <div
            className="card-matte expertise-card"
            style={{
              flex: '1 1 100%',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              padding: '2.5rem 2rem',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                  CRM & AI-Powered Operations
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, margin: 0, marginBottom: '1.5rem' }}>
                  Building zero-leakage CRM workflows and AI processing to <strong style={{ color: '#fff', fontWeight: 600 }}>eliminate manual routines, slash overhead, and accelerate deal closure</strong>.
                </p>

                {/* Skill Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['CRM Architecture', 'AI Lead Scoring', 'Process Automation', 'Retention Loops'].map((pill, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: T.sub,
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '5px 12px',
                        borderRadius: 8,
                      }}
                    >
                      • {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3D Visual Asset Slot (Wide) */}
              <div style={{
                position: 'relative',
                height: 160,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  position: 'absolute',
                  width: 200,
                  height: 100,
                  background: 'radial-gradient(circle, rgba(0,163,255,0.15) 0%, rgba(0,0,0,0) 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                }} />
                <img
                  src="/assets/3d-ai-loop.png"
                  alt="CRM AI Automation Visual"
                  style={{
                    maxHeight: '100%',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 1,
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                  }}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
