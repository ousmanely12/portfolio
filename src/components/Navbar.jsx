import React, { useState } from 'react';
import { Icons } from './Icons';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "À Propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Parcours", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar-container">
      <div className="container nav-content">
        <a href="#hero" className="logo">
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-text">Mohamed <span className="gradient-text">LY</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Basculer le thème"
            title={theme === 'dark' ? "Passer en mode clair" : "Passer en mode sombre"}
          >
            {theme === 'dark' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="mobile-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            aria-label="Basculer le thème"
          >
            {theme === 'dark' ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
          </button>
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <Icons.X size={26} /> : <Icons.Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="mobile-drawer">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--nav-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 700;
          font-size: 1.25rem;
          font-family: var(--font-heading);
        }
        .logo-symbol {
          background: var(--accent-gradient);
          color: white;
          padding: 0.2rem 0.5rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 800;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.8rem;
        }
        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          position: relative;
        }
        .nav-link:hover {
          color: var(--accent-cyan);
        }
        .theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }
        .theme-toggle-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: rotate(15deg);
        }
        .mobile-actions {
          display: none;
          align-items: center;
          gap: 0.75rem;
        }
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--text-primary);
        }
        .mobile-drawer {
          display: flex;
          flex-direction: column;
          padding: 1rem 1.5rem;
          background: var(--bg-primary);
          border-bottom: 1px solid var(--border-color);
          gap: 0.25rem;
        }
        .mobile-nav-link {
          padding: 0.6rem 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        @media (max-width: 820px) {
          .desktop-nav { display: none; }
          .mobile-actions { display: flex; }
        }
      `}</style>
    </header>
  );
};
