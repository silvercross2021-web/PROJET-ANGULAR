import { IProject } from '../models/IProject';

export const ENRICHED_PROJECTS: IProject[] = [
  {
    id: 1,
    titre: 'Justice-Guide AI',
    slug: 'justice-guide-ai',
    categorie: 'Hackathons & IA',
    resume: '1er Prix du Hackathon DevFest Abidjan 2025 — Assistant juridique intelligent dédié au droit ivoirien.',
    description:
      "Lauréat du 1er Prix au Hackathon DevFest Abidjan 2025, Justice-Guide AI est une plateforme conçue pour rapprocher les citoyens, les étudiants et les professionnels des textes de loi de la République de Côte d'Ivoire. Face à la complexité du vocabulaire juridique, l'application permet de poser une question en langage courant (en français ou avec des expressions locales) et d'obtenir instantanément une réponse claire, pédagogique et appuyée sur les textes officiels en vigueur.",
    architecture_details:
      "L'interface offre une expérience de discussion fluide où chaque conseil juridique mentionne les articles de loi de référence afin de garantir une information fiable et vérifiable. La plateforme intègre également un générateur de démarches pratiques (contrats, courriers administratifs, procédures de recours) ainsi qu'un mode d'écoute vocale pour accompagner tous les profils d'utilisateurs.",
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85',
    galerie_images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85'
    ],
    technologies_liste: ['Python', 'Intelligence Artificielle', 'Traitement du Langage', 'Application Web', 'Synthèse Vocale'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: 'Novembre 2025',
    est_mis_en_avant: true,
    est_prive: true,
    couleur_primaire: '#0f172a',
    couleur_secondaire: '#1d4ed8'
  },
  {
    id: 2,
    titre: 'AOCEDA',
    slug: 'aoceda',
    categorie: 'Recherche & IoT',
    resume: 'Finaliste SIREXE (Novembre 2026) — Plateforme intelligente de suivi énergétique et assistant IA.',
    description:
      "Sélectionné comme projet finaliste au Salon International des Ressources Extractives et Énergétiques (SIREXE), AOCEDA est une solution complète qui aide les ménages et les entreprises en Côte d'Ivoire à suivre et maîtriser leur consommation d'électricité en temps réel. Grâce à son tableau de bord intuitif sur web et mobile, l'utilisateur visualise sa puissance instantanée, sa consommation journalière et l'estimation de sa facture mensuelle en FCFA avant toute mauvaise surprise.",
    architecture_details:
      "La plateforme intègre un système d'alertes intelligentes en cas de dépassement de seuil, de consommation nocturne inhabituelle ou de baisse de crédit sur compteur prépayé. Elle embarque également l'Assistante Énergie AOCEDA, un conseiller virtuel capable d'analyser les habitudes du foyer, d'expliquer la tarification CIE et de proposer des recommandations concrètes pour réduire la facture électrique.",
    image: 'assets/projects/aoceda-dashboard.png',
    galerie_images: [
      'assets/projects/aoceda-dashboard.png',
      'assets/projects/aoceda-ia.png',
      'assets/projects/aoceda-alertes.png',
      'assets/projects/aoceda-mobile.png',
      'assets/projects/aoceda-historique.png'
    ],
    technologies_liste: ['IoT & Capteurs Connectés', 'Python / Django', 'Assistant IA Énergie', 'Web & Mobile', 'Temps Réel'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: 'Novembre 2026',
    est_mis_en_avant: true,
    est_prive: true,
    couleur_primaire: '#064e3b',
    couleur_secondaire: '#d97706'
  },
  {
    id: 3,
    titre: 'KOMOE BudgetOuvert',
    slug: 'komoe',
    categorie: 'Hackathons & IA',
    resume: 'Hackathon MIABE 2026 — Plateforme citoyenne et blockchain de transparence budgétaire pour les 201 communes de Côte d’Ivoire.',
    description:
      "Conçu lors du MIABE Hackathon 2026, KOMOE BudgetOuvert répond à un enjeu civique majeur : rendre l'utilisation des budgets publics des 201 communes ivoiriennes accessible, lisible et infalsifiable pour chaque citoyen. Là où les documents budgétaires restent souvent complexes ou difficiles d'accès, KOMOE transforme chaque ligne de recette et de dépense municipale en une information visuelle claire et vérifiable publiquement.",
    architecture_details:
      "Développée dans le cadre du Hackathon MIABE, la plateforme s'appuie sur la blockchain pour garantir qu'aucune dépense publiée ne puisse être modifiée a posteriori. Les citoyens disposent d'une carte interactive des communes, d'un suivi de l'avancement des projets locaux (écoles, voiries, centres de santé) et d'un espace de participation citoyenne pour signaler l'état réel des infrastructures sur le terrain.",
    image: 'assets/projects/komoe-hero.png',
    galerie_images: [
      'assets/projects/komoe-hero.png',
      'assets/projects/komoe-impact.png',
      'assets/projects/komoe-blockchain.png',
      'assets/projects/komoe-section.png'
    ],
    technologies_liste: ['Hackathon MIABE 2026', 'React', 'Tailwind CSS', 'Blockchain & Transparence', 'Visualisation de Données'],
    github: 'https://github.com/silvercross2021-web',
    live: 'https://kamao-drab.vercel.app',
    annee: '2026',
    est_mis_en_avant: true,
    est_prive: true,
    couleur_primaire: '#1e1b4b',
    couleur_secondaire: '#ea580c'
  },
  {
    id: 4,
    titre: 'CIV-EYE 360',
    slug: 'civ-eye-360',
    categorie: 'Hackathons & IA',
    resume: 'Hackathon SIADE — Plateforme d’observation satellitaire pour la protection des forêts et la lutte contre l’orpaillage illégal.',
    description:
      "Réalisé lors du Hackathon SIADE, CIV-EYE 360 est un outil d'aide à la décision destiné à la préservation du patrimoine forestier et hydrique en Côte d'Ivoire. Le projet permet de surveiller de vastes zones naturelles depuis l'espace afin de repérer rapidement la déforestation, l'installation de chantiers d'orpaillage clandestin et la dégradation de la qualité des cours d'eau.",
    architecture_details:
      "Grâce à une interface cartographique claire pensée pour les équipes de terrain et les autorités environnementales, la plateforme compare l'évolution des paysages entre deux dates, met en évidence les zones à risque et génère des alertes géolocalisées. Cela permet de cibler les interventions sur le terrain tout en réduisant considérablement le temps d'inspection.",
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85',
    galerie_images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=85',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&q=85'
    ],
    technologies_liste: ['Imagerie Satellitaire', 'Intelligence Artificielle', 'Cartographie Interactive', 'Python', 'React'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: '2026',
    est_mis_en_avant: true,
    est_prive: true,
    couleur_primaire: '#042f2e',
    couleur_secondaire: '#0284c7'
  },
  {
    id: 5,
    titre: 'Garitiket',
    slug: 'garitiket',
    categorie: 'Entreprise & Freelance',
    resume: 'Plateforme en ligne de réservation de billets de car interurbains et de location de véhicules en Côte d’Ivoire.',
    description:
      "Garitiket modernise le voyage interurbain en Côte d'Ivoire en permettant aux passagers de réserver leurs billets de car en quelques clics, sans avoir à se déplacer en gare à l'avance. Que ce soit pour relier Abidjan, Yamoussoukro, Bouaké ou San-Pédro, l'utilisateur compare facilement les horaires, choisit son trajet et réserve sa place en toute simplicité.",
    architecture_details:
      "Le parcours voyageur a été pensé en trois étapes simples : sélection de l'itinéraire, paiement sécurisé en ligne (notamment via Mobile Money) et réception immédiate d'un billet électronique muni d'un QR Code à scanner lors de l'embarquement. La plateforme propose également un service de location de cars pour les voyages de groupe et un accompagnement client disponible 24h/24.",
    image: 'assets/projects/garitiket-section1.png',
    galerie_images: [
      'assets/projects/garitiket-section1.png',
      'assets/projects/garitiket-section2.png'
    ],
    technologies_liste: ['Application Web', 'Billetterie QR Code', 'Paiement Mobile Money', 'Réservation Temps Réel', 'UI/UX Design'],
    github: 'https://github.com/silvercross2021-web',
    live: 'https://gariticket.ci/home',
    annee: '2025',
    est_mis_en_avant: true,
    est_prive: true,
    couleur_primaire: '#7c2d12',
    couleur_secondaire: '#ea580c'
  },
  {
    id: 6,
    titre: 'DEJUC International',
    slug: 'dejuc',
    categorie: 'Entreprise & Freelance',
    resume: 'Portail numérique, cabinet juridique et plateforme d’investissement immobilier de DEJUC International Group.',
    description:
      "Conçu et piloté en tant que Responsable du Pôle Informatique de DEJUC International Group, ce portail institutionnel réunit l'ensemble des activités du cabinet en Côte d'Ivoire et en Afrique francophone : sécurité juridique, création d'entreprises, médiation, arbitrage et accompagnement stratégique des investisseurs et de la diaspora.",
    architecture_details:
      "En plus de présenter les 6 pôles d'expertise du groupe et ses publications d'actualité juridique, la plateforme intègre l'espace dédié « DEJUC Invest Immo ». Ce module permet aux acquéreurs de rechercher des biens immobiliers et fonciers audités par le cabinet (filtrage par commune, type de bien et budget en FCFA) et de demander une consultation directement en ligne.",
    image: 'assets/projects/dejuc-live-home.png',
    galerie_images: [
      'assets/projects/dejuc-live-home.png',
      'assets/projects/dejuc-live-immo.png',
      'assets/projects/dejuc-live-section.png',
      'assets/projects/dejuc-live-services.png'
    ],
    technologies_liste: ['Python / Django', 'Portail Institutionnel', 'Module Immobilier', 'Prise de Rendez-vous', 'Sécurité Web'],
    github: 'https://github.com/silvercross2021-web',
    live: 'https://dejucinternational.com',
    annee: 'Fin 2024 — 2025',
    est_mis_en_avant: true,
    est_prive: true,
    couleur_primaire: '#0f172a',
    couleur_secondaire: '#b91c1c'
  },
  {
    id: 7,
    titre: 'e-Marché Treichville',
    slug: 'e-marche-treichville',
    categorie: 'Web & Logiciel',
    resume: 'Plateforme numérique de gestion des étals, des commerçants et des taxes pour le Grand Marché de Treichville.',
    description:
      "Développé pour moderniser la gestion du Grand Marché de Treichville à Abidjan, e-Marché est une plateforme web qui facilite le recensement des commerçants, l'attribution des étals et le suivi quotidien des activités du marché. Elle remplace les registres papier par un système centralisé, transparent et accessible aux équipes municipales comme aux gestionnaires.",
    architecture_details:
      "L'application permet d'attribuer à chaque commerçant et à chaque emplacement un identifiant unique vérifiable rapidement sur le terrain. Les gestionnaires disposent d'une vue d'ensemble sur le taux d'occupation des secteurs du marché, l'historique des paiements de redevances et les demandes d'attribution en attente.",
    image: 'assets/projects/treichville-marche-2.jpg',
    galerie_images: [
      'assets/projects/treichville-marche-2.jpg',
      'assets/projects/marche-treichville-app.png',
      'assets/projects/treichville-marche-1.jpg',
      'assets/projects/treichville-marche-3.jpg'
    ],
    technologies_liste: ['Python / Django', 'Gestion Municipale', 'Tableau de Bord', 'Traçabilité QR Code', 'Base de Données'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: '2025',
    est_mis_en_avant: false,
    est_prive: true,
    couleur_primaire: '#065f46',
    couleur_secondaire: '#059669'
  },
  {
    id: 8,
    titre: 'BRVM Intelligence',
    slug: 'brvm-intelligence',
    categorie: 'Hackathons & IA',
    resume: 'Plateforme d’analyse boursière et d’aide à la décision dédiée aux actions de la BRVM.',
    description:
      "BRVM Intelligence est un outil pensé pour les investisseurs particuliers et professionnels souhaitant suivre plus simplement les valeurs cotées à la Bourse Régionale des Valeurs Mobilières (BRVM) de l'espace UEMOA. La plateforme rassemble dans une interface unique les cours des actions, leur évolution historique et les grandes tendances du marché régional.",
    architecture_details:
      "Pour faciliter la prise de décision, la solution synthétise les performances de chaque entreprise cotée à travers des indicateurs visuels lisibles et un assistant d'analyse qui résume les points forts, la dynamique du secteur et le profil de risque de chaque titre.",
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=85',
    galerie_images: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=85',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=85'
    ],
    technologies_liste: ['Python', 'Analyse Financière BRVM', 'Visualisation Boursière', 'Intelligence Artificielle', 'Dashboard Web'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: '2026',
    est_mis_en_avant: false,
    est_prive: true,
    couleur_primaire: '#111827',
    couleur_secondaire: '#10b981'
  },
  {
    id: 9,
    titre: "N'SAPKA",
    slug: 'nsapka',
    categorie: 'Web & Logiciel',
    resume: 'Application mobile mettant en valeur le savoir-faire des artisans ivoiriens et africains.',
    description:
      "N'SAPKA est une application mobile dédiée à la promotion de l'artisanat africain (sculpture, tissage, poterie, bijouterie, maroquinerie). Elle permet aux artisans locaux d'exposer leurs créations auprès d'une clientèle nationale et internationale, tout en racontant l'histoire culturelle derrière chaque pièce.",
    architecture_details:
      "Conçue pour être accessible à tous les artisans, même ceux peu familiers avec le numérique, l'application propose une navigation épurée, une assistance vocale pour faciliter la mise en ligne des produits, une messagerie directe acheteur-artisan et le suivi des commandes.",
    image: 'assets/projects/nsapka-cover.jpg',
    galerie_images: [
      'assets/projects/nsapka-cover.jpg',
      'assets/projects/nsapka-art.jpg'
    ],
    technologies_liste: ['Flutter', 'Dart', 'Application Mobile iOS & Android', 'E-Commerce Culturel', 'Assistance Vocale'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: '2025',
    est_mis_en_avant: false,
    est_prive: true,
    couleur_primaire: '#451a03',
    couleur_secondaire: '#d97706'
  },
  {
    id: 10,
    titre: "Hack'IT 2025",
    slug: 'hackit-2025-photoshop',
    categorie: 'Créations Photoshop',
    resume: 'Création graphique réalisée sur Adobe Photoshop pour le Hackathon Hack’IT 2025 de l’Institut Ivoirien de Technologie (IIT).',
    description:
      "Réalisée dans le cadre de nos travaux pratiques et projets de design graphique à l'Institut Ivoirien de Technologie (IIT), cette affiche officielle met en scène l'édition 2025 du hackathon étudiant « Hack'IT 2025 : 24h pour coder, sécuriser, innover » organisé sur le campus de l'IIT.",
    architecture_details:
      "Le travail sous Adobe Photoshop combine une direction artistique futuriste autour de l'intelligence artificielle et de la cybersécurité (androïde éclairé de néons bleus sur une trame hexagonale technologique), une hiérarchie typographique percutante pour les informations clés de l'événement (15–16 mai 2025, Campus IIT) et l'intégration harmonieuse des partenaires (Orange, Life TV, ARTCI).",
    image: 'assets/projects/ps-hackit-2025.jpg',
    galerie_images: [
      'assets/projects/ps-hackit-2025.jpg',
      'assets/projects/ps-bk-store.jpg',
      'assets/projects/ps-cruise-graphics.jpg'
    ],
    technologies_liste: ['Adobe Photoshop', 'Direction Artistique', 'Affiche Événementielle', 'Typographie', 'Retouche & Compositing'],
    github: '',
    live: '',
    annee: '2025',
    est_mis_en_avant: false,
    est_prive: false,
    couleur_primaire: '#081b33',
    couleur_secondaire: '#0284c7'
  },
  {
    id: 11,
    titre: 'BK Store',
    slug: 'bk-store-photoshop',
    categorie: 'Créations Photoshop',
    resume: 'Affiche publicitaire et couverture éditoriale monochrome conçue sur Adobe Photoshop pour la marque de mode BK Store.',
    description:
      "Conçue sur Adobe Photoshop dans le cadre de nos réalisations en communication visuelle et design graphique, cette création adopte les codes des grands magazines de mode internationaux pour promouvoir la collection de printemps de l'enseigne « BK Store » autour des thèmes « Fashion Forward », « The New Beauty » et « Elegance ».",
    architecture_details:
      "La composition repose sur un traitement photographique noir et blanc à fort contraste qui met en valeur le portrait central et ses textures. Le titre « BK STORE » bénéficie d'un effet de texture patinée sur police à empattements, complété par un équilibrage précis des blocs typographiques latéraux et d'un macaron promotionnel « -20% Exclu en ligne ».",
    image: 'assets/projects/ps-bk-store.jpg',
    galerie_images: [
      'assets/projects/ps-bk-store.jpg',
      'assets/projects/ps-cruise-graphics.jpg',
      'assets/projects/ps-hackit-2025.jpg'
    ],
    technologies_liste: ['Adobe Photoshop', 'Design Éditorial', 'Mode & Branding', 'Retouche Monochrome', 'Mise en Page Magazine'],
    github: '',
    live: '',
    annee: '2025',
    est_mis_en_avant: false,
    est_prive: false,
    couleur_primaire: '#334155',
    couleur_secondaire: '#64748b'
  },
  {
    id: 12,
    titre: 'CruiseGraphics',
    slug: 'cruise-graphics-photoshop',
    categorie: 'Créations Photoshop',
    resume: 'Visuel promotionnel et identité de marque créés sur Adobe Photoshop pour une agence de design et de création digitale.',
    description:
      "Réalisée sous Adobe Photoshop lors de nos projets de création graphique, cette affiche promotionnelle (« Unique Designs — Elevate Your Brand ») met en avant les prestations d'une agence créative spécialisée en identité visuelle, supports de communication et conception de sites web.",
    architecture_details:
      "Le visuel associe un détourage haute précision d'un portrait valorisant l'élégance culturelle africaine sur un fond vert profond, une typographie impactante en arrière-plan, la mise en avant de la suite créative Adobe (Photoshop, Illustrator, Lightroom, InDesign, Premiere Pro, After Effects) ainsi qu'un bandeau inférieur structuré intégrant contact et QR Code.",
    image: 'assets/projects/ps-cruise-graphics.jpg',
    galerie_images: [
      'assets/projects/ps-cruise-graphics.jpg',
      'assets/projects/ps-hackit-2025.jpg',
      'assets/projects/ps-bk-store.jpg'
    ],
    technologies_liste: ['Adobe Photoshop', 'Identité Visuelle', 'Social Media Design', 'Détourage & Colorimétrie', 'Communication Digitale'],
    github: '',
    live: '',
    annee: '2025',
    est_mis_en_avant: false,
    est_prive: false,
    couleur_primaire: '#052e16',
    couleur_secondaire: '#ea580c'
  },
  {
    id: 13,
    titre: 'ÉGÉA',
    slug: 'egea',
    categorie: 'Créatif & Interactif',
    resume: 'Expérience web interactive en 3D présentant une maison contemporaine sous toutes ses coutures.',
    description:
      "ÉGÉA est une vitrine web interactive qui plonge le visiteur au cœur d'une résidence contemporaine modélisée en 3D. Au fur et à mesure que l'utilisateur fait défiler la page, la caméra se déplace avec fluidité autour de l'architecture pour révéler les espaces, les matériaux et les ambiances lumineuses.",
    architecture_details:
      "Pensée pour les architectes et les promoteurs immobiliers haut de gamme, l'expérience offre une immersion visuelle directe dans le navigateur web, sur ordinateur comme sur mobile, sans nécessiter le téléchargement d'une application externe.",
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
    galerie_images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85'
    ],
    technologies_liste: ['Three.js / WebGL', 'GSAP', 'Design Interactif 3D', 'Immobilier de Prestige'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: '2024',
    est_mis_en_avant: false,
    est_prive: true,
    couleur_primaire: '#064e3b',
    couleur_secondaire: '#0f766e'
  },
  {
    id: 14,
    titre: 'Parc IT Odoo',
    slug: 'gestion-parc-odoo',
    categorie: 'Entreprise & Freelance',
    resume: 'Solution de gestion de parc informatique, de suivi de matériel et d’assistance technique en entreprise.',
    description:
      "Développé pour répondre aux besoins des directions informatiques, ce module intégré à l'ERP Odoo permet de suivre l'ensemble du cycle de vie des équipements d'une entreprise : ordinateurs, serveurs, licences logicielles et périphériques attribués aux collaborateurs.",
    architecture_details:
      "La solution simplifie le quotidien des équipes support grâce à une gestion centralisée des pannes et des maintenances, des rappels automatiques avant l'expiration des garanties et l'édition rapide de fiches d'attribution de matériel.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85',
    galerie_images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85'
    ],
    technologies_liste: ['Python', 'Odoo ERP', 'Gestion de Parc IT', 'PostgreSQL', 'Rapports PDF'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: '2024',
    est_mis_en_avant: false,
    est_prive: true,
    couleur_primaire: '#3b0764',
    couleur_secondaire: '#6d28d9'
  },
  {
    id: 15,
    titre: 'SchoolManager .NET',
    slug: 'school-manager-net',
    categorie: 'Web & Logiciel',
    resume: 'Application de gestion académique, des inscriptions, des notes et de la scolarité pour établissements.',
    description:
      "SchoolManager .NET accompagne les établissements scolaires et universitaires dans la numérisation complète de leur administration : inscription des élèves et étudiants, suivi des paiements de scolarité, saisie des notes et organisation des emplois du temps.",
    architecture_details:
      "L'application fait gagner un temps précieux aux équipes pédagogiques en automatisant le calcul des moyennes par matière et par semestre, ainsi que l'édition des bulletins scolaires, des relevés de notes et des reçus de paiement.",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85',
    galerie_images: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=85'
    ],
    technologies_liste: ['C#', 'ASP.NET Core', 'SQL Server', 'Gestion Académique'],
    github: 'https://github.com/silvercross2021-web',
    live: '',
    annee: '2024',
    est_mis_en_avant: false,
    est_prive: true,
    couleur_primaire: '#1e1b4b',
    couleur_secondaire: '#2563eb'
  }
];
