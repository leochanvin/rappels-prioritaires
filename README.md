# Rappels prioritaires

Une infirmière suit à distance 25 patientes sous traitement anticancéreux oral.
Chaque matin, elle n'a le temps d'en appeler que quelques-unes.

**Objectif :** lui donner la liste des patientes à rappeler en priorité aujourd'hui,
avec pour chacune un court résumé qui l'aide à préparer son appel.

- Les données (100 % fictives) sont dans `data/patients.json`.
- Deux fonctions sont à écrire : `src/priorisation.ts` et `src/resume.ts`.
- Un client pour l'IA est déjà branché dans `src/llm.ts`.

Personne ne s'attend à ce que tout soit fini : on regarde surtout comment tu raisonnes.
Utilise les outils que tu veux, IA comprise.

## Tes questions

Pose toutes les questions que tu veux, à n'importe quel moment.
Pour les questions métier (qu'est-ce qu'une patiente prioritaire, ce que l'infirmière attend
du résumé…), une infirmière simulée par une IA te répond : Léo lui transmet tes questions.

## Pour finir

Si on a le temps : comment tu mettrais ça en place avec nous, en vrai ?

## Lancer

```bash
npm install
npm test
npm start
```

Pour les résumés, définir `ANTHROPIC_API_KEY` dans l'environnement (clé fournie le jour même).
