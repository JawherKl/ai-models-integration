import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mockRedis = {
  get: async (key) => {
    if (key === "hit") return '"mocked-response"';
    return null;
  },
  setEx: async (key, ttl, value) => {
    return "OK";
  }
};

const redisConfigModule = await import("../../src/config/redisConfig.mjs");
redisConfigModule.default.get = mockRedis.get;
redisConfigModule.default.setEx = mockRedis.setEx;

const modulePath = path.join(__dirname, "../../src/services/cacheService.mjs");
const { getCachedResponse, setCachedResponse } = await import(modulePath);

describe("cacheService", () => {
  it("should return a cached response if found", async () => {
    const result = await getCachedResponse("hit");
    expect(result).toBe("mocked-response");
  });

  it("should return null if cache miss", async () => {
    const result = await getCachedResponse("miss");
    expect(result).toBeNull();
  });

  it("should set a new cache value", async () => {
    const res = await setCachedResponse("new-key", "new-value", 120);
    expect(res).toBeUndefined();
  });
});
