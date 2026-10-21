import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

// Effet de machine à écrire (Typewriter) pour faire défiler les rôles
const titles = [
  "Développeur Web Fullstack",
  "Développeur React.js & Node.js",
  "Développeur Mobile React Native",
  "Étudiant en L3 SMI (Informatique)",
  "Président du Club Numérique",
  "Passionné d'Intelligence Artificielle"
];

export const Hero = ({ personal }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Photos de profil alternées toutes les 5 secondes
  const profilePhotos = personal.photos && personal.photos.length > 0 
    ? personal.photos 
    : ["/profile-1.jpg", "/profile-2.jpg"];
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const photoInterval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % profilePhotos.length);
    }, 5000);

    return () => clearInterval(photoInterval);
  }, [profilePhotos.length]);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const isComplete = !isDeleting && displayText === fullText;
    // Pause une fois le mot complet affiché
    const delay = isComplete ? 1600 : isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
      } else if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      } else if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section id="hero" className="hero-section">
      {/* Ticker / Bandeau défilant en haut (Marquee) */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          <span>⚡ REACT.JS</span>
          <span>•</span>
          <span>REACT NATIVE</span>
          <span>•</span>
          <span>HTML5 & CSS3</span>
          <span>•</span>
          <span>NODE.JS & EXPRESS</span>
          <span>•</span>
          <span>POSTGRESQL & MYSQL</span>
          <span>•</span>
          <span>INTEGRATION APIS IA (GROQ)</span>
          <span>•</span>
          <span>DESIGN RESPONSIVE</span>
          <span>•</span>
          <span>L3 INFORMATIQUE DE GESTION SMI</span>
          <span>•</span>
          <span>⚡ REACT.JS</span>
          <span>•</span>
          <span>REACT NATIVE</span>
          <span>•</span>
          <span>HTML5 & CSS3</span>
          <span>•</span>
          <span>NODE.JS & EXPRESS</span>
          <span>•</span>
          <span>POSTGRESQL & MYSQL</span>
          <span>•</span>
          <span>INTEGRATION APIS IA (GROQ)</span>
          <span>•</span>
          <span>DESIGN RESPONSIVE</span>
          <span>•</span>
          <span>L3 INFORMATIQUE DE GESTION SMI</span>
        </div>
      </div>

      <div className="container hero-container">
        
        {/* Colonne Texte */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulsing-dot"></span>
            <span>Disponible pour Stage & Missions Web</span>
          </div>

          <h1 className="hero-title">
            Bonjour, je suis <br />
            <span className="gradient-text">{personal.name}</span>
          </h1>

          {/* Rôle dynamique qui se tape et défile automatiquement */}
          <div className="hero-role-wrapper">
            <Icons.Code size={24} className="role-icon" />
            <span className="hero-typing-text">
              {displayText}
              <span className="typing-cursor">|</span>
            </span>
          </div>

          <p className="hero-description">
            {personal.bio}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Voir mes projets</span>
              <Icons.ExternalLink size={18} />
            </a>
            
            {personal.cvUrl && (
              <a
                href={personal.cvUrl}
                download="CV_Mohamed_Ousmane_LY.pdf"
                className="btn btn-secondary"
              >
                <Icons.Download size={18} />
                <span>Télécharger mon CV</span>
              </a>
            )}
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <Icons.MapPin size={18} className="meta-icon" />
              <span>{personal.location}</span>
            </div>
            <div className="meta-item">
              <Icons.Mail size={18} className="meta-icon" />
              <span>{personal.email}</span>
            </div>
          </div>
        </div>

        {/* Colonne Visuel / Carte Développeur */}
        <div className="hero-visual">
          <div className="visual-card-wrapper">
            <div className="glow-effect"></div>
            
            <div className="profile-card glass-card">
              <div className="avatar-frame">
                {profilePhotos.map((imgSrc, idx) => (
                  <img
                    key={imgSrc}
                    src={imgSrc}
                    alt={`${personal.name} - photo ${idx + 1}`}
                    className={`avatar-img ${idx === photoIndex ? 'active' : ''}`}
                    onError={(e) => {
                      // Photo introuvable : on la masque plutôt que d'afficher une image tierce
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ))}
                
                {/* Indicateurs visuels des photos */}
                <div className="photo-indicators">
                  {profilePhotos.map((_, idx) => (
                    <button
                      key={idx}
                      className={`photo-indicator-dot ${idx === photoIndex ? 'active' : ''}`}
                      onClick={() => setPhotoIndex(idx)}
                      aria-label={`Afficher la photo ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="avatar-badge">
                  <Icons.Sparkles size={16} />
                  <span>L3 SMI</span>
                </div>
              </div>

              <div className="card-info">
                <h3>{personal.name}</h3>
                <p className="card-tagline">Développeur Web & Mobile</p>
                
                <div className="tech-stack-pills">
                  <span>HTML / CSS</span>
                  <span>React</span>
                  <span>React Native</span>
                  <span>Node.js</span>
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                </div>
              </div>

              <div className="quick-socials">
                {personal.github && (
                  <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Icons.Github size={20} />
                  </a>
                )}
                <a href={`mailto:${personal.email}`} aria-label="Email">
                  <Icons.Mail size={20} />
                </a>
                <a href={`tel:${personal.phone}`} aria-label="Téléphone">
                  <Icons.Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-section {
          padding-top: 110px;
          padding-bottom: 70px;
          position: relative;
          overflow: hidden;
        }

        /* Ticker défilant continu */
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          background: rgba(61, 169, 252, 0.06);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 0.65rem 0;
          margin-bottom: 3.5rem;
          white-space: nowrap;
        }
        .ticker-track {
          display: inline-flex;
          gap: 2rem;
          animation: tickerScroll 25s linear infinite;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(61, 169, 252, 0.1);
          border: 1px solid rgba(61, 169, 252, 0.25);
          color: var(--accent-cyan);
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .pulsing-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .hero-title {
          font-size: 3.2rem;
          line-height: 1.15;
          margin-bottom: 1rem;
        }

        /* Machine à écrire */
        .hero-role-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
          min-height: 42px;
        }
        .role-icon {
          flex-shrink: 0;
          color: var(--accent-purple);
        }
        .hero-typing-text {
          font-family: var(--font-heading);
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .typing-cursor {
          display: inline-block;
          font-weight: 300;
          color: var(--accent-cyan);
          -webkit-text-fill-color: var(--accent-cyan);
          animation: blink 0.8s infinite;
          margin-left: 3px;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
          max-width: 580px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }
        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.8rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .meta-icon {
          color: var(--accent-cyan);
        }

        /* Visual Card */
        .visual-card-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .glow-effect {
          position: absolute;
          inset: -15px;
          background: var(--accent-gradient);
          filter: blur(40px);
          opacity: 0.25;
          border-radius: 24px;
          z-index: 0;
        }
        .profile-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 380px;
          padding: 2.2rem;
          text-align: center;
          border: 1px solid var(--border-color);
        }
        .avatar-frame {
          position: relative;
          width: 170px;
          height: 170px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          padding: 5px;
          background: var(--accent-gradient);
          overflow: visible;
        }
        .avatar-img {
          position: absolute;
          inset: 5px;
          width: calc(100% - 10px);
          height: calc(100% - 10px);
          object-fit: cover;
          border-radius: 50%;
          background: var(--bg-primary);
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
          pointer-events: none;
        }
        .avatar-img.active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
          z-index: 1;
        }
        .photo-indicators {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 3;
          background: rgba(15, 23, 42, 0.75);
          backdrop-filter: blur(8px);
          padding: 3px 8px;
          border-radius: 9999px;
          border: 1px solid var(--border-color);
        }
        .photo-indicator-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        .photo-indicator-dot.active {
          width: 18px;
          border-radius: 9999px;
          background: var(--accent-cyan);
          box-shadow: 0 0 8px rgba(61, 169, 252, 0.6);
        }
        .avatar-badge {
          position: absolute;
          bottom: 4px;
          right: 4px;
          background: #101F33;
          border: 1px solid var(--accent-cyan);
          color: var(--accent-cyan);
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          z-index: 2;
        }
        .card-info h3 {
          font-size: 1.35rem;
          margin-bottom: 0.25rem;
        }
        .card-tagline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 1.2rem;
        }
        .tech-stack-pills {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .tech-stack-pills span {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          font-size: 0.78rem;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          color: var(--text-primary);
        }
        .quick-socials {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }
        .quick-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }
        .quick-socials a:hover {
          color: var(--accent-cyan);
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-role-wrapper {
            justify-content: center;
          }
          .hero-actions, .hero-meta {
            justify-content: center;
          }
          .hero-title {
            font-size: 2.4rem;
          }
        }
      `}</style>
    </section>
  );
};
