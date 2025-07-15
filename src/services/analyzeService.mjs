import { callLLM } from "./llmService.mjs";
import { resolveModelAlias } from "./providerService.mjs";

export async function analyzeData(text, modelAlias = "chatgpt") {
  const model = resolveModelAlias(modelAlias);

  const response = await callLLM({
    model,
    messages: [
      { role: "system", content: "Analyze this text for sentiment, key topics, and named entities." },
      { role: "user", content: text }
    ],
    temperature: 0.1,
    max_tokens: 256
  });

  return response?.choices?.[0]?.message?.content || "No analysis.";
}
