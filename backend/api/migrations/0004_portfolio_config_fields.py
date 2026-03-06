from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_experience_projet_alter_localisation_latitude_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="experience",
            name="est_actif",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="experience",
            name="ordre_affichage",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name="localisation",
            name="ordre_affichage",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name="prisedecontact",
            name="traite",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="projet",
            name="annee",
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AddField(
            model_name="projet",
            name="categorie",
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name="projet",
            name="couleur_primaire",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="projet",
            name="couleur_secondaire",
            field=models.CharField(blank=True, max_length=20),
        ),
        migrations.AddField(
            model_name="projet",
            name="description",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="projet",
            name="est_actif",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="projet",
            name="est_mis_en_avant",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="projet",
            name="github",
            field=models.URLField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name="projet",
            name="live",
            field=models.URLField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name="projet",
            name="ordre_affichage",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name="projet",
            name="slug",
            field=models.SlugField(default="temp-slug", max_length=220, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="projet",
            name="technologies",
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name="reseausocial",
            name="ordre_affichage",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name="service",
            name="est_actif",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="service",
            name="ordre_affichage",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name="utilisateur",
            name="alias",
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name="utilisateur",
            name="bio_courte",
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name="utilisateur",
            name="disponibilite",
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name="utilisateur",
            name="est_actif",
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name="utilisateur",
            name="ordre_affichage",
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AddField(
            model_name="utilisateur",
            name="titre",
            field=models.CharField(blank=True, max_length=150),
        ),
        migrations.AlterField(
            model_name="projet",
            name="image",
            field=models.URLField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name="projet",
            name="lien",
            field=models.URLField(blank=True, max_length=500),
        ),
    ]
