import openai from "../config/openAIConfig.mjs";

/**
 * Dispatch a prompt to any OpenRouter-supported model.
 * @param {Object} options
 * @param {string} options.model - Model name (e.g., mistralai/mistral-small)
 * @param {Array} options.messages - Chat messages [{ role, content }]
 * @param {number} [options.temperature=0.3]
 * @param {number} [options.max_tokens=256]
 * @param {boolean} [options.stream=false]
 * @returns {Promise<Object>} LLM response
 */
export async function callLLM({ model, messages, temperature = 0.3, max_tokens = 256, stream = false }) {
  return await openai.chat.completions.create({
    model,
    messages,
    temperature,
    max_tokens,
    ...(stream ? { stream: true } : {})
  });
}
