import { IProject } from '../models/IProject';

export const ENRICHED_PROJECTS: IProject[] = [
  {
    id: 'justice-guide-ai',
    slug: 'justice-guide-ai',
    titre: 'Justice-Guide AI',
    categorie: 'Hackathons & IA',
    annee: 'Novembre 2025',
    est_mis_en_avant: true,
    couleur_primaire: '#10b981',
    couleur_secondaire: '#059669',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Assistant juridique IA multilingue (Français, Dioula, Baoulé) — 1er Prix du Hackathon DevFest Abidjan 2025.',
    description: "Conçu lors du Hackathon DevFest Abidjan 2025 organisé par Google Developer Groups (GDG Abidjan), où il a remporté la 1ère place, Justice-Guide AI répond à un problème concret : la méconnaissance des textes de loi par une grande partie de la population ivoirienne en raison de la complexité du jargon juridique et de la barrière linguistique. La plateforme permet à tout citoyen de poser une question de droit (droit du travail, foncier, famille, consommation) à l'écrit ou à la voix, et d'obtenir instantanément une explication claire, sourcée article par article, en Français ainsi qu'en langues locales (Dioula et Baoulé).",
    architecture_details: "Le cœur du système repose sur une architecture RAG (Retrieval-Augmented Generation) couplée à Sentence-Transformers pour vectoriser et indexer les codes juridiques ivoiriens. Contrairement à un chatbot classique sujet aux hallucinations, le moteur applique un seuil de similarité cosinus strict fixé à 65 % : si aucun article de loi officiel ne correspond avec certitude à la question posée, le système refuse d'inventer une réponse et oriente l'utilisateur vers un professionnel. Le backend est exposé via une API Django REST conteneurisée sur Google Cloud Run, reliée à un pipeline de transcription et de synthèse vocale pour l'accompagnement oral en Dioula et Baoulé.",
    technologies: 'Python, Django REST, Sentence-Transformers, RAG, Google Cloud (GCP), NLP, Synthèse Vocale (Dioula / Baoulé)',
    technologies_liste: ['Python', 'Django REST', 'Sentence-Transformers', 'Architecture RAG', 'Google Cloud Run', 'NLP Multilingue', 'Synthèse Vocale'],
    live: '',
    github: 'https://github.com/silvercross2021-web'
  },
  {
    id: 'aoceda',
    slug: 'aoceda',
    titre: 'AOCEDA',
    categorie: 'Recherche & IoT',
    annee: 'Novembre 2026',
    est_mis_en_avant: true,
    couleur_primaire: '#f59e0b',
    couleur_secondaire: '#d97706',
    image: 'https://images.unsplash.com/photo-1558441719-8b489c63f7d1?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1558441719-8b489c63f7d1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Boîtier IoT ESP32 et plateforme web de suivi énergétique en temps réel — Finaliste national SIREXE 2026.',
    description: "AOCEDA est un système matériel et logiciel de suivi de consommation électrique pensé pour les ménages et PME en Côte d'Ivoire, retenu comme finaliste du Prix Liberté Énergie au salon international SIREXE (Novembre 2026). L'objectif est d'éliminer les surprises de facturation électrique : le boîtier mesure en continu l'intensité consommée sur les circuits domestiques, convertit ces mesures en coût financier réel selon les tranches tarifaires de la CIE, détecte les appareils énergivores ou restés allumés, et alerte l'utilisateur par tableau de bord web ainsi que par un assistant vocal local en Dioula.",
    architecture_details: "Sur le plan matériel, le prototype est assemblé autour d'un microcontrôleur ESP32 programmé en C++ (PlatformIO) et de capteurs de courant non-invasifs ZMCT103C, pour un coût de revient inférieur à 9 000 FCFA. L'algorithme d'échantillonnage RMS calibré atteint une précision de 99,6 % (écart résiduel de 0,4 %) avec détection automatique d'état ON/OFF par seuil hystérésis. En cas de coupure Wi-Fi, le système stocke jusqu'à 16 heures de relevés dans la mémoire flash interne LittleFS avant synchronisation automatique. Les données sont diffusées en temps réel par WebSockets vers une interface Angular et un backend Django.",
    technologies: 'ESP32, C++ (PlatformIO), Capteurs ZMCT103C, LittleFS, Angular, Django, WebSockets',
    technologies_liste: ['ESP32', 'C++ / PlatformIO', 'Capteurs ZMCT103C', 'LittleFS', 'Angular', 'Django', 'WebSockets'],
    live: '',
    github: 'https://github.com/silvercross2021-web/AOCEADA'
  },
  {
    id: 'komoe',
    slug: 'komoe',
    titre: 'KOMOE BudgetOuvert',
    categorie: 'Hackathons & IA',
    annee: '2026',
    est_mis_en_avant: true,
    couleur_primaire: '#ea580c',
    couleur_secondaire: '#1e3a8a',
    image: 'assets/projects/komoe-hero.png',
    galerie_images: [
      'assets/projects/komoe-hero.png',
      'assets/projects/komoe-section.png'
    ],
    resume: 'Plateforme blockchain et web de transparence budgétaire pour les 201 communes de Côte d’Ivoire (Hackathon MIABE 2026).',
    description: "Réalisé dans le cadre du Hackathon MIABE 2026 (Darollo Technologies), KOMOE (BudgetOuvert) s'attaque à l'opacité de la gestion des finances locales. La plateforme permet aux 201 communes ivoiriennes de publier leurs budgets annuels, leurs appels d'offres et l'avancement des travaux publics de façon infalsifiable. Les citoyens peuvent consulter une carte interactive des communes, vérifier chaque ligne budgétaire en franc CFA, suivre l'avancement physique des chantiers (écoles, dispensaires, voirie) et soumettre des signalements citoyens géolocalisés avec preuves photos.",
    architecture_details: "L'écosystème s'articule autour d'une architecture hybride Web3 et Web2 : chaque validation ou décaissement budgétaire municipal génère une empreinte cryptographique ancrée sur la blockchain (Smart Contracts Solidity), rendant toute modification rétroactive impossible. L'interface citoyenne et la vitrine interactive sont développées en React 18 / Next.js avec visualisation cartographique des communes et indicateurs temps réel, adossées à une API Python (FastAPI / Django) et une base de données documentaire et relationnelle.",
    technologies: 'React 18, Next.js, Python, FastAPI, Blockchain (Solidity), MongoDB, Tailwind CSS',
    technologies_liste: ['React 18', 'Next.js', 'Python / FastAPI', 'Blockchain & Smart Contracts', 'MongoDB', 'Cartographie Interactive'],
    live: 'https://kamao-drab.vercel.app',
    github: 'https://github.com/silvercross2021-web/komoe_Miabe'
  },
  {
    id: 'civ-eye-360',
    slug: 'civ-eye-360',
    titre: 'CIV-EYE 360',
    categorie: 'Hackathons & IA',
    annee: '2025 - 2026',
    est_mis_en_avant: true,
    couleur_primaire: '#0284c7',
    couleur_secondaire: '#0369a1',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Centre de surveillance satellitaire par IA (Sentinel-2 & Google Earth Engine) pour l’urbanisme, l’agroécologie et la lutte contre l’orpaillage.',
    description: "Développé lors du Hackathon SIADE en Côte d'Ivoire, CIV-EYE 360 est un centre de commandement géospatial automatisé conçu pour assister les collectivités et ministères dans la surveillance du territoire. Le système comporte trois modules opérationnels : le Module 1 (Urbanisme) détecte les constructions illégales ou en zone à risque en croisant l'imagerie satellitaire avec le plan cadastral d'Abidjan (Treichville) ; le Module 2 (Agroécologie) surveille la déforestation et la santé végétale ; le Module 3 (Orpaillage) repère l'excavation minière clandestine et la turbidité des cours d'eau.",
    architecture_details: "Le pipeline géospatial ingère les images multispectrales du satellite européen Sentinel-2 entre deux dates (T1 et T2) ainsi que 39 810 empreintes réelles de bâtiments issues de Google Open Buildings V3 et 19 zones cadastrales de Treichville. Il calcule les variations d'indices spectraux (NDBI pour le bâti, BSI pour les sols nus, NDVI pour la végétation), applique un algorithme de clustering K-Means et un réseau de neurones siamois de détection de changement (TinyCD), puis filtre les résultats à travers 4 couches de validation croisée. Les 729 détections générées sont classées par niveau de criticité sur une carte interactive Django.",
    technologies: 'Python, Django, Google Earth Engine, Sentinel-2, TinyCD (Deep Learning), K-Means, GIS / PostGIS',
    technologies_liste: ['Python', 'Django', 'Sentinel-2 & GEE', 'Réseau Neuronal TinyCD', 'K-Means Clustering', 'Analyse Spectrale (NDVI/NDBI)', 'Cartographie GIS'],
    live: '',
    github: 'https://github.com/silvercross2021-web/ci-eye360'
  },
  {
    id: 'garitiket',
    slug: 'garitiket',
    titre: 'Garitiket',
    categorie: 'Entreprise & Freelance',
    annee: '2024 - 2025',
    est_mis_en_avant: true,
    couleur_primaire: '#3b82f6',
    couleur_secondaire: '#1d4ed8',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556742049-0a670fc8a5d7?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Plateforme web de réservation de billets de car interurbains avec paiement Mobile Money et contrôle par QR Code.',
    description: "Réalisée en mission freelance, Garitiket digitalise la vente de billets et la gestion des départs pour les compagnies de transport interurbain en Côte d'Ivoire. Au lieu de se déplacer physiquement en gare pour acheter un ticket papier, le voyageur consulte les horaires et les places disponibles en temps réel, règle son billet via Mobile Money (Wave, Orange Money, MTN MoMo) et reçoit instantanément son titre de transport numérique muni d'un QR Code unique.",
    architecture_details: "L'application repose sur un frontend Angular réactif couplé à une API REST Node.js et une base de données relationnelle PostgreSQL gérant le verrouillage transactionnel des sièges pour éviter toute double réservation. Chaque billet émis intègre une signature cryptographique encodée en QR Code, vérifiable hors-ligne ou en ligne par les agents d'embarquement en gare via une interface dédiée de compostage et de suivi des manifestes passagers.",
    technologies: 'Angular, TypeScript, Node.js, PostgreSQL, API Mobile Money (Wave / Orange / MTN), QR Code',
    technologies_liste: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Wave & Mobile Money API', 'QR Code Sécurisé'],
    live: 'https://gariticket.io',
    github: 'https://github.com/silvercross2021-web'
  },
  {
    id: 'dejuc-international',
    slug: 'dejuc-international',
    titre: 'DEJUC International',
    categorie: 'Entreprise & Freelance',
    annee: 'Fin 2024 - 2025',
    est_mis_en_avant: true,
    couleur_primaire: '#8b5cf6',
    couleur_secondaire: '#6d28d9',
    image: 'assets/projects/dejuc-cover.png',
    galerie_images: [
      'assets/projects/dejuc-cover.png',
      'assets/projects/dejuc-interior.png',
      'assets/projects/dejuc-blog.png'
    ],
    resume: 'Portail juridique et d’investissement immobilier international développé sous Django 5.2 pour DEJUC International Group.',
    description: "Développé en tant que Responsable du Pôle Informatique et Développeur Full-Stack au sein de DEJUC International Group, ce projet consiste en la refonte complète du portail numérique du cabinet. La plateforme présente les pôles d'expertise juridique, fiscale et d'accompagnement des investisseurs internationaux, intègre un système de prise de rendez-vous et de consultation, ainsi qu'un espace dédié aux opportunités d'investissement foncier et immobilier sécurisé (`invest_immo`) et aux publications d'analyses juridiques.",
    architecture_details: "Construit autour de Django 5.2 et PostgreSQL, le système est découpé en applications modulaires (`core`, `invest_immo`, gestion documentaire et blog juridique). Le back-office de direction a été entièrement personnalisé avec Django Unfold pour offrir aux juristes et gestionnaires une interface d'administration moderne. L'application intègre la compression et le service optimisé des actifs statiques (WhiteNoise), des tests automatisés de déploiement et une configuration de sécurité HTTPS de production.",
    technologies: 'Python, Django 5.2, PostgreSQL, Django Unfold, Tailwind CSS, Docker',
    technologies_liste: ['Python', 'Django 5.2', 'PostgreSQL', 'Django Unfold Admin', 'Module Invest Immo', 'Sécurité Web'],
    live: 'https://dejucinternational.com',
    github: 'https://github.com/silvercross2021-web/SITE-VITRINE-DEJUC'
  },
  {
    id: 'brvm-intelligence',
    slug: 'brvm-intelligence',
    titre: 'BRVM Intelligence',
    categorie: 'Hackathons & IA',
    annee: '2025',
    est_mis_en_avant: true,
    couleur_primaire: '#6366f1',
    couleur_secondaire: '#4338ca',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Système d’analyse boursière automatisée par IA couvrant les 48 sociétés cotées à la BRVM (Afrique de l’Ouest).',
    description: "BRVM Intelligence est un outil d'aide à la décision financière conçu pour les investisseurs de la Bourse Régionale des Valeurs Mobilières (BRVM — UEMOA). Chaque jour de bourse, le système collecte automatiquement les cours, volumes d'échanges, ratios financiers et actualités des 48 actions cotées sur SikaFinance, les croise avec le contexte macroéconomique régional (taux EUR/XOF, cours du cacao et du pétrole), et génère un rapport complet d'investissement : Top 5 des actions à acheter avec prix d'entrée, objectifs et stop-loss, valeurs à éviter, calendrier des dividendes sur 90 jours et simulation de portefeuille.",
    architecture_details: "Le moteur d'acquisition est développé en Python avec un collecteur automatisé résilient (Playwright / BeautifulSoup) qui extrait et structure les données de marché en JSON horodaté. Un orchestrateur d'agents (`agent_manager.py`) soumet ensuite les indicateurs techniques et fondamentaux par lots au modèle Google Gemini avec un cadrage analytique strict, puis compile automatiquement des rapports Markdown et Excel détaillés prêts à être exécutés.",
    technologies: 'Python, Google Gemini API, SikaFinance Scraper, Playwright, Analyse Financière, Automatisation',
    technologies_liste: ['Python', 'Google Gemini AI', 'Web Scraping Financier', 'Playwright', 'Analyse Quantitative BRVM', 'Automatisation'],
    live: '',
    github: 'https://github.com/silvercross2021-web'
  },
  {
    id: 'e-marche-treichville',
    slug: 'e-marche-treichville',
    titre: 'e-Marché Treichville',
    categorie: 'Web & Logiciel',
    annee: '2024 - 2025',
    est_mis_en_avant: false,
    couleur_primaire: '#0891b2',
    couleur_secondaire: '#0e7490',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Plateforme web municipale de gestion des commerçants, des étals et des taxes de marché pour la Mairie de Treichville.',
    description: "Conçu pour moderniser la gestion des marchés municipaux de la commune de Treichville, e-Marché remplace les registres manuels par une plateforme centralisée. L'application permet aux services municipaux d'enregistrer et d'identifier chaque commerçant, de géolocaliser et d'attribuer les étals par zone et secteur d'activité, de suivre l'encaissement des tickets et redevances journalières, de détecter les arriérés de paiement et d'éditer des bilans financiers en un clic.",
    architecture_details: "Développé sous Django 5.0 et Django REST Framework (DRF 3.14) avec une architecture en couches séparant strictement les modèles, les vues et une couche de services métiers dédiée (`services.py`). L'API REST est entièrement documentée avec Swagger / OpenAPI (`drf-yasg`), sécurisée par des permissions et middlewares personnalisés, et complétée par un moteur d'exportation de reçus et rapports officiels aux formats PDF (`ReportLab`) et Excel (`OpenPyXL`).",
    technologies: 'Python, Django 5, Django REST Framework, Swagger / OpenAPI, ReportLab (PDF), OpenPyXL (Excel)',
    technologies_liste: ['Python', 'Django 5.0', 'Django REST Framework', 'Swagger / OpenAPI', 'ReportLab PDF', 'OpenPyXL Excel'],
    live: '',
    github: 'https://github.com/silvercross2021-web/PROJET-MARCHE'
  },
  {
    id: 'nsapka',
    slug: 'nsapka',
    titre: "N'SAPKA",
    categorie: 'Entreprise & Freelance',
    annee: '2025',
    est_mis_en_avant: false,
    couleur_primaire: '#d97706',
    couleur_secondaire: '#92400e',
    image: 'assets/projects/nsapka-cover.jpg',
    galerie_images: [
      'assets/projects/nsapka-cover.jpg',
      'assets/projects/nsapka-art.jpg'
    ],
    resume: 'Application mobile Flutter connectant les artisans ivoiriens aux acheteurs avec ajout de produits par saisie vocale.',
    description: "N'SAPKA est une place de marché mobile dédiée à la valorisation de l'artisanat africain (sculptures, tissages, poteries, instruments traditionnels inspirés des artisans de Grand-Bassam). L'application propose une double interface : un espace Acheteur fluide (catalogue filtrable, éditions limitées, favoris, suivi de commande) et un espace Artisan simplifié incluant une fonctionnalité clé d'inclusion numérique : la création de fiches produits par commande vocale pour les artisans ne maîtrisant pas l'écrit.",
    architecture_details: "Développée en Flutter 3.9 et Dart 3.0 pour Android et iOS selon une architecture modulaire par fonctionnalités (`onboarding`, `auth`, `buyer`, `artisan`). La gestion d'état réactive est assurée par `Provider`, les appels réseau par `Dio`, avec prise en charge native de la caméra/galerie (`image_picker`), lecture vidéo de démonstration du savoir-faire artisanal (`video_player`) et stockage local persistant.",
    technologies: 'Flutter, Dart, Provider, Dio REST, Saisie Vocale, Android & iOS',
    technologies_liste: ['Flutter 3.9', 'Dart 3.0', 'Provider State', 'Dio HTTP', 'Saisie Vocale Inclusive', 'UI/UX Mobile'],
    live: '',
    github: 'https://github.com/silvercross2021-web'
  },
  {
    id: 'egea',
    slug: 'egea',
    titre: 'Égéa',
    categorie: 'Créatif & Interactif',
    annee: '2025',
    est_mis_en_avant: false,
    couleur_primaire: '#ec4899',
    couleur_secondaire: '#be185d',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Expérience web narrative interactive synchronisant le défilement de la page avec le décodage vidéo à 60 FPS.',
    description: "Égéa est une exploration technique et artistique autour du storytelling web immersif. Au fur et à mesure que l'utilisateur fait défiler la page, la séquence vidéo en arrière-plan avance ou recule image par image en parfaite harmonie avec les chapitres narratifs qui apparaissent à l'écran, offrant une sensation cinématographique fluide inspirée des expériences primées sur Awwwards.",
    architecture_details: "L'animation repose sur un conteneur de défilement étendu (`760vh`) piloté par GSAP ScrollTrigger et Locomotive Scroll. Afin d'éviter tout saccadement lors du scrubbing vidéo, les frames sont préchargées et rendues via `requestAnimationFrame` sur HTML5 Canvas à 60 images par seconde, avec interpolation fluide de l'opacité et de la typographie.",
    technologies: 'JavaScript, GSAP ScrollTrigger, Locomotive Scroll, HTML5 Canvas, Video Scrubbing',
    technologies_liste: ['JavaScript ES6+', 'GSAP ScrollTrigger', 'Locomotive Scroll', 'HTML5 Canvas 60fps', 'Creative Coding'],
    live: '',
    github: 'https://github.com/silvercross2021-web'
  },
  {
    id: 'parc-it-odoo',
    slug: 'parc-it-odoo',
    titre: 'Parc IT Odoo',
    categorie: 'Web & Logiciel',
    annee: '2024 - 2025',
    est_mis_en_avant: false,
    couleur_primaire: '#7c3aed',
    couleur_secondaire: '#5b21b6',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Module ERP Odoo sur mesure pour la gestion d’inventaire, l’affectation et la maintenance du parc informatique.',
    description: "Développé pour répondre aux besoins des directions informatiques (DSI), ce module personnalisé s'intègre nativement dans l'ERP Odoo afin de centraliser le suivi de l'ensemble des équipements matériels et licences logicielles d'une organisation : postes de travail, serveurs, attribution aux collaborateurs, suivi des garanties fournisseurs et gestion des tickets de panne ou de maintenance préventive.",
    architecture_details: "Conçu selon l'architecture ORM d'Odoo en Python et PostgreSQL, le module définit des modèles métiers dédiés avec calcul automatique de l'amortissement matériel, workflows d'état (`En stock`, `Affecté`, `En maintenance`, `Réformé`), vues Kanban et listes filtrables en XML QWeb, ainsi que des règles de sécurité par groupes d'utilisateurs.",
    technologies: 'Python, Odoo ERP, PostgreSQL, XML QWeb, JavaScript',
    technologies_liste: ['Python', 'Odoo ERP', 'PostgreSQL', 'XML QWeb', 'JavaScript'],
    live: '',
    github: 'https://github.com/silvercross2021-web'
  },
  {
    id: 'school-manager-net',
    slug: 'school-manager-net',
    titre: 'SchoolManager .NET',
    categorie: 'Web & Logiciel',
    annee: '2023 - 2024',
    est_mis_en_avant: false,
    couleur_primaire: '#475569',
    couleur_secondaire: '#1e293b',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    galerie_images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80'
    ],
    resume: 'Système complet de gestion scolaire et académique en architecture N-Tiers (C# .NET & SQL Server).',
    description: "SchoolManager .NET est une solution logicielle conçue pour informatiser l'administration des établissements d'enseignement : gestion des dossiers élèves et enseignants, organisation des classes et filières, suivi des échéanciers de scolarité, saisie des notes par matière avec pondération des coefficients, calcul automatique des moyennes et génération des bulletins scolaires officiels.",
    architecture_details: "L'application est structurée selon une architecture logicielle N-Tiers stricte en C# .NET séparant la couche de présentation, la couche logique métier (BLL) et la couche d'accès aux données (DAL) connectée à Microsoft SQL Server. Les opérations critiques s'appuient sur des procédures stockées transactionnelles et un générateur d'états imprimables.",
    technologies: 'C#, .NET, ASP.NET / WinForms, Microsoft SQL Server, Architecture N-Tiers',
    technologies_liste: ['C#', '.NET', 'ASP.NET / WinForms', 'SQL Server', 'Architecture N-Tiers'],
    live: '',
    github: 'https://github.com/silvercross2021-web'
  }
];
