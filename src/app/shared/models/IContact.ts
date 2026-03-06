export interface IContact {
	id?: number;
	nom_complet: string;
	objet: string;
	message: string;
	email: string;
	date_envoi?: string; // ISO datetime
}
