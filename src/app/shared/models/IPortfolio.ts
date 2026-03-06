import { IUsers } from './IUsers';
import { IProject } from './IProject';
import { Iexperience } from './Iexperience';
import { IService } from './IService';
import { ISocial } from './ISocial';

export interface IPortfolio {
  profil: IUsers | null;
  projets: IProject[];
  projets_mis_en_avant: IProject[];
  experiences: Iexperience[];
  services: IService[];
  reseaux: ISocial[];
}
