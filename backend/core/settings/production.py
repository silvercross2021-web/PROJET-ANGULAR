"""
Django production settings.
"""
import os
from .base import *

SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", "change-me-in-production-12345")

DEBUG = False

# Autorise automatiquement Render et localhost
ALLOWED_HOSTS = [
    ".onrender.com",
    "localhost",
    "127.0.0.1",
    "portfolio-api-rufs.onrender.com"
]

# Ajoute les hôtes personnalisés si définis
_extra_hosts = os.environ.get("DJANGO_ALLOWED_HOSTS", "")
if _extra_hosts:
    ALLOWED_HOSTS.extend([h.strip() for h in _extra_hosts.split(",") if h.strip()])

# Database — utilise SQLite par défaut sur Render si pas de DB_URL
DATABASES = {
    "default": {
        "ENGINE": os.environ.get("DB_ENGINE", "django.db.backends.sqlite3"),
        "NAME": os.environ.get("DB_NAME", BASE_DIR / "db.sqlite3"),
        "USER": os.environ.get("DB_USER", ""),
        "PASSWORD": os.environ.get("DB_PASSWORD", ""),
        "HOST": os.environ.get("DB_HOST", ""),
        "PORT": os.environ.get("DB_PORT", ""),
    }
}

# CORS — Autorise votre site Vercel et le local
CORS_ALLOWED_ORIGINS = [
    "https://projet-angular-sooty.vercel.app",
    "http://localhost:4200",
    "http://localhost:3000",
]

# Ajoute d'autres origines si définies via env
_cors_env = os.environ.get("CORS_ALLOWED_ORIGINS", "")
if _cors_env:
    CORS_ALLOWED_ORIGINS.extend([o.strip() for o in _cors_env.split(",") if o.strip()])

# Static files
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# WhiteNoise middleware
MIDDLEWARE.insert(2, "whitenoise.middleware.WhiteNoiseMiddleware")
