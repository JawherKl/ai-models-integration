import { modelInputSchema } from "../../src/validators/modelValidator.mjs";

describe("modelInputSchema", () => {
  it("should pass with valid alias", () => {
    const result = modelInputSchema.safeParse({ model: "chatgpt" });
    expect(result.success).toBe(true);
  });

  it("should fail with invalid alias", () => {
    const result = modelInputSchema.safeParse({ model: "unknown" });
    expect(result.success).toBe(false);
    expect(result.error.errors[0].message).toMatch(/Model must be one of:/);
  });
});
