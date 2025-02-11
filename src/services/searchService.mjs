import openai from "../config/openAIConfig.mjs";
import { getCachedResponse, setCachedResponse } from "./cacheService.mjs";

export async function semanticSearch(query, model) {
  const cacheKey = `search:${query}:${model}`;
  const cachedResult = await getCachedResponse(cacheKey);
  if (cachedResult) return cachedResult;

  try {
    const completion = await openai.chat.completions.create({
      model: model || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a powerful search engine. Return concise, factual answers."
        },
        { role: "user", content: query }
      ],
      temperature: 0.3,
      max_tokens: 150
    });

    const result = completion.choices[0].message.content;
    await setCachedResponse(cacheKey, result, 300); // Cache for 5 mins
    return result;
  } catch (error) {
    console.error("Search error:", error.message);
    throw error;
  }
}
