import React from 'react';
import { Icons } from './Icons';

export const Skills = ({ skills }) => {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'layout': return <Icons.Code size={22} />;
      case 'server': return <Icons.Server size={22} />;
      case 'database': return <Icons.Database size={22} />;
      case 'cloud': return <Icons.Cloud size={22} />;
      default: return <Icons.Sparkles size={22} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Compétences Techniques</span>
          <h2 className="section-title">Ma Boîte à <span className="gradient-text">Outils</span></h2>
          <p className="section-subtitle">
            Un ensemble équilibré de technologies modernes pour concevoir des applications web de bout en bout.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div key={idx} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-box">
                  {getCategoryIcon(category.icon)}
                </div>
                <h3>{category.category}</h3>
              </div>

              <div className="skills-items-list">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="skill-item">
                    <div className="skill-item-info">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .skill-category-card {
          padding: 2.2rem;
        }
        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .category-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(61, 169, 252, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(61, 169, 252, 0.25);
        }
        .category-header h3 {
          font-size: 1.3rem;
        }
        .skills-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }
        .skill-item-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 0.4rem;
        }
        .skill-pct {
          color: var(--accent-cyan);
          font-weight: 600;
          font-size: 0.85rem;
        }
        .skill-bar-bg {
          height: 8px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 9999px;
          overflow: hidden;
        }
        [data-theme="light"] .skill-bar-bg {
          background: rgba(0, 0, 0, 0.08);
        }
        .skill-bar-fill {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: 9999px;
          transition: width 0.8s ease;
        }
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
