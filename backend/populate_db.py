import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from api.models import Utilisateur, Projet, Experience, Service, Localisation, ReseauSocial

# Supprimer les données existantes
print("Suppression des données existantes...")
Utilisateur.objects.all().delete()
Projet.objects.all().delete()
Experience.objects.all().delete()
Service.objects.all().delete()
Localisation.objects.all().delete()
ReseauSocial.objects.all().delete()

print("Création du profil utilisateur...")
utilisateur = Utilisateur.objects.create(
    nom="Brou Kablan",
    prenom="Brandonne Davy",
    photo_profil="https://media.licdn.com/dms/image/v2/D4E03AQE6YVjljD-cMg/profile-displayphoto-scale_400_400/B4EZu0wjBPKEAg-/0/1768264186694?e=1774483200&v=beta&t=_0OUljbdFJ3CwhNhpIpRrge65fjtqHr_mX87B_cswSA",
    description="Étudiant en 3ème année d'informatique (IIT), polyvalent et motivé, avec des compétences solides en développement "
                "logiciel et en développement web. J'aime relever les défis et je souhaite contribuer à des projets innovants tout en "
                "poursuivant mon apprentissage.",
    age=23,
    email="brandonnebrou257@gmail.com",
    lien_cv="/Brou_Kabkan_Christ-CV_fr.pdf",
    telephone="+225 0747476401/0143490039",
    titre="Étudiant en Licence 3 - Génie Logiciel",
    alias="BK",
    bio_courte="Étudiant en informatique passionné par le développement logiciel et web, toujours prêt à relever de nouveaux défis.",
    disponibilite="Disponible pour stages et projets",
    est_actif=True,
    ordre_affichage=0
)

print("Création de la localisation...")
localisation_ci = Localisation.objects.create(
    pays="Côte d'Ivoire",
    ville="Grand-Bassam",
    latitude=5.211111,
    longitude=-3.738889,
    quartier="Grand-Bassam",
    ordre_affichage=0
)

print("Création des réseaux sociaux...")
ReseauSocial.objects.create(
    utilisateur=utilisateur,
    nom_plateforme="LinkedIn",
    lien="https://www.linkedin.com/in/kablan-christ-brandonne-davy-brou-devs-7b5ab6394/",
    ordre_affichage=0
)

ReseauSocial.objects.create(
    utilisateur=utilisateur,
    nom_plateforme="GitHub",
    lien="https://github.com/brandonnedavy",
    ordre_affichage=1
)

ReseauSocial.objects.create(
    utilisateur=utilisateur,
    nom_plateforme="Email",
    lien="mailto:brandonnebrou257@gmail.com",
    ordre_affichage=2
)

print("Création des projets...")
projet1 = Projet.objects.create(
    utilisateur=utilisateur,
    titre="Vainqueur Hackathon D'Vest Abidjan 2025",
    slug="hackathon-dvest-abidjan-2025",
    categorie="Hackathon / IA",
    annee="2025",
    resume="Justice-Guide AI, plateforme juridique IA multilingue.",
    description="Vainqueur du Hackathon D'Vest Abidjan 2025 avec Justice-Guide AI, une plateforme juridique basée sur l'intelligence artificielle multilingue (Français/Dioula/Baoulé) pour la Côte d'Ivoire. Solution innovante facilitant l'accès à l'information juridique pour tous.",
    image="https://media.licdn.com/dms/image/v2/D4E22AQGzy62iZdGGFQ/feedshare-shrink_800/B4EZsFE6wLGUAg-/0/1765316734249?e=1774483200&v=beta&t=cqtNbv5PWaWm6qUlqpKxj_5UolvR_iF2ASfJdj0kmWU",
    lien="",
    github="",
    live="",
    couleur_primaire="#a8edea",
    couleur_secondaire="#fed6e3",
    technologies="IA, NLP, Multilingue, Python, Django",
    est_mis_en_avant=True,
    est_actif=True,
    ordre_affichage=0
)

projet2 = Projet.objects.create(
    utilisateur=utilisateur,
    titre="Projet Personnel : Gestion de Réservations (Flask)",
    slug="gestion-reservations-flask",
    categorie="Développement Web",
    annee="2024",
    resume="Application web de gestion de réservations avec Flask.",
    description="Création d'une application web de gestion de réservations développée avec Flask. Système complet permettant la création, modification et suivi des réservations. Interface utilisateur intuitive et backend robuste. Projet réalisé avec des tests unitaires pour garantir la fiabilité.",
    image="https://media.licdn.com/dms/image/v2/D4E22AQHrbpb2h4_9Bg/feedshare-shrink_2048_1536/B4EZuWCJ3VK4Aw-/0/1767748723550?e=1774483200&v=beta&t=g6G3D2Iw-MI9EcCeUU876s31j_rKRU9LsQTshrOIqh0",
    lien="",
    github="",
    live="",
    couleur_primaire="#cdb4f8",
    couleur_secondaire="#a8d8f8",
    technologies="Python, Flask, SQLite, HTML, CSS, JavaScript",
    est_mis_en_avant=True,
    est_actif=True,
    ordre_affichage=1
)

projet3 = Projet.objects.create(
    utilisateur=utilisateur,
    titre="Projet Académique : Site E-Commerce (Django)",
    slug="site-ecommerce-django",
    categorie="Développement Web",
    annee="2024",
    resume="Site e-commerce complet avec Django.",
    description="Création d'un site e-commerce (Django) servant à gérer les produits, les utilisateurs et les paniers. Projet universitaire complet incluant la gestion des commandes, système d'authentification, panier d'achat et interface d'administration. Architecture MVC respectée.",
    image="",
    lien="",
    github="",
    live="",
    couleur_primaire="#98f7c4",
    couleur_secondaire="#4adede",
    technologies="Python, Django, PostgreSQL, Bootstrap, JavaScript",
    est_mis_en_avant=False,
    est_actif=True,
    ordre_affichage=2
)

projet4 = Projet.objects.create(
    utilisateur=utilisateur,
    titre="Projet Académique : Application de Gestion Scolaire (C#)",
    slug="gestion-scolaire-csharp",
    categorie="Développement Logiciel",
    annee="2023",
    resume="Application C# pour la gestion scolaire.",
    description="Application C# pour la gestion scolaire (étudiants, professeurs, inscriptions et paiements). Système complet de gestion d'établissement scolaire avec interface Windows Forms. Gestion des notes, absences, emplois du temps et génération de rapports.",
    image="",
    lien="",
    github="",
    live="",
    couleur_primaire="#ffd6a5",
    couleur_secondaire="#ffb997",
    technologies="C#, .NET, WinForms, SQL Server",
    est_mis_en_avant=False,
    est_actif=True,
    ordre_affichage=3
)

projet5 = Projet.objects.create(
    utilisateur=utilisateur,
    titre="Agent d'Automatisation IA (RBN & Excel)",
    slug="agent-automatisation-ia",
    categorie="Automatisation / IA",
    annee="2024",
    resume="Agent IA pour automatiser la gestion Excel.",
    description="Création d'un agent IA (RBN & OpenAI) pour automatiser la gestion Excel (lecture, écriture, alertes) via commandes vocales et textuelles. Solution innovante permettant de manipuler des fichiers Excel par commandes naturelles, avec génération automatique de rapports et alertes intelligentes.",
    image="",
    lien="",
    github="",
    live="",
    couleur_primaire="#cdb4f8",
    couleur_secondaire="#fed6e3",
    technologies="Python, OpenAI, RBN, Excel API, NLP",
    est_mis_en_avant=True,
    est_actif=True,
    ordre_affichage=4
)

projet6 = Projet.objects.create(
    utilisateur=utilisateur,
    titre="Projet Académique : Gestion de Parc Informatique Odoo",
    slug="gestion-parc-informatique-odoo",
    categorie="ERP / Gestion",
    annee="2024",
    resume="Module Odoo pour la gestion de parc informatique.",
    description="Développement d'un module Odoo personnalisé pour l'inventaire, l'affectation et le suivi du cycle de vie du matériel informatique. Solution complète de gestion de parc incluant le tracking des équipements, maintenance préventive et génération de rapports.",
    image="",
    lien="",
    github="",
    live="",
    couleur_primaire="#a8d8f8",
    couleur_secondaire="#98f7c4",
    technologies="Python, Odoo, PostgreSQL, XML, JavaScript",
    est_mis_en_avant=False,
    est_actif=True,
    ordre_affichage=5
)

print("Création des expériences professionnelles...")
exp1 = Experience.objects.create(
    utilisateur=utilisateur,
    projet=projet1,
    date_debut="2025-01-01",
    date_fin="2025-01-31",
    role="Participant Hackathon - Vainqueur",
    nom_entreprise="D'Vest Abidjan 2025",
    description="Vainqueur du Hackathon D'Vest Abidjan 2025 avec le projet Justice-Guide AI, une plateforme juridique IA multilingue (Français/Dioula/Baoulé) pour la Côte d'Ivoire. Développement d'une solution innovante en équipe dans un temps limité.",
    type_de_contrat="Hackathon",
    est_actif=True,
    ordre_affichage=0
)

exp2 = Experience.objects.create(
    utilisateur=utilisateur,
    projet=None,
    date_debut="2022-09-01",
    date_fin=None,
    role="Étudiant en Licence Génie Logiciel",
    nom_entreprise="Institut Ivoirien de Technologie (IIT)",
    description="Formation en Licence 3 Génie Logiciel à l'Institut Ivoirien de Technologie. Apprentissage approfondi du développement logiciel, des bases de données, du développement web et mobile, ainsi que des méthodologies de gestion de projets.",
    type_de_contrat="Formation",
    est_actif=True,
    ordre_affichage=1
)

exp3 = Experience.objects.create(
    utilisateur=utilisateur,
    projet=None,
    date_debut="2020-09-01",
    date_fin="2022-06-30",
    role="Étudiant",
    nom_entreprise="Collège Catholique Saint Jean Bosco",
    description="Formation secondaire au Collège Catholique Saint Jean Bosco. Développement des bases académiques et découverte de la programmation.",
    type_de_contrat="Formation",
    est_actif=True,
    ordre_affichage=2
)

print("Création des services/compétences...")
Service.objects.create(
    experience=None,
    localisation=None,
    nom="Programmation",
    detail="Maîtrise de plusieurs langages de programmation pour le développement logiciel et web. Expérience en programmation orientée objet et développement d'applications.",
    type_de_service="Compétence Technique",
    outils="Java, Dart, Python, C#, JavaScript, React, Flask",
    est_actif=True,
    ordre_affichage=0
)

Service.objects.create(
    experience=None,
    localisation=None,
    nom="Développement Web & Mobile",
    detail="Développement d'applications web et mobile modernes. Maîtrise des frameworks frontend et backend. Création d'interfaces responsive et performantes.",
    type_de_service="Compétence Technique",
    outils="Flutter, Odoo, Django, HTML, CSS",
    est_actif=True,
    ordre_affichage=1
)

Service.objects.create(
    experience=None,
    localisation=None,
    nom="Bases de données",
    detail="Conception et gestion de bases de données relationnelles. Optimisation des requêtes et modélisation de données. Administration de serveurs de bases de données.",
    type_de_service="Compétence Technique",
    outils="MySQL, SQL Server",
    est_actif=True,
    ordre_affichage=2
)

Service.objects.create(
    experience=None,
    localisation=None,
    nom="Systèmes d'exploitation",
    detail="Maîtrise des environnements Windows, Linux et macOS. Administration système et automatisation de tâches. Configuration et maintenance de serveurs.",
    type_de_service="Compétence Technique",
    outils="Windows, Linux, macOS, Bash, PowerShell",
    est_actif=True,
    ordre_affichage=3
)

Service.objects.create(
    experience=None,
    localisation=None,
    nom="Outils & Versionnage",
    detail="Gestion de versions avec Git et GitHub. Utilisation d'outils de développement modernes. Collaboration en équipe et gestion de projets.",
    type_de_service="Compétence Technique",
    outils="Git, GitHub",
    est_actif=True,
    ordre_affichage=4
)

Service.objects.create(
    experience=None,
    localisation=None,
    nom="Design & Graphisme",
    detail="Création de designs et prototypes pour applications et sites web. Maîtrise des outils de design graphique professionnels.",
    type_de_service="Compétence Créative",
    outils="Figma, Photoshop",
    est_actif=True,
    ordre_affichage=5
)

Service.objects.create(
    experience=None,
    localisation=None,
    nom="Soft Skills",
    detail="Compétences interpersonnelles et professionnelles. Autonomie dans le travail, capacité d'adaptation et esprit d'équipe. Sens du relationnel et communication efficace.",
    type_de_service="Compétence Transversale",
    outils="Autonomie, Autodidacte, Esprit d'équipe, Sens du relationnel",
    est_actif=True,
    ordre_affichage=6
)

print("\n" + "="*70)
print("✅ BASE DE DONNÉES PEUPLÉE AVEC SUCCÈS!")
print("="*70)
print(f"\n👤 Utilisateur créé: {utilisateur.prenom} {utilisateur.nom}")
print(f"   Email: {utilisateur.email}")
print(f"   Titre: {utilisateur.titre}")
print(f"\n📊 Statistiques:")
print(f"   • {Projet.objects.count()} projets créés")
print(f"   • {Experience.objects.count()} expériences créées")
print(f"   • {Service.objects.count()} compétences créées")
print(f"   • {ReseauSocial.objects.count()} réseaux sociaux créés")
print(f"   • {Localisation.objects.count()} localisation créée")
print(f"\n🎯 Projets mis en avant: {Projet.objects.filter(est_mis_en_avant=True).count()}")
print(f"\n🌍 Localisation: {localisation_ci.ville}, {localisation_ci.pays}")
print("\n" + "="*70)
print("🔗 PROCHAINES ÉTAPES:")
print("="*70)
print("1. Accédez à l'admin Django: http://localhost:8000/admin/")
print("2. Créez un superuser si nécessaire: python manage.py createsuperuser")
print("3. Testez l'API: http://localhost:8000/api/v1/public/portfolio/")
print("4. Ajoutez vos images et personnalisez davantage si besoin")
print("="*70)
