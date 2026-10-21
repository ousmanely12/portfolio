import React from 'react';
import { Icons } from './Icons';

export const Experience = ({ education, experiences }) => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Parcours & Expériences</span>
          <h2 className="section-title">Formation & <span className="gradient-text">Engagements</span></h2>
          <p className="section-subtitle">
            Une trajectoire universitaire solide couplée à des responsabilités associatives et projets concrets.
          </p>
        </div>

        <div className="experience-layout">
          
          {/* Colonne Formation Académique */}
          <div className="experience-col">
            <div className="col-header">
              <div className="col-icon">
                <Icons.GraduationCap size={22} />
              </div>
              <h3>Diplômes & Études</h3>
            </div>

            <div className="timeline">
              {education.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card glass-card">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <span className="timeline-institution">{item.institution}</span>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne Expériences & Activités */}
          <div className="experience-col">
            <div className="col-header">
              <div className="col-icon">
                <Icons.Briefcase size={22} />
              </div>
              <h3>Expériences & Responsabilités</h3>
            </div>

            <div className="timeline">
              {experiences.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card glass-card">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-title">{item.role}</h4>
                    <span className="timeline-institution">{item.organization}</span>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
                </div>
              ))}

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card glass-card highlight-card">
                  <span className="timeline-period">En continu</span>
                  <h4 className="timeline-title">Veille Technologique & Création</h4>
                  <span className="timeline-institution">Autodidacte & Passionné</span>
                  <p className="timeline-desc">
                    Exploration continue des frameworks JavaScript, de l'écosystème Node.js, et des intégrations d'APIs d'intelligence artificielle (Groq, OpenAI).
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .experience-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .col-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .col-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(61, 169, 252, 0.12);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(61, 169, 252, 0.25);
        }
        .col-header h3 {
          font-size: 1.35rem;
        }
        .timeline {
          position: relative;
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: var(--border-color);
        }
        .timeline-item {
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -1.5rem;
          top: 18px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent-cyan);
          border: 2px solid var(--bg-primary);
          box-shadow: 0 0 10px var(--accent-cyan);
        }
        .timeline-card {
          padding: 1.6rem;
        }
        .timeline-period {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(61, 169, 252, 0.1);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          margin-bottom: 0.6rem;
        }
        .timeline-title {
          font-size: 1.15rem;
          margin-bottom: 0.25rem;
        }
        .timeline-institution {
          display: block;
          font-size: 0.88rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .timeline-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .highlight-card {
          border-color: rgba(61, 169, 252, 0.3);
        }
        @media (max-width: 860px) {
          .experience-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};
