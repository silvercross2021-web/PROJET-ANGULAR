export interface IProject {
	id?: number;
	utilisateur?: number;
	titre: string;
	slug?: string;
	categorie?: string;
	annee?: string;
	resume: string;
	description?: string;
	image?: string;
	image_upload?: string;
	video_presentation?: string;
	fichier_joint?: string;
	lien?: string;
	github?: string;
	live?: string;
	couleur_primaire?: string;
	couleur_secondaire?: string;
	technologies?: string;
	technologies_liste?: string[];
	est_mis_en_avant?: boolean;
	est_actif?: boolean;
	ordre_affichage?: number;
}
