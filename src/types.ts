export type Symptome = {
  libelle: string;
  /** 0 = absent, 1 = léger, 2 = modéré, 3 = sévère */
  intensite: 0 | 1 | 2 | 3;
  /** Date de signalement, AAAA-MM-JJ */
  date: string;
};

export type Patient = {
  id: string;
  prenom: string;
  nom: string;
  age: number;
  telephone: string;
  cancer: string;
  traitement: string;
  /** Date du dernier appel de l'infirmière, AAAA-MM-JJ, ou null si jamais appelée */
  dernier_appel: string | null;
  /** Prises de médicament sur les 7 derniers jours, ou null si inconnu */
  observance_7j: { prises_prevues: number; prises_faites: number } | null;
  symptomes: Symptome[];
  /** Notes libres de l'infirmière */
  notes: string;
};
