import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Fallback data if tables are not fully populated in Supabase yet
const defaultProfil = {
  id: 1,
  nom: 'BROU',
  prenoms: 'Brandonne Davy',
  statut: 'Disponible pour opportunités',
  biographie: 'Développeur Full-Stack & passionné d\'IA avec une expertise en Angular, Cloud et architectures modernes.',
  photo_profil: 'https://ggnyiuyufltnulkmzchu.supabase.co/storage/v1/object/public/certifications/profile.jpg',
  cv: null
};

const defaultExperiences = [
  {
    id: 10,
    projet: 18,
    date_debut: '2025-01-01',
    date_fin: '2025-01-31',
    role: 'Participant Hackathon - Vainqueur',
    nom_entreprise: 'DevFest Abidjan 2025',
    description: 'Vainqueur du Hackathon DevFest Abidjan 2025 avec le projet Justice-Guide AI, une plateforme juridique IA multilingue (Français/Dioula/Baoulé) pour la Côte d\'Ivoire. Développement d\'une solution innovante en équipe dans un temps limité.',
    type_de_contrat: 'Hackathon',
    ordre_affichage: 0,
    services: ''
  },
  {
    id: 11,
    projet: null,
    date_debut: '2022-09-01',
    date_fin: null,
    role: 'Étudiant en Licence Génie Logiciel',
    nom_entreprise: 'Institut Ivoirien de Technologie (IIT)',
    description: 'Formation en Licence 3 Génie Logiciel à l\'Institut Ivoirien de Technologie. Apprentissage approfondi du développement logiciel, des bases de données, du développement web et mobile, ainsi que des méthodologies de gestion de projets.',
    type_de_contrat: 'Formation',
    ordre_affichage: 1,
    services: ''
  },
  {
    id: 12,
    projet: null,
    date_debut: '2020-09-01',
    date_fin: '2022-06-30',
    role: 'Étudiant',
    nom_entreprise: 'Collège Catholique Saint Jean Bosco',
    description: 'Formation secondaire au Collège Catholique Saint Jean Bosco. Développement des bases académiques et découverte de la programmation.',
    type_de_contrat: 'Formation',
    ordre_affichage: 2,
    services: ''
  }
];

const defaultServices = [
  {
    id: 19,
    nom: 'Programmation',
    detail: 'Maîtrise de plusieurs langages de programmation pour le développement logiciel et web. Expérience en programmation orientée objet et développement d\'applications.',
    type_de_service: 'Compétence Technique',
    outils: 'Java, Dart, Python, C#, JavaScript, Angular, React, Flask',
    outils_liste: 'Java Dart Python C# JavaScript Angular React Flask',
    localisation: null,
    ordre_affichage: 0
  },
  {
    id: 20,
    nom: 'Développement Web & Mobile',
    detail: 'Développement d\'applications web et mobile modernes. Maîtrise des frameworks frontend et backend. Création d\'interfaces responsive et performantes.',
    type_de_service: 'Compétence Technique',
    outils: 'Flutter, Angular, Supabase, Node.js, HTML, CSS',
    outils_liste: 'Flutter Angular Supabase Node.js HTML CSS',
    localisation: null,
    ordre_affichage: 1
  },
  {
    id: 21,
    nom: 'Intelligence Artificielle & Cloud',
    detail: 'Intégration de modèles d\'IA, Prompt Engineering, automatisation et déploiement cloud sur GCP et Huawei Cloud.',
    type_de_service: 'Compétence Technique',
    outils: 'MindSpore, TensorFlow, GCP, Vercel, Supabase',
    outils_liste: 'MindSpore TensorFlow GCP Vercel Supabase',
    localisation: null,
    ordre_affichage: 2
  },
  {
    id: 22,
    nom: 'Bases de données',
    detail: 'Conception et gestion de bases de données relationnelles. Optimisation des requêtes et modélisation de données.',
    type_de_service: 'Compétence Technique',
    outils: 'PostgreSQL, Supabase, MySQL, SQL Server',
    outils_liste: 'PostgreSQL Supabase MySQL SQL Server',
    localisation: null,
    ordre_affichage: 3
  },
  {
    id: 23,
    nom: 'Systèmes d\'exploitation',
    detail: 'Maîtrise des environnements Windows, Linux openEuler et macOS. Administration système et automatisation.',
    type_de_service: 'Compétence Technique',
    outils: 'openEuler Linux, Bash, PowerShell, Docker',
    outils_liste: 'openEuler Linux Bash PowerShell Docker',
    localisation: null,
    ordre_affichage: 4
  },
  {
    id: 24,
    nom: 'Design & Graphisme',
    detail: 'Création de designs et prototypes pour applications et sites web.',
    type_de_service: 'Compétence Créative',
    outils: 'Figma, Photoshop',
    outils_liste: 'Figma Photoshop',
    localisation: null,
    ordre_affichage: 5
  },
  {
    id: 25,
    nom: 'Soft Skills',
    detail: 'Autonomie, résolution de problèmes sous pression, esprit d\'équipe et communication efficace.',
    type_de_service: 'Compétence Transversale',
    outils: 'Autonomie, Autodidacte, Esprit d\'équipe, Problem Solving',
    outils_liste: 'Autonomie Autodidacte Esprit d\'équipe Problem Solving',
    localisation: null,
    ordre_affichage: 6
  }
];

const defaultReseaux = [
  {
    id: 10,
    nom_plateforme: 'LinkedIn',
    lien: 'https://www.linkedin.com/in/kablan-christ-brandonne-davy-brou-devs-7b5ab6394/',
    ordre_affichage: 0
  },
  {
    id: 11,
    nom_plateforme: 'GitHub',
    lien: 'https://github.com/brandonnedavy',
    ordre_affichage: 1
  },
  {
    id: 12,
    nom_plateforme: 'Email',
    lien: 'mailto:brandonnebrou257@gmail.com',
    ordre_affichage: 2
  }
];

const defaultProjects = [
  {
    id: 18,
    titre: "Vainqueur Hackathon DevFest Abidjan 2025",
    slug: "hackathon-devfest-abidjan-2025",
    categorie: "Hackathon / IA",
    annee: "2025",
    resume: "Justice-Guide AI, plateforme juridique IA multilingue.",
    description: "Vainqueur du Hackathon DevFest Abidjan 2025 avec Justice-Guide AI, une plateforme juridique basée sur l'intelligence artificielle multilingue (Français/Dioula/Baoulé) pour la Côte d'Ivoire. Solution innovante facilitant l'accès à l'information juridique pour tous.",
    architecture_details: "Architecture Serverless & Microservices avec intégration de modèles NLP multilingues. Pipeline d'inférence temps réel hébergé sur Google Cloud avec API REST Django et frontend responsive Angular.",
    technologies: "IA, NLP, Multilingue, Python, Django, GCP",
    technologies_liste: ["IA", "NLP", "Multilingue", "Python", "Django", "GCP"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    couleur_primaire: "#6366f1",
    couleur_secondaire: "#a855f7",
    est_mis_en_avant: true
  },
  {
    id: 19,
    titre: "Gestion de Réservations (Flask)",
    slug: "gestion-reservations-flask",
    categorie: "Développement Web",
    annee: "2024",
    resume: "Application web de gestion de réservations avec Flask.",
    description: "Création d'une application web de gestion de réservations développée avec Flask. Système complet permettant la création, modification et suivi des réservations. Interface utilisateur intuitive et backend robuste avec tests unitaires.",
    architecture_details: "Application Flask basée sur le pattern MVC. Gestion de base de données relationnelle SQLite/PostgreSQL avec SQLAlchemy ORM et système d'authentification par cookies sécurisés.",
    technologies: "Python, Flask, SQLite, HTML, CSS, JavaScript",
    technologies_liste: ["Python", "Flask", "SQLite", "HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    couleur_primaire: "#3b82f6",
    couleur_secondaire: "#1d4ed8",
    est_mis_en_avant: true
  },
  {
    id: 20,
    titre: "Site E-Commerce (Django)",
    slug: "site-ecommerce-django",
    categorie: "Développement Web",
    annee: "2024",
    resume: "Site e-commerce complet avec Django.",
    description: "Création d'un site e-commerce servant à gérer les produits, les utilisateurs et les paniers. Projet universitaire complet incluant la gestion des commandes, panier d'achat et interface d'administration.",
    architecture_details: "Architecture Django MVT avec base PostgreSQL. Gestion de panier en session, paiements modulaires et panneau d'administration sur-mesure.",
    technologies: "Python, Django, PostgreSQL, Bootstrap, JavaScript",
    technologies_liste: ["Python", "Django", "PostgreSQL", "Bootstrap", "JavaScript"],
    image: "https://images.unsplash.com/photo-1556742049-0a670fc8a5d7?auto=format&fit=crop&w=800&q=80",
    couleur_primaire: "#10b981",
    couleur_secondaire: "#059669",
    est_mis_en_avant: true
  },
  {
    id: 21,
    titre: "Application de Gestion Scolaire (C#)",
    slug: "gestion-scolaire-csharp",
    categorie: "Développement Logiciel",
    annee: "2023",
    resume: "Application C# pour la gestion scolaire.",
    description: "Application C# WinForms pour la gestion scolaire (étudiants, professeurs, inscriptions, paiements et bulletins). Système complet avec gestion d'accès par rôles et rapports imprimables.",
    architecture_details: "Architecture N-Tiers (Présentation, Métier, Données) avec C# .NET et SQL Server. Procédures stockées et ADO.NET optimisés.",
    technologies: "C#, .NET, WinForms, SQL Server",
    technologies_liste: ["C#", ".NET", "WinForms", "SQL Server"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    couleur_primaire: "#f59e0b",
    couleur_secondaire: "#d97706",
    est_mis_en_avant: false
  },
  {
    id: 22,
    titre: "Agent d'Automatisation IA (RBN & Excel)",
    slug: "agent-automatisation-ia",
    categorie: "Automatisation / IA",
    annee: "2024",
    resume: "Agent IA pour automatiser la gestion Excel.",
    description: "Création d'un agent IA (RBN & OpenAI) pour automatiser la gestion Excel (lecture, écriture, alertes) via commandes vocales et textuelles en langage naturel.",
    architecture_details: "Intégration d'API LLM OpenAI avec traitement de fichiers OpenPyXL. Traitement automatique du langage naturel pour convertir les requêtes utilisateur en scripts de manipulation Excel.",
    technologies: "Python, OpenAI, RBN, Excel API, NLP",
    technologies_liste: ["Python", "OpenAI", "RBN", "Excel API", "NLP"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    couleur_primaire: "#8b5cf6",
    couleur_secondaire: "#6d28d9",
    est_mis_en_avant: true
  },
  {
    id: 23,
    titre: "Gestion de Parc Informatique Odoo",
    slug: "gestion-parc-informatique-odoo",
    categorie: "ERP / Gestion",
    annee: "2024",
    resume: "Module Odoo pour la gestion de parc informatique.",
    description: "Développement d'un module Odoo personnalisé pour l'inventaire, l'affectation et le suivi du cycle de vie du matériel informatique d'entreprise.",
    architecture_details: "Module Odoo Framework (Python/PostgreSQL/XML/JS) avec gestion d'états d'équipements, alertes de maintenance et vues Kanban/Liste personnalisées.",
    technologies: "Python, Odoo, PostgreSQL, XML, JavaScript",
    technologies_liste: ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    couleur_primaire: "#ec4899",
    couleur_secondaire: "#be185d",
    est_mis_en_avant: false
  }
];

function normalizeProject(p) {
  if (!p) return null;
  const titre = p.titre || p.title || 'Projet';
  const rawSlug = p.slug || p.id || (titre ? titre.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : 'projet');
  const slug = String(rawSlug);
  const categorie = p.categorie || p.category || 'Développement';
  const image = p.image || p.image_upload || p.imageUrl || 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80';
  const live = p.live || p.lien || p.demoUrl || '';
  const github = p.github || p.githubUrl || '';
  const description = p.description || p.resume || '';
  const resume = p.resume || p.description || '';
  const architecture_details = p.architecture_details || 'Architecture basée sur les meilleures pratiques modernes de développement web et cloud.';

  let techList = [];
  if (Array.isArray(p.technologies_liste) && p.technologies_liste.length) {
    techList = p.technologies_liste;
  } else if (Array.isArray(p.technologies) && p.technologies.length) {
    techList = p.technologies;
  } else if (typeof p.technologies === 'string' && p.technologies.trim()) {
    techList = p.technologies.split(',').map(s => s.trim());
  }

  return {
    ...p,
    id: p.id || slug,
    titre,
    title: titre,
    slug,
    categorie,
    category: categorie,
    image,
    imageUrl: image,
    live,
    demoUrl: live,
    github,
    githubUrl: github,
    description,
    resume,
    architecture_details,
    technologies_liste: techList,
    technologies: Array.isArray(p.technologies) ? p.technologies.join(', ') : (p.technologies || techList.join(', ')),
    couleur_primaire: p.couleur_primaire || '#6366f1',
    couleur_secondaire: p.couleur_secondaire || '#a855f7',
    annee: p.annee || '2025',
    est_mis_en_avant: p.est_mis_en_avant !== undefined ? p.est_mis_en_avant : (p.featured !== undefined ? p.featured : true)
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    let rawProjects = [];
    try {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data && data.length) rawProjects = data;
    } catch (e) {
      console.error('Error fetching projects from Supabase:', e);
    }

    let projects = [];
    if (rawProjects && rawProjects.length) {
      projects = rawProjects.map(p => normalizeProject(p));
    } else {
      projects = defaultProjects.map(p => normalizeProject(p));
    }

    // Return structured portfolio directly from Supabase / defaults
    return res.status(200).json({
      profil: defaultProfil,
      projets: projects,
      projets_mis_en_avant: projects.slice(0, 3),
      experiences: defaultExperiences,
      services: defaultServices,
      reseaux: defaultReseaux
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
