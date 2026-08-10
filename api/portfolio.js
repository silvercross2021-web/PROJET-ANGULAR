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
  photo_profil: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    let projects = [];
    try {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data && data.length) projects = data;
    } catch (e) {
      console.error('Error fetching projects from Supabase:', e);
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
