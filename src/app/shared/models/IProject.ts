export interface IProject {
	id?: number | string;
	utilisateur?: number;
	titre: string;
	slug?: string;
	categorie?: string;
	annee?: string;
	resume: string;
	description?: string;
	image?: string;
	image_upload?: string;
	galerie_images?: string[];
	video_presentation?: string;
	video_url?: string;
	fichier_joint?: string;
	lien?: string;
	live?: string;
	github?: string;
	est_prive?: boolean;
	couleur_primaire?: string;
	couleur_secondaire?: string;
	technologies?: string;
	technologies_liste?: string[];
	architecture_details?: string;
	est_mis_en_avant?: boolean;
	est_actif?: boolean;
	ordre_affichage?: number;
}
