import { resolveModelAlias, listAvailableModels } from "../../src/services/providerService.mjs";

describe("providerService", () => {
  it("should resolve a valid model alias", () => {
    const result = resolveModelAlias("chatgpt");
    expect(result).toBe("openai/gpt-4o-mini");
  });

  it("should throw on invalid model alias", () => {
    expect(() => resolveModelAlias("fake-model")).toThrow("Unsupported model alias: \"fake-model\"");
  });

  it("should list available models", () => {
    const models = listAvailableModels();
    expect(Array.isArray(models)).toBe(true);
    expect(models.length).toBeGreaterThan(0);
    expect(models[0]).toHaveProperty("alias");
    expect(models[0]).toHaveProperty("technical");
    expect(models[0]).toHaveProperty("provider");
  });
});
