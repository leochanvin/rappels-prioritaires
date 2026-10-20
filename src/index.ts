import { AUJOURDHUI, chargerPatients } from "./donnees.js";
import { prioriser } from "./priorisation.js";
import { resumerPourInfirmiere } from "./resume.js";

const NOMBRE_A_AFFICHER = 5;

const patients = chargerPatients();
console.log(`${patients.length} patients chargés, date du jour : ${AUJOURDHUI}\n`);

const liste = prioriser(patients, AUJOURDHUI).slice(0, NOMBRE_A_AFFICHER);

for (const [rang, { patient }] of liste.entries()) {
  console.log(`${rang + 1}. ${patient.prenom} ${patient.nom[0]}., ${patient.age} ans`);
  if (process.env.ANTHROPIC_API_KEY) {
    console.log(`   ${await resumerPourInfirmiere(patient)}`);
  }
}
