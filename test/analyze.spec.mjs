import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modulePath = path.join(__dirname, "../src/services/analyzeService.mjs");

// Dynamically import the module
const { analyzeData } = await import(modulePath);

const mockOpenAI = {
  chat: {
    completions: {
      create: async (input) => {
        if (input?.messages?.[0]?.content === "error") {
          throw new Error("Mocked error");
        }
        return { choices: [{ message: { content: "Mocked analysis result" } }] };
      }
    }
  }
};

// Mock OpenAI Import
await import("../src/config/openAIConfig.mjs").then((module) => {
  module.default.chat = mockOpenAI.chat;
});

describe("analyzeData", () => {
  it("should return analyzed data", async () => {
    const result = await analyzeData("Test input text");
    expect(result).toBe("Mocked analysis result");
  });

  it("should handle errors", async () => {
    await expect(analyzeData({ messages: [{ content: "error" }] })).rejects.toThrow("Mocked error");
  });
});
