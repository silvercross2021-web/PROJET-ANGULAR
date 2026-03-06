from django.contrib import admin
from .models import Utilisateur, Projet, Experience, Localisation, Service, ReseauSocial, PriseDeContact

@admin.register(Utilisateur)
class UtilisateurAdmin(admin.ModelAdmin):
    list_display = ('prenom', 'nom', 'titre', 'email', 'est_actif', 'ordre_affichage')
    list_filter = ('est_actif',)
    search_fields = ('prenom', 'nom', 'email', 'titre', 'alias')
    ordering = ('ordre_affichage', 'prenom', 'nom')


@admin.register(Projet)
class ProjetAdmin(admin.ModelAdmin):
    list_display = ('titre', 'categorie', 'annee', 'est_mis_en_avant', 'est_actif', 'ordre_affichage')
    list_filter = ('categorie', 'est_mis_en_avant', 'est_actif')
    search_fields = ('titre', 'slug', 'resume', 'description', 'technologies')
    prepopulated_fields = {'slug': ('titre',)}
    ordering = ('ordre_affichage', '-id')


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'nom_entreprise', 'date_debut', 'date_fin', 'est_actif', 'ordre_affichage')
    list_filter = ('type_de_contrat', 'est_actif')
    search_fields = ('role', 'nom_entreprise', 'description')
    ordering = ('ordre_affichage', '-date_debut', '-id')


@admin.register(Localisation)
class LocalisationAdmin(admin.ModelAdmin):
    list_display = ('quartier', 'ville', 'pays', 'ordre_affichage')
    search_fields = ('quartier', 'ville', 'pays')
    ordering = ('ordre_affichage', 'pays', 'ville')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('nom', 'type_de_service', 'experience', 'localisation', 'est_actif', 'ordre_affichage')
    list_filter = ('type_de_service', 'est_actif')
    search_fields = ('nom', 'detail', 'outils')
    ordering = ('ordre_affichage', 'nom')


@admin.register(ReseauSocial)
class ReseauSocialAdmin(admin.ModelAdmin):
    list_display = ('nom_plateforme', 'utilisateur', 'ordre_affichage')
    search_fields = ('nom_plateforme', 'lien', 'utilisateur__prenom', 'utilisateur__nom')
    ordering = ('ordre_affichage', 'nom_plateforme')


@admin.register(PriseDeContact)
class PriseDeContactAdmin(admin.ModelAdmin):
    list_display = ('nom_complet', 'email', 'objet', 'date_envoi', 'traite')
    list_filter = ('traite', 'date_envoi')
    search_fields = ('nom_complet', 'email', 'objet', 'message')
    ordering = ('-date_envoi',)
