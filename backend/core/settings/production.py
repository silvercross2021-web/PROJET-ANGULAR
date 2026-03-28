"""
Django production settings.
"""
import os
from .base import *

SECRET_KEY = os.environ.get("DJANGO_SECRET_KEY", "change-me-in-production")

DEBUG = False

ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS", "").split(",")

# Database — override with env vars in production
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

# CORS — restrict in production, allow localhost for development
_cors_env = os.environ.get("CORS_ALLOWED_ORIGINS", "")
_cors_list = [o.strip() for o in _cors_env.split(",") if o.strip()]

CORS_ALLOWED_ORIGINS = _cors_list + [
    "http://localhost:4200",
    "http://localhost:63192",
    "http://localhost:3000",
    "http://127.0.0.1:4200",
]

# Static files
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

# WhiteNoise middleware — insert after SecurityMiddleware (index 2, after CorsMiddleware at 0 and SecurityMiddleware at 1)
MIDDLEWARE.insert(2, "whitenoise.middleware.WhiteNoiseMiddleware")
