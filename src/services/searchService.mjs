import { getCachedResponse, setCachedResponse } from "./cacheService.mjs";
import { callLLM } from "./llmService.mjs";
import { resolveModelAlias } from "./providerService.mjs";

export async function semanticSearch(query, modelAlias = "chatgpt") {
  const model = resolveModelAlias(modelAlias);

  const cacheKey = `search:${model}:${query}`;
  const cached = await getCachedResponse(cacheKey);
  if (cached) return cached;

  const response = await callLLM({
    model,
    messages: [
      { role: "system", content: "You are a powerful search engine. Return concise, factual answers." },
      { role: "user", content: query }
    ],
    temperature: 0.3,
    max_tokens: 150
  });

  const result = response?.choices?.[0]?.message?.content || "No result.";
  await setCachedResponse(cacheKey, result, 300);
  return result;
}
