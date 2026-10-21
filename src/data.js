export const portfolioData = {
  personal: {
    name: "Mohamed Ousmane LY",
    title: "Développeur Web Fullstack",
    subtitle: "Étudiant en L3 Informatique de Gestion (SMI) & Passionné par le numérique",
    location: "Thiès Keur Dago, Sénégal",
    email: "mohamedousmanely@gmail.com",
    phone: "+221 77 566 72 64",
    // Liens à compléter (laisser vide masque le bouton sur le site)
    github: "https://github.com/ousmanely12",
    bio: "Passionné par l'informatique, je maîtrise la conception et le développement de sites web et d'applications modernes (Front-End, Back-End et bases de données). Rigoureux, curieux et doté d'un excellent esprit d'équipe, je m'adapte rapidement aux nouveaux défis techniques. En plus du développement, je maîtrise les outils bureautiques et la création de contenus innovants avec l'IA.",
    // Déposer le CV dans public/ puis indiquer "/cv-mohamed-ousmane-ly.pdf" ici
    cvUrl: "",
    photos: [
      "/profile-1.jpg",
      "/profile-2.jpg"
    ]
  },
  stats: [
    { label: "Années d'études sup.", value: "3+" },
    { label: "Projets majeurs", value: "4" },
    { label: "Technologies clés", value: "10+" },
    { label: "Club Numérique", value: "Président" }
  ],
  skills: [
    {
      category: "Front-End & Mobile",
      icon: "layout",
      items: [
        { name: "HTML5 / CSS3", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 80 },
        { name: "React Native", level: 70 }
      ]
    },
    {
      category: "Back-End & API",
      icon: "server",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 75 },
        { name: "Notions en NestJS", level: 55 }
      ]
    },
    {
      category: "Bases de données",
      icon: "database",
      items: [
        { name: "SQL (PostgreSQL, MySQL)", level: 75 },
        { name: "Conception BD", level: 78 }
      ]
    },
    {
      category: "Outils & Déploiement",
      icon: "cloud",
      items: [
        { name: "Git & GitHub", level: 85 },
        { name: "Render, Vercel & Netlify", level: 80 },
        { name: "Suite Office / Docs", level: 90 }
      ]
    }
  ],
  projects: [
    {
      id: "batipme-sn",
      title: "BATIPME-SN — Gestion de Chantiers BTP",
      category: "web",
      status: "Mémoire de fin de cycle",
      description: "Application web de gestion de projets pour le secteur du BTP au Sénégal (cas de SBS) : suivi des chantiers, centralisation des documents, budget et facturation, avec un assistant IA. Projet réalisé en groupe.",
      technologies: ["React", "NestJS", "PostgreSQL", "API Groq (IA)", "PWA"],
      githubUrl: "https://github.com/mansanael/smi-2026/tree/btp",
      demoUrl: "https://smi-2026.vercel.app",
      featured: true,
      metrics: "Devis estimés et rapports par IA, saisie vocale (Whisper), auth JWT"
    },
    {
      id: "eval-profs",
      title: "SMI PULSE — Évaluation Anonyme des Enseignants",
      category: "web",
      description: "Plateforme permettant aux étudiants d'évaluer anonymement leurs enseignants, avec un espace dédié pour les étudiants, les professeurs (statistiques, export) et l'administration (comptes, semestres, codes d'inscription).",
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "JWT"],
      githubUrl: "https://github.com/ousmanely12/Plateforme-d-valuation-P-dagogique-des-enseignants-de-SMI",
      demoUrl: "https://sup-management-intelligentsia-dlw2.onrender.com",
      demoNote: "Hébergement gratuit : le premier chargement peut prendre ~1 min.",
      featured: true,
      metrics: "API REST, authentification JWT, 3 espaces (étudiant, professeur, admin)"
    },
    {
      id: "chatbot-smi",
      title: "Chatbot Intelligent pour Étudiants SMI",
      category: "ai",
      status: "Projet en cours",
      description: "Chatbot qui présente les étudiants de l'école avec 4 personnalités au choix (naturel, roast, sympathique, philosophique). Les réponses sont générées par l'IA à partir d'une base de données JSON (RAG).",
      technologies: ["HTML5", "CSS3", "JavaScript", "API Groq (Qwen3)", "Netlify Functions"],
      githubUrl: "https://github.com/ousmanely12/Chatbot-Intelligent",
      demoUrl: "https://chatbot-smi.netlify.app",
      featured: true,
      metrics: "RAG sur données JSON, cache des réponses, clé API protégée côté serveur"
    },
    {
      id: "dashboard-rh",
      title: "Dashboard RH — Gestion des Employés",
      category: "web",
      description: "Application web de gestion des ressources humaines : fiches employés, gestion des congés et organigramme de l'entreprise. Développée en JavaScript vanilla, sans framework.",
      technologies: ["HTML5", "CSS3", "JavaScript", "localStorage"],
      githubUrl: "https://github.com/ousmanely12/dashboard-rh",
      demoUrl: "https://ousmanely12.github.io/dashboard-rh/",
      featured: true,
      metrics: "CRUD complet, recherche en temps réel, pagination, organigramme SVG"
    }
  ],
  education: [
    {
      period: "2025 - 2026",
      title: "L3 Informatique de Gestion (en cours)",
      institution: "SMI - Thiès",
      description: "Approfondissement en génie logiciel, architectures web, bases de données avancées et gestion de projet."
    },
    {
      period: "2024 - 2025",
      title: "L2 Informatique de Gestion & L2 Anglais",
      institution: "SMI & UCAD",
      description: "Double cursus technique et linguistique pour une meilleure maîtrise de la communication internationale."
    },
    {
      period: "2023 - 2024",
      title: "L1 Informatique de Gestion & L1 Anglais",
      institution: "SMI & UCAD",
      description: "Bases algorithmiques, programmation web et consolidation de l'expression anglaise."
    },
    {
      period: "2022 - 2023",
      title: "Baccalauréat & L1",
      institution: "Lycée de Bambey",
      description: "Obtention du baccalauréat scientifique et initiation aux sciences fondamentales."
    }
  ],
  experiences: [
    {
      period: "2025 - 2026",
      role: "Président du Club Numérique",
      organization: "SMI",
      description: "Animation d'ateliers tech, sensibilisation aux outils numériques et coordination des initiatives étudiantes."
    },
    {
      period: "2025 - 2026",
      role: "Créateur de Contenu & Référent Digital",
      organization: "XAMTECH Challenge",
      description: "Conception des visuels, montage de vidéos et génération de contenus innovants intégrant l'intelligence artificielle pour la compétition."
    }
  ],
  languages: [
    { name: "Français", level: "80%", desc: "Courant / Langue de travail" },
    { name: "Anglais", level: "50%", desc: "Intermédiaire / Cursus UCAD" }
  ]
};
