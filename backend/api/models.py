from django.db import models

class Utilisateur(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    photo_profil = models.URLField(max_length=500, blank=True)
    description = models.TextField()
    age = models.IntegerField()
    email = models.EmailField(unique=True)
    lien_cv = models.URLField(max_length=500, blank=True)
    telephone = models.CharField(max_length=50)
    titre = models.CharField(max_length=150, blank=True)
    alias = models.CharField(max_length=100, blank=True)
    bio_courte = models.TextField(blank=True)
    disponibilite = models.CharField(max_length=100, blank=True)
    est_actif = models.BooleanField(default=True)
    ordre_affichage = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.prenom} {self.nom}"

    class Meta:
        ordering = ['ordre_affichage', 'prenom', 'nom']

class Projet(models.Model):
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name='projets')
    titre = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True)
    categorie = models.CharField(max_length=100, blank=True)
    annee = models.CharField(max_length=10, blank=True)
    resume = models.TextField()
    description = models.TextField(blank=True)
    image = models.URLField(max_length=500, blank=True)
    lien = models.URLField(max_length=500, blank=True)
    github = models.URLField(max_length=500, blank=True)
    live = models.URLField(max_length=500, blank=True)
    couleur_primaire = models.CharField(max_length=20, blank=True)
    couleur_secondaire = models.CharField(max_length=20, blank=True)
    technologies = models.CharField(max_length=500, blank=True)
    est_mis_en_avant = models.BooleanField(default=False)
    est_actif = models.BooleanField(default=True)
    ordre_affichage = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.titre

    class Meta:
        ordering = ['ordre_affichage', '-id']
    
class Experience(models.Model):
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name='experiences')
    projet = models.ForeignKey('Projet', on_delete=models.CASCADE, related_name='experiences', null=True, blank=True)
    date_debut = models.DateField()
    date_fin = models.DateField(null=True, blank=True)
    role = models.CharField(max_length=100)
    nom_entreprise = models.CharField(max_length=100)
    description = models.TextField()
    type_de_contrat = models.CharField(max_length=50)
    est_actif = models.BooleanField(default=True)
    ordre_affichage = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.role} @ {self.nom_entreprise}"

    class Meta:
        ordering = ['ordre_affichage', '-date_debut', '-id']

class Localisation(models.Model):
    pays = models.CharField(max_length=100)
    ville = models.CharField(max_length=100)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    quartier = models.CharField(max_length=100)
    ordre_affichage = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.quartier}, {self.ville}, {self.pays}"

    class Meta:
        ordering = ['ordre_affichage', 'pays', 'ville']

class Service(models.Model):
    experience = models.ForeignKey(Experience, on_delete=models.CASCADE, related_name='services', null=True, blank=True)
    localisation = models.ForeignKey(Localisation, on_delete=models.SET_NULL, null=True, blank=True, related_name='services')
    nom = models.CharField(max_length=100)
    detail = models.TextField()
    type_de_service = models.CharField(max_length=100)
    outils = models.CharField(max_length=200) # Ex: "Python, Docker"
    est_actif = models.BooleanField(default=True)
    ordre_affichage = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.nom

    class Meta:
        ordering = ['ordre_affichage', 'nom']

class ReseauSocial(models.Model):
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE, related_name='reseaux')
    nom_plateforme = models.CharField(max_length=50)
    lien = models.URLField()
    ordre_affichage = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.nom_plateforme} - {self.utilisateur}"

    class Meta:
        ordering = ['ordre_affichage', 'nom_plateforme']

class PriseDeContact(models.Model):
    nom_complet = models.CharField(max_length=200)
    objet = models.CharField(max_length=200)
    message = models.TextField()
    email = models.EmailField()
    date_envoi = models.DateTimeField(auto_now_add=True)
    traite = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.nom_complet} - {self.objet}"

    class Meta:
        ordering = ['-date_envoi']