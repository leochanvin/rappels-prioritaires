import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // lit ANTHROPIC_API_KEY dans l'environnement

/** Envoie un message à Claude et renvoie le texte de sa réponse. */
export async function demanderAuLLM(consigne: string, message: string): Promise<string> {
  const reponse = await client.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 2000,
    output_config: { effort: "low" },
    system: consigne,
    messages: [{ role: "user", content: message }],
  });
  if (reponse.stop_reason === "refusal") {
    throw new Error("Le modèle a refusé de répondre.");
  }
  return reponse.content
    .flatMap((bloc) => (bloc.type === "text" ? [bloc.text] : []))
    .join("\n")
    .trim();
}
