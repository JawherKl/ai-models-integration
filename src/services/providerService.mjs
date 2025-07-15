import { MODEL_REGISTRY } from "../constants/supportedModels.mjs";

/**
 * Get full model technical name from alias like "chatgpt"
 */
export function resolveModelAlias(alias) {
  const model = MODEL_REGISTRY.find((m) => m.alias === alias);
  if (!model) {
    throw new Error(`Unsupported model alias: "${alias}"`);
  }
  return model.technical;
}

/**
 * Return list of all supported models
 */
export function listAvailableModels() {
  return MODEL_REGISTRY.map(({ alias, name, technical, provider }) => ({
    alias,
    name,
    technical,
    provider
  }));
}
