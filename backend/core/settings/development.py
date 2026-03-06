"""
Django development settings.
"""
from .base import *

SECRET_KEY = "django-insecure-@w(^am1-gw!^!n%38-)5mn#*%%$&6uf4bq#hlie@p4%i&1gqy6"

DEBUG = True

ALLOWED_HOSTS = ["localhost", "127.0.0.1"]

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# CORS — allow all in development
CORS_ALLOW_ALL_ORIGINS = True
