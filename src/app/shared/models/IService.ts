import { Ilocation } from './Ilocation';

export interface IService {
	id?: number;
	experience?: number | null;
	localisation?: Ilocation | null;
	nom: string;
	detail: string;
	type_de_service: string;
	outils: string;
	outils_liste?: string[];
	est_actif?: boolean;
	ordre_affichage?: number;
}
