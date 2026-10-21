import React, { useState, useEffect } from 'react';
import { portfolioData } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  // Gestion du Thème Sombre / Clair avec mémorisation localStorage
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Barre de navigation fixe */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Sections de la page unique (One-page) */}
      <main>
        <Hero personal={portfolioData.personal} />
        <About
          stats={portfolioData.stats}
          languages={portfolioData.languages} 
        />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience 
          education={portfolioData.education} 
          experiences={portfolioData.experiences} 
        />
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Pied de page */}
      <Footer personal={portfolioData.personal} />
    </div>
  );
}

export default App;
