import { IProject } from './IProject';
import { Iexperience } from './Iexperience';
import { ISocial } from './ISocial';

export interface IUsers {
  id?: number;
  nom: string;
  prenom: string;
  photo_profil?: string;
  description: string;
  age: number;
  email: string;
  lien_cv?: string;
  telephone: string;
  titre?: string;
  alias?: string;
  bio_courte?: string;
  disponibilite?: string;
  est_actif?: boolean;
  ordre_affichage?: number;
  projets?: IProject[];
  experiences?: Iexperience[];
  reseaux?: ISocial[];
}
