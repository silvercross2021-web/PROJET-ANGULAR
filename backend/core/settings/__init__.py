"""
Settings package.
Import from development or production depending on environment.
Default: development.
"""
import os

env = os.environ.get('DJANGO_ENV', 'development')

if env == 'production':
    from .production import *
else:
    from .development import *
