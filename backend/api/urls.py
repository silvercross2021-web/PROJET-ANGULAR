from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken import views as auth_views
from .views import (
    UtilisateurViewSet, ProjetViewSet, ExperienceViewSet,
    PriseDeContactViewSet, ServiceViewSet, LocalisationViewSet,
    ReseauSocialViewSet, portfolio_data, active_profile,
)

# ---------- Admin / Authenticated CRUD ----------
router = DefaultRouter()
router.register(r"users", UtilisateurViewSet)
router.register(r"projects", ProjetViewSet)
router.register(r"experiences", ExperienceViewSet)
router.register(r"contacts", PriseDeContactViewSet)
router.register(r"services", ServiceViewSet)
router.register(r"locations", LocalisationViewSet)
router.register(r"reseaux", ReseauSocialViewSet)

urlpatterns = [
    # Versioned API
    path("v1/", include(router.urls)),
    path("v1/login/", auth_views.obtain_auth_token),

    # Public endpoints (no auth required)
    path("v1/public/profile/", active_profile),
    path("v1/public/portfolio/", portfolio_data),

    # Root fallback (same as v1)
    path("", include(router.urls)),
]