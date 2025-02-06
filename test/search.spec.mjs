import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modulePath = path.join(__dirname, "../src/services/searchService.mjs");

// Dynamically import the module
const { semanticSearch } = await import(modulePath);

const mockOpenAI = {
  chat: {
    completions: {
      create: async (input) => {
        if (input?.messages?.[0]?.content === "error") {
          throw new Error("Mocked search error");
        }
        return { choices: [{ message: { content: "Mocked search result" } }] };
      }
    }
  }
};

// Mock OpenAI Import
await import("../src/config/openAIConfig.mjs").then((module) => {
  module.default.chat = mockOpenAI.chat;
});

describe("semanticSearch", () => {
  it("should return search results", async () => {
    const result = await semanticSearch({ messages: [{ content: "Test query" }] }, "test-model");
    expect(result).toBe("Mocked search result");
  });

  it("should handle errors", async () => {
    await expect(semanticSearch({ messages: [{ content: "error" }] }, "test-model")).rejects.toThrow("Mocked search error");
  });
});
