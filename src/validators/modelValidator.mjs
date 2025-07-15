import { z } from "zod";
import { MODEL_REGISTRY } from "../constants/supportedModels.mjs";

const allowedAliases = MODEL_REGISTRY.map((m) => m.alias);

export const modelInputSchema = z.object({
  model: z.enum(allowedAliases, {
    errorMap: () => ({ message: `Model must be one of: ${allowedAliases.join(", ")}` })
  }),
});
