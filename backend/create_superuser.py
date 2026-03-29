import os
import django

# Configuration de l'environnement Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings.production')
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

# Création du superuser s'il n'existe pas
username = 'admin'
password = 'admin1234s'

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, email='admin@admin.com', password=password)
    print(f"Superuser '{username}' a ete cree avec succes ! Vous pouvez vous connecter.")
else:
    print(f"Le superuser '{username}' existe deja.")
