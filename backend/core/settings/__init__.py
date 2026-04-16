"""
Settings package.
Import from development or production depending on environment.
Default: development.
"""
import os

# Détection automatique de l'environnement (Render ou local)
env = os.environ.get('DJANGO_ENV')

if not env:
    if os.environ.get('RENDER'):
        env = 'production'
    else:
        env = 'development'

if env == 'production':
    from .production import *
else:
    from .development import *
