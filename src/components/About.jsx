import React from 'react';
import { Icons } from './Icons';

export const About = ({ stats, languages }) => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">À Propos De Moi</span>
          <h2 className="section-title">Développeur axé sur les <span className="gradient-text">Résultats</span></h2>
          <p className="section-subtitle">
            Combinaison de compétences techniques en programmation, vision business et esprit d'équipe.
          </p>
        </div>

        {/* Chiffres Clés */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card glass-card">
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Détails du profil & Langues */}
        <div className="about-details-grid">
          <div className="bio-block glass-card">
            <h3>Mon Profil & Vision</h3>
            <p>
              Actuellement étudiant en <strong>Licence 3 d'Informatique de Gestion à SMI (Thiès)</strong>,
              je développe des solutions web et logicielles complètes. Mon objectif est d'apporter 
              une réelle valeur ajoutée à travers des applications robustes, ergonomiques et pérennes.
            </p>
            <p>
              Engagé activement dans la vie universitaire et associative en tant que <strong>Président du Club Numérique</strong>, 
              j'aime partager le savoir, organiser des ateliers tech et concevoir des projets innovants.
            </p>

            <div className="qualities-pills">
              <span className="quality-pill"><Icons.CheckCircle size={15} /> Rigueur & Organisation</span>
              <span className="quality-pill"><Icons.CheckCircle size={15} /> Esprit d'équipe & Leadership</span>
              <span className="quality-pill"><Icons.CheckCircle size={15} /> Veille continue & Curiosité IA</span>
              <span className="quality-pill"><Icons.CheckCircle size={15} /> Suite Office & Documentation</span>
            </div>
          </div>

          <div className="languages-block glass-card">
            <h3>Langues & Communication</h3>
            <p className="languages-intro">
              Études d'anglais renforcées en parallèle à l'UCAD pour une collaboration internationale fluide.
            </p>

            <div className="lang-list">
              {languages.map((lang, idx) => (
                <div key={idx} className="lang-item">
                  <div className="lang-header">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-pct">{lang.level}</span>
                  </div>
                  <div className="lang-progress-bg">
                    <div 
                      className="lang-progress-fill" 
                      style={{ width: lang.level }}
                    ></div>
                  </div>
                  <span className="lang-desc">{lang.desc}</span>
                </div>
              ))}
            </div>

            <div className="location-callout">
              <Icons.MapPin size={20} className="callout-icon" />
              <div>
                <strong>Localisation :</strong>
                <p>Thiès Keur Dago, Sénégal (Mobilité & Télétravail)</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-section {
          background: rgba(255, 255, 255, 0.01);
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        .stat-card {
          padding: 1.8rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          font-family: var(--font-heading);
        }
        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }
        .about-details-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2rem;
        }
        .bio-block, .languages-block {
          padding: 2.2rem;
        }
        .bio-block h3, .languages-block h3 {
          font-size: 1.4rem;
          margin-bottom: 1.2rem;
        }
        .bio-block p {
          color: var(--text-secondary);
          margin-bottom: 1.2rem;
          line-height: 1.7;
        }
        .qualities-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        .quality-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 0.9rem;
          background: rgba(61, 169, 252, 0.08);
          border: 1px solid rgba(61, 169, 252, 0.2);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--text-primary);
          font-weight: 500;
        }
        .languages-intro {
          color: var(--text-secondary);
          font-size: 0.92rem;
          margin-bottom: 1.5rem;
        }
        .lang-list {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
          margin-bottom: 2rem;
        }
        .lang-header {
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          margin-bottom: 0.4rem;
          font-size: 0.95rem;
        }
        .lang-progress-bg {
          height: 8px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          overflow: hidden;
          margin-bottom: 0.35rem;
        }
        [data-theme="light"] .lang-progress-bg {
          background: rgba(0, 0, 0, 0.08);
        }
        .lang-progress-fill {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: 9999px;
          transition: width 1s ease-in-out;
        }
        .lang-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .location-callout {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1rem 1.2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          font-size: 0.88rem;
        }
        .callout-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .location-callout p {
          color: var(--text-secondary);
          margin-top: 0.2rem;
        }
        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-details-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 500px) {
          .stats-grid {
            gap: 0.85rem;
          }
          .stat-card {
            padding: 1.1rem 0.6rem;
          }
          .stat-value {
            font-size: 1.6rem;
          }
          .stat-label {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};
