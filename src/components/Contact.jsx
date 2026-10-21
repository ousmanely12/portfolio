import React, { useState } from 'react';
import { Icons } from './Icons';

export const Contact = ({ personal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Identifiant Formspree (https://formspree.io) défini dans .env : VITE_FORMSPREE_ID=xxxxxxxx
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sans Formspree : ouverture du logiciel de messagerie avec le message pré-rempli
    if (!formspreeId) {
      const subject = formData.subject || `Message de ${formData.name}`;
      const body = `${formData.message}\n\n${formData.name} (${formData.email})`;
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 6000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">Prendre Contact</span>
          <h2 className="section-title">Discutons de vos <span className="gradient-text">Projets</span></h2>
          <p className="section-subtitle">
            Besoin d'un développeur motivé, d'un stagiaire polyvalent ou d'une collaboration ? Réponse en moins de 24h.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Coordonnées rapides (Objectif : contact en moins de 30 secondes) */}
          <div className="contact-info-col">
            <div className="info-card glass-card">
              <h3>Coordonnées Directes</h3>
              <p className="info-intro">
                N'hésitez pas à me joindre directement par téléphone ou email pour un échange rapide.
              </p>

              <div className="direct-links">
                <a href={`mailto:${personal.email}`} className="contact-tile">
                  <div className="tile-icon"><Icons.Mail size={22} /></div>
                  <div>
                    <span className="tile-label">Adresse Email</span>
                    <strong className="tile-val">{personal.email}</strong>
                  </div>
                </a>

                <a href={`tel:${personal.phone}`} className="contact-tile">
                  <div className="tile-icon"><Icons.Phone size={22} /></div>
                  <div>
                    <span className="tile-label">Téléphone / WhatsApp</span>
                    <strong className="tile-val">{personal.phone}</strong>
                  </div>
                </a>

                <div className="contact-tile">
                  <div className="tile-icon"><Icons.MapPin size={22} /></div>
                  <div>
                    <span className="tile-label">Localisation</span>
                    <strong className="tile-val">{personal.location}</strong>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              {personal.github && (
                <div className="socials-box">
                  <span className="socials-label">Profil professionnel :</span>
                  <div className="social-pills">
                    <a href={personal.github} target="_blank" rel="noreferrer" className="social-pill">
                      <Icons.Github size={18} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="contact-form-col">
            <form className="contact-form glass-card" onSubmit={handleSubmit}>
              <h3>Envoyez-moi un message</h3>
              
              {status === 'success' && (
                <div className="alert-success">
                  <Icons.CheckCircle size={20} />
                  <span>Merci pour votre message ! Je vous répondrai dans les plus brefs délais.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="alert-error">
                  <span>L'envoi a échoué. Vous pouvez m'écrire directement à {personal.email}.</span>
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Votre Nom complet *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="ex. Mamadou Diop"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Votre Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="ex. contact@entreprise.sn"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Objet / Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Opportunité de stage, projet web..."
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="Bonjour Mohamed, je vous contacte concernant..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'sending'}
              >
                <Icons.Send size={18} />
                <span>{status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.3fr);
          gap: 2.5rem;
        }
        .info-card, .contact-form {
          padding: 2.5rem;
        }
        .info-card h3, .contact-form h3 {
          font-size: 1.4rem;
          margin-bottom: 0.8rem;
        }
        .info-intro {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }
        .direct-links {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }
        .contact-tile {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          transition: all var(--transition-fast);
        }
        [data-theme="light"] .contact-tile {
          background: rgba(0, 0, 0, 0.02);
        }
        .contact-tile:hover {
          border-color: var(--accent-cyan);
          transform: translateX(4px);
        }
        .tile-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(61, 169, 252, 0.12);
          color: var(--accent-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tile-label {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .contact-tile > div:last-child {
          min-width: 0;
        }
        .tile-val {
          font-size: 0.95rem;
          color: var(--text-primary);
          overflow-wrap: anywhere;
        }
        .socials-label {
          display: block;
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 0.8rem;
        }
        .social-pills {
          display: flex;
          gap: 0.8rem;
        }
        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.9rem;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }
        .social-pill:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }
        /* Form */
        .alert-success {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1.2rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 10px;
          color: #10B981;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }
        .alert-error {
          padding: 0.9rem 1.2rem;
          background: rgba(239, 68, 68, 0.12);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 10px;
          color: #EF4444;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.2rem;
        }
        .form-group label {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-primary);
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.85rem 1.1rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }
        [data-theme="light"] .form-group input, [data-theme="light"] .form-group textarea {
          background: #FFFFFF;
          border-color: rgba(0, 0, 0, 0.15);
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px rgba(61, 169, 252, 0.15);
        }
        .submit-btn {
          width: 100%;
          padding: 0.95rem;
          font-size: 1rem;
        }
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: minmax(0, 1fr);
          }
          .form-group-row {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .info-card, .contact-form {
            padding: 1.5rem;
          }
          .contact-tile {
            padding: 0.85rem;
            gap: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};
