from rest_framework import serializers
from .models import *

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = '__all__'

class ProjetSerializer(serializers.ModelSerializer):
    technologies_liste = serializers.SerializerMethodField()

    class Meta:
        model = Projet
        fields = '__all__'

    def get_technologies_liste(self, obj):
        return [tech.strip() for tech in obj.technologies.split(',') if tech.strip()]

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'

class PriseDeContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriseDeContact
        fields = '__all__'
        read_only_fields = ('date_envoi', 'traite')


class LocalisationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Localisation
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    outils_liste = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = '__all__'

    def get_outils_liste(self, obj):
        return [outil.strip() for outil in obj.outils.split(',') if outil.strip()]


class ReseauSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReseauSocial
        fields = '__all__'


class ReseauSocialPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReseauSocial
        fields = ('id', 'nom_plateforme', 'lien', 'ordre_affichage')


class ServicePublicSerializer(serializers.ModelSerializer):
    outils_liste = serializers.SerializerMethodField()
    localisation = LocalisationSerializer(read_only=True)

    class Meta:
        model = Service
        fields = (
            'id', 'nom', 'detail', 'type_de_service', 'outils', 'outils_liste',
            'localisation', 'ordre_affichage'
        )

    def get_outils_liste(self, obj):
        return [outil.strip() for outil in obj.outils.split(',') if outil.strip()]


class ExperiencePublicSerializer(serializers.ModelSerializer):
    services = ServicePublicSerializer(many=True, read_only=True)

    class Meta:
        model = Experience
        fields = (
            'id', 'projet', 'date_debut', 'date_fin', 'role', 'nom_entreprise',
            'description', 'type_de_contrat', 'ordre_affichage', 'services'
        )


class ProjetPublicSerializer(serializers.ModelSerializer):
    technologies_liste = serializers.SerializerMethodField()

    class Meta:
        model = Projet
        fields = (
            'id', 'slug', 'titre', 'categorie', 'annee', 'resume', 'description',
            'image', 'image_upload', 'video_presentation', 'fichier_joint',
            'lien', 'github', 'live', 'couleur_primaire',
            'couleur_secondaire', 'technologies', 'technologies_liste',
            'est_mis_en_avant', 'ordre_affichage'
        )

    def get_technologies_liste(self, obj):
        return [tech.strip() for tech in obj.technologies.split(',') if tech.strip()]


class UtilisateurPublicSerializer(serializers.ModelSerializer):
    projets = serializers.SerializerMethodField()
    experiences = serializers.SerializerMethodField()
    reseaux = serializers.SerializerMethodField()

    class Meta:
        model = Utilisateur
        fields = (
            'id', 'nom', 'prenom', 'photo_profil', 'description', 'age', 'email',
            'lien_cv', 'telephone', 'titre', 'alias', 'bio_courte',
            'disponibilite', 'ordre_affichage', 'projets', 'experiences', 'reseaux'
        )

    def get_projets(self, obj):
        queryset = obj.projets.filter(est_actif=True)
        return ProjetPublicSerializer(queryset, many=True).data

    def get_experiences(self, obj):
        queryset = obj.experiences.filter(est_actif=True)
        return ExperiencePublicSerializer(queryset, many=True).data

    def get_reseaux(self, obj):
        queryset = obj.reseaux.all()
        return ReseauSocialPublicSerializer(queryset, many=True).data


class PortfolioSerializer(serializers.Serializer):
    profil = UtilisateurPublicSerializer()
    projets = ProjetPublicSerializer(many=True)
    projets_mis_en_avant = ProjetPublicSerializer(many=True)
    experiences = ExperiencePublicSerializer(many=True)
    services = ServicePublicSerializer(many=True)
    reseaux = ReseauSocialPublicSerializer(many=True)