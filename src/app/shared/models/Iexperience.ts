import { IService } from './IService';

export interface Iexperience {
	id?: number;
	utilisateur?: number;
	projet?: number | null;
	date_debut: string;
	date_fin?: string | null;
	role: string;
	nom_entreprise: string;
	description: string;
	type_de_contrat: string;
	est_actif?: boolean;
	ordre_affichage?: number;
	services?: IService[];
}
