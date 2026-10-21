import React from 'react';

const currentYear = new Date().getFullYear();

export const Footer = ({ personal }) => {

  return (
    <footer className="footer-container">
      <div className="container footer-content">
        
        <div className="footer-main">
          <div className="footer-brand">
            <span className="logo-symbol">&lt;/&gt;</span>
            <span className="brand-name">{personal.name}</span>
            <p className="brand-tagline">
              Développeur Web Fullstack passionné, basé à Thiès, Sénégal.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Navigation</h4>
            <div className="footer-links">
              <a href="#hero">Accueil</a>
              <a href="#about">À Propos</a>
              <a href="#skills">Compétences</a>
              <a href="#projects">Projets</a>
              <a href="#experience">Parcours</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Réseaux & Contact</h4>
            <div className="footer-links">
              <a href={`mailto:${personal.email}`}>Email : {personal.email}</a>
              <a href={`tel:${personal.phone}`}>Tél : {personal.phone}</a>
              {personal.github && <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Mohamed Ousmane LY. Tous droits réservés.</p>
          <p className="footer-designed">Conçu avec React, Vite & Passion au Sénégal 🇸🇳</p>
        </div>

      </div>

      <style>{`
        .footer-container {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 4.5rem 0 2rem;
          margin-top: 4rem;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
        }
        .brand-tagline {
          color: var(--text-secondary);
          font-size: 0.92rem;
          max-width: 320px;
          line-height: 1.6;
        }
        .footer-links-group h4 {
          font-size: 1rem;
          margin-bottom: 1.2rem;
          color: var(--text-primary);
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }
        .footer-links a:hover {
          color: var(--accent-cyan);
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer-designed {
          color: var(--text-secondary);
        }
        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-links {
            gap: 0.1rem;
          }
          .footer-links a {
            padding: 0.45rem 0;
            overflow-wrap: anywhere;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 0.8rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
