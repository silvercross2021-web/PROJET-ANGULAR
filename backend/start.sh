#!/usr/bin/env bash
# Arrêter le script en cas d'erreur
set -o errexit

echo "--- Appliquer les migrations ---"
python manage.py migrate --no-input

echo "--- Charger les données de secours ---"
python manage.py loaddata data_backup.json

echo "--- Créer le superutilisateur si besoin ---"
python create_superuser.py

echo "--- Démarrage de Gunicorn ---"
gunicorn core.wsgi:application --bind 0.0.0.0:$PORT
