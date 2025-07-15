import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockOpenAI = {
  chat: {
    completions: {
      create: async (input) => {
        if (input?.messages?.[1]?.content === "error") {
          throw new Error("Mocked error");
        }
        return { choices: [{ message: { content: "Mocked analysis result" } }] };
      }
    }
  }
};

const openAIConfigModule = await import("../src/config/openAIConfig.mjs");
openAIConfigModule.default.chat = mockOpenAI.chat;

const modulePath = path.join(__dirname, "../src/services/analyzeService.mjs");
const { analyzeData } = await import(modulePath);

describe("analyzeData", () => {
  it("should return analyzed data", async () => {
    const result = await analyzeData("Test input text", "chatgpt");
    expect(result).toBe("Mocked analysis result");
  });

  it("should handle errors", async () => {
    await expect(analyzeData("error", "chatgpt")).rejects.toThrow("Mocked error");
  });
});
