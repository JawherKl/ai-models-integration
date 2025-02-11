import openai from "../config/openAIConfig.mjs";

export async function analyzeData(text, model) {
  try {
    const completion = await openai.chat.completions.create({
      model: model || "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Analyze this text for sentiment, key topics, and named entities."
        },
        { role: "user", content: text }
      ],
      temperature: 0.1,
      max_tokens: 256
    });
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Analysis error:", error.message);
    throw error;
  }
}
