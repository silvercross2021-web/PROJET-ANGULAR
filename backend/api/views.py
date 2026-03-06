from rest_framework import viewsets, permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Utilisateur, Projet, Experience, PriseDeContact, Service, Localisation, ReseauSocial
from .serializers import *

class UtilisateurViewSet(viewsets.ModelViewSet):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = None

    def get_queryset(self):
        queryset = Utilisateur.objects.all()
        if self.request.query_params.get('public') == '1':
            queryset = queryset.filter(est_actif=True)
        return queryset

class ProjetViewSet(viewsets.ModelViewSet):
    queryset = Projet.objects.all()
    serializer_class = ProjetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = None

    def get_queryset(self):
        queryset = Projet.objects.select_related('utilisateur').all()
        if self.request.query_params.get('public') == '1':
            queryset = queryset.filter(est_actif=True, utilisateur__est_actif=True)
        if self.request.query_params.get('featured') == '1':
            queryset = queryset.filter(est_mis_en_avant=True)
        slug = self.request.query_params.get('slug')
        if slug:
            queryset = queryset.filter(slug=slug)
        return queryset

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = None

    def get_queryset(self):
        queryset = Experience.objects.select_related('utilisateur', 'projet').prefetch_related('services').all()
        if self.request.query_params.get('public') == '1':
            queryset = queryset.filter(est_actif=True, utilisateur__est_actif=True)
        return queryset

class PriseDeContactViewSet(viewsets.ModelViewSet):
    queryset = PriseDeContact.objects.all()
    serializer_class = PriseDeContactSerializer
    pagination_class = None

    def get_permissions(self):
        if self.action == 'create':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

class LocalisationViewSet(viewsets.ModelViewSet):
    queryset = Localisation.objects.all()
    serializer_class = LocalisationSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = None

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = None

    def get_queryset(self):
        queryset = Service.objects.select_related('experience', 'localisation').all()
        if self.request.query_params.get('public') == '1':
            queryset = queryset.filter(est_actif=True)
        return queryset

class ReseauSocialViewSet(viewsets.ModelViewSet):
    queryset = ReseauSocial.objects.all()
    serializer_class = ReseauSocialSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = None


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def portfolio_data(request):
    profil = Utilisateur.objects.filter(est_actif=True).order_by('ordre_affichage', 'prenom', 'nom').first()

    if not profil:
        return Response(
            {
                'profil': None,
                'projets': [],
                'projets_mis_en_avant': [],
                'experiences': [],
                'services': [],
                'reseaux': [],
            }
        )

    projets = Projet.objects.filter(est_actif=True, utilisateur=profil)
    experiences = Experience.objects.filter(est_actif=True, utilisateur=profil).prefetch_related('services')
    services = Service.objects.filter(est_actif=True)
    reseaux = ReseauSocial.objects.filter(utilisateur=profil)

    serializer = PortfolioSerializer(
        {
            'profil': profil,
            'projets': projets,
            'projets_mis_en_avant': projets.filter(est_mis_en_avant=True),
            'experiences': experiences,
            'services': services,
            'reseaux': reseaux,
        }
    )
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def active_profile(request):
    profil = Utilisateur.objects.filter(est_actif=True).order_by('ordre_affichage', 'prenom', 'nom').first()
    if not profil:
        return Response({}, status=404)
    return Response(UtilisateurPublicSerializer(profil).data)