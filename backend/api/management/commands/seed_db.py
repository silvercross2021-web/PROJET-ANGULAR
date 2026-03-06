"""
Management command to seed the database with initial portfolio data.
Usage: python manage.py seed_db
"""
from django.core.management.base import BaseCommand
from api.models import Utilisateur, Projet, Experience, Service, Localisation, ReseauSocial


class Command(BaseCommand):
    help = "Seed the database with initial portfolio data"

    def add_arguments(self, parser):
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Clear all existing data before seeding",
        )

    def handle(self, *args, **options):
        if options["clear"]:
            self.stdout.write("Suppression des données existantes...")
            Utilisateur.objects.all().delete()
            Projet.objects.all().delete()
            Experience.objects.all().delete()
            Service.objects.all().delete()
            Localisation.objects.all().delete()
            ReseauSocial.objects.all().delete()

        self.stdout.write("Création du profil utilisateur...")
        utilisateur = Utilisateur.objects.create(
            nom="Brou Kablan",
            prenom="Brandonne Davy",
            photo_profil="https://media.licdn.com/dms/image/v2/D4E03AQE6YVjljD-cMg/profile-displayphoto-scale_400_400/B4EZu0wjBPKEAg-/0/1768264186694?e=1774483200&v=beta&t=_0OUljbdFJ3CwhNhpIpRrge65fjtqHr_mX87B_cswSA",
            description=(
                "Étudiant en 3ème année d'informatique (IIT), polyvalent et motivé, "
                "avec des compétences solides en développement logiciel et en développement web. "
                "J'aime relever les défis et je souhaite contribuer à des projets innovants tout en "
                "poursuivant mon apprentissage."
            ),
            age=23,
            email="brandonnebrou257@gmail.com",
            lien_cv="/Brou_Kabkan_Christ-CV_fr.pdf",
            telephone="+225 0747476401/0143490039",
            titre="Étudiant en Licence 3 - Génie Logiciel",
            alias="BK",
            bio_courte="Étudiant en informatique passionné par le développement logiciel et web, toujours prêt à relever de nouveaux défis.",
            disponibilite="Disponible pour stages et projets",
            est_actif=True,
            ordre_affichage=0,
        )

        self.stdout.write("Création de la localisation...")
        Localisation.objects.create(
            pays="Côte d'Ivoire",
            ville="Grand-Bassam",
            latitude=5.211111,
            longitude=-3.738889,
            quartier="Grand-Bassam",
            ordre_affichage=0,
        )

        self.stdout.write("Création des réseaux sociaux...")
        ReseauSocial.objects.create(
            utilisateur=utilisateur,
            nom_plateforme="LinkedIn",
            lien="https://www.linkedin.com/in/kablan-christ-brandonne-davy-brou-devs-7b5ab6394/",
            ordre_affichage=0,
        )
        ReseauSocial.objects.create(
            utilisateur=utilisateur,
            nom_plateforme="GitHub",
            lien="https://github.com/brandonnedavy",
            ordre_affichage=1,
        )
        ReseauSocial.objects.create(
            utilisateur=utilisateur,
            nom_plateforme="Email",
            lien="mailto:brandonnebrou257@gmail.com",
            ordre_affichage=2,
        )

        self.stdout.write("Création des projets...")
        projet1 = Projet.objects.create(
            utilisateur=utilisateur,
            titre="Vainqueur Hackathon D'Vest Abidjan 2025",
            slug="hackathon-dvest-abidjan-2025",
            categorie="Hackathon / IA",
            annee="2025",
            resume="Justice-Guide AI, plateforme juridique IA multilingue.",
            description="Vainqueur du Hackathon D'Vest Abidjan 2025 avec Justice-Guide AI, une plateforme juridique basée sur l'intelligence artificielle multilingue (Français/Dioula/Baoulé) pour la Côte d'Ivoire. Solution innovante facilitant l'accès à l'information juridique pour tous.",
            image="https://media.licdn.com/dms/image/v2/D4E22AQGzy62iZdGGFQ/feedshare-shrink_800/B4EZsFE6wLGUAg-/0/1765316734249?e=1774483200&v=beta&t=cqtNbv5PWaWm6qUlqpKxj_5UolvR_iF2ASfJdj0kmWU",
            lien="", github="", live="",
            couleur_primaire="#a8edea",
            couleur_secondaire="#fed6e3",
            technologies="IA, NLP, Multilingue, Python, Django",
            est_mis_en_avant=True, est_actif=True, ordre_affichage=0,
        )

        Projet.objects.create(
            utilisateur=utilisateur,
            titre="Projet Personnel : Gestion de Réservations (Flask)",
            slug="gestion-reservations-flask",
            categorie="Développement Web",
            annee="2024",
            resume="Application web de gestion de réservations avec Flask.",
            description="Création d'une application web de gestion de réservations développée avec Flask. Système complet permettant la création, modification et suivi des réservations. Interface utilisateur intuitive et backend robuste. Projet réalisé avec des tests unitaires pour garantir la fiabilité.",
            image="https://media.licdn.com/dms/image/v2/D4E22AQHrbpb2h4_9Bg/feedshare-shrink_2048_1536/B4EZuWCJ3VK4Aw-/0/1767748723550?e=1774483200&v=beta&t=g6G3D2Iw-MI9EcCeUU876s31j_rKRU9LsQTshrOIqh0",
            lien="", github="", live="",
            couleur_primaire="#cdb4f8",
            couleur_secondaire="#a8d8f8",
            technologies="Python, Flask, SQLite, HTML, CSS, JavaScript",
            est_mis_en_avant=True, est_actif=True, ordre_affichage=1,
        )

        Projet.objects.create(
            utilisateur=utilisateur,
            titre="Projet Académique : Site E-Commerce (Django)",
            slug="site-ecommerce-django",
            categorie="Développement Web",
            annee="2024",
            resume="Site e-commerce complet avec Django.",
            description="Création d'un site e-commerce (Django) servant à gérer les produits, les utilisateurs et les paniers. Projet universitaire complet incluant la gestion des commandes, système d'authentification, panier d'achat et interface d'administration. Architecture MVC respectée.",
            image="", lien="", github="", live="",
            couleur_primaire="#98f7c4",
            couleur_secondaire="#4adede",
            technologies="Python, Django, PostgreSQL, Bootstrap, JavaScript",
            est_mis_en_avant=False, est_actif=True, ordre_affichage=2,
        )

        Projet.objects.create(
            utilisateur=utilisateur,
            titre="Projet Académique : Application de Gestion Scolaire (C#)",
            slug="gestion-scolaire-csharp",
            categorie="Développement Logiciel",
            annee="2023",
            resume="Application C# pour la gestion scolaire.",
            description="Application C# pour la gestion scolaire (étudiants, professeurs, inscriptions et paiements). Système complet de gestion d'établissement scolaire avec interface Windows Forms. Gestion des notes, absences, emplois du temps et génération de rapports.",
            image="", lien="", github="", live="",
            couleur_primaire="#ffd6a5",
            couleur_secondaire="#ffb997",
            technologies="C#, .NET, WinForms, SQL Server",
            est_mis_en_avant=False, est_actif=True, ordre_affichage=3,
        )

        Projet.objects.create(
            utilisateur=utilisateur,
            titre="Agent d'Automatisation IA (RBN & Excel)",
            slug="agent-automatisation-ia",
            categorie="Automatisation / IA",
            annee="2024",
            resume="Agent IA pour automatiser la gestion Excel.",
            description="Création d'un agent IA (RBN & OpenAI) pour automatiser la gestion Excel (lecture, écriture, alertes) via commandes vocales et textuelles. Solution innovante permettant de manipuler des fichiers Excel par commandes naturelles, avec génération automatique de rapports et alertes intelligentes.",
            image="", lien="", github="", live="",
            couleur_primaire="#cdb4f8",
            couleur_secondaire="#fed6e3",
            technologies="Python, OpenAI, RBN, Excel API, NLP",
            est_mis_en_avant=True, est_actif=True, ordre_affichage=4,
        )

        Projet.objects.create(
            utilisateur=utilisateur,
            titre="Projet Académique : Gestion de Parc Informatique Odoo",
            slug="gestion-parc-informatique-odoo",
            categorie="ERP / Gestion",
            annee="2024",
            resume="Module Odoo pour la gestion de parc informatique.",
            description="Développement d'un module Odoo personnalisé pour l'inventaire, l'affectation et le suivi du cycle de vie du matériel informatique. Solution complète de gestion de parc incluant le tracking des équipements, maintenance préventive et génération de rapports.",
            image="", lien="", github="", live="",
            couleur_primaire="#a8d8f8",
            couleur_secondaire="#98f7c4",
            technologies="Python, Odoo, PostgreSQL, XML, JavaScript",
            est_mis_en_avant=False, est_actif=True, ordre_affichage=5,
        )

        self.stdout.write("Création des expériences professionnelles...")
        Experience.objects.create(
            utilisateur=utilisateur,
            projet=projet1,
            date_debut="2025-01-01",
            date_fin="2025-01-31",
            role="Participant Hackathon - Vainqueur",
            nom_entreprise="D'Vest Abidjan 2025",
            description="Vainqueur du Hackathon D'Vest Abidjan 2025 avec le projet Justice-Guide AI, une plateforme juridique IA multilingue (Français/Dioula/Baoulé) pour la Côte d'Ivoire. Développement d'une solution innovante en équipe dans un temps limité.",
            type_de_contrat="Hackathon",
            est_actif=True, ordre_affichage=0,
        )

        Experience.objects.create(
            utilisateur=utilisateur,
            projet=None,
            date_debut="2022-09-01",
            date_fin=None,
            role="Étudiant en Licence Génie Logiciel",
            nom_entreprise="Institut Ivoirien de Technologie (IIT)",
            description="Formation en Licence 3 Génie Logiciel à l'Institut Ivoirien de Technologie. Apprentissage approfondi du développement logiciel, des bases de données, du développement web et mobile, ainsi que des méthodologies de gestion de projets.",
            type_de_contrat="Formation",
            est_actif=True, ordre_affichage=1,
        )

        Experience.objects.create(
            utilisateur=utilisateur,
            projet=None,
            date_debut="2020-09-01",
            date_fin="2022-06-30",
            role="Étudiant",
            nom_entreprise="Collège Catholique Saint Jean Bosco",
            description="Formation secondaire au Collège Catholique Saint Jean Bosco. Développement des bases académiques et découverte de la programmation.",
            type_de_contrat="Formation",
            est_actif=True, ordre_affichage=2,
        )

        self.stdout.write("Création des services/compétences...")
        skills = [
            ("Programmation", "Compétence Technique", "Java, Dart, Python, C#, JavaScript, React, Flask",
             "Maîtrise de plusieurs langages de programmation pour le développement logiciel et web. Expérience en programmation orientée objet et développement d'applications.", 0),
            ("Développement Web & Mobile", "Compétence Technique", "Flutter, Odoo, Django, HTML, CSS",
             "Développement d'applications web et mobile modernes. Maîtrise des frameworks frontend et backend. Création d'interfaces responsive et performantes.", 1),
            ("Bases de données", "Compétence Technique", "MySQL, SQL Server",
             "Conception et gestion de bases de données relationnelles. Optimisation des requêtes et modélisation de données. Administration de serveurs de bases de données.", 2),
            ("Systèmes d'exploitation", "Compétence Technique", "Windows, Linux, macOS, Bash, PowerShell",
             "Maîtrise des environnements Windows, Linux et macOS. Administration système et automatisation de tâches. Configuration et maintenance de serveurs.", 3),
            ("Outils & Versionnage", "Compétence Technique", "Git, GitHub",
             "Gestion de versions avec Git et GitHub. Utilisation d'outils de développement modernes. Collaboration en équipe et gestion de projets.", 4),
            ("Design & Graphisme", "Compétence Créative", "Figma, Photoshop",
             "Création de designs et prototypes pour applications et sites web. Maîtrise des outils de design graphique professionnels.", 5),
            ("Soft Skills", "Compétence Transversale", "Autonomie, Autodidacte, Esprit d'équipe, Sens du relationnel",
             "Compétences interpersonnelles et professionnelles. Autonomie dans le travail, capacité d'adaptation et esprit d'équipe. Sens du relationnel et communication efficace.", 6),
        ]
        for nom, type_s, outils, detail, ordre in skills:
            Service.objects.create(
                experience=None, localisation=None,
                nom=nom, detail=detail, type_de_service=type_s,
                outils=outils, est_actif=True, ordre_affichage=ordre,
            )

        self.stdout.write(self.style.SUCCESS(
            f"\n✅ Base de données peuplée avec succès !\n"
            f"   {Utilisateur.objects.count()} utilisateur(s)\n"
            f"   {Projet.objects.count()} projet(s)\n"
            f"   {Experience.objects.count()} expérience(s)\n"
            f"   {Service.objects.count()} compétence(s)\n"
            f"   {ReseauSocial.objects.count()} réseau(x) social(aux)\n"
            f"   {Localisation.objects.count()} localisation(s)\n"
        ))
