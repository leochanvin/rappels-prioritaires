import type { Patient } from "./types.js";

export type PatientPriorise = {
  patient: Patient;
  // À compléter : ce qui explique la place du patient dans la liste
};

/**
 * Renvoie les patients dans l'ordre où l'infirmière doit les rappeler.
 * @param aujourdhui date du jour, AAAA-MM-JJ
 */
export function prioriser(patients: Patient[], aujourdhui: string): PatientPriorise[] {
  throw new Error("À faire");
}
