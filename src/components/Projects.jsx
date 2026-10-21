import React, { useState } from 'react';
import { Icons } from './Icons';

export const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Réalisations</span>
          <h2 className="section-title">Projets <span className="gradient-text">Sélectionnés</span></h2>
          <p className="section-subtitle">
            Découvrez mes applications concrètes, développées avec passion et rigueur technique.
          </p>
        </div>

        {/* Filtres par technologie / catégorie (Cahier des charges : fonctionnalité souhaitable) */}
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Tous les projets ({projects.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Développement Web
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            Intelligence Artificielle
          </button>
        </div>

        {/* Grille des Projets */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              
              {/* En-tête / Badge du Projet */}
              <div className="project-banner">
                <div className="project-banner-overlay">
                  <div className="project-icon-wrapper">
                    {project.category === 'ai' ? <Icons.Sparkles size={30} /> : <Icons.Code size={30} />}
                  </div>
                  {project.status && (
                    <span className="status-badge">{project.status}</span>
                  )}
                </div>
              </div>

              {/* Contenu */}
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.metrics && (
                  <div className="project-metrics">
                    <Icons.CheckCircle size={15} className="metric-icon" />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Badges Technologies */}
                <div className="tech-tags">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Liens d'action */}
                {(project.demoUrl || project.githubUrl) && (
                  <div className="project-links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary project-btn"
                      >
                        <span>Voir Démo</span>
                        <Icons.ExternalLink size={16} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary project-btn"
                      >
                        <Icons.Github size={16} />
                        <span>Code GitHub</span>
                      </a>
                    )}
                  </div>
                )}

                {project.demoUrl && project.demoNote && (
                  <p className="demo-note">{project.demoNote}</p>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .projects-section {
          background: rgba(255, 255, 255, 0.015);
        }
        .filter-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3.5rem;
        }
        .filter-btn {
          padding: 0.6rem 1.3rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }
        [data-theme="light"] .filter-btn {
          background: rgba(0, 0, 0, 0.04);
        }
        .filter-btn:hover, .filter-btn.active {
          background: var(--accent-gradient);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px var(--accent-glow);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 2.2rem;
        }
        @media (max-width: 760px) {
          .projects-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 1.5rem;
          }
          .projects-grid .project-banner {
            height: 96px;
          }
          .projects-grid .project-body {
            padding: 1.4rem;
          }
        }
        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          padding: 0;
        }
        .project-banner {
          height: 140px;
          background: linear-gradient(135deg, rgba(61, 169, 252, 0.15) 0%, rgba(124, 92, 255, 0.2) 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border-color);
        }
        .project-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-cyan);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          border: 1px solid var(--border-color);
        }
        .status-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(245, 158, 11, 0.2);
          border: 1px solid rgba(245, 158, 11, 0.4);
          color: #FBBF24;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 9999px;
        }
        .project-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .project-title {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          line-height: 1.35;
        }
        .project-description {
          font-size: 0.93rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.2rem;
          flex-grow: 1;
        }
        .project-metrics {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--accent-cyan);
          background: rgba(61, 169, 252, 0.08);
          padding: 0.45rem 0.8rem;
          border-radius: 8px;
          margin-bottom: 1.2rem;
        }
        .metric-icon {
          flex-shrink: 0;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.8rem;
        }
        .tech-tag {
          font-size: 0.78rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }
        .project-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
          gap: 0.85rem;
          margin-top: auto;
        }
        .project-btn {
          padding: 0.65rem 1rem;
          font-size: 0.88rem;
        }
        .demo-note {
          margin-top: 0.7rem;
          font-size: 0.78rem;
          color: var(--text-muted);
          text-align: center;
        }
        @media (max-width: 640px) {
          .project-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
