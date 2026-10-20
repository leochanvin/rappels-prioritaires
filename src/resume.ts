import type { Patient } from "./types.js";
import { demanderAuLLM } from "./llm.js";

/** Rédige un court résumé du patient pour préparer l'appel de l'infirmière. */
export async function resumerPourInfirmiere(patient: Patient): Promise<string> {
  throw new Error("À faire");
}
