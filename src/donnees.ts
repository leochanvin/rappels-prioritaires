import { readFileSync } from "node:fs";
import type { Patient } from "./types.js";

/** Date du jour figée pour l'exercice : les résultats ne dépendent pas de l'horloge. */
export const AUJOURDHUI = "2026-10-22";

export function chargerPatients(): Patient[] {
  const brut = readFileSync(new URL("../data/patients.json", import.meta.url), "utf8");
  return JSON.parse(brut) as Patient[];
}

/** Nombre de jours entiers entre deux dates AAAA-MM-JJ. */
export function joursEntre(debut: string, fin: string): number {
  const ms = Date.parse(fin) - Date.parse(debut);
  return Math.round(ms / 86_400_000);
}
