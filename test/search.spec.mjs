import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockOpenAI = {
  chat: {
    completions: {
      create: async (input) => {
        if (input?.messages?.[1]?.content === "error") {
          throw new Error("Mocked search error");
        }
        return { choices: [{ message: { content: "Mocked search result" } }] };
      }
    }
  }
};

const openAIConfigModule = await import("../src/config/openAIConfig.mjs");
openAIConfigModule.default.chat = mockOpenAI.chat;

const modulePath = path.join(__dirname, "../src/services/searchService.mjs");
const { semanticSearch } = await import(modulePath);

describe("semanticSearch", () => {
  it("should return search results", async () => {
    const result = await semanticSearch("Test query", "deepseek");
    expect(result).toBe("Mocked search result");
  });

  it("should handle errors", async () => {
    await expect(semanticSearch("error", "deepseek")).rejects.toThrow("Mocked search error");
  });
});
