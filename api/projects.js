import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'GET') {
      let projects = [];
      try {
        const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
        if (data && data.length) {
          projects = data.map(p => normalizeProject(p));
        }
      } catch (e) {}

      if (!projects || !projects.length) {
        projects = defaultProjects.map(p => normalizeProject(p));
      }

      return res.status(200).json(projects);
    }

    if (req.method === 'POST') {
      const proj = req.body;
      if (!proj.id) proj.id = Date.now().toString();
      const { data, error } = await supabase.from('projects').insert([proj]).select();
      if (error) throw error;
      return res.status(201).json(data[0]);
    }

    if (req.method === 'PUT') {
      const proj = req.body;
      const { data, error } = await supabase.from('projects').update(proj).eq('id', proj.id).select();
      if (error) throw error;
      return res.status(200).json(data[0]);
    }

    if (req.method === 'DELETE') {
      const { id } = req.query;
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
      return res.status(200).json({ success: true });
    }

    res.status(455).end(`Method ${req.method} Not Allowed`);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
