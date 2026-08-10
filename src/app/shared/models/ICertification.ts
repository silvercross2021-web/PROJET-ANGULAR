export interface ICertification {
  id: string;
  titre: string;
  organisme: string;
  date_obtention: string;
  image_badge?: string;
  lien_verification?: string;
  description?: string;
  competences_cles?: string[];
  // Champs enrichis pour la page détail
  histoire_organisme?: string;
  reconnaissance_mondiale?: string;
  apports_personnels?: string;
  domaines_couverts?: string[];
}
