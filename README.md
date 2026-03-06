# Portfolio — Brou Kablan

Portfolio personnel moderne et interactif construit avec **Angular** (frontend) et **Django REST Framework** (backend).

## Aperçu

Site vitrine professionnel présentant mon profil, mes projets, mes compétences et mes expériences. Design minimaliste avec animations fluides (GSAP), curseur personnalisé et transitions de pages.

## Stack technique

| Couche | Technologies |
|--------|-------------|
| **Frontend** | Angular 19, TypeScript, SCSS, GSAP, Locomotive Scroll |
| **Backend** | Python, Django 6, Django REST Framework |
| **Base de données** | SQLite (dev) / PostgreSQL (prod) |

## Structure du projet

```
├── src/                    # Frontend Angular
│   └── app/
│       ├── core/           # Composants globaux (header, cursor, preloader, menu)
│       ├── pages/          # Pages (home, work, about, contact, project-detail)
│       └── shared/         # Services, modèles et utilitaires partagés
├── backend/                # API Django REST
│   ├── api/                # App principale (models, views, serializers)
│   └── core/               # Configuration Django (settings split dev/prod)
├── public/                 # Assets statiques (favicon, CV PDF)
└── docs/                   # Documentation technique
```

## Installation

### Prérequis

- **Node.js** >= 18
- **Python** >= 3.10
- **Angular CLI** : `npm install -g @angular/cli`

### Frontend

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
ng serve
```

Le frontend sera accessible sur `http://localhost:4200/`.

### Backend

```bash
cd backend

# Créer et activer l'environnement virtuel
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux

# Installer les dépendances
pip install -r requirements.txt

# Appliquer les migrations
python manage.py migrate

# Peupler la base de données
python manage.py seed_db --clear

# Lancer le serveur API
python manage.py runserver
```

L'API sera accessible sur `http://localhost:8000/api/v1/`.

### Proxy (dev)

Le fichier `proxy.conf.json` redirige les appels `/api/` du frontend vers le backend Django. Pour l'utiliser :

```bash
ng serve --proxy-config proxy.conf.json
```

## Endpoints API

| Méthode | URL | Description |
|---------|-----|-------------|
| `GET` | `/api/v1/public/portfolio/` | Données complètes du portfolio |
| `GET` | `/api/v1/public/profile/` | Profil actif |
| `POST` | `/api/v1/contacts/` | Envoyer un message de contact |
| `GET` | `/api/v1/projects/` | Liste des projets |

## Pages

- **Accueil** — Hero animé avec présentation
- **Projets** — Liste interactive avec preview au survol
- **Détail projet** — Page dédiée par projet
- **À propos** — Photo, bio, compétences et parcours
- **Contact** — Formulaire et liens sociaux

## Auteur

**Brou Kablan** — Étudiant en Licence 3 Génie Logiciel  
[LinkedIn](https://www.linkedin.com/in/kablan-christ-brandonne-davy-brou-devs-7b5ab6394/) · [GitHub](https://github.com/silvercross2021-web) · brandonnebrou257@gmail.com
