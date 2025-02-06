import openai from "../config/openAIConfig.mjs";

export async function semanticSearch(query, model) {
  try {
    const completion = await openai.chat.completions.create({
      model: model || "gpt-4-turbo",
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
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Search error:", error.message);
    throw error;
  }
}
